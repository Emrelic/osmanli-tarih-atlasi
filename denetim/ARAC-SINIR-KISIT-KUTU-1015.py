# -*- coding: utf-8 -*-
"""MOTOR-SINIR-KISIT-1015 — DAR KUTU SINAVI sürücüsü (motoru DEĞİŞTİRMEZ, kendi ağacında koşar).

Yama: denetim/MOTOR-SINIR-KISIT-1015.diff (ağaçta uygulanmış olmalı — `kos` kontrol eder).
Kesit üretimi `arac/motor_esitlik.py` `kesit_uret` ile (BOLGE = box(kutu) + salt-okur kanca).

ALT KOMUTLAR
  kos  --kutu x0,y0,x1,y1 --ad AD --varyant orig|kapali|acik --onb DİZİN
        orig   = git HEAD'deki uret_petek.py metni (yamasız) · bayrak yok
        kapali = yamalı metin · MOTOR_SINIR_KISIT YOK (varsayılan) — orig ile BİT BİT aynı olmalı
        acik   = yamalı metin · kesitte `SINIR_KISIT = True` (ORTAM DEĞİŞMEZ ⇒ tuz aynı ⇒
                 `kapali`nın önbelleğini okur; gövde önbelleği KISIT ÖNCESİ gövdeyi tutar)
        Ortam: üretim bayrakları (YÜRÜYÜŞ 40 sa · çöl kelepçesi 0), TEK süreç
        (MOTOR_SUREC_ISCI=1, DEVAM yok), MOTOR_PARALEL_ISCI=3 iş parçacığı, A/B ölçümleri kapalı,
        bant kapalı (gövdeye girmez). Önbellek AÇIK (kanonik birleşim sırası — orig ve kapali
        ayrı BOŞ dizinle, acik kapali'nın dizinini okur).
  olc  --dizin ÇIKTI --hat id,id,... [--json yol]
        denetle.py `degismez8`i O ÇIKTININ gövdesiyle (gövde kimlik sınavı ATLANARAK — dar
        kutu çıktısı yayın değildir) yalnız verilen hatlarda koşturur; 8a birimlerini basar.
  kiyas A B   iki çıktı dizininin sha256'sı (donemler · devletler_harita · bolgeler · petek_govde)

ÇIKTI: <SCR>/kutu-sk/<AD>/ (motor.log, meta.json, üretilen .js)
"""
import argparse, datetime, hashlib, io, json, os, shutil, subprocess, sys, time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(AG, "arac"))
SCR = os.environ.get("SK_SCR", r"C:\Users\user\AppData\Local\Temp\claude\C--atlas"
                     r"\d3ef9f1f-d3af-4413-9063-52fbbc1ce09f\scratchpad")
CIKTI_KOK = os.path.join(SCR, "kutu-sk")
URETILEN_IZLI = ["data/bolgeler.js", "data/devirler.js", "veri-kaynak/motor_kara.geojson"]
URETILEN_IZSIZ = ["data/donemler.js", "data/devletler_harita.js", "data/petek_govde.js",
                  "data/ufuk_bantlari.js", "data/dolgu.js", ".uretim-basladi"]
