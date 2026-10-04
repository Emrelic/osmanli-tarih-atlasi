# -*- coding: utf-8 -*-
"""KRONOLOJİ MADDESİ ↔ KÜNYE PENCERESİ (1004) — "madde tarihi andığı künyenin f:/t: penceresine düşüyor mu?"

Bu, "hayalet devlet" sınıfının MEKANİK yarısıdır (CLAUDE.md §3.5, D203): pencere dışı bir
atıf ARAŞTIRMA GEREKTİRMEZ, kendi kendini ihbar eder. Kalan — pencere İÇİNDE ama yanlış —
atıflar insan/araştırmacı işidir; bu araç onları AYIKLAMAZ, yalnız mekanik yarıyı çıkarır.

ÇİFT = (madde, künye). Çiftin künyesi: maddenin `taraflar` ‖ `devletler` ‖ `devlet`i VE
`KRONOLOJI_<ID>` dosyasında dosyanın sahibi künye (app.js bağlama kuralı; ayrıntı
`krono_ortak_1004.py` başlığında) VE künyenin kendi `kronoloji:` dizisindeki maddeler (kendi
penceresine karşı). `odak_kimlik` ÇİFT DOĞURMAZ: kamera odağı, "o gün vardı" iddiası değildir.

🔴 TOLERANS KURALI VE GEREKÇESİ (D210: pencere ucu — örn. `1923-10-29`, `1281-01-01`, `…-12-31` —
   bir ÖLÇÜM değil SINIR İŞARETİDİR; künye kenarını gün-gün kesin saymak yanlış alarm üretir):
   ① MADDE TARİHİ HASSASİYETİ. `YYYY-AA` → o ayın tamamı; `YYYY-01-01` → o yılın tamamı
      (yıl hassasiyeti: kaynak gün/ay vermediğinde 01-01 yazılıyor; 5 dosyanın `gun:` alanı
      bunu açıkça söylüyor). Madde ancak TÜM aralığı pencerenin dışındaysa dışarıdadır.
      Böylece "1908" diye yazılı bir madde, 1908-07-24'te biten bir pencere için bayrak
      almaz — bu, ölçemediğimiz günü aleyhe okumamaktır.
   ② PENCERE KENARI ±366 GÜN = SINIR bandı. Gerekçe: bölgesel teslim gecikmesi AYLAR
      mertebesindedir, yıllar değil (CLAUDE.md §3.5 hayalet-devlet satırı); son hükümdarın
      ölümü / antlaşmanın onayı / ardıl kurulumu künyenin kapanış gününden günler-aylar
      sonra düşer. Bu bantta düşen çift SINIR sınıfıdır: yazılır, KAPIYI TETİKLEMEZ.
      Bandın dışı DIŞARDA'dır. 366 seçilmiştir çünkü ölçüm dağılımı orada kırılıyor
      (bugün: ≤31g 7 · ≤92g 6 · ≤183g 5 · ≤366g 11 — sonra 9 / 13 / 24 / 310: ardı ardına
      yıllar, yani gecikme değil ÇAĞ FARKI).
   Toleransı değiştirmek için `TOLERANS_GUN`'ü değiştir VE bu paragrafı yeniden yaz;
   sınav (ARAC-KRONO-KUNYE-PENCERE-SINAV-1004.py) sınır değerini iki yandan sınar.

ÇIKIŞ KODU
  0  DIŞARDA kümesinin her üyesi üyelik defterinde (tavan)
  1  DIŞARDA'ya defterde OLMAYAN bir çift girdi
  2  ÖLÇÜLEMEDİ (node yok · dosya yüklenmedi · defter yok · tarihi okunamayan çift ...)

🔴 TAVAN ÜYELİKTİR, SAYI DEĞİL (D259): defter `…PENCERE-1004.defter.txt`, satır
   `madde-anahtarı¦künye` (madde-anahtarı = dosya¦t¦başlık-özeti).

KULLANIM
  py denetim/ARAC-KRONO-KUNYE-PENCERE-1004.py              ölç, kapıyı uygula
  py denetim/ARAC-KRONO-KUNYE-PENCERE-1004.py --ayrinti    DIŞARDA + SINIR çiftlerini yaz
  py denetim/ARAC-KRONO-KUNYE-PENCERE-1004.py --defter-yaz defteri bugünkü DIŞARDA'ya ayarla (ELLE ONAY işi)
  --kok DİZİN   (sınav kopyası)    --defter YOL
"""
import collections, io, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import krono_ortak_1004 as ko

