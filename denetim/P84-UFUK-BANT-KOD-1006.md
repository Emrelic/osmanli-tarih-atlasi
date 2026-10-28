# P84-UFUK-BANT-KOD-1006 — ufuk bandının beş kusuru, KOD tarafı

Oturum: P84-UFUK-BANT-KOD-1006 (eski adı: HAZIR KITA 0610 1600) · 6 Ekim 2026 · görevi veren: UMIT İRTİBAT
Temel: `origin/makine/umit` @ `b2d4c2ff` (worktree `C:\atlas-p84-ufukkod`). Satır numaraları bu commit'e göredir.
Şartname: `GOREV-ORTAK.md` + `PAKET-0084.md §A` (A.0–A.3).
Kapsam: YALNIZ KOD. Bant verisi (265 MB) bu makinede yok (`C:/atlas-kosu17|18/data/ufuk_bantlari.js` YOK,
ölçüldü). Bu rapordaki her sayı ya koddaki bir SABİTTİR ya da o sabitten yapılan hesaptır; harita ölçümü yok.
Görseller: **AÇILMADI.** Kusurların metni, mekanizmayı koddan teşhis etmeye yetti. Konum öngörüleri
(§8) bu yüzden görselle değil, HAVVA'nın KOŞU 20 ölçümüyle sınanacak.

---

## 0. MÜKERRER KAPISI (ölçüm)
`denetim/` altında bant/ufuk adıyla 50+ dosya var. İçerikleri okunan dört dosya, işle ilgili olanlar:
| dosya | ne diyor | bu işle ilişkisi |
|---|---|---|
| `PAKET-0083-E-BANT-ARAYUZ.md` §1.1 | `ufuk-bant-alan`, `SIYASI_KIP`te YOK ⇒ yumuşak kipte taban 0.44, bant 1 | **H-0002 ① = MÜKERRER.** Aynı teşhis, bu raporda yeniden doğrulandı (§6) |
| `MOTOR-BANT-TAM-1005.diff` + `ARAYUZ-BANT-TAM-1006.diff` | H-0013 için: bantlar iç içe TAM bölge olsun, 7/10'da TABAN GİZLENSİN | H-0020 ①②⑤'in **önceki çaresi**. Mekanizma adı yoktu (*"halkanın iç kenarı taban peteğinden başka kesilmiş"*); bu rapor mekanizmayı adıyla bulur ve o çarenin YENİ kusurlarını öngörür (§7) |
| `UFUK-KELEPCE-0930.md` §2 | kelepçe alanı normalleştiriyor; Emre kararı: "çöl ufku 7 gün, SABİT" (seçenek a) | ③/④'ün çöl kolu buradan doğuyor (§3) — o belge bant seviyesine etkisini YAZMAMIŞ |
| `UMIT-W48-UFUK-BANT-1006.md` | zincir: motor → `kodla.py` → `_ust` + `_parcalar` → `app.js` | yalnız zincir; teşhis yok |

⇒ H-0020 ①–⑤ adıyla teşhis edilmemiş. H-0002 ① daha önce teşhis edilmiş; çaresi var.
`P84-ROTUS-TASARIM-1006.md §3` kendi sonunda *"H-0020 ⑤ (bant katmanı binmesi) bu ölçümle ÇÖZÜLMEDİ"* diyor.

---

