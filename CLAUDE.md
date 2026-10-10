# Tarih Atlası — her oturumun önce okuyacağı dosya

**Her satır bir KURAL; gerekçesi ve vakası [`dersler/`](dersler/DIZIN.md)dedir** (17 Eylül
2026 budaması: 167 → 25 KB, hiçbir kural silinmedi; sınav
`py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --sina`). Kural tartışılınca vakasını aç.

## Belge seti ve açılış
**AÇILIŞTA YALNIZ İKİ BELGE OKUNUR: bu dosya + kendi şartnamen** (`oturumlar/<ADIN>.md`).
🔴 **Görevsiz açıldıysan (adın "… hazır kıta …"): şartnamen [`oturumlar/HAZIR-KITA.md`](oturumlar/HAZIR-KITA.md)dir
— şimdi oku ve harfiyen uygula** (tek "HAZIRIM" tahta mesajı, bekçi, sessizlik, tek teslim,
iş bitince bekçiyi öldür).
Aşağıdakiler **yalnız iş gerektirirse, adıyla ve gerekli bölümüyle** açılır — hiçbiri "her
oturumda" değildir (4 belge = 440 KB/oturumdu; 17 Eylül 2026 token kararı, Emre).

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

🆕 🔴 **AĞACIN GERİDEYSE DUR — ÖLÇME** (9 Ekim 2026). `git log` koşturmak yetmez;
sonucu **`origin/main` ile KARŞILAŞTIRILIR**:
```bash
git fetch origin --quiet && git rev-list --count HEAD..origin/main
```
**0 değilse ÖLÇÜM YAPMA, DUR ve koordinatöre bildir.** Geride bir ağaçta yapılan
ölçüm yanlış değil — **BAŞKA BİR ATLASIN** ölçümüdür, ve hiçbir kapı bunu yakalamaz.
⚠️ Ölçülen vaka: UMIT'in `C:\atlas`'ı **44 commit** geriydi ve bütün kıtalar orada
açılıyordu; o ağaçta bu gecenin **42 inişi YOKTU** (Harput V2 · EPOK-SAHIP ·
bayat-taban kapısı · BOYA · gün sayacı · düzeltilmiş BÜTÜN tavanlar).
📌 Bu, `_sahiplik_uygula`ya aynı gece koyulan **bayat-taban kapısının kör noktası**:
o kapı YAMANIN tabanını ölçer, **İŞÇİNİN GÖZÜNÜ** değil. Yama taze olsa bile
bayat bir ağaçta ölçülen sayı bayattır.
🔴 Ve ölçüm **ayrı worktree'de, `origin/main`den** yapılır:
`git worktree add <yol> origin/main --detach`. Ana checkout okuma tabanıdır,
ölçüm zemini değil.

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
**Her veri değişikliğinden sonra `py arac/denetle.py`** — tek kapı odur.
🆕 🔴 **ÜÇ ÇIKIŞ KODU (4 Ekim 2026): `0` temiz · `1` İHLAL VAR · `2` ÖLÇÜLEMEDİ.**
Kod 2 yeni ve bir kusuru kapatıyor: araç *"Ölçülemeyen soru TEMİZ DEĞİLDİR"*
cümlesini basıp **`SONUÇ: temiz` + çıkış 0** veriyordu. Ölçülen vaka — HAVVA'da
shapely yok ⇒ Değişmez 8 ve konum denetimi atlanıyor, araç yine "temiz" diyordu;
EMRELIC'te de `devletler_harita.js` diskte olmadığı için aynısı.
⚠️ **BU ÖRNEK TARİHÎDİR, KAPANDI** (HAVVA ölçtü, 6 Ekim 2026: shapely 2.1.2 + rasterio
1.5.2 KURULU; 5 Ekim'de o makinede `denetle.py` çıkış 0 verdi ve D8 + konum GERÇEKTEN
koştu). Kural yerinde, **örneği bayat** — ve koordinatör bu örneği bugünkü ölçüm sanıp
Emre'den gereksiz bir karar istedi (`SABAH-1004 ⑰`de düzeltildi). ⇒ Bir kuralın VAKASI
bayatlayabilir; vakaya dayanıp **bugünkü durum hükmü verilmez**, bugün ÖLÇÜLÜR. Örneğin
bayatlaması kuralı zayıflatmaz: `OLCULEMEDI_KOVA` bağımlılık dışında da dolar
(dosya yok · API değişti · ağ yok). **Otomasyon
cümleyi okumaz, çıkış kodunu okur.** Yeni topolojide LAB denetleyici: eksik
bağımlılıklı bir LAB, ölçemediği depoyu temiz raporlardı. Ölçülemeyen her soru
`OLCULEMEDI_KOVA`ya ADIYLA düşer (sayı değil LİSTE) ve hükümde basılır; ihlal
varsa hüküm 1'dir ama eksik ölçüm **yine de görünür** — biri ötekini gizlemez.
Sınav 12 soru, iki yönde, biri GERÇEK koşulda:
`py denetim/ARAC-OLCULEMEDI-KAPI-SINAV-1004.py`. Eski ölçütler
[`D202`](dersler/D202-uc-degismez-tam-metin.md)de birebir duruyor, `denetle.py` hepsini
daha geniş evrende sorar.
- **1 — sahipsizlik yok.** Var olduğu tarihte sahipsiz yerleşim = haritada delik. Sahipsiz
  sayısı §1.5'teki beklenenin üstüne çıkarsa yeni delik açılmıştır (beklenenler kasıtlı
  çöl/dolgu noktaları).
- **2 — sessiz toprak değişimi yok.** Her `d:`/`v:` kırılmasının **±30 gün** içinde kronoloji
  maddesi olmalı. **Ölçütü gevşetme.**
- **3 — tarih × yerleşim × petek × bölge çelişmez** (henüz sağlanmıyor). Kusurun %93'ü `m:`
  alanının **zaman penceresi** eksikliği (`kd:` çözer); ~%1'i eksen kusuru ve `kd:` onu
  çözmez. `OSMANLI` ile `tâbi` çelişki SAYILMAZ.
  🔴 **`kd:` yalnız BU ÖLÇÜMÜ değiştirir — motor `kd:`yi OKUMAZ.** Ölçüldü (20 Eylül 2026,
  KD-ZAMAN-0920): `uret_petek.py`de `kd` geçen satır **0**; `kd_oku`/`kd_gun`u çağıran tek
  dosya `denetle.py`. `m:` motorda yalnız `k12_merkez` ve BÖLGELER katmanındadır, motorun
  kendi yorumu "toprak boyaması etkilenmiyor" der (`uret_petek.py:1051`). ⇒ Gövde
  çakışması / üst üste binme `kd:` ile DÜŞMEZ ve koşu istemez; o kusur
  `donemler.js` + `devletler_harita.js` gövdelerindedir. İki kusur sınıfı tek cümleyle
  anılırsa bir oturum KOCA BİR KOŞUYU boşa ister — bir kez tam bu oldu.
  ⚠️ Bu cümle uzun süre "40 dakikalık koşu" diyordu; sayı BAYATTI. Ölçüldü
  (HAVVA, 9 Ekim 2026, `uretim_canli.log`): tam inşa **7-8 SAAT**. Yani boşa
  istenen şey bir öğle arası değil, bir GECE — kural zayıflamıyor, güçleniyor.
- **8 — şehir bölgesi ülke sınırını aşamaz** (Emre H-0069/H-0086, 27 Eyl 2026). İki soru,
  iki tavan: **8a** gövde, o gün geçerli D/E/F hattını aşıp karşı yakaya ≥ 5 km uzanan
  yerleşim peteği · **8b** Osmanlı `BOLGELER` poligonunun yabancı gövdeye düşen payı.
  **Motor ÇIKTISINI ölçer** — veri düzeltmesi ancak koşudan sonra görünür. Tavan bugünkü
  ölçümdür (dondurma, onay değil); yeni D hattı tavana değil "YENİ KAPSAM" kovasına düşer
  (`--d8-defter-yaz`). Muafiyetler (eksklav · menderes · `__BOSLUK__` · tâbi · `isg:` ·
  C/YOK hattı) `denetle.py`de gerekçeli. [`D237`](dersler/D237-sehir-bolgesi-sinir-asamaz.md)

