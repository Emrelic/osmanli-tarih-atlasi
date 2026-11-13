# ANTLAŞMA OYNATICI — DURUM VE İŞ LİSTESİ (13 Kasım 2026)

Koordinatör: ANTLAŞMA-1113 oturumu. Girdi: `denetim/ANTLASMA-ENVANTER-1113.md` (LAB, dal `lab-1113-antlasma-envanter`, 88f9630cf).
KAPSAM (Emre, KASA'dan): dört ayak — (1) araştırma, (2) haritaya uygulama (ÖNCE/SONRA, `antlasma_haritalari.js`, odak/kadraj; petek motoru ve tuz dosyalarına dokunma), (3) kronolojiyi düzenleme (gün/kaynak/ic_not/Değişmez 2, mükerrer tek madde), (4) mikro oynatıcı ve maddeleri ayarlama.

## 1. "Lozan standardı"
- Dosya `data/antlasma_madde_<ad>.js`; sözleşme `js/antlasma_oynatici.js` başlığındaki gerçek şema:
  `window.ANTLASMA_MADDELERI.push({id, ad, t:"YYYY-MM-DD", kadraj:[bati,guney,dogu,kuzey], kaynak, yerler:{"Ad":[lon,lat]}, adimlar:[{no, bolum, ozet, yer:[..], konu, kaynak?}]})`. (`bolge_taraf`/`odak` alanları mevcut şemada yok; ÖNCE/SONRA EMRELİC'in genelleme işi, geriye uyumlu eklenir.)
- Eşleşme: kronoloji maddesinin `b` alanı kayıt `ad`ını içerir, `t` ±60 gün.
- Özet ham metinden KENDİ cümlemizle; kaynak sırası TDV → İSAM/TTK/DergiPark → yabancı akademik → birincil neşir. Vikipedi tek dayanak olamaz. Uydurma yok; okunamayan "ölçülmedi"; doğrulanamayan "⚠ DOĞRULANMADI"; çelişkide hakemli karar.
- Yeni `data/*.js` için `index.html`e `<script>` satırı; `denetle`/`paketle`/push yalnız KASA'da, push_kapisi ile.
- **Yeni isteğe bağlı alanlar** (EMRELİC tasarımı: `denetim/ANTLASMA-OYNATICI-TASARIM-1113.md`, dal `emrelic-1113-antlasma-tasarim` bdc142d59; kod dalı `emrelic-1113-antlasma-oynatici`; hepsi geriye uyumlu):
  - **Veri yazım kuralı (LAB/UMIT brifi):** her antlaşma kaydına `anahtarlar:[…]` yaz — kronoloji `b` başlığında geçen ad biçimleri (örn. "Küçük Kaynarca","Kaynarca"; parantezli/ekli adlar: "San Stefano"). Tasarım ölçümü: 12 antlaşmada 59 doğru eşleşme, 5 kaçan (ad biçimi) → anahtarla 64/64. Gerekirse `pencere_gun` (varsayılan 60).
  - Savaş sürerken imzalanan antlaşmada ÖNCE (`t−1`) "savaş öncesi" değildir; "Savaştan önce" için `onceki_t` yaz (yoksa o düğme gizli). `sonra_t` yalnız antlaşma günü ≠ yürürlük günüyse; `onceki_yok:true` ÖNCE anahtarını gizler.
  - Adımda `etki:[{yer, once, sonra, not}]` YALNIZ haritadan türetilemeyen durumda yaz (sahip kimlikleri `devletler.js` `id`si); sahiplik farkı normalde haritadan türetilir, yazma.
  - Yeni kronoloji maddesinde açık bağ: `antlasma_id:"<kayıt id>"` (ad/gün kuralını atlar).
  - Kayıttan sonra EMRELİC'in `arac/antlasma_dogrula.py` doğrulaması (şema, yer adı, eşleşme) koşar; kapıdan önce hatasız olmalı.

## 2. Sıralı iş listesi (envanterin sayı/önem/kaynak sütunları "kaba tahmin"; kaynak sayfası açılıp teyit edilir)
**İlk dalga (önem≥4 + kaynak A):**
1. Karlofça 1699-01-26 (PİLOT, dört ayakla)
2. Pasarofça 1718-07-21 · 3. Belgrad 1739-09-18 · 4. Küçük Kaynarca 1774-07-21 · 5. Ziştovi 1791-08-04 · 6. Yaş 1792-01-10
7. Bükreş 1812-05-28 · 8. Edirne 1829-09-14 · 9. Paris 1856-03-30 · 10. Ayastefanos 1878-03-03 · 11. Berlin 1878-07-13 · 12. Mondros 1918-10-30

**İkinci dalga (A):** Zitvatorok 1606, Prut 1711, Akkirman 1826, Londra Protokolü 1830, Hünkâr İskelesi 1833, Londra 1840, Alman ittifakı 1914, Brest-Litovsk 1918, Moskova/Kars/Ankara İtilâfnâmesi 1921, Mudanya 1922.

**Üçüncü dalga (önem≥4 + B):** İstanbul 1479, Amasya 1555, Edirne 1568, Venedik 1573, Kasr-ı Şirin 1639, Bucaş 1672, İstanbul 1700, İstanbul 1724, Niş 1739, Kütahya 1833, Atina 1913, Gümrü 1920.

Oynatıcıya DEĞMEZ: tek maddelik/mütareke/kaynak-C düzenlemeler (düz kronoloji metni kalır). Londra 1827 ve Bükreş 1913: Osmanlı taraf değil, dışarıda. Tamam: Lozan, Sevr.

## 2b. EMRE KARARI (13 Kasım 2026, bu sıra yukarıdaki dalga listesinin YERİNE geçer): Karlofça da yapılır; Osmanlı'nın TÜM antlaşmaları SONDAN BAŞA doğru
Her antlaşmanın kronoloji maddesinde oynatıcı düğmesi + madde madde + ÖNCE/SONRA. Envanter satır numarasıyla (denetim/ANTLASMA-ENVANTER-1113.md) tersten; Lozan (90) ve Sevr (84) tamam, Karlofça (30) pilot olarak bitti (kodu E0 bekler):
**Dalga A (1923→1900):** 89 Mudanya 1922-10-11 · 88 Ankara İtilâfnâmesi 1921-10-20 · 87 Kars 1921-10-13 · 86 Moskova 1921-03-16 · 85 Gümrü 1920-12-03 · 83 Mondros 1918-10-30 · 82 Brest-Litovsk 1918-03-03 · 81 Sofya 1915 · 80 Alman ittifakı 1914-08-02 · 79 İstanbul Protokolü 1913-11-17 · 78 Atina 1913-11-14 · 77 İstanbul-Bulgaristan 1913-09-29 · 76 Katar/Londra 1913-07-29 · 75 Trablus 1910 · 74 Türk-Bulgar Protokolü 1909 · 73 Refah 1906
**Dalga B (1900→1800):** 72, 71 Fransız-Osmanlı düzenlemeleri 1892/1886 · 70 Berlin 1878-07-13 · 69 Ayastefanos 1878-03-03 · 68 Edirne Mütarekesi 1878-01-31 · 67 Paris 1856 · 66 İttifak 1854 · 65 Baltalimanı 1849 · 64 II. Erzurum 1847 · 63 Londra Boğazlar 1841 · 62 İskenderiye 1840 · 61 Londra 1840 · 60 Hünkâr İskelesi 1833 · 59 Kütahya 1833 · 58 ABD 1830 · 57 Londra Protokolü 1830 · 56 Edirne 1829 · 55 Akkirman 1826 · 54 Erzurum 1823 · 53 Bükreş 1812 · 52 Kal'a-i Sultâniyye 1809 · 51 Paris 1802 · 50 Yedi Ada 1800
**Dalga C (1800→1600):** 49 Yaş 1792 · 48 Kalas · 47 Ziştovi 1791 · 46 Yergöğü · 45 Prusya 1790 · 44 Aynalıkavak 1779 · 43 Küçük Kaynarca 1774 · 42 Kerden 1746 · 41, 40 Niş 1739 · 39 Belgrad 1739 · 38 İstanbul 1736 · 37 Ahmed Paşa 1732 · 36 Hemedan 1727 · 35 İstanbul 1724 · 34 Pasarofça 1718 · 33 Edirne 1713 · 32 Prut 1711 · 31 İstanbul 1700 · 30 KARLOFÇA 1699 (bitti, kod bekler) · 29 Bahçesaray 1681 · 28 Bucaş 1672 · 27 Vasvar 1664 · 26 Kasr-ı Şirin 1639 · 25 Hotin 1621 · 24 Serav 1618 · 23 Nasuh Paşa 1612 · 22 Hollanda 1612 · 21 Zitvatorok 1606
**Dalga D (1600→1300):** 20 Ferhad Paşa 1590 · 19 Venedik 1573 · 18 Edirne 1568 · 17 1562 · 16 Amasya 1555 · 15 Fransız ittifakı 1553 · 14, 13 İstanbul 1547/1533 · 12 Venedik 1502 · 11 Memlük 1491 · 10 İstanbul 1479 · 9 Edirne-Segedin 1444 · 8 1424 · 7 Konya 1415 · 6-4 Gelibolu 1403 (tek kayıt) · 3 Ceneviz 1387 · 2 Ceneviz 1352 · 1 Bizans 1333; envanterde olmayan ek adaylar: Balta Limanı 1838 (B dalgasına), Arta-Volos 1832, Venedik 1540, Fransız 1536, İngiliz 1580, İsveç 1737, Zuravno 1676 + (b) yeni maddeler (Kıbrıs 1878, 1897, Londra 1913-05-30, Rusya 1569).
Kural: tek maddelik/metni olmayan (kaynak C) antlaşmalar da kayıt alır ama 1-3 adımlı ve "⚠ metin ulaşılamadı" etiketli; uydurma madde yok. Çok taraflılar `taraf` alanı main'e girene kadar (Berlin, Paris, Pasarofça, Belgrad) iki parça/iki kayıt olarak ya da sıraya göre ertelenir; bu yüzden ilk üretim sırası Mudanya→Ankara→Kars→Moskova→Gümrü→Mondros→Brest-Litovsk (tümü ikili/tek taraf) olur.

## 3. Parti durumu
| Parti | İş | Kim | Dal | Durum |
|---|---|---|---|---|
| L0 | Envanter | LAB | lab-1113-antlasma-envanter | TAMAM |
| P0 | Karlofça pilot | LAB (alt ajan 1) | lab-1113-karlofca | başladı; UMIT'in `umit-1113-antlasma-araclar` dalı araçları kullanılıyor |
| E0 | Oynatıcı genelleme: ÖNCE/SONRA, otomatik düğme, doğrulama betiği | EMRELİC | — | bekliyor |
| U0 | Araçlar / seri veri yazımı | UMIT | umit-1113-antlasma-araclar | RAM bekliyor |
| H0 | Boşta kapasite | HAVVA | — | ≥19:00 adayı |
| K0 | Kronoloji: (a) tür düzeltme | bu oturum | claude/antlasma-1113-temiz (2bb81ac66) | (a) TAMAM, kapıya bekliyor; (b) yeni maddeler Karlofça sonrası; (c) onaylı |
| P0 | Karlofça pilot veri | LAB | lab-1113-karlofca (ef560cedc) | TEMİZ VERİ HAZIR, tüketici kod (E0) bekliyor — aşağıda "Karlofça birleşik değerlendirme" |

## 3b. Karlofça pilotu — dört ayaklı birleşik değerlendirme (13 Kasım)
**Araştırma (iyi, açık borçlu):** 53 adım (Habsburg 20, Venedik 18, Lehistan 12, Rusya 2, çerçeve 1); ham metin 1732 İngilizce çeviri (archive.org OCR) + Lehistan Wikisource; 2 Rusya adımı ve OCR yer adı okunuşları "⚠ DOĞRULANMADI". Borç: ikinci bağımsız kaynak (Noradounghian/Hurewitz/Düstur/DergiPark) md numaraları ve Habsburg md.20 "25 yıl" için; TDV yalnız özet aracıyla görüldü. Ders: görev metnindeki "16 Cemâziyelevvel 1110" yanlış, imza 24 Receb 1110 = 26 Ocak 1699 (TDV + belge). Bu çelişki `ic_not`a yazılmalı.
**Harita:** `antlasma_haritalari.js` `karlofca-1699` kaydı (5 bölge) var; ÖNCE/SONRA farkı oradan ve harita tarihinden türetilecek (EMRELİC); `etki[]` yazılmadı, doğru. Risk: harita dönemi t−1'de değil, Karlofça ÖNCE kipi savaş sürerken kalır → `onceki_t:"1683-07-14"` (II. Viyana) "Savaştan önce" için doğru seçim. Rusya adımları ateşkes: Azak Rus elinde kalan yer olarak işaretli, bölge yok.
**Kronoloji (açık iş):** 1699-01-26 günü aynı olayı 9 ayrı dosyada anlatıyor (olaylar.js ANA madde "ilk büyük toprak kaybı"; kronoloji_habsburg, venedik, lehistan, macaristan, hollanda, ingiltere, cok_senkron_0930, devletler.js künye olayları). `anahtarlar:["Karlofça…"]` ile hepsinde düğme çıkar. ÖNERİ: düğme yalnız ana maddede (olaylar.js 1699-01-26) ya da açık `antlasma_id` ile işaretlenen tek maddede olsun, öteki sekizi düz kalsın (mükerrer düğme/panel çakışması); karar EMRELİC + Emre. Silme yok. 1698-11-13 "barış görüşmeleri" maddesi (olaylar_ek3) ±60 gün dışında (74 gün) — doğru, oynatıcı bağlamaz.
**Oynatıcı (açık iş):** (1) tüketici kod `anahtarlar`/`onceki_t`'yi tanımıyor (E0); (2) çok taraflı kayıtta `no` bölüm başına string ve başlık "md. Venedik 3" — oynatıcıya `taraf` alanı (Habsburg/Venedik/Lehistan/Rusya) ve başlıkta `bolum` kısa etiketi gerek; `uret_antlasma.js` (tek numara dizisi, tekrar `no` reddi) çok taraflıda kullanılamıyor → araç `taraf` başına numaralandırmayı desteklemeli (UMIT araçları).
**Seri için sıra güncellemesi:** İkili antlaşmalar önce (araç/oynatıcı bugünkü şemayla çalışır): Küçük Kaynarca 1774 → Edirne 1829 → Bükreş 1812 → Ziştovi 1791 → Yaş 1792 → Ayastefanos 1878 → Mondros 1918 (tek taraf). Çok taraflılar `taraf` alanı main'e girince: Pasarofça 1718 (Habsburg+Venedik), Belgrad 1739 (Habsburg+Rusya), Paris 1856, Berlin 1878. Her parti brifine: `anahtarlar`, `onceki_t`, çelişki beyanı, ikinci kaynak borcu, "OCR yer adı → ⚠".

## 4. Kronoloji ayağı planı (YAZILMADI, KASA onayı bekler)
Yeni dosya `data/olaylar_antlasma_1113.js` (`index.html`e `<script>` satırı; şema `VERI-YAPISI.md`ndan okunur, örnek `olaylar_ek5.js`). Her madde: gün, `k:"antlasma"`, `b` başlıkta antlaşma adı, kaynak sırası yukarıdaki; gün teyitsizse `YYYY-01-01` + beyan; hicrî/Jülyen kuralları CLAUDE.md'ye göre. Yeni maddeler sınır kırılması yaratmaz; Değişmez 2 etkilenmez.
- (a) Mevcut maddeye `k:"antlasma"` eklenir (yeni madde değil, mükerrer yaratma): Balta Limanı 1838-08-16 (`kronoloji_cok_ingiltere.js`), İstanbul 1832-07-21 Arta-Volos (`kronoloji_balkan.js`), Venedik 1540-10-02 (`kronoloji_naksa_dukaligi.js`), Fransız 1536 (`kronoloji_fransa.js`), İsveç 1737 (`kronoloji_isvec.js`), Zuravno 1676 (`kronoloji_lehistan.js`), İngiliz ahidnâmesi 1580. O dosyalar kilide girer.
- (b) Kronolojide hiç olmayan, yeni yazılacak: Kıbrıs Sözleşmesi 1878-06-04, 1897 İstanbul barışı, Londra 1913-05-30, Rusya 1569. Günler benim hafızamdandır, teyitsiz; kaynaktan doğrulanacak.
- (c) Mükerrer: Gelibolu 1403 ×3, Karlofça ×6, Edirne 1829 ×6 — madde silinmez; hepsi oynatıcıda tek kayda bağlanır (`b` içinde `ad`); birleştirme gerekçesi `ic_not`ta.

## 5. Koordinasyon
EMRELİC/UMIT/LAB/HAVVA başka makinelerde; bu oturum yalnız KASA 13 KASIM OTURUMU'na `SendMessage` atabilir, KASA iletir.
