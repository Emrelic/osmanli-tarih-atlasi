# İTTİFAK GÖSTERİMİ — ölçüm, tasarım, maliyet

**Oturum:** ORTA ASYA KRONOLOJİ (OPUS HAZIR KITA 52) · **Görev:** M-1189
**Tarih:** 24 Ağustos 2026 · **Kapsam:** ölçüm + tasarım. **KOD YAZILMADI, VERİYE/MOTORA DOKUNULMADI.**

> Emre'nin tasarımı: *"ittifak mensuplarını ittifak yapmış şekilde gösteren bir
> gösterim… birer ROZET… bu rozetleri birbirine bir gösterim ile bağlayalım…
> bir ELEKTRİKLENME birbirine gidip gelen bir IŞILTI animasyonu"* ·
> *"ittifak kuran devletler AYNI ROZETİ paylaşıp bu rozetlerden çıkan doğrular
> ile birbirine bağlanabilir"* ·
> 🔴 *"ama KİME KARŞI İTTİFAK YAPILDI İSE O ÜLKENİN TOPRAKLARI ÜZERİNDEN
> GEÇMEMELİ bu bağlantı ipleri… gerekirse ETRAFINDAN DOLANMALIDIR"* ·
> *"doğru yerine İP veya YAY terimini tercih ettim"*

---

## 0. ÖNCE: ŞİKÂYET HÂLÂ GEÇERLİ Mİ

`git log --oneline -30` koşuldu (24 Ağu). 0029 paketinin tek düzeltme commit'i
`4163ebe` (oto-odak/zoom — H-0005 · H-0001c · H-0006). **İttifak gösterimine
dokunan commit YOK.**

`grep -ic "ittifak" js/app.js` → **1**, ve o da bir çizim değil: `app.js:3438`
duygu/etiket glif sözlüğünde `"🤝": "ittifak / anlaşma"`.
⇒ **İstek geçerli** — ve 🤝 glifi rozet için hazır bir aday (§4.1).

---

## ① ALTYAPI ZATEN VAR MI? — 🟢 ÜÇTE İKİSİ VAR

Koordinatörün uyarısı yerinde çıktı: **istenen şeyin altyapısının çoğu zaten var.**

| İhtiyaç | Durum | Nerede |
|---|---|---|
| **Rozet (badge)** | 🟢 **VAR, hem de adıyla** | `js/app.js:2525` — `rz.className = "sefer-rozet rozet-" + s.sonuc`. Projede "rozet" ZATEN bir CSS kavramı: `css/style.css`te `.dss-rozet` (423), `.ek-rozet` (442) ve fetih tarihi rozeti (860) da var. Ayrıca `savas-isaret` (2178), `devlet-etiket` (462), `bolge-etiket` (535), `bosluk-kutu` (1119) — beş ayrı işaretçi deseni. |
| **İttifak glifi** | 🟢 **VAR** | `app.js:3438` — `"🤝": "ittifak / anlaşma"`. Rozet simgesi icat etmeye gerek yok. |
| **Nokta bağlayan çizgi ağı** | 🟢 **VAR ve çiziliyor** | `koridorKur()` (`app.js:2730`) · `koridor-dugum` + `koridor-kenar` kaynakları · 65 düğüm / 64 kenar. Düğüm-kenar çizmek çözülmüş bir iş. |
| **Tür başına ayrı çizgi katmanı + dinamik lejant** | 🟢 **VAR** | `HAREKET` (app.js:2455): 9 tür · her biri kendi `line-dasharray` + `kalinlik` + glif. `line-dasharray` veriyle sürülemediği için tür başına katman açma deseni **zaten kurulmuş.** |
| **Rozetin çapası (devletin konumu)** | 🟢 **VAR — ve dönem dönem hesaplanmış** | `data/devletler_harita.js` → `DEVLET_HARITA[].dnm[].c` = **çizili gövdenin merkezi.** ⚠️ **2630 dönem kaydının 2630'unda da dolu (%100).** Yeni veri üretmeye gerek YOK. |
| **İttifak ÜYELİĞİ (kim kiminle)** | 🔴 **YOK** | Bkz. §② |
| **Işıltı/elektriklenme animasyonu** | 🔴 YOK | MapLibre `line-dasharray` animasyonu ya da CSS. Emsal: `savas-isaret` yanıp sönüyor. |

