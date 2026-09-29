# AKDENIZ-ARAP-0082 — CEVAP (parti-emrelic-0082, 13 madde)

Oturum: AKDENIZ-ARAP-0082 (Opus) · 30 Eylül 2026 · koordinatör YILDIRIM BAYEZIT
Ölçüm aleti: `denetim/ARAC-AKDENIZ-ARAP-0082-OLC.py` (evren `girdi.GIRDI_DOSYALARI`, 93 dosya, 4296 nokta)
Nokta önerileri: `denetim/AKDENIZ-ARAP-0082-YERLESIM-ONERI.md`
🔴 **Hiçbir şey UYGULANMADI** — `data/`, `js/`, `arac/` dokunulmadı. `denetle.py` koşturulmadı (veri değişmedi; PARTI-0082-ORTAK §6).

## Hüküm dağılımı
```
✗ hatali         10   H-0058 H-0059 H-0060 H-0061 H-0062 H-0071 H-0073 H-0089 H-0092 H-0098
▷ kosu-bekliyor   2   H-0074 H-0101
? emre-karari     1   H-0096   (+ H-0062'nin Dalmaçya kimliği ve etiketi alt kalemi)
✔ dogru           0   (H-0074'ün Rub'ül-Hâlî kısmı alt kalem olarak doğru)
◔ olculemedi      0   madde düzeyinde; alt kalemlerde 9 gün "bulunamadı" (aşağıda adıyla)
```

---

## MISIR — H-0058 · H-0059 · H-0060 · H-0061 (tek kusur ailesi)

