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

## 8. İKİNCİ UYGULAMA — 0052 → KOSU10-KALAN → 0064 (1.MURAT M-4336 · M-4357, 17 Eylül akşamı)

Hepsi tek elden, sırayla uygulandı ve her partiden sonra denetle koşuldu. Commit edilmedi.

**Aletler:**
- Uygulayıcı: `denetim/ARAC-KOSU13-UYGULA2-0917.py`
  - Birinci neslin çok satırlı kayıt hatası giderildi: artık kaydı saran `{…}` bulunuyor.
  - Yeni işlemler: `s~` · `isg=` · METİN kipleri `hepsi` ve `("kayit", ad)` · `KOPYA_ATLA`.
  - Yazımdan sonra **genel kopya eşitleme** yapıyor: yazımdan önce veriyle aynı olan yer_yama kopyası yeni değere çekiliyor. Önceden farklı olan kopyaya dokunmuyor, raporluyor.
- Paketler:
  - `denetim/PAKET-KOSU13-0052-0917.py`
  - `denetim/PAKET-KOSU13-KOSU10-0917.py`
  - `denetim/PAKET-KOSU13-KOSU10B-0917.py` (Kuba)
  - `denetim/PAKET-KOSU13-0064-0917.py`

### 8.1 0052B/C/D ailesi (144 kalem)

**Uygulanan kalemler:**
- **DEVIR #1-2-3:** Kilitbahir `kur`/`d` 1463 (yıl) · madde p0036 1463 · olaylar_ek'teki anakronik iki anış çıkarıldı.
- **DEVIR #11:** Tartu (almanya→1558 · rusya 1558-1582 · lehistan).
- **NOKTA #1-2-7:** Göksun · Gürün · Reşadiye yeni noktaları `yerlesimler_anadolu_0914.js`'e eklendi.
- **NOKTA #5:** Elbistan zinciri.
- **RENK (veri) #2-12 ve #15:** Aşkale, Sarıkamış ve 9 Kars kaydının zinciri · Zigetvar 1526.
- **Künye izni:** Aşkale ve Sarıkamış çapanın kendi künye aşımını kopyaladı, bu yüzden paket izniyle `4c` 129→130 oldu.

**Karar bekleyen:**
- **DEVIR #14:** Van 1467-11-10 mi, 1468-07-01 mi (Bitlis ile birlikte).

**Devredilenler:**
- DEVIR'in kalanı ve NOKTA'nın kalanı: KOSU10 partisine ya da 0914 paketlerine (TRAKYA · ANADOLU · ARAP · KUZEY · UZAK · KARTLI-KAHETI). Bu partide yok.
- **C (EKODUNYA) ve D (VEZIR):** araştırma notu ya da ilgili paketlere gösterge. Somut yama yok.

**RENK — `arac/renkler.py`'ye yazılmadı, 1.MURAT'a:**

| Kalem | Kimlik |
|---|---|
| #1 · #40 | karakoyunlu |
| #16 | novgorod |
| #18 | sirbistan |
| #19 | prusya |
| #20 | gilan-kiya |
| #21 | estonya |
| #22 | ingiliz-kuzey-amerika |
| #23 | komanci |
| #24 | herero |
| #25 | bundu |
| #26 | aro-konfederasyonu |
| #27 | fipa-nyakyusa |
| #28 | svazi |
| #29 | maliseet |
| #30 | betsileo |
| #31 | etowah |
| #32 | vasulu |
| #33 | bambara |
| #34 | sahaptin |
| #35 | zuni |
| #36 | adamava |
| #37 | bemba |
| #38 | solima-yalunka |
| #39 | almanya |

- #17 bir UI kalemi (`js/app.js` SU_RENGI) → Oturum 1'e.
- #13 ve #14 ölçüm/not kalemi, yazılacak bir şey yok.

**Denetle:** temiz. D1 3858/324 · D2 0 açık · 2s 98 · 4c 130.

### 8.2 YAMA-KOSU10-KALAN (72 uygulanabilir)

