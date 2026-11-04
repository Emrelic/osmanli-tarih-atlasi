# 18 · Bâbürlü İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (saat kaydedilmedi)

## Özet
- Künye: 2 (`babur-imparatorlugu` 1526-04-21→1857-09-21; Sûrî arası `sur-hanedani` 1540-05-17→1564-01-01 AYRI künye olarak mevcut, eksik değil). Yerleşim: 91 (Bâbür) + 32 (Sûr).
- Ölçer: Bâbür 79 kırılma günü, **67 AÇIK** (±30 günde alâkalı madde yok); Sûr 5 kırılma, 5 AÇIK. Evren (olaylar*/kronoloji_sinir*) imparatorluğun kuruluşunu, Kannauc'u, 1555 Delhi'yi, Ekber'in neredeyse tüm fetihlerini ve 1857 sonunu içermiyor; künyenin kendi `kronoloji[]`si evren dışıdır.
- En ağır 3 bulgu:
  1. **Kurucu olaylar evrende yok:** Panipat 21 Nisan 1526, Kannauc 17 Mayıs 1540, Delhi 23 Temmuz 1555, Panipat II 5 Kasım 1556 — dördü de TDV + CHI IV ile gün düzeyinde çift teyitli, haritada sınır kırıyor, madde yok.
  2. `sur-hanedani.kaynak` "TDV'de müstakil maddesi yok" diyor; **TDV `suriler` maddesi var ve okundu** (1540, 23 Temmuz 1555, 1564). Künye kaynağı yanlış.
  3. Sınır-künye tutarsızlıkları: Gaur/Dakka/Patna `s:` Sûr'a **1538-01-01**'de geçiyor ama Bengal künyesi bu olayı 1538-04-06 yazıyor (Banglapedia, TDV değil) ve Sûr künyesi f=1540-05-17 — Sûr künye ömründen 2 yıl önce yerleşim sahibi; Bijapur `s:` 1686-09-12 vs künye t=1686-09-22.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| babur-imparatorlugu | Bâbürlü (Timurlu-Hint) İmparatorluğu | 1526-04-21 | 1857-09-21 | ana; kaynak:"baburluler" (TDV), ic_not TDV 1858 çelişkisi beyanlı |
