# -*- coding: utf-8 -*-
"""KÜNYE×KRONOLOJİ KAPSAM ARACI — SINAV (iki yönde).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11): "temizde 0" yetmez,
   "kasten bozulmuşta ÖTER" ölçülür. `ast.parse` temiz ≠ çalışıyor — tek kanıt bu sınav.

Sınanan: denetim/ARAC-KUNYE-KRONO-KAPSAM-1004.py (+ krono_ortak_1004.py).
Yöntem: gerçek `data/devletler.js` + olaylar*/kronoloji* dosyaları GEÇİCİ dizine kopyalanır,
kopya KASTEN bozulur, araç `--kok` ile kopyaya çevrilir. Gerçek veriye YAZILMAZ.

  1  TEMİZ ........................... gerçek ağaç                      → çıkış 0
  2  HAYALET KÜNYE (anılmayan) ....... kopyaya künye eklendi            → çıkış 1, adı yazılı
  3  ÜYELİK ≠ SAYI ................... defterde BİR üye başkasıyla değişti,
                                       sayı 3'te KALIYOR                 → çıkış 1   ← asıl sınav
  4  ANILAN KÜNYE C'ye GİRMEZ ........ (2)'deki künyeyi harici madde anıyor → çıkış 0
  5  B AYRI KOVA ..................... künye-içi kronolojili künye        → çıkış 0 (C'ye girmedi)
  6  ÖLÇÜLEMEDİ ...................... devletler.js yok / kronoloji dosyası
                                       sözdizimi bozuk / defter yok      → çıkış 2 (üçü ayrı)

KULLANIM:  py denetim/ARAC-KUNYE-KRONO-KAPSAM-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
"""
import glob, io, os, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(DENETIM, "ARAC-KUNYE-KRONO-KAPSAM-1004.py")
DEFTER = os.path.join(DENETIM, "ARAC-KUNYE-KRONO-KAPSAM-1004.defter.txt")
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def calistir(kok, defter=None):
    a = [sys.executable, ARAC, "--kok", kok]
    if defter:
        a += ["--defter", defter]
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run(a, capture_output=True, env=env, timeout=900)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def kopya(tmp, ad):
    """data/devletler.js + olaylar*/kronoloji* → tmp/ad/data/"""
    d = os.path.join(tmp, ad, "data")
    os.makedirs(d)
    kaynaklar = [os.path.join(KOK, "data", "devletler.js")]
    for k in ("olaylar*.js", "kronoloji*.js"):
        kaynaklar += glob.glob(os.path.join(KOK, "data", k))
    for s in kaynaklar:
        shutil.copy(s, d)
    return os.path.join(tmp, ad), d


def devlet_ekle(data_dizin, kayit_js):
    yol = os.path.join(data_dizin, "devletler.js")
    js = io.open(yol, encoding="utf-8").read()
    anahtar = "window.DEVLETLER = ["
    assert anahtar in js, "devletler.js başlığı beklenen biçimde değil"
    js = js.replace(anahtar, anahtar + "\n" + kayit_js + "\n", 1)
    io.open(yol, "w", encoding="utf-8", newline="").write(js)


HAYALET = "{ id:'zz-sinav-hayalet', ad:'Sınav Hayaleti', tur:'imparatorluk', bolge:'balkanlar', f:'1500-01-01', t:'1600-01-01', ozet:'sinav' },"
B_KUNYE = ("{ id:'zz-sinav-b-kovasi', ad:'Sınav B', tur:'imparatorluk', bolge:'balkanlar', f:'1500-01-01', t:'1600-01-01', ozet:'sinav',"
           " kronoloji:[{ t:'1550-01-01', tur:'savas', b:'künye-içi sınav maddesi' }] },")
ANAN = ("window.KRONOLOJI_COK_ZZSINAV = [\n"
        "{ t:'1550-01-01', b:'Sınav maddesi: hayalet künyeyi anar', tur:'savas', taraflar:['zz-sinav-hayalet'], kaynak:'sinav' },\n"
        "];\n")