📌 Ve `app.js:2610-2612`de bu projenin kendi dersi yazılı:
> *"`koridor.js` index.html'de **YILLARDIR bağlıydı ve HİÇ çizilmiyordu**"*
⇒ Altyapının var olması, bağlı olması demek değil. Aşağıdaki tasarım **var olanı
bağlamaya** dayanıyor, yeni altyapı icat etmeye değil.

---

## ② VERİ VAR MI? — 🟡 YARISI VAR. KRİTİK PARÇA EKSİK.

### Ölçüm (node ile, `data/savaslar.js` yüklenerek)

```
SERILER 16 · SAVASLAR 171 · ANTLASMALAR 41 · SEFERLER 61

taraf: alanı        SAVASLAR   171/171  (%100)   DİZİ
                    ANTLASMALAR 41/41   (%100)   DİZİ
                    SEFERLER    14/61            🔴 STRING ("dusman")
taraf_metin         172 + 41 kayıtta var; içinde "ittifak" geçen: 9
                       "Kutsal İttifak" 7 · "Balkan ittifakı" 2
kronoloji (6064 madde)  etiket:"ittifak" 162 · tur:"ittifak" 62 · metinde 182
```

**Kutsal İttifak kayıtları — `taraf:` dizileri tam hâliyle:**
```
1571-10-07  İnebahtı        [osmanli, ispanya, venedik, papalik, cenova, rodos-sovalyeleri]
1683-10-09  Parkan          [osmanli, habsburg, lehistan]
1687-08-12  İkinci Mohaç    [osmanli, habsburg]
1691-08-19  Salankamen      [osmanli, habsburg]
1695-09-22  Lugoş           [osmanli, habsburg]
1696-08-27  Ulaş            [osmanli, habsburg]
1699-01-26  KARLOFÇA        [osmanli, habsburg, lehistan, venedik, rusya]   ← Emre'nin örneği
```

### 🟢 BULGU 1 — `osmanli` HER ZAMAN İLK SIRADA
```
taraf: dizisinde osmanli İÇEREN kayıt : 203
                 osmanli İLK SIRADA   : 203   (%100)
                 osmanli içermeyen    :   9
```
**ÖLÇÜM:** dizideki sıra tesadüfî değil, %100 tutarlı bir sözleşme.
**HÜKÜM (ayrı satır):** `taraf[0]` "bu olayın Osmanlı tarafı", `taraf.slice(1)`
"karşı/öteki taraflar" diye **makineye sorulabilir.** Bu, üyeliği türetmek için
kullanılabilecek TEK yapısal ipucudur.

### 🔴 BULGU 2 — AMA `taraf:` "İTTİFAK" DEĞİL "OLAYIN TARAFLARI" DEMEK
`1833-07-08 Hünkâr İskelesi  taraf:[osmanli, rusya]` — bu bir **savunma
ittifakı**, düşmanlık değil. Yani aynı alan bir kayıtta "düşmanlar", ötekinde
"müttefikler" anlamına geliyor.
**HÜKÜM:** `taraf:`ten "kim kiminle müttefik" **güvenilir biçimde türetilemez.**
Karlofça'nın dizisinden `slice(1)` almak dört üyeyi doğru verir — ama bu
**kaydın Osmanlı'ya KARŞI bir ittifak olduğunu bildiğimiz için** doğrudur,
veriden okunduğu için değil. Bu bir varsayımdır ve 41 antlaşmanın hepsinde
geçerli değildir.

### 🔴 BULGU 3 — İTTİFAK BİR **VARLIK** DEĞİL, BİR **SIFAT**
`taraf_metin:"Kutsal İttifak"` bir **serbest metindir**. `CLAUDE.md §11 ⑪`:
*"bu bilgiyi bir `if` ile sorabiliyor muyum? Sorulamıyorsa kayıt vardır,
VERİ YOKTUR."*
```
"Kutsal İttifak hangi tarihte kuruldu, ne zaman bitti?"        → SORULAMAZ
"Üyeleri kimlerdi?"                                            → SORULAMAZ
"1690'da sahnede olan ittifaklar hangileri?"                   → SORULAMAZ
"1571 Kutsal İttifakı ile 1684 Kutsal İttifakı aynı mı?"       → SORULAMAZ
                                                (AYNI DEĞİL — 113 yıl ve
                                                 tamamen farklı üye listesi)
```

