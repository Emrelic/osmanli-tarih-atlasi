# 97 · Venedik Cumhuriyeti — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (ölçer: top100_olc.py; salt okuma)

## Özet
- Künye: 1 asıl (`venedik` 0697-01-01→1797-05-12; 100 yerleşim; en geniş 1522: 64) + 1 ayrı ardıl/hareket (`venedik-1848` San Marco Cumhuriyeti 1848-03-22→1849-08-22, kendi künyesi; olayları evrende `olaylar_napolyon_italya_1028.js:30,33`). `--ara venedik`: başka künye yok.
- Açık kırılma: **20** (15'i 1534 öncesi, 5'i 1534-1792); "yalnız otomatik maddeyle kapanan": 0; ⚠ harita anahtarı uyarısı yok. Toplam kırılma 87.
- Eksik/yanlış madde: 11 öneri; en ağırı künye-aşımı ve iki tarih çelişkisi.
- En ağır 3 bulgu: (1) **Künye aşımı:** `venedik` t=1797-05-12 iken yaklaşık 31 yerleşim `s:` döneminde `d:"venedik"` t=1797-10-17 (Campo Formio; +158 gün) — 19+10+1+1 dilim (`yerlesimler.js`, `yerlesimler_ek.js`, `yerlesimler_ek_adalar.js`, `yerlesimler_avrupa.js`); CLAUDE.md "künye aşımı" sınıflandırması yapılmamış. (2) **Kandiye günü iç çelişki:** `devletler.js:389` künye maddesi 1669-09-27 «Kandiye'nin düşüşüyle Girit kaybedildi» ↔ TDV `girit`: teslim anlaşması 6 Eylül 1669 (= `olaylar.js:112`, yerleşim s: 1669-09-06). (3) f 0697-01-01 TARTIŞMALI: Treccani DBI Dandolo geleneği 697 (706) · Cessi/Treccani 'Venezia' 726 · TDV "IX. yüzyıl" — üç kaynak üç farklı ölçü.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| venedik | Venedik Cumhuriyeti | 0697-01-01 | 1797-05-12 | var; 100 yerleşim; f tartışmalı (b); t aşımı (b/d) |
| venedik-1848 | San Marco (Venedik) Cumhuriyeti 1848 | 1848-03-22 | 1849-08-22 | var; ayrı (doğru); gün doğrulanmadı |
Eksik evre/parça: (i) 697/726-1000 arasında yalnız 1 yerleşim (Venedik) `venedik`; Bizans Venetia'sı (1000 öncesi Doge'un Bizans'a nominal bağlılığı) künyede beyanlı. (ii) Venedik'in "Stato da Mar" kolonileri (Girit 1204/1211-1669, Kıbrıs 1489-1571, Eğriboz 1390/1407?-1470, Mora kaleleri 1204/1209-1500/1540, Dalmaçya 1409-1797, Korfu 1386-1797, Adalar) yerleşim düzeyinde `eksklav:true` BEYANLI temsil edilmiş (ör. Hanya, Magosa, Girne, Resmo) — künye düzeyinde evre gerekmez. (iii) Venedik terrafermasının 1797 Mart-Mayıs'ta kopması (Bergamo/Brescia) yerleşim s:'de BEYANLI YAKLAŞIKLIK olarak duruyor.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f | 0697-01-01 (yıl hassasiyeti, beyanlı) | Treccani DBI 'Anafesto, Paoluccio' (WebFetch): Andrea Dandolo «697 (veya 706)», Giovanni Diacono 713-715 arası; «Roberto Cessi … serie dei dogi inizia con Orso … intorno al 726» | Treccani 'Venezia': «dopo la secessione del 726»; TDV `venedik`: «IX. yüzyıldan itibaren bağımsız bir şehir devleti» (künye s: kaynağı) | **TARTIŞMALI**: 697 geleneksel (Dandolo), kritik tarihçilik 726; TDV 9. yy. 2 bağımsız akademik kaynak (DBI + Treccani Venezia) 726'yı "ilk tarihî doge/ayrılma" olarak veriyor | `f:"0726-01-01"` + `ic_not_f` "697 gelenek (Dandolo), 726 eleştirel (Cessi), TDV IX. yy." — VEYA 0697 kalır, `ic_not` zorunlu (şu anda beyan yalnız `Venedik` yerleşimi s: kaynağında). Karar Emre'de |
| t | 1797-05-12 | TDV `venedik`: yalnız yıl «1797'de Napolyon tarafından işgaline kadar»; Treccani 'Venezia': yalnız yıl «Trattato di Campoformio (1797)» | arama: Univ. Verona IRIS PDF (Sanfermo 1998) «decreto del Maggior Consiglio 12 maggio 1797»; Villa Manin sayfası (akademik değil) | GÜN akademik 2 kaynakla TAM TEYİT EDİLEMEDİ (TDV/Treccani gün vermiyor; IRIS özeti kısmî). 12 Mayıs günü yaygın kabul (Büyük Konsey kararı). | gün kalır; ERİŞİLEMEYEN: Treccani DBI 'Manin, Ludovico'. KÜNYE AŞIMI sınıflandırması: Cumhuriyet 12 Mayıs'ta öldü ⇒ ① "devlet öldüyse dönemi KISALT": 31 s: dilimi 1797-05-12'ye çekilmeli, sonrası işgalciye (aşağıda) |
| Campo Formio | 1797-10-17 | `olaylar_ek16.js:134` | arama: başka kaynaklar 18 Ekim (imza/belge günü ayrımı) | 17 Ekim yaygın; Campo Formio'yu t yapmak YANLIŞ (Venedik'in kendi kararı yok) | — |
| 1797 Avusturya işgali | s:'de yok | hrcak.srce.hr (Hırvat akademik makale, arama özeti): Rukavina ~4000 asker ile Venedik topraklarını Haziran-Ağustos 1797'de Avusturya adına işgal etti | Wikipedia (yol gösterir): Istria/Dalmaçya Avusturya'ya Campo Formio'da; Venedik şehrine Avusturya girişi 18 Ocak 1798 (doğrulanmadı) | Istria/Dalmaçya/Boka için "Fransız himayesi" dilimi (`fransa-cumhuriyet` 1797-05-12→10-17) YANLIŞ olabilir: Avusturya askerî idaresi Haziran-Ağustos 1797'den | s: kaynağı beyanlı yaklaşıklık: bölge/şehir bazında giriş günü aranmalı (Zadar, Šibenik, Kotor, Pula, Rab…); bu turda gün bulunamadı → "çekilemedi" |

