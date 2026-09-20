# D-RENK-0073 — H-0007: "renkleri D sınırlarına oturtmak" · ÖLÇÜM + ÜÇ SEÇENEKLİ PLAN
20 Eylül 2026 · oturum D-RENK-0073 (Opus 5) · KOD YAZILMADI, KOŞU İSTENMEDİ
Öngörüler ölçümden önce: [`D-RENK-0073-ONGORU.md`](D-RENK-0073-ONGORU.md)
Ölçüm betikleri: `denetim/ARAC-D-RENK-0073-*.{js,py}` — sıra: `DOK.js` (hatları JSON'a döker)
→ `GOVDE.js` (1923 gövdelerini GeoJSON'a döker) → ölçüm betikleri. 🔴 Betiklerdeki `SP`
sabiti bu oturumun scratchpad yoludur; yeniden koşarken kendi geçici dizinine çevrilir.

Emre'nin sözü (H-0007): *"bu haritada öyle sanıyorum ki D kalite sınırlar çizilmiş
milimetrik olarak fakat renkler bu sınırlara oturtulmamış; tüm dünyada renklerin D
kategorisi ile çizilmiş sınırların içine oturtulması sağlanmalıdır."*

---

## 0. ÖNCE TEŞHİS — görseldeki "milimetrik sınır" D KATMANI DEĞİL

Şartname "varsayma, teşhis et" dedi; ölçüldü ve **Emre'nin gördüğü çizgi D/E hattı değil.**

| ölçüm | sonuç |
|---|---|
| Görselin kesiti (`1821-09-15`) ve kutusu (`86,77–93,45 B · 11,61–19,40 K`) içinde yürürlükteki D/E/C hattı | **0** |
| O kutuya değen hat kayıtları (herhangi bir tarihte) | 4 — en eskisi `d1923-gt-bh` **1862-05-12**, sonra `d1923-mx-gt` 1882, `d1923-mx-bh` 1897 · üçü de 1821'de yürürlükte DEĞİL |
| Görselde D katmanının çizgi rengi `#0a2f5c` (`js/d_katman.js:D_HAT_RENK`) | **0 piksel** |
| Görseldeki koyu çizginin ölçülen rengi | `#3a0510` · 678 piksel — `js/app.js:2129` |
| O katmanın geometrisi | `window.PETEK_GOVDE` (`js/app.js` `_farkKutusuCiz`) — yani **peteğin kendisi** |
| Bütün dünyada 1821-09-15'te yürürlükteki hat sayısı | **18** (Avrupa · İran · Kuzey Amerika; Orta Amerika'da hiç yok) |

⇒ Görselde "milimetrik" görünen şey, peteğin **kara maskesiyle kesilmiş kıyı kenarı**dır
(Natural Earth 10m). Kıyıda milimetrik, iç kesimde peteğin kendi kabalığında. Yani o
ekranda **renk zaten çizginin içindedir** — çizgi o rengin kendi konturudur.
Emre'nin talebi yine de geçerli ve BÜYÜK: *"tüm dünyada"* boyama D/E hatlarına otursun.
Aşağısı bunun ölçümü.

## 1. Soru 1 — iki boru hattı bugün birbirine DEĞİYOR MU?

**DEĞMİYOR, ölçüldü.**

| ölçüm | sonuç |
|---|---|
| `arac/uret_petek.py` (7.350 satır) içinde `d_sinirlar` · `D_SINIRLAR` · `sinir_sinif` · `sol_taraf` geçen satır | **0** |
| Boyamanın zinciri | `yerlesimler.js` → petek/Dijkstra → `_yabanci_govde_hesap` (`uret_petek.py:5871`) · `_osm_govde_hesap` (`:6520`) → `data/devletler_harita.js` (72,3 MB) · `data/donemler.js` (59,0 MB) |
| Çizginin zinciri | `data/d_sinirlar*.js` (9 dosya) + `data/sinir_sinif_dizini.js` → `js/d_katman.js` (344 satır, YALNIZ çizgi çizer, `index.html:1436-1446`) |

D katmanı baştan "yalnız çizgi" diye tasarlanmış (`d_katman.js` §9: *"iç dolgu bu dosyada
HİÇ çizilmiyor"*). Bugün **hiçbir dolgu hiçbir hattı görmüyor.**

## 2. Soru 2 — kapsam sayımı

| ölçü | sayı |
|---|---|
| Hat kaydı (9 dosya) | **723** — `d_sinirlar.js` 34 · komşu 53 · avrupa-bati 159 · avrupa-orta 205 · ortadogu 13 · afrika 41 · asya 133 · amerika 79 · okyanusya 6 |
| Bunların **geometrisi olan**ı | **350** (373'ü `hat` taşımayan "kutu"/beyan kaydı) |
| `sinif` dağılımı | E **244** · YOK **374** · C **64** · D (fiilî) **41** |
| Toplam hat uzunluğu · nokta | **130.320 km** · 32.556 nokta |
| Eşsiz ülke çifti · eşsiz devlet | **295** · **139** |
| `sol_taraf` dolu | 342 / 723 (%47) |
| Tarih aralığı | `f` 1343-01-01 → 1923-10-01 · `t` 1411-02-01 → 1923-10-29 |

**Kesit başına yürürlükteki hat** (atlasın çekirdeği 1281–1923 olduğu hâlde):

| gün | yürürlükte | toplamın |
|---|---|---|
| 1821-09-15 (Emre'nin görseli) | **18** | %2 |
| 1878-07-13 | 49 | %7 |
| 1914-07-28 | 142 | %20 |
| 1918-11-11 | 151 | %21 |
| **1923-10-29** (verinin tasarım günü) | **197** | %27 |

1923'te: 146 canlı künyenin **90'ında (%61,6)** en az bir hat var. Sınıf dağılımı
1923'te E 146 · C 44 · D 6 · YOK 1; 1821'de E 15 · C 2 · D 1.

🔴 **Veri "1923'ten geriye sarma" programının henüz ilk halkası.** Atlas 1281'de başlıyor;
hat verisi 1343'ten önce hiç yok ve 19. yüzyıl ortasına kadar avuç içi kadar. "Tüm dünyada"
talebi, bugünkü veriyle **tarihin %90'ından fazlasında karşılıksızdır** — orada oturtulacak
çizgi yoktur.

## 3. 🔴 Soru 4 (en önemli) — hat KAPALI POLİGON kuruyor mu?

Yöntem: her devlet için o gün yürürlükteki hatları `linemerge` ile zincirle; kapanmayan
uçların Natural Earth 10m kıyısına uzaklığını ölç. Kıyıya değen uç, poligonu kıyıyı izleyerek
kapatabilir; iç kesimde biten uç KAPATAMAZ.

| gün | hattı olan devlet | RING (tam halka) | KIYI ile kapanır | AÇIK (iç uçlu) |
|---|---|---|---|---|
| 1923-10-29 | 91 | **0** (%0) | **15** (%16) | **76** (%84) |
| 1914-07-28 | 69 | 0 | 12 (%17) | 57 (%83) |
| 1878-07-13 | 30 | 0 | 5 (%17) | 25 (%83) |
| 1821-09-15 | 15 | 0 | 1 (%7) | 14 (%93) |

Açık uçlar kıyıdan **yüzlerce–binlerce km** içeride bitiyor: Fransız Ekvator Afrikası
1.658 km · Belçika Kongosu 1.658 km · Sovyet Rusya 1.275 km · Brezilya 1.024 km ·
ABD/Kanada 608 km. Parçalar birbirine de bağlanmıyor: ABD 9 hat → **9 ayrı parça**,
İtalya 17 hat → 13 parça.

**Ve komşuluk paydası** (1923, 115 gövde):

| ölçü | sayı |
|---|---|
| Haritada birbirine **dokunan** devlet çifti | **196** |
| Hat kaydı olan çift | 108 |
| İkisi birden (komşu + hattı var) | **56** (komşuların %29'u) |
| Haritada komşu ama **hatsız** çift | **140 (%71)** |
| Hattı olan ama haritada komşu bile olmayan çift | 52 (hattın %48'i) |

⇒ **Cevap: hayır.** 1923'te bile hiçbir devletin hattı tek başına kapalı bir alan
kurmuyor; en iyi hâlde %16'sı kıyıyla kapanabilir. Poligon kurmak için eksik olan
**140 komşu çiftinin hattı**dır — yani işin asıl gövdesi motor değil, VERİ.

## 4. Bugün renk hattan ne kadar sapıyor? (1923-10-29)

Hat üzerinde ~10 km'de bir nokta, her noktanın 5 km sağı/solu hangi devlete boyalı
(7.166 örnek nokta, 197 hat):

| hâl | nokta | oran |
|---|---|---|
| iki yan da DOĞRU (sol = `sol_taraf`) | 286 | **%4,0** |
| iki yan doğru ama TERS | 20 | %0,3 |
| yalnız bir yan doğru | 3.230 | %45,1 |
| yanlardan biri ÜÇÜNCÜ devlet | 1.923 | %26,8 |
| iki yan da BOŞ (sahipsiz) | 1.707 | %23,8 |

Yanlış noktalarda rengin hattan **kayması: medyan 117 km** · %75 → 341 km · %90 → 697 km.
Ayrıca 197 hattın **152'sinde** iki taraf da haritada boyalı, 25'inde yalnız biri,
**20'sinde hiçbiri** (26 eşsiz taraf kimliği 1923 gövde kümesinde yok; sınanan 20'sinin
künyesi `devletler.js`te VAR — `macaristan`/`romanya` künye seçimi, ötekiler gerçekten
hiç boyanmıyor: §1.5'teki "renksiz künye" borcunun aynısı).

## 5. Soru 3 — üç seçenek ve maliyetleri

Ortak maliyet çıpaları: `devletler_harita.js` **3.874 gövde kesiti** (581 kimlik,
1.813 eşsiz kesit tarihi) · `donemler.js` 579 kesit · tam koşu ~40 dk (CLAUDE.md §9).
**Hat pencereleriyle çakışan gövde kesiti: 627 / 3.874 (%16,2) · 78 devlet.**
Osmanlı tarafı olan hat kaydı yalnız **17** — yani `donemler.js` neredeyse hiç etkilenmez.

### (a) Peteği hatla KESMEK — "hat bir bıçaktır"
Motorda tek yer: `_yabanci_govde_hesap` (`uret_petek.py:5871`), `g = poligonal(g.intersection(KARA))`
satırından (`:5884`) hemen sonra; Osmanlı için `_osm_govde_hesap` (`:6520`). Kesitte
yürürlükteki hatlar kara maskesini ikiye böler, `sol_taraf` hangi yarıyı kime verdiğini söyler.
- **Yeniden hesap:** 627 kesit (öteki 3.247 kesit önbellekten aynen gelir).
- **Çıktı boyutu:** en çok +32.556 koordinat ≈ **+0,5 MB** (72,3 MB'ın %0,7'si).
- **Şart:** `sol_taraf` — bugün 723 kaydın 342'sinde var (%47). Eksikse kesim yönü bilinemez.
- **Hattın bittiği yerde ne olur:** uç açık kaldığı için bıçak yarıda kalır; kesim yalnız
  hattın kapattığı kadarıyla uygulanabilir, kalan sınır peteğin. Görsel sonuç: hattın
  bittiği noktada sınır **medyan 117 km sıçrar** (§4).
- **Risk:** hat, peteğin bugün ÜÇÜNCÜ bir devlete verdiği toprağın içinden geçiyorsa
  (noktaların %26,8'i) kesim o devletin gövdesini de böler — hangi tarafa yazılacağı
  hatta yazılı DEĞİL.

### (b) Hattın kapattığı poligonu DOĞRUDAN boyamak — "hat gövdedir, petek yalnız içerik"
- **Bugün kurulabilir değil:** 1923'te **0/91** devlet halka kuruyor, %16'sı kıyıyla kapanıyor.
- Kurulabilmesi için eksik **140 komşu çiftinin** hattı gerekir (bugün 56 çift kapsanıyor).
  Ölçülen tempo: 723 kaydın tamamı 16–20 Eylül'de, bölge oturumlarıyla üretildi; 140 çift
  bunun ~2,5 katı bir kaynak demek — ve **yalnız 1923 için**. 1281–1923'ün tamamı için
  çarpan bilinmiyor (**ölçülemedi**: geriye sarma programının kesit sayısı yok).
- Motor maliyeti düşüktür (gövde artık üretilmez, okunur), **veri maliyeti çok yüksektir.**
- Kazanç: renk ile çizgi TANIM GEREĞİ birebir oturur; `sol_taraf` gerekmez.

### (c) KARIŞIK — hat varsa hat, yoksa petek (önerilen)
(a)'nın motordaki yeri, (b)'nin hedefi. Kesitte bir devletin hattı varsa gövdesi o hatla
kesilir; hattın olmadığı kenarlarda petek olduğu gibi kalır.
- **Yeniden hesap:** aynı 627 kesit · **çıktı ≈ +0,5 MB** · koşu süresine etkisi ölçülmedi,
  geometri işlemi kesit başına milisaniye mertebesindedir (40 dk'lık koşunun içinde kaybolur).
- **Ek iş:** geçiş dikişi. Hattın bittiği yerde iki geometri arasında medyan 117 km fark
  var; bunun ya yumuşatılması ya da açıkça (kesik çizgi/soluk ton) "burada hat yok"
  denmesi gerekir. **Bu, görsel dilin Emre tarafından seçilmesini isteyen bir karardır.**
- **Kazanç:** hat olan 56 komşu çiftinde renk hemen çizgiye oturur; kalan %71'de bugünkü
  görüntü değişmez, yani geriye sarma ilerledikçe harita kendiliğinden düzelir.

## 6. Ne istiyorum (hüküm Emre'nin)

1. **Hangi seçenek?** Ölçüme göre (c). (b) bugünkü veriyle imkânsız; (a) ile (c) arasındaki
   tek fark, hattın bittiği yerde ne yapılacağı.
2. **Geçiş dikişinin görsel dili:** hattın bittiği yerde sınır (i) sessizce peteğe dönsün mü,
   (ii) kesik/soluk çizilip "hat yok" densin mi?
3. **`sol_taraf` borcu:** kesim için şart; bugün %47. Eksik 381 kaydın tamamlanması ayrı bir
   kalem — bölge oturumlarına mı, tek oturuma mı?
4. Bu iş **koşu ister** (627 kesit yeniden). Koşu yalnız Oturum 0'ın; sıraya nereye girsin?

**Kod yazılmadı, koşu istenmedi, hiçbir `data/` dosyasına dokunulmadı.**

---

## Ek — öngörü sınavı (ölçümden önce yazılmıştı)

| # | öngörü | sonuç |
|---|---|---|
| Ö1 | `uret_petek.py`de hat teması 0 | ✅ 0 |
| Ö2 | kayıt 1.500–3.000 | ❌ **723** (yanıldım; dosya boyutuna bakıp nokta yoğunluğunu saymamıştım) |
| Ö3 | E baskın, D < %15 | ✅ E 244/349 geometrili · D 41 (%5,7) |
| Ö4 | tek kesitte yürürlük < %25 | ✅ 1923'te %27'ye ancak çıkıyor, öteki günlerde çok altında (1821: %2) — sınırda doğru |
| Ö5 | kapalı poligon kurabilen devlet < %15 | 🟡 **%16** (RING %0 + kıyıyla %16); yön doğru, eşik ucundan kaçtı |
| Ö6 | boyama petekten gelir, hiçbir hattı okumaz | ✅ |
