# HAYALET-KUNYE-1008-K — K grubu: 1281'e hizalanmış künyeler

**Oturum:** HAYALET-KUNYE-1008 (UMIT) · 9 Ekim 2026 · devam görevi
**Temel:** `origin/makine/umit` `7f63bcd9` · ağaç `C:\atlas-hayalet` (kaldırıldı)
**Cins:** ölçüm + UYGULANMAMIŞ diff + künye önerisi. Commit/push yok.
**Gün aralığı (diff'in dokunduğu):** 1281-01-01 → 1897-02-28

```
denetim/HAYALET-KUNYE-1008-K.md                bu rapor
denetim/HAYALET-KUNYE-1008-K-KOORD.diff        8 künye f + 17 nokta, 6 dosya
denetim/HAYALET-KUNYE-1008-K-KUNYE-ONERI.json  diff'e girmeyen 5 künye: bulunan · bulunamayan · seçenek
```
`git apply --check` temiz: tek başına VE ilk teslimin ANA diff'inden sonra. `node --check` 6 dosya ✓.
⚠️ **CR 94 satır — hepsi `data/devletler.js` hunk'ında ve KASITLI**: dosya KARIŞIK satır sonludur
(10.495 CRLF + 217 yalnız LF, `-text`). İlk denemem dosyayı normalleştirip **464 satır** değiştirdi;
geri alındı, dosya ham işlendi, eklenen 8 yorum satırı komşularıyla aynı CRLF. Öteki 5 dosya CR 0.

---

## ① Ölçüm — sınıf neden görünmüyordu
13 künyenin **13'ünün de** `f:"1281-01-01"`. Künye penceresi atlas ufkuna hizalanınca dönem
künyeden önce başlayamaz ⇒ **4d bu sınıfı HİÇ göremez** (künye başı = dönem başı). Hayalet
künyenin içinde, denetimin dışında. Künyelerin kendi metni bunu söylüyordu:
```
lan-xang   kronoloji  { t:"1353-01-01", tur:"kurulus", b:"Fa Ngum … Lan Xang'ı kurdu" }   ← f 1281
magindanao kronoloji  { t:"1515-01-01", tur:"kurulus" … }                                   ← f 1281
powhatan   kaynak     «1500'lerin sonunda … birleştirdi … atlas ufku 1281'e hizalandı»
dagbon · bunyoro · merina-oncesi  { t:"1281-01-01", tur:"kurulus" } — KAYNAKSIZ kuruluş maddesi
```
Nokta sayımı (`girdi.yukle`, 4300 yerleşim): Z3'ün «~25»i ölçüldü — 13 künye **29 nokta**
(lan-xang 5 · magindanao 1 · palembang 2 · gova 2 · gond 2 [Nagpûr 1702'den, hayalet DEĞİL] ·
bunyoro 2 · dagbon 1 · merina-oncesi 3 · creek 3 [Etowah dâhil — Z3 2 saymış] · powhatan 1 ·
choctaw 2 [Moundville 1450'den] · pagaruyung 4 · matamba 1).

## ② Sınıflandırma — 13 künye
| künye | sınıf | yeni f | dayanak | 1281→f |
|---|---|---|---|---|
| lan-xang | K ③ | 1353 · yil | künyenin KENDİ kuruluş maddesi + Britannica (Z3) | `__BOSLUK__` (5) |
| magindanao | K ③ öncüllü | 1515 · onyil | **TDV** `filipinler` «kurmuştur (tah. 1515)» | **`filipin-racaliklari`** — TDV aynı cümle «datularla (yerli kabile reisleri)»; Butuan/Zamboanga emsali, künye 1001→1571 tutuyor |
| dagbon | K ③ | **1401** · yuzyil | **TDV** `gana` «XV. yüzyılda … Dagomba … kurduğu devletler» | `__BOSLUK__` |
| bunyoro | K ③ | 1501 · yuzyil | Britannica (Z3) XVI. yy; TDV `uganda` tarih YOK | `__BOSLUK__` (2) |
| gond | K ③ | 1301 · yuzyil | Britannica (Z3) XIV. yy | `__BOSLUK__` (Raipur/Ratanpur adasına bitişik) |
| merina-oncesi | K ③ | 1401 · yuzyil | Britannica (Z3) XV. yy | `__BOSLUK__` (2) |
| ↳ Toamasina | **D204 yer yanlış** | — | künye `betsimisaraka` başkenti «Toamasina» (1712→1817), kaynağı «Merina 1817'de Toamasina'yı aldı»; TDV `madagaskar` 1750 «Betsinisaraka kabileleri birliğinin reisiyle» antlaşma | `__BOSLUK__` 1281→1712 · **betsimisaraka** 1712→1817 · merina 1817→ |
| creek | K ③ | 1701 · yuzyil | Britannica (Z3) «During the 18th century … organized» | `__BOSLUK__` (2) + Etowah 1550→1701 |
| powhatan | K ③ | 1501 · yuzyil | künyenin KENDİ kaynağı «1500'lerin sonunda» | `__BOSLUK__` |
| palembang | K ③ çok-öncüllü | — | TDV var, iki künye ucu çelişiyor | **DOKUNULMADI** (JSON) |
| gova | **② aynı devlet** | — | TDV 1603 hükümdar ihtidası ⇒ krallık önceden var | **DOKUNULMADI** — kuruluş bulunamadı |
| pagaruyung · choctaw · matamba | ölçülemedi | — | bulunamadı | **DOKUNULMADI** |

**Yüzyıl yazımı:** «XV. yüzyıl» → `1401-01-01` + `kesinlik:{f:"yuzyil"}`. Emsal: Bîcâr
`kur:"1801-01-01", kesinlik:"yuzyil"` (paket_13). Bu bir **alt sınırdır**; dayanağı künyenin
KENDİSİNİ tarihleyen cümle (VERI-YAPISI «kesinlik'in sınırı»). Powhatan'da kaynak «sonunda»
der — 1501 yüzyılın başı, gerçek kuruluş daha geç; hayalet KALAN pay beyan edildi, kapatılmadı
(«1591» yazmak cümlenin desteklemediği kesinlik olurdu).
**`__BOSLUK__` gerekçesi:** VERI-YAPISI «KULLAN: kaynak kimsenindi demiyor VE komşuya itmek yanlış».
Hiçbir nokta için öncül künye YOK (taranan: muang-sua · kitara · mamprusi · kalacuri · demak →
yok); kısaltma tek başına D1'de en yakın komşuya iterdi (Yendi → Salaga `gonja` 114 km, 1550'den
önce künyesi bile yok; Werowocomoco → Jamestown 26 km). Raipur notu emsal: «künyesi olmayan yerel
devletlerdir, 'kimsenin değil' DEĞİL».

## ③ Kaynak çelişkileri (taraf TDV)
- **Dagbon:** TDV `gana` XV. yy ↔ Britannica (Z3) XIV. yy ⇒ **1401** (Z3 1301 önermişti).
- **Gowa ihtidası:** TDV `endonezya` 1603 ↔ Britannica 1605.
- **Srivijaya:** TDV «XIV. yüzyıla kadar» ↔ künye `srivijaya` t:1275.
- **Majapahit:** TDV «1478'de yıkılışı» ↔ künye `majapahit` t:1527.
- ⚠️ Britannica UMIT'ten **403** (place/·print/ ikisi de). Z3'ün Britannica alıntıları burada
  YENİDEN OKUNAMADI; diff yorumlarında «(Z3; UMIT'te 403)» diye işaretli. EB1911 (Wikisource tarama
  metni) Unyoro/Choctaws/Madagascar sayfalarında kuruluş tarihi YOK; Laos/Dagomba/Matamba/Menangkabau
  maddeleri EB1911'de yok.

## ④ `denetle.py` önce / sonra (bu ağaç, ANA diff UYGULANMAMIŞ)
**Öngörü önceden yazıldı** (`k_ongoru.txt`) ve karşılaştırıldı:
| | taban | sonra | öngörü | tuttu mu |
|---|---|---|---|---|
| **çıkış** | **2** (D8) | **2** | 2 | ✓ |
| D1 sahipsiz | 309 | 309 | 309 | ✓ |
| D4 · 4c · 4d · 4s | 0 · 127 · 324 · 5 | **aynı** | aynı | ✓ |
| 2s açık | 185 | 185 | 185 | ✓ |
| 2s kırılma · kapsam dışı | 1722 · 791 | 1723 · 792 | — | — |
| 2s yıl-temsilî | 165 | **165** | +8..12 | ✗ **çürüdü** |
| D7 enklav | 733 | **733** | +4..8 | ✗ **çürüdü** |
| `__BOSLUK__` pencere | 79 | 95 | — | **+16** = 15 nokta + Toamasina (Kotabato öncül künyeye gitti) — iki yönde ADIYLA listelendi, giden 0 |

**Çürüyen iki öngörü ÖLÇÜLDÜ:** D7 — yeni boşluk adaları `cografi-tecrit` (4673→4688, +15) ve
`kucuk-devlet` (308→310, +2) muafiyetine düştü, sayaca girmedi. 2s — `__BOSLUK__→X` geçişi
yabancı kırılma sayılmıyor; yalnız +1 kırılma (kapsam dışı). Asya/GD Asya kuyruğunda +3/+1 kırılma
(iş kuyruğu, borç değil).
⇒ **Tavan hareketi YOK** (4c ASAN 127 · D1 309 · 4d 324 aynı) — §3.4②'nin aynı-commit şartı bu
diff için boştur. ⚠️ İlk teslimin tavan istekleri (ASAN 121 · SARAN 2 · 2sk · D7) AYRI ve geçerli.

## ⑤ Bulunamadı / ölçülemedi
```
🔴 bulunamadı  pagaruyung · choctaw · matamba kuruluşu (Z3 ile aynı sonuç; TDV 302, EB1911 maddesi yok/tarihsiz)
🔴 bulunamadı  Gowa KRALLIĞININ kuruluşu · Palembang 1478-1659 sahibi · Lampung 1527 öncesi sahibi
⚪ ölçülemedi  Britannica (UMIT 403) — Z3 alıntıları yeniden okunamadı
⚪ ölçmedim    Moundville `moundville`→`choctaw` 1450 geçişi (choctaw kuruluşu bilinmeden sınanamaz)
⚪ ölçmedim    durum_tablosu.py «Kasıtlı boşluk» satırı (§1.5: 77 pencere; benim `s:`+`isg:` sayımım taban 79 — 2 fark AÇIK, kapsam farkı olabilir, ÖLÇÜLMEDİ)
```

## ⑥ İstenen
1. **K-KOORD.diff** — tavan oynatmıyor, tek başına inebilir; ilk teslimin ANA diff'iyle sırası serbest.
2. `srivijaya` t:1275 ve `majapahit` t:1527 künye uçları TDV'ye karşı ayrı kalem (Palembang'ın ön şartı).
3. `gova-makassar` ADI «Krallığı / Sultanlığı» — f değil, ad (② sınıfı).
4. pagaruyung · choctaw · matamba · Gowa kuruluşu — akademik kaynak araştırması (Z3'ün «bulunamadı»sı burada da tekrarlandı, mükerrer arama YAPILMASIN).