Venedik-yönlü iç tutarlılık kontrolleri (TDV esas):
| olay | atlas | TDV | hüküm |
|---|---|---|---|
| Kıbrıs devri (Cornaro feragati) | s: 1489-02-26; künye 1489-02-26 | TDV `kibris`: «26 Şubat 1489» | ✔ DOĞRU (Wikipedia 14 Mart = resmî satış; TDV esas). İkinci kaynak: Severis Vakfı (CVAR) 26 Şubat 1489 töreni |
| Magosa teslimi | s: 1571-08-01; künye 1571-08-01; `olaylar.js:96` t:"**1571-08**" | TDV `kibris`: «9 Rebîülevvel 979 (1 Ağustos 1571)» | ✔ gün DOĞRU; **`olaylar.js:96` t ay hassasiyetinde ("1571-08") ⇒ CLAUDE.md "gün yaz" ihlali, 1 Ağustos'a genişliyor ama kesinlik:"ay" kalıyor**; öneri t:"1571-08-01". Venedik tarafı: EBSCO — Bragadin şart istedi 1 Ağustos, resmî teslim töreni 5 Ağustos (ic_not) |
| Lefkoşa/Girne | s: Girne 1570-09-17; madde `olaylar_ek5.js:212` 1570-09-09 Lefkoşa | TDV: Lefkoşe «9 Eylül 1570»; Girne günü TDV'de YOK (yalnız Baf/Girne valilerinin boyun eğdiği) | Lefkoşa ✔; Girne 09-17 TDV'de doğrulanamadı |
| 1573 barış | `olaylar_ek5.js:214` 1573-03-07 | TDV: «7 Mart 1573 (3 Zilkade 980)», «Osmanlı-Venedik Antlaşması» | ✔ |
| Kandiye | s: 1669-09-06; `olaylar.js:112` 1669-09-06; **künye devletler.js:389: 1669-09-27** | TDV `girit`: «9 Rebîülâhir 1080'de (6 Eylül 1669) imzalanan on sekiz maddelik teslim anlaşması» | künye maddesi YANLIŞ GÜN (27 Eylül tahliye/anahtar teslimi; 19. yy. İngiliz kaynağı, ikinci akademik kaynak yok). `İsfakiye`/`Sitiye` s: 1669-09-27 d:venedik ⇒ başka kale tarihi, kaynağı okunmadı |
| Mora 1684 | künye t:"1684-01-01" «Mora'yı fethetti» | Kutsal İttifak 5 Mart 1684 (`olaylar_ek3.js:36`); Ayamavra 6 Ağustos 1684 (`olaylar_ek5.js:266`); Koron 11 Ağustos 1685 (`olaylar_ek5.js:267`); Modon 10 Temmuz 1686 (`olaylar_ek6.js:68`) | künye t gün uydurma (yıl-only 1684-01-01 + yanlış yıl: Mora seferi 1685'te başlar) ⇒ t:"1685-08-11" (Koron; kaynak = evren maddesi) ya da madde sil. Modon s: f 1686-06-01 ↔ evren 1686-07-10 (39 gün; ölçer yakalamadı çünkü 30 g) ⇒ s: kaynağını kontrol et |
| Karlofça | künye `1699-01-26`; `olaylar.js:120` 1699-01-26 | TDV `Karlofça/Ahmed III/Amcazâde`: «26 Ocak 1699» ✔; Ayamavra Venedik'e bırakıldı ✔ | ✔ DOĞRU |
| Mora geri alınışı | künye 1715-09-07 (KRONO-AKADEMİK-1006 kaynaklı) | TDV `mora`/Sarıkaya-Göger 2018 (künyede) | ✔ (iki aday beyanlı) |
| Ayamavra 1715 | s: venedik 1684-08-06→1715-09-07, sonra 1718-07-21 | TDV `ayamavra`: «Eylül 1715'te Osmanlı» ve «Passarowitz (1718) Venedik'e iade» | ✔ yıl/ay doğru; **gün 09-07 TDV'de YOK** (aynı gün Çuha Adası/Kythira maddesinin günü) — çıkarım olabilir, kaynak ARANACAK |
| Pasarofça | `olaylar_ek5.js:575` 1718-07-21 | TDV `pasarofca-antlasmasi`: «Pasarofça Antlaşması (21 Temmuz 1718)»; Venedik Butrinto, Preveze, Vonitsa'yı aldı, Çuka iade edildi | ✔ |

