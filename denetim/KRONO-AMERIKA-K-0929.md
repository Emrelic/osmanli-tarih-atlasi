# KRONO-AMERIKA-K-0929 — Kuzey ve Orta Amerika kronoloji raporu

**Paket:** `KRONO-DALGA3-0929-ORTAK.md §1` — `kuzey-amerika` · `orta-amerika` · `orta-amerika-karayip` (203 net olay adayı)
**Model:** Sonnet 5.5 (`§3.1 ③` yakınlık kuralının uygulaması; doğruluktan taviz yok)
**Çıktı:** `data/kronoloji_cok_kuzey_amerika.js` (33 madde) · `data/kronoloji_cok_orta_amerika.js` (18 madde) — **51 madde**
**Bağlanma:** `index.html`e HENÜZ eklenmedi (koordinatör işi) — dosyalar bağlanana kadar sitede görünmez.

## 0. Öngörü hakkında dürüst not
`CLAUDE.md §11` "öngörü ölçümden önce yazılır" der. Bu pakette şartname öngörü istemedi ve **öngörümü ölçümden önce
YAZMADIM** — bu eksiktir. (Ortalama beklentim, defterin yalnız yarısının gerçek olay olduğuydu; sayı yazılı değildir,
dolayısıyla "tuttu" diyemem. Aşağıdaki sayılar ölçümdür, öngörü değil.)

## 1. ÜÇ SAYI — raporun en değerli satırı (`ORTAK §2 ②`)

Koordinatörün sevk ettiği 203 grup (defterin 29 Eylül ilk ölçümü; bir grup = aynı gün + eski/yeni sahip çifti;
284 yerleşim satırı) şöyle ayrıldı (`denetim/KRONO-AMERIKA-K-0929-SINIF.json`, üretici `…-SINIF.py`):

| sınıf | grup | yerleşim | anlamı |
|---|---:|---:|---|
| **GERÇEK — künye-içi kronolojide zaten VAR** | 30 | 62 | eski/yeni künyenin KENDİ `kronoloji`sinde **aynı gün** madde duruyor (Greenville, Pontotoc, Bosque Redondo, Wounded Knee, Batoche, Bear Paw, Treaty 6/8…). Madde gerekmedi. |
| **GERÇEK — madde YAZDIM** | 30 | 36 | aynı gün + aynı yer maddem var; **28'i defterin kendi yeniden ölçümüyle doğrulandı** (aşağıda) |
| **ARTEFAKT — nokta doğumu** | 104 | 134 | `eski = —`: bir kale/misyon/ticaret postunun `s:` penceresi açıldı, petek komşudan yeni sahibe geçti; **egemenlik devri yok**. Madde YAZMADIM (`YERLESIM-ONERI.md §C`) |
| **ÖLÇÜLEMEDİ** | 39 | 52 | 35'i yıl-temsilî (gün kaynaksız → `§4` yıl bile yazılmaz), 4'ü kapsam dışı/kaynaksız |

⇒ **203'ün %30'u gerçek olay (60), %51'i artefakt (104), %19'u ölçülemedi (39).**
Devir grupları (eski ≠ —; 37 grup) ayrıca: 28 künye-içi kapalı · 4 yazıldı · 5 ölçülemedi (Xochimilco ~1430, Chalco ~1465,
Tepeaca ~1466, Chichén Itzá 1547 — kaynaklarda ±10 yıl oynuyor; Gadsden 1854 maddesi mevcut ama `yer_id`siz).

### 1.1 Defterin kendi yeniden ölçümü — bağımsız doğrulama
`SENKRON-DEFTER-0929.json` **2026-09-29T17:03:22'de yeniden ölçüldü**; benim dosyalarım `data/kronoloji_*` altında
olduğundan sayım onları gördü: **203 → 173 açık grup (−30)**. Kapanan 30 grubun **28'i tam olarak benim
maddemin günü + yeri** (`defter_durum:"KAPANDI"`), 1'i kısmen (Louisiana 1803: 5 yerleşimden 1'i), 1 YAZILDI grubu
açık kaldı (Adams–Onís: olay Los Adaes'te geçmedi, `yer_id` boş). 2 kapanış benim değil (Nichicun 1816, 1825 Déline
grubu; maddem 77 gün uzak) — kapatanı ölçemedim.
⇒ İki bağımsız yol (benim sınıflandırmam × defter) 28 grupta AYNI sonucu verdi.

