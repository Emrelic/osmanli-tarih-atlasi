# Tarih Atlası — her oturumun önce okuyacağı dosya

**Her satır bir KURAL; gerekçesi ve vakası [`dersler/`](dersler/DIZIN.md)dedir.** Kural tartışılınca
vakasını aç. 12 Ekim 2026 (BUDAMA-1012): koordinatör / işçi oturum / hazır kıta / tahta / bekçi
düzeni BIRAKILDI — eski tam metin [`D287`](dersler/D287-claude-md-koordinator-donemi-tam-metin-1012.md).

## Çalışma düzeni (Emre, 12 Ekim 2026)
- **Bir iş = bir oturum.** Emre işi doğrudan oturuma söyler; şartname, tahta, bekçi, hazır kıta
  YOK. Paket maddelerinin tek kaydı **kutu**dur. Biriken yığında oturum maddeleri **dokundukları
  dosyaya göre gruplar**, her grubu bir alt ajana yaptırır.
- **İşçi gerekirse önce ALT AJAN** (Agent aracı; aynı dosyaya yazan paralel ajanlar ayrı
  worktree'de). Ayrı oturum yalnız: başka makinede · saatler süren · Emre'yle konuşması gereken
  iş — o zaman Emre'den istenir.
- **Makineler:** HAVVA koşu (RAM/işlemci yer) · UMIT yazma/denetim/araştırma (kasarsa LAB/KASA) ·
  laptop siteye bakış + kutu. Makineler arası köprü Emre'dir.
- **İş bitince üç şart:** ① `py arac/push_kapisi.py` ile push edildi (push edilmemiş iş YAPILMAMIŞTIR)
  ② `py arac/kilit.py birak-hepsi --kim "<AD>"` ③ arka planda süreç kalmadı. Sonra oturum OLDUĞU
  GİBİ bırakılır — compact da emeklilik de yok.
- **Rapor (Emre'ye, iş sonunda): üçlü kural** — ① ne ölçtüm (sayıyla) ② ne bulamadım
  (`bulunamadı` bir sonuçtur) ③ ne istiyorum (seçenekliyse önerinle).
- **Yoklama yok** (ScheduleWakeup/loop/sleep).

## Açılış
**Yalnız bu dosya okunur.** Aşağıdakiler yalnız iş gerektirirse, adıyla ve gerekli bölümüyle:

| Belge | Ne zaman |
|---|---|
| `dersler/DIZIN.md` + `D*.md` | kural TARTIŞILINCA — toplu okunmaz |
| **`KOSU-YAYIN.md`** | 🔴 koşu (HAVVA) · yayın inişi · üretilmiş haritayı ölçme · motor koduna dokunma — ŞART |
| `ONCELIK.md` · `YOL-HARITASI.md` · `YAPILACAKLAR.md` | kapsam/öncelik sorusu |
| `oturumlar/TOPOLOJI.md` | EMRELIC dışında bir makinedeysen |
| `MIMARI.md` · `VERI-YAPISI.md` | motora / veriye dokunacaksan ŞART |
| `BES-ALTYAPI.md` · `DURUM.md` · `OGRENILENLER.md` · `ETIKETLEME.md` | adıyla sorulursa |

Veriye/motora dokunacaksan ek olarak `git log --oneline -10` ve `py arac/durum_tablosu.py`
(sayılar §1.5 ile uyuşmuyorsa önce onu söyle). [`D231`](dersler/D231-belge-seti-acilis-sirasi.md)

🔴 **AĞACIN GERİDEYSE DUR — ÖLÇME:** `git fetch origin --quiet && git rev-list --count HEAD..origin/main`
**0 değilse ölçüm yapma, Emre'ye söyle** — geride bir ağaçtaki sayı **BAŞKA BİR ATLASIN**
sayısıdır. Ölçüm **ayrı worktree'de, `origin/main`den** (`git worktree add <yol> origin/main --detach`);
ana checkout ölçüm zemini değildir. [`D273`](dersler/D273-belge-seti-agac-geride-1010.md)

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
| Değişmez 2s — yabancı senkron | ✓ 1810 YABANCI kırılması · 193 AÇIK (tavan 193) · 798 KAPSAM DIŞI · 227 YIL-TEMSİLÎ BORÇ |
| Değişmez 2i — işgal senkronu | ✓ 171 İŞGAL kırılması, 1 açık (tavan 1) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 13 (tavan 13) — bilinen borç |
| Konum denetimi | 0 nokta kara maskesinin dışında (beklenen 0) |
| Devletler dizini | **897** künye · **704** renk (`renkler.py`) |
| Dizinsiz harita kimliği | ✓ **0** kimlik / 0 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 93 dosya, `s:`+`isg:` alanları — bağlanmamış partiler HARİÇ* |
| Kasıtlı boşluk kimliği | 🟡 **1** kimlik / 106 pencere · *`__BOSLUK__` — hiçbir künyenin kapsamadığı dilim; en yakın kimliğe İTİLMEDİ (`§3.5.1`). Kusur değil, BEYAN* |
| Renkli-künyesiz kimlik | ✓ **0** çiziliyor ama dizinsiz · 🟡 1 ölü renk (kullanılmıyor) · *kapsam: `renkler.py` BOYALAR − (künye `id` ∪ `harita:`)* |
| Renksiz künye — HARİTA DELİĞİ | 🔴 **11** kimlik haritada (`s:`/`isg:`) kullanılıyor ama BOYANMIYOR · 🟡 **11** hiçbir yerde (gerçek sessiz borç) · 🟢 5 BEYANLI boya borcu (`boya_gerekli:true` — tam inşa koşusunu bekliyor, sessiz DEĞİL) · ⚪ 121 yalnız sınır/kronoloji/savaş/kişi katmanında (borç değil) · ⚪ 14 tâbi-çizili (yalnız `v:kid`, delik değil) · *kapsam: künye `id` ∪ veride kullanılan − BOYALAR(`harita:` varsa o) · `v:kid` ayrı kova · katman evreni: `index.html`in yüklediği 13 sınır · 184 kronoloji/olay · 2 savaş · 1 kişi dosyası (kimlik alanları `durum_tablosu.py`de) · `__BOSLUK__` muaf* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **41** kartvizit dolu |
| Kişi kaynağı | TDV 257 · başka 2 · bulunamadı BEYANI 29 · kaynaksız 0 |
| Harita penceresi | `box(-180, -60, 180, 85)` |
| Yayın | **r12206** · `df0a2b28` |

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
  DEĞİLDİR: `OLCULEMEDI_KOVA`ya ADIYLA düşer. **Otomasyon cümleyi değil çıkış kodunu okur.**
  🔴 Ana checkout'ta Değişmez 8 `coz-c`siz ÖLÇÜLEMEZ (çıkış 2) ⇒ kabul ölçümü ayrı worktree'de
  (`push_kapisi.py` bunu kendisi yapar).
- 🔴 **Vaka bayatlayabilir: vakaya dayanıp bugünkü durum hükmü verilmez, bugün ÖLÇÜLÜR.**
- 🔴 **Kapının YERİ bir kusur sınıfıdır:** denetleyici soruyu SONRADAN sorar → kusuru BULUR;
  yazıcı sormazsa → kusuru YAZAR. Yeni kapıda **"NE ZAMAN soruyor"** da sorulur.
- 🔴 **Bir ayrımın TEK OTORİTESİ olur:** aynı soruyu soran iki uygulama yedeklilik değil iki
  ayrı davranıştır. Çare çoğaltmak değil **birleştirmek** (örnek `arac/aciliyet.py`). Yeni kapı
  onaylanmadan önce o soruyu soran bir kapı **VAR MI** diye sorulur.
- **1 — sahipsizlik yok.** Var olduğu tarihte sahipsiz yerleşim = haritada delik. Sahipsiz
  sayısı §1.5'teki beklenenin üstüne çıkarsa yeni delik açılmıştır.
- **2 — sessiz toprak değişimi yok.** Her `d:`/`v:` kırılmasının **±30 gün** içinde kronoloji
  maddesi olmalı. **Ölçütü gevşetme.**
- **3 — tarih × yerleşim × petek × bölge çelişmez** (henüz sağlanmıyor). Kusurun çoğu `m:`
  alanının zaman penceresi eksikliği (`kd:` çözer). 🔴 **Motor `kd:`yi OKUMAZ** ⇒ gövde
  çakışması `kd:` ile düşmez; iki sınıfı karıştırmak boşa 7-8 saatlik tam inşa istetir.
- **8 — şehir bölgesi ülke sınırını aşamaz** (8a gövde · 8b Osmanlı `BOLGELER` payı). **Motor
  ÇIKTISINI ölçer** — veri düzeltmesi ancak koşudan sonra görünür. Muafiyetler `denetle.py`de
  gerekçeli. [`D237`](dersler/D237-sehir-bolgesi-sinir-asamaz.md)

### 3.4 🔴 TAVAN DİSİPLİNİ — her `BEKLENEN_*` için ([`D275`](dersler/D275-tavan-disiplini-1010.md))
0. Tavan YAZILDIĞI ANDA ölçülür. 1. Tavan BUGÜNKÜ ölçümdür. 2. TAVAN + SABİT AYNI COMMIT'TE.
3. Yalnız GERİLEME bloke eder; İYİLEŞİNCE TAVAN İNER. 4. **Tavanı oturum önerir, EMRE onaylar**;
`--tavan-yaz` körü körüne kullanılmaz. 5. İstisna listesi de tavandır — **en iyi istisna
yazılmayandır.** 6. Tolerans yuttuğunu ADIYLA söyler. 7. Düzeltme ile görünürlük AYRILAMAZ:
birleştir ya da aradaki hâli BEYAN ET (`boya_gerekli:true`). **Yanlış renk YALAN, beyanlı delik İTİRAFTIR.**

## 3.5 Denetimin görmediği sınıflar ([`D276`](dersler/D276-gorulmeyen-siniflar-bosluk-delik-1010.md))
- **Hayalet devlet:** yeni `s:` dönemi yazarken devletin ömrünü `data/devletler.js` `f`/`t`'den
  kontrol et. [`D203`](dersler/D203-hayalet-devletler.md)
- **Devlet var, yeri yanlış:** `4c`/`4d` "oraya hiç ait miydi" sormaz; ölçülemiyorsa
  `ölçülemedi` yaz. [`D204`](dersler/D204-devlet-var-yeri-yanlis.md)
- **Künye aşımının üç sınıfı, çareleri ters:** ① devlet öldü → dönemi KISALT · ② aynı polity
  sürüyor → künyeyi GENİŞLET · ③ ardıl yapı geçti → ardıl künye. **İlk iş SINIFLANDIRMA.** Üç
  haneli yılda `pad()` şart. [`D205`](dersler/D205-uc-sinif-careleri-ters.md)
- **Ters yön:** sınır kayması önerilince **iki uç da ölçülür**; devletin yıkılışı ≠ o yerin
  fethi. [`D206`](dersler/D206-ters-yon-osmanli-fazla.md)
- 🔴 **Beyan edilen boşluk haritada bir DELİKTİR** (`__BOSLUK__` boyanmaz, devralınmaz). ① şehir
  adlı tanık ARA ② yaklaşıklık kullanıcıya görünüyorsa bölge sahibi + beyan, görünmüyorsa
  `__BOSLUK__`. **Beyansız yaklaşıklık, beyanlı boşluktan kötüdür.**

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
  sitesi. Kaynak gizlenmez; bulunamadıysa `bulunamadı`. [`D209`](dersler/D209-kirmizi-cizgi-ara-bolge.md)
- **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01` (hicrî kaynakta aşağıdaki sözleşme); **yıl
  bilinmiyorsa yıl yazılmaz** ("temsilî" damgası meşrulaştırmaz). Künyenin `f:`/`t:` günü
  KAYNAK DEĞİLDİR; kaynak yıl diyorsa yıl yazılır, fark bildirilir. Pencere uçları
  (`1923-10-29`) sınır işaretidir. [`D210`](dersler/D210-hassasiyet-kaynagi-asamaz.md)
- 🔴 **HİCRÎ YIL — VARSAYILAN GÜN SÖZLEŞMESİ:** hicrî yıl 1 Ocak'ta başlamaz ⇒ `YYYY-01-01`
  kaynağın DIŞLADIĞI güne düşer: mîlâdî yıl → `YYYY-01-01` · **hicrî yıl → hicrî aralık ∩
  kaynağın mîlâdî yılı ∩ (varsa) ay, kesişimin İLK günü** · kaynakta gün → O GÜN · seçim
  `ic_not`ta hicrî aralıkla BEYAN. Şartlar: (i) "gün yoksa" KÜNYE BAŞINA sınanır · (ii) formülden
  SONRA öncül/ardıl ucuyla ÇAKIŞMA KONTROLÜ zorunlu · `t`/`f` zinciri BİRLİKTE kaydırılır · iki
  kaynaklı uç arasındaki boşluk ZORLA KAPATILMAZ (`__BOSLUK__`) · iki madde çelişirse DAHA DAR
  KAPSAMLI esas; madde kendiyle çelişirse `ÖLÇÜLEMEDİ`, değer korunur. `kesinlik:"yil"` yanlış
  günü doğru yapmaz; gün VARKEN yıl yazmak ayrı kusurdur.
- **Hassasiyet alanı:** tarih kaynağın desteklediği en kaba güvenli düzeyi taşır; `YYYY-MM-01`
  "ayın 1'i" ile "ay biliniyor"u ayırt edemez — hassasiyet AÇIKLAYAN alandan okunur. Türetilen
  sayı alıntıya yazılmaz. [`D213`](dersler/D213-ay-ayin-birine-kodlanmis.md)
- **TDV tuzakları:** ① ölü slug (302) · ② canlı slug, yanlış madde · ③ boş gövde · ④ boilerplate
  (çekilemedi ≠ yok) · ⑤ `000` taşıma arızası · ⑥ kaynak kendiyle çelişebilir — **önce cümleyi
  doğru ayrıştır** · ⑦ çıkarıcının "okuyamadım"ı belgeyle ilgili değil · ⑧ **rakamı taşıyan
  cümlenin neyi tarihlediği okunur** · ⑨ arama ADAY üretir, `GET` DOĞRULAR. [`D211`](dersler/D211-tdv-tuzak-5-8-once-ayristir.md)
- **Arama:** `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`; "TDV'de yok" demeden ARA —
  **TDV olay değil yer-kişi ansiklopedisidir** (olayın YERİNE ya da KİŞİSİNE bak).
  [`D217`](dersler/D217-tdv-olay-degil-yer-kisi.md) · [`D218`](dersler/D218-tdv-isabet-orani-81.md)
- **Türkçe yazım:** `d:`e `devletler.js`teki gerçek `id:`; "yok" demeden `bolge:` taranır.
  `"İ".lower()` iki kod noktası verir → `denetim/ARAC-NORMAL-0903.py`. [`D215`](dersler/D215-turkce-yazim-ekseni-lower.md)

---

## 5. Dosya haritası
```
index.html · js/app.js · css/style.css   uygulama (yeni data/*.js → index.html'e satır)
data/yerlesimler*.js     ELLE YAZILAN coğrafî kaynak — CANLI liste: arac/girdi.py GIRDI_DOSYALARI
data/olaylar*.js         kronoloji ÇEKİRDEĞİ (Değişmez 2 evreni)
data/kronoloji_sinir*.js 🔴 DA Değişmez 2 EVRENİNDE (Emre, 24 Eyl 2026)
data/kronoloji*.js       öteki kronoloji dosyaları: KUYRUK (Değişmez 2 evreninde DEĞİL)
data/devletler.js        künye + `harita:` boya anahtarı
data/padisahlar.js · kisiler.js · savaslar.js · sehirler.js
data/donemler.js · devletler_harita.js · bolgeler.js   ÜRETİLMİŞ — ELLE DÜZENLEME
arac/uret_petek.py       TEK üretim betiği · arac/renkler.py BOYALAR · arac/denetle.py
arac/push_kapisi.py      main'e TEK yol · arac/kilit.py dosya kilidi
veri-kaynak/             motorun girdi verisi (Natural Earth vb.)
dersler/ · denetim/ · oturumlar/ · assets/portreler/
```
**Canlı girdi yalnız `GIRDI_DOSYALARI`dan okunur** — burada liste tutulmaz:
`py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI));[print(' ',f) for f in girdi.GIRDI_DOSYALARI]"`
[`D219`](dersler/D219-dosya-haritasi-tam.md) · üretilmiş haritayı ölçmek: `KOSU-YAYIN.md` §A.
- **Ayrı dosya ≠ ayrı ad alanı:** `data/<tur>_<kısaltma>.js` → `window.<TUR>_<KISALTMA>`;
  dosya verirken değişken adı da verilir. Süzgeç tanımadığını sessizce elemez, sayıp basar.
  [`D225`](dersler/D225-ad-alani-kaynak-sahipligi.md)

## 6. Kapsam genişlemesinin sırası
Dizin katmanı → yerleşim yoğunluğu → harita penceresi. **Nokta yoğunluğu sağlanmadan pencere
açılmaz** (kenar petekleri dünyaya yayılır). [`D220`](dersler/D220-kapsam-genisleme-sirasi.md)

---

## 7. Dosya kilidi, commit, push — paralel oturumların kuralı
- 🔴 **DOSYA KİLİDİ:** bir dosyanın o anki sahibi, kilidi kimdeyse odur. Yazmadan önce
  `py arac/kilit.py al <dosya> --kim "<AD>"` → **0** sende · **1** başkasında, SIRADASIN ·
  **2** ÖLÇÜLEMEDİ (yazma) · **3** yanlış kullanım. Boşta iş varsa onu al; boşta dosya
  kalmadıysa kuyrukta bekle. Bitince `birak` / `birak-hepsi`. Sınav `py denetim/ARAC-KILIT-SINAV-1011.py`.
  Kanca `arac/kilit_kanca.py` (Write/Edit önüne takılır) — **kurulumu YALNIZ Emre yapar.**
  Ölçülemedi ⇒ MEŞGUL · otomatik devralma YOK (bayat kilidi `zorla-birak --gerekce` düşürür) ·
  ⚠️ kilit **BU MAKİNEYE** aittir, başka makinedeki kilit görünmez.
- 🔴 **`main`e push YALNIZ `py arac/push_kapisi.py --kim "<AD>"`dan** (`--kuru` = itmeden sına).
  Kapı: `__MAIN_PUSH__` kilidi → fetch/rebase (çatışmada DURUR) → ayrı worktree'de `coz-c` +
  `denetle` 0 (site dosyası değiştiyse `denetle_yayin` de 0) → push → geri okuma. Tuz dosyası
  `--tuz-onay`, motor çıktısı `--uretilen-onay` ister; > 95 MiB dosya reddedilir. Çıkış 0/1/2/3.
  Ölçülemedi (2) yalnız `--olculemedi-kabul "<gerekçe>"` ile geçer; İHLAL (1) hiç geçmez.
  Veri değiştiren oturum `paketle.py yenile` + `surum_damgala.py`yi kendisi koşturur (yoksa site eskiyi okur).
- **Üretilen `data/*.js` yalnız koşucunundur (HAVVA);** çatışması birleştirilmez, **yeniden üretilir.**
- **Commit:** dosyalar **adıyla** — dizin pathspec'i ve `git add -A` YASAK; pathspec commit'te de
  tekrarlanır, `git show --name-only` ile doğrulanır (`git add -- <adlar>` · `git commit -F
  <mesaj-dosyası> -- <aynı adlar>`). Aynı klasörde birden çok oturum aynı index'i paylaşır.
  [`D223`](dersler/D223-commit-istisnasi-pathspec.md)
- 🔴 **SÜREÇ ÖLDÜRME:** hedefi **SÜREÇ KİMLİĞİNDEN BAŞKA** bir şeyle (ad · zaman · komut satırı
  deseni · başlık · dizin) seçen her öldürme YASAK. Tek meşru ölçüt **KENDİ başlattığın PID ve
  ALT AĞACI** (`taskkill /T /PID <kendi>`) — makinede başka oturumlar koşar.
- 🔴 **Ajanlar (alt ajanlar DAHİL) birbirinin dizinine yazmaz:** kendi worktree'sine ya da
  **`scratchpad/<GÖREV-ADI>/`**; `denetim/` yalnız TESLİM içindir. Kirlenmiş sınavın sonucu ölçüm değildir.
- **`uret_petek.py`yi yalnız HAVVA koşturur;** koşu ayrı worktree'de, sürerken o ağacın `data/`
  ve `arac/`ı donuktur. Koşu kuralları: `KOSU-YAYIN.md`. [`D221`](dersler/D221-dosya-sahipligi-uretim-kilidi.md)

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

## 9. Komutlar
```bash
py arac/denetle.py        # değişmezler · çıkış 0/1/2 (§3)
py arac/renk_olc.py       # 🔴 VERİ DEĞİŞTİYSE ŞART (palet verinin fonksiyonudur)
py arac/odak_olc.py       # kronoloji maddesinin KAMERA ODAĞI — yayın kapısına BAĞLI
py arac/paketle.py yenile # site paketleri — veri değiştiyse
py arac/surum_damgala.py  # index.html'deki ?v=rNN damgasını yükselt
py arac/denetle_yayin.py  # yayın kapısı (~9 dk)
py arac/push_kapisi.py --kim "<AD>"   # main'e TEK yol (§7)
py arac/uret_petek.py     # TAM İNŞA 7-8 SAAT — yalnız HAVVA, bayraklar KOSU-YAYIN.md
```
- Ortamda `python` değil **`py`**. Kabul ölçütü `denetle.py` **ÇIKIŞ KODU**dur; "tüm
  yerleşimlerin peteği geçerli ✓" satırı kabul ölçütü DEĞİLDİR.
- **Odak:** kırık atıf (`yer_id`/`odak_*` yazılmış ama çözülmüyor) YENİSİNE 0 tolerans;
  `kapsam_genis:true` + odak yok ⇒ kamera Osmanlı sınırına uçar — odaksızlıktan KÖTÜDÜR.
- 🔴 **`coz-c` BİR DİRİLTİCİDİR:** `kodla.py yay` çıkış **0** VERMEDEN `coz-c` yazılmaz; ikisi
  **tek satırda zincirlenmez** (11 Ekim'de koşu çıktısı ezildi). Ayrıntı `KOSU-YAYIN.md` §C.

## 9.1 🔴 MOTOR KODU DONDURMA ([`D284`](dersler/D284-motor-dondurma-kapsam-1010.md))
Önbelleğin **TUZU** dört dosyanın sha256'sıdır: `uret_petek.py` · `renkler.py` ·
`girdi.py` · `motor_onbellek.py`. Biri değişirse **bütün anahtarlar değişir** ⇒ tam yeniden
inşa. Veri koşusunda bu dört dosyaya yorum satırı bile yazılmaz; biriken motor yamaları tam
inşada **tek seferde** girer; **koşu sürerken** tuz dosyası içeren commit `main`e girmez
(`push_kapisi.py` `--tuz-onay` ister — HAVVA'da koşu olmadığını doğrula). Ayrıntı `KOSU-YAYIN.md` §D.

## 10. Çalışma protokolü (kullanıcı tercihi)
- **Onay bekleme**, devam et. Kullanıcı hataları numaralı partilerle bildirir — her maddeyi
  ayrı cevapla; "ayrı madde ile gösterilmeli" = Değişmez 2 ihlali: kırılmayı bul, yaz.
- Görev bitince / soru sorarken **3 beep**; beklenmedik uzun iş bitince **9 beep**. Bitti
  sanıp erken haber vermek, hiç vermemekten kötüdür.
```bash
powershell -c "[Console]::Beep(800,300); [Console]::Beep(800,300); [Console]::Beep(800,300)"
powershell -c "1..9 | ForEach-Object { [Console]::Beep(880,250); Start-Sleep -Milliseconds 120 }"
```
[`D230`](dersler/D230-calisma-protokolu-beep.md)

---

## 11. Tekrarlanmaması gereken hatalar
**Dizin: [`dersler/DIZIN.md`](dersler/DIZIN.md)** — toplu okunmaz. Yeni ders: slogan DIZIN'e
tek satır, vaka `dersler/D<sıra>-<slug>.md`e — **buraya yazılmaz.** Beyan edilmiş borç sessiz
borçtan iyidir — ama beyan ödeme DEĞİLDİR.

- **Olgu bir DOSYADA yaşıyorsa hüküm verilmez, ÖLÇÜLÜR** — ve hükmün MAKİNESİ sorulur ("makinemi
  evren sandım"). Ölçüm doğru, çıkarım yanlış olabilir: raporu kabul etmeden ölç.
- **Denetim var ≠ o soruyu soruyor** — ölçülemedi ≠ yok ≠ temiz; boş küme her öngörüyü doğrular.
  Yeni kapı/tavan/istisnada **dört soru:** ① soruyu soruyor mu ② çıkış kodunu KİM okuyor ③ hiç
  çağrılıyor mu ④ kaydı HER MAKİNEDE var mı. Yorumun iddia ettiği değişmez KODDA aranır.
  Yasak komutun METNİNE değil KENDİSİNE yazılır.
- **Bayatlayan belge/sayı** — sayı ölçümün fotoğrafıdır; kaynağını aç. ÖNERİ üzerinde ölçülen
  sayı bugünkü durum değildir; sayının NEREDE (`data/` mı, öneri mi) ölçüldüğü sorulur.
- **Toplu düzeltme** — `replace(…, 1)` yalnız ilk eşleşmeyi değiştirir; Türkçe/kesme işaretli
  metinde `sed` kullanma; heredoc yerine `Write` + `py <yol>`.
- **Yakın mükerrer yerleşim** — yeni noktadan önce ad (normalleştirilmiş) + 3 km tara.
- **Aracın DESENİ de bir ölçüm parametresidir** — gevşek desen güven telkin eder; yazıldığı
  anda sınanır, tercihen ayrıştırıcıyla değiştirilir.
- **Öngörü ölçümden önce yazılır**; yeni denetim iki yönde sınanmadan çalışıyor sayılmaz.
- **Commit mesajındaki ayar KAYITLI değildir;** ADI yetmez, YÜRÜRLÜK GÜNÜ de yazılır.
