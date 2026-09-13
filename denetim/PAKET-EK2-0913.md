# PAKET-EK2 · EK OKUMA — CELÂLÎ · KUYUCU · KANİJE · HAÇOVA · ANTLAŞMA — TESLİM · 13 Eylül 2026

Koordinatör: 1.MURAT · istek: `ClaudEmre/kutu/giden/parti-emrelic-0048/PARTI.md` (yalnız OKUNDU)
Kalemler: H-0006 · H-0007 · H-0008 · H-0012 · H-0015 · H-0016

**Yazılan dosyalar yalnız:** `data/ekokuma_celali.js` (YENİ) · `data/ekokuma_savas.js` · `data/ekokuma_antlasma2.js` · bu rapor.
`js/` · `index.html` · kronoloji · `savaslar.js` · yerleşim · `arac/` · `devletler.js` · öteki ekokuma dosyaları **dokunulmadı**. Commit YOK, CEVAP.json dokunulmadı.

🔴 **YÜKLEYİCİ İSTEĞİ (D099):** `data/ekokuma_celali.js` `js/app.js _EKOKUMA_DOSYA_ADLARI` listesinde **YOK**. Arayüz oturumu `"ekokuma_celali"` satırını eklemeden 6 Celâlî kartı ekranda **görünmez**. Ad alanı hazır: `window.EKOKUMA_CELALI`, `_ekHavuz()` deseni `/^EKOKUMA(_[A-Z0-9]+)?$/` ile uyumlu. Öteki 12 kart zaten listede olan dosyalarda.

---

## 0 · ÖZET — ölçülmüş

```
kalem                              kart   bağ   dosya
H-0007 Celâlî isyanları              3     17   ekokuma_celali.js
H-0016 Kuyucu Murad Paşa             2      5   ekokuma_celali.js
H-0012 isyancıya makam               1      6   ekokuma_celali.js
H-0008 Kanije savunması              2      4   ekokuma_savas.js
H-0006 Haçova (A2'den AYRI konu)     1      3   ekokuma_savas.js
H-0015 antlaşma önem/sebep-sonuç     9     26   ekokuma_antlasma2.js
───────────────────────────────────────────────
TOPLAM                              18     61
```

| dosya | önce → sonra |
|---|---|
| `data/ekokuma_celali.js` | yok → 6 |
| `data/ekokuma_savas.js` | 18 → 21 |
| `data/ekokuma_antlasma2.js` | 24 → 33 |

**Denetim (son koşu, bütün düzeltmelerden SONRA):**
```
node --check  ekokuma_celali.js · ekokuma_savas.js · ekokuma_antlasma2.js   3/3 ✓
node denetim/ARAC-A2-BAG-0913.js --hepsi    öz-sınav 7/7 · BAĞ 494/494 · HATA 0 · UYARI 125
node denetim/ARAC-A2-KOPYA-0913.js <18 kart> <13 Eylül'de çekilen gövdeler>
                                            🔴 0 · ⚪ ölçülemedi 0 · 🟡 1 (kitap adı) · kaynakta geçmeyen sayı 0
```
- UYARI 125'in 21'i bu paketin bağları: hepsi "o gün birden çok madde" uyarısı ve **21'i de tek tek okundu — aynı olay** (Zenta 3 · Karlofça 6 · Berlin 8 · Pasarofça 4 · Prut 4 · Kamaniçe 3 · Uyvar fethi/kaybı · Sen Gotar · Varadin · Belgrad 1717 · Venedik 1714 · 1768 savaş ilanı 3 · Kaynarca 3 · 93 Harbi 3 · Ayastefanos 5 · Bucaş 2 · Zitvatorok 4). Hepsinde ayırıcı (`gün|parça`) kullanıldı; ilgisiz aynı-gün maddesine düşen kart yok (ör. `1603-01-01|Deli Hasan` o günün 7 maddesinden yalnız birini tutar).
- 🟡 tek kalan: `kahramanlik-kanije-destani` — 8 kelimelik ortak dizi Vahit Çabuk'un **kitabının adı** ("Tiryaki Hasan Paşa'nın Gazaları ve Kanije Savunması"); kabul edildi.

**Telif — iki tur:** ilk ölçümde 🔴 1 (Berlin: 14 kelimelik Osmanlı heyeti listesi) · 🟡 4 (Bucaş 9 · Pasarofça 8 · Kaynarca rivayetleri 8 · kitap adı 8) · kaynakta geçmeyen sayı 2 (`1715` Karlofça · `1783` Kaynarca). Hepsi yeniden yazıldı; iki yıl, okunan gövdede OLMADIĞI için **çıkarıldı** (Kırım ilhakı cümlesi ve `1783-04-19` bağı silindi — o bağ zaten `sebep-sonuc-yas-1792`de var).

