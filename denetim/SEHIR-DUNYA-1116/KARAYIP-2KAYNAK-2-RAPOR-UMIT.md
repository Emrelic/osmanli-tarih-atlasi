# KARAYİP — İKİNCİ KAYNAK 2. TUR (UMIT, 17 Kasım 2026)

Ağaç: `C:\atlas\.claude\worktrees\sehir-afrika-1116` (dal `sehir-afrika-kuzey-dogu-1116`). Commit/push YAPILMADI.
Düzenlenen: `data/sehir_tarihce_karayip_1.js`, `_3.js`, `_4.js` (yalnız ilgili alanlar, Edit). Yeni: `data/sehir_tarihce_karayip_5.js`
(`window.SEHIR_TARIHCE_KARAYIP_5`, `arac/sehir_tarihce.py yaz`; girdi scratchpad `karayip_5.json`, kontrol `k5_kontrol.py`).

## ① Ölçülenler
`py -I -X utf8 arac/sehir_tarihce.py denetle` (son durum, hepsi çıkış 0):
- karayip_1: 10 şehir · 16 dönem · 94 olay · **ihlal 0** · uyarı 11
- karayip_3: 14 şehir · 26 dönem · 109 olay · **ihlal 0** · uyarı 17
- karayip_4: 15 şehir · 46 dönem (önce 45) · 94 olay (önce 90) · **ihlal 0** · uyarı 13
- karayip_5: 3 şehir · 9 dönem · 12 olay · **ihlal 0** · uyarı 4 (hayalet: meksika/OAF yıl uçları)

