# B-GORUNUM-0072 — "B görünümü" (A + dolgu) motor kalemi

Sen bu projenin **B GÖRÜNÜMÜ** oturumusun. Emre 20 Eylül 2026'da açıkça istedi:
*"B görünümü koşusunu başlatmak için koşu ve kod yazıp koşuyu başlatalım."*
Kodu SEN yazarsın, **koşuyu 1.MURAT başlatır** (`uret_petek.py`yi yalnız Oturum 0
koşturur — CLAUDE.md §7).

## Bağlayıcı tanım — `oturumlar/GORUNUM-ABCD-0916.md`, "## B" bölümü
Oku (yalnız o bölüm yeter). Özeti:
```
A = sürtünmeli yürüyüş haritası (BUGÜN üretiliyor, koşu 14 onu üretti)
B = A + DOLGU: boşluk · aynı devletin parçaları arasındaki BOŞ toprak ·
    derin koridor · sahipsiz toprağın paylaşımı
TEK KOŞU: motor A'yı dokunulmamış yazar, AYNI koşuda dolgu parçalarını
    AYRI çıktıya yazar (her parça: devlet kimliği · tarih aralığı · geometri · dolgu cinsi)
ARAYÜZ: "B görünümü" anahtarı açıksa dolgu parçaları A'nın ÜSTÜNE o devletin
    rengiyle çizilir; kapalıysa çizilmez. Geçiş anlık, YENİ KOŞU GEREKMEZ.
🔴 ENKLAV KURALI: dolgu hiçbir devletin A toprağını ÖRTMEZ, yalnız BOŞ araziyi doldurur.
   Arada başka devletin şehri/bölgesi varsa parça GERÇEK enklavdır — asla birleştirilmez,
   "incelenecek" diye raporlanır.
```

## Bugün ne var, ne yok (1.MURAT ölçtü, 20 Eylül)
- `arac/uret_petek.py` içinde `B_DOLGU` diye bir şey YOK · dolgu veri dosyası YOK ·
  arayüzde anahtar YOK. Seçilebilen tek katman D'nin "Hukukî / Fiilî" ayrımı.
- Yani bu iş sıfırdan yazılacak; var olan bir şeyi düzeltmiyorsun.

## Kalemler
- **B-1 · DOLGU HESABI (`arac/uret_petek.py`).** A gövdeleri üretildikten sonra, aynı
  kesitte: kara maskesinden bütün A gövdeleri ve göller çıkarılır → BOŞ toprak. Boş
  toprağın bağlı bileşenleri çıkarılır ve her bileşen için sahiplik kararı verilir
  (komşuluk/uzaklık ölçütünü SEN öner, gerekçesiyle). Çıktı `data/dolgu_*.js`,
  ad alanı `window.DOLGU_*` (D225: dosya verirken değişken adı da verilir).
- **B-2 · CİNS ALANI.** Her parça `cins:` taşır: `bosluk` · `koridor` · `enklav-bag` ·
  `paylasim`. Emre bir cinsi kapatmak isterse arayüzden kapatabilsin.
- **B-3 · ARAYÜZ ANAHTARI (`index.html` + `js/app.js`).** "Ⓑ Dolgu (B görünümü)"
  onay kutusu. Katman sırası: dolgu A'nın ÜSTÜNDE, **taramanın ve sembollerin ALTINDA**
  (Emre'nin 0071'deki kuralı: gösterimler birbirine girmeyecek). Renk = o devletin
  rengi, ama A'dan ayırt edilebilmeli — saydamlık/doku önerini ölç ve göster.
- **B-4 · MALİYET ÖLÇÜMÜ — koşudan ÖNCE, ŞART.** Dar bir dilimde (tek devir ya da
  `MOTOR_YURUYUS` ile kısa pencere) koş ve ÖLÇ: ① dolgu hesabının kesit başına eklediği
  süre ② `data/dolgu_*.js` toplam boyutu ③ A çıktısının değişip değişmediği (DEĞİŞMEMELİ —
  A dokunulmamış kalacak). Üç sayı olmadan tam koşu istenmez.
- **B-5 · MOTOR KALEMİ B ile BİRLİKTE.** Sırada bekleyen "kalıcı sadeleştirme" işi
  (sınır havuzu −%87,7) aynı koşuya bindirilecek. `js/app.js`te çizim öncesi
  Douglas–Peucker ZATEN var (1.MURAT yazdı, sınır dişleri çaresi A). Motor tarafında
  kalıcı hâle getirmenin dolgu boyutuna etkisini de ölç.

## Sınır ve sahiplik
- `arac/uret_petek.py` · `index.html` · `js/app.js` PAYLAŞILAN: yazarsın ama
  **COMMITLEMEZSİN**, 1.MURAT commitler. Kendi `denetim/B-GORUNUM-*` dosyalarını
  adıyla commitlersin.
- 🔴 KOŞU BAŞLATMA. Motoru tam koşu için ÇALIŞTIRMA; dar dilim sınavı serbesttir ve
  `MOTOR_ONBELLEK_DIZIN=C:/atlas-onbellek` önbelleğini kullanır.
- Veri dosyalarına (`data/yerlesimler*.js`, `data/olaylar*.js`) DOKUNMA.

## Teslim
TEK tahta mesajı → `1.MURAT`: ① ne ölçtüm (B-4'ün üç sayısı) ② ne bulamadım
③ ne istiyorum + değişen dosya listesi + "koşuya hazır mı" hükmün.
`py arac/tahta.py yaz --kim "B-GORUNUM-0072" --kime "1.MURAT" --mesaj "$(cat <dosya>)"`
Bekçi: `py arac/tahta_bekci.py --kim "B-GORUNUM-0072" --cik` (Bash `run_in_background`).

## Ortak kurallar
`oturumlar/DALGA-0072.md`nin "Herkes için ortak kurallar" bölümü aynen geçerlidir.
