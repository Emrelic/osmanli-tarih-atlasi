# TRİYAJ — `bk[].ad` ↔ yerleşim adı eşleşmesi (③ adımı)

> Oturum **OPUS HAZIR KITA 106** · 2 Eylül 2026 · şartname tahta **M-2094 ②**
> 🔴 `devletler.js`e TEK BAYT yazılmadı. Bu bir **ön ayrım**dır, hüküm değil.

---

## 0. NİÇİN — koordinatörün "sessiz başarısızlık" uyarısı

Eşleşmeyen bir `bk[].ad` **yıldızı hiç çizmez ve hata da vermez.** O yüzden
`bk:` yazımından ÖNCE 63 eşleşmeyen ad ayıklanıyor. Üç kova, ve **çareleri
ters** olduğu için ayrı:
```
(a) YAZIM        atlasta VAR, adı farklı yazılmış   → `bk[].ad`ı ATLASIN adıyla yaz
(b) KAPSAM DIŞI  atlasta yok ve OLMAMALI            → `bk:` yazılmaz, gerekçe kaydedilir
(c) EKSİK NOKTA  atlasta olmalı ama yok             → AYRI LİSTE, nokta işi
```
📌 (b) bir **karar**, (c) bir **borç**. Tek kovada tutulursa borç karar sanılır.

---

## 1. 🔴 İLK DENEMEM ÇÜRÜDÜ — ve onu kendi çıktısı çürüttü

Salt **ad benzerliği** (normalleştirme + Levenshtein ≥ %80) ile ayırdım.
Sonuç listesi okununca dört eşleme **coğrafî olarak saçma** çıktı:
```
Sa'da (Yemen)        → Sayda (Lübnan)         0,89
Birgu (Malta)        → Birgi (Aydın)          0,80
Vlorë (Arnavutluk)   → Vellore (Hindistan)    0,83
Tiran (Arnavutluk)   → Tırgan (Traghan/Libya) 0,91
```
⇒ **Ad benzerliği tek başına bir eşleme ölçütü değildir.** Bu, projenin
*"bir reçete kendi testini geçmeli"* dersinin ad eksenidir: önerilen eşleme
**coğrafî sınavı da geçmeli.**

## 2. İKİNCİ DENEME — ad benzerliği + COĞRAFÎ SINAV

Aday yerleşimin konumu, künyenin `bolge` alanına ait kaba kutunun içinde mi?
```
(a) YAZIM (ikisi de geçti)   12
(b) KAPSAM DIŞI               3
(c) EKSİK NOKTA              42
🔴 ad geçti, coğrafya REDDETTİ  5   ← v1'in sessiz yanlış eşlemeleri
```

### (a) — ad VE coğrafya geçti
```
don-kazak         Çerkassk        → Çerkask (Razdory)        0,93
hanthawaddy       Peygu           → Pegu (Bago)              0,89
hive              Ürgenç          → Köhne Ürgenç (Gürgenç)   0,92  ⚠️ aşağıya bak
iskocya           Edinburgh       → Edinburg                 0,94
kanem-bornu       Ngazargamu      → Birni N'gazargamu        0,80
katalan           Thebai          → İstefe (Tebai)           0,91
rodos-sovalyeleri Birgu           → Birgi                    0,80  ⚠️ aşağıya bak
rusya             Sankt-Peterburg → St. Petersburg           0,85
song              Bianjing        → Tiencin (Tianjin)        0,80  🔴 YANLIŞ
song              Lin'an          → Jinan                    0,80  🔴 YANLIŞ
yunanistan        Nafplion        → Anabolu (Nauplion)       0,88
zeta              Cetine          → Cetinje                  0,92
```

## 3. 🔴 İKİNCİ SÜZGECİN DE İKİ KUSURU VAR — ölçtüm, gizlemiyorum

### ① YANLIŞ REDDETME (false negative) — 1 ölçülmüş vaka
```
akkoyunlu "Diyarbekir" ✗ Diyarbakır (0,90) — künye bölgesi "iran"
```
**Bu eşleme DOĞRUYDU ve süzgecim reddetti.** Sebep bende: `iran` kutumu
`43-63°D` yaptım, Diyarbakır ise `40,2°D` — yani kutu dar. Künyenin `bolge`
alanı siyasî bir etikettir, coğrafî bir sınır değil; Akkoyunlu'nun ilk
başkenti Diyarbekir'dir ve İran bölgesi etiketiyle çelişmez.
📌 Ve bu **tam olarak koridor ağında 4 kenarı koparan vakadır.** Yani hem
ad süzgeci hem coğrafya süzgeci onu ayrı ayrı yanlış sınıfladı.

### ② YETERSİZ AYIRT ETME — 2 ölçülmüş vaka
```
song "Bianjing" → Tiencin   ·   song "Lin'an" → Jinan
```
İkisi de coğrafî sınavı **geçiyor** (hepsi Çin'de) ama **yanlış**. Kutu
ölçeğinde bir sınav, aynı ülke içindeki iki şehri ayıramaz.

⇒ **HÜKÜM: iki süzgeç de gerekli, ikisi birlikte de YETERSİZ.**
Bu liste bir **kısaltılmış aday listesidir**, onaylanmış eşleme değil.
🔴 Ve bunu *"triyaj bitti"* diye sunmuyorum.

## 4. (b) KAPSAM DIŞI — 3 aday
```
abd                    Washington   kuzey-amerika
avustralya             Canberra     okyanusya
ingiliz-kuzey-amerika  Ottawa       kuzey-amerika
```
Bunlar atlasın konusu değil (`CLAUDE.md §1.6` kapsam disiplini) ⇒ `bk:`
yazılmaz, **ve niçin yazılmadığı bu satırdır.**

## 5. (c) EKSİK NOKTA — 42 aday, LİSTE AÇIK BİR BORÇTUR
Örnekler: `Iaşi` (Boğdan) · `Buda` · `Pozsony` (Macaristan-Habsburg) ·
`Smederevo` · `Skopje` · `Ras` (Sırp) · `Larende` (Karaman) · `Valletta`
(Rodos Şövalyeleri) · `Petrograd` · `Sibir` · `Almalık` · `Ömdürman` …
🔴 Bunların bir kısmı **atlasın kendi konusunun tam ortasında** (Boğdan'ın
başkenti Iaşi, Macaristan'ın Buda'sı, Sırp despotluğunun Smederevo'su).
⇒ Bu liste bir **nokta borcu**dur ve `bk:` yazımını bekletmemeli: o künyelerde
`bk:` **yazılabilir ama yıldız çizilmez** — ta ki nokta gelene kadar.
⚠️ Karar koordinatörün: (i) nokta gelene kadar `bk:` yazılmasın, ya da
(ii) yazılsın ve eksik nokta ayrı kuyrukta beklesin. **Ben seçmiyorum.**
