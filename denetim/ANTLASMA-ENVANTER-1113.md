# Osmanlı antlaşmaları ENVANTERİ — 1113 (LAB, salt okuma)

Amaç: Emre'nin "Lozan standardı" isteği (her Osmanlı antlaşmasının kronoloji maddesinde bir oynatıcı düğmesi; maddeler tek tek; haritada ÖNCE/SONRA). Bu belge oynatıcı genelleştirmesinin GİRDİSİ.

**Kaynak/yöntem.** `origin/main` (a96162a9c) üzerinde `data/olaylar*.js` ve `data/kronoloji*.js` düğümde yüklendi (vm); `k:"antlasma"` olan **222 madde** bulundu (KASA'nın 223'ü: bir fark madde sayım biçiminden; liste ölçüldü, 222). `ANTLASMA_HARITALARI` **70 kayıt**. Osmanlı'nın TARAF olduğunu ben ayırdım (aşağıda 90 satır); ayırma ölçüt: Osmanlı (ya da TBMM) antlaşmanın imza tarafı.

**GÜVEN SINIRI (dürüst):** "Haritada gör" ve dosya/madde sütunları VERİDEN ÖLÇÜLDÜ. "Tahmini madde sayısı", "önem" ve "kaynak" sütunları BENİM BİLGİMDEN kaba tahmindir — madde sayıları ve kaynak durumu ağdan DOĞRULANMADI (hafif iş istendi); oynatıcıya girmeden önce EMRELİC/UMIT kaynak sayfasını açıp teyit etmeli. `önem` benim 1-5 kararım (toprak/statü değişimi büyüklüğü), maddelerin kendi `onem` alanı değil.

Kaynak durumu: **A** = açık tam metin bilinir (Wikisource / avalon.law.yale / Hurewitz / Düstur); **B** = özet ya da tek dilli/ikincil yayın, tam madde metni bulunması zahmetli; **C** = tam metin bulunması zor (yalnız olay anlatısı).

**Özet:** 90 satır; kaynak A=30, B=44, C=16; "Haritada gör" VAR=42, yok=48; oynatıcısı hazır 2 (Sevr, Lozan).

## 1. Tablo (kronolojik)

