# KRONO-AMERIKA-K-0929 — MEVCUT DOSYALARDA BULUNAN KUSURLAR (düzeltme HÜKMÜ koordinatörde)

> Bu paket mevcut hiçbir `kronoloji_*.js`e, `devletler.js`e ya da `yerlesimler*.js`e YAZMADI. Kusurlar burada, kanıtıyla.
> Kanıt düzeyi her satırda yazılıdır: **[DOĞRULANDI]** kurumsal kaynak sayfasının arama özetinde ya da TDV'de gördüm ·
> **[BİLGİ]** doğrulamadım, yazarın bilgisi · **[ÖLÇÜLDÜ]** atlasın kendi verisinden okudum.

| # | dosya / künye | kusur | öneri | kanıt |
|---|---|---|---|---|
| **D1** | `kronoloji_sinir_amerika.js` — «Oregon Antlaşması — 49. paralel Kayalık Dağlar'dan Pasifik'e uzatıldı» `t:"1846-01-01"` | Gün, yıl işaretidir; antlaşma **15 Haziran 1846**'da Washington'da imzalandı. TDV yalnız yıl verir (1846), günle çelişmez. | `t:"1846-06-15"` (ya da `gun:` alanı ekle) | [DOĞRULANDI] Britannica «Oregon Treaty» + TDV «Amerika Birleşik Devletleri» |
| **D2** | `kronoloji_sinir_amerika.js` — Gadsden (1854-06-30) ve Alaska (1867-10-18) maddeleri | Aynı gün maddeler var, ama `yer_id`/`odak_yer` yok ⇒ defter Tubac · Tucson (Gadsden) satırlarını hâlâ **açık** sayıyor. Alaska satırları künye-içi maddeyle kapanıyor. | Gadsden'e `odak_yer:["Tucson (San Agustín del Tucsón)"]` (kamera Arizona'ya baksın); `yer_id` YAZMA (olay orada olmadı) | [ÖLÇÜLDÜ] defter `1854-06-30 meksika→abd kapsam_disi`, 2 yerleşim açık |
| **D3** | `devletler.js` `pueblo-bagimsizligi` künyesi, `t:"1692-08-01"` | Künyenin **kendi** maddesi Vargas'ın Pueblo'larla görüşmesini `1692-09-12`'ye koyuyor; kuşatmasız geri dönüş 13-14 Eylül 1692'dir. `t` yıl işareti olarak ~44 gün erken. | künyenin `t:`'sini ve `s:` pencerelerini **1692-09-12**'ye ya da 14'e çek; 1692-08-01 maddesini sil ya da `gun:` ile işaretle | [DOĞRULANDI] Santa Fe Şehri «History of Diego de Vargas» (13 Eyl varış, 14 Eyl resmî mülk edinme) |
| **D4** | `devletler.js` `guatemala`, madde `1823-01-01` («…Orta Amerika Birleşik Eyaletleri…») | Yıl işareti; bağımsızlık kararı **1 Temmuz 1823**. Benim maddem (1823-07-01) yanında durur, mükerrer değildir (farklı gün). | `1823-01-01` maddesini 1823-07-01'e çek | [DOĞRULANDI] Britannica «United Provinces of Central America» |
| **D5** | `devletler.js` `ojibwe`, `t:"1850-09-07"` | Bu gün **Robinson–Superior Antlaşması**'dır (Kanada, Superior Gölü'nün kuzey kıyısı). ABD'deki Ojibwe noktaları (`Saginaw (Ojibwe)`, `Keweenaw`) bu tarihte devlet değiştirmez; üstelik **Keweenaw (Michigan) `ingiliz-kuzey-amerika`ya** bağlanmış. | Keweenaw'ı `abd`ye çevir; ABD Ojibwe pencereleri 1854-09-30 La Pointe için ayrı | [BİLGİ] (künyenin kendi maddesi «Robinson-Superior» diyor) — Ojibwe künyesi ikiye bölünmeli |
| **D6** | `devletler.js` `hidatsa` · `mandan` · `karga`, `t:"1851-09-17"` | Fort Laramie 1851 **toprak devri değildir**; ABD her ulusun münhasır bölgesini TANIDI. Yine de üç künye o günden `abd` sahipliğine geçiyor. | `t:` ve `abd` bağlamasını **toprak devrine** çevir (1868 Fort Laramie; Fort Berthold 1870+) ya da ayrım: «tanınan bölge» | [DOĞRULANDI] Fort Laramie 1851 özetleri (NPS «Horse Creek Treaty», EBSCO): "recognized each nation's exclusive territorial rights" |
| **D7** | `devletler.js` `dene`, `t:"1899-06-21"` (Treaty 8) | 13 yerleşim satırı bu güne bağlı; ama **Treaty 8** Alberta-BC-Saskatchewan-NWT güneyi içindir. Alaska (**4 satır**: Batzulnetas, Iliamna/Nondalton, Nabesna/Northway, Arctic Village) 1867'den beri ABD'dir — Treaty 8 ile ilgisiz. Colville Lake (NWT) **Treaty 11** (1921) kapsamındadır. Old Crow (Yukon), Telegraph Creek, Tsilhqot'in (BC) sayılı antlaşma kapsamı DIŞINDA. Yalnız Fort Vermilion güneyi—Peace Point Treaty 8 içindedir. | 13 satırın 12'si için bağlama kaldırılsın/ayrı künye (`dene-ab` `dene-ca`); Treaty 8 günü yalnız Alberta-kuzeydoğu BC satırlarına | [DOĞRULANDI] Treaty 8 (21 Haz 1899) · Colville Lake=Treaty 11 (Canadian Encyclopedia/NWT Timeline arama özeti) · [BİLGİ] Yukon/Tsilhqot'in |
| **D8** | `devletler.js` `kri`, `t:"1876-08-23"` (Treaty 6) | Treaty 6 Saskatchewan/Alberta'dır (imza 23 Ağu 1876 Fort Carlton, 9 Eyl Fort Pitt). **Fort Severn güneyi—Winisk** (Ontario, Treaty 9 = 1905-06), **Obedjiwan** (Québec, Atikamekw antlaşmasız), **Sandy Lake** (KB Ontario), **Pukatawagan** (Manitoba) satırları Treaty 6 değildir. | 4 satırın bağlaması kaldırılsın | [DOĞRULANDI] Treaty 6 · [BİLGİ] Ontario/Québec durumu |
| **D9** | `devletler.js` `sosoni`, `t:"1868-07-03"` (Fort Bridger) | Fort Bridger 1868 yalnız **Doğu Şoşoni ve Bannock** içindir (Wind River; Bannock için Portneuf/Camas Prairie). **Ruby Vadisi (Batı Şoşoni)**, **Timbisha (Ölüm Vadisi)**, **Tukudeka (Yellowstone)** taraf DEĞİL; Camas Ovası (Bannock) taraf. | 3 satırın bağlaması kaldırılsın | [DOĞRULANDI] Fort Bridger Treaty (SBT/BLM/WyoHistory özetleri) |
| **D10** | `kronoloji_cok_rusya.js` + `kronoloji_sinir_amerika.js` | 1867-10-18 Alaska devri **iki ayrı başlıkla** aynı gün ABD künyesinde duruyor («Rusya Alaska'yı Sitka'da ABD'ye teslim etti» ve «Alaska ABD'ye devredildi — 141. meridyen …»). Dedupe `t`+`b` tam eşitliği olduğu için ikisi de görünür. | biri `sinir` etiketine, öteki `rusya` ile bağlı bırakılsın ya da başlık birleşsin | [ÖLÇÜLDÜ] |