### ⚠️ BULGU 4 — ALAN ADI ÇAKIŞMASI (uygulayıcıyı vurur)
`taraf` **SAVASLAR/ANTLASMALAR'da DİZİ**, **SEFERLER'de STRING** (`"dusman"`).
Aynı ad, iki tip. `.taraf.map(...)` yazan bir tüketici SEFERLER'de patlar ya da
— daha kötüsü — `"dusman"` stringini karakterlere böler ve sessizce saçmalar.
📌 `CLAUDE.md §7`nin *"ayrı dosya vermek ayrı ad alanı vermek değildir"*
dersinin **alan tarafı.**

### ⚠️ BULGU 5 — `id:` ≠ `harita:` ve BU ROZETİ SESSİZCE DÜŞÜRÜR
```
devletler.js künyelerinin 34/431'inde  id: ≠ harita:
   habsburg → avusturya   ·  cenova → ceneviz  ·  rodos-sovalyeleri → sovalye
   sirp-despotlugu → sirbistan  ·  bulgar-carligi → bulgaristan  …
```
🔴 **Emre'nin dört örneğinden BİRİ tam bu tuzakta:** `taraf:` dizisi
`"habsburg"` diyor, `DEVLET_HARITA` ise `"avusturya"` anahtarını tutuyor.
`DEVLET_HARITA.find(x => x.id === "habsburg")` → **null**, hata yok, uyarı yok:
Avusturya rozeti hiç çizilmez ve ip üç uçlu kalır.
⇒ **Köprü zorunlu:** `harita = devletler.js[id].harita || id`.
Ölçüldü, köprü kurulunca dördü de bulunuyor.

### ⚠️ BULGU 6 — OSMANLI'NIN GÖVDESİ BAŞKA DOSYADA
`DEVLET_HARITA`da `osmanli` kaydı **YOK**. Osmanlı gövdesi `donemler.js`
(`d.o`/`d.v`) içinde. ⇒ Engel geometrisi ile üye geometrisi **iki ayrı
kaynaktan** gelir; ipi hesaplayan kodun ikisini de okuması gerekir.

### ⇒ ② SORUSUNUN CEVABI
**Rozetleri çizmeye yetecek veri VAR** (kim, nerede, ne zaman).
**İpleri doğru kurmaya yetecek veri YOK** — çünkü "ittifak" adı olan bir
varlık değil, bir savaş kaydının metin alanı.
**Yazılması gereken:** aşağıdaki `window.ITTIFAKLAR`. Tahminen **9-15 kayıt**
(ölçülen 9 `taraf_metin` + kronolojideki 62 `tur:"ittifak"` maddesinden
süzülecek olanlar). Bu bir ARAŞTIRMA işidir, ölçüm işi değil.

---

## ③ GEOMETRİ VE MALİYET — ÖLÇÜLDÜ, TAHMİN EDİLMEDİ

Somut vaka: **Kutsal İttifak, 1684-03-05 → 1699-01-26** (Karlofça'nın kendi
`taraf:` dizisi). Üyeler: `habsburg · lehistan · venedik · rusya`.
Çapa: `DEVLET_HARITA[].dnm[].c` (dönemin çizili gövde merkezi).

### 3.1 Düz ip Osmanlı'yı kesiyor mu? — EVET, ÜÇTE BİRİ

1690-06-15 (başkent çapalarıyla, elle sınama):
```
Viyana ↔ Varşova     556 km   🟢 kesmiyor
Viyana ↔ Venedik     435 km   🟢 kesmiyor
Viyana ↔ Moskova    1681 km   🔴 KESİYOR
Varşova ↔ Venedik    988 km   🟢 kesmiyor
Varşova ↔ Moskova   1155 km   🟢 kesmiyor
Venedik ↔ Moskova   2124 km   🔴 KESİYOR
⇒ 2/6
```
**HÜKÜM:** Emre'nin kısıtı **gerçek bir kısıttır** — süs değil. Kesişen iki ip
Podolya/Ukrayna ve Balkanlar üzerinden geçiyor; oralar 1690'da Osmanlı.

### 3.2 ÇÖZÜM: "YAY" — ve bu Emre'nin KENDİ kelimesi

