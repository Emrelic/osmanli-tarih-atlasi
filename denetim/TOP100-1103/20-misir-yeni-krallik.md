# 20 · Mısır Yeni Krallık — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 03.11.2026

## Özet
- Künye: ana `misir-yeni-krallik` (-1549 → -1068) + bitişik 3 künye (hiksos-15, tebai-17-hanedan, misir-3-ara). Ölçer: yerleşim 0, kırılma 0, açık kırılma 0.
- Yerleşim sayısı 0 = **haritada görünmüyor**. Mısır'ın MÖ'ki yerleşimlerinin hepsi `s:[]`, `bit:"1281-01-01"` (Tanis, Avaris, Itj-tawy, Bubastis, Sais…); Uksur'un `s:` zinciri 1281'de başlıyor. Boyama için `renkler.py BOYALAR`da `misir-yeni-krallik` tanımlı (arac/renkler.py:952) ama kullanan nokta yok.
- Evren (olaylar*.js + kronoloji_sinir*.js) kronolojisi bu devlet için zengin: 17 madde var. Üç bulgu: (1) başlangıç için iki ayrı madde, 20 yıl farkla (-1569 TDV ve -1549 Shaw), (2) hiksos-15 `t:-1549` Ahmose'nin tahta çıkışına bağlı, ama Avaris'in düşüşü (~MÖ 1532) atlasın kendi maddesinde -1529; (3) Kerma `__BOSLUK__` -1499/-1079 için "ABİ MERKEZ adayı: misir-yeni-krallik" borcu duruyor.
- Eksik evren maddesi: ~7 öneri (Hatşepsut, II. Ramses'in tahta çıkışı/Pi-Ramesses, Tutankhamun-Horemheb restorasyonu, III. Ramses suikastı/Herihor vb.) — hepsi kaynak okuması ister (aşağıda).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| misir-yeni-krallik | Mısır Yeni Krallık (18.-20. Hanedan) | -1549-01-01 | -1068-01-01 | ANA künye. renk var (renkler.py:952), yerleşim 0 |
| hiksos-15 | Hiksos (15. Hanedan) | -1649-01-01 | -1549-01-01 | öncül (devletler.js:19039) |
| tebai-17-hanedan | Tebai 17. Hanedan | -1649-01-01 | -1549-01-01 | öncül, Hiksos'la eşzamanlı |
| misir-3-ara | 3. Ara Dönem (21.-25. Hanedan) | -1068-01-01 | -0663-01-01 | ardıl (devletler.js:19058) |
| misir-orta-krallik | Orta Krallık | -2054 | -1649 | önceki evre (kapsam dışı, sınır komşusu) |
| kerma / kerma-erken | Kerma | — | — | Yeni Krallık'ın Nubya'daki rakibi/işgal konusu |

Eksik parça: yok (18., 19., 20. Hanedan tek künyede birleşik; çoğu kaynak da tek "Yeni Krallık" alır). Bölünmesi gereken bir şey yok. Ancak künyenin `kronoloji:[]` içindeki 6 madde evren dışıdır (devletler.js:19050-19057); evrende karşılığı olanlar c)'de eşlendi.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | -1549-01-01 (MÖ 1550) | Shaw (ed.), *Oxford History of Ancient Egypt*, 2000: XVIII. Hanedan MÖ 1550 (atlasın olaylar_antik_misir_nubya.js:66 alıntısı; ben ciltten okumadım — dolaylı) | TDV «Mısır»: «XVIII. hânedanın kurulmasıyla yeni krallık dönemi (m.ö. 1570-1200)» (islamansiklopedisi.org.tr/misir, okundu 03.11.2026) | **ÇELİŞKİ 20 yıl.** İki kronoloji okulu; TDV 1570. Künye -1549'u koruyor. Livius (yol göstericidir, dayanak değil): Ahmose 1540-1515. Öneri: f=-1549 KALSIN, çelişki `ic_not_f`'de iki kaynağıyla beyanlı olsun (şu an yalnız `kronoloji_sinir_antik3_1024.js:8` ic_not_t'sinde var, künyede yok). |
| t | -1068-01-01 (MÖ 1069) | Shaw 2000 / Malek: XX. Hanedan sonu MÖ 1069 (web araması özeti, Wikipedia tablosu üzerinden — dayanak sayılmaz; Shaw'ın kendisi okunmadı) | Livius «Pharaoh»: «Twentieth dynasty (1188-1069)», XI. Ramses 1098-1069 (okundu, yol gösterici) ; Met «Third Intermediate Period 1070-712» (atlas künyesi alıntılıyor; bu oturumda Met 429 verdi, çekilemedi) | MÖ 1069 ± 1 yıl; kronoloji okulu farkı. TDV "çöküş dönemi MÖ 1200-1085" der — farklı bir sınıflama. Öneri: t=-1068 KALSIN; ikinci akademik kaynak (Met/UCL) ERİŞİLEMEDİ → Erişilemeyen kaynaklar. |
| hiksos-15 t / misir-yeni-krallik f çakışması | hiksos-15 t = -1549 = yeni-krallık f | atlas olaylar_arkeoloji_d3-misir-afrika.js:88-98: Avaris'in düşüşü ~MÖ 1532 (Shaw 2000; Bruins & van der Plicht 2025 PLoS ONE tablo) | atlas olaylar_antik_misir_nubya.js:65: Ahmose Avaris'i aldı = -1529 («MÖ 1530 civarı») | Hiksos Avaris'i Ahmose'nin tahta çıkışından ~17-20 yıl sonrasına kadar elinde tuttu. Künye t=-1549 yanlış değil ama "Hiksos'un sonu" değil "Ahmose'nin tahta çıkışı"dır. Öneri (ikinci kaynak Bietak/Shaw okunduktan sonra): hiksos-15 `t:-1529-01-01` + ic_not; yeni-krallık f -1549 kalır (hanedan başı). Haritayı etkilemez (yerleşim yok). Bu madde "kaynak gerek" olarak işaretli. |

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar:
| tarih | madde | dosya:satır | not |
|---|---|---|---|
| -1649 | Mısır ikiye bölündü (Hiksos/XVII) | olaylar_antik_misir_nubya.js:67 | Orta→Hiksos sınırı |
| -1549 | I. Ahmose tahta çıktı, Yeni Krallık başladı | olaylar_antik_misir_nubya.js:66 (Shaw) | künye f ile uyumlu |
| **-1569** | XVIII. Hanedan kuruldu (TDV 1570) | kronoloji_sinir_antik3_1024.js:8 | **İKİNCİ BAŞLANGIÇ MADDESİ, 20 yıl fark.** Okuyan iki ayrı kuruluş görür. Öneri: biri `ic_not`'a düşürülüp tek madde kalsın (veya -1569 maddesi "TDV sayımı" etiketiyle tek madde yapılıp -1549'a bağlansın). Karar: -1549 asıl, -1569 madde kaldırılsın/birleştirilsin. |
| -1529 | Ahmose Avaris'i aldı, Şaruhen | :65 | hiksos-15 t için düzeltme bağı |
| -1524 | Ahmose Aşağı Nubya seferi | :64 | |
| -1505 | I. Tutmosis tahta çıktı (TDV 1506) | kronoloji_sinir_antik3_1024.js:9 | sınır maddesi |
| -1498 | I. Thutmose Fırat'a ulaştı | :63 | |
| -1456 | III. Thutmose Megiddo | :62 | |
| -1446 | III. Thutmose Fırat'ı geçti | :61 | |
| -1424 | II. Amenhotep Napata stelleri | :60 | |
| -1374 | IV. Amenofis tahta çıktı (TDV) | antik3_1024.js:10 | -1347 Akhetaten maddesi ile 27 yıl fark (TDV vs Livius) — iki ayrı olay (tahta çıkış / başkent) sayılabilir ama TDV sayımı vs Shaw sayımı farkı beyanlı |
| -1347 | Akhenaton Akhetaton'a taşındı | :59 | |
| -1339 | Amarna'da Suriye hâkimiyeti çözüldü | :58 | |
| -1293 | I. Seti Kenan-Lübnan seferi | :57 | |
| -1273 | Kadeş Savaşı | :56 | |
| -1258 / -1269 | «Ebedî Antlaşma» | :55 ve antik3_1024.js:11 (TDV MÖ 1270) | iki madde, aynı olay, 11 yıl fark (Shaw MÖ 1259 / TDV 1270): ÇİFT MADDE — birleştir veya beyanla |
| -1208 | Merneptah Libya ittifakını yendi | :54 | |
| -1176 | III. Ramses Deniz Kavimleri | :53 | |
| -1068 | Yeni Krallık sona erdi | :52 | künye t ile uyumlu |
| -0663 | Asurbanipal Teb'i yağmaladı | olaylar_antik_yakin_dogu.js:74 | ardıl evre |

