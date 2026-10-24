# RAPOR — DOĞU 500-1281 / AMERIKA-2

Ölçüm yeri: `C:\atlas\.claude\worktrees\dogu` (worktree-dogu, git'e dokunulmadı). `node denetim/dogu/dogrula.js amerika2` → çıkış 0
(`{"kunye":3,"kron":21,"yer":13,"s":13,"bosluk":0,"toprak":5,"kuyruk_gerekli":13,"yama":2,"yama_dilim":5,"devir_eslesen":3,"devir_eslesmeyen":0,"ihlal":0,"uyari":0}`).
Üretim betiği scratchpad'de (`uret.py`); çıktılar yalnız bu dizinde.

## ① Ölçülenler
- Girdi 17 polity. **Künye/kronoloji/yerleşim işlenen: 13** · **hiç yazılmayan: 4** (`cocle-panama`, `chorotega`, `manteno`, `spiro` — bkz. ②).
- **Künye: 3** (`coba, cacaxtla, tilantongo-mixtek`; her birinde kuruluş + son iskeleti, toplam 6 künye içi madde).
- **Kronoloji: 21 madde** = 16 anlatı + 5 sınır. Dağılım (künye içi iskelet hariç): wari 2 anlatı + 2 sınır, ata-pueblo 1, tairona 2, xochicalco 1, el-tajin 2, chichen-itza 2 anlatı + 2 sınır, uxmal 1, dos-pilas 2, coba 3 (+2 künye içi), sican 1 sınır; cacaxtla 0 ve tilantongo 0 (yalnız künye iskeleti 2'şer), ek-balam 0. Hedef 6-8 madde HİÇBİR polity'de tutturulamadı (kaynak yetersizliği, ②).
- **Yeni yerleşim: 13** (Huari, Cerro Baúl, Batán Grande, Ciudad Perdida, Xochicalco, Pueblo Bonito, Cobá, Cacaxtla, Tilantongo, Uxmal, El Tajín, Dos Pilas, Ek' Balam); **13 `s:` dilimi**, `__BOSLUK__` dilimi yeni yerleşimlerde 0 · **hepsi 13'ünde `kuyruk_gerekli`** (zincir 2000-12-31'e erişmiyor; 1281 sonrası kaynak aranmadı). Hepsi çift tanıklı koordinat (Wikidata P625 + OSM Nominatim; Cobá/Tilantongo'da GeoNames da); Pleiades hiçbirinde kapsamadı. Mükerrer taraması (8 km): Batán Grande dışında yok; atlasta Túcume 5,67 km (ayrı yer, yama yazıldı).
- **Yama: 2 mevcut yerleşim, 5 dilim** (Chichén Itzá 3: BOŞLUK 0500→0800, chichen-itza →1200, BOŞLUK →1281; Túcume 2: BOŞLUK 0500→1100, sican →1281). İkisinde de son `t` = mevcut zincir başı (1281) → `devam_gerekli` yok. **Yama `__BOSLUK__` dilimi: 3.**
- Sınır maddesi sınaması: 3 `s:` kırılması (yama), 3 eşleşen, eksik 0 (±30 gün).
- Okunan kaynaklar (her alıntı o oturumda açıldı): Moseley ve ark. 2005 PNAS (Cerro Baúl), Inomata ve ark. 2017 PNAS (Ceibal/Dos Pilas), Gronemeyer 2004 Wayeb Notes 14 (Cobá yazıtları; pdftotext), ICANH Teyuna rehberi (Giraldo 2010 atfı; pdftotext), NPS Chaco, UNESCO WHC 939/631/483/791, Pohl FAMSI Mixtec Codices, Brittenham 2015 (yalnız yayınevi tanıtımı), Encyclopedia.com "Sican".
- WebFetch ile okunanlar (Moseley, Inomata, NPS) küçük model özetiyle döndü; alıntılar kaynak metinde ayrıca bir kez daha sınanmadı — `kaynak:`ta "WebFetch ile okundu" diye işaretli.

## ② Bulamadığım / doğrulayamadığım
- **Yazılmayan polity'ler:** `cocle-panama` (Sitio Conte için yalnız popüler/ikincil özet: 450-900; birincil Penn/Lothrop/Hearne açılmadı), `chorotega` (göç ≈800 yalnız Archaeology magazine/gezi sitesi özeti; Fernández-León Bagaces/Sapoa-Ometepe evreleri atıf; makale açılmadı), `manteno` (850/800/600 başlangıç çelişkisi, Cambridge Ligüiqui makalesi açılmadı), `spiro` (atlasta yerleşim + 4 kronoloji zaten var; yeni bir şey eklenmedi). Neden: zaman; kaynak öncelik sırası (TDV hariç alanlar) tam gezilemedi.
- **Martin & Grube 2008** (Dos Pilas, Ek' Balam, Uxmal, Chichén için ms1 künyelerinin ana kaynağı): archive.org ödünç kitap, tam metin 401/403 verdi → bu oturumda AÇILAMADI. Kalan 4 ms1 polity'nin (dos-pilas, ek-balam, chichen-itza, uxmal) künye tarihleri bu yüzden "atıf; açılmadı" diye işaretlendi.
- **Tilantongo/Mixtek:** Lord 8 Deer'in 1063/1097/1115 tarihleri ve Tilantongo'nun 692 kuruluşu yalnız Vikipedi özetlerinde; birincil/akademik kaynakta okunamadı → YAZILMADI (Pohl FAMSI tarihsiz).
- **Cacaxtla:** Brittenham'ın radyokarbon ekindeki tarihler (kalibre aralıklar) okunamadı; yalnız yayınevi tanıtımındaki 650-950. Cobá 569/573 (Ix Ch'ak Ch'een) yalnız haber; kullanılmadı.
- **Wari:** Huari'nin kendi kuruluş/terk tarihi hiçbir okunan kaynakta yok; Moseley yalnız imparatorluk (600-1000) ve Cerro Baúl kolonisi. Nash & Williams 2017 (Cerro Baúl ~1050) arama özetinden, makale açılmadı.
- **Sicán/Túcume:** Encyclopedia.com maddesinin yazarı sayfada doğrulanmadı; ikinci bağımsız akademik kaynak YOK (Shimada yayınları, Moseley 2001 açılmadı). Túcume öncesi (1100 altı) sahip/varlık bulunamadı.
- **Tairona:** Ciudad Perdida'nın tek ICANH rehberinden (Giraldo 2010) 650 tarihi var; ham 14C aralıkları (Giraldo) okunmadı.
- **El Tajín 1200:** UNESCO'nun "Aztek egemenliği" gerekçesi anakronik (Aztek hegemonyası 15. yy); maddede beyan edildi.
- Mesa Verde/Cliff Palace dendrokronolojisi (NPS sayfası yıl vermedi) ve Pueblo Bonito ağaç halkası (Windes & Ford 1996) birincil okunamadı → yazılmadı.

## ③ Kararlar / öneriler
### Künye düzeltme önerileri (KUNYE_MAIN_DA / MS1 — dosyaya yazılmadı)
- `wari` main f=0600/**t=0800**: Moseley 2005 «two empires held sway ... from AD 600 to 1000», «Wari and Tiwanaku entered decline ca. A.D. 1000» → **t=1000** (girdi taslağı da 1000); Huari yerleşimi 600-1000 yazıldı (künye aşımı bu düzeltmeyle kapanır).
- `tairona` f=0800: ICANH (Giraldo 2010) en eski konut alanları ≈650 → f≤0650 (Ciudad Perdida zinciri 0650'den yazıldı).
- `xochicalco` f=0700: UNESCO 650-900 → f=0650 (Hirth 700; çelişki beyanlı; Xochicalco zinciri 0650'den).
- `el-tajin` (ms1) t=1100 ↔ UNESCO 800-1200 (1200 sonrası terk); zincir künye t=1100'de kesildi.
- `uxmal` (ms1) f=0800 ↔ UNESCO İspanyolca özeti 700; zincir 0800'den.
- `sican` (main): Túcume yaması Late Sicán'ı 1100-1281 Sicán yazdı; atlasın mevcut Túcume zinciri 1281-1375'i `chimu-krallik`, 1375-1470'i yine `chimu-krallik` gösteriyor — Chimú fethi ≈1375 ise 1281-1375 `sican` olmalı (Túcume zincir başı düzeltmesi önerisi).
- `ata-pueblo` t=1300 (künye) Pueblo Bonito zincirine taşındı; Chaco'nun kendi terki NPS'ye göre 1100-1200'lerde "shifted" → yerleşim bazında kısaltma gerekebilir.

### YAMA GEREKLİ listesi (`yama_amerika2.js`; ilk dilim f=0500-01-01 UFUK işareti)
| yerleşim | eklenecek önek | devam_gerekli |
|---|---|---|
| Chichén Itzá | __BOSLUK__ 0500→0800, chichen-itza →1200, __BOSLUK__ →1281 | yok (son t = mevcut zincir başı 1281) |
| Túcume | __BOSLUK__ 0500→1100, sican →1281 | yok |

### Boya ihtiyacı (`arac/renkler.py` BOYALAR'da YOK — grep ile doğrulandı; BOYALAR'da olan: `ata-pueblo`)
- Yeni künye 3: `coba, cacaxtla, tilantongo-mixtek`.
- Main/MS1'de var, BOYALAR'da yok ve zincirde kullanıldı: `wari, sican, tairona, xochicalco, dos-pilas-petexbatun, el-tajin, ek-balam, chichen-itza, uxmal` (toplam yeni `d:` kimliği boyasız: 12).
- Yeni `bolge`/`tur` değeri yok (orta-amerika, guney-amerika, kuzey-amerika; tur: sehir-devleti, krallik). Kronoloji `tur` sözlüğünde `siyaset` kullanıldı.

### Çelişki beyanları (maddelerde `ic_not`)
UNESCO Xochicalco 650 ↔ Hirth 700; El Tajín UNESCO 800-1200 ↔ Diehl 100-1100; Uxmal UNESCO ES 700 / EN 8.-10. yy / Chilam Balam 10. yy sonu ↔ M&G 800; Wari Cerro Baúl ≈1000 (Moseley) ↔ ≈1050 (Nash & Williams, açılmadı); Chichén kuruluşu 415-35/455 gelenek, tarihsiz.

### Takvim
Cobá Uzun Sayım günleri (613-05-12, 653-01-31, 682-08-30, 758-05-20, 780-12-02) kaynağın verdiği Batı tarihleri aynen; hangi takvim olduğu kaynakta belirtilmiyor → `ic_not_takvim` yazıldı, çeviri yapılmadı.

### Arkeoloji alanları
`kaynak_turu:"arkeoloji"` + `etiket:["arkeoloji"]` 15 maddede (10 anlatı + 3 sınır + 2 künye içi); `aralik` 5 maddede (hepsi `donem-toplami`/`yerlesim-suresi` → orta nokta ALINMADI, t = en eski uç); tek değerli ("ca. 800", "alrededor del 650", "shortly before 600") maddelerde `aralik` yazılmadı. `py arac/arkeoloji_denetle.py` çalıştırılmadı.