*"doğru yerine İP veya YAY terimini tercih ettim"* · *"gerekirse ETRAFINDAN
DOLANMALIDIR"*. ⇒ Görünürlük grafiği (visibility graph) ile en kısa kaçınma
yolu aramaya **gerek yok**: kuadratik Bézier ile **bükülmüş bir yay** yeter.

Yöntem: kirişin orta noktasından dik yönde `k` derece kaydırılmış tek kontrol
noktası. `k` küçükten büyüğe denenir, **kesişmeyen ilk değer** alınır.

### 3.3 Tam pencere ölçümü — 37 dönem × 6 çift = 222 ip

```
düz kalan (büküm 0°)      148   (%67)
büküldü                    74   (%33)
çözülemeyen (12° üstü)      0
büküm dağılımı            {0°:148, 3°:54, 4°:15, 6°:1, 8°:4}

MALİYET (saf JS, tek iş parçacığı, kutu ön-süzgeçli)
  toplam kesişim testi     946
  TOPLAM SÜRE            2.783 ms   ← BÜTÜN 15 YIL İÇİN, BİR KEZ
  dönem başına              75,2 ms
  ip başına                 12,5 ms
```
Karşılaştırma tabanı: Osmanlı gövdesi 1690'da **13.841 köşe**, 153 parça.

### 3.4 KARE BAŞINA MI, DÖNEM BAŞINA MI? — **DÖNEM BAŞINA**

**ÖLÇÜM:** İttifak penceresinde gövde **37 kez** değişiyor (14,9 yılda).
Bütün atlasta **519 dönem** var.
**HÜKÜM:** İp geometrisi **`aktifDonem` değiştiğinde** hesaplanır — `guncelle()`
içindeki `di !== aktifDonem` dalı, yani gövdenin zaten yeniden kurulduğu yer.
Kare başına hiçbir hesap yok; katman yalnız `setData` alır.

📌 Koordinatörün uyardığı tuzak (147 DOM işareti her karede → uçuş %4 kare)
**burada yapısal olarak imkânsız**: 15 yıllık pencerenin TAMAMI 2,8 saniye,
ve o da bir kez. Tek bir kare bütçesi (16 ms) ile kıyaslanacak sayı 75 ms'dir
ve **saniyede 60 değil, 15 YILDA 37 kez** ödenir.

### 3.5 🔴 ÖLÇTÜĞÜM AMA ÇÖZMEDİĞİM: BÜKÜM ZIPLAMASI
148 düz / 74 bükülü demek, aynı ipin dönem sınırında **0° ↔ 3° arasında
zıplayabileceği** demek. Zaman akarken bu bir "sıçrama" olarak görünür.
**ÖLÇMEDİM:** göze ne kadar battığını sınamadım (haritayı koşturmadım).
**ÖNERİ:** dönem geçişinde `k` değerini 200-300 ms'de yumuşat (`requestAnimationFrame`
ile ara değer) — ama bu kare başına iş demektir, dolayısıyla **ölçülerek** girilmeli.

---

## ④ TASARIM — SOMUT VAKA ÜZERİNDEN

### 4.1 Önerilen veri dosyası: `data/ittifaklar.js` → `window.ITTIFAKLAR`

🔴 **Ad alanı kuralı (`CLAUDE.md §7`):** dosya adındaki ayırt edici parça
değişken adında da olacak. `data/ittifaklar.js` → `window.ITTIFAKLAR`.

```js
window.ITTIFAKLAR = [
{ id:"kutsal-ittifak-1684",
  ad:"Kutsal İttifak (Holy League)",
  f:"1684-03-05",              // Linz'de imzalandığı gün
  t:"1699-01-26",              // Karlofça
  uye:["habsburg","lehistan","venedik","rusya"],   // devletler.js `id:`leri
  uye_katilim:{ "rusya":"1686-05-06" },            // sonradan katılan
  hedef:["osmanli"],           // 🔴 İPİN KAÇINACAĞI GÖVDE(LER)
  rozet:"✠",                   // AYNI ROZET — Emre'nin şartı
  renk:"#c8a02a",
  kaynak:"…",                  // TDV/akademik — ARAŞTIRILACAK
  not:"…" }
];
```

**Alanların gerekçeleri:**
- `hedef:` **ayrı alan olmalı, `taraf[0]`dan türetilmemeli.** §②/Bulgu 2:
  `taraf:` bazı kayıtlarda müttefiklik anlatıyor. Kaçınılacak gövdeyi
  varsayımla seçmek, yanlış ipi doğru gibi çizer.
