# EK OKUMA KARTLARININ KRONOLOJİYE DAĞITIMI — 13 Eylül 2026

Emre: *"şimdilik yaptığın maddeleri kartları dağıt en uygun kronoloji maddelerine."*
Kart METİNLERİNE dokunulmadı; yalnız bağ alanları (`olay` / `baglanti` / magazinde `t`) değişti.

Aletler:
- `denetim/ARAC-EKOKUMA-DAGITIM-0913.js`: ölçüm. `KART_DIR=<dizin>` ile önce/sonra kıyası yapar, `--kartsiz` ile kartsız listeyi yazar.
- `denetim/ARAC-EKOKUMA-DAGITIM-0913-aday.js`: eksik bağ adayı üretir (yıl + ortak kelime, Türkçe normalleştirici). Hüküm vermez.
- `denetim/ARAC-EKOKUMA-DAGITIM-0913-yama.js`: 47 değişikliği uygular. Her değişiklik kart id'sine çıpalıdır ve tam 1 eşleşme şartı vardır. Biri tutmazsa hiçbir dosya yazılmaz. Dosyalar eval ile sınanır ve değişken adının değişmediği doğrulanır.
- `denetim/EKOKUMA-KARTSIZ-ONCELIK-0913.json`: kartsız öncelik adayları (416).

## ① Bağlama kuralı — ölçüldü (`js/app.js:6844 ekKartBagliMi`)

```
tur === "magazin" || tur yok   → kart.t === o.t          (TEK madde)
diğer türler                   → (kart.olay || kart.baglanti).indexOf(o.t) >= 0
"merak" türü                   → YALNIZ window.MERAK
"antlasma" türü                → ANTLASMALAR (savaslar.js, t ile) + havuzdaki tur:"antlasma"
```
🔴 **Anahtar yalnız TARİHTİR.** Maddelerin `id` alanı yok. Aynı `t`'yi paylaşan her madde karta birlikte bağlanır (bkz. ④).

## ② Sayılar — önce / sonra (aynı alet, önce = `git show HEAD:` kopyası)

| ölçü | ÖNCE | SONRA |
|---|---|---|
| kart (11 dosya) | 92 | 92 |
| görünür kart → madde isabeti | 204 | **290** |
| en az 1 kartı olan madde (EKOKUMA+MERAK) | 159 | **217** |
| en az 1 butonu olan madde (ANTLASMALAR dahil) | 185 | **242** |
| hiçbir maddeye düşmeyen bağ tarihi | 8 | **0** |
| hiçbir yerde görünmeyen kart | 2 (`i-murad-sehadeti` · `savas-nigbolu-1396`) | **0** |
| aynı gün çakışma satırı | 21 | 28 (bkz. ④) |

Tür başına kartlı madde:

| tür | önce | sonra |
|---|---|---|
| sebep-sonuc | 53 | 68 |
| merak | 46 | 64 |
| savas-hikayesi | 13 | 46 |
| kimdir | 20 | 27 |
| antlasma (havuz) | 13 | 16 |
| edebiyat | 9 | 14 |
| magazin | 14 | 15 |
| teknik-bilimsel | 12 | 13 |
| tartisma | 9 | 9 |
| ANTLASMALAR (dokunulmadı) | 43 | 43 |

İsabeti değişen kart sayısı 42. Madde evreni: 1349 çekirdek madde, `index.html`'in yüklediği `olaylar*.js` dosyaları. `kronoloji_*.js` kuyruğu panelde `obGoster`'e gitmediği için evrene girmez.

## ③ Yapılan değişiklikler (11 dosya, 47 kalem)

