# HÜKÜM ALANI — bir yerleşim ne kadar toprağa hükmeder?

```
AD     : HÜKÜM ALANI
MODEL  : Opus
DİZİN  : C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SAHİP  : denetim/BULGU-HUKUM-ALANI-0904.md   (YALNIZ bu dosyaya yazarsın)
```

## EMRE'NİN SORUSU — birebir

> *"Bir yerleşim yeri askerî, siyasî, idarî, ekonomik olarak ne kadar toprak
> alanına hükmeder — bunu akademik kaynaklardan, bilimsel makalelerden,
> doktrinlerden, coğrafî ekonomik sosyolojik tarihî verilerden araştıralım.
> Koddaki meselenin cevabı kodda olamaz; bilimsel akademik verilerden
> hareketle koddaki ayarlamayı biz yapacağız."*

🔴 **Bu bir KOD işi DEĞİL, bir KAYNAK işidir.** Kodu okuyarak cevap arama —
kod zaten bir tercihi uyguluyor ve o tercihin dayanağı yok. Aradığımız şey
**dayanak**.

## 🔒 KISIT

```
PETEK ÜRETİMİ KOŞUYOR (13+ saat, PID 12656).
🔴 arac/uret_petek.py · renkler.py · girdi.py DONMUŞ — yazmak KOŞUYU ÖLDÜRÜR
🔴 data/* DONMUŞ
🟢 SERBEST: denetim/* · oturumlar/*
```
⇒ Hiçbir sayıyı koda yazmayacaksın. Çıktın bir **rapor**; ayarı Emre ile
koordinatör yapacak.

## NİÇİN BU SORU — motorun bugünkü hâli

Motor her yerleşime bir **yarıçap tavanı** veriyor ve bugün beş kademeye de
**aynı 200 km**:
```
uret_petek.py:119   TAVAN_KM {1:700, 2:420, 3:280, 4:140, 0:280}  ← ESKİ, kademeli
uret_petek.py:878   TAVAN_KM = {1:200, 2:200, 3:200, 4:200, 0:200} ← BUGÜN, düz
uret_petek.py:1055  R = TAVAN_KM.get(y.get("k") or 0, ...)         ← kademe OKUNUYOR
```
Yani **mekanizma sağlam, sayılar dayanaksız.** Ve `k:` alanı dolu:
```
k0 1239 · k1 345 · k2 228 · k3 1282 · k4 711     (3805 nokta)
⚠️ k0 "başkent" DEĞİL, "kademesi yazılmamış" — çoğu yabancı şehir.
   Bu tuzak CLAUDE.md'de kayıtlı; k0'a en yüksek tavanı vermek 1239 noktayı
   imparatorluk merkezi saymak olur.
```

## 🟢 ELDEKİ TEK AMPİRİK ÇAPA — koordinatör ölçtü, sen DOĞRULA

Atlasın kendi menzil/koridor ağının kenar uzunlukları = **bir sıçrama mesafesi**:
```
en kısa 19 · %25 → 52 · ORTANCA 80 · %75 → 115 · %90 → 163 km   (n=84)
```
Bu, imparatorluğun kendi altyapısının söylediği şey. **Doğrula** (`data/koridor*.js`),
ve mümkünse **kaynakla karşılaştır**: TDV `menzil--osmanli` menzil aralığı için
ne diyor?

## ⑴ ARANACAK OLAN — dört eksen, ve hepsi AYRI cevap verebilir

```
ASKERÎ    bir kuvvet üssünden ne kadar uzakta savaşabilir?
          anahtar: günlük yürüyüş · ikmal · "güç kaybı eğimi"
İDARÎ     bir merkez ne kadar uzağı YÖNETEBİLİR (vergi, yargı, atama)?
          anahtar: gidiş-dönüş süresi · haberleşme hızı · idarî kademe yarıçapı
SİYASÎ    ne kadar uzağa HÜKÜM DAYATILABİLİR (tâbiiyet, haraç)?
          ⚠️ bu askerîden GENİŞ olur — atlasta `v:` (tâbi) katmanının karşılığı
EKONOMİK  pazar alanı · taşıma maliyeti eşiği
          anahtar: kara ↔ su taşıma maliyet oranı
```
🔴 **Dördü tek sayıya indirilemez ve indirilmemeli.** Rapor dört ekseni ayrı
tutsun; atlasın `d:` (doğrudan) ve `v:` (tâbi) ayrımı zaten bu farkın
karşılığı.

## ⑵ BAŞLANGIÇ NOKTALARI — hepsi KOORDİNATÖRÜN HATIRLADIĞI, HİÇBİRİ DOĞRULANMADI

🔴 **Bunlar bir liste değil, bir başlangıç.** Her birini **kendin ölç**:
sluglar/künyeler doğru mu, hangi sayıyı gerçekten veriyor, ve hangi
coğrafyayı/dönemi kapsıyor.
```
Christaller (1933) Zentrale Orte in Süddeutschland — merkezî yerler kuramı.
                   k=3 pazar · k=4 ulaşım · k=7 İDARÎ ilke.
                   📌 iç içe altıgenler — bizim petek motorunun geometrik ikizi
von Thünen (1826)  Der isolierte Staat — merkez etrafında eşmerkezli halkalar
Boulding (1962)    Conflict and Defense — "loss-of-strength gradient":
                   askerî güç üsten uzaklaştıkça düşer. Sorunun formülü.
Van Creveld (1977) Supplying War — demiryolu öncesi ordu ambarından kopamaz
Engels (1978)      Alexander the Great and the Logistics of the Macedonian Army
Luttwak (1976)     The Grand Strategy of the Roman Empire
Turchin            imparatorluk büyüklüğü üzerine nicel modeller
Bang & Bayly       Tributary Empires in Global History
OSMANLI            TDV `menzil--osmanli` · kaza/sancak/eyalet yarıçapları
                   ⚠️ TDV bu projede BİRİNCİL kaynaktır (§4)
```

