# BÖLGE OTURUMU BAŞLANGIÇ MESAJI — şehir tarihçesi

Emre bu metni yeni bir oturuma yapıştırır; yalnız `<BOLGE>` (rusya · avrupa · asya · amerika · afrika) ve
`<BOLGE_BUYUK>` (RUS · AVR · ASY · AME · AFR) değiştirilir. Ölçü (14 Ekim 2026): rusya 605 şehir/61 parti ·
avrupa 597/60 · asya 802/81 · amerika 526/53 · afrika 336/34. Osmanlı temposuyla parti başına ~25 dk ve
~400 bin token; 5 paralel araştırmacıyla bölge başına 4–7 saat.

---

**Şehir tarihçesi — <BOLGE> bölgesi.** Osmanlı bölgesinde biten işin (denetim/SEHIR-TARIHCE-OSM-1014/RAPOR.md)
aynısını <BOLGE> için yap: 1900 kategori 1–3 şehirlerinin ilk anılışı + sahiplik zinciri + kronolojisi →
`data/sehir_tarihce_<bolge>.js` (`window.SEHIR_TARIHCE_<BOLGE_BUYUK>`). Atlas verisine (yerlesimler, olaylar,
devletler) DOKUNMA — bu yalnız araştırma birikimi; düzeltme önerileri rapora girer.

Adımlar:
1. `EnterWorktree` (ad: `sehir-tarihce-<bolge>`). `RAPOR.md`, `VERI-YAPISI.md` son bölüm ve
   `denetim/SEHIR-TARIHCE-BOLGE-1014/GOREV-SABLON.md`yi oku.
2. Scratchpad'de: `py arac/sehir_tarihce_parti.py <bolge> <scratchpad>\parti` ·
   `py arac/sehir_tarihce.py devletler <scratchpad>\devletler_dok.tsv` · GeoNames `cities1000.zip`yi
   (geonames.org, CC-BY, ~11 MB — Emre onayladı) scratchpad'de kendi boş klasörüne indir ve aç.
3. Şablonu scratchpad'e kopyala, yer tutucuları doldur. Partileri **Opus** alt ajanlara ver, **5 paralel**,
   her biri bir parti, arka planda; biten partinin yerine sıradakini başlat.
4. Her teslimde: `py arac/sehir_tarihce.py denetle <sonuc.js>` çıkış 0 · `py -I denetim/SEHIR-TARIHCE-OSM-1014/meta_tara.py
   <parti klasörü>` ile META OLAY taraması (ajanlar ölçütü olay uydurarak geçmeye meyillidir — Osmanlı'da 6 vaka) ·
   karar/düzeltme kalemlerini bir `KARARLAR.md`de biriktir. Yöntem açığı çıkarsa önce kuralı (şablon +
   VERI-YAPISI) düzelt, sonra devam et.
5. Hepsi bitince `py -I denetim/SEHIR-TARIHCE-OSM-1014/birlestir.py <parti klasörü> <birlesik.json>` →
   `py arac/sehir_tarihce.py yaz <birlesik.json> data/sehir_tarihce_<bolge>.js <BOLGE_BUYUK>` (çıkış 0) →
   dosyayı `arac/denetle_yayin.py` BEKLEYEN sözlüğüne gerekçesiyle ekle (OSM satırının yanına) →
   `denetim/SEHIR-TARIHCE-<BOLGE_BUYUK>-<GGAA>/` (RAPOR, KARARLAR, GOREV, DENETIM) → `py arac/push_kapisi.py`.
6. Rapor ①②③ biçiminde; özellikle: atlas başlangıcı erken olan şehirler, atlasın sistematik örüntüleri
   (Osmanlı'da Balkan 1281 ve Cezayir Zeyyânî örüntüleri çıktı), tekrar eden künye önerileri.
