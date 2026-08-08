# NOKTA HALKA-2 3 — ilerleme ve teslim notu (8 Ağustos 2026)

> ⚠️ **Bu dosya niçin ayrı açıldı.** Şartname (`oturumlar/NOKTA-HALKA2.md §⑤`)
> ilerleme notunun o dosyaya yazılıp commit'lenmesini söylüyor. Ama o dosyayı
> **üç oturum birden okuyor** ve `CLAUDE.md §7`'nin bütün uyarısı tam bu
> desene karşı: *"git index PAYLAŞILIYOR… iki oturum aynı dosyaya yazarsa
> sessiz veri kaybı olur."* Üç oturumun tek `.md`ye yazması, §7'nin
> yasakladığı şeyin `oturumlar/` altındaki hâlidir.
> ⇒ Şartnamenin **ruhuna** (kendi notunu kendin commit'le) uydum,
> **lafzından** saptım: kendi adımı taşıyan ayrı dosya açtım. Sapma
> koordinatöre bildirildi.

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

Yeni olan 8 gün ve kapatılması için önerilen kronoloji maddesi başlıkları:

| gün | önerilen madde |
|---|---|
| 1614-01-01 | Mamûra'nın (Mehdiye) İspanyolların eline geçişi |
| 1681-01-01 | Mevlây İsmâil'in Mamûra'yı geri alışı |
| 1689-01-01 | Mevlây İsmâil'in el-Arâiş'i geri alışı |
| 1854-11-23 | Vargla'nın Fransızlarca işgali |
| 1857-07-11 | Büyük Kabiliye'nin düşüşü — Lalla Fatma N'Sûmer'in esareti |
| 1899-12-29 | Aynı Sâlih'in (Tîdîkelt) işgali |
| 1901-02-21 | Tuvât-Gûrâre-Tîdîkelt'in Fransa'ya ilhakı |
| 1903-11-12 | Beşşâr'ın (Colomb-Béchar) işgali |

Zaten veride VAR olduğu için yeni sayılmayanlar: `1564-01-01` · `1610-01-01` ·
`1673-01-01` ve bütün bölgesel çerçeve tarihleri.

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

Üçüncüsü **gerçek bir borç**: Hafsî Devleti 1574-09-13'te bitiyor, ama Fizan
kayıtları `hafsi`yi **1577-01-01**'e kadar sürdürüyor — 2,3 yıllık hayalet.
`§3.5` *"bölgesel teslim gecikmeleri meşrudur ama yıllar değil aylar
mertebesinde olmalıdır"* diyor; bu tam sınırda. **Benden önce vardı**
(Murzuk · Sebha · Ubârî · Gât · Sokna · Câlû), ben aynı çerçeveyi 3 Fizan
noktasına daha uyguladım — kasten, çünkü ayrı yazsaydım Murzuk ile Tırgan
60 km arayla farklı devletlerde görünürdü. **Toplam 9 kayıt, tek karar.**
Düzeltilecekse dokuzu birden düzeltilmeli; `yerlesimler.js` ve `devletler.js`
ikisi de koordinatörde.
