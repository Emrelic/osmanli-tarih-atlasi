# SONNET HAZIR KITA 72 — İlerleme Defteri

## Görev (M-1122, koordinatörden — 23 Ağustos 2026 05:23)
Emre'nin isteği: "koordinatı olmayan, olay mahalli damgası taşımayan TÜM
kronoloji maddelerine olay mahalli koordinat noktası atayalım."
Dosyam: `data/kronoloji_isvec.js` (İsveç Krallığı kronolojisi).
Okuma: `data/kronoloji_isvec.js` → `window.KRONOLOJI_ISVEC`
Yazma: `data/yer_yama_isvec.js` → `window.YER_YAMA_ISVEC` (kendime özel ad
alanı — par.7: "AYRI DOSYA VERMEK, AYRI AD ALANI VERMEK DEĞİLDİR").
Kronoloji dosyasına DOKUNULMADI — yama koordinatör tarafından uygulanacak.

## Ölçüm
- `data/kronoloji_isvec.js`: 101 madde, `yer_id`/`yer_kon`/`kapsam_genis`
  hiçbiri olmayan: **87 madde**.
- Üretilen `data/yer_yama_isvec.js`: **87/87** kayıt, üç kovaya ayrıldı:
  - `yer_id` (nokta havuzunda VAR): **25**
  - `eksik_nokta` (yer belli, havuzda yok, koordinat araştırıldı): **54**
  - `kapsam_genis` (tek noktaya sığmaz): **8**

## Kapı denetimi (kendi yazdığım, kayıt üretildikten sonra koşuldu)
1. `node --check data/yer_yama_isvec.js` → sözdizimi TEMİZ.
2. Anahtar bütünlüğü (dosya+t+b): orijinal 87 eksik kayıtla **birebir**
   eşleşti — ne eksik ne fazla kayıt.
3. Mükerrer anahtar: **0**.
4. Her kayıtta üç alandan (yer_id/eksik_nokta/kapsam_genis) **tam bir
   tanesi** var — birden fazla ya da hiçbiri olan kayıt: **0**.
5. `eksik_nokta` alanlarının `ad`/`enlem`/`boylam`/`kaynak` dörtlüsü
   eksiksiz: **0 hata**.
6. `yer_id` değerlerinin 25'i de nokta havuzunda (`arac/girdi.py` →
   `yukle()`, 2605 kayıt) BİREBİR adla dogrulandı: **0 hata**.

## Yöntem — kova kararları nasıl verildi
- **Önce ucuza baktım**: `data/savaslar.js`'te Prut Antlaşması zaten
  koordinatlıydı (lat 46.48, lon 28.10) — o kaydı `eksik_nokta` olarak
  aynen aldım, yeniden araştırmadım.
- Maddenin kendi `d:` metni çoğu zaman olay mahallini AÇIKÇA veriyordu
  (ör. "Norrköping Riksdag'ında", "Linköping yakınında Stångebro'da",
  "Dimetoka'da") — bu durumda doğrudan havuzda arandı.
- **İkincil yer tuzağı** (şartnamede uyarılmıştı) iki maddede gerçekten
  çıktı: "Karl'a Osmanlı topraklarını terk etme izni verildi" maddesi
  Dimetoka'yı (gözetim yeri) anlatıyor, terk edilen toprakları değil —
  Dimetoka doğru mahal olarak alındı. "Åbo Antlaşması" metni kaybedilen
  toprakları (Finlandiya) anlatıyor ama imza yeri Åbo'nun kendisi — Åbo
  (Turku) doğru mahal.
