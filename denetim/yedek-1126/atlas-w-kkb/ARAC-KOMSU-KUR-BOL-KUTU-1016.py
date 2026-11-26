# -*- coding: utf-8 -*-
"""MOTOR-KOMSU-KUR-BOL-1016 — DAR KUTU SINAVI sürücüsü (motoru DEĞİŞTİRMEZ, kendi ağacında koşar).

🔴 KOŞU SÜRERKEN KOŞTURULMAZ (ağır süreç). Örnek: denetim/ARAC-SINIR-KISIT-KUTU-1015.py.
Ağaç: kosu/26-hazirlik ucu + denetim/MOTOR-KOMSU-KUR-BOL-1016.diff uygulanmış (`kos` denetler).
Kesit üretimi `arac/motor_esitlik.py` `kesit_uret` (BOLGE = box(kutu) + salt-okur kanca).

ALT KOMUTLAR
  kos  --kutu x0,y0,x1,y1 --ad AD --varyant orig|kapali|acik --onb DİZİN [--ortam K=V,…]
        orig   = git HEAD'deki uret_petek.py (yamasız taban) · bayrak yok
        kapali = yamalı metin · MOTOR_KOMSU_KUR_BOL YOK — orig ile BİT BİT aynı olmalı
        acik   = yamalı metin · kesitte `KOMSU_KUR_BOL = True` (ortam aynı ⇒ tuz aynı ⇒
                 kapali'nın önbelleğini okuyabilir; gövde önbelleği içerik anahtarlıdır)
        Ortam: üretim bayrakları (YÜRÜYÜŞ 40 sa · çöl kelepçesi 0), TEK süreç, DEVAM yok,
        A/B ölçümleri kapalı. KOŞU 26 eşdeğeri için: --ortam MOTOR_SINIR_KISIT=1
  olc  --dizin ÇIKTI [--bas 1298-01-01 --son 1335-12-31] [--json yol]
        kutudaki BÜTÜN gövde çiftlerinin binmesi (km²) — her dönem başı günü + sabit
        vaka günleri; adlı vakalar ayrıca: hamid×inancogullari (#14), germiyan×karesi,
        saruhan×karesi (#17). Ters yön ölçüsü: o gün boyalı toprağın BİRLEŞİMİ (km²) ve
        devlet başına dönem sayısı.
  kiyas A B          iki çıktı dizininin sha256'sı (bit bit eşitlik — orig ≡ kapali)
  hukum KAPALI.json ACIK.json
        İKİ YÖN: ① adlı vakalarda binme kapalıda > 0, açıkta ≤ tolerans (kusur kalktı)
        ② açıkta toplam binme ARTMADI · birleşim alanı her gün |fark| ≤ %0,5 (delik
        açılmadı) · ③ dönem artışı rapor edilir. Çıkış 0 = geçti.

ÇIKTI: <SCR>/kutu-kkb/<AD>/ (motor.log, meta.json, üretilen .js)

KOMUT DİZİSİ (koordinatör, KOŞU 26'dan SONRA):
  git -C C:\\atlas worktree add C:\\atlas-w-kkb kosu/26-hazirlik --detach
  git -C C:\\atlas-w-kkb apply <yol>\\MOTOR-KOMSU-KUR-BOL-1016.diff
  set K=26.0,36.4,31.6,40.8
  py C:\\atlas-w-kkb\\denetim\\ARAC-KOMSU-KUR-BOL-KUTU-1016.py kos --kutu %K% --ad bati-orig   --varyant orig   --onb C:\\atlas-sinav-cikti\\onb-kkb-orig
  py C:\\atlas-w-kkb\\denetim\\ARAC-KOMSU-KUR-BOL-KUTU-1016.py kos --kutu %K% --ad bati-kapali --varyant kapali --onb C:\\atlas-sinav-cikti\\onb-kkb
  py C:\\atlas-w-kkb\\denetim\\ARAC-KOMSU-KUR-BOL-KUTU-1016.py kos --kutu %K% --ad bati-acik   --varyant acik   --onb C:\\atlas-sinav-cikti\\onb-kkb
  py ...KUTU-1016.py kiyas <SCR>\\kutu-kkb\\bati-orig <SCR>\\kutu-kkb\\bati-kapali
  py ...KUTU-1016.py olc --dizin <SCR>\\kutu-kkb\\bati-kapali --json <SCR>\\kutu-kkb\\kapali.json
  py ...KUTU-1016.py olc --dizin <SCR>\\kutu-kkb\\bati-acik   --json <SCR>\\kutu-kkb\\acik.json
  py ...KUTU-1016.py hukum <SCR>\\kutu-kkb\\kapali.json <SCR>\\kutu-kkb\\acik.json
"""
import argparse, datetime, hashlib, io, json, os, shutil, subprocess, sys, time

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(AG, "arac"))
SCR = os.environ.get("KKB_SCR", r"C:\Users\user\AppData\Local\Temp\claude\C--atlas"
                     r"\d3ef9f1f-d3af-4413-9063-52fbbc1ce09f\scratchpad")
