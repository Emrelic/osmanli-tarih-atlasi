# ODAK-OSMANLI-ANADOLU-0080 — teslim raporu (27 Eylül 2026)

Paket ODAK-0080 · koordinatör YILDIRIM BAYEZIT · şartname `oturumlar/ODAK-OSMANLI-ANADOLU-0080.md`

## 0. Taban — şartname tablosuyla BİREBİR tuttu
`py arac/odak_olc.py --dosya <f>` (7 dosya): anadolu 70 BEYANLI · macaristan 11 BEYANLI ·
p0068b 12 · p0917taraf 3 · p0063 2 · ek4 1 · p0057b 1 ODAKSIZ = **100**.

## 1. 🔴 Şartnamenin öncülü `kronoloji_*.js` için TUTMUYOR (tahta M-5297)
Koddan ve yayındaki sitede (r10340, tarayıcı konsolu) ölçüldü:

| yol | hangi madde | `kapsam_genis:true` ne yapar | `odak_*` okunur mu |
|---|---|---|---|
| `obGoster → haritayiOlayaGotur` (app.js:6378, 11810) | yalnız `OLAYLAR*` (app.js:6594) | `donemler[di].b` = OSMANLI kutusu | ✅ evet |
| `gezGit → maddeAc` (app.js:13866-67, 14088-14125) | bütün `KRONOLOJI_*` | `devletiYay(d.harita‖d.id)` = maddenin KENDİ devleti | ❌ HAYIR — `maddeOdakKutusu` çağrılmaz; `yer_kon` da okunmaz (dal `m.yer_id` ister) |

- ⇒ `kronoloji_*.js`'te "BEYANLI→yabancı = kamera Osmanlı'ya uçar" **yanlış**. Orada `kapsam_genis:true`
  zaten "bu devletin gövdesine git" demek. Silinirse devlet sekmesinde kamera DURUR (gerileme).
- ⇒ `kronoloji_*.js`'e yazılan `odak_yer` / `odak_kimlik` / `yer_kon` bugün ETKİSİZ; yalnız `yer_id` etkili.
- 🔴 **Daha büyüğü:** `KRONOLOJI_ANADOLU` (281 madde) **hiçbir künyeye bağlanmıyor** — bindirici
  `KRONOLOJI_<X>` → id `x` arar (app.js:13339), `anadolu` künyesi yok, `KRONOLOJI_ID_OZEL` boş.
  Yayında: `window.KRONOLOJI_ANADOLU.length = 281`, `karaman.kronoloji = 10` (künyenin kendi
  maddeleri), dört örnek başlık hiçbir künyede yok. Aynı kalıpta id'si eşleşmeyen 14 dosya daha
  (CIN · HINDISTAN · JAPONYA · MISIR · OZBEK · ARABISTAN · BALKAN · DOGU_AFRIKA · GUNEY_ASYA ·
  IRAN_ARDILLARI · ITALYA_SEHIR · KUZEYAFRIKA · ORTA_ASYA · SIRBISTAN ≈ 2280 madde) — arayüzde
  görünmüyor olabilir; ikinci bir bağlayıcı `js/` altında bulunamadı.
- `KRONOLOJI_MACARISTAN` bağlı (`macaristan` = 128).

## 2. Ölçer kusuru — `arac/odak_olc.py:156`
Ölçer `odak_kimlik`i yalnız **LİSTE ve len ≥ 2 (kimlik sayısı)** ise KUTULU sayar. app.js
(11739-51) **dizgiyi de** kabul eder ve şartı **madde gününde ≥ 2 YERLEŞİM**dir.
Bugünkü evrende (`-olcer-sinav.py`): 3 madde odak_kimlik'e düşüyor; 1 yanlış pozitif
(`olaylar_ek4.js` 1816-09-01, `"suud-birinci"` dizgi, n=11 — **iş yok**, dokunulmadı).
⚠️ Bu kol ve öteki altı kol C sınıfına tek kimlik yazdıkça ölçer onları **ODAKSIZ/BEYANLI
görmeye devam edecek**. Öngörü tablosu bu yüzden iki sütunlu (§4).

