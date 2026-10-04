# KASA · 4 Ekim 2026 · YALNIZ OLCUM: s: tasiyan ama kayit duzeyinde kaynak:
# alani olmayan noktalar, komsudan devralanlar, zincirleme devralma.
# Kullanim: py denetim/ARAC-KASA-KAYNAKSIZ-1004.py denetim/KASA-KAYNAKSIZ-1004.json
import sys, os, re, json, collections
AR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "arac")
sys.path.insert(0, AR)
os.chdir(AR)
import girdi
from girdi_listesi import GIRDI_DOSYALARI

hepsi = girdi.yukle(sessiz=True)
ad2 = {y["ad"]: y for y in hepsi}

def ham(ad):
    return open(os.path.join(girdi.DATA, ad), encoding="utf-8").read()

DOGR = re.compile(r"DO[GĞ]RULANMADI", re.I)
dosya_dogr = {ad: bool(DOGR.search(ham(ad))) for ad in GIRDI_DOSYALARI}

DEVRAL = re.compile(r"komşu|komsu|devral|ARAŞTIRILMADI|ARASTIRILMADI|ankraj|\[K ", re.I)

def kaynak(y):
    k = y.get("kaynak")
    return k.strip() if isinstance(k, str) else ("" if not k else str(k))

def donem_kaynak(y):
    return any(isinstance(p, dict) and p.get("kaynak") for p in (y.get("s") or []))

sat = collections.OrderedDict()
s_kaynaksiz = []
for y in hepsi:
    d = y["_kaynak"]
    r = sat.setdefault(d, dict(top=0, s=0, s_ky=0, s_ky_donemli=0, s_bulunamadi=0, devral=0))
    r["top"] += 1
    if not y.get("s"):
        continue
    r["s"] += 1
    k = kaynak(y)
    if not k:
        r["s_ky"] += 1
        s_kaynaksiz.append(y)
        if donem_kaynak(y):
            r["s_ky_donemli"] += 1
    elif re.search(r"bulunamad", k, re.I):
        r["s_bulunamadi"] += 1
    if k and DEVRAL.search(k):
        r["devral"] += 1

# devralanlar: s taşıyan + kaynak içinde devralma ibaresi
devralan = [y for y in hepsi if y.get("s") and DEVRAL.search(kaynak(y))]
devralan_ad = {y["ad"] for y in devralan}

AD_RE = [re.compile(r"«([^»]+)»"), re.compile(r"ankraj\s+([^\(\)·,;]+?)\s*\("),
         re.compile(r"\[K\s+([^\]\d]+?)\s*[\d\]]")]
def komsular(k):
    out = []
    for rx in AD_RE:
        for m in rx.findall(k):
            n = m.strip().rstrip(" -—")
            if n in ad2:
                out.append(n)
            else:
                cand = re.sub(r"\s*\(.*$", "", n)
                if cand in ad2:
                    out.append(cand)
    return list(dict.fromkeys(out))

zincir, cozulemeyen = [], []
for y in devralan:
    ks = komsular(kaynak(y))
    if not ks:
        cozulemeyen.append(y["ad"])
    for n in ks:
        z = ad2[n]
        if n == y["ad"]:
            continue
        zk = kaynak(z)
        if not zk:
            zincir.append((y["ad"], y["_kaynak"], n, z["_kaynak"], "KAYNAKSIZ"))
        elif n in devralan_ad:
            zincir.append((y["ad"], y["_kaynak"], n, z["_kaynak"], "DEVRALMIS"))

out = dict(
    toplam=len(hepsi),
    dosyalar=[dict(dosya=d, dogrulanmadi=dosya_dogr[d], **r) for d, r in sat.items()],
    s_kaynaksiz=[dict(ad=y["ad"], dosya=y["_kaynak"], s=y.get("s"),
                      isg_kaynak=any(p.get("kaynak") for p in (y.get("isg") or [])),
                      neden=(y.get("neden") or "")[:160]) for y in s_kaynaksiz],
    devralan=[dict(ad=y["ad"], dosya=y["_kaynak"], kaynak=kaynak(y)[:300],
                   komsu=komsular(kaynak(y))) for y in devralan],
    zincir=zincir, cozulemeyen=cozulemeyen,
)
json.dump(out, open(sys.argv[1], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("toplam", len(hepsi), "s_kaynaksiz", len(s_kaynaksiz), "devralan", len(devralan),
      "zincir", len(zincir), "cozulemeyen", len(cozulemeyen))
