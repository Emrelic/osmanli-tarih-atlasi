# KRONO-ITALYA-0929 — şartname (Venedik · Ceneviz · Papalık · İtalyan şehir devletleri)

> 🔴 OKU: `CLAUDE.md` → `oturumlar/KRONO-DUNYA-0929-ORTAK.md` (§1 ve §4.1) →
> `oturumlar/KRONO-DALGA2-0929-ORTAK.md` → bu dosya. Başkasını açma.
> Dalga 2 · **model Sonnet** — gerekçesi aşağıda, §0

## 0. 🔴 NİÇİN SONNET — ve bu bir ölçümdür, bir tasarruf değil

Emre sordu: *"tüm oturumların Opus ile mi çalışması gerekiyordu, Sonnet
kurtarmıyor muydu acaba görevleri?"* Cevabı **tahminle değil ölçerek** vereceğiz.

Bu paket kasıtlı olarak en küçük yüklü pakettir (`net_olay_adayi` **17**) ve
kaynak tarafı en sağlam olanlardandır. ⇒ Yanılma maliyeti en düşük yer burası.
📌 Sana düşen fazladan bir şey YOK — normal çalış. Karşılaştırmayı koordinatör
yapacak: kaynak disiplini, mükerrer yakalama ve **şartnameye itiraz edebilme**
eksenlerinde kardeş paketlerle kıyaslanacak.
🔴 Ve tam da bu yüzden şunu özellikle iste: **şartnamende yanlış bulursan SÖYLE.**
Bugün Dalga 1'de dört oturum benim şartnamemdeki hataları buldu ve biri bütün
dalgayı kurtardı (M-5390). Doğru davranış itaat değil, ölçüp itiraz etmektir.

## Kapsam ve ölçülmüş yük

| Dosya | Madde | Durum |
|---|---|---|
| `kronoloji_venedik.js` | 86 | künyeye bağlanıyor |
| `kronoloji_italya.js` | 192 | künyeye bağlanıyor |
| `kronoloji_italya_sehir.js` | 186 | 🔴 **hiçbir künyeye bağlanmıyor** (BAGLAMA'da) |
| Ceneviz · Papalık | kendi dosyası YOK | 193 · 247 anılma — İtalya dosyalarının içinde |

**Senkron defteri — `paket["KRONO-ITALYA-0929"]`:**
```
toplam_kirilma 64 · ayri_gun 25 · net_olay_adayi 17
   kova: acik 10 · kapsam_disi 0 · yil_temsili 7
```

## 🔴 Dosya sahipliği

| Dosya | Durum |
|---|---|
| `data/kronoloji_cok_venedik.js` · `_ceneviz.js` · `_papalik.js` | YENİ maddeler — `window.KRONOLOJI_COK_<AD>` |
| `data/kronoloji_venedik.js` · `_italya.js` | **DÜZELTME için senin** — madde EKLEME (BAGLAMA taşıyor) |
| `data/kronoloji_italya_sehir.js` | 🔴 **DOKUNMA** — BAGLAMA taşıyor |
| `denetim/KRONO-ITALYA-0929.md` · `-DUZELTME.md` · `-YERLESIM-ONERI.md` · `-KUNYE.md` | senin |

## Sana özel

**① Ceneviz ve Papalık'ın kendi dosyası yok ama 193/247 anılma var** — yani
olayları yazılı, dağınık. 🔴 Yeni madde yazmadan **önce tara**: `kronoloji_italya.js`
(192) · `kronoloji_italya_sehir.js` (186) · `kronoloji_bizans.js` (97) ·
`kronoloji_venedik.js` (86) · `olaylar*.js` (1736). Bulduğun maddeleri
**kopyalama** — "şu madde şurada zaten var" diye raporuna yaz.

**② Ceneviz Osmanlı tarihinin ilk yüzyıllarında ana aktördür** ve muhtemelen
en eksik kısım orasıdır: Galata/Pera (1261-1453) · Foça şapı · Kefe ve Kırım
kolonileri (1475 Osmanlı fethi) · Sakız (1566'ya kadar) · 1352 Boğaz savaşı ·
Osmanlı'nın Rumeli'ye geçişinde Ceneviz gemileri (1352-1354).

**③ Papalık bir devlettir ve bir kurumdur — ikisini karıştırma.** Papalık
Devleti'nin toprak değişimi (1870 İtalya'ya ilhak) ile papalık makamının
siyasi eylemi (haçlı çağrıları, 1571 Kutsal İttifak) ayrı şeylerdir. `tur:`
alanında bunu ayır (`toprak-kayip` ↔ `diplomasi`/`din`).

**④ Venedik-Osmanlı ekseni yoğundur ve TDV kapsar:** 1416 Gelibolu · 1463-79 ·
1499-1503 · 1537-40 · 1570-73 Kıbrıs · 1645-69 Girit · 1684-99 Mora ·
1714-18. `kronoloji_venedik.js` 86 maddeyle bunları kapsıyor mu — **ölç.**

**⑤ Künye:** İtalyan şehir devletleri künye tarafında parçalıdır (Ceneviz,
Floransa, Milano, Napoli, Savoy, Papalık). M-5416 kuralı (3): künye yoksa
maddeyi YAZ, önerdiğin id ile, `denetim/KRONO-ITALYA-0929-KUNYE.md`ye kaydet,
`data/devletler.js`e **DOKUNMA**. `denetim/KUNYE-DUNYA-0929.json`u aç.

## Teslim
`DALGA2-ORTAK §5`. Sonuna: **"bekçimi öldüreyim mi?"**
