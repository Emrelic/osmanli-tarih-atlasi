# 40 · Fâtımî Devleti — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py + elle tarama; veriye yazılmadı)

## Özet
- Künye 1 (`fatimi`, f 0909-01-01, t 1171-09-13); komşu: `ziriler`, `sicilya-emirligi` (Kelbîler), `ihsidi`. Kırılma 24, AÇIK **3** (0947-01-01 Sicilya, 1000-01-01 Mısır/Filistin, 1108-01-01 Trablusşam). Yerleşim 22 kayıt; en geniş an 935'te 13.
- **Ağır 1 — "1000-01-01" ufuk işareti haritayı deler:** Asvan, Feyyûm, Nablus, Remle, Şam `s:` Fâtımî'yi 1000'de başlatıyor (kaynak notu: "UFUK SINIR İŞARETİ"); oysa TDV'ye göre Mısır 969'da (6 Temmuz), Şam hutbesi Muharrem 359 (≈14 Kasım 969) Fâtımî. 969→1000 arası bu şehirler `__BOSLUK__`/sahipsiz; en geniş yıllar 974-987'de yalnız **4 yerleşim**. Kudüs ise -0585→1253 tümüyle `__BOSLUK__` (Fâtımî Kudüs'ü 969-1099 yok).
- **Ağır 2 — Kayrevan/Ağlebî-Fâtımî çakışması:** künye `f:0909-01-01`, Kayrevan `fatimi` 0909-01-01 (Ağlebî `t` aynı gün) ama Ağlebî'nin sonu TDV «AĞLEBÎLER»de 18 Mart 909 (Ziyâdetullah'ın kaçışı); Palermo, Malta, Trablus, Sfaks, Gabes, Kafsa 0909-03-18'de geçiyor. Kayrevan 0909-01-01 ve künye f 0909-01-01 bu dönemde Ağlebî'nin ayakta olduğu 76 günü Fâtımî yazıyor; iç tutarsızlık (aynı iki madde `olaylar_kurulus_geri_1021.js:17` 0909-01-01 yıl, `olaylar_ortacag_iberya_magrib.js:32` 0909-03-18 gün). Öneri: Kayrevan ve künye `f` → 0909-03-18.
- **Ağır 3 — Mekke 969 hutbe tarihi TDV içinde çelişik:** TDV «MEKKE»: «Ca'fer b. Muhammed'in ... hutbeyi Fâtımîler adına okutmasıyla (358/969)» ve «368-462 (978-1070) yılları arasında ... hutbeler Fâtımîler adına okundu»; TDV «MUİZ-LİDÎNİLLÂH»: Mekke-Medine hutbesi 363 (974) hac mevsimi. Atlas `Mekke` 0969-01-01'den Fâtımî (iki `s:` parçası 969→1000 ve 1000→1070 art arda aynı sahip). Karar TDV'de; beyan şart (aşağıda).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| fatimi | Fâtımî Devleti | 0909-01-01 | 1171-09-13 | ana künye (tek parça; hilâfet) |
| ziriler | Zîrîler | (ölçülmedi) | — | İfrîkıye'de Fâtımî vâlisi→bağımsız (972-1048/1051); ayrı künye var ✓ |
| sicilya-emirligi | Kelbîler (Sicilya) | (ölçülmedi) | — | Fâtımî tâbi vâli ailesi 947-1053 (TDV KELBÎLER); Palermo/Messina/Malta 0947 → bu künye ✓ |
| ihsidi | İhşîdîler | 0935-... | 0969-07-06 | Mısır öncülü ✓ (İskenderiye 935→969-07-06 uyumlu) |
Eksik evre: yok (Rakkâde→Mehdiye→Mansûriye→Kahire merkez değişimi `baskent:` alanında, künye bölünmesi gerekmiyor). Eksik künye adayı: Mirdâsîler/ Bedr el-Cemâlî Suriye vâlileri (Mirdâsî künyesi var ✓).

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f | 0909-01-01 | TDV «FÂTIMÎLER»: Ebû Abdullah Rakkāde'yi aldı «(296/909)»; «29 Rebîülâhir 297 (15 Ocak 910)» Ubeydullah Rakkāde'ye girdi ve halife ilan edildi — okundu (hicrî tablo: 297-04-29 = 910-01-15 ✓) | TDV «AĞLEBÎLER»: «18 Mart 909'da ... Mısır'a kaçtı» — okundu; Encyclopaedia Iranica «Fatimids» (arama özeti: 297/909; sayfa 403) | Fiilî devlet 909, halifelik 910-01-15. Öneri: `f:"0909-03-18"` (Ağlebî'nin sonu; Palermo/Trablus/Sfaks kırılmalarıyla hizalı) ve `ic_not_f`a "halife ilanı 910-01-15 (TDV fatimiler)". Künye `f:0909-01-01` Ağlebî sonundan öncedir → düzeltilmeli. |
| Kayrevan | 0909-01-01 | TDV AĞLEBÎLER: Fâtımîler «hiçbir mukavemetle karşılaşmadan başşehre» girdi (Kayrevan adı geçmiyor) | olaylar_kurulus_geri_1021.js:17 (0909 yıl) | Kayrevan `fatimi` f ve Ağlebî t → 0909-03-18 (diğer yerleşimlerle aynı). |
| Mehdiye | 0921-02-20 | TDV «MEHDİYE»: «İnşası 8 Şevval 308 (20 Şubat 921) tarihinde tamamlanan şehir» — okundu | TDV FÂTIMÎLER: Mehdiye 303 (915)'te kuruldu, «308'de (920) ... başşehir ilân etti» | Tutarlı (308 hicrî yılı içinde; 8 Şevval 308 = 20.02.921 tablo ✓). Kronoloji `0920-05-23` "başşehir ilân" (308∩920 ilk gün) ile `s:` 0921-02-20 farkı beyan edilmeli (inşa tamamlanma günü ≠ ilân günü). |
| Mansûriye | — (baskent alanında "Sabra (Mansûriye)", tarih yok) | TDV FÂTIMÎLER: 336 (947) Sayrelmansûriye'ye taşındı | TDV MEHDİYE: Mansûriye başşehir «Safer 337 / Ağustos 948» | **TDV içi çelişki (947 vs 948).** Evren maddesi yok (AÇIK değil çünkü künye f/t'yi kırmıyor ama kronolojide eksik). |
| Mısır fethi | 0969-07-06 | TDV MUİZ-LİDÎNİLLÂH: «17 Şâban 358'de (6 Temmuz 969)» — okundu | TDV KAHİRE (olaylar_2s_1019.js:53 alıntısı) | ✓ iki TDV maddesi; bağımsız ikinci akademik kaynak okunamadı (Iranica 403). |
| Kahire merkez | 0973-06-05 | TDV MUİZ-LİDÎNİLLÂH: «Ramazan 362 (Haziran 973)» Kahire'ye ulaştı — okundu | — | ✓ hicrî 362-09-01 = 973-06-05 tablo ✓. |
| Suriye kaybı | 1075-08-17 (Atsız, 468 ilk gün) | TDV FÂTIMÎLER: «buralar 468'de (1075) Selçuklular'ın eline geçti» | olay `1075-08-17` | Yıl ✓; gün = 468'in ilk günü (beyanlı, tablo) — kabul. |
| t | 1171-09-13 | TDV «EYYÛBÎLER»: «(10 Muharrem 567 / 13 Eylül 1171)» hutbe — okundu (Selâhaddin'in Abbâsî hutbesi) | Treccani «Fatimidi»: «Saladino ... 1171» (yıl) — okundu; Iranica «567/1171» (arama özeti) | Yıl ✓ (üç kaynak); gün TDV'ye bağlı: bu gün hutbe günü, Âdıd'ın ölüm günü değil. Hutbenin Cuma gününe denk gelmesi gerektiği için (10 Muharrem 567 = 13 Eylül 1171 Pazartesi, Jülyen hesabı) gün şüpheli: hutbe Cuma günü okunur; hafıza notu olarak ikinci akademik kaynakta (EI², Lev, Humphreys) Cuma 10 Eylül geçtiği hatırlanıyor — **bu oturumda doğrulanmadı, ERİŞİLEMEYEN**. |

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar (evren): `olaylar_ortacag_ortadogu.js:43` (0910-01-15 Rakkāde); `olaylar_ortacag_iberya_magrib.js:32` (0909-03-18 Ağlebî sonu); `olaylar_kurulus_geri_1021.js:17` (0909 Kayrevan yıl — mükerrer, çelişir); `olaylar_ortacag_ortadogu.js` (0915-07-17 Mehdiye kuruluş, 0920-05-23 başşehir); `olaylar_once1000_1019.js:11` (0969-07-06 Mısır); `olaylar_2s_1019.js:47` (Kahire'nin temeli); `olaylar_kurulus_geri_1021.js:26` (0969 Mekke hutbe); `olaylar_ortacag_iberya_magrib.js:39` (0960-11-13 Fas); `olaylar_ortacag_bekleyen_acik.js:46` (0960 Fas/Sicilmâse), `:58` (0993 Fas kaybı); `olaylar_kurulus_geri_1021.js:18` (0972-10-02 Zîrîler Kayrevan).
Künye-içi (evren dışı, `devletler.js:12831+`): 909, 969-07-06, 971-12-24, 973-06-05, 996-10-14, 1021-02-13, 1051-05-16, 1059, 1073, 1075-08-17, 1094-12-29, 1160-07-03, 1169-01-18, 1169-03-26, 1171-09-13.
**Evren dışı kalanlar (künyede var, evren maddesi aranmalı):** 1021 Hâkim'in kayboluşu, 1051 Zîrî kopuşu, 1073 Bedr el-Cemâlî, 1094 Müstansır'ın ölümü/Nizârî-Müsta'lî ayrışması, 1169 Şîrkûh vezirliği, 1171 son. Ölçerin "alâkalı madde" kapsamı yalnız evrene bakıyor; 1171-09-13 için evren maddesi bulunamadı (arama: "Fâtımî" ve "Abbâsî adına hutbe" — yalnız 1058/59 Besâsîrî ve eski 1000-öncesi) → **t'nin kendisi evren maddesiz görünüyor** (ölçerin 0 AÇIK sonucuyla çelişiyorsa ölçer künye adına bağlı maddeleri sayıyor olabilir; elle kontrol önerilir).
Eksik/öneri:
```
{ t:"0947-01-01", b:"Hasan b. Ali el-Kelbî Sicilya valisi oldu; Fâtımî tâbi Kelbî emirliği başladı", yer_id:"Palermo", tur:"siyaset", kesinlik:"yil", kaynak:"TDV KELBÎLER: «335/947 ... Hasan b. Ali el-Kelbî'yi Sicilya'ya gönderdi»", ic_not:"335 hicrî = 946-08-02..947-07-22; ∩ 947 → ilk gün 0947-01-01 (tablo, ±1-2 g); TDV: Kelbîler Fâtımî'ye sadık kaldı → bu bir 'kayıp' değil tâbi emirlik; Palermo/Messina/Malta kırılması 0947-01-01" }
{ t:"0948-08-10", b:"Sayrelmansûriye (Mansûriye) Fâtımî başşehri oldu", yer_id:"Kayrevan", tur:"baskent", kesinlik:"ay", kaynak:"TDV MEHDİYE: «Safer 337 / Ağustos 948» ; TDV FÂTIMÎLER: «336 (947)»", ic_not:"çelişki beyan: 947 (336) vs 948 (337); Safer 337 ilk günü ≈ 948-08-10 (aritmetik tablo, doğrulanmadı)" }
{ t:"0969-11-14", b:"Şam'da Muiz adına hutbe okundu; Cevher'in kumandanı Ca'fer b. Felâh Suriye'yi aldı", yer_id:"Şam", tur:"toprak-kazanc", kesinlik:"ay", kaynak:"TDV MUİZ-LİDÎNİLLÂH: Ca'fer b. Felâh Zilkade 358'de gönderildi; «Muharrem 359» hutbe Şam'da", ic_not:"1 Muharrem 359 ≈ 969-11-14 (aritmetik tablo, doğrulanmadı); gün kaynakta yok, ay hassasiyeti" }
{ t:"0974-01-01", b:"Mekke ve Medine'de hac mevsiminde Muiz adına hutbe", yer_id:"Mekke", tur:"toprak-kazanc", kesinlik:"yil", kaynak:"TDV MUİZ-LİDÎNİLLÂH: hutbe 363 (974) hac mevsimi", ic_not:"çelişki: TDV MEKKE 358/969 ve 368-462 (978-1070); karar: Mekke f için iki TDV maddesi beyan, bkz. d)" }
{ t:"1171-09-13", b:"Mısır'da hutbe Abbâsî halifesi adına okundu; Fâtımî hilâfeti sona erdi", yer_id:"Kahire", tur:"son", kesinlik:"gun", kaynak:"TDV EYYÛBÎLER: «(10 Muharrem 567 / 13 Eylül 1171)»; Treccani «Fatimidi»: 1171", ic_not:"gün TDV; hutbe günü/Cuma tutarsızlığı için ikinci kaynak aranacak" }
```
(Son satır evren maddesi yoksa gerekli; varsa yalnız doğrulama.)
Not: Kudüs 1073 Atsız sonrası (1071-73) Selçuklu, 1098 Fâtımî, 1099 Haçlı: kaynak okunmadı; Kudüs `s:` yazılırken TDV KUDÜS ilk basamak.

## d) Harita uyumu
Ölçer: kırılma 24, AÇIK 3.
| Gün | Yerleşimler | Öneri |
|---|---|---|
| 0947-01-01 kayıp | Gozo, Malta, Mdina, Messina (Palermo da aynı) | Fâtımî→Kelbî emirliği. TDV: Kelbîler Fâtımî'ye bağlı vâli ailesi (947-1053). Madde yukarıda. Etiket "toprak-kayıp" yerine "siyaset"/beyanlı "tâbi emirlik". |
| 1000-01-01 kazanç | Asvan, Feyyûm, Nablus, Remle | `s:` f=1000-01-01 "ufuk sınır işareti". TDV'ye göre Mısır 969-07-06'dan beri Fâtımî (Asvan, Feyyûm Mısır eyaletleri); Remle/Nablus Filistin: Ca'fer b. Felâh 969-70, kesin gün yok. Öneri: Asvan, Feyyûm f=0969-07-06 (TDV Muiz + TDV Feyyûm: Kûs'a bağlı bölge); Remle/Nablus/Şam için tarih aranacak (TDV Remle, TDV Nablus; Şam hutbesi Muharrem 359). 1000-01-01 kırılması ve "Doge Orseolo" yakını madde alâkasız → AÇIK sahte kapanıyor. |
| 1108-01-01 kazanç | Trablusşam | Beni Ammâr→Fâtımî 1108, Fâtımî 1109-07-12'ye dek (Haçlı alışı). Fâtımî'nin Trablus'u alışı için evren maddesi yok; TDV TRABLUSŞAM (Beni Ammâr, Fahrülmülk; Fâtımî vâli 1105-1109) kaynak. |
Diğer harita bulguları:
- Mekke: iki bitişik `fatimi` parçası 0969-01-01→1000-01-01 ve 1000→1070-01-01 aynı sahip (yapay kırılma; birleştir). Mekke f 0969-01-01 TDV MEKKE (358/969) beyanı ile uyumlu ama TDV Muiz (974) ile çelişir.
- Mekke 1070→1076 Selçuklu, 1076→1080 Fâtımî, 1080→1092 Selçuklu, 1092→1171 Fâtımî: TDV MEKKE 368-462 (978-1070) Fâtımî hutbe der; 1076-1080/1092-1171 Fâtımî dönüşleri TDV MEKKE'de bu oturumda okunmadı (metnin %29'u okunmadı: karakter 100000+ ) — ölçülmedi.
- Mehdiye Fâtımî→Zîrî 1048-01-01 (TDV MEHDİYE «1048 yılına kadar»), ama kronoloji'deki Zîrî kopuşu 1051-05-16 (TDV MUSTANSIR 443/1051): TDV içi çelişki; Kayrevan Zîrî 972-10-02. Tutarlılık: Zîrîler 972'de vâli (tâbi) iken Kayrevan Fâtımî'den ayrı yazılmış, Mehdiye 1048'e dek Fâtımî doğrudan yazılmış — kural tek olmalı (Kelbî/Zîrî tâbi emirlikler aynı muameleyi görsün).
- En geniş yıl 935 (13 yerleşim): İfrîkıye + Sicilya + Tilimsan (931-955); ama Fas/Sicilmâse (960'ta Fâtımî) yerleşimleri `fatimi` değil (Fas (Fez) 0960 olay var); Mısır sonrası dönemde (974-1171) yalnız Kahire, İskenderiye, Mekke + 1000'den sonra 5-6 nokta; Filistin/Suriye kıyı şehirleri (Akkâ, Sûr, Sayda, Yafa, Gazze, Askalan) ve Hicaz/Kızıldeniz (Medine, Kus, Aydhab), Delta (Dimyat, Tinnis) için `fatimi` yok. Ölçer yalnız kırılma günleri baktığından görünmez; en geniş dönem Mısır'ın bilinen yönetim alanının çok altında.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `fatimi`: `f:"0909-01-01"` → `"0909-03-18"`; `ic_not_f`a "Ağlebî sonu 18 Mart 909 (TDV aglebiler); halife ilanı 910-01-15 (TDV fatimiler)". Kayrevan (`yerlesimler.js:1122`): Ağlebî `t` ve Fâtımî `f` → 0909-03-18.
2. `data/olaylar_kurulus_geri_1021.js:17` (0909-01-01 yıl) mükerrer — kaldır ya da 0909-03-18'e çek (aynı olay `olaylar_ortacag_iberya_magrib.js:32`'de gün hassasiyetinde var).
3. Yukarıdaki 5 maddeyi `data/olaylar_ortacag_ortadogu.js`'e (0947 Kelbîler, 0948 Mansûriye, 0969-11 Şam, 0974 Mekke hutbesi, 1171 son — son zaten varsa yalnız doğrula).
4. `Asvan`, `Feyyûm` `s:` f=0969-07-06 (1000-01-01 ufuk işaretini kaldır); `Şam` fatimi f≈0969-11-14 (ay hassasiyeti, beyan), `Remle`/`Nablus` için tarih TDV'den aranacak; Kudüs `s:` (Fâtımî 969-1099 parçası, kaynak aranacak).
5. `Mekke` iki bitişik `fatimi` parçasını birleştir; f için TDV MEKKE (358/969) ile TDV MUİZ (363/974) çelişkisini `ic_not`ta iki kaynağıyla yaz.
6. Harita genişletme (kaynakla): Delta ve Filistin kıyı şehirleri, Medine, Fas/Sicilmâse (960-993), Akkâ-Sûr-Sayda-Gazze (Fâtımî dönemleri).

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica «Fatimids» https://www.iranicaonline.org/articles/fatimids/ — 403. Soru: kuruluş 297/909 ve Mısır fethi 358/969 cümleleri, 567/1171 hutbe.
- Britannica «Fatimid dynasty» https://www.britannica.com/topic/Fatimid-dynasty — 403 (okunmadı).
- Encyclopaedia of Islam², «Fāṭimids» (Canard) ve M. Brett, *The Rise of the Fatimids* (2001); Y. Lev, *State and Society in Fatimid Egypt* — soru: hutbe Cuma/10 Eylül 1171 mi 13 Eylül 1171 mi; Şam'ın 969'daki alınışı; Mansûriye 947/948; Kelbîler Fâtımî tâbiliği.
- TDV «MEKKE» metninin son ~%29'u okunmadı (karakter 100000'den sonrası): 1076-80 ve 1092-1171 Fâtımî dönüşleri için bakılmalı.
- TDV «KUDÜS», «REMLE», «NABLUS», «TRABLUSŞAM», «ŞAM» maddelerinde Fâtımî dönemleri bu oturumda okunmadı.

## KESİN HATA (koordinatör onayı)
- Asvan, Feyyûm, Nablus, Remle, Şam Fâtımî `s:` başlangıcı `1000-01-01` (ufuk işareti) → Mısır yerleşimleri **969-07-06** (TDV, Fustat'ın teslimi), Şam **969-11-14** civarı (Muharrem 359 hutbesi; hicrî kesişim KASA'da hesaplansın) + önceki dilimler (İhşîdî) aynı günde kapansın.

## Iranica / Oxford teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026; aktarım)
- Iranica «Fatimids»: yalnız 567/1171 («al-ʿĀżed lay dying in Cairo»). 10/13 Eylül okunmadı ⇒ t 1171-09-13 tek kaynaklı (TDV), `ic_not` beyanı.
