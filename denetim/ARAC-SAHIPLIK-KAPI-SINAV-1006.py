# -*- coding: utf-8 -*-
"""SAHIPLIK-UYGULA-KAPI-1006 — geri alma kapısının İKİ YÖNLÜ sınavı (GERÇEK git, GEÇİCİ depo).

Gerçek ağaçta HİÇBİR ŞEY yazmaz: araç dosyaları geçici bir dizine kopyalanır, orada `git init`
edilir, iki commit'lik bir geçmiş kurulur ve araç orada `--yaz` ile koşturulur.

  S1  bayat + taze yama birlikte  → çıkış 2 · veri dosyası BAYT BAYT aynı · bayat ad listede
  S2  yalnız taze yama            → çıkış 0 · kayıt yazıldı
  S3  bayat yama kuru koşu        → çıkış 2 (kuru rapor da yalan söylemez)
  S4  kapı modülü yok             → çıkış 3 · dosya aynı
  S5  hedef dosya kirli           → çıkış 3 · dosya aynı (ölçülemedi ≠ temiz)
  S6  biçim-farkı (aynı veri, tırnaklı anahtar) bayat SAYILMAZ
  S7  git deposu değil            → çıkış 3

Kök __file__'dan bulunur.  Kullanım:  py denetim/ARAC-SAHIPLIK-KAPI-SINAV-1006.py
"""
import hashlib
import io
import os
import shutil
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = ["_sahiplik_uygula.py", "_bayat_yama_kapi.py", "girdi.py", "girdi_listesi.py"]
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi_listesi  # noqa: E402

HEDEF = os.path.basename(girdi_listesi.GIRDI_DOSYALARI[0])

ESKI_A = '{ ad:"Sinavkent", tur:"sehir", lat:40.0, lon:30.0, s:[{f:"1281-01-01",t:"1500-01-01",d:"eski-devlet"}] },'
DUZ_A = ('{ ad:"Sinavkent", tur:"sehir", lat:40.0, lon:30.0, s:[{f:"1281-01-01",t:"1450-01-01",d:"eski-devlet"},'
         '{f:"1450-01-01",t:"1500-01-01",d:"duzeltme-devlet",kaynak:"sonraki kaynakli duzeltme"}] },')
B = '{ ad:"Tazekoy", tur:"koy", lat:41.0, lon:31.0, s:[{f:"1281-01-01",t:"1600-01-01",d:"b-devlet"}] },'
C = ('{ ad:"Bicimkoy", tur:"koy", lat:42.0, lon:32.0, s:[{"f":"1281-01-01","t":"1700-01-01","d":"c-devlet"}] },')

YAMA_BAYAT = '{ad:"Sinavkent", s:[{f:"1281-01-01",t:"1500-01-01",d:"eski-devlet"}]}'
YAMA_TAZE = '{ad:"Tazekoy", s:[{f:"1281-01-01",t:"1550-01-01",d:"b-devlet"},{f:"1550-01-01",t:"1600-01-01",d:"yeni-devlet"}]}'
YAMA_BICIM = '{ad:"Bicimkoy", s:[{f:"1281-01-01",t:"1700-01-01",d:"c-devlet"}]}'


def veri(*kayit):
    return "window.YERLESIMLER = [\n" + "\n".join(kayit) + "\n];\n"


def git(d, *a):
    return subprocess.run(["git", "-c", "user.name=sinav", "-c", "user.email=s@s", "-c", "core.autocrlf=false"]
                          + list(a), cwd=d, capture_output=True)


def kur(git_var=True):
    d = tempfile.mkdtemp(prefix="kapi_sinav_")
    os.makedirs(os.path.join(d, "arac"))
    os.makedirs(os.path.join(d, "data"))
    for f in ARAC:
        shutil.copy(os.path.join(KOK, "arac", f), os.path.join(d, "arac", f))
    yaz(d, "data/" + HEDEF, veri(ESKI_A, B, C))
    if git_var:
        git(d, "init", "-q")
        git(d, "add", "-A")
        git(d, "commit", "-q", "-m", "1: ilk hal")
        yaz(d, "data/" + HEDEF, veri(DUZ_A, B, C))   # sonraki kaynaklı düzeltme
        git(d, "commit", "-q", "-am", "2: kaynakli duzeltme")
    return d


def yaz(d, yol, metin):
    io.open(os.path.join(d, yol), "w", encoding="utf-8", newline="\n").write(metin)


def yama(d, *kayit):
    yaz(d, "data/yer_yama_sinav.js", "window.YER_YAMA_SINAV = [\n" + ",\n".join(kayit) + "\n];\n")


def ozet(d):
    return hashlib.sha256(open(os.path.join(d, "data", HEDEF), "rb").read()).hexdigest()


def kos(d, *arg):
    p = subprocess.run([sys.executable, "arac/_sahiplik_uygula.py"] + list(arg), cwd=d, capture_output=True,
                       env=dict(os.environ, PYTHONIOENCODING="utf-8"))
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


sonuc = []


def sina(ad, kosul, ayrinti=""):
    sonuc.append((ad, bool(kosul)))
    print("%s %s %s" % ("✓" if kosul else "✗ BAŞARISIZ", ad, ayrinti))


