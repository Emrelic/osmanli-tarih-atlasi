# -*- coding: utf-8 -*-
"""KRONO-0076-C — 17 maddenin kronoloji karsiligini OLCER. Salt okur, hicbir sey yazmaz."""
import io, os, re, sys, json

KOK = r"C:\atlas"
DATA = os.path.join(KOK, "data")

# ---- 1. motorun yukledigi dosya evreni (index.html'den) ----
with io.open(os.path.join(KOK, "index.html"), encoding="utf-8") as f:
    html = f.read()
yuklu = set(re.findall(r'src="data/([A-Za-z0-9_\.\-]+\.js)', html))

dosyalar = sorted(x for x in os.listdir(DATA)
                  if (x.startswith("olaylar") or x.startswith("kronoloji")) and x.endswith(".js"))
canli = [x for x in dosyalar if x in yuklu]
olu = [x for x in dosyalar if x not in yuklu]

# ---- 2. kayitlari cikar (brace-depth, tirnak farkindali) ----
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
                        yield metin[i:j+1]
                        i = j
                        break
                j += 1
            else:
                return
        i += 1

def alan(kayit, ad):
    m = re.search(ad + r'\s*:\s*"((?:[^"\\]|\\.)*)"', kayit)
    return m.group(1) if m else ""

tum = []   # (dosya, canli_mi, t, b, gun, kaynak, kayit)
for dosya in dosyalar:
    with io.open(os.path.join(DATA, dosya), encoding="utf-8") as f:
        metin = f.read()
    for k in kayitlar(metin):
        if not re.search(r'(^|[\s,{])t\s*:\s*"', k):
            continue
        tum.append((dosya, dosya in yuklu, alan(k, "t"), alan(k, "b"),
                    alan(k, "gun"), alan(k, "kaynak"), k))

# ---- 3. 17 madde: arama anahtarlari ----
MADDE = [
 ("H-0117", "1910", ["Arnavut"],                      "Arnavutluk Isyani"),
 ("H-0119", "1911", ["Trablusgarp", "Trablus"],       "Italyan savas ilani"),
 ("H-0122", "1911", ["Trablus"],                      "Trablus sehrinin teslimi"),
 ("H-0124", "1912", ["Sisam", "Samos"],               "Sisam'in cikisi"),
 ("H-0125", "1912", ["Onikiada", "Oniki Ada", "Rodos"], "Onikiada isgali"),
 ("H-0127", "1912", ["Nikarya", "Ikaria", "İkarya"],  "Nikarya bagimsizlik"),
 ("H-0128", "1912", ["Balkan Sava", "Karadağ"],       "I. Balkan Savasi baslangici"),
 ("H-0132", "1912", ["Arnavutluk", "Avlonya", "Vlore"], "Arnavutluk istiklali"),
 ("H-0140", "1913", ["Londra"],                       "Londra Antlasmasi"),
 ("H-0142", "1913", ["Mahmud Şevket", "Mahmut Şevket"], "Mahmud Sevket Pasa suikasti"),
 ("H-0152", "1913", ["İstanbul Antlaşması", "İstanbul Antlaşma", "Edirne"], "Istanbul Antlasmasi"),
 ("H-0157", "1914", ["ittifak", "Alman"],             "Osmanli-Alman gizli ittifak"),
 ("H-0158", "1914", ["Kapitülasyon"],                 "Kapitulasyonlarin kaldirilmasi"),
 ("H-0160", "1914", ["Dünya Savaşı", "Goeben", "Breslau"], "I. Dunya Savasina giris"),
 ("H-0161", "1914", ["Karadeniz Bask"],               "Karadeniz Baskini"),
 ("H-0162", "1914", ["Karadeniz Bask"],               "Karadeniz Baskini (ikiz)"),
 ("H-0163", "1914", ["Cihâd", "Cihad", "cihad"],      "Cihad-i Ekber ilani"),
]

cikti = []
cikti.append("DOSYA EVRENI: %d olaylar/kronoloji dosyasi · index.html YUKLU %d · YUKSUZ %d"
             % (len(dosyalar), len(canli), len(olu)))
cikti.append("YUKSUZ (motor okumuyor): " + (", ".join(olu) if olu else "yok"))
cikti.append("TOPLAM KAYIT (t: alani olan): %d" % len(tum))
cikti.append("")

bulgu = {}
for kod, yil, anahtarlar, ad in MADDE:
    hits = []
    for dosya, cnl, t, b, gun, kaynak, k in tum:
        if not t.startswith(yil):
            continue
        metin = b + " " + k
        if any(a in metin for a in anahtarlar):
            hits.append((dosya, cnl, t, b, gun, kaynak))
    # baslikta gecenler once
    hits.sort(key=lambda h: (0 if any(a in h[3] for a in anahtarlar) else 1, h[2]))
    bulgu[kod] = hits
    cikti.append("=== %s (%s) — %s : %d aday" % (kod, yil, ad, len(hits)))
    for dosya, cnl, t, b, gun, kaynak in hits[:8]:
        cikti.append("    [%s] %-30s t=%-12s gun=%-28s kaynak=%-22s | %s"
                     % ("CANLI" if cnl else " OLU ", dosya, t, gun[:28], kaynak[:22], b[:70]))
    cikti.append("")

# ---- 4. ikiz sinavi: Karadeniz Baskini kac AYRI kayit ----
kb = [(d, c, t, b, g) for d, c, t, b, g, kk, k in tum if "Karadeniz Bask" in (b + " " + k)]
cikti.append("IKIZ SINAVI — 'Karadeniz Bask' gecen kayit sayisi (butun yillar): %d" % len(kb))
for d, c, t, b, g in kb:
    cikti.append("    [%s] %-30s t=%-12s gun=%-24s | %s" % ("CANLI" if c else " OLU ", d, t, g[:24], b[:70]))

yol = os.path.join(KOK, "denetim", "KRONO-0076-C-OLCUM.txt")
with io.open(yol, "w", encoding="utf-8") as f:
    f.write("\n".join(cikti))
print("\n".join(cikti))
