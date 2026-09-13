# BULGU — KITA 30, C KATMANI: 10 kayıt sınaması

> KITA 30 · 13 Eylül 2026 · şartname `oturumlar/KITA-30-C-KATMANI.md` §①.
> `denetim/TASLAK-hukuki_sinirlar.js`in 10 kaydı üç testten geçirildi:
> **taraf id devletler.js'te var mı · tarih penceresi tarafların f:/t:
> aralığına oturuyor mu · koordinatlar render için yeterli mi.**
> Geçenler `data/hukuki_sinirlar.js`e alındı. Hiçbiri sessizce atılmadı.

## ÖZET

```
GEÇTİ   5 / 10   midye-enez-1913 · misir-sudan-22-paralel-1899 ·
                 ii-erzurum-sattularap-1847 · karlofca-lehistan-1699 (kısmi) ·
                 karlofca-venedik-1699 (kısmi)
GEÇMEDİ 5 / 10   karlofca-bosna-sava-1699 · karlofca-banat-maros-tisza-tuna-1699 ·
                 karlofca-bosna-kaleler-1699 · karlofca-bosna-una-1699 (karma) ·
                 bahcesaray-ozu-1681
```

## 🆕 İKİNCİ TUR GÜNCELLEMESİ (aynı gün, ③ görevi — koordinat araştırması)

Yukarıdaki ÖZET birinci turun sonucudur. İkinci turda `data/yerlesimler_
ek29.js`te başka bir oturumun ZATEN yaptığı araştırma bulundu (Kostayniça
· Bosna Novi'si · Bosna Dubiçası · Jasenovaç · Bosna Brod'u, gerçek
koordinatlarla) + Bosut ağzının koordinatı Wikipedia'dan doğrulandı. Sonuç:

```
GEÇTİ (güncel)   7 / 10   + karlofca-bosna-sava-1699 (TAM) ·
                          + karlofca-bosna-kaleler-1699 (DÜZELTİLEREK: Bihaç
                            ve Krupa çıkarıldı — birincil metinde YOKLAR)
GEÇMEDİ (güncel) 3 / 10   karlofca-banat-maros-tisza-tuna-1699 (farklı
                          coğrafya, araştırılmadı) · karlofca-bosna-una-1699
                          (karma — noktalar artık çözülebilir ama Una nehri
                          geometrisi hâlâ hiçbir kaynakta yok, ayrıca
                          hat.tur:"karma" hiçbir render kodunda desteklenmiyor)
                          · bahcesaray-ozu-1681 (Özü nehri araştırılmadı)
```

## 🆕 ÜÇÜNCÜ TUR — banat-maros ve bahçesaray-özü araştırması (1.MURAT onayıyla)

Kural: her kayıt YAZILMADAN önce en az 2 bilinen (kaynaklı) nokta şart.
İkisi de bu eşiği GEÇEMEDİ, `data/hukuki_sinirlar.js`e YAZILMADI —
ama araştırma boşa gitmesin diye bulunanlar burada kayıtlı:

