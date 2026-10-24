p = 'denetim/dogu/birlestir.js'
s = open(p, encoding='utf-8').read()
eski1 = "    const p0 = s[0]; if (p0.d === '__BOSLUK__' || p0.f === '0500-01-01') continue;\n    const g0 = GUNM.gun(p0.f), kisa = y.ad.split(' (')[0];"
yeni1 = ("    const p0 = s[0]; if (p0.f === '0500-01-01') continue;\n"
         "    const sahip = p0.d !== '__BOSLUK__' ? p0.d : ((String(p0.kaynak || '').match(/sahip ([a-z0-9-]+)/) || [])[1] || null);   // boyasız sahip kaynak metninde\n"
         "    const g0 = GUNM.gun(p0.f), kisa = y.ad.split(' (')[0];")
assert eski1 in s
s = s.replace(eski1, yeni1)
eski2 = "sinir.push({ t: p0.f, devlet: p0.d, taraflar: [p0.d], b: kisa + ': ' + p0.d + ' egemenliğinde ilk kaynaklı kayıt (kuruluş/ilk tanık)',"
yeni2 = "sinir.push({ t: p0.f, devlet: sahip || undefined, taraflar: sahip ? [sahip] : [], b: kisa + ': ' + (sahip ? sahip + ' egemenliğinde ' : '') + 'ilk kaynaklı kayıt (kuruluş/ilk tanık)',"
assert eski2 in s
s = s.replace(eski2, yeni2)
open(p, 'w', encoding='utf-8', newline='').write(s)
print('ok')
