(function(root){
class MatchSound{
 constructor(){this.context=null;this.master=null;this.enabled=false;this.volume=.35;this.last=-Infinity;this.played=0;this.sources=new Set();this.noise=null;}
 async toggle(){if(this.enabled){this.enabled=false;this.stopAll();if(this.master)this.master.gain.value=0;return false;}const Audio=root.AudioContext||root.webkitAudioContext;if(!Audio)throw Error('이 브라우저는 효과음을 지원하지 않습니다.');this.context=this.context||new Audio();await this.context.resume();if(this.context.state!=='running')throw Error('브라우저에서 소리 재생이 차단되었습니다. 버튼을 다시 눌러 주세요.');if(!this.master){this.master=this.context.createGain();this.master.connect(this.context.destination);}this.enabled=true;this.master.gain.value=this.volume;this.play('ready',true);return true;}
 setVolume(v){this.volume=Math.max(0,Math.min(1,v));if(this.master)this.master.gain.value=this.enabled?this.volume:0;}
 stopAll(){for(const source of this.sources){try{source.stop();}catch(e){}try{source.disconnect();}catch(e){}}this.sources.clear();this.last=-Infinity;}
 register(source,gain,end){this.sources.add(source);source.connect(gain);gain.connect(this.master);source.onended=()=>{this.sources.delete(source);source.disconnect();gain.disconnect();};source.stop(end);}
 tone(a,b,d,t,shape='sine',amp=.12){const o=this.context.createOscillator(),g=this.context.createGain();o.type=shape;o.frequency.setValueAtTime(a,t);o.frequency.exponentialRampToValueAtTime(b,t+d);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(amp,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.start(t);this.register(o,g,t+d+.03);}
 burst(t,d=.45,amp=.18){if(!this.context.createBufferSource)return;const c=this.context;if(!this.noise){this.noise=c.createBuffer(1,c.sampleRate,c.sampleRate);const data=this.noise.getChannelData(0);let seed=74321;for(let i=0;i<data.length;i++){seed=(1664525*seed+1013904223)>>>0;data[i]=(seed/4294967296*2-1);}}const n=c.createBufferSource(),g=c.createGain();n.buffer=this.noise;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(amp,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+d);n.start(t);this.register(n,g,t+d+.02);}
 play(type,force=false){if(!this.enabled||!this.context||this.context.state!=='running'||this.volume<=0)return;const now=this.context.currentTime;if(!force&&now-this.last<.18)return;this.last=now;
 const sequences={out:[[480,180,.15,0],[260,90,.19,.12]],warning:[[700,1100,.09,0],[700,1100,.09,.15]],bomb:[[85,28,.42,0]],final:[[300,400,.13,0],[400,550,.13,.17]],win:[[523,523,.15,0],[659,659,.15,.17],[784,784,.4,.34]],ready:[[420,650,.15,0]],lead:[[440,660,.12,0]]};
 for(const [a,b,d,delay] of sequences[type]||sequences.out)this.tone(a,b,d,now+delay,type==='bomb'?'triangle':'sine',type==='warning'?.08:.12);
 if(type==='bomb')this.burst(now,.52,.24);
 if(type==='win')for(const delay of [.12,.65,1.2,1.75]){this.tone(360,1100,.16,now+delay,'sine',.045);this.burst(now+delay+.16,.34,.11);}
 this.played++;
 }
}
root.MatchSound=MatchSound;
})(typeof window!=='undefined'?window:globalThis);
