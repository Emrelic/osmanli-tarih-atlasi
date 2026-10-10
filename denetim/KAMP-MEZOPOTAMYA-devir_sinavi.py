# DEVİR SINAVI — K1 yazım çıktısını ATLASIN KENDİ OKUYUCULARINA ver (koordinatör ⓐ, D225).
# data/'ya DOKUNMAZ: JS'i bir SCRATCH dizine yazar, girdi.DATA'yı oraya yönlendirir, AYRI SÜREÇTE okur.
# Kullanım: py denetim/KAMP-MEZOPOTAMYA-devir_sinavi.py <scratch_dizini>
import json, os, re, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCR = os.path.abspath(sys.argv[1]); os.makedirs(SCR, exist_ok=True)
J = lambda ad: json.load(open(os.path.join(KOK, "denetim", f"KAMP-MEZOPOTAMYA-YAZIM-{ad}.json"), encoding="utf-8"))

def js(v, ic=0):
    """Atlas üslubu: anahtar TIRNAKSIZ, dize JSON kaçışlı (yazıcının üreteceği biçim)."""
    if isinstance(v, dict):
        return "{ " + ", ".join(f"{k}:{js(x, ic+1)}" for k, x in v.items()) + " }"
    if isinstance(v, list):
        return "[" + ", ".join(js(x, ic+1) for x in v) + "]"
    return json.dumps(v, ensure_ascii=False)
def yaz(dosya, degisken, kayitlar):
    with open(os.path.join(SCR, dosya), "w", encoding="utf-8") as f:
        f.write(f"window.{degisken} = [\n" + ",\n".join(js(k) for k in kayitlar) + "\n];\n")

yer = J("yerlesim"); kun = J("kunye"); ol = J("olay")
# A) şema-yalın: yazıcının İNDİRECEĞİ hâl (alt çizgili bilgi alanları ATILIR)
yalin = [{k: v for k, v in r.items() if not k.startswith("_")} for r in yer]
# B) ham: alt çizgili alanlarla — süzgecin tanımadığını SAYIP BASTIĞINI sınamak için
yaz("yerlesimler_k1mez_yalin.js", "YERLESIMLER_K1MEZ", yalin)
yaz("yerlesimler_k1mez_ham.js", "YERLESIMLER_K1MEZH", yer)
kunye = []
for p in kun["kunye"]:
    q = {k: v for k, v in p.items() if not k.startswith("_")}
    # künye düzeyinde tâbilik MEVCUT alanla yazılır: `tabi:[{f,t,ust}]` (14 künyede canlı: kirim, eflak …)
    if p["id"] in kun["v_dilimleri"]:
        q["tabi"] = [{"f": d["f"], "t": d["t"], "ust": d["d"], "tip": d["k"], "uc_turu": d["uc_turu"], "kaynak": d["kaynak"]}
                     for d in kun["v_dilimleri"][p["id"]]]
    kunye.append(q)
yaz("devletler.js", "DEVLETLER", kunye)
yaz("olaylar_k1mez.js", "OLAYLAR_K1MEZ", ol["olay"])

OKU = r'''
import sys, io, contextlib, json, collections
sys.path.insert(0, %(arac)r); import girdi
# devletler.js'in ALAN SÖZLÜĞÜ YOK (oku_devletler her alanı sessizce geçirir) ⇒ ölçüt GERÇEK veride
# kullanılan alan kümesidir: atlasta HİÇ geçmeyen alan = "tanınmayan" sayılır, ADIYLA basılır.
GD = girdi.oku_devletler()
GERCEK = {k for d in GD for k in d}
GERCEK_TABI = {k for d in GD for x in (d.get("tabi") or []) for k in x}
GERCEK_KRO = {k for d in GD for x in (d.get("kronoloji") or []) for k in x}
girdi.DATA = %(scr)r
out = {}
for ad in ("yerlesimler_k1mez_yalin.js", "yerlesimler_k1mez_ham.js"):
    girdi.GIRDI_DOSYALARI = [ad]
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf): Y = girdi.yukle(sessiz=True)
    uy = [l.strip() for l in buf.getvalue().splitlines() if "UYARI" in l]
    out[ad] = {"okunan": len(Y), "uyari": uy,
               "s_donemli": sum(1 for y in Y if y.get("s")), "bos": sum(1 for y in Y if y.get("bos"))}
D = girdi.oku_devletler()
AL = {k for d in D for k in d}
out["devletler"] = {"okunan": len(D), "alanlar": sorted(AL),
                    "atlasta_HIC_gecmeyen_alan": sorted(AL - GERCEK),
                    "tabi_alt_alan_yeni": sorted({k for d in D for x in (d.get("tabi") or []) for k in x} - GERCEK_TABI),
                    "kronoloji_alt_alan_yeni": sorted({k for d in D for x in (d.get("kronoloji") or []) for k in x} - GERCEK_KRO),
                    "ozetsiz": sum(1 for d in D if not d.get("ozet")),
                    "tabi_dilimli": sum(1 for d in D if d.get("tabi"))}
import denetle
O = denetle.oku_pencere(%(scr)r + "/olaylar_k1mez.js", "OLAYLAR_K1MEZ")
out["olaylar"] = {"okunan": len(O), "alanlar": sorted({k for o in O for k in o})}
# MÖ tarihleri motorun tarih yardımcısından geçebiliyor mu? (VERI-YAPISI: C3 inmeden ÇÖKMESİ BEKLENİR)
ornek = O[0]["t"]
try: denetle.gun_no(denetle.pad(ornek)); out["gun_no"] = "GEÇTİ " + ornek
except Exception as e: out["gun_no"] = f"ÇÖKTÜ ({type(e).__name__}: {e}) — {ornek}"
print(json.dumps(out, ensure_ascii=False))
''' % {"arac": os.path.join(KOK, "arac"), "scr": SCR.replace("\\", "/")}
r = subprocess.run([sys.executable, "-c", OKU], capture_output=True, text=True, encoding="utf-8", cwd=KOK)
if r.returncode:
    print("OKUYUCU ÇÖKTÜ:\n", r.stderr[-3000:]); sys.exit(1)
son = [l for l in r.stdout.splitlines() if l.startswith("{")][-1]
S = json.loads(son)
beklenen = {"yerlesim": len(yer), "kunye": len(kunye), "olay": len(ol["olay"])}
print("BEKLENEN:", beklenen)
for k, v in S.items(): print(k, "→", v)
json.dump({"beklenen": beklenen, "olculen": S}, open(os.path.join(KOK, "denetim", "KAMP-MEZOPOTAMYA-YAZIM-devir.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
