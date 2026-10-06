# KELIME-CAKISMA-YER-1006 — Değişmez 2sk YER kolunda kelime çakışması (sahte YER kapanışı)

Görev: UMIT İRTİBAT (2SK-TOPLU-SINIF bulgusu). Makine UMIT · ağaç `C:\atlas-p84-kelime`
(detached, `origin/makine/umit` @ `62e270eb`). **YALNIZ ÖLÇÜM VE ÖNERİ** — `arac/denetle.py`
yaması UYGULANMADI (diff). Motor tuzu dosyalarına dokunulmadı. Veri dosyasına dokunulmadı.
Araçlar (salt okur, kökünü `__file__`den bulur):
- `denetim/ARAC-KELIME-CAKISMA-YER-1006.py` — bütün YER birimlerini YOLUNA göre döker
  (`yer_id` · `merkez` · `kok`), kök eşleşmesinin HAM metindeki büyük/küçük harfini ve
  bağlamını yazar; birim kümesi `ARAC-2SK-TOPLU-SINIF-1006` taklidiyle kurulur ve **her
  koşuda `KAPANIS_2S` ile çapraz sınanır** (3 koşunun 3'ünde ✓).
- `denetim/ARAC-KELIME-CAKISMA-SINAV-1006.py` — eşleştiricinin iki yönlü sınavı (17 soru).
Birim listesi: `denetim/KELIME-CAKISMA-YER-1006.tsv` (2648 YER birimi, hüküm sütunlu).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (kod okunduktan, ölçüm koşturulmadan; aynen)
Kod okundu: `arac/denetle.py:1433` `_2s_gecer` — metin ve ad `_2s_norm` ile KÜÇÜK HARFE indirilip
`(?<![a-z0-9])ad(?![a-z0-9])` aranıyor; büyük harf bilgisi kayboluyor, ek (`'den`) kelime
sınırı sayılıyor. YER kolu `:1851` `_2s_yeri_aniyor` → `:1863` yerleşim kökünü BAŞLIK+YER+GÖVDE
(`nrm`) üzerinde arıyor.
- **Sayı:** taban ≈ 2060 YER birimi; **sahte 15-40** (en olası ~25).
- **Mekanizma:** yerleşim adı aynı zamanda sıradan Türkçe kelime olan kısa kökler (beri,
  bar, sur, kale, ada, tekke, hisar, pazar, köprü, kilise …) gövdede KÜÇÜK harfle geçiyor.
  Büyük harf şartı çoğunu ayıklar; artık risk: cümle başı (büyük harfle yazılan sıradan
  kelime) ~2-5.
- **Düzeltme etkisi:** sahte birimlerin ~%60'ı TARAF koluyla da kapanıyor ⇒ 2sk yalnız-taraf
  **+10…+25**; geri kalanı (~%40) eksik düşer ⇒ ilgili kırılma AÇILIR (2s AÇIK artabilir —
  tavan 189'a karşı RİSK). Bugün gerçek YER kapanışlarından düşen: **0** (hedef).

**Karşılaştırma:**
- Taban sayısı TUTMADI: 2060 değil **2648** (2060, rapor satırının "görünür YER" sayısıydı;
  maskeli 587 birim de YER kolundan geçiyor ve bu ölçüm onları da kapsıyor).
- Sahte sayısı TUTMADI — **5** (öngörü 15-40, alt sınırın üçte biri).
- Mekanizma YARI tuttu: küçük harfli sıradan kelime GERÇEK ama yalnız **2** vaka (beri,
  karşı); öngördüğüm kale/ada/hisar/sur/pazar sınıfı **0** (o adlar korpusta ya yok ya
  yalnız özel ad olarak geçiyor). Öngörmediğim üç sınıf çıktı: **cümle başı zamir**
  (Buna), **bileşik özel ad** (Kızıl Ordu), **kişi/antlaşma adı** (Loizaga-Cotegipe) —
  üçü de BÜYÜK harfle, yani harf şartı yetmiyor.
- "Cümle başı artık riski ~2-5": 1 (Buna) — TUTTU.
- Etki öngörüsü ÇÜRÜDÜ: sahtelerin **%100'ü** (5/5) TARAF koluyla da kapanıyor ⇒ 2s AÇIK
  değişmiyor, 2sk **+5**. Gerçek kapanıştan düşen **0** — TUTTU.

## 1. Mükerrer kapısı
`denetim/` altında hüküm araması (ad + içerik: `kelime çakışma`, `_2s_gecer`, `sahte YER`,
`Beri`): bulgu yalnız `2SK-TOPLU-SINIF-1006.md`de (Tebriz/Aras "1351'den beri" — vaka bildirimi,
korpus taraması YOK). Bu kalem o taramadır. DUR gerekmedi.

## 2. KOD — dosya:satır (taban `62e270eb`)
- `arac/denetle.py:1418` `_2s_norm` — `translate` (Türkçe → ASCII) + NFKD + `lower()`.
  ⇒ büyük harf bilgisi SİLİNİR.
- `:1433` `_2s_gecer(nrm_metin, nrm_ad)` — `(?<![a-z0-9])ad(?![a-z0-9])`, ad ≥ 3 harf.
  Kesme işareti ve boşluk kelime sınırıdır ⇒ "1351'**den beri**" → `beri` TAM eşleşme.
- `:1658-1666` madde kurulumu: `nrm` = başlık + `yer` + GÖVDE (`d`) · `nrm_b` · `nrm_y`.
- `:1741` YER kolu çağrısı · `:1851` `_2s_yeri_aniyor`: üç yol, sırayla ① `yer_id` tam
  eşitlik ② **kök `nrm`de (`_2s_gecer`)** ③ merkez (`_2s_merkez_aniyor`, yalnız `nrm_y`,
  `_2S_CINS` bileşik-ad koruması VAR). Kelime çakışması yalnız ② yolundadır; ③'ün
  cins koruması ② de YOK.

## 3. ÖLÇÜM — 2648 YER birimi, yollarına göre
| sınıf | birim | açıklama |
|---|---|---|
| BAĞIMSIZ | **1764** | `yer_id` (679) · merkez (940) · ikisi/kök birlikte (145) — kök eşleşmesi düşse de kapanır |
| yalnız KÖK, BÜYÜK harfle | **882** | kök tek yol; ham metinde özel ad olarak başlıyor |
| yalnız KÖK, küçük harfle | **2** | Beri · Karşi — **ikisi de sahte** |

882'nin incelemesi: **63** birim otomatik bayrakla (cümle başı 43 · önünde büyük harfli kelime
11 · ardında cins/devlet kelimesi 9) + **~95** kısa/eşsesli kök (≤6 harf, Türkçe kelimeyle ya da
devlet adıyla çakışabilecek: bar, banyo, hurma, fas, van, sin, tire, aydin, ismail, resid …) **elle
okundu** — TSV'de `GERCEK-OKUNDU` (144 birim) + 3 sahte + 6 eş-ad. **729 birim tek tek
OKUNMADI** (`OKUNMADI`): hepsi büyük harfle, kelime sınırıyla, ≥3 harf; artık risk bu sınıftadır
ve **ölçülemedi** (sıfır değil).

### 3.1 SAHTE YER kapanışları — ADIYLA (5)
| tarih | yerleşim | dosya | eşleşen | sınıf | TARAF da kapatıyor mu |
|---|---|---|---|---|---|
| 1406-10-21 | **Beri** | `yerlesimler_sinir_kuzey.js` | "… 1351'den **beri** Doğu Anadolu…" (gövde) | edat, küçük harf | EVET |
| 1920-09-02 | **Karşi (Nahşeb)** | `yerlesimler_ek14.js:125` | "… Ermenistan'a **karşı** taarruza…" (başlık) | edat, küçük harf | EVET |
| 1897-01-01 | **Buna (Bouna)** | `yerlesimler_afrika2.js:561` | "… yaptı. **Buna** tepki gösteren Rabih…" (gövde) | cümle başı zamir | EVET |
| 1920-04-23 | **Ordu (Bayramlı)** | `yerlesimler.js:237` | "**Kızıl Ordu** Azerbaycan'ı işgal etti" (başlık) | bileşik özel ad | EVET |
| 1889-11-15 | **Cotegipe (Campo Largo)** | `yerlesimler_a78_amerika.js:448` | "… 1872 **Loizaga-Cotegipe** Antlaşması'yla…" (gövde) | kişi/antlaşma adı | EVET |

Kapatan maddeler TSV'de. Beşinin de kırılması TARAF koluyla da kapandığı için **hiçbiri bugün
2s AÇIK'ı gizlemiyor**; gizlenen şey kapanışın SINIFI (2sk).

### 3.2 Eş adlı özel ad (bölge/ülke ↔ şehir) — sahte DEĞİL, ayrı sınıf (6)
`Erdel (Kaloşvar)` ×4 ("Erdel'in Banat kaleleri", "Erdel'in kaybı" — Erdel = Transilvanya,
yerleşim Kaloşvar/Cluj) · `Fas (Fez)` ×2 ("Fas'ta Alevî devri", "Fas kuzey kıyısı" — ülke).
Kelime çakışması değil, **bölge hükmünün şehre taşınması** (`D208` sınıfı); büyük harf
şartı bunları ayırmaz ve ayırmamalı da değil mi — hükmü koordinatöre bırakıyorum (diff
dokunmuyor). Benzer: `Aydın` 1390 / 1402-09-15 / 1422 maddelerinde "Aydın" BEYLİK adı
olarak geçiyor — 1390 maddesinin `yer` alanı "Aydın-Ayasuluk"u şehir olarak da sayıyor;
**okundu, gerçek sayıldı**.

### 3.3 Okunup GERÇEK bulunanlar (örnek, negatif bulgu)
"Aynı tarihte katılan öteki yerler: X" kalıbı (cümle başı bayrağının 35'i) · Kvarner/Dalmaçya
ada listeleri (Krk, Cres, Rab, Pag, Vis, Sin) · Fizan (Gat, Sokna, Câlû) · Norveç (Alta, Hamar,
Molde) · Bar (Podolya) `yer` listesinde · Banyo (Kamerun) "Garua, Banyo, Marua" · Hurma
"Turabe ve Hurma" · Reşîd "İskenderiye, Reşid, Dimyat" · İsmail "Akkirman, Kili, Hotin,
Bender, İsmail" — hepsi YER ADI.

## 4. ÖNERİ — eşleştirici düzeltmesi (`denetim/KELIME-CAKISMA-YER-1006.diff`, UYGULANMADI)
Yalnız `arac/denetle.py` (UMIT tarafı; motor tuzu DEĞİL — tuz: `uret_petek.py` · `renkler.py`
· `girdi.py` · `motor_onbellek.py`). Taban `62e270eb`, LF, CR 0, `git apply --check` temiz.
1. **`_2s_kor`** — `_2s_norm`un harf-koruyan ikizi (aynı `translate`, NFKD; `lower()` YOK) ⇒
   iki metin karakter karakter hizalı. Hiza bozuksa eski davranışa düşer.
2. **`_2s_ozel_ad_gecer`** — kök yolu: kelime sınırıyla geçiyor **VE** ham metinde BÜYÜK
   harfle başlıyor. Resmî adı küçük harfle başlayan yerleşimde (`el-…`) harf şartı yok.
3. **`_2S_ES_AD = {buna, cotegipe, ordu}`** — büyük harf şartının ayıramadığı, ÖLÇÜLMÜŞ üç
   kök: kök yolu yalnız maddenin `yer` ALANINDA geçerli. `yer_id` ve merkez yolları
   etkilenmez. Kapalı liste; yeni üye ancak ölçülmüş sahteyle (`§3.4`).
   `beri`/`karsi` listede DEĞİL: sahteleri küçük harfliydi, ② yetiyor; listeye girselerdi
   gövdede "Beri'yi aldı" gibi GERÇEK bir anışı da kapatmazdı (sınav bunu yakaladı ve liste
   daraltıldı).
4. Madde kurulumuna iki alan: `kor` (`nrm`in ikizi) · `nrm_yer` (yalnız `yer`).
5. Tavan `BEKLENEN_2S_YALNIZ_TARAF` 2247 → **2252** (aynı diff, §6).
⚠️ `denetim/ARAC-2SK-TOPLU-SINIF-1006.py` maddelerini kendisi kurar ve `kor`/`nrm_yer`
taşımaz ⇒ yamadan sonra çapraz sınavı ✗ verir (ÖLÇÜLDÜ, §6); uyum diff'i ayrı dosyada.

## 5. SINAV — iki yönlü
### 5.1 Birim sınavı (`ARAC-KELIME-CAKISMA-SINAV-1006.py`, 17 soru)
- **Yamalı: 17/17 ✓.** SAHTE 7 (5 ölçülen vaka + "bar" küçük harf + Karşi başlık) kapanmaz;
  GERÇEK 8 (ekli/kesmeli ad, tamamı büyük harf, şapkalı Türkçe harf, çok kelimeli ad, `yer`
  listesindeki kısa ad, eş-ad kökü `yer` alanında, `yer_id` yolu, merkez yolu) kapanır.
- Beyanlı iki sınır da sınavda: **BİLİNEN KALINTI** "Karşı saldırı başladı." (cümle başı
  büyük harfli sıradan kelime) KAPATIR — bugün korpusta 0 vaka · **BEDEL** "Ordu'yu aldı"
  gövdede artık KAPATMAZ — bugün Ordu'nun gerçek kapanışı `yer_id` yolundan (1427-06-01).
- **Yamasız:** sonuç §6'da (sahte soruların ÖTMESİ beklenir — sınav kusuru görebiliyor mu).

### 5.2 Korpus sınavı (`ARAC-KELIME-CAKISMA-YER-1006.py`, yamasız ↔ yamalı)
YER kolundan **DÜŞEN tam 5** (3.1'deki beş, adıyla) · YER koluna **GİREN 0** · kalan **2643**
birim aynen ⇒ bugün gerçek olan YER kapanışlarının **HİÇBİRİ düşmedi**. Çapraz sınav ✓.

## 6. DENETİM ve TAVAN ETKİSİ — kendi ağacımda yamasız ↔ yamalı (`denetle.py` tam koşu)
Yamasız sınav: **10/17** — 7 SAHTE sorunun **7'si de ÖTTÜ** (eski eşleştirici hepsini
kapatıyor) ⇒ sınav kusuru görüyor; GERÇEK + beyanlı 10 soru iki hâlde de aynı.

`denetle.py` çıktısı yamasız ↔ yamalı (tavan dokunulmadan) — **TEK fark 2sk satırı**:
| ölçü | yamasız | yamalı |
|---|---|---|
| 2sk kapalı birim | 4134 = 2061 YER + 2073 TARAF | **4134** = 2058 YER + 2076 TARAF |
| GÜN YER · TARAF | 1368 · 1584 | 1366 · **1586** |
| OCAK-1 YER · TARAF | 693 · 489 | 692 · **490** |
| maskeli YER · TARAF | 587 · 174 | 585 · **176** |
| **2sk yalnız-taraf görünür+maskeli** | 2247 (tavan 2247) | **2252 ⚠️ tavanı 5 aşıyor** |
| D1 · D2 · 2s AÇIK (186/189) · 2i · 2t · 4 · … | — | **değişmedi** |
| çıkış kodu | 2 | 2 — ikisinde de yalnız D8 ÖLÇÜLEMEDİ (taze ağaçta `devletler_harita.js` yok) |

⇒ **Tavan etkisi: 2sk +5** (2247 → 2252). Bu GERİLEME değil, eskiden sahte YER kapanışının
arkasında görünmeyen borç. 2s AÇIK değişmez (5 kırılmanın hepsi TARAF ile de kapalı).
**`§3.4 ②` gereği tavan yamayla AYNI commit'te** — diff'e girdi:
`BEKLENEN_2S_YALNIZ_TARAF = 2247 → 2252`, gerekçe satırı beş birimi ADIYLA sayıyor. Tavan
yazılmadan hemen önce yeniden ölçüldü (`§3.4 0`): tavanlı yamalı tam koşu **2252 (tavan
2252)**, uyarı yok. (`§3.4 ④`: değer ÖNERİDİR, yazan koordinatördür.)

`ARAC-2SK-TOPLU-SINIF-1006.py` uyumu ÖLÇÜLDÜ: yamalı `denetle.py` ile değiştirilmemiş araç
**çapraz ✗** (taklit 2250 · resmî 2252 — Beri/Karşi araçta hâlâ eski yoldan kapanıyor). Ayrı
diff `denetim/KELIME-CAKISMA-YER-1006-ARAC2SK.diff` (4 satır: `kor` + `nrm_yer`) ile **çapraz ✓,
2252**. Yamasız `denetle.py`de o satırlar etkisizdir (`hasattr` korumalı).

## 7. TESLİM ÖZETİ
- Sahte YER kapanışı: **5 / 2648** (ADIYLA §3.1) — hepsi TARAF ile de kapalı.
- Eş-ad (bölge/ülke↔şehir): 6 — ayrı sınıf, yama dokunmuyor, hüküm koordinatörde.
- Okunmayan: 729 büyük harfli özel ad eşleşmesi — artık risk **ölçülemedi**.
- Diff'ler (taban `62e270eb`, LF, CR 0, `git apply --check` temiz):
  `KELIME-CAKISMA-YER-1006.diff` (`arac/denetle.py`: eşleştirici + tavan 2252, AYNI commit) ·
  `KELIME-CAKISMA-YER-1006-ARAC2SK.diff` (ölçüm aracı uyumu). İkisi BİRLİKTE.