dizinler = []
try:
    # S1 — bayat + taze birlikte, --yaz
    d = kur(); dizinler.append(d)
    yama(d, YAMA_BAYAT, YAMA_TAZE)
    git(d, "add", "data/yer_yama_sinav.js"); git(d, "commit", "-q", "-m", "yama")
    once = ozet(d)
    kod, out = kos(d, "--yaz")
    sina("S1 bayat+taze --yaz → çıkış 2", kod == 2, "(çıkış %s)" % kod)
    sina("S1 veri dosyası DEĞİŞMEDİ", ozet(d) == once)
    sina("S1 bayat kayıt ADIYLA listede", "Sinavkent" in out.split("BAYAT YAMA")[-1] if "BAYAT YAMA" in out else False)
    sina("S1 taze kayıt bayat listesinde DEĞİL", "Tazekoy" not in out.split("BAYAT YAMA")[-1].split("HİÇBİR")[0]
         if "BAYAT YAMA" in out else False)

    # S3 — aynı durumda kuru koşu
    kod, out = kos(d)
    sina("S3 bayat kuru koşu → çıkış 2", kod == 2, "(çıkış %s)" % kod)
    sina("S3 veri dosyası DEĞİŞMEDİ", ozet(d) == once)

    # S2 — yalnız taze
    d2 = kur(); dizinler.append(d2)
    yama(d2, YAMA_TAZE)
    git(d2, "add", "data/yer_yama_sinav.js"); git(d2, "commit", "-q", "-m", "yama")
    once2 = ozet(d2)
    kod, out = kos(d2, "--yaz")
    yeni = io.open(os.path.join(d2, "data", HEDEF), encoding="utf-8").read()
    sina("S2 yalnız taze --yaz → çıkış 0", kod == 0, "(çıkış %s)" % kod)
    sina("S2 taze kayıt YAZILDI", ozet(d2) != once2 and 'd:"yeni-devlet"' in yeni)
    sina("S2 düzeltilmiş kayıt korunuyor", 'd:"duzeltme-devlet"' in yeni)

    # S4 — kapı modülü yok
    d4 = kur(); dizinler.append(d4)
    yama(d4, YAMA_TAZE)
    git(d4, "add", "data/yer_yama_sinav.js"); git(d4, "commit", "-q", "-m", "yama")
    os.remove(os.path.join(d4, "arac", "_bayat_yama_kapi.py"))
    once4 = ozet(d4)
    kod, out = kos(d4, "--yaz")
    sina("S4 kapı modülü yok → çıkış 3", kod == 3, "(çıkış %s)" % kod)
    sina("S4 veri dosyası DEĞİŞMEDİ", ozet(d4) == once4)

    # S5 — hedef dosya kirli
    d5 = kur(); dizinler.append(d5)
    yama(d5, YAMA_TAZE)
    git(d5, "add", "data/yer_yama_sinav.js"); git(d5, "commit", "-q", "-m", "yama")
    yaz(d5, "data/" + HEDEF, veri(DUZ_A, B, C) + "// commitlenmemis degisiklik\n")
    once5 = ozet(d5)
    kod, out = kos(d5, "--yaz")
    sina("S5 kirli hedef → çıkış 3", kod == 3, "(çıkış %s)" % kod)
    sina("S5 veri dosyası DEĞİŞMEDİ", ozet(d5) == once5)

    # S6 — biçim farkı bayat sayılmaz (doğrudan kapı fonksiyonu, gerçek geçmişle)
    sys.path.insert(0, os.path.join(d2, "arac"))
    import _bayat_yama_kapi as K  # noqa: E402
    satirlar = io.open(os.path.join(d, "data", HEDEF), encoding="utf-8").read().split("\n")
    no = [i for i, s in enumerate(satirlar, 1) if "Bicimkoy" in s][0]
    eski_c = satirlar[no - 1]
    yeni_c = eski_c.replace('{"f":"1281-01-01","t":"1700-01-01","d":"c-devlet"}',
                            '{f:"1281-01-01",t:"1700-01-01",d:"c-devlet"}')
    b = K.bayat_mi(d, "data/" + HEDEF, no, no, eski_c, yeni_c)
    sina("S6 yalnız biçim farkı (tırnaklı anahtar) BAYAT DEĞİL", b == [], str(b))
    no_a = [i for i, s in enumerate(satirlar, 1) if "Sinavkent" in s][0]
    b = K.bayat_mi(d, "data/" + HEDEF, no_a, no_a, satirlar[no_a - 1],
                   '{ ad:"Sinavkent", s:[{f:"1281-01-01",t:"1500-01-01",d:"eski-devlet"}] },')
    sina("S6b aynı fonksiyon gerçek bayatı görüyor", bool(b) and b[0][0] == "s", str(b))

    # S7 — git deposu değil
    d7 = kur(git_var=False); dizinler.append(d7)
    yama(d7, YAMA_TAZE)
    once7 = ozet(d7)
    kod, out = kos(d7, "--yaz")
    sina("S7 git deposu değil → çıkış 3", kod == 3, "(çıkış %s)" % kod)
    sina("S7 veri dosyası DEĞİŞMEDİ", ozet(d7) == once7)
finally:
    for d in dizinler:
        shutil.rmtree(d, ignore_errors=True)

basarisiz = [a for a, k in sonuc if not k]
print()
print("SINAV: %d/%d geçti" % (len(sonuc) - len(basarisiz), len(sonuc)))
sys.exit(1 if basarisiz else 0)
