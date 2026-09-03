# PRUSYA-0903 — İLERLEME VE TESLİM

**Damga:** 3 Eylül 2026 · KOŞU CANLI (PID 1268) boyunca çalıştı
**Teslim:** `denetim/UYGULA-PRUSYA-0903.json` · tahta **M-2367**
**Yetki:** `data/` ve `arac/` altına **YAZILMADI** (git status ile doğrulandı)

---

## ① BEKÇİ VE AÇILIŞ

```
bekçi     Monitor · persistent · py arac/tahta_bekci.py --kim "PRUSYA-0903" --ara 45
ilk tik   "nöbette · 1 ad dinleniyor: PRUSYA-0903 · 2346 mesaj görüldü · 45 sn"  ✓ GÖRÜLDÜ
açılış    M-2347 · 12:00 · PRUSYA-0903 → 1.MURAT
onay      M-2355 / M-2356 · 1.MURAT → PRUSYA-0903 · "AÇILIŞ ALINDI, ÇAKIŞMA YOK"
kimlik    local_6314344f-8bc0-4dad-95e4-1e2d253a8051  (get_session("self") ile ÖLÇÜLDÜ)
```

---

## ② ÖNCÜL DENETİMİ — 1 DOĞRULANDI, 2 ÇÜRÜDÜ

Şartname üç öncül taşıyordu. `CLAUDE.md §11` *"devraldığın rakamı
doğrulamadan aktarma"* gereğince üçü de ölçüldü.

| # | Öncül | Hüküm |
|---|---|---|
| 1 | `prusya` kimliği atlasta hiç yok (OK109) | 🟢 **DOĞRULANDI** |
| 2 | 1795-10-24 → 1807-07-22 **AÇIK**, 11 yıl 9 ay | 🔴 **ÇÜRÜDÜ** |
| 3 | TDV `prusya` slug'ı büyük ihtimalle **ölü** | 🔴 **ÇÜRÜDÜ** |

### Öncül 1 — doğrulandı
```
veride   0 / 408 kimlik      (girdi.yukle(), 2731 nokta, s:+d:+v:+isg:)
BOYALAR  0 / 403 boya
künye    0 / 441 künye       (girdi.oku_devletler(), regex DEĞİL)
6 eksen  prus · brandenburg · preuss · hohenzollern · teuton · toton
```

### Öncül 2 — çürüdü, ve **bir sevk riskini durdurdu**
O pencerede veride **boşluk yok**; dört kaydın dördü de dolu:
```
Varşova            1795-10-24 → 1806-11-28  almanya
Lublin / Zamość    1795-10-24 → 1809-10-14  avusturya
Białystok          1795-10-24 → 1807-07-09  almanya
Chełm              🔴 ATLASTA YOK — dördüncü "kayıt" bir kayıt değil
```
🔴 Boşluk **dizinde değil kimlikte**: Prusya'nın toprağı `almanya` diye
boyanıyor. `§3.5` hayalet-devlet sınıfının **ters yüzü** — devlet yaşıyor
ama **başka devletin adıyla** çiziliyor.

⚠️ **Zarar ölçüldü:** bu öncüle dayanıp `prusya` dönemleri yazılsaydı, dört
kayıt da zaten dolu olduğu için **çakışan dönem** üretilecekti (`§8`:
dönemler çakışmamalı). Ölçüm bunu durdurdu.

### Öncül 3 — çürüdü, ve cevabı **depoda zaten yazılıydı**
```
prusya   200  · gövde OKUNDU, aranan altı olgunun ALTISI da var
almanya  200      polonya 200      lehistan 200
brandenburg 302 · tilsit-antlasmasi 302 · kalininggrad 302
```
📌 `data/kronoloji_almanya.js`in başlığı bunu **zaten söylüyordu**:
*"`almanya` · `prusya` · `bagdat-demiryolu` · `berlin-antlasmasi`, dördü
de HTTP 200, gövdesi bu oturumda çekildi."* Başka bir oturum slug'ı çoktan
ölçmüştü; şartname onu görmedi.
⇒ *"Batı Avrupa %0"* tablosu **künye** kapsamasını ölçer (`§4`ün kendi
uyarısı). Prusya Batı Avrupa sayılıp *"yok"* varsayılmıştı — oysa TDV onu
**Osmanlı teması** üzerinden kapsıyor.

