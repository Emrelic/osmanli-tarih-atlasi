# KRONO-DOGU-ISLAM-0929 — şartname (İran · Safevi · Akkoyunlu · Karakoyunlu · Memlük · Mısır)

> 🔴 OKU: `CLAUDE.md` → `oturumlar/KRONO-DUNYA-0929-ORTAK.md` (§1 ve §4.1) →
> `oturumlar/KRONO-DALGA2-0929-ORTAK.md` → bu dosya. Başkasını açma.
> Dalga 2 · model Opus

## Kapsam ve ölçülmüş yük

| Dosya | Madde |
|---|---|
| `kronoloji_iran.js` · `kronoloji_iran_ardillari.js` | 107 + 155 |
| `kronoloji_safevi.js` | 81 |
| `kronoloji_akkoyunlu.js` · `kronoloji_karakoyunlu.js` | 77 + 70 |
| `kronoloji_memluk.js` | 155 |
| `kronoloji_misir.js` | 119 |

**Senkron defteri — `paket["KRONO-DOGU-ISLAM-0929"]`:**
```
toplam_kirilma 425 · ayri_gun 72 · net_olay_adayi 68
   kova: acik 35 · kapsam_disi 4 · yil_temsili 29
   kuyruk_kunye_kapali_yer 198  ← yarısı ZATEN kapalı
```
🔴 `yil_temsili` payın yüksek (266 kırılma / 29 net aday): bu coğrafyada
**kırılmaların çoğu `YYYY-01-01`**, yani günü bilinmiyor. Bu senin en özel işin —
aşağı bak.

## 🔴 Dosya sahipliği

| Dosya | Durum |
|---|---|
| `data/kronoloji_cok_{iran,safevi,akkoyunlu,karakoyunlu,memluk,misir}.js` | YENİ maddeler — `window.KRONOLOJI_COK_<AD>` |
| yukarıdaki yedi mevcut `kronoloji_*.js` | **DÜZELTME için senin** — madde EKLEME (BAGLAMA taşıyor) |
| `denetim/KRONO-DOGU-ISLAM-0929.md` · `-DUZELTME.md` · `-YERLESIM-ONERI.md` · `-KUNYE.md` | senin |

⚠️ `kronoloji_misir.js` ve `kronoloji_iran_ardillari.js` şu anda **hiçbir künyeye
bağlanmıyor** (`KRONO-BAGLAMA-0929`un 15 dosyalık listesinde). Onların taşınması
BAGLAMA'nın işi; sen içeriğini denetle, ama global adını/dosya adını DEĞİŞTİRME.

## Sana özel

**🔴 ① BU PAKET TDV'NİN TAM MERKEZİDİR — kaynak avantajın en yüksek olan paket.**
`CLAUDE.md §4`: İslâm dünyasında TDV **birincil**, çelişirse TDV esastır.
Safevî · Akkoyunlu · Karakoyunlu · Memlükler · hanedan ve şehir maddeleri TDV'de
zengindir. ⇒ Emre'nin *"ayrı bir keskinlik ve kalite"* dediği yerde senin
mazeretin en az.

**② `yil_temsili` yığılması senin gerçek işin.** 266 kırılma `YYYY-01-01`.
🔴 Ama `CLAUDE.md §4` mutlaktır: **gün bilinmiyorsa `YYYY-01-01` yazılır, gün
UYDURULMAZ.** Sahte kesinlik yasak; künyenin `f:`/`t:` günü bir kaynak değildir.
⇒ Senden istenen bu 266'yı güne çevirmek DEĞİL. İstenen: **TDV gün veriyorsa
düzelt, vermiyorsa `gun:` alanında "kaynak gün vermiyor" diye BEYAN ET.**
Kaç tanesinde TDV gün verdi, kaçında vermedi — o sayı raporunun en değerli satırı.

**③ Hicrî-milâdî çevirisi bu pakette sürekli karşına çıkacak.**
`VERI-YAPISI.md §59` (TAKVİM) bölümünü **oku**. Hicrî tarih verilen bir kaynakta
çeviri **tek güne** düşmeyebilir (gün başlangıcı akşam). Şüphedeysen `gun:`
alanına hicrî tarihi de yaz — `D213`: hassasiyet AÇIKLAYAN alandan okunur.

**④ İran'ın künye zinciri uzun ve parçalı:** Akkoyunlu/Karakoyunlu → Safevî
(1501-1736) → Afşar (Nâdir Şah) → Zend → Kaçar (1789-1925). `kronoloji_iran.js`
ve `kronoloji_iran_ardillari.js` bu zinciri nasıl bölüşüyor — **ölç**, çünkü iki
dosya arasında mükerrer olması muhtemel.

**⑤ Mısır iki kere devlettir ve bu karıştırılır:** Memlük (→1517) · Osmanlı
eyaleti (1517-1805) · Kavalalı (1805-1882) · İngiliz işgali (1882-). 🔴 1517-1805
arası Osmanlı eyaletidir — `bosna-eyaleti`/`sirbistan-eyaleti` emsaliyle künye
gerekebilir; M-5416 kuralı (3): önerdiğin id ile **yaz**, `devletler.js`e dokunma.

**⑥ Kesişimler:** `KRONO-KAFKAS-0929` (Safevî-Osmanlı arasında bölünen Gürcistan) ·
`KRONO-MAGRIB-0929` (Memlük 1517 öncesi Kuzey Afrika). **Yatay mesaj serbest.**
TDV önbellekleri hazır: `denetim/SINIR-ARABISTAN-0078-tdv-onbellek/` ·
`denetim/ODAK-DOGU-ISLAM-0080-tdv-onbellek/`.

## Teslim
`DALGA2-ORTAK §5`. Sonuna: **"bekçimi öldüreyim mi?"**
