# CLAUDE.md

Bu dosya, bu depoda çalışan Claude Code oturumlarına yol gösterir. Eski (koordinatör/tahta
dönemi) kuralların tam metni `arsiv/ESKI-PRENSIPLER-1012.md`dedir — yürürlükte değildir.

## Proje

Osmanlı Tarih Atlası: zaman ilerledikçe devlet sınırlarının değiştiği, yanında kronoloji ve
dönemin hükümdarının aktığı **eğitim amaçlı statik web sitesi**. Sunucu, veritabanı, derleme
yok; tarayıcı `data/` altındaki düz JS'i okur. MapLibre GL JS 4.7.1.

- Çekirdek: Osmanlı 1281–1923, **gün hassasiyetinde**. Hedef: bütün dünya (kademeli).
- Yayın: https://emrelic.github.io/osmanli-tarih-atlasi/ — **`main`e push = yayın.**
- **Amaç kronoloji ile haritanın birbirini doğrulaması:** bir madde okunduğunda haritada tam o
  değişim görünmeli. Bütün kalite kuralları buradan türer.
- Güncel sayılar: `py arac/durum_tablosu.py` (son fotoğraf `DURUM-TABLOSU.md`; `--yaz` günceller).

## Çalışma düzeni

- 🔴 **İşe başlamadan önce kendi worktree'ne geç:** dosya değiştirecek her oturum ilk iş
  `EnterWorktree` aracını işin kısa adıyla çağırır (`.claude/worktrees/<ad>/`, `origin/main`den
  yeni dal). Yalnız okuyan/soru cevaplayan oturum geçmez. Ayrıntı: "Worktree" bölümü.
- Kullanıcı (Emre) işi doğrudan oturuma verir. Koordinatör, işçi oturum, hazır kıta, tahta,
  bekçi **kullanılmaz.** Paket maddelerinin tek kaydı **kutu** uygulamasıdır.
- **Site üstü notlar:** Emre sitede geliştirici kipinde (`?gelistirici=1` · Ctrl+Alt+G,
  `js/gelistirici.js`) haritaya / maddeye / düğmeye not düşer; notlar GitHub Issues'tadır
  (etiket `harita-notu`). Okuma ve cevap: `py arac/not.py liste|oku N|yanit N --dosya <yol>
  --durum <d>|durum N <d>`. Notun bağlamı (gün, madde, alandaki yerleşimler ve sahipleri)
  gövdededir — yeniden kurma. Arşivlemeyi (`arsivle`) yalnız Emre ister.
  **Post-it kuyruğu: `/postit` skill'i — 1 not = 1 oturum.** `py arac/not.py al` boş notu
  oturuma alır (`oturum:<id>` etiketi); not **arşive kadar** o oturumda kalır (cevap yazmak
  bırakmaz; Emre sitede "sahipsiz bırak"abilir, 7 gün sessiz sahip düşer). `son:claude|emre`
  etiketi sıranın kimde olduğunu gösterir. Başka oturumun aldığı nota dokunulmaz.
  Not sahibi oturum cevabı **arka planda** bekler (`py arac/not.py bekle N`, Bash
  `run_in_background`); Emre cevap yazınca betik biter, uygulama oturumu uyandırır. Bu, yasak
  olan eski **bekçi değildir**: merkezi izleyici yok, model beklerken çalışmaz, her oturum yalnız
  kendi notunu bekler. (Yalnız Claude uygulaması açıkken çalışır.)
- Paralel iş gerekirse **alt ajan** (Agent aracı) kullan; aynı dosyaya yazacak paralel ajanları
  ayrı worktree'de çalıştır. Ayrı oturum yalnız başka makinede, saatler süren ya da Emre'yle
  konuşması gereken iş için gerekir — o zaman Emre'den iste.
- Birikmiş maddelerde önce **dokundukları dosyaya göre grupla**; aynı dosyaya dokunanları tek
  elden yap (dosya bir kez okunur).
- Makineler: **HAVVA** koşu · **UMIT** yazma/denetim/araştırma · **laptop** siteye bakış + kutu.
- **Onay bekleme, devam et.** Emre hataları numaralı partilerle bildirir — her maddeyi ayrı
  cevapla. "Ayrı madde ile gösterilmeli" = Değişmez 2 ihlalidir: kırılmayı bul, kronolojiye yaz.
