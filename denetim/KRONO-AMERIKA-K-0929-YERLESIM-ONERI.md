# KRONO-AMERIKA-K-0929 — YERLEŞİM ÖNERİLERİ (uygulanabilir · hüküm koordinatörde)

> `data/yerlesimler*.js` **Oturum 0'ındır** (`CLAUDE.md §7`); bu dosya yalnız önerir, hiçbir yerleşim dosyasına yazılmadı.
> Hepsi `yerlesimler_amerika.js` ya da `yerlesimler_kamerika.js`tedir (yerleşimin `_kaynak`ı `girdi.yukle()` ile okundu).
> Öneriler biriktirilip tek petek koşusunda uygulanır (`ORTAK.md §1 (b)`). Kuşku **yazıyla** belirtilmiştir: hiçbir satır
> "kesin" damgası taşımaz, kanıt sütunu neye dayandığını söyler.

## A. KAYNAKLI GÜN DÜZELTMELERİ — yıl işareti (`…-01-01`) yerine gerçek gün

Aşağıdaki 10 noktanın penceresi yıl işaretiyle (`…-01-01`) açılıyor, oysa kuruluş/olay günü kaynaklı biliniyor ve
`data/kronoloji_cok_*_amerika.js`teki maddem o günde duruyor. Pencereyi maddenin gününe çekmek **Değişmez 2 senkronunu
kendiliğinden kapatır** (kırılma günü = madde günü). Tablo `denetim/ARAC-KRONO-AMERIKA-K-0929-ONERI.py` ile üretildi.

| madde günü | yerleşim | dosya | mevcut `s:` girdisi | fark | önerilen |
|---|---|---|---|---|---|
| 1543-03-10 | Antigua Guatemala (Santiago de los Caballeros) | yerlesimler_amerika.js | `{"f":"1543-01-01","t":"1821-09-15","d":"yeni-ispanya"}` | 68 gün | `{"f":"1543-03-10","t":"1821-09-15","d":"yeni-ispanya"}` |
| 1778-05-27 | Louisville | yerlesimler_kamerika.js | `{"f":"1778-01-01","t":"1923-10-29","d":"abd"}` | 146 gün | `{"f":"1778-05-27","t":"1923-10-29","d":"abd"}` |
| 1788-12-28 | Cincinnati (Losantiville) | yerlesimler_kamerika.js | `{"f":"1788-01-01","t":"1923-10-29","d":"abd"}` | 362 gün | `{"f":"1788-12-28","t":"1923-10-29","d":"abd"}` |
| 1825-03-19 | Fort Vancouver | yerlesimler_kamerika.js | `{"f":"1825-01-01","t":"1867-07-01","d":"ingiliz-kuzey-amerika"}` | 77 gün | `{"f":"1825-03-19","t":"1867-07-01","d":"ingiliz-kuzey-amerika"}` |
| 1843-06-10 | Victoria (Fort Victoria) | yerlesimler_kamerika.js | `{"f":"1843-01-01","t":"1867-07-01","d":"ingiliz-kuzey-amerika"}` | 160 gün | `{"f":"1843-06-10","t":"1867-07-01","d":"ingiliz-kuzey-amerika"}` |
| 1851-11-13 | Seattle (Duwamish) | yerlesimler_kamerika.js | `{"f":"1851-01-01","t":"1923-10-29","d":"abd"}` | 316 gün | `{"f":"1851-11-13","t":"1923-10-29","d":"abd"}` |
| 1858-11-22 | Denver | yerlesimler_kamerika.js | `{"f":"1858-01-01","t":"1923-10-29","d":"abd"}` | 325 gün | `{"f":"1858-11-22","t":"1923-10-29","d":"abd"}` |
| 1867-07-04 | Cheyenne (Wyoming) | yerlesimler_kamerika.js | `{"f":"1867-01-01","t":"1923-10-29","d":"abd"}` | 184 gün | `{"f":"1867-07-04","t":"1923-10-29","d":"abd"}` |
| 1896-08-16 | Dawson City | yerlesimler_kamerika.js | `{"f":"1896-01-01","t":"1923-10-29","d":"kanada"}` | 228 gün | `{"f":"1896-08-16","t":"1923-10-29","d":"kanada"}` |
| 1804-03-10 | St. Louis | yerlesimler_kamerika.js | `{"f":"1764-02-14","t":"1803-12-20","d":"yeni-ispanya"}` + `{"f":"1803-12-20","t":"1923-10-29","d":"abd"}` | 81 gün | `{"f":"1764-02-14","t":"1804-03-10","d":"yeni-ispanya"}` + `{"f":"1804-03-10","t":"1923-10-29","d":"abd"}` |

