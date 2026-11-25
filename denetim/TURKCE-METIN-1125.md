# TURKCE-METIN-1125 — son kullanıcıya görünen Türkçe metin denetimi

Dal: `turkce-metin-1125` (taban `6f7be8261`) · main'e İTİLMEDİ, yayında değil. 25 Kasım 2026, EMRELİC.

## 1. Ekranda ne görünüyor (js/ ve index.html'den ölçüldü)

Görünen: olay ve kronoloji maddelerinde `b` · `d` · **`gun`** (tarih satırı) · `yer` · `kisiler` · `kaynak` (panelin altındaki
"Kaynaklar") · alt adımlar; devlet adı, başkent, kronolojisi; ek okuma kartları; kişi/padişah kartları; antlaşma, savaş,
sefer; sınır çizgisi dayanağı; kaynaklı halka notu; boş alan balonu (`bos_alanlar.js`) ve dönemsiz kasıtlı boşluğun `neden`i;
yol penceresi. **Görünmeyen:** `ic_not*` (tek istisna aşağıda), yerleşimlerin olağan `neden`/`kaynak` alanları,
antlaşma haritasının üst `not`u. Sınır: bu liste kod okumasıyla çıkarıldı, her pencere tarayıcıda tek tek açılmadı.

İstisna: **yol penceresi `ic_not`u ekrana basıyordu** (YOLLAR, 482 kayıt) — koddan kaldırıldı.

## 2. Yapılanlar

- En büyük sızıntı **tarih satırıydı**: "GREGORYEN … (CLAUDE.md Takvim, Emre …; UMIT …)", "t ALT SINIR", "∩" gibi notlar
  tarih yerinde görünüyordu. Sade tarihe indirildi; asıl metin aynı kayıtta görünmeyen `ic_not_ham*` alanında.
- Kronoloji başlık/açıklamalarından "atlasta …", "beyanlı", "künye", "Emre kararı", iç devlet kimliği, ham
  `(kesinlik: {...})`, 1281 öncesi şablon cümlesi ayıklandı. "yalnız yıl teyitli; gün teyitsiz" → "yalnız yılı biliniyor".
- Boş alan balonları: `bos_alanlar.js` üretilmiş ve motor da okuyor; ona dokunulmadı, okur metni
  `data/bos_metin.js`'te (211 metin + 7 tür açıklaması). `uret_bosluk.py` deneme koşusu dosyayı anlamca da değiştiriyordu
  (kayıtların zaman pencereleri bayat) — geri alındı.
- Arayüz: geliştirici paragrafı ve ipuçlarındaki dosya adları kaldırıldı; isyan satırının araştırma notlu ipucu kaldırıldı.
- **Paragraf boşluğu tek noktadan, gösterimde çözüldü:** 18.880 açıklamanın yalnız 1'inde satır sonu vardı.
  480+ karakterlik metin ekranda cümle sınırından bölünüyor (525 uzun metnin 450'si; içerik değişen 0; veri ve çeviri
  özeti etkilenmez). Tarayıcıda bir maddede 3 paragraf görüldü.
- Başlığa bağlı eşleşmeler: `olay_taraf.js`'te 49 anahtar yeni başlığa taşındı; sonrasında kopan bağ taraması 0.
- UMIT çeviri denetiminin Türkçe kaynak listesi (350 tekil madde) elden geçirildi; yardımcının 10 önerisi uygulanmadı.

## 3. Ölçüm: bakılan / bakılmayan

- Yüklenen veri dosyası: 645 (data/ altında 1222 .js; kalanı çeviri, paket, 4 MB üstü geometri — taranmadı).
- Görünen alanlarda betikle taranan dizge: ~113.000.
- Ana dala (taban) göre: **215 veri dosyası, 4.239 kayıt**; alan: gun 1544 · d 1209 · kaynak 1108 · b 963 · devlet adı 82 ·
  yer 15 · diğer 10. `t`, `f`, `id`, koordinat değişen: **0**. Beklenmedik alan farkı: 0.
- **Madde 2-3 (imla, anlatım) bütün metinlerde YAPILMADI.** Otomatik kalıp taraması + Türkçe karaktersiz 55 madde + UMIT
  listesi. ~18.900 açıklamanın tamamı insan/ajan gözüyle okunmadı. Ek okuma, padişah/kişi kartı, antlaşma metinleri yalnız
  kalıp taramasından geçti.
- **Madde 4'te AÇIK kalan:**
  - `kaynak` alanları: güçlü iç not kalıbı taşıyan **~1.440 dizge** (dosya yolu, "künye", koordinatör, kural adı vb.).
    Yalnız "bu oturumda" ifadeleri ve birkaç şablon temizlendi. Kaynak beyanı silinmesin diye kör kural uygulanmadı.
  - Tarih satırında kuralla ayrıştırılamayan karışık notlar (ilk ölçümde 160 farklı metin).
  - `gelistirici.js` dizgeleri (yalnız geliştirici kipi) bırakıldı.