## 3. Sınıflandırma — 100 madde
| sınıf | kronoloji_* | olaylar_* | alan |
|---|---|---|---|
| A tek yer | 10 | 11 | `yer_id` 8 · `yer_kon` 13 (hepsi YAKLAŞIK işaretli) |
| B birkaç yer / iki taraf | 24 | 7 | `odak_yer` · `odak_kimlik` (≥2 yerleşim ölçüldü) |
| C devletin tamamı | 45 | 0 | `odak_kimlik` (künye, madde gününde ≥2 yerleşim) ya da kimlik 0 dönerse `odak_yer` |
| D Osmanlı çapı | 0 | 0 | — (kronoloji_*'deki 81 beyan Osmanlı çapında DEĞİL) |
| E belirlenemedi | 2 | 0 | hiçbir şey |
| Ø ölçer yanlış pozitifi | 0 | 1 | hiçbir şey |

Tüm gerekçe + TDV cümlesi: `denetim/ODAK-OSMANLI-ANADOLU-0080-oneri.json` (üreten `-karar.py`),
betik her öneride basar.

**Ölçülmüş tuzaklar (yazılmadı / düzeltildi):**
- 1281 öncesi maddelerde (Selçuklu, Kilikya 1219-1270, Karaman 1277) künye kimliği **0 yerleşim**
  döner (atlas `s:` dönemleri 1281'de başlar) → `odak_yer` kullanıldı.
- `dulkadir` 1515 sonrası 0 (tâbi `v:` kid'siz, adı "Osmanlı'ya tâbi…" ile başlıyor) · `karaman`
  1474/1483'te 0 · `aydin` 1390'da 1, 1419 ve 1425-06'da 0 · `macaristan-habsburg` 1850/1854'te 0
  (atlas o toprağı `avusturya` çiziyor) · `orta-macar-kralligi` 1678'de 0 (künye 1682) ·
  `arvanid-sancagi` 1431'de 0 → hepsi `odak_yer`e çevrildi.
- Nif = İzmir-Kemalpaşa; atlastaki `Kirmasti (M.Kemalpaşa)` Bursa'dadır — **kullanılmadı**.
- TDV'nin "eski Hırsova"sı Çerna suyu kıyısında = **Eski Orsova** (Dobruca Hırsova'sı değil).
- Sitti Hatun düğünü için Edirne **yazılmadı**: TDV `dulkadirogullari` yer vermiyor, `sitti-hatun` slug 302.

## 4. Öngörü (ölçümden ÖNCE) — `py arac/odak_olc.py --dosya <f>` uygulamadan sonra
Varsayılan kip (`kapsam_genis` KORUNUR):

| dosya | önce B/O | sonra — odak_olc | sonra — app.js gerçeği |
|---|---|---|---|
| kronoloji_anadolu | BEYANLI 70 | KONUMLU 221 · KUTULU 27 · **BEYANLI 33** | KUTULU 58 · BEYANLI 2 (E) |
| kronoloji_macaristan | BEYANLI 11 | KUTULU 8 · **BEYANLI 3** | KUTULU 11 · BEYANLI 0 |
| olaylar_p0068b | ODAKSIZ 12 | KONUMLU 33 · KUTULU 4 · ODAKSIZ 0 | aynı |
| olaylar_p0917taraf | ODAKSIZ 3 | KUTULU 3 · ODAKSIZ 0 | aynı |
| olaylar_p0063 | ODAKSIZ 2 | KONUMLU 9 · KUTULU 3 · ODAKSIZ 0 | aynı |
| olaylar_ek4 | ODAKSIZ 1 | **ODAKSIZ 1** (ölçer yanlış pozitifi, §2) | kutu VAR (n=11) |
| olaylar_p0057b | ODAKSIZ 1 | KUTULU 1 · ODAKSIZ 0 | aynı |

⇒ **odak_olc toplamı: ODAKSIZ 19 → 1 · BEYANLI(yabancı) 81 → 36.** Kalan 36'nın 34'ü tek kimlikli
C (ölçer kusuru), 2'si E. `--kg-kaldir` ile: kronoloji_* BEYANLI 81 → 2 (yalnız E) ama §1 gereği önerilmez.

## 5. Bulamadıklarım
- **E (2):** anadolu 1080-01-01 "Fetih sonrası nüfus ve iskân politikası" (dağınık, yer yok) ·
  1063-01-01 "Artuk Bey Sultan Alparslan'ın hizmetine girdi" (yer yok).
- **Nokta ihtiyacı (atlasta yok, yerine komşu/yaklaşık kullanıldı):** Bozok/Yozgat · Sis (Kozan) ·
  Mamistra (Misis) · Korikos · Rumkale · Dâbık · Ridâniye · İpsili · Salihli · Nif (İzmir-Kemalpaşa) ·
  Develi · Beypazarı · Bolvadin · Mut · Ziştovi · Fokşani · Kalafat · Maçin · Adakale · Yılan Adası ·
  Refah · Taba · Akabe · Zuvara. (Nokta eklemek benim yetkimde değil.)

## 6. Rastlanan, DOKUNULMAYAN kusurlar (yalnız rapor)
- `olaylar_p0068b` 1791-08-31 Ziştovi tasdiknâme mübadelesi: TDV **kendi içinde çelişiyor** —
  `yas-antlasmasi` 31 Ağustos, `zistovi-antlasmasi` "23 Ağustos'ta yine merasimle Ziştovi'de mübadele edildi".
- `olaylar_p0068b` 1790-01-01 Kalafat çıkarması: TDV "Nisan sonlarında" diyor → ay hassasiyeti mümkün.
- `olaylar_p0068b` 1788-01-01 Yılan Adası: TDV "Ağustos 1788".
- `kronoloji_anadolu` 1140-01-01 "İlk Selçuklu parası": TDV `mesud-i` sikkeler "tarih ve darp yeri bulunmayan" diyor.
- `kronoloji_anadolu` 1260-06-01 Sempat çevirisi: kaynak "Sophene Books akademik dizi özeti" — §4 kırmızı çizgi bakışı gerekebilir.
- `kronoloji_anadolu` 1350-01-01 Dicle köprüleri: maddenin kaynağı "bulunamadı — genel çıkarım".
- Atlas: `Aydın` noktası `sovalye:1344-1390` taşıyor — şüpheli (İzmir'in şövalye dönemi mi karışmış?).

## 7. Dosyalar (hepsi `denetim/`, `data/`ya YAZILMADI)
`-uygula.py` (teslim betiği) · `-oneri.json` (100 karar) · `-karar.py` (kararların kaynağı) ·
`-dok.py` (iş maddesi dökümü) · `-kimlik.js` (app.js yolunun birebiri kimlik ölçeri) ·
`-kunye.js` · `-ad.py` (havuz ad arayıcı) · `-tdv.py` + `-tdv-onbellek/` (15 TDV maddesi, hepsi HTTP 200) ·
`-olcer-sinav.py` (§2) · bu rapor.
