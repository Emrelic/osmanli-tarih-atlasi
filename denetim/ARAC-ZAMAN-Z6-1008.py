# -*- coding: utf-8 -*-
"""ZAMAN-Z6-1008 — yerleşimlerin 1000-1281 sahipliği.

  olc   : bugünkü duvar (ilk sahiplik dönemi 1281-01-01) · kova dağılımı · Anadolu listesi
  tdv   : Anadolu (ya da --kova) noktaları için TDV yer maddesini çek, 1000-1280 tarihli
          BÜTÜN cümleleri dök (ilk cümle değil — 0930 aracı yalnız ilkini alıyordu)
Veri yazmaz. Önbellek: denetim/ZAMAN-Z6-tdv/ (5xx/000 yazılmaz — 0930 tuzağı).
TDV yardımcıları ARAC-ONCE1281-YERLESIM-TDV.py'den alınır (slugla, adaylar, kova, duz,
govde_metni, yer_maddesi_mi) — önbellek dizini bu araca yönlendirilir.
"""
import sys, io, os, re, json, subprocess, contextlib, collections, argparse
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "denetim"))
import girdi
import importlib.util
_sp = importlib.util.spec_from_file_location("t0930", os.path.join(KOK, "denetim", "ARAC-ONCE1281-YERLESIM-TDV.py"))
T = importlib.util.module_from_spec(_sp); _sp.loader.exec_module(T)
T.DIZ = os.path.join(KOK, "denetim", "ZAMAN-Z6-tdv")
os.makedirs(T.DIZ, exist_ok=True)

EPOK = "1281-01-01"
SAHIP = ("s", "d", "v")


def pad(g):
    m = re.match(r'^(-?)(\d+)(.*)$', str(g))
    return f"{m.group(1)}{int(m.group(2)):05d}{m.group(3)}" if m else str(g)


def js_oku(yol, degisken):
    kod = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
           "process.stdout.write(JSON.stringify(window[process.argv[2]]||null))")
    o = subprocess.run(["node", "-e", kod, yol, degisken], capture_output=True, text=True, encoding="utf-8")
    if o.returncode:
        raise RuntimeError(o.stderr[:300])
    return json.loads(o.stdout)


def yukle():
    with contextlib.redirect_stdout(io.StringIO()):
        return girdi.yukle(sessiz=True)


def ilk(y):
    ps = [p for k in SAHIP for p in (y.get(k) or []) if p.get("f")]
    return min(ps, key=lambda p: pad(p["f"])) if ps else None


def olc(Y):
    duvar = [y for y in Y if (ilk(y) or {}).get("f") == EPOK]
    once = [y for y in Y if ilk(y) and pad(ilk(y)["f"]) < pad(EPOK)]
    print(f"evren {len(Y)} nokta · GIRDI_DOSYALARI {len(girdi.GIRDI_DOSYALARI)}")
    print(f"DUVAR (ilk sahiplik f=1281-01-01): {len(duvar)} · f<1281: {len(once)} {[y['ad'] for y in once]}")
    k = collections.Counter(T.kova(y) or "—" for y in duvar)
    k2 = collections.Counter(T.kova(y) or "—" for y in duvar if y.get("tur") != "bolge")
    print("kova (hepsi):", dict(k)); print("kova (tur!=bolge):", dict(k2))
    return duvar


def tum_tanik(govde):
    out = []
    for cum in re.split(r"(?<=[.!?])\s+", T.govde_metni(govde)):
        yillar = []
        for m in T.TARIH_BICIM.finditer(cum):
            v = int(m.group(1) or m.group(2))
            arka = cum[m.end():m.end() + 14]
            hicri = re.match(r"[^()]{0,6}\((1[3-9]\d\d|12[89]\d)\)", arka)
            if 1000 <= v <= 1280 and not hicri and not T.MO.search(cum[:m.start()][-25:]):
                yillar.append(v)
        if yillar:
            out.append((yillar, cum.strip()[:600]))
    return out


def tdv(Y, kova_adi, ek_slug):
    duvar = [y for y in Y if (ilk(y) or {}).get("f") == EPOK and y.get("tur") != "bolge"
             and T.kova(y) == kova_adi]
    sonuc = []
    for i, y in enumerate(duvar):
        denenen, bulunan = [], None
        cands = list(ek_slug.get(y["ad"], [])) + T.adaylar(y["ad"])
        for sl in cands:
            for s2 in (sl, sl + "--" + "sehir"):
                kod, g = T.cek(s2)
                denenen.append(f"{s2}:{kod}")
                if kod == "200" and T.yer_maddesi_mi(g):
                    bulunan = (s2, g); break
            if bulunan: break
        if not bulunan:
            for sl in cands[:2]:
                kod, linkler = T.cek_arama(sl)
                denenen.append(f"arama:{sl}:{kod}")
                for l in linkler:
                    if l.startswith(sl + "--"):
                        kod2, g2 = T.cek(l); denenen.append(f"{l}:{kod2}")
                        if kod2 == "200" and T.yer_maddesi_mi(g2):
                            bulunan = (l, g2); break
                if bulunan: break
        r = {"ad": y["ad"], "lat": y["lat"], "lon": y["lon"], "tur": y.get("tur"),
             "kur": y.get("kur"), "dosya": y.get("_kaynak"), "s": y.get("s"), "denenen": denenen}
        if bulunan:
            r["slug"] = bulunan[0]
            r["tanik"] = tum_tanik(bulunan[1])
        sonuc.append(r)
        print(f"[{i+1}/{len(duvar)}] {y['ad']} → {r.get('slug','—')} · {len(r.get('tanik',[]))} cümle", flush=True)
    return sonuc


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("is_", choices=["olc", "tdv"])
    ap.add_argument("--kova", default="Anadolu")
    ap.add_argument("--cik")
    a = ap.parse_args()
    Y = yukle()
    if a.is_ == "olc":
        olc(Y)
    else:
        ek = {}
        yol = os.path.join(KOK, "denetim", "ZAMAN-Z6-ek-slug.json")
        if os.path.exists(yol):
            ek = json.load(io.open(yol, encoding="utf-8"))
        r = tdv(Y, a.kova, ek)
        json.dump(r, io.open(a.cik, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