**Ölçüm.** Mısır+Sina kutusunda (24–32 K · 28–35 D) **52 nokta**; 1798-1801 penceresinde
`isg:` taşıyan yalnız **7** (İskenderiye, Kahire, Reşîd, Dimyat, Süveyş, Asyut, El-Arîş).
Kalan **45 nokta** (bütün iç Delta, Feyyûm, bütün Nil vadisi Asvan'a kadar) işgal kaydı
**taşımıyor**. 1799-05-20 kesitinde işgal altında görünen: İskenderiye · Reşîd · Dimyat ·
El-Arîş · Kahire · Süveyş · Asyut — yani 7/52.
Önceki denetim `NAPOLYON-MISIR-0070` Kahire/İskenderiye/Süveyş'i düzeltti; **Asyut, Reşîd,
Dimyat'ı "gün bulunamadı" diye 1798-07-01 → 1801-10-09'da bıraktı** (kaynak alanında beyanlı).
Bu partide o üç günün ikisi bulundu.

### H-0058 — ✗ hatali (Asyut 1798-07-01'de işgal görünüyor)
- **Asyut'un işgal günü: 25 Aralık 1798.** Jacques Juillet, *Revue du Souvenir
  Napoléonien* 363, s. 2-13 (napoleon.org Desaix biyografisi): «Le jour de Noël 1798, la
  division arrive à Siout». TDV `asyut` Fransız işgalini anmıyor (0070'de ölçülmüş).
  Hourtoulle (napoleon.org «La campagne d'Égypte») «Le 8 mars, Siout» der — o, Desaix'nin
  **dönüş** geçişidir; ilk giriş Noel'dir. ⇒ **f 1798-07-01 → 1798-12-25.**
- **"Aradaki topraklar işgal edilmemiş mi?"** Edilmiş; atlas göstermiyor çünkü noktalarında
  `isg:` yok. Kaynaklı günler (hepsi Fondation Napoléon, *Correspondance générale* t.2
  kronolojisi = NAPO-2, ya da napoleon.org makaleleri):
  | Nokta | Gün | Kaynak cümlesi |
  |---|---|---|
  | Feyyûm | 1798-10-07 | NAPO-2: «Victoire de Desaix … à Sediman : les Français maîtrisent le Fayoum» |
  | Minye | 1798-12-21 | Hourtoulle: «Le 21 décembre, il atteint Minieh» |
  | Asyut | 1798-12-25 | Juillet (yukarıda) |
  | Cirge (Girga) | 1798-12-29 | Juillet: «Desaix parvient le 29 décembre à Girgeh» |
  | Tahtâ | ≤1799-01-08 | NAPO-2: «Victoire de Davout à Tahtah» (giriş günü değil, üst sınır) |
  | Asvan | 1799-02-01 | NAPO-2 «Victoire de Desaix à Assouan» · Hourtoulle «la cavalerie entre dans Syène» |
  | Kusayr | 1799-05-29 | NAPO-2: «Belliard entre dans le port de Kosseir» |
  - ◔ **bulunamadı:** Benî Süveyf, Behnesâ, Mellevî, Deyrût, Ahmîm, Kına, Kûs, Uksur, Esna,
    Edfû, Kûm Ombo için tek tek gün. (Arama sonucu özetinde «31 Ağustos Beni Souef» geçti
    ama sayfada **doğrulanamadı** — yazılmadı.)
- **Öneri:** Nil vadisi noktalarına `isg:fransa-cumhuriyet` — kaynaklı olanlara kendi günü;
  kaynaksızlara `§4` şartlı komşu günü (aynı süreç: Desaix'nin Aralık 1798 güneye yürüyüşü)
  ve «gün komşudan: <komşu> · <kaynağı>» damgası. Hangisinin komşu günüyle yazılacağı
  koordinatörün hükmü.

### H-0059 — ✗ hatali (1799-05-20, Delta'nın ortası işgalsiz görünüyor)
- 1799-05-20'de iç Delta Fransız denetimindeydi: NAPO-2 «8 août: Napoléon passe à
  El-Khanqah, puis à Belbeis le 9» · «11 août: Combat de Salheyeh» · «10 août: Un petit
  détachement français … à Mansourah (entre Le Caire et Damiette)» (yani Ağustos 1798'de
  Mansûre'de garnizon vardı).
- Atlasta **Dessûk, Kafrüşşeyh, Tanta, Mahalletülkübrâ, Mansûre, Mît Gamr, Şibînülkûm,
  Benhâ, Bilbîs, Fâkûs, Sâlihiyye, Menzile, Katye, Bürüllüs, Demenhûr, Ebûkîr** — 16 nokta —
  `isg:` YOK.
- Kaynaklı günler: **Bilbîs 1798-08-09 · Sâlihiyye 1798-08-11**. ◔ Geri kalan 14 için gün
  **bulunamadı**. Bunlar için seçenek Emre/koordinatörde: 🅐 §4 komşu günü (Kahire
  1798-07-22, aynı süreç) beyanlı · 🅑 yalnız kaynaklı iki nokta, kalan beyanlı borç.
  Önerim 🅐 — 🅑'de Delta işgalsiz görünmeye devam eder, ki kesin yanlış.

### H-0060 — ✗ hatali (Kahire–Asyut arası şehirler, 1799-05-20)
H-0058'le aynı kusur. 1799-05-20'de Feyyûm (1798-10-07'den), Minye (1798-12-21'den) kesin
Fransız denetimindeydi; Benî Süveyf / Behnesâ / Deyrût için gün ◔ bulunamadı ama Desaix
Ağustos 1798 – Ocak 1799 arasında bu vadiyi güneye doğru geçti ve Şubat 1799'da Asvan'daydı —
Mayıs 1799'da arada Osmanlı-Memlük denetiminde nokta kalmadığı kesindir. Düzeltme H-0058'in
tablosu.

### H-0061 — ✗ hatali (1801-08-31'de Reşîd, Dimyat, Asyut hâlâ Fransız)
Üç kaydın bitişi 1801-10-09 ve atlasın kendi kaynak alanında «kaynaksız» diye beyanlı.
- **Reşîd:** fort Julien kuşatması 8-19 Nisan 1801; **teslim 19 Nisan 1801** (NAPO-3
  kronolojisinin Nisan kaydı — ⚠️ gövdeden alıntı alınamadı, arama özeti üzerinden;
  uygulamadan önce NAPO-3 sayfasında «fort Julien» satırı okunmalı).
- **Dimyat:** Kahire kapitülasyonu (27 Haziran 1801) sırasında «Damiette déjà aux mains des
  Turcs» — ◔ gün bulunamadı; **üst sınır 1801-06-27**.
- **Asyut (Yukarı Mısır):** Belliard'ın 27 Haziran 1801 kapitülasyonu Yukarı Mısır
  kalelerinin boşaltılmasını kapsıyordu; ◔ günü bulunamadı. Öneri: **t 1801-06-27** «gün
  komşudan: Kahire kapitülasyonu · NAPO-3» (0070'de Süveyş'e uygulanan aynı §4 devralması).
- ⚠️ Çelişki bildirimi: napoleon.org İngilizce zaman çizelgesi Belliard teslimini **25**
  Haziran, NAPO-3 **27** Haziran verir. Atlas 27'yi kullanıyor; dokunulmasın, çelişki kayda.

---

## H-0062 — ✗ hatali + ? emre-karari (27 Mayıs 1806, Dubrovnik)

**"Bu toprakların hepsini Dubrovnik'ten mi almış?" — HAYIR.** Görseldeki Fransız rengi iki
ayrı kökenden:
- **Dalmaçya** (Zadar, Şibenik, Split, Knin, Sin, Klis, Hvar, Brač, Vis, Korçula…): eski
  Venedik toprağı → 1797 Avusturya → Pressburg barışıyla **Şubat 1806'da Napolyon'a**
  (LZMK `dalmacija`: «U veljači 1806. Francuska preuzima vlast u Dalmaciji»). Dubrovnik'le
  ilgisi yok. Atlas bunu **doğru** gösteriyor (1806-02-01).
- **Dubrovnik Cumhuriyeti**: yalnız şehir + dar kıyı şeridi + adalar. Atlas Dubrovnik'i
  1806-05-27'de Fransız gösteriyor — **doğru gün** (Lauriston'un girişi).

**✗ Kusur — Mliyet (Mljet):** atlasta 1281-1797 Venedik → 1797-1806 Avusturya → 1806-02-01
Fransa. Oysa LZMK `mljet`: «God. 1410. Mljet je konačno potpao pod vlast Dubrovačke
Republike, u sastavu koje je ostao sve do njezine propasti 1808.» ⇒ Mljet **1410'dan itibaren
Dubrovnik**, Dubrovnik zincirini izlemeli (1459-1806 Osmanlı tâbi `v:dubrovnik`, 1806-05-27
Fransız). Bugünkü kayıt Mljet'i Dubrovnik'ten 4 ay önce Fransız yapıyor ve 1410-1797 arası
Venedik gösteriyor. **İki uç ölçüldü (D206):** düzeltme Mljet'i Dubrovnik'e bağlar, Korçula
(gerçekten Venedik/Dalmaçya) etkilenmez.
- 📌 Noktasızlık: Ston, Pelješac, Cavtat, Lastovo, Konavle — Cumhuriyet'in karası —
  **noktası yok**; bugün Dubrovnik ile Korçula/Mljet petekleri paylaşıyor. Öneri dosyasında.

**? emre-karari — Dalmaçya'nın kimliği (16 nokta):** 1806-1809 Dalmaçya hukuken
**Napolyon'un İtalya Krallığı**'na bağlıydı (atlasın kendi Rab kaydındaki LZMK `krk-otok`:
«Požunskim mirom 1806. ušao u sastav Napoleonove Kraljevine Italije, a 1809. u sastav
Ilirskih pokrajina»). Atlas **tutarsız:** Krk/Cres/Rab = `italya-napolyon`, öteki 16 nokta
= `fransa-cumhuriyet`.
  🅐 16 noktayı 1806-02→1809 `italya-napolyon`, 1809→1813 `fransa-cumhuriyet` (İlirya) yap —
     hukukî durum, Rab ile tutarlı.
  🅑 Bırak (fiilî askerî idare Fransız) ve Rab/Krk/Cres'i `fransa-cumhuriyet`e çevir.
  Önerim 🅐 (kaynak zaten veride; tutarsızlığı kapatır).
**? Etiket:** haritadaki ad «FRANSA CUMHURİYETİ» `arac/renkler.py:855`ten gelir ve 1804-1814
İmparatorluk, 1814-1848 Restorasyon/Temmuz Monarşisi, 1852-1870 II. İmparatorluk yıllarında
da basılır — **anakronik etiket**. ⚠️ `renkler.py` motor TUZUNDADIR (§9.1): düzeltme
`denetim/*.diff` olarak tam inşa koşusunu bekler. Karar Emre'de.

---

## H-0071 — ✗ hatali (Eylül 1811 — "Tosun Paşa Yenbu'ya çıktı")

**Cevap: İKİSİ BİRDEN — ve Tosun'un kendisi KARADAN gitti.** J. L. Burckhardt, *Notes on
the Bedouins and Wahábys* II (London 1831, Association for Promoting the Discovery of the
Interior of Africa yayını), s. 343-346 (archive.org `india.history.resource.35601`):
- «ready for departure, at the end of August, 1811»
- «The infantry … fifteen hundred or two thousand … under Saleh Aga and Omar Aga,
  **embarked at Suez for Yembo**»
- «The cavalry, **with Tousoun Bey** and Ahmed Bonaparte … about eight hundred men …
  **proceeded by land**» — hac yolu kaleleri: «Adjeroud, Nakhel, Akaba, Moeyleh, and el Wodj»
- «**In October 1811**, the fleet arrived near Yembo … took possession, after a feeble
  resistance of two days, by capitulation. **A fortnight afterwards, the cavalry arrived by
  land**»
TDV `yenbu` yalnız «(1811)», `kavalali-mehmed-ali-pasa` güzergâh vermiyor; `tosun-pasa`
slug'ı ölü (302). Burckhardt çağdaş birincil kaynaktır; akademik kaynak olarak `kaynak:`a
açıkça yazılmalı.

**Atlasta ölçülen üç kusur:**
1. **Kronoloji başlığı yanlış:** `olaylar_ek4.js:51` ve `kronoloji_misir.js:115`
   «1811-09-03 … Tosun Paşa Yenbu'ya çıktı». Eylül = hareket; **Yenbu'ya çıkış Ekim 1811**
   ve Tosun oraya gemiyle değil karadan, iki hafta sonra vardı. Öneri: başlık «Hicaz seferi
   başladı — ordu Süveyş'ten ve hac yolundan Yenbu'ya yürüdü» (t Eylül'de kalabilir) + ayrı
   madde «Ekim 1811 — Yenbu teslim alındı».
2. **MÜKERRER OK:** aynı sefer iki dosyada — `savaslar.js:843` `a4-tosun-hicaz-1811`
   (f 1811-09-01, Kahire→Yenbu düz) ve `seferler_ok103.js:143` (f **1811-03-01** = Tosun'un
   tayin günü, sefer değil; Kahire→Süveyş→Yenbu). Uçları ve günleri farklı olduğu için
   `app.js`in aynı-uçlu eleyicisi ikisini de çizer. Biri düşmeli.
3. **Güzergâh:** doğru çizim **iki ok**: ① piyade `Süveyş → (deniz) → Yenbu`, Ekim 1811 ·
   ② süvari (Tosun) `Kahire → Acrûd → Nahl → Akabe → Muveylih → Vech → Yenbu`, karadan.
   Kahire→Yenbu düz hattı Sina'yı ve Kızıldeniz'i kuş uçuşu keser — ikisini de temsil etmez.

---

## H-0073 — ✗ hatali (9 Eylül 1818, Hâil ve Nefud)

**Ölçüm (1818-09-09):** Hâil = `hail-ibn-ali` (kendi künyesi, 1779-01-01→1836-01-01) ·
«Nefud çölü» dolgu noktası = Mısır tâbi · Buraydâ/Necid içi/Dir'iye/Riyad = Mısır tâbi ·
Dûmetülcendel ve Teymâ = **sahipsiz** (−).
**Kaynak — TDV `residiler`:** «**1779'da Suûdî-Vehhâbî güçleri Hâil emirliğini ele
geçirdikleri** sırada yönetim Abde aşiretinden İbn Ali ailesindeydi» · «**1818'de** Mehmed Ali
Paşa kuvvetleri Dir'iye'ye hâkim olunca **Cebelişemmer bölgesi Suûdî hâkimiyetinden çıktı**»
· «**1835'te** Abdullah b. Reşîd'in Hâil emirliğini ele geçirmesiyle sonuçlandı».
1. **Hâil 1779-1818 Suûdî olmalı**, bağımsız İbn Ali emirliği değil (İbn Ali ailesi Suûdî
   hâkimiyeti altında idareciydi). Öneri: `suud` 1779-01-01→1818-09-09 · `hail-ibn-ali`
   1818-09-09→1835-01-01 · `sammar` 1835-01-01→.
2. **1836 → 1835:** künye `sammar` 10 Ağustos'ta `f:1835-01-01`e düzeltilmiş, ama veride
   Hâil, Nefud, Dûmetülcendel, Teymâ hâlâ `sammar` **1836-01-01**'den başlıyor; `hail-ibn-ali`
   künyesi de `t:1836`. Kayıt kendi kaynak alanında «1835'te» alıntılıyor — iç çelişki.
3. **Nefud eksklavı:** «Nefud çölü» bir kasıtlı dolgu noktası (k0). Zinciri Hâil'den ayrı
   yazılmış (1744 `suud` · 1818 Mısır · 1824 II. Suûdî · 1836 Şammar) ⇒ 1818-1835 arası
   Hâil kahverengi, Nefud kırmızı ⇒ **eksklav**. Nefud Cebelişemmer'in ardülkesidir; dolgu
   noktası **Hâil'in zincirini birebir izlemeli** (öneri: 1779'dan Hâil ile aynı, öncesi
   kasıtlı çöl). Bu hem eksklavı kaldırır hem 1744'ün anakronizmini (Dir'iye ittifakı yılı
   Nefud'a taşınmış; Suûdîler 1744'te Nefud'da değildi).
4. Emre'nin «Hâil (İbn Ali)'nin hikâyesini ek okuma ile anlatalım» isteği — ek okuma
   kalemi, bu paketin dosyası değil; **koordinatöre sevk**. Dayanak hazır: TDV `residiler`
   yukarıdaki üç cümle.
- 📌 Yan bulgu (ölçüldü, sorulmadı): Buraydâ ve «Necid içi» de `suud` **1744**'ten başlıyor —
  Kasîm'in Suûdî hâkimiyetine girişi daha geçtir; gün/yıl kaynağı bu pakette aranmadı.

## H-0074 — ▷ kosu-bekliyor (1824, "boş görünen topraklar")

**Ölçüm (1824-06-01, 16–30 K · 42–56 D, 51 nokta):** boş görünen alanın kaynağı üç sınıf:
1. ✔ **Rub'ül-Hâlî — gerçekten boş.** «Rub'ul Hâlî doğusu», «Rub'ul Hâlî güneybatısı»,
   «Umman iç çölü» **kasıtlı sahipsiz dolgu noktaları** (Değişmez 1'in beklenen sahipsizleri);
   dünyanın en büyük kum çölü, yerleşik hayat ve siyasi yapı yok. Doğru.
2. 🔴 **Noktasızlık — gerçekten yerleşik ama noktası yok:** Riyad'ın güneyi ile Yemen arasında
   (Leylâ/Eflâc'ın güneyi) **Vâdi'd-Devâsir (Süleyyil), Bîşe, Necrân, Ranye, Tesliis**
   vahaları/kasabaları var; atlasta hiçbiri yok ⇒ o topraklar ya en yakın peteğe emiliyor ya
   çöl dolgusuna düşüyor. Öneri dosyasında (yalnız Necrân TDV'de bulunabildi; ötekilerin TDV
   slug'ları 302 — ◔).
3. 🔴 **Sahipsiz yerleşik noktalar (delik):** **Doha 1670→1871 sahipsiz** (~200 yıl; TDV
   `katar`: Benî Hâlid/Lahsa bağlılığı, 1776 Âl-i Halîfe'nin Zübâre'yi alışı, 1868 Bahreyn'e
   vergi — sahip zinciri var) · **Mukalla 1888 öncesi sahipsiz** · «Hadramut» dolgusu 1881
   öncesi sahipsiz. Bunlar kasıtlı çöl değil; zincir yazılmalı (H-0101'e bak).
Hüküm ▷ çünkü görünüm ancak nokta/zincir eklenip koşu yapılınca değişir.

## H-0098 — ✗ hatali (1838, Şammar-Hâil toprakları)

Görselde 1838'de Şammar'ın içinde **Dûmetülcendel (Cevf)** ve **Teymâ** var; ikisi de
`sammar` **1836-01-01**'den.
- **Dûmetülcendel:** TDV `dumetulcendel`: «Osmanlı Devleti'nin son zamanlarında
  Dûmetülcendel'de otorite Vehhâbîler'in eline geçti» · «**Bir ara Şemmer Emîri Talâl** ile
  Ruvele kabileleri şeyhi Nûrî b. Şa'lân buraya hâkim oldular» · «1921 yılında Abdülazîz b.
  Suûd Dûmetülcendel'i topraklarına kattı». Talâl b. Reşîd Abdullah'tan sonra gelir (Abdullah
  1835'te başa geçti) ⇒ **1838'de Cevf Şammar'da değildi.** Talâl dönemi yılı ◔ bu
  pakette okunmadı; Nûrî b. Şa'lân dönemi de veride yok (atlas 1921'e kadar Şammar diyor).
- **Teymâ:** TDV `teyma`: «Teymâ, **1830 yılından itibaren yarı bağımsız halde Rummân
  ailesine mensup emîrler** arasında sık sık el değiştirdi» · son emir 1950'de öldürülünce
  «Teymâ, Suûdî hâkimiyetine geçti». ⇒ atlasın `sammar` 1836→1921 ve `suud-ucuncu` 1921→
  kayıtları TDV ile çelişiyor. Rummân emirliği için **künye yok**.
- **? alt karar:** Teymâ için 🅐 yeni künye (Rummân emirliği, 1830→) + renk kapısı · 🅑 1830
  sonrası kasıtlı boşluk (`__BOSLUK__`, §3.5.1 — «en yakın kimliğe itilmez») · önerim 🅐
  kaynak kimliği adıyla veriyorsa, yoksa 🅑.
- Hâil'in kendisi ve Nefud: H-0073'ün 1835 düzeltmesi burada da geçerli.

## H-0101 — ▷ kosu-bekliyor (1871-04-20, Katar'ın yarısı Doha'nın değil)

**Ölçüm (1871-04-20):** Katar'da **yalnız 2 nokta**: Doha (sahibi **yok** — `v:katar`
1871-09-20'de başlıyor) ve «Katar Yarımadası (iç, dolgu)» (`v` 1559→1670, **sonra 1923'e dek
sahipsiz**). Komşu: Ukayr (Osmanlı, `d:` **1871-04-20**'de başlıyor — görselin günü),
Manama (İngiltere), Lahsa (Osmanlı).
- **Cevap:** Görselin doğusu **boş** çünkü Doha ve iç dolgu o gün sahipsiz; batısındaki
  kırmızı **Doha'nın bölgesi değil** — Selva körfezinin karşısındaki Osmanlı Ukayr/Lahsa
  peteğinin (ya da Lahsa bölge poligonunun) yarımadaya taşan payı. ⚠️ Hangisi olduğu motor
  çıktısından **ölçülmedi** (çıkarım); `donemler.js` o gün için sorgulanmalı.
- **Kaynak — TDV `katar`:** «**1871 sonbaharında** Katar'da da Osmanlı kontrolü sağlandı ve
  burası Necid sancağına bağlı bir kaza olarak teşkilâtlandırılıp Câsim b. Sânî fahrî
  kaymakam tayin edildi» · «1776'da … Âl-i Halîfe'nin Katar'ın batı sahillerinde Zübâre'yi
  işgal etmesi» · «1868 sonbaharında … Muhammed b. Sânî'yi Bahreyn emîrlerine vergi vermeye
  mecbur bıraktılar».
- **Öneri:** ① iç dolgu noktası Doha'nın zincirini izlesin (1871→ `katar` tâbi, sonra
  `katar`, 1916 İngiliz isg:) — yarımada tek renge döner; ② **Zübâre** noktası (batı kıyı;
  1776 Âl-i Halîfe → Bahreyn) — Selva körfezi kıyısındaki taşmayı kendi sahibiyle keser;
  ③ Doha'nın 1670-1871 sahipsizliği için zincir (Benî Hâlid → Âl-i Halîfe/Bahreyn nüfuzu →
  1868 Bahreyn'e bağlı) — ◔ yıllar TDV'de kısmen var, günler yok. Hepsi koşu ister ⇒ ▷.

---

## CEZAYİR — H-0089 — ✗ hatali (5 Temmuz 1830, Tilimsan Fransız görünüyor)

**Ölçüm (1830-07-05):** Fransız görünen **6 nokta**: Cezayir · Blida · Medea · Miliana ·
Şerşel · **Tilimsan** — hepsi `s:fransa-cumhuriyet` **1830-07-05**'ten 1923'e kesintisiz.
**Kaynak:** TDV `cezayir`: «5 Temmuz 1830 günü **Cezayir şehrini** işgal ettiler» — yalnız
şehir. TDV `tilimsan`: «**Emîr Abdülkādir** el-Cezâirî **1833'te Tilimsân'ı alarak** kendi
topraklarına kattı» · «**1836**'da Fransızlar her ne kadar şehri **kısmen** ele
geçirdilerse de **1837 yılı Mayıs** ayında yapılan **Tâfnâ Antlaşması** ile buraları tekrar
Emîr Abdülkādir'e bıraktılar» · «Ancak **1842**'de antlaşmayı yok sayıp ikinci işgal dönemini
başlattılar». Tâfnâ günü: TDV `abdulkadir-el-cezairi` **30 Mayıs 1837**.
- **Tilimsan önerisi:** 1830-07-05→1833-01-01 ◔ (1830-33 arası Fas işgali akademik
  literatürde anılır, TDV `tilimsan` vermiyor — **bulunamadı**; boşluk beyanı ya da mevcut
  `cezayir-ocagi` devamı Emre'de) · 1833-01-01→1836-01-01 `abdulkadir` · 1836-01-01→1837-05-30
  `fransa-cumhuriyet` (TDV «kısmen» diyor — `isg:` daha dürüst) · 1837-05-30→1842-01-01
  `abdulkadir` · 1842-01-01→ `fransa-cumhuriyet`. ⚠️ `abdulkadir` künyesi 1832-11-22'de
  başlıyor; 1833 yılı ona uyuyor. Künye 11 noktada zaten kullanılıyor (renkli).
- **Aynı sınıf — Medea, Miliana, Blida, Şerşel:** 1830-07-05 bu dört şehir için **kesin
  yanlış** (TDV yalnız Cezayir şehrini tarihliyor; Tâfnâ iç bölgeyi Abdülkādir'e bıraktı).
  ◔ Kesin işgal günleri TDV'de **bulunamadı** (`medea`/`lemdiye`/`blide`/`miliane`/`sersel`
  slug'ları 302; `cezayir` ve `abdulkadir-el-cezairi` bu şehirlere gün vermiyor). Önceki
  ölçüm `ORTADOGU-OLCUM-CEZAYIR-0907` 57 noktanın 49'unun kaynaksız olduğunu zaten
  kaydetmiş. Öneri: akademik kaynak aranana dek bu dört noktanın `f:`si en azından
  **Tâfnâ sonrasına** ertelenemez (kaynaksız) — `? emre-karari`: 🅐 beyanlı borç olarak bırak
  · 🅑 akademik tarama sevki (Fransız askerî tarihi, 1840 Medea/Miliana seferleri).

---

## İBRAHİM PAŞA — H-0092 · H-0096

Parti-0075'te ölçülenler (`C:/claudemre/kutu/KUTU.md`, H-0013/0014/0015/0025) esas alındı;
**mükerrer ölçüm yapılmadı**, yalnız bugünkü veri o hükümlere karşı okundu.

### H-0092 — ✗ hatali (birinci Mısır krizi, 5 alt soru)
**Kaynak — TDV `ibrahim-pasa-kavalali`:** «Akkâ'yı … muhasara altına aldı (26 Kasım)» ·
«Ardından Sûr, Sayda, Beyrut ve **Trablusşam** şehirlerini de ele geçirdi» · «Akkâ'yı da 27
Mayıs'ta teslim aldı» · «**16 Haziran'da Şam'ı** zaptedip Humus üzerine yürüdü ve burada …
Osmanlı kuvvetlerini yendi (**8 Temmuz**)» · «**Halep'i** ele geçirdikten sonra (**15
Temmuz**) ilerleyerek … Belen'de mağlûp etti (**29 Temmuz 1832**)».
1. **«Şam teslim oldu ama Humus da elden çıkmış»:** Humus'un kaydı doğru (`v` 1832-07-08).
   Humus'u saran iki komşu yanlış: **Hama** `v` **1832-06-15** — Hama Humus'un kuzeyindedir,
   8 Temmuz Humus zaferinden önce alınamaz ⇒ ✗, f ≥ 1832-07-08 (◔ günü bulunamadı).
   **Trablusşam** `v` 1832-06-15 — TDV onu Akkâ düşmeden **önce** alınanlar arasında sayıyor
   ⇒ gün 1831-11-26 ile 1832-05-27 arası, ◔ bulunamadı; 06-15 kesin geç.
   Şam'ın günü: atlas **15**, TDV **16 Haziran** ⇒ `v` ve kronoloji maddesi
   (`olaylar_ek4.js:179`) **1832-06-16**.
2. **«Halep'in günü kayıtta yok mu»:** var — TDV **15 Temmuz 1832**. Atlasın maddesi
   (`olaylar_ek4.js:183`) `t:1832-06-25`, `gun:"Haziran 1832"` ve Halep'in `v`si 06-25:
   **ikisi de yanlış.** Atlasın kendi Antep/Kilis kaynak alanları «Halep 15 Temmuz» diyor —
   iç çelişki.
3. **«Humus Halep'ten önce mi olmalı»:** EVET. Sıra TDV'de nettir: Şam 16 Haz → Humus 8 Tem
   → Halep 15 Tem → Belen 29 Tem. Emre'nin coğrafî sezgisi doğru; karışıklığın kaynağı
   Halep'in yanlış günü (06-25). Düzeltilince sıra kendiliğinden doğrulur.
4. **«Maraş, Antep, Kilis elden çıkmış mı; ordu ikiye mi ayrıldı»:** Parti-0075 H-0013
   hükmü: **Adana/Tarsus ALINDI** (Belen sonrası, Ağustos 1832 başı) · **Maraş: TDV «1833'te
   işgal, on dokuz aya yakın»** — atlasta hâlâ `v` **1832-07-29 → 1841-02-25** (8,5 yıl;
   **uygulanmamış**, karar Emre'de bekliyor) · Antep: TDV↔akademik çelişki, «koru» önerisi.
   Ordunun 1832'de Maraş'a ayrı kol gönderdiğine dair tanık **bulunamadı**; 29 Temmuz Belen'in
   günüdür, Maraş'a kopyalanmıştır.
5. **«Urfa da alınmış mı»:** Parti-0075 H-0014: **HAYIR** (TDV yalnız 1839'da kısa süre;
   Kutluoğlu Urfa'yı Kütahya kapsamı dışında sayar). Atlasta hâlâ `v` **1832-08-15 →
   1841-02-25** — **uygulanmamış**. Hüküm aynı: kayıt kaldırılsın (1839 kısa işgali kaynak
   günüyle ayrıca).
6. **«Konya ile Adana arasında bağlantı yok» (görsel 2, 1832-11-21):** Parti-0075 H-0015:
   Mersin/Silifke Gülek'in düşüşünden (13 Eylül 1832) sonra Haziran 1833'e dek Mısır
   mütesellimi altında — atlasta **eksik** (Mersin'in `v`si yok); Ereğli · Pozantı · Gülek
   **noktasız**, Ulukışla/Niğde Osmanlı. Uygulanmamış; H-0096'ya bakınız.

### H-0096 — ? emre-karari (1833-05-14, Kütahya–Konya–Adana bağlantısı)
**Ölçüm:** Konya ve Karaman `v:"Mısır ordusu (işgal)"` 1832-11-21→1833-06-30, Kütahya
1833-02-02→1833-06-30 (`yer_yama_vassal_kid_0906.js`); Adana/Tarsus `misir-kavalali`.
Aradaki Ereğli, Pozantı, Gülek, Akşehir, Ilgın, Afyon: ya noktasız ya Osmanlı ⇒ üç ada.
Emre'nin «yol boyunca alanı İbrahim etkisinde gösterelim» isteğinin iki meşru yolu var:
- 🅐 **Veri yolu (önerim):** kaynaklı koridor noktaları eklenir — Ereğli (Konya) ve Mersin/
  Silifke (parti-0075 H-0015, Gülek sonrası Mısır mütesellimi), Pozantı/Gülek (◔ kaynak
  aranmalı). Konya–Kütahya arası (Akşehir/Ilgın/Afyon) için işgal tanığı **bulunamadı** —
  eklenmez. Sonuç: Konya–Adana birleşir, Kütahya ayrı kalır (dürüst).
- 🅑 **Gösterim yolu:** petekten bağımsız bir «ordu etki koridoru» katmanı (yol boyu tampon).
  Yeni katman = kapsam kararı (`§1.6`), veri iddiası taşımaz ama sahiplik de değildir.
- ⚠️ 🅐 olmadan 🅑 yapılırsa harita sahipliği ile koridor çelişir; ikisi birlikte de olabilir.

---

## Ne bulamadım (◔ listesi, adıyla)
Asyut dışındaki Nil vadisi kasabalarının 11'inin işgal günü · 14 Delta kasabasının işgal
günü · Dimyat ve Yukarı Mısır'ın 1801 tahliye günleri · Reşîd 1801 teslimi gövdeden alıntı
(özet var) · Medea/Miliana/Blida/Şerşel işgal günleri · Tilimsan 1830-33 statüsü · Hama'nın
ve Trablusşam'ın 1832 günleri · Talâl'ın Cevf'i alış yılı · Bîşe/Vâdi'd-Devâsir/Ranye/Tesliis
için TDV maddesi (slug 302) · H-0101'deki kırmızının hangi petekten geldiği (motor çıktısı
sorgulanmadı).

## Dosyalar
- `denetim/AKDENIZ-ARAP-0082-CEVAP.md` (bu dosya)
- `denetim/AKDENIZ-ARAP-0082-YERLESIM-ONERI.md`
- `denetim/ARAC-AKDENIZ-ARAP-0082-OLC.py`