- `uye_katilim:` — Rusya Kutsal İttifak'a **1684'te değil 1686'da** katıldı.
  Tek bir `f`/`t` ile gösterilemez; üye başına katılım tarihi olmadan
  1684-1686 arası Rusya'ya ip çekilir ve bu **tarihen yanlış** olur.
  ⚠️ 1686 tarihi burada TASARIM GEREKÇESİDİR, benim ölçtüğüm bir kaynak
  değildir — veri yazılırken TDV/akademik kaynakla **doğrulanmalıdır.**
- `rozet:` tek karakter/glif — `HAREKET` glif deseninin aynısı.

### 4.2 Çizim — üç katman, üçü de var olan desenlerin kopyası

```
ittifak-ip        type:"line"  · source:"ittifak"
                  paint: line-color=["get","renk"] · line-width 1.8
                         line-dasharray [2,3]   ← ISILTI burada sürülür
ittifak-isilti    type:"line"  · aynı kaynak · line-gradient ya da
                  animasyonlu `line-dasharray` offset (elektriklenme)
ittifak-rozet     maplibregl.Marker · className "ittifak-rozet"
                  → `sefer-rozet` (app.js:2525) sınıfının kardeşi
```
🔴 **`line-dasharray` veriyle sürülemez** — `HAREKET` bunu zaten biliyor ve
tür başına ayrı katman açıyor. İttifak sayısı azsa (9-15) **ittifak başına
bir katman** da olur; ama desen tekse **tek katman yeter.**

**Işıltı animasyonu — en ucuz yol:** `line-dasharray`ı sabit tutup
`line-offset`/`line-translate`i değil, **`line-gradient` içindeki durakları**
kaydırmak. Ölçmedim; alternatif olarak CSS `@keyframes` ile rozetin kendisini
parlatmak kare bütçesine hiç dokunmaz.

### 4.3 İp hesabı — sözde kod (KOD DEĞİL, ADIM LİSTESİ)

```
donem degistiginde:
  aktif = ITTIFAKLAR.filter(i => i.f <= gun && gun < i.t)
  her ittifak icin:
    engel = hedef kimliklerinin O ANKI cizili govdesi
            (osmanli → donemler.js d.o + d.v · digerleri → DEVLET_HARITA)
    capa[u] = DEVLET_HARITA[ harita(u) ].dnm[o donem].c
              ⚠️ harita(u) = devletler.js[u].harita || u     ← BULGU 5
    her (u1,u2) cifti icin:
      k = 0
      dongu: yay(capa1, capa2, k) engeli KESIYOR MU?
             kesmiyorsa AL; kesiyorsa k'yi buyut (0 → 0,5 → 1 → … → 12)
             iki yonu de dene (+k ve -k), KUCUK olani sec
      cozulemezse: ipi CIZME, konsola YAZ    ← sessizce dogru gorunmesin
  setData(ittifak)
```
⚠️ Son satır önemli: çözülemeyen ip **çizilmemeli ve bildirilmeli**.
`CLAUDE.md §11`: *"ölçülemedi ≠ temiz"* — kaçınılamayan bir ipi düz çizmek,
Emre'nin tek kesin kısıtını sessizce çiğnemek olur.

### 4.4 ROZET ÇAPASI — merkez mi başkent mi? **KARAR KOORDİNATÖRDE**

İkisi de veride hazır, ölçüldüm:
```
                  dnm[].c (gövde merkezi, 1690)   baskent (devletler.js)
habsburg          [19.12, 47.87]                  "Viyana"
lehistan          [22.96, 53.11]                  "Varşova"
venedik           [12.97, 46.42]                  "Venedik"
rusya             [45.59, 56.40]                  "Moskova → Sankt-Peterburg"
```
🔴 **Rusya satırı kararı zorluyor:** gövde merkezi **45,59°D** — Urallar'a doğru,
Moskova'nın (37,6) ~500 km doğusu. İttifakı İMZALAYAN yer Moskova'dır; gövde
merkezi "devletin ağırlık merkezi"dir. İkisi farklı şeyler söyler.
- **`c` lehine:** %100 dolu, dönem dönem güncel, gövde değişince kendi kayar.
- **`baskent` lehine:** ittifak bir SİYASÎ eylemdir, siyasî merkezde durur.
  ⚠️ `baskent` bir METİN (`"Moskova → Sankt-Peterburg"`) — koordinat için
  yerleşim havuzuyla eşleştirmek gerekir ve **çok değerli/oklu olanları var.**