---

## 1 · Kaynak — 13 Eylül'de çekilen, gövdesi okunan TDV maddeleri

```
🟢 200 + gövde okundu  celali-isyanlari (Müctebâ İlgürel) · kuyucu-murad-pasa · karayazici-abdulhalim ·
                       kalenderoglu-mehmed · canbolatogullari · kanije · tiryaki-hasan-pasa · mehmed-iii ·
                       ahmed-i · hacova-meydan-savasi · cigalazade-sinan-pasa · katircioglu-mehmed-pasa ·
                       pazvandoglu-osman · karlofca · pasarofca-antlasmasi · kucuk-kaynarca-antlasmasi ·
                       berlin-antlasmasi · vasvar-antlasmasi · bucas-antlasmasi
🔴 302 ÖLÜ             deli-hasan · deli-hasan-pasa · tavil-ahmed · tavil-ahmed-pasa · tavil-ahmed-pasa--celali ·
                       canbolatoglu-ali-pasa · canbolatoglu-ali · kalenderoglu · levend · levendler · gurcu-nebi ·
                       abaza-hasan-pasa · pasvanoglu · pasvanoglu-osman · pasvanoglu-osman-pasa ·
                       pazvandoglu-osman-pasa · sadeddin-efendi · sadeddin-efendi--hoca · yusuf-pasa-sinan ·
                       karahaydaroglu · serav-antlasmasi · nasuh-pasa-antlasmasi
⚠️ 200 ama YANLIŞ MADDE abaza-mehmed-pasa → XVIII. yy'daki başka bir Abaza Mehmed Paşa (Hotin, Yenikale, 1770'ler)
                       — Celâlî Abaza Mehmed Paşa'nın maddesi DEĞİL (§4②, "canlı slug, yanlış madde")
⚠️ 200 ama İÇİ ÇOK KISA ibrahim-pasa-damad (1209 karakter gövde) — kullanılmadı
```
📌 Deli Hasan, Tavil Ahmed ve Canbolatoğlu Ali'nin müstakil maddesi yok; bilgileri `celali-isyanlari` · `karayazici-abdulhalim` · `mehmed-iii` · `ahmed-i` · `canbolatogullari` maddelerinden toplandı ve kartların `kaynak` alanında öyle yazıldı.

