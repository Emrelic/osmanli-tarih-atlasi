"""KRONOLOJI-1104 — doğrulama dosyalarından KASA PAZAR (veri sahibi) iş kuyruğu (SALT OKUR).

Girdi: denetim/KRONOLOJI-1104/oneri_*_dogrulama.tsv (+ tarayici_sonuc.tsv notları elle SONUC-61'de).
Çıktı: denetim/KRONOLOJI-1104/KUYRUK-KASA-PAZAR.tsv — yalnız uygulanabilir satırlar:
  TARIH_DUZELT  → tarih değişikliği önerisi (kaynak + okunan cümle)
  DOGRULANDI    → kaynak alanı yenilenir (güvensiz/bulunamadı damgası kalkar)
Öteki sonuçlar (CEKILEMEDI/BULUNAMADI/…) kuyruğa girmez; sayısı özetlenir.

    py arac/kronoloji_kuyruk.py
"""
import collections, csv, glob, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim", "KRONOLOJI-1104")
CIKTI = os.path.join(D, "KUYRUK-KASA-PAZAR.tsv")
UYGULANIR = {"TARIH_DUZELT": "tarih düzelt", "DOGRULANDI": "kaynak yenile"}


def main():
    # Kural (EMRELİC 1 KASIM, 4 Kasım 2026): Britannica mevcut AKADEMİK kaynağın yerine konmaz; yalnız
    # kaynağı olmayan ya da Vikipedi/blog (damga 'guvensiz'/'bos') maddelerde EK olarak yazılır.
    # Mevcut kaynağı akademik (damga 'bulunamadi' ama dayanak akademik) + yeni kaynak yalnız Britannica → "atla".
    damga = {}
    for ad, on in (("oncelik.tsv", ""), ("liste2.tsv", "L2-")):
        with open(os.path.join(D, ad), encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                damga[on + r["no"]] = (r.get("damga", ""), r.get("simdiki_kaynak", ""))
    satir, sayim, atla = [], collections.Counter(), 0
    for yol in sorted(glob.glob(os.path.join(D, "oneri_*_dogrulama.tsv"))):
        parti = os.path.basename(yol).replace("oneri_", "").replace("_dogrulama.tsv", "")
        with open(yol, encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                s = (r.get("sonuc") or "").strip()
                sayim[s] += 1
                if s not in UYGULANIR:
                    continue
                is_ = UYGULANIR[s]
                no = r.get("no", "")
                dm, simdiki = damga.get(no.replace("-ek", ""), ("", ""))
                kaynak = r.get("kaynak", "")
                yalniz_britannica = "britannica" in kaynak.lower() and not any(
                    x in kaynak.lower() for x in ("treccani", "iranica", "tdv", "enciklopedija", "cambridge",
                                                   "oxford", "aitchison", "encyclopedia of", "canadian", "dbi"))
                if is_ == "kaynak yenile" and yalniz_britannica and dm == "bulunamadi" and "dayanak" in simdiki.lower():
                    is_ = "atla (mevcut kaynak akademik; Britannica yerine konmaz)"
                    atla += 1
                uyum = r.get("uyum", "")
                if no == "L2-47":
                    is_, uyum = "tarih düzelt", "1600-12-31 Jülyen (İngiltere) → 1601-01-10 Gregoryen (takvim kuralı; KASA PAZAR uyguladı)"
                satir.append([parti, no, is_, r.get("dosya_satir", ""), r.get("tarih_atlas", ""), uyum,
                              r.get("hassasiyet", ""), kaynak, r.get("url", ""), r.get("okunan_cumle", "")])
    print("atla:", atla)
    with open(CIKTI, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["parti", "no", "is", "dosya_satir", "tarih_atlas", "uyum", "hassasiyet", "kaynak", "url",
                    "okunan_cumle"])
        w.writerows(satir)
    print("kuyruk: %d satır (%s) → %s" % (len(satir), dict(collections.Counter(s[2] for s in satir)),
                                         os.path.relpath(CIKTI, KOK)))
    print("tüm sonuçlar:", dict(sayim))


if __name__ == "__main__":
    main()