## 1. BANDIN YOLU — koddan, sırayla (ölçüm)
```
① ERİŞİM ALANI   _yr_F (Dijkstra bedeli, km-eşdeğeri)                       :1856-1871
   KELEPÇE      _YR_ESIK = 40 sa·5,04 her yerde · ÇÖL hücresinde 56 sa·5,04  :1932-1934
                 (MOTOR_COL_UFUK_SAAT=56 · KOSU-DEVIR-CEVRIMI.md:151)
   NORMALLEŞTİRME _yr_F = _yr_F / _YR_ESIK , taban kontur seviyesi 1.0       :2061-2068
② KONTUR         taban: _yr_kontur(1.0) → _YR_UZAK                           :2120
                 bant b: _sv = b / YURUYUS_SAAT  (56→1,4 · 80→2,0)           :2165
③ PETEK KESİMİ   _BANT_HAM[b][i] = _yr_kes(kara_kesik, i, bant=b)            :3601-3610
                 PETEK_D[i]      = _yr_kes(kara_kesik, i)  (aynı 40 sa kontur):3611-3622
④ ADA KURALI     PETEK_D :3672-3721 · bantlara AYRI kopya (kendi örtüsü)     :3738-3775
⑤ DEVRET         yalnız PETEK_D (bantlara YOK)                               :3804-3943
⑥ ÇÖL TAVANI     300 km disk (COL_TAVAN_KM :4157) · PETEK_D + bantlar        :4212-4364
⑦ GÖVDE (yabancı) _yabanci_govde_hesap                                       :6665-6690
     petek_epok(a)  (ölü/kurulmamış komşunun payı dağıtılmış)  → kapat (≈16 km) → delikleri_doldur
     → gosterim_duzelt (B2 enklav ≤250 km + B3 koridor) → ∩KARA → ∩ PUAN BÖLGESİ (:6683-6688)
     → _komsu_toprak_cikar (:6820) → seyrelt (SEYRELT_TOL 0,03° :7713, :7793)
   GÖVDE (Osmanlı)  :7354-7362 — epok + kapat + delikleri + gosterim; PUAN KAPISI YOK
     (`_puan_bolgesi` yalnız :6685 ve :7061'de çağrılıyor — ikisi de yabancı yol)
⑧ BANT YAZIMI    halka: _BANT_HAM[b][i] − _BANT_HAM[b−1][i]                  :7869-7880
                 ilk bant "<=5": PETEK_D[i] (statik, epoksuz)                :7870
                 devlet bandı: ∪ halka[j], j ∈ gövdenin `ak` kümesi           :7886-7902
                 ⇒ bant ⑤'ten ⑦'ye KADAR HİÇBİR GÖVDE AŞAMASINDAN GEÇMEZ
⑨ ARAYÜZ         7 gün = TABAN (devletler_harita gövdesi) + halka "5-7"       app.js:783
                 10 gün = TABAN + "5-7" + "7-10" (artışlar toplanır)
                 bant katmanı devlet-dolgu'nun ALTINDA, opaklık 1 (sabit)     app.js:2024-2028
                 SIYASI_KIP'te YOK ⇒ yumuşak kipte taban 0.44 / bant 1        app.js:16077-16082
```
**Puan bölgesi** (`:5910-5913`, döngü `:5996-6001`): devletin AKTİF yerleşimlerinden düz (Öklid)
mesafeyle her hücreye `<200 km → 4 · <300 → 2 · <400 → 1` puan toplanır, `≥4` boyanır. Yani tek
yerleşimin çevresinde ~200 km, iki yerleşimin 300 km içinde kalan yerde ~300 km. (Döngüde örtme/dilim
YOK — `:5931` öncesindeki yorum örtmeden söz ediyor; okunan satırlarda uygulanmıyor. Ayrıca ölçülmedi.)

**İki sayı, mekanizmaların hepsini taşıyor** (sabitlerden hesap, `NEHIR_KM_SAAT=5,04` `:1451`):
```
genel ufuk   40 sa → 201,6 km-eş · 56 sa → 282,2 · 80 sa → 403,2
ÇÖL (kelepçe, normalleştirilmiş alan): taban 1,0×56 = 56 sa → 282,2 km-eş
                                       bant 56: 1,4×56 = 78,4 sa → 395,1
                                       bant 80: 2,0×56 = 112 sa → 564,5
sürtünme ≥ 1 (`1 + EGIM_CARPANI·eğim`) ⇒ km-eş ≥ düz km  ⇒ erişim düz mesafede bu sayıları AŞAMAZ
```

