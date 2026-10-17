# KUNYE-ISBITARIYYE-DAVIYYE-1010 — iki tarikat künyesi (Hospitalier · Templier, Levant)

**Oturum:** KUNYE-ISBITARIYYE-DAVIYYE-1010 (EMRELIC, Opus) · **Taban:** `origin/main` `aacd6dfe`
(worktree `C:\atlas-isbit1010`, dal `kunye-isbitariyye-daviyye-1010`) · önceki: `NOKTA-LEVANT-KIYI-1010` (a)
🔴 `data/` DONUK (KOŞU 22) ⇒ **veri yazılmadı**, künyeler ÖNERİDİR. Yeni hicrî kural (`CLAUDE.md §4`, `aacd6dfe`) uygulandı.
**Kaynak:** TDV `daviyye-ve-isbitariyye` (Ramazan Şeşen, 1994; HTTP 200, 17.527 kar.) birincil · TDV `tartus` ikincil.

---

## SONUÇ
| | `isbitariyye` | `daviyye` |
|---|---|---|
| `f` | **1136-01-01** · yıl (mîlâdî) — ilk TARİHLİ toprak: Beytülcibrîn | **1152-04-08** 🟡 · hicrî 547'nin ilk günü — ilk TARİHLİ toprak: Tartûs |
| `t` | **1285-05-25** · GÜN — Merkab | **1302-08-26** 🟡 · iki TDV maddesinin kesişimi — Ruâd |
| `harita` | **`sovalye`** — `rodos-sovalyeleri` ile AYNI anahtar (TDV aynı tarikat diyor) ⇒ **yeni BOYALAR girdisi GEREKMEZ** | **YENİ anahtar** (`daviyye` öneri) ⇒ BOYALAR'a girdi ŞART |
| `tur` / `bolge` | `devlet` / `suriye-filistin` | `devlet` / `suriye-filistin` |

`tur:"devlet"` emsale dayanıyor: atlastaki iki tarikat künyesi (`rodos-sovalyeleri`, `teuton-sovalyeleri`) de `tur:"devlet"`.
Şemada `tarikat` türü yok ve bu iş için gerekmiyor.
**İlke (iki künyede aynı):** `f:` tarikatın KURULUŞU değil, **TDV'de tarihli İLK TOPRAK hâkimiyetidir.** Emsal yine
`rodos-sovalyeleri`: o künyenin `f:`si Rodos'un alınışı (1310). Tarikatın kuruluşu değil, ozette 1522-1530 "topraksız".
Kuruluş günleri kronoloji maddesi olarak durur.

---

## 0. ÖNGÖRÜ — ölçümden ÖNCE (TDV maddesinin tamamı ve künye şeması okunmadan) · KARNE
```
isbitariyye f 1136-01-01 (Beytülcibrîn, mîlâdî yıl) aday · kuruluş günü bulunamadı · t 1285-05-25 · harita "sovalye" (rodos ile aynı)
daviyye     f 1118/1119 kuruluş (yıl) · t 1291 Akkâ sonrası ↔ Ruâd 1302 ÇELİŞKİ ADAYI · harita YENİ
Risk: tur alanında "tarikat" yok ⇒ şema sorusu çıkar.
```
| Öngörü | Ölçüm |
|---|---|
| isbitariyye f 1136 · t 1285-05-25 · harita `sovalye` | ✓ üçü de tuttu |
| daviyye f kuruluş 1118/1119 | ✗ kuruluş TDV'de «1119 yılının **sonunda**», ama **ilkeyi değiştirdim**: f = ilk toprak (rodos emsali) ⇒ 1152 |
| t: 1291 ↔ Ruâd 1302 çelişki adayı | ✓ çıktı. Ayrıca TDV kendi içinde Ruâd'ı alan sultanı karıştırıyor (§2.3) |
| şema sorusu çıkar | ✗ çıkmadı: emsal `tur:"devlet"` |
| — (öngörülmedi) | 🔴 atlasın `kronoloji_rodos_sovalyeleri.js:72` maddesi TDV ile çelişiyor (§3) |

