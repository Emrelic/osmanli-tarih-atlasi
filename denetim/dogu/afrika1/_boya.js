const fs = require('fs');
const src = fs.readFileSync('arac/renkler.py', 'utf8');
const ids = ['auris-masties','altava-mauro-roma','bizans-afrika-eksarhligi','wagadu-gane-erken','nekor-emirligi','ibadi-imamlik-trablus','ifraniler-tilimsan','sahra-sanhaca','kevkev-erken','tekrur-erken','zawila-hattabiler','kafsa-benirend-emirligi','kabis-emirligi','sfaks-hammu-emirligi','norman-ifrikiye','sfaks-firyani-emirligi','vandal','bizans','emevi','abbasi','aglebi','fatimi','ziriler','hafsi','muvahhidler','murabitlar','ganiyeler','idrisi','endulus-emevi','garamant','eyyubi','kanem-bornu','kevkev','hulefa-yi-rasidin','mali-imparatorlugu','gane','tekrur-kralligi'];
const yok = [], var_ = [];
for (const id of ids) { (new RegExp("['\"]" + id + "['\"]").test(src) ? var_ : yok).push(id); }
console.log('BOYALAR YOK:', yok.join(', '));
console.log('VAR sayısı:', var_.length);
