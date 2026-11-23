# BOŞLUK DOĞRULAMA — Roma İmparatorluğu, MÖ 26 (astronomik -0025) · 23 Kasım 2026

Görev: haritadaki boş (sahipsiz) yerler kaynağa göre kime aitti? Pilot: Roma, MÖ 26 (`-0025-06-01`).
Motor dosyalarına (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) dokunulmadı.

## 1. Ne ölçtüm (VERİDEN; harita render sorgusundan DEĞİL)

Yöntem: `data/yerlesimler*.js` 130 dosya / 5650 yerleşim node vm'de yüklendi; her yerleşimin MÖ 26'daki sahibi
`d/v/s/isg` dönemlerinden **sayısal** tarih karşılaştırmasıyla bulundu (negatif yıllı ISO dizgesi metin olarak karşılaştırılmaz).
Ölçüm yeri: bu worktree (`origin/main` + `11d59ff12` tabanı, 23 Kasım).

| Ölçü | Sayı |
|---|---|
| Çevre kutusu (enlem 20–52, boylam −10–46) yerleşimi | 1988 |
| Bunlardan MÖ 26'da `roma-imp` | 333 |
| MÖ 26'da sahipsiz (hiç dönemi yok) | 1614 (çoğu o devirde var olmayan ortaçağ/Osmanlı yeri) |
| MÖ 26'da `__BOSLUK__` | 24 (dünya geneli 39) |
| **Roma'ya ait bir yerleşime ≤100 km, sahipsiz** | **727** (Anadolu-Levant 215, Balkan-Yunan 243, İtalya-Galya-Alp 179, Mısır-Levant 62, İberya 25, Afrika 3) |

Önemli: 727'nin tamamı "boşluk" değildir; hangilerinin o devirde var olduğu yerleşim yerleşim kaynakla sınanmadı
(ölçülemedi — iş çok büyük). Bu rapor **eyalet/bölge düzeyinde** hüküm verir ve bölgedeki anahtar şehirleri sınar.
Ayrıca ters yön ölçüldü: atlas **fazla** Roma'ya yazmış mı? (Aşağıda "yanlış sahipli" sütunu.)

**Kaynak okuma durumu (dürüst):** okunanlar Cassius Dio 48/49/51/53/54, Strabon 3/4/12/14/16/17, Res Gestae 26-28 (Thayer/LacusCurtius, Livius.org),
araç özetiyle (ham sayfa görülmedi). **Okunmayanlar:** TDV (ilgili maddeler aranmadı/okunmadı), Cambridge Ancient History X, OCD, Mitchell, Roller,
DergiPark. Pleiades kimliklerinin çoğu bot engeli yüzünden doğrulanamadı. Bu yüzden aşağıdaki "güven" sütunu temkinlidir.

## 2. Bölge × tür × cevap tablosu

Boşluk türü: 1 devlet-içi/arası · 2 eksklav · 3 koridor · 4 iki devlet arası · 5 deniz–ana kara şeridi.
a) var olması gereken ama haritada olmayan yerleşim? · b) kaynakta kime ait? · c) aralıkta başka devlet? · d) ana karaya katılmalı mı?