---

## ③ EMSAL — kararı belirleyen ölçüm

**Atlas künye kimliği ile boya anahtarını zaten ayırıyor:**
```
habsburg            1526-08-29 → 1918-11-11   harita:"avusturya"
macaristan-habsburg 1526-08-29 → 1918-11-16   harita:"macaristan"
macaristan-naiplik  1918-11-16 → 1923-10-29   harita:"macaristan"

avusturya   veride 145 dönem   künyesi YOK  ← kimlik `habsburg` künyesinde
```
`CLAUDE.md §11`: *"künye var ama `harita:` başka anahtarda"* **ayrı bir
dal** — bu künyelerin **kendi rengine ihtiyacı yoktur.**

⇒ `prusya` künyesi `harita:"almanya"` ile yazılabilir: **dizin deliği
kapanır, harita bir piksel değişmez.**

---

## ④ REÇETE — Senaryo A (önerilen)

```
id      prusya            f  1701-01-18      harita  almanya
ad      Prusya Krallığı   t  1871-01-18      bölge   orta-avrupa
```
**İki uç da TEK KAYNAKTAN ve TAM GÜN** — TDV `prusya` gövdesi:
> *"18 Ocak 1701'de Königsberg'de taç giydi"*
> *"18 Ocak 1871'de Prusya Kralı I. Wilhelm, Versailles'da Alman
> imparatoru ilân edildi"*

**Reddedilen `f` adayları — ve niçin:** 1618 ve 1415'i TDV **gün olarak
vermiyor** (`§4` tarih uydurma). Ayrıca TDV açıkça *"1701'de krallık
unvanını aldığı Doğu Prusya'dan ötürü **bu isimle anılmaya başlandı**"*
diyor ⇒ künyenin adı `Prusya Krallığı` olduğuna göre 1415 yanlış olurdu.
1415-04-30 zaten `kronoloji_almanya.js`te duruyor — **kayıp değil, yeri başka.**

**`t` = 1871 gerekçesi:** Prusya 1871'de sona ermedi; ama **atlas tasarrufu
boyar** ve o tarihten sonra tasarrufun çatısı Alman İmparatorluğu'dur.
Emsal `macaristan` → `macaristan-habsburg`: Macaristan da 1526'da yok
olmadı, **künye devredildi.**

**Maliyeti sıfır:** veri değişmez · renk gerekmez · `renkler.py` açılmaz ·
koşu etkilenmez · altı denetimin altısı da değişmez.

---

## ⑤ RENK — `engel_kumesi()` ile, elle sayım DEĞİL

```
almanya 134 · lehistan 105 · kongre-polonyasi 31 · varsova-dukaligi 24
BİRLEŞİM 171   ← prusya penceresi (1701-1871) dördünü de örtüyor
```
🔴 **ÖLÇEMEDİĞİM:** `engel_kumesi("prusya")` **koşulamaz** — `prusya` ne
veride ne künyede var, fonksiyon default `1281-1923`e düşer. Ölçtüğüm
**vekil üst sınırıdır.**

🔴 **ÖNGÖRÜ — ölçümden ÖNCE, damgalı, dört alanıyla:**
```
① NE       ayrı renk YAPISAL OLARAK ÇÖZÜLEMEZ çıkabilir
② DAYANAK  §11 emsali: ingiltere 197 · portekiz 262 komşu → çözülemez.
           171 o bandın hemen altında.
③ MAZERET  🟡 VAR: 171 bir ÜST SINIR (Prusya, almanya'nın coğrafi ALT
           kümesi). Ve §11 "sıra bağlayabilir, ikinci geçiş çözer" diyor.
④ NEREDE   renkler.py çözücüsünün çıktısından, CIEDE2000 ΔE, eşik 12.
           🔴 BU TURDA SINANAMAZ — renkler.py motor parmak izinde, koşu canlı.
           Senaryo B seçilmezse `ölçülemedi` damgasıyla kapanır — `çürüdü`
           diye DEĞİL.
```

---

## ⑥ KAPSAMIM DIŞI — ölçtüm, araştırmadım

Buradan **doğrudan iş türetilmesin**; koordinatör ayrı sevk etsin.

