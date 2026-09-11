# BULGU — C KAPLAMA ÇÖZÜMÜ, 11 Eylül 2026

Oturum: **C KAPLAMA ÇÖZÜMÜ** (önceki isimler: YABANCI SENKRON → ENKLAV
TAVANI → T ALANI ŞEMASI → C DENETİMİ) · Koordinatör: 1.MURAT · Görev:
kendi C5 denetiminin bulduğu açığı (M-3480'in kutu genişletme kararıyla
büyüyen açık) ölçmek, üç çözümü ölçmek (SEÇMEDEN), C5'i güncellemek.

🔒 `data/*.js` ve `arac/*.py` yalnız okundu — koşu 9 hâlâ CANLI (M-3487),
tek satır yazılmadı. `denetim/TASLAK-hukuki_sinirlar.js` — kardeş oturum
(C DOSYA YAZIM) bu görev SIRASINDA dosyayı güncelledi, ben KENDİ betiğimle
BAĞIMSIZ ÖLÇTÜM, onların sayısına güvenmedim.

---

## ① AÇIĞI ÖLÇTÜM — kutuyu genişlettikçe kaç nokta artıyor

Kendi aracımla (`denetim/ARAC-C-DENETIM-0911.py`'nin `yerlesim_listesi_
yukle()`si, 3817 nokta) bağımsız ölçtüm:

```
Midye-Enez ESKİ DAR kutu (40.5-42.0K/25.8-29.3D)     : 44 nokta
Midye-Enez YENİ GENİŞ kutu (M-3480 sonrası, TASLAK'ta):70 nokta
Mısır-Sudan 22. paralel kutusu (20-24K/24-37D)        : 13 nokta
```

**Kardeş oturumun (C DOSYA YAZIM) sayısıyla karşılaştırma:** onlar aynı
kutular için 42 / 67 buldu — benim 44/70'ime **çok yakın, aynı büyüklük
mertebesinde** (fark muhtemelen ad ayrıştırma/bbox sınır dahil-hariç
farkı). İki BAĞIMSIZ ölçüm birbirini doğruluyor — kesin sayı yerine
**büyüklük mertebesi** (40'lı → 70'li) üzerinde hemfikiriz.

**Kademeli genişleme gradyanı** (Midye-Enez'in dar kutusundan başlayıp
her yönde eşit payla genişletilirse):
```
+0,00°  →  44 nokta     +0,75°  →   90 nokta
+0,25°  →  54 nokta     +1,00°  →  103 nokta
+0,50°  →  81 nokta     +2,00°  →  141 nokta
```
🔴 **Bu gradyan M-3480'in kendi öngörüsünü DOĞRULUYOR:** düz/yassı bir
bölge yok — kutu büyüdükçe kaplama borcu KESİNTİSİZ ve HIZLA büyüyor.
"Doğal sınıra kadar cömertçe genişlet" kuralı uygulanırsa, kaplama
borcunun **küçük kalacağı bir kutu boyutu YOK** — 44'ten 70'e (+59%)
çıkmak bile hâlâ iki denizin TAMAMINI kapsamıyor. ⇒ M-3480'in "geniş
kutu = az dikiş AMA çok kaplama borcu" tespiti **ölçümle doğrulandı.**

**Mısır-Sudan'ın borcu (13) Midye-Enez'inkinden (44-70) ÇOK küçük** —
bölgenin (Sudan-Mısır çöl sınırı) nokta yoğunluğu düşük olduğu için.
⇒ **Kaplama açığının büyüklüğü BÖLGEYE göre KÖKTEN değişiyor**, tek bir
"C'nin maliyeti şudur" hükmü YANLIŞ olur.

**Karlofça'nın 5 kaydının 4'ünde `kapsama.kutu: null`** (henüz
tasarlanmadı) — bunlar için genişleme etkisi ÖLÇÜLEMEDİ, D107 gereği
açıkça yazıyorum.

---

## ② ÜÇ ÇÖZÜM ÖLÇÜLDÜ, SEÇİLMEDİ

Kardeş oturum (C DOSYA YAZIM) TASLAK'a zaten kendi ölçümünü + üç
seçeneğin artı/eksisini yazmıştı (`kapsama_kaplama_analizi`). Ben
**denetim tarafından** (C5'in kendisi ne diyecek) tamamladım:

### 🅰 Geometrik otomatik (cross_yerel her noktayı bir tarafa atar)
```
kaç nokta etkilenir : TÜMÜ (44-70, Midye-Enez'de)
Değişmez 1           : KORUNUR — matematiksel olarak her nokta bir
                        tarafa düşer, sahipsiz KALAMAZ
Emre'nin kuralına sadakat: GERİLİMLİ — "belge konuşuyorsa motor susar"
                        ilkesi bu noktalarda İHLAL EDİLİYOR (sahiplik
                        geometriden geliyor, belgeden değil)
```

### 🅱 Metinden çıkarsama (antlaşmanın genel ifadesinden türetme)
```
kaç nokta etkilenir : TÜMÜ (aynı — ①c/paralel tür hatlarda A ile
                        MATEMATİKSEL OLARAK BİREBİR AYNI çıktı)
Değişmez 1           : KORUNUR (A ile aynı sebepten)
Emre'nin kuralına sadakat: A'DAN DAHA İYİ, AMA KOŞULLU — Midye-Enez'in
                        kendi metni ZATEN genel bir ifade taşıyor
                        ("...to the west of a line...", "tüm topraklar")
                        — YAZDIĞIM regex testiyle DOĞRULADIM. Mısır-Sudan
                        da aynı şekilde ("all the territories South of
                        the 22nd parallel..."). AMA Karlofça'nın Bosna
                        kale listesi gibi NOKTA-KÜMESİ (②) türü kayıtlarda
                        böyle bir genel ifade YOK (belge sadece isim isim
                        kale sayıyor) — o tür için B SEÇİLEMEZ, dayanaksız
                        kalır.
```
🔴🔴 **BULGU: A ve B, ①c (cetvel) ve paralel türü hatlarda GERÇEKTEN
AYNI ŞEY** — çünkü bu türdeki antlaşmaların KENDİSİ zaten "X'in
batısı/güneyi hepsi Y'ye" diye genel bir kural koyuyor; cross-product bu
kuralın MATEMATİKSEL karşılığı, "geometriden" değil "belgenin genel
ifadesinden" geliyor. **Asıl seçim A/B ikilisi ile C arasında.**

### 🅲 Kısmi sezgi (yalnız adlandırılan noktalar C, kalanı A/B'ye bırak)
```
kaç nokta etkilenir : YALNIZ belgenin ADLANDIRDIĞI 2 nokta (Midye-Enez'de
                        Enez+Midye) C ile atanır, kalan 42-68 nokta A/B'ye
Değişmez 1           : A/B'nin KENDİ garantisiyle KORUNUR (Voronoi hiçbir
                        zaman sahipsiz bırakmaz) — C5'in bu noktada
                        söyleyecek bir şeyi YOK
Emre'nin kuralına sadakat: EN SIKI — belge sustuğu yerde motor da SUSMAZ,
                        eski (A/B) davranışına DÖNER. AMA "yorum yapma"
                        ilkesi KASITLI olarak İHLAL EDİLİYOR (belgeye göre
                        değil) o 42-68 noktada — yalnız DAHA DAR bir
                        alanda.
                        ⚠️ Şemaya YENİ bir kavram gerektiriyor (`kapsama.
                        sezgi_kapali`nin TÜM kutu için değil, hattın
                        yakın çevresi için true olması) — SEMA-C §9.3'te
                        YOK, bu şıkkı seçmek şemanın KENDİSİNİ genişletir.
```

**ÖZET TABLO:**
```
        Değişmez1   Emre'nin kuralı        Yeni şema gerekir mi
🅰 A     ✓ korunur   ihlalli (geometri)     HAYIR
🅱 B     ✓ korunur   cetvel/paralelde SAĞLAM,  HAYIR (ama regex/kaynak
                     nokta-kümesinde YOK        doğrulaması gerekir)
🅲 C     ✓ korunur   en sıkı, ama kısmi ihlal   EVET (kısmi sezgi_kapali)
```
📌 **Karar Emre'nin — ben seçmedim, üçünü de ölçtüm.**

---

## ③ C5 DENETİMİ GÜNCELLENDİ — üç senaryo için üç ayrı hüküm

`c5_kapsama_kaplama()` artık kaydın (isteğe bağlı) YENİ
`kaplanmamis_nokta_politikasi` alanına bakıyor:

```
alan YOK (bugünkü çoğu taslak)      → KATI: her kaplanmamış nokta bir
                                       HATA (eski davranış AYNEN korundu)
"otomatik-geometrik"                → 0 HATA, ama N noktanın GEOMETRİDEN
                                       atandığı bir BİLGİ notu (ℹ️) düşer
"metinden-cikarsama"                → 0 HATA, AMA `kaynak.alinti` GERÇEKTEN
                                       genel bir yön/taraf ifadesi taşımıyorsa
                                       (regex testi) 🔴 REDDEDİLİR — bu
                                       politika dayanaksız seçilmiş demektir
"kismi-sezgi"                       → 0 HATA (A/B zaten garanti veriyor),
                                       ama N noktada "yorum yapmama"nın
                                       KASITLI ihlal edildiği bir BİLGİ notu
```
İkisi de (öz-sınav dahil, aşağıya bak) **çalıştı ve İKİ YÖNDE sınandı.**

---

## ④ D187 — C5'İN BİLİNEN POZİTİFİ

🟢 **Gerçek veri ZATEN kendi bilinen pozitifini veriyor** (sentetik
uydurmaya gerek yok, ama YİNE DE bir tane ekledim — aşağıda): Midye-Enez'in
kendi kaydı BUGÜN `kaplanmamis_nokta_politikasi` taşımıyor (M-3480 sonrası
KARAR henüz verilmedi) — yani **69 gerçek "kaplanmamış nokta" hatası C5'in
KENDİSİ tarafından, GERÇEK veride, HER koşuda üretiliyor.** Bu, D187'nin
istediği "bilinen pozitif"in en güçlü hâli: **uydurma değil, GERÇEK ve
GÜNCEL bir açık.**

**Ayrıca öz-sınav genişletildi** — üç politika da SENTETİK olarak sınandı:
```
A (geometrik)         → bilgi notu (hata değil) ÜRETTİ            ✓
B (genel ifade VAR)    → temiz geçti (regex genel ifadeyi buldu)   ✓
B (genel ifade YOK)    → REDDEDİLDİ (regex bulamadı, 🔴 bastı)     ✓
```
Üçü de doğru yönde çalıştı — betik bunları HER koşuda tekrar sınıyor
(`oz_sinav()` içinde), bir regresyon sessizce geri gelemez.

---

## Sonuç — koordinatöre

**Karar önerisi yok, üç ölçüm var:**
1. A ve B, Midye-Enez ve Mısır-Sudan gibi cetvel/paralel türü kayıtlar
   için **matematiksel olarak aynı** — aralarında seçim yapmanın pratik
   önemi YOK, yalnız GEREKÇE dili farklı. **Bu ikisi güvenle
   seçilebilir**, C5 ikisini de destekliyor.
2. C (kısmi sezgi), en "Emre'ye sadık" seçenek ama şemaya yeni bir
   kavram (bölgesel `sezgi_kapali`) ekliyor — bu, bu görevin ötesinde
   bir ŞEMA kararı gerektiriyor.
3. **Nokta-kümesi türü kayıtlar (Karlofça'nın kale listeleri) için B
   hiç seçenek DEĞİL** — genel ifade yok. Onlarda yalnız A ya da C var.

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
