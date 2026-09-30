# KRONO-BAGLAMA-0929 — rapor

## 0. Öngörü (ölçmeden ÖNCE yazıldı, 29 Eylül 2026)

Evren: canlı `index.html`in yüklediği globaller (paket_*.js), `app.js` iki IIFE.

- **Ö1 — 222 ezilen maddenin kaçı dosyadaki bir maddenin mükerreri?**
  Aynı `t` gününde dosyada bir madde bulunan: **~120 / 222 (%55)**.
  Bunlardan `t`+`b` TAM DİZGİ eşit olan (mevcut dedupe'un yakalayacağı): **~20 (%10)**.
  Gerekçe: dosyalar künye kronolojisinin "derinleştirilmiş" hâli olarak yazıldı;
  aynı olay, farklı başlıkla.
- **Ö2 — 2.092 maddenin kaçına künye atfı OTOMATİK yapılabilir?**
  **~1.050 (%50)** — `devlet:` alanı taşıyan 723 + başlıkta/etikette künye adı geçen ~330.

### Öngörü tuttu mu
| | öngörü | ölçülen | |
|---|---|---|---|
| Ö1 aynı `t` | ~120 | **144** (+14 aynı olay farklı gün) | yakın |
| Ö1 tam `t`+`b` | ~20 | **1** | TUTMADI |
| Ö2 otomatik atıf | ~1.050 (%50) | **1.593 (%76)** | TUTMADI (iyi yönde) |
| Ö2'nin dayanağı "723 `devlet:`" | 723 | **0** | TUTMADI |

Niçin tutmadı: (1) dosyalar künye maddesini "derinleştirirken" başlığı HER SEFERİNDE
yeniden yazmış — tam dizgi eşitliği neredeyse hiç yok. (2) "723 `devlet:` alanı"
sayısı yanlıştı; 15 dosyada `devlet/devletler/taraflar` 0/2.084. Atfı taşıyan
izler başka yerdeydi: `kunye:[…]` (50), `d:"[Dönem] …"` öneki (355), `etiket` (72),
ve en büyüğü `kaynak:` alanındaki TDV maddesinin adı (bir hanedan/devlet maddesiyse).

## 1. ① KAPI — `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.py` (+ `.js`)

`app.js`in iki IIFE'si (`var KRONOLOJI_ID_OZEL` → `(function odakKur()` arası) kaynaktan
KESİLİR, node `vm` bağlamında `index.html`in `app.js`ten ÖNCE yüklediği `data/` betikleriyle
KOŞAR. Sonuç DAVRANIŞTAN okunur (dizi koşudan sonra bir künyenin `.kronoloji`si mi oldu;
dolu künye dizisi değişti mi). `--kaynak` paketleri `paket_kunye.json` ile kaynağa açar.
Çıkış 0 temiz · 1 ihlal · 2 ölçülemedi.

Ölçüm (yayın = kaynak): **EŞLENMEYEN 15 dosya / 2.084 madde · EZİLEN 27 künye / 222 madde**
— canlı konsolla birebir (balkan 177; koordinatörün 186'sı paket ve kaynakta 177).

İki yönde sınav (hepsi geçti):
| sınav | beklenen | sonuç |
|---|---|---|
| sahte `KRONOLOJI_YOKBOYLE_SINAV` ekle | 16 dosya, adıyla, çıkış 1 | ✓ |
| 15 eşlenmeyeni sil + 27 künyeyi boşalt | 0/0, çıkış 0 | ✓ |
| temiz evrene sahte dosya | yalnız o, çıkış 1 | ✓ |
| temiz evrende `bizans` künyesine 1 madde | `EZİLEN bizans 1→97`, çıkış 1 | ✓ |

## 2. ② EZME RİSKİ — `denetim/ARAC-KRONO-BAGLAMA-0929-EZME.py`

222 ezilen künye maddesi, dosyadaki maddelerle:
| sınıf | sayı | anlamı |
|---|---|---|
| aynı `t` + aynı `b` | 1 | bugünkü dedupe yakalar |
| aynı `t`, başlık benzer (≥ .6) | 73 | mükerrer |
| aynı `t`, başlık farklı | 70 | örneklem 6/6 YİNE AYNI OLAY (Mohaç, Viyana 1683, Pasarofça, Belgrad 1739, 1918) |
| farklı gün, aynı yıl, benzer | 14 | aynı olay iki gün — TARİH ÇELİŞKİSİ (Kandiye 1669-09-27/09-06, İznik 1331-03-02/03-01) |
| dosyada karşılığı yok | 64 | birleştirme KURTARIR — bugünkü gerçek kayıp |

Seçenekler (hüküm koordinatörde):
- **(a)** birleştir + "aynı künye + aynı `t` ⇒ aynı olay": 64 kurtulur, 14 çift-gün kalır.
  `b`-benzerlik eşiğiyle (.6) yapılırsa 70 mükerrer daha kalır ⇒ eşik YETMEZ.
- **(b)** birleştir, hepsini ekle, işaretle: 157 mükerrer ekranda.
- **(c)** 64 (+14) maddeyi dosyalara TAŞI, künye alanını boşalt: tek kaynak, `app.js`e
  dokunmadan EZİLEN 0; ama `devletler.js` (KUNYE-DUNYA'da) + 27 dosya yazılır.
- **(d)** `cokTarafliKronolojiEkle`de: künyenin ÖZGÜN maddesiyle aynı `t` ⇒ dosya maddesi
  onun YERİNE geçer. (a) ile aynı kural; ③'teki COK yolunu da kapatır (aşağıda 47+ çift).

## 3. ③ 15 EŞLENMEYEN DOSYA — `denetim/ARAC-KRONO-BAGLAMA-0929-UYGULA.py`

Mekanizma: dosya ADI aynı kalır, `window.KRONOLOJI_X = [` → `window.KRONOLOJI_COK_X = [`
(count==1) + kesin atıflı maddenin açılışına `devlet:`/`devletler:`. `index.html` değişmez,
yalnız `paketle.py yenile`. Madde başlangıç satırları node'un ayrıştırdığı sırayla
`t`+`b` birebir eşleşmezse DOSYA YAZILMAZ (15/15 eşleşti).

Atıf sınıfları (öncelik) ve 🔴 her birinde pencere sınavı (M-5416 kural 1-2: olay günü
künyenin [f,t) penceresinde olmalı; ardıl künyeye geriye bağlama yok; tam geçiş günü ⇒ iki
künye; çakışan pencere ⇒ belirsiz):

| sınıf | kaynağı | madde |
|---|---|---|
| KAYNAK | `kaynak:` TDV maddesi bir hanedan/devlet/hükümdar maddesi (yer maddeleri ALINMADI) | 750 |
| ONEK | yazarın `d:"[Dönem]"` öneki (japonya, guney_asya, hindistan) | 335 |
| ZINCIR | tek ülkeli dosyada ardışık künye zinciri (cin, misir, sirbistan; japonya yedeği) | 251 |
| YER | yalnız italya_sehir: `yer_id` dosyanın kendi şehir devleti (Cenova/Ferrara/Modena/Siena) | 139 |
| ETIKET | `etiket` içinde künye id'si (ozbek) | 72 |
| KUNYE | yazarın `kunye:[…]` alanı | 46 |
| **kesin toplam** | | **1.593 (%76)** |
| BELIRSIZ | dokunulmaz, sayıldı | **491 (%24)** |

Dosya başına ve madde madde atıf: `denetim/KRONO-BAGLAMA-0929.json`.

Örneklem denetimi (rastgele 36 madde): 34 doğru; 2 yanlış — `yer_id:"Napoli"` taşıyan iki
Ponza savaşı (1435, 1552) Ceneviz filosunun işi ⇒ YER sözlüğü dosyanın kendi şehir
devletlerine daraltıldı (Napoli/Venedik çıkarıldı).

### Yazarın atfı pencereye sığmayan 6 madde (künye `f`/`t` sorusu — hüküm koordinatörde)
- japonya 1600-10-21 Sekigahara: önek "Edo", `edo-bakufu` 1603'te başlıyor ⇒ ZINCIR `azuchi-momoyama` verdi (kural 2'ye uygun)
- guney_asya 1843-03-24 Dubba · 1853 Sindî yazısı: `sind` 1843-02-17'de bitiyor (Miani) ⇒ belirsiz
- hindistan 1539-06-26 Çausa: `sur-hanedani` 1540-05-17'de başlıyor
- hindistan 1573-08-20 Gucerât ilhakı: `gucerat-sultanligi` 1573-01-01'de bitiyor — künye günü kaba
- hindistan 1799-07-07 Lahor: `sih-imparatorlugu` 1801-04-12'de başlıyor (yazarın `kunye:` alanı da aynı)

### BELİRSİZ 491 — neden dağılımı
- **künyesi olmayan yapı** (M-5416 kural 3 adayları): habes-eyaleti 29 · yemen 25 (Osmanlı Yemen'i / Zeydî ayrımı) · uganda 21 · kalmuklar 17 · inculular 14 · kasgar 10 · kirgizlar 8 · luristan 7 · lahsa 5
- **yer/kişi/eser maddesi kaynak** (atıf vermez): mombasa 16 · zeyla 13 · masavva 10 · kilve 9 · berbera 6 · hasankeyf 6 · kahramanmaras 6 · mardin 5 · elbistan 5 · harput 4 · bimaristan 5 · Mevlânâ/Konevî/Bahâeddin Veled 8 · balkan olay/yer 16 …
- **çakışan pencere / zincir dışı**: orta_asya 27 · dogu_afrika 20 · iran_ardillari 11 · balkan 9 · hindistan 8 · kuzeyafrika 6 · cin 5 · italya_sehir 4 · …
- **hiç iz yok**: italya_sehir 43 · anadolu 36 · balkan 34 · orta_asya 10 · …

### COK yolunda da mükerrer — ② ile aynı sınıf
Hedef künyelerin KENDİ kronolojisinde aynı `t`de madde: 15 dosyada **212 çift** (4 kolay dosyada
47; örneklenen 10/10 aynı olay — Sekigahara, Meiji Restorasyonu, Honnō-ji). Bugünkü `t`+`b`
dedupe bunları geçirir. ② (a)/(d) kararı bunu da kapsar.
