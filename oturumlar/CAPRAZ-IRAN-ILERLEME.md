# ÇAPRAZ İRAN — ilerleme kaydı

> Oturum açılışı: 6 Ağustos 2026 · model Opus · rol ÇAPRAZ
> Görev tanımı: `oturumlar/CAPRAZ-IRAN-GOREV.md`
> Yazma yetkim: **yalnız bu dosya.** `data/` · `arac/` · `js/` · kök `*.md` bende değil.

---

## Açılış

Okunanlar: `CAPRAZ-IRAN-GOREV.md` · `CLAUDE.md` (baştan sona) ·
`oturumlar/CAPRAZ-GOREV.md` · `git log --oneline -8` (HEAD `47f8f97`).
Koordinatöre açılış haberi verildi.

---

## TESLİM 1 — B10 ölçümü: devraldığım üç sayıyı kendim saydım

**Ölçüm tabanı:** `arac/girdi.py` `GIRDI_DOSYALARI` — **16 dosya, 1713 nokta.**
Yükleyici olarak `girdi.yukle()`in kendisi kullanıldı (ayrı ayrıştırıcı yazmadım;
`CAPRAZ-GOREV.md §1`'in *"iki ayrıştırıcı aynı dosyada aynı sonucu verse bile biri
eksik dosya kümesi okuyorsa sayı yanlıştır"* dersi bunu gerektiriyor).

⚠️ `CLAUDE.md §5` hâlâ *"CANLI toplam 951 nokta, iki dosya"* diyor — **bayat.**
Canlı taban bugün 16 dosya / 1713 nokta ve `yerlesimler_asya.js` de içinde.
(Kök `*.md` bende değil; koordinatöre bildirildi.)

| brifingdeki | benim ölçümüm | hüküm |
|---|---|---|
| İran kutusu (lon 44-63 · lat 25-40) **149** nokta | **149** | ✓ tutuyor |
| 1510-06-15'te **33** `iran` noktası | **30** | 🔴 ölçüt farkı |
| `iran` **244** pencere, **1281→1779** | **277** pencere, **1281→1860** | 🔴 iki hata |

### 33 → 30 — `kur:`/`bit:` süzgeci

Brifing noktaların **var olup olmadığına** bakmamış. Süzgeci kaldırınca
brifingin bütün kesit sayılarını **birebir** yeniden ürettim:

```
süzgeçsiz  1510-06-15  safevi 101 · iran 33 · SAHIPSIZ 8 · cebri 4 · nebhani 2   ← brifing
süzgeçli   1510-06-15  safevi  94 · iran 30 · SAHIPSIZ 5 · cebri 4 · nebhani 2   ← doğrusu
```

⇒ Aritmetik doğru, **süzgeç yok.** 1510'da elenen üç `iran` noktası:

| nokta | sebep |
|---|---|
| Zerenc (Sîstan) | `bit:1383-01-01` — 1510'da **zaten ölü** |
| Tûs | `bit:1389-01-01` — 1510'da **zaten ölü** |
| Ferahâbâd | `kur:1611-01-01` — 1510'da **daha kurulmamış** |

📌 Üçü de 1510'da haritayı **hiç boyamıyor** (`kur:` peteği komşuya devrediyor —
`VERI-YAPISI` alan sözlüğü). Benek şikâyetinin sebebi olamazlar. **Gerçek iş 30.**

### 244 → 277 — kapsam adı yanlış yazılmış

`244` sayısı **kutu içi** ölçüm; brifing onu *"`iran` etiketi 244 pencerede
kullanılıyor"* diye **bütün taban** gibi sunuyor.

```
bütün canlı taban (16 dosya)   277 pencere / 133 nokta
yalnız kutu içi                244 pencere          ← brifingin sayısı
yalnız yerlesimler.js          268 pencere
en erken f: 1281-01-01   en geç t: 1860-01-01       ← brifing "1779" diyor
```

📌 `CAPRAZ-GOREV.md §1`'in kayıtlı hatasının **aynısı** (`fransa 178/149 → 99/98`,
`iran 326 → 317`): bir sayı ölçüldüğü kapsamdan koparılıp başka kapsamın sayısı
gibi aktarılıyor. Bu sefer yön ters — merge dışı dosya değil, **kutu daralması.**

---

## TESLİM 1b — brifingin sormadığı yer: 20 çift, biri %44

`iran`ın 277 penceresi yalnız **20 ayrık `(f,t)` çifti** kullanıyor.
⇒ İş 277 karar değil, **20 karar.** Dağılım:

```
1747-06-20 → 1796-01-01    123 nokta   %44   ← tek çift
1335-12-01 → 1393-01-01     28
1335-12-01 → 1386-01-01     21
1335-12-01 → 1381-01-01     19
1507-05-24 → 1510-12-02     19          ← 1510 beneklerinin ÇEKİRDEĞİ
1281-01-01 → 1501-07-01     16
1335-12-01 → 1387-11-01     13
1281-01-01 → 1508-01-01      8
1738-01-01 → 1747-06-20      5
1335-12-01 → 1596-01-01      5
1281-01-01 → 1510-12-02      5
1281-01-01 → 1503-01-01      4
1335-12-01 → 1538-01-01      3
1281-01-01 → 1592-01-01      2
1335-12-01 → 1411-01-01 · 1335-12-01 → 1510-12-02 · 1709-04-21 → 1747-06-20
1736-03-08 → 1785-01-01 · 1736-03-08 → 1860-01-01 · 1776-04-16 → 1779-04-01   (1'er)
```

### 🔴 %44'lük kütle KUSUR DEĞİL — kayıtlı bir karar

