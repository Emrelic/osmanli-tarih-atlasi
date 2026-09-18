# Tarih Atlası — her oturumun önce okuyacağı dosya

**Her satır bir KURAL; gerekçesi ve vakası [`dersler/`](dersler/DIZIN.md)dedir** (17 Eylül
2026 budaması: 167 → 25 KB, hiçbir kural silinmedi; sınav
`py denetim/ARAC-PROTOKOL-BUDAMA-0917.py --sina`). Kural tartışılınca vakasını aç.

## Belge seti ve açılış
**AÇILIŞTA YALNIZ İKİ BELGE OKUNUR: bu dosya + kendi şartnamen** (`oturumlar/<ADIN>.md`).
Aşağıdakiler **yalnız iş gerektirirse, adıyla ve gerekli bölümüyle** açılır — hiçbiri "her
oturumda" değildir (4 belge = 440 KB/oturumdu; 17 Eylül 2026 token kararı, Emre).

| Belge | Ne | Ne zaman |
|---|---|---|
| `dersler/DIZIN.md` + `D*.md` | kuralların vakaları | bir kural TARTIŞILINCA — toplu okunmaz |
| `ONCELIK.md` | neyi önce, neyi hiç (çöl seyyahı) | kapsam sorusunda ÖNCE buraya bak, gerekirse itiraz et |
| `YOL-HARITASI.md` · `YAPILACAKLAR.md` | nereye · sıradaki işler | koordinatör; işçi şartnamesi derse |
| `MIMARI.md` · `VERI-YAPISI.md` | motor · şemalar | motora / veriye dokunacaksan ŞART |
| `BES-ALTYAPI.md` | beş altyapı unsuru (Emre, 16 Ağu) — `ALTYAPI.md §0`ın yerini alır | altyapı sorusu |
| `DURUM.md` · `OGRENILENLER.md` · `ETIKETLEME.md` | durum · eski dersler · etiket | adıyla sorulursa |

Veriye/motora dokunacaksan ek olarak `git log --oneline -10` ve `py arac/durum_tablosu.py`
(sayılar §1.5 ile uyuşmuyorsa önce onu söyle). [`D231`](dersler/D231-belge-seti-acilis-sirasi.md)

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
| Yerleşim (motorun okuduğu) | **3808** nokta, 77 girdi dosyası |
| Kronoloji | **1300** madde · 1238 duygu etiketli · 1202 `yer_id` · 28 `vefat_id` |
| Değişmez 1 — sahipsizlik | ✓ 3808 yerleşim, 314 sahipsiz (beklenen 314) |
| Değişmez 1b — iç boşluk | ✓ BEYANSIZ pencere arası boşluk: 0 (beklenen 0) · beyanlı 5/5 — tam tarama |
| Değişmez 2 — Osmanlı senkronu | ✓ 520 kırılma, 0 açık (beklenen 0) |
| Değişmez 2s — yabancı senkron | ✓ 1327 YABANCI kırılması · 104 AÇIK (tavan 121) · 364 KAPSAM DIŞI |
| Değişmez 2i — işgal senkronu | ✓ 62 İŞGAL kırılması, 3 açık (tavan 3) |
| Değişmez 2t — kırılmasız madde | ✓ kırılmasız madde: 12 (tavan 42) — bilinen borç |
| Konum denetimi | 0 nokta kara maskesinin dışında (beklenen 0) |
| Devletler dizini | **627** künye · **579** renk (`renkler.py`) |
| Dizinsiz harita kimliği | ✓ **0** kimlik / 0 pencere karşılıksız · *kapsam: `girdi.py`nin okuduğu 77 dosya, `s:`+`isg:` alanları — bağlanmamış partiler HARİÇ* |
| Kasıtlı boşluk kimliği | 🟡 **1** kimlik / 2 pencere · *`__BOSLUK__` — hiçbir künyenin kapsamadığı dilim; en yakın kimliğe İTİLMEDİ (`§3.5.1`). Kusur değil, BEYAN* |
| Renkli-künyesiz kimlik | ✓ **0** çiziliyor ama dizinsiz · *kapsam: `renkler.py` BOYALAR − (künye `id` ∪ `harita:`)* |
| Renksiz künye — HARİTA DELİĞİ | ✓ **0** kimlik veride kullanılıyor ama BOYANMIYOR · 🟡 39 sessiz borç (künye var, veride yok) · *kapsam: künye `id` ∪ veride kullanılan − BOYALAR(`harita:` varsa o) · `__BOSLUK__` muaf* |
| Padişah · kartvizit | 41 kayıt · 36 portre · **41** kartvizit dolu |
| Harita penceresi | `box(-180, -60, 180, 85)` |
| Yayın | **r7487** · `a00592d` |

