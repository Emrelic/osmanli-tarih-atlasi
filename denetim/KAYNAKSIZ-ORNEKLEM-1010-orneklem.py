# KAYNAKSIZ-ORNEKLEM-1010 — tabakalı örneklem (tohum yazılı, tekrarlanabilir)
# Kullanım: py k_orneklem.py evren.json orneklem.json
# Birim: KAYIT (kaynaksizlik_olc "hicbiri" = 1841). Her seçilen kayıttan AYNI tohumla
# pencere içi (VERI_UFKU) s: dönemlerinden BİRİ seçilir → sınanacak İDDİA:
#   "<yer>, [max(f,1281-01-01), min(t,1923-10-29)) arasında <d> sahipliğindeydi".
import json, sys, io, random, math
from collections import Counter
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
TOHUM, N = 20261010, 48
E = json.load(open(sys.argv[1], encoding="utf-8"))
U0, U1 = E["veri_ufku"]

def bolge(lat, lon):
    # Kaba koordinat kutuları — sıra ÖNEMLİ (ilk tutan kazanır). Beyan: sınırlar yaklaşık.
    if lon < -25: return "Amerika"
    # Afrika/Asya ayrımı Kızıldeniz ekseninden: Süveyş (29.97, 32.55) → Babülmendeb (12.6, 43.3)
    # (ikinci sürümde Kûs/Mısır "Arabistan"a düşüyordu — ölçülüp düzeltildi)
    if 12.6 <= lat < 30.0 and lon < 32.55 + (30.0 - lat) * (43.3 - 32.55) / (30.0 - 12.6) and lon >= -25:
        return "Kuzey Afrika" if lat >= 15 else "Sahra-alti Afrika"
    if lat < 12.6 and -25 <= lon < 52: return "Sahra-alti Afrika"
    # Avrupa'nın 37,5° güneyine sarkan parçaları (Endülüs kıyısı · Sicilya-Malta-Ege-Girit)
    # Kuzey Afrika'ya DÜŞMESİN (ilk sürümde Milos düşüyordu — ölçülüp düzeltildi)
    avr_guney = (lat >= 36.0 and lon < -1.0) or (lat >= 34.8 and 11 <= lon < 32)
    if lat < 37.5 and -25 <= lon < 32 and lat >= 15 and not avr_guney: return "Kuzey Afrika"
    if 30.0 <= lat < 31.6 and lon < 32.6 and lon >= -25: return "Kuzey Afrika"   # Süveyş kanalı (İsmâiliye)
    # Körfezin İRAN yakası Arabistan'a düşmesin (üçüncü sürüm: Ebrekûh/Kiş/Lenge düşüyordu)
    def iran_yakasi(lat, lon):
        P = [(48.3, 29.6), (50.6, 26.8), (52.1, 26.7), (54.0, 25.6), (55.9, 26.0), (56.5, 25.0), (63.0, 25.0)]
        if lon < P[0][0]: return lat >= 29.5
        for (x1, y1), (x2, y2) in zip(P, P[1:]):
            if x1 <= lon < x2: return lat > y1 + (y2 - y1) * (lon - x1) / (x2 - x1)
        return lat > 25.0
    if 12 <= lat < 32 and 32 <= lon < 60 and not (lat >= 29.5 and lon < 48) and not iran_yakasi(lat, lon):
        return "Arabistan"
    if 36 <= lat < 43 and 26 <= lon < 45: return "Anadolu-Kafkas"
    if 41 <= lat < 45 and 37 <= lon < 50: return "Anadolu-Kafkas"
    if (29 <= lat < 37.5 or (24.5 <= lat < 32 and iran_yakasi(lat, lon))) and 32 <= lon < 63: return "Ortadogu-Iran"
    if 36 <= lat < 41 and 45 <= lon < 63: return "Ortadogu-Iran"
    if lat >= 35 and lon < 45 and not (lat >= 50 and lon >= 40): return "Avrupa"
    if lat >= 45 and 45 <= lon < 60 and lat < 50: return "Avrupa"
    if lat >= 50 or (lat >= 35 and 50 <= lon < 90): return "Orta Asya-Sibirya-Rusya"
    tibet = (lon >= 79 and lat >= 29.5) or (lon >= 86 and lat >= 28.3)
    if 5 <= lat < 37 and 60 <= lon < 92 and not tibet: return "Guney Asya"
    if 92 <= lon < 95.5 and 24 <= lat < 28.3: return "Guney Asya"          # Assam
    if (lon < 98.7 and lat < 28.5 and lon >= 92) or (lat < 22.5 and lon < 108 and lon >= 92):
        return "GD Asya-Okyanusya"                                          # Birmanya · Tay · Laos · K. Vietnam
    if lat >= 18 and lon >= 79: return "Dogu Asya"
    if lon >= 90: return "GD Asya-Okyanusya"
    return "DIGER"

K = E["kayit"]
for k in K:
    k["bolge"] = bolge(k["lat"], k["lon"])
dag = Counter(k["bolge"] for k in K)
if len(sys.argv) > 3:   # göz sınaması: her bölgeden 10 ad (AYRI tohum, seçime karışmaz)
    g = random.Random(1)
    for b in sorted(dag):
        h = [k for k in K if k["bolge"] == b]
        print(b, "|", "; ".join(f"{k['ad'][:18]}({k['lat']:.0f},{k['lon']:.0f})" for k in g.sample(h, 10)))
    sys.exit()
# Orantılı paylaştırma — en büyük kalan (Hamilton); her tabaka ≥1 değil (orantı bozulmasın)
tam = {b: N * n / len(K) for b, n in dag.items()}
pay = {b: int(math.floor(v)) for b, v in tam.items()}
for b in sorted(tam, key=lambda b: -(tam[b] - pay[b]))[: N - sum(pay.values())]:
    pay[b] += 1
rng = random.Random(TOHUM)
secim = []
for b in sorted(dag):
    havuz = sorted([k for k in K if k["bolge"] == b], key=lambda k: k["anahtar"])
    for k in rng.sample(havuz, pay[b]):
        ic = [p for p in k["s"] if p.get("f") and p["f"] < U1 and (p.get("t") or U1) > U0]
        ic.sort(key=lambda p: (p["f"], p.get("d") or ""))
        p = rng.choice(ic)
        secim.append(dict(bolge=b, anahtar=k["anahtar"], ad=k["ad"], lat=k["lat"], lon=k["lon"],
                          iddia_d=p["d"], iddia_f=max(p["f"], U0), iddia_t=min(p.get("t") or U1, U1),
                          ham_f=p["f"], ham_t=p.get("t"), s_zincir=k["s"], d_osmanli=k["d"]))
print("tohum", TOHUM, "· N", N, "· evren", len(K))
print("evren bölge:", dict(dag.most_common()))
print("pay       :", {b: pay[b] for b, _ in dag.most_common()})
for i, s in enumerate(secim, 1):
    print(f"{i:2} {s['bolge'][:14]:14} {s['ad'][:28]:28} {s['iddia_d'][:22]:22} {s['iddia_f']}→{s['iddia_t']}")
json.dump(dict(tohum=TOHUM, N=N, evren=len(K), evren_bolge=dag, pay=pay, secim=secim),
          open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
