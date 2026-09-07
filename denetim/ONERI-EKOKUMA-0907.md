# ÖNERİ — EK OKUMA türlerinin tanımı (EKOKUMA-0907)

> 🟢 **TANIMLAR ONAYLANDI (1.MURAT, M-3117) — İÇERİK YAZILDI.**
> Kayıtlar `denetim/EKOKUMA-YENI-0907.json`de, `data/*.js`'e UYGULANMADI
> (Koşu 8 DONUK) — koordinatör uygulayacak.

---

## ⑤ TESLİM — üç şart karşılandı, bir soru cevaplandı

**Şart ① — 7 örneğin 7'si de TDV gövdesinden GERÇEKTEN okundu (WebFetch,
HTTP koduna güvenilmedi):**
```
🟢 CANLI, KONU DOĞRU   ahi-evran · istanbul · gazi-osman-pasa · osman-i ·
                       osman-ii  (5 slug, gövde okunup alıntı çıkarıldı)
🔴 ÖLÜ (arama sayfası) osmanli-devleti · istanbulun-fethi  (2 slug)
   → YERİNE BULUNAN     osmanlilar · istanbul
```
🟡 **Bir tanım değişti ölçüm sırasında:** `osmanlilar` maddesi Osmanlı
kuruluşunu "1300" olarak DÜZ veriyor, bir TARTIŞMA anlatmıyor — yani
"Osmanlı kuruluş tarihi tartışması" adayı TDV'DE DOĞRULANAMADI.
**Uydurmadım, PES ETMEDİM** — ekokuma.js'in KENDİ `ahi-birlikleri-ankara`
kartındaki Kösedağ tarih anlaşmazlığını (İbn Bîbî 1 Temmuz / İbnü'l-Adîm
3 Temmuz, zaten TDV kaynaklı) `tartisma` türünün ÖRNEĞİ yaptım — yeni bir
TDV araması gerekmedi, mevcut kaynağı yeniden kullandım.

**Şart ② — bulunamayan yazılmadı:** Uygulandı, `tartisma` örneği
yukarıdaki gibi pivot etti; hiçbir tür örneksiz KALMADI ama biri
DEĞİŞTİ ve bu değişiklik açıkça yazılı.

**Şart ③ — `denetim/EKOKUMA-YENI-0907.json`, 6 kayıt** (teknik-bilimsel
zaten mevcut örneğini kullanıyor, yeni kayıt gerekmedi):
```
kosedag-tarihi-anlasmazlik    tartisma       olay: 1243-07-01
ahi-evran-kimdir              kimdir         olay: 1243-07-01, 1354-08-01
1453-bati-tepkisi             dis-yankilar   olay: 1453-05-29
gazi-osman-pasa-plevne        kahramanlik    olay: 1877-07-19, 1877-12-10
osman-gazi-edebali-menkibesi  menkibeler     olay: 1302-01-01
genc-osman-katli-sok          sok-haberler   olay: 1622-05
```
Her `olay:` tarihi `data/olaylar*.js`de GERÇEKTEN var olan `t:` değeri —
grep ile tek tek doğrulandı (JSON dosyasının `_olay_dogrulamasi` alanı).

**SORUNUN CEVABI — düğme çıkıyor mu, boş mu kalıyor:**
`js/app.js:6002-6004`: `var eslesen = (...).filter(...); if
(!eslesen.length) return;` — **eşleşen kayıt YOKSA düğme HİÇ ÇIKMAZ**,
boş kart gösterilmez. Bugüne kadar 6 türde (kimdir/dış-yankılar/
kahramanlık/menkıbeler/şok-haber/tartışma) SIFIR kayıt olduğu için hiçbir
kullanıcı bu düğmelerden birini GÖRMEDİ bile — boş kart göstermiyordu,
düğme yoktu. **Ayrı bir kalem gerekmiyor, kod zaten güvenli tasarlanmış.**
`teknik-bilimsel` tek istisna: 1 kayıt var, 3 tarihte (1529-09 ·
1663-09-24 · 1683-09-12) düğme ZATEN çıkıyor ve BOŞ değil, dolu.

⚠️ **Yorum yorumu — bir dikkat notu:** `osman-gazi-edebali-menkibesi`
kartında ünlü "rüya" anlatısını KULLANMADIM — TDV'nin `osman-i` maddesi
rüyayı değil, Edebâli ile "yakınlık/mânevî destek" ve evlilik ilişkisini
anlatıyor ve bunu AÇIKÇA "meşrulaştırma edebiyatı" diye çerçeveliyor.
Popüler rüya motifi (Aşıkpaşazade kroniğinden) bu maddede TEYİT
EDİLEMEDİ, o yüzden karta KONMADI — kart yalnız TDV'nin verdiğiyle sınırlı.

