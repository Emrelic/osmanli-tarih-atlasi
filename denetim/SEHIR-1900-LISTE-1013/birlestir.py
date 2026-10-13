"""1900 kategori 1-3 şehir listesi — altı bölge TSV'sini birleştirir, atlasla AD eşleştirmesi yapar.

Kullanım: py denetim/SEHIR-1900-LISTE-1013/birlestir.py <bolge_tsv_klasoru>
Çıktı: bu klasörde LISTE.tsv; özet stdout'a.
Koordinat YOK — eşleştirme yalnız ada dayanır, `atlas_aday` sütunu ADAYDIR, kesin değil.
"""
import csv, os, re, sys, unicodedata, collections

BURASI = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.normpath(os.path.join(BURASI, "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
BOLGELER = ["osmanli", "rusya", "avrupa", "asya", "amerika", "afrika"]
SUTUN = ["kat", "ad_1900", "ad_modern", "ulke_1900", "birim_turu", "birim_adi",
         "ust_birim", "modern_ulke", "kaynak", "dogrulama", "not"]


def norm(s):
    # Türkçe büyük İ/I lower() tuzağına düşmeden (CLAUDE.md): önce elle eşle, sonra aksan sil
    s = s.replace("İ", "i").replace("I", "i").replace("ı", "i")
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return re.sub(r"[^a-z0-9]", "", s)


def adlar(s):
    """'Girne (Kyrenia)' / 'Ekaterinoslav / Dnipro' → ayrı ad adayları."""
    out = set()
    for p in re.split(r"[()/;,]", s or ""):
        n = norm(p)
        if len(n) >= 3 and n != "bulunamadi":
            out.add(n)
    return out


def oku(klasor):
    satirlar = []
    for b in BOLGELER:
        with open(os.path.join(klasor, f"liste_{b}.tsv"), encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                r = {k: (r.get(k) or "").strip() for k in SUTUN}
                r["bolge"] = b
                satirlar.append(r)
    return satirlar


def main():
    klasor = sys.argv[1]
    S = oku(klasor)
    ham = len(S)
    elenen = collections.Counter()

    # Emre kurallarından çıkan oturum kararları (13 Ekim 2026)
    tut = []
    for r in S:
        u = r["ulke_1900"].lower()
        if r["kat"] != "1" and ("andorra" in u or "san marino" in u):
            elenen["mikro devlet parish/castello"] += 1
            continue
        if norm(r["ad_modern"]) == "doha":
            elenen["Doha (Osmanlı kazası)"] += 1
            continue
        if "guam" in norm(r["ad_modern"] + r["birim_adi"]) and r["bolge"] == "amerika":
            r["bolge"] = "asya"
        tut.append(r)
    S = tut

    # tekilleştir: aynı modern ad + modern ülke → en yüksek kategori kalır
    anahtar = {}
    for r in S:
        k = (norm(r["ad_modern"] or r["ad_1900"]), norm(r["modern_ulke"]))
        if k[0] in ("", "bulunamadi"):
            k = (id(r), "")
        if k in anahtar:
            o = anahtar[k]
            elenen["mükerrer (bölgeler arası)"] += 1
            if r["kat"] < o["kat"]:
                r["not"] = (r["not"] + f" · ayrıca {o['bolge']} listesinde kat {o['kat']}").strip(" ·")
                anahtar[k] = r
            else:
                o["not"] = (o["not"] + f" · ayrıca {r['bolge']} listesinde kat {r['kat']}").strip(" ·")
            continue
        anahtar[k] = r
    S = list(anahtar.values())

    # atlasla AD eşleştirmesi
    import girdi
    cwd = os.getcwd()
    os.chdir(KOK)
    Y = girdi.yukle(sessiz=True)
    os.chdir(cwd)
    dizin = collections.defaultdict(list)
    for y in Y:
        for n in adlar(y["ad"]):
            dizin[n].append(y["ad"])
    for r in S:
        bul = set()
        for n in adlar(r["ad_modern"]) | adlar(r["ad_1900"]):
            bul.update(dizin.get(n, []))
        r["atlas_aday"] = " | ".join(sorted(bul))

    S.sort(key=lambda r: (r["bolge"], r["kat"], r["modern_ulke"], r["ad_modern"]))
    with open(os.path.join(BURASI, "LISTE.tsv"), "w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["bolge"] + SUTUN + ["atlas_aday"], delimiter="\t")
        w.writeheader()
        w.writerows(S)

    print(f"ham satır {ham} · elenen {sum(elenen.values())} {dict(elenen)} · LISTE {len(S)}")
    print("kat:", dict(sorted(collections.Counter(r["kat"] for r in S).items())))
    print("dogrulama:", dict(collections.Counter(r["dogrulama"] for r in S)))
    print("ad_1900 bulunamadı:", sum(1 for r in S if "bulunamad" in r["ad_1900"].lower()))
    es = [r for r in S if r["atlas_aday"]]
    cok = [r for r in es if "|" in r["atlas_aday"]]
    print(f"atlasta AD adayı olan: {len(es)} (birden çok aday: {len(cok)}) · adayı olmayan: {len(S) - len(es)}")
    tab = collections.defaultdict(lambda: [0, 0])
    for r in S:
        tab[(r["bolge"], r["kat"])][0] += 1
        tab[(r["bolge"], r["kat"])][1] += bool(r["atlas_aday"])
    print("bolge kat toplam atlasta_aday")
    for k in sorted(tab):
        print(*k, *tab[k])


if __name__ == "__main__":
    main()
