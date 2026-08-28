# KOŞU 2 — ÖNGÖRÜ · 28 Ağustos 2026, koşu başlamadan yazıldı

> 🔴 Bu dosya koşu **başlamadan önce** yazıldı. Sonradan yazılan beklenti
> ölçümü gördükten sonra farkında olmadan ona göre şekillenir ve hiçbir
> zaman yanlış çıkmaz — yani hiçbir şey öğretmez.

## Ne değişti — koşu 1'e göre TEK fark

```
TAVAN_KM   {1:400, 2:400, 3:200, 4:100, 0:280}  →  {1:700, 2:420, 3:280, 4:140, 0:280}
                                                    (yani ESKİ değerlere geri)
KALDI      COL_PUAN_ESIK = 8      ← çöl derdinin asıl çaresi
KALDI      B1 · B2 · B3           ← Emre'nin "benekli görünmesin" isteği
EKLENDİ    _B23_SAYAC basılıyor   ← koşu 1'de sayaç DOLUYOR ama BASILMIYORDU
```

## 🔴 MAZERETİ YOK — tutmazsa bir varsayımım yanlış demektir

### ① OSMANLI TOPLAMI r3556'YA GERİ DÖNER (±%2)
Koşu 1'in çürüttüğü kalem buydu. Tavan geri alındığına göre toplam
r3556 seviyesine dönmeli:
```
gün     r3556 (hedef)   koşu 1 (kusurlu)
1600      6.131.732       5.478.894
1700      5.404.785       4.749.515
1800      5.175.521       4.304.332
1900      4.465.407       3.616.228
```
⚠️ **TAM r3556 olmayacak** ve olmamalı: `COL_PUAN_ESIK=8` çölde dolgu
kapısını daraltıyor, yani Libya/Sahra kuşağında bir miktar KÜÇÜLME
BEKLENİYOR. Ama bu **çölle sınırlı** olmalı.
🔴 Sınav: 1600 ve 1700 (çöl payı küçük) **±%2 içinde** dönmeli.
   1800/1900'de −%2..−%6 arası bir daralma MEŞRU sayılır (Libya ocaklığı),
   daha fazlası DEĞİL.

### ② ÇÖL EŞİĞİ YİNE ATEŞLER
Koşu 1'de 14.468 petek-gün çölde takılmıştı. Tavan geri alınınca petekler
büyüyecek, yani çölde daha çok aday doğacak ⇒ bu sayı **artmalı**, azalmamalı.
🔴 Sıfır çıkarsa kural hiç ateşlememiş demektir.

### ③ B2/B3 KARNESİ ARTIK BASILACAK — ve SIFIR OLMAMALI
Koşu 1'de ölçülemedi. Bu koşuda iki satır basılacak.
🔴 `b2_deniz` **sıfırdan büyük** olmalı — Emre "sadece karasal" dedi ve
   reddedilen deniz aşırı adayların sayısı kuralın çalıştığının kanıtı.
🔴 `b3_sig` **sıfırdan büyük** olmalı — Emre sığ girintilerin KALMASINI
   istiyor; hepsi doldurulmuşsa kural onun istediğinin tersini yapıyor.

### ④ "gosterim_duzelt atlandi" BASILMAMALI
Koşu 1'de 0 kez basıldı, geçti. Aynısı beklenir.

## 🟡 MAZERETİ OLABİLİR

### ⑤ bozuk kenar sayısı
Koşu 1'de "çöl tavanı ÖNCESİ örtü: 72 (taban 58) ✗" diye ötmüştü.
Tavan geri alınınca düşmesi beklenir ama `COL_PUAN_ESIK` ve B1/B2/B3
hâlâ yürürlükte ⇒ tam 58'e dönmeyebilir. **Mazeret: bu iki değişiklik.**

### ⑥ 65 zincirsiz nokta uyarısı
`kademe: N yerleşimin m: zinciri açık` — bu koşuda da ötecek, çünkü
kademe zinciri işi henüz yapılmadı. **Beklenen, kusur değil.**

---

## Ders — koşu 1'den çıkan ve bu koşuyu doğuran

> **"Kaç nokta tavana çarpar" yanlış soruydu.**
> Doğrusu: **"tavan kaç km² toprağı sahipsizleştirir".**

Tavan komşu ortasında kesmiyor, peteğin **yarıçapını mutlak** kırpıyor.
Komşusu uzak bir nokta 700 yerine 400 km'de bitiyor ve aradaki toprak
**sahipsiz** kalıyor — sınır kaymıyor, **haritada delik açılıyor.**
MOTOR "komşu medyanı 40-100 km, tavan zaten devreye girmiyor" diye
ölçmüştü; ölçüm doğruydu ama **medyan yanlış istatistikti** — zararı
medyan nokta değil, **kuyruktaki uzak-komşulu nokta** veriyor.