---

## 1. `isbitariyye` — ÖNERİ
```js
{ id:"isbitariyye", ad:"İsbitâriyye (Hospitalier / Saint Jean Şövalyeleri, Levant)", tur:"devlet", bolge:"suriye-filistin",
  f:"1136-01-01", t:"1285-05-25", baskent:"Hısnülekrâd (1144-1271) → Merkab (1271-1285)", harita:"sovalye",
  kesinlik:{ f:"yil", t:"gun" },
  ic_not_f:"TDV daviyye-ve-isbitariyye: «İsbitâriyye, 1136’da Kral V. Foulque’un Beytülcibrîn’i kendilerine bırakması ile askerî alanda önemli rol oynamaya başladılar» — mîlâdî YIL ⇒ YYYY-01-01 (§4 hicrî kuralı uygulanmaz, kaynak mîlâdî). f = İLK TARİHLİ TOPRAK, tarikatın kuruluşu DEĞİL (kuruluş: «XI. yüzyılın sonlarına doğru … Kudüs’te», yılsız). Emsal: rodos-sovalyeleri f = Rodos'un alınışı.",
  ic_not_t:"TDV daviyye-ve-isbitariyye: «Kalavun’un 25 Mayıs 1285’te İsbitâriyye’ye ait son kale olan Merkab’ı almasıyla bu şövalyelerin Ortadoğu’daki varlıkları sona erdi ve karargâhlarını Kıbrıs’ın Limasol şehrine naklettiler.» ⚠️ Atlasın kronoloji_rodos_sovalyeleri.js:72 maddesi (Riley-Smith) Levant'tan çıkışı Akkâ 1291-05-18'e koyuyor — ÇELİŞKİ değil SINIF farkı olabilir: Akkâ kudus-kralligi şehriydi, tarikatın oradaki varlığı karargâh/mülk, toprak hâkimiyeti değil. Künye TOPRAK hâkimiyetini anlatır ⇒ son kale. Bkz. KUNYE-ISBITARIYYE-DAVIYYE-1010 §3.",
  ozet:"Kudüs'te hacılara hizmet için kurulan hastane tarikatının şövalye tarikatına dönüşmüş hâli; Beytülcibrîn (1136), Hısnülekrâd (1144) ve Merkab kaleleriyle Haçlı Levant'ında kendi toprağını yöneten askerî güç oldu, 1285'te Kalavun'un Merkab'ı almasıyla Levant'taki toprak hâkimiyeti sona erdi. Kıbrıs'tan sonra Rodos'ta devlet kurdu: [[rodos-sovalyeleri]] (1310). 1285-1310 arası topraksız, haritada karşılığı yok.",
  kaynak:"TDV: daviyye-ve-isbitariyye (Ramazan Şeşen)",
  kronoloji:[
    { t:"1136-01-01", tur:"kurulus", b:"V. Foulque Beytülcibrîn'i İsbitâriyye'ye bıraktı; tarikat ilk kalesini aldı", kaynak:"TDV: daviyye-ve-isbitariyye", gun:"1136 (gün bilinmiyor)" },
    { t:"1144-01-01", tur:"toprak-kazanc", b:"Trablus Kontu II. Raymond Hısnülekrâd'ı İsbitâriyye'ye verdi", kaynak:"TDV: daviyye-ve-isbitariyye «1144’te Trablus Kontu II. Raymond’un Hısnülekrâd’ı vermesiyle de gerçek anlamda bir güç haline geldiler»", taraflar:"['isbitariyye', 'trablus-kontlugu']", gun:"1144 (gün bilinmiyor)" },
    { t:"1187-07-04", tur:"toprak-kayip", b:"Hıttîn sonrası Selâhaddin Kevkeb, Beytülcibrîn ve Sahyûn'u aldı", kaynak:"TDV: daviyye-ve-isbitariyye", ic_not_t:"🟡 gün = Hıttîn: TDV hittin-savasi «25 Rebîülâhir (4 Temmuz) Cumartesi sabahı …» (savaş günü). TDV kalelerin alınışını 'Hittîn Savaşı’ndan sonra' der, kale günleri YOK — bu gün kaynağın izin verdiği EN ERKEN gündür (ALT SINIR)" },
    { t:"1265-01-01", tur:"toprak-kayip", b:"Baybars Arsûf'u aldı", kaynak:"TDV: daviyye-ve-isbitariyye", taraflar:"['isbitariyye', 'memluk']" },
    { t:"1268-01-01", tur:"toprak-kayip", b:"Baybars Kevkeb'i aldı", kaynak:"TDV: daviyye-ve-isbitariyye", taraflar:"['isbitariyye', 'memluk']" },
    { t:"1271-01-01", tur:"toprak-kayip", b:"Baybars Hısnülekrâd ile Akkâr'ı aldı", kaynak:"TDV: daviyye-ve-isbitariyye", taraflar:"['isbitariyye', 'memluk']" },
    { t:"1285-05-25", tur:"son", b:"Kalavun son kale Merkab'ı aldı; İsbitâriyye'nin Levant'taki toprak hâkimiyeti sona erdi", kaynak:"TDV: daviyye-ve-isbitariyye", taraflar:"['isbitariyye', 'memluk']", gun:"25 Mayıs 1285" }
  ] },
```
- **Yıllar mîlâdî:** TDV bu maddede 1136 · 1144 · 1265 · 1268 · 1271 yıllarını mîlâdî veriyor, hicrî karşılığı yok ⇒
  `YYYY-01-01` §4'e uygun. (Hicrî verilen tek yer 552/1157; o kelime-ilk-kullanım cümlesi, toprak hükmü değil.)