CIKTI_KOK = os.path.join(SCR, "kutu-kkb")
URETILEN_IZLI = ["data/bolgeler.js", "data/devirler.js", "veri-kaynak/motor_kara.geojson"]
URETILEN_IZSIZ = ["data/donemler.js", "data/devletler_harita.js", "data/petek_govde.js",
                  "data/ufuk_bantlari.js", "data/dolgu.js", ".uretim-basladi"]
KIYAS = ("donemler.js", "devletler_harita.js", "bolgeler.js", "petek_govde.js")
BAYRAK_SATIRI = 'KOMSU_KUR_BOL = os.environ.get("MOTOR_KOMSU_KUR_BOL") == "1"\n'
VAKALAR = [("hamid", "inancogullari", "1321-01-01", "#14 Burdur kur:1299-09-28 · KOŞU 25: 942 km²"),
           ("germiyan", "karesi", "1334-01-01", "#17 Balıkesir kur:1333-01-01 · KOŞU 25: 398 km²"),
           ("saruhan", "karesi", "1334-01-01", "#17 Balıkesir kur:1333-01-01 · KOŞU 25: 119 km²")]
SABIT_GUN = ["1299-09-27", "1299-09-28", "1300-06-01", "1321-01-01",
             "1332-12-31", "1333-01-01", "1334-01-01", "1335-06-01"]
BINME_TOL_KM2 = 5          # açıkta adlı vaka binmesi bunun altında olmalı (kıyı/sadeleştirme kılcalı)
BIRLESIM_TOL = 0.005       # birleşim alanı göreli farkı (delik/taşma)


