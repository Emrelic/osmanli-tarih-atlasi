# Tanık YZ-özet kontrolü, 2. tur: Afrika + Doğu borç (UMIT, 17 Kasım 2026)

Ağaç: `sehir-afrika-kuzey-dogu-1116` worktree (UMIT). Tablo: `TANIK-YZ-BIREBIR-KONTROL-2-UMIT.tsv`.
Yöntem 1. turla aynı (`TANIK-YZ-BIREBIR-RAPOR-UMIT.md`): sayfa kendi sekmesinde açıldı, alıntı/yıl JS ile
`innerText` ve `textContent` içinde, boşluk, tipografik tırnak ve tire normalleştirilerek arandı. İstekler arası ≥5 sn, indirme yok.

## ① Ölçülen
- Kapsam: 7 dosya (afrika_misir, afrika_magrip, afrika_magrip2, adalar_ek, dogu_borc_1/2/3).
  `britannica.com` URL'si yalnız **2 dosyada, 3 kayıtta, 14 alanda** var: dogu_borc_1 `addis-ababa-et` (ilk + 5 olay),
  dogu_borc_2 `kismayo-so` (ilk + 4 olay) ve `rey-ir` (ark + 1 sahip + 1 olay). Öteki 5 dosyada "Britannica" geçmiyor (0).
- **Sınıf dağılımı: GÖVDE 14 · YZ_OZET 0 · BULUNAMADI 0 · ÖNİZLEME 0.**
- Gizli YZ bloğu ("Created from Britannica articles using AI"): Addis Ababa sayfasında **var**, ama kayıttaki bütün
  alıntılar ve yıllar (1887, 1905, 1936–1941, 1950) görünür gövdede. Kismaayo ve Rayy sayfalarında YZ bloğu yok.
- İki ölçüm notu (karar değiştirmedi): Kismaayo'da "1941" dizgesi yalnız textContent'te çıktı, ama bu isabet script içindeki
  topicId (319415). Gövdede "(1927–41)" yazıyor ve olay bu yazıma dayanıyor. Rayy'de ark cümlesi innerText'te birebir var;
  textContent'te tam cümle eşleşmedi (düğüm sınırında boşluk eksik), "3rd millennium" orada da var.
- `py -I -X utf8 arac/sehir_tarihce.py denetle` 7 dosyada **ihlal 0**, çıkış 0 (uyarılar önceden vardı, bu turla ilgisi yok).

## Değişen kayıtlar
Yok (0). Veri dosyalarına yazılmadı.

## Açılan siteler
britannica.com: 3 sayfa (place/Addis-Ababa, place/Kismaayo, place/Rayy).

## ② Bulunamayan
- Bu turda yok. Addis Ababa'nın 1886/1887 çelişkisi için ikinci akademik kaynak hâlâ okunmadı (kayıtta zaten beyanlı).

## ③ İstek
- Afrika ve Doğu borç dosyalarında Britannica riski düşük: yalnız 3 kayıt Britannica'ya dayanıyor ve hepsi gövdede doğrulandı.
  Kismaayo ile Addis Ababa tek kaynaklı (Britannica). İkinci akademik kaynak, ör. Pankhurst ya da Somali tarih monografisi,
  EMRELİC kuyruğuna önerilir.
