# -*- coding: utf-8 -*-
"""② EZME RİSKİ — 222 ezilen künye maddesinin kaçı dosyada zaten var?
Girdi: KAPI.py --json çıktısı (ezilen[].kunye / .dosya, {t,b}).
Sınıflar (her künye maddesi TEK sınıfa, ilk tutan):
  TAM      aynı t + aynı b (mevcut dedupe yakalar)
  T+YAKIN  aynı t, b benzerliği >= ESIK
  T+UZAK   aynı t, en yakın b < ESIK   (iki ayrı olay olabilir ya da farklı başlık)
  YIL+YAKIN farklı gün, aynı yıl, b benzerliği >= ESIK  (tarih çelişkisi adayı)
  YALNIZ   dosyada karşılığı yok — birleştirme bunu KURTARIR
"""
import json, sys, re, difflib, unicodedata
sys.stdout.reconfigure(encoding="utf-8")
ESIK = 0.6

def norm(s):
    s = (s or "").replace("İ", "i").replace("I", "ı").lower()
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9ı ]+", " ", s).split()

def benz(a, b):
    A, B = norm(a), norm(b)
    if not A or not B: return 0.0
    kume = len(set(A) & set(B)) / min(len(set(A)), len(set(B)))   # kısa başlığın kapsanması
    seq = difflib.SequenceMatcher(None, " ".join(A), " ".join(B)).ratio()
    return max(kume, seq)

r = json.load(open(sys.argv[1], encoding="utf-8"))
say = {"TAM": 0, "T+YAKIN": 0, "T+UZAK": 0, "YIL+YAKIN": 0, "YALNIZ": 0}
satir = []
for z in r["ezilen"]:
    for k in z["kunye"]:
        ayni_t = [d for d in z["dosya"] if d["t"] == k["t"]]
        yil = [d for d in z["dosya"] if str(d["t"])[:4] == str(k["t"])[:4] and d["t"] != k["t"]]
        if any(d["b"] == k["b"] for d in ayni_t): s, e, eb = "TAM", 1.0, k["b"]
        elif ayni_t:
            e, eb = max((benz(k["b"], d["b"]), d["b"]) for d in ayni_t)
            s = "T+YAKIN" if e >= ESIK else "T+UZAK"
        else:
            e, eb = max([(benz(k["b"], d["b"]), d["b"] + " @" + d["t"]) for d in yil] or [(0, "")])
            s = "YIL+YAKIN" if e >= ESIK else "YALNIZ"
        say[s] += 1
        satir.append({"id": z["id"], "sinif": s, "t": k["t"], "kunye_b": k["b"], "en_yakin": eb, "benzerlik": round(e, 2)})
top = sum(say.values())
print(f"ezilen künye maddesi {top} · eşik {ESIK}")
for s, n in say.items(): print(f"  {s:10s} {n:4d}  (%{100*n/top:.1f})")
json.dump(satir, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for s in ("T+YAKIN", "T+UZAK", "YIL+YAKIN"):
    print(f"\n-- örnek {s}")
    for x in [x for x in satir if x["sinif"] == s][:6]:
        print(f"  {x['id']:12s} {x['t']}  künye: {x['kunye_b'][:55]!r}\n{'':26s}dosya: {x['en_yakin'][:70]!r}  ({x['benzerlik']})")
