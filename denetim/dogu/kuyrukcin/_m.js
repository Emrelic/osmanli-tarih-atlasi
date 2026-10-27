// node _m.js <ay-ilk-gun Julyen YYYY-MM-DD> <ay-ilk-gun-ganzhi> <hedef-ganzhi>  -> hedef gunun Julyen tarihi (ay icinde, <=30 gun)
const GAN='甲乙丙丁戊己庚辛壬癸',ZHI='子丑寅卯辰巳午未申酉戌亥';
const idx=s=>{for(let i=0;i<60;i++) if(GAN[i%10]+ZHI[i%12]===s) return i; return -1;};
function jdn(y,m,d){const a=Math.floor((14-m)/12),yy=y+4800-a,mm=m+12*a-3;return d+Math.floor((153*mm+2)/5)+365*yy+Math.floor(yy/4)-32083;}
function jul(j){const c=j+32082,dd=Math.floor((4*c+3)/1461),e=c-Math.floor(1461*dd/4),m=Math.floor((5*e+2)/153);return [dd-4800+Math.floor(m/10),m+3-12*Math.floor(m/10),e-Math.floor((153*m+2)/5)+1];}
const [,,bas,g0,g1]=process.argv;
const [y,m,d]=bas.split('-').map(Number);
const diff=((idx(g1)-idx(g0))%60+60)%60;
const r=jul(jdn(y,m,d)+diff);
console.log(`${bas} ${g0} + ${diff} gun = ${r[0]}-${String(r[1]).padStart(2,'0')}-${String(r[2]).padStart(2,'0')} (${g1})`);
