# P84-BRASSO-TEMESVAR-1006 — H-0008 (Brassó ~1400) + TEMESVAR-BRASSO-PREKMURJE (1918-1920)

**Oturum:** P84-BRASSO-TEMESVAR-1006 (eski adı Hazır kıta 0610 1234) · görev: UMIT İRTİBAT, 6 Ekim 2026
**Temel:** `origin/makine/umit` `1bcad4f3` · ağaç `C:\atlas-p84-brasso` · YALNIZ ÖLÇÜM + ÖNERİ, veri dosyasına yazılmadı.
**Teslim dosyaları:**
- `denetim/P84-BRASSO-TEMESVAR-1006.md` (bu rapor)
- `denetim/P84-BRASSO-TEMESVAR-1006-KOORD.diff` (3 yerleşim kaydı → KOORDİNATÖR)
- `denetim/P84-BRASSO-TEMESVAR-1006.diff` (`data/olaylar_ok109.js` → UMIT parti sırası)
- `denetim/P84-BRASSO-TEMESVAR-1006-olc.py` (salt okur ölçüm betiği; kökünü `__file__`den bulur)

İki diff de `1bcad4f3` üstünde `git apply --check` **temiz**, satır sonu LF (CR bayt **0**), **UYGULANMADI**.

## 0. ÖNGÖRÜ — kaynak ölçümünden ÖNCE yazıldı (zincirler dökülmüştü, kaynak okunmamıştı)
- **İŞ 2, sayı:** üç kalemden **2'sinde** atlas yanlış/eksik, **1'inde** doğru.
  - Temeşvar — **YANLIŞ (eksik)**. Mekanizma: kaydın KENDİ `isg:` kaynak alanı "14 Kasım 1918 Sırp birlikleri girdi, Aralık başı
    Fransızlar" diyor, ama `isg:` yalnız 1919-08-03 Romen idaresinden başlıyor ⇒ 1918-11-14 → 1919-08-03 haritada
    `macaristan-naiplik` görünüyor (W33-ISGAL §8 bunu "haritada YOK" diye bıraktı).
  - Brassó — **YANLIŞ (sahte kesinlik)**. Mekanizma: tek kaynakta aynı olaya iki gün (7 / 10 Aralık) var; `isg:` 7'yi
    seçmiş, kronoloji maddesi ay düzeyinde ⇒ yerleşim kaydı kaynağın desteklemediği gün hassasiyetini taşıyor.
  - Prekmurje — **DOĞRU**. Mekanizma: 12 Ağustos 1919 SHS girişi akademik kaynakta (Kosi, HHR 2020) bulunur; 17 Ağustos
    Beltinci töreni ayrı olaydır, karıştırılmamalı.
- **İŞ 1 (H-0008):** atlas ~1400'de Brassó'yu **doğru** biçimde `macaristan` (Erdel voyvodalığı Macar tacının içinde) tutuyor;
  görseldeki "Eflak'a dâhil" görünümü veri değil **noktasızlık/petek** kaynaklı (Brassó'nun 60 km içinde tek komşu
  Kımpulung/eflak; Burzenland–Fogaras arasında nokta yok) — ya da Eflak voyvodalarının Macar tımarı olarak tuttuğu
  Fogaras/Amlaş'ın modelde olmaması.

**Öngörünün karşılaştırması (ölçümden sonra):** İŞ 2 sayı **TUTTU** (2 yanlış / 1 doğru), iki mekanizma da tuttu. Prekmurje'de
mekanizmanın yalnız ilk yarısı ölçüldü: Kosi 12 Ağustos'u doğruladı; Beltinci 17 Ağustos'u Kosi **anmıyor**, karışma iddiası
ölçülmedi (veride 17 Ağustos yok, karışma da yok). İŞ 1'de sonuç tuttu (atlas doğru), mekanizma **ÇÜRÜDÜ**: görselde
Brassó Eflak renginde DEĞİL, Macar renginde; "Eflak'a dâhil görünüm" yok, soru bir teyit sorusuydu (§1.2).

---

## İŞ 1 — H-0008: Braşov (Brassó) ~1400 Eflak'a mı dâhil, Erdel'e mi bağlı?

