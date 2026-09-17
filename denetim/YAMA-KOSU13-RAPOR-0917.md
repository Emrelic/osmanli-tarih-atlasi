# KOSU13-YAMA — birleşik harita yaması raporu · 17 Eylül 2026

**Yazan:** KOSU13-YAMA (Opus hazır kıta 1010) · **Sevk:** 1.MURAT, `DALGA-BEKLEYEN.md` C2
**Paket:** `denetim/YAMA-KOSU13-BIRLESIK-0917.json` (her kaydın eski/yeni TAM dizisi, varyantlar, denetim bulguları)
**Durum:** ÖNERİ. Veriye YAZILMADI; koşu 12 sürüyor, `data/` donuk. Uygulayıcı: Oturum 0 / UYGULA, koşu 12'den SONRA, koşu 13'ten ÖNCE.

**Aletler** (hepsi salt okuma, yeniden koşulabilir):

- `ARAC-KOSU13-BIRLESTIR-0917.py` paketi üretir.
- `ARAC-KOSU13-OLCUM-0917.py` hedef kayıtları ve kopyalarını ölçer.
- `ARAC-KOSU13-KURA-YAKA-0917.py` Salyan'ın Kura'nın hangi yakasında olduğunu ölçer.
- `ARAC-KOSU13-KAYNAK-0917.py` TDV gövdelerinde alıntı arar.

## 1. Birleştirilen yamalar

