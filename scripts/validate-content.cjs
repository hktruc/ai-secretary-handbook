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
assert(ui.indexOf('<section id="vi-sao"')<ui.indexOf('<section id="ket-qua"'),'WHY must precede outcome and HOW');
assert(ui.includes('href="#bai-viet/${a.slug}/vi-sao"'),'WHY TOC link is required');
console.log(`PASS: ${articles.length} articles, required WHY + concrete contexts, unique slugs, existing topics, steps/sources and WHY-before-HOW template.`);
