# 13 · İspanyol İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (saat kaydedilmedi)

## Özet
- Künye: ana `ispanya` + 5 canlı sömürge künyesi (yeni-ispanya, yeni-ispanya-ilk-donem, ispanyol-peru, guatemala-kaptanligi + ispanya içi) + **8 sömürge künyesi haritada görünmüyor (0 yerleşim)**: ispanyol-santo-domingo, yeni-granada-valiligi, rio-de-la-plata-valiligi, ispanyol-filipinler, ispanyol-kuba, ispanyol-florida, sili-kaptanligi, venezuela-genel-kaptanligi.
- Ölçer (5 künye): kırılma 254+60+11+56+7 = 388; **AÇIK 188+51+9+53+6 = 307**. Yerleşimi 0 olan 8 künye için kırılma da 0 (ölçülecek şey yok).
- Eksik madde (Değişmez 2 evreninde): tahminen ~240 gün (aşağıdaki sınıflandırma); bunun ≥ 55 günü için madde **sitede var ama evren dışı** (`kronoloji_ispanya.js`, `kronoloji_portekiz.js`, `devletler.js` künye-içi `kronoloji:`).
- En ağır 3 bulgu:
  1. **Sömürge künyeleri iç içe geçmiş ve yanlış paylaştırılmış:** Bogotá, Cartagena, Quito, Panamá (Yeni Granada 1739'dan), Caracas, Maracaibo (Venezuela Kaptanlığı 1777'den), Potosí, La Paz, Tucumán (Río de la Plata 1776'dan), Şili (Kaptanlık) 1819-1826'ya dek `ispanyol-peru` (Peru Genel Valiliği) künyesinde; Buenos Aires `ispanya` künyesinde. Altı sömürge künyesinin yerleşimi 0. Valilikler arası el değiştirme (1739, 1776, 1777) haritada yok.
  2. **İç savaş ve bağımsızlık dalgasının maddeleri evren dışı ya da hiç yok:** 1936-39 (16 kırılma) maddeleri yalnız `devletler.js` künye-içi `kronoloji:`'da; 1810-1826 (23 kırılma): Buenos Aires (1810-05-25), Ayacucho (1824-12-09), 1898 Paris (1898-12-10) yalnız kronoloji_ispanya.js'te; Paraguay 1811, Şili 1818, Boyacá/Angostura 1819, Carabobo 1821, Panama 1821, Pichincha 1822, Bolivya 1825 **hiçbir yerde yok**.
  3. **Takvim/gün sorunları:** `ispanyol-filipinler f=1565-01-01` (Cebu'ya iniş 27 Nisan 1565), `ispanyol-florida f=1513-04-02` (Ponce de León'un 2 Nisan 1513 Jülyen'i; Gregoryen ~12 Nisan; ayrıca "keşif ≠ egemenlik"), `yeni-ispanya f=1535-04-17` (atama günü; göreve başlama Kasım 1535); New Orleans `1763-11-03` (antlaşma 1762-11-03; fiilî devir 1769).

## a) Künye eşleme
| id | ad | f | t | yerleşim | durum |
|---|---|---|---|---|---|
| kastilya | Kastilya Tacı | 1035-01-01 | 1479-01-19 | (sıra dışı) | öncül; t = ispanya f ✓ |
| aragon | Aragon Tacı | 1035-01-01 | 1479-01-19 | | öncül ✓ |
| navarra | Navarra Krallığı | 0824-01-01 | 1620-10-19 | | ayrı polity (1512 Kastilya'ya katıldı; 1620'ye dek ayrı kral unvanı) |
| granada | Gırnata (Nasrî) | 1238-05-12 | 1492-01-02 | | TDV «Endülüs»: Nasrîler 1238-1492 ✓ (okundu) |
| **ispanya** | İspanya (Kastilya-Aragon) | 1479-01-19 | — (devam) | 268 | ana künye; en geniş yıl 1635 (154); kaynak TDV «İspanya» + DBE |
| ispanya-milliyetci | Milliyetçi İspanya | 1936-07-17 | 1939-04-01 | | iç savaş; ayrı künye ✓ |
| yeni-ispanya-ilk-donem | Cortés/Audiencia | 1521-08-13 | 1535-04-17 | 22 | `kaynak`: Cervantes Virtual (tek) |
| yeni-ispanya | Yeni İspanya Genel Valiliği | 1535-04-17 | 1821-09-27 | 88 | `kaynak:"amerika"` (kısa anahtar) |
| ispanyol-peru | Peru Genel Valiliği | 1542-11-20 | 1824-12-09 | 78 | `kaynak:"amerika"` |
| guatemala-kaptanligi | Guatemala Genel Kaptanlığı | 1609-01-01 | 1821-09-15 | 10 | `kaynak`: Vikipedi + worldgenweb (zayıf) |
| yeni-granada-valiligi | | 1717-05-27 | 1810-07-20 | **0** | haritada yok; kaynak encyclopedia.com |
| rio-de-la-plata-valiligi | | 1776-01-01 | 1810-05-25 | **0** | yok; kaynak: Real Cédula (wikisource transkripsiyonu) |
| venezuela-genel-kaptanligi | | 1777-09-08 | 1810-04-19 | **0** | yok; kaynak Fundación Polar Dicc. |
| sili-kaptanligi | | 1541-02-12 | 1818-02-12 | **0** | yok; kaynak: Vikipedi + globalsecurity + CUP özeti |
| ispanyol-kuba | | 1511-01-01 | 1898-12-10 | **0** | yok; kaynak SJSU Watkins + Vikipedi |
| ispanyol-santo-domingo | | 1496-01-01 | 1821-12-01 | **0** | yok; kaynak FRUS/RAH |
| ispanyol-florida | | 1513-04-02 | 1821-07-10 | **0** | yok; kaynak FHQ + NPS |
| ispanyol-filipinler | | 1565-01-01 | 1898-12-10 | **0** | yok; kaynak Paris Antlaşması + encyclopedia.com |
| (ilgili) ispanyol-oran-1/2, ispanyol-halkulvad, ispanyol-formosa, louisiana, sardinya-aragon, sicilya-aragon, fas-ispanyol-himayesi, ispanyol-sahra, ifni-ispanyol, cabo-juby-ispanyol | | | | | bu denetimde ayrıntı dışı |
Eksik evre/künye: (1) **Joseph Bonaparte krallığı (1808-06-06 → 1813)** ve Cádiz Cortes'i ayrı künyesiz; ispanya künyesi kesintisiz; (2) **Habsburg → Bourbon** (1700-11-01 Carlos II ölümü, Felipe V) kırılması künyede yok (aynı polity, kabul); (3) Portekiz Birliği 1580-1640 `ispanya` yerleşimi olarak işlenmiş (b/d'ye bak).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| ispanya f | 1479-01-19 | DBE (RAH) «Juan II de Aragón»: «Barcelona, 19.I.1479» (künye `ic_not_f`; 14 Ekim 2026 Emre kararı) | Gran Enciclopèdia Catalana (aynı); TDV «İspanya»: yalnız «1469 evlilik» (okundu, 1479 yok) | Zaten karara bağlanmış; Vikipedi/Britannica **20 Ocak** der ama Emre kararı DBE/GEC'e göre 19 → dokunma. |
| granada t | 1492-01-02 | TDV «İspanya»: «1492'de Gırnata'nın düşmesi» (yıl) | Britannica (kronoloji maddesi) 2 Ocak | gün TDV'de yok → ikinci kaynak okunmadı; maddede 2 Ocak, uyumlu. |
| ispanya (1580-1640 Portekiz birliği) | s: 1580-08-25 / 1640-12-01 | TDV «İspanya»: «(1580)», «(1640)» | Alcântara 25 Ağustos 1580 (kronoloji_portekiz.js:334) | 1640-12-01 doğru; evrende madde `Restauração` **1641-01-01** (yanlış gün) → 1640-12-01 yap. |
| ispanya (iç savaş) | 1936-07-17 / 1939-04-01 | Britannica «Spanish Civil War» / «Francisco Franco» (künyede alıntılı) | TDV «İspanya»: «1936-1939» (yıl) | Uyumlu. |
| yeni-ispanya f | 1535-04-17 | Cervantes Virtual Carlos V kronolojisi: Mendoza'nın atanması (künye-içi alıntı) | Cambridge History of Latin America vol.2 **çekilemedi** | Atama günü; Mendoza Meksika'ya Kasım 1535'te vardı (Vikipedi; akademik teyit gerek). Egemenlik değişikliği atamayla mı, varışla mı olur? `ic_not` ekle; dokunma. |
| yeni-ispanya t | 1821-09-27 | madde: Iturbide Mexico City'ye girdi (kronoloji_ispanya.js) | Córdoba Antlaşması 24 Ağustos 1821 (çekilemedi) | Uyumlu (ordunun girişi); bağımsızlık bildirgesi 28 Eylül. |
| yeni-ispanya-ilk-donem f | 1521-08-13 | Tenochtitlan'ın düşüşü (kronoloji_ispanya.js:… 1521-08-13) | — | Uyumlu. |
| ispanyol-peru f | 1542-11-20 | Yeni Yasalar (Leyes Nuevas) 20 Kasım 1542 (madde evrende `1542-11-20`) | — | Uyumlu. |
| ispanyol-peru t | 1824-12-09 | Ayacucho / Capitulación 9 Aralık 1824 (kronoloji_ispanya.js) | Callao 1826-01-23 ayrı | Uyumlu. |
| yeni-granada f | 1717-05-27 | encyclopedia.com «New Granada, Viceroyalty of»: «failed start (1717–1723) … reestablished in 1739» | — | **1723-1739 arası valilik yoktu**: künye 1717'den 1810'a kesintisiz ama gerçekte iki dönem. Öneri: f = 1739 (Real Cédula 20 Ağustos 1739; kaynak okunmadı) ya da iki dönem. `kaynak` zayıf. |
| rio-de-la-plata f | 1776-01-01 | Real Cédula, San Ildefonso **1 Ağustos 1776** (künye kaynağı) | — | f yıl-başı: kaynağın kendi günü 1776-08-01 → **düzelt** (hicrî/gün kuralı gereği gün yazılabilir). |
| venezuela-genel-kaptanligi | 1777-09-08 → 1810-04-19 | Fundación Polar Diccionario: gün ✓ | — | uyumlu. |
| sili-kaptanligi f | 1541-02-12 | Valdivia'nın Santiago'yu kurması 12 Şubat 1541 | — | **Kuruluş ≠ kaptanlık**: Şili Genel Kaptanlığı 1541'den değil (kuruluş yılları: 1540'lı "gobernación"; kaptanlık 16. yy sonu/1789). Kaynak Vikipedi. Düzelt: kaynaklı akademik gün (Cambridge Hist. of Latin America) **çekilemedi**. |
| ispanyol-filipinler f | 1565-01-01 | Legazpi'nin Cebu'ya inişi **27 Nisan 1565** (yerleşim `Cebu` 1565-04-27 ile aynı oturumda) | encyclopedia.com «Legazpi» | künye f yıl-başı; yerleşimin ilk günü 27 Nisan → f = 1565-04-27. (Meksika'dan hareket 21 Kasım 1564 ayrı.) |
| ispanyol-kuba f | 1511-01-01 | Baracoa 15 Ağustos 1511 (kronoloji_sinir_karayip_adalar.js; evrende `1511-08-15`) | — | f = 1511-08-15 (ilk yerleşme). |
| ispanyol-florida f | 1513-04-02 | FHQ: Ponce de León 2 Nisan 1513 (Jülyen?) | NPS | **Jülyen şüphesi** (Gregoryen ~12 Nisan) ve **kuruluş = keşif**: Spanish Florida'nın fiilî başlangıcı 1565 (St. Augustine 8 Eylül 1565, atlasta `ispanya` s:). Künye f gözden geçir. |
| ispanyol-santo-domingo | 1496-01-01 → 1821-12-01 | Santo Domingo'nun kuruluşu Ağustos 1496 (Bartholomew Columbus; kaynak okunmadı) | FRUS 1906 | `t:1821-12-01` Núñez de Cáceres bağımsızlığı; atlas yerleşimleri `ispanya` 1822-02-09'a dek (Haiti işgali). Tutarsız: künyede 1821-12-01, yerleşimlerde 1822-02-09. |

## c) Kronoloji
Evrende (olaylar*/kronoloji_sinir_*) var: 1479-01-19 (Simancas/Barbastro/Vic), 1494-06-07 Tordesillas, 1509 Oran, 1510 Bicâye/Trablus, 1511-08-15 Baracoa, 1516-01-23, 1519-11-08 Tenochtitlan, 1532-11-16 Cajamarca, 1534-12-06 Quito, 1535-01-18 Lima, 1535-04-17 Yeni İspanya, 1538-08-06 Bogotá, 1542-11-20 Peru Valiliği, 1555 Orbetello/Bicâye, 1564 Bâdis, 1571-01-01 Manila (**gün yıl-başı; Manila 24 Haziran 1571**), 1581-04-16 Portekiz birliği, 1581-07-26 Hollanda, 1598 Vervins, 1610 Larache, 1668 Aachen, 1670 Madrid (Godolphin), 1678 Nijmegen, 1697 Ryswick, 1713-04-11 Utrecht, 1714-03-07 Rastatt, 1720-02-24 Sardinya, 1732 Oran, 1762-11-03 Fontainebleau, 1792 Oran, 1801-06-06 Badajoz, 1802-03-25 Amiens, 1821-09-15 Guatemala, 1826-01-14 Tantauco, 1856/1868 Bayonne, 1864-09-29 Lizbon sınır, 1956 Fas, 1968 Ekvator Ginesi, 1976-02-26 Sahra. **1492-01-02 Granada** evrende var (`Gırnata`, Granada).
Künye-içi (`devletler.js:1730-`) ama evren dışı: 1479-01-19, 1492-01-02, 1535-07-21 Tunus, 1571-10-07 İnebahtı, 1580-06-01, 1936-07-17, 1939-04-01, 1947-07-06; `ispanya-milliyetci` (devletler.js:10920-): 1936-07-18 Sevilla/Valladolid/Burgos, -19 Zaragoza/Pamplona/Oviedo/Salamanca/Palma, -20 Galiçya, 1936-08-14 Badajoz, 1938-01-07 Teruel, 1938-04-04 Lleida, 1938-06-14 Castellón, 1939-03-30 Valensiya (kaynak Gran Enciclopèdia Catalana).
Site'de yüklü ama evren dışı (`index.html:1277,1356`): kronoloji_ispanya.js: 1521-08-13, 1532-11-16, 1533-11-15 Cusco, 1542-11-20, 1580-08-25 (ve kronoloji_portekiz.js:334), 1640-12-01, 1659-11-07 Pireneler, 1704-08-04 Gibraltar, 1762-08-13 Havana, 1763-02-10, 1782-02-05 Menorka, 1783-09-03, 1795-07-22 Basel, 1808-06-06, **1810-05-25 (satır 676)**, 1821-09-27, **1824-12-09**, **1898-12-10 (satır 770)**.
Hiçbir yerde olmayan (aranan 32 gün içinde 0 eşleşme): 1811-05-14 Paraguay · 1818-02-12 Şili · 1819-12-17 Angostura/Büyük Kolombiya · 1821-06-24 Carabobo · 1821-07-10 Florida devri · 1821-11-28 Panama · 1822-05-24 Pichincha · 1825-08-06 Bolivya · 1632-08-22 Maastricht · 1861-03-18 / 1865-03-03 Santo Domingo İspanya'ya dönüşü/terki · 1809-07-09 Santo Domingo'nun geri alınışı · 1565-04-27 Cebu · 1519-04-22 Veracruz · 1571-06-24 Manila.

Eksik maddeler (öneri; **kaynak okunmadan YAZILMAZ** — burada yalnız hangi gün ve hangi kaynağa gidileceği):
```
{ t:"1565-04-27", b:"Legazpi Cebu'ya çıktı; İspanyol Filipinleri'nin başlangıcı", yer_id:"Cebu", kaynak:"encyclopedia.com «Miguel López de Legazpi» (künye kaynağı); ikinci akademik kaynak çekilemedi" },
{ t:"1571-06-24", b:"Legazpi Manila'yı başkent ilan etti", yer_id:"Manila", kaynak:"ÇEKİLEMEDİ; mevcut madde 1571-01-01 'Manila'yı aldı' ile birleştir" },
{ t:"1811-05-14", b:"Asunción garnizonu ayaklandı: Paraguay fiilî olarak Buenos Aires ve İspanya dışında", yer_id:"Asunción", kaynak:"Vikipedi 'Independence of Paraguay': 14-15 Mayıs 1811; Vali Velasco cuntada kaldı, 9 Haziran'da ev hapsi; **bağımsızlık bildirgesi 1813** → atlas 'kayıp' günü tartışmalı; akademik kaynak (CUP Latin America) çekilemedi" },
{ t:"1818-02-12", b:"Şili Bağımsızlık Bildirgesi (Talca); Maipú 5 Nisan 1818", yer_id:"Santiago (Şili)", kaynak:"arama bulamadı: bir kaynak 18 Eylül 1810, bir kaynak Maipú 5 Nisan 1818 verdi; 12 Şubat 1818 teyitsiz — çekilemedi" },
{ t:"1819-12-17", b:"Angostura Kongresi Büyük Kolombiya'yı kurdu (Temel Yasa)", yer_id:"Bacatá (Bogotá)", kaynak:"Vikipedi 'Congress of Angostura': 17 Aralık 1819; akademik kaynak çekilemedi" },
{ t:"1821-06-24", b:"Carabobo Muharebesi — Venezuela'da İspanyol egemenliği sona erdi", yer_id:"Caracas (Santiago de León de Caracas)", kaynak:"arama doğruladı 24 Haziran 1821 (ikincil siteler); akademik kaynak çekilemedi" },
{ t:"1822-05-24", b:"Pichincha Muharebesi — Quito/Guayaquil Kolombiya'ya", yer_id:"Quito", kaynak:"arama doğruladı (ikincil); Guayaquil zaten 9 Ekim 1820'de bağımsızdı — atlas 1822-05-24 'kayıp' günü sorgulanmalı" },
{ t:"1825-08-06", b:"Bolivya bağımsızlığı ilan edildi", yer_id:"Sucre (La Plata / Chuquisaca)", kaynak:"ikincil tablo 6 Ağustos 1825; akademik kaynak çekilemedi" },
{ t:"1632-08-22", b:"Maastricht Hollanda'ya teslim oldu", yer_id:"Maastricht", kaynak:"ÇEKİLEMEDİ" }
```
(Panama 1821-11-28: arama günü doğrulamadı → "çekilemedi".)

## d) Harita uyumu
Ölçer sonuçları (kırılma/AÇIK): ispanya 254/188 · yeni-ispanya 60/51 · yeni-ispanya-ilk-donem 11/9 · ispanyol-peru 56/53 · guatemala-kaptanligi 7/6 · diğer 8 künye: 0 yerleşim.
`ispanya` AÇIK dağılımı (tarihe göre, ölçerin ilk 188 satırından sayıldı): 1810 öncesi kazanç **120**, 1810 öncesi kayıp **26**, 1810-1899 **23**, 1900-1935 **3**, 1936 sonrası **16**.

| sınıf | adet | örnek | çözüm |
|---|---|---|---|
| (A) İç savaş (1936-39) | 16 | 1936-07-18..20, 08-14, 1937-06-19 Bilbao, 1937-08-26 Santander, 1938-01-07 / 02-22 Teruel, -04-04 Lleida, -06-14 Castellón, 1939-01-15 Tarragona, -01-26 Barselona, -03-28 Madrid, -03-30 Valensiya, 1939-04-01 | madde `ispanya-milliyetci` künye-içi kronolojisinde (devletler.js:10925-); evren dışı. `olaylar_*`ya taşı; Bilbao, Santander, Tarragona, Barselona, Madrid için künye-içi madde de **yok** → GEC «Guerra civil espanyola» ile yaz |
| (B) Bağımsızlık dalgası 1810-1826 | ~35 (5 künyede) | 1810-05-25 Buenos Aires, 1811-05-14 Paraguay, 1814-06-20 Colonia/Minas/Montevideo, 1818-02-12 Şili, 1819-12-17, 1821-06-24, 1821-10-01 Cartagena/Santa Marta, 1821-11-28 Panamá, 1822-05-24, 1824-12-09, 1825-08-06, 1826-01-23 Callao | 1810-05-25 ve 1824-12-09 evren dışı → taşı; ötekiler yazılacak (c). **Cartagena/Santa Marta 1821-10-01**: Cartagena'nın gerçek teslimi 10 Ekim 1821 (hatırlama; kaynak okunmadı) — gün sorgula |
| (C) 1898 | ~12 | 1898-06-21 Hagåtña (Guam), 1898-08-13 Manila/Cebu/Butuan…, 1898-12-10 Küba/Porto Riko/Filipinler, 1899-10-12 Pohnpei, 1899-11-17 Marianalar | 1898-12-10 kronoloji_ispanya.js:770 → evrene taşı + `yer:` genişlet; 1898-06-21 ve 1898-08-13 için madde yok |
| (D) Coğrafî keşif/kuruluş (1496-1788, kazanç) | ~90 | 1496 Santo Domingo, 1519-04-22 Veracruz, 1519-10-18 Cholula, 1519-11-16 Havana, 1533-11-15 Cusco, 1534 Quito, 1535 Lima/Callao, 1536 Valparaíso, 1537 Callao/Cali/Bogotá, 1538 Guayaquil/Sucre (La Plata), 1565-04-27 Cebu, 1565-09-08 St. Augustine, 1571-06-24 Manila, 1580 Buenos Aires, 1726-12-24 Montevideo | her şehir kuruluşunun günü/yılı kaynaklı olmalı; **yıl-hassasiyetli (1/1) olan ~60'ı için kaynak okunmadan madde yazılamaz** → ya kaynak ya "yalnız yıl" beyanı; 20 kadar tanesinin günü atlasın kendisinde var (kuruluş gün-hassas) ama madde yok |
| (E) Avrupa/Akdeniz | ~20 | 1485-05-22 Ronda, 1487-08-18 Málaga, 1488-06-10 Mojácar, 1489-12-22 Almería-Motril (Gırnata Savaşı), 1493-01-19 Perpignan (Barselona Antlaşması), 1497 Melilla, 1555-04-17 Siena, 1632-08-22 Maastricht, 1640-12-01, 1659-11-07, 1704-08-04 Gibraltar, 1714-03-07 Como, 1762-08-13 Havana, 1792-09-12 Oran | Gırnata Savaşı günleri için TDV «Gırnata» (okunmadı); Melilla maddesi var (259 gün uzak: madde günü 17 Eylül 1497 mi?) — `yer`/gün eşitle |
| (F) Santo Domingo zinciri | 5 | 1795-07-22 Basel, 1809-07-09, 1822-02-09, 1861-03-18, 1865-03-03 | 1795 evren dışı; ötekiler yok; künye `ispanyol-santo-domingo` boş |

En önemli ~15 açık (ispanya künyesi + valilikler), öneriyle:
| gün | yerleşimler | öneri |
|---|---|---|
| 1936-07-18/19/20 | Burgos, Sevilla, Valladolid; Mayorka, Oviedo, Pamplona, Salamanca; A Coruña, Santiago | künye-içi maddeleri evrene taşı (yer listeleri hazır) |
| 1939-03-28 / 1939-04-01 | Madrid / A Coruña…Valensiya (toplu) | Madrid'in düşüşü madde yok; Franco 1 Nisan künye-içi var ⇒ taşı |
| 1898-12-10 | Baracoa, Bayamo, Camagüey, Cienfuegos… (Küba) | kronoloji_ispanya.js:770 taşı; `yer:` Küba/Filipin şehir listesi |
| 1898-08-13 | Batangas, Butuan, Cebu, Dagupan… | Manila'nın düşüşü (13 Ağustos 1898; ABD) madde yok → ikinci kaynak |
| 1810-05-25 | Belén, Buenos Aires, Corrientes, Córdoba (Arj.) | kronoloji_ispanya.js:676 taşı, `yer:` genişlet; Río de la Plata künyesi ile bağla |
| 1811-05-14 | Asunción, Encarnación, Fuerte Olimpo, San Ignacio Guazú… | madde yaz (gün tartışmalı: bağımsızlık 1811 junta / 1813 bildirge) |
| 1824-12-09 | Arequipa, Arica, Cajamarca, Callao… | kronoloji_ispanya.js taşı |
| 1818-02-12 | Copiapó, La Serena, Rancagua, San Felipe | madde yaz; Şili kaptanlığı künyesi (şu an boş) ile ilişkilendir |
| 1819-12-17 | Arauca, Bacatá, Barbacoas, Cali… | Angostura Kongresi; ayrıca bu yerleşimlerin 1739'dan itibaren Yeni Granada künyesinde olması gerekir |
| 1580-08-25 | Aveiro, Braga, Bragança, Coimbra | kronoloji_portekiz.js:334 taşı; **yer_id Lizbon**: Aveiro/Braga/Bragança/Coimbra'yı `yer:`e ekle |
| 1640-12-01 | aynı 4 şehir | evrendeki `Restauração` maddesi `1641-01-01` → **1640-12-01** |
| 1762-08-13 / 1763-02-10 | Havana (kayıp, kazanç) | kronoloji_ispanya.js maddeleri taşı (1762-08-13 Havana'nın düşüşü; 1763-02-10 Paris) |
| 1763-11-03 | New Orleans | Fontainebleau 1762-11-03; gün **ayrı bir yıl** (1763-11-03) dayanaksız; ayrıca New Orleans `ispanya` iken Biloxi/Mobile/Natchitoches `yeni-ispanya`'da — aynı olay, iki künye, iki gün: tek künye + tek gün |
| 1704-08-04 | Cebelitarık (Gibraltar) | kronoloji_ispanya.js taşı; Utrecht'te (1713-04-11) hukuken devir ayrı madde (evrendeki Utrecht maddeleri Gibraltar'ı anmıyor) |
| 1714-03-07 | Como | Rastatt maddesinin `yer:`ine Como ekle (yer_id Milano) |

Valilik paylaşımı (haritada görünmeyen künyeler) — **sahiplik hatası** (ölçerle, 1819-2016 aralığındaki kayıp günlerinin listesinden ve yerleşim sahipliğinden):
- `ispanyol-peru` künyesi (1542-11-20→1824-12-09) şu yerleşimleri 1542'den bağımsızlığa dek taşıyor: Bacatá, Cartagena de Indias, Cali, Panamá, Portobelo, Quito, Guayaquil, Riohacha, Santa Marta, Barbacoas, Arauca (→ **Yeni Granada 1739**); Caracas, Maracaibo, Valencia, Mérida, Barinas, Calabozo, Carora, Guanare, Nuestra Señora de Caraballeda (→ **Venezuela Genel Kaptanlığı 1777**); Potosí, La Paz, Cochabamba, Oruro, Tarija, Santa Cruz de la Sierra, Salta/Tucumán bölgesi (→ **Río de la Plata 1776**); Santiago, Concepción, Valparaíso, La Serena, Rancagua, San Felipe, Copiapó (→ Şili Genel Kaptanlığı). Her biri için künye tarihi var (a tablosu).
- `ispanya` künyesi Buenos Aires, Córdoba, Corrientes, Santa Fe, Asunción, Montevideo, Colonia'yı 1580-1810 tutuyor (→ Río de la Plata 1776-1810), Manila/Cebu (→ İspanyol Filipinleri künyesi), Havana/Küba (→ İspanyol Küba), St. Augustine (→ İspanyol Florida), Santo Domingo (→ İspanyol Santo Domingo) — **8 künye boyalı değil**. `harita:` boya anahtarı bu künyelerde ölçülmedi.
- Etki: Değişmez 2 bakımından valilik değişimleri (1739, 1776, 1777, 1818) haritada kırılma olarak görünmüyor; kronoloji maddesi bu yüzden yok.
- Yerleşim sayısı: `ispanya` en geniş 1635'te 154; Yeni İspanya 1787'de 82; Peru 1794'te 76; **Meksika'nın kuzeyi** (Santa Fe, Taos, Albuquerque, Tucson, San Diego, Monterey, San Francisco, Los Angeles) `yeni-ispanya`'da (1610-1821) — doğru. **Louisiana/Biloxi/Mobile/St. Louis** `yeni-ispanya` 1762'den (Fontainebleau 1762-11-03) — ama fiilî İspanyol egemenliği 1769 (O'Reilly); `louisiana` künyesi ayrı (Fransız/İspanyol, 1682-1803) — çifte kayıt riski: **ölçülemedi** (louisiana künyesi bu oturumda incelenmedi).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` — 8 boş sömürge künyesinin kaderi: ya yerleşimlere `s:{d:"<künye id>"}` dönemleri yazılır (Yeni Granada 1739-08-20→1819-12-17, Venezuela 1777-09-08→1821-06-24, Río de la Plata 1776-08-01→1810-05-25, Şili 1541-?→1818-02-12, Kuba 1511-08-15→1898-12-10, Santo Domingo, Florida 1565-09-08→1821-07-10, Filipinler 1565-04-27→1898-12-10) ve `ispanya`/`ispanyol-peru` dönemleri buna göre kısaltılır, ya da künyeler kaldırılır. Her adımda `renkler.py BOYALAR` / `harita:` anahtarı kontrol (tuz dosyası: Emre onayı).
2. `data/yerlesimler*.js` — `Santo Domingo` ilk `s:` f `1496-01-01` → `1496-08-05` kaynakla (**kaynak okunmadı** — yazmadan önce RAH/Britannica «Santo Domingo»).
3. Evrene taşınacak mevcut maddeler: kronoloji_ispanya.js satır 676 (1810-05-25), 770 (1898-12-10), 1824-12-09, 1762-08-13, 1763-02-10, 1704-08-04, 1580-08-25 (kronoloji_portekiz.js:334), 1659-11-07; devletler.js:10925-10932 (İspanya İç Savaşı 8 madde) + devletler.js:1740-1741 (1936-07-17, 1939-04-01). `yer_id` boşsa doldur.
4. `Restauração` maddesi (evrende `1641-01-01`) → `1640-12-01`.
5. `ispanyol-filipinler` f `1565-01-01` → `1565-04-27`; `ispanyol-kuba` f `1511-01-01` → `1511-08-15`; `rio-de-la-plata-valiligi` f `1776-01-01` → `1776-08-01`; `yeni-granada-valiligi` iki dönem veya f=1739 (kaynak doğrulanınca); `ispanyol-florida` f gözden geçir (Jülyen + keşif ≠ egemenlik); `sili-kaptanligi` f (Vikipedi tek dayanak: akademik kaynak okunmalı).
6. New Orleans: `1763-11-03` → 1762-11-03 (ya da 1769 fiilî); Biloxi/Mobile ile aynı künye.
7. Eksik 1811/1818/1819/1821/1822/1825/1632 maddeleri — kaynak okuyan başka oturum yazsın (c'deki liste).
8. `Cartagena de Indias, Santa Marta` 1821-10-01 ve `Guayaquil` 1822-05-24: gerçek gün/özerklik tarihleri sorgula (Guayaquil 9 Ekim 1820 bağımsızlık).
9. `Melilla`: atlas yerleşim f `1497-01-01` ile maddesi arasında 259 gün: yerleşim günü madde gününe eşitlenmeli.

## Erişilemeyen kaynaklar
- Cambridge History of Latin America vol.1-3 (Bethell) — valilik kuruluşları (1535, 1739, 1776, 1777), Mendoza'nın göreve başlama günü, Şili Kaptanlığı, bağımsızlık günleri (Paraguay 1811, Şili 1818, Panama 1821). Sorular: «Yeni Granada Valiliği kesin kuruluş günü?», «Şili Genel Kaptanlığı resmî tarih?», «Paraguay'da egemenlik hangi gün İspanya'dan koptu?».
- Britannica (WebFetch 403): «Spanish-American War», «Fort Ross» değil bu dosyada; «Granada», «Battle of Ayacucho», «Treaty of Paris (1898)».
- TDV «Gırnata», «Mûsâ b. Nusayr», TDV «Endülüs» sonrası 59.000 karakter okunmadı.
- Collins, R., *Spain: An Oxford Archaeological Guide* gerekmedi; Kamen, H., *Spain 1469-1714* / Elliott, J.H., *Imperial Spain* — 1479 birleşmesinin hukukî niteliği (kişisel birlik), 1700 Bourbon geçişi.
- DBE (Real Academia de la Historia) tek tek biyografiler: sorular «Colón, Santo Domingo kuruluş günü»; sayfa açılamadı.
