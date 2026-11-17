# KARAYİP + ORTA AMERİKA — İKİNCİ KAYNAK TURU (UMIT, 17 Kasım 2026)

Ağaç: `C:\atlas\.claude\worktrees\sehir-afrika-1116` (dal `sehir-afrika-kuzey-dogu-1116`). Commit/push YAPILMADI.
Dosyalar: `data/sehir_tarihce_karayip_1.js`, `_2.js`, `_3.js` (27 kayıt). Düzenleme yalnız ilgili alanlara Edit ile.

## ① Ölçülenler
`py -I -X utf8 arac/sehir_tarihce.py denetle` (son durum):
- karayip_1: 10 şehir · 16 dönem · 94 olay · **ihlal 0** · uyarı 11
- karayip_2: 3 şehir · 7 dönem · 34 olay · **ihlal 0** · uyarı 2 (dosyaya dokunulmadı)
- karayip_3: 14 şehir · 26 dönem (önce 20) · 109 olay (önce 103) · **ihlal 0** · uyarı 17

27 kaydın dökümü:
| Sonuç | Sayı | Kayıtlar |
|---|---|---|
| 2. kaynak bulundu, uyumlu | 11 | santo-domingo-do, port-au-prince-ht, san-juan-pr, ciudad-de-guatemala-gt, tegucigalpa-hn, leon-ni (3. kaynak), willemstad-cw (İngiliz işgali), basseterre-kn*, bridgetown-bb*, cap-haitien-ht*, matanzas-cu* |
| Çelişki | 5 | san-salvador-sv (hakemli karar → DEĞİŞTİ), granada-ni (hakemli karar → DEĞİŞTİ), antigua-guatemala-gt (çözülmedi), cartago-cr (çözülmedi), kingston-jm (yalnız akademik olmayan kaynak, çözülmedi) |
| Kısmi (kaynak yıl vermiyor) | 4 | san-jose-cr, quetzaltenango-gt, santiago-de-cuba-cu, santiago-de-los-caballeros-do |
| Bulunamadı / bu tur aranmadı | 7 | santa-ana-sv (arandı, bulunamadı), san-pedro-sula-hn (Columbia açıldı, yıl yok), camaguey-cu (zaten çift; ELAHC isteği hata → okunmadı), la-habana-cu (zaten çift; aranmadı), managua-ni, panama-viejo-pa, panama-city-casco-pa (dosya 2, bu tur aranmadı) |

\* Columbia Encyclopedia (Columbia University Press): genel başvuru eseri, hakemli değil, ic_not'ta beyanlı. Basseterre'in sahip zinciri ayrıca St Christopher National Trust'a (ulusal miras kurumu, hakemli değil) dayanır.

Ana ikinci kaynak: **Encyclopedia of Latin American History and Culture** (ELAHC, Gale/Scribner; imzalı akademik maddeler, encyclopedia.com'da tam gövde).

## Değişen kayıtlar (eski → yeni)
| id | Alan | Eski | Yeni | Dayanak |
|---|---|---|---|---|
| san-salvador-sv | ilk.t / sahip[0].f | 1528-01-01 (onyil) | 1545-01-01 (onyil) | HAKEMLİ: UNESCO TL 209 (1528 = Ciudad Vieja, "abandoned only 17 years later") + ELAHC Lindo-Fuentes (1525, "Twenty years later it moved to its present location") + Fowler 2023 (1528 = Ciudad Vieja) ↔ Britannica "present site in 1528". 1528 olayı Ciudad Vieja kuruluşu olarak düzeltildi, ≈1545 taşınma olayı eklendi |
| granada-ni | ilk / kur / olay | 1523-01-01 | 1524-01-01 | HAKEMLİ: ELAHC Jickling "Granada was founded in 1524" + Britannica History of Nicaragua 1524 ↔ Britannica şehir önizlemesi 1523. Sahip (ispanya 1523→1524) sıfır uzunluğa düştüğü için kaldırıldı |
| tegucigalpa-hn | ilk / kur / olay | 1578-01-01 yil | 1578-09-29 gun | ELAHC "probably formally established on 29 September 1578" (gün tek kaynak, "probably" beyanlı). Sahip (yeni-ispanya 1578-01-01→09-29) kaldırıldı |
| ciudad-de-guatemala-gt | ilk / kur / olay | 1776-01-01 yil | 1776-01-02 gun | ELAHC "founded officially in Ermita Valley on 2 January 1776" (gün tek kaynak) |
| santo-domingo-do | ilk / kur / sahip[0].f / olay | 1496-01-01 yil | 1496-08-04 gun | ELAHC Schoenhals "founded on 4 August 1496" (yıl 3 kaynak, gün tek) |
| santo-domingo-do | haiti.t / dominik.f / olay | 1844-01-01 | 1844-02-27 gun | ELAHC Santana maddesi "declaration of independence from Haiti on 27 February 1844" (künye f ile aynı, hayalet uyarısı kalktı) |
| basseterre-kn | sahip | __BOSLUK__ 1627→1713-07-13 | fransa 1627→1690-06-20 · ingiltere →1697 · fransa →1702 · ingiltere →1713-07-13 | NT + Columbia ("founded by the French in 1627") + UNESCO 910 (1690) + Britannica; 1697 ve 1702 TEK KAYNAK (NT). dikis_beyan kaldırıldı (atlasla aynı sahip). 1690 olayı 20 Haziran'a çekildi, 1697 + 1702 olayları eklendi |
| willemstad-cw | sahip | hollanda 1634→1900 (tek dönem) | hollanda →1800 · ingiltere 1800→1803 · hollanda →1807 · ingiltere 1807→1816 · hollanda →1900 | Rutgers 1994 (doktora tezi, DBNL) "Van 1800-1803 en 1807-1816…" + CBS Curaçao. Bitiş HAKEMLİ: 1816 (Rutgers+CBS) ↔ Britannica 1815. Olay +1800, +1803, +1807, +1816 |

Yalnız ic_not'a 2. kaynak eklenenler: antigua-guatemala-gt, port-au-prince-ht, san-juan-pr, san-jose-cr, kingston-jm, santo-domingo (1795, 1809, 1822, 1861, 1865 dönemleri), bridgetown-bb, cap-haitien-ht, matanzas-cu (ayrıca ilk.kaynak'a eklendi), cartago-cr, quetzaltenango-gt (los-altos 1838–40 çift teyit), leon-ni, santiago-de-cuba-cu, santiago-de-los-caballeros-do.

