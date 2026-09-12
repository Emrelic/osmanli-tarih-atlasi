# KITA 3 — DALGA 2 KRONOLOJİSİ (`data/olaylar_ek8.js` TEK SAHİBİ)

| alan | değer |
|---|---|
| **AD** | KITA 3 — DALGA 2 KRONOLOJİSİ |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **SAHİP OLDUĞUN DOSYA** | **YENİ**: `data/olaylar_ek8.js` → `window.OLAYLAR_EK8` |
| **ClaudEmre** | hayır — işçisin, koordinatör 1.MURAT |

---

## 0. 🔴 AD ALANI KURALI — dosya adı yetmez (`§7`)

```
data/olaylar_ek8.js   →   window.OLAYLAR_EK8      ← BU İKİSİ AYRIŞMAYACAK
```
Mevcut bir `olaylar_ek*.js` dosyasına **YAZMA** — KITA 4 aynı anda
`olaylar.js · ek2 · ek5 · ek7`e yazıyor. Yeni dosya tam bu çakışmayı
kesmek için verildi.
⚠️ `index.html`e `<script>` satırı **SEN EKLEMEYECEKSİN** (o dosya
senin değil) — teslim raporunda *"index.html'e satır gerekiyor"* diye
**AÇIKÇA** bildir, 1.MURAT ekler. Bildirmezsen dosya **canlı olmaz ve
hiçbir denetim ötmez** (`D099`).

## 1. İŞİN — `denetim/PAKET-DALGA2-0911.json`, 22 aday

```
yazilabilir_gun_dahil                   18   → YAZ
yazilabilir_duzeltmeyle                  1   → düzelt, YAZ  (§2 aşağıda)
yazilabilir_kaynak_notuyla_supheli       3   → 🟡 yaz AMA şüpheyi metne yaz
bos_kalir                                1   → YAZMA, "bulunamadı" diye say
```
Ham ölçüm: `denetim/HAZIRLIK-DALGA2-0911.json` (11 künye, adaylarıyla).

## 2. 🔴 PAKET SENİ YANILTACAK İKİ YER — ikisi de ölçüldü

### ② `afgan-durrani` — paketin ÖNCÜLÜ YANLIŞ
Paket *"YENİ KAYIT, henüz devletler.js'te YOK"* diyor. **Yanlış:**
```
grep -c 'id:"afgan-durrani"' data/devletler.js   →  1   ZATEN VAR
künye penceresi: f:1747-10-01 · t:1823-01-01
önerilen madde günü (Zaman Şah cülûsu): 1793-05-20  ← pencerenin İÇİNDE
```
⇒ **Hiçbir şey bekleme, maddeyi HEMEN yaz.** (`D045`in tersi: altyapı
vardı, yok sanıldı.)

### ③ `harezm-halk-cumhuriyeti` · `buhara-halk-cumhuriyeti` — PENCERE GENİŞLİYOR
`HAZIRLIK-DALGA2` bir TDV olayını (Hârizm'in 1924 bölünmesi) *"pencerenin
DIŞINDA"* diye **yazmamış.** Ama KITA 1 bu gece `PAKET-T`yi indiriyor ve
o künyenin `t:`si **1923-10-29 → 1924-01-01** çekiliyor.
⇒ **KITA 1'in inişini tahtadan teyit et; indiyse o atlanan olayı da
değerlendir.** Aynı durum `buhara-halk-cumhuriyeti`nde de var.
*(Kesişen beş kimlik: buhara · harezm · tannu-tuva · tonga-kralligi ·
yeni-zelanda.)*

## 3. KAYNAK DİSİPLİNİ — `§4`, gevşetme

```
🔴 tannu-tuva  paketin KENDİ notu: "adayların çoğu Wikipedia kaynaklı,
   ikinci akademik kaynakla TEYİT EDİLMEDİ"
   ⇒ Vikipedi TEK DAYANAK DEĞİLDİR. Teyit edemezsen `bulunamadı` YAZ
     ve maddeyi YAZMA. Uydurmaktan kat kat değerlidir.
🔴 GÜN YAZ (§8). Ay hassasiyetli tarih ayın 1'ine genişler ve senkronu
   bozar. Gün yoksa YYYY-01-01 + gün belirsizliğini METNE yaz (D113).
🔴 YIL uydurma. "15. yüzyılın sonlarında" bir yıl DEĞİLDİR.
```

## 4. TESLİM — sayıyla
```
① 22 adayın kaçı yazıldı · kaçı hangi sebeple yazılmadı
② denetle.py Değişmez 2 / 2s ÖNCE / SONRA
③ index.html'e eklenecek satır (AÇIKÇA — yoksa dosya ölü doğar)
④ ÖNGÖRÜN (D022): yazmadan önce Değişmez 2s açık sayısı tahminin
⑤ tannu-tuva teyit edilebildi mi
```
🔴 **COMMIT ETME.** `data/` commit'i 1.MURAT'ta.

## 5. HABERLEŞME (`§7.1`)
🔴 Kendi pencerene yazmak = cevap vermemek. Koordinatöre
`mcp__ccd_session_mgmt__send_message`. Yatay (KITA 1) tahtadan.
**Aksaklık BEKLEMEZ** (`§7.1⑥`).
