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
# Koordinatör kararıyla bekletilenler (EMRELİC 1 KASIM, 4 Kasım 2026).
BEKLET = {
    "L2-144": "Chūzan seikan (17. yy resmî derleme) tek başına KISMEN; modern akademik teyit (CHJ / Kerr, Okinawa) gelene kadar atlas günü kalır",
}
# Koordinatör kararıyla iş türü değişenler (EMRELİC 1 KASIM, 4 Kasım 2026).
DEGISTIR = {
    "L2-212": ("ic_not ekle (gün KALIR)", "Vincenzo II: atlas 1627-12-25 kalır; ic_not «25–26 Aralık gecesi (Treccani EI + DBI)»; DBI'dan saat okunursa karar"),
    "L2-227": ("tarih düzelt", "1652-02-04 Jülyen → 1652-02-14 Gregoryen (İngiltere 1752'ye dek Jülyen; mekanik çeviri); ic_not'a iki gün"),
}
# Kaynakta olayın kendisi bulunamayan maddeler: metin düzeltilmez, işaretlenir.
ISARETLE = [
    ("L2-209", "Malaka 1616 Hollanda saldırısı", "Paramita 32(2) 2022'de yok (1606 Hollanda-Johor; Açe 1615/1629)"),
    ("L2-243", "Hainaut 1679", "Nijmegen İspanya imzası 1678-09-17 ise madde 1678'e taşınabilir (Pireneler ile birlikte bakılıyor)"),
    ("L2-240", "Orange 1672", "Treccani EI yalnız Mart 1660 işgalini veriyor"),
]
# Sonraki okumayla yerine yenisi gelen satırlar (aynı madde, eski öneri).
GECERSIZ = {
    ("L2_101-150", "L2-138"): "TARAYICI5 satırı geçerli (1919-04-11 oylama, Cambridge EAMIO böl.6)",
    ("001-050", "44"): "Sardinya: 051-061 44-ek satırı geçerli (1720-09-02 Treccani, koordinatör kararı)",
}
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
                if no in DEGISTIR:
                    is_, uyum = DEGISTIR[no]
                elif (parti, no) in GECERSIZ:
                    is_, uyum = "GEÇERSİZ (yerine geçen satır var)", GECERSIZ[(parti, no)] + " | " + uyum
                elif no in BEKLET:
                    is_, uyum = "BEKLE (uygulama)", BEKLET[no] + " | " + uyum
                if no == "L2-47":
                    is_, uyum = "tarih düzelt", "1600-12-31 Jülyen (İngiltere) → 1601-01-10 Gregoryen (takvim kuralı; KASA PAZAR uyguladı)"
                satir.append([parti, no, is_, r.get("dosya_satir", ""), r.get("tarih_atlas", ""), uyum,
                              r.get("hassasiyet", ""), kaynak, r.get("url", ""), r.get("okunan_cumle", "")])
    yer = {}
    for yol in glob.glob(os.path.join(D, "oneri_*_dogrulama.tsv")):
        with open(yol, encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                yer.setdefault(r.get("no", ""), (r.get("dosya_satir", ""), r.get("tarih_atlas", "")))
    for no, ad, neden in ISARETLE:
        ds, t = yer.get(no, ("", ""))
        satir.append(["koordinator", no, "işaretle «[olay kaynakta yok]» (metin düzeltilmez)", ds, t, ad + " — " + neden,
                      "", "", "", ""])
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