TOLERANS_GUN = 366
DEFTER = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                      "ARAC-KRONO-KUNYE-PENCERE-1004.defter.txt")


def _gun_no(y, m, d):
    """Proleptik Gregoryen gün numarası (her yıl için; datetime 1 öncesini bilmez)."""
    y2 = y - (m <= 2)
    era = (y2 if y2 >= 0 else y2 - 399) // 400
    yoe = y2 - era * 400
    doy = (153 * (m + (-3 if m > 2 else 9)) + 2) // 5 + d - 1
    doe = yoe * 365 + yoe // 4 - yoe // 100 + doy
    return era * 146097 + doe


def _ay_sonu(y, m):
    if m == 12:
        return 31
    return _gun_no(y, m + 1, 1) - _gun_no(y, m, 1)


def madde_araligi(t):
    """Maddenin tarih ARALIĞI (gün numarası, gün numarası) — hassasiyet kuralı ①. Okunamazsa None."""
    p = ko.pad_tarih(t)
    if not p:
        return None
    y, m, d = p
    if m is None or (m == 1 and d == 1):          # `YYYY` ya da `YYYY-01-01` → yıl hassasiyeti
        return (_gun_no(y, 1, 1), _gun_no(y, 12, 31))
    if not 1 <= m <= 12:
        return None
    if d is None:                                 # `YYYY-AA` → ayın tamamı
        return (_gun_no(y, m, 1), _gun_no(y, m, _ay_sonu(y, m)))
    if not 1 <= d <= _ay_sonu(y, m):
        return None
    return (_gun_no(y, m, d), _gun_no(y, m, d))


def pencere(kunye):
    f, t = ko.pad_tarih(kunye.get("f")), ko.pad_tarih(kunye.get("t"))
    if not f or not t or f[1] is None or t[1] is None or f[2] is None or t[2] is None:
        return None
    return (_gun_no(*f), _gun_no(*t))


def siniflandir(aralik, pen, tol=TOLERANS_GUN):
    """→ ('ICERDE'|'SINIR'|'DISARDA', fark_gun, yon). fark = aralığın pencereye en yakın ucu."""
    lo, hi = aralik
    F, T = pen
    if hi < F:
        fark, yon = F - hi, "önce"
    elif lo > T:
        fark, yon = lo - T, "sonra"
    else:
        return "ICERDE", 0, ""
    return ("SINIR" if fark <= tol else "DISARDA"), fark, yon


def ciftler(y):
    """→ [(anahtar, kaynak, t, b, kunye_id, tur)] ve ölçülemeyenler."""
    K = {d["id"]: d for d in y["kunyeler"]}
    out, olcumsuz = [], []
    for m in y["maddeler"]:
        for i in sorted(m["varlik"]):
            out.append((ko.madde_anahtari(m), m["dosya"], m["t"], m["b"], i, m["tur"]))
    for d in y["kunyeler"]:
        for m in d.get("kronoloji") or []:
            mm = {"dosya": "devletler.js", "t": m.get("t"), "b": m.get("b") or ""}
            out.append((ko.madde_anahtari(mm), "devletler.js", m.get("t"), mm["b"], d["id"], "kunye-ici"))
    return out, K


def olc(kok, tol=TOLERANS_GUN):
    y = ko.yukle(kok)
    cs, K = ciftler(y)
    sonuc = {"ICERDE": 0, "SINIR": [], "DISARDA": []}
    olcumsuz = []
    for anahtar, dosya, t, b, kid, tur in cs:
        ar, pen = madde_araligi(t), pencere(K[kid])
        if ar is None or pen is None:
            olcumsuz.append((dosya, t, b[:50], kid, "madde tarihi okunamadı" if ar is None else "künye f/t okunamadı"))
            continue
        s, fark, yon = siniflandir(ar, pen, tol)
        if s == "ICERDE":
            sonuc["ICERDE"] += 1
        else:
            sonuc[s].append((anahtar + "¦" + kid, dosya, t, b[:60], kid, K[kid]["f"], K[kid]["t"], fark, yon, tur))
    return y, len(cs), sonuc, olcumsuz


