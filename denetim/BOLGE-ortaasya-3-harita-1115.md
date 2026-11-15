# BOLGE-ortaasya-3-harita-1115 — Orta Asya harita uyumu (UMIT, 15 Kasım 2026)

Ölçüm ağacı: `umit-1115-bolge-ortaasya` (origin/main 8fb10bdf1), `coz-c` ile üretilmiş dosyalar diriltilmiş ağaçta. Boyanan harita (petek koşusu) ölçülmedi: bu belge veri düzeyindedir.

## Ölçülenler
| ölçü | sonuç | araç |
|---|---|---|
| `yer_id` / `odak_yer` çözülmeyen atıf (bütün 18734 madde) | **0** | `py arac/odak_olc.py` (çıkış 0) |
| Orta Asya künyesi adlandıran, 1281+ ve `yer_id` dolu madde | 217; **yer_id çözülmeyen 0** | kendi betiğim (girdi.yukle) |
| bu 217 maddeden yerleşim penceresi ±30 günde kırılan | 64 (153'ünde kırılma yok) | aynı |
| Orta Asya künyesi içeren sahip değişimi (kutu+Orta Asya sahipli 390 yerleşim, `d` değişen ardışık pencere çifti) | 979 | aynı |
| bunlardan künyelerden birini ya da yeri adlandıran bir madde ±30 günde olan | 782 | aynı (gevşek: yalnız gömülü `taraflar`, `olay_taraf.js`, `yer_id`, `odak_yer`) |
| eşleşmeyen | 197 (yanlış-negatif içerebilir: `kronoloji_sinir*` içindeki bazı maddeler başka etiketle bağlı) | aynı |
| `py arac/denetle.py` Değişmez 2 (tüm veri, ana ölçüt) | **760 kırılma, 0 açık** | `denetle.py` |
| Değişmez 4/4c/4d/4s | 0/0/0/0 | `denetle.py` |
| Değişmez 1 / 1b | 306 sahipsiz (beklenen 306) / beyansız boşluk 0 | `denetle.py` |
Denetle tavanları: origin/main tabanında `2sk` "TAVAN AŞILDI 5927 > 5892" uyarısı zaten var (bu oturumun değişikliği değil; veri değişmedi). Çıkış kodu: aşağıda "denetle sonu".

## Fazla kırılma / eksik kırılma
**Eksik kırılma (madde var, kırılma yok).** `kırılmasız madde` (D2t) küresel 167; Orta Asya künyesi adlandıranlardan örnekler: 1281+ maddelerin 153'ü yer_id verdiği hâlde yerleşiminde ±30 günde kırılma yok. Çoğu toprak değiştirmeyen olaydır (medrese bitişi, hükümdar ölümü, antlaşma metni); toprağı değiştirdiği hâlde kırılması olmayanlar: yok denecek kadar az, tek tek incelenmedi (ölçülmedi).
**Fazla kırılma (kırılma var, maddesi o yeri/tarafı anmıyor — D2s AÇIK).** Küresel 154 AÇIK; bunların Orta Asya payı `denetle` çıktısında ayrıştırılamadı ("ölçülmedi"). Kendi gevşek eşleştirici ile en kalabalık eşleşmeyen çiftler:
| sahip değişimi | yerleşim sayısı | tarih | not |
|---|---|---|---|
| serbedariler → timurlu | 19 | 1381-01-01 | Timur'un Horasan'ı alışı yıl-hassasiyetli yazılmış; yer anan madde yok |
| cagatay → timurlu | 19 | 1370-04-09 | Timurlu kuruluş günü; maddeler `timur` yerine başka etiketle bağlı olabilir |
| timurlu → karaman/aydin/germiyan/mutahharten vb. | 14+2+2+3 | 1402-09-15 / 1403 | Ankara sonrası Anadolu: Orta Asya künyesine bağlı ama bölge Anadolu'ya düşer (başka bölge ajanının) |
| altinorda → kazak-hanligi | 12 | 1500-01-01 | Kazak bozkırı yerleşimleri; Altın Orda t 1502 |
| yarkent-hanligi → cungar | 9 | 1705-01-01 | Kaşgar, Hotan, Kuça…; Yarkent t 1705 ile Cungar 1705-1759 penceresi: `cungar` künye t 1758-01-01'den 1 yıl uzun |
| kazak-hanligi → hokand | 9 | 1815/1825 | Türkistan (Yesi), Çimkent, Balasagun |
| yakub-beg → qing-hanedani | 7 | 1876-08-18 / 1877-10-18 | Turfan, Kuça, Ürümçi; Çin ordusunun ilerlemesi gün-gün (TDV yakub-beg 1877-05-16 Turfan maddesi ile 1876-08-18 penceresi çelişir) |
| hokand → rusya | 6 | 1862-09-04, 1868-01-01, 1876-02-19 | Andican, Oş: yıl-hassasiyetli |
| sibir-hanligi → rusya | 5 | 1598-08-20 | Tobolsk/Tümen |
| cungar → kazak-hanligi | 5 | 1758-01-01 | Almatı, Issık Göl |
| `__BOSLUK__` → afganistan | 6 | 1883-08-15 / 1893-01-01 | Pamir (aşağıda) |
Hiçbiri D2'yi bozmaz (açık 0): çünkü başka bir yer/taraf anan madde ±30 günde bulunuyor; tablo kapsam dürüstlüğü içindir, düzeltme değildir.

## Künye aşımı (D4c toleransının içinde kalan ama künye ömrü dışına taşan pencereler)
`denetle` D4c toleransı 400 gündür; aşağıdakiler sayılmaz ama künye f/t ile pencere uçları eşleşmiyor:
| künye | künye uç | pencere ucu | fark | etkilenen yerleşim |
|---|---|---|---|---|
| yakub-beg | f 1865-01-01 | **1864-06-04** (Kaşgar, Yarkent, Hotan, Kuça…) | 211 gün erken | 13 |
| yakub-beg | t 1878-03-16 | 1877-12-17/18 | künyeden önce bitiyor (sorun yok) | — |
| cungar | t 1758-01-01 | **1759-01-01** | 365 gün uzun | 8 (Kaşgar, Yarkent, Hotan, Kuça, Aksu, Uçturfan, Karaşar, Keriya, Çerçen, Çarklık) |
| afgan-durrani | f 1747-10-01 | **1747-06-20** | 103 gün erken | 6 (Peşâver, Kâbil, Gazne, Herat, Attock, Râvalpindi, Srinagar) |
| altinorda | t 1502-01-01 | **1502-03-01** | 59 gün | Terek, Astrahan, Ural eteği, Rın kumulları, Syzran, Samara |
**Yakub Bey vakası içeriktir:** 1864-06-04 Kuça'da Döngen-Uygur hükûmetinin kurulduğu gündür (`kuca-hocalari` f 1864-01-01, madde 1864-06-04); Kaşgar/Yarkent/Hotan pencerelerini o gün `yakub-beg`'e vermek **Yâkub Bey'in Kâşgar'a girdiği 1865-01-15 (madde) öncesine** denk düşer. TDV `kasgar`/`yakub-beg` okunmadı; Kaşgar'ın 1864'te kim elinde olduğu `kuca-hocalari`/Sıddık Bey/Hokand Hocaları arasında kaynaksız. **Düzeltme yazılmadı:** `yerlesimler_asya.js` (yasak değil) ama kaynak okunamadı → kuyruğa (YERLESIMLER-JS-KUYRUK-1115-ortaasya §K1).

## Takvim (Jülyen/Gregoryen) uyumsuzlukları — veri düzeyi
- Taşkent hokand→rusya penceresi `1865-06-17` (Jülyen), kronoloji maddesi `1865-06-29` (Gregoryen) — aynı olay, iki takvim (adım 2 T3).
- Hîve: aynı künyede düşüş TDV 29 Mayıs 1873 (muhtemelen Jülyen), antlaşma 24 Ağustos 1873 (Gregoryen) (adım 2 T1).
- Hokand ilgası `1876-02-19` (muhtemelen Jülyen) → `Hokand`, `Andican`, `Oş`, `Alay vadisi` pencereleri (adım 2 T5).

## Yerleşimi olmayan, kronolojide adı geçen yerler (haritada kırılma görünemez)
`kronoloji_orta_asya.js` başlığı kendisi sayıyor: Göktepe, Saraycık, Akmescid-Kızılorda, Sığnak(şimdi var), Otrar(var), Suzak, Kökçetav(var), Akmola(var), Irgız, Balkaş, Işık Göl(Issık Göl havzası var), **Pişpek (Bişkek)**, Evliyaata (Taraz, var), Aksu(var), Talas(var). Ek olarak ölçüldü: **yerleşimi hiç olmayan** Düşenbe (Buhara'nın 1921-02-21 künye bitişi onun düşüşüne bağlı), Namangan, Margilan, Nukus/Karakalpak, Kızılorda, Karaganda, Çarcuy (Amul), Kerki, Tejen, Bayramali; Fergana vadisi dış-enklav köyleri (Sokh, Vorukh, Şahimardan, Barak). `yerlesimler.js` kuyruğuna yazıldı.

## Pamir/Bedahşan: `__BOSLUK__` dilimi (1281+; haritada delik)
Horog 1281-1883, Kala-i Vamar (Rûşan) 1281-1883, Gunt vadisi 1281-1883, İşkâşim 1281-1883-08-15, Serhad (Vahan) 1281-1883-08-15, Kala-i Pençe 1775-1883-08-15, Karakul (Pamir) 1281-1893, Alay vadisi 1281-1876-02-19, Taşkurgan 1281-1759 ve 1865-1878, Feyzâbâd (Bedahşan) 1680-1859, Kal'a-i Hum (Darvaz) 1281-1873. Beyanlı (denetle 1b: beyansız boşluk 0). Boşluk merdiveni: ② ③ basamaklar için TDV okunmadı; abi merkez önerisi kuyrukta.

## Denetle sonu
Aşağıda ("SON") baseline çıkışı ve komutun çıkış kodu işlenecek.
