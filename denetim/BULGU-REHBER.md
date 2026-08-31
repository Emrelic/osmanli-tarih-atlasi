# YERLEŞİM REHBERİ (GAZETTEER) — kurulum, süzgeç, ve ölçülmüş sınırları

**Oturum:** REHBER 1923 · **Tarih:** 31 Ağustos 2026
**İzin:** Emre'nin kendi onayı (sohbette, dosya · kaynak · boyut bildirilerek).
Bir başka oturumun ilettiği karar bu onayın yerine geçmez; ayrıca soruldu.

---

## 1. NE İNDİRİLDİ

```
GeoNames · allCountries.zip · https://download.geonames.org/export/dump/
lisans        CC BY 4.0 (atıf yeterli, kayıt/anahtar gerekmiyor)
boyut         420.737.984 bayt (~401 MB) · açılmış 1.703 MB
sürüm         Last-Modified: 31 Ağu 2026 01:55 GMT
indirme       163 saniye
```

🔴 **HAM DOSYA DEPONUN DIŞINDA** — oturum scratchpad'inde
(`…/scratchpad/rehber/allCountries.zip`). Git onu hiç görmüyor,
`.gitignore` bile gerekmiyor, **siteye hiç ulaşmıyor.**

⚠️ Scratchpad oturuma özel ve kalıcı değil. Sürekli lazım olacaksa
`veri-kaynak/ham/` + `.gitignore` doğru yer — ama o karar koordinatörün.

---

## 2. SÜZGEÇ — tampon 50 km, ve gerekçesi ölçüm

**Soru:** 1923 sınırı bugünkünden ayrıldığı için, tampon ne kadar geniş olmalı?

**Ölçüm:** 1923'te sahibi X olan ama bugün başka ülkede duran kayıt,
sınırın kaydığı yeri ele verir. Türkiye kuşağında (33-44 K / 24-48 D)
403 sahipli kaydın **399'u uyumlu, 4'ü sapıyor**:

| km | kayıt | 1923 | bugün |
|---|---|---|---|
| **22,3** | Antakya | fransa-cumhuriyet | TUR |
| 1,4 | Sarp | OSMANLI | GEO |
| 0,9 | İskenderun | fransa-cumhuriyet | TUR |
| 0,5 | Ayn el-Arab (Kobani) | fransa-cumhuriyet | TUR |

⇒ en büyük ayrışma **22,3 km** (Hatay, 1939). Bu bir **ALT SINIR** —
ıssız şeritte kayıt yoktur, oralarda kayma daha büyük olabilir
(Küçük Ağrı 1932 gibi). **22,3 × 2 ≈ 45 → 50 km.**
50 km ayrıca çift kurmak için gereken iki yaka derinliğini de kapsıyor.

---

## 3. 🔴 SÜZGEÇTE YAKALANAN KUSUR — kıyı sınır değildir

İlk sürüm ülke poligonunun `boundary`sini sınır saydı. **`boundary` kıyı
çizgisini de içerir.** Ölçüldü:

```
dünya sınır örneği     660.252
KARA sınırı örneği     173.458  (%26,3)
⇒ %74'ü KIYI
```

Kıyı bir sınır değildir — karşı yakaya nokta konmaz, çünkü karşı yaka
deniz. Ve nüfus kıyıda yoğun olduğu için süzgeç anlamını yitirirdi.
**v2 yalnız komşu bir ülke poligonuna değen örnekleri sayıyor.**

Maskelenen hücre (0,25°, 50 km yarıçap): **44.496**

---

## 4. PİLOT SÜZGEÇ ÇIKTISI — Türkiye kuşağı

```
kutu 35-43,5 K / 25-46,5 D · ülkeler TR GE AM AZ IR IQ SY GR BG
P sınıfı yerleşim              90.459
kod dağılımı   PPL 82.287 · PPLX 2.979 · PPLQ 2.238 · PPLA2 1.050 · PPLA3 848
KARA sınırına ≤50 km           45.827
   TR 22.227 · SY 5.882 · IQ 3.921 · GE 3.545 · IR 3.051
   GR 2.298 · AM 2.132 · BG 1.613 · AZ 1.158
```

---

## 5. 🟢 REHBERİN ÇÖZDÜĞÜ İKİ ŞEY

**① KOORDİNAT.** Dün üç aday koordinatını hafızadan tahmin etmiş ve
güvenim orta olduğu için **yazmayı reddetmiştim.** Rehber ölçtü —
reddetmek doğru karardı:

