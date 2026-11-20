"""Envanter 'maddesiz' yerleri ad varyantlariyla yeniden olc (UMIT19, 20.11.2026).

Girdi : envanter_girdi.tsv  (origin/borc-defteri-1119 denetim/ENVANTER-BOSLUK-1119/envanter.tsv kopyasi)
Korpus: data/olaylar*.js + data/kronoloji*.js  (kronoloji cekirdegi; satir bazli)
Cikti : varyant_sonuc.tsv  (yer, sinif, kademe, dosya:satir, t, eslesen_alan, parca)
        varyant_ozet.md

Kademe 1 = varyant, madde'nin YER alaninda (yer_id / yer / odak_yer) -> kesin
Kademe 2 = varyant, madde'nin b: veya d: METNINDE kelime siniri ile -> olasi (elle bak)
Kisa ad (<4 harf) ve cok yaygin sozcuk olan adlar ESLENMEZ, ayri listelenir.
Ad varyanti: kucuk harf (TR), aksan/uzatma isareti atilir (â->a, ş->s ...), kesme isaretleri atilir,
tire/bosluk bicim farki yok sayilir, 'el-/al-/ed-' on eki opsiyonel, parantez ici niteleyici ayri aday,
'/' ile ayrilmis alternatif adlar ayri aday.
Arap harfi yazim: atlasin Latin adindan turetilemez -> bu betikte ESLENMEZ (BORC olarak ozette).
"""
import csv
import glob
import os
import re
import sys
import unicodedata

KOK = os.getcwd()
CIK = os.path.join(KOK, "denetim", "ENVANTER-VARYANT-1120")

TR_ALT = {"ı": "i", "İ": "i", "I": "i", "ş": "s", "Ş": "s", "ç": "c", "Ç": "c", "ğ": "g", "Ğ": "g",
          "ü": "u", "Ü": "u", "ö": "o", "Ö": "o"}


