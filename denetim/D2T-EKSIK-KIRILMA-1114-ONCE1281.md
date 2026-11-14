# D2T — kırılmasız madde, 1281 ÖNCESİ kısım (ilk 40 sınıflandı) — 14 Kasım 2026

Ölçüm: worktree `agent-a4860d2fad4b4e3a5`, `origin/main` 81b566fc5 (HEAD). `coz-c` iki ham dosya ayrı komutla çözüldü. `arac/denetle.py` `kirilmasiz_madde()` doğrudan çağrıldı; kırılma havuzu **KASA onaylı genişlemeyle** `Y_tum_2t = Y_cekirdek + Y_kuyruk` (`origin/emrelic-1113-2t-havuz` dalı: `degismez2(Y_tum_2t, O)`, `("s",), yer_sarti=True`, `("isg",)`). Yani kuyruk dosyası artefaktı yok. Betikler scratchpad'de (repoya girmedi). **Hiçbir data/*.js değiştirilmedi.**

## Sayılar
| | Adet |
|---|---|
| 2t toplam (havuz genişlemiş) | **170** |
| yılı < 1281 (MÖ dahil) | **150** |
| yılı ≥ 1281 | 20 |
| ilk 40 (MÖ 3099 → MÖ 490) sınıflandı | 40 |

150 maddenin dağılımı: MÖ<1000 18 · MÖ1000-500 21 · MÖ500-300 21 · MÖ300-26 23 · MS0-700 16 · MS700-1000 23 · MS1000-1281 28. Hepsi `kapsam:"dis"`. Tür: toprak-kazanç 90, toprak-kayıp 60. Gün kesinliği: yıl 104 · onyıl 22 · gün 17 · ay 6 · yüzyıl 1; 111'i `-01-01` (yıl-temsilî), 39'u günlü.
**Antik maddelerde `-YYYY-01-01` yıl-temsilîdir** (kesinlik yıl/onyıl/yüzyıl; gün kaynaklı değil). İlk 40'ta gün-kaynaklı olanlar yalnız: Kudüs MÖ 597 (`-0596-03-16`, ABC 5, 2 Addaru, Wiseman 1956 çevirisi; Jülyen) ve Aşkelon (`-0603-12-01`, kesinlik **ay**: Kislîmu, gün yok).

## Sınıf dağılımı (ilk 40)
| Sınıf | Adet | Maddeler (sıra no) |
|---|---|---|
| (i) EKSİK / yanlış yerde kırılma | **17** | 1, 2, 4, 6, 7, 11, 21, 24, 25, 28, 30, 31, 33, 34, 35, 38, 39 |
| (ii) MEŞRU | **6** | 10, 20, 23, 27, 36, 37 |
| (iii) BELİRSİZ | **17** | 3, 5, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 22, 26, 29, 32, 40 |

Uygulanan düzeltme: **0**. (Çoğu `data/yerlesimler_mo_zincir.js` / `_mo_sumer.js` / `_once1281_*.js` dosyasında; kaynakların çoğu maddenin kendi `ic_not`ında "doğrudan açılmadı / ikincil aktarım" beyanlı; Livius.org "dayanak olamaz" — DUNYA-1102.)

