# F-GERİ parti B — durum: SIĞ, UYGULANMAZ (KASA SALI, gece-124)

Dosya: `FGERI-ONERI-B.json`. 102 kayıt, 50 künye grubu; Mapimí ve Marcapata dahil.

## KASA ölçümü (`fgeri_b_say.py`)

- Kuruluş bulundu: 23. BULUNAMADI: 79.
- Kuruluşunda alıntı olan kayıt yalnız 8. **22 kayıtta kuruluş ya da zincir "kaynaksız bilgi"**, yani modelin kendi bilgisi.
- Öncül dilim hükümleri: 69 ONERI, 9 BEYANLI, 1 KAYNAKLI. Tek KAYNAKLI olan Frankfurt (Oder) 1253, ON5'ten taşındı.
- Ajanın kendi beyanı: sayfa.py ile ham okunan sayfa yok; birkaç lex.dk ve Hrvatska enciklopedija sayfası WebFetch özetiyle okundu.
- Yapısal doğrulama temiz: hayalet yok, zincirler bitişik, sahipsiz dilim açılmadı. Tek istisna Benkovac'taki kopukluk (aşağıda).

## Hüküm

- 🔴 Bu dosyanın kuruluş günleri ve öncül zincirleri **UYGULANMAZ.** CLAUDE.md "Tarih uydurma" kuralı geçerli: kaynaksız model bilgisi dayanak olamaz, ONERI bile sayılmamalı.
- Kullanılabilir olanlar şunlar:
  - (a) Önceki turlarda kaynaklanmış kalemler: Frankfurt 1253 ve Schwerin 1160 (ON5, EMRELİC onaylı).
  - (b) Aşağıdaki yapısal bulgular. Bunlar kaynak değil, ölçümdür.

## Yapısal bulgular (ölçüm; EMRELİC / Emre kararı)

- **Benkovac:** 1918-11-12 → 1919-09-10 arasında `habsburg` t ile itilaf f arasında künye yok; zincir kopuk (`kopuk_aralik`).
- **Fiume (Carnaro):** 1918-11-16 → 1920-09-08 arası köprü gerekli. Önerilen `italya` BEYANLI.
- **Filipin (Malolos):** 1898-12-10 → 1899-01-23 arasında künye yok.
- **Vukovar 1991–96:** fiilî Sırp idaresi künyesi yok. Önerilen de jure `hirvatistan` BEYANLI.
- **Tannu-Tuva 1917–21:** `sovyet-rusya` BEYANLI önerildi.
- **Vatikan:** ajan `italya` 1870-09-20 → **1929-06-07** önerdi. ⚠️ Bu, EMRELİC'in Vatikan f **1929-02-11** kararıyla çelişiyor; o kararla hizalanmalı. 1870 öncesi Papalık Devleti zinciri de eksik.
- **Charlottenburg:** yer (Lietzow köyü 1239) mi, ad (1705) mı? Emre'nin kararı.
- **Wellington:** kur ilk dilimden 15 gün önce; arada sahipsiz boşluk var. Önerilen `yeni-zelanda-birlesik-kabileler` BEYANLI.
- **Kosta Rika 1821–23:** Meksika dönemi yerine `guatemala` BEYANLI kullanıldı; kontrol edilmeli.
- 🔴 **"Beyan G31.5 B56.5" (Uruguay):** gerçek bir yerleşim değil, koordinat yer tutucusu. Kayıt incelenmeli (KASA PAZAR / LAB).
- **Limón:** 1838'de yerleşim yok; kur ileri gitmeli (merdiven ④).
- **Adelaide:** "kur DOĞRU" dendi ama kaynaksız.

## EMRELİC kararları (gece-124)

