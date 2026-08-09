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

## 🔴 SEBEP DİYE YAZILAN ŞEY ÖLÇÜLDÜ VE ÇÜRÜDÜ — 9 Ağustos sabahı

Gece şu yazılmıştı: *"118 YETİM YÜZ SAHİPLİ KOMŞULARA KATILDI ← SEBEP BU."*
**Yanlıştı, ve iki ayrı yoldan yanlıştı:**

```
① MUTLAK SAYIYI FARK SANDIM
   kosu3 (tavan YOK)   116 yetim yüz
   kosu4b (tavan VAR)  118 yetim yüz     ⇒ tavanın payı 2, 118 DEĞİL
② AŞAMA SIRASI ZATEN İMKÂNSIZ KILIYORDU
   yetim yüz  uret_petek.py:912
   A1 tavanı            :933      ⇒ yetim yüz tavandan ÖNCE koşuyor,
   tavanın serbest bıraktığı toprağı GÖRMESİ bile mümkün değil
```

📌 Bu, bu projenin kendi dersinin ihlali: *"bir sayaç 'dört tane var' der,
nöbetçi 'ikisi az önce doğdu' der — ve asıl bilgi ikincisidir."* Gece o
dersi uygulamadım; sabah üç koşu logunu yan yana koyunca çıktı.

## 🟢 GERÇEK BULGU — üç koşu yan yana konunca desen çıktı

```
kosu3   tavan YOK              116 yetim yüz  ·   62 bozuk kenar
kosu4   tavan Voronoi sonrası  283 yetim yüz  ·   75 bozuk kenar   ← YETİM YÜZ patladı
kosu4b  tavan kıyı kesiminde   118 yetim yüz  ·  382 bozuk kenar   ← BOZUK KENAR patladı
```

**Her yerleştirme TAM BİR arıza üretiyor** — ve gece görülen yalnız
birincisinin adıydı, ikincisinin verisiydi.

Ve 382'nin kimliği ölçüldü: **335 yeni kenarın adları neredeyse tamamen çöl ·
bozkır · Sibirya · Afrika** — yani tavanın kestiği hücreler. Kıyıda yeni bir
uyuşmazlık **yok.**

🔴 **Ve asıl teşhis: nöbetçinin EVRENİ değişti, KENDİSİ değişmedi.**
`uret_petek.py:1289` şunu **zaten yazıyor**: *"Çöl tavanı sonrasındaki çağrı
… artık BİLGİ satırı — ✗ basmıyor, çünkü orada ölçtüğü delikler **kasıtlı**."*
Yani motor *"kasıtlı delik bozuk kenar üretir, bu kusur değildir"* kavramını
biliyor — **çöl tavanına muafiyet vermiş, A1'e vermemiş**, çünkü A1 nöbetçiden
sonra doğdu ve tam onun **önüne** yerleşti.

## ⇒ A/B/C ŞIKLARI ÖLDÜ — ikisi yanlış teşhisin üzerine kuruluydu

```
A  "yetim yüz mantığına istisna ekle"   → GEREKSİZ: yetim yüz sebep değil
B  "tavanı yetim-yüzden SONRAYA taşı"   → ZATEN ÖYLE (912 < 933)
C  ağırlıklı Voronoi                     → hâlâ açık ama gerekçesi kalmadı
```

**Yapılan (kod, 9 Ağustos):** geometriye **hiç dokunulmadı.** İki ölçüm
aleti eklendi:
```
① KOVA AYRIMI    tavanın bağladığı hücrelerin kenarı "kasıtlı" kovasına
                 gider, tripwire'a SAYILMAZ. Yaklaşıklığı ve bedeli koda
                 açıkça yazıldı (kapalı kovaya düşen gerçek bir kıyı
                 kusuru görünmez olur — iki sayı da basılıyor)
② KORUNUM SINAVI tavan alanı ARTIRAMAZ. Koşu 4b'de "yabancı +%15
                 (+6,6 M km²)" ölçülmüştü ve çıktılar geri alındığı için
                 dışarıdan sorulamıyordu ⇒ alet koşunun İÇİNE kondu
```
`C13` gereği ikisi de **iki yönde sınandı** (sentetik geometriyle zorlanarak):
geçme yolu temiz · üç ateşleme dalı da ötüyor · ve tavan kesiği **gerçek bir
bozukluğu ÖRTMÜYOR.**

## 🟡 KOŞU 5 KOŞUYOR — ve kararı O verecek

Öngörü **koşu başlamadan** yazıldı: `denetim/kosu5-ongoru.json`, beş kalem.
Bilgiyi taşıyacak kalem **önceden işaretli**:

```
④ korunum ②: tavandan nöbetçiye alan değişimi
   ⚠️ ARTIŞ çıkarsa → kaçak GERÇEK ve yeri BULUNDU
   ✓ çıkarsa       → "+%15 yabancı" ÖLÇÜMÜ yanlıştı, tavanda kusur YOK
   İki sonuç da bilgidir; hangisi çıkarsa karar ona göre verilir
```

⚠️ Bu koşu **geometriyi değiştirmiyor** — çıktısı 4b ile aynı olmalı. Amacı
yayın değil **teşhis**; ama temiz çıkarsa aynı çıktı yayınlanabilir.

---

---

## 🔴 SON DAKİKA EKİ — koşu 4b logu, kararı GÜÇLENDİRDİ

PROJEKSİYON oturumu koşu logunu okuyup nakletti (yorumlamadan, doğru
davranış). Üç satır yayını durdurma kararını **doğruluyor:**

```
① 3 petek ham hücresinin %10'undan KÜÇÜK kaldı
   Finschhafen · Port Moresby · TIMBUKTU
   ⚠️ "fetih/kayıp maddeleri görünmeyecek" — motorun kendi uyarısı
② 58 petek "aşınma bandı"nda (%10-60)
③ ~50 yerleşim "✗ BEKLENMEDİK — İNCELE" (kuşatılmışlık, epok sayısı)
```

🔴 **①'in içinde TIMBUKTU var ve bu tam olarak tavanın hedefiydi.** Tavan
Timbuktu'yu 2,69 milyon km²'den 245 bine indirdi — **istenen buydu.** Ama
motor onu *"petek ham hücrenin %10'undan küçük"* diye uyarıyor ve
**maddelerinin görünmeyeceğini** söylüyor.

⇒ Yani tavan bir **ikinci yan etki** daha üretiyor: petek küçülünce o
yerleşimin kronoloji maddeleri haritada görünmez oluyor. Bu, yetim-yüz
sorunundan **ayrı** bir kalem ve yarın ikisi birlikte değerlendirilmeli.

📌 Ve ③'teki ~50 *"beklenmedik"* etiketi koşu 3'te yoktu. Tavanın
kuşatılmışlık hesabını da etkilediğini gösteriyor — üçüncü bir yan etki.

⇒ **Üç yan etki, üçü de tavanın KENDİSİNDEN değil, tavanla motorun
ÖTEKİ AŞAMALARININ etkileşiminden geliyor.** Yarınki karar (A/B/C) bunu
gözetmeli: seçenek A yalnız yetim-yüzü çözer, ①/③'ü çözmez.

⚠️ **Bu yüzden yarın önce ÖLÇÜM, sonra karar:** tavanın kaç aşamayla
etkileştiğini saymadan hangi seçeneğin doğru olduğu bilinemez.

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