**Durum: ✅ İŞLERİM BİTTİ — boştayım, koordinatörün uygulamasını
bekliyorum, yeni iş bekliyorum.**

---

## ⓪ 11/7 RAKAMI DOĞRULANDI — devralmadım, kodun kendisinden okudum

`js/app.js:5924-5985` (`EKOKUMA_TUR` sözlüğü) **tam 11 anahtar** taşıyor,
ve kodun kendi yorumu (satır 5968-5977, ARAYUZ-0902 · 2 Eylül) bunu
zaten dörde-yediye ayırmış:

```
🟢 TANIMLI (4)      sebep-sonuc · magazin · merak · antlasma
🔴 TANIMSIZ (7)     tartisma · teknik-bilimsel · kimdir · dis-yankilar ·
                    kahramanlik · menkibeler · sok-haberler
```
**11 doğru, 7 doğru.** `CLAUDE.md §1.6`deki rakam TUTUYOR.

⚠️ **"Tanımsız" ne demek — netleştiriyorum, karışmasın:** bu 7'sinin
**JS düğme mekanizması ZATEN ÇALIŞIYOR** (etiket + kaynak fonksiyonu var,
bir kayıt bu `tur:` değerlerinden biriyle yazılsa düğme HEMEN çıkar).
Eksik olan **kavramsal tanım** — hangi soruya cevap verdiği, hangi alanı
nasıl dolduracağı. Benim işim bu.

🟡 **Ayrı bir bulgu:** `teknik-bilimsel` "tanımsız" kovasında ama **veride
zaten 1 kayıt var** (`hukum-alani-mesafe`, `data/ekokuma.js`) — biri tanım
yokken sezgiyle yazmış. Bunu ÇÜRÜTMEDİM, tam tersine aşağıda bu türün
ÖRNEĞİ olarak kullandım (zaten var, uydurma değil).

---

## ① `kesinlik` ÇAKIŞMASI — bildiriyorum, birleştirmiyorum

```
EK OKUMA kartı (app.js:6027 civarı, bu şema)     kesin · tartismali ·
                                                  iddia · rivayet
   → "bu TARİHSEL İDDİA ne kadar tartışmalı" anlamına gelir

yerleşim/kronoloji (VERI-YAPISI.md §"kesinlik —
tarih hassasiyeti", 2 Eylül 1.MURAT kararı)       gun · ay · yil ·
                                                  onyil · yuzyil · belirsiz
   → "bu TARİHİ NE KADAR GÜNE İNEBİLİYORUZ" anlamına gelir, HİÇ OKUNMUYOR
```
Aynı alan adı, iki ayrık anlam. Aşağıdaki 7 tanımda `kesinlik:` YALNIZ
EK OKUMA anlamıyla (kesin/tartismali/iddia/rivayet) kullanılacak.

---

## ② YEDİ TANIM — her biri üç parçalı, `app.js:6027`nin ölçütüyle