Eksik madde önerileri (hepsi **yaklaşık/onyıl** hassasiyeti; kaynak okuması başka makinede):
```
{ t:"-1478-01-01", kesinlik:"onyil", b:"Hatşepsut III. Thutmose'un naipliğini bırakıp firavun sıfatıyla hükmetti", gun:"MÖ ~1479 (Shaw: yaklaşık)", yer_id:"Uksur (Luksor)", tur:"siyaset", kaynak:"Shaw 2000 kronoloji tablosu — ERİŞİLEMEDİ, doğrulanacak" }
{ t:"-1278-01-01", kesinlik:"yil", b:"II. Ramses tahta çıktı; Pi-Ramesses başkent oldu", gun:"MÖ ~1279", yer_id:"Avaris (Tell el-Dab'a)", kaynak:"Shaw 2000; Kitchen, Pharaoh Triumphant — ERİŞİLEMEDİ" }
{ t:"-1331-01-01", kesinlik:"onyil", b:"Tutankhamun Amon kültünü ve Teb'i yeniden başkent yaptı (Amarna dönemi sona erdi)", gun:"MÖ ~1332", yer_id:"Uksur (Luksor)", kaynak:"Met 'Egypt in the New Kingdom' — Met 429 verdi, ERİŞİLEMEDİ" }
{ t:"-1154-01-01", kesinlik:"yil", b:"III. Ramses harem suikastı (Turin Yargı Papirüsü); XX. Hanedan'ın gerilemesi", gun:"MÖ 1155", yer_id:"Uksur (Luksor)", kaynak:"Shaw 2000 / Breasted AREgypt c.4 — ERİŞİLEMEDİ" }
{ t:"-1079-01-01", kesinlik:"onyil", b:"Herihor Teb'de Amon başrahibi olarak Yukarı Mısır'ı fiilen yönetti (Wenamon dönemi); Nubya Mısır idaresinden çıktı", gun:"MÖ ~1080", yer_id:"Uksur (Luksor)", kaynak:"atlas olaylar_arkeoloji_d3-misir-afrika.js:50 'Egyptian Occupation 1480-1080' + Breasted AREgypt c.4" }
```
Not: -1068 maddesi zaten Herihor/Smendes ayrışmasını anlatıyor (:52); Nubya çekilişi -1079/-1080 için ayrı madde, Kerma `__BOSLUK__` kapatılırken zaten gerekecek.

