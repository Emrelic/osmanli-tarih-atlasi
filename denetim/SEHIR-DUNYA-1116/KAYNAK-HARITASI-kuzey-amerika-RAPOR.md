# Aşama 0 — Kuzey Amerika kaynak haritası raporu (17 Kasım 2026)

Dal: `kaynak-haritasi-kuzeyamerika-1117`. Veri: `KAYNAK-HARITASI-kuzey-amerika.tsv` (114 satır). Ölçüm makinesi: bu worktree (Türkiye IP'si); urllib `py -I` + gömülü tarayıcı. Hiçbir dosya indirilmedi (yalnız sayfa/JSON okundu; USGS PP567 PDF'sinin ilk 1,5 MB'ı bellekte okunup atıldı).

## Sayılar
- Ülke: ABD 38 · Kanada 28 · Meksika 19 · Alaska 10 · Saint-Pierre-et-Miquelon 10 · Bermuda 9.
- Tür: ansiklopedi 34 · arşiv 25 · resmî gazetteer 19 · dergi 15 · müze/park 13 · yerel tarih 7 · tez 1.
- Tam gövde okunabiliyor: **E 45 / H 69** (%39). Erişim: urllib 65, gömülü tarayıcı 12 (+2 karma), engelli/okunamadı 35.
- "E" tam gövde = sayfa metni gerçekten alındı; dergi/arşiv satırlarında çoğu "H": arama/liste sayfası okunur, ama makale gövdesi PDF indirmesi (EMRELİC) ister.

## Engeller (aşılmaya çalışılmadı)
- Cloudflare doğrulaması: loc.gov, Chronicling America, HathiTrust, Library and Archives Canada, StatCan, UTP (Canadian Historical Review), Colmex (Historia Mexicana), revistas.unam.mx (tüm UNAM dergileri), Gallica, Cairn (tarayıcıda).
- Anubis (proof-of-work bot koruması): **Érudit** (RHAF, Histoire sociale…) ve HAL. Kanada Fransızca akademik kaynağın ana kapısı burası — bot doğrulaması sayıldığı için denenmedi; Emre karar versin.
- Radware/perfdrive CAPTCHA: INEGI (AHL, AGEEML, Cuéntame).
- Bölge engeli: Colorado Encyclopedia (CloudFront, TR IP).
- DNS/SSL/zaman aşımı: INAFED eski alan adı, INAH (502), PARES, Relaciones, Secuencia, Mexicana, historicas.unam.mx (SSL), VILDA (SSL), Archives SPM, Bermuda'nın bnt.bm, nationalmuseum.bm, Heritage NL, BAnQ (303 döngü), Commission de toponymie Québec (500), Chicago Encyclopedia.
- JS uygulaması (gövde yok): NARA Catalog, USGS GNIS arayüzü, NPGallery, THC Atlas, Redalyc arama, DPLA, OAC.

## Önceki bildirimlere göre doğrulamalar
- Handbook of Texas, DCB (EN/FR), Georgia, SC Encyclopedia, NPS: urllib tam gövde — doğrulandı.
- **Canadian Encyclopedia bu ölçümde urllib ile 200 verdi** (~63 bin kelime; EN/FR, arama dahil). Önceki 403 bu ölçümde tekrarlanmadı; kararsız olabilir, F2'de yeniden doğrula.
- Britannica urllib 403, gömülü tarayıcıda açılıyor — doğrulandı (Santa Fe, Oaxaca-Mexico, Hamilton-Bermuda, Saint-Pierre-and-Miquelon). Slug kuralı place/<Şehir>-<Ülke/Eyalet>; tahmin edilen slug'lar sık 404.
- UNESCO urllib 403, gömülü tarayıcıda açılıyor. NCpedia ve Oregon Encyclopedia da öyle (urllib 403, tarayıcı E).
- Eyalet ansiklopedileri (Virginia, Tennessee, Mississippi): urllib RemoteDisconnected, tarayıcıda açılıyor; ama bulanık slug yanlış girdiye yönlendiriyor — şehir girdisi için gerçek slug önce site aramasından bulunmalı.

## F2 için en verimli 10 kaynak (urllib tam gövde, şehir sorgu kalıbıyla)
1. Handbook of Texas — `https://www.tshaonline.org/handbook/entries/<sehir>-tx` (ör. san-antonio-tx, goliad-tx)
2. Dictionary of Canadian Biography — `https://www.biographi.ca/en/results.php?ft=<sehir>` + biyografi sayfaları (Québec, Louisbourg, Montréal olayları)
3. The Canadian Encyclopedia — `https://www.thecanadianencyclopedia.ca/en/article/<sehir>` (FR: /fr/article/...; kararsız olabilir)
4. New Georgia Encyclopedia — `.../articles/geography-environment/<sehir>/` (yönlenir)
5. South Carolina Encyclopedia — `https://www.scencyclopedia.org/sce/entries/<sehir>/`
6. NCpedia — `https://www.ncpedia.org/geography/<sehir>` (gömülü tarayıcı)
7. Natural Resources Canada CGNDB — `https://geogratis.gc.ca/services/geoname/en/geonames?q=<ad>&concise=CITY` (JSON; ad/koordinat teyidi)
8. Persée — `https://www.persee.fr/search?ta=article&q=<sehir>` (Nouvelle-France, Louisbourg, SPM; açık erişim makaleler)
9. Parks Canada DFHD / HistoricPlaces.ca — id'li kayıtlar (`page_nhs_eng.aspx?id=N`, `place-lieu.aspx?id=N`) + NPS `https://www.nps.gov/<kod>/learn/historyculture/index.htm`
10. Britannica (gömülü tarayıcı) — `https://www.britannica.com/place/<Sehir>-<Ulke>` — TDV benzeri genel ansiklopedi çifti için; US Census 100 büyük şehir tablosu (nüfus) yardımcı.
Ek, Meksika için en iyi: UNESCO list/<id> (Oaxaca 415), SciELO México dergi sayfaları, Redalyc; ama gövde araması zayıf.

## İkinci kaynak bulunabilirliği (TDV/Britannica dışı)
- **ABD:** İyi. Eyalet ansiklopedileri çoğu büyük şehir için hakemli/kurumsal ikinci kaynak verir (TX, GA, SC, NC, VA, TN, MS, OR, AR, WA). Zayıf yer: Colorado (bölge engeli), Orta Batı/Kuzeydoğu şehirleri (Chicago, Cleveland ansiklopedileri çalışmadı), ulusal arşivler (LoC, HathiTrust) Cloudflare'de.
- **Kanada:** Orta-iyi. DCB ve Canadian Encyclopedia + Parks Canada/HistoricPlaces + Persée yeterli ikinci kaynak sağlar; en iyi akademik makale kaynağı (Érudit) Anubis arkasında. Kuzey/Batı eyaletleri için yerel ansiklopedi zayıf.
- **Meksika:** Zayıf. Açık ve okunabilir hakemli dergi yok (Colmex, UNAM Cloudflare; Relaciones/Secuencia DNS); INEGI CAPTCHA; INAFED ölü. Pratik ikinci kaynak: UNESCO (yalnız dünya mirası kentleri), Britannica, SciELO/Redalyc (liste düzeyi). Emre'nin tarayıcı oturumu/indirme izniyle çözülebilir.
- **Alaska:** Orta. NPS Sitka, AHRS, Orth'un Dictionary of Alaska Place Names (USGS PP567, PDF) sağlam; şehir kronolojisi için PDF indirmesi gerekir.
- **Saint-Pierre-et-Miquelon:** Zayıf-orta. Persée makaleleri ve Canadian Encyclopedia girdisi var; ANOM/Gallica (en iyi arşivler) engelli.
- **Bermuda:** Zayıf. UNESCO (St George) + Britannica (Hamilton) dışında .bm alan adları DNS'ten çözülmedi; archive.org metinleri (Lefroy vb.) indirme ister.

## Emre/KASA kararı gerekenler
1. Érudit ve HAL (Anubis): gömülü tarayıcı otomatik doğrulamadan geçerse kullanılsın mı? (Bu ajan bot-doğrulamayı aşmaz.)
2. PDF/tam metin indirme (USGS PP567, archive.org, açık erişim dergi PDF'leri): EMRELİC oturumunda.
3. Slug'lı ansiklopedilerde şehir girdi adı site aramasından bulunacak; F2 ajanları önce arama sonra gövde okusun.