## ⑶ 🔴 VE BİR EKSİK — SU. Bu eksen raporun merkezinde olmalı.

Motorun sürtünmesi **yalnız eğimden** geliyor (`1 + 0.005 × |∇z|`). Nehir:
```
❌ maliyet üretmiyor      — geçmek bedava
❌ koridor değil          — boyunca gitmek de bedava
❌ geçit noktası YOK      — ford/köprü hiç modellenmemiş
✅ yalnız (a) sınır yaslamada (b) çöl muafiyetinde geçiyor
```
🔴 **Tarihsel gerçek bunun tam tersi ve İKİSİ BİRDEN:**
```
nehir BOYUNCA  en ucuz yol — kara taşımasından bir MERTEBE ucuz
nehri ENİNE    en güçlü engel — geçit/köprü ister
              ve şehirler tam o yüzden GEÇİTLERDE kurulur
```
⇒ **ARA:** kara ↔ su taşıma maliyet oranı için akademik sayı var mı?
(Roma tahıl fiyatı, Diocletianus Edictum'u ve ortaçağ nakliye çalışmaları
bu oranı veriyor olabilir — **ölç, hatırlama.**) Ve nehir geçidinin idarî
sınır olarak rolü.

## ⑷ TESLİM — kademeli tavan tablosu, DAYANAĞIYLA

```
kademe   ne demek        ÖNERİLEN tavan   DAYANAK (kaynak + alıntı)   güven
k4       kale · köy            ? km        ...                        yüksek/orta/düşük
k3       kaza merkezi          ? km
k2       sancak merkezi        ? km
k1       eyalet merkezi        ? km
k0       KADEMESİZ ⚠️          ? km        (tuzak — yukarıda)
```
Ve ayrıca:
```
· ASKERÎ ile SİYASÎ tavan AYRI olmalı mı? (d: ve v: katmanları)
· tavan HAM KM'de mi, MALİYET biriminde mi olmalı? — bugün ham km,
  oysa motor km × sürtünme ile yürüyor: dağdaki kale ile ovadaki şehir
  aynı 200 km'ye uzanıyor
· çöl için ayrı tavan gerekli mi? (COL_TAVAN_KM = 300 zaten var)
· su ekseni tavanı nasıl değiştirir?
```

## KAYNAK KIRMIZI ÇİZGİLERİ — `CLAUDE.md §4`, ve bugün DARALDI

```
🟢 KABUL   üniversite yayını · hakemli makale · alanın standart el kitabı ·
           birincil kaynak neşri · TDV (İslâm dünyası için BİRİNCİL)
🔴 ASLA    forum · blog · içerik çiftliği · kaynaksız derleme · YZ üretimi metin
🔴 YENİ    Britannica'nın "Quick Summary" sayfaları YZ ÜRETİMİDİR —
           sayfa kendi söylüyor: "This summary is created from Britannica
           articles using AI." Bir Britannica bağlantısı TEK BAŞINA kaynak
           DEĞİL; sayfanın hangi cinsten olduğuna bakılır.
           📌 Bir kaynağın güvenilirliği artık SAYFA düzeyindedir.
🟡 Vikipedi  yalnız "hangi maddeye bakayım", DAYANAK DEĞİL
```
🔴 **`kaynak` alanı boş bırakılmaz** — bulunamadıysa `bulunamadı` diye yaz.
🔴 Ve üç damgayı ayır: **`bulunamadı`** (aradım, yok) · **`ölçülemedi`**
(aradım, gövde alınamadı) · **`okumadım`** (aramadım bile).

## 🔴 ÖNGÖRÜ — ölçümden ÖNCE, dört alanla
```
① NE bekliyorum (sayı ya da yön)
② MAZERETİ var mı — yoksa "mazeret YOK" diye YAZ
③ HANGİ KAYNAKTAN, HANGİ BİRİMDE okuyacağım
④ NEYE KARŞI sınanacak
```

## ⚠️ VE BEKLENTİYİ AÇIKÇA YAZIYORUM
**Literatür tek bir sayı vermeyebilir.** Verirse iyi; vermezse *"vermiyor"*
demek bir **sonuçtur** ve uydurulmuş bir sayıdan kat kat değerlidir. O
durumda istenen şey: **hangi büyüklük mertebesinin savunulabilir olduğu**
ve **hangi değişkenlere bağlı** olduğu.

## HABERLEŞME — 🔴 CEVAP KENDİ PENCERENE YAZILMAZ
```
mcp__ccd_session_mgmt__send_message
    session_id : local_0de4b2d7-a2ce-4a61-934c-c4146f3f130b
```
```
AÇILINCA     "açıldım, brifingi okudum, dosyam bende"
KALEM KALEM  bir eksen bitince — biriktirme
BİTİNCE      tablo + dayanak + güven düzeyi
```
Her madde üç şey: **① ne ölçtüm · ② neyi bulamadım · ③ ne istiyorum.**
🔴 **AKSAKLIK BEKLEMEZ.** Ve devraldığın hiçbir rakamı doğrulamadan aktarma —
yukarıdaki menzil ortancası (80 km) benim ölçümüm, **sen de ölç.**
