# KRON-AMERIKA-1112 — Maya · Aztek · İnka: kronoloji × harita × kaynak denetimi

Tarih: 12 Kasım 2026 · Kapsam: salt okuma; veri dosyalarına DOKUNULMADI. Ölçüm ağacı: `claude/relaxed-gagarin-4ca80e` (origin/main 148bc9f26 tabanı).
Yöntem: `devletler.js` (gömülü kronoloji) + `yerlesimler*.js` (tüm dosyalar, node ile yüklenip taranarak) + `kronoloji_cok_*` / `kronoloji_ispanya.js` tarandı; Uzun Sayım günleri `py` ile yeniden hesaplandı; dış teyit WebSearch (özet düzeyi — sayfa gövdesi okunmadı, aşağıda belirtilir).

## 1. Envanter (ölçüldü)
- Künye: `aztek-imparatorlugu` (1428→1521-08-13), `inka-imparatorlugu` (1438→1572-09-24), `maya-sehir-devletleri` (1000→1697-03-13), `mayapan-birligi` (1100→1450), `maya-klasik` (250→900), `maya-orta-preklasik`, `caracol-maya`, `copan`, `palenque-baak`, `chichen-itza`, `toltek`, `teotihuacan`, `kuzco-krallik` (1200→1438), + And/Mezoamerika komşuları (chimu, wari, tiwanaku, moche, nazca, chavin, caral, olmek, zapotek*, purepecha).
- Yerleşim zinciri: Aztek 7 (Tenochtitlan, Texcoco, Tlacopan, Xochimilco, Chalco, Tepeaca, Chapultepec), İnka 13 (Cusco, Quito, Cajamarca, Tumbes, Ollantaytambo, Vilcabamba, Huánuco Pampa, Vilcashuamán, Chan Chan, Túcume, Hatun Colla, Chucuito…), Maya Post-Klasik 10 (Mayapán, Chichén Itzá, Maní, Sotuta, Utatlán, Iximché, Zaculeu, Nojpetén, Potonchán, Acalán).
- Künye-içi kronoloji: Aztek 4 madde (hiçbirinde `kaynak:`), İnka 5 (3'ünde), Maya-ŞD 4 (1'inde). Çok-künyeli dosyalarda yalnız Utatlán 1524-03-07 + Zaculeu 1525 + İspanya genel maddeleri (Tenochtitlan 1521-08-13, Cuzco 1533-11-15) var.

## 2. Takvim / gün denetimi
| Madde | Atlas | Ölçüm | Hüküm |
|---|---|---|---|
| Tenochtitlan'ın düşüşü | 1521-08-13 | 1582 öncesi → Jülyen kaynak günü yazılır | kural gereği doğru; kaynak YOK (bkz. B1) |
| Cortés Tenochtitlan'a girdi | 1519-11-08 | aynı | doğru kabul; kaynaksız |
| Pizarro Cajamarca | 1532-11-16 | Jülyen | doğru kabul; kaynaksız |
| Cusco'nun alınışı | 1533-11-15 | Jülyen | doğru kabul |
| Túpac Amaru idamı | 1572-09-24 | Jülyen (Julien 2017) | kaynaklı |
| Nojpetén | 1697-03-13 | 1582 sonrası → Gregoryen; İspanya 1582'de geçti, çevirme gerekmez | doğru (Jones 1998; kitap özeti 13 Mart diyor — sayfa okunmadı) |
| Caracol 553-04-14, K'an II 658-07-19 | Jülyen | LC 9.5.19.1.2 / 9.11.5.15.9 + **GMT 584283** ile yeniden hesap: Jülyen 553-04-14 ✔, 658-07-19 ✔ | tutarlı; **korelasyon sabiti maddede beyan edilmemiş** |
| **Siyaj K'ak' (Teotihuacan maddesi)** | **0378-01-16** | LC 8.17.1.4.12: GMT 584283 → Jülyen **378-01-13** (Greg. 01-14); GMT 584285 → Jülyen 01-15 (Greg. **01-16**) | **SORUN:** 01-16 yalnız GMT+2 ve *Gregoryen* proleptik okumada çıkar; öbür Maya günleri Jülyen/584283. Antik-Jülyen kuralıyla uyumsuz (B3) |
| maya-klasik'teki aynı olay | 0378-01-01 | yıl hassasiyeti | aynı olay iki künyede iki gün (01-01 ↔ 01-16) |
| Mérida/Tiho | 1542-01-01 "GÜN BİLİNMİYOR" | Mérida'nın kuruluşu **6 Ocak 1542** (Chamberlain 1947 atıflı; yucatantoday, poresto, encyclopedia.com özetleri) | gün biliniyor; madde "yer kolu" günlü olabilir (B5) |
| Atahualpa idamı | 1533-07-26 | History Today/El Peruano/EBSCO: 26 Temmuz; History.com + Gale: 29 Ağustos | çelişki künyede beyanlı; akademik üçüncü kaynak (Hemming 1970) **okunamadı** → beyanlı kalsın |