def main(argv):
    try:
        kok = ko.kok_al(argv)
        defter_yolu = argv[argv.index("--defter") + 1] if "--defter" in argv else DEFTER
        y, n, s, olcumsuz = olc(kok)
        print("KRONOLOJİ MADDESİ ↔ KÜNYE PENCERESİ — %d çift (%d madde · %d künye) · tolerans ±%d gün" %
              (n, len(y["maddeler"]), len(y["kunyeler"]), TOLERANS_GUN))
        print("  İÇERDE ............ %5d" % s["ICERDE"])
        print("  SINIR (≤%dg) ..... %5d   (yazılır, kapıyı tetiklemez — pencere ucu bir sınır işaretidir, D210)" %
              (TOLERANS_GUN, len(s["SINIR"])))
        print("  DIŞARDA (>%dg) ... %5d   (araştırma GEREKTİRMEZ: kendi kendini ihbar eder)" %
              (TOLERANS_GUN, len(s["DISARDA"])))
        if olcumsuz:
            print("  ÖLÇÜLEMEYEN çift ... %5d" % len(olcumsuz))
            for o in olcumsuz[:10]:
                print("      %s · t=%r · %s · %s · %s" % o)
        kaynak = collections.Counter(x[1] for x in s["DISARDA"])
        if kaynak:
            print("  DIŞARDA — dosya dökümü (ilk 8): " +
                  " · ".join("%s %d" % (d, c) for d, c in kaynak.most_common(8)))
        if "--ayrinti" in argv:
            for ad in ("SINIR", "DISARDA"):
                print("  %s çiftleri:" % ad)
                for x in sorted(s[ad], key=lambda r: (r[1], r[2], r[4])):
                    print("      %s %s · %s → %s [%s … %s] %s %dg · %s" %
                          (x[1], x[2], x[3], x[4], x[5], x[6], x[8], x[7], x[9]))
        if olcumsuz:
            print("🔴 ÖLÇÜLEMEDİ — %d çiftin tarihi okunamadı; 'ölçülemedi' ≠ 'temiz' (§11). Çıkış kodu 2" % len(olcumsuz))
            return 2
        if "--defter-yaz" in argv:
            ko.defter_yaz(defter_yolu, {x[0] for x in s["DISARDA"]},
                          "KRONOLOJİ↔KÜNYE PENCERESİ — DIŞARDA ÜYELİK DEFTERİ (tavan = üyelik, sayı değil)\n"
                          "Satır: dosya¦t¦başlık-özeti¦künye. ELLE ONAYLAMADAN yazma: her satır ya düzeltilecek\n"
                          "bir pencere-dışı atıftır ya da gerekçesiyle burada bekler.")
            print("  defter yazıldı: %s (%d üye)" % (defter_yolu, len(s["DISARDA"])))
            return 0
        tavan = ko.defter_oku(defter_yolu)
        bugun = {x[0] for x in s["DISARDA"]}
        yeni = sorted(bugun - tavan)
        dusen = len(tavan - bugun)
        if dusen:
            print("  i defterde olup artık DIŞARDA olmayan %d üye (iyi haber — defteri daralt)" % dusen)
        if yeni:
            print("🔴 DIŞARDA BÜYÜDÜ — defterde olmayan %d çift:" % len(yeni))
            for u in yeni[:40]:
                print("     " + u)
            print("SONUÇ: pencere dışı yeni atıf, çıkış kodu 1")
            return 1
        print("SONUÇ: temiz — DIŞARDA %d çift, hepsi defterde. Çıkış kodu 0" % len(bugun))
        return 0
    except ko.Olculemedi as e:
        print("🔴 ÖLÇÜLEMEDİ — %s" % e)
        print("   'ölçülemedi' ≠ 'yok' ≠ 'temiz' (CLAUDE.md §11). Çıkış kodu 2")
        return 2


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:                                   # noqa
        pass
    sys.exit(main(sys.argv[1:]))
