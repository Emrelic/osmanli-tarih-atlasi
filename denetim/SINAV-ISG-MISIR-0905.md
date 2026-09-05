# SINAV — Mısır `isg:` düzeltmesi: d:"fransa" → "fransa-cumhuriyet" (M-2953)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

## ① Sayı doğrulandı — TARANDI, tahmin edilmedi

```
fransa       f:987-01-01  t:1792-09-22  (Krallık)
fransa-cumhuriyet  f:1792-09-22  t:1923-10-29  (Cumhuriyet+)
Napolyon'un Mısır seferi: 1798-07-01 → 1801-10-09 — fransa-cumhuriyet PENCERESİNDE
girdi.yukle() ile TÜM veri tarandı (isg: d=="fransa"): 7 kayıt, 7'si de
1798-07-01→1801-10-09: Kahire · İskenderiye · Dimyat · Asyut · Süveyş ·
Sina güneyi · Reşîd (Rosetta)
```
**7 doğru** — devralınan sayı bağımsız ölçümle birebir eşleşti.

## ② Ters soru — başka `d:"fransa"` isg: var mı?

Arama TÜM veri üzerinde yapıldı (bölge sınırlaması yok): **yalnız bu 7**.
Hepsi aynı tarih aralığında (1798-1801), hepsi Mısır'da — başka hiçbir
kayıt `isg:` içinde `d:"fransa"` kullanmıyor. Yanlış kullanım TEK olay.

## ③ Değişmez 2i (işgal senkronu) etkisi

**Δ = 0 yeni kırılma.** Düzeltme yalnız kimlik ETİKETİNİ değiştiriyor
(fransa→fransa-cumhuriyet), TARİHLERE (1798-07-01, 1801-10-09) DOKUNMUYOR
— bu iki gün zaten var olan kırılma günleri, madde durumları
DEĞİŞMİYOR. Tavan 3/açık 3'e bu düzeltme bir şey eklemiyor.

## 🟢 EK BULGU — 56. kayıt, imza dışı kalmıştı

Kendi 55-nokta imzam (`v:` TEK period "Kavalalı hanedanı" + t:1914-12-18)
**Sina güneyi**'ni kaçırdı: onun `v:` dizisi İKİ etikete bölünmüş
(Vilayet 1805-1867 + Hidivlik 1867-1914) ama `s:`/`isg:` yapısı
SUBSTANCE olarak aynı hatayı taşıyordu (s: 1914-1923 doğrudan ingiltere,
isg: fransa hatası). **Aynı dosyaya 56. kayıt olarak eklendi**, yeni
dosya açılmadı (M-2953 talimatı).

## SONUÇ

```
① sayı: 7 doğrulandı    ② başka yanlış kullanım yok    ③ Δ=0 yeni kırılma
EK: 56. kayıt (Sina güneyi) bulundu ve düzeltildi, aynı dosyada
```

Düzeltme `denetim/yer_yama_misir_himaye.js`'e uygulandı (6 mevcut kayıt +
1 yeni kayıt = 56 kayıt) — aynı sıra kısıtı (künye→renk→yama) geçerli.