- İş sonunda kısa rapor: ① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum (önerinle).
- Bitince / soru sorarken 3 beep, beklenmedik uzun iş bitince 9 beep:
  `powershell -c "[Console]::Beep(800,300); [Console]::Beep(800,300); [Console]::Beep(800,300)"`
  `powershell -c "1..9 | ForEach-Object { [Console]::Beep(880,250); Start-Sleep -Milliseconds 120 }"`
- **İş bitti sayılmaz** ta ki: push kapısından geçti · kilitler bırakıldı
  (`py arac/kilit.py birak-hepsi --kim "<kancanın verdiği ad>"`) · worktree kaldırıldı
  (`ExitWorktree` `remove`) · arka planda süreç kalmadı. Sonra oturum olduğu gibi bırakılır.
- Eski koordinatör/işçi/tahta düzeni yalnız Emre `/koordinator-modu ac` derse o oturum için açılır.

## Kısaltmalar

- **`*yyy`** (Emre, 28 Ekim 2026) = **y**apılanlar, **y**apılmakta olanlar, **y**apılacaklar. Emre
  bunu yazınca o anki işin üç başlıklı kısa durum brifingi verilir; yeni iş başlatılmaz.
  ① Yapılanlar (`main`de olanlar ile yalnız yerel commit'te olanlar ayrı) ② Yapılmakta olanlar
  (çalışan oturumlar, kapıda bekleyenler) ③ Yapılacaklar (başlamayanlar, taranmayanlar, Emre'den
  bekleyen kararlar). Sayı ve kısa commit kodunu yaz, oturumları ölçüp doğrula; bilinmeyen
  "ölçülmedi" yazılır.

## Komutlar

Ortamda `python` değil **`py`**.

```bash
py arac/denetle.py                    # değişmezler — her veri değişikliğinden sonra · çıkış 0/1/2
py arac/renk_olc.py                   # veri değiştiyse şart (palet verinin fonksiyonudur)
py arac/odak_olc.py                   # kronoloji maddelerinin kamera odağı
py arac/paketle.py yenile             # site paketlerini tazele — veri değiştiyse
py arac/surum_damgala.py              # index.html ?v=rNN damgası
py arac/denetle_yayin.py              # yayın kapısı (~9 dk)
py arac/push_kapisi.py --kim "<AD>"   # main'e TEK yol (aşağıda)
py arac/uret_petek.py                 # harita üretimi, 7-8 saat — YALNIZ HAVVA, önce KOSU-YAYIN.md
```

## Mimari

```
index.html · js/app.js · css/style.css   uygulama (yeni data/*.js → index.html'e <script> satırı)
data/yerlesimler*.js     ELLE YAZILAN coğrafî kaynak — canlı liste: arac/girdi.py GIRDI_DOSYALARI
data/olaylar*.js · data/kronoloji_sinir*.js   kronoloji çekirdeği (Değişmez 2 evreni)
data/kronoloji*.js       öteki kronolojiler (Değişmez 2 evreninde değil)
data/devletler.js        künye + `harita:` boya anahtarı
data/padisahlar.js · kisiler.js · savaslar.js · sehirler.js
data/donemler.js · devletler_harita.js · bolgeler.js · *_parca*.js   ÜRETİLMİŞ — elle düzenleme
arac/uret_petek.py       tek üretim betiği · arac/renkler.py BOYALAR · arac/denetle.py
veri-kaynak/             motor girdisi (Natural Earth vb.)
dersler/                 kuralların vakaları (DIZIN.md) · denetim/ teslimler · arsiv/ eski
```

- **Petek motoru:** her yerleşimin çevresindeki toprak onun peteğidir (Voronoi); sınır kıyı,
  nehir, sırta yaslanır. **Noktası olmayan bölge en yakın peteğe emilir ve onun sahibiyle
  boyanır** — "harita yanlış" raporunda ilk soru: *orada yerleşim noktası var mı?*
- Veri değişikliği haritaya ancak HAVVA'daki tam koşudan sonra yansır.
- Yayında canlı olan `index.html`in `<script src>` satırıdır, diskteki dosya değil. Üretilmiş
  haritayı ölçmek, koşu, yayın inişi, motor koduna dokunmak → **önce `KOSU-YAYIN.md`.**
- Şema ve alan sözlüğü: `VERI-YAPISI.md` (veri yazmadan önce oku) · motor: `MIMARI.md`.

## Veri kuralları

- `s:[{d:"..."}]` içindeki devlet kimliği `devletler.js`teki gerçek `id:` olmalı ve
  `arac/renkler.py` **`BOYALAR`**da tanımlı olmalı; yoksa bölge boyanmaz.
- Dönemler çakışmaz, ters olmaz, **sıfır uzunlukta olmaz** (Tebriz `f=t` yüzünden Çaldıran'dan
  sonra Osmanlı hiç görünmedi).
- Kronoloji maddelerinde **gün yaz:** `"1526-08"` ayın 1'ine genişler ve senkronu bozar.
- Yeni `s:` dönemi yazarken devletin ömrünü `devletler.js` `f`/`t`'den kontrol et (hayalet devlet).
- Künye aşımında önce sınıflandır: devlet öldüyse dönemi KISALT · aynı polity sürüyorsa künyeyi
  GENİŞLET · ardıl yapı geçtiyse ardıl künye. Sınır kayması önerilince iki ucu da ölç.
- Yeni yerleşimden önce mükerrer tara: normalleştirilmiş ad + 3 km.
- `__BOSLUK__` haritada **delik**tir (boyanmaz). Önce şehir adlı tanık ara; yaklaşıklık
  kullanıcıya görünüyorsa bölge sahibi + beyan. **Beyansız yaklaşıklık, beyanlı boşluktan kötüdür.**
- **Boşluk doldurma merdiveni** (Emre, 16 Ekim 2026 — her `__BOSLUK__` ve beyanlı boşlukta, sırayla):
  ① TDV · ② öteki akademik kaynaklar · ③ komşu büyük devletlerin ve yerel devletlerin kaynakları
  (Venedik, Avusturya/TIB, Sırp, Yunan, Bulgar…) · ④ bulunamazsa *yerleşim o devirde var mıydı?*
  teyit et — **yoksa** dönemi kırp, toprak komşu peteklere kalır; **varsa** ⑤ bağlı olduğu **abi
  merkezi** (siyasî/idarî/askerî/iktisadî olarak kaderini paylaştığı büyük şehir) kaynakla bul ve
  akıbetini onun akıbetine bağla: `kaynak:`a "ABİ MERKEZ: <merkez> — <bağı gösteren kaynak>" +
  BEYANLI YAKLAŞIKLIK yaz. Abi merkezin kendi zinciri de kaynaklı olmalı (atlas kaydı değil).
  İlk vaka: Berat 1345-1417 → Avlonya (TDV avlonya).
- **Sahibi kaynakta bulunamayan ama var olduğu bilinen yer** boş kalmaz: önce o devirde var mıydı
  sorgula (yoksa toprağı komşu yerleşimlere böl); varsa siyasi-idari-askerî-iktisadî olarak
  birlikte hareket ettiği büyük merkezi seç ve onun zincirini izle; `kaynak:`a "zincir X'ten
  devralındı" yaz. Merkezin kendisi `__BOSLUK__` ise o dilimde yer de boşluk kalır. *(Emre,
  post-it #30, Palu→Harput, 17 Ekim 2026)*
- Ayrı dosya ≠ ayrı ad alanı: `data/<tur>_<kisaltma>.js` → `window.<TUR>_<KISALTMA>`.
- Türkçe metinde `sed` ve toplu `replace(…, 1)` kullanma; `"İ".lower()` iki kod noktası verir
  (`denetim/ARAC-NORMAL-0903.py`).

### Değişmezler (`py arac/denetle.py`)
- **Çıkış kodu:** `0` temiz · `1` ihlal · `2` ölçülemedi. **2 temiz değildir.** Cümleyi değil
  çıkış kodunu oku. Ana checkout'ta Değişmez 8 ölçülemez (`coz-c` ister) — kabul ölçümü ayrı
  worktree'de (`push_kapisi.py` yapar).
- **1 — sahipsizlik yok:** var olduğu tarihte sahipsiz yerleşim haritada deliktir.
- **2 — sessiz toprak değişimi yok:** her `d:`/`v:` kırılmasının ±30 gün içinde kronoloji
  maddesi olmalı. **Ölçütü gevşetme.**
- **3 — tarih × yerleşim × petek × bölge çelişmez** (henüz sağlanmıyor; çoğu `m:` zaman
  penceresi eksiği, `kd:` çözer). Motor `kd:`yi okumaz — gövde çakışması `kd:` ile düşmez.
- **8 — şehir bölgesi ülke sınırını aşamaz;** motor çıktısını ölçer, düzeltme koşudan sonra görünür.
- **Tavanlar (`BEKLENEN_*`):** bugünkü ölçümdür, sabitle aynı commit'te yazılır, yalnız gerileme
  bloke eder, iyileşince iner. Tavanı oturum önerir, **Emre onaylar.** En iyi istisna yazılmayandır.

## Kaynak kuralı

- **İslâm dünyası, Osmanlı ve komşuları: TDV İslâm Ansiklopedisi ilk başvuru;** tarih çelişkisinde
  TDV esastır (çelişki `ic_not`ta iki kaynağıyla beyan edilir). **Vikipedi tek dayanak
  olamaz.** Forum, blog, içerik çiftliği, YZ metni, popüler tarih sitesi, YouTube kullanılmaz.
- **Kaynak sırası — TDV'de durma** (Emre, 18 Ekim 2026). TDV yer-kişi ansiklopedisidir, çoğu
  zaman yalnız yıl verir. TDV maddeyi kapsamıyorsa, **yalnız yıl veriyorsa** ya da tarihin neyi
  tarihlediği belirsizse sıradaki basamağa geçmek **zorunludur**; bulunan her kaynak `kaynak:`a
  adıyla (dergi, cilt/sayı, yazar, yıl, sayfa ya da URL) yazılır:
  ① **TDV İslâm Ansiklopedisi** — `islamansiklopedisi.org.tr/arama/?q=`
  ② **İSAM** — Osmanlı Araştırmaları / Journal of Ottoman Studies, İSAM makale veritabanı
  (`ktp.isam.org.tr`), kadı sicilleri neşirleri
  ③ **Türk Tarih Kurumu (TTK)** — *Belleten*, *Belgeler*, TTK monografileri (`belleten.gov.tr`,
  `ttk.gov.tr`)
  ④ **DergiPark / TR Dizin** hakemli tarih dergileri — OTAM (AÜ), Tarih Dergisi (İÜ), Tarih
  Araştırmaları Dergisi (AÜ DTCF), Tarih İncelemeleri Dergisi (Ege), Türkiyat Mecmuası,
  Atatürk Araştırma Merkezi Dergisi. Platformda olmak yetmez: hakemli ve TR Dizin'de olmalı.
  ⑤ **YÖK Ulusal Tez Merkezi** — doktora tezleri; sancak/şehir monografileri gün taşır
  ⑥ **Tarih Vakfı** (*Toplumsal Tarih*, Yurt Yayınları) ve akademik yayınevi monografileri
  (yazar akademisyen, dipnotlu) — İş Bankası Kültür, Kitap, İletişim, YKY, üniversite yayınları
  ⑦ **Komşu ve yabancı akademik kaynak** — TIB (Bizans), Venedik/Avusturya/Sırp/Yunan/Bulgar
  akademik yayınları, uluslararası hakemli dergiler
  ⑧ **Birincil belge neşirleri** — Devlet Arşivleri (BOA/BCA katalog), Belgeler, antlaşma
  metinleri. Ham belgeyi biz okumayız; neşredilmiş ve tarihlenmiş hâlini kullanırız.
  Aynı gün iki bağımsız akademik kaynakta teyit edilirse `ic_not`a "çift teyit" yazılır.
- **Atlas referans değildir:** atlasın kendi dönemi, künye günü, koordinatı dayanak olamaz;
  çelişkide atlas düzelir. Komşu kaydın günü yalnız kendi kaynağına dayanıyorsa ve kayda
  "gün komşudan: …" yazılarak alınır; zincirleme devralma yok.
- **Tarih uydurma.** Gün yoksa `YYYY-01-01`; **yıl bilinmiyorsa yıl yazılmaz.** Kaynak yıl
  diyorsa yıl yazılır. Hassasiyet açıklayan alandan okunur.
- **Hicrî yıl:** `YYYY-01-01` yanlış güne düşer ⇒ hicrî aralık ∩ kaynağın mîlâdî yılı ∩ (varsa)
  ay — **kesişimin ilk günü**; seçim `ic_not`ta hicrî aralıkla beyan edilir; öncül/ardıl ucuyla
  çakışma kontrolü zorunlu; iki kaynaklı uç arasındaki boşluk zorla kapatılmaz.
- **Takvim (ay-güneş Çin/Kore/Japon · Jülyen/Gregoryen):** kaynak Batı karşılığını veriyorsa o gün;
  vermiyorsa tabloyla çevir (NAOJ, Academia Sinica…) + `ic_not` beyanı; çevrilemezse yıl/ay
  hassasiyeti (`YYYY-01-01` + beyan). *(Emre, 14 Ekim 2026)*
- **Teyit kampanyası:** yalnız yıl teyitli madde sınıra bağlı değilse `YYYY-01-01`e iner; bağlıysa
  "[yalnız yıl teyitli; gün teyitsiz]" notuyla kalır (`arac/teyit_uygula.py --yil-karari`).
- Kaynakta kesin okunan "şu yer, şu tarihte, şu devletin" tanıklığı
  `data/kaynakli_halka_<kisaltma>.js`e yazılır; çıkarım ve atlas kaydı yazılmaz.
- **TDV:** `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`. "TDV'de yok" demeden ara;
  TDV olay değil **yer-kişi** ansiklopedisidir. Arama aday üretir, `GET` doğrular; ölü slug
  (302), yanlış madde, boş gövde ve "çekilemedi ≠ yok" tuzaklarına dikkat; rakamı taşıyan
  cümlenin neyi tarihlediğini oku. Bulunamadıysa `bulunamadı` yaz, kaynak gizlenmez.
- Küçük model (Haiku) kaynak araştırmasında kullanılmaz.

## Worktree

Worktree, deponun **ayrı bir klasördeki ikinci çalışma kopyasıdır**: aynı git geçmişi, kendi
dosyaları, kendi dalı. Aynı klasörde iki oturum aynı dosyayı yazınca biri ötekini sessizce
ezer; her oturum kendi worktree'sinde yazınca bu fiziksel olarak imkânsızdır — iki iş ancak
push kapısındaki rebase'de buluşur: farklı satırlar kendiliğinden birleşir, aynı satırlar
**çatışma** verir ve kapı durur (iş kaybolmaz, oturum çözer).
- Açılış: `EnterWorktree` (ad = işin kısa adı). Bedel ~640 MB disk + yarım dakika.
- Üretilmiş ham dosyalar (`devletler_harita.js`, `donemler.js`) worktree'de YOKTUR; `denetle`
  gerekiyorsa önce `py arac/kodla.py coz-c data data/devletler_harita.js` ve
  `py arac/kodla.py coz-c data data/donemler.js donem`.
- Push worktree'nin içinden: `py arac/push_kapisi.py --kim "<AD>"` (dalı `origin/main`e rebase
  edip `main`e iter). Sonra `ExitWorktree` `remove`.
