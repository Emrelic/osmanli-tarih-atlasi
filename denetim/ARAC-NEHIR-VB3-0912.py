# -*- coding: utf-8 -*-
"""ARAC-NEHIR-VB3-0912 — Viabundus'ta KOPRU ve FERIBOT dugumleri:
kac tane, ZAMAN ARALIKLI mi, ve atlasin cografyasinin neresini kapatiyor?

🔑 Bulgu: Nodes.csv'de `Is_Bridge` / `Is_Ferry` BOOLEAN sutunlari VAR ve
yanlarinda `Bridge_From`/`Bridge_To`, `Ferry_From`/`Ferry_To` TARIH
araliklari duruyor. Atlas GUN hassasiyetinde calisiyor; bir kopru
1450'de yapildiysa 1400'de yardim etmez. Bu, sema olarak BIREBIR oturuyor.
"""
import io, os, json, zipfile, collections, csv

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
Z = os.path.join(KOK, "veri-kaynak", "viabundus", "Viabundus-1.3-CSV.zip")
with zipfile.ZipFile(Z) as f:
    rd = list(csv.DictReader(io.StringIO(
        f.read("Nodes.csv").decode("utf-8", errors="replace"))))


def dogru(v):
    return str(v).strip().lower() in ("1", "true", "t", "yes", "y")


kopru = [r for r in rd if dogru(r.get("Is_Bridge"))]
feribot = [r for r in rd if dogru(r.get("Is_Ferry"))]
gumruk = [r for r in rd if dogru(r.get("Is_Toll"))]
print("Nodes toplam        : %d" % len(rd))
print("Is_Bridge  = DOGRU  : %d" % len(kopru))
print("Is_Ferry   = DOGRU  : %d" % len(feribot))
print("Is_Toll    = DOGRU  : %d   (kiyas icin)" % len(gumruk))
print("KOPRU + FERIBOT     : %d  ← 'duvardaki DELIKLER'" % (len(kopru) + len(feribot)))


def tarihli(kayit, on):
    a = sum(1 for r in kayit if (r.get(on + "_From") or "").strip())
    b = sum(1 for r in kayit if (r.get(on + "_To") or "").strip())
    return a, b


ka, kb = tarihli(kopru, "Bridge")
fa, fb = tarihli(feribot, "Ferry")
print("")
print("ZAMAN ARALIGI DOLU MU:")
print("   kopru   From %d/%d   To %d/%d" % (ka, len(kopru), kb, len(kopru)))
print("   feribot From %d/%d   To %d/%d" % (fa, len(feribot), fb, len(feribot)))


def ornek_tarih(kayit, on, n=6):
    out = []
    for r in kayit:
        a = (r.get(on + "_From") or "").strip()
        b = (r.get(on + "_To") or "").strip()
        if a or b:
            out.append((r.get("Name", "")[:26], a, b))
        if len(out) >= n:
            break
    return out


print("   ornek kopru (ad · from · to):")
for n, a, b in ornek_tarih(kopru, "Bridge"):
    print("      %-26s %s .. %s" % (n, a or "—", b or "—"))

# --- cografi kapsam ve ATLASIN CEKIRDEGIYLE ORTUSME ------------------------
def kutu(kayit):
    la = [float(r["Latitude"]) for r in kayit if r.get("Latitude")]
    lo = [float(r["Longitude"]) for r in kayit if r.get("Longitude")]
    return (min(lo), max(lo), min(la), max(la)) if la else None


hepsi = kopru + feribot
kb2 = kutu(hepsi)
print("")
print("GECITLERIN KAPSAMI: lon %.2f..%.2f  lat %.2f..%.2f" % kb2)

# Atlasin Osmanli cekirdegi (sinav kutusu ile ayni): 26-45 D / 36-42 K
CEK = (26.0, 45.0, 36.0, 42.0)
ic = [r for r in hepsi
      if r.get("Latitude") and r.get("Longitude")
      and CEK[0] <= float(r["Longitude"]) <= CEK[1]
      and CEK[2] <= float(r["Latitude"]) <= CEK[3]]
print("OSMANLI CEKIRDEGINDE (26-45D / 36-42K) gecit dugumu: %d / %d"
      % (len(ic), len(hepsi)))

# Tuna hatti kabaca: 18-30 D / 43-48 K
TUNA = (18.0, 30.0, 43.0, 48.0)
it = [r for r in hepsi
      if r.get("Latitude") and r.get("Longitude")
      and TUNA[0] <= float(r["Longitude"]) <= TUNA[1]
      and TUNA[2] <= float(r["Latitude"]) <= TUNA[3]]
print("TUNA HAVZASINDA (18-30D / 43-48K)         gecit dugumu: %d" % len(it))

hedef = os.path.join(KOK, "denetim", "NEHIR-VIABUNDUS3-0912.json")
io.open(hedef, "w", encoding="utf-8").write(json.dumps({
    "nodes_toplam": len(rd),
    "is_bridge": len(kopru), "is_ferry": len(feribot), "is_toll": len(gumruk),
    "gecit_toplam": len(hepsi),
    "zaman_araligi": {"kopru_from": ka, "kopru_to": kb,
                      "feribot_from": fa, "feribot_to": fb},
    "kapsam_bbox": {"lon": [kb2[0], kb2[1]], "lat": [kb2[2], kb2[3]]},
    "osmanli_cekirdeginde": len(ic),
    "tuna_havzasinda": len(it),
}, ensure_ascii=False, indent=1))
print("")
print("yazildi:", hedef)
