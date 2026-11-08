#!/usr/bin/env py
# -*- coding: utf-8 -*-
"""F-ADIMI-1108 — kronoloji toprak-değişimi maddeleri HARİTADA gösteriliyor mu? (SALT ÖLÇÜM)

Veri/motor dosyalarına YAZMAZ; yalnız denetim/F-ADIMI-1108/ altına çıktı yazar.
Tekrar çalıştırılabilir (koşu 35 inince aynı komut):

    py denetim/F-ADIMI-1108/f_olc.py [--tohum 1108] [--n-dv 100 --n-s 200 --n-isg 100]
                                      [--adim 1,2,3] [--ek "etiket"]

Ön koşul (worktree'de): coz-c ile data/devletler_harita.js ve data/donemler.js çözülmüş olmalı.
Üç ölçüm:
  1  Değişmez 2 çiftlerinden tabakalı örnek → üretilmiş haritada sahip gün-1 / gün değişiyor mu
     (node f_harita.js: nokta-içinde-poligon, donemler.js + devletler_harita.js)
  2  Değişmez 2 evreni DIŞINDAKİ kronolojiler: toprak maddesi sayısı, ±30 günde kırılma oranı
  3  'kırılmasız madde' (D2t) dökümü
"""
import argparse, bisect, collections, hashlib, json, os, random, re, subprocess, subprocess as sp, sys, time

BU = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.abspath(os.path.join(BU, "..", ".."))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle  # noqa: E402
from denetle import gun_no, tam, pad  # noqa: E402

CIKTI = BU
ARA = os.path.join(BU, "ara")
os.makedirs(ARA, exist_ok=True)


def norm(s):
    return denetle._2s_norm(s or "")


def kok_ad(ad):
    return norm(re.sub(r"\s*\(.*?\)", "", ad or "").strip())


def tarih(t):
    return pad(tam(t))


# ---------------------------------------------------------------- yükleme
def yukle():
    t0 = time.time()
    Y = denetle.yerlesimleri_yukle()
    O = denetle.olaylari_yukle()
    print(f"  Y={len(Y)} O={len(O)} ({time.time()-t0:.0f} sn)")
    Yc = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
    kir_dv, acik_dv = denetle.degismez2(Yc, O)
    kir_s, acik_s = denetle.degismez2(Yc, O, ("s",), yer_sarti=True)
    kir_i, acik_i = denetle.degismez2(Yc, O, ("isg",))
    ksiz = denetle.kirilmasiz_madde(kir_dv, kir_s, O, kir_i)
    print(f"  D2: kirilma dv={len(kir_dv)} (acik {len(acik_dv)}) s={len(kir_s)} (acik {len(acik_s)}) "
          f"isg={len(kir_i)} (acik {len(acik_i)}) · D2t kırılmasız={len(ksiz)}")
    return Y, Yc, O, (kir_dv, acik_dv), (kir_s, acik_s), (kir_i, acik_i), ksiz


# ---------------------------------------------------------------- madde eşleme
def madde_adayi(O_gun, ad, g):
    """±30 günde madde; yer eşleşmesi (ad kökü başlık/yer/yer_id/gövdede) varsa onu, yoksa en yakını."""
    kok = kok_ad(ad)
    en = None
    for o in O_gun:
        fark = abs(o["g"] - g)
        if fark > 30:
            continue
        metin = o["nrm"]
        yer_esles = bool(kok) and len(kok) >= 3 and kok in metin
        anahtar = (0 if yer_esles else 1, fark)
        if en is None or anahtar < en[0]:
            en = (anahtar, o, yer_esles)
    return en


