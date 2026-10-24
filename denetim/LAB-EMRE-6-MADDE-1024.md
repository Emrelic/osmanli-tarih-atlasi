# LAB-EMRE-6-MADDE-1024 — Emre'nin 24 Ekim 2026 altı maddesi · ölçüm

Makine: LAB (denetleyici) · dal `lab-1004` · ölçüm betikleri scratchpad'de, sayılar aşağıda.

## 1) Kronoloji devlet seçicisine arama kutusu — ✅ YAMA HAZIR, tarayıcıda sınandı
- Kontrol: `#devlet-secici-panel` (js/app.js `panelDoldur`). Ölçüm: **893 satır**, arama yoktu.
- Yama: `denetim/LAB-KRONO-ARAMA-1024.diff` (js/app.js + css/style.css). Kutu listenin dışında bir kez
  kurulur (`panelDoldur` "+ ek"te listeyi yeniden çizdiği için), Türkçe normalleştirme `SUZGEC.sgNorm`,
  **kelime başı** eşleşme, Esc temizler, tek sonuçta Enter = ODAK yap, panel açılınca kutuya odak.
- Sınav (yerel sunucu, gerçek sayfa): `safevi`→1 · `İNG`→22 (iç-kelime eşleşmesiyle 33'tü, Ming/Jingwei
  geliyordu) · `roma`→4 · `kutsal ro`→1 · `osmanlı bosna`→1 · `zzz`→"eşleşen devlet yok" ·
  "+ ek" tıklandıktan sonra süzgeç ve yazılan metin KORUNUYOR. Konsol hatası yok.
- ⚠️ `js/app.js` UMIT'in dosyası, `main`in yazıcısı koordinatör → yama koordinatörün kararını bekliyor.

## 2) Sümerler — künye YOK
- `data/devletler.js` 895 künye; "Sümer/Akad/Uruk/Ur" geçen künye **0**. **En erken künye `f:` 0226-01-01 (Sâsânî).**
- Yani yalnız Sümer değil: Akad, Babil, Asur, Hitit, firavunlar Mısır'ı, Ahameniş, Makedonya, Roma, Han,
  Maurya künyelerinin HİÇBİRİ yok. Madde 5 ile aynı kök.

## 3) Devletsiz şehir / aşiret işaretleri her zamanda görünüyor — ✅ KÖK BULUNDU
- `data/bos_alanlar.js` 226 kaydın alanları: `ad lat lon cins yaricap_km neden` — **tarih alanı 0/226.**
- Üreteç `arac/uret_bosluk.py:121-127` kaynağın `s/d/v/isg/kur` alanlarını **düşürüyor**; `js/app.js:2733`
  işaretleri bir kez `Marker` olarak ekliyor, zamanla hiç güncellemiyor. Kod bunu zaten itiraf ediyor
  (`app.js:2727` "ZAMAN BOYUTU YOK … ANAKRONİZMDİR").
