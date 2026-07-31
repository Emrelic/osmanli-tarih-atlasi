# KARAR DAYANAK DEFTERİ — hangi karar hangi sayıya yaslanıyor

> **Neden var:** `OGRENILENLER §41`. Bir kararı ölçüme dayandırırız; sonra biri
> o ölçümün girdisini **haklı bir gerekçeyle** değiştirir. Karar metni aynı
> kalır, dayanağı çürür, kimse geri dönüp bakmaz. Bugün tam bu oldu: su kümesi
> 41 → 329 parçaya çıkınca Timbuktu muaf kümeye girdi ve çöl tavanı kararının
> dayandığı tablo yok oldu — iki değişiklik de tek başına doğruydu.
>
> MOTOR'un teşhisi: kural *"haber ver"* değil, **"bu sayıya hangi açık kararlar
> dayanıyordu?" diye SORABİLMEK.** Bu ancak kararlar sayılarıyla birlikte
> yazılıysa mümkün. Bu dosya o listedir — `URETIM_IZI` mantığının karar
> defterine uygulanmış hâli.

## 🔴 KULLANIM — tek kural

**Bir girdi kümesini / üretilmiş sayıyı değiştiriyorsan, ÖNCE bu dosyada onu ara.**

```bash
grep -n "su kümesi" KARAR-DAYANAK.md
```

Çıkan her satır, senin değiştirdiğin sayıya yaslanmış **açık bir karardır.**
Sahibine haber ver — değişikliği değil, **neyin dayanağını çürüttüğünü.**

📌 Kapanan karar buradan **silinir.** Bu defterin değeri kısalığında: uzarsa
kimse aramaz, aranmayan defter yoktur. Yayına girmiş karar arşiv işidir,
`OGRENILENLER`e ya da ilgili şartnameye gider.

⚠️ Ve `§34`: buraya yazılan sayı **başka bir değer alabilecek** bir sayı olmalı.
"965 yerleşim var" bir dayanak değil, bir olgudur. "965'in 57'si su kenarında"
dayanaktır — çünkü su tanımı değişince değişir.

---

## AÇIK KARARLAR

