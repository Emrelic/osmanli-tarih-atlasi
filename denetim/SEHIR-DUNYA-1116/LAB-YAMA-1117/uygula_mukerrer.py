# -*- coding: utf-8 -*-
"""MUKERRER-SEHIR.tsv (37 çift) + AD-KAYNAK-YAMA-OTEKI.json birleştirme (LAB-YAMA-1117). Varsayılan DRY-RUN; --uygula yazar.
Kalan = TSV 'kanonik' (puan = olay+2*sahip+3*tanıklı) ve ÖLÇÜLÜR (puanı yeniden hesaplar, atlas_ad uyumunu, düşen sahip çatışmasını sınar).
Düşen kaydın TAMAMI ARSIV-MUKERRER-1117.json'a yazılır; olay (t+k farklıysa), adlar, ad_kaynak, boş alanlar, ic_not kalana taşınır;
sahip yalnız kalanın sahip zinciri BOŞSA taşınır (çatışan zincir kalanı bozmasın)."""
import csv, json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
UYGULA = "--uygula" in sys.argv
GEC = set()
if "--gec" in sys.argv:
    GEC = set(sys.argv[sys.argv.index("--gec") + 1].split(","))
TSV = os.path.join(KOK, "denetim/SEHIR-DUNYA-1116/AD-ESDEGER/MUKERRER-SEHIR.tsv")
ARSIV = os.path.join(KOK, "denetim/SEHIR-DUNYA-1116/CIFT-ID/ARSIV-MUKERRER-1117.json")
YAMA2 = json.load(open(os.path.join(KOK, "denetim/SEHIR-DUNYA-1116/AD-ESDEGER/AD-KAYNAK-YAMA-OTEKI.json"), encoding="utf-8"))


def yol(f): return os.path.join(KOK, "data", f)


def oku(p):
    s = open(p, encoding="utf-8", newline="").read()
    i = s.index("window.")
    j = s.index("= [", i) + 2
    return s[:i], s[i:j - 2].strip(), json.loads(s[j:].rstrip().rstrip(";")), s


def yaz_metin(ust, ad, veri):
    return ust + ad + " = " + json.dumps(veri, ensure_ascii=False, indent=1) + ";\n"


DOS = {}


def al(f):
    p = yol(f)
    if p not in DOS:
        ust, ad, veri, orj = oku(p)
        if yaz_metin(ust, ad, veri).replace("\r\n", "\n") != orj.replace("\r\n", "\n"):
            print("BİÇİM BİREBİR DEĞİL:", f); sys.exit(1)
        DOS[p] = [ust, ad, veri, "\r\n" in orj]
    return DOS[p][2]


def bul(f, i):
    r = [k for k in al(f) if k["id"] == i]
    return r[0] if len(r) == 1 else None


def puan(k):
    o = len(k.get("olay") or []); s = len(k.get("sahip") or [])
    t = sum(1 for x in (k.get("olay") or []) + (k.get("sahip") or []) if x.get("tanik"))
    return o + 2 * s + 3 * t


# AD-KAYNAK-YAMA-OTEKI: once dogrudan uygula (idempotent) - TSV'de olmayan kayitlar icin de
YAMA_UYG = []
for y in YAMA2:
    R = bul(y["dosya"], y["id"])
    if not R:
        YAMA_UYG.append((y["id"], "kayit yok")); continue
    mev = {(x["ad"], x.get("dil")) for x in R.get("ad_kaynak") or []}
    n = 0
    for x in y["ad_kaynak"]:
        if (x["ad"], x.get("dil")) not in mev:
            R.setdefault("ad_kaynak", []).append(x); n += 1
    m = 0
    for a in y.get("adlar_eklenecek", []):
        if a not in R.setdefault("adlar", []):
            R["adlar"].append(a); m += 1
    YAMA_UYG.append((y["id"], "ad_kaynak +%d, adlar +%d" % (n, m)))
for u in YAMA_UYG:
    print("[YAMA-OTEKI]", u[0], u[1])
