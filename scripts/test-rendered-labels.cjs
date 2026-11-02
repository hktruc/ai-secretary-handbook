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
// Every editorial doorway must retain a real article or an existing topic route.
const known=new Set(slugs);
const topics=vm.runInContext('data.topics.map(t=>t.id)',c);
function links(html,label){for(const [,slug] of html.matchAll(/href="#bai-viet\/([^/"#]+)(?:\/[^"#]+)?"/g))assert(known.has(slug),`${label}: unknown article ${slug}`);for(const [,topic]of html.matchAll(/href="#chu-de\/([^"#]+)"/g))assert(topics.includes(topic),`${label}: unknown topic ${topic}`)}
links(body.innerHTML,'home');
for(const topic of topics){vm.runInContext(`showCategory(${JSON.stringify(topic)})`,c);const html=element('#kh-category').innerHTML;check(html,topic);links(html,topic);assert(html.includes('category-grid'));const expected=vm.runInContext(`allArticles.filter(a=>a.topic===${JSON.stringify(topic)}).length`,c);assert.equal((html.match(/class="kh-card"/g)||[]).length,expected)}
for(const slug of slugs){vm.runInContext(`showArticle(allArticles.find(a=>a.slug===${JSON.stringify(slug)}))`,c);const html=element('#kh-article').innerHTML;links(html,slug);assert(html.includes('kh-breadcrumb'));assert.equal((html.match(/class="kh-card"/g)||[]).length,3);assert(html.indexOf('id="vi-sao"')<html.indexOf('id="chuan-bi"'));for(const id of ['vi-sao','ket-qua','chuan-bi','cac-buoc','mau-lenh','kiem-tra','gioi-han','nguon'])assert(html.includes(`id="${id}"`),`${slug}: lost ${id}`)}
assert(!/google-button|Tiếp tục với Google/.test(body.innerHTML),'deferred login should not be a primary action');
console.log(`PASS editorial navigation: ${topics.length} topic pages, ${slugs.length} article routes, related links, legacy anchors and public-only calls to action.`);
// Optional original artwork must load safely without changing unillustrated guides.
for(const a of vm.runInContext('allArticles.filter(a=>a.illustration)',c)){
 assert.equal(a.illustration.src,`illustrations/${a.slug}.svg`);assert(a.illustration.alt.length>35);assert(/minh họa/i.test(a.illustration.caption));const svg=fs.readFileSync(a.illustration.src,'utf8');assert(/viewBox="0 0 960 540"/.test(svg));assert(!/<script|<foreignObject|(?:href|src)="https?:/i.test(svg));
 vm.runInContext(`showArticle(allArticles.find(a=>a.slug===${JSON.stringify(a.slug)}))`,c);const html=element('#kh-article').innerHTML;assert(html.includes(`src="${a.illustration.src}"`));assert(html.includes('<figcaption>'));if(a.promptLabel)assert(html.includes(`<h2>${a.promptLabel}</h2>`));
}
console.log('PASS optional individual artwork, captions and copy-template labels.');