def sha(yol):
    h = hashlib.sha256()
    with open(yol, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def kos(a):
    import motor_esitlik as me
    motor = os.path.join(AG, "arac", "uret_petek.py")
    yamali = io.open(motor, encoding="utf-8").read()
    if BAYRAK_SATIRI not in yamali.replace("\r\n", "\n"):
        raise SystemExit("ağaçtaki uret_petek.py YAMALI DEĞİL (KOMSU_KUR_BOL bayrak satırı yok)")
    cikti = os.path.join(CIKTI_KOK, a.ad)
    if os.path.exists(os.path.join(cikti, "meta.json")):
        raise SystemExit(f"{cikti} zaten var")
    os.makedirs(cikti, exist_ok=True)
    subprocess.run(["git", "-C", AG, "checkout", "--"] + URETILEN_IZLI, check=True)
    for u in URETILEN_IZSIZ:
        y = os.path.join(AG, u)
        if os.path.exists(y):
            os.remove(y)
    if a.varyant == "orig":
        kaynak = os.path.join(cikti, "_orig_uret_petek.py")
        with open(kaynak, "wb") as f:
            f.write(subprocess.run(["git", "-C", AG, "show", "HEAD:arac/uret_petek.py"],
                                   capture_output=True, check=True).stdout)
    else:
        kaynak = motor
    src = me.kesit_uret(kaynak, a.kutu, None)
    if a.varyant == "acik":
        if src.count(BAYRAK_SATIRI) != 1:
            raise SystemExit("bayrak satırı kesitte 1 kez yok")
        src = src.replace(BAYRAK_SATIRI, "KOMSU_KUR_BOL = True   # SINAV: kesitte açıldı (ortam aynı ⇒ tuz aynı)\n")
    kesit = os.path.join(AG, "arac", "_sinav_kesit.py")
    with io.open(kesit, "w", encoding="utf-8", newline="\n") as f:
        f.write(f"__file__ = {motor!r}\n" + src)
    env = {k: v for k, v in os.environ.items() if not k.startswith("MOTOR_")}
    env.update({"MOTOR_YURUYUS": "1", "MOTOR_YURUYUS_SAAT": "40", "MOTOR_COL_UFUK_SAAT": "0",
                "MOTOR_SUREC_ISCI": "1", "MOTOR_PARALEL_ISCI": str(a.isci),
                "MOTOR_EGIM_AB_KAPALI": "1", "MOTOR_NEHIR_AB_KAPALI": "1",
                "MOTOR_ONBELLEK_DIZIN": os.path.abspath(a.onb),
                "MOTOR_CANLI_LOG": os.path.join(cikti, "canli.log"),
                "PYTHONPATH": os.path.join(AG, "arac"), "PYTHONIOENCODING": "utf-8"})
    for kv in (a.ortam or "").split(","):
        if kv.strip():
            k_, v_ = kv.split("=", 1)
            env[k_.strip()] = v_.strip()
    os.makedirs(a.onb, exist_ok=True)
    meta = {"ad": a.ad, "kutu": a.kutu, "varyant": a.varyant, "onb": a.onb,
            "kaynak_sha256": sha(kaynak), "disk_motor_sha256": sha(motor),
            "ag_head": subprocess.run(["git", "-C", AG, "rev-parse", "HEAD"],
                                      capture_output=True, text=True).stdout.strip(),
            "ortam": {k: v for k, v in env.items() if k.startswith("MOTOR_")},
            "basla": datetime.datetime.now().isoformat(timespec="seconds")}
    t0 = time.time()
    with open(os.path.join(cikti, "motor.log"), "w", encoding="utf-8") as lg:
        r = subprocess.run([sys.executable, "-u", kesit], cwd=AG, env=env, stdout=lg,
                           stderr=subprocess.STDOUT,
                           creationflags=0x4000 if os.name == "nt" else 0)   # BELOW_NORMAL
    meta["motor_kod"], meta["motor_sn"] = r.returncode, round(time.time() - t0)
    if r.returncode == 0:
        meta["sha256"] = {}
        for u in URETILEN_IZSIZ[:3] + ["data/bolgeler.js"]:
            y = os.path.join(AG, u)
            if os.path.exists(y):
                shutil.copy2(y, os.path.join(cikti, os.path.basename(u)))
                meta["sha256"][os.path.basename(u)] = sha(y)
    # motor kendi KOMŞU-KUR-BÖL satırını basar — açık varyantta GÖRÜLMELİ
    try:
        meta["kkb_satiri"] = [s.strip() for s in io.open(os.path.join(cikti, "motor.log"), encoding="utf-8",
                                                          errors="replace") if "KOMŞU-KUR-BÖL" in s]
    except OSError:
        meta["kkb_satiri"] = []
    meta["bitis"] = datetime.datetime.now().isoformat(timespec="seconds")
    with open(os.path.join(cikti, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
    os.remove(kesit)
    print(f"KOŞU {a.ad} ({a.varyant}) · motor kod {meta['motor_kod']} · {meta['motor_sn']} sn · {cikti}")
    print(f"  KOMŞU-KUR-BÖL satırı: {meta['kkb_satiri'] or 'YOK'}")
    if a.varyant == "acik" and not meta["kkb_satiri"]:
        print("  ✗ açık varyantta bayrak satırı logda YOK — bayrak açılmamış")
        return 1
    return 0 if r.returncode == 0 else 1


def olc(a):
    import denetle as D
    from shapely.geometry import Polygon
    from shapely.ops import unary_union
    from shapely.affinity import affine_transform

    class Govde(D._D8Govde):
        """_D8Govde'nin AYNISI, yalnız dosyalar verilen dizinden ve kimlik sınavı YOK."""

        def __init__(self, dz):
            self._Polygon = Polygon
            H = D._d8_js(os.path.join(dz, "devletler_harita.js"))
            Dn = D._d8_js(os.path.join(dz, "donemler.js"))
            B = D._d8_js(os.path.join(dz, "bolgeler.js"))
            self.damga = "dar kutu " + os.path.basename(dz)
            self.bolgeler = B["BOLGELER"]
            self.kay = [
                (H["DEVLET_PARCALAR"], H["DEVLET_PARCA_HALKA"],
                 [(d["id"], dn.get("f") or "0000", dn.get("t") or "9999", dn.get("g") or [])
                  for d in H["DEVLET_HARITA"] for dn in d.get("dnm") or []]),
                (Dn["PARCALAR"], Dn["PARCA_HALKA"],
                 [(k, d.get("f") or "0000", d.get("t") or "9999", d.get(al) or [])
                  for d in Dn["DONEMLER"] for al, k in (("o", "OSMANLI"), ("v", "OSM-TABI"))]),
            ]
            self._onb = {}
            self._kutu = {}

    meta = json.load(open(os.path.join(a.dizin, "meta.json"), encoding="utf-8"))
    x0, y0, x1, y1 = [float(v) for v in meta["kutu"].split(",")]
    kutu = (x0, y0, x1, y1)
    M = D._d8_izdusum((x0 + x1) / 2, (y0 + y1) / 2)
    km2 = lambda g: affine_transform(g, M).area
    gv = Govde(a.dizin)
    donem = {}
    gunler = set(SABIT_GUN)
    for gid, f, t, _ in gv.kay[0][2]:
        donem.setdefault(gid, []).append((f, t))
        if a.bas <= f <= a.son:
            gunler.add(f)
    gunler = sorted(g for g in gunler if a.bas <= g <= a.son)
    sonuc = {"dizin": a.dizin, "kutu": meta["kutu"], "varyant": meta.get("varyant"),
             "gun": {}, "vaka": {}, "donem_sayisi": {}}
    for gun in gunler:
        yan = {}
        for gid, g in gv.kesit(gun, kutu):
            yan.setdefault(gid, []).append(g)
        G = {k: unary_union(v) for k, v in yan.items()}
        ids = sorted(G)
        cift = {}
        for i in range(len(ids)):
            for j in range(i + 1, len(ids)):
                if {ids[i], ids[j]} == {"OSMANLI", "OSM-TABI"}:
                    continue
                if not G[ids[i]].envelope.intersects(G[ids[j]].envelope):
                    continue
                k = round(km2(G[ids[i]].intersection(G[ids[j]])))
                if k > 0:
                    cift[f"{ids[i]}|{ids[j]}"] = k
        bir = round(km2(unary_union(list(G.values())))) if G else 0
        sonuc["gun"][gun] = {"binme": cift, "binme_top": sum(cift.values()), "birlesim_km2": bir}
        print(f"  {gun}: birleşim {bir:,} km² · binme {sum(cift.values()):,} km² "
              + " ".join(f"{k}={v}" for k, v in sorted(cift.items(), key=lambda kv: -kv[1])[:4]))
    for a_, b_, gun, not_ in VAKALAR:
        k = "|".join(sorted((a_, b_)))
        tum = {g: v["binme"].get(k, 0) for g, v in sonuc["gun"].items()}
        sonuc["vaka"][k] = {"gun": gun, "km2_gun": tum.get(gun, 0), "en_cok": max(tum.values() or [0]),
                            "not": not_}
        print(f"  VAKA {k} @{gun}: {tum.get(gun, 0):,} km² · pencerede en çok {max(tum.values() or [0]):,} km² ({not_})")
    for gid in sorted({c.split("|")[0] for v in sonuc["gun"].values() for c in v["binme"]}
                      | {c.split("|")[1] for v in sonuc["gun"].values() for c in v["binme"]}
                      | {x for v in VAKALAR for x in v[:2]}):
        sonuc["donem_sayisi"][gid] = len(donem.get(gid, []))
    if a.json:
        with open(a.json, "w", encoding="utf-8") as f:
            json.dump(sonuc, f, ensure_ascii=False, indent=1)
    return 0


def kiyas(a):
    fark = 0
    for ad in KIYAS:
        ya, yb = os.path.join(a.A, ad), os.path.join(a.B, ad)
        if not (os.path.exists(ya) and os.path.exists(yb)):
            print(f"  {ad}: EKSİK ({os.path.exists(ya)}, {os.path.exists(yb)})")
            fark += 1
            continue
        sa, sb = sha(ya), sha(yb)
        print(f"  {ad}: {'AYNI' if sa == sb else 'FARKLI'} {sa[:12]} {sb[:12]}")
        fark += sa != sb
    print("KIYAS: " + ("BİT BİT AYNI" if not fark else f"{fark} dosya farklı"))
    return 0 if not fark else 1


def hukum(a):
    K = json.load(open(a.KAPALI, encoding="utf-8"))
    A = json.load(open(a.ACIK, encoding="utf-8"))
    hata = []
    print("① adlı vakalar (kapalı → açık):")
    for k, v in K["vaka"].items():
        va = A["vaka"].get(k, {})
        ok_k = v["km2_gun"] > 0
        ok_a = va.get("en_cok", 1e9) <= BINME_TOL_KM2
        print(f"  {k} @{v['gun']}: {v['km2_gun']:,} → {va.get('km2_gun')} km² · pencere en çok "
              f"{v['en_cok']:,} → {va.get('en_cok')} · {'✓' if ok_k and ok_a else '✗'}"
              + ("" if ok_k else " (KAPALIDA binme yok — kusur kutuda görünmüyor, soru KÖR)"))
        if not (ok_k and ok_a):
            hata.append(k)
    print("② ters yön — toplam binme ve birleşim alanı (her gün):")
    for g in sorted(K["gun"]):
        if g not in A["gun"]:
            continue
        bk, ba = K["gun"][g]["binme_top"], A["gun"][g]["binme_top"]
        rk, ra = K["gun"][g]["birlesim_km2"], A["gun"][g]["birlesim_km2"]
        df = (ra - rk) / max(1, rk)
        bad = ba > bk + BINME_TOL_KM2 or abs(df) > BIRLESIM_TOL
        if bad or g in SABIT_GUN:
            print(f"  {g}: binme {bk:,}→{ba:,} · birleşim {rk:,}→{ra:,} ({df * 100:+.2f}%)"
                  + (" ✗" if bad else ""))
        if bad:
            hata.append(g)
    print("③ dönem sayısı (kapalı → açık):")
    for gid in sorted(set(K["donem_sayisi"]) | set(A["donem_sayisi"])):
        print(f"  {gid}: {K['donem_sayisi'].get(gid)} → {A['donem_sayisi'].get(gid)}")
    print("HÜKÜM: " + ("GEÇTİ" if not hata else f"KALDI {hata[:10]}"))
    return 0 if not hata else 1


def main():
    p = argparse.ArgumentParser()
    s = p.add_subparsers(dest="k", required=True)
    k = s.add_parser("kos")
    k.add_argument("--kutu", required=True)
    k.add_argument("--ad", required=True)
    k.add_argument("--varyant", choices=("orig", "kapali", "acik"), required=True)
    k.add_argument("--onb", required=True)
    k.add_argument("--isci", type=int, default=3)
    k.add_argument("--ortam", help="ek MOTOR_* ortamı: K=V,K=V (ör. MOTOR_SINIR_KISIT=1)")
    o = s.add_parser("olc")
    o.add_argument("--dizin", required=True)
    o.add_argument("--bas", default="1298-01-01")
    o.add_argument("--son", default="1335-12-31")
    o.add_argument("--json")
    c = s.add_parser("kiyas")
    c.add_argument("A")
    c.add_argument("B")
    h = s.add_parser("hukum")
    h.add_argument("KAPALI")
    h.add_argument("ACIK")
    a = p.parse_args()
    return {"kos": kos, "olc": olc, "kiyas": kiyas, "hukum": hukum}[a.k](a)


if __name__ == "__main__":
    sys.exit(main())