Mezoamerika/And yerli takvim (Tzolk'in, Xiuhpohualli, İnka) günü atlasta hiçbir yerde ham yazılmamış; hepsi Batı gününe çevrilmiş ya da yıl hassasiyetinde. İhlal yok.

## 3. Bulgular (şiddet sırasıyla)

**B1 — Künye kaynakları kuralı karşılamıyor (üç ana künye).**
- `aztek-imparatorlugu` ve `maya-sehir-devletleri`: `kaynak:"bulunamadı — … dayanak: standart akademik kaynak"` — kaynak değil, itiraf. 4 Aztek maddesinin hiçbiri kaynaklı; 1428 ve 1502 yıl-hassasiyetli ama `ic_not` beyanı yok.
- `inka-imparatorlugu`: `kaynak:"amerika"` — anlamsız tek kelime.
- `maya-sehir-devletleri.ic_not_f` dayanağı Britannica; öteki Amerika künyelerinde "Britannica dayanak olamaz, değiştirildi" kararı uygulanmışken burada uygulanmamış.
- Dış teyit (özet): Triple Alliance 1428 (çok kaynak, İtzcoatl 1427/1428–1440 salınımı), II. Moctezuma 1502 (tüm özetler uyumlu). Akademik künye adayları: Hassig, *Aztec Warfare* (1988) ve *Mexico and the Spanish Conquest* (1994) — sayfa bakılmadı; Smith, *The Aztecs*. Yıl-teyitli, gün yok → `ic_not`: "[yalnız yıl teyitli; gün teyitsiz]".

**B2 — Hayalet devlet: Cusco 1281→1438 `inka-imparatorlugu`.** `yerlesimler_amerika.js:470` — künye f=1438 iken Cusco'nun 1281–1438 dilimi `inka-imparatorlugu`; ömür dışı. Doğru künye zaten var: `kuzco-krallik` (1200→1438). Bütün dilim `kuzco-krallik` olmalı (ya da 1200→1438 tek dilim; 1281 yalnız atlas ufku). Boya sonucu: Cusco o devirde yanlış devlet renginde.

**B3 — Siyaj K'ak' günü** (tablo yukarıda): `kronoloji` Teotihuacan 0378-01-16. Öneri: Jülyen + GMT 584283 ile **0378-01-13** yaz, `ic_not`ta LC 8.17.1.4.12 ve korelasyonu (584283; 584285 olsaydı 15 Ocak) beyan et; maya-klasik'in 0378-01-01 maddesini aynı güne çek ya da yıl hassasiyetinde bırakıp "gün: Teotihuacan maddesinde" yaz. Caracol/K'an II maddelerine de "GMT 584283, Jülyen" beyanı eklenmeli.

**B4 — Mayapán zinciri künye sınırı yapay.** Mayapán: 1100→1281 `mayapan-birligi`, 1281→1441 `maya-sehir-devletleri`. 1281 sadece atlas ufku; aynı polity'nin künyesi ufukta değişiyor. Ayrıca:
- `maya-sehir-devletleri` kronoloji 1200 "Mayapán Birliği hâkimiyet kurdu" ↔ `mayapan-birligi` f=1100 (Kennett vd. 2022, "en az 1100") — **iç çelişki**; 1200 maddesi 1100'e çekilmeli ya da künye devri açıklanmalı.
- Mayapán dilimi 1441'de biter, `mayapan-birligi.t` 1450; Kennett: çöküş 1441–1461 aralığı. 1441, Landa/Katun hesabına dayanır (yaklaşık, ±); künye-içi madde (1441-01-01) kaynaksız. Öneri: Mayapán dilimini `mayapan-birligi` ile 1441'e uzat (1281 kesmesini kaldır); `ic_not`: "1441–1461 aralığı, uç Landa geleneği; yıl hassasiyeti".
- `maya-klasik.t`=900 ↔ `maya-sehir-devletleri.f`=1000: 100 yıllık künyesiz aralık (üstte "KUŞAK UCU" beyanı var, ama aralık haritada Chichén için BOŞLUK/`chichen-itza` ile örtülüyor). Çelişki beyanlı; kapanmadı.
- `chichen-itza.t`=1200 ↔ `kronoloji_cok_once1281_amerika2` "Chichén Itzá çöküşü 1000–1100" (Kennett vd.) — aynı atlasta iki ayrı bitiş. Chichén 1200→1281 `__BOSLUK__`: Kennett'e göre 1100'den sonra Mayapán öne çıkıyor; boşluk merdiveni basamak ⑤ (abi merkez Mayapán) denenebilir.

**B5 — Gün bilinen yerde yıl yazılı.** Tiho/Mérida 6 Ocak 1542 (yukarıda). Maní 1542-01-01 dilim sonu da aynı olaydan türüyor; Xiu'nun teslimi Mérida'dan sonra (Chamberlain; sayfa bakılmadı) — ayrı gün aranmalı. Zaculeu 1525 (gün yok, kaynak Lovell&Lutz; ok). Acalán 1530-01-01: Cortés Honduras seferi (1525) Acalán'dan geçti; 1530'un dayanağı yok (kaynak sayfası açılamadı) → doğrulanmadı.

**B6 — İnka künye t / ardıl.** `inka-imparatorlugu.t`=1572-09-24 (Túpac Amaru idamı); oysa Cusco 1533-11-15'te İspanya'ya geçiyor, Vilcabamba zinciri 1572-06-24'te kapanıyor. Künye 92 gün hiçbir yerleşimde kullanılmıyor, 1533–1572 "İnka devleti" adı altındaki tek yer Vilcabamba. CLAUDE.md sınıflaması: ardıl yapı → **Neo-İnka (Vilcabamba) künyesi** (1537/1539→1572-06-24) ve `inka-imparatorlugu.t`=1533-11-15 (Cusco'nun alınışı) önerilir. Vilcabamba 1539 dilimi `kaynak:` olarak **Huamanga'nın kuruluşunu** gösteriyor (yer olayı ≠ yerleşim tanıklığı; metin "BEYANLI" demiş ama Vilcabamba'nın 1539'da İnka sığınağı olduğunu doğrulamıyor); Hemming s. 396-410 yorum satırında var. Ollantaytambo 1537-07-01 dilim ucu: yorumda "Ocak 1537 muharebesi" — 1 Temmuz'un dayanağı belirsiz (gün uydurma riski) → kaynak aransın.

