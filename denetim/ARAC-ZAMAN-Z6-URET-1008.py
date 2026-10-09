# -*- coding: utf-8 -*-
"""ZAMAN-Z6-1008 — sınıf kararlarından yer_yama üretir + künye/zincir sınavı.

Girdi : denetim/ZAMAN-Z6-KARAR-<dilim>.json (elle yazılan kararlar)
        denetim/ZAMAN-Z6-<dilim>-ham.json (ARAC-ZAMAN-Z6-1008.py tdv çıktısı)
        denetim/ZAMAN-Z6-tdv/<slug>.txt (TDV önbelleği)
Çıktı : data/yer_yama_once1281_z6.js (window.YER_YAMA_ONCE1281_Z6) — ÖNERİ, koordinatör uygular
        denetim/ZAMAN-Z6-<dilim>-tablo.md (sınıf + kaynak tablosu)
Sınav : ① her alıntı TDV gövdesinde BİREBİR (alt dizgi) bulunur, yoksa DUR
        ② her dönem künye penceresi içinde (pad'li karşılaştırma)
        ③ zincir bitişik: t(i) == f(i+1), boşluk/çakışma yok, f<t
        ④ birleşen dönem: son ön-dönem d == mevcut ilk dönem d
"""
import sys, io, os, re, json, subprocess, argparse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZ = os.path.join(KOK, "denetim", "ZAMAN-Z6-tdv")
EPOK = "1281-01-01"
YAPISAL = {"ilhanli", "pervane", "cobanogullari", "ahiler", "sahibata", "esrefogullari",
           "inancogullari"}   # 1281'de Selçuklu topraklarının modellendiği ardıl/alt yapılar


def pad(g):
    m = re.match(r'^(-?)(\d+)(.*)$', str(g))
    return f"{m.group(1)}{int(m.group(2)):05d}{m.group(3)}" if m else str(g)


def kunyeler():
    kod = ("global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));"
           "process.stdout.write(JSON.stringify(window.DEVLETLER.map(d=>[d.id,d.f,d.t])))")
    o = subprocess.run(["node", "-e", kod], capture_output=True, text=True, encoding="utf-8", cwd=KOK)
    return {i: (f, t) for i, f, t in json.loads(o.stdout)}


def cumle_bul(slug, parca):
    t = io.open(os.path.join(DIZ, slug + ".txt"), encoding="utf-8").read()
    t = re.sub(r"\s+", " ", t)
    i = t.find(parca)
    if i < 0:
        return None
    bas = max(t.rfind(". ", 0, i), t.rfind("   ", 0, i))
    son = t.find(". ", i + len(parca))
    return t[bas + 1 if bas >= 0 else 0: son + 1 if son > 0 else i + 400].strip()


