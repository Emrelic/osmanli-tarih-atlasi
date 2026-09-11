# ŞARTNAME — C MOTOR ENTEGRASYONU (11 Eylül 2026)

```
AD      C MOTOR ŞARTNAMESİ
🔒 arac/ DONUK — bu bir ŞARTNAME + YAMA, kod motora YAPIŞTIRILMADI.
```

Öngörü: `denetim/ONGORU-C-MOTOR-0911.json`, commit `6e6a39c`.
Zemin: `denetim/SEMA-C-0911.md` (üç pilot: Karlofça, Midye-Enez,
Şattülarap + §8 şema kesinleştirmesi) — TEKRARLANMADI, üstüne inşa
edildi.

---

## ① GÖVDE MONTAJI — izlendi, satır satır

Tam detay ve satır numaraları `denetim/YAMA-C-MOTOR-0911.py §①`de.
Özet:

```
STATİK (tarihten BAĞIMSIZ, motor başında BİR KEZ):
  1708  ortak kenar ağı
  1748  YASLAMA (dogal_hatta_yasla)
  1750  CHAIKIN (aynı satırda, yaslamadan HEMEN SONRA)
  1752  polygonize — PETEK ilk hâlini alır
  1896  KIYI KESİMİ (KARA) — "sonrasında hiçbir geometri işlemi yok"
  2384  eğim-tabanlı Dijkstra devri (AYRI blok, PETEK_D'yi TEKRAR değiştirir)

TARİHE BAĞLI (her (a,b) dönemi için AYRI):
  4842  "Dönemler kuruluyor" döngüsü — tabi/dogrudan KÜMELERİ (satır
        4851-4856) burada hesaplanıyor
  4869  DOLGU_ACIK genişletmesi
  4890  aynı-kümeyse dönem UZATILIR (birleştirme)
  4581  gosterim_duzelt (B2/B3) — PER-DÖNEM
  4587  İKİNCİ kıyı kesimi (güvenlik ağı)
```

**Cevap: C, satır 4856'dan SONRA, 4869'dan (DOLGU_ACIK) ÖNCE girmeli.**
Gerekçe iki yönlü, ikisi de ÖLÇÜLDÜ/İZLENDİ:
- **Daha ERKEN (statik boru hattı içinde) girerse:** `:1748` yaslama
  C'nin çizdiği cetvel hattını en yakın nehre/sırta ÇEKER — koordinatörün
  uyardığı TAM senaryo, ve bu geri döndürülemez bir geometri bozulması
  olurdu (Chaikin de üstüne binip cetveli EĞRİLTİR).
- **Daha GEÇ girerse** (`tabi`/`dogrudan` zaten `anahtar`a dönüştükten
  sonra): satır 4890'daki "hiçbir şey değişmediyse dönemi uzat" kısayolu
  C'nin ürettiği YENİ ayrımı fark etmez, önceki döneme SESSİZCE
  birleştirir — C hiç uygulanmamış gibi davranır, hatasız görünüp yanlış
  sonuç verir (en tehlikeli sınıf, `D107`'nin "sessiz atlama" ailesi).

---

## ② YAMA

`denetim/YAMA-C-MOTOR-0911.py` — tam eski/yeni kod, `arac/`e
YAPIŞTIRILMAYA hazır. Kapsamı: yalnız Osmanlı (tâbi/doğrudan) tarafı.
**Yabancı (`s:`) taraf için eşlenik yama YAZILMADI** (§③ altında,
D107 ile açıkça).

---

## ③ GERİ DÖNÜŞ YOLU

`MOTOR_C_KAPALI=1` — `MOTOR_PARALEL_KAPALI` emsaliyle birebir aynı
desen. Tam kod `YAMA-C-MOTOR-0911.py §④`de.

---

## ④ 🔴 ASIL SORU — HANGİ DENETİM/EŞİK YENİDEN TÜRETİLMELİ

**Önce çerçeve:** C'nin kapsama kutusu KÜÇÜK ve KESİN (Midye-Enez:
40,5-42,0K/25,8-29,3D — bir bölge, kıta değil). Bu, `B BOŞLUK
PAYLAŞTIRMA`nın gövde-değiştiren akış-tabanlı geçişinden TAMAMEN
FARKLI bir ölçek — orada TÜM dünya petek şekli değişiyordu, burada
YALNIZ kapsama kutusu İÇİNDEKİ birkaç yerleşim.