| # | Bulgu |
|---|---|
| A | `varsova-dukaligi` künyesi `f:1807-07-22`, veri Varşova'da **1806-11-28**'den başlıyor ⇒ **236 gün künye penceresinin dışında** (`§3.5`). Ve aynı olay ailesi veride **üç farklı günle** duruyor: 1806-11-28 (Fransız işgali) · 1807-07-09 (Tilsit, TDV'nin günü) · 1807-07-22 (Dresden anayasası). Üçü de savunulabilir ve **üçü de farklı şeyi anlatıyor.** Karar vermedim. |
| B | `kronoloji_almanya.js`teki **14** `devlet:` değerinin **14'ünün de** künyesi yok. En büyüğü `brandenburg-prusya` — **47 madde.** |
| C | Aynı dosyanın başlığı *"index.html'e BAĞLANMADI"* diyor · **`index.html:748`de BAĞLI.** Başlık bayat (`§1.5` ailesi). |
| D | `almanya` künyesi kendi kronolojisinde *"1806-08-06 Kutsal Roma ilga edildi"* diyor ama penceresi **962-1923 kesintisiz.** |
| E | Atlastaki tek `Radom` **Darfur'da** (`yerlesimler_h2_afrika.js`). Polonya bağlamında arayan biri Sudan kaydına dönem yazabilir. |
| F | 🔴 `renkler.py` import'unda **üç uyarı** ötüyor: `OPAKLIK['yabanci']=0.44` · `['tabi']=0.6` · `['dogrudan']=0.68` *"app.js'te BULUNAMADI"*. Aracın kendi hükmü: *"parametre ayrışmış olabilir, **renk ölçümleri yanlış kalibre olur**."* **Bütün** renk ölçümlerini etkileyebilir. |

---

## ⑦ 🔴 KENDİ ALETİM YANILTTI — kayda değer

`BEKCI-KURULUMU ④` *"kritik mesajı tahtadan GERİ OKU"* diyor. Okudum ve
aletim **"PRUSYA-0903 imzalı kayıt: 0"** dedi — yani *"açılış mesajım
kayboldu"*. Koordinatöre **yanlış bir aksaklık raporu** gönderilmek
üzereydi.

```
aradığım alan   kim
gerçek alan     kimden
gerçek küme     no · zaman · kimden · kimden_kimlik · kime · mesaj · hal ·
                cevap · vade · okuyan · yanit_no · cins · teyit · kapanis ·
                dayanak · aciliyet
```
Alan kümesi **ölçülünce** M-2347 de M-2367 de yerinde çıktı. Tahta
sağlamdı; **yanılan ölçendi.**

📌 Bu, `§11`in *"olmayan bir alanı aramak"* dersinin (`o.a` vakası, 2 Eylül)
**birebir tekrarı** — ve `0`, *"yok"* ile *"bakmadım"* arasında yine ayrım
yapmadı. ⇒ **`BEKCI-KURULUMU ④`ün geri-okuma reçetesi eksik:** *"kendi
kaydını ara"* diyor ama **hangi alanda** aranacağını söylemiyor. Yanlış
alanla yapılan bir geri okuma, **her mesajı kayıp gösterir** — yani
reçetenin kendisi sahte alarm üretir.
🟢 Doğrusu: **önce `json.dumps(kayıt)` içinde ada bak** (alan adı bilmeye
gerek yok), ya da alan kümesini `set(m.keys())` ile ölç.

---

## ⑧ BİTİŞ ÖLÇÜTÜ KARŞILIĞI

```
① prusya yokluğu          🟢 DOĞRULANDI — 0/408 · 0/403 · 0/441 · 6 eksen
② 1795-1807 dört kayıt    🟢 ÖLÇÜLDÜ — üçü dolu, dördüncüsü (Chełm) YOK
③ 1793 sonrası beş kayıt  🟢 ÖLÇÜLDÜ — üçü `almanya`, Torun ve Elbing YOK
④ f/t kaynaklı            🟢 İKİ UÇ DA TEK KAYNAKTAN, TAM GÜN, alıntılı
⑤ renk engel_kumesi'nden  🟢 ÖLÇÜLDÜ (171) · 🔴 prusya'nın KENDİ kümesi
                             ÖLÇÜLEMEDİ, vekil üst sınırı — açıkça yazıldı
```

**✅ İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum.**