| # | Tarih | Madde (başlık) | Dosya (veri) | Haritada gör | Madde sayısı (kaba) | Önem | Kaynak | Not |
|---|---|---|---|---|---|---|---|---|
| 1 | 1333-08-01 | Bizans'ın haraca bağlanması — İzmit kuşatması ve antlaşma | `olaylar_ek5` | yok | 1 | 2 | C | ahitname metni yok; olay kaynaklı |
| 2 | 1352-01-01 | Orhan Gazi'nin Cenevizlilerle ilk kapitülasyonu | `olaylar_ek5` | yok | ~10 | 2 | C | Ceneviz ahidnâmeleri Heyd/Dölger |
| 3 | 1387-06-08 | Osmanlı-Ceneviz ahidnâmesi — 1352 antlaşmasının yenilenmesi | `olaylar_ek` | yok | ~10 | 2 | B |  |
| 4 | 1403-02-01 | Gelibolu Antlaşması: Misivri'ye kadar Karadeniz kıyısı Bizans'a bırakıldı | `olaylar_ek3` | VAR (gelibolu-1403, 1 bölge) | ~6 | 3 | B | 1403 Gelibolu üç madde (53/54/55) tek olay |
| 5 | 1403-06-01 | Süleyman Çelebi – Bizans antlaşması: Selanik'in iadesi | `olaylar_ek` | yok | (53 ile aynı) | 3 | B | Gelibolu 1403 ikinci madde — birleştir |
| 6 | 1403-06-15 | Gelibolu Antlaşması — Bizans'a tavizler | `olaylar_ek3` | yok | (53 ile aynı) | 3 | B | Gelibolu 1403 üçüncü madde — birleştir |
| 7 | 1415-03-01 | Konya kuşatması ve Karamanoğulları ile antlaşma — Hamîd-ili, Said-ili, Beyşehi | `olaylar_ek5` | VAR (konya-1415, 1 bölge) | 1 | 2 | C |  |
| 8 | 1424-02-22 | II. Murad ile Bizans barışı — Bizans yeniden haraç ödemeyi kabul etti | `olaylar_p0058` | yok | ~5 | 2 | B |  |
| 9 | 1444-06-12 | Edirne-Segedin Antlaşması | `olaylar_ek` | VAR (edirne-segedin-1444, 1 bölge) | ~10 | 3 | B | Edirne-Segedin 1444; metin tartışmalı (Dlugosz/Callimachus) |
| 10 | 1479-01-25 | İstanbul Antlaşması — Arnavutluk ve İşkodra | `olaylar_ek` | VAR (istanbul-iskodra-1479, 1 bölge) | ~7 | 4 | B | Venedik Senatosu kayıtları (Predelli) |
| 11 | 1491-05-01 | Osmanlı-Memlük barışı — Tunus arabuluculuğu | `olaylar_ek5` | yok | ~5 | 2 | C |  |
| 12 | 1502-12-14 | Osmanlı-Venedik Savaşı'nın sona ermesi ve barış | `olaylar_ek5` | VAR (venedik-1502, 1 bölge) | ~10 | 3 | B |  |
| 13 | 1533-01-01 | İstanbul Antlaşması — Habsburglarla ilk barış | `olaylar_ek5` | yok | ~8 | 3 | B | Hurewitz / Noradounghian |
| 14 | 1547-06-18 | İstanbul Antlaşması — Habsburglarla beş yıllık barış | `olaylar_ek5` | yok | ~8 | 3 | B |  |
| 15 | 1553-02-01 | Osmanlı-Fransız ittifakı — Fransız donanmasının Osmanlı emrine girmesi | `olaylar_ek5` | yok | ~5 | 2 | C | Fransız ittifakı (1553) metin tartışmalı |
| 16 | 1555-05-29 | Amasya Antlaşması | `olaylar` | VAR (amasya-1555, 1 bölge) | ~10 | 4 | B | Amasya 1555; Ferîdun Bey Münşeât |
| 17 | 1562-05-05 | Habsburglarla barışın yenilenmesi — Erdel ve Temeşvar savaşının sonu | `olaylar_h7_asama` | yok | ~6 | 2 | B |  |
| 18 | 1568-02-17 | Edirne Antlaşması — Habsburglarla savaş durumunun sonu | `olaylar_h7_asama` | yok | ~13 | 4 | B |  |
| 19 | 1573-03-07 | Venedik'le İstanbul Antlaşması — Kıbrıs'ın tanınması | `olaylar_ek5` | yok | ~10 | 4 | B | Kıbrıs'ın terki |
| 20 | 1590-03-21 | Ferhad Paşa Antlaşması — doğuda en geniş sınırlar | `olaylar_ek2` | VAR (ferhad-pasa-1590, 1 bölge) | ~6 | 4 | C |  |
| 21 | 1606-11-11 | Zitvatorok Antlaşması | `olaylar` | VAR (zitvatorok-1606, 2 bölge) | ~11-20 | 4 | A | Zsitvatorok 1606: Latince/Macar metin açık |
| 22 | 1612-07-06 | Hollanda'ya ilk ahidnâme verilmesi | `olaylar_ek5` | yok | ~20 | 3 | B | Hollanda kapitülasyonları |
| 23 | 1612-11-20 | Nasuh Paşa Antlaşması | `olaylar_ek2` | VAR (nasuh-pasa-1612, 1 bölge) | ~6 | 4 | C |  |
| 24 | 1618-09-26 | Serav Antlaşması — İran'la barışın yenilenmesi | `olaylar_ek5` | yok | ~5 | 3 | C |  |
| 25 | 1621-10-09 | Hotin Seferi ve Hotin Antlaşması | `olaylar_ek5` | yok | ~4 | 3 | B |  |
| 26 | 1639-05-17 | Kasr-ı Şirin Antlaşması | `olaylar` | yok | ~10 | 5 | B | Kasr-ı Şirin / Zuhab 1639; Irak/Revan kalıcı sınır |
| 27 | 1664-08-09 | Vasvar Antlaşması | `olaylar_ek5` | VAR (vasvar-1664, 1 bölge) | ~10 | 3 | B | Vasvar 1664 (Latince metin) |
| 28 | 1672-10-18 | Bucaş Antlaşması — en geniş sınırlar | `olaylar` | VAR (bucas-1672, 1 bölge) | ~7 | 4 | B |  |
| 29 | 1681-02-13 | Bahçesaray Antlaşması — Rusya ile ilk resmî barış | `olaylar_ek5` | yok | ~12 | 3 | B |  |
| 30 | 1699-01-26 | Karlofça Antlaşması — ilk büyük toprak kaybı | `olaylar` | VAR (karlofca-1699, 5 bölge) | ~20 | 5 | A | Karlofça: Hurewitz, Düstur; haritası VAR |
| 31 | 1700-07-14 | İstanbul Antlaşması — Azak'ın Rusya'ya bırakılması | `olaylar_ek5` | VAR (istanbul-1700, 1 bölge) | ~11 | 4 | B | Azak devri |
| 32 | 1711-07-21 | Prut Antlaşması — Azak ve Taygan'ın geri alınması | `olaylar_ek5` | VAR (prut-1711, 2 bölge) | ~12 | 4 | A | Prut 1711: Hurewitz |
| 33 | 1713-06-24 | Rusya ile Edirne Antlaşması | `olaylar_ek5` | VAR (edirne-1713, 1 bölge) | ~11 | 3 | B |  |
| 34 | 1718-07-21 | Pasarofça Antlaşması — Mora kazanıldı, Belgrad ve Banat kaybedildi | `olaylar_ek5` | VAR (pasarofca-1718, 3 bölge) | ~21 | 5 | A | Pasarofça: Hurewitz, Düstur |
| 35 | 1724-06-24 | İstanbul Mukāsemenâmesi — İran'ın Rusya ile paylaşılması | `olaylar_ek5` | yok | ~14 | 4 | B |  |
| 36 | 1727-10-04 | Hemedan Antlaşması — Batı İran'ın Osmanlı'ya katılması | `olaylar_ek5` | VAR (hemedan-1727, 1 bölge) | ~? | 4 | C |  |
| 37 | 1732-01-08 | Ahmed Paşa Antlaşması — Batı İran'ın büyük bölümünün iadesi | `olaylar_ek5` | VAR (ahmed-pasa-1732, 2 bölge) | ~? | 4 | C |  |
| 38 | 1736-09-01 | İstanbul Antlaşması — Güney Kafkasya'nın İran'a terki | `olaylar_ek5` | VAR (istanbul-1736, 1 bölge) | ~? | 4 | C |  |
| 39 | 1739-09-18 | Belgrad Antlaşması — Belgrad, Semendire ve kuzey Sırbistan'ın geri alınışı | `olaylar` | VAR (belgrad-1739, 2 bölge) | ~20 | 5 | A | Belgrad 1739: Hurewitz |
| 40 | 1739-10-03 | Niş Antlaşması — Rusya ile barış, Azak'ın tarafsızlaştırılması ve Kırım akınla | `olaylar_ek5` | VAR (nis-1739, 1 bölge) | ~14 | 4 | B |  |
| 41 | 1739-12-12 | Rusya ile barışın ahidnamesi: Kabartay tarafsız, Azak yıkılacak | `olaylar_p0917kosu13` | yok | ~? | 3 | B |  |
| 42 | 1746-09-04 | Kerden Antlaşması — Osmanlı-İran savaşlarının sonu | `olaylar_ek5` | yok | ~7 | 3 | B | Kerden 1746 |
| 43 | 1774-07-21 | Küçük Kaynarca Antlaşması | `olaylar` | VAR (kucuk-kaynarca-1774, 2 bölge) | 28 + 2 gizli | 5 | A | Küçük Kaynarca: Wikisource, Hurewitz, Düstur |
| 44 | 1779-03-10 | Aynalıkavak Tenkihnâmesi — Kırım üzerine geçici uzlaşma | `olaylar_ek5` | yok | ~10 | 3 | A |  |
| 45 | 1790-01-31 | Osmanlı-Prusya İttifakı | `olaylar_ek5` | yok | ~8 | 3 | B |  |
| 46 | 1790-09-18 | Yergöğü Mütarekesi — Avusturya cephesinde silahların susması | `olaylar_p0068b` | yok | ~3 | 2 | C | mütareke |
| 47 | 1791-08-04 | Ziştovi Antlaşması — Avusturya cephesinin kapanması | `olaylar_ek5` | VAR (zistovi-1791, 2 bölge) | 14 | 4 | A | Ziştovi: Hurewitz |
| 48 | 1791-08-11 | Kalas (Galaç) Mütarekesi — Rusya ile sekiz aylık ateşkes | `olaylar_p0068b` | yok | 1 | 2 | C | mütareke |
| 49 | 1792-01-10 | Yaş Antlaşması — Kırım'ın kesin kaybı ve Turla sınırı | `olaylar_ek5` | VAR (yas-1792, 2 bölge) | 15 | 4 | A | Yaş 1792: Hurewitz |
| 50 | 1800-03-21 | Yedi Ada Cumhuriyeti kuruldu — Rus-Osmanlı himayesinde İyon adaları | `olaylar_ek17` | yok | ~11 | 3 | B | 1800 İstanbul sözleşmesi (Yedi Ada) |
| 51 | 1802-06-25 | Paris Antlaşması — Fransa ile barışın yeniden kurulması | `olaylar_ek5` | yok | ~7 | 2 | B |  |
| 52 | 1809-01-05 | Kal'a-i Sultâniyye Antlaşması — İngiltere ile barış ve Boğazlar kaidesi | `olaylar_ek5` | yok | ~11 | 3 | B | Çanakkale (Kal'a-i Sultâniyye) 1809 |
| 53 | 1812-05-28 | Bükreş Antlaşması — Besarabya'nın kaybı | `olaylar_ek` | VAR (bukres-1812, 1 bölge) | 16 | 5 | A | Bükreş 1812: Hurewitz |
| 54 | 1823-07-28 | Erzurum Antlaşması — İran kuvvetlerinin altmış günde çekilmesi | `olaylar_0073_iran_yanya` | yok | ~6 | 3 | B |  |
| 55 | 1826-10-07 | Akkirman Antlaşması — Sırbistan ve prensliklere tavizler | `olaylar_ek5` | yok | ~8 | 4 | A | Akkirman |
| 56 | 1829-09-14 | Edirne Antlaşması | `olaylar_ek` | VAR (edirne-1829, 1 bölge) | 16 | 5 | A | Edirne 1829: Hurewitz, Düstur |
| 57 | 1830-02-03 | Londra Protokolü — Yunanistan'ın bağımsızlığının tanınması | `olaylar_ek8` | VAR (londra-1830, 1 bölge) | ~3 | 5 | A | Londra Protokolü 1830; Osmanlı sonradan kabul |
| 58 | 1830-05-07 | Amerika Birleşik Devletleri ile ilk antlaşma | `olaylar_ek5` | yok | ~8 | 3 | A | ABD-Osmanlı 1830 |
| 59 | 1833-05-06 | Kütahya Sözleşmesi — Suriye ve Adana Kavalalı'ya | `olaylar_ek4` | VAR (kutahya-1833, 1 bölge) | ~? | 4 | B |  |
| 60 | 1833-07-08 | Hünkâr İskelesi Antlaşması | `olaylar_ek4` | yok | 8 + gizli | 4 | A |  |
| 61 | 1840-07-15 | Londra Antlaşması: dört devlet Osmanlı'nın yanında | `olaylar_ek4` | yok | ~4 | 4 | A |  |
| 62 | 1840-11-27 | İskenderiye Konvansiyonu | `olaylar_ek4` | yok | ~3 | 3 | B |  |
| 63 | 1841-07-13 | Londra Boğazlar Sözleşmesi | `olaylar_ek4` | yok | ~4 | 3 | A |  |
| 64 | 1847-05-31 | II. Erzurum Antlaşması — Şattülarap sınırı ve Hûzistan kıyısının bırakılması | `olaylar_ok106` | VAR (erzurum-1847, 2 bölge) | ~10 | 3 | B | II. Erzurum 1847 |
| 65 | 1849-05-01 | Baltalimanı Sözleşmesi: Eflak ve Boğdan'da ortak Osmanlı-Rus himayesi | `olaylar_ek5` | yok | ~4 | 3 | B |  |
| 66 | 1854-03-12 | İstanbul'da İngiltere ve Fransa ile ittifak antlaşması | `olaylar_ek5` | yok | ~6 | 3 | B |  |
| 67 | 1856-03-30 | Paris Antlaşması: Kırım Savaşı'nın sonu ve Osmanlı'nın Avrupa devletler sistem | `olaylar_ek5` | VAR (paris-1856, 2 bölge) | 34 | 5 | A | Paris 1856: Wikisource, avalon.law.yale |
| 68 | 1878-01-31 | Edirne Mütarekesi: 93 Harbi'nde silahların susması | `olaylar_ek5` | yok | ~3 | 3 | B |  |
| 69 | 1878-03-03 | Ayastefanos Antlaşması: Büyük Bulgaristan tasarısı | `olaylar_ek5` | VAR (ayastefanos-1878, 2 bölge) | 29 | 5 | A | Ayastefanos: avalon.law.yale / Wikisource |
| 70 | 1878-07-13 | Berlin Antlaşması | `olaylar` | VAR (berlin-1878, 6 bölge) | 64 | 5 | A | Berlin 1878: avalon.law.yale / Wikisource |
| 71 | 1886-01-01 | Fransız-Osmanlı düzenlemesi — Tunus ile Trablusgarp arasındaki sınırın kıyı ke | `olaylar_p0917taraf` | yok | 1-2 | 2 | C |  |
| 72 | 1892-01-01 | İkinci Fransız-Osmanlı düzenlemesi — Tunus-Trablusgarp sınırı Gadames'e kadar  | `olaylar_p0917taraf` | yok | 1-2 | 2 | C |  |
| 73 | 1906-10-01 | Refah Anlaşması — Osmanlı ile Mısır Hidivliği arasındaki Refah-Taba hattı tari | `olaylar_p0917taraf` | yok | ~2 | 3 | B | Refah/Taba sınırı |
| 74 | 1909-04-19 | İstanbul'da Türk-Bulgar Protokolü — Osmanlı Bulgaristan'ın bağımsızlığını tanı | `olaylar_p0917taraf` | yok | ~5 | 3 | B |  |
| 75 | 1910-05-19 | Trablus Sözleşmesi — Tunus ile Trablusgarp vilayeti arasındaki sınır Ras Ecdir | `olaylar_p0917taraf` | yok | ~2 | 2 | C |  |
| 76 | 1913-07-29 | Katar'dan Osmanlı feragati — Londra Sözleşmesi | `olaylar_p0036` | yok | ~11 | 3 | B | Anglo-Osmanlı Sözleşmesi 1913 |
| 77 | 1913-09-29 | İstanbul Antlaşması: Bulgaristan ile barış ve Edirne'nin tescili | `olaylar_ek5` | VAR (istanbul-bulgaristan-1913, 2 bölge) | ~9 | 3 | A |  |
| 78 | 1913-11-14 | Atina Antlaşması: Yunanistan ile barış ve Selanik-Yanya'nın devri | `olaylar_ek5` | VAR (atina-1913, 1 bölge) | ~14 | 4 | B |  |
| 79 | 1913-11-17 | İstanbul Protokolü — Türk-İran sınırının tahdidi | `olaylar_p0917taraf` | yok | ~5 | 3 | B |  |
| 80 | 1914-08-02 | İstanbul'da Osmanlı-Alman gizli ittifak antlaşmasının imzalanması | `olaylar_ek5` | yok | ~9 | 4 | A | Alman-Osmanlı ittifakı 1914 |
| 81 | 1915-09-06 | Sofya Sözleşmesi — Osmanlı-Bulgar sınırının düzeltilmesi | `olaylar_p0917taraf` | yok | ~4 | 3 | B |  |
| 82 | 1918-03-03 | Brest-Litovsk Antlaşması: Kars, Ardahan ve Batum'un geri alınması | `olaylar_ek5` | VAR (brest-litovsk-1918, 1 bölge) | 14 + ek | 4 | A | Brest-Litovsk: Wikisource |
| 83 | 1918-10-30 | Mondros Mütarekesi | `olaylar` | yok | 25 | 5 | A | Mondros: Wikisource |
| 84 | 1920-08-10 | Sevr Antlaşması — imparatorluğun paylaşım metni | `olaylar_ek8` | VAR (sevr-1920, 3 bölge) | 433 | 5 | A | ZATEN OYNATICI VAR (178 adım) |
| 85 | 1920-12-03 | Gümrü Antlaşması: TBMM hükümetinin ilk uluslararası antlaşması | `olaylar_ek5` | VAR (gumru-1920, 1 bölge) | ~18 | 4 | B | Gümrü 1920 |
| 86 | 1921-03-16 | Moskova Antlaşması — TBMM ile Sovyet Rusya doğu sınırını belirledi | `olaylar_p0049` | VAR (moskova-1921, 2 bölge) | 16 | 4 | A | Moskova 1921 |
| 87 | 1921-10-13 | Kars Antlaşması | `olaylar_ek` | VAR (kars-1921, 2 bölge) | 20 | 4 | A | Kars 1921 |
| 88 | 1921-10-20 | Ankara İtilâfnâmesi: Fransa ile barış ve güney cephesinin kapanması | `olaylar_ek5` | VAR (ankara-itilafnamesi-1921, 1 bölge) | ~12 | 4 | A | Ankara İtilâfnâmesi |
| 89 | 1922-10-11 | Mudanya Mütarekesi: İstanbul ve Boğazlar'ın savaşsız devri | `olaylar_ek5` | VAR (mudanya-1922, 1 bölge) | ~15 | 4 | A | Mudanya |
| 90 | 1923-07-24 | Lozan Antlaşması | `olaylar` | VAR (lozan-1923, 5 bölge) | 143 + 16 ek | 5 | A | ZATEN OYNATICI VAR (159 adım) |