- **Kevkeb 1187 ↔ 1268 ayrı olaylar:** Selâhaddin 1187'de aldı; Haçlılar sonra geri aldı («İsbitâriyye ise Arsûf ve
  Kevkeb kalelerine hâkim olarak»); 1268'de Baybars aldı. Çelişki değil, el değiştirme.
- **`baskent`:** TDV'de "merkez" yok. Hısnülekrâd ve Merkab, maddenin adıyla andığı kaleler ve tarih sırası. 🟡 İstersen
  `baskent` yazılmaz.
- **`harita:"sovalye"` niçin:** TDV aynı maddede: «… Hospitalier'i bir şövalye tarikatına dönüştürmüş ve bu tarihten sonra
  tarikat daha çok Saint Jean şövalyeleri (**daha sonra Rodos şövalyeleri, Malta şövalyeleri**) adıyla anılmıştır.» ⇒
  AYNI polity, ayrı künye (§1-A gereği `rodos-sovalyeleri` geriye uzatılmadı). Antakya'nın kolunun antakya ile aynı
  boya anahtarını alması gibi (onaylı emsal). Arada 1285-1310 topraksız dilim var; iki künye ÇAKIŞMIYOR.
  `renkler.py:934` `"sovalye": ("St. Jean Şövalyeleri", "#3c424b")` — mevcut.

