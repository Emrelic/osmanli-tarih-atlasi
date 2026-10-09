# UMIT-YER-ARAMA-KUTUSU-1006 — "şehir yaz ve git" kutusu

Dal `umit-yer-arama` (temel `b821a101`) · UMIT · 6 Ekim 2026 · dosyalar: `js/app.js`,
`index.html`, `css/style.css`, bu rapor. Motor dosyalarına ve `data/`ya dokunulmadı;
ağaca kopya dosya getirilmedi (gerek olmadı: `index.html`in yüklediği 82 betiğin hepsi
ağaçta vardı).

## (J) ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE YAZILDI (kod yazılmadan, tarayıcı açılmadan)

Evren (tasarım kararı, ölçmeden): kutu iki kaynaktan beslenir. Birincisi haritanın
şehir işaretleri (`sehirler` ← `ISARET_KAYNAK`, d/v/s dönemi olan yerleşimler); o gün
`kayitlar` penceresi açık olanlar alınır. İkincisi o gün gövdesi çizili devletlerdir
(`devletler2` = `DEVLET_HARITA`, `dnm` penceresi açık olanlar).

| Gün | Öngörü (yerleşim) | Öngörü (devlet) | Toplam |
|---|---|---|---|
| 1453-05-29 | ~2.600 | ~150 | ~2.750 |
| 1920-01-10 | ~3.500 | ~120 | ~3.620 |

NİÇİN: yerleşimlerin çoğunun (`s:` yabancı dönemleri) penceresi atlasın epoğu olan
1281-01-01'de açılıyor, yani bu yerleşimler 1453'te zaten sahnede. Aradaki farkı sonradan
kayda giren yerleşimler (kuruluş `kur` ya da geç `f`) yapıyor. Amerika, Afrika ve
Okyanusya yoğunlaştırması 1500 sonrası dönemlerle başladığı için 1920 daha kalabalık
olmalı. Devlet sayısı ise 1920'de daha az olmalı, çünkü 15. ve 16. yüzyılın küçük beylik
ve hanlıkları zamanla sömürge imparatorluklarına ve ulus devletlere katıldı.

## ÖLÇÜM (tarayıcı, gerçek yükleme, `yerAraAktif(gunIdx(…))`)

| Gün | Yerleşim | Devlet | Toplam | Öngörüyle fark |
|---|---|---|---|---|
| 1453-05-29 | **2.596** | **263** | **2.859** | yerleşim tuttu (−4) · devlet **+113** ıska |
| 1920-01-10 | **4.124** | **114** | **4.238** | yerleşim **+624** ıska · devlet tuttu (−6) |

