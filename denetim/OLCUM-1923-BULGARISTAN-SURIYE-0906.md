# ÖLÇÜM — 1923: BULGARİSTAN'da **bir gerçek hata**, SURİYE'de **bir model kusuru**

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ YAZILMADI** (koşu 7b sürüyor).
> Emre: *"kontrol et bakalım Bulgaristan Türkiye Suriye haritaları gerçeği
> yansıtıyor mu, Bulgaristan mesela."*
> Kesit: `1923-10-28` (pencere sonu `10-29` HARİÇ).

---

## ① 🔴 BULGARİSTAN — **SİLİSTRE YANLIŞ**, on yıllık anakronizm

```
veri   Silistre  s: 1908-10-05 → 1923-10-29  bulgaristan-kralligi
       (44,12°K / 27,26°D — GÜNEY DOBRUCA)
```
🔴 Silistre **Güney Dobruca**dadır ve 1923'te **Romanya**dır:
```
1913-08-10  Bükreş Antlaşması — Romanya G. Dobruca'yı ALDI
1916-1918   Bulgaristan geçici olarak geri aldı (I. Dünya Savaşı)
1919-11-27  NEUILLY — Romanya'ya bırakılması TEYİT EDİLDİ
1940        Craiova ile Bulgaristan'a döndü   ← atlasın penceresi DIŞINDA
```
⇒ Kayıt **1908'den 1923'e kesintisiz Bulgar** diyor; 1913 kaybını,
1916-18 geri alışını ve 1919 teyidini **hiç taşımıyor.**
**~10 yıllık anakronizm** (1913-1923).

### 🟢 GERİ KALANI DOĞRU — ve iyi yapılmış
```
Batı Trakya DOĞRU TAŞINMIŞ:
  Gümülcine · İskeçe   bulgaristan 1913-05-30 → 1920-05-27 → yunanistan
  Dedeağaç             bulgaristan 1913-05-30 → 1920-05-14 → yunanistan
Karadeniz/Istranca ucu DOĞRU: Ahtapolu · Rezve · Malko Tırnova Bulgar
Sofya · Filibe · Varna · Rusçuk · Vidin · Plevne · Şumnu · Tırnova ·
Köstendil · Petriç · Nevrokop · Kırcaali — hepsi doğru
```

### 🟡 EKSİK NOKTALAR (atlasta HİÇ yok)
```
Burgaz (Burgas)   Bulgaristan'ın ikinci büyük Karadeniz limanı
Dobriç (Dobrich)  Güney Dobruca merkezi — Romanya sınırını ÇİVİLERDİ
Lazkiye (Latakia) Suriye kıyısının merkezi
```
⇒ Bulgaristan'ın Karadeniz kıyısı bugün yalnız Varna + Ahtapol/Rezve ile
temsil ediliyor; Burgaz körfezi **noktasız**.

---

## ② 🔴🔴 SURİYE — TOPRAK DOĞRU, **KİMLİK YANLIŞ**

```
Halep · Şam · Beyrut · Humus · Hama · Antakya · İskenderun · Deyrizor
   hepsi  s: 1918-10-xx → 1923-10-29   fransa-cumhuriyet
```
⇒ Suriye ve Lübnan, haritada **Fransa ile AYNI KİMLİK ve AYNI RENK**
(`#00297c`). Ayrı bir gövdesi yok.

🔴 **VE KÜNYE ZATEN VAR — HİÇ KULLANILMIYOR:**
```
kimlik                    pencere                    renk       veride
suriye-lubnan-mandasi   1920-07-01 → 1923-10-29    #9c24d2    0 dönem
irak-kralligi           1921-08-23 → 1923-10-29    #42d224    0 dönem
filistin-mandasi        1920-07-01 → 1923-10-29    #24d2a8    0 dönem
```
**Üçünün de künyesi VAR, penceresi TUTUYOR, RENGİ VAR — ve üçü de veride
sıfır kez kullanılmış.** `§8`in "renksiz künye = harita deliği"nin tersi:
burada renk var, **kullanan veri yok.**

### KAPSAM ÖLÇÜLDÜ (kaba coğrafî kutu)
```
Suriye+Lübnan   15 nokta `fransa-cumhuriyet`   → `suriye-lubnan-mandasi`
Filistin         6 nokta `ingiltere`           → `filistin-mandasi`
Irak            35 nokta `ingiltere`           → `irak-kralligi`
```
⇒ **56 nokta** üç ayrı gövdeye ayrılabilir, ve bunun için **yeni künye
de yeni renk de gerekmiyor.**

📌 Bu, bugün Körfez hükmünde ölçülen sınıfın en saf hâli: *"sömürge,
metropol kimliğiyle boyanıyor ⇒ gövde GÖRÜNMEZ."* Orada 20 künye
sayılmıştı; burada üçü **hazır bekliyor.**

---

## ③ 🟢 TÜRKİYE — DOĞRU, ve sınır kararları yerinde
```
Doğu Trakya (Edirne · Uzunköprü · Keşan · İpsala · Enez) TÜRK ✓ Lozan
İmroz · Bozcaada TÜRK ✓ (Lozan'ın istisnası)
Kars · Ardahan · Artvin · Iğdır · Sarıkamış · Digor TÜRK ✓ (1921 Kars)
Antep · Kilis: Osmanlı → fransa 1919/1918 → 1921-10-20 geri ✓ (Ankara İtilâfnâmesi)
Antakya · İskenderun FRANSIZ ✓ (Hatay 1939'da katıldı — pencere DIŞINDA)
Musul İNGİLİZ ✓ (1926'ya kadar ihtilâflı)
```
🟡 **Tek gözlem:** Antep ve Kilis `d:` (Osmanlı doğrudan) olarak
1923-10-29'a kadar gidiyor, `tbmm-turkiye` DEĞİL. Bu bir hata değil
**bekleyen bir yama**: `yer_yama_tbmm_1920_0905.js` uygulanmamış
(18 çakışmanın içinde, hükmü bugün verildi).

---

## ④ SIRA
```
🔴 SİLİSTRE   1913-08-10 Bükreş + 1919-11-27 Neuilly zinciri yazılacak.
              Künye hazır: `romanya-kralligi` 1881→1923, veride 49 dönem.
              ⚠️ 1916-18 Bulgar geri alışı AYRI bir karar (işgal mi,
                 egemenlik mi) — bugün Yagodina'da verilen hükme göre
                 `isg:` olmalı: geçici, geri alındı.
🔴 MANDA      56 nokta üç mandaya ayrılacak. Yeni künye/renk GEREKMEZ.
🟡 EKSİK NOKTA Burgaz · Dobriç · Lazkiye
```
🔴 Üçü de `data/` işi ⇒ **koşu bitmeden yazılamaz.**
🔴 Ve hiçbiri için henüz KAYNAK ARANMADI — bu belge bir ÖLÇÜMDÜR,
yamalar `§4` gereği kaynakla yazılacak.
