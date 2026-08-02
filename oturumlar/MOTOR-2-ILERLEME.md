# MOTOR 2 — İLERLEME DEFTERİ (2 Ağustos 2026, Fable 5)

> Görev tanımı: `oturumlar/MOTOR-2-GOREV.md` (4c366a9) · Ana brifing: `MOTOR-KAPILAR.md` (19417f7)
> Kapsam: İş A (ortaasya2 girdiye) · İş B (denetle.py:962 kaynaktan okusun) · İş C (BOLGE maliyet ÖLÇÜMÜ)
> Kapı B (15 Avrupa rengi) BU OTURUMDA DEĞİL — VERİ KİMLİK 2 çakışması.

---

⏳ başladım: İş A — ortaasya2 çakışma ölçümü + girdiye alma — 2026-08-02 12:10

## ✅ İş A — ortaasya2 girdiye alındı (12:25)

Ölçümler (hepsi bu oturumda, betik scratchpad'de; sayılar KENDİ ölçümüm):
- ortaasya2: **7 nokta · 9 kimlik · rengi olmayan 0 · 7/7 BOLGE kutusu içinde**
  (lon 51,92..61,50) — koordinatörün sayılarıyla birebir aynı.
- **3 km çakışma: 0 çift** (canlı 991 noktaya karşı; beklenen negatif sonuç,
  çıkmadı). En yakın çift 17,36 km: Aşkabad ↔ Nesâ (yerlesimler.js).
  Partinin kendi içinde de 3 km çifti yok.
- Çürük yorumlar KENDİ ölçümümle düzeltildi: asya rengi olmayan kimlik
  98→**135** (toplam kimlik 147), avrupa 228→**237 nokta**. Koordinatör
  ölçümüyle uyumlu.

Kabul koşusu (`py arac/denetle.py`, öncesi/sonrası tam çıktı karşılaştırıldı):
- Değişmez 1: **50 sahipsiz → 50 sahipsiz** (991→998 yerleşim). YENİ SAHİPSİZLİK YOK. ✓
- Değişmez 2: 493 kırılma, 0 açık — değişmedi. ✓
- Konum: 0 maske dışı — değişmedi. ✓
- ⚠️ Değişmez 2s (bilinen borç, taban zaten ✗ 119/114): 610→614 kırılma,
  açık 119→**121 (+2)**. Yeni iki açık satır yalnız ortaasya2 noktaları:
  `1500-01-01` (Aral kuzeyi · Emba · Üstyurt kuzeyi — Nogay/Kazak sahneye
  çıkışı, TDV yıl vermiyor) ve `1640-01-01` (Guryev kuruluşu). 1869 ve 1881
  satırları önceden vardı (Krasnovodsk, Dihistan), yalnız nokta eklendi.
  → Kırılma borcu VERİ KRONOLOJİ sınıfı iş; koordinatöre bildirildi.
- Değişmez 2t: 52 — değişmedi (taban zaten ✗ 52/49).
- Çıkış kodu her iki koşuda da 1 (bilinen borçlar yüzünden) — SINIF DEĞİŞMEDİ.

---

⏳ başladım: İş B — denetle.py:962 _BOLGE_KUTU kaynaktan okusun — 2026-08-02 12:30

## ✅ İş B — denetle.py _BOLGE_KUTU artık kaynaktan okunuyor (12:40)

Elle kopya `(-12, 1.5, 62, 62)` silindi; `_BOLGE_KUTU` artık
`uret_petek.py`'deki `BOLGE = box(...)` satırından regex ile okunuyor —
desen `denetle_kapsama.py:47-58` emsalinden (a6215ce) aynen alındı.
Ayrıştırma başarısızsa SystemExit (sessizce eski değere düşme YOK).

Kabul ölçütü ÜÇ UÇLU, üçü de koşuldu:
- ① önce: `py arac/denetle.py` → çıktı X (İş A sonrası koşu)
- ② sonra: aynı koşu → **çıktı BİREBİR AYNI** (satır satır diff: 0 fark;
  çıkış kodu da aynı, 1 — bilinen 2s/2t borçları)
- ③ `uret_petek.py` BOLGE GEÇİCİ olarak 62→63 yapıldı →
  `denetle._BOLGE_KUTU` **(-12.0, 1.5, 63.0, 62.0)** okudu = YENİ değeri
  gördü. Sonra geri alındı; doğrulama: tekrar (-12.0, 1.5, 62.0, 62.0) ve
  `git diff arac/uret_petek.py` boş — kalıcı iz YOK.

---

⏳ başladım: İş C — BOLGE 142° genişletme MALİYET ÖLÇÜMÜ (kutu açılmayacak) — 2026-08-02 12:45

## ✅ İş C — BOLGE genişletme MALİYET ÖLÇÜMÜ (12:55) — KUTU AÇILMADI

Yöntem: `uret_petek.py:91-152` maske kurulumu ayrı betikte BİREBİR taklit
edildi (KARA_TOL 0.002, göl filtresi, goller.js tarihî göl düzeltmeleri
dahil). `uret_petek.py` ÇALIŞTIRILMADI; hiçbir depo dosyasına yazılmadı.

### İstenen dört sayı

**① Bugünkü maske** — box(-12, 1.5, 62, 62), 74° genişlik:
- alan **3.363 derece²** (~35,5 milyon km²) · poligon **1.102** ·
  köşe 52.339 · çıkarılan göl 90

**② Kutu 142°'ye açılınca** — box(-12, 1.5, 142, 62), 154° genişlik:
- alan **6.417 derece²** (~64,5 milyon km², ×1,91) · poligon **2.522**
  (×2,29) · köşe 98.933 (×1,89) · çıkarılan göl 204
- kv ızgarası (0,05°): 1,79 M → 3,73 M hücre (×2,08)

**③ Kutuya giren yeni nokta**: yerlesimler_asya.js 344 noktadan **320**.
🔴 **24 nokta 142° kutusuna SIĞMIYOR** — boylamdan değil GÜNEY sınırından:
hepsi 1,5°K'nın altında (Endonezya/Malaya: Singapur, Cava, Bali, Makassar,
Ternate, Timor… lat −10,18'e iniyor). Yani "lon 142" tek başına Asya
partisini TAM almıyor; karar verirken bilinmeli.
- **③b ek ölçüm — TAM kutu** box(-12, −11, 142, 62): 344/344 girer;
  alan 6.915 derece² (×2,06) · poligon 3.047 (×2,76) · köşe 117.955
  (×2,25) · kv ızgara 4,50 M hücre (×2,51)

**④ Tahminî koşu süresi** — dayanak r578 = 43 dk (10:24→11:07, bugünkü
maske + 991 nokta). TÜRETİM: koşu maliyetinin sürücüleri ölçülen dört
çarpanla büyür — kara alanı ×1,91 (ızgara Dijkstra + rasterleştirme),
ızgara ×2,08, maske köşesi ×1,89 (Voronoi kırpması), poligon ×2,29 (ada
kuralı), nokta ×1,32 (998→1318, Voronoi). Doğrusal ölçekleme varsayımıyla
çarpanlar ×1,9–2,3 kümesinde ⇒ **43 × (1,9..2,3) ≈ 82–99 dk, merkez ~90 dk
(≈ 2,1 kat)**.
⚠️ DOĞRUSAL OLMAYABİLİR — takımada ölçüldü: eklenen 62°..142° şeridinde
1.421 poligonun **1.261'i 0,01 derece²'den küçük ada**. Ada kuralı kara
parçası başına iş yapıyor; o aşama parça×nokta ile ölçeklenirse
(×2,29 × ×1,32 ≈ ×3,0) tavan **~130 dk**. TAM kutuda (③b) çarpanlar
×2,1–2,8 ⇒ 90–120 dk merkez ~105 dk, takımada tavanı ~160 dk.
⚠️ §82 uyarısı ölçümle doğrulandı: 1.261 küçük adanın çoğunda nokta
olmayacak — "nokta = çevresindeki toprak" varsayımı her adada kırılır;
süre kadar ÇIKTI kalitesi de takımadada ayrı karar ister.

KARAR KOORDİNATÖRÜN — kutu açılmadı, uret_petek.py'ye dokunulmadı
(İş B'nin ③ geçici denemesi anında geri alınmıştı, `git diff` boş).

---

📌 ÇÜRÜK UYARI BİLDİRİMİ (koordinatör istedi, YAZILMADI — Kapı B kapsamı):
`arac/renkler.py:352` "ortaasya2 hâlâ d:\"kazak\" yazıyor" uyarısı ÇÜRÜK —
dosya bugün `kazak-hanligi` yazıyor (üç kayıt) ve palette `#ad1457` ile
tanımlı; kendi ölçümüm de 9 kimlik / 0 eksik dedi. renkler.py'ye dokunmadım.

---

⏳ başladım: İş B-2 — denetle.py _KARA_TOL + _DOGAL_GOL kaynaktan okusun — 2026-08-02 13:05

## ✅ İş B-2 — _KARA_TOL ve _DOGAL_GOL de kaynaktan okunuyor (13:15)

denetle.py'deki maske sabiti bloğu tek parse'a birleştirildi: BOLGE +
KARA_TOL + DOGAL_GOL üçü de `uret_petek.py`'den regex ile okunuyor
(DOGAL_GOL `ast.literal_eval` ile küme olarak; küme değilse hata).
Herhangi biri bulunamazsa SystemExit — sessizce eski değere düşme YOK.

Kabul ölçütü ÜÇ UÇLU, üçü de koşuldu:
- ① önce: çıktı X (İş B sonrası koşu)
- ② sonra: aynı koşu → **satır satır diff 0 fark** (çıkış kodu aynı: 1,
  bilinen 2s/2t borçları)
- ③ uret_petek.py'de GEÇİCİ: KARA_TOL 0.002→0.003 VE DOGAL_GOL'e beşinci
  göl ("GECICI TEST GOLU") eklendi → denetle **0.003** ve **5 elemanlı
  kümeyi** okudu = YENİ değerleri GÖRDÜ. Geri alındı; doğrulama: 0.002 +
  4 göl, `git diff arac/uret_petek.py` boş — kalıcı iz YOK.

---

⏳ başladım: İş D — renk_olc.py aynı-anahtar tarih örtüşmesi denetimi — 2026-08-02 13:25

## ✅ İş D — renk_olc.py'ye aynı-anahtar örtüşme denetimi eklendi (13:45)

`ayni_anahtar()`: devletler.js kayıtlarını aynı `harita:` anahtarında
gruplar, grup içinde TARİH ÖRTÜŞMESİ arar (f_a < t_b ∧ f_b < t_a).
`denetle()` çıktısına yeni bölüm + son karar satırına eklendi.
Not: `girdi._cevir` devletler.js'i çeviremiyor (ölçüldü: JSONDecodeError) —
dört düz alan hedefli ayrıştırılıyor; kronoloji maddeleri (`{` ile başlayan
satırlar) ve `//` yorumları atılıyor (devletler.js:1724 yorumunda
`harita:"bosna"` geçiyor, filtresiz komşu kayda sızardı — ölçülüp görüldü).

Kabul ölçütü İKİ UÇLU, ikisi de koşuldu:
- ① ATEŞLEDİ: `iran → afsar (1736-03-08→1796-01-01) ↔ kacar
  (1789-03-21→1923-10-29)`, örtüşme penceresi **1789-03-21 → 1796-01-01**
  (7 yıl) — beklenen vaka, tam pencereyle yakalandı.
- ② SUSTU: diğer bütün paylaşımlı anahtarlarda sıfır alarm.

KENDİ ölçümüm (koordinatör sayılarıyla karşılaştırma):
- 242 kayıt · **125'i harita: taşıyor · 112 benzersiz anahtar** — koordinatörle birebir.
- ⚠️ Paylaşımlı anahtar **8** (13 değil): arnavutluk(2) · bulgaristan(3) ·
  fas(2) · iran(2) · macaristan(3) · romanya(2) · sirbistan(4) · suud(3)
  = 21 kayıt. "13" muhtemelen 125−112 çıkarmasından geliyor; o sayı
  FAZLA KULLANIM sayısıdır (21 kayıt − 8 anahtar = 13), anahtar sayısı değil.
- Susulan: **7 anahtar** (çift olarak: 19 çiftten 18'i sessiz, 1'i ateşledi).
  Hepsi ardışık/örtüşmesiz desen — yanlış alarm 0.

Görülüp DOKUNULMAYAN (Kapı B/renk partisi kapsamı):
- renkler.py:352-353 çürük "d:kazak" uyarısı (önceden bildirildi)
- renkler.py:355+ bayat ΔE bloğu — kendini BAYAT diye işaretliyor zaten;
  sayılar %30 opaklıkla ölçülmüş, gerçek 0,44 (satır 41 ve app.js:559).

---

⏳ başladım: İş E — devletler.js ORTAK OKUYUCU (girdi.py) + renk_olc.py taşıma — 2026-08-02 14:00

## ✅ İş E — girdi.oku_devletler(): devletler.js'in TEK okuyucusu (14:20)

KÖK NEDEN TEŞHİSİ (ölçüldü): `_cevir`'in anahtar-tırnaklama regex'i dizelerin
İÇİNE işliyor — sirbistan-nemanjic özetindeki "(kaynak: TDV, madde:
sirbistan)" düzyazısında `madde:` anahtara çevrilip JSON kırılıyordu
(JSONDecodeError satır 442 sütun 289). yerlesimler düzyazısında `, kelime:`
deseni yok, devletler.js'inkinde var — üç oturumun üç ayrı geçici çözüm
yazmasının kökü bu.

Çözüm: `girdi.oku_devletler()` — DİZE-FARKINDA tek geçişli çevirici:
dizelerin içi hiç değiştirilmez; yorumlar ve sondaki virgüller yalnız dize
DIŞINDA ayıklanır; çıplak anahtarlar yalnız `{`/`,` sonrasında tırnaklanır.
Başarısızlıkta SystemExit (sessiz sıfır YASAK), 0 kayıt da SystemExit.
renk_olc.py'deki yerel ayrıştırıcı SİLİNDİ, ortak okuyucuya bağlandı —
iki otorite kalmadı.

Kabul ölçütü DÖRT UÇLU, dördü de koşuldu:
- ① kayıt sayısı **242** ✓
- ② `zend` BULUNDU ✓ — f=1751-01-01 t=1794-01-01, kronoloji 4 madde
- ③ harita: taşıyan **125** ✓ — 1724. satırdaki yorum içi `harita:"bosna"`
  SIZMADI; "bosna"yı yalnız gerçek kayıt (bosna-kralligi) taşıyor
- ④ SESSİZ SIFIR YASAK ✓ — iki sınama, ikisi de bozuk KOPYA üstünde
  (depo verisine dokunulmadı): ④a tırnağı silinmiş kopya → SystemExit
  "ayrıştırılamadı… bu 'veri yok' DEĞİLDİR"; ④b window.DEVLETLER'siz
  kopya → SystemExit "window.DEVLETLER bulunamadı"

Regresyon: renk_olc.py çıktısı taşıma sonrası BİREBİR AYNI (satır satır
diff 0; paylaşımlı 8 anahtar aynı). denetle.py çıktısı da BİREBİR AYNI
(girdi.py eklemesi yan etkisiz).

---

⏳ başladım: İş F — denetle_yayin.py:414 kimlikler.js BEKLEYEN'den çıksın — 2026-08-02 14:30

## ✅ İş F — kimlikler.js BEKLEYEN'den çıktı, EMEKLİ sınıfı açıldı (14:40)

denetle_yayin.py'ye `EMEKLI` sözlüğü eklendi (BEKLEYEN'in yanına, ayrımı
yorumda: bekleyen "bağlanacak" vaadi, emekli "hiç bağlanmayacak" hükmü).
kimlikler.js oraya taşındı, gerekçe satırında: EMEKLİ (0408bca), harita:
değerleri devletler.js'e taşındı, tek otorite devletler.js.

