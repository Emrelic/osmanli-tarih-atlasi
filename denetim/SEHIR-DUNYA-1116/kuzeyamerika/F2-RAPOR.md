# F2 KUZEY AMERİKA — RAPOR (17 Kasım 2026) — KISMİ

Çıktı: `data/sehir_tarihce_kuzey_amerika_1.js` (19 şehir, 5 sahiplik dönemi, 23 olay; `denetle` çıkış 0, ihlal 0, uyarı 14 = "ilk.t atlas başlangıcına eşit/sonra").
Hedef 60-80 şehir idi; **19 yazıldı** (kalan: ayrıntı aşağıda). Kaynak okunamayan hiçbir şehir yazılmadı.

## Yazılanlar
Santa Fe, Québec, Montréal, Halifax, New Orleans, San Antonio, Houston, Laredo, Savannah, Detroit, St. Louis, Charleston (SC), Washington D.C., Philadelphia, Boston, Ciudad de México (Tenochtitlán), Teotihuacan, Chichén Itzá, Oaxaca.

## Kaynak yöntemi
Sayfa gövdesi `urllib` ile alınıp düz metne çevrildi, `tanik` alıntıları sayfa metninde alt-dizgi olarak denetlendi (Handbook of Texas, DCB, Georgia Encyclopedia, SC Encyclopedia, NPS, UNESCO, AOC, LoC/Padover, tüm tam gövde). Britannica `urllib`'e 403 verir; gömülü tarayıcıda tam gövde okundu (tarayıcıda okunan alıntılar otomatik alt-dizgi denetimine girmedi, elle kopyalandı). Canadian Encyclopedia ve White House Historical Association 403 → kullanılamadı.

## Atlas düzeltme önerileri
| şehir | atlas | kaynaklı | kaynak |
|---|---|---|---|
| Charleston SC | 1670-04-15 ingiltere | 1670 yerleşimi Ashley Nehri batı kıyısında; yarımadaya "by 1680" taşındı | SC Encyclopedia «Charleston» |
| Teotihuacan | -0099-01-01 | şehir MS 1.-7. yy (vadi iskânı MÖ olabilir) | UNESCO 414 |
| Montréal | 1642-05-17 | DCB yalnız 18 Mayıs 1642 (ilk yüksek ayin) verir; 17 Mayıs kaynaksız | DCB Maisonneuve |
| Detroit | 1701-07-24 | DCB yalnız "summer of 1701"; 24 Temmuz DCB'de yok | DCB Cadillac |
| Halifax | 1749-07-02 | DCB 21 Haziran 1749 varış, 14 Temmuz konsey; 2 Temmuz DCB'de yok | DCB Cornwallis |
| St. Louis | 1764 yeni-ispanya | NPS 14 Şubat 1764; sahip 1764'te Fransız Louisiana idi, İspanyol idaresi 1769-70 — bu oturumda kaynaktan OKUNMADI, F3'te kaynaklanmalı | — |
| New Orleans | — | Britannica: 1763 Paris'te İspanya "received"; fiilî idare tarihi okunmadı | Britannica |
| Laredo, Boston, Philadelphia | atlas günü (1755-05-15, 1630-09-07, 1682-11-06) | kaynak yalnız yıl verir; atlas günü doğrulanmadı | TSHA / Britannica |
| Lapwai, Los Adaes, Nemaska | atlas konumu | **ÖLÇÜLMEDİ** (bu kısmi turda yazılmadı) | — |

## Koordinat (GeoNames cities5000.zip, 5,7 MB, download.geonames.org/export/dump, scratchpad'de ayrı klasör, depoya GİRMEZ)
F1 koordinatları 17 yazılan şehirde GeoNames'e göre 0,0-1,8 km sapma (Montréal 1,8; Oaxaca 1,4; Savannah 0,9) — hepsi < 3 km, GeoNames değeri 3 hane ile dosyaya yazıldı. Teotihuacan/Chichén (şehir listesinde yok) F1 değerinde kaldı, ölçülmedi.

## Yazılamayanlar ve sebebi
- Kalan ① listesi (eyalet/vilayet başkentleri), ③ (Cahokia, Onondaga, Werowocomoco, Tzintzuntzan, Texcoco, Tlacopan, Tlaxcala, Mayapán, Calakmul, Monte Albán), ④ (HBC karakolları): zaman/bağlam bütçesi yetmedi; Cahokia ve Monte Albán için UNESCO sayfaları başlangıç yılı VERMİYOR (yalnız zirve 1050-1150 / "1.500 yıl") — başlangıç yazılamadı. Calakmul UNESCO "12 yüzyıldan fazla" der, başlangıç yılı yok.
- Britannica sayfaları şehir ana maddesinde tarih içeren tarih bölümünü ayrı `/History` sayfasında tutuyor (Philadelphia, New Orleans, Mexico City'de işe yaradı); Detroit, Quebec, Montréal için bu URL 404 — başka kaynak gerekti.
- Canadian Encyclopedia 403.

## F3 önerisi
Yazılan 19 şehir için kronoloji örtüşmesi; özellikle New Orleans 1763/1769, St. Louis 1764-70, Québec 1629-32 İngiliz dönemi, Charleston 1670/1680 için atlas zinciri ölçülmeli. İndirilen: yalnız `cities5000.zip`.
