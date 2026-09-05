# -*- coding: utf-8 -*-
"""FAZ 2 ÖN ÖLÇÜMÜ — `isg:` bugün ne yapıyor, `2i` tavanı neye göre?

🔴 VERİ YAZMAZ. `denetle.py`nin KENDİ fonksiyonlarını çağırır
   (taklit etmez — bu gecenin `4s` dersi).
"""
import io
import os
import sys

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import denetle as D  # noqa: E402
import girdi  # noqa: E402

Y = girdi.yukle(sessiz=True)
O = D.olaylari_yukle()
Yc = [z for z in Y if z.get("_kaynak") not in D.KUYRUK_DOSYALARI]

isgli = [z for z in Y if z.get("isg")]
donem = [(z["ad"], p) for z in Y for p in (z.get("isg") or [])]
print("═══ `isg:` BUGÜN")
print("   kayıt : %d   ·   dönem : %d" % (len(isgli), len(donem)))
print("   çekirdekte : %d kayıt · kuyrukta : %d"
      % (sum(1 for z in isgli if z.get("_kaynak") not in D.KUYRUK_DOSYALARI),
         sum(1 for z in isgli if z.get("_kaynak") in D.KUYRUK_DOSYALARI)))

kim = {}
for _ad, p in donem:
    k = p.get("d") or "(kimliksiz)"
    kim[k] = kim.get(k, 0) + 1
print("\n   KİMLİK DAĞILIMI")
for k, n in sorted(kim.items(), key=lambda x: -x[1]):
    print("      %-30s %d" % (k, n))

yil = {}
for _ad, p in donem:
    d = (p.get("f") or "")[:4]
    if d:
        yil.setdefault(d[:2] + "00", 0)
        yil[d[:2] + "00"] += 1
print("\n   YÜZYILA GÖRE (başlangıç)")
for y in sorted(yil):
    print("      %s'ler %d" % (y, yil[y]))

pencere = [(a, p) for a, p in donem
           if "1918" <= (p.get("f") or "")[:4] <= "1923"]
print("\n   🔴 1918-1923 penceresinde `isg:` dönemi : %d" % len(pencere))

# ── 2i'nin KENDİ ölçümü
kir_i, acik_i = D.degismez2(Yc, O, ("isg",))
print("\n═══ `Değişmez 2i` — denetle.py'nin KENDİ çağrısıyla")
print("   kırılma : %d   ·   AÇIK : %d   ·   TAVAN : %d"
      % (len(kir_i), len(acik_i), D.BEKLENEN_ACIK_ISG))
for a in acik_i:
    print("      🔴 %s" % str(a)[:110])

print("""
═══ TAVAN NEYE GÖRE KURULDU — `denetle.py:550-553` kendi yazıyor
   "OLCULDU: 88 isgal donemi / 82 kayit · 16 ayrik kirilma gunu · 3 ACIK
     Nis 1737-10-01 · Semendire 1789-10-13 · Bihac 1878-09-18
    ⇒ Borc KUCUK ve kapatilabilir; tavan 3 ile giriyor ve inmesi beklenir."

⇒ TAVAN BİR KAPASİTE DEĞİL, BİR BORÇ KÜTÜĞÜ.
   3 sayısı "üç işgal kırılması taşıyabiliriz" demek DEĞİL;
   "bugün maddesi olmayan ÜÇ kırılma var ve adları şunlar" demek.
   Ve dosyanın kendi doktrini tavanı AŞAĞI da takip ediyor:
   "borc kapandikca tavan iner; kapanan borcun yeniden acilmasi yeni borctur."
""")
