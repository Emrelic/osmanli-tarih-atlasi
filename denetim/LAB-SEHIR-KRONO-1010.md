# LAB-SEHIR-KRONO-1010 — 50 şehrin kronolojisi × atlasın `s:` zinciri

> **Tür:** ÖLÇÜM / SINIFLANDIRMA. Veri DEĞİŞTİRİLMEDİ, tavana DOKUNULMADI, düzeltme/diff YAZILMADI.
> **Ölçülen ağaç:** `origin/main` @ `7e156d6352567764c741589d4f924b6506ffe1ba` (detached worktree `C:\atlas-krono-olcum`, 10 Ekim 2026).
> **Çerçeve:** önce D205 sınıfı (① devlet öldü→dönem KISALIR · ② aynı polity sürüyor→künye/dönem GENİŞLER · ③ ardıl geçti, toprak dolu→ARDIL kimlik), sonra eksik/fazla/ters devir etiketi. D207: atlas (komşu kayıt, künye günü, koordinat) DAYANAK SAYILMADI; künyeye yalnız "ardıl kimlik VAR MI, penceresi tutuyor mu" sorusu için bakıldı (D205 ön koşulu).
> **Durum:** TAMAM (10 Ekim 2026). Ek: `LAB-SEHIR-KRONO-1010.csv` (143 kalem).

## 1. Seçim yöntemi