- **Sıra:** önce madde kuyruğu (Kafkas, UC103, Norveç, Batı Yeni Gine). B ikinci turu ondan sonra yapılır: Sonnet, 10–15 kayıtlık partiler, ülke kaynağı önceden belirlenmiş, sayfa.py ham zorunlu, "kaynaksız bilgi" yasak.
- **Vatikan:** `italya` t 1929-02-11 = `vatikan` f 1929-02-11 (t = ardıl f). 06-07 `ic_not`a.
- **Fiume:** köprü tek "italya" değildir. Sıra: Müttefik/İtalyan işgali 1918-11-17 → Carnaro 1919-09-12 → 1920-12-29 → Fiume Serbest Devleti (Rapallo 1920-11-12; fiilen 1921) → 1924-03-16 İtalya ilhakı. Künye soruları LAB SALI'ya gönderildi; gelene kadar BEYANLI.
- **Benkovac, Malolos, Vukovar 1991–96, Tannu-Tuva 1917–21:** künye soruları listesi LAB SALI'ya gönderildi. Vukovar'da `sirp-krajina-cumhuriyeti` künyesi var; Krajina 1995-08-07 ve UNTAES 1998-01-15 kararlarıyla hizalanacak.
- **Wellington:** UMIT'in Wellington notuyla birleştirilir (Māori künye sorusu). 15 günlük boşluk D1 kuralıyla kapatılır: önceki dilim uzatılır ya da kur ilk dilime hizalanır, BEYANLI.
- **Limón:** merdiven ④ ile f ileri, kaynakla.
- **"Beyan G31.5 B56.5" (KASA ölçümü):** başıboş bir kayıt değildir. `data/yerlesimler_gamerika.js:131`'deki kayıt KASITLI bir boşluk beyan noktasıdır: `kasitli_bosluk:true`, `bos:"kabile"` (Charrúa / Minuan / Guenoa; HSAI c.1, Serrano), `s: uruguay-cumhuriyeti` 1828-08-27 → 2000-12-31.
  - Eşi `data/bos_alanlar.js:206`'da (p: 1281 → 1828-08-27). Ayrıca `yer_yama_1923_1945.js:4139` ve paket dosyalarında geçiyor.
  - Aynı dosyada 46 "Beyan …" noktası var; bu bir tasarım.
  - F-GERİ'ye girmemeli: 1828 öncesi kaynaklı kasıtlı boşluk, kur = künye f yapıtı DEĞİL. Bu, KUR-KUNYE taramasının bir yanlış pozitifidir. 198'in içinde bu tek Beyan kaydı var.

## LAB SALI künye cevabı (gece-124; ölçüm origin/main devletler.js)

