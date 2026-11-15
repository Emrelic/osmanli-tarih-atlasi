# BOLGE-ortaasya-5-renk-1115 — Orta Asya renk denetimi (UMIT, 15 Kasım 2026)

`arac/renkler.py`'ye DOKUNULMADI (tuz). Ölçüm: `py arac/renk_olc.py` (çıkış 0, 724 satır çıktı) ve `renkler.BOYALAR` (2246 anahtar).

## Sayılar
| ölçü | sonuç |
|---|---|
| Orta Asya künyesi (83) `harita:` (yoksa `id`) BOYALAR'da | **83/83** (renksiz künye 0) |
| `harita:` alanı dolu künye | 12 (cagatay, mogulistan, timurlu, sibir-hanligi, kazak-hanligi, buhara, hive, yarkent-hanligi, cungar, afgan-durrani, afganistan, yakub-beg); kalan 71 künye `id`'sini renk anahtarı olarak kullanıyor |
| `renk_olc.py`: görünmez künye | 0 |
| aynı anahtar örtüşmesi / aynı hex çakışması | 0 / 0 |
| Orta Asya künyesi içeren ΔE çakışma/yakın çift (renk_olc'un 3 çakışma ve 59 yakın-ama-değmeyen listesi) | **0** (listelerde Orta Asya kimliği yok; regex taramasıyla doğrulandı) |
| ALTLIKTAN AYRIŞMAYAN (ΔE<15) | 0 (tüm veri) |
| BEYANSIZ PAYLAŞIM uyarısı içinde Orta Asya künyesi olan hex grubu | **9** (aşağıda) |

## Beyansız hex paylaşımları (renkler.py uyarısı: «Kasıtlıysa PAYLASIM'a yazılmalı, tesadüfse ayrılmalı»)
Hepsinin **zaman aralığı ayrık** (aynı gün, aynı petekte ikisi birden boyanmıyor) → görsel çakışma yok; ama «kasıtlı mı tesadüf mü» sorusu cevapsız.
| hex | Orta Asya künyeleri | öteki üyeler | zaman ayrık mı |
|---|---|---|---|
| #73e1fc | dogu-gokturk (582-630), dogu-gokturk-2 (682-745), kusan (50-350) | bosna-isgal | evet |
| #619370 | turkistan-ossc (1918-24), turkistan-muhtariyeti-hokand (1917-18), dogu-turkistan-islam-cumhuriyeti (1933-34), dogu-turkistan-cumhuriyeti-gulca (1944-49), hivite-afrigid (305-995), xianbei (155-235) | — | evet; **Türkistan Muhtariyeti → Türkistan ÖSSC aynı renk, aynı toprak: kasıtlı olabilir (öneri: PAYLASIM'a yazılsın)**; Doğu Türkistan iki cumhuriyeti de birbirine yakın tonda aynı |
| #03a6ff | bati-gokturk | ~10 künye (cao-wei, chen, butan…) | evet |
| #8fe878 | kuca-hocalari | arvanid-sancagi, boiotia, himera, kapadokya, lizimakhos, padova-carrara | evet |
| #0397c8 | rouran | galicya-volhinya, saksonya-dukaligi | evet |
| #889f5c | kirgiz-yenisey (840-920), xueyantuo-kaganligi (627-646) | — | evet; ikisi de Moğolistan/Ötüken coğrafyası → **kasıtlı olabilir** |
| #85dee8 | transkaspi-hukumeti | ukaydir | evet |
| #62bed0 | eftalit (457-560), karluk (766-840) | — | evet |
| #1ca4f3 | anau-ia-kultur (MÖ 4299-3819) | dakya, hindu-sahiler, smolensk-knezligi | evet |

## Hatırlatma: renk anahtarı olmayan "mükerrer" künyeler
Adım 1'deki çiftler (kerait/kerayit, nayman/naiman, xueyantuo/xueyantuo-kaganligi, hivite-afrigid/afrigoglu-harezm) kendi renklerine sahip; iki künye aynı toprağı iki farklı renkte boyuyorsa (aynı zaman) görsel zıplama olur: **yerleşim penceresi olmadıklarından bu bugün görünmüyor** (yerleşimsiz künyeler).

## Öneri (renkler.py'ye yazılmadı)
1. `turkistan-muhtariyeti-hokand` ↔ `turkistan-ossc` ve `kirgiz-yenisey` ↔ `xueyantuo-kaganligi` hex ortaklığını `PAYLASIM`'a kasıtlı yaz (KASA, tuz commit'i).
2. #73e1fc (Kuşan–Göktürk–Bosna İşgali) için `bosna-isgal`'ı ayırmak tesadüf kapatır.
3. Orta Asya'da ΔE sorunu bulunmadı; komşu (İlhanlı/Safevî/Timurlu/Çağatay) ayrımı renk_olc listelerinde temiz.
