# -*- coding: utf-8 -*-
"""ONCE1281-YERLESIM-OLC — ① 1281 duvarı · ② 1281 öncesi dönemler · evren sayımı.

Canlı küme YALNIZ girdi.GIRDI_DOSYALARI (CLAUDE.md §5). Veri yazmaz.
Çıktı: scratch JSON (--cik <yol>) + ekrana özet.
"""
import sys, io, os, re, json, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

EPOK = "1281-01-01"
KUSAK = "1000-01-01"
KATLAR = ("s", "d", "v", "isg")

Y = girdi.yukle(sessiz=True)
print(f"GIRDI_DOSYALARI: {len(girdi.GIRDI_DOSYALARI)} dosya · evren: {len(Y)} nokta")

# --- D240 çapraz sınavı: ham metinde üç biçim --------------------------------
ham = {"ciplak": 0, "json": 0, "dizgi_ici": 0}
for ad in girdi.GIRDI_DOSYALARI:
    t = io.open(os.path.join(girdi.DATA, ad), encoding="utf-8").read()
    ham["ciplak"] += len(re.findall(r'(?<![\w"\\])f\s*:\s*"1281-01-01"', t))
    ham["json"] += len(re.findall(r'(?<!\\)"f"\s*:\s*"1281-01-01"', t))
    ham["dizgi_ici"] += len(re.findall(r'\\"f\\"\s*:\s*\\"1281-01-01|f:\\"1281-01-01', t))

# --- ① ve ② --------------------------------------------------------------
donem_1281 = []            # (ad, kat)
nokta_1281 = set()
dogan, el_degistiren = [], []
once = []                  # f < EPOK
tam_once = []              # t <= EPOK (ufkun tamamen dışında)
kur_once, kur_1281 = [], []
sahipsiz = []
ilk_f_dagilim = {}
kd_1281 = 0

for y in Y:
    donemler = [(k, p) for k in KATLAR for p in (y.get(k) or []) if p.get("f")]
    for k, p in donemler:
        if p["f"] == EPOK:
            donem_1281.append((y["ad"], k))
            nokta_1281.add(y["ad"])
        if p["f"] < EPOK:
            once.append({"ad": y["ad"], "kat": k, "f": p["f"], "t": p.get("t"),
                         "d": p.get("d") or p.get("k"), "dosya": y["_kaynak"]})
            if (p.get("t") or "9999") <= EPOK:
                tam_once.append(once[-1])
    for p in y.get("kd") or []:
        if p.get("f") == EPOK:
            kd_1281 += 1
    kur = y.get("kur")
    if kur and kur < EPOK:
        kur_once.append((y["ad"], kur))
    if kur == EPOK:
        kur_1281.append(y["ad"])
    sahip = [p for k, p in donemler if k in ("s", "d", "v")]
    if not sahip:
        sahipsiz.append(y["ad"])
        continue
    ilk = min(p["f"] for p in sahip)
    ilk_f_dagilim[ilk[:2] + "xx" if ilk >= EPOK else "<1281"] = \
        ilk_f_dagilim.get(ilk[:2] + "xx" if ilk >= EPOK else "<1281", 0) + 1
    if y["ad"] in nokta_1281:
        if ilk == EPOK:
            dogan.append(y["ad"])
        elif ilk < EPOK:
            el_degistiren.append(y["ad"])   # 1281'den önce başlayıp 1281'de devreden
        else:
            el_degistiren.append(y["ad"])   # imkânsız ama sayılır

# 1281'de "yalnız el değiştiren": 1281-01-01'de bir dönem başlıyor VE aynı gün
# biten başka bir dönem var (ilk dönem 1281 öncesinde)
yalniz_el = [a for a in el_degistiren]

# 1281-01-01'de doğup kur: taşımayan (ARAŞTIRILMAMIŞ epok) vs kur: ile gerekçeli
kur_1281_s = set(kur_1281)
dogan_kursuz = [a for a in dogan if a not in kur_1281_s]

# isg-only noktalar 1281'de?
print()
print("① 1281 DUVARI")
print(f"   f:'1281-01-01' dönem (s/d/v/isg): {len(donem_1281)}  "
      f"[s {sum(1 for _,k in donem_1281 if k=='s')} · d {sum(1 for _,k in donem_1281 if k=='d')} · "
      f"v {sum(1 for _,k in donem_1281 if k=='v')} · isg {sum(1 for _,k in donem_1281 if k=='isg')}]")
print(f"   ayrı nokta: {len(nokta_1281)}  · kd: 1281-01-01 dönemi: {kd_1281}")
print(f"   D240 ham sayım (tüm dosyalar, yorum dahil): çıplak {ham['ciplak']} · json {ham['json']} · dizgi içi {ham['dizgi_ici']}")
print(f"   ilk sahiplik dönemi 1281-01-01 (DOĞAN): {len(dogan)}  · bunların kur:'1281-01-01' taşıyanı {len(dogan)-len(dogan_kursuz)}")
print(f"   1281'den ÖNCE başlayıp 1281-01-01'de EL DEĞİŞTİREN: {len(yalniz_el)} {yalniz_el[:10]}")
print(f"   sahipsiz (s/d/v yok): {len(sahipsiz)}")
print(f"   ilk dönem yüzyıl dağılımı: {dict(sorted(ilk_f_dagilim.items()))}")
print()
print("② 1281 ÖNCESİ")
print(f"   f < 1281-01-01 dönem: {len(once)}  · ayrı nokta: {len(set(o['ad'] for o in once))}")
print(f"   tamamen 1281 öncesinde biten (t <= 1281-01-01): {len(tam_once)}")
for o in once[:40]:
    print("     ", o)
print(f"   kur: < 1281: {len(kur_once)} {kur_once[:15]}")
print(f"   kur: == 1281-01-01: {len(kur_1281)}")

# --- bağlanmamış yerleşim dosyaları (canlı değil) ---------------------------
tum = sorted(os.path.basename(p) for p in glob.glob(os.path.join(girdi.DATA, "yerlesimler*.js")))
baglanmamis = [f for f in tum if f not in girdi.GIRDI_DOSYALARI]
print()
print(f"data/yerlesimler*.js: {len(tum)} dosya · canlı {len(girdi.GIRDI_DOSYALARI)} · bağlanmamış {len(baglanmamis)}: {baglanmamis}")
bag_once = []
for f in baglanmamis:
    try:
        for y in girdi.oku_dosya(f):
            for k in KATLAR:
                for p in y.get(k) or []:
                    if p.get("f") and p["f"] < EPOK:
                        bag_once.append((f, y.get("ad"), k, p["f"]))
    except Exception as e:
        print(f"   {f}: OKUNAMADI ({e.__class__.__name__}: {str(e)[:80]})")
print(f"   bağlanmamış dosyalarda f<1281 dönem: {len(bag_once)} {bag_once[:10]}")

if "--cik" in sys.argv:
    yol = sys.argv[sys.argv.index("--cik") + 1]
    json.dump({"evren": len(Y), "donem_1281": len(donem_1281), "nokta_1281": len(nokta_1281),
               "dogan": len(dogan), "dogan_kur1281": len(dogan) - len(dogan_kursuz),
               "el_degistiren": yalniz_el, "sahipsiz": len(sahipsiz),
               "once": once, "tam_once": tam_once, "kur_once": kur_once,
               "kd_1281": kd_1281, "ham_d240": ham, "ilk_f_dagilim": ilk_f_dagilim,
               "baglanmamis": baglanmamis, "baglanmamis_once": bag_once},
              io.open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
