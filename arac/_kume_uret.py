# -*- coding: utf-8 -*-
"""Her kok kume icin AYRI madde listesi dosyasi uret (sartnameye eklenmek uzere).
CWD projenin kokunde olmali; cikti denetim/kume/ altina yazilir."""
import json, glob, os, re, collections, io

KOK = "C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/giden"
CIK = os.path.join(os.getcwd(), "denetim", "kume")
ACIK = {"sirada", "olculecek", "tekrar"}

IMZA = [
    ("emilme",            r"TEK KOK.*emilme|noktasi olmayan bolge"),
    ("icerik-talebi",     r"ICERIK TALEBI|magazin|ek okuma"),
    ("degismez2",         r"Degismez 2|kirilma gununun"),
    ("hareket-tipoloji",  r"HAREKET TIPOLOJ"),
    ("renk-kimlik",       r"renkler\.py|rengi ve o tarihte"),
    ("koridor-agi",       r"koridor ag|BESINCI unsuru|BES-ALTYAPI"),
    ("etiketleme",        r"ETIKETLEME\.md"),
    ("cizim-geometri",    r"CIZIM/GEOMETRI|sinirlari birbirine ortusmuyor"),
    ("sahiplik-teyidi",   r"KUME HUKMU VERILEMEDI|sahiplik teyidi|tekil bir ta"),
    ("olculdu",           r"OLCULDU"),
]

os.makedirs(CIK, exist_ok=True)
kume = collections.defaultdict(list)

for yol in sorted(glob.glob(os.path.join(KOK, "*", "CEVAP.json"))):
    parti = os.path.basename(os.path.dirname(yol))
    cev = json.load(open(yol, encoding="utf-8")).get("maddeler", {})
    for hid, v in sorted(cev.items()):
        if not isinstance(v, dict):
            continue
        hk = (v.get("hukum") or "").strip()
        if hk not in ACIK:
            continue
        n = " ".join((v.get("not") or "").split())
        na = n.encode("ascii", "replace").decode("ascii")
        ad = "SINIFLANMADI"
        for k, rx in IMZA:
            if re.search(rx, na, re.I):
                ad = k
                break
        kume[ad].append((parti, hid, hk, n))

for ad, lst in sorted(kume.items(), key=lambda x: -len(x[1])):
    p = os.path.join(CIK, "%s.md" % ad)
    with io.open(p, "w", encoding="utf-8") as f:
        f.write("# KUME: %s - %d acik madde\n\n" % (ad, len(lst)))
        f.write("Uretildi: arac/_kume_uret.py · kaynak: kutu/giden/*/CEVAP.json\n")
        f.write("Hukmu `sirada` / `olculecek` / `tekrar` olan maddeler.\n\n")
        f.write("| parti | madde | hukum | koordinatorun notu |\n|---|---|---|---|\n")
        for parti, hid, hk, n in lst:
            f.write("| %s | %s | %s | %s |\n"
                    % (parti, hid, hk, n.replace("|", "/")[:400]))
    print("%-20s %4d  -> denetim/kume/%s.md" % (ad, len(lst), ad))
