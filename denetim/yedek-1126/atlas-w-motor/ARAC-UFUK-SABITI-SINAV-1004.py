# -*- coding: utf-8 -*-
"""UFUK SABİTİ ARACI — SINAV (iki yönde).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11). `ast.parse` temiz ≠ çalışıyor.

Sınanan: denetim/ARAC-UFUK-SABITI-1004.py (sınıf tablosu = üyelik defteri).
  1  GERÇEK AĞAÇ: her kod sitesi sınıflı → çıkış 0; (b) sınıfında site yok; docstring içi alıntı (`_sahiplik_uygula.py:136`)
     SAYILMIYOR; motorun ayrı `1923-11-01` sabiti bulunuyor
  2  KASTEN BOZULMUŞ: temp arac dizinine YENİ bir `>= "1923-10-29"` sitesi eklenirse → çıkış 1, dosya adı yazılı
     (sessiz yeni sabit eklenemez) · `"1923-11-01"` ile de · çıkarılırsa tablo satırı "bulunamayan" olur, HATA DEĞİL
  3  DAR AST: yorum/docstring içindeki `1923-10-29` ve `UFUK[1]`'e BAĞLI kullanım site SAYILMAZ → çıkış 0
  4  ÖLÇÜLEMEDİ: arac dizini yok · hiç sabit site bulunmayan dizin → çıkış 2 ('temiz' DEĞİL)
  5  VERİ SAYIMI (küçültülmüş ağaç, TAM sayılarla): kapanış işareti · UFUK sonrası gerçek olay/gün · 9999 açık uçlu
  6  ORTAM damgası başta ve sonda basılır

KULLANIM:  py denetim/ARAC-UFUK-SABITI-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
"""
import glob, io, os, re, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(DENETIM, "ARAC-UFUK-SABITI-1004.py")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""), flush=True)
    if not ok:
        HATA += 1


def calistir(*a):
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run([sys.executable, ARAC] + list(a), capture_output=True, env=env, timeout=600)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def arac_kopyala(tmp, ad):
    """gerçek `arac/*.py` içinden sabit taşıyan dosyaları geçici bir arac dizinine kopyala."""
    d = os.path.join(tmp, ad, "arac")
    os.makedirs(d)
    for f in glob.glob(os.path.join(KOK, "arac", "*.py")):
        t = io.open(f, encoding="utf-8", errors="replace").read()
        if "1923-10-29" in t or "1923-11-01" in t:
            shutil.copy(f, d)
    return d