**"Kaynaksız s: dönemi" tanımı** — `arac/denetle.py::kaynaksizlik_olc` + `_kaynak_dolu` ile birebir (KAYNAK-TAVAN'ın kullandığı ölçüt):
- Kaynak alanı DOLU sayılır: boş olmayan dizgi (ya da truthy değer); `bulunamadı` da DOLUDUR.
- Kayıt düzeyinde `kaynak:` doluysa kaydın HİÇBİR dönemi kaynaksız sayılmaz (denetle.py bu kaydı kovaya koymuyor).
- Aksi hâlde, `s:` dizisindeki `kaynak:` alanı dolu olmayan her dönem = 1 kaynaksız dönem.
- `d:` (Osmanlı), `v:` (tâbi), `isg:` dönemleri SAYILMADI (görev: `s:`).
- Yükleme: `arac/girdi.py::yukle(sessiz=True)` (atlasın kendi yükleyicisi, 4300 kayıt; yamalar dahil).

**Sıralama:** (1) kaynaksız `s:` sayısı ↓, (2) `s:` zincirindeki sahip değişimi (ardışık `d:` farklı) ↓, (3) ad (alfabetik, deterministik bağ çözücü).
**Hariç:** `tur:"bolge"` (dolgu noktası — şehir değil; ör. *Ağraham burnu* 10 kaynaksız dönemle 10. sıraya girerdi).

**Coğrafya (TDV kapsamı: Anadolu, Balkanlar, Kafkasya, Irak, Suriye, Mısır, İran)** — `lat/lon` kutuları (koordinat burada yalnız SEÇİM için, tarih kanıtı olarak değil):
Balkan/Macar 36–48.6K·13–30D (İtalya/Sicilya/Avusturya kenarı çıkarıldı) · Anadolu 35.5–42.3K·26–45D · Kafkas 38.5–44.5K·40–51D · Irak/Suriye 29–37.5K·35–48.5D · Mısır 22–31.7K·24.7–35D · İran 25–40K·44–63.5D, eksi Afganistan (D>61.3: Herat), Türkmenistan (D>53.5 ve K>37.5: Merv, Nesâ, Ebîverd, Dihistan, Kızılarvat), Arap kıyısı (48<D<51.5, K<28: Katîf, Lahsa, Cübeyl). Kutu etiketleri kabadır: Dizfûl/Havîza/Zencan "Irak/Suriye" kutusuna düştü ama İran'dadır; Şerur "Anadolu" kutusuna düştü ama Nahçıvan'dadır.
Kutudaki `s:` taşıyan şehir kaydı: **824**; kaynaksız dönemi ≥1 olan: **529**.

**Bağ:** 50. sıra Meşhed (9 kaynaksız · 7 değişim). Aynı (9·7) değerde Reşt alfabe ile dışarıda kaldı.

🔴 **Seçimin kendisi bir bulgu:** 50'nin 38'i İran, 7'si Kafkas, 4'ü Irak/İran sınırı, 1'i Nahçıvan. **Anadolu/Balkan/Mısır'dan TEK şehir yok.** Sebep: o bölgelerdeki kayıtların çoğu kayıt düzeyinde `kaynak:` taşıyor (denetle.py tanımıyla kaynaksız sayılmıyor) ve zincirleri kısa. Gecenin bilinen örnekleri (Harput, Çemişgezek, Şebinkarahisar, Berka, Budin) bu ölçütle listeye GİRMİYOR — Harput'un kayıt `kaynak:"harput"` alanı var. İran/Kafkas listesi büyük ölçüde **şablon zincirlerden** oluşuyor (aynı 9-13 halkalı dizi onlarca şehre kopyalanmış) ⇒ bulgular aile (şablon) düzeyinde yazıldı, şehir tabloları aileye bağlandı.

## 2. 50 şehir

| # | Yerleşim | dosya | bölge (seçim kutusu) | kaynaksız s: | s: toplam | sahip değişimi |
|---|---|---|---|---|---|---|
| 1 | Astara | yerlesimler.js | Iran | 13 | 14 | 13 |
| 2 | Lenkeran | yerlesimler.js | Kafkas | 13 | 14 | 13 |
| 3 | Bakü | yerlesimler.js | Kafkas | 12 | 13 | 12 |
| 4 | Berde (Karabağ) | yerlesimler.js | Kafkas | 11 | 12 | 11 |
| 5 | Nahçıvan | yerlesimler.js | Kafkas | 11 | 12 | 11 |
| 6 | Ordubad | yerlesimler.js | Kafkas | 11 | 12 | 11 |
| 7 | Şerur (Sharur) | yerlesimler_kalite4.js | Anadolu | 11 | 12 | 11 |
| 8 | Bağdat | yerlesimler.js | Irak/Suriye | 11 | 12 | 10 |
| 9 | Mahmudâbâd | yerlesimler.js | Kafkas | 10 | 11 | 10 |
| 10 | Erdekân | yerlesimler.js | Iran | 10 | 10 | 9 |
| 11 | Erdistan | yerlesimler.js | Iran | 10 | 10 | 9 |
| 12 | Gulpâygân | yerlesimler.js | Iran | 10 | 10 | 9 |
| 13 | Isfahan | yerlesimler.js | Iran | 10 | 10 | 9 |
| 14 | Kazvin | yerlesimler.js | Iran | 10 | 10 | 9 |
| 15 | Kum | yerlesimler.js | Iran | 10 | 10 | 9 |
| 16 | Kâşân | yerlesimler.js | Iran | 10 | 10 | 9 |
| 17 | Nâin | yerlesimler.js | Iran | 10 | 10 | 9 |
| 18 | Tahran | yerlesimler.js | Iran | 10 | 10 | 9 |
| 19 | Bistâm | yerlesimler.js | Iran | 10 | 10 | 8 |
| 20 | Dâmgan | yerlesimler.js | Iran | 10 | 10 | 8 |
| 21 | Simnân | yerlesimler.js | Iran | 10 | 10 | 8 |
| 22 | Sâve | yerlesimler.js | Iran | 10 | 10 | 8 |
| 23 | Ahvaz | yerlesimler.js | Iran | 9 | 9 | 8 |
| 24 | Behbehân | yerlesimler.js | Iran | 9 | 9 | 8 |
| 25 | Bem | yerlesimler.js | Iran | 9 | 9 | 8 |
| 26 | Bempûr | yerlesimler.js | Iran | 9 | 9 | 8 |
| 27 | Bender Lengeh | yerlesimler.js | Iran | 9 | 9 | 8 |
| 28 | Bender Rîg | yerlesimler.js | Iran | 9 | 9 | 8 |
| 29 | Cehrom | yerlesimler.js | Iran | 9 | 9 | 8 |
| 30 | Câsk | yerlesimler.js | Iran | 9 | 9 | 8 |
| 31 | Cîruft | yerlesimler.js | Iran | 9 | 9 | 8 |
| 32 | Dizfûl | yerlesimler.js | Irak/Suriye | 9 | 9 | 8 |
| 33 | Dârâb | yerlesimler.js | Iran | 9 | 9 | 8 |
| 34 | Ebrekûh | yerlesimler.js | Iran | 9 | 9 | 8 |
| 35 | Fesâ | yerlesimler.js | Iran | 9 | 9 | 8 |
| 36 | Firûzâbâd | yerlesimler.js | Iran | 9 | 9 | 8 |
| 37 | Havîza | yerlesimler.js | Irak/Suriye | 9 | 9 | 8 |
| 38 | Hâş | yerlesimler.js | Iran | 9 | 9 | 8 |
| 39 | Kâzerûn | yerlesimler.js | Iran | 9 | 9 | 8 |
| 40 | Lâr | yerlesimler.js | Iran | 9 | 9 | 8 |
| 41 | Mînâb | yerlesimler.js | Iran | 9 | 9 | 8 |
| 42 | Rafsencân | yerlesimler.js | Iran | 9 | 9 | 8 |
| 43 | Râmhürmüz | yerlesimler.js | Iran | 9 | 9 | 8 |
| 44 | Sircân | yerlesimler.js | Iran | 9 | 9 | 8 |
| 45 | Zencan | yerlesimler.js | Irak/Suriye | 9 | 10 | 8 |
| 46 | Çâhbahâr | yerlesimler.js | Iran | 9 | 9 | 8 |
| 47 | Şeki (Nuha) | yerlesimler.js | Kafkas | 9 | 9 | 8 |
| 48 | Şüşter | yerlesimler.js | Iran | 9 | 9 | 8 |
| 49 | Esterâbâd (Gürgân) | yerlesimler.js | Iran | 9 | 9 | 7 |
| 50 | Meşhed | yerlesimler.js | Iran | 9 | 9 | 7 |
## 3. Sonuç sayıları

**143 uyuşmazlık kalemi** (şehir × konu). Önce D205, sonra etiket:

| D205 sınıfı | kalem | açıklama |
|---|---|---|
| ① devlet henüz yok/öldü → dönem KISALIR | **49** | TEK sistemik desen: Bağdat dışındaki 49 şehrin hepsinde `zend` 1747-06-20'de başlıyor; TDV `zendler` İsfahan 1750 / fiilî iktidar 1751 başı, künye `zend` f:1751-01-01 (veri künyeyi aşıyor) |
| ② aynı polity sürüyor → önceki dönem GENİŞLER | **14** | hepsinde önceki kimliğin künyesi pencereyi zaten kapsıyor (`afsar` →1796, `muzafferi` →1393, `ilhanli` →1353, `timurlu` →1507) ⇒ veri künyeden dar |
| ③ ardıl geçti, toprak dolu → ARDIL kimlik | **44** | 19'unda künye VAR ve penceresi tutuyor (`galzay`, `incu`, `muzafferi`, `rusya`, `buhara`, `karakoyunlu`) · **18'i BLOKE** (hanlık/Müşa'şa' künyesi YOK, ya da `kacar` f:1789 1779-1786 başlangıçlarını kapsamıyor) · 7'si ADAY (doğru kimlik kaynakta doğrulanmadı, künye de yok) |
| ÖLÇÜLEMEDİ | **36** | §6 |

| etiket (bir kalem iki etiket alabilir) | kalem |
|---|---|
| fazla (kimlik/dönem kaynaktan uzun ya da desteksiz) | 99 |
| eksik (kaynakta olan sahip zincirde yok) | 47 |
| ters devir | **0** — hiçbir kalemde kaynak, zincirin devir YÖNÜNÜ tersine çeviren bir sıra vermedi; uyuşmazlıkların hepsi erken/geç devir ya da eksik ara sahip |

**Kaynak erişimi (50 şehir):**
- **15** şehrin KENDİ TDV maddesi çekildi ve okunabildi: Isfahan, Kazvin, Tahran, Kum, Kâşân, Zencan, Nahçıvan, Bakü, Lenkeran, Şeki, Bağdat, Meşhed (`meshed--iran`), Esterâbâd, Şüşter (`suster`), Ahvaz.
- **3** şehir başka bir TDV maddesinde ADIYLA geçiyor: Dizfûl (`huzistan`), Dâmgan, Simnân (`serbedariler`).
- **32** şehir için yalnız bölge/hanedan cümlesi (D208: şehir tanıklığı DEĞİL) ya da hiçbiri — şehir düzeyinde **kaynak doğrulanmadı**. Bunların 12'sinde (Mekrân/Hürmüz kıyısı 6, Lâr, Ebrekûh, Sâve, Mahmudâbâd, Astara + Irâk-ı Acem'in küçük 4'ü kısmen) sistemik ① dışında ölçülen kalem yok — gerisi ÖLÇÜLEMEDİ.
- Çekilen ama SAYILMAYAN sayfalar (arama-sonucu sayfası / yanlış madde, D211⑦): `cobaniler`, `melik-esref`, `serbedarlar`, `meshed` (terim maddesi), `havize`, `tuster` (yalnız gönderme), `luristan` (Lür-i Büzürg ayrıntısı yok), `musasailer`, `save`, `damgan`, `kazerun`, `behbehan`, `lar` (yalnız gönderme), `mekran`, `ordubad`. Britannica (`/topic/Chobanid-dynasty`) ve Iranica (`/articles/chobanids`) **HTTP 403** — kullanılmadı. EB1911 denenmedi. Önceki `scratchpad\tdv\*.html` sayfaları bu 50 şehirle kesişmiyor; hiçbiri kullanılmadı.
- ⚠️ Alıntılar WebFetch'in özetleyici modelinden geçti (sayfa ham metni değil). Gün düzeyinde bir düzeltme yazılacaksa ilgili cümle sayfadan elle yeniden okunmalı (D211⑧).

## 4. Şablon aileleri — ne bulundu

Zincirler şehir şehir değil AİLE AİLE yazılmış (aynı halkalar, aynı günler). Bulguların çoğu aile düzeyinde geçerli; şehir tabloları (§7) her kalemin kanıt düzeyini ayrıca yazıyor.

| aile | şehirler | atlasın şablonu | kaynakla ana uyuşmazlık |
|---|---|---|---|
| A Azerbaycan/Arrân/Talış | Astara, Lenkeran, Berde, Nahçıvan, Ordubad, Şerur | ilhanli→**celayirli 1340**→timurlu 1386→karakoyunlu 1408→akkoyunlu 1468→safevi 1501→(rusya 1723)→afsar 1736→**zend 1747→kacar 1794**→rusya 1813/1828 | Celâyirli Azerbaycan'ı 1358'de aldı (TDV celayirliler) ⇒ 1340-1358 ③ ADAY (Çobanî künyesi yok) · 1747 sonrası HANLIKLAR (Nahçıvan, Karabağ, Talış) — Zend Kafkas'ta yok ⇒ ③ BLOKE · Lenkeran 1813-1826 Rus ⇒ ③ eksik |
| B Şirvan | Bakü, Mahmudâbâd, Şeki | ilhanli→sirvansah→safevi 1538→rusya→afsar→**zend 1747→kacar 1794**→rusya 1813 | Bakü Hanlığı 1747, Şeki Hanlığı 1743/47 (TDV) ⇒ ③ BLOKE · Şeki Safevî 1551, veri 1538 ⇒ ③ ADAY |
| C Bağdat | Bağdat | ilhanli→celayirli 1335-12-01→… | Celâyirli 1339 (TDV) ⇒ ② · Karakoyunlu 1410 (veri 1411) ⇒ ③ |
| D Irâk-ı Acem | Erdekân, Erdistan, Gulpâygân, Isfahan, Kazvin, Kum, Kâşân, Nâin, Tahran | ilhanli→**incu 1335**→muzafferi 1357→**timurlu 1387-11-01**→karakoyunlu 1452→akkoyunlu 1469→**safevi 1503→1736** (kesintisiz)→afsar→zend 1747→**kacar 1794** | `incu` yalnız "Fars ve İsfahan" (TDV inculular) — Kazvin/Tahran/Kum/Kâşân için kimlik desteksiz ⇒ ÖLÇÜLEMEDİ · Şah Mansûr 1391'de "bütün Irak'a hâkim" ⇒ İsfahan timurlu 1387 ② · **Afgan 1722-1729 HİÇBİR şehirde yok** (İsfahan, Kazvin, Tahran, Kâşân TDV'de var) ⇒ ③, `galzay` künyesi VAR · Kazvin Karakoyunlu 1447 (veri 1452) ⇒ ③ · Tahran Kaçar başşehri 1779/1786 sonrası ⇒ ③ BLOKE (`kacar` f:1789) · Muhammed Hasan Kaçar 1756-1759 Irâk-ı Acem ⇒ ③ BLOKE |
| E Kûmis | Bistâm, Dâmgan, Simnân | ilhanli→**serbedariler 1337-09-09**→timurlu 1387-11-01→… | 1337-09-09 = Serbedâr'ın **Sebzevâr**'ı aldığı gün (TDV); Dâmgan/Simnân sonra, tarihsiz alındı ⇒ ② + **D207: gün komşudan BEYANSIZ devralınmış** |
| F Sâve/Zencan | Sâve, Zencan | ilhanli→celayirli 1340→timurlu 1383→karakoyunlu 1410→… | Zencan 1428-29'da hâlâ Timurlu valisinde (TDV) ⇒ ② · Zencan Kaçar 1782-83 (TDV) ⇒ ③ BLOKE |
| G Hûzistan | Ahvaz, Behbehân, Dizfûl, Havîza, Râmhürmüz, Şüşter | ilhanli→lur-i-buzurg 1335→timurlu 1393→karakoyunlu 1452→akkoyunlu 1469→safevi 1508→… | **Müşa'şa' hanedanı (Havîze merkezli, ~70 yıl bağımsız, 1508 sonrası Safevî tâbii) zincirde HİÇ yok** (TDV huzistan, ahvaz) ⇒ ③ BLOKE (künye yok) · Şüşter Muzafferî 1375 (TDV suster) ⇒ ③ |
| H1 Fars | Kâzerûn, Fesâ, Firûzâbâd, Dârâb, Cehrom, Bender Rîg | ilhanli→**muzafferi 1335-12-01**→timurlu 1393→… | Fars 1325-1353 İncû'da (TDV inculular) ⇒ ③, `incu` künyesi VAR (bölge cümlesi) |
| H2 Kirman | Bem, Cîruft, Rafsencân, Sircân | aynı şablon | Kirman Muzafferî 1340-41 (TDV kirman) ⇒ ② · Afgan 1720/1722 ⇒ ③ (bölge cümlesi) |
| H3 Mekrân/Hürmüz/Lâr/Yezd | Bempûr, Câsk, Çâhbahâr, Hâş, Bender Lengeh, Mînâb, Lâr, Ebrekûh | aynı Fars şablonu | Muzafferî'nin Mekrân/Hürmüz kıyısını tuttuğuna dair kaynak yok; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama kullanılmamış ⇒ kaynak doğrulanmadı, ÖLÇÜLEMEDİ |
| I Horasan/Gürgân | Esterâbâd, Meşhed | ilhanli→serbedariler 1337→timurlu→(buhara/mar'aşî)→safevi 1510→afsar 1736→**zend 1747→kacar 1794** | **Meşhed:** Şâhruh (Afşar) Ekim 1748-1796 Meşhed'de (TDV avsarlilar) ⇒ ②, `afsar` künyesi 1736→1796 ZATEN geniş, yalnız veri dar · Özbek 1589-1598 ⇒ ③ · **Esterâbâd:** Kaçar Muhammed Hasan Han 1747-1759 Esterâbâd'da (TDV kacarlar) ⇒ ③ BLOKE · Togay Timur 1353'e dek Gürgân'da ⇒ ② |

**En net 10 bulgu (kaynak ile):**
1. **Meşhed 1747-1794 `zend`** — Şâhruh Afşar Meşhed'de 1748-1796 hüküm sürdü; Zend Meşhed'i tutmadı. ② (afşar sürer), künye hazır. [avsarlilar](https://islamansiklopedisi.org.tr/avsarlilar) · [meshed--iran](https://islamansiklopedisi.org.tr/meshed--iran) · [zendler](https://islamansiklopedisi.org.tr/zendler)
2. **Afgan (Galzay) 1722-1729 boşluğu** — İsfahan (1722), Kazvin (1722-23), Tahran (→1728), Kâşân, Kirman (1720/1722): zincir `safevi` kesintisiz. ③, `galzay` künyesi var. [isfahan](https://islamansiklopedisi.org.tr/isfahan) · [kazvin](https://islamansiklopedisi.org.tr/kazvin) · [tahran](https://islamansiklopedisi.org.tr/tahran) · [kirman](https://islamansiklopedisi.org.tr/kirman)
3. **Kafkas hanlıkları 1747-1813/1828** — Bakü, Şeki, Nahçıvan, Karabağ, Talış hanlıkları yerine `zend`+`kacar`. ③ BLOKE (künye yok). [baku](https://islamansiklopedisi.org.tr/baku) · [seki](https://islamansiklopedisi.org.tr/seki) · [nahcivan](https://islamansiklopedisi.org.tr/nahcivan) · [karabag](https://islamansiklopedisi.org.tr/karabag) · [lenkeran](https://islamansiklopedisi.org.tr/lenkeran)
4. **Hûzistan'da Müşa'şa' yok** — Ahvaz, Dizfûl, Şüşter ~1440-1508 Müşa'şa' elinde; zincir Karakoyunlu→Akkoyunlu. ③ BLOKE. [huzistan](https://islamansiklopedisi.org.tr/huzistan) · [ahvaz](https://islamansiklopedisi.org.tr/ahvaz)
5. **`zend` 1747 sistemik başlangıç** — 49 şehirde; TDV 1750/1751, künye 1751. ①. [zendler](https://islamansiklopedisi.org.tr/zendler)
6. **Esterâbâd 1747-1759 Kaçar** — Muhammed Hasan Han'ın üssü; zincir `zend`. ③ BLOKE (`kacar` f:1789). [kacarlar](https://islamansiklopedisi.org.tr/kacarlar)
7. **Lenkeran 1813-1826 Rus** — 1 Ocak 1813 Rus zaptı, 1826 İran dönüşü; zincir `kacar` 1794→1828 kesintisiz. ③, `rusya` künyesi var. [lenkeran](https://islamansiklopedisi.org.tr/lenkeran)
8. **Azerbaycan `celayirli` 1340** — TDV Üveys'in Azerbaycan/Tebriz'i 1358'de aldığını yazıyor; 6 şehirde 18 yıl erken. ③ ADAY (Çobanî künyesi yok, sahip doğrulanmadı). [celayirliler](https://islamansiklopedisi.org.tr/celayirliler)
9. **Fars `muzafferi` 1335** — İncû Fars'ı 1325-1353 tuttu, Şîraz 1353'te Muzafferî'ye geçti. ③, `incu` künyesi var (bölge cümlesi, D208). [inculular](https://islamansiklopedisi.org.tr/inculular)
10. **Kûmis `serbedariler` 1337-09-09** — Sebzevâr'ın günü Dâmgan/Simnân/Bistâm'a beyansız taşınmış (D207); TDV bu şehirlerin alınışını tarihlemiyor. ② (Togay Timur/İlhanlı sürer). [serbedariler](https://islamansiklopedisi.org.tr/serbedariler)

Yakın adaylar: Zencan `karakoyunlu` 1410 ↔ TDV 1428-29'da hâlâ Timurlu (②, [zencan](https://islamansiklopedisi.org.tr/zencan)); Tahran Kaçar başşehri 1779/86 ↔ `kacar` f:1789 (③ BLOKE); Bağdat `celayirli` 1335 ↔ TDV 1339 (②, [bagdat](https://islamansiklopedisi.org.tr/bagdat)).

**Gecenin bilinen örnekleri:** Harput, Çemişgezek, Şebinkarahisar, Berka, Budin bu ölçütle 50'ye GİRMEDİ (kayıt düzeyinde `kaynak:` taşıyorlar ya da zincirleri kısa). Bu rapor onları yeniden ölçmedi.

## 5. Özet tablo (ÖLÇÜLEMEDİ hariç; sistemik ① tek satır)

| şehir | uyuşmazlık (kısa) | D205 | eksik/fazla/ters | kanıt | kaynak URL |
|---|---|---|---|---|---|
| **49 şehir** (Bağdat hariç hepsi) | `zend` 1747-06-20 başlangıcı; TDV 1750/51, künye f:1751 | ① | fazla (zend erken) | hanedan maddesi | https://islamansiklopedisi.org.tr/zendler |
| Astara | `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/celayirliler |
| Astara | 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Talış Hanlığı (aday) diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | komşu madde (Lenkeran) — gün devralınmadı (D207) | https://islamansiklopedisi.org.tr/lenkeran ; https://islamansiklopedisi.org.tr/zendler |
| Lenkeran | `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/celayirliler |
| Lenkeran | 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Talış Hanlığı diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | şehir | https://islamansiklopedisi.org.tr/lenkeran ; https://islamansiklopedisi.org.tr/zendler |
| Lenkeran | `kacar` 1794→1828-02-22 kesintisiz; TDV: Ruslar 1 Ocak 1813'te Lenkeran'ı aldı, 1826'da İran döndü, 1828 Türkmençay | ③ | eksik (rusya 1813-1826) | şehir | https://islamansiklopedisi.org.tr/lenkeran |
| Bakü | 1747-1813 `zend`→`kacar`; TDV: 'Bağımsız Bakü Hanlığı kurulduğunda (1747)' — Gülistan 1813'e dek | ③ | eksik (Bakü Hanlığı) / fazla (zend, kacar) | şehir | https://islamansiklopedisi.org.tr/baku ; https://islamansiklopedisi.org.tr/zendler |
| Berde (Karabağ) | `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/celayirliler |
| Berde (Karabağ) | 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Karabağ Hanlığı (Penah Ali, 1747/48 → 1822 lağv) diyor; TDV zendler Kafkas'ta Zend hâkimiyeti … | ③ | eksik (hanlık) / fazla (zend, kacar) | bölge maddesi | https://islamansiklopedisi.org.tr/karabag ; https://islamansiklopedisi.org.tr/zendler |
| Nahçıvan | `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/celayirliler |
| Nahçıvan | 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Nahçıvan Hanlığı diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | şehir | https://islamansiklopedisi.org.tr/nahcivan ; https://islamansiklopedisi.org.tr/zendler |
| Nahçıvan | `timurlu` 1386-01-01; TDV 789 (1387) | ② | fazla (timurlu ~1 yıl erken) | şehir | https://islamansiklopedisi.org.tr/nahcivan |
| Ordubad | `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/celayirliler |
| Ordubad | 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Nahçıvan Hanlığı (aday) diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/nahcivan ; https://islamansiklopedisi.org.tr/zendler |
| Şerur (Sharur) | `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/celayirliler |
| Şerur (Sharur) | 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Nahçıvan ya da Revan Hanlığı (aday) diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/nahcivan ; https://islamansiklopedisi.org.tr/zendler |
| Bağdat | `celayirli` 1335-12-01; TDV: 'Hasan-ı Büzürg 1339'da Bağdat'a yerleşti' | ② | fazla (celayirli ~4 yıl erken) | şehir | https://islamansiklopedisi.org.tr/bagdat |
| Bağdat | `karakoyunlu` 1411-01-01; TDV '1410-1467 yılları arasında Karakoyunlu' | ③ | eksik (~1 yıl) | şehir | https://islamansiklopedisi.org.tr/bagdat |
| Isfahan | `timurlu` 1387-11-01→1452; TDV muzafferiler: 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)', hanedan 1393'te biter | ② | fazla (timurlu erken) / eksik (muzafferi ~1388-1393) | bölge cümlesi (D208) + şehir (1387 katliamı) | https://islamansiklopedisi.org.tr/muzafferiler ; https://islamansiklopedisi.org.tr/isfahan |
| Isfahan | 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | şehir | https://islamansiklopedisi.org.tr/isfahan |
| Isfahan | 1756-1759: TDV kacarlar Muhammed Hasan Han'ın Irâk-ı Acem'i ele geçirdiğini yazıyor; zincir `zend` | ③ | eksik (kaçar 1756-1759) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kacarlar |
| Kazvin | `karakoyunlu` 1452; TDV kazvin: Cihan Şah Kazvin'i 851/1447'de kattı (öncesinde Kara Yûsuf döneminde de bir Karakoyunlu dönemi, tarihsiz) | ③ | eksik (karakoyunlu 1447-1452) / fazla (timurlu) | şehir | https://islamansiklopedisi.org.tr/kazvin |
| Kazvin | 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | şehir | https://islamansiklopedisi.org.tr/kazvin |
| Kâşân | 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | şehir (tarihsiz) | https://islamansiklopedisi.org.tr/kasan |
| Tahran | 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | şehir | https://islamansiklopedisi.org.tr/tahran |
| Tahran | `zend` →1794, `kacar` 1794→; TDV tahran: Kerim Han'ın ölümü (1779) ardından Ağa Muhammed Rey'de tahta çıktı, Tahran Kaçar başşehri; TDV kacarlar 17… | ③ | fazla (zend) / eksik (kacar ~1779/1786-1794) | şehir | https://islamansiklopedisi.org.tr/tahran ; https://islamansiklopedisi.org.tr/kacarlar |
| Bistâm | `serbedariler` 1337-09-09 = TDV'nin SEBZEVÂR'ı alma günü; TDV Dâmgan/Simnân'ın alınışını TARİHSİZ, Togay Timur'un başşehriyle birlikte anlatıyor | ② | fazla (serbedar erken; gün komşudan BEYANSIZ) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/serbedariler |
| Dâmgan | `serbedariler` 1337-09-09 = TDV'nin SEBZEVÂR'ı alma günü; TDV Dâmgan/Simnân'ın alınışını TARİHSİZ, Togay Timur'un başşehriyle birlikte anlatıyor | ② | fazla (serbedar erken; gün komşudan BEYANSIZ) | hanedan maddesi, şehir adıyla | https://islamansiklopedisi.org.tr/serbedariler |
| Simnân | `serbedariler` 1337-09-09 = TDV'nin SEBZEVÂR'ı alma günü; TDV Dâmgan/Simnân'ın alınışını TARİHSİZ, Togay Timur'un başşehriyle birlikte anlatıyor | ② | fazla (serbedar erken; gün komşudan BEYANSIZ) | hanedan maddesi, şehir adıyla | https://islamansiklopedisi.org.tr/serbedariler |
| Ahvaz | Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter… | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | şehir (adıyla) | https://islamansiklopedisi.org.tr/huzistan ; https://islamansiklopedisi.org.tr/ahvaz |
| Behbehân | Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter… | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/huzistan |
| Bem | `muzafferi` 1335-12-01; TDV kirman: 'Kirman 741'de (1340-41) Muzafferîler … ele geçirildi' | ② | fazla (muzafferi ~5 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kirman |
| Bem | 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kirman |
| Bender Rîg | `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/inculular ; https://islamansiklopedisi.org.tr/muzafferiler |
| Cehrom | `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/inculular ; https://islamansiklopedisi.org.tr/muzafferiler |
| Cîruft | `muzafferi` 1335-12-01; TDV kirman: 'Kirman 741'de (1340-41) Muzafferîler … ele geçirildi' | ② | fazla (muzafferi ~5 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kirman |
| Cîruft | 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kirman |
| Dizfûl | Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter… | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | şehir (adıyla) | https://islamansiklopedisi.org.tr/huzistan |
| Dârâb | `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/inculular ; https://islamansiklopedisi.org.tr/muzafferiler |
| Fesâ | `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/inculular ; https://islamansiklopedisi.org.tr/muzafferiler |
| Firûzâbâd | `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/inculular ; https://islamansiklopedisi.org.tr/muzafferiler |
| Havîza | Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter… | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/huzistan |
| Kâzerûn | `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/inculular ; https://islamansiklopedisi.org.tr/muzafferiler |
| Rafsencân | `muzafferi` 1335-12-01; TDV kirman: 'Kirman 741'de (1340-41) Muzafferîler … ele geçirildi' | ② | fazla (muzafferi ~5 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kirman |
| Rafsencân | 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kirman |
| Râmhürmüz | Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter… | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/huzistan |
| Sircân | `muzafferi` 1335-12-01; TDV kirman: 'Kirman 741'de (1340-41) Muzafferîler … ele geçirildi' | ② | fazla (muzafferi ~5 yıl erken) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kirman |
| Sircân | 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | bölge cümlesi (D208) | https://islamansiklopedisi.org.tr/kirman |
| Zencan | `karakoyunlu` 1410-01-01; TDV zencan: 832 (1428-29) Zencan hâlâ Timurlu valisi Hoca Yûsuf'un idaresinde, Karakoyunlu İskender sonra aldı | ② | fazla (karakoyunlu ≥18 yıl erken) / eksik (timurlu) | şehir | https://islamansiklopedisi.org.tr/zencan |
| Zencan | `zend` →1794 / `kacar` 1794→; TDV zencan: 1197 (1782-83) Ağa Muhammed'in hâkimiyetine girdi | ③ | fazla (zend) / eksik (kacar 1782/83-1794) | şehir | https://islamansiklopedisi.org.tr/zencan |
| Şeki (Nuha) | `safevi` 1538-01-01'de başlıyor; TDV seki: Safevî saldırısı 1548, Şah Tahmasb 1551 | ③ | fazla (safevi ~13 yıl erken) | şehir | https://islamansiklopedisi.org.tr/seki |
| Şeki (Nuha) | 1747-1813 `zend`→`kacar`→`rusya`; TDV: Şeki Hanlığı (1743 kuruldu, 1747 tam bağımsız) → 21 Mayıs 1805 Rus tâbiiyeti → 1819 ilhak | ③ | eksik (Şeki Hanlığı) / fazla (zend, kacar; rusya s: 1813-1819 erken) | şehir | https://islamansiklopedisi.org.tr/seki ; https://islamansiklopedisi.org.tr/zendler |
| Şüşter | Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter… | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | şehir (adıyla) | https://islamansiklopedisi.org.tr/huzistan ; https://islamansiklopedisi.org.tr/suster |
| Şüşter | `lur-i-buzurg` 1335→1393; TDV suster: '1375'te Muzafferîler'in, ardından Timurlular'ın hâkimiyeti' | ③ | eksik (muzafferi 1375-~1393) / fazla (lur-i-buzurg) | şehir | https://islamansiklopedisi.org.tr/suster |
| Esterâbâd (Gürgân) | `serbedariler` 1337-09-09; TDV serbedariler: Gürgân Togay Timur'un başşehriydi, Serbedâr onu sonra aldı; Togay 13 Aralık 1353'te öldürüldü | ② | fazla (serbedar erken) / eksik (ilhanli-Togay) | hanedan maddesi, şehir adıyla (Gürgân) | https://islamansiklopedisi.org.tr/serbedariler |
| Esterâbâd (Gürgân) | 1747-1794 `zend`; TDV kacarlar: Muhammed Hasan Han 1747 Esterâbâd, 1749 beylerbeyi, 1750 bağımsız (Esterâbâd/Cürcân/Mâzenderan/Gîlân), öldü 1759; A… | ③ | eksik (kaçar 1747-1759, ~1779-1794) / fazla (zend) | hanedan maddesi, şehir adıyla | https://islamansiklopedisi.org.tr/kacarlar |
| Meşhed | 1747-1794 `zend`; TDV avsarlilar: Şâhruh Meşhed'de Ekim 1748'de tahta çıktı, 1796'ya dek; TDV meshed--iran: Horasan Dürrânî'ye tâbi (1750/1754); TD… | ② | fazla (zend) / eksik (afşar 1747-1796) | şehir | https://islamansiklopedisi.org.tr/avsarlilar ; https://islamansiklopedisi.org.tr/meshed--iran ; https://islamansiklopedisi.org.tr/zendler |
| Meşhed | `kacar` 1794-01-01; TDV: Ağa Muhammed Şâhruh'u idam ettirdi (1796), birleştirme 1218/1803 | ② | fazla (kacar ~2-9 yıl erken) | şehir | https://islamansiklopedisi.org.tr/avsarlilar ; https://islamansiklopedisi.org.tr/meshed--iran |
| Meşhed | 1589-1598 Özbek işgali zincirde yok; TDV: 'Şah I. Abbas Meşhed'i ancak dokuz yıl sonra geri alabildi' | ③ | eksik (buhara) | şehir | https://islamansiklopedisi.org.tr/meshed--iran |

## 6. ÖLÇÜLEMEDİ kovası (36 kalem, adıyla)

| şehir | konu | neden ölçülemedi |
|---|---|---|
| Astara | Kimlik belirsiz: koordinat İran Astara'sı ile Azerbaycan Astara'sı arasında; zincir 1828'den sonra `rusya` diyor (Azerbaycan yakası) | kaynak doğrulanmadı; zincir Lenkeran'la birebir aynı (şablon) |
| Bakü | `sirvansah` →1538-10-01; TDV baku '1501 … Şah İsmâil tarafından ele geçirildi' | 1501 zapt mı, 1538 ilhak mı: tâbiiyet/sahiplik ayrımı kaynak cümlesinden çıkmıyor |
| Bakü | `rusya` →1735-03-21; TDV baku 'Nâdir Şah zamanında yeniden İran'ın eline geçti (1734)' | Gence Antl. 1735 ile TDV 1734 — D211⑥ tipi; çelişki ilan edilmedi |
| Berde (Karabağ) | 1757: TDV kacarlar Muhammed Hasan Han'ın Arrân/Karabağ'ı itaat altına aldığını yazıyor — zincirde yok | süre/biçim (tâbiiyet mi sahiplik mi) kaynakta yok |
| Nahçıvan | `karakoyunlu` 1408-04-13 (Serdrûd; D208 bölge notu kayıtta zaten var); TDV şehir maddesi 815/1412 | 1408-1412 sahibi kaynakta yok |
| Bağdat | `akkoyunlu` 1469-01-01; TDV Karakoyunlu'yu 1467'de bitiriyor, 1467-1469 sahibini söylemiyor | boşluğun kimliği kaynakta yok |
| Bağdat | `ingiltere` 1917-03-11, `irak-kralligi` 1921-08-23: TDV bagdat maddesinde tarihli değil | kaynak doğrulanmadı (Britannica 403) |
| Mahmudâbâd | Şehir için kaynak bulunamadı; zincir Bakü ailesiyle aynı yapıda (1747 zend / 1794 kacar) | kaynak doğrulanmadı |
| Erdekân | `incu` 1335-1357 (şablon): TDV inculular 'Fars ve İsfahan'da'; bu şehir için madde çekilmedi | kaynak doğrulanmadı |
| Erdekân | 1722-1729 Afgan dönemi yok (şablon) | şehre ait kaynak çekilmedi; komşudan (İsfahan) devralınmadı (D207) |
| Erdistan | `incu` 1335-1357 (şablon): TDV inculular 'Fars ve İsfahan'da'; bu şehir için madde çekilmedi | kaynak doğrulanmadı |
| Erdistan | 1722-1729 Afgan dönemi yok (şablon) | şehre ait kaynak çekilmedi; komşudan (İsfahan) devralınmadı (D207) |
| Gulpâygân | `incu` 1335-1357 (şablon): TDV inculular 'Fars ve İsfahan'da'; bu şehir için madde çekilmedi | kaynak doğrulanmadı |
| Gulpâygân | 1722-1729 Afgan dönemi yok (şablon) | şehre ait kaynak çekilmedi; komşudan (İsfahan) devralınmadı (D207) |
| Isfahan | `safevi` 1503; TDV isfahan 911 (1505), TDV safeviler 909 (1503) Hemedan | iki TDV maddesi farklı olayı tarihliyor (D211⑥); çelişki ilan edilmedi |
| Kazvin | `incu` 1335-1357; TDV inculular 'Fars ve İsfahan'da' — Kazvin maddesi İncû/Muzafferî anmıyor | doğru sahip kaynakta yok ⇒ sınıf belirlenemedi |
| Kazvin | 1726 Osmanlı: TDV 'Osmanlılar'a boyun eğdi, fakat kısa sürede geri alındı' | süre yok; d:/isg: ayrımı kaynaktan çıkmıyor |
| Kum | Zincirin 1300-1700 kısmı: TDV kum hiçbir hanedanı tarihlemiyor; 'Afgan soygunları' bir sahiplik cümlesi değil | incu kimliği inculular ('Fars ve İsfahan') ile desteklenmiyor; sınıf belirlenemedi |
| Kâşân | `incu` 1335-1357 / `muzafferi`: TDV kasan anmıyor; inculular 'Fars ve İsfahan' | doğru sahip kaynakta yok |
| Nâin | `incu` 1335-1357 (şablon): TDV inculular 'Fars ve İsfahan'da'; bu şehir için madde çekilmedi | kaynak doğrulanmadı |
| Nâin | 1722-1729 Afgan dönemi yok (şablon) | şehre ait kaynak çekilmedi; komşudan (İsfahan) devralınmadı (D207) |
| Tahran | `incu` 1335-1357 ve `muzafferi` 1357-1387: TDV tahran bu hanedanları anmıyor; inculular 'Fars ve İsfahan' | doğru sahip kaynakta yok |
| Bistâm | `timurlu` 1387-11-01: Serbedâr Timur'a 1381'de bağlandı, hanedan 1386'da bitti (TDV); 1387-11-01 Kûmis için kaynaksız | gün kaynakta yok |
| Dâmgan | `timurlu` 1387-11-01: Serbedâr Timur'a 1381'de bağlandı, hanedan 1386'da bitti (TDV); 1387-11-01 Kûmis için kaynaksız | gün kaynakta yok |
| Simnân | `timurlu` 1387-11-01: Serbedâr Timur'a 1381'de bağlandı, hanedan 1386'da bitti (TDV); 1387-11-01 Kûmis için kaynaksız | gün kaynakta yok |
| Sâve | Şehir maddesi çekilemedi (TDV 'save' araması ilgisiz maddeler döndü); zincir celayirli 1340 | kaynak doğrulanmadı |
| Bempûr | `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |
| Bender Lengeh | `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |
| Câsk | `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |
| Ebrekûh | `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | Yezd bölgesi (Muzafferî üssü 1318) — şehir kaynağı yok · kaynak doğrulanmadı |
| Hâş | `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |
| Lâr | `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | TDV lar yalnız 'Lâristan'a gönderme; Lâr melikleri zincirde yok — doğrulanmadı · kaynak doğrulanmadı |
| Mînâb | `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |
| Çâhbahâr | `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |
| Esterâbâd (Gürgân) | `timurlu` 1386 / `mazenderan-marasi` 1507-1510: TDV esterabad yalnız 'İlhanlılar, Timurlular ve mahallî Türk beylerinin savaş alanı' (tar… | Emîr Velî vb. ara sahipler kaynakla tarihlenemedi |
| Meşhed | `serbedariler` 1337-1381, `timurlu` 1381-04-01: TDV meshed--iran Serbedâr'ı anmıyor, Mîrân Şah Tûs'u 1389'da aldı | Tûs/Meşhed ayrımı; Câun-ı Kurbânî kaynakla sınanamadı |

## 7. Şehir şehir yan yana tablolar

Her şehir: atlasın `s:` zinciri (sahip · f · t · `kaynak:`) + çekilen kaynağın kronolojisi + sınıflanmış uyuşmazlıklar. `d:` (Osmanlı) / `v:` / `isg:` dönemleri tabloya alınmadı (görev `s:`); zincirdeki boşlukları onlar doldurur (ör. Bağdat 1534-1623, 1638-1917).

### 1. Astara  ·  aile A Azerbaycan/Arrân/Talış  ·  `yerlesimler.js`  ·  kaynaksız s: 13/14 · değişim 13

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1340-01-01 | — |
| 2 | celayirli | 1340-01-01 | 1386-01-01 | — |
| 3 | timurlu | 1386-01-01 | 1408-04-13 | — |
| 4 | karakoyunlu | 1408-04-13 | 1468-04-01 | BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208): TDV `karakoyunlular` Serdrûd 13 Nisan 1408 — … |
| 5 | akkoyunlu | 1468-04-01 | 1501-07-01 | — |
| 6 | safevi | 1501-07-01 | 1723-01-01 | — |
| 7 | rusya | 1723-01-01 | 1732-09-02 | — |
| 8 | safevi | 1732-09-02 | 1736-03-08 | — |
| 9 | afsar | 1736-03-08 | 1747-06-20 | — |
| 10 | zend | 1747-06-20 | 1794-01-01 | — |
| 11 | kacar | 1794-01-01 | 1828-02-22 | — |
| 12 | rusya | 1828-02-22 | 1917-03-15 | — |
| 13 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 14 | sovyet-rusya | 1917-11-07 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [celayirliler](https://islamansiklopedisi.org.tr/celayirliler) — TDV celayirliler: 'Üveys 1358'de Azerbaycan ile Tebriz'i … ele geçirdi'.
- [lenkeran](https://islamansiklopedisi.org.tr/lenkeran) — TDV lenkeran: Talış Hanlığı merkezi · Eylül 1809 Rus yağması · 1 Ocak 1813 Ruslar Lenkeran'ı aldı · 1826 İran dönüşü · 1828 Türkmençay · 1747 öncesi hanedanlar TARİHSİZ/YOK.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | 1340-1358 sahibi (Çobanîler beklenir) kaynakta DOĞRULANMADI; İran Çobanî künyesi YOK (`cobanogullari` = Kastamonu beyliği 1211-1309) ⇒ ③ ADAY |
| 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Talış Hanlığı (aday) diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | komşu madde (Lenkeran) — gün devralınmadı (D207) | hanlık künyesi YOK (`revan-hanligi` 1747-1828 hariç) ⇒ ③ ama BLOKE (D205: ardıl künye yok) |
| Kimlik belirsiz: koordinat İran Astara'sı ile Azerbaycan Astara'sı arasında; zincir 1828'den sonra `rusya` diyor (Azerbaycan yakası) | ÖLÇ | — | — | kaynak doğrulanmadı; zincir Lenkeran'la birebir aynı (şablon) |

### 2. Lenkeran  ·  aile A Azerbaycan/Arrân/Talış  ·  `yerlesimler.js`  ·  kaynaksız s: 13/14 · değişim 13

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1340-01-01 | — |
| 2 | celayirli | 1340-01-01 | 1386-01-01 | — |
| 3 | timurlu | 1386-01-01 | 1408-04-13 | — |
| 4 | karakoyunlu | 1408-04-13 | 1468-04-01 | BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208): TDV `karakoyunlular` Serdrûd 13 Nisan 1408 — … |
| 5 | akkoyunlu | 1468-04-01 | 1501-07-01 | — |
| 6 | safevi | 1501-07-01 | 1723-01-01 | — |
| 7 | rusya | 1723-01-01 | 1732-09-02 | — |
| 8 | safevi | 1732-09-02 | 1736-03-08 | — |
| 9 | afsar | 1736-03-08 | 1747-06-20 | — |
| 10 | zend | 1747-06-20 | 1794-01-01 | — |
| 11 | kacar | 1794-01-01 | 1828-02-22 | — |
| 12 | rusya | 1828-02-22 | 1917-03-15 | — |
| 13 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 14 | sovyet-rusya | 1917-11-07 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [celayirliler](https://islamansiklopedisi.org.tr/celayirliler) — TDV celayirliler: 'Üveys 1358'de Azerbaycan ile Tebriz'i … ele geçirdi'.
- [lenkeran](https://islamansiklopedisi.org.tr/lenkeran) — TDV lenkeran: Talış Hanlığı merkezi · Eylül 1809 Rus yağması · 1 Ocak 1813 Ruslar Lenkeran'ı aldı · 1826 İran dönüşü · 1828 Türkmençay · 1747 öncesi hanedanlar TARİHSİZ/YOK.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | 1340-1358 sahibi (Çobanîler beklenir) kaynakta DOĞRULANMADI; İran Çobanî künyesi YOK (`cobanogullari` = Kastamonu beyliği 1211-1309) ⇒ ③ ADAY |
| 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Talış Hanlığı diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | şehir | hanlık künyesi YOK (`revan-hanligi` 1747-1828 hariç) ⇒ ③ ama BLOKE (D205: ardıl künye yok) |
| `kacar` 1794→1828-02-22 kesintisiz; TDV: Ruslar 1 Ocak 1813'te Lenkeran'ı aldı, 1826'da İran döndü, 1828 Türkmençay | ③ | eksik (rusya 1813-1826) | şehir | künye `rusya` 1547-1917 VAR, pencere tutuyor |

### 3. Bakü  ·  aile B Şirvan  ·  `yerlesimler.js`  ·  kaynaksız s: 12/13 · değişim 12

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | sirvansah | 1335-12-01 | 1538-10-01 | TDV sirvan, BİREBİR: "Böylece teşekkül eden Şirvanşahlar idaresi uzun süre bölgede hâkimiy… |
| 3 | safevi | 1538-10-01 | 1723-08-06 | — |
| 4 | rusya | 1723-08-06 | 1735-03-21 | — |
| 5 | safevi | 1735-03-21 | 1736-03-08 | — |
| 6 | afsar | 1736-03-08 | 1747-06-20 | — |
| 7 | zend | 1747-06-20 | 1794-01-01 | — |
| 8 | kacar | 1794-01-01 | 1813-10-24 | — |
| 9 | rusya | 1813-10-24 | 1917-03-15 | — |
| 10 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 11 | sovyet-rusya | 1917-11-07 | 1918-09-15 | — |
| 12 | azerbaycan-demokratik-cumhuriyeti | 1918-09-15 | 1920-04-27 | — |
| 13 | sovyet-rusya | 1920-04-27 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [baku](https://islamansiklopedisi.org.tr/baku) — TDV baku: Şirvanşahlar · 1501 Şah İsmâil aldı · Osmanlı 1583-1606 · '1723'te I. Petro tarafından Rus topraklarına katıldı' · Nâdir zamanında İran'a döndü (1734) · 'Bağımsız Bakü Hanlığı kurulduğunda (1747)' · Gülistan (1813) 'ile kesin olarak Rusya'ya geçti' · 28 Mayıs 1918 Azerbaycan · 28 Nisan 1920 Sovyet.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| 1747-1813 `zend`→`kacar`; TDV: 'Bağımsız Bakü Hanlığı kurulduğunda (1747)' — Gülistan 1813'e dek | ③ | eksik (Bakü Hanlığı) / fazla (zend, kacar) | şehir | Bakü Hanlığı künyesi YOK (`kuba-hanligi` 1735-1813 ayrı kimlik) ⇒ BLOKE |
| `sirvansah` →1538-10-01; TDV baku '1501 … Şah İsmâil tarafından ele geçirildi' | ÖLÇ | — | şehir | 1501 zapt mı, 1538 ilhak mı: tâbiiyet/sahiplik ayrımı kaynak cümlesinden çıkmıyor |
| `rusya` →1735-03-21; TDV baku 'Nâdir Şah zamanında yeniden İran'ın eline geçti (1734)' | ÖLÇ | — | şehir | Gence Antl. 1735 ile TDV 1734 — D211⑥ tipi; çelişki ilan edilmedi |

### 4. Berde (Karabağ)  ·  aile A Azerbaycan/Arrân/Talış  ·  `yerlesimler.js`  ·  kaynaksız s: 11/12 · değişim 11

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1340-01-01 | — |
| 2 | celayirli | 1340-01-01 | 1386-01-01 | — |
| 3 | timurlu | 1386-01-01 | 1408-04-13 | — |
| 4 | karakoyunlu | 1408-04-13 | 1468-04-01 | BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208): TDV `karakoyunlular` Serdrûd 13 Nisan 1408 — … |
| 5 | akkoyunlu | 1468-04-01 | 1501-07-01 | — |
| 6 | safevi | 1501-07-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1813-10-24 | — |
| 10 | rusya | 1813-10-24 | 1917-03-15 | — |
| 11 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 12 | sovyet-rusya | 1917-11-07 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [celayirliler](https://islamansiklopedisi.org.tr/celayirliler) — TDV celayirliler: 'Üveys 1358'de Azerbaycan ile Tebriz'i … ele geçirdi'.
- [kacarlar](https://islamansiklopedisi.org.tr/kacarlar) — TDV kacarlar: Muhammed Hasan Han 1747 Esterâbâd'a geldi · 1749 Esterâbâd beylerbeyi · 1750 bağımsız, 'Esterâbâd ve Cürcân'dan başka Mâzenderan ve Gîlân'ı da idaresi altına aldı' · 1756 Kerim Han'ı bozup Irâk-ı Acem'i ele geçirdi · 1757 Arrân, Karabağ, Mugan · öldü 13 Şubat 1759 · Ağa Muhammed 1779'da Şîraz'dan kaçtı · 1786 Tahran tahta çıkış 'diğer kaynaklar teyit etmemektedir' · 1796 Tahran'da taç.
- [karabag](https://islamansiklopedisi.org.tr/karabag) — TDV karabag: İlhanlı, Timurlu, Akkoyunlu, Safevî (TARİHSİZ sıra) · 1578/1590 Osmanlı, 1603 Safevî geri · 'Nâdir Şah'ın 1747'de öldürülmesinden sonra … Penah Ali … Karabağ Hanlığı'nı kurdu' · Mayıs 1805 Kürekçay ile Rusya'ya tâbi · Gülistan ile Ruslar'a bırakıldı, 1822 hanlık lağvedildi.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | 1340-1358 sahibi (Çobanîler beklenir) kaynakta DOĞRULANMADI; İran Çobanî künyesi YOK (`cobanogullari` = Kastamonu beyliği 1211-1309) ⇒ ③ ADAY |
| 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Karabağ Hanlığı (Penah Ali, 1747/48 → 1822 lağv) diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | bölge maddesi | hanlık künyesi YOK (`revan-hanligi` 1747-1828 hariç) ⇒ ③ ama BLOKE (D205: ardıl künye yok) |
| 1757: TDV kacarlar Muhammed Hasan Han'ın Arrân/Karabağ'ı itaat altına aldığını yazıyor — zincirde yok | ÖLÇ | eksik (?) | bölge cümlesi (D208) | süre/biçim (tâbiiyet mi sahiplik mi) kaynakta yok |

### 5. Nahçıvan  ·  aile A Azerbaycan/Arrân/Talış  ·  `yerlesimler.js`  ·  kaynaksız s: 11/12 · değişim 11

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1340-01-01 | — |
| 2 | celayirli | 1340-01-01 | 1386-01-01 | — |
| 3 | timurlu | 1386-01-01 | 1408-04-13 | — |
| 4 | karakoyunlu | 1408-04-13 | 1468-04-01 | BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208): TDV `karakoyunlular` Serdrûd 13 Nisan 1408 — … |
| 5 | akkoyunlu | 1468-04-01 | 1501-07-01 | — |
| 6 | safevi | 1501-07-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1828-02-22 | — |
| 10 | rusya | 1828-02-22 | 1917-03-15 | — |
| 11 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 12 | sovyet-rusya | 1917-11-07 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [celayirliler](https://islamansiklopedisi.org.tr/celayirliler) — TDV celayirliler: 'Üveys 1358'de Azerbaycan ile Tebriz'i … ele geçirdi'.
- [nahcivan](https://islamansiklopedisi.org.tr/nahcivan) — TDV nahcivan: '789'da (1387) şehir Timur tarafından zaptedildi' · 815/1412 Karakoyunlu sınırına dahil · Akkoyunlu XV. yy sonuna dek · 907/1501 Şerûr, Safevî · 986/1578 Osmanlı · 1149/1736 Nâdir · Nahçıvan Hanlığı'nın merkezi '… Rusya'ya ilhakına kadar (1828)' · 1795-1797 Ağa Muhammed saldırıları · 1826-1828 savaş → Rus.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | 1340-1358 sahibi (Çobanîler beklenir) kaynakta DOĞRULANMADI; İran Çobanî künyesi YOK (`cobanogullari` = Kastamonu beyliği 1211-1309) ⇒ ③ ADAY |
| 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Nahçıvan Hanlığı diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | şehir | hanlık künyesi YOK (`revan-hanligi` 1747-1828 hariç) ⇒ ③ ama BLOKE (D205: ardıl künye yok) |
| `timurlu` 1386-01-01; TDV 789 (1387) | ② | fazla (timurlu ~1 yıl erken) | şehir | önceki sahip `celayirli` sürer; yuvarlak yıl |
| `karakoyunlu` 1408-04-13 (Serdrûd; D208 bölge notu kayıtta zaten var); TDV şehir maddesi 815/1412 | ÖLÇ | fazla (karakoyunlu ~4 yıl erken) | şehir | 1408-1412 sahibi kaynakta yok |

### 6. Ordubad  ·  aile A Azerbaycan/Arrân/Talış  ·  `yerlesimler.js`  ·  kaynaksız s: 11/12 · değişim 11

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1340-01-01 | — |
| 2 | celayirli | 1340-01-01 | 1386-01-01 | — |
| 3 | timurlu | 1386-01-01 | 1408-04-13 | — |
| 4 | karakoyunlu | 1408-04-13 | 1468-04-01 | BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208): TDV `karakoyunlular` Serdrûd 13 Nisan 1408 — … |
| 5 | akkoyunlu | 1468-04-01 | 1501-07-01 | — |
| 6 | safevi | 1501-07-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1828-02-22 | — |
| 10 | rusya | 1828-02-22 | 1917-03-15 | — |
| 11 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 12 | sovyet-rusya | 1917-11-07 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [celayirliler](https://islamansiklopedisi.org.tr/celayirliler) — TDV celayirliler: 'Üveys 1358'de Azerbaycan ile Tebriz'i … ele geçirdi'.
- [nahcivan](https://islamansiklopedisi.org.tr/nahcivan) — TDV nahcivan: '789'da (1387) şehir Timur tarafından zaptedildi' · 815/1412 Karakoyunlu sınırına dahil · Akkoyunlu XV. yy sonuna dek · 907/1501 Şerûr, Safevî · 986/1578 Osmanlı · 1149/1736 Nâdir · Nahçıvan Hanlığı'nın merkezi '… Rusya'ya ilhakına kadar (1828)' · 1795-1797 Ağa Muhammed saldırıları · 1826-1828 savaş → Rus.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | 1340-1358 sahibi (Çobanîler beklenir) kaynakta DOĞRULANMADI; İran Çobanî künyesi YOK (`cobanogullari` = Kastamonu beyliği 1211-1309) ⇒ ③ ADAY |
| 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Nahçıvan Hanlığı (aday) diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | bölge cümlesi (D208) | hanlık künyesi YOK (`revan-hanligi` 1747-1828 hariç) ⇒ ③ ama BLOKE (D205: ardıl künye yok) |

### 7. Şerur (Sharur)  ·  aile A Azerbaycan/Arrân/Talış  ·  `yerlesimler_kalite4.js`  ·  kaynaksız s: 11/12 · değişim 11

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1340-01-01 | — |
| 2 | celayirli | 1340-01-01 | 1386-01-01 | — |
| 3 | timurlu | 1386-01-01 | 1408-04-13 | — |
| 4 | karakoyunlu | 1408-04-13 | 1468-04-01 | BÖLGE CÜMLESİ, ŞEHİR TANIKLIĞI DEĞİL (D208): TDV `karakoyunlular` Serdrûd 13 Nisan 1408 — … |
| 5 | akkoyunlu | 1468-04-01 | 1501-07-01 | — |
| 6 | safevi | 1501-07-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1828-02-22 | — |
| 10 | rusya | 1828-02-22 | 1917-03-15 | — |
| 11 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 12 | sovyet-rusya | 1917-11-07 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [celayirliler](https://islamansiklopedisi.org.tr/celayirliler) — TDV celayirliler: 'Üveys 1358'de Azerbaycan ile Tebriz'i … ele geçirdi'.
- [nahcivan](https://islamansiklopedisi.org.tr/nahcivan) — TDV nahcivan: '789'da (1387) şehir Timur tarafından zaptedildi' · 815/1412 Karakoyunlu sınırına dahil · Akkoyunlu XV. yy sonuna dek · 907/1501 Şerûr, Safevî · 986/1578 Osmanlı · 1149/1736 Nâdir · Nahçıvan Hanlığı'nın merkezi '… Rusya'ya ilhakına kadar (1828)' · 1795-1797 Ağa Muhammed saldırıları · 1826-1828 savaş → Rus.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `celayirli` 1340-01-01'de başlıyor; TDV Celâyirli'nin Azerbaycan/Tebriz'i 1358'de aldığını yazıyor | ③ | fazla (celayirli ~18 yıl erken) | bölge cümlesi (D208) | 1340-1358 sahibi (Çobanîler beklenir) kaynakta DOĞRULANMADI; İran Çobanî künyesi YOK (`cobanogullari` = Kastamonu beyliği 1211-1309) ⇒ ③ ADAY |
| 1747-1794 `zend` + 1794-… `kacar`: kaynak bu dönemde Nahçıvan ya da Revan Hanlığı (aday) diyor; TDV zendler Kafkas'ta Zend hâkimiyeti anlatmıyor | ③ | eksik (hanlık) / fazla (zend, kacar) | bölge cümlesi (D208) | hanlık künyesi YOK (`revan-hanligi` 1747-1828 hariç) ⇒ ③ ama BLOKE (D205: ardıl künye yok) |

### 8. Bağdat  ·  aile C Bağdat  ·  `yerlesimler.js`  ·  kaynaksız s: 11/12 · değişim 10

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | celayirli | 1335-12-01 | 1393-08-29 | — |
| 3 | timurlu | 1393-08-29 | 1394-01-01 | TDV timur: 'Bağdat’ı ele geçirdikten sonra (20 Şevval 795 / 29 Ağustos 1393)' — GÜN · eski… |
| 4 | celayirli | 1394-01-01 | 1401-01-01 | — |
| 5 | timurlu | 1401-01-01 | 1405-01-01 | — |
| 6 | celayirli | 1405-01-01 | 1411-01-01 | — |
| 7 | karakoyunlu | 1411-01-01 | 1469-01-01 | — |
| 8 | akkoyunlu | 1469-01-01 | 1508-01-01 | — |
| 9 | safevi | 1508-01-01 | 1534-12-04 | — |
| 10 | safevi | 1623-11-28 | 1638-12-24 | — |
| 11 | ingiltere | 1917-03-11 | 1921-08-23 | — |
| 12 | irak-kralligi | 1921-08-23 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [bagdat](https://islamansiklopedisi.org.tr/bagdat) — TDV bagdat: 'Hasan-ı Büzürg 1339'da Bağdat'a yerleşti' · Timur 795 (1393) ve 803 (1401) · Ahmed Celâyir 1405'te döndü · '1410-1467 yılları arasında Karakoyunlu … hâkimiyetinde' · 1508 Safevî · 1534 Kanûnî · Safevî'ye teslim 28 Kasım 1623 · 15 Ekim 1638'de başlayan kuşatma ile Osmanlı · 1917/1921 TARİHLİ DEĞİL.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `celayirli` 1335-12-01; TDV: 'Hasan-ı Büzürg 1339'da Bağdat'a yerleşti' | ② | fazla (celayirli ~4 yıl erken) | şehir | önceki kimlik `ilhanli` (künye t:1353) pencereyi kapsıyor |
| `karakoyunlu` 1411-01-01; TDV '1410-1467 yılları arasında Karakoyunlu' | ③ | eksik (~1 yıl) | şehir | yıl düzeyinde; künye `karakoyunlu` VAR |
| `akkoyunlu` 1469-01-01; TDV Karakoyunlu'yu 1467'de bitiriyor, 1467-1469 sahibini söylemiyor | ÖLÇ | — | şehir | boşluğun kimliği kaynakta yok |
| `ingiltere` 1917-03-11, `irak-kralligi` 1921-08-23: TDV bagdat maddesinde tarihli değil | ÖLÇ | — | — | kaynak doğrulanmadı (Britannica 403) |

### 9. Mahmudâbâd  ·  aile B Şirvan  ·  `yerlesimler.js`  ·  kaynaksız s: 10/11 · değişim 10

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | sirvansah | 1335-12-01 | 1538-10-01 | TDV sirvan, BİREBİR: "Böylece teşekkül eden Şirvanşahlar idaresi uzun süre bölgede hâkimiy… |
| 3 | safevi | 1538-10-01 | 1723-09-23 | — |
| 4 | rusya | 1723-09-23 | 1732-01-21 | — |
| 5 | safevi | 1732-01-21 | 1736-03-08 | — |
| 6 | afsar | 1736-03-08 | 1747-06-20 | — |
| 7 | zend | 1747-06-20 | 1794-01-01 | — |
| 8 | kacar | 1794-01-01 | 1813-10-24 | — |
| 9 | rusya | 1813-10-24 | 1917-03-15 | — |
| 10 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 11 | sovyet-rusya | 1917-11-07 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Şehir için kaynak bulunamadı; zincir Bakü ailesiyle aynı yapıda (1747 zend / 1794 kacar) | ÖLÇ | — | — | kaynak doğrulanmadı |

### 10. Erdekân  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `incu` 1335-1357 (şablon): TDV inculular 'Fars ve İsfahan'da'; bu şehir için madde çekilmedi | ÖLÇ | — | bölge cümlesi (D208) | kaynak doğrulanmadı |
| 1722-1729 Afgan dönemi yok (şablon) | ÖLÇ | eksik (?) | — | şehre ait kaynak çekilmedi; komşudan (İsfahan) devralınmadı (D207) |

### 11. Erdistan  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `incu` 1335-1357 (şablon): TDV inculular 'Fars ve İsfahan'da'; bu şehir için madde çekilmedi | ÖLÇ | — | bölge cümlesi (D208) | kaynak doğrulanmadı |
| 1722-1729 Afgan dönemi yok (şablon) | ÖLÇ | eksik (?) | — | şehre ait kaynak çekilmedi; komşudan (İsfahan) devralınmadı (D207) |

### 12. Gulpâygân  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `incu` 1335-1357 (şablon): TDV inculular 'Fars ve İsfahan'da'; bu şehir için madde çekilmedi | ÖLÇ | — | bölge cümlesi (D208) | kaynak doğrulanmadı |
| 1722-1729 Afgan dönemi yok (şablon) | ÖLÇ | eksik (?) | — | şehre ait kaynak çekilmedi; komşudan (İsfahan) devralınmadı (D207) |

### 13. Isfahan  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [isfahan](https://islamansiklopedisi.org.tr/isfahan) — TDV isfahan: İncû Ebû İshak hâkimiyeti · Muzafferî 758/1357 · Timur 18 Kasım 1387 katliam · Timurlu valiler 1413'e dek · Karakoyunlu 1452 · Akkoyunlu 1469 · Safevî 911/1505 · Afganlar 1722 · 'Nâdir Şah'ın ölümünden sonra' · '1750'de Zendler'in eline geçti' · Kaçar tarihi YOK.
- [kacarlar](https://islamansiklopedisi.org.tr/kacarlar) — TDV kacarlar: Muhammed Hasan Han 1747 Esterâbâd'a geldi · 1749 Esterâbâd beylerbeyi · 1750 bağımsız, 'Esterâbâd ve Cürcân'dan başka Mâzenderan ve Gîlân'ı da idaresi altına aldı' · 1756 Kerim Han'ı bozup Irâk-ı Acem'i ele geçirdi · 1757 Arrân, Karabağ, Mugan · öldü 13 Şubat 1759 · Ağa Muhammed 1779'da Şîraz'dan kaçtı · 1786 Tahran tahta çıkış 'diğer kaynaklar teyit etmemektedir' · 1796 Tahran'da taç.
- [muzafferiler](https://islamansiklopedisi.org.tr/muzafferiler) — TDV muzafferiler: Yezd emirliği 718/1318 · İncû Ebû İshak İsfahan'da öldürüldü 758/1357, 'aynı yıl … Kirman eyaletini de … kattı, böylece Irak'ın büyük bir kısmı ile Fars bölgesinin hâkimi oldu' · 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)' · son 795/1393.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `timurlu` 1387-11-01→1452; TDV muzafferiler: 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)', hanedan 1393'te biter | ② | fazla (timurlu erken) / eksik (muzafferi ~1388-1393) | bölge cümlesi (D208) + şehir (1387 katliamı) | künye `muzafferi` t:1393 pencereyi kapsıyor |
| 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | şehir | künye `galzay` 1709-04-21→1738 VAR, pencere tutuyor |
| `safevi` 1503; TDV isfahan 911 (1505), TDV safeviler 909 (1503) Hemedan | ÖLÇ | — | şehir | iki TDV maddesi farklı olayı tarihliyor (D211⑥); çelişki ilan edilmedi |
| 1756-1759: TDV kacarlar Muhammed Hasan Han'ın Irâk-ı Acem'i ele geçirdiğini yazıyor; zincir `zend` | ③ | eksik (kaçar 1756-1759) | bölge cümlesi (D208) | künye `kacar` f:1789 ⇒ pencere TUTMAZ, BLOKE |

### 14. Kazvin  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [kazvin](https://islamansiklopedisi.org.tr/kazvin) — TDV kazvin: Karakoyunlu Kara Yûsuf'un emîri Bistam Bey Kazvin'i aldı (TARİHSİZ), Şâhruh zamanında el değiştirdi · 'Cihan Şah, Şâhruh'un vefatı üzerine (851/1447) Kazvin'i ülkesine kattı' · Safevî merkez 1555 · 'Afganlar 1722'de Kazvin'e girdilerse de ertesi yıl … çekilmek zorunda kaldılar' · 'Şehir 1726'da Osmanlılar'a boyun eğdi, fakat kısa sürede geri alındı' · İncû/Muzafferî/Zend/Kaçar YOK.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `incu` 1335-1357; TDV inculular 'Fars ve İsfahan'da' — Kazvin maddesi İncû/Muzafferî anmıyor | ÖLÇ | fazla (kimlik desteksiz) | hanedan + şehir | doğru sahip kaynakta yok ⇒ sınıf belirlenemedi |
| `karakoyunlu` 1452; TDV kazvin: Cihan Şah Kazvin'i 851/1447'de kattı (öncesinde Kara Yûsuf döneminde de bir Karakoyunlu dönemi, tarihsiz) | ③ | eksik (karakoyunlu 1447-1452) / fazla (timurlu) | şehir | künye `karakoyunlu` 1351-1469 VAR |
| 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | şehir | künye `galzay` 1709-04-21→1738 VAR, pencere tutuyor · TDV: 1722'de girdiler, ertesi yıl çekildiler ⇒ ~1722-1723 |
| 1726 Osmanlı: TDV 'Osmanlılar'a boyun eğdi, fakat kısa sürede geri alındı' | ÖLÇ | eksik (?) | şehir | süre yok; d:/isg: ayrımı kaynaktan çıkmıyor |

### 15. Kum  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [kum](https://islamansiklopedisi.org.tr/kum) — TDV kum: XVIII. yy 'Afgan soygunları' ve Nâdir kıyımları · Kaçar hâkimiyeti — 1300-1700 arası hiçbir hanedan TARİHLİ değil.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Zincirin 1300-1700 kısmı: TDV kum hiçbir hanedanı tarihlemiyor; 'Afgan soygunları' bir sahiplik cümlesi değil | ÖLÇ | — | şehir | incu kimliği inculular ('Fars ve İsfahan') ile desteklenmiyor; sınıf belirlenemedi |

### 16. Kâşân  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [kasan](https://islamansiklopedisi.org.tr/kasan) — TDV kasan: İlhanlı, Timurlu dönemleri TARİHSİZ · 'Safevîler'den sonra Afgan ve Afşarlar zamanında' · Kerim Han 1192 (1778) yeniden inşa · Kaçar.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `incu` 1335-1357 / `muzafferi`: TDV kasan anmıyor; inculular 'Fars ve İsfahan' | ÖLÇ | fazla (kimlik desteksiz) | hanedan + şehir | doğru sahip kaynakta yok |
| 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | şehir (tarihsiz) | künye `galzay` 1709-04-21→1738 VAR, pencere tutuyor · TDV: 'Safevîler'den sonra Afgan ve Afşarlar zamanında' — yıl yok |

### 17. Nâin  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `incu` 1335-1357 (şablon): TDV inculular 'Fars ve İsfahan'da'; bu şehir için madde çekilmedi | ÖLÇ | — | bölge cümlesi (D208) | kaynak doğrulanmadı |
| 1722-1729 Afgan dönemi yok (şablon) | ÖLÇ | eksik (?) | — | şehre ait kaynak çekilmedi; komşudan (İsfahan) devralınmadı (D207) |

### 18. Tahran  ·  aile D Irâk-ı Acem  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 9

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | incu | 1335-12-01 | 1357-01-01 | — |
| 3 | muzafferi | 1357-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [kacarlar](https://islamansiklopedisi.org.tr/kacarlar) — TDV kacarlar: Muhammed Hasan Han 1747 Esterâbâd'a geldi · 1749 Esterâbâd beylerbeyi · 1750 bağımsız, 'Esterâbâd ve Cürcân'dan başka Mâzenderan ve Gîlân'ı da idaresi altına aldı' · 1756 Kerim Han'ı bozup Irâk-ı Acem'i ele geçirdi · 1757 Arrân, Karabağ, Mugan · öldü 13 Şubat 1759 · Ağa Muhammed 1779'da Şîraz'dan kaçtı · 1786 Tahran tahta çıkış 'diğer kaynaklar teyit etmemektedir' · 1796 Tahran'da taç.
- [tahran](https://islamansiklopedisi.org.tr/tahran) — TDV tahran: Afganlar 1141 (1728) Mihmândûst'tan sonra Tahran'da katliam yapıp İsfahan'a döndüler · Kerim Han 1173 (1760) Tahran'da hükümet binaları · Kerim Han'ın 1193 (1779) ölümünün ardından Ağa Muhammed … Rey'de tahta çıktı, Tahran Kaçar başşehri oldu · İlhanlı/Celâyirli/İncû/Muzafferî/Timurlu YOK.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `incu` 1335-1357 ve `muzafferi` 1357-1387: TDV tahran bu hanedanları anmıyor; inculular 'Fars ve İsfahan' | ÖLÇ | fazla (kimlik desteksiz) | hanedan + şehir | doğru sahip kaynakta yok |
| 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | şehir | künye `galzay` 1709-04-21→1738 VAR, pencere tutuyor · TDV: Afganlar 1728'de Tahran'dan çekildi |
| `zend` →1794, `kacar` 1794→; TDV tahran: Kerim Han'ın ölümü (1779) ardından Ağa Muhammed Rey'de tahta çıktı, Tahran Kaçar başşehri; TDV kacarlar 1786'yı teyitsiz sayıyor | ③ | fazla (zend) / eksik (kacar ~1779/1786-1794) | şehir | künye `kacar` f:1789-03-21 ⇒ 1779/1786-1789 penceresi TUTMAZ, BLOKE (D205 singhasari emsali) |

### 19. Bistâm  ·  aile E Kûmis  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | ilhanli | 1335-12-01 | 1337-09-09 | — |
| 3 | serbedariler | 1337-09-09 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [serbedariler](https://islamansiklopedisi.org.tr/serbedariler) — TDV serbedariler: isyan 13 Mart 1337 · 'Sebzevâr'ın kontrolünü ele geçirip (9 Eylül 1337)' · Nîşâbur 1340-41 · 'Câcerm, Damgan, Simnân ile Togay Timur'un başşehri Gürgân'ı ele geçiren Serbedârîler' (TARİHSİZ) · Togay Timur öldürüldü 13 Aralık 1353 · Timur 1381 Sebzevâr · son 1386.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `serbedariler` 1337-09-09 = TDV'nin SEBZEVÂR'ı alma günü; TDV Dâmgan/Simnân'ın alınışını TARİHSİZ, Togay Timur'un başşehriyle birlikte anlatıyor | ② | fazla (serbedar erken; gün komşudan BEYANSIZ) | bölge cümlesi (D208) | önceki kimlik `ilhanli` (Togay Timur; künye t:1353) — D207: Sebzevâr günü beyansız devralınmış |
| `timurlu` 1387-11-01: Serbedâr Timur'a 1381'de bağlandı, hanedan 1386'da bitti (TDV); 1387-11-01 Kûmis için kaynaksız | ÖLÇ | — | hanedan maddesi | gün kaynakta yok |

### 20. Dâmgan  ·  aile E Kûmis  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | ilhanli | 1335-12-01 | 1337-09-09 | — |
| 3 | serbedariler | 1337-09-09 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [serbedariler](https://islamansiklopedisi.org.tr/serbedariler) — TDV serbedariler: isyan 13 Mart 1337 · 'Sebzevâr'ın kontrolünü ele geçirip (9 Eylül 1337)' · Nîşâbur 1340-41 · 'Câcerm, Damgan, Simnân ile Togay Timur'un başşehri Gürgân'ı ele geçiren Serbedârîler' (TARİHSİZ) · Togay Timur öldürüldü 13 Aralık 1353 · Timur 1381 Sebzevâr · son 1386.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `serbedariler` 1337-09-09 = TDV'nin SEBZEVÂR'ı alma günü; TDV Dâmgan/Simnân'ın alınışını TARİHSİZ, Togay Timur'un başşehriyle birlikte anlatıyor | ② | fazla (serbedar erken; gün komşudan BEYANSIZ) | hanedan maddesi, şehir adıyla | önceki kimlik `ilhanli` (Togay Timur; künye t:1353) — D207: Sebzevâr günü beyansız devralınmış |
| `timurlu` 1387-11-01: Serbedâr Timur'a 1381'de bağlandı, hanedan 1386'da bitti (TDV); 1387-11-01 Kûmis için kaynaksız | ÖLÇ | — | hanedan maddesi | gün kaynakta yok |

### 21. Simnân  ·  aile E Kûmis  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | ilhanli | 1335-12-01 | 1337-09-09 | — |
| 3 | serbedariler | 1337-09-09 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [serbedariler](https://islamansiklopedisi.org.tr/serbedariler) — TDV serbedariler: isyan 13 Mart 1337 · 'Sebzevâr'ın kontrolünü ele geçirip (9 Eylül 1337)' · Nîşâbur 1340-41 · 'Câcerm, Damgan, Simnân ile Togay Timur'un başşehri Gürgân'ı ele geçiren Serbedârîler' (TARİHSİZ) · Togay Timur öldürüldü 13 Aralık 1353 · Timur 1381 Sebzevâr · son 1386.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `serbedariler` 1337-09-09 = TDV'nin SEBZEVÂR'ı alma günü; TDV Dâmgan/Simnân'ın alınışını TARİHSİZ, Togay Timur'un başşehriyle birlikte anlatıyor | ② | fazla (serbedar erken; gün komşudan BEYANSIZ) | hanedan maddesi, şehir adıyla | önceki kimlik `ilhanli` (Togay Timur; künye t:1353) — D207: Sebzevâr günü beyansız devralınmış |
| `timurlu` 1387-11-01: Serbedâr Timur'a 1381'de bağlandı, hanedan 1386'da bitti (TDV); 1387-11-01 Kûmis için kaynaksız | ÖLÇ | — | hanedan maddesi | gün kaynakta yok |

### 22. Sâve  ·  aile F Sâve/Zencan  ·  `yerlesimler.js`  ·  kaynaksız s: 10/10 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | ilhanli | 1335-12-01 | 1340-01-01 | — |
| 3 | celayirli | 1340-01-01 | 1387-11-01 | — |
| 4 | timurlu | 1387-11-01 | 1452-01-01 | — |
| 5 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | — |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Şehir maddesi çekilemedi (TDV 'save' araması ilgisiz maddeler döndü); zincir celayirli 1340 | ÖLÇ | — | — | kaynak doğrulanmadı |

### 23. Ahvaz  ·  aile G Hûzistan  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | lur-i-buzurg | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1508-01-01 | — |
| 6 | safevi | 1508-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [ahvaz](https://islamansiklopedisi.org.tr/ahvaz) — TDV ahvaz: 'Moğol istilâsı sırasında tahribata mâruz kaldı. Daha sonra Müşa'şa' hânedanı ve nihayet Safevîler'in eline geçti.'
- [huzistan](https://islamansiklopedisi.org.tr/huzistan) — TDV huzistan: Abaka Hûzistan'ı Luristan Atabegi I. Yûsuf Şah'a iktâ verdi · 'Akkoyunlular'ın dağılmasının ardından Hûzistan … Müşa'şa'lar'ın eline geçti. Ahvaz, Dizfûl ve Şüşter'i hâkimiyetlerine alan Müşa'şa'lar'ın yaklaşık yetmiş yıl süren bağımsızlıkları … 1508'de … sona erdiyse de' · Safevîler idareyi tâbiiyet şartıyla onlara bıraktı · 1925 Rıza Han Haz'al'a son verdi.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter'i aldı, ~70 yıl bağımsız, 1508'den sonra Safevî'ye tâbi | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | şehir (adıyla) | Müşa'şa' künyesi YOK ⇒ BLOKE |

### 24. Behbehân  ·  aile G Hûzistan  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | lur-i-buzurg | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1508-01-01 | — |
| 6 | safevi | 1508-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [huzistan](https://islamansiklopedisi.org.tr/huzistan) — TDV huzistan: Abaka Hûzistan'ı Luristan Atabegi I. Yûsuf Şah'a iktâ verdi · 'Akkoyunlular'ın dağılmasının ardından Hûzistan … Müşa'şa'lar'ın eline geçti. Ahvaz, Dizfûl ve Şüşter'i hâkimiyetlerine alan Müşa'şa'lar'ın yaklaşık yetmiş yıl süren bağımsızlıkları … 1508'de … sona erdiyse de' · Safevîler idareyi tâbiiyet şartıyla onlara bıraktı · 1925 Rıza Han Haz'al'a son verdi.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter'i aldı, ~70 yıl bağımsız, 1508'den sonra Safevî'ye tâbi | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | bölge cümlesi (D208) | Müşa'şa' künyesi YOK ⇒ BLOKE |

### 25. Bem  ·  aile H2 Kirman  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [kirman](https://islamansiklopedisi.org.tr/kirman) — TDV kirman: Kutluğhanlı hâkimiyeti 706 (1306-07)'ye dek · 'Kirman 741'de (1340-41) Muzafferîler … tarafından ele geçirildi' · Safevî 908 (1502-03) · 'Şehir 1132'de (1720) ve tekrar 1134'te (1722) Afganlar tarafından alındı' · Ağa Muhammed 1208/1794.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01; TDV kirman: 'Kirman 741'de (1340-41) Muzafferîler … ele geçirildi' | ② | fazla (muzafferi ~5 yıl erken) | bölge cümlesi (D208) | önceki kimlik `ilhanli` (künye t:1353) kapsıyor |
| 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | bölge cümlesi (D208) | künye `galzay` 1709-04-21→1738 VAR, pencere tutuyor · TDV kirman: 1720 ve 1722 Afganlar aldı |

### 26. Bempûr  ·  aile H3 Mekrân/Hürmüz/Lâr/Yezd  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | ÖLÇ | — | — | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |

### 27. Bender Lengeh  ·  aile H3 Mekrân/Hürmüz/Lâr/Yezd  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | ÖLÇ | — | — | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |

### 28. Bender Rîg  ·  aile H1 Fars  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [muzafferiler](https://islamansiklopedisi.org.tr/muzafferiler) — TDV muzafferiler: Yezd emirliği 718/1318 · İncû Ebû İshak İsfahan'da öldürüldü 758/1357, 'aynı yıl … Kirman eyaletini de … kattı, böylece Irak'ın büyük bir kısmı ile Fars bölgesinin hâkimi oldu' · 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)' · son 795/1393.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | künye `incu` 1325-1357 VAR, pencere tutuyor |

### 29. Cehrom  ·  aile H1 Fars  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [muzafferiler](https://islamansiklopedisi.org.tr/muzafferiler) — TDV muzafferiler: Yezd emirliği 718/1318 · İncû Ebû İshak İsfahan'da öldürüldü 758/1357, 'aynı yıl … Kirman eyaletini de … kattı, böylece Irak'ın büyük bir kısmı ile Fars bölgesinin hâkimi oldu' · 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)' · son 795/1393.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | künye `incu` 1325-1357 VAR, pencere tutuyor |

### 30. Câsk  ·  aile H3 Mekrân/Hürmüz/Lâr/Yezd  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | ÖLÇ | — | — | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |

### 31. Cîruft  ·  aile H2 Kirman  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [kirman](https://islamansiklopedisi.org.tr/kirman) — TDV kirman: Kutluğhanlı hâkimiyeti 706 (1306-07)'ye dek · 'Kirman 741'de (1340-41) Muzafferîler … tarafından ele geçirildi' · Safevî 908 (1502-03) · 'Şehir 1132'de (1720) ve tekrar 1134'te (1722) Afganlar tarafından alındı' · Ağa Muhammed 1208/1794.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01; TDV kirman: 'Kirman 741'de (1340-41) Muzafferîler … ele geçirildi' | ② | fazla (muzafferi ~5 yıl erken) | bölge cümlesi (D208) | önceki kimlik `ilhanli` (künye t:1353) kapsıyor |
| 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | bölge cümlesi (D208) | künye `galzay` 1709-04-21→1738 VAR, pencere tutuyor · TDV kirman: 1720 ve 1722 Afganlar aldı |

### 32. Dizfûl  ·  aile G Hûzistan  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | lur-i-buzurg | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1508-01-01 | — |
| 6 | safevi | 1508-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [huzistan](https://islamansiklopedisi.org.tr/huzistan) — TDV huzistan: Abaka Hûzistan'ı Luristan Atabegi I. Yûsuf Şah'a iktâ verdi · 'Akkoyunlular'ın dağılmasının ardından Hûzistan … Müşa'şa'lar'ın eline geçti. Ahvaz, Dizfûl ve Şüşter'i hâkimiyetlerine alan Müşa'şa'lar'ın yaklaşık yetmiş yıl süren bağımsızlıkları … 1508'de … sona erdiyse de' · Safevîler idareyi tâbiiyet şartıyla onlara bıraktı · 1925 Rıza Han Haz'al'a son verdi.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter'i aldı, ~70 yıl bağımsız, 1508'den sonra Safevî'ye tâbi | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | şehir (adıyla) | Müşa'şa' künyesi YOK ⇒ BLOKE |

### 33. Dârâb  ·  aile H1 Fars  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [muzafferiler](https://islamansiklopedisi.org.tr/muzafferiler) — TDV muzafferiler: Yezd emirliği 718/1318 · İncû Ebû İshak İsfahan'da öldürüldü 758/1357, 'aynı yıl … Kirman eyaletini de … kattı, böylece Irak'ın büyük bir kısmı ile Fars bölgesinin hâkimi oldu' · 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)' · son 795/1393.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | künye `incu` 1325-1357 VAR, pencere tutuyor |

### 34. Ebrekûh  ·  aile H3 Mekrân/Hürmüz/Lâr/Yezd  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | ÖLÇ | — | — | Yezd bölgesi (Muzafferî üssü 1318) — şehir kaynağı yok · kaynak doğrulanmadı |

### 35. Fesâ  ·  aile H1 Fars  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [muzafferiler](https://islamansiklopedisi.org.tr/muzafferiler) — TDV muzafferiler: Yezd emirliği 718/1318 · İncû Ebû İshak İsfahan'da öldürüldü 758/1357, 'aynı yıl … Kirman eyaletini de … kattı, böylece Irak'ın büyük bir kısmı ile Fars bölgesinin hâkimi oldu' · 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)' · son 795/1393.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | künye `incu` 1325-1357 VAR, pencere tutuyor |

### 36. Firûzâbâd  ·  aile H1 Fars  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [muzafferiler](https://islamansiklopedisi.org.tr/muzafferiler) — TDV muzafferiler: Yezd emirliği 718/1318 · İncû Ebû İshak İsfahan'da öldürüldü 758/1357, 'aynı yıl … Kirman eyaletini de … kattı, böylece Irak'ın büyük bir kısmı ile Fars bölgesinin hâkimi oldu' · 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)' · son 795/1393.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | künye `incu` 1325-1357 VAR, pencere tutuyor |

### 37. Havîza  ·  aile G Hûzistan  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | lur-i-buzurg | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1508-01-01 | — |
| 6 | safevi | 1508-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [huzistan](https://islamansiklopedisi.org.tr/huzistan) — TDV huzistan: Abaka Hûzistan'ı Luristan Atabegi I. Yûsuf Şah'a iktâ verdi · 'Akkoyunlular'ın dağılmasının ardından Hûzistan … Müşa'şa'lar'ın eline geçti. Ahvaz, Dizfûl ve Şüşter'i hâkimiyetlerine alan Müşa'şa'lar'ın yaklaşık yetmiş yıl süren bağımsızlıkları … 1508'de … sona erdiyse de' · Safevîler idareyi tâbiiyet şartıyla onlara bıraktı · 1925 Rıza Han Haz'al'a son verdi.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter'i aldı, ~70 yıl bağımsız, 1508'den sonra Safevî'ye tâbi | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | bölge cümlesi (D208) | Müşa'şa' künyesi YOK ⇒ BLOKE · Havîze'nin Müşa'şa' başkenti olduğu yalnız arama özetinde geçti (madde sayfası çekilmedi) |

### 38. Hâş  ·  aile H3 Mekrân/Hürmüz/Lâr/Yezd  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | ÖLÇ | — | — | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |

### 39. Kâzerûn  ·  aile H1 Fars  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [inculular](https://islamansiklopedisi.org.tr/inculular) — TDV inculular: '1303-1357 yılları arasında Fars ve İsfahan'da hüküm süren bir hânedan' · Şîraz/Fars 725/1325 · Şîraz Muzafferî'ye 754/1353 · son 12 Mayıs 1357.
- [muzafferiler](https://islamansiklopedisi.org.tr/muzafferiler) — TDV muzafferiler: Yezd emirliği 718/1318 · İncû Ebû İshak İsfahan'da öldürüldü 758/1357, 'aynı yıl … Kirman eyaletini de … kattı, böylece Irak'ın büyük bir kısmı ile Fars bölgesinin hâkimi oldu' · 'bütün Irak'a hâkim olan Şah Mansûr 793 (1391)' · son 795/1393.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01'de başlıyor; TDV inculular: Fars 1325'ten İncû'da, Şîraz Muzafferî'ye 1353; TDV muzafferiler: Fars hâkimiyeti 1357 | ③ | fazla (muzafferi ~18-22 yıl erken) / eksik (incu) | bölge cümlesi (D208) | künye `incu` 1325-1357 VAR, pencere tutuyor |

### 40. Lâr  ·  aile H3 Mekrân/Hürmüz/Lâr/Yezd  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | ÖLÇ | — | — | TDV lar yalnız 'Lâristan'a gönderme; Lâr melikleri zincirde yok — doğrulanmadı · kaynak doğrulanmadı |

### 41. Mînâb  ·  aile H3 Mekrân/Hürmüz/Lâr/Yezd  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | ÖLÇ | — | — | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |

### 42. Rafsencân  ·  aile H2 Kirman  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [kirman](https://islamansiklopedisi.org.tr/kirman) — TDV kirman: Kutluğhanlı hâkimiyeti 706 (1306-07)'ye dek · 'Kirman 741'de (1340-41) Muzafferîler … tarafından ele geçirildi' · Safevî 908 (1502-03) · 'Şehir 1132'de (1720) ve tekrar 1134'te (1722) Afganlar tarafından alındı' · Ağa Muhammed 1208/1794.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01; TDV kirman: 'Kirman 741'de (1340-41) Muzafferîler … ele geçirildi' | ② | fazla (muzafferi ~5 yıl erken) | bölge cümlesi (D208) | önceki kimlik `ilhanli` (künye t:1353) kapsıyor |
| 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | bölge cümlesi (D208) | künye `galzay` 1709-04-21→1738 VAR, pencere tutuyor · TDV kirman: 1720 ve 1722 Afganlar aldı |

### 43. Râmhürmüz  ·  aile G Hûzistan  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | lur-i-buzurg | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1508-01-01 | — |
| 6 | safevi | 1508-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [huzistan](https://islamansiklopedisi.org.tr/huzistan) — TDV huzistan: Abaka Hûzistan'ı Luristan Atabegi I. Yûsuf Şah'a iktâ verdi · 'Akkoyunlular'ın dağılmasının ardından Hûzistan … Müşa'şa'lar'ın eline geçti. Ahvaz, Dizfûl ve Şüşter'i hâkimiyetlerine alan Müşa'şa'lar'ın yaklaşık yetmiş yıl süren bağımsızlıkları … 1508'de … sona erdiyse de' · Safevîler idareyi tâbiiyet şartıyla onlara bıraktı · 1925 Rıza Han Haz'al'a son verdi.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter'i aldı, ~70 yıl bağımsız, 1508'den sonra Safevî'ye tâbi | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | bölge cümlesi (D208) | Müşa'şa' künyesi YOK ⇒ BLOKE |

### 44. Sircân  ·  aile H2 Kirman  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [kirman](https://islamansiklopedisi.org.tr/kirman) — TDV kirman: Kutluğhanlı hâkimiyeti 706 (1306-07)'ye dek · 'Kirman 741'de (1340-41) Muzafferîler … tarafından ele geçirildi' · Safevî 908 (1502-03) · 'Şehir 1132'de (1720) ve tekrar 1134'te (1722) Afganlar tarafından alındı' · Ağa Muhammed 1208/1794.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi` 1335-12-01; TDV kirman: 'Kirman 741'de (1340-41) Muzafferîler … ele geçirildi' | ② | fazla (muzafferi ~5 yıl erken) | bölge cümlesi (D208) | önceki kimlik `ilhanli` (künye t:1353) kapsıyor |
| 1722-1729 Afgan (Hotakî/Galzay) dönemi zincirde YOK (`safevi` →1736 kesintisiz) | ③ | eksik (galzay) | bölge cümlesi (D208) | künye `galzay` 1709-04-21→1738 VAR, pencere tutuyor · TDV kirman: 1720 ve 1722 Afganlar aldı |

### 45. Zencan  ·  aile F Sâve/Zencan  ·  `yerlesimler.js`  ·  kaynaksız s: 9/10 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | ilhanli | 1335-12-01 | 1340-01-01 | — |
| 3 | celayirli | 1340-01-01 | 1383-01-01 | — |
| 4 | timurlu | 1383-01-01 | 1410-01-01 | — |
| 5 | karakoyunlu | 1410-01-01 | 1469-01-01 | — |
| 6 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 7 | safevi | 1503-01-01 | 1736-03-08 | TDV safeviler, BİREBİR: "909’da (1503) Irâk-ı Arab ve Fars hâkimi Murad Bey’e karşı yürüye… |
| 8 | afsar | 1736-03-08 | 1747-06-20 | — |
| 9 | zend | 1747-06-20 | 1794-01-01 | — |
| 10 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zencan](https://islamansiklopedisi.org.tr/zencan) — TDV zencan: 'Timur 1382-1383 yıllarında Zencan … ele geçirdi' · '832'de (1428-29) Sultâniye, Ebher, Kazvin ve Zencan, Timurlular'dan … Hoca Yûsuf'un idaresindeydi' · Karakoyunlu İskender Hoca Yûsuf'u esir aldı · 1724: Tahmasb'a kalan şehirler arasında Zencan · 'Zencan 1197'de (1782-83) Kaçarlı Ağa Muhammed Şah'ın hâkimiyetine girdi'.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `karakoyunlu` 1410-01-01; TDV zencan: 832 (1428-29) Zencan hâlâ Timurlu valisi Hoca Yûsuf'un idaresinde, Karakoyunlu İskender sonra aldı | ② | fazla (karakoyunlu ≥18 yıl erken) / eksik (timurlu) | şehir | künye `timurlu` t:1507 kapsıyor |
| `zend` →1794 / `kacar` 1794→; TDV zencan: 1197 (1782-83) Ağa Muhammed'in hâkimiyetine girdi | ③ | fazla (zend) / eksik (kacar 1782/83-1794) | şehir | künye `kacar` f:1789 ⇒ 1782/83-1789 TUTMAZ, BLOKE |

### 46. Çâhbahâr  ·  aile H3 Mekrân/Hürmüz/Lâr/Yezd  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | muzafferi | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1503-01-01 | — |
| 6 | safevi | 1503-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `muzafferi`→…→`kacar` şablonu bu şehir için kaynakla sınanamadı | ÖLÇ | — | — | Hürmüz/Mekrân kıyısı; `hurmuz-sultanligi` künyesi (1281-1514) VAR ama zincirde kullanılmamış; TDV hurmuz yalnız ada/Benderabbas'ı anlatıyor, bu şehri DEĞİL; TDV mekran arama sayfası döndü · kaynak doğrulanmadı |

### 47. Şeki (Nuha)  ·  aile B Şirvan  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | sirvansah | 1335-12-01 | 1538-01-01 | — |
| 3 | safevi | 1538-01-01 | 1736-03-08 | — |
| 4 | afsar | 1736-03-08 | 1747-06-20 | — |
| 5 | zend | 1747-06-20 | 1794-01-01 | — |
| 6 | kacar | 1794-01-01 | 1813-10-24 | — |
| 7 | rusya | 1813-10-24 | 1917-03-15 | — |
| 8 | rusya-gecici-hukumet | 1917-03-15 | 1917-11-07 | — |
| 9 | sovyet-rusya | 1917-11-07 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [seki](https://islamansiklopedisi.org.tr/seki) — TDV seki: Safevî saldırısı 955/1548, Şah Tahmasb 1551 · 1578 Osmanlı hedefi · 'Nâdir Şah'ın öldürülmesiyle 1743'te kurulan Şeki Hanlığı tamamen bağımsız hale geldi' (1747) · 21 Mayıs 1805 Rusya ile anlaşma · 1819 Ermolov ilhak.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `safevi` 1538-01-01'de başlıyor; TDV seki: Safevî saldırısı 1548, Şah Tahmasb 1551 | ③ | fazla (safevi ~13 yıl erken) | şehir | 1538-1551 Şeki yerel hâkimi (Derviş Mehmed) — künye YOK ⇒ ③ ADAY |
| 1747-1813 `zend`→`kacar`→`rusya`; TDV: Şeki Hanlığı (1743 kuruldu, 1747 tam bağımsız) → 21 Mayıs 1805 Rus tâbiiyeti → 1819 ilhak | ③ | eksik (Şeki Hanlığı) / fazla (zend, kacar; rusya s: 1813-1819 erken) | şehir | Şeki Hanlığı künyesi YOK ⇒ BLOKE |

### 48. Şüşter  ·  aile G Hûzistan  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 8

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | lur-i-buzurg | 1335-12-01 | 1393-01-01 | — |
| 3 | timurlu | 1393-01-01 | 1452-01-01 | — |
| 4 | karakoyunlu | 1452-01-01 | 1469-01-01 | — |
| 5 | akkoyunlu | 1469-01-01 | 1508-01-01 | — |
| 6 | safevi | 1508-01-01 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [huzistan](https://islamansiklopedisi.org.tr/huzistan) — TDV huzistan: Abaka Hûzistan'ı Luristan Atabegi I. Yûsuf Şah'a iktâ verdi · 'Akkoyunlular'ın dağılmasının ardından Hûzistan … Müşa'şa'lar'ın eline geçti. Ahvaz, Dizfûl ve Şüşter'i hâkimiyetlerine alan Müşa'şa'lar'ın yaklaşık yetmiş yıl süren bağımsızlıkları … 1508'de … sona erdiyse de' · Safevîler idareyi tâbiiyet şartıyla onlara bıraktı · 1925 Rıza Han Haz'al'a son verdi.
- [suster](https://islamansiklopedisi.org.tr/suster) — TDV suster: Abaka bölgeyi Atabeg Yûsuf'a verdi, 'bir asır süren Atabegler dönemi' · '1375'te Muzafferîler'in, ardından Timurlular'ın hâkimiyeti altına giren Şüşter' · '914'te (1508) Şah İsmâil'in eline geçti'.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| Müşa'şa' (Havîze merkezli Arap Şiî hanedanı) zincirde HİÇ yok: `karakoyunlu` 1452→`akkoyunlu`→`safevi` 1508; TDV: Müşa'şa'lar Ahvaz, Dizfûl, Şüşter'i aldı, ~70 yıl bağımsız, 1508'den sonra Safevî'ye tâbi | ③ | eksik (müşa'şa') / fazla (karakoyunlu/akkoyunlu) | şehir (adıyla) | Müşa'şa' künyesi YOK ⇒ BLOKE |
| `lur-i-buzurg` 1335→1393; TDV suster: '1375'te Muzafferîler'in, ardından Timurlular'ın hâkimiyeti' | ③ | eksik (muzafferi 1375-~1393) / fazla (lur-i-buzurg) | şehir | künye `muzafferi` 1318-1393 VAR, pencere tutuyor |

### 49. Esterâbâd (Gürgân)  ·  aile I Horasan/Gürgân  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 7

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | ilhanli | 1335-12-01 | 1337-09-09 | — |
| 3 | serbedariler | 1337-09-09 | 1386-01-01 | — |
| 4 | timurlu | 1386-01-01 | 1507-05-01 | — |
| 5 | mazenderan-marasi | 1507-05-01 | 1510-12-02 | — |
| 6 | safevi | 1510-12-02 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [esterabad](https://islamansiklopedisi.org.tr/esterabad) — TDV esterabad: 'bölge İlhanlılar, Timurlular ve mahallî Türk beylerinin savaş alanı haline geldi' (TARİHSİZ) · '1510'da Safevî Hükümdarı Şah İsmâil tarafından ele geçirildi' · Kaçar/Zend YOK (→ kacarlar).
- [kacarlar](https://islamansiklopedisi.org.tr/kacarlar) — TDV kacarlar: Muhammed Hasan Han 1747 Esterâbâd'a geldi · 1749 Esterâbâd beylerbeyi · 1750 bağımsız, 'Esterâbâd ve Cürcân'dan başka Mâzenderan ve Gîlân'ı da idaresi altına aldı' · 1756 Kerim Han'ı bozup Irâk-ı Acem'i ele geçirdi · 1757 Arrân, Karabağ, Mugan · öldü 13 Şubat 1759 · Ağa Muhammed 1779'da Şîraz'dan kaçtı · 1786 Tahran tahta çıkış 'diğer kaynaklar teyit etmemektedir' · 1796 Tahran'da taç.
- [serbedariler](https://islamansiklopedisi.org.tr/serbedariler) — TDV serbedariler: isyan 13 Mart 1337 · 'Sebzevâr'ın kontrolünü ele geçirip (9 Eylül 1337)' · Nîşâbur 1340-41 · 'Câcerm, Damgan, Simnân ile Togay Timur'un başşehri Gürgân'ı ele geçiren Serbedârîler' (TARİHSİZ) · Togay Timur öldürüldü 13 Aralık 1353 · Timur 1381 Sebzevâr · son 1386.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| `serbedariler` 1337-09-09; TDV serbedariler: Gürgân Togay Timur'un başşehriydi, Serbedâr onu sonra aldı; Togay 13 Aralık 1353'te öldürüldü | ② | fazla (serbedar erken) / eksik (ilhanli-Togay) | hanedan maddesi, şehir adıyla (Gürgân) | künye `ilhanli` t:1353 kapsıyor · 1337-09-09 Sebzevâr günü (D207 beyansız devralma) |
| 1747-1794 `zend`; TDV kacarlar: Muhammed Hasan Han 1747 Esterâbâd, 1749 beylerbeyi, 1750 bağımsız (Esterâbâd/Cürcân/Mâzenderan/Gîlân), öldü 1759; Ağa Muhammed 1779'da Şîraz'dan kaçtı | ③ | eksik (kaçar 1747-1759, ~1779-1794) / fazla (zend) | hanedan maddesi, şehir adıyla | künye `kacar` f:1789 ⇒ pencere TUTMAZ, BLOKE |
| `timurlu` 1386 / `mazenderan-marasi` 1507-1510: TDV esterabad yalnız 'İlhanlılar, Timurlular ve mahallî Türk beylerinin savaş alanı' (tarihsiz); 1510 Safevî ✓ | ÖLÇ | — | şehir | Emîr Velî vb. ara sahipler kaynakla tarihlenemedi |

### 50. Meşhed  ·  aile I Horasan/Gürgân  ·  `yerlesimler.js`  ·  kaynaksız s: 9/9 · değişim 7

| # | atlas `s:` sahip | f | t | `kaynak:` |
|---|---|---|---|---|
| 1 | ilhanli | 1281-01-01 | 1335-12-01 | — |
| 2 | ilhanli | 1335-12-01 | 1337-09-09 | — |
| 3 | serbedariler | 1337-09-09 | 1381-04-01 | — |
| 4 | timurlu | 1381-04-01 | 1507-05-24 | — |
| 5 | buhara | 1507-05-24 | 1510-12-02 | — |
| 6 | safevi | 1510-12-02 | 1736-03-08 | — |
| 7 | afsar | 1736-03-08 | 1747-06-20 | — |
| 8 | zend | 1747-06-20 | 1794-01-01 | — |
| 9 | kacar | 1794-01-01 | 1923-10-29 | — |

**Kaynak kronolojisi (çekilen sayfa):**
- [avsarlilar](https://islamansiklopedisi.org.tr/avsarlilar) — TDV avsarlilar: 'Horasan emîrleri Meşhed'de … Şâhruh Mirza'yı hükümdarlık makamına geçirdiler (Ekim 1748)' · Dürrânî saldırısı 1753-1755 · Şâhruh 1210/1796 öldü · hanedan sonu Şubat 1804.
- [meshed--iran](https://islamansiklopedisi.org.tr/meshed--iran) — TDV meshed--iran: Mîrân Şah Tûs'u 791/1389 aldı · Uluğ Bey 852/1448 · 913/1507 Şeybânî Han · Şah I. Abbas Meşhed'i 'ancak dokuz yıl sonra geri alabildi' (Özbek işgali) · Ahmed Dürrânî 1163/1750 veya 1167/1754, Horasan Dürrânî'ye tâbi · Ağa Muhammed Şâhruh'u idam ettirdi · birleştirme 1218/1803 · Serbedâr YOK.
- [serbedariler](https://islamansiklopedisi.org.tr/serbedariler) — TDV serbedariler: isyan 13 Mart 1337 · 'Sebzevâr'ın kontrolünü ele geçirip (9 Eylül 1337)' · Nîşâbur 1340-41 · 'Câcerm, Damgan, Simnân ile Togay Timur'un başşehri Gürgân'ı ele geçiren Serbedârîler' (TARİHSİZ) · Togay Timur öldürüldü 13 Aralık 1353 · Timur 1381 Sebzevâr · son 1386.
- [zendler](https://islamansiklopedisi.org.tr/zendler) — TDV zendler: İsfahan 1163 (1750) · 'Kerim Han, 1751 yılının ilk aylarında … Zendler'i fiilen İran'da iktidara geçirdi' · Şîraz başşehir 1180 (1766-67) · Ağa Muhammed Şîraz'a girdi 10 Temmuz 1793 · Lutf Ali Kirman'ı aldı Mart 1794 · hanedan sonu Aralık 1794 · Horasan (Meşhed), Kafkas hanlıkları ve Tahran'da Zend hâkimiyeti maddede YOK.

**Uyuşmazlıklar (önce D205, sonra etiket):**

| uyuşmazlık | D205 | eksik/fazla/ters | kanıt düzeyi | not |
|---|---|---|---|---|
| `zend` 1747-06-20'de başlıyor; TDV Zend iktidarını 1750 (İsfahan) / 1751 başına koyuyor, künye `zend` f:1751-01-01 (künye aşımı) | ① | fazla (zend erken) | hanedan maddesi | 1747-1750/51 arası sahibin kimliği bu şehir için kaynakta yok — dönemin KISALMASI ölçüldü, yerine ne geleceği ölçülmedi |
| 1747-1794 `zend`; TDV avsarlilar: Şâhruh Meşhed'de Ekim 1748'de tahta çıktı, 1796'ya dek; TDV meshed--iran: Horasan Dürrânî'ye tâbi (1750/1754); TDV zendler Meşhed'i anmıyor | ② | fazla (zend) / eksik (afşar 1747-1796) | şehir | künye `afsar` 1736-03-08→1796-01-01 VAR — veri künyeden DAR; Dürrânî tâbiiyeti ayrı (v:) sorusu |
| `kacar` 1794-01-01; TDV: Ağa Muhammed Şâhruh'u idam ettirdi (1796), birleştirme 1218/1803 | ② | fazla (kacar ~2-9 yıl erken) | şehir | afşar sürer |
| 1589-1598 Özbek işgali zincirde yok; TDV: 'Şah I. Abbas Meşhed'i ancak dokuz yıl sonra geri alabildi' | ③ | eksik (buhara) | şehir | künye `buhara` 1500-1921 VAR; başlangıç yılı alıntıda açık değil |
| `serbedariler` 1337-1381, `timurlu` 1381-04-01: TDV meshed--iran Serbedâr'ı anmıyor, Mîrân Şah Tûs'u 1389'da aldı | ÖLÇ | — | şehir | Tûs/Meşhed ayrımı; Câun-ı Kurbânî kaynakla sınanamadı |


## 8. Sınırlar ve yöntem notları

- **D207:** hiçbir sınıflamada komşu kaydın günü, künye günü ya da koordinat KANIT olarak kullanılmadı. Künyeye yalnız iki soru için bakıldı: "ardıl kimlik var mı" ve "penceresi tutuyor mu" (D205 ön koşulu). Hiçbir kaleme komşu günü yazılmadı (Astara'ya Lenkeran'ın hanlık bilgisi yalnız "aday" olarak ve gün devralınmadan not edildi).
- **D208:** bölge cümlesi (Fars, Kirman, Hûzistan, Azerbaycan, "bütün Irak") şehir tanıklığı sayılmadı; tablolarda "bölge cümlesi (D208)" diye işaretli. Sınıf doğru olabilir ama şehrin günü değildir.
- **D211⑥:** TDV maddeleri arası farklar (İsfahan Safevî 1503/1505, Bakü Rus dönüşü 1734/1735) çelişki ilan edilmedi, ÖLÇÜLEMEDİ'ye kondu.
- Seçim kutusu kabadır (§1); kutu sınırındaki şehirler bağ sırasını değiştirebilir (50. sıra Meşhed / 51. Reşt).
- Hiçbir düzeltme, diff ya da yama önerisi yazılmadı; çareler D205 sınıfının söylediğiyle sınırlı.
- Araçlar: `olc.py` (seçim), `dump.py` (zincir dökümü), `rapor.py` (tablolar) — scratchpad `krono\`; repo'ya yazılmadı.
