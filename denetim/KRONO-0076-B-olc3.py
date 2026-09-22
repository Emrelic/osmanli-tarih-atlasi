# -*- coding: utf-8 -*-
"""KRONO-0076-B ÖLÇÜM 3 (hızlı) — 5 veri maddesinin TAM kaydı.

Tek geçiş: bütün ad:"..." kayıtları bir kere çıkarılır, sonra sorulur.
Çıktı: denetim/KRONO-0076-B-olc3.txt
"""
import io, os, re, sys, glob

KOK = r"C:\atlas\data"
CIKTI = r"C:\atlas\denetim\KRONO-0076-B-olc3.txt"
ATLA = {"donemler.js", "devletler_harita.js", "bolgeler.js", "bos_alanlar.js",
        "altlik.js", "devirler.js"}

out = io.open(CIKTI, "w", encoding="utf-8")


def y(s=""):
    out.write(s + "\n")


AD = re.compile(r'\{\s*ad:"([^"]+)"')

# --- TEK GECIS: butun ad:"..." kayitlarini cikar
havuz = {}            # ad -> [(dosya, tam_kayit)]
dosya_sayisi = 0
for f in sorted(glob.glob(os.path.join(KOK, "*.js"))):
    b = os.path.basename(f)
    if b in ATLA:
        continue
    try:
        t = open(f, encoding="utf-8").read()
    except Exception:
        continue
    dosya_sayisi += 1
    for m in AD.finditer(t):
        ad, i = m.group(1), m.start()
        d, j, n = 0, m.start(), len(t)
        while j < n:
            c = t[j]
            if c == "{":
                d += 1
            elif c == "}":
                d -= 1
                if d == 0:
                    break
            j += 1
        havuz.setdefault(ad, []).append((b, t[i:j + 1]))

y("TARANAN DOSYA: %d · CIKARILAN ad: kaydi: %d (tekil ad: %d)"
  % (dosya_sayisi, sum(len(v) for v in havuz.values()), len(havuz)))
y()


def goster(ad, kirp=520):
    kk = havuz.get(ad)
    if not kk:
        return False
    for d, k in kk:
        lat = re.search(r"lat:\s*(-?[\d.]+)", k)
        lon = re.search(r"lon:\s*(-?[\d.]+)", k)
        s = re.search(r"s:\[.*?\](?=\s*[,}])", k, re.S)
        v = re.search(r"v:\[.*?\](?=\s*[,}])", k, re.S)
        y("  [%s] %-22s lat=%s lon=%s" % (d, ad,
          lat.group(1) if lat else "-", lon.group(1) if lon else "-"))
        if s:
            y("      s: " + s.group(0)[:kirp])
        if v:
            y("      v: " + v.group(0)[:260])
    return True


y("#" * 78)
y("# H-0070 — DOGU SUDAN noktalarinin s: sahipligi (1884-1885 penceresi)")
y("#" * 78)
SUDAN = ["Tokar", "Sevâkin", "Kesela", "Berber", "Dongola", "Hartum", "Sennâr",
         "Sennar", "Kordofan (Ubeyyid)", "Kordofan", "Fâşir", "Faşir", "El-Faşir",
         "Ceneyne", "Vâdihalfa", "Vadi Halfa", "Halfa", "Şendi", "Sinkat",
         "Masavva", "Suakin", "Dârfûr", "Darfur", "Fâşoda", "Faşoda"]
for ad in SUDAN:
    if not goster(ad):
        y("  %-24s bulunamadi" % ad)

y()
y("#" * 78)
y("# H-0081 — SARKI RUMELI (1878-1885) nokta sayimi")
y("#" * 78)
DR = ["Filibe", "Tatarpazarcığı", "Eski Zağra", "Eskizağra", "Zağra",
      "Yeni Zağra", "İslimye", "Burgaz", "Burgas", "Hasköy", "Kızanlık",
      "Çırpan", "Ahyolu", "Mesemvri", "Sozopol", "Süzebolu", "Karînâbâd",
      "Karinabad", "Stara Zagora", "Nova Zagora", "Plovdiv", "Pazarcık",
      "Sliven", "Haskovo", "Kazanlak", "Yanbolu", "Aydos", "Rusçuk", "Varna"]
var, yok = [], []
for ad in DR:
    if goster(ad, kirp=300):
        var.append(ad)
    else:
        yok.append(ad)
y("  ---")
y("  VAR (%d): %s" % (len(var), ", ".join(var)))
y("  YOK (%d): %s" % (len(yok), ", ".join(yok)))

y()
y("#" * 78)
y("# H-0103 — Refah / Taba / Akabe cevresi")
y("#" * 78)
for ad in ["Refah", "Taba", "Akabe", "Akabe (Ayle)", "El-Ariş", "Ariş", "Gazze",
           "Kal'atü'n-Nahl", "Nahl", "Kusayme", "Bi'rüssebi", "Birüssebi"]:
    if not goster(ad, kirp=300):
        y("  %-24s bulunamadi" % ad)

y()
y("#" * 78)
y("# H-0082 / H-0087 — Ras Ecdir / Gadames / Trablusgarp bati sinir noktalari")
y("#" * 78)
for ad in ["Ras Ecdir", "Râs Ecdîr", "Gadames", "Gadâmis", "Gadamis", "Zuvare",
           "Zuvâre", "Nalut", "Nâlût", "Sinâven", "Sinaven", "Dirc", "Cerbe",
           "Bin Gerdan", "Bingerdan", "Tatavin", "Medenin", "Zarzis"]:
    if not goster(ad, kirp=300):
        y("  %-24s bulunamadi" % ad)

out.close()
print("YAZILDI:", CIKTI)
