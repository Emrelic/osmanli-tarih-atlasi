# 25 · Hulefâ-yi Râşidîn — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py + kendi s: dökümleri; salt okur)

## Özet
- Künye: 1 (`hulefa-yi-rasidin`, f 0632-06-08, t 0661-07-29, baskent "Medine → Kûfe"). Komşu: `medine-devleti` (öncül, 630-632 Mekke/Sana s:'sında görünüyor), `emevi` (ardıl, f 0661-07-29).
- Haritada **yalnız 10 yerleşim** (Mekke, Sana, İskenderiye, Trablus, Kûfe, Nîşâbur, Serahs, Merv, Herat, Tedmür); en geniş yıl 651 (10). 8 kırılma, **3 AÇIK**.
- Ölçerin AÇIK'ları (Tedmür 634-03-07, İskenderiye 642-01-01, 661-07-29 Sana/Tedmür/İskenderiye) küçük bir tablodur; asıl sorun ölçülemeyen taraf: **Şam, Kudüs, Medine, Basra, Halep, Antakya, Humus, Ahvaz, Hemedan, Ktesifon (Medâin) için Râşidîn s: dönemi yok** — Şam (-608→1000) ve Kudüs (-585→1253) tamamen `__BOSLUK__`, Medine'nin s:'sı 1000-01-01'den başlıyor (622-1000 kaydı yok), Basra/Ahvaz 1494/1281'den. Yani devletin fetih coğrafyası ve başkenti haritada delik/komşu petek.
- Evrende (olaylar*.js + kronoloji_sinir*.js) Râşidîn fetihleri neredeyse yok: Mekke 630/632/661 (olaylar_kurulus_geri_1021.js), Kûfe 638/661, Trablus 643, 661-07-29 toplu madde. Şam 635, Kudüs 638, Yermûk 636, Kādisiyye 636, Medâin, İskenderiye 642, Nihâvend 642, Ebû Bekir/Ömer/Osman/Ali ölümleri **künye içinde var, evrende yok**.
- En ağır 3 bulgu: (1) **Kûfe s:'sı 661-01-01'de Emevî'ye geçiyor ama künye t=661-07-29**; TDV `muaviye-b-ebu-sufyan` «Kûfe'ye giderek ondan ve halktan biat aldı (25 Rebîülevvel 41 / 29 Temmuz 661)» diyor ⇒ Kûfe 29 Temmuz 661'e kadar Hasan b. Ali'nin Râşidîn halifeliğindedir; evrendeki "Hz. Ali şehid edildi; Kûfe Emevî hâkimiyetine geçti" maddesi (olaylar_kurulus_geri_1021.js:11, t=0661-01-01) hem günde (Ali'nin ölümü TDV hulefa «40/661» yıl) hem anlamda yanlış; (2) Şam/Kudüs/Medine/Basra/Fustat yok → başkent ve fethedilen bölgenin çekirdeği haritada boş; (3) Herat s: Râşidîn 651-01-01'den başlıyor, TDV `herat` «31 (652) yılında fethedince» diyor ⇒ 1 yıl erken.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| hulefa-yi-rasidin | Hulefâ-yi Râşidîn Devri (Medine Hilâfeti) | 0632-06-08 | 0661-07-29 | ana; 10 yerleşim; ic_not_f/t günleri TDV'den (hulefa-yi-rasidin, muhammed, emeviler) |
| medine-devleti | Medine Devleti (öncül) | 0622? | 0632-06-08 | ölçülmedi; Mekke s: 630-01-11→632-06-08, Sana 628→632-06-08 |
| emevi | Emevî Hilâfeti (ardıl) | 0661-07-29 | 0750 (Abbâsî) | f aynı gün (künye ic_not); ardıl uç çakışma kontrolü: Kûfe 661-01-01 ≠ 661-07-29 |
| zubeyri | Abdullah b. Zübeyr Hilâfeti | 0683-01-01 | 0692-10-01 | komşu |
EKSİK evre/parça: (i) Hz. Ali dönemi (656-661) iç savaş bölünmesi — Muâviye'nin Suriye'si ayrı mı? (künyede tek devlet; beyan yok; TDV `muaviye`: Muâviye Şam valisi, Ali'ye bî'at etmedi); (ii) Hasan b. Ali evresi (661-01~07) — Kûfe/Irak; (iii) Başkent Medine→Kûfe (656): Kûfe 661'e kadar. Başka künye gerekmez, ama harita için yerleşimler eksik.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 0632-06-08 | TDV `hulefa-yi-rasidin`: Sakîfe toplantısı «Hz. Peygamber'in vefat ettiği gün» (künye ic_not'tan; bu oturumda gövde okundu, alıntı kısmen) | TDV `muhammed` (künye ic_not'tan): «13 Rebîülevvel 11 / 8 Haziran 632» [okunmadı, aktarım] | Korunur. İki TDV maddesi bağımsız akademik kaynak sayılmaz — 2. kaynak (ör. Donner, *Early Islamic Conquests*, 1981; EI² «Abū Bakr») ERİŞİLEMEDİ. |
| t | 0661-07-29 | TDV `hulefa-yi-rasidin` [O]: «hilâfeti Muâviye b. Ebû Süfyân'a bıraktığı güne kadar (25 Rebîülevvel 41/29 Temmuz 661)» | TDV `muaviye-b-ebu-sufyan` (künye aktarımı): «Kûfe'ye giderek ondan ve halktan biat aldı (25 Rebîülevvel 41 / 29 Temmuz 661)»; TDV `emeviler` (aktarım) «661-750» | Korunur (iki TDV maddesi uyumlu; gün dahil). Hicrî ∩ miladî kontrolü: 25 Rebîülevvel 41 ∩ Temmuz 661 çakışıyor (tabular hesap doğrulanmadı). |
| Kûfe t | s: 0661-01-01 | TDV `kufe` (s: kaynağından): 'Hâricî İbn Mülcem tarafından Kûfe Camii'nde şehid edilen Hz. Ali' (661, YIL) | TDV `muaviye…` yukarıdaki | **Hatalı**: Kûfe'nin Emevî'ye geçişi 661-07-29'dur (TDV Muâviye Kûfe'ye giderek biat aldı), Ali'nin ölümü Ocak 661 (yıl TDV; gün bu oturumda okunmadı) devleti sona erdirmez (Hasan halife oldu). → Kûfe s: Râşidîn t = 0661-07-29. Evrendeki 0661-01-01 maddesi 07-29'a çekilmeli/yeniden yazılmalı. |
| Şam fethi | madde (künye içi) 0635-01-01 | TDV `hulefa-yi-rasidin` [O]: «Receb 14'te (Eylül 635) fethedildi» (gün yok) | WebSearch özeti: kuşatma Eylül 635'e dek (blog, dayanak değil) | Ay biliniyor: hicrî Receb 14 ∩ Eylül 635 ilk günü kuralı ile 0635-09-01 civarı; tabular çeviri DOĞRULANMADI (cin_gun benzeri araç yok) → "0635-01-01" yerine "0635-09-01 + ic_not: hicrî aralık ∩ Eylül, çevrilmedi" öner. |
| Yermûk | 0636-08-20 (künye içi) | TDV `hulefa-yi-rasidin` [O]: «12 Receb 15 (20 Ağustos 636)» | — | gün TDV'de; 2. kaynak yok. |
| Kādisiyye | 0636-01-01 (künye içi) | TDV `hulefa-yi-rasidin` [O]: «Kādisiye Savaşı'nı kazandı… (15/636)» yıl | TDV `omer` (künye atfı) | yıl; gün çekilemedi. |
| Medâin/Ktesifon | (madde yok) | TDV `hulefa-yi-rasidin` [O]: «imparatorluğun başşehri Medâin'e girildi» — tarih YOK | WebSearch özeti (blog): Mart 637 | **TDV tarih vermiyor**; 2. basamak (İSAM/Belleten/DergiPark; Donner 1981; CHI vol.4) ERİŞİLEMEDİ — madde YAZILMASIN (tarih uydurma yasağı) ya da "yıl bilinmiyor" ile boşluk beyan. Haritada Ktesiphon s: -140→224 Part sonrası boş. |
| Kudüs | 0638-01-01 (künye içi) | TDV `hulefa-yi-rasidin` [O]: «Halife Ömer 17 (638) yılında bizzat gelerek şehri… teslim aldı» | TDV `omer` (künye atfı) | yıl 638 (TDV); bazı kaynaklar 637 (WebSearch özeti, blog) — çelişki 2. akademik kaynakla aranmalı (CHI/EI² «al-Ḳuds»). |
| Babilyon | 0641-04-09 (künye içi) | TDV `hulefa-yi-rasidin` [O]: «(9 Nisan 641)» | — | gün TDV'de. |
| İskenderiye | s: 0642-01-01 | TDV `hulefa-yi-rasidin` [O]: «İskenderiye'yi fethetti (21/642)» yıl | TDV `iskenderiye` (s: kaynağı): 642 | yıl; hicrî 21 ∩ 642 → 0642-01-01 kural uyumlu. |
| Nihâvend | (yerleşim/madde yok) | TDV `hulefa-yi-rasidin` [O]: «21 (642) yılında vuku bulan … Nihâvend zaferi» | — | yıl; evrende yok; Nihâvend yerleşimi yok (s: yok). |
| Trablus | s: 0643-01-01 | TDV `trablusgarp` (madde 6743'te): «22 (643) yılında bir aylık kuşatmanın ardından fethedildi» | — | doğru yıl hassasiyeti; evrende 6724. |
| Nîşâbur/Merv/Serahs | s: 0651-01-01 | TDV `nisabur--iran` (s: kaynağı): Kanâreng'in teslimi «30 veya 31 (651-652)» | TDV `serahs`, `merv` (s: kaynağı) | Nîşâbur 30/31 AH (650-09…652-09) ∩ 651: 651-01-01 kabul edilebilir; Merv/Serahs kaynakları okunmadı (s: kaynağı ayrıntıları görülmedi). |
| Herat | s: 0651-01-01 | TDV `herat` (s: kaynağı): «Ahnef b. Kays … Horasan'ı 31 (652) yılında fethedince Herat da sulh yoluyla» | — | **1 yıl erken**: f→0652-01-01 (31 AH ∩ 652) ya da TDV'nin 651'i gösteren cümlesi bulunmalı; Sasani t=651 ile Herat 651-652 boşluğu `__BOSLUK__`/beyan. |
| Tedmür | s: 0634-03-07 | TDV `tedmur` (s: kaynağı): «Hâlid b. Velîd tarafından barış yoluyla fethedildi (13/634)» | — | hicrî 13 ∩ 634 ilk gün kuralıyla 0634-03-07 (13 AH başı); yıl düzeyi. |
| Mekke/Sana | s: 632-06-08→661-07-29 | TDV `muhammed`, `yemen`: Sana Ebû Bekir/Ömer valilerle | — | Tutarlı; Sana 1. dönem 'Hz. Osman için kaynaklarda bilgi yok' beyanı mevcut. |
| Ebû Bekir ölümü | 0634-08-23 (künye içi) | TDV `hulefa-yi-rasidin` [O]: «22 Cemâziyelâhir 13 (23 Ağustos 634)» | — | gün TDV'de. |
| Ömer ölümü | 0644-11-03 (künye içi) | TDV `hulefa-yi-rasidin` [O]: ölüm GÜNÜ VERİLMİYOR (ölüm üzerine şûra anlatılır) | TDV `omer` (atıf) | künye madde 0644-11-03 TDV `omer`'den: bu oturumda `omer` okunmadı; "Hz. Ömer'in ölümü (26 Zilhicce 23)" gün Gregoryen çevirisi doğrulanmadı. |
| Osman ölümü | 0656-06-17 (künye içi) | TDV `hulefa-yi-rasidin` [O]: «18 Zilhicce 35 (17 Haziran 656)» | — | gün TDV'de. |
| Ali ölümü | s: 0661-01-01 yıl | TDV `hulefa-yi-rasidin` [O]: «(40/661)» yıl | — | gün yok → düzeltme yukarıda. |

## c) Kronoloji (evren)
Var olanlar (evren): olaylar_kurulus_geri_1021.js:10 (Kûfe kuruldu, t=0638-01-01, yıl) · :11 (Hz. Ali şehid, Kûfe Emevî'ye geçti, 0661-01-01 — **YANLIŞ**) · :20 (Mekke fethi 0630-01-11) · :21 (0632-06-08 Peygamber'in vefatı) · :22 (0661-07-29 Muâviye biat) · kronoloji_sinir_dogu_500_1281.js:5481 (0651-01-01 Belh sahibi tek devlete bağlanamadı), :5529 (0663-01-01 Belh), :6724 (0643-01-01 Trablus), :6750 (0661-07-29 Merv/Nîşâbur/Serahs/Herat/Trablus Emevî'ye devri).
Künye içinde var, evrende YOK (`data/devletler.js:14084…`): 0632-06-08 Ebû Bekir'e biat (evrende karşılığı Mekke maddesi), 0634-08-23, 0635-01-01 Şam, 0636-01-01 Kādisiyye, 0636-08-20 Yermûk, 0638-01-01 Kudüs, 0641-04-09 Babilyon, 0642-01-01 İskenderiye, 0644-11-03 Ömer'in ölümü, 0656-06-17 Osman'ın ölümü ve devamı (künye kronoloji devamı: tam liste okunmadı).
Eksik madde önerileri (kaynak durumu: [O] bu oturumda okundu, [A] aday):
```
{ t:"0634-03-07", tur:"toprak-kazanc", b:"Hâlid b. Velîd Tedmür'ü (Palmyra) barış yoluyla fethetti", yer_id:"Tedmür (Palmyra)", kaynak:"TDV tedmur: «Hâlid b. Velîd tarafından barış yoluyla fethedildi (13/634)» (s: kaynağından aktarım); hicrî 13 ∩ 634 ilk gün; yıl hassasiyeti", kesinlik:"yil" }   // AÇIK 0634-03-07
{ t:"0635-09-01", tur:"toprak-kazanc", b:"Müslümanlar Şam'ı (Dımaşk) fethetti", yer_id:"Şam", kaynak:"TDV hulefa-yi-rasidin [O]: «Receb 14'te (Eylül 635) fethedildi»; gün hesaplanmadı", kesinlik:"ay" }
{ t:"0636-08-20", tur:"savas", b:"Yermûk Savaşı: Bizans ordusu yenildi, Suriye'nin kaderi belirlendi", yer_id:"Şam", kaynak:"TDV hulefa-yi-rasidin [O]: «12 Receb 15 (20 Ağustos 636)»" }   // toprak kırılmasına bağlı değil; yalnız karşılaştırma için
{ t:"0638-01-01", tur:"toprak-kazanc", b:"Halife Ömer Kudüs'ü Patrik Sophronios'tan teslim aldı", yer_id:"Kudüs", kaynak:"TDV hulefa-yi-rasidin [O]: «17 (638) yılında»; 637 görüşü için 2. kaynak aranacak", kesinlik:"yil" }
{ t:"0642-01-01", tur:"toprak-kazanc", b:"İskenderiye'nin alınmasıyla Mısır fethi tamamlandı", yer_id:"İskenderiye", kaynak:"TDV hulefa-yi-rasidin [O]: «İskenderiye'yi fethetti (21/642)»", kesinlik:"yil" }   // AÇIK 0642-01-01; künye içi madde var, evrene taşı
{ t:"0661-07-29", ... }   // MEVCUT (kronoloji_sinir_dogu_500_1281.js:6750): yer listesine "Sana", "Tedmür (Palmyra)", "İskenderiye", "Kûfe" ekle ya da yer_id çoğullama (AÇIK 0661-07-29 Sana/Tedmür/İskenderiye)
{ t:"0661-07-29", tur:"toprak-kazanc", b:"Hasan b. Ali hilâfeti Muâviye'ye bıraktı; Muâviye Kûfe'de biat aldı, Kûfe Emevî hâkimiyetine geçti", yer_id:"Kûfe", kaynak:"TDV hulefa-yi-rasidin [O] + muaviye-b-ebu-sufyan (aktarım): «Kûfe'ye giderek ondan ve halktan biat aldı (25 Rebîülevvel 41 / 29 Temmuz 661)»" }  // olaylar_kurulus_geri_1021.js:11 maddesinin yerine
{ t:"0642-01-01", tur:"savas", b:"Nihâvend (fethu'l-fütûh): Sâsânî direnişi kırıldı, İran platosu açıldı", yer_id:"Nihâvend", kaynak:"TDV hulefa-yi-rasidin [O]: «21 (642) yılında vuku bulan … Nihâvend zaferi»" } // Nihâvend yerleşimi yok → önce yerleşim
```
Not: Ktesiphon/Medâin, Kādisiyye, Hemedan, Rey, Isfahan, Ahvaz için TDV tarih vermiyor/yalnız yıl veriyor; yazmadan önce İSAM/Belleten/DergiPark ve Donner/CHI/Cambridge History of Iran vol.4 (archive.org) taranmalı (çekilemedi).

## d) Harita uyumu
Ölçer: 8 kırılma, 3 AÇIK. Diğer 5 kırılma (Mekke 632-06-08, Sana 632-06-08, Kûfe 638-01-01, Trablus 643, Merv/Nîşâbur/Serahs/Herat 651) madde ile karşılanıyor. AÇIK:
| gün | yerleşim | öneri |
|---|---|---|
| 0634-03-07 | Tedmür kazanç (en yakın alakalı madde: Tibet-Tang, 65 g, alakasız) | Tedmür fethi maddesi (c) |
| 0642-01-01 | İskenderiye kazanç | İskenderiye 642 maddesi (künye içi → evren) |
| 0661-07-29 | Sana, Tedmür, İskenderiye kayıp | mevcut 6750 maddesinin yer listesine ekle |
Gizli sorunlar (ölçerin görmediği):
1. **Kûfe**: 661-01-01 bitiş (Kûfe→emevi) ve madde 661-01-01 — künye t=661-07-29 ile 209 gün çelişir. TDV: Muâviye 29 Temmuz 661'de Kûfe'de biat aldı. Düzelt: Kûfe s: hulefa t→0661-07-29, emevi f→0661-07-29; evren maddesi 11 yeniden yazılır (olaylar_kurulus_geri_1021.js:11).
2. **Herat**: s: 651-01-01 ↔ TDV 31 (652).
3. **Şam, Kudüs**: s: tüm dönem `__BOSLUK__` (-608→1000, -585→1253); **Medine** s: 1000-01-01'den; **Halep** s: 944'ten; **Antakya** s: 968'den; **Humus** s: 1000'den (BOŞLUK); **Basra** 1494'ten; **Ahvaz** 1281'den; **Hemedan** 224→1257 BOŞLUK; **Ktesiphon** -140→224 Part ardından boş; **Kâhire** 969'dan, Fustat/Babilyon yerleşimi yok; Nihâvend yok. Bunların hiçbiri Râşidîn dönemine bağlı değil.
   Kural: "Sahibi kaynakta bulunamayan ama var olduğu bilinen yer → abi merkez zinciri". Öneri: Şam 635-09→661-07-29 hulefa-yi-rasidin (TDV: Eylül 635), Kudüs 638→661-07-29 (TDV 638), Medine 622/632→656 hulefa (TDV: başkent; yerleşim "ilk anılış 1000" kuralı Medine için gözden geçirilmeli — Medine 622-1000 arası boş), Kûfe 638→661-07-29 mevcut, Basra 636/638→661-07-29 (TDV `basra` okunmadı), Fustat/Kâhire bölgesi 641-642→661-07-29 (Babilyon 641-04-09 TDV), Halep/Antakya/Humus/Kayseriye (TDV `halep`, `antakya`, `humus`, `kayseriyye` okunmadı → sorgulanmalı), Medâin/Ktesifon 637?→ (tarih yok: boşluk), Hemedan/Rey/Isfahan (Nihâvend 642 sonrası; Cambridge History of Iran).
4. Sahiplik: Nîşâbur/Serahs/Merv/Herat 651-01-01→661-07-29 hulefa: Sâsânî künyesi t=651-01-01; TDV Nîşâbur «30 veya 31 (651-652)» Kanâreng'in teslimi; Merv TDV: Yezdicerd'in 651'de Merv'de ölümü Sasani t'dir, fetih Osman devrinde (Abdullah b. Âmir 651-652) — Merv'in 651 başı hulefa'ya geçişi biraz erken olabilir (kaynak: TDV Merv aktarım). Belh evrende (5481) «tek devlete bağlanamadı» beyanlı boşluk.
5. Mekke/Sana 8 Haziran 632: evren maddesi (olaylar_kurulus_geri_1021.js:21) `yer:"Sana"` ama `yer_id:"Mekke"` — Sana s: kırılması bu maddeye bağlı değil (ölçer kapsadı, belki `yer` alanından); tutarlılık kontrol edilsin.
Yerleşim sayısı tablosu: 632:2, 634:3, 638:4, 642:5, 643:6, 651:10 (en geniş), 661:9 → Hz. Peygamber'in vefatında 2 şehir; fethedilen bölgenin %90'ı boş.

## Önerilen düzeltmeler (KASA için)
1. `data/yerlesimler.js` Kûfe (satır ~2081): s: hulefa-yi-rasidin t "0661-01-01" → "0661-07-29"; emevi f "0661-07-29" (TDV muaviye-b-ebu-sufyan: biat Kûfe'de).
2. `data/olaylar_kurulus_geri_1021.js:11`: "Hz. Ali Kûfe'de şehid edildi; Kûfe Emevî hâkimiyetine geçti" (0661-01-01) → iki madde: (a) Hz. Ali'nin şehadeti (yıl 661; gün TDV `ali` okunarak) toprak-kayip DEĞİL; (b) 0661-07-29 Kûfe'nin Emevî'ye geçişi (c bölümü).
3. `data/kronoloji_sinir_dogu_500_1281.js:6750`: `yer`/`odak_yer` alanına "Sana", "Tedmür (Palmyra)", "İskenderiye", "Kûfe" ekle (661-07-29 AÇIK kırılmalarını kapatır).
4. Evrene ekle: Tedmür 634, Şam 635-09, Kudüs 638, İskenderiye 642, Nihâvend 642 (c). Künye içi maddelerin evrene taşınması karar: künye `kronoloji:[]`i evren dışıdır (Emre/denetle).
5. Herat s: 0651-01-01 → 0652-01-01 (TDV herat 31/652) ya da 651'i dayandıran kaynak; arada `__BOSLUK__`.
6. Şam, Kudüs, Medine, Basra, Halep, Antakya, Humus, Fustat için Râşidîn dilimleri — HAVVA koşusu gerekir; kaynak sırası: TDV (`sam`, `kudus`, `medine`, `basra`, `halep`, `antakya`, `humus`, `fustat`), sonra İSAM/Belleten.
7. Künye ic_not_f/t `hulefa-yi-rasidin` künyesinde aktarım; 2. akademik kaynak (Donner 1981; EI²; CHI) yazılmamış → `kaynak:` alanı yalnız "TDV: hulefa-yi-rasidin" (tek madde). Çift TDV (muhammed+emeviler) ile `ic_not`ta "çift teyit (TDV içi)" yerine "tek kaynak ailesi" beyan öner.
8. Künye `ozet`: "Hz. Hasan'ın Muâviye'ye biatıyla sona erdi" — tarih/madde ile uyumlu; ama baskent "Medine → Kûfe" geçiş tarihi (656) yerleşim/madde yok.

## Erişilemeyen kaynaklar
- Donner, *The Early Islamic Conquests* (Princeton, 1981): Şam 635, Kudüs 637/638, Ktesifon 637, Nihâvend 642 (soru: hangi yıl/ay; Kudüs 637 mi 638 mi).
- Cambridge History of Iran vol.4 (1975), «Iran and the Arab conquest» (archive.org tam metin): Medâin/Ktesifon ve Nihâvend tarihleri; Herat 651/652.
- EI² «Dimashḳ»/«al-Ḳuds»/«Ḥasan b. ʿAlī»/«Muʿāwiya b. Abī Sufyān» (Brill; abonelik): Hasan'ın feragat günü ve Kûfe'de biat; Kûfe'nin Emevî'ye geçişi.
- TDV `omer`, `ali-b-ebu-talib`, `muaviye-b-ebu-sufyan`, `kufe`, `tedmur`, `iskenderiye`, `basra`, `sam`, `kudus`, `halep`, `antakya`, `humus`: künye alıntıları aktarım; bu oturumda yalnız `hulefa-yi-rasidin` gövdesi okundu (WebFetch özeti).
- Iranica «Nehāvand» / «Ctesiphon» (iranicaonline.org, JSTOR benzeri erişim yok): Nihâvend 642 gün/ay; Kādisiyye 636.
- İSAM/Belleten: Hz. Ali'nin şehadet günü (21 Ramazan 40/27 Ocak 661 bilinen — TDV `ali` açılıp doğrulanmalı).
- Kuveyt/tabular hicrî çevirisi: `arac/cin_gun.py` yok; Receb 14 ∩ Eylül 635 ilk günü hesaplanmadı.
