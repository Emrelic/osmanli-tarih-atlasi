# BALKAN-MACAR-0081 — paket 0081, 13 madde (28 Eylül 2026)

Sevk: YILDIRIM BAYEZIT M-5359 + M-5367 düzeltmesi (H-0046 KAFKAS-KORFEZ'e gitti).
Uygulayıcı: `denetim/BALKAN-MACAR-0081-uygula.py` (kuru varsayılan · 98 işlem · count==1 · 12 dosya).
TDV/HE önbelleği: `denetim/BALKAN-MACAR-0081-tdv-onbellek/`.

## 0. Öngörü — maddeler açılmadan yazıldı (03:25), sonunda tutup tutmadığı

```
ÖNGÖRÜ (14 madde için; H-0046 çıkınca 13'e indirildi, revizyon yok)
  5 gerçek VERİ hatası · 2 KOD/sıralama kusuru · 6 teyit/açıklama
ÖLÇÜLEN
  5 gerçek VERİ hatası   H-0026 · H-0027 · H-0029 · H-0036 (Gyula) · H-0050      ✓ TUTTU
  0 doğrulanmış KOD      H-0052 yeniden üretilemedi; H-0050 kod değil VERİ çıktı  ✗ TUTMADI
  4 teyit                H-0025 · H-0037 · H-0047 · H-0049                         ~
  3 bilgi-boşluğu görüntüsü (kaynak yok)  H-0034 · H-0041 · H-0048 (tek sınıf: Lugoş __BOSLUK__)
```
Çürüyen kısım: "aynı gün" şikâyetini (H-0050) kod sanmıştım — kusur, üç maddenin
`1603-01-01` yıl koduna yığılmasıydı; gezinme kodu doğru çalışıyor.

## 1. Kök kusur — H-0026'nın Macaristan tarafı (koordinatörün istediği ölçüm)

`habsburg` künyesinin 464f91fd'de düzeltilen hatası Macaristan'da **üç katmanda** duruyordu:

| katman | ölçüm | çare (uygulayıcıda) |
|---|---|---|
| künye `macaristan` | `t:1526-08-29` — devlet Mohaç GÜNÜ ölüyordu | `t:1527-01-01` (ikinci kralın seçimi · Hırvatlar 1527 YIL); `son` maddesi Mohaç'tan ayrıldı |
| künye `macaristan-habsburg` | `f:1526-08-29` — Habsburg Macaristanı Mohaç GÜNÜ doğuyordu | `f:1526-12-17` (TDV suleyman-i/budin: Ferdinand'ın ilânı) |
| yerleşim `s:avusturya` | **54 kayıt** Mohaç GÜNÜ Habsburg'a geçiyor: 21 Macar · 9 Hırvat-Slavon · 24 Avusturya/Bohemya/Silezya | Macar 21 → `1526-12-17` · Hırvat 9 → `1527-01-01` (TDV hirvatistan) · kalan 24 **DOKUNULMADI** (§5-S1) |
| yerleşim `v:` Szapolyai | **10 kayıt** tâbiliği `1526-09-01`/`08-29`de başlatıyor — Szapolyai **10 Kasım 1526**'da seçildi; 70 gün önce tâbi olamaz | `1526-11-10` (seçim = ALT SINIR; tanınmanın günü TDV'de yok) |
| Varadin | `1526-09-01` Osmanlı — TDV varadin: **27 Temmuz 1526** (Mohaç'tan ÖNCE) | `1526-07-27` |

🔴 **Tâbiliğin başı 1529 mu 1526 mı — iki okuma, çelişki DEĞİL (D211 ⑥):** `olaylar_ek.js`
1526-09-01 maddesinin eski notu "TDV'ye göre himaye 1529'da kuruldu" diyordu. TDV
suleyman-i cümlesi (10 Kasım seçiminin hemen ardından, 23 Eylül 1527'den ÖNCE): *"Budin'i
boşaltan Osmanlılar da … Szapolyai'nin krallığını kendilerine tâbi olması kaydıyla
tanımıştı."* 1529, Budin'in Szapolyai'ye **teslimidir** (TDV budin/macaristan), tâbiliğin başı
değil. Not güncellendi.

**Debrecen (H-0026'nın asıl sorusu) — kronolojik akıbet:**
```
1281 → 1526-11-10  Macaristan Krallığı                     (künye)
1526-11-10 → 1541-08-29  Szapolyai krallığı, Osmanlı'ya tâbi   (TDV suleyman-i — alt sınır)
1541-08-29 → 1660-08-27  Erdel Prensliği, Osmanlı'ya tâbi       (atlas zinciri Varad ile)
1660-08-27 → 1692-06-05  Osmanlı (Varad eyaleti)                (atlas zinciri Varad ile)
1692-06-05 → 1918       Habsburg · 1918 → Macaristan
```
⚠️ Debrecen'in KENDİ TDV maddesi yok (slug 302) — 1541 sonrası halkaları Varad'dan devralınmış
(kaydın kendi beyanı). Bugün KUNYE-ANADOLU-0081 bu kaydı 08-29 → 09-01'e çekmişti; ben 09-01 →
11-10'a çektim — aynı kayda iki oturum dokundu, sıralı ve aynı yönde.

## 2. Madde madde

**H-0025 — Braşov 1526-01-01: kimin?** → **Macaristan Krallığı** (Erdel voyvodalığı, güneydoğu
Sekel/Sas bölgesi). Ne Eflak ne Osmanlı. Harita doğru. TDV erdel: *"Buranın en önemli şehri …
Kronstadt adıyla kurulan Braşov'dur."* Sonrası: 1526-11-10 Szapolyai (tâbi) · 1541 Erdel
Prensliği (tâbi) · 1687 Habsburg. Emre'ye gösterilecek cevap budur; KORIDOR-0081 H-0029 cevabı
("koridor değil") DOĞRUYDU ama *"kimin?"* sorusuna değil *"koridor mu?"* sorusuna cevaptı —
tekrarın sebebi bu. Orsova hâlâ açık: ad geçen TDV cümlesi yok.

**H-0026 — Mohaç'ı kazanınca toprak neden Osmanlı görünüyor?** → görsel 1526-08-29,
Debrecen peteği: tâbilik Mohaç GÜNÜ başlıyordu (KUNYE-ANADOLU-0081 09-01'e çekti). Kök
§1'de; düzeltme uygulayıcıda.

**H-0027 — Cetin günü (1527-01-01) Gospić Osmanlı mı?** → **HAYIR, HATA.** Gospić'in `d:`
başı `1527-01-01` bir YIL damgasıydı (HE: "God. 1527.") ve Cetin günüyle çakışıp Hırvatların
Ferdinand'ı seçtiği gün Gospić'i Osmanlı gösteriyordu. Lika'nın düşüşü Mayıs 1527 sonu (HE
Udbina). Çare: `avusturya 1527-01-01→1527-05-01` + `d:1527-05-01` (gün komşudan: Udbina · HE
'potkraj svibnja 1527' · olaylar_p0069 aynı yıl Gospić'i anar, ~31 km).
🔴 **Görseldeki Trieste→Gospić kızıl şeridin asıl sebebi NOKTASIZLIK:** Kvarner kıyısında
(Rijeka · Senj · Otočac · Brinje · Karlobag) **hiç yerleşim yok**; Gospić peteği kıyıyı
Trieste'ye kadar yutuyor (§2). Veri düzelse de 1527-05 sonrası kıyı Osmanlı boyanacak — nokta
şart. HE maddeleri önbellekte (`he-*.html`); Rijeka 1466'dan Habsburg, Senj 1537'den uskok
merkezi. Nokta yazmadım (§5-S2).

**H-0029 — 1534: Budin eksklav görünüyor.** → **HATA, ama Budin değil çevresi yanlış.** Budin
1529-1541 Szapolyai'nin tâbi krallığının BAŞKENTİdir (TDV budin) — doğru. Çevresindeki yeşil
"MACARİSTAN", künyesi Mohaç'ta biten `macaristan` kimliğinin **19 kayıtta 1527-1566'ya
uzamasıdır** (Kalocsa · Hatvan · Vaç · Solnok · Şimontorna · Segedin · Peçuy · Estergon ·
İstolni Belgrad · Temeşvar · Gyula · Banaluka · Yayça · Klis · …). Aynı krallık iki renkte
çiziliyor: tâbi noktalar kızıl, künye aşımı noktalar yeşil ⇒ başkent "ada" gibi.
Nasıl görünmeli: Szapolyai'nin payı TEK tâbi bölge, Ferdinand'ın payı Habsburg.
TDV'si olan üç şehir düzeltildi: **Estergon** 1530'dan Habsburg · **Segedin** 1530-1541
Szapolyai, 1541-1543 Ferdinand · **Peçuy** 1527 Ferdinand, 1532 Szapolyai, 1541 Ferdinand.
Kalan ~12 kayıt: TDV slug'ı YOK (kalocsa · hatvan · vac · solnok · simontorna · gyula → 302) ⇒
`bulunamadi`, künye aşımı BEYANLI kalır (§5-S3).

**H-0034 (1554) · H-0041 (1566) · H-0036'nın Lugoş yarısı (1555) — Lugoş enklavı** →
**tek sınıf: bilgi boşluğu görüntüsü.** Lugoş `1554-04-07→1596-05-10` beyanlı `__BOSLUK__`
(M-4623): 1554'te hâlâ Osmanlı sancağı (Bánlaky), 1596'da Erdel bânında; aradaki devir yılı
kaynakta yok. Harita bunu "elden çıkmış enklav" gibi çiziyor. TDV timisvar'ın 1658 cümlesi
(*"Lugoş ve Karánşebeş tekrar fethedilip"*) Lugoş'un 1658'den önce Osmanlı'dan ÇIKTIĞINI
kanıtlar ama YILINI vermez. Müstakil de değil enklav da değil: Erdel Prensliği'ne
bağlıydı, geçiş yılı `bulunamadi`. Tarandı: TDV lugos · karansebes · sebes-sancagi ·
lugos-sancagi · izabella · janos-zsigmond · petrovics → hepsi 302; erdel · yanova · timisvar
okundu. Çare yazmadım (yıl uydurmak D210).
📌 Öneri: Oborni Teréz (Erdel prensliğinin kuruluşu, 1556) akademik kaynak olarak aranmalı.

**H-0036 — 1555: Gyula ve Lugoş Osmanlı değil miydi?** → **İKİSİ DE DEĞİLDİ.** Gyula
1566-09-02'de düştü (kayıt), öncesi atlasta `macaristan` = künye aşımı (gerçekte Ferdinand'ın
kalesi ama TDV gyula/gole/gule 302 ⇒ `bulunamadi`). Lugoş: yukarıda.

**H-0037 — Kesîrî (1557): bağlı beylik mi?** → **EVET.** TDV hadramut: 1538'de Hadramut Yemen'e
bağlı Osmanlı sancağı oldu, *"ancak … idareyi ellerinde bulunduranlar Kesîrî kabilesi reisleri
idi"*; 1566 hükmü Sultan Bedr'i *"Hadramut sancağının hâkimi"* der — hükümet sancağı türü tâbi
hanedan. `v:` doğru. Eksik: künye bağlantısı — `kesiri-sultanligi`ye `tabi:` ve Seyûn `v:`ne
`kid:` eklendi.

**H-0047 — voyvodalık isyanında bölgeler Osmanlı'dan çıkmış mı sayılmalı?** → **HAYIR, zaten
doğru çiziliyor.** Emre'nin 13 Eylül C2 kararı: tâbi zemin korunur, üstüne ayrı isyan
taraması (`data/isyan_tarama.js`, TDV + History of Transylvania + Papp 2021 + Tóth 2011).

**H-0048 — 1596-06-20: Lugoş maddesiz Osmanlı'ya katılıyor.** → **Katılış değil, bilgi
sınırı.** 1596-05-10 kırılması `__BOSLUK__`→Erdel tâbi; bu bir olay değil, ilk kaynaklı Erdel
tanıklığının günü (Palatics György lugosi bán). Madde yazılırsa olay UYDURULUR. Kırılmanın
±30 günde maddesi VAR (olaylar_senusi_0919 'Lippa kuşatmasının kalkması'). Kalıcı çare
H-0034'ünkiyle aynı: devir yılının kaynağı. (DUNYA-KRONO-0081 aynı sonuca vardı.)

**H-0049 — üç voyvodalığın isyan tarihleri; 1602'de yalnız Erdel taralı** → **doğru.**
```
Eflak   isyan     1594-11-01 → 1600-11-15   (TDV eflak · HoT: Argeş/Bucov yenilgisi)
Boğdan  isyan     1594-11-01 → 1595-11-01   (Aron → Movilă; Lehistan himayesi, Osmanlı tanıdı)
Boğdan  isyan     1600-05-01 → 1600-09-01   (Mihai'nin Boğdan hâkimiyeti)
Erdel   isyan     1594-08-28 → 1599-03-29   (Zsigmond Báthory)
Erdel   isyan     1599-10-28 → 1600-09-18   (Mihai, Sellenberk → Miriszló)
Erdel   habsburg  1600-09-18 → 1601-02-01   (Basta)
Erdel   habsburg  1601-08-03 → 1605-09-14   (Goroszló → Bocskai)
```
1602-02-15'te açık tek pencere Erdel/Habsburg ⇒ görüntü doğru. ⚠️ Açık soru: Eflak'ta Radu
Şerban (1602-1611) Habsburg yanlısıydı; tarama 1602'den sonra Eflak'ı temiz gösteriyor.
TDV eflak'ta Radu Şerban cümlesi `bulunamadi`.

**H-0050 — 1603'ün üç maddesi aynı gün** → **VERİ HATASI.** Üçü de `t:"1603-01-01"`; ⏭ onları
①②③ diye sırayla gösteriyor (kod doğru) ama harita üçünde de aynı gün. İkisinin kendi
metni daha ince tarih veriyordu:
```
Luristan      1603-01-01  YIL — kaynak yalnız yıl (dokunulmadı)
Deli Hasan    1603-01-01 → 1603-03-01 kesinlik:ay   (maddenin kendi 'Mart 1603'ü)
Yeni Cami     1603-01-01 → 1603-12-20               (TDV mehmed-iii '16 Receb’de (20 Aralık) vefat')
```
⚠️ Deli Hasan: Şevval 1011 ≈ 14 Mart–12 Nisan 1603; ay kodu `03-01` hicrî ayın 13 gün ÖNÜNDE.
Alternatif `1603-04-01` (hicrî ayın içinde ama madde "Mart" diyor) — seçim senin.
🔴 **TDV ile ÇELİŞKİ (dokunmadım, dosyalar bende değil):** III. Mehmed'in vefatı TDV'de
**20 Aralık 1603**; atlasta `padisahlar.js` `olum:"1603-12-22"` ve `olaylar_ek5.js:218`
`1603-12-22`. Yeni Cami maddesi uygulanırsa ölümden 2 gün ÖNCE görünmez ama vefat maddesinden
önce görünür — vefat günü de düzelmeli.

**H-0052 — Hotin'den ⏭ iki maddeyi atlıyor** → **yeniden üretilemedi.** Yerel r10460'ta üç
yolla sınandı (doğrudan `ileriAdim`, düğme tıklaması, 1 sn içinde çift tık): 679 Hotin → 680
II. Osman'ın katli → 681 Genç Osman → 682 I. Mustafa, hiçbiri süzülmüş değil. Belirti ("birden
iki üç madde geçerek") ARAYUZ-0077'nin H-0021 tık birikmesinin tarifidir; düzeltmesi
(`agirAdim` kapısı, 46aaf6e7) 27 Eylül 11:59'da indi ve yayında (`app.js?v=r10460`). Emre'ye
sorulacak: Hotin'e hangi yolla gelindi (liste · sürgü · odak devleti · olay-olay oynatma)?

## 3. Sınama — kum havuzunda (data/'ya dokunulmadı)

`data/`+`arac/` kopyasına uygulandı, `denetle.py` önce/sonra:
```
                      ÖNCE                 SONRA
Değişmez 2            591 kırılma, 0 açık  592 kırılma, 0 açık
Değişmez 2s           180 açık · 158 borç  180 açık · 157 borç
Değişmez 4c (aşım)    128                  125        ⇒ BEKLENEN_ASAN 125'e indirilebilir
öteki satırlar        aynı
SONUÇ                 temiz                temiz
odak kapısı           ODAKSIZ 485 · BEYANLI 669 · kırık atıf 1 (Ogaden, önceden) — değişmedi
```
Node ile 12 dosyanın hepsi ayrıştı; hedef kayıtlar basılıp gözle doğrulandı.
⚠️ Değişmez 8 kum havuzunda ÖLÇÜLEMEDİ (motor çıktısı kopyalanmadı); koşu sonrası sen ölçersin.
⚠️ Harita görüntüsü koşu istiyor (geometri üretilmiş dosyada) — önizlemede doğrulanamaz.

## 4. Değişen dosyalar (uygulayıcı yazar, BEN YAZMADIM)
`devletler.js` · `olaylar_ek.js` (+5 madde, 1 not) · `olaylar_ek8.js` · `olaylar_ek14.js` ·
`yerlesimler.js` · `yerlesimler_ek.js` · `yerlesimler_ek29.js` · `yerlesimler_ek_macaristan.js` ·
`yerlesimler_a78_avrupa.js` · `yerlesimler_p77_avrupa.js` · `yerlesimler_kdmacar.js` ·
`yerlesimler_nokta_ortadogu_0917.js`. Motor tuzu dosyalarına dokunmaz.

## 5. Kapsam dışı bulgular (yazmadım, sahibine)
- **S1** 24 Avusturya/Bohemya/Silezya kaydı (Innsbruck · Linz · Prag · Breslau · …) Mohaç GÜNÜ
  `almanya`→`avusturya` geçiyor. Avusturya veraset toprakları yüzyıllardır Habsburg'du;
  Bohemya Ferdinand'ı 1526 Ekim'de seçti. Aynı "savaş gününe bağlanmış devir" sınıfı.
- **S2** Kvarner noktasızlığı (H-0027): Rijeka · Senj · Otočac · Brinje · Karlobag.
- **S3** ~12 kayıt hâlâ `macaristan` künyesini aşıyor (TDV maddesi yok).
- **S4** Mohaç ve Baç `d:1526-09-01` — TDV mohac: sancak 1541'de kuruldu, 1526'da şehir yakılıp
  bırakıldı. 1526-1541 doğrudan Osmanlı dayanaksız; sahibi `bulunamadi`.
- **S5** III. Mehmed vefatı: TDV 20 Aralık, atlas 22 Aralık (`padisahlar.js`, `olaylar_ek5.js`).
- **S6** Mukalla `bos:"devletsiz"` gerekçesi Körfez şeyhlikleri için yazılmış; TDV hadramut
  1538'de Hadramut kıyısını Osmanlı idaresinde sayıyor.
- **S7** Emre'nin 2 Eylül `himaye:true` kararı ("Mohaç sonrası Macaristan himaye") **hiçbir**
  Szapolyai `v:` dönemine uygulanmamış (VERI-YAPISI "5 kayıt hazır" diyor). Benim eklediğim iki
  dönem de tutarlılık için `himaye`SİZ bırakıldı — karar tümüne birden uygulanmalı.
- **S8** Radu Şerban (Eflak 1602-1611) — H-0049.
