const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const elements=new Map(),labels=[];
function el(id){if(!elements.has(id))elements.set(id,{id,disabled:false,hidden:false,textContent:'',value:'',handlers:{},append(...items){if(id==='lunchCategories')labels.push(...items);},addEventListener(k,f){this.handlers[k]=f;},focus(){this.focused=true;},showModal(){this.open=true;},close(){this.open=false;this.handlers.close();}});return elements.get(id);}
const inputs=()=>labels.map(label=>label.children[0]);
el('lunchDialog').querySelectorAll=selector=>inputs().filter(x=>selector!=='input:checked'||x.checked);
let dirty=0;const context={require,console,document:{body:{style:{overflow:'auto'}},getElementById:el,createTextNode:text=>text,createElement:tag=>({tag,children:[],append(...items){this.children.push(...items);},addEventListener(k,f){this[k]=f;}})},module:{exports:{}},markArrangementDirty(){dirty++;}};
vm.createContext(context);vm.runInContext(fs.readFileSync(__dirname+'/lunch.js','utf8'),context);
assert.equal(inputs().length,15);assert.equal(inputs().filter(x=>x.checked).length,14);
el('lunchOpen').onclick();assert(el('lunchDialog').open);assert(el('lunchCount').textContent.startsWith('72 / 72'));assert.equal(context.document.body.style.overflow,'hidden');assert(el('lunchConditions').hidden);
el('lunchNone').onclick();assert(el('lunchApply').disabled);assert(el('lunchCount').textContent.startsWith('0 / 72'));
for(const input of inputs())input.checked=['일식','고기','튀김'].includes(input.value);
inputs()[0].change();assert(el('lunchPreview').textContent.includes('돈가스 ×3'));
el('lunchApply').onclick();assert.equal(dirty,1);assert(el('entries').value.includes('돈가스*3'));assert(!el('lunchDialog').open);assert.equal(context.document.body.style.overflow,'auto');assert(el('lunchOpen').focused);
el('lunchOpen').onclick();el('lunchAll').onclick();assert.equal(inputs().filter(x=>x.checked).length,15);assert(!el('lunchConditions').hidden);assert(el('lunchConditions').textContent.includes('샐러드'));el('lunchClose').onclick();assert(!el('lunchDialog').open);
el('entries').disabled=true;el('lunchOpen').onclick();assert(!el('lunchDialog').open);el('lunchApply').onclick();assert.equal(dirty,1);
console.log('Lunch dialog DOM simulation passed: 15 categories, count, none/all, weight3, apply, close/reopen, focus/scroll and in-game guards.');
