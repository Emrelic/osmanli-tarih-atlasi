# -*- coding: utf-8 -*-
"""KRONOLOJİ↔KÜNYE PENCERE ARACI — SINAV (iki yönde).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11). `ast.parse` temiz ≠
   çalışıyor — tek kanıt bu sınav.

Sınanan: denetim/ARAC-KRONO-KUNYE-PENCERE-1004.py (+ krono_ortak_1004.py).

BÖLÜM A — SINIFLANDIRMA BİRİMİ (tolerans iki YANDAN, sınırın iki yanında)
  pencere [1500-01-01, 1600-12-31], TOLERANS_GUN = 366
  içeride gün · tam T+366 → SINIR · T+367 → DIŞARDA · F-366 → SINIR · F-367 → DIŞARDA
  yıl hassasiyeti: `1600-01-01` (pencerenin son yılı) İÇERDE · `1601-01-01` T'den ≥ 1 gün
  sonra başlıyor → SINIR · `1603-01-01` DIŞARDA · `YYYY-AA` ay hassasiyeti aynı şekilde
  üç haneli yıl pad() ile (330 ≠ 3300)
BÖLÜM B — ARAÇ, BOZULMUŞ KOPYADA (`--kok`)
  1  temiz ağaç .......................................... → 0
  2  kopyaya pencere DIŞI atıf (ARAŞTIRMA GEREKTİRMEZ) ... → 1, çift adıyla
  3  kopyaya pencere İÇİ atıf ............................ → 0 (yanlış alarm YOK)
  4  kopyaya SINIR bandında atıf ......................... → 0 (kapıyı tetiklemez)
  5  `odak_kimlik` ile pencere dışı anma ................. → 0 (çift doğurmaz)
  6  tarihi OKUNAMAYAN madde ............................. → 2
  7  defter yok / dosya bozuk ............................ → 2

KULLANIM:  py denetim/ARAC-KRONO-KUNYE-PENCERE-SINAV-1004.py   (çıkış: 0 hepsi geçti · 1 kusur)
"""
import glob, importlib.util, io, os, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(DENETIM, "ARAC-KRONO-KUNYE-PENCERE-1004.py")
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


# aracı modül olarak yükle (dosya adı tireli → importlib)
sys.path.insert(0, DENETIM)
_s = importlib.util.spec_from_file_location("pencere_arac", ARAC)
P = importlib.util.module_from_spec(_s)
_s.loader.exec_module(P)
ko = P.ko

print("=" * 72)
print("KRONOLOJİ↔KÜNYE PENCERE SINAVI — iki yönde")
print("=" * 72)

# ---------------------------------------------------------------- BÖLÜM A
print("A) sınıflandırma birimi")
PEN = (P._gun_no(1500, 1, 1), P._gun_no(1600, 12, 31))
T, F = PEN[1], PEN[0]


def sinif(t):
    ar = P.madde_araligi(t)
    return None if ar is None else P.siniflandir(ar, PEN)[0]


def tarih_from(gun_no):
    """gün numarası → 'YYYY-MM-DD' (sınav için tersine çevirme; araçtan bağımsız hesap)."""
    import datetime
    return (datetime.date(1, 1, 1) + datetime.timedelta(days=gun_no - P._gun_no(1, 1, 1))).isoformat()


