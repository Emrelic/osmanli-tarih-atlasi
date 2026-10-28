# UMIT-W41b: P3-5 (Gence 1406 · St. Vith 1815) sınıflandırması + 2sk'nın OCAK-1 kovaları

**Temel commit:** origin/makine/umit **47290f11** (`UYGULA P2-11 Z17 … TAVAN 2S_YALNIZ_TARAF 2262 -> 2245`).
Yalnız ölçüm ve öneri: veri ve kod yazılmadı, commit yok. Simülasyonlar BELLEKTE yapıldı, dosyaya yazılmadı. Kapı işlevleri `denetle.py`nin kendisi (`degismez2`, `_2s_yeri_aniyor`, `_2s_tarafi_aniyor`). Scratchpad betikleri: `kova_dok.py` · `ocak1.py`.
Bugünkü resmî `KAPANIS_2S`: yer 1588 · yalnız taraf 1648 · maskeli yer 1057 · maskeli taraf 597. Görünür+maskeli TARAF = **2245** = Z17 tavanı ✓.

## P3-5 ① Gence 1406-10-21 → **SINIF ③: VERİ KUSURU** (madde değil, yerleşimin `s:` zinciri)
**Okunanlar:**
- Gence kaydı (`yerlesimler.js:665`): `s: … celayirli 1340-01-01 → 1406-10-21 → karakoyunlu`. Dönemlerde kaynak YOK; kaydın genel `kaynak:"gence"`.
- **Kovanın 39 üyesi; 38'inin el değişimi `timurlu → karakoyunlu`, YALNIZ Gence'ninki `celayirli → karakoyunlu`.**
- Gence'nin en yakın aynı kovadaki komşuları (Berde/Karabağ 73 km · Revan 166 · Şerur 174 · Nahçıvan 183) hepsi `celayirli 1340 → 1386-01-01 → timurlu → 1406-10-21 → karakoyunlu` taşıyor. **Gence'de 1386-01-01 Timurlu adımı eksik.**
- Pencerede tek madde var: 1406-10-21 "Kara Yusuf'un Tebriz ve Azerbaycan'ı Timurlulardan geri alması" (`yer_id` Tebriz). Madde olayı Timurlu → Karakoyunlu diye anlatıyor; Gence'nin Celâyirli → Karakoyunlu devri madde ile ÇELİŞİYOR, eksik ad değil.
- **TDV `gence`** (çekildi): *"XIV. yüzyıl ortalarında Gence ve Karabağ'a Celâyirliler hâkim oldular. XV. yüzyılın başlarında bu bölge Karakoyunlular'ın eline geçti."* Timur dönemi bu maddede GEÇMİYOR. **TDV `karakoyunlular`:** Kara Yûsuf 1406'da Ebû Bekir Mirza üzerine yürüdü; *"Serdrûd zaferi (13 Nisan 1408) Kara Yûsuf'a Azerbaycan'ı kazandırdı."* **TDV `timur`:** çıkarıcı Gence için "geçmiyor" dedi, Karabağ'da tarihsiz kışlama var. ⚠️ Çıkarıcı zayıf (tuzak ⑦), ikinci çıkarıcı denenmedi.

**Hüküm:** sınıf ③. Gence'nin zinciri komşu zincirle ve kapatan maddeyle tutarsız. Çare iki adım ve ikisi de kaynak ister:
- (a) Gence'ye `1386-01-01 timurlu` adımı. Bu komşu emsal; komşuların 1386'sı da kaynaksız ve 01-01 temsilî, yani **atlas dayanak değil, kaynak aranmalı**.
- (b) Gence'nin Karakoyunlu'ya geçiş günü. TDV'ye göre "XV. yüzyıl başları" ve 1408 Serdrûd; 1406-10-21 Tebriz günü Arran'a kaynakla bağlı değil. Kaynak bulunamazsa §4 gereği yıl düzeyine iner.
- Koordinatörün "Timur ardıl kavgası" tahmini olayı doğru adlandırıyor ama kusur madde tarafında değil, Gence kaydında.