**Elle yazılmaz, üretilir** (`denetle.py`ye sorar): `py arac/durum_tablosu.py` · `--yaz`
(§1.5'i günceller). Güvenmeden önce koştur; bayat tabloyla kabul ölçütü kurulmaz.
[`D199`](dersler/D199-durum-tablosu-elle-yazilmaz.md)

## 1.6 Kapsam disiplini
Yedi boyut: tarih çizgisi · coğrafî kapsam · devletler · devlet kronolojileri · yerleşimler
· kişiler · olaylar. **8. boyut (konu başlıkları) Emre'nin 2 Eylül kararıyla AÇIK ama
SIRALIDIR:** yalnız ① kronoloji maddesine kendi görseli (`gorsel:` · YALNIZ kamu malı/CC0 ·
`gorsel_kaynak:` açıkça) ve ② ek okuma türlerinin tanımı açıldı; öteki konular sevk bekler.
Açmayı/kapatmayı yalnız Emre yapar. Vaka: [`D200`](dersler/D200-sekizinci-boyut-acildi.md)

---

## 2. Petek motoru — tek zayıf nokta
Her yerleşim çevresindeki toprağın **peteği** (Voronoi) sahibidir; sınır kıyı/nehir/sırta
yaslanır, kara maskesiyle kesilir, göller çıkarılır. Geometri `data/yerlesimler.js`ten her
gün için yeniden üretilir.
- **Noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE boyanır.** "Harita
  yanlış" raporunda ilk soru: *o bölgede yerleşim noktası var mı?* (Sardinya 1533, Kefalonya,
  Brač/Hvar, Ordu-Ünye.)
- Motor anlatısındaki sayılar (göl, nehir, dağ, çöl tavanı) **koşunun logundan** okunur,
  yorumdan değil. Vaka: [`D201`](dersler/D201-petek-motoru-sayilar-logdan.md)

---

## 3. İhlal edilemez değişmezler
**Her veri değişikliğinden sonra `py arac/denetle.py`** — tek kapı odur. (Eski tek satırlık
`node -e` denetimleri ve ölçülmüş sayıları [`D202`](dersler/D202-uc-degismez-tam-metin.md)de
birebir duruyor; `denetle.py` hepsini daha geniş evrende sorar.)
- **1 — sahipsizlik yok.** Var olduğu tarihte sahipsiz yerleşim = haritada delik. Sahipsiz
  sayısı §1.5'teki beklenenin üstüne çıkarsa yeni delik açılmıştır (beklenenler kasıtlı
  çöl/dolgu noktaları).
- **2 — sessiz toprak değişimi yok.** Her `d:`/`v:` kırılmasının **±30 gün** içinde kronoloji
  maddesi olmalı. **Ölçütü gevşetme.**
- **3 — tarih × yerleşim × petek × bölge çelişmez** (henüz sağlanmıyor). Kusurun %93'ü `m:`
  alanının **zaman penceresi** eksikliği (`kd:` çözer); ~%1'i eksen kusuru ve `kd:` onu
  çözmez. `OSMANLI` ile `tâbi` çelişki SAYILMAZ.

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
  id aranmaz). Üç haneli yıl dizgi karşılaştırmasında `pad()` şart. Aracın çökmesi yanlış
  cevap vermesinden iyidir. [`D205`](dersler/D205-uc-sinif-careleri-ters.md)
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
  `data/kaynakli_halka_<kısaltma>.js`e yazılır (şema `VERI-YAPISI.md` son bölüm); örtülü,
  çıkarım, istisna cümlesi, bölgeden şehre taşınan hüküm, atlas kaydı halka almaz; iki ayrı
  kaynağın uçları birleştirilmez. [`D208`](dersler/D208-bayrak-kurali.md)
- **Kırmızı çizgi** (Emre, 9 Ağu): dışarıda yalnız akademik/güvenilir kaynak. KULLANILMAZ:
  forum · blog · içerik çiftliği · kaynaksız derleme · YZ üretimi metin · popüler tarih
  sitesi. Bağlayıcı olan kırmızı listedir; kırmızıya girmeyen kurumsal kaynak adıyla yazılarak
  kabul edilir. Kaynak gizlenmez; bulunamadıysa `bulunamadı` yazılır. [`D209`](dersler/D209-kirmizi-cizgi-ara-bolge.md)
