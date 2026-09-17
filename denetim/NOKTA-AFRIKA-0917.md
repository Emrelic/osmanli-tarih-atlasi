# NOKTA-AFRIKA-0917 — Afrika noktasızlık adayları (D3-AVRUPA-ORTA)

Girdi: `denetim/NOKTASIZLIK-ADAY-0917.json` `NOKTASIZ-ADAY`. Afrika kutusu (35G–37K · 18B–52D, 34D doğusunda 12K kuzeyi = Arabistan hariç) → **24 küme** (sevk "27" diyordu; kutunun dışında kalan beş aday Arabistan'da: Asir, Riyad, Hadramut, Abu Dabi, Taif).
Çıktı: `data/yerlesimler_nokta_afrika_0917.js` → `window.YERLESIMLER_NOKTA_AFRIKA_0917` · **1 nokta** · `node --check` ✓ · `girdi.oku_dosya` ✓ · bilinmeyen alan 0 · 3 km içinde nokta 0 · renk `tekrur`/`fransa-cumhuriyet` ✓ · `girdi.py`ye BAĞLANMADI.
Kural: devlet yoksa boşluk doğrudur; bir kümeye "boşluk doğru" demek de kaynak ister — bu turda hiçbir kümeye kaynaksız "doğru" denmedi.

| küme | merkez | km² | komşular | hüküm |
|---|---|---|---|---|
| K16 | 12,23K 10,95B | 13.987 | Labe · Kita · Kayes | 🟢 **NOKTA: Dingiray (Dinguiraye)** — TDV el-hac-omer (1848 Tamba'nın kontrolünde · Eylül 1852 cihad · devletin güney sınırı Dingiray) + Suret-Canale (1891 Fransız) |
| K15 | 12,04K 13,80B | 14.088 | Labe · Bissau · Bundu | 🟠 devlet adayı Kaabu (Gabu) — **künye YOK** (devletler.js taraması: kaabu/gabu 0). Kaynak aranmadı |
| K07 | 6,55G 16,59D | 23.512 | Feshi · Uíge · Teke | 🟠 devlet adayı Yaka Krallığı (Kasongo Lunda) — **künye YOK**. Kaynak aranmadı |
| K22 | 10,78K 11,99D | 10.165 | Yola · Birni Ngazargamu · Bauçi | 🟡 TDV sokoto "Sokoto'ya bağlı Gombe Emirliği"ni anıyor, **tarih ve yer vermiyor**; TDV nijerya'da Gombe/Biu 0 · gün bulunamadı |
| K05 | 11,38K 3,71D | 31.190 | Busa · Say · Nikki | 🟡 künye `borgu` var; TDV benin Baribalar/Dendiler'i anıyor, yerleşim ve tarih yok (`borgu` · `kandi` sluglar 302) |
| K06 | 15,35G 48,44D | 29.093 | Maroantsetra · Sambava · Maevatanana | 🟡 künye `sakalava-boina` · `merina` var; TDV madagaskar yalnız "Radama (1810-1828) adanın 2/3'üne hâkim oldu" — bölge kasabası yok |
| K12 | 32,78K 0,74D | 16.486 | Figuig · Ağvât · Muaskar | 🟡 TDV cezayir yalnız 1881 Sîdî Şeyh ayaklanması; Géryville/El Bayadh · Aflou · Brezina slugları 302 |
| K01 · K02 · K03 · K04 · K08 · K09 · K10 · K11 · K13 · K14 · K17 · K18 · K19 · K20 · K21 · K23 · K24 | — | — | — | ⚪ **İNCELENMEDİ** (süre: 19:30 son biniş). Komşuların neredeyse hepsi sömürge dönemi karakolu (kur 1885-1905) ve kaynak alanları "bulunamadı"; sömürge öncesi devlet sorusu açık |

## Yöntem notları
- Britannica bu oturumda 403 (betik ve WebFetch). TDV kıta ve ülke maddeleri kasaba taneciğinde susuyor (§4 TANECİKLİK).
- Dingiray'ın `kur`u **üst sınırdır** (1848'de zaten vardı). 1848-1852 dilimi `__BOSLUK__` (Tamba Krallığı, künye yok), NOKTA-ASYA emsali.
- 1852-09-01 ay hassasiyeti, 1891-01-01 yıl hassasiyeti. Tamba'nın düşüş günü ve Fransız işgal günü BULUNAMADI.
- Değişmez 2s: 1852-09-01 ve 1891-01-01 yabancı kırılmaları doğar. `denetle.py` koşulmadı (dosya girdiye bağlı değil).

## İstek
- D-KUNYE: `kaabu` (Gabu) ve `yaka` (Kasongo Lunda) künyesi; `tamba` (Calonke) künyesi açılırsa Dingiray'ın `__BOSLUK__` dilimi ona çevrilir.
