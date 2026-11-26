# KRONO-ATLANTIK-B-0929 — kamera odağı: yeni maddelerin ODAKSIZ'ı ve eski dosyaların
# BEYANLI→yabancı kusuru (kapsam_genis:true + odak yok ⇒ kamera OSMANLI sınırına uçar,
# CLAUDE.md §9). Her madde yer_kon (tek nokta) ya da odak_yer (havuz yerleşimleri) alır.
# Her eşleşme TAM BİR KEZ olmalı; yoksa betik durur. Kullanım: ... [--yaz]
import re, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
YAZ = "--yaz" in sys.argv
ISLER = {
  "data/kronoloji_cok_hollanda.js": [
    ("1566-01-01", 'odak_yer:["Amsterdam","Anvers (Antwerpen)","Gent","Utrecht"]'),
    ("1572-04-01", "yer_kon:[51.902,4.162]"),      # Den Briel (Brielle)
    ("1584-07-10", "yer_kon:[52.0126,4.3571]"),    # Delft, Prinsenhof
    ("1586-01-01", 'odak_yer:["Amsterdam","Utrecht","Rotterdam","Middelburg"]'),
    ("1618-01-01", 'odak_yer:["Amsterdam","Utrecht","Rotterdam"]'),
    ("1619-05-13", "yer_kon:[52.0799,4.3133]"),    # Lahey, Binnenhof
    ("1651-01-01", "yer_kon:[52.0799,4.3133]"),    # Lahey — Büyük Meclis
    ("1672-08-20", "yer_kon:[52.0799,4.3133]"),    # Lahey, Gevangenpoort
    ("1699-01-26", "yer_kon:[45.203,19.934]"),     # Karlofça (Sremski Karlovci)
    ("1787-01-01", 'odak_yer:["Amsterdam","Utrecht","Rotterdam","Nijmegen"]'),
    ("1795-05-16", "yer_kon:[52.0799,4.3133]"),    # Lahey
    ("1813-11-30", "yer_kon:[52.108,4.273]"),      # Scheveningen
    ("1848-11-03", 'odak_yer:["Amsterdam","Utrecht","Rotterdam","Groningen"]'),
    ("1863-07-01", 'odak_yer:["Amsterdam","Rotterdam"]'),
  ],
  "data/kronoloji_cok_ingiltere.js": [
    ("1718-07-21", "yer_kon:[44.62,21.19]"),       # Pasarofça (Požarevac)
    ("1801-03-08", "yer_kon:[31.3167,30.0667]"),   # Ebûkīr — yer_yama.js'teki eksik_nokta koordinatı
    ("1906-05-03", "yer_kon:[29.527,35.008]"),     # Akabe
  ],
  "data/kronoloji_hollanda.js": [
    ("1568-01-01", 'odak_yer:["Amsterdam","Anvers (Antwerpen)","Gent","Utrecht"]'),
    ("1672-01-01", 'odak_yer:["Amsterdam","Utrecht","Nijmegen","Groningen"]'),
    ("1914-08-01", 'odak_yer:["Amsterdam","Rotterdam","Groningen","Maastricht"]'),
  ],
  "data/kronoloji_ingiltere.js": [
    ("1337-10-01", 'odak_yer:["Londra","Paris"]'),
    ("1387-01-01", 'odak_yer:["Londra"]'),
    ("1415-01-01", 'odak_yer:["Caernarfon","Cardiff","Shrewsbury"]'),
    ("1609-01-01", 'odak_yer:["Derry","Belfast","Donegal"]'),
    ("1641-10-23", 'odak_yer:["Dublin","Belfast","Derry","Kilkenny"]'),
    ("1798-05-23", 'odak_yer:["Dublin","Wexford","Belfast"]'),
    ("1832-01-01", 'odak_yer:["Londra","Edinburg","Dublin","Manchester"]'),
    ("1845-09-13", 'odak_yer:["Dublin","Cork","Galway","Limerick"]'),
    ("1899-10-11", 'odak_yer:["Transvaal (Bur cumhuriyeti)","Oranj (Bur cumhuriyeti)","Kimberley","Mafikeng"]'),
    ("1918-06-01", 'odak_yer:["Londra","Edinburg","Dublin","Manchester"]'),
  ],
}
toplam = 0
for P, isler in ISLER.items():
    s = open(P, encoding="utf-8").read()
    for t, alan in isler:
        # aynı gün iki madde olabilir (1609-01-01 ingiltere'de) — odaksız OLANI seç
        bul = [m for m in re.finditer(r'\{ t:"' + re.escape(t) + r'".*?\},?\n', s, flags=re.S)
               if "yer_kon" not in m.group(0) and "odak_" not in m.group(0)
               and not re.search(r'yer_id:"[^"]+"', m.group(0))]
        if len(bul) != 1:
            sys.exit(f"DUR: {P} {t} odaksız blok {len(bul)} kez bulundu")
        m = bul[0]
        b = m.group(0)
        i = b.index('\n  d:"')
        b2 = b[:i] + "\n  " + alan + "," + b[i:]
        s = s[:m.start()] + b2 + s[m.end():]
        toplam += 1
    if YAZ:
        open(P, "w", encoding="utf-8").write(s)
print("odak eklenen madde:", toplam, "YAZILDI" if YAZ else "(kuru koşu)")
