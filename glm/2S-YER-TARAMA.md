# GLM-3 · 2S-YER-TARAMA — kapalı yabancı kırılmalarının sınıflaması

- Betik: `glm/2s_yer_tarama.py` · JSON: `glm/2S-YER-TARAMA.json`
- Evren: `arac/denetle.py`'nin KENDİ kodu (yerlesimleri_yukle · olaylari_yukle · degismez2(\"s\") · kapsam_disi)
- Doğrulama: kırılma 1418/1418 · açık 13/13 · kapsam dışı 350/353 → **ÇELİŞİYOR ✗**

## Sayılar

| birim | YER-EŞLEŞİR | DEVLET-EŞLEŞİR | SAHTE | toplam |
|---|---|---|---|---|
| tarih (denetle'nin kırılma birimi) | 712 | 30 | 313 | 1055 |
| kırılma (yerleşim bazlı) | 2524 | 1898 | 3588 | 8010 |

- Sınav noktası Mankup 1349: **SAHTE** (beklenen SAHTE) → geçti ✓

## SAHTE kırılmalar — ilk 50 (tam liste JSON'da: 3588)

| yerleşim | dosya | tarih | eski→yeni sahip | kapatan madde (no · tarih · başlık) |
|---|---|---|---|---|
| Alaşehir | yerlesimler.js | 1300-01-01 | selcuklu → germiyan | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Antalya | yerlesimler.js | 1300-01-01 | selcuklu → hamid | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Elmalı | yerlesimler.js | 1300-01-01 | selcuklu → hamid | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Emet (Eğrigöz) | yerlesimler.js | 1300-01-01 | selcuklu → germiyan | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Finike | yerlesimler.js | 1300-01-01 | selcuklu → hamid | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Kaş (Antiphellos) | yerlesimler.js | 1300-01-01 | selcuklu → hamid | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Kütahya | yerlesimler.js | 1300-01-01 | selcuklu → germiyan | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Mengo (Buganda) | yerlesimler_e9353f.js | 1300-01-01 | (yok) → buganda | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Nyanza (Ruanda) | yerlesimler_afrika2.js | 1300-01-01 | (yok) → ruanda | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Simav | yerlesimler.js | 1300-01-01 | selcuklu → germiyan | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Sivrihisar | yerlesimler.js | 1300-01-01 | selcuklu → germiyan | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Tavşanlı | yerlesimler.js | 1300-01-01 | selcuklu → germiyan | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Tzintzuntzan | yerlesimler_amerika.js | 1300-01-01 | (yok) → purepecha-imparatorlugu | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Uşak | yerlesimler.js | 1300-01-01 | selcuklu → germiyan | 217 · 1300-01-01 · Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık |
| Baroda (Vadodara) | yerlesimler_hint0912.js | 1304-01-01 | racput → delhi-sultanligi | 781 · 1304-01-01 · Sakarya seferi: Leblebicihisar, Lefke, Mekece ve Geyve'nin alınması |
| Sultâniye | yerlesimler.js | 1305-01-01 | (yok) → ilhanli | 782 · 1305-01-01 · Geyve Boğazı kalelerinin fethi: Karaçepüş, Karatigin ve Absu |
| Manisa | yerlesimler.js | 1313-01-01 | bizans → saruhan | 219 · 1313-01-01 · Köse Mihal'in Müslüman olup Osmanlı'ya katılışı |
| Jitomir (Zhytomyr) | yerlesimler_ukrayna_0916.js | 1320-01-01 | altinorda → litvanya-buyuk-dukalik | 220 · 1320-01-01 · Orhan Bey'in fiilî yönetimi devralması |
| Antalya | yerlesimler.js | 1321-01-01 | hamid → teke | 224 · 1321-01-01 · Mudanya limanının abluka altına alınışı |
| Elmalı | yerlesimler.js | 1321-01-01 | hamid → teke | 224 · 1321-01-01 · Mudanya limanının abluka altına alınışı |
| Finike | yerlesimler.js | 1321-01-01 | hamid → teke | 224 · 1321-01-01 · Mudanya limanının abluka altına alınışı |
| Kaş (Antiphellos) | yerlesimler.js | 1321-01-01 | hamid → teke | 224 · 1321-01-01 · Mudanya limanının abluka altına alınışı |
| Gao | yerlesimler_e9353f.js | 1324-01-01 | (yok) → mali-imparatorlugu | 221 · 1324-01-01 · Akyazı ve İmralı Adası'nın fethi |
| Kalyari (Cagliari) | yerlesimler.js | 1324-01-01 | ceneviz → aragon | 221 · 1324-01-01 · Akyazı ve İmralı Adası'nın fethi |
| Sasari (Sassari) | yerlesimler.js | 1324-01-01 | ceneviz → aragon | 221 · 1324-01-01 · Akyazı ve İmralı Adası'nın fethi |
| Ihuatzio | yerlesimler_amerika.js | 1325-01-01 | (yok) → purepecha-imparatorlugu | 1189 · 1325-01-01 · Konuralp'in Bolu yöresini fethi — Mudurnu, Konurapa ve Bolu |
| Moskova | yerlesimler.js | 1325-01-01 | altinorda → moskova | 1189 · 1325-01-01 · Konuralp'in Bolu yöresini fethi — Mudurnu, Konurapa ve Bolu |
| Nijniy Novgorod | yerlesimler.js | 1325-01-01 | altinorda → moskova | 1189 · 1325-01-01 · Konuralp'in Bolu yöresini fethi — Mudurnu, Konurapa ve Bolu |
| Pátzcuaro | yerlesimler_amerika.js | 1325-01-01 | (yok) → purepecha-imparatorlugu | 1189 · 1325-01-01 · Konuralp'in Bolu yöresini fethi — Mudurnu, Konurapa ve Bolu |
| Tenochtitlan (Mexico City) | yerlesimler_amerika.js | 1325-01-01 | (yok) → aztek-imparatorlugu | 1189 · 1325-01-01 · Konuralp'in Bolu yöresini fethi — Mudurnu, Konurapa ve Bolu |
| Karahisâr-ı Sâhib (Afyon) | yerlesimler.js | 1327-01-01 | sahibata → germiyan | 591 · 1327-01-01 · İlk Osmanlı akçesinin basılması |
| Aydos Kalesi | yerlesimler.js | 1329-06-01 | bizans → (yok) | 784 · 1329-06-01 · Pelekanon (Maltepe) Savaşı ve Kocaeli'nin tamamının alınması |
| Elbistan | yerlesimler.js | 1337-01-01 | ilhanli → dulkadir | 4 · 1337-01-01 · İzmit'in fethi |
| Göksun | yerlesimler_anadolu_0914.js | 1337-01-01 | ilhanli → dulkadir | 4 · 1337-01-01 · İzmit'in fethi |
| Maraş | yerlesimler.js | 1337-01-01 | memluk → dulkadir | 4 · 1337-01-01 · İzmit'in fethi |
| Tilimsan | yerlesimler.js | 1337-01-01 | zeyyani → merini | 4 · 1337-01-01 · İzmit'in fethi |
| Darende | yerlesimler_ok110.js | 1338-01-01 | eretna → dulkadir | 662 · 1338-01-01 · Malatya yeniden Memlük hâkimiyetine girdi — Eretnaoğulları idaresinin sonu |
| Gürün | yerlesimler_anadolu_0914.js | 1338-01-01 | eretna → dulkadir | 662 · 1338-01-01 · Malatya yeniden Memlük hâkimiyetine girdi — Eretnaoğulları idaresinin sonu |
| Drama | yerlesimler.js | 1345-01-01 | bizans → sirbistan | 786 · 1345-01-01 · Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Edremit ve Erdek |
| Gevgili (Gevgelija) | yerlesimler_ok107.js | 1345-01-01 | bizans → sirbistan | 786 · 1345-01-01 · Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Edremit ve Erdek |
| Karaferye (Veria) | yerlesimler_ok107.js | 1345-01-01 | bizans → sirbistan | 786 · 1345-01-01 · Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Edremit ve Erdek |
| Kılkış (Avrathisar) | yerlesimler_ok107.js | 1345-01-01 | bizans → sirbistan | 786 · 1345-01-01 · Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Edremit ve Erdek |
| Nevrokop (Gotse Delçev) | yerlesimler.js | 1345-01-01 | bizans → sirbistan | 786 · 1345-01-01 · Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Edremit ve Erdek |
| Petriç | yerlesimler.js | 1345-01-01 | bizans → sirbistan | 786 · 1345-01-01 · Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Edremit ve Erdek |
| Serez | yerlesimler.js | 1345-01-01 | bizans → sirbistan | 786 · 1345-01-01 · Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Edremit ve Erdek |
| Vodina (Edessa) | yerlesimler_ok107.js | 1345-01-01 | bizans → sirbistan | 786 · 1345-01-01 · Karesi Beyliği'nin ilhakı: Balıkesir, Bergama, Biga, Edremit ve Erdek |
| Erzincan | yerlesimler.js | 1348-01-01 | ilhanli → eretna | 103 · 1348-01-01 · Abdülvâdîler (Zeyyânîler) Tilimsan'da Merînî hâkimiyetinden kurtuldu |
| Kelkit | yerlesimler_ek29.js | 1348-01-01 | ilhanli → akkoyunlu | 103 · 1348-01-01 · Abdülvâdîler (Zeyyânîler) Tilimsan'da Merînî hâkimiyetinden kurtuldu |
| Mankup | yerlesimler_ek2.js | 1349-01-01 | bizans → teodoro | 1707 · 1349-01-01 · Mora Despotluğu'nun kuruluşu — Manuel Kantakuzenos Mezistre'de |
| İnkirman (Kalamita) | yerlesimler_ek2.js | 1349-01-01 | bizans → teodoro | 1707 · 1349-01-01 · Mora Despotluğu'nun kuruluşu — Manuel Kantakuzenos Mezistre'de |

## DEVLET-EŞLEŞİR kırılmalar — ilk 50 (tam liste JSON'da: 1898)

| yerleşim | dosya | tarih | eski→yeni sahip | kapatan madde (no · tarih · başlık) |
|---|---|---|---|---|
| Behramkale (Assos) | yerlesimler_ek23.js | 1297-01-01 | bizans → karesi | 505 · 1297-01-01 · Karesi ve Hamîdoğulları beyliklerinin kuruluşu |
| İshaklı | yerlesimler_ek29.js | 1297-01-01 | selcuklu → hamid | 505 · 1297-01-01 · Karesi ve Hamîdoğulları beyliklerinin kuruluşu |
| Bayburt | yerlesimler_anadolu_0914.js | 1335-01-01 | ilhanli → eretna | 510 · 1335-01-01 · Eretna Beyliği'nin kuruluşu — İlhanlı sonrası Orta Anadolu |
| Darende | yerlesimler_ok110.js | 1335-01-01 | ilhanli → eretna | 510 · 1335-01-01 · Eretna Beyliği'nin kuruluşu — İlhanlı sonrası Orta Anadolu |
| Divriği | yerlesimler.js | 1335-01-01 | ilhanli → eretna | 510 · 1335-01-01 · Eretna Beyliği'nin kuruluşu — İlhanlı sonrası Orta Anadolu |
| Gürün | yerlesimler_anadolu_0914.js | 1335-01-01 | ilhanli → eretna | 510 · 1335-01-01 · Eretna Beyliği'nin kuruluşu — İlhanlı sonrası Orta Anadolu |
| Karahisâr-ı Şarkî (Şebinkarahisar) | yerlesimler_ek29.js | 1335-01-01 | ilhanli → eretna | 510 · 1335-01-01 · Eretna Beyliği'nin kuruluşu — İlhanlı sonrası Orta Anadolu |
| Malatya | yerlesimler.js | 1335-01-01 | memluk → eretna | 510 · 1335-01-01 · Eretna Beyliği'nin kuruluşu — İlhanlı sonrası Orta Anadolu |
| Abâdân | yerlesimler.js | 1335-12-01 | ilhanli → lur-i-buzurg | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Ahvaz | yerlesimler.js | 1335-12-01 | ilhanli → lur-i-buzurg | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Bakü | yerlesimler.js | 1335-12-01 | ilhanli → sirvansah | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Bağdat | yerlesimler.js | 1335-12-01 | ilhanli → celayirli | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Behbehân | yerlesimler.js | 1335-12-01 | ilhanli → lur-i-buzurg | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Bem | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Bempûr | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Bender Lengeh | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Bender Rîg | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Bistâm | yerlesimler.js | 1335-12-01 | ilhanli → ilhanli | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Burûcird | yerlesimler.js | 1335-12-01 | ilhanli → ilhanli | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Cehrom | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Câsk | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Cîruft | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Dizfûl | yerlesimler.js | 1335-12-01 | ilhanli → lur-i-buzurg | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Dâmgan | yerlesimler.js | 1335-12-01 | ilhanli → ilhanli | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Dârâb | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Ebrekûh | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Erdekân | yerlesimler.js | 1335-12-01 | ilhanli → incu | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Erdistan | yerlesimler.js | 1335-12-01 | ilhanli → incu | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Ereş | yerlesimler.js | 1335-12-01 | ilhanli → sirvansah | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Esterâbâd (Gürgân) | yerlesimler.js | 1335-12-01 | ilhanli → ilhanli | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Fesâ | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Firûzâbâd | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Gulpâygân | yerlesimler.js | 1335-12-01 | ilhanli → incu | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Havîza | yerlesimler.js | 1335-12-01 | ilhanli → lur-i-buzurg | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Herat | yerlesimler_ek16.js | 1335-12-01 | ilhanli → kert | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Hâş | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Isfahan | yerlesimler.js | 1335-12-01 | ilhanli → incu | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Kabala | yerlesimler.js | 1335-12-01 | ilhanli → sirvansah | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Kazvin | yerlesimler.js | 1335-12-01 | ilhanli → incu | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Kirman | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Kuba | yerlesimler.js | 1335-12-01 | ilhanli → sirvansah | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Kum | yerlesimler.js | 1335-12-01 | ilhanli → incu | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Kâzerûn | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Kâşân | yerlesimler.js | 1335-12-01 | ilhanli → incu | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Luristan | yerlesimler.js | 1335-12-01 | ilhanli → ilhanli | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Lâr | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Mahmudâbâd | yerlesimler.js | 1335-12-01 | ilhanli → sirvansah | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Meşhed | yerlesimler.js | 1335-12-01 | ilhanli → ilhanli | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Mînâb | yerlesimler.js | 1335-12-01 | ilhanli → muzafferi | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |
| Nihâvend | yerlesimler.js | 1335-12-01 | ilhanli → ilhanli | 1361 · 1335-12-01 · İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü |

