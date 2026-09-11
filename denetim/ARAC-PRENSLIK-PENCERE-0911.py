# -*- coding: utf-8 -*-
"""
ARAC-PRENSLIK-PENCERE-0911.py — PRENSLİK PENCERE görevi, 11 Eylül 2026

NE YAPAR: `data/devletler.js`teki HER künyenin (kronoloji[] alt-dizisi
DEĞİL, künyenin kendi üst-düzey `t:` alanı) `t:"1923-10-29"` olup
olmadığını tarar, ADIYLA listeler, ve `ozet:` alanında "1923 sonrasında
da sürdü" tarzı bir SERBEST METİN uyarısı olup olmadığını AYRICA sayar
(bu, künye yazarlarının bazılarının FARKINDA OLDUĞUNU ama bunun
YAPILANDIRILMIŞ bir alan OLMADIĞINI göstermek için). Yalnız OKUR,
`data/*.js`ye YAZMAZ.

🔴 D022 ÖNGÖRÜSÜ (ÖLÇÜMDEN ÖNCE YAZILDI VE COMMIT EDİLDİ):
  HİNDİSTAN KÜNYE II'nin bulduğu `nepal` deseni RASTGELE DEĞİL — atlasın
  ufku 1923-10-29'da bittiği için, o tarihte hâlâ İngiliz Hindistanı
  şemsiyesi altında YARI-ÖZERK yaşayan onlarca "prenslik" künyesi aynı
  kalıba düşmüş olabilir: yazan oturum, gerçek bitiş tarihini aramak
  yerine atlasın PENCERE SONUNU yazmış (çünkü devlet atlasın ufku
  içinde hâlâ "vardı"). BEKLENTİM: taranan kümenin ÇOĞUNLUĞU (belki
  %60-80'i) 🔴 YANLIŞ çıkacak — yani gerçek devlet 1923'ü fiilen aştı
  (çoğu Hint prensliği 1947-48'e, Malay/Arap emirlik-şeyhlikleri farklı
  tarihlere kadar sürdü) — ve küçük bir azınlık (Osmanlı'nın kendisi,
  gerçekten 1923'te biten devletler) 🟢 DOĞRU çıkacak. `D180`: pencere
  ucu bir ölçüm değeri değil bir sınır işaretidir; bu görev tam o
  körlüğü test ediyor.
"""
import io
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"

txt = io.open(KOK + r"\data\devletler.js", encoding="utf-8").read()

kayitlar = re.findall(
    r'\{\s*id:"([^"]+)",\s*ad:"([^"]+)"[^{}]*?bolge:"([^"]*)"[^{}]*?'
    r'f:"([\d-]+)",\s*t:"([\d-]+)"[^{}]*?ozet:"((?:[^"\\]|\\.)*)"',
    txt)

print("Toplam künye kaydı (regex ile üst-düzey f/t/ozet yakalanan): %d" % len(kayitlar))

hedef = [k for k in kayitlar if k[4] == "1923-10-29"]
print("t: == 1923-10-29 olan künye sayısı: %d" % len(hedef))

isaretli = [k for k in hedef if re.search(
    r"sonras[ıi]nda? da s[üu]rd[üu]|1923'?[üu]n [öo]tesine|hâl[âa] s[üu]r|"
    r"1923 sonras[ıi]|d[eü]vam ett|hâl[âa] var|bug[üu]n de vard[ıi]",
    k[5], re.I)]

print("Bunların 'sürdü/ötesine geçti' türü SERBEST METİN uyarısı taşıyanı: %d"
      % len(isaretli))
print()
for (kid, ad, bolge, f, t, ozet) in sorted(hedef, key=lambda k: k[2]):
    im = "🟡ÖZET-UYARILI" if any(k2[0] == kid for k2 in isaretli) else ""
    print("%-30s %-45s bölge=%-16s f=%s  %s" % (kid, ad, bolge, f, im))
