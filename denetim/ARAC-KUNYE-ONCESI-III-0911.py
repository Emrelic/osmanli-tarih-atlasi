# -*- coding: utf-8 -*-
"""
ARAC-KUNYE-ONCESI-III-0911.py — KÜNYE ÖNCESİ III görevi, 11 Eylül 2026

NE YAPAR: Kardeş oturumların ölçtüğü 54 "künye öncesi kullanım" adayının
KALAN 44'ü için, ① adımını (A kovası ucuz kontrolü) OTOMATİKLEŞTİRİR:
her adayın erken kullanım tarihinde, AYNI bölgede penceresi TUTAN başka
bir künye var mı diye devletler.js'yi tarar, VE hedef künyenin kendi
`ozet:` metnini basar (elle okumak için — kardeşin heuristiği ÇÜRÜDÜĞÜ
için `ozet:` içinde anahtar kelime ARAMA YAPILMAZ, yalnız METİN BASILIR).

Yalnız OKUR. `data/*.js`ye TEK SATIR YAZMAZ.

🔴 D022 ÖNGÖRÜSÜ (ÖLÇÜMDEN/OKUMADAN ÖNCE YAZILDI VE COMMIT EDİLDİ):
  Kalan 44'ün deviation dağılımı İKİ AYRI POPÜLASYON gibi görünüyor:
  ~21 kayıt <5 yıl sapma taşıyor (dashun, sur-hanedani, napoli, italya,
  yugoslavya, letonya, yeni-zelanda gibi) — BUNLARIN ÇOĞUNUN gerçek bir
  "yanlış atıf" DEĞİL, ÖLÇÜM/YUVARLAMA gürültüsü (künyenin KENDİ
  kuruluş gününe göre birkaç ay/yıl erken bir "fiili başlangıç" olayı)
  olacağını TAHMİN EDİYORUM — bu grubun ÇOĞU ⚪ ya da "gerçek sorun
  değil" çıkacak.
  Kalan ~23 kayıt (>5 yıl sapma) ilk 10'la AYNI dağılımı sürdürecek:
  kabaca üçte biri (7-8) A kovası (doğru künye zaten devletler.js'de
  duruyor), üçte ikisi (15-16) B kovası (doğru künye yok).
  TOPLAM TAHMİN: A≈10-13 · B≈20-25 · ⚪/sorun-değil≈8-14.
"""
import io
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"

txt = io.open(KOK + r"\data\devletler.js", encoding="utf-8").read()

KUNYELER = re.findall(
    r'\{\s*id:"([^"]+)",\s*ad:"([^"]+)"[^{}]*?bolge:"([^"]*)"[^{}]*?'
    r'f:"([\d-]+)",\s*t:"([\d-]+)"[^{}]*?ozet:"((?:[^"\\]|\\.)*)"',
    txt)
KID = {k[0]: {"ad": k[1], "bolge": k[2], "f": k[3], "t": k[4], "ozet": k[5]} for k in KUNYELER}
print("devletler.js'ten okunan künye: %d" % len(KID))


def gun_no(s):
    y, a, g = s.split("-")
    return int(y) * 372 + int(a) * 31 + int(g)