## 4. Devlet adları — SALT İMLA (ayrı commit `69ec126fa`)

82 adın hepsinde fark yalnız Türkçe harf işareti (betikle sınandı: işaretler düşürülünce eski = yeni; 82/82).
Kimlikler aynı, ad/unvan/transliterasyon tercihi değişmedi. Örnek: "Misir Yeni Krallik" → "Mısır Yeni Krallık",
"Akad Imparatorlugu" → "Akad İmparatorluğu", "Cemisgezek Beyligi (Melkisi)" → "Çemişgezek Beyliği (Melkişî)".
Aynı adların metin içindeki geçişleri de o commit'te. Geri alınırsa `olay_taraf.js` anahtarları yeniden eşlenmeli
(commit `404243e3d` yeni adlara göre). Tam tablo bu dosyanın sonunda.

## 5. Çeviri etkisi (KASA için — yayından ÖNCE)

Dalım `data/ceviri_*` dosyalarına **dokunmuyor** (UMIT ve KASA şu an yazıyor; ceviri_dizin farkı ana dalın ilerlemesidir).
Bu hâliyle `ceviri.py denetim` **çıkış 1** verir (tavan aşımı) ⇒ yayın kapısı geçmez.

| küme | sayı | yapılacak |
|---|---|---|
| olay, salt imla/noktalama | 83 madde (114 alan) | özet tazele |
| devlet adı, salt imla | 82 | özet tazele |
| olay, anlam/ifade değişti | **218 madde (229 alan)** | yeniden çevir (`TURKCE-METIN-1125/yeniden_ceviri.json`) |
| yeni arayüz dizgesi | **41** | çevir (aynı dosya, `arayuz_yeni`) |

(Bir madde iki alanıyla iki kümeye girebilir: toplam bayat olay maddesi 294.)

Tazeleme: `ceviri.py` özet = Türkçe metnin FNV-1a 32'si; özet tutmazsa kayıt bayat sayılıp Türkçe gösterilir.
`ozet_tazele.py` yalnız ilgili kaydın satırında, yalnız eski özeti birebir tutan alanı değiştirir, dosya bölmez.
Deneme koşusu (bu dalın tabanındaki çeviriyle): 4.116 alan. Çeviri dalları birleştikten SONRA:
`py denetim/TURKCE-METIN-1125/ozet_tazele.py` → `py arac/ceviri.py yaz` → `py arac/ceviri.py denetim`.
Gerçek (yazan) koşusu denenmedi. "Salt imla" ölçütü: harf işareti, noktalama, büyük/küçük harf ve boşluk atılınca eski = yeni.
UMIT'in bazı dillerde iç notu çeviriden zaten çıkardığı bildirildi; yeniden çevirmeden önce o dallarla karşılaştırın.

## 6. Birleştirme uyarısı

Ana dal bu sırada 22 commit ilerledi. `git merge-tree` ile tek çatışma: **`index.html`**. KASA çözerken şunlar
KAYBOLMAMALI: `<script src="data/bos_metin.js…">` satırı ve dört arayüz metni (koşu etiketi ipucu, bölge eşiği ipucu,
"Emre'nin tarifi" ifadesi, kaldırılan geliştirici paragrafı). Push kapısının damga çatışmasını kendisi çözmesi bu
satırları düşürebilir mi: ölçülmedi. Paketler birleştirmeden sonra yeniden üretilmeli.

## 7. Emin olunamayanlar

`TURKCE-METIN-1125/emin_olunamayanlar.md`: ilk turdan 7, UMIT listesinden 130 olgu/kronoloji şüphesi, uygulanmayan
10 öneri, karışık tarih notu örnekleri. Öne çıkan: Lozan'ın Meclis onayı 23 / 2 Ağustos (TDV 2 diyor; değiştirilmedi).

## 8. `py arac/denetle.py` sonucu

**Son koşu (25 Kasım 22:57, bu worktree, `coz-c` ile açılmış harita dosyalarıyla, commit `d21dc4328`): çıkış 0 — "SONUÇ: temiz".**
Değişmez 1, 2, 2i, 4, 3b, 8a, 8b ✓ · `BILINEN_AYRI` ölü istisna 0.

