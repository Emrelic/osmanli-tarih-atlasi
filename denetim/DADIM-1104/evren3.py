"""Evren 3 (EMRELİC (b), 4 Kasım 2026 gece): kaynağı boş/DEVRALMA dönemi en çok olan yerleşimler, evren 1-2 ve dadim_sonuc dışı.
Filtreler: yalnız 600-1923 arası başlayan hedef dönemler sayılır; harita ağırlığı = kronoloji anılması (evren2 sayımı) + komşu sıklığı
(25 km içinde başka yerleşim sayısı; tek başına duran küçük noktalar sona). Puan = hedef × (1 + log(1+anılma)) × (1 + 0.1·min(komşu,10)).
Elenen: bölge/kıyı/vadi noktaları, kara listedeki cins kelimeler. Çıktı: evren3.json + db_e3_NN.json (13'lük, db_p biçimi)."""
import json, os, re, sys, math, glob, collections, subprocess
sys.stdout.reconfigure(encoding="utf-8")
B = os.path.dirname(os.path.abspath(__file__))
Y = json.load(open(os.path.join(B, "yerlesim_tam.json"), encoding="utf-8"))
T = json.load(open("denetim/DADIM-1104/dadim_sonuc.json", encoding="utf-8"))
GORULDU = set(T) | {e["ad"] for e in json.load(open(os.path.join(B, "evren1.json"), encoding="utf-8"))} | \
          {e["ad"] for e in json.load(open(os.path.join(B, "evren2.json"), encoding="utf-8"))}
# anılma sayımı (evren2 yöntemi)
SAY = collections.Counter()
KEL = re.compile(r"[^\W\d_]+(?:-[^\W\d_]+)*", re.U)
KAYNAK = re.compile(r'kaynak\s*:\s*"(?:[^"\\]|\\.)*"')
EK = re.compile(r"['’][^\W\d_]*")
for f in sorted(glob.glob("data/olaylar*.js") + glob.glob("data/kronoloji_sinir*.js")):
    for satir in open(f, encoding="utf-8"):
        if satir.lstrip().startswith("//"):
            continue
        w = KEL.findall(EK.sub("", KAYNAK.sub("", satir)))
        for i in range(len(w)):
            SAY[w[i]] += 1
            if i + 1 < len(w):
                SAY[w[i] + " " + w[i + 1]] += 1


def ana(ad):
    return re.sub(r"\s*\(.*$", "", ad).strip()


def yil(x):
    s = str(x)
    try:
        return int(s[:5]) if s.startswith("-") else int(s[:4])
    except ValueError:
        return None


# komşu yoğunluğu (0.25° ızgara)
IZ = collections.Counter((round(y["lat"] * 4), round(y["lon"] * 4)) for y in Y)


def komsu(y):
    a, b = round(y["lat"] * 4), round(y["lon"] * 4)
    return sum(IZ[(a + i, b + j)] for i in (-1, 0, 1) for j in (-1, 0, 1)) - 1


aday = []
for y in Y:
    if y["ad"] in GORULDU or "bölge" in y["ad"] or "kıyısı" in y["ad"] or "vadisi" in y["ad"]:
        continue
    hedef = [p for al in ("s", "d", "v") for p in (y.get(al) or [])
             if (not p.get("kaynak") or str(p.get("kaynak")).startswith("DEVRALMA")) and (yil(p.get("f")) or -9999) >= 600
             and (yil(p.get("f")) or 9999) <= 1923]
    if not hedef:
        continue
    an = SAY.get(ana(y["ad"]), 0)
    k = komsu(y)
    puan = len(hedef) * (1 + math.log1p(an)) * (1 + 0.1 * min(k, 10))
    aday.append((puan, y["ad"], len(hedef), an, k))
aday.sort(reverse=True)
sec = aday[:500]
json.dump([{"ad": a, "neden": ["hedef:%d" % h, "anılma:%d" % an, "komşu:%d" % k, "puan:%.1f" % p]} for p, a, h, an, k in sec],
          open(os.path.join(B, "evren3.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("aday", len(aday), "seçilen", len(sec), "eşik", sec[-1][:3], "hedef dönem toplam", sum(x[2] for x in sec))
print([(a, h, an, k) for _, a, h, an, k in sec[:25]])
