# KOJA2 (Kore/Japonya parça 2) — RAPOR

Üretim: `denetim/dogu/koja2/_uret.py` (tek kaynak; tarihler ganzhi ile `assert`li). Doğrulama: `node denetim/dogu/dogrula.js koja2` → ihlal 0, uyarı 0.

## 1. Ölçülen
- Girdi: 17 polity. Pencere (MS 500–1281) içinde 7: kiyohara-dewa, oshu-fujiwara, daewi-myocheong, taira-rejimi, kamakura, ryukyu-shunten-eiso, tamna.
- Künye yazılan: 2 (tamna, sambyeolcho-rejimi [girdide yok, sahipsiz Jeju/Jindo dilimi için eklendi]). kiyohara-dewa YAZILMADI.
- Kronoloji maddesi (kronoloji_cok): 27 — daewi 5, taira 2, oshu-fujiwara 3, kamakura 4, tamna 3, sambyeolcho/Jeju 5 (1270-09-05, 1270-11-17, 1271-06-23, 1273-05-16, 1273-07-21 yuan darugachi), ryukyu 5. Künye içi kuruluş/son: 4. Sinir maddesi: 12 (Değişmez 2). dogrula toplamı: 39 madde, 12 toprak değişimi.
- Yeni yerleşim: 1 (Jindo; çift tanık Wikidata Q12618195 + OSM, ≈2,4 km). `s:` dilimi 2. `__BOSLUK__` 0.
- Yama: 7 yerleşim — Pyongyang (2 dilim), Ceccu (Jeju) (5), Urasoe Gusuku (1), Kamakura/Kyoto/Nara/Hakata (Fukuoka) (her biri kamakura 1185-12-22→1281-01-01). 12 sinir kırılması, hepsi ±0 gün eşleşir.
- Tarihlerin kaynağı: Azuma Kagami j.1-5 (zh/ja.wikisource), Hyakurenshō j.9, Goryeosa j.2/16/26/27/57, Samguk sagi j.6/26, Chūzan Seikan j.1-2 (okundu, birebir alıntı kaynak: alanlarında). Ganzhi→Jülyen: 1185-12-22 (戊申), 1135-01-19, 1185-04-25 yeniden doğrulandı (KOJA_REF ile aynı).
- Pencere dışı (künye/kronoloji/yerleşim YAZILMADI): buyeo (t=494), byeonhan, dongye, gojoseon (t=-193), jeongan-krallik, jin-devleti-kore, jinhan, mahan, na-nakoku, okjeo (t=56) — 10 polity.

