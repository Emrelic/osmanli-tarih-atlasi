# -*- coding: utf-8 -*-
"""KRONO-0076-C ikinci olcum: (a) 16 kaydin TAM govdesi (b) ek okuma kapsami
(c) AY hassasiyetli t: sayimi (CLAUDE.md §8 ihlali). Salt okur."""
import io, os, re

KOK = r"C:\atlas"
DATA = os.path.join(KOK, "data")

def kayitlar(metin):
    i, n = 0, len(metin)
    while i < n:
        if metin[i] == '{':
            d, j, q, esc = 0, i, None, False
            while j < n:
                c = metin[j]
                if esc: esc = False
                elif q:
                    if c == '\\': esc = True
                    elif c == q: q = None
                elif c in '"\'': q = c
                elif c == '{': d += 1
                elif c == '}':
                    d -= 1
                    if d == 0:
                        yield metin[i:j+1]; i = j; break
                j += 1
            else: return
        i += 1

def alan(k, ad):
    m = re.search(ad + r'\s*:\s*"((?:[^"\\]|\\.)*)"', k)
    return m.group(1) if m else ""

dosyalar = sorted(x for x in os.listdir(DATA)
                  if (x.startswith("olaylar") or x.startswith("kronoloji")) and x.endswith(".js"))
tum = []
for dosya in dosyalar:
    with io.open(os.path.join(DATA, dosya), encoding="utf-8") as f:
        metin = f.read()
    for k in kayitlar(metin):
        if re.search(r'(^|[\s,{])t\s*:\s*"', k):
            tum.append((dosya, k))

HEDEF = [
 ("H-0117", "Arnavutluk İsyanı: Kosova"),
 ("H-0119", "Trablusgarp Savaşı"),
 ("H-0122", "Trablus şehrinin İtalyanlara teslim"),
 ("H-0124", "Sisam'ın Osmanlı idaresinden çıkışı"),
 ("H-0125", "Onikiada'nın İtalyan işgali"),
 ("H-0127", "Nikarya'nın bağımsızlık ilanı"),
 ("H-0128", "I. Balkan Savaşı'nın başlaması"),
 ("H-0132", "Arnavutluk'un istiklâlinin ilânı"),
 ("H-0140", "Londra Antlaşması — Rumeli'nin kaybı"),
 ("H-0142", "Mahmud Şevket Paşa'nın İstanbul'da suikastle"),
 ("H-0152", "İstanbul Antlaşması: Bulgaristan ile barış"),
 ("H-0157", "Osmanlı-Alman gizli ittifak antlaşmasının imzalanması"),
 ("H-0158", "Kapitülasyonların tek taraflı olarak kaldırılması"),
 ("H-0160", "I. Dünya Savaşı'na giriş"),
 ("H-0161", "Karadeniz Baskını"),
 ("H-0163", "Cihâd-ı Ekber ilanı"),
]

c = []
c.append("### A — 16 HEDEF KAYDIN TAM ALANLARI")
for kod, iz in HEDEF:
    bulundu = [(d, k) for d, k in tum if iz in alan(k, "b")]
    c.append("")
    c.append("--- %s : %d kayit  (iz: %s)" % (kod, len(bulundu), iz))
    for d, k in bulundu:
        c.append("    dosya   : " + d)
        c.append("    t       : " + alan(k, "t"))
        c.append("    gun     : " + alan(k, "gun"))
        c.append("    b       : " + alan(k, "b"))
        c.append("    kaynak  : " + alan(k, "kaynak"))
        c.append("    yer_id  : " + alan(k, "yer_id"))
        c.append("    alanlar : " + ",".join(sorted(set(re.findall(r'(?:^|[{,]\s*)([a-z_]+)\s*:', k)))))
        c.append("    d       : " + alan(k, "d")[:700])

c.append("")
c.append("### B — AY HASSASIYETLI t: (CLAUDE.md §8: gun yazilmali)")
ay = [(d, alan(k, "t"), alan(k, "gun"), alan(k, "b")) for d, k in tum
      if re.match(r'^\d{4}-\d{2}$', alan(k, "t"))]
c.append("TOPLAM ay hassasiyetli kayit: %d / %d" % (len(ay), len(tum)))
dilim = [x for x in ay if "1909" <= x[1][:4] <= "1914"]
c.append("BUNLARIN 1909-1914 diliminde olani: %d" % len(dilim))
for d, t, g, b in sorted(dilim, key=lambda x: x[1]):
    c.append("    %-24s t=%-9s gun=%-30s | %s" % (d, t, g[:30], b[:60]))
dosya_sayim = {}
for d, t, g, b in ay:
    dosya_sayim[d] = dosya_sayim.get(d, 0) + 1
c.append("AY hassasiyetinin dosyaya dagilimi (ilk 10):")
for d, n in sorted(dosya_sayim.items(), key=lambda x: -x[1])[:10]:
    c.append("    %-30s %d" % (d, n))

c.append("")
c.append("### C — EK OKUMA DOSYALARI")
ek = sorted(x for x in os.listdir(DATA) if x.startswith("ekokuma") or "ek_okuma" in x)
c.append("ekokuma* dosyalari: " + (", ".join(ek) if ek else "YOK"))
with io.open(os.path.join(KOK, "index.html"), encoding="utf-8") as f:
    html = f.read()
c.append("index.html'de gecen ek okuma src: " +
         str(re.findall(r'src="data/([^"]*ek[_]?okuma[^"]*)"', html)))
if ek:
    gov = ""
    for x in ek:
        with io.open(os.path.join(DATA, x), encoding="utf-8") as f:
            gov += f.read()
    c.append("ekokuma govdesinde 1909-1914 anahtarlari:")
    for kelime in ["Arnavut", "Trablusgarp", "Sisam", "Onikiada", "Nikarya", "Balkan Sava",
                   "Londra Antla", "Mahmud Şevket", "İstanbul Antla", "Kapitülasyon",
                   "Karadeniz Bask", "Cihâd", "Goeben", "Breslau", "Oniki"]:
        c.append("    %-18s : %d gecis" % (kelime, gov.count(kelime)))

yol = os.path.join(KOK, "denetim", "KRONO-0076-C-OLCUM2.txt")
with io.open(yol, "w", encoding="utf-8") as f:
    f.write("\n".join(c))
print("\n".join(c))