## 2. Öncelik önerisi (oynatıcı genelleştirmesi için)

Sıra: önem ≥4 **ve** kaynak A (hemen yapılabilir, açık metin var), sonra önem ≥4 + B.

**Hemen (önem≥4 + A):** 1606 Zitvatorok Antlaşması; 1699 Karlofça Antlaşması; 1711 Prut Antlaşması; 1718 Pasarofça Antlaşması; 1739 Belgrad Antlaşması; 1774 Küçük Kaynarca Antlaşması; 1791 Ziştovi Antlaşması; 1792 Yaş Antlaşması; 1812 Bükreş Antlaşması; 1826 Akkirman Antlaşması; 1829 Edirne Antlaşması; 1830 Londra Protokolü; 1833 Hünkâr İskelesi Antlaşması; 1840 Londra Antlaşması; 1856 Paris Antlaşması; 1878 Ayastefanos Antlaşması; 1878 Berlin Antlaşması; 1914 İstanbul'da Osmanlı-Alman gizl; 1918 Brest-Litovsk Antlaşması; 1918 Mondros Mütarekesi; 1921 Moskova Antlaşması; 1921 Kars Antlaşması; 1921 Ankara İtilâfnâmesi; 1922 Mudanya Mütarekesi.

**Sonra (önem≥4 + B, metin ikincil kaynaktan derlenir):** 1479 İstanbul Antlaşması; 1555 Amasya Antlaşması; 1568 Edirne Antlaşması; 1573 Venedik'le İstanbul Antlaşması; 1639 Kasr-ı Şirin Antlaşması; 1672 Bucaş Antlaşması; 1700 İstanbul Antlaşması; 1724 İstanbul Mukāsemenâmesi; 1739 Niş Antlaşması; 1833 Kütahya Sözleşmesi; 1913 Atina Antlaşması; 1920 Gümrü Antlaşması.

