# KALEM Ⓐ — `9999-01-01` · ÖLÇÜLDÜ, VE **KAPALI ÇIKTI**

**Oturum:** SINIR-KAFRIKA-0907 · **Sevk:** 1.MURAT M-3243 kalem Ⓐ
**Öngörü:** `denetim/ONGORU-SINIR-KAFRIKA-9999-0907.json` (ölçümden ÖNCE
yazıldı, mazeretleriyle)
**Aletler:** `ARAC-SINIR-KAFRIKA-9999-0907.py` · `...-9999B-0907.py`
**Yama:** **YOK — ve olmaması gerekiyor.** Gerekçesi aşağıda.

---

## 🔴 HÜKÜM — BU BİR KUSUR DEĞİL, BEYANLI VE YARGILANMIŞ BİR TASARIM

Sevk bunu bir *"veri kusuru"* diye kuyruğa almıştı. Değil. Üç ayrı yerde
beyan edilmiş:

**① Kaydın KENDİ `neden:` alanı** (ham dosyadan, verbatim):
> «1923-10-29 kesitini ETKİLEMİYOR (olay 1924-1926 arası) — kayıt tamlık
> için, atlas ufkunun dışı için eklendi.»

**② `arac/denetle.py:1585` — vakayı ADIYLA sayıyor ve HÜKME BAĞLIYOR:**
```
1 × `fas`  Şefşâven 1926-05-27 → 9999 · künye 1923-10-29'da biter
           🟢 KASITLI VE BEYANLI — kaydın kendi `neden:` alanı: …
        ⇒ Çizilen hiçbir kesiti bozmuyor: atlas 1923-10-29'da bitiyor,
          bu dönem ondan SONRA başlıyor.
        ⇒ ÇARE KAYDI SİLMEK DEĞİL: 1923-2026 ekseni açılınca `fas`
          künyesi uzayacak ve hayalet KENDİLİĞİNDEN düşecek.
```
**③ `BEKLENEN_HAYALET = 9` tavanının BİLEŞENİ.** Yani kayıt silinirse
tavan tutmaz ve denetim öter.

⚠️ **②'yi devralmadım.** Bir yorumdaki iddia hayatta kalan veri hakkında
bir taahhüttür ve güven verdiği için kimse onu ölçmez (`§11`,
`yakinlikKm` vakası). Ham dosyayı açtım: `neden:` alanı **gerçekten
orada** ve `denetle.py`nin alıntısı **birebir doğru.**

---

## ÖNGÖRÜ SINAVI — 3 tuttu · 2 çürüdü · 1 karışık

| # | öngörü | ölçüm | sonuç |
|---|---|---|---|
| ① | `9999` 1-10 kayıtta | **1 kayıt · 1 dönem** | 🟢 TUTTU (alt uçta) |
| ② | Şefşâven `s:` = 3 dönem | **5 dönem** | 🔴 ÇÜRÜDÜ |
| ③ | motor özel işleme yapmaz | yapmıyor | 🟢 TUTTU |
| ④ | sözleşme tutarsızlığı ⇒ kusur | 1 vs 3726 · ama **tasarım** | 🟡 sayı tuttu, **çıkarım çürüdü** |
| ⑤ | `denetle.py` HİÇ sormuyor | **biliyor, adıyla sayıyor, hükme bağlamış** | 🔴 ÇÜRÜDÜ |
| ⑥ | 1923-10-28'de `fas` | `fas` | 🟢 TUTTU |

### Çürüyen ikisi bütün bilgiyi taşıdı

**② — devralmanın sınırı.** Zinciri `KIMLIK-1923-0907`in raporundan ve
kendi Rif taramamdan biliyordum; **tam kaydı hiç açmamıştım.** Adını
verdiğim üç dönem birebir doğruydu — ama zincir beş dönem: öncesinde
`merini 1471→1549` ve `sadi 1549→1659` var. Devralma bana **kuyruğu**
gösterdi, **zinciri** değil.
📌 Ve bu, öngörüde ÖNCEDEN yazdığım teşhisti — mazeret olarak değil,
*"tutmazsa kusur ölçümde değil devralmada olur"* diye.

**⑤ — ve bu, ödevin kendisinin cevabı.** `denetle.py` bunu *sormuyor*
sanıyordum. Sormuyor değil: **soruyor, cevaplamış, ve tavana yazmış.**
⇒ Kalem zaten kapalıydı.