# KALAN 44 — KÜNYE ÖNCESİ (kardeş oturum) OLCUM-KUNYE-ONCESI-0911.json'dan,
# İLK 10 (KÜNYE ÖNCESİ II'de işlendi) ÇIKARILDI.
KALAN_44 = [
    ("umman", "1624-01-01", "1511-01-01", 113.0),
    ("kuzey-yuan", "1368-09-14", "1281-01-01", 87.7),
    ("brunei-sultanligi", "1368-01-01", "1281-01-01", 87.0),
    ("bogdan", "1359-01-01", "1281-01-01", 78.0),
    ("eflak", "1330-01-01", "1281-01-01", 49.0),
    ("mantua", "1328-01-01", "1281-01-01", 47.0),
    ("sih-imparatorlugu", "1801-04-12", "1764-01-14", 37.2),
    ("katalan", "1311-03-15", "1281-01-01", 30.2),
    ("dogu-sumatra-sultanliklari", "1615-01-01", "1590-01-01", 25.0),
    ("oranj", "1854-04-07", "1830-01-01", 24.3),
    ("ispanyol-peru", "1542-11-20", "1519-08-15", 23.3),
    ("transvaal", "1852-01-01", "1830-01-01", 22.0),
    ("babur-imparatorlugu", "1526-04-21", "1504-10-01", 21.6),
    ("maratha", "1674-06-06", "1659-01-01", 15.4),
    ("qing-hanedani", "1636-05-15", "1621-01-01", 15.4),
    ("portekiz-brezilyasi", "1549-01-01", "1535-01-01", 14.0),
    ("yeni-ispanya", "1535-04-17", "1523-07-25", 11.7),
    ("ahiler", "1290-01-01", "1281-01-01", 9.0),
    ("siyam-chakri", "1782-04-06", "1774-01-15", 8.2),
    ("multan-langah", "1451-01-01", "1445-01-01", 6.0),
    ("tay-son", "1778-01-01", "1773-01-01", 5.0),
    ("celayirli", "1340-01-01", "1335-12-01", 4.1),
    ("zend", "1751-01-01", "1747-06-20", 3.5),
    ("dashun", "1644-01-01", "1641-03-08", 2.8),
    ("sur-hanedani", "1540-05-17", "1538-01-01", 2.4),
    ("bengal-sultanligi", "1340-01-01", "1338-01-01", 2.0),
    ("banten-sultanligi", "1527-06-22", "1526-01-01", 1.5),
    ("napoli", "1282-03-30", "1281-01-01", 1.2),
    ("bhopal", "1708-01-01", "1707-01-01", 1.0),
    ("nguyen-hanedani", "1802-06-01", "1801-06-15", 1.0),
    ("majapahit", "1293-01-01", "1292-01-01", 1.0),
    ("ingiliz-malaya", "1826-01-01", "1825-03-01", 0.8),
    ("varsova-dukaligi", "1807-07-22", "1806-11-28", 0.7),
    ("tonburi", "1767-12-28", "1767-04-07", 0.7),
    ("yakub-beg", "1865-01-01", "1864-06-04", 0.6),
    ("ingiliz-hindistani", "1757-06-23", "1757-01-02", 0.5),
    ("timurlu", "1370-04-09", "1370-01-01", 0.3),
    ("afgan-durrani", "1747-10-01", "1747-06-20", 0.3),
    ("azuchi-momoyama", "1568-01-01", "1567-09-01", 0.3),
    ("italya", "1861-03-17", "1861-02-13", 0.1),
    ("yugoslavya", "1918-12-01", "1918-11-11", 0.1),
    ("macaristan-naiplik", "1918-11-16", "1918-11-11", 0.0),
    ("letonya", "1918-11-18", "1918-11-11", 0.0),
    ("yeni-zelanda", "1840-02-06", "1840-01-22", 0.0),
]
assert len(KALAN_44) == 44

print()
for kid, kunye_f, veri_f, sapma in KALAN_44:
    info = KID.get(kid)
    if not info:
        print("UYARI: %s devletler.js'te bulunamadı" % kid)
        continue
    bolge = info["bolge"]
    gd = gun_no(veri_f)
    # aday öncüller: AYNI bölgede, penceresi o günü kapsayan, KENDİSİ OLMAYAN künyeler
    adaylar = [k2 for k2, v2 in KID.items()
               if k2 != kid and v2["bolge"] == bolge
               and gun_no(v2["f"]) <= gd < gun_no(v2["t"])]
    print("=" * 78)
    print("%-28s sapma=%6.1f yıl  künye_f=%s  veri_en_erken=%s  bölge=%s"
          % (kid, sapma, kunye_f, veri_f, bolge))
    print("  AYNI BÖLGEDE, o gün penceresi TUTAN aday öncül(ler): %s"
          % (", ".join(adaylar) if adaylar else "(YOK)"))
    print("  ozet: %s" % info["ozet"][:400])