KIYAS = ("donemler.js", "devletler_harita.js", "bolgeler.js", "petek_govde.js")
BAYRAK_SATIRI = 'SINIR_KISIT = os.environ.get("MOTOR_SINIR_KISIT") == "1"\n'


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
        raise SystemExit("ağaçtaki uret_petek.py YAMALI DEĞİL (bayrak satırı yok)")
    cikti = os.path.join(CIKTI_KOK, a.ad)
    if os.path.exists(os.path.join(cikti, "meta.json")):
        raise SystemExit(f"{cikti} zaten var")
    os.makedirs(cikti, exist_ok=True)
    # önceki koşunun çıktısı bu koşuya GİRMESİN (motor "geçen koşu" kıyası okur)
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
        src = src.replace(BAYRAK_SATIRI, "SINIR_KISIT = True   # SINAV: kesitte açıldı (ortam aynı ⇒ tuz aynı)\n")
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
    meta["bitis"] = datetime.datetime.now().isoformat(timespec="seconds")
    with open(os.path.join(cikti, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
    os.remove(kesit)
    print(f"KOŞU {a.ad} ({a.varyant}) · motor kod {meta['motor_kod']} · {meta['motor_sn']} sn · {cikti}")
    return 0 if r.returncode == 0 else 1


def olc(a):
    import denetle as D
    import girdi
    from shapely.geometry import Polygon

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

    Y = girdi.yukle(sessiz=True)
    sadece = set(a.hat.split(","))
    gv = Govde(a.dizin)
    R = D.degismez8(Y, sadece=sadece, gv=gv)
    print(f"ÖLÇÜM {a.dizin}")
    print(f"  hat {R['hat_sayisi']} · ölçülen (hat,gün) {R['olculen']} · ölçülemeyen {len(R['olculemeyen'])}"
          f" {R['olculemeyen'][:6]} · atlanan {R['atlanan'][:3]}")
    say = {}
    for u in R["a"]:
        k = (u["hat"], u["gun"])
        say.setdefault(k, [0, 0])
        say[k][0] += 1
        say[k][1] += u["km2"]
    for (h, g), (n, km2) in sorted(say.items()):
        print(f"  8a {h} {g}: {n} birim · {km2:,} km²")
    for u in sorted(R["a"], key=lambda u: -u["km2"])[:40]:
        print(f"     {u['hat']} {u['gun']} {u['yan']} ← {u['kimden']} · {u['yer']} · {u['km']} km · {u['km2']} km²")
    # BİNME: kısıt "ekle" ve "kes"i iki ayrı gövdede yapar — aynı toprağı iki taraf boyuyor mu?
    from shapely.ops import unary_union
    from shapely.affinity import affine_transform
    tum = D._d8_node(D._d8_d_dosyalari(), "Object.values(window).filter(Array.isArray).flat()"
                     ".filter(r=>r&&r.id&&r.hat&&r.hat.length)")
    binme = {}
    for r in tum:
        if r["id"] not in sadece:
            continue
        p = r["hat"] if isinstance(r["hat"][0][0], list) else [r["hat"]]
        xs = [q[0] for a_ in p for q in a_]; ys = [q[1] for a_ in p for q in a_]
        lat0 = (min(ys) + max(ys)) / 2
        M = D._d8_izdusum((min(xs) + max(xs)) / 2, lat0)
        kutu = (min(xs) - 1.5, min(ys) - 1, max(xs) + 1.5, max(ys) + 1)
        _, olcul = D._d8_gunler(r.get("f"), r.get("t"))
        for gun in olcul:
            yan = {t: [] for t in r["taraflar"]}
            for gid, g in gv.kesit(gun, kutu):
                if gid in yan:
                    yan[gid].append(g)
            a_, b_ = [unary_union(v) if v else None for v in yan.values()]
            km2 = 0 if a_ is None or b_ is None else round(affine_transform(a_.intersection(b_), M).area)
            binme[(r["id"], gun)] = km2
            print(f"  BİNME {r['id']} {gun}: {r['taraflar'][0]} ∩ {r['taraflar'][1]} = {km2:,} km²")
    toplam = (len(R["a"]), sum(u["km2"] for u in R["a"]))
    print(f"  TOPLAM 8a: {toplam[0]} birim · {toplam[1]:,} km²")
    if a.json:
        with open(a.json, "w", encoding="utf-8") as f:
            json.dump({"dizin": a.dizin, "hat": sorted(sadece), "a": R["a"], "olculen": R["olculen"],
                       "olculemeyen": R["olculemeyen"], "toplam_birim": toplam[0],
                       "toplam_km2": toplam[1], "binme": {f"{k[0]}|{k[1]}": v for k, v in binme.items()}}, f, ensure_ascii=False, indent=1)
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


def main():
    p = argparse.ArgumentParser()
    s = p.add_subparsers(dest="k", required=True)
    k = s.add_parser("kos")
    k.add_argument("--kutu", required=True)
    k.add_argument("--ad", required=True)
    k.add_argument("--varyant", choices=("orig", "kapali", "acik"), required=True)
    k.add_argument("--onb", required=True)
    k.add_argument("--isci", type=int, default=3)
    k.add_argument("--ortam", help="ek MOTOR_* ortamı: K=V,K=V (ör. M-BC kapama anahtarları)")
    o = s.add_parser("olc")
    o.add_argument("--dizin", required=True)
    o.add_argument("--hat", required=True)
    o.add_argument("--json")
    c = s.add_parser("kiyas")
    c.add_argument("A")
    c.add_argument("B")
    a = p.parse_args()
    return {"kos": kos, "olc": olc, "kiyas": kiyas}[a.k](a)


if __name__ == "__main__":
    sys.exit(main())
