(function(root){
function fitLabelText(text,maxWidth,measure){if(maxWidth<=0)return '';if(measure(text)<=maxWidth)return text;let chars=typeof Intl.Segmenter==='function'?Array.from(new Intl.Segmenter('ko',{granularity:'grapheme'}).segment(text),s=>s.segment):Array.from(text);while(chars.length&&measure(chars.join('')+'…')>maxWidth)chars.pop();return measure('…')<=maxWidth?chars.join('')+'…':'';}
function labelBox(x,y,width,W,H){const inset=8,w=Math.min(Math.max(1,width),Math.max(1,W-inset*2)),h=Math.min(26,Math.max(1,H-inset*2));return {x:Math.max(inset+w/2,Math.min(W-inset-w/2,x)),y:Math.max(inset+h/2,Math.min(H-inset-h/2,y)),w,h};}
root.fitLabelText=fitLabelText;root.labelBox=labelBox;if(typeof module!=='undefined')module.exports={fitLabelText,labelBox};
})(typeof window!=='undefined'?window:globalThis);
