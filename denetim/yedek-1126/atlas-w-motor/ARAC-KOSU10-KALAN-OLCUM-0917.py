"""KOSU10-KALAN ölçüm aleti — veriye YAZMAZ, yalnız okur.

Kullanım:
  py denetim/ARAC-KOSU10-KALAN-OLCUM-0917.py yer <ad> [<ad> ...]
      → girdi.yukle() (motorun okuduğu 77 dosya) içinde adı NORMALLEŞTİRİLMİŞ
        eşleşen kayıtlar: dosya:satır + d/v/s/isg dönemleri + kur + kaynak alanı.
        Ayrıca yer_yama*.js / yerlesimler*.js içinde HAM satır araması yapar
        (girdi.yukle yamaları uygulanmış hâli verir; ham satır hangi dosyada
        durduğunu gösterir — D034: bir bilgi iki yerde durursa biri bayatlar).
  py denetim/ARAC-KOSU10-KALAN-OLCUM-0917.py madde <regex> [--t YYYY]
      → data/olaylar*.js + data/kronoloji*.js + data/ekokuma*.js içinde
        b/d/t alanlarında regex geçen maddeler (dosya:satır, t, b).
  py denetim/ARAC-KOSU10-KALAN-OLCUM-0917.py kunye <id|regex>
      → data/devletler.js künyesi (id, ad, f, t, harita, kaynak başı).
  py denetim/ARAC-KOSU10-KALAN-OLCUM-0917.py ham <regex> [glob]
      → data/ altında ham satır araması (varsayılan glob: *.js), dosya:satır.

Normalleştirme: CLAUDE.md §4 — İ/ı/ş/ğ/ü/ö/ç eşlenir, lower() ÖNCE değil SONRA.
"""
import sys, io, os, re, glob, json, unicodedata, subprocess
sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

TR = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
                    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a",
                    "Î": "i", "î": "i", "Û": "u", "û": "u", "’": "'", "ʿ": "", "ʾ": ""})


def norm(s):
    s = unicodedata.normalize("NFKD", str(s).translate(TR))
    return "".join(c for c in s if not unicodedata.combining(c)).lower()


def donem(y):
    out = []
    for k in ("d", "v", "s", "isg"):
        for p in y.get(k) or []:
            ek = p.get("d") or p.get("kid") or ""
            out.append("%s:%s %s→%s" % (k, ek, p.get("f"), p.get("t")))
    return out


def satir_bul(ad):
    """data/*.js içinde ad:"<ad>" geçen HAM satırlar (dosya:satır)."""
    # 🔴 17 Eylül: ilk sürüm yalnız ad:"X" biçimini arıyordu; ad: "X" (boşluklu)
    # ve "ad": "X" kopyalarını KAÇIRDI (G4 ölçtü: egeadalari · yunananakara ·
    # p0035 · romanya). Desen artık boşluk ve tırnaklı anahtarı kapsıyor.
    hed = re.compile(r'["\']?ad["\']?\s*:\s*["\']%s["\']' % re.escape(ad))
    sonuc = []
    for f in sorted(glob.glob("data/*.js")):
        try:
            with io.open(f, encoding="utf-8") as h:
                for i, l in enumerate(h, 1):
                    if hed.search(l):
                        sonuc.append("%s:%d" % (f, i))
        except UnicodeDecodeError:
            pass
    return sonuc


def yer(adlar):
    import girdi
    Y = girdi.yukle(sessiz=True)
    for a in adlar:
        na = norm(a)
        bul = [y for y in Y if norm(y["ad"]) == na or na in re.split(r"[ ()/,-]+", norm(y["ad"]))]
        if not bul:
            print("── %s : BULUNAMADI (girdi.yukle, %d kayıt, normalleştirilmiş tam/parça eşleşme)" % (a, len(Y)))
            continue
        for y in bul:
            print("── %s  [%s]  lat %s lon %s  kur:%s  m:%s" % (y["ad"], y.get("_kaynak"), y.get("lat"), y.get("lon"),
                                                            y.get("kur", "-"), y.get("m", "-")))
            for d in donem(y):
                print("     " + d)
            for k in ("kaynak", "neden", "bos"):
                if y.get(k):
                    print("     %s: %s" % (k, str(y[k])[:400]))
            for s in satir_bul(y["ad"]):
                print("     ham satır: " + s)


