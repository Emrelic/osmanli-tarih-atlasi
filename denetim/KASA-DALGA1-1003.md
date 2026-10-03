# KASA-DALGA1-1003 — 1281 öncesi pilot: dalga tablosu ve 1281 sonrası sahiplik zinciri

*KASA İRTİBAT · 3 Ekim 2026 · koordinatör görevi; `KASA-NOKTA-DOSYA-1003`ün devamı. Yalnız ÖLÇÜM; `data/` dosyalarına dokunulmadı.*
- **Taban:** `origin/main` `5ea61c07`.
- **Evren:** 18 yeni ad + Hârim (Menbic çıktı; havuzda `Münbiç`).
- **Veri modeli:** `s:` = yabancı sahip · `d:` = doğrudan Osmanlı · `v:` = tâbi (VERI-YAPISI.md:130). Zincir 1281–1923'ü (ya da `kur`/`bit`e kadar) bu üçüyle kapatmalı.

## HÜKÜM
1. 🔴 **"1281 sonrası zinciri HER HALKASIYLA kaynaklı yazılabilen" ad: 0 / 15.** Her yaşayan adda en az bir halkanın yılı TDV'de (ve Iranica'da) yok.
   - ⇒ Dalga 1, "tam kaynaklı" ölçütüyle **boş.**
   - Ancak ölçüt "**çekirdek halkalar** yer düzeyinde kaynaklı; eksik halka(lar) beyanlı komşu dolgusu" olursa 5 ad kalıyor: **Ahlat · Taberiye · Harran · Şeyzer · Misis.**
2. **`bit:` ile temiz kapananlar: 2.**
   - **Askalân** `bit` 1270 (TDV).
   - **Dvin** `bit` 1233–1236 aralığı (Iranica).
   - İkisi de 1281'den önce ⇒ çekirdek haritaya **hiç dokunmaz.** Yazılabilir.
3. **Terk edilmiş sandığım 8 adın 4'ü aslında 1281 sonrası yaşıyor.**
   - Ani (1319 depremi, sonra yavaş terk), Dînever (14. yy sonunda Timur yıktı), Beylakan (Timur yeniden kurdu), Şeyzer (Osmanlı nahiye/kaza merkezi).
   - Ani, Dînever, Beylakan'ın **bitiş YILI kaynakta yok** ⇒ `bit:` yazılamaz (§4: yıl bilinmiyorsa yıl yazılmaz).
   - Önceki raporumdaki "8 terk / 10 yaşayan" ayrımı kaba bir varsayımdı; burada ölçülerek düzeldi.
4. **Hârim'in koordinatı bulundu.** Tarayıcıdan WHG, oradan Getty TGN 1085018: 36.2000 / 36.5167. ≤3 km mükerrer yok (Antakya 32 km).
5. **Dvin'e üçüncü tanık:** Iranica (Kettenhofen) koordinatı **40° N, 44°41′ E**.
   - Enlem Pleiades'le uyuşuyor (40.012); boylam al-Ṯurayyā'yla uyuşuyor (44.686).
   - Pleiades'e 8,7 km, al-Ṯurayyā'ya ~18 km.
   - Hüküm sende; bu tanık ayrışmayı çözmüyor, iki kaynağın hangi bileşende haklı olduğunu gösteriyor.

## 0 · Öngörü — ölçümden ÖNCE (11:58:00)
| | Öngörü | Ölçüm |
|---|---|---|
| Dalga 1 tam kaynaklı | ~5 | **0** (tam) · 5 (çekirdek kaynaklı + beyanlı dolgu) |
| Kısmen kaynaklı | ~5 | **7** (zincirin çoğu kaynaksız; Hârim dahil) |
| Dalga 2 (bit:) | ~8, ~4'ünde yıl bulunur | **2** temiz `bit` (<1281) · **3** yaşıyor ama bitiş yılı yok · **2** ÖLÇÜLEMEDİ |
| Hârim WHG'de bulunur | %50 | **bulundu** |