- **Havuzda olmayan ama TDV/akademik kaynakla kesinleşen** 54 kayıt için
  `eksik_nokta` kullanıldı. Bunların **33'ü Stockholm** — dosyanın kendi
  başlık notu zaten bunu öngörmüştü ("~40 madde Stockholm eklenirse tek
  seferde dolar"). BULGU aşağıda, koordinatöre ayrıca bildirildi.
- Üç kayıtta (Scheele'nin oksijeni keşfi, Linnaeus'un Systema Naturae'yi
  bastığı yer, Nobel'in dinamiti icat ettiği yer) kendi bilgim yetersiz
  kaldığı için **WebSearch ile doğruladım**, akademik/resmî kaynaklara
  dayanarak (Uppsala Üniversitesi'nin kendi tarih sayfası — uu.se; The
  Linnean Society; NobelPrize.org). Linnaeus ve Nobel örnekleri özellikle
  öğretici: ilk sezgim (Uppsala / İsveç) YANLIŞ çıktı — Systema Naturae
  Leiden'de (Hollanda) basılmış, dinamit Krümmel'de (Almanya) icat
  edilmiş. Doğrulamadan yazsaydım iki hatalı `eksik_nokta` üretecektim.
- **Kapsam_genis kararları eksiklik değil karar olarak yazıldı** (şartname
  vurgusu): bölge çapında ayaklanma (2 kayıt, Dalarna), çok başkentli
  savaş ilanı (1 kayıt, Büyük Kuzey Savaşı), iki ayrı mahalli birleşen
  madde (2 kayıt: Kristina'nın Katolikliğe geçişi+Roma'ya yerleşmesi;
  İlk Nobel Ödülleri — Stockholm+Kristiania), tek fiziksel mahalli
  olmayan idari/diplomatik olay (3 kayıt: ilk Osmanlı-İsveç mektup teması,
  Oxenstierna naipliği, XII. Karl'ın Avrupa'ya dönüş yolculuğu — dosyanın
  kendi notu zaten "son durak doğrulanmadı" diyordu).

## BULGU — koordinatöre bildirildi (M-1122 cevabında)
`data/kronoloji_isvec.js`'in 54 `eksik_nokta` kaydının **33'ü Stockholm**.
Stockholm nokta havuzunda YOK (dosyanın kendi başlık yorumu bunu zaten
söylüyordu). Stockholm havuza eklenirse bu dosyadaki 33 kayıt tek
seferde `yer_id`'ye dönüşebilir — ama bu benim yetkim dışında (`§7`
dosya sahipliği, ayrıca `GİRDİ KİLİTLİ` — M-1109). Karar koordinatörün.

## Bulamadıklarım
Yok — 87 kaydın 87'sinde de bir karar (yer_id/eksik_nokta/kapsam_genis)
üretildi, hiçbiri "bulunamadı" ile kapanmadı. En düşük güvenli kayıtlar
(orta güven damgalı, ~9 kayıt) idari/diplomatik Stockholm atıflarıdır —
metin doğrudan Stockholm demiyor ama dönemin Riksdag/hükümet merkezi
olması gerekçesiyle atandı; kaynak alanında "orta güven" ibaresiyle
işaretli, koordinatör isterse ayrıca sınayabilir.

## Durum (M-1122)
TESLİM EDİLDİ. Yeni görev geldi: M-1153.

---

## Görev 2 (M-1153, koordinatörden — 23 Ağustos 2026 06:18)
Aynı iş, ikinci dosya: `data/kronoloji_memluk.js` (Memlük Devleti kronolojisi).
Okuma: `data/kronoloji_memluk.js` → `window.KRONOLOJI_MEMLUK`
Yazma: `data/yer_yama_memluk.js` → `window.YER_YAMA_MEMLUK`
Kronoloji dosyasına DOKUNULMADI — yamayı artık `arac/yama_uygula.js`
uyguluyor (koordinatörün yeni ortak aracı, benim şemama uydurulmuş).

### Ölçüm
- `data/kronoloji_memluk.js`: 155 madde, olay mahalli damgası olmayan
  **29 madde** (koordinatörün verdiği sayıyla birebir).
- Üretilen `data/yer_yama_memluk.js`: **29/29** kayıt —
  `yer_id` **7** · `eksik_nokta` **6** · `kapsam_genis` **16**.

### Kapı denetimi (aynı altı kontrol, tekrar koşuldu)
Söz dizimi temiz · anahtar (dosya+t+b) orijinal 29 eksikle birebir (0
eksik/0 fazla) · mükerrer anahtar 0 · her kayıtta tam bir alan var (0
hata) · `eksik_nokta` dörtlüsü eksiksiz (0 hata) · 7 `yer_id` değeri
havuzda birebir doğrulandı (0 hata).

### Çıkardığım hüküm (ayrı satır)
Koordinatörün öngörüsü doğru çıktı: Memlük'te `kapsam_genis` oranı
yüksek (16/29, %55). Sebep dağılımı iki cins: (a) çoğu bilateral
antlaşma/mektup için metin imza/gönderim yerini VERMİYOR (Kıbrıs
antlaşması 1370, Ceneviz 1386, Osmanlı-Memlük 1416/1491, Habeş
mektupları 1438/1441) — Kahire varsaymak yanlış olurdu çünkü karşı
taraf da olası; (b) bölge-geneli olaylar (Doğu Anadolu akını, Kârimî
ticaret baskısı/çöküşü, Barsbay'ın ilk iki Kıbrıs seferi — iniş noktası
verilmiyor). Sultan-sarayı olayları (Sultan Halîl'in öldürülmesi) ve
beylik tahtı olayları (Dulkadir — Maraş) AYRILDI, doğrudan yer_id aldı.

### Özel vaka — "bulunamadı", uydurma koordinat YAZILMADI
Şeyh el-Mahmûdî'nin 1409'da "Sarhad'da" mağlup edilmesi maddesinde
Sarhad'ın koordinatını bulamadım: TDV'nin kendi `ferec` maddesi
(içerik okundu) yer adını veriyor ama bölge/yakın şehir bilgisi
vermiyor, İngilizce akademik kaynaklarda da bulunamadı. Şema üç kova
tanımlıyor (yer_id/eksik_nokta/kapsam_genis) ve "bulunamadı, ama tek
noktadır" için dördüncü bir kova yok — bu kaydı `kapsam_genis` alanına
koydum ama notunda BÜYÜK HARFLE "BULUNAMADI" diye işaretledim ki
kapsam_genis'in gerçek (bölge-geneli) vakalarıyla KARIŞMASIN.
Koordinatöre ayrıca bildirildi — isterse bu tek kaydı ayrı ele alabilir.

### Bulamadıklarım
Yalnız yukarıdaki Sarhad koordinatı. 29 kaydın 28'i tam güvenle
karara bağlandı.

## Durum (M-1153)
TESLİM EDİLDİ (tahtaya yazıldı).

---

## Görev 3 (M-1169, koordinatörden — 23 Ağustos 2026 12:17)
Farklı iş türü: "BAYAT TARAMASI" — 27 açık kalemi (4 paket) tasnif etmek,
DÜZELTMEMEK. Her kalem için: notu oku → `git log --since` ile ilgili
dosyayı denetle → bugünkü durumu ölç (node ile, grep değil) → hüküm ver
(çözüldü / hala-açık / bayat), kanıtla.

### Teslim
`denetim/BAYAT-SONNET-HAZIR-KITA-72.json` — 27/27, hepsinde kanıt.
Dağılım: **çözüldü 4** · **hala-açık 22** · **bayat 1**.

### Öne çıkan bulgular
- **çözüldü (4)**: Parga peteği (NOKTA EPİR, commit 2931f04/66a6e69) ·
  Peşte/Kanije/Eğri Macaristan-Avusturya-Osmanlı sınır senkronu ve
  Şimontorna aynı oturumdan (MACARİSTAN SERHAT ARAŞTIRMA) · Teymâ
  kasıtlı boşluğun artık ekranda ayırt edilmesi (commit 06b2751).
- **bayat (1)**: Kutsal Roma 300+ devletçik mozaiği — proje zaten
  `OTURUM-3-DEVLETLER.md:64`'te "tek tek yazma" diye karar vermiş;
  paket bu kararı bilmeden aynı soruyu yeniden açık gibi sormuş.
- **hala-açık (22)**'nin çoğu iki kalıba düşüyor: (a) veri hâlâ ölçülen
  hâliyle aynı (Bağdat/timurlu, Aydın/Cüneyd senkronu, Manama/Bahreyn
  eksik `s:` dönemleri — H-0007 ve H-0021 AYNI kusurun iki yüzü, Culfa-
  Tebriz boşluğu — H-0027/H-0028), (b) "kaynak turu yapılmadı" notu hâlâ
  geçerli ve dedike bir oturum bulunamadı (Nitra, Kazak bozkırı ayrıntı,
  Kuzey Karadeniz bozkırları).
- **En ilginç vaka — H-0030**: kısmen çözülmüş görünüyor ama TAM DEĞİL.
  Kod düzeltmesi (`savasIsaretleri` artık `ANTLASMALAR`ı okuyor, commit
  4581d71/r2598) doğrulandı — ama veri düzeltmesi eksik kaldı: 41
  antlaşma kaydının 40'ında hâlâ `lat`/`lon` yok. Notun kendi "üçü de
  düzeltildi" iddiası KISMEN YANLIŞ çıktı — bunu tahtaya ayrıca bildirdim.
- **Emin olamadığım 3 kalem** (H-0009, H-0017, H-0018 — hepsi parti-0003):
  "hala-açık" yazdım ama kanıt alanında NİÇİN emin olamadığımı açıkça
  belirttim (belirsiz eşleşme, hangi spesifik olayın kastedildiği net değil).

## Durum (M-1169)
TESLİM EDİLDİ (tahtaya yazıldı, commit 857e0a3). Yeni görev bekliyorum.
