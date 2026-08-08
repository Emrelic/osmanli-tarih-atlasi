# NOKTA HALKA-2 3 — ilerleme ve teslim notu (8 Ağustos 2026)

> ⚠️ **Bu dosya niçin ayrı.** Şartname (`oturumlar/NOKTA-HALKA2.md §⑤`)
> ilerleme notunun ortak dosyaya yazılmasını söylüyordu; ama o dosyayı
> **üç oturum birden okuyor** ve `CLAUDE.md §7` tam bu desene karşı uyarıyor:
> *"iki oturum aynı dosyaya yazarsa sessiz veri kaybı olur."*
> Ayrı dosya açtım, koordinatöre bildirdim, **koordinatör onayladı ve adı
> `NOKTA-HALKA2-3.md` olarak sabitledi** (kardeş oturumlara da aynısı
> söylendi). Dosya o ada taşındı.

## Sayıyla teslim

```
bölge yoğunluğu   26,5  →  39,6      (ölçüt: en az 25)          ✅
bbox içi nokta     125  →   187      (şartname hedefi ~180)     ✅
yazılan kayıt                 64      (şartname istediği +56)
```

| ülke | önce | sonra | eklenen |
|---|---|---|---|
| Fas | 16 | 45 | **+29** |
| Cezayir | 42 | 57 | +15 |
| Tunus | 32 | 43 | +11 |
| Libya + Fizan | 45 | 59 | +14 |

Fas'a ağırlık verilmesi ölçümle seçildi: bölge ortalaması 26,5 iken **Fas tek
başına ~17'ydi** — yani şartnamedeki bölge ortalaması Cezayir ve Tunus'un
görece doluluğuyla şişmişti ve gerçek delik Fas'taydı.

## Dört kontrol (`§③`) — hepsi ölçüldü

```
① MÜKERRER   3 km içinde yeni çift: 0
             en yakın komşusu 15 km'nin altında olan yeni nokta: 0
             ad çakışması: 0 (mevcutla da, kendi içinde de)
② KARA       maske dışında nokta: 0 — ÜÇ KOŞUDA sağlandı (aşağıya bak)
③ SAHİPLİK   sahipsiz pencereli nokta: 0 — günlük TAM TARAMA, örnekleme YOK
④ KİMLİK     kullanılan 7 kimlik: abdulkadir · fas · fransa · hafsi ·
             ispanya · italya · zeyyani → RENKSİZ 0 · KÜNYESİZ 0
ek  dönem sağlığı: 0 sıfır-uzunluk · 0 ters · 0 kategori-içi çakışma
ek  `m:` bağı: karşılığı olmayan merkez adı 0
ek  JS ayrıştırma: node ile eval ✓ 64 kayıt
```

### 🔴 KARA maskesi üç koşu sürdü — ve ikinci koşu bir ders verdi

```
1. koşu   3 nokta dışarıda:  Ğâru'l-Melh 1,19 km · Bomba 0,71 km · Bâdis 11 m
2. koşu   Bomba HÂLÂ dışarıda — 62 m
3. koşu   0 ✓
```

📌 **İkinci koşunun dersi: `konum_denetimi`nin verdiği "en yakın kara noktası"
GÜVENLİ nokta DEĞİLDİR.** Tanımı gereği maskenin tam sınırının üstündedir;
oraya taşımak sapmayı 710 m'den 62 m'ye indirdi ama ihlali kaldırmadı. Aday
koordinatlar tek tek sınanıp körfezin güney kıyısına çekilerek çözüldü.

📌 **Bâdis'in sapması 11 METREYDİ.** Bu, `konum` denetiminin niçin örneklemeyle
değil tam taramayla koşturulması gerektiğinin ölçüsüdür — göz o noktayı
haritada "karada" görürdü.

## Yeni açılan kırılma günleri — 8 tane

`denetle.py` işe başlarken koşturuldu (§1.5 tablosuna güvenilmedi) ve
**2s tavanı DOLU çıktı: 121/121.** Bu yüzden kayıtların ezici çoğunluğu
veride **zaten var olan** tarihleri yeniden kullanır. Fas noktalarının 21'i
tek dönemdir (1281→1923) ⇒ **sıfır kırılma**, çünkü denetim iki ucu da dışlar.

### 🔴 DÜZELTME — ÖNCE 8 DEDİM, DOĞRUSU 9. VARSAYIMIM YANLIŞTI.

Dosya bağlandıktan sonra `denetle.py` ölçtü:
`yerlesimler_h2_kuzeyafrika.js: 64 nokta · 41 kırılma · **10 MADDESİZ**`