**Oynatıcıya değmez (önem≤2 / kaynak C / mütareke tek madde):** tek maddelik ya da tam metni olmayan düzenlemeler tabloda C ve önem 2; bunlar oynatıcı yerine kronoloji maddesinin düz metniyle kalmalı.

## 3. KASA listesinde olup tabloda OLMAYAN / ayrı satır olmayanlar

- **Balta Limanı 1838-08-16** — kronolojide var (`kronoloji_cok_ingiltere.js`) ama `k:"antlasma"` DEĞİL; ekleme adayı (önem 4: ticaret/kapitülasyon, ~ 4 md + tarife).
- **İstanbul 1832-07-21 (Arta-Volos sınırı)** — `kronoloji_balkan.js`, `k` yok; ekleme adayı (önem 4).
- **Venedik 1540-10-02** — `kronoloji_naksa_dukaligi.js`, `k` yok; ekleme adayı (önem 3, Naksa dükalığı).
- **Fransız kapitülasyonları 1536-02-18** — `kronoloji_fransa.js`, `k` yok; ekleme adayı (önem 3, metin tartışmalı).
- **İngiliz ahidnâmesi 1580**, **Hollanda ahidnâmesi 1612** (satır 79 tabloda), **İsveç ahidnâmesi 1737** (`kronoloji_isvec.js`), **Zuravno 1676** (`kronoloji_lehistan.js`) — `k:"antlasma"` dışında ya da yalnız tür etiketiyle (siyaset/diplomasi); ekleme adayları.
- **Londra 1827 (Üçlü İttifak antlaşması)** — Osmanlı taraf DEĞİL (reddetti); o_ek4'te `k:diplomasi`. Dışarıda.
- **1878-06-04 Kıbrıs Sözleşmesi, 1897 İstanbul barışı (Yunan savaşı), 1913-05-30 Londra Antlaşması (I. Balkan Savaşı sonu), 1569 Rusya, 1800-1802 Fransa mütarekeleri** — başlık taramasında (Osmanlı/İstanbul sözcüğüyle) HİÇ bulunamadı; kronolojide madde yoksa önce kronoloji maddesi yazılmalı (Değişmez 2 ve gün kuralı). KASA'nın "Londra/Bükreş 1913" kısmından Bükreş 1913-08-10 (Bulgaristan-Sırbistan-Romanya-Yunanistan; Osmanlı TARAF DEĞİL) `o_2s_0920`'de var; Londra 1913-05-30 YOK.
- **Hünkâr İskelesi / Kütahya** — satır 168/169 tabloda. **Kerden 1746, Hemedan 1727** — C (metin zor).

