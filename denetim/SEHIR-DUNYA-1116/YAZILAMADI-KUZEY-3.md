# YAZILAMADI / KALAN — Kuzey Avrupa F2 parti 3 (UMIT, 17 Kasım 2026)

Evren: `BORC-GUNCEL-UMIT.tsv`, blok=kuzey-avrupa, eklenen boş, durum=BORC → **103 satır** (ölçüldü).
Yazıldı: **15** → `data/sehir_tarihce_kuzey_avrupa_3.js` (denetle çıkış 0, ihlal 0, uyarı 15).
Seçilen 15'in hepsi yazıldı; seçilip yazılamayan **0**.

## Ön kontrol (tarihce_var, iki yönlü)
22 aday için yerel `data/sehir_tarihce_*.js` + `origin/main` `data/sehir_tarihce_*.js` (git show; toplam 99 dosya),
ad / atlas_ad / adlar[] normalleştirilmiş eşleşme + ≤10 km: **22'sinde de kayıt YOK**. Pozitif kontrol: Hamar, Turku
iki tarafta da bulundu (betik çalışıyor).
Ölçülen ama bu partide yazılmayan 7 aday (kayıt yok, atlas eşleşmesi ölçüldü): Savonlinna, Hamina, Borås, Kokkola,
Tornio, Joensuu, Haugesund.

## Kalan 88 satır — neden yazılmadı
- **Birleşik Krallık (49) + İrlanda (14) = 63**: zincir künyeleri (`ingiltere`, `iskocya`, `gwynedd`, `irlanda`,
  `ingiltere-irlanda-krallik`, `wessex`/`mercia`/`northumbria`, `dublin-krallik`) ve 1707/1801 künye geçişleri için
  kaynak taraması bu partide yapılmadı; kaynak hattı (lex/snl/Uppslagsverket) İskandinav dışını zayıf kapsar.
  Ayrı parti + Britannica gövdesi / British History Online / Dictionary of Irish Biography gerekir.
- **İskandinav/Finlandiya/Atlantik kalan (25)**: Leikanger, Vänersborg (parti 1'de yazılamadı, bkz. kuzey-avrupa/YAZILAMADI-1.md),
  Narvik, Kirkenes, Haugesund, Trondheim Stiklestad, Kungälv, Borås, Haderslev, Sønderborg, Tønder (Schleswig zinciri:
  dükalık/Prusya 1864-1920 — künye sorusu), Savonlinna, Hanko, Tornio, Rovaniemi, Hamina, Joensuu, Kokkola,
  Skálholt, Hólar, Þingvellir, Igaliku, Klaksvík, Vágur, Longyearbyen — süre (denenmedi).

## Açık karar noktaları (bu partiden)
- **roskilde-dk**: ilk.t 936 = Trap'ın '*936 Roskildam (afskrift ca. år 1300)' GEÇ KOPYA belgesi; çağdaş tanık
  istenirse 1035 (sikke 'Roscel' 1018-35). Künye danimarka f 0950 → 936-950 hayalet uyarısı.
- **lund-se**: 1332-1360 Skåne'nin Magnus Eriksson'u kral tanıması — lex 'İsveç'e katılmadı' der; dönem açılmadı.
- **norrkoping-se**: imtiyaz 1350 (RAÄ) ↔ 1384-04-07 SDHK 12626 (okunmadı, CAPTCHA).
- **kristiansund-no**: 1658 Roskilde'de devredilen 'Trondheim Len'in Nordmøre'yi (Fosna) kapsayıp kapsamadığı okunmadı;
  1658-1660 dönemi açılmadı (beyanlı borç).
- **skara-se**: Thurgot 1014 (Svenska kyrkan, okunmadı) ve piskoposluk merkezinin 1100'lerin ortasına dek Husaby'de
  olduğu (RAÄ arama özeti) — ilk.t 1059 (onyıl) bunlara karşı hakemli karar bekler.
- **lappeenranta-fi**: 1710-1721 Rus işgali atlas zincirinde yok (öneri).
