# KRONO-CELISKI-0929 — AYNI OLAY, İKİ GÜN: KAYNAKLA HÜKÜM

29 Eylül 2026 · görev: koordinatör (KRONO-BALKAN-B-0929'un devamı) · liste: KRONO-BAGLAMA-0929
(M-5443, `denetim/KRONO-BAGLAMA-0929-EZME.json` `sinif=="YIL+YAKIN"`, 14 satır).
🔴 **UYGULAMA YAPILMADI — yalnız hüküm.** Düzeltmeleri KRONO-BAGLAMA-0929 birleştirmeyle
birlikte uygular. TDV gövdeleri: `denetim/KRONO-CELISKI-0929-tdv-onbellek/`.

## Yöntem

1. Her çiftin iki maddesi okundu; önce **aynı olay mı** diye bakıldı (VERI-YAPISI §59: *"önce
   takvimi, sonra OLAYIN KENDİSİNİ ölç"*).
2. Aynı olaysa kaynak aranır: Osmanlı/İslâm dünyası için TDV birincil; susarsa akademik.
3. **Takvim:** atlasın tarihleri Jülyen, çevirme yapılmaz (VERI-YAPISI §59). Fark 10-13 gün
   çıkarsa önce takvim sorulur. Bu 14 çiftte takvim farkına uyan aralık **çıkmadı** (farklar
   1 · 2 · 21 gün ve ay/yıl hassasiyeti) — ama iki vakada kaynağın takvimi not edildi.
4. Künyenin günü de dosyanın günü de KAYNAK DEĞİLDİR (CLAUDE.md §4). İkisi de yanlış olabilir.

## Özet — 14 çift, dört sınıf

| # | Künye | Künye günü | Dosya günü | Sınıf | Hüküm |
|---|---|---|---|---|---|
| 1 | venedik | 1669-09-27 | 1669-09-06 | 🔴 gerçek çelişki | **09-06** (TDV) — künye düzelir |
| 2 | bizans | 1331-03-02 | 1331-03-01 | 🔴 gerçek çelişki | **03-02** (TDV) — dosya düzelir |
| 3 | bizans | 1422-06-10 | 1422-06-08 | 🔴 gerçek çelişki | **ölçülemedi** — TDV yalnız ay veriyor |
| 4 | kirim | 1571-05-24 | 1571-01-01 | 🟡 hassasiyet (künye daha kesin) | **05-24** (Jülyen, hesapla doğrulandı) — dosya düzelir |
| 5 | kirim | 1648-05-01 | 1648-05-16 | 🟡 ay kodu ↔ adlandırılmış olay | **05-16** Sarı Sular (Gregoryen kaynak) — künye düzelir |
| 6 | venedik | 1684-01-01 | 1684-03-05 | 🟢 farklı olay | mükerrer değil; künye METNİ hatalı |
| 7 | macaristan | 1514-07-15 | 1514-05-01 | 🟢 farklı olay | mükerrer değil (bastırılma ↔ başlama) |
| 8 | fransa | 1536-01-01 | 1536-02-18 | 🟡 hassasiyet | dosyanın günü (künye yalnız yıl) |
| 9 | italya | 1866-01-01 | 1866-06-20 | 🟢 farklı olay | mükerrer değil (kazanma ↔ savaş ilanı) |
| 10 | portekiz | 1552-01-01 | 1552-08-01 | 🟡 hassasiyet | dosyanın ayı; `08-01` ay kodu olabilir — gün iddiası sayılmamalı |
| 11 | isvec | 1714-02-01 | 1714-07-12 | 🟢 farklı olay | mükerrer değil; künye günü dayanaksız |
| 12 | gurcistan | 1762-01-01 | 1762-01-08 | 🟡 hassasiyet | dosyanın günü (künye yalnız yıl) |
| 13 | katalan | 1303-01-01 | 1303-09-01 | 🟡 hassasiyet | dosyanın ayı (`09-01` ay kodu) |
| 14 | naksa-dukaligi | 1537-01-01 | 1537-11(-01) | 🟡 hassasiyet | dosyanın ayı (`11` ay kodu) |

**Gerçek gün çelişkisi 3 (1-3)**, ikisi TDV ile hükmedildi, biri ölçülemedi. 2 çift (4-5)
hassasiyet farkına benzese de metinleri ve kaynakları farklı gün söylüyor; onlara da hüküm
verildi. 4 çift farklı olay (mükerrer değil, birleştirmede ikisi de kalmalı). 5 çift saf
hassasiyet farkı (künye yıl biliyor, dosya gün/ay).
BAGLAMA'nın ön ayrımıyla (M-5443) uyuşuyor; tek fark: 4 ve 5'i o "gerçek çelişki" sayıyordu,
burada biri hassasiyet (4), biri ay kodu ↔ olay (5) çıktı — hüküm yine verildi.

---

## Ayrıntı — gerçek çelişkiler

### 1 · Kandiye'nin teslimi — `venedik` künyesi 1669-09-27 / dosya 1669-09-06 → **09-06**

- TDV `kandiye`: *"… anlaşma yoluyla şehri teslim aldılar (9 Rebîülâhir 1080 / 6 Eylül 1669)."*
- TDV `girit`: *"… 9 Rebîülâhir 1080'de (6 Eylül 1669) imzalanan on sekiz maddelik bir teslim
  anlaşmasıyla sona erdi."*
- İki ayrı TDV maddesi aynı günü veriyor. Fark 21 gün ⇒ Jülyen/Gregoryen farkı (1669'da 10 gün)
  DEĞİL. 27 Eylül'ün dayanağı okunan gövdelerde **bulunamadı** (aynı sonuç
  `data/ekokuma_savas3.js`teki kartın notunda da ölçülmüş: "27 Eylül'ün dayanağı okunan
  gövdelerde YOK").
- Çekirdek (`olaylar.js:95`) ve harita (Kandiye `yerlesimler.js:535`) zaten **1669-09-06**.
- **Düzelecek:** `data/devletler.js:368` `venedik.kronoloji` 1669-09-27 → 1669-09-06.
- ⚠️ **Yan bulgu — harita:** İsfakiye (`yerlesimler.js:1710`) ve Sitiye (`:1711`) `venedik`
  dönemini **1669-09-27**de bitiriyor; kayıtların dayanağı yalnız `kaynak:"girit"` ve TDV
  `girit` 27 Eylül'ü vermiyor. Bu 21 günlük aralıkta Girit haritası "Kandiye Osmanlı, doğu ve
  güney uçları Venedik" gösteriyor. Hüküm bu paketin değil (Oturum 0'ın dosyası) — ölçüm
  olarak bildiriliyor.

### 2 · İznik'in teslimi — `bizans` künyesi 1331-03-02 / dosya 1331-03-01 → **03-02**

- TDV `iznik`: *"… şehir Orhan Bey'in eline geçmiştir (2 Mart 1331)."*
- 1 günlük fark takvimle açıklanamaz (1331'de Jülyen-Gregoryen farkı 8 gün).
- Çekirdek (`olaylar.js:16`) ve harita (İznik `yerlesimler.js:157`) zaten **1331-03-02**.
- **Düzelecek:** `data/kronoloji_bizans.js` 1331-03-01 "İZNİK DÜŞTÜ" → 1331-03-02.

### 3 · II. Murad'ın İstanbul kuşatması — `bizans` künyesi 1422-06-10 / dosya 1422-06-08 → **ölçülemedi**

- TDV `murad-ii`: *"Murad bunun arkasından Bizans üzerine yürüdü (Receb 825 / Haziran 1422).
  Elli günden fazla süren kuşatma sonuç vermedi."* ⇒ TDV **yalnız ay** veriyor.
- ⚠️ TDV'nin hicrî ayı iki günle de uyuşmuyor gibi: 1 Receb 825 yaklaşık 21 Haziran 1422'ye
  düşer (kaba hesap, **çeviri değil, yön göstergesi**); 8 ve 10 Haziran ikisi de Receb'den önce.
  Bu, iki günün de kuşatmanın *başlangıcı* değil öncü kuvvetin *gelişi* olabileceğine işaret
  eder — ama bunu doğrulayan satır bu turda okunmadı.
- Çekirdek `olaylar_ek.js:113` de 1422-06-10.
- **Hüküm: ölçülemedi.** İki gün de bu turda kaynağa bağlanamadı. Öneri: birleştirmede iki
  madde **tek güne indirilsin ama gün değiştirilmesin**; `gun:"Haziran 1422 (TDV yalnız ay
  verir; 10 Haziran kaynağı bulunamadı)"` beyanı eklensin. Bizans kaynağı (Sphrantzes /
  Kananos) bir akademik eserde satırıyla okunursa gün oradan alınır.

### 4 · Devlet Giray'ın Moskova'yı yakması — `kirim` künyesi 1571-05-24 / dosya 1571-01-01 → **05-24**

- TDV `devlet-giray`: *"Devlet Giray 1571'de Oka suyunda Rus müdafaa hattını yarıp Moskova
  önlerine geldi ve burayı ateşe verdikten sonra geri döndü."* ⇒ TDV yalnız yıl.
- Dosya (`kronoloji_kirim.js:207`) bunu doğru okuyup `01-01` yazmış ve kendi notunda "gün
  TDV'de verilmiyor; eski kayıtla (1571-05-24) örtüşüyor" demiş.
- **Doğrulama (takvim yöntemi, VERI-YAPISI §59'daki Tiflis haftagünü sınavının eşi):** yangın
  literatürde Rus kroniklerine dayanarak Göğe Yükseliş (Voznesenie) bayramına konur. Jülyen
  1571 Paskalyası **15 Nisan** (hesaplandı) ⇒ Göğe Yükseliş = Paskalya + 39 gün =
  **24 Mayıs 1571, Perşembe** (hesaplandı; bayram her zaman perşembedir ✓). Rus kaynağı
  Jülyen; atlas da Jülyen ⇒ çevirme gerekmez.
- **Hüküm: 1571-05-24.** Künye doğru; dosya `01-01`den `05-24`e alınmalı, `kaynak:`a
  "gün: Rus kronikleri, Göğe Yükseliş günü (Jülyen); hesapla doğrulandı" düşülmeli.
  ⚠️ Kronik satırı bir akademik eserde okunmadı — hüküm hesaba dayanıyor, bu `kaynak:`ta
  açıkça yazılmalı.

### 5 · Tugay Bey ve Hmelnitski — `kirim` künyesi 1648-05-01 / dosya 1648-05-16 → **05-16**

- Künye: "Tugay Bey kuvvetleri Hetman Hmelnitski'nin Kazak ayaklanmasına destek verdi" —
  günsüz bir süreç cümlesi, `05-01` ay kodu görünümünde.
- Dosya (`kronoloji_kirim.js:311`): "… Kazak ayaklanmasını (Sarı Sular) destekledi" —
  adlandırılmış olay: **Sarı Sular (Jovti Vodi) Savaşı**, Lehistan ordusunun teslimiyle biten
  gün 16 Mayıs 1648.
- TDV `islam-giray-iii` yalnız "1648-1653 yılları arasında Kazaklar'la beraber Lehistan'a
  yapılan seferler" diyor — gün **vermiyor**.
- ⚠️ **Takvim notu:** 16 Mayıs, Lehistan'ın 1582'den beri kullandığı **Gregoryen** takvimde
  verilen gündür (Jülyen'de 6 Mayıs). VERI-YAPISI §59 gereği çevrilmez, `kaynak:`ta
  belirtilir.
- **Hüküm: 1648-05-16** (dosya). Künyenin `05-01`i hiçbir kaynağa bağlı değil ve aynı olayı
  anlatıyor — birleştirmede dosya maddesi kalmalı. Gün akademik literatürden (O. Subtelny,
  *Ukraine: A History*); TDV gün vermiyor.

---

## Ayrıntı — farklı olay (mükerrer DEĞİL; birleştirmede ikisi de kalır)

- **6 · venedik 1684:** künye "Kutsal İttifak Savaşı'nda Mora'yı fethetti (1699'a dek)",
  dosya 1684-03-05 "Kutsal İttifak'a katılma". Farklı olay. ⚠️ Ama künyenin **metni** hatalı:
  TDV `mora`: *"1095 (1684) ile 1097 (1686) yılları arasındaki savaşlar sırasında Francesco
  Morosini … bütün yarımadayı ele geçirdi"* — fetih 1684'te bir günde olmadı. Künye maddesi ya
  1684-03-05'e (ittifak) indirgenip dosyaya bırakılmalı ya da metni "1684-1686 fethi" diye
  düzeltilmeli.
- **7 · macaristan 1514:** Dózsa ayaklanmasının başlaması (dosya) ↔ bastırılması (künye).
  İki ayrı an. Günler bu turda kaynakla sınanmadı (hüküm gerektirmiyor).
- **9 · italya 1866:** savaş ilanı (dosya 06-20) ↔ Venedik'in kazanılması (künye, yıl).
  İki ayrı an; künyenin yıl kodu kalabilir.
- **11 · isvec 1714:** "terk etme izni verildi" (dosya 07-12) ↔ "Osmanlı topraklarını terk
  etti" (künye 02-01). Farklı an. ⚠️ Künyenin `02-01`i dayanaksız: XII. Karl 1714 başında hâlâ
  Dimetoka'daydı; ülkeden ayrılışı sonbahardır. Gün bu turda kaynakla okunmadı ⇒ künye maddesi
  için öneri: `1714-01-01` + `gun:"1714 sonbaharı (gün doğrulanmadı)"` ya da doğrulanmış gün.

## Ayrıntı — hassasiyet farkı (çelişki DEĞİL)

8 fransa · 10 portekiz · 12 gurcistan · 13 katalan · 14 naksa: künye yalnız yıl biliyor
(`YYYY-01-01`), dosya gün ya da ay veriyor. Birleştirmede **dosyanın hassasiyeti** kalmalı —
şartıyla: dosyanın `kaynak:` alanı o günü/ayı gerçekten destekliyorsa. ⚠️ 10, 13, 14'te
dosyanın `-01` günü **ay kodu** (`1552-08-01`, `1303-09-01`, `1537-11`) — D213: "ayın 1'i" ile
"ay biliniyor" ayırt edilemez; `gun:` alanı yoksa eklenmeli. Bu beş çiftin günleri bu turda
kaynakla ayrıca sınanmadı.

---

## Ek bulgular — 14'ün dışında, `EZME-CAPRAZ.json` `AYNI_YIL` (45) taranırken çıkan

Görev listesinde değil; ölçüldü, hüküm önerisi:

| Künye | Künye | Dosya | Kaynak | Hüküm |
|---|---|---|---|---|
| timurlu | 1449-01-01 "Uluğ Bey tahta çıktı" | 1449-10-25 "öz oğlu tarafından öldürüldü" | TDV `ulug-bey`: "Timurlu hükümdarı (1447-1449)" | 🔴 künye YANLIŞ YIL: tahta çıkış **1447** (Şâhruh'un ölümü). 1449 ölüm yılıdır. |
| rodos-sovalyeleri | 1522-12-25 "ada teslim edildi" | 1522-06-26 (farklı olay) | TDV `rodos`: "1 Safer 929'da (20 Aralık 1522) … Rodos'u fethetti" | 🔴 künye **1522-12-20**'ye; 25 Aralık'ın dayanağı bulunamadı |
| almanya | 1918-11-11 "İmparatorluk yıkıldı, cumhuriyet ilan edildi" | 1918-11-09 "II. Wilhelm'in tahttan çekilmesi ve Cumhuriyet ilanı" | akademik (cumhuriyet ilanı 9 Kasım; 11 Kasım mütarekedir) | 🟡 künye **11-09**'a; 11 Kasım başka olay |
| safevi ↔ akkoyunlu | safevi künyesi 1501-07-01 "Tebriz'i aldı" | kronoloji_akkoyunlu 1501-04-01 "Şah İsmâil Tebriz'e girdi" | TDV `safeviler`/`tebriz` yalnız **907 (1501)** | ⚪ **ölçülemedi** — aynı olay, iki farklı ay, ikisi de kaynaksız (TDV yıl verir) |

---

## İkinci iş — KRONO-BALKAN-B-0929 hükümleri buraya taşındı (tek yerde dursun)

### 6 · Sırbistan özerklik fermanı — üç kayıt üç gün → **1830-10-17**

| Kayıt | Gün |
|---|---|
| `data/savaslar.js:550` | 1830-08-30 |
| `data/devletler.js` `sirbistan-prensligi.kronoloji` | 1830-08-30 |
| `data/kronoloji_sirbistan.js:244` | 1830-10-17 ✓ |
| `data/olaylar_ek.js:73` (çekirdek) + harita Kragujevac · Çaçak · Yagodina `v:` başlangıcı | 1830-11-08 |

TDV `sirbistan`: *"Nihayet 17 Ekim 1830'da verilen bir imtiyaz fermanıyla Sırplar muhtar bir
idare elde etti."* `olaylar_ek.js` kaynak olarak TDV `sirbistan`ı gösteriyor ama 8 Kasım
yazıyor. 30 Ağustos ve 8 Kasım için kaynak **bulunamadı**. Fark 22 ve 52 gün ⇒ takvim değil.
**Hüküm 1830-10-17**; çekirdek + harita birlikte (22 gün ±30 içinde, Değişmez 2 kırılmaz).
Ayrıntı: `denetim/KRONO-BALKAN-B-0929-DUZELTME.md` §1, `-YERLESIM-ONERI.md` §1.

### 7 · Semendire'nin ilk düşüşü — `sirp-despotlugu` künyesi 1439-08-18 → **1439-08-27**

TDV `semendire`: *"… (16 Rebîülevvel 843 / 27 Ağustos 1439)."* Çekirdek ve harita zaten 08-27.
**Düzelecek:** `devletler.js:884` künye maddesi ve `kronoloji_sirbistan.js:150` (künyeyi
kaynak sanıp 08-18 almış).

### Aynı paketten, daha küçük: Kruya 1478-06-15 → 06-16 (TDV `kruya`) · Hersek'in ilhakı çekirdekte 1483 → 1482 (TDV `bosna-hersek`) · Wied'in ayrılışı künye metninde "Ekim" → 3 Eylül 1914 (TDV `arnavutluk`). Ayrıntı `-DUZELTME.md` §3-§5.

---

## Düzeltme listesi — uygulayıcı için (KRONO-BAGLAMA-0929)

| Dosya | Madde | Mevcut | Olmalı | Dayanak |
|---|---|---|---|---|
| `devletler.js:368` venedik | Kandiye'nin düşüşü | 1669-09-27 | 1669-09-06 | TDV kandiye + girit |
| `kronoloji_bizans.js` | İZNİK DÜŞTÜ | 1331-03-01 | 1331-03-02 | TDV iznik |
| `kronoloji_kirim.js:207` | Devlet Giray Moskova | 1571-01-01 | 1571-05-24 | hesap (Jülyen Göğe Yükseliş) |
| `devletler.js` kirim künyesi | Tugay Bey / Hmelnitski | 1648-05-01 | birleştirmede dosyanınki (1648-05-16) kalır | akademik, Gregoryen |
| `devletler.js` timurlu | Uluğ Bey tahta çıktı | 1449-01-01 | 1447-01-01 | TDV ulug-bey |
| `devletler.js` rodos-sovalyeleri | ada teslim edildi | 1522-12-25 | 1522-12-20 | TDV rodos |
| `devletler.js` almanya | cumhuriyet ilanı | 1918-11-11 | 1918-11-09 | akademik |
| `devletler.js:884` + `kronoloji_sirbistan.js:150` | Semendire ilk düşüş | 1439-08-18 | 1439-08-27 | TDV semendire |
| `olaylar_ek.js:73` + `savaslar.js:550` + sirbistan-prensligi künyesi (+ harita) | Sırp özerklik fermanı | 08-30 / 11-08 | 1830-10-17 | TDV sirbistan |
| — | 1422 kuşatması · 1501 Tebriz | — | **ölçülemedi**: gün değiştirilmez, `gun:` beyanı | TDV yalnız ay/yıl |