- Kaynak tarafı (girdi.py'nin okuduğu `bos:` kayıtları, çizilen üç cins) — 299 kayıt:
  ```
  HİÇ tarih yok (ne pencere ne kur:)        110   ör. Uzboy, Karakum, Üstyurt, Hoggar, Tibesti
  sahipli pencereler var, kur: yok          133   ör. Riyad, Manama, Mukalla, İrokua şehirleri
  sahipli pencereler var, SAHİPSİZ ARALIK 0  40   ör. Obdorsk, Mangazeya, Verhoyansk, İrkutsk
  sahipsiz aralık var (gerçek devletsiz an)  12   ör. Doha, Abu Dabi, Gao, Cenne, Suva
  yalnız kur:                                 4
  ```
  ⇒ **40 kayıt hiçbir anda devletsiz değil** (Vladivostok 1653'ten itibaren Qing→Rusya), yine de
  "devletsiz şehir" halkasıyla her tarihte çiziliyor.
- Uzboy/Karakum/Üstyurt: `tur:"bolge"`, `s:[] d:[] v:[]`, kaynak yıl vermiyor → kuralla (§4 "yıl
  bilinmiyorsa yıl yazılmaz") **çizilmemesi** gerekir, ta ki kaynak bir aralık verene kadar.
- Ayrıca `bos_alanlar.js` BAYAT: girdide 354 `bos:` kaydı, dosyada 226.

## 4) Soru işaretleri "veri susuyor" diyor, hiçbir şey anlatmıyor — ✅ ÖLÇÜLDÜ
- 32 `veri-yok` kaydı. Açılır pencere `neden:` alanını basıyor; o alan **okura değil araştırmacıya**
  yazılmış iç not: `"kunye-yok — transvaal kunyesi devletler.js'te YOK (koordinator M-0218'de yazacagini
  soyledi)"`, `"donem sinirlari KAYNAKTAN DEGIL devletler.js kunyesinden alindi"`, şapkasız ASCII Türkçe.
- 32'nin en az 9'u gerçekte "veri yok" değil **künye eksiği** (`kunye-yok` diye başlıyor: Transvaal,
  Oranj, Segu, İfe, Valata, Mengo, Büyük Zimbabve…) — bu bir kaynak sessizliği değil bizim borcumuz,
  haritada okura soru işareti olarak gösterilmemeli.
- Madde 3 ile aynı: soru işaretlerinin de zamanı yok, MÖ 12000'de de duruyorlar.

## 5) Roma vb. büyük imparatorluklar haritada yok — ⚠️ KAPSAM KARARI (yalnız Emre)
- Girdide 1281 öncesi başlayan sahiplik penceresi: **1** (Tui Tonga). Harita 1281'den önce hiçbir
  devlet çizmiyor; zaman çubuğu ise MÖ 12000'e iniyor → boş harita + yalnız tarihsiz işaretler.
- `ONCELIK.md:221` bunu bilerek erteliyor: *"ÖNCELİK 4 Roma / Bizans / öncesi — AYRI ÜRÜN"*,
  1281-1923 ve 1923-2026 önce. Emre'nin bugünkü isteği ("en önemli devletlerden başlayarak") bu sırayı
  tersine çeviriyor → yeni bir öncelik kararı gerekiyor, LAB veremez.
- §6 sırası: dizin (künye) → yerleşim yoğunluğu → pencere. Roma için ilk adım künye zinciri
  (Roma Krallığı/Cumhuriyeti/İmparatorluğu, Batı Roma, Ahameniş, Part, Han…), yerleşim pencereleri
  ondan sonra; motor koşusu HAVVA'da.

## 6) Sibirya/Ural/Arabistan/Doğu Afrika devletsiz şehirleri kuruluştan önce görünüyor — madde 3'ün aynısı
- `bos_alanlar.js` dağılımı (çizilen halkalar): Sibirya/Ural 36 · Doğu Afrika 24 · Arabistan 11.
- Kaynakta 59 kayıt `kur:` taşıyor (ör. Doha `kur:1825`), üreteç bunu da düşürüyor → Doha MÖ 12000'de var.
- Yerleşim noktası (`.sehir`) zamanla süzülüyor, aynı yerin halkası süzülmüyor: ETIKET-0073 ölçümüne
  göre 92 halkanın 92'si aynı adlı bir yerleşimle 0,00 km'de örtüşüyor — yani halka, yerleşimin
  zamansız ikinci nüshası.

## Önerilen iş bölümü
| # | İş | Sahibi |
|---|---|---|
| 1 | `LAB-KRONO-ARAMA-1024.diff`i uygula, yayınla | koordinatör (main) |
| 3·4·6 | `uret_bosluk.py` kayda `f/t` (sahipsiz aralıklar, `kur:`'dan başlayarak) yazsın; `app.js` boşluk işaretlerini gün değişince süzsün; tarihsiz kayıt ÇİZİLMESİN; `kunye-yok`/`hata` okura gösterilmesin; `neden:` yerine okura dönük kısa metin | UMIT (kod) |
| 3 | 110 tarihsiz kabile/veri-yok kaydı için kaynaklı yıl aralığı | KASA (araştırma) |
| 2·5 | Antik dönem künyelerine başlama kararı (ONCELIK 4'ü öne almak) | Emre |