Ben **8** demiştim. Farkın sebebi bir **yanlış varsayımdı:**

> *"Tarih veride zaten VAR ⇒ maddesi de vardır."* — **YANLIŞ.**

Bir gün başka bir yerleşimde kırılma olarak bulunabilir ve **yine de ±30 gün
içinde hiçbir kronoloji maddesi olmayabilir.** `1564-01-01` · `1610-01-01` ·
`1673-01-01` tam olarak böyleydi: veride vardılar, ben bu yüzden *"güvenli"*
ilan ettim, **üçü de maddesizdi.**

Ters yönde de yanıldım: `1681-01-01` ve `1854-11-23` *yeni* sanıyordum ama
**±30 gün içinde maddeleri çıktı** — yani kapalılar.

📌 **Ders: tarih yeniden kullanmak riski AZALTIR, sıfırlamaz.** Doğru ölçüt
*"bu gün veride var mı"* değil, ***"bu günün ±30 gününde madde var mı"***.
Tek doğru yol, dosyayı bağlayıp `denetle.py`ye sormaktır — tahmin değil.

**KRONOLOJİ KUYRUĞUNUN GERÇEK LİSTESİ — 9 gün (10 kırılma):**

| gün | maddesiz kalan yerleşim | önerilen madde |
|---|---|---|
| 1564-01-01 | Bâdis | İspanya'nın Bâdis (Peñón de Vélez) kayalığını geri alışı |
| 1610-01-01 | el-Arâiş | el-Arâiş'in İspanyollara terki |
| 1614-01-01 | Mamûra | Mamûra'nın (Mehdiye) İspanyolların eline geçişi |
| 1673-01-01 | el-Hüseyme | İspanya'nın el-Hüseyme (Alhucemas) adalarını işgali |
| 1689-01-01 | el-Arâiş | Mevlây İsmâil'in el-Arâiş'i geri alışı |
| **1857-07-11** | Tîzî Vezzû · Akbû | Büyük Kabiliye'nin düşüşü — Lalla Fatma N'Sûmer'in esareti **(bu gün İKİ kırılma sayılıyor: `kayip` + `kazanc`; tek madde ikisini de kapatır)** |
| 1899-12-29 | Aynı Sâlih | Aynı Sâlih'in (Tîdîkelt) Fransızlarca işgali |
| 1901-02-21 | Advâr · Tîmîmûn · Reggân · Benî Abbâs | Tuvât-Gûrâre-Tîdîkelt'in Fransa'ya ilhakı |
| 1903-11-11 | Beşşâr | Beşşâr’da (Colomb-Béchar) Fransız karakolunun kurulması |

**Kapalı çıkanlar (madde yazmaya gerek yok):** `1681-01-01` · `1854-11-23` ·
`1854-12-02` ve bütün bölgesel çerçeve tarihleri.

## Koordinatörden istenen üç satır

```
① arac/denetle.py   KUYRUK_DOSYALARI'na  "yerlesimler_h2_kuzeyafrika.js"
② arac/girdi.py     GIRDI_DOSYALARI'na   aynı dosya
③ index.html + js/app.js  script satırı + birleştirme
```
⚠️ Sıra önemli: ① yapılmadan ② yapılırsa 2s tavanı delinir ve denetim
bu dosya yüzünden kırmızıya döner.

## Bulunamayanlar ve kasten yazılmayanlar

**`bulunamadı` — TDV maddesi yok** (her biri için 2-4 slug varyantı denendi;
HTTP 302 = ölü): `taza/taze` · `arais/el-arais/larais` · `kasrulkebir` ·
`vecde/ucde` · `tarudant` · `suveyra/mogador` · `sefsaven` · `vezzan` ·
`badis` · `debdu` · `figig` · `dra/draa` · `tafilalt` · `sefru` · `ifni` ·
`tiznit` · `mehdiye/mamura` · `vargla` · `suf` · `timimun` · `tuvat` ·
`insalah` · `bessar` · `tinduf` · `cilfe` · `saide` · `hansele` · `testur` ·
`subaytila` · `makter` · `kibilli` · `duz` · `zevile` · `tirgan` · `katrun` ·
`vaddan` · `zilla` · `terhune` · `tulmeyse` · `tavurga` · `sinavin` · `derc` ·
`kabav` · `misrata` · `sirte`

⚠️ **Bu listenin bir sınırlaması var ve bildiriyorum:** TDV'nin arama sayfası
JS ile çiziliyor, `curl` ile gelen HTML'de sonuç YOK. Yani `§4`'ün *"ölü
demeden önce ARA"* adımı **arama sayfasıyla değil, yazım varyantı deneyerek**
yapıldı. Varyant denemesi aramanın tam karşılığı değildir.

