# Mekanik ön-sınıflama: her SONRA penceresi için
#  H  : künye t YYYY-01-01 (yıl hassasiyeti) ve ölü dilim o yıl içinde biter  → hassasiyet içi
#  B0 : bugünkü veride s: kaydı yok → yayındaki gövde bayat üretim
#  F  : ölü dilimdeki s: kayıtlarının devraldığı sahip (sonraki dönem) ölü dilim BAŞINDA zaten canlı
#       ⇒ ardıl künye VAR, kayıt geç devrediyor (çare: kayıt; künye değil)
#  BC : devralan sahip ölü dilim başında DOĞMAMIŞ ⇒ arada gerçek sahip eksik (b) ya da künye kısa (c) — KAYNAK İSTER
import json, sys, io, os, subprocess, datetime, contextlib
from collections import Counter, defaultdict
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = sys.argv[1]
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
yol = os.path.join(KOK, "data", "devletler.js")
js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
      "process.stdout.write(JSON.stringify(window.DEVLETLER||[]));" % json.dumps(yol))
KL = json.loads(subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8").stdout)
pencere = defaultdict(list)
for k in KL:
    for a in {k.get("id"), k.get("harita")}:
        if a and k.get("f"): pencere[a].append((k["f"], k.get("t") or "9999"))
def pad(s):
    p = s.split("-"); return "%04d-%s" % (int(p[0]), "-".join(p[1:])) if p[0].isdigit() else s
def canli(a, gun):
    if a in ("OSMANLI", "osmanli"): return True
    return any(pad(f) <= pad(gun) <= pad(t) for f, t in pencere.get(a, []))
def sonraki(y, t):
    adaylar = []
    for kat in ("s", "d", "v", "isg"):
        for q in y.get(kat) or []:
            if q.get("f") and pad(q["f"]) >= pad(t) and pad(q["f"]) <= pad(t)[:4] + "-12-31":
                adaylar.append((pad(q["f"]), q.get("d") or ("OSMANLI" if kat == "d" else kat + ":?")))
            if q.get("f") and pad(q["f"]) <= pad(t) < pad(q.get("t") or "9999") and kat != "s":
                adaylar.append((pad(t), q.get("d") or "OSMANLI"))
    return min(adaylar)[1] if adaylar else None

d = json.load(open(sys.argv[2], encoding="utf-8"))
sonuc = []
for x in d["vakalar"]:
    if x["yon"] == "ONCE": continue
    a = x["anahtar"]
    kts = [k[2] for k in x["kunyeler"] if k[2]]
    kt = max(kts, key=pad)
    if x["aktif_s"] == 0:
        sinif, ayr = "B0", ""
    elif kt.endswith("-01-01") and pad(x["olu_t"]) <= "%04d-01-01" % (int(kt[:4]) + 1):
        sinif, ayr = "H", ""
    else:
        dev = Counter()
        for y in Y:
            for p in y.get("s") or []:
                if p.get("d") == a and pad(p["f"]) < pad(x["olu_t"]) and pad(p["t"]) > pad(x["olu_f"]):
                    dev[(sonraki(y, p["t"]), p["t"])] += 1
        f_say = sum(n for (nx, tt), n in dev.items() if nx and canli(nx, x["olu_f"]))
        bc_say = sum(n for (nx, tt), n in dev.items() if not (nx and canli(nx, x["olu_f"])))
        sinif = "F" if f_say and not bc_say else ("BC" if bc_say and not f_say else "F+BC")
        ayr = "; ".join(f"{nx}@{tt}×{n}{'' if nx and canli(nx, x['olu_f']) else '(doğmamış)'}"
                        for (nx, tt), n in sorted(dev.items(), key=lambda z: -z[1])[:5])
    x["sinif"], x["devir"] = sinif, ayr
    sonuc.append(x)
c = Counter(x["sinif"] for x in sonuc)
print("sınıf:", dict(c))
for s in ("B0", "H", "F", "F+BC", "BC"):
    L = [x for x in sonuc if x["sinif"] == s]
    print(f"\n== {s}: {len(L)} pencere · {len({x['anahtar'] for x in L})} kimlik · "
          f"{sum(x['gun'] for x in L)} gün · {sum(x['km2_gun'] for x in L)/1e6:.0f} milyon km²·gün")
    for x in sorted(L, key=lambda x: -x["km2_gun"]):
        print(f"  {x['anahtar']:22} künye_t={max([k[2] for k in x['kunyeler']], key=pad)} ölü {x['olu_f']}→{x['olu_t']} "
              f"{x['gun']}g {x['km2']}km² s:{x['aktif_s']} | {x['devir']}")
json.dump(sonuc, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
