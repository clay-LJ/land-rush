const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {Territory,parseEntries}=require('./engine.js');
let constructions=0;
class CountTerritory extends Territory{constructor(...args){super(...args);constructions++;}}
const elements=new Map();function element(id){if(!elements.has(id))elements.set(id,{value:id==='entries'?'A*10\nB*5':id==='bombs'?'normal':'',disabled:false,textContent:'',dataset:{},handlers:{},classList:{toggle(){}},addEventListener(k,fn){this.handlers[k]=fn;}});return elements.get(id);}
const samples=[{dataset:{sample:'20'}}],speeds=[1,2,4,8,10].map(x=>({dataset:{speed:String(x)},classList:{toggle(){}}}));
const c={$:element,Territory:CountTerritory,parseEntries,Object,JSON,document:{querySelectorAll:s=>s==='[data-sample]'?samples:speeds},render(){},updateUI(){},populateFocus(){},closeTiePopup(){},sound:{stopAll(){}},speed:4,game:null,initialLayout:null,arrangedSignature:null,arrangementDirty:false,running:false};
vm.createContext(c);const app=fs.readFileSync(__dirname+'/app.js','utf8');vm.runInContext(app.slice(app.indexOf('function copyInitialBoard('),app.indexOf('function isExpanded(')),c);
c.preview();assert.equal(constructions,1);const first=c.game,grid=Array.from(first.grid),initial=Array.from(c.initialLayout.grid);
element('bombs').value='strong';element('bombs').handlers.change();assert.equal(c.game,first);assert.equal(c.game.bombs,'strong');assert.equal(constructions,1);assert.deepEqual(Array.from(c.game.grid),grid);
element('start').onclick();assert.equal(c.game,first);assert(c.running);assert.deepEqual(Array.from(c.game.grid),grid);assert(element('arrange').disabled);c.game.tick(.05);assert(c.game.time>0);
element('reset').onclick();assert(!c.running);assert.equal(c.game.time,0);assert.deepEqual(Array.from(c.game.grid),initial);assert.equal(c.game.bombs,'strong');assert.equal(constructions,1);assert(!element('arrange').disabled);
element('entries').value='A*10\nB*5\nC*2';element('entries').handlers.input();assert(c.arrangementDirty);assert(element('start').disabled);assert.equal(constructions,1);const old=c.game;element('start').onclick();assert.equal(c.game,old);assert(!c.running);
element('arrange').onclick();assert.equal(constructions,2);assert.equal(c.game.players.length,3);assert(!c.arrangementDirty);assert(!element('start').disabled);
samples[0].onclick();assert(c.arrangementDirty);assert.equal(constructions,2);element('reset').onclick();assert(c.arrangementDirty);assert.equal(c.game.players.length,3);assert.equal(constructions,2);element('arrange').onclick();assert.equal(c.game.players.length,20);assert.equal(constructions,3);
// Even a programmatic text change without a DOM input event cannot start stale data.
element('entries').value='A,B';element('start').onclick();assert(c.arrangementDirty);assert(!c.running);assert.equal(constructions,3);
assert(app.includes('running=false,speed=4,'));
console.log('Default 4x, explicit arrangement, unchanged bomb layout, same-object start, initial-layout reset, dirty/sample guards passed.');
