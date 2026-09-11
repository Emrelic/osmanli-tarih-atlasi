# BULGU — C KAPSAMA GEOMETRİSİ, 11 Eylül 2026

Oturum: C KAPSAMA GEOMETRİSİ · Görev: SEMA-C-0911.md'nin "tasarlandı,
sınanmadı" dediği YEREL (nearest-segment) cross-product çözümünü
gerçek geometriyle KODLA ve SINA. Araç: `denetim/ARAC-C-KAPSAMA-0911.py`
(öngörü commit `26aca0f`, sınamadan ÖNCE). `data/` ve `arac/` yalnız
OKUNDU, TEK SATIR YAZILMADI.

---

## D022 SONUCU

```
① "Bilinen noktalarda doğru taraf verecek"     → TUTTU (D187 geçti)
② "4-kesişim AZALACAK ama SIFIRA İNMEYECEK"    → KISMEN ÇÜRÜDÜ: nehrin
   KENDİ 66 noktasında kesişim TAM SIFIRA indi (aşağıda §1). Kalan
   belirsizlik türü FARKLI çıktı — "kesişim" değil "yanlış segment
   seçimi" riski, ve BU İKİNCİ türü GÜVENİLİR ÖLÇEMEDİM (§2, itiraf).
③ "Uzun düz hatta yerel=global"                → TUTTU, TAM İSABET
```

---

## ①③ YEREL CROSS-PRODUCT — KODLANDI VE SINANDI

### D187 pozitif kontrol — Şattülarap (gerçek 66 noktalı nehir geometrisi)

```
Basra          beklenen Osmanlı    global=-1835.2  yerel=-7.0   ✓ AYNI TARAF
Muhammere      beklenen Kaçar/İran global=+1488.4  yerel=+3.8   ✓ AYNI TARAF
Abadan         beklenen Kaçar/İran global=+1657.6  yerel=+2.1   ✓ AYNI TARAF
```
**GEÇTİ.** Hem global hem yerel yöntem bilinen 3 noktada AYNI (doğru)
tarafı veriyor — bu üç nokta nehrin ana gövdesine yeterince yakın
olduğu için iki yöntem burada AYRIŞMIYOR.

### Öz-tutarlılık — nehrin KENDİ 66 noktası

```
GLOBAL yöntemde işaret değişimi : 4   (sibling'in ölçtüğü "4 kesişim" ile BİREBİR eşleşiyor)
YEREL yöntemde işaret değişimi  : 0
```
Bu, YEREL yöntemin **kendi tanımı gereği** garanti ettiği bir şey
(her nokta kendi segmentine 0 mesafede, o segmentin yönü sabit) — yine
de somut bir DOĞRULAMA: kodun kendisi gerçekten sibling'in tarif ettiği
düzeltmeyi UYGULUYOR, YAZDIĞIM formül YANLIŞ DEĞİL.

### Uzun düz hat — Sykes-Picot tipi (Akka→Kerkük, tek segment, ~950 km)

```
Şam        global=+24623.0   yerel=+24623.0   AYNI
Musul      global=+115098.2  yerel=+115098.2  AYNI
Bağdat     global=-203393.6  yerel=-203393.6  AYNI
```
**TAM İSABET** — tek segmentli bir hatta yerel yöntem MATEMATİKSEL
OLARAK global yönteme indirgenir (en yakın segment her zaman TEK
segmentin kendisi). ⇒ **Uzunluk tek başına sorun DEĞİL** — sorunu
doğuran SEGMENT SAYISI (hattın KIRILMASI/EĞRİLİĞİ), km cinsinden
uzunluk değil. Bu, `§11`e aday bir ders: *bir yöntemin sınırı çoğu
zaman ÖLÇEĞİNDE değil YAPISININ karmaşıklığındadır.*

---

## ② SINIRINI BULMA — kısmi başarı, kısmi itiraf

### Bulduğum sınır türleri

```
① Hat kendi üstüne kıvrılırsa (meander)  → TEORİK olarak "en yakın
   segment" ARTIK TEKİL olmayabilir — sibling'in kendi notu
   (SEMA-C-0911.md:543) bunu ÖNGÖRMÜŞTÜ. BEN BUNU SAYISAL OLARAK
   GÜVENİLİR ÖLÇEMEDİM (aşağıya bak, itiraf).
② Hat bir noktanın etrafını DOLANIYORSA (yarımada/ada) → taraf kavramı
   ANLAMINI YİTİRİR — "sağ/sol" değil "içeri/dışarı" sorusu olur, bu
   YEREL CROSS-PRODUCT'IN ÇÖZEBİLDİĞİ bir soru DEĞİL (nokta-poligon
   testi gerekir, çizgi-tarafı testi değil). BU GERÇEK BİR SINIR —
   Şattülarap'ta Abadan tam bu riski taşıyor (ada/yarımada, ozet
   metninde de öyle işaretli) ama BU TURDA test EDİLMEDİ.
③ Hat kapsama alanının kenarına DEĞMİYORSA → kalan kısmın sahibi
   TANIMSIZ kalır — bu C'nin KENDİSİNİN çözemeyeceği bir soru, dış bir
   KURAL (ör. "en yakın komşu petek" varsayılan davranışı) gerekir.
   ÖLÇÜLMEDİ, yalnız İSİMLENDİRİLDİ.
```

