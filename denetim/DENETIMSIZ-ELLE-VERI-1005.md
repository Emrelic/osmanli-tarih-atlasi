# DENETIMSIZ-ELLE-VERI-1005 — hiçbir kapının okumadığı 14 elle yazılmış dosyada kusur araması

Sevk: YILDIRIM BAYEZIT (cross-session, 5 Ekim 2026) · bulgu kaynağı `denetim/LAB-D8-UYE-1005.md` §10.2 (B′ kovası, 14 dosya).
Sınır: `data/` · `arac/` · `js/` YALNIZ OKUNDU. Kapı yazılmadı, araç değiştirilmedi. Ölçüm anı: `main` @ `d620ca95`.
Alet (scratchpad, depoya girmedi): `denet.js` (sınav) · `sinav.js` (iki yönlü kontrol) · `k.js` (kişi sınıflandırması). Dosyalar `node vm` ile **olduğu gibi** yüklendi (tarayıcının çalıştırdığı JS'in aynısı; regex ayrıştırma YOK).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (dosyaların yalnız ilk ~900 baytına bakılarak)

Tahmin: **toplam 15–40 kusur**, şu dağılımla:

| Sınıf | Öngörü | Niçin |
|---|---|---|
| `f > t` / sıfır uzunluk | 0–2 | elle yazılan sefer okları iki uçlu, yazarlar `tarih_hassasiyet` dolduracak kadar özenli |
| devlet id `devletler.js`te YOK | 3–10 | `savas_kunye_1` `devlet_id`, `ittifaklar` `uyeler[].devlet`, `seferler_*` `devlet` elle yazılmış; künye 704→895 hızla büyüdü, yeniden adlandırma olmuş olabilir |
| KÜNYE PENCERESİ dışı (hayalet devlet) | 5–20 | **EN RİSKLİ SINIF.** `iran f:1925` vakasının aynısı: genel bir id'ye (`iran`, `rusya`, `ingiltere`) bağlı Osmanlı dönemi kaydı, künye o id'yi modern devlet olarak açtıysa pencere dışı kalır. Riskli: `seferler_p0064/65` (`rusya` 1736/1769), `ittifaklar`, `savas_kunye_1` |
| mükerrer id | 0–2 | dosyalar küçük, tek yazarlı |
| `kaynak` boş | 0–5 / dosya (`kisiler.js`/`padisahlar.js`de alan şemada hiç olmayabilir) | sefer dosyaları kaynaklı görünüyor |
| `antlasma_haritalari` `sinir_id` çözülmüyor | 0–3 | sınır dosyaları yeniden adlandırıldıysa |

En riskli dosya öngörüsü: hacimce **`kisiler.js`**; künye penceresi sınıfında `seferler_p0064/p0065` ve `ittifaklar`.

## 0.1 ÖNGÖRÜ TUTTU MU — ölçümden sonra

| Sınıf | Öngörü | Ölçülen | Tuttu mu |
|---|---|---|---|
| toplam (gerçek kusur, kaynak toplu borcu hariç) | 15–40 | **20 üye / 11 sınıf** | ✓ aralıkta — ama **dağılım tutmadı** |
| `f > t` / sıfır uzunluk | 0–2 | **0** (14 dosya, 504 kayıt) | ✓ |
| devlet id YOK | 3–10 | **1** (`sibir`) | ✗ fazla tahmin |
| künye penceresi (hayalet devlet) | 5–20, en riskli | **1 gerçek** (`edigu`) + **1 yanlış polity** (`abdulaziz-bin-suud`) · seferler/ittifak/savaş/antlaşmada **0** | ✗ **en büyük yanılgı** — `rusya` künyesi 1547–1917, `habsburg` 1282–1918: uzun ömürlü künyeler 18. yy kayıtlarını rahatça kapsıyor. `iran` vakasının eşi bu 14 dosyada YOK |
| mükerrer | 0–2 | **3 id çifti** (padisahlar) + **1 dosyalar arası ad** | ✗ az tahmin |
| `sinir_id` çözülmüyor | 0–3 | **0** (3/3 çözülüyor) | ✓ |
| kaynak boş | 0–5/dosya | `kisiler` **266/288** · `padisahlar` 2 · `seferler_p0037` 1 | `kisiler` şema borcu (aşağıda) |
| ÖNGÖRÜLMEYEN sınıflar | — | padişah iç çelişkisi (ölüm < saltanat sonu) · `saltanat_yil` anlam kayması · ok rengi çözülmüyor · eksik taraf atfı · **yüklü ama okuyan kodu olmayan 2 dosya** | — |

---

## 1. Dosya dosya tablo

Kayıt sayıları dosyanın kendi dizisinden (`node vm`), toplam **504 kayıt** (14 dosya).

| Dosya | Kayıt | Sınanan soru | Gerçek kusur | Beyan/bilgi (kusur DEĞİL) |
|---|---|---|---|---|
| `padisahlar.js` | 41 | 9 (mükerrer id · kaynak · tarih ayrışır · f≤t · sıfır uzunluk · ölüm ≥ saltanat sonu · doğum < saltanat başı · `saltanat_yil` = to−from · zincir boşluk/çakışma) | **3 sınıf / 5 üye** → §2.1 | kaynaksız 2 (`fetret`, `hilafet` — `ozel` kayıtlar) · zincirde 1 aylık boşluk (`mehmed1`→`murad2`, ay hassasiyeti) |
| `kisiler.js` | 288 | 9 (mükerrer id · kişi id = padişah id · aynı ad · kaynak · tarih · f≤t · devlet id · künye penceresi · koordinat) | **3** → §2.2 | kaynaksız **266/288** → §3 · künye penceresini "taşıyan" 56 kişi KUSUR DEĞİL (§2.2 not) |
| `ittifaklar.js` | 2 (+10 üye) | 9 (mükerrer · kaynak · tarih · f≤t · sıfır · devlet id · pencere · madde.t pencerede · üye penceresi ittifakta) | **0** | 12 atfın 12'si çözüldü · `t:null` iki yerde `t_damga:"bulunamadı …"` ile BEYANLI · ⚠️ **okuyan kod yok** (§4) |
| `antlasma_haritalari.js` | 4 (10 bölge) | 9 (mükerrer · tarih · devlet id · pencere · `sinir_id`→`HUKUKI_SINIRLAR` · geometri kaynağı · koordinat · kutu w<e s<n) | **0** | 10 taraf atfı çözüldü · 3 `sinir_id` çözüldü |
| `savas_kunye_1.js` | 20 (40 taraf) | 11 (mükerrer id · ad+t · kaynak · tarih · `bag_ekokuma`→EKOKUMA* · taraf ≥ 2 · `devlet_id` var · id künyede · pencere · kayıp ≤ mevcut · iki taraf aynı devlet) | **7** (eksik `devlet_id`, künye VAR) → §2.3 | 7 koalisyon tarafında `devlet_id` yok (tek id'ye sığmaz) · 20/20 `bag_ekokuma` çözüldü · ⚠️ **okuyan kod yok** (§4) |
| `koridor_f5c9a5.js` | 59 düğüm + 53 kenar | 11 (düğüm id başka dosyada · koordinat · <3 km mükerrer · kaynak beyanı · kenar ucu çözülür · u1≠u2 · tarih · f≤t · sıfır · km ≥ kuş uçuşu · hız) | **0** | `lanzaka` lat/lon `null` — kaydın kendi `kaynak` alanında BEYANLI (koridor.js'teki ikizi de null, tahta M-0261) ⇒ 1 kenar (`lanzaka–h2b-selanik`) konumsuz · 51/59 düğüm `kaynak:"bulunamadı"` BEYANLI · 47 kenar `saat_cinsi:"turetildi"`, 6 `turetilmedi` — hepsi başlıktaki 3–28 saat bandında |
| `seferler_p0037.js` | 1 | 12 (mükerrer · kaynak · tarih · f≤t · tur/sonuc/taraf sözlüğü · taraf↔devlet · devlet yok · yol · koordinat · dosyalar arası id/ad) | **2** → §2.4 | — |
| `seferler_p0064.js` | 6 | 14 (yukarıdakiler + devlet id · pencere · renk çözülür) | **0** | 6 atıf çözüldü (`rusya` ×5, `afsar` ×1), pencere içinde |
| `seferler_p0065.js` | 6 | 14 | **0** | 6 atıf (`rusya`) pencere içinde |
| `seferler_p0068.js` | 7 | 15 | **0** | 2 kayıt `devlet` yok + `taraf:"osmanli"` ⇒ Osmanlı varsayımı DOĞRU (Yusuf Ziya Paşa) |
| `seferler_p0071.js` | 3 | 15 | **1** → §2.4 | `p0071-hareket-ordusu-1909` Osmanlı varsayımı doğru |
| `seferler_p0074.js` | 1 | 14 | **0** | — |
| `seferler_p0077.js` | 10 | 15 (+ vuruş tarihi sefer penceresinde) | **0** | 10 atıf `osmanli`, 4 vuruş pencere içinde |
| `seferler_sefer_ok_0075.js` | 3 | 14 | **2** → §2.4 | — |

**Toplam gerçek kusur: 20 üye** (padisahlar 5 · kisiler 3 · savas_kunye_1 7 · seferler 5). Kaynak toplu borcu ayrı (§3).

---

## 2. Kusur listesi — üyelik

### 2.1 `padisahlar.js`

| # | Sınıf | Üye | Ölçüm |
|---|---|---|---|
| P1 | **KAYDIN İÇ ÇELİŞKİSİ: ölüm < saltanat sonu** | `osman1` | `olum:"1324-08-01"` ama `to:"1326-04"` (ve `orhan.from:"1326-04"`). Kayıt, Osman'ı öldükten **~20 ay sonra** hâlâ tahtta gösteriyor. Hangi uç doğru, kaynak hükmü ister (TDV `osman-gazi`); burada yalnız çelişki ölçüldü, kaynak açılmadı. |
| P2 | **MÜKERRER id — üç çift** | `murad2` (sıra 6, 8) · `mehmed2` (7, 9) · `mustafa1` (17, 19) | Kasıtlı: iki ayrı saltanat ayrı kayıt (ad'larda "(2. saltanatı)"). **AMA** `js/app.js:10124-10125` yorumu *"id alanları zaten benzersiz"* der ve `vefatKisiBul(id)` **İLK** eşleşmeyi döndürür (`app.js:10130`). Ölçülen sonuç: `vefat_id:"mehmed2"` (kronolojide 1 madde, 1481 vefatı) → **"II. Mehmed (1. saltanatı)"** kaydını (sıra 7, `from 1444-08 to 1446-09`, `saltanat_yil:2`) bulur, Fatih kaydını (sıra 9) DEĞİL. `vefat_id:"murad2"` → sıra 6 (1. saltanat kaydı). Kartvizitte bu alanların nasıl gösterildiği tarayıcıda **gözlenmedi** — ölçülen yalnız hangi kaydın döndüğüdür. |
| P3 | **`saltanat_yil` ANLAMI KAYIT KAYIT DEĞİŞİYOR** | `murad2` (sıra 6) | `saltanat_yil:28` = İKİ saltanatın TOPLAMI (23+5). Oysa aynı dosyada `murad2` sıra 8 `5`, `mehmed2` sıra 7 `2` / sıra 9 `30`, `mustafa1` `0.3` / `1.3` — hepsi **saltanat BAŞINA**. Tek kayıt öteki kuralı kullanıyor. |

### 2.2 `kisiler.js`

| # | Sınıf | Üye | Ölçüm |
|---|---|---|---|
| K1 | **DEVLET ID KÜNYEDE YOK** | `kucum-han` | `devlet:"sibir"` — `devletler.js` tarandı: `sibir` yok, `sibir-hanligi` VAR (1430-01-01..1598-08-20; Küçüm `t:1598` pencerede). Kaydın kendi `not`u da "Sibir Hanlığı'nın son hükümdarı" der. |
| K2 | **YANLIŞ POLİTY — kayıt kendiyle çelişiyor** (`D204` "devlet var, yeri yanlış" · `D205` sınıf ③ ardıl yapı) | `abdulaziz-bin-suud` | `devlet:"suud-ikinci"` (künye 1824-06-01..1891-01-24) ama kaydın `not`u *"1902'de Riyad'ı alarak üçüncü Suûdî devletini kuran"* der; `suud-ucuncu` künyesi VAR (1902-01-15..1932-09-18). Kişi 1876 doğumlu — ikinci devlet yıkıldığında 15 yaşında. |
| K3 | **HAYALET DEVLET — ölüm künyenin kuruluşundan ÖNCE** (`D203`) | `edigu` | `devlet:"nogay"` (künye **1440**-01-01..1783) · `t:"1420"`. Edigü, bağlandığı devletin künyesi açılmadan 20 yıl önce ölmüş. Kaydın `not`u bağı gerekçelendiriyor ("Nogay Ordası'nın çekirdeğini oluşturan Mangıt beyi") ⇒ **sınıflandırma kararı kaynak/koordinatörde**: ya `altinorda` (1242–1502, ölümünü kapsar) ya künye genişletilir. Burada düzeltme ÖNERİLMİYOR, sınıf belirsiz. |

📌 **Künye penceresini "taşıyan" 56 kişi KUSUR DEĞİLDİR — ve bunu ölçerek ayırdım.** İlk koşu 57 aşım verdi. `kisiler.js`te `f`/`t` **doğum..ölüm yılıdır** (`donem:"1483–1530"` ile birebir), devletin ömrü değil. Sınıflandırma (`k.js`):
- **38 × "doğum < künye kuruluşu"** — kurucular ve devleti sonradan kuranlar (Babür, Timur, Cengiz, İsmail, Nadir Şah, Bolívar …). Doğal.
- **18 × "ölüm > künye yıkılışı"** — son hükümdarlar ve tahttan inenler (II. Nikolay, XVI. Louis, Thibaw, Liliuokalani, Cuauhtémoc, Abdullahi …). Doğal — **biri hariç** (`abdulaziz-bin-suud` → K2).
- **1 × "ölüm < künye kuruluşu"** — tek gerçek hayalet (`edigu` → K3).
⇒ Kişi kaydı için anlamlı soru *"pencereyle kesişiyor mu"* değil *"ölüm < kuruluş ya da doğum > yıkılış mı"*dır. İlk soru 57 üye verir ve 56'sı gürültüdür.

### 2.3 `savas_kunye_1.js` — 7 eksik `devlet_id` (künyesi VAR, pencere tutuyor)

| Üye | Taraf adı | Künye adayı (pencere ölçüldü) |
|---|---|---|
| `kunye-cirmen-1371.taraflar[1]` | Sırp despotluğu ve krallığı | `sirbistan-nemanjic` (1166..1402) |
| `kunye-ankara-1402.taraflar[1]` | Timur'un ordusu | `timurlu` (1370..1507) |
| `kunye-kosova2-1448.taraflar[1]` | Macar ordusu | `macaristan` (1000..1526-08-29) |
| `kunye-caldiran-1514.taraflar[1]` | Safevî ordusu | `safevi` (1501..1736) |
| `kunye-mercidabik-1516.taraflar[1]` | Memlük ordusu | `memluk` (1250..1517-04-13) |
| `kunye-ridaniye-1517.taraflar[1]` | Memlük ordusu | `memluk` (Ridaniye 1517-01-22 < 1517-04-13 ✓) |
| `kunye-mohac-1526.taraflar[1]` | Macar Krallığı ordusu | `macaristan` (künye bitişi = Mohaç günü 1526-08-29 — uç değer, hüküm koordinatörde) |

Koalisyon tarafları (`devlet_id` yok, **tek id'ye sığmaz — kusur sayılmadı**, 7): `nigbolu-1396`, `kosova1-1389`, `varna-1444`, `preveze-1538`, `cerbe-1560`, `inebahti-1571`, `ii-viyana-1683`. Her birinin `ad` alanı bileşenleri metinle sayıyor; şema çoklu id taşımıyor.
⚠️ Kusur sınıfı "eksik atıf": yanlış bir şey yazılmamış, doğru bir bağ YAZILMAMIŞ. Okuyan kod yok (§4), görünür etkisi şu an sıfır.

### 2.4 `seferler_*`

| # | Dosya | Üye | Sınıf | Ölçüm |
|---|---|---|---|---|
| S1 | `p0037` | "Abdülaziz'in Avrupa seyahati (1867)" | **KAYNAK ALANI YOK** | kaydın `kaynak`, `id`, `devlet`, `taraf` alanı hiç yok (6 alan: ad·tur·sonuc·f·t·yol) |
| S2 | `p0037` | aynı kayıt | **MÜKERRER — dosyalar arası** | `SEFERLER[82]` (`data/savaslar.js`) aynı ad, aynı `f`/`t` (1867-06-21..08-07). `app.js:5726` bu çifti biliyor ve harita tarafında ayıklıyor ⇒ **bilinen borç**, veri hâlâ iki yerde |
| S3 | `p0071` | `p0071-edirne-vakasi-1703` | **DEVLET YOK + RENK YOK ⇒ OSMANLI VARSAYILIR** | `app.js:5434-5439` yorumu bu kaydı zaten "Osmanlı DEĞİL, `devlet:`/`taraf:` yazmak VERİ işidir" diye adıyla sayıyor ⇒ **bilinen, açık borç** |
| S4–S5 | `sefer_ok_0075` | `p0075-misir-mora-girit-tahliye-1828` · `p0075-misir-suriye-cukurova-tahliye-1841` | **OK RENGİ ÇÖZÜLMÜYOR, YEDEK `renk` YOK** | `devlet:"misir-kavalali"` → künye `harita:"kavalali"` → `renkler.py:2051` BOYALAR'da VAR ama üretilmiş `DEVLET_HARITA`da (584 renk) **YOK** ⇒ `_cTarafRengi` gri `#9a9a9a` döner (`app.js:8184`) ⇒ `_seferRengiCoz` `m.renk`e düşer (`app.js:5451`) ⇒ kayıtta `renk` yok ⇒ ok `app.js:5320-5321`'in varsayılanıyla, **Osmanlı koyusu `#2b1006`** ile çizilir. "Ok rengi ülkenin rengidir" kuralı (`app.js:5430`) bu iki okta işlemiyor. (Zincir kod okunarak izlendi; tarayıcıda gözlenmedi.) |

---

## 3. Kaynak alanı — toplu borç (kusur sayısına KATILMADI, ayrı beyan)

| Dosya | Kaynaksız | Durum |
|---|---|---|
| `kisiler.js` | **266 / 288** | Şemada `kaynak` alanı **isteğe bağlı** olarak doğmuş (22 kayıtta var). `§4` "kaynak gizlenmez, bulunamadıysa `bulunamadı` yazılır" der; 266 kayıtta ne kaynak ne `bulunamadı` beyanı var. Tam üye listesi: §6 Ek A. |
| `padisahlar.js` | 2 / 41 | `fetret`, `hilafet` — ikisi de `ozel` (padişah olmayan ara dönem) kayıtları |
| `seferler_p0037.js` | 1 / 1 | §2.4 S1 |
| öteki 11 dosya | **0** | sefer/savaş/ittifak kayıtlarının tamamında alıntılı kaynak var; koridorda 51 düğüm `bulunamadı` BEYANLI (§4'e uygun) |

---

## 4. Yapısal bulgu — iki dosya YÜKLENİYOR ama OKUYAN KOD YOK

LAB "sitenin yüklediği" dedi; **yüklenmek gösterilmek değildir.**
- `window.ITTIFAKLAR` (`ittifaklar.js`) — `js/*.js` + `index.html` içinde adıyla **0** geçiş.
- `window.SAVAS_KUNYE_1` (`savas_kunye_1.js`) — **0** geçiş. Savaş toplayıcısı `savasKayitlariniTopla` (`app.js:4390`) `/^SAVASLAR(_…)?$/` ister; `SAVAS_KUNYE_1` `SAVASLAR` ile başlamadığı için **"benzeyen" listesine bile düşmez** (`k.indexOf("SAVASLAR") !== 0` ⇒ sessizce atlanır).
⇒ Bu iki dosyada içerik kusuru bulunsa da bulunmasa da **ekranda karşılığı yok**. Düzeltme sırası açısından: önce bağlanacaklar mı kararı, sonra içerik.
⚠️ Ölçüm `grep` iledir: hesaplanmış adla (`window["ITT"+…]`) erişim dışlanmadı; `Object.keys(window)` tarayan toplayıcıların desenleri okundu (SEFERLER, SAVASLAR, KORIDOR) — hiçbiri bu iki adı yakalamıyor.

Diğer 12 dosyanın okuyucusu ölçüldü: `PADISAHLAR`, `KISILER`, `SEFERLER_*` (`app.js:5188-5273` toplayıcısı), `ANTLASMA_HARITALARI` (`js/antlasma_harita.js`), `KORIDOR_H2B_DUGUM/_KENAR` (`app.js:6146`, `6183` — `/^KORIDOR(_[A-Za-z0-9]+)?_DUGUM$/` `_H2B` ekiyle eşleşiyor).

---

## 5. Boş küme — "kusur yok" mu, "yanlış soru" mu? (`§11`)

Sıfır kusur veren yerler tek tek ayrıldı:

| Sıfır | Sorulan evren boş mu? | İki yönlü sınav | Hüküm |
|---|---|---|---|
| künye penceresi — seferler/ittifak/antlaşma/savaş | **Hayır**: ittifak 12 + antlaşma 10 + savaş 26 + sefer 32 = 80 atıf, **80'i çözüldü**, her birinin penceresi basıldı (`sinav.js`) | Aynı işlev `kisiler.js`te 57 kez ÖTTÜ (gerçek pozitif `edigu` dâhil) ⇒ soru çalışıyor | **gerçek temiz** — ama ⚠️ uzun ömürlü künyeler (`rusya` 1547–1917, `habsburg` 1282–1918, `ingiltere` 927–1945) pencereyi neredeyse her 18.–19. yy kaydı için geçirir. Bu soru *"bu tarihte bu devlet var mıydı"* sorar, *"bu kayıt doğru polity'ye mi bağlı"* SORMAZ (`D204`). İkincisini yalnız `kisiler.js`te kaydın kendi `not`uyla çapraz okuyarak yakaladım (K2); sefer/savaş kayıtlarında bu çapraz okuma YAPILMADI ⇒ **ölçülemedi** |
| `f > t` / sıfır uzunluk | Hayır: 504 kaydın tamamı ayrıştı (ayrışmayan tarih 0) | — (pozitif kontrol yok; `padisahlar` zincir/ölüm sınavları aynı `norm` ile ÖTTÜ) | gerçek temiz |
| `sinir_id` / `bag_ekokuma` / koridor kenar ucu | Hayır: 3/3 · 20/20 · 106/106 kenar ucu kimlikle çözüldü (biri — `lanzaka` — beyanlı `lat:null`, km'si ölçülemedi) | — | gerçek temiz |
| koridor `km ≥ kuş uçuşu` | Hayır: 52 kenar karşılaştırıldı | ⚠️ **YANLIŞ SORU:** `km/kuş` oranı min = medyan = max = **1,00**. `km` alanı kaynaktan değil **koordinattan türetilmiş** (`saat_kaynak:"kuş uçuşu km / 4.25 km-sa"`) ⇒ bu soru tanım gereği hiç ötemez. Gerçek yol mesafesine karşı sınanamaz; `kaynak` alanları bunu açıkça beyan ediyor | **ölçülemedi**, temiz DEĞİL |
| mükerrer kişi adı / kişi id = padişah id | Hayır: 288 + 41 kayıt | — | gerçek temiz |

**ÖLÇÜLMEYEN (bu işin dışında kaldı):** ① kayıt içeriğinin kaynağa sadakati (TDV/akademik kaynak açılmadı — P1'in hangi ucunun doğru olduğu dâhil) ② sefer `yol` noktalarının karada/denizde oluşu (yalnız aralık + 1200 km ardışık sıçrama soruldu: 0) ③ `kisiler.devlet` alanının sitede okunup okunmadığı ④ sefer/savaş kayıtlarında "doğru polity" çapraz okuması ⑤ `padisahlar` portre yolları (alan yok, `durum_tablosu` "36 portre" der — sorulmadı).

**Belge bayatlığı (bilgi):** `VERI-YAPISI.md:544` `kisiler.js` için **247** der, ölçülen **288**.

---

## 6. Ek A — `kisiler.js` kaynaksız 266 id

candarli-hayreddin-pasa · candarli-halil-pasa · mahmud-pasa · pargali-ibrahim-pasa · koprulu-mehmed-pasa · kopruluzade-fazil-ahmed-pasa · merzifonlu-kara-mustafa-pasa · amcazade-huseyin-pasa · baltaci-mehmed-pasa · damad-ali-pasa · alemdar-mustafa-pasa · mustafa-resid-pasa · ali-pasa · huseyin-avni-pasa · mutercim-rusdu-pasa · lala-sahin-pasa · lala-mustafa-pasa · biyikli-mehmed-pasa · tiryaki-hasan-pasa · kemankes-kara-mustafa-pasa · evrenos-bey · pasa-yigit-bey · turahanoglu-omer-bey · gazi-osman-pasa · gazi-ahmed-muhtar-pasa · edhem-pasa · halil-pasa · fahreddin-pasa · kazim-karabekir-pasa · fevzi-pasa · ismet-pasa · enver-pasa · mustafa-kemal-pasa · turgut-reis · kilic-ali-pasa · muezzinzade-ali-pasa · seyh-edebali · davud-i-kayseri · seyh-bedreddin · idris-i-bitlisi · hoca-sadeddin-efendi · cem-sultan · turhan-hatice-sultan · abdulmecid-efendi · konstantinos11 · uzun-hasan · kansu-gavri · tahmasb · layos2 · janos-zapolya · jan-sobieski · katerina2 · serif-huseyin · kavalali-mehmed-ali-pasa · tosun-pasa · ismail-kamil-pasa · resid-mehmed-pasa · koca-husrev-pasa · hafiz-mehmed-pasa · ahmed-fevzi-pasa · omer-mekrem · abdullah-b-suud · codrington · napier · helmuth-von-moltke · palmerston · hunyadi-yanos · andrea-doria · don-juan · eugen · nelson · allenby · townshend · patrona-halil · kabakci-mustafa · milos-obrenovic · urabi-pasa · t-e-lawrence · hasan-tahsin · abbas1 · abbas2 · suleyman · sultan-huseyin · kara-yuluk-osman-bey · yakub-bey · kara-yusuf · cihan-sah · baybars1 · zahir-berkuk · barsbay · kayitbay · tomanbay · ferdinand1 · karl5 · rudolf2 · leopold1 · maria-theresia · josef2 · franz2 · matyas-corvinus · zygmunt3 · michal-korybut-wisniowiecki · vladislav2 · enrico-dandolo · ivan4 · mihail-fyodorovic · aleksandr1 · nikolay1 · nikolay2 · haci-giray · mengli-giray1 · devlet-giray · batu-han · ulug-muhammed · kucum-han · edigu · francois1 · louis14 · louis16 · felipe2 · elizabeth1 · victoria · george5 · pius5 · stefan-lazarevic · djuradj-brankovic · kara-yorgi · ivan-sisman · tvrtko1 · basarab1 · mircea · vlad3 · bogdan1 · stefan-cel-mare · othon1 · nadir-sah · aga-muhammed-han-kacar · feth-ali-sah · muhammed-sah-kacar · nasiruddin-sah · muhammed-bin-suud · muhammed-bin-abdulvehhab · suud-bin-abdulaziz · turki-bin-abdullah · abdulaziz-bin-suud · muhammed-bin-resid · yahya-hamiduddin · ahmed-bin-said · said-bin-sultan · huseyin-bin-ali · ahmed-karamanli · ahmed-el-mansur · muhammed-ahmed · abdullah-et-teayisi · amara-dunkas · ahmed-gran · gelawdewos · menelik2 · mevlay-muhammed · tarmasirin-han · seybani-han · ilbars-han · kerey-han · kenesari-han · erdeni-batur · tsevang-rabtan · yakub-bey-kasgar · kutbuddin-aybek · ibrahim-ludi · babur · ekber · evrengzib · bahadir-sah2 · alaeddin-hasan-behmen-sah · harihara1 · krisnadevaraya · sivaci · rancit-singh · haydar-ali · tipu-sultan · zhao-kuangyin · wanyan-aguda · cengiz-han · kubilay-han · zhu-yuanzhang · sejong · gojong · minamoto-no-yoritomo · tokugawa-ieyasu · meiji-imparatoru · dalai-lama5 · raden-wijaya · hayam-wuruk · parameswara · u-thong · rama1 · rama5 · le-loi · nguyen-anh · alaungpaya · thibaw · agung · sundiata-keita · sunni-ali · askiya-muhammed · idris-alooma · osman-dan-fodio · muhammed-bello · oba-ewuare · joao1 · nzinga · shaka · moctezuma2 · cuauhtemoc · pachacuti · atahualpa · simon-bolivar · kamehameha1 · george-tupou1 · miklos-horthy · jozef-pilsudski · tomas-masaryk · alexandru-ioan-cuza · dom-pedro1 · dom-pedro2 · jean-jacques-dessalines · liliuokalani · muhammed-davud-sah · serif-ul-hasim · andrianampoinimerina · ranavalona3 · sho-hashi · yagmurasen-b-zeyyan · ebu-zekeriyya-yahya · guy-de-lusignan · caterina-cornaro · mimar-sinan · sedefkar-mehmed-aga · garabet-balyan · nikogos-balyan · ali-kuscu · piri-reis · takiyyuddin-er-rasid · seydi-ali-reis · hezarfen-ahmed-celebi · katib-celebi · evliya-celebi · said-efendi · huseyin-rifki-tamani · mustafa-behcet-efendi · ahmed-cevdet-pasa · hoca-tahsin-efendi · ebussuud-efendi · vani-mehmed-efendi · hayrullah-efendi · agah-efendi · sinasi · ziya-pasa · namik-kemal · ali-suavi · cerkes-hasan-bey · yedisekiz-hasan-pasa · humbaraci-ahmed-pasa · baron-de-tott · mehmed-namik-pasa · gercek-davud