print("=" * 72)
print("UFUK SABİTİ SINAVI — iki yönde")
print("=" * 72)
tmp = tempfile.mkdtemp(prefix="ufuk-sinav-")
try:
    k, o = calistir("--ayrinti")
    sonuc(k == 0, "1a) gerçek ağaç → çıkış 0, her site sınıflı", "çıkış %d" % k)
    if k != 0:
        print(o[-1200:])
    sonuc("(b) veri sınırı 0" in o, "1b) (b) VERİ SINIRI sınıfında site YOK (sabitlerin hiçbiri 'veri yok' demiyor)")
    sonuc("_sahiplik_uygula.py:136" not in o and "_sahiplik_uygula.py:143" in o,
          "1c) `_sahiplik_uygula.py:136` (docstring alıntısı) SAYILMIYOR, :143 (kod) sayılıyor")
    sonuc("uret_petek.py" in o and "1923-11-01" in o, "1d) motorun AYRI `1923-11-01` sabiti bulundu (uret_petek.py)")
    sonuc("ORTAM (başta): HEAD" in o and "ORTAM (sonda): HEAD" in o, "6) ORTAM damgası başta ve sonda basılıyor")

    # 2) YENİ SİTE
    a1 = arac_kopyala(tmp, "yeni")
    io.open(os.path.join(a1, "yeni_arac.py"), "w", encoding="utf-8").write('def f(g):\n    if g >= "1923-10-29":\n        return 1\n')
    k, o = calistir("--arac", a1, "--kok", KOK)
    sonuc(k == 1 and "yeni_arac.py:2" in o, "2a) sınıfsız YENİ `>= \"1923-10-29\"` sitesi → çıkış 1, dosya:satır adıyla", "çıkış %d" % k)
    a2 = arac_kopyala(tmp, "yeni2")
    io.open(os.path.join(a2, "yeni_arac2.py"), "w", encoding="utf-8").write('def f(g):\n    return g <= "1923-11-01"\n')
    k, o = calistir("--arac", a2, "--kok", KOK)
    sonuc(k == 1 and "yeni_arac2.py:2" in o, "2b) YENİ `\"1923-11-01\"` sitesi de ÖTER (motorun ayrı sabiti)", "çıkış %d" % k)
    a3 = arac_kopyala(tmp, "eksik")
    os.remove(os.path.join(a3, "denetle_statu.py")) if os.path.exists(os.path.join(a3, "denetle_statu.py")) else None
    k, o = calistir("--arac", a3, "--kok", KOK)
    sonuc(k == 0 and "tabloda olup bulunamayan" in o, "2c) bir site KALKARSA tablo satırı 'bulunamayan' (bilgi), HATA DEĞİL", "çıkış %d" % k)

    # 3) DAR AST
    a4 = arac_kopyala(tmp, "dar")
    io.open(os.path.join(a4, "yorumlu.py"), "w", encoding="utf-8").write(
        '"""docstring: 1923-10-29 sınırı\n"""\n# yorum: if g >= "1923-10-29": ...\nimport sys\n'
        'def f(g, UFUK):\n    """if g >= "1923-10-29" (alıntı)"""\n    return g >= UFUK[1]\n')
    k, o = calistir("--arac", a4, "--kok", KOK)
    sonuc(k == 0 and "yorumlu.py" not in o, "3) docstring/yorum içi `1923-10-29` ve `UFUK[1]`'e bağlı kullanım site SAYILMAZ → çıkış 0", "çıkış %d" % k)

    # 4) ÖLÇÜLEMEDİ
    k, o = calistir("--arac", os.path.join(tmp, "yok-dizin"), "--kok", KOK)
    sonuc(k == 2, "4a) arac dizini yok → çıkış 2", "çıkış %d" % k)
    bos = os.path.join(tmp, "bos", "arac")
    os.makedirs(bos)
    io.open(os.path.join(bos, "x.py"), "w", encoding="utf-8").write("x = 1\n")
    k, o = calistir("--arac", bos, "--kok", KOK)
    sonuc(k == 2, "4b) hiç sabit site bulunmayan dizin → çıkış 2 ('temiz' DEĞİL: AST taraması çürümüş olabilir)", "çıkış %d" % k)

    # 5) VERİ SAYIMI — küçültülmüş ağaç, TAM sayılar
    d = os.path.join(tmp, "veri", "data")
    os.makedirs(d)
    def kayit(ad, alan, dnm):
        alanlar = {"s": "", "d": "", "v": "", "isg": ""}
        alanlar[alan] = dnm
        return ('{ ad:"%s", tur:"kale", lat:40.0, lon:30.0, g:0, k:3, m:null, s:[%s], d:[%s], v:[%s], isg:[%s] },'
                % (ad, alanlar["s"], alanlar["d"], alanlar["v"], alanlar["isg"]))
    kayitlar = [
        kayit("ZZ A", "s", '{f:"1500-01-01",t:"1923-10-29",d:"bizans"}'),
        kayit("ZZ B", "v", '{f:"1600-01-01",t:"1923-10-29",statu:"vassal",kid:"zz"}'),
        kayit("ZZ C", "s", '{f:"1925-01-01",t:"1930-06-01",d:"rusya"},{f:"1930-06-01",t:"9999-01-01",d:"rusya"}'),
        kayit("ZZ D", "d", '{f:"1400-01-01",t:"1700-01-01"}'),
    ]
    for i, f in enumerate(girdi.GIRDI_DOSYALARI):
        govde = "\n".join(kayitlar) if f == "yerlesimler.js" else ""
        degisken = "YERLESIMLER" if f == "yerlesimler.js" else "YERLESIMLER_BOS%d" % i
        io.open(os.path.join(d, f), "w", encoding="utf-8").write("window.%s = [\n%s\n];\n" % (degisken, govde))
    a5 = arac_kopyala(tmp, "veri")
    k, o = calistir("--arac", a5, "--kok", os.path.join(tmp, "veri"))

    def satir(kat):
        m = re.search(r"^\s+%s\s+(\d+) \| (\d+)\s+\| (\d+) olay · (\d+) gün\s+\| (\d+)" % kat, o, re.M)
        return tuple(int(x) for x in m.groups()) if m else None
    sonuc(satir("s") == (6, 1, 3, 2, 1), "5a) s: 6 olay · kapanış işareti 1 · UFUK sonrası 3 olay / 2 gün · 9999 açık uçlu 1", str(satir("s")))
    sonuc(satir("v") == (2, 1, 0, 0, 0), "5b) v: 2 olay · kapanış işareti 1 · UFUK sonrası 0", str(satir("v")))
    sonuc(satir("d") == (2, 0, 0, 0, 0), "5c) d: 2 olay · kapanış işareti 0 · UFUK sonrası 0", str(satir("d")))
    sonuc("ZZ C" in o and "BUGÜN UFUK SONRASI gerçek kırılma: 3 olay" in o, "5d) UFUK sonrası kaydı adıyla yazıyor (ZZ C), toplam 3")
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — araç iki yönde çalışıyor" if HATA == 0 else "%d HATA — araç ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
