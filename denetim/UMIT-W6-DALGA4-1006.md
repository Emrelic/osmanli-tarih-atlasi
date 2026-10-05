# UMIT-W6-DALGA4-1006 — kopya zincir ailesi (üretici + elle yazılmış kopya beyanları)

Görev: UMIT İRTİBAT → UMIT-W6-KAFKAS-1006 (dalga 4) · yalnız ölçüm; diff, veri, commit yok.
Ağaç: `C:\atlas-w6b` (origin/main 3d89e4c4). ⚠️ Talimattaki `git -C C:\atlas …` yerine
dalga 1-3'teki gibi `C:\atlas-umit`ten açıldı (dalga 1 talimatı: "C:\atlas'a DOKUNMA").
Aynı origin/main, ölçüme etkisi yok. `C:\atlas-w6` olduğu gibi duruyor.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
Yalnız evren büyüklüğü ölçüldü: `yerlesimler_sinir_kuzey.js`te 16 kayıt. Betik okunmadı.
- **İŞ 1:** Betik sınır noktalarının HEPSİNİN zincirini en yakın kayıttan türetir; ama bir
  kısmı (hat ötesi yabancı yaka / yalnız 1920+ tbmm kuyruğu) türetmeden kısa yazılmış
  olabilir. Tahmin: **16'nın 12 ± 4'ü** türetilmiş. Mesafe 5–70 km. Kopyalanan kısım:
  1281 → ~1920 gövdesinin tamamı, sınır antlaşması kuyruğu kendi.
- **İŞ 2:** `data/` altında kopya beyanı taşıyan kayıt: **60 ± 40** (birkaç kampanya
  "ankraj X — zincirin birebir aynısı" deseni kullanıyor; Arpaçay'ın kendi kaynağı bile
  "ankraj Revan (67 km) — külliyattaki zincirin birebir aynısı" diyor ⇒ aile sınır
  dosyasından büyük).
- **İŞ 3:** Kopyaların **%10–30'u** kaynak kaydın sonradan düzeltilmiş zincirinden geri
  kalmıştır (kopya donmuş, kaynak yaşadı). Ama "kopya anı" damgası çoğunda yoktur ⇒ fark
  ölçülür, "sonra düzeltildi" hükmü yalnız git geçmişiyle kurulabilir; bir kısmı
  `ölçülemedi` kalır.

## 1. ÖLÇÜM — özet
| | Öngörü | Ölçüm | |
|---|---|---|---|
| İŞ 1: üreticinin türettiği kayıt | 12 ± 4 / 16 | **28 / 28** (sınır_kuzey 16 + sınır_guney 12; betik her kaydı türetir) | ✗ |
| İŞ 2: elle yazılmış kopya beyanlı kayıt | 60 ± 40 | **54** gerçek kopya (30 bütün zincir + 24 pencere) · ayrıca 20 yanlış pozitif · 90 dönem-başı komşu günü (ayrı sınıf) | ✓ |
| İŞ 3: kaynak düzeldi, kopya bayat kaldı | %10–30 | **12 / 82 = %14,6** (6 doğrudan elle · 2 doğrudan üretici · 4 zincirleme üretici) · 2 yön ölçülemedi · 4 kopya ölçülemedi | ✓ |

**Ana bulgu (Kafkas işini doğrudan ilgilendiriyor):** Revan kaydı 30 Eylül'de (17cd2f98)
düzeltildi: 1468 akkoyunlu ve 1917-1920 `transkafkasya` → `ermenistan-dc`. Ondan zincir
alan kopyalar ise eski hâlinde kaldı:
- **Gümrü, Eçmiyadzin** (elle kopya) + **Kliçatak (Suser), Norapat** (üretici, onlardan
  zincirleme): sahte `sovyet-rusya 1917-11-07 → 1920-12-02` penceresini HÂLÂ taşıyor.
  Dalga 1'de 11 noktada bulduğum sınıfın aynısı; 4 nokta daha.
- **Arpaçay, Digor, Iğdır** (elle) + **Küçükperveli, Beri** (üretici, zincirleme):
  1468-04-01 → 1469-01-01 `karakoyunlu` (Revan bugün `akkoyunlu`).