| Bölge | Tür | a (eksik yerleşim) | b (MÖ 26 sahibi, kaynak) | c (başka devlet) | d (katılım) | Güven |
|---|---|---|---|---|---|---|
| **Kyrenaika** (Kirene/Beyzâ, Merc, Tulmeyse; Derne yok-Darnis) | 2/5 | Darnis, Barke, Ptolemais Pleiades kimliği bulunamadı | **Doğrudan Roma** (Creta et Cyrenaica; Apion vasiyeti MÖ 96; eyalet yılı Livius MÖ 78 / ikincil 74-67 çelişkili) | yok | **Evet**: veri düzeltildi (3 yerleşim) | eyalette Roma: kesin; kuruluş yılı: belirsiz |
| **Mısır / Memphis** | 1/2 | **Memphis (Mısır) hiç yok** (yalnız ABD Memphis'i); Delta/Fayyum noktaları | Doğrudan Roma, prefect (Dio 51.17.1; RG 27) | Kûş, Aswan hattında MÖ 25 saldırısı | Memphis eklenmeli (yeni yerleşim, motor etkisi → koşu sonrası) | Roma: kesin; Aswan tarihi: olası |
| **Mauretania** (Cezayir, Blida, Medea, Fas, Miknes, Tanca) | 4/5 | antik karşılıklar (Iol, Icosium, Volubilis, Tingi) Pleiades okundu; MÖ 26'da iskân okunmadı | Bocchus II MÖ 33'te ölünce krallık kimseye verilmedi, eyaletlere yazıldı (Dio 49.43.7); **Juba II MÖ 25'te** tahta çıktı. Yani MÖ 26'da **bağlı kral YOK, Roma hâkimiyeti**; hangi makam yönetti okunmadı | yok | **Beyanlı yaklaşıklık olarak Roma, ama sert yazma**: "Roma hâkimiyeti (kral yok)" — tek metin Dio 49.43.7 | olası |
| **Numidia** (Cirta, Mîle, Sikikde; atlasta ✓ Roma) | 1 | — | Africa Nova MÖ 46'dan beri Roma; AMA Dio 51.15.6 + 53.26.2, Juba II'nin "babasının krallığını" MÖ 25'e dek tuttuğunu düşündürür (çıkarım, Dio'da "Numidia" kelimesi yok) | Juba II (bağlı?) | **Dokunma** — atlas Roma diyor, çelişki açık; hakem: Roller/CAH okunmalı | belirsiz |
| **Trablus (Tripolitania)** | 5 | Oea, Sabratha, Leptis | Africa eyaleti içinde; Leptis "civitas libera et immunis" (Livius) | yok | Kayıt yok; MÖ 26 statüsü okunmadı | olası |
| **Kartaca** | 1 | **Çift kayıt**: `Kartaca (Carthage)` Roma'da, `Karthago` sahipsiz (3 km içinde) | Colonia Iulia Concordia Karthago var (Strabon 17.3.15, RG 28); kuruluş yılı 44/29 çelişkili | yok | Mükerrer birleştirme (motor etkisi) — öneri | var: kesin |
| **Isparta, Burdur, Eğirdir, Uluborlu, Yalvaç** (Pisidia) | 1 | var olmalı (Baris, Antiocheia Pisidiae…) | **Amyntas'ın (Galatia) bağlı krallığı**, MÖ 25'te ölünce eyalet (Dio 53.26.3; Strabon 12.6'ya göre Derbe, Isauralar, Antiocheia, Apollonias, Likaonya onundu). Doğrudan metin yok → "olası" | Amyntas (bağlı kral) | **KATMA** — doğrudan Roma yazılmaz; bağlı krallık ayrı yazılır | olası |
| **Konya, Antalya** (atlasta Roma) | 1 | — | **Yanlış sahipli olabilir**: Likaonya/Pamfilya Amyntas'ın; Strabon Konya için Polemon anar, tarihsiz | Amyntas | Roma'dan çıkarma önerisi; kaynak yetersiz → **dokunmadım**, borç | belirsiz |
| **Denizli, Muğla, Dinar** (Asia) | 1 | Laodikeia, Karya… | Asia eyaleti MÖ 129 (TDV Anadolu; atlasta Manisa/Aydın/İzmir zincirinde okunmuş) — Denizli için doğrudan metin okunmadı | yok | Katılabilir: **ABİ MERKEZ Efes** kalıbı (zaten kullanılıyor) | olası |
| **Kilikya (Adana, Misis, Tarsus ✓)** | 1/3 | Kilikya Pedias | Roma (MÖ 64); Trakeia Amyntas/Arkhelaos'ta (tarih okunmadı) | Amyntas | Pedias katılabilir, Trakeia katılmaz | olası |
| **Akşehir (`__BOSLUK__`)** | 1 | Philomelion | Amyntas bölgesi (olası) | Amyntas | `__BOSLUK__` → bağlı krallık beyanı | olası |
| **Makedonya** (Pella, Aigai, Yenice-i Vardar, Karaferye) | 1 | Pella'da koloni MÖ 30 civarı (45-30 çelişkili); Aigai/Giannitsa/Drama'nın MÖ 26'da var olduğu doğrulanamadı | **Doğrudan Roma**, senato eyaleti (Dio 53.12) | yok | **Pella → Roma** (eyalet kaydı); Aigai/Giannitsa için yerleşim var mı sorusu açık (4. basamak) | eyalet: kesin; şehir: olası |
| **Akhaia / Sparta** | 1 | — | Senato eyaleti; **Sparta özgür şehir** (Strabon 8); Argos/Tegea ayrı statü okunmadı | yok | Sparta: eyaletin içinde özgür şehir — "Roma'ya bağlı özerk" beyanıyla | olası |
| **Trakya / Filibe (`__BOSLUK__`)** | 4 | Philippopolis | **Odrys krallığı, Roma'ya bağlı kral** (Dio 51.25; MÖ 26 için kral/sınır belirsiz); Roma kenti MS 45 | Odrys | **KATMA (Roma'ya)** — bağlı krallık; ayrı devlet kimliği yoksa `__BOSLUK__` kalsın | olası |
| **Kuzey Bulgaristan / Dobruca** (atlasta Roma: Vidin, Varna, Silistre, Köstence, Lofça, Balçık, Hırsova, Tutrakan, Mangalia — 9) | 1 | — | **Roma doğrudan DEĞİL**: Moesia eyaleti MS 6 civarı; MÖ 29-28'de yalnız Crassus seferi (Dio 51.25) | Odrys/Getai | **Atlas fazla Roma'ya vermiş olabilir** — çıkarma önerisi | olası |
| **Kuzey İspanya** (atlasta Roma: León, Santander, A Coruña, Pamplona, Bayonne… 10 içinde) | 1/4 | — | **Fethedilmemiş**: Kantabria/Asturias savaşı MÖ 29-19, Augustus MÖ 26-25'te Tarraco'da (Dio 53.25) | bağımsız kabileler | **Roma'dan çıkarma önerisi**; boşluk gerçek boşluk (Ⓑ doldurmasın) | kesin |
| **Brittany/Normandiya** (Rennes, Nantes, Brest, Quimper, Vannes) | 1 | — | Galya Augustus'un eyaleti (Dio 53.12.5); Armorica fethi Caesar'la; kuruluş-organizasyon yılı okunmadı | yok | Roma kalsın | olası |
| **Alpler: Salassi, Raetia, Noricum** | 4 | — | Salassi MÖ 26'da bağımsız/isyan, MÖ 25 Varro (Dio 53.25); Raetia MÖ 15 civarı; Noricum bağlı krallık (tam metin okunmadı) | Salassi, Noricum | Roma'ya KATMA (gerçek boşluk, bağımsız) | olası |
| **Po ovası** (Milano, Verona, Padova, Ravenna, Rimini) | 1 | Pleiades: Verona 383816, Patavium 393473, Ravenna 393480, Ariminum 393379 | Cisalpina İtalya'ya katıldı (MÖ 42 civarı; Dio 48.12.5 bağlamı "olası") — MÖ 26'da Roma doğrudan | yok | **Evet, Roma** | olası (yıl), Roma: kesin |
| **Sicilya, Sardinya, Korsika** | 5 | — | Sardinya senato eyaleti (Dio 53.12.4); Sicilya/Korsika tam okunmadı | yok | Sardinya Roma | olası |

