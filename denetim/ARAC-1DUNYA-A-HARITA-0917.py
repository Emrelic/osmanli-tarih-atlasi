"""1DUNYA-A harita senkronu — seçili yerleşimlerin 1914-06..1923 dönemlerini basar.

Kullanım:  py denetim/ARAC-1DUNYA-A-HARITA-0917.py Brüksel Belgrad ...
           py denetim/ARAC-1DUNYA-A-HARITA-0917.py --kutu minlat maxlat minlon maxlon
Girdi kümesi: arac/girdi.py GIRDI_DOSYALARI (motorun okuduğu dosyalar — CLAUDE.md §5).
Ad araması arac normalleştiricisiyle yapılır (CLAUDE.md §4 Türkçe yazım ekseni).
"""
import sys, io, os, json, unicodedata
sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi

TR = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
                    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a",
                    "Î": "i", "î": "i", "Û": "u", "û": "u", "’": "'"})


def norm(s):
    s = unicodedata.normalize("NFKD", str(s).translate(TR))
    return "".join(c for c in s if not unicodedata.combining(c)).lower()


def main():
    Y = girdi.yukle(sessiz=True)
    a = sys.argv[1:]
    if a and a[0] == "--kutu":
        la0, la1, lo0, lo1 = map(float, a[1:5])
        sec = [y for y in Y if la0 <= float(y["lat"]) <= la1 and lo0 <= float(y["lon"]) <= lo1]
    else:
        hedef = [norm(x) for x in a]
        sec = [y for y in Y if any(h == norm(y["ad"]) or h in norm(y["ad"]).split(" ") for h in hedef)]
    for y in sec:
        satir = []
        for alan in ("d", "v", "s", "isg"):
            for p in y.get(alan) or []:
                if p.get("t", "9999") >= "1914-06-01" and p.get("f", "0") <= "1924-01-01":
                    satir.append("%s:%s %s→%s" % (alan, p.get("d", p.get("isg", "")), p.get("f"), p.get("t")))
        print("%-22s %7.3f %8.3f | %s" % (y["ad"], float(y["lat"]), float(y["lon"]), " · ".join(satir) or "—"))
    print("seçilen", len(sec), "/", len(Y))


main()
