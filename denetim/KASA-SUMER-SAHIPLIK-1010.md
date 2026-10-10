# KASA-SUMER-SAHIPLIK-1010 — Sümer kutusu MÖ 539 → MS 226 sahiplik zinciri, nokta nokta

Görev: YILDIRIM BAYEZIT (asıl cephe: sahiplik kapısı %83,0 boş) · Araştırmacı: KASA · `data/` DONUK ·
main 1896b8ec.
Pencere: MÖ 539 → MS 226 (`-0538 … 0225`), 765 yıl.
Girdi: KASA-KUNYE-AHAMENI-PART-1010 (künye önerileri ve TDV'den 3 halka) + KASA-SUMER-BOSLUK (27 nokta).
Bu turun farkı: **İslâm öncesi ⇒ AKADEMİK kaynak esas** (HUKUM §9.2). TDV bölge cümleleri (S) halka olmaz;
şehri ADIYLA anan, yıllı (Y) ya da hükümdar bağlamlı (Ş) akademik cümle aranır.
Kurallar:
- R1 fetih = [olay, künye sonu]; R2 = hükümdar adlı tarihli belge/yapı ⇒ künye penceresi.
- Gün yoksa `YYYY-01-01`; yıl yoksa yıl YAZILMAZ.
- `d:` değerleri `data/devletler.js` TARANARAK (tahmin edilen id aranmaz).
- 12 noktada MÖ 539 sonrası tasdik yok (AHAMENI-PART §1.3) ⇒ onlara dilim değil `t:` (son tasdik).

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
- **Nokta:** 27 (koordinatörün "26"sı + Susa kenarı). Pencerede var: **15**, t: alacak: 12 (değişmez).
- **devletler.js:** Ahamenî / İskender / Selevkos / Part künyelerinden **hiçbiri yok (%90)**; yalnız
  `sasani` (0226) var ⇒ bütün `d:` değerleri "künye yok" diye adıyla bildirilecek.
- **Dilim iskeleti (15 noktanın her birinde 4-5):** ahameni `-538…-331` · iskender `-331…-322` ·
  N `-322…-311` (Diadokhoi) · selefki `-311…-140` · part `-140…0225`.
- **Şehir adlı akademik tanık (Y ya da Ş) bulunacak nokta sayısı:**
  - Ahamenî **8 ± 3** (Uruk, Ur, Sippar, Borsippa, Nippur, Susa, Larsa, Kiş/Dilbat).
  - İskender **2 ± 1** (Susa, belki Uruk).
  - Selefki **4 ± 2** (Uruk, Borsippa, Susa, Nippur).
  - Part **3 ± 2** (Uruk, Susa, Nippur).
- **Gün düzeyinde uç:** en az 1. Sippar: Nabonid Kroniği "14 Tašritu" (MÖ 539 Ekim) ⇒ Sippar f gün düzeyinde.
- **Bağlı pay** (15 nokta × 764 yıl): **%25 ± 10** (AHAMENI-PART'ta %7,7 idi; akademik kaynakla ~3 kat).
- **Tereddüt beklenen sınırlar:**
  - ① Selefki → Part: 141 (Mithridates I) ↔ 130-129 (VII. Antiokhos'un geri dönüşü) ⇒ en az 1 kesinti dilimi.
  - ② **Karakene/Mesene (Charakene)** krallığı (MÖ ~127 → MS 222): güney Sümer (Ur, Eridu, Larsa, Uruk?) Part
    vasalı mı, ayrı sahip mi ⇒ **künye sorusu**, en az 2 noktada sahiplik belirsiz.
  - ③ Susa: Elymais (MÖ ~147 → MS 221) ⇒ Part yerine Elymais dilimi olabilir.
  - ④ İskender'in ucu: 331 (Gaugamela → Babil'e giriş) ↔ 332 (TDV dizisi).

## 1. ÖLÇÜM

### 1.0 Yöntem ve kaynaklar
Arama üç paralel alt ajanla yapıldı (Ahamenî · İskender/Selevkos · Part/Karakene/Elymais). Kilit alıntılar
tarafımdan ham sayfa metniyle birebir doğrulandı: NaBuCCo 2/72/122/130 · CDLI P407833 · Oracc Q004179 ·
Olmstead 1937.
**Kullanılan (akademik):**
- **NaBuCCo** (ÖAW/KU Leuven, Jursa GMTR 1 sigla) — arşiv tanımları.
- **CDLI** katalog kayıtları — düzyazı değil, alan değeri ("Dates Referenced"); CDLI hükümdar ataması zaman
  zaman "?" taşır, öyleyse işaretlendi.
- **Oracc** RIBo / CAMS-SelBI yazıtları.
- **livius.org'da barınan çeviriler:** Grayson ABC 7 · Finkel–van der Spek–Pirngruber BCHP (2020) ·
  Sachs–Hunger ADART I.
- **Olmstead**, "Cuneiform Texts and Hellenistic Chronology", *CPh* 32 (1937).
- **EIr** maddeleri (web.archive.org kopyası; doğrudan 403): Schippmann "Arsacids ii" (1986) ·
  Martinez-Sève "Susa iv" (2015) · Hansman "Characene" (1991), "Elymais" (1998) · Jakubiak "Arsacids viii" (2008).
- **Diğer:** Hunger & de Jong, *ZA* 104 (2014) · Gregoratti, *Anabasis* 2 (2011) · Boiy, *JCS* 52 (2000) ·
  Corò 2018 · CSAD Oxford (SEG VII) · Taylor, *KOINON* 2020 · Butcher 2015 (Warwick).
**Kullanılmayan:** attalus.org (Welles RC 75; izinli değil — yerine Martinez-Sève) · Wikipedia türevleri ·
yalnız arama özeti olanlar (Gareus tapınağı 110/111, Marad "Parthian", Briant "Aboulites" 331) · CDLI'de
provenansı "[uncertain]" olanlar beyanlı.
Künye pencereleri (Mezopotamya ucu, astronomik; ÖNERİ, künye açmak koordinatörün):
- `ahameni` −538 → −330-10 (ABC 7: 539; Gaugamela 1 Ekim 331 / Babil'e giriş 22 Ekim 331 — livius-ADART notu).
- 🆕 **`iskender` → `makedon` (Argead)**: −330-10-22 → −311. İskender'in ölümünden (323) sonra da belgeler
  III. Philippos ve IV. Aleksandros yıllarıyla tarihleniyor (UET 4 43 "Philip yr 7" = 317; NaBuCCo "7 Alx IV";
  Corò "dating to Alexander IV … from Larsa"). ⇒ AHAMENI-PART'ın "−322…−311 N (Diadokhoi)" bloğu **N değil**,
  Argead hanedanı adına tarihli. ⚠️ Boiy 2000: "BM 105211 is a rental contract from Larsa", **Antigonos 9.
  yılı** ile tarihli ⇒ 315-311 arası Antigonos ↔ Seleukos çekişmesi (iki sahip).
- `selefki` −311 → −140-07-03. Olmstead: "Mithradates I conquered Seleucia before the lunar eclipse of year 171,
  Duzu 13 (July 22, 141 B.C.); presumably, therefore, the enthronement was Simannu 28 (July 3, 141 B.C.)".
  "presumably" ⇒ `ay`.
- Ara dilim: Olmstead "The sole record of the temporary reconquest of Babylonia by Antiochus VII is a copy of an
  ancient hymn, year 182, Airu 22 (June 1, 130 B.C.)" ⇒ **selefki −129-06-01 (tek tanık, pencere bilinmiyor)**.
  Ardından: "…of Aspasine of Charax, as a letter dated year 184, Airu 24 (June 1, 127 B.C.) proves" ⇒
  Babil'de **Karakene −126-06-01** · "in year 122‑186, 126/5 B.C., astronomical texts were once more dated by
  Arsaces the king" ⇒ **part −125**.
- `part` −140 → 0224-04-28. Schippmann: "The decisive battle, probably on 28 April 224 … meant the end of the
  Parthian empire, even though Ardašīr only had himself crowned … probably in CE 226".
  ⚠️ `sasani` künyesi f **0226-01-01** ⇒ 224-04-28 → 226-01-01 arası **~20 aylık delik**; Susa için
  Martinez-Sève "conquered by the Sasanians in 224".

### 1.1 `d:` değerleri devletler.js'te (③) — TARANDI (897 id, main 1896b8ec)
`ahameni` · `iskender`/`makedon` · `selefki`/`selevkos` · `part`/`eskani`/`arsak` · `karakene`/`mesene` ·
`elymais` — **HİÇBİRİ YOK** (öngörü %90 ✓). Bulunan tek eşleşme `iskender` alt dizgesi →
`arnavutluk-iskenderbey` (ilgisiz). **`sasani` VAR** (0226-01-01 → 0651-01-01).
⚠️ Ek bulgu: MÖ künyelerinin HİÇBİRİ (`akkad`, `ur-iii`, `eski-babil`, `asur` …) `data/`'nın hiçbir .js
dosyasında yok; Sümer noktalarının kendisi de veride yok. İkisi de denetim önerisi olarak duruyor.
⇒ Aşağıdaki bütün `d:` değerleri **"künye yok"** (önerilen id ile).

### 1.2 Nokta nokta zincir (②) — pencerede VAR olan 15 nokta
Gösterim: `d` f → t · sınıf · kaynak. Gün yoksa `YYYY-01-01` (pencere işaretçisi, ölçüm değil). R2: hükümdar
adlı tarihli belge ⇒ künye penceresinin tamamı.
**URUK** (bağlı 743/763 yıl)
- `ahameni` −538 → −330-10-22 · Y/R2 · Oracc RIBo Cyrus II 03 (Uruk tuğlası, Ş) · NaBuCCo 75 Kurī B "(41 Art I-6
  Dar II)" · CDLI P407836 "Legal tablet excavated in Uruk" Darius II 17 (407).
- `makedon` −330 → −311 · **B** (Uruk'u İskender/Argead yılıyla anan belge bulunamadı).
- `selefki` −311 → −140 · Y/R2 · BCHP 10 "The first document dated to Seleucus II is a tablet from Uruk dated to
  22 Simanu (III) SE 67 = 11 July 245" · Oracc SelBI Anu-uballiṭ Nikarchos (SE 68 = 244) · Kephalon (SE 110) ·
  son: CDLI P296727 SE 166 (146).
- `part` **−140-10-12** → 0224-04-28 · Y/R1 · Schippmann "by 12 October 141, Mithridates' power was recognized as
  far afield as the ancient Sumerian city Uruk".
  ⚠️ −126 civarı Karakene: Gregoratti "Archaeological data seems to suggest the occupation of other sites in the
  region as Larsa, Uruk and Tello" — "seems to suggest", arkeolojik ⇒ halka ALINMADI, beyan.
- Son tasdik (varlık): Hunger & de Jong 2014 "Almanac W22340a From Uruk … the year 326 in the Arsacid Era,
  equivalent to 79/80 AD … the latest datable cuneiform text" ⇒ en geç 0080 (sonrası Gareus 110/111 doğrulanamadı).
**UR** (227)
- `ahameni` Y/R2 · Oracc RIBo Cyrus II 02 (Ur tuğlası) · NaBuCCo 4 Imbia "brought to the Museum from Ur … (8-24 Dar)" ·
  CDLI P414699 Artaxerxes II 45 (NaBuCCo "2-25 Art ?" ⇒ ⚠️).
- `makedon` Y/R2 · CDLI P414739 UET 4 43 "Ur (mod. Tell Muqayyar)" "Philip Arrh.07" (317).
- `selefki` · `part` · **B** (bulunamadı).
**KİŞ** (398)
- `ahameni` Y/R2 · NaBuCCo 28 "(8 Xer-34 Art I)" · CDLI P385222 "Tablet excavated in Kish" Art 34.
- `makedon` Y/R2 · CDLI P342411 OECT 9 74 "Letter tablet excavated in Kish" Alexander III 11 (≈326) · NaBuCCo 2
  "Kiš/Hursangkalama (2 Npl-7 Alx IV)".
- `selefki` Y/R2 · CDLI P342408 SE 20 · P342409 SE 39 (273).
- `part` **B** — Langdon 1934 "pottery of the periods … Seleucid, Parthian, and Sassanian" (S, sahiplik değil).
- ⚠️ NaBuCCo 2: "the temple ceased to function in the Achaemenid Period" (tapınak, şehir değil).
**NİPPUR** (308)
- `ahameni` Y/R2 · NaBuCCo 130 "The early Ekur Archive (Enlil's temple in Nippur) … (Nbk 37–Dar 32)" · NaBuCCo 131
  geç Ekur "35–36 Art II" · NaBuCCo 10 Murašû "(10 Art I-1 Art II)".
- `makedon` · `selefki` · **B** — SE 158 senedi yalnız attalus.org'da ⇒ kullanılmadı.
- `part` **0001 → 0100 (`yuzyil`)** · Ş · Jakubiak EIr "Foremost is Nippur of the 1st century CE … a fort built
  around the ziggurat" (Arsakî askerî mimarisi maddesi). Geri kalan Part yılları B.
**LARSA** (398)
- `ahameni` Y/R2 · CDLI P407833 "Legal tablet excavated in Larsa (mod. Tell as-Senkereh)" Darius II 15 (409) — doğrulandı.
- `makedon` Ş · Corò 2018 "dating to Alexander IV, are already published texts from Larsa" · ⚠️ Boiy: Antigonos 9.
  yılı tarihli Larsa sözleşmesi.
- `selefki` Y/R2 ⚠️ · CDLI P342363 SE 86 (225) — provenans "[uncertain]".
- `part` **B** (Karakene: Gregoratti "seems to suggest", alınmadı).
**BORSİPPA** (398)
- `ahameni` Y/R2 · NaBuCCo 72 "active in Borsippa from roughly 17 Npl to 1 Xer" · Ezida bira arşivi "4-5 Art (III)".
- `makedon` Y · BCHP 3 "[Year 8] of Alexander … [the satrap of A]kkad went to Borsippa" (309/8).
- `selefki` Y/R2, **gün** · Oracc SelBI Antiochus I silindiri "in year 43 (= 27 March 268 BC), I laid the
  foundations of Ezida … the temple of Nabû which is in Borsippa" — doğrulandı.
- `part` **B** — Livius (Lendering makalesi, ADART −132B özeti) "religious riots in Babylon and Borsippa"
  (Ekim/Kasım 132; Part prensi Bagayasha) ⇒ birincil çevirinin metni değil, **alınmadı**.
**KUTHA** (379)
- `ahameni` Y/R2 · CDLI P554842 (Stolper 1991) "Legal tablet excavated in Kutha" Artaxerxes 4 · NaBuCCo 22 "(16 Xer-9 Art I)".
- `makedon` **B** — BCHP 3 "(2 March 309), he went down to Cuthah and he plundered" — Antigonos AKINI, sahiplik
  değil (⑧) ⇒ alınmadı.
- `selefki` Y/R2 · CDLI P296448 SE 125 (187).
- `part` **B**.
**SİPPAR** (227)
- `ahameni` −538 → … · Y/R1 · ABC 7 "On the fourteenth day Sippar was captured without a battle." (Nabonid 17. yılı = 539;
  livius sayfasında ay/Jülyen gün yok ⇒ `yil`) · NaBuCCo 122 Ebabbar "to the second year of Xerxes" (484).
- `makedon` **−330-10-18** → −311 · Y/R1, **gün** · ADART −330 "On the eleventh, in Sippar an order of Al[exander
  …]" + livius notu "18 October 331 BCE".
- `selefki` **B** (BCHP 11 "Seleucia on the Euphrates (= Sippar ?)" — "?" ⇒ alınmadı).
- `part` **B** — Butcher 2015 sikke dolaşımı "Sippar belonged to the northern pool of circulation" (sahiplik değil);
  varlık: Caracalla (212-217) üzerine darp ⇒ son tasdik ≥0212.
**DİLBAT** (208) · `ahameni` Y/R2 · NaBuCCo 115 Dābibī "(2 Nbn-0 Bēl-šimânni)" (484) · CDLI P556688 Art II 44 "?" ·
geri kalan **B**.
**MARAD** (208 / varlık 509) · `ahameni` Ş/R2 · CDLI P285918 "tablet excavated in Marad" Darius I (yılsız) ·
geri kalan **B** · varlık sonu Pleiades `hellenistic` (−29).
**SUSA** (566; kenar, Elam)
- `ahameni` Ş/R2 · DSf "This palace which I built at Susa" (Darius I) · A²Sa (Artaxerxes II).
- `makedon` **B** — Briant "Aboulites" yalnız arama özeti (EIr 403).
- `selefki` −311 → **≈−146** · Y · Taylor *KOINON* 2020 "Alexandrine coinage of Seleukos struck in the period
  311/0-304/3BC" (Susa darphanesi) · CSAD SEG VII 2 "manumission act from Susa dated to Seleucid year 136 (177/6 BC)".
- 🆕 `elymais` ≈−146 → ≈−139 · Y (`onyil`) · Hansman "in about 147 B.C.E. … Kamnaskires I took possession of
  Susiana … at the capital Susa". ⚠️ ⑥ Martinez-Sève "about 143" — iki "about" ⇒ `onyil`.
- `part` ≈−139 → **0045** · Y · Martinez-Sève "they were driven out around 140 by the Parthian Mithridates I … the
  Parthians managed to hold on to Susa at least until 45 CE" · Artabanus II mektubu 21/22 · Phraates IV 31/30.
- 🆕 `elymais` 0045 → 0215 · Ş (`onyil`) · Martinez-Sève "Beginning in the second half of the first century CE, it fell
  under their dominion" · Hansman "the Parthians may have lost Susa in about 45 C.E.".
- `part` 0215 → 0224 · Y · Hansman "A commemorative inscription recovered at Susa and dated to 215 C.E. attests that
  Khwasak … had been satrap of Susa under Artabanus IV" · Martinez-Sève "became Parthian once again in 215 CE and was
  conquered by the Sasanians in 224".
**ERİDU · İSİN · DĒR** (0)
- **Eridu:** bulunamadı. BCHP 6'daki "within Eridu" büyük olasılıkla Babil'in Eridu mahallesi (⑧).
- **İsin:** NaBuCCo 70 "Isin region" yalnız metadata, cümle değil (S) · Hrouda 1977 "ob Isin über die
  seleukidisch-parthische Zeit hinaus kontinuierlich besiedelt war" (varsayım).
- **Dēr:** CDLI P333865 edebî tablet, kral/yıl yok.
- Üçü de pencerede tamamen **B**.
**NİNA** (0 / varlık 209): bulunamadı; varlık sonu Pleiades `classical` (−329) ⇒ AHAMENI-PART §1.3'teki gibi `t:`.
**Pencerede YOK (12, değişmez — AHAMENI-PART §1.3):** Şuruppak · Lagaş · Eşnunna · Tutub · Bad-tibira · Kisurra · Zabalam ·
Umma · Adab · Girsu · Tell al-Lahm · Tell al-Ubaid ⇒ `t:` = son tasdik, dilim yok.

### 1.3 Sayılar ve öngörü sınavı
```
pencere MÖ 539 → MS 226, var olan 15 nokta: 10.637 nokta-yıl
bağlı (Y/Ş, künye önerilirse)      4.060   %38,2     (AHAMENI-PART: %7,7 — TDV ile)
B (bölge künyesi var, şehir bağlanmadı)   kalan %61,8 (Eridu · İsin · Dēr · Nina tamamen B)

                        öngörü      ölçüm
devletler.js'te künye    yok %90     YOK (6 aday id) ✓ · sasani VAR
Ahamenî tanıklı nokta    8 ± 3       11  ✓ (sınırda)
İskender (III.)          2 ± 1       2 (Kiş · Sippar) ✓ · Argead geneli 5
Selefki                  4 ± 2       6 (Uruk · Kiş · Larsa⚠ · Borsippa · Kutha · Susa) ✓
Part                     3 ± 2       3 (Uruk · Nippur yuzyil · Susa) ✓
gün düzeyinde uç ≥1      Sippar      Sippar −330-10-18 · Borsippa −267-03-27 · Uruk −140-10-12 ✓
                                     (Sippar 539 günü ÇIKMADI — ay livius'ta yok)
bağlı pay %25 ± 10       %38,2       ✗ (üstünde)
tereddüt ① 141/130       ✓ — selefki ara dilimi −129-06-01 (tek tanık) + Karakene −126-06-01 (Babil)
tereddüt ② Karakene      ✓ — Babil'de tarihli (Olmstead); Uruk/Larsa için yalnız "seems to suggest"
tereddüt ③ Elymais Susa  ✓ — İKİ dilim (≈−146…−139 · 0045…0215)
tereddüt ④ 331/332       ✓ — akademik: Ekim 331 (livius-ADART); TDV "332" dizisi ⇒ −331 değil −330
```
🆕 Öngörmediğim:
- Argead (Diadokhoi) bloğu N değil, tarihli.
- Antigonos çekişmesi (Larsa).
- Part sonu 224 ↔ `sasani` 226 deliği.

## 2. ③ İSTİYORUM
a) **Künye kalemleri (senin):**
   - `ahameni` −538 → −330-10-22 (Mezopotamya ucu).
   - `makedon` (Argead) −330-10-22 → −311. Antigonos 315-311 için ayrı not.
   - `selefki` −311 → −140-07-03 (`ay`) + ara dilim −129.
   - `karakene` (Babil −126; bölge Uruk/Larsa yumuşak).
   - `part` −140 → 0224-04-28.
   - `elymais` (yalnız Susa, iki dilim).
   - ⚠️ `sasani` f 0226 ↔ Part sonu 224-04-28 / Susa 224: f'nin 0224'e çekilmesi ya da 20 aylık deliğin beyanı.
b) **Veri partisine** (koşu sonrası): §1.2 zincirleri. Bağlı pay %7,7 → %38,2. Kalan B'nin en büyük blokları:
   Eridu · İsin · Dēr tamamen; Ur, Sippar ve Dilbat'ta Selevkos ve Part dönemleri.
c) **Sıradaki en kârlı kaynak:** Waerzeggers & Seire (ed.), *Xerxes and Babylonia* (OLA 277, OAPEN). Ur/Uruk/Kutha'nın
   484 sonrası sürekliliği için en iyi tek kaynak, ama Anubis bot engeli var, aşılmadı. Van der Spek 1992 "Nippur,
   Sippar, and Larsa in the Hellenistic Period" açık değil.
