# ÖNGÖRÜ — B1 · MALİYET MESAFESİNİN KARAYA AÇILMASI

> **Yazıldığı an: 12 Ağustos 2026, koşudan ÖNCE.**
> Sonradan yazılan beklenti ölçüme göre şekillenir ve hiçbir zaman yanlış
> çıkmaz — yani hiçbir şey öğretmez. Bu dosya çürütülebilmek için var.

---

## Değişecek olan — TEK DEĞİŞKEN

🔴 **Bu koşuya BAŞKA HİÇBİR ŞEY bindirilmeyecek.** 11 Ağustos'ta üç kalem
tek koşuya bindirildi ve günün en sıkı öngörüsü **ölçülemez** hâle geldi.
O ders bu dosyanın var oluş sebebi.

```
① Dijkstra KAPSAM NÖBETÇİSİ (uret_petek.py:1575)
     eski   if KARA.contains(hat): continue          # hat karadaysa DOKUNMA
     yeni   if KARA.contains(hat) and not hat.intersects(NEHIR): continue
② Dijkstra maliyet dizisi
     eski   kara = gerçek km · deniz = ∞
     yeni   kara = gerçek km · NEHİR HÜCRESİ = km + SABİT CEZA · deniz = ∞
```

**Kıyı hassasiyeti (SADE_TOL) bu koşuya GİRMEYECEK** — ayrı koşu, ayrı ölçüm.

---

## ⓪ ÖNCE ÖLÇÜLECEK — koşmadan önce, ve bu bir ÖNGÖRÜ DEĞİL BİR SORU

🔴 **Çimpe → Saros vakasının teşhisi HENÜZ DOĞRULANMADI ve iki ihtimal var.
İkisinin çaresi FARKLI. Ölçmeden kod yazılmayacak.**

```
İHTİMAL A   Saros'un kuzeyi, Çimpe'nin peteğinden AYRI bir parça
            ⇒ nöbetçi hattın denizi kestiğini görür, Dijkstra KARAR VERİR
            ⇒ o hâlde bugün ZATEN çalışıyor olmalıydı  → başka sebep var

İHTİMAL B   Petek körfezin BAŞINI DOLANARAK tek parça hâlinde kapanıyor
            ⇒ `_p.equals(_kvana[_i])` → "tohumun üstündeki toprak
               devredilmez" (:1567) → parça HİÇ SORULMUYOR
            ⇒ B1 bunu ÇÖZMEZ; çare ANA PARÇAYI DA maliyete tabi tutmak
```

⚠️ **Ben B'yi daha olası buluyorum ama ÖLÇMEDİM ve bunu bilgi diye
sunmuyorum.** `KV_MIN_KM2 = 200` alt sınırı da üçüncü bir ihtimal.

📌 Ve bu, `Değişmez` disiplininin kendisi: *"aracın söylediğini yapmadan
önce aracın ne ölçtüğünü anla."*

---

## Öngörüler — 7 kalem

### 🟢 MAZERETİ OLABİLİR (taban kayabilir)

**①** Değişen petek sayısı **150–600** arası.
> Mazereti: nehir katmanı 187 parça ve hepsi Osmanlı kuşağında değil.
> Sayı bu bandın dışına çıkarsa nehir tamponunun genişliği yanlış seçilmiş
> demektir, kapsam nöbetçisi değil.

**②** Değişen alanın **%70'inden fazlası** büyük nehir havzalarında
(Tuna · Fırat · Dicle · Nil · Volga · İdil · Don) yoğunlaşacak.
> Mazereti: `ne_10m_rivers` süzgeci 31 adlık beyaz listeden 187 parçaya
> çıkmıştı; hangi nehirlerin girdiği tam sayılmadı.

### 🔴 MAZERETİ YOK — tutmazsa TAVAN DEĞİL TASARIM düzeltilir

**③ Kapsam nöbetçisi gerçekten açılacak.** Koşu, nöbetçinin *"hat karada
ama nehir kesiyor"* dalına **sıfırdan büyük** sayıda girecek.
> Sıfır çıkarsa: `NEHIR.intersects(hat)` hiç ateşlemiyor demektir —
> yani ya nehir geometrisi hattı gerçekten kesmiyor (tampon gerekli) ya da
> nöbetçi yanlış yerde. **Bu, `C13`ün ATEŞLEME yoludur ve zorlanacak.**

**④ Osmanlı çekirdeği (Marmara · Bitinya · Trakya) DEĞİŞMEYECEK.**
> Orada büyük nehir yok; Sakarya ve Meriç kenarda. Çekirdek değişirse
> sabit ceza **çok büyük** seçilmiş demektir.
> ⚠️ 11 Ağustos'ta *"Osmanlı 0 kesitte değişmeli"* diye bir öngörü yazmış
> ve YAPISAL OLARAK İMKÂNSIZ olduğu ölçülmüştü. Bu sefer öngörü
> **çekirdek kutusuyla sınırlı** ve o kutuda büyük nehir yok — yani
> aynı hataya düşmüyor. **Düşüyorsa öğrenilecek şey budur.**

**⑤ Toplam kara alanı DEĞİŞMEYECEK** (±%0,1). Bu bir yeniden
**paylaştırmadır**, bir büyütme ya da kesme değil.
> Alan değişirse maliyet dizisi ulaşılamaz hücre üretiyor demektir.

**⑥ `Değişmez 1` (sahipsizlik) ve `1b` (iç boşluk) BOZULMAYACAK.**
> 180 sahipsiz · 0 iç boşluk. Bir petek el değiştirirse delik açılmamalı.

**⑦ Sahra'daki pergel çemberleri BU KOŞUDA DÜZELMEYECEK.**
> Çünkü Sahra'da nehir yok. Çember çölde **tavandan** doğuyor ve tavan bu
> koşuda değişmiyor. Düzelirse teşhisim yanlış demektir ve **sebebi
> aranacak** — düzelmesi iyi haber değil, **anlaşılmamış bir haberdir.**

---

## Ne çürürse ne öğreniriz

```
③ çürürse   nöbetçi açılmadı ⇒ B1 HİÇ KOŞMADI, "temiz" çıktısı YALAN
④ çürürse   sabit ceza çok büyük ⇒ katsayı ölçülmeden konmuş
⑤ çürürse   maliyet dizisi ulaşılamaz hücre üretiyor ⇒ Dijkstra bozuk
⑦ çürürse   çemberin sebebi hakkındaki teşhisim yanlış ⇒ ETKİ-ALANI
            belgesinin ⓪ bölümü düzeltilecek
```

---

## Sağlama — koşudan SONRA, ve dışarıdan

**41 sefer güzergâhı** (`data/savaslar.js`). Maliyet yüzeyi doğruysa,
iki uç arasındaki en ucuz yol o güzergâhlara **benzemeli**.
⚠️ Bu koşuda yalnız nehir cezası var, eğim yok ⇒ **tam benzeşme
BEKLENMİYOR.** Ölçülecek olan bir sayı değil bir YÖN: benzeşme
bugünkünden **arttı mı**?
📌 Taban bugün ölçülmedi. **Koşudan ÖNCE ölçülecek**, yoksa "arttı"
denemez.