print("=" * 72)
print("KÜNYE×KRONOLOJİ KAPSAM SINAVI — iki yönde")
print("=" * 72)
try:
    c = io.open(DEFTER, encoding="utf-8").read()
    real_C = sorted(l.strip() for l in c.split("\n") if l.strip() and not l.startswith("#"))
    sonuc(len(real_C) > 0, "0) ön koşul: defter okundu", "%d üye" % len(real_C))
except OSError as e:
    real_C = []
    sonuc(False, "0) ön koşul: defter okunamadı", str(e))

tmp = tempfile.mkdtemp(prefix="kapsam-sinav-")
try:
    # 1) TEMİZ YÖN
    k, o = calistir(KOK)
    sonuc(k == 0, "1) temiz ağaç → çıkış 0", "çıkış %d" % k)
    if k != 0:
        print(o[-600:])

    # 2) HAYALET KÜNYE → 1
    kok2, d2 = kopya(tmp, "hayalet")
    devlet_ekle(d2, HAYALET)
    k, o = calistir(kok2)
    sonuc(k == 1 and "zz-sinav-hayalet" in o, "2) anılmayan + kronolojisiz künye → çıkış 1, adı yazılı",
          "çıkış %d" % k)

    # 3) ÜYELİK ≠ SAYI — sayı 3'te KALIR, kapı yine de ÖTMELİ
    if real_C:
        d_bozuk = os.path.join(tmp, "defter-takas.txt")
        satirlar = list(real_C)
        satirlar[0] = "devletler.js¦zz-baska-kunye"
        io.open(d_bozuk, "w", encoding="utf-8").write("\n".join(satirlar) + "\n")
        k, o = calistir(KOK, d_bozuk)
        sonuc(len(satirlar) == len(real_C) and k == 1 and real_C[0].split("¦")[1] in o,
              "3) defterde 1 üye takas (SAYI AYNI) → çıkış 1, takas edilen künye adıyla",
              "çıkış %d, defter %d satır = gerçek C %d" % (k, len(satirlar), len(real_C)))
    else:
        sonuc(False, "3) atlandı — defter boş")

    # 4) ANILAN KÜNYE C'DEN ÇIKAR — aynı hayalet, bu kez harici madde anıyor
    kok4, d4 = kopya(tmp, "anilan")
    devlet_ekle(d4, HAYALET)
    io.open(os.path.join(d4, "kronoloji_cok_zzsinav.js"), "w", encoding="utf-8").write(ANAN)
    k, o = calistir(kok4)
    sonuc(k == 0, "4) aynı künyeyi harici madde anıyor → C'ye GİRMEZ → çıkış 0",
          "çıkış %d" % k)

    # 5) B AYRI KOVA
    kok5, d5 = kopya(tmp, "bkova")
    devlet_ekle(d5, B_KUNYE)
    k, o = calistir(kok5)
    sonuc(k == 0 and "zz-sinav-b-kovasi" not in o.split("C ikisi")[-1][:200],
          "5) yalnız künye-içi kronolojili künye → B kovası, C'ye girmez → çıkış 0", "çıkış %d" % k)

    # 6) ÖLÇÜLEMEDİ — üç ayrı biçim
    kok6a, d6a = kopya(tmp, "devletsiz")
    os.remove(os.path.join(d6a, "devletler.js"))
    k, o = calistir(kok6a)
    sonuc(k == 2, "6a) devletler.js yok → çıkış 2 (0 değil, 1 değil)", "çıkış %d" % k)
    kok6b, d6b = kopya(tmp, "bozukjs")
    io.open(os.path.join(d6b, "kronoloji_zzbozuk.js"), "w", encoding="utf-8").write("window.KRONOLOJI_ZZBOZUK = [ { t:'1500-01-01', ;\n")
    k, o = calistir(kok6b)
    sonuc(k == 2 and "zzbozuk" in o, "6b) kronoloji dosyası sözdizimi bozuk → çıkış 2, dosya adı yazılı", "çıkış %d" % k)
    k, o = calistir(KOK, os.path.join(tmp, "yok-defter.txt"))
    sonuc(k == 2, "6c) üyelik defteri yok → çıkış 2 (boş tavan SANILMAZ)", "çıkış %d" % k)
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — araç iki yönde çalışıyor" if HATA == 0 else "%d HATA — araç ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
