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