- **Fiume:** künyeler VAR: `carnaro-naiplik` (1920-09-08 → 1920-12-29) ve `fiume-serbest-devleti` (1920-11-12 → 1924-01-27).
  - (a) carnaro f GENİŞLET adayı 1919-09-12 (D'Annunzio rejimi; Carta 1920-09-08 aynı rejimin anayasasıdır).
  - (b) fiume f 11-12 ile carnaro t 12-29 arasında 6 haftalık çakışma var. Rakip hükûmet kuralıyla fiume f → 1920-12-29 mu, imza kuralıyla 11-12 mi? **EMRELİC.**
  - (c) t 1924-01-27 imza olarak kalır; 03-16 `ic_not`a.
  - (d) 1918-11-17 → 1919-09-12 `isg italya`, BEYANLI.
- **Benkovac:** `itilaf-emaneti` (f 1919-09-10) Dalmaçya için şüpheli. LAB önerisi: 1918-10-29 `shs-devleti` (aday) → 1918-12-01 `yugoslavya`. İtalyan işgal hattı kapsıyorsa `isg italya`, kaynakla.
  - `shs-devleti` açılana dek D1 için **EMRELİC kararı** gerekiyor. KASA önerisi: önceki sahip `habsburg` BEYANLI uzatılır.
- **Malolos:** ara dönem için ayrı künye açılmaz. `filipin-malolos-cumhuriyeti` f 1899-01-23 → 1898-06-12 GENİŞLET adayı (Aguinaldo'nun devrimci hükûmeti aynı polity).
  - İspanyol elindeki yerler 1898-12-10'a dek `ispanyol-filipinler`. Manila 1898-08-13'ten `isg abd`.
- **Vukovar:** RSK t 1995-08-07 ile UNTAES f 1996-01-15 arasında Doğu Slavonya'da 5 ay boşluk var. RSK orada sürdü (Erdut 1995-11-12) → RSK t GENİŞLET adayı 1996-01-15. SBWS SAO RSK'nın kurucu birimidir, ayrı künye açılmaz.
  - Zincir: 1991-11-18 → 12-19 SAO (beyanlı), 1991-12-19 RSK, 1996-01-15 `untaes`, 1998-01-15 `hirvatistan`.
  - 🔴 KASA notu: 1991-11-18 → 12-19 "beyanlı SAO" dilimi künyesiz kalırsa sahipsiz olur. D1 kuralı gereği önceki sahip `yugoslavya-federal` BEYANLI korunur.
- **Tannu-Tuva:** "sovyet-rusya BEYANLI" tek blok yanlıştır. 1914 Rus himayesi, ardından 1918–21 Beyaz, Çin/Moğol ve Kızıl dilimleri yerleşim düzeyinde `isg` zinciri olarak kaynakla yazılır (Paine, Forbes). Ayrı künye gerekmez. Alt `s:` için **EMRELİC kararı.**

## EMRELİC kararları (gece-125) + KASA künye ölçümü

- **Fiume:**
  - Rakip hükûmet kuralı: `fiume-serbest-devleti` f **1920-12-29** (Carnaro'nun fiilen sona erişi) = `carnaro-naiplik` t (t = ardıl f). Rapallo 11-12 `ic_not`a.
  - `carnaro-naiplik` f GENİŞLET 1919-09-12 (künye bugün 1920-09-08).
  - 1918-11-17 → 1919-09-12 dilimi tek başına `isg` yazılmaz; D1 gereği altında `s:` olmalı. Fiilî denetim İtalyan Ulusal Konseyi ve çoğunluğu İtalyan Müttefik kuvvetlerindeydi → `s: italya` BEYANLI (`italya` 1861-03-17 → 1946-06-18, hayalet değil), `isg` katmanı yok.
  - 1918-10-29 → 11-17 arası SHS denetimi kaynakla gösterilirse ayrı BEYANLI dilim olur.
  - `fiume-serbest-devleti` t 1924-01-27 kalır (imza); 03-16 `ic_not`a.
- **Benkovac:**
  - KASA ölçümü: `habsburg` t **1918-11-12**, `yugoslavya` f 1918-12-01, `shs-devleti` YOK.
  - → Habsburg'u 1918-12-01'e uzatmak **HAYALET üretir** (EMRELİC'in şartı tutmadı).
  - Karar: `shs-devleti` adayı AYNI commit'te açılır. Öncelikli aday; Maribor, Ptuj ve Ston için de gerekiyor. Zincir: … `habsburg` → 1918-10-29 `shs-devleti` → 1918-12-01 `yugoslavya`.
  - ⚠️ `habsburg` t 1918-11-12 ile SHS f 1918-10-29 arasında 2 hafta çakışma olacak; künye kararında hizalanmalı (LAB). `itilaf-emaneti` Dalmaçya'ya uygulanmaz.
- **Tannu-Tuva:** himaye kuralı onaylandı.
  - 1914-04-17 (Gregoryen; O.S. 04-04, kaynakla) → `s:` yerli Uryanhay yönetimi + `v: rusya`. Yerli künye yoksa `s: rusya` BEYANLI.
  - 1917 sonrası Beyaz, Çin/Moğol ve Kızıl dilimleri `isg` zinciridir. 1921-08-14 `tannu-tuva` (künye VAR: 1921-08-14 → 1944-10-11).
  - ⚠️ KASA ölçümü: `rusya` künyesi t **1917-03-15**'te bitiyor. Ardından `rusya-gecici-hukumet` (1917-03-15 → 1917-11-07) ve `sovyet-rusya` (1917-11-07 →) geliyor. Rus dilimi 1917-03-15'te `rusya-gecici-hukumet`'e geçmeli, yoksa hayalet olur.
- **Onaylananlar:** Malolos f 1898-06-12 GENİŞLET; Vukovar RSK t 1996-01-15 GENİŞLET; 1991 SAO dilimi `yugoslavya-federal` BEYANLI.

## Öneri: ikinci tur

- 79 BULUNAMADI ve 22 kaynaksız kayıt için daha dar partiler gerekiyor: künye grubu başına 10–15 kayıt, ülke kaynağı önceden belirlenmiş.
  - DDR/Berlin: lex.dk ve Deutsche Biographie / Brandenburg kaynakları.
  - Yugoslav halefleri: Hrvatska enciklopedija, sayfa.py ham.
  - Okyanusya: Te Ara (403; tarayıcı).
  - Ryukyu ve Mançukuo: Japonca kaynak.
- Ajanlara sayfa.py ham kullanımı zorunlu yazılır. "Kaynaksız bilgi" yasaktır; bilinmeyen BULUNAMADI kalır.
- EMRELİC kararını bekliyor.
