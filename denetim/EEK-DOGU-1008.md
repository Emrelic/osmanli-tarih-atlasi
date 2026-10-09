# EEK-DOGU-1008 — paket 0085: H-0027 (Cizre) · H-0026 (Erciş) · H-0028 (kırpıntı)

Yöntem: `oturumlar/EEK-PROTOKOL.md` (dört ihtimal, ölçüm sırası ①-⑤).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (2026-10-08)
Evren: `girdi.yukle()` (GIRDI_DOSYALARI) · `data/devletler.js` · `data/olaylar*.js` · `renkler.BOYALAR`.
- **H-0027 Cizre:** Cizre noktasının `s:` zincirinde 1469 sonrası Akkoyunlu'ya
  geçmeyen bir `karakoyunlu` dönemi var (ya da Cizre'yi bir Bohtî/Cizre beyliği
  kimliği tutuyor ve o kimlik Karakoyunlu boyasıyla çiziliyor). Tarihî beklenti:
  Cizre (Bohtan) beyleri yerel Kürt hanedanıdır; Karakoyunlu çöküşünden sonra
  Akkoyunlu'ya tâbi/ele geçmiş olmalı → **② DAHA ÖNCE/AYNI KAMPANYA** ya da
  ayrı yerel kimlik. Öngörülen sınıf: ② (kaynak bulunursa), yoksa olculemedi.
- **H-0026 Erciş:** Erciş noktası 1469 sonrası hâlâ `karakoyunlu` → bu bir
  HAYALET DEVLET (künye t:1469-12-19 aşımı) ya da Akkoyunlu'ya geçiş tarihi geç.
  Öngörü: Erciş'in `s:`i künye penceresini AŞIYOR → sınıf ② (Akkoyunlu'ya
  1467-69 kampanyasıyla geçti), çare: kırılma tarihini kaynağa çek.
- **H-0028:** yeri okunmuyor; tarama Akkoyunlu gövdesi içinde 1-5 yabancı
  kimlikli cep (Hasankeyf Eyyûbî, Bitlis/Rojiki, Cizre, Hakkâri vb. Kürt
  beylikleri) verecek; tek yere bağlanamazsa `olculemedi`.

> Öngörü sınavı: H-0027 sınıfı TUTMADI (② dedim, ölçüm ① — Cizre 1467'de alınmamış, TDV fethi
> 1473'e koyuyor). H-0026 kısmen tuttu (Erciş künyeyi AŞMIYOR, hayalet değil; sorun komşulardan
> 2 yıl geç kırılma, sınıf ③). H-0028 tuttu (yer bağlanamadı → olculemedi + aday listesi).

