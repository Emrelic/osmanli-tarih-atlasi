"""Perseus (PerseusDL canonical-greekLit / canonical-latinLit, CC BY-SA 4.0) yerel arama.
Kullanım: py -I perseus_ara.py <yazar> <regex> [--dil eng|grc|lat] [--en N]
          py -I perseus_ara.py <yazar> --yer 1.163        (kitap.bölüm metnini bas)
yazar: herodotos thukydides arrianos diodoros polybios strabon plutarkhos pausanias ksenophon josephus
       appianos dion livius justinus tacitus caesar velleius suetonius ammianus curtius frontinus nepos ...
Çıktı: <eser> <kitap.bölüm[.alt]> | metin parçası."""
import glob, io, os, re, sys
import xml.etree.ElementTree as ET
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = r"D:/kaynak-derlem"
YAZAR = {"herodotos": "perseus-greek/data/tlg0016", "thukydides": "perseus-greek/data/tlg0003",
         "arrianos": "perseus-greek/data/tlg0074", "diodoros": "perseus-greek/data/tlg0060",
         "polybios": "perseus-greek/data/tlg0543", "strabon": "perseus-greek/data/tlg0099",
         "plutarkhos": "perseus-greek/data/tlg0007", "pausanias": "perseus-greek/data/tlg0525",
         "ksenophon": "perseus-greek/data/tlg0032", "josephus": "perseus-greek/data/tlg0526",
         "appianos": "perseus-greek/data/tlg0551", "dion": "perseus-greek/data/tlg0385",
         "lukianos": "perseus-greek/data/tlg0062",
         "livius": "perseus-latin/data/phi0914", "justinus": "perseus-latin/data/phi0982",
         "tacitus": "perseus-latin/data/phi1351", "caesar": "perseus-latin/data/phi0448",
         "velleius": "perseus-latin/data/phi1044", "suetonius": "perseus-latin/data/phi1348",
         "ammianus": "perseus-latin/data/stoa0023", "curtius": "perseus-latin/data/phi1345",
         "nepos": "perseus-latin/data/phi0588", "frontinus": "perseus-latin/data/phi1245",
         "florus": "perseus-latin/data/phi1242", "plinius": "perseus-latin/data/phi0978"}
TEI = "{http://www.tei-c.org/ns/1.0}"

def bolumler(yol):
    """TEI dosyasını (kimlik, metin) parçalarına böler: iç içe textpart div'lerin n'leri."""
    agac = ET.parse(yol)
    govde = agac.getroot().find(".//" + TEI + "body")
    out = []
    def gez(el, yolu):
        cocuk_div = [c for c in el if c.tag == TEI + "div"]
        if cocuk_div:
            for c in cocuk_div:
                n = c.get("n")
                gez(c, yolu + ([n] if n and c.get("type") == "textpart" else []))
            # div dışı metin (başlık vs.) atlanır
        else:
            t = " ".join("".join(el.itertext()).split())
            if t:
                out.append((".".join(yolu), t))
    gez(govde, [])
    return out

def dosyalar(yazar, dil):
    k = os.path.join(KOK, YAZAR[yazar])
    return sorted(glob.glob(os.path.join(k, "*", "*%s*.xml" % dil)))

if __name__ == "__main__":
    a = sys.argv[1:]
    yazar = a[0]
    dil = "eng"
    if "--dil" in a: dil = a[a.index("--dil") + 1]
    if yazar not in YAZAR: sys.exit("bilinmeyen yazar: %s" % yazar)
    fs = dosyalar(yazar, dil) or dosyalar(yazar, "lat") or dosyalar(yazar, "grc") or dosyalar(yazar, "eng")
    if not fs: sys.exit("dosya yok: %s %s (sparse-checkout'a ekle)" % (yazar, dil))
    if a[1] == "--yer":
        for f in fs:
            for kim, t in bolumler(f):
                if kim == a[2] or kim.startswith(a[2] + "."):
                    print(os.path.basename(f), kim, "|", t[:3000])
    else:
        rx = re.compile(a[1], re.I)
        en = int(a[a.index("--en") + 1]) if "--en" in a else 25
        n = 0
        for f in fs:
            for kim, t in bolumler(f):
                m = rx.search(t)
                if m:
                    s = max(0, m.start() - 160)
                    print(os.path.basename(f).split(".")[1], kim, "|", t[s:m.end() + 220])
                    n += 1
                    if n >= en: sys.exit(0)
        print("eşleşme:", n)