`arac/renkler.py` satır 157-176 (RENK oturumu, 3 Ağustos 2026):

> ```
> 1736-03-08 → 1747-06-20   `afsar`   (Nadir Şah, tartışmasız)
> 1747-06-20 → 1796-01-01   `iran`    (İran PARÇALI — genel etiket burada
>                                       MEŞRU; Horasan afsar, Şiraz zend,
>                                       Tahran kacar aynı gün)
> 1796-01-01 → dönem sonu   `kacar`
> ```
> *"🔴 `zend` YAZILMADI ve sebebi ÖLÇÜLDÜ, unutulduğu için değil: ① Şimdilik
> GEREKMİYOR — pencere 2 `iran` kalıyor. ② YER DE YOK: bu kutuda beşinci aile
> üyesi için uygun aday SIFIR."*

Doğruladım:

| | durum |
|---|---|
| `zend` künyesi | **VAR** — `data/devletler.js:1490`, 1751-1794, başkent Şiraz |
| `zend` rengi | **YOK** — `renkler.py`'de kayıt yok |
| `zend` yerleşim kullanımı | **0 pencere** |
| `afsar` | 128 pencere ✓ · renk `#f488fc` ✓ |
| `kacar` | 123 pencere ✓ · renk `#c840a8` ✓ |

⇒ **Brifing bu kaydı görmemiş** ve beni 277'nin %44'ünü "hata" sanarak aramaya
gönderiyordu. `CLAUDE.md §2`'nin *"ilk sorulacak soru"* mantığının belge tarafı:
bir etiket tuhaf görünüyorsa **önce o etiketin kayıtlı gerekçesi var mı** diye bak.

🟡 **AÇIK KALAN:** aynı yorum *"Pencere 2'nin TDV araştırması bitince kutu YENİDEN
ÖLÇÜLMELİ; gerekirse aile ikiye bölünür (safevi+afsar · iran+kacar+zend)"* diyor.
O araştırmanın **sahibi yazılı değil.** Koordinatöre soruldu.

---

## Soru ① — `iran` etiketi NE DEMEK? (ön hüküm, ölçümle)

Brifing üç şık veriyor: *devlet / coğrafya / dolgu*. **Üçü de tek başına yanlış** —
ölçüm `iran`ın **en az üç ayrı işte** kullanıldığını gösteriyor ve **her birinin
ilacı ayrı:**

| kullanım | pencere | ne olduğu | ilaç |
|---|---|---|---|
| **A · İlhanlı sonrası dolgu** | `1335-12-01 → 1381…1411` (82 nokta) | İlhanlı 1335'te bitti, halefi yazılmamış — **"kim olduğunu bilmiyoruz" dolgusu** | Celâyirli/Muzafferî/Kert/Serbedârî ayrımı |
| **B · Şeybânî işgali** | `1507-05-24 → 1510-12-02` (19 nokta) | Tarihi ele veriyor (aşağıda) — **yanlış etiket** | `buhara`/Şeybânî |
| **C · parçalılık şemsiyesi** | `1747-06-20 → 1796-01-01` (123 nokta) | **KASTEN, kayıtlı gerekçeyle meşru** | dokunulmaz (renk kutusu yeniden ölçülene dek) |

⚠️ Bu tabloyu **hüküm değil ön hüküm** sayıyorum: A ve B kaynaklandırılmadı.
C kaynaklı (renkler.py kaydı).

---

## Sıradaki iş — 19 noktalık Şeybânî kümesi

1510'daki 30 noktanın **19'u** tek pencerede: `1507-05-24 → 1510-12-02`.
Tarihlerin ikisi de adlandırılmış olaya oturuyor (`CAPRAZ-GOREV §3.2`:
**ad tarihi kilitler**):

```
1507         Şeybânî Han Herat'ı aldı — Timurlu Horasan'ın sonu
1510-12-02   MERV SAVAŞI — Şah İsmail, Şeybânî Han'ı öldürdü
```

⇒ Bu pencere **Horasan'ın Özbek/Şeybânî işgali.** Etiketi `iran` olmamalı.

19 nokta: Nesâ · Ebîverd · Merv · Bocnûrd · Kûçân · Esferâyin · Kelât-ı Nâdirî ·
Serahs · Sebzevâr · Nîşâbur · Turbet-i Haydariye · Turbet-i Câm · Turşiz · Kâin ·
Bîrcend · Kızılarvat · Dihistan ovası · (+2)

📌 Brifingin *"Özbek/Şeybânî çekişmesi olabilir"* hipotezi ölçümle **uyuşuyor** —
ama hipotez hâlâ hipotez, TDV'ye bakılmadı. **Sıradaki adım o.**
🟢 Renk engeli çıkmayabilir: `buhara` zaten 9 pencereyle kullanımda.
⚠️ `§3.5.1` gereği **İKİ UÇ** ölçülecek: 19'u Şeybânî'ye çevirmek Şeybânî'yi
olmadığı yerde büyütüyor mu?

---

## Sistem kaydı — koordinatöre bildirilenler

1. `CLAUDE.md §5` canlı taban satırı bayat (951/2 dosya → gerçekte 1713/16 dosya).
2. `BEKLEYENLER.md` **2 Ağustos tarihli, dört gün bayat.** Kullanıcının sorusu
   üzerine ölçüldü: ek oturum açma **ölçütü** yazılı (`ORGANIZASYON §1`) ve
   **talep biçimi** yazılı (`§17` dört alan), ama kuralın **ne sıklıkta
   işletileceği** yazılı değil — tetik yok.