**CANLI doğrulananlar (HTTP 200):** `miknas` · `titvan` · `sicilmase` ·
`darulbeyza` · `sus` · `filaliler` · `merakes` · `rabat` · `atlas` ·
`tahert` · `kabiliye` · `mizab` · `benzert` · `nefuse` · `fizan` ·
`trablusgarp` · `bingazi` · `berka` · `derne`

**Kasten yazılmayanlar:**
- **Selâ (Salé)** — Rabat'a 2,2 km. `§11` Varat/Varad kuralı. Korsan
  cumhuriyetinin merkezi olmasına rağmen yazılmadı; Rabat'ın peteği kapsıyor.
- **Tıtvân'ın 1860-1862 İspanyol işgali** — iki yeni kırılma açardı, 2s tavanı
  doluydu. Nokta yazıldı, işgal yazılmadı.
- **Saîde (Saïda)** — Fransız işgal günü doğrulanamadı. Komşusunun tarihini
  ödünç almak `§④`'ün *"KOMŞU TUTARLILIĞI KAYNAK DEĞİLDİR"* kuralına girerdi.
- **el-Menîa (el-Golea)** — aynı sebep.
- **Tindûf** — 1852'de kuruldu, Fransızlar ancak 1934'te girdi (kapsam dışı);
  1852-1923 arası fiilî sahibi doğrulanamadı.
- **Kartaca · Hammâmet · Tâcûrâ · Ğazâvet · Nekûr · Hûn** — hepsi mevcut bir
  noktaya 15 km'den yakın, katkısı yok.
- **Çöl dolgusu (Tanezruft · Erg Şeş · Büyük Batı Ergi)** — koordinatöre
  soruldu; şartname `§⑥` *"yeni noktaların hiçbirinde boşluk yok"* dediği ve
  her dolgu `Değişmez 1`'in 114 tavanını yükselteceği için yazılmadı.

## Ölçülen ama düzeltemediğim iki şey (koordinatörün dosyaları)

**① Şartnamenin bbox'ı mükerrer kontrolü için YANLIŞ kutudur.**
`lon -12..25 / lat 25-37` kutusu **Benzert (37,276)** ve **Gât (24,964)**
noktalarını dışarıda bırakıyor — ama ikisi de VAR ve bu bölgenin noktası.
Dar kutuya güvenilseydi ikisi de **mükerrer açılacaktı.** Ayrıca Mâtir ·
Kufra · Rebyâne · Vâdî Tanezzûft · Hoggar · Tamanrasset · Fizan güneyi ·
Ramletü Murzuk · Sellûm de dışarıda kalıyor.
⇒ **Yoğunluk dar kutuyla, mükerrer GENİŞ kutuyla ölçülmeli.** İkisi aynı
kutu değil. Kontrol `lon -14..26 / lat 22..38,5` ile yapıldı (185 nokta).

**② `data/devletler.js`'te üç künye, verinin kullandığı ömrü kapsamıyor.**
Ölçüldü ve regex yalanı olmadığı `devletler.js` doğrudan okunarak doğrulandı
(`§11` "ALETİN GÖSTERDİĞİ ≠ DOSYADA YAZAN" dersi uygulandı):

```
fas      künye 1549-01-01..1923   ama veri 1281'den kullanıyor   (Sa'dî öncesi yok)
fransa   künye  987-01-01..1792   ama veri 1830'dan kullanıyor   (Krallık künyesi)
hafsi    künye 1229-01-01..1574-09-13  ama Fizan kayıtları 1577'ye kadar kullanıyor
```

İlk ikisi **proje geneli bir gelenek**: mevcut Fas (Fez) · Merakeş · Rabat da
`fas`ı 1281'den yazıyor, bütün Cezayir/Tunus kayıtları `fransa`yı 1830/1881'den
yazıyor. Yani `fas` ve `fransa` künyeleri **hanedan/rejim** künyesi, veri ise
onları **ülke süreklilik kimliği** olarak kullanıyor. Bu bir çelişki değil ama
`§3.5`'in yazacağı dördüncü değişmez (*"devletin ömrünü kontrol et"*) yazılırsa
**bu iki kimlik yüzlerce yanlış pozitif verecektir** — dördüncü değişmez
yazılmadan önce bilinmeli.

### 🔴 SONRADAN GELEN TALİMAT UYGULANAMADI — `fransa-cumhuriyet`

Koordinatör (8 Ağustos) *"1792 sonrası için `fransa` değil `fransa-cumhuriyet`
kullan"* dedi. **Uygulamadım, çünkü ölçtüm:**