## d) Harita uyumu
- Açık kırılma: **0**. Kırılma: 0. Yerleşim: **0 → haritada görünmüyor.**
- Neden: Eski Mısır yerleşimlerinin `s:` zinciri başlamıyor (`bit:"1281-01-01"`, `bos:"veri-yok"`: Tanis, Itj-tawy, Avaris, Bubastis, Sais — data/yerlesimler_once1281_yt_afrika_levant.js:12-24). `Uksur (Luksor)` (data/yerlesimler_afrika.js:280) `s:` 1281-01-01'de memluk ile açıyor. Dolayısıyla künye + renk + 17 madde var, ama petek yok.
- Hangi yerleşimlere `s:` dönemi gerekir (öneri; her biri kaynakla yazılmalı, hepsi Değişmez 1 gereği var olduğu tarihte sahipli olmalı):
  1. Uksur (Teb/Waset) -1549 → -1068 `misir-yeni-krallik` — kaynak: olaylar_antik_misir_nubya.js:66 Shaw «Teb'de tahta çıktı». Başka yerlesimler de eklenmeden tek nokta boyama yapmaz; küme olarak: Asvan, Esna, Edfû (Yukarı Mısır, mevcut kayıtlar), Memfis (nokta var mı — ölçülmedi), Avaris/Pi-Ramesses (-1278 sonrası başkent), Tanis (-1068 ardıl).
  2. Nubya: Kerma kaydı (yerlesimler_afrika.js:868-869) `__BOSLUK__` -1499/-1079 BEYAN'ında "ABİ MERKEZ adayı: misir-yeni-krallik; kaynaklı doğrulama borcu". Kaynak: kerma.ch 'Classic Kerma 1750-1480' ve atlasın d3-misir-afrika.js:50-68 «Egyptian Occupation, 1480-1080 B.C.». Öneri: Kerma `s:` -1479 → -1068 `misir-yeni-krallik` (künye t -1068'e kıskaç; "1080" ile künye t arasında 12 yıl: aralık ya künye ömrüne kısılır ya da Nubya çekilişi -1079 ayrı dönem olur) + "ABİ MERKEZ: Uksur — Egyptian Occupation 1480-1080" beyanı. Bu madde -1079 Nubya çekilişi evren maddesini (yukarıda önerilen) gerektirir (Değişmez 2).
  3. Levant: Gazze (data/yerlesimler.js:884), Megiddo (yerlesimler_mo_zincir.js:22), Humus/Kadeş (yerlesimler.js:1676) için "Mısır hâkimiyeti" dönemleri (-1456 Megiddo; -1446 Naharin; -1293 Seti; -1273 Kadeş; -1258 antlaşma sınırı) — evren maddeleri hazır (:57-:62); ölçülmedi: bu noktaların `s:` zinciri MÖ'ye uzanıyor mu. Yerleşim hazır değilse yalnız Gazze/Megiddo için kısa dönemler.
