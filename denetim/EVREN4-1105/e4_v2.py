"""EVREN4 LAB kovası v2 — güncel veriden yeniden ölçüm (EMRELİC gece-47 onayı).
EVREN: eski LAB kovasının (a8bf0ed14 evren4_LAB.tsv) yerleşimleri; çıkarılanlar:
  · parti 001-009'da işlenmiş yerleşimler (bütün dönemleriyle),
  · küme izinde işlenmiş (yerleşim, alan, devlet, f) dönemleri.
Her kalan yerleşimin GÜNCEL s/d/v/isg dönemlerinden ZAYIF kaynaklı olanlar alınır.
ZAYIF sınıfı (eski kova ile aynı adlar; kural kaynak metninden — EMRELİC'in üretici betiği depoda yok, yeniden kuruldu):
  BOS          kaynak boş
  ZAYIF_VIKI   vikipedi/wikipedia/wikiwand geçiyor
  ZAYIF_ATLAS  DEVRALMA ile başlıyor
  DIGER        güçlü işaretçi (TDV, akademik ansiklopedi, URL'li akademik kaynak…) yok
Sınama: eski donem_kaynak_sinif.tsv'nin (hepsi zayıf) kaynak metinlerinde bu sınıflayıcının 'güçlü' dediği oran raporlanır.
Kullanım (ölçüm worktree kökünden): py e4_v2.py <eski_kova.tsv> <eski_sinif.tsv> <scratch> <cikti.tsv>"""
import sys, os, re, csv, json, glob, collections
sys.path.insert(0, "arac")
import girdi

eski_kova, eski_sinif, S, cikti = sys.argv[1:5]
GUCLU = re.compile(r"\bTDV\b|islamansiklopedisi|treccani|iranica|imperial gazetteer|encykorea|snl\.no|store norske|hls-dhs|deutsche-biographie|\bNDB\b|"
                   r"\bÖBL\b|biographien\.ac\.at|history\.state\.gov|\bFRUS\b|unesco|countrystudies|loc\.gov|dergipark|belleten|isam|\bTTK\b|"
                   r"清史稿|明史|qing shi gao|ming ?shi|cambridge|oxford|brill|larousse|rah\.es|legislation\.gov|laws-lois|justice\.gc|archive\.org|"
                   r"jstor|doi\.org|universit|üniversite|hakemli|journal|dergisi|encyclopedia of ukraine|encyclopediaofukraine|bundesarchiv|"
                   r"banglapedia|stortinget|senate\.gov\.au|naa\.gov|gob\.mx|prlib", re.I)
VIKI = re.compile(r"vikipedi|wikipedia|wikiwand", re.I)
# eski kovanın zayıf saydığı ama güçlü işaretçi taşıyan biçimler (sınamadan çıkarıldı)
ZAYIF_ATLAS_ISARET = re.compile(r"NOT-DUZELT|elle doğrulama bekler|BOŞLUK BEYANI", re.I)
ZAYIF_DIGER_ISARET = re.compile(r"araştırma ajanı|^künye |^https?://history\.state\.gov/countries/|EB1911|ESBE", re.I)


def sinif(k):
    k = (k or "").strip()
    if not k:
        return "BOS"
    if VIKI.search(k) and not GUCLU.search(k):
        return "ZAYIF_VIKI"
    if k.startswith("DEVRALMA") or ZAYIF_ATLAS_ISARET.search(k):
        return "ZAYIF_ATLAS"
    if ZAYIF_DIGER_ISARET.search(k):
        return "DIGER"
    if GUCLU.search(k):
        return None
    return "DIGER"


# sınama: eski zayıf listede 'güçlü' çıkan oran
E = list(csv.DictReader(open(eski_sinif, encoding="utf-8"), delimiter="\t"))
yanlis = sum(1 for r in E if sinif(r["kaynak"]) is None)
uyum = sum(1 for r in E if sinif(r["kaynak"]) == r["sinif"])
print("SINAMA eski zayıf %d satır: güçlü sanılan %d (%.1f%%), sınıf birebir %d (%.1f%%)" % (
    len(E), yanlis, 100 * yanlis / len(E), uyum, 100 * uyum / len(E)), file=sys.stderr)

K = list(csv.DictReader(open(eski_kova, encoding="utf-8"), delimiter="\t"))
lab_yer = list(dict.fromkeys(r["ad"] for r in K))
islenmis_yer = set()
for p in glob.glob(os.path.join(S, "p00*_1.json")):
    islenmis_yer |= {o["ad"] for o in json.load(open(p, encoding="utf-8"))}
islenmis_yer |= {o["ad"] for o in json.load(open(os.path.join(S, "p001_2.json"), encoding="utf-8"))}
kume = json.load(open(os.path.join(S, "..", "..", "..", "..", "..", "..", "..", "..", "atlas", ".claude", "worktrees", "evren4", "denetim", "EVREN4-1105", "e4_LAB_KUME.json"), encoding="utf-8")) \
    if False else json.load(open(r"C:\atlas\.claude\worktrees\evren4\denetim\EVREN4-1105\e4_LAB_KUME.json", encoding="utf-8"))
islenmis_donem = {(ad, x["alan"], x["d"], x["f"]) for ad, L in kume.items() for x in L}

Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
cik, say = [], collections.Counter()
for ad in lab_yer:
    if ad in islenmis_yer:
        say["yer_islenmis"] += 1
        continue
    y = Y.get(ad)
    if not y:
        say["yer_yok"] += 1
        continue
    for kat in ("s", "d", "v", "isg"):
        for p in y.get(kat) or []:
            d = p.get("d", "OSMANLI" if kat == "d" else (p.get("kid") or ""))
            sn = sinif(p.get("kaynak"))
            if sn is None:
                say["guclu"] += 1
                continue
            if (ad, kat, d, p["f"]) in islenmis_donem or (ad, kat, "", p["f"]) in islenmis_donem:
                say["kume_islenmis"] += 1
                continue
            cik.append(dict(sinif=sn, dosya=y["_kaynak"], ad=ad, kat=kat, sahip=d, f=p["f"], t=p["t"], kaynak=(p.get("kaynak") or "")[:300]))
            say[sn] += 1


def oncelik(ad):
    L = [r for r in cik if r["ad"] == ad]
    viki = any(r["sinif"] == "ZAYIF_VIKI" for r in L)
    cek = sum(1 for r in L if "1281" <= r["f"][:4] <= "1923" and not r["f"].startswith("-"))
    return (not viki, -cek, ad)


sira_yer = sorted({r["ad"] for r in cik}, key=oncelik)
yer_sira = {a: i for i, a in enumerate(sira_yer)}
cik.sort(key=lambda r: (yer_sira[r["ad"]], r["f"]))
w = csv.writer(open(cikti, "w", encoding="utf-8", newline=""), delimiter="\t", lineterminator="\n")
w.writerow(["sira", "sinif", "dosya", "ad", "kat", "sahip", "f", "t", "kaynak"])
for i, r in enumerate(cik, 1):
    w.writerow([i, r["sinif"], r["dosya"], r["ad"], r["kat"], r["sahip"], r["f"], r["t"], r["kaynak"]])
print(dict(say), "| v2 dönem", len(cik), "yerleşim", len(sira_yer), file=sys.stderr)
