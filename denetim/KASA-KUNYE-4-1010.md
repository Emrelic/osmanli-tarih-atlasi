# KASA-KUNYE-4-1010 — dört yerel künye önerisi (SAHIP-BOLGE ④) + `kesinlik:"bolge"` görünürlüğü (②)

Görev: YILDIRIM BAYEZIT · Araştırmacı: KASA · `data/` DONUK — künye ÖNERİSİ; açmak koordinatörün (FAZ 2,
`boya_gerekli:true`). Hicrî ∩ miladî (§4) · hayalet kontrolü (§3.5: künyenin ömrü, bağlanacak noktaların dilimini
kapsıyor mu, ötesine taşıyor mu).

## ② `kesinlik:"bolge"` KULLANICIYA GÖRÜNMÜYOR (salt okuma)
- `js/app.js:66-100` `kesinlikBirimi` / `kesinlikliYazi`: `kesinlik` yalnız **TARİH hassasiyeti** olarak okunuyor
  (`gun` · `ay` · `yil` · `onyil` · `yuzyil` · `belirsiz`).
- Bilinmeyen bir değer (`"bolge"`) hiçbir dala girmiyor; ham tarihe düşüyor.
- `app.js:9087` `_khKes` da tarih birimi; `js/suzgec.js` `kesinlik`'i hiç okumuyor (0 eşleşme).
- Petek rengi `s:` kimliğinden geliyor; halka `kesinlik`'i harita rengine ve sahip etiketine YANSIMIYOR.
⇒ **GÖRÜNMÜYOR.** Senin kuralınla seçenek 2 (`hafsi` + `kesinlik:"bolge"`) kullanıcıya "Hafsî'ydi" der ve
yaklaşıklığı GİZLER. 3b'den sonra kalanlar için **seçenek 1 (`__BOSLUK__`)**. Seçenek 2 ancak ayrı bir arayüz
kalemiyle açılabilir. Ayrıca `"bolge"` bugünkü şemada tanımlı bir `kesinlik` değeri değil (yeni değer de şema işi).