- Paralel alt ajanlar da aynı dosyaya yazacaksa `isolation: "worktree"` ile açılır.

## Git, kilit, push

- **Ağaç gerideyse ölçme:** `git fetch origin --quiet && git rev-list --count HEAD..origin/main`
  0 değilse önce güncelle. Ölçüm ayrı worktree'de `origin/main`den yapılır.
- **Dosya kilidi — ikinci katman, KANCAYLA kendiliğinden:** `arac/kilit_kanca.py` her
  Write/Edit'in önünde çalışır; dosyayı ilk yazmada senin adına (`oturum-xxxxxx`) alır, her
  yazmada süreyi tazeler. Dosya başkasındaysa yazmayı ENGELLER ve seni sıraya sokar — boşta
  başka iş varsa onu al, yoksa Emre'ye söyle. **60 dk o dosyaya yazılmazsa kilit düşer** ve
  sıradakine geçer. Kilit bütün worktree'ler için ortaktır, ama yalnız bu makineyi görür ve
  betikle (`py arac/...`) yazmayı görmez — asıl koruma worktree'dir. Elle:
  `py arac/kilit.py durum|al|birak|birak-hepsi` (çıkış 0 sende · 1 başkasında · 2 ölçülemedi).
- **Commit:** dosyaları **adıyla** ekle; `git add -A` ve dizin pathspec'i yasak. Aynı klasördeki
  oturumlar aynı index'i paylaşır: `git add -- <adlar>` + `git commit -F <mesaj-dosyası> -- <aynı adlar>`,
  sonra `git show --name-only` ile doğrula.