**Etki (bellekte simülasyon, yalnız (a)):**
- 1406 kovası KAPANIYOR: TARAF 1648 → **1681** (+33) · YER 1588 → 1594 (+6) · maskeli TARAF 597 → 565 · maskeli YER 1057 → 1051 · 2s açık −1.
- Gence'nin yeni 1386 birimi zaten açık olan 1386-01-01 kovasına düşüyor (Ardahan, Arpaçay, Astara, Berde… açık).
- ⇒ **Görünür+maskeli TARAF 2245 → 2246** (+1, Gence'nin 1386 birimi). Z17 ölçütü düzeltmeyi CEZALANDIRMIYOR, yalnız gerçekten yeni olan 1 birimi gösteriyor. Eski ölçüt +33 diye ötecekti.

## P3-5 ② St. Vith 1815-06-09 → **SINIF ①, ama "ad ekle" değil "GÖVDEYİ TAMAMLA"**
**Okunanlar:**
- St. Vith (`yerlesimler_a78_avrupa.js`): `fransa-cumhuriyet → 1815-06-09 → almanya → 1920-01-10 → belcika`. Kaydın kaynak notu Viyana Kongresi'ni ve Our ötesinin Prusya'ya geçişini zaten yazıyor.
- Kova 17 üye; madde **Viyana Kongresi Nihai Senedi** (`olaylar_ek16.js:302`). Gövde Hollanda, Cenova, Kongre Polonyası ve Stralsund→Prusya'yı sayıyor; **Ren sol yakası ve Our ötesi devrini HİÇ anmıyor.** Madde `kaynak:"bulunamadı — … standart akademik kaynak"`.
- **Birincil metin, Final Act Art. XXV:** *"the five cantons of Saint-Vith, Malmedy, Cronenbourg, Schleiden, and Eupen … shall belong to Prussia"*. ⇒ St. Vith **aynı belgede ADIYLA** geçiyor. Olay aynı, yer aynı, metin eksik. (Kaynak: Wikisource'taki antlaşma metni; atıf olarak CTS/Hertslet künyesi önerilir. Vikipedi değil, birincil metin dökümü.)
- Kimlik: St. Vith `almanya`, oysa aynı kovadaki Poznan ve Toruń `prusya`. Ama Ren komşuları **Köln, Aachen, Trier 1281-1923 baştan sona `almanya`** ⇒ St. Vith atlasın Ren geleneğine UYUYOR, ③ (kimlik kusuru) DEĞİL. Taraf kolu bu yüzden tutmuyor: madde "Prusya" diyor, "Almanya" demiyor.
  ⚠️ Yan bulgu, kapsam dışı: Köln, Aachen ve Trier'in 1794/97-1814 Fransız dönemi hiç yok. Ren sol yakası haritada o yıllarda Alman görünüyor. Ayrı bir ③ adayı, ölçülmedi.

**Hüküm:** ①. Ama yalnız `yer:` listesine ad eklemek, gövdenin söylemediği bir yeri madde etiketine yazmak olur. Doğrusu: gövdeye Art. XXV cümlesi (Ren sol yakası + St. Vith, Malmedy, Eupen kantonları Prusya'ya), `kaynak:`a Art. XXV, sonra `yer:`e St. Vith. **Yeni madde AÇILMAZ:** aynı gün aynı belge mükerrer olurdu.

**Etki (simülasyon: yalnız `yer`e "St. Vith"):** 1815 kovası KAPANIYOR: TARAF 1648 → **1662** (+14) · YER +3 · maskeli TARAF 597 → 583 · **görünür+maskeli 2245 → 2245 (0)**. Z17 ölçütü bunu da cezalandırmıyor ✓.

## AYRI KALEM: 2sk'nın YYYY-01-01 kovaları
| | kova | birim | penceresi BOŞ kova | kapalı kova | açık kova | kapalı YER | kapalı TARAF | **maskeli YER** | **maskeli TARAF** | açıklanmamış |
|---|---|---|---|---|---|---|---|---|---|---|
| GÜN hassas | 1229 | 6950 | 299 | 505 | 425 | 1337 | 1507 | 615 | 249 | 2534 |
| **OCAK-1** | **491** | **3125** | 123 | **71** | **297** | 251 | 141 | **442** | **348** | 1567 |
Çapraz: kapalı YER 1337+251 = 1588 ✓ · TARAF 1507+141 = 1648 ✓ (resmî).

- **OCAK-1 kovalarının yalnız %19'u kapanıyor** (71/368 penceresi dolu kova). Gün-hassas kovalarda oran %54.
- **Maskeli TARAF'ın %58'i (348/597) ve maskeli YER'in %42'si (442/1057) OCAK-1 kovalarında.** Maskenin çoğu aynı OLAYI değil aynı YILI paylaşan birimlerden geliyor (UMIT'in tezi ✓).
- **Tek eksik yüzünden açık, taraf maskeleyen kova:** HEAD'de 21. Bunların **14**'ü OCAK-1 (UMIT 13 demişti; HEAD'de 14: 1351, 1362, 1371, 1394, 1470, 1537, 1540, 1542, 1570, 1601, 1688, 1695, 1889, 1915). Tek-eksikli kovalarda maskelenen taraf: OCAK-1 48 · GÜN 60.

**Kovalama anlamlı mı? HAYIR, iki sebeple:**
1. **Kova eşitliği bir olay iddiası taşır, 01-01 taşımaz.** Gün-hassas kovada aynı gün = büyük ihtimalle aynı belge/olay; kovanın "her üyesi açıklanmalı" kuralı (Mankup 1349) orada anlamlı. 01-01 kovada üyeler yalnız yılı paylaşıyor. Uç vaka: 1794-01-01'de 5 Kanada noktası 126 alakasız taraf birimini kapalı saydırmıyordu.
2. **±30 gün penceresi de 01-01 için kurgudur.** Yalnız Aralık-Ocak maddeleri pencereye giriyor. Ölçüldü: OCAK-1 birimlerinde **5 birim yalnız bir ÖNCEKİ yılın maddesiyle kapanıyor**, yanlış yıl.

**Senaryolar (OCAK-1 birimleri, ölçüldü):**
| Senaryo | YER kapalı | TARAF kapalı | açık birim | not |
|---|---|---|---|---|
| Bugün (kova, ±30) | 251 (+442 maske) | 141 (+348 maske) | 1567 + 376 pencere boş | |
| **B: birim başına ayrı kırılma, ±30** | **693** | **489** | 1567 + 376 | maske OCAK-1'de SIFIRLANIR |
| **C: birim başına + AYNI TAKVİM YILI penceresi** | **718** | **657** | **1750** | B'ye göre +25 yer, +168 taraf; −193 açık |

- **B, Z17 ölçütünü DEĞİŞTİRMEZ:** görünür+maskeli TARAF B'de de 1507 + 249 + 489 = **2245**. Yeni tavan ölçütü kovalamadan bağımsız; B yalnız neyin görünür sayıldığını dürüst yapıyor (görünür TARAF 1648 → 1996, maskeli 597 → 249).
- **C ölçütü değiştirir, GEVŞETİR:** pencere 61 günden 365 güne çıkıyor. +168 taraf kapanışının bir kısmı tesadüf olacaktır (W41 TESADÜF: pencere kalabalıklaştıkça tesadüf artıyor). "Ölçütü gevşetme" kuralına değdiği için **C'yi önermiyorum**, yalnız fiyatını ölçtüm.

**ÖNERİ (kod yazılmadı):**
- (1) 2sk sınıf sayımında **OCAK-1 kırılmaları birim başına** değerlendirilsin (B). Gün-hassas kovalarda Mankup kuralı aynen kalsın.
- (2) 2sk satırı GÜN ve OCAK-1'i **ayrı sütunda** bassın. 2s zaten açıkları `yil_temsili_ayir` ile ayırıyor; 2sk kapalıları ve maskeyi ayırmıyor. Bu, D265 ailesinden bir asimetri: açıkta ayrım var, kapalıda yok.
- (3) Tavan Z17'nin toplamı (2245) kalsın; B'ye geçiş tavanı oynatmaz, §3.4-2 gereği aynı commit'te sabit değişmez.
- (4) ±30'un 01-01'deki yanlış-yıl kapanışı (5 birim) ayrıca "aynı yıl şartı" ile kapatılabilir. Bu bir SIKILAŞTIRMA, bedeli 5 birim.

## Yan bulgu: `KAPANIS_2S["acik_kovada"]` çağrı başına SIFIRLANMIYOR
- `denetle.py:1620-1623` yer, yalnız taraf ve iki maskeli sayacı sıfırlıyor; `acik_kovada` sıfırlanmıyor.
- Aynı süreçte `degismez2(..., yer_sarti=True)` ikinci kez çağrılınca birikiyor. Ölçüldü: simülasyonda 1654 → 3270 (= 1654 + 1616).
- `denetle.py` ana akışı tek çağrı yapıyor (`:5966`), yani resmî sayı DOĞRU. Ama birden çok çağıran araçlar yanlış okur (`ARAC-DEGISMEZ2-KAPAT-0930`, `ARAC-DENETIM-YER-0920`, `ARAC-EKO-BOLGE-2T-YAZIM-0921`, `ARAC-KRONO-DOGU-ISLAM-0929-KAPANIS` aynı işlevi çağırıyor; çoklu çağrı yapıp yapmadıkları ölçülmedi).
- Öneri: tek satırlık sıfırlama; W41'in kalemi değil.

## Bulunamadı
- Gence'nin 1386 Timurlu geçişi ve Karakoyunlu geçiş günü için TDV'de gün yok. `timur` maddesinin ikinci çıkarıcı okuması yapılmadı.
- Köln, Aachen ve Trier'in Fransız dönemi ölçülmedi, yalnız gözlendi.
