# -*- coding: utf-8 -*-
"""SINAV — `denetle_arayuz.py` ①b YORUM SIZINTISI (yetim kapanış), iki yönde.

UMIT-W47b, 6 Ekim 2026. Öngörüler koşudan ÖNCE yazıldı (aşağıdaki BEKLENEN).
Araç izole bir kopyada koşar: geçici kök + arac/denetle_arayuz.py +
index.html + js/app.js. Depodaki hiçbir dosya değişmez.

  SONRA = çalışma ağacındaki arac/denetle_arayuz.py (yeni dal)
  ÖNCE  = 530c6998:arac/denetle_arayuz.py (dalsız ilk sürüm, 22 Ağu)

Gerçek vakalar:
  K1  5603267d^  22 Ağustos kusurlu hâli (Ayarlar'a sızan açıklama)
  K2  SENTETİK   K1'de yalnız örnek `<!-- -->` "yorum" yapıldı. Tek bir
                 düz metin kapanış kaldı; ÖNCE kör, SONRA ötmeli
  K3  5603267d   düzeltilmiş hâl
  K4  origin/main  güncel (yoksa HEAD)
Fikstürler (ani kapanış ve `--!>` ÖLÇÜLSÜN, beyanla geçiştirilmesin):
  F1  `<!-->` ani kapanış → sızıntı
  F2  `<!--->` ani kapanış → sızıntı
  F3  `--!>` ile erken kapanış → sızıntı
  F4  meşru: öznitelikte kapanış dizisi · `&gt;` · `a < b` → temiz
  F5  meşru: script/style/textarea/title gövdesinde kapanış dizisi → temiz

    py denetim/ARAC-ARAYUZ-YETIM-KAPANIS-SINAV-1006.py
Çıkış: 0 bütün öngörüler tuttu · 1 en az biri tutmadı · 2 ölçülemedi
"""
import io
import os
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac", "denetle_arayuz.py")
KAP = "-" + "->"          # bu dosya da bir gün HTML'e gömülürse diye
SENTETIK_ESKI = "blokta zaten bir `<!" + "-- " + KAP + "` vardı ve"
SENTETIK_YENI = "blokta zaten bir yorum vardı ve"


def git_show(ref):
    r = subprocess.run(["git", "-C", KOK, "show", ref], capture_output=True)
    if r.returncode:
        return None
    return r.stdout.decode("utf-8")


def ref_var(ref):
    return subprocess.run(["git", "-C", KOK, "rev-parse", "--verify", "-q",
                           ref + "^{commit}"], capture_output=True).returncode == 0


def kostur(arac_kaynak, html, app):
    with tempfile.TemporaryDirectory() as d:
        os.makedirs(os.path.join(d, "arac"))
        os.makedirs(os.path.join(d, "js"))
        for yol, icerik in (("arac/denetle_arayuz.py", arac_kaynak),
                            ("index.html", html), ("js/app.js", app)):
            io.open(os.path.join(d, yol), "w", encoding="utf-8",
                    newline="").write(icerik)
        env = dict(os.environ, PYTHONIOENCODING="utf-8")
        r = subprocess.run([sys.executable, os.path.join(d, "arac",
                                                         "denetle_arayuz.py")],
                           capture_output=True, env=env)
        return r.returncode, r.stdout.decode("utf-8", "replace")


def fikstur(govde):
    return ("<!DOCTYPE html>\n<html><head><meta charset=\"utf-8\">"
            "<title>f</title></head>\n<body>\n" + govde + "\n</body></html>\n")


FIKSTUR = {
    "F1": fikstur("<div><!" + "--" + ">Bu açıklama sızar " + KAP + "</div>"),
    "F2": fikstur("<div><!" + "---" + ">Bu da sızar " + KAP + "</div>"),
    "F3": fikstur("<div><!" + "-- not --!> sızan metin " + KAP + "</div>"),
    "F4": fikstur("<p title=\"a" + KAP + "b\" data-x='c--!>d'>x &gt; y, "
                  "a < b ve a <= b</p>\n<!" + "-- olağan yorum " + KAP),
    "F5": fikstur("<script>var s = \"" + KAP + "\";</script>\n"
                  "<style>/* " + KAP + " */</style>\n"
                  "<textarea>" + KAP + "</textarea>"),
}