- **`main`e push yalnız `py arac/push_kapisi.py --kim "<AD>"`** (`--kuru` = itmeden sına). Kapı:
  kilit (sıra gelene kadar BEKLER, `--bekle-dk`, varsayılan 120; ölü-süreç kuyruk kaydını temizler) →
  fetch/rebase (üretilmiş `paket_*.js`/`paket_kunye.json`/`index.html` damga çatışmasını kendisi çözer,
  `paketle yenile` + `surum_damgala` ile yeniden üretip amend eder; GERÇEK veri çatışmasında rebase'i
  geri alır, kilidi bırakır, **çıkış 4**) → ayrı worktree'de `denetle` 0 (site dosyası değiştiyse
  `denetle_yayin` de 0) → push → geri okuma. Tuz dosyası `--tuz-onay`, motor çıktısı
  `--uretilen-onay` ister; > 95 MiB reddedilir. **Ölçülemedi (2) yalnız
  `--olculemedi-kabul "<gerekçe>"` ile geçer; ihlal (1) hiç geçmez.**
- Veri değiştiren oturum `paketle.py yenile` + `surum_damgala.py`yi kendisi koşturur.
- **Üretilen `data/*.js` yalnız HAVVA'nındır;** çatışması birleştirilmez, yeniden üretilir.
- **Motor dondurma:** `uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py` önbelleğin
  tuzudur; biri değişirse tam yeniden inşa (7-8 saat). Veri işinde bu dosyalara dokunma; HAVVA'da
  koşu sürerken bunları içeren commit `main`e girmez.
