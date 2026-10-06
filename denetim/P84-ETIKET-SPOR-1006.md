# P84-ETIKET-SPOR-1006 — H-0004 sınıf taraması: spor ve kültür-sanat nereye düşüyor

6 Ekim 2026 · worktree `C:\atlas-p84-spor` @ `origin/makine/umit` `cdc1ccea` · UYGULANMADI, commit yok.
Öngörü ölçümden önce yazıldı: `denetim/P84-ETIKET-SPOR-1006-ONGORU.md`.
Ölçüm aracı (SALT OKUR, kökü `__file__`den bulur): `denetim/ARAC-P84-ETIKET-SPOR-1006.js`
→ ham çıktı `denetim/P84-ETIKET-SPOR-1006-HAM.json`.
Mükerrer kapısı: `denetim/` "spor/Kırkpınar/konu-spor/H-0004" diye içerikle tarandı. `konu-spor`
başlığı PAKET-ETIKET-UYGULA-0913'te açılmış (9 madde), EKO-TAMAMLA kartı 0052/H-0029'da yazılmış.
**Ek okuma TÜRÜ sorusu için yazılmış bir hüküm YOK** ⇒ mükerrer değil.
Görsel: H-0004'ün görseli yok (`PARTI-ham.md` "—"). Metin yetti.

## 0. ASIL BULGU: "teknik/bilimsel" maddenin etiketi DEĞİL, ek okuma KARTININ türü
- ÖLÇÜM: Kırkpınar 1357 maddesi (`data/olaylar_ek14.js:93`, `paket_03.js`te paketli) ZATEN
  `k:"spor"` · `etiket:["spor","konu-spor"]` taşıyor ⇒ kronoloji süzgecinde Spor'a düşüyor.
- ÖLÇÜM: Maddeye bağlı tek ek okuma kartı `EKOKUMA_TAMAMLA` · `teknik-osmanli-spor-gelenekleri`
  (`data/ekokuma_tamamla.js:68`, `olay:["1357-06-01|Kırkpınar","1504-01-01|Kırkpınar"]`) **`tur:"teknik-bilimsel"`**.
  Akordeon satırının üst yazısı `_EK_UST_KISA["teknik-bilimsel"] = "TEKNİK BİLİMSEL"` (`js/app.js:11746`).
- HÜKÜM: Emre'nin gördüğü şey bu. Ek okuma türleri listesinde (`EKOKUMA_TUR`, `js/app.js:11471`)
  spor ya da kültür-sanat türü yok; yazar en yakın türü seçmiş.

## 1. Süzgecin bugün tanıdığı değerler (dosya:satır)
Üç ayrı eksen var. Üçü birbirinden bağımsız:
| Eksen | Yer | Spor | Kültür-sanat |
|---|---|---|---|
| ① `k:` tek değerli grup (`KONU_GRUPLARI` + `TUR_GRUP`) | `js/suzgec.js:59`, `:280-282` | `spor` → **`kultur` "Kültür-bilim"** grubu | `kultur` → aynı grup |
| ② `etiket:` çok değerli 26 başlık (`KONU_BASLIKLARI`) | `js/suzgec.js:345-372` | `konu-spor` "Spor" (`:360`) ✓ | `konu-sanat` "Sanat" (`:358`) · `konu-kultur` "Kültür" (`:359`) ✓ |
| ③ ek okuma kartı `tur` (`EKOKUMA_TUR`) | `js/app.js:11471-11557` | **YOK** | **YOK** (`edebiyat` var) |

- ① ve ② için **yeni değer GEREKMİYOR**: `konu-spor`, `konu-sanat`, `konu-kultur` tanımlı ve sayılıyor.
  ① ekseninde spor "Kültür-bilim" grubunun içinde. Bu, 7 grupluk kaba bölüntünün bilinçli kararı
  (`suzgec.js:54` "YENİ GRUP AÇILMADI"). 26 başlık ekseninde Spor zaten ayrı.
- ③ için **iki yeni tür değeri öneriyorum**: `spor` ve `kultur-sanat`. Değeri koordinatör yazar.

## 2. Sessiz eleme (D225): ÖLÇÜLDÜ, iki yönde
Mekanizma: `ekOkumaButonlariGuncelle` yalnız `Object.keys(EKOKUMA_TUR)` üzerinde dönüyor
(`js/app.js:11585`). Tanımadığı `tur`u sayıp basmıyor, atlıyor.
Evren: `index.html`in 70 `data/*.js`i + app.js'in tembel yüklediği `_EKOKUMA_DOSYA_ADLARI` 76 dosyası
(`js/app.js:11222`, listeden okundu; diskte olup listede olmayan ekokuma/merak dosyası: 0).
804 kart · 15 tür.
| Durum | Tanımsız türde kart |
|---|---|
| bugün | **0** (negatif bulgu: bugün sessiz kayıp yok) |
| yalnız veri diff'i uygulanırsa | **2** (`spor` 1 · `kultur-sanat` 1) ⇒ iki kart **ekrandan kaybolur** |
| veri + app.js diff'i | **0** · tür sayısı 17 · söz dizimi node'da kuruldu |
⇒ **Sıra: app.js diff'i veriden ÖNCE ya da AYNI commit'te iner.** Gövde çizimi: iki tür de
`teknik-bilimsel` gibi `ekKartHtml`in SON ÇARE dalına düşer (`js/app.js` ~11949). Çizim değişmiyor.
`denetle.py`, `denetle_yayin.py` ve `arac/` içinde `teknik-bilimsel` ya da `konu-spor` sayısına bağlı kapı yok (grep ile 0).