```
🔴 KESİN ETKİLENİR (ADIYLA):
   Değişmez 2s tavanı (121 açık kırılma) — EĞER C kaydının kendi f:/t:
     sınırları için bir kronoloji maddesi YAZILMAZSA, motor o günü bir
     "kırılma" (petek el değiştirmesi) olarak üretir ama denetim onu
     AÇIK bulur — bu YENİ bir kırılma, tavan +1 kayabilir (Midye-Enez
     için zaten `savaslar.js`te antlaşma kaydı VAR, muhtemelen SIFIR
     net etki, ama BU DOĞRULANMALI, varsayılmamalı).
   Değişmez 7 (dizinsiz harita kimliği) — HUKUKI_SINIRLAR'ın `taraflar`
     alanı GERÇEK devletler.js id'leri taşımalı (SEMA-C'nin kendi
     uyarısı: "balkan-devletleri" YANLIŞ örnekti, "bulgaristan-kralligi"
     olmalı) — yanlış/var-olmayan bir id yazılırsa bu denetim YENİ bir
     açık kalem bulur.

🟡 KÜÇÜK ETKİ BEKLENİR, ÖLÇÜLMELİ:
   Enklav sayısı / çakışma (renk_olc.py ΔE) — C'nin ürettiği yeni sınır
     kapsama kutusu içinde 1-2 yerleşimin komşuluğunu değiştirebilir;
     `B BOŞLUK`teki gibi TÜM haritayı değil, YALNIZ o kutuyu etkiler.
   `donemler.js` boyutu — HUKUKI_SINIRLAR'ın f:/t: pencereleri kadar
     YENİ dönem satırı eklenebilir (Midye-Enez tek kayıt, tek pencere
     ⇒ mertebe: birkaç KB, MB DEĞİL — `B BOŞLUK`ün poligonlaştırma
     tartışmasıyla KARIŞTIRILMASIN, bambaşka ölçek).

🟢 ETKİLENMEZ (VARLIĞA bakıyor, kapsama kutusu DIŞINDaki hiçbir şeye
   dokunmuyor):
   Değişmez 1/1b (sahipsizlik) — C bir sahiplik atıyor, SİLMİYOR
   Değişmez 2/2i (Osmanlı/işgal senkronu) — kapsama kutusu dışı DEĞİŞMEZ
   Konum denetimi, KV_MIN_KM2, B2_ENKLAV_KM (800km), SADE_TOL/KARA_TOL
     — bunlar `B BOŞLUK`ün konusu (akış-tabanlı geçiş), C'nin DEĞİL;
     C geometri ÜRETİM YÖNTEMİNİ değil, ÜRETİLMİŞ geometrinin SAHİBİNİ
     değiştiriyor — iki değişiklik BAĞIMSIZ eksenlerde.

⚪ ÖLÇÜLEMEDİ:
   `js/app.js`in kartCiz()/gösterim kodunun HUKUKI_SINIRLAR kaynağını
     ayrı bir "antlaşma sınırı" olarak işaretleyip işaretlemeyeceği —
     bu görevde `js/app.js`e bakılmadı (arac/ + data/ odaklı görev).
```

⇒ **`D129` burada ÇOK DAR bir kapsamda geçerli**: `B BOŞLUK`ün 8
eşiğinden farklı olarak, C'nin göçü GLOBAL değil YEREL — bir tek
denetimin (Değişmez 2s) TAVANI +1 kayabilir, başka HİÇBİR tavan
yeniden türetilmek ZORUNDA değil (kapsama kutusu dışına HİÇ dokunmuyor
olması KANITLANMALI, bkz. `SEMA-C-0911.md §8.5 SINAV 2`).