def ornekle(kir, acik, kat, n, rnd, Yidx, O_gun, tur_yaz):
    acik_gun = {a[0] for a in acik}
    kapali = sorted(d for d in kir if d not in acik_gun)
    if not kapali:
        return [], 0
    # eşit sayılı dilimler = zamana yayılmış tabaka
    adaylar = []
    bol = max(1, min(n, len(kapali)))
    for i in range(bol):
        a, b = i * len(kapali) // bol, (i + 1) * len(kapali) // bol
        dilim = kapali[a:b]
        rnd.shuffle(dilim)
        secildi = None
        for d in dilim:
            g = gun_no(d)
            adlar = sorted(kir[d]["ad"])
            rnd.shuffle(adlar)
            en_iyi = None
            for ad in adlar:
                y = Yidx.get(ad)
                if not y or y.get("lat") in (None, "") or y.get("lon") in (None, ""):
                    continue
                m = madde_adayi(O_gun, ad, g)
                if m is None:
                    continue
                if en_iyi is None or m[0] < en_iyi[1][0]:
                    en_iyi = (ad, m)
                if m[2]:
                    break
            if en_iyi:
                secildi = (d, en_iyi[0], en_iyi[1])
                break
        if secildi:
            d, ad, m = secildi
            y = Yidx[ad]
            sahip = kir[d]["sahip"].get(ad, {})
            adaylar.append({
                "kat": kat, "kir": d, "tip": kir[d]["t"], "ad": ad,
                "lat": float(y["lat"]), "lon": float(y["lon"]),
                "eski": sahip.get("eski", ""), "yeni": sahip.get("yeni", ""),
                "n_birim": len(kir[d]["ad"]),
                "madde_t": m[1]["t"], "madde_b": m[1]["b"], "madde_yer": m[1].get("yer_id") or m[1].get("yer") or "",
                "madde_fark": m[1]["g"] - g, "yer_esles": m[2],
                "ocak1": d.endswith("-01-01"),
            })
    return adaylar, len(kapali)


HARITA_ANAHTARI = {}


def harita_anahtari():
    if HARITA_ANAHTARI:
        return HARITA_ANAHTARI
    js = open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8").read()
    for m in re.finditer(r'id\s*:\s*"([^"]+)"([^{}]*?)harita\s*:\s*"([^"]+)"', js):
        HARITA_ANAHTARI.setdefault(m.group(1), m.group(3))
    return HARITA_ANAHTARI


# ---------------------------------------------------------------- ölçüm 1
def olcum1(args, Y, O, dv, s, isg):
    rnd = random.Random(args.tohum)
    Yidx = {}
    for y in Y:
        Yidx.setdefault(y["ad"], y)
    O_gun = []
    for o in O:
        try:
            g = gun_no(o["t"])
        except Exception:
            continue
        O_gun.append({"g": g, "t": o["t"], "b": o.get("b") or "", "yer_id": o.get("yer_id"), "yer": o.get("yer"),
                      "nrm": norm(" ".join([o.get("b") or "", o.get("yer") or "", o.get("yer_id") or "", o.get("d") or ""]))})
    ornek, kapali_say = [], {}
    for kat, (kir, acik), n in (("dv", dv, args.n_dv), ("s", s, args.n_s), ("isg", isg, args.n_isg)):
        a, kap = ornekle(kir, acik, kat, n, rnd, Yidx, O_gun, None)
        ornek += a
        kapali_say[kat] = {"kirilma": len(kir), "acik": len(acik), "kapali": kap, "ornek": len(a)}
    for i, r in enumerate(ornek):
        r["id"] = f"{r['kat']}{i:03d}"
    # node girdisi
    girdi = []
    for r in ornek:
        sorgu = [{"ust": r["kir"], "ofs": [-1, 0]}]
        try:
            mt = tarih(r["madde_t"])
            sorgu.append({"ust": mt, "ofs": list(range(-4, 4))})
            r["madde_tarih"] = mt
        except Exception:
            r["madde_tarih"] = None
        girdi.append({"id": r["id"], "lat": r["lat"], "lon": r["lon"], "sorgu": sorgu})
    gy, cy = os.path.join(ARA, "node_girdi.json"), os.path.join(ARA, "node_cikti.json")
    json.dump(girdi, open(gy, "w", encoding="utf-8"), ensure_ascii=False)
    print(f"  ölçüm 1: {len(ornek)} örnek · node koşuyor (yükleme ~3 dk)...")
    p = sp.run(["node", "--max-old-space-size=10000", os.path.join(BU, "f_harita.js"), KOK, gy, cy],
               capture_output=True, text=True)
    print(p.stdout[-300:], p.stderr[-500:])
    if p.returncode != 0:
        raise SystemExit("node başarısız — ölçülemedi (çıkış 2)")
    C = json.load(open(cy, encoding="utf-8"))
    hk = harita_anahtari()
    for r in ornek:
        c = C.get(r["id"], {})

        def sah(ust, o):
            v = c.get(f"{ust}|{o}")
            return None if v is None else tuple(v["s"])

        r["harita_kir_once"] = sah(r["kir"], -1)
        r["harita_kir_sonra"] = sah(r["kir"], 0)
        r["harita_kir_degisti"] = (r["harita_kir_once"] is not None and r["harita_kir_once"] != r["harita_kir_sonra"])
        mt = r.get("madde_tarih")
        if mt:
            sa = {o: sah(mt, o) for o in range(-4, 4)}
            r["harita_madde_sahipler"] = {str(k): list(v) if v is not None else None for k, v in sa.items()}
            degisen = [k for k in range(-3, 4) if sa[k - 1] is not None and sa[k] is not None and sa[k - 1] != sa[k]]
            r["madde_degisim_gunleri"] = degisen
        else:
            degisen = None
            r["madde_degisim_gunleri"] = None
        yeni_anahtar = hk.get(r["yeni"], r["yeni"]) if r["yeni"] else ""
        r["yeni_gorunur"] = bool(yeni_anahtar) and (yeni_anahtar in (r["harita_kir_sonra"] or ())
                                                    or r["yeni"] in (r["harita_kir_sonra"] or ()))
        r["sinif"], r["neden"] = siniflandir(r, degisen)
    return ornek, kapali_say