Kabul: önce/sonra tam çıktı diff'i — TEK fark kimlikler.js satırının
"bilerek bekliyor"dan "EMEKLİ (bağlanmayacak — bekleyen DEĞİL)" bölümüne
geçmesi. Yetim sayısı değişmedi (1: petek_govde.js — önceden vardı, benim
dışımda). "YAYIN BAYAT" uyarısı İş A'nın beklenen sonucu (girdi kümesi
değişti; üretim koordinatörde).

Aynı sözlükte iki çürük daha düzeltildi (§79 refleksi, kendi ölçümümle):
- yerlesimler_ortaasya2.js satırı SİLİNDİ — "nogay+kazak tanımsız" artık
  yanlıştı: kimlikler tanımlı ve parti İş A (27e234c) ile canlıda.
- yerlesimler_asya.js "98 kimlik" → **135** (İş A'daki kendi ölçümüm).

Not — ORGANIZASYON §16 (stash yasağı) okundu ve zaten uyumluyum: bütün
geçici değişikliklerim dosya bazlı edit + geri alma; git komutlarım hep
yol adlı (pathspec'li commit). stash hiç kullanılmadı, kullanılmayacak.

---

⏳ başladım: İş G — URETIM_IZI 7 üretilen çıktının 7'sine — 2026-08-02 14:50

## ✅ İş G — URETIM_IZI: yazıcılar 7/7, iz bugün 4/7 (petek koşusu bekliyor) (15:15)

Doğruladım (kendi ölçümüm): 7 üretilen çıktıdan yalnız donemler.js iz
taşıyordu — koordinatörün 1/7 sayısı doğru.

Yapılan:
- `girdi.uretim_izi_js(girdiler, betikler)` ortak yardımcı — KÖK'e göre
  yollarla girdi özetleri; EKSİK dosya SystemExit (küçülen iz taze okunur).
- `uret_petek.py`: bolgeler + devletler_harita + petek_govde yazımlarına
  donemler'inkiyle AYNI iz satırı eklendi (koşu BAŞINDA alınan _GIRDI_IZI —
  yardımcı KULLANILMADI, yeniden hashlemek koşu ortası değişikliğe taze
  damgası basardı). ÇALIŞTIRILMADI; py_compile temiz. Koşu koordinatörde.
- `uret_altlik.py`: iz — 4 NE geojson + uret_petek.py (sabit kaynağı) +
  varsa goller.js/motor_kara.geojson. KOŞTURULDU.
- `uret_devirler.py`: iz — donemler + devletler_harita + petek_govde +
  parmak_izi() dosyaları (isg: kaynağı); motor: uret_devirler + renkler.
  DEVIRLER_KAYNAK_OZET olduğu gibi duruyor. KOŞTURULDU.
- `uret_bekleyenler.py`: iz — BEKLEYENLER.md. dur() disiplini bozulmadı
  (uretim_izi_js zaten SystemExit atar). KOŞTURULDU.
- `denetle_yayin.py`: yeni İZ KAPSAMI bölümü — URETILENLER (7 dosya) tek
  tek: İZSİZ / BAYAT / taze SAYILIP ADIYLA yazılıyor; izsiz ya da bayat
  varsa ✗ ve çıkış koduna bağlı. uret_petek çıktılarında bayat_mi'nin küme
  kıyası da uygulanıyor (ortaasya2 vakası anahtar-anahtar kıyasta görünmez).
  Hüküm yalnız girdi ekseninde (bayat_mi ile tutarlı; motor ekseni koşu
  sırasında motor_izi_dogrula'da).

Kabul ölçütü ÜÇ UÇLU:
- ① Yazıcı kapsamı 7/7 tamam; BUGÜN iz 4/7 (altlik+devirler+bekleyenler
  taze, donemler eski koşudan BAYAT-bilinen). Kalan 3 uret_petek çıktısı
  izini İLK KOŞUDA alacak — koşu koordinatörde (43 dk, tetiklemedim).
- ② denetle_yayin artık SUSMUYOR: "✗ üretim izi: 4/7 taşıyor · taze 3 ·
  bayat 1 · izsiz 3" + üç izsiz ADIYLA listeleniyor.
- ③ ELLE BOZMA sınandı: bekleyenler.js izinin ilk hex'i değiştirildi →
  denetim "BAYAT data/bekleyenler.js — değişen: BEKLEYENLER.md" dedi;
  üretici yeniden koşturulup iz düzeldi (taze 3'e döndü).

Ayrıca doğru pozitif: donemler.js izi "girdi DOSYA KÜMESİ değişmiş:
yerlesimler_ortaasya2.js" ile BAYAT — İş A'nın bilinen sonucu, bayat_mi
ile aynı hüküm.

---

⏳ başladım: İş H — Ukrayna/Zaporojye kazakları taraması (yalnız ölçüm) — 2026-08-02 15:30

## ✅ İş H — Zaporojye taraması: KAYIT VAR, adı `zaporojye` (15:40)

Aranan: zaporo/zaporijya/siç/sich/hetman/kozak/ukrayna (büyük-küçük
duyarsız) — devletler.js + renkler.py + yerlesimler*.js + data geneli.

**BULUNDU:**
- `devletler.js:1116-1125` — `id:"zaporojye"`, "Zaporojye Kazak Hetmanlığı",
  tur:"cumhuriyet", f:1552-01-01 → t:1775-06-16, başkent "Zaporojye Seçi",
  4 kronoloji maddesi. **`harita:` alanı YOK** → haritada hiç çizilmiyor.
- `kimlikler.js:180` (EMEKLİ dosya) — "zaporojye" anahtarı, harita:null;
  eski sözlükte de aynı adla vardı.

**BULUNAMADI:**
- renkler.py BOYALAR'da ne `zaporojye` ne kısa `kazak` anahtarı var
  (yalnız `kazak-hanligi` #ad1457).
- Hiçbir yerlesimler*.js kaydı `d:"zaporojye"` kullanmıyor.
- Düzyazı geçişleri kimlik değil: devletler.js:157 (kirim kronolojisinde
  Hmelnitski), olaylar_ek5.js:244 (Çehrin 1678, "Ukrayna" yer adı).

**SONUÇ / KOORDİNATÖRE:**
① Karışma riski BUGÜN GERÇEKLEŞMEMİŞ: `kazak-hanligi` ile çakışan hiçbir
  anahtar yok; renkler.py:349-351 notu karışma UYARISI değil, gerçekleşmemiş
  RİSK notu — öyle yazılmalı (renkler.py bende değil, dokunmadım).
② Önerilen YENİ anahtar `zaporojye-kazaklari` GEREKMEYEBİLİR: dizin aynı
  yapıyı ZATEN `zaporojye` id'siyle taşıyor. Yeni ad açmak aynı kuruma
  İKİ kimlik verir (bugün kapatılan "iki otorite" sınıfı — İş D/E dersleri).
  Ad değişecekse mevcut kayıt yeniden adlandırılmalı, ikilenmemeli.
  Karar koordinatörün.

---

⏳ başladım: İş I — Avrupa partisi ÖN ÖLÇÜMÜ (girdi.py'ye EKLEME YOK) — 2026-08-02 15:55

## ✅ İş I — Avrupa partisi ön ölçümü (16:05) — GİRDİYE EKLENMEDİ

Hepsi kendi ölçümüm (betik scratchpad'de; salt okuma):

**① Kutu içi: 235/237** — koordinatör ölçümü DOĞRULANDI. Dışarıdaki 2:
  Sundsvall (62,391°K) ve Trondheim (63,431°K) — ikisi de KUZEY sınırından
  (lat 62), boylamdan değil. Kutu kararına girdi: 142° tartışması güney ve
  doğuyu konuşuyordu; İskandinav çifti KUZEY tavanını da soruyor.

**② 3 km çakışma: 0 çift** (canlı 998 noktaya karşı — beklenen negatif
  sonuç, çıkmadı). En yakın çift 12,31 km: Reggio Calabria ↔ Messina
  (yerlesimler.js). Partinin kendi içinde de 3 km çifti 0.

**③ Renksiz kimlik: 15/35** — koordinatör ölçümü DOĞRULANDI, liste birebir
  Kapı B'nin listesi: aragon · belcika · bretanya · burgonya · ferrara ·
  irlanda · iskocya · isvicre · kastilya · luksemburg · mantua · navarra ·
  parma · piza · siena. En ağır beşi (nokta): kastilya 22 · irlanda 12 ·
  burgonya 12 · aragon 10 · iskocya 9.

**④ YYYY-01-01 yer tutucu: 267/1070 damga = %25** (ortaasya2: %59 —
  aynı betikle yeniden ölçüldü, 26/44). Avrupa partisi tarih hassasiyetinde
  Orta Asya'dan 2,4 kat iyi; hassasiyet: alanı tartışması burada daha az
  yakıcı ama 267 damga yine de bilinmeyen gün taşıyor.

girdi.py'ye EKLENMEDİ — renkler gelmeden eklenirse 235 nokta boyasız girer.
Ekleme kararı koordinatörün.

### Ek (koordinatör istedi): `zaporojye` renksiz listeye katıldı (16:15)

Koşu için renk bekleyen küme: Avrupa'nın 15'i + **zaporojye** = 16 kimlik.
⚠️ AMA ölçüldü: hiçbir yerlesimler*.js kaydı (avrupa dahil) `d:"zaporojye"`
KULLANMIYOR — 0 nokta. Motorda yabancı gövde `s:` dönemlerinden kurulur
(uret_petek.py:1556-1557: kimliğe s: kaydı olan nokta yoksa `continue`);
yani zaporojye'ye renk + `harita:` verilse bile haritada GÖVDE ÇIKMAZ.
Zincirin üç halkası var ve bugün üçü de eksik:
  ① renk (RENK oturumunda) · ② devletler.js `harita:` (RENK'e devredildi)
  · ③ en az bir yerleşimin s: zincirinde `d:"zaporojye"` dönemi (VERİ işi —
  Dinyeper boyu nokta ister; muhtemel aday mevcut Kırım/bozkır noktalarının
  s: zincirleri ya da yeni nokta). ③ olmadan ①+② yalnız palet kaydı olur.

