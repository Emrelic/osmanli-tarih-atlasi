# Tarih Atlası — her oturumun önce okuyacağı dosya

**Her satır bir KURAL; gerekçesi ve vakası [`dersler/`](dersler/DIZIN.md)dedir.** Budamalar:
17 Eylül 167 → 25 KB · 10 Ekim (BUDAMA-1010) 96 → ~42 KB — ikisinde de hiçbir kural silinmedi
(sınavlar `py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --sina` · `py denetim/BUDAMA-1010-SINAV.py`).
Kural tartışılınca vakasını aç.

## Belge seti ve açılış
**AÇILIŞTA YALNIZ İKİ BELGE OKUNUR: bu dosya + kendi şartnamen** (`oturumlar/<ADIN>.md`).
🔴 **Görevsiz açıldıysan (adın "… hazır kıta …"): şartnamen [`oturumlar/HAZIR-KITA.md`](oturumlar/HAZIR-KITA.md)dir
— şimdi oku ve harfiyen uygula** (tek "HAZIRIM" tahta mesajı, bekçi, sessizlik, tek teslim,
iş bitince bekçiyi öldür).
Aşağıdakiler **yalnız iş gerektirirse, adıyla ve gerekli bölümüyle** açılır — hiçbiri "her
oturumda" değildir (17 Eylül 2026 token kararı, Emre).

| Belge | Ne zaman |
|---|---|
| `dersler/DIZIN.md` + `D*.md` (kuralların vakaları) | kural TARTIŞILINCA — toplu okunmaz |
| `ONCELIK.md` (neyi önce/hiç, çöl seyyahı) | kapsam sorusunda ÖNCE bak, gerekirse itiraz et |
| `YOL-HARITASI.md` · `YAPILACAKLAR.md` (nereye · iş sırası) | koordinatör; işçi şartnamesi derse |
| `oturumlar/TOPOLOJI.md` (5 makine · roller · TİP1-5 · **birleştirme düzeni**) | 🔴 EMRELIC DIŞINDA bir makinedeysen ŞART · koşu/yayın/push yapacaksan ŞART |
| `MIMARI.md` · `VERI-YAPISI.md` (motor · şemalar) | motora / veriye dokunacaksan ŞART |
| `BES-ALTYAPI.md` (5 altyapı unsuru, `ALTYAPI.md §0` yerine) | altyapı sorusu |
| `DURUM.md` · `OGRENILENLER.md` · `ETIKETLEME.md` | adıyla sorulursa |

Veriye/motora dokunacaksan ek olarak `git log --oneline -10` ve `py arac/durum_tablosu.py`
(sayılar §1.5 ile uyuşmuyorsa önce onu söyle). [`D231`](dersler/D231-belge-seti-acilis-sirasi.md)

🔴 **AĞACIN GERİDEYSE DUR — ÖLÇME:** `git fetch origin --quiet && git rev-list --count HEAD..origin/main`
**0 değilse ölçüm yapma, koordinatöre bildir** — geride bir ağaçtaki sayı **BAŞKA BİR ATLASIN**
sayısıdır ve hiçbir kapı yakalamaz. Ölçüm **ayrı worktree'de, `origin/main`den**
(`git worktree add <yol> origin/main --detach`); ana checkout ölçüm zemini değildir.
[`D273`](dersler/D273-belge-seti-agac-geride-1010.md)

---

## 1. Proje nedir

Zaman göstergesi ilerledikçe devlet sınırlarının değiştiği, yanında kronoloji ve dönemin
hükümdarının aktığı **eğitim amaçlı statik web sitesi**: sunucu/veritabanı/derleme yok,
tarayıcı `data/` altındaki düz JS'i okur. Çekirdek katman Osmanlı 1281–1923, **gün
hassasiyetinde**; hedef bütün dünya (MÖ 12000 – MS 2026, kademeli, §6). MapLibre GL JS 4.7.1.
Yayın https://emrelic.github.io/osmanli-tarih-atlasi/ · depo Emrelic/osmanli-tarih-atlasi,
`main`e push = yayın. Ekran: harita (Osmanlı doğrudan koyu, tâbi açık, yabancı kendi
renginde) · padişah kartı + kronoloji + detay kartı · zaman çubuğu · dizin penceresi.
**Amaç kronoloji ile haritanın birbirini doğrulaması** — bir madde okunduğunda haritada tam
o değişim görünmeli; bütün kalite kuralları buradan türer.

---

## 1.5 Bugün nerede duruyoruz

| Katman | Ölçülen durum |
|---|---|
| Yerleşim (motorun okuduğu) | **4300** nokta, 93 girdi dosyası · kaynak_zayif işaretli kayıt: 0 |
| Kronoloji | **1801** madde · 1431 duygu etiketli · 1661 `yer_id` (boş yer_id: 5) · 27 `vefat_id` |
| Değişmez 1 — sahipsizlik | ✓ 4300 yerleşim, 309 sahipsiz (beklenen 309) |
| Değişmez 1b — iç boşluk | ✓ BEYANSIZ pencere arası boşluk: 0 (beklenen 0) · beyanlı 7/7 — tam tarama |
| Değişmez 2 — Osmanlı senkronu | ✓ 628 kırılma, 0 açık (beklenen 0) |
| Değişmez 2s — yabancı senkron | ✓ 1805 YABANCI kırılması · 193 AÇIK (tavan 193) · 793 KAPSAM DIŞI · 228 YIL-TEMSİLÎ BORÇ |
| Değişmez 2i — işgal senkronu | ✓ 171 İŞGAL kırılması, 1 açık (tavan 1) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 13 (tavan 13) — bilinen borç |
| Konum denetimi | 0 nokta kara maskesinin dışında (beklenen 0) |
| Devletler dizini | **897** künye · **704** renk (`renkler.py`) |
| Dizinsiz harita kimliği | ✓ **0** kimlik / 0 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 93 dosya, `s:`+`isg:` alanları — bağlanmamış partiler HARİÇ* |
| Kasıtlı boşluk kimliği | 🟡 **1** kimlik / 99 pencere · *`__BOSLUK__` — hiçbir künyenin kapsamadığı dilim; en yakın kimliğe İTİLMEDİ (`§3.5.1`). Kusur değil, BEYAN* |
| Renkli-künyesiz kimlik | ✓ **0** çiziliyor ama dizinsiz · 🟡 1 ölü renk (kullanılmıyor) · *kapsam: `renkler.py` BOYALAR − (künye `id` ∪ `harita:`)* |
| Renksiz künye — HARİTA DELİĞİ | 🔴 **11** kimlik haritada (`s:`/`isg:`) kullanılıyor ama BOYANMIYOR · 🟡 **11** hiçbir yerde (gerçek sessiz borç) · 🟢 5 BEYANLI boya borcu (`boya_gerekli:true` — tam inşa koşusunu bekliyor, sessiz DEĞİL) · ⚪ 121 yalnız sınır/kronoloji/savaş/kişi katmanında (borç değil) · ⚪ 14 tâbi-çizili (yalnız `v:kid`, delik değil) · *kapsam: künye `id` ∪ veride kullanılan − BOYALAR(`harita:` varsa o) · `v:kid` ayrı kova · katman evreni: `index.html`in yüklediği 13 sınır · 184 kronoloji/olay · 2 savaş · 1 kişi dosyası (kimlik alanları `durum_tablosu.py`de) · `__BOSLUK__` muaf* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **41** kartvizit dolu |
| Kişi kaynağı | TDV 257 · başka 2 · bulunamadı BEYANI 29 · kaynaksız 0 |
| Harita penceresi | `box(-180, -60, 180, 85)` |
| Yayın | **r12034** · `6ff24cb9` |

