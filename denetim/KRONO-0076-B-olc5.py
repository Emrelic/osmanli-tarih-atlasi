# -*- coding: utf-8 -*-
"""KRONO-0076-B ÖLÇÜM 5 — DUZELTME: PARCALI eslesmeler ELENDI, yalniz TAM.

olc3 'Eski Zagra YOK' dedi; olc4 onu 'Eski Zağra (Stara Zagora)' olarak BULDU.
Bu betik her adaya ESANLAM listesi verir ve TAM eslesme arar; sahte-pozitif
PARCALI eslesme (Agra/Luleburgaz/Has/Aydos Kalesi) ELENIR.
"""
import io, os, re, sys, glob, unicodedata

KOK = r"C:\atlas\data"
CIKTI = r"C:\atlas\denetim\KRONO-0076-B-olc5.txt"
ATLA = {"donemler.js", "devletler_harita.js", "bolgeler.js", "bos_alanlar.js",
        "altlik.js", "devirler.js"}
out = io.open(CIKTI, "w", encoding="utf-8")
def y(s=""): out.write(s + "\n")

ESLEME = {"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
          "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
          "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u",
          "Ê": "e", "ê": "e", "Ô": "o", "ô": "o", "'": "", "’": "", "`": "",
          "-": " ", "–": " ", "—": " ", ".": ""}
def nrm(s):
    s = "".join(ESLEME.get(c, c) for c in s)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return " ".join(s.split())

# Parantezli adi da ayrica indeksle: "Eski Zağra (Stara Zagora)" -> iki anahtar
AD = re.compile(r'\bad:"([^"]+)"')
BLOK = re.compile(r'\{\s*ad:"([^"]+)"')
havuz, kayitlar = {}, {}
for f in sorted(glob.glob(os.path.join(KOK, "*.js"))):
    b = os.path.basename(f)
    if b in ATLA:
        continue
    try:
        t = open(f, encoding="utf-8").read()
    except Exception:
        continue
    for m in AD.finditer(t):
        ham = m.group(1)
        anahtarlar = {nrm(ham)}
        p = re.match(r"^(.*?)\s*\((.*?)\)\s*$", ham)
        if p:
            anahtarlar.add(nrm(p.group(1)))
            anahtarlar.add(nrm(p.group(2)))
        for a in anahtarlar:
            havuz.setdefault(a, set()).add((b, ham))
    for m in BLOK.finditer(t):
        ham, i = m.group(1), m.start()
        d, j = 0, i
        while j < len(t):
            if t[j] == "{": d += 1
            elif t[j] == "}":
                d -= 1
                if d == 0: break
            j += 1
        kayitlar.setdefault(nrm(ham), []).append((b, t[i:j + 1]))
        p = re.match(r"^(.*?)\s*\((.*?)\)\s*$", ham)
        if p:
            kayitlar.setdefault(nrm(p.group(1)), []).append((b, t[i:j + 1]))

y("AD ANAHTARI: %d  ·  KAYIT ANAHTARI: %d" % (len(havuz), len(kayitlar)))
y("B9 kanit: 'eski zagra' havuzda mi? -> %s" % ("EVET" if "eski zagra" in havuz else "HAYIR"))
y()


def tam(adaylar, baslik, dok=()):
    y("=" * 78)
    y(baslik)
    y("=" * 78)
    yok = []
    for ad, esanlam in adaylar:
        bulundu = None
        for e in [ad] + list(esanlam):
            if nrm(e) in havuz:
                bulundu = (e, sorted(havuz[nrm(e)]))
                break
        if bulundu:
            y("  VAR  %-22s <- %s  %s" % (ad, bulundu[0], bulundu[1][:3]))
            if ad in dok:
                for d, k in kayitlar.get(nrm(bulundu[0]), [])[:3]:
                    kk = " ".join(k.split())
                    y("        [%s] %s" % (d, kk[:700]))
        else:
            yok.append(ad)
            y("  YOK  %-22s (denenen: %s)" % (ad, ", ".join([ad] + list(esanlam))))
    y("  >>> TAM ESLESME YOK: %d / %d  ->  %s" % (len(yok), len(adaylar), ", ".join(yok)))
    y()
    return yok


tam([
    ("Filibe", ["Plovdiv"]),
    ("Tatarpazarcığı", ["Pazarcık", "Pazardzhik"]),
    ("Eski Zağra", ["Stara Zagora", "Eskizağra"]),
    ("Yeni Zağra", ["Nova Zagora", "Yenizağra"]),
    ("İslimye", ["Sliven"]),
    ("Burgaz", ["Burgas", "Ahyolu Burgaz"]),
    ("Hasköy", ["Haskovo"]),
    ("Kızanlık", ["Kazanlak"]),
    ("Çırpan", ["Chirpan"]),
    ("Ahyolu", ["Pomorie"]),
    ("Mesemvri", ["Nesebar"]),
    ("Sozopol", ["Süzebolu"]),
    ("Karînâbâd", ["Karnobat", "Karinabad"]),
    ("Yanbolu", ["Yambol"]),
    ("Aydos", ["Aytos"]),
    ("Kırcaali", ["Kardzhali"]),
    ("Rupçoz", ["Rudozem"]),
    ("Ahıçelebi", ["Smolyan"]),
], "H-0081 — SARKI RUMELI (1878-1885) kazalari · TAM eslesme",
   dok=("Eski Zağra", "Filibe", "Tatarpazarcığı"))

tam([
    ("Refah", ["Rafah", "Refh"]),
    ("Taba", ["Tabe"]),
    ("Akabe", ["Akabe Korfezi", "Aqaba", "Ayle"]),
    ("El-Ariş", ["El-Arîş", "Ariş"]),
    ("Nahl", ["Kal'atü'n-Nahl", "Kalatünnahl"]),
    ("Bi'rüssebi", ["Birüssebi", "Beersheba"]),
    ("Kusayme", ["Kuseyme"]),
    ("Gazze", []),
    ("Süveyş", []),
], "H-0103 — Refah-Taba hatti (1906) uclari ve Sina")

tam([
    ("Ras Ecdir", ["Râs Ecdîr", "Ras Ajdir", "Rasecdir"]),
    ("Gadames", ["Gadâmis", "Gadamis", "Gadâmes"]),
    ("Sinâven", ["Sinaven"]),
    ("Dirc", ["Derc", "Dirj"]),
    ("Zuvâre", ["Zuvare"]),
    ("Nâlût", ["Nalut"]),
    ("Bin Gerdân", ["Bin Gerdan", "Ben Gardane"]),
    ("Dehibat", ["Dehiba"]),
    ("Remada", []),
], "H-0082 / H-0087 — Tunus-Trablusgarp sinir noktalari")

tam([
    ("Tokar", []), ("Sinkat", []), ("Sevâkin", ["Sevakin", "Suakin"]),
    ("Handub", []), ("Tamai", ["Temai"]), ("Ted", ["Et-Teb", "Teb"]),
    ("Kesela", ["Kassala"]), ("Metemme", ["Metemma"]),
    ("Vâdihalfa", ["Vadi Halfa", "Halfa"]),
], "H-0070 — Dogu Sudan (Beja ulkesi) noktalari", dok=("Tokar", "Sinkat"))

out.close()
print("YAZILDI:", CIKTI)