## 2. Yazılan madde — ne, kaç, hangi ölçek
- **51 madde**: kuruluş 38 · antlaşma 4 · toprak kazancı 4 · idari 2 · işgal 2 · savaş 1 (`tur` mevcut 54 değerden).
- `yer_id` 41 maddede (atlasta var olan yerleşim adı; `odak_olc.py`: **çözülmeyen atıf 0**), 10 maddede `odak_yer`
  (antlaşma/bildirge gibi tek noktası olmayanlar — kamera durmasın, `ODAKSIZ 0`). `kapsam_genis` hiçbirinde yok.
- Kapsam: Yeni İspanya iskânı (Santa Fe · Albuquerque · El Paso · Chihuahua · Durango · Zacatecas · Saltillo · Guadalajara ·
  Puebla · Camargo · Victoria · Laredo…), Alta California zinciri (San Diego → Santa Bárbara), Fransız Kanadası (Montréal),
  Louisiana 1803-04 (Satın Alma, New Orleans devri, St. Louis Üç Bayrak), Adams–Onís, Oregon, Guadalupe sonrası Batı iskânı
  (SLC · Seattle · Denver · Cheyenne), Kanada Batı (Fort Vancouver/Victoria, Manitoba Yasası, Klondike), Karayip (Ryswick, Jamaika),
  Orta Amerika (Utatlán, Zaculeu, 1823 federasyon, Panama Kanalı).
- 🔴 **Mükerrer engellendi:** ilk taslakta 61 madde vardı; `t ±3 gün` taramasıyla **8'i zaten var** çıktı (Québec 1608,
  Utrecht 1713, Havana 1762, Guadalupe Hidalgo 1848, Dolores 1810, Meksika Anayasası 1824, Haiti 1804, Vargas 1692) ve
  atıldı (`URET.py` `MEVCUT` sözlüğünde nedenleriyle); 2'si odak verilemediği için elendi (La Salle 1682, Monroe 1823).
- Künye: 49 madde mevcut künyelerde GÖRÜNÜR (biri `guatemala` yanında olmayan `orta-amerika-federasyonu` id'sini de
  taşır). 🔴 **2 madde — Villa Real de Chiapa (1528) ve Puebla (1531) — künye açılana ya da `yeni-ispanya` `f`'i
  genişletilene kadar HİÇBİR künyede görünmez**: `yeni-ispanya` 1535-04-17'de başlıyor ve M-5416 ② geriye dönük
  bağlamayı yasaklıyor; id'leri `yeni-ispanya-ilk-donem` (`-KUNYE.md §1`). Sayı sızıntısı değil bilinçli tercih.

## 3. Doğrulama düzeyi — DÜRÜST
- Her maddenin `kaynak:` alanı kurumsal/akademik kaynak adı + sayfa adıdır (Britannica · Canadian Encyclopedia · Handbook
  of Texas · HistoryLink · INAH · UdeG · NPS · Library of Congress · Encyclopedia Virginia · Colorado/Missouri Encyclopedia ·
  Weber/Gerhard/Bannon/Lovell). **Forum/blog/popüler site KULLANILMADI.**
- 🔴 Tarihlerin doğrulaması **arama özetleriyle** yapıldı (WebSearch); kaynak sayfalarının **tam metni açılmadı**
  (tek istisna: TDV «Amerika Birleşik Devletleri» — Louisiana 1803 «80 milyon frank», Florida 1819, Oregon 1846,
  Guadalupe 1848 yıllarıyla tutarlı). 15 maddenin `kaynak:`ı bunu AÇIKÇA söyler («birincil belge sayfası açılmadı»);
  ötekilerde de aynı sınır geçerlidir. Sayfaları açan bir kaynak oturumu tarihleri birincile bağlayabilir.
- Gün tutarsızlığı bildirilen maddeler `gun:` alanında işaretli: Santa Fe (1610), Zaculeu (Ekim 1525), Puebla, Zacatecas
  (keşif ≠ kuruluş 1548), Saltillo (kuruluş belgesinde gün yok, 25 Temmuz kabulü), Regina (yıl), Jamaika (10-25 Mayıs arası).
