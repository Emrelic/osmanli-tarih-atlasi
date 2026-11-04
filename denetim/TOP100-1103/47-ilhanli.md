# 47 · İlhanlı Devleti — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (ölçer: top100_olc.py ilhanli; `--ara ilhan` → id `ilhanli`; ek: sahiplik listesi scratchpad/liste_47_49.py)

## Özet
- Künye 1 (`ilhanli`, 1256-01-01 → 1353-01-01, harita `ilhanli`, kaynak `ilhanlilar`). Ardıl/komşu künyeler: `celayirli` (f 1340), `cobaniler` (f 1335-11-30), `eretna` (f 1335) — ayrı ajanlar. Yerleşim 239 kayıt; en geniş an 1308 (229), 1336'dan sonra 149 → 41 → 21.
- Ölçer: kırılma 31, **AÇIK 5** (1305 Sultâniye · 1337 Elbistan/Göksun · 1348 Kelkit · 1349 Çölemerik · 1351 Bacirge/Balıklı/Bargiri/Başkale). Eksik/yanlış kronoloji maddesi **9**.
- **En ağır 3 bulgu:** (1) Künye `kronoloji:` satırlarının çoğu yıl-01-01 ve TDV'nin verdiği gün/ay yok sayılmış: Bağdat 1258-02-13 ✗ (TDV Hülâgû + evren 1258-02-10), Gazan 1295-01-01 ✗ (TDV 1295-11-03), Olcaytu 1304-01-01 ✗ (TDV 1304-07-19), Ebû Saîd ölümü 1335-01-01/evrende 1335-12-01 ✗ (TDV 1335-11-30), Ebû Saîd cülûsu 1317-01-01 ✗ (Olcaytu 1316-12-13'te öldü). (2) 1335 sonrası ölçülmemiş uzantı: `Erzurum` 1308→**1353** ilhanlı, `Kelkit` →1348, 41 nokta 1345'te hâlâ ilhanlı; TDV Erzurum "1336 Hacı Togay, 1340 Şeyh Hasan" der — yani Erzurum 1336'dan sonra ilhanlı değil, atlasın kendi `BEYANLI YAKLAŞIKLIK` notu bunu yaklaşıklık diye geçmiş. (3) Künye `baskent:"Meraga → Tebriz → Sultaniye"` — Meraga'nın başkentliği için TDV'de dayanak bulunamadı (TDV: Hülâgû Merâga'da ölür, rasathane; başkent Tebriz).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| ilhanli | İlhanlı Devleti | 1256-01-01 | 1353-01-01 | TAM; tek künye, evre bölünmesi yok. BÖLME önerilmez (tek hanedan). |
| celayirli | Celâyirliler | 1340-01-01 (atlas) | — | ardıl, ayrı ajan; Tebriz 1340-01-01'de buna geçiyor |
| cobaniler | Çobânîler | 1335-11-30 | 1357-01-01 | ardıl, ayrı ajan. **Çelişki:** künye başkenti Tebriz, ama `Tebriz` s: 1340-1386 `celayirli` (harita ↔ künye) |
| eretna | Eretna Beyliği | 1335-01-01 | 1381-01-01 | ardıl (Sivas) |
| mogol-imparatorlugu | Moğol İmp. | — | — | öncül (Tebriz 1231-1256) |
Eksik evre: yok. 1256-1281 haritası yalnız 14-29 yerleşimle temsil ediliyor (atlas kapsamı 1281'den başlıyor; 1264'te 28: Bağdat, Tebriz, Isfahan, Herat, Merv, Nîşâbur vb.). Bu bir kapsam sınırıdır, hata değil — ama "kuruluş 1256" ile uyumsuz görünür.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm |
|---|---|---|---|---|
| f | 1256-01-01 (yıl) | TDV `ilhanlilar`: «başşehri Tebriz olmak üzere İran’da kurulan (1256)» | Treccani, Hulagu (Enciclopedia Italiana): «sottomise la Persia (1256)» | DOĞRU yıl; gün kaynakta yok (Alamut teslimi 1256-11-19, TDV `hulagu`, ama bu "devletin ilanı" değil). Kalsın, `kesinlik:"yil"` beyanı. |
| Bağdat | künye kron. 1258-02-13 | TDV `hulagu`: «10 Şubat 1258 (4 Safer 656)» halife teslim | evren `olaylar_t5_1000a.js:93`: 1258-02-10 | künye maddesi YANLIŞ → **1258-02-10**. |
| Aynicâlût | evrende 1260-09-03 | TDV `ilhanlilar`: «(3 Eylül 1260)» | TDV `hulagu` aynı gün | DOĞRU. |
| Hülâgû ölümü | yok | TDV `hulagu`: «8 Şubat 1265 (19 Rebîülâhir 663)», Merâga | — | EKSİK madde (c). |
| Gazan cülûsu | künye 1295-01-01 | TDV `gazan-han`: Karabağ'daki tören «3 Kasım 1295»; Tebriz'de karşılama «23 Zilkade 694 / 4 Ekim 1295»; İslâm 19 Haziran 1295 | TDV `ilhanlilar` metni «4 Ekim’de … saltanata gelen» der | **ÇELİŞKİ (aynı kaynak ailesi içinde):** kişi maddesi (Gazan) esas → 1295-11-03; ic_not'ta 4 Ekim beyan edilir. Künye yıl-01-01 YANLIŞ. İkinci bağımsız akademik kaynak: çekilemedi (aşağı). |
| Gazan ölümü | yok | TDV `gazan-han`: «11 Şevval 703 (17 Mayıs 1304)» | — | EKSİK (c). |
| Olcaytu cülûsu | künye 1304-01-01 | TDV `olcaytu-han`: «15 Zilhicce 703 = 19 Temmuz 1304» | TDV `ilhanlilar`: «1304’te ölümüyle yerini kardeşi Olcaytu aldı» | **1304-07-19**. |
| Sultâniye | künye kron. 1304 «Sultaniye'yi başkent yaptı»; yerleşim 1305-01-01 | TDV `olcaytu-han`: Sultâniye «1305–1313» arasında kurulu/inşa (gün yok) | TDV `ilhanlilar`: «Sultâniye adlı bir şehir kurdu ve devlet merkezini buraya nakletti» (tarihsiz) | Yerleşim `f:1305-01-01` kabul (yıl; `kesinlik:"yil"`); künye maddesi 1304 → 1305 (yıl) olmalı. |
| Olcaytu ölümü / Ebû Saîd cülûsu | künye 1317-01-01 | TDV `olcaytu-han`: «27 Ramazan 716 = 13 Aralık 1316» (Sultâniye'de ölür) | TDV `ilhanlilar`: «1316 yılında Olcaytu Han’ın … ölümü üzerine»; ama tablo «717/1317» der | **ÇELİŞKİ (TDV içinde 1316 / 1317).** Olcaytu'nun ölümü 1316-12-13 kesin; cülûs günü kaynakta yok. Öneri: künye maddesi `1316-12-13` + ic_not "cülûs günü bulunamadı; ölüm gününe bağlandı, TDV tablosu 717/1317". |
| Ebû Saîd ölümü | künye 1335-01-01; evren `olaylar_ek7.js:203` 1335-12-01 | TDV `ebu-said-bahadir-han`: «13 Rebîülâhir 736 (30 Kasım 1335)», Karabağ | Treccani Enciclopedia Italiana «Īlkhān»: «con la morte di Abū Sa‛īd (736 èg., 1335) si estinse la linea diretta» | **1335-11-30** (evrendeki 1335-12-01 bir gün kaymış; künye yıl-01-01 yanlış). |
| t | 1353-01-01 (yıl) | TDV `ilhanlilar` hükümdar tablosu: «Nûşirevân 745-754 (1344-1353)» | Treccani Arte Medievale «Ilkhanidi»: 1256-1353; Treccani Enc. It.: yan kollar ≈1350'ye dek | t 1353 YIL kabul edilebilir (TDV esas). **Ama** fiilî toprak 1335-1340'ta çözülmüş (Bağdat t 1340 TDV `bagdat`, Tebriz 1340). Brief'teki "fiilî son 1335" Treccani ile uyumlu; künye t DEĞİŞMESİN, haritadaki 1335-1353 uzantıları gözden geçirilsin (d). |
| baskent | «Meraga → Tebriz → Sultaniye» | TDV `ilhanlilar`/`tebriz`: Tebriz başşehir (1256) | TDV `hulagu`: Merâga yalnız ölüm yeri/rasathane (Treccani Hulagu: Marāgha rasathane) | Meraga başkentliğine kaynak BULUNAMADI. Önerilen: `Tebriz → Sultâniye` (+ Cambridge History of Iran 5 sorusu, erişilemeyen listesinde). |

## c) Kronoloji
Değişmez 2 evreninde VAR (dosya:satır):
- 1253-04-24 Hülâgû Karakurum'dan hareket `olaylar_ortacag_bozkir.js:24`; 1257-03-27 Hemedan→Bağdat `olaylar_t5_1000a.js:88`; 1258-02-10 Bağdat/Abbâsî sonu `olaylar_t5_1000a.js:93` (+ `kronoloji_sinir_once1281_yerlesim_asya_iran.js:44`); 1260-09-03 Aynicâlût `olaylar_t5_1000b.js:49`; 1260-01-01 Harran ilhanlı `kronoloji_sinir_once1281_geriye.js:311`; 1262 Musul `olaylar_t5_1000a.js:94`; 1277-04-06 Elbistan ovası `olaylar_ortacag_iran_turan.js:190`; 1277-06-04 Pervâne `olaylar_ortacag_anadolu_kafkasya.js:130`; 1308 Selçuklu sonu `olaylar_ek16.js:30`; 1335-12-01 Ebû Saîd ölümü `olaylar_ek7.js:203`; 1335 Eretna `olaylar_ek16.js:55`; 1340 Celâyirli `olaylar_ek16.js:63`; 1337-09-09 Serbedârîler `olaylar_ek15.js:56`.
- Künye `kronoloji:` (evren dışı, "var, evren dışı"): 1256, 1258-02-13 ✗, 1295 ✗, 1304 ✗, 1317 ✗, 1335 ✗, 1353.

EKSİK/DÜZELTİLECEK maddeler (öneri; `olaylar_*` biçimi):
```
{ t:"1258-02-10", düzelt: künye kron. 1258-02-13 → 1258-02-10 }   // evrende var
{ t:"1265-02-08", kesinlik:"gun", b:"Hülâgû Han Merâga'da öldü (19 Rebîülâhir 663); oğlu Abaka tahta çıktı", tur:"hukumdar", yer_id:"Merâga", kaynak:"TDV Hülâgû (islamansiklopedisi.org.tr/hulagu): «8 Şubat 1265 (19 Rebîülâhir 663)»" }
{ t:"1295-11-03", kesinlik:"gun", b:"Gazan Han Karabağ'da tahta çıktı; İlhanlı devleti tam bağımsız hâle geldi", tur:"hukumdar", yer_id:"Tebriz", kaynak:"TDV Gazan Han: «3 Kasım 1295» (Tebriz'de karşılama 4 Ekim 1295); TDV İlhanlılar 'tam bağımsız (1295)'", ic_not:"TDV İlhanlılar maddesi 4 Ekim'i verir; Gazan maddesi 3 Kasım — kişi maddesi esas, çelişki beyan" }
{ t:"1304-05-17", kesinlik:"gun", b:"Gazan Han Kazvin yakınında öldü (11 Şevval 703)", tur:"hukumdar", yer_id:"Kazvin", kaynak:"TDV Gazan Han" }
{ t:"1304-07-19", kesinlik:"gun", b:"Olcaytu (Muhammed Hudâbende) tahta çıktı (15 Zilhicce 703)", tur:"hukumdar", yer_id:"Tebriz", kaynak:"TDV Olcaytu Han" }
{ t:"1305-01-01", kesinlik:"yil", b:"Olcaytu Sultâniye'yi başkent olarak inşa etmeye başladı (1305-1313)", tur:"baskent", yer_id:"Sultâniye", kaynak:"TDV Olcaytu Han: Sultâniye «1305–1313» — ölçerin AÇIK 1305 Sultâniye maddesini karşılar" }
{ t:"1316-12-13", kesinlik:"gun", b:"Olcaytu Sultâniye'de öldü (27 Ramazan 716); oğlu Ebû Saîd tahta çıktı", tur:"hukumdar", yer_id:"Sultâniye", kaynak:"TDV Olcaytu Han; TDV İlhanlılar «1316 yılında … ölümü üzerine»", ic_not:"TDV İlhanlılar tablosu Ebû Saîd'in cülûsunu 717/1317 yazar; cülûs günü bulunamadı" }
{ t:"1335-11-30", düzelt: olaylar_ek7.js:203 1335-12-01 → 1335-11-30, kesinlik:"gun", kaynak:"TDV Ebû Said Bahadır Han: «13 Rebîülâhir 736 (30 Kasım 1335)»" }
{ t:"1337-01-01", kesinlik:"yil", b:"Taraklı oymağı reisi Halil Bey Elbistan'ı ele geçirdi; bir yıl sonra Karaca Bey'e (Dulkadır) bıraktı; 1338'den Dulkadıroğlu merkezi", tur:"toprak-kayip", yer_id:"Elbistan", odak_yer:["Elbistan","Göksun"], kaynak:"TDV Elbistan: «1337 yılında Taraklı oymağının reisi Halil Bey yöreyi ele geçirdi»" }
```
Kelkit 1348 / Çölemerik 1349 / Bacirge-Balıklı-Bargiri-Başkale 1351: bu üç kırılma için kaynak BULUNAMADI (atlas `s:` kayıtlarında kaynak alanı boş). Madde yazılmaz; (d)'de.

## d) Harita uyumu
Ölçer: kırılma 31, AÇIK 5.
| gün | yerleşimler | öneri |
|---|---|---|
| 1305-01-01 kazanç | Sultâniye | yukarıdaki 1305 maddesi (TDV Olcaytu 1305–1313) |
| 1337-01-01 kayıp | Elbistan, Göksun | yukarıdaki 1337 maddesi (TDV Elbistan) — Göksun için ayrı kaynak yok, Elbistan'a bağlı "yöre" |
| 1348-01-01 kayıp | Kelkit (→ akkoyunlu) | Kaynak BULUNAMADI; Kelkit 1281-1348 ilhanlı kaydı kaynaksız. TDV Kelkit/Erzincan/Mutahharten aranmalı; kaynak çıkmazsa ilhanlı t'yi 1335'e çek, 1335-1348 komşu peteklere (Erzincan/Mutahharten) bırak |
| 1349-01-01 kazanç | Çölemerik (Hakkâri) | Kaynaksız: ilhanlı Hakkâri'ye 1349'da kazanç = anlamsız (devlet 1335'te dağıldı). Önerilen: ya kaldır ya "yerel hâkim" sahibi bul |
| 1351-01-01 kayıp | Bacirge, Balıklı, Bargiri, Başkale | Aynı: 1335'ten sonra ilhanlı sahibi anlamsız; Hakkâri/Van çevresi için Kara Koyunlu/Dulkadır öncesi yerel emirlik kaynağı aranmalı |
En geniş an 1308 (229 yerleşim): Anadolu'dan Konya, Aksaray, Kayseri, Sivas, Amasya, Tokat, Samsun, Niksar; Kuzey Anadolu'dan Bartın, Safranbolu, Eflani, Osmancık (TDV Candaroğulları: Eflani, Geyhatu'nun Yaman Candar'a iktâsı → ilhanlı VASALI, atlas tâbiyi sahip yazmış; Osmanlı tâbi emsaliyle uyumlu ama beyan görmedim); doğuda Herat, Merv, Nîşâbur, Meşhed (Herat'ta Kert vasal; TDV Kandehar: «1281'den beri İlhanlıların vasalı Herat Kertleri» — yani sahip ilhanlı ise vasal beyanı gerekir); güneyde Kirman, Yezd, Şiraz (yerel hanedanlar, vasal). Büyük şehir sahipliği genel olarak uyumlu (Tebriz 1256-1340, Bağdat 1258-02-10→1340, Konya 1308→1328-11-05 Karaman'a, Sivas 1281→1335 Eretna). Bilinen sınırın dışında görünen: **Erzurum 1308→1353 ilhanlı** (TDV Erzurum atlas notu: 1336 Hacı Togay, 1340 Şeyh Hasan ⇒ 1336'dan sonra ilhanlı değil), 1345'te kalan 41 yerleşim (Doğu Anadolu, Lorestan, Mazenderan) yalnız künye t'sine yaslanıyor — kaynak yok.
Kaynaksız `s:` dönemi: 197/251 (ilhanlı).
1256-1281: 14-29 yerleşim; Fars/Kirman/Horasan'ın büyük kısmı bu aralıkta ilhanlı sayılmıyor (atlas pre-1281 kapsamı). Bilinen: 1264'te Herat/Merv/Nîşâbur ilhanlı (vasal); kaynak denetimi bu raporda yapılmadı.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `ilhanli` `kronoloji`: `1258-02-13`→`1258-02-10`; `1295-01-01`→`1295-11-03`; `1304-01-01 Olcaytu`→`1304-07-19` (Sultâniye ayrı madde 1305-01-01); `1317-01-01`→`1316-12-13` (+ic_not); `1335-01-01`→`1335-11-30`; `1353-01-01 son` kalsın (yıl) + `ic_not_t`: "TDV 1353; doğrudan hat 1335 (Treccani Enc. It.); fiilî toprak çözülmesi 1335-1340".
2. `baskent`: "Tebriz → Sultâniye" (Meraga için kaynak çıkmadıkça).
3. `olaylar_ek7.js:203` `t` 1335-12-01 → 1335-11-30 (TDV 13 Rebîülâhir 736).
4. Yeni maddeler: yukarıdaki 1265-02-08, 1295-11-03, 1304-05-17, 1304-07-19, 1305-01-01, 1316-12-13, 1337-01-01 (`data/olaylar_ortacag_iran_turan.js` ya da yeni ek dosya).
5. `Erzurum` ilhanlı t 1353-01-01 → 1336-01-01 (TDV Erzurum Hacı Togay 1336); 1336-1353 arası `__BOSLUK__` merdiveni (TDV Erzurum, Eretna, Çobânîler). `Kelkit`, Hakkâri noktaları: kaynak bulunana dek beyanlı kırp.
6. Çapraz: `Tebriz` s: 1340-1386 `celayirli` ↔ `cobaniler` baskent Tebriz (1335-11-30→1357) çelişkisi Çobânî ajanına.

## Erişilemeyen kaynaklar
- Boyle, J. A., «Dynastic and Political History of the Il-Khans», *Cambridge History of Iran* 5 (1968) — archive.org kimlikleri bulundu (`cambridgehistory05unse_0`, `il-khans-ei`) ama tam metin bu oturumda okunamadı. Sorular: (a) Gazan'ın cülûsu 3 Kasım mı 4 Ekim mi (Tebriz'e girişi); (b) Ebû Saîd'in cülûs günü (Olcaytu ölümünü izleyen); (c) Merâga başkent mi.
- Encyclopaedia Iranica «ILKHANIDS» — 403 (iranicaonline.org/articles/ilkhanids). Soru: Ebû Saîd sonrası Togha Temür'ün (Gürgân) ölüm yılı 1353 mü; t'nin hangi olaya bağlandığı.
- Britannica 403. Treccani `Ilkhanidi`/`Il-Khanidi` Enc. It. maddesi yalnız arama özeti olarak okundu (tam sayfa çekilemedi: ana sayfaya yönlendirdi); alıntılar arama özetindendir, "doğrulanmadı".
- Vikipedi/yansıma siteleri Togha Temür 1353'ü gösterdi — dayanak sayılmadı.

## Iranica / Oxford teyidi (EMRELİC 1 KASIM, tarayıcıdan, 4 Kasım 2026; aktarım)
- Iranica «Abū Saʿīd Bahādor Khan» (P. Jackson, EIr I s. 374-377): «died … on 13 Rabīʿ II 736/30 November
  1335» ⇒ **1335-11-30 çift teyit** (TDV + Iranica; Çobanîler maddesi de). Evrendeki 1335-12-01 → 11-30.
  Cülûs için Iranica üç değer verir: Mustavfî Safer 717 (Nisan-Mayıs 1317), Âmulî 23 Rebîülâhir 717 (5 Temmuz 1317),
  bir kaynak 16 Ağustos 1317 — TDV hangisini veriyorsa o, öbürleri `ic_not`ta.
- Iranica «Ḡāzān Khan» / «Il-khanids i»: cülûs günü yok («r. 694-703/1295-1304»; ihtida «2 Šaʿbān 694/17 June 1295»)
  ⇒ Gazan cülûsu 1295-11-03 TDV tek kaynak.
