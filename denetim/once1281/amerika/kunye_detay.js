global.window=global; const fs=require('fs');
eval(fs.readFileSync('data/devletler.js','utf8'));
const ids=process.argv.slice(2);
for(const d of window.DEVLETLER){ if(ids.includes(d.id)){
 console.log('## '+d.id+' | '+d.ad+' | '+d.f+' → '+d.t+' | baskent: '+d.baskent+' | '+d.tur+' | kesinlik '+JSON.stringify(d.kesinlik||'')+' | boya_gerekli '+d.boya_gerekli);
 console.log('  kaynak: '+JSON.stringify(d.kaynak).slice(0,700));
 console.log('  ozet: '+(d.ozet||'').slice(0,400));
}}