sonuc(sinif("1550-05-05") == "ICERDE", "A1) pencere içi gün → İÇERDE")
sonuc(sinif(tarih_from(T + 366)) == "SINIR", "A2) T+366 gün → SINIR (bandın son günü)", tarih_from(T + 366))
sonuc(sinif(tarih_from(T + 367)) == "DISARDA", "A3) T+367 gün → DIŞARDA (bandın bir ötesi)", tarih_from(T + 367))
sonuc(sinif(tarih_from(F - 366)) == "SINIR", "A4) F-366 gün → SINIR", tarih_from(F - 366))
sonuc(sinif(tarih_from(F - 367)) == "DISARDA", "A5) F-367 gün → DIŞARDA (öteki yön)", tarih_from(F - 367))
sonuc(sinif("1600-01-01") == "ICERDE", "A6) yıl hassasiyeti: 1600-01-01 son yılın içi → İÇERDE (gün 1 Oca diye bayrak ALMAZ)")
sonuc(sinif("1601-01-01") == "SINIR", "A7) 1601-01-01 → pencere sonrası ama ≤ 366 gün → SINIR")
sonuc(sinif("1603-01-01") == "DISARDA", "A8) 1603-01-01 → DIŞARDA")
sonuc(sinif("1499-01-01") == "SINIR", "A9) 1499-01-01 (yıl 1499-12-31'de biter) F'den 1 gün önce → SINIR")
sonuc(sinif("1497-01-01") == "DISARDA", "A10) 1497-01-01 → DIŞARDA")
sonuc(sinif("1600-12") == "ICERDE" and sinif("1602-06") == "DISARDA", "A11) `YYYY-AA` ay hassasiyeti: 1600-12 İÇERDE · 1602-06 DIŞARDA")
sonuc(P.madde_araligi("saçma") is None and P.madde_araligi("1500-13-01") is None and P.madde_araligi("1500-02-30") is None,
      "A12) okunamayan/geçersiz tarih → None (ölçülemedi), İÇERDE DEĞİL")
pen330 = P.pencere({"f": "330-05-11", "t": "1461-08-15"})
sonuc(pen330 is not None and P.siniflandir(P.madde_araligi("0900-01-01"), pen330)[0] == "ICERDE"
      and P.siniflandir(P.madde_araligi("900-01-01"), pen330)[0] == "ICERDE",
      "A13) üç haneli yıl pad(): künye f='330-05-11', madde '900-01-01' ≡ '0900-01-01' → İÇERDE")
sonuc(P.pencere({"f": "1500-01-01", "t": None}) is None and P.pencere({"f": "1500"}) is None,
      "A14) künyede eksik uç → pencere ÖLÇÜLEMEZ (None)")

# ---------------------------------------------------------------- BÖLÜM B
print("B) araç — bozulmuş kopyada")
tmp = tempfile.mkdtemp(prefix="pencere-sinav-")


def calistir(kok, defter=None):
    a = [sys.executable, ARAC, "--kok", kok]
    if defter:
        a += ["--defter", defter]
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run(a, capture_output=True, env=env, timeout=900)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def kopya(ad):
    d = os.path.join(tmp, ad, "data")
    os.makedirs(d)
    kaynaklar = [os.path.join(KOK, "data", "devletler.js")]
    for k in ("olaylar*.js", "kronoloji*.js"):
        kaynaklar += glob.glob(os.path.join(KOK, "data", k))
    for s in kaynaklar:
        shutil.copy(s, d)
    return os.path.join(tmp, ad), d


HAYALET_PEN = "{ id:'zz-sinav-pencere', ad:'Sınav Penceresi', tur:'imparatorluk', bolge:'balkanlar', f:'1500-01-01', t:'1600-12-31', ozet:'sinav' },"


def devlet_ekle(d):
    yol = os.path.join(d, "devletler.js")
    js = io.open(yol, encoding="utf-8").read()
    a = "window.DEVLETLER = ["
    assert a in js
    io.open(yol, "w", encoding="utf-8", newline="").write(js.replace(a, a + "\n" + HAYALET_PEN + "\n", 1))


def madde_dosyasi(d, ad, satirlar, alan="taraflar:['zz-sinav-pencere']"):
    govde = "".join("{ t:'%s', b:'%s', tur:'savas', %s, kaynak:'sinav' },\n" % (t, b, alan) for t, b in satirlar)
    io.open(os.path.join(d, ad), "w", encoding="utf-8").write("window.KRONOLOJI_COK_ZZ%s = [\n%s];\n" % (ad[-6:-3].upper() if False else "SINAV", govde))