**St. Louis notu:** atlasın kendi `s:` girdisi zaten "Yukarı Louisiana töreni 1804-03-10 kaynakla DOĞRULANMADI — DUNYA-0079"
diyor. Bu paket DOĞRULADI: Missouri Encyclopedia «Louisiana Purchase and Missouri» ve ABD Millî Park Servisi «U.S. Takes
Possession of Louisiana» 9 Mart 1804'te İspanya→Fransa, 10 Mart 1804'te Fransa→ABD devrini verir. Madde
(`1804-03-10`) yazıldı; pencere de o güne çekilebilir. (Kanıt düzeyi: iki kurumsal kaynağın ARAMA ÖZETİ; sayfa tam metni
açılmadı.)

## B. YANLIŞ SAHİPLİK — pencere yalnız gün değil KİMLİK olarak da yanlış

| yerleşim | dosya | mevcut `s:` | önerilen | kanıt | kuşku |
|---|---|---|---|---|---|
| **Houston** | yerlesimler_kamerika.js | `{"f":"1836-01-01","t":"1923-10-29","d":"abd"}` | `{"f":"1836-08-30","t":"1845-12-29","d":"teksas-cumhuriyeti"}` + `{"f":"1845-12-29","t":"1923-10-29","d":"abd"}` | Handbook of Texas «Houston, TX» (kuruluş ilanı 30 Ağu 1836; 1837'de Cumhuriyet başkenti); künye `teksas-cumhuriyeti` 1836-03-02 → 1845-12-29 | düşük |
| **Salt Lake City** | yerlesimler_kamerika.js | `{"f":"1847-07-24","t":"1923-10-29","d":"abd"}` | `{"f":"1847-07-24","t":"1848-02-02","d":"meksika"}` + `{"f":"1848-02-02","t":"1923-10-29","d":"abd"}` | 1847'de vadi Meksika'nın Alta California sınırındaydı; Guadalupe Hidalgo 2 Şub 1848 (künye `meksika` maddesi) | düşük (Mormon Deseret girişimi fiilî yönetim; hukuken Meksika) |
| **Biloxi (Fort Maurepas)** | yerlesimler_kamerika.js | fransa 1699-04-08→1762-11-03 · yeni-ispanya 1762-11-03→1803-12-20 · abd 1803-12-20→ | **ölçülemedi** — zincirin kendisi yanlış görünüyor (aşağıya bak) | aşağı | **yüksek** |
| **Mobile (Fort Louis de la Louisiane)** | yerlesimler_kamerika.js | aynı üç pencere | **ölçülemedi** | aşağı | **yüksek** |
| Los Adaes | yerlesimler_kamerika.js | yeni-ispanya 1721-01-01→1821-02-22 · abd 1821-02-22→ | olay yok: Los Adaes 1773'te boşaltılmıştı; 1821-02-22 Adams–Onís **antlaşma yürürlüğü**dür, bu noktada bir şey olmadı | atlas dışı bilgi (kaynak taranmadı) | orta |

**Biloxi ve Mobile — neden "ölçülemedi":** defter bu iki noktayı `1803-12-20 yeni-ispanya → abd` (Louisiana devri) ile
bağlıyor. Ama: (1) 1763 Paris Antlaşması Mississippi'nin **doğusunu** İngiltere'ye vermişti (Batı Florida); atlasın kendi
Pensacola girdisi bunu doğru işliyor (`ingiltere 1763-02-10→1781-05-08 → ispanya`), Biloxi/Mobile ise 1762'de fransa→
yeni-ispanya geçiyor, yani **İngiliz Batı Florida evresini atlıyor**. (2) Louisiana Satın Alması Batı Florida'yı kapsamadı;
ABD bu şeridi 14 Mayıs 1812 Mobile Yasası'yla (Congress, Statutes at Large c.84; Pearl–Perdido şeridi, Mississippi
Bölgesi'ne) ilhak etti ve Mobile'i 13-15 Nisan 1813'te fiilen aldı (İspanya iddiayı reddetti). ⇒ `abd` sahipliğinin
**1803-12-20'de başlaması yanlış**, doğru tarih 1812-13. Kaynak taraması: MDAH (mdah.ms.gov/timeline/zone/1812) ve
Alabama News Center «Wilkinson seized control of Mobile» yalnız ARAMA ÖZETİYLE görüldü; İngiliz/İspanyol ara evrelerinin
günleri (Mobile'in 1780'de İspanya'ya geçişi vb.) **bu pakette doğrulanmadı** — `KRONO-AVRUPA/ATLANTIK` ya da kaynak
oturumu bir kez okusun. Madde olarak: `1803-12-20` New Orleans devri (yazıldı, yalnız Natchitoches ve New Orleans için doğru).

## C. NOKTA DOĞUMU ARTEFAKTI — 104 grup / 134 yerleşim: madde YAZILMADI, çare pencere/kova

`denetim/KRONO-AMERIKA-K-0929-SINIF.json` her grubu adıyla taşır. Ortak örüntü: `eski = —` (nokta o güne dek YOK),
`yeni = <devlet>`; yani bir kale, misyon, ticaret postu ya da maden kampının `s:` penceresi açılınca petek **komşu sahipten
yeni sahibe geçiyor**. Egemenlik devri yoktur; olay "bir yer kuruldu"dur.

| yeni sahip | grup | örnek |
|---|---|---|
| abd | 33 | Fort Atkinson · Fort Snelling (1819), Bent's Fort (1833), Fort Laramie (1834), Fort Riley (1853), Fort Union Trading Post (1828) |
| ingiliz-kuzey-amerika | 26 | Fort Chipewyan · Fort Vermilion (1788), Fort Providence, Norway House (1817), Nichicun… (HBC/NWC postları) |
| yeni-ispanya | 17 | Santa Clara (Küba) 1689, Múzquiz 1739, Omoa 1759, Misión San Francisco de Borja 1762… |
| meksika | 15 | Acaponeta · Tomatlán (1823), Bolaños, Batopilas (1826), Villa Ahumada (1894)… |
| kanada | 6 | Fort Macleod (1874), Fort Calgary · Battleford · Fort Walsh (1875), Attawapiskat, Killiniq… |
| diğer | 7 | Iximché (maya), Iqaluit (inuit), Kahnawake (haudenosaunee), Memphis (Çikasav), Batoche (métis)… |

**Öneri (seçenekli, önerim (b)):**
- (a) Her noktanın **ilk** `s:` girdisini yerli halk künyesiyle aç (`inuit`, `dene`, `kri`, `lakota`…) ve devleti ancak
  gerçek egemenlik devrinde yaz. Bedeli: yüzlerce nokta düzenlemesi ve yerli künye penceresi genişlemesi (`D205` ②).
- (b) **Defterde "nokta doğumu" kovası aç** (`eski = —` ve `kapsam_disi`) ve bu grupları Değişmez 2s sayımından muaf tut
  (gerekçe: kırılma egemenlik değişimi değil petek artefaktıdır). Bedeli: `denetle.py` muafiyeti + sayı tavanı. **Tavsiye
  budur**: 104 grubun 30'u zaten madde aldı; kalan 104'ün her biri için madde yazmak "Fort X kuruldu" gürültüsü üretir.
- (c) Hiçbir şey yapma — bu durumda defter sayısı hep şişkin kalır ve kamera kırılmasında kullanıcıya "yer kuruldu"
  yerine "toprak el değiştirdi" sanılır.

## D. Bu pakette YAZMADIĞIM ve nedeni

- **35 grup yıl-temsili ve 4 grup `kapsam_disi`** (toplam 39 "ölçülemedi"): gün kaynaksız, yıl bile kesin değil ya da
  kaynağa ulaşılamadı. `CLAUDE.md §4`: *yıl bilinmiyorsa yıl yazılmaz.* Listesi `-SINIF.json`da `sinif:"OLCULEMEDI"`.
- Aztek fetihleri (Xochimilco ~1430 · Chalco ~1465 · Tepeaca ~1466): kaynaklarda ±10 yıl oynuyor; `kronoloji_cok_orta_amerika`
  içine YAZILMADI. Atlas `Tepeaca` için başka bir günü (`olaylar_amerika_0920.js`, 1520-09-04 Cortés) zaten taşıyor.
