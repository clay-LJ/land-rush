// Owner-approved 252 menu catalogue; no external requests.
const lunchData=typeof module!=='undefined'&&module.exports?require('./lunch-menu'):LUNCH_DATA;
const VEGAN='비건 가능(재료 확인)',LIGHT='가볍게 먹기(조리·양 확인)',LUNCH_MENU={};
for(const item of lunchData){for(const tag of item.tags)(LUNCH_MENU[tag]??=[]).push(item.name);if(item.special.veganCandidate)(LUNCH_MENU[VEGAN]??=[]).push(item.name);if(item.special.lighterMealCandidate)(LUNCH_MENU[LIGHT]??=[]).push(item.name);}
function lunchEntries(categories){const weights=new Map();for(const category of new Set(categories))for(const name of new Set(LUNCH_MENU[category]||[]))weights.set(name,(weights.get(name)||0)+1);return [...weights].map(([name,weight])=>({name,weight}));}
function lunchNames(categories){return lunchEntries(categories).map(x=>x.name);}
function lunchProblem(entries){if(entries.length<2)return '메뉴를 2개 이상 선택해 주세요.';if(entries.length>500)return '최대 500개까지 참가할 수 있습니다. 분류 선택을 줄여 주세요. 자동으로 제외하지 않습니다.';if(entries.some(x=>x.weight>100))return '메뉴당 시작 땅은 최대 100칸입니다. 분류 선택을 줄여 주세요.';return ''; }
if(typeof module!=='undefined'&&module.exports)module.exports={LUNCH_MENU,lunchNames,lunchEntries,lunchProblem};
if(typeof document!=='undefined'){
 const ld=id=>document.getElementById(id),dialog=ld('lunchDialog');let previousOverflow='';
 function selected(){return [...dialog.querySelectorAll('input:checked')].map(x=>x.value);}
 function refresh(){const entries=lunchEntries(selected()),problem=lunchProblem(entries);ld('lunchCount').textContent=`${entries.length} / 500개 메뉴 · 총 시작 땅 ${entries.reduce((s,x)=>s+x.weight,0)}칸`;ld('lunchApply').disabled=!!problem;ld('lunchError').textContent=problem;ld('lunchPreview').textContent=entries.length?entries.map(x=>`${x.name} ×${x.weight}`).join(' · '):'분류를 하나 이상 선택해 주세요.';const chosen=new Set(selected());const conditional=lunchData.filter(x=>(chosen.has(VEGAN)&&x.special.veganCandidate)||(chosen.has(LIGHT)&&x.special.lighterMealCandidate));ld('lunchConditions').textContent=conditional.map(x=>`${x.name}: ${x.conditions.join(' ')}${x.mealSuggestion?' 식사 구성 예: '+x.mealSuggestion:''}`).join('\n');ld('lunchConditions').hidden=!conditional.length;}
 const cuisineOrder=['한식','중식','일식','양식','동남아식','베트남식','태국식','인도네시아식','말레이시아식','싱가포르식','인도식','중동식','지중해식','북아프리카식','멕시코·중남미식']; const categoryOrder=[...cuisineOrder.filter(x=>LUNCH_MENU[x]),...Object.keys(LUNCH_MENU).filter(x=>!cuisineOrder.includes(x)&&x!==VEGAN&&x!==LIGHT).sort((a,b)=>a.localeCompare(b,'ko')),VEGAN,LIGHT];
 for(const category of categoryOrder){const label=document.createElement('label'),input=document.createElement('input');input.type='checkbox';input.value=category;input.checked=category!==VEGAN&&category!==LIGHT;input.addEventListener('change',refresh);label.append(input,document.createTextNode(`${category} (${LUNCH_MENU[category].length})`));ld('lunchCategories').append(label);}
 ld('lunchOpen').onclick=()=>{if(ld('entries').disabled)return;previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';refresh();dialog.showModal();};
 ld('lunchAll').onclick=()=>{dialog.querySelectorAll('input').forEach(x=>x.checked=true);refresh();};
 ld('lunchNone').onclick=()=>{dialog.querySelectorAll('input').forEach(x=>x.checked=false);refresh();};
 ld('lunchClose').onclick=()=>dialog.close();
 dialog.addEventListener('close',()=>{document.body.style.overflow=previousOverflow;ld('lunchOpen').focus({preventScroll:true});});
 dialog.addEventListener('keydown',e=>{if(e.key==='Escape')e.stopPropagation();});
 ld('lunchApply').onclick=()=>{if(ld('entries').disabled)return;const entries=lunchEntries(selected());if(lunchProblem(entries)){refresh();return;}ld('entries').value=entries.map(x=>x.name+'*'+x.weight).join('\n');markArrangementDirty('점심 메뉴를 불러왔습니다. 배치 버튼으로 지도에 반영해 주세요.');dialog.close();};
}