| Yama | Harita kalemi | Bu pakette |
|---|---|---|
| YAMA-0057-SAVA | 5 | B1–B5 |
| YAMA-0059-HAZAR | 4 harita + 5 madde | R1–R4 · M1–M5 |
| YAMA-0063-HAZAR | 3 + 3 inceltme | R5–R9 · K1/K2 varyantları |
| YAMA-0060-KRONO | 4 harita (H1–H4; kronoloji kısmı C1'de) | R10–R18 |
| YAMA-0060-IRAN1723 | 25 | O1–O4 · O8–O22 · O30 · M6–M11 |
| YAMA-0063-IRAN | 20 (7'si 0060'ın devri) | O5–O7 · O23–O29 · O31 · M12–M13 |
| **BIRINCI-DUNYA (1DUNYA-A/B)** | — | **HENÜZ YOK** (diskte `YAMA-1DUNYA-*` dosyası yok). Gelince araca kalem olarak eklenir. |

**Toplam: 55 satır** (O31 üç yeri birlikte taşıyor).

| Kova | Sayı | Kalemler |
|---|---|---|
| 🟢 UYGULANABİLİR | **29** | B1–B4 · R5 R6 R10–R18 · O1–O4 · O11–O20 |
| 🟡 KARAR | **16** | R1 R2 R3 R4 R7 · O5–O10 · O23–O27 |
| 🔴 BLOKE | **4** | R8 Kuba · R9 Şâbüran (künye yok) · O28 Ahar · O29 Kotur (Hoy kararı) |
| ⚪ BİLDİRİM | **6** | B5 Jasenovaç · R19 Mahmudâbâd · O21 Serdeşt · O22 Bîcâr · O30 Hoy · O31 Kazvin/Zencan/Sultâniye |

## 2. Ne ölçüldü

- **Hedef kayıt:** 61 ad arandı. 61'i `girdi.yukle` ile bulundu ve her biri **tek** kayıt (ad belirsizliği 0).
- **"Eski" değerler:** Uygulanan her işlem, yamanın eski alt dizisini/penceresini bugünkü veride **birebir** arıyor. **Uyuşmayan kalem 0**; hiçbir yama önceden inmemiş.
- **Kayıt başına denetim** (varyantlar dahil, 29 + 16 kalem): sıfır/ters uzunluk 0 · çakışma 0 · **yeni Değişmez 1 boşluğu 0**. Tek 🔴: **R3-A** (`kumuk-samhalligi` künyesi 1607'de bitiyor, rengi YOK).
- **Değişmez 2/2s, doğan 28 gün:**
  - 27'sinin ±30 gün içinde maddesi var:
    - 17'sinde **ilgili** madde ya bu pakette (M1–M15) ya da C1'de (UYGULA-2'nin indirdiği 0060/0063-KRONO).
    - 🟡 7'sinde sayaç yalnız en yakın maddeyle kapanıyor ve ilgisi ölçülmedi (D147): 1718-07-21 Pasarofça (ilgili) · 1722-08-08 · 1722-08-24 · 1724-08-11 (Hemedan, **alakasız**) · 1725-09-09 (Gence, **alakasız**) · 1735-06-19 Arpaçay · 1739-09-28 (en yakın Niş 10-03; Belgrad 09-18 ilgili, 10 gün) · 1908-10-07 (Bosna ilhakı 10-05, ilgili).
  - 🔴 **1727-01-01 (Salyan, 2s) MADDESİZ.** Kaynak yamada madde önerisi yok. 2s tavanında yer var (104/121), ama açık +1.
- **Kaldırılan 12 gün:**
  - Tamamen kalkan iki gün var, `1722-08-23` ve `1735-03-10`. İkisinin maddesi de M1/M2 ile yeni güne taşınıyor, 2t'ye düşmez.
  - `1723-07-26`'nın maddesi yok.
  - Öteki 9 gün başka kayıtlarda sürüyor (Mahmudâbâd 1723-09-23 ve 1732-01-21'i artık **tek başına** taşıyor, R19).
- **Kostayniçe'nin yeni noktası:** 15 km içinde başka nokta yok.

## 3. 🔴 Bulgular: paketi uygularken kaçırılırsa geri dönen üç şey

### 3.1 Yer yama kopyaları düzeltmeyi GERİ ALIR (20 kopya)

`data/yer_yama_zend_kacar.js` hedef kayıtların **tam `s:` dizilerini** taşıyor ve bugünkü veriyle **birebir aynı** (ölçüldü: hedef 61 kaydın 51'inde zend_kacar kopyası AYNI; FARKLI tek kopya Derbend/kafkas_rusya). `yer_yama_iran.js` (Mîyandoab `d:`) ile `yer_yama_ferhatpasa.js` (Urmiye · Culfa `d:`) da aynı durumda. `yer_yama_kafkas_rusya.js`'teki Derbend kopyası ise zaten FARKLI.

`_sahiplik_uygula.py` her koşuda bu dizileri **değiştirerek** yazar. Kapsam koruması (`:916-925`) d+s+v **birleşik** kapsama baktığı için, bayat bir `s:` ya da `s:`'nin zaten kapsadığı yerde eksik bir `d:` penceresi kapsamı daraltmaz, yani **koruma ötmez** (kod okundu).

⇒ Paketteki her kaydın `yer_yama_kopyasi` alanında "🔴 GÜNCELLENMELİ" yazan **20 kopya**, **aynı partide** yeni tam diziyle güncellenmeli ya da silinmeli (D017).

### 3.2 A6C önce iner, ama A6C'nin kendi maddesi eksik

Paket, A6C hükmü (KOSU10-SONRASI §A6c) **indikten sonraki** durumu hesaplıyor (D166):
- `K-TEBRIZ` 1725-07-28 olur, ayrıca 1731-11-15→1732-01-08 penceresi eklenir.
- `K-ERDELAN` bitişi 1732-01-08 olur.
- Nahçıvan'ın bitişi 1735-06-19 olur.

Ölçüm: **1731-11-15 için çekirdekte, kuyrukta ve A6C'de madde YOK.** Hüküm "Tebriz'in geri alınışı eklenir" diyor, ama metin yazılmamış. Bu madde inmezse Tebriz'in ve Merend'in (O11) kırılması **maddesiz** kalır ve uygulayıcıda ENGEL olur.

⇒ **M15** taslağı yazıldı. Dayanağı iki TDV maddesi, ikisinin de gövdesi okundu:
- `hekimoglu-ali-pasa`: «Önce Rûmiye'yi (Urmiye), ardından da … (15 Kasım 1731) boşaltılan Tebriz'i alan»
- `tebriz`: «15 Cemâziyelevvel 1144'te (15 Kasım 1731) yeniden ele…»

A6C'nin Tebriz kalemini uygulayan taraf **bu maddeyi de** indirmeli.

Ayrıca Tebriz 07-28'e çekilince, Tebriz'den devralınmış **Merâga · Sarâb · Miyâne · Ahar** 08-04'te kalır ve 7 günlük safevi cebi açılır:
- Merâga Emre kararıyla izler (O14, uygulanabilir).
- Sarâb ve Miyâne K11'e bağlı.
- **Ahar Hoy kararına kadar 08-04'te kalır** (O28 bloke, geçici cep bilinerek bırakıldı).

### 3.3 C1 kronoloji maddeleri harita paketinden önce iniyor

UYGULA-2, 0060-KRONO ve 0063-KRONO maddelerini şimdi indiriyor. Bu iki dosya kendi metinlerinde "HAZAR yamalarıyla **BİRLİKTE**" diyor.

Haritası koşu 13'e kalan 7 gün şunlar: 1723-01-01 · 1725-01-01 · 1732-09-02 · 1724-09-11 · 1735-05-01 · 1735-05-08 · 1735-08-23. Bunlar geçici olarak 2t'yi (kırılmasız madde) artırabilir. Bu uyarı UYGULA-2'ye **M-4286** ile yazıldı.

## 4. 🟡 Kararlar (koordinatör / Emre)

| # | Soru | Seçenekler | Önerim |
|---|---|---|---|
| **K1** | Derbend/Bakü Rus döneminin sonu | A 1735-03-21 antlaşma (BRE) · B teslim: Derbend 05-08, Bakü 05-01 (**Kurukin AYNASI, doğrulanmadı**) | **A şimdi.** B, basılı nüsha doğrulanırsa (D030 tasarruf ilkesi B'den yana). A'da 0063-KRONO #4/#5 kırılmasız kalır (2t +2). |
| **K2** | Ağraham burnu sonu: Sulak mı, Terek mi? | A 1735-03-21 · B 1735-08-23 (Garunova 2016 + Asvarov-Magaramov 2022) | **B** (iki akademik kaynak, madde hazır) |
| **K3** | Salyan, 2. Rus döneminin sonu | A 1732-09-02 (güney yaka) · B 1735-05-01 (kuzey yaka) | Koordinatör. **Ölçtüm:** atlas noktası Kura'nın **sol (kuzey) yakasında, 3,0 km**. Bu, NE 10m genelleme payı içinde, **kesin değil**. İki dönemin başlangıç bilgisi yalnız Kurukin aynasına dayanıyor. |
| **K4** | Nahçıvan · Ordubad · Culfa başlangıcı | A 1724-01-01 (TDV yılı) · B 1724-08-11 (Aktepe 1970, Yörük-Valiyev 2016 üzerinden) | **B**: TDV ile çelişmiyor, onu inceltiyor; Ordubad'ı **adıyla** anıyor. Bilgili'nin 1723'ü ayrışma notu olarak kalır. |
| **K5** | Örtülü Osmanlı: Gümrü (O5) · Meşkinşehr (O25) · Kotur (O29) | evet / hayır | **Emre** |
| **K6** | Tarku 1722–1726 tâbiiyeti | A `kumuk-samhalligi` (künye t ≥1726 **ve** renk gerekir; `devletler.js` ve `renkler.py` sahiplerine) · B tek dönem `rusya` (D089) | A. Ön koşullar gelene kadar kalem bekler. |
| **K7** | Dubica 1718–1739 Pasarofça şeridinde mi? | kaynak gerek | B2 bundan bağımsız uygulanır |
| **K8** | Bosna ilhakı günü | Bu paket 1908-10-07 (TDV) kullanıyor, öteki Bosna kayıtları 1908-10-05 | Ayrı kalem. Atlas referans değil: bütün Bosna ya TDV'ye çekilir ya da 10-05 için kaynak gösterilir. |
| **K9** | Kliçatak · Norapat | Komşu kaydın **birebir kopyası**; köyün kendi tarihi ARANMADI | Aranmadan uygulanmaz (§4 zincir yasağı). İnmezse Revan eyaleti içinde 2 küçük cep kalır. |
| **K10** | Hoy başlangıcı (Bilgili «Mayıs 1724») ve bitişi (TDV hoy «1739») | A6C C-0076-c | Ahar ve Kotur buna bağlı |
| **K11** | Erdebil (+ Halhâl · Meşkin · Sarâb · Miyâne) başlangıcı | A Tebriz günü (A6C sonrası 07-28) · B 1725-09-09 (1 Muharrem 1138; M13 gerekir) | Yazar A diyor. Kayda geçirdiğim kusur: **A, üç kaynağın üçünden de erken boyar.** Seçim koordinatörün. |

## 5. Kaynak sınavı

- **TDV HTTP:** 24 slug ölçüldü, 24'ü **200**. `belgrad-antlasmalari` **302** (bilinen ölü).
- **TDV gövde:** 19 kilit alıntı 14 madde gövdesinde arandı. **19/19 bulundu** ve bağlamı okundu (§4② ve ⑧: cümle o günü mü tarihliyor, yoksa başka bir olayı mı).
- **Iranica:** 7 adres de **403** döndü. Bu bot engeli; sonuç **ölçülemedi**, "yok" değil. Iranica alıntıları yazar oturumların beyanı olarak duruyor.
- **Doğrulanmamış tek kaynak:** Kurukin 2010'un **çevrimiçi aynası**. Yalnız ona dayananlar:
  - K1-B
  - R7'nin 1724 garnizonu ve 1724-09-11 günü
  - Tâliş/Gîlân bitişinin Levaşov günü (bunun yılı Iranica'da ayrıca var)
- **BRE:** bu oturumda ölçülmedi.

## 6. Uygulama sırası (D166)

1. **A6C hükmü** (+ M15)
2. **Bosna:** B1–B4
3. **Rus yanı:** R5 · R6 · R10–R18, ardından kararlara göre R1–R4 ve R7
4. **Osmanlı anahtarları:** O1 Revan · O8 Nahçıvan (K4) · O14 Merâga · O17 Senendec
5. **Bağlı kayıtlar:** O2–O4 · O9–O10 · O11 · O12→O13 · O15–O16 · O18–O20 · O23–O27 (K11)
6. **Emre / K9 onayı gelirse:** O5 · O25 · O6–O7
7. **Maddeler:** M1–M15 aynı partide
8. **Kopyalar:** 20 kopya aynı partide (§3.1)
9. **Denetim:** `py arac/denetle.py` · `py arac/renk_olc.py`, ardından koşu 13
10. **Koşu 13 sonrası:** Brod peteği Sava'nın kuzeyine taşıyor mu? Slavonski Brod ve Stara Gradiška noktaları yok (0057'nin iki uç uyarısı).

**Madde ↔ bağ güncellemeleri** (madde `t` değişince):
- `yer_yama.js:89` (Nahçıvan) · `:132` (Derbend) · `:133` (Gence) · `:187` (Revan): **t alanı yeni güne**
- `ekokuma_rusiran.js` iki anahtarı da zaten taşıyor ✓
- `yer_kron_dogu.js:86/110` (Bakü/Derbend `s:` kopyası) hiçbir aletin glob'una girmiyor; bayatlar ama geri almaz (D099)

## 6b. UYGULAMA — 17 Eylül öğleden sonra (1.MURAT M-4322 · M-4328 · M-4331)

**Verilen kararlar ve uygulanan biçimleri:**

| # | Karar | Uygulanan |
|---|---|---|
| K1 | A | Derbend ve Bakü'nün Rus dönemi 1722-09-03 / 1723-08-06 → **1735-03-21** |
| K2 | B | Ağraham burnu 1722-08-08 → **1735-08-23** |
| K3 | Başlangıç DOKUNULMAZ (Kurukin), bitiş K1 ile aynı | Salyan: `rusya` 1723-09-23 → **1735-03-21** (ara dönemler yazılmadı) |
| K4 | B | Nahçıvan · Ordubad · Culfa **1724-08-11** → 1730-08-12. A6C inmediği için bitiş BUGÜNKÜ gün. |
| K5 | Emre kuralı | **Gümrü** = doğudaki Revan'ın kaynaklı penceresi (1724-10-03→1735-10-03; batıda Kars kesintisiz Osmanlı), kayda "örtülü — Emre 17 Eylül kararı · dayanak: Revan". **Meşkinşehr**: doğudaki Erdebil'in K11-B penceresi (1725-09-09→1730-08-12) ölçüldü ve kaynaklı, o günden itibaren boyandı. **Kotur BEKLER**: doğusundaki Hoy'un günü kaynaksız (K10), zincirleme devralma yasak. |
| K6 | — | Tarku BEKLER |
| K7 | — | Dubica DOKUNULMADI |
| K8 | — | Brod ve Novi'de 1908 günü mevcut Bosna kayıtlarıyla aynı (**1908-10-05**); TDV'nin 10-07'si ayrı kalem |
| K9 | — | Kliçatak ve Norapat UYGULANMADI (iki cep kalır) |
| K10 | — | Ahar · Kotur BEKLER |
| K11 | B | Erdebil · Halhâl · Meşkin · Sarâb · Miyâne **1725-09-09** → 1730-08-12 · madde M13 |

**A6C veride İNMEMİŞTİ** (Tebriz 1725-08-04). Anchor kuralına göre BUGÜNKÜ günler kopyalandı:
- Merend · Mîyandoab · Mahabad: 1725-08-04 → 1730-08-12
- Urmiye · Selmâs: 1724-01-01 → 1730-08-12
- Erdelan dörtlüsü: 1723-11-10 → 1732-01-10
- Merâga'ya dokunulmadı; M15 yazılmadı; Merend'e ikinci pencere eklenmedi.

⇒ **A6C inerken bu 10 kayıt da aynı günlerle taşınmalı.**

**1DUNYA:**
- **A #1 Lüksemburg `isg:`** uygulandı.
- **B A1–A9** uygulandı: Erzurum · Erzincan · Trabzon · Bitlis Rus işgali (`s:` rusya → rusya-gecici-hukumet → transkafkasya) · Kût 1915–16 İngiliz · Tâif 1916-09-17 · Halep 10-26→10-27 · Bakü 1918–20 Azerbaycan · Bağdat 1921 Irak Krallığı.
- **KARAR'da kalanlar:** A10 Batum ve A12 Tiflis (günsüz) · A11 Duala (kaynak metinden okunmadı).
- **A #2–8:** karar / bloke, aynen kaldı.

**Aletler:**
- `denetim/ARAC-KOSU13-UYGULA-0917.py`: hedefli uygulayıcı. Kuru koşu varsayılan; eskiyi birebir doğrular; tekrar koşunca her işlemi reddeder (ölçüldü: 48 engel, 1 zararsız konum).
- `ARAC-KOSU13-KOPYA-JSON-0917.py`: JSON üslubundaki kopyalar.
- `ARAC-KOSU13-FARK-0917.js`: HEAD ile çalışma kopyası arasında JS'in OKUDUĞU değer düzeyinde fark.

**`_sahiplik_uygula.py --yaz` KULLANILMADI.** Kuru koşusu 56 ilgisiz kaydı indirecekti. Bunların ~30'u Libya'daki bayat 1711-03-01 kopyalarıydı ve bugünkü Karamanlı 1711-07-29 düzeltmesini GERİ ALACAKTI (M-4333).
- Yazımdan sonra kuru koşu **başlangıçla birebir aynı**: 56 kayıt, İNEN listesinde fark 0.
- ⇒ Bu paketin yazılan 49 kaydı uygulayıcıya karşı kararlı: ne geri alınıyor, ne yeniden uygulanıyor.

**🔴 Yolda yakalanan iki alet kusuru** (ikisi de düzeltildi, ikisi de doğrulandı):
1. **Mükerrer anahtar:** `yer_yama_ferhatpasa.js` (Culfa, Urmiye) ve `yer_yama_iran.js` (Mîyandoab) kayıtlarında `{` bir satırda, `ad:` sonraki satırda duruyor. Kayıt sınırı yalnız `ad:` satırı sanıldı, mevcut `d:` görülmedi ve **ikinci bir `d:` EKLENDİ**. JS sonuncuyu okuduğu için kopya fiilen güncellenmemişti; `ARAC-FARK` "fark 0" diyerek yakaladı. Düzeltildi.
2. **Yorum içinde eşleşme:** Düzeltme sırasında iran.js'te bir **yorumdaki** `d:[]` değiştirildi. Yorum geri alındı, alan elle yazıldı.

Son durumda üç kopya da veriyle AYNI.

**Denetim:**
- **`py arac/denetle.py` → SONUÇ: temiz (çıkış 0):**
  - D1 324/324 · 1b 0 · 1c 4/4
  - **D2 554 kırılma / 0 açık**
  - 2s 95 (tavan 121) · 2i 2 (tavan 3) · 2t 16 (tavan 42)
  - 4 · 4c · 4d · 4s · 5 · 7 beklenenin altında
  - İlk koşuda "mükerrer madde 2 çift" çıktı: Bitlis işgal↔kurtuluş ve Yenbu↔Tâif, ikisi de ayrı olay. `arac/denetle.py` BILINEN_AYRI'ya 2 çift gerekçesiyle yazıldı.
- **`py arac/renk_olc.py` → çıkış 0:**
  - 2 çakışma: indor↔maratha 3.7 · bharatpur-cat↔gvalyar 4.3. İkisi de **Hindistan'da**, bu pakette Hindistan kaydı yok. Paketin doğurmadığı **çıkarımdır**; taban koşusu yapılmadı.
  - 6 yakın-ama-değmeyen · 0 görünmez · 0 aynı-hex.

**Değişen dosyalar (commit EDİLMEDİ, 1.MURAT'a):**
- **Yerleşim:** `data/yerlesimler.js` · `_ek26` · `_ek29` · `_kalite4` · `_avrupa`
- **Kopyalar:** `data/yer_yama_zend_kacar.js` · `_kafkas_rusya` · `_ferhatpasa` · `_iran` · `_vassal_kid_0906` · `_tbmm_1920_0905` · `_manda_0906`
- **Madde bağları:** `data/yer_yama.js` (4 satırın `t`'si)
- **Mevcut maddeler:** `data/olaylar_ek5.js` · `_ek6` · `_ek7` · `data/kronoloji_rusya.js`
- **YENİ:** `data/olaylar_p0917kosu13.js` (5 madde) · `data/olaylar_p0917dunya.js` (11 madde). **index.html'e iki `<script>` satırı gerekiyor.**
- **Denetim aleti:** `arac/denetle.py` (BILINEN_AYRI +2)

## 7. Bulunamayan / yapılmayan

- **BIRINCI-DUNYA yamaları:** henüz yok.
- **Jasenovaç (B5):** değişiklik önerilmedi (Karlofça sınır komisyonu çalışması gerekiyor).
- **Salyan 1727-01-01:** madde yok.
- **Kuba / Şâbüran:** `kuba-hanligi` künyesi yok. Devletler dizinindeki `kuba` **Kongo'daki** Kuba Krallığı.
- **Serdeşt:** kaynak bulunamadı, cep kalır.
- **Kazvin · Zencan · Sultâniye:** 1727 antlaşması ile fiilî alınış ARANMADI.
- **Veriye yazma:** yapılmadı (koşu 12). `data/` dosyalarına dokunulmadı.
