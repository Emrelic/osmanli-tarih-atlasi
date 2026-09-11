# BULGU — MISIR-SIRBİSTAN KÜNYE (11 Eylül 2026)

🔒 `data/` DONUK, YAZILMADI. Yalnız okuma + iki küçük Python/Node betiği
(depo içi `denetim/`, sonuçları JSON'a yazıldı).

Öngörü: `denetim/ONGORU-MISIR-SIRBISTAN-0911.json`, commit **1503bfa**.
İtiraf: ① ve ②'nin araştırması öngörüden ÖNCE yapıldı (D022 kısmi ihlal,
tıpkı TAŞMA ve KRONOLOJİ-KÜNYE'nin kendi itirafları gibi) — yalnız ④
(madde sayısının bağımsız doğrulanması) GERÇEKTEN öngörüden sonra ölçüldü.

## ④ KAÇ MADDE BAĞLANIR — 🔴 SAYI DÜZELTİLDİ: 37 DEĞİL, 34

Sevk 37-38 diyordu (BULGU-KRONOLOJI-KUNYE-0911.md'nin kendi sayısı).
`ARAC-KRONOLOJI-KUNYE-0911.py`yi bağımsız yeniden çalıştırdım — **30
(mısır) + 7 (sırbistan) = 37, BİREBİR aynı** (tekrarlanabilirlik
doğrulandı, `D117`).

Sonra bu 37 kaydın TAM METNİNİ döküp OKUDUM (`denetim/ARAC-MISIR-SIRBISTAN-KOVA0-0911.py`)
ve HER BİRİNİ devletler.js'in TAMAMINA (yalnız misir/sirbistan ailesinin
dar aday listesine değil) karşı ikinci kez sınadım:

```
🔴 3 kayıt YANLIŞ KOVAYA düşmüş — gerçek boşluk DEĞİL:
   1914-12-18 (misir)     → aslında misir-sultanligi (f:1914-12-18, t:1922-03-15)
   1915-01-14 (misir)     → aslında misir-sultanligi (aynı)
   1918-12-01 (sirbistan) → aslında yugoslavya (f:1918-12-01)
```
Sebep: `AILE2` aday listesi (`misir:["memluk","misir-kavalali"]`,
`sirbistan:[...4 künye..., yugoslavya YOK]`) bu iki ARDIL kimliği
içermiyordu. Bu, kardeşin kendi raporundaki "hindistan ⚪" bulgusuyla
**aynı sınıf hata** (aday listesi eksikliği), farklı aile.

```
GERÇEK BOŞLUK  = 30-2 (misir) + 7-1 (sirbistan) = 28 + 6 = 34
```

⚠️ **İlk deneme İKİ AYRI regex/mantık hatası taşıdı ve ikisi de düzeltildi
(kod içinde itiraf edilmiş durumda, D107/D043):**
1. İlk taslak Python regex'i `kid:"..."` alanlarını (`v:[{...,kid:"sirbistan-prensligi"}]`
   gibi vassal-referans alanları) `id:"..."` sanıp devletler.js'in NEREDEYSE
   TAMAMINI "eşleşiyor" gösterdi (140+ sahte pozitif) — Node.js'in kendi
   JS motoruyla düzeltildi.
2. "Aynı bölgede olan her künyeyi dene" yaklaşımı da yanlış çıktı: `misir-sudan`
   bölgesi Sudan'daki bağımsız devletleri (funj, darfur, tunciler) de
   taşıyor ve bunlar Mısır'ın ARDILI değil, aynı geniş bölgedeki AYRI
   ülkeler — "aynı bölgede var olmak" "doğru adres olmak" değildir.
   Çözüm: yalnız GERÇEK ardıl kimlikler (misir-sultanligi, yugoslavya)
   isimle hedeflendi.

**Öngörü karnesi (P4):** "37'yi doğrulayacak" tahmini **kısmen çürüdü** —
37 sayısı tekrarlanabilir çıktı (yöntem sağlam) ama GERÇEK boşluk 34'tü.
Çürüyen öngörü, tutan bir öngörüden değerli: bu düzeltme olmasaydı iki
kayıt (1914/1915 Mısır) ve bir kayıt (1918 Sırbistan) yeni künyeye
YANLIŞ bağlanacaktı.