**Öngörü hatasının kaynağı:** TDV şehir maddelerinin Osmanlı ÖNCESİ halkaları yılla verdiğini varsaydım. Veriyorlar ama seyrek ("1406'dan sonra Memlük, Karakoyunlu ve Akkoyunlu arasında el değiştirdi" gibi yılsız geçişler).

## 1 · Yöntem
- **TDV:** her ad için şehir maddesi; yoksa kapsayıcı madde.
  - Kapsayıcılar: `adana` · `mus` · `diyarbakir` · `batman` · `arran` · `karabag` · `akkoyunlular` · `seddadiler` · `kars`.
  - 1230 ve sonrası tarih taşıyan cümleler çıkarıldı (araç: `cumle.py`, repo dışı).
  - TDV içerik araması (`ajax_search_auto.php?sp=t`) yalnız 5 sonuç döndürüyor ve alfabetik; kapsayıcı madde bulmakta zayıf kaldı.
- **Iranica** (`iranicaonline.org`, akademik; betiğe 403, uygulama içi tarayıcıdan okundu): DVIN · BAYLAQĀN · DĪNAVAR · ḤARRĀN.
  - Bulunamayan maddeler: ANI · ŠAMKUR · SASUN · RAYY (404).
- **Britannica** (yalnız `p.topic-paragraph`, YZ kutuları hariç): Ani.
- **Getty TGN** (WHG üzerinden): Hârim.
- **Komşu zinciri:** en yakın 2 havuz noktası.
  - 🔴 **Dayanak DEĞİL** (§4 "atlas referans değildir"). Yalnız eksik halkanın hangi devletle dolacağını göstermek ve kaynaklı halkayla çelişkiyi yakalamak için kullanıldı.
- **Kopya kuralı:** kaynak cümleleri aşağıda **özetlendi**, birebir alıntılanmadı. Yerler slug ve yıl ile işaretli.

## 2 · Dalga tablosu

**Etiketler:**
- **[Y]** yer düzeyinde kaynak cümlesi (yer adı + yıl aynı cümlede)
- **[B]** bölge cümlesi; yer adı geçiyor ama hüküm bölge için
- **[K]** yalnız komşu havuz noktası; kaynak yok
- **[—]** halka hiç bulunamadı

### DALGA 1 — çekirdek halkalar kaynaklı, boşluklar BEYANLI dolgu ister (5)