### 3.4 🆕 🔴 TAVAN DİSİPLİNİ — her `BEKLENEN_*` için, istisnasız
0. 🔴 **TAVAN, YAZILDIĞI ANDA ÖLÇÜLÜR** — "bugünkü ölçüm" yetmez. Ölçülen vaka (6 Ekim):
   kaynaksızlık sayıları **bir günde 5 kayıt** oynadı (öngörü 1968/333, ölçüm 1930/371;
   bir gün önceki 1935/366 de bayattı). ⇒ Saatler önce ölçülmüş bir tavanı yazmak, bayat
   bir sabit dondurur. Yazmadan hemen önce ölçüm **yeniden koşturulur** ve fark
   **ADIYLA** karşılaştırılır (geçiş dosyası: hangi kayıt hangi kovadan hangisine geçti).
1. **Tavan BUGÜNKÜ ÖLÇÜMDÜR.** Geleceğin değeri yazılmaz: ölçüm 6 iken 12 yazmak
   **tavanla susturulmuş borç** üretir ve kapı o borcu bir daha hiç göstermez.
   (5-6 Ekim gecesi vaka: iran künyesi borcu tavana yazılmış, kapı görüyordu,
   bir oturum "kapı bu sınıfı görmüyor" diye rapor etti — kör olan kapı değildi.)
2. 🔴 **TAVAN + SABİT AYNI COMMIT'TE.** Bir düzeltme tavanı oynatıyorsa, yeni sabit
   o düzeltmeyle **aynı commit'te** iner. Ayrılırsa arada kalan commit'te kapı
   **DOĞRU çıktıyı yanlışlıkla REDDEDER** (ya da tersi: gevşek tavan yeni borcu yutar).
   ⚠️ Bu kural 5-6 Ekim gecesine kadar YAZILI DEĞİLDİ ve koordinatör onu dört kez
   uyguladı (`BEKLENEN_MUKERRER` · `OLU_ISTISNA` · `2S_YALNIZ_TARAF` · `BAYAT_KOPYA`)
   — bir işçi onu arayıp **bulamadı**. `§9.1`in cümlesi: *kural yazılı olmayan kural
   değil, UNUTULAN kuraldır.*
3. **Yalnız GERİLEME bloke eder; İYİLEŞİNCE TAVAN İNER.** İyileşmiş bir ölçümde eski
   tavanı bırakmak, aradaki payı sessiz borç yapar.
4. **Tavanı İŞÇİ ÖNERİR, KOORDİNATÖR YAZAR** (`§7` dosya sahipliği). İşçi ölçer ve
   önerir; `--tavan-yaz` gibi yardımcılar **körü körüne kullanılmaz** — ölçülen vaka:
   `ODAK-TAVAN.json`da o bayrak evreni genişletip 3306 kalemi affediyordu.
5. **İSTİSNA LİSTESİ DE TAVAN AİLESİDİR** (`BILINEN_AYRI`, `bilinen_kusur`): sayı değil
   **LİSTE** tutar, ve bir girdinin "ölü" olup olmadığı **TÜKETİCİYE GÖRE** sorulur —
   aynı liste iki işlev tarafından okunuyorsa birinde ölü, ötekinde CANLI olabilir.
   📌 Ve ölü istisna zararsız değildir: bugün hiçbir şeyi susturmayan bir istisna,
   yarın gerçek bir ihlali susturur. **En iyi istisna, yazılmayan istisnadır.**

## 3.5 Denetimin görmediği sınıflar
- **Hayalet devlet:** yeni `s:` dönemi yazarken devletin ömrünü `data/devletler.js`
  `f`/`t`'den kontrol et; bölgesel teslim gecikmesi aylar mertebesindedir, yıllar değil.
  [`D203`](dersler/D203-hayalet-devletler.md)
- **Devlet var, yeri yanlış:** `4c`/`4d` "künye penceresini aşıyor mu" sorar, "oraya hiç ait
  miydi" sormaz. Yöntem: kimliğin menzilini sayıya çevir (boylam, kol bitiş tarihi), veriyi
  ona karşı tara; ölçülemiyorsa `ölçülemedi` yaz. [`D204`](dersler/D204-devlet-var-yeri-yanlis.md)
- **Künye aşımının üç sınıfı, çareleri ters:** ① devlet öldü → dönemi KISALT · ② aynı polity
  sürüyor → künyeyi GENİŞLET · ③ ardıl yapı geçti, toprak dolu → ardıl künye (kısaltmak delik
  açar; ardıl künyenin penceresi de TUTMALI). **İlk iş düzeltme değil SINIFLANDIRMA;** ölçek
  ve görünürlük sınıfı belirlemez. "Kimlik yok" demeden `devletler.js` TARANIR (tahmin edilen
  id aranmaz). Üç haneli yıl dizgi karşılaştırmasında `pad()` şart. [`D205`](dersler/D205-uc-sinif-careleri-ters.md)
- **Ters yön:** bir sınır kayması önerildiğinde **iki uç da ölçülür** — düzeltme hatayı öbür
  tarafa taşıyabilir. Noktasızlık iki yöne hata üretir (yön komşunun kimliğine bağlı).
  Devletin yıkılışı ≠ o yerin fethi. [`D206`](dersler/D206-ters-yon-osmanli-fazla.md)

---

## 4. Kaynak kuralı
- **İslâm dünyası, Osmanlı ve komşuları: TDV İslâm Ansiklopedisi birincil;** çelişirse TDV
  esastır. TDV'nin kapsamadığı coğrafya/tanecikte akademik kaynak meşrudur ve `kaynak:`
  alanına AÇIKÇA yazılır. **Vikipedi tek dayanak değildir.** Küçük model (Haiku) kullanılmaz.
- **Atlas referans değildir, mamul üründür** (Emre, 13 Eylül): yerleşim dönemi, künye günü,
  komşu kaydın günü, atlas koordinatı DAYANAK OLAMAZ; çelişkide ATLAS düzelir. **Komşu günü
  şartlı serbest:** komşunun günü kendi kaynağına dayanıyor + hedefte kaynak gün vermiyor +
  aynı olay/süreç ve yakın konum + kayda "gün komşudan: <komşu> · <kaynağı>" yazılır;
  zincirleme devralma yasak. [`D207`](dersler/D207-atlas-referans-degil.md)
- **Bayrak kuralı:** kaynakta kesin okunan "şu yer, şu tarihte, şu devletin" tanıklığı
  `data/kaynakli_halka_<kısaltma>.js`e yazılır (şema `VERI-YAPISI.md`); örtülü, çıkarım,
  istisna cümlesi, bölgeden şehre taşınan hüküm, atlas kaydı halka almaz; iki ayrı kaynağın
  uçları birleştirilmez. [`D208`](dersler/D208-bayrak-kurali.md)
- **Kırmızı çizgi** (Emre, 9 Ağu): dışarıda yalnız akademik/güvenilir kaynak. KULLANILMAZ:
  forum · blog · içerik çiftliği · kaynaksız derleme · YZ üretimi metin · popüler tarih
  sitesi. Bağlayıcı olan kırmızı liste; girmeyen kurumsal kaynak adıyla kabul edilir.
  Kaynak gizlenmez; bulunamadıysa `bulunamadı` yazılır. [`D209`](dersler/D209-kirmizi-cizgi-ara-bolge.md)