| # | karar | dayandığı sayı — **arama anahtarı kalın** | değeri | kimin sayısı |
|---|---|---|---|---|
| 1 | **Çöl tavanı muafiyeti ALAN bazlı** (`COL_MUAF_YERLESIM_BAZLI = False`) | **su kümesi** (nehir parça sayısı) → muaf/tâbi dağılımı | 329 parça · muaf 57 · tâbi 63 | MOTOR |
| 2 | aynı karar — çürüten ölçüm | **muaf peteklerin azami erişimi** (yerleşim bazlı okumada) | 1.475 km (Timbuktu) | MOTOR |
| 3 | **Çöl tavanı 300 km** (kullanıcı kararı) | **çöl poligonu** sayısı + sahipsizleşen alan | 31 poligon · 3,59 milyon km² | MOTOR · COĞRAFYA |
| 4 | **`kur:` devri = 6 komşu OY BİRLİĞİ** (kurulmamış peteğin boşluğu kusur mu) | **kalıcı boşluk** sayısı ve komşu oy dağılımı | 12 boşluk · hisarlar 6/6 bizans · Kuveyt 5/6 | MOTOR |
| 5 | **Şehir görünürlüğü: üç sinyal sürücü, alan son eşitlik kırıcı** | **en büyük ortak kova** (`g:`+`tur:`+anılma) | 299 / 965 | ARAYÜZ |
| 6 | aynı karar — alanı sürücü olmaktan çıkaran ölçüm | **alana göre sıralamada İstanbul'un yeri** | 750 / 951 (taban r280'de 965'e güncellendi, yeniden ölçülmedi) | KOORDİNATÖR |
| 6b | aynı karar — alanın eşitlik kırıcı olarak KALMASI | **ardışık alan farkı gürültüde** olan çift sayısı | 290'da 2 (%0,7) ⚠️ 291 petek üzerinden | ARAYÜZ |
| 7 | **Kronoloji süzgeci `k:` alanını kullanır, `etiket:`i değil** | **çok değerlilik**: `k:` dizi sayısı vs `etiket:` ortalaması | `k:` 0 dizi · `etiket:` ~1,7/madde | ARAYÜZ |
| 8 | **Zaman çizgisi yoğunluk göstergesi TABANI anlatır, süzgeç etkisini değil** | **dilimler arası dengesizlik** oranı | 28,8× (5 ↔ 144 madde) | ARAYÜZ |
| 9 | **Coğrafya ekseni etiketi = tarihî bölge adı** (kullanıcı kararı) | **çözülmeyen `yer:`** sayısı + NE kapsaması | 327 çözülmeyen · %99,8 kapsama ama siyasî etiketli | U4 · DENETÇİ |
| 11 | **Engel ölçüsü = TIRMANIŞ** (min-yol üzerindeki max yükseklik − yüksek uç), zirve yüksekliği değil (kullanıcı kararı) | **engel eşiği — MİNİMAX** (m) | **50 m zayıf · 200 m güçlü** (25-75 km: %45→%71→%86) ⚠️ %35 kapsam · 30″ max havuzlama = ÜST SINIR | COĞRAFYA |
| 11b | ⚠️ **KARIŞTIRMA:** 11'deki eşik MİNİMAX tırmanıştır (bütün yollar arasında en kolayı). Ayrı bir sayı olan **düz hat** ölçüsü — 200/500/1000 m — aynı şey DEĞİL | **düz hat engeli** (azamî kot − yüksek uç) | 200 m başlangıç · 500 m güçlü · 1000 m doyma | COĞRAFYA |
| 14 | **Sudan öbeğinde  KALIYOR** — kaynaklı üç kayıt (Darfur 1898-09-02) geri çekilmiyor; tutarsızlık KASITLI | ** taşıyan kayıt** sayısı (hukukî tarih, fiilî değil) | 18 · kaynaklı olan 3 ayrı günde | ARABİSTAN · KOORDİNATÖR |
| 12 | **DEM üretimi TÜM PENCERE** (~4,1 saat), kısmî değil (kullanıcı kararı) | **dağ bloğu / tam pencere süre oranı** | 2× (112 dk ↔ 246 dk) — ilk sunulan 17× YANLIŞTI | COĞRAFYA |
| 13 | **`scalerank ≤ 7` nehir genişletmesi BEKLEMEDE** — yön tartışmalı | **büyük nehir kesen çiftlerde ayrışma** (mesafe sabit) | **%7 ↔ nehir yok %61** (MİNİMAX, 25-75 km) — nehir sınır değil BÜTÜNLÜK · kapsam %84 (2.253 çift) ⚠️ etki 150 km ötesinde KAYBOLUYOR · BÜYÜK grup n=27 | COĞRAFYA · MOTOR |
| 10 | **Altlık kademeli geçiş — Esri altıncı seçenek, varsayılan KAPALI** | **motorun gördüğü nehir** ile dosyanın tamamı arasındaki fark | 41 ↔ 329 parça | ARAYÜZ · COĞRAFYA |

---

## ⚠️ ÇÜRÜMÜŞ DAYANAK KAYDI — bir kez oldu, tekrarı buraya

| tarih | değişen sayı | çürüyen karar | nasıl yakalandı |
|---|---|---|---|
| 31 Tem 2026 | su kümesi 41 → 329 parça (MOTOR, haklı gerekçe) | çöl tavanı muafiyetinin YERLEŞİM bazlı olması | **Yakalanmadı — koşuldu.** MOTOR (B)'yi üretip Timbuktu'nun 1.475 km muaf çıktığını ölçünce görüldü. Bir koşu bedeli. |
| 31 Tem 2026 | dağ alanı süre tahmini 24 dk → **112 dk** (COĞRAFYA, kendi hatası) | kullanıcının "dağ alanları" kapsam kararı — 17 kat tasarruf sanılarak verilmişti, gerçek 2 kat | ✅ **KOŞUDAN ÖNCE yakalandı.** COĞRAFYA gerçek karo listesini çıkarınca gördü: 435°² dağ alanı dağınık, 324 bloğa yayılıyor. Karar kullanıcıya geri götürüldü, **tam pencereye çevrildi.** Bedel: sıfır. |
| 31 Tem 2026 | yerleşim 951 → 965 (YAMACI, 8 paket) | **petek tabanına dayanan HER alan ölçümü**: `data/petek_govde.js` hâlâ 951 kayıtlık | ⚠️ **Bayat, ama sonuç değişmiyor.** ARAYÜZ yakaladı (299'un 8'inin peteği yok). Etkilenen: 6 ve 6b. 14 yerleşim İstanbul'u 750/951'den başa taşıyamaz, sonuç ayakta. **KAPANDI: r280 koşusu petek tabanını 965'e çıkardı** (31 Tem 18:38). Sayılar yeniden ölçülmedi; sonuçlar ayakta. |

📌 Bu satırın burada durmasının sebebi: kusurun **bedeli** yazılmazsa kural
"iyi fikir" kalır. Bir üretim koşusu ≈ 40 dakika.
