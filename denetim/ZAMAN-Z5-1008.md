# ZAMAN-Z5-1008 — yerleşim dönemlerinin 1923-10-29 → 1945-09-02 uzatılması

Oturum: ZAMAN-Z5-YER-SONRA1923-1008 (UMIT) · temel `origin/makine/umit` = `e28edfdc` · ağaç `C:\atlas-z5`
Ölçüm aleti: `py denetim/ARAC-ZAMAN-Z5-OLC-1008.py [--yama]` (yalnız okur; yerleşim `girdi.yukle()`,
künye `girdi.oku_devletler()` id **ve** `harita:` anahtarıyla, kronoloji node `vm` ile gerçek eval; regex YOK).
Makine çıktısı: `denetim/ZAMAN-Z5-1008.json` (nokta nokta kova + geçiş) · yama: `denetim/ZAMAN-Z5-1008-yer_yama_1923_1945.js`.

---

## §0 Önceki ölçümler (mükerrer kapısı) — ve o günden bugüne ne değişti

- **`KAPSAM-1945-OLC-0930`**: 1923-10-29'da biten **4.223 dönem / 4.127 nokta**; "~2.100 mekanik,
  1.968 savaş cephesi künyelerinde" — **künye düzeyinde** bir kestirim (o ülkenin savaşta işgal edilip
  edilmediği). Sınır D katmanında "**753 hat**, 28 dosya". Yeni künye listesi (10 kesin + 18 belirsiz).
- **`SONRA1923-SAYIM-1004`**: yerleşim katmanı 1923 sonrası "**sıfır**"; künye katmanının 72 künyesi
  `t:"1945-09-02"` ile kesik (pencere ucu); kronolojinin 1923-45 kuşağı yazılmış (500 madde).
- **Bugün (e28edfdc)**: 4.300 yerleşim · 93 dosya · **4.227 dönem / 4.130 nokta** 1923-10-29'da bitiyor
  (s 4.094 · isg 97 · v 36). Ufku aşan dönem yalnız **3** (`s`). Z4'ün künyeleri diskte:
  `turkiye-cumhuriyeti` · `hatay-devleti` · `suudi-arabistan` · `mogolistan-halk-cumhuriyeti` ·
  `mancukuo` · `vichy-fransasi` · `slovakya-cumhuriyeti` · `bohemya-moravya-protektorasi` ·
  `hirvatistan-bagimsiz` · `italyan-dogu-afrikasi` · `almanya-muttefik-isgali` ·
  `avusturya-ikinci-cumhuriyet` · `arnavutluk-halk-cumhuriyeti` · `filipin-commonwealth` — **0930'un
  "yok" dediği 10 kesin künyenin hepsi artık var.** Yerleşim katmanında ise 1923 sonrası hâlâ SIFIR:
  **bu iş daha önce yapılmamış, mükerrer değil.**
- 🔴 **0930'un "753 hat" sayısı bir METİN sayımıydı**: `sinir_sinif_dizini.js` (üretilmiş dizin, 337
  eşleşme) ve `yerlesimler_sinir_*.js`'in `"1923-10-29"` geçişleri de içindeydi. Gerçek kayıt: **382**
  (aşağıda §②-g).

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (betik koşmadan) · ve ölçümle karşılaştırma

| # | soru | öngörü | ölçülen | tuttu mu |
|---|---|---|---|---|
| a | 1923-10-29'da biten dönem · nokta | ~4.250 · ~4.150 | **4.227 · 4.130** | ✓ |
| b | sahibi künyesi `t ≥ 1945-09-02` | ~2.300 | A 3.203 + K 41 + şüpheli 4 + B/T'nin bir kısmı | ✗ az tahmin — 0930'dan beri Z4 künyeleri 1945'e uzatmış |
| c | sahibi künyesi tam 1923-10-29'da kesik | ~1.500 | **277** (263'ü `tbmm-turkiye`) | ✗ çok — 90 kesik künyenin çoğu uzatılmış |
| d | sahibi künyesi 1923-45 arası bitiyor | ~250 | **212** | ✓ |
| e | Kova A · Kova B | ~1.000 · ~3.100 | **A 3.203 · B 53 · T 234** | ✗ — ÖLÇÜTÜ DEĞİŞTİRDİM (aşağıda) |
| f | 1923'te açık `isg:` | ~95 | 97 (+36 `v:`) | ✓ |
| g | D katmanında 1923'te biten hat | ~750 | **382 kayıt** (273 çizili) | ✗ — 0930 sayısı metin sayımıydı |

