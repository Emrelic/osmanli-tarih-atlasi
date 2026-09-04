# KRONOLOJİ ORTA AMERİKA — 4 Eylül 2026

```
AD     : KRONOLOJİ ORTA AMERİKA
MODEL  : Opus
DİZİN  : C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SAHİP  : denetim/KRONOLOJI-ORTAAMERIKA-0904.json  (YALNIZ bu dosyaya yazarsın)
```

## 🔒 EN BAŞTA — GEÇİLMEZ KISIT

```
PETEK ÜRETİMİ ŞU AN KOŞUYOR (9+ saat, PID 12656).
🔴 data/*  DONMUŞ — data/devletler.js'e TEK KARAKTER yazma.
   Koşuyu öldürmez ama ÇIKTIYI YAYINLANAMAZ hâle getirir (CLAUDE.md §7).
🔴 arac/uret_petek.py · arac/renkler.py · arac/girdi.py DONMUŞ — yazmak KOŞUYU ÖLDÜRÜR.
🟢 SERBEST: denetim/*  ·  oturumlar/*
```
⇒ Bulduğun her maddeyi **yama dosyasına** yazarsın; birleştirmeyi koşudan
sonra koordinatör yapar. Bu bir formalite değil: `data/devletler.js` tek
dosya ve birden çok oturum ona yazarsa **sessiz veri kaybı** olur.

## ÖLÇÜT — önce bunu oku

**`oturumlar/KRONOLOJI-OLCUT-0904.md`** — dokuz cins, `tur` sözlüğü, madde
biçimi, kaynak kırmızı çizgileri, pencere muafiyeti. Şartname onu tekrar
etmez, ona dayanır.

Emre'nin kendi cümlesi (ölçütün kaynağı):
> *"kronolojilerde devletlerin kuruluşu, toprak kayıp ve kazançları,
> girdikleri savaşlar, ittifaklar, anlaşmalar, isyanlar, iç savaşlar,
> hükümdar tahta çıkma ve inmeleri gibi siyasî olayları belirtmeli"*

## SENİN KÜMEN — 13 künye, ve 8'i LİTERAL SIFIR

Bugün ölçüldü (`py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py --bolge`):

```
orta-amerika-karayip   8 künye · DOKUZ CİNSİN DOKUZU DA %0
   dominik-cumhuriyeti        Dominik Cumhuriyeti          1844-1923   madde 0
   kuba-cumhuriyeti           Küba Cumhuriyeti             1902-1923   madde 0
   guatemala                  Guatemala Cumhuriyeti        1821-1923   madde 0
   panama-cumhuriyeti         Panama Cumhuriyeti           1903-1923   madde 0
   nahua-sehir-devletleri     Nahua Şehir-Devletleri       1281-1521   madde 0
   purepecha-imparatorlugu    Purépecha (Tarasko) İmp.     1300-1530   madde 0
   tututepec-krallik          Tututepec Krallığı           1281-1522   madde 0
   zapotek-krallik            Zapotek Krallığı             1281-1523   madde 0

orta-amerika           5 künye · iskelet var, gövde yok
   aztek-imparatorlugu        1428-1521   madde 4
   maya-sehir-devletleri      1200-1697   madde 3
   yeni-ispanya               1535-1821   madde 3
   meksika                    1821-1923   madde 5
   haiti                      1804-1923   madde 3
```

🔴 **Orta Amerika-Karayip, 591 künyelik dizinde dokuz cinsin dokuzunda
birden %0 olan TEK bölge.** Bu yüzden birinci dalgadasın: en küçük emek,
en büyük göreli kazanç.

## SIRA — ve niçin bu sıra

```
① 8 BOŞ künye     her birine EN AZ kuruluş + son + bir toprak kırılması
② 5 ZAYIF künye   Emre'nin dokuz cinsinden eksik olanları tamamla
```
⚠️ ①'i bitirmeden ②'ye geçme. Sıfırdan üçe çıkarmak, dörtten yediye
çıkarmaktan **kat kat** değerli.