```
karlofca-banat-maros-tisza-tuna-1699
  ✓ Maros-Tisza kavşağı (Szeged)     46.25167K, 20.19417D  — Wikipedia
    'Mureș (river)', doğrudan WebFetch ile doğrulandı
  ✓ Tisza-Tuna kavşağı (Stari Slankamen) 45.13806K, 20.27750D — Wikipedia
    'Tisza', doğrudan WebFetch ile doğrulandı
  ✗ "Osmanlı-Avusturya cephe hattının Maros'a değdiği nokta" — BULUNAMADI
    (özel bir tarihî-coğrafya kaynağı gerekiyor, bu turda erişilmedi)
  ✗ "Belgrad yönünde antlaşmanın bıraktığı nokta" — BULUNAMADI
  ⇒ 4 noktanın 2'si çözüldü ama HAT'in iki UCU (ilk/son nokta, app.js'in
    cross-product için kullandığı) hâlâ eksik — kayıt YAZILAMAZ.
  ÖNERİ: bu tek kayıt yerine SADECE Tisza-Tuna segmentini (2 nokta,
    TAM çözülmüş) ayrı bir kayıt olarak yazmak — KARAR 1.MURAT'ın.

bahcesaray-ozu-1681
  ✓ Özü (Dinyeper) ağzı — Dinyeper-Bug halici 46.617K, 31.950D — Wikipedia
    'Dnieper–Bug estuary', WebSearch ile doğrulandı (WebFetch'le ikinci
    kez teyit edilmedi — tek kaynak, dogrulanmadi:true önerilir)
  ✗ "Özü'nün yukarı mecrasında antlaşmanın bıraktığı nokta" — BULUNAMADI
  ⇒ 2 noktanın 1'i çözüldü, yine HAT'in iki ucu tamamlanamadı — YAZILAMAZ.
```

Bu iki kayıt için "bulunamadı" NİHAİ değil — özel kaynak taraması
(Consolidated Treaty Series, akademik Osmanlı-Rus/Osmanlı-Avusturya
sınır tarihi çalışmaları) gerektiriyor, bu turun kapsamı dışına çıkıyor.

⚠️ **NOT — olası kayıt çakışması:** `karlofca-bosna-kaleler-1699`
(düzeltilmiş, 2 nokta) ile `karlofca-bosna-una-1699`nun nokta_atamalari
(5 nokta) BÜYÜK ÖLÇÜDE AYNI olayı (Una/Bosna garnizonlarının 1699
devri) anlatıyor — ikisi ayrı kayıt olarak kalmalı mı yoksa birleşmeli
mi, KARAR 1.MURAT'ın. `data/hukuki_sinirlar.js`e HER İKİSİ de (biri
GEÇTİ biri GEÇMEDİ) yazıldı, çakışma açıkça not edildi.

## TEST 1 — TARAF ID'LERİ (devletler.js'te var mı)

Tüm 10 kaydın kullandığı taraf id'leri tarandı: `osmanli, bulgaristan-
kralligi, misir-kavalali, ingiliz-sudani, habsburg, lehistan, venedik,
kacar`. **10/10 GEÇTİ.**

⚠️ `osmanli` `devletler.js`te kendi künyesi olarak YOK (yalnız `tabi:`
alanlarında `ust:"osmanli"` referansı olarak geçiyor, 213 kayıtta) —
bu bir hata değil, projenin kendi tasarımı: Osmanlı atlasın çekirdek/
kendi devleti olduğu için `devletler.js`nin (öteki devletlerin künye
dizini) parçası değil. Bu yüzden `osmanli` istisna sayılıp GEÇTİ kabul
edildi.

## TEST 2 — TARİH PENCERESİ

| kayıt | C penceresi | taraf aralığı | sonuç |
|---|---|---|---|
| midye-enez-1913 | 1913-05-30→06-29 | bulgaristan-kralligi 1908-10-05→1923-10-29 | ✓ |
| misir-sudan-22-paralel-1899 | 1899-01-19→1914-12-18 | misir-kavalali 1805-07-03→1914-12-18 (BİREBİR) · ingiliz-sudani 1899-01-19→1956-01-01 | ✓ |
| ii-erzurum-sattularap-1847 | 1847-05-31→açık | kacar 1789-03-21→1925-01-01 | ✓ |
| karlofca-* (5 kayıt) | 1699-01-26→açık | habsburg 1526-08-29→1918-11-11 · lehistan 1569-07-01→1795-10-24 · venedik 697-01-01→1797-05-12 | ✓ (5/5) |
| bahcesaray-ozu-1681 | 1681-01-11→açık | rusya 1547-01-16→1917-03-15 | ✓ |

**10/10 GEÇTİ.** Tarih testi hiçbir kaydı elemedi — taslağın kendi
tarih seçimleri zaten taraf ömürleriyle tutarlıydı.

## TEST 3 — KOORDİNATLAR (render için yeterli mi)

Bu test 5 kaydı elediği için ayrıntılı:

```
✓ midye-enez-1913              hat 2/2 nokta TAM · kapsama bbox TAM
✓ misir-sudan-22-paralel-1899  paralel eşiği (tek sayı) TAM · kapsama TAM
✓ ii-erzurum-sattularap-1847   hat 2/2 nokta TAM · kapsama bbox TAM
                                (Abadan noktası eksik ama hattın kendisi
                                 için gerekmiyor — ayrıca not edildi)
