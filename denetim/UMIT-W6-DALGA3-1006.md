# UMIT-W6-DALGA3-1006 — Arpaçay ad düzeltmesi (diff) · Küçükperveli konumu

Görev: UMIT İRTİBAT → UMIT-W6-KAFKAS-1006 (dalga 3). Koşu sürüyor (HAVVA, KOŞU 20): motor
dosyalarına dokunulmadı. Çalışma ağacı `C:\atlas-w6` (origin/main 6ba25049).

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (2026-10-05)
- **İŞ 1:** `"Arpaçay (Akyaka)"` tam adı `data/`+`js/` içinde **3 dosyada** geçer: ek26:48
  (kayıt) + `paket_14.js` + `yer_yama_kafkas.js` (dalga 1'de grep'te görüldü, içerikleri
  okunmadı). Kronolojide `yer_id`/`odak_yer` olarak **0** atıf. `js/` içinde 0.
  `denetle.py` ve `odak_olc.py` ÖNCE/SONRA aynı çıkar (ad değişikliği sahipliği değiştirmez);
  kırık atıf 0 kalır — ancak `paket_14`/`yer_yama_kafkas` adla eşleşiyorsa ve düzeltilmezse
  kırılır, bu yüzden aynı diff'e girerler.
- **İŞ 2:** Kayıt ile OSM arasındaki 3,5 km farkı kurumsal bir koordinat ÇÖZEMEZ (köy
  taneciğinde kurum koordinat vermez) ⇒ sonuç **`ölçülemedi`**. Kaba sınama: kayıt koordinatı
  yuvarlak/ankraj değerli değil (5 hane), yani bir kaynaktan alınmış; OSM'nin "Küçük
  Pirveli"si doğru köy, kayıt muhtemelen yakındaki başka bir köye ya da Büyük Pirveli'ye
  düşüyor.

## 1. ÖLÇÜM — özet
| | Öngörü | Ölçüm | |
|---|---|---|---|
| Tam adın geçtiği dosya (data+js) | 3 | **7** (2 kaynak + 2 paket + 1 üretilmiş + 1 yorum + 1 GeoNames `kaynak:` metni) | ✗ |
| `yer_id`/`odak_yer` atfı | 0 | **0** | ✓ |
| ÖNCE/SONRA denetim özeti aynı | aynı | **aynı** (24 satır birebir) | ✓ |
| Kırık odak atfı | 0 değişim | **1 → 1** (önceden var olan `Ogaden`) | ✓ |
| Küçükperveli | ölçülemedi; kayıt yanlış köyde | **kurumsal: ölçülemedi** · iki veri tabanı kaydın **3,5 km yanlış** olduğunda birleşiyor | ✓ |

🔴 **İŞ 1 DİFF ÜRETİLMEDİ — durdum.** Düzeltme çalışma ağacında yapıldı ama not alanının
şemaya uydurulması (`ic_not_ad` → `not:`) izin denetiminde REDDEDİLDİ (§2.4). Şemaya
uymayan hâliyle diff vermek, bilinen bir UYARI'yı sevk etmek olurdu; vermedim.

## 2. İŞ 1 — Arpaçay ad düzeltmesi
### 2.1 Tarama — `"Arpaçay (Akyaka)"` tam ad (`data/` + `js/` + `arac/` + `*.html`)
| Yer | Tür | İşlem |
|---|---|---|
| `data/yerlesimler_ek26.js:48` | kayıt adı (KAYNAK) | düzeltilir |
| `data/olaylar_ek17.js:201` | `yer:"Arpaçay (Akyaka), Digor, Iğdır"`. GÖRÜNTÜ metni; `yer_id:"Kars"` ⇒ atıf DEĞİL | düzeltilir (1534 maddesi) |
| `data/paket_04.js:206` · `data/paket_14.js:5668` | `arac/paketle.py` ile ÜRETİLMİŞ ("ELLE DÜZENLENMEZ") | `py arac/paketle.py yenile` ile kendiliğinden düzelir; diff'e girmez |
| `data/bolgeler.js` | motor çıktısı (ÜRETİLMİŞ) | sonraki koşuda düzelir; DOKUNULMAZ |
| `data/yer_yama_kafkas.js:317` | hükümle düşmüş, yoruma çevrilmiş kayıt ("SİLİNMEDİ, YORUMA ÇEVRİLDİ") | tarihsel kayıt; DOKUNULMADI |
| `data/yerlesimler_sinir_kuzey.js:32` + `paket_20.js:557` (Küçükperveli `kaynak:`) | metin: "dönemler en yakın kayıt «Arpaçay (Akyaka)» … kaydından BİREBİR" | kaynak cümlesi, atıf değil; dosya ÜRETİLMİŞ ("ELLE DÜZENLEME — yeniden üret") |
`js/`: **0**. Kronolojide `yer_id`/`odak_yer`/`odak_kimlik` olarak: **0**.