## 3. Sorular (e): Ⓑ dolgusu için sonuç

Ayrıntı: `denetim/KOSU41-ISTEK-BOSLUK-KURALI-1123.md` ek bölümü (dal `emrelic-23-kosu41-istek`). Özet: Ⓑ **her boşluğu sahiplendirmesin**:
- sahipsiz toprak **sınıf-A (kaynakta doğrudan hâkimiyet)**: Ⓑ ana karaya katsın, beyanlı.
- **sınıf-V (bağlı krallık / vassal)**: Ⓑ doğrudan Roma boyamasın; ayrı gösterilsin (v: himaye kademesi).
- **sınıf-G (gerçek boşluk: fethedilmemiş/bağımsız)**: Ⓑ DOLDURMASIN (kuzey İspanya, Salassi, Garamantes).

## 4. Yapılan veri düzeltmesi

Yalnız **kaynağı okunmuş** bir hüküm: Kyrenaika Roma eyaletidir. `Beyzâ (Kirene)`, `Merc`, `Tulmeyse` yerleşimlerine
`roma-imp` dönemi `-0026-01-16 → 0395-01-17` eklendi (ABİ MERKEZ: Kyrene, beyanlı yaklaşıklık). Öncesi (Roma Cumhuriyeti, yıl çelişkisi) ve
sonrası (395 sonrası, ayrı iş) yazılmadı. Derne (Darnis) için antik kayıt bulunamadı, dokunulmadı.

Diğerleri (Amyntas bölgesi, Dobruca/Moesia, kuzey İspanya, Konya/Antalya, Memphis, Kartaca mükerrer) **doğrudan metin okunmadığı** ya da yeni yerleşim/motor etkisi gerektirdiği için
veriye YAZILMADI; `BORC-DEFTERI.md` satırları ve bu raporun açık listesindedir.

## 5. Ne bulamadım / ölçülemedi

1. 727 adaydan hangilerinin MÖ 26'da var olduğu tek tek ölçülmedi (iş büyüklüğü).
2. TDV, CAH X, OCD, Mitchell, Roller, DergiPark okunmadı (araç yalnız Thayer/Livius özeti verdi). Pleiades kimlikleri çoğunlukla doğrulanmadı.
3. Numidia MÖ 26: Roma mı Juba II mi — çelişki açık.
4. Mauretania MÖ 33-25: hangi Roma makamı yönetti — okunmadı.
5. Konya, Antalya, Isparta, Burdur, Eğirdir, Akşehir: Amyntas'a ait olduğu **doğrudan metinle** okunmadı.
6. Sicilya, Korsika, Normandiya, Helvetii, Cottius, Noricum ilhak tarihi okunmadı.
7. Tek devlet içi boşlukların **piksel/alan** ölçümü yok; render sorgusu panel gizliyken güvenilmez.

## 6. Ne istiyorum

- Emre: bağlı krallıklar (Amyntas, Odrys, Herodes, Arkhelaos, Polemon) için **ayrı devlet kimliği** açılsın mı? Şu an yoksa bu yerler Roma'ya yazılamaz, sahipsiz kalır.
- Araştırma devamı: CAH X / Mitchell / Roller okuması (EMRELİC ya da araştırma makinesi); sonra Amyntas bölgesi ve Moesia düzeltmesi.
- Motor işi (koşu sonrası): Ⓑ kuralı + Memphis/Kartaca mükerrer birleştirme.
