# ÇAKIŞMA TARAMASI — Bekleyen 5+ paket, iniş öncesi

> **Oturum:** KITA 2 — BEKLEYEN PAKETLER · 1.MURAT sevki, 12 Eylül 2026
> `data/` ve `arac/` bu görevde YAZILMADI — yalnız OKUNDU. `data/` commit'i
> 1.MURAT'ta (`§7`).

---

## ① PAKETLERİN VARLIĞI — HEPSİ VAR, artı BİR BONUS

```
🟢 PAKET-KUNYE-0911.json             VAR — 12 künye
🟢 PAKET-TARIH-DUZELTME-0911.json    VAR — 10 kayıt (7 değil, aşağıda §②)
🟢 PAKET-DALGA2-0911.json            VAR — 22 aday
🟢 PAKET-114-0911.json               VAR — 114 künye (ölçüm/gerekçe katmanı)
🟢 PAKET-T-0911.json                 VAR — AYNI 114 künye (KARAR katmanı)
🟢 PAKET-VERI-DUZELTME-A-0911.json   VAR — İran·Lehistan·Toskana
🟢 HAZIRLIK-LUBNAN-NOKTA-0911.json   VAR — 3 künye + 2-3 nokta
🟢 HAZIRLIK-BOSNA-NOKTA-0911.json    VAR — 5 nokta (benim kendi işim)
🟡 PAKET-PRENSLIK-PENCERE-0911.json  BONUS — sevkte ANILMADI, ama bulundu
```

🔴 **PAKET-114 ile PAKET-T AYRI PAKET DEĞİL, AYNI İŞİN İKİ EVRESİ** — ve
`PAKET-PRENSLIK-PENCERE` üçüncü (en erken) evre. Üçü de 114 künyenin AYNI
kimlik kümesini taşıyor (`abd`, `afganistan`, … birebir aynı sıra).
Zincir: **PRENSLIK-PENCERE (ham ölçüm, "yön 1/2/3" sınıflaması) →
PAKET-114 (tam gerekçeli döküm, hâlâ 114 kayıt) → PAKET-T (nihai karar
katmanı, yalnız GERÇEKTEN değişen 30 kayıtta `onerilen_t` dolu)**.
**İNECEK OLAN YALNIZ PAKET-T** — ötekiler onun REFERANSI/gerekçe kaydı.
Bunu doğrulamak için 114 kaydın TAMAMI karşılaştırıldı (aşağıda `②`).

---

## ② 🔴 ÇAKIŞMA TARAMASI — asıl iş

### ②.1 PAKET-114 ↔ PAKET-T — 114 kaydın TAMAMI karşılaştırıldı
```
114/114 id kümesi BİREBİR AYNI
"onerilen_t" alanı GERÇEKTEN FARKLI olan (ikisi de somut tarih VE
  birbirinden farklı): 0 kayıt  ← GERÇEK ÇATIŞMA YOK
görünürdeki 83 "fark" yalnız NOTASYON: PAKET-114 değişmeyenlere de
  "1923-10-29 (değişmez)" yazıyor, PAKET-T aynı durumu `null` ile
  işaretliyor — AYNI KARAR, İKİ YAZIM.
```
**SONUÇ: çatışma YOK, ikisi aynı kararın iki görünümü.**

### ②.2 PAKET-KUNYE'nin 12 künyesi ↔ mevcut `devletler.js` ↔ PAKET-T'nin 114 kimliği
```
12 yeni künye id'si → devletler.js'te AYNI id ZATEN VAR MI: HAYIR (0/12)
12 yeni künye id'si → PAKET-T'nin 114 listesiyle KESİŞİYOR MU: HAYIR (0/12)
```
**SONUÇ: çakışma YOK** — 12'si gerçekten YENİ, 114'lük liste yalnız
ZATEN VAR OLAN künyelerin `t:` alanını konu ediyor.

### ②.3 🔴🔴 PAKET-TARIH-DUZELTME'nin #10 KAYDI — YANLIŞ ÖNCÜL TAŞIYOR
`PAKET-TARIH-DUZELTME-0911.json` #10 kaydı: *"afgan-durrani (YENİ KAYIT
— henüz devletler.js'te YOK, staging'de)"* diyor.