def norm(s):
    out = []
    for ch in s:
        out.append(TR_ALT.get(ch, ch))
    s = "".join(out)
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    s = re.sub(r"[‘’ʻʼʿʾ'`´]", "", s)
    s = re.sub(r"[-_]", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


def adaylar(ad):
    """Bir atlas adindan arama adaylari (normalize)."""
    c = set()
    govde = re.sub(r"\(.*?\)", "", ad).strip()
    for p in re.split(r"\s*/\s*", govde):
        p = p.strip()
        if p:
            c.add(norm(p))
    # parantez ici NITELEYICIDIR (Akhisar (Manisa), Granada (Nikaragua)): ad adayi sayilmaz.
    c2 = set()
    for x in c:
        c2.add(x)
        x2 = re.sub(r"^(el|al|ed|ez|er|es|en|et) ", "", x)
        c2.add(x2)
    return {x for x in c2 if x}


# ---- girdi ----
satirlar = list(csv.reader(open(os.path.join(CIK, "envanter_girdi.tsv"), encoding="utf-8"), delimiter="\t"))
h = satirlar[0]
iad, isin, isay = h.index("ad"), h.index("sinif"), h.index("bagli_kronoloji_madde_sayisi")
HARIC = {"c1-asiret-kunye", "e2-beyan-edilen-bosluk-listesi"}  # devlet kunyesi / liste satiri: yer degil
yerler = {}
for r in satirlar[1:]:
    if len(r) <= isay or r[isay] != "0" or r[isin] in HARIC:
        continue
    yerler.setdefault(r[iad], set()).add(r[isin])
print("maddesiz ayri yer adi (c1/e2 haric):", len(yerler))

# ---- korpus ----
dosyalar = sorted(set(glob.glob("data/olaylar*.js") + glob.glob("data/kronoloji*.js")))
RX_YER = re.compile(r'\b(yer_id|yer|odak_yer|yer_ad)\s*:\s*(\[[^\]]*\]|"(?:[^"\\]|\\.)*")')
RX_B = re.compile(r'\bb\s*:\s*"((?:[^"\\]|\\.)*)"')
RX_D = re.compile(r'\bd\s*:\s*"((?:[^"\\]|\\.)*)"')
RX_T = re.compile(r'\bt\s*:\s*"(-?\d{4}[^"]*)"')
SATIR = []  # (dosya, no, t, yer_norm, b_norm, d_norm)
son_t = ""
for f in dosyalar:
    try:
        satirlari = open(f, encoding="utf-8").read().split("\n")
    except Exception:
        continue
    son_t = ""
    for no, ln in enumerate(satirlari, 1):
        mt = RX_T.search(ln)
        if mt:
            son_t = mt.group(1)
        yer_ham = [x for m in RX_YER.finditer(ln) for x in re.findall(r'"((?:[^"\\]|\\.)*)"', m.group(2))]
        yer = " | ".join(m.group(2) for m in RX_YER.finditer(ln))
        b = " ".join(m.group(1) for m in RX_B.finditer(ln))
        d = " ".join(m.group(1) for m in RX_D.finditer(ln))
        if not (yer or b or d):
            continue
        SATIR.append((f, no, mt.group(1) if mt else son_t, norm(yer), norm(b), norm(d), yer_ham))
print("korpus dosya:", len(dosyalar), "madde-satiri:", len(SATIR))

# ---- atlasin tum yerlesim adlari (birebir) ----
ATLAS_AD = set()
RX_AD = re.compile(r'\bad\s*:\s*"((?:[^"\\]|\\.)*)"')
for f in glob.glob("data/yerlesimler*.js"):
    if f.endswith("hint_adalar.js"):
        continue
    try:
        for ln in open(f, encoding="utf-8"):
            for m in RX_AD.finditer(ln):
                ATLAS_AD.add(m.group(1))
    except Exception:
        pass
print("atlas yerlesim adi:", len(ATLAS_AD))

# ---- eslestir ----
KISA = 4
sonuc = []
atlanan = []
for ad, sn in sorted(yerler.items()):
    adayl = adaylar(ad)
    adayl = {a for a in adayl if len(a) >= KISA}
    if not adayl:
        atlanan.append(ad)
        continue
    homonim = "(" in ad  # nitelikli ad: ayni ad baska yerde olabilir
    for a in sorted(adayl):
        rx = re.compile(r"(?<![a-z0-9])" + re.escape(a) + r"(?![a-z0-9])")
        for f, no, t, yer, b, d, yer_ham in SATIR:
            if yer and rx.search(yer):
                # madde yer degeri zaten BASKA bir atlas yerlesimine birebir bagliysa bu yere ait degildir
                ilgili = [v for v in yer_ham if rx.search(norm(v))]
                if ilgili and all(v in ATLAS_AD and v != ad for v in ilgili):
                    continue
                sonuc.append((ad, ",".join(sorted(sn)), 1, f + ":" + str(no), t,
                              "yer" + ("+HOMONIM-RISKI" if homonim else ""), a))
            elif (b and rx.search(b)) or (d and rx.search(d)):
                sonuc.append((ad, ",".join(sorted(sn)), 2, f + ":" + str(no), t,
                              "b/d" + ("+HOMONIM-RISKI" if homonim else ""), a))

# yineleme temizle
gor = set()
tem = []
for s in sonuc:
    k = (s[0], s[3], s[2])
    if k in gor:
        continue
    gor.add(k)
    tem.append(s)
tem.sort(key=lambda s: (s[2], s[0], s[3]))

with open(os.path.join(CIK, "varyant_sonuc.tsv"), "w", encoding="utf-8", newline="") as fh:
    w = csv.writer(fh, delimiter="\t")
    w.writerow(["yer", "sinif", "kademe", "dosya:satir", "t", "eslesen_alan", "aranan_varyant"])
    w.writerows(tem)

k1 = {s[0] for s in tem if s[2] == 1}
# kademe 2'de cok sik gecen ad yaygin sozcuk olabilir (Gore, Yendi, Seyh): ayri isaretle
say2 = {}
for s in tem:
    if s[2] == 2:
        say2[s[0]] = say2.get(s[0], 0) + 1
YAYGIN = {a for a, n in say2.items() if n > 25}
k2 = ({s[0] for s in tem if s[2] == 2} - k1) - YAYGIN
with open(os.path.join(CIK, "varyant_ozet.md"), "w", encoding="utf-8") as fh:
    fh.write("# Envanter varyant eslestirmesi (UMIT19, 20.11.2026; betik: varyant.py)\n\n")
    fh.write("- Maddesiz ayri yer adi (c1 kunye + e2 liste haric): %d\n" % len(yerler))
    fh.write("- Korpus: %d dosya, %d madde-satiri (data/olaylar*.js + data/kronoloji*.js)\n" % (len(dosyalar), len(SATIR)))
    fh.write("- Kademe 1 (varyant YER alaninda, kesin): %d yer\n" % len(k1))
    fh.write("- Kademe 2 (yalniz b/d metninde, olasi; elle bakilacak): %d yer\n" % len(k2))
    fh.write("- Kademe 2'de >25 satir eslesen (YAYGIN SOZCUK suphesi, kademe 2 sayisina KATILMADI): %d yer: %s\n"
             % (len(YAYGIN), ", ".join(sorted(YAYGIN))))
    fh.write("- Atlanan (aday <%d harf): %d yer\n" % (KISA, len(atlanan)))
    fh.write("- Eslesmeyen: %d yer\n" % (len(yerler) - len(k1) - len(k2) - len(atlanan)))
    fh.write("\nArap harfli yazim eslestirilmedi (Latin adindan turetilemez).\n")
    if atlanan:
        fh.write("\n## Atlanan kisa adlar\n\n" + ", ".join(atlanan) + "\n")
print("kademe1 yer:", len(k1), "kademe2 yer:", len(k2), "atlanan:", len(atlanan))