**B7 — İnka başlangıcı 1438 tartışmalı (beyan eksik).** 1438 Rowe (1945) / Cabello Balboa 1586 geleneğine dayanır. Radyokarbon: genişleme birkaç on yıl önce (≈1400 civarı), Machu Picchu en az ~1420 (Covey 2006; Ogburn; Cambridge Core Radiocarbon/LAA özetleri). Künye ve Cusco zinciri 1438'de sabit; `ic_not` yok. Öneri: f=1438 korunur (EB-INCA dayanaklı) ama `ic_not`ta "geleneksel kronoloji; radyokarbon on yıllarca erken" beyanı. Bu çelişkide üçüncü bağımsız kaynak: yukarıdaki iki çalışma özetten okundu, tam metin okunmadı → beyanlı kalsın.

**B8 — Aztek zinciri.** Texcoco 1521-08-13'e dek Aztek: Texcoco, Cortés girişinde (Aralık 1520/Ocak 1521) İspanyol müttefikine geçti; Tlacopan, Xochimilco da kuşatma sırasında düştü — 13 Ağustos yalnız Tenochtitlan için doğru. Kaynakla ölçülmedi (araştırma açık) ama büyük olasılıkla Değişmez 2 testini geçse de (±30 gün madde yok) gerçekle uyumsuz. Tenochtitlan `kur` 1325: geleneksel (Mexica kaynakları, yıl tartışmalı) → beyan şart. Sahne1108 Chapultepec/Tenochtitlan satırı `KAYNAK OKUNMADI/teyit bekliyor` — kapanmamış.

