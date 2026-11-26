# -*- coding: utf-8 -*-
"""ARAC-MOTOR-YURUYUS-KAROLAR-0917 — dünyayı 18 örtüşmeyen karoya bölüp
ARAC-MOTOR-YURUYUS-ONGORU-0917.py'yi SIRAYLA koşturur, sonra karoları
denetim/ONGORU-MOTOR-YURUYUS-0917.json'da toplar.

NİÇİN KARO: koşu 12 aynı makinede, boş bellek ~1,3 GB. Tam dünya ızgarası
(20,9 M hücre) koşu 12'yi sayfa dosyasına iterdi. Karolar tek tek kurulur,
her biri ayrı süreçtir (bellek her karodan sonra tamamen geri verilir).

Kullanım:  py denetim/ARAC-MOTOR-YURUYUS-KAROLAR-0917.py [--yalniz-topla]
"""
import io, json, os, subprocess, sys, time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", line_buffering=True)
ARAC = os.path.join(KOK, "denetim", "ARAC-MOTOR-YURUYUS-ONGORU-0917.py")
# --yon16: B tarafı 16 komşulu Dijkstra, motor dal worktree'sinden (1.MURAT M-4332).
#   Çıktılar AYRI dosyalara gider — 8 komşulu öngörü kaydı ezilmez.
YON16 = "--yon16" in sys.argv
EK = "-16" if YON16 else ""
DAL_MOTOR = r"C:\atlas-yuruyus\arac\uret_petek.py"
HAM = os.path.join(KOK, "denetim", f"ARAC-MOTOR-YURUYUS-ONGORU-0917{EK}.json")
CIKTI = os.path.join(KOK, "denetim", f"ONGORU-MOTOR-YURUYUS-0917{'-16YON' if YON16 else ''}.json")

BOY = (-180, -120, -60, 0, 60, 120, 180)
EN = (-60, -10, 40, 85)
KAROLAR = []
for a in range(len(EN) - 1):
    for b in range(len(BOY) - 1):
        KAROLAR.append((f"k{a}{b}", (BOY[b], EN[a], BOY[b + 1], EN[a + 1])))

if "--yalniz-topla" not in sys.argv:
    if "--sifirla" in sys.argv and os.path.exists(HAM):
        os.remove(HAM)
    _var = json.load(io.open(HAM, encoding="utf-8")) if os.path.exists(HAM) else {}
    for ad, k in KAROLAR:
        if ad in _var:
            print(f"=== {ad} ZATEN VAR — atlandı", flush=True)
            continue
        t = time.time()
        print(f"=== {ad} {k}", flush=True)
        # 🔴 "--karo=" BİTİŞİK: "-180,…" ayrı verilirse argparse onu SEÇENEK sanıyor
        #    (ilk koşuda batı karolarının üçü böyle düştü, çıkış 2).
        komut = [sys.executable, ARAC, "--karo=" + ",".join(str(v) for v in k),
                 "--ad", ad, "--cikti", os.path.basename(HAM)]
        if YON16:
            komut += ["--yon16", "--motor", DAL_MOTOR]
        r = subprocess.run(komut, capture_output=True, text=True, encoding="utf-8")
        with io.open(os.path.join(KOK, "denetim", f"ARAC-MOTOR-YURUYUS-ONGORU-0917{EK}.{ad}.log"),
                     "w", encoding="utf-8") as f:
            f.write(r.stdout + "\n--- stderr ---\n" + r.stderr)
        print(f"    çıkış {r.returncode} · {time.time() - t:,.0f} sn", flush=True)
        if r.returncode != 0:
            print(r.stderr[-1500:])

H = json.load(io.open(HAM, encoding="utf-8"))
eksik = [ad for ad, _ in KAROLAR if ad not in H]
T = {}
for anah in ("kara_ic_km2", "A_sahipli_km2", "B_sahipli_km2", "sahibi_degisen_km2",
             "yeni_sahipsiz_km2", "yeni_sahipli_km2", "A_sahipsiz_km2", "B_sahipsiz_km2"):
    T[anah] = sum(H[ad]["alan"][anah] for ad, _ in KAROLAR if ad in H)
kara = T["kara_ic_km2"] or 1
T["sahibi_degisen_yuzde_kara"] = round(100.0 * T["sahibi_degisen_km2"] / kara, 2)
T["yeni_sahipsiz_yuzde_kara"] = round(100.0 * T["yeni_sahipsiz_km2"] / kara, 2)
kume = sorted((dict(k, karo=ad) for ad, _ in KAROLAR if ad in H
               for k in H[ad]["yeni_sahipsiz_kume"]["en_buyuk_10"]),
              key=lambda x: -x["km2"])[:10]