## ① NE ÖLÇTÜM
Evren: `girdi.yukle()` 93 dosya; o günün sahibi = isg > d (OSMANLI) > s > v. Voronoi komşuluğu =
Delaunay (≤250 km), bölge 30-56D / 28-44K. Cep taraması: Akkoyunlu-dışı bileşen, komşularının ≥%60'ı
akkoyunlu, ≤15 nokta; 1402-08-01 → 1514 arası her 91 günde + 1467-11-10 · 1468-04-01 · 1468-12-31.
Künyeler (`data/devletler.js`): `karakoyunlu` f 1351-01-01 t **1469-12-19** · `akkoyunlu` f 1340 t 1514.
Olaylar: `olaylar_ek5` 1467-11-10 (Cihan Şah öldürüldü) · `olaylar_ek20` 1467-01-01 (Van gölü havzası
Akkoyunlu'ya: Van·Bitlis·Bargiri·Hoşap·Kotur) · `olaylar_ek7` 1468-04-01. 1469-01-01'de doğuya ait madde YOK.
Taban `py arac/denetle.py` = **çıkış 2** (yalnız Değişmez 8 ÖLÇÜLEMEDİ: devletler_harita.js yok);
2s: 1722 yabancı kırılma · 185 AÇIK (tavan 185).

### H-0027 — Cizre · "Cibli" (= `Cibri (Güçlü)`, Cizre'nin 10 km'lik komşu kopyası)
- Nokta VAR (Cizre `yerlesimler_ok107.js`, Cibri `yerlesimler_sinir_guney.js`) — emilme değil.
- `s:` Cizre/Cibri: `karakoyunlu 1431→1469-01-01 · akkoyunlu 1469-01-01→1508-01-01` · 1508-1515 BEYANLI boşluk · d 1515-09-19.
- Komşular — Mardin kümesi (Mardin·Midyat·Nusaybin·Silopi·Cumai·Malikiye·Ḩīmū·Babū): karakoyunlu→akkoyunlu
  **1467-11-10**. Musul kümesi (Musul·Telafer·Sincar·Duhok·Zaho·Akra·İmâdiye·Erbil·Tirwānīsh): **1469-01-01**.
- Ölçülen cep: **1467-11-10 → 1469-01-01** Cizre+Cibri = 2 noktalık karakoyunlu ADASI, 8 komşunun 8'i
  akkoyunlu. Musul kümesi ada DEĞİL (Irak karakoyunlu gövdesine bağlı) — görseldeki Sincar/Telafer uzantısı o.
- KAYNAK: TDV `uzun-hasan` (200): "Anadolu'da Ahlat ve el-Cezîre (Cizre) hânedana mensup Koç Bayındır Bey …
  tarafından zaptedildi (1473)." · TDV `akkoyunlular` (200): "Kirman (1469) ve Bağdat'ı (1470) ele geçirdiği
  gibi Ahlat ve Cezîre yöreleri ile Muş ve Bitlis'i de aldı." · TDV `cizre` (200): Timurlular devrinde "Emîr
  Bahtî'nin idaresindeydi" · "1469 yılında Karakoyunlular ve daha sonra Akkoyunlular bölgeye hâkim oldular" ·
  "1508'de Cizre'yi Akkoyunlular'dan alan Emîr II. Şeref". TDV `karakoyunlular`: Hasan Ali (1467-1469) Nisan
  1469'da öldürüldü; Bağdat kolu 19 Aralık 1469'da bitti.
- **KARAR: ① GERÇEKTEN ATLANDI.** Cizre 1467 kampanyasında alınmadı; TDV fethi 1473'e (Koç Bayındır) ve
  "Bağdat 1470'ten sonra"ya koyuyor. Karakoyunlu devleti 1467-11 → 1469-04 Hasan Ali ile sürüyor (künye
  penceresi İÇİNDE; hayalet değil). Emre'nin gözlemi doğru: Cizre o pencerede Akkoyunlu değildi.
  Çare: hiçbir şey yazılmaz, cep BEYAN edilir. Diff YOK.
- ⚠️ Cebin kendisi değil, KİMLİĞİ ve UCU kusurlu (iki ayrı kalem):
  (a) Cizre'nin 1431-1469 `karakoyunlu`su kendi yorumunda "HİZALAMADIR, kaynak değil"; TDV yerel Bahtî/Bohtî
  emirlerini anlatıyor. (b) Akkoyunlu başlangıcı 1469-01-01, TDV'ye göre ~4 yıl ERKEN (1473).
  Çaresi künyedir: `devletler.js` TARANDI ("cizre|bohtan|azizan|cezîre" — yalnız Mervânî/Ukaylî/Zengî/Eyyûbî
  özetlerinde geçiyor) ⇒ Cizre/Bohtan emirliği künyesi YOK. Aynı künye 1508-1515 beyanlı boşluğunu da kapatır.
  Karakoyunlu'yu 1473'e uzatmak YASAK (künye 1469-12-19'da bitiyor → hayalet, §3.5).

### H-0026 — Erciş
- Nokta VAR (`yerlesimler.js` Erciş 39.026/43.360). `s:` `karakoyunlu 1351→1469-01-01 · akkoyunlu 1469→1502`.
  Künye penceresi TUTUYOR (1469-01-01 < 1469-12-19) — hayalet değil.
- Komşular: Van · Bitlis · Bargiri (Muradiye, en yakın) · Hoşap · Kotur · Çaldıran · Özalp · Doğubayazıt
  hepsi **1467-01-01**'de akkoyunlu. Erciş tek başına 2 yıl geç.
- Cep: 1467-01-01→1468-04-01 Erciş, karakoyunlu gövdesine kuzeyden (Iğdır-Digor) bağlı YARIMADA;
  **1468-04-01→1469-01-01** (Revan·Nahçıvan·Tebriz·Hoy·Şeyh Salû akkoyunlu olunca) Erciş + 9 kuzey nokta
  (Digor·Iğdır·Norapat·Beri·Eçmiyadzin·Gümrü·Kliçatak·Küçükperveli·Arpaçay) = 10 noktalık karakoyunlu ADASI
  (komşu: 18 akkoyunlu · 4 gürcistan · 2 sahipsiz).
- KAYNAK: TDV `ercis` 302 (ölü); arama "ercis"/"erciş" → yalnız `ercisli-emrah` ⇒ Erciş maddesi **bulunamadı**.
  TDV `van` (200): "Cihan Şah döneminde (1438-1467) Van ve çevresi Karakoyunlular'ın hâkimiyetinde kaldı.
  Karakoyunlu-Akkoyunlu mücadelesi sonunda Uzun Hasan bu yörede Akkoyunlu hâkimiyetini başlattı (1467)."
  Aynı madde Erciş'i Van yöresi yerleşimleri arasında sayıyor. Erciş'in 1469-01-01'i kayıtta KAYNAKSIZ
  (yorum yalnız 1351 kuruluşunu anıyor).
- **KARAR: ③ BİRLİKTE ALINDI, KAYNAK SUSUYOR.** Van yöresi 1467'de geçti; Erciş için adıyla tarih yok.
  ② değil: Erciş'in kendi kaynağı yok. ① değil: hiçbir kaynak Erciş'in direndiğini söylemiyor.
  Çare: `EEK-DOGU-1008-KOORD.diff` — Erciş karakoyunlu→akkoyunlu **1469-01-01 → 1467-01-01**, `kesinlik:"yil"`,
  `kaynak:` içinde "ÇIKARIMDIR" + "Gün komşudan: Van · TDV van (1467)" (D207 dört şartı: komşu günü kendi
  kaynağında · Erciş'te kaynak gün vermiyor · aynı süreç · 55 km, aynı göl havzası). Zincirleme devralma yok.
- D206 iki uç (bellekte yamalı tarama, aynı betik): Erciş Akkoyunlu ana gövdesine (Van-Bitlis-Siirt)
  bağlanıyor, yeni ada AÇILMIYOR; 1468-04→1469-01 kuzey karakoyunlu adası 10 → 9 nokta — o ada ÖNCEDEN vardı.
- Değişmez 2s öngörüsü: yeni kırılma 1467-01-01 `olaylar_ek20` maddesinin (yer_id Van) ±30 günü içinde;
  eski 1469-01-01 kırılmasının yakınında doğu maddesi yok ⇒ AÇIK 185 → ≤185. ÖLÇÜLEMEDİ (②'ye bak).
- Bilinen yıl-temsilî borç: Van grubunun 1467-01-01'i asıl olaydan (10 Kasım 1467) 10 ay ÖNCE; D210 gereği
  yıl kodlaması. Erciş bu gruba katılıyor, borcu büyütmüyor.

### H-0028 — küçük kırpıntı (yer okunmuyor)
Akkoyunlu döneminde Akkoyunlu'ya ≥%60 çevrili yabancı cepler (1402-1467 arası: **0**):

| pencere | kimlik | noktalar | not |
|---|---|---|---|
| 1467-11-10 → 1469-01-01 | karakoyunlu | Cizre · Cibri | = H-0027 (① gerçek) |
| 1468-04-01 → 1469-01-01 | karakoyunlu | Erciş + 9 kuzey (Iğdır·Digor·Gümrü·Eçmiyadzin…) | = H-0026 + kuzey ada |
| 1468-04-01 → 1469-01-01 | karakoyunlu | Zencan | İran |
| 1469 → 1502 | lur-i-kucek | Luristan | İran |
| 1469 → 1501 | gilan-kiya · mazenderan-marasi · şirvanşah | Reşt·Lâhîcan · Sârî·Âmül · Şamahı… | Hazar kıyısına açık |
| 1503 → 1508 | safevi | Kasr-ı Şîrîn | Akkoyunlu Irak kalıntısı içinde |

(Dvin "SAHIPSIZ" sahte çıktı: `bit:1236` — yerleşim yok, aday DEĞİL.)
**KARAR: olculemedi.** Görselin yeri okunmuyor. 157×107 boyutu ve "Akkoyunluların hâkimiyetine geçmemiş"
sözü en çok Cizre-Cibri adasına (2 nokta, 8/8 akkoyunlu) uyuyor — bu bir eşleştirme tahminidir, ölçüm değil.
Cizre ise cevap ①'dir (H-0027).

## ② NE BULAMADIM
- TDV `ercis` maddesi (302); `bohtan`, `cizre-beyligi`, `cebel`, `cibli`, `hasan-ali` slug'ları 302; arama
  "bohtan", "cizre beyleri", "cibli" → madde yok. Musul'un 1467-1469 kaderi: TDV `musul` 302 (`musul--irak`
  denenmedi) — Musul kümesinin 1469-01-01 sınırı DOĞRULANMADI.
- Kuzey ada (Kars 1467 akkoyunlu iken Gümrü/Arpaçay/Digor 1469; Revan 1468-04 iken Eçmiyadzin 1469) için
  kaynak aranmadı — kapsam dışı, ayrı `*eek` kalemi adayı.
- **denetle.py SONRA ölçümü YOK:** diff'i kendi ağacımda uygulamak (data/yerlesimler.js'e geçici yazma) izin
  katmanınca REDDEDİLDİ. Taban çıkış 2. `git apply --check` TEMİZ (LF; HEAD 54e3da7c).

## ③ NE İSTİYORUM
1. H-0026 diff'ini uygula ve `denetle.py` sonra-çıkışını ölç (öngörü: 2; 2s AÇIK ≤185 — düşerse tavan aynı
   commit'te iner, §3.4 ②).
2. H-0027: diff yok, cep BEYAN. Karar sende: Cizre (Bohtan) emirliği künyesi açılsın mı. Açılırsa
   Cizre/Cibri `… → 1473 cizre-emirligi · 1473 → 1508 akkoyunlu · 1508 → 1515-09-19 cizre-emirligi` olur
   (1473 TDV uzun-hasan; başlangıç günü yeniden ölçülmeli) ve beyanlı boşluk kapanır.
3. H-0028: Emre'den görselin günü/yeri — yoksa olculemedi kalır.
4. ARTUKLU-IKI-PARCA ile ÇAKIŞMA YOK: o diff 1281-1465 Harput/Çemişgezek/Palu; bu diff yalnız Erciş 1467-1469.