def siniflandir(r, degisen):
    if degisen is None or r["harita_kir_once"] is None:
        return "OLCULEMEDI", "tarih/koordinat çözülemedi"
    bos_once, bos_sonra = not r["harita_kir_once"], not r["harita_kir_sonra"]
    if 0 in degisen:
        return "EVET", ""
    if degisen:
        return "KAYMA", "harita değişimi madde gününden %+d gün" % degisen[0]
    # --- YOK: neden sınıfla
    mfark = abs(r["madde_fark"])
    if r["harita_kir_degisti"] and mfark > 3:
        return "YOK", "madde-kırılma günü farkı: harita kırılma gününde (%s) değişiyor, madde %+d gün ötede" % (
            r["kir"], r["madde_fark"])
    if bos_once and bos_sonra:
        return "YOK", "noktasız/gövde dışı: yerleşim hiçbir gövdede değil (emilme/delik/kıyı)"
    if r["harita_kir_degisti"]:
        return "YOK", "değişim var ama madde gününde değil (başka gün)"
    if r["ocak1"]:
        return "YOK", "yıl-temsili kırılma (YYYY-01-01) — harita değişimi başka günde/yıl içinde"
    if r["yeni_gorunur"] and r["harita_kir_once"] == r["harita_kir_sonra"]:
        return "YOK", "yeni sahip kırılmadan ÖNCE de görünüyor (motor/dönem erken)"
    if bos_once != bos_sonra:
        return "YOK", "yalnız bir yanda gövde var (sahipsizlik geçişi)"
    return "YOK", "motor farklı sahip veriyor: kırılmada harita sahibi değişmiyor (%s)" % ",".join(r["harita_kir_sonra"] or ())


# ---------------------------------------------------------------- ölçüm 2
TOPRAK_ETIKET = {"toprak-kazanc", "toprak-kayip", "toprak-kaybi", "toprak-degisimi"}
TOPRAK_TUR = {"toprak-kazanc", "toprak-kayip", "toprak-degisimi", "fetih", "kayip", "ilhak", "bolunme", "birlesme", "bölünme", "birleşme"}


def toprak_mu(o):
    e = o.get("etiket") or []
    if not isinstance(e, list):
        e = [x.strip() for x in str(e).split(",")]
    return bool(TOPRAK_ETIKET & set(e)), (o.get("tur") or "") in TOPRAK_TUR