| ad | 1281 sonrası zincir (önerilen `s`/`d`/`v`) | kaynak · cümle özeti | eksik halka |
|---|---|---|---|
| **Taberiye** | memluk 1260→ · **d:** 1517→ · (v: Zâhir el-Ömer 1730→?) · isg: Napolyon 1799 · (v: Mısır 1831–41 [K Akkâ]) · ingiltere ~1918→ · filistin-mandasi 1920→ | [Y] TDV `taberiye`: Aynicâlût'tan sonra Memlük (1260), Safed nâibliği · [Y] 1517'de Osmanlı · [Y] 1730'da Zâhir el-Ömer'e verildi · [Y] 1799 Napolyon işgali · [Y] XIX. yy'da Akkâ'ya bağlı · [Y] I. Dünya Savaşı'ndan sonra İngiliz (**gün yok**) | İngiliz giriş GÜNÜ [K Akkâ 1918-09-23] · 1730 Zâhir'in `v:` mi `d:` mi olacağı (statü hükmü sende) |
| **Ahlat** | ilhanli 1281→ · (çobanlı 1340-41) · (Bitlis emîri 1350) · (Moğol bey Hızır Şah 1360) · karakoyunlu 1423→ · akkoyunlu 1472→ · safevi ?→ · **d:** 1533/35→1923 (isg rusya 1916? [K Bitlis]) · tbmm 1920→ | [Y] TDV `ahlat`: Olcaytu devrinde eyalet merkezi (İlhanlı) · [Y] 1340-41 Çobanlı adına sikke · [Y] 1350 Bitlis hâkiminin kardeşine geçti · [Y] 1360 Hızır Şah · [Y] Karakoyunlu İskender 1423'te Ahlat'ı aldı · [Y] 1472 Akkoyunlu Bayındır Beg aldı · [Y] Irakeyn Seferi (1533-35) sonunda Osmanlı | **Safevî giriş yılı** [K Bitlis 1502] · 1335–1340 arası · 1350/1360 halkalarının künye karşılığı (Bitlis emirliği/Hızır Şah için `devletler.js` id'si **ölçülmedi**) · 1916 Rus işgali |
| **Harran** | ilhanli 1281→ · memluk "14. yy başı"→ · timurlu ~1400 · (Döğer 1403-04) · memluk/karakoyunlu/akkoyunlu 1406→1516 · **d:** 1516→1920 · tbmm | [Y] Iranica `harran` (Bosworth): Hülâgû 1260; Memlükler Cezîre'yi ve Harran'ı **14. yy başında** geri aldı (yıl yok) · [Y] TDV `harran`: Timur ~1400, Döğerler 1403-04, 1406'dan sonra el değiştirdi (yılsız), **1516** Osmanlı | **Memlük dönüş yılı** · **1406–1516 arası halkalar** (yılsız) · 1919-20 Urfa işgalinin Harran'a uzanıp uzanmadığı |
| **Şeyzer** | memluk 1281→ · **d:** 1516?→ (1520'de Osmanlı nahiye merkezi) · fransa 1918→ · suriye-lubnan-mandasi 1920→ | [Y] TDV `seyzer`: Memlük teşkilâtında Halep nâibliğine bağlı; 1280-81'de bir yıl isyancı Sungur el-Aşkar'ın elinde · [Y] 1520, 1522, 1549, 1559 Osmanlı idarî kayıtları | **Osmanlı giriş günü** (TDV ilk kaydı 1520; fetih günü [K Hama 1516-09-19]) · 1918/1920 [K Hama] · ⚠️ Evliya 1649'da anmıyor ("önemini kaybetti") ama terk cümlesi yok ⇒ `bit:` YAZILMAZ |
| **Misis** | kilikya-ermeni 1281→ · memluk? (1375?) → · ramazanoglu? → · **d:** ?→ · isg fransa 1919→1920 · tbmm | [Y] TDV `misis`: 1332 ve 1334-35 Memlük akınları (Ermeni hâlâ elinde) · [B] Memlükler 1375'te başşehir Sîs'i alıp Kilikya Krallığı'na son verdi · [Y] "Osmanlı döneminde Misis Kalesi derbend" (**yıl yok**) · [Y] 1919 Fransızların Ermeni birlikleri · [Y] 27-28 Mayıs 1920 Türk hücumu | **Kilikya'nın Misis'te bitişi** · Memlük/Ramazanoğlu halkası [K Adana: ramazanoglu 1352] · **Osmanlı giriş yılı** [K Adana `d:` 1516-08-24] |

⚠️ **Dalga 1'in beşi de en az bir [K] halkasıyla yazılabilir.** §4 komşu kuralı **gün** devralmasına izin verir, **devlet/yıl halkası** devralmasına değil. Bir de **zincirleme yasak** var: Bitlis'in kendi 1502 kaydı "ankraj Van (72 km)" diyor, yani zaten komşudan. Ahlat'ın Safevî yılını Bitlis'ten almak **zincirleme devralma** olur.
⇒ Bu 5 ad "kaynaklı" değil, **"çoğu kaynaklı"** dır. Yazılacaksa her [K] halkası `kaynak:` alanında beyanlı yazılmalı. Hüküm sende.

### BEKLER — yaşıyor ama zincirin ÇOĞU kaynaksız (7)

| ad | bulunan halka | eksik | komşu (dayanak değil) |
|---|---|---|---|
| **Meyyâfârikîn (Silvan)** | [Y] TDV `meyyafarikin`: İlhanlı 1264 (Tûdan'a mülk), 1267 (Kutuy Hatun) · Safevî 1507 · Rûzekî 1514 · **Osmanlı 1515** (Koçhisar) · XIX. yy Diyarbekir'e bağlı kaza | **1281–1507 (226 yıl):** TDV yalnız "müstakil durumunu yitirdi" diyor | Hasankeyf: eyyubi-hisnikeyfa→1462 akkoyunlu · Diyarbakır: artuklu→… |
| **Ergani** | [B] TDV `diyarbakir`: Mayıs 1517'de Mardin'le birlikte Ergani dahil bütün kaleler Osmanlı idaresinde | **1281–1517 bütünüyle** (1412 Ergani yakınında savaş var ama sahiplik değil) | Palu: artuklu→1465 akkoyunlu→1507 safevi |
| **Sis (Kozan)** | [B] TDV `misis`: Memlük 1375'te başşehir Sîs'i aldı, krallık sona erdi ⇒ kilikya-ermeni 1281→1375 | **1375 sonrası bütünüyle** (Memlük/Ramazanoğlu/Kozanoğulları/Osmanlı) | Adana: kilikya-ermeni→1352 ramazanoglu (⚠️ Adana'nın 1352'si Sis'e taşınamaz; Sis 1375'e kadar Kilikya) |
| **Malazgirt** | **hiçbir 1281 sonrası cümle** (TDV `mus`, `ahlat`, `malazgirt-muharebesi`) | bütünüyle | Erciş/Bitlis: ilhanli→karakoyunlu→akkoyunlu→safevi |
| **Sason** | yalnız [Y] TDV `mus`: 1894 Sasun Ermeni isyanı (sahiplik değil) · [B] `diyarbakir`: Hazo = Sasun | bütünüyle | Bitlis/Siirt |
| **Hârim** | koordinat: TGN 1085018 (WHG). TDV başlık maddesi yok (`harim` = hukuk terimi) | bütünüyle | Antakya/Halep: memluk→1516 d:→1918 fransa→1920 manda |
| **Rey** | [Y] TDV `rey--iran`: 1220 ve 1224 Moğol tahribi · Gazan (1295-1304) canlandıramadı · **bölge 1384'te Timur'a geçti** · 1447 Şâhruh Rey yakınında öldü | **yaşayıp yaşamadığı belirsiz** (terk cümlesi yok, "harabe" de denmiyor) · 1384 dışında halka yok | Tahran 12 km: ilhanli→1335 incu→muzafferi→1387 timurlu… |

📌 **Rey özel durumu:** Tahran'a 12 km. 1281+ haritasına girerse Tahran'ın peteğini ikiye böler; zinciri Tahran'ınkinden farklı yazılırsa Değişmez 2 kırılması üretir. Rey için iki yol var: `bit:` (kaynak yok) ya da Tahran'la aynı zincir (kaynak yok). İkisi de kaynaksız ⇒ **dalga dışı** öneriyorum.

### DALGA 2 — `bit:` ile kapanır

| ad | `bit:` | kaynak · özet | 1281 sonrası etkisi |
|---|---|---|---|
| **Askalân** | **1270** | TDV `askalan`: Baybars 1270'te bina ve surları tamamen yıktırdı, şehir bir daha iskân edilmedi, bugüne harabe kaldı | **yok** (bit < 1281) ✓ YAZILABİLİR |
| **Dvin** | **1233–1236 (aralık)** | Iranica `dvin` (Kettenhofen 1996): Moğollar şehri 1233–1236 arasında yeniden yıktı, kesin gerileme; bugün yerinde küçük bir yerleşim | **yok** ✓ YAZILABİLİR. Aralığın hangi ucu yazılır (§4 en kaba güvenli düzey) hüküm sende; iki uç da < 1281 |

### DALGA 2-ENGELLİ — 1281 sonrası yaşıyor, bitiş YILI kaynakta YOK (3)

| ad | kaynakta ne var | neden yazılamaz |
|---|---|---|
| **Ani** | Britannica `Ani-historical-city-Armenia`: 13. yy Moğol akınları, **1319 depremi** ve ticaret yolu kayması gerileme getirdi, **"sonunda"** terk edildi · TDV başlık maddesi yok, `kars` maddesinde 1281 sonrası Ani cümlesi yok | 1319 bir deprem, bitiş değil. Terk yılı yok ⇒ `bit:` yazılamaz; 1281–? zinciri de kaynaksız |
| **Dînever** | TDV `dinever` + Iranica `dinavar`: 14. yy'da hâlâ küçük bir şehir (Hamdullah Müstevfî); **yüzyılın sonunda Timur tahrip etti**, bugün harabe | **Yıl yok** ("14. yy sonu"). Timur'un Cibâl seferleri 1386–1393 arası ama bu benim çıkarımım, kaynak cümlesi değil ⇒ yazılmaz |
| **Beylakan** | Iranica `baylaqan` (Bosworth): 1220 Moğol katliamı, sonra onarıldı · **14. yy sonunda Timur aldı ve yeniden kurdu** (Aras'a kanal) · "sonraki yüzyıllarda" çökmüş | Bitiş yüzyılı bile yok ⇒ `bit:` yazılamaz; 1281–1400 zinciri kaynaksız |

### ÖLÇÜLEMEDİ (2)

| ad | durum |
|---|---|
| **Lori (Lukri)** | Pleiades 891583977: kale 1065'te yapılmış; dönem etiketleri "early-medieval-caucasus · late-byzantine", **bitiş yok**. TDV maddesi yok · Iranica yok. 1281'de yaşıyor mu: **ölçülemedi** |
| **Şemkûr (Şemkir)** | TDV `arran` ve `karabag` maddelerinde 1230 sonrası cümle 0 · Iranica `samkur`/`shamkur` 404 · al-Ṯurayyā tarih vermiyor. 1281'de yaşıyor mu: **ölçülemedi** |

**Sayım:** Dalga 1: 5 · Bekler: 7 · Dalga 2: 2 · Dalga 2-Engelli: 3 · Ölçülemedi: 2 ⇒ **19** (18 + Hârim).

## 3 · Yan bulgular (düzeltme YAPILMADI, hüküm sende)
1. **Harran ↔ havuz çelişkisi (ters yön aday, §3.5).**
   - Iranica'ya göre Memlükler Harran'ı ancak **14. yy başında** geri aldı ⇒ 1281'de bölge İlhanlı.
   - En yakın havuz noktaları **Akçakale** (19 km) ve **Jadlā'** (24 km) ise 1281-01-01'den itibaren `memluk` yazılı.
   - Akçakale'nin kaynağı ölçülmedi. Harran İlhanlı yazılırsa iki noktanın peteği 1281–13xx arasında farklı boyanır.
2. **Sis ↔ Adana:** Adana `kilikya-ermeni` 1352'de bitiyor; TDV'ye göre krallığın başşehri Sis 1375'e kadar Ermeni. Çelişki değil (Adana daha önce düşmüş olabilir), ama Sis'e Adana'nın 1352'si **yazılmamalı.**
3. **Dvin koordinatı:** Iranica 40°00′ / 44°41′. Bu üçüncü tanık; §2 HÜKÜM 5'e bakınız.

## 4 · Ölçülemeyen / beyan
- Halkalardaki ara devletlerin (`Bitlis emirliği`, Hızır Şah, Döğerler, Rûzekî, Kozanoğulları, Zâhir el-Ömer) `devletler.js` karşılığı **ölçülmedi.** Künye yoksa halka yazılamaz (§3.5 hayalet devlet).
- **Osmanlı sonrası 1918–1923 halkaları** (işgal, manda, TBMM): TDV şehir maddelerinde ya hiç yok ya da gün yok. Bunlar komşu kuralının **gün** devralması için tam uygun durumlar (aynı süreç, yakın konum). Ama komşunun gününün kendi kaynağı her biri için ayrıca ölçülmeli.
- Iranica ANI, ŠAMKUR, SASUN, RAYY maddeleri 404. Başka slug denenmedi.
- Kopya kuralı gereği cümleler özetlendi. Tam metinler `C:\Users\ana\AppData\Local\Temp\kd\cache\` (TDV) içinde; Iranica/Britannica tarayıcıdan okundu, kaydedilmedi.
