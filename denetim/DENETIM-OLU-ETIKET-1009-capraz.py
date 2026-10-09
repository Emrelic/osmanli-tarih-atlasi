# 4c listesi (denetle.degismez4, bugünkü veri) × harita SONRA vakaları
import json, sys, io, os, contextlib
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = sys.argv[1]
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi
import denetle
with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
    ihlal, kunyesiz, ok, asan, once, ch = denetle.degismez4(Y)
print("4c asan:", len(asan), "· 4d once:", len(once), "· hayalet:", len(ihlal), "· ölçüldü:", ok)
k4c = {}
for a, k, f, t, kt, yil in asan: k4c.setdefault(k, []).append((a, f, t, kt))
d = json.load(open(sys.argv[2], encoding="utf-8"))
V = [x for x in d["vakalar"] if x["yon"] != "ONCE" and x["aktif_s"] > 0]
ic, dis = [], []
for x in V:
    (ic if x["anahtar"] in k4c else dis).append(x)
print("harita SONRA (s: var):", len(V), "· kimliği 4c'de olan:", len(ic), "· 4c'nin HİÇ görmediği:", len(dis))
print("4c kimlik:", len(k4c), "· haritada ölü-sonrası boyanan 4c kimliği:", len({x['anahtar'] for x in ic}))
print("4c'de olup haritada SONRA vakası olmayan kimlikler:", sorted(set(k4c) - {x['anahtar'] for x in V}))
print("\n4c'nin GÖRMEDİĞİ (kimlik bazında):")
for x in sorted(dis, key=lambda x: -x["km2_gun"]):
    print(f"  {x['anahtar']:24} künye_t={[k[2] for k in x['kunyeler']]} ölü {x['olu_f']}→{x['olu_t']} "
          f"{x['gun']}g {x['km2']}km² s:{x['aktif_s']} {x['aktif_ornek'][:4]}")
print("\n4c kimliğinde, ama BU pencere ≤400 gün:")
for x in sorted(ic, key=lambda x: -x["km2_gun"]):
    if x["gun"] <= 400:
        print(f"  {x['anahtar']:24} ölü {x['olu_f']}→{x['olu_t']} {x['gun']}g {x['km2']}km² s:{x['aktif_s']}")
json.dump(dict(dis=dis, ic=ic), open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
