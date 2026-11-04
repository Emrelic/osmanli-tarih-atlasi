# 26 · Büyük Selçuklu Devleti — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 3 Kasım 2026 (ölçer: top100_olc.py buyuk-selcuklu; WebFetch TDV okumaları aynı gün)

## Özet
- Künye: 1 ana (`buyuk-selcuklu`) + 4 ilişkili (`kirman-selcuklu`, `suriye-selcuklu`, `irak-selcuklu`, `selcuklu`=Anadolu). Ana künyede 37 yerleşim kaydı, en geniş an 1088 (32 yerleşim).
- Kırılma 61, ±30 günde alâkalı maddesi olmayan (AÇIK) 4 (Ankara 1073, Mardin 1085, Urfa 1087, Termez 1102). Eksik madde önerisi: 6 (4'ü açık kırılmaları kapatır).
- En ağır 3 bulgu:
  1. **Başkent ve çekirdek yerleşimler haritada delik/yok:** Rey (1042'den başkent) `s:[]` (veri-yok); İsfahan 1051-1235 `__BOSLUK__`; Hemedan, Kazvin için 1253 öncesi kayıt yok. En geniş yılda 32 yerleşimin hiçbiri Cibâl çekirdeğinden değil (Tebriz, Kirmanşah, Zencan, Şiraz, Bağdat, Kûfe var; İsfahan/Rey/Hemedan yok). Sultanlığın siyasi merkezi haritada görünmüyor.
  2. **Künye f/t ile olay tarihleri tutarsız:** künye `t:1157-04-26` (TDV ilk rivayet) ama kronoloji maddesi `olaylar_ortacag_iran_turan.js:143` `t:1157-04-13` (Rebîülevvel 552 başı, ay hassasiyeti) — 13 gün fark, aynı olay iki gün. Künyenin `ic_not_t` metni hâlâ "1157-01-01" diyor (bayat). Künye f `1038-01-01` yıl; ilk toprak devri 1038-05-09 (Talhâb sonrası); TDV `selcuklular` "ilk hükümdarı (1040-1063)" der, atlas 1038 beyanlıdır.
  3. **Termez 1102-05-22 başlangıcı çıkarım:** kaynaktaki olay Hârun Tegin'in Sencer eliyle ölümü (Karahanlı iç olayı); Termez'in Selçuklu'ya geçişi başka maddeyle doğrulanmamış, kronolojide madde yok (en yakın madde 119 gün).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| buyuk-selcuklu | Büyük Selçuklu Devleti | 1038-01-01 | 1157-04-26 | ana künye; baskent "Nîşâbur → Rey → İsfahan → Merv" |
| irak-selcuklu | Irak Selçukluları | 1118-05-06 | 1194-01-01 | ilişkili (Tapar soyu); f için 18 gün önce ölen Muhammed Tapar (1118-04-18, künye kronolojisi) ile fark var — bu denetimin kapsamı dışı, ayrı denetime bırakıldı |
| kirman-selcuklu | Kirman Selçukluları | 1048-01-01 | 1187-01-01 | ilişkili; evre eksik değil (Kavurd 1048-06-16 maddesi `olaylar_ortacag_bekleyen_acik.js:77`) |
| suriye-selcuklu | Suriye Selçukluları | 1079-01-01 | 1117-01-01 | ilişkili |
| selcuklu | Anadolu (Türkiye) Selçuklu | 1075-01-01 | 1308-01-01 | ilişkili (bu denetimin dışında); Süleyman Şah İznik maddesi 1078-01-01 (`olaylar_ortacag_iran_turan.js:98`), künye f 1075 — 3 yıl fark, ilgili ajana not |
Eksik evre/parça: yok (Büyük Selçuklu → Irak/Kirman/Suriye kolları ayrı künyelerde). Sencer'in Horasan Selçuklusu (1118-1157) ana künyenin içinde; ayrı künye gerekmiyor.

## b) f/t ve evreler
| uç | atlas değeri | kaynak 1 | kaynak 2 | hüküm | önerilen satır |
|---|---|---|---|---|---|
| f (kuruluş) | 1038-01-01 (yıl) | TDV `tugrul-bey` (Faruk Sümer): Talhâb zaferi "Şâban 429 / Mayıs 1038" sonrası Horasan'ın bir kısmı işgal edildi (künye ic_not_f'de alıntılı; bu oturumda ana metin okunmadı, `selcuklular` md. okundu: «Dandanakan zaferinin ardından Tuğrul Bey, Büyük Selçuklu Devleti'nin ilk hükümdarı oldu (1040-1063).») | TDV `selcuklular` md.: 8 Ramazan 431 / 23 Mayıs 1040 Dandanakan. İkinci BAĞIMSIZ akademik kaynak (Bosworth, CHI vol.5, "Political and Dynastic History 1000-1217"; Iranica "Saljuqs") okunamadı → aşağıda listeli | TDV iç çelişkisi: 1038 (fiilî egemenlik) vs 1040 (hükümdarlık). Atlas 1038'i beyanla tutuyor; sınır kaydı `kronoloji_sinir_dogu_500_1281.js:6125` 1038-05-09 (Şâban 429 ∩ Mayıs 1038 ilk günü; tabloyla 1 Şâban 429 = Jülyen 1038-05-09, bu ajanın aritmetik hicrî hesabıyla doğrulandı). Künye f yılı 01-01, ilk toprak 05-09: Ocak-Mayıs arası devlet var ama toprak yok. | Öneri (KASA kararı): f `1038-05-09` (ay hassasiyeti, ic_not: hicrî aralık ∩ Mayıs 1038 ilk günü) VEYA f `1040-05-23` (TDV "ilk hükümdar"; o zaman 3 yerleşimin 1038-1040 dilimi kısalır). Ben 1038-05-09'u öneririm — sınır kaydıyla tutarlı, "devlet fiilen Talhâb'dan" ifadesi TDV `tugrul-bey` ile örtüşür. |
| Dandanakan | künye kron. `1040-05-23` | TDV `selcuklular`: 8 Ramazan 431 Cuma / 23 Mayıs 1040 (okundu) | TDV `gazneliler` (alıntı `olaylar_ortacag_iran_turan.js:72` içinde) | Doğru; evrende var. | — |
| Rey merkez | evrende `1042-08-21` yıl (`...iran_turan.js:75`) | TDV `selcuklular`: Rey merkez, 434 / 1042-43 (okundu: «aynı yıl Rey'i devletinin merkezi yaptı») | — | Madde t:`1042-08-21` kesinlik "yil" — TDV 1042-43 verir, ay-gün YOK; `1042-08-21` uydurma gün riski. | Öneri: t `1042-01-01` ya da hicrî 434 ∩ 1042 ilk günü (1 Muharrem 434 = 1042-08-21 tablo; yani 21 Ağustos hicrî yıl başı olabilir). Hicrî yıl rehberi uygulandıysa ic_not'a "434 başı ∩ 1042" yazılmalı; madde ic_not'u görülmeli. |
| Bağdat | `1055-12-18` gün | TDV `selcuklular`: 25 Ramazan 447 / 18 Aralık 1055 (okundu) | TDV `bagdat`: «1055'te Tuğrul Bey Bağdat'a girdi» (yıl) | Doğru (tablo: 25 Ramazan 447 = 1055-12-18 ✓). Evrende `olaylar_t5_1000a.js:18`. | — |
| Malazgirt | `1071-08-26` | TDV `selcuklular`: 27 Zilkade 463 / 26 Ağustos 1071 | — | Doğru; evrende `olaylar_ortacag_bizans_balkan.js:52`. | — |
| Melikşah ölümü / ardıllar | `1092-11-19` | TDV `selcuklular`: 16 Şevval 485 / 19 Kasım 1092 | — | Doğru (künye kron.; evrende `kronoloji_sinir_once1281_geriye.js:20`, `1092-11-19`). | — |
| Sâve / Sencer sultanlığı | `1119-09-10` | TDV `selcuklular`: 2 Cemâziyelâhir 513 / 10 Eylül 1119 (künye kron.) | TDV `sencer`: Sencer 14 Haziran 1118'de hükümdarlığını ilan etti (okundu) | Sâve maddesi evrende (`...iran_turan.js:126`) doğru. Sencer'in 14 Haz 1118 sultanlık ilânı (`...iran_turan.js:125`, t:1118-06-01 ay) gün TDV `sencer`'de var: 14 Haziran. Madde ay hassasiyeti ama gün biliniyor. | `olaylar_ortacag_iran_turan.js:125` t `1118-06-14`, kesinlik gün, kaynak TDV `sencer` («14 Haziran 1118'de»). |
| Katvân | künye kron. `1141-09-09` | TDV `sencer`: 5 Safer 536 / 9 Eylül 1141 (okundu) | TDV `karahitaylar` | Doğru; sınır kaydı `kronoloji_sinir_once1281_yerlesim_asya_iran.js:23` `1141-09-09`. Evrende ayrıca `olaylar_ortacag_iran_hint_magrib.js:78` t:`1141-01-01` yıl (Hârizmşah haraç) — Katvân'ın kendisi evrende gün hassasiyetli ayrı madde olarak yok (yalnız sınır kaydı ve künye kron.). | Öneri aşağıda (c). |
| t (bitiş) | `1157-04-26` (künye) | TDV `sencer`: «14 veya 24 Rebîülevvel 552 (26 Nisan veya 6 Mayıs 1157)» (okundu) | TDV `selcuklular` aynı iki gün | İki rivayet; atlas ilkini seçmiş (künye ic_not_t'sinde çelişki beyanı var ama metin 1157-01-01 diyor: BAYAT). Tablo: 14 Rebîülevvel 552 = Jülyen 1157-04-26, 24'ü = 05-06 (doğrulandı). Evren maddesi `...iran_turan.js:143` ise 1157-04-13 (ay hassasiyeti, Rebîülevvel başı). Sınır kayıtları (Merv `kronoloji_sinir_dogu_500_1281.js:8147`) 1157-04-26. | **Tek gün seç:** künye ve sınırlar 04-26 ise madde `...iran_turan.js:143` t→`1157-04-26`, kesinlik gün, ic_not'a "6 Mayıs rivayeti ayrı"; künye `ic_not_t` metni "1157-01-01" cümlesinden arındırılıp 04-26 gerekçesi yazılmalı. |

Güvenilirlik notu: bu denetimde yalnız TDV maddeleri (selcuklular ilk 100.000 karakter, sencer, bagdat, ankara, sanliurfa, mardin) okundu; ikinci bağımsız akademik kaynak (Cambridge History of Iran 5, Iranica, İSAM/TTK) erişilemedi → f ve t için "iki bağımsız kaynak" şartı **sağlanamadı**; hüküm tek (TDV) kaynaklıdır, ikinci kaynak listesi aşağıda.

## c) Kronoloji (Değişmez 2 evreni: `data/olaylar*.js`, `data/kronoloji_sinir*.js`)
Var olanlar:
- Çağrı/Tuğrul Ceyhun'u geçti 1035-05-12 (`olaylar_ortacag_iran_turan.js:69`).
- Talhâb sonrası Nîşâbur/Merv/Serahs 1038-05-09 (sınır, `kronoloji_sinir_dogu_500_1281.js:6125`).
- Dandanakan 1040-05-23 (`olaylar_ortacag_iran_turan.js:72`).
- Rey merkez 1042-08-21 yıl (`...:75`) — gün uydurma riski, yukarıda.
- Bağdat 1055-12-18 (`olaylar_t5_1000a.js:18`), Besâsîrî 1060-01-08 (`...iran_turan.js:87`).
- Tuğrul'un ölümü 1063-09-04, Alparslan sultan 1064-04-27 (`...:89,91`), Malazgirt 1071-08-26.
- Melikşah ölümü 1092-11-19 (sınır), Sâve 1119-09-10, Dînever 1132-05-25, Sencer ölümü 1157-04-13 (`...:143`).
- İsfahan'ın Tuğrul'a geçişi 1051-05-15 (`olaylar_ortacag_bekleyen_acik.js:80`).
- Künye içi `kronoloji:[...]` maddeleri (1055, 1063, 1071, 1072, 1092, 1118, 1141, 1153...) **evren dışı** — "var, evren dışı".
Eksik/öneri (kaynak okunmuş olanlar tam satır; öteki "okunmadı"):
1. Katvân Savaşı (evrende tek başına madde yok):
   `{ t:"1141-09-09", b:"Katvân Savaşı: Sencer Karahıtay Gürhan'a yenildi; Mâverâünnehir Karahıtaylar'a geçti", yer_id:"Semerkant", kaynak:"TDV sencer: «5 Safer 536 / 9 Eylül 1141» (okundu); TDV karahitaylar" }`
2. Ankara'nın Selçuklu'ya geçişi (AÇIK #1): `{ t:"1073-01-01", b:"Selçuklular Ankara'yı fethetti (Malazgirt'ten iki yıl sonra)", yer_id:"Ankara", kaynak:"TDV ankara: «Selçuklular Malazgirt Zaferi'nden iki yıl sonra Ankara'yı da fethettiler (1073).» (okundu; yalnız yıl), kesinlik:"yil" }`
3. Mardin (AÇIK #2): TDV `mardin`: «Büyük Selçuklu Sultanı Melikşah 478'de (1085) şehirdeki Mervânî hâkimiyetine son verdi.» (okundu, yalnız hicrî yıl+miladî yıl). Hicrî 478 = 1085-04-29 → 1086-04-18 (tablo); ∩ 1085 → ilk gün **1085-04-29**. `{ t:"1085-04-29", b:"Melikşah Mardin'de Mervânî hâkimiyetine son verdi", yer_id:"Mardin", kaynak:"TDV mardin…", kesinlik:"yil", ic_not_d:"478 ∩ 1085 → 04-29 (tablo); gün kaynakta yok" }` ve yerleşim `Mardin` s: `f:"1085-01-01"` → `"1085-04-29"` (bugün f 1085-01-01 yıl; madde 1085-04-29 ile aynı güne çekilince açık kırılma kapanır; ayrıca `Siirt 1085-04-29` sınır maddesi (`kronoloji_sinir_once1281_geriye.js:178`) aynı hicrî ∩ yıl mantığıyla oraya zaten yazılmış).
4. Urfa (AÇIK #3): TDV `sanliurfa`: «şehir üç ay süren şiddetli bir kuşatmanın ardından fethedildi (Zilhicce 479 / Mart 1087)» (okundu; AY hassasiyeti, gün yok). Tablo: Zilhicce 479 = Jülyen 1087-03-09 → 04-06; ∩ Mart 1087 → ilk gün **1087-03-09**. `{ t:"1087-03-09", b:"Melikşah Urfa'yı üç aylık kuşatmadan sonra aldı; Emîr Bozan vali", yer_id:"Urfa", kesinlik:"ay", kaynak:"TDV sanliurfa…" }`; yerleşim `Urfa` s: `f:"1087-01-01"` (yıl) → `"1087-03-09"` (bugünkü f 1087-01-01 ay doğrulamasıyla 2 ay önce, **sahte erken**).
5. Termez (AÇIK #4): s: `f:"1102-05-22"` kaynağı TDV `karahanlilar`: «Sencer tarafından esir alınıp idam edildi (2 Şâban 495 / 22 Mayıs 1102)» — bu Hârun Tegin'in ölümüdür, Tirmiz'in el değiştirmesi değil (yerleşim kaydı kendisi "BEYANLI YAKLAŞIKLIK" diyor). Öneri iki seçenekten biri: (a) olayı madde yap: `{ t:"1102-05-22", b:"Sencer Karahanlı Hârun Tegin'i esir alıp idam ettirdi; Tirmiz Selçuklu etkisine girdi (BEYANLI)", yer_id:"Termez", kaynak:"TDV karahanlilar, tirmiz" }` ya da (b) yerleşimin 1102-05-22 f'sini kaldırıp Tirmiz'i `__BOSLUK__` bırak (Beyansız yaklaşıklık beyanlı boşluktan kötüdür kuralı). TDV `tirmiz`'in kendisi okunmadı.
6. Sencer'in sultanlık ilânı günü: yukarıda b) tablosunda (1118-06-14).

## d) Harita uyumu
- Kırılma 61 · AÇIK 4 (yukarıdaki 2-5 numaralı öneriler hepsini kapatır).
- Yerleşim sayısı: 37 kayıt; yıl yıl: 1038:3 · 1043:7 · 1058:14 · 1073:22 · 1088:32 (zirve) · 1098:26 · 1118:13 (Irak ayrılığı) · 1133:11 · 1153:8.
- **Zirve yılı (1088) sahiplik uyumu:** var: Nîşâbur, Merv, Serahs, Herat, Belh, Zerenc, Tûs, Zencan, Tebriz, Nahçıvan, Merâga, Urmiye, Kirmanşah, Şiraz, Bağdat, Kûfe, Tikrit, Musul (1096'dan; 1088'de Ukaylî? — 1086 Süleyman-Müslim savaşı sonrası Musul Selçuklu'ya; yerleşim 1056-61 ve 1096-1118 diyor, **1061-1096 aralığında Musul başka sahipli**: kayıt Büyük Selçuklu için boşluk bırakmış; kaynak okunmadı), Mekke (1070-76, 1080-92; "hutbe" mi fiilî egemenlik mi? yerleşim kaydı kaynağı okunmadı; Mekke'nin Büyük Selçuklu "sahipliği" yalnız hutbe okutma olabilir — şüpheli, ayrıca doğrulanmalı), Antakya, Diyarbakır (1085-05-31→1093), Ankara (1073-1101), Sivrihisar, Humus, Ahlat (1071→1100), Esterâbâd (1090→1140), Gürgenç (1043-1097).
- **Eksik/delik olan çekirdek:** Rey (başkent 1042-; `s:[]`, bit:1281-01-01, veri-yok), İsfahan (1051→1235 `__BOSLUK__`; Melikşah döneminin başşehri — TDV `selcuklular`: «Sultan Melikşah zamanında başşehir Rey'den İsfahan'a nakledilmiştir», yıl verilmez), Hemedan, Kazvin, Kum/Kâşân (Kâşân 1000-1118 `__BOSLUK__`), Yezd (1177 öncesi yok), Basra (kayıt yok), Semerkant/Buhara (Batı Karahanlı kayıtlı; Melikşah'ın 1089-90 seferleri → vasal/tabi ilişki `tabi:` ile gösterilebilir; evrende `olaylar_ortacag_bekleyen_acik.js:103` 1090-03-06 yıl "Semerkant'ı ikinci kez zaptetti"; yerleşim Semerkant 1041-1212 `bati-karahanli` dışında Selçuklu s: yok). Öneri: Boşluk doldurma merdiveniyle Rey 1042-1118 (Büyük Selçuklu; TDV `rey`/İSAM), İsfahan 1051-1118 (evrende 1051-05-15 madde var → s: `buyuk-selcuklu` f 1051-05-15), Hemedan/Kazvin için TDV `hemedan`, `kazvin` taranmalı (okunmadı). Bu 4-6 yerleşim Selçuklu'yu zirve yılda 32 → ~38'e çıkarır ve Cibâl'i boyar.
- Zirve yılda kaynakla uyuşmayan dış-sınır sahipliği: Kâşgar/Ferğana tarafı (Melikşah 1089 seferi) Büyük Selçuklu olarak işlenmemiş, doğrusu (suzerain) — tabi: ile gösterilmeli; ölçer bunu ölçmez. Anadolu'da Ankara/Sivrihisar 1073-1101 Büyük Selçuklu: Süleyman Şah 1075-78'den itibaren bu yerler `selcuklu` künyesine geçiş tarihleri `...once1281_geriye.js:19-20` ile Sivrihisar 1092-11-19'a bağlı; Ankara 1101-06-23'e kadar `buyuk-selcuklu` — TDV `ankara`: «Ankara 23 Haziran 1101'de Bizans İmparatorluğu'na bırakıldı» (okundu) ama 1073-1101 arasında Ankara'nın sahibi aslında Anadolu Selçuklu (Süleyman Şah) mı, Büyük Selçuklu mu — kaynak: TDV "Süleymanşah, Ankara'da Mesud'u muhasara..." ek kaynak gerekli; **doğrulanmadı**.

## Önerilen düzeltmeler (KASA için)
- `data/olaylar_ortacag_iran_turan.js:143` t `1157-04-13`→`1157-04-26`, kesinlik "gun", ic_not_d düzelt (iki rivayet: 26 Nisan / 6 Mayıs; seçilen ilk).
- `data/devletler.js` buyuk-selcuklu `ic_not_t`: "1157-01-01" cümlesini 04-26 gerekçesine çevir.
- `data/devletler.js` buyuk-selcuklu f: `1038-01-01` → `1038-05-09` (veya 1040-05-23; karar KASA); ic_not_f'ye TDV iç çelişkisini (1038/1040) iki kaynağıyla yaz.
- `data/olaylar_ortacag_iran_turan.js:125` t `1118-06-01`→`1118-06-14`, kesinlik gün (TDV sencer).
- `data/olaylar_ortacag_iran_turan.js:75` Rey maddesi t `1042-08-21`: TDV yalnız "434 / 1042-43" verir → hicrî yıl kuralı beyanı ekle ya da t `1042-01-01`.
- Yeni maddeler: Katvân 1141-09-09; Ankara 1073-01-01 (yıl); Mardin 1085-04-29 (+ yerleşim f); Urfa 1087-03-09 (+ yerleşim f); Termez 1102-05-22 (veya boşluk).
- Yerleşim: Rey, İsfahan (1051→), Hemedan, Kazvin s: dönemleri (Boşluk doldurma merdiveni; TDV `rey`, `isfahan`, `hemedan`, `kazvin` okunmadı).
- Mekke 1070-76/1080-92 ve Musul 1061-96 aralığı kaynağıyla yeniden bakılsın.

## Erişilemeyen kaynaklar
- Bosworth, C. E., "The Political and Dynastic History of the Iranian World (A.D. 1000-1217)", Cambridge History of Iran vol. 5 (Cambridge UP, 1968), s. 1-202 (PDF: https://zoroastrian.org/wp-content/uploads/2025/01/The-Cambridge-History-of-Iran-Volume-5.pdf — metin çekilmedi). Soru: Tuğrul Nîşâbur'a girişi ve hükümdarlık ilânı 1038 mi 1040 mı (hutbe günü)?
- Encyclopaedia Iranica, "Saljuqs" (iranicaonline.org/?p=7972 → HTTP 403). Soru: Büyük Selçuklu'nun kuruluş yılı ve Sencer'in ölüm günü.
- Encyclopaedia of Islam², "Saldjūḳids" (Brill). Soru: aynı.
- TDV `rey`, `isfahan`, `hemedan`, `kazvin`, `tirmiz`, `mekke` (bu oturumda çekilmedi).
- TDV `selcuklular` md. 100.000 karakterden sonrası okunmadı (257.162 karakter; İsfahan başkent nakli yılı orada olabilir).

## Iranica / Oxford teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026 gecesi; aktarım)
- Iranica «Sanjar»: «in the spring of 552/1157, he died in Marv». Rebîülevvel 552 ≈ 13 Nisan – 12 Mayıs 1157 ⇒ künye t 1157-04-26 ve olaylar_ortacag_iran_turan.js:143'teki 1157-04-13 ikisi de 'bahar 552' ile uyumlu; Iranica günü ayırmıyor. **Hüküm:** iki atlas günü tek güne indirilsin — TDV «Sencer» hangi günü veriyorsa o (kural: TDV esas); künye `ic_not_t` bayat ifadesi (1157-01-01) silinsin, 'Iranica: bahar 552/1157' beyanı eklensin. EI² «Sandjar» okunamadı.
