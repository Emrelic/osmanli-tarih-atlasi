# ODAK — "ÇÖZÜLÜYOR AMA YANLIŞ YERE" kusur sınıfı

*1 Ekim 2026 · koordinatör YILDIRIM BAYEZIT · ölçüm ve dört düzeltme.*

## ⓪ BİR CÜMLEDE

Odak kapısı *"`yer_id` çözülüyor mu"* sorar, **"DOĞRU yere mi çözülüyor"
SORMAZ.** Ölçüldü: 25 ad iki ayrı kıtadaki noktaya çözülüyor, 22 yerde
gerçekten kullanılıyor, ve **dördünde kamera yanlış kıtaya uçuyordu** —
hiçbir kapı ötmeden.

---

## ① SEBEP — `app.js`in "TEK esnekliği"

`arac/odak_cozum.js` havuzu şöyle kurar:
```js
SEHIR.add(y.ad);
SEHIR.add(y.ad.split(" (")[0]);        // app.js'in TEK esnekliği
```
⇒ Havuz hem tam adı hem **parantezsiz kökü** tanır. Ölçüm: **5483 ad / 4146
kayıt** — yani 1337 ad bu esneklikten geliyor.

Bu esneklik **doğru** eşleşmeleri kurtarır:
```
"Kurtuba"  → "Kurtuba (Córdoba)"       ✓
"Sicilmâse" → "Sicilmâse (Tâfilelt)"   ✓
"Pekin"    → "Pekin (Hanbalık)"        ✓
```
Ama aynı kökü paylaşan **uzak** noktalar arasında sessiz yanlış eşleşme üretir.

---

## ② ÖLÇÜM — 31 çok adaylı ad, 25'i kıtalar arası

En uzak on:
```
ad             aday 1                                    aday 2                                 Δ
Georgetown     Georgetown (Stabroek) [6,80/-58,16]       Georgetown [-18,29/143,55]           227°
Perth          Perth (İskoçya) [56,40/-3,44]             Perth [-31,95/115,86]                208°
Roma           Roma [41,90/12,50]                        Roma (Queensland) [-26,57/148,79]    205°
Tula           Tula [54,19/37,62]                        Tula (Tamaulipas) [23,00/-99,72]     169°
Douglas        Douglas (Arizona)                         Douglas (Man)                        128°
Santa Fe       Santa Fe [35,69/-105,94]                  Santa Fe (Arjantin) [-31,63/-60,70]  113°
Loreto         Loreto (Maranhão) · (Baja California) · (Mojos)                                 99°
Aveiro         Aveiro (Tapajós) [-3,61/-55,32]           Aveiro [40,64/-8,65]                  91°
York           York [53,96/-1,08]                        York (Toronto) [43,65/-79,38]         89°
La Paz         La Paz [-16,50/-68,15]                    La Paz (Baja California Sur)          83°
Akra           Akra [36,74/43,89] (Irak)                 Akra (Accra) [5,55/-0,20]             75°
Plymouth       Plymouth (Massachusetts)                  Plymouth [50,38/-4,14]                75°
Lagos          Lagos (Eko) [6,45/3,40]                   Lagos (Algarve) [37,10/-8,67]         43°
```

---

## ③ 🔴 DÖRT CANLI YANLIŞ YÖNLENDİRME — DÜZELTİLDİ

Çözüm sırası `index.html`in yükleme sırasıyla taklit edildi (30 paket + 1
yerleşim betiği, 4296 nokta birleştirildi) ve dizide **ilk eşleşen** alındı —
`app.js` de böyle yapar:

