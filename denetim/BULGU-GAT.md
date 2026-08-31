# GÂT ÇIKINTILARI — ölçüm ve teşhis

> Oturum **KORİDOR DÜNYA** · 31 Ağustos 2026 · şartname M-1856
> 🔒 Koşu canlı (PID 7788). `arac/uret_petek.py · girdi.py · renkler.py`
> **okundu, yazılmadı.** Bütün ölçüm betikleri scratchpad'de.
> Görsel künyesi: `1802-03-25 · 22,28-28,32N · 7,76-14,83D · z6.1` · yayın r4325

---

## 1. HÜKÜM — mekanizma ③ (A1 YARIÇAP TAVANI), ① DEĞİL

**Üç adaydan hangisi olduğu ölçüldü:**

```
① B2 ENKLAV KÖPRÜSÜ   🔴 ATEŞLEYEMEZ — ölçüldü
② VORONOİ KAMASI      🟡 kısmen — hücreyi komşusuz yönde serbest bırakıyor
③ A1 YARIÇAP TAVANI   🟢 ASIL SEBEP — ölçüldü
```

### Ölçüm ①: B2 köprüsü ateşleyemez, çünkü mesafe eşiğin ÜSTÜNDE
```
Gât'ın AYNI SAHİPLİ en yakın noktası:  Ubârî  316,7 km
                                        Murzuk 390,1 · el-Katrûn 450,4
B2_ENKLAV_KM = 250,0    ("Emre: karasal · ölçülen en uzak vaka 223 km")
⇒ 316,7 > 250  ⇒ köprü KURULAMAZ. Koşu logu da Gât'ı B2 dökümünde
  ANMIYOR; yalnız `BOZUK KENAR [tavan/kasıtlı] Gât` diye geçiyor.
```

### Ölçüm ②: Gât'ın bütün yakın komşuları SAHİPSİZ dolgu noktaları
```
105,5 km  Tâsîlî n'Accer   k0  sahipsiz
153,2 km  İdehân Ubârî     k0  sahipsiz
198,0 km  Ramletü Murzuk   k0  sahipsiz
261,6 km  İdehân Murzuk    k0  sahipsiz
307,1 km  Vâdî Tanezzûft   k0  sahipsiz
316,7 km  Ubârî            k4  tâbi      ← ilk SAHİPLİ komşu
```

### Ölçüm ③: hücre TAVANINDA — şekli tavan belirliyor
```
Gât  k = 4   ⇒  TAVAN_KM[4] = 140 km
yayınlanmış gövdesinin merkezden en uzak köşesi: 148 km
ortalama yarıçap 111 km · ORAN 1,34 (yuvarlak, kama YOK)
```
⇒ Gât'ın peteği **~140 km'lik bir daire**; komşusu uzak olduğu için
tavana kadar büyümüş, ve kesildiği yerde loblar bırakmış. Kuzeydoğu ve
güneydoğudaki *"çıkıntı"* bu dairenin, uzak komşulara doğru serbest
kalan kenarlarıdır.

---

## 2. 🔴 EMRE'NİN GÖZLEMİ — YARISI DOĞRU, YARISI DEĞİL

> *"Orada koridor yok, enklav yok."*

```
"koridor yok"  🟢 DOĞRU — B2 köprüsü kurulmamış (316,7 km > 250 km eşiği)
"enklav yok"   🔴 YANLIŞ — Gât TAM OLARAK BİR ENKLAV
```
**Ölçüm:** 1802-03-25'te bölgedeki `tâbi` gövde **BEŞ AYRI PARÇA**:
```
parça 1  9,023°²  Murzuk · Sebha · Ubârî · Tırgan · Zevîle
parça 2  6,525°²  Ğadâmis · Derc
parça 3  3,231°²  Sokna
parça 4  3,116°²  el-Katrûn
parça 5  2,864°²  GÂT            ← tek başına, 23,42-25,63K / 9,32-11,17D
```
Ve `Gât.boundary ∩ (her sahipli komşu).boundary` = **BOŞ**: Gât hiçbir
sahipli komşusuyla **tek bir sınır noktası bile paylaşmıyor.**

📌 Yani Emre'nin *"bağlanacak idi"* dediği şey **hiç kurulmamış** — ve
istediği içbükey parabolik bağ, mevcut eşikle **kurulamaz.**

