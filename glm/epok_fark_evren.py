# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P 1016 — eski (1009) ve yeni (1016) evreni ADIYLA karsilastirir.

Gorev (16 Ekim) 2.madde: giren · cikan · 1281 sahibi degisen. Cikti json +
konsol ozeti. Sahibi degisen noktada eski hukum kullanilmaz (yeniden baglanir).
"""
import io, json, os, sys
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
eski = json.load(io.open(os.path.join(KOK, "glm", "epok_evren_1009.json"), encoding="utf-8"))
yeni = json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"), encoding="utf-8"))
E = {e["ad"]: e for e in eski}
Y = {e["ad"]: e for e in yeni}

giren = sorted(Y.keys() - E.keys())
cikan = sorted(E.keys() - Y.keys())
degisen = []          # her ikisinde de var, 1281 sahibi farkli
ayni = 0
for ad in sorted(E.keys() & Y.keys()):
    if E[ad]["sahip_id"] != Y[ad]["sahip_id"]:
        degisen.append({
            "ad": ad,
            "eski_sahip": E[ad]["sahip_id"], "eski_sahip_ad": E[ad]["sahip_ad"],
            "yeni_sahip": Y[ad]["sahip_id"], "yeni_sahip_ad": Y[ad]["sahip_ad"],
            "bolge": Y[ad]["bolge"],
        })
    else:
        ayni += 1

# bolge degisen (kuta ayni, kutu atlamasi) — bilgi amacli
bolge_degisen = [ad for ad in E.keys() & Y.keys()
                 if E[ad]["bolge"] != Y[ad]["bolge"]]

fark = {
    "eski_toplam": len(E), "yeni_toplam": len(Y),
    "eski_asama1": sum(1 for e in eski if e["bolge"] in
                       ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu",
                        "İran-Kafkas", "Kuzey Afrika", "Arabistan-Hint")),
    "yeni_asama1": sum(1 for e in yeni if e["bolge"] in
                       ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu",
                        "İran-Kafkas", "Kuzey Afrika", "Arabistan-Hint")),
    "giren": giren, "cikan": cikan, "sahip_degisen": degisen,
    "ayni_sahip": ayni, "bolge_degisen": bolge_degisen,
}
with io.open(os.path.join(KOK, "glm", "epok_fark_evren.json"), "w",
             encoding="utf-8") as f:
    json.dump(fark, f, ensure_ascii=False, indent=1)

print(f"eski {fark['eski_toplam']} (A1 {fark['eski_asama1']}) · "
      f"yeni {fark['yeni_toplam']} (A1 {fark['yeni_asama1']})")
print(f"giren {len(giren)} · cikan {len(cikan)} · sahip_degisen {len(degisen)} · "
      f"ayni_sahip {ayni} · bolge_degisen {len(bolge_degisen)}")
print("-- GIREN (A1) --")
AS1 = ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu", "İran-Kafkas",
       "Kuzey Afrika", "Arabistan-Hint")
for ad in giren:
    if Y[ad]["bolge"] in AS1:
        print(f"  {ad} [{Y[ad]['bolge']}] -> {Y[ad]['sahip_id']}")
print("-- CIKAN (A1) --")
for ad in cikan:
    if E[ad]["bolge"] in AS1:
        print(f"  {ad} [{E[ad]['bolge']}] (eski sahip {E[ad]['sahip_id']})")
print("-- SAHIP DEGISEN (A1) --")
for d in degisen:
    if d["bolge"] in AS1:
        print(f"  {d['ad']}: {d['eski_sahip']} -> {d['yeni_sahip']} [{d['bolge']}]")
print("-- SAHIP DEGISEN (A2) --")
for d in degisen:
    if d["bolge"] not in AS1:
        print(f"  {d['ad']}: {d['eski_sahip']} -> {d['yeni_sahip']} [{d['bolge']}]")
