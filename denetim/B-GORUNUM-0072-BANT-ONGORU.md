# BANT + ÇÖL KELEPÇESİ — ÖNGÖRÜ (ölçümden ÖNCE yazıldı)

Yazılma anı: 21 Eylül 2026, `--bant` kipi HİÇ KOŞMADAN ÖNCE.
İstek: 1.MURAT, M-4852 (Emre'nin kararı: üç bant 5 / 7 / 10 gün =
40 / 56 / 80 saat).
Evren: aynı iki kutu — Anadolu (26,34,50,44) ve Sahra (10,14,36,34).

## Ö-BANT-1 · Bant başına SÜRE
Tahmin: **+8 … +25 sn** (kutu başına, bant başına). Gerekçe: bir bant =
bir kontur geçişi (`contourpy`, 5°'lik karolar) + bütün peteklerde bir
`_yr_kes` daha. Kutu koşusunun tamamı ~110 sn ve bunun büyük kısmı
ızgara + Dijkstra; kontur+kesim küçük bir pay.
🔴 Önceki teslimde "bir kontur < ~5 sn" demiştim ve bunun DOĞRUDAN ÖLÇÜM
OLMADIĞINI yazmıştım. Bu öngörü o üst sınırdan YÜKSEK — yani kendi
tahminimi yukarı revize ediyorum; eski sayı bant başına DEĞİL, yalnız
kontur içindi.

## Ö-BANT-2 · Bant başına DOSYA BOYUTU
Tahmin: iki artış bandı (5-7 ve 7-10) birlikte, taban A çıktısının
**%30 – %80'i** kadar yer tutar.
Gerekçe: bantlar ince HALKA biçimindedir — alanı küçük ama ÇEVRESİ
uzundur, ve dosya boyutunu belirleyen alan değil köşe sayısıdır. Bir
halkanın iki kenarı (iç ve dış) vardır, yani köşe başına iki kat.
🔴 EĞER ÖNGÖRÜ TUTARSA KOŞU DURMALI: site bugün 261 dosya / 157,6 MB ham
indiriyor; `donemler.js` tek başına 61 MB. %30-80 ek yük kabul edilemez
⇒ bantlar AYRI DOSYAYA alınmalı ve tembel yüklenmeli.

## Ö-BANT-3 · ÇÖL KELEPÇESİNİN GERÇEK BEDELİ (1.MURAT'ın çelişkisi)
Sahra kutusu, 10 gün (80 saat):
- kelepçesiz ölçülmüş: sahipsiz kara **16.431 km²**
- kelepçeli tahminim: **400.000 – 900.000 km²**

Gerekçe ve ÇELİŞKİNİN AÇIK HÂLİ: ufkun ölçülen kazancı neredeyse tamamen
TENHA kutuda doğdu (944.361 → 16.431 km²), ve o kutu zaten Sahra'dır.
Kelepçe "çölde ufuk 5 günde kalsın" diyorsa, kazancın doğduğu yerde
ufku geri alıyor demektir. ⇒ Tahminim: kelepçeli 10 gün, kelepçesiz
**5 güne** yakın çıkar; yani ufuk Sahra'da neredeyse hiçbir şey kazanmaz.
🔴 BU ÖNGÖRÜ TUTARSA Emre'nin iki isteği gerçekten birbirini yiyordur ve
karar ONUN: ya çöl boyansın, ya ufuk çölde işe yaramasın. Üçüncü bir yol
ölçümden sonra önerilebilir (kelepçeyi "5 gün" yerine ara bir değere
almak), ama onu ölçmeden önermem.

## Ö-BANT-4 · Anadolu'da kelepçe
Tahmin: **fark ~0** — Anadolu kutusunda çöl yok denecek kadar az.
Bu bir kontrol grubudur: fark sıfır çıkmazsa kelepçe maskesi yanlış
yerdedir (ölçüm hatası), çölün bedeli değil.
