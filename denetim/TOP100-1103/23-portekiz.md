# 23 · Portekiz İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer: top100_olc.py; salt okur)

## Özet
- Künye: 10 ölçüldü (portekiz + 9 sömürge/yan künye: portekiz-brezilyasi, -hindistani-goa, -malaka, -mozambik, -angola, -seylani, -gine, -timor, makao-portekiz). Komşu/öncül/ardıl: gine-bissau, seylan-sinhala, kocin (ölçülmedi, yalnız ad).
- Haritada Portekiz sahipliği büyük ölçüde ANA künye `portekiz` üzerinden boyanıyor (sömürge künyeleri `harita:"portekiz"`): ana künyede 81 yerleşim, 99 kırılma, **74 AÇIK**; brezilya 47/**44**; mozambik 13/**10**; angola 16/**13**; goa-künyesi 2/1; gine 2/1; timor 4/3; makao 2/1; seylani 3/0; malaka 0 yerleşim (kendi künyesi boyamıyor). Toplam AÇIK ≈ 147 (yer şartlı ölçüt: madde yok ya da maddenin yer_id/odak_yer'i o yerleşim değil).
- Evrende (olaylar*.js + kronoloji_sinir*.js) Portekiz maddesi çok az: Malaka 1511-08-10 (p0047), Hürmüz 1515-04-01 (2s_0918), İberya Birliği 1581-04-16 ve Restauração 1640-12-01 (olaylar_ek11), Alcañices 1297-09-12 ve Lizbon sınır antlaşması 1864-09-29 (sınır dosyaları). Portekiz künyesinin kendi `kronoloji:[]` maddeleri (1097 kontluk, 1507, 1650…) **künye içinde var, evrende yok**.
- En ağır 3 bulgu: (1) Keşifler/imparatorluk evresi (1415-1600) için neredeyse hiç evren maddesi yok — Sebte 1415, Goa 1510-11-25, Hürmüz 1507/1515/1622, Makao 1557, Brezilya kuruluşları vs. 60+ AÇIK; (2) `portekiz-malaka` f=1511-08-15 TDV `malaka` "10 Ağustos 1511" ile ve evrendeki p0047 maddesiyle çelişir, t=1641-01-01 ise yerleşim s:'sı 1641-01-14 (künye t ile 13 gün fark); (3) İber Birliği: anakara 1580-08-25'te `ispanya`ya geçiyor ama tek karşılık madde 1581-04-16 (234 gün sonra) ve sömürgeler Portekiz kalıyor (aynı kral, iki boya) — beyan eksik.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| portekiz | Portekiz Krallığı | 1097-01-01 | — (pencere ucu) | ana künye; harita ömrü 1097→2000; 81 yerleşim; en geniş 1547 (49) |
| portekiz-brezilyasi | Portekiz Brezilyası | 1549-01-01 | 1822-09-07 | 51 yerleşim (s: kendi id'si); 1534-1549 arası Brezilya kıyısı (Porto Seguro 1534, Olinda 1535, Recife 1537) `portekiz` ile boyalı → f=1549 ile tutarsız |
| portekiz-hindistani-goa | Portekiz Hindistanı | 1505-01-01 | 1961-12-19 | yalnız 1923+ için 2 yerleşim (Goa, Diu); 1505-1923 boyası `portekiz` anahtarı |
| portekiz-malaka | Portekiz Malakası | 1511-08-15 | 1641-01-01 | 0 yerleşim (boyama `portekiz`); f/t sorunlu (bkz. b) |
| portekiz-mozambik | Portekiz Mozambiği | 1505-01-01 | 1975-06-25 | 18 yerleşim; en geniş 1919 |
| portekiz-angola | Portekiz Angolası | 1575-01-01 | 1975-11-11 | 28 yerleşim |
| portekiz-seylani | Portekiz Seylanı | 1505-01-01 | 1658-06-22 | yerleşim 1593→1656; ölçer künye t'den önce (1656) bitiyor |
| portekiz-gine | Portekiz Ginesi | 1879-01-01 | 1974-09-10 | 2 yerleşim |
| portekiz-timor | Portekiz Timoru | 1702-01-01 | 1975-11-28 | 8 yerleşim, 1923+ |
| makao-portekiz | Makao (Portekiz İdaresi) | 1887-12-01 | 1999-12-20 | 1 yerleşim; 1557-1887 boyası `portekiz`, künye hukukî devri (1887) |

EKSİK evre/parça: (i) **Hürmüz/Umman kıyısı Portekiz idaresi (1507-1650)** için künye yok (yerleşimler doğrudan `portekiz`); (ii) **Kuzey Afrika kaleleri** (Sebte 1415, Arzila, Azemmûr, Safi, Mazagan 1769'a dek) künyesiz; (iii) **Atlantik adaları** (Madeira, Azorlar, Yeşil Burun, São Tomé) künyesiz; (iv) **Makao 1557-1887** künye yok (hukuki durum: Çin kirası); (v) Hindistan'da Diu/Daman/Çaul/Bombay künyesi ayrı değil — bunlar tasarım tercihi olabilir ama "künye eksik mi, boya anahtarı mı" kararı Emre'nin. Ardıl: gine-bissau (f 1973-09-24).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| portekiz f | 1097-01-01 | TDV «Portekiz» (islamansiklopedisi.org.tr/portekiz, bu oturumda okundu): «Portekiz'in müstakil bir devlet haline gelişi 1095'ten itibaren başladı» — süreç başlangıcı, tarih değil | GEC «Portugal» (atlas künyesinden aktarılıyor; bu oturumda ÇEKİLEMEDİ): 1097 kontluk bağışı | Korunur (ic_not_f beyanlı; TDV süreci, 1097 bağışı tarihler). Kontluk 1097-1139/43 León-Kastilya'ya tâbi; haritada s:'da doğrudan `portekiz` — tâbi (v:kid) işlenmemiş. |
| krallık tanıma | (künyede 1143) | TDV: «(1143, Zamora Antlaşması)» (yalnız yıl) | GEC «Alfons I» (aktarım) | Gün yok; evrende Zamora maddesi YOK. |
| Lizbon alındı | s: 1147-10-24 | TDV: «1147'de zaptedilince yeni krallığın merkezi oldu» (yıl) | ölçer: bu kırılma AÇIK değil ⇒ evrende karşılığı var | gün kaynağı bu oturumda doğrulanmadı |
| İber Birliği | s: ispanya 1580-08-25→1640-12-01 (anakara) | TDV: «kraliyet soyu tamamen kesildi (1580)»; «Portekiz kralı (I. Felipe) ilân etmek zorunda kaldı (1581)»; «1640 yılına kadar devam edecek şahsî bir birlik» | olaylar_ek11.js:170: Tomar Cortes 1581-04-16 (madde içinde Alcântara 25 Ağustos 1580 anılıyor) | **Tutarsız**: kırılma Alcântara gününe (1580-08-25), tek madde Tomar gününe (1581-04-16). Öneri: hukukî devir günü olan 1581-04-16'yı s: sınırı yap (TDV 1581 ile uyumlu) VEYA 1580-08-25 için Alcântara maddesi ekle. "Şahsî birlik" (TDV) anakaranın `ispanya` boyanmasını destekler değil; sömürgeler Portekiz boyalı kaldığı için beyan şart. |
| Restauração | s: 1640-12-01 | olaylar_ek11.js:179 (1640-12-01) + TDV: «Bragança Dükü (IV.) Johann (1640-1656) kral ilân edilerek» (yıl) | Britannica (madde içinde anılıyor, çekilemedi) | Gün iki maddede 1 Aralık; IV. João'nun kral ilanı 15 Aralık 1640 (kaynak okunmadı) — ayrı madde adayı. |
| Goa | 1510-11-25 (s:) ; künye madde 1510-02-17 ve 1510-12-09 | TDV `goa`/`asya`: yalnız «Goa (1510)» (yıl); TDV portekiz «Goa (1510)» | NCE 'Goa' (künye kaynağı: 25 Kasım 1510) ; WebSearch özeti: 17 Şubat 1510 ilk işgal, 25 Kasım 1510 kesin alış, 9-10 Aralık 1510 savaş (Britannica 'Battle of Goa' — okunamadı, özet) | Haritadaki 1510-11-25 makul; ama künye içi 1510-12-09 maddesi (Britannica) ile çelişir ⇒ künyeyi 1510-11-25'e hizala. İlk işgal Şubat-Mayıs 1510 haritada yok (beyan öner). Evrende Goa maddesi YOK. |
| portekiz-hindistani-goa f | 1505-01-01 | künye ic_not: «f=1505 açılan sayfada yok … doğrulanamadı» | TDV `goa`: Portekiz için tek tarih 1510 | **Kaynaksız f.** Almeida'nın vali oluşu (1505) için TDV/Cambridge okunmadı; öneri: ya kaynak ver ya f'yi 1510 yap (Goa alınışı). |
| portekiz-malaka f | 1511-08-15 | TDV `malaka` (bu oturumda okundu): «10 Ağustos 1511 tarihinde» | evrende olaylar_p0047.js:30: 1511-08-10 ; künye madde 1511-08-24 (Ricklefs; Wikipedia aracılı) | **Hükümsüz**: f→**1511-08-10** (TDV esas). 08-15 ve 08-24 kaynaksız/çelişkili; künye madde 08-24'ü sil/ikincilleştir. |
| portekiz-malaka t | 1641-01-01 | TDV `malaka`: «Ocak 1641'de» (ay) | s: 1641-01-14 (yerleşim; ölçer) | Künye t=01-01 (ay hassasiyetinin ilk günü, kural uyumlu) ama yerleşim 01-14 → ikisi aynı gün olmalı. VOC'nin Malaka'yı alışı (14 Ocak 1641, Boxer/Sar Desai) 2. akademik kaynakta DOĞRULANMADI ⇒ ya yerleşimi 01-01'e çek ya gün kaynağı bul. |
| brezilya f | 1549-01-01 | WebSearch/encyclopedia.com 'Sousa, Tomé de': Salvador kuruluşu 29 Mart 1549 (s: Salvador 1549-03-29 ile uyumlu) | künye madde: «1549-01-01 ilk genel vali» (gün yok) | f=1549-01-01 ay/gün uydurma değil ama Salvador 1549-03-29 ile iki ayrı gün; Brezilya boyası 1534'ten beri var (portekiz) → künye f ile s: tutarsız. Öneri: f'yi 1534 (kaptanlık sistemi) yap ya da evre açıklaması yaz. |
| brezilya t | 1822-09-07 | TDV `portekiz`: «7 Eylül 1822'de bağımsızlık ilân etti» | (2. akademik kaynak okunamadı; ör. Cambridge History of Latin America c.3 / LoC Country Study) | TDV ile uyumlu; ikinci kaynak çekilemedi. NOT: Ipiranga ilanı ≠ tanınma (1825-08-29 Rio Antlaşması) — Portekiz boyası fiilen 1822'de bitiyor. |
| mozambik f | 1505-01-01 | TDV `mozambik` (künye alıntısı): «Portekiz Kralı I. Manuel bölgeye bir donanma gönderdi (1505)» | — | Tek kaynak; 2. kaynak bulunamadı. |
| angola f | 1575-01-01 | Worldmark Enc. (künye): Luanda 1575 | TDV `angola` kısa özeti «Angola'ya ulaşmalarından (1484)» — tam gövde çekilemedi | 1575 = Luanda kuruluşu; Portekiz-Angola bağı 1484 (Diogo Cão) — künye tanımı (Luanda) beyan edilsin. |
| angola t | 1975-11-11 | Den Store Danske lex.dk (künye) | TDV `angola` özet parçası «11.09.1975 Luanda…» (belirsiz, tam metin çekilemedi — "çekilemedi ≠ yok") | 11 Kasım 1975 genel kabul; TDV gövdesi okunup teyit edilmeli. |
| gine f | 1879-01-01 | TDV `gine-bissau` (künye alıntısı): «1879'da Portekiz Ginesi adı verilen…» | — | yıl, gün yok → doğru biçim. |
| timor | 1702 / 1975-11-28 | ANU Press 'Divided Loyalties' (künye) | Avustralya Senatosu raporu (künye) | f=1702 okunmadı (künye notu). t = Fretilin ilanı; fiilî Portekiz çekilişi Ağustos 1975 — künye ic_not beyan etmiş. |
| makao f | 1887-12-01 | Porter 'Macau' (1996) (künye) | — | hukukî devir (Peking Antlaşması 1887-12-01 — yürürlük günü doğrulanmadı); fiilî Portekiz varlığı 1557 → ayrı evre. |
| makao t | 1999-12-20 | portekiz künyesi kronolojisi 1999-12-20 (gün «kaynakla doğrulanmadı») | — | Evrende karşılığı olan madde yok. |

## c) Kronoloji (evren: olaylar*.js + kronoloji_sinir*.js)
Var olanlar: olaylar_p0047.js:30 (Malaka 1511-08-10, TDV'ye göre doğru) · olaylar_2s_0918.js:67 (Hürmüz 1515-04-01; yalnız yıl hassasiyeti? gün kaynak notu okunmadı) · olaylar_ek11.js:170 (İberya Birliği 1581-04-16) · olaylar_ek11.js:179 (Restauração 1640-12-01) · olaylar_2s_0919.js:505 (Kongo sınırı 1885-02-14) · kronoloji_sinir_avrupa_bati.js:46 (Alcañices 1297-09-12) ve :297 (Lizbon sınır 1864-09-29) · olaylar_ek5.js (Osmanlı-Portekiz çatışmaları: Aden 1516, Cidde 1517, Diu 1538, Kasrılkebir 1578 — Portekiz toprağı değiştirmez) · olaylar_2s_1019.js:359 (Cülfâr 1633).
Evren dışı (yalnız künye içi): portekiz `kronoloji:[]` 1097/1128/1507/1650/1949/1961/1974/1975/1976/1986/1999; goa künyesi 1505, 1509-02-03, 1510-02-17, 1510-12-09, 1739…; `data/kronoloji_portekiz.js` (varsa; öteki kronoloji, evren dışı).

Eksik madde önerileri (kaynak durumu: [O]=bu oturumda okundu, [A]=aday, okunmadı):
```
{ t:"1415-01-01", tur:"toprak-kazanc", b:"Portekiz Sebte'yi (Ceuta) aldı", yer_id:"Sebte (Ceuta)", kaynak:"TDV portekiz: «1415'te Ceuta'nın (Sebte) ele geçirilmesiyle» [O] (yıl; gün için ikinci kaynak aranmalı: Cambridge History of Africa c.3 [A])" }   // AÇIK 1415-01-01 → gün bulunursa t'yi güncelle; kırılma günü 1415-01-01
{ t:"1510-11-25", tur:"toprak-kazanc", b:"Albuquerque Goa'yı Bîcapûr'dan kesin olarak aldı", yer_id:"Goa", kaynak:"NCE 'Goa' (künye kaynağı) 25 Kasım 1510; TDV portekiz/asya «Goa (1510)» [O] yıl; Britannica Battle of Goa 9-10 Aralık 1510 [A, özet]" }
{ t:"1510-02-17", tur:"isgal", b:"Albuquerque Goa'yı direnişsiz işgal etti (Mayıs 1510'da kaybedildi)", yer_id:"Goa", kaynak:"Sanceau 1936 s.114 (künye); Britannica Goa/History Mart 1510 diyor — gün çelişkisi beyan edilmeli" } // haritada bu kısa evre yok; kasıtlıysa ic_not
{ t:"1511-08-10", ... }   // MEVCUT (p0047) — künye madde 1511-08-24 ve f 08-15 buna hizalanmalı
{ t:"1557-01-01", tur:"toprak-kazanc", b:"Portekizliler Makao'ya yerleşti (Çin makamlarının izniyle)", yer_id:"Makao (Macau)", kaynak:"[A] Porter 'Macau' 1996; Boxer 'Fidalgos in the Far East'; TDV portekiz yalnız Çin-Portekiz ilişkisini kapsamıyor" }   // AÇIK 1557-01-01; yıl hassasiyeti — kesinlik:"yil"
{ t:"1580-08-25", tur:"toprak-kayip", b:"Alcântara Muharebesi: Felipe'nin ordusu Portekiz'e hâkim oldu", yer_id:"Lizbon", kaynak:"olaylar_ek11.js:170 d: metnindeki 25 Ağustos 1580 (kaynak Britannica; çekilemedi) + TDV portekiz «(1580)» [O]" }   // AÇIK 1580-08-25 (Aveiro, Braga, Bragança, Coimbra)
{ t:"1622-05-01", tur:"toprak-kayip", b:"Hürmüz Safevî-İngiliz kuşatmasıyla Portekiz'den alındı", yer_id:"Hürmüz Adası", kaynak:"[A] Boxer; olaylar_ek11.js:179 d: metni 'Hürmüz 1622'de'; gün (1-3 Mayıs) doğrulanmadı" }   // AÇIK 1622-05-01 Hürmüz/Kişm/Ras el-Hayme
{ t:"1641-01-14", tur:"toprak-kayip", b:"VOC Malaka'yı Portekiz'den aldı", yer_id:"Malaka", kaynak:"TDV malaka: «Ocak 1641'de» [O] (ay); gün için Boxer/Sar Desai [A]" }   // AÇIK 1641-01-14; künye t ile birlikte
{ t:"1658-06-22", tur:"toprak-kayip", b:"Portekiz Seylan'dan (Yafna) çıkarıldı", yer_id:"Yafna (Jaffna)", kaynak:"encyclopedia.com 'Ceylon' (künye) «expelled … 1658» — 'Yafna 1658-06-21' ile künye t 06-22 farkı çözülmeli" }
{ t:"1822-09-07", tur:"toprak-kayip", b:"Brezilya bağımsızlığını ilan etti (Portekiz Brezilyası sona erdi)", yer_id:"Rio de Janeiro", kaynak:"TDV portekiz «7 Eylül 1822'de bağımsızlık ilân etti» [O]" }  // Kontrol: brezilya-imparatorluğu künyesiyle çiftlenmeli
{ t:"1961-12-19", tur:"toprak-kayip", b:"Hindistan Goa, Daman ve Diu'yu aldı", yer_id:"Goa", kaynak:"NCE 'Goa' «On 19 December 1961…» (künye); TDV `diu` yalnız 1962 resmi birleşme" }  // künyede var, evrende yok
{ t:"1974-04-25", tur:"siyaset", b:"Karanfil Devrimi; sömürge bağımsızlıklarının yolu açıldı", yer_id:"Lizbon", kaynak:"TDV portekiz: «(25 Nisan 1974)» [O]; cvce.eu" }  // künyede var, evrende yok
{ t:"1975-11-11", ... Angola }, { t:"1975-06-25", ... Mozambik }, { t:"1999-12-20", ... Makao }  // künye içinde var, evrende yok
```
Ek: İberya Birliği maddesinin `ic_not_d` kısmında "atlas aynı hukukî durumu Felemenk ve Milano için `ispanya` diye boyadığından anakara Portekiz de aynı" gerekçesi var (ek11.js:170) — beyan mevcut ama sömürge tarafı (Goa/Brezilya/Angola 1580-1640 `portekiz`) için karşı beyan yok.

## d) Harita uyumu
Ölçer sayıları: portekiz 99 kırılma / 74 AÇIK; brezilya 47/44; mozambik 13/10; angola 16/13; goa-künye 2/1; gine 2/1; timor 4/3; makao 2/1; seylani 3/0; malaka —. Neden: maddeler ya hiç yok (kuruluş/yerleşme kırılmaları) ya da `yer_id`/`odak_yer` yerleşim adıyla eşleşmiyor.
Dağılım (ana künye, 74 AÇIK): 1097-1500 ≈ 10 (Coimbra/Porto 1097, Évora 1165, Sebte 1415, Funchal 1419, Gorée 1444, Angra 1460, Santiago 1462, Arzila 1471, Elmina 1482, São Tomé 1485); 1500-1600 ≈ 28 (Malindi, Kolam, Koçin 1503-09, Maskat…1507, Goa 1510-11-25, Ambon 1512, Kolombo 1518-09, Ternate 1522, Bombay 1534-12-23, Diu 1535-10-25, Makao 1557, Nagazaki 1580-06-09…); 1600-1700 ≈ 22 kayıp/kazanç (Hürmüz 1622, Malaka 1641, Koçin 1663, Maskat 1650, Mombasa-Lamu 1698…); 1700-1923 ≈ 14 (Colonia do Sacramento 1680/1705/1715/1762/1763/1777, Mazagan 1769, Cayenne 1809/1817, Flores 1859…).
Ayrıntı (en önemli 15):
| gün | yerleşimler | öneri |
|---|---|---|
| 1510-11-25 | Goa | madde (yukarıda) |
| 1557-01-01 | Makao | madde, yıl hassasiyeti |
| 1580-08-25 | Aveiro, Braga, Bragança, Coimbra, Lizbon… (anakara→ispanya) | Alcântara maddesi ya da s: sınırını 1581-04-16'ya çek |
| 1622-05-01 | Hürmüz, Kişm, Cülfâr | madde; gün doğrula |
| 1641-01-01/14 | São Tomé (01-01) ve Malaka (01-14) | iki ayrı gün: São Tomé 1641 Hollanda işgali (Ocak 1641?) ve 1648 geri alış — gün kaynaksız; Malaka maddesi |
| 1650-01-26 | Maskat, Suhâr, Sûr | olaylar_ek (Umman Maskat'ı aldı) 1650-01-26 künye-içi "toprak-kayip" var, evrende yok → taşı |
| 1658-06-21 | Yafna | 1658-06-22 künye ile çakıştır |
| 1663-01-07 / 02-15 | Koçin / Kannûr (VOC) | madde; Cochin 7 Ocak 1663 (VOC) kaynak okunmadı |
| 1665-02-18 | Bombay (İngiltere'ye drahomaya) | madde: Bombay'ın İngiltere'ye devri — gün kaynak okunmadı |
| 1698-12-13 | Kilwa, Mafia, Lamu, Malindi (Umman) | madde; olaylar'da Umman-Portekiz 1698 yok |
| 1809-01-14 / 1817-01-01 | Cayenne | madde 1809 işgali ve 1817 iadesi (Cayenne Portekiz: 1809→1817) |
| 1822-09-07 | Brezilya 51 yerleşim t | madde (künye içi var, evrende yok) |
| 1879-01-01 | Bissau, Cacheu | madde: Portekiz Ginesi ayrı eyalet (TDV gine-bissau) |
| 1923-10-29 | Diu, Goa, Dili, Baucau | ufuk 1923 bölme noktası (yapay kırılma) — kabul edilebilir, ölçerin 1923 parçası; maddesi gerekmeyebilir |
| 1961-12-19 | Goa, Diu (t) | madde (künye içinde var) |
Sahiplik uyumu (en geniş yıl 1547; 49 yerleşim): Goa, Hürmüz, Kolombo, Malaka, Makao, Nagazaki (1580-06-09 Portekiz? — Nagasaki 1580'de Jesuit'e bağış; egemenlik değil: **yanlış olabilir, "Portekiz toprağı" olarak boyanması sorgulanmalı**; Nagazaki 1587-07-24 'kayıp' ile birlikte Toyotomi'nin Jesuit yasağı), Ternate 1522/1575 (Portekiz kalesi; yerli sultanlık egemen — beyanlı yaklaşıklık mı?), Ambon 1512 (ticaret merkezi), São Paulo 1554 vs. sömürge — çoğu **ticaret/üs noktası olup egemenlik alanı değil**; petek motoru bunu bölge ölçeğinde boyayacağı için "noktası olmayan bölge en yakın peteğe emilir" kuralıyla büyük kıyı bölgeleri Portekiz sayılabilir (Mozambik 1505-1895 arası 6-10 nokta; iç bölgeler 1895-1900'de 13-18'e çıkıyor: 1895-01-01 ve 1899-01-01, 1900-01-01 kazanç gruplarında 10 AÇIK; gerçek "etkin işgal" Berlin 1884-85 sonrası — künye ic_not gerekli).
Malaka: künye 0 yerleşim, ama `portekiz` s: Malaka (1511-08-10→1641-01-14) mevcut; künye bölgesinde başka nokta yok.
Seylan: portekiz-seylani yerleşim 1593-1656 (2 kayıt) — künye f 1505 ile s: 1593 arası, Kolombo AÇIK 1518-09-01 `portekiz` anahtarlı, çift sayım.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` portekiz-malaka: f "1511-08-15" → "1511-08-10" (TDV malaka); künye madde "1511-08-24"ü kaldır ya da ic_not'a çelişki yaz; t'yi yerleşim 1641-01-14 ile hizala (ya künye t=1641-01-14 + 2. kaynak, ya yerleşim 1641-01-01).
2. `data/devletler.js` portekiz-hindistani-goa f "1505-01-01" kaynaksız → ya 1510-11-25 ya kaynak (Almeida viceroyluğu 1505: Cambridge History of India c.1 ya da Boxer [A]).
3. portekiz-hindistani-goa kronoloji "1510-12-09" maddesini 1510-11-25'e çek (NCE künye kaynağı); evrene Goa 1510-11-25 maddesi ekle (c bölümü).
4. İber Birliği: ya `data/yerlesimler*.js` anakara s: `ispanya` başlangıcını 1580-08-25 → 1581-04-16 yap, ya olaylar'a Alcântara 1580-08-25 maddesi ekle. Sömürgelerin 1580-1640 `portekiz` kalması için ic_not.
5. portekiz-brezilyasi f/portekiz boyası uyumsuzluğu: 1534-1549 Brezilya noktaları için ya künye f'yi öne çek ya evre ayrı (kaptanlıklar).
6. Evrene 20+ madde: Sebte 1415, Funchal 1419, Elmina 1482, Goa 1510, Makao 1557, Hürmüz 1622, Malaka 1641, Koçin 1663, Bombay 1665, Cayenne 1809/1817, 1822 Brezilya, 1879 Ginesi, 1961 Goa (c bölümü); her biri ikinci akademik kaynakla (TDV çoğunda yalnız yıl).
7. Nagazaki 1580-06-09→1587-07-24 `portekiz` boyası: egemenlik mi Jesuit tevdii mi — beyan/kaldırma kararı.
8. makao-portekiz künyesi: 1557-1887 evresini künyeye ya da `ic_not`a yaz (Makao şu an 1887'de başlıyor, boya 1557'den).

## Erişilemeyen kaynaklar
- GEC (Gran Enciclopèdia Catalana) «Portugal», «Alfons I de Portugal» — künyede atıf, bu oturumda çekilemedi; soru: 1097 bağışı / 1143 tanıma günü.
- Britannica (403): «Battle of Goa», «Portuguese Malacca/Ceuta» — özet WebSearch'ten; soru: Goa 25 Kasım 1510 mü 9-10 Aralık mı; Sebte günü (21 Ağustos 1415 bilinen ama okunmadı).
- Cambridge History of India vol.1 (Dodwell, 1922; archive.org) — Almeida 1505; Goa 1510.
- Boxer, *The Portuguese Seaborne Empire* (1969) — Hürmüz 1622 günü, Malaka 14 Ocak 1641, Koçin 7 Ocak 1663.
- Sar Desai, «The Portuguese Administration in Malacca, 1511-1641», JSEAH 10/3 (1969) — JSTOR (stable URL bilinmiyor): soru: Malaka 10 Ağustos 1511 ve 14 Ocak 1641 teyidi.
- TDV `angola` tam gövde (çekilen özet belirsiz «11.09.1975»): soru: bağımsızlık günü 11 Kasım 1975 mi.
- TDV `hurmuz`/`benderabbas`/`abbas-i`: Hürmüz'ün 1622 alınış günü (arama sayfası okundu, madde gövdeleri okunmadı).
- Cambridge History of Latin America c.3 / LoC Country Study 'Brazil': 7 Eylül 1822 ve 29 Ağustos 1825 tanıma — 2. kaynak.
