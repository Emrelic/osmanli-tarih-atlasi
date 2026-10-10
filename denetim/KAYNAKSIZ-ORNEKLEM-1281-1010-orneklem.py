# KAYNAKSIZ-ORNEKLEM-1281-1010 — İKİNCİ örneklem: 1281-başlangıçlı halkalar
# py k2_orneklem.py <r1_orneklem.py> <evren.json> <r1_orneklem.json> <cikti.json>
# 🔴 Bölge kutuları DONUK: bolge() birinci turun betiğinden (KAYNAKSIZ-ORNEKLEM-1010-orneklem.py)
#    METİN OLARAK okunup çalıştırılır — kopyalanmaz, değiştirilmez. Hash basılır.
# Evren: kaynaksizlik_olc 'hicbiri' (1841) ∩ en az bir pencere-içi s: dönemi f ≤ 1281-01-01 olan
#        (= 1419) − birinci turda seçilmiş 48 kayıt (aynı kaydı iki kez ölçmemek için; BEYAN).
# İDDİA: seçilen kaydın 1281-başlangıçlı dönemi (birden çoksa rng.choice):
#        "yer, [1281-01-01, min(t,1923-10-29)) boyunca d'nin".
import sys, io, json, random, math, hashlib
from collections import Counter
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
TOHUM, N = 20261011, 40
kaynak = open(sys.argv[1], encoding="utf-8").read()
govde = kaynak[kaynak.index("def bolge("): kaynak.index("\nK = E[")]
print("bolge() kaynağı sha256:", hashlib.sha256(govde.encode("utf-8")).hexdigest()[:16])
ns = {}; exec(govde, ns); bolge = ns["bolge"]
E = json.load(open(sys.argv[2], encoding="utf-8")); U0, U1 = E["veri_ufku"]
R1 = {s["anahtar"] for s in json.load(open(sys.argv[3], encoding="utf-8"))["secim"]}

def ic(k): return [p for p in k["s"] if p.get("f") and p["f"] < U1 and (p.get("t") or U1) > U0]
def bas1281(k): return [p for p in ic(k) if max(p["f"], U0) == U0]
H = [k for k in E["kayit"] if bas1281(k)]
print("1281-başlangıçlı evren:", len(H), "· birinci turla kesişen:", sum(k["anahtar"] in R1 for k in H))
K = [k for k in H if k["anahtar"] not in R1]
for k in K: k["bolge"] = bolge(k["lat"], k["lon"])
dag = Counter(k["bolge"] for k in K)
tam = {b: N * n / len(K) for b, n in dag.items()}
pay = {b: int(math.floor(v)) for b, v in tam.items()}
for b in sorted(tam, key=lambda b: -(tam[b] - pay[b]))[: N - sum(pay.values())]:
    pay[b] += 1
rng = random.Random(TOHUM)
secim = []
for b in sorted(dag):
    havuz = sorted([k for k in K if k["bolge"] == b], key=lambda k: k["anahtar"])
    for k in rng.sample(havuz, pay[b]):
        L = sorted(bas1281(k), key=lambda p: (p["f"], p.get("d") or ""))
        p = rng.choice(L)
        secim.append(dict(bolge=b, anahtar=k["anahtar"], ad=k["ad"], lat=k["lat"], lon=k["lon"],
                          iddia_d=p["d"], iddia_f=U0, iddia_t=min(p.get("t") or U1, U1),
                          ham_f=p["f"], ham_t=p.get("t"), s_zincir=k["s"], d_osmanli=k["d"]))
print("tohum", TOHUM, "· N", N, "· evren", len(K))
print("evren bölge:", dict(dag.most_common()))
print("pay       :", {b: pay[b] for b, _ in dag.most_common()})
for i, s in enumerate(secim, 1):
    print(f"{i:2} {s['bolge'][:14]:14} {s['ad'][:28]:28} {s['iddia_d'][:22]:22} {s['iddia_f']}→{s['iddia_t']} (ham f {s['ham_f']})")
json.dump(dict(tohum=TOHUM, N=N, evren=len(K), evren_1281=len(H), evren_bolge=dag, pay=pay, secim=secim),
          open(sys.argv[4], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
