# 🔴 İKİ AYRI KUSUR TEK SATIRDA RAPORLANIRSA, ÇARELERİ TERS OLSA BİLE

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 709 token

---

- 🔴 **İKİ AYRI KUSUR TEK SATIRDA RAPORLANIRSA, ÇARELERİ TERS OLSA BİLE
  AYNI ÇARE UYGULANIR — VE DOĞRU VERİ BOZULUR.**

  **Vaka (8 Ağustos 2026, NOKTA EMİLME yakaladı).** `denetle.py` altı noktayı
  *"kara maskesinin dışında"* diye bildirdi ve **dördüne de AYNI** koordinatı
  önerdi (`lat:-10,9995`). Oysa:
  ```
  Sofala · Quelimane · Angoche · Mozambik Adası   -15° … -20° G
  Finschhafen · Port Moresby                       147,2° … 147,9° D
  atlas penceresi:  box(-12, -11, 146, 82) ∪ box(-25, 60, -12, 82)
  ```
  ⇒ Altısı da **doğru yerdeydi**; atlasın penceresi oraları **hiç
  kapsamıyordu.** Öneri uygulansaydı Sofala **1020 km** kuzeye taşınacaktı —
  yani ihlal kapanacak, **gerçek silinecekti.**

  **Sebep:** `kara` maskesi zaten `bolge` ile kesiliyor ⇒ pencerenin dışında
  "kara" diye bir şey **yoktur**, ve *"en yakın kara"* hep pencerenin kenarı
  çıkar. Araç iki apayrı şeyi tek satırda söylüyordu:
  ```
  KARA DIŞI     → nokta YANLIŞ yerde  → ÇARE: koordinatı düzelt
  PENCERE DIŞI  → nokta DOĞRU yerde   → ÇARE: koordinata DOKUNMA
  ```
  ⚠️ **Ve bedeli tek yönlü değil:** pencere dışı bir noktayı *"düzeltmek"*
  ihlali kapatır ama **doğru veriyi bozar** — ve bozulduğu bir daha
  anlaşılmaz, çünkü denetim artık temiz.

  🟢 **Kusuru bir İŞÇİ oturum yakaladı ve reçeteyi UYGULAMAYI REDDETTİ**,
  tek başına karar vermek yerine sordu. ⇒ *"Aracın söylediğini yapmadan önce
  aracın ne ölçtüğünü anla"* — ve bu, aynı gün ölçülen *"reçete kendi
  testini geçmeli"* dersinin **üçüncü** vakası: reçete artık testi geçiyordu
  ama **yanlış soruya** cevap veriyordu.

  ⇒ Ayrıldı: pencere dışı artık `i` (bilgi) kovasında, *"ihlal DEĞİL, pencere
  oraya açılana kadar BEKLEYEN veri"* damgasıyla. `konum` **6 → 0.**
  📌 Ve bu kayıtlar silinmez: **pencere büyüyünce KENDİLİĞİNDEN canlanırlar.**
  Araştırılmış doğru veriyi silmek, onu yeniden araştırmaktan pahalıdır.