📌 **Bonus bulgu (deliverable'ı değiştirmiyor):** `fransiz-misir-seferi`
adlı bir künye de var ve 1798-1801 Napolyon dönemi maddelerinin (5 kayıt)
bir kısmı ona da "doğru çokluk" (🟢) olarak bağlanabilir — bu bir
REDDETME değil, EK bağlama fırsatı; 34 sayısını değiştirmez, yazma
turunda değerlendirilebilir.

## ① KÜNYE TASLAKLARI — TDV'den bağımsız doğrulandı

```
misir-eyaleti (önerilen id)       f:1517-04-13  t:1805-07-03
sirbistan-eyaleti (önerilen id)   f:1459-06-20  t:1804-02-14
```
- Mısır f: TDV "misir" maddesi — Tumanbay'ın idamı "21 Rebîülevvel 923 /
  13 Nisan 1517" — memluk künyesinin t: alanıyla BİREBİR.
- Mısır t: TDV "kavalali-mehmed-ali-pasa" maddesi — "3 Temmuz 1805,
  Bâbıâli tarafından valiliğe getirildi" — misir-kavalali künyesinin f:
  alanıyla BİREBİR.
- Sırbistan f: TDV "semendire" maddesi — "20 Haziran 1459'da... kaleyi
  Osmanlılar'a teslim etti" — sirp-despotlugu künyesinin t: alanıyla
  BİREBİR.
- Sırbistan t: 🟡 TDV "sirbistan" maddesi yalnız YIL veriyor (1804);
  GÜN (14 Şubat, Orašac toplantısı) yalnız Wikipedia'dan — ikinci
  akademik kaynakla teyit edilmedi. Ama YENİ bir hassasiyet ÜRETMEDİM:
  bu gün zaten sirbistan-prensligi künyesinin kendi f: alanında duruyordu,
  ben DEVRALDIM (`§4`'ün "devralmak uydurmak değildir" istisnası).

Künyelerin ARA kronoloji maddeleri (28+6=34) TEK TEK TDV'ye karşı
sınanmadı — yalnız uç (f/t) tarihler doğrulandı. Bu bir eksik değil bir
SIRA: görevin kapsamı "taslak hazırlığı", madde-madde TDV taraması yazma
turunun işi.

## ② d: / s: / v: SORUSU — 🟢 ÖLÇÜLDÜ: ikisi de ZATEN `d:` ailesinde

`data/yerlesimler.js`i bağımsız grep'ledim:
```
Kahire        d:[{f:"1517-02-15",t:"1805-07-03",y:"savas"}]
İskenderiye   d:[{f:"1517-05-19",t:"1805-07-03"}]
Dimyat        d:[{f:"1517-05-19",t:"1805-07-03"}]
Asyut         d:[{f:"1517-04-13",t:"1805-07-03"}]
Semendire     d:[{f:"1459-06-20",t:"1688-10-01"},{f:"1690-09-09",t:"1717-08-18"},{f:"1738-08-01",t:"1867-04-18"}]
Belgrad       d:[{f:"1521-08-29",t:"1688-09-06"},{f:"1690-09-09",t:"1717-08-18"},{f:"1739-09-18",t:"1867-04-18"}]
Kragujevac    d:[{f:"1459-06-20",t:"1689-09-24"},{f:"1690-09-09",t:"1717-08-18"},{f:"1739-09-18",t:"1830-11-08"}]
```
**HİÇBİRİ `s:` KULLANMIYOR.** Bu bölgeler bugün BİLE doğrudan Osmanlı
(`d:`) rengiyle boyanıyor — harita ZATEN doğru. Yeni künye salt
KRONOLOJİ DİZİNİNDE (devletler.js `kronoloji[]` ve dizin sekmesi) bir
kimlik açmak için; yerleşim kayıtlarının HİÇBİRİNE dokunulmayacak.

## ③ HARİTA ETKİSİ — 🟢 RENK ALINMAMALI, gerekçeli

`②`nin sonucu doğrudan buraya bağlanıyor: toprak zaten `d:` (doğrudan
Osmanlı) ile boyanıyor. Yeni künyeye `harita:` alanı EKLENİRSE ve
`uret_petek.py`nin BOYALAR sözlüğüne yeni bir renk tanımlanırsa, bu
VAR OLMAYAN bir ikinci gövde icat eder — tam olarak görevin uyardığı
risk. Emsal ölçüldü: **627 künyenin 376'sı (%60) zaten `harita:`
taşımıyor** — bu istisna değil, dizindeki NORM. Aynı sınıf: `__BOSLUK__`
emsali (künye var, boya yok, kusur değil beyan).

🔴 **YAN BULGU — açık soru, karar gerektiriyor:** devletler.js'in `tur`
sözlüğünde (18 değer: beylik, cumhuriyet, devlet, dukalik, emirlik,
federasyon, gecici-hukumet, gecici-isgal, hanedanlik, hanlik,
imparatorluk, isyan, kralik, krallik, ocaklik, prenslik, sehzadelik,
sultanlik, ulke) **"eyalet" hiç yok.** 627 künyenin hiçbiri bugün saf bir
idari-dönem (siyasi kimlik değil) değil. Bu iki künye açılırsa dizindeki
**İLK böyle örnek** olur. Şema notu "yetmezse yeni tür eklenebilir"
diyor — öneri: `tur:"eyalet"` eklensin, ama bu bir şema kararı, burada
yalnız ÖNERİLDİ.

## Teslim

```
① künye taslağı: 2 taslak, f/t TDV'den bağımsız doğrulandı
② d:/s:/v:: d: ailesi doğrulandı — hiçbir yerleşim kaydı değişmeyecek
③ harita: RENK ALINMAMALI (gerekçeli, emsal 376/627)
④ madde sayısı: 34 (28+6), 37 DEĞİL — 3 kayıt zaten var olan künyelere
  (misir-sultanligi ×2, yugoslavya ×1) ait, YANLIŞ kovaya düşmüştü
```

Çıktı: `denetim/HAZIRLIK-MISIR-SIRBISTAN-0911.json` (tam künye taslakları +
madde listeleri), `denetim/ARAC-MISIR-SIRBISTAN-KOVA0-0911.py` (aracın
kendisi, iki düzeltmesiyle birlikte — reprodüklenebilir).

**Karar gerektiren iki açık soru (Emre'ye/1.MURAT'a):**
1. `tur:"eyalet"` yeni tür olarak eklensin mi?
2. id önerisi `misir-eyaleti`/`sirbistan-eyaleti` mi, yoksa başka bir
   adlandırma mı (`misir-osmanli-dogrudan` gibi)? Burada UYDURULMADI,
   yalnız ÖNERİ.
