# -*- coding: utf-8 -*-
"""
Sürüm damgalama — tarayıcı önbelleği yüzünden kullanıcının eski dosyaları
görmesini engeller.

    py arac/surum_damgala.py            # DOSYA BAŞINA damga (oturumlar bunu koşar)
    py arac/surum_damgala.py --yayin    # + genel damga window.SURUM (yalnız push kapısı)

İKİ KATMAN (PROTOTİP, 13 Ekim 2026 — ölçüm: hafıza `project-damga-tek-satir-olcum`):

  ① index.html'deki her yerel js/css etiketinin `?v=rNNN`i o DOSYANIN İÇERİĞİNDEN
     türer (CRLF→LF normalleştirilmiş sha1'in ilk 7 hanesi, onluk). Aynı içerik ⇒
     aynı damga ⇒ iki oturum aynı dosyayı damgalarsa satırlar BİREBİR aynı, çatışma yok;
     farklı dosyalar farklı satırlar. Değişmeyen dosyanın damgası değişmez ⇒ tarayıcı
     onu yeniden indirmez (bugün her yayında 80 MB'ın tamamı yeniden iniyor).
  ② `window.SURUM = "rNNNN"` (git commit sayacı + 1) — TEK satır. app.js'in dinamik
     (tembel) yüklediği ve index.html'de ETİKETİ OLMAYAN dosyalar (petek_govde_*, ek
     okuma, kaynaklı halka, devlet_parcalar…) ile ekrandaki sürüm etiketi bunu kullanır.
     Her yayında değişir ⇒ yalnız push kapısı yazar (oturumlar DOKUNMAZ).

unpkg/jsdelivr gibi dış adreslere dokunmaz.
"""
import hashlib, io, os, re, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "index.html")
SURUM_SATIRI = re.compile(r'window\.SURUM\s*=\s*"r\d+"')
BETIK = re.compile(r'(src="((?:js|data)/[^"?]+\.js))(?:\?v=[^"]*)?"')
STIL = re.compile(r'(href="(css/[^"?]+\.css))(?:\?v=[^"]*)?"')


def dosya_damgasi(yol, kok=KOK):
    """'r<onluk>' — dosya içeriğinden; dosya yoksa None. CRLF→LF: autocrlf'li makineyle
    LF'li makine AYNI damgayı üretsin."""
    try:
        with open(os.path.join(kok, yol), "rb") as f:
            b = f.read()
    except OSError:
        return None
    return "r%d" % int(hashlib.sha1(b.replace(b"\r\n", b"\n")).hexdigest()[:7], 16)


DAMGA_KONU = "damga: dosya-basi"        # push kapısının damga commit'inin başlığı


def surum_no():
    """Genel damga = bu damgayı TAŞIYAN commit'in sıra numarası. HEAD zaten kapının damga
    commit'iyse o commit --amend ile güncellenir (sayaç artmaz) ⇒ +1 EKLENMEZ."""
    try:
        n = int(subprocess.check_output(["git", "rev-list", "--count", "HEAD"], cwd=KOK).decode().strip())
        konu = subprocess.check_output(["git", "log", "-1", "--format=%s"], cwd=KOK).decode("utf-8", "replace")
    except Exception:
        return "r1"
    return "r" + str(n if konu.startswith(DAMGA_KONU) else n + 1)


def damgala(metin, kok=KOK):
    """(yeni_metin, sayilar). Etiketin diskte dosyası yoksa damga DEĞİŞTİRİLMEZ, eksik listesine girer."""
    eksik, degisen, say = [], 0, 0

    def yaz(m):
        nonlocal degisen, say
        d = dosya_damgasi(m.group(2), kok)
        if d is None:
            eksik.append(m.group(2))
            return m.group(0)
        say += 1
        yeni = '%s?v=%s"' % (m.group(1), d)
        if yeni != m.group(0):
            degisen += 1
        return yeni
    metin = BETIK.sub(yaz, metin)
    metin = STIL.sub(yaz, metin)
    return metin, {"etiket": say, "degisen": degisen, "eksik": eksik}


def main(argv):
    yayin = "--yayin" in argv
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    h = open(YOL, encoding="utf-8", newline="").read()
    h, s = damgala(h)
    msg = "dosya damgası: %d etiket · %d değişti" % (s["etiket"], s["degisen"])
    if s["eksik"]:
        msg += " · %d etiketin dosyası diskte YOK (damga bırakıldı): %s" % (
            len(s["eksik"]), ", ".join(s["eksik"][:5]))
    if yayin:
        if not SURUM_SATIRI.search(h):
            print("✗ index.html'de `window.SURUM=\"rNNNN\"` satırı yok — --yayin yazamaz")
            return 2
        sv = surum_no()
        h = SURUM_SATIRI.sub('window.SURUM="%s"' % sv, h, count=1)
        msg += " · genel damga %s" % sv
    open(YOL, "w", encoding="utf-8", newline="").write(h)
    print(msg)
    return 2 if s["eksik"] else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