## KAYNAK — bu bölge için özel durum

`CLAUDE.md §4`: TDV **birincil** kaynaktır, ama TDV'nin Amerika kapsaması
ölçülmüştür ve iki cinsten boşluk vardır (COĞRAFÎ ve TANECİKLİK).

🟢 **Ve bir ölçülmüş kısayol var, kullan:** TDV'nin tek `amerika` (kıta)
maddesi İnka · Meksika-Aztek · Peru · Brezilya'yı somut tarihle kapsıyor —
beş kayıt tek maddeden doğrulanmıştı. **Dar slug tutmazsa kapsayıcı
maddeyi dene**, ve kapsayıcı madde genellikle **YER ya da KİŞİ**
maddesidir, olay maddesi değil (TDV'de olay slug'larının %100'ü ölü çıktı).

```
🟢 KABUL   Cambridge History of Latin America · üniversite yayını ·
           hakemli makale · alanın standart el kitabı · birincil kaynak neşri
🔴 ASLA    forum · blog · içerik çiftliği · kaynaksız derleme · YZ üretimi metin
🟡 Vikipedi  yalnız "hangi maddeye bakayım" sorusunu cevaplar, DAYANAK DEĞİL
```
🔴 **`kaynak:` alanı BOŞ BIRAKILMAZ.** Bulamadıysan `bulunamadı` diye
**yaz**. Kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez.
🔴 **Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01`.

⚠️ Kolomb öncesi dört künye (nahua · purepecha · tututepec · zapotek) için
`f:` değerleri **1281** yazıyor ve bu atlasın pencere başlangıcıdır, o
devletin kuruluşu değil. `kuruluş` maddesi yazarken bunu ayırt et:
pencereden önce kurulmuşsa ölçüt **muafiyet** tanıyor (bkz. ölçüt dosyası).

## TESLİM BİÇİMİ

`denetim/KRONOLOJI-ORTAAMERIKA-0904.json`:
```json
{
  "kunye": "kuba-cumhuriyeti",
  "ekle": [
    { "t": "1902-05-20", "b": "Küba Cumhuriyeti'nin ilanı",
      "d": "2-4 cümlelik anlatım.",
      "tur": "kurulus", "kaynak": "<slug ya da tam künye>", "kesinlik": "gun" }
  ]
}
```
Dosya bir **DİZİ** olsun: `[ {…}, {…} ]`. Her künye bir öğe.

## HABERLEŞME — 🔴 CEVAP KENDİ PENCERENE YAZILMAZ

Ekranına yazdığın metni koordinatör **GÖRMEZ**. Cevap ancak şu araçla gider:
```
mcp__ccd_session_mgmt__send_message
    session_id : local_0de4b2d7-a2ce-4a61-934c-c4146f3f130b
    message    : cevabın
```
Dört an zorunludur:
```
AÇILINCA     "açıldım, brifingi okudum, yama dosyam bende"
KALEM KALEM  bir künye bitince — biriktirme
SORU GELİNCE iş sürerken bile HEMEN: "iş üstündeyim · şu aşamadayım · ~ne kadar kaldı"
BİTİNCE      SAYIYLA: "13 → 3, şu üçü şu sebeple kaldı"
```
Her madde üç şey taşır: **① ne ölçtüm** (sayıyla) · **② neyi bulamadım**
(açıkça) · **③ senden ne istiyorum** (tek cümle).

🔴 **AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa, şartname yanlışsa,
beklenenden çok farklı bir sayı ölçtüysen — **bitmeyi bekleme, hemen yaz.**
Karar veremediğin yerde tahmin etmek, sormaktan kat kat pahalıdır: yanlış
tahmin veriye girer ve sonra kimse onun tahmin olduğunu bilmez.

📌 Ve devraldığın hiçbir rakamı doğrulamadan aktarma — yukarıdaki sayılar
bugün ölçüldü ama **sen de ölç**; taban kaymış olabilir.