- **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`; **yıl bilinmiyorsa yıl yazılmaz**
  ("temsilî" damgası uydurmayı meşrulaştırmaz). Sahte kesinlik de yasak: künyenin `f:`/`t:`
  günü bir KAYNAK DEĞİLDİR; kaynak yıl diyorsa yıl yazılır ve fark bildirilir. Pencere uçları
  (`1923-10-29`) ölçüm değeri değil sınır işaretidir. [`D210`](dersler/D210-hassasiyet-kaynagi-asamaz.md)
  🆕 🔴 **HİCRÎ YIL TUZAĞI — `YYYY-01-01` VARSAYILANI BU ATLASIN ÇEKİRDEĞİNDE
  YANLIŞ** (10 Ekim 2026, `NOKTA-LEVANT-KIYI-1010` dört yerde ölçtü).
  Kaynak **hicrî yıl** veriyorsa, o yılın mîlâdî karşılığı 1 Ocak'ta BAŞLAMAZ ⇒
  `YYYY-01-01` yazmak **kaynağın DIŞLADIĞI bir güne** yazmaktır:
```
hicrî 584 → 1188-03-02'de başlar   ⇒ 1188-01-01 584'ün DIŞINDA
hicrî 686 → 1287-02-16             ⇒ 1287-01-01 DIŞINDA
hicrî 690 → 1291-01-04             ⇒ ve olay (Akkâ) 05-18'den SONRA
hicrî 922 → Mercidâbık 1516-08-24  ⇒ 1516-01-01 olaydan ÖNCE
```
  ⇒ **VARSAYILAN DEĞİŞİR:** kaynak mîlâdî yıl veriyorsa `YYYY-01-01`;
  **hicrî yıl veriyorsa o hicrî yılın İLK MÎLÂDÎ GÜNÜ** (ya da olay bir
  tarihten sonraysa o tarih), ve seçim `ic_not`ta hicrî aralıkla BEYAN edilir.
  📌 Niçin bu kadar geniş: `§4` TDV'yi İslâm dünyası ve Osmanlı için birincil
  yapar — yani atlasın **çekirdeğinin** kaynakları hicrî tarihler. Bu tuzak
  istisna değil, **varsayılan hâl.**
  ⚠️ Ve `kesinlik:"yil"` bunu TEK BAŞINA çözmez: alan "yıl hassasiyeti" der
  ama yazılan GÜN hâlâ kaynağın dışındadır. Hassasiyeti beyan etmek, yanlış
  günü doğru yapmaz.
  🔴 **TERS SINIF, aynı vakada bulundu:** `1289-01-01` yazılmış ama TDV
  `haclilar`da **GÜN var** (26 Nisan) ⇒ sınıfı "4 ay erken" değil,
  **"gün kaynağı VARKEN yıl yazılmış"**. İlki kaynağı aşıyor, ikincisi
  kaynağı KULLANMIYOR; ikisi ayrı kusur ve çareleri ayrı.
- **Hassasiyet alanı:** tarih alanı kaynağın desteklediği en kaba güvenli düzeyi taşır, ay/gün
  metinde durur; `YYYY-MM-01` biçimi "ayın 1'i" ile "ay biliniyor"u ayırt edemez — hassasiyet
  AÇIKLAYAN alandan okunur. Kaba tarih künye penceresi dışına düşüyorsa künyenin günü
  devralınır ve kaynaksızlığı bildirilir. Türetilen sayı alıntıya yazılmaz. [`D213`](dersler/D213-ay-ayin-birine-kodlanmis.md)
- **TDV tuzakları:** ① ölü slug (HTTP **302**) · ② canlı slug, yanlış madde (`ordu`→
  `ordu--sehir` vb.) · ③ boş gövde · ④ boilerplate gövde (çekilemedi ≠ yok) · ⑤ `000`
  taşıma arızasıdır, ölü değil · ⑥ kaynak kendiyle çelişebilir — bildir; ama **önce
  cümleyi doğru ayrıştır** (Türkçe yan cümle) · ⑦ çıkarıcının "okuyamadım"ı belge
  hakkında bir şey söylemez (ikinci çıkarıcı dene) · ⑧ rakamın gövdede geçmesi o değeri
  desteklediği anlamına gelmez — **rakamı taşıyan cümlenin neyi tarihlediği okunur**;
  gövde ile künye karşılıklı okunur · 🆕 ⑨ **aramada çıkmayan madde ÖLÜ DEĞİL**: ölçüldü
  (GLM1, 6 Ekim 2026) `sarikamis-harekati` GET **200** ve gövdesi var ama TDV aramasında
  HİÇ görünmüyor ⇒ arama ADAY üretir, `GET` DOĞRULAR; köprü aramadan tek başına kurulmaz
  (liste ilk ~10'dur ve sayfa sayısı basmaz). [`D211`](dersler/D211-tdv-tuzak-5-8-once-ayristir.md)
- **Arama:** `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`. "TDV'de yok" demeden ARA;
  dar slug tutmazsa kapsayıcı maddeyi dene — **TDV olay değil yer-kişi ansiklopedisidir**, olay
  slug'ı ölüyse olayın geçtiği YERE ya da başındaki KİŞİYE bak. Kapsama tablosu künye
  kapsamasıdır, kasaba taneciği için hüküm vermez. Kaynak yoğunluğu komşu bölgeye taşınmaz.
  [`D217`](dersler/D217-tdv-olay-degil-yer-kisi.md) · [`D218`](dersler/D218-tdv-isabet-orani-81.md)
- **Türkçe yazım ekseni:** `d:`e `devletler.js`teki gerçek `id:` yazılır (`aceh`→
  `ace-sultanligi`); "yok" demeden `bolge:` alanı taranır. Kodda `"İ".lower()` iki kod noktası
  verir, `casefold()` de çözmez → `denetim/ARAC-NORMAL-0903.py` normalleştiricisi; ayrı adlar
  (`Diyarbekir`↔`Diyarbakır`) eşanlam sözlüğü işidir. [`D215`](dersler/D215-turkce-yazim-ekseni-lower.md)

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
**Hangi dosyanın canlı olduğu yalnız `GIRDI_DOSYALARI`dan okunur** — burada liste tutulmaz
(üç kez bayatladı). Ayrıştırıcıyı doğrulamak yetmez, okuduğu dosya kümesi de doğrulanır.
```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.GIRDI_DOSYALARI));[print(' ',f) for f in girdi.GIRDI_DOSYALARI]"
```
Vaka: [`D219`](dersler/D219-dosya-haritasi-tam.md)

🆕 🔴 **AYNI KURALIN ÇIKTI YÜZÜ — ÜRETİLMİŞ DOSYA DİSKTE OLABİLİR, YAYINDA OLMAYABİLİR**
(10 Ekim 2026). Çıktı tarafında canlı olan, diskteki en büyük dosya değil
**`index.html`in `<script src=>` satırıdır.** Ölçülen vaka: koordinatör
`data/devletler_harita.js`i "yayındaki harita" diye iki kıtaya ve UMIT'e verdi.
```
data/devletler_harita.js    93.694.456 bayt, 4 Ekim   GIT'TE HİÇ YOK (takipsiz,
                            origin/main'de de yok) — YEREL ÇÖZÜM, yayın DEĞİL
                            UMIT'te aynı adda 180.999.059 baytlık BAŞKA kopya
data/devlet_harita_ust.js    3.148.869 bayt  TAKİPLİ · index.html:1759 · YAYIN BU
                            son dokunan: `14174ef7` KOŞU 21 (7 Ekim) ⇒ 93 MB'lık
                            dosya yayındaki haritadan ÜÇ GÜN ESKİ
