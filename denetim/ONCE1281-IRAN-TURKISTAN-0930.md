# ONCE1281-IRAN-TURKISTAN — teslim raporu (30 Eylül 2026)

Kuşak 1000-01-01 → 1281-01-01 · İran · Horasan · Mâverâünnehir · Kıpçak sahası.
Şartname `oturumlar/ONCE1281-KAMPANYA-ORTAK.md`.

## Ürünler
| dosya | ne |
|---|---|
| `denetim/ONCE1281-IRAN-KUNYE.json` | künye ÖNERİSİ — 39 kayıt (30 yeni · 1 genişlet · 8 dokunmadım) + 24 satır `bulunamadi` |
| `data/kronoloji_cok_once1281_iran.js` | `window.KRONOLOJI_COK_ONCE1281_IRAN` — **169 madde** (2. tur; ilk teslim 181), hepsi `taraflar[]`lı ve ODAKLI |
| `denetim/ONCE1281-IRAN-PARCA-{A,B,C,D}.json` | dört araştırma parçası (ham, alıntılarıyla) |
| `denetim/ONCE1281-IRAN-RED.json` | birleştiricinin reddettiği 18 madde + sebebi |
| `denetim/ONCE1281-IRAN-ELLE.json` | "mükerrer?" uyarısını elle incelenip kabul edilen maddeler, gerekçeli |
| `denetim/ONCE1281-IRAN-ODAK-ELLE.json` | 93 maddenin elle odak eşlemesi (gerekçe dosya başında) |
| `denetim/ONCE1281-IRAN-HAVUZ.json` | `odak_cozum.js`in `sehirler` havuzu (4146 ad) — odak adlarının evreni |
| `denetim/ARAC-ONCE1281-IRAN-{TDV.py,BIRLESTIR.js,KAPI.js,YIL.js,ODAK.js,HAVUZ.py,ARA.js}` | araçlar (yeniden üretim: `py denetim/ARAC-ONCE1281-IRAN-HAVUZ.py` → `node denetim/ARAC-ONCE1281-IRAN-BIRLESTIR.js --yaz`) |
| `denetim/ONCE1281-IRAN-tdv-onbellek/` | TDV gövde önbelleği (alıntı sınavının evreni) |