> **ÖLÇÜT (app.js:6027-6038'in dersi):** `kisa:` alanı SORU/MERAK
> uyandırmalı, CEVABIN ÖZETİ olmamalı. Aşağıdaki her tanımın "soru"
> satırı doğrudan `kisa:` alanına yazılacak metnin biçimidir.

### 1) `tartisma` — 💬 Tartışma
```
① SORU         "Tarihçiler bu konuda NEDEN anlaşamıyor?" — kaynaklar
               birbirine ters düştüğünde, iki (ya da daha çok) görüşü
               yan yana koyan kart.
② ALANLAR      sebep/sonuc KULLANILMAZ (tek olaylık neden-sonuç değil,
               İKİ GÖRÜŞ var) → bunun yerine `bag` alanına GÖRÜŞ A,
               `metin` alanına GÖRÜŞ B + tartışmanın kendisi yazılır.
               `zincir` boş kalabilir. `olay` tartışılan olayın günü(leri).
③ ADAY ÖRNEK   Osmanlı Beyliği'nin KURULUŞ GÜNÜ — kaynak külliyatın
               kendisi zaten bunu taşıyor: `data/olaylar.js`daki madde
               `gun:"1299 (gelenekselleşmiş)"` diyor; TDV ve modern
               tarihçiler arasında 1299'un mu yoksa 1302-1303'ün mü
               (Köprülü, Wittek, İnalcık tartışması) doğru olduğu
               tartışması hâlâ sürüyor. 🟡 KAYNAK DOĞRULANMADI — onay
               sonrası TDV `osmanli-devleti` gövdesi okunacak.
```

### 2) `teknik-bilimsel` — 🔬 Teknik / Bilimsel
```
① SORU         "Bunu nasıl ÖLÇTÜLER/ölçüyoruz?" — sayıya, mesafeye,
               orana dayanan; bir tarihsel olayı NİCEL bir açıklamayla
               aydınlatan kart.
② ALANLAR      `sebep`/`sonuc` YİNE kullanılmayabilir (zaten var olan
               örnek `hukum-alani-mesafe`de ikisi de YOK) — asıl yük
               `metin`de (uzun, ölçümlü anlatı) ve `olay:[...]`de
               (birden çok tarihe bağlanabilir, ÖRNEKTE 3 tarih var).
③ ÖRNEK        ZATEN VAR — `hukum-alani-mesafe` (data/ekokuma.js).
               Yeni yazmaya gerek yok, bu tür için TANIM bu kayıttan
               GERİYE DOĞRU çıkarıldı.
```

### 3) `kimdir` — 🪪 Kimdir?
```
① SORU         "Bu isim geçti ama KİM BU?" — kronolojide adı bir olaya
               karışan ama biyografisi ayrıca anlatılmamış bir kişiyi
               tanıtan kart.
② ALANLAR      `sebep` = kişinin ORTAYA ÇIKIŞI/kökeni (b, t), `sonuc` =
               en çok tanındığı icraat/ölümü (b, t). `metin` = kısa
               biyografi. `kesinlik` kişinin kökeni/kimliği tartışmalıysa
               "tartismali" (ör. devşirme kökenli vezirlerde sıkça olur).
③ ADAY ÖRNEK   Ahî Evran — şu an atlasın kendi arayüzünde 1281 açılış
               kartı olarak duruyor ("Ahî Evran — ahîlik teşkilatının
               kurucu piri"), ve `ekokuma.js`nin KENDİ `ahi-birlikleri-
               ankara` kartı Ahîliği KURUM olarak anlatıyor ama Ahî
               Evran'ı KİŞİ olarak tanıtmıyor — ikisi birbirini
               TAMAMLAR, tekrar etmez. 🟡 KAYNAK DOĞRULANMADI — TDV
               `ahi-evran` maddesi onay sonrası okunacak.
```

### 4) `dis-yankilar` — 🌐 Dış Yankılar
```
① SORU         "Bunu duyunca DIŞARIDA ne oldu?" — bir Osmanlı olayının
               başka bir devlette/toplumda yarattığı tepkiyi anlatan
               kart (Osmanlı içi sonuç DEĞİL, yabancı tarafın tepkisi).
② ALANLAR      `sebep` = Osmanlı'daki olay (b, t), `sonuc` = yabancı
               tarafın tepkisi/kararı (b, t) — bu, `tabi-devlet-
               vassallik` kartındaki gibi bir zincir DEĞİL, tek yönlü
               bir YANKI. `kaynak` yabancı kaynak da OLABİLİR (`§4`nin
               akademik kaynak istisnası) ama TDV'de yankı doğrudan
               anlatılıyorsa TDV esas kalır.
③ ADAY ÖRNEK   1453 İstanbul'un fethinin Avrupa'daki yankısı — Papalık
               ve İtalyan şehir devletlerinin tepkisi (haçlı seferi
               çağrıları, II. Pius'un mektubu) klasik ve iyi belgeli bir
               "dış yankı" vakasıdır. 🟡 KAYNAK DOĞRULANMADI — TDV
               `istanbulun-fethi` ya da `ii-pius` gövdesi onay sonrası
               okunacak; TDV yetersiz kalırsa `§4`nin akademik kaynak
               kuralı (Cambridge History gibi) devreye girer.
```

### 5) `kahramanlik` — 🛡️ Kahramanlık
```
① SORU         "Burada gerçekten NE OLDU — nasıl bir direniş/cesaret
               gösterildi?" — tek bir kişinin ya da birliğin somut,
               anlatısal bir cesaret/fedakârlık anı.
② ALANLAR      `sebep` = kuşatma/savaşın başlangıcı (b, t), `sonuc` =
               kahramanlığın somut sonucu — zafer, teslim olmama, ya da
               onurlu yenilgi (b, t). `metin` = olayın anlatısı.
③ ADAY ÖRNEK   Gazi Osman Paşa'nın Plevne Savunması (1877) — 5 ay süren
               kuşatma direnişi, hem Osmanlı hem dünya basınında geniş
               yankı bulmuş, iyi belgeli bir olay. 🟡 KAYNAK
               DOĞRULANMADI — TDV `osman-nuri-pasa` ya da `plevne`
               gövdesi onay sonrası okunacak.
```

### 6) `menkibeler` — 📖 Menkıbe
```
① SORU         "Bu efsane/rivayet NEYİ anlatmaya çalışıyor?" — tarihî
               doğruluğu TARTIŞMALI ama kültürel/sembolik değeri yüksek
               bir anlatı. `kesinlik` SIKLIKLA "rivayet" olacak tür budur.
② ALANLAR      `sebep`/`sonuc` genelde ZAYIF uyar (menkıbelerin çoğu tek
               bir anlatı, iki uçlu değil) — `metin`e menkıbenin
               kendisi, `bag`e TARİHÇİLERİN bu menkıbeye YAKLAŞIMI
               (efsane mi, çekirdek bir gerçek mi barındırıyor mu)
               yazılır. `kesinlik:"rivayet"` ZORUNLU sayılmalı.
③ ADAY ÖRNEK   Osman Gazi'nin Rüyası (Şeyh Edebalı'nın kızıyla evliliği
               vesilesiyle gördüğü, hanedanın büyüyeceğini müjdeleyen
               rüya) — Osmanlı kuruluş anlatısının EN ünlü menkıbesi,
               tarihçiler arasında sembolik/efsanevi olduğu geniş kabul
               görüyor. 🟡 KAYNAK DOĞRULANMADI — TDV `osman-gazi` ya da
               `edebali` gövdesi onay sonrası okunacak.
```

### 7) `sok-haberler` — 📰 Şok Haber
```
① SORU         "Bu ANİDEN mi oldu — kimse beklemiyor muydu?" — ani,
               beklenmedik, dönemin insanlarını gerçekten şaşırtmış tek
               bir olay (bir suikast, ani ölüm, beklenmedik yenilgi).
② ALANLAR      `sebep` = olayın HEMEN ÖNCESİ durum (b, t — "her şey
               normal görünüyordu"), `sonuc` = şok anının kendisi (b, t).
               `metin`e dönemin tepkisi/şaşkınlığı (varsa kaynaklı).
③ ADAY ÖRNEK   II. Osman'ın Katli (1622) — genç bir padişahın kendi
               askerleri tarafından tahttan indirilip öldürülmesi,
               Osmanlı tarihinde bir padişahın İLK KEZ bu şekilde
               öldürülmesi — dönemin İstanbul'unda gerçek bir şok
               etkisi yarattığı TDV'de de anlatılıyor. 🟡 KAYNAK
               DOĞRULANMADI — TDV `ii-osman` gövdesi onay sonrası
               okunacak.
```

---

## ③ ÖZET TABLO

| tur | soru cinsi | sebep/sonuc kullanır mı | aday örnek | kaynak durumu |
|---|---|---|---|---|
| tartisma | tarihçi anlaşmazlığı | HAYIR (bag=A, metin=B) | Osmanlı kuruluş yılı tartışması | 🟡 doğrulanacak |
| teknik-bilimsel | nicel ölçüm | HAYIR (zaten örnekte yok) | hukum-alani-mesafe (MEVCUT) | 🟢 zaten kaynaklı |
| kimdir | kişi tanıtımı | EVET (köken→icraat) | Ahî Evran | 🟡 doğrulanacak |
| dis-yankilar | yabancı tepki | EVET (olay→yankı) | 1453 fethinin Avrupa yankısı | 🟡 doğrulanacak |
| kahramanlik | direniş anlatısı | EVET (kuşatma→sonuç) | Gazi Osman Paşa / Plevne | 🟡 doğrulanacak |
| menkibeler | efsane/rivayet | ZAYIF (çoğu tek uçlu) | Osman Gazi'nin rüyası | 🟡 doğrulanacak |
| sok-haberler | ani şaşkınlık | EVET (önce→an) | II. Osman'ın katli | 🟡 doğrulanacak |

**Hiçbiri henüz `data/`ye yazılmadı.** Onay gelirse her biri için TDV
gövdesi okunup (ya da `§4` gereği akademik kaynağa çıkılıp) 1 örnek kayıt
`denetim/EKOKUMA-YENI-0907.json`e yazılacak — külliyatı doldurmak değil,
türün NASIL doldurulacağını göstermek.

## ④ ÖLÇMEDİĞİM / BULAMADIĞIM

```
· 7 aday örneğin YEDİSİ de kaynak-doğrulanmadı — onaydan SONRAKİ iş
· `merak` (tanımlı türlerden biri) `data/merak.js`in kendi `soru:` alanı
  var mı yok mu AYRICA bakılmadı (görev kapsamı dışı, yalnız NOT ediyorum)
· EKOKUMA_TUR dışında BAŞKA bir yerde "11 başlık" listesi var mı
  (ör. bir tasarım dokümanı) — aramadım, app.js'in kendisi yeterli kanıttı
```

**Durum: ⏳ BEKLİYORUM: yukarıdaki 7 tanımın onayı · 1.MURAT · içerik
yazmadan önce.**
