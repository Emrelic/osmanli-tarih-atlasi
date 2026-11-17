# KUZEY AMERİKA — `bugun_var` + eksik modern merkezler (17 Kasım 2026)

Çıktı: `LISTE.tsv` (15 sütun; son iki sütun `bugun_var` ∈ {E,H,D,?} ve `bugun_ad`). Sütun sayısı 935 satırın hepsinde 15 (py ile doğrulandı); id'ler tekil.
Her satırın kararı `kaynak` sütununun sonunda ` | bugun: ...` ile gerekçelidir.

## Sayılar
- Toplam: **934 veri satırı** = mevcut 642 (silinen yok) + eklenen **292**.
- Mevcut 642: **E 517 · H 81 · D 27 · ? 17.**
- Eklenen 292: **E 292** (bölge merkezi/100 bin üstü şehir; hepsi bugün var).
- Eklenen, ülke bazında: ABD 197 · Meksika 59 · Kanada 34 · Bermuda 1 (Hamilton) · Saint-Pierre ve Miquelon 1 (Saint-Pierre). Kat: 290 satır kat 3, 2 başkent (Hamilton, Saint-Pierre) kat 2. Eyalet/eyalet-bölge başkentleri ve ülke başkentleri (ABD 50+DC, Kanada 10+3+Ottawa, Meksika 31+CDMX) zaten listede vardı; eksik başkent yalnız bu ikisiydi.
- `atlas_aday` (≤3 km, `data/yerlesimler*.js` yalnız okundu): mevcut 642'de dolu 387 · boş 255 (değişmedi); eklenen 292'de dolu 8 · boş 284.