## 2. Bulunamayan / doğrulanamayan
- **kiyohara-dewa (1062–1087):** Gosannen/Zenkunen birincil metinleri (Mutsu waki, Gosannen kassen emaki, Fusō ryakki j.29-30'da ilgili girişler) wikisource'ta yok/ilgili kısım yok; Cambridge History of Japan 2 açılamadı; WebSearch yalnız Vikipedi türevi döndürdü (kullanılmadı). Kanegasawa koordinatı ve künye yazılmadı. Not: Azuma Kagami j.1 (okundu) Gosannen'i yalnız geriye dönük anar («永保三年九月…義家於奥州与將軍三郎武衡同四郎家衡等遂合戰»).
- **taira-rejimi:** başkent/yerleşim bulunamadı (Dazaifu/Yashima/Hikoshima için Pleiades-GeoNames çift tanık denenmedi); yalnız 1184 Ichi-no-Tani maddeleri eklendi. Dan-no-ura (1185-04-25) ms1'de.
- **oshu-fujiwara:** Azuma Kagami j.6-9 (1186-1189) çevrimiçi yok: Hidehira ölümü (1187), Yasuhira (1189), Hiraizumi'nin düşüşü yeniden okunamadı. 1181'den iki madde, 1180'den bir madde eklendi.
- **kamakura:** 1186-1281 olayları (1192 şogunluk, 1203, 1221 Jōkyū, 1232 Goseibai, 1274/1281 Moğol) için birincil metin çevrimiçi yok; yalnız 1180-1185 maddeleri yazıldı.
- Tek kaynaklı: Ryukyu (Chūzan Seikan 1650), Yoshitsune-Kisegawa günü (giriş tarihi bağış belgesinden), Hyakurenshō 1181-09-25 (ganzhi yok, AK ile eşleştirildi). TDV bu işte taranmadı (Kore/Japonya TDV'de zayıf); Smits/Kerr/CHJ açılamadı.

## 3. Kararlar ve öneriler
- **Künye düzeltme önerileri (KUNYE_MAIN_DA):** oshu-fujiwara — künye f=1087-01-01, t=1189-01-01 yıl düzeyinde; mevcut Hiraizumi zinciri (nokta2) 1189-01-01'de kamakura'ya geçer ama sinir maddesi 1189-10-03'tür (9 ay fark, Değişmez 2 riski): zincir 1189-10-03'e çekilmeli (kaynak: ms1/KOJA_REF Ōshū düşüşü; bu işte yeniden okunamadı). kamakura — f=1185-12-22 (Bunji 1/11/29 戊申) bu oturumda Azuma Kagami j.5'ten yeniden doğrulandı (çift teyit: KOJA_REF + AK).
- **Çelişki (Jeju):** Goryeosa j.57 Tamna'nın 1294'te (Chungnyeol 20) Goryeo'ya iade edildiğini yazar; atlas `Ceccu (Jeju)` zinciri yuan 1281-1356 / goryeo 1356'dır. 1294–1356 arası Jeju zinciri gözden geçirilmeli.
- **Çelişki (Tamna/Silla):** Goryeosa j.57 Munmu 1 (661), Samguk sagi j.6 Munmu 2 (662); 662 yazıldı, ic_not'ta beyan.
- **Moğol Dongnyeong-bu (Seogyeong, 1270–1290):** Pyongyang `goryeo` 1136→1281 yaklaşıklığıdır; ayrı kimlik/küme gerekir (Goryeosa j.26 Choe Tan).
- **Yama (YAMA GEREKLİ):** `yama_koja2.js` — Pyongyang (daewi 1135-01-19→1136-03-23, goryeo →1281; `devam_gerekli` 0500→1135-01-19), Ceccu (Jeju) (tamna 0500→1105, goryeo→1270-11-17, sambyeolcho→1273-05-16, goryeo→1273-07-21, yuan→1281; zincir tam, `devam_gerekli` yok), Urasoe Gusuku (ryukyu-shunten-eiso 1187→1314; `devam_gerekli` 1314→1322; mevcut `kur`=1322 yama sonrası gözden geçirilmeli), Kamakura/Kyoto/Nara/Hakata (kamakura 1185-12-22→1281; `devam_gerekli` 0500→1185-12-22, koja1/Heian işi).
- **Yama dışı bırakılan Japon şehirleri (varlık/sahip kanıtı yok, 1185'te kuruluş sonrası):** Osaka, Sakai, Odawara, Sunpu, Gifu, Niigata, Himeji, Okayama, Kumamoto, Funai, Kagoşima, Tsuşima, Aizu-Wakamatsu (13). Hiraizumi'ye dokunulmadı.
- **Boya ihtiyacı** (`arac/renkler.py BOYALAR`'da YOK, 5): `tamna`, `sambyeolcho-rejimi`, `daewi-myocheong`, `ryukyu-shunten-eiso`, `taira-rejimi` (ikisi ms1 künyeli). Mevcut: kamakura, goryeo, yuan-hanedani, oshu-fujiwara, heian-japonya.
- **Künye adayı:** `sambyeolcho-rejimi` girdi listesinde yoktur; başka küme yazarsa tekilleştirilmeli. Yeni tür/bölge önerisi yok.
- Not: `Jindo` zinciri 1281-01-01'de biter (devam_gerekli: Joseon/sonrası + 1270 öncesi Goryeo, başka iş); k=4 seçildi.