# (vaka, araç, beklenen çıkış, ①b ötmeli mi)  ← KOŞUDAN ÖNCE YAZILDI
BEKLENEN = [
    ("K1", "ÖNCE", 1, None), ("K1", "SONRA", 1, True),
    ("K2", "ÖNCE", 0, None), ("K2", "SONRA", 1, True),
    ("K3", "ÖNCE", 0, None), ("K3", "SONRA", 0, False),
    ("K4", "SONRA", 0, False),
    ("F1", "SONRA", 1, True), ("F2", "SONRA", 1, True),
    ("F3", "SONRA", 1, True),
    ("F4", "SONRA", 0, False), ("F5", "SONRA", 0, False),
]


def main():
    olculemedi = []
    sonra = io.open(ARAC, encoding="utf-8").read()
    once = git_show("530c6998:arac/denetle_arayuz.py")
    if once is None:
        olculemedi.append("ÖNCE aracı (530c6998) okunamadı")
    if "_yetim_kapanis" not in sonra:
        olculemedi.append("SONRA aracında ①b dalı yok — yama uygulanmamış")

    son_ref = "origin/main" if ref_var("origin/main") else "HEAD"
    girdi = {}
    for ad, ref in (("K1", "5603267d^"), ("K3", "5603267d"), ("K4", son_ref)):
        h, a = git_show(ref + ":index.html"), git_show(ref + ":js/app.js")
        if h is None or a is None:
            olculemedi.append("%s (%s) okunamadı" % (ad, ref))
        else:
            girdi[ad] = (h, a)
    if "K1" in girdi:
        h, a = girdi["K1"]
        if h.count(SENTETIK_ESKI) != 1:
            olculemedi.append("K2 üretilemedi: K1'de hedef cümle %d kez"
                              % h.count(SENTETIK_ESKI))
        else:
            girdi["K2"] = (h.replace(SENTETIK_ESKI, SENTETIK_YENI), a)
    for ad, h in FIKSTUR.items():
        girdi[ad] = (h, "")

    if olculemedi:
        for o in olculemedi:
            print("ÖLÇÜLEMEDİ:", o)
        return 2

    print("K4 = %s · K2 = K1'de `%s` → `%s`\n" % (son_ref, SENTETIK_ESKI,
                                                  SENTETIK_YENI))
    tutmayan = 0
    for vaka, hangi, b_cikis, b_1b in BEKLENEN:
        h, a = girdi[vaka]
        cikis, cikti = kostur(once if hangi == "ÖNCE" else sonra, h, a)
        satir1b = [s for s in cikti.splitlines() if s.startswith("①b")]
        o1b = None if not satir1b else ("🔴" in satir1b[0])
        tuttu = cikis == b_cikis and (b_1b is None or o1b == b_1b)
        tutmayan += not tuttu
        print("%s %-3s %-5s çıkış %d (beklenen %d)%s"
              % ("✓" if tuttu else "✗", vaka, hangi, cikis, b_cikis,
                 "" if b_1b is None else " · ①b %s (beklenen %s)"
                 % ("ÖTTÜ" if o1b else "sustu",
                    "öter" if b_1b else "susar")))
        if not tuttu or vaka in ("K2", "F1"):
            for s in cikti.splitlines()[:9]:
                print("        " + s)
    print("-" * 68)
    print("SONUÇ: %s" % ("bütün öngörüler tuttu (%d)" % len(BEKLENEN)
                         if not tutmayan else "%d öngörü TUTMADI" % tutmayan))
    return 1 if tutmayan else 0


if __name__ == "__main__":
    sys.exit(main())