🟡 karlofca-lehistan-1699       4 nokta-ataması: 2'si (Suçava, Bar)
                                data/yerlesimler.js'te GERÇEK koordinatla
                                BULUNDU ve tamamlandı (uydurulmadı).
                                2'si (Kamaniçe, Roman) taranmadı, ÇİZİLMEZ
                                → KISMEN GEÇTİ, 2 nokta render edilebilir
🟡 karlofca-venedik-1699        4 nokta-ataması: 2'si (Ayamavra, Trebinye)
                                GERÇEK koordinatla tamamlandı. Kataro
                                taranmadı, "Korent kıyısı" bir bölge (nokta
                                değil) → KISMEN GEÇTİ, 2 nokta render edilebilir
✗ karlofca-bosna-sava-1699      hat 0/2 nokta (ikisi de null) · kapsama YOK
✗ karlofca-banat-maros-tisza-tuna-1699  hat 0/4 nokta · kapsama YOK ·
                                Maros/Mureş nehri motorun BUYUK kümesinde
                                de yok (ayrı arac/ borcu)
✗ karlofca-bosna-kaleler-1699   5/5 nokta atlasta_var:false VE koordinatsız
                                (Kostayniça·Bihke·Novi·Krupa·Brod) — dış
                                kaynak araştırması gerekiyor, bu turda
                                yapılmadı
✗ karlofca-bosna-una-1699 (karma) Una nehri Natural Earth'te Balkan'daki
                                değil BREZİLYA'daki bir "Una" (taslağın
                                kendi bulgusu) — gerçek geometri hiçbir
                                kaynakta yok · 5 garnizon noktasının 5'i
                                de koordinatsız
✗ bahcesaray-ozu-1681           hat 0/2 nokta · kapsama YOK
```

**5/10 TAM ya da KISMEN GEÇTİ, 5/10 GEÇMEDİ.**

## SESSİZCE ATILMADI — her geçmeyenin nedeni yukarıda VE
`data/hukuki_sinirlar.js`in kendi başlık yorumunda tekrar var. Beşi de
taslağın KENDİ `NOT_TAMAMLANMAMIS`/`ONEMLI_EKSIK` alanlarıyla zaten
önceden işaretlenmişti — bu tur onları DOĞRULADI, yeni bir kusur
bulmadı.

## NE İSTİYORUM

① `karlofca-bosna-kaleler-1699`in 5 noktası (Kostayniça, Bihke, Novi,
   Krupa, Brod) — Emre'nin M-3463 kararıyla bunlar artık C'nin kendi
   iş kalemi. Dış kaynaktan (Wikipedia/Britannica) koordinat araştırması
   AYRI bir iş kalemi olarak açılabilir; ben bu turda ①②③④ görevlerine
   devam ediyorum, KARAR SENDE.
② Maros/Mureş (motor borcu) ve Una (kaynak verisi hiç yok) — ikisi de
   `arac/`e dokunmayı gerektiriyor, koşu 10 bitmeden yapılamaz.
③ Bahçesaray-Özü (1681) — hızlı üretilmiş 5. aday, koordinat/kapsama
   TAMAMEN eksik; bir sonraki C turunun konusu olabilir.