```
fransa-cumhuriyet    künye ✓ (1792-09-22..1923)    RENK ✗   ← renkler.py'de YOK
merini               künye ✓ (1196..1549)          RENK ✗
sadi                 künye ✗                       RENK ✗   ← hiç yok
```
`arac/renkler.py:574` yalnız `"fransa": ("Fransa", "#7b99ff")` satırını
taşıyor. Doğrudan dosyadan okuyarak doğrulandı (`§11` "aletin gösterdiği ≠
dosyada yazan").

**Geçseydim ne olurdu:** benim 23 Fransız dönemim **renksiz** kalırdı —
`VERI-YAPISI.md`: *"yoksa üretim uyarı verir ve bölge boyanmaz."* Yani künye
uyuşmazlığı (görünmez bir tutarsızlık) yerine **boyanmayan toprak** (görünür
bir hata) almış olurdum. Şartnamem `§③④` zaten bunu emrediyor: *"kimlik
`renkler.py`de RENKLİ **ve** `devletler.js`de KÜNYELİ olmalı. Değilse
KOORDİNATÖRE BİLDİR — sen yazamazsın."*

**Ve tek başıma geçmek zaten yanlış olurdu:** mevcut külliyatta 1792 sonrası
`fransa` kullanan **157 dönem** var —
```
yerlesimler_avrupa.js 60 · yerlesimler.js 46 · yerlesimler_afrika.js 45
yerlesimler_asya.js    4 · yerlesimler_seyrek.js 1 · yerlesimler_ek3.js 1
```
Yalnız benimkini çevirseydim Cilfe `fransa-cumhuriyet`, 100 km yanındaki
Ağvât `fransa` olurdu — **haritada iki ayrı Fransa.** Göç **tek partide,
157+23 dönem birlikte** yapılmalı ve önce renk yazılmalı.
⇒ Renk gelince bende **23 satırlık mekanik değişiklik**; beklemede.

📌 Ve bu, aşağıdaki (b) bulgusunun doğrudan sonucudur: `fransa` künyesinin
hanedan ömrü taşıdığını ben bildirdim, koordinatör künyeyi ayırdı — ama
**künye ile renk ayrı dosyalarda** ve ikincisi henüz yazılmadı. Bir kimliğin
"var" olması için **ikisi birden** gerekiyor.

---

Üçüncüsü **gerçek bir borç**: Hafsî Devleti 1574-09-13'te bitiyor, ama Fizan
kayıtları `hafsi`yi **1577-01-01**'e kadar sürdürüyor — 2,3 yıllık hayalet.
`§3.5` *"bölgesel teslim gecikmeleri meşrudur ama yıllar değil aylar
mertebesinde olmalıdır"* diyor; bu tam sınırda. **Benden önce vardı**
(Murzuk · Sebha · Ubârî · Gât · Sokna · Câlû), ben aynı çerçeveyi 3 Fizan
noktasına daha uyguladım — kasten, çünkü ayrı yazsaydım Murzuk ile Tırgan
60 km arayla farklı devletlerde görünürdü. **Toplam 9 kayıt, tek karar.**
Düzeltilecekse dokuzu birden düzeltilmeli; `yerlesimler.js` ve `devletler.js`
ikisi de koordinatörde.

---

# Koordinatörün dört ek isteği — ölçüldü

## ① ÇÖL DOLGUSU — kutu, alan, gerekli nokta (yazılmadı, ölçüldü)

Koordinatör *"yalnız sahipli nokta yaz, çöl boşluğunu ayrı kalem raporla:
hangi kutu, kaç km², kaç dolgu noktası"* dedi. Ölçüm — 1°'lik ızgara,
`lat 22-31 / lon -9..+8`, ölçüt "en yakın noktaya uzaklık > 200 km":

```
delik hücre sayısı            80  (1° x 1°)
kapsanan alan             ~898.000 km²
taban yoğunluğa (50,9) çıkarmak için    ~46 nokta
yalnız DELİĞİ kapatmak (1 nokta/hücre)   80 nokta
en derin nokta      lat 22 / lon -9  →  en yakın yerleşim 753 km
```
En kötü on hücre: `(22,-9) 753 km` · `(22,-8) 688` · `(23,-9) 673` ·
`(22,-7) 634` · `(23,-8) 601` · `(22,-6) 592` · `(22,-3) 566` ·
`(22,-5) 566` · `(24,-9) 565` · `(22,-2) 559`.

⚠️ **Dürüst sınır:** bu kutunun güney-batı yarısı (lat 22-25 / lon -9..-1)
**Batı Sahra · Moritanya · Mali** demektir — benim şartnamemdeki "Fas ·
Cezayir · Tunus · Trablus · Fizan" tarifinin **dışında**. Yani 80 hücrenin
hepsi benim bölgemin borcu değil; deliği olduğu gibi raporluyorum, bölüşümü
koordinatör yapsın.

## ② SINIR ÇAKIŞMASI — `NOKTA HALKA-2 1` ile örtüşen kutu

Koordinatör *"lon 22-25 örtüşüyor, Zevîle · Kufra · Gât ikinizde de
çıkabilir, yazmadan sor"* dedi. Ölçüm:

```
benim yazdığım, lon 22-25 arasında:  1 nokta — Ayn el-Ğazâle (Bomba) 23,120
Kufra (el-Cûf)   bende YOK · mevcutta VAR  ⇒ yazmadım, doğru
Gât              bende YOK · mevcutta VAR  ⇒ yazmadım, doğru
Zevîle (Zawila)  bende VAR · mevcutta YOK  ⇒ 🔴 HALKA-2 1'e HABER VERİLMELİ
```
📌 **Zevîle örtüşme kutusunda DEĞİL** — `lon 15,113`, yani sınırın 7 derece
batısında, Fizan'ın göbeğinde. Koordinatörün uyarısı isabetliydi ama yer
yanlıştı: Zevîle bir Fizan noktası, Sudan noktası değil. Yine de **HALKA-2 1
onu yazarsa sessiz mükerrer doğar**, çünkü `3 km` kontrolü ayrı dosyalarda
karşı tarafı görmüyor.

## ③ "BATTANİYE DÖNEM" TARAMASI — Tunus vakasının emsali arandı

Koordinatör Tunus'ta 39 yıllık tek parça `hafsi` penceresinin bugün dörde
bölündüğünü bildirip *"aynı desen Cezayir ve Trablus'ta da olabilir"* dedi.
Geniş kutuda (lon -14..26 / lat 22..38,5) **30 yıldan uzun tek parça ara
dönem** arandı — 1281 başlangıçlı ve 1923 bitişli olanlar elendi (onlar
tanımı gereği uzun):

```
28 pencere bulundu — ve İNCELENDİĞİNDE HİÇBİRİ BATTANİYE ÇIKMADI.
```
Hepsi **gerçek uzun tasarruflar**: Venedik'in İyon adaları (Zaklise 315 yıl ·
İthaki ve Kefalonya 297) · Malta'da Şövalyeler (268) · Portekiz Mazagan'ı
(255) · İspanyol Oran'ı (199) · Ceneviz Tabarka'sı (197, Lomellini imtiyazı) ·
Portekiz Tanca'sı (191) ve Sebte'si (166).

