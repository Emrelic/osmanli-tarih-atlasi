# KRONO-ATLANTIK-B-0929 — yeni madde adaylarının veride zaten var olup olmadığını tarar.
# Her aday: (tarih öneki, anahtar kelimeler). Bütün data/*.js dosyalarında aynı satırda
# tarih öneki + anahtarlardan biri geçen satırları basar.
import glob, io, re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ADAY = [
    ("1838-08", ["Balta", "ticaret"]), ("1906", ["Akabe", "Tâbâ", "Taba"]),
    ("1916-05", ["Sykes", "Picot"]), ("1922-10", ["Mudanya"]), ("1916-04", ["Kût", "Kut"]),
    ("1718-07", ["Pasarof"]), ("1854-03", ["Rusya", "savaş ilân", "savaş ilan"]),
    ("1684", ["Tanca", "Tangier"]), ("1680", ["Hollanda", "Felemenk", "ahidnâme"]),
    ("1798", ["Hollanda", "Batav"]), ("1601", ["ahidnâme", "Flandır", "İngiliz"]),
    ("1826-04", ["Petersburg", "Protokol"]), ("1825", ["Levant"]), ("1809", ["Kal", "Çanakkale Antlaşması", "Kala"]),
    ("1572", ["Briel", "Geuzen", "Watergeuzen"]), ("1576", ["Gent", "Pacific"]),
    ("1584", ["Willem", "Oranje", "Orange"]), ("1619-05", ["Oldenbarnevelt"]), ("1672", ["Witt", "Rampjaar"]),
    ("1813", ["Willem", "Scheveningen", "Hollanda"]), ("1848", ["Thorbecke", "Hollanda", "grondwet"]),
    ("1863-07", ["kölelik", "Surinam"]), ("1806", ["Louis", "Lodewijk", "Hollanda Krallığı"]),
    ("1810-07", ["Hollanda", "ilhak"]), ("1787", ["Prusya", "Hollanda"]), ("1702-05", ["İspanya Veraset", "savaş"]),
    ("1914-08", ["Sultan Osman", "Reşadiye", "zırhlı"]), ("1920-03-16", ["İstanbul", "işgal"]),
    ("1918-11-13", ["İstanbul", "donanma"]), ("1922-09", ["Çanak"]), ("1917-02", ["Kût", "Kut"]),
    ("1801", ["Ebûkīr", "Abukir", "İskenderiye", "Mısır"]), ("1882-07", ["İskenderiye", "bombard"]),
    ("1915-11", ["Selmanıpak", "Ctesiphon"]), ("1917-12-09", ["Kudüs"]), ("1918-09", ["Nablus", "Megiddo", "Filistin"]),
    ("1918-11-0", ["Musul"]),
]
satirlar = []
for f in sorted(glob.glob("data/*.js")):
    with io.open(f, encoding="utf-8", errors="replace") as h:
        for i, s in enumerate(h, 1):
            satirlar.append((f, i, s))
for on, keys in ADAY:
    bul = [(f, i, s) for f, i, s in satirlar if ('"' + on) in s and any(k in s for k in keys)]
    print(f"== {on} {keys[:3]} : {len(bul)}")
    for f, i, s in bul[:6]:
        m = re.search(r'b:"([^"]{0,90})', s)
        print("   ", f, i, (m.group(1) if m else s.strip()[:110]))
