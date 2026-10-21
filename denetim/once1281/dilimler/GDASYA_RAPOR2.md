# GDASYA (Güneydoğu Asya) — Tur 2 raporu

## 1. Sayılar (dosyalardan ölçüldü, `py` ile)

| Dilim | Kayıt | okundu | kısmen-okundu | taslak | eksik / var / var-kısa |
|---|---|---|---|---|---|
| A | 0 | - | - | - | - |
| B | 1 | 0 | 1 | 0 | 1 / 0 / 0 |
| C | 17 | 1 | 14 | 2 | 15 / 2 / 0 |
| D | 33 | 1 | 27 | 5 | 13 / 9 / 11 |
| E | 21 | 2 | 13 | 6 | 10 / 9 / 2 |
| Toplam | 72 | 4 | 55 | 13 | |

- Tur 1'de 73 kayıt vardı. Şimdi 72 kayıt dilim dosyalarında, 5 kayıt `GDASYA_REF.json`a taşındı (srivijaya, pagan, hariphunchai, lan-na, sunda-pajajaran: mevcut künye düzeltme adayı, yeni polity değil). Eklenen yeni polity: 4 (tun-sun C; mi-chen, hamsavati-pegu D; lamuri E). Elenen: 0 (`janggala` ve `kedah-kadaram` elenme adayı olarak işaretlendi, kaynakta bağımsız polity olduğu kanıtlanamadı, silinmedi).
- Tur 1 'okundu = 0' idi; bu turda yalnız dört kayıt tam okundu sayıldı (duong-dinh-nghe, linyi-champa, phayao, singhasari: hem f hem t doğrudan okunan metinde). Geri kalan çoğu `kismen-okundu`: ya yalnız f ya yalnız t okundu ya da yıl düzeyi var, gün yok.
- Gün düzeyi: Srivijaya Kedukan Bukit 23 Nisan 682 (REF'te) ve Kritanagara'nın ölümü 18 Mayıs-15 Haziran 1292 (singhasari t) dışında hiçbir kaynakta gün yok; geri kalan hepsi `YYYY-01-01`.

## 2. Okunan kaynaklar (archive.org tam metin, `curl -sL -A "Mozilla/5.0"`)

- Coedès, *The Indianized States of Southeast Asia* (1968) — ana kaynak (Funan, Chenla, Champa, Dvaravati, Pyu, Pagan, Srivijaya, Cava, Bali, Singhasari).
- Hall, *A History of South-East Asia*, 4. baskı (1981) — Tay devletleri, Arakan ek listesi, Pagan çöküşü.
- Taylor, *A History of the Vietnamese* (CUP 2013) — Vietnam (Khúc'tan Trần'a, Au Lạc, Trưng, Vạn Xuân, Triệu Việt Vương).
- Harvey, *History of Burma* (1925); Majumdar, *Suvarnadvipa* Cilt II/I (1937); Ricklefs, *A History of Modern Indonesia since c. 1200* (3. baskı).
- TDV İslâm Ansiklopedisi: Açe, Endonezya, Sumatra maddeleri (`curl` ile okundu; Samudra-Pasai, Perlak, Maluku).
- UNESCO WHC 1444 (Pyu Antik Kentleri) yalnız WebSearch özetiyle görüldü; sayfanın kendisi Cloudflare/403 verdi (okundu sayılmadı).

## 3. Ulaşılamayan / bulunamayan

- Cambridge History of Southeast Asia (archive.org'da yalnız ödünç, 401), Taylor *Birth of Vietnam* (1983), Wyatt *Thailand* (ödünç, 401), Luce *Old Burma - Early Pagan* ciltlerinin metni: Tur 1'de adayı olan bu kaynaklara erişilemedi.
- archive.org arama API'si (`advancedsearch`) bu oturumun ikinci yarısında boş döndü (hız sınırı); Filipinler için kaynak (Scott, Junker, Postma) bulunamadı. **Filipin kayıtları (tondo, ma-i, butuan, cebu-racaligi, filipin-racaliklari) taslak kaldı**, WebSearch özetleri okundu sayılmadı.
- Britannica, Iranica, UNESCO: 403/Cloudflare.
- Taslak kalan 13 kayıt: C: beikthano, si-thep; D: galuh, muang-sua, ngoenyang, tondo, ma-i; E: butuan, cebu-racaligi, filipin-racaliklari, suphannaphum, pattani-kadaram, sipsong-panna. Not: pan-pan, kantoli, kedah-kadaram, langkasuka, poni `kismen-okundu` (yalnız yer/ilk tanıklık okundu, tarih aralıkları hâlâ desteksiz; kayıtlarda yazılı).
- Yapılmayan: Tur 1 raporundaki "sığ" alanlar (Maluku Jailolo/Bacan, Barus, Kampar, Dharmasraya ayrı kaydı, Luwu/Gowa/Bone, Pyu alt şehirleri Maingmaw/Binnaka, Mogaung 1215, Möng Nai 1223) bu turda taranmadı; yalnız Hamsavati, Mi-ch'en, Lamuri, Dunxun eklendi. Tamlık iddiası yok.

## 4. Önemli bulgular ve kararlar (Emre'ye iletilecek)

1. **Arakan Launggyet yanlıştı:** taslak 1018-1167 aslında Hall'un Ek I'indeki 1. Pyinsa + Parin hanedanlarıdır; Launggyet hanedanı 1237-1433 (kronik). Düzeltildi. `vesali-chandra`: yazıtlara göre Candra hanedanı MS 330-360'ta başlar ve 230 yıl sürer (Hall/Johnston); kronikteki 788-1018 ilgisiz. Kaydı C dilimine taşıma önerisi `ic_not`ta; değerler değiştirilmedi (Johnston metni okunmadı).
2. **Dhanyawadi f=300 desteksiz** → null yapıldı. **Beikthano** hâlâ taslak.
3. **Janggala:** Coedès "baştan Kadiri'ye emilmişti" der → elenme adayı; ayrı künye önerilmez.
4. **Champa:** atlas künyeleri `linyi-champa` (192-999) ve `campa` (1000-1832) aynı polity'yi kapsıyor; Panduranga ve Kauthara ayrı künye olmamalı (Coedès: güney merkezler). Lin-yi→Huan-wang (758)→Chan-ch'eng (875) Çin adı değişimidir.
5. **Chenla kolları** (Kara/Su) ayrı künye önerilmez; "706 sonrası" (Tang), 802'de birleşme.
6. **Sailendra** ayrı künye değil, Medang içinde `ic_not` (Coedès: Kalasan 778; Pikatan 856'da Balaputra'yı yendi → t=856). **Galuh** kaynaksız (Majumdar/Coedès'te yok) → Sunda içinde ic_not.
7. **Melayu-Jambi:** ayrı künye öneriyorum, iki dönem: ~644-685 bağımsız Malayu (I-tsing 671: "şimdi Srivijaya"), ve 1275/1286-1347 Malayu-Dharmasraya (1299, 1301 Çin elçilikleri).
8. **Triệu Việt Vương:** Taylor 557 Lý-Triệu ateşkesini, 570'te Triệu'nun sonunu verir; ayrı künye kaynakla savunulabilir ama kısa ve tek kaynaklı; alternatif Vạn Xuân'ı 544-602 genişletmek. **Panduranga/Kauthara**: yukarıda 4. madde. Van Xuan t: 603 → 602 (Sui, Liu Fang; Taylor).
9. **Vietnam ara valilikleri için tür önerisi (`tur_yeni`):** Khúc ve Dương Đình Nghệ: `ozerk-valilik (jiedushi)` (Taylor: Khúc ailesi Çin imparatorluk memuru sıfatıyla yönetti, krallık unvanı kullanmadı; Dương Đình Nghệ kendini vali ilan etti, Güney Han tanıdı). Ngô: `krallik` (Ngô Quyền kraliyet unvanı aldı). **12 Sứ Quân:** `konfederasyon` uygun değil (ortak organ yok); künyesiz bırakılmalı ya da her sứ quân ayrı beylik. Taylor 2013 12 Sứ Quân adını anmaz (965'e kadar bastırma).
10. **Kuzey Sumatra:** `samudra-pasai` f=1267 ve `perlak` f=840 hiçbir okunan kaynakta yok. TDV: Pasai-Samudra "XIII. yy'da kurulan ilk müstakil devlet", ilk hükümdar el-Melikü's-Sâlih (ö. 696/1296-97); Perlak İslâm'ı XII. yy'da ilk resmen kabul eden yerel hükümdarlık sanılır, kesin tanık 1292. `ternate` (1257), `tidore` (1081) yalnız XV. yy sonu tanıkla destekli; taslak/kısmen.
11. **Vietnam tarihleri yıl düzeyinde:** Khúc f=905 (Taylor yıl vermez: desteksiz), Ngô t=965 vs Taylor 963, Dinh t=979/980, Ly f 1009 (sonu), Trần f 1225 (sonu), Trưng 40-43 (Taylor yalnız "40'lı yıllar; 42 CE Ma Yuan").

## 5. `GDASYA_REF.json` (mevcut künye düzeltme adayları)

- **srivijaya-ref:** f 683 → 682-04-23 (Kedukan Bukit, Damais hesabı; en erken tanık 671 I-tsing); t 1275: Coedès "13. yy sonunda ceased to exist", 1275 yalnız boğazların kaybı.
- **pagan-ref:** f 849 (Pyinbya'nın surları) vs krallık olarak Anawrahta 1044; t 1297 geçerli (1287 efektif çöküş).
- **hariphunchai-ref:** f 1000 desteksiz (gelenek ~750 Chammadevi efsanesi; güvenilir 12. yy Mon yazıtları); t 1292 Hall (1290-2) ile uyumlu.
- **lan-na-ref:** f 1262 desteksiz; Hall: Mangrai 1290-2'de Haripunjaya'yı alıp Chiengmai krallığını kurdu.
- **sunda-pajajaran-ref:** f 669 desteksiz (Wangsakerta geleneği); Majumdar: Sunda adının geçtiği en eski belge 1030 Cibadak yazıtı.

## 6. İstekler

1. Bu turda okunamayan kaynaklar için erişim: Cambridge History of SE Asia ciltleri, Taylor *Birth of Vietnam*, Wyatt *Thailand*, Luce *Old Burma* — ödünç kopya ya da TTK/DergiPark makaleleri; Pyu şehirleri (Beikthano, Halin, Sri Ksetra) için UNESCO WHC 1444 tam metni.
2. Karar: yukarıdaki künye önerileri (Melayu-Jambi ayrı; Champa/Chenla kolları/Sailendra/Galuh içeride; Triệu Việt Vương ayrı mı genişletme mi; Janggala elensin mi; vesali-chandra C'ye taşınsın mı).
3. Filipinler için ayrı oturum (Scott *Prehispanic Source Materials*, Junker, Postma LCI yayını, Song Shi/Zhao Rukuo): bu oturumda kaynağa ulaşılamadı.
4. Tür sözlüğü: `ozerk-valilik` (jiedushi) ve `sultanlik` önerisi.