## KÖK BULGU — kırılma yok çünkü ZİNCİR yok (ortak çözüm kovaları)
İlk 40'ın büyük çoğunluğunda haritada "kırılma eksik" demek yerine **yerleşimin o devirde sahipliği hiç yazılı değil** (`s:[]`, zincirin başı Roma'da, ya da beyanlı `__BOSLUK__`). Ölçülen:
- **Mısır/Nubya:** `Memphis` (mo_zincir) `kur=-0524`, tek dönem `ahamenis-misir`; `Uksur`, `Asyut`, `Asvan`, `Abydos` zincirleri **`roma-cumhuriyeti` -0029'da başlıyor**; `Mısır`, `Vâdî Halfâ` yerleşimlerinin hiç dönemi yok; `Sais` yalnız `sait-26[-0663→-0524]`. Oysa künyeler hazır: `misir-erken-hanedan`, `misir-eski-krallik`, `herakleopolis`, `tebai-11-hanedan`, `misir-orta-krallik`, `hiksos-15`, `misir-yeni-krallik`, `misir-3-ara`, `kush-25-hanedan`, `sait-26-hanedan`, `ptolemai`. **Kova A (Mısır MÖ zinciri)**: Memphis, Uksur(Teb), Sais, Asvan, Asyut, Abydos, Avaris, Herakleopolis, Vâdî Halfâ — künye uçlarından türer. Maddeler: 1, 2, 3, 5, 8, 9, 10, 25, 29, 30, 31, 37.
- **Sümer/Babil:** `yerlesimler_mo_sumer.js` yerleşimleri `s:[], d:[]` ("SAHİPLİK (s:) YAZILMADI — künyeler gelince eklenecek", KUNYE-SUMER-7-1010): `Isin`, `Larsa`; `Nippur` zinciri -2018'de biter; `Ur` -2003→-1924 beyanlı boşluk; `Mari` -2294→-1760 beyanlı boşluk (oysa `mari-lim` -1809→-1760, `samsi-adad` -1807→-1775 künyeleri var); `Babil` -1209→-0709 beyanlı boşluk (`kassit-babil` künyesi -1154'e kadar). **Kova B (Mezopotamya MÖ zinciri)**: maddeler 4, 6, 7, 18.
- **Levant/Suriye:** `Halep` `yamhad` -1599'da biter, `__BOSLUK__` -1599→-0063 (arada Mitanni/Hitit/Yeni Asur/Babil/Pers/Selevkos hiç yazılmamış); `Cerablus`(Karkemiş) `yeni-asur` -0608'de biter, `__BOSLUK__` -0608→1281 (Mısır/Babil/Pers yok); `Şam` -0608→-0063 boşluk (ama `selevkos` künyesi -0311→-0062!); `Kudüs` -0585→-0062 boşluk; `Askalân`, `Dibon`, `Fihl`, `Tiberya`, `Gazze`(1260'tan), `Sayda`(-0063'ten), `Malatya`, `Harran`(991'den) pre-1281 dönemi yok. `Megiddo` `kur=-0731` (İsrail dönemi "okunmadı" beyanı). **Kova C (Levant MÖ zinciri)**: maddeler 11, 12, 15, 19, 21, 24, 28, 33, 34, 35.
- **Ege/Anadolu:** `Ayasuluk`(Efes) zinciri `roma-cumhuriyeti` -0128'den başlıyor (Arzava/Lidya/Pers/İskender/Seleukos/Bergama yok); `İstanbul` `byzantion-polis[-0658→0073]` içinde Pers dönemi yok; `Pella`/`Aigai` `makedonya-krallik` içinde Pers vesayeti yok. **Kova D**: 13, 38, 39, 40.
- **Hellenistik Levant/Mısır (110 maddelik kuyruğun MÖ300-26 diliminin 23 maddesi için ortak çözüm önerisi):** `ptolemai` (-0322→-0029) ve `selevkos` (-0311→-0062) künyeleri **hiçbir Halep/Şam/Kudüs/Uksur/Asvan/Asyut zincirine yazılmamış** — hepsi `__BOSLUK__`/roma'ya atlıyor. Tek kovada (Kova A+C Hellenistik dilim) yazılırsa Ptolemaios–Seleukos–Roma maddelerinin bir kısmı kendiliğinden kapanır. (Bu 23'ü bu turda sınıflamadım; yalnız zincir ölçümü yaptım.)
- **Künye↔madde tarih kayması kümesi (yıl-temsilî, ±1 … 38 yıl):** Teb 663/664, Psamtik 656/653, TP III 733/732, Harran 610/609, Şutruk 1157/1154, Mitanni 1269/1259, Avaris 1529/1549, Hattuşa 1179/1199, Mentuhotep 2015/2054. **Kural önerisi:** önce MÖ konvansiyonu doğrula (`MÖ N = -(N-1)`; madde `-0662`="MÖ 663", künye `-0663`="MÖ 664"); sonra tek tarafı taşı: devlet ömrü (künye) maddenin kaynağına mı çekilir, madde mi taşınır — CLAUDE.md "künye aşımında sınıflandır" kuralı. Hakem kaynaklar: Shaw 2000 (Mısır), Frayne RIME/Charpin 2004 (Mezopotamya), Bryce 2005 (Hitit), Grayson 1975/ABC 3,5 (Babil kronikleri).
- **Veri hatası bulgusu:** `Samiriye` `kur=-0929` (israil-krallik künyesi başından), oysa Samiriye'yi Omri kurdu (MÖ ~880; madde #19 ve 1 Krallar 16:24). Şehir -0879 öncesi yok sayılmalı. (Kaynak okunmadı → "beyan", düzeltme önerilir.)
- **ic_not etiket hatası:** üç maddede `[devlet: hitit-imp]` — böyle bir devlet kimliği yok; gerçek id `hitit` (Hatti, -1649→-1199). `arzava`, `amurru`, `hanigalbat` devlet kimlikleri de yok (Hanigalbat = `mitanni`).