## ② Bulunamayanlar / zayıf kalanlar
- **Tanık kuralı yine karşılanmadı:** Port-au-Prince 1749 ve San Juan 1521 artık çift kaynaklı, ama ELAHC cümlelerinde de şehir adı yok (özne madde başlığı / "the city's present site") → kesinlik onyil bırakıldı; zamir kabulü EMRELIC'e.
- **Çözülemeyen çelişkiler:** Antigua (Lutz 1541 sonu planlama · Britannica 1542 · UNESCO Mart 1543), Cartago (ELAHC 1564 ↔ Britannica 1563; UCR makalesi PDF), Kingston (World Encyclopedia 1693 ↔ Britannica 1692; NLJ PDF).
- **Santo Domingo 1809:** akademik ikinci kaynak yok (yalnız Gale Worldmark, sayılmadı).
- **Günler:** Willemstad işgal günleri, Basseterre 1627 bölünmesi (13 Mayıs) ve 1702 günü yalnız akademik olmayan ya da tek kaynakta → yazılmadı.
- **Belirsiz tanıklar (Quetzaltenango, Santiago de los Caballeros):** ELAHC'de özne şehir + yıl cümlesi yok → değişmedi.
- Santa Ana (SV): ikinci kaynak bulunamadı.

## Siteler
| Site | Sonuç |
|---|---|
| encyclopedia.com: ELAHC | AÇILDI: Santo Domingo, Basel Treaty, Boyer, Santana, Port-au-Prince, San Juan PR, San Salvador, Antigua, Granada, León, Tegucigalpa, San José CR, Cartago, Quetzaltenango, Guatemala City, Santiago de los Caballeros, Santiago de Cuba. 404 / istek hatası: antigua-guatemala, santa-ana-el-salvador, leon-nicaragua, san-pedro-sula, kingston, camaguey, cap-haitien, bridgetown, basseterre (humanities yolu) |
| encyclopedia.com: Columbia / Worldmark / World Encyclopedia / Encyclopedia of World Cultures | AÇILDI: Matanzas, Cap-Haïtien, Bridgetown, Basseterre, San Pedro Sula (Columbia) · Dominican Republic (Worldmark) · Kingston (World Encyclopedia) · Curaçao (World Cultures) |
| UNESCO WHC | Tentative List 209 (Ciudad Vieja) AÇILDI |
| Anales de Arqueología y Etnología (UNCuyo, Fowler 2023) | özet sayfası AÇILDI; tam metin PDF → OKUNMADI |
| St Christopher National Trust (historicstkitts.kn) | AÇILDI |
| CBS Curaçao | AÇILDI |
| DBNL (Rutgers 1994) | AÇILDI |
| Érudit (BSHG 2001) | bot denetimi → AÇILMADI |
| revistas.utec.edu.sv | DNS hatası → AÇILMADI |
| PDF'ler (mesoweb Erquicia 2006, UCR Estudios, NLJ Kingston, AEA Granada 1992, Leiden tezleri) | OKUNMADI (dosya indirme yok) |
| Cambridge Core / JSTOR / Persée / PARES / SciELO / Redalyc | DOĞRUDAN DENENMEDİ (Persée araması sonuç vermedi; ELAHC kapsamı yeterli bulundu) |

## ③ İstekler / öneriler
1. Port-au-Prince ve San Juan'da kaynak cümlesindeki zamir / madde-konusu özneyi kabul edip etmeme kararı (kabul edilirse kesinlik onyil → yil).
2. Atlas: San Salvador noktası (1841) için kaynak başlangıcı artık ≈1545 (1528 değil); Basseterre noktası 1713'ten başlıyor, 1627–1713 zinciri hazır; Willemstad noktası yok, 1800–1816 işgalleri dahil zincir hazır.
3. Sonraki tur: Cartago 1563/1564 ve Antigua 1541/42/43 için UCR / USAC dergileri (HTML açılan); Kingston için Jamaica National Heritage Trust; dosya 2 (Managua, Panamá) bu turda aranmadı.