---

## 2. ① ve ② — ARADA BOŞLUKLU HALKA ↔ BOŞLUKSUZ YAPIŞMA

**ÖLÇÜM**
- Halkanın İÇ kenarı `_BANT_HAM[40]` (kapısız 5 günlük erişim) — `:7873-7879`.
- Tabanın DIŞ kenarı yabancı devlette PUANLA KESİLMİŞ gövde — `:6683-6688`. Bant bu kapıdan
  geçmez (`:7886-7902`'de `_puan_bolgesi` yok).
- Genel arazide 5 günlük erişim ≤201,6 km (düz) ≈ puan halkasının 200 km'si ⇒ kapı en çok ~1,6 km ısırır.
- Çölde kelepçe 5 günlük erişimi **282,2 km**'ye çıkarır (`:1934` + `:2067`), çöl tavanı 300 km'de keser
  (`:4157`). Puan kapısı tek yerleşimin çevresinde 200 km'de keser.

**HÜKÜM — bir kusur, iki görünüm; ayıran koşul bir eşitsizlik:**
```
BOŞLUK (①)  ⇔  5 günlük erişim  ⊄  puan(≥4) bölgesi      (gövde kesildi, halka kesilmedi)
YAPIŞMA (②) ⇔  5 günlük erişim  ⊆  puan(≥4) bölgesi      (gövde = erişim = halkanın iç kenarı)
```
- Boşluğun genişliği ≈ `erişim − puan sınırı`. Çölde tek yerleşimin çevresinde **~200 → ~282 km**
  arası BOŞ, sonra **282 → 300 km** arası ince halka (7 günde de 10 günde de çöl tavanı 300'de
  durdurur). Emre'nin *"Sahra'da da"* dediği tam bu.
- Yoğun yerleşimde (iki yerleşim 300 km içinde ⇒ puan bölgesi ~300 km'ye çıkar) ya da yüksek
  sürtünmede erişim puan bölgesinin içinde kalır ⇒ ②.
- **Osmanlı'da ① bu mekanizmayla OLAMAZ** (Osmanlı gövdesi puan kapısından geçmiyor). Osmanlı
  kenarında boşluk görülürse sebep başkadır (aşağıda ikincil kaynaklar). ← **sınanabilir ayrım.**
- İkincil, küçük kaynaklar (ölçeği km mertebesi, ① gibi görünür ama asıl kaynak değil):
  (a) DEVRET `:3804-3943` yalnız PETEK_D'ye uygulanıyor: i'den j'ye geçen parça `_BANT_HAM[40][i]`
  içinde kalır ⇒ i'nin halkası o parçanın ÖTESİNDEN başlar; j başka devletse arada yabancı renk şerit.
  (b) Gövde `seyrelt`ten geçer (0,03° ≈ 3,3 km, `:7713`), bant geçmez ⇒ kılcal şerit.

---

## 3. ③ ve ④ — 5 ile 7 (ya da 5/7/10) arasında fark yok

Fark yokluğunun **dört ayrı kaynağı** var; ikisi KUSUR, ikisi coğrafyanın/kararın GERÇEK sonucu.
| # | nerede | mekanizma (dosya:satır) | sınıf |
|---|---|---|---|
| **K1** | çöl | kelepçe taban çöl erişimini 56 saate çıkarıyor (5 gün değil 7 gün); bantlar normalleştirilmiş alanın katı ⇒ 78,4/112 sa; çöl tavanı 300 km hepsini aynı yerde kesiyor (`:1934`, `:2067`, `:2165`, `:4157`) ⇒ 5→7 yalnız ~282→300 km'lik ince şerit, 7→10 ≈ 0 | **KUSUR** (bantlar "çöl 7 günde SABİT" kararını çiğniyor, fazlayı çöl tavanı SAKLIYOR) — ama kararın kendisi çölde **5 = 7 = 10** ister ⇒ yama sonrası fark tümden kalkar, **BEYAN edilir** |
| **K2** | yabancı, seyrek yerleşim | ①'in öbür yüzü: halka puan kapısından geçmediği için çizilir, ama tabana YAPIŞMAZ. Puan kapısı banda uygulanınca (yama M2) halka puan bölgesinin dışında kalan her yerde silinir ⇒ seyrek bölgede 5 = 7 = 10 | M2 sonrası **GERÇEK** (boyanma kuralı: tek yerleşimden 200 km ötesi boyanmaz) ⇒ **BEYAN** |
| **K3** | yoğun yerleşim, ada, dağ | halka petekle sınırlı (`_yr_kes` `geo`=Voronoi hücresi `:3605`). 40 saatte hücre zaten dolmuşsa 56/80 saat ekleyecek yer bulamaz | **GERÇEK** (coğrafya + yoğunluk) ⇒ **BEYAN** |
| **K4** | ölü/kurulmamış yerleşim komşuluğu | gövde `petek_epok(a)` ile ölü hücrenin payını komşuya verir (`:5176`, `:6669`); halka ise statik `_BANT_HAM` + yalnız AKTİF petekler (`:7889`) ⇒ ölü hücrede 7/10 artışı HİÇ yok | **KUSUR** (bu yamada YOK; §7'de) |
| (K5) | karar bölgesi dışı (tohumsuz kara saçağı) | `_yr_kes`te bütçe dışı pay `TAVAN_DAIRE[i]` ile kesilir (`:2331-2335`) — tavan bütçeye göre değişmez | yapısal; küçük; ölçülmedi |

**Beyan önerisi** (lejant/yardım metni, arayüz): *"Çölde yürüyüş ufku 7 günde sabittir (Emre kararı);
5/7/10 seçimi çölde değişiklik göstermez. Yoğun yerleşimde bölgeler 5 günde zaten komşuya dayanır.
Yerleşimden 200 km'den uzak, tek yerleşimin beslediği toprak hiçbir ufukta boyanmaz."*

---

## 4. ⑤ — KATMANLAR ÜST ÜSTE: 0083-B ile aynı mı?

**ÖLÇÜM**
- Halka hiçbir gövde aşamasından geçmez (§1 ⑧). Gövde ise `kapat` (≈33 km'den dar boşluğu kapatır,
  `:2885-2898`), `delikleri_doldur`, `gosterim_duzelt` (B2 ≤250 km köprü, B3 koridor) ile BÜYÜR.
- Halka katmanı `devlet-dolgu`nun ALTINDA ama `vassal/himaye/osmanli-dolgu`nun da altında
  (`app.js:2024-2028`; bu üç katman `:2089`, `:2171`, `:2175`'te sonradan ekleniyor).
- Yumuşak kipte (varsayılan) gövde 0.44/0.60/0.68, halka 1 ⇒ gövdenin halkaya bindiği her yer
  ÜÇÜNCÜ bir ton olarak görünür.

**HÜKÜM — üç alt sınıf; biri 0083-B ile AYNI, ikisi BANDA ÖZGÜ:**
| alt sınıf | mekanizma | 0083-B ile |
|---|---|---|
| ⑤a | gövdenin `kapat()` ile büyüyen payı halkanın üstüne biner — kendi halkası da olur, komşunun halkası da | **AYNI MEKANİZMA** (kapat, B1 yasağından önce). Ama 0083-B yaması yalnız *"eklenen bileşende yabancı NOKTA varsa"* der; kendi halkasının üstüne binmeyi hiç sormaz ⇒ **0083-B yaması bunu KAPATMAZ** |
| ⑤b | B2/B3 köprüleri + `delikleri_doldur` gövdeyi halkanın üstüne taşır; halka bu aşamaları görmez | **BANDA ÖZGÜ** (iki katman farklı boru hattından geçiyor) |
| ⑤c | ada kuralının bant kopyası her bütçede KENDİ örtüsünün boşluğunu dağıtır (`:3738-3775`). Bir parça 56'da `en`e verilip 80'de k'nin kendi erişimiyle dolarsa: parça hem en'in "5-7" halkasında hem k'nin "7-10" halkasında ⇒ 10 günde halka-halka binmesi (tekdüzelik `_BANT_HAM[56][en] ⊆ _BANT_HAM[80][en]` bozulur). Ölçek: o aşamanın kendi kaydı "3 petek, 805 km²" | **BANDA ÖZGÜ**, küçük |

⇒ ⑤ **0083-B'nin kopyası DEĞİL.** Payı en büyük olan muhtemelen ⑤a+⑤b (gövde halkanın üstünde) —
ve opaklık yaması (§6) bunun TONUNU azaltır ama YERİNİ değiştirmez. `P84-ROTUS-TASARIM-1006 §3`teki
H-0016 binmesi (iki GÖVDE arası, kapat) ile ⑤a aynı işleve dayanır ama katmanlar farklıdır (gövde–gövde
değil gövde–halka).

---

## 5. ÇÖZÜM YAMASI — `P84-UFUK-BANT-KOD-1006-MOTOR.diff` (MOTOR TUZU · UYGULANMADI)
`git apply --check` temiz · LF (CR 0) · `py_compile` temiz · `MOTOR-BANT-TAM-1005.diff` ile **iki sırada
da** üst üste uygulanıyor (ölçüldü) — yani hangi yol seçilirse seçilsin bu yama ona biner.
- **M1 — bant eşiği** (`:2061-2068`, `:2165`, `:2172`): normalleştirilmemiş alan `_yr_F_ham` saklanır;
  bant b için eşik genel hücrede `b·5,04`, ÖZEL hücrede (eşiği genel bütçeden farklı: çöl kelepçesi
  · BTB) SABİT `_YR_ESIK`. Kelepçe/BTB kapalıyken eski satır birebir.
- **M2 — puan kapısı banda** (`:7886-7902`): yabancı devlet bandı `_puan_bolgesi(did, frozenset(ak), f)`
  ile kesişir; anahtar gövdeninkiyle aynı ⇒ bölge bit bit aynı. Osmanlı'ya uygulanmaz (gövdesine de
  uygulanmıyor). `PUAN_KAPALI` saygı görür.

**ÖNGÖRÜ — TAM İNŞA koşusunda (MOTOR_COL_UFUK_SAAT=56, MOTOR_UFUK_BANT=40,56,80):**
| kusur | sonuç | nereye bakılarak ölçülür |
|---|---|---|
| ① yabancı | **KAPANIR** (halka puan bölgesinin dışına taşamaz; gövdenin puan kenarı = halkanın puan kenarı) | Sahra kutusunda yabancı devlet için `(5-7 halkası ∪ 7-10) − puan bölgesi` alanı = **0**; tabanla halka arasındaki boşluk alanı ≈ 0 (kalan: §2 ikincil kaynaklar, km ölçeğinde) |
| ① Osmanlı | DEĞİŞMEZ — zaten bu mekanizmayla doğmuyor | Osmanlı kenarında boşluk varsa kaynağı devret/seyrelt'tir |
| ② | değişmez (doğru davranış) | — |
| ③④ çöl | **5 = 7 = 10 KESİN** (K1): her iki bantta çöl hücresi eşiği 56 sa | kelepçeli hücrelerde halka alanı ≈ 0 · log: `Ⓑ bant tavanı` satırında kısalan bant-petek sayısı DÜŞER (artık tavana dayanan fazla yok) |
| ③④ seyrek yabancı | 7/10 farkı kaybolur (K2) — halka silinir | koşu 19'a göre bant km² (log `bant 5-7 … km²`) **DÜŞER**; ne kadar — ölçülmedi |
| ③ yoğun / K4 | değişmez | — |
| ⑤a/⑤b | DEĞİŞMEZ (bu yama gövde aşamalarını banda uygulamaz) | `halka ∩ gövde` alanı koşu 19 ile aynı mertebe |
| ⑤c | değişmez | — |
| maliyet | **ÖLÇÜLMEDİ.** M1: bant başına bir dizi bölme + pad (saniyeler). M2: süreç yolunda `_PUAN_ONBELLEK` işçilerde kalır ⇒ ana süreç her yabancı (did, aktif) için bir kez yeniden hesaplar; bantlar paylaşır. Eski ölçüm "dönem başına 3,5 sn" LEGO ayıklamasından ÖNCEydi (sonra ~%70 indi). | kutu koşusunda `asama("Ⓑ ufuk bantları")` süresi |

---

## 6. H-0002 ① — 5 gün bandının rengi ÇOK KOYU

**ÖLÇÜM:** renk `DOLGU_RENK[r.d]` (`app.js:790`) — tabanla AYNI renk, `renkler.py` BOYALAR'dan gelir.
Koyuluk renkten değil OPAKLIKTAN: bant `fill-opacity: 1` (`app.js:2028`), `SIYASI_KIP.yumusak`ta
taban 0.44 (`app.js:16080`), bant sözlükte yok ⇒ her kipte 1. Yumuşak kip varsayılan açık.
**HÜKÜM:** `PAKET-0083-E §1.1` ile **aynı teşhis (mükerrer)**. Çare `app.js`te ⇒ **MOTOR TUZU DEĞİL**,
koşu beklemez. Yama: `P84-UFUK-BANT-KOD-1006-APPJS.diff` (yalnız SIYASI_KIP'e bir satır; `node --check`
temiz; apply temiz). ⚠️ `ARAYUZ-BANT-TAM-1006.diff` aynı satırları yazar — **ikisi birlikte uygulanmaz;**
o yol seçilirse bu diff düşer. `-RENK.diff` YAZILMADI (renkler.py'de değişecek bir şey yok).
**ÖNGÖRÜ:** yumuşak kipte halka tabanla aynı tonda (yabancı 0.44 / Osmanlı 0.68). ⑤'in binen payı
(gövde 0.44 halka 0.44 üstünde) ≈0.69 bileşik opaklıkla **hâlâ ayrı ton** — ⑤ görünmez olmaz.

---

## 7. ÖNCEKİ ÇARE (MOTOR-BANT-TAM-1005 + ARAYUZ-BANT-TAM-1006) — ne verir, ne bozar (öngörü)
O yol: bantlar iç içe tam bölge (`∪ _BANT_HAM[N][ak]`), 7/10'da TABAN KATMANLARI GİZLENİR.
- ① **kapanır** (taban yok, tek poligon) · ⑤a/⑤b **kapanır** (gövde katmanı çizilmiyor).
- 🔴 **YENİ KUSUR — EPOK DELİKLERİ:** gizlenen taban `petek_epok`lu idi; tam bant epoksuz ve yalnız
  aktif peteklerden (`:7889`). Ölü/kurulmamış yerleşimin hücresi 5 günde komşu devletin boyasıyla
  DOLU, 7 ve 10 günde **BOŞ** olur. Öngörü: 5→7 geçişinde haritada boyalı alanın AZALDIĞI hücreler
  çıkar (tekdüzeliğe aykırı) — sınav: herhangi bir gün, `taban gövdesi − tam bant(7)` alanı > 0.
- 🔴 **KURAL AYRIŞMASI:** 7/10 haritası puan kapısını, kapat/delik/B2/B3'ü, `_komsu_toprak_cikar`ı,
  seyrelt'i görmez ⇒ 5 ile 7 FARKLI kurallarla çizilmiş iki harita olur. Sahra'da 7 günde puan dışı
  200–282 km halkası boyanır (5 günde boyanmıyordu).
- 🔴 **TÂBİ/HİMAYE/OSMANLI AYRIMI KAYBOLUR:** gizlenen listede `vassal-dolgu`, `himaye-dolgu`,
  `osmanli-cizgi`, `hukuki-sinir-dolgu` var; bant tek katman, tâbi devlet KENDİ rengiyle çizilir.
- M2 o yolla da birleşir (yama `_u`yu keser; orada `_u` tam bölgedir) ⇒ puan ayrışması kapanır,
  epok delikleri ve tâbi ayrımı KALIR.

**Önerim:** önce bu yamanın M1+M2'si + APPJS opaklık satırı (halka yolu, taban korunur). K4 (epok) ve
⑤a/⑤b ikinci adımdır ve ikisi de bandı gövde boru hattından geçirmeyi ister (bant başına bir gövde
geçişi daha; eski ölçüm "taban gövde geçişinin 0,68 katı" yalnız birleştirme içindi, tam boru hattı
ölçülmedi). Karar koordinatörün.

---

## 8. HAVVA'NIN ÖLÇÜMÜYLE SINANACAK ÖNGÖRÜLER (koşu 17/18/19 çıktısı üzerinde)
1. Yabancı devletlerde halka ile taban arası boşluk ⇔ o devletin puan(≥4) bölgesi 5 günlük erişimden
   küçük. Boşluklu halkaların İÇ kenarı ≈ yerleşime **282 km (çöl)** / ≤201,6 km (genel); gövdenin
   dış kenarı ≈ **200 km** (tek yerleşim) — boşluk ~80 km genişliğinde, çöl dışında ~0.
2. Osmanlı gövdesinin kenarında puan kaynaklı boşluk **0**.
3. Çöl hücrelerinde "7-10" halkası ≈ 0 km²; "5-7" halkası yalnız 282–300 km şeridinde.
4. Halka ∩ gövde (herhangi devletin) > 0 — kapat/B2/B3 paylarında (⑤a/⑤b).
5. `_BANT_HAM` tekdüzelik ihlali yalnız ada kuralı paylarında (⑤c), yüzlerce km² mertebesi.

---
<!-- MÜHÜR SINIRI: yukarısı HAVVA dosyası açılmadan yazıldı ve commitlendi. -->

## 9. HAVVA İLE KARŞILAŞTIRMA — mühürden SONRA (mühür `647c8ed2`)
Okunan: `git show origin/main:denetim/HAVVA-UFUK-BANT-HATA-1006.md` (fetch 6 Ekim). Dosyada yalnız
**§0 ÖNGÖRÜ** var (15:26, *"kod henüz okunmadı"*); ölçüm bölümü o sürümde YOK ⇒ karşılaştırma
öngörü × kod teşhisidir, ölçüm × ölçüm değil. Birleştirme yapılmadı (şart ③).

### 9.1 HAVVA'nın sınanabilir iddiası, kodda doğrudan
> *"bant = N günlük ERİŞİM alanı − 5 günlük ERİŞİM alanı mı, yoksa ÇİZİLEN gövdeden mi; o gövdeye
> TAVAN uygulandı mı"*

| soru | kod | hüküm |
|---|---|---|
| bant ERİŞİM − ERİŞİM mi? | `:7873-7879` `_BANT_HAM[b][i].difference(_BANT_HAM[b−1][i])`; `_BANT_HAM` = petek × bütçe konturu (`:3605-3608`) | **EVET — DOĞRULANDI** |
| ÇİZİLEN gövdeden mi çıkarılıyor? | `:7863-7902`'de gövdeye (DEVLET_KAYIT / donemler) hiç başvuru yok | **HAYIR — DOĞRULANDI** |
| gövdeye A1 yarıçap tavanı uygulanmış, banda uygulanmamış mı? | A1 tavanı `_yr_kes` içinde (`:2331-2335`), taban (`:3614`) ve bant (`:3608`) AYNI işlevden geçiyor | **HAYIR — boşluğu A1 doğurmaz** |
| gövdeye çöl tavanı uygulanmış, banda uygulanmamış mı? | bantlara AYNI `_col_kes_hesap` (`:4337-4364`) | **HAYIR — boşluğu çöl tavanı doğurmaz** |
| gövdeyi kesip bandı kesmeyen BAŞKA bir kapı var mı? | **PUANLAMA KAPISI** `:6683-6688` (yalnız yabancı gövde) + kapat/delik/B2/B3/epok/seyrelt (gövdeyi BÜYÜTÜR) | ①'in kesicisi budur |

⇒ **YAPI UYUŞUYOR, MEKANİZMANIN ADI ÇELİŞİYOR.** HAVVA'nın iskeleti (*erişimden erişim çıkıyor,
çizilen gövde başka bir kesiciden geçmiş ⇒ arada boşluk; kesici ısırmıyorsa yapışık*) koda birebir
oturuyor. Ama adını koyduğu kesici (A1 / çöl tavanı) banda da uygulanıyor; ayrışan kesici PUAN KAPISI,
ve onu çölde ısırtan şey KELEPÇE (taban çöl erişimi 282 km > puan 200 km).
**Ayırt edici ölçüm (HAVVA'nın verisinde yapılabilir):** Osmanlı gövde kenarında boşluk. Puan
mekanizması ⇒ ~0 · tavan mekanizması ⇒ Osmanlı çöl kenarında da boşluk (çöl tavanı Osmanlı peteğine
de uygulanıyor). Bir de boşluğun dış yarıçapı: puan ⇒ ~200 km (tek yerleşim), çöl tavanı ⇒ 300 km.

### 9.2 Öteki kalemler
| kalem | HAVVA öngörüsü | bu rapor | uyuşma |
|---|---|---|---|
| ③/④ | çoğu kusur değil (komşu/deniz/arazi) + bant bütçesi tavanla kesiliyorsa kısmen kusur | K3 GERÇEK (yoğunluk/petek dolu) · K1 KUSUR: kelepçe bant eşiğini çölde 78/112 saate çıkarıyor, fazlayı çöl tavanı saklıyor · K4 KUSUR (epok) · K2 M2 sonrası gerçek | **KISMEN.** "çoğu muaf + beyan" uyuşuyor; HAVVA'nın "tavanla kesilen bütçe" kolu K1'e karşılık geliyor ama kökü tavan değil NORMALLEŞTİRME. K4 HAVVA'da yok |
| ⑤ | banda özgü; komşu devletlerin bantları bağımsız, paylaştırma yok; kapat ile aynı DEĞİL | halkalar petek hücresine bağlı (`_yr_kes(kara_kesik…)` `:3605`) ⇒ komşu devletlerin halkaları AYRIK, halka–halka binme yalnız ⑤c (ada payı, küçük). Asıl binme GÖVDE–HALKA (⑤a kapat · ⑤b B2/B3/delik) | **ÇELİŞİYOR.** "banda özgü" sonucu uyuşuyor ama mekanizma farklı: binen şey komşunun BANDI değil, gövdenin (kapat dâhil) halkanın üstüne taşan payı. ⑤a kapat ile AYNI işlev |
| renk | gövde renginin koyulaştırılmışı + fazla opaklık | renk AYNI (`DOLGU_RENK[r.d]` `app.js:790`), fark YALNIZ opaklık (1 / 0.44) | **KISMEN** — opaklık uyuşuyor, "koyulaştırılmış renk" kodda yok |
| koşu 20'de hepsi var | 5/5 | bant kodu `MOTOR-BANT-TAM-1005.diff` uygulanmadığı sürece aynı; bu rapor da 5/5 bekler | **UYUŞUYOR** |

### 9.3 Koordinatör için tek satır
HAVVA'nın ölçümü ① boşluklarının dış kenarını **~200 km** (tek yerleşim) / Osmanlı'da **boşluk yok**
bulursa bu raporun puan teşhisi; **300 km** ve Osmanlı'da da boşluk bulursa HAVVA'nın tavan teşhisi
kazanır. İkisi aynı anda doğru olamaz.
