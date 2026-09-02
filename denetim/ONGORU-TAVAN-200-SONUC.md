# SONUÇ — TAVAN 200 öngörüsünün ölçümü

> Koşu: `kosu_2eylul.log` · 2 Eylül 11:01 → 21:36 · **10 saat 35 dakika**
> Ölçüm: 3 Eylül, koordinatör (1.MURAT). Öngörü `ONGORU-TAVAN-200.md`,
> **koşudan ÖNCE yazılmış ve damgalanmış.**

## HÜKÜM: 🟢 KABUL

Öngörünün kendi kabul ölçütü (önceden yazılmış):
```
🟢 KABUL   ① tuttu · ⑤ temiz · ④'ün büyüklüğü < 4b'nin (3.397.649 km²)
```

| kalem | öngörü | ölçüm | damga |
|---|---|---|---|
| ① Gât↔Ubârî kapanır | `200+200=400 > 317` | `TAVAN_KM` hepsi **200** doğrulandı (`uret_petek.py:878`) | 🟢 **TUTTU** — parametre üzerinden |
| ② Gât↔Murzuk (390 km, 10 km pay) | sınırda | — | ⚪ **ÖLÇÜLEMEDİ** |
| ③ kısalan petek 900-1400 | tahmin | **2** | 🔴 **ÇÜRÜDÜ** — 450 kat küçük |
| ④ serbest alan komşuya geçer | `< 3.397.649 km²` | **2.227 km²** | 🟢 **TUTTU** — 1526 kat küçük |
| ⑤ Değişmez 1 temiz kalır | temiz | ✓ **2663 yerleşim, 219 sahipsiz (beklenen 219)** | 🟢 **TUTTU** |
| ⑥ Osmanlı alanı değişir | yön bilinmiyor | — | ⚪ **ÖLÇÜLEMEDİ** |
| ⑦ çöl tavanı âtıl kalır | âtıl | — | ⚪ **ÖLÇÜLEMEDİ** |

```
TUTTU 3  ·  ÇÜRÜDÜ 1  ·  ÖLÇÜLEMEDİ 3
```

## 🔴 ③ ÇÜRÜDÜ — ve öngörü bunu ÖNCEDEN mazur göstermişti
Öngörü ③ için *"Güven: DÜŞÜK — bu bir TAHMİN, ölçüm değil… bu sayıyı
yanlış tahmin etmem bir şey öğretmez; **aralığın DIŞINA çıkması**
öğretir."* diyordu. **Aralığın dışına çıktı: 900-1400 beklendi, 2 ölçüldü.**

⇒ Öğrettiği şey: **tavan daraltmak, sanıldığı kadar çok peteği
bağlamıyor.** Sebep ölçülmedi ama iki aday var:
```
① noktaların çoğunun komşusu ZATEN 200 km'den yakın ⇒ tavan onları
   hiç bağlamıyor (yalnız ıssız çölde bağlıyor)
② A1 tavanı YÖNE DUYARLI (izotrop değil) — bazı yönlerde ~350 km'ye
   uzanıyor, yani "200 km tavan" tek bir daire değil
```
⚠️ İkisi de **ölçülmedi**; bu satır bir hipotez kaydıdır, hüküm değil.

## 🟢 ④ EN ÇARPICI SONUÇ — 4b'nin 1526'DA BİRİ
```
koşu 4b (9 Ağustos)   20 petek kısaldı · 3.397.649 km² sahipsizleşti
                      118 yetim yüz komşulara katıldı
                      Osmanlı 9 kesitin 7'sinde DEĞİŞTİ · yabancı +%15
bugün                  2 petek kısaldı ·     2.227 km² sahipsizleşti
```
Öngörü ④ *"mazereti YOK — bu koşuda da olacak; soru «olacak mı» değil
«ne kadar»"* diyordu. Cevap: **neredeyse hiç.**
📌 Ve bu, `§11`in *"tavan daraltmak deliği kapatmaz, TAŞIR"* dersinin
sınırını çiziyor: taşıma **tavanın ne kadar daraldığına** değil, **kaç
peteğin gerçekten bağlandığına** bağlı. 4b'de tavan `280→140` idi ve
1945 noktayı daraltıyordu; bugün tek tavan 200 ve yalnız **2** peteği
kısalttı.

## ⑦ NİÇİN ÖLÇÜLEMEDİ — ve bu bir aletsizlik
Log `COL_TAVAN` satırı basmıyor. Basılan tek ilgili satır *"çöl tavanı
ÖNCESİ örtü: 73 bozuk kenar (taban 58) ✗ TABANIN ÜSTÜNDE — YENİ
UYUŞMAZLIK"* ve o **başka bir şeyi** ölçüyor.
⇒ `ÖLÇÜLEMEDİ` damgası kondu — **"âtıl kaldı" diye YAZILMADI.**
🔜 Ve o `73 bozuk kenar (taban 58)` satırı **ayrı bir kalemdir**,
öngörünün konusu değil. Kaydedildi.

## ⑥ NİÇİN ÖLÇÜLEMEDİ
Dokuz kesitteki Osmanlı km²'si için ayrı bir kesit aleti gerekiyor;
`_tavan200_olc.py` onu hesaplamıyor ve bunu **açıkça** basıyor.
⚠️ Öngörü ⑥ için *"yönü tahmin ETMİYORUM"* demişti — yani çürüyemezdi.
Şimdi de ölçülmedi. **Kalem AÇIK.**

## KOŞUNUN KENDİ SAĞLIK SATIRLARI
```
🟢 Doğrulama: tüm yerleşimlerin peteği geçerli ✓
🟢 havuz bütünlüğü: 52.982 halka atıfının hepsi geçerli ✓
🔴 epok anomalisi: İndor · İsmâiliye · Şuşa · Şırnak
   "✗ BEKLENMEDİK — İNCELE"  ← AYRI KALEM, kaydedildi
```

## DENETİM — koşudan sonra
```
🟢 Değişmez 1  ✓ 2663 yerleşim, 219 sahipsiz (beklenen 219)
🟢 Değişmez 1b ✓ 0 (beyanlı 4/4)
🟢 Değişmez 2  ✓ 534 kırılma, 0 açık
🟢 Değişmez 4  ✓ 8 hayalet (beklenen 8)
🔴 Değişmez 4c ✗ 286 (beklenen 280)   ← bilinen açık, reçetesi OK127'de
```

## 📌 VE ÖNGÖRÜNÜN KENDİSİ HAKKINDA
Yedi kalemin **üçü tuttu, biri çürüdü, üçü ölçülemedi.** Bilgiyi taşıyan
**çürüyen** oldu (③): tavan daraltmanın etkisi hakkındaki sezgiyi
düzeltti. Tutan üçü doğrulama, ölçülemeyen üçü **açık kalem** —
hiçbiri "temiz" diye raporlanmadı.
🟢 Ve mazeret sonradan uydurulamadı, çünkü **hangi kalemin mazereti
olabileceği de önceden yazılmıştı**: ③'ün mazereti vardı ve kullanıldı,
④ ve ⑤'in yoktu ve gerekmedi.