**Uygulanan kalemler:**
- **K2-BITLIS:** yer + M1/M2 maddeleri.
- **K29-A1/A3/B1/C1:** Mâku · Gence · Berde · Eçmiyadzin · Revan.
- **G2:** Hemedan · Burûcird · Luristan · Nihâvend (+1589 maddesi) · Kirmanşah kaynağı · Bîcâr · Sarâb · Miyâne · Selmâs · Tiflis (+1578-08-24 maddesi) · Şerur · Gümrü · Merend + Ahar (+1588-09-01 maddesi) · Mahabad · EK2 Tebriz metni.
- **G3-A6C:**
  - P0058B · P0076A · C0020 (+1722-11 Hacı Dâvud maddesi).
  - **Tebriz 1725-07-28 ve 1731-11-15→1732-01-08** (+Hekimoğlu maddesi; ek5 Tebriz maddesi ve yer_yama bağı 07-28'e çekildi).
- **Tebriz'e bağlı kayıtlar (D166 çapa kuralı):** Tebriz 07-28'e çekilince 1725-08-04 günü veride 5 kayıtta kalıyordu. Beşinin de 1725 günü "gün komşudan: Tebriz/Merâga" olduğu için **Merend · Merâga · Ahar · Mîyandoab · Mahabad aynı gün 07-28'e çekildi.** Yamada bu kalem açıkça yok.
- **G4:**
  - Kostayniçe 1556-07-16 · Dubrovnik · Erzincan (Y1b eretna + HALKA zinciri 1410/1422/1450/1457) · Vodina 1387 · Üsküp 1392-01-06 · Köstendil (Dejanović tâbi) · Dejanović künye kaynağı · Manisa 1415 · Zencan Timur dilimi.
  - Yergöğü (Y7 + G5): eflak→1450, s:rusya→isg, d 1450→1829.
  - Filistin: Nablus/Yafa/Sayda/Akkâ 1516-09-27, gün komşudan Şam. Akkâ'nın kendi kaynağı **bulunamadı**. Kudüs 1516-10-01 (ay). ek5 maddeleri yeniden yazıldı: 12-28 Amman'a daraltıldı, 12-29 padişahın gelişi oldu. Yeni 1516-10-01 maddesi eklendi.
- **G5-RUS:**
  - Hotin (s→isg; 1739 · 1769 · 1788 avusturya · 1806).
  - Bender ve İsmail (s→isg + kd tek parça).
  - Kili · Akkirman.
  - Bükreş (1789 avusturya · 1806-12-25 · 1828-05-07).
  - Yaş (1739 · 1828-05-07).
  - Eflak beşi (1806 + 1828) · Roman · Birlad · Kalas (1828).
  - Özi 1737-07-11.
  - Maddeler: 1788 Hotin · 1789 Bükreş · 1789 Bender · 1790 Kili · 1809 İsmail · 1770 Akkirman.
- **G6:**
  - Malaka 1511-08-10 (asya · kademe · devletler · kronoloji_portekiz).
  - KRON2-02/04/09/10/11/12/13: maddeler ekokuma ve savaslar bağlarıyla birlikte taşındı; eski "t KORUNDU" notlarına tarih önekli açıklama eklendi.
  - Trablus/Bingazi/Derne işgali ve Uşi 1912-10-18.
  - Tilimsan Merînî dilimleri ve iki kuyruk maddesi 1352.
  - Kandiye 1669-09-06 · Derbend 1578-10-05 (madde yeniden yazıldı).
- **G7:** Nahçıvan · Ordubad · Culfa 1586 · ek8 maddesi.
- **Yeni maddeler (`olaylar_p0917kosu13.js`, +18):** 1387 · 1415 · 1427 · 1450 · 1516-10 · 1532 · 1534 · 1578-08-24 · 1588-09 · 1589 · 1722-11 · 1731-11-15 · 1770-10-09 · 1788-09 · 1789-11-01 · 1789-11-14 · 1790-10-24 · 1809-09-26.

**Ek kalem — Kuba (KARAR İÇİN İŞARETLİ):**
- Derbend maddesi 1578'e taşınınca Kuba'nın 1583-01-01 kazancı maddesiz kaldı (D2: 1 açık).
- Kuba'nın kendi kaynağı yok, `m:"Derbend"`, 1583 günü Derbend'in eski gününden gelmişti. Derbend'in kaynaklı gününe, **1578-10-05'e çekildi** (`PAKET-KOSU13-KOSU10B`).
- Seçenek: Şamahı'nın 1578-11-01 günü de olabilirdi.

**Ertelenenler:**
- **G5-KAVALALI:** `js/app.js` dosyası Oturum 1'in.
- **G5-RUS-KUNYE:** renk ve ad kararı gerekiyor.
- **G4-A6A-HALKA · G5-A6B-HALKA · G6-HALKA-HALKALAR:** yeni halka dosyaları ile app.js/index.html işi.
- **Merend 1731 penceresi:** kaynak yok, yazılmadı.
- **Hotin/Yaş 1806-01-01 ve 1806-11-30 · Roman/Birlad 1806:** G5-RUS-1806-BOGDAN kararını bekliyor.
- Bender'in 1806-11-30'u yamanın kendi önerisi (gün komşudan: Akkirman).

**Karar bekleyenler — yamanın `karar` kovası (34):**
- **G2:** KIRMANSAH-BITIS · KURT-BANE-MERIVAN-SAKKIZ-SERDEST · KASRISIRIN · HOY · HANEKIN
- **G3:**
  - CIZRE-1 · KARTLI-1 · 0048-Y3
  - **A6C-ANTLASMA:** Tebriz'in bitişi yamanın önerisiyle 1732-01-08 yazıldı; karar B çıkarsa 01-10 olur.
- **G4:** BUDIN-1529 · DEBRECEN-K · KITA14-2-NOVI · KITA14-4-NIKARYA · A6A-Y1-KEMAH
- **G5:** 2S-IZMIR · RUS-CEHRIN · RUS-SOLYAKA · **RUS-1806-BOGDAN** · RUS-1711-YAS · RUS-1769-BUK · RUS-1853 · FIZAN
- **G6:**
  - NIGBOLU · KRON2-01/08/14/15/16 · HALKA-KAYSERI-MADDE · HALKA-MARAS · HALKA-BATUM · HALKA-KANDEHAR · OHRI
  - **KILITBAHIR:** 0052 ile 1463 (A şıkkı) uygulandı; B şıkkı 1465 olurdu.

**Yamanın öteki kovaları:** bloke 16 · bildirim 28 · kapandı 5. Bunlar olduğu gibi kaldı.

**Denetle:** temiz. D2 557/0 · 2s 99 · 2i 1 (Bihaç 1878, önceden vardı) · 2t 15 · 4c 130 · mükerrer 0. Akkirman maddesinin başlığı mükerrer ölçütü yüzünden ayırt edici yapıldı.

**Kopya eşitleme:**
- Paket kopyaları güncellendi: iran · tbmm · romanya · balkan_1923 · erken · gece_v3 · manda.
- Genel eşitleme 12 alana dokundu: erken · ferhatpasa · tbmm · vassal_kid · yunananakara · zend_kacar.
- p0035'teki Yergöğü kopyası elle eşitlendi.
- ⚪ **`yer_yama_barka_dogu8.js`'teki Bingazi/Derne kopyası** (memlûk 1517-05-19 · Uşi 1912-10-15) önceden de veriden farklıydı, dokunulmadı.
  - `_sahiplik_uygula` bu dosyayı OKUYOR: kuru koşuda Bingazi ve Derne "inen" listesinde.
  - **`--yaz` ile koşarsa Sirenayka düzeltmesini ve bugünkü 10-18 gününü geri alır.** Yama bu dosyaya emekli damgası öneriyor → 1.MURAT.
  - `_sahiplik_uygula` kuru koşusunda inen kayıt: **32** (önceki taban 56).

### 8.3 DALGA-0064

**BALKAN — uygulananlar:**
- **#1 Dubica:** d 1538→1718-07-21 · 1739-09-28→1908-10-05 · s avusturya 1718-1739 · isg 1788-08-26→1791-08-04. Maddesi eklendi.
  - ⚠️ **M-4322 K7 "Dubica dokunma" dedi.** M-4357 bu paketin 4 önerisini istedi ve 0064 yeni kaynak getiriyor (Korić 2016 · HE · Karlofça metni) → uygulandı. K7 bunu kapsıyorsa geri alınabilir: tek kayıt ve tek madde.
- **#2 Novi:** isg 1788-10-03→1791-08-04. Maddesi eklendi.
- **#4 Krupa:** yeni nokta (`yerlesimler_ek29.js`, `kur` 1565). 1565 maddesi eklendi.
- **#6 Niş:** isg 1737-07-27→1737-10-16. METİN ile yazıldı; kaydın `s:` dizisi sırasız.

**BALKAN — kararlar:**
- **#3:** HE'nin yıl sapmaları. Öneri A: dokunma.
- **#5:** Yagodina şık A (1738-08-01, gün komşudan Semendire) mı, şık B mi.
- **#7-9:** teyit, dokunulmadı.

**KARADENİZ:**
- **Eklenen maddeler:** KR-1 1736-03-24 · KR-2 1739-12-12 · KR-5 1838 (Soçi/Tuapse).
  - KR-2 ve KR-5 kırılmasız madde.
- **Zaten vardı:**
  - KR-3 ve KR-4: `olaylar_p0043kirim.js`.
  - H-2 Anapa değişiklikleri veride: isg 1791-07-26 ve 1828-06-24 · rusya 1829→.
- **Kararlar:**
  - **H-1:** Maykop, Tuapse ve Soçi 1829 sonrası sahipsiz; Çerkez künyesi yok.
  - **H-2:** 1791 günü (26 Temmuz mu, 22 Haziran mı); veride 26 Temmuz var.
  - **H-3:** Özi'nin iadesi (1738-08-01 kaynaksız).
  - **H-4 ve KR-6:** Kabartay künyesinin uzatılması.
- **Değişiklik yok:** H-5 · H-6.

**Son denetimler:**
- **Denetle:** temiz. D1 3859/324 · 1b 0 · 1c 4 · D2 558/0 · 2s 98 · 2i 1 · 2t 15 · 4c 130 · 4d 356 · 7 656 · mükerrer 0. Novi maddesinin başlığı mükerrer ölçütü yüzünden ayırt edici yapıldı.
- **renk_olc:** çıkış 0. Çakışma yalnız indor↔maratha ve bharatpur-cat↔gvalyar (Hindistan; birinci partideki ölçümle aynı). 6 yakın-ama-değmeyen · 0 görünmez.

### 8.4 Değişen dosyalar — bu iki parti (commit EDİLMEDİ)

- **Yerleşim:** `yerlesimler.js` · `_anadolu_0914` · `_asya` · `_ek11` · `_ek26` · `_ek28` · `_ek29` · `_kalite4` · `_ok107` · `_sinir_kuzey`
- **Kopyalar:** `yer_yama.js` · `_balkan_1923` · `_erken` · `_ferhatpasa` · `_gece_v3` · `_iran` · `_manda_0906` · `_p0035` · `_romanya` · `_tbmm_1920_0905` · `_vassal_kid_0906` · `_yunananakara` · `_zend_kacar`
- **Kronoloji (çekirdek):** `olaylar.js` · `_ek` · `_ek2` · `_ek5` · `_ek8` · `_ek14` · `_p0036` · `_p0917kosu13` (+26 madde)
- **Başka oturumların dosyaları (bağ taşıma):**
  - `savaslar.js` · `devletler.js` · `kademe_f5c9a5.js`
  - `kronoloji_habsburg.js` · `_kuzeyafrika` · `_portekiz`
  - `ekokuma_antlasma2.js` · `_celali` · `_ekonomi` · `_mimari` · `_savas` · `_savas3`
- **Benim olmayan değişiklikler:** `git status`'ta görünen `arac/uret_petek.py` · `data/d_sinirlar_ortadogu.js` · `ekokuma_avusturya/baslik_oneri/kiyas/padisah/rivayet/statu/toplum/vezir` · `yerlesimler_nokta_afrika_0917.js`. Bunlara dokunmadım.

## 7. Bulunamayan / yapılmayan

- **BIRINCI-DUNYA yamaları:** henüz yok.
- **Jasenovaç (B5):** değişiklik önerilmedi (Karlofça sınır komisyonu çalışması gerekiyor).
- **Salyan 1727-01-01:** madde yok.
- **Kuba / Şâbüran:** `kuba-hanligi` künyesi yok. Devletler dizinindeki `kuba` **Kongo'daki** Kuba Krallığı.
- **Serdeşt:** kaynak bulunamadı, cep kalır.
- **Kazvin · Zencan · Sultâniye:** 1727 antlaşması ile fiilî alınış ARANMADI.
- **Veriye yazma:** yapılmadı (koşu 12). `data/` dosyalarına dokunulmadı.