## c) Kronoloji
Var olanlar (Değişmez 2 evreni; hepsi `data/` altında):
- 697 ilk doge — `olaylar_ortacag_italya_dogu_avrupa.js:11` (kesinlik "yil"; kaynaksız, bkz. b f). 1171 Büyük Konsey `:108`; 1177-07-24 Venedik Barışı `:111`; 1192-06-21 Dandolo `:115`; 1204 Partitio (yıl) `:124`; 1202-11-15 Zadar — `kronoloji_sinir_once1281_geriye.js:263`.
- Osmanlı-Venedik: 1463-07-28 savaşın başlaması `olaylar_ek5.js:131`; 1470-07-12 Eğriboz `olaylar_ek.js:58`; 1479-01-25 İstanbul Antlaşması `olaylar_ek.js:59`; 1499-08-28 Zonchio `olaylar_ek5.js:146`; 1500-08-09 Modon/Koron `olaylar_ek.js:62`; 1502-12-14 barış `olaylar_ek5.js:148`; 1537-08-25 Korfu `olaylar_ek5.js:201`; 1540-11-01 Anabolu (barış 1540-10-02 maddesi YOK, ölçer AÇIK); 1570-09-09 Lefkoşa `:212`; 1573-03-07 `:214`; 1645-08-22 Girit seferi `:246`; 1669-09-06 Girit `olaylar.js:112`; 1684-03-05 Kutsal İttifak `olaylar_ek3.js:36`; 1699-01-26 Karlofça `olaylar.js:120`; 1714-12-08 savaş ilanı `olaylar_ek5.js:280`; 1715-… Mora `olaylar_ek.js:80`, `olaylar_ek5.js:571-575`; 1718-07-21 Pasarofça `:575`.
- Son: 1797-05-12 — `olaylar_napolyon_italya_1028.js:13` ✔; 1797-10-17 Campo Formio — `olaylar_ek16.js:134` ✔; 1848-03-22 / 1849-08-22 — `olaylar_napolyon_italya_1028.js:30,33`; 1866 Veneto İtalya'ya — `kronoloji_sinir_avrupa_bati.js:601`.
- Evren DIŞI (yalnız künye içi): 1204-04-13, 1463-01-01 (savaş, gün uydurma kaçınması: evrende 1463-07-28 var), 1479-01-25, 1489-02-26, 1571-08-01, 1669-09-27, 1684-01-01, 1699-01-26, 1715-09-07, 1797-05-12 — `devletler.js:384-393`.

