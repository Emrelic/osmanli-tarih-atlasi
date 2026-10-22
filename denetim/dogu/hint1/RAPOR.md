# RAPOR — DOĞU 500-1281 / HINT-1

Ölçüm yeri: `C:\atlas\.claude\worktrees\dogu` (worktree-dogu, git'e dokunulmadı). `node denetim/dogu/dogrula.js hint1` → çıkış 0
(`{"kunye":9,"kron":84,"yer":9,"s":14,"bosluk":1,"toprak":10,"ihlal":0,"uyari":0}`).
Ana kaynak: R. C. Majumdar (ed.), *HCIP* III-V (archive.org tam metin; her alıntı normalleştirilmiş metinde **birebir sınandı**, satır sonu tireleri ve OCR "¬" boşlukları dışında),
TDV *Sind* (Azmi Özcan), *Kâbil* (Ahmet Kavas), *Saffâr, Ya‘kūb b. Leys* (22.10.2026'da okundu). Vikipedi dayanak yapılmadı.

## ① Ölçülenler
- Girdi 19 polity: **17 işlendi** (9 KUNYE_YOK + 8 KUNYE_MS1_DALINDA), **2 pencere dışı** (aşağıda).
- **Künye: 9** (`anuradhapura, kalabhra, kadamba-banavasi, licchavi-nepal, maitraka, alkhon, dogu-ganga, vishnukundina, guhila-mevar`); her birinde kuruluş + son iskeleti. MS1 dalındaki 8 polity için künye yazılmadı.
- **Kronoloji: 84 madde** = 74 anlatı (`kronoloji_cok`) + 10 sınır (`kronoloji_sinir`, Değişmez 2 evreni). `taraflar`ında geçme sayısı (bir madde birden çok tarafta sayılır): dogu-ganga 11, emevi 9, cac-sind 8, turk-sahi 7, maukhari 6, maitraka 6, guhila-mevar 6, alkhon 5, kadamba-banavasi 5, licchavi-nepal 5, sonraki-gupta 5, anuradhapura 4, gauda-shashanka 4, vishnukundina 4, chamba 3, sailodbhava 2, kalabhra 2, khadga 1 (+ MS1 polity'lerinin kuruluş/son maddeleri başka dalda).
  Hedef 6-8 madde yalnız dogu-ganga, turk-sahi, cac-sind, maitraka, maukhari, guhila, alkhon'da tutturuldu; geri kalanlar 1-5 madde (kaynak yetersizliği, aşağıda).
- **Yeni yerleşim: 9** (Valabhi, Banavasi, Anuradhapura, Aror (Alor), Chamba, Kalinganagara (Mukhalingam), Denduluru (Lendulura), Karnasuvarna (Rangamati), Kaveripattinam (Puhar)); **14 `s:` dilimi**; `__BOSLUK__` dilimi **2** (Kalinganagara 1083-1090; Kâbil yaması 0500-0665).
- **Yama: 4 mevcut yerleşim, 9 dilim** (Kannauc 4, Katmandu 1, Kâbil 3, Siyâlkot 1); hepsinde `devam_gerekli` var (zincir 1281'e ulaşmıyor).
- Koordinat: yeni 9 yerleşimin hepsi ≥2 bağımsız tanıklı (Pleiades/GeoNames/Wikidata P625/OSM Nominatim), 5 km içinde; yama 4 yerleşimin mevcut atlas noktası GeoNames/Wikidata/Pleiades ile ≤2 km uyumlu.
- Sınır maddesi sınaması: 10 `s:` kırılması (yeni yerleşim 5 + yama 5), 10 sınır maddesi, **eksik 0** (±30 gün).
- Takvim: hicrî tarihlerin hepsi miladî yılla kesişimin ilk gününe çevrildi, `ic_not_takvim` yazıldı (aritmetik sivil takvim, ±2 gün): 44/664 → 0664-04-04, 78/697 → 0697-03-30, 93/712 → 0712-01-01, 95/714 → 0714-01-01, 179/795 → 0795-03-27, 247/861 → 0861-03-17, 255/869 → 0869-01-01. Kesin gün yalnız TDV'nin verdiği 10 Ramazan 93 / 20 Haziran 712.

## ② Bulunamayan / doğrulanamayan
- **Pencere dışı (künye/kronoloji/yerleşim yazılmadı):** `vakataka` (t=0500-01-01, pencere başında biter), `mahameghavahana` (f=-0199; Majumdar III Kalinga bölümü Kharavela'nın Chedi imparatorluğunun çok önce dağıldığını söyler; girdi t=null, 500 sonrasına tanık yok).
- **Künyede kuruluş yılı kaynakta YOK:** `kalabhra` (f=0500 UFUK işareti; Majumdar "IV-IX yüzyıl arası belirsiz"), `anuradhapura` (girdi f=-0376 Pandukabhaya geleneği doğrulanamadı; f=-0250 yüzyıl hassasiyetli, "ilk tarihlenebilir tanık"), `licchavi-nepal` (f=0464 = ilk tarihli tanık, kuruluş değil), `vishnukundina`/`guhila`/`alkhon`/`kadamba` f yalnız onyil-yüzyıl.
- **t=1948 (guhila-mevar) ve t=1434 (dogu-ganga):** pencere dışı, "atıf; açılmadı" (Majumdar bu tarihlere gelmez; yalnız arama özeti popüler/derleme siteydi, kaynak sayılmadı).
- **Yerleşim yazılmayan merkezler (neden):** Kongoda (Sailodbhava; yer teyit edilemedi), Karmanta (Khadga; Majumdar'da başkent adı/konumu yok), Sonraki Gupta başkenti (Majumdar yalnız "Magadha", Aphsad yazıtı Gaya yakınında; Pataliputra Hiuen Tsang'da harabe), Brahmapura/Bharmour (Chamba erken başkenti; tek tanık: OSM; Wikidata'daki Bharmour 28 km farklı), Nagda/Nagahrada (Guhila; GeoNames/Wikidata/Pleiades'te yok, OSM'de 11 km sapma), **Ahar/Aghata (Guhila 10. yy başkenti) atlasta Udeypûr (kur:1559) ile 0,7 km → mükerrer**, ayrı kayıt açılmadı. Guhila ve Sailodbhava, Khadga, Sonraki Gupta: **haritada noktaları yok → boyanmaz** (boya ihtiyacı aşağıda).
- **Sınırlı kaynaklı polity (madde sayısı < hedef):** kalabhra 2 (Majumdar yalnız Acyutavikranta ve Kadungon tarihlerini verir), khadga 1, sailodbhava 2, chamba 3, vishnukundina 4. Kaynak aranan yerler: Majumdar III-V tam metin, TDV (Sind, Kâbil, Saffâr). İSAM/TTK/DergiPark/YÖK **taranmadı** (zaman); Pleiades Hint kapsamı çoğu yerde boş.
- **Doğrudan tarih verilmediği için yazılmayanlar:** Kalabhra'nın Velvikudi levhasındaki Pandya fethi, Kadamba-Gupta evlilikleri, Maitraka-Harşa çatışması (Majumdar'da yıl yok), Mihirakula'nın yenilgi yılı (Yasodharman/Baladitya; yıl yok), Kumaragupta'nın Isanavarman'ı yenişi.

## ③ Kararlar / öneriler
### Künye düzeltme önerileri (KUNYE_MAIN_DA / MS1 dalı — dosyaya yazılmadı)
- `turk-sahi` f=0665: TDV Kâbil'e göre Türkşâhî hükümdarı **44/664'te zaten** Kâbil'de haraca bağlandı → f ≤ 0664 (7. yy ortası); t=0850 Majumdar'da "9. yy ikinci yarısı" (alt sınır); Saffârî Kâbil'e **255/869** (TDV) — Majumdar 870 (çelişki beyanlı, TDV esas).
- `gupta` t=0540: Majumdar Gupta üstünlüğünü ≈543-550'ye (Maitraka kaydı 550'ye kadar) uzatır; Kannauc yamasında 0550 alındı.
- `pandya-1` f=0601: Majumdar Kadungon ≈590-620, Kalabhra kurtuluşu "6. yy sonu" → f ≈ 0590.
- `maukhari` t=0606: Grahavarman'ın ölümü/Kannauj'un düşüşü 606; Kannauj'un Harşa'ya geçişi **c.612** (Majumdar); Maukhari soyu Nepal'de sürer. Kannauc zincirinde 0606-0612 Sasanka (BEYANLI YAKLAŞIKLIK) yazıldı.
- `khadga` f=0625/t=0705, `sailodbhava` f=0590/t=0780, `sonraki-gupta` f=0550/t=0750: Majumdar'da doğrulanamadı (yalnız "7. yy 2. yarısı", "6. yy sonu", "yaklaşık bir yüzyıl", Jivitagupta sonrası belirsiz); yüzyıl hassasiyetli kalmalı. `sailodbhava` Harşa tarafından **643'e kadar** fethedildi; Majumdar (III) Sasanka sonrası bağımsız "uzun tarihli" bir krallık da der — 643-780 arası ara/yeniden bağımsızlık kaynaklı değil, künye ic_not'ta beyan edilmeli.
- `gauda-shashanka` t=0637 üst sınırdır (ölüm 619-637 arası); `cac-sind` f=0640 onyil (Çaç-nâme 602/622, Hiuen Tsang'a göre 640 sonrası).
- `habbari` 0861-1010: TDV ile uyumlu (247/861 bağımsızlık; 1010 Gazneli Mahmud).
- `chamba` f=0550: Majumdar yalnız "6. yy"; 1087'de tanık var, 1087-1281 süreklilik bu oturumda kaynaklanmadı.

### YAMA GEREKLİ listesi (`yama_hint1.js`; ilk dilim f=0500-01-01 UFUK işareti)
| yerleşim | eklenecek önek | devam_gerekli |
|---|---|---|
| Kannauc | gupta 0500→0550, maukhari →0606, gauda-shashanka →0612, harsha →0647 | 0647→1281 (Yasovarman, Ayudha, Pratihara 783+, Gahadavala — başka küme) |
| Katmandu | licchavi-nepal 0500→0750 | 0750→1281 (Majumdar IV: "çok belirsiz") |
| Kâbil | __BOSLUK__ 0500→0665, turk-sahi →0850, hindu-sahiler →0869 | 0869→1281 (Saffârî/Sâmânî/Gazneli…) |
| Siyâlkot | alkhon 0500→0540 | 0540→1281 |
Kaynak yetersizliğiyle yazılmayan yama adayları: Gayâ (Sonraki Gupta/Sasanka; Aphsad Gaya yakını), Gvalyar (Mihirakula yazıtı c.530), Çitor (Guhila, 10. yy öncesi belgelenmemiş; 713 Mori yazıtı), Uccayn (Kalaçuri 595).
Mükerrer uyarısı: Ahar (Guhila başkenti 943) ↔ Udeypûr 0,7 km, Udeypûr `kur:1559` ile çelişir; öneri: Udeypûr zincirine Ahar'ın 0943 tanığıyla `kur` düzeltmesi başka işe bırakıldı.

### Boya ihtiyacı (`arac/renkler.py` BOYALAR'da YOK — grep ile doğrulandı)
- 9 yeni künye: `anuradhapura, kalabhra, kadamba-banavasi, licchavi-nepal, maitraka, alkhon, dogu-ganga, vishnukundina, guhila-mevar`.
- MS1 dalındaki ve yerleşimlerde kullanılan: `cac-sind, chamba, gauda-shashanka, maukhari, turk-sahi` (+ yerleşimsiz `sonraki-gupta, sailodbhava, khadga`).
- `data/devletler.js`'te var ama BOYALAR'da yok: `gupta, harsha, hindu-sahiler, habbari` (zincirlerde kullanıldı). `abbasi`, `emevi` VAR.
- Yeni `bolge`/`tur` yok: hepsi `guney-asya` (turk-sahi, alkhon, hindu-sahiler için `orta-asya` düşünülebilir); `tur` kronoloji sözlüğü: `siyaset`, `baskent` kullanıldı.

### Çelişki beyanları (maddelerde `ic_not`)
TDV 255/869 ↔ Majumdar 870 (Ya‘kūb-Kâbil); TDV Debal ilk sefer 636 ↔ Majumdar 643; TDV Dâhir ölümü 20 Haziran 712 ↔ Majumdar Alor teslimi sonra (Brahmanabad 6 ay kuşatma); Bappa Çitor Tod 728 / Ojha 734 / Majumdar >738; Manavarman Geiger 676 ↔ Majumdar 668; Kadamba büyük kol bitişi 547 (Harivarman) ↔ küçük kol 540'ta devirir; Kadamba künye t girdi 0525 ↔ 610; Alkhon girdi t=0528 ↔ Mihirakula yazıtı c.530; Licchavi çağ (Saka/Vikrama/Gupta/Levi).

## İşlem notları
- Majumdar'ın bazı tarihleri "c." yaklaşıklığıdır: `kesinlik` onyil/yuzyil olarak işaretlendi; gün hassasiyeti yalnız 9 Nisan 1038 (Gangalar) ve 20 Haziran 712'dir.
- Tüm toprak-değişimi maddelerinde ilk `taraflar` kazanandır; Çola, Chalukya, Tang vb. atlas kimliği olmayan taraflar `taraflar`a yazılmadı (ilgili dilimler `__BOSLUK__` ya da zincir sonu olarak beyan edildi).
- Üretim betikleri scratchpad'de (`...\Temp\h1\gen_*.py`); çıktılar yalnız `denetim/dogu/hint1/` altındadır.
