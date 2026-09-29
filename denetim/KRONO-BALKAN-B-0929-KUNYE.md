# KRONO-BALKAN-B-0929 — KÜNYE ÖNERİLERİ

29 Eylül 2026 · tahta M-5401 → hüküm M-5416 (kural 3: maddeyi YAZ, `devlet:` alanına
önerilen id'yi yaz, künyeyi koordinatör açar) · `data/devletler.js`e DOKUNULMADI.

## 1. Ölçüm — hangi aralık künyesiz

`data/devletler.js` tarandı (id, ad ve özet; tahmin edilen id aranmadı):

| Coğrafya | Künyeli aralıklar | Künyesiz aralık |
|---|---|---|
| Sırbistan | sirbistan-nemanjic 1217→1402 · sirp-despotlugu →1459-06-20 · **sirbistan-eyaleti 1459-06-20→1804-02-14** · sirbistan-prensligi →1882 · sirbistan-kralligi →1918 · yugoslavya | yok ✓ |
| Bosna-Hersek | bosna-kralligi 1377→1463-05-01 · hersek 1435→1482 · bosna-isgal 1878-07-13→1908-10-06 | **1463 → 1878** (1908 sonrası `habsburg`a bağlandı) |
| Arnavutluk | topia · dukagin · arvanid-sancagi 1415→1537-08-25 · arnavutluk-iskenderbey 1443→1479-01-25 · arnavutluk-bagimsiz 1912-11-28→ | **1537 → 1912** |
| Karadağ | zeta · crnojevic-zetasi · karadag 1516→1918 | yok ✓ |

`osmanli` künye id'si yok. Emsal: `sirbistan-eyaleti` = "Osmanlı Sırbistan'ı (Doğrudan
İdare Dönemi)" — aşağıdaki üç öneri bu sınıfın birebir eşidir.

## 2. Öneriler — M-5416'nın istediği biçimde

| id | ad | f: | t: | D205 sınıfı | kaynak | bağladığı madde |
|---|---|---|---|---|---|---|
| `bosna-eyaleti` | Osmanlı Bosna'sı (sancak → 1580 eyalet → 1866 vilâyet) | `1463-06-01` | `1878-07-29` | ③ ARDIL (`bosna-kralligi`nin ardılı; toprak dolu) | TDV `bosna-eyaleti` ("önce sancak beyliği iken 1580'den itibaren beylerbeyilik"; 1866 vilâyet; 1878 Berlin) · TDV `bosna-hersek` ("29 Temmuz'da başlayan işgal") | **14** (`kronoloji_cok_bosna.js`) |
| `iskodra-pasaligi` | İşkodra Paşalığı (Buşatlılar) | `1756-01-01` | `1831-04-21` | yeni polity (yarı-özerk; Tepedelenli Yanya'sının eşi) | TDV `iskodra` ("Buşatlı ailesinin hükümranlığı 1756-1831") · TDV `mustafa-pasa-busatli` (Babuna, 21 Nisan 1831) | **3** (`kronoloji_cok_arnavut.js`) |
| `arnavutluk-osmanli` | Osmanlı Arnavutluğu (İşkodra/Yanya/Manastır/Kosova sancak ve vilâyetleri) | `1537-08-25` | `1912-11-28` | ③ ARDIL (`arvanid-sancagi`nın ardılı; `arnavutluk-bagimsiz`in öncülü) | TDV `arnavutluk` (Osmanlı idaresi; 1466 sonrası İlbasan/Avlonya/Ohri/İşkodra sancakları) | **7** (`kronoloji_cok_arnavut.js`) |

**Pencere notları — her ucun dayanağı:**
- `bosna-eyaleti f:1463-06-01`: çekirdek `olaylar_ek.js` 1463-06-01 "Bosna Krallığı'nın
  yıkılışı — Fâtih'in Bosna seferi" (ay hassasiyetli; TDV yalnız yıl verir). ⚠️ `bosna-kralligi`
  künyesi `1463-05-01`de bitiyor ⇒ bir aylık aralık. İki künyenin ucu AYNI güne çekilmeli;
  hangi günün doğru olduğunu bu paket ölçmedi (`kronoloji_balkan.js` de 1463-05-01 diyor).
- `bosna-eyaleti t:1878-07-29`: TDV `bosna-hersek` işgalin başlangıç günü. `bosna-isgal`
  künyesi `1878-07-13`te (Berlin) başlıyor ⇒ 16 günlük örtüşme; hukuken doğru (Berlin
  yetkiyi verdi, fiilî idare 29 Temmuz'da el değiştirdi) ama KUNYE-DUNYA'nın sınıflama kararı.
- `iskodra-pasaligi`: TDV yalnız YIL veriyor ("1756-1831") ⇒ `f:1756-01-01` yıl kodlu.
  `t:` için yıl kodu (`1831-01-01`) kullanılamaz: son olay (Babuna, 21 Nisan 1831) pencerenin
  dışına düşer. ⇒ `t:1831-04-21` = TDV'nin verdiği son günlü olay. Kalenin teslim günü
  (1831 sonbaharı) bulunamadı; bulunursa `t:` ona uzatılmalı (sınıf ② genişlet).
- `arnavutluk-osmanli f:1537-08-25`: `arvanid-sancagi t:` ile ardışık olsun diye. ⚠️ O günün
  kendisi künyede "veriden devralınan bitiş tarihi, kaynaksız" diye işaretli — yani bu ucun
  dayanağı ZAYIF. Alternatif: `f:1479-01-25` (İskender Bey direnişinin sonu); o zaman
  `arvanid-sancagi` ile 1479-1537 örtüşür. Karar koordinatörün.
- `arnavutluk-osmanli t:1912-11-28`: `arnavutluk-bagimsiz f:` ile ardışık (TDV `arnavutluk`:
  28 Kasım 1912 istiklâl).

**Bağlanan maddeler:**
- `bosna-eyaleti` (14): 1521 Gazi Hüsrev Bey sancakbeyi · 1530 cami · 1541-06-18 ölümü ·
  1552 merkez Banaluka · 1580-03-18 beylerbeyilik · 1639 merkez Saraybosna · 1820 Celâleddin
  Paşa · 1831 Gradaşçeviç · 1832 bastırılma · 1833 Hersek paşalığı · 1835 kapudanlık lağvı ·
  1850 Ömer Paşa · 1865 vilâyet · 1872 demiryolu.
- `iskodra-pasaligi` (3): 1756 Buşatlı hâkimiyeti · 1779 Mehmed Paşa · 1831-04-21 Babuna.
- `arnavutluk-osmanli` (7): 1614 Tiran · 1690 Kosova'ya Arnavut yerleşimi · 1878-06-10 Prizren
  Cemiyeti · 1881 geçici hükümet · 1908 Firzovik · 1908-11-14 Manastır Kongresi ·
  1912-09-04 özerklik kabulü.

## 3. Başka künye bulguları (hüküm koordinatörde)

- **`karadag f:1516-01-01` kaynaksız** — `kronoloji_balkan.js` başlığındaki araştırma notu
  zaten yazmış: TDV `karadag` Karadağ sancağını 1514'te veriyor, "1516 piskopos-prenslik"
  iddiasının karşılığı TDV'de de akademik kaynakta da bulunamadı. Künyenin kendi 1516-01-01
  maddesi de aynı iddiayı taşıyor. Sınıf ② / ③ kararı KUNYE-DUNYA'da.
- **`sirbistan-prensligi` künye kronolojisi `1830-08-30` "Özerklik fermanla tanındı"** — TDV
  17 Ekim 1830 diyor (bkz. `-DUZELTME.md` §1).
- **`sirp-despotlugu` künye kronolojisi `1439-08-18`** — TDV `semendire` 27 Ağustos 1439
  (bkz. `-DUZELTME.md` §2).
- **`arnavutluk-bagimsiz` künyesinin 1914-03-07 maddesi** "Ekim'de … ülkeyi terk etti" diyor —
  TDV 3 Eylül 1914 (bkz. `-DUZELTME.md` §5).
