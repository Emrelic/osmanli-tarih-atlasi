# ANADOLU BEYLİKLERİ DENETİMİ — 13 Kasım 2026 (UMIT oturumu)

Biçim: PAPALIK-DENETIM-1111. Ağaç: `origin/main`, dal `umit-1113-celiski2`. `py arac/denetle.py` **koşturulmadı → ölçülmedi.**
Kapsam (24 künye): karaman, germiyan, aydin, saruhan, mentese, hamid, candar, dulkadir, ramazanoglu, karesi, eretna, artuklu, cobanogullari, pervane, esrefogullari, inancogullari, sahibata, taceddin, alaiye, teke, haciemir, sebinkarahisar-emirligi, gozleroglu, mutahharten.

## 1. Envanter (ölçüldü)
- Yerleşim dilimi: **258** (bu 24 sahibe ait `s:` dönemleri); 1281-1600 arası **160** (gün × sahip × geçiş) kırılma grubu.
- Kaba eşleme (±30 gün, beylik/Osmanlı/fetih anahtarlı kronoloji maddesi): 115 grup eşleşti, **45 grupta bulunamadı** — çoğu 1337-1338 Dulkadir/Eretna (`-01-01` yıl yer tutucuları), Candar/Çobanoğulları-Kastamonu 1392-1461, Erzincan-Kemah 1401-1410. Süzgeç kaba; Değişmez 2'nin resmî sonucu değildir.
- Künyelerin f/t ve kronoloji maddelerinin çoğu `-01-01` YIL yer tutucusudur (kaynakta gün yok) — bu hata değil, yıl hassasiyetidir.

## 2. TDV karşılaştırması (alt ajan, WebFetch ile TDV maddeleri; ~70 satır)
**Gün düzeyinde EŞLEŞENLER:** Aydınoğulları İzmir'in Haçlılarca alınışı 1344-10-28 · Eşrefoğulları t 1326-10-09 (Demirtaş, Beyşehir) · Tâceddin'in ölümü 1386-10-24 · Teke/Antalya Kıbrıs 1361-08-24 · Ramazanoğulları Mercidâbık 1516-08-24, Ridâniye 1517-01-22 · Saruhan Orhan Bey 1402-08-17 (olaylar_ek5).
**Yıl düzeyinde eşleşen** (≈30 künye/olay): Karaman f 1256, Germiyan 1381/1390, Aydın f 1308/1390, Hamid f 1297, Dulkadir f 1337/1507/t 1522, Ramazan f 1352/1485/t 1608 (rivayet), Karesi f 1297, Eretna f 1335, Artuklu 1232/1409, Çobanoğulları t 1309, Pervane 1277/1322, İnanç 1261/1368, Alâiye 1293/1471 …
**ÇELİŞKİ (ÇELİŞKİ-1113 kuralı uygulandı):**
| Künye/olay | Atlas | TDV | Karar |
|---|---|---|---|
| Karaman: Mehmed Bey Konya'yı alır | 1277-05-13 | `karamanogullari`: 9 Zilhicce 675 / **14 Mayıs 1277** | **1277-05-14'e taşındı** (devletler.js, kronoloji_anadolu.js; atlas günü kaynaksızdı; Sâhib Ata/Altuntaş maddesi ayrı olay, dokunulmadı) |
| Dulkadir: Turnadağ/Ördekli | 1515-06-12 | `dulkadirogullari`: **13 Haziran 1515** (olaylar_ek5 ve künye `tabi` zaten 13) | **1515-06-13'e taşındı** (devletler.js, kronoloji_anadolu.js, yer_yama_anadolu.js yaması) |
**ÇELİŞKİ — ÇÖZÜLMEDİ, EMRE KARARI** (hakemli ikinci kaynak OKUNMADI; veri değişmedi):
1. **Karaman'ın sonu üç yılda:** künye t 1487 ↔ olaylar_ek 1468 «Konya'yı aldı» ↔ TDV 1474 (olaylar_ek5:623 zaten 1474). 1487 Mahmud Bey'in Halep'e kaçışıdır; öneri künye t ve «son» maddesi 1474.
2. Karaman Konya 1468: TDV «Nisan 1468» (atlasta `-01-01`); İbrâhim Bey 1424 ↔ TDV Mehmed'in ölümü 826/1423; Kasım Bey 1471 TDV'de yok.
3. Saruhan t: kronoloji 1410 ↔ künye t 1416-09-01 ↔ TDV «1411'den sonra, 1415'ten önce»; Torlak Kemal 1416 idam. İshak 1385 TDV'de yok (1363 «ulu bey»).
4. Aydın t: künye 1425-06-01 ↔ madde 1425-01-01 ↔ TDV «1425-26 (829)».
5. Teke: Antalya geri alınışı atlas 1373-01-01 ↔ TDV **14 Mayıs 1373** (gün var; atlasta yıl yer tutucu, çok dosyada işli); Teke f 1321 ↔ TDV 1319/1308-1319; Mustafa Bey 1400 ↔ TDV Mart 1400; t 1423 ↔ Ocak 1423 (yıl-ay).
6. Hamid «Teke ayrılışı 1321» TDV'de ayrılış değil sikke olayı; Eşrefoğulları f 1277 ↔ TDV 1299/1300; Candar Eflani 1291 TDV'de yok; Karesi Yahşi 1336 TDV'de yok; Tâceddin t 1427 TDV'de bitiş yılı yok.
7. Karaman 1277-05-13 komşu kayıtları (Sâhib Ata Altuntaş 1277-05-13, kronoloji_cok_once1281_anadolu notu) Karaman gününden «devralınmıştı» — Konya günü taşındı, bu iki kayıt TDV'ye göre yalnız «Mayıs 1277» ay düzeyinde; öneri: «gün komşudan» ibaresini kaldırıp ay beyanı.
Okunmayan künyeler: Hacıemîroğulları (ordu--sehir), Şebinkarahisar/Gözleroğlu (kaynakları künyede beyanlı), Erzincan-Kemah (Mutahharten).