Önceki iki koşu çıkış 1'di: ① `coz-c` öncesi taze kopyada Değişmez 3b ✗ ve 8 ölçülemedi (harita dosyaları açılınca ikisi
de geçti); ② başlığının imlası düzelen 2 maddenin `denetle.py` `BILINEN_AYRI` girdisi eşleşmez oldu — iki girdi yeni
başlığa taşındı (`arac/denetle.py`'de tek değişiklik bu; tavan değişmedi).

Koşturulmayanlar: `denetle_yayin`, `push_kapisi`, `renk_olc`, `odak_olc`. Üretim betiği ve motor tuzu dosyalarına dokunulmadı.
Tarayıcı sınaması (yerel sunucu) 12. commit'ten ÖNCE yapıldı: paragraf bölme çalışıyor, boş alan balonlarında iç not
kalıbı 0; konsolda 3 adet "reading 'points'" hatası (js/app.js yorumunda kütüphane içi hata diye kayıtlı; ana dalda ayrıca
yeniden üretilmedi).

## 9. Devlet adları — tam eski → yeni tablosu (82)

| eski | yeni |
|---|---|
| Sutayogullari | Sutayoğulları |
| Cemisgezek Beyligi (Melkisi) | Çemişgezek Beyliği (Melkişî) |
| Misir Erken Hanedan Donemi (1.-2. Hanedan) | Mısır Erken Hanedan Dönemi (1.-2. Hanedan) |
| Misir Eski Krallik (3.-6. Hanedan) | Mısır Eski Krallık (3.-6. Hanedan) |
| Herakleopolis Krallığı (9.-10. Hanedan, 1. Ara Donem) | Herakleopolis Krallığı (9.-10. Hanedan, 1. Ara Dönem) |
| Misir Orta Krallik (11.-13. Hanedan) | Mısır Orta Krallık (11.-13. Hanedan) |
| Misir Yeni Krallik (18.-20. Hanedan) | Mısır Yeni Krallık (18.-20. Hanedan) |
| Misir 3. Ara Donem (21.-25. Hanedan: Tanis, Libya, Kus) | Mısır 3. Ara Dönem (21.-25. Hanedan: Tanis, Libya, Kuş) |
| Kusi 25. Hanedan (Misir) | Kuşi 25. Hanedan (Mısır) |
| Ahamenis Misir'i (27. Hanedan, 1. Pers egemenligi) | Ahameniş Mısır'ı (27. Hanedan, 1. Pers egemenliği) |
| Misir 28.-30. Hanedan (son yerli firavunlar) | Mısır 28.-30. Hanedan (son yerli firavunlar) |
| Ahamenis Misir'i (31. Hanedan, 2. Pers egemenligi) | Ahameniş Mısır'ı (31. Hanedan, 2. Pers egemenliği) |
| Akad Imparatorlugu | Akad İmparatorluğu |
| Ur III (Ucuncu Ur Hanedani) | Ur III (Üçüncü Ur Hanedanı) |
| Birinci Deniz Ulkesi Hanedani | Birinci Deniz Ülkesi Hanedanı |
| Orta Asur Imparatorlugu | Orta Asur İmparatorluğu |
| Yeni Babil (Keldani) Imparatorlugu | Yeni Babil (Keldani) İmparatorluğu |
| Mari Lim Hanedani (Yahdun-Lim–Zimri-Lim) | Mari Lim Hanedanı (Yahdun-Lim–Zimri-Lim) |
| Elam — Simaski Hanedani | Elam — Şimaşki Hanedanı |
| Elam — Sukkalmah (Eparti) Hanedani | Elam — Sukkalmah (Eparti) Hanedanı |
| Yeni Hitit (Luvi-Arami) Sehir Devletleri (Karkamis, Melid, Hamat, Gurgum, Kummuh, Tabal vb.) | Yeni Hitit (Luvi-Arami) Şehir Devletleri (Karkamış, Melid, Hamat, Gurgum, Kummuh, Tabal vb.) |
| Fenike Sehir Devletleri (Sur, Sayda, Cubeyl, Arvad) | Fenike Şehir Devletleri (Sur, Sayda, Cübeyl, Arvad) |
| Filisti Sehir Devletleri | Filisti Şehir Devletleri |
| Ahamenis (Pers) Imparatorlugu | Ahameniş (Pers) İmparatorluğu |
| Buyuk Iskender Imparatorlugu | Büyük İskender İmparatorluğu |
| Selevkos Imparatorlugu | Selevkos İmparatorluğu |
| Part (Arsakid) Imparatorlugu | Part (Arsakid) İmparatorluğu |
| Palmira (Odaenathus-Zenobia) Imparatorlugu | Palmira (Odaenathus-Zenobia) İmparatorluğu |
| Herodes Hanedani Krallığı (Roma vasali) | Herodes Hanedanı Krallığı (Roma vasalı) |
| Bati Han Hanedani | Batı Han Hanedanı |
| Dogu Han Hanedani | Doğu Han Hanedanı |
| Bati Jin Hanedani | Batı Jin Hanedanı |
| Dogu Jin Hanedani | Doğu Jin Hanedanı |
| Guney Qi | Güney Qi |
| Liang (Guney Hanedani) | Liang (Güney Hanedanı) |
| Chen Hanedani | Chen Hanedanı |
| Sui Hanedani | Sui Hanedanı |
| Tang Hanedani | Tang Hanedanı |
| Sonraki Liang (Bes Hanedan) | Sonraki Liang (Beş Hanedan) |
| Sonraki Tang (Shatuo, Bes Hanedan) | Sonraki Tang (Shatuo, Beş Hanedan) |
| Sonraki Jin (Shatuo, Bes Hanedan) | Sonraki Jin (Shatuo, Beş Hanedan) |
| Sonraki Han (Shatuo, Bes Hanedan) | Sonraki Han (Shatuo, Beş Hanedan) |
| Sonraki Zhou (Bes Hanedan) | Sonraki Zhou (Beş Hanedan) |
| Silla Krallığı (Birlesik Silla dahil) | Silla Krallığı (Birleşik Silla dahil) |
| Japonya - Nara Donemi Imparatorluk Sarayi | Japonya - Nara Dönemi İmparatorluk Sarayı |
| Linyi (Champa'nin Ilk Donemi) | Linyi (Champa'nın İlk Dönemi) |
| Dinh Hanedani (Dai Co Viet) | Dinh Hanedanı (Dai Co Viet) |
| Maurya Imparatorlugu | Maurya İmparatorluğu |
| Sunga Hanedani | Sunga Hanedanı |
| Kanva Hanedani | Kanva Hanedanı |
| Gupta Imparatorlugu | Gupta İmparatorluğu |
| Rastrakuta Hanedani | Rastrakuta Hanedanı |
| Harsa'nin Imparatorlugu (Pushyabhuti) | Harşa'nın İmparatorluğu (Pushyabhuti) |
| Birinci Pandya Imparatorlugu | Birinci Pandya İmparatorluğu |
| Olmek Kulturu (San Lorenzo-La Venta) | Olmek Kültürü (San Lorenzo-La Venta) |
| Chavin Kulturu | Chavin Kültürü |
| Nazca Kulturu | Nazca Kültürü |
| Wari (Huari) Imparatorlugu | Wari (Huari) İmparatorluğu |
| Klasik Maya Sehir Devletleri (genel cati) | Klasik Maya Şehir Devletleri (genel çatı) |
| Yeni Asur Imparatorlugu | Yeni Asur İmparatorluğu |
| Dai Prensligi (Tuoba/Tabgac) | Dai Prensliği (Tuoba/Tabgaç) |
| Danimarka Krallari (Godfred donemi, Erken Dani Krallik) | Danimarka Kralları (Godfred dönemi, Erken Dani Krallık) |
| Guney Yemen (Halk Cumhuriyeti) | Güney Yemen (Halk Cumhuriyeti) |
| Birlesik Arap Emirlikleri | Birleşik Arap Emirlikleri |
| UNTAET (BM Dogu Timor Gecici Idaresi) | UNTAET (BM Doğu Timor Geçici İdaresi) |
| Kore Cumhuriyeti (Guney Kore) | Kore Cumhuriyeti (Güney Kore) |
| Guney Vietnam (Vietnam Devleti 1949 -> Vietnam Cumhuriyeti 1955) | Güney Vietnam (Vietnam Devleti 1949 -> Vietnam Cumhuriyeti 1955) |
| Neustria Kralligi (Merovenj) | Neustria Krallığı (Merovenj) |
| Austrasia Kralligi (Merovenj) | Austrasia Krallığı (Merovenj) |
| Vasconia Dukaligi | Vasconia Dükalığı |
| Frizya Kralligi (Radbod) | Frizya Krallığı (Radbod) |
| Essex (Dogu Sakson) Kralligi | Essex (Doğu Sakson) Krallığı |
| Waterford (Norse) Kralligi | Waterford (Norse) Krallığı |
| Limerick (Norse) Kralligi | Limerick (Norse) Krallığı |
| Galicya Kralligi | Galiçya Krallığı |
| Urgell Kontlugu | Urgell Kontluğu |
| Empuries (Ampurias) Kontlugu | Empuries (Ampurias) Kontluğu |
| Besalu Kontlugu | Besalu Kontluğu |
| Bobastro (Ibn Hafsun Emirligi) | Bobastro (İbn Hafsun Emirliği) |
| Vesali (Chandra Hanedani, Arakan) | Vesali (Chandra Hanedanı, Arakan) |
| Ngo Hanedani (Ngo Quyen) | Ngo Hanedanı (Ngo Quyen) |
| Perlak (Peureulak) Sultanligi | Perlak (Peureulak) Sultanlığı |
