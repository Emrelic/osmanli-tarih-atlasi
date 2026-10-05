# UMIT-W13-ODAK-1006d — D265 durum satırı + W26'ya DEVİR BELGESİ

Ağaç `C:\atlas-w13` = origin/main `847408ea` + SEKME-1006 → METIN-1006 → 1006b → 1006c. İş bitince diff'lerle aynı olduğu doğrulandı (`write-tree` eşit) ve ağaç kaldırıldı.
`denetle_yayin.py`ye DOKUNULMADI (kilit W10'da).

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi
| öngörü | ölçüm | hüküm |
|---|---|---|
| `denetle_yayin` `kapi_olcumu()` satırlarının HEPSİNİ basıyor (%70; yalnız ✗ süzme ihtimali %30) | hepsini basıyor: `denetle_yayin.py:1619-1623` `for _s in _odak["satirlar"]: print(_s)`. GERÇEK koşuda (2 dk 31 sn) satır çıktının 354. satırında göründü | ✓ |
| bayrak kapalı → KOŞULMADI var · açık → "KOŞULDU: 0 · 0" var, KOŞULMADI yok | aynen | ✓ |
| `ihlal` iki hâlde aynı | False / False | ✓ |

## 1. D265 — ne değişti (`ODAK-SEKME-1006d.diff`, 1006c üstüne, 92 satır)
**`arac/odak_olc.py`:**
- **`yay_satiri(D)`** her zaman tek satır döndürür:
  - kapalıyken: `ⓘ  geometri-boş doğrulaması KOŞULMADI (--yay-dogrula kapalı)`
  - açıkken: `ⓘ  geometri-boş doğrulaması KOŞULDU: N geometri-boş · M uyuşmazlık (H halka)`
- **`kapi_olcumu(yay_dogrula=False)`:**
  - satırı listenin SONUNA ekler; `ihlal`e dokunmaz (bilgi satırı)
  - varsayılan KAPALI, böylece `denetle_yayin`ın bugünkü çağrısı (argümansız) değişmeden satırı alır
  - ölçülemedi dalında satır EKLENMEZ: o dal zaten ✗ ÖLÇEMEDİ basıyor
- **CLI:** aynı satır `py arac/odak_olc.py` çıktısında da basılır.

**`denetim/ARAC-ODAK-SEKME-SINAV-1006.py`:** S8 eklendi.
- **S8a:** bayraksızken KOŞULMADI var, KOŞULDU yok.
- **S8b:** bayraklıyken "KOŞULDU: 0 geometri-boş · 0 uyuşmazlık" var, KOŞULMADI yok.
- **S8c:** iki hâlde `ihlal` aynı.

## 2. Sınav
| sınav | koşul | sonuç |
|---|---|---|
| `ARAC-ODAK-SEKME-SINAV-1006.py` | | **26/0**, `data/` temiz |
| `ODAK-KAPI-SINAV.py` | önerilen tavan (325 · 355 · 1103 · 53 · `[]`) | **5/0** |
| `ODAK-KAPI-SINAV.py` | bugünkü tavan | 3/2 (bilinen sebep; tavan yazılmadı) |
| `denetle_yayin.py` | gerçek koşu | odak bloğunda ✗ 0. Sondaki satır: `ⓘ geometri-boş doğrulaması KOŞULMADI (--yay-dogrula kapalı)` |

**Diff denetimi:** CR **0**. 1006c üstüne ileri **✓**, `-R` **✗**, çıplak main ✗.
**Zincir:** SEKME-1006 → METIN-1006 → 1006b → 1006c → **1006d**. Tavan önerisi değişmedi.

📌 **Yan bulgu (W10'a, dokunmadım):** `denetle_yayin.py:1608` yorumu tavanı hâlâ "ODAKSIZ / BEYANLI→yabancı" diye anlatıyor. Kapı artık SEKME_OKUNMAYAN ve SEKME_SESSIZ'i de soruyor. Bu yalnız yorum; davranış etkilenmiyor.

---

## 3. 🔁 DEVİR BELGESİ — W26 (bağlama kusurları) için
Ayrıntılı ölçüm: `denetim/UMIT-W13-ODAK-BOS-1006c.md` §2-§3. Burada yalnız devralanın bilmesi gerekenler var.

**① Ne ölçtüm.** Sessiz duruş (devlet sekmesinde kamera kıpırdamıyor, not yok): **59** vaka (53 SESSİZ + 6 OKUNMAYAN-sessiz). Bunların **39**'u künye penceresi DIŞINDA:
- iran 16
- macaristan 14
- fransa 3
- malaka 2
- kırım 1
- ispanya 1
- mataram 1
- ho 1

En büyük iki vaka:
- **iran:**
  - `data/kronoloji_iran.js` → `KRONOLOJI_IRAN`, 107 madde, 1295-06-19 → 1923-10-28.
  - app.js `derinKronolojiBindir` ad eşlemesiyle **`iran` = Pehlevi künyesine** (f 1925-12-12) bindiriyor. 107/107 madde pencere öncesi.
  - Künyenin kendi **6 Pehlevi maddesi EZİLİYOR**: konsol uyarısı "KRONOLOJİ EZİLDİ — iran (künye 6 madde → dosya 107)"; sekmede görünmüyorlar.
- **macaristan:**
  - künye 1000-01-01 → 1526-08-29 (Ortaçağ krallığı)
  - 1571 … 1878 maddeleri bu künyede.

**② Hangi tuzağa düştüm.**
- Önce kökü künyenin `harita:` alanında aradım; kök BAĞLAMA çıktı.
- `DEVLET_HARITA`daki `iran` kimliği Pehlevi değil: yerleşimlerdeki GENEL "İran" etiketinin gövdesi, yalnız 1281 → 1510-12-02 arası çiziliyor. 1510 sonrası Safevî/Kaçar çiziyor (ölçüldü: Tebriz 1555 `s:safevi`, Kazvin/Tahran 1555-1600 `s:safevi`, 1800/1923 `s:kacar`).
- ⇒ "harita çizilmiyor" teşhisi YANLIŞ. Harita doğru çiziyor, madde yanlış künyede.

**③ Neyi YAZMASIN.**
- `devletler.js` `iran` künyesini GENİŞLETMESİN: Emre'nin "hanedan adları ayrı künyelerde" kararına ters (künyenin `ozet:` metninde yazılı).
- `renkler.py` motor tuzu (`CLAUDE.md §9.1`); dokunulmaz.
- app.js `KRONOLOJI_ID_OZEL` tek başına çare değil: dosyayı TEK künyeye yönlendirir, birleşik kronolojiyi hanedanlara bölemez.
- Kırım'ın künye içindeki 12 sessiz vakası (1476-1770) BAĞLAMA değil; büyük ihtimalle tâbi-çizili (`v:kid`). Ölçülmedi, bu işe karıştırılmasın.

**④ Ne tuttu.**
- `sahiplen`/`kaynakOf` ile her maddenin kaynak dosyası bilinir: `--json` dökümünde `dosyalar[].sessiz[]` künye ve gün taşır.
- Sessiz vakayı yeniden ölçmek: `py arac/odak_olc.py`. SESSİZ ayrımı ve `--json` dökümü yeter.
- Gövde taklidini gerçekle sınamak: `--yay-dogrula` (+1,1 GB bellek).
- Düzeltme sonrası beklenen: iran 16 + macaristan 14 vakanın SESSİZ'den GÖVDE/NOKTA'ya geçmesi ⇒ **SEKME_SESSIZ tavanı iyileşir** (53'ten aşağı).
- Bağlama değişikliği SEKME evrenini ve ODAKSIZ/BEYANLI sayılarını da oynatır ⇒ tavan sonradan ELLE indirilir, `--tavan-yaz` YASAK.

## 4. Emeklilik
Teslimden sonra duruyorum. Bekçi zaten yok, ağaç kaldırıldı. `odak_cozum.js` · `odak_olc.py` kilidini koordinatöre geri veriyorum.
