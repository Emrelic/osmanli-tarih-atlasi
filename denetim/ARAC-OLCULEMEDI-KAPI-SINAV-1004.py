# -*- coding: utf-8 -*-
"""ÖLÇÜLEMEDİ KAPISI SINAVI — iki yönde.

`denetle.py` 4 Ekim 2026'ya kadar şunu yapıyordu:
    Değişmez 8  !  ÖLÇÜLEMEDİ — No module named 'shapely'.
                   Ölçülemeyen soru TEMİZ DEĞİLDİR.
    ...
    SONUÇ: temiz                 ← VE ÇIKIŞ 0
Yani kuralı BASIP ihlal ediyordu. Otomasyon cümleyi okumaz, ÇIKIŞ KODUNU okur.

🔴 Üç hâl, üç kod:  0 temiz · 1 İHLAL VAR · 2 ÖLÇÜLEMEDİ

KULLANIM:  py denetim/ARAC-OLCULEMEDI-KAPI-SINAV-1004.py
"""
import io, os, re, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


print("=" * 74)
print("ÖLÇÜLEMEDİ KAPISI SINAVI — iki yönde")
print("=" * 74)

KAYNAK = io.open(os.path.join(KOK, "arac", "denetle.py"), encoding="utf-8").read()

# ------------------------------------------------------------ 1) KOVA ÇALIŞIYOR
import denetle  # noqa: E402  (ağır modül; import yan etkisi yok, main() korumalı)

n0 = len(denetle.OLCULEMEDI_KOVA)
denetle.olculemedi("ZZSINAV", "deneme sebebi")
sonuc(len(denetle.OLCULEMEDI_KOVA) == n0 + 1,
      "1) olculemedi() kovaya EKLİYOR",
      "önce %d sonra %d" % (n0, len(denetle.OLCULEMEDI_KOVA)))
sonuc(denetle.OLCULEMEDI_KOVA[-1][0] == "ZZSINAV",
      "1b) kayıt ADIYLA duruyor (sayı değil LİSTE — borç kapanırken yenisi"
      " yerine geçemez)")
denetle.OLCULEMEDI_KOVA.pop()

# ------------------------------------------------------------ 2) ÜÇ DALIN HEPSİ KAYDEDİYOR
# 🔴 Bir dalın ÖLÇÜLEMEDİ basıp kovaya YAZMAMASI, kusurun ta kendisiydi.
#    Her "ÖLÇÜLEMEDİ" basan dalın yanında bir `olculemedi(` olmalı.
basan = len(re.findall(r'ÖLÇÜLEMEDİ', KAYNAK))
kaydeden = len(re.findall(r'\bolculemedi\(', KAYNAK)) - 1   # tanımın kendisi hariç
sonuc(kaydeden >= 4,
      "2) ÖLÇÜLEMEDİ dallarının en az 4'ü kovaya KAYDEDİYOR",
      "basan metin %d · kaydeden çağrı %d" % (basan, kaydeden))

# ------------------------------------------------------------ 3) SIRA: ihlal ÖNCE
i_bas = KAYNAK.rindex('print("SONUÇ:')
govde = KAYNAK[max(0, i_bas - 1400):]
i_yaz = govde.find("ÖLÇÜLEMEYEN SORU")
i_ihl = govde.find('print("SONUÇ: İHLAL VAR')
i_iki = govde.find("sys.exit(2)")
i_tem = govde.find('print("SONUÇ: temiz")')
sonuc(-1 < i_yaz < i_ihl < i_iki < i_tem,
      "3) SIRA doğru: ölçülemedi BAS → ihlal(1) → ölçülemedi(2) → temiz(0)",
      "yaz=%d ihlal=%d iki=%d temiz=%d" % (i_yaz, i_ihl, i_iki, i_tem))
sonuc(i_yaz < i_ihl,
      "3b) ölçülemedi listesi İHLAL VARKEN DE basılıyor (biri ötekini GİZLEMİYOR)")

# ------------------------------------------------------------ 4) CANLI — KİRLİ YÖN
# Bu makinede `data/devletler_harita.js` YOK ⇒ Değişmez 8 gerçekten ölçülemiyor.
# 🔴 TAKLİT DEĞİL GERÇEK KOŞUL. Dosya varsa sınav bunu söyler ve ATLAR.
var = os.path.exists(os.path.join(KOK, "data", "devletler_harita.js"))
if var:
    print("  ATLA 4) canlı kirli yön KOŞMADI — data/devletler_harita.js VAR,"
          " yani Değişmez 8 ölçülebiliyor. Bu bir KUSUR DEĞİL; sınav bu"
          " makinede o yönü kuramıyor. (Eksik ölçüm olarak bildir.)")
else:
    p = subprocess.run([sys.executable, os.path.join(KOK, "arac", "denetle.py")],
                       capture_output=True)
    cik = (p.stdout or b"").decode("utf-8", "replace")
    sonuc(p.returncode == 2,
          "4) GERÇEK ölçülemez durumda çıkış 2 (eskiden 0'dı)",
          "dönen: %d" % p.returncode)
    sonuc("TEMİZ DEĞİL — eksik ölçüm" in cik,
          "4b) hüküm satırı 'TEMİZ DEĞİL — eksik ölçüm'")
    sonuc("SONUÇ: temiz" not in cik,
          "4c) 'SONUÇ: temiz' BASILMIYOR")
    sonuc("Değişmez 8" in cik and "devletler_harita.js" in cik,
          "4d) SEBEP adıyla basılıyor (hangi soru, niçin)")

# ------------------------------------------------------------ 5) TEMİZ YÖN
# Kova BOŞken hüküm 0'a ulaşmalı. Canlı koşturmak bu makinede mümkün değil
# (④'ün sebebi), bu yüzden YOL sınanır: kova boşsa hiçbir `exit(2)` tetiklenmez.
kosul = re.search(r'if OLCULEMEDI_KOVA:\s*\n\s*print\("SONUÇ: TEMİZ DEĞİL', KAYNAK)
sonuc(bool(kosul),
      "5) çıkış 2 KOŞULA bağlı (`if OLCULEMEDI_KOVA`) — kova boşsa temize gider")
sonuc(KAYNAK.count("sys.exit(0)") >= 1 and 'print("SONUÇ: temiz")' in KAYNAK,
      "5b) temiz yolu DURUYOR (yama onu kaldırmadı)")

# ------------------------------------------------------------ 6) İZ BIRAKMADI
sonuc(not [a for a, _ in denetle.OLCULEMEDI_KOVA if a == "ZZSINAV"],
      "6) sınav iz BIRAKMADI")

print("-" * 74)
print("SONUÇ: " + ("temiz" if HATA == 0 else "%d KUSUR" % HATA))
sys.exit(1 if HATA else 0)
