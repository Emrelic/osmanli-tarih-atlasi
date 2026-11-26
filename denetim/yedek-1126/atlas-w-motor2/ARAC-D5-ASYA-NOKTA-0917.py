# D5-ASYA · NOKTA-ASYA — araştırma çıktılarından data/yerlesimler_nokta_asya_0917.js üretir ve sınar.
# Girdi: denetim/D5-ASYA-NOKTA-ARASTIRMA-0917.json (dört araştırma kolunun süzülmemiş birleşimi)
# Sınav: künye var mı · dönem künye penceresinde mi · ters/sıfır/çakışma · kesintisizlik (kur|1281 → 1923-10-29)
#        · renk (arac/renkler.py BOYALAR, künyenin harita: anahtarı) · 3 km içinde mevcut nokta · ad çakışması
# Kullanım: py denetim/ARAC-D5-ASYA-NOKTA-0917.py [--yaz]
import io, json, math, os, re, subprocess, sys, unicodedata
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, "arac")
import girdi, renkler

GIRDI = "denetim/D5-ASYA-NOKTA-ARASTIRMA-0917.json"
CIKTI = "data/yerlesimler_nokta_asya_0917.js"
SON = "1923-10-29"
BAS = "1281-01-01"
pad = lambda s: s.zfill(10) if s and len(s.split("-")[0]) < 4 else s

def node(js):
    return json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8", check=True).stdout)

KUNYE = {d["id"]: d for d in node(
    "global.window={};eval(require('fs').readFileSync('data/devletler.js','utf8'));"
    "const D=Object.values(window).find(v=>Array.isArray(v)&&v.length>500&&v[0].id);"
    "process.stdout.write(JSON.stringify(D.map(d=>({id:d.id,f:d.f,t:d.t,harita:d.harita||null}))))")}
dosyalar = [f for f in girdi.GIRDI_DOSYALARI if f != os.path.basename(CIKTI)]
MEVCUT = node(
    "const fs=require('fs');const o=[];for(const f of %s){global.window={};try{eval(fs.readFileSync('data/'+f,'utf8'))}catch(e){continue}"
    "for(const k of Object.keys(window)){const v=window[k];if(Array.isArray(v))for(const y of v)if(y&&y.lat!=null)o.push({f,ad:y.ad,lat:y.lat,lon:y.lon})}}"
    "process.stdout.write(JSON.stringify(o))" % json.dumps(dosyalar))

def norm(s):
    s = s.translate(str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g", "Ü": "u", "ü": "u",
                                   "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a", "’": "'"}))
    s = "".join(c for c in unicodedata.normalize("NFKD", s) if not unicodedata.combining(c))
    return s.lower()

def km(a, b, c, d):
    p = math.pi / 180
    return 6371 * 2 * math.asin(math.sqrt(math.sin((c - a) * p / 2) ** 2 + math.cos(a * p) * math.cos(c * p) * math.sin((d - b) * p / 2) ** 2))

A = json.load(io.open(GIRDI, encoding="utf-8"))
hata, uyari, yaz = [], [], []
for n in A["noktalar"]:
    ad = n["ad"]
    if n.get("devlet_yok") or not n.get("s"):
        uyari.append((ad, "yazılmadı", n.get("neden_yazilmadi", "zincir yok")))
        continue
    bas = pad(n.get("kur") or BAS)
    if bas < BAS:
        bas = BAS
    S = sorted(n["s"], key=lambda p: pad(p["f"]))
    onceki = bas
    for p in S:
        if p["d"] == "__BOSLUK__":        # VERI-YAPISI §__BOSLUK__: künyesi olmayan dilim, komşuya İTİLMEZ
            if pad(p["f"]) != onceki:
                hata.append((ad, "boşluk beyanı zinciri kırıyor", p))
            onceki = pad(p["t"])
            continue
        k = KUNYE.get(p["d"])
        if not k:
            hata.append((ad, "künye yok", p["d"])); continue
        if pad(p["f"]) >= pad(p["t"]):
            hata.append((ad, "ters/sıfır", p))
        if pad(p["f"]) < pad(k["f"]) or pad(p["t"]) > pad(k["t"]):
            hata.append((ad, "pencere", p["d"], p["f"], p["t"], k["f"], k["t"]))
        boya = k["harita"] or p["d"]
        if boya not in renkler.BOYALAR:
            hata.append((ad, "renk yok", p["d"], boya))
        if pad(p["f"]) < onceki:
            hata.append((ad, "çakışma", p["f"], onceki))
        elif pad(p["f"]) > onceki:
            uyari.append((ad, "BOŞLUK", onceki, p["f"]))
        onceki = pad(p["t"])
    if onceki != SON:
        uyari.append((ad, "BOŞLUK", onceki, SON))
    for y in MEVCUT:
        dk = km(n["lat"], n["lon"], y["lat"], y["lon"])
        if dk < 3:
            hata.append((ad, "3 km", y["ad"], y["f"], round(dk, 2)))
        if norm(y["ad"]).split(" (")[0] == norm(ad).split(" (")[0]:
            hata.append((ad, "ad çakışması", y["ad"], y["f"], round(dk)))
    enyakin = min(MEVCUT, key=lambda y: km(n["lat"], n["lon"], y["lat"], y["lon"]))
    kayit = {"ad": ad, "tur": n["tur"], "lat": n["lat"], "lon": n["lon"], "g": 0, "k": 0}
    if n.get("kur") and pad(n["kur"]) > BAS:
        kayit["kur"] = n["kur"]
    kayit["neden"] = n["neden"] + " En yakın mevcut nokta: %s %.0f km." % (enyakin["ad"], km(n["lat"], n["lon"], enyakin["lat"], enyakin["lon"]))
    if n.get("not"):
        kayit["not"] = n["not"]
    kayit["kaynak"] = n["kaynak"]
    kayit["s"] = [{"f": p["f"], "t": p["t"], "d": p["d"]} for p in S]
    yaz.append(kayit)

print("nokta", len(A["noktalar"]), "· yazılacak", len(yaz), "· dönem", sum(len(k["s"]) for k in yaz))
for h in hata: print("HATA", h)
for u in uyari: print("UYARI", u)

if "--yaz" in sys.argv and not hata:
    bas_yorum = io.open("denetim/D5-ASYA-NOKTA-BASLIK-0917.txt", encoding="utf-8").read().rstrip("\n")
    def kayit_js(k):
        j = lambda v: json.dumps(v, ensure_ascii=False)
        bas = "{ " + ", ".join(f"{a}:{j(k[a])}" for a in ("ad", "tur", "lat", "lon", "g", "k", "kur") if a in k)
        orta = "".join(f",\n  {a}:{j(k[a])}" for a in ("neden", "not", "kaynak") if a in k)
        s = ",\n     ".join("{" + f'f:{j(p["f"])},t:{j(p["t"])},d:{j(p["d"])}' + "}" for p in k["s"])
        return bas + orta + ",\n  s:[" + s + "] }"
    govde = ",\n\n".join(kayit_js(k) for k in yaz)
    io.open(CIKTI, "w", encoding="utf-8", newline="\n").write(
        bas_yorum + "\n\nwindow.YERLESIMLER_NOKTA_ASYA_0917 = [\n\n" + govde + "\n\n];\n")
    print("yazıldı:", CIKTI)
sys.exit(1 if hata else 0)
