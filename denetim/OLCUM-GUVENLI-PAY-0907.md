# ㉗ GÜVENLİ PAY BORCU — ÖLÇÜM VE ÖNERİ

**Oturum:** RENK KAPISI · 7 Eylül 2026
**Durum:** 🟢 ÖLÇÜM BİTTİ · öneri hazır
**Kısıt:** `renkler.py` · `data/` · `arac/` DONUK — yalnız okundu, hiçbir dosya değiştirilmedi

---

## BORÇ

```
renkler.py:3553-3554   _DE_KOMSU_KOPYA = 12.0   ·   _GUVENLI_PAY = 13.0
   "sınırda (12,0-13,0) geçen bir aday KABUL EDİLMEZ … amaç ucu ucuna
    değil RAHATÇA geçmek"
renk_olc.py:53         DE_KOMSU = 12.0          ← oner() bunu hedefliyor, PAY YOK
```
Ve `renkler.py` payı **yalnız kendi "renk açma ikinci geçiş" yolunda**
uyguluyor (satır 3584); `oner()` onu hiç görmüyor.

---

## 🔴 ÖLÇÜMÜN MANŞETİ — SORUN EŞİKTE DEĞİL, **HANGİ KİPTE ÖLÇÜLDÜĞÜNDE**

En yakın **eş zamanlı Voronoi komşusuna** ΔE dağılımı (529 kimlik):

| kip | 🔴 <12 | 12,0-12,5 | 12,5-13,0 | 13-14 | 14-15 | ≥15 |
|---|---|---|---|---|---|---|
| **SERT** (ham hex) | 0 | 0 | 0 | 0 | **2** | **527** |
| YUMUŞAK (float) | 0 | 87 | 47 | 38 | 31 | 326 |
| **YUMUŞAK (8 bit)** | **16** | 60 | 56 | 39 | 39 | 319 |

🟢 **SERT kipte palet KUSURSUZ** — 529 kimliğin 527'si ≥15, kalan ikisi 14-15.
Kıl payı diye bir sorun **sert kipte yok.**
🔴 **Dar paylar tamamen YUMUŞAK kipin ürünü:** harman gövdeleri altlığa
yaklaştırırken **birbirine de** yaklaştırıyor.

---

## 🔴 BULGU 1 — 8 BİT ÇİZİM 16 KİMLİĞİ EŞİĞİN ALTINA İNDİRİYOR

`gorunen()` **float** harman döndürüyor; ekran **8 bit** çiziyor.

```
|ΔE(float) − ΔE(8bit)|   ortanca 0,175 · ortalama 0,212 · azami 0,806
float ≥12 AMA 8bit <12   →  16 kimlik = 8 ÇİFT
```
| çift | float | 8 bit |
|---|---|---|
| azuchi-momoyama ↔ ryukyu | 12,03 | **11,65** |
| filipin-racaliklari ↔ sulu/yuan | 12,0x | **11,72** |
| fransa-cumhuriyet ↔ sokoto | 12,03 | **11,79** |
| jukun-kvararafa ↔ sokoto | — | **11,80** |
| lusignan ↔ selcuklu | 12,09 | **11,88** |
| bamum ↔ nijer-deltasi | 12,15 | **11,91** |
| memluk ↔ timurlu | 12,04 | **11,98** |
| granada ↔ kastilya | 12,04 | **11,99** |

⇒ **Bunlar bugün, yumuşak kipte, ekranda ihlal** — ve float ölçen alet
onları **görmüyor.**

⚠️ **`CLAUDE.md`nin "~0,3" sayısı biraz yüksek:** ölçülen ortanca **0,175**.
Aynı mertebe, ama kayıt düzeltilmeli.

---

## 🟢 BULGU 2 — PAY EKLEMEK **BEDAVA**

16 ihlalli kimliğin her biri için "hedef X'i sağlayan bir renk bulunabilir
mi" ayrı ayrı çözüldü (8 bit yumuşak kipte, deniz + altlık kısıtları dahil):

| hedef | çözülemeyen |
|---|---|
| 12,0 | **0** |
| 12,5 | **0** |
| 13,0 | **0** |
| 14,0 | **0** |
| 15,0 | **0** |

Ve bu, **kalabalık kimlikler dahil**: `fransa-cumhuriyet` **86 eş zamanlı
komşuya** sahip ve 15,0'da bile çözülüyor.
⇒ Payın bedeli **sıfır**. Bu, `§11`in *"eşiği gevşetme, SIKILAŞTIR"*
kuralının uygulanabildiği ender bir yer: sıkılaştırma hiçbir şeye mal olmuyor.

---

## ⇒ ÖNERİ — dayatmıyorum, ölçtüm

```
① oner() hedefi        DE_KOMSU + 1,0  =  13,0   (renkler.py emsali, _GUVENLI_PAY)
② ve HANGİ KİPTE       🔴 8 BİT YUMUŞAK — ekranın gerçekten çizdiği
                       float harman ölçmek, ihlali GÖRMEDEN geçirir
③ bugünkü 8 çift       yeniden çözülmeli (hepsi çözülebilir, bedel 0)
④ CLAUDE.md kaydı      "yuvarlama kayması ~0,3" → ortanca 0,175 · azami 0,806
```
⚠️ **Karar benim değil:** `renkler.py` donuk ve eşik değişikliği bir
KARARDIR. Ölçüm burada; uygulama koordinatörde.

---

## ÖNGÖRÜ HÜKMÜ — dördün ikisi tuttu

| kalem | öngörü | ölçüm | hüküm |
|---|---|---|---|
| ① 12-13 bandı | 10-30 | **116** (8 bit) | 🔴 ÇÜRÜDÜ — dört kat |
| ② kayma + düşen | ~0,3 · 5-15 çift | 0,175 · **8 çift** | 🟡 yarı: çift sayısı bantta, kayma tahminim YÜKSEK |
| ③ çözülemeyen | 0-3 (13,0'da) | **0** | 🟢 TUTTU |
| ④ kipler ayrışır | ayrışacak | sert **0** · yumuşak **132** | 🟢 TUTTU, beklediğimden keskin |

📌 **Bilgiyi çürüyenler taşıdı:** ①'in dört kat sapması, dar payların
paletin genel bir kusuru değil **yumuşak kipin ürünü** olduğunu gösterdi —
ve o, ④'ün neden bu kadar keskin ayrıştığını açıklıyor.

---

## 🔴 ÖLÇMEDİKLERİM

- **"4 Eylül'de uygulanan 16 renk"i BULAMADIM.** Bu ölçümdeki 16, *8 bit
  yumuşak kipte bugün eşiğin altında olan* kimliklerdir. **Sayının 16
  olması bir RASTLANTIDIR** — iki küme aynı diye VARSAYILMAMALI, ben
  eşleştirmedim.
- Yalnız **en yakın** komşu ölçüldü; bir kimliğin ikinci/üçüncü komşusu da
  bandın içinde olabilir. Kimlik başına tek sayı.
- Çözülebilirlik taraması **kaba ızgarada** (6° ton · 4 doygunluk ·
  5 açıklık ≈ 1200 aday). Daha ince ızgara *daha çok* aday bulur, yani
  "çözülemeyen 0" sonucu **güvenli yönde**.
- `oner()`in kendi kodunu **değiştirmedim ve çağırmadım** — kendi kısıt
  kümemle çözdüm. `oner()`in ek tercihleri (uyum, palet hissi) sonucu
  daraltabilir; o hâlde bedel 0'dan büyük çıkabilir. **ÖLÇÜLMEDİ.**
