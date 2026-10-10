# KAMP-MEZOPOTAMYA — K1, birinci tur (MÖ 3500 – MÖ 539)

Görev: YILDIRIM BAYEZIT (M-5914 · `oturumlar/KAMPANYA-DUNYA-1010.md` §2 K1) · KASA · yalnız `denetim/` — **hiçbir `data/*.js`
dosyasına dokunulmadı.** Dosyalar:
- `denetim/KAMP-MEZOPOTAMYA-POLITY.csv` · `-KRONOLOJI.csv` · `-SEHIR.csv`
- bu `.md`

## 1. Sayılar (§5 birinci tur teslimi)
```
POLITY     36 polity (f/t kaynaklı; f bulunamadı 2 · t bulunamadı 4) + 5 "listeye alınmadı" satırı
           (Nippur — polity DEĞİL · Dēr bulunamadı · Kaldu tek polity değil · Suḫu bulunamadı · Hitit 1595 = olay)
KRONOLOJİ  83 madde = 36 × (doğuş + yıkılış) = 72 + 11 büyük olay; harita_degisimi EVET 76 · HAYIR 1 ·
           "—" 6 (tarihi bulunamadı satırları — kırılma yok)
ŞEHİR      35 şehir · ilk YAZILI kayıt tarihli 33 · bulunamadı 2 (Borsippa · Vaşukanni)
           · koordinat Pleiades 32 · NOKTA YAZILAMAZ 3 (Akkad · Ekallatum · Vaşukanni — konum bilinmiyor/öneri)
```
§5 eşikleri: aile TAM (şartnamedeki 18 adın hepsi + 18 ek: Uruk dönemleri, Gut, Deniz Ülkesi I/II, İsin II, Ḫana,
Ḫanigalbat, Laqê, Elam'ın 5 evresi, Şamşi-Adad krallığı, Mari şakkanakku) ✓ · her polity doğuş + yıkılış ✓ · ≥25 şehir ✓ (35).

## 2. Kronoloji sistemi (§4 kural 4 — HER satırda beyan)
- **Varsayılan: ORTA KRONOLOJİ (OK)** — Hammurabi 1792-1750, Babil'in düşüşü 1595. Kaynaklar açıkça OK diyorsa "OK".
  Demiyorsa ama sayılar OK'ye uyuyorsa "OK (çıkarım)" yazıldı.
- **MÖ 911 sonrası: MUTLAK** (Asur eponim listesi ve Babil kronikleri). Yeni Babil'in başı Jülyen günüyle:
  VIII-26-626 = **23 Kasım 626** (Brinkman).
- **Orta Asur:** Frahm 2017 / ORACC RIAo değerleri (Aššur-uballiṭ I 1353). Met'in eski değerleri (1365) her satırda yanında
  ⑥. İki sistem ±10-12 yıl.
- **Düşük kronoloji** yalnız bir kaynakta paralel: RlA Edzard, Sumu-la-El 1816-1781. Not edildi, kullanılmadı.
- **Sümer Kral Listesi hiçbir yerde dayanak DEĞİL** (§4 kural 5). Hallo: Gut bölümünün değeri "negligible". Kiş I
  hanedanı mitolojik.

## 3. Kaynak seti
- **Reallexikon der Assyriologie (RlA):** BAdW sayfa taramaları, `publikationen.badw.de/de/rla/a/<cilt>.<görüntü>.jpg`;
  her satırda cilt/sayfa.
- **ORACC:** AMGG (Brisch), RIAo (Novotny & Morello), ETCSRI.
- **CDLI** (cdli.earth) eser sayfaları ve transliterasyonları.
- **Encyclopaedia Iranica:** Vallat ELAM i · Hansman ANSHAN · MALIAN · SUSA ii.
- **Met Heilbrunn** (imzalı denemeler) · **Britannica** (yalnız imzalı: Dalley, Renger, Saggs, Frye/von Soden/Edzard, Woolley).
- **Pleiades:** koordinat + sınırlı metin.
- **Akademik:** Ziegler & Otto 2023 (BBVO 30) · Blömer 2023 (Electrum 30) · LMU i3.MesopOil · FU Berlin Fekheriye · T.C.
  Kültür Bakanlığı.
- **Kırmızı çizgi:** blog, World History Encyclopedia, içerik çiftliği KULLANILMADI. Vikipedi yalnız ipucu. Yalnız
  Vikipedi'ye dayanan satırlar `bulunamadı` + "aday" notu (Borsippa, Vaşukanni).
- **Okuma beyanı:** RlA ve CDLI çoğunlukla okuyucular tarafından tam metinden okundu. Met, Britannica ve Iranica canlı
  site 403/429 verdi ⇒ Wayback anlık görüntüleri.
- ⚠️ KASA bu turda tanıkları **örnekleyerek** doğrulamadı (önceki turlarda yaptığım birebir sınama bu teslimde YOK) —
  beyan; ikinci turda ya da yazım öncesi örneklem sınaması önerilir.

## 4. Şehir kuralı — nasıl uygulandı (§3 SEHIR, Emre kuralı)
- `ILK_KAYIT_TARIHI` = **en erken YAZILI kayıt**. Arkeolojik katman (Ubeyd, C14, Pleiades minDate) ayrı sütunda, tarihe
  HİÇ girmedi.
- Kaynak çoğunlukla bir **DÖNEM** veriyor (Uruk IV, Uruk III, ED IIIa…), yıl değil. Tarih alanına dönemin **GEÇ ucu**
  yazıldı (ÜST SINIR: "en geç bu tarihte kayıtta"). Dönem aralığı `not:`ta. Dönem içinden yıl seçmek uydurma olurdu
  (§4 kural 1).
- **RlA, CDLI tarama sonucunu ezer:** Eridu, Adab ED I-II; Umma ED I-II; İsin ED IIIa. CDLI ile bulunan daha geç ilk
  görünümler notta.
- Babil: **1894 HANEDAN başıdır, şehrin ilk kaydı DEĞİL** ⇒ Şar-kali-şarri yıl adı (≤2193). Pleiades'in ifadesi yanlış,
  kullanılmadı.

## 5. `bulunamadı` listesi (§4 kural 6)
- **Polity:**
  - f: Eşnunna (Ur III sonrası, yıl YOK) · Mari şakkanakku.
  - t: Ur I · Mari şakkanakku · Ḫana · Ḫanigalbat.
  - Bütün polity: Dēr · Suḫu.
  - Başkent: Şubat-Enlil (doğrulanmadı) · Deniz Ülkesi I/II · İsin II.
- **Şehir:** Borsippa · Vaşukanni (tarih); Akkad · Ekallatum · Vaşukanni (konum). Arkeolojik katman:
  Umma · İsin · Sippar · Babil · Kutha · Terqa · Arrapha.
- **Kaynakta olmayan / doğrulanmamış:** Akkad'ın sonu **2154** (hiçbir kaynakta YOK ⇒ 2193 Şar-kali-şarri). Elam
  1600-1500 arası. Bazi hanedanı ve 1004 sonrası Babil hanedanları.

## 6. Bulgular (kronoloji yazımını etkileyenler)
- **Şartnamenin dört tarihi kaynakla tutmadı:**
  - Akkad sonu 2154 → 2193;
  - Eşnunna sonu 1762 → **1757-1755** (son yıkım);
  - İsin sonu 1794 ↔ c. 1792 ⑥;
  - Babil I başı 1894 ⑥ (Goddeeris: Sumu-abum, Sumu-la-El ile çağdaş).
- **Nippur hiçbir zaman polity değil** (Klein): din merkezi olarak işaretlenmeli, boyanmamalı.
- **Yeni Elam 646'da BİTMEDİ** (Vallat: Neo-Elamite III 646-539?) ⇒ 646 bir olay (HAYIR değil EVET), polity sonu 539?.
- **Gut hegemonyası** kanıtlı başkent yok ⇒ boya değil örtü (isg benzeri).
- **Çok aralıklı polity** (şema boşluğu, önceki vakalara ek): Eski Asur (Şamşi-Adad arası) · Mari Lim (Yasmah-Addu arası)
  · Kiş (tekrar tekrar bağımsız).
- İsin II (1157) ↔ Kassit sonu (1155): ~2 yıl örtüşme ⑥.

## 7. Yarım bırakılan yer (§5 — sınırın ADI)
- **İKİNCİ TUR için:**
  - (i) 1004-626 Babil hanedanları (Bazi, Elam, "Dynasty E");
  - (ii) Arami devletleri (Bit-Adini, Guzana) ve Suḫu;
  - (iii) ikinci-düzey olaylar (başkent değişimleri: Asur → Kalhu → Dur-Şarrukin → Ninova; Tukulti-Ninurta I'in Babil
    işgali 1225);
  - (iv) KASA birebir örneklem sınaması (§3 uyarısı);
  - (v) Vikipedi'ye kalan 3 şehrin birincil tanığı (Ebla ARET numaraları, CTH 51 Beckman HDT 6A, RlA 'Barsip').
- `kimlik_onerisi` sütunu yalnız ÖNERİ: `devletler.js`'te bu kimliklerin hiçbiri yok (MÖ künye 0). Yazım sırası ve kimlik
  hükmü koordinatörün (§6).

## 8. Geç dönen okuyucularla güncelleme (aynı gün)
İlk şehir okuyucusunun geç dönen alt-yardımcıları (A, B, C, D) dört satırı güçlendirdi:
- **Nuzi/Gasur:** `bulunamadı` → **≤2200** (WiBiLex, geç Eski Akkad Gasur arşivi).
- **Arrapha:** Pleiades-yalnız Ur III → **2042** (CDLI P125583, Amar-Suen 5).
- **Arbela:** Ebla ⑥ + tabletle doğrulanan Ur III ≈2045 (P100007).
- **Akkad:** Sargon-sonrası üst sınır → **ED IIIb ≈2340, Sargon'dan ÖNCE** (TMH 5, 081 En-şakušana yıl adı; okuma hasarlı ⑥).
- **Tutub:** → Naram-Sin 19 ≈ **2218** (Tutub 65).

## 9. DÜZELTME TURU (örneklem 7/12 ⇒ yazım değil düzeltme) — ÜÇ SAAT tiplemesi + koordinatör hükümleri
Kural (koordinatör, aynen):
- **① OLAY** = attested olay ⇒ YAZILIR.
- **② SALTANAT** = kişi saltanat ucu ya da İLK TANIKLIK ⇒ polity ömrü DEĞİL, SINIR olarak ADIYLA yazılır (`not:`
  "saltanattan/tanıklıktan türetilmiş ALT/ÜST SINIR — gerçek uç ÖLÇÜLEMEDİ").
- **③ DÖNEM/KONVANSİYON** = arkeolojik tabaka ya da akademik bölme çizgisi ⇒ tarih olarak da sınır olarak da YAZILMAZ,
  `ÖLÇÜLEMEDİ`.

POLITY.csv'ye `tarih_turu_f` · `tarih_turu_t` · `kaynak_degeri_f` · `kaynak_degeri_t` eklendi. Eski sayı silinmedi,
`kaynak_degeri_*`'de duruyor.

### 9.1 Dersin üç sayısı (birim UÇ = polity f/t; 36 polity × 2 = 72 UÇ)
```
① OLAY                   25 UÇ
② SALTANAT / TANIKLIK    24 UÇ   ← dersin ölçümü (1)
③ DÖNEM / KONVANSİYON    16 UÇ   ← dersin ölçümü (2)
BELİRSİZ                  1 UÇ   (Yeni Elam t 539)
zaten bulunamadı          6 UÇ
HİÇ YAZILABİLİR UCU KALMAYAN POLITY: 7 / 36   ← dersin ölçümü (3)
   uruk-gec-uruk · mari-sakkanakku · elam-avan · elam-simaski · elam-sukkalmah · elam-orta · elam-yeni
```
- 🔴 **Şema sorusu (Emre'ye):** Elam'ın BEŞ evresinin beşi ucu olmadan kaldı. Vallat'ın bütün aralıkları dönem
  başlıkları ("ca. 2400-2100" …), bir olayın tanığı değil.
- 72 UÇ'un yalnız 25'i (%35) OLAY. 49'u ya sınır ya hiç.
- ⇒ MÖ evreninde künye şemasının "`f`/`t` zorunlu" varsayımı **taşınmıyor**: polity VAR (yüzlerce yıl kaynakta), ama
  ucu olay olarak tarihlenemiyor.
- Gerekli şema kavramı: **"varlık aralığı yalnız SINIRLARLA bilinir"** (alt/üst sınır çifti) ya da **uçsuz künye**.

### 9.2 KRONOLOJİ etkisi (birim MADDE, 83)
```
harita_degisimi  EVET 76 → 34 · SINIR (kırılma günü değil) 24 · HAYIR (ÖLÇÜLEMEDİ/tartışmalı) 19 · — 6
```
⇒ Yazıma girseydi 42 madde YANLIŞ GÜNDE kırılma üretecekti ve Değişmez 2 onları kabul edecekti (madde ile kayıt birbirine
tutarlı). Örneklem kapısının değeri bu.

### 9.3 Hükümlerin uygulanışı (pass'in içinde)
- **Babil I `f`:** `TARTIŞMALI` — tek tarih YAZILMADI.
  - Okuma A: 1894 Sumu-abum (Saggs, Britannica; konvansiyonel).
  - Okuma B: 1880 Sumu-la-El (Goddeeris, RlA 13 s.300, taramada birebir okundu).
  - Kronoloji doğuş maddesi "TARTIŞMALI (1894 ↔ 1880)", harita HAYIR.
- **Yeni Elam `t`:** tipleme soruyu çözdü. Vallat *"perhaps by Cyrus in 539"* — 'perhaps' + tek tanık ⇒ BELİRSİZ ⇒
  `ÖLÇÜLEMEDİ`, aralık `__BOSLUK__` (zorla kapatılmadı). Not: 539 burada Babil'in değil Susiana'nın fethi olarak
  anılıyor, ama kesin değil.
- **SEHIR'den çıkanlar** (künye/kronolojide kalırlar; "başkent/şehir olarak biliniyor, YERİ BULUNAMADI"):
  - **Akkad** (ilk kayıt ED IIIb ≈2340 — tarihli ama YERLEŞTİRİLEMEZ; ayrıca o tarih bir yıl adından, ⑥);
  - **Ekallatum** (≈1775, konum öneri Tell Ḥuwaish);
  - **Vaşukanni** (tarih de bulunamadı).
  - ⇒ SEHIR **32 şehir, 31 tarihli**.
- **Nippur:** polity DEĞİL, SEHIR'de KALDI ✓.

### 9.4 Bu turda YAPILMAYAN (ADIYLA)
- Tiplemenin kendisi kaynak cümlesinden yapıldı. Ama 72 UÇ'un hepsi için kaynak bu turda YENİDEN AÇILMADI: okuyucu
  raporlarındaki birebir alıntılar kullanıldı, KASA yalnız örneklemin 12'sini açtı.
- İkinci turun ⓑ (kronoloji 120+), ⓒ (şehir 60+), ⓓ (`suzeren` kolonları) kalemleri bu düzeltme turunda BAŞLAMADI.
- ③ çıkan 16 UÇ için "başka bir attested çapa" ARANMADI. Her biri bir sonraki turun sorusu.

## 10. ⑤ ÇAPA ARAMASI + ① 19 UÇUN YENİDEN AÇILIŞI (koordinatör: "Başlıkları değil GÖVDEYİ oku")
Kapsam (sayıyı ben verdim, koordinatör ~13 tahmin etmişti):
- ⓐ uçsuz 7 polity'nin BÜTÜN uçları = 14 UÇ;
- ⓑ tek kalan ucu ② olan 5 polity'nin o ucu (uruk-ed t, ur-i f, lagas-i t, umma t, hanigalbat f) = 5 UÇ;
- toplam **19 UÇ**.
Kaynak raporları: `KAMP-MEZOPOTAMYA-CAPA-ELAM.md` (Vallat gövdesi + birincil metinler), `KAMP-MEZOPOTAMYA-CAPA-DIGER.md`.

**Vallat sınaması:** "Elam 5/5 ③" hükmü BAŞLIK okumasının eseriydi — koordinatörün şüphesi DOĞRULANDI.
- Gövde: 2004 Ur'un düşüşü (Kindattu) ve Sukkalmah'ın 2004 SONRASI kuruluşu; Nebukadnezar I (1125–04) Susa'yı alır; 646 Susa yağması; Puzur-Inšušinak ↔ Ur-Nammu.
- Yanlış okumanın kaydı silinmedi: §9 tablosu ve `k1_tip.py` T sözlüğü olduğu gibi duruyor; çürütme burada.

### Kaç polity çapa buldu (7 uçsuz polity)
**6 / 7 POLITY attested olay ya da tanıklık buldu · 1 / 7 BULAMADI (uruk-gec-uruk).**
| polity | çapa | yeni yazılabilir uç |
|---|---|---|
| uruk-gec-uruk | YOK (proto-çivi idari, yazı evresiyle tarihli; yokluk ÇIKARIM) | 0 UÇ |
| mari-sakkanakku | Apil-kīn ↔ Ur-Namma; Drehem Š46–ŠS6 yıl adlı; BIN 9 384 Išbi-Erra | 2 UÇ (f ≤2095, t ≥1985) |
| elam-avan | Sargon/Rimuš yazıtları; son kral ↔ Ur-Nammu | 1 UÇ (t ≥2112) |
| elam-simaski | Š30/Š34/IS14 yıl adları; 2004 Ur fethi (SON DEĞİL — örtüşme) | 0 UÇ |
| elam-sukkalmah | 2004 olayı; Kuk-Našur II ↔ Ammi-ṣaduqa | 2 UÇ (f ≥2004, t ≥1646) |
| elam-orta | Haft Tepe ↔ Kadašman-Enlil I; Nebukadnezar I (BM 90858) | 2 UÇ (f ≤1360, t 1125–1104) |
| elam-yeni | Nebukadnezar I; Babil Kroniği 743, 720; 646 | 2 UÇ (f ≥1125, t ≥646) |
**Mutlak, yıl adıyla ya da eponimle tam tarihlenmiş bir UÇ olayı: 0 UÇ.** Bulunan bütün uç çapaları ②: saltanatla sınırlı ya da sınır.

### 19 UÇUN sonucu
| geçiş | UÇ |
|---|---|
| DÖNEM → SALTANAT/SINIR | 6 UÇ |
| YOK → SALTANAT/SINIR | 2 UÇ (Mari f, t) |
| BELİRSİZ → SALTANAT/SINIR | 1 UÇ (elam-yeni t; üst uç hâlâ BELİRSİZ, kapatılmadı) |
| DÖNEM, değişmedi | 5 UÇ (uruk-gec-uruk f, t · avan f · şimaşki f, t) |
| SALTANAT, değişmedi (not zenginleşti) | 5 UÇ |
| → ① OLAY | **0 UÇ** |

### Kendi tabanımda (72 UÇ)
| tip | önceki (§9) | şimdi | fark |
|---|---|---|---|
| OLAY | 25 | 25 | 0 |
| SALTANAT/SINIR | 24 | 33 | +9 |
| DÖNEM | 16 | 10 | −6 |
| BELİRSİZ | 1 | 0 | −1 |
| bulunamadı | 6 | 4 | −2 |
- Yazılabilir ucu olmayan polity: 7 → **2 POLITY** (uruk-gec-uruk, elam-simaski).
- KRONOLOJİ harita_degisimi (83 KAYIT):
  - EVET 34 → 34 (0);
  - SINIR 24 → 33 (+9);
  - HAYIR 19 → 12 (−7);
  - "—" 6 → 4 (−2).
- **SINIR kovası hedefe SAYILMADI** (koordinatör hükmü).

### Kapsam dışı, bulundu ama YAZILMADI (öneri)
- **hanigalbat t:** Šalmaneser I (RIMA 1 A.0.77.1, 1263–1234) Taidu'dan Karkamış'a kadar alır. RlA 4 s.107: *"Damit war die Geschichte des Staates Ḫ. beendet."* ⇒ ② SINIR adayı (şu an bulunamadı).
- **elam-avan f:** Sargon saltanatı içinde tanıklık ⇒ f ≤2279 ÜST sınır adayı.
- **ⓑ için ① OLAY adayları** (kronolojiye eklenecek, harita değişimi):
  - Š34 (2061) Anşan yıkıldı;
  - IS14 (2015) Susa;
  - 1158 Šutruk-Nahhunte Zababa-šuma-iddina'yı öldürür;
  - Babil Kroniği 1 i 9-10 743 Humban-nikaš I tahta çıkar;
  - 720 Der savaşı.

### Erişilemeyen
- Iranica SUSA/ŠIMAŠKI/SUKKALMAH (arşivde yok);
- RlA Elam maddeleri okunmadı;
- RIMA 3 (Šamši-Adad V) boş;
- CDLI Hammurabi yıl adları boş;
- Englund OBO 160/1.

## 11. ⓑ KRONOLOJİ DERİNLEŞTİRME — hedef 80+ ATTESTED ① harita değişimi
Üç okuyucu, üç çağ:
- A: Ur III ve Akkad yıl adları (CDLI wiki);
- B: Eski Babil yıl adları (CDLI wiki + Wayback cdli.ucla T12K);
- C: Babil Kronikleri ABC 1–22 + Limmu listesi 858–699 (livius.org Grayson/Glassner aktarımı).
Kanıt dosyaları: `KAMP-MEZOPOTAMYA-OLAY-A.md`, `-OLAY-B.md`, `-OLAY-C.md`. Birleştirme betiği `KAMP-MEZOPOTAMYA-olay_birlestir.py`.

### Yeni ayrım: OLAY ≠ HARİTA DEĞİŞİMİ ("SÜRE ≠ OLAY"ın kardeşi)
Yılı sabit bir olay (①) harita değişimi olmak zorunda değil.
- **"ba-hul / mu-hul / sur yıktı"** (yıkım, cezalandırma seferi) **AKIN** kovasına girdi; HEDEFE SAYILMADI.
  Örnek: Simurrum yıl adlarında DOKUZ kez yıkılıyor (Š44 "a-ra2 1(u) la2 1-kam") ⇒ yıkım kontrol değişimi değil.
- **"seized / captured / annexed / conquered / tahta çıktı / haraç verdi / ayaklandı"** **EVET** sayıldı.

### Tarih konvansiyonu (yıl adları, A+B)
- Yıl adı ÖNCEKİ yılın olayını anar ⇒ TARİH = yıl adının yılı − 1, metinde "±1 yıl" beyanlı.
- Mevcut 1763 Larsa kaydıyla (H31 yıl adı ⇒ olay 1763) aynı konvansiyon.
- C kroniklerde regnal yıl/eponim olay yılıdır ⇒ kaydırma yok.
- C'de ay/gün var ama Jülyen dönüşümü kaynakta yok ⇒ kesinlik `yil`.

### Sayım (kendi tabanımda; KRONOLOJİ 83 → 177 KAYIT)
| okuyucu | ① gelen | EVET | AKIN | HAYIR | eklenmedi |
|---|---|---|---|---|---|
| A (2350–2004) | 25 KAYIT | **0** | 23 | 2 (IS9 yalnız sefer; IS17 boyun eğiş) | 0 |
| B (2004–1595) | 36 KAYIT | **16** | 15 | 0 | 5 (Zimri-Lim 4: ZL1'=1774 mutlak eşlemesi KAYNAKSIZ açılmadı · RS30 Isin = mevcut 1794 kaydı, mükerrer) |
| C (1595–539) | 38 KAYIT | **36** | 1 (707 Dur-Yakin yıkımı; 709'da alınmıştı) | 1 (680 Asur içi vali değişimi) | 0 |
| **toplam** | 99 KAYIT | **52** | 39 | 3 | 5 |

harita_degisimi:
- **EVET 34 → 86 KAYIT (+52)**. Bunun **75 KAYIT**'ı Mezopotamya içi, **11 KAYIT**'ı Mezopotamya dışı (yeni `kapsam` kolonu):
  - Arpad, Kullania, Kummuhu;
  - Arza, Sidon, Bazza, Šubria;
  - Memfis, Aşkelon, Kudüs, Pirindu.
- SINIR 33 (ayrı kova, sayılmadı) · AKIN 39 (ayrı kova, sayılmadı) · HAYIR 15 · "—" 4.
- **Hedef 80+: tüm kapsamda TUTTU (86); yalnız Mezopotamya içinde TUTMADI (75).** Hangisi sayılır, koordinatör hükmü.
- Çakışma denetimi: aynı yıl + aynı yer + mevcut EVET = 0 VAKA.

### Bilinen zayıflıklar (adıyla)
- **Çağ dengesizliği:** 3. binyılda kontrol değişimi yazan yıl adı neredeyse yok. A'nın EVET'i 0; Ur III fetihleri yıl adlarında hep "yıktı".
- **C'nin metni livius.org aktarımı** (Grayson ABC / Glassner). Birincil yayın sayfası açılmadı.
- **Arpad:** eponim 741 der, literatür 740 der. 741 yazıldı, fark beyanlı.
- **Babil 732–627:** ayrı polity id'si yok; `polity` = eylemi yapan taraf. -651 Kutha `yeni-babil` yer tutucu (Šamaš-šuma-ukin Babil'i).
- **911–746 palû yıllıkları alınamadı:** RIAo sayfaları betikle yükleniyor. Til-Barsip 856, Laqe/Suhu seferleri bu yüzden eksik ve sıradaki en büyük havuz.
- **② kovası:** A 7, B 10, C 16 KAYIT; dosyalarda listeli, CSV'ye girmedi. Örnekler: Tukulti-Ninurta I'in Babil'i alışı, Tiglat-pileser I, Halule, 648 Babil'in düşüşü.

## 12. Koordinatör hükmü sonrası: ① kapsam işareti · ② YIKIM ≠ DEVİR taraması · ③ Ur III ölçümü · ⓓ suzeren
Hüküm: 80+ TÜM KAPSAMLA sayılır ⇒ **86 KAYIT, TUTTU**. Şartı: kapsam-dışı işaret (aşağıda ①).

### ① Kapsam işareti (KRONOLOJİ yeni kolonlar)
- `kapsam_disi` = EVET: **11 KAYIT**; HAYIR: 166 KAYIT.
- `sahip_dilim` = **K1 MEZOPOTAMYA**, bütün 177 KAYIT'ta.
- `atif_dilim` = olayın düştüğü öteki dilim, yalnız 11 KAYIT'ta:
  - K4 AKDENIZ: Sidon, Aşkelon, Arpad, Kullania (son ikisi sınır doğrulanmadı);
  - K2 MISIR: Memfis;
  - K3 ANADOLU: Kummuhu, Šubria, Pirindu;
  - iki adaylı: Arza (K4/K2), Kudüs (K4/K7);
  - Bazza: BİLİNMİYOR (Arabistan — dilim tablosunda yok).
- Yorum (beyanlı): hükmün iki satırı arasında gerilim vardı:
  - `sahip_dilim (K2 MISIR…)` diyor;
  - ama "olayın sahibi FAİL POLITY'nin dilimidir" de diyor.
  - **Kural satırı esas alındı:** sahip = fail = K1. Coğrafî dilim AYRI kolonda (`atif_dilim`): o dilim bu kayda ATIF yapar, yeniden yazmaz.
  - Yanlış okuduysam tek kolon adı değişir; veri değişmez.

### ② YIKIM ≠ DEVİR — 39 AKIN KAYDI "yıkımdan sonra şehir sürdü mü?"
Kolon `akin_sonrasi`. Kanıt: `KAMP-MEZOPOTAMYA-AKIN-SONDU.md` + iç kanıt (aynı şehrin KRONOLOJİ'de daha sonraki kaydı).
| sonuç | KAYIT |
|---|---|
| SÜRDÜ | 12 (Der ×2, Anšan ×2, Urbilum ×2, Susa, Kiš ×2, Eşnunna, Ur/Uruk, Mari) |
| SÜRMEDİ — ama O GÜN DEĞİL | 2 (Kisurra: RlA 5 Kienast, aB sonrası iskân yok ama Hammurabi ardıllarında anılıyor ⇒ son ≤ ~1595 · Šehna/Leilan: Ristvet & Weiss RlA 13 "After ca. 1700, Š. was abandoned") |
| **ŞEHRİN SONU = YIKIM GÜNÜ** | **0** |
| ÖLÇÜLEMEDİ (yer şehir listesinde yok: Simurrum, Karahar, Harši, Lullubum, Kimaš …) | 25 |
⇒ Ölçülebilen 14 KAYIT'ın **0**'ı şehrin sonu. "Akıncı gelir, yıkar, gider" ölçülen evrende 14/14 tuttu.
- İki VAKA'da şehir SONRA bitti, ama kaynak terk tarihini yıkım yılına bağlamıyor ⇒ şehir `t:` ucu bir SINIR (Kisurra ≤1595, Leilan ~1700). Olay günü değil.
- Mari: "the end of Mari as a great city" (Fransız Kültür Bak.) — büyük şehir bitti, yerleşim sürdü.
  - Petek ölçeğine göre iki yüzlü VAKA; nokta ölmedi.

### ③ Ur III: 25 KAYIT → EVET 0 — açıklama (hipotez koordinatörün, ölçüm benim)
**Tek satır:** 25 KAYIT'ın 21'i yıkım fiili (ba-hul/mu-hul), 1'i "kafalarını ezdi" (Š45), 1'i yalnız sefer (IS9), 1'i boyun eğiş (IS17), 1'i "bir günde boyun eğdirdi ve beylerini yakaladı" (IS14). Devir fiili (dab5 + şehir) taşıyan: **0**.
Hipotez **genel haliyle TUTMADI**:
- "Yıl adı temelli kanıt devri kaydetmez" genellemesini aynı ölçüm çürütüyor: Eski Babil yıl adlarının 36 KAYIT'ının **20**'si "seized / annexed / conquered" taşıyor; 16'sı EVET sayıldı (Rim-Sin 20 *"Kisurra was seized and annexed to Larsa"*).
- **Daraltılmış ders (TUTTU):** sınır yıl adı TÜRÜNÜN değil, **Ur III yıl adı FORMÜLERİNİN** sınırı. Ur III çevre seferlerini hep "ba-hul" ile anar.
  - Bu yüzden Ur III'te toprak devri yıl adından OKUNAMAZ: ÖLÇÜLEMEDİ.
  - Ur III'ün çevre hâkimiyeti başka kanıtla (gun₂ ma-da vergi kayıtları, vali atamaları) aranmalı. Bu turda aranmadı.
- K3/K5/K6 için kural: bir yıl adı dizisini kullanmadan önce **fiil dağılımını say**. Devir fiili 0 ise o dizi harita değişimi kaynağı değildir.
- IS14 sınır VAKA: "beylerini yakaladı" bir kişiyi tutsak alır, şehri değil ⇒ AKIN'da bırakıldı, beyanlı.
- Seçim yanlılığı: okuyucu A yalnız askerî yıl adlarını topladı. Ur III yıl adlarının TÜMÜNDE askerî payı ÖLÇÜLMEDİ.

### ⓓ Suzeren (tâbilik) — yeni alan
- `KAMP-MEZOPOTAMYA-SUZEREN.csv`: **14 DİLİM**. 10 DİLİM dataset içindeki **8 POLITY**'de; 4 DİLİM Babil 729–626'da (`dataset_ici=HAYIR`, polity id YOK — öneri: id açılsın).
- POLITY.csv'ye `suzeren`, `suzeren_f`, `suzeren_t` eklendi; çok dilim varsa " ; " ile ayrılıyor.
- Uç tipi (28 UÇ): ① 11 · ② 9 · ③ 8. Kanıt: `KAMP-MEZOPOTAMYA-SUZEREN-KANIT.md`.
- **Düzeltme:** okuyucu Ḫanigalbat'ın Hitit suzerenini `hitit-1595` diye yazmıştı. O kimlik bir OLAY (1595 akını), polity değil ⇒ "Hitit (dataset DIŞI — K3 ANADOLU)".
- **Tutarsızlık, düzeltilmedi:**
  - `lake` tâbiliği ≤859'da eyaletleşmeyle bitiyor, ama POLITY `lake` t = -810.
  - İkisi aynı anda doğru olamaz: ya 859 eyaletleşme kalıcı değildi, ya t yanlış. ÖLÇÜLMEDİ.
- Doğrulanmayan öncüller: Hana ← Samsu-iluna (Charpin: "no positive record"), Elam ← Eşnunna 1765.
- İlhak ≠ tâbilik ayrı listede: Tukulti-Ninurta I Babil'i, Ur III Lagaş/Umma eyaletleri, Şalmaneser I Ḫanigalbat'ı.

### Sürmekte
- 911–746 palû yıllıkları: okuyucu ORACC JSON yolunu deniyor. Sonuç gelmeden ÖLÇÜLEMEDİ yazılmadı.
- ⓒ şehir ilk kayıtları: 35 KAYIT koordinatlı; 3 okuyucu + 2 geç dönen alt-rapor çapraz denetlenecek.

## 13. Koordinatör hükmü (Babil v:asur, Laqe -810) — uygulama
### Laqe: şık **(b)'nin düzeltilmiş hali**
KASA kaynağı KENDİ okudu: RlA 6 s.492–494 (Postgate), görüntüler `https://publikationen.badw.de/de/rla/a/6.527.jpg`, `.528`, `.529`.
- **-810 OLAY DEĞİL, ② SINIR ve BÖLGE ADINI tarihliyor:**
  - *"In the 8th century L. is mentioned as part of the provincial holdings of Palil-ēreš, between Sirqu and Ḫindānu … (Iraq 30 [1968] 142:13)"*.
  - Bu bir valinin toprakları içinde anılan BÖLGE ⇒ **AD VAR, POLITY YOK** (D204'ün kardeşi). Senin ⓒ şüphen DOĞRULANDI.
- **Ek bulgu, eski değerde YÖN HATASI:**
  - Postgate *"incorporated … by the reign of Adad-nirari III (810–783)"* diyor.
  - Tanık o saltanatın HERHANGİ bir yılı olabilir ⇒ güvenli ÜST sınır **-783**. -810 kanıtın söylediğinden 27 yıl erken bir bitiş iddia ediyordu.
  - POLITY `lake` t: -810 → **-783 (② ÜST SINIR)**. -810 nota geçti; KRONOLOJİ yıkılış satırı da -783.
- **Senin şıkkın "(b) → t 859'a İNER" UYGULANAMADI**, çünkü 859 de çürüdü:
  - *"presumably therefore this was not a very successful campaign, although it did not prevent Aššur-naṣir-apli from including 'the land of L. in its entirety' among his conquests in his standard inscriptions"*.
  - ⇒ Aššurnaṣirpal II'nin "bütün Laqe" ifadesi bir kraliyet İDDİASI, eyaletleşme değil.
  - SUZEREN `lake` suzeren_t ≤-859 GERİ ÇEKİLDİ → ≤-783 (②).
  - Okuyucunun ≤859'u RIAo'nun GENEL bir cümlesinden ("system of provinces") türetilmişti, Laqe'ye özgü değildi. **Kapı geçti, sebep yanlış** ailesi.
- **Çelişki çözüldü:** iki uç da sınır ve artık aynı tanığa dayanıyor (≤-783). ① OLAY yok, t'nin gerçek değeri ÖLÇÜLEMEDİ.
- **Açık soru, hüküm senin:**
  - §3: *"The 'land of L.' was never under one ruler, and was at best a loose confederation of Aramaean sheikhs"*.
  - ⇒ `lake` tek polity değil bir KONFEDERASYON. Künye mi kalsın, `kaldu` gibi "tek polity DEĞİL" etiketi mi alsın?

### Babil 729–626: hüküm UYGULANAMADI biçimiyle — engel
- Hüküm "mevcut Babil künyesine `v:asur` dilimleri yazılır" diyor.
- Ama POLITY'de **729–626'yı kapsayan bir Babil künyesi YOK**:
  - `isin-ii` 1157–1026 → `deniz-ulkesi-ii` 1025–1005 → (BOŞLUK) → `yeni-babil` 626–539.
  - `deniz-ulkesi-ii` ardılı "Bazi hanedanı — araştırılmadı".
- **Babil'in 1005–626 arası 379 yılı künyesiz.** Hükmün ② "künyeyi GENİŞLET" sınıfı uygulanacak bir künye bulamıyor.
- Ne yapılıyor: dilim tablosu (732→626, her yıl tek bir duruma; BAGIMSIZ / v:asur-cifte / v:asur-tabi / v:elam / OLCULEMEDI; boşluk düzlenmez) ayrı okuyucuda hazırlanıyor. Hangi künyeye bağlanacağı koordinatörün hükmü.

## 14. Babil künye adı · kaldu emsali ölçümü · ② SINIR aralık taraması
### Babil 1005–626: künye ADI önerisi (devletler.js'e koordinatör yazar)
- **Öneri: `babil-ara`** — ad "Babil Krallığı (Kassit/İsin II sonrası ara dönem)". `yeni-babil` ve `babil-i` ile karışmaz.
- Yedek öneri: `babil-orta-sonu`. `babil-orta` ÖNERİLMEDİ: "Orta Babil" literatürde Kassit dönemi demek ⇒ karışır.
- **f/t ÖDÜNÇ UÇ değil, Babil'in KENDİ tanığından gelecek:** Babil Kral Listesi A'daki hanedan geçişi (Bazi hanedanı ilk kralı), kronikler, eponimler.
- **Uyarı:** ardıl hanedanın ilk kralının tahta çıkışı DOĞASI GEREĞİ öncülün sonuyla AYNI ANDIR (Kral Listesi tek geçiş satırı).
  - Bu yüzden "f ≠ 1005" yazmak her zaman mümkün olmayabilir.
  - Ölçüt: değer KENDİ künyenin satırından mı okunuyor, komşunun ucundan mı kopyalanıyor? İlki ödünç değil.
- **Hüküm gerektiren gözlem (ölçülmedi, adıyla):** "TEK KÜNYE, hanedan başına DEĞİL" ilkesi tutarlı uygulanırsa sorun daha büyük.
  - `isin-ii`, `deniz-ulkesi-ii`, `kassit-babil` (ve belki `babil-i`) da Babil'in HÜKÜMDAR HANELERİ.
  - Mevcut POLITY tablosu Babil'i hanedan başına bölmüş.
  - ⇒ `babil-ara` ya bu hanedan künyelerinin YANINA açılır (tutarsız ama dar), ya da Babil'in bütün hanedan künyeleri tek künyede birleşir (tutarlı ama geniş).

### kaldu EMSALİ — ölçüldü, beklentin TUTMADI
| nerede | kaldu / konfederasyon ne taşıyor |
|---|---|
| `data/devletler.js` | **kaldu YOK** (atlas penceresi 1281+; MÖ künye yok) |
| K1 `KAMP-MEZOPOTAMYA-POLITY.csv` | `kaldu`: ad "Keldani (Kaldu) kabileleri — tek polity DEĞİL", bütün alanlar "—", durum "listeye alınmadı / bulunamadı" ⇒ dizinde **DE YOK** |
| `devletler.js` öteki konfederasyonlar | `berabis` "Berâbîş Kabile Konfederasyonu" tur:"devlet", f/t 1600–1894, **`devlet_harita_ust.js`'te dnm dilimi VAR ⇒ BOYANIYOR** · `nogay` (konfederasyon, boyanıyor) · `ranquel` "Ranquel Konfederasyonu" tur:"devlet" (harita_ust'ta yok) |
- Beklentin "dizinde KALIR, haritada BOYANMAZ" idi. Ölçülen evrende bu davranışı taşıyan emsal **0**.
- Atlasta konfederasyon sorusunun zaten **İKİ AYRI cevabı** var: kaldu = dizinde yok · berabis/nogay = devlet olarak boyanıyor.
  - Bu tam olarak "aynı soruyu soran iki uygulama = iki ayrı davranış" (§3).
- ⇒ Laqe'ye emsal UYGULANMADI. Hangi emsalin uygulanacağı belirsiz; ikisini birlikte bağlayan hüküm sende.
- `lake` künyesi şimdilik olduğu gibi duruyor; §3 alıntısı notunda.

### ② SINIR uç taraması — "aralığın hangi ucu?" (D206 tanık hâli)
- Evren: POLITY'de `tarih_turu = SALTANAT` olan **33 UÇ**.
- Kural (kanıttan, uçtan değil):
  - "X saltanatında İLK anıldı" ⇒ f ≤ saltanat SONU (ÜST);
  - "X saltanatında hâlâ var" ⇒ t ≥ saltanat BAŞI (ALT);
  - "X saltanatında bitti / X saltanatına dek ilhak" ⇒ t ≤ saltanat SONU (ÜST);
  - "olay E'den sonra kuruldu" ⇒ f ≥ E (ALT).

| sınıf | UÇ |
|---|---|
| bir ARALIKTAN alınmış | **17** |
| ↳ doğru uç | 10 (uruk-ed t, lagas-ii f, umma t, mari-sakkanakku f, hanigalbat f, elam-avan t, elam-sukkalmah t, elam-orta f, elam-orta t [aralık beyanlı], elam-yeni f) |
| ↳ **YANLIŞ uç** | **7** (ur-i f, lagas-ii t, kis t, gutium t, mari-sakkanakku t, lake f · lake t §13'te düzeltilmişti) |
| aralık DEĞİL ama **YÖN hatası** | **3** (kis f, akkad t, mitanni f) |
| aralık değil, doğru (kurucu saltanat başı / ölüm / tek nokta) | 13 |

Bu turda düzeltilen 9 UÇ (POLITY not alanına eski değer + gerekçe; KRONOLOJİ 6 satır):
- **ur-i f** -2500 → **-2401 ÜST**: 25. yy tanıklığı, yüzyılın sonu.
- **lagas-ii t** -2112 → **-2095 ÜST**: Ur-Nammu saltanatı içinde.
- **kis t** -1880 → **-1845 ÜST**: Sumu-la-El saltanatı içinde.
- **gutium t** -2116 → **-2110 ÜST**.
- **mari-sakkanakku t** -1985 → **-2017 ALT**: Išbi-Erra saltanatı başı. ⚠️ Bunu §10'da BEN yazdım — kendi hatam.
- **lake f** -911 ALT → **-891 ÜST**: ilk anılış saltanatın sonuna kadar olabilir.
- **kis f** ALT → **ÜST** (değer -2700 aynı).
- **akkad t** ÜST → **ALT** (değer -2193 aynı): hanedan sürdü; not alanı bunu ZATEN söylüyordu.
- **mitanni f** ALT → **ÜST** (değer -1500 aynı).

**KÖK NEDEN (sistemik, benim aracım):**
- `k1_tip.py` (§9 düzeltme turu) `yaz()` fonksiyonu SINIR yönünü KANITTAN değil UÇTAN türetiyordu: `'ALT' if uc=='f' else 'ÜST'`.
- Yani her f "alt sınır", her t "üst sınır" etiketlendi. "İlk tanıklık" bir f için ÜST sınırdır; "hâlâ var" bir t için ALT sınırdır.
- 10 UÇ'luk hatanın (7 yanlış uç + 3 yön) TÜMÜ bu tek satırdan.
- Ders: **sınırın yönü uçtan değil tanığın cümlesinden okunur.** Bir şablonun "f=alt / t=üst" varsayımı, tanık "ilk anılış" dediğinde ters çalışır.
- K3/K5/K6 aynı aracı kullanacaksa önce bu satır düzeltilmeli.

## 15. ⓒ ŞEHİR 32 → 68 KAYIT (hedef 60+ TUTTU)
- Eklenen 36 KAYIT:
  - ⓒ okuyucusunun koordinatlı 35 KAYIT'ı (Pleiades JSON);
  - − Upi/Opis: alt-ajan E, *"The precise location of Opis has not been established"* (livius) — Pleiades "precise" demesine rağmen ÇIKARILDI;
  - + konum denetimiyle Nerebtum ve Kutalla.
- İlk kayıt tarihli: **67 / 68 KAYIT**.
- Her şehir İKİ bağımsız okuyucuyla çapraz denetlendi:
  - ⓒ ajanının geç dönen 4 alt-raporu + benim 3 okuyucum;
  - Suriye/Habur'un benim okuyucusu henüz dönmedi ⇒ o 17 KAYIT şimdilik TEK okuyucu.
- Kurallar uygulandı:
  - ilk kayıt = tanıklı dönemin GEÇ sınırı;
  - arkeoloji ayrı kolonda;
  - Sümer Kral Listesi kullanılmadı (Bad-tibira'da özellikle).
- Ayrışma çözüm kuralı (beyanlı, her satırın `not`unda):
  - erken AMA doğrulanmış tanık esas;
  - konvansiyon çatışmasında atlasın klasik OK'si (Šulgi 2094–2047). ARCANE'nin 2 yıl kayık tablosu kullanılmadı ⇒ Kisurra -2064, Puzriš-Dagan -2056, Maškan-šapir -2154;
  - dönem sonu konvansiyonu mevcut satırlarla AYNI (Zabalam -3000 = Ur satırı).
- ⚠️ işaretli zayıf **8 KAYIT**:
  - Tuttul: alıntıda Ebla adı yok;
  - Ekalte: tablet tarihi ≠ ad;
  - Kabnak: kimlik Iranica'da şüpheli;
  - Qatna, Alalah, Kahat: Zimri-Lim mutlak eşlemesi KAYNAKSIZ (OLAY-B'de aynı sebeple dışarıda);
  - Me-Turan: Pleiades kimliği Tall al-Sīb;
  - Tarbisu: kimlik belirsiz.
- Kanıt: `KAMP-MEZOPOTAMYA-SEHIR-KANIT.md` (8 ham rapor). Betik: `KAMP-MEZOPOTAMYA-sehir_birlestir.py`.
- **§12 YIKIM ≠ DEVİR'in ÖLÇÜLEMEDİ 25 KAYIT'ı yeniden soruldu:** yeni 36 şehrin hiçbiri o 25 yerden biri değil ⇒ **25 KAYIT hâlâ ÖLÇÜLEMEDİ**:
  - Simurrum, Karahar, Harši, Lullubum, Kimaš, Hurti, Šašrum, Šurudhum, Bitum-rabium, Jabru, Huhnuri, Simanum, Zabšali, Adamdun, Girtab, Amurru kenti, Bašimi, Akusum, Pi-naratim, Kazallu, Malgium, Sabum, Dur-Yakin;
  - Kazallu, Malgium ve Girtab konumsuz diye DIŞLANDI.

## 16. Koordinatör hükümleri uygulandı: HARAÇ ≠ DEVİR (911–746) · babil-ara · Laqe boyanır · tanik_sayisi · Pleiades dersi
### ③ HARAÇ ≠ DEVİR — 911–746 yıllıkları (okuyucu D, 77 KAYIT) birleştirildi
Kaynak: RIMA 2/3 Grayson çevirisi (archive.org OCR) + SAAS 2 eponim listesi. Kanıt `KAMP-MEZOPOTAMYA-OLAY-D.md`, betik `-olay_D_birlestir.py`.

Okuyucunun 68 EVET KAYIT'ı bölündü:
| kova | KAYIT | ne oldu |
|---|---|---|
| DEVİR (ele geçirme, ilhak, vali/kral atama, iskân, "mine saydım") | **47** | EVET |
| ⓑ TEKRARLAYAN haraç / açık vasallık | **6** | EVET + `v:asur` dilimi KANITI |
| ⓐ TEK SEFERLİK haraç | **4** | AKIN |
| ⓒ ayırt edilemiyor | **11** | `HARAÇ-ÖLÇÜLEMEDİ` (yeni kova), dilim yazılmadı |

- **ⓑ'nin 6 KAYIT'ı:**
  - 857 Patina "imposed … as ANNUAL tribute";
  - 857 Sam'al "I receive (it) ANNUALLY in my city, Assur";
  - 857 Kummuh "I receive ANNUALLY";
  - 894 Qatnu "(my) vassal" (açık vasallık beyanı);
  - 886 Bīt-Zamani "take an oath by Assur" (vasallık andı);
  - 882 Suhu: valinin haracı Ninova'ya KENDİSİNİN getirmesi.
- **Ayırt edici örnek:** 885 Suhu haracı ⓐ çıktı.
  - Gerekçe 882 metninin kendisi: *"although at the time of the kings my fathers the governor of the land Suhu had not come to Assyria"*.
  - ⇒ 885'te alınan haraç bir ilişki DEĞİL, sefer ganimetiydi; düzenli ilişki 882'de BAŞLIYOR.
- **ⓒ'nin 11 KAYIT'ı:**
  - Laqe 894 ve 885; Hindanu 894, 885 ve 883: üç krallık boyunca tekrar, ama süreklilik BEYAN edilmiyor;
  - Sur 841 ve 838;
  - Tabal 837 ve 836;
  - "yükledi" (imposed) beyanları: Guzana, Habhu, Nairi, Madara.
  - Kural (koordinatör): "iki kez ≠ düzenli; tereddütte ⓒ".
- **Geriye dönük:** 616 Suhu/Hindanu haracı (okuyucu C) aynı kuralla ⓐ ⇒ EVET'ten AKIN'a geçti.
- Okuyucunun kendi 9 AKIN'ı (yıkım/yağma) AKIN kaldı.
- **KRONOLOJİ 177 → 254 KAYIT:**
  - EVET 86 → **138** (−1 + 47 + 6). Kapsam içi **100**, kapsam dışı 38 (`atif_dilim`: K3 ANADOLU / K4 AKDENIZ / İran BİLİNMİYOR).
  - AKIN 39 → 53 · HARAÇ-ÖLÇÜLEMEDİ 11 · SINIR 33 · HAYIR 15 · — 4.
- ⓑ'lerin `v:` dilimi olarak SUZEREN.csv'ye yazılması YAPILMADI. Her biri bir başlangıç tanığı, bitiş ucu yok ⇒ dilim AÇIK UÇLU olur. Hüküm sende: açık uçlu `v:` dilimi yazılsın mı, yoksa yalnız kanıt olarak mı dursun?

### ① babil-ara — açıldı, YANINDA
- POLITY'ye `babil-ara` eklendi: f, t **ÖLÇÜLEMEDİ**, ÖDÜNÇ UÇ YAZILMADI.
  - 1005 = deniz-ulkesi-ii sonu, 626-11-23 = yeni-babil başı; ikisi de komşunun ucu.
  - Kendi tanığı Kral Listesi A (CT 36, 25) bu turda AÇILMADI ⇒ aralık `__BOSLUK__`.
- **732→626 yıl yıl durum** (`KAMP-MEZOPOTAMYA-BABIL-DILIM.md`, betikle denetlendi: her yıl TEK durumda, boşluk/örtüşme 0):
  - v:asur-tabi **46** · BAGIMSIZ **26** · v:asur-cifte **25** · OLCULEMEDI **9** · v:elam **1** = **107 YIL** (her iki uç dahil);
  - 18 saltanat satırı.
- SUZEREN.csv'deki id'siz 4 satır (`babil-NB-oncesi`) kaldırıldı ⇒ yerine `babil-ara` için **10 `v:` DİLİMİ**.
  - Kaldırılanların içeriği dilim tablosunda KAPSANIYOR (Bel-ibni, Aššur-nadin-šumi, Nergal-ušezib, Šamaš-šuma-ukin).
  - Silinen bilgi yok.
- **BAĞIMSIZLIK aralıkları dilim DEĞİL, BOŞLUK** (hüküm gereği):
  - 732–729 Nabû-mukin-zeri · 721–710 Marduk-apla-iddina II · 703 · 692–689 Mušezib-Marduk · 652–648 Šamaš-šuma-ukin isyanı.
- **OLCULEMEDI 9 YIL:**
  - 688–681: ABC 1 iii.28 ve Kanon "kralsız". Brinkman "Assyrian monarchy resumed direct rule" der ⇒ zorlanırsa v:asur-cifte olurdu, ZORLANMADI;
  - 626 fetret.
- **Ptolemaios Kanonu boşlukları DÜZLÜYOR:** Tiglat-pileser 731–727, Sargon 709–704, Esarhaddon 680–668, Kandalanu 647–626. Kroniklere uyuldu, her fark dosyada.
- **🔴 BEYAN EDİLMİŞ BORÇ (koordinatör hükmü):**
  - İlke "Babil TEK künye, hanedan başına değil" der. Tablo Babil'i hanedan başına böler: babil-i, kassit-babil, isin-ii, deniz-ulkesi-ii, babil-ara, yeni-babil.
  - `babil-ara` o düzene uyarak açıldı. Birleştirme haritayı değiştirir ⇒ ayrı, ölçülmüş iniş ve Emre'nin modelleme kararı.
  - ~~Birleştirmenin en güçlü delili olacak cümle: Babil Kral Listesi A Babil'i TEK krallık olarak sayar ve hanedanları (BALA) onun İÇİNDE sıralar.~~
  - 🔴 **GERİ ÇEKİLDİ (koordinatör, aynı gece):** koordinatörün BEYANI, ÖLÇÜLMEDİ — metin açılmadan yazılmıştı ("atlas referans değildir" · "yorum ≠ kontrol"). Silinmedi, çürütme yanında. Birleştirme turunda Kral Listesi A AÇILACAK; açılana kadar bu delil YOKTUR.

### ② Laqe: Kabile Konfederasyonu, BOYANIR
- `lake` tur → **"Kabile Konfederasyonu"**. ic_not AYNEN: *"The 'land of L.' was never under one ruler, and was at best a loose confederation of Aramaean sheikhs"*.
- MENZİL şartı not'ta: toprak yalnız attested üye yerlerine kadar (Sirqu, Ṣupru, Aqarbani, Kipina, Sūru/Bīt-Ḫalupê — RlA 6 s.493 tablosu).
- **İKİNCİ CEVAP ADIYLA (ölçüldü):** `devletler.js`'te adında/türünde "Konfederasyon" geçen **21 künye**:
  - **19'u BOYANIYOR**: berabis, aro-konfederasyonu, tuareg ×5, tubu-tibesti, maravi, betsimisaraka, vendat, turkmen, maratha, isvicre, choctaw, creek, haudenosaunee, powhatan, diaguita-calchaqui, muisca;
  - **2'si BOYANMIYOR**: `ranquel` (Ranquel Konfederasyonu) ve `alman-konfederasyonu` (Deutscher Bund).
  - Alman Konfederasyonu'nun boyanmaması BİLİNÇLİ olabilir: üyeleri ayrı boyalı, çatı boyanırsa üst üste biner. Ranquel'inki ÖLÇÜLMEDİ (geometri eksikliği mi, karar mı?).
  - Hüküm sende.

### ⓒ şehir: `tanik_sayisi` kolonu + ikinci okuyucu döndü
- Suriye/Habur ikinci okuyucusu DÖNDÜ (18 KAYIT, hepsi tarihli). 11 KAYIT değişti:
  - **Ebla arşivi grubu** (Tuttul, Ebla, Emar, Karkamış, Halab, Nagar) -2350 → **-2250**:
    - ikinci okuyucu CDLI ARET tabletlerini (BİRİNCİL) açtı; CDLI dönem etiketi 2350–2250;
    - ilk değer ikincil kaynakların "um 2400 / 24. Jh." ifadesinden türetilmişti;
    - Tuttul'un ⚠️'si kalktı (birincil tablet).
  - **Qatna, Kahat, Anat → -1781**: Mari ARM 1 Šamši-Adad I mektupları.
    - Kaynaksız Zimri-Lim eşlemesi ARTIK GEREKMİYOR.
    - Anat -1076 → -1781: 700 yıl erken.
  - **Dur-Katlimmu** -1234 → -1201 ("wahrscheinlich" yerine sert "13. yy"). **Guzana** -894 → -891 (eponim→yıl eşlemesi kaynaksızdı).
- `tanik_sayisi`: 2 = **34 KAYIT**, 1 = **2 KAYIT** (Nerebtum, Kutalla — yalnız konum okuyucusu), ilk turun 32 KAYIT'ı "ÖLÇÜLMEDİ (1. tur)".
- **Alalah:** Zimri-Lim eşlemesine bağlı tek kayıt kaldı ⇒ kesinlik `yuzyil`, sert yazılmadı (hüküm).
  - İkinci okuyucunun Ebla adayı "NI-la-la-hu{ki}" KENDİ eşitlemesi ⇒ kullanılmadı.
- ⚠️ zayıf sayısı 8 → **5**: Ekalte, Kabnak, Me-Turan, Tarbisu, Alalah.

### 📌 DERS: ALETİN KESİNLİK DAMGASI, OLGUNUN KESİNLİĞİ DEĞİLDİR (koordinatör adlandırdı)
- Pleiades Opis için "precise" diyor. Bu ÖNERİLEN koordinatın hassasiyeti, teşhisin sağlamlığı DEĞİL. Livius: *"The precise location of Opis has not been established"*.
- Aynı kusurun ayna hâli: "kesinlik:yil yanlış günü doğru yapmaz" ↔ "precise damgası belirsiz yeri belirli yapmaz".
- ⇒ K2/K3/K4/K6 Pleiades kullanırken `reprPoint` hassasiyetini değil isim/teşhis `certainty` alanını ("certain / less-certain") ölçmeli.
- Ek tuzak (alt-ajan E): Karana/Qattara kaydının reprPoint'i doğru poligonla YANLIŞ bir noktanın ORTALAMASI (34.70, 43.33). Doğru konum ~36.26, 42.45 ⇒ reprPoint kör kullanılmaz.

### 25 ÖLÇÜLEMEDİ AKIN — **ŞARTLI AÇIK**
- Yeniden sorma ŞARTI (koordinatör): şehir listesi YENİ BİR BÖLGEYE açıldığında (Zagros dağlık kuşağı, İran platosu, Yukarı Dicle). Sayı arttığında DEĞİL.
- Sebep: o 25 yer teşhis edilmemiş küçük yerleşimler (Simurrum, Karahar, Harši, Kimaš, Hurti, Lullubum…). Aynı bölgede liste büyütmek onları getirmez.

## 17. Koordinatör hükümleri (§16 sonrası): geri çekme · çifte hükümdarlık kolonu · konfederasyon ayırt edicisi
### ① Kral Listesi A cümlesi GERİ ÇEKİLDİ
- §16'daki cümle üstü çizili bırakıldı (silinmedi). Yanına "koordinatörün BEYANI, ÖLÇÜLMEDİ — GERİ ÇEKİLDİ" yazıldı.
- Birleştirme turunda metin açılana kadar bu delil YOKTUR.

### ④ ÇİFTE HÜKÜMDARLIK ≠ TÂBİLİK — kolon ayrımı
- SUZEREN.csv'ye **`v_tipi`** kolonu eklendi:

| v_tipi | DİLİM |
|---|---|
| `v:asur-cifte` | 5 (Tiglat-pileser III, Šalmaneser V, Sargon II, Sanherib 704, Esarhaddon) = 25 YIL |
| `v:asur-tabi` | 4 (Bel-ibni, Aššur-nadin-šumi, Šamaš-šuma-ukin sadık evresi, Kandalanu) = 46 YIL |
| `v:elam-tabi` | 1 (Nergal-ušezib) |
| `tabi` (öteki polity'ler) | 10 |

- `v:asur-cifte` satırlarının notunun başına AYNEN yazıldı: *"ÇİFTE HÜKÜMDARLIK — tâbilik DEĞİL; Asur kralı Babil krallığını kendisi üstlendi. Atlasın şemasında kişisel birlik kavramı YOK, v: en yakın yaklaşıklık olarak kullanıldı. BEYAN."*
- `-cifte` ile `-tabi` BİRLEŞTİRİLMEDİ. Birleşirse ayrım bir daha kurulamaz.
- **Emre'ye giden şema kalemi (4.):** "kişisel birlik / çifte hükümdarlık". Babil 732–626'nın 107 YIL'ının 25'i (≈%23).
- Kontrol: 46 + 25 + 26 + 9 + 1 = **107 ✓**.

### ② Konfederasyon ayırt edicisi (koordinatör adlandırdı)
**Bir konfederasyonun boyanmaması iki sebepten olur:**
- üyeleri ayrı boyalı olduğu için → KARAR. `alman-konfederasyonu`: Deutscher Bund egemen devletler birliğiydi, üyeleri ayrı boyalı ⇒ çatıyı boyamak ÇİFTE BOYA olurdu.
- atlandığı için → EKSİK. `ranquel`: üyelerinin ayrı künyesi YOK, onu açıklayan bir mekanizma yok.

**ÖLÇÜT: ÜYELERİNİN KÜNYESİ VAR MI?** İstisnanın gerekçesi yoksa istisna değil BORÇTUR ("ölü istisna" sorusunun konfederasyon hâli).

⇒ Atlasta iki ayrı cevap YOK: 19 boya + 1 gerekçeli istisna + 1 atlama.
- **BİLDİRİM:** `ranquel` (Ranquel Konfederasyonu) EKSİK. `renkler.py` koordinatörde, kalemi koordinatör aldı. KASA DOKUNMADI.

### 📌 Yöntem (koordinatör adlandırdı): bir ilişkinin DÜZENLİ olup olmadığı, o ilişkiyi İNKÂR EDEN SONRAKİ bir kaynaktan okunabilir
- 882 metni ("atalarım zamanında Suhu valisi gelmemişti") 885 haracını ⓐ'ya düşürdü. Sonraki tanık, önceki olayı tipledi.
