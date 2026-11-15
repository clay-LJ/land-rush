const assert=require('assert'),{Territory}=require('./engine');
const g=Object.create(Territory.prototype),p=(a,b)=>g.combatProbability(a,b);
for(let a=1;a<=100;a++)for(let b=1;b<=100;b++){
const base=.5+.3*(a-b)/(a+b),v=p(a,b);assert(v>0&&v<1);assert(Math.abs(v+p(b,a)-1)<1e-12);assert(Math.abs(v-base)<=.04+1e-12);
if(a>b)assert(v>.5);if(a<b)assert(v<.5);if(Math.min(a,b)/Math.max(a,b)>=.5)assert(Math.abs(v-base)<1e-12);
assert(p(a+1,b)>=v-1e-12,'Increasing own territory must never lower attack success');assert(p(a,b+1)<=v+1e-12,'Increasing opponent territory must never raise attack success');}
assert(p(1,10)>.5+.3*(1-10)/(1+10));assert.equal(p(10,10),.5);console.log('last-stand symmetry, bounded bonus, big-side advantage, monotonicity: passed');
