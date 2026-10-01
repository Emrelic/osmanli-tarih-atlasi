# YZ-KIRLENME-1001 — TECRÜBE DEVRİ (§7.3 ④)

*YAZICI-KASA (KAYNAK-DOGRULA-DOGUASYA) · KASA makinesi · 1 Ekim 2026 · emekliye ayrılırken.*
Raporun kendisi: `denetim/YZ-KIRLENME-1001.md` (EK 1-4) · araçlar: `denetim/ARAC-YZ-KIRLENME-1001/`.

## ① TDV slug'ları — tutanlar, ölüler, tuzaklar
**Tutanlar** (200; maddeyle eşleşti):
- `cin--ulke` · `cengiz-han` · `mogollar` · `mogolistan` · `kubilay-kagan` · `karahitaylar` · `kore-cumhuriyeti` · `japonya` · `camlar` · `kambocya` · `myanmar` · `tayland` · `tibet` · `budizm` · `sumatra` · `cava` · `endonezya` · `uygurlar` · `kasgar`
- `gana` · `burkina-faso` · `nijerya` · `bulgaristan` · `bulgar` · `idil-bulgar-hanligi` · `batu-han` · `rusya` · `gane` · `sicilmase`

**Ölüler** (302):
- `hitaylar` · `kitanlar` · `mengu-kagan` · `munke-kaan` · `ogedey` · `ogeday-kaan` · `ugedey` · `hotan` · `altin-orda` · `vietnam` · `kore` · `laos`
- `benin--ulke` · `asanti` · `asantiler` · `kumasi` · `mancurya` · `idil-bulgarlari`

**Başlık araması 0 sonuç:** tangut · cürçen · kitan · möngke · ögeday · angkor · kmer · pagan · sriv · dalay.

🔴 **Tuzak ② — canlı slug, yanlış madde:**
- `cin` = **CİN** (cin/şeytan maddesi). Çin için doğru slug `cin--ulke`.
- `benin` = **Benin ülkesi (Dahomey)**, Benin Krallığı değil.

**Önbellek:** 310 TDV gövdesi KASA'da geçici dizinde çekildi, **depoya konmadı.** `ARAC…/tdv.py <slug…>` ile ~9 dakikada yeniden çekilir (≥1,6 sn aralık).

## ② Erişim haritası — hangi alan nereden açılıyor
| Alan | Betik (urllib) | Uygulama içi tarayıcı |
|---|---|---|
| **britannica.com** | 403 | ✅ aynı kökenden `fetch` → **YZ süzgeci şart** (`ARAC…/britannica_suzgec.js`) |
| encyclopedia.com · countrystudies.us · encyclopediaofukraine.com · militera.lib.ru · islamansiklopedisi.org.tr | ✅ | — |
| enciklopedija.hr · deutsche-biographie.de · luxembourg.public.lu · hdgoe.at · persee.fr · mjp.univ-perp.fr | ❌ SSL sertifika hatası | ✅ |
| cyberleninka.ru · prlib.ru | — | ✅ |
| **BRE: old.bigenc.ru / bigenc.ru** | 403 | ❌ **bre.ruwiki.ru'ya yönleniyor, IP engeli (KASA IP'si). Başka makineden denenmeli.** |
| **encyclopedia.mil.ru** · admokhotsk.khabkrai.ru · Rus ve Kazak resmî bölge siteleri | — | ❌ gezinme reddediliyor |
| oxfordre.com | 403 | denenmedi (ücretli) |
| ojs.utlib.ee · bilig PDF · dergipark PDF | — | **PDF indirmesi: izinsiz dosya indirilmedi** |

## ③ Ayrıştırıcı tuzağı — kural ve KODU
- **Kural:** çok kaynaklı bir `kaynak:` alanında alıntının sahibi, **alıntının hemen önündeki** atıftır. Segmentin ilk atıfı değildir.
- **Kod:** `denetim/ARAC-YZ-KIRLENME-1001/kova3.py`, TDV dalı. İlk sürüm `(u or sl)[0]` alıyordu ve 10 temiz kaydı "yanlış maddede" saydı.
- **Düzeltilmiş sürüm** ayrıca şunu yapar: alıntı ile TDV atfı arasında başka bir eserin URL'si varsa alıntıyı TDV'ye yazmaz.
- Düzeltilmiş sürüm 3 gerçek vaka daha buldu: `once1281_avrupa` #53 · 120 · 139, hepsi "A ; B — alıntı" kalıbı. `ATIF-DUZELTME.json`a eklendi, toplam 13 kalem.
- **Öteki tuzaklar:**
  - Türkçe kesme işareti ("1528'ten") tırnak sanılır. ~60 artık üretti.
  - Avrupa dosyasındaki `alıntı: '…'` biçiminde iç kesme işareti var (Henry's), bu yüzden ayrı desenle okunur.
  - Windows'ta `open(...,'w')` ile yazılan slug listesi `\r` taşır; `xargs` ile verilince dosya adları bozulur → `tr -d '\r'`.
  - `node` git-bash PATH'inde yok → `export PATH="/c/Program Files/nodejs:$PATH"`.

## ④ YAZMA / YENİDEN ÖLÇME — zaten ölçüldü ve temiz
- **TDV alıntıları, tüm evren (56 dosya):** 1130 birim, **uydurma 0.** 1047'si atfedilen maddede birebir. Sapmalar `ATIF-DUZELTME.json`da.
- **Britannica alıntıları:** 94 alıntının 88'i editör metninde. 3 YZ alıntısı (avrupa #172, hint_amerika #47 ×2) koordinatör tarafından kaldırıldı.
- **SSL alanları:** 53/53. **LoC country studies:** 13/13. **Encyclopedia.com:** Batı Afrika 5/5.
- **`kronoloji_cok_once1281_dogu_asya.js` 73 madde:** 12 TDV, 23 Britannica (editör metni), 38 `bulunamadı`, hepsi notlu. ⇒ **Bu dosyayı yeniden kaynaklama;** yalnız BRE gibi yeni bir erişim yolu açılırsa 38'e dön.
- **`kronoloji_cok_ince_bati_afrika.js`:** 6 kusurlu madde kapandı. Oxford RE ve 30 Temmuz günü `bulunamadı`.
- **Rusya 77:** sınıflandırıldı (`RUSYA-ONERI.json`).

## ⑤ AÇIK KALEMLER — benim değil, yerini göstermek için
- **Rusya'da 15 madde için `gun-dusur`:** koordinatör DURDURDU. Önce Değişmez 2 ölçümü gerekiyor: gün düşerse hangi madde ±30 gün penceresinden çıkıyor?
- **BRE erişimi:** koordinatör kendi makinesinden deneyecek.
- **`once1281_avrupa` #204:** `taraflar` alanında `idil-bulgar` yok. Bu bir bağlanma kusuru; koordinatörde.
- **182 BEYANSIZ TDV dışı alıntı:** ayrı kova, dokunulmadı.
- **ÖLÇÜM SINIRI:** İSTEMCİ TARAFINDA SONRADAN YÜKLENEN YZ KUTULARI HAM HTML'DE GÖRÜNMEZ; "0 İŞARET" ≠ "YZ YOK".