Iskaların sebebi:
- **Devlet sayısı (1453: 263, öngörü 150).** `DEVLET_HARITA` 584 gövde taşıyor ve 1453'te
  bunların 263'ünün penceresi açık. Ben "o gün dünyada kaç devlet var" diye düşünmüştüm;
  oysa atlas 1453'te Afrika, Asya ve Amerika'daki küçük siyasî yapıları da gövde olarak
  çiziyor. Mekanizma doğru çıktı (1920'de devlet sayısı azalıyor), hacim yanlış çıktı.
- **Yerleşim sayısı (1920: 4.124, öngörü 3.500).** 1920'de `sehirler`deki 4.147 işaretin
  yalnız 23'ü kapalı. Geç kurulan ya da geç kayda giren yerleşimlerin aynı zamanda
  1920'ye kadar açık kaldığını küçümsemişim: yerleşimler hemen hiç sahneden çıkmıyor.
  Sonuna kadar açık kalan dönemi bitmeden (`t < 1900`) kapanan, üstelik `kaynak`lı tek
  bir işaret bile bulunamadı (sorgu: 0 kayıt).

## Şartlar — her biri tek satır

| Şart | Ne yapıldı |
|---|---|
| **(A) Tek dizin üreticisi** | Yerleşimler haritanın işaret dizisi `sehirler`den alınıyor (← `ISARET_KAYNAK` ← `window.YERLESIMLER`, 4.147 kayıt). Devletler haritanın gövde dizisi `devletler2`den alınıyor (← `DEVLET_HARITA`, 584). Dosya adıyla süzme yok. Dizin bir kez kuruluyor: 4.731 kayıt (konsol: `Atlas: YER ARA — dizin 4731 kayıt`). |
| **(B) Ölçüt = zaman çubuğunun günü** | `suanki` (gün indeksi) kullanılıyor. "Aktif" kuralı yeniden yazılmadı, haritanın kendi yüklemlerine çıkarılıp ÇAĞRILDI. `sehirAktifKayit(m,t)` `sehirGuncelle`nin döngüsünden çıkarıldı ve artık o da bunu çağırıyor. `devletAktifDonem(s,t)` `devletiYay`dan çıkarıldı ve o da bunu çağırıyor. Tutarlılık 1700-06-01'de 4.147 işaret üzerinde ölçüldü: eski satır içi döngüyle fark **0**. |
| **(C) Türkçe normalleştirme** | `yerAraNorm` yeni bir normalleştirici değil, projenin tek normalleştiricisi `SUZGEC.sgNorm`un sarmalayıcısı. Kopya yazılmadı; gerekçesi `js/arama.js` başlığındaki: iki normalleştirici sessizce ayrışır. Sarmalayıcı yalnız NFD'nin sökemediği harfleri katlıyor (ł ø đ ß æ œ ħ ð þ), ʾ ʿ işaretlerini siliyor ve `- – — . , / · ( )` ayraçlarını boşluğa çeviriyor. Parantez içi ayrı anahtar olarak indeksleniyor: "Klaipėda (Memel)" için anahtarlar `klaipeda` · `memel` · `klaipeda memel`. |
| **(D) Mükerrer ad ayırt edilir** | Her satır şu üç sütunu gösteriyor: **ad · tür · o günün sahibi**. Koordinat `title`da. Sahip haritanın sahiplik kuralından (`SUZGEC.sahipAnahtari`, d > v > s önceliği) ve `devletAdi`ndan geliyor; o gün açık bir `isg:` dönemi varsa "· işgal: X" ekleniyor. |
| **(E) Odak = mevcut mekanizma** | Yerleşimde dizin sekmesinin şehir tıklamasındaki sıra izleniyor: `otoZoom=false` + `#btn-zoom.pasif` + `dizindenUc(lat,lon)`. Tarih değiştirilmiyor. Devlette harita etiketi tıklamasının `devletiYay(id)`ı çağrılıyor. Yeni `flyTo` ya da `fitBounds` yazılmadı. |
| **(F) Mevcut aramayla ilişki** | Seçilen yol ①: kutu dizinin dizin kurucusunu değil, haritanın çizim yüklemesini kullanıyor (A) ve güne göre süzüyor. Dizindeki "Yerleşim Kronolojileri" araması değiştirilmedi. Gerekçe: o sekme bilerek süzgeçsiz ("her yerleşim, her dönem") ve tıklaması tarihi değiştiriyor; bu kutu ise tarihi değiştirmiyor. Gün süzgecini oraya eklemek, o sekmenin cevap verdiği soruyu bozardı. Ortak olan iki şey ortak kaldı: yükleme (A) ve kamera (E). |
| **(G) Performans ve önbellek** | Aktif küme gün başına bir kez kuruluyor. Önbellek anahtarı günün kendisi (`_YA.gun === t`); gün değişince anahtar tutmuyor ve küme yeniden kuruluyor. Bu yüzden "geçersiz kılmayı unutmak" mümkün değil. `guncelle()` içindeki kanca yalnız AÇIK listeyi tazeliyor. Kurma süresi **0,7–1,5 ms**, önbellek isabeti **0,000 ms** (5 ardışık gün). İlk açılışta statik dizin dahil 73 ms. Tuş vuruşunda yalnız aktif küme üzerinde metin eşleşmesi yapılıyor. |
| **(H) İki yönlü sınav** | Aşağıda. Giren yer: Rumeli Hisarı, `kur:"1452-08-31"`, kaynak TDV `rumelihisari`. Geçti. |
| **(I) Kapsam dışı (beyan)** | Aşağıda, "Yapılmayanlar". |
| **(J) Öngörü** | Yukarıda. Önce yazıldı, sonra ölçüldü; iki ıska sebebiyle birlikte verildi. |
| **(K) Yer: footer, tarih kutusunun yanı** | `#yer-ara` `<footer id="zamanbar">` içinde, `#tarihe-git-giris` + `#tarihe-git-durum` ile birlikte tek `#git-grup` biriminde duruyor. Satır kırılırsa ikisi birlikte iniyor, ayrılmıyor. Liste footer'dan YUKARI açılıyor. Haritanın köşesine konan ilk sürüm geri alındı. |
| **(L) Placeholder'lar** | Yeni kutu: `"şehir yaz ve git"`. Tarih kutusu: `"Tarih yaz, Enter'a bas"` → `"tarihe git"`. 14 Eylül gerekçe yorumu güncellendi: buton yok, tetik Enter kararı yerinde; yalnız silik yazı kısaldı (6 Ekim, Emre). Tarih kutusunun `title` örnek listesi aynen kaldı. Yeni kutunun `title`ı kabul ettiği türleri sayıyor: şehir · kale · liman · bölge · ülke. |
| **(M) Tetik: buton yok** | Listeden tıklama (`mousedown`) ya da ↑/↓ + Enter doğrudan odaklıyor; Esc kapatıyor. "Git" butonu yok. |

## (H) SINAV KANITI — tarayıcı, gerçek handler (`input` olayı + `keydown`/`mousedown`)

**Giren yer — Rumeli Hisarı** (`d:[{f:"1452-08-31"…}]`, kayıt `kaynak:"rumelihisari"` TDV).
Sorgu "rumeli his" yazıldı ve aynı oturumda yalnız gün değiştirildi (yeniden yazılmadı):

| Gün | Liste başlığı | Satır |
|---|---|---|
| 1452-08-30 (D−1) | `30 Ağustos 1452 · 2858 yer haritada · 0 eşleşme` | "Bu günde haritada bu adda yer yok" |
| 1452-09-01 (D+1) | `1 Eylül 1452 · 2859 yer haritada · 1 eşleşme` | `Rumeli Hisarı · kale · Osmanlı` |
| 1452-08-31 (D) | `… 2859 … 1 eşleşme` | `Rumeli Hisarı · kale · Osmanlı` |
| 1452-08-30 (geri) | `… 2858 … 0 eşleşme` | yok |

Önbellek geçersizleşmesi kanıtlandı: açık liste gün değişince tazelendi. Aktif sayı
2858 ↔ 2859 tam olarak bir kalem oynadı. Sınav, `#yer-ara` footer'a taşındıktan sonra
yeniden koşturuldu ve sonuç aynı çıktı.

**(C) normalleştirme** (1923-02-16):

| Yazılan | Sonuç |
|---|---|
| `istanbul` · `ISTANBUL` · `İstanbul` | İstanbul (+ İstanbulya) |
| `memel` · `KLAİPEDA` | Klaipėda (Memel) |
| `torun` | Torun (Toruń) |
| `elblag` | Elbing (Elbląg) |
| `lodz` | Łódź · Glatz (Kłodzko) · Volodymyr-Volynskyi (Włodzimierz) — ł katlaması çalışıyor |
| `diyarbakir` | Diyarbakır |
| `diyarbekir` | 0 sonuç — eşanlam sözlüğü kapsam dışı (I) |

**(D) sahip sütunu ve mükerrer ad:**

| Yazılan / gün | Sonuç |
|---|---|
| Memel 1923-02-15 | Kutsal Roma / Almanya |
| Memel 1923-02-16 | Litvanya Cumhuriyeti |
| Gdansk 1920-01-09 | Polonya Cumhuriyeti (II. Cumhuriyet) |
| Gdansk 1920-11-16 | Danzig Serbest Şehri |
| `kudus` 1453 | Kudüs · şehir · Memlûk Sultanlığı **ve** Kudus · şehir · Majapahit (Cava) — iki ayrı yer, sahip sütunuyla ayrılıyor |
| `tuzla` 1453 | Tuzla (Bosna) · Bosna Krallığı / Tuzla (Larnaka) · Kıbrıs Krallığı |

Aynı gün ana anahtarı çakışan kalem sayısı: 1453'te 14 · 1700'de 24 · 1920'de 35.
Birebir aynı ad 0.

⚠️ **BULGU — Memel 1920-01-10 "itilaf-emaneti" GÖRÜNMÜYOR, kusur kutuda değil.**
Kaynak `data/yerlesimler_ek7.js` (commit `63c78baa`) 1920-01-10'da `itilaf-emaneti`
diyor. Site ise kaynağı değil, `data/paket_14.js` derlemesini yüklüyor ve o derleme
bayat: Memel 1923-02-16'ya kadar `almanya`. Kutu haritanın yüklediği veriyi doğru
yansıtıyor (A). Bayatlık ölçüldü: `py arac/paketle.py sina` çıkışı 1 verdi ve şunu yazdı:
*"PAKET İÇERİĞİ KAYNAKLA UYUŞMUYOR: paket_01, 02, 05, 06, 07, 08, 09, 11, 12, 13, 14, 15,
26, 30"* (çare `paketle.py yenile`). Bu dosyalar bu işçinin değil; yenileme yapılmadı.

**(E) odak** (kamera çağrıları sarmalanıp kaydedildi; tarih 29 Mayıs 1453'te kaldı):

| Eylem | Kaydedilen çağrı |
|---|---|
| "budin" + Enter | `flyTo [19.04, 47.498] z4.82` ← `dizindenUc` |
| "venedik" + ↓ + Enter (devlet satırı) | `fitBounds [[9.196,34.817],[27.237,46.777]]` ← `devletiYay` |
| "trabzon" + `mousedown` | `flyTo [39.723, 41.005]` ← `dizindenUc` |

Her seçimden sonra liste kapandı ve kutuya seçilen ad yazıldı.

**Ekran / genişlik** (kutulu ve kutusuz ölçüldü):

| Genişlik | Ölçüm |
|---|---|
| 1366 px | Footer tek satır (874/874, taşma yok). Tarih kutusu 321–481, yer kutusu 495–655, `#zaman` 662–864. Liste 495–835 aralığında yukarı açılıyor. |
| 1024 px | Footer 604 px (yan panel sağda). Kutu eklenince içerik 778 px oluyordu ve taşıyordu ⇒ `#zamanbar` artık `flex-wrap`. `#git-grup` alt satıra BİRLİKTE iniyor (tarih 10–170, yer 184–344), taşma 604/604. |
| 375 px | Değişiklikten ÖNCE de taşıyordu (içerik 528/375; `#zaman` 438–528, ekran dışında). Kutuyla 695 olurdu. Şimdi üç satır: oynatma, tarih + yer, zaman çubuğu. 375/375, belge kaydırması yok. Liste 8–367 aralığında, footer'ın üstünde, taşan satır 0. |

Ekran görüntüleri (oturum `tool-results`):
- 375 px, "ist" @1453: `mcp-Claude_Browser-blob-1791288847672-k005nn.jpg`
- 1366 px, "memel" @1923-02-16: `mcp-Claude_Browser-blob-1791288894018-kfxv32.jpg`

Görüntüler depoya konmadı, çünkü yazma izni olan dosyalar arasında değiller.

## Tur'suz yerleşimler — gerçek yüklemeden ölçüldü

Tur dağılımı (4.299 kayıt):

| Tür | Sayı |
|---|---|
| sehir | 2.535 |
| kale | 727 |
| liman | 599 |
| bolge | 211 |
| **tursuz** | **114** |
| kasaba | 68 |
| koy | 43 |
| vaha | 1 |
| konfederasyon | 1 |

Koordinatörün sayıları (2532/729/601/232/69/15) bayat. Desene giren 4.185; fark **114**,
119 değil. Kutuda tursuz kayıt "yer" etiketiyle görünür. `†` işaretli olanların d/v/s
dönemi yok: haritada hiç çizilmiyorlar, bu yüzden kutuya da girmiyorlar (21 kayıt).

Elbing (Elbląg) · Torun (Toruń) · Nuestra Señora de Caraballeda · Beyan K7.5 B62.5† ·
Beyan K7.5 B60.5† · Kyk-over-al (Essequibo) · Beyan K4.5 B62.5† · Beyan K4.5 B59.5† ·
Beyan K3.5 B56.5† · Beyan K3.5 B54.5† · Cali · Beyan K2.5 B52.5† · Beyan K1.5 B63.5† ·
Beyan K1.5 B60.5† · Beyan K1.5 B57.5† · Beyan K1.5 B54.5† · Caruru (Vaupés) · Yavaraté
(Vaupés) · Panoré (São Gabriel da Cachoeira) · San José de los Nuevos Icaguates · Archidona
(Napo) · Canelos (Bobonaza) · San Miguel (Aushiri) · Cametá (Tocantins) · Tupinambarana
(Parintins) · Santo Tomé de los Andoas · Tefé (Teffé de Aisuaris) · San Joaquín de Omaguas
(Fritz) · Itaituba · Borba (Madeira) · Borja (Maynas) · Beyan G4.5 B52.5† · Santiago de la
Laguna (Lagunas) · Concepción de Xéveros (Jeberos) · Jaén de los Bracamoros · Santa María
de Ucayali · Sarayacu (Ucayali) · Santa María de Huallaga · Beyan G7.5 B62.5† · Beyan G7.5
B56.5† · Beyan G7.5 B50.5† · Beyan G7.5 B47.5† · San Miguel (Pachitea) · Beyan G9.5 B65.5† ·
Tonua (Chinchao) · Beyan G10.5 B68.5† · Beyan G10.5 B61.5† · Beyan G10.5 B58.5† · Beyan
G10.5 B52.5† · Cerro de la Sal · La Merced (Chanchamayo) · Santa Magdalena (Itonama) · San
José de Uchupiamonas · Reyes (Maropa) · Concepción de Apolobamba · Trinidad (Mojos) · San
Ignacio de Moxos · Jiboya (Camacan aldeası) · Loreto (Mojos) · Concepción (Chiquitos) · San
Francisco Xavier (Chiquitos) · San Ignacio de Zamucos · Fuerte Olimpo (Borbón) · Tarija ·
São Fidélis (Paraíba do Sul) · Tariquea (Chiriguano misyonu) · Chiquiaca misyonları ·
Rinconada (Puna) · Lengua misyonu (Paraguay Chaco) · Tacuatí (Ypané) · Pucará de Tilcara ·
Ciudad Real del Guairá · São Pedro de Alcântara (Tibagi) · San Esteban de Miraflores ·
Lacangayé · Concepción del Bermejo · San Fernando (Resistencia) · Santiago del Estero ·
Nonohay (Yukarı Uruguay) · San Jerónimo (Reconquista) · Beyan G31.5 B56.5 · Beyan G34.5
B65.5 · Beyan G35.5 B69.5 · Reducción de la Concepción (Salado) · Beyan G36.5 B64.5 · Beyan
G36.5 B61.5 · Beyan G37.5 B68.5 · Nuestra Señora del Pilar (Mar del Plata) · Beyan G38.5
B66.5 · Beyan G38.5 B62.5 · Beyan G39.5 B70.5 · Beyan G39.5 B64.5 · Valdivia · Beyan G40.5
B68.5 · Beyan G40.5 B62.5 · Beyan G41.5 B71.5 · Castro (Chiloé) · Beyan G42.5 B65.5 · Beyan
G43.5 B68.5 · Beyan G44.5 B72.5 · Beyan G44.5 B65.5 · Beyan G46.5 B74.5 · Beyan G46.5 B68.5 ·
Beyan G46.5 B71.5 · Beyan G48.5 B75.5 · Floridablanca (San Julián) · Beyan G49.5 B72.5 ·
Beyan G51.5 B69.5 · Beyan G52.5 B74.5 · Punta Arenas · Porvenir · Fuerte Bulnes · Güney
Georgia (Grytviken) · Beyan G54.5 B67.5

📌 "Beyan G… B…" dolgu noktalarından **25**'i haritada işaret olarak duruyor (s:
dönemleri var), 1920'de 25'i de aktif. (A) gereği kutuda da çıkıyorlar ("beyan" yazan
görür). Bunları gizlemek (A)'yı çiğnerdi; bu noktaların hükmü veri sahibinin işidir.

## Yapılmayanlar — sebebiyle

| Konu | Sebep |
|---|---|
| **Eşanlam sözlüğü** (Diyarbekir↔Diyarbakır) | Yapılmadı, kapsam dışı (I). `data/ad_esanlam.js` var ama bağlanması ayrı iş. Bugün "diyarbekir" 0 sonuç veriyor. |
| **Yazım hatası toleransı** | Yapılmadı (I). Eşleşme alt dize: tam eşitlik > önek > kelime başı > içerir. |
| **`data/bolgeler.js` üretilmiş bölge poligonları** | Kutuya girmedi (I). Haritanın Osmanlı idarî bölge katmanı bir yerleşim değil, poligon. Odaklanması için yeni bir kamera yolu gerekirdi, bu da (E)'yi çiğnerdi. |
| **`tur:"bolge"` yeterli mi** (ölçüldü) | 211 kaydın 92'si haritada işaret, ve 92'si kutuda (1453'te 77 aktif, 1920'de 92). 119'unun d/v/s dönemi yok (Ogaden, Tibesti, Karakum…): harita onları hiç çizmiyor, `AD_KONUM`da yalnız kamera havuzunda duruyorlar ⇒ (B) gereği kutuda yoklar. "Bölge" araması bu yüzden kısmî: bir bölge ancak sahiplik dönemi yazılırsa kutuya girer. Bu bir veri işi. |
| **Osmanlı'nın kendisi ve Osmanlı'ya tâbi gövdeler "ülke" olarak** | Kutuda yoklar. Osmanlı ve tâbi gövdeleri `devletler2`de değil, `donemler` katmanında. Tek mevcut kamera yolu oto-zoom (`zoomUygula`), o da `otoZoom` kapalıyken hiçbir şey yapmıyor. Yeni bir yol yazmak (E)'yi çiğnerdi. Bu yapıların şehirleri kutuda var, sahip sütununda "Osmanlı" ya da "… (Osmanlı tâbi)" görünüyor. |
| **"Ülke" = künye (896)** | Yalnız o gün gövdesi ÇİZİLİ künyeler listeleniyor (`devletler2`, 584 gövde). Gövdesi olmayan künye (yalnız sınır, kronoloji ya da kişi katmanında olan) seçilince kameranın gideceği yer yok. Dahası (B)'nin "haritada çizili mi" ölçütünü sağlamıyor. |
| **Seçilen yer uçuştan sonra görünür mü** | Ölçülmedi. Kutu "o gün sahnede" ölçütünü kullanıyor (yakınlıktan bağımsız). Uçuş `kmDanZoom(⚙ genişlik)` yakınlığına iniyor; `g:0` olmayan küçük bir yer o yakınlıkta çakışma elemesine takılabilir. Seçilen işareti vurgulamak ayrı bir iş. |
| **Sınav betiği** (`denetim/ARAC-YER-ARAMA-SINAV-1006.*`) | Yazılmadı. Sınav DOM ve harita durumu istiyor; kanıt yukarıda, tarayıcıda gerçek handler ile alındı. |

## KAPI — önce / sonra (hepsi `C:\atlas-arama`)

| Kapı | Önce | Sonra |
|---|---|---|
| `node --check js/app.js` | OK | OK |
| `py arac/denetle_arayuz.py` | `SONUÇ: temiz`, çıkış 0 (33 denetim tarandı) | `SONUÇ: temiz`, çıkış 0 (34 denetim tarandı; yeni `sehirAktifKayit` yorumu "ölü değil" diye sayıldı, yeni kusur yok) |
| `py arac/denetle.py` | çıkış **2** | çıkış **2** |
| Konsol hatası | — | **0** (masaüstü, 1024 ve 375 px'te yeniden yüklemelerden sonra) |

`denetle.py`nin iki çıktısı satır satır karşılaştırıldı (CR temizlenerek). Tek fark bir
`adal 1 dönem` satırının sırası, yani sırasız bir küme. Ölçülemeyen kalem iki koşuda da
aynı: Değişmez 8, *"devletler_harita.js YOK"*.
