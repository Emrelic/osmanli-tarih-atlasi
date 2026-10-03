# KASA-NOKTA-DOSYA-1003 — 1281 öncesi pilot: 20 adın nokta künyesi

*KASA İRTİBAT · 3 Ekim 2026 · koordinatör görevi (pilot onayı Emre). Yalnız ÖLÇÜM; `data/` dosyalarına dokunulmadı. Noktaları koordinatör yazacak.*
- **Taban:** `origin/main` `2df73c00`.
- **Havuz:** `girdi.yukle()`, 4296 nokta.
- **Kronoloji evreni:** `data/kronoloji*.js` + `data/olaylar*.js`; 181 dosya · 10.004 madde.

## HÜKÜM (kısa)
- **20 adın 19'u için kaynaklı koordinat var.** **Hârim: koordinat BULUNAMADI** (TDV başlık maddesi yok; Pleiades, al-Ṯurayyā ve Getty TGN'de yok).
- 🔴 **Menbic yeni nokta DEĞİL.** Havuzda `Münbiç` (`yerlesimler_ek25.js`) olarak duruyor; Pleiades koordinatına **0,2 km**.
  - `KASA-ONCE1281-1003`teki "Menbic YOK" hükmüm **yanlıştı**: ad eşlemem `Menbic`↔`Münbiç` yazım farkını görmedi.
  - Yakın mükerrer taraması bu iş için var ve tam bunu yakaladı.
  - ⇒ Menbic için **uzatma** gerekir (`Münbiç`in 1281 öncesi dönemi), yeni nokta değil.
- **Yeni nokta: 18 ad** (+ Hârim kaynak bekliyor).
- **Odak kazanacak madde: 59.** Bunun **11'i bugün YANLIŞ şehre bakıyor** (vekil):
  - Rey→Tahran ×5
  - Dînever→Kirmanşah/Hemedan ×2
  - Malazgirt→Erciş/Bitlis
  - Silvan→Diyarbakır/Bitlis
  - (+ 2 çok yerli `yer_id` ve 1 alakasız anma; bunlar düzeltme listesinde ayrı işaretli)
  - Kalan ~45 madde bugün **odaksız** (yer_id/odak_yer boş).
- ⚠️ **Kapsam uyarısı — pilotun en ağır kalemi bu.** Ahlat, Harran, Silvan, Malazgirt, Ergani, Misis, Sis, Sason, Rey 1281'den SONRA da yaşayan yerler.
  - Havuza girdikleri anda 1281–1923 haritasının peteklerini değiştirirler.
  - O dönem için `s:` sahipliği yazılmazsa **Değişmez 1 (sahipsizlik)** kırılır.
  - ⇒ Bu noktalar yalnız 1281 öncesi işi değil, **tam ömürlü nokta** işidir. Ayrıntı §4.

