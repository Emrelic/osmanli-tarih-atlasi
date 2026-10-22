# RAPOR — DOĞU 500-1281 / AMERIKA-3

Ölçüm yeri: `C:\atlas\.claude\worktrees\dogu` (git'e dokunulmadı). `node denetim/dogu/dogrula.js amerika3` → **çıkış 0**
(`{"kunye":1,"kron":23,"yer":3,"s":3,"bosluk":0,"toprak":0,"kuyruk_gerekli":3,"yama":9,"yama_dilim":9,"devir_eslesen":0,"devir_eslesmeyen":0,"ihlal":0,"uyari":0}`).
Üretim betiği ve indirilen kaynak metinleri scratchpad'dedir (`...\scratchpad\amerika3\`); çıktılar yalnız bu dizinde.
Alıntı sınaması: 66 tırnaklı alıntı kaynak metinlerde otomatik arandı, 65'i birebir, 1'i yalnız noktalama boşluğu farkıyla (kaynak metin "America ." yazıyor).

## ① Ölçülenler
- Girdi **17 polity**. Pencere dışı polity **0** (hepsinin ömrü 500-1281 ile kesişir).
- **Künye: 1** (`taino-seflikleri`, BEYANLI YAKLAŞIKLIK; künye içi 2 madde). KUNYE_YOK 4 girdiden **3'ü yazılamadı** (aşağıda ②).
- **Kronoloji (anlatı): 23 madde.** Dağılım: toltek 2, mayapan-birligi 2, norse-gronland 3, chimu 1, etowah 1, moundville 1, cahokia 2, natchez 3, aymara-senyorlukler 1, kuzco-krallik 2, tututepec 3, chincha 1, muisca-konfederasyonu 1, taino-seflikleri 1 (+2 künye içi). Hedef 6-8 madde HİÇBİR polity'de tutturulamadı; **hiç madde yazılmayan 3 polity**: culhuacan, azcapotzalco-tepanek, tenayuca-chichimeca.
- **Sınır maddesi: 0** (yazılan 9 yama dilimi ve 3 yeni yerleşim zinciri tek dilimli; 1281'deki 5 kimlik değişimi aşağıda).
- **Yeni yerleşim: 3** — Tula de Allende (Tollan), Brattahlíð (Qassiarsuk), La Centinela (Chincha); **3 `s:` dilimi**, `__BOSLUK__` 0; **3'ünde `kuyruk_gerekli`** (1150→2000, 1450→2000, 1476→2000). Çift tanıklı koordinat **3/3** (GeoNames+OSM Nominatim; Wikidata P625+OSM Nominatim ×2). Pleiades Amerika'yı kapsamadı. Mükerrer taraması (3 km) 4 noktada (Tula, Qassiarsuk, Centinela, Igaliku): 0 çakışma.
- **Yama: 9 mevcut yerleşim, 9 dilim** (Cahokia, Etowah, Moundville, Mayapán, Chan Chan, Chucuito, Hatun Colla, Cusco, Tututepec). `devam_gerekli` gereken yok (hepsinin son `t`si mevcut zincir başı 1281); 5'inde 1281'de devlet kimliği değişiyor (③).
- Okunan kaynaklar (alıntılar o oturumda açılan metinde sınandı): Europe PMC tam metin — Kennett ve ark. 2022 (Mayapán), Borreggine ve ark. 2023 + Jackson ve ark. 2018 (Norse Grönland), Kuitems ve ark. 2022 (AD 1021), Kessler ve ark. 2025 (Cahokia), Olah ve ark. 2026 (Chimú), Bongers ve ark. 2026 (Chincha), Krettek ve ark. 2025 (Muisca), Rodríguez Ramos ve ark. 2023 (Porto Riko); encyclopedia.com (Diehl: Toltecs, Tula); NGE (Etowah); MDAH (Natchez); Alabama Legacy (Moundville); Moseley 2001 giriş bölümü (OCR); Joyce 2016 + Levine ve ark. 2011 (Tututepec).

## ② Bulamadığım / doğrulayamadığım
- **culhuacan, azcapotzalco-tepanek, tenayuca-chichimeca (künye YAZILMADI):** f/t kaynaklanamadı. Denenen: encyclopedia.com (Toltecs/Chichimecs/Tetzcoco/Mesoamerica: bu üç yerin adı yok), INAH Lugares «The Chichimecs of Xolotl» (Tenayuca'yı Xolotl'un kurduğunu ve Çiçimeklerin 12. yy'da geldiğini söyler, polity sınırı vermez), Nahuatl Dictionary/Codex Chimalpahin (Culhuacán'da hüküm 1299'da 600 yıldır sürüyor; tek Culhuacán tarihi, çeviri "1209 [sic]" der), UNAM Códice Chimalpopoca/Anales de Cuauhtitlan PDF (Azcapotzalco/Tenayocan/Culhuacán anılır ama tarihler xihuitl yıl işaretiyle, Batı yılı yok; çevrilemedi), Bancroft 1883 (Veytia/Ixtlilxochitl/Brasseur dizileri birbiriyle çelişir: ör. Tula'nın yıkımı 1011/959/958/1004/1116; kullanılmadı), Britannica (403), Smith 1984 PDF (Cloudflare engeli), Europe PMC (hiçbiri). Vikipedi ve çevirileri yalnız ipucu: Culhuacán 1377'de Azcapotzalco'ya, 1428'de Azcapotzalco Mexica'ya düşer — **tek dayanak olamayacağı için yazılmadı**.
- **Muisca:** Muisca konfederasyonunun 1200-1281 siyasî tarihi ve Bacatá/Hunza öncesi yaması için polity düzeyinde kaynak yok; yalnız kültürel evre (Krettek 2025) yazıldı.
- **Natchez 1250-1281 yamasi:** yazılmadı; MDAH'a göre Grand Village yerinde 1200'de insan vardı, ama Natchez şefliğinin başkenti oluşu ~1680'den.
- **Moseley bölüm 9** (Chimú/Lambayeque, Titicaca, Cuzco güneyi): kullandığım OCR metinde gövdesi YOK (yalnız içindekiler/dizin); ms1 künyelerinin ana alıntıları (Killke Cuzco 'young señorío', 'Aymara Kingdoms') bu yüzden "atıf; açılmadı" işaretli. Giriş bölümünden alınan alıntılar (Inka gelişimi ~1000, 1350-75, Tiwanaku 1100 kuraklığı) doğrulandı.
- **Chimú 1000-1200:** künye f=1000 (Store norske) ↔ Olah 2026 1200; Chan Chan yaması 1200'den. 1000-1200 arası kaynaklanamadı.
- **Garðar (Igaliku), Vestribygð, Hvalsey:** Garðar'ın/ Batı Yerleşimi'nin kendi tarihi için bağımsız kaynak okunmadı → ayrı yerleşim yazılmadı (koordinat Igaliku: OSM 60.9891,-45.4210 + Wikidata Q980694 60.9878,-45.4208 hazır).
- **Taíno:** Hispaniola/Küba cacicazgo tarihleri ve İspanyol temasıyla çöküş sırası kaynakta yok; atlasta Taíno yerleşimi yok (Caguana/Tibes için çift tanıklı koordinat ve sahiplik kaynağı bulunamadı).
- **Tula 1150-1250:** kaynak "yaklaşık bir yüzyıl terkten sonra Aztek bağlantılı grupların yeniden iskânı"nı söyler (yıl yok); kuyruğa bırakıldı.
- Tarih uydurmadım; hesaplanan iki tarih beyanlı: Lord 8 Deer 1063+18=1081; Muisca ≈1200 BP → 750 (1950 esası).

## ③ Kararlar / öneriler
### Künye düzeltme önerileri (dosyaya yazılmadı)
- `chimu`: `chimu-krallik`in mükerrer künyesi (f=1000); Olah 2026 Chimú'yü 1200-1470 verir (çelişki beyanlı). BOYALAR'da yalnız `chimu-krallik` var.
- `natchez` f=1250: kaynaksız; MDAH: yerde 1200 ya da öncesi insan, höyükler ~1350'den, şeflik başkenti ~1680'den. f önerisi: ya 1200 (yer iskânı) ya 1680'e yakın (polity başkenti) — Emre kararı.
- `muisca-konfederasyonu` f=1281 (girdi 1200): arkeolojik Muisca dönemi ≈750'den (kültürel evre, siyasî birim değil).
- `mayapan-birligi`: f=1100 (Kennett 'at least 1100') ✓, ama aynı makale 1200 de yazıyor.
- `aymara-senyorlukler` ↔ `lupaqa-krallik`/`colla-krallik` (f=1281), `tututepec` ↔ `tututepec-krallik` (f=1281), `kuzco-krallik` ↔ mevcut Cusco zinciri `inka-imparatorlugu` 1281-1438 (künye f=1438 → hayalet): aynı polity'nin ikişer künyesi; birleştirilmeli (ms1 künyeleri genişletilip eski kimliklere ya da tersi). Aksi hâlde yama dilimleri 1281'de **sessiz sahip değişimi** (Değişmez 2) doğurur: Mayapán, Chucuito, Hatun Colla, Cusco, Tututepec.
- `toltek` f=0900 (Diehl 'Tula' 900–1250) ↔ Diehl 'Toltecs' 950–1150/1200.
- `norse-gronland`: başkent Garðar yerleşimi hâlâ yok; yalnız Brattahlíð eklendi.

### YAMA GEREKLİ (`yama_amerika3.js`)
| yerleşim | önek | not |
|---|---|---|
| Cahokia | cahokia 1050→1281 | kimlik aynı |
| Etowah | etowah 1100→1281 | kimlik aynı |
| Moundville | moundville 1120→1281 | kimlik aynı |
| Mayapán | mayapan-birligi 1100→1281 | 1281'de maya-sehir-devletleri'ne geçiş; mevcut dilimi mayapan-birligi yap |
| Chan Chan | chimu-krallik 1200→1281 | kimlik aynı |
| Chucuito | aymara-senyorlukler 1100→1281 | 1281'de lupaqa-krallik; künye birleştir |
| Hatun Colla | aymara-senyorlukler 1100→1281 | 1281'de colla-krallik; künye birleştir |
| Cusco (Qosqo) | kuzco-krallik 1200→1281 | mevcut 1281-1438 dilimi kuzco-krallik olmalı |
| Tututepec (Yucu Dzaa) | tututepec 1100→1281 | 1281'de tututepec-krallik; künye birleştir |

Not: Túcume (sican yaması) ve Chichén Itzá yamaları amerika2'de; çift yama yazılmadı.

### Boya ihtiyacı (`arac/renkler.py` BOYALAR'da yok — grep ile doğrulandı)
`mayapan-birligi, aymara-senyorlukler, chincha, kuzco-krallik, tututepec, taino-seflikleri, chimu` (7 kimlik). Var olanlar: toltek, norse-gronland, chimu-krallik, etowah, moundville, cahokia, natchez, muisca-konfederasyonu, lupaqa-krallik, colla-krallik, tututepec-krallik, maya-sehir-devletleri. Yeni yerleşimlerin `d:` kimliklerinden boyasız: `chincha` (La Centinela), yama: `aymara-senyorlukler, mayapan-birligi, kuzco-krallik, tututepec`.

### Kuyruk işçisine
Tula de Allende 1150→2000, Brattahlíð 1450→2000, La Centinela 1476→2000.

### Arkeoloji alanları
`kaynak_turu:"arkeoloji"` + `etiket:["arkeoloji"]` 12 maddede; `aralik` 6 maddede (Mayapán 1000-1100 kalibre → orta nokta 1050; Mayapán 1100-1450, Chimú 1200-1470, Cahokia 1050-1200 → süre ⇒ t = en eski uç; Kuzco 1350-75 → 1363; Taíno Capá 1200-1500 → en eski uç); tek değerli maddelerde `aralik` yok, `ic_not_d` "TEK DEĞER". `py arac/arkeoloji_denetle.py` çalıştırılmadı.

### Yeni tür/bölge değeri
Yok. Kronoloji `tur` sözlüğünde `siyaset` kullanıldı. Taíno `bolge:"orta-amerika"` (Karayip için ayrı değer yok; atlas bazı künyelerde `orta-amerika-karayip` kullanıyor — sözlük dışı).