Eksikler — önerilen satırlar (kaynak yazılı olanlar TDV/Treccani'den okundu; ARANACAK olanlar bu turda doğrulanmadı):
```
{ t:"1489-02-26", b:"Kıbrıs Kraliçesi Caterina Cornaro feragat etti: Kıbrıs Venedik'e geçti", yer_id:"Magosa", kaynak:"TDV kibris: «26 Şubat 1489» (WebFetch 4 Kas 2026); CVAR/Severis: 26 Şubat 1489 Magosa şapeli töreni; Wikipedia 14 Mart = resmî satış (TDV esas)" }
{ t:"1571-08-01", b:"Magosa teslim oldu: Kıbrıs'ın fethi tamamlandı (mevcut olaylar.js:96 maddesinin gün düzeltmesi)", yer_id:"Magosa", kaynak:"TDV kibris: «9 Rebîülevvel 979 (1 Ağustos 1571)»; EBSCO: resmî tören 5 Ağustos (ic_not)" }
{ t:"1540-10-02", b:"Osmanlı-Venedik barışı: Nadin ve Vrana Osmanlı'da kaldı; Anabolu/Monemvasia devri", yer_id:"Nadin", kaynak:"ARANACAK (gün atlas s: ile aynı; TDV 'Venedik'/'Hayreddin Barbaros' maddeleri okunmadı)" }
{ t:"1405-06-22", b:"Verona Venedik'e teslim oldu (Carrara'nın yenilgisi 1405)", yer_id:"Verona", kaynak:"ARANACAK: Treccani DBI 'Carrara, Francesco da, il Novello' (künyedeki kronoloji_sinir_avrupa_bati.js:506 aynı kaynağa atıf yapıyor); gün atlas s: ile aynı" }
{ t:"1428-04-18", b:"Ferrara Barışı: Bergamo ve Brescia (1426 s:) Venedik'te kesinleşti", yer_id:"Bergamo", kaynak:"ARANACAK; atlas s: f 1428-01-01 yıl-işareti" }
{ t:"1409-07-09", b:"Napoli Kralı Ladislao Dalmaçya haklarını 100.000 dukaya Venedik'e sattı", yer_id:"Zadar (Zara)", kaynak:"tek kaynak: Arcipelago Adriatico (yerel kültür sitesi) 9 Temmuz 1409; Wikipedia Dalmatia under Venetian rule: yalnız yıl+fiyat; Zadar sözleşmesi 13 Nisan 1411. DOĞRULANMADI — gün uygulama; atlas s: 1409-01-01 yıl-only kalsın" }
{ t:"1685-08-11", b:"Venedik Mora seferini başlattı (Koron'un alınışı; künye 1684-01-01 maddesinin yerine)", yer_id:"Koron", kaynak:"`olaylar_ek5.js:267` (evrende var) · künye düzeltmesi" }
{ t:"1797-03-12", b:"Bergamo Venedik'ten ayrıldı; 17-18 Mart Brescia", yer_id:"Bergamo", kaynak:"arama özeti: Bergamo 12/13 Mart 1797 (Cisalpin kuruluşu 9 Temmuz); Brescia 17 Mart; Verona Pasque Veronesi 17-25 Nisan — Ca' Foscari chapter (edizionicafoscari 978-88-6969-314-4-ch-02) okunmadı. ARANACAK" }
{ t:"1797-07-01", b:"Avusturya, Istria ve Dalmaçya'yı Venedik adına işgale başladı (Haziran-Ağustos 1797)", yer_id:"Zadar (Zara)", kaynak:"hrcak.srce.hr/file/392008 (arama özeti: Rukavina, ~4000 asker, Haziran-Ağustos 1797); gün aralığı, 07-01 yalnız örnek, DOĞRULANMADI — gün yazılmadan önce makale okunmalı" }
```
Not: son satırdaki `t` yer tutucudur; kaynak bulunmadan eklenmemeli. Sütun işareti "ARANACAK" olanlar tarih uydurma kuralına göre okunmadan uygulanmaz.

## d) Harita uyumu
Toplam 87 kırılma, **20 açık** (15 · <1534, 5 · 1534-1792). Dağılım ve öneri:
| gün | yerleşimler | öneri |
|---|---|---|
| 1000-01-01 | Split | UFUK SINIR İŞARETİ (`kesinlik` yıl; Orseolo 1000 Dalmaçya seferi madde `olaylar_ortacag_italya_dogu_avrupa.js`'ta var) — `odak_yer:["Split (Spalato)"]` yeter |
| 1386-01-01 | Butrint, Korfu, Paxos | Korfu Venedik'e bağlandı 1386: madde YOK (yıl-only; kaynak ARANACAK, Treccani 'Corfù') |
| 1396 · 1401 | İşkodra · Parga | Balsha/ Parga bağlanmaları; kaynak ARANACAK |
| **1405-06-22** | Verona | madde yukarıda |
| 1407 · 1412-10-30 · 1420-01-01 · 1420-06-07 | İnebahtı · Şibenik (30 Ekim 1412 teslim sözleşmesi) · Brač/Hvar/Korčula/Kotor · Udine | Dalmaçya/Friuli genişlemesi; 5 madde, kaynak ARANACAK (Venetian Dalmatia: 1409-1420; Treccani) |
| 1426 · 1428 | Brescia · Bergamo | Ferrara Barışı 1428-04-18 (c) |
| 1443 | Bar (Antivari) | ARANACAK |
| 1453-05-29 | Alonisos, İskiathos, İskiros, İskopelos | s: 1453-05-29 = İstanbul'un Fethi günü (`olaylar` var: Fetih) — Kuzey Sporadlar Venedik'e bağlanışı için bu günün seçilmesi tesadüf/çıkarım şüphesi; `kaynak` alanına bak, gün kaynaklı değilse yıl işareti (1453-01-01) yap |
| 1480 · 1571 | Krk (Veglia) · Bar kaybı | 1480 Frankopan'dan Venedik'e; 1571 Bar'ın Osmanlı'ya geçişi (Kıbrıs savaşı) — kaynak ARANACAK |
| 1540-10-02 | Nadin, Vrana | madde (c) |
| 1686-06-01 | Modon | `olaylar_ek6.js:68` 1686-07-10 (39 g): s: günü kontrol |
| 1699-01-26 | Nadin, Preveze, Vonitsa, Vrana | madde var (`olaylar.js:120`) yer_id yok ⇒ `odak_yer` (TDV: Ayamavra Venedik'e; Preveze/Vonitsa 1699'da Venedik'ten Osmanlı'ya — ek6:64 1684'te Venedik'e kayıp) |
| 1718-07-21 | Ayamavra, Vonitsa, Çuha Adası | madde var (`olaylar_ek5.js:575`) yer_id yok ⇒ `odak_yer`; TDV ile uyumlu (Butrinto, Preveze, Vonitsa Venedik'e; Çuka iade) |
**En geniş dönem sahiplik (1522: 64):** Venedik şehri, Padova, Verona (1405), Brescia/Bergamo (1426-28), Udine (1420), Dalmaçya şehirleri (Zadar, Šibenik, Split, Kotor, Hvar, Brač, Korčula, Krk), Korfu (1386), Girit (Kandiye, Hanya, Resmo `eksklav`), Kıbrıs (Magosa, Girne `eksklav`), Mora kaleleri (Modon, Koron 1500 öncesi) ✔ tarihî sınırla uyumlu; Cambrai Birliği (1509-1517) kayıpları yerleşim düzeyinde (Gradisca 1511 `kronoloji_sinir_avrupa_bati.js:853`) ayrı. **Sorun:** Girit ve Kıbrıs yerleşimleri "eksklav" etiketiyle gövdeden kopuk — bilinçli.
**Künye aşımı (c, b'ye bak):** 31 `s:` dilimi t=1797-10-17; Venedik şehri kendisi 1797-05-12→10-17 `fransa-cumhuriyet`, 1797-10-17→1805-12-26 `avusturya`. Bölgesel gerçeklik: Veneto doğusu Leoben (18 Nisan 1797 ön barış) ile Avusturya'ya vaat; Venedik şehrine Avusturya girişi 1798-01-18 (doğrulanmadı); Istria/Dalmaçya'ya Avusturya Haziran-Ağustos 1797; Korfu/Iyon Fransa 1797-06-28 civarı. Öneri (sınıf ①): dilimleri 1797-05-12'de kes; sonrası için ya `fransa-cumhuriyet` (beyanlı askerî idare) ya `avusturya` (Istria/Dalmaçya, yer yer Temmuz-Ağustos 1797), her yerleşimde `kaynak`: "ABİ MERKEZ: Venedik — fransa-cumhuriyet 12 Mayıs 1797 işgal; Campo Formio 17 Ekim". Alternatif ②: künye t = 1797-10-17 (Campo Formio) — ÖNERİLMEZ (Cumhuriyet'in kendi kararı 12 Mayıs'ta bitti).
**1923-10-29 eski ufuk izi:** `venedik` yerleşimlerinde 1923-10-29 kırılması YOK (grep).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:389` künye maddesi t:"1669-09-27" → "1669-09-06" (TDV `girit`); `ic_not`: "27 Eylül tahliye/anahtar teslimi (19. yy. İngiliz kaynağı) — ikinci akademik kaynak aranacak". `İsfakiye`/`Sitiye` s: 1669-09-27 kaynağı kontrol.
2. `data/devletler.js:390` t:"1684-01-01" "Mora'yı fethetti" → t:"1685-08-11" (evren `olaylar_ek5.js:267`) veya sil; `1463-01-01` maddesi zaten evrende 1463-07-28 var — künye maddesi aynı yıl-only.
3. `data/olaylar.js:96` t:"1571-08" → "1571-08-01" (kesinlik:"gun"); `data/olaylar_ek5.js:212..` sonrası Girne 1570-09-17'nin TDV karşılığı aranacak.
4. `data/devletler.js` `venedik` `ic_not_f` (697/726/IX. yy.) ve `ic_not_t` (12 Mayıs Büyük Konsey; Campo Formio ayrı; Avusturya/Fransız ara dönemi). Karar: f değişikliği Emre'nin.
5. Künye aşımı: ~31 `s:` diliminin t=1797-10-17 → 1797-05-12 (yerleşim bazında kaynak gerekli; şu an gün bulunmadı) — `yerlesimler.js`, `yerlesimler_ek.js`, `yerlesimler_avrupa.js`, `yerlesimler_ek_adalar.js`; **motor/renk dosyalarına dokunmaz**.
6. Yeni madde dosyası (ör. `data/olaylar_venedik_1104.js`): 1489-02-26, 1571-08-01, 1405-06-22, 1540-10-02 (kaynak okunduktan sonra), 1797 Mart ayrılışları (kaynak okunduktan sonra).
7. `odak_yer`/`kapsam_genis:true`: `olaylar.js:120` (1699-01-26: Nadin, Preveze, Vonitsa, Vrana, Ayamavra), `olaylar_ek5.js:575` (1718-07-21: Ayamavra, Vonitsa, Çuha Adası), `olaylar_ortacag_italya_dogu_avrupa.js` 1000 maddesi (Split).
8. `1453-05-29` Kuzey Sporadlar s: günü — kaynak alanı kontrol; kaynaksızsa yıl işareti.

## Erişilemeyen kaynaklar
- Treccani DBI 'Manin, Ludovico' (https://www.treccani.it/enciclopedia/ludovico-manin_(Dizionario-Biografico)/) — soru: Büyük Konsey kararı günü 12 Mayıs 1797 ve oy sayısı.
- Treccani 'Creta' / 'Cipro' / 'Corfù' — soru: Girit 1204 (12 Ağustos 1204 satış) ve gerçek Venedik hâkimiyeti 1209-1212; Korfu 1386; Kıbrıs 1489.
- Cambridge *New Cambridge Medieval History* VI/VII 'Venice' (Stato da Mar) — soru: 1409 Dalmaçya satışının günü (9 Temmuz mu, 1411 Zadar sözleşmesi mi) ve Šibenik 30 Ekim 1412.
- Hrvatski časopis (hrcak.srce.hr/file/392008) tam metni — soru: Avusturya'nın Zadar/Šibenik/Split/Kotor'a giriş günleri (Haziran-Ağustos 1797).
- Ca' Foscari (edizionicafoscari 978-88-6969-314-4 ch.02) — soru: Bergamo 12/13 Mart, Brescia 17-18 Mart 1797 ayrılış günleri; Bevilacqua *Venezia e le Pasque veronesi*.
- Britannica 'Venice' (403; künye f/t kaynağı olarak anılıyor) — soru: 697 mi 726 mı? ve 12 Mayıs 1797.
- TDV `venedik` madde gövdesinin tamamı (WebFetch özeti Osmanlı ilişkilerine odaklandı; savaş tarihleri için `kibris`, `girit`, `karlofca`, `pasarofca`, `ayamavra` maddeleri okundu) — 1463-1479 ve 1537-1540 savaş günleri için ayrı madde okuması yapılmadı.
- Leoben ön barışı 18 Nisan 1797 ve Venedik'e Avusturya girişi 18 Ocak 1798 (hiç kaynak okunmadı).
