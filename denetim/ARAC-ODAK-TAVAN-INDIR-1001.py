# -*- coding: utf-8 -*-
# 🪦 EMEKLİ — 6 Ekim 2026 · sebep: odak tavanı artık SAYI değil KİMLİK LİSTESİ (W39d,
#   ODAK-KAPI-KIMLIK-1006); bu betik sayıyı elle yazıyor, liste ile tutarsız kalırdı ve
#   kapı "tavan TUTARSIZ" ötüyor. Yerine geçen: c47120d8 (odak_olc.py --tavan-yaz artık
#   ✗ varken REDDEDİYOR ve evreni genişletmiyor). Tüketici ölçüldü (6 Ekim): çağıran/okuyan
#   kod 0 — yalnız ODAK-TAVAN.json'daki tavan_notu_1001 ADINI anıyor. Silinmedi: NİÇİN var
#   olduğu (bayrağın evreni genişletip 203 odaksızı affetmesi) kayıtta kalsın. KOŞTURMA.
r"""ODAK-TAVAN.json'daki `odaksiz` tavanini OLCULEN degere INDIRIR.

🔴 NICIN `--tavan-yaz` KULLANILMIYOR — olculdu (1 Ekim 2026 gecesi):
`odak_olc.py` kapi raporunda sunu basiyor:
    "✓ ODAKSIZ 455 (tavan 480 — 25 IYILESME, tavan indirilmeli: --tavan-yaz)"
Ama `--tavan-yaz` (odak_olc.py:377-405) sunu yaziyor:
    "odaksiz": T["ODAKSIZ"]            ← TOPLAM, yani 658
    "evren"  : butun taranan dosyalar  ← YENI KAPSAM'i da iceri alir
⇒ Aracin ONERDIGI komut, tavani 480'den **658'e CIKARIR** ve YENI KAPSAM
  kovasindaki 6 dosyanin 203 odaksizini AFFEDER. "Indir" diyen mesaj,
  "yeniden olc ve evreni genislet" yapan bir bayragi onerir.

🔴 BU BIR ARAC KUSURUDUR ve tuzagi sinsidir: komut mesajin dedigini YAPMAZ,
  ama cikisi basarili gorunur ve tavan dosyasi gecerli kalir. Bir sonraki
  oturum mesaja uyar ve 203 kalem sessizce affedilir.
  `D253` ailesi: iyilesmeyi dondurmek ile kapsami genisletmek AYRI islemdir;
  tek bayrakta birlestirilmis.

BU ARAC: yalniz `odaksiz` (ve istenirse `beyanli_yabanci`) degerini yazar.
`evren` ALANINA DOKUNMAZ — kume 152 dosya olarak KALIR.

KULLANIM:  py denetim/ARAC-ODAK-TAVAN-INDIR-1001.py [--yaz]
"""
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(r"C:\atlas")
sys.path.insert(0, "arac")
KURU = "--yaz" not in sys.argv
YOL = "denetim/ODAK-TAVAN.json"

import odak_olc as O  # noqa: E402

r = O.kapi_olcumu()
# kapi satirlarindan evren ici ODAKSIZ sayisini cek
olculen = None
for s in r.get("satirlar", []):
    if "ODAKSIZ" in s and "YENİ KAPSAM" not in s:
        for p in s.replace("(", " ").replace(")", " ").split():
            if p.isdigit():
                olculen = int(p)
                break
        if olculen is not None:
            break
if olculen is None:
    print("🔴 kapı satırından ODAKSIZ sayısı okunamadı — DUR")
    sys.exit(1)

d = json.load(io.open(YOL, encoding="utf-8"))
tavan = d.get("odaksiz")
evren = len(d.get("evren", []))
print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
print("  ölçülen (evren içi) : %d" % olculen)
print("  tavan dosyasında    : %s" % tavan)
print("  evren               : %d dosya (DOKUNULMAYACAK)" % evren)
print("  ihlal               : %s" % r.get("ihlal"))

if olculen > tavan:
    print("🔴 ÖLÇÜM TAVANIN ÜSTÜNDE — bu bir GERİLEME, tavan YÜKSELTİLMEZ.")
    print("   Sebebi bulunup düzeltilmeli; bu araç yükseltme YAPMAZ.")
    sys.exit(1)
if olculen == tavan:
    print("  ⚪ tavan zaten ölçümde — değişiklik YOK")
    sys.exit(0)

print("  ⇒ İNDİRİLECEK: %d → %d  (%d iyileşme)" % (tavan, olculen, tavan - olculen))
if KURU:
    print("\n=> uygulamak için --yaz")
    sys.exit(0)

d["odaksiz"] = olculen
d["tavan_notu_1001"] = (
    "odaksiz %d -> %d, 1 Ekim 2026 gecesi. ODAK-KAPAT'in 1. Dunya "
    "arastirmasindan 25 kalem uygulandi (A 18 + A-IMZA 7). "
    "`--tavan-yaz` KULLANILMADI: o bayrak T['ODAKSIZ'] (toplam 658) yazar ve "
    "`evren`i butun dosyalara genisletir ⇒ YENI KAPSAM'daki 203 odaksizi "
    "AFFEDERDI. Aracin kendi mesaji 'indir' diyor ama bayrak 'yeniden olc ve "
    "genislet' yapiyor — arac kusuru, denetim/ARAC-ODAK-TAVAN-INDIR-1001.py'de "
    "yazili. `evren` 152 dosya olarak KALDI." % (tavan, olculen))
io.open(YOL, "w", encoding="utf-8", newline="\n").write(
    json.dumps(d, ensure_ascii=False, indent=1) + "\n")

son = json.load(io.open(YOL, encoding="utf-8"))
print("✓ YAZILDI")
print("\n### SINAV ###")
print("  odaksiz : %s  (beklenen %d)" % (son.get("odaksiz"), olculen))
print("  evren   : %d dosya  (beklenen %d — DEĞİŞMEMELİ)"
      % (len(son.get("evren", [])), evren))
if len(son.get("evren", [])) != evren:
    print("  🔴 EVREN DEĞİŞTİ — bu olmamalıydı")
    sys.exit(1)
r2 = O.kapi_olcumu()
print("  kapı ihlal : %s  (False olmalı)" % r2.get("ihlal"))