**(e)'deki sapmanın sebebi bir ölçüt kararıdır, gizlenmez:** öngörüyü künye düzeyinde kurmuştum
("sahibin künyesi 1923-45 kronolojisinde toprak maddesine taraf mı"). İlk koşu bunun YANLIŞ olduğunu
gösterdi: ABD'nin İzlanda işgali (1941) ABD içindeki 229 noktayı B'ye atıyordu, Kanada/Brezilya diplomasi
maddeleriyle B'ye düşüyordu. Atlasın veri modelinde **savaş işgali `isg:` katmanıdır, `s:` sahibini
DEĞİŞTİRMEZ** (`VERI-YAPISI`). ⇒ ölçüt **nokta düzeyine** indi: *bu noktanın DE JURE sahibi 1923-45
arasında değişiyor mu?* — değişenler AD ADIYLA bölge tablosunda.

## ② Ne ölçtüm (sayıyla)

### Kova tablosu — 4.130 nokta, hepsi tek kovada (toplam tutuyor)

| kova | nokta | ne demek | yama |
|---|---|---|---|
| **A_mekanik** | **3.203** | s: sahibi 1923-45 de jure değişmiyor · A1 804 (sahibin 1923-45 toprak maddesi hiç yok: Kanada 183 · Brezilya 129 · İng. Sudanı 83 · Meksika 78 · Hol. Doğu Hint 76 · Portekiz 67 …) · A2 2.399 (sahibin toprak maddesi var ama nokta hiçbir değişim bölgesinde değil: SSCB 428 · İngiltere 278 · Fransa 266 · ABD 213 · İtalya 130 · Çin 109 …) | ✅ 3.203 |
| **B_kalici** | **53** | kalıcı egemenlik değişimi, günü kaynaklı maddeden | ✅ 53 |
| **C_kunye_1923te_kesik** | **277** | `tbmm-turkiye` 263 → `turkiye-cumhuriyeti` (künye-içi madde 1923-10-29, TDV) · 14 küçük künye (Şan 5 · Cohor 3 · Agadez · Bhopal · Yogyakarta · Surakarta · Tidore · Buganda) | ✅ 263 · ⏳ 14 (Z4) |
| **D_kunye_1923_45_arasi_bitti** | **212** | Kaçar 108 · Almanya 38 · Polonya 22 · Somali 15 · Moğolistan 13 · Baltık 13 · Maan (Hicaz) · Saar · Buhara | ⏳ Z4 |
| **T_savas_ici_geri_donen** | **234** | Yugoslavya 79 · Habeşistan 64 · Çekoslovakya 19 · İng. Somalisi 16 · Arnavutluk 15 · Avusturya 12 · Mançurya 11 · Çinhindi→Tayland 4 · K.Erdel 3 · Alsas 3 · Malaya→Tayland 3 · Lüksemburg 2 · Memel · Tanca · Danzig | ⏳ KARAR |
| **K_kunye_karari** | **41** | Burma 27 (1937-04-01 İng. Hindistanı'ndan ayrıldı — künye YOK, madde YOK) · Filipinler 14 (`filipin-commonwealth` f 1935-01-01 gün yok; Commonwealth ABD egemenliği altında: s: mi v: mi?) | ⏳ Z4 |
| **V** | **96** | 60 s sağlam ama 1923'te açık `isg:` (Mısır 57 + Kuveyt + Katar 2 — hepsi `isg:ingiltere`) · 36 yalnız `isg:`+`v:` (Tunus: `isg:fransa` + `v:tunus-beyligi-fransiz`) | ⏳ ayrı karar |
| **A_supheli** | **4** | Ferasan (İdrisî→Suudi olabilir) · Icaguates · San Miguel (Aushiri) (Rio Protokolü 1942 hangi yaka) · San Ignacio de Zamucos (Chaco hangi yaka) | ❌ kaynak bulunamadı |
| **X** | **10** | anomali 2 (St. John's ve Tehuantepec `s:abd` — 1923'te İngiliz dominyonu / Meksika) · künyesi 1923'ten önce ölmüş 8 (Mysore 3 · Maratha 2 · Sohum `rusya` · Elba `piombino` · Asâyita `adal`) | ❌ Z5'in işi değil — bildirim |

### Kova A'nın dayanağı (D207) ve beyan alanı
- Dayanak **künyenin ömrü DEĞİL.** Dayanak üç ölçümün birleşimi: ① `kronoloji_cok_1923_1945.js`'in
  **124 toprak maddesi** (`isgal/toprak-kazanc/toprak-kayip/ilhak/kurtulus/bagimsizlik/son`, hepsi
  kaynaklı) + künye-içi kronoloji; ② bu maddelerden kurulan **bölge tablosu** (aleti açınca
  `B_GECIS`/`T_BOLGE`/`K_KARAR` — her bölge NOKTA ADLARIYLA, kutu değil; tablodaki her adın veride
  bulunduğu ve yakalandığı ölçüldü: bulunamadı 0 · yakalanmadı 0); ③ nokta o tablolarda yoksa A.
- ⇒ A bir **ÇIKARIMDIR** ("değişim kaydı yok"), ölçülmüş bir "değişmedi" DEĞİLDİR. Beyan **kayıt
  düzeyindeki `not:`** alanında: *"Z5-1008 A: t 1923-10-29→1945-09-02 ÇIKARIM — 1923-45 egemenlik
  değişimi kaydı yok … künye ömrü dayanak değil (D207)"*. Uzatılan dönemin `kaynak:`ına DOKUNULMADI.
  🔴 **İlk sürüm beyanı dönemin `kaynak:`ına yazıyordu ve ÖLÇÜLÜNCE ÇÜRÜDÜ:** kendi ağacımda tam
  uygulama + `denetle.py` → "kaynaksız `s:` kaydı" **1.912 → 406** düştü; çıkarım beyanı KAYNAK sayıldı
  (`_kaynak_dolu` boş olmayan her dizgiyi dolu sayar). Sahte iyileşme ⇒ geri alındı.
  📌 Dönem nesnesinde `not`/`neden` alanı YOK (`BILINEN_DONEM_ALANLARI`: f t d k kid statu himaye
  enklav kaynak kesinlik y); `kaynak_zayif` diye bir alan şemada yok ⇒ beyanın meşru yeri kayıt `not:`.
  ⚠️ **707 A kaydında `not:` zaten DOLU** — uygulayıcı dolu skaleri EZMEZ, o kayıtlarda beyan veriye
  İNMEZ (s: uzatması iner). Liste JSON `A_not_dolu_beyan_inmez`. Koordinatör ekleme yapar ya da beyan
  yalnız bu raporda/yamada kalır.
- **Savaş işgali A'yı bozmaz ama UNUTULMAZ:** A'nın **1.532** noktası savaş işgali ADAYI bir sahipte
  (SSCB batısı 1941-44 · Fransa 1940-44 · İtalya 1943-45 · Çin 1937-45 · Yunanistan 1941-44 ·
  Hol. Doğu Hint/Malaya/Burma 1942-45 …). Bunlar `isg:` katmanının işi — ayrı kalem, bu turda yazılmadı.
  ⚠️ İşaret künye düzeyindedir (ör. Avustralya'nın 109 noktasının hepsi işaretli ama yalnız Yeni Gine
  işgal edildi) — nokta ayrımı `isg:` kaleminde yapılmalı.

### Kova B — kalıcı geçişler (53 nokta, Osmanlı ardılı ÖNCE)

| bölge | nokta | geçiş | gün dayanağı |
|---|---|---|---|
| HATAY | Antakya · İskenderun · Sincan | suriye-lubnan-mandasi → `hatay-devleti` 1938-09-02 → `turkiye-cumhuriyeti` 1939-06-23 | künye-içi madde (TDV antakya) |
| MUSUL | Şehrizor · Halepçe | `ingiltere` → `irak-kralligi` 1926-06-05 | kronoloji_cok 1926-06-05 Ankara Antlaşması (TDV türkiye) |
| HİCAZ | Tâif 1924-09-08 · Mekke 1924-10-16 · Medine 1925-12-05 · Cidde 1925-12-22 → `suud-ucuncu` | her yerin kendi maddesi (TDV Abdülazîz b. Suûd) |
| HİCAZ-KALAN | Yenbu · Râbiğ · Bedir · Hayber · el-Ulâ · Medâin-i Sâlih · el-Vech · Tebük → `suud-ucuncu` 1925-12-22 | ⚠️ **ÇIKARIM**: krallığın sonu; yerin kendi teslim günü bulunamadı — `kaynak:`ta yazılı |
| SUUD-AD | `suud-ucuncu`nun 20 noktası + Hicaz'ın 12'si → `suudi-arabistan` 1932-09-18 | künye-içi madde (OH saudi-arabia) |
| CİMMA | Cimma (Jiren) → `habesistan` 1933-01-01 | kronoloji_cok, gün/ay yok (TDV cimma) → `kesinlik:{f:"yil",t:"gun"}` |
| BESARABYA | Akkirman · Kili · Bender · İsmail · Hotin · Soroka · Orhei · Kahul · Bolgrad · Çernovitz → `sovyet-rusya` 1940-06-28 | kronoloji_cok (USHMM) |
| G-DOBRUCA | Silistre · Hacıoğlupazarcığı → `bulgaristan-kralligi` 1940-01-01 | kronoloji_cok, gün yok ("Eylül 1940" USHMM) → `kesinlik` |
| VİİPURİ / PETSAMO | → `sovyet-rusya` 1940-03-12 / 1944-09-19 | kronoloji_cok (FRUS) |
| CHACO | Fortín Muñoz → `paraguay-cumhuriyeti` 1938-10-10 | kronoloji_cok (IBS No. 165) |

⚠️ Maan (Hicaz → Ürdün 1925) yazılmadı: **gün bulunamadı**, kronolojide madde yok (D kovasında).
⚠️ Besarabya/Viipuri'nin 1941-44 Rumen/Fin geri dönüşü `isg:` işidir — yazılmadı.

### g) Sınır D katmanı — 382 kayıt, KİMİN dosyası
14 dosya (`d_sinirlar*.js` 13 + `hukuki_sinirlar.js`), **hepsi ÜRETİLMİŞ**: başlıklarında "ELLE DÜZENLEME,
yeniden üret" ve üretici `denetim/ARAC-D1-URET-0916.py` · `ARAC-D2/D3BATI/D3ORTA/D4/D5-ASYA-URET` ·
`SINIR-D-AMERIKA-0077-yukselt.py` · `ARAC-SINIR-GDASYA-0078-URET.py` · `SINIR-UZAKDOGU-0078-uret.py`
(4 dosyada üretici satırı yok: afrika · arabistan · icasya · okyanusya). ⇒ **Z5'in dosyası DEĞİL**;
üretilmiş data = koordinatör, değişiklik üreticiye girer.
| sınıf (aynı A/B ölçütü, iki taraf künyesiyle) | çizili | çizilmez | toplam |
|---|---|---|---|
| mekanik aday (iki taraf da 1945'e yaşıyor, hiçbiri B/T/C/D/K kovasında değil) | 81 | 26 | **107** |
| bir taraf B/T/C/D/K kovasında (ör. `tbmm-turkiye` 15 hat → `turkiye-cumhuriyeti` ardılı) | 123 | 50 | 173 |
| bir tarafın künyesi 1945'ten önce bitiyor | 68 | 33 | 101 |
| künyesiz taraf (`ii-erzurum-sattularap-1847`) | 1 | 0 | 1 |

## ③ Ne bulamadım / ne ölçemedim
- **Kronolojide madde YOK** (bölge tablosunu kurarken aradım): Hatay Devleti'nin kuruluşu/ilhakı
  (yalnız künye-içi) · Pehlevi 1925 (künye-içi madde var ama `kaynak:` BOŞ) · Burma'nın ayrılışı
  1937-04-01 · Aden'in ayrılışı 1937 · Mançukuo'nun kuruluşu 1932-03 · Saar 1935 · II. Viyana Hakemliği
  1940-08-30 (K. Erdel) · Maan-Akabe 1925 · Rio Protokolü 1942. ⇒ Z7'ye.
- 4 nokta için hangi yakada olduğunu ölçemedim (A_supheli).
- `kronoloji_cok_1923_1945.js` **Değişmez 2 evreninde DEĞİL** (`CLAUDE.md §5`: `kronoloji*.js` kuyruk) —
  B geçişlerinin ±30 gün eşleşmesi bugün denetimce SORULMUYOR. Geçişlerin günleri o dosyadaki maddelerle
  BİREBİR aynı gündür (eşleşme 0 gün farkla), ama kapının görmesi için ya dosya evrene girmeli ya madde
  `olaylar*`a taşınmalı — Z7'nin kararı.

## ④ Ne istiyorum

1. **Kova A + B + C(tbmm) yamasını uygula** — `ZAMAN-Z5-1008-KOORD.diff` yeni dosya
   `data/yer_yama_1923_1945.js` · `window.YER_YAMA_1923_1945` (3.519 kayıt: A 3.203 · B 53 · C 263).
   Her kayıt `s:` dizisinin TAMAMINI taşır (dizideki sıra korunmuş — ⚠️ `s:` dizileri tarih sıralı DEĞİL,
   24 noktada 1923 dönemi dizinin ortasında; araç "son eleman" değil "t'si 1923-10-29 olan dönem" arar).
   **Ön şart: `turkiye-cumhuriyeti` ve `hatay-devleti` BOYASI** (renkler.py) — inmezse 266 nokta harita
   deliği olur (Z4'e soruldu).
2. 🔴 **`_sahiplik_uygula.py` bu yamanın 33 kaydını İNDİRMİYOR — ikisi de SESSİZ** (kendi ağacımda
   `--yaz` ile ÖLÇTÜM, aşağıda §⑤):
   - **28 kayıt** `yerlesimler_sinir_guney/kuzey.js` JSON biçimli (`"ad":`) — `AD_RX` tırnaksız `ad:`
     arıyor, kaydı GÖRMÜYOR ("veride-yok" sayıyor). İçlerinde **Sincan (HATAY)** ve Malak Dervent,
     Umur Fakih, 6 Hatay köyü, 9 Kafkas köyü var.
   - **5 kayıt** (Honolulu · Antananarivo · İmâdiye · Taraz · Sayram) çok satırlı: araç yeni `s:`yi
     `ad:` satırına YAZIYOR ama eski `s:` aşağıda KALIYOR ⇒ JS'te **mükerrer anahtar, son yazılan
     kazanır, yama düşer** — araç "uygulandı" der. 📌 Honolulu'da aynı kusur 10 Eylül'de bir kez elle
     temizlenmiş ("MÜKERRER `s:` VE `kaynak:` KALDIRILDI") — sınıf olarak kapanmamış.
   ⇒ Öneri: bu 33'ü elle (ya da uygulayıcı düzeltilince); düzeltme bu kalemin değil.
3. **T kovası (234 nokta) için KARAR** — seçenekler: ⓐ *(önerim)* s: değişmez, savaş içi ilhak/kukla devlet
   `isg:` olarak yazılır (Z-B: tanınmamış ilhak harita gerçeği yapılmaz; 1945'te zaten geri döndü) ⇒ bu
   234'ün s: kısmı A'ya katılır, yama yeniden üretilir (aletin tek satırı) · ⓑ s: değişir, kukla künyeler
   (`slovakya-cumhuriyeti`, `mancukuo`, `italyan-dogu-afrikasi` …) haritada sahip olur — o zaman bu
   künyelerin boyası şart (7'si boyasız).
4. **Z4'ten** (mesaj gitti): Kaçar `t` 1925-01-01 ↔ İran `f` 1925-12-12 arasındaki 11 ay · C'deki 14
   küçük künye · D'nin ardılları (Polonya 1939 → doğu SSCB [kalıcı] / batı Reich [T] / Genel Valilik;
   Almanya 1945-06-05 → `almanya-muttefik-isgali` + Oder-Neisse doğusu 1945-08-02 Polonya/SSCB; Baltık
   1940; Somali 1927 → İtalyan Somalisi) · Burma künyesi · Filipinler kararı.
5. **Sınır D (382)**: ayrı kalem öneriyorum (üreticilere `UFUK` parametresi); 107 mekanik aday listesi
   aletle üretilebilir.
6. **V (96)** ve **`isg:` savaş katmanı**: ayrı kalem.

## ⑤ Uygulama sınavı — yamayı KENDİ ağacımda uyguladım (teslim DEĞİL, geri alındı)
Yöntem: `C:tlas-z5`'te öteki `yer_yama*.js` geçici olarak kenara, yalnız bu yama `data/`ya;
`py arac/_sahiplik_uygula.py --yaz` → `girdi.yukle()` ile kayıt kayıt karşılaştırma → `py arac/denetle.py`.
Taban: ayrı temiz ağaç `C:tlas-z5-taban` (e28edfdc) aynı `denetle.py`. Sonra `git checkout -- data/`.

| ölçüm | sonuç |
|---|---|
| uygulayıcı | 3.519 yama kaydı · "uygulandı" 3.489 · "veride-yok" 28 · bayat yama kapısı ✓ TAZE · 84 dosya |
| kayıt kayıt doğrulama | **3.486 birebir indi · 33 İNMEDİ** (28 JSON biçimli `yerlesimler_sinir_*` + 5 mükerrer `s:` anahtarı — §④-2) |
| 1923-10-29'da biten `s:` | 4.094 → 860 (inmeyen 33 + yama dışı kovalar) |
| `denetle.py` taban ↔ yamalı | **tek fark:** "kaynaksız `s:` kaydı" 1.912 → 406 (ilk sürümün beyan kusuru; düzeltildi). Değişmez 1 · 1b · 1c · 2 (624/0) · 2s (1.722 · 185 AÇIK) · 2sk · 2i · 2t · 4 · 4c · 4d · 4s · 5 · 7 · R **BİREBİR AYNI** |
| çıkış kodu | ikisi de **2** — Değişmez 8 ÖLÇÜLEMEDİ (taze ağaçta `devletler_harita.js` yok; beklenen, yamadan bağımsız) |

⚠️ **Değişmez 2/2s'nin "aynı" çıkması bir onay DEĞİL:** B geçişleri (1924-1945) motor ufkunun
(`UFUK = 1923-10-29`) ÖTESİNDE — denetim onları bugün kırılma olarak SAYMIYOR. Ufuk açılınca (Z1)
B'nin her geçişi 2s kırılması olur; günleri `kronoloji_cok_1923_1945.js` maddeleriyle 0 gün farkla
aynı, ama o dosya Değişmez 2 evreninde değil (§③).

**Düzeltilmiş yamanın kaynaksızlık etkisi (bellekte, `kaynaksizlik_olc`'nin birebir kopyasıyla):**
hiçbiri 1.912 → **1.716** (−196) · kayıt-kaynaksız 2.301 → 2.301. 196'nın hepsi B/C kaydı: yeni
dönemin GERÇEK kaynağı (ör. "Cumhuriyet ilan edildi — TDV türkiye") ölçüt kayıt düzeyinde kaba olduğu
için 1281-1923 zincirini de "kaynaklı" gösteriyor (D265 ailesi). 🔴 **Bu −196 bir iyileşme DEĞİL —
`--kaynak-tavan-indir` ile tavan 1.716'ya İNDİRİLMEMELİ**, yoksa 196 zincirin borcu tavanla susar.
Seçenek: ⓐ *(önerim)* dönem kaynağı yerinde kalır (dönemin günü kaynağını taşımalı, §4), tavan 1.912'de
kalır ve `denetle.py`'ye "1923 öncesi zincir" ayrımı Z1'e önerilir · ⓑ B/C kaynağı da kayıt `not:`una
taşınır (ölçüt sabit kalır ama dönem kaynaksız görünür).

## Dosyalar
- `denetim/ZAMAN-Z5-1008.md` — bu rapor
- `denetim/ZAMAN-Z5-1008.json` — nokta nokta kova, geçiş, bölge, `A_not_dolu_beyan_inmez`
- `denetim/ZAMAN-Z5-1008-KOORD.diff` — YENİ `data/yer_yama_1923_1945.js` (`window.YER_YAMA_1923_1945`,
  3.519 kayıt) · temel `origin/makine/umit` e28edfdc · `git apply --check` TEMİZ · CR 0
- `denetim/ZAMAN-Z5-1008-yer_yama_1923_1945.js` — aynı dosyanın düz kopyası (okumak için)
- `denetim/ARAC-ZAMAN-Z5-OLC-1008.py` — ölçüm + yama üretici (bölge tablosu içinde; T kararı
  "isg" olursa `T_BOLGE` girdileri silinip yeniden koşulur)
