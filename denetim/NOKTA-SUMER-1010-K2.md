# NOKTA-SUMER-1010-K2 — Sümer kutusu noktalarının DİFF'i (İKİNCİ KITA — bkz. §8 ÇİFT ATAMA)

Sevk: YILDIRIM BAYEZIT (10 Ekim 2026, `send_message`) · girdi `denetim/KASA-SUMER-NOKTA-1010.md`
· hedef `data/yerlesimler_nokta_ortadogu_0917.js` (koordinatör kararı — tuz dışı, FAZ 2)
· ölçüm ağacı `C:\atlas-nokta-sumer` = `origin/main` `1f080648` (ayrı worktree, `HEAD..origin/main` = 0)

## §0 ÖNGÖRÜ — ölçümden ÖNCE yazıldı (2026-10-10), sonradan DOKUNULMAZ

Aday evreni: KASA §1.4'ün 10 "mevcut" adayı (Uruk · Ur · Lagaş · Kiş · Nippur · Eridu · Umma ·
Şuruppak · Adab · Larsa — `data/`da YOK, koordinatör ölçtü) + KASA §1.1'in 15 yeni + Susa (K)
= **26 aday.** Akşak · Keş · Der · Opis KASA'da koordinatsız/belirsiz ⇒ evrene girmez.