## Yöntem ve kaynak
- E (mevcut satırlar): `ad_modern` ile GeoNames cities500 kaydı (ad/asciiname/alternatif ad) ≤15 km eşleşmesi (465 satır); küçük yerler için GeoNames ülke dosyasında PPL* (PPLQ/PPLH/PPLX/PPLW hariç) kaydı ≤12 km ya da etkin kurum kaydı (INSM/CH/AREA/RESV/PRK) elle (7 satır).
- H (81): arkeolojik alan, terk edilmiş/yeniden inşa edilmiş kale-misyon-ticaret merkezi, sular altında kalan yer (Celilo, Fort Colvile, Fort Nez Percés); yanında GeoNames ANS/RUIN/HSTS/PRK/PPLL kaydı varsa gerekçede yazılıdır.
- D (27): ad ve/veya yer değişti; güncel karşılık `bugun_ad`da (ör. Cape Dorset → Kinngait, Hall Beach → Sanirajak, Fort Dauphin → Dauphin, Fort Stanwix → Rome, Chicoutimi → Saguenay).
- **Dürüst sınır:** H ve D kararlarının çoğunda GeoNames yalnız "orada bugün yerleşim yok/başka ad" yönünde dolaylı kanıt veriyor; NPS / Parks Canada / INAH / UNESCO / Britannica sayfaları **okunmadı** (brifteki düzeltme: yalnız sayfa okuma izni, tarayıcı oturumu bu görevde kullanılmadı). Bu satırların gerekçesinde "sayfa okunmadı, F2'de resmî kaynakla teyit" yazılıdır. E kararları GeoNames kaydına dayanır (yerleşimin bugün var olduğu); alan adının "değişmemiş" olması GeoNames ad eşleşmesiyle ölçüldü. Vikipedi dayanak olarak kullanılmadı.
- Eksik merkezler: GeoNames cities500'de nüfus ≥ 100 000 ve PPL/PPLA/PPLA2/PPLA3/PPLC (≈541 kayıt) − listede olanlar (ad/ön ek eşleşmesi ≤15 km) − alt birimler. Koordinat GeoNames'ten (4 hane). `kat_dayanak`="bugunku bolge merkezi (Emre 17 Kasim 2026)". Britannica okunmadı. Nüfus GeoNames değeridir (belediye/şehir ayrımı güvenilir değil; Meksika'da belediye nüfusu olabilir).
- Atlanan 53 aday: listede zaten var (ör. Greater Sudbury, Tuxtla, Pachuca de Soto, Xalapa de Enríquez, Heroica Matamoros, Acapulco de Juárez, Zamora de Hidalgo, Lexington-Fayette, Vancouver WA → Fort Vancouver D satırı vb.: 16), Saguenay (Chicoutimi D satırının güncel karşılığı) ve alt birim/semt/CDP/eski belediye: Etobicoke, Gloucester, Nepean, Ottawa South, Orléans, Dartmouth, Thornhill, Saint-Louis-de-Terrebonne, Zumpango, Xico, San Pablo de las Salinas, Miramar, Ciudad López Mateos, Tepexpan, Ojo de Agua, Buenavista, Meads, Metairie, East Chattanooga, Cypress, Brandon, East Hampton (VA), North Stamford, North Peoria, Tempe Junction, East Los Angeles, Valencia, Enterprise, Paradise, Spring Valley, Sunrise Manor, NYC ilçeleri (Bronx, Brooklyn, Manhattan, Queens, Staten Island) ve New York City / Washington / Mexico City (listede). Bu CDP'ler (Paradise, Metairie vb.) 100 bin üstü ama belediye değil; Emre isterse eklenir.
- Yeni satır id'leri `ad-ülke` kalıbında; ad çakışmasında `ad (bölge)` (ör. Burlington (Ontario), Guadalupe (Nuevo León)).

## '?' satırlar (17) ve sebebi
Teyit edemedim, E demedim:
- washington-on-the-brazos-us — GeoNames'te PPL (0,7 km) ama topluluk fiilen eyalet tarihî alanı; yaşayan yerleşim mi alan mı belirsiz.
- fort-mohave-us — GeoNames'te yalnız PRK (Fort Mojave); yerleşim kaydı yok.
- canyon-de-chelly-us — GeoNames kaydı yok; kanyon/NPS alanı, yerleşim statüsü belirsiz.
- fort-halkett-ca, fort-ware-ca, lesser-slave-lake-house-ca, fort-reliance-ca, kittigazuit-ca, big-trout-lake-ca, lac-seul-ca, fort-caniapiscau-ca, fort-mckenzie-ca, batoche-ca, fort-selkirk-ca — GeoNames kaydı yok ya da yalnız PPLL/STNM; bugünkü yerleşim durumu (terk/mevsimlik/yaşayan) CGNDB/Parks Canada sayfası okunmadan belirlenemedi.
- potonchan-mx — yer konumu tartışmalı; GeoNames kaydı yok.
- mision-santa-gertrudis-mx — GeoNames PPL (Misión Santa Gertrudis la Magna) var ama yerleşimin sürekliliği teyitsiz.
- san-javier-biaundo-mx — GeoNames kaydı yok.
(Not: 17 `?` satırın tam listesi LISTE.tsv'de `bugun_var=?` ile süzülür.)

## İndirilen dosyalar (UYARI: sonradan gelen düzeltmeden ÖNCE indirildi)
Brifteki ilk cümle indirme iznini veriyordu; görev sürerken koordinatör "indirme izni yok" düzeltmesini gönderdi. O ana kadar indirilmiş olanlar (hepsi `download.geonames.org/export/dump/`, oturum scratchpad'inde `.../scratchpad/gn/` klasöründe, ham dosya depoya GİRMEDİ, çalıştırılmadı, `py -I -X utf8` ile yalnız okundu):
- cities5000.zip 5 729 559 B · cities500.zip 13 933 290 B · US.zip 71 109 763 B · CA.zip 8 118 443 B · MX.zip 15 121 994 B · PM.zip 20 810 B · BM.zip ≈24,8 KB · admin1CodesASCII.txt 151 571 B.
- Düzeltmeden sonra yeni indirme yapılmadı. Kullanılan: cities500, admin1CodesASCII, US/CA/MX ülke dosyaları (yakın kayıt aramak için). Kullanımın kapsamı konusunda koordinatör karar versin; istenirse bu verilere dayanan sütunlar yeniden hesaplanır (betikler scratchpad'de: `bin/eslestir.py`, `tam.py`, `eksik2.py`, `kur.py`).
- Hiçbir web sayfası/API okunmadı; CAPTCHA/Anubis karşılaşılmadı.

## Belirsizlikler
- E kararı "bugün aynı yerde yerleşim var" demektir; yerleşimin 1900-öncesi sahasıyla bugünkü yerinin birebir aynı olması (ör. Fort Wayne, Kaskaskia, Oraibi) GeoNames ≤15 km eşleşmesiyle ölçüldü, mikro-ölçekte teyit edilmedi.
- Koordinatı ±0,02° elle girilmiş eski satırlarda 3 km üstü kayma olabilir; E kararı koordinattan değil ad+yakınlıktan verildi.
- Churchill (Prince of Wales Fort) E: kasaba var, fort kalıntısı karşı kıyıda (kale H sayılırdı).
