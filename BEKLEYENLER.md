# BEKLEYENLER — Tarih Atlası · Emre'den ne bekleniyor

> Koordinatör: Oturum 0 · son tazeleme **9 Ağustos 2026, 04:05** (gece kapanışı)

---

# 🔴 SABAH İLK OKUNACAK: YAYIN YAPILMADI, VE SEBEBİ

Emre *"koşu bitince yayınla, commit push yap ve bilgisayarı kapat"* dedi.
**Commit ve push yapıldı, YAYIN YAPILMADI.** Sebebi bir karar değil, bir
**ölçüm** — ve kararı koşudan önce ben kendim yazmıştım.

## Ne oldu

`denetim/kosu4-ongoru.json`, koşu başlamadan yazıldı ve şunu diyordu:

```
MAZERETİ OLMAYAN ⑤ — Osmanlı alanı 0/9 kesitte DEĞİŞMELİ.
                      Değişirse A1 Osmanlı çekirdeğini de kesiyor demektir
                      ve o zaman HARİTA DEĞİL TAVAN düzeltilir.
```

**Ölçüm:**
```
Osmanlı   7/9 kesitte DEĞİŞTİ    -3,2% · -3,9% · -3,3% · -3,1% · -2,3%
yabancı   9/9 değişti, +%15      +6,6 milyon km²  ← bir TAVAN alanı ARTIRAMAZ
```

⇒ Kendi koyduğum kurala göre yayın **durdu**, üretilmiş dört çıktı dosyası
geri alındı. **Canlı yayın r1079'da kalıyor** — dünkü sağlam hâl.

## Sebep bulundu ve tek satır

```
20 petek kısaldı, toplam 3.397.649 km² sahipsizleşti
118 YETİM YÜZ SAHİPLİ KOMŞULARA KATILDI     ← 🔴 SEBEP BU
```

Tavan toprağı serbest bırakıyor, ama motorun **"yetim yüz"** mantığı onu
**en yakın komşuya geri veriyor.** Yani sahipsiz kalması gereken çöl yine
emiliyor — `§2`'nin ta kendisi, tavanın **önlemesi gereken** şey.

📌 Tavan doğru hesaplıyor (305 petek, kara alanının %23'ü — **öngörü birebir
tuttu**), ama **sonraki aşama onu geri alıyor.** Yani kusur tavanda değil,
tavanla yetim-yüz mantığının **arasında.**

## Yarın ilk iş — üç seçenek, ölçülecek

```
A  yetim yüz mantığına "TAVANLA KESİLMİŞ alanı EMME" istisnası ekle
   → en doğrusu; tavan gerçekten sahipsiz alan üretir
B  tavanı yetim-yüz aşamasından SONRAYA taşı
   → üçüncü yer denemesi; bugün iki yer denendi
C  tavanı geri çek, kademe A'yı ağırlıklı Voronoi olarak yeniden kur
   → en pahalısı
```
**Önerim A.** Ve önce şu ölçülecek: *"yetim yüz" mantığı niçin var?* —
muhtemelen ada/enklav sorunları için, ve o gerekçe tavanla çelişmiyor
olabilir; o zaman istisna temiz durur.

⚠️ Ve `arac/uret_petek.py`de A1 **açık duruyor.** Yarın koşu yapılacaksa
önce bu çözülmeli, yoksa aynı sonuç çıkar.

---

## 🟢 BUGÜN NE İNDİ (hepsi commit'li ve push'lu)

```
nokta        2133 → 2307      DÖRT parti · dördünde de AÇILAN KIRILMA GÜNÜ 0
künye        381 → 390        serbedariler · kert · loango · luba · kuba …
renk         310 → 325        renk borcu 73 → 7
`iran`       124 → 77         hayalet dönem (47'si tarih ölçütüyle)
emilme       somali · banda-adalari · ingiltere1900 KAPANDI
Ferecik      H-0007'nin cevabı — 82 km'lik koridor boşluğu
yayın        r1079 CANLI (dünkü koşu, sağlam)
```

**Ve bir yayın zaten yapıldı:** r1079 bugün 19:38'de indi ve canlıda —
151 nokta, 9 delik kapandı, 2,49 milyon km². Bugünün ikinci yayını
(r1080) yapılamadı.

---

## 🟡 SENDEN BEKLENEN — iki şey

### ① A1 için A/B/C kararı
Yukarıdaki üç seçenek. **Önerim A**, ama karar senin.

### ② Halka tablosunda son bir onay
`ONCELIK.md`ye yazıldı, Fas 4 · Hindistan 5 senin kararınla. Bir daha
gözden geçirmek istersen orada duruyor.

---

## ŞU AN NE BEKLİYOR

```
⏸ KALİTE 4      kapandı · yarın Hazar → Kirman/Yezd → Avrupa Rusyası → Avusturya
⏸ RENK 2        boşta · `devirler.js` denetimi yarın (arac/ altında)
⏸ PROJEKSİYON   MapLibre v5 + hibrit kod HAZIR, `projeksiyon` dalında
                🔴 GÖRSEL SINAV YAPILMADI — koordinatörde, yarın
                eşik sayıları (kureZoom 4 / mercatorZoom 6) TAHMİN, ölçülecek
```

📌 Ve bir uyarı: PROJEKSİYON dalı `main`den geride. Birleştirirken
`index.html`de sürüm damgası çakışacak — **damgayı main'den, MapLibre
sürümünü daldan** al.
