# HALKA-ADAY · 13 Eylül 2026 · 9 KALEM KAYNAK GÖVDESİNDEN

> Girdi: `denetim/HALKA-KRONOLOJI-TURETME-0913.md §⑤` (ff43e0c). O rapor 11 çelişkiyi + Derbend + Kandiye'yi
> **madde metninden** çıkardı; burada her biri **kaynak gövdesine** karşı okundu.
> Atlas dönemi yalnız "düzeltilecek yer" olarak gösterildi, **dayanak olarak kullanılmadı** (`CLAUDE.md §4`).
> Veri/kod DEĞİŞMEDİ · commit YOK · öneriler koşu SONRASI için: `denetim/YAMA-HALKA-ADAY-0913.json`.

```
YAZILAN   bu rapor · denetim/YAMA-HALKA-ADAY-0913.json
ALET      denetim/ARAC-HLA-OKU-0913.py (atlas kaydı) · ARAC-HLA-KAYIT-0913.py (halka + madde tam metni)
          ARAC-HLA-BAGLAM-0913.py (TDV gövdesinde desen çevresi, @karakter konumu)
          ARAC-HLA-IRANICA-0913.py (Iranica HTML metni + tablo hicrî→Jülyen/Gregoryen)
          gövde çekimi: denetim/_tdv_oku.py → TEMP (depoya YAZILMADI, telif)
TDV HTTP  canlı 200: trablusgarp-savasi trablusgarp derne bingazi kayseri karamanogullari dulkadirogullari
          erzincan karakoyunlular akkoyunlular uzun-hasan kahramanmaras acara gurcistan batum tilimsan
          meriniler abdulvadiler kandehar tahmasb kamran-mirza cihangir baburluler babur kandiye girit
          sirvan derbend--dagistan mehmed-i dulkadir-eyaleti gedik-ahmed-pasa
          ölü 302: dulkadir memluklar merinogullari merini abdulvadogullari baburlu humayun(×4 varyant)
          tahmasb-i askeri-mirza ibrahim-bey-karamanoglu(×3) melik-arslan sehsuvaroglu-ali-bey
          ⚠️ `maras` ve `zeyyaniler` 200 ama gövde ~2.500 kar. (yönlendirme kütüğü) → kahramanmaras · abdulvadiler okundu
IRANICA   "KANDAHAR iv. From the Mongol Invasion Through the Safavid Era" (curl ile; WebFetch 403 verdi)
```
⚠️ **Konum notu:** `@N` = gövde metninde karakter konumu (`ARAC-HLA-BAGLAM`), basılı sayfa DEĞİL. Basılı cilt/sayfa okunmadı.
⚠️ **Etkin atlas hâli:** atlas satırları `yerlesimler.js` + HALKA-KRONOLOJI kıyasından. Maraş · Derne · Bingazi ·
Derbend · Batum · Kandehar için `data/yer_yama_*.js` kayıtları VAR (cukurova_isg_0907 · barka_dogu8 · kafkas_rusya ·
hayalet). **Uygulayıcı yamayı etkin hâle karşı yazmalı** (D182); ben etkin birleşik hâli ÖLÇMEDİM.

---

## ① TRABLUS · DERNE · BİNGAZİ — 🟢 İKİSİ DE DOĞRU, FARKLI ANLAMDA (işgal ≠ egemenlik) + harita `isg:` eksik

| kaynak | alıntı (kısa) | yer |
|---|---|---|
| TDV `trablusgarp-savasi` | "Trablusgarp şehri 9 Ekim'de teslim olmak zorunda kaldı. Bir gün önce Tobruk ele geçirilmiş, ardından Derne (16 Ekim) ve Bingazi (21 Ekim) işgal edilmişti." | @10021 |
| aynı | "Trablusgarp ve Bingazi'nin ilhak edildiğine dair bir beyannâme yayımladı (5 Kasım 1911)" · beyannâme "pratikte pek anlam ifade etmiyordu" | @11660 · @12834 |
| aynı | "İtalyanlar'la 18 Ekim'de Lozan yakınlarındaki Uşi (Ouchy) kasabasında … nihaî bir barış antlaşması imzalandı. … 15 Ekim tarihli olarak düzenlenen diğer bir belgeyle … muhtariyet" | @21518 |
| TDV `derne` | "16 Ekim'de Amiral Presbitero tarafından işgal edildi" · "18 Ekim 1912 Uşi (Ouchy) Antlaşması ile Derne İtalya'ya bırakıldı" | @8081 · @8518 |
| TDV `bingazi` | "1912'de İtalyanlar'la yapılan Uşi (Ouchy) Antlaşması uyarınca Bingazi İtalyanlar'a geçti" | @6492 |

