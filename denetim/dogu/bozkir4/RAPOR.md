# BOZKIR-4 raporu

Doğrulama: `node denetim/dogu/dogrula.js bozkir4` → çıkış 0, ihlal 0, uyarı 0 (10 künye, 37 kronoloji = 35 anlatı + 2 sınır, 2 yama, 0 yeni yerleşim).
Üretici: `denetim/dogu/bozkir4/_uret.py` (çıktılar elle düzenlenmedi). Okunan kaynak metinleri `_ham/` altında (TDV, Procopius Dewing, Pseudo-Zacharias, Wikisource Wei/Jiu Tang/Sui shu).

## ① Ölçülen
- Girdi polity: 20 = **10 künye yazıldı** (merkit, naiman, tatar, ongut, oguz-yabgu, usrusana-afsin, utigur, sabir, onogur, yanqi-karashahr) + **8 pencere dışı** (loulan-shanshan, massaget, murong-xianbei, saka-konfederasyonu, sarmat, wusun, yuezhi, yuwen-xianbei) + **2 yazılamadı** (tiele-gaoche, yarkand-suoju; ② 'de).
- Kronoloji: **35 anlatı + 2 sınır maddesi**. Polity başına anlatı maddesi: merkit 4, naiman 5, tatar 3, ongut 1, oguz-yabgu 5, usrusana-afsin 5, utigur 4, sabir 3, onogur 2, yanqi-karashahr 3 (+ Yanqi için 1 sınır, Cizzah için 1 sınır). 6-8 hedefi hiçbirinde tutmadı (kaynak sınırı; Ongut yalnız 1). Gün hassasiyetli madde: 0 (anlatı); sınır: 1 ay hassasiyetli (Yanqi 0644-11-05, Çin takvimi çevrimi `cin2/_cal.py` ile, ic_not_takvim yazılı), 1 yıl hassasiyetli (Cizzah 0893-01-01).
- Yerleşim: yeni 0 (çift tanıklı koordinat bulunamadı), mükerrer atlanan 0; **yama 2** (Karaşar (Yanqi): 1 dilim; Cizzah: 1 dilim); `__BOSLUK__` dilimi 0; çift tanıklı koordinat 0 (yama yerleşimleri mevcut).
- Kaynak kullanımı: TDV md. 7 (Cengiz Han, Tatarlar, Karahıtaylar, Oğuzlar, Üsrûşene, Bulgar, Hazarlar) bu oturumda tam metin okundu; Procopius (Dewing, Loeb c. I ve V) ve Pseudo-Zacharias (Hamilton-Brooks 1899, s. 328) archive.org tam metinden; Jiu Tang 3/198, Wei shu 102/103, Sui shu 84 Wikisource.

## ② Bulamadığım / doğrulayamadığım
- **TDV'de ayrı madde YOK (arandı, arama sayfası «madde başlığı 0» verdi):** Merkit/Merkitler, Nayman/Naymanlar, Öngüt/Ongut, Sabir, Utigur, Onogur, Yarkend, Karaşar. Bunlar yalnız Cengiz Han, Karahıtaylar, Tatarlar, Bulgar, İpek Yolu, Hoten md.'lerinde geçer; künyeler bu md.'lerden yazıldı.
- **Kuruluş tarihleri:** 10 künyenin 10'unda f KURULUŞ DEĞİL, ilk tarihli tanık ya da ufuk işaretidir (her `ic_not`ta yazılı). Hiçbir polity'nin kuruluş günü kaynakta bulunamadı.
- Moğolların Gizli Tarihi (Merkit/Nayman/Tatar ayrıntıları, Tokta'nın ölümü 1208 mi 1197 mi), Priscus (Onogur 463), Menander Protector (Sandilch, Utigur-Avar; Blockley 1985 OCR'sız alınamadı), Beishi/Tongdian (Tiele-Gaoche sonu), Xin Tang 221 (Yarkand), Moğol-Yuan kaynakları: açılmadı → yazılmadı.
- TDV iç çelişkileri `ic_not`ta: Oğuz Yabgu (1002'de yabgu var ↔ 1003'ten önce yıkılmış), Nayman (1206'da Tayang Han hâlâ anılır ↔ 1204 yenilgi), Tokta-Beki'nin ölümü (TDV 1197; ayrı md. 1208 kış).
- Girdi f/t doğrulanamayanlar: ongut t=1211 (kaynak yok; t=1206 beyanlı çıkarım), onogur t=0679/başkent Phanagoria (kaynak yok; t=0635 Büyük Bulgaristan beyanlı), yanqi t=0648 (Jiu Tang 3: 644 → düzeltildi), tiele-gaoche t=0581 (kaynak bulunamadı).
- **Yazılamayan polity'ler (2):**
  - `tiele-gaoche`: Wei shu 103 Gaoche'nin 487 (太和十一年 Fufuluo bağımsızlığı) ve 492 olaylarını verir; Sui shu 84 Tiele'yi «並無君長，分屬東、西兩突厥» (hükümdarsız, Doğu/Batı Türk'e bağlı boylar) diye anlatır → tek devlet değil boy adıdır, bitiş tarihi kaynaklanamadı. Künye f=0487/t=? yazılmadı. (Karar: siyasî birim mi — bozkir2 raporu da boy adı olarak işaretlemişti.)
  - `yarkand-suoju`: pencere içi tek tanık Wei shu 102 «渠莎國，居故莎車城，在子合西北» (tarihsiz); Tang dönemi Yarkand (Xin Tang 221, Xuanzang) ve bitiş tarihi okunmadı → künye/kronoloji yazılmadı. Atlas «Yarkent (Şaçe)» yerleşiminin zinciri 1281'de `cagatay` ile başlar; 0500→1281 yaması BU işte yok.
- Koordinat çift tanığı bulunamadı → yeni yerleşim yazılamayanlar: Yenikent (Oğuz başkenti: Nominatim «Yangikent» yalnız modern Özbek köylerini döndü), Bunjikat/Bencikes (Üsrûşana başkenti: TDV konum vermiyor, antik özdeşlik kaynaklanmadı), Yuanqu (Yanqi başkenti: atlas Karaşar noktası beyanlı yaklaşıklık), Ura-Tepe (TDV yalnız geç dönemi anar).

## ③ Kararlar
**Pencere dışı (f..t tümüyle MS 500'den önce; künye/kronoloji/yerleşim yazılmadı): 8** — `loulan-shanshan` (t=0445), `massaget` (f/t null, MÖ), `murong-xianbei` (t=0336), `saka-konfederasyonu` (t=-0138), `sarmat` (t=0399), `wusun` (t=0449), `yuezhi` (t=0030), `yuwen-xianbei` (t=0344).

**YAMA GEREKLİ (yama_bozkir4.js):**
- Karaşar (Yanqi): `yanqi-karashahr` 0500-01-01 → 0644-11-05 (ay). `devam_gerekli: 0644-11-05 → 1281-01-01` (Tang/Tibet/Koço Uygur/Karahıtay dilimleri başka iş). Sınır maddesi (Tang kazanır, ±0 gün) `kronoloji_sinir_dogu_bozkir4.js`'te.
- Cizzah: `usrusana-afsin` 0680-01-01 → 0893-01-01 (ilk dilim f=0680 ilk tarihli tanık; 0500→0680 başka iş). `devam_gerekli: 0893-01-01 → 1281-01-01` (Sâmânî 893'ten itibaren). Beyanlı yaklaşıklık: TDV Dîzek↔Cîzek özdeşliğini açıkça kurmaz. Sınır maddesi (Sâmânî kazanır) yazıldı.

**Künye düzeltme önerileri / çakışmalar:**
1. `onogur` ↔ atlasta `buyuk-bulgaristan` (0635-0680): MÜKERRER/öncül riski — Emre karar versin; öneri: Onogur'u `buyuk-bulgaristan`'ın öncülü sayıp künyesi 0555-0635 kalsın, ya da birleştirilsin.
2. `utigur` ↔ ORTAAV_D `utigur` (BOZKIR_RAPOR2 notu): çift künye olmasın; ORTAAV kaydı varsa o esas, bu iptal.
3. `yanqi-karashahr` t: girdi 0648 → kaynak 0644-11-05 (Jiu Tang 3).
4. Merkit/Naiman/Tatar/Ongut/Sabir/Utigur/Onogur'un hiçbirinin **merkez şehri yoktur**: haritada boyanmaz (petek motoru nokta ister). Boya gerekmeyebilir ama devletler.js'ye girerse künye kronolojisi için yeterlidir.

**Boya ihtiyacı** (`arac/renkler.py BOYALAR`'da 10 künyenin 10'u YOK, grep: 0 eşleşme): merkit, naiman, tatar, ongut, oguz-yabgu, usrusana-afsin, utigur, sabir, onogur, yanqi-karashahr. Gerçek boya gereken ikisi: **usrusana-afsin** (Cizzah yaması) ve **yanqi-karashahr** (Karaşar yaması); kalan 8'in yerleşimi yok (boyanmaz).

**Yeni tür/bölge:** `tur: konfederasyon` (merkit, tatar, utigur, sabir, onogur; VERI-YAPISI tür listesinde yok, bozkir1/girdi de kullanıyor) — eklenmesi önerilir. `tur: devlet` (oguz-yabgu; girdideki `yabgu-devleti` yerine listedeki `devlet`), `tur: beylik` (usrusana-afsin; girdide `emirlik` idi). Bölge: hepsi kapalı sözlükten.

**Emre kararı bekleyen:** (a) Merkit t=1209 (TDV «1208 kışı»; tek gün seçimi) mi 1208 mi; (b) Oğuz Yabgu f=0775 (muhtemelen geliş) mi 766 mü; (c) Onogur ayrı polity mi; (d) Tiele/Gaoche ve Yarkand için ek işçi (Beishi, Xin Tang 221, Hulsewé).