## 1 · Yöntem
- **Seçim:**
  - Koordinatörün 13 adı.
  - Önceki raporun YOK listesinden Anadolu/Kafkas/Cezîre çekirdeğindeki 7 ad: Misis · Dînever · Şemkir · Beylakan · Lori · Sason · Hârim.
  - Seçim ölçütü: madde sayısı + çekirdeğe yakınlık. Misis ve Dînever 2'şer madde; ötekiler 1'er ama Şeddâdî/Ahlatşah/Haçlı sahnesinin düğümleri.
  - Elenen adaylar: Hulvân · Cebele · Bânyâs · Kerek (1'er madde; Levant/Cibâl) · Erzen (yalnız başlıkta) · Gürcistan, Şirvan (bölge).
- **Aday taraması:** 7 `once1281` dosyasında `yer`+`b` metni, normalleştirilmiş ad (TDV `sgNorm` birebiri). Havuzda adı geçmeyen 27 ad çıktı.
- **Madde sayımı:** bütün kronoloji evreni (181 dosya).
  - Yanlış pozitifler elle elendi: "ani" (= *aniden*, 4) · "hil'at" (Ahlat, 2) · "Rio del Rey" (1).
- **Koordinat kaynakları** (§4 kırmızı çizgi: üçü de akademik/kurumsal gazetter; Vikipedi ve Wikidata KULLANILMADI):
  1. **Pleiades** (NYU ISAW, Barrington Atlas tabanlı) — `pleiades.stoa.org/places/<id>`
  2. **al-Ṯurayyā** (Romanov–Seydi, Cornu atlası koordinatları; `coord_certainty`) — `althurayya.github.io`, `cornu_URI`
  3. **Getty TGN** (Getty Research Institute) — `vocab.getty.edu/tgn/<id>`
  4. UNESCO WHC 1518 (yalnız Ani için ikinci tanık)
- **Kaynak önceliği:** Pleiades varsa birincil (arkeolojik yer); yoksa al-Ṯurayyā; o da yoksa TGN. Her satırda ikinci kaynakla **fark (km)** verildi.
- **TDV:** koordinat vermiyor. 11 maddenin gövdesinde derece işareti 0. TDV yalnız **kimlik** ve **göreli konum** için kullanıldı.
  - Göreli cümle olan 4 yerde sağlama yapıldı (§3).
  - Slug tuzakları: `rey` → RE'Y (hukuk terimi; doğrusu `rey--iran`) · `sis` → ŞÎS (Hz. Şit) · `harim` → HARİM (hukuk terimi) · `malazgirt` → 302 (doğrusu `malazgirt-muharebesi`).
- **Yakın mükerrer:** birincil koordinata ≤3 km tüm havuz + 3–25 km bilgi amaçlı + normalleştirilmiş ad taraması (§11).

## 2 · Nokta künyeleri

| # | ad (önerilen TAM yazım) | lat | lon | koordinat kaynağı · ikinci kaynakla fark | TDV | kac_madde | ≤3 km mükerrer |
|---|---|---|---|---|---|---|---|
| 1 | **Ahlat** | 38.76551 | 42.51044 | al-Ṯurayyā `AKHLAT_425E387N_S` (certain) · Pleiades 874409 "Calata" 2,0 km (Calata=Ahlat kimliği Pleiades'te **beyan edilmemiş**, yalnız destek) | `ahlat` | 3 | yok |
| 2 | **Harran** | 36.86359 | 39.03075 | Pleiades 658427 · al-Ṯurayyā 5,7 km | `harran` | 4 | yok |
| 3 | **Malazgirt** | 39.14610 | 42.54090 | Pleiades 733857263 (Urartu yazıtlarının buluntu yeri = kasaba) · al-Ṯurayyā 1,4 km | `malazgirt-muharebesi` (şehir maddesi yok, 302) | 2 | yok |
| 4 | **Meyyâfârikîn (Silvan)** | 38.14279 | 41.00326 | Pleiades 874573 · al-Ṯurayyā 0,4 km | `meyyafarikin` | 8 | yok |
| 5 | **Ani** | 40.50630 | 43.57056 | Pleiades 863739 · TGN 7002350 0,1 km · UNESCO 1518 0,8 km | **başlık maddesi bulunamadı** | 5 | yok (Kliçatak 14,6) |
| 6 | **Dvin** | 40.01186 | 44.58079 | Pleiades 863780 Doubios (BAtlas 88 C4) · ⚠️ al-Ṯurayyā `DABIL` **19,2 km** | **bulunamadı** | 5 | yok (Revan 19,9) |
| 7 | **Rey** | 35.59427 | 51.44716 | Pleiades 903104 · al-Ṯurayyā 6,7 km | `rey--iran` | 7 (+1 alakasız anma) | yok (Tahran 11,8) |
| 8 | ~~Menbic~~ → **havuzda `Münbiç`** | 36.528 | 37.955 | **havuz** · Pleiades 658480 0,2 km · al-Ṯurayyā 3,8 km | `menbic` | 1 | 🔴 **`Münbiç` 0,2 km — MÜKERRER, açılmaz** |
| 9 | **Taberiye** | 32.78769 | 35.54229 | Pleiades 678431 · al-Ṯurayyā 3,0 km | `taberiye` | 4 | yok |
| 10 | **Şeyzer** | 35.25585 | 36.55938 | al-Ṯurayyā `SHAYZAR_365E352N_S` · TGN 5003641 1,4 km | `seyzer` | 3 | yok (Hama 22,2) |
| 11 | **Sis (Kozan)** | 37.45520 | 35.81570 | TGN 7708961 (Kozan, Sis adlı kayıt) · TGN 1086617 2,9 km | **bulunamadı** (`sis` = Hz. Şit) | 3 | yok |
| 12 | **Ergani** | 38.28330 | 39.73330 | TGN 1086252 (modern kasaba) · TGN 7725480 2,4 km | **bulunamadı** | 3 (1'i Mardin-Ergani akını) | yok |
| 13 | **Askalân** | 31.66480 | 34.55052 | Pleiades 687839 · al-Ṯurayyā 0,4 km | `askalan` | 1 | yok (Gazze 19,8) |
| 14 | **Misis** | 36.95804 | 35.62237 | Pleiades 658538 · al-Ṯurayyā 4,6 km | `misis` | 2 | yok |
| 15 | **Dînever** | 34.61753 | 47.46222 | Pleiades 903012 · al-Ṯurayyā 3,1 km | `dinever` | 2 | yok |
| 16 | **Şemkûr (Şemkir)** | 40.99521 | 46.06157 | al-Ṯurayyā `SHAMKUR_460E409N_S` (tek kaynak) | **bulunamadı** | 1 | yok |
| 17 | **Beylakan** | 39.86701 | 47.46081 | al-Ṯurayyā `BAYLAQAN_474E398N_S` (tek kaynak; ⚠️ `Manzil al-Baylaqān` ayrı bir yer, alınmadı) | **bulunamadı** | 1 | yok |
| 18 | **Lori (Lukri)** | 41.00209 | 44.43060 | Pleiades 891583977 Lori Berd kalesi (1065'te yapılmış) (tek kaynak) | **bulunamadı** | 1 | yok |
| 19 | **Sason** | 38.33330 | 41.41670 | TGN 1086511 — ⚠️ **modern ilçe merkezi**; ortaçağ "Sasun kaleleri" bir dağlık bölge, nokta temsilîdir · TGN 7686244 0,3 km | **bulunamadı** | 1 | yok |
| 20 | **Hârim** | — | — | **BULUNAMADI:** Pleiades (Harim/Harenc), al-Ṯurayyā (ḥārim), TGN (Harim/Harem, Suriye). Uydurulmadı | **bulunamadı** (`harim` hukuk terimi) | 1 | ölçülemedi |

**Toplam kac_madde = 59.** Menbic dahil; Rey'deki alakasız anma ve Ergani'deki akın maddesi dahil.

### Ad yazımı kararı ve gerekçesi
- **Kural:** TDV başlığı varsa TDV yazımı (§4 TDV birincil). Şapka, TDV'nin şapkası kadar: Askalân · Dînever · Meyyâfârikîn.
- **Modern adın paranteze alındığı yerler:** Meyyâfârikîn (Silvan) · Sis (Kozan) · Şemkûr (Şemkir) · Lori (Lukri). Gerekçe: kronoloji metinleri iki biçimi de kullanıyor.
  - Silvan için `yer` alanında "Silvan" ×4 ve "Meyyâfârikîn (Silvan)" ×2 geçiyor.
- **Şemkûr:** TDV maddesi yok. Maddenin kendi metninde "Şemkûr", `yer` alanında "Şemkir" yazılı. Ortaçağ biçimi esas alındı (al-Ṯurayyā *Šamkūr*).
- 🔴 **`yer_id` TAM EŞİTLİK ister** (`arac/odak_cozum.js:122` `SEHIR.has`). Parantezli ad seçilirse, düzeltilecek maddelere `yer_id` **parantezli tam adla** yazılmalı (`"Meyyâfârikîn (Silvan)"`). "Silvan" yazılırsa odak kapısı kırık atıf olarak öter.
  - Seçim: kısa ad, parantezli ad ya da tek biçim. Hüküm sende.

## 3 · Sağlamalar ve çelişkiler
- **TDV göreli konum ↔ seçilen koordinat** (havuz noktasına mesafe):

  | Yer | TDV'nin söylediği | Ölçülen | Hüküm |
  |---|---|---|---|
  | Misis | Adana'ya 27 km | **27,2 km** | ✓ |
  | Dînever | Kirmanşah'a 45–48 km | **49,7 km** | ≈ ✓ |
  | Rey | Tahran'ın 7–8 km (güneyi) | havuzdaki `Tahran` noktasına **11,8 km** | ≈. Havuzdaki Tahran noktası şehir merkezi değilse fark oradan gelir; ölçülmedi |
  | Askalân | Yafa'nın 60 km (güneyi) | havuzdaki `Yafa`ya **47,4 km** | ⚠️ ~13 km fark. İki gazetter birbirine 0,4 km uyuyor ⇒ kuşkulu olan koordinat değil, TDV'nin yuvarlak sayısı ya da yol mesafesi. Kayda düşülmeli, düzeltilmemeli |

- **Dvin: iki kaynak 19,2 km ayrışıyor.** Pleiades BAtlas noktası (40.012, 44.581) arkeolojik Dvin höyüğü. al-Ṯurayyā (40.165, 44.686) Cornu atlasının yaklaşık konumu. **Pleiades seçildi.** Hüküm sende; ikincisi Revan'a yakın düşer ve petek komşuluğunu değiştirir.
- **Harran (5,7 km) ve Rey (6,7 km):** aynı desen (al-Ṯurayyā = Cornu yaklaşığı). Pleiades seçildi.

## 4 · 🔴 Değişmez 1 uyarısı — bu noktalar yalnız 1281 öncesi değil
Havuzdaki her nokta 1281–1923 haritasında da petek üretir. Yeni noktanın o dönem için `s:` sahipliği yoksa **sahipsiz nokta = haritada delik** olur. Ayrıca komşu peteklerin şekli değişir; komşunun sahibi ile yeni noktanınki farklıysa Değişmez 2 kırılması da doğabilir.

| Durum | Adlar | Gereken |
|---|---|---|
| 1281 sonrası da yaşıyor | Ahlat · Harran · Meyyâfârikîn · Malazgirt · Ergani · Misis · Sis (1375'e kadar Kilikya Ermeni başkenti!) · Sason · Rey · Taberiye | 1281–1923 tam `s:` zinciri (kaynaklı). **Sis'in 1281–1375 sahipliği** Kilikya künyesine bağlanmalı |
| 1281 civarında/öncesinde terk | Ani (14. yy) · Dvin (13. yy) · Askalân (1270 yıkım) · Şeyzer · Beylakan · Lori · Şemkûr · Dînever | Noktanın SONU nasıl ifade edilecek? Şemada `kur` var, bitiş alanı ölçmedim. Bitişi olmayan nokta 1923'e kadar sahipsiz kalır ⇒ 309 tavanı aşılır |

- **Ölçülmedi:** şemada nokta bitişi var mı (`VERI-YAPISI.md`). Dosya sahibi sensin, ben okumadım; karar senin.

## 5 · vekil_kayit — düzeltilecek maddeler
**A · Bugün YANLIŞ şehre bakan (vekil):**

| Ad | Dosya#indeks | t | bugün | düzeltme |
|---|---|---|---|---|
| Rey | `kronoloji_cok_once1281_iran.js`#15 | 1029-01-01 | `odak_yer:["Tahran"]` | → Rey |
| Rey | `…_iran.js`#26 | 1038-01-01 | `odak_yer:["Tahran"]` | → Rey |
| Rey | `…_iran.js`#44 | 1063-09-04 | `odak_yer:["Tahran"]` | → Rey |
| Rey | `…_iran.js`#58 | 1095-02-25 | `odak_yer:["Tahran"]` (`yer`: "Rey yakını") | → Rey |
| Rey | `…_iran.js`#124 | 1217-01-01 | `odak_yer:["Tahran"]` (`yer`: "Rey civarı") | → Rey |
| Dînever | `…_iran.js`#74 | 1132-01-01 | `odak_yer:["Kirmanşah","Hemedan"]` (iki noktalı kutu, ~50 km öte) | → Dînever |
| Dînever | `…_iran.js`#76 | 1132-05-25 | `odak_yer:["Kirmanşah","Hemedan"]` | → Dînever |
| Malazgirt | `…_iran.js`#47 | 1071-08-26 | `odak_yer:["Erciş","Bitlis"]` (Erciş ~70 km) | → Malazgirt |
| Meyyâfârikîn | `…_iran.js`#160 | 1260-01-01 | `odak_yer:["Diyarbakır","Bitlis"]` | → Meyyâfârikîn (Silvan) |

**B · Çok yerli madde; `yer_id` başka bir yeri gösteriyor ve bu MEŞRU olabilir** (hüküm sende):
- `…_ortadogu.js`#2 1010 `yer_id:"Musul"`, `yer`: "Musul, Harran" — Musul doğru, Harran ikincil.
- `…_ortadogu.js`#129 1201 `yer_id:"Kahire"`, `yer`: "Kahire, Dımaşk, el-Cezîre, Meyyâfârikîn" — Kahire doğru.
- `kronoloji_akkoyunlu.js`#22 1439 `yer_id:"Mardin"`, "Mardin-Ergani akınları" — dokunma.
- `olaylar_ek16.js`#13 1452 `yer_id:"Kirman"`, Rey yalnız bölge listesinde — **dokunma** (sayıma katıldı ama odak değişmez).

**C · Bugün ODAKSIZ, nokta açılınca `yer_id` yazılacak** (~45 madde):

| Ad | Maddeler (`kronoloji_cok_once1281_*` indeksi) |
|---|---|
| Ahlat | anadolu #76 #108 #110 |
| Harran | anadolu #51 · ortadogu #63 #110 |
| Malazgirt | `kronoloji_anadolu.js`#51 (1071-08-26, `yer_id:""`) |
| Meyyâfârikîn | anadolu #55 #56 #69 · ortadogu #165 · `kronoloji_anadolu.js`#147 (Malabadi köprüsü, 1147) · anadolu #108 (Ahlat'la ortak) |
| Ani | anadolu #16 #75 #90 #91 #92 |
| Dvin | anadolu #3 #13 #63 #78 #133 |
| Rey | ortadogu #8 #57 |
| Menbic → `Münbiç` | ortadogu #39 |
| Taberiye | ortadogu #9 #66 #72 #120 (Hıttîn) |
| Şeyzer | ortadogu #70 #80 #90 |
| Sis (Kozan) | anadolu #128 · `kronoloji_anadolu.js`#253 (1226) #267 (1307 Sis Konsili — **1281 sonrası, bugünkü haritada**) |
| Ergani | anadolu #87 · `kronoloji_akkoyunlu.js`#11 (1412) |
| Askalân | ortadogu #98 |
| Misis | anadolu #112 #168 (Mari, çok yerli) |
| Şemkûr | anadolu #5 |
| Beylakan | anadolu #7 |
| Lori | anadolu #97 |
| Sason | anadolu #103 |
| Hârim | ortadogu #104 (koordinat yok ⇒ bekler) |

## 6 · Ölçülemeyen / beyan
- **Hârim koordinatı bulunamadı.** World Historical Gazetteer betik erişimini reddediyor (`Bot access denied`); tarayıcıdan denenebilir.
- **Başlık maddesi bulunamayan TDV adları:** Ani · Dvin · Sis · Ergani · Şemkûr · Beylakan · Lori · Sason · Hârim.
  - D217'ye göre kapsayıcı madde (Şeddâdîler, Ahlatşahlar, Kilikya) bu turda **okunmadı**.
  - Kimliği kronoloji maddelerinin kendi `kaynak:` alanları taşıyor.
- **Ahlat'ın Pleiades eşi** (Calata) yalnız konum çakışmasıyla eşleştirildi; kimlik beyanı yok.
- **Sason ve Ergani'nin TGN noktası modern yerleşim.** Ortaçağ kale/çekirdek konumu ölçülmedi.
- **`Münbiç`in 1516–1918 arası `s:` boşluğu** (ilk bakışta görüldü) bu işin kapsamı dışında; ölçülmedi.
- **Araç:** `C:\Users\ana\AppData\Local\Temp\kd\nokta\` (`aday.py` · `detay.py` · `pleiades.py` · `thur.py` · `son.py`). Repo dışı, iş ürünü değil. Ham sonuç `son.json`.
