'use strict';
// Dependency-free editorial/schema checks. Run before publishing any article.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const context = {window:{}};
vm.runInNewContext(fs.readFileSync('draft/content.js','utf8'),context);
const data=context.window.HANDBOOK_CONTENT;
const articles=[...data.articles,...data.cases];
const seen=new Set(), intros=new Set();
const text=(value,label,min=1,max=Infinity)=>assert(typeof value==='string'&&value.trim().length>=min&&value.length<=max,`${label}: expected ${min}–${max} characters`);
for(const a of articles){
 text(a.slug,'slug'); assert(!seen.has(a.slug),`Duplicate slug: ${a.slug}`); seen.add(a.slug);
 assert(data.topics.some(t=>t.id===a.topic),`${a.slug}: unknown topic`);
 text(a.title,`${a.slug}.title`); text(a.outcome,`${a.slug}.outcome`);
 assert(a.why&&typeof a.why==='object',`${a.slug}: WHY is required before HOW`);
 text(a.why.benefit,`${a.slug}.why.benefit`,40,600);
 text(a.why.context,`${a.slug}.why.context`,40,650);
 assert(!intros.has(a.why.benefit),`${a.slug}: duplicated WHY paragraph`);intros.add(a.why.benefit);
 assert(Array.isArray(a.why.situations)&&a.why.situations.length>=2&&a.why.situations.length<=3,`${a.slug}: supply 2–3 concrete use situations`);
 a.why.situations.forEach((x,i)=>text(x,`${a.slug}.why.situations[${i}]`,20,300));
 assert(new Set(a.why.situations).size===a.why.situations.length,`${a.slug}: duplicate situations`);
 assert(!/TODO|TBD|\[điền|lorem ipsum/i.test(JSON.stringify(a.why)),`${a.slug}: placeholder WHY`);
 assert(Array.isArray(a.steps)&&a.steps.length>0,`${a.slug}: steps required`);
 assert(Array.isArray(a.sources)&&a.sources.length>0,`${a.slug}: sources required`);
 for(const source of a.sources)assert(/^https:\/\//.test(source.url),`${a.slug}: HTTPS source required`);
}
const ui=fs.readFileSync('knowledge.js','utf8');
assert(ui.includes('<div id="vi-sao" class="kh-intro">'),'Natural intro is required');
assert(ui.indexOf('<div id="vi-sao"')<ui.indexOf('<div id="ket-qua"'),'Intro must precede outcome and instructions');
assert(!/Vì sao nên học|Vì sao tìm hiểu|Khi nào có thể áp dụng|Bắt đầu từ lý do/.test(ui),'Do not display formulaic editorial headings');
assert(!ui.includes('href="#bai-viet/${a.slug}/vi-sao"'),'Do not add an editorial-framework TOC label');
console.log(`PASS: ${articles.length} natural intros, concrete contexts, unique slugs, topics, steps/sources and no formulaic headings.`);

// Regression: screenshot report included an outcome heading, not just WHY.
const forbiddenLabels=/Vì sao nên học|Vì sao tìm hiểu|Khi nào có thể áp dụng|Bắt đầu từ lý do|Bạn sẽ làm được gì/iu;
for(const path of ['knowledge.js','index.html'])assert(!forbiddenLabels.test(fs.readFileSync(path,'utf8')),`${path}: forbidden public framework label`);
assert(!ui.includes('href="#bai-viet/${a.slug}/ket-qua"'),'Outcome text must flow without a generic TOC entry');
assert(!ui.includes('<p class="kh-eyebrow">Kết quả</p>'),'Do not duplicate outcome as a framework heading');
assert(ui.includes('<div id="ket-qua" class="kh-outcome-wrap"><p class="kh-outcome">${a.outcome}</p></div>'),'Preserve concrete outcome text and old anchor without heading');

require("./test-rendered-labels.cjs");