def olcum2(args, Y):
    # kırılma havuzu: BÜTÜN yerleşimler (kuyruk dahil), s/d/v/isg
    kirs = []
    for y in Y:
        for kat in ("s", "d", "v", "isg"):
            for p in (y.get(kat) or []):
                for d in (p.get("f"), p.get("t")):
                    if denetle.kirilma_disi(d):
                        continue
                    kirs.append((gun_no(d), y["ad"], kat))
    kirs.sort()
    gunler = [k[0] for k in kirs]
    # D2 evreni olaylar* + kronoloji_sinir*; DIŞINDAKİ kronoloji_*.js
    dis, evren_adlari = [], set()
    import glob
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "kronoloji*.js"))):
        ad = os.path.basename(yol)
        if ad.startswith("kronoloji_sinir"):
            continue
        js = open(yol, encoding="utf-8").read()
        m = re.search(r"window\.(\w+)\s*=", js)
        if not m:
            continue
        try:
            md = denetle.oku_pencere(yol, m.group(1))
        except Exception as e:
            print("  !! okunamadı", ad, str(e)[:80])
            continue
        for o in md:
            o["_dosya"] = ad
        dis += md
    print(f"  ölçüm 2: D2 dışı kronoloji dosyası maddesi = {len(dis)}")
    ufuk0, ufuk1 = gun_no(denetle.UFUK[0]), gun_no(denetle.UFUK[1])
    sonuc = collections.defaultdict(lambda: collections.Counter())
    eslesmeyen = []
    genel = collections.Counter()
    for o in dis:
        et, tur = toprak_mu(o)
        genel["madde"] += 1
        if not et:
            if tur:
                genel["yalniz_tur_toprak"] += 1
            continue
        genel["etiketli"] += 1
        f = o["_dosya"]
        S = sonuc[f]
        S["etiketli"] += 1
        try:
            g = gun_no(tarih(o["t"]))
        except Exception:
            S["tarih_bozuk"] += 1
            continue
        if g < ufuk0 or g > ufuk1:
            S["ufuk_disi"] += 1
            continue
        S["olculen"] += 1
        a, b = bisect.bisect_left(gunler, g - 30), bisect.bisect_right(gunler, g + 30)
        pencere = kirs[a:b]
        gevsek = bool(pencere)
        metin = norm(" ".join([o.get("b") or "", o.get("yer") or "", o.get("yer_id") or "", o.get("d") or ""]))
        sikı = any(len(kok_ad(ad)) >= 3 and kok_ad(ad) in metin for _, ad, _k in pencere)
        sikı3 = any(abs(gg - g) <= 3 and len(kok_ad(ad)) >= 3 and kok_ad(ad) in metin for gg, ad, _k in pencere)
        S["gevsek"] += gevsek
        S["yer_eslesen"] += sikı
        S["yer_eslesen_3g"] += sikı3
        if not sikı:
            eslesmeyen.append((f, o["t"], o.get("b") or "", o.get("yer_id") or "", o.get("kapsam") or "", gevsek))
    return genel, sonuc, eslesmeyen


# ---------------------------------------------------------------- ölçüm 3
def olcum3(ksiz):
    sn = []
    for o in ksiz:
        b = (o.get("b") or "")
        nb = norm(b)
        if re.search(r"antlasma|ittifak|baris|musalaha|sulh|protokol|misak", nb):
            h = "antlaşma/statüko"
        elif re.search(r"muhasara|kusatma|kusatildi", nb):
            h = "kuşatma"
        elif re.search(r"isyan|ayaklanma|harekat|cikarma", nb):
            h = "isyan/harekât"
        elif re.search(r"kurul|kuruldu|ilan", nb):
            h = "kuruluş/ilan"
        else:
            h = "diğer"
        sn.append((o["t"], b, o.get("tur") or "", ",".join(o.get("etiket") or []), o.get("yer_id") or o.get("yer") or "",
                   o.get("kapsam") or "", h))
    sn.sort()
    return sn


# ---------------------------------------------------------------- ana
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--tohum", type=int, default=1108)
    ap.add_argument("--n-dv", type=int, default=100)
    ap.add_argument("--n-s", type=int, default=200)
    ap.add_argument("--n-isg", type=int, default=100)
    ap.add_argument("--adim", default="1,2,3")
    ap.add_argument("--etiket", default="", help="çıktı dosyalarına ek (ör. koşu35)")
    args = ap.parse_args()
    adimlar = set(args.adim.split(","))
    ek = ("-" + args.etiket) if args.etiket else ""
    meta = {"taban_commit": sp.run(["git", "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip(),
            "tohum": args.tohum, "zaman": time.strftime("%Y-%m-%d %H:%M")}
    for f in ("data/donemler.js", "data/devletler_harita.js"):
        yol = os.path.join(KOK, f)
        meta[f] = {"boyut": os.path.getsize(yol),
                   "sha256": hashlib.sha256(open(yol, "rb").read()).hexdigest()[:16]} if os.path.exists(yol) else "YOK"
    Y, Yc, O, dv, s, isg, ksiz = yukle()
    cikti = {"meta": meta}
    if "1" in adimlar:
        ornek, say = olcum1(args, Y, O, dv, s, isg)
        cikti["olcum1"] = {"ornek": ornek, "kapali": say}
    if "2" in adimlar:
        genel, sonuc, eslesmeyen = olcum2(args, Y)
        cikti["olcum2"] = {"genel": dict(genel), "dosya": {k: dict(v) for k, v in sonuc.items()},
                           "eslesmeyen": eslesmeyen}
    if "3" in adimlar:
        cikti["olcum3"] = {"toplam": len(ksiz), "satirlar": olcum3(ksiz)}
    yol = os.path.join(CIKTI, f"sonuc{ek}.json")
    json.dump(cikti, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1, default=list)
    print("yazıldı:", yol)


if __name__ == "__main__":
    main()