| soru | öngörü |
|---|---|
| yazılabilecek nokta (koordinat + ikinci tanık + varlık penceresi) | **22 ± 2** / 26 |
| ikinci tanıksız kalacak (`ÖLÇÜLEMEDİ`) | **2 ± 1** (kesin aday: Durum/Tell al-Lahm — tek konum kaydı, adı da "probably") |
| yakın mükerrer (normalleştirilmiş ad ya da ≤3 km, atlasın 4300 noktasına karşı) | **0-1** (aday: Susa ↔ atlasta bir Şuş/Sus noktası varsa; Borsippa/Kiş ↔ Hille 10+ km, mükerrer DEĞİL) |
| `bit:` (terk) 1281'den ÖNCE ⇒ atlas penceresinde hiç görünmeyen, `s:` gerektirmeyen | **20 ± 3** |
| `s:`siz ama 1281 sonrasına uzanan (Değişmez 1'e takılacak) | **2 ± 1** (aday: Susa · Kutha) |
| negatif yıllı `kur:`/`bit:` ile `denetle.py` | **çıkış 2 ya da ÇÖKME** — `VERI-YAPISI §MÖ`: "BUGÜN HENÜZ YAZILAMAZ … C4 ile açılır"; `denetle.py` `gun_no` negatifte çöker (`pad()` docstring'i). ⇒ diff `git apply --check` TEMİZ olur ama İNİŞ C4'ü bekler — aksaklık |
| KASA'nın Akşak/Keş hükmü | TUTAR (ikisi de koordinatsız) |
| "Eridu çevresi" | Tell al-Ubaid'e çevrilir; TGN yuvarlak (§9.4) ⇒ tanığı Pleiades iç kayıtları |

## §1 ÖLÇÜM — evren, taban, yöntem

- **Taban:** `origin/main` **`aa266e1f`** (ölçüm `1f080648`'de başladı; hedef dosyanın blob'u iki
  commit'te AYNI `351648b7` ⇒ diff ikisine de uyar). Ölçüm ağacı ayrı worktree, `HEAD..origin/main` = 0.
- **Koordinat:** Pleiades `reprPoint` (26 kaydın JSON'u 10 Ekim 2026'da çekildi, 26/26 HTTP 200).
- **İkinci tanık:** Getty TGN SPARQL (bu oturum; KASA'nın 12 TGN uzaklığı **birebir** yeniden
  ölçüldü, fark 0,00 km) + Pleiades'in KENDİ bağımsız konum kayıtları (OSM · CIGS · DARMC · DARE).
  Kural HUKUM §6 + §9.4: dakika-yuvarlak ya da `inhabited places` TGN **tanık SAYILMAZ**; aynı
  kökenli iki kayıt (CIGS+CIGS) bağımsız DEĞİL.
- **`kur:`:** `KASA-SUMER-KUR-1010 §1.2` aynen (A/A'/D sınıfı ⇒ yazılmaz; Kisurra·Marad·Dilbat
  `-2699`; Borsippa `-2334`; Bad-tibira·Kutha `-1999`). Yunan-Roma etiketleri `kur:` için SAYILMADI.
- **`bit:`** (koordinatörün "`t:`"si — şemada alanın adı `bit:`, `girdi.BILINEN_ALANLAR` ·
  motor `uret_petek.py:4933`): Pleiades **SON TASDİK** = konum + ad tasdiklerinin en geç dönem
  ucu; `modern` · `modern-middle-east` · `twentieth-ce` HARİÇ (modern höyük adlarının tasdiki,
  yerleşim değil). Yunan-Roma etiketleri burada SAYILDI (varlık kanıtı; `kur:` yasağı alt sınır
  içindir). Emsal `KASA-SUMER-B-TUR §1.5` (Ubaid `-2949`, `yuzyil`, "SON TASDİK — terk DEĞİL").
  **Tek istisna Kiş:** açıklama cümlesi "abandonment under the Seleucids" ⇒ hellenistic-middle-east
  sonu MÖ 140; ad tasdiki MS 640'a uzanıyor — **ÇELİŞKİ beyanlı**, açıklama esas (KASA'nın
  Marad/Dilbat ilkesi: siteye özgü cümle > dönem etiketi).
- **ⓓ Negatif yıl:** Pleiades MÖ yılı TARİHÎ sayımdır (yıl 0 yok; ör. Early Dynastic
  "2950–2350 BC" ↔ `[-2950,-2350]`) ⇒ MÖ N ↔ astronomik `-(N−1)`. Her dönüşüm aşağıdaki
  tabloda ve her kaydın `not:`'unda AÇIKÇA. Örnek: MÖ 1600 ↔ `-1599` · MÖ 30 ↔ `-0029` ·
  MÖ 2950 ↔ `-2949`.
- **`kesinlik:"yuzyil"`** (skaler): `bit:` dönem ucudur; `kur:` onyıl kaynaklı olsa da tek skaler
  alanda KABA olan yazıldı (§4: "en kaba güvenli düzey"). Nesne biçimi `{f,t}` dönem uçları
  içindir, `kur:`/`bit:` için tanımlı DEĞİL — uydurmadım.
- **Biçim:** hedef dosyanın kendisi (`window.YERLESIMLER_NOKTA_ORTADOGU_0917`, `s:[]`/`d:[]`,
  `kaynak:`). `ic_not` şemada YOK ⇒ gerekçe `not:` alanında (BILINEN_ALANLAR'da var).
  `g:0, k:0` (kademesiz). `girdi.py`ye ve `index.html`e DOKUNULMADI.

### 1.1 Nokta tablosu — 24 nokta (A: 22 · B: 2)

| # | diff | ad | Pleiades | lat, lon | `kur:` (MÖ ↔ astr.) | `bit:` = son tasdik (MÖ/MS ↔ astr.) | ikinci tanık |
|---|---|---|---|---|---|---|---|
| 1 | A | Uruk (Varka) | 912986 | 31.32338, 45.63905 | yazılmadı (A/A'/D) | MS 750 ↔ `0750` | TGN 7016635 1,28 km ama DAKİKA-YUVARLAK (31.316667/45.65) ⇒ §9.4 TANIK SAYILMAZ · Pleiades iç CIGS↔OSM 0,08 km |
| 2 | A | Ur (Tell el-Mukayyer) | 912985 | 30.96132, 46.10542 | yazılmadı (A/A'/D) | MS 640 ↔ `0640` | TGN 7002485 Tall Muqayyir 0,08 km (deserted settlements) |
| 3 | A | Lagaş (Tell el-Hibâ) | 959120263 | 31.41934, 46.40968 | yazılmadı (A/A'/D) | MÖ 1600 ↔ `-1599` | TGN 7026090 Tall al Hibā 0,18 km (deserted settlements) |
| 4 | A | Kiş (Tell Uhaymir) | 894028 | 32.54609, 44.59316 | yazılmadı (A/A'/D) | MÖ 140 ↔ `-0139` | TGN 6003114 Tell Uhaimir 0,93 km (32.54/44.6 — iki ondalık, kısmen yuvarlak) · Pleiades iç OSM Uhaymir + OSM Ingharra + CIGS 0,67-1,81 km (Kiş İKİ höyüktür; reprPoint aralarında) |
| 5 | A | Nippur (Nuffar) | 912910 | 32.12676, 45.23056 | yazılmadı (A/A'/D) | MS 750 ↔ `0750` | TGN 6004270 Nippur 0,03 km (deserted settlements) |
| 6 | A | Eridu (Ebû Şehreyn) | 912845 | 30.81999, 45.99564 | yazılmadı (A/A'/D) | MS 499 ↔ `0499` | TGN 6001911 Tell Abu Shahrein 0,31 km (deserted settlements) |
| 7 | A | Umma (Tell Cûha) | 44626252 | 31.66796, 45.88679 | yazılmadı (A/A'/D) | MÖ 1000 ↔ `-0999` | TGN 6006206 4,30 km ama DAKİKA-YUVARLAK (31.6333/45.8667) ⇒ §9.4 TANIK SAYILMAZ · Pleiades iç CIGS↔OSM 0,31 km |
| 8 | A | Şuruppak (Tell Fâra) | 326150788 | 31.77752, 45.51047 | yazılmadı (A/A'/D) | MÖ 2000 ↔ `-1999` | TGN'de BULUNAMADI · Pleiades iç OSM↔CIGS (iki bağımsız kayıt) |
| 9 | A | Larsa (Tell es-Senkere) | 912897 | 31.28322, 45.85245 | yazılmadı (A/A'/D) | MS 300 ↔ `0300` | TGN 6003327 Şankarah 0,31 km (deserted settlements) |
| 10 | A | Girsu (Tello) | 912855 | 31.56039, 46.17764 | yazılmadı (A/A'/D) | MÖ 550 ↔ `-0549` | TGN 6003285 Tell Telloh 0,09 km (deserted settlements) |
| 11 | A | Bad-tibira (Tell el-Medîne) | 771224406 | 31.38326, 46.00412 | MÖ 2000 ↔ `-1999` | MÖ 1600 ↔ `-1599` | TGN 7032798 Tell Madineh 0,14 km (deserted settlements) |
| 12 | A | Zabalam (Tell İbzeyh) | 921099766 | 31.74339, 45.87693 | yazılmadı (A/A'/D) | MÖ 1000 ↔ `-0999` | TGN'de YOK · Pleiades iç iki OSM + CIGS (0,08-0,18 km) |
| 13 | A | Marad (Tell Vennet es-Sadûm) | 912901 | 32.08143, 44.78556 | MÖ 2700 ↔ `-2699` | MÖ 30 ↔ `-0029` | TGN'de YOK · Pleiades iç OSM↔CIGS 2,28 km (reprPoint ikisinin ORTASI; konum ±1,1 km belirsiz) |
| 14 | A | Kisurra (Tell Ebû Hatab) | 797093165 | 31.83817, 45.48081 | MÖ 2700 ↔ `-2699` | MÖ 1600 ↔ `-1599` | TGN'de YOK · Pleiades iç OSM↔CIGS (0,02-0,09 km) |
| 15 | A | Isin (İşân el-Bahriyyât) | 912868 | 31.88532, 45.26927 | yazılmadı (A/A'/D) | MÖ 330 ↔ `-0329` | TGN 7029608 'Al Bahriyat' 30,70 km SAPIK (ancient sites) ⇒ TANIK SAYILMAZ · Pleiades iç OSM↔CIGS 0,14 km |
| 16 | A | Nina (Tell Zurgul) | 912909 | 31.37742, 46.49509 | yazılmadı (A/A'/D) | MÖ 330 ↔ `-0329` | TGN'de YOK · Pleiades iç CIGS↔OSM 0,04 km |
| 17 | A | Dilbat (Tell ed-Duleym) | 893987 | 32.29580, 44.46689 | MÖ 2700 ↔ `-2699` | MS 640 ↔ `0640` | TGN 7032806 16,51 km SAPIK/YUVARLAK (32.15/44.5) ⇒ TANIK SAYILMAZ · Pleiades iç DARMC↔CIGS↔OSM 0,01-0,10 km |
| 18 | A | Kutha (Tell İbrâhim) | 893977 | 32.76071, 44.61139 | MÖ 2000 ↔ `-1999` | MS 640 ↔ `0640` | TGN 7032802 Tell Ibrahim 0,10 km (deserted settlements) |
| 19 | A | Sippar (Tell Ebû Habbe) | 894089 | 33.05974, 44.25424 | yazılmadı (A/A'/D) | MS 640 ↔ `0640` | TGN 6005491 Sippar 0,28 km (deserted settlements) |
| 20 | A | Tell el-Ubeyd | 339709658 | 30.97225, 46.03051 | yazılmadı (A/A'/D) | MÖ 2950 ↔ `-2949` | TGN 6005865 5,07 km ama DAKİKA-YUVARLAK (30.9667/46.0833) ⇒ TANIK SAYILMAZ · Pleiades iç OSM↔CIGS 0,01 km |
| 21 | A | Eşnunna (Tell Esmer) | 90720956 | 33.48448, 44.72814 | yazılmadı (A/A'/D) | MÖ 1600 ↔ `-1599` | TGN 6001920 22,77 km SAPIK/YUVARLAK (33.5333/44.9667) ⇒ TANIK SAYILMAZ · Pleiades iç OSM↔CIGS 0,09 km |
| 22 | A | Tutub (Hafâce) | 490043590 | 33.35571, 44.55601 | yazılmadı (A/A'/D) | MÖ 1600 ↔ `-1599` | TGN 7032790 Khafajah 0,21 km (deserted settlements) |
| 23 | B | Borsippa (Birs Nimrûd) | 893964 | 32.39240, 44.34340 | MÖ 2335 ↔ `-2334` | MS 1335 ↔ `1335` | TGN 7018037 Āthār an Namrūd 0,10 km (deserted settlements) |
| 24 | B | Susa (Şûş höyüğü) | 912936 | 32.18993, 48.25354 | yazılmadı (A/A'/D) | MS 1599 ↔ `1599` | TGN 7017509 Shūsh 7,59 km 'inhabited places' = MODERN KASABA ⇒ §9.4 TANIK SAYILMAZ · Pleiades iç DARE↔OSM↔CIGS 0,13-0,37 km |

### 1.2 ALINMAYANLAR — 2 nokta `ÖLÇÜLEMEDİ` + 4 koordinatsız (nokta uydurulmadı)
| ad | sebep |
|---|---|
| **Adab (Bismâye)** — Pleiades 787747618 | 🔴 **İKİNCİ TANIK YOK.** TGN 7002486 **12,48 km** ve DAKİKA-YUVARLAK (31.9833/45.75) ⇒ §9.4 sayılmaz. Pleiades'in iki konum kaydının **ikisi de CIGS** (aynı köken, 0,01 km) ⇒ bağımsız değil. KASA bu 10 "mevcut" adayın tanığını ölçmemişti (§1.4) — **yeni bulgu.** |
| **Tell el-Lahm (Durum?)** — 912953 | Tek konum kaydı (CIGS), TGN'de yok; kimliği de "probably" (KASA ile aynı hüküm). |
| Akşak — 156790694 | Pleiades kaydı VAR, `reprPoint` YOK, konum kaydı 0 — bu oturumda yeniden ölçüldü. |
| Keş · Dēr · Opis | KASA §1.1'in hükmü devralındı (Keş/Dēr Pleiades'te yok · Opis Pleiades↔TGN 92,7 km). Yeniden ÖLÇMEDİM. |

### 1.3 Yakın mükerrer — `ARAC-NORMAL-0903.norm` + 3 km, evren `girdi.yukle()` = 4300 nokta
- **3 km içinde atlas noktası: 0 / 26.** En yakınlar: Borsippa↔Hille 13,3 · Ur↔Nâsıriye 17,2 ·
  Kiş↔Hille 16,4 · Marad↔Dîvâniye 16,7 · Tutub↔Bağdat 18,2 · Susa↔Dizfûl 25,6 km.
- **Aday↔aday 3 km içinde: 0.**
- **Ad eşleşmesi 3, üçü de AYRI NESNE:** ① 🔴 **"Kiş (Kish)"** atlasta VAR = Basra körfezindeki
  **Kays adası** (26,526/53,979; `yer_id` olarak kronolojide anılıyor) — Sümer Kiş'ine **1.127 km.**
  Yeni kaydın tam adı "Kiş (Tell Uhaymir)" ⇒ tam-ad benzersiz; ama parantez dışı çekirdek ("Kiş")
  AYNI — adı çekirdekle eşleştiren bir araç ikisini karıştırır. ② "Medine" (Bad-tibira'nın modern
  adı Tell el-Medîne) = Hicaz · ③ "Şuşa" (Susa arama adı) = Karabağ. ⇒ **Mükerrer 0.**

### 1.4 Kutu
26 adayın 26'sı Sümer kutusunda (29,5-33,5K · 44-48,5D); **25'i çekirdekte** (30,5-33,5K · 44-47D),
çekirdek DIŞI tek nokta **Susa** (48,25D) — o da B diff'inde.

## §2 SINAMA — diff, ayrıştırma, `denetle.py`

```
git apply --check NOKTA-SUMER-1010-K2.diff      TEMİZ  (taban aa266e1f)
git apply --check A+B birlikte               TEMİZ ; B, A'nın ÜSTÜNE uygulanır
node --check (A uygulanmış geçici kopya)     OK  — 28 kayıt (6 eski + 22 yeni)
node --check (A+B)                           OK
girdi.yukle()                                4300 → 4322 (A) — BILINEN_ALANLAR uyarısı yok
denetle.py  TABAN (aa266e1f, yamasız)        çıkış 2
denetle.py  A uygulanmış                     çıkış 2
  TABAN ↔ A satır farkı                      YALNIZ 2 satır: "4300→4322 yerleşim" (sayım)
  Değişmez 1                                 ✓ 309 sahipsiz (beklenen 309) — İKİSİNDE AYNI
  çıkış 2'nin sebebi                         Değişmez 8 ÖLÇÜLEMEDİ: devletler_harita.js YOK
                                             (taze worktree'de beklenir, yamadan BAĞIMSIZ — tabanda da 2)
denetle.py  A+B uygulanmış                   çıkış 1 — İHLAL (öngörülen, B ayrı kalem bu yüzden)
  Değişmez 1                                 ✗ 311 sahipsiz (beklenen 309): +Borsippa +Susa
  Değişmez 1c                                ✗ BELGESİZ 6 (tavan 4): YENİ DELİK Borsippa · Susa
                                             (öteki 4 — Agadez · Darfur · Hadramut · Timbuktu — tabanda da var)
```
⚠️ **Negatif `kur:`/`bit:` ile `denetle.py` ÇÖKMEDİ** — ama `aa266e1f`in dersi burada da geçerli:
*çökmemek, çağrılmamak olabilir.* Bu sınama yalnız "bu evrende ve bu 22 kayıtla çökmedi"
der; negatif yolların DOĞRULUĞUNU `NEGATIF-YIL-OLCUM-1010` ölçüyor, ben ölçmedim.
📌 Ölçebildiğim kadarı: `denetle.py` `kur:`/`bit:`i Değişmez 1'de DİZGİ olarak karşılaştırıyor
(`kur > g` · `bit <= g`) ve `'-'` < `'1'` olduğu için negatif dizgi 1000+ günlerinden her zaman
"önce" sayılıyor ⇒ 1000+ penceresinde sonuç DOĞRU çıkıyor. **İki negatif tarih kendi
aralarında** dizgi olarak TERS sıralanır (`"-2699" > "-1599"`) — 1000+ penceresinde bu
karşılaştırma hiç yapılmadığı için bugün zararsız, MÖ penceresi açıldığında DEĞİL.

## §3 🔴 ANA BULGU — `s:`siz nokta, SAHNEDE OLMASA DA HARİTAYI DELER

**Soru:** `bit:`'i ufuktan (`UFUK[0]` = `1000-01-01`) önce olan, `s:`'siz bir nokta 1000-1923
haritasını etkiler mi? Askalân/Dvin emsali (`yerlesimler.js:2370/2382`, "UFUK dışında ⇒ s:
YAZILMADI") "etkilemez" diyor gibi.
**Motorun kuralı (okundu):** sahnede olmayan petek (`kur > g` ya da `bit <= g`) devredilir
YALNIZ İKİ hâlde (`devir_kumesi`, `uret_petek.py:~4995`): ⓐ o gün **sahibi yazılıysa** ⓑ
sahipsizse ama **kıyı-dışı sınırının ≥ %90'ı sahipli komşu peteklerle** sarılıysa
(`_kusatilmis`, `:4921-4990`, `KUSATMA_ESIK = 0.90`). Yoksa petek **sahipsiz = BOŞ** kalır
(kasıtlı boşluğu korumak için — Kuveyt kuralı).
**Askalân/Dvin niçin çalıştı:** tek, sahipli komşularla sarılı noktalar ⇒ ⓑ.
**Sümer niçin çalışmaz:** 22 nokta **birbirine komşu** — her birinin sınırının büyük kısmı
öteki sahipsiz Sümer peteklerine bakıyor ⇒ hiçbiri ⓑ'yi sağlamıyor.

**Ölçüm — YAKLAŞIK simülasyon** (`denetim/NOKTA-SUMER-1010-K2-DELIK-SIM.py`; motor DEĞİL: düz
Voronoi, nehir/sırt yaslaması yok, kara = `motor_kara.geojson`, bölge 26-38K · 38-54D, 145
atlas noktası + 22 yeni; `_kusatilmis`in ölçütü birebir):
```
kesit        devredilen   BOŞ KALAN   ~alan
1000-06-15   0            22          ~62.400 km²
1300-06-15   0            22          ~62.400 km²
1600-06-15   0            22          ~62.400 km²
1900-06-15   0            22          ~62.400 km²
en yüksek kuşatılma payı: Sippar 0,72 · Dilbat 0,70 · Nina 0,70 (eşik 0,90)
en büyük delik: Eridu ~23.000 km² (çöl kenarı) · Eşnunna ~8.500 · Kutha ~3.700
```
⇒ **Diff A bugünkü hâliyle inerse yayındaki haritada 1000-1923 boyunca güney Irak'ta ~62 bin
km²'lik boşluk açılır.** Rakam yaklaşıktır (motor yaslaması yok); **yön ve sınıf kesindir**:
0,90 eşiğine en yakın hücre 0,72'de.
🔴 **Hiçbir kapı bunu görmez:** Değişmez 1 `bit:`'i geçmiş noktaya sahipsizlik SORMAZ
(ölçüldü: 309 → 309). Delik ancak koşunun ÇIKTISINDA görünür — `CLAUDE.md §3.5`in
"denetimin görmediği sınıflar" ailesi, ve `aa266e1f`in "çağrılmayan kod" dersinin harita yüzü.
📌 Aynı tuzak **künye/dolgu tarafında da** var: MIMARI §5.1'in KD-köşe `tur:"bolge"` dolgusu
da sahipsiz — ama o 1000-1923'te SAHNEDE (bit: yok) ve kasıtlı boşluk, yani motor onu doğru
olarak boş bırakır; bu bulgu yalnız "sahnede olmayan" noktalar içindir.

**Çare seçenekleri (karar koordinatörün):**
1. **Motor yaması (FAZ 3, tuz):** `bit:`/`kur:` ile sahnede olmayan nokta, sahipsiz olsa bile
   devredilsin — "yok" ile "kasıtlı boş" farklı şeyler; kasıtlı boşluk `bos:`/`kasitli_bosluk`
   ile zaten beyanlı. ⚠️ Kuveyt (`kur:1716`, 1716 öncesi kasıtlı boş) bu ayrımla ÇATIŞIR —
   yama `bos:` taşıyanı hariç tutmalı. Ölçmeden yazmadım.
2. **Noktalar MÖ penceresiyle birlikte iner** (C4 / NEGATIF-YIL-B ile aynı faz).
3. `s:` dilimleri ile — **ANLAMSIZ**: var olmayan bir yerin sahibi olmaz (§9.7).

## §4 ⑤ KASA'NIN ÖNGÖRÜSÜYLE KARŞILAŞTIRMA

| KASA'nın iddiası | benim ölçümüm | hüküm |
|---|---|---|
| 12 TGN uzaklığı (0,09 … 92,7 km) | 12'si de birebir aynı (fark 0,00 km) | ✅ TUTTU |
| "TGN'de YOK 5 sitede Pleiades iç kayıtlar ≤1,1 km tutuyor" | Marad'ın iki iç kaydı birbirine **2,28 km** — KASA'nın 1,14'ü **reprPoint'e** uzaklıktı, kayıtlar arası değil | ⚠️ KISMEN — Marad konumu ±1,1 km belirsiz, beyanlı |
| Akşak koordinatsız | Pleiades 156790694: reprPoint YOK, konum 0 | ✅ TUTTU (yeniden ölçüldü) |
| Keş Pleiades'te yok | yeniden ölçmedim | — devralındı |
| "Eridu çevresi" → Tell el-Ubeyd | aynı; TGN 5,07 km yuvarlak ⇒ tanık Pleiades iç (0,01 km) | ✅ TUTTU — somut siteye çevrildi, alındı |
| Susa: TGN modern Şuş kasabası (7,59 km) | aynı; `inhabited places` ⇒ §9.4 sayılmaz; iç kayıtlar 0,13-0,37 km | ✅ TUTTU |
| `kur:` önerileri (KASA-SUMER-KUR) | aynen kullanıldı | — |
| 10 "mevcut" adayın tanığı "SUMER-KUNYE'nin işi" | **ölçüldü:** 6'sı TGN ✓ (Ur · Lagaş · Kiş · Nippur · Eridu · Larsa), Uruk·Umma TGN yuvarlak → iç kayıt, Şuruppak TGN'de yok → iç kayıt, **Adab TANIKSIZ** | 🆕 Adab ALINMADI |
| (öngörülmedi) | Kiş ad çakışması (Kays adası "Kiş (Kish)") | 🆕 |
| (öngörülmedi) | Eridu'nun son tasdiki MS 499 (OSM kaydının 2.-5. yy etiketleri) — "erken ıssızlaşma" beklentisiyle ÇELİŞİYOR | 🆕 beyanlı, ikinci kaynak AÇILMADI |

## §5 ÖNGÖRÜ SINAVI (§0 sabit)
```
                                        öngörü          ölçüm
yazılabilecek nokta                     22 ± 2          24 (A 22 + B 2) — TUTTU (üst uç)
ikinci tanıksız (ÖLÇÜLEMEDİ)            2 ± 1           2 — TUTTU (ama biri öngörmediğim Adab;
                                                        Tell el-Lahm tuttu)
yakın mükerrer                          0-1             0 (+1 AD ÇAKIŞMASI, mükerrer değil) — TUTTU
bit: 1281'den önce                      20 ± 3          22 (hepsi 1000'den de önce) — TUTTU
s:'siz ve 1281 sonrasına uzanan         2 ± 1           2 (Borsippa · Susa) — TUTTU; aday olarak
                                                        Kutha'yı yazmıştım, YANLIŞ (Kutha MS 640)
denetle.py negatif yılla                çıkış 2 / ÇÖKME TUTMADI — çökmedi; çıkış 2'nin sebebi
                                                        yamadan bağımsız D8 (tabanda da 2)
(öngörülmedi)                           —               §3: 22 noktanın 22'si haritayı DELER
```
⇒ Öngörünün en büyük ıskası sayılarda değil, **sorduğum soruda:** "Değişmez 1'e takılır mı"
diye sordum; asıl risk Değişmez 1'in SORMADIĞI yerdeydi.

## §6 ③ İSTİYORUM

a) 🔴 **İniş fazı:** Diff A **FAZ 2'de İNMESİN** (§3). Önerim: motor yaması (seçenek 1)
   FAZ 3 partisine; noktalar o koşuyla birlikte. Ya da MÖ penceresiyle (seçenek 2).
b) **B diff'i (Borsippa · Susa):** son tasdikleri 1000 sonrası ⇒ `s:` gerekir. Borsippa'nın
   1335'i bir **AD** tasdikidir (Burs, İlhanlı dönemi) — yerleşim tasdiki olduğu ÖLÇÜLMEDİ.
   Susa'da antik höyük ↔ ortaçağ Sûs ↔ modern Şuş **üç nesne** (§6.2/§6.3 İKAME sorusu).
   Önerim: B ayrı kalem, kaynak turundan sonra.
c) **Adab:** bağımsız ikinci tanık bulunursa (akademik yayın koordinatı) eklenir; bulunmazsa
   ALINMAZ. Kutu etkisi: Adab Umma–Zabalam–Şuruppak kümesinin ortasında, p95'i oynatması
   beklenmez (ölçmedim).
d) **Kiş adı:** "Kiş (Tell Uhaymir)" bıraktım; çekirdek-ad eşleştiren araçlar için
   "Kiş höyüğü (Tell Uhaymir)" daha güvenli olabilir — senin kararın.
e) **Kiş `bit:` çelişkisi** (açıklama MÖ 140 ↔ ad tasdiki MS 640) ve **Eridu MS 499**:
   ikinci akademik kaynakla hükme bağlanmalı. 1000+ haritasına etkisi YOK (ikisi de 1000'den önce).

## §7 DOSYALAR
- `denetim/NOKTA-SUMER-1010-K2.md` — bu rapor
- `denetim/NOKTA-SUMER-1010-K2.diff` — A: 22 nokta, `data/yerlesimler_nokta_ortadogu_0917.js` (+96 −1)
- `denetim/NOKTA-SUMER-1010-K2-B.diff` — B: Borsippa + Susa, **A'nın ÜSTÜNE** uygulanır
- `denetim/NOKTA-SUMER-1010-K2-DELIK-SIM.py` + `-K2-DELIK-GIRDI.json` — §3 simülasyonu (tekrarlanabilir)
- Taban: `aa266e1f` · hedef blob `351648b7`

## §8 🔴 ÇİFT ATAMA — aynı iş, aynı adla, iki kıtada

Commit anında ölçüldü: `makine/emrelic-nokta` dalı **zaten vardı** ve üstünde başka bir
oturumun `a2d0dec1` commit'i duruyordu (10 Ekim 05:00:44, taban `1f080648`) — aynı ad
(`NOKTA-SUMER-1010`), aynı dosya adları (`denetim/NOKTA-SUMER-1010.md` · `.diff` · `-B10.diff`).
Bu oturumun bütün dosyaları **`-K2`** ekiyle ve **ayrı dalda** (`makine/emrelic-nokta-k2`):
öteki kıtanın işinin üstüne YAZILMADI. ⚠️ İki oturum tahtada da AYNI adı taşıyor
(`--kim "NOKTA-SUMER-1010"`) ⇒ tahta TAM EŞİTLİK arar, mesajlar karışabilir.

**İki ölçüm BAĞIMSIZ yapıldı ve şunlarda TUTUYOR:** 22 nokta (13+9 ↔ 22) · Adab ÖLÇÜLEMEDİ
(aynı gerekçe) · Tell el-Lahm · Akşak · Keş alınmadı · Borsippa + Susa ana diff'te YOK ·
koordinatlar Pleiades reprPoint · `kur:` KASA-KUR'dan · Marad iç kayıtları 2,28 km ·
`denetle.py` tabanla tek fark 4300→4322, Değişmez 1 309.

**AYRIŞANLAR — iki ayrı `bit:` kuralı** (hepsi MS 1000'den önce ⇒ 1000-1923 haritasına
etkisi YOK; MÖ penceresi açılınca önem kazanır, karar koordinatörün):
| site | K1 (`a2d0dec1`) | K2 (bu) | ayrışma sebebi |
|---|---|---|---|
| Girsu | `-1599` | `-0549` | K1 Yunan-Roma etiketini (archaic) SAYMIYOR, K2 sayıyor |
| Bad-tibira | `-0539` | `-1599` | K1 açıklamanın "Neo-Assyrian sources" cümlesini esas alıyor (etiket YOK) |
| Marad | `-0538` | `-0029` | K1 açıklama "Yeni Babil'e dek"; K2 hellenistic-republican ad tasdiki |
| Isin | `-0538` | `-0329` | K1 açıklama "until at least"; K2 classical ad tasdiki |
| Dilbat | MS 750 | MS 640 | K1 açıklama "down to the early Islamic Period" — **K2 bu cümleyi OKUMADI** |
| Kutha | `-0539` | MS 640 | Y-R etiketi |
| Ur | `0000` (MÖ 1) | MS 640 | Y-R etiketi |
| Larsa | `-0139` | MS 300 | Y-R etiketi |
⇒ Kural farkı tek cümle: **Yunan-Roma (Barrington) etiketi `bit:` için varlık kanıtı mı?**
K1 hayır (KASA-KUR §1.0 ile simetri: bir uçta sayılmayan öbüründe de sayılmaz), K2 evet
(Barrington bir yeri o dönemin kaynağında geçtiği için çizer). 📌 Simetri argümanı güçlü;
K2'nin `kur:`'da dışlayıp `bit:`'te sayması tutarsız görünebilir — gerekçem: alt sınır
için "kapsama başlangıcı ≠ yaş", üst sınır için "o dönemde anılıyor = o dönemde var".
Hangisinin doğru olduğu ÖLÇÜLMEDİ (Barrington'un dahil etme ölçütü okunmadı).

**🔴 K1'İN §4'Ü İLE ÇELİŞKİ — bu raporun §3'ü:** K1 *"ölü nokta Voronoi'de yine bir petek
alır ve `petek_epok` onu varlık devri ile komşulara paylaştırır"* diyor. **Motor kodu bunu
SÖYLEMİYOR:** devir YALNIZ sahibi yazılı ya da ≥%90 kuşatılmış petek için
(`devir_kumesi` · `_kusatilmis`); sahipsiz ve kuşatılmamış petek BOŞ kalır. Simülasyon: 22/22
boş. K1'in "koşu süresi ve Irak geometrisi değişir" uyarısı doğru yönde ama **eksik** —
değişen geometri değil, **yayındaki haritada ~62 bin km²'lik boşluk.**

**K1'de olup K2'de OLMAYAN** (koordinatör ikisini birlikte okumalı):
`data/paket_23.js` yeniden paketleme şartı · `gun.capraz_kapi` sınaması (24/24) ve 3
yanlış-alarm uyarısı (`not:`'teki "MÖ n" ↔ MS `bit:`) · `d_katman.js:593` yalnız `kur:`
süzüyor, `bit:`i süzmüyor.
