# KOVA A — Mısır MÖ zinciri PİLOT — 14 Kasım 2026

**Sonuç: hiçbir data/*.js değiştirilmedi; hiçbir halka yazılmadı.** Neden: KASA şartı (Shaw OHAE 2000 vb. DOĞRUDAN OKUNMUŞ kaynak) bu oturumda karşılanamadı; "okunamayan kaynak halka yazdırmaz" kuralı gereği beyanlı boşluk/mevcut durum korundu.

## ADIM 1 — MÖ yıl konvansiyonu: DOĞRULANDI (yapı + atlas içi tutarlılık); kaynak okuması: KISMEN
Konvansiyon: MÖ N = astronomik -(N-1) (sıfır yılı vardır). Dayanak: VERI-YAPISI.md "MÖ TARİH YAZIMI" (ISO 8601 / JS Date); bu bir numaralandırma tanımıdır, tarihsel iddia değil.

Örnekler (atlas verisinden ölçüldü):
| Örnek | Kaynak yılı | Atlas | Sonuç |
|---|---|---|---|
| Kudüs, Nabukadnezar (olaylar_antik_yakin_dogu.js:64) | MÖ 597, 2 Addaru (ABC 5; Jülyen 16 Mart) | -0596-03-16 | tutarlı |
| Mısır: Piye (olaylar_antik_misir_nubya.js:48) | MÖ ~725 | -0724-01-01 | tutarlı |
| Mısır: sait-26-hanedan künyesi f | MÖ 664 | -0663-01-01 | tutarlı |
| Mısır: Teb yağması (olaylar_antik_misir_nubya.js:43) | MÖ 663 | -0662-01-01 | tutarlı |
| Mezopotamya: yeni-babil f | MÖ 626 | -0625-01-01 | tutarlı |
| Mezopotamya: Harran (olaylar_antik_yakin_dogu.js:68) | MÖ 610 | -0609-01-01 | tutarlı |
| Mezopotamya: Isin fethi (:130) ve isin künyesi t | MÖ 1794 | -1793-01-01 ikisi de | tutarlı, kayma YOK |

Bulgu: Hiçbir örnekte konvansiyon hatası yok. D2T "künye↔madde kayma kümesi" (Teb 663/664, Harran 610/609 vb.) **konvansiyon farkı değil**; iki kayıt aynı konvansiyonda iken farklı olayı/farklı kaynak yılını işaret ediyor (ör. 26. Hanedan başı MÖ 664 ↔ Teb yağması MÖ 663; yeni-asur t -0608 = MÖ 609 ↔ Harran MÖ 610). Yani gerçek (küçük) künye↔madde ayrışması; hakem kaynak okuması gerekir, otomatik taşıma değil.
Okunmadı: ABC 5 (Grayson 1975), Parker & Dubberstein 1956 — Kudüs 16 Mart 597 günü bu oturumda birincil/akademik metinden doğrudan teyit EDİLMEDİ; atlasın kendi maddesi dayanak sayılmadı. Konvansiyon sonucu bu teyide bağlı değildir (yıl aritmetiği tanım gereği).

## ADIM 2 — Pilot: yazılan halka SIFIR
Kaynak erişimi (ölçüldü): Shaw OHAE 2000 → archive.org kaydı `oxfordhistoryofa0000unse_u4p1` var ama tam metin ödünç/kısıtlı, gövde metni alınamadı (yalnız site menüsü döndü); OUP/Cambridge sayfaları yalnız künye/özet. Kitchen TIPE, Baines & Málek, CAH, Wilkinson, Kemp, Bard: doğrudan okunabilir metin bulunamadı. **Hepsi "okunmadı".** Yalnız arama özeti ("Shaw: 26. Hanedan 664") görüldü; bu doğrudan okuma sayılmaz.

### Mevcut durum (ölçüldü, değiştirilmedi)
| Yerleşim | Dosya | Mevcut s: | Eksik |
|---|---|---|---|
| Memphis | data/yerlesimler_mo_zincir.js:19 | ahamenis-misir -0524→-0403, __BOSLUK__ -0403→-0401 (kur -0524) | Eski/Orta/Yeni Krallık, 3. Ara, 25.-26. Hanedan dönemleri; Memphis kaydı bilerek yazılmamış (kendi not'u) |
| Uksur (Luksor) | data/yerlesimler_afrika.js:~280 | zincir roma-cumhuriyeti -0029'dan | Tebai 11., orta/yeni krallık, 3. Ara, kush-25, sait-26, pers, 28-30 |
| Sais | data/yerlesimler_once1281_yt_afrika_levant.js:24 | sait-26-hanedan -0663→-0524 | 24. Hanedan öncesi (künyesiz), -0524 sonrası |
| Abydos | data/yerlesimler_once1281_yt_afrika.js:24 | roma -0029'dan | Thinis/Erken Hanedan..., yeni krallık vb. |
| Avaris | ..._afrika_levant.js:18 | hiksos-15 -1649→-1549 | Yeni Krallık/Pi-Ramesses sonrası |
| Herakleopolis | ..._afrika_levant.js:27 | herakleopolis -2159→-2054 | orta krallık sonrası |
| Asyut, Asvan | **data/yerlesimler.js** (YASAK) | roma -0029'dan | dokunulmadı |
| Vâdî Halfâ | yerlesimler_afrika.js | kur 1813 (modern kale), MÖ dönemi yok | Buhen/Vâdî Halfâ MÖ ayrı yerleşim olmalı |

Künye kimlikleri (devletler.js'te var VE renkler.py BOYALAR'da tanımlı, ölçüldü): misir-erken-hanedan, misir-eski-krallik, herakleopolis, tebai-11-hanedan, misir-orta-krallik, hiksos-15, misir-yeni-krallik, misir-3-ara, misir-21-hanedan, kush-25-hanedan, sait-26-hanedan, ahamenis-misir, misir-28-30-hanedan. (ptolemai'ye dokunulmadı.) Boya sorunu yok; engel kaynak.

## Yazılamayan halkalar (hepsi: Shaw 2000 vb. okunmadı)
Yukarıdaki "Eksik" sütununun tamamı. Künye f/t değerleri (örn. misir-eski-krallik -2685→-2180) yalnız künyenin kendi (UCL/Art Institute vb.) dayanağına sahiptir; künye ≠ kaynak, atlas referans değildir kuralı gereği yerleşim halkasına çevrilmedi. Öneri: Shaw (ed.) 2000 fiziksel/lisanslı kopyadan (ya da Emre'nin sağlayacağı PDF'ten) tablo sayfaları okunduktan sonra bu pilot aynen yürütülür; iki uç/çakışma ölçümü şablonu hazırdır (öncül t = ardıl f; künye f/t içinde; kur ilk dönemden önce; Değişmez 2 evreni olaylar_antik_misir_nubya.js'te Piye -0724, Teb -0662 maddeleri var, Psamtik -0655 vb. ±30 gün dışında yıl-temsilî).

## Sayaç etkisi
Veri değişmediği için D2s/2s sayaçları değişmedi. Tam denetle koşturulmadı. node vm söz dizimi: değişen JS yok.