- TDV: arandı (`?q=meksika`, `?q=amerika`); «Meksika» maddesi **çıkmadı**; «Amerika» ve «Amerika Birleşik Devletleri» var.
  Yerli halk, Yeni İspanya iskânı ve Karayip için TDV'den dayanak **bulunamadı** — akademik kaynak meşru (`§4`).

## 4. Denetim
```
node --check                      2 dosya  ✓
py arac/denetle_kronoloji.py      88 dosya · 6435 madde: kuzey_amerika 33 ✓ temiz · orta_amerika 18 ✓ temiz
                                  (kalan 42 ihlal BAŞKA dosyalarda; ilk sürümümde 1 yer_id eşleşmezliği vardı — düzeltildi)
py arac/odak_olc.py --dosya …     51 madde: KONUMLU 41 · KUTULU 10 · ODAKSIZ 0 · ÇÖZÜLMEYEN ATIF 0 · →yabancı 0
denetim/ARAC-…-URET.py            51 madde, künye id'leri devletler.js'ten OKUNDU (678); mükerrer 0
py arac/denetle.py                bkz. teslim mesajı (tek koşu, sırayla)
```
`denetle.py` **veri bağlamadığım için** Değişmez sayılarını değiştirmez (dosyalar `index.html`de yok); bağlanınca
`py arac/odak_olc.py` ve `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.py` (eşlenemeyen dosya kontrolü: `KRONOLOJI_COK_*` yolu
EKLER, ezmez) yeniden koşmalı.

## 5. Bulamadıklarım (bir sonuçtur)
- **Tepeaca/Xochimilco/Chalco (Aztek) fetih günleri:** `bulunamadı`, yazılmadı.
- **Biloxi/Mobile'in doğru zincirinin günleri:** İngiliz Batı Florida (1763) ve İspanyol (1780-83) evrelerinin günleri
  doğrulanmadı (`YERLESIM-ONERI.md §B`); yalnız 14 Mayıs 1812 Mobile Yasası ve Nisan 1813 Mobile ele geçirilişi arama
  özetinde göründü.
- **Yerli künyelerin doğru sınırları** (Ojibwe Michigan/Ontario, Dene Alaska/Kanada, Kri Ontario…): `DUZELTME.md`'de
  YANLIŞ olduğu gösterilen bağlamaların **doğrusu** yazılmadı; bunlar `D205` ölçeğinde künye kararıdır.

## 6. İstediklerim
1. **`index.html`e iki satır** + `py arac/paketle.py yenile`:
   `<script src="data/kronoloji_cok_kuzey_amerika.js"></script>` · `<script src="data/kronoloji_cok_orta_amerika.js"></script>`
2. **`YERLESIM-ONERI.md §A`** (10 gün düzeltmesi, kaynaklı) + **§B** (Houston · SLC · Biloxi/Mobile) biriktirilsin;
   Değişmez 2 senkronu ilkini kendiliğinden kapatır.
3. **`YERLESIM-ONERI.md §C` kararı — önerim (b):** defterde `eski = —` grupları "nokta doğumu" kovasına; 104 grup
   için madde yazmak gürültüdür.
4. **`-KUNYE.md`:** `yeni-ispanya` künyesinin `f`'ini 1521-08-13'e çekme (D205 ②) — `yeni-ispanya-ilk-donem` açmak
   yerine.
5. **`-DUZELTME.md` D1-D10** hükmü (özellikle D5-D9: yerli künye bağlamaları).
6. Defter: künye-içi kronolojiyi `kunyede_kapali`ya kat (28/37 devir grubu bu yüzden şişkin).

## 7. Dosyalar
`data/kronoloji_cok_kuzey_amerika.js` · `data/kronoloji_cok_orta_amerika.js` · `denetim/KRONO-AMERIKA-K-0929{.md,
-YERLESIM-ONERI.md, -KUNYE.md, -DUZELTME.md, -SINIF.json, -TABAN-203.json}` ·
`denetim/ARAC-KRONO-AMERIKA-K-0929-{URET,SINIF,ONERI}.py` (üretici · sınıflandırıcı · pencere-farkı tablosu).
Önceki paketten (`KRONO-BAGLAMA-0929`, devredildi) `denetim/KRONO-BAGLAMA-0929-EZME-CAPRAZ.json` `48b73487`de.
