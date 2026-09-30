# YZ-KIRLENME-1001 — Bu gecenin kronolojisinde YZ metni ölçümü

*YAZICI-KASA (KAYNAK-DOGRULA-DOGUASYA) · 1 Ekim 2026 · koordinatör görevi (YILDIRIM BAYEZIT).*
**Bu bir ÖLÇÜM raporudur. Hiçbir madde silinmedi, hiçbir `kaynak:` alanı değiştirilmedi.** Hüküm koordinatörde.
Makine okur sürümü: `denetim/YZ-KIRLENME-1001.json`, kayıt kayıt.

## 0 · Tuzak
Britannica sayfalarında editör makalesinin (`p.topic-paragraph`) yanında **YZ soru-cevap kutuları** (`.ai-qna-module` / `.answer-content`) var. Bu kutular sayfa metninin içinde, sağlam görünerek duruyor. `get_page_text`, WebFetch ya da düz sayfa metni bu kutuları editör metninden AYIRMIYOR. Kırmızı çizgi (`CLAUDE.md §4`): YZ üretimi metin kaynak olamaz.

## 1 · Evren
| | Sayı |
|---|---|
| `data/kronoloji_cok_*.js`, TÜMÜ | **56 dosya · 3084 madde** (koordinatörün "17 dosya / 1788" tahmininden büyük) |
| Kapsam: `ince_*` · `once1281_*` · `1923_1945` · `500_1000` · `senkron_0930` | **18 dosya · 1804 madde** |
| Kapsamda modern site kaynaklı madde | 873 |
| URL taşıyan atıf · alan adı | 963 · 68 |
| Britannica'ya atıflı madde | **149** (125'i alıntılı, 24'ü alıntısız) |
| **Ölçülen Britannica kaydı · alıntı** | **93 kayıt · 94 alıntı** (bu oturumun kendi 23 Doğu Asya kaydı zaten editör metninden doğrulanmıştı, tekrar sayılmadı; Batı Afrika'nın 2 kaydı ölçüme dahil) |
| Çekilen Britannica sayfası · YZ kutusu olan | **60 · 53** (%88) |

## 2 · Sonuç — Britannica (93 kayıt)
| Hüküm | Kayıt | Anlamı |
|---|---|---|
| EDITOR | **88** | Alıntı editör paragrafında birebir var (`avrupa#14` boşluk farkı yüzünden yanlış alarm verdi, içerik birebir) |
| **YZ** | **2 kayıt / 3 alıntı** | Alıntı YALNIZ YZ kutusunda |
| **YANLIŞ-ATIF** | **1** | Alıntı Britannica'da hiç yok, başka kaynaktan geliyor |
| YAKIN | 1 | Editör metninden, ama bir kelime eklenmiş |
| SAYFA-DISI | 1 | Editör paragrafı değil, zaman çizelgesi bileşeni (YZ değil) |

### 🔴 YZ kutusundan geldiği ÖLÇÜLEN alıntılar (adıyla)
1. **`data/kronoloji_cok_once1281_avrupa.js` #172**
   - Alıntı: *"Normandy fell to the Capetian in 1204. Maine, Anjou, and Touraine fell rapidly (1204–06)…"*
   - Nerede: Britannica «Philip II» sayfasında YALNIZ YZ kutusunda. DOM zinciri: `P › DIV.answer-content › DIV.ai-qna-answer › LI.ai-qna-item › DIV.ai-qna-module`.
   - Kaynakta gösterilen `/place/Normandy` sayfasının editör metninde yok.
2. **`data/kronoloji_cok_once1281_hint_amerika.js` #47**: iki alıntının İKİSİ de YZ kutusundan.
   - ① *"Around 1150 CE, they began constructing cliff dwellings…"* → «Ancestral Pueblo culture» sayfasında `DIV.ai-qna-module`.
   - ② *"Between 1150 and 1200, the Ancestral Pueblo peoples moved from mesa tops to alcoves…"* → kaynakta anılan «Mesa Verde National Park» sayfasında `DIV.ai-qna-module`.

### 🟠 Britannica'ya yanlış atfedilmiş
3. **`data/kronoloji_cok_once1281_avrupa.js` #255**
   - Alıntı: *"On 29 September 1267, the ford at Rhydwhiman was the site of the signing of the historic Treaty of Montgomery."*
   - Bu cümle Britannica «Wales» sayfasının hiçbir bölümünde yok: ne editör metninde, ne YZ kutusunda, ne sayfanın geri kalanında.
   - Editör metni yalnız şunu diyor: "…formally acknowledged by Henry III in 1267 by the Treaty of Montgomery…".
   - ⇒ **Gün (29 Eylül) Britannica'dan gelmiyor.**

### ⚪ Düşük risk
- **`once1281_hint_amerika` #32:** "particularly to **the** victories…" — editör metninde "the" yok. Tek kelimelik bozulma.
- **`once1281_avrupa` #175:** "Massacre at Béziers July 21, 1209 - July 22, 1209" — sayfanın "Key events" zaman çizelgesinden (`DIV.timeline-slide`). Editör paragrafı değil, ama YZ de değil.

## 3 · Öteki modern siteler — örnekleme
- **Encyclopedia.com:** 2 sayfa ham HTML'i tarandı, YZ işareti 0.
- **Öteki 63 alan adı:** her birinden 1 sayfa, betikle ham HTML tarandı (`ai-*` sınıfı, "AI generated", "KI-generiert", "intelligenza artificiale" vb.). Sonuç: **YZ işareti 0**.
  - Örnek: countrystudies 136 · history.state.gov 125 · ushmm 69 · avalon 44 · treccani 31 · snl.no 30 · enciclopedia.cat 23 · lex.dk 12 atıf.
- **ÖLÇÜLEMEDİ, 7 alan** (SSL sertifika hatası): enciklopedija.hr (34 atıf) · deutsche-biographie.de (16) · luxembourg.public.lu · hdgoe.at · persee.fr · ojs.utlib.ee · mjp.univ-perp.fr.
- ⚠️ **"0 işaret" ile "YZ yok" aynı şey değil.** İstemci tarafında sonradan yüklenen YZ kutuları ham HTML'de görünmez. Bu sitelerdeki alıntılar tek tek sınanmadı.
- **TDV:** 40 önbellek gövdesinde YZ metni ya da kutusu yok.

## 4 · Ölçülemeyenler (beyan)
- **Britannica'ya atıflı ama alıntısız 24 madde:** alıntı olmadığı için "hangi kutudan geldi" sorusu sorulamaz. Başlıcaları `ince_dg_afrika` (Wadai, Lunda, Kazembe, Mirambo, Bunyoro) ve `once1281_anadolu` (Laskaris, Vatatzes, Epir). Bu maddelerin bilgisi YZ kutusundan okunmuş OLABİLİR. Ölçülemedi.
- **İkinci risk sınıfı — WebSearch/"arama özeti":** Arama aracının özeti de model üretimi metindir. Özetten alınmış tırnaklı ifade, sayfanın kendi metni olmayabilir. Kapsamda bunu beyan eden 2 madde var: `ince_kuzey_amerika` #4 (Treaty 4) ve #5 (Lewis & Clark). Beyan etmeyenler ölçülemez.
- **Kapsam dışı 38 dosya (1280 madde) taranmadı.** Bunların 178 Britannica atfının bir kısmı eski oturumlardan.

## 5 · Öneriler (hüküm koordinatörde)
1. **#172 ve hint_amerika #47:** alıntı kaldırılmalı. Olay editör metninde başka cümleyle destekleniyorsa o cümle yazılmalı, desteklenmiyorsa `bulunamadı`.
2. **avrupa #255:** "29 Eylül" gününün dayanağı yeniden açılmalı. Britannica yalnız yılı veriyor.
3. **Kalıcı süzgeç:** modern siteden metin alan her araç ya da oturum, YZ kutularını DOM seviyesinde dışarıda bırakmalı. Britannica için seçici `p.topic-paragraph` olmalı ve `.ai-qna-module` / `.answer-content` atası taşıyan her şey dışarıda kalmalı. `get_page_text` ve WebFetch bu ayrımı yapmıyor.
