# -*- coding: utf-8 -*-
"""ARAC-SONRA1923-SAYIM.py — 1923 sonrası kapsamın SAYIMI (SONRA1923-SAYIM, 4 Ekim 2026).

YALNIZ OKUR. Hiçbir dosyaya yazmaz; çıktıyı stdout'a JSON + özet basar.
Okuyucular projenin kendileri:
  · dosya kümesi   arac/_bagli_mi.index_dosyalari (paket açılır) + disk glob'u (karşılaştırma)
  · JS değerleri   node ile GERÇEKTEN eval (regex değil) — window.* değişkenleri
  · yerleşim       arac/girdi.yukle()
  · künye          data/devletler.js node eval
  · boya           arac/renkler.BOYALAR
"""
import sys, os, io, json, subprocess, tempfile, collections, re
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi                                   # noqa: E402
from _bagli_mi import index_dosyalari          # noqa: E402

UC = girdi.UFUK[1]          # "1923-10-29"
DATA = os.path.join(KOK, "data")

NODE = r"""
const fs=require('fs'),vm=require('vm');
const L=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const out={};
for(const f of L.dosyalar){
  const ctx={window:{}};ctx.self=ctx.window;vm.createContext(ctx);
  try{vm.runInContext(fs.readFileSync(L.kok+'/data/'+f,'utf8'),ctx,{timeout:20000});}
  catch(e){out[f]={hata:String(e).slice(0,200)};continue;}
  const W=ctx.window, rec=[];
  // madde = t taşıyan nesne. Üst düzey diziler ve nesne-içi diziler yürünür;
  // devletler.js'te künye.kronoloji[] ayrı işaretlenir.
  function yuru(x,yol,derin){
    if(derin>6||x==null) return;
    if(Array.isArray(x)){x.forEach((e,i)=>yuru(e,yol,derin+1));return;}
    if(typeof x!=='object') return;
    const t=(typeof x.t==='string')?x.t:null, fx=(typeof x.f==='string')?x.f:null;
    if(t||fx) rec.push({yol:yol,t:t,f:fx,id:x.id||null,
        tar:(x.taraflar||x.devletler||x.kunye||null),
        k:(x.kaynak?1:0), odak:((x.yer_id||x.odak_yer||x.odak_kimlik||x.odak_kutu||x.odak_kutu_kaynak||x.lat!=null||x.konum)?1:0),
        gk:(x.kapsam_genis?1:0)});
    for(const k of Object.keys(x)){ if(x[k]&&typeof x[k]==='object') yuru(x[k],yol+'.'+k,derin+1); }
  }
  for(const k of Object.keys(W)) yuru(W[k],k,0);
  out[f]=rec;
}
process.stdout.write(JSON.stringify(out));
"""


def node_oku(dosyalar):
    fd, j = tempfile.mkstemp(suffix=".json"); os.close(fd)
    fd, s = tempfile.mkstemp(suffix=".js"); os.close(fd)
    io.open(j, "w", encoding="utf-8").write(json.dumps({"kok": KOK.replace("\\", "/"), "dosyalar": dosyalar}))
    io.open(s, "w", encoding="utf-8").write(NODE)
    try:
        r = subprocess.run(["node", "--max-old-space-size=4096", s, j], capture_output=True,
                           text=True, encoding="utf-8", errors="replace")
    finally:
        os.unlink(j); os.unlink(s)
    if r.returncode != 0:
        raise SystemExit("ÖLÇÜLEMEDİ — node çıkış %d: %s" % (r.returncode, r.stderr[:300]))
    return json.loads(r.stdout)


def pad(t):
    """CLAUDE.md §3.5: üç haneli yıl dizgi karşılaştırmasında pad() ŞART.
    Ölçüldü: ilk koşuda "330-05-11" > "1923-10-29" çıktı ve Bizans 1923 sonrası
    kurulmuş sayıldı. Pozitif yıl 4 haneye doldurulur; MÖ ("-…") '-' < '0'
    olduğundan bütün MS tarihlerinin altında kalır (UC karşılaştırması için yeter)."""
    if not isinstance(t, str): return t
    m = re.match(r"^(\d{1,3})(-.*)?$", t)
    return (m.group(1).zfill(4) + (m.group(2) or "")) if m else t


def kova_yil(t):
    if t <= UC: return "<=UC"
    y = int(t[:4]) if t[:4].isdigit() else None
    if y is None: return "?"
    if y < 1930: return "1923-1929"
    if y < 1945 or t <= "1945-09-02": return "1930-1945"
    if y < 1990: return "1945-1989"
    return "1990-2026"


