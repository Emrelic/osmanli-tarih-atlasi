# -*- coding: utf-8 -*-
"""
ARAC-PRENSLIK-PENCERE-0911.py — PRENSLİK PENCERE görevi, 11 Eylül 2026

NE YAPAR: `data/devletler.js`teki HER künyenin (kronoloji[] alt-dizisi
DEĞİL, künyenin kendi üst-düzey `t:` alanı) `t:"1923-10-29"` olup
olmadığını tarar, ADIYLA listeler. Yalnız OKUR, `data/*.js`ye YAZMAZ.

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

# Her künye kaydı `{ id:"...", ad:"...", ... f:"...", t:"...", ...` ile
# başlar ve TEK SATIRDA künyenin kendi f/t'si durur (kronoloji[] alt
# dizisi f/t'leri AYRI satırlardadır, iç içe { } içindedir).
# ⇒ Yalnız "id:" ile aynı satırda ya da iki satır içinde geçen f:/t:
#   alanlarını al — bu, kronoloji[] içindeki t:'leri ELER.
kayitlar = re.findall(
    r'\{\s*id:"([^"]+)",\s*ad:"([^"]+)"[^{}]*?bolge:"([^"]*)"[^{}]*?'
    r'f:"([\d-]+)",\s*t:"([\d-]+)"',
    txt)

print("Toplam künye kaydı (regex ile üst-düzey f:/t: yakalanan): %d" % len(kayitlar))

hedef = [k for k in kayitlar if k[4] == "1923-10-29"]
print("t: == 1923-10-29 olan künye sayısı: %d" % len(hedef))
print()
for (kid, ad, bolge, f, t) in sorted(hedef, key=lambda k: k[2]):
    print("%-30s %-45s bölge=%-16s f=%s" % (kid, ad, bolge, f))