| dosya | `yer_id` | kamera NEREYE uçuyordu | madde NEREDE | düzeltildi |
|---|---|---|---|---|
| `kronoloji_cok_once1281_avrupa.js` | `Perth` | **Avustralya** [-31,95/115,86] | İskoçya (1005 II. Malcolm · 1034 I. Duncan · Alba/Strathclyde) | → `Perth (İskoçya)` (4 madde) |
| `kronoloji_cok_lehistan.js` | `Radom` | **Sudan** [9,95/24,95] | Lehistan (1505 NIHIL NOVI) | → `Radom (Polonya)` (1) |
| `kronoloji_cok_yunanistan.js` | `Mora` | **İsveç** [61,01/14,54] | Yunanistan (1383 Theodoros Palaiologos · 1395 Osmanlı girişi) | → `Mora (Tripoliçe)` (2) |
| `kronoloji_cok_once1281_ortadogu.js` | `Sûr` | **Umman** [22,56/59,52] | Lübnan (1124 Kudüs Krallığı Sûr'u aldı) | → `Sûr (Tyre) — Lübnan` (1) |

Toplam **8 geçiş.** `node --check` temiz. Riskli kullanım **22 → 18**.

---

## ④ KALAN 18 — DOĞRU çözülüyor, ama TESADÜFEN

```
Roma       @ italya (29) · once1281_avrupa (4) · 1923_1945 (5) · bizans (2)
             ispanya (1) · macaristan (1)              → İtalya ✓
La Paz     @ 1923_1945 (6) · guney_amerika (2)         → Bolivya ✓
Santa Fe   @ kuzey_amerika (1)                         → New Mexico ✓
York       @ once1281_avrupa (2)                       → İngiltere ✓
Plymouth   @ ingiltere (1)                             → İngiltere ✓
```
🔴 **Ama bu doğruluk KIRILGAN.** Şu an doğru çalışıyor çünkü İtalya'nın
kaydının adı tam olarak `"Roma"` ve dizide Queensland'den **önce** geliyor.
Bir yerleşim dosyası yeniden sıralanır, bir paket sırası değişir ya da
Queensland noktası daha erken yüklenen bir dosyaya taşınırsa **42 madde
sessizce Avustralya'yı gösterir** ve hiçbir denetim bunu görmez.

---

## ⑤ KALICI ÇARE — ÖNERİ, `js/` değişikliği (yarının doğrulanmış yayınına)

Çözücü **tam `ad` eşleşmesini, parantezsiz kök eşleşmesinden ÖNCE** aramalı.
İki geçiş, tek sıra değişikliği:
```
① önce: y.ad === hedef                    (tam ad — KESİN)
② sonra: y.ad.split(" (")[0] === hedef    (kök — ESNEK)
```
Bu tek değişiklik 18 kırılgan eşleşmenin hepsini sağlamlaştırır: `"Roma"`
İtalya'nın **tam adı** olduğu için her zaman ① ile bulunur ve Queensland'e
asla düşmez. Esneklik korunur (Kurtuba hâlâ ② ile çözülür).

⚠️ `js/app.js` yayın yüzeyidir ve bu gece **dokunulmadı** — bir yarım yayın
30 Eylül'de siteyi kırdı. Değişiklik tarayıcıda doğrulanarak yapılmalı.

## ⑥ İKİNCİ ÇARE — kapıya YENİ BİR SORU

`arac/odak_cozum.js` bugün *"çözülüyor mu"* sorar. Eklenmesi gereken soru:
**"bu ad birden çok noktaya mı çözülüyor, ve o noktalar birbirinden uzak mı?"**
Eşik ölçüldü: 13° toplam sapma 25 vakayı yakalıyor, 6'sını (aynı ülke içi
ikizler) eliyor. Bu, kapının bugün **sormadığı** ve sormadığı için dört yanlış
yönlendirmeyi dört ay boyunca göremediği sorudur.
📌 `CLAUDE.md §11`: *"denetim var ≠ o soruyu soruyor."*

---

## ⑦ VE BİR ÖLÇÜM DÜZELTMESİ — kendi hakkımda

Bu geceki ilk ölçümüm **58 gizli kırık atıf** bulduğunu söylüyordu ve
**yanlıştı**: havuzumu yalnız `y.ad` alanından kurmuştum, `app.js`in parantez
esnekliğini taklit etmemiştim. `"Kurtuba"` baştan beri çözülüyordu.
⇒ O 76 geçişlik "onarım" zarar vermedi (iki biçim de çözülüyor) ama
**gereksizdi.** Bu, gecenin aletin dördüncü kez yanıldığı vakası — ve bu sefer
alet bendim.
🔴 Ama aynı yanlış ölçüm, **doğru** bir kusuru ortaya çıkardı: parantez
esnekliğini taklit etmeye çalışırken havuzun 5483/4146 oranını gördüm ve bu
soru buradan doğdu. **Yanlış ölçüm, sorulmamış bir soruyu doğurdu.**