## 3. Kronoloji maddeleri: spor ve kültür-sanat bugün nereye düşüyor
Evren: `index.html`in yüklediği bütün `data/*.js`, `{t,b}` taşıyan dizi öğeleri. Dosya adıyla süzme yapılmadı.
**10657 madde · 183 global.** Anahtar kelime eşleşmesi yalnız aday üretir. Her aday elle okundu.

### Anahtar kelimeler (normalleştirilmiş, kelime başı)
- SPOR: `gures pehlivan kirkpinar okcu kemankes okmeydani tirendaz cirit atcilik "at yaris" binicilik
  cevgen tomak matrak spor futbol olimpiya jimnasti eskrim "yuzme yaris" "kosu yaris" "menzil tas"`
  + ikinci geçiş (başlıkta): `polo yarış kulüp galatasaray fenerbahçe maç turnuva şampiyon atlet stadyum hipodrom`
- KÜLTÜR-SANAT: `minyatur nakkas tezhip hattat "hat sanat" ebru musiki muzik bestekar beste mehter tiyatro
  karagoz "orta oyun" opera konser ressam resim heykel sair siir "divan edebiyat" divani edebiyat roman
  hikaye gazel kaside mesnevi tezkire sanat sergi "mimar sinan" cini "hali dokum" kahvehane meddah
  tulumbaci "lale devri" sahaflar kutuphane muze gazete`

### Spor: 29 aday → 9 gerçek, 1 eksik, 1 ters yön
- `konu-spor` taşıyan madde: **9**. Hepsi listede:
  Okmeydanı 1453 · Kırkpınar ödülü 1504 · Kırkpınar 1357 · Bursa cirit alanı 1330 · IV. Mehmed cirit 1675 ·
  IV. Murad çelişkileri 1632 · İlk modern Olimpiyat 1896 · Manipûr polo 1859 · **Mombasa okçu savunması 1528**.
- Yanlış pozitifler (20): Sporadlar ×2 · Kemankeş (ad) ×2 · Pehlivan (atabeg adı) ×6 · Matrakçı (ad) ·
  savaşta okçu (Falkirk, Crécy ×2, Agincourt, Aljubarrota ×2) · `spor` alt dizisi d'de ×3 vb.
- **EKSİK (1):** `kronoloji_fransa.js:312` 1559 "II. Henri'nin turnuva kazasında ölümü": mızrak
  turnuvası, `konu-spor` yok. Öneri: ekle (başlık ekseni çok değerli, hânedan etiketleri kalır).
- **TERS YÖN (1):** `kronoloji_dogu_afrika.js:835` 1528 Mombasa: "5000 yerli okçuyla savunması"
  bir savaş. Okçuluk burada silah, spor değil. Öneri: `konu-spor` çıksın.
  ⚠️ Emre "okçuluk = spor" dedi. Bu madde askerî okçuluk. Hüküm koordinatörün; ben çıkarmayı öneriyorum.
- Öngörü: ~10-15 aday · eksik 3-5. Ölçüm: 18 başlık adayı · eksik 1. **Sayı tutmadı, mekanizma çürüdü:**
  etiketler dar desenle basılmamış. 9'un 9'u doğru etiketli, kusur ters yönde (1 fazla).

### Kültür-sanat: 460 aday → gerçek eksik 0
- Başlık adayı 125 · `konu-sanat`/`konu-kultur` taşımayan 46. Bunların **43'ü yanlış pozitif**
  (39 "Romanya/Romanov/Roman Mstislaviç", 2 "Divânî", 1 Hümâyun kütüphane merdiveni, 1 Siirt).
  Kalan 3 kendi başlığında doğru duruyor: kahvehane ×2 → `konu-sosyal` "Sosyal yaşam",
  Mimar Sinan'ın mimarbaşılığı → `konu-imar` "İmar ve mimari". Öneri: değiştirme.
- Yalnız açıklamada (`d`) eşleşen 335 aday · etiketsiz 168. **Tek tek okunmadı.** Sistematik örneklem
  (her 7.si, 25 madde) okundu: **0/25 gerçek eksik** (opera/roman/sanat/gazete yan anlamları,
  Sinan yapıları zaten `konu-imar`). ⇒ 168'in tamamı için "temiz" DEMİYORUM, örneklem oranı bu.
- Sayılar: `konu-kultur` 583 · `konu-sanat` 42 · `konu-spor` 9.
- Öngörü: eksik 20-40. Ölçüm: 0. Öngörü tutmadı.