**BU YANLIŞ.** Doğrulandı:
```bash
grep -c 'id:"afgan-durrani"' data/devletler.js   # -> 1, ZATEN VAR
```
Künye zaten `f:1747-10-01, t:1823-01-01` ile kayıtlı (bu oturumun daha
önceki bir görevinde — HİNDİSTAN KÜNYE II — okunmuştu). Önerilen
kronoloji tarihi (Zaman Şah'ın cülûsu, **1793-05-20**) bu pencerenin
İÇİNDE — yani madde **HİÇBİR ENGEL OLMADAN, künye "oluşturulmasını"
BEKLEMEDEN** hemen eklenebilir. `PAKET-DALGA2-0911.json`nin kendi #10
kaydı ("② AFGAN-DÜRRÂNÎ") bu yanlış varsayımı DEVRALMIŞ — o da
düzeltilmeli. **Bu bir veri çatışması DEĞİL, bir BELGE hatası** — ama
düzeltilmezse bir sonraki oturum "künye yok, bekleyelim" deyip maddeyi
gereksiz erteler (`D045`in tersi: "altyapı zaten VAR ama YOK sanıldı").

### ②.4 PAKET-VERI-DUZELTME-A ↔ ARAC-KUNYE-ONCESI-0911 (bu oturumun ÖNCEKİ işi) — ÇAPRAZ DOĞRULAMA
`KÜNYE ÖNCESİ` görevimde (`denetim/OLCUM-KUNYE-ONCESI-0911.json`) **`iran`
künyesi en büyük sapmayı (644,9 yıl) veriyordu**, örnek: *Tarki (Tarku)*.
`PAKET-VERI-DUZELTME-A` BAĞIMSIZ OLARAK aynı kümeyi (8 kayıt, `d:"iran"`)
taramış ve **AYNI 5 kaydı** (Tarki, Ağraham burnu, Derbend, Dihistan
ovası, Kızılarvat) *"hurmuz-sultanligi coğrafi olarak uygun değil, AYRI
kalem"* diye **bilerek DIŞARIDA BIRAKMIŞ.**
```
🟢 ÇAPRAZ DOĞRULAMA: iki bağımsız ölçüm AYNI 5 kaydı sorunlu buluyor.
🔴 AMA BU PAKETTE DÜZELTİLMİYOR — yalnız 3/8 (Hürmüz Adası, Kişm, Kiş)
   `iran`→`hurmuz-sultanligi` relabel ediliyor. Kalan 5 kayıt (Tarki
   dahil) İNİŞTEN SONRA DA açık kalacak — bu paket onu ÇÖZMÜYOR,
   yalnız SINIRLIYOR (D024: iki ayrı kusuru aynı çareyle karıştırmama
   disiplini, doğru uygulanmış).
```
⇒ Bu ÇATIŞMA değil, iki ayrı görevin AYNI SONUCA varması — kayıt
edilmeye değer çünkü **`iran` sapmasının kalan %62'si (5/8) bu iniş
turunda HÂLÂ çözülmeyecek**, bir sonraki tur için AÇIK.

### ②.5 Nokta paketleri (LÜBNAN, BOSNA) ↔ birbirleriyle ve mevcut veriyle
```
HAZIRLIK-LUBNAN-NOKTA: Deyrülkamer, Ba'lebek, Sûr/Tyre (Lübnan, ~33-34°K/35-36°D)
HAZIRLIK-BOSNA-NOKTA:  Kostajnica, Bosanski Novi, Bosanska Dubica,
                       Jasenovac, Bosanski Brod (Bosna, ~45°K/16-18°D)
```
**Coğrafi olarak AYRI bölgeler, isim çakışması YOK, koordinat çakışması
YOK** (>3.000 km ara). Tek bağımlılık: LÜBNAN noktaları `kid:lubnan-
emirligi` / `kid:harfusogullari` KULLANIYOR — bu kimlikler `PAKET-KUNYE`
inmeden YOKTUR (aşağıda `③`).

### ②.6 PAKET-DALGA2'nin diğer 21 adayı ↔ ötekiler
Tam tek tek karşılaştırma YAPILMADI (kapsam/süre) — yalnız `afgan-durrani`
kesişimi (②.3) ve `Hawaii 1887`/`tui-tonga-imparatorlugu` gibi Pasifik
kayıtları diğer 4 paketle COĞRAFİ OLARAK örtüşmüyor (İran/Lehistan/
Toskana/Lübnan/Bosna/Hindistan/Mısır/Sırbistan/Tunus'un hiçbiriyle aynı
bölge değil). **Düşük risk, ama TAM doğrulama BU GÖREVDE YAPILMADI**
(`D107`: ölçülemedi, bulunamadı değil).

### ②.7 GENEL SONUÇ
```
GERÇEK ÇATIŞMA (iki paket AYNI kayda FARKLI değer): 0
YANLIŞ ÖNCÜL (bir paket BAŞKA bir gerçeği yanlış varsaymış): 1 (②.3)
ÇAPRAZ DOĞRULAMA (iki bağımsız ölçüm AYNI sonuca varmış): 1 (②.4)
TAM DOĞRULANMAMIŞ (kapsam dışı bırakıldı): PAKET-DALGA2'nin 21/22 kaydı (②.6)
```

---

## ③ İNİŞ SIRASI ÖNERİSİ

```
1. PAKET-KUNYE-0911.json (12 künye)
   ⇒ TEMEL. Hiçbir şey buna bağımlı değil AMA §②.5'teki LÜBNAN noktaları
     BUNA bağımlı — önce inmeli.
2. HAZIRLIK-LUBNAN-NOKTA-0911.json + HAZIRLIK-BOSNA-NOKTA-0911.json
   (yeni yerleşim noktaları) — LÜBNAN, 1'e bağımlı; BOSNA bağımsız ama
   aynı "yeni nokta" sınıfında birlikte inmesi pratik.
3. PAKET-T-0911.json (114 künye, yalnız 27 net + 2 kabul edilebilir
   YYYY-01-01 — 3 "karar_gerekiyor" kaydı AYRI TUTULUR, aşağıda)
   PAKET-VERI-DUZELTME-A-0911.json (İran 3 relabel + Lehistan 9 split +
   Toskana 2 split — Toskana'nın 1 EKSİK kronoloji maddesiyle BİRLİKTE)
   PAKET-DALGA2-0911.json (22 madde — #10'un yanlış öncülü düzeltilerek)
   PAKET-TARIH-DUZELTME-0911.json (9/10 kayıt — #7 ve #9 AYRI TUTULUR)
   ⇒ Bu dördü BİRBİRİNDEN VE 1-2'DEN BAĞIMSIZ, sıraları ÖNEMSİZ.
4. AÇIK KARAR BEKLEYENLER (bu turda İNMEZ, Emre/1.MURAT kararı gerekir):
   - PAKET-T: kacar (1925-12-15 mi başka mı) · mogolistan (1924-11-26) ·
     suud-ucuncu (künyenin ad: alanına bakılmalı)
   - PAKET-TARIH-DUZELTME #7: İbrahim'in hal/katil tarihi (iki seçenek)
   - PAKET-TARIH-DUZELTME #9: Patrona Halil gun: alanı (iki seçenek)
```

---

## ④ D022 ÖNGÖRÜ — denetle.py'nin dört sayısı, İNMEDEN ÖNCE yazıldı

```
                          ŞU AN    TAHMİN SONRASI    GEREKÇE
sahipsiz (Değişmez 1)      314        314            hiçbir paket "sahipsiz"
                                                      bölgeye yeni nokta KOYMUYOR
                                                      (Lübnan/Bosna zaten en-yakına
                                                      emiliyordu, sahipsiz değildi)
belgesiz (Değişmez 1c)       4          4            değişiklik beklemiyorum
enklav (Değişmez 7)        650        650            yeni noktalar mevcut gövdeye
                                                      bitişik ekleniyor, YENİ enklav
                                                      YARATMIYOR (coğrafi olarak
                                                      komşu, izole değil)
aşan (Değişmez 4c)         132     132 ya da AZALIR   PAKET-T bazı künye t:'lerini
                                                      İLERİYE çekiyor (1923→1947 vb)
                                                      — bu yalnız "aşım" alanını
                                                      GENİŞLETİR, YENİ aşım YARATMAZ
Değişmez 2 (kırılma-madde)   0 açık   0 açık, VARSA 1
                                      YENİ AÇIK        Karlofça (1699) + Lübnan/Bosna
                                                      1699 kırılmaları için madde
                                                      VAR SAYIYORUM (doğrulanmadı,
                                                      D107) — ⚠️ Toskana'nın 1532
                                                      kırılması için "madde ADAYI
                                                      HAZIRLANDI" deniyor, HENÜZ
                                                      TEYİT EDİLMEDİ; birlikte
                                                      inmezse 1 AÇIK doğar
```
🔴 **TEK GERÇEK RİSK: Toskana'nın 1532-01-01 kırılması.** `PAKET-VERI-
DUZELTME-A` kendi metninde *"1 yeni madde gerekli"* diyor ama bu maddenin
KENDİSİ pakette YOK, yalnız "adayı hazırlandı" diyor. **Bu madde
paketle BİRLİKTE hazır değilse, split inince Değişmez 2 anlık olarak
1 AÇIK verir.** İnişten önce bu maddenin metni istenmeli.

---

## ⑤ ÖLÇMEDİKLERİM

```
① PAKET-DALGA2'nin 21/22 kaydı tek tek öteki paketlerle karşılaştırılmadı
② HAZIRLIK-LUBNAN/BOSNA noktalarının GERÇEKTEN mükerrer olmadığı bu
   görevde YENİDEN sınanmadı — her paketin KENDİ D010/mükerrer testine
   güvenildi (ikisi de kendi içinde bu testi yapmış görünüyor)
③ Değişmez 2/2s'nin GERÇEK sayısal etkisi KOŞULMADAN kesin bilinemez —
   yukarıdaki tahmin `D022` niteliğinde, ölçüm değil
④ Toskana'nın eksik maddesinin METNİ bu görevde ARANMADI/YAZILMADI —
   yalnız eksikliği TESPİT edildi
```
