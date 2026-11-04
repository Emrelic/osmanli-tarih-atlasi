# 85 · Songhay İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer: top100_olc.py; TDV, UNESCO GHA IV, Kaba 1981 bu oturumda okundu)

## Özet
- **Künye 1 çekirdek** (`songhay-imparatorlugu`) + 3 ilişkili (`kevkev` 1000–1324, `kevkev-erken` 801–1009-08-25, `dendi` 1591–1901). **MÜKERRER/örtüşme: `kevkev` f=1000-01-01 ile `kevkev-erken` t=1009-08-25** (9 yıl çakışma; `kevkev` kendi `ic_not_f`unda f'yi "UFUK SINIR İŞARETİ" sayıyor; evren maddesi merkez nakli 1009-08-25).
- **Açık kırılma: 0** çekirdekte (4 kırılma da kapalı: 1464, 1468, 1473, 1591-04-13); `kevkev` 1 (1000 Gao, 1281 öncesi); `kevkev-erken`/`dendi` 0 yerleşim (haritada görünmüyor).
- **Eksik madde:** 5 + 1 düzeltme. Haritada yalnızca **3 yerleşim** (Gao, Timbuktu, Cenne).
- **En ağır 3 bulgu:**
  1. **Künye `kaynak:"bulunamadı — TDV'de müstakil maddesi yok"` yanlış:** TDV `songay` maddesi var (yönlendirme) ve «Mali» maddesinin "Songay İmparatorluğu" bölümü Sünnî Ali Ber 1464-1492 (6 Kasım 1492'de öldü), Askiya Muhammed 1493-1528, Askiya Dâvûd 1549-1582, Tondibi 1591'i verir; `gao` ve `tinbuktu` de var. CLAUDE.md: "TDV'de yok" demeden ara — kaynak satırı ve `ozet` ("TDV'de ayrıntılı madde yok") düzeltilmeli.
  2. **t gün çelişkisi:** 1591-04-13'ü hiçbir kaynak vermiyor. Kaba 1981 (JAH 22:457-475): savaş "Mart 1591" (Kâtî, Fas ve İspanyol kaynakları) ama *Ta'rīkh es-Sūdān* "12 Nisan 1591" (dipnot 1); TDV/UNESCO/Hunwick başlığı yalnız yıl (1591). Öneri: 1591-04-12 (birincil Songhay kroniği) + Mart alternatifi `ic_not`ta, ya da yıl hassasiyeti.
  3. **Gao 1400–1464 sahibi yanlış (Mali yazılı)** ve Timbuktu 1430–1468 sahipsiz: Songhay'ın tarihöncesi (Sunni hanedanı, UNESCO: Mali hâkimiyeti 14. yy sonunda bitti) künye penceresinin dışında (f=1464). Künyeyi genişletmek ya da ata künye açmak gerekir (CLAUDE.md "aynı polity sürüyorsa künyeyi GENİŞLET").

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| songhay-imparatorlugu | Songhay İmparatorluğu | 1464-01-01 | 1591-04-13 | VAR; 3 yerleşim (Gao 1464→, Timbuktu 1468→, Cenne 1473→); f/t'nin `kaynak` ve `ozet` metni TDV'yi yok sayıyor (düzelt) |
| kevkev | Kevkev (Gao) Krallığı — Zâ Hânedanı | 1000-01-01 | 1324-01-01 | VAR; 1 yerleşim (Gao 1000–1324); **örtüşme/MÜKERRER** `kevkev-erken` ile 1000–1009 |
| kevkev-erken | Kevkev (Gao) — Erken Dönem | 0801-01-01 | 1009-08-25 | VAR; 0 yerleşim (Gao s: 801–1000 `__BOSLUK__` beyanlı: künye `kevkev-erken` boya yok) — 1281 ufku öncesi |
| dendi | Dendi Krallığı (Askia Nûh 1591) | 1591-01-01 | 1901-01-01 | VAR; 0 yerleşim — Songhay'ın doğrudan ardılı; haritada görünmüyor (Lulami/Kandi/Nikki noktası yok) |
| (EKSİK) | Gao Sunni hanedanı ≈1400–1464 | — | — | Songhay'ın doğrudan öncülü; UNESCO s.190 |
| (EKSİK) | Tuareg-Timbuktu 1430–1468 | — | — | bkz. 84- |
| (EKSİK) | Askiya Gao'da Fas paşalarına tâbi (1591→XVIII. yy) | — | — | TDV «Gao»: «XVIII. yüzyıla kadar Askiyalar Gao’da Faslı paşaların emrinde hüküm sürdüler»; atlas `fas` 1591–1700 yazıyor (`e9353f.js:158`) |
| (Not) | Arma Paşalığı | 1750–1760 | — | `arma` künyesi var (Timbuktu) — Songhay dışı |

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| f 1464 | 1464-01-01 (yıl) | TDV «Mali» «Songay İmparatorluğu» bölümü: «Sünnî Ali Ber: 1464-1492 yılları arasında hüküm sürdü» | UNESCO GHA IV (Niane ed. 1984) Ch.8 s.191: «The dynasty reached its peak with the accession of Sunni 'Alī in 1464»; "Sunni 'Alī Ber … (1464-92)"; Hunwick 1966 başlığı "Religion and state in the Songhay empire, 1464-1591" (UNESCO kaynakça) | **ÇİFT TEYİT**; yıl hassasiyeti | değişmez. Not: 1464 = Sünnî Ali'nin tahta çıkışı; imparatorluk genişlemesi 1468 (Timbuktu) ve 1473 (Cenne) — künye f'nin "imparatorluk" yerine "Sunni krallığı" evresi 1400→ (öneri 1) |
| t 1591 yıl | 1591 | TDV «Mali»: «1591’de meydana gelen Tondibi savaşıyla Songay Sultanlığı’na son verdi»; «Tondibi Savaşı» (TDV Tondibi sayfası okundu: yalnız yıl) | UNESCO GHA IV: «army assembled in 1591 at the battle of Tondibi»; Kaba 1981: "Mart 1591"; UNESCO "dynasty of the askiyas (1492-1592)" (Muhammad Gao 1592) | **ÇİFT TEYİT (yıl)**. UNESCO: askiya hanedanı resmî olarak 1592'ye kadar | t yılı 1591 doğru |
| t gün | 1591-04-13 | Kaba, L. 1981, "Archers, Musketeers, and Mosquitoes", *Journal of African History* 22(4):457-475, doi 10.1017/S0021853700019861 (Cambridge Core, okundu): Mart 1591 (gün yok); dipnot 1: *Ta'rīkh es-Sūdān* 12 Nisan 1591 | TDV: yalnız 1591; UNESCO: yalnız 1591 | **hiçbir kaynak 13 Nisan vermiyor**; iki kaynaklı çelişki (Mart ↔ 12 Nisan) | t=**1591-04-12** (Ta'rīkh, birincil Songhay kroniği; Kaba) + `ic_not`: "Kâtî/Fas/İspanyol kaynakları Mart 1591 (Kaba 1981); 13 Nisan kaynaksız". Gün için Hunwick 1999 gerekli (erişilemedi). Alternatif: yıl hassasiyeti → 1591-01-01 ("[yalnız yıl teyitli]") — sınıra bağlı olduğundan yukarıdaki öneri tercih |
| Timbuktu f | 1468-01-01 | TDV «Tinbüktü»: Sünnî Ali 1468'de Tuareg'den aldı, ~24 yıl yönetti (-1492); «Songay» özeti: «Timbuktu was taken in 1468» | UNESCO GHA IV s.191: «in 1468, most important of all, Timbuktu» | ÇİFT TEYİT | değişmez |
| Cenne f | 1473-01-01 | TDV «Gao»: Sonni Ali Tinbüktü ve Cenne'yi aldı (1473); TDV «Songay» özeti: «Cenne in 1473» | UNESCO s.191: Jenne fethi (yıl yok); Britannica 1473 (403, erişilemedi); bazı derlemeler 1475 | TDV esas 1473; 2. akademik kaynak yıl vermiyor → "çift teyit" yazılamaz | değişmez; `ic_not`: "1473 TDV; 1475 alternatif" |
| Askiya hanedanı | künye kron. 1493-01-01 (evren dışı) | TDV «Mali»: «Askiya Muhammed 1493-1528» | UNESCO s.192: «The dynasty of the askiyas (1492-1592)»; "Civil war broke out after the death of Sunni 'Alī" (6 Kasım 1492, TDV) | 1492/1493 fark: TDV 1493, UNESCO 1492; kroniklerde gün var (erişilemedi) | evren maddesi için 1493-01-01 ("TDV 1493; UNESCO 1492") |
| Gao sahibi 1324–1464 | Mali | UNESCO s.190 | TDV «Gao» | bkz. 84-; bu dilim künye öncüllü | Songhay-Sunni evresi ≈1400-01-01→1464-01-01 |
| kevkev t | 1324-01-01 | TDV «Gao»: 1324 «Asibay … Mali Sultanı Gongon Mûsâ’ya biat etti» | UNESCO s.190: Mandingo Gao'yu "possibly 1275, more likely 1285-1300" fethetti; 1324-5 Musa Gao'da cami yaptırdı | 1324 = biat/ziyaret günü; fetih ≈1285-1300. Çelişki beyanlı | `kevkev` t ve Gao `s:`: 1324 yerine fetih için UNESCO 1285-1300; kesin yıl yok → mevcut beyanlı boşluk (1281–1324) makul; ic_not'a eklensin |

## c) Kronoloji
**Var olanlar (evren)**
- 1464 Sünnî Ali (kuruluş) — data/kronoloji_sinir_guney_g8.js:102
- 1468 Timbuktu — data/kronoloji_sinir_guney_g8.js:103 (Mali+Songhay ortak)
- 1473 Cenne — data/kronoloji_sinir_guney_g8.js:105
- 1494 Dia (Zâgha) — data/olaylar_2s_0919.js:483 (es-Sa'dî/Houdas; yıl) — **ancak Dia için yerleşim noktası yok** (yerlesimler_e9353f.js:193 yorumda kalmış)
- 1515 Agadez Songhay'a bağlandı — data/olaylar_2s_0919.js:488 (TDV `nijer`) — Agadez `s:` yok (`tuareg-air` 1405–1906 tek blok; `not:` alanında kaldı)
- 1591-04-13 Tondibi — data/kronoloji_sinir_guney_g8.js:145
- 1591 Askia Nûh Dendi'ye çekildi — künye `dendi` kronolojisi (evren dışı)
- Gao 1009-10 merkez nakli — kronoloji_sinir_dogu_500_1281.js:7146 (1281 öncesi)
**Eksik / düzeltilecek**
```
{ t:"1492-11-06", b:"Sünnî Ali Ber öldü (Gurma seferine hazırlanırken)", yer_id:"Gao", kaynak:"TDV «Mali» «Songay İmparatorluğu» bölümü (okundu): «6 Kasım 1492'de, Gurma seferine hazırlanırken öldü» (sayfa özeti); UNESCO GHA IV s.192: 'At the time of his accidental death in 1492'. ÇİFT TEYİT (yıl); gün tek kaynak (TDV). Hicrî karşılığı TDV'de yok." }
{ t:"1493-01-01", b:"Askiya Muhammed Ture tahta çıktı; Askiya hanedanı (İslâmî) başladı", yer_id:"Gao", kaynak:"TDV «Mali»: 1493-1528; UNESCO GHA IV s.192: 'dynasty of the askiyas (1492-1592)'. Yıl farkı 1492/1493 beyanlı." }
{ t:"1400-01-01", b:"Gao'da Sunni hanedanı Mali hâkimiyetinden kurtuldu", yer_id:"Gao", kaynak:"UNESCO GHA IV s.190: 'the end of the fourteenth century marked the cessation of Mandingo domination over Gao. A new dynasty, that of the Sunni … became independent'; TDV «Gao»: Sonni hanedanı (1339-1493). Yüzyıl hassasiyeti." }
{ t:"1430-01-01", b:"Tevârikler Tinbüktü'yü Mali'den aldı (Tinbüktü 1468'e kadar Tevârik elinde)", yer_id:"Timbuktu", kaynak:"TDV «Tinbüktü» + «Mali» 1430; UNESCO GHA IV s.173: ~1433." }
{ t:"1591-04-12", b:"Tondibi Savaşı: Fas (Sa'dî) ordusu Songhay'ı yendi", yer_id:"Gao", kaynak:"Kaba 1981 JAH 22:457 dipnot 1: Ta'rīkh es-Sūdān 12 Nisan 1591; metin 'Mart 1591'; TDV/UNESCO yıl 1591. Mevcut madde 1591-04-13 kaynaksız → düzelt." }
{ t:"1591-01-01", b:"Askia Nûh Songhay halkını Dendi'ye çekti; Dendi krallığı kuruldu", yer_id:"Gao", kaynak:"künye dendi (UNESCO GHA V Songhay bölümü, atlas) — evren dışı; TDV «Mali»: Dendi 1591 sonrası ardıl bölge." }
```

## d) Harita uyumu
Açık kırılma: **0** (çekirdek). Sahiplik/uyum bulguları (en geniş an: 1476'dan itibaren 3 yerleşim):
- **Yerleşim sayısı 3 — kaynakla uyumsuz derecede az.** UNESCO s.191-192: imparatorluk "from Dendi to Macina", Sunni Ali: Cenne, Timbuktu, Dogon/Mossi/Bariba seferleri; Askiya Muhammed 1494 Dia, 1515 Agadez (TDV nijer), Taghaza, Hombori, Kebbi/Hausa tâbiliği. Haritada yalnız Gao–Timbuktu–Cenne var; peteklerin çevresi komşu noktalara emilir (Agadez `tuareg-air`'e, Dia noktasızdır). Öneri: **Dia (Zâgha), Agadez (1515–1591 `songhay` dilimi), Hombori, Nema/Walata (Askiya dönemi), Kukia** için kaynaklı yerleşim/dilim.
- Agadez: `data/yerlesimler.js:1208` Agadez'in 1515–1591 Songhay tâbiliği `not:`ta kaldı ("`v:` yalnız Osmanlı için"); evren maddesi 1515 var ama haritada karşılığı yok — Değişmez 3 (tarih×yerleşim) açığı. Öneri: Agadez `s:`'ye `{f:"1515-01-01",t:"1591-04-12",d:"songhay-imparatorlugu"}` dilimi (tuareg-air'i bölerek) — TDV nijer yıl tanıklığı yeter.
- Cenne 1591-04-13 → 1596 beyanlı boşluk (TDV "büyük ihtimalle 1596") korunmuş ✓. Gao/Timbuktu `fas` başlangıcı Tondibi günüyle aynı: kaynakta Gao/Timbuktu'nun Tondibi'den sonra alındığı belirtilir (Judar Paşa Nisan 1591'de Timbuktu'ya ulaştı — Wikipedia türevi, dayanak değil); `fas` başı için ayrı kaynak yok → t gününe bağlı yaklaşıklık BEYANI gerekir.
- Gao 1464→1591 `songhay` ✓; Gao 1324-1464 `mali` ✗ (84- bulgusu).
- Dendi: haritada hiç yerleşim yok → "haritada görünmüyor". Gerekli: Kandi/Lulami/Nikki (Borgu) noktaları, `s:` Dendi 1591→ (künye f=1591-01-01; Tondibi günüyle kesişmeli → 1591-04-12 sonrası).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:6026` `songhay-imparatorlugu`: `kaynak` → "TDV «Mali» (Songay İmparatorluğu bölümü), «Gao», «Tinbüktü», «Tondibi»; UNESCO GHA IV Ch.8; Kaba 1981"; `ozet`ten "TDV'de ayrıntılı madde yok" kaldırılsın; `ic_not_t`: "1591-04-13 kaynaksız → 1591-04-12 (Ta'rīkh es-Sūdān, Kaba 1981); Mart 1591 alternatifi".
2. Künye genişletmesi (öneri): `songhay-imparatorlugu` f → **1400-01-01** (Sunni hanedanı bağımsız, UNESCO s.190; yüzyıl hassasiyeti) **veya** yeni ata künye `songhay-sunni` (1400–1464) — CLAUDE.md "aynı polity sürüyorsa künyeyi GENİŞLET" gereği genişletmek önerilir; Gao `s:` 1400–1464 bu künyeye bağlanır. Öneri 1 ile 84- önerisi birlikte uygulanmalı.
3. `data/yerlesimler_e9353f.js:158`, `:187`, `data/yerlesimler.js:1210`: `t:"1591-04-13"` → `t:"1591-04-12"` (Gao, Timbuktu, Cenne, Agadez-not); `kronoloji_sinir_guney_g8.js:145` ve künye kronolojisi aynı güne.
4. `kevkev` f → 1009-08-25 ya da `kevkev-erken` t → 1000-01-01 (çakışma çözülsün: evren maddesi 1009-08-25 → `kevkev` f=1009-08-25; `kevkev-erken` t zaten 1009-08-25).
5. Agadez 1515–1591 dilimi ve Dia noktası; Dendi için yerleşimler (kaynaklı).
6. Evren: c) bölümü 1400, 1430, 1492-11-06, 1493, 1591-04-12 satırları.

## Erişilemeyen kaynaklar
- Hunwick, J., *Timbuktu and the Songhay Empire: al-Sa'dī's Ta'rīkh al-sūdān down to 1613 and other contemporary documents*, Brill 1999 — Soru: Tondibi 12 Nisan mı Mart mı? Songhay'ın Mali'den bağımsızlık yılı? Askiya Muhammed'in tahta çıkış günü?
- Britannica "Songhai empire" (403) ve "Sonni Ali" — Soru: 1468/1473/1492 teyidi.
- Cambridge History of Africa vol. 3 (archive.org `cambridgehistory03fage` 401) — Soru: Songhay'ın bağımsızlık evresi ve Sunni hanedanı kronolojisi.
- Levtzion, N., *Ancient Ghana and Mali*, Methuen 1973 — Soru: Gao'da Mali hâkimiyetinin sonu (1400 civarı?).
- UNESCO GHA IV Ch.8 (Songhay) yazar adı pdf metninde okunamadı (başlık: "The Songhay from the 12th to the 16th century", s.187 vd.) — kayıtlarda yazar belirtilsin.