## 4. Ek okuma kartları: H-0004'ün asıl sınıfı
804 kart. `teknik-bilimsel` türündeki 82 kartın hepsi başlık ve özetiyle okundu (liste aşağıda özetli):
| Konu | Adet | Öneri |
|---|---|---|
| **SPOR** | **1**: `teknik-osmanli-spor-gelenekleri` (Kırkpınar · güreş · tekkeler) | → `tur:"spor"` (DIFF) |
| **Kültür (kıyafet-statü)** | **1**: `teknik-osmanli-kiyafet-statu` | → `tur:"kultur-sanat"` (DIFF) |
| Mimari (camiler, köprüler, saraylar, cami üslupları, Lâle Devri mimarisi) | 22 | **DOKUNULMADI**: SEÇENEK, aşağıda |
| Kurum / hukuk / maliye / idare / teknoloji / ulaşım / basın / bilim | 58 | teknik-bilimsel'de kalır |

Öteki türlerde kültür-sanat KONULU kartlar var: `sebep-sonuc` hat sanatı · ebru · İznik çiniciliği · mehter;
`kimdir` padişah-sanat-zanaat; `magazin` opera; `edebiyat` 7 kart. **Bunları TAŞIMIYORUM.**
Bu türler kartın BİÇİMİNİ söylüyor, konusunu değil. `sebep-sonuc`un kendi çizim dalı var
(`js/app.js:11878`); `kultur-sanat`a taşınırsa SON ÇARE dalına düşer ve sebep/sonuç düzeni bozulabilir (ölçülmedi).
Spor konulu kart başka türde: **0** (yalnız "Kemankeş" ad eşleşmesi, yanlış pozitif).
- Öngörü: spor kartı 2-4 (hepsi teknik-bilimsel) · kültür-sanat teknik-bilimsel içinde 10-20.
  Ölçüm: spor 1 · kesin kültür-sanat 1, mimari dahil edilirse 23. Mekanizma ("yazar en yakın türü seçti") tuttu.

## 5. Diff'ler: UYGULANMADI · temel `origin/makine/umit` `cdc1ccea` · `git apply --check` üçü de temiz · CR 0
1. `denetim/P84-ETIKET-SPOR-1006-APPJS.diff`: `js/app.js` `EKOKUMA_TUR`'a `spor` "🏹 Spor" ve
   `kultur-sanat` "🎨 Kültür Sanat" (+9 satır, yorumlu). **Önce bu iner.**
2. `denetim/P84-ETIKET-SPOR-1006.diff`: `data/ekokuma_tamamla.js` iki kartın `tur`u (2 satır).
   Tembel yüklenen bir dosya, paketlenmiyor.
3. `denetim/P84-ETIKET-SPOR-1006-MADDE.diff`: `data/kronoloji_fransa.js` +`konu-spor` (Henri II) ·
   `data/kronoloji_dogu_afrika.js` −`konu-spor` (Mombasa). ⚠️ Bu iki madde `data/paket_12.js` ve
   `data/paket_08.js` içinde PAKETLİ (üretilmiş, KOORDİNATÖR). Kaynak değişince `arac/paketle.py` yeniden
   koşmalı. Paket dosyası için diff YAZMADIM; üretilir, elle yamalanmaz.
Motor tuzuna dokunan yok. `yerlesimler*`/`yer_yama*`/kök `*.md` dokunulmadı ⇒ `-KOORD.diff` yok.

## 6. Bulamadım / ölçemedim
- H-0004 görseli yok. Ekrandaki "teknik/bilimsel" yazısının bu kart olduğunu koddan ve veriden çıkardım,
  ekran görüntüsüyle doğrulamadım. Maddeye bağlı tek kart bu, başka aday yok.
- Kültür-sanat `d`-yalnız 168 aday tek tek okunmadı. Yalnız 25'lik örneklem okundu (0/25).
- Henri II maddesinin kaynağı "standart ders kitabı bilgisi — WebFetch ile doğrulanmadı": §4 kırmızı çizgi
  adayı. Kapsam dışı, yalnız bildiriyorum.

## 7. İstiyorum / seçenekler
- **A (önerim):** APPJS + veri diff'i aynı commit'te. Kırkpınar kartı "SPOR" olur, kıyafet kartı "KÜLTÜR SANAT" olur.
- **B (Emre'ye soru):** 22 mimari kartı "KÜLTÜR SANAT"a mı geçsin? 26 başlıkta "İmar ve mimari" ayrı bir başlık.
  Mimariyi kültür-sanattan ayrı tutmak tutarlı. İstenirse üçüncü bir tür (`mimari`) da düşünülebilir. Ben dokunmadım.
- **C:** MADDE diff'i (Henri II +spor · Mombasa −spor) ve ardından `paketle.py`. Mombasa için Emre'nin
  "okçuluk = spor" cümlesinin askerî okçuluğu kapsayıp kapsamadığına koordinatör karar versin.
