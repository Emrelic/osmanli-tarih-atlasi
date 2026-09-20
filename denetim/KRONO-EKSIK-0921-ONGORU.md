# KRONO-EKSIK-0921 — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Sınav anı: 21 Eylül 2026, fetih rozeti taraması koşturulmadan önce.
Evren: `data/olaylar*.js` (glob) — `denetle.py`nin Değişmez 2 evreniyle aynı küme.

## 🔴 ŞARTNAMENİN ÖNCÜLÜ YANLIŞ (ölçüldü, öngörü değil)

Şartname/sevk: *"rozet bugün maddenin PARAGRAFINDAN çıkarılıyor"*.
`js/app.js:3343` bunun TERSİNİ yazıyor ve gerekçesi ölçülmüş:

> 🔴 FETİH TARİHİ ETİKETİ — YALNIZ `fethedilen:` ALANINDAN.
> ⚠️ Bunu METİN EŞLEŞMESİNDEN türetmek ÖLÇÜLDÜ ve elendi: 1.360 madde-şehir
> çiftinde 554'ü maddenin tarihini TEKRAR ederdi, 739'u ALAKASIZ bir tarih
> gösterirdi.

Rozeti besleyen dört alan (`js/app.js:3386`): `fethedilen` · `kaybedilen` ·
`statu_dogrudan` · `statu_vasal`. Tarih METİNDEN değil, maddenin KENDİ
`o.gun`/`o.gi` değerinden gelir. ⇒ Sevkteki iki soru bu gövdeye çevrildi:

| sevkteki soru | ölçülebilir karşılığı |
|---|---|
| "kaç maddede fetih/alındı geçtiği hâlde rozet yok" | metinde fetih fiili var + dört alanın hiçbiri yok ⇒ **rozetsiz** |
| "kaç maddede rozet var ama tarihle çelişiyor" | alandaki ad hiçbir şehir kaydıyla eşleşmiyor (rozet HİÇ çıkmaz) **ya da** eşleşiyor ama maddenin günü o şehrin sahiplik kırılmasına ±30 gün içinde düşmüyor |

## Öngörüler (sayıyla, evreniyle)

1. **Alanı olan madde sayısı** bugün 20'nin altındadır (app.js yorumu "7 madde,
   10 ad" diyor ama o ölçüm eski; sonradan `kaybedilen:` geldi). → tahmin **7-25**.
2. **Metinde fetih fiili geçen ama alansız madde**: `k:"fetih"` tek başına 229+
   madde; metin taraması (fetih/fethetti/alındı/ele geçir/teslim ol/zapt) çok daha
   geniş vurur. → tahmin **450-750 madde**.
3. **Ölü ad (alanda yazılı ama hiçbir şehirle eşleşmiyor)**: → tahmin **0-3**.
   Gerekçe: alan elle ve az sayıda yazıldı, yazan kişi şehir listesine bakıyordu.
4. **Alan var ama madde günü o şehrin kırılmasına ±30 gün uzak**: → tahmin **0-2**.
   Gerekçe: alan zaten kırılması olan maddelere yazıldı.
5. **Toplu düzeltme ÖNERİLMEYECEK**: 2'deki sayı yüzlerceyse, alanı metinden
   otomatik doldurmak app.js:3343'te ÖLÇÜLÜP ELENEN yolun ta kendisidir. Öneri
   "kalemle, öncelikli maddede" olacak. (Bu bir öngörü değil, hüküm önerisi —
   karar 1.MURAT'ın.)

## Eksik madde kalemi — öngörü DEĞİL, ölçülmüş bulgu

Şartname altı olayın "maddesi YOK" diyordu; ikisi VARDI (Mühendishâne-i Berrî,
Kilitbahir). Ayrıntı teslim mesajında ve `data/olaylar_kronoeksik_0921.js`
başlığında.
