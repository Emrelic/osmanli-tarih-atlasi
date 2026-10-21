# MEZOIR (Mezopotamya + Iran) — Tur 2 raporu

Web erisimi KISMEN VAR: WebFetch ile yalniz Vikipedi sayfalari acildi (aday/arac; her kayitta `kaynak:` basinda "Vikipedi (yalniz arac, tek dayanak degil)" etiketi ve sayfanin atfettigi akademik eserler ayri yazildi; o eserler dogrudan acilmadi). Bu yuzden hicbir kayit `okundu` yapilmadi; acilan sayfaya dayananlar `kismen-okundu`.

## 1. Sayilar
| Dilim | Kayit | okundu | kismen-okundu | taslak |
|---|---|---|---|---|
| A | 2 | 0 | 1 | 1 (uruk-iv-sehir-devleti) |
| B | 25 | 0 | 18 | 7 |
| C | 7 | 0 | 7 | 0 |
| D | 10 | 0 | 9 | 1 (masmugan) |
| E | 6 | 0 | 5 | 1 (kays) |
| Toplam | 50 | 0 | 40 | 10 |

- Eklenen 3: `bit-dakkuri` (B), `sacilar` (Sajid, D; mevcut TSV'de yok), `mihrabani-sistan` (E; f=1236 < 1281).
- Elenen 1 (`MEZOIR_ELENEN.json`): `part-persis-diger-yok` (toplu, polity degil).
- Taslak kalanlar: uruk-iv, uruk-v-utuhengal, der-krallik, babil-isin2-sonrasi, babil-asur-egemenliginde, zikirtu, susa-elam-sonrasi (B); masmugan; kays.
- Onemli tarih duzeltmeleri (eski deger her kaydin `ic_not`unda "Tur 1 taslak degeri"): aksak -2458/-2359; kisurra -1922/-1802; lullubi -2399/-0668; marhasi -2333/-1762; persis f -0131; adiabene -0163/0116 (Yahudilesme 1. yy MS, taslak -0014 yanlisti); gordyene -0164/-0069; sakastan-indo-part 0019/0226 (taslak t=0050 kisa kalmisti); bataih t 0983 -> 1018 (taslak hataliydi; Muhaddib al-Dawla ~1017/18'e dek); zenc 0869-09/0883-08 (ay); ferigunid 0801(yuzyil)/1010; simcurid 0913/1002; sebankare f 1030; hurmuz f 1001(yuzyil)/1622; nasri t 1236; karenid t 1106; teispid f -0674; ellipi/hatra f ilk tarihli an (kesinlik belirsiz).
- Esleme: TSV'ye karsi tarandi; `var-kisa`/`ardil-var` degisikligi yok; mevcut_id'ler TSV'de var (uruk-gec-kultur, isin-2, yeni-babil, elam-yeni, ahamenis). `sofene` TSV'de oldugu icin Sophene eklenmedi.

## 2. Ulasilamayan kaynaklar
- Encyclopaedia Iranica (iranicaonline.org, www'li/wwwsiz): her sayfada HTTP 403.
- TDV islamansiklopedisi.org.tr arama: zaman asimi (Dabuyiler, Zenc vb. TDV'de dogrulanamadi).
- Vikipedi 404: Masmughan, Zikirtu(404 degil, 750-521 MO verdi ama ad yok), Der, Qays/Kish, Nasri-Sistan (yalniz Mihrabani sayfasindaki selef notu), Kamnaskirids, Singara, Batiha kisa; Kharijites/Sistan; Second Sealand.
- Brill/EI/CHI/Pauly/Pleiades: hic acilmadi.

## 3. Hala sig / bulunamayanlar (raporundaki sig yerler)
- Ek Sumer sehirleri: Nippur sayfasi bagimsiz polity gostermiyor (kutsal merkez) -> eklenmedi; Zabalam, Girsu(=Lagas), Larak, Bad-tibira, Sippar, Marad icin sayfa okunmadi. Eridu ve Surupak'in "polity" niteligi zayif (kismen-okundu notlu; ELENEN adayi).
- Part alt vasalleri: Persis, Adiabene, Hatra, Osrhoene, Gordyene var; Kamnaskirid (Elymais/Susiana), Hyrcania, Margiana, Mesene ayrintisi, Singara/Izala bulunamadi/yazilmadi.
- Kuhistan Ismailileri: okunan sayfa tarih vermiyor (muhtasham yonetimi, Mogol baskisi 1256-1270); alamut-nizari kaydina bagli dusunulmeli, ayri kayit acilmadi.
- Haricî/Ayyar emirlikleri (Sistan Hâricîleri, Hamza b. Adrak, Ayyarlar): kaynak bulunamadi, yazilmadi. Saffari (mevcut) onculu.
- Ardalan: f cakismasi (Vikipedi 14. yy vs taslak 1169) — 14. yy ise 1281 sonrasi, kapsam disi.

## 4. Istekler
- Iranica ve TDV'ye erisimi olan bir oturum/makine (UMIT?) icin tur 3: Dabuyiler, Karenid, Cüstanid, Hasanuya, Ferigunid, Simcurid, Sebankare, Hurmuz, Ardalan, Kays, Zenc, Bataih, Persis, Adiabene, Gordyene.
- Kapsam kararlari: Anshan/Teispid (Elam-* ile ortusme), Proto-Elam Susa (kultur mu devlet mi), Eridu/Surupak, Bit-Dakkuri, Tanuhiler (konfederasyon), Karenid-Bavendi iliskisi, Ferigunid ve Sakastan bolge kodu, Zenc ve Simcurid "devlet" nitelikleri.
- Kurdistan bolge kodu yok: Hasanuya/Ardalan/Sebankare `iran` ile yazildi, `ic_not`ta belirtildi.
