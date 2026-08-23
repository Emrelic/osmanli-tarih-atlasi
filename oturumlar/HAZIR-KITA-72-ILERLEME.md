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

## Durum
TESLİM EDİLDİ (M-1122 cevabı, tahtaya yazıldı). Yeni görev bekliyorum.