**Önerim:** `c` ile başla (sıfır ek iş, %100 kapsama), `baskent` çapasını
ikinci turda ölç. Ama karar Emre'nin niyetine bağlı — sen sor.

---

## ⑤ ÖLÇMEDİKLERİM — açıkça

1. **Işıltı/elektriklenme animasyonunun kare maliyetini ÖLÇMEDİM.** Haritayı
   koşturmadım. `line-gradient` kaydırmanın 60 fps'te ne kadar tuttuğu
   **bilinmiyor** — uygulanmadan önce ölçülmeli (bu projede tam bu sınıf bir
   kusur uçuşu %4 kareye düşürdü).
2. **Büküm zıplamasının göze battığını ÖLÇMEDİM** (§3.5).
3. **Kutsal İttifak'ın kuruluş günü (1684-03-05, Linz) ve Rusya'nın katılımı
   (1686) BENİM ÖLÇTÜĞÜM DEĞİL** — tasarım örneği olarak yazdım, `kaynak:`
   alanı boş. Veri yazılırken TDV `karlofca` / akademik kaynakla doğrulanmalı.
   `CLAUDE.md §4`: bulunamadıysa `bulunamadı` yazılır.
4. **1571 Kutsal İttifakı ile 1684 Kutsal İttifakı'nın ayrı kayıt olması
   gerektiğini** veri yapısından çıkardım (üye listeleri tamamen farklı),
   ama tarihsel olarak "aynı ad, ayrı ittifak" hükmünü **kaynağa sormadım.**
5. **Diğer ittifakların (Balkan ittifakı 1912, Üçlü İttifak 1914) geometrisini
   ÖLÇMEDİM.** Kutsal İttifak üzerinden çalıştım; Emre öyle istedi.
   ⚠️ 1914'te Osmanlı **müttefiktir**, hedef değil — `hedef:` alanı orada
   `["rusya","ingiltere","fransa"]` olur ve ip Osmanlı'dan GEÇEBİLİR.
   Tasarım bunu kaldırıyor ama **sınanmadı.**

---

## ⑥ KOORDİNATÖRE KARAR SORULARI

1. **`data/ittifaklar.js` yazılsın mı?** Yazılacaksa kaç ittifak — yalnız
   `taraf_metin`de geçen 9'u mu, yoksa kronolojideki 62 `tur:"ittifak"`
   maddesi taranıp tam liste mi çıkarılsın? (İkincisi ayrı bir araştırma turu.)
2. **Rozet çapası:** `dnm[].c` mi `baskent` mi? (§4.4)
3. **`taraf` alanının tip çakışması** (dizi ⇄ string) düzeltilsin mi? Benim
   dosyam değil; bildiriyorum. (§②/Bulgu 4)
4. **Işıltı animasyonu bu turda mı?** Ölçülmemiş tek kalem o; ayrı bir ölçüm
   turu olarak ayrılması daha güvenli.

---

## ⑦ ÖNGÖRÜ — uygulamadan ÖNCE yazıldı (`CLAUDE.md §11`)

Uygulanırsa şunlar beklenir; tutmazsa bir varsayımım yanlış demektir:

```
① Kutsal İttifak penceresinde (1684-1699) çizilen ip sayısı  = 6
② Bunların dönem boyunca BÜKÜLEN oranı                       ≈ %33  (74/222)
③ Çözülemeyen (12° büküme rağmen kesen) ip                   = 0
④ Dönem değişiminde ip hesabı                                < 100 ms
⑤ Kare başına ip maliyeti                                    = 0 ms
```
🔴 **⑤ tutmazsa mazeret yok:** ip kare başına hesaplanıyorsa tasarım
uygulanmamış, başka bir şey uygulanmış demektir.
⚠️ ①-④ `habsburg→avusturya` köprüsü kurulduğu varsayımına dayanır; köprü
kurulmazsa ① **6 değil 3** çıkar (Avusturya düşer) — ve bu, kusurun
**sessiz** hâlidir, bu yüzden öngörüye yazıldı.
