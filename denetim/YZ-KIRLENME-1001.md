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

---

## ⚠️ EK 2 düzeltmesi — #255
EK 2'de avrupa #255 için "gün Britannica'dan gelmiyor ⇒ günü yeniden kaynaklanmalı" dedim. **Bu çıkarım fazla ağırdı.**
- Kaydın kendi `ic_not_t`si günün **RCAHMW**'den geldiğini zaten yazıyordu.
- Kusur günde değildi, alıntının **yanlış kaynağa** yazılmasındaydı.
- `ic_not_t`yi okumadan hüküm önerdim. Koordinatör alıntıyı RCAHMW'ye taşıdı (`2578d5e0`).
- 📌 **Ders:** bir alıntı "yok" çıktığında önce kaydın kendi `ic_not_*` alanları okunur.

---

# EK 3 — Açık uçlar: SSL alanları · kapsam dışı 38 dosya · URL'siz alıntılar

🔴 **İSTEMCİ TARAFINDA SONRADAN YÜKLENEN YZ KUTULARI HAM HTML'DE GÖRÜNMEZ; "0 İŞARET" ≠ "YZ YOK".** Bu ekte tarayıcıyla açılan sayfalarda **işlenmiş DOM** da tarandı. Bu, ham HTML'den güçlü bir ölçümdür ama yalnız o sayfalar için geçerlidir.

