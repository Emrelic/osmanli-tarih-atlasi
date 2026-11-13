const fs = require('fs');
for (const f of process.argv.slice(2)) {
  global.window = {};
  try { new Function('window', fs.readFileSync(f, 'utf8') + ';')(global.window); console.log('OK', f); }
  catch (e) { console.log('HATA', f, e.message); process.exitCode = 1; }
}