### 1.1 Mükerrer kapısı
`denetim/` altında "Brass" 15+ dosyada geçiyor (`grep -l`). Tek tek bakıldı: hepsi Brassó'yu **başka bir soru** için anıyor
(1551-1556 Habsburg araları, 1690 Zernyest, Macar tacı 1918, W33 1918 işgali). **~1400 sahipliği için yazılmış bir HÜKÜM yok**
⇒ mükerrer değil. Paketin önerdiği "1237'nin raporu" **YOK**: kıta 1237 görevi (M-5872) hiç almadı, oturumu hâlâ
"Hazır kıta 0610 1237" adıyla boşta duruyor (`ListAgents`, 6 Ekim). Bu görev onun yerine bana verildi.

### 1.2 ÖLÇÜM
- **Atlas zinciri** (`girdi.yukle()`, `yerlesimler_ek29.js:91`): `s: 1281-01-01 → 1526-09-01 d=macaristan` ⇒ **1400'de Brassó = macaristan.**
  `eflak`/`erdel` hiçbir döneminde yok (`erdel` künyesi zaten 1541 Erdel Prensliği'dir).
- **Görsel açıldı** (`H-0008-1.png`, 187×165): metin soruyu vermiyordu. Pikseller örneklendi: Brassó etiketinin çevresi nane yeşili
  (≈`#75d0a0`, `#7bd49e`) — `macaristan` boyası `#20d880`; Kımpulung çevresi (sol alt) zeytin yeşili (≈`#87c389`, `#6faf73`) —
  `eflak` boyası `#4db34d`. ⇒ **Görselde Brassó Macar, Kımpulung Eflak tarafında.** Harita veriyle tutarlı.
- **Noktasızlık:** Brassó'nun 60 km içinde tek komşu Kımpulung (59 km, `eflak`). Fogaras, Törcsvár (Bran), Sekel şehirleri
  noktası **YOK** ⇒ Brassó peteği Burzenland'ın tamamını taşıyor; sınır Karpat sırtına değil iki noktanın orta dikmesine yaslanıyor.
  Bugünkü görüntüde zarar yok (iki taraf doğru kimlikte), ama Fogaras gibi bir Eflak tımarı modellenirse nokta gerekir.

### 1.3 KAYNAK
- **TDV "Erdel" (Kemal Karpat)** — Brașov'u Erdel'in bölgesi olarak tanımlıyor: *"Buranın en önemli şehri, Almanlar (Saksonlar)
  tarafından Kronstadt adıyla kurulan Braşov'dur."* Ve tam bu döneme: *"I. Murad dönemindeki (1362-1389) ilk mücadeleler I. Bayezid
  (1389-1402) ve I. Mehmed (1413-1421) zamanında Erdel'e kadar uzanmıştır. Bundan sonra Erdel'in Macar idarecilerinin Eflak
  beyleriyle ittifak kurmaları …"* ⇒ 1400 civarında Erdel'i yöneten **Macar idarecileri**dir; Eflak ayrı bir müttefiktir.
- **TDV "Eflak" (Kemal Karpat)** — Eflak'ın Macar tâbiliği: *"Nicolae'nın oğlu Vlaicu ise (1364-1377) Macar Kralı Lajos'tan (Layoş)
  birtakım toprakları zeâmet şeklinde alarak onun tâbiliğini (vasal) kabul etti."* Yer adı vermiyor (Fogaras/Amlaş olduğu
  TDV'de **YAZMIYOR**). Mircea (1386-1418) için Brașov'a dair cümle **yok**.
- **Kurumsal ikinci tanık aranmadı** — TDV iki maddesi soruyu doğrudan cevaplıyor.

### 1.4 HÜKÜM
**Brassó ~1400 Erdel'e bağlıdır, Erdel de Macar Krallığı'nın içindedir. Eflak'a dâhil DEĞİL.** Atlas **DOĞRU**: 1400'de
`macaristan`, ve görsel de bunu gösteriyor. **Diff YOK.**
- Eflak voyvodalarının Macar kralından tımar olarak tuttuğu Erdel toprakları (TDV "zeâmet şeklinde") modelde yok. Yer adı ve yılı
  TDV'de olmadığı için **öneri yazılmadı**; açılacaksa ayrı kalem (Fogaras/Amlaş + Törcsvár, nokta gerekir — `§6` yoğunluk).

---

## İŞ 2 — TEMESVAR-BRASSO-PREKMURJE (1918-1920)

### 2.0 Mükerrer kapısı — hangi kalem kapandı (W33 raporlarından, HÜKME bakılarak)
| kalem | W33'ün hükmü | açık kalan soru (raporun kendi cümlesi) |
|---|---|---|
| Brassó | Kronoloji maddesi YAZILDI (`olaylar_ok109.js`, 1918-12-01 `kesinlik:"ay"`) — **madde kapalı** | ISGAL §3: *"Yerleşim kaydının `isg:` günü 1918-12-07 (A'yı seçmiş). Bu çelişki o kayıtta duruyor; koordinatörün işi"* |
| Temeşvar | 1919-08-03 maddesi YAZILDI — **madde kapalı** | ISGAL §8: *"Temeşvar'ın 1918-11-14 → 1919-08-03 Sırp/Fransız işgali haritada YOK (kaynak açıkça yazıyor)"* |
| Prekmurje | Kardeş madde YAZILDI (1919-08-12) — **madde kapalı** | ISGAL §8: *"Prekmurje günü (Kosi 2020, Zawistowska): okunmadı"* |
`origin/makine/umit`te üç madde de iniş yapmış (`olaylar_ok109.js:276`, `:316`, `:325`). Açık olan **yalnız** yukarıdaki üç soru;
bu rapor onları ölçer. YAMA ve OTEN raporları bu üç kalem için ek hüküm vermiyor (YAMA: YERKORU defter satırları; OTEN: commit atfı).

### 2.0b Ad biçimleri — `data/` tamamı tarandı
Desen: `Braşov|Brasov|Brașov|Brassó|Kronstadt|Temeşvar|Temesv|Timişoara|Timișoara|Lendava|Murska|Prekm|Muraszombat|Alsólendva`.
Üretilmiş dosyalar hariç **33 dosyada** geçiyor; yerleşim kaydı olarak her yer **tek** ad altında (`Brassó (Braşov)`, `Temeşvar`,
`Lendava (Alsólendva)`, `Murska Sobota`) — yakın mükerrer nokta **YOK** (`girdi.yukle()` ad çakışmasında hata verirdi; 60 km
komşu dökümünde ikiz yok). `Kronstadt`/`Muraszombat` yerleşim adı olarak geçmiyor. `yer_yama*.js`te bu dört yeri ezen bir
`isg:`/`s:` yaması **YOK** (yalnız `yer_yama_vassal_kid_0906.js:310` Brassó'nun 1526-1687 `v:`si — konu dışı).

### 2.1 TEMEŞVAR
**① Atlas zinciri** (`yerlesimler.js:489`): `s: … 1716-10-13 → 1918-11-11 macaristan-habsburg` · `1918-11-11 → 1920-06-04 macaristan-naiplik`
· `1920-06-04 → romanya-kralligi` · `isg: 1919-08-03 → 1920-06-04 romanya-kralligi`. ⇒ 1918-11-14 → 1919-08-03 arası
**Macar renginde**.

**② Kaynak:**
- **Muzeul Național de Istorie a României (MNIR)**, *Muzeul Virtual al Unirii* (mvu.ro; sayfanın künyesi: *"Proiectul online Muzeul
  Virtual al Unirii (www.mvu.ro) este unul dintre proiectele Muzeului Național de Istorie a României"*) — sayfa çekildi, cümle
  gövdeden birebir: *"On November 14, 1918, the Serbian troops occupied Timisoara, dissolved the national guards and took over the
  military administration and, shortly, the civilian side of Banat."* Aynı sayfa: Banat delegeleri *"were not initially allowed to
  leave the territory occupied by the Serbian and French armies"*; *"The Romanian administration was installed in the bumble Banat,
  in the part attributed to Romania, only in July 1919."*
- Kaydın kendi kaynağı (Ziua de Vest, gazete) aynı günü veriyor: 14 Kasım Sırp, Aralık başı Fransız, 3 Ağustos 1919 Romen.
- **TDV "Timişvar" (Mihai Maxim, c. 41, 2012):** yalnız *"Barış antlaşmalarına göre Banat bölgesi Romanya ve Sırbistan arasında
  bölüşüldü"* — işgal günü **vermiyor**.
- **Kaynak farkı (bildirilir, taraf seçilmedi):** popüler/gazete kaynakları Sırp girişi için 15 Kasım da veriyor (g4media, historia —
  KIRMIZI LİSTE, kullanılmadı). Kurumsal kaynak (MNIR) 14 diyor ⇒ 14 alındı.
- MNIR'in "Temmuz 1919" cümlesi **Banat bölgesi** için; Temeşvar şehrinin 3 Ağustos günüyle çelişki sayılmadı (bölge hükmü
  şehre taşınmaz, `D208`).

**③ Fark:** 8,5 aylık Sırp (Aralık'tan itibaren Sırp-Fransız) işgali haritada yok — **Değişmez 2i'nin göremeyeceği sessiz
eksik** (kırılma yazılmadığı için soru da yok).

**④ Öneri (KOORD diff, UYGULANMADI):** Temeşvar `isg:` başına iki dönem — **Peçuy kaydının emsaliyle birebir** (Peçuy:
`sirbistan-kralligi 1918-11-14 → 1918-12-01`, `yugoslavya 1918-12-01 → …`):
```
isg: 1918-11-14 → 1918-12-01  sirbistan-kralligi   (MNIR, birebir alıntıyla)
     1918-12-01 → 1919-08-03  yugoslavya           (künye geçişi; t: sonraki isg:)
     1919-08-03 → 1920-06-04  romanya-kralligi     (mevcut, dokunulmadı)
```
- 1918-12-01, **tarihî iddia değil künye geçişi** (`sirbistan-kralligi` t = `yugoslavya` f = 1918-12-01); `kaynak`ta öyle yazıldı.
- Fransız ortak varlığı **modellenmedi** (askerî idare Sırp; kaynakta yazılı). Sırp birliklerinin çekiliş günü (26/27 Temmuz
  1919) yalnız kırmızı listedeki sitelerde ⇒ **kullanılmadı**, `t:` sonraki kaynaklı sınır olan 3 Ağustos.
- **İşgal ≠ devir:** `s:` zincirine dokunulmadı; de jure Trianon 1920-06-04 aynen duruyor (F8). Değişiklik yalnız `isg:`.
- **Kronoloji (UMIT diff):** yeni madde **1918-11-14** *"Sırp ordusu Timișoara'yı (Temeşvar) işgal etti"*, `yer_id:"Temeşvar"`,
  Peçuy maddesinin hemen ardında. Mükerrer taraması: `data/*.js`te 1918-11/12 Banat/Temeşvar maddesi **0**. Mevcut 1919-08-03
  maddesinin `ic_not_d`si ("haritada YOK … YAZILMADI") güncellendi.

### 2.2 BRASSÓ
**① Atlas zinciri** (`yerlesimler_ek29.js:91`): `s: … 1918-11-11 → 1920-06-04 macaristan-naiplik → romanya-kralligi` ·
`isg: 1918-12-07 → 1920-06-04 romanya-kralligi`.

**② Kaynak:**
- Adevărul (gazete; kaydın kendi kaynağı): aynı olaya (A) *"24 noiembrie - 7 decembrie 1918"* ve (B) *"10 decembrie 1918"* — W33 §3'ün okuması.
- **MNIR mvu.ro** (bağımsız, kurumsal): *"The Romanian army entered South East Transylvania at the beginning of December 1918"* —
  **BÖLGE** düzeyi, şehir günü vermez; 7/10 ayrımını **çözmez**, AY'ı doğrular.
- Aranan, bulunamayan: Brașov İl Tarih Müzesi'nin (Muzeul Județean de Istorie Brașov) çevrimiçi metni (arama yalnız rehber/
  tanıtım sayfası döndürdü), akademik makale (aos.ro sonucu Bukovina makalesi çıktı — Preutu & Ceobanu 2019 — Brașov'u anmıyor).
  Arama sonuçlarındaki newsbv.ro, brasovultau.ro (yerel portal) kırmızı çizgide.

**③ Fark:** yerleşim `isg:` günü **1918-12-07** = kaynağın desteklemediği gün hassasiyeti (iki günden birinin seçimi). Kronoloji
maddesi ise doğru biçimde AY düzeyinde. İkisi çelişiyor.

**④ Öneri (KOORD diff):** `isg` `f:"1918-12-07"` → `f:"1918-12-01"` + `kesinlik:{f:"ay"}` (`D213`); `kaynak`a AY gerekçesi ve MNIR
tanığı eklendi, eski kaynak metni korundu. Kronoloji maddesinin `ic_not_d`si buna göre güncellendi (UMIT diff).
⚠️ Kırılma 7 Aralık'tan 1 Aralık'a kayıyor: haritada Brassó 6 gün erken Romen görünecek — bu, D213'ün bilinen bedelidir
(`YYYY-MM-01` "ay biliniyor" demek); aynı kodlama maddede de var, ±30 gün senkronu korunuyor.

### 2.3 PREKMURJE (Murska Sobota · Lendava)
**① Atlas zinciri** (`yerlesimler_a78_avrupa.js`): ikisi de `macaristan-naiplik 1918-11-11 → 1920-06-04 → yugoslavya` ·
`isg: 1919-08-12 → 1920-06-04 yugoslavya`. Murska Sobota'nın kaynağı Kosi'yi anıyor; **Lendava'nınki** *"kaydın kendi s: günü …
Murska Sobota ile aynı süreç (… Kosi 2020, Zawistowska)"* = komşudan devralma, okunmamış.

**② Kaynak — OKUNDU:** J. Kosi, *"Summer of 1919: A Radical, Irreversible, Liberating Break in Prekmurje/Muravidék?"*, Hungarian
Historical Review 9/1 (2020), s. 51–68 (PDF hunghist.org'dan indirildi, `pypdf` ile metin çıkarıldı). s. 51, birebir:
*"On August 12, 1919, military units of the Kingdom of Serbs, Croats and Slovenes crossed the border with the Kingdom of Hungary
and occupied segments of two counties, Vas (Železna in Slovenian) and Zala."* Lendava (Alsólendva) **Zala** vilayetindedir;
Murska Sobota **Vas** ⇒ cümle **iki yeri de** kendi kaynağıyla tarihliyor (komşu devralması gereksizleşti). Trianon:
*"The Yugoslav territorial acquisition of Prekmurje was confirmed a year later with the signing of the Treaty of Trianon"*.
- Zawistowska (Studia z Dziejów Rosji i Europy Środkowo-Wschodniej 47): **okunmadı** (Kosi yetti).
- Kosi'de **anılmayan**: Aralık 1918'deki kısa SHS girişi, Mura Cumhuriyeti (Kosi yalnız ilânını anıyor: *"The so-called Republic of Prekmurje, which was proclaimed on May 29, 1919 by Vilmos Tkálec"* — işgal zinciri için kullanılmadı), 17 Ağustos
  Beltinci. Bunlar için **öneri yazılmadı**.

**③ Fark:** gün DOĞRU. Kusur yalnız kaynak zincirindeydi (Lendava devralma, madde "OKUNMADI").

**④ Öneri:** Lendava `isg` kaynak metni Kosi'nin birebir cümlesiyle değiştirildi (KOORD diff; gün aynen). Kronoloji maddesinin
`kaynak`ındaki *"bu oturumda OKUNMADI"* → Kosi alıntısı (UMIT diff). Murska Sobota'ya **dokunulmadı** (kaynağı zaten Kosi).

---

## 3. ÖLÇÜM — önce / sonra
| ölçüm | ÖNCE (`1bcad4f3`, `denetle.py`) | SONRA |
|---|---|---|
| çıkış | **2** — yalnız Değişmez 8 ÖLÇÜLEMEDİ (`devletler_harita.js` YOK, taze ağaç; ORTAM) | **ÖLÇÜLEMEDİ** — aşağıda |
| Değişmez 2 | ✓ 623, 0 açık | — |
| 2i | ✓ 171, 1 açık (tavan 1) | — |
| 2s | 186 AÇIK (tavan 189) | — |
| 2t | 13 | — |
| mükerrer | ✓ 95 (≤95) | — |

🔴 **SONRA SÜTUNU ÖLÇÜLEMEDİ.** Diff'leri ağaca geçici uygulayıp `denetle.py` koşturmak istedim; ağaçtaki veri dosyasına geçici
yazma bu oturumun izin sınırında **REDDEDİLDİ**. Diff'ler bu yüzden ağaca dokunmadan, `git show` ile alınmış kopyalardan üretildi.
Yapılabilen ölçüm: değiştirilmiş üç yerleşim dosyası `girdi._cevir` ile **ayrıştı** (814 / 42 / 34 kayıt, sayı değişmedi),
`olaylar_ok109.js` node ile **yüklendi** (24 → 25 madde); zincirler §2'deki gibi.

**ÖNGÖRÜ (sayı + mekanizma, diff uygulanınca ölçülsün):**
- **2i:** 171 → **173** kırılma (Temeşvar +2: 11-14 ve 12-01; 08-03 tür değiştiriyor, sayı aynı; Brassó yer değiştiriyor).
  Açık **1 kalır**: 11-14'ü yeni madde (YER, K1), 12-01'i aynı dosyadaki 1918-12-01 *"SHS ile Büyük Romanya'nın kuruluşu"* maddesi
  kapatması beklenir (Peçuy'un aynı 12-01 geçişi bugün 2i'de açık değil — hangi maddeyle kapandığı ÖLÇÜLMEDİ).
- **2, 2t, 2s:** değişmez (`isg:` 2 ve 2s evreninde değil; yeni madde kırılmasız değil).
- **⚠️ MÜKERRER RİSKİ — tavan sıfır payda:** yeni 1918-11-14 Temeşvar maddesi, aynı gün aynı başlık kalıbıyla Peçuy maddesinin yanında
  ("Sırp ordusu … işgal etti"). Mükerrer detektörü bunu **şüpheli çift** sayarsa 95 → **96 > tavan 95** ve kapı öter. Bu
  **YANLIŞ POZİTİF** olur (farklı şehir, farklı kaynak). Öterse: tavan yükseltilmesin (§3.4), çift `bilinen`/beyan listesine adıyla
  girsin — ya da madde başlığı farklılaştırılsın. Koordinatörün kararı.
- **YERKORU:** Temeşvar 12-01 satırı (SHS maddesi Temeşvar'ı anmıyor) yeni bir "yer körü" satırı üretebilir — Peçuy 12-01 bugün
  defterde değil, demek ki aynı sınıf beyanlı ya da sayılmıyor; ölçülmedi.

## 4. YAN BULGULAR (kapsam dışı — yazılmadı, adıyla)
- **Lugos (Lugoj)** `yerlesimler.js`: `s: 1716-01-01 → 1918-01-01 macaristan-habsburg` · `1918-01-01 → romanya-kralligi` (`kesinlik: yil`,
  TDV "Barış antlaşmalarına göre…"). Temeşvar'ın 53 km komşusu **1918 Ocak'tan** Romen görünüyor, Temeşvar ise de jure 1920-06-04.
  F8 kararıyla (de jure = antlaşma günü) **tutarsız**: TDV cümlesi bir antlaşmayı tarihliyor, 1918 başını değil (`§4 ⑧`).
  Ayrıca `macaristan-naiplik` ara dönemi yok. KOORD işi; ayrı kalem önerilir.
- **Brassó `v:` dönemleri** (1526-1541, 1541-1551, 1556-1687) `kid`siz — Erdel Prensliği olarak değil, genel tâbi olarak boyanıyor
  olabilir. Ölçülmedi (H-0008 dönemine düşmüyor).
- **Banat nokta yoğunluğu:** Temeşvar'ın 60 km içinde tek komşu Lugos; Arad/Lippa noktası menzilde yok. Sırp/Romen bölüşüm
  hattı (1919) bu yoğunlukla haritada çizilemez (`§6`).

## 5. BULAMADIM / ÖLÇMEDİM (denenen yollar adıyla — 6 Ekim 2026)
- TDV: `brasov` **302** (ölü slug), `banat` **302**; arama `brasov`/`braşov`/`kronstadt`/`erdel`/`mircea` — sonuç sayfası madde
  slug'ı döndürmedi (yalnız `eflak` aramasında `/eflak`, `/bogdan`). Canlı GET: `erdel` 200, `eflak` 200, `timisvar` 200.
  Önbellek: `KRONO-TUNA-0929-tdv-onbellek/erdel.txt`, `eflak.txt` okundu.
- Brașov 7 / 10 Aralık'ı ayıran kurumsal/akademik kaynak: **bulunamadı** (aranan: Muzeul Județean de Istorie Brașov, aos.ro, arama
  motoru — dönenler gazete/yerel portal).
- Temeşvar'dan Sırp çekiliş günü (26/27 Temmuz 1919): yalnız kırmızı listede; Fransız giriş günü (3 Aralık 1918): yalnız
  explorecarpathia/fandom — **kullanılmadı**.
- Zawistowska makalesi, Mura Cumhuriyeti, Aralık 1918 Prekmurje girişi: okunmadı.
- `denetle.py` SONRA ölçümü: izin sınırında yapılamadı (§3). `denetle_yayin.py` / `odak_olc.py`: koşturulmadı (yeni maddenin
  `yer_id`si `Temeşvar` — mevcut bir yerleşim adı, kırık atıf beklenmez).
