# GLM1-ONEK-DOGRULAMA-1006G — önek-10'un gövde doğrulaması + GLM-GOREV-1005 (A)/(B) cevabı

Durum: **BİTTİ — ONAY ALDI, EŞLEME KESİNLEŞTİ** (6 Ekim 2026, GLM1; koordinatör üç
onay + şerh → §5; kesin tablo: `GLM1-ESLEME-1006G.tsv`).

Koordinatörün hipotezi (ölçümden ÖNCE yazıldı, mühür onun): önek-10 üç sınıftır —
✅ TDV'nin kendi ayırt-edici sonekli biçimi (aynı varlık) · 🟡 yer→olay maddesi ·
❌ öneki paylaşan AYRI varlık. "Hükmüm değil, DOĞRULANACAK HİPOTEZ: iki gövdeyi de aç,
aynı yeri/konuyu mu anlattıklarını OKU."

## 1. ÖLÇÜM DÜZENİ

27 istek (1 sn bekleme): 11 uzun-slug GET (10 çift + `turkmenistan`) · 3×
`mercidabik-muharebesi` yeniden deneme (ilk GET 000 — taşıma arızası kuralı) ·
1 GET `zengiler` (verinin kendi atfı) · 12 arama (10 ASCII + `sarıkamış` + `sûr`).
Ham HTML: `%TEMP%\glm1_1006G\`. data/ YALNIZ OKUNDU; yazma yalnız `denetim/GLM1-*`.

## 2. SONUÇ — koordinatörün üç sınıfı gövdeyle BİREBİR doğrulandı

| Sınıf | Slug | Kanıt (ölçüm) |
|---|---|---|
| ✅ aynı varlık | **ammarogullari** | uzun 200, başlık **"AMMÂROĞULLARI"** — kısa adın tam biçimi |
| ✅ aynı varlık | **derbend** | uzun 200 "DERBEND"; arama q=derbend **tek madde** olarak `derbend--dagistan` döndürüyor |
| ✅ aynı varlık | **irak** | uzun 200 "IRAK" — kısa adın tam biçimi |
| 🟡 olay maddesi (YER maddesi yok — not şart) | **mercidabik** | uzun **3×200** (ilki 000 taşıma arızasıydı) "MERCİDÂBIK MUHAREBESİ"; arama q=mercidabik **TEK sonuç** olay maddesi; ayrı yer maddesi yok |
| 🟡 olay maddesi | **sarikamis** | uzun 200 "SARIKAMIŞ HAREKÂTI"; arama (ASCII **ve** Türkçe sorgu) sonuç VERMİYOR — madde canlı ama arama dizininde görünmüyor |
| 🟡 olay-yer maddesi | **kut** | uzun 200 "KÛTÜL'AMÂRE"; arama q=kut → kutb- kişileri; ayrı 'kut' maddesi yok |
| ❌ AYRI varlık — eşleme YANLIŞ | **erzin** | uzun 200 **"ERZİNCAN"** (Erzincan şehri); arama q=erzin → yalnız `muhammed-bahaeddin-erzincani` (kişi); TDV'de Erzin (Hatay) maddesi **bulunamadı** |
| ❌ AYRI varlık — eşleme YANLIŞ | **sur** | uzun 200 **"SURİYE"** (devlet); arama q=sur **ve** q=sûr → anlam gürültüsü (kale · düğün · resim · çadır); Sûr (Tyre) maddesi **bulunamadı** (İLK ~10) |
| ❌ AYRI varlık — eşleme YANLIŞ | **zengi** | uzun 200 **"ZENGİBAR"** (Zanzibar); verinin öznesi Zengîler hânedanı (`devletler.js:9739` id:`zengi-musul`, kaynak:"TDV: zengiler"); **`zengiler` CANLI** (200, "ZENGÎLER") — ölçülen kapsayıcı adayı zengibar değil zengiler |
| ⚪ ayırt edilemedi | **tur** | `turkiye` 200 "TÜRKİYE" + `turkmenistan` 200 "TÜRKMENİSTAN" — iki ayrı canlı madde; koordinatör: "öyle KALSIN" |

**Sayım: ✅ 3 · 🟡 3 · ❌ 3 · ayırt-edilemedi 1** — koordinatörün ❌ dörtlüsünde tur
"ayırt edilemedi" olarak ayrıldı; sınıflama hipotezle birebir.

### Ek ölçümler (ölçüm, hüküm değil)
- Uzun 10'un **tamamı CANLI** (200). İlk turdaki tek 000 (`mercidabik-muharebesi`)
  taşıma arızasıydı — 3× yeniden denemenin tamamı 200.
- ❌ üçlüsünde bile **veride borç yok**: kısa sluglar veride atıflı değildi (1006F TAM
  atıf 0), atıflı/özne tarafı canlı (erzincan 200 · suriye 200 · zengiler 200).
- **Arama-dizini sınırı:** `sarikamis-harekati` canlı olmasına rağmen aramada
  çıkmıyor; `mercidabik-muharebesi` çıkıyor. ⇒ 1005 ②'nin "ölü slug için doğru
  slug'ı ARA" adımında "arama sonuç vermedi" ≠ "madde yok" — sonuç köprüsü aramadan
  tek başına kurulamaz.

## 3. GLM-GOREV-1005 (A)/(B) CEVABI

**(A) BORÇ DEFTERİ.** Tek satır gerekçesi: ②'nin evreni `grep data/*.js` ile çıkan
**veride atıflı 153 adres**; her ölü satır **veri maddesine bağlanır** ("🔴/🟡 çıkan
her adresin hangi data dosyasında hangi maddede geçtiği … Düzeltmeyi ben yapacağım")
ve defter **üyelikle** işler ("bir sonraki tur borcun kapandığını ancak üyelikten
anlar"). ① önbellek korpusuna ölüler giremez (302 → gövde yok).

Sonuçları: `376 ∩ 153 = ∅` (1006F TAM atıf 0 gereği hiçbir ölü slug veride atıflı
değil) ⇒ **376 bu deftere borç olarak GİREMEZ**; borç sayısı bu evrenden **0**.
Girebilecek tek şey önek-10'un **ETİKETLİ provenans notu** ("hasat artefaktı; eşleştiği
veri atfı: <uzun>") — onlarda da atıflı taraf canlı. ⚠️ Ayrıca: 1005'in ①② çıktıları
**diskte yok** (`GLM1-TDV-ONBELLEK*` · URL-SAYIM yok) — görev 5 Ekim'de atandı,
1006 zinciri araya girdi, henüz koşulmadı; (A) hükmü şartname metninden okundu. **Koordinatör şerhi (6 Ekim):
(A) kabulü şartnameye göre GEÇİCİDİR — 1005 koşulup ne YAPTIĞI ölçülmeden kesinleşmez;
şartname niyet beyanıdır, davranış ölçümü değildir.**

## 4. TESLİM — üçlü

**① NE ÖLÇTÜM** — 27 istek (yukarıda). Doğrulama tablosu: ✅3 · 🟡3 · ❌3 · ayırt
edilemedi 1; uzun 10/10 canlı; `zengiler` canlı (200). Yazılanlar:
`GLM1-ONEK-DOGRULAMA-1006G.md` + `.tsv` (10 satır, kanıt kolonlu).

**② NE BULAMADIM**:
- TDV'de **Erzin (Hatay)** ve **Sûr (Tyre)** maddesi bulunamadı (İLK~10 sınırı:
  arama sayfa sayısı basmıyor, sonuç listeleri ilk ~10 ile sınırlı — koordinatör
  hükmü: `bulunamadı` yazılır, "TDV'de yok" YAZILMAZ).
- `tur` önekunun tek karşılığı ölçülemedi (iki canlı aday + gürültü).
- Arama sonuç SAYISI çıkarılamadı (sayfa sayı basmıyor); sonuç listeleri ilk ~10 ile sınırlı.

**③ NE İSTİYORUM** (öneriler, hüküm koordinatörde):
1. Önek-10'dan birleştirmeye yalnız **✅3 + 🟡3** eşleme yazılsın (🟡'lere "yer maddesi
   yok, olay maddesi var" notuyla); **erzin/sur/zengi eşlemesi yazılmasın**; `tur` açık kalsın.
2. `zengi` için ölçülen kapsayıcı aday **`zengiler`** (canlı, veri atıflı) — zengibar değil.
3. 1005 (A) olduğuna göre: birleştirme girdisi olarak 376 değil, ②'nin kendi evreni
   (veride atıflı 153 adres) koşulsun; önek-10 ayrı "hasat artefaktı" notu olarak deftere girsin.

## 5. ONAY (YILDIRIM BAYEZIT, 6 Ekim) — kesinleşen eşleme

Üç onay + bir şerh: ① birleştirmeye **✅3 + 🟡3** (🟡'lere "yer maddesi yok, OLAY
maddesi var" notu ZORUNLU); kısa→uzun eşlemesi **erzin · sur · zengi için YAZILMAZ**;
`tur` **AÇIK** kalır ("ayırt edilemedi" bir sonuçtur, ikisinden birini seçmek değil).
② `zengi`'nin doğru kapsayıcısı **`zengiler`** — ONAY; kayıt ÜÇLÜDÜR (kısa deneme ·
doğru kapsayıcı · yanlış aday birlikte yazılır: yanlış adayı silmek bir sonraki turun
aynı yanlışı yapmasını engellemez). ③ 1005 girdisi kendi 153'lük evreni, 376 DEĞİL;
önek-10 "hasat artefaktı" ETİKETLİ not olarak deftere girer.
🔴 Asıl sonuç (1006F başına yazıldı): 893 kovanın ürettiği **BORÇ SIFIR**.
⚠️ Şerh: (A) hükmü şartnameye göre geçici — 1005 koşulup DAVRANIŞI ölçülmeden kesinleşmez.
🆕 Kural (koordinatör genellemesi, TDV tuzaklarına ⑨ olarak işleniyor): **arama "sonuç
yok" ⇒ "madde yok" DEĞİLDİR** — arama ADAY üretir, GET DOĞRULAR.

**Kesin eşleme tablosu (kısa · doğru kapsayıcı · yanlış aday):**

| kısa | doğru kapsayıcı | yanlış aday |
|---|---|---|
| ammarogullari | `ammarogullari--trablusgarp` ✅ | — |
| derbend | `derbend--dagistan` ✅ | — |
| irak | `irak--ulke` ✅ | — |
| mercidabik | `mercidabik-muharebesi` 🟡 *(yer maddesi yok, OLAY maddesi var)* | — |
| sarikamis | `sarikamis-harekati` 🟡 *(yer maddesi yok, OLAY maddesi var; arama dizininde görünmüyor — kural ⑨)* | — |
| kut | `kutulamare` 🟡 *(yer maddesi yok, olay-YER maddesi var)* | — |
| zengi | **`zengiler`** (koordinatör ② onayı; `TDV: zengiler` atıflı, canlı 200) | `zengibar` — Zanzibar, YANLIŞ EŞLEME |
| erzin | — eşleme YOK (Erzin (Hatay) TDV'de **bulunamadı**) | `erzincan` — Erzincan şehri, YANLIŞ EŞLEME |
| sur | — eşleme YOK (Sûr (Tyre) **bulunamadı**, İLK~10) | `suriye` — Suriye devleti, YANLIŞ EŞLEME |
| tur | **AÇIK** — ayırt edilemedi (`turkiye` + `turkmenistan` iki ayrı canlı madde) | — |

Makine-okunur hâli: `GLM1-ESLEME-1006G.tsv` (10 satır).