**Hüküm.** Maddeler (1911 işgal) ve atlas (1912 egemenlik) farklı soruları cevaplıyor. Eksik olan: **1911-1912 işgal
örtüsü**. TDV'ye göre egemenlik devri **18 Ekim 1912** (Uşi nihaî antlaşma); **15 Ekim** geriye tarihli muhtariyet
belgesidir. Atlas Trablus ve Bingazi'de `1912-10-15`, Derne'de `1912-10-18` kullanıyor — kendi içinde tutarsız.
Madde `olaylar_ek9` zaten *"taban Osmanlı, üstü İtalyan taraması"* diyor.
📌 Akademik literatür (Childs 1990 vb.) **okumadım**; TDV bu konuda birincil ve iç tutarlı.

**Öneri (yerleşim):** üçüne `isg:[{d:"italya", f:<çıkarma günü>, t:"1912-10-18"}]` ekle (Trablus 1911-10-09 ·
Derne 1911-10-16 · Bingazi 1911-10-21), `d:` Osmanlı 1912-10-18'e kadar sürsün; Trablus + Bingazi'de
`d:` sonu ve `s:italya` başı `1912-10-15 → 1912-10-18`.
**Öneri (kronoloji):** `olaylar_ek5.js` Uşi maddesi `t:"1912-10-15"` → `1912-10-18` (TDV: 15 Ekim = belge tarihi).
**Değişmez 2i:** başlar `olaylar_ek9` 1911-10-09 ile ≤12 gün kapsanır; bitiş 1912-10-18 Uşi maddesiyle (redate
sonrası 0 gün). Yeni çekirdek madde **gerekmiyor**; Derne/Bingazi kuyruk maddelerinin çekirdeğe alınması isteğe bağlı.

---

## ② KAYSERİ — 🔴 HARİTA YANLIŞ · ve harita kırılmasını besleyen ÇEKİRDEK MADDE de kaynaksız

| kaynak | alıntı | yer |
|---|---|---|
| TDV `kayseri` | "Yıldırım Bayezid burayı Osmanlı topraklarına kattı (800/1398)" | @7644 |
| aynı | "XV. yüzyılda Kayseri Dulkadıroğlu Hasan Bey, Ramazanoğlu İbrâhim Bey, Karamanoğlu İbrâhim Bey arasındaki mücadeleye sahne oldu ve birkaç defa el değiştirdi" | @7955 |
| aynı | "879'da (1474) Gedik Ahmed Paşa Karamanoğulları Beyliği'ni ortadan kaldırdıktan sonra Kayseri'de Osmanlı idaresi kuruldu" | @8290 |
| TDV `karamanogullari` | "Karamanlı topraklarına giren Memlükler Kayseri'yi işgal ettiler. Memlük kumandanı, civarıyla birlikte bu şehri Dulkadırlı Nâsırüddin Muhammed'e … vererek (822/1419)" | @26137 |
| TDV `dulkadirogullari` | "1419 yılı ilkbaharında … Memlük kuvvetleri Kayseri'yi Karamanlılar'dan alarak Dulkadırlılar'a teslim etti" | @9573 |
| aynı | "1435 yılında … Karamanoğlu İbrâhim Bey Kayseri'yi geri aldı" | @10103 |
| aynı | "Osmanlılar'ın desteğiyle 1437'de Kayseri'ye yürüyerek kısa bir kuşatmadan sonra şehri ele geçirdi" | @11028 |
| aynı | (1454 sonrası) "Karamanlılar Kayseri şehrini zaptettiler" — **YIL YOK** | @12440 |
| TDV `mehmed-i` | "Kayseri" kelimesi gövdede **HİÇ geçmiyor** | tam tarama |