## 4. Temiz çıkanlar
- Tüm tarihler proleptik-Gregoryen karışması yok; 1582 öncesi günler Jülyen, Nojpetén 1697 İspanya'da Gregoryen — kuralla uyumlu.
- Utatlán 1524-03-07, Iximché 1524-07-25, Potonchán 1519-03-25 (Hassig 1994 atıflı; kaynak metni yerleşimde mevcut) — çelişki yok.
- Caracol, Teotihuacan, Tiwanaku, Moche, Wari, Chavín künyeleri çift kaynaklı ve `ic_not` beyanlı.

## 5. Ölçemediğim
- Hassig/Smith/Hemming/Jones/Chamberlain gövdesi (özet dışında) okunmadı; TDV bu konuyu kapsamıyor.
- Aztek ittifak üyesi şehirlerin (Texcoco, Tlacopan, Xochimilco) gerçek düşüş günleri.
- Harita sonucu (renk) — HAVVA koşusu şart, ölçülmedi. `denetle*.py` bu işte yasak olduğu için çalıştırılmadı.

## Karar gereken (önerimle)
1. **B2 Cusco hayaleti** — 1281→1438 dilimini `kuzco-krallik`e çevir (acil, tek satır). *Öneri: evet, ilk iş.*
2. **B6 Neo-İnka künyesi** — `inka-imparatorlugu.t`→1533-11-15, Vilcabamba için yeni künye (1539→1572-06-24; Hemming 1970/1993). *Öneri: evet; künye `harita:` boyası BOYALAR'a da ister (tuz dosyası: renkler.py) → Emre'nin tuz-push onayı gerekir.*
3. **B3 Siyaj K'ak'** — 0378-01-13 Jülyen (GMT 584283) + beyan. *Öneri: evet.*
4. **B1 künye kaynakları** — Aztek/Maya-ŞD/İnka `kaynak:` alanlarını Hassig/Smith/Rowe-Julien-D'Altroy ile yaz; Britannica'yı sök. *Öneri: evet; araştırma oturumu sayfaları okuyarak yapsın.*
5. **B4 Mayapán** — dilimi `mayapan-birligi` ile 1441'e uzat, 1200 maddesini 1100'e çek. *Öneri: evet, motor-bağımsız veri düzeltmesi.*
6. **B5/B8** — Mérida günü 6 Ocak 1542 (yer kolu), Aztek ittifak şehirlerinin düşüşü için ayrı araştırma. *Öneri: B5 evet; B8 ayrı iş.*
7. **Atahualpa günü (26 Tem ↔ 29 Ağu)** — akademik üçüncü kaynak okunamadı. *Öneri: beyanlı kalsın.*
