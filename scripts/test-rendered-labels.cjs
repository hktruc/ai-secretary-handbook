'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const elements=new Map();
const element=selector=>{if(!elements.has(selector))elements.set(selector,{innerHTML:'',textContent:'',value:'',hidden:false,classList:{toggle(){},remove(){},contains(){return false}},setAttribute(){},removeAttribute(){},addEventListener(){},querySelectorAll(){return []},scrollIntoView(){}});return elements.get(selector)};
const body=element('body');
const c={window:{addEventListener(){},scrollTo(){}},document:{body,title:'',querySelector:element,querySelectorAll(){return []},addEventListener(){},getElementById:element},location:{hash:'#/'},requestAnimationFrame:f=>f(),setTimeout(){}};
vm.createContext(c);vm.runInContext(fs.readFileSync('draft/content.js','utf8'),c);vm.runInContext(fs.readFileSync('knowledge.js','utf8'),c);
const bad=/Vì sao nên học|Vì sao tìm hiểu|Khi nào có thể áp dụng|Bắt đầu từ lý do|Bạn sẽ làm được gì/iu;
function check(html,label){assert(!bad.test(html),`${label}: rejected public framework label`)}
check(body.innerHTML,'dashboard');check(element('#kh-grid').innerHTML,'article cards');
const slugs=vm.runInContext('allArticles.map(a=>a.slug)',c);
for(const slug of slugs){vm.runInContext(`showArticle(allArticles.find(a=>a.slug===${JSON.stringify(slug)}))`,c);const html=element('#kh-article').innerHTML;check(html,slug);assert(html.includes('<div id="ket-qua" class="kh-outcome-wrap">'),`${slug}: missing outcome`);assert(!/<(?:h[1-6]|p)[^>]*>Kết quả<\//u.test(html),`${slug}: generic outcome label`);assert.equal((html.match(/<div id="vi-sao" class="kh-intro">/g)||[]).length,1);const toc=html.match(/<aside>(.*?)<\/aside>/s)?.[1]||'';assert(!/vi-sao|ket-qua/.test(toc),`${slug}: framework TOC entry`);assert(toc.includes('Chuẩn bị'),`${slug}: useful section navigation lost`)}
console.log(`PASS rendered labels: dashboard, cards, all ${slugs.length} article openings, headings and TOCs.`);
