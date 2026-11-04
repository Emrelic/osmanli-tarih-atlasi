"""Evren 2: kronoloji çekirdeğinde (olaylar*.js + kronoloji_sinir*.js) EN ÇOK ANILAN 500 yerleşim (evren 1 hariç).
Sayım: kaynak: alanları ve yorum satırları atılır; metin kelimelere bölünür (kesme işaretinden sonrası ek sayılır);
1-3 kelimelik n-gram sayılır; yerleşimin ANA adı (parantez öncesi) n-gram olarak aranır.
Elenen: bölge/kıyı/vadi noktaları · _yt_ dosyalarında devlet adıyla aynı adı taşıyan yer tutucular ·
ana adı başka yerleşimle ortak olan parantezli adaş (Roma (Queensland) gibi).
Çıktı: evren2.json + db_q01..qNN.json (13'lük parti, db_p biçimi)."""
import json, os, re, sys, glob, collections, subprocess
sys.stdout.reconfigure(encoding="utf-8")
B = os.path.dirname(os.path.abspath(__file__))
Y = json.load(open(os.path.join(B, "yerlesim_tam.json"), encoding="utf-8"))
E1 = {e["ad"] for e in json.load(open(os.path.join(B, "evren1.json"), encoding="utf-8"))}
dosyalar = sorted(glob.glob("data/olaylar*.js") + glob.glob("data/kronoloji_sinir*.js"))
SAY = collections.Counter()
KEL = re.compile(r"[^\W\d_]+(?:-[^\W\d_]+)*", re.U)
KAYNAK = re.compile(r'kaynak\s*:\s*"(?:[^"\\]|\\.)*"')
EK = re.compile(r"['’][^\W\d_]*")
for f in dosyalar:
    for satir in open(f, encoding="utf-8"):
        if satir.lstrip().startswith("//"):
            continue
        satir = EK.sub("", KAYNAK.sub("", satir))
        w = KEL.findall(satir)
        for i in range(len(w)):
            SAY[w[i]] += 1
            if i + 1 < len(w):
                SAY[w[i] + " " + w[i + 1]] += 1
            if i + 2 < len(w):
                SAY[w[i] + " " + w[i + 1] + " " + w[i + 2]] += 1

DEVLET = " ".join(re.findall(r'ad:"([^"]*)"', open("data/devletler.js", encoding="utf-8").read()))


def ana(ad):
    return re.sub(r"\s*\(.*$", "", ad).strip()


TAM = collections.Counter(ana(y["ad"]) for y in Y)
E1_ANA = {ana(e) for e in E1}


CINS = {"Cambridge", "Oxford", "Bulgar", "Ordu", "Kara", "Roman", "Kızıl", "Mari", "Leiden", "Princeton", "Brill", "Harvard",
        "Yale", "Chicago", "Berkeley", "Göktürk", "Türk", "Arap", "Tatar", "Kuzey", "Güney", "Doğu", "Batı", "Büyük", "Yeni", "Eski",
        "Orta", "Yukarı", "Aşağı", "Ak", "Han", "Bey", "Sultan", "Kral", "Paşa", "Hatun", "Emir", "Şah", "Kale", "Hisar", "Saray",
        "Şeyh", "Konstantin", "İsmail", "David", "Pazar", "Liman", "Ada", "Dağ", "Nehir", "Çay", "Göl", "Deniz", "Su", "Kum", "Taş", "Altın", "Gümüş", "Demir", "Bakır"}


def ele(y):
    a = ana(y["ad"])
    if a in CINS:
        return True
    if "bölge" in y["ad"] or "kıyısı" in a or "vadisi" in a or len(a) < 4:
        return True
    if "_yt_" in y["_kaynak"] and re.search(r"(?<!\w)%s(?!\w)" % re.escape(a), DEVLET):
        return True
    if "(" in y["ad"] and (a in E1_ANA or TAM[a] > 1):
        return True
    return False


puan = []
for y in Y:
    if y["ad"] in E1 or ele(y):
        continue
    n = SAY.get(ana(y["ad"]), 0)
    if n:
        puan.append((n, y["ad"]))
puan.sort(reverse=True)
sec = puan[:500]
json.dump([{"ad": a, "neden": ["anılma:%d" % n]} for n, a in sec], open(os.path.join(B, "evren2.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
print("dosya", len(dosyalar), "aday", len(puan), "seçilen", len(sec), "eşik", sec[-1])
print(", ".join("%s %d" % (a, n) for n, a in sec[:200]))