## 2. `daviyye` — ÖNERİ
```js
{ id:"daviyye", ad:"Dâviyye (Templier / Tapınak Şövalyeleri, Levant)", tur:"devlet", bolge:"suriye-filistin",
  f:"1152-04-08", t:"1302-08-26", baskent:"Akkâ (TDV: «asıl merkezleri Akkâ»)", harita:"daviyye",
  kesinlik:{ f:"yil", t:"yil" },
  ic_not_f:"İLK TARİHLİ TOPRAK (kuruluş DEĞİL). TDV tartus: «Atabeg Nûreddin Mahmud Zengî 547 (1152) yılında Tartûs üzerine yürüdü ve şehri ele geçirdi. Ancak Kudüs Kralı III. Baudouin kısa bir süre sonra şehri zaptedip Templier (Dâviyye) şövalyelerine teslim etti» — teslim Nûreddin'in 547 fethinden SONRA ⇒ hicrî 547 = 1152-04-08 … 1153-03-27; yazılan gün 547'nin İLK mîlâdî günü = kaynağın izin verdiği EN ERKEN gün (§4 hicrî kuralı). Gerçek teslim günü bulunamadı. ⚠️ Gazze/Safed/Bağrâs TDV'de Dâviyye kalesi olarak geçer ama YILSIZ ⇒ daha erken bir toprak olabilir; f geç yanlı olabilir, BEYAN. Kuruluş: «1119 yılının sonunda … Kudüs’te kurulmuş ve 1128’de toplanan Troyes Konseyi’nde resmen bir tarikat olarak tanınmıştır» — kronoloji maddesi.",
  ic_not_t:"Levant'taki SON toprak Ruâd adası. İki TDV cümlesi: daviyye-ve-isbitariyye «el-Melikü’l-Eşref Halîl 1302 yılında Tartûs karşısındaki Ruâd adasını da Dâviyye’den aldı» (mîlâdî 1302) · tartus «Muhammed b. Kalavun 702’de (1302-1303) şehri şövalyelerden geri almayı başardı» (hicrî 702 = 1302-08-26 … 1303-08-15). KESİŞİM 1302-08-26 … 1302-12-31 ⇒ en erken izinli gün 1302-08-26. ⚠️ İki madde sultanı farklı anıyor: Halîl b. Kalavun 1293'te öldü ⇒ 1302 cümlesindeki 'Halîl' adı TDV içi tutarsızlık (D211⑥, yıl iki maddede tutuyor, ad tutmuyor). Kara toprağı (Tartûs, Aslîs) 1291'de Akkâ'dan (18 Mayıs) SONRA boşaltıldı — kronoloji maddesi.",
  ozet:"1119 sonunda Kudüs'te kurulan, 1128'de Troyes Konseyi'nde tanınan şövalye tarikatı; Tartûs, Bağrâs, Gazze ve Safed kaleleriyle Haçlı Levant'ında kendi toprağını tuttu, merkezi Akkâ'nın 1291'de düşmesinden sonra Tartûs ve Aslîs'i boşalttı, Levant'taki son toprağı Ruâd adasını 1302'de kaybetti. Tarikat 1307-1312'de lağvedildi, mülkleri [[rodos-sovalyeleri]]ne devredildi.",
  kaynak:"TDV: daviyye-ve-isbitariyye (Ramazan Şeşen); tartus",
  kronoloji:[
    { t:"1119-01-01", tur:"kurulus", b:"Hugues de Payns Templier tarikatını Kudüs'te kurdu", kaynak:"TDV: daviyye-ve-isbitariyye «1119 yılının sonunda»", gun:"1119 sonu (gün bilinmiyor)", ic_not_t:"🟡 YYYY-01-01 biçim; kaynak 'yılın SONU' der ⇒ yazılan gün kaynağın tarif ettiği dilimin DIŞINDA. Künye f'si bu madde DEĞİL (toprak yok); madde yalnız dizin. Koordinatör: maddeyi YIL bırak ya da hiç yazma" },
    { t:"1128-01-01", tur:"kurulus", b:"Troyes Konseyi Templier'yi resmen tarikat olarak tanıdı", kaynak:"TDV: daviyye-ve-isbitariyye" },
    { t:"1152-04-08", tur:"toprak-kazanc", b:"III. Baudouin Nûreddin'den geri aldığı Tartûs'u Templier'ye teslim etti", kaynak:"TDV: tartus", taraflar:"['daviyye', 'kudus-kralligi', 'zengi-halep']", gun:"547 (1152) sonrası — en erken izinli gün" },
    { t:"1187-07-04", tur:"toprak-kayip", b:"Hıttîn sonrası Selâhaddin Gazze, Dârum, Safed ve Bağrâs'ı aldı", kaynak:"TDV: daviyye-ve-isbitariyye", ic_not_t:"🟡 isbitariyye'deki Hıttîn satırıyla aynı: TDV hittin-savasi «25 Rebîülâhir (4 Temmuz)» — gün ALT SINIR" },
    { t:"1191-01-01", tur:"toprak-kazanc", b:"Arslan Yürekli Richard'dan Kıbrıs'ı satın aldı (ertesi yıl Guy de Lusignan'a devretti)", kaynak:"TDV: daviyye-ve-isbitariyye", ic_not:"🔴 1191-1192 Kıbrıs Dâviyye'nin — atlasın Kıbrıs noktalarının o yılki sahibi ÖLÇÜLMEDİ (Z6 kapsamı, ayrı kalem)" },
    { t:"1266-01-01", tur:"toprak-kayip", b:"Baybars Safed'i aldı", kaynak:"TDV: daviyye-ve-isbitariyye", taraflar:"['daviyye', 'memluk']" },
    { t:"1268-01-01", tur:"toprak-kayip", b:"Baybars Bağrâs'ı aldı", kaynak:"TDV: daviyye-ve-isbitariyye", taraflar:"['daviyye', 'memluk']" },
    { t:"1271-01-01", tur:"toprak-kayip", b:"Baybars Sâfitâ ile Sayda'yı aldı", kaynak:"TDV: daviyye-ve-isbitariyye", taraflar:"['daviyye', 'memluk']" },
    { t:"1291-05-18", tur:"toprak-kayip", b:"Akkâ'nın düşüşünden sonra Tartûs ve Aslîs kaleleri boşaltıldı, tarikat Kıbrıs'a çekildi", kaynak:"TDV: daviyye-ve-isbitariyye", taraflar:"['daviyye', 'memluk']", gun:"Akkâ'dan (18 Mayıs 1291) sonra — en erken izinli gün" },
    { t:"1302-08-26", tur:"son", b:"Ruâd adası Memlüklere geçti; Dâviyye'nin Levant'taki son toprağı", kaynak:"TDV: daviyye-ve-isbitariyye + tartus", taraflar:"['daviyye', 'memluk']", gun:"1302 (mîlâdî) ∩ 702 (hicrî) — en erken izinli gün" }
  ] },
```
### 2.1 `f` seçenekleri (koordinatörün)
| Seçenek | Gün | Dayanak | Not |
|---|---|---|---|
| **A — ilk tarihli toprak (önerim)** | 1152-04-08 | TDV tartus, hicrî 547 alt sınırı | rodos emsaliyle tutarlı; geç yanlı olabilir |
| B — resmî tanınma | 1128-01-01 | TDV «1128’de … Troyes Konseyi» (mîlâdî) | toprak yok ⇒ künye boş yıllar taşır |
| C — kuruluş | 1119 «sonu» | TDV | `1119-01-01` kaynağın "sonu" dediği dilimin DIŞINDA — hicrî kuralının mîlâdî akrabası; önermiyorum |