| yer | hafızamdaki | GeoNames | hata |
|---|---|---|---|
| Sero | 37,7333 / 44,6167 | 37,7275 / 44,6427 | **2,3 km** |
| Şemdinli | 37,3167 / 44,5667 | 37,3051 / 44,5742 | **1,7 km** |
| Uşnu | 37,0475 / 45,0958 | 37,0397 / 45,0983 | 0,9 km |

Hedef 5 km olduğu için 2,3 km'lik hata hedefin yarısı kadardı.

**② TARİHÎ AD.** TR yakasındaki köy adlarının çoğu 1950-60 yeniden
adlandırması (Altınsu · Günyazı · Kırıkdağ · Elaçmaz · Karlı) — 1923'te
o adla yoktular. GeoNames'in **`alternatenames`** alanı eski adı veriyor:

```
Esendere  → Bacirga · Bacirge · Bajirge
Albayrak  → Der · Şikefti · Zapbaşı
Şemdinli  → Şemdinni · Navşar
Sero      → Sero · Serow · Siroo · سرو
Qoţūr     → Kotur · Kutur · Qatur   (veride ZATEN "Kotur" — doğrulandı)
```

---

## 6. 🔴 REHBERİN ÇÖZMEDİĞİ ŞEY — ve bu kayda geçmeli

**GeoNames modern bir rehberdir. Bir yerleşimin 1923'te var olduğunu
SÖYLEMEZ.** Varlığı ve konumu doğrular; sürekliliği doğrulamaz.

⇒ Yazılan her kayıtta `kaynak:` alanına **açıkça** şu yazıldı:
*"yerleşimin varlığı ve konumu doğrulandı, 1923'te de var olduğu ayrıca
belgelenemedi."* Bu bir zayıflık değil, **ölçülmüş bir sınır** — ve
gizlenmemesi, kaynağı yazılmamış bilgiden ayırt edilmesini sağlıyor.

⚠️ Ve rehber şu iki engeli **hiç çözmez**, çünkü onlar koordinat sorusu
değil: (a) `rusya` kimlik hayaleti (Ermenistan/Gürcistan yakası),
(b) 1932 Küçük Ağrı artefakt şüphesi. Ayrıntı: `BULGU-SINIR-DOGU.md`.

---

## 7. SİTE YÜKÜ — Emre sordu, ölçüldü

> *"gerekirse … siteye yük olmaması için sadece gerektiği kadarı kullanılır"*

İndirme boyutunun siteye etkisi **sıfır** (ham dosya depo dışı). Asıl
kalem **kaç nokta yazdığımız**:

| | CLAUDE.md §5 | 31 Ağu 2026 ölçümü | |
|---|---|---|---|
| `data/donemler.js` | 12 MB | **36,7 MB** | 3,1× |
| `data/devletler_harita.js` | 14 MB | **30,1 MB** | 2,2× |
| üretilmiş toplam | 26 MB | **66,7 MB** | |
| yerleşim | | 2.610 | |
| **nokta başına** | | **26,2 KB** | |

⇒ Her yeni sınır noktası tarayıcıya **~26 KB** üretilmiş veri ekliyor.
100 nokta ≈ +2,6 MB · 500 nokta ≈ +13 MB.
📌 **CLAUDE.md §5'teki 12/14 MB satırı 2-3× bayat.**

---

## 8. PİLOT SONUCU

Türkiye–İran sınırı, 37,4–38,7 K (113 örnek ≈ 226 km):

```
TABAN                    ortanca 10,69 km · en kötü 18,8 · ≤5km %14
+Bacirge ↔ Sero          ortanca  2,98 km · ≤5km %55
+iki çift birlikte       ortanca  4,53 km · ≤5km %52     ← YAZILAN
```
**Ortanca 10,69 → 4,53 km; 5 km hedefinin altına indi.**

🔴 **VE BİR "TEOREM" DÜZELTİLDİ.** *"Tek taraflı ekleme sapmayı BÜYÜTÜR"*
diye yazmıştım ve şartnameye geçti. **Fazla genelmiş:**
```
+Şemdinli tek   10,69 → 11,68   kötüleşti
+Sero tek       10,69 →  6,84   İYİLEŞTİ
```
Doğrusu: sapma `|dB−dA|/2` olduğu için **zaten uzak olan** yakaya nokta
eklemek sapmayı küçültür, **yakın olana** eklemek büyütür. Yön, o
kesimin **işaretine** bağlı — mesafeye değil.
