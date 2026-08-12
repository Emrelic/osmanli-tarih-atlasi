# KORİDOR TASARIM — ilerleme

**Tur 1 · 12 Ağustos 2026 · yapılan: yalnız İŞ 1 (+ İŞ 2'nin `git grep` ayağı)**

---

## ⓪ HÜKÜM — tek satır

```
MENZİL HİPOTEZİ: KISMEN TUTTU
  birim ayağı  TUTTU   — TDV mesafeyi km değil SAAT ve MENZİL SAYISI ile veriyor
  güzergâh ayağı ÇÜRÜDÜ — TDV hazır bir kol/düğüm listesi VERMİYOR
```

⚠️ Aşağıda **ölçtüğüm** ile **çıkardığım** ayrı satırlarda. Karıştırma.

---

## ① ÖLÇTÜĞÜM — slug taraması (HTTP kodu, `CLAUDE.md §4` yöntemi)

**24 + 9 + 12 = 45 istek atıldı.**

### 🔴 ÖLÜ (302) — müstakil madde YOK
```
menzil · menzilhane · derbend · derbent · sol-kol · orta-kol · sag-kol ·
hac-yolu · yol · kaldirim · han · surre-alayi · baciyan ·
menzil--osmanlilar · menzilhane--osmanlilar · derbend--osmanlilar ·
derbendci · menzil-teskilati · ulak--osmanlilar · menzil--posta ·
menzil--askeri · sol-kol--osmanlilar
```

### 🟢 CANLI (200) ve içeriği DOĞRULANDI
```
menzil--osmanli      ← ASIL MADDE. Yusuf Halaçoğlu, 2004
surre                ← örnek kolun kaynağı (aşağıda)
ulak · berid · posta · tatar
kervan · kervansaray · han--kervansaray · ribat · ipek-yolu
```

### 🟡 SLUG TUZAĞI — bu turda **iki** yeni vaka
```
① menzil        302 · doğrusu `menzil--osmanli`
   ⇒ "TDV'de menzil maddesi yok" demek YANLIŞ olurdu. Arama sayfası buldurdu:
      https://islamansiklopedisi.org.tr/arama/?q=menzil

② konak         200 · başlık "KONAK" · ama madde
                "Türk sivil mimarisinde görülen büyük konut"
   ⇒ `ordu` · `saray` · `cin` · `nis` ailesinin YENİ üyesi. Kod 200, başlık
      doğru, madde YANLIŞ. Yol konağı için TDV'de müstakil madde YOK.

③ derbend--dagistan  200 · ama bu Dağıstan'daki ŞEHİR, `derbend` KURUMU değil
   ⇒ arama "derbend" sorgusuna yalnız bunu döndürdü.
```

### ⚠️ SİTE İÇİ ARAMANIN SINIRI — ölçüldü
```
sorgu "sol kol"     → 0 sonuç
sorgu "kervan yolu" → 0 sonuç
sorgu "menzilhane"  → 0 sonuç
sorgu "orta kol"    → halidiyye · kadiriyye · tarikat  (TASAVVUF kolu!)
```
⇒ TDV araması **başlık düzeyinde** çalışıyor, tam metin taramıyor. Ve
`kol` kelimesi tasavvufta da geçtiği için sorgu **kirli**.
📌 Sonuç: *"TDV'de yok"* hükmü **arama sayfasıyla verilemez**; gövde okunmalı.

---

## ② ÖLÇTÜĞÜM — `menzil--osmanli` maddesinin gövdesi

| soru | cevap |
|---|---|
| Üç kol var mı | **VAR** — *"Anadolu ve Rumeli yönlerinde üç ana kola ayrılırdı"* |
| Kollar ADLANDIRILIYOR mu | 🔴 **HAYIR** — sağ/orta/sol adları madde metninde **geçmiyor** |
| Güzergâh şehirleri var mı | 🔴 **HAYIR** — yalnız İstanbul · Anadolu · Rumeli · Viyana |
| Mesafe birimi | 🟢 **SAAT** — *"üç saatten yirmi sekiz saate kadar olan mesafelerde tesis edilmiştir"* |
| km / fersah / konak dönüşümü | **YOK** |
| Menzilhane SAYISI | **VERİLMİYOR** |
| Tarihler | 1539 kuruluş · 1691 · 1697 · 1777 · 1789 düzenleme · **1839 kaldırıldı** |

🔴 **Hipotezin kalbi burada yarım tuttu:** birim gerçekten km değil — ama
verilen birim **konak değil SAAT**, ve **aralık** olarak (3–28), tek tek
kenar olarak değil.

---

## ③ ÖLÇTÜĞÜM — ÖRNEK KOL (bitiş ölçütü ②)

**Kaynak: `surre` maddesi (TDV, 200, gövdesi okundu). 1837 surre alayı.**

```
DÜĞÜM (adıyla geçen, SIRAYLA)                                        12
  Sirkeci → Üsküdar → İzmit → Akşehir → Konya → Adana → Antakya →
  Hama → Şam → Maan → Medine → Mekke

KONAK (menzil) sayısı   gidiş  54        dönüş  59
SÜRE                    gidiş  58 gün    dönüş  32 gün
                        (58 günün 31'i Şam'da ramazan için DURMA)
Şam→Mekke penceresi     12-20 Şevval hareket · Zilkade sonundan önce varış
```

**ÖLÇTÜĞÜM:** 12 adlı düğüm · 54/59 konak · 58/32 gün.
**ÇIKARDIĞIM (ayrı satır, ölçüm değil):**
- Aynı yolun gidiş ve dönüşü **farklı sayıda konak** ve **farklı sürede**
  kat ediliyor ⇒ kenar **yönlü** ve **mevsimli** olabilir. Emre'nin
  *"engellenene daha az pay"* sezgisinin veri karşılığı bu olabilir.
  ⚠️ Bunu **ölçmedim** — 54↔59 farkının sebebi kaynakta yazmıyor.
- 12 adlı düğüme 54 konak düşüyor ⇒ TDV **iri düğümleri** veriyor, **her
  konağı** değil. Oran ~1:4,5.

---

## ④ ÖLÇTÜĞÜM — kol atfı ŞEHİR maddelerinde var mı (asıl sınav)

**12 şehir maddesi tarandı** (aksehir · ilgin · bolvadin · eskisehir ·
gerede · bolu · merzifon · amasya · sivas · malatya · diyarbakir · birecik),
gövdede `sağ kol|sol kol|orta kol|kol üzerinde` arandı:

```
İSABET  1 / 12   (%8,3)
  bolu   "Osmanlı yol sisteminin SOL KOLU üzerinde bulunması da Bolu'nun
          iktisadî hayatında önemli dere[ce]..."
```
Ayrıca `menzil` kelimesi için 10 şehir tarandı → **2 isabet**
(`sofya` menzil güzergâhı · `edirne` Menzilahırı semti — ikincisi **yol
değil MAHALLE ADI**, yani sahte isabet).

**ÖLÇTÜĞÜM:** kol atfı şehir maddelerinde **vardır ama seyrektir** — 1/12.
**ÇIKARDIĞIM:** ağ TDV'den **toplu** çıkmaz; şehir şehir taranarak
**örülmek** zorunda ve verim düşük. 2362 nokta × ~%8 ≈ 190 nokta için kol
bilgisi umulabilir — **bu bir kestirim, ölçüm değil** (örneklem 12 ve
Osmanlı çekirdeğinden seçilmiş, `CLAUDE.md §11` "örneklem dar" tuzağına
açık).

---

## ⑤ HÜKÜM — kapı açık mı?

```
TUTTU   olan  · Tarihî kaynak mesafeyi SAAT ve MENZİL SAYISI ile veriyor.
              · Bu birimler yükseklik verisinden BAĞIMSIZ ve zaten SÜRTÜNMEYİ
                içeriyor (dağ yolu az saat/km kat eder — birim bunu emiyor).
              ⇒ Ağırlık için yükseklik verisi ŞART DEĞİL.

ÇÜRÜDÜ  olan  · TDV hazır bir "kol → düğüm listesi" VERMİYOR.
              · Üç kol adlandırılmıyor · menzilhane listesi yok ·
                `sol-kol`/`orta-kol`/`sag-kol` maddeleri YOK.
              ⇒ Ağ TDV'den ÖRÜLÜR, ALINMAZ. Maliyeti düşük değil.
```

🔴 **Koordinatöre karar sorusu:** hipotez *"yükseklik verisini beklemeden
başlayabilir miyiz"* diye soruyordu. Cevabım: **evet, ama kaynak TDV
tek başına yetmez.** Osmanlı yol sisteminin kol kol güzergâhı
**Yusuf Halaçoğlu'nun `menzil--osmanli` maddesinin bibliyografyasında**
(18 kalem) duruyor olabilir — ama o kitaplar çevrimiçi değil.
⚠️ **Bunu ÖLÇMEDİM.** Bibliyografyanın 18 kalemini tek tek açmadım.

---

## ⑥ ÖLÇMEDİKLERİM — açıkça

```
· Osmanlı DIŞI coğrafya (Batı Avrupa %0) için alternatif kaynak — BAKMADIM.
  Brifing ölçmemi istiyordu; tur bütçesi yetmedi. Perşembeye ilk kalem.
· `menzil--osmanli` bibliyografyasındaki 18 kaynağın hiçbiri açılmadı.
· Rumeli kolları (sağ kol İstanbul-Selanik / orta kol Belgrad /
  sol kol Kili-Akkirman) hiç sınanmadı — yalnız Anadolu şehirleri tarandı.
· 54↔59 konak farkının sebebi.
· Şehir maddesi taramasının gerçek isabet oranı (örneklem 12, dar).
```

---

## ⑦ İŞ 2'nin `git grep` AYAĞI — LİSTE (tasarım YOK, brifing öyle diyor)

**Var olan alanlar, ölçülmüş sayılarla** (`data/yerlesimler.js` — 36 girdi
dosyasının YALNIZ BİRİ; tam sayım yapılmadı):

| alan | sayı | işe yarar mı |
|---|---|---|
| `k:` kademe | 949 → k0:282 · k1:4 · k2:58 · k3:159 · k4:291 | 🟢 **DÜĞÜM AĞIRLIĞI** olabilir |
| `m:` bağlı merkez | 458 | 🟢 **ZATEN BİR KENAR** — yerleşim→merkez bağı |
| `tur:` | 794 → sehir 366 · kale 245 · liman 140 · bolge 43 | 🟡 kısmen — `liman` deniz düğümü, `kale` geçit olabilir |
| `isg:` işgal | 23 | 🔴 alakasız |
| `kd:` zamanlı kademe | **0 — henüz kullanılmıyor** | 🟡 tasarlanmış, boş |

**`data/savaslar.js` — 41 sefer güzergâhı:**
```
yol:  62 kayıt · biçimi  yol:[[lon,lat],[lon,lat],...]
```
🔴 **BRİFİNGİN VARSAYIMI ÇÜRÜDÜ:** bunlar **kenar DEĞİL, POLİÇİZGİ.**
Ham koordinat dizisi — hangi yerleşimden hangisine gittiği yazmıyor,
düğüm kimliği taşımıyor. Kenar listesine çevrilebilir ama bu bir
**dönüştürme işi**, hazır kenar değil.
📌 `tur:` savaslar.js'te de var (232 kayıt) — ayrı bir eksen (deniz/çekilme).

**En büyük bulgu:** `m:` alanı **zaten bir ağdır** — 458 yerleşim bir
merkeze bağlı. Ama `CLAUDE.md Değişmez 3` onu **bozuk** ilan ediyor
(359 çelişkili çift, ve teşhis: *"`m:` yanlış eksende — siyasî bir şeyi
coğrafî gruplama için kullanıyor"*).
⇒ **Koridor ağı, `m:`nin doğru ekseni olabilir.** Bu bir **eğilim**,
karar değil — İŞ 3'te ölçülmeli.
