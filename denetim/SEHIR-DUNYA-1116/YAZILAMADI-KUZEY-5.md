# YAZILAMADI / KALAN — Kuzey Avrupa F2 parti 5 (Britanya + İrlanda; UMIT, 17 Kasım 2026)

Evren: F2-4'ten kalan 51 satır (46 denenmeyen + 5 yazılamayan; `BORC-GUNCEL-UMIT.tsv`, blok=kuzey-avrupa, eklenen boş, durum=BORC).
Yazıldı: **12** → `data/sehir_tarihce_kuzey_avrupa_5.js` (denetle çıkış 0, ihlal 0, uyarı 1).
Oxford, Warwick, Northampton, Hastings, Hereford, Shrewsbury, Durham, Windsor, Portsmouth, Perth, Pembroke, Conwy.

## Ön kontrol (tarihce_var, iki yönlü)
27 aday için yerel `data/sehir_tarihce_*.js` + `origin/main` (`git ls-tree -r origin/main data/` + `git show`; 81 dosya,
toplam 2942 kayıt), ad / atlas_ad / adlar[] normalleştirilmiş + ≤10 km: **gerçek eşleşme 0**. Uzak ad çakışması:
Perth → Avustralya Perth (14 690 km), Worcester → worcester-za-p3 (9 775 km).

## Açılıp yazılmayan (3)
- **Carlisle**: Britannica Roma Luguvallium'u tarihsiz verir ('In the Roman period a civilian settlement'); ilk tarihli cümle
  685 (Lindisfarne piskoposluğu) ama daha erken tarihsiz yazılı tanık var → ilk kurulamadı (Vindolanda tabletleri okunmadı).
  ATLAS NOTU: Britannica 1092 William II'nin kenti İskoçlardan alışını verir; İskoç dönemi 1136–1157 (okunmadı) atlasta yok.
- **Drogheda**: Britannica yalnız '8th–11th century' Norse ve '12th century' Anglo-Norman (yüzyıl aralığı, sahip künyesi belirsiz);
  ilk tarihli 1228 (ayrı korporasyonlar) daha erken tarihsiz tanıktan sonra → yazılmadı. AFM/AU'da 'Droichet Átha' taranmadı.
- **Kirkwall**: Britannica yalnız 12. yy katedral + 1486 kraliyet burgh'u; güvenli uç (1200) atlas başlangıcından (1137) sonra ve
  bilgi vermiyor → yazılmadı. Orkneyinga saga (1046) okunmadı.

## Değerlendirilip açılmadan ertelenen (4)
- **Tamworth**: atlas zaten 913 mercia; ASC 913 burh tanığı atlasla aynı gün → kayıt bilgi eklemez. Offa dönemi tarihli tüzükler
  (8. yy) okunmadı.
- **Whitby**: atlas 664 northumbria; Bede'nin 'Streanaeshalch' adı Whitby ile eşitlenir (yeri kesin olmayan ad eşitlemesi riski) → ertelendi.
- **Derby**: Roma Derventio (Little Chester, ~1,5 km) tarihsiz → ASC 917 tek başına ilk olamaz; açılmadı.
- **Stirling**: atlasta nokta yok → zincir 1900'e: 1651 Monck, 1652–1660 Commonwealth, 1707 Birlik günleri kaynakla gerekir; açılmadı.

## F2-4'ten kalan 5 (bu partide yeniden denenmedi)
Manchester, Lincoln, Exeter (tarihli Roma tanığı yok), Cardiff (yalnız yüzyıl), Nottingham (Danelaw zinciri). Öneri: Exeter/Lincoln
için Tacitus/Ptolemaios değil, tarihli birincil neşir (ASC 876–877 Exeter, ASC 1067–68) + VCH (BHO) ile ilk anılış kuralının
'daha erken tarihsiz tanık' sorusu ayrıca karara bağlanmalı.

## Denenmeyen (süre) — 27
Sağlama: 51 = 12 yazılan + 3 açılıp yazılmayan + 4 ertelenen + 5 F2-4 kalanı + 27 denenmeyen.
BK (19): Canterbury, Winchester, Southampton, Caernarfon, Dumfries, Leeds, Bath, Chester, Lancaster, Worcester, Gloucester,
Lindisfarne, Iona, Scone, Falkirk, Berwick-upon-Tweed, Rochester, Colchester, Harlech (+ yukarıdaki 4 ertelenen sayılmaz).
İrlanda (8): Wexford, Donegal, Sligo, Tralee, Kinsale, Queenstown (Cobh), Dún Laoghaire, Tipperary.
Not: Canterbury, Rochester, Winchester, Chester, Gloucester, Bath, Colchester, Southampton, Caernarfon, Lancaster Roma kökenli —
çoğunda tarihli Roma tanığı ya da antik tarihçi (Tacitus Annales 12.32 Camulodunum, AD 50) gerekir.

## Açık karar noktaları (bu partiden)
- **northampton-gb**: danelaw künyesi t 918-01-01 ↔ ASC (Ingram A.D. 921) teslim → hayalet uyarısı. Künye t genişletilsin ya da
  modern kronoloji (Whitelock) okunup teslim yılı düzeltilsin.
- **hereford-gb**: 676–1055 beyanlı `__BOSLUK__` (Magonsæte/Mercia sahipliği kaynakta okunmadı).
- **pembroke-gb**: Britannica 1090 'royal charter' ↔ Norman girişi genelde 1093 — bağımsız teyit yok.
- **perth-gb**: İngiliz işgalleri (≤1298–1313, 1335–1339) atlasta yok.
- **durham-gb**: 762 'Aelfet ee' = Elvet eşitlemesi (VCH 'appears') başlangıç sayılmadı.
