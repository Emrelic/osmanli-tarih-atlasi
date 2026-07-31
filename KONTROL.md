# KONTROL DEFTERİ — kullanıcının gördüğü her madde

Bu dosya **tek kaynaktır**: haritaya bakıp gördüğünüz her şey buraya numarayla
yazılır, her satırın karşısında **kimde olduğu ve ne durumda olduğu** durur.
Bir daha "bu maddeyi yaptın mı?" diye sormanıza gerek kalmaz — bakarsınız.

**2026-07-31 — TAKİPÇİ tamamladı.** 16 `hatalar` dosyasının tamamı tarandı:
**239 madde**. Sayım yöntemi ve numara uyarısı aşağıda.

## Sayım yöntemi (tekrar üretilebilir)

Metin çıkarımı — her `.docx` için:
```python
import zipfile, re, html
x = zipfile.ZipFile("hatalar N .docx").read("word/document.xml").decode("utf-8")
x = re.sub(r"</w:p>", "\n", x); x = html.unescape(re.sub(r"<[^>]+>", "", x))
```
Madde sayımı kuralı: **dolu paragraf = aday madde**; yalnız numara içeren
satırlar ("7)", "4") atlandı; bir önceki isteğin devamı olan paragraf ona
katıldı. Dosya başına ölçülen: 1→10 · 2→6 · 3→10 · 4→11 · 5→9 · 6→11 · 7→7 ·
8→9 · 9→14 · 10→29 · 11→61 · 12→11 · 13→15 · 14→5 · 15→20 · 16→11 = **239**.

## ⚠️ Numaralama — ölçülmüş uyarı

Dosyaların kendi numaraları ortada kayıyor (hatalar 11'de "26-28" hiç yok,
"56" iki kez var). Daha kötüsü: **eski raporlar aynı numarayı iki ayrı maddeye
kullanmış** — ölçüldü: `md.20` KOORDINASYON §4'te *Kavalalı irsî valilik*,
OTURUM-11-BALKAN'da *Söğüt 1800* demek; `md.34` hem *Asîr* hem *Abdülaziz
seyahati*. Bu yüzden numara değil **madde metni** esastır. Bu defterin
numaraları TAKİPÇİ'nin ardışık sayımıdır; eski kayıtlarla farklılaşan yerler:

| eski | bu defter | | eski | bu defter |
|---|---|---|---|---|
| 11-20 (Söğüt) | **11-21** | | 15-05 ("bu üçgen") | **16-05** |
| 11-21 (isimler) | **11-20** | | 15-06 (Karesi) | **12-06** |
| 11-30 | **11-29** | | 15-13 (Yanova) | **15-12** |
| 11-32 | **11-31** | | 11-40 | **11-39** |

## Durum işaretleri

| İşaret | Anlamı |
|---|---|
| ✅ | bitti — commit'i/raporu yazılı |
| ⏳ | sırada — sahibi belli, ölçüsü çıkarılmış |
| 🔬 | ölçülüyor — henüz karar yok |
| ❌ | yapılmayacak — **gerekçesiyle** |
| ❓ | durumu belgelerde bulunamadı — tahmin YAZILMADI |
| ⚠️ | yapıldı ama **açık borç** kaldı |

## Sahip kısaltmaları

`K` koordinatör · `D` denetçi · `M` motor · `T` takipçi
`A1` Anadolu · `A2` Balkan · `A3` Arap-Afrika · `A4` Doğu · `A5` Arabistan
`U1` kronoloji · `U2` katalog · `U3` savaşlar
Yeni organlar (`f6ef56f`): `KAYNAK` · `YAMACI` · `COĞRAFYA`
`📷` = kapanması için kullanıcıdan ekran görüntüsü gerekiyor

---

## hatalar 1 — 10 madde (turu: `cbbc0b9`, tamamı)

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 1-01 | Avlonya-Berat-Kanina 1417 yerleşimleri | K | Kanina veride yoktu, eklendi | ✅ cbbc0b9 |
| 1-02 | Düzmece Mustafa'da Aydınoğulları çıkışı doğru mu | K | HATA DEĞİL: Cüneyd beyliği yeniden kurdu (1421-1425) | ✅ cbbc0b9 |
| 1-03 | Hexamilion'un yıkılışına ok | K | Turahan Bey Mora seferi oku eklendi | ✅ cbbc0b9 |
| 1-04 | Devlet renkleri daha canlı olsun | K | opaklık 0.30→0.44, kenar 1.5/0.85 | ✅ cbbc0b9 |
| 1-05 | Varna haçlı güzergâhı oklu çizgi | K | Budin→Vidin→Niğbolu→Varna düşman oku | ✅ cbbc0b9 |
| 1-06 | Fetihle Erdek/Kapıdağ kırmızıya dönüyor | M | Marmara Adası'nın peteğiydi → ADA KURALI | ✅ cbbc0b9 |
| 1-07 | Çandarlı Halil azli-idamı iki madde | K | mükerrer temizliğinde silindi | ✅ 901b8b1 |
| 1-08 | Midilli karşı kıyıyı (Ayvalık) boyuyor — ada genel kuralı | M | ada kuralı: karşı kıyı payı kesiliyor, canlıda r70 | ✅ 9754515 |
| 1-09 | Eğriboz'un kuzeyi fethedilmemiş boş | K | nokta yoktu; Oreoi (İstiaia) eklendi | ✅ cbbc0b9 |
| 1-10 | Zakintos bırakılınca karşı kıyı boşalıyor | M | ada kuralı, aynı kök | ✅ 9754515 |

