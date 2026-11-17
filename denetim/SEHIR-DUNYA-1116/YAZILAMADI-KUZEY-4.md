# YAZILAMADI / KALAN — Kuzey Avrupa F2 parti 4 (Britanya + İrlanda; UMIT, 17 Kasım 2026)

Evren: `BORC-GUNCEL-UMIT.tsv`, blok=kuzey-avrupa, eklenen boş, durum=BORC, ülke Birleşik Krallık/İrlanda → **63 satır** (ölçüldü: BK 49, İrlanda 14).
Yazıldı: **12** → `data/sehir_tarihce_kuzey_avrupa_4.js` (denetle çıkış 0, ihlal 0, uyarı 8).

## Ön kontrol (tarihce_var, iki yönlü)
63 satırın hepsi için yerel `data/sehir_tarihce_*.js` + `origin/main` `data/sehir_tarihce_*.js` (git show; 81 main dosyası,
2927 kayıt), ad / atlas_ad / adlar[] normalleştirilmiş eşleşme + ≤10 km: **gerçek eşleşme 0**. Yalnız ad çakışması
(binlerce km uzak, farklı şehir): Perth (Avustralya), York→toronto-ca (adlar[]'da 'York'), Lincoln/Lancaster→lincoln-us,
Plymouth→plymouth-us, Worcester→worcester-za.
(Londra, Edinburgh, Dublin bu 63'te yok: TSV'de KAYIT VAR.)

## Denenip yazılmayan (5)
- **Manchester**: Britannica ana ve 'Evolution of the modern city' sayfaları Roma Mamucium'u tarihsiz verir; en erken tarihli
  tanık 16. yy 'market borough'. Domesday/Antonine Itinerary okunmadı → ilk kurulamadı.
- **Lincoln**: Britannica 'Lincoln-England' sayfası madde değil, iki kesik özet (…) içeriyor ve özetler çelişiyor
  ('By 71 CE ... colonia' ↔ 'By the year 98 Lincoln and Gloucester had joined Camulodunum as coloniae') → tanık alınmadı.
- **Exeter**: Britannica Roma Isca Dumnoniorum'u tarihsiz verir (Dumnonii merkezi, tarihsiz); ilk tarihli anılış 877 olur
  ama daha erken tarihsiz yazılı tanık var → 'ilk' kurulamadı (Ptolemaios okunmadı).
- **Cardiff**: Britannica 'The Romans built a small fort there in the 1st century CE' — yalnız yüzyıl; atlas 43 roma-imp ile
  aynı yüzyıl, güvenli uç (100) atlası yanlış yere çekerdi; 'continuous existence' 11. yy Normanlarla → __YOK__ arası
  kaynaklı ama tarih yok. Ertelendi.
- **Nottingham**: ASC A.D. 868 'the army went into Mercia to Nottingham' (Avalon) ilk tanık olurdu; ama zincir
  mercia → (877 Mercia bölüşümü, Nottingham'ın hangi tarafa düştüğü kaynakta yok) → danelaw → wessex (Edward, ASC 10. yy
  okunmadı) → ingiltere geçişleri çıkarım ister → yazılmadı.

## Denenmeyen (46) — süre
BK: Perth, Stirling, Oxford, Canterbury, Winchester, Shrewsbury, Portsmouth, Southampton, Hastings, Caernarfon, Dumfries,
Leeds, Bath, Chester, Durham, Lancaster, Carlisle, Worcester, Gloucester, Lindisfarne, Iona, Scone, Falkirk,
Berwick-upon-Tweed, Windsor, Hereford, Rochester, Colchester, Conwy, Harlech, Pembroke, Kirkwall, Northampton, Warwick,
Tamworth, Whitby, Derby (37).
İrlanda: Wexford, Donegal, Drogheda, Sligo, Tralee, Kinsale, Queenstown (Cobh), Dún Laoghaire, Tipperary (9).
Not: Leeds atlas noktasında s/d/v dönemi YOK (ölçüldü: ilk sahip None) — atlas tarafı ayrıca incelenmeli.

## Açık karar noktaları (bu partiden)
- **glasgow-gb**: Strathclyde → İskoçya 1018 (Britannica 'Strathclyde') ↔ 1034 (Britannica 'Scotland — unification');
  aynı yayıncı, bağımsız teyit yok.
- **belfast-gb**: 668 'Fertas' muharebesi (AU) Belfast geçidi mi — okunmadı; doğrulanırsa ilk < 1000 ve atlas uyarısı düşer.
- **limerick-ie**: Britannica 'early 9th century' Norse yağması yılsız; AU 800-921 taranmadı.
- **cork-ie / derry-gb**: 821/546 → 1000 sahibi beyanlı __BOSLUK__ (Münster/Norse; Cenél nEógain) — akademik kaynak gerekir.
- **kilkenny-ie**: künye yok 'osraige' (Osraige krallığı) — künye açılmalı ya da 'irlanda' künyesinin kapsamı netleşmeli.
- **waterford-ie**: kuruluş '9th century' → 900; künye waterford-norse f 914 (hayalet uyarısı).
- 1707 / 1801 / 1922 geçişleri bu partideki hiçbir zincire düşmedi (zincirler atlas başlangıcında, ≤1281, bitiyor) —
  kaynaklı gün araması yapılmadı.