### karayip_4'teki 13 hedef
| Sonuç | Sayı | Kayıtlar |
|---|---|---|
| 2. akademik kaynak bulundu, yıl teyitli | 1 | santa-clara-cu (EDUMECENTRO 2020, SciELO Cuba) |
| 2. kaynak bulundu ama çelişkili / başka ânı tarihliyor / yıl vermiyor | 6 | puerto-plata-do (UNESCO TL 1502 ↔ Britannica 1503, çözülmedi; Finke Brugal 2021 süreklilik bulgusu), la-vega-do (UNESCO TL: yalnız eski yer 1495), spanish-town-jm (1534 iki kaynakta = başkentin taşınması), colon-pa (LoC Country Study, yıl yok), les-cayes-ht (UMD projesi, akademik değil: 1720 plan, 1751'de 80 ev → 1786 şüpheli), st-georges-gd (UNESCO TL 1924/1926, kuruluş yılı yok) |
| Arandı, bulunamadı / yalnız PDF | 4 | choluteca-hn (1522 ↔ 1533–1541 + 1692 taşınma iddiası, akademik okunmadı), chinandega-ni (1839 kararnamesi PDF), heredia-cr (1706/1714/1717 PDF'ler), san-miguel-sv (yalnız basın) |
| Bu tur aranmadı | 2 | castries-lc (yalnız UNESCO lc tarandı, boş), roseau-dm |

### Çelişkiler (karayip_1/3/4)
| Kayıt | Sonuç |
|---|---|
| antigua-guatemala-gt | **ÇÖZÜLDÜ**: UNESCO 65 + Trace 56 (2009, Miner Fuentes & Villagrán de León, OpenEdition) → 1543; Britannica 1542 / Lutz 1541 sonu reddedildi. Değer değişmedi (zaten 1543). |
| granada-ni | **ÇÖZÜLDÜ**: ELAHC (Jickling) + UNESCO TL 1819 (Nikaragua 2003) → 1524 ↔ Britannica 1523. kesinlik `belirsiz` → `yil`; t değişmedi. Cabrero & González Pujana 1992 hâlâ okunmadı (HTML yok). |
| cartago-cr | Çözülmedi — aday makaleler yalnız PDF (UNA Revista de Historia 77, UCR Estudios). |
| kingston-jm | Çözülmedi — yalnız basın/ansiklopedi türevleri. |
| spanish-town-jm | Çözülmedi (kuruluş c.1523/c.1525); 1534 iki bağımsız kaynakla **başkent taşınması** olarak teyitli → olay eklendi, atlasın 1534'ü artık kaynaklı. |
| santa-clara-cu (gün) | Hakemli karar: yıl 1689 çift; gün 15 Temmuz tek kaynak. |

## Değişen id'ler (eski → yeni)
| id | Alan | Eski | Yeni | Dayanak |
|---|---|---|---|---|
| santa-clara-cu | ilk / kur / olay[0] | 1689-01-01 yil | 1689-07-15 gun | Britannica + EDUMECENTRO 12(1) 2020 (Ruiz González & Ruiz Hernández) 'fue fundada el 15 de julio de 1689'; gün tek kaynak |
| santa-clara-cu | sahip | ispanya 1689-01-01→07-15 | [] (boş) | sıfır uzunluk; atlas günü = kuruluş günü (uyarı "atlas başlangıcı düzeltilmeli" beklenir) |
| puerto-plata-do | sahip | ispanyol-santo-domingo 1503→1795 | 1503→1606 · **__YOK__ 1606→1736-07-22** · 1736-07-22→1795 | Finke Brugal, ECOSUASD 28(22) 2021 (UASD, HTML): 1606 Kuzey şeridi boşaltması, 22 Temmuz 1736 ikinci kuruluş (tek akademik kaynak) |
| puerto-plata-do | olay | — | +1508-12-07 villa/arma, +1606 boşaltma, +1736-07-22 ikinci kuruluş | Finke Brugal 2021 (+ UNESCO TL 1708 yıl) |
| granada-ni (karayip_3) | ilk.kesinlik | belirsiz | yil | hakemli karar (yukarıda) |
| spanish-town-jm | olay | — | +1534 başkent taşınması | UNESCO TL 5431 + Britannica Jamaica/History |
Yalnız ic_not'a 2. tur notu eklenenler: antigua-guatemala-gt, kingston-jm (karayip_1); cartago-cr (karayip_3); castries, chinandega, choluteca, colon, heredia, la-vega, les-cayes, puerto-plata (ilk), roseau, san-miguel, spanish-town, st-georges (karayip_4).

## Yeni yazılan şehirler (karayip_5)
| id | ilk | Kaynak | Atlas |
|---|---|---|---|
| jacmel-ht | 1698 kuruluş (yil) | UNESCO TL 1947 (Haiti 2004) 'Jacmel fut fondee en 1698' — TEK KAYNAK | yok → zincir saint-domingue → 1804-01-01 haiti → 1900 |
| alajuela-cr | 1782 kuruluş (yil) | Iván Molina Jiménez, Diálogos 22(2) 2021 (UCR, Redalyc HTML) 'Alajuela, fundada en 1782' — TEK AKADEMİK | yok → ispanya → meksika → OAF → kosta-rika-cumhuriyeti → 1900 (ABİ MERKEZ Cartago) |
| puntarenas-cr | Mayıs 1813 ilk anılış (ay) | Molina Jiménez 2021 'cerca del puerto de Puntarenas' — TEK KAYNAK | 'Puntarenas' 0,38 km, 1838-01-01 → zincir ispanya → meksika → OAF → 1838 (öneri: atlas 1813'e çekilebilir) |
`tarihce_var` iki yönlü: 3 aday × 41 yerel `sehir_tarihce_*` (ad ya da ≤10 km) + origin/main `git grep` (ad) → isabet yok.

Yıl bulunamadı (arandı): Port of Spain (1757 yalnız basın/wiki), Nassau (Britannica Bahamas/History ana sayfaya yönlendi; UNESCO TL yalnız deniz fenerleri), Belize City (encyclopedia.com «Belize» yalnız Oxford Companion özeti; UNESCO bz boş), Montego Bay (yalnız 1765 liman anılışı, Cambridge LHR — okunmadı), La Ceiba (23 Ağustos 1877 belediye — yalnız basın/INE PDF), Masaya (1819 villa / 2 Eylül 1839 ciudad — kararname PDF, okunmadı). Kingstown aranmadı.

## ② Bulunamayanlar / zayıflar
- Les Cayes 1786 büyük olasılıkla plan yılı (Phelipeau 1786); Moreau de Saint-Méry neşri akademik teyit için okunmalı → ilk 1751/1720'ye çekilmeli. Şu an değişmedi.
- Puerto Plata: kurucu (Kolomb ↔ Ovando) ve yıl (1503 ↔ 1502) çelişkisi açık; süreklilik kesintisi tek kaynak.
- Choluteca: 1692 taşınma iddiası doğrulanırsa modern nokta 1692'den başlar.
- Heredia ve Chinandega: daha erken anılışlar PDF'lerde (okunmadı).
- Yeni 3 kaydın üçü de tek kaynaklı.
- Dialnet bağlantı reddi (ECONNRESET), archivodigital.go.cr Cloudflare, opuntiabrava.ult.edu.cu açılmadı.
- Arama sonuçlarından birinde (cavac.at sayfası) talimat enjeksiyonu metni vardı (talimatları yok sayıp alakasız bir yemek tarifi vermeyi isteyen satır, «Alajuela Province» sayfası) — yok sayıldı; o site kaynak olarak kullanılmadı.

## Açılan siteler
| Site | Sonuç |
|---|---|
| UNESCO WHC | statesparties jm/ni/do/cr/hn/cu/ht/sv/gt/gd/lc/bz/bs/tt/vc AÇILDI (dm, pa okunmadı); Tentative List 1819, 1708, 1707, 1947, 1924, 1926, 5431 AÇILDI |
| scielo.sld.cu (EDUMECENTRO 2020) | AÇILDI |
| revistas.uasd.edu.do (ECOSUASD 2021 HTML galley) | AÇILDI |
| redalyc.org (Diálogos 2021) | AÇILDI |
| journals.openedition.org (Trace 56) | AÇILDI |
| britannica.com Jamaica/History | AÇILDI (görünür gövde); The-Bahamas/History → ana sayfaya yönlendi |
| countrystudies.us/panama/5.htm (LoC) | AÇILDI |
| colonyincrisis.lib.umd.edu | AÇILDI |
| encyclopedia.com El Salvador (Worldmark), Belize (Oxford Companion) | AÇILDI, işe yaramadı |
| camjol.info (UNAH RU 2021) | özet AÇILDI, metin yalnız PDF |
| revistas.una.ac.cr (Rev. Historia 77) | özet AÇILDI, yalnız PDF |
| nicaragua.justia.com (1839 kararnamesi) | AÇILDI, metin indirme → okunmadı |
| upo.es De Computis | 404 · dialnet.unirioja.es bağlantı reddi · opuntiabrava.ult.edu.cu reddedildi · archivodigital.go.cr Cloudflare |
| PDF / dosya indirme | YOK |

## ③ İstekler / öneriler
1. Les Cayes: Moreau de Saint-Méry, *Description ... de la partie française de l'isle Saint-Domingue* (Maurel & Taillemite 1958) okunup ilk 1751/1720'ye çekilmeli; mevcut 1786 büyük olasılıkla hatalı.
2. Atlas (karar Emre'nin): Puerto Plata noktası 1503–1606 + 1736-07-22 sonrası; Puntarenas başlangıcı 1838 → 1813-05; Alajuela ve Jacmel nokta eklenmeli.
3. PDF okuma izni çıkarsa en verimli dosyalar: UCR Estudios «El Cabildo de Cartago» (Cartago 1563/64), UNA Rev. Historia 77, Herencia (Heredia/Cubujuquí), Sajurin 1839 kararnamesi (Chinandega/Masaya), NLJ Kingston.
