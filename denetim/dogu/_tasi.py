p = 'denetim/dogu/birlestir.js'
L = open(p, encoding='utf-8').read().split('\n')
bas = next(i for i, s in enumerate(L) if s.startswith('// ZİNCİR BAŞI MADDESİ'))
son = next(i for i, s in enumerate(L) if s.startswith('// kuyruk (yeni yerleşim'))
blok = L[bas:son]
rest = L[:bas] + L[son:]
hedef = next(i for i, s in enumerate(rest) if s.startswith('// AYNI OLAY, birçok şehir'))
yeni = rest[:hedef] + blok + rest[hedef:]
metin = '\n'.join(yeni)
metin = metin.replace("b: ad.replace(/\\s*\\(.*\\)\\s*$/, '') + ': ' + s[0].d + ' hâkimiyetinde (kaynaklı sahiplik zincirinin ilk günü)',",
                      "b: ad.replace(/\\s*\\(.*\\)\\s*$/, '') + ': ' + s[0].d + ' egemenliği başladı',")
open(p, 'w', encoding='utf-8', newline='').write(metin)
print('tasindi', bas, son, hedef)
