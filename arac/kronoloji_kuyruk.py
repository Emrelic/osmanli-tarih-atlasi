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
    "L2-318": "Santo Domingo: kural teslim (kapitülasyon) günü; 07-07 teslim mi fiilî devir mi belirsiz → Diario de la Reconquista okununca karar; 07-09 fiilî devir ise ic_not",
    # 351-375: DOGRULANDI ama dayanak tek ve ansiklopedi dışı web (kişisel kronoloji, belediye, dernek)
    "L2-357": "tek, ansiklopedi dışı (pdavis.nl/Clowes); 3 Kasım yalnız getirme özetinde",
    "L2-359": "tek, SA Military History Journal (dernek dergisi); «Cape Kolonisi'ne bağlı» doğrulanmadı",
    "L2-360": "tek, SA Military History Journal; Volksraad'ın şartları kabulü kaynakta yok",
    "L2-365": "tek, Wiesbaden belediye sitesi",
    "L2-370": "tek, K. Dierks kişisel Namibya kronolojisi",
    "L2-371": "tek, K. Dierks kişisel Namibya kronolojisi",
    "L2-397": "Elsass-Lothringen: yasa 1871-06-09 (RGBl 1871 Nr.25, 14 Haziran yayım; LeMO); 28 Haziran metinde yok — yürürlük günü olabilir, bulunmadı → aday",
    "L2-158": "Kolomna 1385-03-25: Lavrentyev monografisi yalnız AYNA sitede (history.wikireading.ru) okundu; PSRL dipnotları sayfada yok → yayıncı/PSRL teyidi tarayıcı kuyruğunda",
    "L2-380": "Jonker Afrikaner'in ölümü: aday 1861-08-16 — Pool, PhD Stellenbosch 1995 yalnız ÖZET okundu; 18 Ağustos yalnız kişisel site + Vikipedi; tam metin (403) tarayıcı kuyruğunda; L2-381 ile birlikte değişir",
    "L2-381": "Jonker Afrikaner'in ölümü: L2-380 ile aynı karar",
    "L2-372": "İngiliz Burma: aday 1853-01-20 (NAM, ilan); 1852-12-20 yalnız özette → Aitchison'da İLHAK BİLDİRİSİ tarihi ile Rangoon İLAN günü ayrı bulunacak; tek kurala göre s: değişimi bildiri tarihi",
    "L2-341":"Man Adası 1828: dayanak yalnız EB1911 (eski başvuru, en çok KISMEN) → tek başına düzeltme dayanağı değil; akademik kaynak aranacak",
    "L2-144":"Chūzan seikan (17. yy resmî derleme) tek başına KISMEN; modern akademik teyit (CHJ / Kerr, Okinawa) gelene kadar atlas günü kalır",
}
# Koordinatör kararıyla iş türü değişenler (EMRELİC 1 KASIM, 4 Kasım 2026).
DEGISTIR = {
    "L2-212": ("ic_not ekle (gün KALIR)", "Vincenzo II: atlas 1627-12-25 kalır; ic_not «25–26 Aralık gecesi (Treccani EI + DBI)»; DBI'dan saat okunursa karar"),
    "L2-311": ("ic_not ekle (gün KALIR)", "Ligurya: s: değişimi Haziran 1805 ilhak tasarrufu (Cenova senatosu talebi + Napolyon kabulü; Treccani «4 giugno 1805»); 4 Ekim 1805 département düzenlemesi ic_not'a — Treccani'nin iki maddesi iki ayrı olayı tarihliyor"),
    "L2-346": ("kaynak yenile + ic_not (gün KALIR)", "Gimry: AY teyitli — Arreguín-Toft, How the Weak Win Wars (CUP 2005) böl.3 «killed in battle at Gimri in October of 1832»; atlas 1832-10-29 KALIR (gün teyitsiz); TDV'nin iki Kasım günü (Müridizm 29, Şeyh Şâmil 20 Kasım) bu kaynakla çürüyor → ic_not"),
    "L2-345": ("kaynak yenile (tarih KALIR)", "Yirmi Dört Madde 1831-10-14: «[anı kaynağı]» Stockmar Memoirs (1872); 15 Kasım 1831 antlaşma ic_not'a"),
    "L2-326": ("tarih düzelt", "Kassel 1813-09-28 → 10-01 (madde «alınış»); ic_not «[tek kaynak] 28 Eylül ilk baskın»"),
    "L2-352": ("kaynak yenile (tarih KALIR)", "Mauritius 1835 (devletler.js:14867, t=1835-01-01 YIL düzeyi) → tarih kalır; kaynak Nwulia, ASR 21/1 (1978) «1 February 1835» eklenir (gün ic_not'a, tek kaynak)"),
    "L2-364": ("tarih düzelt", "Tahıl Yasaları: madde «kaldırıldı» (yasalaşma) → 1846-06-26 kraliyet onayı (Hansard Lordlar 26.6.1846 «Received the Royal Assent»); 25 Haziran Lordlar oylaması ic_not'a"),
    "L2-227": ("tarih düzelt", "1652-02-04 Jülyen → 1652-02-14 Gregoryen (İngiltere 1752'ye dek Jülyen; mekanik çeviri); ic_not'a iki gün"),
}
# Kaynakta olayın kendisi bulunamayan maddeler: metin düzeltilmez, işaretlenir.
ISARETLE = [
    ("L2-209", "Malaka 1616 Hollanda saldırısı", "Paramita 32(2) 2022'de yok (1606 Hollanda-Johor; Açe 1615/1629)"),
    ("L2-243", "Hainaut 1679", "Nijmegen İspanya imzası 1678-09-17 ise madde 1678'e taşınabilir (Pireneler ile birlikte bakılıyor)"),
    ("L2-240", "Orange 1672", "Treccani EI yalnız Mart 1660 işgalini veriyor"),
]
# Metin düzeltmeleri (tarih kalır; koordinatör kararı, EMRELİC 1 KASIM, 4 Kasım 2026).
METIN = [
    ("L2-398", "Aşanti Pra geçişi: atlas «Aralık 1872», EB1911 «22 January 1873» (tek kaynak) → yıl 1873 tutuyor, metindeki ay düzeltilir ya da beyan"),
    ("L2-400", "at sayısı «~1.100» → Handbook of Texas «more than 1,400 captured»"),
    ("L2-386", "«~400 kişi» 22 Mayıs Captain George'un gelişine değil 4 Haziran teslimine ait (Chalfant 1933)"),
    ("L2-385", "6 Ekim antlaşmasını Indian agent Wentworth yaptı; Wasson yalnız Paiute'leri topladı (Chalfant 1933)"),
    ("L2-158", "Kolomna: Sergius'un aracılığıyla iade KANITLANMAMIŞ varsayım (Tula ile takas) — Lavrentyev; ifade yumuşatılır"),
    ("L2-366", "Venedik 1848-08-07: gün doğru (The Spectator 19.8.1848); yetkiyi Manin değil Castelli başkanlığındaki geçici hükümet devretti (Treccani DBI) → özne düzeltilir"),
    ("L2-369", "Venedik teslimi 1849-08-22: belgeyi Avusturya generali Gorzkowski imzaladı, Manin teslim kararını verdi (Treccani) → ifade kaynağa uydurulur"),
    ("L2-368", "Roma Cumhuriyeti: madde iki olayı 30 Haziran'a koyuyor → İKİ AYRI MADDE ya da başlık ayrımı (koordinatör): 1 Temmuz 1849 ateşkes, 2 Temmuz Garibaldi'nin ayrılışı (Britannica); 30 Haziran çöküşü yalnız popüler site"),
    ("L2-374", "Ankober'in yakılması kaynakta yok (gün/yıl doğrulandı) → «[olay kaynakta yok]» ifadesi"),
    ("L2-333", "Mandsaur 1818-01-06: gün doğru (birincil metin); antlaşma «Narmada güneyi» değil «Satpura güneyi» diyor → ifade düzeltilir"),
    ("L2-253", "Sardunya 1713: Utrecht'te Avusturya'ya VERİLMEDİ (Bavyera seçmenine vaat, Rastatt'ta uygulanmadı); Sicilya'nın Savoya'ya devri Ağustos 1713 — dayanak Bianchi 2025 (Larousse genel ansiklopedi, ek)"),
    ("L2-272", "Paris 1763: yalnız Mississippi'nin DOĞUSU İngiltere'ye; batı yakasının İspanya'ya devri bu antlaşmada değil, Fontainebleau 1762-11-03 (ayrı madde VAR: devletler.js:18770 louisiana; o maddenin kaynağı yalnız Vikipedi) — Yale Avalon metni"),
    ("L2-280", "Poynings Yasası «kaldırıldı» → «değiştirildi» (Yelverton Yasası 1782; Cambridge bölümü)"),
    ("L2-301", "[TEK KURAL ÖLÇÜMÜ — yerleşim] Malta (yerleşim data/yerlesimler.js:1197 «Malta»): s: ingiltere f=1800-09-05 → 1800-09-05…1814-05-30 isg: ingiltere, s: ingiltere 1814-05-30'dan (Paris Antlaşması, hukukî devir); Amiens'in iadesi uygulanmadı → ic_not. Kronoloji maddesi ayrıca 1800-09-08 → 09-05 (tarih düzelt satırı)"),
    ("L2-285","Liège 1789-08-18: başlangıç günü KALIR; başlık kaynağa uydurulur — prens-piskoposun kaçışı/devrilişi o gün değil (ULiège)"),
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
    for no, ne in METIN:
        ds, t = yer.get(no, ("", ""))
        is_ = "tek kural ölçümü (yerleşim s:/isg)" if ne.startswith("[TEK KURAL") else "metin düzelt (tarih kalır)"
        satir.append(["koordinator", no, is_, ds, t, ne, "", "", "", ""])
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
