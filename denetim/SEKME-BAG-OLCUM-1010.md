# SEKME-BAG-OLCUM-1010 — kronoloji dosyası ↔ künye AD SÖZLEŞMESİ bağının ölçümü

UMIT · yalnız ÖLÇÜM ve LİSTE · düzeltme/diff YOK · **hüküm YOK**.

- Taban: `792bf4a429f7b42f6d5829aebe682a5836cfb4b5` (origin/main, ayrı worktree `--detach`)
- Araç: `denetim/ARAC-SEKME-BAG-OLCUM-1010.py` → `ARAC-SEKME-BAG-OLCUM-1010.js` → `arac/odak_cozum.js`in KENDİSİ (son satırı ek blokla değiştirilip aynı kapsamda koşar; `sekmeDali` · `veriDisi` · `devletiYaySessiz` · `olayKonumu` · `maddeOdakKutusu` · app.js `kronoGun` GERÇEK işlevler). Girdi `odak_olc.etiket_kaynak()` + `girdi.ufuk_devirleri()` (odak_olc.olc() ile aynı).
- Pencere: `arac/gun.py gun()` (MÖ/3 haneli güvenli) · app.js `kronoGun` ile çapraz: **0 uyuşmazlık**.
- Atlas penceresi (kesilen `BASLANGIC/BITIS`): 1000-01-01 → 1945-09-02 · devirler [['geri', '1000-01-01', '1281-01-01'], ['ileri', '1923-10-29', '1945-09-02']] · DEVLET_HARITA evrende: True
- index.html'in app.js'ten önce yüklediği kronoloji/olay kaynak dosyası: **184** (diskte olup yüklenmeyen: 0) · app.js sonrası kronoloji: 0 · yük uyarısı: ['data/acilis_siluet.js: Element is not defined']