## Ek: defter `SENKRON-DEFTER-0929.json` hakkında (ölçüm, hüküm koordinatörde)

1. **Defter künye-içi kronolojiyi göstermiyor.** Baştaki 203 net adayın **37 devir grubundan 28'inde** (%76) eski/yeni künyenin
   KENDİ `kronoloji`sinde aynı gün madde var (Greenville, Pontotoc Creek, Bosque Redondo, Wounded Knee, Batoche, Bear Paw…).
   `kunyede_kapali` yalnız bazı yer eşleşmelerini sayıyor (künye-içi kapalı toplam **30 grup**, ikisi nokta doğumu). Gerçek
   madde bekleyen yük 203−30 = **173** grup; devir gruplarının (eski ≠ —) yalnızca **9'u** madde bekliyordu (37−28).
   Ayrı bir rastlantı: defterin yeniden ölçümü de 173'e indi (bu kez benim 30 maddemin kapattığı grupla) — iki 173
   AYNI küme değildir; benim maddelerimi de düşünce kalan yük **143** (104 artefakt + 39 ölçülemedi).
2. **Defter yeniden ölçüldü (`olcum_ani 2026-09-29T17:03:22`): 203 → 173 açık grup.** Kapanan 30 grubun 28'i tam olarak
   bu paketin maddeleriyle aynı gün+yer (kanıt: `-SINIF.json` `defter_durum:"KAPANDI"`). Kalan 2 kapanış (1816-01-01
   Nichicun · 1825-01-01 Déline/Colvile/Vancouver) **benim maddelerim değil** (Fort Vancouver maddem 1825-03-19, gruba 77
   gün uzak): kapatanı ÖLÇEMEDİM (başka paket olabilir).
3. **`fark_gun`** alanı `31` ("30 günü aştı" kovası) gibi görünüyor: Alaska satırları için `en_yakin_madde` AYNI GÜN maddeyi
   gösteriyor ama `fark_gun:31`. Alanın anlamı belgelenmemiş; ben bu alana dayanmadım.