## ① SSL hatası veren 7 alan — tarayıcı içinden, aynı kaynaktan `fetch`
| Alan | Atıf | Alıntı | Sonuç |
|---|---|---|---|
| enciklopedija.hr | 34 | 30 | **27 alıntı Hırvat sayfasında birebir var.** 3 Türkçe alıntı (#3 · #10 · #164) TDV «Bulgaristan» maddesinde birebir var, ama kayıtta Hırvat ansiklopedisi atfının arkasına yazılmış ⇒ **yanlış kaynağa yazılmış** (#255 sınıfı, hafif) |
| deutsche-biographie.de | 16 | 16 | **16/16 birebir** |
| luxembourg.public.lu | 5 | 5 | **5/5** |
| hdgoe.at | 3 | 2 | **2/2** |
| persee.fr · mjp.univ-perp.fr | 3 | 0 | Açıldı, alıntı yok |
| ojs.utlib.ee | 1 | 1 | **ÖLÇÜLEMEDİ** — adres bir PDF indirmesi, izinsiz dosya indirilmedi |

- İşlenmiş DOM'da YZ işareti: **6 alanda da 0.**
- Sonuç: **53 alıntının 53'ü kaynağında var.**

## ② Kapsam dışı 38 dosya / 1280 madde
- Britannica'ya atıf: 29 madde. Yalnız **1'inde** gerçek içerik alıntısı var (öteki 28'inde tırnak içinde yalnız başlık var).
  - `ingiltere` #5 «Crimean War» → **EDITOR** (p.topic-paragraph).
- Modern site kaynaklı 79 madde: alan örneklemesi EK 2'dekiyle aynı.

## ③ URL'siz alıntılar — "hiç iz bırakmayan" kova
### ③a TDV'ye atfedilmiş alıntılar — TÜM EVREN (56 dosya)
TDV'nin kendi gövdesiyle birebir sınandı: **310 TDV maddesi** çekildi, **1130 alıntı birimi** ölçüldü.
| Sonuç | Sayı |
|---|---|
| Atfedilen maddede birebir var | **1047** (URL'siz 21 alıntı dahil; bunlar gövde taranarak eşlendi) |
| **Uydurma** (hiçbir TDV gövdesinde yok) | **0** |
| **Yanlış TDV maddesine yazılmış** (metin başka maddede birebir var) | **11**: `once1281_ortadogu` #92 · 109 · 110 · 112 · 114 · 142 · `gurcistan` #7 · 24 · 28 · `ermeni` #8 · `once1281_avrupa` #204 (metin «İdil Bulgar Hanlığı»nda, «Bulgar» maddesine yazılmış) |
| Kelime sırası değiştirilmiş | **1**: `ince_bati_afrika` #0. TDV: "İslâm dini, Mosi Kralı Naaba Dulugu'nun (1769-1823) yönetimi döneminde sarayda…" · kayıt: "Mosi Kralı … döneminde İslâm dini sarayda…" |
| Cümle ortasında kesilip nokta konmuş (içerik birebir) | ~8: `venedik` #2 · 4 · 5 · `sirbistan` #6 · 9 · `katar` · `samori-ture` · `mali` |
| Ayrıştırma artığı | ~60. Türkçe kesme işareti ("1528'ten") tırnak sanıldı; tırnak içinde yalnız başlık var; TDV segmentine düşmüş TDV dışı metin var |

⇒ **TDV alıntılarında YZ ya da uydurma izi yok.** Kusur sınıfı yalnız **yanlış maddeye/kaynağa yazmak**: 11 TDV→TDV ve 3 TDV→Hrvatska kaydı.

### ③b TDV dışı, URL'siz alıntılar
- TDV dışı kaynağa atfedilmiş alıntı taşıyan madde: **305**. Bunların **218**'inde maddenin hiçbir yerinde URL ya da alan adı yok.
- Yöntem beyanına göre dağılım:
| Beyan | Madde |
|---|---|
| **BEYANSIZ**: nereden okunduğu yazılmamış | **182** |
| Arama özeti ya da "(özet)" beyanlı | 20 |
| Açıldı/okundu beyanlı | 11 |
| Açılmadı beyanlı | 5 |
- BEYANSIZ kümenin dosyalara dağılımı: `ince_avrupa_amerika` 40 (Novgorod Kroniği, Hume Brown…) · `once1281_hint_amerika` 32 (Britannica, URL'siz; **EK 2'de ölçüldü**) · `ispanya` 27 · `fransa` 14 · `portekiz` 13 · `1923_1945` 10 · `ince_kuzey_amerika` 10 · …
- **Ölçülebilen örneklem:** "LoC <ülke> NN.htm" atıfları countrystudies.us'e çözüldü → **13 alıntının 13'ü birebir var.**
- **Kalan ~135 BEYANSIZ alıntı ÖLÇÜLEMEDİ.** Basılı eserler, RAH DB~e, Novgorod Kroniği gibi kaynaklar tek tek açılmadı.

### ③c "Arama özeti de model metnidir" kovası
- **Sıkı beyan** ("arama özeti/özetinden/WebSearch"): **84 madde**. Dağılım: `rusya` 77 · `lehistan` 3 · `fransa` 2 · `ince_kuzey_amerika` 2.
  - Bunların içerik alıntısı taşıyanı yalnız `ince_kuzey_amerika` #4. Kaynağı açıldı: The Canadian Encyclopedia «Treaty 4» → "signed on 15 September 1874 at Fort Qu'Appelle" **birebir var.**
  - 🔴 **`rusya` 77 madde:** hepsi "sayfa açılamadı (401/403), arama özetinden okundu" diyor (BRE old.bigenc.ru, mil.ru, cyberleninka, prlib.ru). Alıntı taşımıyorlar, ama **bilgi (tarih/gün) model özetinden geliyor.** Bu, Britannica'nın 403 durumunun aynısı ⇒ **tarayıcı yolu denenmeli.**
- WebFetch beyanlı: 1 madde (`1923_1945`). WebFetch de metni küçük bir modelden geçirir; alıntı birebir olmayabilir.

## ④ Toplam hüküm tablosu (EK 2 + EK 3)
| Kova | Ölçülen | Kirli |
|---|---|---|
| Britannica alıntıları | 94 | **3 YZ kutusundan** (avrupa#172, hint#47 ×2) — koordinatör kaldırdı |
| SSL alanları | 53 | 0 |
| TDV alıntıları (tüm evren) | 1130 | 0 uydurma · **14 yanlış maddeye/kaynağa yazılmış** · 1 kelime sırası |
| LoC örneklemi | 13 | 0 |
| **ÖLÇÜLEMEDİ** | ~135 BEYANSIZ TDV dışı alıntı · 24 alıntısız Britannica maddesi · 77 rusya özet maddesi · 1 PDF | — |

---

# EK 4 — Rusya'nın 77 "arama özeti" maddesi · atıf düzeltme önerisi
**İki dosya da ÖNERİdir, UYGULANMADI** (dosyalar benim değil, uygulama koordinatörde):
`denetim/YZ-KIRLENME-1001-RUSYA-ONERI.json` · `denetim/YZ-KIRLENME-1001-ATIF-DUZELTME.json`

## ⚠️ EK 3 düzeltmesi — "11 yanlış TDV maddesi" YANLIŞTI
- **10'u benim ayrıştırıcımın hatası.** Bu kayıtlarda alıntı, doğru TDV maddesinin hemen arkasında duruyor (örneğin `TDV revan ('…')`). Ayrıştırıcı segmentteki **ilk** slug'ı aldı.
  - Liste: `ermeni` #8 · `gurcistan` #7 · 24 · 28 · `once1281_ortadogu` #92 · 109 · 110 · 112 · 114 · 142.
- **Gerçek olan yalnız `once1281_avrupa` #204.**
- 📌 **Ders:** çok kaynaklı bir `kaynak:` alanında alıntının sahibi, **alıntının hemen önündeki** atıftır. Segmentin başındaki atıf değildir.
- **Koordinatörün "23 kalem" hesabı EK 3'teki sayıya dayanıyordu. Gerçek düzeltme kalemi 10.**

## ① Rusya — 77 madde (`kronoloji_cok_rusya.js`, "sayfa açılamadı (401/403), arama özetinden okundu")
| Sınıf | Madde | Öneri |
|---|---|---|
| **GÜN DOĞRULANDI**: açılan kaynakta birebir | **8**: #17 (cyberleninka) · #68 (Encyclopedia of Ukraine) · #77 · #86 (prlib.ru) · #82 (militera, Grossul-Tolstoy) · #83 · #90 · #91 (Britannica editör metni) | `kaynak-guncelle`: arama özeti beyanı açılmış kaynakla değiştirilir |
| **GÜN DOĞRULANAMADI** | **15**: #28 · #61 · #62 (Britannica yalnız yıl veriyor) · #16 (mil.ru açılmıyor) · #30 · #31 (BRE 403) · #39 · #41 · #60 · #65 · #72 · #78 (Rus/Kazak resmî siteleri erişilemiyor) · #80 · #81 · #85 (yalnız PDF, izinsiz indirilmedi) | `gun-dusur`: `t` → YYYY-01-01, `ic_not_t`ye "gün model özetinden, doğrulanamadı". ⚠️ **Değişmez 2'ye dokunur, uygulamadan önce ÖLÇ** |
| **YIL DOĞRULANDI** (Britannica editör metni) | **12**: #19 · 21 · 25 · 29 · 33 · 45 · 46 · 48 · 57 · 69 · 75 · 84 | `kaynak-ekle` |
| YIL ÖLÇÜLDÜ, YOK: Britannica sayfası açıldı ama o yılı vermiyor | **7**: #23 · 32 · 35 · 43 · 54 · 59 · 63 | `not-ekle` (yıl düşürülmez, madde silinmez) |
| YIL ÖLÇÜLEMEDİ: BRE 403 / Britannica sayfası yok | **35** | `not-ekle` |

🔴 **BRE (old.bigenc.ru ve bigenc.ru):** iki adres de `bre.ruwiki.ru`ya yönlendiriyor ve bu makinenin IP'sine **tarayıcıda da 403** veriyor. Bu bir IP engeli; Britannica'daki "betik 403, tarayıcı 200" durumu burada **tutmadı.** BRE'li maddeler başka bir makineden ya da arşivden denenebilir.

## ② Atıf düzeltme önerisi — 10 kalem
- **Yanlış maddeye ya da kaynağa yazılmış (4):**
  - `once1281_avrupa` #204: alıntı «İdil Bulgar Hanlığı»nda, «Bulgar» maddesine yazılmış.
    - **Kimlik karışması YOK:** `b`, `yer` ve `yer_id` ("Bulgar (Bolgar)") tutarlı.
    - ⚠️ Ek gözlem: `taraflar` alanında `idil-bulgar` yok, yalnız `mogol-imparatorlugu` var.
  - `once1281_avrupa` #3 · 10 · 164: Türkçe alıntılar TDV «Bulgaristan»dan, Hrvatska atfının arkasına yazılmış.
- **Sessiz metin değişikliği (6):**
  - `ince_bati_afrika` #0: kelime sırası değiştirilmiş.
  - `afrika` #5: "yaparak" → "yapıp".
  - `ince_bati_afrika` #12: "(Pöl, Fulbe)" atılmış.
  - `venedik` #5: iki cümle arasındaki cümle "…" konmadan atlanmış.
  - `1923_1945` #230: "anlaşmazlıkların" → "anlaşmazlıklar".
  - `afrika` #3: "bırakıp" → "bıraktı".
- **Düzeltme gerekmeyen 4 kayıt:** `sirbistan` #6 · 9 · `venedik` #2 · 4 — alıntı yalnız cümle ortasında kesilip sonuna nokta konmuş.
- Her kalemde `ESKI` (kaynak alanının tamamı), `YENI`, `ESKI_parca` ve `YENI_parca` var. `ESKI_parca`nın kaynakta, yeni metnin TDV gövdesinde birebir bulunduğu `assert` ile sınandı.