🟢 **Son kullanıcıya görünen alan temizliği (H-0003/H-0005'teki Emre şikâyeti):** `kaynak` ve `not` app.js'te ekrana basılıyor. Bu paketin kartlarında `(gövde okundu, HTTP 200)` · `ölü:` · `bulunamadı —` gibi **çalışma notları görünür alanlara yazılmadı**; hepsi JS dosyasındaki yorum satırlarında ve bu raporda duruyor. `not` alanlarında yalnız okuyucuyu ilgilendiren kaynak ayrılıkları var.

---

## 2 · Kalem kalem

### ✅ H-0007 · Celâlî isyanları — 3 kart · 17 bağ (`ekokuma_celali.js`)

| id | tür | ne anlatıyor | bağ |
|---|---|---|---|
| `sebep-sonuc-celali-isyanlari` | sebep-sonuc | ne, adın kaynağı, evreler, sonuç (büyük kaçgunluk) | 1519 · 1599 · 1603 · 1607 · 1608 |
| `tartisma-celali-sebepleri` | tartisma | **8 rakip açıklama**: Safevî/mezhep · nüfus (Cook) · para-fiyat · idareci zulmü · tımar/mansıp mağdurları · Türkmen-merkeziyet · tüfek · Haçova firarileri (TDV bunu REDDEDİYOR) | 1519 · 1596-10 · 1599 · 1585 tağşiş |
| `kimdir-celali-reisleri` | kimdir | **reisler ve tarihleri**: Şeyh Celâl 1519 · Karayazıcı 1599-1602 (Urfa Kasım 1599 · Kayseri 23 Eyl 1600 · Sepetli 12 Ağu 1601) · Deli Hasan 1602-03 · Tavil Ahmed 1604-07 · Canbolatoğlu 1606-07 · Kalenderoğlu 1604-08 · sonraki kuşak (Abaza Mehmed · Varvar Ali · Kara Haydar/Haydaroğlu · Gürcü Abdünnebî–Katırcıoğlu 7 Tem 1649 · Abaza Hasan) | 8 madde |

"Kaç tane ünlü ayaklanma" sorusuna kaynak **bir sayı vermiyor**; kart sayı uydurmadı, kaynağın adıyla andığı reisleri sıraladı.

### ✅ H-0016 · Kuyucu Murad Paşa — 2 kart · 5 bağ

- `kimdir-kuyucu-murad-pasa` (kesinlik `tartismali`): kariyer · 1585 kuyuya düşüp esir · Zitvatorok · **üç hamle**: ① 1607 Kalenderoğlu'na Ankara sancağı (oyalama) → Oruç ovası (Tiryâkî'nin top pususu taktiği) ② 1608 Muslu Çavuş'a İçel sancağı → Alaçayır → Tavil Halil/Meymun takibi → 18 Aralık 1608 İstanbul'a 400 bayrakla dönüş ③ 1609 sahte İran seferi söylentisiyle reisleri Üsküdar'a çağırıp öldürme ("Üsküdar seferi") + adâletnâme. Ölüm 5 Ağustos 1611 Cülek.
- `menkibe-kuyucu-lakabi` (kesinlik **`rivayet`**): lakabın iki rivayeti — ① öldürttüğü âsileri kuyulara doldurması ② 1585 Tebriz Seferi'nde atıyla kuyuya düşüp esir alınması. TDV birini seçmiyor; kart da seçmedi. `not`: 60-70.000 ölü ve Nasuh Paşa'nın zehirlettiği iddiaları **rivayet** diye ayrı yazıldı, kimin anlattığıyla (Peçuylu'ya dayanan anlatı).

### ✅ H-0012 · İsyancıya makam — 1 kart · 6 bağ

`tartisma-isyanciya-makam` — kaynaklı örnekler: Karayazıcı (Amasya/Antep sözü → Çorum sancağı, 1600) · **Deli Hasan → Bosna beylerbeyiliği (Mart 1603)** · Tavil Ahmed → Şehrizor teklifi (1605, reddetti) · Canbolatoğlu → Halep menşuru, sonra Tımışvar/Belgrad · Kalenderoğlu (Ankara) ve Muslu Çavuş (İçel) — **uzlaşma değil hile, ayrı tutuldu** · Gürcü Abdünnebî/Katırcıoğlu 1649 → Katırcıoğlu Beyşehir → Karaman beylerbeyi · **Pazvandoğlu → vezirlik 21 Haziran 1799**, Kasım 1800'de alındı, Ağustos 1802'de iade.
`bag`: TDV'nin kendi değerlendirmesi — kazanç (şehirler kurtuldu, cepheye kuvvet) · bedel (affedilenlerin çoğu eski âdetini sürdürdü, adamları kanunsuzca kapıkuluna yazıldı).
🟡 **Yazılmayan örnekler:** Tepedelenli Ali Paşa (TDV gövdesi okundu; vezaret bir isyanın bastırılması karşılığı değil hizmet karşılığı verilmiş — örüntüye UYMUYOR, alınmadı) · Abaza Mehmed Paşa'nın 1628 affı ve Bosna ataması (doğru madde bulunamadı: `abaza-mehmed-pasa` yanlış kişi) · Kavalalı Mehmed Ali (okunmadı).

### ✅ H-0008 · Kanije savunması — 2 kart · 4 bağ (`ekokuma_savas.js`)

- `savas-kanije-1601` (savas-hikayesi, 570 kelime): öncesi (Kanizsai ailesi · 1566 sonrası önem · Thury · 1600 savaş meclisleri · 20/22 Ekim 1600 teslim · Paradeiser'in kendi tarafınca mahkûmiyeti · Tiryâkî'nin beylerbeyi oluşu) · akış (9 Eylül varış · genel hücumlar · yardım yok · hava bozuluyor · huruç · 18 Kasım çekiliş) · sonuç (vezaret hasları, hil'atler, hatt-ı hümâyun · kale tamiri · ele geçen topların İstanbul'a götürülme önerisi · 1690 kaybı) · **tartışma 5 madde**.
- `kahramanlik-kanije-destani`: gazavatnâmeler (Gazavât-ı Tiryâkî Hasan Paşa · Menâkıb · Cihâdnâme · Hasanbeyzâde'nin Fetihnâmesi) → Hasenât-ı Hasan → Nâmık Kemal'in "Kanije"si (h. 1290 / h. 1303) → 1941 Vakit tefrikası → Vahit Çabuk 1978 · Nagykanizsa'daki son vali Mustafa Paşa'nın mezar taşı.
🔴 "İlginç olayları detaylarıyla" isteği: gazavatnâmelerin **kendisi okunmadı**; kahramanlık sahneleri bu yüzden karta konmadı ve `not`ta okuyucuya söylendi. İstenirse sonraki iş: Çabuk 1978 neşri ya da Peçuylu'nun ilgili bölümü.

### ✅ H-0006 · Haçova — 1 kart · 3 bağ (A2 kartından AYRI)

A2'nin `savas-hacova-1596` kartı muharebeyi (Sâdeddin Efendi, Hırka-i Saâdet, yağma, bataklık) zaten anlatıyor — **tekrar edilmedi**. Yeni kart `tartisma-hacova-firarileri-celali`: Cigalazâde'nin 27 Ekim yoklaması · 30.000 kişinin dirliğinin kesilmesi · **iki TDV görüşü**: `hacova-meydan-savasi` + `cigalazade-sinan-pasa` "Celâlîlere katıldılar" ↔ `celali-isyanlari` "sayıyı artırdılar ama isyanları buna bağlamak doğru değil". Aynı ansiklopedinin iki maddesi arasındaki vurgu farkı açıkça gösterildi, taraf seçilmedi.

### ✅ H-0015 · Antlaşmalar — 9 kart · 26 bağ (`ekokuma_antlasma2.js`)

**Önce ölçüm** (çekirdek `olaylar*.js`, `k:"antlasma"` ∪ başlıkta antlaşma/muahede/mütareke/barış/ahidnâme; bağ = app.js eşleşme kuralının kopyası):
```
brifingin 12 antlaşması  12'sinde hüküm kartı ZATEN VAR
                          önem/sebep-sonuç kartı EKSİK: Karlofça · Pasarofça · Küçük Kaynarca · Berlin
                          (Berlin'e bağlı tek s-s kartı Paris 1856'nınki)
```
**Yazılanlar:**
| id | tür | not |
|---|---|---|
| `sebep-sonuc-karlofca-1699` | sebep-sonuc | Zenta → Edirne protokolü (alâ hâlihî) → 72 gün 36 oturum · Râmi Mehmed Efendi · Mavrokordato ithamı |
| `sebep-sonuc-pasarofca-1718` | sebep-sonuc | rövanş savaşı · Varadin · Belgrad 1717 · saraydaki savaş/barış kutupları · ticaret antlaşması (konsolosluk, %3) |
| `sebep-sonuc-kucuk-kaynarca-1774` | sebep-sonuc | hazırlıksız savaş · Fokşan/Bükreş · Kozluca · Şumnu kuşatması · **Rus/Rum kilisesi tahrifi → Kırım Savaşı** |
| `tartisma-kucuk-kaynarca-rivayetleri` | tartisma | "dirsek keyfi" · "Prut günü" · "Weissmann hatırası" — TDV üçünü de dayanaksız buluyor |
| `sebep-sonuc-berlin-1878` | sebep-sonuc | Ayastefanos'a itirazlar · Kıbrıs devri · Osmanlı heyeti · hüküm kartında OLMAYAN maddeler (Girit 1868 · Kotur · Tuna · Ermeni ıslahatı · Boğazlar) |
| `antlasma-vasvar-1664` | antlasma | 10 madde + alâ hâlihî (Uyvar, Novigrad) + 200.000 kara kuruş hediye |
| `sebep-sonuc-vasvar-1664` | sebep-sonuc | Erdel krizi · Uyvar · Sen Gotar · **devletin sürekliliği ilkesi** · 9/10 Ağustos tarih notu |
| `antlasma-bucas-1672` | antlasma | 4 madde + 23 Ekim ahidnâmesi |
| `sebep-sonuc-bucas-1672` | sebep-sonuc | Kamaniçe → Lviv → Bucaş · Leh meclisinin reddi · 1673 savaşı · Kamaniçe'nin 1699'da iadesi |

Hüküm kartları (`data/ekokuma.js`) **tekrarlanmadı**; Berlin s-s kartına yalnız orada OLMAYAN maddeler kondu.

**Dalga SONRASI ölçüm (153 çekirdek madde):** hüküm+s-s ikisi de bağlı **19** · yalnız hüküm 4 · yalnız s-s 19 · hiçbiri 111 (bunların bir kısmı Osmanlı dışı: `olaylar_ek16/ek20/ok109/kamerika`).

---

## 3 · SONRAKİ DALGA — H-0015'in kalan listesi (Osmanlı taraf, çekirdek)

```
yalnız S-S eksik     1590 Ferhad Paşa · 1700 İstanbul (Azak) · 1711 Prut · 1878 Ayastefanos/Edirne Mütarekesi
S-S var, hüküm yok   1444 Edirne-Segedin · 1746 Kerden · 1838 Balta Limanı · 1841 Londra Boğazlar ·
                     1847 II. Erzurum · 1923 Lozan
HİÇ KART YOK — öncelik (etkisi büyük)
   1920-08-10 Sevr · 1922-10-11 Mudanya · 1921-10-13 Kars · 1920-12-03 Gümrü · 1921-03-16 Moskova ·
   1921-10-20 Ankara İtilâfnâmesi · 1918-03-03 Brest-Litovsk · 1914-08-02 Osmanlı-Alman ittifakı ·
   1913-05-30 Londra · 1913-09-29 İstanbul · 1913-11-14 Atina · 1912-10-15 Uşi ·
   1833-05-14 Kütahya · 1840-07-15 Londra · 1826-10-07 Akkirman · 1809-01-05 Kal'a-i Sultâniyye ·
   1791-08-04 Ziştovi · 1779-03-10 Aynalıkavak · 1736-09-01 İstanbul · 1732-01-10 Ahmed Paşa ·
   1727-10-04 Hemedan · 1724-06-24 İstanbul Mukāsemenâmesi · 1713-06-24 Edirne · 1681-01-11 Bahçesaray ·
   1621-10-09 Hotin · 1618-09-26 Serav · 1612-11-20 Nasuh Paşa · 1573-03-07 Venedik · 1547-06-18 İstanbul ·
   1533-01-01 İstanbul · 1502-12-14 Venedik barışı · 1491-05-01 Memlük · 1479-01-25 İstanbul ·
   1427-01-01 Tata · 1415-03-01 Karaman · 1403-06-15 Gelibolu · 1403-06-01 Selanik iadesi ·
   1387-06-08 Ceneviz · 1333-08-01 Bizans haraç · 1790-01-31 Prusya ittifakı · 1808-10-07 Sened-i İttifak ·
   1849-05-01 Baltalimanı · 1854-03-12 İngiltere-Fransa ittifakı
```
🟢 **Gövdesi ZATEN elde olanlar** (sonraki dalgayı ucuzlatır): `lozan-antlasmasi` · `sevr-antlasmasi` · `ayastefanos-antlasmasi` 13 Eylül'de çekildi (okunmadı); `denetim/_antlasma_govde/` altında `mudanya-mutarekesi` · `londra-antlasmasi` · `gumru-antlasmasi` · `kars-antlasmasi` · `moskova-antlasmasi` · `usi-antlasmasi` kayıtları var.
🔴 Ölü: `serav-antlasmasi` · `nasuh-pasa-antlasmasi` (302) — Nasuh Paşa için `nasuh-pasa` (kişi, 200) gövdesi çekildi, okunmadı.

---

## 4 · Başkalarının dosyasında görülen kusurlar — RAPOR, dokunulmadı (A3 · kronoloji sahibi)

| madde | dosya | bulgu | kaynak |
|---|---|---|---|
| 1608-08-05 Alaçayır | olaylar_ek5.js | **5 Ağustos kaynakta YOK**: TDV `kalenderoglu-mehmed` 26 Rebîülâhir 1017 / **9 Ağustos 1608** (Göksun Boğazı); `kuyucu-murad-pasa` yalnız "Ağustos 1608" | TDV kalenderoglu-mehmed |
| 1608-08-05 Alaçayır | olaylar_ek5.js | "kuyulara doldurduğu isyancılarla anılan tasfiye" **rivayeti olgu gibi** yazıyor | TDV kuyucu-murad-pasa ("rivayet edilir") |
| 1607-10-23 Oruç ovası | olaylar_ek5.js | TDV iki gün veriyor: `kuyucu-murad-pasa` çatışma 23'te başladı, **asıl savaş 24**; `canbolatogullari` ve `ahmed-i` **24 Ekim 1607** | TDV |
| 1601-09-10 Kanije savunması | olaylar_ek5.js | "yaklaşık **iki bin** kişilik garnizon" — TDV `tiryaki-hasan-pasa` **9000 kişilik kuvvet**; `kanije` olağan kadroyu 1400 veriyor; 2000 rakamı TDV'de 1603'teki takviye (2000 yeniçeri) · "ani huruç harekâtları ve **hileleriyle**" — hile TDV'de yok · `gun:` bitişi 17 Kasım ↔ `tiryaki` 18 Kasım | TDV |
| 1600-10-20 Kanije'nin fethi | olaylar_ek.js | TDV `kanije` 20 Ekim ↔ `tiryaki-hasan-pasa` ve `mehmed-iii` **22 Ekim** (13 Rebîülâhir 1009); `kronoloji_habsburg.js` "Kanije'nin kaybı" 1600-10-22'de — iki dosya iki ayrı gün taşıyor | TDV |
| 1603-01-01 Deli Hasan | olaylar_ek8.js | madde "TDV yalnız yıl veriyor" diyor — TDV `mehmed-iii` **Şevval 1011 / Mart 1603** veriyor (ay düzeyinde, §4: ay metne yazılır) | TDV mehmed-iii |
| 1599-06-01 Karayazıcı | olaylar_ek5.js | "Urfa'da kendi adına **hutbe okuttu**" — TDV `karayazici-abdulhalim` hutbe demiyor, "Halim Şah" tuğralı **fermanlar** diyor (hutbe-sikke Canbolatoğlu için anlatılıyor) · `t:1599-06-01` günü kaynaksız (TDV: Ağustos 1599 serdarın yola çıkışı, Kasım 1599 Urfa) | TDV karayazici-abdulhalim |
| 1774-06-20 Kozluca | olaylar_ek5.js | TDV `kucuk-kaynarca-antlasmasi` Kozluca'yı **25 Haziran 1774** veriyor | TDV |
| 1664-08-09 / 1664-08-10 Vasvar | olaylar_ek5.js · kronoloji_habsburg.js | TDV: imza 9 Ağustos; **10 Ağustos Türkçe metnin yanlış çevrilmesinden doğan Batı tarihi** — kuyruk dosyası yanlış günü taşıyor | TDV vasvar-antlasmasi |

📌 TDV'nin kendi iç tutarsızlıkları (kartlarda `tartisma`/`not` alanında okuyucuya gösterildi): Kanije teslim 20↔22 Ekim, kuşatma 9↔10 Eylül ve 17↔18 Kasım · Kuyucu'nun Üsküdar'dan çıkışı 15 Haziran ↔ 2 Temmuz ↔ "Temmuz 1607" · Yenikale'nin (Zrínyi-Újvár) düşüşü aynı maddede "haziranın son günü" ↔ "1664 Temmuz başı" · Kanije'nin ilk beylerbeyi (Tiryâkî mi, Alacaetli Hasan Paşa mı).

---

## 5 · Ölçülmeyen / sınırlar

- **Tarayıcıda canlı SINANMADI.** `kimdir` · `tartisma` · `kahramanlik` · `menkibeler` kartları app.js'in son çare dalıyla çizilir (`baslik|ad` + metin · kisa · not · bag); `\n` satır sonları o dalda `<p>` içinde tek paragraf olarak görünebilir — gözle bakılmadı.
- `ekokuma_celali.js` yükleyiciye eklenmeden hiçbir kartı görünmez (bkz. başlık).
- Görsel aranmadı (bu pakette istenmedi); bütün kartlar görselsiz.
- İçerik doğruluğu TDV gövdesine karşı **telif ve sayı** ekseninde aletle, anlam ekseninde yazım sırasında gövde okunarak sınandı; ikinci bir okuyucu tarafından değil. Yazımdan sonra kendi taslağımda **9 kaynak aşımı** yakalanıp düzeltildi (ör. "Mora hızla geri alındı", "Viyana'ya ilk şehbender", "Erdel Osmanlı nüfuzunda kaldı", Pasarofça'yı Lale Devri'ne bağlayan kaynaksız cümle, "imkânsız kılar").
- Gazavatnâmeler · Peçuylu · Naîmâ · Cook · Davison birincil/ikincil olarak **okunmadı**; yalnız TDV'nin aktardığı kadarıyla ve TDV'ye atfen kullanıldı.

## 6 · Haberleşme

- Açılış: tahtaya yazıldı ve `oturumlar/tahta.json`da GERİ OKUNARAK bulundu. ⚠️ `tahta.py` "commit tamamlanmamış olabilir" uyarısı verdi; §7.1⑤b gereği kayıt dosyada arandı, VAR — git'e dokunulmadı.
- TESLİM: bu rapordan sonra tahtaya yazıldı (geri okuma sonucu teslim mesajında).