## (i) EKSİK KIRILMA — 17 madde (iki uç ölçümüyle)
"Sol uç" = kırılma öncesi sahip, "sağ uç" = sonrası; her biri künye ömrüne ve komşu dönemlere karşı ölçüldü.

| # | Madde (gün) | Yerleşim → eklenecek dönem | İki uç | Kaynak (maddede kayıtlı) | Gün durumu |
|---|---|---|---|---|---|
| 1 | Narmer birleşme `-3099-01-01` | Memphis, Abydos: `misir-erken-hanedan[-3099→-2685]` (Memphis `kur` -0524→-3099) | sol: yok (zincir başı; Aşağı Mısır'ın yerleşimi olarak Delta kenti Memphis ilk dönem); sağ: -2685 `misir-eski-krallik` f ✓. Künye f -3125 ↔ madde -3099 (26 yıl) | Shaw (ed.) 2000 kronoloji tablosu (c. MÖ 3100) | yıl-temsilî (yüzyıl) |
| 2 | Eski Krallık çöktü `-2180-01-01` | Memphis: `misir-eski-krallik[-2685→-2180]`, sonra `__BOSLUK__[-2180→-2159]` (7.-8. Hanedan künyesiz), `herakleopolis[-2159→-2054]`, `misir-orta-krallik[-2054→-1649]`… | sol: eski-krallik t -2180 ✓ ±0; sağ: herakleopolis f -2159 (21 yıl boşluk beyan) | Shaw 2000 (MÖ 2181) | yıl-temsilî (onyıl) |
| 4 | İşbi-Erra Ur/Nippur `-2001-01-01` | **Ur** (şu an `ur-3`→-2003→`__BOSLUK__`-2003→-1924→`larsa`): `__BOSLUK__[-2003→-2001]` + `isin[-2001→-1924]`; **Nippur** (zincir -2018'de bitiyor): `__BOSLUK__[-2018→-2001]`, `isin[-2001→…]` | sol: ur-3 t -2003 (2 yıl ≈ madde -2001: **730 gün > 30**; kırılma yerleşiminde mevcut ama madde 2 yıl sonra); sağ: Ur için larsa f -1924 ✓ (var); Nippur sağ uç bilinmiyor | Charpin 2004 (OBO 160/4); Frayne RIME 4 (1990) — kaynak maddede "açılmadı" | yıl-temsilî; **sorun yalnız 2 yıllık fark**: ya Ur `ur-3` t'si -2001'e çekilir (Orta Kronoloji: Ur III sonu MÖ 2004/2003 ↔ İşbi-Erra yıl 16 ≈ MÖ 2002; tutarlı çözüm: boşluğu -2001'e kadar uzat) |
| 6 | Şamşi-Adad Mari `-1794-01-01` | Mari (şimdi `__BOSLUK__[-2294→-1760]`): `mari-lim[-1809→-1794]`, `samsi-adad[-1794→-1775]`, `mari-lim[-1775→-1760]`, sonra `babil-eski[-1760→-1594]` ✓ var | sol: mari-lim f -1809 ✓ (künye içinde); sağ: samsi-adad t -1775 (Zimri-Lim dönüşü) ✓ künye; **künyeler çakışıyor** (mari-lim -1809→-1760 ile samsi-adad -1807→-1775): denetim anakronizm çıkarır — künye düzeltmesi ayrı iş | Charpin 2004; Durand, *Archives épistolaires de Mari* 1988 (doğrudan açılmadı; oyna ±5 yıl) | yıl-temsilî (onyıl) |
| 7 | Rim-Sin Isin `-1793-01-01` | Isin `s:[]` → `isin[-2016→-1793]`, `larsa[-1793→-1762]`, `babil-eski[-1762→-1594]`; Larsa `s:[]` → `larsa[-2024→-1762]`, `babil-eski[-1762→-1594]` | sol: isin f -2016 ✓ künye; sağ: **isin t -1793 = madde ±0** ✓; larsa t -1762 (Hammurabi) ✓ | Charpin 2004; Livius (dayanak değil) | yıl-temsilî (yıl) |
| 11 | Şuppiluliuma Halep `-1344-01-01` | Halep (`__BOSLUK__[-1599→-0063]` yerine): `mitanni[-1499→-1344]` (+ `__BOSLUK__[-1599→-1499]`), `hitit[-1344→-1199]`, sonra Yeni Hitit/Arami/Asur… (sağ taraf kaynaksız) ; Cerablus(Karkemiş) için de `mitanni`→`hitit[-1344→-1199]` ardından mevcut `yeni-hitit[-1199…]` ✓ | sol: mitanni f -1499 (Halep Mitanni'ye bağlı mı: kaynak gerek); sağ: Cerablus'ta yeni-hitit f -1199 = hitit t ✓ ±0 | Bryce 2005 s.197-200, 208 (madde; Livius teyidi çıkarıldı) | yıl-temsilî (onyıl); **Halep'in Mitanni'ye vasal sayılması hakemli** |
| 21 | Meşa isyanı `-0839-01-01` | Dibon (dönemi yok): `israil-krallik[?→-0839]`, `moab[-0839→-0581]`; Moab künyesi -1299→-0581 | sol: Omri'nin Moab'ı alış yılı bilinmiyor (madde #19 `-0879` yalnız Samiriye kuruluşu) → sol uç `__BOSLUK__`/`moab`; sağ: moab t -0581 ✓ künye | Meşa Steli (KAI 181; Dearman 1989); II Krallar 3:4-27 — maddede Livius (dayanak değil) | yıl-temsilî (onyıl, "MÖ 840 yaklaşık") |
| 24 | TP III Galile/Gilead `-0732-01-01` | Megiddo (`kur -0731`): `israil-krallik[-0929→-0731]` (Megiddo İsrail dönemi "okunmadı" beyanlı); Fihl (Pella) / Tiberya yok; **madde `-0732` ↔ Megiddo f `-0731`: 1 yıl (365 gün)** | sol: israil künye ✓ (−0929); sağ: yeni-asur f -0731 ✓ (MÖ 732) | Tadmor 1994; II Krallar 15:29; AEBP Israel (Megiddo yer notu) | yıl-temsilî; **madde `-0731`'e taşınır** (Tadmor: 733-732, 732 esas) |
| 25 | Piye Mısır `-0724-01-01` | Sais (`sait-26` -0663'ten): `__BOSLUK__/24.Hanedan[?→-0724]`, `kush-25-hanedan[-0724→-0663]`; Memphis, Uksur, Herakleopolis: `kush-25-hanedan[-0724→-0663]` | sol: 24. Hanedan künyesi yok → beyanlı boşluk; sağ: sait-26 f -0663 / kush-25 t -0652 (11 yıl çelişki, #30-31 ile) | Breasted ARE IV §§796-883; Shaw 2000 (Piye 747-716) | **madde ±0 künye f** ✓ -0724; yıl-temsilî (onyıl) |
| 28 | Esarhaddon Sayda `-0676-01-01` | Sayda (pre-Roman zincir yok): `fenike-sehirleri[-1199→-0676]`, `yeni-asur[-0676→-0608]`, `yeni-babil[-0608→-0538]` | sol: fenike-sehirleri f -1199 ✓ künye; sağ: yeni-asur t -0608 ✓ künye | Luckenbill 1924; Leichty RINAP 4 (2011); maddede "ikincil aktarım" | yıl-temsilî (yıl; Esarhaddon yıl 4=MÖ 677) |
| 30 | Asur Teb'i yağmaladı `-0662-01-01` | Uksur (zincir roma -0029'dan): `kush-25-hanedan[-0724→-0663]`, `sait-26-hanedan[-0663→-0524]` (Teb 656'ya kadar Kush/Asur/Sais arası — #31) | sol: kush-25 f -0724 ✓; sağ: **sait-26 f -0663 ↔ madde -0662 = 1 yıl** (madde kendi ic_not'unda MÖ 663 seçtiğini, künye 664 aldığını yazıyor) | Breasted ARE IV; Aşurbanipal yıllıkları; Radner/Kitchen (maddede) | yıl-temsilî; **madde `-0663`'e taşınır** (künye MÖ 664) ya da künye `-0662` |
| 31 | Psamtik I Teb'i denetime aldı `-0655-01-01` | Uksur: `kush-25-hanedan→sait-26-hanedan` geçişi **-0655'te** (`kush-25` t -0652 → -0655'e çekilir), Sais ✓ | sol: kush-25 t -0652 (3 yıl); sağ: sait f -0663/Uksur'da -0655 | Breasted ARE IV §§935-958 (okundu); Shaw 2000 (Psamtik 664-610) | yıl-temsilî; madde kendi `ic_not`unda künye farkını ("~3 yıl") yazıyor — künye t -0652 sonraki Taharka/Tantamani çekilişinin devamı ⇒ **kovada hakem** |
| 33 | Harran `-0609-01-01` | Harran (zincir 991'den): `yeni-asur[?→-0609]`, `yeni-babil[-0609→-0538]` (Pers/Selevkos sonrası yok) | sol: yeni-asur künyesi -0910→-0608 ✓; sağ: yeni-babil t -0538 ✓; **yeni-asur t -0608 ↔ madde -0609: 1 yıl** | ABC 3 (Grayson 1975; okundu); TDV `harran` (çift teyit notlu) | yıl-temsilî (yıl; "Arahsamnu 610") |
| 34 | Karkamış Savaşı `-0604-01-01` | Cerablus (şimdi `yeni-asur`-0608'de biter, `__BOSLUK__[-0608→1281]`): `sait-26-hanedan[-0608→-0604]`, `yeni-babil[-0604→-0538]`, `ahamenis[-0538→-0329]`… ; Hama da (dönemi yok) | sol: yeni-asur t -0608 ✓ (4 yıl boşluğa Mısır dolar, ABC 3: Mısır Karkamış'ta 609-605); sağ: yeni-babil -0625→-0538 ✓ künye | ABC 5 Obv. 1-8 (okundu) | yıl-temsilî (yıl; Nabopolassar 21. yıl; gün kronikte yok) |
| 35 | Nabukadnezar Aşkelon `-0603-12-01` | Askalân (dönemi yok): `filistin-pentapolis[-1174→-0603-12-01]`, `yeni-babil[-0603-12-01→-0538]`, `ahamenis[-0538→…]` | sol: **filistin-pentapolis t künye `-0603-01-01` ↔ madde `-0603-12-01`** = 334 gün (künye yıl-temsilî Ocak 1; olay Kislîmu = Kasım/Aralık, aynı yıl); sağ: yeni-babil f künyesi -0625 ✓ | ABC 5 Obv. 18 (okundu); TDV | **ay kaynaklı** (Kislîmu); gün yok; künye t `-0603-12-01`'e (ay hassasiyetiyle) çekilir |
| 38 | Kroisos Efes/İyonya `-0559-01-01` | Ayasuluk(Efes) (zincir `roma-cumhuriyeti` -0128'den): `lidya[-0559→-0545]`, `ahamenis[-0545→-0329]`, `iskender-imparatorlugu[-0329→-0309]`, `selevkos/bergama[…]` ; (Sart zaten `lidya[-0651→-0545]` ✓) | sol: Efes Kroisos öncesi (bağımsız/Pers?) beyanlı boşluk; sağ: lidya t -0545 ✓ künye (Sart ile aynı) | Herodotos 1.26, 1.86; TDV `efes` | yıl-temsilî (yıl; Kroisos 560) |
| 39 | Dareios İskit seferi `-0512-01-01` | İstanbul (`byzantion-polis[-0658→0073]`): bu dönemi `byzantion-polis[-0658→-0512]`, `ahamenis[-0512→-0478]`, `byzantion-polis[-0478→0073]` | sol: ahamenis f künye -0549 ✓; sağ: -0478 Pausanias/Yunan çıkarma — **kaynak okunmadı** (Thukydides 1.94, Herodotos 4.138, 5.1-2 okunmalı) | Herodotos IV.83-144; Briant 2002 s.139-146 (madde) | yıl-temsilî (513/512) |

Not (#4, #6, #11, #21): iki uçlu ölçümde bir uç hep "kaynak yok" çıkıyor; bu uç `__BOSLUK__` BEYANI (boşluk merdiveni ①-④) ile kapatılabilir, ama ancak maddenin kendi kaynağı doğrudan okunduktan sonra.

## (ii) MEŞRU — 6 madde
- **#10 II. Amenhotep Napata `-1424`** — stel dikme seferi; Napata (Kush) Mısır'a Tutmosis I/III'ten beri bağlı (Breasted ARE II); sahiplik değişimi yok (Kerma `__BOSLUK__[-1499→-1079]` ayrı beyanlı iş, Kova A).
- **#20 II. Aşşurnasirpal Karkemiş `-0876`** — haraç (vasallık), ilhak değil; Karkemiş'in Asur'a geçişi -0716'da (`yeni-hitit`→`yeni-asur`, Cerablus ✓ mevcut).
- **#23 III. Adad-nirari Dımaşk `-0795`** — haraç; Şam `aram-sam` -0731'e kadar sürer, `yeni-asur` -0731 ✓ (TP III 732).
- **#27 Sennacherib Sayda `-0700`** — Luli kaçtı, Asur Ittobaal'ı atadı; aynı polity (`fenike-sehirleri`) sürer; ilhak -0676'dır (#28).
- **#36 Nabukadnezar Kudüs `-0596-03-16`** — ilk alış, Sedekiya vasal olarak atandı; `yahuda` künyesi -0585'e kadar ✓ (586 ilhakı). Tarih **gün kaynaklı** (2 Addaru = 16 Mart Jülyen, ABC 5; 1582 öncesi yazılır). Tür etiketi `toprak-kayip` yanıltıcı → `vassal`/`isgal` önerilir (kronoloji düzeltmesi).
- **#37 II. Psamtik Nubya `-0592`** — geçici sefer; Napata'nın Mısır'a geçişi iddiası kaynaksız (ic_not "ikincil aktarım").

## (iii) BELİRSİZ — 17 madde (eksik: ne)
- **#3 Mentuhotep `-2015`** — künye `herakleopolis` t -2054 (Shaw: saltanat başı 2055) ↔ madde -2016 (Callender: birleşme 39. yıl). Aynı kaynağın (Shaw 2000) iki okuması; hangisi "kırılma"? Eksik: Callender bölümü (s.148-183) okuması + hakem.
- **#5 III. Sesostris Semne `-1866`** — Semne/Kumme atlasta yok; Vâdî Halfâ dönemi yok. Buhen/II. Şelale Mısır'ın elinde Senusret I'den beri olabilir; "sınır Semne'ye çekildi" sahiplik değişimi mi, sınır tahkimi mi? Eksik: yerleşim (Semne, Kumme, Buhen) + Shaw/Breasted ARE I §652 okuması.
- **#8 Ahmose Avaris `-1529`** — künye `hiksos-15` t -1549 (Ahmose'nin tahta çıkışı) ↔ madde -1529 ↔ madde kendi hesabına göre (saltanat 1550-1525, 15.-18. yıl) -1536…-1533. Üç farklı yıl; Avaris zinciri `hiksos-15[-1649→-1549]` sonra boş.
- **#9 Ahmose Nubya `-1524`** — Aşağı Nubya Kerma'dan mı Mısır'a (Vâdî Halfâ dönemi yok); `kerma` t -1499 ↔ -1524 (25 yıl). Buhen steli okunmadı.
- **#12 Amarna çağı `-1339`** — "çözüldü / nüfuz alanına kaydı" süreç + vasallık; Amurru, Kadeş atlasta yok (Ugarit `ugarit` künyesi ✓ var, vasal).
- **#13 II. Mursili Arzava `-1317`** — `arzava` devlet kimliği yok; Efes (Apasa) zinciri yok. Eksik: Arzava künyesi + Efes.
- **#14 I. Adad-nirari Hanigalbat `-1294`** — yerleşimler `Deyrizor`, `Ceylanpınar` modern kent (MÖ dönem yok); Hanigalbat'ın yerleşimleri (Taidu, Waššukanni) atlasta yok; vasal yapma.
- **#15 I. Seti Kenan `-1293`** — Kenan'da Mısır hâkimiyeti Tutmosis III'ten beri; sefer geçici (Kadeş sonra Hitit'e geçti); yerleşim zincirleri Gazze(1260'tan), Sûr, Megiddo(-0731'den), Humus(-0063'ten) yok.
- **#16 I. Şalmaneser Hanigalbat `-1269`** — künye `mitanni` t -1259 ↔ madde -1269 (10 yıl); yerleşim yok (#14).
- **#17 Hattuşa `-1179`** — `hitit` t / Hattuşa zinciri t -1199 ↔ madde -1179 (20 yıl; arkeolojik "MÖ 1200-1180"). Kesin kırılma günü yok; künye ucu hakem: Seeher 2010; Aklan 2023; Bryce 2005.
- **#18 Şutruk-Nahhunte Babil `-1157`** — yağma ≠ ilhak; Kassit sonu künye -1154 (3 yıl); Babil `__BOSLUK__[-1209→-0709]` ve Sippar zinciri yeni-babil -0625'ten başlıyor → asıl sorun Kova B.
- **#19 Omri `-0879`** — Samiriye `kur -0929` (Omri'den önce!) + "Moab'ı aldı" tarihsiz (Dibon dönemi yok) — #21 ile birlikte çözülür. Livius dayanak değil; 1 Krallar 16:24, Meşa Steli (KAI 181).
- **#22 Minua Urartu `-0809`** — "uzandırdı" genişleme; Van (Tuşpa) yerleşimi dönemi yok; hangi yerleşimler hangi gün geçti belirsiz (Aras'ta Erebuni 782 kuruluşu ileri).
- **#26 II. Sargon Malatya (Melid) `-0711`** — `Malatya` yerleşiminin MÖ dönemi yok; Melid = Arslantepe (atlasta ayrı nokta yok), `Eski Malatya (Battalgazi)` farklı yer. Künye `yeni-hitit` t -0707 ↔ -0711 (4 yıl).
- **#29 Asarhaddon Memphis `-0670`** — **Memphis kaydı bilerek yazılmamış** ("Esarhaddon 671 fethi için YILLI sınır kaynaklarda yok: dönem yazılmadı", Memphis `not:`); Asur'un Mısır'da ne kadar kaldığı okunmadı → boşluk merdiveninde ① TDV `misir`, ② Radner, Kitchen.
- **#32 Asurbanipal Susa `-0644`** — Susa `elam-yeni[-1099→-0538]` yıkımdan sonra da sürüyor (Pers'e geçiş -0538); yıkım sahiplik değişimi mi, yok olma mı? Eksik: Susa'nın MÖ 645 sonrası durumu (Pers/Elam bakiyesi) kaynağı.
- **#40 Mardonios Makedonya `-0490`** — vasallık (Herodotos 6.44-45); Aigai/Pella `makedonya-krallik` sürer. Atlasın vasal politikası (MÖ'de `v:` yok): vasal Pers'e bağlı sayılacaksa `ahamenis[-0491→-0479]` yamaları; yoksa meşru. **Karar Emre'nin.**

## Ortak çözüm önerileri (kısa)
1. **Kova A — Mısır MÖ zinciri (12 madde)**: Memphis, Uksur, Sais, Asvan, Asyut, Abydos, Avaris, Herakleopolis, Vâdî Halfâ için künye uçlarından sahip zinciri (Shaw 2000). Künyeler hazır; "kaynaklı halka" yerine `kur`/`bit` + `s:`.
2. **Kova B — Mezopotamya**: `yerlesimler_mo_sumer.js` `s:[]` kayıtları (Isin, Larsa, Nippur…) künye ömrüyle doldurulur; Ur/Mari/Babil beyanlı boşlukları künye uçlarıyla kapanır (#4, #6, #7, #18).
3. **Kova C — Levant**: Halep, Cerablus, Şam, Kudüs, Sayda, Askalân, Dibon, Megiddo için Mitanni/Hitit/Yeni Asur/Yeni Babil/Pers/Selevkos/Ptolemai zinciri (#11, #12, #15, #19, #21, #24, #28, #33-35); **Hellenistik dilim** (`selevkos`/`ptolemai` künyeleri) tek hamlede → kuyruktaki 23 MÖ300-26 maddesinin bir kısmı da kapanır.
4. **Kova D — Ege/Anadolu**: Efes, İstanbul, Pella/Aigai Pers dönemleri (#13, #38-40).
5. **Künye↔madde kayma kümesi (9 madde)**: önce konvansiyon (MÖ N = -(N-1)) sonra hakem; devlet künyesine dokunmak "künye aşımında sınıflandır" kuralı (CLAUDE.md).
6. **`hitit-imp` etiket hatası** (ic_not) ve `arzava/amurru/hanigalbat` künye eksikliği: tek düzeltme işi.

## Ölçülmeyen / eksik
- Maddelerin kaynakları (Shaw 2000, Charpin 2004, Bryce 2005, Breasted ARE, Grayson ABC, Tadmor 1994) **bu oturumda doğrudan okunmadı**; "kaynak" sütunu maddenin kendi `kaynak:`/`ic_not` kaydıdır. Hiçbir ek bu yüzden uygulanmadı.
- Yerleşim zincirleri yalnız `girdi.py` yükleyicisinden ölçüldü (`d`,`v`,`s`,`isg` listeleri; ±25 yıl ve tam zincir); `kur`/`bit` ve `not:` alanları örneklendi.
- Kalan 110 madde (#41-150) sınıflanmadı; yalnız dağılım ve kova eşlemesi verildi.