## 4. Dışlananlar (k:"antlasma" ama Osmanlı taraf değil)

222 maddenin kalanı: Sâsânî/Roma/Abbâsî/Gazneli/Selçuklu/Hârizmşah (1299 öncesi), Hollanda/Polonya/Baltık/İsveç/İspanya/Fransa/Prusya/Avusturya antlaşmaları, Hindistan ve Kuzey Amerika antlaşmaları, I. Dünya Savaşı sonrası Trianon/Neuilly/Versailles/Saint-Germain (Osmanlı değil), Zweibund/Üç İmparator Ligi vb. **Yan olay satırları** (Megrelya 1555-05-29, Kamaniçe teslimi 1699-09-22, Yaş tasdiknâmeleri 1792-02-10, Bükreş-Faş 1812-12-19, Sened-i İttifak 1808 [iç pakt]) ana antlaşmaya bağlı ve oynatıcıda ayrı adım olmalı, ayrı kayıt olarak değil. **Lozan–Sevr farkları** (1923-07-24) antlaşma değil, karşılaştırma maddesi.

## 5. Teknik not (EMRELİC için)

- Oynatıcı eşleşmesi: `kronoloji b` alanı kayıt `ad`ını içermeli ve tarih ±60 gün (`antlasma_oynatici.js: eslesen`). Aynı antlaşmanın birden çok maddesi (Gelibolu 1403 ×3; Karlofça ×6 farklı dosyada; Edirne 1829 ×6) AYNI kayda bağlanır; madde başlıklarında `ad` geçmeyen maddede düğme çıkmaz.
- "Haritada gör" yalnız 70 kayıtta var ve bunların büyük kısmı Osmanlı dışı (`antlasma_haritalari.js`); Osmanlı satırlarından sütun 5'e bakın: VAR olan kayıtlar oynatıcıya "ÖNCE/SONRA" için doğrudan geometri sağlayabilir (`bolgeler[].sinir_id`).
- Veri üretimi: `antlasma_madde_<ad>.js` biçimi (`window.ANTLASMA_MADDELERI.push({id,ad,t,kadraj,kaynak,yerler,adimlar})`); Lozan/Sevr örnek. Madde metni kendi cümlemizle özetlenir (kopya yok), her adımın `kaynak`ı.
- Önerilen ilk dalga (açık metin, yüksek önem, harita VAR olanlar önde): Karlofça 1699, Pasarofça 1718, Belgrad 1739, Küçük Kaynarca 1774, Ziştovi 1791, Yaş 1792, Bükreş 1812, Edirne 1829, Paris 1856, Ayastefanos 1878, Berlin 1878, Mondros 1918.
