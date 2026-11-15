const assert=require('assert'),{fitLabelText,labelBox}=require('./labels');
for(let W of [240,280,320,375,600,1200])for(let H of [100,220,330,520])for(let x of [-300,0,W-1,W,W+400])for(let y of [-100,0,H,H+100])for(let width of [120,250,500]){let b=labelBox(x,y,width,W,H);assert(b.x-b.w/2>=7.99);assert(b.x+b.w/2<=W-7.99);assert(b.y-b.h/2>=7.99);assert(b.y+b.h/2<=H-7.99);}
for(let text of ['#500 매우매우아주긴한글참가자이름의끝까지','👨‍👩‍👦 이모지 이름','WWWWWWWWWWWWWWWWW'])for(let n of [10,50,100,250])assert(Array.from(fitLabelText(text,n,t=>Array.from(t).length*12)).length*12<=n);
console.log('Label edge bounds and measured text widths passed');