## 2b. ÇÖZÜM (KASA kararı sonrası: hakemli ikinci kaynak aramasıyla; commit sırası bkz. git log)
- **Teke Antalya geri alışı** 1373-01-01 → **1373-05-14** (TDV «Tekeoğulları» gün verir; atlas yıl yer tutucusuydu).
- **Karaman:** üç ayrı olay — 1468 Konya/merkez (TDV Nisan 1468; Kılıç, Erdoğru OTAM 57 2025), 1474 Gedik Ahmed (TDV Kayseri/Karamanoğulları), 1483 Kasım Bey ölümü (Öden KMÜ KAMAM + Özyalvaç NEÜ 2018: iki bağımsız kaynak beylik sonu 1483), 1487 Mahmud Bey Halep'e kaçışı. Künye t 1487 → **1483-01-01**, 1483 «son» ve 1487 «Mahmud Bey kaçışı» ayrı maddeler; 1468 maddesinin gün alanında beyan.
- **Saruhan:** beylik sonu **1410** (Acun, Manisa'daki Türbe Mimarisi + Ceylan CBÜ SBD 11/3 2013 + Art-Sanat 8 2017; TDV «1411-1415 arası», Akyol 1413 tek); künye t 1416-09-01 → **1410-01-01**, 3 yerleşim diliminin bitişi 1415-01-01 → 1410-01-01 (Değişmez 2: aynı gün «son» maddesi). Torlak Kemal 1416 ayrı olay. Orhan'ın 17 Ağustos 1402 günü tek akademik kaynakta («düşünülürse»).
- **Aydın:** 1425-1426 yıl aralığı (Adak 2022, Akın) — künye/madde değişmedi, ic_not'ta beyan. **Menteşe 1424** (üç hakemli kaynak) — Menteşe dilimleri (1425-06-01) TAŞINMADI, açık borç.
- **Kaynaksız başlangıçlar** (ic_not_f beyanı, f yıl düzeyinde kaldı): Hamid 1297 (yalnız TDV «muhtemelen»), Teke 1321 (≤1319, aralık 1308-1319), Eşrefoğulları 1277 (Konya işgali; kuruluş 1299-1300), Candar Eflani 1291 (kesin yıl yok), Karesi Yahşi 1336 (TDV'de yok).
- Hâlâ **TEYİT ÇIKMADI:** Karaman Konya Nisan 1468'in günü (Yıldız 2009 tam metin), Kasım Bey'in ölüm günü, Saruhan 1410'un günü, Aydın 1425/1426 ayrımı.

## 3. Ölçülmedi
- `denetle.py` (Değişmez 2/3/8); 45 «madde yok» grubunun tek tek incelenmesi.
- Hakemli ikinci kaynak (İnalcık, Emecen, Uzunçarşılı, Şikârî, Neşrî, DergiPark) hiçbir satırda okunmadı; çelişkiler yalnız TDV'ye karşıdır. TDV metinleri WebFetch özeti: kritik günler TDV sayfasında gözle teyit edilmeli.
- TDV'de çalışmayan slug'lar (mentese-beyligi, candaroglu-beyligi, dulkadiroglu-beyligi, karesioglu, eretna-beyligi arama sayfasına düştü; doğru slug'lar `mentese`, `candarogullari`, `dulkadirogullari`, `karesiogullari`, `eretnaogullari`).
