# -*- coding: utf-8 -*-
"""ARAC-NEHIR-VIABUNDUS-0912 — Viabundus 1.3'te KOPRU / GECIT / FERIBOT var mi?

NICIN: R2②'nin cevabi "nehir bir duvar degil, uzerinde DELIKLER olan bir
duvar" ise, o deliklerin YERI bir VERIDIR. Natural Earth'te ford/kopru
katmani YOK (olculdu: ne_10m_rivers alanlari = dissolve · scalerank ·
featurecla · name · name_alt · rivernum · note · min_zoom · name_en ·
min_label — gecit alani yok).
Ama depoda Viabundus 1.3 duruyor ve o bir PREMODERN YOL AGI veri tabani.

Salt okur. Zip'i ACMAZ, sadece listeler; geojson'u akitarak orneklem alir.
"""
import io, os, json, zipfile, collections, csv, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VB = os.path.join(KOK, "veri-kaynak", "viabundus")

print("=== KAYNAK.md ===")
k = os.path.join(VB, "KAYNAK.md")
if os.path.exists(k):
    print(io.open(k, encoding="utf-8").read().strip()[:900])

print("")
print("=== CSV ZIP ICERIGI ===")
z = os.path.join(VB, "Viabundus-1.3-CSV.zip")
tablolar = {}
with zipfile.ZipFile(z) as f:
    for n in f.namelist():
        bi = f.getinfo(n)
        print("   %-40s %8.1f KB" % (n, bi.file_size / 1024))
        tablolar[n] = bi.file_size

# --- gecit/kopru/feribot tasiyan tabloyu bul ------------------------------
ANAHTAR = ("bridge", "ferry", "ford", "brücke", "brucke", "toll", "crossing",
           "kopru", "gecit")
print("")
print("=== HANGI TABLODA GECIT/KOPRU/FERIBOT VAR ===")
bulgu = {}
with zipfile.ZipFile(z) as f:
    for n in sorted(tablolar):
        if not n.lower().endswith(".csv"):
            continue
        try:
            ham = f.read(n).decode("utf-8", errors="replace")
        except Exception as e:
            print("   %s OKUNAMADI %s" % (n, e))
            continue
        satirlar = ham.splitlines()
        if not satirlar:
            continue
        basliklar = satirlar[0]
        vurus = {a: ham.lower().count(a) for a in ANAHTAR}
        vurus = {a: c for a, c in vurus.items() if c}
        if vurus:
            bulgu[n] = {"satir": len(satirlar) - 1,
                        "basliklar": basliklar[:300], "vurus": vurus}
            print("")
            print("   >>> %s   (%d satir)" % (n, len(satirlar) - 1))
            print("       basliklar: %s" % basliklar[:240])
            print("       vurus: %s" % vurus)
            # tur sutunu varsa dagilimini bas
            try:
                rd = list(csv.DictReader(io.StringIO(ham)))
            except Exception:
                rd = []
            if rd:
                for sut in rd[0].keys():
                    dl = sut.lower()
                    if dl in ("type", "kind", "category", "tolltype",
                              "obstacletype", "feature", "class"):
                        c = collections.Counter(r.get(sut) for r in rd)
                        print("       [%s] dagilim: %s" % (sut, dict(c.most_common(14))))

hedef = os.path.join(KOK, "denetim", "NEHIR-VIABUNDUS-0912.json")
io.open(hedef, "w", encoding="utf-8").write(json.dumps(
    {"tablolar": tablolar, "gecit_tasiyan": bulgu}, ensure_ascii=False, indent=1))
print("")
print("yazildi:", hedef)