etk = {}
for ad, _ in KAROLAR:
    for r in H.get(ad, {}).get("en_cok_etkilenen_20", []):
        e = etk.setdefault(r["ad"], {"ad": r["ad"], "A_km2": 0, "B_km2": 0, "net_km2": 0})
        for f in ("A_km2", "B_km2", "net_km2"):
            e[f] += r[f]
etk20 = sorted(etk.values(), key=lambda x: -abs(x["net_km2"]))[:20]
osm = {}
for g in ("1520-06-15", "1683-06-15", "1800-06-15"):
    a = sum(H[ad]["osmanli_dogrudan"][g]["A_km2"] for ad, _ in KAROLAR if ad in H)
    b = sum(H[ad]["osmanli_dogrudan"][g]["B_km2"] for ad, _ in KAROLAR if ad in H)
    osm[g] = {"A_km2": a, "B_km2": b, "fark_km2": b - a,
              "fark_yuzde": round(100.0 * (b - a) / a, 2) if a else None}
hucresiz = sum(H[ad]["B_hucresiz_tohum"]["sayi"] for ad, _ in KAROLAR if ad in H)
# NOKTASIZLIK — sınıflanmış kümeler (karo aracı eşikleri ölçümden ÖNCE yazdı)
sinif = sorted((dict(k, karo=ad) for ad, _ in KAROLAR if ad in H
                for k in H[ad]["yeni_sahipsiz_kume"].get("siniflanan", [])),
               key=lambda x: -x["km2"])
noktasiz = [k for k in sinif if k["sinif"] == "NOKTASIZ"]
dag = [k for k in sinif if k["sinif"] == "DAG"]
nk = {"siniflanan_min_km2": 10000, "surt_esik": 1.5,
      "kume": len(sinif), "km2": sum(k["km2"] for k in sinif),
      "NOKTASIZ": {"kume": len(noktasiz), "km2": sum(k["km2"] for k in noktasiz),
                   "liste": noktasiz},
      "DAG": {"kume": len(dag), "km2": sum(k["km2"] for k in dag), "liste": dag},
      "en_buyuk_20_icinde_noktasiz": sum(1 for k in sinif[:20] if k["sinif"] == "NOKTASIZ")}
SON = {
    "_ne": "MOTOR-YURUYUS öngörüsü — KOŞUDAN ÖNCE, koşusuz ölçümle (D022). "
           "A = bugün (Voronoi + A1 tavanı, ham sahiplik), B = yarın (40 saatlik "
           "sürtünmeli+nehirli Dijkstra, ızgaranın erişmediği karada eski kural).",
    "arac": "denetim/ARAC-MOTOR-YURUYUS-ONGORU-0917.py + -KAROLAR-0917.py",
    "karo_sayisi": len(KAROLAR), "eksik_karo": eksik,
    "motor_sha_ilk12": sorted({H[ad]["meta"]["motor_sha_ilk12"] for ad, _ in KAROLAR if ad in H}),
    "ongoru": {
        "karada_sahibi_degisen": {"km2": T["sahibi_degisen_km2"], "yuzde_kara": T["sahibi_degisen_yuzde_kara"]},
        "yeni_sahipsiz": {"km2": T["yeni_sahipsiz_km2"], "yuzde_kara": T["yeni_sahipsiz_yuzde_kara"],
                          "en_buyuk_10_kume": kume},
        "yeni_sahipli_km2": T["yeni_sahipli_km2"],
        "osmanli_dogrudan": osm,
        "en_cok_etkilenen_20_yerlesim": etk20,
        "B_izgarada_hucresi_olmayan_tohum": hucresiz,
        "noktasizlik": nk,
    },
    "yon16": YON16,
    "toplam": T,
    "karolar": {ad: {"karo": k, "alan": H[ad]["alan"], "sure_sn": H[ad]["meta"]["sure_sn"]}
                for ad, k in KAROLAR if ad in H},
}
with io.open(CIKTI, "w", encoding="utf-8") as f:
    json.dump(SON, f, ensure_ascii=False, indent=1)
print("YAZILDI", CIKTI, "· eksik karo:", eksik)
_oz = dict(SON["ongoru"])
_oz["noktasizlik"] = {k: v for k, v in nk.items() if k not in ("NOKTASIZ", "DAG")}
_oz["noktasizlik"]["NOKTASIZ"] = {"kume": nk["NOKTASIZ"]["kume"], "km2": nk["NOKTASIZ"]["km2"]}
_oz["noktasizlik"]["DAG"] = {"kume": nk["DAG"]["kume"], "km2": nk["DAG"]["km2"]}
print(json.dumps(_oz, ensure_ascii=False, indent=1)[:5000])