## 2. İŞ 1 — `ARAC-TR1923-YAZ-0914.py` (okundu, KOŞTURULMADI)
### 2.1 Betiğin kuralı (kendi metninden)
- Satır 4-6: "Dönem zinciri: aynı yakada, 1923-10-28 sahibi AYNI olan EN YAKIN mevcut
  kayıttan BİREBİR alınır (s:/d:/v:). `isg:` KOPYALANMAZ … `kur:`/`bit:` KOPYALANMAZ."
- `zincir_birlestir` (85-124): aynı yakadaki kayıt **>40 km VE en yakın kaydın 2 katından
  uzaksa** iki kayıt birleştirilir. T = iki kaydın SON ayrışma günü; T öncesi en yakın
  kayıt (A), T sonrası aynı yakadaki (B). Satır 148-152'deki yorum Arpaçay çiftini
  (Kliçatak ↔ Küçükperveli) bu kuralın sebebi olarak anıyor.
- Satır 135-136: yalnız betiğin KENDİ önceki çıktısını komşu saymaz ("zincirleme
  devralma yasak, §4"). **Kendisi bir kopya olan elle yazılmış kayıtları ELEMEZ** ⇒
  zincirleme devralma 4 kayıtta gerçekleşmiş (§2.3).
- `KOMSU` sözlüğü GEO/ARM/AZE yakası için 1923 sahibini `sovyet-rusya` arıyor.

### 2.2 Kayıtlar — 28 (23 BİREBİR · 5 BİRLEŞİK)
| Dosya:satır | Kayıt | Tür | Kaynak kayıt (km) | Kopyalanan kısım |
|---|---|---|---|---|
| sinir_guney:11 | Qaţţīnah | BİRLEŞİK T=1918-10-26 | Ceylanpınar (4,3) · Rakka (133,4) | T öncesi Ceylanpınar, sonrası Rakka |
| sinir_guney:12 | Ḩīmū | BİRLEŞİK T=1918-10-30 | Nusaybin (5,9) · Malikiye (88,5) | aynı biçim |
| sinir_guney:13 | Jadlā’ | BİRLEŞİK T=1918-10-30 | Akçakale (5,9) · Ayn el-Arab (59,0) | aynı biçim |
| sinir_guney:14 | Mercihamis (Yurtbağı) | BİREBİR | Birecik (18,2) | s/d/v 1281-1923 tamamı |
| sinir_guney:15 | Sincan | BİREBİR | İskenderun (15,6) | tamamı |
| sinir_guney:16 | Cibri (Güçlü) | BİREBİR | Cizre (10,1) | tamamı |
| sinir_guney:17 | Babū | BİRLEŞİK T=1918-10-30 | Nusaybin (24,8) · Malikiye (107,4) | T'de bölünmüş |
| sinir_guney:20 | Kilise | BİREBİR | Çölemerik (Hakkâri) (29,5) | tamamı |
| sinir_guney:21 | Gōrabī | BİRLEŞİK T=1918-11-08 | Şemdinli (27,1) · Rewândiz (55,0) | T'de bölünmüş |
| sinir_guney:22 | Tirwānīsh | BİREBİR | İmâdiye (Amêdî) (11,7) | tamamı |
| sinir_guney:23 | Balıklı | BİREBİR | Şemdinli (Şemdinni) (10,8) | tamamı |
| sinir_guney:24 | Cumai (Birlikköy) | BİREBİR | Silopi (4,4) | tamamı |
| sinir_kuzey:11 | Uluköy (Akçadam) | BİREBİR | Uzunköprü (13,8) | tamamı |
| sinir_kuzey:12 | Stérna | BİREBİR | Orestiada (9,2) | tamamı |
| sinir_kuzey:13 | Távri | BİREBİR | Ferecik (11,6) | tamamı |
| sinir_kuzey:14 | Küfkaynapınarı (Azatlı) | BİREBİR | Havsa (11,5) | tamamı |
| sinir_kuzey:15 | Karpuzlu (Yenikarpuzlu) | BİREBİR | İpsala (11,9) | tamamı |
| sinir_kuzey:18 | Malak Dervent (Lalkovo) | BİREBİR | Elhova (16,1) | tamamı |
| sinir_kuzey:19 | Umur Fakih (Fakia) | BİREBİR | Elhova (42,3) | tamamı |
| sinir_kuzey:22 | Zazalo | BİREBİR | Ahıska (19,5) | tamamı |
| sinir_kuzey:23 | Murvaneti | BİREBİR | Batum (9,1) | tamamı |
| sinir_kuzey:24 | Ts’q’altbila | BİREBİR | Ahıska (11,9) | tamamı |
| sinir_kuzey:25 | Saylıca | BİREBİR | Şavşat (10,3) | tamamı |
| sinir_kuzey:26 | Makhalak’auri | BİREBİR | Hulo (Acara) (12,4) | tamamı |
| sinir_kuzey:29 | Norapat | BİREBİR | Eçmiyadzin (22,2) 🔁 | tamamı (kaynak da kopya) |
| sinir_kuzey:30 | Beri | BİREBİR | Iğdır (17,5) 🔁 | tamamı (kaynak da kopya) |
| sinir_kuzey:31 | Kliçatak (Suser) | BİREBİR | Gümrü (37,4) 🔁 | tamamı (kaynak da kopya) |
| sinir_kuzey:32 | Küçükperveli | BİREBİR | Arpaçay (Akyaka) (30,9) 🔁 | tamamı (kaynak da kopya) |

Mesafe: 4,3 – 133,4 km (BİREBİR'de en çok 42,3).
🔁 = **zincirleme devralma** (`§4` yasak): kaynak kaydın kendisi Revan'dan "ankraj" kopyası
(§3). Betik bunu göremez, çünkü yalnız `neden` alanı "TR-1923-SINIR" ile başlayanları eler.
⚠️ Bu 4 kaydın dönemlerinde sonradan `kaynak:` alanları var ("gün komşudan: Kars/Revan"),
oysa dosya başlığı "🔴 ELLE DÜZENLEME — yeniden üret" diyor. Dosya üretimden sonra elle
düzenlenmiş; betik yeniden koşulursa bu alanlar SİLİNİR.
📌 `yerlesimler_sinir_dogu.js` bu betiğin ürünü DEĞİL (başlık: "REHBER 1923", elle
yazılmış). 6 kaydı İŞ 2'de sayıldı. Başlıktaki "girdi.py'ye HENÜZ BAĞLI DEĞİL" notu
bayat: dosya `GIRDI_DOSYALARI` içinde.

## 3. İŞ 2 — kopya beyanı taşıyan kayıtlar (kaynak dosyada, paket/üretilmiş HARİÇ)
### 3.1 Yöntem
`girdi.GIRDI_DOSYALARI` (canlı girdi; `paket_*`, `bolgeler.js` ve öteki üretilmiş
dosyalar bu listede yok ⇒ çift sayım yok). Kayıt ve dönem düzeyindeki `kaynak`/`not`/
`neden` metinlerinde şu desenler arandı: birebir · deseni · kaydından · en yakın kayıt ·
aynı zincir/zincirin aynısı · ankraj · gün komşudan. 193 kayıt tuttu, hepsinin bağlamı
OKUNDU ve elle sınıflandı:
| Kova | Kayıt |
|---|---|
| Üretici (§2) | 28 |
| **Elle — bütün zincir kopyası** | **30** |
| **Elle — pencere/kısmî kopya** | **24** |
| Elle — eskiden kopyaydı, sonra değiştirildi | 1 (Şeyhrumi: "~~Çaldıran'dan BİREBİR~~ … PAKET-KRON4 ZİNCİRİ DEĞİŞTİRDİ") |
| Yanlış pozitif ("birebir alıntı" / "birebir eşleşti" / "aynı kusur") | 20 |
| Dönem başına `§4` komşu günü ("gün komşudan: …") — kopya değil, beyanlı gün devri | 90 |

Yanlış pozitifler: Vidin · Yaş · Çernovitz · Sohum · Urmiye · Kuveyt · Doha · Darfur ·
Karahisâr-ı Sâhib · Santa Cecília · Ji'an · Delgo · Abrî · İsmail · Mîyandoab · Beyan
K4.5 B62.5 · Mersin · Ahar · Gürün · Sero.

### 3.2 Elle yazılmış kopyalar — 54
Biçim: dosya:satır · kayıt · kopyalandığı kayıt · kopyalanan pencere · İŞ 3 sonucu.

**Bütün zincir (30)**
| dosya:satır | kayıt | ← kaynak | pencere | İŞ 3 |
|---|---|---|---|---|
| a78_avrupa:61 | Linz | Freistadt | tamamı | AYNI |
| a78_avrupa:70 | Třeboň | České Budějovice | tamamı | AYNI |
| a78_avrupa:92 | Feldkirch | Bregenz | tamamı | AYNI |
| a78_avrupa:105 | Innsbruck | Landeck | tamamı | AYNI |
| a78_avrupa:136 | Annemasse | Thonon | tamamı | AYNI |
| a78_avrupa:144/147/150 | Bastogne · Neufchâteau · Virton | Arlon | tamamı | AYNI ×3 |
| a78_avrupa:155 | Wiltz | Lüksemburg | tamamı | AYNI |
| afrika:992 | Nyala | El-Fâşir | s/v tamamı | AYNI |
| anadolu_0914:93 | Reşadiye (İskefsir) | Ordu (Bayramlı) | tamamı | AYNI |
| ek13:178 | Blagoveşçensk | Albazin | tamamı | AYNI |
| ek25:46 | Ceylanpınar | Mardin (ankraj 75 km) | tamamı | FARK 250 g (1516-08-24→1517-05-01), yön belirsiz (aynı commit) |
| ek26:87 | Gümrü (Aleksandropol) | Revan (ankraj 86 km) | tamamı | 🔴 BAYAT 1633 g |
| ek26:91 | Eçmiyadzin | Revan (ankraj 19 km) | tamamı | 🔴 BAYAT 1633 g |
| ek26:134 | Özalp (Saray) | Van (ankraj 55 km) | tamamı | AYNI |
| ek26:142 | Yüksekova (Gever) | Çölemerik (ankraj 48 km) | tamamı | AYNI |
| ek29:488 | Yagodina | Kragujevac (28,4 km) | tamamı | AYNI |
| ok101:103 | Hayber | Medine | tamamı | AYNI |
| ok107:122 | Midyat | Mardin (40 km) | tamamı | AYNI |
| ok107:171 | Bedir | Yenbu (82 km) | tamamı | AYNI |
| ok107:185 | Râbiğ | Cidde (141 km) | tamamı | AYNI |
| ok107:205 | Taraz | Çimkent (159 km) | tamamı | AYNI |
| ok107:225 | Sayram | Çimkent (16 km) | tamamı | AYNI |
| p0037:61 | Lovozero | Kola | tamamı | AYNI |
| p0043libya:83 | Sîva | dört kardeş vaha (Dâhile ile ölçüldü) | tamamı | AYNI |
| sibirya2:76 | Zaural Başkurt toprakları | Tümen (Çimgi-Tura) | tamamı | AYNI |
| sinir_dogu:76 | Bacirge (Esendere) | Yüksekova (Gever) (31,4 km) 🔁 | tamamı | AYNI (kaynak da kopya) |
| h2_afrika:976 | Radom | "Darfur kümesi, ötekilerle" | tamamı | ölçülemedi (kaynak adı yok) |
| yerlesimler.js:2070 | Uneyze | "Kasîm'in ikinci kasabası; aynı zincir" | tamamı | ölçülemedi (kaynak adı yok) |

**Pencere / kısmî (24)**
| dosya:satır | kayıt | ← kaynak | pencere | İŞ 3 |
|---|---|---|---|---|
| yerlesimler.js:247 | Bitlis | Van (ankraj) | 1281→~1508 (akkoyunlu) | AYNI |
| ek26:48 | Arpaçay (Akyaka) | Revan (ankraj 67 km) | 1281→~1508 | 🔴 BAYAT 275 g |
| ek26:52 | Digor | Revan | 1281→~1508 | 🔴 BAYAT 275 g |
| ek26:56 | Iğdır | Revan (46 km) | 1281→~1508 | 🔴 BAYAT 275 g |
| yerlesimler.js:2284 | Divriği | Sivas/Kayseri | 1281→1381 | AYNI |
| ok110:59 | Darende | Malatya | 1281→1338 | FARK 7188 g, kopya sonra değişti |
| serhat:140 | Şehirköy (Pirot) | Niş (59 km) | Fetret 1410-1412 | AYNI |
| sinir_dogu:136 | Şeyh Salû-yi Ulyâ | Mâku (erken) + Kotur | 1548→1639 (Kotur) | AYNI |
| yerlesimler.js:1831 | Culfa | Nahçıvan / Ordubad | 1585→1603 | AYNI |
| yerlesimler.js:1576/1577 | Bolayır · Maydos | Gelibolu | bizans 1366→1376 | AYNI ×2 |
| ek29:479 | İshakçı | Silistre/Köstence | 1402→1420 | AYNI |
| kdmacar:114 | Debrecen | Varad | v: 1526 pencereleri | AYNI |
| yerlesimler.js:615/616/618 | Soçi · Tuapse · Maykop | Anapa | 1783→1829 d:OSMANLI | FARK 17.057 g ×3, kopya sonra değişti (bugün `kirim`+`v:`) |
| p0037:47 | Kahul | İsmail | 1456→1538 v: | AYNI |
| p0037:73 | **Lublin** | **Varşova** | 1917→1918 kuyruğu | 🔴 BAYAT 679 g |
| p0037:91 | Białystok | Varşova | 1918-11-11 | AYNI |
| p0037:79 / 112 | Chełm · Kovel | "külliyat deseni (Lvov gibi)" | 1281→1340 | ölçülemedi ×2 |
| serhat:191 | Çatalca | Silivri (19,1 km) | 1453-05-29 günü | AYNI |
| yerlesimler.js:329 | Dimetoka | Sofulu (12 km) | 1913-05-30→1920 | FARK 13 g, kopya sonra değişti |
| yerlesimler.js:1395 | Çehrin | Kiev | 1362 günü | AYNI |

### 3.3 Düşmüş kayıtlar (yer_yama_* yorum satırları) — ayrı kova
Yorum satırlarında desen: 20 dosyada 55 satır. Çoğu dosya düzeyinde açıklama. Düşmüş
KAYIT olarak tanınanlar `yer_yama_kafkas.js`te: 254 (Nahçıvan/Şerur deseni) · 284 (Gümrü
ile "birebir aynı kusur") · 328 (Digor) · 347 (Iğdır). Sınıflandırılmadı.
📌 `yer_yama_ok110.js:135-142` "ankraj" yönteminin DOĞDUĞU yer: "her nokta KENDİ
BÖLGESİNİN ANKRAJ KAYDINA hizalanıyor … (ankrajlardan birebir alındı)". Ek26'daki Kafkas
ankraj kopyaları bu yamanın ürünü.

## 4. İŞ 3 — kaynak düzeldi, kopya bayat kaldı
### 4.1 Yöntem
Kopyanın ve kaynağın BUGÜNKÜ zincirleri (`girdi.yukle()`, d > v > s önceliği) beyan
penceresinde gün gün karşılaştırıldı. Yön: iki kaydın satırına `git blame --line-porcelain`
(son değişim tarihi). ⚠️ Blame bütün SATIRIN son değişimini verir, yalnız kopyalanan
pencereninkini değil; satır başka bir alan için de değişmiş olabilir ⇒ yön SEZGİSEL.
Kaynak zinciri bir `yer_yama_*` dosyasından geliyorsa kaynak satırının blame'i yanıltır.

### 4.2 Sonuç
| Sınıf | Üretici (28) | Elle (54) | Kayıtlar |
|---|---|---|---|
| AYNI | 24 | 38 | — |
| 🔴 KAYNAK SONRA DÜZELDİ, KOPYA BAYAT (doğrudan) | 2 | 6 | Malak Dervent, Umur Fakih (Elhova 9.21'de; fark 1369→1371 `bulgaristan` ↔ OSMANLI, 998 g) · Arpaçay, Digor, Iğdır, Gümrü, Eçmiyadzin (Revan 9.30'da) · Lublin (Varşova 10.05'te) |
| 🔴 ZİNCİRLEME BAYAT (kaynağı AYNI ama kaynak kendisi bayat) | 4 | — | Küçükperveli ← Arpaçay · Beri ← Iğdır · Kliçatak ← Gümrü · Norapat ← Eçmiyadzin |
| KOPYA SONRA DEĞİŞTİ (kopya kendi yolunu tuttu; büyük olasılıkla bilinçli düzeltme) | — | 5 | Darende · Soçi · Tuapse · Maykop · Dimetoka |
| Fark var, yön ölçülemedi | 2 | 1 | Stérna, Küfkaynapınarı (1361-01-01→05-05 OSMANLI ↔ `bizans`; kaynak satırı üretimden ÖNCE değişmiş, fark büyük olasılıkla yama katmanından) · Ceylanpınar (aynı commit) |
| Kopya ölçülemedi (kaynak adı yok) | — | 4 | Radom · Uneyze · Chełm · Kovel |
⇒ **Bayat: 12 / 82 = %14,6** (doğrudan 8 + zincirleme 4).

### 4.3 Bayat kayıtların farkları (gün)
- **Gümrü · Eçmiyadzin** (→ zincirleme **Kliçatak · Norapat**): 1468-04-01→1469-01-01
  `karakoyunlu` (Revan: `akkoyunlu`) · 1635-08-08→1636-04-01 `safevi` (Revan: OSMANLI) ·
  **1917-11-07→1918-05-28 `sovyet-rusya` (Revan: `transkafkasya`) · 1918-05-28→1920-12-02
  `sovyet-rusya` (Revan: `ermenistan-demokratik-cumhuriyeti`)**.
- **Arpaçay · Digor · Iğdır** (→ zincirleme **Küçükperveli · Beri**): 1468-04-01→1469-01-01
  `karakoyunlu` (Revan: `akkoyunlu`). (Bunların 1917-1921 kuyruğu Revan'dan alınmamış,
  dalga 1 ayrıca ölçtü.)
- **Lublin**: 1917-01-01→1918-11-11 `kongre-polonyasi`/`rusya-gecici-hukumet`/`sovyet-rusya`
  (Varşova bugün: `almanya`). ⚠️ Kopyayı Varşova'ya eşitlemek de DOĞRU olmayabilir:
  1915-1918'de Lublin Avusturya-Macaristan işgal bölgesiydi (Varşova Alman). Kopya
  tazelenmez, ayrıca kaynaklanır (genel bilgi, kaynak aranmadı).
- **Malak Dervent · Umur Fakih**: 1369-01-01→1371-09-26 `bulgaristan` (Elhova bugün: OSMANLI).

## 5. Bulunamayan / ölçülemeyen
- Kopya ANINDAKİ kaynak zinciri (git'te kaynak satırının o günkü hâli) çıkarılmadı. "Bayat"
  hükmü bugünkü fark + blame sırasına dayanıyor; blame satır düzeyinde.
- Radom, Uneyze, Chełm, Kovel: beyan bir kaynak kaydı ADIYLA anmıyor.
- `yer_yama_*` yorum kovası sayıldı, sınıflanmadı.

## 6. Öneri (hüküm koordinatörde)
1. Üretici, kendisi kopya olan kayıtları da komşu saymamalı (`kaynak`/`neden`'de
   "ankraj/birebir/kaydından" beyanı taşıyanları ele). Bugün 4 zincirleme kayıt üretti.
2. Kopya beyanını makine-okunur yap (ör. `zincir_kaynagi:"Revan"` + pencere). O zaman
   kaynak değişince kopyalar bir denetimle bulunur; bugün serbest metin ayrıştırılıyor.
3. Kafkas kampanyası (KF-1/KF-5) Gümrü · Eçmiyadzin · Kliçatak · Norapat'ı da kapsamalı:
   aynı sahte `sovyet-rusya` penceresi bu dört kayıtta.

## 7. Ağaç
`C:\atlas-w6b`: değişiklik yok (yalnız okundu). Analiz betikleri geçici çalışma
alanında (`d4.py`, `d4b.py`, `d4c.py`, `d4_ortak.py`); talimat gereği projeye yazılmadı.