**Hüküm: harita yanlış.** Atlas `d:` Osmanlı `1419-01-01 → 1920` kesintisiz; kaynaklara göre 1419'da Kayseri
**Memlük → Dulkadir**, 1435 Karaman, 1437 Dulkadir, 1454-64 arası bir gün Karaman, **1474 Osmanlı**.
Atlasın 1419 Osmanlı kırılmasını taşıyan madde `olaylar_ek5.js:74` (*"Orta Anadolu'nun geri alınışı: Kayseri ve
Kırşehir"*, `gun:"1419 dolayı"`, `kaynak:"mehmed-i"`): **kendi kaynağı Kayseri'yi anmıyor** → 🔴 **madde de yanlış**
(D144: beyan edilen kaynak iddiayı taşımıyor). Kronoloji maddeleri (Memlük 1419 · Dulkadir 1437) **doğru**.
🟡 Açık: 1454-1464 arası Karaman'ın geri alış yılı **bulunamadı** (TDV `ibrahim-bey-karamanoglu` ×3 varyant 302).

**Öneri (yerleşim):** `s: karaman →1419-01-01 · dulkadir 1419→1435 · karaman 1435→1437 · dulkadir 1437→[?] ·
karaman [?]→1474 · d: osmanli 1474-01-01→1920-04-23`. `[?]` çözülene kadar ara çözüm: dulkadir 1437→1474 değil —
bu bir çıkarım olur; **uygulayıcı [?] bulunmadan bu yamayı YAZMAMALI** ya da `[?]`'i bir akademik kaynakla
(Uzunçarşılı, *Anadolu Beylikleri*; okumadım) doldurmalı.
**Öneri (kronoloji):** `olaylar_ek5.js:74` sil ya da Kırşehir'e daralt (Kırşehir için ayrı kaynak gerekir — okumadım).
**Değişmez 2 / 2s:** çekirdekte 1435 · 1437 · 1474 Kayseri maddesi **YOK** (kuyrukta 1435 `kronoloji_anadolu:337`,
1437 var; Değişmez 2 evreni yalnız `olaylar*.js`). ⇒ **3 yeni çekirdek madde** + 1419 maddesinin Memlük/Dulkadir
olarak yeniden yazılması + [?] günü için 1 madde = **5**.

---

## ③ ERZİNCAN — 🔴 HARİTA YANLIŞ (madde doğru)

| kaynak | alıntı | yer |
|---|---|---|
| TDV `erzincan` | "Mutahharten'den sonra Erzincan 1410 yılında Karakoyunlu hâkimiyetine girdi" | @8237 |
| aynı | "Erzincan Karayülük Osman tarafından alınarak Akkoyunlu topraklarına katıldı (1422)" | @8862 |
| aynı | "Uzun Hasan Karakoyunlular'ı yenerek Erzincan'ı yeniden Akkoyunlu hâkimiyetine aldı (1457)" | @8862 |
| TDV `akkoyunlular` | (Cihan Şah) "1450'de Erzincan üzerine yürüdü ve burayı ele geçirdi" | tarama @Erzincan |
| TDV `uzun-hasan` | "Cihan Şah'ın 854'te (1450) Erzincan'a ordu gönderip burayı alması" · sonra Cihan Şah "Erzincan'ı da [Cihangir'e] iktâ etti" | @4481 · @6356 |

**Hüküm: harita yanlış.** Atlas `s: akkoyunlu 1410 → 1502` tek blok. Kaynak: **Karakoyunlu 1410-1422 · Akkoyunlu
1422-1450 · Karakoyunlu 1450-1457 · Akkoyunlu 1457→**. 🟡 1452-57 arası Erzincan Karakoyunlu metbuluğunda Akkoyunlu
Cihangir'e iktâ — tâbi bir ara hâl; `v:` ile ifade edilemiyor (yabancı-yabancı tâbiiyet), `s: karakoyunlu` ile yazıldı ve notlandı.
**Değişmez 2s:** 1410 · 1422 · 1450 · 1457 — çekirdekte Erzincan maddesi **YOK** → **4 madde** (kuyrukta 1450
`kronoloji_karakoyunlu` ve 1457-06-01 Âmid zaferi var).

---

## ④ MARAŞ — 🔴 HARİTA YANLIŞ (madde doğru) + ek bulgu 1515-1522

| kaynak | alıntı | yer |
|---|---|---|
| TDV `kahramanmaras` | "783'te (1381) güçlü bir Memlük ordusu Dulkadır ordusunu yenerek Maraş'ı aldı. Karaca Bey'in oğlu Halil Bey … Maraş'ı Memlükler'den kurtardı (786/1384). Fakat … Yelboğa en-Nâsırî'ye mağlûp olunca Maraş tekrar Memlükler'in eline geçti. Dulkadıroğulları bir süre sonra Maraş'a yeniden hâkim oldular." | @13188 |
| TDV `dulkadirogullari` | "Kalabalık bir Memlük ordusu 1381 yılı yazında Antep'ten geçerek Maraş'a ulaştı. … Halil Bey ve kardeşi Sevli Bey bu defa yenilgiye uğradılar ve Harput'a çekildiler" | @5713 |
| TDV `kahramanmaras` | "Yavuz Sultan Selim'in Mısır seferi sırasında ve sonrasında Dulkadıroğulları'nın elinde kaldı. Ancak Şehsuvaroğlu Ali Bey'in 928'de (1522) idamının ardından doğrudan Osmanlı hâkimiyeti altına alındı" | @13188+ |
| TDV `dulkadir-eyaleti` | "Dulkadıroğulları 1515 yılında Osmanlı hâkimiyetine girince buranın idaresi … Şehsuvaroğlu Ali Bey'e verildi. Ali Bey'in ortadan kaldırılmasından (1521) sonra" | @2260 |

**Hüküm: harita yanlış.** Atlas `s: dulkadir 1337 → 1515` kesintisiz. Kaynak: **Memlük 1381-1384**, sonra
Dulkadir, sonra **ikinci Memlük dönemi (yıl YOK)**, sonra Dulkadir.
🔴 **Ek bulgu (sorulmadı, iki uç kuralı):** atlas `d:` Osmanlı `1515-06-13`'ten. TDV iki maddede 1515-1521/22
arası Maraş'ı **Dulkadir beyi idaresinde, Osmanlı hâkimiyetinde** gösteriyor ⇒ `v:` tâbi 1515→1522, `d:` 1522'den.
⚠️ TDV iç çelişki: `kahramanmaras`/`dulkadirogullari` **1522** · `dulkadir-eyaleti` **1521**. Hicrî 928 =
Aralık 1521-Kasım 1522. Halka ihtiyatla 1522 noktası; `v:` sonu `1522-01-01` önerildi, **fark bildirilir.**
**Değişmez 2s/2:** 1381 · 1384 çekirdekte yok → **2 madde** (kuyrukta ikisi de var); 1522 `d:` başı çekirdekte yok → **1 madde**
(kuyrukta `kronoloji_anadolu:1443` var). 1515-06-13 `v:` başı: `olaylar_ek5:181` Turnadağ ✓ (metni "ilhak" diyor → "tâbi kılındı" diye düzeltilmeli).

---

## ⑤ BATUM — 🔴 HARİTA YANLIŞ (madde doğru; süreklilik kısmen bulunamadı)

| kaynak | alıntı | yer |
|---|---|---|
| TDV `gurcistan` | "Acaristan (Batum) ve çevresi 1479'da fethedildi. Aynı yıl Borçka ve Aşağı Acara'yı içine alan Maçahel bölgesi Osmanlı idaresine girdi" | @30730 |
| TDV `batum` | "XV. yüzyılın sonlarında Osmanlılar tarafından alınan Batum bir ara elden çıktıysa da daha sonra tekrar fethedildi. Kanûnî Sultan Süleyman'ın padişahlığının ilk yılında Trabzon eyaletine bağlı bir sancak olarak teşkilâtlandırıldı" | `_govde/batum.txt` |
| TDV `acara` | "1508'de Acara ve İmeret Krallığı'nın Osmanlı Devleti'ne tâbi kılınmış olmasına rağmen (Kırzıoğlu, s. 43) Acara'nın fethi 1535'te gerçekleşti" · "Bir ara Gürcüler'in eline geçtiyse de 1586'da kurtarıldı" | @4233 · @4904 |

**Hüküm: harita yanlış.** Atlas `s: gurcistan 1281 → 1578-08-09`. `1578-08-09` **Çıldır Savaşı'nın günüdür** ve
Batum · Sohum · Tiflis · Zagem'e toptan yazılmış (`denetim/BULGU-FERHATPASA.md:299`, `VERI-YAPISI.md` TAKVİM
bölümündeki Tiflis emsali) — Batum'a özgü kaynağı yok. TDV iki madde en geç **Kanûnî'nin ilk yılında (Eylül
1520-Eylül 1521) Batum sancağı** diyor.
🟡 Bulunamadı: 1479 sonrası "bir ara elden çıktı" aralığının yılları. `acara` 1535'i **bölge (Acara)** için veriyor;
şehre taşımak çıkarım → kullanılmadı. Akademik Gürcü kaynakları (Allen · Kırzıoğlu) **okumadım**.
**Öneri (yerleşim):** `s: gurcistan → 1479-01-01`, `d: osmanli 1479-01-01 → 1878-07-13` (ara kayıp tarihsiz,
not'a yazılır). İhtiyatlı alternatif: `d:` başı `1521-01-01` (TDV `batum`), 1479 yalnız halka — **uygulayıcı seçer; önerim
1479 + not**, çünkü iki TDV maddesi 15. yy sonu fethi açıkça söylüyor.
**Değişmez 2:** 1479 kırılması için çekirdekte madde **YOK** → **1 madde** (kuyrukta `kronoloji_gurcistan` 1479 var).
1578-08-09 kırılması Batum'dan kalkar; Çıldır maddesi ötekileri kapsamaya devam eder.

---

## ⑥ TİLİMSAN — 1337 🔴 HARİTA YANLIŞ · 1358 🔴 MADDE YANLIŞ (yıl) VE harita yanlış

| kaynak | alıntı | yer |
|---|---|---|
| TDV `abdulvadiler` | "Ebü'l-Hasan tekrar Tilimsân'a hücum ederek iki yıllık bir kuşatmadan sonra 1337'de şehri ele geçirdi. Bu olay … yaklaşık on yıllık bir kesintiye sebep oldu. … Merînîler'in hâkimiyetinden kurtuldular (1348)" | @4460 |
| aynı | "Merînîler'den Ebû İnân tarafından 1352'de Tilimsân'ın tekrar zaptedilmesi ile … ikinci bir fetret devri başladı. 1359'da yeniden bağımsızlıklarını kazanan Abdülvâdîler" | @4752 |
| TDV `meriniler` | "İki yıl süren kuşatmanın ardından Abdülvâdîler'in başşehri Tilimsân'a girdi (737/1337)" · "Abdülvâdîler de Tilimsân'ı geri alarak on yıl süren Merînî hâkimiyetinden kurtuldular (749/1348)" | @13115 · @15000 |
| aynı | "752'de (1351) Tilimsân'a girdi ve Abdülvâdîler'in kısa süren ikinci hükümranlığına son verdi" | @16197 |
| aynı | "759/1358" gövdede **yalnız Ebû İnân'ın ölümü** için geçiyor ("boğularak öldürüldü (759/1358)") | @16658 |
| aynı (ek) | "772 (1370-71) yılında şehre girip bölgede hâkimiyet kurdu" · "784 (1382) … Tilimsân'ı ele geçirerek" | @19446 · @20594 |

**Hüküm.** 1337 maddesi doğru, **harita yanlış** (atlas `zeyyani 1281 → 1552` kesintisiz). 1358 maddesi
(`kronoloji_kuzeyafrika.js` "Merînîler Tilimsan'ı ikinci kez aldı") 🔴 **yanlış yıl**: alıntıladığı
*"759/1358'de Ebû İnân Tilimsân'a girdi"* cümlesi `meriniler` gövdesinde **YOK** — 759/1358 ölüm yılı; doğru yıl
**1351 (meriniler) / 1352 (abdulvadiler)**. ⚠️ TDV iki madde arasında 1 yıl fark; hicrî 752 = Şubat 1351-Şubat 1352
⇒ `meriniler`'in 1351'i hicrî yılın ağırlığıyla uyumlu. **Fark bildirilir, taraf seçilmedi:** harita önerisi 1352
(ihtiyatlı, iki kaynağın geç ucu — Merînî'yi fazla boyamamak için).
Aynı madde çifti "(1358 toprak-kazanc) Ebû İnân Tilimsan'a girdi" (`kronoloji_kuzeyafrika`) de aynı yanlış alıntıyı taşıyor.
🟡 Ek (sorulmadı): 1370-71 ve 1382 Merînî girişleri de atlasta yok; bitişleri **bulunamadı** → yama önerilmedi.
**Öneri (yerleşim):** `s: zeyyani →1337 · merini 1337→1348 · zeyyani 1348→1352 · merini 1352→1359 · zeyyani 1359→1552`.
**Öneri (kronoloji):** iki 1358 maddesi → `t:"1352-01-01"` (+ kaynak alıntısı gerçek cümleyle; 1351/1352 farkı metne), 1359 geri alış maddesi ekle.
**Değişmez 2s:** 1337 · 1348 · 1352 · 1359 çekirdekte yok. Tilimsan Osmanlı sınırından >2014 km (1337-1359) ⇒ büyük
olasılıkla **KAPSAM DIŞI** — **ölçmedim**; uygulayıcı `denetle.py` ile sınar.

---

## ⑦ KANDEHAR — 🔴 HARİTA YANLIŞ (1543-1558) · 1545 MADDESİ belirsiz/ters anlatım

| kaynak | alıntı | yer |
|---|---|---|
| Iranica KANDAHAR iv | "Ṭahmāsb, in 1537, to whom Ḵᵛāja Kalān surrendered the city … Kāmrān again marched to Kandahar and expelled the Safavid army" | @5911 |
| aynı | "In 1543 … ʿAskari, its governor under the influence of Kāmrān" · "in 1545, Homāyun, with the assistance of the Safavid force, captured Kandahar from ʿAskari … with a surprise attack, Homāyun expelled the Safavid reinforcement from Kandahar" | @6291 · @6765 |
| aynı | (1556 sonrası) Safavid contingent … "Ṭahmāsb appointed his cousin, Solṭān-Ḥosayn Mirzā, as its governor" · "In 1595 … Moẓaffar-Ḥosayn Mirzā surrendered Kandahar" · "In 1031/1622, Shah ʿAbbās moved against Kandahar" · "took the city on 22 February [1649]" | @7191 · @8533 · @9708 · @16690 |
| TDV `tahmasb` | "Kandehar 950'de (1543) Safevîler'in elinden çıktı. Ertesi yıl Bâbürlü Hükümdarı Hümâyun, Tahmasb'dan aldığı yardımlara karşılık Kandehar'ı Safevîler'e teslim ettiyse de kısa süre sonra burası tekrar kaybedildi ve 965'te (1558) yeniden Safevî hâkimiyetine girdi" | @5833 |
| TDV `kandehar` | "şehir Safevîler'in yardımıyla Hümâyun'un eline geçtiyse de bundan sonra birkaç defa Bâbürlüler'le Safevîler arasında el değiştirdi" (yıl yok) | @3859 |

**Hüküm: harita yanlış.** Atlas `s: safevi 1537 → 1595`; kaynaklar **1543'ten (en geç) 1558'e Bâbürlü** (1545'te
kısa bir Safevî teslimi dahil) diyor. `kronoloji_safevi.js` 1545 maddesi *"Hümâyun'a verilen askerî destek karşılığında
Kandehar kalesi Bâbürlü hâkimiyetine bırakıldı"* — TDV `tahmasb` **ters yönü** (Hümâyun → Safevî) söylüyor, Iranica
"captured from ʿAskari … expelled the Safavid reinforcement". 🟡 Madde **eksik/ters anlatım**; yıl 1545 içinde sahiplik
en az iki kez değişti ⇒ `kr-kandehar-babur-imparatorlugu-1545` halkası "kesin geçerli yıl" şartını **karşılamıyor**.
🟡 Bulunamadı: Kâmrân'ın 1537 sonrası Safevî'yi çıkarış yılı (Iranica pasajında yıl yok) ⇒ safevi sonu 1543 = üst sınır.
🟡 Ek (sorulmadı): 1622 günü — TDV `cihangir` "11 Haziran 1622", atlas `1622-06-22`, `kronoloji_hindistan` `1622-06-01`.
11 Haz. Jülyen = 21 Haz. Gregoryen (atlasla 1 gün fark) — **takvim mi, ayrı olay mı ölçmedim.**
**Öneri (yerleşim, `yerlesimler_asya.js`):** `safevi 1537→1543 · babur-imparatorlugu 1543→1558 · safevi 1558→1595`.
**Öneri (kronoloji):** 1545 maddesini Iranica cümlesine göre yeniden yaz (Hümâyun Safevî yardımıyla Askerî'den aldı,
Safevî garnizonunu çıkardı); 1543 (Askerî/Kâmrân) ve 1558 (Safevî geri alış) maddeleri ekle.
**Değişmez 2s:** Kandehar büyük olasılıkla KAPSAM DIŞI (ölçmedim).

---

## ⑧ KANDİYE — 🟢 TAKVİM DEĞİL · 6 Eylül KAYNAKLI, 27 Eylül KAYNAKSIZ

| kaynak | alıntı | yer |
|---|---|---|
| TDV `kandiye` | "anlaşma yoluyla şehri teslim aldılar (9 Rebîülâhir 1080 / 6 Eylül 1669)" | @2647 |
| TDV `girit` | "9 Rebîülâhir 1080'de (6 Eylül 1669) imzalanan on sekiz maddelik bir teslim anlaşmasıyla sona erdi" | @16591 |

**Takvim sınavı (`VERI-YAPISI.md` TAKVİM, D110 çapa kuralı):** tablo hicrî → 9 Rebîülâhir 1080 = **Gregoryen 6 Eylül
1669 (Cuma) = Jülyen 27 Ağustos 1669**. TDV'nin Milâdî karşılığı **Gregoryen** (Venedik 1582'den beri Gregoryen).
Atlasın **27 Eylül**ü ne Jülyen (27 Ağu) ne Gregoryen (6 Eyl) karşılık ⇒ **takvim farkı DEĞİL, olay farkı** (21 gün).
**Hüküm.** `oturumlar/CAPRAZ-AKDENIZ.md` C-3 bunu *"imza (6 Eyl) ≠ fiilî devir/tahliye (27 Eyl)"* diye `§74` ile
kapatmıştı. Ama **27 Eylül'ün kaynağı yok:** çekirdek madde `olaylar.js:95` `kaynak:"girit"` gösteriyor ve `girit`
yalnız 6 Eylül veriyor; `yer_yama.js:213` notu *"27 Eylül 1669'da teslim oldu"* diyor, kaynağı yine `girit`.
TDV `kandiye` ise **teslim almayı** 6 Eylül'e bağlıyor. Setton (1991) **okumadım**; arama sonuçları yalnız
Vikipedi/popüler site verdi (🔴 liste) → kullanılmadı.
⇒ **Harita kaynaksız gün taşıyor.** Öneri: `s: venedik` sonu / `d:` başı `1669-09-27 → 1669-09-06`, **ya da**
27 Eylül için akademik kaynak (Setton) okunup `kaynak:`a yazılır. Önerim 09-06 (kaynaklı olan).
Aynı gün Sitiye · İsfakiye de 1669-09-27 taşıyor (CAPRAZ-AKDENIZ) — **onların kaynağını okumadım.**
**Değişmez 2:** `olaylar.js:95` 21 gün uzakta, ±30'a sığıyor; ama madde `t:` de `1669-09-06`'ya çekilmeli (0 gün).

---

## ⑨ DERBEND — 🔴 MADDE YANLIŞ (1583) · harita başı 1578-11-01 → 1578-10-05

| kaynak | alıntı | yer |
|---|---|---|
| TDV `derbend--dagistan` | "Derbend halkından yedi kişilik bir heyet 5 Ekim 1578'de Ereş'te bulunan Serdar Lala Mustafa Paşa'nın yanına giderek bağlılık arzettiler ve bir idarecinin tayinini istediler" | `_govde/derbend--dagistan.txt` |
| aynı | "Özdemiroğlu Osman Paşa, 1579'dan 1583 sonbaharına kadar … burayı askerî bir merkez olarak kullandı. 1607'ye kadar süren Osmanlı hâkimiyeti devrinde" | aynı |
| TDV `sirvan` | "1578'de … Koyungeçidi savaşının ardından … Şemâhî, Kabala, Bakü, Şâburân, Mahmûdâbâd, Salyan ve Demirkapı/Derbend Osmanlı kontrolüne girdi" · "1583'te Meşâle Savaşı neticesinde bölgede tamamıyla hâkimiyet kurmayı başardı" | @3556 · @4002 |

**Hüküm: madde yanlış.** `olaylar_ek5.js:506` (`t:"1583-01-01"`) *"Meşaleler Savaşı'nın kazanılmasının ardından …
Derbend kalesi Osmanlı idaresine alındı"* — kendi kaynağı `sirvan` Derbend'i **1578'de** Osmanlı kontrolüne sokuyor,
1583'ü **bölgesel hâkimiyetin pekişmesi** için veriyor; `derbend--dagistan` 1579-1583 Osmanlı üssü diyor.
Meşale zaten `olaylar_ek2.js:97` (1583-05-09) ile çekirdekte ⇒ 1583 maddesi hem yanlış hem mükerrer içerik.
Harita: `d:` başı `1578-11-01` (Şamahı maddesinin günü) → kaynaklı gün `1578-10-05`. Bitiş 1607 ✓ (`sirvan`,
`derbend`; `fp-derbend-tdv` iç çelişki notu 1603 — dokunulmadı).
⚠️ `yer_yama_kafkas_rusya.js:57` Derbend `s:` dizisini `safevi 1509→1722` kesintisiz yazıyor; `d:` 1578-1607 ile
örtüşüyor. Uygulayıcı etkin hâli ölçmeli (ben ölçmedim).
**Öneri (kronoloji):** `olaylar_ek5.js:506` → `t:"1578-10-05"`, b:"Derbend halkının Lala Mustafa Paşa'ya bağlılığı",
`kaynak:"derbend--dagistan"`; 1583 iddiası çıkarılır. **Öneri (yerleşim):** `d:` başı `1578-10-05`.
**Değişmez 2:** yeni gün 1578-10-05 → yeniden yazılan madde 0 gün ✓ (`olaylar_ek5:505` Şamahı 27 gün, o da kapsar).

---

## ⑩ HALKA — kaynak gövdesinden 32 tanıklık (JSON'da), 6 kronoloji halkasına işaret

**Eklenecek (koşu sonrası, `kaynakli_halka_<kısaltma>.js`, ön ek `hla-`):** Trablus 1 · Derne 2 · Bingazi 2 · Kayseri 6 ·
Erzincan 4 · Maraş 4 (1 aralık) · Batum 1 · Tilimsan 6 (3 aralık) · Kandehar 4 · Kandiye 1 · Derbend 1 = **32 kayıt**.
Sınav: `py denetim/ARAC-HLA-JSON-SINA-0913.py` → 32/32 `yer` havuzda tek · `devlet` künyede · biçim · **hata 0**.
Hepsi kaynağın **kendi cümlesi**, `alinti_ozet:false`. Nokta: yıl → o takvim yılı.

**Kronoloji halkasına işaret (`kaynakli_halka_kronoloji.js` üretilmiş; düzeltme maddeden yapılır, sonra yeniden türetilir):**
```
kr-derbend-osmanli-1583              madde yanlış (⑨) → madde düzelince 1578-10-05 olur
kr-tilimsan-merini-1358              yanlış yıl (⑥) → 1352
kr-kandehar-babur-imparatorlugu-1545 1545 içinde sahiplik ≥2 kez değişti → "kesin geçerli yıl" DEĞİL
kr-trablus/derne/bingazi-italya-1911 doğru; kaynak "işgal" diyor → tur:"isgal" yazılabilir (türetici S1 tur yazmıyor)
```

## ⑪ SAYILAR
```
kalem 9 · çelişki satırı 13 (11 + Derbend + Kandiye)
HARİTA YANLIŞ         Kayseri(×2) · Erzincan · Maraş · Batum · Tilimsan 1337 · Kandehar      = 7 satır
MADDE YANLIŞ          Derbend 1583 · Tilimsan 1358 · (+ çekirdek Kayseri 1419 olaylar_ek5:74) = 2 satır + 1 ek
İKİSİ DE (harita+madde) Tilimsan 1358 (harita 1352-59 da yanlış) · Kandehar 1545 (anlatım)
FARKLI ANLAMDA DOĞRU  Trablus · Derne · Bingazi (işgal ≠ egemenlik)                           = 3 satır
TAKVİM                0 — Kandiye takvim sınavından geçti, fark olay/kaynaksızlık
EK BULGU (sorulmadı)  Maraş 1515-22 tâbi · Tilimsan 1370-71/1382 · Kandehar 1622 günü · Uşi 15≠18 Ekim ·
                      Batum 1578-08-09 = Çıldır günü toptan yazımı
ÇEKİRDEK MADDE İHTİYACI  Kayseri 5 · Erzincan 4 · Maraş 3 · Batum 1 · Tilimsan 4* · Kandehar 2* · redate 3
                      (* muhtemelen KAPSAM DIŞI — ölçülmedi)
```
## ⑫ AÇIK / BULUNAMADI / OKUMADIM
- **Bulunamadı:** Kayseri 1454-64 Karaman geri alış yılı · Maraş 2. Memlük dönemi yılları · Batum "bir ara elden çıktı" yılları ·
  Kâmrân'ın Kandehar'dan Safevî'yi çıkarış yılı · Tilimsan 1370-71/1382 dönem sonları.
- **Okumadım:** Setton 1991 (Kandiye 27 Eylül) · Uzunçarşılı *Anadolu Beylikleri* (Kayseri) · Childs (Trablusgarp) ·
  Allen/Kırzıoğlu (Batum) · Sitiye/İsfakiye kaynakları · basılı TDV sayfa numaraları.
- **Ölçmedim:** yamaların etkin birleşik hâli · Değişmez 2s KAPSAM DIŞI kovası (Tilimsan, Kandehar) · uygulama sonrası `denetle.py`.
