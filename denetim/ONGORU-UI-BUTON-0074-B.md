# ÖNGÖRÜ — UI-BUTON-0074, İKİNCİ SEVK (M-4897)
Yazıldığı an: 21 Eylül 2026, ölçümden ÖNCE. Kalemler: (a) üç iç not · (d) `#btn-koridor`
CSS · (c) 71 maddenin "aynı gün" kutusu ölçümü · (b) terim önerisi (değiştirme YOK).

## (a) Üç iç not
- Öngörü 1: üçünün de gövdesi `js/app.js`te; hiçbirinin kaynağı `data/` altında değil.
- Öngörü 2: `isyan-eksik` rozeti (`ISYAN.eksik`) canlı sayfada **0** olacak — yani metin
  bugün HİÇ basılmıyor, borç sessiz. (Evren: açılışta `window.ISYAN.eksik`.)
- Öngörü 3: `disEsikBilgiYaz`ın `!ds` dalı bugün HİÇ tetiklenmiyor (süzgeç güncel) —
  yani bu da uyuyan bir sızıntı. (Evren: `window.SUZGEC.disEsik` var mı.)
- Öngörü 4: `data/dolgu.js` YÜKLÜ olduğu için `kat-sayi-dolgu` rozeti "—" yazmıyor ve o
  `title` da bugün görünmüyor. (Evren: `window.DOLGU` uzunluğu.)
- ⇒ Üçü de "bugün görünmüyor ama sızabilir" sınıfı. Düzeltme sonrası sınav ancak
  DURUMU ZORLAYARAK yapılabilir (alanı elle boşaltıp fonksiyonu çağırmak).

## (d) `#btn-koridor`
- Öngörü 5: `css/style.css`te `btn-koridor` geçen satır **0**; düğme tarayıcının
  varsayılan düğme üslubunda çiziliyor, öteki menü düğmelerinden FARKLI genişlik/punto.
- Öngörü 6: kural kümesine eklenince ölçülen `font-size` ve `border-radius` öteki menü
  düğmeleriyle AYNI olacak (12.5px / 6px).

## (c) 71 madde — "aynı gün" kutusuna düşülebilir mi
- Öngörü 7: `maddeFarkiGoster`in kapıları (① `o.gi > BASLANGIC && o.gi < BITIS`
  ② `r.degisim.length` ③ `r.secilen.length`) yüzünden 71'in **çoğu yine kutu basamaz**:
  o gün haritada HİÇ değişim olmayan maddeler zaten ②'de düşer.
- Öngörü 8: kutu basabilecek olanlar **71'in %10–30'u** (yani ~7–21 madde) çıkacak.
  Gerekçe: bu maddeler antlaşma maddeleri; antlaşma günü ile toprak kırılması aynı güne
  düşseydi `antlasmaFarkiHesapla` zaten fark bulurdu — ama `antlasmaFarki` TARAF
  SÜZGECİNDEN geçiyor (`antlasmaTaraflari`), `maddeDegisimleri` ise YER eşlemesinden.
  İki süzgeç ayrı olduğu için taraf-dışı bir değişim aynı gün kutusuna düşebilir.
- Öngörü 9: ölçüm `maddeFarkiGoster`i DEĞİŞTİRMEDEN yapılabilir — `SUZGEC.maddeDegisimleri`
  doğrudan çağrılır, DOM'a dokunulmaz.