### 2.2 Yapılan (çalışma ağacı `C:\atlas-w6`, commit yok)
- ek26:48: `ad:"Arpaçay (Akyaka)"` → `ad:"Arpaçay"`. Not, kaynak alanına KARIŞTIRILMADI:
  mevcut `kaynak:` zincirin dayanağı (ankraj Revan), ad dayanağı başka konu. M1 kaynakları
  (Kars Valiliği /akyaka + /arpacay, Ercilsin 2024, OSM mesafeleri) ayrı not alanına yazıldı.
- olaylar_ek17.js:201: `yer:"Arpaçay, Digor, Iğdır"`.

### 2.3 ÖNCE / SONRA
- `py arac/denetle.py`: iki koşuda da çıkış **2**. Sebep düzeltme değil, TAZE ağaç:
  "Değişmez 8 ÖLÇÜLEMEDİ — devletler_harita.js YOK (üretilmiş + gitignore'lu çıktı)".
  Değişmez/Ek denetim özet satırları (24 satır) **birebir aynı**: D1 309 sahipsiz · D2 623/0
  · D2s 187 açık · D2i 1 · D2t 13 · konum 0.
- `py arac/odak_olc.py`: kırık atıf **1 → 1** (önceden var olan `kronoloji_dogu_afrika.js`
  1897 `yer_id 'Ogaden'`). Arpaçay kaynaklı kırık YOK.
- ⚠️ **İki fark çıktı:**
  1. `sehirler` havuzu **5482 → 5481 ad**. Parantezli ad havuza iki ad olarak giriyordu
     (Arpaçay + **Akyaka**). Düzeltmeyle "Akyaka" takma adı havuzdan düştü. "Akyaka"yı
     atıf olarak kullanan kayıt `data/`+`js/`te 0 (tarandı) ⇒ kırık yok. Ama artık hiçbir
     madde "Akyaka" adıyla odaklanamaz. Hüküm ③ (Akyaka noktası açılmaz) ile tutarlı.
  2. `denetle.py` ve `odak_olc.py` UYARI basıyor: "alan: 'ic_not_ad' BILINEN_ALANLAR'da yok
     — 1 kayıtta (yerlesimler_ek26.js:Arpaçay) … girdi.py'ye kaydet." Benim hatam: `ic_not_*`
     yalnız kronoloji maddelerinin şemasında (VERI-YAPISI.md). Yerleşim şemasında
     `BILINEN_ALANLAR` = ad, bit, bos, d, devir_beyani, g, go, ikiz, isg, k, kasitli_bosluk,
     kaynak, kd, kesinlik, kur, lat, lon, m, neden, **not**, pencere_disi, s, sinir, tur, v.
     `girdi.py`ye alan eklemek motor TUZUNA dokunmaktır (§9.1, koşu sürüyor) ⇒ yapılamaz.

### 2.4 🔴 Durduğum yer
Doğru düzeltme, alanın adını bilinen `not:` alanına çevirmek (kayıtta `not:` yok, çakışma
olmaz). Bu tek değişikliği çalışma ağacında yapmak istedim; **izin denetimi reddetti**
("Modify Shared Resources"). Başka yoldan zorlamadım.
⇒ **Diff (`ARPACAY-AD-1006.diff`) ÜRETİLMEDİ.** Çalışma ağacı şu an `ic_not_ad` hâlinde.
Koordinatör ya bu adımı kendisi yapar (aynı metin, alan adı `not:`), ya da izni verir, ben
diff'i `--check` iki yönde ve LF olarak üretirim.