## hatalar 2 — 6 madde (turu: `9754515`, r70)

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 2-01 | Taman 1482 haritada değişmiyor | K·M | tarih 06-01'e çekildi + nokta maskede denizdeydi, kaydırıldı | ✅ 9754515·35436fe |
| 2-02 | Osmanlı-Memlük savaşına ordu okları | U3 | iki ok eklendi (1485-1491) | ✅ 9754515 |
| 2-03 | Sapienza/İnebahtı 1499 gösterimi | K | veri DOĞRU, teyit edildi | ✅ 9754515 |
| 2-04 | Elazığ-Malatya-Adıyaman görünümü doğru mu | K | HATA: Fırat kavsi noktasızdı; 8 yerleşim eklendi | ✅ 9754515 |
| 2-05 | Zebîd 1516 haritada görünmüyor | K | A5 §E ölçtü: madde HAKLI (TDV `zebid`+`selman-reis` 20.06.1516'yı birebir veriyor); eksik olan yerleşim kaydı — çözüm önerisi hazır (memluk 1516-1517 + `v:` 1517-1538; hayalet devlet tuzağına dikkat), uygulama K'da | ⏳ |
| 2-06 | Sina ucu ve Kızıldeniz kıyısı boşlukları | K | dolgu noktasına Mısır zinciri + üç tarih 07-06'ya hizalandı | ✅ 9754515 |

## hatalar 3 — 10 madde (turu: `9754515`, r70)

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 3-01 | Simgeler yapışıp kalıyor — genel kural | K | 🏰 kalıcıydı; 550 günlük pencereye bağlandı | ✅ 9754515 |
| 3-02 | Lejant ekranı gizlenebilir olsun | K | ☰/× düğmesi, tercih localStorage'da | ✅ 9754515 |
| 3-03 | "Safevî İran" küçücük — Van civarı kimin | K | 73 kayıt genel `iran`dı; 40 dönem bölündü, 235 yıllık hayalet kapandı | ✅ 9754515 |
| 3-04 | Barbaros'un aldığı adalar — harita farkları | ? | 📷 şikâyetin kendisi ekran görüntülerinde ("iki haritayı da koyuyorum") — metinden çözülemez | ❓ 📷 |
| 3-05 | Didim alınmış görünüyor, doğru mu | A1 | iddia net, görüntü gerekmez — TDV teyidi araştırma işi | ⏳ |
| 3-06 | Budin ilhakı — tüm Macaristan boyanmalı mı | K | teyit: 1541 üçe bölünme gerçek (eyalet/Habsburg/Erdel); Erdel `d:`→`v:` düzeltildi | ✅ 9754515 |
| 3-07 | Macaristan'ın yarısı duruyor, teyit | K | aynı teyit | ✅ 9754515 |
| 3-08 | Tebriz enklavı — aradakiler alınmadı mı | K | teyit: 1548'de enklav seferin kendisi | ✅ 9754515 |
| 3-09 | Van alınınca Tebriz'in çıkışı doğru mu | K | teyit: Kanûnî sınırı Van'da sabitledi | ✅ 9754515 |
| 3-10 | Katîf işaretleme abartılı mı + koridor | K·COĞRAFYA | ÇELİŞKİ ÇÖZÜLDÜ (K hakem ölçümü, motorun `devir_kumesi` ölçütüyle): **motor `kur:` OKUYOR**, bayat olan YAPILACAKLAR satırıydı. Kuveyt deliği kusur değil KURAL (kasıtlı sahipsizlik korunuyor) → kalan iş gösterim kararı (3 seçenek, YAPILACAKLAR'da) | ⏳ |

## hatalar 4 — 11 madde (turu: `35436fe`, r76)

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 4-01 | Fizan/Murzuk ayrı madde olmalı | K | madde var (1577-01-01); ek8↔ek9 mükerrer çifti bulundu, silinmesi K'da | ⚠️ |
| 4-02 | Rasathane Ocak+Temmuz 1577 iki madde | K | T ölçtü (31 Tem): veride TEK kuruluş maddesi kaldı (1577-01-01, ek2) + 1580 yıkılış — mükerrer temizlenmiş | ✅ |
| 4-03 | Fas 1578 — savaş yeri ve ok | U3 | T ölçtü: madde VAR (1578-08-04 Vâdisseyl + himaye) ve konumlu savaş kaydı VAR; sefer OKU yoksa da yer gösteriliyor | ✅ |
| 4-04 | Çıldır zaferi — Çerkezya/Soçi teyidi | K | TDV Çıldır eyaleti orayı kapsamıyor; 5 Çerkez noktası eklendi | ✅ 35436fe |
| 4-05 | Şirvan fethi enklavı — aradakiler | K | 4 ara şehir (Kabala, Ereş, Şâbüran, Mahmudâbâd) + Zagem eklendi | ✅ 35436fe |
| 4-06 | Sokullu suikasti iki madde | K | T ölçtü: veride TEK suikast maddesi kaldı (1579-10-12, ek7) — mükerrer temizlenmiş | ✅ |
| 4-07 | Demirkapı/Derbend — Hazar'ın öte yakası kırmızı | K | karşı yaka değil Ağraham diliydi; 3 Dağıstan noktası | ✅ 35436fe |
| 4-08 | Bakü ile Hazar'ın karşısı boyandı | K | aynı düzeltme | ✅ 35436fe |
| 4-09 | 1585 tağşiş maddesinde Van doğusu bölge — ayrı madde | A4·K | T ölçtü: **Nahçıvan + Ordubad `1585-01-01`** taşıyor — yıl-başı yuvarlaması tağşiş maddesine çarpıyor (mekanizma bulundu); Tebriz bloğu ayrı (1585-09-25). Gün kaynağı A4'ten | ⏳ |
| 4-10 | Ferhat Paşa antlaşması — harita teyidi, Bağdat girintisi | A4 | Kirmanşah kaması gerçekti, kapandı; Hemedan+Burucird hatta (1b759ea); **Urmiye ve Hoy hâlâ eksik** | ⚠️ |
| 4-11 | Kirmanşah-Nihavend-Burucird-Senendec-Loristan | A4 | Kirmanşah 1590-1603 eklendi; Nihâvend/Luristan vardı; Sine vb. 9-nokta genişletmesi **karar bekliyor** | ⚠️ |

## hatalar 5 — 9 madde (turu: `35436fe`, r76)

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 5-01 | Antalya/İçel/Çukurova + Tuz gölü kıyı boşlukları | M | konumlar net, görüntü gerekmez — kıyı yaslama ölçümü M'de hiç yapılmamış | ⏳ |
| 5-02 | Karayazıcı isyanı — aksiyon yok + iki madde | K | tarih 1596→1599 (TDV) düzeltildi, mükerrer silindi | ✅ 35436fe |
| 5-03 | Mükerrerleri bul, bire indir — genel | D | 26 silindi; 5. kontrol ±400 gün + kök, eşik 0.34 | ✅ 35436fe |
| 5-04 | Sultanahmet açılışı iki madde | K | silindi; gizli hata da çıktı: açılış 1616 | ✅ 35436fe |
| 5-05 | I. Mustafa cülûsu iki adet | K | sekiz cülûs çifti silindi | ✅ 35436fe |
| 5-06 | Hotin seferi/antlaşması — yerini işaretle | U3 | savaş kayıtlarının 169/169'u konumlu | ✅ |
| 5-07 | Bağdat kaybında Basra-Katîf kaldı mı, irtibat | A4 | ölçüldü: idarî bağlı, coğrafî kopuk (Fâv↔Cübeyl 350 km, Benî Hâlid sahası) | ✅ OTURUM-4 EK2 |
| 5-08 | Kasr-ı Şirin sınırını milim milim doğrula | A4 | 7/7 nokta doğru; TDV: 2185 km sınırın 1296 km'si zaten İHTİLÂFLI kalmıştı | ✅ OTURUM-4 EK2 |
| 5-09 | Azak'ın geri alınması — değişiklik yok | K | 1637-1642 Don Kazakları işgali eklendi | ✅ 35436fe |

## hatalar 6 — 11 madde (turu: `35436fe`, r76)

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 6-01 | Bozcaada/Limni kaybı + Biga'da parça | K | Limni-Semadirek Venedik dönemi (1656-57) eklendi; **Biga parçası ölçülmedi** | ⚠️ |
| 6-02 | Köprülü şartlı sadrazamlık mükerrer | K | Köprülüzâde çifti silindi | ✅ 35436fe |
| 6-03 | Bozcaada geri alınınca Limni ne oldu | K | Limni zinciri kuruldu (1657-11-15 geri) | ✅ 35436fe |
| 6-04 | Kâtip Çelebi ölümü mükerrer | K | T ölçtü: veride TEK madde kaldı (1657-10-06, ek2) — mükerrer temizlenmiş | ✅ |
| 6-05 | 1657 Yunanistan'da boş bölümler | K | T ölçtü: 1657-06-15 kesitinde Yunanistan kutusunda sahipsiz nokta **0** — veride boşluk yok (görüntü eski sürüme ait olmalı; tekrar görülürse 📷) | ✅ |
| 6-06 | Yanova fethi — koridor dibi, girinti doğru mu | K | girinti YANLIŞ boyamaydı: Varad/Yanova 1541'den beri Erdel'di, düzeltildi | ✅ 35436fe |
| 6-07 | Aynı soru Varad (Odea) için | K | aynı düzeltme | ✅ 35436fe |
| 6-08 | Saint Gotthard'ın yeri belli değil | U3 | savaş kayıtları 169/169 konumlu | ✅ |
| 6-09 | Lahsa kaybedilince Katîf vs. de gitti mi | K | A5 §C: EVET, 1670'te güney (Katîf dâhil) Benî Hâlid'e geçti; **hüküm verildi: Lahsa 1818-1841 Benî Hâlid bloğu ekleniyor** (76 yıllık blok üçe bölünüyor) — uygulama K | ⏳ |
| 6-10 | Çehrin + Podolya topraklarını teyit | K | Podolya'ya 3 sancak merkezi; Çehrin zinciri Kamaniçe'ye eşitlendi | ✅ 35436fe |
| 6-11 | Bahçesaray'la Çehrin geri mi verildi | K | verilmedi; sınır Dinyeper, sağ yaka 1699'a kadar Osmanlı | ✅ 35436fe |

## hatalar 7 — 7 madde

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 7-01 | Kırım bozkırı / Kafkas kuzeyi 1650'ler yapıları | A1·M | Kırım bloğu: §22 kalibrasyon çelişkisi (32,5 ↔ 62,8) çözülmeden girilmiyor | 🔬 |
| 7-02 | Parkan/Estergon kaybı görünmüyor | M | muharebe işareti eklendi + sıfır alanlı petek (Estergon 8 km²) düzeldi | ✅ 518d70e·73f725b |
| 7-03 | Solnok/Tisa çözülmesi görünmüyor | M | petek 0 km² düzeldi; AMA kayıp hâlâ 13 ay geç görünüyor (Oturum 11 #25, motor) | ⚠️ |
| 7-04 | Harşan bozgunu Erdel kayıpları + başlığa yazma | K | doğrulandı (2 bin km²); başlık "Erdel'in ve Mohaç'ın kaybı" yapıldı | ✅ 776ecb9 |
| 7-05 | IV. Mehmed'in indirilmesi mükerrer | K | hal'+cülûs birleştirildi; `t`↔`gun` çelişkisi de düzeldi | ✅ 776ecb9 |
| 7-06 | Azak kaybında doğu yakası da gitti mi | A1 | T ölçtü: 1695-97 penceresinde kırılan TEK kayıt Azak'ın kendisi (1696-07-19 → rusya) — "büyük toprak" görüntüsü Azak peteğinin genişliği; doğu yakasının 1696'daki gerçek statüsü A1 araştırması | ⚠️ |
| 7-07 | Olaşin + savaş yerleri genel kuralı | U3 | 42 muharebe eklendi, savaş 127→169, konumsuz 0 | ✅ 518d70e |

## hatalar 8 — 9 madde (turlar: `dea8882` · `4e1f398`)

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 8-01 | Karlofça taralı devir alanları — genel kural | K | `uret_devirler.py`: 9 antlaşma, alıcı renginde 45° tarama; Karlofça günü 01-26'ya çekildi | ✅ dea8882 |
| 8-02 | Oran alınınca İspanya kıyısında kırmızı parça | M | kara-kısıtlı Voronoi; 32 parça / 321 bin km², 32/32 kabul | ⏳ koşu |
| 8-03 | Oran'ın üçgensel iç temsili doğru mu | M | kara-kısıtlı koşuyla birlikte bakılacak | 🔬 |
| 8-04 | Oran'ın alınması mükerrer | K | 1792-02-12 maddesi hiçbir kırılmaya karşılık gelmiyordu, silindi | ✅ 4e1f398 |
| 8-05 | Prut zaferi bölgeleri erken gösteriyor | K | ay hassasiyeti sıralamayı bozuyordu; 1711-07-19 yapıldı | ✅ 4e1f398 |
| 8-06 | Edirne 1713'te Boğdan'da katılan parça | K | teyit: HOTİN, doğru (raya) | ✅ 4e1f398 |
| 8-07 | İran seferi — Şirvan enklavı aradakiler | K | enklav gerçekti (1723-25); Şeki/Kabala/Ereş'in Osmanlı dönemi eklendi | ✅ 4e1f398 |
| 8-08 | Hemedan'la Bakü/Dağıstan Osmanlı'ya geçmedi mi | K | HAYIR — RUSYA'ya geçti; 13 yıllık Rus işgali (Bakü, Derbend, Salyan, Mahmudâbâd) eklendi | ✅ 4e1f398 |
| 8-09 | Patrona'da İran'ın kopardığı toprak ayrı madde | K | madde zaten ayrıydı (1730-08-12); başlık 11 yerleşimi sayacak şekilde genişletildi | ✅ 4e1f398 |

## hatalar 9 — 14 madde (turu: `974c4ea`)

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 9-01 | Patrona başlaması iki madde | K | önceki mükerrer temizliğinde çözülmüştü | ✅ |
| 9-02 | Ahmed Paşa antlaşması — teyit + çizgili | K | taralı kataloğa alındı (savaş penceresi 1730-08-12) | ✅ 974c4ea |
| 9-03 | İstanbul 1736 + Arpaçay — teyit + taralı | K | taralı kataloğa alındı; devirler.js 9→11 | ✅ 974c4ea |
| 9-04 | Özi'nin düşüşünde aksiyon yok | K | 1737 Rus işgali + 1738 geri alınışı zincire eklendi | ✅ 974c4ea |
| 9-05 | Banaluka zaferi görünmüyor | U3 | 42 muharebe işaretinin içindeydi | ✅ 518d70e |
| 9-06 | Özi'nin geri alınması + Kırım kurtarılması | K | aynı zincir düzeltmesi | ✅ 974c4ea |
| 9-07 | Hisarcık/Grocka görünmüyor | U3 | 42 muharebenin içindeydi | ✅ 518d70e |
| 9-08 | Belgrad 1739 kazançları kronolojiye | K | başlığa yazıldı: "Belgrad, Semendire ve kuzey Sırbistan'ın geri alınışı" | ✅ 974c4ea |
| 9-09 | Niş anlaşmasıyla Belgrad kazanılıyor mu | K | HAYIR — Belgrad yanlış antlaşmaya yazılmıştı, 1739-09-18'e çekildi | ✅ 974c4ea |
| 9-10 | Musul savunması oklarla | U3 | Nâdir'in yürüyüşü + çekilişi, iki ok | ✅ 974c4ea |
| 9-11 | Kırım işgali/Kozluca görünmüyor | K | Kefe + Bahçesaray'a 1771 Rus işgali eklendi | ✅ 974c4ea |
| 9-12 | Küçük Kaynarca kayıpları taralı | K | devirler kataloğunda (Rusya 83 bin km²) | ✅ dea8882 |
| 9-13 | Her antlaşmaya hükümleriyle ayrı madde — genel | K | 33 antlaşma ölçüldü: 24 tam, 6 güne çekildi, 3 yazıldı (Londra 1830, SEVR) | ✅ 974c4ea |
| 9-14 | Basra'nın İran işgali görünmüyor | K·M | 1776-79 işgali + geri alınış maddesi eklendi; `s:`→`isg:` örtüsüne geçiş kararı hâlâ sırada (bkz. 16-04) | ⚠️ |

## hatalar 10 — 29 madde

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 10-01 | Sınır kalın kırmızı + vasalları saran çizgi | K | `imparatorluk-hale` katmanı; 7→3.5 px inceltildi | ✅ 591a5c6·7a39e36 |
| 10-02 | Kırım yarısı kırmızı yarısı pembe | M·A1 | ikili renk DOĞRU (Kefe doğrudan), oran yanlış; 7 nokta + kalibrasyon çelişkisi | ⏳ |
| 10-03 | Boğdan vasalken Hotin kırmızı — saçma | K | hayalet bölünmeydi; Hotin/Bender `v:` yapıldı | ✅ cc714ac |
| 10-04 | Vasal rengi yalnız bir ton açık olsun | K | tâbi rengi Osmanlı kırmızısının açık tonuna çekildi | ✅ 810efc9 |
| 10-05 | "Kırım hanlığı bozkırı" ne — bağlı mı boş mu | A1 | Kırım bloğunda; taralı/boş kararı verilmedi | 🔬 |
| 10-06 | Rus işgali Azak ötesini de almadı mı | A1 | görüntü gerekmez; 1771 işgalinin Kuban tarafı Kırım bloğu araştırmasına bağlı | ⏳ |
| 10-07 | Askerî harekâtlar oklarla — genel kural | U3 | 9 tipli `HAREKET` tipolojisi + `SONUC_ROZET` kuruldu | ✅ d0981d8 |
| 10-08 | Küçük Kaynarca metni ↔ harita uygunluğu | A2 | görüntü gerekmez; antlaşma hükümleri ↔ devir alanı karşılaştırması araştırma işi (taralı alan zaten üretili, 9-12) | ⏳ |
| 10-09 | KK sonrası Kırım cetvelle iki renk | M·A1 | Kırım bloğu (§22 reçetesi kalibre edilmeden girilmiyor) | ⏳ |
| 10-10 | Karadeniz kuzeyi sınırları saçma | A2 | Pontik bozkır kapsama alındı (6a66b4d); nokta partisi yazılmadı | ⏳ |
| 10-11 | Basra işgali bu kadarcık mı | K | işgal dönemi eklendi (974c4ea); alan `isg:` örtüsüyle netleşecek | ⚠️ |
| 10-12 | Basra'nın geri alınışı da bu kadarcık | K | geri alınış maddesi yazıldı (1779, Kerim Han'ın ölümü) | ✅ 974c4ea |
| 10-13 | Anapa/Kafkas hattı anakaraya bağlanmıyor | A5·A1 | Sohum-Anapa ekseni doğru ölçüldü (Kuban sınır); Çerkezistan statü kararı yok | ⚠️ |
| 10-14 | Kırım'ın Rusya'ya ilhakı (1783) görünmüyor | A1 | T ölçtü: ilhak kırılması VAR (Bahçesaray `kirim→rusya` 1783-04-08) ve madde var (`1783-04`, AY hassasiyetli). 🔴 Şüphe: **Kefe 1774'ten itibaren `rusya`** — komşusu Bahçesaray 1774-83 `kirim`; KK'da Rusya'ya geçen Kerç/Yenikale idi, Kefe zinciri A1 doğrulamalı | ⚠️ |
| 10-15 | Rusların Eflak-Boğdan giriş/boşaltmaları | A2·U1 | 1806-12 ve 1828-29 maddeleri kısmen işlendi (Oturum 4 B → Oturum 7) | ⚠️ |
| 10-16 | İsmail kalesi "uçakla mı" + Hotin yine kırmızı | A2 | T ölçtü: **İsmail/İzmail yerleşim kaydı veride HİÇ YOK** — kalenin düşüşü haritada hiçbir şey oynatamaz; nokta + zincir A2'den | ⏳ |
| 10-17 | Vehran Cezayir renginde olmalı + denizaşırı petek | M | kara-kısıtlı Voronoi koşusu + renk kararı | ⏳ |
| 10-18 | Napolyon oku + işgal alanı Fransız rengine | K | taralı işgal katmanı kuruldu (b2e523e); Mısır `isg:` örtüsü kesinleşti, uygulama K'da | ⚠️ |
| 10-19 | Preveze/Adriyatik Venedik→Fransa geçişi kronolojiye | U1·A2 | T ölçtü: HARİTADA VAR (Preveze `venedik→fransa` 1797-10-17 = Campo Formio), kronolojide **0 madde** — kullanıcı haklı, madde yazılmalı | ⏳ |
| 10-20 | Napolyon'un Suriye harekâtı oklar + taralı | U3 | T ölçtü: SEFERLER'de Napolyon Suriye oku YOK (yalnız 1516 Mısır ve 1831 İbrâhim Paşa okları var); Akkâ ⚔ işareti mevcut | ⏳ |
| 10-21 | Nelson + Mısır'ın boşaltılması kronolojiye | U1 | tahliye maddesi var (1801-10-09, +0 gün); **Nelson/Abukir maddesi bulunamadı** | ⚠️ |
| 10-22 | Vehhâbî Mekke fethi oklarla + Mekke haritada | U3·K | Mekke kaydı var; tarih düzeltmeleri A5 §A.1'de, kronoloji önerileri §A.3'te — uygulama K, ok U3 | ⏳ |
| 10-23 | Mısır'ın hukukî durumu + tüm vasal statüleri etüdü | K | Kavalalı katmanı kuruldu (4342bab), Kahire `v:` 1805-1914; karşılaştırmalı statü anlatımı yazılmadı | ⚠️ |
| 10-24 | Vehhâbî 1803/1805/1806 tarihleri karışık | K | HÜKÜM kesin (A5 §A.0): mükerrer değil, Mekke iki kez düştü (TDV 30.04.1803 + Ocak 1806); kayıt düzeltmeleri K uygulayacak | ⏳ |
| 10-25 | Şehir noktaları konunca kalıyor | K | işaretler maddeyle sınırlandı + zoom kademesi | ✅ 810efc9·6cfe71e |
| 10-26 | Alemdar'ın Rusçuk→İstanbul yürüyüşü oku | U3 | kronolojide maddesi var; ok girmedi | ⏳ |
| 10-27 | Hanedan içi öldürmeler birer madde | U1 | 1876 krizi kadrosu tamam (9d89241); sistematik tarama yapılmadı | ⚠️ |
| 10-28 | Etkili valide sultanlar kronolojiye | U1 | T ölçtü: KISMEN var — Hürrem nikâhı (1534), Kösem'in öldürülmesi (1651), kisiler'de Turhan Sultan; Nurbanu/Safiye maddesi YOK, sistematik değil | ⚠️ |
| 10-29 | Sohum bölgesi "Kırım bozkırı" görünüyor + Anapa hep kırmızı | A1·A5 | Sohum/Anapa ölçüldü, tarihen doğru; bölge ETİKETİ ve Anapa 1791-92 işgali açık | ⚠️ |

## hatalar 11 — 61 madde

⚠️ Eski raporlarla numara eşlemesi başlıktaki tabloda ve satır içinde.

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 11-01 | Yanbu neresi + Vehhâbî sonrası Osmanlı parçası | A5 | Yanbu işaretli; parça **CİDDE ve GERÇEK** (Vehhâbîler alamadı) | ✅ ARABİSTAN A.2 |
| 11-02 | Bükreş antlaşması — kayıplar + savaşa giden yol | A4·U1 | Hotin teyit; Kafkasya'da kayıp yok; İbrâil/Rusçuk maddeleri işlendi | ✅ |
| 11-03 | Belgrad ne zaman gitmişti de geri alındı | A2 | veri doğru: 1739-09-18 → 1867-04-18, maddeleri var | ✅ §17.5 |
| 11-04 | 2. Sırp isyanı ateş/ok | U3 | 10 yeni okun içinde | ✅ bc89690 |
| 11-05 | Eflak isyanı (İpsilanti) gösterimi | U3 | ok vardı, adı "Eflak İsyanı" yapıldı | ✅ EK6 |
| 11-06 | Navarin'e müttefik donanma oku | U3 | ok girdi; `t:"1827-10"` → 10-20 düzeltmesi hâlâ K'da | ⚠️ |
| 11-07 | 1828-29 Rus ilerlemeleri detay | A4·U1 | 3 madde işlendi; Varna/Kars işgalleri GEÇİCİ (gün TDV'de yok, uydurulmadı) | ⚠️ |
| 11-08 | Cezayir işgali nasıl oldu | A4·U1 | 4 maddelik zincir işlendi (yelpaze→abluka→çıkarma→sürgün) | ✅ |
| 11-09 | Yunan isyanı detaylandır | A4 | araştırma bitti; Navarin/1830-02/Tripoliçe düzeltmeleri K'da | ⚠️ |
| 11-10 | Cezayir'in kaybı detay + harita | A4·U1 | zincir işlendi | ✅ |
| 11-11 | Girit Kavalalı'ya — hepsi açık kırmızı | K | Mısır dönemi hiç yoktu; beş kayda `v:` 1830-1840 | ✅ 732663b |
| 11-12 | Rus donanması Büyükdere oku | U3 | 10 okun içinde | ✅ bc89690 |
| 11-13 | Mısır'ın Suriye/Çukurova gösterimi normal mi | M | Oturum 8 hücre ölçümü → motor değerlendirecek | 🔬 |
| 11-14 | Şam ve Halep'ten doğuya çıkıntılar normal mi | M | aynı ölçüm paketi | 🔬 |
| 11-15 | Bicaye işgali nerede (raporlarda md.16) | A3 | ölçüldü: Ahmed Bey dönemi; anakronik `v:` bitişleri düzeltme listesinde | ⚠️ |
| 11-16 | Libya cetvelle çizilmiş gibi (md.17) | A3·M | nokta yokluğu (192.614 km²/nokta); 9 nokta uygulandı, iç liste hazır — K'da | ⚠️ |
| 11-17 | Cebel-i Dürüz neresi, Cezayir parçası onunla mı ilgili (md.18) | A3 | HAYIR: Suriye'de; Cezayir parçası ayrı olay | ✅ OGRENILENLER §14 |
| 11-18 | Donanmanın İskenderiye'ye teslimi oku (md.19) | U3 | `teslim` tipiyle girdi | ✅ bc89690 |
| 11-19 | Kavalalı irsî valilik — Arabistan nüfuzu + Kızıldeniz batısı (md.20) | K·❓ | A5 §C.4: 1841 yönü DOĞRU (Hicaz Mısır'dan çıkıyor); Kızıldeniz batısı §B.3 düzeltmesiyle kapanacak; "Arabistan'da nüfuz alanı" kısmı için **kullanıcıdan görüntü/tarih bekleniyor** | ⚠️ |
| 11-20 | Şehir isimleri punto/zoom kuralı (eski 11-21) | K | zoom kademesi + ölçekli punto; **bölge adları büyük punto kaldı** | ⚠️ 6cfe71e |
| 11-21 | Söğüt/Domaniç/Pelekanon 1800'de duruyor (eski 11-20) | K | `go:` sönme alanı + zoom kademesi | ✅ 6cfe71e |
| 11-22 | Cezayir işgal sonrası iç bölgeler Osmanlı pembesi (md.23) | A3 | 21 kayıt üç grupta düzeltildi (90d4d01); **Biskra/Tuggurt dönem bölme K'da** | ⚠️ |
| 11-23 | Yemen'de nokta nokta idare + karşı kıyı kime bağlı (md.24) | K | A5 §B.3: nokta nokta GERÇEK (1849-72 yalnız sahil Osmanlı — hata değil); karşı kıyı **MISIR'a** bağlıydı, Sevâkin/Masavva/Dahlak'a `v:` 1865-1885 bölmesi önerildi — uygulama K | ⏳ |
| 11-24 | Şirket-i Hayriye'de Yemen artışı (md.25) | K·U1 | A5 §B.1: vaka doğrulandı — Yemen sahili Baltalimanı (1849-05-01) maddesinin altında beliriyor; çözüm `1849-01-01` + yeni Yemen maddesi + üretilmiş mükerrer cümle temizliği | ⏳ |
| 11-25 | Sinop baskını ayrı madde (md.26) | U1 | eklendi, 1853-11-30 | ✅ bc3caef |
| 11-26 | Tuggurt — elden çıkan bölge (md.27) | A3 | ölçüldü, C grubu (Sahra vahaları); dönem bölme + kimlik kararı açık | ⚠️ |
| 11-27 | Eflak-Boğdan birleşmesi + vasal gösterimi (md.28) | A2 | birleşme DOĞRU çıktı; şikâyetin kökü Eflak'ta tek nokta — 10 nokta hazır, K'da | ⚠️ |
| 11-28 | Boğdan cetvel gibi mi + sahipsiz parça (md.29) | A2·M | köşe/1000 km 101,7 = sağlıklı; sorun yaslama yarıçapı; Soroka/Orhei/Reni noktaları kuyrukta | ⚠️ |
| 11-29 | Romanya vasal renkte + kalın çizgi içinde (eski 11-30) | K | `imparatorluk-hale` + maddeler var | ✅ |
| 11-30 | Girit isyanı ateş + kronoloji genişletme (md.31) | U3 | 🔥 işareti girdi | ✅ bc89690 |
| 11-31 | Belgrad garnizonunun çekilişi oku + geri çekilme tipi (eski 11-32/33) | U3 | `cekilme` tipi + 9 tipli tipoloji | ✅ |
| 11-32 | Abdülaziz'in Avrupa seyahati (md.34*) | U3 | `seyahat` tipiyle girdi | ✅ bc89690 |
| 11-33 | Asîr'in doğrudan idareye alınması (md.34*) | K | A5 §C.3: gösterim büyük ölçüde DOĞRU; üç ince iş — 1872/Yemen vilâyeti bağı, `kaynak:` → `asir--suudi-arabistan`, `aiz` kimliği şüpheli ama İdrîsî slug'ı bulunamadı (kaynaksız değiştirilmez) | ⚠️ |
| 11-34 | Lahsa'da merkez/özerk ayrımı (md.35) | K | A5 §C.2 CEVAP: özerk değil — 1550-1670 beylerbeyilik, 1871-1913 Basra'ya bağlı sancak, ikisi de DOĞRUDAN. ⚠️ `y:"vassal"` kaldırma önerisi **İPTAL** (A5 geri çekti; arayüz 🤝 çiziyor, D tanımı yazdı) — kalan yalnız tarih düzeltmeleri (1547; 05-08↔07-08) | ⏳ |
| 11-35 | Âli Paşa 1871 iki madde (md.36/37) | K·D | mükerrer silindi; eşik ölçüldü, v3 ölçütü kuruldu | ✅ |
| 11-36 | V. Murad cülûs/hal ayrımı + 1876 olayları (md.37/38) | U1·A2 | kişi kadrosu tamam (9d89241); kronoloji maddeleri (cülûs/hal/ölüm ayrı) yazılmadı | ⚠️ |
| 11-37 | 93 harbine giden yol (md.38/39) | A2 | D-1…D-4 maddeleri yazıldı | ✅ §17.5 |
| 11-38 | 93 harbi safhaları + Yeşilköy (md.39/40) | A2·U3 | D maddeleri + Yeşilköy oku | ✅ |
| 11-39 | 1800 sonları Mısır ortası boşluk (eski 11-40) | A3 | motor kusuru DEĞİL: vahalar; 3 çöl noktası eklendi (e35b699); 1820 sonrası `v:` işi kuyrukta (§1b) | ⚠️ |
| 11-40 | Mısır'ın İngiliz işgali taralı (md.41/42) | K | 1914-12-18 düzeltmesi uygulandı (b513a37); 1882 `isg:` örtüsü önerisi K'da | ⚠️ |
| 11-41 | Mehdî devleti ilerlemeleri (md.43) | A3 | ölçüldü: iki tarih yanlış, düzeltme listede — K'da | ⚠️ |
| 11-42 | İngiltere'nin Kızıldeniz/Arabistan faaliyetleri (md.44) | A3·A5 | Zeyla düzeltmesi listede; sistematik kronoloji taraması eksik | ⚠️ |
| 11-43 | Doğu Rumeli katılması görünmüyor + Ayastefanos/Berlin (md.45) | K | ölçüldü: Şarkî Rumeli HİÇ yok, üstelik ters (38-45 yıl); #33 dört kayıt hazır | ⏳ |
| 11-44 | Berlin sonrası harita teyidi (md.46) | A2 | §17 tablosuyla ölçüldü; düzeltmeler #33-35 | ⚠️ |
| 11-45 | Bulgaristan bağlı özerk değil miydi (md.47) | A2 | CEVAP: 1878-1908 özerk, sonra bağımsız; #34 yedi kayıt `v:` — K'da | ⏳ |
| 11-46 | Tunus işgali ile Duyûn-ı Umûmiyye ayrılsın (md.51) | A3 | ölçüldü: ayrılmalı; madde metinleri hazır — K'da | ⏳ |
| 11-47 | Teselya neden bırakıldı, Dömeke (md.49) | A2 | maddeler var (1881-07-02, 1897-05-17); Dömeke kaynağı "TDV'de yok" işaretli | ✅ |
| 11-48 | İtalya'nın Kızıldeniz işgali belli değil (md.50) | A3·K | T ölçtü: 1885 Masavva maddesi TAM (0 gün); AÇIK olan üç dalga — Aseb 1882 (68 gün), Asmara/Kerene 1889 (99 gün), Somali 1888-1905 (56-201 gün) maddesiz | ⏳ |
| 11-49 | Fransa Kızıldeniz'de toprak almış, kronolojide yok (md.51F) | A3·K | T ölçtü: haritayı boyayan TEK kayıt Tacûra (1884-01-01); kronolojide Fransız Somalisi maddesi 0 — aynı gün "Reji İdaresi" gösteriliyor | ⏳ |
| 11-50 | Bogos Habeşistan'a bırakıldı, neresi (md.52) | A3 | KAPANDI: iş yok | ✅ OTURUM-14 §10 |
| 11-51 | San'â'nın geri alınması ve önceki kaybı (md.53) | K·U1 | A5 §B.2+§F.2: kullanıcı HAKLI — kayıp haritada yok; çözüm: `s:"yemen"` 1905-04-01→1905-09-01, madde 09-01'e; ayrıca **Daân Antlaşması (1911-10-09) yeni madde** U1'de. Taiz sorusu KAPANDI: düşmedi (kurtaran harekâtın üssüydü), veriye dokunulmayacak | ⏳ |
| 11-52 | Bosna önce taralı işgal sonra ilhak (md.54) | K·M | `isg:` 1878-1908 örtüsü DOĞRU çalışıyor; ilhak sonrası ~4 yıl gövde örtüşmesi motor kusuru (#36) | ⚠️ |
| 11-53 | Arnavutluk isyanı ateş (md.55) | U3 | 🔥 girdi | ✅ bc89690 |
| 11-54 | Trablusgarp savaşı işgalleri adım adım (md.56) | A3 | `isg:` örtüsü + madde listesi hazır — K'da | ⏳ |
| 11-55 | Balkan savaşları adım adım (md.56B) | A2 | D-5, D-6 + mevcut maddeler; savaşın ilk iki haftası kapandı | ✅ §17.5 |
| 11-56 | 1. Balkan'da Çatalca'ya kadar kayıp teyidi (md.57) | A2 | ölçülüp doğrulandı | ✅ §17.5 |
| 11-57 | Balkan sonrası kalan parça hata + Edirne teyit (md.58) | K | parça = Şarkî Rumeli kaması (#33); Edirne doğru | ⏳ |
| 11-58 | Britanya'nın Basra'da ilerlemesi (md.59) | A4 | Oturum 13'e verildi; raporlarda sonuç yok | ⏳ |
| 11-59 | Sarıkamış/Kanal okları + çarpı (md.60) | A4·U3 | rozet altyapısı hazır (`yenilgi`); araştırma payı açık | ⏳ |
| 11-60 | 1. Dünya savaşı cepheleri detay (md.61) | A4 | Oturum 13'e verildi; yapılmadı | ⏳ |
| 11-61 | Mondros'a kadar cepheler gün gün (md.62) | A4 | aynı | ⏳ |

## hatalar 12 — 11 madde

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 12-01 | Baştaki iki toprak köşeden değil düzgün bağlansın | M | bitişiklik D: 1281 gövdesi iki leke, 1,66 km %100 KARA boşluk — motor işi | ⏳ |
| 12-02 | Boğaz kuzeyi + Tuz gölü kıyıya oturmuyor | M | bulgu doğru; `bogazlar.js` çaresi ölçülüp GERİ ALINDI (002842b), doğru çare açık | ⏳ |
| 12-03 | Osmanlı'nın kuzeyinde boş toprak çıktı | ? | 📷 hangi tarih/kesit olduğu metinden çıkmıyor — görüntü şart | ❓ 📷 |
| 12-04 | Katalan oku erken görünüyor | U3 | ölçüldü: tarih ve pencere DOĞRU; uzun kampanya + ara madde gerçek çakışma — düzeltilecek veri yok | ❌ EK3 |
| 12-05 | Tarihi yer bir-iki aşama sonra silinsin + zoom kuralı | K | `g:0` sönme + zoom kademesi bunu uyguluyor | ✅ 6cfe71e |
| 12-06 | Karesi'de Gelibolu'ya deniz aşırı geçiş (eski 15-06) | M | ada kuralı devreye girmiyor (tek kara bileşeni); çare kara-kısıtlı Voronoi | ⏳ |
| 12-07 | Gümülcine köşe teması + darboğaz | M | bitişiklik A: 3,7 km %100 kara, 6.459 km² — motor işi | ⏳ |
| 12-08 | Başkent oluş maddeleri var mı | U1 | Bursa/Edirne/İstanbul fetih maddelerinde zaten anlatılıyor | ✅ |
| 12-09 | Savcı Bey isyanı işaretlensin | U3 | Bursa-İstanbul rotasıyla `isyan` kaydı | ✅ 087468f |
| 12-10 | Isparta enklavı doğru mu | D | ölçüldü: 116 km kara sıçraması, arada Karaman — **enklav görüntüsü DOĞRU** | ✅ |
| 12-11 | Karadan genişlemede bağlantı — genel kural | D | onuncu denetim (BİTİŞİKLİK) kuruldu; 13 kopuk konum listede | ⏳ |

## hatalar 13 — 15 madde

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 13-01 | Fetih maddesi varsa yer görünmeli, sonra kalkmalı | K | olay anlatılırken yer zorla görünüyor | ✅ r152 |
| 13-02 | Varna alınıyor, etiketi yok | K | kayıt VAR; `g:0`+550 gün penceresi 1444'te kapalı; öneri: Varna `g:2` | ⏳ |
| 13-03 | Tüm şehir alımlarına etiket/nokta | K | 138 benzer kayıt ölçüldü; TOPLU düzeltme ters teper (11-21'in tersi) — tek tek `g:` kararı | ⚠️ |
| 13-04 | Timur Bağdat'ı alıyor, haritada yok | A4 | Bağdat 1281-1508 tek `iran` bloğu — Celâyirli/Timurlu/Karakoyunlu/Akkoyunlu dördü birden silik; madde yazıldı, Irak dönemleri açık | ⚠️ |
| 13-05 | Karaman'ın bir kısmı boyanıyor | A1 | kısmî ilhak GERÇEK (İç İl istisnası); **Niğde yanlış tarafta** — tek kayıt düzeltmesi K'da | ⚠️ |
| 13-06 | Fetret haritasında gariplikler | A1 | 93 kayıt zinciri taşıyor, 3'ü taşımıyor (=13-07) | ⏳ |
| 13-07 | Edremit/Erdek Osmanlı kalıyor | A1 | tam o üçü: Edremit·Erdek·Ayvalık, 1345-1923 kesintisiz; komşu zinciri kopyalanacak — K'da | ⏳ |
| 13-08 | Timur yürüyüşü ok↔madde senkronu | U3 | 3 okun 3'ü maddeli (ikisi gün-birebir); tek boşluk Bursa yağması maddesi — U1'e | ⚠️ |
| 13-09 | Düzmece Mustafa'da Aydınoğulları | A1 | GERÇEK; iki madde yazıldı (1422 dönüş, 1426 son) | ✅ c0804d4 |
| 13-10 | Aydınoğulları müstakil olduysa kronolojiye | A1 | aynı işin ikinci yarısı; tarihler TDV'ye çekildi | ✅ |
| 13-11 | Tâceddinoğulları + Belgrad aynı anda oynuyor | D | ölçüldü: iki GERÇEK olay aynı pencerede (BILINEN_AYRI) — kusur değil | ❌ |
| 13-12 | Germiyan izi iki kez ilhak gibi | A1 | harita DOĞRU (1381·1390·1402·1429 TDV'yle birebir); kusur 1390 maddesinin başlığında — K'da | ⚠️ |
| 13-13 | Kırım yarısı kırmızı yarısı pembe | M·A1 | ikili renk DOĞRU, oran yanlış (%39 vs ~%18); 7 nokta + kalibrasyon çelişkisi | ⏳ |
| 13-14 | 1479 İyon adaları madde/isim | A2 | ölçüldü: 4 ada kaydı 1479-01-25 → 08-01'e çekilecek (8 eşleşme) — K'da | ⚠️ |
| 13-15 | Zakintos bırakılırken Karadağ alınıyor mu | A2 | Cetinje 1482/1499/1697 zincirinin kaynağı bulunamadı — K'ya soruldu | ⚠️ |

## hatalar 14 — 5 madde

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 14-01 | Detay penceresi ortada açılıyor | K | panel içi zengin gösterime yöneltildi | ✅ r143 |
| 14-02 | Kili-Akkerman arası boşluk | A2 | geometrik boşluk YOK; hayalet bölünmeydi; tarih düzeltmeleri (#13-15) K'da | ✅ |
| 14-03 | Sapienza'dan önce İnebahtı'da Venedik | A2 | ölçüldü: `1499-08-28` → `08-26` + `g:2` (#16) — K'da | ⚠️ |
| 14-04 | Akkoyunlu çözülüşü haritada yok | A1 | mükerrer çift (ek5:98 ↔ ek7:207), 189 günlük ölü bölge; beş yeni madde eklendi, ek5:98 silinecek | ⏳ |
| 14-05 | Yavuz'un Malatya-Ergani hattı | A1 | gösterim DOĞRU (Memlûk'tü); Ergani noktası çözünürlük için eklenecek (`ergani` slug ÖLÜ) | ⏳ |

## hatalar 15 — 20 madde

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 15-01 | Mohaç sonrası Macaristan/Erdel gösterimi | A2 | üç katman ölçüldü; 18+13 kayıtta `macaristan` → `macaristan-habsburg/naiplik` işi (#19-20) açık | ⚠️ |
| 15-02 | Budin/Zapolya maddesinde Viyana rotası | U3 | ölçüldü: tek gerçek kampanya (İstanbul→Budin→Viyana); bölmek için kaynak tarih yok | ❌ EK5 |
| 15-03 | Küns kuşatması şehri gösterilsin | A2 | SAVASLAR kaydı doğru; **Kőszeg yerleşim noktası hiçbir dosyada yok** — Avrupa yerleşim işi | ⚠️ |
| 15-04 | 1538 Bucak/Bender kimden alındı | A2 | Boğdan'dan; hayalet bölünme düzeltildi | ✅ cc714ac |
| 15-05 | 1541-44 Macaristan'da yeşil bölgeler | A2 | aynı üç-katman ölçümü; `macaristan-habsburg` bekliyor | ⚠️ |
| 15-06 | Lahsa-Katîf karasal kopukluk | K·COĞRAFYA | HAKEM SONUCU: motor borcu DEĞİL — Kuveyt'in boşluğu kasıtlı sahipsizlik KURALI; kopukluk gerçek (A4: 350 km Benî Hâlid) + kasıtlı boş hücre iki Osmanlı bölgesi arasına düşünce kopuk okunuyor → gösterim kararı (3 seçenek YAPILACAKLAR'da); Katîf tarih işleri ayrıca K'da | ⏳ |
| 15-07 | Eflak vasal rengi + sınırları | A2 | Eflak'ta TEK nokta var; ölçülmüş 10 kayıtlık küme hazır (§15) — K'da | ⏳ |
| 15-08 | Ferhat Paşa savaşı/antlaşması haritası | A4 | 10/10 kırılma maddeli; Nihâvend kayıtlı; **Urmiye+Hoy eksik**, 9-nokta genişletme kararda | ⚠️ |
| 15-09 | Hotin yeşil kalmış | A2·K | hayalet bölünme; `v:` yapıldı, r176 üretimiyle yayında | ✅ cc714ac |
| 15-10 | Eflak'ın üçte biri açık kırmızı | A2 | = 15-07 (14 test noktasının 8'i doğrudan çıkıyordu) | ⏳ |
| 15-11 | Kasr-ı Şirin milim milim (tekrar) | A4 | 7/7 doğru; 1296 km zaten ihtilaflıydı | ✅ |
| 15-12 | Yanova/Varad kimden alındı (eski 15-13) | A2 | vasal ERDEL'den; veri doğru modelliyor; Yanova fetih/kayıp günleri (#26-27) K'da | ✅ |
| 15-13 | Erdel-Eflak-Boğdan üçlü başkaldırı kronolojide yok | K | KARAR bekliyor (#30): toprak karşılığı işlensin mi; C-1…C-4 maddeleri hazır — görüntü gerekmez, karar işi | ⏳ |
| 15-14 | Pencere sağ altta açılmıyor | K | = 14-01, r143'te çözüldü | ✅ |
| 15-15 | Solnok kaybı görünmüyor | M | = 7-03: petek düzeldi, 13 aylık gecikme kusuru (#25) açık | ⚠️ |
| 15-16 | Hotin hep tek başına görünüyor | A2 | ölçüldü ve DOĞRU: raya modeli (Boğdan içinde koyu nokta); 1788-92 ve 1806-12 Rus işgalleri eksik (#29) | ⚠️ |
| 15-17 | Kafkaslar 1695 normal mi | M | köşe/1000 km = 112,5 — sağlıklı, kusur yok | ✅ |
| 15-18 | Vahran/Oran/Merselkebir alanlarını doğrula | M | kara-kısıtlı koşuyla birlikte ölçülecek | 🔬 |
| 15-19 | Petek denizaşırı olamaz (Oran→İspanya) | M | eşiksiz çözüm ölçüldü: 32 parça / 321 bin km², 32/32 kabul — koşu bekliyor | ⏳ |
| 15-20 | Edirne (1713) sonrası Hotin kırmızı — metin yok | A2 | teyit: parça Hotin ve DOĞRU (raya tahkimi) | ✅ 4e1f398 |

## hatalar 16 — 11 madde

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 16-01 | Şirvan/Gürcistan 1723 enklavı | A4 | harita DOĞRU: Şamahı 1723-08, aradakiler 1724-25 — enklav gerçek ve geçici | ✅ |
| 16-02 | Hemedan — Urmiye/Nahçıvan geçmedi mi | A4 | Nahçıvan doğru (1725-30); **Urmiye gerçek eksik**; 9 nokta genişletme kararda | ⚠️ |
| 16-03 | Hotin Ruslara nasıl terk ediliyor + üst bölüm | A2 | 📷 "BU haritanın üst bölümü doğru mu" — kullanıcı belirli bir görüntüye bakıyor, hangi kesit olduğu metinden çıkmıyor | ❓ 📷 |
| 16-04 | Basra'nın İran işgali | A4·K | `s:` değil `isg:` örtüsü olmalı; 64,6 km'lik sahte kopukluğu da kapatır. Ek havale (A5 §F.4 → A4): Basra `y:` seçimi (itaat mi savaş mı) + iki tarih çelişkisi (1546↔26.12.1545; işgal 1776↔1775) | ⏳ |
| 16-05 | "Bu üçgen" (eski kayıt 15-05) | A4 | 📷 hipotez: Basra'nın 1776-79 İran peteği; 16-04 çözülünce kapanabilir — ekran görüntüsü şart | ❓ 📷 |
| 16-06 | Napolyon'un Mısır işgali haritada yok | A3·K | kronoloji tamdı; `isg:` örtüsü 7 kayıt için kesinleşti (c7ce502) — uygulama K'da | ⏳ |
| 16-07 | Akkâ savunması görünmüyor | U3 | SAVASLAR'a eklendi (kuşatma/zafer) | ✅ 2fedf8e |
| 16-08 | Vehhâbîler Mekke'yi iki kez alıyor | K·U1 | HÜKÜM kesin (A5 §A.0): **mükerrer DEĞİL** — Mekke iki kez düştü; ilk "1806'yı sil" hükmü çürütüldü. Kalan uygulama: kayıt tarihleri (§A.1) K'da; `ek6:85` hutbe cümlesinin kaynaklı metni (§F.5, `surre`) U1'de | ⏳ |
| 16-09 | Sohum gitti, Anapa duruyor mu | A4 | tarihen DOĞRU (Kuban sınır); Anapa'nın 1791-92 Rus işgali eksik | ⚠️ |
| 16-10 | Eflak isyanı ateşle görünmüyor | U3 | kayıt vardı, adı düzeltildi | ✅ |
| 16-11 | Girit hepsi açık kırmızı olmalı | K | = 11-11, beş kayda Mısır dönemi | ✅ 732663b |

---

## ÖZET — 2026-07-31 sayımı

| Durum | Sayı |
|---|---|
| **Toplam** | **239** |
| ✅ bitti | **121** |
| ⚠️ açık borç kaldı | 52 |
| ⏳ sırada (sahibi belli) | 53 |
| 🔬 ölçülüyor | 6 |
| ❌ yapılmayacak (gerekçeli) | 3 |
| ❓ görüntü bekliyor 📷 | 4 |

*(31 Tem 3. güncelleme: `kur:` çelişkisi K hakem ölçümüyle çözüldü — motor
OKUYOR, bayat olan YAPILACAKLAR satırıydı; 3-10 ve 15-06 gösterim kararına
döndü. ❓21'in triyajı ölçümle yapıldı: 5'i veriden ✅ kapandı, 12'si sahipli
işe döndü, yalnız 4'ü gerçekten görüntü istiyor.)*

### 📷 KULLANICIDAN GÖRÜNTÜ İSTENECEKLER — tek seferde sorulacak liste

| No | Madde | Neden metin yetmiyor |
|---|---|---|
| 3-04 | Barbaros'un aldığı adalar — harita farkları | şikâyet "iki haritayı da koyuyorum" diyor; fark listesi görüntüde |
| 12-03 | Osmanlı'nın kuzeyinde boş toprak | hangi tarih/kesit olduğu yazmıyor |
| 16-03 | Hotin'in Ruslara terki — "üst bölüm doğru mu" | "BU haritanın üst bölümü" hangi kesit, belirsiz |
| 16-05 | "Bu üçgen" | konum tarifi yalnız görüntüde (hipotez: Basra 1776-79 İran peteği) |
| *(+ 11-19)* | *Kavalalı — "Arabistan'da nüfuz alanına geçen toprak"* | *⚠️ satırı ama A5'in de istediği görüntü bu — listeye eklensin* |

Görüntü İSTEMEYEN eski ❓'lar ölçümle dağıtıldı: ✅ 4-02 · 4-03 · 4-06 · 6-04 ·
6-05 — ⏳ 3-05(A1) · 4-09(A4·K) · 5-01(M) · 10-06(A1) · 10-08(A2) · 10-16(A2) ·
10-19(U1·A2) · 10-20(U3) · 15-13(K karar) — ⚠️ 7-06(A1) · 10-14(A1, Kefe
şüphesi) · 10-28(U1). Ölçüm komutu: `scratchpad/belirsiz_tarama.js`.

### ⏳ yoğunlaşması — kimde ne bekliyor

| Sahip | Bekleyen |
|---|---|
| **K uygulama** | ARABİSTAN hükümleri: 2-05 Zebîd (iki dönem) · 6-09 Lahsa 1818-41 · 11-23 Sevâkin/Masavva/Dahlak `v:` · 11-24 Yemen `1849-01-01` · 11-34 Lahsa tarihleri · 11-51 Sana 1905 · 16-08 kayıt tarihleri · Sevâkin 1885→Yemen vilâyeti · Taiz 1629+1547-02-01 · 1539 ayrı maddesi — ayrıca 11-43/45/46/54/57 · 13-02/06/07 · 14-04/05 · 15-07/10 · 16-06 · 15-13 (#30 kararı) |
| **K·COĞRAFYA** | 3-10 + 15-06 Kuveyt boşluğunun GÖSTERİMİ (kusur değil kural; üç seçenek YAPILACAKLAR'da, hiçbiri ölçülmedi) |
| **A5 Arabistan** | kalan: Sevâkin 1888 sonrası sahibi (❓ kaynak) · İdrîsî slug arayışı (KAYNAK ile) — B/C/D/E/F/G raporu TESLİM EDİLDİ |
| **A4 Doğu** | 11-58…61 (Basra, Sarıkamış, cepheler) · 16-04 (+ §F.4 Basra `y:` ve tarih çelişkileri) · 4-09 Nahçıvan/Ordubad 1585 günü |
| **A3 Arap-Afrika** | 11-48 · 11-49 kronolojisi (T'nin ölçümü teslim — Fransa önce) |
| **A1 Anadolu** | 3-05 Didim teyidi · 7-06 Azak doğu yakası 1696 · 10-06 Kuban 1771 · 10-14 **Kefe 1774-83 zinciri şüphesi** (Bahçesaray'la çelişiyor) |
| **A2 Balkan** | 10-08 KK metin karşılaştırması · 10-10 Pontik noktalar · **10-16 İsmail kalesi noktası (veride hiç yok)** · 10-19 Campo Formio maddesi (U1 ile) |
| **M motor** | 8-02 koşu · 12-01 · 12-02 · 12-06 · 12-07 · 15-19 · 10-17 · **5-01 Antalya/Tuz gölü kıyı yaslama ölçümü** (+#25, #36 örtüşme) |
| **U1 kronoloji** | 16-08 hutbe metni (§F.5) · "Aynı tarihte…" mükerrer cümleler (9 vaka) · 11-51 Daân maddesi · 10-19 Campo Formio · 10-28 Nurbanu/Safiye |
| **A1·M Kırım** | 7-01 · 10-02 · 10-05 · 10-09 · 13-13 — §22 kalibrasyonu çözülmeden girilmiyor |
| **U3** | 10-26 Alemdar oku · 10-20 Napolyon Suriye oku |
| **T takipçi** | — (❓ triyajı teslim; bekleyen iş yok) |

**Madde dışı ön şart (K + U2):** `kazak` kimlik zinciri — renkler.py ↔
yerlesimler_ortaasya2.js ↔ kimlikler.js üçlüsü, Orta Asya merge'inin ön şartı.
📌 Dosya canlılığı `index.html`'den DEĞİL `arac/girdi.py` `GIRDI_DOSYALARI`'ndan
ölçülür (ölçüldü: `_afrika` boyamada canlı ama index'te yok; `_ortaasya2`
ikisinde de yok = gerçekten merge bekliyor).
