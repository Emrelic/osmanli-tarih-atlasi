"""Tek seferlik: dönem-ucu maddelerinin d: alanındaki iç şablon sızıntısını okunur cümleyle değiştirir.
Satır sonlarını ve biçimi korur (yalnız `"d": "..."` satırının metni değişir; kaynak: alanına dokunulmaz).
Kullanım: py arac/sizinti_duzelt.py [--yaz]   (varsayılan: kuru, değişikliği listeler)
"""
import io, os, re, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOSYALAR = ["data/olaylar_arkeoloji_zincir.js", "data/olaylar_arkeoloji_gecis.js",
            "data/kronoloji_sinir_antik_bizans_komsu.js"]
SIZINTI = re.compile(r"s: dizisinde|s: sahiplik dizisinde|De[gğ]i[sş]mez\s*\d|d[oö]nem ucu kayd|"
                     r"data/[a-z_]+\.js|(^|\s)kur:|\sf/t\s", re.I)
D_RE = re.compile(r'^(\s*"d"\s*:\s*")((?:[^"\\]|\\.)*)(".*)$', re.S)
B_RE = re.compile(r'^\s*"b"\s*:\s*"((?:[^"\\]|\\.)*)"')
YER = re.compile(r"^(.*?) noktalarının s: (?:sahiplik )?dizisinde")
DEV = re.compile(r"sahip künyenin \((.*)\) f/t sınırından")


def yeni_metin(b, d):
    my, md = YER.search(d), DEV.search(d)
    if not my or not md:
        return None, "yer/devlet ayrıştırılamadı"
    yer, dev = my.group(1), md.group(1)
    if re.search(r"sona er", b):
        bit = True
    elif re.search(r"başlar|başlıyor", b):
        bit = False
    else:
        return None, "başlık yönü bilinmiyor: " + b
    if dev.strip().lower() == "sahipsiz aralık":
        ne = "sahipsiz aralık sona eriyor" if bit else "sahipsiz aralık başlıyor"
    else:
        ne = "%s dönemi %s" % (dev, "sona eriyor" if bit else "başlıyor")
    son = "bitişini" if bit else "başlangıcını"
    return ("%s: %s. Bu tarih ayrı bir olay değil, bu dönemin %s gösterir; ayrıntı ve kaynaklar aşağıdadır."
            % (yer, ne, son)), None


def main():
    yaz = "--yaz" in sys.argv
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    toplam = {}
    hata = []
    for f in DOSYALAR:
        yol = os.path.join(KOK, f)
        with open(yol, encoding="utf-8", newline="") as fh:
            ham = fh.read()
        satirlar = ham.split("\n")   # CR korunur (\r satır sonunda kalır)
        b = ""
        say = 0
        for i, ln in enumerate(satirlar):
            mb = B_RE.match(ln)
            if mb:
                b = mb.group(1)
            m = D_RE.match(ln)
            if not m or not SIZINTI.search(m.group(2)):
                continue
            yeni, e = yeni_metin(b, m.group(2))
            if e:
                hata.append((f, i + 1, e))
                continue
            assert '"' not in yeni and "\\" not in yeni, yeni
            satirlar[i] = m.group(1) + yeni + m.group(3)
            say += 1
            if len(sys.argv) > 1 and "--goster" in sys.argv:
                print("B:", b); print("  ESKİ:", m.group(2)[:150]); print("  YENİ:", yeni)
        toplam[f] = say
        if yaz and say:
            with open(yol, "w", encoding="utf-8", newline="") as fh:
                fh.write("\n".join(satirlar))
    print(toplam, "toplam", sum(toplam.values()))
    for h in hata:
        print("HATA", h)
    sys.exit(1 if hata else 0)


main()