## Kapılar (ölçülen, 2. tur)
- `node --check` ✓
- taraf kimliği 269 · **eşlenemeyen 0** (künyeler devletler.js'e birleştirildiği için 269'u da artık devletler.js'te)
- küresel ad başka dosyada **0** (evren 565 `data/*.js`)
- `t` biçimi YYYY-MM-DD dışı 0/169 · kuşak dışı 0/169
- **ODAK (M-5662):** `py arac/odak_olc.py --ayrinti` → `kronoloji_cok_once1281_iran.js 169 · KONUMLU 77 · KUTULU 92 · BEYANLI 0 · kırık atıf ✓0 · ODAKSIZ 0`. `kapsam_genis` hiç yazılmadı. `yer_id` yalnız olay TAM oradaysa; antlaşma/tanıma ve "X'e yürüdü/gönderildi/döndü/seferi" maddelerinde `odak_yer` (ODAK-KAPAT tuzağı ③, M-5671). Olay yeri havuzda yoksa (Rey, Alamut, Malazgirt, Otrar, Dînever, Cürcân, Taberistan …) en yakın havuz yerleşimi `odak_yer` olarak verildi — `yer_id` DEĞİL, veriye yalan yazılmadı.
- **alıntı sınavı:** her maddenin `alinti`sı ve her yeni künyenin `alinti_f/_t`si önbellek gövdesinde birebir arandı — 187 madde evreninde bulunamayan 0.
- mükerrer sınavı dört katman: künye-içi `kronoloji` · gruplar arası (ortak kelime YA DA aynı yıl+tür+taraf kümesi — 1059 barışı ikincisiyle yakalandı) · yüklü dış kronoloji/olay maddeleri · **komşu kampanya dosyaları** (`kronoloji_cok_*`): ortak TARAF varsa çift aynı künyede görünür ⇒ o taraf benden düşürüldü, taraf kalmazsa madde düştü. Sonuç: 187 → 169 (red 18 · 5 maddede taraf düşürüldü: 1029 Rey [buveyhi,gazneli], 1048 Kavurd-Kirman [buveyhi], 1095 Tutuş [suriye-selcuklu], 1209 Uygur [mogol-imparatorlugu], 1235 Barak [kutlughanli]). Büveyhî maddelerinin çoğu `once1281_ortadogu`da, Şirvanşah 1068/1120 `once1281_anadolu`da, Aynüseylem 1086 `once1281_anadolu`da, Çağatay 1266/1269 `cok_ince_misir_orta_asya`da, Kutluğ Terken 1257 `cok_ince_anadolu_iran`da kaldı.

## 🔴 Birleştirmede dikkat
1. ~~Yeni künyeler devletler.js'e girmeden 221 taraf bağı görünmez.~~ 2. turda ölçüldü: künyeler birleştirilmiş, 269/269 taraf devletler.js'te. Özellikle `buyuk-selcuklu`, `harizmsah`, `gazneli` başka oturumların dosyalarında da taraf olarak kullanılıyor (ONCE1281-HINDISTAN-AMERIKA `gazneli`/`gurlu`yu kullanacak — M-5565).
2. **Boya:** 30 yeni künye (30'unun 30'u) `harita:null` + `boya_gerekli:true`. **`kert` künyesinde `harita` alanı YOK ama `BOYALAR`da `kert` anahtarı VAR** — öneride `harita:"kert"` yazıldı.
3. 🔴 **`kert` genişletme GERİ ALINDI (1 Ekim, M-5702).** TDV'de ayrı KERT maddesi VAR (slug `kert`; M-5694 ajax aramasıyla bulundu) ve "hükümdar oldu (643/1245)" der; `herat` maddesinin 642/1244'ü tayin tarihidir (1255 onayıyla birlikte). TDV kendiyle çelişiyor, hânedan maddesi esas ⇒ f **1245** (eski künye doğruydu). devletler.js'e 1244 ve "ayrı madde yok" notu inmiş — koordinatörden geri alma istendi. `harita:"kert"` önerisi duruyor (künyede alan hâlâ yok).
   Aynı turda: Hasanveyh · Kerâyit · Nayman · Ong Han · Yezd Atabeg TDV başlık aramasında **yok** (ajax ile doğrulandı); Melikşah (`meliksah--buyuk-selcuklu`) ve Tekiş (`tekis-alaeddin`) VAR ama maddeler zaten TDV'den. Dosyada TDV-dışı kaynaklı madde: **0/169**. Kert için 3 ek madde (1246/1257/1265) `kronoloji_iran_ardillari.js`te zaten var — eklenmedi (PARCA-E, RED.json).
4. **Künye `t`'si kuşak dışına sarkanlar** (künyede duruyor, kuşak dışı madde YOK): `salgurlu` 1286-12-29 · `yezd-atabegligi` 1318 · `bavendi` 1349-04-17 · `badusbani` 1598.
5. **Pencere içi boşluklar:** `bavendi` üç kol (Keyûsiyye →1028 · İspehbediyye 1074-1210 · Kinhâriyye 1238-1349) — 1028-1074 ve 1210-1238 kesilmeli; `buveyhi` kolları ayrı ayrı düştü (Rey 1029 · Kirman 1048 · Irak 1055 · Fars 1056).
6. **Tâbi dönemleri** (`v:` olarak çizilmeli, künye ömrü değil): `gurlu` 1148 öncesi Gazneli/Selçuklu tâbii · `harizmsah` 1097-~1156 Selçuklu tâbii · `kakuyi` 1051-1141 Selçuklu tâbii · `idil-bulgar` 1236 sonrası ve `koco-uygur` 1209 sonrası Moğol tâbii (künyeler bağımsızlık sonunda bitiyor).
7. **Karahanlı üçe bölündü:** `karahanli` 840-1041 · `dogu-karahanli` 1041-1210 · `bati-karahanli` 1041-1212 (TDV: "bağımsız bir devlet kurdular (433/1041-42)"). Batı'nın 1164 sonu hanedan maddesi; aynı polity 1212'ye sürüyor (D205 ②).
8. **Aynüseylem 1086** 2. turda DÜŞTÜ — `once1281_anadolu` aynı olayı `suriye-selcuklu`+`selcuklu` taraflarıyla taşıyor.
9. **İlhanlı künye-içi Bağdat günü** 13 Şubat 1258; TDV `hulagu` teslim 4 Safer 656 = 10 Şubat 1258. Künye düzeltme adayı (bu dosyada Bağdat yazılmadı — `kronoloji_iran_ardillari.js`te var).
10. **1206 kurultay · 1260 bölünme · 1256 Alamut teslimi** mükerrer olduğu için DÜŞÜRÜLDÜ (künye-içinde var) — DOGU-ASYA'ya "ben yazarım" denmişti; zaten `mogol-imparatorlugu` künyesinde duruyor.

## Kural sınırı: künye başına 3-15
- **>15** yalnız çok taraflı sayımdan: `buyuk-selcuklu` 38 · `mogol-imparatorlugu` 29 · `gazneli` 23 · `harizmsah` 20 · `irak-selcuklu` 16 · `ilhanli` 16. Birincil yazılan (grubun o künye için yazdığı) madde her birinde ≤15; fazlası başka künyenin olayında taraf olmaktan geliyor.
- **<3** kaynak yetmediği için: `yezd-atabegligi` 2 · `kerayit` 2 · `nayman` 2 · `koco-uygur` 2 — TDV'de tarihli başka olay bulunamadı.

## Tarih hassasiyeti / çelişki (ic_not'larda ayrıntılı)
Sencer'in ölümü 26 Nisan ya da 6 Mayıs 1157 (t 1157-01-01) · Irak Selçuklu kuruluşu 1118 sultanlık ilanı vs 1119 antlaşması · Belh 1007/1008 · Tekiş cülusu 1172/1173 · Sâmânî Buhara geri alışı 1000 (`samaniler`) vs 1003 (`karahanlilar`) · Kâkûyî Hemedan 1023 vs 1028 · Yezd atabegliği 1141 (`kakuyiler`) vs Arslanşah sonrası (`yezd`) · Katvân'da ölen Kâkûyî Ferâmurz (`kakuyiler`) vs Gerşâsb (`yezd`) · Kerâyit/Nayman f=1199 kuruluş DEĞİL ilk yıllı tanıklık · `gurlu` f=1000 yalnız TDV madde başlığı "(1000-1215)".

## Bulunamadı (özet — tam liste KUNYE.json `bulunamadi`)
Hasanveyhîler · Şebânkâre · Kerâyit/Nayman ayrı maddesi · Oğuz Yabgu (1003 öncesi yıkılmış — künye açılmadı) · Fergana Karahanlıları (bitiş ölçülemedi) · Me'mûnîler/Altuntaşoğulları (künye önerilmedi, koordinatör kararı) · Kalka günü · Mohi 1241 · Batu'nun ölüm yılı · Ani 1064 yılı · Melikşah maddesi (slug ölü).
Künyesiz karşı taraflar (taraflara yazılmadı): Abbâsî · Fâtımî · Liao · Batı Xia · Rus knezlikleri · Peçenek · Hint yerli devletleri · Şebânkâre · Ahlatşahlar · Börî · Eyyûbî ana künyesi.