## 3. İŞ 2 — Küçükperveli 3,5 km sapma
### 3.1 Kaydın kaynağı (kayıt kendi söylüyor)
`data/yerlesimler_sinir_kuzey.js:32` `kaynak:` alanı:
> "KONUM: GeoNames (CC BY 4.0) allCountries 14.9.2026, id 7510596 · Küçükperveli · PPL · TR ·
> 40.67302/43.61322."

### 3.2 Ölçüm
GeoNames arama sayfası (https://www.geonames.org/search.html?q=pirveli&country=TR,
2026-10-05) Kars'ta iki satır döndürüyor:
| GeoNames satırı | alternatenames | lat / lon | idari |
|---|---|---|---|
| Küçük Pirveli | Eskipirveli, Kucuk Pirveli, **Kucukperveli, Küçükperveli**, Küçük Pirveli | **40.685444 / 43.651337** | Kars Province |
| Büyük Pirveli | Buyuk Pirveli, Buyukpirveli, … | 40.688365 / 43.65946 | Akyaka İlçesi |
id 7510596 "Küçükperveli" sayfası var (https://www.geonames.org/7510596) ama içerik JS ile
yükleniyor; koordinatı sayfadan okunamadı. Kayıttaki değer allCountries dökümünden alınmış.

| Çift | km |
|---|---|
| kayıt (GeoNames 7510596) ↔ GeoNames "Küçük Pirveli" | **3,50** |
| kayıt ↔ OSM "Küçük Pirveli" (village, 40.68388/43.65269) | 3,54 |
| GeoNames "Küçük Pirveli" ↔ OSM "Küçük Pirveli" | **0,21** |
| kayıt ↔ Büyük Pirveli (GeoNames) | 4,26 |
| kayıt ↔ Akyaka (OSM) | 7,50 |

### 3.3 Hüküm
- **GeoNames'te aynı köyün İKİ kaydı var.** Atlas, ötekisinin alternatenames'inde de
  "Küçükperveli" geçen ikinci (7510596) kaydı kullanmış.
- **İki bağımsız veri tabanı (GeoNames ana kaydı + OSM) 0,21 km içinde birleşiyor; kayıt
  ikisinden de 3,5 km uzak.** Olası doğru konum ~40.685/43.651 (Büyük Pirveli'nin
  ~0,8 km batısı; ikiz köy deseniyle tutarlı).
- **Kurumsal kaynak: `ölçülemedi`.** Köy taneciğinde valilik/kaymakamlık koordinat vermiyor
  (dalga 2'de ilçe merkezleri için bile vermedi). Hüküm iki CC veri tabanının
  uyuşmasına dayanıyor, akademik/kurumsal değil.
- ⚠️ İdari bağlılıkta da çelişki var: OSM köyü **Kars Merkez**e bağlıyor; GeoNames yalnız
  "Kars Province" diyor ve Büyük Pirveli'yi Akyaka'ya koyuyor. Dalga 2'deki "Akyaka'ya
  7,5 km" ölçümü kayıt koordinatıyla yapılmıştı. Ana konumla Akyaka'ya mesafe ~6,4 km'dir
  (yön değişmiyor: hâlâ Akyaka'ya yakın, Arpaçay'a uzak).
- Kayıt bir SINIR noktası (`sinir:true`, TR-1923-SINIR, "hatta 9.1 km"). Konum düzeltmesi
  Voronoi bisektörünü oynatır ve kayıt üretilmiş bir dosyada ("ELLE DÜZENLEME — yeniden
  üret": `denetim/ARAC-TR1923-YAZ-0914.py`). ⇒ Düzeltme üreticiden yapılmalı. Diff
  istenmedi, yazılmadı.
- Yan: aynı kaydın `kaynak:` metni dönemlerini «Arpaçay (Akyaka)»dan BİREBİR aldığını
  söylüyor. Hüküm ④ (Küçükperveli↔Arpaçay eşlemesi İPTAL) yalnız çıkış gününü değil,
  bu kaydın BÜTÜN 1281-1923 zincirini ilgilendiriyor.

## 4. Değişen dosyalar
- Yeni: `C:\atlas-umit\denetim\UMIT-W6-DALGA3-1006.md` (bu rapor).
- `C:\atlas-w6` çalışma ağacında commit'siz: `data/yerlesimler_ek26.js` (ad + `ic_not_ad`),
  `data/olaylar_ek17.js` (yer metni). Diff dosyası YOK.