- **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`; **yıl bilinmiyorsa yıl yazılmaz**
  ("temsilî" damgası uydurmayı meşrulaştırmaz). Sahte kesinlik de yasak: künyenin `f:`/`t:`
  günü bir KAYNAK DEĞİLDİR; kaynak yıl diyorsa yıl yazılır ve fark bildirilir. Pencere uçları
  (`1923-10-29`) ölçüm değeri değil sınır işaretidir. [`D210`](dersler/D210-hassasiyet-kaynagi-asamaz.md)
- **Hassasiyet alanı:** tarih alanı kaynağın desteklediği en kaba güvenli düzeyi taşır, ay/gün
  metinde durur; `YYYY-MM-01` biçimi "ayın 1'i" ile "ay biliniyor"u ayırt edemez — hassasiyet
  AÇIKLAYAN alandan okunur. Kaba tarih künye penceresi dışına düşüyorsa künyenin günü
  devralınır ve kaynaksızlığı bildirilir. Türetilen sayı alıntıya yazılmaz. [`D213`](dersler/D213-ay-ayin-birine-kodlanmis.md)
- **TDV tuzakları:** ① ölü slug (HTTP **302**) · ② canlı slug, yanlış madde (`ordu`→
  `ordu--sehir`, `cin`→`cin--ulke`, `torun`) · ③ boş gövde · ④ boilerplate gövde (çekilemedi ≠
  yok) · ⑤ `000` taşıma arızasıdır, ölü değil · ⑥ kaynak kendiyle çelişebilir — çelişkiyi
  bildir; ama **önce cümleyi doğru ayrıştır** (Türkçe yan cümle) · ⑦ çıkarıcının "okuyamadım"ı
  belge hakkında bir şey söylemez (ikinci çıkarıcı dene) · ⑧ rakamın gövdede geçmesi o değeri
  desteklediği anlamına gelmez — **rakamı taşıyan cümlenin neyi tarihlediği okunur**; eşleşme
  sayısı dayanak gücü değildir; gövde ile künye karşılıklı okunur. **Doğru maddeyi yalnız
  içeriği okumak ele verir.** [`D211`](dersler/D211-tdv-tuzak-5-8-once-ayristir.md) · [`D214`](dersler/D214-tdv-olu-slug-yanlis-madde.md)
```bash
curl -s -o /dev/null -w "%{http_code}" https://islamansiklopedisi.org.tr/<slug>
# 302 → ÖLÜ (arama sayfasına yönleniyor)      200 → madde VAR
```
- **Arama:** `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`. "TDV'de yok" demeden ARA;
  dar slug tutmazsa kapsayıcı maddeyi dene — **TDV olay değil yer-kişi ansiklopedisidir**, olay
  slug'ı ölüyse olayın geçtiği YERE ya da başındaki KİŞİYE bak. Kapsama tablosu künye
  kapsamasıdır, kasaba taneciği için hüküm vermez. Kaynak yoğunluğu komşu bölgeye taşınmaz.
  [`D212`](dersler/D212-kaynak-yogunlugu-komsuya-tasinmaz.md) · [`D216`](dersler/D216-kapsam-boslugu-iki-cins.md) · [`D217`](dersler/D217-tdv-olay-degil-yer-kisi.md) · [`D218`](dersler/D218-tdv-isabet-orani-81.md)
- **Türkçe yazım ekseni:** `d:`e `devletler.js`teki gerçek `id:` yazılır (`aceh`→
  `ace-sultanligi`); "yok" demeden `bolge:` alanı taranır. Kodda `"İ".lower()` iki kod noktası
  verir, `casefold()` de çözmez → `denetim/ARAC-NORMAL-0903.py` normalleştiricisi; ayrı adlar
  (`Diyarbekir`↔`Diyarbakır`) eşanlam sözlüğü işidir. [`D215`](dersler/D215-turkce-yazim-ekseni-lower.md)

Doğrulanmış slug kümesi: `grep -oh 'kaynak:"[^"]*"' data/olaylar*.js | sort -u`

---

## 5. Dosya haritası
```
index.html · js/app.js · css/style.css   uygulama (yeni data/*.js → index.html'e satır)
data/yerlesimler*.js     ELLE YAZILAN coğrafî kaynak — CANLI liste: arac/girdi.py GIRDI_DOSYALARI
data/olaylar*.js         kronoloji ÇEKİRDEĞİ (Değişmez 2 evreni)
data/kronoloji*.js       kronoloji KUYRUĞU (canlı ama Değişmez 2 evreninde DEĞİL)
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

## 6. Kapsam genişlemesinin sırası
Dizin katmanı → yerleşim yoğunluğu → harita penceresi. **Nokta yoğunluğu sağlanmadan pencere
açılmaz** (kenar petekleri dünyaya yayılır). [`D220`](dersler/D220-kapsam-genisleme-sirasi.md)

---

## 7. Oturum düzeni ve dosya sahipliği — EN ÖNEMLİ KURAL
Bölme ölçütü **dosyadır**; her dosyanın tek sahibi var. Oturum 0 (koordinatör, 1.MURAT):
`yerlesimler.js`, `uret_petek.py`, üretilen `data/*.js`, kök `*.md`. Öteki oturumlar
şartnamelerinin verdiği dosyalara yazar; **emin değilsen sor.** Rapor/denetim oturumları
düzeltme yapmaz. [`D221`](dersler/D221-dosya-sahipligi-uretim-kilidi.md)
- **`uret_petek.py`yi yalnız Oturum 0 koşturur.** Koşu sürerken `data/` VE `arac/`
  donmuştur; motorun "girdi dosyaları SERBEST" satırı koşunun sağlığını söyler, çıktının
  yayınlanabilirliğini değil. Koşular ayrı worktree'de (`C:/atlas-kosuNN`) koşar. Başlatan
  "girdi kilitli" / bitince "dosya senin" der; devir sözle yapılır.
- **Uzun bir işi (koşu) başlatmadan önce** tahtaya "BEN BAŞLATIYORUM · ne · ~süre" yaz ve
  60 sn bekle; çakışmada beyana değil süreç damgasına bak. [`D225`](dersler/D225-ad-alani-kaynak-sahipligi.md)
- **Koşu nöbetçisi** düzenli canlılık basar (60 dk'da bir); sessizlik "iyi gidiyor" değil
  "nöbetçi ölmüş olabilir"dir. (Tahta bekçisi ise mesaj yoksa sessizdir — §7.2.)
  [`D222`](dersler/D222-nobetci-altyapiyla-olur.md)
- **Commit:** push ve paylaşılan dosyalar Oturum 0'da. Oturum KENDİ ürettiklerini
  (`oturumlar/<ADI>.md`, `denetim/<ÖNEKİ>…`) **adıyla** commit eder; dizin pathspec'i ve
  `git add -A` YASAK; pathspec commit'te de tekrarlanır, `git show --name-only` ile
  doğrulanır. Commit teslim değildir. [`D223`](dersler/D223-commit-istisnasi-pathspec.md)
```bash
git add -- <adlar>
git commit -F <mesaj-dosyası> -- <aynı adlar>
```
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
```
İŞÇİ        rapor · veri · teslim · soru → YALNIZ TAHTA (py arac/tahta.py yaz).
            Koordinatörün ekranına send_message YAZILMAZ; satır satır mesaj atılmaz,
            bir teslim TEK mesajdır. (Tahta çalışmıyorsa ⑤b istisnası geçerli.)
KOORDİNATÖR iş YAPMAZ, dağıtır — bağlamını uygulama işiyle doldurmaz.
OTURUM SEÇİMİ  doğruluk > tasarruf > hız · doğruluktan hiçbir şey için taviz yok.
            Varsayılan TAZE oturum (her tur bütün bağlamı yeniden okur: maliyet ≈
            bağlam × tur). Tecrübeli/emekli oturum yalnız işin doğrudan devamıysa ve
            doğruluk kazancı varsa. Alakasız dolu işçiye iş VERİLMEZ.
BEKLEME     ScheduleWakeup · /loop · sleep ile tahta YOKLANMAZ, "tahtayı kontrol
            ediyorum" yazılmaz. Tek yol: Monitor + `arac/tahta_bekci.py --kim <AD>`
            (mesaj yoksa sessiz, yalnız adına mesaj gelince uyandırır).
```
- **① Kanal = tahta.** Ekrana yazılan rapor koordinatöre ulaşmaz. [`D226`](dersler/D226-haberlesme-dogusu-kanal.md)
- **② Ne zaman:** soru gelince HEMEN (iş sürse de) · aksaklık BEKLEMEZ · bitince teslim.
- **③ Yatay mesaj serbest, tahtadan** (`--kime "<ÖTEKİ>"`); atama, öncelik, kaynak çelişkisi
  hükmü ve yetki gerektiren her şey koordinatöre. Gerekçesi değişen kural yeniden ölçülür.
  [`D227`](dersler/D227-yatay-mesajlasma-serbest.md)
- **④ Üçlü kural:** ① ne ölçtüm (sayıyla) ② ne bulamadım (`bulunamadı` bir sonuçtur)
  ③ ne istiyorum (seçenekliyse önerinle).
- **⑤ Commit teslim değildir; teslim mesajdır.** **⑤b** "yazıldı" cevabı teslim kanıtı
  değildir — kritik mesajı `oturumlar/tahta.json`dan GERİ OKU; tahta çalışmıyorsa kritik
  raporu özel kanaldan gönder. Paylaşılan `.git` kilidine dokunulmaz.
- **⑥ Aksaklık beklemez:** başka oturumun dosyası gerekiyor · kaynaklar çelişiyor · şartname
  yanlış · sayı beklenenden çok farklı · kalem yetkini aşıyor · iş çok uzayacak → hemen yaz.
  Tahmin etmek sormaktan pahalıdır.
- **⑦ Çember** ve koordinatörün tarafı: §7.2. Duran oturum ölü değildir, cevabı sıkışmış
  olabilir. [`D228`](dersler/D228-teslim-aksaklik-cember.md)

## 7.2 TOKEN ZİNCİRİ — bir işin baştan sona yolu (17 Eylül 2026)
```
① AÇILIŞ        Emre oturumu açar ve adlandırır. Oturum CLAUDE.md'yi okur, kimliğini
                get_session("self") ile ölçer (scratchpad UUID'si DEĞİL).
                MODEL koordinatörün işidir: kıta hangi modelle açılmış olursa olsun, göreve
                göre set_session_model ile çevrilir (pahalıya çevirmek Emre onayı ister).
                "Hazır kıta" adı boşluk kanıtı değildir — list_events mesaj sayısı ölçülür;
                iş alan kıtanın adı görev adına çevrilir (set_session_title).
② GÖREVLENDİRME Koordinatör tahtaya (ya da ilk mesaj olarak) yazar; mesajın İLK SATIRI
                oturumun ADIDIR = tahta anahtarı, TAM yazılır (tahta TAM EŞİTLİK arar).
                Şartname oturumlar/<dosya>.md. Dosya sahipliği görev tablosunda yazılıysa
                AÇILIŞ MESAJI YOK; değilse tek satır "şu dosyalar bende".
③ TAHTA         Tek kanal: py arac/tahta.py yaz --kim "<AD>" --kime "<ALICI>" --mesaj "…"
                send_message yalnız tahta arızasında (§7.1 ⑤b).
④ BEKÇİ         Monitor + py arac/tahta_bekci.py --kim "<AD>". Uyandıran YALNIZ `kime`
                = ADIN ya da HERKES; gerisi sessiz. İşin yoksa sus, "bekliyorum" yazma.
⑤ YATAY MESAJ   İşçi→işçi tahtadan (§7.1 ③); atama/öncelik/kaynak hükmü koordinatöre.
⑥ TOPLU OKUMA   Koordinatör tahtayı olay olay değil, bekçi `--toplu 1800` ile 30 dakikada
                bir TEK özet satırla okur; işçiler buna göre 30 dk gecikme varsayar.
⑦ TESLİM        İş bitince TEK mesaj: ölçtüm · bulamadım · istiyorum + değişen dosya
                listesi; kritikse tahta.json'dan geri okunur. Paylaşılan dosyayı (data/,
                CLAUDE.md) koordinatör commitler; devralınan dosya için "dosya senin" denir.
⑧ EMEKLİLİK     Teslimden sonra DUR. Bekçi açık kalır; yeni iş gelirse uyandırır. Emekli
                oturuma yalnız işin doğrudan devamı verilir (varsayılan taze oturum).
⚠️ UYANDIRMA    TAHTA MESAJI DURAN OTURUMU UYANDIRMAZ — yalnız bekçisi açık olanı uyandırır.
                Duran/bekçisiz oturuma görev, send_message ile gider (tahtaya da kayıt için
                yazılır). 18 Eylül gecesi tahtaya yazılan görevler ~9 saat cevapsız kaldı.
                send_message "undelivered" diyorsa oturum ONAY PENCERESİNDE takılı olabilir —
                bunu yalnız Emre açabilir, ona bildirilir.
```
Bu zincire bağlanan eski kurallar: §7 koşu nöbetçisi (≠ tahta bekçisi) · §7.1 ①–⑦ ve TOKEN
KURALI · `arac/tahta_bekci.py` kullanım notu · `ClaudEmre/SARTNAME.md` ⑤ haberleşme bloğu.
**Çözülmemiş çelişkiler** (hüküm 1.MURAT/Emre'de, ayrıntı `denetim/PROTOKOL-BUDAMA-0917.md`):
ClaudEmre ⑤ bloğu hâlâ send_message diyor · eski "aynı anda en çok 3 oturum" bugünkü kadroyla
çelişiyor · ⑥'da ACİL mesaj için istisna yok.

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
py arac/uret_petek.py            # harita üretimi (~40 dk, yalnız Oturum 0)
py arac/uret_devirler.py         # devirler.js — uret_petek'ten SONRA koşar
py arac/renk_olc.py              # 🔴 VERİ DEĞİŞTİYSE ŞART — aşağıya bak
py arac/denetle.py               # altı değişmez
py arac/denetle_yayin.py         # yayın kapısı
py arac/surum_damgala.py         # index.html'deki ?v=rNN damgasını yükselt
```
- **Palet verinin fonksiyonudur:** veriye dokunan her koşudan sonra `renk_olc.py` (renge
  dokunmadan çakışma doğabilir).
- Ortamda `python` değil **`py`**. Üretim logu koşarken boş görünür (normal); çıktıda
  "Doğrulama: tüm yerleşimlerin peteği geçerli ✓" satırını gör. Yayından önce sürüm
  damgası yükseltilir; Pages gecikmesi ~40-60 sn.
- **Koşu çıktısı her zaman bayattır — yine de yayınlanır** (Emre, 17 Eylül): "YAYIN BAYAT"
  yayını durdurmaz, commit mesajına bilgi olarak yazılır; durduran yalnız koşunun kendi
  `denetle.py` ihlalidir. Gerekirse koşu durdurulup yeni tabanla başlatılır.
- Koşu bittiği an ≠ yayın indiği an: yayın inene kadar motor donuk (`D198`).
[`D229`](dersler/D229-komutlar-palet-bayat-yayin.md)

## 10. Çalışma protokolü (kullanıcı tercihi)
- **Onay bekleme**, devam et. Kullanıcı hataları numaralı partilerle bildirir — her maddeyi
  ayrı cevapla. "Ayrı madde ile gösterilmeli" = Değişmez 2 ihlali: kırılmayı bul, yaz.
- Görev bitince / soru sorarken **3 beep**; kullanıcının başında beklemediği uzun iş bitince
  **9 beep**. Bekçi tahmine değil gerçekleşmiş bir dosya damgasına bağlanır (petek için
  `data/donemler.js`). Bitti sanıp erken haber vermek, hiç vermemekten kötüdür.
```bash
powershell -c "[Console]::Beep(800,300); [Console]::Beep(800,300); [Console]::Beep(800,300)"
powershell -c "1..9 | ForEach-Object { [Console]::Beep(880,250); Start-Sleep -Milliseconds 120 }"
```
[`D230`](dersler/D230-calisma-protokolu-beep.md)

---

## 11. Tekrarlanmaması gereken hatalar
**Dizin: [`dersler/DIZIN.md`](dersler/DIZIN.md)** — 232 ders. Toplu okunmaz, kural
tartışılınca açılır. Yeni ders: slogan DIZIN'e tek satır, vaka `dersler/D<sıra>-<slug>.md`e
(ikisini buraya yazmak bu dosyayı yeniden şişirir). En sık aileler:
- **Ölçüm doğru, çıkarım yanlış** — hüküm ile teşhis ayrıdır; raporu kabul etmeden ölç.
- **Denetim var ≠ o soruyu soruyor** — temiz rapor, sorulmayan soruda temiz değildir;
  ölçülemedi ≠ yok ≠ temiz; boş küme her öngörüyü doğrular.
- **Bayatlayan belge/sayı** — sayı ölçümün fotoğrafıdır; kaynağını (log, alet) aç.
- **Toplu düzeltme** — `replace(…, 1)` yalnız ilk eşleşmeyi değiştirir; Türkçe/kesme işaretli
  metinde `sed` kullanma; heredoc yerine `Write` + `py <yol>`.
- **Yakın mükerrer yerleşim** — yeni noktadan önce ad (normalleştirilmiş) + 3 km tara.
- **Öngörü ölçümden önce yazılır** (sınav anı + evreniyle); yeni denetim iki yönde
  sınanmadan çalışıyor sayılmaz.