### 🔴 İTİRAF — ② testimin sayısal sonucu GÜVENİLMEZ ÇIKTI

"En yakın iki segment birbirine ne sıklıkla YAKIN mesafede" sorusunu
sayısallaştırmaya çalıştım (400 test noktası, nehrin 3 km yanına
serpiştirilmiş) ve **%1,8 (7/400)** bir "riskli" alt-küme buldum — AMA
bu 7 örneğin RAPORLANAN mesafeleri (36-48 km) coğrafi olarak
İMKÂNSIZDI (bir noktanın nehrin 3 km yanında olup nehre en yakın
mesafesinin 36 km çıkması TUTARSIZ). İzole bir debug testiyle AYNI
matematiği elle tekrar kurdum ve DOĞRU sonuç (3,0 km) aldım — yani
**temel formül DOĞRU ama TAM SENARYOYU üreten döngüde bir HATA var**,
kaynağını bu turda BULAMADIM (zaman sınırı). **D107 gereği açıkça:
bu %1,8 sayısı KULLANILMASIN, `ölçülemedi` sayılsın.** Formülün kendisi
(§1'de) DOĞRU ÇALIŞTIĞI ayrıca doğrulandı — yalnız BU İKİNCİ testin
KENDİ KODUNDA bir hata var, formülde değil.

---

## ④ ALTERNATİF — kapalı poligona çevirme, ÖLÇÜLDÜ (analitik)

```
YÖNTEM A (cross-product, mevcut)       YÖNTEM B (hat uçlarını alan
                                        kenarına uzatıp POLİGON kurma)
Maliyet: HER petek-kenar noktası için  Maliyet: BİR KERE poligon inşa
  O(segment sayısı) tarama              edilir, sonra HER nokta için
  (Midye-Enez'de O(1), Sykes-Picot'ta   ucuz point-in-polygon testi
  O(1), Şattülarap'ta O(65))            (shapely.contains, HAZIR ve
                                        motor zaten KULLANIYOR)
Risk: segment-seçim belirsizliği        Risk: hattın UÇLARINI alan
  (② yukarıda) + hat alanın kenarına    kenarına NASIL uzatacağını
  değmezse "kalan taraf" tanımsız       (hangi yönde, ne kadar) KARAR
                                        vermek GEREKİR — bu KENDİSİ
                                        keyfi bir MODELLEME kararı,
                                        antlaşma METNİNDE YOK
Doğruluk: hattın KENDİSİYLE BİREBİR     Doğruluk: poligonun kenarları
  (antlaşma yalnız çizgiyi tarif        antlaşmanın SÖYLEMEDİĞİ bir
  ediyor, B'nin gerektirdiği KAPANIŞ    varsayım taşır — "iddia
  antlaşmada YOK)                       edilenden FAZLA bilgi" riski
```

**TERCİH: Yöntem A (cross-product), GEREKÇESİYLE.** B'nin
"maliyeti daha ucuz" avantajı gerçek ama B'nin "hattı nasıl
kapatacağız" sorusu KENDİSİ ÇÖZÜLMEMİŞ yeni bir problem — ve bu
YENİ problem, antlaşmanın metninde OLMAYAN bir veri (kapanış kenarının
GEOMETRİSİ) UYDURMAYI gerektirir. `D089`in dersi burada da geçerli:
"veri modelinin ifade edemediği bir ilişkiyi ifade edebildiği bir
ilişkiye çevirmek, yaklaşıklama değil BAŞKA BİR İDDİADIR" — B, hattın
SÖYLEMEDİĞİ bir kapanma şekli iddia eder. A'nın segment-belirsizliği
(② ) gerçek ama YEREL olarak sınırlı bir hata payı; B'nin kapanış
belirsizliği GLOBAL ve antlaşmanın kendisiyle ÇELİŞEBİLİR.

---

## §5 — Ölçmediklerim

```
① ②'nin sayısal "%1,8 riskli" iddiası GÜVENİLMEZ ÇIKTI — kod hatası
   bulunamadı, sonuç KULLANILMAMALI (yukarıda açık itiraf).
② Ada/yarımada (Abadan tipi) durumu için nokta-içeride testi
   TASARLANMADI/SINANMADI — yalnız SINIF olarak İSİMLENDİRİLDİ.
③ Hattın alan kenarına değmediği durum için "kalan tarafın sahibi"
   kuralı ÖLÇÜLMEDİ.
④ Poligon-kapatma (Yöntem B) KOD OLARAK YAZILIP SINANMADI — yalnız
   ANALİTİK/kavramsal olarak karşılaştırıldı.
⑤ Motor koşulmadı, `data/*.js` ve `arac/*.py`ye hiçbir satır yazılmadı.
```