**Elle yazılmaz, üretilir** (`denetle.py`ye sorar): `py arac/durum_tablosu.py` · `--yaz`
(§1.5'i günceller). Güvenmeden önce koştur; bayat tabloyla kabul ölçütü kurulmaz.
[`D199`](dersler/D199-durum-tablosu-elle-yazilmaz.md)

## 1.6 Kapsam disiplini
Yedi boyut: tarih çizgisi · coğrafî kapsam · devletler · devlet kronolojileri · yerleşimler
· kişiler · olaylar. **8. boyut (konu başlıkları) Emre'nin 2 Eylül kararıyla AÇIK ama
SIRALIDIR:** yalnız ① kronoloji görseli (`gorsel:` · YALNIZ kamu malı/CC0 · `gorsel_kaynak:`
açıkça) ve ② ek okuma türü tanımı açıldı; öteki konular sevk bekler. Açmayı/kapatmayı
yalnız Emre yapar. [`D200`](dersler/D200-sekizinci-boyut-acildi.md)

---

## 2. Petek motoru — tek zayıf nokta
Her yerleşim çevresindeki toprağın **peteği** (Voronoi) sahibidir; sınır kıyı/nehir/sırta
yaslanır, kara maskesiyle kesilir, göller çıkarılır. Geometri `data/yerlesimler.js`ten her
gün için yeniden üretilir.
- **Noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.** "Harita
  yanlış" raporunda ilk soru: *o bölgede yerleşim noktası var mı?* (ör. Sardinya 1533.)
- Motor anlatısındaki sayılar (göl, nehir, dağ, çöl tavanı) **koşunun logundan** okunur,
  yorumdan değil. Vaka: [`D201`](dersler/D201-petek-motoru-sayilar-logdan.md)

---

## 3. İhlal edilemez değişmezler
**Her veri değişikliğinden sonra `py arac/denetle.py`** — tek kapı odur. Vakalar:
[`D274`](dersler/D274-degismezler-kapinin-yeri-1010.md) · eski ölçütler [`D202`](dersler/D202-uc-degismez-tam-metin.md).
- 🔴 **ÇIKIŞ KODU: `0` temiz · `1` İHLAL VAR · `2` ÖLÇÜLEMEDİ.** Ölçülemeyen soru TEMİZ
  DEĞİLDİR: `OLCULEMEDI_KOVA`ya ADIYLA düşer (liste), ihlalle birlikte de görünür. **Otomasyon
  cümleyi değil çıkış kodunu okur.** Sınav `py denetim/ARAC-OLCULEMEDI-KAPI-SINAV-1004.py`.
- 🔴 **Vaka bayatlayabilir: vakaya dayanıp bugünkü durum hükmü verilmez, bugün ÖLÇÜLÜR.**
- 🔴 **Kapının YERİ bir kusur sınıfıdır:** denetleyici soruyu SONRADAN sorar → kusuru BULUR;
  yazıcı sormazsa → kusuru YAZAR. Yeni kapıda **"NE ZAMAN soruyor"** da sorulur.
- 🔴 **Bir ayrımın TEK OTORİTESİ olur:** aynı soruyu soran iki uygulama yedeklilik değil iki
  ayrı davranıştır (farklı cevap, farklı evren). Çare çoğaltmak değil **birleştirmek**
  (örnek `arac/aciliyet.py`); evren farkı SAYIYLA ölçülür. Yeni kapı onaylanmadan önce o
  soruyu soran bir kapı **VAR MI** diye sorulur.
- **1 — sahipsizlik yok.** Var olduğu tarihte sahipsiz yerleşim = haritada delik. Sahipsiz
  sayısı §1.5'teki beklenenin üstüne çıkarsa yeni delik açılmıştır (beklenenler kasıtlı
  çöl/dolgu noktaları).
- **2 — sessiz toprak değişimi yok.** Her `d:`/`v:` kırılmasının **±30 gün** içinde kronoloji
  maddesi olmalı. **Ölçütü gevşetme.**
- **3 — tarih × yerleşim × petek × bölge çelişmez** (henüz sağlanmıyor). Kusurun %93'ü `m:`
  alanının **zaman penceresi** eksikliği (`kd:` çözer); ~%1'i eksen kusuru ve `kd:` onu
  çözmez. `OSMANLI` ile `tâbi` çelişki SAYILMAZ. 🔴 **Motor `kd:`yi OKUMAZ** ⇒ gövde
  çakışması `kd:` ile düşmez ve koşu istemez (kusur `donemler.js`/`devletler_harita.js`
  gövdelerinde); iki sınıfı karıştırmak boşa bir tam inşa (**7-8 SAAT**) istetir.
- **8 — şehir bölgesi ülke sınırını aşamaz** (Emre H-0069/H-0086, 27 Eyl 2026). İki soru,
  iki tavan: **8a** gövde, o gün geçerli D/E/F hattını aşıp karşı yakaya ≥ 5 km uzanan
  yerleşim peteği · **8b** Osmanlı `BOLGELER` poligonunun yabancı gövdeye düşen payı.
  **Motor ÇIKTISINI ölçer** — veri düzeltmesi ancak koşudan sonra görünür. Tavan bugünkü
  ölçümdür (dondurma, onay değil); yeni D hattı tavana değil "YENİ KAPSAM" kovasına düşer
  (`--d8-defter-yaz`). Muafiyetler (eksklav · menderes · `__BOSLUK__` · tâbi · `isg:` ·
  C/YOK hattı) `denetle.py`de gerekçeli. [`D237`](dersler/D237-sehir-bolgesi-sinir-asamaz.md)

### 3.4 🔴 TAVAN DİSİPLİNİ — her `BEKLENEN_*` için, istisnasız ([`D275`](dersler/D275-tavan-disiplini-1010.md))
0. **Tavan YAZILDIĞI ANDA ölçülür** — yazmadan hemen önce yeniden koştur, farkı ADIYLA kıyasla.
1. **Tavan BUGÜNKÜ ölçümdür** — geleceğin değeri tavanla susturulmuş borç üretir.
2. **TAVAN + SABİT AYNI COMMIT'TE** — ayrılırsa arada kapı doğruyu reddeder ya da borcu yutar.
3. **Yalnız GERİLEME bloke eder; İYİLEŞİNCE TAVAN İNER.**
4. **Tavanı İŞÇİ ÖNERİR, KOORDİNATÖR YAZAR** (`§7`); `--tavan-yaz` körü körüne kullanılmaz.
5. **İstisna listesi de tavan ailesidir:** sayı değil LİSTE; "ölü" mü TÜKETİCİYE GÖRE sorulur;
   ölü istisna yarın gerçek ihlali susturur — **en iyi istisna yazılmayandır.**