| sur-hanedani | Sûrîler | 1540-05-17 | 1564-01-01 | Sûr arası (1540-1555) AYRI künye ✓; `kaynak:` yanlış ("bulunamadı") |
| bengal-sultanligi | Bengal Sultanlığı | 1340-01-01 | 1576-01-01 | komşu; Rajmahal 1576-07-12 `s:` sınırı ile künye t 6 ay farklı |
| gucerat-sultanligi | Gucerât Sultanlığı | 1407-01-01 | 1573-01-01 | komşu; Sûrat/Kanbâyet `s:` 1573-02-26, Ahmedâbâd 1572-11-18 |
Eksik evre: Hümâyun'un Sûrî öncesi/sonrası ayrımı için ek künye gerekmez (aynı polity, 1540-1555 arası Sûr). Karrani Bengal (1564-1576) `bengal-sultanligi` altında yazılı; Karrani ayrı hanedandır (Hüseyin Şahi değil) — künye adı/ic_not'ta beyan gerekir (bkz. d).

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f 1526-04-21 (Birinci Panipat) | 1526-04-21 | TDV `baburluler`/`babur` (E. Konukçu): «Nisan 1526'da» (gün yok) | Haig-Burn (ed.), Cambridge History of India vol. IV (1937), archive.org cambridgehistory04raps, Bâbür bölümü: «On 21 April at daybreak the Afghans were seen to approach» | **Uyuşuyor, çift teyit** (gün CHI IV, ay TDV) |
| f2 Kâbil'in alınışı (1504-10-01 `s:` sınırı) | `Kâbil s: timurlu→babur 1504-10-01` | TDV `babur` (Konukçu): «kan dökmeden … ele geçirip … yerleşti (1504)» (gün yok) | Beveridge/Baburnama, EIr — okunamadı | Gün TDV'de yok; `s:` sınırı "gün" iddiası kaynaksız; ya 1504-01-01'e çek ya Baburnama günü ve madde. Ayrıca Kâbil 1504 öncesi `timurlu` yazılı ama Bâbür'ün Kâbil'i Argun (Muqîm) elinden aldığı bilgisi kontrol edilmeli (EIr "BABUR", erişilemedi) |
| Sûr arası: Kannauc 1540-05-17 | 1540-05-17 | TDV `baburluler`: «17 Mayıs 1540» (Kannevc, Hümâyun Agra ve Delhi'den çıkar) | CHI IV: «17 May 1540» Kanauj | **Çift teyit** |
| Delhi'nin geri alınışı 1555-07-23 | 1555-07-23 | TDV `suriler`: «23 Temmuz 1555 (4 Ramazan 962)» | CHI IV: «once more entered Delhi» 23 July 1555 (Sirhind galibiyeti 22 Haziran 1555) | **Çift teyit** |
| Panipat II 1556-11-05 | 1556-11-05 (Pânipat s) | TDV `suriler`: İskender ile ilgili yalnız «ikinci Panipat»; gün yok | CHI IV: «on 5 November, 1556, on the historic plain of Panipat» | CHI IV gün; ikinci kaynak okunamadı (TDV günsüz) |
| t 1857-09-21 | 1857-09-21 | TDV `baburluler`: «Aralık 1858'de … Rangun'a sürüldü»; soy tablosu 1253-1274 H (1837-1858 M) ⇒ hânedanın sonu **1858** | Haig-Burn kapsamı dışı (CHI IV 1707 civarında biter); CHI VI erişilemedi | **TDV esas ⇒ hânedan t=1858.** Teknik gerekçe: 21 Eylül 1857 Delhi'nin teslimi/Bahâdır Şâh'ın esiri (web özeti, 20/21 Eyl çelişkili, kaynak dayanak değil) = toprak sonu; haritada Delhi `s:` zaten 1788'de biter. ic_not bunu zaten beyan ediyor ⇒ künye t'yi 1858-12-?? yapmak için gün gerekli; **önerim: t aynı kalsın, `kaynak:`a TDV `baburluler` 1858 eklensin, hânedan sonu maddesi 1858 olarak ayrı yazılsın** |
| Sûr bitişi 1564-01-01 | 1564-01-01 | TDV `suriler`: «1564 (971)» Bengal'de hânedanın sonu | ikinci kaynak okunamadı (EIr/CHI IV Bengal bölümü) | Tek kaynak; yıl hassasiyeti, 1564-01-01 uygun |
| Ekber tahta çıkışı | künye-içi `1556-01-01` | CHI IV: Hümâyun ö. 26 Ocak 1556, Ekber 14 Şubat 1556 ilan | TDV `baburluler`: Hümâyun ö. «28 Ocak 1556» | **Çelişki:** TDV 28 Ocak ↔ CHI IV 26 Ocak; ikisi ic_not'ta yazılmalı (TDV esas: 28 Ocak) |
| Ekber ölümü | evrende yok | TDV `ekber-sah`: «3 Ekim 1605'te … 16 Ekim günü» | CHI IV: «midnight on 25-26 October» (Jülyen/Gregoryen farkı olasılığı) | **Çelişki**, iki kaynakla yazılmalı |

## c) Kronoloji
Evrende (olaylar*/kronoloji_sinir*) var olanlar (dosya:satır):
- Kandehar Argun→Bâbür 1522-09-06: `kronoloji_sinir_asya_zincir_1024.js:124`.
- Kandehar Bâbür→Safevî 1556 (yıl): `olaylar_2s_0919.js:511`.
- Mâlvâ'nın kesin katılması 1562-01-01: `kronoloji_sinir_asya.js:43` (sınır 1561-03-29 ile 9 ay; uyuşmuyor).
- Fârûkîler/Asîrgarh 1601-01-01: `kronoloji_sinir_asya.js:51` (CHI IV: Asirgarh «6 January, 1601» ⇒ 1601-01-06; gün eklenebilir).
- Rajmahal 1576-07-12: `kronoloji_sinir_nokta2.js:33`.
- Kalyani 1686, Wadhwan/Dholka (Gucerât-Maratha-Bâbürlü devirleri): `kronoloji_sinir_dogu_500_1281.js:9995-10375`.
- Bengal özerkliği 1717: `kronoloji_sinir_nokta2.js:44`. Sûr sonu 1564: `kronoloji_sinir_asya.js:44` (taraflar yalnız ["sur-hanedani"] — yeni sahibi `bengal-sultanligi` taraf olarak yoksa ölçer "alâkalı" saymaz; muhtemel AÇIK nedeni).
- Bâbür'ün Fergana'yı bırakıp Kâbil'e gitmesi: `olaylar_ek17.js:269-276` (t 1504-01-01, kaynak TDV fergana/babur). Kâbil sınırı 1504-10-01 olduğu için ±30 g dışı.
Künye içi `kronoloji[]` (devletler.js, evren dışı): Bâbür 1526-04-21 kuruluş, Ekber 1556, Evrengzîb 1658, Nadir Şah 1739, Delhi 1803, 1857 — **evrene alınmadıkça Değişmez 2'ye sayılmaz.**

Eksik maddeler (hepsi `kapsam:"dis"`, önerilen satırlar; gün kaynağı bu oturumda okunanlar işaretli):
```
{ t:"1526-04-21", b:"Birinci Panipat Savaşı: Bâbür İbrâhim Lûdî'yi yendi, Bâbürlü İmparatorluğu kuruldu", tur:"kurulus", taraflar:["delhi-sultanligi","babur-imparatorlugu"], yer_id:"Pânipat", kaynak:"TDV baburluler/babur (Konukçu): «Nisan 1526'da»; Haig-Burn, CHI IV (1937), Bâbür bölümü: «On 21 April at daybreak the Afghans…»", ic_not:"çift teyit; TDV günsüz" },
{ t:"1527-03-16", b:"Hanva Savaşı: Bâbür Rana Sanga'yı yendi", tur:"savas", taraflar:["babur-imparatorlugu","racput"], yer_id:"Agra", kaynak:"CHI IV: «On 16 March, 1527, was fought the battle of Khanua»; TDV babur: «Mart 1527»" },
{ t:"1540-05-17", b:"Kannauc Savaşı: Şîr Şah Hümâyun'u yendi; Hümâyun Agra ve Delhi'den çıktı, Sûrî hâkimiyeti başladı", tur:"savas", taraflar:["babur-imparatorlugu","sur-hanedani"], yer_id:"Kannauc", kaynak:"TDV baburluler (17 Mayıs 1540); CHI IV (17 May 1540)", ic_not:"çift teyit" },
{ t:"1555-07-23", b:"Hümâyun Delhi'ye yeniden girdi; Sûrî hâkimiyeti sona erdi", tur:"toprak-kazanc", taraflar:["sur-hanedani","babur-imparatorlugu"], yer_id:"Delhi", kaynak:"TDV suriler (23 Temmuz 1555 / 4 Ramazan 962); CHI IV (23 July 1555)", ic_not:"çift teyit; Sirhind galibiyeti 22 Haziran 1555 ayrı madde" },
{ t:"1556-11-05", b:"İkinci Panipat Savaşı: Bâbürlüler Hemu'yu yendi, Sûrî artığı Pânipat'tan çıkarıldı", tur:"savas", taraflar:["sur-hanedani","babur-imparatorlugu"], yer_id:"Pânipat", kaynak:"CHI IV: «on 5 November, 1556, on the historic plain of Panipat»; TDV suriler (gün yok)" },
{ t:"1568-02-23", b:"Çitor kalesi Ekber'e düştü", tur:"toprak-kazanc", taraflar:["racput","babur-imparatorlugu"], yer_id:"Çitor (Chittorgarh)", kaynak:"CHI IV: «On the night of 23 February, 1568»" },
{ t:"1561-03-29", b:"Sarangpur Savaşı: Baz Bahâdır yenildi, Mâlvâ Bâbürlülerin eline geçti", tur:"toprak-kazanc", taraflar:["malva-sultanligi","babur-imparatorlugu"], yer_id:"Mandu (Mândû)", kaynak:"CHI IV: Sarangpur 29 March (yıl 1561 bağlamdan)" },
{ t:"1572-11-18", b:"Ekber Ahmedâbâd'a girdi, hutbe okundu", tur:"toprak-kazanc", yer_id:"Ahmedâbâd", kaynak:"CHI IV: «Akbar reached Ahmadabad on 20 November» (kaynak 20, atlas 18: 2 gün fark; yıl bağlamdan)" },
{ t:"1573-02-26", b:"Sûrat Ekber'e düştü; Gucerât fethi tamam", tur:"toprak-kazanc", yer_id:"Sûrat", kaynak:"CHI IV: «Surat fell on 26 February 1573»" },
{ t:"1574-08-04", b:"Ekber Patna'ya vardı; Bihâr Bâbürlülere geçti", tur:"toprak-kazanc", yer_id:"Patna (Azîmâbâd)", kaynak:"CHI IV: «reached Patna on 4 August» (yıl bağlamdan; atlas sınırı 1574-08-03)" },
{ t:"1586-10-15", b:"Muhammed Kâsım Han Srinagar'a girdi, Keşmir Bâbürlü oldu", tur:"toprak-kazanc", yer_id:"Srinagar (Keşmir)", kaynak:"CHI IV: «entered Srinagar» 15 Ekim (yıl bağlamdan; atlas sınırı 1586-10-01)" },
{ t:"1600-08-28", b:"Ahmednagar kalesi fırtınayla alındı", tur:"toprak-kazanc", yer_id:"Ahmednagar", kaynak:"CHI IV: «was stormed on 28 August» (yıl bağlamdan; atlas 1600-08-28 ✓)" },
{ t:"1605-10-26", kesinlik:"gun", b:"Ekber öldü; Cihangir tahta çıktı (3 Kasım 1605)", kaynak:"CHI IV: «midnight on 25-26 October»; TDV ekber-sah: 16 Ekim — ÇELİŞKİ ic_not'ta iki kaynak" },
{ t:"1622-06-22", b:"Safevîler Kandehar'ı aldı", kaynak:"CHI IV: «(June, 1622)» — gün kaynakta yok; atlas 1622-06-22 gün iddiası kaynaksız" },
{ t:"1649-02-22", b:"Kandehar Bâbürlülerden Safevîlere geçti", kaynak:"TDV kandehar: «1058'de (1648) Safevîler tamamen şehre hâkim oldular» — TDV 1648 ↔ atlas 1649-02-22: ÇELİŞKİ" }
```
(Sûr 1538 Gaur: `1538-04-06` Banglapedia kaynaklı; TDV'de yok, CHI IV: «the city was taken soon after» — gün yok. Gün için ikinci kaynak bulunana kadar `1538-01-01` yıl hassasiyeti + madde yıl düzeyinde.)

## d) Harita uyumu
Ölçüm: Bâbür 79 kırılma / 67 AÇIK; yıllara göre yerleşim: 1521:3 1538:27 1555:4 1572:31 1589:54 1606:64 1640:68 1674:69 **1691:85 (en geniş)** 1725:44 1759:13 1793:3 1827:2. Sûr: 32 yerleşim (1540-1555), 5 kırılma / 5 AÇIK.
1691 sahipliği (85 yerleşim) listesi okundu: Delhi, Agra, Lahor, Multan, Kâbil, Gazne, Peşâver, Attock, Srinagar, Tatta, Şikârpûr, Ahmedâbâd, Sûrat, Mandu, Uccayn, Patna, Gaur, Dakka, Çatgam, Hûglî, Kattak, Puri, Devagiri, Ahmednagar, Bîcâpur, Golkonda, Haydarâbâd, Vijayanagara, Vellor, Arkot, Masulipatnam, Asîrgarh, Burhânpûr, Nadia, Kalyani vb. CHI IV/TDV çerçevesinde bilinen en geniş sınırla (Evrengzîb 1687-1690, Doğu Dekken ve Karnatik) uyuyor; bilinen sınırın dışında Bâbürlü gibi görünen yer yok. Kandehar 1691'de Bâbürlü değil ✓ (1649'da kaybı). Eksik/şüpheli: Kançipuram 1687'de alınıp 1690'da kaybı (kaynaksız), Raygad 1689-11-03 (kaynak okunmadı), Vijayanagara (Hampi) harabe — **kaynak sınırı belirtilmeli**.

En önemli ~15 AÇIK kırılma (hepsi için madde önerisi c'de):
| Gün | Yerleşimler | Öneri |
|---|---|---|
| 1504-10-01 | Gazne, Kâbil, Peşâver | madde: Bâbür Kâbil'de (TDV yalnız 1504); `s:` gününü Baburnama'dan al, yoksa 1504-01-01 |
| 1526-04-21 | Agra, Benâres, Cavnpur, Câlandhar… | Panipat maddesi |
| 1540-05-17 | aynı kümede (Sûr'a geçiş) | Kannauc maddesi (kayıp+kazanç tek madde) |
| 1555-07-23 | aynı küme | Delhi maddesi |
| 1556-11-05 | Pânipat | Panipat II |
| 1557-01-01 | Multan | Multan'ın Sind'den (Argun) alınışı — kaynak okunmadı; TDV `multan`/`argunlular`'a bakılmalı |
| 1559-01-01 | Ecmîr | kaynak okunmadı (Ajmer 1556-59) |
| 1561-03-29 | Mandu, Uccayn | Sarangpur maddesi (Mâlvâ 1562 maddesi 9 ay uzak: tarihi 1561-03-29'a çek) |
| 1568-02-23 | Çitor | Çitor maddesi |
| 1573-02-26 | Baroda, Broaç, Cûnâgadh, Kanbâyet | Sûrat maddesi |
| 1574-08-03 | Gayâ, Patna | Patna 4 Ağustos maddesi (sınır 1 gün kaymalı) |
| 1576-01-01 | Nadia | `s:` sınırı 1576-07-12'ye çekilmeli (Nadia kendi sınırı Rajmahal 1576-07-12 ile aynı olmalı) |
| 1586-10-01 | Cammû, Srinagar | Keşmir maddesi |
| 1600-08-28 | Ahmednagar | Ahmednagar maddesi |
| 1622-06-22 / 1638-01-01 / 1649-02-22 | Eski Kandehar | kaynak sınırı kaynaksız; 3 gün de beyanlı değil |
Kalan ~52 AÇIK (ölçer listesinde 7'si "… 7 açık daha" diye kesilmiş, ayrı dökülmedi): Ekber sonrası fetihler (1592-1717 arası) ve 1690-1765 arası kayıplar (Maratha/Nâdir/Dürrânî/İngiliz); her biri `s:` sınırı için tarih+kaynak ister. Kayıtları taramadım; ölçer tam listesi KASA'da yeniden koşturulmalı. Wadhwan/Dholka/Kalyani zaten madde taşıyor.
Sûr 5 AÇIK: 1538-01-01 (Gaur,Dakka,Gayâ,Bhâgalpûr; künye f'den önce), 1540-05-17, 1555-07-23, 1556-11-05 (hepsi yukarıdaki maddelerle kapanır), 1564-01-01 (madde var; `taraflar`a "bengal-sultanligi" eklenmeli).
Sûr `baskent:"Delhi (Sasaram) → Gaur"`: TDV `suriler` merkezi **Patna** der — künye başkent alanı düzeltilmeli.
Sûr 1538-1540 dilimi: Gaur `s: sur-hanedani 1538-01-01` — Hümâyun'un Gaur'a girişi (Ağustos 1538 civarı, CHI IV günsüz) ve Chausa (26 Haziran 1539, CHI IV) Sûr hâkimiyetini kesintiye uğratıyor; haritada Bâbürlü dilimi yok. Beyan gerekli.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `sur-hanedani`: `kaynak:"suriler"` (bulunamadı yazısı kaldırılır); `baskent:"Patna (Şîr Şah merkezi) → Delhi"` (TDV suriler: merkez Patna); f'den önce Gaur sahipliği için ic_not beyanı.
2. `babur-imparatorlugu` `ic_not`: Ekber (Hümâyun ö. TDV 28 Ocak ↔ CHI 26 Ocak 1556) ve Ekber ölümü (TDV 16 Ekim ↔ CHI 25-26 Ekim 1605) çelişkileri; 1858 beyanı kalır.
3. c)'deki 15 madde satırı yeni `data/kronoloji_sinir_babur_1103.js` (veya mevcut asya dosyası) + `index.html` `<script>`.
4. `kronoloji_sinir_asya.js:44` Sûr sonu: `taraflar:["sur-hanedani","bengal-sultanligi"]`; `:43` Mâlvâ 1562-01-01 → 1561-03-29.
5. Yerleşim `s:` sınırları: Nadia 1576-01-01 → 1576-07-12; Patna 1574-08-03 → 1574-08-04 (CHI IV) isteğe bağlı; Bîcâpur 1686-09-12 ↔ bicapur künye t 1686-09-22 çelişkisi kapat.
6. Eski Kandehar `s:` 1622-06-22 / 1638-01-01 / 1649-02-22: gün kaynağı yoksa 1622-01-01 (CHI «June 1622» ⇒ ay hassasiyeti), 1638 ve 1648/1649 TDV ile ayrı beyan.

## Erişilemeyen kaynaklar
- CHI vol. IV (archive.org cambridgehistory04raps) 300000-800000 aralığı yalnız özetlenerek okundu (WebFetch özeti); bölüm/sayfa numaraları verilemedi. Soru: tarihler yukarıdaki alıntılarla birebir mi?
- CHI vol. IV 800000+: Aurangzeb 1658 tahta çıkış günü, Bijapur 12/22 Eylül 1686, Golkonda 21 Eylül 1687, Raigad 3 Kasım 1689, Aurangzeb ö. 3 Mart 1707, Nadir Şah 1739: okunmadı (WebFetch özeti kapsam dışı).
- Encyclopaedia Iranica "BABUR" (iranicaonline.org/articles/babur): 403. Soru: Kâbil'in Muqîm Argun'dan alınış günü (Ekim 1504?) ve 1504 öncesi sahibi.
- Baburnama (Beveridge çevirisi), Kâbil 1504 günü.
- Sûr dönemi için ikinci kaynak: CHI IV Bengal/Karrani bölümü (1564, Süleyman Karrani) ve Banglapedia dışı akademik bir kaynak (Gaur 6 Nisan 1538).
- 1857-1858: CHI vol. VI veya Dalrymple dışı hakemli bir kaynak (Bahâdır Şah II'nin 20/21 Eylül 1857, Ocak-Mart 1858 yargılama, 7 Ekim 1858 yolculuk, 10 Aralık 1858 Rangun): yalnız web özeti (dayanak değil) görüldü.
- TDV `kandehar` (Özcan) 1595/1622/1638/1649 tarihlerini vermiyor; ikinci akademik kaynak (EIr KANDAHAR iv, atlasın kendi maddesi atıf yapıyor) okunmadı.

## JSTOR teyidi (HAVVA SALI, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- II. Bahâdır Şah'ın yakalanışı (1857) ve sürgün (1858): JSTOR'da gün veren makale bulunamadı.

## Iranica / Oxford Reference teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- Iranica «Bābor, Ẓahīr-al-Dīn Moḥammad»: Muharrem 910 (Haziran-Temmuz 1504) Horasan'a çıktı, «seized
  the kingdom of Kabul instead». Gün/ay ve kimden alındığı yok ⇒ Kâbil 1504 **yıl** teyitli (hicrî 910
  Muharrem ∩ 1504 ⇒ en erken 1504-06-14; kesinlik yil, `ic_not` beyanı).
- Iranica «Kandahar iv» (EIr XV/5 s. 466-494): 1595 Muzaffer Hüseyin Mirza teslim etti (yıl) · 1031/1622
  Şah Abbas 5-6 haftalık kuşatmayla aldı (ay yok) · 1638 Ali Merdan Han Bâbürlülere teslim etti (yıl) ·
  **1649: II. Abbas «took the city on 22 February»** (Vahîd Kazvînî s. 440 vd.; Saksena s. 225).
  **Hüküm:** Kandehar 1649 kırılması → **1649-02-22** (Iranica; TDV'nin 1648'i kuşatmanın başlangıcı —
  çelişki `ic_not`ta iki kaynakla beyan). 1595/1622/1638 yıl hassasiyetiyle (YYYY-01-01 + kesinlik yil;
  1622 hicrî 1031 ∩ 1622 ⇒ kesişimin ilk günü 1622-01-01... hicrî 1031 başı 1621-11-16 ⇒ 1622-01-01).
