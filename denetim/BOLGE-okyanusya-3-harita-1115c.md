# BOLGE okyanusya — adim 3: harita uyumu (UMIT 1115c)

Olcum araci: `girdi.oku_devletler()` + `girdi.yukle()` (taban c317d2d85) ve `py arac/denetle.py` (bkz. adim 7 sayilari). Her kunyenin s: pencere sayisi adim 1'de.

## odak_yer cozumu
Kunye kronolojisindeki `odak_yer` adlari: Lapaha, Papeete, Londra, Hamilton, Hollanda, Britanya, Pakistan (UNTEA asker maddesi), Kolonia (Pohnpei) (TTPI maddeleri), Auckland (NZ ulusal maddeleri), Melbourne (Avustralya) — bunlarin cogu yerlesim adina BIREBIR degil (Londra, Hollanda, Britanya, Pakistan, "Hamilton" = ABD dışişleri bakanı, Lapaha). `py arac/odak_olc.py` KASA birlesim notu: yerlesim 5644, yer_id 0 acik (arac yer_id'yi cozer; odak_yer ayri). Bu oturumda odak_olc yeniden kosulmadi (bkz. adim 7).

## Eksik / fazla kirilma
- fiji-kolonisi: Suva/Levuka pencereleri d:ingiltere iken kunye yerlesimsizdi (haritada Fiji Kolonisi boyasi hic cikmiyordu); duzeltildi (adim 7).
- Batı Yeni Gine (Jayapura, Manokwari, Merauke, Fakfak): pencere zinciri 1949-12-27'de Endonezya'ya geciyordu; oysa Batı Yeni Gine 1962-10-01'e kadar Hollanda idaresinde, 1962-10-01..1963-05-01 UNTEA, sonra Endonezya (kunye untea + `yer_yama_halef_1946.js` kayitli ama base'e UYGULANMAMIS bekleyen yama). Duzeltildi (adim 7); 1962/1963 kirilmalari icin D2 maddesi gerek (`kronoloji_sinir_okyanusya.js`).
- Gilbert-Ellice: Tarawa 1892-05-27, Funafuti 1892-01-01 (kunye f'den ONCE: D4c adayi, d:ingiltere oldugu icin D4c degil), Banaba 1900-01-01; kunye gilbert-ellice-kolonisi pencere sahibi degil.
- Hawaii: Honolulu, Hilo, Lahaina pencereleri 1795-01-01'de basliyor, oncesi bos (Hawaii adalari 1281-1795 sefliklerle: Kailua-Kona `__BOSLUK__`; Honolulu/Hilo/Lahaina 1795 oncesi YERLESIM ZINCIRI yok). Hawaii Sefliklerine kaynakli pencere yazilmadi (kaynak okunmadi).
- Rapa Nui: Anakena 1200-1281 sonrasi pencere yok (1281-1888 bosluk beyani: Rapa Nui [bosluk=True]).
- UNTEA, Moriori, Rarotonga, Hawaii Seflikleri, fiji-cakobau, gilbert-ellice: pencere sahibi degil (adim 1).
