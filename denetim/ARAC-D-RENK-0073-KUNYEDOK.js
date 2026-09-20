// devletler.js kunyelerini JSON'a doker (id, ad, f, t, harita)
const fs = require('fs'), vm = require('vm');
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data/devletler.js', 'utf8'), sandbox);
const D = (sandbox.window.DEVLETLER || []).map(d => ({
  id: d.id, ad: d.ad, f: d.f || null, t: d.t || null, harita: d.harita || null
}));
fs.writeFileSync(process.argv[2], JSON.stringify(D));
console.log('kunye: ' + D.length + ' · f alani dolu: ' + D.filter(x => x.f).length +
            ' · t alani dolu: ' + D.filter(x => x.t).length);