**Kopuk bağ onarıldı.** Bu tarihler hiçbir maddeye düşmüyordu; madde `t`'si sonradan güne çekilmiş (D181):
- `merak:i-murad-sehadeti`: `1389-06` → `1389-06-15`. `merak.js:41`'deki "*madde öyle taşıyor*" notu artık yanlış.
- `merak:haclilar`: `1396-09` → `1396-09-25` · `1444-11` → `1444-11-10`
- `savas-nigbolu-1396`: `1396-09` → `1396-09-25`, ayrıca 1395 Niğbolu'nun fethi eklendi.
- `merak:kapitulasyon`: `1580-06-01` → `1580-01-01` (KITA 14'ün birleştirdiği tek madde).
- `savas-cerbe-1560`: `1560-01-01` → `1560-03-12` (Haçlı işgali).
- `ingiltere-kapitulasyon-1580-tartisma`: madde karşılığı olmayan `1578-01-01` ve `1581-09-11` `olay`'dan çıkarıldı. `sebep.t` ve `sonuc.t` duruyor.

**Yanlış bağ düzeltildi.** Kart o maddeyi anlatmıyordu:
- `ekokuma:zimmi-cizye-millet-duzeni`: 1421 Devşirme çıkarıldı (kartta devşirme hiç geçmiyor). Yerine 1839 Tanzimat eklendi (`bag` alanı anıyor).
- `magazin:yavuz-baba-zehir-soylentisi`: `t` cülustan (1512-04-24) **ölüm maddesine** (1512-05-26) taşındı. Kart ölümü anlatıyor.
- `magazin:hurrem-nikah-buyu-soylentisi`: `t` Hürrem'in ölümünden (1558-04-15) **nikâh maddesine** (1534-01-01) taşındı. Kart nikâhı anlatıyor, ölümü anmıyor.
- `kadin:tartisma-kadinlar-saltanati`: III. Murad vefatı (1595-01-16) → Safiye Sultan nüfuzu (1595-02-01).

**Eksik bağ eklendi.** Kart o olayı en az bir cümleyle adıyla anlatıyor; yan cümle içindeki tarih anmaları alınmadı:

| kart | eklenen maddeler |
|---|---|
| savas-ankara-1402 | 1399 kaçaklar · 1400 Sivas · 1401 Erzincan-Kemah · 1402-03-13 ültimatom · 1402-08-01 şehzadeler · 1402-09-15 beylikler · 1403-03-09 Bayezid'in ölümü |
| savas-caldiran-1514 | Tebriz'e giriş · Tebriz'den çekiliş · 1515 Kemah · Turnadağ · Âmid |
| savas-ridaniye-1517 | Gazze · Tomanbay baskını · Kahire'ye giriş · Tomanbay'ın idamı |
| savas-mercidabik-1516 | hedefin ilanı · Halep · halifeyle görüşme · Şam |
| savas-inebahti-1571 | 1570 Kıbrıs çıkarması · donanmanın yeniden inşası ×2 · 1573 Venedik antlaşması · 1574 Tunus |
| savas-mohac / preveze / kosova-1389 / varna | Budin'in teslimi / 1537 Ege seferi / 1388 Bileća / Edirne-Segedin |
| merak:canakkale-hisar | Gelibolu 1354 · 1366 · 1376 · 1395 Anadolu Hisarı |
| merak:gurcistan | 1490 krallığın üçe bölünmesi · Amasya 1555 · Kasr-ı Şirin 1639 |
| merak:karaman | 1381 Hamîd ilinin satın alınışı · 1415 Konya kuşatması |
| merak:kardes-katli | 1595-01-27 on dokuz şehzade (konu örneği; kart adıyla anmıyor, kurum kartı) |
| merak:kadinlar-saltanati | 1583 Nurbânû'nun vefatı |
| merak:kapitulasyon | 1914 kaldırılış · 1923 Lozan |
| merak:timur-sehzadeleri | 1402-03-13 dört şart |
| antlasma2 | Belgrad hükümleri → Niş 1739 · Kasr-ı Şirin s-s → Nadir Şah 1736 · Belgrad s-s → 1738 Özi/Semendire · Bükreş s-s → 1815 İkinci Sırp İsyanı · Edirne s-s → 1821 Yunan İsyanı · 1827 Londra · 1834 Rus çekilmesi · Paris s-s → 1877 savaş ilanı · 1878 Berlin |
| ekokuma (antlaşma) | Karlofça → 1703 Yenikale inşası · Berlin → 1878 Bosna-Hersek işgali |
| kadin | Hürrem → İbrahim Paşa'nın idamı · Mustafa'nın idamı; Nurbânû → 1574 cülus; Safiye → 1595 nüfuz · 1603 III. Mehmed'in vefatı · 1665 Yeni Cami; Kösem → 1648 cülus; Mihrimah → 1544 Rüstem'in sadrazamlığı |
| edebiyat | Bâkî mersiyesi → Kanunî'nin vefatı; cülûsiye → II. Selim'in cülusu; Nedîm (Lâle Devri) → Damad İbrahim'in sadrazamlığı; Nedîm'in ölümü → Patrona Halil İsyanı |
| mimari · sh104 · ekonomi | Sultanahmet → Sedefkâr'ın atanması · Topkapı → 1478 tamamlanma · iltizam → Küçük Kaynarca tazminatı · kapitülasyon zinciri → 1580 İngiltere · 1612 Hollanda · 1923 Lozan |

⚠️ **Magazin'e eklenen `olay` değerleri BUGÜN ETKİSİZ.** Kural yalnız `t`'yi okur. Bunlar: `yavuz-baba` @ 1512-04-24 (cülus) ve `abdulhamid-hal-korkusu` @ 1878-05-20 (Çırağan). App.js'e öneri aşağıda (⑥).

**Satır sonu:** `merak.js` çalışma kopyasında CRLF. Eklenen 2 not satırı LF'ydi, dosya tekrar CRLF'ye çekildi (302/302). Öteki 10 dosya baştan LF, tutarlı.

## ④ Çakışmalar — tarih anahtarının bedeli

**Kartın İLGİSİZ bir maddede de çıktığı günler.** Bu turda yeni ilgisiz madde AÇILMADI. Ancak iki satırda var olan çakışmaya buton eklendi.

| gün | doğru madde ‖ ilgisiz madde | kartlar |
|---|---|---|
| 1534-01-01 | Hürrem nikâhı ‖ **Matrakçı Nasuh Beyân-ı Menâzil** | siyasi-evlilikler · kadinlar-saltanati · kimdir-hurrem · +magazin hurrem (bu tur) |
| 1580-01-01 | İngiltere ahidnâmesi ‖ **Zal Mahmud Paşa Camii** | tartisma · +merak kapitülasyon · +ekonomi kapitülasyon (bu tur) |
| 1566-01-01 | Mostar Köprüsü ‖ Mihrimah (Edirnekapı) Camii | iki mimari kartı ÇAPRAZ düşüyor · kimdir-mihrimah Mostar'da |
| 1577-01-01 | İstanbul Rasathanesi ‖ Fizan · Drina Köprüsü · Azapkapı Camii | tartışma kartı 3 ilgisiz maddede |
| 1468-01-01 | Karaman'ın ilhakı ‖ Kasım Hanlığı | merak karaman |
| 1635-01-01 | Nef'î'nin idamı ‖ Yemen'in kaybı | edebiyat |
| 1547-01-01 | Üsküdar Mihrimah Külliyesi ‖ Sana-Yemen fethi | kimdir-mihrimah |
| 1603-01-01 | Yeni Cami inşaatının durması ‖ Deli Hasan isyanı | kimdir-safiye |
| 1585-01-01 | Büyük tağşiş ‖ Nahçıvan-Ordubad | ekonomi |
| 1695-01-01 | Malikâne ‖ Hâfız Osman · Dârfûr Sultanlığı | ekonomi |
| 1517-01-22 | Ridaniye ‖ Süveyş'in alınışı | savaş (aynı sefer, zayıf ilgili) |

**İlgili ikiz günler (zararsız):** 1553-10-05 Mustafa'nın idamı ‖ Kara Ahmed'in sadrazamlığı · 1829-09-14 Edirne ‖ Ahıska · 1638-12-24 Bağdat ‖ Kemankeş · 1738-08-01 Özi ‖ Semendire · 1730-09-25 Patrona ‖ Sâdâbâd · 1515-09-19 Âmid ‖ Nusaybin · 1534-12-04 Bağdat ‖ Fuzûlî.

**ÇAKIŞMA YÜZÜNDEN EKLENMEYEN, içerikçe doğru bağlar** (ilgisiz ikiz madde butonu da alırdı):
```
yeniceri-ocagi-kurulusu  1361-01-01 Pençik Kanunu      ‖ Vize'nin fethi
yeniceri-ocagi-kurulusu  1362-06-01 Yeniçeri Ocağı     ‖ Çorlu-Lüleburgaz
merak:canakkale-hisar    1452-01-01 Kilitbahir         ‖ Karakoyunlu Cihan Şah
merak:hint-okyanusu      1559-01-01 Bahreyn seferi     ‖ Zeyla'nın Habeş'e katılması
ekonomi:tagsis           1599-06-01 Karayazıcı         ‖ Ankara sofu ihracı
```

## ⑤ Kart ↔ madde çelişkileri — RAPOR, düzeltilmedi (kronoloji dosyaları benim değil)

1. **Kilitbahir.** Madde (`1452-01-01`) "*II. Mehmed, henüz İstanbul'u almadan önce … inşa ettirdi*" diyor. `merak:canakkale-hisar-ve-zincir` ise TDV Kilitbahir maddesine dayanarak "*İstanbul'un fethinden sonra*, 1463-1465" diyor. İkisi zıt.
2. **II. Bayezid'in ölümü.** Madde `1512-05-26`, magazin kartı TDV'den **10 Haziran 1512**.
3. **Nedîm'in ölümü.** Madde `1730-06-01` "*Patrona Halil isyanı sırasında*" diyor, isyan maddesi ise `1730-09-25`. Madde, anlattığı isyandan 4 ay önce duruyor (muhtemelen `YYYY-MM-01` hassasiyet kodlaması, `§4`).
4. **Niğbolu'nun fethi.** Madde 1395, `savas-nigbolu` kartı "*1394'te … Niğbolu'yu almış*".
5. `1912-10` "Balkan Savaşları başladı" ile `1912-10-08` "I. Balkan Savaşı'nın başlaması": muhtemel mükerrer (kartsız listede ikisi de var).

## ⑥ Yapısal öneriler — `js/app.js` sahibine (KITA 12), uygulanmadı

1. **Magazin tek maddeye kilitli.** Tek satırlık öneri:
   `return kart.t === o.t || (kart.olay || []).indexOf(o.t) >= 0;`
   Magazin dosyasındaki `olay` alanı zaten bunun için konmuş. Etkisiz 2 bağ o gün devreye girer.
2. **Tarih anahtarı ④'teki çakışmaları üretiyor.** Madde kimliği olmadan çözülemez. Öneri: `olay` değerine isteğe bağlı başlık öneki, ör. `"1566-01-01|Mostar"`. Kural `o.b` başlangıcıyla da eşleştirir; önek yoksa bugünkü davranış sürer.
3. **`data/merak_sh104.js` (window.MERAK_SH104, Otranto kartı) HİÇ görünmüyor.** `_EKOKUMA_DOSYA_ADLARI`'nda yok ve "merak" türü yalnız `window.MERAK` okuyor. Benim dosyam değil, taşınmadı.

## ⑦ Sıradaki üretim dalgası — kartsız 30 önemli çekirdek madde

Tam liste (416 aday, puanlı): `denetim/EKOKUMA-KARTSIZ-ONCELIK-0913.json`. Puan heuristiktir (k türü, vefat_id, onem, padişah adı). Aşağıdaki 30 elle seçildi; hepsinin **hiçbir** ek okuma/antlaşma butonu yok. `×2` = aynı gün ikinci madde var, üretimde ④'teki çakışmayı yaşar.

| # | t | madde |
|---|---|---|
| 1 | 1324-08-01 | Osman Gazi'nin vefatı ve Orhan Bey'in beyliğe geçişi |
| 2 | 1326-04-06 | Bursa'nın fethi |
| 3 | 1362-03-01 | Orhan Gazi'nin vefatı |
| 4 | 1413-07 | Çelebi Mehmed birliği yeniden kurdu (Fetret'in sonu) |
| 5 | 1456-07-22 | Belgrad kuşatmasının başarısızlığı |
| 6 | 1460-05-29 | Mora'nın fethi |
| 7 | 1461-08-15 | Trabzon'un fethi |
| 8 | 1473-08-11 | Otlukbeli Savaşı |
| 9 | 1475-06-06 | Kırım'ın Osmanlı himayesine girişi |
| 10 | 1519-09-01 | Cezayir'in Osmanlı Devleti'ne bağlanması |
| 11 | 1520-09-30 | Kanunî Sultan Süleyman tahta çıktı |
| 12 | 1522-12-21 | Rodos'un fethi |
| 13 | 1541-08-29 | Budin'in ilhakı — Macaristan Osmanlı eyaleti |
| 14 | 1551-08-15 | Trablusgarp'ın fethi |
| 15 | 1596-10 | Haçova Meydan Muharebesi |
| 16 | 1617-11-22 ×2 | I. Ahmed'in ölümü, I. Mustafa'nın cülusu — ekberiyet usulü |
| 17 | 1622-05-20 ×2 | Genç Osman'ın yeniçeriler tarafından katledilmesi |
| 18 | 1669-09-27 | Girit'in fethi tamamlandı |
| 19 | 1672-08-27 | Kamaniçe'nin fethi ve Podolya Eyaleti |
| 20 | 1700-07-14 | İstanbul Antlaşması — Azak'ın Rusya'ya bırakılması |
| 21 | 1711-07-19 | Prut Zaferi |
| 22 | 1770-07-06 | Çeşme baskını |
| 23 | 1808-07-28 ×2 | III. Selim öldürüldü (‖ II. Mahmud tahta çıktı) |
| 24 | 1839-06-24 | Nizip Muharebesi |
| 25 | 1839-07-01 | II. Mahmud'un ölümü, Abdülmecid'in cülusu |
| 26 | 1853-11-30 | Sinop Baskını |
| 27 | 1877-07-19 ×2 | Plevne savunmasının başlaması (‖ Şıpka) |
| 28 | 1912-10-08 | I. Balkan Savaşı'nın başlaması |
| 29 | 1914-08-02 | Osmanlı-Alman gizli ittifak antlaşması |
| 30 | 1922-11-01 | Saltanatın kaldırılması |

Yakın adaylar: 1877-04 93 Harbi · 1911-09 Trablusgarp Savaşı · 1922-11-17 Vahdeddin'in ayrılışı · 1918-07-03 V. Mehmed Reşad'ın vefatı · 1918-02-10 II. Abdülhamid'in vefatı · 1774-01-21 III. Mustafa'nın ölümü · 1596-10-12 Eğri'nin fethi.
Yapısal borç olarak: Yeniçeri Ocağı'nın kuruluşu (1361/1362) kartı ZATEN VAR ama çakışma yüzünden bağlanamıyor (④).

## ⑧ Bulunamadı / ölçülemedi

- Galata'nın 1453 ahidnâmesi, Nahçıvan Seferi 1554, Bocskay 1604, Maçin 1791, 1871 Karadeniz reddi, Mihrimah-Rüstem evliliği 1539, Timur'un ölümü 1405, IV. Murad'ın 1635 şehzade katli: çekirdekte **madde yok**. Kart anlatıyor, bağlanacak yer yok.
- Kartların kaynak doğruluğu bu turda yeniden sınanmadı. ⑤'teki çelişkiler kart ile madde arasındaki tutarsızlıktır; hangisinin doğru olduğu ölçülmedi.
- Tarayıcıda canlı sınanmadı. Ölçüm, app.js kuralının Node'da birebir taklididir (`index.html`'in yüklediği dosya kümesiyle).