Kova tanımı (pencere DIŞI her madde × ad-künyesi çifti, bugünkü `sekmeDali` sonucu):
- **KURTULUYOR** = SEKME_NOKTA (hedefYer: `yer_id` AD_KONUM'da çözülüyor; `yer_kon` YALNIZ yer_id varsa okunur) · SEKME_KUTU (`maddeOdakKutusu` HAM madde ile) · SEKME_KIPIRDAMAZ (`!m.kapsam_genis` — alan YOK ya da false; odak/yer_kon yazılı ama okunmayan alt dal dâhil, adıyla ayrılır)
- **SESSİZ** = SEKME_SESSIZ (ya da OKUNMAYAN alt dalının gövde sonucu SESSIZ)
- **YARININ KUSURU** = hiçbir kurtarıcı ETKİLİ değil (`kapsam_genis:true`, nokta/kutu yok) ama `devletiYay(d.harita||d.id)` o gün bir gövde BULUYOR (SEKME_GOVDE / TABI_KUTU) — künye penceresi dışında

## ① `kronoloji_iran.js` — künye `iran` [1925-10-31, 2026-08-07]

- Dosyadaki madde: **107** (aralık 1295-06-19 → 1923-10-28) · künye penceresi dışında: **107** (yön: once 107)
- DEVLET_HARITA'da `iran` kaydı: **False** · künyede `harita:` alanı: None · `iran` anahtarını paylaşan başka künye: yok
- KURTULUYOR **90** · SESSİZ **17** · YARININ KUSURU **0**
- Kurtaran dal: hedefYer(yer_id) 76 · kapsam_genis:YOK [okunmayan yer_kon] 14

SESSİZ kalemler (neden = `devletiYaySessiz`; `tavanda` = `ODAK-TAVAN.json` `sekme_sessiz_kimlik`te (kimlik, ilk künye) çifti var mı):

| t | b | neden | taşıdığı | tavanda |
|---|---|---|---|---|
| 1381-01-01 | Timur'un İran seferleri başladı | harita_kaydi_yok | — | **HAYIR** |
| 1555-01-01 | İran halı ve ipek dokuma sanayii zirveye ulaştı | harita_kaydi_yok | — | evet |
| 1578-01-01 | Osmanlı-Safevî Savaşı başladı (1590'a dek) | harita_kaydi_yok | — | evet |
| 1598-01-01 | Gulâm ordu reformu — Kızılbaş gücünün dengelenmesi | harita_kaydi_yok | — | evet |
| 1600-01-01 | İpek ticareti devlet tekeline alındı | harita_kaydi_yok | — | evet |
| 1618-09-26 | Osmanlı-Safevî Savaşı (Nasuh Paşa sonrası) yeniden alevlendi | harita_kaydi_yok | — | evet |
| 1699-01-01 | Belûc ve Afgan sınır boylarında merkezî otoritenin zayıflaması | harita_kaydi_yok | — | evet |
| 1723-06-24 | Osmanlı, İran'ın batı topraklarını işgale başladı | harita_kaydi_yok | — | evet |
| 1730-01-01 | Osmanlı ile savaş yeniden başladı (1736'ya dek, aralıklı) | harita_kaydi_yok | — | evet |
| 1750-01-01 | Kerim Han Zend'in yükselişi başladı | harita_kaydi_yok | — | evet |
| 1826-07-19 | İkinci Rus-İran Savaşı başladı (1828'e dek) | harita_kaydi_yok | — | evet |
| 1873-01-01 | Nâsırüddin Şah'ın ilk Avrupa seyahati | harita_kaydi_yok | — | evet |
| 1891-12-01 | Tütün İsyanı — büyük fetva ve kitlesel boykot | harita_kaydi_yok | — | evet |
| 1907-08-31 | 1907 İngiliz-Rus Antlaşması — İran nüfuz bölgelerine bölündü | harita_kaydi_yok | — | evet |
| 1909-04-14 | Anglo-Persian Oil Company kuruldu | harita_kaydi_yok | — | evet |
| 1917-01-01 | 1917-1919 büyük kıtlığı | harita_kaydi_yok | — | evet |
| 1922-01-01 | Şeyh Hazal ve Simko Kürt isyanlarının bastırılması | harita_kaydi_yok | — | evet |

KURTULAN kalemler (adıyla, dal):

| t | b | kurtarıcı | taşıdığı |
|---|---|---|---|
| 1295-06-19 | Gazan Han İslâm'ı kabul etti | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1304-05-21 | Olcaytu (Öljeytü) Şiîliği kabul etti | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1335-11-30 | Ebû Said'in ölümü — İlhanlı Devleti'nin fiilen dağılması | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1337-09-09 | Serbedârî hareketinin kuruluşu (Sebzevar) | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1353-01-01 | Muzafferîler Şîraz'ı ele geçirdi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1370-04-09 | Timur, Mâverâünnehir'de tek hâkim oldu | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1375-01-01 | Karakoyunlu Konfederasyonu'nun kuruluşu | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1387-11-18 | İsfahan katliamı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1405-02-18 | Timur öldü | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1409-01-01 | Şahruh Herat'ı başşehir yaptı — Timurlu "altın çağı" | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1420-01-01 | Baysungur'un Herat nakkaşhânesi — minyatür sanatının zirvesi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1447-03-13 | Şahruh'un ölümü — Timurlu toprakları parçalandı | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1458-01-01 | Ebû Said Mirza, Timurlu topraklarını yeniden birleştirdi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1467-11-10 | Akkoyunlu, Karakoyunlu'yu yendi — Uzun Hasan'ın yükselişi | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1473-08-11 | Otlukbeli Muharebesi — Osmanlı, Akkoyunlu'yu yendi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1478-01-06 | Uzun Hasan öldü, Akkoyunlu parçalanmaya başladı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1501-07-01 | Şah İsmail Tebriz'de tahta çıktı — Safevî Devleti kuruldu | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1502-01-01 | On İki İmam Şiîliği resmî mezhep ilan edildi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1507-01-01 | Diyarbakır ve Bağdat'ın fethi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1510-12-02 | Şeybânî Han'ın yenilgisi — Horasan Safevî'ye geçti | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1514-08-23 | Çaldıran Muharebesi — Osmanlı'ya ağır yenilgi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1524-01-01 | Kızılbaş naiplik dönemi (Tahmasb'ın çocukluğu) | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1524-05-23 | Şah İsmail öldü, I. Tahmasb tahta çıktı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1534-01-01 | Osmanlı-Safevî Savaşı başladı (1555'e dek) | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1534-12-04 | Bağdat Osmanlı'ya geçti | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1548-01-01 | Başkent Tebriz'den Kazvin'e taşındı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1555-05-29 | Amasya Antlaşması — ilk Osmanlı-Safevî barışı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1576-05-14 | I. Tahmasb öldü — veraset krizi başladı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1576-08-11 | II. İsmail'in kısa ve kanlı saltanatı başladı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1587-10-01 | I. Şah Abbas tahta çıktı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1590-03-21 | Ferhad Paşa (İstanbul) Antlaşması — büyük toprak kaybı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1598-01-01 | Başkent İsfahan'a taşındı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1598-01-01 | İngiliz Sherley kardeşlerin İsfahan'a gelişi — Avrupa diplomasisi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1603-09-26 | Osmanlı-Safevî Savaşı başladı (1639'a dek) — intikam seferi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1622-05-01 | Hürmüz'ün Portekiz'den geri alınması | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1623-11-28 | Bağdat'ın Safevîlerce ele geçirilmesi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1629-01-19 | Şah Abbas öldü | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1638-12-24 | Bağdat Osmanlı'ya kesin olarak kaybedildi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1639-05-17 | Kasr-ı Şirin Antlaşması — kalıcı sınır | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1649-01-01 | Kandehar'ın Babürlülerden geri alınması | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1666-01-01 | II. Abbas öldü, Şah Süleyman tahta çıktı — duraklama başladı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1666-01-01 | Kaşan-İsfahan bölgesinde veba salgını | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1694-07-29 | Şah Sultan Hüseyin tahta çıktı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1709-01-01 | Mir Veys Han'ın Kandehar'da isyanı — Afgan bağımsızlığı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1722-03-08 | Gülnâbâd Muharebesi — Safevî ordusu dağıldı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1722-10-23 | İsfahan düştü — Safevî Devleti fiilen sona erdi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1729-01-01 | Nadir Han, Afganları yenip İsfahan'ı geri aldı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1736-03-08 | Nadir Şah, kendini şah ilan etti — Afşar Devleti kuruldu | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1738-03-24 | Kandehar'ın fethi — Afgan meselesinin kapanması | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1739-03-13 | Nadir Şah'ın Hindistan seferi — Delhi'nin yağmalanması | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1741-01-01 | Rıza Kulı Mirza'nın kör edilmesi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1743-01-01 | Osmanlı-İran Savaşı başladı (1746'ya dek) | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1747-06-20 | Nadir Şah suikastla öldürüldü | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1765-01-01 | Şîraz başkent yapıldı — Zend "altın çağı" | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1775-04-16 | Zend, Basra'yı kuşattı ve ele geçirdi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1779-03-01 | Kerim Han öldü — Zend hânedanında taht kavgaları başladı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1794-01-01 | Lütf Ali Han'ın yenilgisi — Zend hânedanı sona erdi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1795-01-01 | Tiflis'in yağmalanması | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1796-03-21 | Ağa Muhammed Han taç giydi — Kaçar Devleti kuruldu | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1797-06-17 | Ağa Muhammed Han suikastla öldürüldü | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1804-06-10 | Birinci Rus-İran Savaşı başladı (1813'e dek) | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1813-10-24 | Gülistan Antlaşması — Kafkasya'nın büyük kısmı kaybedildi | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1828-02-10 | Türkmençay Antlaşması — Erivan ve Nahcıvan kaybedildi | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1834-10-23 | Fetih Ali Şah öldü, Muhammed Şah tahta çıktı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1837-11-23 | Birinci Herat kuşatması (1838'e dek) | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1844-05-23 | Bâb'ın (Seyyid Ali Muhammed Şirazi) davasını ilan etmesi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1848-01-01 | Emîr Kebîr sadrazam oldu — modernleşme girişimi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1848-09-05 | Nâsırüddin Şah tahta çıktı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1850-07-09 | Bâb'ın idamı — Babî isyanlarının bastırılması | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1851-12-28 | Dâru'l-Fünûn açıldı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1852-01-10 | Emîr Kebîr'in idamı | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1856-10-01 | Herat Savaşı — İngiltere ile çatışma | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1872-01-01 | Reuter İmtiyazı — yabancı imtiyazlara tepkinin başlangıcı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1890-03-08 | Tütün İmtiyazı verildi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1896-01-01 | Müzafferüddin Şah tahta çıktı — mali kriz derinleşti | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1896-05-01 | Nâsırüddin Şah suikastla öldürüldü | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1901-05-28 | D'Arcy Petrol İmtiyazı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1905-01-01 | Meşrutiyet hareketinin başlaması — Tahran'da bast (sığınma) eylemleri | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1906-08-05 | Muzafferüddin Şah anayasayı imzaladı — Meşrutiyet ilan edildi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1908-01-01 | Sattâr Han'ın Tebriz direnişi (1909'a dek) | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1908-05-26 | Mesced-i Süleyman'da petrol bulundu | kapsam_genis:YOK [okunmayan yer_kon] | yer_kon, kapsam_genis:YOK |
| 1908-06-23 | Muhammed Ali Şah'ın Meclis'i bombalaması — küçük istibdat | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1909-07-16 | Muhammed Ali Şah tahttan indirildi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1911-11-24 | Rusya'nın ikinci ültimatomu — Meclis kapatıldı | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1914-11-01 | I. Dünya Savaşı'nda tarafsızlık ilan edildi (fiilen işgal edildi) | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1915-01-01 | Kafkas-İran cephesinde Osmanlı-Rus çatışmaları | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1919-08-09 | 1919 İngiliz-İran Antlaşması — fiilî himaye girişimi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1920-06-05 | Gîlân Sovyet Cumhuriyeti ilan edildi (Cengelî hareketi) | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1921-02-21 | Rıza Han'ın darbesi | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |
| 1923-10-28 | Ahmed Şah ülkeyi terk etti, Rıza Han başbakan oldu | hedefYer(yer_id) | yer_id, kapsam_genis:YOK |

YARININ KUSURU (iran): **0** — `iran` için DEVLET_HARITA kaydı olmadığından gövde dalı her gün `harita_kaydi_yok` verir; kurtarıcısız her `kapsam_genis:true` madde BUGÜN SESSİZ'dir.

## ② Genel tarama — index.html'in yüklediği BÜTÜN kronoloji_*/olaylar* dosyaları (184)

Bağ yolu sayımı: OLAYLAR_osmanli 73 · COK_TARAFLI_onek 68 · AD_SOZLESMESI 26 · BAGSIZ_COK_YOLUNA 15 · ? 2

### ②a AD SÖZLEŞMESİYLE bağlanan dosyalar (`KRONOLOJI_X` ⇒ künye `x`; pencere SINAVI YOK)

Sıra: (sessiz + yarının kusuru) ↓, pencere dışı ↓.

| dosya | künye | künye penceresi | madde | madde aralığı | pencere dışı | kurtarıcı (dal) | SESSİZ | yarının kusuru | başlık |
|---|---|---|---|---|---|---|---|---|---|
| kronoloji_iran.js | iran | 1925-10-31 → 2026-08-07 | 107 | 1295-06-19 → 1923-10-28 | **107** | 90 (hedefYer(yer_id) 76 · kapsam_genis:YOK [okunmayan yer_kon] 14) | 17 | 0 | // KRONOLOJI_IRAN — İran'ın kendi tarihyazımının ölçüsüyle BİRLEŞİK kronoloji |
| kronoloji_macaristan.js | macaristan | 1000-01-01 → 1526-08-29 | 127 | 1290-07-10 → 1918-11-16 | **83** | 69 (hedefYer(yer_id) 50 · kapsam_genis:YOK [okunmayan yer_kon] 15 · hedefYer(yer_id+yer_kon) 4) | 0 | 14 | // MACARİSTAN KRALLIĞI — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026) |
| kronoloji_fransa.js | fransa | 0987-01-01 → 1792-09-22 | 184 | 1285-10-05 → 1923-07-24 | **91** | 88 (hedefYer(yer_id) 69 · kapsam_genis:YOK [okunmayan yer_kon] 19) | 3 | 0 | // FRANSA — DEVLET KRONOLOJİSİ (FRANSA KRONOLOJİ oturumu, 21 Ağustos 2026) |
| kronoloji_ispanya.js | ispanya | 1479-01-20 → 1945-09-02 | 158 | 1340-10-30 → 1923-09-13 | **7** | 6 (kapsam_genis:YOK [okunmayan yer_kon] 4 · hedefYer(yer_id) 2) | 1 | 0 | // İSPANYA — DEVLET KRONOLOJİSİ (Kastilya-Aragon → Birleşik İspanya) |
| kronoloji_kirim.js | kirim | 1441-01-01 → 1783-04-19 | 91 | 1441-01-01 → 1792-01-01 | **5** | 4 (hedefYer(yer_id) 4) | 1 | 0 | // KRONOLOJI_KIRIM — Kırım Hanlığı (1441-1783) kronolojisi |
| kronoloji_gurcistan.js | gurcistan | 1008-01-01 → 1801-09-12 | 45 | 0645-01-01 → 1921-03-16 | **8** | 8 (hedefYer(yer_id) 8) | 0 | 0 | // KRONOLOJI_GURCISTAN — Gürcistan'ın ülke ölçekli kronolojisi (645-1921) |
| kronoloji_safevi.js | safevi | 1501-07-01 → 1736-03-08 | 83 | 1500-01-01 → 1773-01-01 | **5** | 5 (hedefYer(yer_id) 4 · kapsam_genis:YOK [okunmayan odak] 1) | 0 | 0 | // KRONOLOJI_SAFEVI — Safevî Devleti'nin (1501-1722/1736) kendi tarihyazımının |
| kronoloji_hollanda.js | hollanda | 1581-07-26 → 1945-09-02 | 42 | 1568-01-01 → 1914-08-01 | **3** | 3 (maddeOdakKutusu(odak_yer) 1 · kapsam_genis:YOK [okunmayan odak] 1 · hedefYer(yer_id) 1) | 0 | 0 | // HOLLANDA — Birleşik Provinsler ve Krallık (pilot, 22 Ağustos 2026) |
| kronoloji_naksa_dukaligi.js | naksa-dukaligi | 1207-01-01 → 1579-01-01 | 25 | 1204-04-13 → 1669-01-01 | **3** | 3 (hedefYer(yer_id) 3) | 0 | 0 | // ② NAKŞA (NAXOS) DUKALIĞI — Egeopelagos Dukalığı  (1207 → 1579) |
| kronoloji_atina_dukaligi.js | atina-dukaligi | 1205-01-01 → 1458-06-04 | 25 | 1204-04-13 → 1458-08-01 | **2** | 2 (hedefYer(yer_id) 2) | 0 | 0 | // ③ ATİNA DUKALIĞI  (1205 → 1458-06-04) |
| kronoloji_katalan.js | katalan | 1311-03-15 → 1388-05-02 | 9 | 1303-09-01 → 1388-05-02 | **2** | 2 (hedefYer(yer_id) 2) | 0 | 0 | // ④ KATALAN DUKALIĞI — Atina-Neopatras Kumpanyası  (1311-03-15 → 1388) |
| kronoloji_rodos_sovalyeleri.js | rodos-sovalyeleri | 1310-01-01 → 1798-06-12 | 96 | 1291-05-18 → 1798-06-12 | **2** | 2 (kapsam_genis:YOK 1 · hedefYer(yer_id) 1) | 0 | 0 | // EGE LATİN DEVLETLERİ — DERİN KRONOLOJİ (22 Ağustos 2026) |
| kronoloji_karakoyunlu.js | karakoyunlu | 1351-01-01 → 1469-12-19 | 70 | 1351-01-01 → 1479-01-01 | **1** | 1 (hedefYer(yer_id) 1) | 0 | 0 | // KARAKOYUNLU DEVLETİ — KRONOLOJİ · 1351-1469 |
| kronoloji_lehistan.js | lehistan | 1569-07-01 → 1795-10-24 | 78 | 1569-07-01 → 1797-01-09 | **1** | 1 (hedefYer(yer_id) 1) | 0 | 0 | // LEHİSTAN — LİTVANYA (Rzeczpospolita) KRONOLOJİSİ |
| kronoloji_venedik.js | venedik | 0697-01-01 → 1797-05-12 | 87 | 1281-01-01 → 1797-10-17 | **1** | 1 (kapsam_genis:YOK [okunmayan yer_kon] 1) | 0 | 0 | // VENEDİK CUMHURİYETİ — DEVLET KRONOLOJİSİ (pilot, 20 Ağustos 2026) |
| kronoloji_akkoyunlu.js | akkoyunlu | 1340-01-01 → 1514-01-01 | 77 | 1340-01-01 → 1514-01-01 | **0** | 0 (—) | 0 | 0 | // AKKOYUNLU DEVLETİ — KRONOLOJİ · 1340-1514 |
| kronoloji_almanya.js | almanya | 0962-02-02 → 1945-06-05 | 132 | 1338-07-16 → 1923-11-15 | **0** | 0 (—) | 0 | 0 | // ALMANYA — DEVLET KRONOLOJİSİ (Kutsal Roma / Brandenburg-Prusya / Alman İmparatorluğu) |
| kronoloji_altinorda.js | altinorda | 1242-01-01 → 1502-01-01 | 44 | 1281-01-01 → 1502-01-01 | **0** | 0 (—) | 0 | 0 | // KRONOLOJI_ALTINORDA — Altın Orda (Deşt-i Kıpçak Hanlığı) kronolojisi |
| kronoloji_bizans.js | bizans | 0330-05-11 → 1461-08-15 | 97 | 1282-12-11 → 1460-05-31 | **0** | 0 (—) | 0 | 0 | // BİZANS (DOĞU ROMA) İMPARATORLUĞU — KRONOLOJİ · 1281-1453 |
| kronoloji_habsburg.js | habsburg | 1282-01-01 → 1918-11-11 | 117 | 1526-08-29 → 1918-11-11 | **0** | 0 (—) | 0 | 0 | // HABSBURG AVUSTURYA — DEVLET KRONOLOJİSİ (pilot, 20 Ağustos 2026) |
| kronoloji_ingiltere.js | ingiltere | 0927-01-01 → 1945-09-02 | 270 | 1282-12-11 → 1923-07-24 | **0** | 0 (—) | 0 | 0 | // İNGİLTERE / BÜYÜK BRİTANYA KRONOLOJİSİ |
| kronoloji_isvec.js | isvec | 1523-06-06 → 1945-09-02 | 95 | 1523-06-06 → 1905-10-26 | **0** | 0 (—) | 0 | 0 | // KRONOLOJI_ISVEC — İsveç Krallığı'nın kendi tarihyazımının ölçüsüyle kronoloji |
| kronoloji_memluk.js | memluk | 1250-01-01 → 1517-04-13 | 155 | 1261-06-09 → 1517-04-13 | **0** | 0 (—) | 0 | 0 | // MEMLÜK SULTANLIĞI — KRONOLOJİ · 1261-1517 (çekirdek kapsam 1281-1517) |
| kronoloji_portekiz.js | portekiz | 1097-01-01 → 1945-09-02 | 86 | 1281-01-01 → 1923-01-01 | **0** | 0 (—) | 0 | 0 | // PORTEKİZ KRALLIĞI — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026) |
| kronoloji_rusya.js | rusya | 1547-01-16 → 1917-03-15 | 158 | 1547-01-16 → 1917-03-15 | **0** | 0 (—) | 0 | 0 | // KRONOLOJI_RUSYA — Rusya'nın kendi tarihyazımının ölçüsüyle kronoloji |
| kronoloji_timurlu.js | timurlu | 1370-04-09 → 1507-05-01 | 24 | 1391-06-18 → 1507-05-01 | **0** | 0 (—) | 0 | 0 | // TİMURLULAR — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026) |

Toplam: 26 dosya · pencere dışı madde 321 · KURTULUYOR 285 · SESSİZ 22 · YARININ KUSURU 14 · VERİ-DIŞI 0

SESSİZ kalemlerin TAMAMI (ad-sözleşmeli dosyalar):

| dosya | t | b | neden | tavanda |
|---|---|---|---|---|
| kronoloji_fransa.js | 1796-04-12 | Napolyon Bonapart'ın İtalya Seferi'nin başlaması | sahnede_degil | evet |
| kronoloji_fransa.js | 1863-06-10 | Meksika Seferi — Maximilian'ın imparator ilanı hazırlığı | sahnede_degil | evet |
| kronoloji_fransa.js | 1917-04-16 | Nivelle Taarruzu ve Fransız ordusu isyanları | sahnede_degil | evet |
| kronoloji_iran.js | 1381-01-01 | Timur'un İran seferleri başladı | harita_kaydi_yok | **HAYIR** |
| kronoloji_iran.js | 1555-01-01 | İran halı ve ipek dokuma sanayii zirveye ulaştı | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1578-01-01 | Osmanlı-Safevî Savaşı başladı (1590'a dek) | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1598-01-01 | Gulâm ordu reformu — Kızılbaş gücünün dengelenmesi | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1600-01-01 | İpek ticareti devlet tekeline alındı | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1618-09-26 | Osmanlı-Safevî Savaşı (Nasuh Paşa sonrası) yeniden alevlendi | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1699-01-01 | Belûc ve Afgan sınır boylarında merkezî otoritenin zayıflama | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1723-06-24 | Osmanlı, İran'ın batı topraklarını işgale başladı | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1730-01-01 | Osmanlı ile savaş yeniden başladı (1736'ya dek, aralıklı) | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1750-01-01 | Kerim Han Zend'in yükselişi başladı | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1826-07-19 | İkinci Rus-İran Savaşı başladı (1828'e dek) | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1873-01-01 | Nâsırüddin Şah'ın ilk Avrupa seyahati | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1891-12-01 | Tütün İsyanı — büyük fetva ve kitlesel boykot | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1907-08-31 | 1907 İngiliz-Rus Antlaşması — İran nüfuz bölgelerine bölündü | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1909-04-14 | Anglo-Persian Oil Company kuruldu | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1917-01-01 | 1917-1919 büyük kıtlığı | harita_kaydi_yok | evet |
| kronoloji_iran.js | 1922-01-01 | Şeyh Hazal ve Simko Kürt isyanlarının bastırılması | harita_kaydi_yok | evet |
| kronoloji_ispanya.js | 1478-11-01 | İspanyol Engizisyonu kuruldu | sahnede_degil | evet |
| kronoloji_kirim.js | 1792-01-01 | Yaş Antlaşması sonrası Osmanlı, Kırım Hanlığı'nı yeniden can | sahnede_degil | evet |

YARININ KUSURU kalemlerinin TAMAMI:

| dosya | t | b | dal | taşıdığı | gövde anahtarı | o gün o anahtarı taşıyan öteki künye | sessiz tavanında |
|---|---|---|---|---|---|---|---|
| kronoloji_macaristan.js | 1571-08-16 | Torda Edikti — Erdel'de din özgürlüğünün yasalaşması | SEKME_OKUNMAYAN/govde_yer_kon | yer_kon | macaristan | macaristan-habsburg | hayır |
| kronoloji_macaristan.js | 1657-01-01 | II. Rákóczi György'nin talihsiz Lehistan seferi | SEKME_GOVDE | — | macaristan | macaristan-habsburg | evet (tavanda SESSİZ, bugün GÖVDE) |
| kronoloji_macaristan.js | 1671-04-30 | Wesselényi Tertibi'nin bastırılması ve Macar anayasasın | SEKME_OKUNMAYAN/govde_yer_kon | yer_kon | macaristan | macaristan-habsburg | hayır |
| kronoloji_macaristan.js | 1678-09-13 | Thököly İmre'nin Kuruc hareketinin başına geçmesi | SEKME_GOVDE | — | macaristan | macaristan-habsburg | evet (tavanda SESSİZ, bugün GÖVDE) |
| kronoloji_macaristan.js | 1707-06-13 | Ónod Diyeti — Habsburg hanedanının tahttan indirildiğin | SEKME_OKUNMAYAN/govde_yer_kon | yer_kon | macaristan | macaristan-habsburg | hayır |
| kronoloji_macaristan.js | 1720-01-01 | Bácska ve Bánát'a Alman (Schwaben) göçmenlerin iskânını | SEKME_GOVDE | — | macaristan | macaristan-habsburg | evet (tavanda SESSİZ, bugün GÖVDE) |
| kronoloji_macaristan.js | 1738-01-01 | Büyük veba salgınının Güney Macaristan'ı vurması | SEKME_GOVDE | — | macaristan | macaristan-habsburg | evet (tavanda SESSİZ, bugün GÖVDE) |
| kronoloji_macaristan.js | 1811-01-01 | Kazinczy Ferenc'in 'nyelvújítás' (dil yenileme) hareket | SEKME_OKUNMAYAN/govde_yer_kon | yer_kon | macaristan | macaristan-habsburg | hayır |
| kronoloji_macaristan.js | 1831-08-01 | Doğu Slovakya kolera isyanı | SEKME_GOVDE | — | macaristan | macaristan-habsburg | evet (tavanda SESSİZ, bugün GÖVDE) |
| kronoloji_macaristan.js | 1850-01-01 | Bach döneminin merkezîleştirici idaresinin kurulması | SEKME_GOVDE | — | macaristan | macaristan-habsburg | evet (tavanda SESSİZ, bugün GÖVDE) |
| kronoloji_macaristan.js | 1854-03-02 | Urbéri kárpótlás — serflik tazminatının yasal çerçevesi | SEKME_GOVDE | — | macaristan | macaristan-habsburg | evet (tavanda SESSİZ, bugün GÖVDE) |
| kronoloji_macaristan.js | 1867-12-14 | 1867 Yahudi Emansipasyon Yasası | SEKME_OKUNMAYAN/govde_yer_kon | yer_kon | macaristan | macaristan-habsburg | hayır |
| kronoloji_macaristan.js | 1868-12-06 | 1868 Milliyetler Kanunu | SEKME_OKUNMAYAN/govde_yer_kon | yer_kon | macaristan | macaristan-habsburg | hayır |
| kronoloji_macaristan.js | 1878-01-01 | Avusturya-Macaristan Gümrük ve Ticaret Birliği'nin on y | SEKME_GOVDE | — | macaristan | macaristan-habsburg | evet (tavanda SESSİZ, bugün GÖVDE) |

### ②b BAĞSIZ dosyalar — ad sözleşmesi künye BULAMADI ⇒ çok taraflı yola (taraf penceresi SINANIR)

| dosya | aday id | madde | madde aralığı | taraf çifti | inmeyen çift (pencere dışı + künyesiz taraf) | hiçbir künyeye inmeyen madde | başlık |
|---|---|---|---|---|---|---|---|
| kronoloji_anadolu.js | anadolu | 282 | 1063-01-01 → 1522-01-01 | 255 | 7 | 35 | // ANADOLU BEYLİKLERİ — KRONOLOJİ · altı künye tek dosyada |
| kronoloji_balkan.js | balkan | 177 | 1185-01-01 → 1923-07-24 | 125 | 4 | 56 | // BALKAN DEVLETLERİ — DEVLET KRONOLOJİSİ (1. tur, 22 Ağustos 2026) |
| kronoloji_italya_sehir.js | italya_sehir/italya-sehir | 186 | 1281-01-01 → 1859-06-11 | 170 | 4 | 20 |  |
| kronoloji_cin.js | cin | 136 | 1281-01-01 → 1923-01-26 | 125 | 1 | 12 | // ÇİN — YUAN · MİNG · QİNG (+ ÇİN CUMHURİYETİ'NİN AÇILIŞI) KRONOLOJİSİ |
| kronoloji_hindistan.js | hindistan | 131 | 1290-06-13 → 1849-03-29 | 104 | 1 | 31 | // KRONOLOJI_HINDISTAN — Hindistan'ın BİRLEŞİK kronolojisi (Delhi Sultanlığı → |
| kronoloji_japonya.js | japonya | 71 | 1281-08-15 → 1923-09-01 | 62 | 1 | 10 | // KRONOLOJI_JAPONYA — Japonya'nın BİRLEŞİK kronolojisi (Kamakura'nın sonu → |
| kronoloji_sirbistan.js | sirbistan | 35 | 1217-01-01 → 1918-12-01 | 16 | 1 | 20 | // SIRBİSTAN — DEVLET KRONOLOJİSİ (1. tur, 22 Ağustos 2026) |
| kronoloji_arabistan.js | arabistan | 60 | 0897-01-01 → 1920-01-01 | 43 | 0 | 17 | // ARABİSTAN — DEVLET KRONOLOJİSİ (1. tur, 22 Ağustos 2026) |
| kronoloji_dogu_afrika.js | dogu_afrika/dogu-afrika | 218 | 1270-01-01 → 1923-09-28 | 190 | 0 | 28 | // DOĞU AFRİKA — DEVLET KRONOLOJİLERİ (ilk tur, 22 Ağustos 2026) |
| kronoloji_guney_asya.js | guney_asya/guney-asya | 153 | 1281-01-01 → 1923-10-29 | 152 | 0 | 20 | // GÜNEY ASYA KRONOLOJİSİ — Racput · Sind · Ladakh · Travankur · Nepal · Manipur |
| kronoloji_iran_ardillari.js | iran_ardillari/iran-ardillari | 155 | 1155-01-01 → 1603-01-01 | 108 | 0 | 47 | // İRAN ARDILLARI — KRONOLOJİ |
| kronoloji_kuzeyafrika.js | kuzeyafrika | 83 | 1196-01-01 → 1912-10-18 | 65 | 0 | 18 | // KUZEY AFRİKA — DEVLET KRONOLOJİLERİ (ilk tur, 22 Ağustos 2026) |
| kronoloji_misir.js | misir | 120 | 1517-01-22 → 1915-01-14 | 111 | 0 | 9 | // OSMANLI MISIRI ve KAVALALI HANEDANI — KRONOLOJİ · 1517-1922 |
| kronoloji_orta_asya.js | orta_asya/orta-asya | 205 | 1207-01-01 → 1922-04-01 | 137 | 0 | 69 | // KRONOLOJI_ORTA_ASYA — Altın Orda ardılı hanlıklar, Kazak Hanlığı, Tarım |
| kronoloji_ozbek.js | ozbek | 73 | 1500-01-01 → 1920-09-02 | 61 | 0 | 12 | // KRONOLOJİ — MÂVERÂÜNNEHİR ÖZBEK HANLIKLARI (Şeybânî/Buhara · Canoğulları · |

### ②c `KRONOLOJI_SINIR_*` / `KRONOLOJI_COK_*` (önekle çok taraflı; künye bağı ad ile DEĞİL `taraflar[]` ile)

68 dosya · 3700 madde · taraf çifti 5912 · inmeyen çift 125 · hiçbir künyeye inmeyen madde 84. Yalnız inmeyen çifti ya da inmeyen maddesi olanlar:

| dosya | madde | madde aralığı | taraf çifti | inmeyen çift | hiç inmeyen madde |
|---|---|---|---|---|---|
| kronoloji_sinir_guney_g8.js | 81 | 1285-01-01 → 1600-01-01 | 89 | 74 | 74 |
| kronoloji_sinir_polonya_1915.js | 15 | 1914-08-03 → 1915-10-01 | 45 | 9 | 0 |
| kronoloji_sinir_ortadogu.js | 12 | 1553-08-28 → 1922-12-02 | 24 | 8 | 0 |
| kronoloji_sinir_asya.js | 95 | 1287-01-01 → 1922-02-06 | 183 | 7 | 3 |
| kronoloji_cok_senkron_0930.js | 68 | 1345-09-25 → 1923-07-24 | 137 | 7 | 0 |
| kronoloji_sinir_turkiye.js | 13 | 1908-10-05 → 1923-07-24 | 26 | 6 | 0 |
| kronoloji_cok_lehistan.js | 64 | 1295-06-26 → 1922-06-20 | 73 | 2 | 2 |
| kronoloji_cok_ince_guney_asya.js | 56 | 1442-01-01 → 1955-01-01 | 63 | 2 | 1 |
| kronoloji_cok_ince_misir_orta_asya.js | 35 | 1248-01-01 → 1889-08-03 | 42 | 2 | 1 |
| kronoloji_cok_guney_amerika.js | 98 | 1533-06-01 → 1911-05-31 | 110 | 1 | 1 |
| kronoloji_cok_libya.js | 58 | 1519-01-01 → 1923-01-01 | 83 | 1 | 1 |
| kronoloji_cok_once1281_anadolu.js | 175 | 1002-01-01 → 1277-01-01 | 322 | 1 | 1 |
| kronoloji_cok_gurcistan.js | 35 | 1413-01-01 → 1921-06-03 | 64 | 1 | 0 |
| kronoloji_cok_once1281_avrupa.js | 272 | 1000-01-01 → 1280-01-01 | 435 | 1 | 0 |
| kronoloji_cok_once1281_iran.js | 170 | 1000-01-01 → 1278-01-01 | 270 | 1 | 0 |
| kronoloji_cok_orta_asya2.js | 16 | 1370-01-01 → 1883-01-01 | 32 | 1 | 0 |
| kronoloji_sinir_komsu.js | 23 | 1330-07-28 → 1923-03-07 | 46 | 1 | 0 |

📌 Bu kovada pencere dışı çift **SESSİZ değildir, İNMEZ** (app.js `cokTarafliKronolojiEkle` pencere sınavı) — o künyenin sekmesinde hiç görünmez. Ad sözleşmesi yolunda (②a) böyle bir sınav YOK.

### ②d `olaylar*` (75 dosya, 1801 madde) — Osmanlı olay listesi yolu, künye sekmesi DEĞİL; ad bağı yok

Yüklenen ama KRONOLOJI_/OLAYLAR dizisine madde koymayan dosya: olaylar_sh110.js, olaylar_sk105.js

## ③ Ad sözleşmesinin kodu ve `harita:` yönlendirmesi

- Bağ: `js/app.js` `KRONOLOJI_ID_OZEL` (15314) · `derinKronolojiBindir` (15345-15414): aday = `KRONOLOJI_ID_OZEL[anahtar] || anahtar.slice(10).toLowerCase()` (15361), `_` varsa ikinci aday `-`li (15362); `KRONOLOJI_(SINIR|COK)_` öneki atlanır (15350); bulunamazsa `KRONOLOJI_COK_YOLU`na (15399). Künye bulunursa `D[i].kronoloji = derin (+ temsil edilmeyen künye maddeleri)` — **tarih penceresi sorulmaz**.
- `cokTarafliKronolojiEkle` (15429-15482): taraf künyesinin [f,t] dışı çift İNMEZ (pencere sınavı yalnız burada).
- `arac/denetle_kronoloji.py:147`: `beklenen = "KRONOLOJI_" + f[10:-3].upper()` — dosya adı ⇒ değişken adı zorunlu (ad değişirse künye bağı da değişir).
- `KRONOLOJI_ID_OZEL` bugün: `{}` (boş ⇒ istisna eşlemesi hiç kullanılmıyor; ezme yolu VAR ama boş).
- Sekme kamerası (`odak_cozum.js` `govdeSonucu`, app.js `maddeAc`): gövde dalında `devletiYay(d.harita || d.id)` — künyede `harita:` varsa gövde ONUNLA aranır ve künyenin KENDİ [f,t]'si değil, o anahtarın DEVLET_HARITA dönemleri sorulur.
- `harita:` alanı id'den FARKLI künye: **57**. Aynı DEVLET_HARITA anahtarını (harita‖id) paylaşan künye grubu: **12**.

Bugün `harita:` ile KURTULAN (madde × künye) — gövde dalına inen çiftte `d.id` ile gövde YOK, `d.harita` ile VAR:

| dosya | künye | harita | çift |
|---|---|---|---|
| kronoloji_arabistan.js | yemen-zeydi | yemen | 5 |
| kronoloji_balkan.js | bosna-kralligi | bosna | 13 |
| kronoloji_balkan.js | bulgar-carligi | bulgaristan | 1 |
| kronoloji_balkan.js | bulgaristan-prensligi | bulgaristan | 2 |
| kronoloji_cok_1dunya_B.js | habsburg | avusturya | 3 |
| kronoloji_cok_1dunya_B.js | suud-ucuncu | suud | 1 |
| kronoloji_habsburg.js | habsburg | avusturya | 12 |

Toplam 37 çift, 4 dosya.

Ters yön — `harita:` ile gövde BULUNAMAYAN ama `d.id` ile bulunacak (gövde dalına inen) çift:

| dosya | künye | harita | çift |
|---|---|---|---|

Ad-sözleşmeli dosyaların künyelerinden PAYLAŞILAN anahtarlı olanlar (başka künyenin gövdesi bu sekmeye düşebilir):

- `kronoloji_macaristan.js` → künye `macaristan` → anahtar `macaristan` (DH kaydı True) · paylaşan: macaristan[1000-01-01→1526-08-29], macaristan-habsburg[1526-08-29→1918-11-16], macaristan-naiplik[1918-11-16→1945-09-02]
- `kronoloji_ingiltere.js` → künye `ingiltere` → anahtar `ingiltere` (DH kaydı True) · paylaşan: ingiltere[0927-01-01→1945-09-02], guneybati-afrika-mandasi[1920-12-17→1990-03-21], ingiliz-tanganika-mandasi[1922-07-20→1961-12-09], ingiliz-nijerya[1861-01-01→1960-10-01], ingiliz-becuanaland[1885-09-30→1966-09-30], ingiliz-kenya-kolonisi[1895-07-01→1963-12-12], ingiliz-guney-rodezya[1890-01-01→1980-04-18], ingiliz-altin-kiyisi[1874-07-24→1957-03-06], ingiliz-kuzey-rodezya[1890-01-01→1964-10-24], ingiliz-nyasaland[1891-05-14→1964-07-06], ingiliz-siyera-leon[1808-01-01→1961-04-27]
- `kronoloji_portekiz.js` → künye `portekiz` → anahtar `portekiz` (DH kaydı True) · paylaşan: portekiz[1097-01-01→1945-09-02], portekiz-mozambik[1505-01-01→1975-06-25], portekiz-angola[1575-01-01→1975-11-11], portekiz-gine[1879-01-01→1974-09-10]

## Üç yapısal yol — YALNIZ etkilenen dosya sayısı (seçim YOK)

| yol | etkilenen | ölçüt |
|---|---|---|
| ① `sekme:` alanını tanımla (VERI-YAPISI.md'de bugün YOK) | 15 dosya · 321 madde | ad-sözleşmeli ve künye penceresi dışında maddesi olan |
| ② bölge kronolojisine ayrı `bolge:` bağı | 2 ad-sözleşmeli dosya (başlığı BİRLEŞİK / ülke ölçekli: kronoloji_iran.js, kronoloji_gurcistan.js) · ayrıca 15 bağsız dosya bugün çok taraflı yolda | başlık satırı, adıyla aşağıda |
| ③ yeniden adlandır | 1 dosya (maddelerinin TAMAMI pencere dışı) · 2 dosya (yarıdan fazlası) · 15 (en az biri) | ad-künye penceresi |

Başlık satırları (ad-sözleşmeli + bağsız; ilk anlamlı yorum satırı):

- `kronoloji_iran.js` (AD_SOZLESMESI): // KRONOLOJI_IRAN — İran'ın kendi tarihyazımının ölçüsüyle BİRLEŞİK kronoloji
- `kronoloji_macaristan.js` (AD_SOZLESMESI): // MACARİSTAN KRALLIĞI — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026)
- `kronoloji_fransa.js` (AD_SOZLESMESI): // FRANSA — DEVLET KRONOLOJİSİ (FRANSA KRONOLOJİ oturumu, 21 Ağustos 2026)
- `kronoloji_ispanya.js` (AD_SOZLESMESI): // İSPANYA — DEVLET KRONOLOJİSİ (Kastilya-Aragon → Birleşik İspanya)
- `kronoloji_kirim.js` (AD_SOZLESMESI): // KRONOLOJI_KIRIM — Kırım Hanlığı (1441-1783) kronolojisi
- `kronoloji_gurcistan.js` (AD_SOZLESMESI): // KRONOLOJI_GURCISTAN — Gürcistan'ın ülke ölçekli kronolojisi (645-1921)
- `kronoloji_safevi.js` (AD_SOZLESMESI): // KRONOLOJI_SAFEVI — Safevî Devleti'nin (1501-1722/1736) kendi tarihyazımının
- `kronoloji_hollanda.js` (AD_SOZLESMESI): // HOLLANDA — Birleşik Provinsler ve Krallık (pilot, 22 Ağustos 2026)
- `kronoloji_naksa_dukaligi.js` (AD_SOZLESMESI): // ② NAKŞA (NAXOS) DUKALIĞI — Egeopelagos Dukalığı  (1207 → 1579)
- `kronoloji_atina_dukaligi.js` (AD_SOZLESMESI): // ③ ATİNA DUKALIĞI  (1205 → 1458-06-04)
- `kronoloji_katalan.js` (AD_SOZLESMESI): // ④ KATALAN DUKALIĞI — Atina-Neopatras Kumpanyası  (1311-03-15 → 1388)
- `kronoloji_rodos_sovalyeleri.js` (AD_SOZLESMESI): // EGE LATİN DEVLETLERİ — DERİN KRONOLOJİ (22 Ağustos 2026)
- `kronoloji_karakoyunlu.js` (AD_SOZLESMESI): // KARAKOYUNLU DEVLETİ — KRONOLOJİ · 1351-1469
- `kronoloji_lehistan.js` (AD_SOZLESMESI): // LEHİSTAN — LİTVANYA (Rzeczpospolita) KRONOLOJİSİ
- `kronoloji_venedik.js` (AD_SOZLESMESI): // VENEDİK CUMHURİYETİ — DEVLET KRONOLOJİSİ (pilot, 20 Ağustos 2026)
- `kronoloji_akkoyunlu.js` (AD_SOZLESMESI): // AKKOYUNLU DEVLETİ — KRONOLOJİ · 1340-1514
- `kronoloji_almanya.js` (AD_SOZLESMESI): // ALMANYA — DEVLET KRONOLOJİSİ (Kutsal Roma / Brandenburg-Prusya / Alman İmparatorluğu)
- `kronoloji_altinorda.js` (AD_SOZLESMESI): // KRONOLOJI_ALTINORDA — Altın Orda (Deşt-i Kıpçak Hanlığı) kronolojisi
- `kronoloji_anadolu.js` (BAGSIZ_COK_YOLUNA): // ANADOLU BEYLİKLERİ — KRONOLOJİ · altı künye tek dosyada
- `kronoloji_arabistan.js` (BAGSIZ_COK_YOLUNA): // ARABİSTAN — DEVLET KRONOLOJİSİ (1. tur, 22 Ağustos 2026)
- `kronoloji_balkan.js` (BAGSIZ_COK_YOLUNA): // BALKAN DEVLETLERİ — DEVLET KRONOLOJİSİ (1. tur, 22 Ağustos 2026)
- `kronoloji_bizans.js` (AD_SOZLESMESI): // BİZANS (DOĞU ROMA) İMPARATORLUĞU — KRONOLOJİ · 1281-1453
- `kronoloji_cin.js` (BAGSIZ_COK_YOLUNA): // ÇİN — YUAN · MİNG · QİNG (+ ÇİN CUMHURİYETİ'NİN AÇILIŞI) KRONOLOJİSİ
- `kronoloji_dogu_afrika.js` (BAGSIZ_COK_YOLUNA): // DOĞU AFRİKA — DEVLET KRONOLOJİLERİ (ilk tur, 22 Ağustos 2026)
- `kronoloji_guney_asya.js` (BAGSIZ_COK_YOLUNA): // GÜNEY ASYA KRONOLOJİSİ — Racput · Sind · Ladakh · Travankur · Nepal · Manipur
- `kronoloji_habsburg.js` (AD_SOZLESMESI): // HABSBURG AVUSTURYA — DEVLET KRONOLOJİSİ (pilot, 20 Ağustos 2026)
- `kronoloji_hindistan.js` (BAGSIZ_COK_YOLUNA): // KRONOLOJI_HINDISTAN — Hindistan'ın BİRLEŞİK kronolojisi (Delhi Sultanlığı →
- `kronoloji_ingiltere.js` (AD_SOZLESMESI): // İNGİLTERE / BÜYÜK BRİTANYA KRONOLOJİSİ
- `kronoloji_iran_ardillari.js` (BAGSIZ_COK_YOLUNA): // İRAN ARDILLARI — KRONOLOJİ
- `kronoloji_isvec.js` (AD_SOZLESMESI): // KRONOLOJI_ISVEC — İsveç Krallığı'nın kendi tarihyazımının ölçüsüyle kronoloji
- `kronoloji_italya_sehir.js` (BAGSIZ_COK_YOLUNA): —
- `kronoloji_japonya.js` (BAGSIZ_COK_YOLUNA): // KRONOLOJI_JAPONYA — Japonya'nın BİRLEŞİK kronolojisi (Kamakura'nın sonu →
- `kronoloji_kuzeyafrika.js` (BAGSIZ_COK_YOLUNA): // KUZEY AFRİKA — DEVLET KRONOLOJİLERİ (ilk tur, 22 Ağustos 2026)
- `kronoloji_memluk.js` (AD_SOZLESMESI): // MEMLÜK SULTANLIĞI — KRONOLOJİ · 1261-1517 (çekirdek kapsam 1281-1517)
- `kronoloji_misir.js` (BAGSIZ_COK_YOLUNA): // OSMANLI MISIRI ve KAVALALI HANEDANI — KRONOLOJİ · 1517-1922
- `kronoloji_orta_asya.js` (BAGSIZ_COK_YOLUNA): // KRONOLOJI_ORTA_ASYA — Altın Orda ardılı hanlıklar, Kazak Hanlığı, Tarım
- `kronoloji_ozbek.js` (BAGSIZ_COK_YOLUNA): // KRONOLOJİ — MÂVERÂÜNNEHİR ÖZBEK HANLIKLARI (Şeybânî/Buhara · Canoğulları ·
- `kronoloji_portekiz.js` (AD_SOZLESMESI): // PORTEKİZ KRALLIĞI — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026)
- `kronoloji_rusya.js` (AD_SOZLESMESI): // KRONOLOJI_RUSYA — Rusya'nın kendi tarihyazımının ölçüsüyle kronoloji
- `kronoloji_sirbistan.js` (BAGSIZ_COK_YOLUNA): // SIRBİSTAN — DEVLET KRONOLOJİSİ (1. tur, 22 Ağustos 2026)
- `kronoloji_timurlu.js` (AD_SOZLESMESI): // TİMURLULAR — DEVLET KRONOLOJİSİ (1. tur, 21 Ağustos 2026)