def js_yukle(desenler):
    import json as _j
    kod = r"""
const fs=require('fs');global.window={};
const dosyalar=JSON.parse(process.argv[1]);const out=[];
for(const f of dosyalar){const once=new Set(Object.keys(window));
 try{eval(fs.readFileSync(f,'utf8'))}catch(e){continue}
 const satirlar=fs.readFileSync(f,'utf8').split('\n');
 for(const k of Object.keys(window)){if(once.has(k))continue;const v=window[k];
  const liste=Array.isArray(v)?v:(v&&typeof v==='object'?Object.values(v).flat():[]);
  for(const o of liste){if(!o||typeof o!=='object')continue;
   const b=String(o.b||o.baslik||o.ad||'');let sat=0;
   if(b){const key=b.slice(0,40);sat=satirlar.findIndex(s=>s.includes(key))+1;}
   out.push({f,k,sat,t:String(o.t||o.tarih||''),b,d:String(o.d||'').slice(0,600),kaynak:String(o.kaynak||'').slice(0,200),ic:String(o.ic_not_d||'').slice(0,300)});}}}
process.stdout.write(JSON.stringify(out));
"""
    dosyalar = []
    for d in desenler:
        dosyalar += sorted(glob.glob(d))
    r = subprocess.run(["node", "-e", kod, json.dumps(dosyalar)], capture_output=True, timeout=300)
    return json.loads(r.stdout.decode("utf-8") or "[]")


def madde(rx, yil=None):
    M = js_yukle(["data/olaylar*.js", "data/kronoloji*.js", "data/ekokuma*.js"])
    r = re.compile(rx, re.I)
    n = 0
    for m in M:
        if yil and not m["t"].startswith(yil):
            continue
        if r.search(m["b"]) or r.search(m["d"]) or r.search(m["t"]):
            n += 1
            print("%s:%s  [%s]  t=%s  %s" % (m["f"], m["sat"], m["k"], m["t"], m["b"][:120]))
            if m["kaynak"]:
                print("      kaynak: " + m["kaynak"])
            if m["ic"]:
                print("      ic_not_d: " + m["ic"])
    print("eşleşen %d / %d madde" % (n, len(M)))


def kunye(q):
    kod = r"""global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));
const q=process.argv[1],r=new RegExp(q,'i');
for(const d of window.DEVLETLER)if(d.id===q||r.test(d.id)||r.test(d.ad||''))
 console.log(d.id,'|',d.ad,'|',d.f,'→',d.t,'| harita:',d.harita||'-','| kaynak:',String(d.kaynak||'').slice(0,160));"""
    subprocess.run(["node", "-e", kod, q])


def ham(rx, gl="*.js"):
    r = re.compile(rx)
    for f in sorted(glob.glob("data/" + gl)):
        try:
            with io.open(f, encoding="utf-8") as h:
                for i, l in enumerate(h, 1):
                    if r.search(l):
                        print("%s:%d: %s" % (f, i, l.strip()[:300]))
        except UnicodeDecodeError:
            pass


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a:
        print(__doc__); sys.exit(0)
    if a[0] == "yer":
        yer(a[1:])
    elif a[0] == "madde":
        yil = a[a.index("--t") + 1] if "--t" in a else None
        madde(a[1], yil)
    elif a[0] == "kunye":
        kunye(a[1])
    elif a[0] == "ham":
        ham(a[1], a[2] if len(a) > 2 else "*.js")