## ④ Dört künye
| id | ad | f | t | kesinlik | kaynak (ADIYLA) | not |
|---|---|---|---|---|---|---|
| `nasirvend` | Nâsırvendler (Lâhîcân emirliği, Gîlân) | **1256** (Hülâgû'nun saltanatı 1256-1265 içinde; "XIII. yüzyılın ortalarında") | **1390-01-01** (792 ∩ 1390 = 1390-01-01…12-09) | f `onyil` · t `yil` | TDV `lahican`: "XIII. yüzyılın ortalarında İlhanlı Hükümdarı Hülâgû zamanında Nâsırvend hânedanından Cemâleddin Su'lûk b. Su'lûk Lâhîcân'da emîr idi." · "792'de (1390) Seyyid Hâdî Kiyâ, Nâsırvendler'in hâkimiyetine son vererek bölgeyi ele geçirdi." | ⚠️ f bir ALT SINIR beyanı ("Hülâgû zamanında emîr idi", kuruluş günü değil). 705/1305-06'dan itibaren İlhanlı'ya tâbi ⇒ noktada `v:ilhanli` (TDV "Olcaytu Han Gîlân'a hâkim olduğunda ona boyun eğdi (705/1305-1306)"). Ardıl: `gilan-kiya` — ⚠️ o künyenin f'si 1371, Lâhîcân'da Kârkiyâ 1390 ⇒ künye zarfı tutarlı, NOKTA dilimi 1390'dan |
| `sasa-bey-beyligi` | Sasa Bey Beyliği (Aydın-ili, Menteşe kolu) | **1304-10-01** (en erken tarihli fetih) | **1308-01-01** | f `ay` · t `yil` | TDV `ayasuluk`: "Menteşe Bey'in damadı Sasa Bey tarafından Ekim 1304'te kesin olarak Türk hâkimiyetine alındı" · TDV `aydinogullari`: "…Sasa Bey'e yardım etti, ancak daha sonra bu bölgeleri ondan alarak Aydın-ili'ne hâkim oldu (1308)" | ⚠️ f ALT SINIR: TDV `aydin` "bir süre … Sasa Bey'in elinde kalan şehir" yılsız; Tire Ş. Birgi'de Aydınoğlu 1307 (TDV `birgi`) ⇒ Birgi dilimi künye t'sinden ÖNCE biter, sorun değil. Hayalet riski: düşük, künye 4 yıl, bağlanacak 4 nokta (Aydın · Ayasuluk · Birgi · Tire) |
| `dehlek-sultanligi` | Dehlek Sultanlığı (Dahlak) | **1100** ("VI. (XII.) yüzyıldan itibaren de kendi meliklerince") | **1557-04-02** (Masavva'nın Osmanlı'ya geçişi; Dehlek'in kendisi için "Özdemir Paşa tarafından Yemen'in fethi sırasında" yılsız) | f `yuzyil` · t `gun` (Masavva) | TDV `dehlek`: "III. (IX.) yüzyılda Abbâsî idaresinden çıkan Dehlek, … VI. (XII.) yüzyıldan itibaren de kendi meliklerince …" · "Dehlek Özdemir Paşa tarafından … Osmanlılar'ın eline geçti" · TDV `masavva`: "2 Cemâziyelâhir 964'te (2 Nisan 1557) Özdemir Paşa tarafından Osmanlı topraklarına katıldı" | ⚠️ t için Dehlek adlı yıllı cümle YOK ⇒ Masavva günü komşudan (§4 "komşu günü şartlı serbest": aynı olay silsilesi, yakın konum; kayda "gün komşudan: Masavva · TDV masavva" yazılır). Ara dönemler: tâbiyet ("bazan Habeşistan'da … hıristiyan krallara, bazan Mısır'daki müslüman sultanlara tâbi") ⇒ `v:`; 1526-1543 Ahmed Gran himayesi (`v:adal`?); Portekiz işgalleri 1520 · 1541 ⇒ `isg:` |
| `tesalya-sirp-beyligi` | Tesalya Sırp Beyliği (Simeon Uroš, Tırhala) | **1359-08-01** | **1372** | f `ay` · t `onyil` | **AKADEMİK (birincil, İslâm dünyası dışı):** D. M. Nicol, *The Despotate of Epiros 1267–1479* (Cambridge 1984; archive.org `despipiros`): "a charter of Symeon Uroš dated August 1359" · "In 1359 the Serbian Emperor Symeon Uroš issued a chrysobull …" · "In Thessaly the days of Serbian rule were already over. Symeon Uroš had died about 1371 … Their son John Uroš reigned at Trikkala for not much more than a year … His place in Thessaly was taken not by a Serbian but by a Greek, Alexios Angelos Philanthropenos" · TDV `tirhala` (ikincil): "1359-1393 yıllarında burası Batı Tesalya'daki küçük Sırp beyliğinin ikametgâhı idi" | 🔴 **TDV ↔ Nicol çelişkisi (⑥):** TDV Sırp beyliğini 1393'e taşıyor; Nicol (akademik, bu alanın uzmanı) ~1372'de bitiriyor ve yerine Rum Angelos Philanthropenos'u koyuyor (1382'den Bizans'a tâbi). §4 gereği İslâm dünyası dışında akademik birincil ⇒ **t ≈1372**. 1372/73-1393/94 için **5. künye adayı:** `tesalya-angelos` (Alexios → Manuel Angelos Philanthropenos; 1382'den `v:bizans`), ya da `__BOSLUK__` (N). 1349-1355 Tesalya Duşan'ın İmparatorluğu'nda (TDV "1349'da … Sırp Çarı Stefan Duşan") ⇒ mevcut `sirbistan` künyesine bağlanır (künye varlığı bu turda taranmadı) |

### Hayalet kontrolü (§3.5)
- Dört künyenin ömrü bağlanacak noktaların düzeltme dilimlerini KAPSIYOR. Hiçbiri noktaya kendi ömrünün dışında
  yazılmayacak.
- Tırhala zinciri düzeltildi:
  - eski önerim "Sırp 1349-1393" (SAHIP-BOLGE §1.2, TDV'ye dayanıyordu) ⇒ **Nicol ile düzeltildi**.
  - Yeni zincir: Sırp 1349-1355 (Duşan, `sirbistan`) · ? 1355-1359 · `tesalya-sirp-beyligi` 1359-1372 ·
    Angelos 1372/73-1393/94 · Osmanlı 795-796/1393-94.
  - 1355-1359: Nicol'da Nikephoros II Orsini'nin Tesalya'yı alması (1356-1359) var, bu turda tam okunmadı ⇒
    ÖLÇÜLEMEDİ.

## Öz-düzeltme
SAHIP-BOLGE §1.2'deki Tırhala satırı ("Sırp 1349-1393", TDV) eksikti. Akademik birincil kaynak 1372/73'te Sırp
yönetimini bitiriyor. İslâm dünyası dışında TDV'yi birincil saymamak kuralı tam bu vakayı yakaladı: TDV'nin cümlesi
"Sırp beyliğinin ikametgâhı" 1393'e kadar uzanıyor, Nicol'ün cümlesi "the days of Serbian rule were already over".