---

## 3. ÇIKINTININ CİNSİ — "ince boyun" DEĞİL

Erozyon sınavı (gövdeyi r kadar içine büz, kopuyor mu):
```
parça 5 (Gât)      0,30° (~30 km) erozyona kadar TEK PARÇA ⇒ ince boyun YOK
parça 2 · 3 · 4    aynı ⇒ ince boyun YOK
parça 1            0,30°de İKİYE ayrılıyor ⇒ ORADA boyun var (Ubârî↔Zevîle
                   hattı; Emre'nin sorduğu yer DEĞİL)
```
⇒ Gât'ın gövdesi **kompakt bir blob**, kama ya da sivri uzantı taşımıyor.
Ekranda *"çıkıntı"* gibi okunan şey, **tavana dayanmış dairenin
lobları.**

---

## 4. DÖRDÜNCÜ GÖRSEL — `28,48-28,83K / 10,54-11,12D`

Bu kutu Gât'ın değil, **parça 2'nin (Ğadâmis-Derc)** güney ucu
(parça 2 sınırları `28,67-31,06K / 7,64-11,67D`). Aynı mekanizma:
kapalı bir gövdenin tavanla kesilmiş kenarı. **İnce boyun ölçülmedi
(yok).**

---

## 5. ÜÇ ÇARE — ölçülmüş sonuçlarıyla

```
(A) B2 EŞİĞİNİ YÜKSELT   250 → ≥320 km
    🟢 Emre'nin istediği bağ KURULUR (Gât ↔ Ubârî 316,7 km)
    🔴 KÜRESEL ETKİ: eşik bütün çöllerde geçerli. Kodun kendi notu
      "ölçülen en uzak vaka 223 km" diyor ⇒ 320, ölçülmüş azamînin
      %43 üstü. Sahra · Rub'ul Hâlî · Orta Asya'da yeni köprüler
      doğar. ⚠️ ÖLÇÜLMEDİ: kaç yeni köprü doğacağı.

(B) ARAYA GERÇEK NOKTA KOY   Gât-Ubârî arasına kervan menzili
    🟢 EN UCUZ ve `§2`nin kendi reçetesi: "noktası olmayan bölge
      en yakın peteğe emilir" — çare nokta.
    🟢 Küresel etki YOK, yalnız bu koridoru bağlar.
    🔴 KAYNAK ŞART (`§4`): Fizan kervan yolu menzilleri için akademik
      dayanak bulunmalı. ⚠️ ARANMADI.

(C) DOKUNMA   Gât gerçekten uzak bir vaha; enklav olması TARİHÎ olabilir.
    🟢 Osmanlı'nın Fizan'daki hâkimiyeti fiilen vaha-vaha idi.
    🔴 Ama o zaman Emre'ye "bu kusur değil" denmeli, ve gerekçesi
      kaynağa dayanmalı. ⚠️ ÖLÇÜLMEDİ.
```

**Önerim (B)** — çünkü (A) küresel bir eşiği yerel bir şikâyet için
oynatıyor ve bu projede ölçülmüş bir tuzak: *tek bir çifti kayırmak üç
tanesini bozabilir.*

---

## 6. `B2_KAVIS` SORUSUNA CEVAP — bugün ANLAMSIZ

Şartname *"KAVIS 0.35 parabolik girintiyi veriyor mu"* diye sordu.
**Bu vakada köprü hiç kurulmadığı için KAVIS'in etkisi SIFIR.**
Kavisi değiştirmek Gât'ta hiçbir şeyi değiştirmez.
⇒ Önce **(A) mı (B) mi** kararı; köprü kurulursa kavis sorusu anlam
kazanır. (Tavanı 0,5 ve *"t=0,5'te yarı-genişlik TAM SIFIR"* uyarısı
okundu; öneri yapılmadı çünkü ölçülecek köprü yok.)

---

## 7. ÖLÇMEDİĞİM
- (A) seçilirse dünyada kaç yeni B2 köprüsü doğacağı — **ölçülmedi**.
- Fizan kervan yolu menzillerinin akademik dayanağı — **aranmadı**.
- Gât'ın 1802'de gerçekten idarî olarak kopuk olup olmadığı (tarih
  sorusu) — **aranmadı**. Bu, (C)'nin dayanağı olurdu.
