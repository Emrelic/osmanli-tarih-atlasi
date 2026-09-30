# D242 — "Çözülüyor" ≠ "DOĞRU yere çözülüyor"

**Slogan:** Bir atıf denetimi *"bu ad bulunuyor mu"* sorar; *"bulunan şey
DOĞRU şey mi"* sormaz. İki soru arasındaki boşlukta kamera dört ay boyunca
yanlış kıtaya uçtu ve hiçbir kapı ötmedi.

---

## VAKA — 1 Ekim 2026

Odak kapısı (`arac/odak_cozum.js`) `yer_id` alanını `SEHIR` havuzunda **birebir
üyelik** olarak sınar. Havuz şöyle kurulur:

```js
SEHIR.add(y.ad);
SEHIR.add(y.ad.split(" (")[0]);        // app.js'in TEK esnekliği
```

Ölçüldü: **5483 ad / 4146 kayıt** — 1337 ad bu esneklikten geliyor. Esneklik
doğru eşleşmeleri **kurtarır**:

```
"Kurtuba"   → "Kurtuba (Córdoba)"      ✓
"Sicilmâse" → "Sicilmâse (Tâfilelt)"   ✓
"Pekin"     → "Pekin (Hanbalık)"       ✓
```

Ama aynı kökü paylaşan **uzak** noktalar arasında sessiz yanlış eşleşme üretir.
`index.html`in gerçek yükleme sırası taklit edilip (30 paket + 1 yerleşim
betiği, 4296 nokta) dizide **ilk eşleşen** alındığında:

| dosya | `yer_id` | kamera NEREYE | madde NEREDE |
|---|---|---|---|
| `kronoloji_cok_once1281_avrupa.js` | `Perth` | **Avustralya** −31,95/115,86 | İskoçya (1005 II. Malcolm · 1034 I. Duncan) |
| `kronoloji_cok_lehistan.js` | `Radom` | **Sudan** 9,95/24,95 | Lehistan (1505 NIHIL NOVI) |
| `kronoloji_cok_yunanistan.js` | `Mora` | **İsveç** 61,01/14,54 | Yunanistan (Mora despotluğu 1383·1395) |
| `kronoloji_cok_once1281_ortadogu.js` | `Sûr` | **Umman** 22,56/59,52 | Lübnan (1124 Kudüs Krallığı Sûr'u aldı) |

Dördü de **kapıdan geçiyordu**, çünkü dördü de "çözülüyordu".

---

## ÖLÇÜM

```
çok adaylı ad                     31
bunlardan KITALAR ARASI (>13°)    25
gerçekten kullanılan               22 yer
düzeltilen canlı yanlış yön         4  (8 geçiş)
kalan                              18  — DOĞRU çözülüyor
```

En uzak beş: `Georgetown` Δ227° · `Perth` Δ208° · `Roma` Δ205° ·
`Tula` Δ169° · `Douglas` Δ128°.

---

## 🔴 KALAN 18 DOĞRU — AMA TESADÜFEN

`Roma` **42 maddede** kullanılıyor (29'u `kronoloji_italya.js`te) ve İtalya'ya
çözülüyor. Sebep: İtalya'nın kaydının adı tam olarak `"Roma"` ve dizide
`"Roma (Queensland)"`den **önce** geliyor.

⇒ Bir yerleşim dosyası yeniden sıralanır, bir paket sırası değişir, ya da
Queensland noktası daha erken yüklenen bir dosyaya taşınırsa **42 madde
sessizce Avustralya'yı gösterir.** Doğruluk veriden değil **yükleme
sırasından** geliyor, yani bir tasarım güvencesi değil bir **tesadüf**.

---

## KURAL

1. **Belirsiz kök değil, atlasın TAM adı yazılır.** `yer_id:"Perth"` yerine
   `yer_id:"Perth (İskoçya)"`. Esneklik bir kolaylıktır, bir sözleşme değil.
2. **Çözücü, TAM `ad` eşleşmesini parantezsiz kök eşleşmesinden ÖNCE
   aramalı.** Tek sıra değişikliği 18 kırılgan eşleşmeyi sağlamlaştırır:
   `"Roma"` İtalya'nın tam adı olduğu için her zaman ① ile bulunur.
   *(Öneri; `js/` yayın yüzeyi olduğu için doğrulanmış yayına bırakıldı.)*
3. **Kapıya yeni bir soru eklenir:** *"bu ad birden çok noktaya mı çözülüyor,
   ve o noktalar birbirinden uzak mı?"* Eşik ölçüldü: **13° toplam sapma**
   25 vakayı yakalar, aynı ülke içi ikizleri eler.

---

## VE BİR ÖLÇÜM DÜZELTMESİ — yanlış ölçüm, DOĞRU soruyu doğurdu

Bu bulgu bir **hatalı** ölçümden çıktı. Koordinatörün ilk taraması "58 gizli
kırık atıf" buldu ve **yanlıştı**: havuzu yalnız `y.ad` alanından kurmuş,
`app.js`in parantez esnekliğini taklit etmemişti. `"Kurtuba"` baştan beri
çözülüyordu; o 76 geçişlik "onarım" zarar vermedi ama **gereksizdi.**

🔴 Ama aletin niçin ayrı sonuç verdiğini kovalarken havuzun **5483/4146**
oranı görüldü ve bu soru oradan çıktı.
📌 **Yanlış bir alet, neden yanıldığı sorulduğu sürece verimli olabilir.**
Yanlış olan sonucu atmak yetmez; aletin sapmasının NEREDEN geldiğini ölçmek,
sorulmamış bir soruyu doğurabilir.

---

## BAĞLI DERSLER

- `D238` tek havuz iki soruya hizmet ediyordu — kardeş vaka: orada süzgeç
  doğru ama **yeniden kullanımı** yanlıştı; burada eşleşme doğru ama
  **hedefi** yanlış.
- `CLAUDE.md §11` *"denetim var ≠ o soruyu soruyor"* ailesinin en somut hâli:
  kapı vardı, dört ay koştu, ve sorduğu soru yanlış soruydu.
- `D204` "devlet var, yeri yanlış" — aynı düşünce yerleşim ekseninde:
  `4c`/`4d` "künye penceresini aşıyor mu" sorar, "oraya hiç ait miydi" sormaz.

Rapor: `denetim/ODAK-YANLIS-KITA-1001.md`
