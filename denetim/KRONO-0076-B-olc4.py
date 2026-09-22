# -*- coding: utf-8 -*-
"""KRONO-0076-B ÖLÇÜM 4 — B9 SINAVI + aksan/kasa BAGIMSIZ ad taramasi.

M-5024 ①: "0 bulundu" raporlanmadan ONCE aramanin CALISTIGI kanitlanir.
Bu betik ONCE pozitif vakalarla atesler (icinde ı · İ · ş · ğ gecen adlar),
SONRA 'bulunamadi' hukmu verir.
"""
import io, os, re, sys, glob, unicodedata

KOK = r"C:\atlas\data"
CIKTI = r"C:\atlas\denetim\KRONO-0076-B-olc4.txt"
ATLA = {"donemler.js", "devletler_harita.js", "bolgeler.js", "bos_alanlar.js",
        "altlik.js", "devirler.js"}

out = io.open(CIKTI, "w", encoding="utf-8")
def y(s=""): out.write(s + "\n")

# --- Turkce-guvenli normallestirici (D215): once Turkce harfleri ELDE
#     degistir, SONRA lower + NFKD. [^a-z] SUZGECI KULLANILMIYOR.
ESLEME = {
    "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
    "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u",
    "Ê": "e", "ê": "e", "Ô": "o", "ô": "o", "Á": "a", "á": "a",
    "É": "e", "é": "e", "'": "", "’": "", "‘": "", "`": "", "-": " ",
    "–": " ", "—": " ", "(": " ", ")": " ", ".": "",
}
def nrm(s):
    s = "".join(ESLEME.get(c, c) for c in s)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    return " ".join(s.split())

# --- B9 SINAVI: normallestirici Turkce harfleri yiyor mu?
y("=" * 78)
y("B9 SINAVI — normallestirici pozitif vakalarla ATESLENDI (M-5024 ①)")
y("=" * 78)
SINAV = [("Kıbrıs", "kibris"), ("Islahat", "islahat"), ("İslimye", "islimye"),
         ("Eski Zağra", "eski zagra"), ("Şarkî Rumeli", "sarki rumeli"),
         ("Tatarpazarcığı", "tatarpazarcigi"), ("Nâlût", "nalut"),
         ("Bi'rüssebi", "birussebi"), ("Fâşoda", "fasoda")]
kirik = 0
for ham, beklenen in SINAV:
    g = nrm(ham)
    ok = (g == beklenen)
    if not ok:
        kirik += 1
    y("  %-18s -> %-18s beklenen %-18s %s" % (ham, g, beklenen, "OK" if ok else "KIRIK"))
y("  >> SONUC: %s (%d kirik)" % ("SUZGEC CALISIYOR" if kirik == 0 else "SUZGEC KIRIK — HUKUM VERME", kirik))
y()

# --- ad: havuzu
AD = re.compile(r'\bad:"([^"]+)"')
havuz = {}      # nrm(ad) -> set((dosya, ham_ad))
for f in sorted(glob.glob(os.path.join(KOK, "*.js"))):
    b = os.path.basename(f)
    if b in ATLA:
        continue
    try:
        t = open(f, encoding="utf-8").read()
    except Exception:
        continue
    for m in AD.finditer(t):
        havuz.setdefault(nrm(m.group(1)), set()).add((b, m.group(1)))

y("AD HAVUZU: %d tekil normal ad" % len(havuz))
# B9 ikinci ates: havuzda OLDUGUNU BILDIGIM bir ad bulunuyor mu?
for kanit in ["filibe", "tatarpazarcigi", "tokar", "nalut", "zuvare"]:
    y("  POZITIF KANIT  %-16s -> %s" % (kanit, "BULUNDU" if kanit in havuz else "🔴 BULUNAMADI (SUZGEC KIRIK)"))
y()


def sor(baslik, adaylar):
    y("-" * 78)
    y(baslik)
    bulunan = []
    for a in adaylar:
        n = nrm(a)
        # tam eslesme
        if n in havuz:
            bulunan.append((a, "TAM", sorted(havuz[n])[:3]))
            continue
        # parcali eslesme (havuzdaki ad aranan adi ICERIYOR mu ya da tersi)
        p = [(d, h) for k, v in havuz.items() if n and (n in k or k in n)
             for d, h in v]
        if p:
            bulunan.append((a, "PARCALI", sorted(set(p))[:4]))
    yok = [a for a in adaylar if a not in [b[0] for b in bulunan]]
    for a, tur, nerede in bulunan:
        y("  VAR  %-20s [%s]  %s" % (a, tur, nerede))
    y("  YOK  (%d/%d): %s" % (len(yok), len(adaylar), ", ".join(yok)))
    return yok


sor("H-0081 — SARKI RUMELI kazalari (1878-1885). Vilayet 6 sancak/kaza kumesi:",
    ["Filibe", "Tatarpazarcığı", "Eski Zağra", "Yeni Zağra", "İslimye",
     "Burgaz", "Hasköy", "Kızanlık", "Çırpan", "Ahyolu", "Mesemvri",
     "Sozopol", "Karînâbâd", "Yanbolu", "Aydos", "Rupçoz", "Ahıçelebi",
     "Sultanyeri", "Cisr-i Mustafa Paşa", "Kırcaali"])

sor("H-0103 — Refah-Taba hattinin iki ucu ve Sina",
    ["Refah", "Taba", "Akabe", "El-Ariş", "Nahl", "Kusayme", "Bi'rüssebi",
     "Tûr", "Süveyş", "Kal'atü'n-Nahl"])

sor("H-0082 / H-0087 — Tunus-Trablusgarp sinirinin iki ucu",
    ["Ras Ecdir", "Gadames", "Zuvâre", "Nâlût", "Sinâven", "Dirc",
     "Cerbe", "Bin Gerdan", "Tatavin", "Medenin", "Zarzis", "Gabes",
     "Kâbis", "Dehibat", "Remada"])

sor("H-0070 — Dogu Sudan (Beja/Hadendoa) ve ara bolge",
    ["Tokar", "Sevâkin", "Sinkat", "Kesela", "Berber", "Hartum", "Dongola",
     "Sennar", "Kordofan (Ubeyyid)", "Şendi", "Vâdihalfa", "El-Faşir",
     "Ebû Hamed", "Metemme", "Tamai", "Ted", "Handub"])

out.close()
print("YAZILDI:", CIKTI)