### ④ ayrı bir sınıf: sayı doğru, çıkarım yanlış
```
açık uç yazımı   `1923-10-29` 3726 dönem   ← atlasın sözleşmesi
                 `9999-01-01`    1 dönem
```
Mazeretimi önceden yazmıştım: *"9999 YAYGINSA bu kusur değil ikinci bir
sözleşmedir."* **Yaygın değil** ⇒ mazeretim tutmadı ⇒ kendi kuralıma göre
hüküm *kusur* olmalıydı. **Değil** — çünkü tasarım olmasının sebebi
yaygınlık değil **beyan.** Bir şeyin nadir olması onu kusur yapmıyor.
📌 `§11`in *"ölçüm doğru, çıkarım yanlış"* ailesi: sayıyı doğru okudum,
ondan çıkardığım hüküm yanlıştı.

🟢 **Ve `9999` kodun kendi deyimi:** `girdi.py:1268`
`if p.get("f","") <= gun < p.get("t","9999")` — eksik bir `t` için
varsayılan **zaten `"9999"`.** Yani veri, motorun kendi açık-uç
deyimini yazıya dökmüş. Tasarım okumasını güçlendiriyor.

---

## 🔴 AMA ÖLÇERKEN BAŞKA BİR ŞEY ÇIKTI — VE O KAPALI DEĞİL

Kaydın `kaynak:` alanı (ham dosyadan, verbatim):
> «islamansiklopedisi'de bu tanecik yok; **Wikipedia** '1924 retreat from
> Chaoen' — İspanyol tahliyesi 15 Kasım 1924 gecesi. Rif Cumhuriyeti'nin
> resmî sonu (27 Mayıs 1926) **kendi künyesinden**.»

İki `§4` sorunu, ikisi de kaydın kendi beyanında **açıkça yazılı**:
```
1924-11-15  TEK DAYANAK Wikipedia   → §4: «Vikipedi hiçbir zaman tek
                                        dayanak değildir»
1926-05-27  dayanak KÜNYENİN KENDİSİ → §4: «künyenin f:/t: günü bir
                                        KAYNAK DEĞİLDİR»
```
🟢 **Ve ikincisi için elimde daha iyi bir kaynak var** — bugün okudum:
TDV `fas` gövdesi *«…Abdülkerîm el-Hattâbî'yi esir alarak **(21 Mayıs
1926)** devletine son verdiler»* diyor. Veri **27 Mayıs** — altı gün fark.
⚠️ İkisi aynı olayı tarihlemiyor olabilir (esir alınma ≠ devletin resmî
sonu); **ÖLÇMEDİM**, bildiriyorum.

📌 Ve *"islamansiklopedisi'de bu tanecik yok"* beyanı **dar okunursa
doğru**: TDV `fas` Rif Cumhuriyeti'ni günleriyle veriyor (22 Haziran 1921
Annoual · 19 Eylül 1921 ilân · 21 Mayıs 1926) ama **Şefşâven'in
tahliyesini** vermiyor. `§4`ün TANECİKLİK boşluğu — beyan doğru.

---

## Ⓑ VE Ⓒ AYNI ŞEKİLDE KAPALI MI? — HAYIR, ÖLÇTÜM

```
denetle.py'de `tunus`     : 1 geçiş, ve ilgisiz (1569/1573 gidiş-gelişi)
denetle.py'de `__KIDSIZ__`: 0 geçiş
denetle.py'de `sudan`     : 6 geçiş, hepsi SAHİPSİZ/nokta bağlamında —
                            kimlik tutarsızlığıyla ilgili 0
BEKLENEN_* tavanlarının hiçbirinde Tunus ya da Sudan bileşeni YOK
```
⇒ **Üç kalemden yalnız Ⓐ kapalı.** Ⓑ ve Ⓒ gerçekten açık.

---

## ÇARE

**Ⓐ için yama YOK ve yazılmamalı.** Kaydı değiştirmek:
- `BEKLENEN_HAYALET = 9` tavanını bozar,
- `denetle.py`nin yazılı hükmünü çiğner,
- ve kaydın kendi `neden:` beyanını geçersiz kılar.

🔜 Açık kalan tek şey `kaynak:` alanının `§4` zayıflığı — **ve o ayrı bir
kalem**, `9999` kalemi değil. `data/` donuk; kayıt burada duruyor.