def kes(tarih):
    return "gun" if not tarih.endswith("-01-01") else "yil"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dilim", default="anadolu")
    a = ap.parse_args()
    K = kunyeler()
    karar = json.load(io.open(os.path.join(KOK, "denetim", f"ZAMAN-Z6-KARAR-{a.dilim}.json"), encoding="utf-8"))
    ham = {r["ad"]: r for r in json.load(io.open(os.path.join(KOK, "denetim", f"ZAMAN-Z6-{a.dilim}-ham.json"), encoding="utf-8"))}
    hata, kayitlar, tablo = [], [], []
    verilen = {k["ad"] for k in karar}
    for ad, r in ham.items():
        if ad in verilen:
            continue
        if not r.get("slug"):
            karar.append({"ad": ad, "sinif": "3", "neden": "TDV yer maddesi bulunamadı",
                          "denenen": r.get("denenen")})
        else:
            karar.append({"ad": ad, "sinif": "3", "neden": f"TDV `{r['slug']}` var; 1000-1280 tarihli sahiplik cümlesi yok"})
    for k in karar:
        ad = k["ad"]
        r = ham.get(ad)
        if not r:
            hata.append(f"{ad}: ham listede yok"); continue
        sinif = k["sinif"]
        tablo.append(k)
        if sinif != "2":
            continue
        mevcut = [dict(p) for p in r["s"]]
        if mevcut[0]["f"] != EPOK:
            hata.append(f"{ad}: mevcut ilk dönem {mevcut[0]['f']} (EPOK değil)")
        zincir, kaynak = [], []
        for i, p in enumerate(k["zincir"]):
            alinti = cumle_bul(p["slug"], p["parca"])
            if not alinti:
                hata.append(f"{ad}: alıntı bulunamadı {p['slug']} «{p['parca']}»"); continue
            kaynak.append({"f": p["f"], "d": p["d"], "tur": p.get("tur", "edinim"),
                           "tdv": p["slug"], "alinti": alinti, **({"not": p["not"]} if p.get("not") else {})})
            zincir.append({"f": p["f"], "d": p["d"]})
        # t'leri bağla
        for i in range(len(zincir) - 1):
            zincir[i]["t"] = zincir[i + 1]["f"]
        son = zincir[-1]
        if son["d"] == mevcut[0]["d"]:
            mevcut[0]["f"] = son["f"]
            yeni = zincir[:-1] + mevcut
            gecis = "birlesti"
        else:
            if mevcut[0]["d"] not in YAPISAL and not k.get("gecis_izin"):
                hata.append(f"{ad}: 1281 geçişi {son['d']}→{mevcut[0]['d']} YAPISAL değil")
            son["t"] = EPOK
            yeni = zincir + mevcut
            gecis = f"sinir-1281:{son['d']}→{mevcut[0]['d']}"
        on_donem = zincir if gecis != "birlesti" else zincir[:-1]
        for p in on_donem:
            kf, kt = kes(p["f"]), kes(p["t"])
            p["kesinlik"] = kf if kf == kt else {"f": kf, "t": kt}
        # sınav ② ③
        for i, p in enumerate(yeni):
            if pad(p["f"]) >= pad(p.get("t", "9999")):
                hata.append(f"{ad}: f>=t {p}")
            if i and i <= len(on_donem) and yeni[i - 1].get("t") != p["f"]:
                hata.append(f"{ad}: bitişik değil {yeni[i-1]} / {p}")
            d = p.get("d")
            if d and pad(p["f"]) < pad(EPOK):
                if d not in K:
                    hata.append(f"{ad}: künye yok {d}"); continue
                kf, kt = K[d]
                if pad(p["f"]) < pad(kf) or pad(min(p.get("t", "9999"), EPOK)) > pad(kt):
                    hata.append(f"{ad}: künye penceresi dışı {d} [{kf}→{kt}] ← {p['f']}→{p.get('t')}")
        kayitlar.append({"ad": ad, "s": yeni,
                         "kaynak": "ZAMAN-Z6-1008 — 1281 öncesi zincir; dönem başına TDV alıntısı `once1281` alanında",
                         "once1281": {"gecis": gecis, "dayanak": kaynak,
                                      **({"not": k["not"]} if k.get("not") else {})}})
    print(f"karar {len(karar)} · ② kayıt {len(kayitlar)} · HATA {len(hata)}")
    for h in hata:
        print("  ✗", h)
    if hata:
        sys.exit(1)
    bas = ("// -*- coding: utf-8 -*-\n"
           "// YER_YAMA_ONCE1281_Z6 — yerleşimlerin 1000-1281 sahipliği (ZAMAN-Z6-YER-ONCE1281-1008, UMIT)\n"
           "// window.YER_YAMA_ONCE1281_Z6 · ÖNERİ — koordinatör uygular. Rapor: denetim/ZAMAN-Z6-1008.md\n"
           "// 🔴 GÜN ARALIĞI: yalnız 1281-01-01 ÖNCESİ (en erken 0330-05-11). 1281-01-01 ve sonrası\n"
           "//   dönemlerin hiçbir alanı değişmedi; 'birlesti' kayıtlarında yalnız EPOK'lu ilk dönemin\n"
           "//   `f:`si geriye çekildi (t ve öteki alanlar aynı). Üç haneli yıl 0YYY dolgulu.\n"
           "// Her kayıt `s:` dizisinin TAMAMINI taşır: EPOK (1281-01-01) ilk dönemi gerçek ilk tarihle\n"
           "// değiştirir ve/veya öncesine dönem ekler. 1281 SONRASI dönemlere DOKUNULMADI.\n"
           "// `once1281.gecis`: 'birlesti' = son ön-dönem mevcut ilk dönemle aynı sahip, f geriye çekildi ·\n"
           "//   'sinir-1281:a→b' = sahip 1281'de değişiyor, geçiş günü kaynakta YOK — t:1281-01-01 SINIR\n"
           "//   İŞARETİDİR (mevcut verinin kendi epok kırılması; yalnız Selçuklu→ardıl/alt yapı kabul edildi).\n"
           "// `once1281.dayanak[].tur`: 'edinim' = kaynak el değiştirmeyi tarihliyor · 'tanik' = kaynak o\n"
           "//   tarihte sahibi gösteriyor, ediniş günü DEĞİL (öncesi bilinmiyor, YAZILMADI).\n"
           "// ⚠️ Motor UFUK 1281-01-01 iken bu dönemler kırpılır — görünürlük Z1 (ufuk) + Z3 (boya) ile.\n"
           + "window.YER_YAMA_ONCE1281_Z6 = " + json.dumps(kayitlar, ensure_ascii=False, indent=1) + ";\n")
    io.open(os.path.join(KOK, "data", "yer_yama_once1281_z6.js"), "w", encoding="utf-8", newline="\n").write(bas)
    json.dump(tablo, io.open(os.path.join(KOK, "denetim", f"ZAMAN-Z6-{a.dilim}-sinif.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print("yazıldı: data/yer_yama_once1281_z6.js")


if __name__ == "__main__":
    main()