6. **Tolerans yuttuğunu ADIYLA söyler** (yoksa bir perdedir): tolerans kalır + yutulanlar bir
   BİLGİ kovasında (eşiği 0'a çekmek yanlış pozitif makinesidir). **Yanlış ad, adsız kovadan
   kötüdür.** Bir körlüğü kapatan yama, onun tesadüfen sağladığı korumayı da kaldırır — aranır.
7. **Düzeltme ile görünürlüğü AYRILAMAZ** (veri + boya): birleştir, olmuyorsa aradaki hâli
   BEYAN ET (`boya_gerekli:true`, adıyla); `harita:` takma adı çare değil. **Yanlış renk
   YALAN, beyanlı delik İTİRAFTIR.**

## 3.5 Denetimin görmediği sınıflar ([`D276`](dersler/D276-gorulmeyen-siniflar-bosluk-delik-1010.md))
- **Hayalet devlet:** yeni `s:` dönemi yazarken devletin ömrünü `data/devletler.js`
  `f`/`t`'den kontrol et; bölgesel teslim gecikmesi aylar mertebesindedir, yıllar değil.
  [`D203`](dersler/D203-hayalet-devletler.md)
- **Devlet var, yeri yanlış:** `4c`/`4d` "künye penceresini aşıyor mu" sorar, "oraya hiç ait
  miydi" sormaz. Kimliğin menzilini sayıya çevir, veriyi ona karşı tara; ölçülemiyorsa
  `ölçülemedi` yaz. [`D204`](dersler/D204-devlet-var-yeri-yanlis.md)
- **Künye aşımının üç sınıfı, çareleri ters:** ① devlet öldü → dönemi KISALT · ② aynı polity
  sürüyor → künyeyi GENİŞLET · ③ ardıl yapı geçti → ardıl künye (penceresi de TUTMALI). **İlk
  iş SINIFLANDIRMA.** "Kimlik yok" demeden `devletler.js` TARANIR. Üç haneli yılda `pad()`
  şart. [`D205`](dersler/D205-uc-sinif-careleri-ters.md)
- **Ters yön:** sınır kayması önerilince **iki uç da ölçülür**; noktasızlık iki yöne hata
  üretir; devletin yıkılışı ≠ o yerin fethi. [`D206`](dersler/D206-ters-yon-osmanli-fazla.md)
- 🔴 **Beyan edilen boşluk haritada bir DELİKTİR:** `__BOSLUK__` boyanmaz, devralınmaz,
  doldurulmaz; bitişik noktalar tek büyük delik olur. Seçim "çelişkili renk ↔ dürüst delik":
  ① şehir adlı tanık ARA ② kalanda yaklaşıklık kullanıcıya görünüyorsa bölge sahibi + beyan,
  görünmüyorsa `__BOSLUK__`. **Beyansız yaklaşıklık, beyanlı boşluktan kötüdür.**

---

## 4. Kaynak kuralı
Tam metin ve vakalar: [`D277`](dersler/D277-kaynak-kurali-hicri-sozlesme-1010.md); hicrî sayılar `denetim/KASA-HICRI-*`.
- **İslâm dünyası, Osmanlı ve komşuları: TDV İslâm Ansiklopedisi birincil;** çelişirse TDV
  esastır. TDV'nin kapsamadığı yerde akademik kaynak meşrudur, `kaynak:`a AÇIKÇA yazılır.
  **Vikipedi tek dayanak değildir.** Küçük model (Haiku) kullanılmaz. 🔴 "TDV esastır" bir
  TARİH çelişkisini çözer, OLGU çelişkisini değil — öncül tartışmalıysa `ÖLÇÜLEMEDİ` +
  beyanlı tartışma.
- **Atlas referans değildir, mamul üründür** (Emre, 13 Eylül): yerleşim dönemi, künye günü,
  komşu kaydın günü, atlas koordinatı DAYANAK OLAMAZ; çelişkide ATLAS düzelir. **Komşu günü
  şartlı serbest:** komşunun günü kendi kaynağına dayanıyor + hedefte kaynak gün vermiyor +
  aynı olay ve yakın konum + kayda "gün komşudan: <komşu> · <kaynağı>"; zincirleme devralma
  yasak. [`D207`](dersler/D207-atlas-referans-degil.md)
- **Bayrak kuralı:** kaynakta kesin okunan "şu yer, şu tarihte, şu devletin" tanıklığı
  `data/kaynakli_halka_<kısaltma>.js`e yazılır; örtülü, çıkarım, istisna cümlesi, bölgeden
  şehre taşınan hüküm, atlas kaydı halka almaz; iki kaynağın uçları birleştirilmez. [`D208`](dersler/D208-bayrak-kurali.md)
- **Kırmızı çizgi** (Emre, 9 Ağu): dışarıda yalnız akademik/güvenilir kaynak; KULLANILMAZ:
  forum · blog · içerik çiftliği · kaynaksız derleme · YZ üretimi metin · popüler tarih
  sitesi. Girmeyen kurumsal kaynak adıyla kabul edilir. Kaynak gizlenmez; bulunamadıysa
  `bulunamadı`. [`D209`](dersler/D209-kirmizi-cizgi-ara-bolge.md)
- **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01` (hicrî kaynakta aşağıdaki sözleşme); **yıl
  bilinmiyorsa yıl yazılmaz** ("temsilî" damgası meşrulaştırmaz). Künyenin `f:`/`t:` günü
  KAYNAK DEĞİLDİR; kaynak yıl diyorsa yıl yazılır, fark bildirilir. Pencere uçları
  (`1923-10-29`) sınır işaretidir. [`D210`](dersler/D210-hassasiyet-kaynagi-asamaz.md)
- 🔴 **HİCRÎ YIL — VARSAYILAN GÜN SÖZLEŞMESİ:** hicrî yıl 1 Ocak'ta başlamaz ⇒ `YYYY-01-01`
  kaynağın DIŞLADIĞI güne düşer (atlasın çekirdeğinde varsayılan hâl, kayma 11 aya kadar):
  mîlâdî yıl → `YYYY-01-01` · **hicrî yıl → hicrî aralık ∩ kaynağın mîlâdî yılı ∩ (varsa) ay,
  kesişimin İLK günü** · kaynakta gün → O GÜN · seçim `ic_not`ta hicrî aralıkla BEYAN.
  Şartlar: (i) "gün yoksa" KÜNYE BAŞINA sınanır (öteki maddelere bakılır) · (ii) formülden
  SONRA öncül/ardıl ucuyla ÇAKIŞMA KONTROLÜ zorunlu, çakışırsa çıktı reddedilir · `t`/`f`
  zinciri BİRLİKTE kaydırılır (otomatik eşleşmeye güvenilmez) · iki kaynaklı uç arasındaki
  boşluk ZORLA KAPATILMAZ (`__BOSLUK__`) · ±1 yıl çelişkisinde önce hicrî sınır kontrolü ·
  iki madde çelişirse DAHA DAR KAPSAMLI esas (künye uçları → polity maddesi, yer olguları → yer
  maddesi); madde kendiyle çelişirse `ÖLÇÜLEMEDİ`, değer korunur; komşu hicrî yıl seçimi
  `ic_not`ta. `kesinlik:"yil"` yanlış günü doğru yapmaz; gün VARKEN yıl yazmak ayrı kusurdur.
  Bilinen deliği kapatmak yeni ölçümden önce gelir.
- **Hassasiyet alanı:** tarih kaynağın desteklediği en kaba güvenli düzeyi taşır, ay/gün
  metinde durur; `YYYY-MM-01` "ayın 1'i" ile "ay biliniyor"u ayırt edemez — hassasiyet
  AÇIKLAYAN alandan okunur. Kaba tarih künye penceresi dışına düşerse künyenin günü
  devralınır ve bildirilir. Türetilen sayı alıntıya yazılmaz. [`D213`](dersler/D213-ay-ayin-birine-kodlanmis.md)
- **TDV tuzakları:** ① ölü slug (HTTP 302) · ② canlı slug, yanlış madde (`ordu`→`ordu--sehir`)
  · ③ boş gövde · ④ boilerplate (çekilemedi ≠ yok) · ⑤ `000` taşıma arızası · ⑥ kaynak
  kendiyle çelişebilir — **önce cümleyi doğru ayrıştır** · ⑦ çıkarıcının "okuyamadım"ı
  belgeyle ilgili değil · ⑧ rakamın gövdede geçmesi o değeri desteklemez — **rakamı taşıyan
  cümlenin neyi tarihlediği okunur** · ⑨ aramada çıkmayan madde ölü değil: arama ADAY
  üretir, `GET` DOĞRULAR. [`D211`](dersler/D211-tdv-tuzak-5-8-once-ayristir.md)
- **Arama:** `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`; "TDV'de yok" demeden ARA,
  kapsayıcı maddeyi dene — **TDV olay değil yer-kişi ansiklopedisidir** (olayın YERİNE ya da
  KİŞİSİNE bak). Kapsama tablosu kasaba taneciği için hüküm vermez; kaynak yoğunluğu komşu
  bölgeye taşınmaz. [`D217`](dersler/D217-tdv-olay-degil-yer-kisi.md) · [`D218`](dersler/D218-tdv-isabet-orani-81.md)
- **Türkçe yazım:** `d:`e `devletler.js`teki gerçek `id:` (`aceh`→`ace-sultanligi`); "yok"
  demeden `bolge:` taranır. `"İ".lower()` iki kod noktası verir, `casefold()` çözmez →
  `denetim/ARAC-NORMAL-0903.py`; ayrı adlar eşanlam sözlüğü işidir. [`D215`](dersler/D215-turkce-yazim-ekseni-lower.md)

---

## 5. Dosya haritası
```
index.html · js/app.js · css/style.css   uygulama (yeni data/*.js → index.html'e satır)
data/yerlesimler*.js     ELLE YAZILAN coğrafî kaynak — CANLI liste: arac/girdi.py GIRDI_DOSYALARI
data/olaylar*.js         kronoloji ÇEKİRDEĞİ (Değişmez 2 evreni)
data/kronoloji_sinir*.js 🔴 DA Değişmez 2 EVRENİNDE (Emre, 24 Eyl 2026 — 10 dosya, 405 madde)
data/kronoloji*.js       öteki kronoloji dosyaları: KUYRUK (Değişmez 2 evreninde DEĞİL)
data/devletler.js        künye + `harita:` boya anahtarı
data/padisahlar.js · kisiler.js · savaslar.js · sehirler.js
data/donemler.js · devletler_harita.js · bolgeler.js   ÜRETİLMİŞ — ELLE DÜZENLEME
arac/uret_petek.py       TEK üretim betiği · arac/renkler.py BOYALAR · arac/denetle.py
veri-kaynak/             motorun girdi verisi (Natural Earth vb.)
veri-kaynak/motor_kara.geojson   GİRDİ DEĞİL ÇIKTI (motorun çizdiği kara, ~200 km tavan)
dersler/ · denetim/ · oturumlar/ · assets/portreler/
```
**Canlı girdi yalnız `GIRDI_DOSYALARI`dan okunur** — burada liste tutulmaz; okunan dosya
kümesi de doğrulanır:
`py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI));[print(' ',f) for f in girdi.GIRDI_DOSYALARI]"`
[`D219`](dersler/D219-dosya-haritasi-tam.md) · çıktı/log yüzü [`D278`](dersler/D278-dosya-haritasi-uc-yuz-1010.md)
- 🔴 **Çıktıda canlı olan `index.html`in `<script src=>` satırıdır**, diskteki en büyük dosya
  değil (`data/devletler_harita.js` takipsiz yerel çözümdür). Dosya VARDI ve YANLIŞTI.
  Üretilmiş haritayı ölçen iş tabanını KENDİ çözer — elle **İKİ komut, ikisi de ŞART**
  (biri eksikse D8 ölçülmez ama ölçüldü sanılır — **eksik çare, çaresizlikten kötüdür**):
  `git worktree add <yol> origin/main --detach` → `py arac/kodla.py coz-c data data/devletler_harita.js`
  + `py arac/kodla.py coz-c data data/donemler.js donem`. Alet `arac/olcum_agaci.py hazirla|kaldir`
  `main`e İNMEDEN yok sayılır (`coz_c` damgayı doğrulamaz, alet doğrular). Çözme ölçüm
  hazırlığıdır, yayın değil. Rapora **taban commit + boyut + sha256** yazılır.
- 🔴 **Koşu logu başka makinededir:** koşular ayrı worktree'de koşar ⇒ ana checkout'un
  `uretim_canli.log`u tanım gereği o koşunun logu DEĞİLDİR (tek belirti mtime). Log **dizin
  adıyla** anılır; koşu durumu koşucunun ölçümünden okunur.

## 6. Kapsam genişlemesinin sırası
Dizin katmanı → yerleşim yoğunluğu → harita penceresi. **Nokta yoğunluğu sağlanmadan pencere
açılmaz** (kenar petekleri dünyaya yayılır). [`D220`](dersler/D220-kapsam-genisleme-sirasi.md)

---

## 7. Oturum düzeni ve dosya sahipliği — EN ÖNEMLİ KURAL
Bölme ölçütü **dosyadır**; her dosyanın tek sahibi var. Oturum 0 (koordinatör, YILDIRIM BAYEZIT):
`yerlesimler.js`, `uret_petek.py`, üretilen `data/*.js`, kök `*.md`. Öteki oturumlar
şartnamelerinin verdiği dosyalara yazar; **emin değilsen sor**; rapor/denetim oturumları
düzeltme yapmaz. [`D221`](dersler/D221-dosya-sahipligi-uretim-kilidi.md) · [`D279`](dersler/D279-oturum-duzeni-surec-oldurme-1010.md)
- 🔴 **MAKİNE ROLLERİ** (Emre, 4 Ekim — `oturumlar/TOPOLOJI.md`): EMRELIC koordinatör/paketleyici
  · **HAVVA koşucu + yayıncı** · UMIT yazıcı · KASA araştırmacı · LAB denetleyici; TİP1–TİP5.
  Koşucu donmayı `py arac/kaynak_durum.py kapat --kod KOSU` ile ilan eder (söz yetmez).
  **`main`in TEK YAZICISI koordinatördür:** her makine kendi dalına push eder. Üretilen
  `data/*.js` çatışması birleştirilmez, **yeniden üretilir**.
- **`uret_petek.py`yi yalnız Oturum 0 koşturur** (TİP1; TİP3+ için HAVVA). Koşu sürerken `data/`
  VE `arac/` donmuştur; "girdi dosyaları SERBEST" satırı koşunun sağlığını söyler, çıktının
  yayınlanabilirliğini değil. Koşular ayrı worktree'de. Devir sözle: "girdi kilitli" / "dosya senin".
- **Uzun iş (koşu) öncesi** tahtaya "BEN BAŞLATIYORUM · ne · ~süre" yaz, 60 sn bekle; çakışmada
  beyana değil süreç damgasına bak. [`D225`](dersler/D225-ad-alani-kaynak-sahipligi.md)
- 🔴 **SÜREÇ ÖLDÜRME:** hedefi **SÜREÇ KİMLİĞİNDEN BAŞKA** bir şeyle (ad · zaman penceresi ·
  komut satırı deseni · başlık · dizin) seçen her öldürme YASAK. Tek meşru ölçüt **KENDİ
  başlattığın PID ve ALT AĞACI** (`taskkill /T /PID <kendi>`) — makinede başka oturumlar koşar.
- 🔴 **Ajanlar birbirinin dizinine yazmaz:** kendi worktree'sine ya da **`scratchpad/<GÖREV-ADI>/`**
  alt dizinine (scratchpad OTURUM başınadır); `denetim/` yalnız TESLİM içindir. Kirlenmiş
  sınavın sonucu ölçüm değildir.
- 🔴 **Bu makinede ölçüldü:** `Stop-Process -Force` → çıkış **127**, `taskkill /F` · `TaskStop`
  → **1** ⇒ 127 burada "dışarıdan sonlandırıldı" da demek (ayırt edici: çıktı başlamış mı).
  **Genel bilgi, bu makinedeki ölçümün yerine geçmez.**
- **Koşu nöbetçisi** 60 dk'da bir canlılık basar; sessizlik "nöbetçi ölmüş olabilir"dir
  (tahta bekçisi mesaj yoksa sessizdir — §7.2). [`D222`](dersler/D222-nobetci-altyapiyla-olur.md)
- **Commit:** push ve paylaşılan dosyalar Oturum 0'da. Oturum KENDİ ürettiklerini
  (`oturumlar/<ADI>.md`, `denetim/<ÖNEKİ>…`) **adıyla** commit eder; dizin pathspec'i ve
  `git add -A` YASAK; pathspec commit'te de tekrarlanır, `git show --name-only` ile
  doğrulanır (`git add -- <adlar>` · `git commit -F <mesaj-dosyası> -- <aynı adlar>`).
  Commit teslim değildir. [`D223`](dersler/D223-commit-istisnasi-pathspec.md)
- **Ayrı dosya ≠ ayrı ad alanı:** `data/<tur>_<kısaltma>.js` → `window.<TUR>_<KISALTMA>`;
  dosya verirken değişken adı da verilir. Süzgeç tanımadığını sessizce elemez, sayıp basar.
  [`D225`](dersler/D225-ad-alani-kaynak-sahipligi.md)
- **Cevap kendi pencerene yazılmaz; "ne oldu bizim iş?" cevapsız kalmaz** ("iş üstündeyim ·
  aşama · ~kalan"). Koordinatör ölü ilan etmeden önce oturumun çalışıp çalışmadığına BAKAR.
  [`D224`](dersler/D224-cevap-kanali-ne-oldu-bizim-is.md)
- Yeni oturumun görev tanımı `oturumlar/` altına yazılır (§7.2 ②).

---

## 7.1 Haberleşme protokolü — her şartnameye AYNEN kopyalanır ([`D280`](dersler/D280-token-kurali-olcturme-1010.md))

### 🔴 TOKEN KURALI (Emre, 17 Eylül 2026) — ①'nin önüne geçer
- **İŞÇİ:** rapor · veri · teslim · soru → YALNIZ TAHTA (`py arac/tahta.py yaz`).
  Koordinatörün ekranına `send_message` YAZILMAZ; bir teslim TEK mesajdır (tahta
  çalışmıyorsa ⑤b).
- **KOORDİNATÖR** iş YAPMAZ, dağıtır — ve **olgu hakkında hüküm vermez, ÖLÇTÜRÜR.** Hüküm
  onun: öncelik · sıra · kapsam · risk · kaynak · yapılıp yapılmayacağı. Ölçüm işçinin: alan
  adı · şema anlamı · kod davranışı · dosya içeriği · sayılar. **Olgu bir DOSYADA yaşıyorsa
  koordinatör onu hüküm değil SORU yapar;** işçi de öncelik/sıra hükmü vermez. İkinci yanlılık
  "makinemi evren sandım" → **hükmün MAKİNESİNİ sor.** Yanlılığı adlandırmak ondan kurtulmak değildir.
- **OTURUM SEÇİMİ:** doğruluk > tasarruf > hız. Tecrübeli/emekli oturum yalnız işin doğrudan
  devamıysa ve doğruluk kazancı varsa; alakasız dolu işçiye iş verilmez. **Maliyet ≈ bağlam
  × tur** (tur başına doğrusal). Eşik yüzde değil ZAMAN: önbellek 1 saat ⇒ SICAK ucuz, SOĞUK
  bağlamın tamamını yeniden öder; **doluluk tecrübe değildir**, ölçüt İLGİ. **Atama sırası:**
  doğrudan devam mı → sıcak mı → ikisi de evetse ONA, değilse TAZE. Sayılar §7.3.
- **BEKLEME:** ScheduleWakeup · /loop · sleep ile tahta YOKLANMAZ, "kontrol ediyorum"
  yazılmaz. Tek yol: bekçi (§7.2 ④).
- **① Kanal = tahta.** Ekrana yazılan rapor koordinatöre ulaşmaz. [`D226`](dersler/D226-haberlesme-dogusu-kanal.md)
- **② Ne zaman:** soru gelince HEMEN · aksaklık BEKLEMEZ · bitince teslim.
- **③ Yatay mesaj serbest, tahtadan** (`--kime "<ÖTEKİ>"`); atama/öncelik/kaynak hükmü ve
  yetki gerektiren her şey koordinatöre. [`D227`](dersler/D227-yatay-mesajlasma-serbest.md)
- **④ Üçlü kural:** ① ne ölçtüm (sayıyla) ② ne bulamadım (`bulunamadı` bir sonuçtur)
  ③ ne istiyorum (seçenekliyse önerinle).
- **⑤ Commit teslim değildir; teslim mesajdır.** **⑤b** "yazıldı" teslim kanıtı değildir —
  kritik mesajı `oturumlar/tahta.json`dan GERİ OKU; tahta çalışmıyorsa özel kanaldan gönder.
- **⑥ Aksaklık beklemez:** başka oturumun dosyası gerekiyor · kaynaklar çelişiyor · şartname
  yanlış · sayı beklenenden çok farklı · kalem yetkini aşıyor · iş çok uzayacak → hemen yaz.
- **⑦ Çember** ve koordinatörün tarafı: §7.2. Duran oturum ölü değildir, cevabı sıkışmış
  olabilir. [`D228`](dersler/D228-teslim-aksaklik-cember.md)

## 7.3 ATAMA PROTOKOLÜ — ölç, sonra ver (Emre, 24 Eylül 2026 · [`D281`](dersler/D281-atama-protokolu-1010.md))
- **① Sıcaklık** = `list_sessions` → **`lastActivityAt`**: SICAK < 45 dk · ILIK 45-60 (soğuk say)
  · SOĞUK > 60. `isRunning` sıcaklık değildir; `get_usage` "unavailable" soğukluk kanıtı
  değildir. **Yanlış alanla ölçmek, ölçmemekten tehlikelidir.**
- **② Bedel:** TAZE taban **82.561** token (araç 36.647 · MCP 16.959 · hafıza 9.109 · beceri
  4.696 · sistem 4.430 · CLAUDE.md 10.773) · SICAK önbellekten · SOĞUK tam fiyat (%37 = 365.096).
- **③ Karar:** ilgi yok → TAZE · ilgili+sıcak → ONA · ilgili+soğuk+<165.000 → ONA ·
  ilgili+soğuk+>165.000 → TAZE + sıcak ilgiliden tecrübe devri (165.000 = 2 × taban).
  **Doğruluk bedeli ezer:** yeri doldurulamaz bilgi tutan soğuk oturuma yine verilir.
- **④ Tecrübe devri:** bağlamı değil BİLGİYİ taşı — tek mesaj: ne ölçtün · hangi tuzak · neyi
  yazmasın · hangi kaynak tuttu. Taze oturuma gitmiş iş geri alınmaz.
- **⑤ İş toplama:** sıcaklık yapay korunmaz; işler tek sıcak pencerede verilir.
- **⑥ Yeni oturum:** ilgili+sıcak yok, ilgili+soğuklar >165.000, havuz boş → Emre'ye *"hazır kıtada N eksik."*
- **⑦** Ölçmek (`get_usage` ≈ 1.100 · `list_sessions` ≈ 1.500) yanlış atamadan (≈ 82.000) ~18 kat ucuz: **HEP ölç.**
- **⑧ Hazır kıta** (Emre, 27 Eylül): ad boşluk kanıtı değil → `list_events` mesaj sayısı.
  Gerçekten boş (~10-20 mesaj), soğuk olsa da → KULLAN · dolu+soğuk+bilgisi `denetim/`de
  yazılı → TAZE aç · dolu+soğuk+yazılmamış → ONU UYANDIR. **Ad ve defter KAYIT tutar, `list_events` ÖLÇER.**

## 7.2 TOKEN ZİNCİRİ — bir işin baştan sona yolu (17 Eylül 2026 · [`D282`](dersler/D282-token-zinciri-bekci-1010.md))
- **① Açılış:** Emre oturumu açar, adlandırır; oturum CLAUDE.md'yi okur, kimliğini
  `get_session("self")` ile ölçer (scratchpad UUID'si DEĞİL). MODEL koordinatörün işidir
  (`set_session_model`; pahalıya çevirmek Emre onayı ister). "Hazır kıta" adı boşluk kanıtı
  değildir. 🔴 Görev verildiği an ad görev adına çevrilir (`set_session_title`, Emre 19 Eyl).
- **② Görevlendirme:** mesajın İLK SATIRI oturumun ADIDIR = tahta anahtarı, TAM yazılır (tahta
  TAM EŞİTLİK arar). Şartname `oturumlar/<dosya>.md`; dosya sahipliği yazılı değilse tek satır
  "şu dosyalar bende". Hazır kıta açılışta TEK "HAZIRIM" yazar (`oturumlar/HAZIR-KITA.md`).
- **③ Tahta:** `py arac/tahta.py yaz --kim "<AD>" --kime "<ALICI>" --mesaj "…"`; `send_message`
  yalnız tahta arızasında. 🔴 **NOKTA ATIŞI** (Emre, 22 Eyl): mesaj ilgilisinin adına yazılır;
  `HERKES` yalnız ACİL/DURDURUCU ve **`--dayanak` ZORUNLU** (yoksa çıkış 2) — bütün bekçileri
  uyandırır; değilse kimseyi uyandırmaz. **Boş uyanış, dolu turdan ucuz değildir.**
- **④ Bekçi:** **Bash `run_in_background`** + `py arac/tahta_bekci.py --kim "<AD>" --cik`
  (Monitor DEĞİL). Yalnız adına ya da ACİL/DURDURUCU HERKES'e çıkar (bilgi amaçlı HERKES
  yalnız stderr'e teşhis düşer). Çıkınca mesajı işle, **SESSİZCE** yeniden kur; "bekliyorum"
  yazılmaz; **boş uyandıysan ekrana HİÇBİR ŞEY yazma.**
  - **2 saatlik süre tavanı SINIRDIR, arıza değil** (`7.200.000 ms`, azamî): 2 saatte bir
    yeniden kurma NORMAL; sessiz oturum takılmış değildir. Makineler arası iş için oturum
    köprüsü — bekçi yalnız aynı makinenin tahtasını görür, dalda çalışan `main`i görmez.
  - **Nabız damgası:** bekçi her turda `oturumlar/bekci/<AD>.json` yazar (gitignore'da);
    `py arac/bekci_olc.py`: `CANLI` ≤2,5 tur · `KUSKULU` ≤5 · `OLU` · `CIKTI` · `OLCULEMEDI`
    ("ölü" yazılmaz). Eşik aralığın KATIdır. `.bekci_son_*.txt` "son ÖLÜM"dür, nabız değil.
    Sınav `py denetim/ARAC-BEKCI-NABIZ-SINAV-1003.py`.
  - 🔴 **"Takıldı" demeden ÖNCE:** ① teslim gelmiş mi (tahta/`git log`, `D224`) ② `bekci_olc.py`
    ③ ancak ikisi de hayırsa uyandır. [`D258`](dersler/D258-sessiz-bekci-iz-birakmali.md)
  - 🔴 **Kaynak darboğazı kapısı** (Emre, 29 Eyl): koordinatör `py arac/kaynak_durum.py kapat
    --kod <KOD>` ile ilan ettiyse bekçi KURULMAZ, **çıkış 3** (2 kullanım · 1 arıza · **3 =
    kurulamadı, TEKRAR DENEME**) ⇒ arka plan süreçlerini kapat, dur; görev `send_message` ile
    gelir. Kodlar `kaynak_durum.py` `KODLAR`da: `RAM-DARBOGAZI` · `ISLEMCI-DARBOGAZ` ·
    `DISK-DARBOGAZ` · `KOSU`; `--muaf` paketleri dışarıda tutar; kaldırma `kaynak_durum.py ac`.
    Kurulu bekçiyi düşürmez; dosya yoksa/bozuksa yasak yoktur. **Süreci öldürmek talimatı değiştirmez.**
- **⑤ Yatay mesaj:** işçi→işçi tahtadan (§7.1 ③); atama/öncelik/kaynak hükmü koordinatöre.
- **⑥ Toplu okuma:** koordinatör tahtayı bekçi `--toplu 1800` ile 30 dakikada bir tek özet
  satırla okur; işçiler 30 dk gecikme varsayar.
- **⑦ Teslim:** TEK mesaj: ölçtüm · bulamadım · istiyorum + değişen dosyalar; kritikse
  `tahta.json`dan geri okunur. Paylaşılan dosyayı (`data/`, `CLAUDE.md`) koordinatör commitler;
  devralınan dosya için "dosya senin" denir.
- **⑧ Emeklilik:** teslimden sonra DUR; devamı varsa bekçi açık kalır. **Bekçiyi öldürmek tek
  taraflı değil** (Emre, 27 Eyl): teslimin sonunda **"bekçimi öldüreyim mi?"** — koordinatör
  `EVET` (TaskStop, emeklilik) ya da `HAYIR BEKLE`; cevapsız öldürülmez, koordinatör ilk toplu
  okumada cevaplar. Devamı beklenmeyen oturum "Atlas — emekli oturumlar" grubuna taşınır
  (`move_sessions`, Emre 19 Eyl); açık teslimi/sorusu olan taşınmaz. Emekliye yalnız işin
  doğrudan devamı verilir.
- **⚠️ Uyandırma:** tahta mesajı yalnız bekçisi açık oturumu uyandırır; duran/bekçisiz oturuma
  görev `send_message` ile gider (tahtaya da kayıt). "undelivered" = oturum ONAY PENCERESİNDE
  olabilir — yalnız Emre açar, ona bildirilir.

Bağlı eski kurallar: §7 koşu nöbetçisi (≠ tahta bekçisi) · §7.1 ①–⑦ ve TOKEN KURALI ·
`arac/tahta_bekci.py` kullanım notu · `ClaudEmre/SARTNAME.md` ⑤ haberleşme bloğu.
**Çözülmemiş çelişkiler** (hüküm YILDIRIM BAYEZIT/Emre'de, ayrıntı `denetim/PROTOKOL-BUDAMA-0917.md`):
ClaudEmre ⑤ hâlâ send_message diyor · eski "en çok 3 oturum" bugünkü kadroyla çelişiyor ·
⑥'da ACİL istisna yok.

---

## 8. Veri biçimleri

Alan alan tam şema, alan sözlüğü ve kaynak seti: **`VERI-YAPISI.md`**. Veri yazmadan
önce oku. Burada yalnız en sık ihlal edilen üç kural:

- `yerlesimler.js`'te `s:[{d:"..."}]` içindeki devlet kimliği, `uret_petek.py`
  içindeki **`BOYALAR` sözlüğünde tanımlı olmalı**; yoksa bölge boyanmaz.
- **Dönemler çakışmamalı, ters olmamalı, sıfır uzunlukta olmamalı.** Sıfır uzunluk
  gerçek bir hata olarak yaşandı: Tebriz `{f:"1514-09-06",t:"1514-09-06"}` yüzünden
  Çaldıran'dan sonra hiç Osmanlı görünmedi.
- Kronoloji maddelerinde **gün yaz.** Ay hassasiyetli `t:"1526-08"` ayın 1'ine
  genişler ve gün hassasiyetli yerleşim değişimlerinden *önce* sıralanır — senkron
  bozulur.

---

## 9. Komutlar ([`D283`](dersler/D283-komutlar-kosu-bayraklari-1010.md))
```bash
py arac/uret_petek.py     # harita üretimi — TAM İNŞA 7-8 SAAT · koşucu HAVVA (§7)
py arac/uret_devirler.py  # devirler.js — uret_petek'ten SONRA koşar
py arac/renk_olc.py       # 🔴 VERİ DEĞİŞTİYSE ŞART
py arac/denetle.py        # değişmezler · çıkış 0/1/2 (§3)
py arac/odak_olc.py       # kronoloji maddesinin KAMERA ODAĞI — kapıya BAĞLI
py arac/denetle_yayin.py  # yayın kapısı
py arac/surum_damgala.py  # index.html'deki ?v=rNN damgasını yükselt
```
- 🔴 **KOŞU BAYRAKLARI ZORUNLU** (yoksa koşu çıkış 0 ile "biter" ama EKSİKTİR): `MOTOR_YURUYUS=1
  MOTOR_YURUYUS_SAAT=40 MOTOR_UFUK_BANT=40,56,80 MOTOR_COL_UFUK_SAAT=0 MOTOR_SUREC_ISCI=2`
- 🔴 **ÇÖL KELEPÇESİ KALDIRILDI — `MOTOR_COL_UFUK_SAAT=0`** (Emre, 10 Ekim 2026:
  *"sahrada artış olmuyor bir tavan mı koyduk burası için. tavanı kaldır, 5 7 veya
  10 günde ne kadar gidiyorsa o kadar gitsin"*). Kelepçe çöl hücrelerine **banttan
  BAĞIMSIZ sabit** bir eşik yazıyordu (`uret_petek.py:1934`
  `_YR_ESIK[_kel_M] = _COL_UFUK_SAAT * NEHIR_KM_SAAT`) ⇒ 10 günlük bantta Sahra
  7 günde kalıyordu; Orta Asya ise `FEATURECLA == "Desert"` olmadığı için
  kelepçesiz büyüyordu — Emre'nin gördüğü fark TAM BUYDU. `0` yazmak kelepçeyi
  tamamen kapatır (`_YR_KELEPCE = _COL_UFUK_SAAT > 0`) ve çöl de genel bütçeden
  geçer. 🟢 **Kod değişikliği YOK ve bu yol SINAVLI:**
  `denetim/ARAC-B-GORUNUM-KELEPCE-0072.py` YÖN 1'i zaten *"parametre verilmediğinde
  tek küresel sayı, çıktı BİREBİR değişmesin"* diye garanti ediyor.
  ⚠️ Kelepçenin bir yan kazancı vardı (`:2484` *"Sahra ve Rub'ul Hâlî'deki DOLGU
  noktaları"*); yerine ne geldiği İLK KOŞUDA ÖLÇÜLÜR — **§3.4 ⑥.**;
  motor varsayılanları bunları kapatır, zincir koymaz. Koşucu bayrakları loga basar ve teyit
  eder — **beyan yetmez, motorun gördüğü kanıtlanır:** tuz hash'i değişir ("değişen: ORTAM") ·
  işçi düzeni KOŞU 21'le aynı · ilk aşama "▶ YÜRÜYÜŞ" değilse koşu DURDURULUR · bitince AŞAMA
  BİLANÇOSU KOŞU 21'le kıyaslanır, eksik aşama ⇒ **yayına aday değil.** Çıkış 0 "iş yapıldı"
  demek değildir; kısa süre YAPILMAYAN İŞ işaretidir. **Commit mesajında yaşayan ayar KAYITLI değildir.**
- 🔴 **Zincir yayınlanan haritayı üretmez** (yayın `kodla` + `paketle` ürünü) ⇒ zincirin
  **"BAYAT TÜREV" ile durması DOĞRUDUR**; türev adımları ELLE (gözetimsiz yayın bir ürün kararı,
  Emre'de). İniş adım adım, HER ÇIKIŞ KODU okunarak: `kodla.py yay` → `coz-c` (İKİ dosya, §5)
  → `denetle` → `renk_olc` → `paketle.py yenile` → `surum_damgala` → `denetle_yayin`.
  **Doğru olgu, küçük yazılmış ağırlık** da bir kusurdur.
- 🔴 **Yasak betiğe değil KİPE:** `kos_ve_yayinla.py --yayinlama` KOŞTURULUR; `kosu_yayin.py`
  ve `kos_ve_yayinla.py`nin YAYIN KİPLERİ KULLANILMAZ (çıkış 1'de bile yayınlarlar). Zincir
  içindeki `denetle` `coz-c`siz koşar ⇒ kabul ölçümü sayılmaz, elle yeniden koşturulur. Yasak
  riski İÇEREN dosyaya değil riskli KİPE/YOLA yazılır.
- **Palet verinin fonksiyonudur:** veriye dokunan her koşudan sonra `renk_olc.py`.
- **Odak nöbetçisi** (27 Eyl 2026, Emre: *"denetimi yayın kapısına bağla"*): kronoloji
  maddesinin kamera odağı `denetle_yayin.py`ye BAĞLIDIR, iki ayrı sertlikle. ① **kırık
  atıf** (`yer_id`/`odak_yer`/`odak_kimlik`/`odak_kutu_kaynak` yazılmış ama çözülmüyor)
  YENİSİNE 0 tolerans — bilinen borç `denetim/ODAK-TAVAN.json` `bilinen_kusur` LİSTESİNDE
  adıyla beyanlıdır. ② **sayı tavanı** ODAKSIZ 485 · BEYANLI→yabancı 669; yalnız GERİLEME
  bloke eder, iyileşince `--tavan-yaz` ile indirilir. Çözüm `arac/odak_cozum.js`te (node,
  `suzgec.js`in GERÇEK işlevleri — Python kopyası "yanlış temiz" vermişti). Sınav
  `py denetim/ODAK-KAPI-SINAV.py` (İKİ YÖNDE). 🔴 `kapsam_genis:true` + odak yok ⇒ kamera o
  günün OSMANLI sınırına uçar (`app.js:11835`) — yabancı kronolojide odaksızlıktan KÖTÜDÜR.
- Ortamda `python` değil **`py`**. Üretim logu koşarken boş görünür (normal). 🔴 "tüm
  yerleşimlerin peteği geçerli ✓" satırı **kabul ölçütü DEĞİL** ("tüm" yanlış, hata çıkış
  koduna yansımaz) — yerine ① `denetle.py` ÇIKIŞ KODU ② AŞAMA BİLANÇOSU ③ o satır yalnız
  `d:`/`v:` kayıtları için kısmî sinyal. Yayından önce sürüm damgası yükseltilir; Pages ~40-60 sn.
- **Koşu çıktısı her zaman bayattır — yine de yayınlanır** (Emre, 17 Eylül): "YAYIN BAYAT"
  yayını durdurmaz; durduran yalnız koşunun kendi `denetle.py` ihlalidir; yayın inene kadar
  motor donuk. ⚠️ BAYATLIĞI affeder, **GERİLEMEYİ affetmez.** [`D229`](dersler/D229-komutlar-palet-bayat-yayin.md)

## 9.1 🔴 MOTOR KODU DONDURMA — koşular arası (Emre onayı, 25 Eylül 2026)
Önbelleğin **TUZU** dört dosyanın sha256'sıdır: `uret_petek.py` · `renkler.py` ·
`girdi.py` · `motor_onbellek.py`. Biri değişirse **bütün anahtarlar değişir** ⇒
tam yeniden inşa, elle karar yok — doğruluk sigortası; ama tuz her commit'te değişirse
önbellek hiç isabet almaz ([`D284`](dersler/D284-motor-dondurma-kapsam-1010.md)).
1. **Veri koşusu (yalnız `data/`):** motor kodu **DONDURULUR** — dört dosyaya yorum satırı
   bile yazılmaz; zorunluysa koşu ertelenir ya da ②.
2. **Tam inşa koşusu:** biriken motor yamaları (`denetim/*.diff`, `git apply --check` temiz)
   **tek seferde** girer; tuz bir kez değişir.
3. **Koşu SÜRERKEN dört dosyaya dokunulmaz** (koşu parmak izini sınar ve reddeder). Kapsam:
   donan **koşunun OKUDUĞU ağaçtır**, "hiçbir ağaç" değil — ayrı makinede tek kullanımlık
   ölçüm worktree'sinde dokunmak serbest, DÖRT şartla: ① önbellek izolasyonu ÖNCE ÖLÇÜLÜR
   (`MOTOR_ONBELLEK_DIZIN` / `<arac>/../_motor_onbellek` koşucununkiyle aynı olmamalı; ağ yolu ·
   OneDrive · paylaşılan sürücü ⇒ izin düşer) ② `uret_petek.py` koşturulmaz ③ ağaç push
   edilmez, sonunda kaldırılır ④ koşu bitene kadar tuz dosyası içeren commit `main`e girmez.
Kural yazılı olmayan kural değil, UNUTULAN kuraldır. Ayrı geometri tuzu (`MOTOR-LEGO-0925`)
yükü azaltır ama kaldırmaz: `uret_petek.py` tuzda kalmalıdır.

## 10. Çalışma protokolü (kullanıcı tercihi)
- **Onay bekleme**, devam et. Kullanıcı hataları numaralı partilerle bildirir — her maddeyi
  ayrı cevapla; "ayrı madde ile gösterilmeli" = Değişmez 2 ihlali: kırılmayı bul, yaz.
- Görev bitince / soru sorarken **3 beep**; beklenmedik uzun iş bitince **9 beep**. Bekçi
  gerçekleşmiş bir dosya damgasına bağlanır (petek için `data/donemler.js`) — bitti sanıp
  erken haber vermek, hiç vermemekten kötüdür.
```bash
powershell -c "[Console]::Beep(800,300); [Console]::Beep(800,300); [Console]::Beep(800,300)"
powershell -c "1..9 | ForEach-Object { [Console]::Beep(880,250); Start-Sleep -Milliseconds 120 }"
```
[`D230`](dersler/D230-calisma-protokolu-beep.md)

---

## 11. Tekrarlanmaması gereken hatalar
**Dizin: [`dersler/DIZIN.md`](dersler/DIZIN.md)**; sayım `ls dersler/ | grep -cE "^D[0-9]+-"`
(`ls dersler/D*.md` DIZIN.md'yi de sayar — `D267`). Toplu okunmaz. 🔴 **Yeni ders: slogan
DIZIN'e tek satır, vaka `dersler/D<sıra>-<slug>.md`e — buraya yazmak bu dosyayı şişirir**
(10 Ekim gecesi ihlal edildi, BUDAMA-1010 ile ödendi; [`D285`](dersler/D285-tekrarlanmamasi-gereken-1010.md)).
Beyan edilmiş borç sessiz borçtan iyidir — ama beyan ödeme DEĞİLDİR.

En sık aileler:
- **Ölçüm doğru, çıkarım yanlış** — hüküm ile teşhis ayrıdır; raporu kabul etmeden ölç.
- **Denetim var ≠ o soruyu soruyor** — temiz rapor, sorulmayan soruda temiz değildir;
  ölçülemedi ≠ yok ≠ temiz; boş küme her öngörüyü doğrular. Kapının beş kusuru: çağıranı yok ·
  koşuyor ama o soruyu sormuyor · yalnız yorumda var (ya da çıktısı yalan basıyor) · kaydı tek
  makinede · yanlış evrende arıyor. ⇒ Yeni kapı/tavan/istisnada **dört soru:** ① soruyu soruyor
  mu ② çıkış kodunu KİM okuyor ③ hiç çağrılıyor mu ④ kaydı HER MAKİNEDE var mı. Yorumun iddia
  ettiği değişmez KODDA aranmadan doğru sayılmaz (yorum soruyu KAPATIR); "yorum var, kod yok"
  raporu da ölçülmeden kabul edilmez. Yasak komutun METNİNE değil KENDİSİNE yazılır (`git add -A`
  bir `subprocess`ten de çıkar) — çare kanca + her yerde koşan statik tarama. Makineler arası
  kayıt (kanca/izin) Emre'nin kararıdır; kimse başka makinenin `settings`ine dokunmaz.
- **Bayatlayan belge/sayı** — sayı ölçümün fotoğrafıdır; kaynağını (log, alet) aç. Ayna
  görüntüsü: **ÖNERİ üzerinde ölçülen sayı bugünkü durum değildir** — önerilen kümede açık kapı
  "AÇIK" değil **AÇILACAK**'tır; sayının ne zaman kadar **NEREDE** (`data/` mı, öneri mi) ölçüldüğü sorulur.
- **Toplu düzeltme** — `replace(…, 1)` yalnız ilk eşleşmeyi değiştirir; Türkçe/kesme işaretli
  metinde `sed` kullanma; heredoc yerine `Write` + `py <yol>`.
- **Yakın mükerrer yerleşim** — yeni noktadan önce ad (normalleştirilmiş) + 3 km tara.
- **Aracın DESENİ de bir ölçüm parametresidir** — gevşek desen güven telkin eder (`grep 'd:"…"'`
  `id:"…"`yi de yakalar); yazıldığı anda sınanır, tercihen ayrıştırıcıyla değiştirilir.
- **Öngörü ölçümden önce yazılır** (sınav anı + evreniyle); yeni denetim iki yönde
  sınanmadan çalışıyor sayılmaz.