- En geniş yılda sahiplik testi yapılamadı (yerleşim yok).

## Önerilen düzeltmeler (KASA için)
1. `data/kronoloji_sinir_antik3_1024.js:8` (-1569 XVIII. Hanedan): kaldır VEYA -1549 maddesine (`olaylar_antik_misir_nubya.js:66`) `ic_not` olarak TDV 1570 çelişkisini taşı; çift başlangıç maddesi bırakma.
2. `data/kronoloji_sinir_antik3_1024.js:11` (-1269 Kadeş antlaşması TDV) ile `olaylar_antik_misir_nubya.js:55` (-1258): aynı olay, çift madde — biri ic_not'a.
3. `data/devletler.js` `misir-yeni-krallik`: `ic_not_f` ekle (TDV 1570 vs Shaw 1550, çelişki iki kaynağıyla). t için ikinci akademik kaynak (Met/UCL) ekle.
4. `hiksos-15` `t`: -1549 → -1529 ÖNERİSİ (ikinci kaynak okunduktan sonra; Bietak/Shaw). Ayrı karar.
5. Kerma `s:` + -1079 Nubya çekilişi evren maddesi (yukarıdaki satır). Uksur `s:` dönemi için ayrı `yerlesimler_*` işi.
6. c)'deki 5 eksik madde: kaynaklar okunmadan EKLENMESİN.

## Erişilemeyen kaynaklar
- Met Museum «Egypt in the New Kingdom (ca. 1550-1070 B.C.)» https://www.metmuseum.org/essays/egypt-in-the-new-kingdom-ca-1550-1070-b-c — soru: Ahmose'nin Avaris'i alışı ve Yeni Krallık sonu için verdiği yıllar? (429 hatası, tekrar denenebilir)
- Met «Egypt in the Third Intermediate Period (1070-712 B.C.)» https://www.metmuseum.org/essays/egypt-in-the-third-intermediate-period-1070-712-b-c — soru: Yeni Krallık sonu ve Ramses XI-Smendes tarihi?
- UCL Digital Egypt chronology https://www.ucl.ac.uk/museums-static/digitalegypt/chronology/index.html (403) — soru: XVIII. Hanedan başı ve XX. Hanedan sonu yılları (MÖ 1550/1069)?
- Shaw (ed.), *The Oxford History of Ancient Egypt*, OUP 2000, kronoloji tablosu — soru: XVIII. Hanedan başı, Avaris'in düşüşü, XX. Hanedan sonu.
- Bietak, "Avaris, Capital of the Hyksos", British Museum 1996 / Bietak 2023 (Tell el-Dab'a) — soru: Avaris'in düşüşü hangi yıl, Ahmose'nin tahta çıkışından kaç yıl sonra?
- Kitchen, *Pharaoh Triumphant* (II. Ramses'in tahta çıkışı MÖ 1279) — soru: tahta çıkış yılı ve Pi-Ramesses'in başkent oluşu.
