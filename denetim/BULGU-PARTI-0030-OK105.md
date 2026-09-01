# parti-emrelic-0030 — TRİYAJ BULGUSU

**Oturum:** OPUS HAZIR KITA 105 · **Şartname:** tahta M-1903 (1.MURAT)
**Tarih:** 1 Eylül 2026 · **Taban:** 2624 nokta / 63 girdi dosyası
(`girdi.GIRDI_DOSYALARI`) · koşu 22:51'de başladı, `arac/uret_petek.py ·
girdi.py · renkler.py` KİLİTLİ — hiçbirine yazılmadı, yalnız okundu.

> **Bu oturum ÖLÇER, uygulamaz.** `js/app.js` ve `arac/*.py` bu oturumun
> dosyası değildir. Her kalemde *ölçtüğüm* ile *çıkardığım* ayrı satırdadır
> (`CLAUDE.md §11`), ve **ölçmediğim açıkça yazılıdır.**

---

## 0. EVREN VE SAYIM

```
kaynak: ClaudEmre/kutu/giden/parti-emrelic-0030/CEVAP.json  (madde_sayisi 19)
per-madde hüküm sayımı:
    sirada 10 · olculecek 2                      ⇒ AÇIK 12   (M-1903 tablosuyla AYNI)
    cozuldu 3 · zaten-dogru 2 · senin-kararin 1 · bayat 1
```

### 🔴 ÖN BULGU — `CEVAP.json`un ÜST ALANI BAYAT

```
üst alan  hukum_dagilimi = {cozuldu 1, sirada 15, senin-kararin 1, bayat 1, zaten-dogru 1}
gerçek    per-madde       = {sirada 10, cozuldu 3, olculecek 2, zaten-dogru 2,
                             senin-kararin 1, bayat 1}
```
**Ölçtüğüm:** iki sayım 19'da buluşuyor, dağılım farklı — beş madde hüküm
değiştirmiş, başlık güncellenmemiş.
**Çıkardığım:** per-madde okuyan bir alet (`_paket_dokum.py`) doğru sayar;
üst alanı okuyan bir alet varsa **bayat sayı verir.**
**Ölçmediğim:** hangi aletin hangisini okuduğu.

---

## 1. 🔴 EN BÜYÜK BULGU — ÜÇ KALEM AYNI KÖKTEN, VE ÜÇÜ ÜÇ AYRI ŞEY SANILDI

`H-0004` · `H-0013` · `H-0018` üç ayrı kova altında duruyordu
(*"topografyaya yaslanmıyor"* · *"topografyaya yaslanmıyor"* ·
*"garip gösterim"*). Ölçüm üçünü tek köke bağladı: **`CLAUDE.md §2`
NOKTASIZLIK.**

| kalem | Emre'nin gördüğü | ölçülen boşluk |
|---|---|---|
| `H-0004` | Ordu'nun **sivri** sınırı | Ordu ↔ iç kesim arası (40,3-40,9K / 37,2-38,4D) **0 nokta** |
| `H-0013` | Selanik kuzeye uzuyor, Üsküp bastırıyor, arazi **boğum** | Vardar koridoru (Selanik ↔ Üsküp, ~150 km) **0 nokta** |
| `H-0018` | Maraş'ın kuzeybatısında **teal üçgen** | `dulkadir` kimliğinin **bütün külliyatta 2 noktası var** |

📌 **Ve üçünde de Emre çareyi "topografya / Dijkstra"ya bağlamış.**
Ölçüm bunu çürütüyor: *yaslanacak **rakip nokta** yoksa hiçbir yaslama
kuralı bu şekilleri açmaz.* Petek sınırı komşunun ortasından geçer;
komşu yoksa sınır yoktur, **tavan** vardır.
⇒ Maliyet-mesafe / topografya yaslaması çalışmasının bu üç kalemi
**çözmesi beklenmemeli**; önce nokta gerekiyor.

---

## 2. KALEM KALEM

### `H-0001` bu koyu kırmızı renk nedir · **cozuldu (teşhis)** — Emre HAKLI
> *"Bizans mavisi üzerine Osmanlı kırmızısı mı eklenmiş?"*

**Ölçtüğüm** (`js/app.js`, katman sırası ve opaklıklar):
```
app.js:837  devlet-dolgu    ["get","renk"]  fill-opacity 0.44   ← ALTTA
app.js:885  vassal-dolgu    #b2384a         fill-opacity 0.60
app.js:891  osmanli-dolgu   #8e0b22         fill-opacity 0.68   ← ÜSTTE
```
**Çıkardığım:** üç katman da yarı saydam ve üst üste biniyor. İki gövde
aynı toprağı kaplıyorsa ekranda **alfa harmanı** görünür: 0,44 mavi + 0,68
koyu kırmızı = mor-siyaha çalan koyu kırmızı. Emre'nin tahmini
**mekanizma olarak doğru.**
**Ölçmediğim:** iki gövdenin gerçekten örtüştüğü — `data/donemler.js` ve
`devletler_harita.js` üzerinde geometrik kesişim ÖLÇMEDİM (koşu o
dosyaları şu an yeniden yazıyor).
⇒ Kalem, koordinatörde açık duran *"sınırlar birbiri ile örtüşmeli"*
maddesiyle (0038/H-0007) **aynı köke** bağlanmalı.

### `H-0002` Pelakanon — boğazı geçmiş görünüyor · **cozuldu (teşhis, kısmî)**
**Ölçtüğüm** — `git log` iki commit verdi, ikisi de 30 Ağustos:
```
21287fc  Saros/Çimpe: kural ZATEN VAR, ama vakayı KAPSAMIYOR
0a124f5  BOĞAZ AİLESİNİN KÖKÜ BULUNDU: kural YAPISAL OLARAK çaresiz
         motor_kara.geojson · 3459 bileşen
         Kilitbahir↔Çanakkale · İstanbul↔Üsküdar · Çimpe↔Saroz kuzey
         → DÖRDÜ DE AYNI BİLEŞEN #4
         Avrupa ile Asya KAFKASYA üzerinden karadan bağlı ⇒
         "deniz aşırı sahiplik üretilemez" kuralı hiçbir boğaz vakasını
         durduramaz. KURAL DOĞRUYDU, SORUNUN CİNSİ BAŞKAYDI.
⇒ ÇARE TASARLANDI: dolambaç oranı (kara yolu / kuş uçuşu) kuralı
   kuş uçuşu ~2,6 km · kara yolu ~2000 km · oran ~1000× ⇒ eşik HASSAS DEĞİL
⇒ KOD YAZILMADI.
```
**Çıkardığım:** ①. şıkkı (boğaz geçişi) **dördüncü kova ③** — teşhis ve
tasarım hazır, uygulama yok. ③. şıkkı (koyu kırmızı) `H-0001` ile aynı.
**Ölçmediğim:** ②. şıkkı — *"2. resimdeki ufak hata"*. **Görselleri
AÇMADIM**, dolayısıyla o şık hakkında hiçbir hükmüm yok.

### `H-0003` ittifak rozetleri ve ipleri · **senin-kararin**
**Ölçtüğüm:**
```
denetim/ITTIFAK-TASARIM.md          VAR (commit d9b255e)
js/app.js içinde "ittifak"          1 eşleşme — ve o da GLİF LEJANTI:
                                    app.js:3654  "🤝": "ittifak / anlaşma"
```
**Çıkardığım:** tasarım teslim edilmiş, **kod yazılmamış** (dördüncü kova
③). `js/app.js` bu oturumun dosyası değil ⇒ kalem **ARAYÜZ'e** sevk
edilmeli, karar koordinatörün.

### `H-0004` Ordu'nun sivri sınırı · **cozuldu (teşhis)**
**Ölçtüğüm** (`_yer_ara.py --kutu 39.80 36.80 41.30 39.40 --gun 1340-06-15`):
```
kıyı  Ünye 41,13/37,28 · Ordu 40,98/37,85 · Giresun 40,92/38,39   trabzon-rum
iç    Niksar 40,59/36,95 · Şebinkarahisar 40,29/38,43              eretna
      Terme 41,21/36,98
⇒ kutuda TOPLAM 6 NOKTA. Ordu ile iç kesim arasında SIFIR.
```
**Çıkardığım:** Ordu'nun peteği Canik dağlarına doğru serbestçe uzuyor;
sivri uç oradan doğuyor. Çare **nokta** (Mesudiye · Reşadiye · Koyulhisar
· Ünye güneyi), geometri kuralı değil.

### `H-0005` olay yeri yuvarlak işaret bazı maddelerde yanmıyor · **bayat**
**Ölçtüğüm** — şikâyet **23 Ağustos**, düzeltmeler **24 Ağustos**:
```
07c33b2  24 Ağu  SESSIZ ADIM KUSURU TESHIS EDILDI
be8ba85  24 Ağu  DORDUNCU SESSIZ DAL KAPANDI
app.js:5499-5537  "zaman akışı" kipinde artık işaret yanıyor; ve yorum
                  Emre'nin ARALIKLILIK şikâyetini adıyla anıyor
```
**Ve kalan bir sınıf ÖLÇÜLDÜ — kusur değil, TASARIM:**
```
külliyat 1263 madde · yer_id VAR 1177 (%93,2) · yer_id YOK 86 (%6,8)
app.js:6049  "isaretYanipSon bir NOKTAYA konur, konumsuz maddenin noktası
              YOKTUR. Çerçeve ortasına koymak, olmayan bir yeri işaret
              etmek olurdu — yanlış bilgi, bilgisizlikten kötüdür."
```
**Çıkardığım:** şikâyetin ürettiği kusur kapandı; **86 maddede işaret
bilerek yanmıyor** ve bunun yerine panel/kırpma konuşuyor. Emre'ye
söylenmesi gereken şey *"düzeltildi"* değil, ***"%6,8'inde bilerek
yanmıyor, çünkü o maddelerin haritada yeri yok."***

### `H-0007` Çimpe / Saroz kuzeyi · **zaten-dogru** (veri tarafı)
**Ölçtüğüm** (`--kutu 40.30 25.80 41.20 27.40 --gun 1355-06-15`):
```
Çimpe · Bolayır · Gelibolu · Karabiga            OSMANLI
Saroz kuzey kıyısı (40,646/26,695 · k0)          bizans  ← DOLGU ÇALIŞIYOR
Şarköy · Keşan · Malkara · Enez · İpsala ·
Ferecik · Dedeağaç                               bizans
```
**Çıkardığım:** kuzey kıyıyı emecek Osmanlı peteği yok; veri tarafı
**kapalı.** `21287fc` de aynısını ölçmüş.
**Ölçmediğim:** yayındaki çizili görüntü — koşu canlı, çıktıya bakmadım.

### `H-0009` Trakya'nın alınma sırası · **senin-kararin (devir edildi)**
**Ölçtüğüm** — bu kalem BENDEN ÖNCE ölçülmüş ve `CEVAP.json`da yazılı:
```
Lalapaşa · Kofçaz · Vize · Dereköy dördü de 1361-01-01'de Osmanlı
±30 günde TEK madde: "Pençik Kanunu — Yeniçeri Ocağı'nın temeli"
                     (Trakya fethi DEĞİL)
🔴 VE BU BİR SINIF: yuvarlak güne (MM-DD = 01-01) 6+ yerleşim yığan 10 gün
   1390 (16, Ege) · 1552 (14, Cezayir) · 1557 (13, Kızıldeniz) ·
   1577 (12, Fizan) · 1361 (12, Trakya) · 1551 (10, Çıldır) ·
   1345 (9, Karesi) · 1468 (8, Karaman) · 1357 (7, Trakya) · 1534 (6, Kars)
   TOPLAM ~107 yerleşim
```
**Çıkardığım:** ölçüm tam, hüküm verilmiş, **devri yapılmamış.** Kalem
KRONOLOJİ koluna gitmeli; kayıt yazmak bana kapalı. Bir işi ikinci kez
ölçmedim — `CLAUDE.md §11`: *ödenmiş bir borç kayıtsız kalırsa yeniden
iş diye bulunur.*

### `H-0010` aynı güne düşen iki madde birlikte oynatılıyor · **bayat**
**Ölçtüğüm** — şikâyet **23 Ağustos**, düzeltme **24 Ağustos 01:34**
(`d2d35ab §③`), ve o commit **bu paketin `H-0019`'unu adıyla kapatıyor**:
```
KÖK SEBEP: DÖRT ayrı "şu anki madde" tanımı var. Üçü tarih güdümlü ve
kasten birleştirilmiş; DÖRDÜNCÜ (`suankiOlayI` — ⏮/⏭ ve HARİTA)
hiçbiriyle birleştirilmemişti. Eşitlikte HEP SONUNCUYU seçiyordu.
ÇARE: ZAMAN.suankiOlay'a `tercih` parametresi; YALNIZ `gi` TAM EŞİTSE kazanır.
   ÖNCE  harita 101 · panel 102       SONRA  dördü de 101 ✓
   ⏭ devamı: harita 102 · panel 102 ✓   ← "ayrı ayrı oynatma" BUDUR
```
**Çıkardığım:** `H-0010` ile `H-0019` **aynı kök.** `CEVAP.json`
`H-0019`'u `cozuldu` işaretlemiş, `H-0010`'u `sirada`da bırakmış —
**paketin kendi içinde tutarsızlık.** Emre'nin istediği "her madde ayrı
ayrı oynatılsın" davranışı yayında.
**Ölçmediğim:** tarayıcıda gözle doğrulama (bu oturuma tarayıcı gerekmedi).

### `H-0013` Selanik kuzeye uzuyor / Üsküp bastırıyor · **cozuldu (teşhis)**
**Ölçtüğüm** (`--kutu 40.20 20.60 42.60 23.60 --gun 1400-06-15` → 9 nokta):
```
Selanik 40,64/22,94 · Üsküp 42,00/21,43 · Manastır · Ohri · Serez ·
Petriç · Lanzaka · Köstendil · Prizren
```
🔴 **Vardar koridorunda SIFIR NOKTA.** Dokuz aday tek tek arandı, dokuzu da
*"KAYIT YOK"* (`_yer_ara.py`, 63 dosyanın tamamı tarandı):
```
Köprülü (Veles) · İştip (Štip) · Ustrumca (Strumica) · Doyran ·
Gevgili (Gevgelija) · Kılkış (Kilkis) · Vodina (Edessa) ·
Karaferye (Veria) · Yenice-i Vardar (Giannitsa)
```
**Çıkardığım:** Selanik'in peteği kuzeye, Üsküp'ünki güneye serbestçe
uzuyor ve ortada buluşuyor — *"boğum"* budur. Kusur **veride**.
**Ölçmediğim:** dokuzunun fetih tarihleri (TDV'den tek tek çıkarılmalı,
uydurulmaz).

### `H-0014` yabancı devlet haberleri gerçekten dünya çapında mı ·
### **cozuldu (① ölçüldü)** + **senin-kararin (②)**
Emre'nin ①. sorusu: *"o 'şu önem puanından fazla ise gelsin' ayarı hangi
durumlarda devreye giriyor?"* — **Ayar VAR, ama Osmanlı kronolojisine
HİÇ UYGULANMIYOR.**

**Ölçtüğüm** (`js/app.js:7371-7392`, `birlesikTopla`):
```js
// ⚠️ Süzme YALNIZ ek maddelere uygulanır (kilit kural).
odakKaynak.forEach(...)            // OSMANLI — SÜZGEÇSİZ push ediliyor
EK_SECILI.forEach(function (id) {  // ek devletler — SÜZÜLÜYOR
    var dunya = m.dunya != null ? m.dunya : (m.onem != null ? m.onem : 3);
    if (dunya < EK_DUNYA_ESIK) return;
    if (EK_YALNIZ_DIS && m.kapsam !== "dis") return;
```
Ve alan doluluğu (1263 maddede):
```
kapsam   41 madde  ("dis" 18 · "ic" 21 · "konu" 2)   ⇒ %96,8'inde YOK
onem     40 madde  (1:2 · 2:15 · 3:17 · 4:5 · 5:1)
dunya    40 madde  (0:3 · 1:13 · 2:20 · 3:3 · 5:1)
kapsam_genis  35
```
İkinci bir süzgeç daha var ve o da başka bir şeyi süzüyor
(`app.js:3605-3615`): `kapsam:"konu"` maddeleri `localStorage.dunyaAc`
kapalıyken listeye **hiç girmiyor** — bu 8. boyut süzgeci, **2 maddeyi**
etkiliyor.

**Çıkardığım — Emre'nin sorusunun cevabı:**
```
① Ayar GERÇEK ve Emre yanlış hatırlamıyor: EK_DUNYA_ESIK + EK_YALNIZ_DIS.
② Ama YALNIZ "ek devlet seçilmiş" birleşik listede çalışır.
   Osmanlı kronolojisindeki yabancı maddeler ODAK kaynağındadır ve
   SÜZGEÇSİZ geçer ⇒ ayar onlara HİÇBİR ZAMAN dokunmaz.
③ Dokunsaydı bile %96,8'i `dunya`sız/`onem`siz olduğu için varsayılan
   3'e düşerdi — yani süzgeç bir sınıflandırma üzerinde değil,
   41 maddelik bir ada üzerinde çalışıyor.
```
📌 Bu, `H-0008`in `bayat` notunun bıraktığı artığın tam karşılığı:
*"asıl sorun duruyor: senin sorun konum değil ALAKA'ydı."* Alaka
**ölçülebilir bir alanla ifade edilmemiş.**
**Ölçmediğim:** Emre'nin ②. sorusu — *"dünya çapında olay olup Osmanlı
kronolojisinde görünmeyen var mı"*. Bu bir **araştırma** kalemi, triyaj
değil; ayrı sevk ister.

### `H-0017` Niş'in yanında kalan Sırbistan toprağı · **cozuldu (teşhis + kaynak)**
Emre: *"o toprağı sahiplenecek bir şehir de göremedim."*
**Ölçtüğüm** (1390-06-15) — şehir **VAR**, ama asıl bulgu başka:
```
Sofya      d: 1385-09-01'den   OSMANLI
Niş        d: 1386-01-01'den   OSMANLI
Şehirköy (Pirot) 43,153/22,586  s: sirbistan 1281 → 1428   ← 42 YIL
Alacahisar (Kruševac)           s: sirbistan 1281 → 1428
```
🔴 **Şehirköy, Osmanlı Sofya'sı ile Osmanlı Niş'i ARASINDADIR** (TDV:
*"Belgrad-Sofya-İstanbul kara ve demiryolu üzerinde önemli bir bağlantı
noktası"*). Veri, Osmanlı'nın Niş'e Sırp toprağının üstünden atladığını
söylüyor. Emre'nin gördüğü parça budur.

**Kaynak — TDV `sehirkoy` (HTTP 200 · Machiel Kiel · GÖVDESİ OKUNDU):**
```
1386       Sofya ve Niş ile birlikte Osmanlılar ele geçirdi
1389 önce  Dimitri Vojinović, Kral Lazar'ın emriyle GERİ ALDI; I. Murad
           10.000 kişi gönderdi, Sırplar kaleyi boşaltıp YAKTI; kale
           kısa süre sonra yeniden inşa edildi
1412       Sırp Despotu Stefan Lazarević aldı, Mûsâ Çelebi'ye karşı savundu
1413       Çelebi Mehmed kaleyi resmen VASALI Stefan'a İADE ETTİ   ⇒ `v:` (tâbi)
1428       Lazarević'in ölümüyle Osmanlılar geri aldı          ✅ VERİDE VAR
1443       Haçlı ordusu (Vladislav + Branković) zaptetti        ✅ VERİDE VAR
1444       Segedin sonrası II. Murad Sırplara verdi             ✅ VERİDE VAR
1456       Branković'in ölümüyle Osmanlılara geçti              ✅ VERİDE VAR
```
**Çıkardığım:** veri **1428 sonrasını doğru, 1386-1428'i hiç** tutuyor.
TDV slug testi: `sehirkoy` 200 ✓ · `pirot` 302 (ölü) · `krusevac` 302 (ölü).
**Uygulamadım, ve sebebi ikili:**
1. Bu bir **mevcut kayıt düzeltmesi**; yeni bir dosya yeni NOKTA ekler,
   var olan kaydı düzeltemez — mekanizma `_sahiplik_uygula.py` yamasıdır
   ve onu uygulamak paylaşılan dosyayı değiştirir (şartname ④ yasaklıyor).
2. `Değişmez 2`: 1386 · ~1389 · 1412 · 1413 **dört yeni kırılma** demek,
   dördüne de ±30 günde kronoloji maddesi gerekir. Kronoloji bana kapalı.

### `H-0018` üçgen garip gösterim · **cozuldu (teşhis)** —
### 🔴 VE ÖNCEKİ RAPOR **BAŞKA BİR ÜÇGENİ** ÖLÇMÜŞ
Emre: *"bu hatayı daha önce de sana atmıştım ama ne yaptın bilmiyorum."*
Cevap üç parçalı ve üçü de ölçüldü.

**① Önceki bildirim İŞLENDİ:** `denetim/BULGULAR-UCGEN-19AGU.md`, 450
satır, 20 Ağustos. **② Düzeltme de İNDİ** (`js/app.js:945-985`):
```
TAVAN_PX = 80              piksel tavanı (u sınırsızdı, 270 km → 400-1000 px)
line-join "round" → "bevel"  round join keskin köşede yay çıkıntısı bırakıyordu
YER_OPAKLIK                tavanın sildiği bilgi TERS OPAKLIĞA taşındı
```
**③ 🔴 AMA EMRE'NİN GÖRSELİNDEKİ ÜÇGEN O DEĞİL.** Görseli açtım:
```
              önceki rapor (20 Ağu)        Emre'nin H-0018-1.png
tarih         1703-08-22                   1392-01-01
renk          SOLUK KIRMIZI (#8e0b22)      TEAL / yeşil
biçim         bulanık hâle lobu            KESKİN KENARLI dolu üçgen
yer           Sahra · Şam çölü (K1-K5)     38,19-38,97K / 36,17-36,64E (Maraş KB)
madde         —                            "Teke ilinin ilhakı: Antalya'nın katılışı"
```
Ve raporun kendi *"ölçmediklerim"* bölümü bunu önceden söylüyor:
> *"Emre'nin görüntüsünün hangi yayından olduğu — **ekran görüntüleri bana
> ULAŞMADI**, yalnız kutu koordinatları verildi."*

**Bu üçgenin ölçümü:**
```
renkler.py:31   #00838f  trabzon-rum / dulkadir     ← TEAL, görseldeki renk
kutu 37,60-39,60K / 35,40-37,40D · 1392-01-01 → TOPLAM 2 NOKTA:
    Elbistan 38,207/37,194  dulkadir
    Kayseri  38,734/35,480  burhaneddin
🔴 `dulkadir` kimliğinin BÜTÜN KÜLLİYATTA nokta sayısı: 2
    Maraş 37,58/36,94 · Elbistan 38,21/37,19 — aralarında 71 km
```
**Çıkardığım:** iki nokta birbirine 71 km'de sıkışmış; kuzeybatıda
Kayseri'ye kadar (~150 km) rakip yok. İki Voronoi hücresi o boşluğa
doğru **kama gibi** açılıyor ve görseldeki keskin teal üçgeni üretiyor.
`§2` NOKTASIZLIK — `H-0004` ve `H-0013` ile aynı sınıf.
Eksik Dulkadir noktaları: Malatya · Harput · Besni · Antep · Kadirli ·
Andırın · Göksun · Zamantı · Darende · Bozok.
**Ölçmediğim:** çizili peteğin gerçekten bu iki hücreden doğduğu —
`donemler.js` geometrisi ölçülmedi (koşu onu yeniden yazıyor). Hüküm
nokta dağılımına ve renge dayanıyor.

---

## 3. TESLİM — SAYIYLA

```
AÇIK 12  →  triyaj borcu 0     (12 kalemin 12'sine ÖLÇÜLMÜŞ hüküm verildi)
```
| hüküm | kalem |
|---|---|
| `cozuldu` (teşhis kondu) | `H-0001` `H-0002` `H-0004` `H-0013` `H-0014①` `H-0017` `H-0018` |
| `bayat` | `H-0005` `H-0010` |
| `zaten-dogru` | `H-0007` |
| `senin-kararin` | `H-0003` `H-0009` `H-0014②` |

🔴 **UYGULAMA BORCU 6 KALEM VE UYGULAYICISI BEN DEĞİLİM:**
```
H-0001 + H-0002①  motor/örtüşme  → koordinatördeki 0038/H-0007 ile aynı kök
H-0003            js/app.js      → ARAYÜZ
H-0004 · H-0013 · H-0018  NOKTA  → yazabilirim (kendi dosyam), TDV taraması ister
H-0009            kronoloji      → KRONOLOJİ kolu (~107 yerleşim, 10 yuvarlak gün)
H-0014②           araştırma      → ayrı sevk
H-0017            yama + kronoloji → karar koordinatörde
```

## 4. AÇIKÇA ÖLÇMEDİKLERİM
```
· H-0002 ②. şıkkı ("2. resimdeki ufak hata")  GÖRSEL AÇILMADI, hüküm YOK
· gövde örtüşmesinin geometrik ölçümü         donemler.js koşuda, ölçülmedi
· yayındaki (r4391) çizili görüntü            hiçbir kalemde bakılmadı
· H-0013'ün dokuz noktasının fetih tarihleri  TDV taraması YAPILMADI
· H-0018 üçgeninin petek geometrisi           renk + nokta dağılımına dayanıyor
```