---

## ⑤ ÖNGÖRÜ — C uygulanınca kaç petek, kaç km² değişecek

**Bugün (HUKUKI_SINIRLAR dosyası henüz YOK): SIFIR.** Yama uygulansa
bile `'HUKUKI_SINIRLAR' in globals()` kontrolü boş liste döner, motor
davranışı BİREBİR AYNI kalır.

**İlk gerçek C kaydı (Midye-Enez) eklenince:** SEMA-C'nin kendi pilot
ölçümü zaten iki nokta verdi — İstanbul (osmanli tarafı) ve Kırklareli
(bulgaristan-kralligi tarafı, "bu antlaşmayla GERÇEKTEN geçici olarak
Bulgaristan'a geçmişti"). Kapsama kutusu (40,5-42,0K/25,8-29,3D) içine
düşen `yerlesimler.js` nokta sayısı bu görevde TEK TEK SAYILMADI
(ölçülemedi) ama kutunun coğrafî küçüklüğü (Doğu Trakya) göz önüne
alınırsa **mertebe: birkaç ONLARCA yerleşim, birkaç BİN km²** — Doğu
Trakya'nın toplam alanı ~30.000 km² civarında, ve bunun hepsi değil bir
kısmı hattın etkisinde.

**Kabul ölçütü (koordinatörün kendi cümlesi, aynen benimsendi):**
BÜYÜK çıkarsa (yüzbinlerce km², yüzlerce yerleşim) BİR ŞEY YANLIŞTIR —
ya kapsama kutusu yanlış çizilmiş ya da override kodu kapsama kutusunun
DIŞINA taşmıştır. `SEMA-C §8.5 SINAV 2` (kapsama kutusu dışındaki TÜM
hücrelerin birebir DEĞİŞMEDİĞİNİ diff'leme) bu yüzden ZORUNLU bir kabul
testi, isteğe bağlı değil.

---

## TESLİM

```
① gövde montajı: STATİK boru hattı (1701-2429, iki alt-blok) TAMAMEN
   tarihten bağımsız; TEK tarihe-bağlı adım 4842+ döngüsü. C oraya
   girmeli, satır 4856-4869 arası, gerekçe İKİ YÖNLÜ verildi.
② yama: denetim/YAMA-C-MOTOR-0911.py — Osmanlı tarafı TAM, yabancı
   taraf AÇIKÇA eksik bırakıldı (D107)
③ geri dönüş: MOTOR_C_KAPALI=1, MOTOR_PARALEL_KAPALI emsali
④ etkilenen denetim: Değişmez 2s tavanı (121) ve Değişmez 7 KESİN
   sınanmalı; enklav/çakışma/donemler.js boyutu KÜÇÜK etki bekleniyor,
   ölçülmedi; geri kalan altı gösterge (Değişmez 1/1b/2/2i, KV_MIN_KM2,
   B2_ENKLAV_KM, SADE_TOL/KARA_TOL) ETKİLENMEZ çünkü C farklı bir
   eksende çalışıyor (B BOŞLUK'un aksine)
⑤ öngörü: bugün SIFIR (dosya yok); ilk kayıtla mertebe onlarca
   yerleşim/birkaç bin km² — büyük çıkarsa kabul testi (SINAV 2) BAŞARISIZ
```

Karar gerektiren açık sorular: (1) yabancı taraf yaması ayrı bir
oturuma mı verilecek, (2) `taraflar` alanındaki gerçek devletler.js
id'lerinin (bulgaristan-kralligi vb.) doğrulanması kim yapacak,
(3) Değişmez 2s'ye Midye-Enez için kronoloji maddesi eklenmiş mi
(muhtemelen `savaslar.js`te var, bu görevde doğrulanmadı).