def main():
    sonuc = {}
    yuklu = [f for f in index_dosyalari(os.path.join(KOK, "index.html")) if f.endswith(".js")]
    disk = sorted(f for f in os.listdir(DATA) if f.endswith(".js"))
    krono_disk = [f for f in disk if f.startswith(("kronoloji", "olaylar"))]
    krono_yuklu = [f for f in yuklu if f.startswith(("kronoloji", "olaylar"))]
    sinir = [f for f in disk if f.startswith("d_sinirlar")]
    hedef = sorted(set(krono_disk) | {"devletler.js"} | set(sinir))
    R = node_oku(hedef)
    for rec in R.values():
        if isinstance(rec, list):
            for r in rec:
                r["t"] = pad(r["t"]); r["f"] = pad(r["f"])

    # ── ① KRONOLOJİ ──────────────────────────────────────────────────────
    hata = {f: R[f]["hata"] for f in R if isinstance(R[f], dict)}
    k_dosya = collections.Counter(); k_kova = collections.Counter()
    k_yuklu_kova = collections.Counter(); k_kaynaksiz = 0; k_odaksiz = 0; k_gk_odaksiz = 0
    k_toplam_cekirdek = 0; k_toplam = 0
    for f in krono_disk:
        rec = R.get(f)
        if not isinstance(rec, list): continue
        for r in rec:
            if not r["t"] or not re.match(r"^-?\d{4}", r["t"]): continue
            k_toplam += 1
            if r["t"] > UC:
                k_dosya[f] += 1; k_kova[kova_yil(r["t"])] += 1
                if f in krono_yuklu:
                    k_yuklu_kova[kova_yil(r["t"])] += 1
                if not r["k"]: k_kaynaksiz += 1
                if not r["odak"]:
                    k_odaksiz += 1
                    if r["gk"]: k_gk_odaksiz += 1
    # künye içi kronoloji
    kun = R["devletler.js"]
    kun_krono = [r for r in kun if ".kronoloji" in r["yol"] and r["t"]]
    kun_krono_sonra = [r for r in kun_krono if r["t"] > UC]
    kk = collections.Counter(kova_yil(r["t"]) for r in kun_krono_sonra)
    sonuc["kronoloji"] = {
        "dosya_disk": len(krono_disk), "dosya_yuklu": len(krono_yuklu),
        "yuklenmeyen_ama_1923_sonrasi_tasiyan": sorted(f for f in k_dosya if f not in krono_yuklu),
        "madde_sonra_dosyalar": sum(k_dosya.values()),
        "madde_sonra_yuklu_dosyalar": sum(k_yuklu_kova.values()),
        "dosya_dagilimi": k_dosya.most_common(),
        "yil_kova_dosyalar": dict(k_kova),
        "kunye_ici_kronoloji_sonra": len(kun_krono_sonra), "kunye_ici_yil_kova": dict(kk),
        "kunye_ici_toplam": len(kun_krono),
        "sonra_kaynaksiz_dosyalar": k_kaynaksiz, "sonra_odaksiz_dosyalar": k_odaksiz,
        "sonra_odaksiz_kapsam_genis": k_gk_odaksiz,
        "kronoloji_1923_1945_yuklu": "kronoloji_cok_1923_1945.js" in krono_yuklu,
        "eval_hata": hata,
    }

    # ── ② KÜNYE ──────────────────────────────────────────────────────────
    top = [r for r in kun if r["yol"] == "DEVLETLER" or (r["id"] and ".kronoloji" not in r["yol"] and r["yol"].count(".") == 0)]
    ids = {}
    for r in top:
        if r["id"] and r["id"] not in ids: ids[r["id"]] = r
    # harita: alanı (boya anahtarı) — devletler.js'i ayrıca oku
    import renkler
    BOY = set(renkler.BOYALAR)
    harita = {}
    ham = io.open(os.path.join(DATA, "devletler.js"), encoding="utf-8").read()
    for m in re.finditer(r'\{\s*id:\s*"([^"]+)"[^\n]*?harita:\s*"([^"]+)"', ham):
        harita[m.group(1)] = m.group(2)
    def boyali(i): return (harita.get(i, i) in BOY) or (i in BOY)
    def yasar(r, gun): return (r["f"] or "0000") <= gun and (r["t"] is None or r["t"] >= gun)
    kesit = {}
    for gun in ("1923-10-30", "1939-09-01", "1945-09-02", "1960-01-01", "1990-01-01", "2026-01-01"):
        L = [i for i, r in ids.items() if yasar(r, gun)]
        kesit[gun] = {"canli": len(L), "boyali": sum(1 for i in L if boyali(i))}
    asan = [i for i, r in ids.items() if r["t"] is None or r["t"] > UC]
    sonra_kur = [i for i, r in ids.items() if (r["f"] or "") > UC]
    t_yok = [i for i, r in ids.items() if r["t"] is None]
    t_2026 = [i for i, r in ids.items() if r["t"] and r["t"] >= "2026"]
    sonuc["kunye"] = {
        "toplam": len(ids), "t_UC_asan": len(asan), "f_UC_sonrasi": len(sonra_kur),
        "f_UC_sonrasi_idler": sorted(sonra_kur), "t_yok": len(t_yok), "t_2026_ve_sonra": len(t_2026),
        "asan_boyali": sum(1 for i in asan if boyali(i)), "asan_boyasiz": sorted(i for i in asan if not boyali(i)),
        "kesitler": kesit,
        "t_tam_UC": sum(1 for r in ids.values() if r["t"] == UC),
    }
    # NE 10m admin-0 egemen sayısı (bugünkü dünya referansı)
    try:
        ne = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson"), encoding="utf-8"))
        sov = {f["properties"].get("SOVEREIGNT") for f in ne["features"]}
        typ = collections.Counter(f["properties"].get("TYPE") for f in ne["features"])
        sonuc["kunye"]["ne_egemen"] = len(sov); sonuc["kunye"]["ne_tip"] = dict(typ)
    except Exception as e:                                  # noqa: BLE001
        sonuc["kunye"]["ne_egemen"] = "ÖLÇÜLEMEDİ: %s" % e

    # ── ③ YERLEŞİM ───────────────────────────────────────────────────────
    Y = girdi.yukle(sessiz=True)
    for y in Y:
        for a in ("kur", "bit"):
            if y.get(a): y[a] = pad(y[a])
        for alan in ("s", "d", "v"):
            for p in (y.get(alan) or []):
                if isinstance(p, dict):
                    for a in ("f", "t"):
                        if p.get(a): p[a] = pad(p[a])
    son_uc = collections.Counter(); sahip_uc = collections.Counter()
    zincir_uc = 0; zincir_uc_once = 0; bit_var = 0; bit_sonra = 0; kur_sonra = 0; asan_s = []
    bos_uc = 0; isg_uc = 0
    for y in Y:
        pen = []
        for alan in ("s", "d", "v"):
            for p in (y.get(alan) or []):
                if isinstance(p, dict) and p.get("t"):
                    pen.append((p["t"], alan, p.get("d") or p.get("y") or p.get("kid")))
                    if p["t"] > UC: asan_s.append((y["ad"], alan, p["t"]))
        if y.get("bit"):
            bit_var += 1
            if y["bit"] > UC: bit_sonra += 1
        if y.get("kur") and y["kur"] > UC: kur_sonra += 1
        if not pen: continue
        tmax = max(p[0] for p in pen)
        if tmax >= UC:
            zincir_uc += 1
            # o gün sahibi (s: dönemi UC'de biten)
            for p in pen:
                if p[0] >= UC and p[1] == "s": sahip_uc[p[2]] += 1
        else:
            zincir_uc_once += 1
            son_uc[tmax[:4]] += 1
    sonuc["yerlesim"] = {
        "toplam": len(Y), "zincir_UCa_ulasan": zincir_uc, "zincir_UCdan_once_biten": zincir_uc_once,
        "bit_alani": bit_var, "bit_UC_sonrasi": bit_sonra, "kur_UC_sonrasi": kur_sonra,
        "pencere_UCu_asan": asan_s[:20], "pencere_UCu_asan_sayi": len(asan_s),
        "UC_gunu_sahip_dagilimi_ilk25": sahip_uc.most_common(25), "UC_gunu_sahip_kimlik_sayisi": len(sahip_uc),
        "UCdan_once_biten_yil_ilk10": son_uc.most_common(10),
    }

    # ── ④ SINIR ──────────────────────────────────────────────────────────
    sd = {}
    for f in sinir:
        rec = R.get(f)
        if not isinstance(rec, list): sd[f] = "ÖLÇÜLEMEDİ"; continue
        ust = [r for r in rec if r["yol"].count(".") == 0]
        sd[f] = {"kayit": len(ust), "f_UC_sonrasi": sum(1 for r in ust if (r["f"] or "") > UC),
                 "t_UC_asan": sum(1 for r in ust if (r["t"] or "") > UC),
                 "t_tam_UC": sum(1 for r in ust if r["t"] == UC),
                 "t_max": max([r["t"] for r in ust if r["t"]] or [None]),
                 "yuklu": f in yuklu}
    sonuc["sinir"] = sd
    print(json.dumps(sonuc, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