- **`coz-c` diriltir:** `kodla.py yay` çıkış 0 vermeden `coz-c` koşturma, ikisini tek satırda
  zincirleme (taze koşu çıktısı ezilir).
- **Süreç öldürme:** yalnız kendi başlattığın PID ve alt ağacı (`taskkill /T /PID <pid>`); ada,
  komut satırına, başlığa göre öldürme — makinede başka oturumlar koşar.
- Geçici dosyalar scratchpad'e ya da kendi worktree'ne; `denetim/` yalnız teslim içindir.
  Alt ajanlar da birbirinin dizinine yazmaz.
- Metin üreten komutlarda Bash backtick/heredoc kullanma: metni `Write` ile dosyaya yaz,
  `py <yol>` / `git commit -F <yol>` ile çalıştır (`arac/kabuk_nobetci.py` engeller).

## Ölçüm disiplini

- **Olgu bir dosyada yaşıyorsa hüküm verme, ölç** — hangi makinede, hangi ağaçta ölçüldüğünü yaz.
- **Ölçülemedi ≠ yok ≠ temiz.** Temiz rapor sorulmayan soruda temiz değildir; yeni bir denetim
  iki yönde sınanmadan çalışıyor sayılmaz.
- Sayı ölçümün fotoğrafıdır; belgede gördüğün sayıya güvenmeden önce yeniden ölç. Motor
  anlatısındaki sayılar koşunun logundan okunur.
- Beyan edilmiş borç sessiz borçtan iyidir — ama beyan ödeme değildir.
- Kuralların vakaları `dersler/DIZIN.md`de — kural tartışılınca aç, toplu okuma.