try:
    k, o = calistir(KOK)
    sonuc(k == 0, "B1) temiz ağaç → çıkış 0", "çıkış %d" % k)
    if k != 0:
        print(o[-500:])
    import re

    def sinir_sayisi(cikti):
        m = re.search(r"SINIR \(≤\d+g\) \.+\s+(\d+)", cikti)
        return int(m.group(1)) if m else None
    sinir0 = sinir_sayisi(o)

    # B2 — DIŞARDA: pencere 1500-1600, madde 1100 → 400 yıl önce
    kok, d = kopya("disarda")
    devlet_ekle(d)
    madde_dosyasi(d, "kronoloji_cok_zzsinav.js", [("1100-03-04", "ZZ-SINAV-DISARIDA madde")])
    k, o = calistir(kok)
    sonuc(k == 1 and "zz-sinav-pencere" in o, "B2) pencere DIŞI atıf (1100 ↔ 1500-1600) → çıkış 1, künye adı yazılı", "çıkış %d" % k)

    # B3 — İÇERDE
    kok, d = kopya("icerde")
    devlet_ekle(d)
    madde_dosyasi(d, "kronoloji_cok_zzsinav.js", [("1550-06-15", "ZZ-SINAV içeride"), ("1500-01-01", "ZZ-SINAV ilk gün"),
                                                   ("1600-12-31", "ZZ-SINAV son gün")])
    k, o = calistir(kok)
    sonuc(k == 0, "B3) pencere İÇİ atıflar (ortada, ilk gün, son gün) → çıkış 0", "çıkış %d" % k)

    # B4 — SINIR (T + 100 gün)
    kok, d = kopya("sinir")
    devlet_ekle(d)
    madde_dosyasi(d, "kronoloji_cok_zzsinav.js", [("1601-04-10", "ZZ-SINAV sınır bandı")])
    k, o = calistir(kok)
    sonuc(k == 0 and sinir0 is not None and sinir_sayisi(o) == sinir0 + 1,
          "B4) T+100 gün (SINIR bandı) → çıkış 0 ve SINIR sayacı tam +1 (%s → %s)" % (sinir0, sinir_sayisi(o)), "çıkış %d" % k)

    # B5 — odak_kimlik
    kok, d = kopya("odak")
    devlet_ekle(d)
    madde_dosyasi(d, "kronoloji_cok_zzsinav.js", [("1100-03-04", "ZZ-SINAV odak")], alan="odak_kimlik:'zz-sinav-pencere'")
    k, o = calistir(kok)
    sonuc(k == 0, "B5) pencere dışı madde YALNIZ odak_kimlik ile anıyor → çıkış 0 (varlık iddiası değil)", "çıkış %d" % k)

    # B6 — okunamayan tarih
    kok, d = kopya("okunmaz")
    devlet_ekle(d)
    madde_dosyasi(d, "kronoloji_cok_zzsinav.js", [("bilinmiyor", "ZZ-SINAV tarihsiz")])
    k, o = calistir(kok)
    sonuc(k == 2, "B6) tarihi okunamayan madde → çıkış 2 (İÇERDE sanılmaz)", "çıkış %d" % k)

    # B7 — ölçülemedi
    k, o = calistir(KOK, os.path.join(tmp, "yok-defter.txt"))
    sonuc(k == 2, "B7a) üyelik defteri yok → çıkış 2", "çıkış %d" % k)
    kok, d = kopya("bozukjs")
    io.open(os.path.join(d, "kronoloji_zzbozuk.js"), "w", encoding="utf-8").write("window.KRONOLOJI_ZZBOZUK = [ { t:'1500-01-01', ;\n")
    k, o = calistir(kok)
    sonuc(k == 2 and "zzbozuk" in o, "B7b) kronoloji dosyası sözdizimi bozuk → çıkış 2, dosya adı yazılı", "çıkış %d" % k)
    kok, d = kopya("devletsiz")
    os.remove(os.path.join(d, "devletler.js"))
    k, o = calistir(kok)
    sonuc(k == 2, "B7c) devletler.js yok → çıkış 2", "çıkış %d" % k)
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — araç iki yönde çalışıyor" if HATA == 0 else "%d HATA — araç ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