### 2.2 `t` seçenekleri
| Seçenek | Gün | Ne zaman doğru |
|---|---|---|
| **A — Ruâd (önerim)** | 1302-08-26 | Tartus'a `isg: 1300-1302 daviyye` yazılacaksa (NOKTA-LEVANT §3.4) ZORUNLU: yazılmazsa işgal künye penceresini aşar |
| B — kara toprağı | 1291-05-18 | Tartus `isg:` yazılmazsa ve Ruâd atlasta noktasızsa (ölçüldü: Ervad/Ruâd/Arwad noktası **YOK**) |

### 2.3 TDV iç tutarsızlığı — bildirildi, taraf seçilmedi (`D211⑥`)
`daviyye-ve-isbitariyye` Ruâd'ın alınışını «el-Melikü’l-Eşref **Halîl** 1302» diye yazıyor. `tartus` aynı geri alışı
«**Muhammed b. Kalavun** 702’de (1302-1303)» diye yazıyor. Halîl b. Kalavun 1293'te öldü (bu turda TDV'den ölçülmedi). YIL iki
maddede tutuyor, SULTAN tutmuyor. Künye `t`si yalnız yıla dayandığı için etkilenmiyor. `taraflar` `memluk` olduğundan
sultan adı veriye girmiyor.

## 3. 🔴 ATLAS İÇİ ÇELİŞKİ — `kronoloji_rodos_sovalyeleri.js:72` ↔ TDV
```
atlas  1291-05-18  «Akkâ düştü ve Hospitalier tarikatı Filistin'deki son üssünü kaybederek Kıbrıs'a çekildi»
                   kaynak: Riley-Smith, The Knights Hospitaller in the Levant c.1070-1309 (2012)
TDV    1285-05-25  «Merkab'ı almasıyla bu şövalyelerin Ortadoğu'daki varlıkları sona erdi ve karargâhlarını
                   Kıbrıs'ın Limasol şehrine naklettiler»
       ama AYNI TDV maddesi: «Akkâ 1229’dan sonra … özellikle Saint Jean şövalyelerinin Filistin’deki başlıca karargâhı haline geldi»
```
**Ayrıştırma:** "son KALE" (toprak hâkimiyeti, 1285) ile "son ÜS" (Akkâ'daki karargâh, 1291) ayrı sorular. TDV'nin kendi
1229 cümlesi tarikatın karargâhını Akkâ'ya koyuyor, yani TDV'nin "1285'te karargâh Limasol'a" cümlesi o maddenin kendi
1229 cümlesiyle de gerilim içinde. Riley-Smith okunmadı.
**Künye için sonuç:** künye TOPRAK anlatır, Akkâ `kudus-kralligi` şehriydi ⇒ `t:1285-05-25` iki kaynağı da ÇİĞNEMEZ.
**Kronoloji için:** `kronoloji_rodos_sovalyeleri.js:72` dosyası benim değil. Dokunmadım; madde "son ÜS" olarak doğru
okunabilir. ⇒ **Ayrı kalem, o dosyanın sahibine.**

## 4. BOYALAR / renk
- `isbitariyye` → `harita:"sovalye"` ⇒ **yeni girdi YOK.**
- `daviyye` → `BOYALAR` girdisi ŞART (yoksa `§8`: bölge boyanmaz, "Renksiz künye — HARİTA DELİĞİ" kovasına düşer). Renk
  önermedim: palet verinin fonksiyonudur (`§9`, `renk_olc.py`). Komşuları `trablus-kontlugu`, `kudus-kralligi`, `memluk`,
  `isbitariyye`(`sovalye` #3c424b).

## 5. Değişmez / denetim etkisi (ölçülmedi, öngörü — nokta+künye inince `denetle.py` asıl cevap)
- Nokta önerileri (NOKTA-LEVANT): Merkab `isbitariyye` 1281→1285-05-25 · Tartus `daviyye` 1281→1291-05-18 (+ isg 1300-1302)
  ⇒ ikisi de künye penceresinin İÇİNDE (4c/4d susar).
- Değişmez 2: 1285-05-25 için evrende madde YOK (önceki teslimde ölçüldü) ⇒ künyenin `son` satırı `devletler.js`
  kronolojisinde. Bu, `olaylar*.js` evreni DEĞİL. Ayrı madde (d) yine gerekli.

## Ne bulamadım
`isbitariyye` kuruluş yılı (TDV: «XI. yüzyılın sonlarına doğru») · Templier'ye Tartûs teslim günü · Gazze/Safed/Bağrâs
edinim yılları · Tartûs/Aslîs boşaltma günü · Ruâd'ın alınış günü · Riley-Smith'in 1291 cümlesinin tam metni.