Y2 = {(y["dosya"], y["id"]): y for y in YAMA2}
ARS, OZET = [], []
for r in csv.DictReader(open(TSV, encoding="utf-8"), delimiter="\t"):
    lid, lf, oid, of = r["lab_id"], r["lab_dosya"], r["oteki_id"], r["oteki_dosya"]
    L, O = bul(lf, lid), bul(of, oid)
    if not L or not O:
        OZET.append((lid, "ATLA", "kayıt bulunamadı lab=%s oteki=%s (önceki işlemle taşınmış/silinmiş)" % (bool(L), bool(O)))); continue
    if lid in GEC:
        OZET.append((lid, "GEÇ", "elle atlandı")); continue
    pl, po = puan(L), puan(O)
    kan = "OTEKI" if po > pl else "LAB"           # eşitlikte LAB (TSV kuralı)
    if kan != r["kanonik"].split("(")[0]:
        OZET.append((lid, "ATLA", "puan yeniden ölçüldü: lab %d oteki %d -> %s ≠ TSV %s" % (pl, po, kan, r["kanonik"]))); continue
    kal, dus, kalf, dusf = (O, L, of, lf) if kan == "OTEKI" else (L, O, lf, of)
    if kal.get("atlas_ad") and dus.get("atlas_ad") and kal["atlas_ad"] != dus["atlas_ad"]:
        OZET.append((lid, "ATLA", "atlas_ad farklı: kalan %r düşen %r (elle bak)" % (kal["atlas_ad"], dus["atlas_ad"]))); continue
    ekle_o = 0
    for o in dus.get("olay") or []:
        if not any(x.get("t") == o.get("t") and x.get("k") == o.get("k") for x in kal.get("olay") or []):
            kal.setdefault("olay", []).append(o); ekle_o += 1
    if ekle_o:
        kal["olay"].sort(key=lambda x: x.get("t", ""))
    ekle_s = 0
    if False and not kal.get("sahip") and dus.get("sahip"):   # bidar-in vakasi: tasinan zincir atlas dikisiyle celisti (+2 ihlal) -> sahip tasinmaz, arsivde
        kal["sahip"] = dus["sahip"]; ekle_s = len(dus["sahip"])
    tasinmayan_s = len(dus.get("sahip") or []) if (kal.get("sahip") and not ekle_s) else 0
    for a in dus.get("adlar") or []:
        if a not in kal.setdefault("adlar", []):
            kal["adlar"].append(a)
    if dus.get("ad_kaynak"):
        mev = {(x["ad"], x.get("dil")) for x in kal.get("ad_kaynak") or []}
        for x in dus["ad_kaynak"]:
            if (x["ad"], x.get("dil")) not in mev:
                kal.setdefault("ad_kaynak", []).append(x)
    for x in kal.get("ad_kaynak") or []:
        if x["ad"] not in kal["adlar"]:
            kal["adlar"].append(x["ad"])
    for a in ("ilk", "kur", "ark", "bit"):
        if not kal.get(a) and dus.get(a):
            kal[a] = dus[a]
    if dus.get("kat1900") is not None and kal.get("kat1900") is None:
        kal["kat1900"] = dus["kat1900"]
    if dus.get("ic_not"):
        kal["ic_not"] = (kal["ic_not"] + " || " if kal.get("ic_not") else "") + "[MÜKERRER BİRLEŞTİRME 17 Kasım 2026: %s (%s) kaydından] %s" % (dus["id"], dusf, dus["ic_not"])
    # YAMA-OTEKI karşılaştırması: LAB düşerken kalan OTEKI ise ad_kaynak yamasındaki adlar kalanda olmalı
    y = Y2.get((of, oid))
    eksik = [a for a in (y or {}).get("adlar_eklenecek", []) if a not in kal.get("adlar", [])] if kan == "OTEKI" else []
    ARS.append({"id": dus["id"], "dusen_dosya": dusf, "kalan_dosya": kalf, "kalan_id": kal["id"], "dusen_kayit": dus})
    al(dusf).remove(dus)
    OZET.append((lid, "TAMAM", "kalan %s:%s (puan %d) ← düşen %s:%s (puan %d); +%d olay, +%d sahip (taşınmayan sahip %d), ad_kaynak %d; YAMA-OTEKI eksik ad %s" % (
        kalf, kal["id"], max(pl, po), dusf, dus["id"], min(pl, po), ekle_o, ekle_s, tasinmayan_s, len(dus.get("ad_kaynak") or []), eksik)))

for o in OZET:
    print("[%s] %s  %s" % (o[1], o[0], o[2]))
print("TAMAM:", sum(1 for o in OZET if o[1] == "TAMAM"), "ATLA/GEÇ:", sum(1 for o in OZET if o[1] != "TAMAM"))
if UYGULA:
    for p, (ust, ad, veri, crlf) in DOS.items():
        m = yaz_metin(ust, ad, veri)
        if crlf:
            m = m.replace("\n", "\r\n")
        open(p, "w", encoding="utf-8", newline="").write(m)
        print("yazıldı:", os.path.relpath(p, KOK))
    json.dump(ARS, open(ARSIV, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("arşiv:", ARSIV, len(ARS))
else:
    print("DRY-RUN")