⇒ **`s:` ekseninde battaniye YOK.** Ama taramamın kapsamını da bildiriyorum
(`§11` *"denetim var ≠ o soruyu soruyor"*): **yalnız `s:` taradım, `d:` ve
`v:` taramadım.** Tunus vakası da bir `s:` vakasıydı, o yüzden emsal doğru
eksende arandı — fakat "Osmanlı 160 yıl tek parça" tipi bir battaniye
`d:`tedir ve bu tarama onu **göremez.**

🟡 **Yine de bir ADAY bildiriyorum, iddia değil:** Berka (Sirenayka) —
Bingazi · Derne · Merc · Beyzâ · Ecdâbiye ve komşuları **1281→1551-08-15
arası tek parça `hafsi`** (270 yıl). Hafsî nominal metbûluğu gerçekti, ama
Sirenayka fiilen Hafsî idaresinin dışındaydı ve dönem dönem Memlük nüfuzuna,
kabile hâkimiyetine ve 1510'larda İspanyol baskısına açıktı. Tunus'la aynı
sınıf olabilir. **Ölçmedim, kaynak okumadım — araştırılması gereken bir
başlık olarak bırakıyorum.**

## ④ TDV SLUG LİSTESİ — bir daha kimse aynı 100 isteği atmasın

Koordinatörün isteğiyle kalıcı kayda geçiriliyor. **CANLI (HTTP 200):**
`miknas` · `titvan` · `sicilmase` · `darulbeyza` · `sus` · `filaliler` ·
`merakes` · `rabat` · `atlas` · `tahert` · `kabiliye` · `mizab` · `benzert` ·
`nefuse` · `fizan` · `trablusgarp` · `bingazi` · `berka` · `derne`

Ölü olanların tam listesi yukarıdaki "Bulunamayanlar" bölümünde.