```
⇒ Kusur "dosya yok" değil: **dosya VARDI ve YANLIŞTI.** Varlığı doğruluk sanıldı.
🔴 Üretilmiş haritayı ölçecek her iş, tabanını KENDİ ÇÖZER:
```bash
git worktree add <yol> origin/main --detach
cd <yol> && py arac/kodla.py coz-c data data/devletler_harita.js
```
Ve ölçüm raporuna **taban commit + boyut + sha256** yazılır; yazılmayan parametre
ölçümü tek kullanımlık yapar (ÖNCE/SONRA kıyaslanamaz).
📌 Bu, `§7`in "ÜRETİLMİŞ — ELLE DÜZENLEME" uyarısının eksik yarısı: o satır
üretilmiş dosyaya **yazmayı** yasaklıyordu, **okumayı** düzenlemiyordu.

## 6. Kapsam genişlemesinin sırası
Dizin katmanı → yerleşim yoğunluğu → harita penceresi. **Nokta yoğunluğu sağlanmadan pencere
açılmaz** (kenar petekleri dünyaya yayılır). [`D220`](dersler/D220-kapsam-genisleme-sirasi.md)

---

## 7. Oturum düzeni ve dosya sahipliği — EN ÖNEMLİ KURAL
Bölme ölçütü **dosyadır**; her dosyanın tek sahibi var. Oturum 0 (koordinatör, YILDIRIM BAYEZIT):
`yerlesimler.js`, `uret_petek.py`, üretilen `data/*.js`, kök `*.md`. Öteki oturumlar
şartnamelerinin verdiği dosyalara yazar; **emin değilsen sor**; rapor/denetim oturumları
düzeltme yapmaz. [`D221`](dersler/D221-dosya-sahipligi-uretim-kilidi.md)
- 🆕 🔴 **MAKİNE ROLLERİ (Emre, 4 Ekim 2026) — `oturumlar/TOPOLOJI.md`.** EMRELIC
  koordinatör/paketleyici/plan · **HAVVA koşucu + yayıncı** · UMIT yazıcı (kod) ·
  KASA araştırmacı (yalnız metin) · LAB denetleyici. Çalışma tipleri TİP1–TİP5.
  **İki eski kuralı değiştirir:** ① koşuyu artık HAVVA koşturur (aşağıdaki
  "yalnız Oturum 0" satırı TİP1 içindir) ② motor tuzu donması makineler arası
  olduğu için SÖZ YETMEZ — koşucu `py arac/kaynak_durum.py kapat --kod KOSU`
  ile ilan eder, UMIT'in yazıcı oturumları bekçi **çıkış 3** alıp durur.
  🔴 **Ve `main`in TEK YAZICISI koordinatördür:** her makine kendi dalına push
  eder. Ölçüldü (4 Ekim): son 200 commit'in **%39'u tahta mesajı**, en çok
  değişen iki dosya `TAHTA.md`+`tahta.json` (üçüncünün 8 katı) — UMIT'i
  kilitleyen sınıf buydu. KASA dal kullandı, çatışma 0; UMIT `main`e yazdı,
  kilitlendi. Üretilen `data/*.js` çatışması **birleştirilmez, yeniden
  üretilir**.
- **`uret_petek.py`yi yalnız Oturum 0 koşturur** (TİP1; TİP3+ için HAVVA — üstteki satır). Koşu sürerken `data/` VE `arac/`
  donmuştur; motorun "girdi dosyaları SERBEST" satırı koşunun sağlığını söyler, çıktının
  yayınlanabilirliğini değil. Koşular ayrı worktree'de koşar. Başlatan "girdi kilitli" /
  bitince "dosya senin" der; devir sözle yapılır.
- **Uzun bir işi (koşu) başlatmadan önce** tahtaya "BEN BAŞLATIYORUM · ne · ~süre" yaz ve
  60 sn bekle; çakışmada beyana değil süreç damgasına bak. [`D225`](dersler/D225-ad-alani-kaynak-sahipligi.md)
- **Koşu nöbetçisi** düzenli canlılık basar (60 dk'da bir); sessizlik "nöbetçi ölmüş
  olabilir"dir (tahta bekçisi mesaj yoksa sessizdir — §7.2). [`D222`](dersler/D222-nobetci-altyapiyla-olur.md)
- **Commit:** push ve paylaşılan dosyalar Oturum 0'da. Oturum KENDİ ürettiklerini
  (`oturumlar/<ADI>.md`, `denetim/<ÖNEKİ>…`) **adıyla** commit eder; dizin pathspec'i ve
  `git add -A` YASAK; pathspec commit'te de tekrarlanır, `git show --name-only` ile
  doğrulanır (`git add -- <adlar>` · `git commit -F <mesaj-dosyası> -- <aynı adlar>`).
  Commit teslim değildir. [`D223`](dersler/D223-commit-istisnasi-pathspec.md)
- **Ayrı dosya ≠ ayrı ad alanı:** `data/<tur>_<kısaltma>.js` → `window.<TUR>_<KISALTMA>`;
  dosya verirken değişken adı da verilir. Süzgeç tanımadığını sessizce elemez, sayıp basar.
  [`D225`](dersler/D225-ad-alani-kaynak-sahipligi.md)
- **Cevap kendi pencerene yazılmaz; "ne oldu bizim iş?" cevapsız kalmaz** ("iş üstündeyim ·
  aşama · ~kalan"). Koordinatör ölü ilan etmeden önce oturumun gerçekten çalışıp
  çalışmadığına BAKAR. [`D224`](dersler/D224-cevap-kanali-ne-oldu-bizim-is.md)
- Yeni oturumun görev tanımı `oturumlar/` altına yazılır (§7.2 ②).

---

## 7.1 Haberleşme protokolü — her şartnameye AYNEN kopyalanır

### 🔴 TOKEN KURALI (Emre, 17 Eylül 2026) — ①'nin önüne geçer
- **İŞÇİ:** rapor · veri · teslim · soru → YALNIZ TAHTA (`py arac/tahta.py yaz`).
  Koordinatörün ekranına `send_message` YAZILMAZ; satır satır mesaj atılmaz, bir teslim
  TEK mesajdır (tahta çalışmıyorsa ⑤b istisnası geçerli).
- **KOORDİNATÖR** iş YAPMAZ, dağıtır — bağlamını uygulama işiyle doldurmaz.
- **OTURUM SEÇİMİ:** doğruluk > tasarruf > hız · doğruluktan hiçbir şey için taviz yok.
  Tecrübeli/emekli oturum yalnız işin doğrudan devamıysa ve doğruluk kazancı varsa.
  Alakasız dolu işçiye iş VERİLMEZ. **Maliyet ≈ bağlam × tur** — tur başına
  DOĞRUSAL, katlamalı DEĞİL; katlanan yalnız N turun TOPLAMIdır.
  🆕 **ÖLÇÜLDÜ (24 Eylül 2026, `get_usage`) — eşik bir YÜZDE DEĞİL, ZAMANDIR:**
  ```
  taze oturumun ZORUNLU tabanı      82.561 token (%8)  ← hiç iş yapmadan
      araç 36.647 · MCP 16.959 · hafıza 9.109 · beceri 4.696 · sistem 4.430 · CLAUDE.md 10.773
  çalışan oturumlar                 ORTADOĞU %37 · ASYA %33 · koordinatör %31
  pencere 1.000.000 · otomatik sıkıştırma %97
  ```
  İstem önbelleği 1 saatliktir. ⇒ **SICAK** oturumun bağlamı önbellekten gelir,
  ucuzdur; **SOĞUK** oturum bağlamının TAMAMINI tam fiyat yeniden öder.
  Soğumuş %37'lik bir oturumu uyandırmak (365 bin token) taze oturum açmaktan
  (82 bin) **4,4 kat pahalıdır.** Sıcak ağır oturum EN UCUZ, soğuk ağır oturum
  EN PAHALI seçenektir — ikisi aynı yüzdede.
  🔴 **ATAMA SIRASI:** ① iş mevcut bir oturumun DOĞRUDAN DEVAMI mı → ② o oturum
  SICAK mı (`get_usage` `status:"ok"` derse süreci canlı) → ikisi de evetse ONA VER;
  biri hayırsa TAZE aç.
  ⚠️ **Doluluk tecrübe DEĞİLDİR.** Taze kıtanın 82.561 tokeninin 71.788'i araç
  tanımı ve hafızadır, proje bilgisi değil. Ölçüt hacim değil İLGİdir.
  📌 **Ölçmek bedavaya yakındır:** `get_usage` ≈ 1.100 token, yanlış atama
  ≈ 82.000 ⇒ ölçüm tek bir yanlış atamadan **18 kat ucuz.** Atamadan önce ÖLÇ.
  📌 Vaka: 24 Eylül'de 10 kıta dağıtıldı; İÇ ASYA ve GD ASYA taze oturuma
  verildi, oysa `SINIR-D-ASYA-0077` %33'te ÇALIŞIYOR ve tam o kapsamı ölçmüştü.
- **BEKLEME:** ScheduleWakeup · /loop · sleep ile tahta YOKLANMAZ, "tahtayı kontrol
  ediyorum" yazılmaz. Tek yol: bekçi (§7.2 ④) — mesaj yoksa sessiz, yalnız adına/HERKES'e
  mesaj gelince uyandırır.
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

## 7.3 🆕 ATAMA PROTOKOLÜ — kime vereceğini ÖLÇ, sonra ver (Emre, 24 Eylül 2026)
Emre: *"madem ölçmek bedava, ölçelim ve gerekirse taze oturuma verelim ve yeni
oturum isteyelim … görevi kime vermek gerektiğini ölçüp sonra işlem yapabiliriz."*

### ① SICAKLIK NASIL ÖLÇÜLÜR — ve hangi alan YALAN söyler
```
🔴 ÖLÇÜT: list_sessions → lastActivityAt.   İstem önbelleği 1 SAATLİK.
   🔥 SICAK  < 45 dk   · 🟡 ILIK 45-60 dk (soğuk say) · ❄️ SOĞUK > 60 dk
⚠️ `isRunning` SICAKLIK DEĞİLDİR — "şu an tur ortasında mı" der.
   Ölçülen vaka: ORTADOĞU `isRunning:false` ama son etkinlik 23 SANİYE önce.
⚠️ `get_usage` "unavailable" = canlı süreç yok ⇒ DOLULUK okunamaz.
   Soğukluk KANITI DEĞİLDİR; soğukluğu `lastActivityAt` söyler.
```

### ② BEDEL — ölçülmüş rakamlarla
```
TAZE oturum   82.561 token TABAN (araç 36.647 · MCP 16.959 · hafıza 9.109 ·
              beceri 4.696 · sistem 4.430 · CLAUDE.md 10.773) + alan öğrenme
SICAK oturum  bağlamı ÖNBELLEKTEN gelir → küçük kesir + yeni iş
SOĞUK oturum  bağlamının TAMAMI tam fiyat  (ör. %37 = 365.096 token)
```

### ③ KARAR — dört satır, sırayla
```
İLGİ yok                        → TAZE. Tecrübe ne olursa olsun. (Nokta.)
İLGİLİ + SICAK                  → ONA VER. Her dolulukta en ucuz seçenek.
İLGİLİ + SOĞUK + < 165.000      → ONA VER. Uyandırmak taze açmanın 2 katından az.
İLGİLİ + SOĞUK + > 165.000      → TAZE aç + SICAK bir ilgiliden TECRÜBE DEVRİ iste
```
📌 **165.000 = 2 × 82.561**, uydurma değil taze tabanın iki katı.
🔴 **DOĞRULUK BEDELİ EZER** (§7.1): soğuk ve ağır oturum, tazenin yeniden
kuramayacağı bir bilgiyi tutuyorsa ona verilir — bedeline bakılmaz.
⇒ Emre'nin *"soğumuş tecrübeliye hiç görev vermeyelim mi"* sorusunun cevabı
**HAYIR, mutlak kural olmaz**: soğuk ama HAFİF oturum en iyi değerdir,
soğuk ama YERİ DOLDURULAMAZ oturum zaten mecburîdir.

### ④ TECRÜBE DEVRİ — bağlamı değil BİLGİYİ taşı
İş zaten taze oturuma gittiyse geri alma (batığı ikiye katlar). Sıcak ilgiliden
TEK MESAJ iste: ① ne ölçtün ② hangi tuzağa düştün ③ neyi YAZMASIN (mükerrer)
④ hangi kaynak/slug tuttu. Bir mesaj, 80 binlik yeniden öğrenmenin yerine geçer.

### ⑤ İŞ TOPLAMA — sıcaklık yapay olarak KORUNMAZ, iş TOPLANIR
Bir oturumu sıcak tutmak için mesaj atmak, tur yakmaktır. Doğrusu: aynı
oturuma gidecek işleri **tek sıcak pencerede** ver, saatlere yayma.

### ⑥ YENİ OTURUM NE ZAMAN İSTENİR
İlgili+sıcak oturum yoksa, ilgili+soğuk olanlar 165.000'in üstündeyse ve
hazır kıta havuzu boşsa → Emre'den yeni oturum istenir. Tek satır yeter:
*"hazır kıtada N eksik."*

### ⑦ ÖLÇMENİN BEDELİ — endişe yersiz, ölçüldü
`get_usage` ≈ 1.100 token · `list_sessions` ≈ 1.500 · yanlış atama ≈ 82.000.
⇒ **Ölçmek tek bir yanlış atamadan ~18 kat ucuz. Atamadan önce HEP ölç.**

📌 **VAKA (24 Eylül 2026):** 10 kıta dağıtıldı, sonra ölçüldü — **4'ü yanlıştı**,
dördü de aynı hata: *sıcak ve ilgili oturum dururken taze açmak.* ASYA (%33,
sıcak) → İÇ ASYA + GD ASYA · ORTADOĞU (%37, sıcak) → ARABİSTAN · AVRUPA-ORTA
(sıcak) → A-AVRUPA (üstelik o listeyi BİZZAT O keşfetmişti). Kalan 6 doğruydu:
karşılık gelen oturumlar gerçekten soğuktu (AFRİKA 2s48dk, KOMŞU/OKYANUSYA/
AMERİKA ~3s). 🔴 İlk hükümde `isRunning`e bakıp "3 yanlış" demiştim; doğru
alana (`lastActivityAt`) bakınca 4 çıktı. **Yanlış alanla ölçmek, ölçmemekten
daha tehlikelidir: sayı verir ve güven telkin eder.**

### ⑧ 🆕 HAZIR KITAYA GÖREV VERMEK — genel kural (Emre, 27 Eylül 2026)
Emre: *"soğuk hazır kıtalara görev vermek daha tasarruflu daha doğru daha hızlı
olacak ise verebiliriz genel kural olarak; olmayacaksa hazır kıta iste."*
Cevap **şartlıdır ve şartı ÖLÇÜLÜR:**
```
① ADI "hazır kıta" olan oturum BOŞ SAYILMAZ  →  list_events MESAJ SAYISI ölçülür
② GERÇEKTEN BOŞ (yalnız /kita okumuş, ~10-20 mesaj), soğuk olsa bile → KULLAN
   bağlamı taze tabana yakındır (~90-100 bin ≈ 82.561) · fark küçük ·
   Emre'yi elle oturum açmaktan kurtarır  ⇒ EVET, genel kural budur
③ DOLU/tecrübeli + SOĞUK + bilgisi `denetim/*.md`de YAZILI → KULLANMA, TAZE aç
   ölçülmüş bedel: soğuk %37 oturum 365.096 · taze 82.561 + tek dosya (~5.000)
   ⇒ taze + disk devri ~4 KAT UCUZ, ve doğruluk kaybı YOK (ölçüm diskte)
④ DOLU/tecrübeli + SOĞUK + bilgisi YAZILMAMIŞ (yarım iş) → ONU UYANDIR
   `§7.3`ün "doğruluk bedeli ezer" maddesi burada yürürlüktedir
```
🔴 **VAKA — kural tam bu yüzden yazıldı (27 Eylül, paket 0077 dağıtımı):** üç
oturumun adı `OPUS HAZIR KITA 2309 00xx /kita`ydı; ölçülünce **290 · 279 · 56
mesaj** çıktı — üçü de dolu işçiydi (biri KRONO-0076-B'nin 24 maddesini ve 20
ek okuma kartını yapmış). Görev verilince adları görev adına çevrilmemişti
(`§7.2 ①` ihlali) ve havuz listede **boş görünüyordu.** ⇒ Ölçülmeden hazır
kıta sayılan oturuma iş vermek, dolu bir işçinin üstüne ikinci iş yığmaktır.
📌 Ve tersi de doğrudur (`F18`): defterin "hazır kıta 0" demesi de kanıt değil.
**Ad ve defter KAYIT tutar, `list_events` ÖLÇER.**

## 7.2 TOKEN ZİNCİRİ — bir işin baştan sona yolu (17 Eylül 2026)
- **① Açılış:** Emre oturumu açar, adlandırır. Oturum CLAUDE.md'yi okur, kimliğini
  `get_session("self")` ile ölçer (scratchpad UUID'si DEĞİL). MODEL koordinatörün işidir:
  kıta hangi modelle açılmış olursa olsun göreve göre `set_session_model` ile çevrilir
  (pahalıya çevirmek Emre onayı ister). "Hazır kıta" adı boşluk kanıtı değildir —
  `list_events` mesaj sayısı ölçülür. 🔴 Görev verildiği an oturumun adı görev adına
  çevrilir (`set_session_title`) — Emre, 19 Eylül 2026.
- **② Görevlendirme:** koordinatör tahtaya (ya da ilk mesaj olarak) yazar; mesajın İLK
  SATIRI oturumun ADIDIR = tahta anahtarı, TAM yazılır (tahta TAM EŞİTLİK arar). Şartname
  `oturumlar/<dosya>.md`. Dosya sahipliği görev tablosunda yazılıysa açılış mesajı yok;
  değilse tek satır "şu dosyalar bende". Hazır kıta açılışta tahtaya TEK "HAZIRIM" yazar
  (`oturumlar/HAZIR-KITA.md`).
- **③ Tahta:** tek kanal `py arac/tahta.py yaz --kim "<AD>" --kime "<ALICI>" --mesaj "…"`;
  `send_message` yalnız tahta arızasında (§7.1 ⑤b).
  🔴 **NOKTA ATIŞI — `HERKES` artık KURAL ALTINDA** (Emre, 22 Eylül 2026: *"ota boka
  herkese mesaj atılmasın… gereksiz mesajları gereksiz kişiler okuyup uyanıp token
  yakmamalı"*). Mesaj kimi ilgilendiriyorsa **onun adına** yazılır. `HERKES`
  yazılacaksa: **ACİL/DURDURUCU ise `--dayanak` ZORUNLU** — `tahta.py` dayanaksızını
  REDDEDER (çıkış 2) — ve bütün bekçileri uyandırır; **değilse kimseyi uyandırmaz**,
  tahtada kütük olarak durur, herkes kendi turunda okur. Ölçüm: bir bilgi duyurusu
  sekiz oturumu uyandırıp sekiz tam turluk bağlam yaktı. **Boş uyanış, dolu turdan
  ucuz değildir.**
- **④ Bekçi:** **Bash `run_in_background`** + `py arac/tahta_bekci.py --kim "<AD>" --cik`
  (Monitor DEĞİL: 30 dk'da dolup boşuna uyandırır). Yalnız `kime` = ADIN mesajında
  ya da **ACİL/DURDURUCU** HERKES yayınında çıkar (22 Eylül: adres tuzağı ve
  bilgi amaçlı HERKES artık UYANDIRMAZ, yalnız stderr'e teşhis düşer — eski hâlde
  her duyuru herkesi uyandırıyordu). Çıkınca mesajı işle, aynı komutla **SESSİZCE**
  yeniden kur. "Bekliyorum" YAZILMAZ. 🔴 **Boş uyandıysan — sana ait hiçbir şey
  yoksa — EKRANA HİÇBİR ŞEY YAZMA,** bekçiyi sessizce yeniden kur ve dur: "benlik
  bir şey yok, yeniden kuruyorum" cümlesinin kendisi bir tur maliyetidir.
  🆕 🔴 **BEKÇİNİN 2 SAATLİK SÜRE TAVANI VAR — ve bu bir arıza DEĞİL, SINIR**
  (5-6 Ekim 2026 gecesi ÜÇ oturum bağımsız olarak ölçtü: LAB · KASA · bir hazır
  kıta). Ölçüm: `ara 60` ile **118 tur** sonra arka plan görevi harness tarafından
  `killed` edildi — mesaj gelmedi, **düzgün çıkış da değil**. Tavan
  `7.200.000 ms = 2 saat` ve bu **izin verilen EN UZUN** değer; daha uzunu
  istenemez. Bu paragraf bugüne kadar tavandan HİÇ söz etmiyordu — kusur yanlış
  cümle değil **EKSİK** cümleydi, ve o yüzden kimse bunu "normal" sayamıyordu.
  ⇒ İKİ SONUÇ: ① **2 saatte bir yeniden kurma turu NORMALDİR**, boşa tur değildir
  ② **sessiz bir oturum takılmış DEĞİLDİR** — bekçisi düşmüş olabilir.
  🔴 Bir oturumu "takıldı/ölü" ilan etmeden önceki üçlü sıra (aşağıda, `D258`)
  bu yüzden daha da bağlayıcı: ① teslim zaten gelmiş mi (tahta/`git log`)
  ② `bekci_olc.py` ne diyor ③ ancak ikisi de hayırsa uyandır.
  📌 **HİPOTEZ, kanıtlanmadı:** `D258`in 9 saatlik sessizlik vakasının (çıkış 4,
  kodda `return 4` YOK) sebebi bu tavan olabilir. Ölçülmedi; "olabilir" diye
  duruyor, "öyleydi" diye YAZILMADI.
  ⚠️ Çare bekçiyi uzatmak DEĞİL (tavan zaten azamî): makineler arası iş için
  oturumlar arası köprü kullanılır — bekçi yalnız AYNI makinedeki tahtayı
  görür, ve dalda çalışan bir makine `main`e yazılanı HİÇ görmez (LAB ölçtü).
  🆕 🔴 **NABIZ DAMGASI (3 Ekim 2026) — bekçi SESSİZ ama artık İZ BIRAKIYOR.**
  Vaka: ODAK-KAPAT'ın bekçisi **çıkış 4** ile düştü (kodda `return 4` YOK ⇒
  süreç dışarıdan düşürülmüş), oturum **9 saat** uyanmadı ve koordinatör
  sessizliği "işçi takıldı" diye okudu — oysa teslim `git log`da duruyordu.
  `tahta_bekci.py` her turda `oturumlar/bekci/<AD>.json` yazar (kimseyi
  UYANDIRMAZ); koordinatör `py arac/bekci_olc.py` ile ölçer:
  `CANLI` ≤2,5 tur · `KUSKULU` ≤5 · `OLU` · `CIKTI` (düzgün çıkış, ölüm
  DEĞİL) · `OLCULEMEDI` (bozuk damga — "ölü" YAZILMAZ). Eşik **aralığın
  KATIdır**, sabit saniye değil: aynı 20 dk sessizlik `ara 60`da ÖLÜ,
  `ara 1800`de CANLIdır. ⚠️ `.bekci_son_*.txt` bu soruyu CEVAPLAMAZ —
  yalnız çıkışta yazılır, "son nabız" değil "son ÖLÜM"dür.
  ⚠️ Damga **gitignore'dadır**: PID ve makineye özel canlılık taşır,
  commitlenirse başka makinenin bayat damgası "bekçi canlı" yalanı söyler.
  🔴 **Bir oturumu "sessiz/takıldı" ilan etmeden ÖNCE:** ① tahta/`git log`
  — teslim zaten gelmiş mi (`D224`) ② `bekci_olc.py` — bekçisi canlı mı
  ③ ancak ikisi de hayırsa uyandır. Sınav (9 soru, iki yönde + GERÇEK bekçi
  koşturularak): `py denetim/ARAC-BEKCI-NABIZ-SINAV-1003.py`.
  [`D258`](dersler/D258-sessiz-bekci-iz-birakmali.md)
  🆕 🔴 **KAYNAK DARBOĞAZI KAPISI (Emre, 29 Eylül 2026) — yeniden kurmanın İSTİSNASI.**
  `tahta_bekci.py` açılışta `oturumlar/KAYNAK-DURUM.json`u okur; koordinatör
  `py arac/kaynak_durum.py kapat --kod <KOD>` ile darboğaz ilan ettiyse bekçi
  **KURULMAZ**, sebebini basar, **çıkış 3** verir (2 kullanım hatası · 1 arıza ·
  **3 = kurulamadı, TEKRAR DENEME**). 3 gören oturum arka plan süreçlerini kapatır
  ve durur; görevi `send_message` ile gelir. Kodlar `kaynak_durum.py`deki
  `KODLAR` sözlüğündedir (tek otorite): `RAM-DARBOGAZI` · `ISLEMCI-DARBOGAZ` ·
  `DISK-DARBOGAZ` · `KOSU`. `--muaf` ile çalışan paketler dışarıda tutulur
  (yatay mesajlaşma için bekçileri gerekir). Kaldırma: `kaynak_durum.py ac`.
  ⚠️ Yasak ZATEN KURULMUŞ bekçiyi düşürmez, yalnız YENİDEN kurulmasını engeller —
  ilan TAHTAYA da yazılır. ⚠️ Dosya yoksa/bozuksa yasak YOKTUR (kapalıya düşmez).
  📌 Vaka: koordinatör dört boş kıtanın bekçisini `Stop-Process` ile dışarıdan
  öldürdü, dördü de protokole uyup yeniden kurdu — **haklıydılar; süreci öldürmek
  talimatı değiştirmez.** Ölçüm: RAM 11,9 GB · boş 0,69 GB · pagefile 5.824 MB ·
  claude 44 süreç/5.689 MB. Sınav iki yönde koştu (yasaksız kurulur · yasakta 3 ·
  muaf kurulur).
- **⑤ Yatay mesaj:** işçi→işçi tahtadan (§7.1 ③); atama/öncelik/kaynak hükmü koordinatöre.
- **⑥ Toplu okuma:** koordinatör tahtayı olay olay değil, bekçi `--toplu 1800` ile 30
  dakikada bir TEK özet satırla okur; işçiler buna göre 30 dk gecikme varsayar.
- **⑦ Teslim:** iş bitince TEK mesaj: ölçtüm · bulamadım · istiyorum + değişen dosya
  listesi; kritikse `tahta.json`dan geri okunur. Paylaşılan dosyayı (`data/`, `CLAUDE.md`)
  koordinatör commitler; devralınan dosya için "dosya senin" denir.
- **⑧ Emeklilik:** teslimden sonra DUR. Devamı varsa bekçi açık kalır.
  🔴 **BEKÇİYİ ÖLDÜRME ARTIK TEK TARAFLI DEĞİL** (Emre, 27 Eylül 2026: *"işini
  bitiren oturumlar koordinatöre konuşarak işçilerini öldürmeliler; işçiler boş
  yere çalışıp RAM ve işlemci harcamamalı"*). Teslim mesajının SONUNA tek satır
  eklenir: **"bekçimi öldüreyim mi?"** Koordinatör iki cevaptan birini verir:
  ```
  EVET        → işçi TaskStop ile bekçisini öldürür, oturum emekliye ayrılır
  HAYIR BEKLE → bekçi AÇIK kalır, devam görevi geliyor
  ```
  ⚠️ Cevap gelmeden bekçi öldürülmez: bekçisiz oturum tahtadan uyanmaz ve
  devam görevi `send_message` gerektirir — bir turluk tasarruf için tam turluk
  uyandırma ödenir. ⚠️ Ama cevap gecikirse de bekçi boşuna koşar: koordinatör
  bu soruyu **ilk toplu okumada** cevaplar, biriktirmez.
  📌 Niçin koordinatör karar verir: devam işi olup olmadığını yalnız o bilir.
  Emekli oturuma yalnız işin doğrudan devamı verilir.
  🔴 İşi biten ve devamı beklenmeyen oturumu koordinatör EMEKLİYE AYIRIR: "Atlas — emekli
  oturumlar" grubuna taşır (`move_sessions`) — Emre, 19 Eyl. Açık teslimi/sorusu olan
  emekliye ayrılmaz; geri dönüş: gruptan çıkar.
- **⚠️ Uyandırma:** tahta mesajı DURAN oturumu uyandırmaz — yalnız bekçisi açık olanı
  uyandırır. Duran/bekçisiz oturuma görev `send_message` ile gider (tahtaya da kayıt için
  yazılır; 18 Eylül'de ~9 saat cevapsız kalan görevler oldu). `send_message` "undelivered"
  diyorsa oturum ONAY PENCERESİNDE olabilir — bunu yalnız Emre açabilir, ona bildirilir.

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

## 9. Komutlar

```bash
py arac/uret_petek.py     # harita üretimi — 🔴 ~40 dk DEĞİL: TAM İNŞA **7-8 SAAT**
                          #   ölçüldü (HAVVA, 9 Ekim 2026, `uretim_canli.log`
                          #   AŞAMA BİLANÇOSU): KOŞU 21 duvar 7s13dk · KOŞU 20 8s13dk.
                          #   En büyükler: yabancı gövdeler 2s38dk · dönemler 2s11dk ·
                          #   ufuk bantları 57dk · çöl tavanı 30dk. Tuz değişirse
                          #   önbellek tamamen ıskalar ⇒ üst sınır. Koşucu HAVVA (§7).
py arac/uret_devirler.py  # devirler.js — uret_petek'ten SONRA koşar
py arac/renk_olc.py       # 🔴 VERİ DEĞİŞTİYSE ŞART — aşağıya bak
py arac/denetle.py        # altı değişmez
py arac/odak_olc.py       # kronoloji maddesinin KAMERA ODAĞI — kapıya BAĞLI
py arac/denetle_yayin.py  # yayın kapısı
py arac/surum_damgala.py  # index.html'deki ?v=rNN damgasını yükselt
```
- **Palet verinin fonksiyonudur:** veriye dokunan her koşudan sonra `renk_olc.py` (renge
  dokunmadan çakışma doğabilir).
- **Odak nöbetçisi** (27 Eyl 2026, Emre: *"denetimi yayın kapısına bağla"*): kronoloji
  maddesinin kamera odağı `denetle_yayin.py`ye BAĞLIDIR, iki ayrı sertlikle. ① **kırık
  atıf** (`yer_id`/`odak_yer`/`odak_kimlik`/`odak_kutu_kaynak` yazılmış ama çözülmüyor)
  YENİSİNE 0 tolerans — bilinen borç `denetim/ODAK-TAVAN.json` `bilinen_kusur` LİSTESİNDE
  adıyla beyanlıdır (sayı değil liste: borç kapanırken yenisi yerine geçemez). ② **sayı
  tavanı** ODAKSIZ 485 · BEYANLI→yabancı 669 dondurulmuştur; yalnız GERİLEME bloke eder,
  iyileşince `--tavan-yaz` ile indirilir. Çözüm `arac/odak_cozum.js`te (node) çünkü
  `suzgec.js`in GERÇEK işlevleri çağrılır — Python kopyası iki yerde "yanlış temiz"
  vermişti. Kapının ötüp ötmediği `py denetim/ODAK-KAPI-SINAV.py` ile İKİ YÖNDE sınanır.
  🔴 `kapsam_genis:true` + odak yok ⇒ kamera **o günün OSMANLI sınırına** uçar
  (`app.js:11835`) — yabancı kronolojide bu bir kusurdur, odaksızlıktan KÖTÜDÜR.
- Ortamda `python` değil **`py`**. Üretim logu koşarken boş görünür (normal); çıktıda
  "Doğrulama: tüm yerleşimlerin peteği geçerli ✓" satırını gör. Yayından önce sürüm
  damgası yükseltilir; Pages gecikmesi ~40-60 sn.
- **Koşu çıktısı her zaman bayattır — yine de yayınlanır** (Emre, 17 Eylül): "YAYIN BAYAT"
  yayını durdurmaz; durduran yalnız koşunun kendi `denetle.py` ihlalidir. Koşu bittiği an
  ≠ yayın indiği an: yayın inene kadar motor donuk. [`D229`](dersler/D229-komutlar-palet-bayat-yayin.md)

## 9.1 🔴 MOTOR KODU DONDURMA — koşular arası (Emre onayı, 25 Eylül 2026)
Önbelleğin **TUZU** dört dosyanın sha256'sıdır: `uret_petek.py` · `renkler.py` ·
`girdi.py` · `motor_onbellek.py`. Biri değişirse **bütün anahtarlar değişir** ⇒
tam yeniden inşa, elle karar yok. Bu bir kusur değil doğruluk sigortasıdır:
motor değiştiyse eski sonuç güvenilmez.
🔴 **AMA ÖLÇÜLDÜ (MOTOR-LEGO-0925):** 19-25 Eylül arasında bu dört dosyaya
**19 commit** girdi ve her koşunun tuzu farklı çıktı (koşu 5 `7c843c40` · 6
`169495a2` · 14 `22742ea1` · 15 `0e8e7049`). Sonuç: **çalışan önbellek
katmanları bile isabet almadı** — koşu 14: `col` 0/549 · `kusat` 0/2437 ·
`dolgu` 8/1920 · `osm` 10/579. Önbellek iki haftadır VARDI ve HİÇ çalışmadı.
📌 Ve 19 commit'in **12'si yalnız `renkler.py` + `girdi.py`**ydi; gövde
hesabı o iki dosyayı **okumuyor** bile (AST ile ölçüldü: 30 işlev/91 ad, renk
okuyan yok). Yani bayatlığın çoğu **boşunaydı**.

**KURAL — üç madde:**
1. **Veri koşusu (yalnız `data/` değişti):** motor kodu **DONDURULUR.** Dört
   dosyaya dokunulmaz — yorum satırı bile. Dokunmak zorundaysan koşuyu
   erteler ya da ② ye geçersin.
2. **Tam inşa koşusu:** biriken motor yamaları **tek seferde** girer, tuz bir
   kez değişir, o koşu zaten sıfırdan inşa eder. Yamalar `denetim/*.diff`
   olarak bekletilir (`git apply --check` temiz tutulur).
3. **Koşu SÜRERKEN dört dosyaya dokunulmaz** — koşu her aşamada motor parmak
   izini sınar ve reddeder (8 Ağustos: 83 dakika çalışıp en sonda reddedildi).
⚠️ **Ve bu kural yazılmadan tutulmadı:** 24 Eylül'de koordinatörün kendisi
`girdi.py`ye dokunup 279 MB'lık önbelleği öldürdü — aynı sabah şartnameye
"motorun tuzuna dokunulmaz" yazdıktan sonra. Kural yazılı olmayan kural değil,
UNUTULAN kuraldır.
📌 Yapısal çare de yolda: geometri katmanlarına (`govde`/`osm`/`sb`) renk ve
girdi listesi İÇERMEYEN ayrı bir tuz (`MOTOR-LEGO-0925` yaması). İndiğinde
bu kuralın yükü azalır ama **kalkmaz**: `uret_petek.py` hâlâ tuzdadır ve
orada OLMALIDIR.

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
**Dizin: [`dersler/DIZIN.md`](dersler/DIZIN.md)** — 270 ders (dosya 270 = dizinde anılan
benzersiz no 270, 10 Ekim 2026 ÖLÇÜLDÜ: `ls dersler/ | grep -cE "^D[0-9]+-"`).
⚠️ Sayarken `ls dersler/D*.md` KULLANMA: `DIZIN.md` de "D" ile başlıyor ve glob onu da
sayıyor (bir fazla verir — `D267`nin tuzağının birebir aynısı). Doğrusu
`ls dersler/ | grep -cE "^D[0-9]+-"`. Toplu okunmaz, kural
tartışılınca açılır. Yeni ders: slogan DIZIN'e tek satır, vaka `dersler/D<sıra>-<slug>.md`e
(ikisini buraya yazmak bu dosyayı yeniden şişirir). En sık aileler:
- **Ölçüm doğru, çıkarım yanlış** — hüküm ile teşhis ayrıdır; raporu kabul etmeden ölç.
- **Denetim var ≠ o soruyu soruyor** — temiz rapor, sorulmayan soruda temiz değildir;
  ölçülemedi ≠ yok ≠ temiz; boş küme her öngörüyü doğrular.
  🆕 🔴 **VE EN SİNSİSİ: ÇAĞIRANI OLMAYAN KAPI, KAPI DEĞİLDİR** (UMIT ölçtü,
  10 Ekim 2026). Ölçüm: `_sahiplik_uygula`yı ÇAĞIRAN dosya bütün depoda **YOK**
  — `denetle_yayin.py:1376`da yalnız METİN olarak taranıyor (`yer_yama` dizgisi
  aranıyor), subprocess yok; öteki bütün geçişleri yorum. ⇒ O aracın çıkış kodu
  **hiçbir kapı zincirinde okunmuyor**, yalnız elle koşturana görünüyor.
  📌 Aradaki fark: üstteki satırda kapı KOŞAR ama soruyu sormaz; burada kapı
  SORUYU SORAR ama HİÇ KOŞMAZ — ve dışarıdan ikisi de *"denetim mevcut"* diye
  okunur. ⇒ Yeni bir kapı/tavan/istisna konulurken **ÜÇ soru**: ① soruyu soruyor
  mu ② çıkış kodunu KİM okuyor ③ hiç çağrılıyor mu. Üçüncüsü sorulmazsa, sessiz
  bir borcu 2'ye çevirip 2'yi kimseye göstermeyen bir çare yazılır.
- **Bayatlayan belge/sayı** — sayı ölçümün fotoğrafıdır; kaynağını (log, alet) aç.
  🆕 🔴 **VE AYNA GÖRÜNTÜSÜ — ÖNERİ üzerinde ölçülen sayı da bugünkü durum
  DEĞİLDİR.** Bir kapının *"AÇIK"* olması, ölçülen kümenin **CANLI** olmasına
  bağlıdır; önerilen küme üzerinde ölçülen kapı **AÇILACAK**'tır, ve ikisini
  aynı kelimeyle anmak **yapılmamış bir işi yapılmış gösterir.** Ölçülen vaka
  (10 Ekim 2026, koordinatörün kendi hükmü): `KAMPANYA §12`ye *"① yoğunluk 🟢
  AÇIK — 26 nokta ⇒ p95 111,4"* yazılmıştı; ölçüm — `grep -rl "Uruk|Nippur|
  Borsippa" data/` → **0 dosya**, ve `devletler.js`te `ahameni·makedon·selefki·
  part·akkad` → **0** (yalnız `sasani` 1). Yani p95 geçerliydi, **zemini
  değil.** ⇒ Bir sayıyı aktarırken *ne zaman* ölçüldüğü kadar **NEREDE** —
  `data/`da mı, `denetim/`de bir öneride mi — sorulur. Bayat sayı GEÇMİŞİ,
  öneri sayısı **GELECEĞİ** bugün gibi gösterir; ikincisi daha sinsidir çünkü
  tarihi yoktur, yani tazeliği sorgulanmaz.
- **Toplu düzeltme** — `replace(…, 1)` yalnız ilk eşleşmeyi değiştirir; Türkçe/kesme işaretli
  metinde `sed` kullanma; heredoc yerine `Write` + `py <yol>`.
- **Yakın mükerrer yerleşim** — yeni noktadan önce ad (normalleştirilmiş) + 3 km tara.
- **Öngörü ölçümden önce yazılır** (sınav anı + evreniyle); yeni denetim iki yönde
  sınanmadan çalışıyor sayılmaz.
