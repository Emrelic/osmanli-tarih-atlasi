# ㉗ GÜVENLİ PAY BORCU — ÖLÇÜM

**Oturum:** RENK KAPISI · 7 Eylül 2026
**Durum:** 🔴 ÖNGÖRÜ DAMGALANDI — ölçüm HENÜZ YAPILMADI

---

## BORÇ — `CLAUDE.md`de açık, kapatan olmadı

```
renkler.py:3553-3554   _DE_KOMSU_KOPYA = 12.0
                       _GUVENLI_PAY    = 13.0
   "sınırda (12,0-13,0) geçen bir aday KABUL EDİLMEZ, ikinci geçiş de
    YAPISAL sayılır; amaç ucu ucuna değil RAHATÇA geçmek"

renk_olc.py:53         DE_KOMSU = 12.0        ← oner() bunu hedefliyor, PAY YOK
```

**Aynı proje · aynı ilke · iki farklı sayı.** Ve `renkler.py` payı yalnız
KENDİ "renk açma ikinci geçiş" yolunda uyguluyor (satır 3584); `oner()`
onu hiç görmüyor.

## NİÇİN ÖNEMLİ — ekran 8 bit çizer

`gorunen()` = `lab(bind(hex))` ve `bind()` **float** döndürüyor. Ekran ise
8 bit. `CLAUDE.md` bunu 4 Eylül'de ölçmüş: yuvarlama kayması **~0,3**, ve
o gün uygulanan renklerin payı **0,1** idi (12,1 · 12,1 · 12,2 · 12,2 · 12,3…).
⇒ Eşiğin kıl payı üstünde duran bir renk, **çizimde altına iniyor.**

---

## 🔴 ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE YAZILDI

Hiçbir sayım yapılmadan; yalnız iki eşiğin **tanımı** okundu.

### ① BUGÜNKÜ PALETTE KIL PAYI BANDI
- **NE BEKLİYORUM:** en yakın (eş zamanlı **ve** yakın) komşusuna ΔE'si
  `[12,0 – 13,0)` bandında olan kimlik: **10-30** (579 içinde).
- **MAZERETİ:** MAZERET YOK. Bant dışına çıkarsa tahminim yanlıştı.
- **ÇIKTI/BİRİM:** `renkler.BOYALAR` × `renk_olc.komsuluk()` + künye
  örtüşmesi + en yakın nokta km; birim **adet**, eşik ΔE00.
- **NEYE KARŞI:** bugünkü donmuş `renkler.py` (yalnız OKUNUYOR).

### ② 8 BİT YUVARLAMANIN KAYMASI
- **NE BEKLİYORUM:** float harman ile 8-bit harman arasındaki ΔE farkının
  **ortancası ~0,3** (CLAUDE.md'nin sayısı); ve yuvarlamayla 12'nin
  **altına düşen** çift: **5-15**.
- **MAZERETİ:** 🟡 VAR: `bind()`in çağrı yolları farklı ölçekte veri
  alıyor olabilir — 0904'te bir yama denedim, çakışma 0→10 fırladı ve
  **anlamadan geri aldım.** Bu sefer sebebi ölçeceğim; sayı bandın çok
  dışına çıkarsa ÖNCE ölçek uyumunu sınayacağım.
- **ÇIKTI/BİRİM:** aynı çift için `dE(float)` − `dE(8bit)`; birim ΔE00.

### ③ PAY EKLENİRSE KAÇ KİMLİK ÇÖZÜLEMEZ
- **NE BEKLİYORUM:** hedef 13,0'da çözülemeyen **0-3**; 14,0'da **0-6**;
  15,0'da **2-12**. Yani pay **ucuz**.
- **GEREKÇE:** 0904'te tek bir kimlik için altı kısıt altında 4253 geçerli
  aday çıkmıştı; renk uzayı bol.
- **MAZERETİ:** 🟡 VAR: kalabalık bölgelerde (güneydoğu-asya 58 kimlik)
  uzay dar olabilir. Çözülemeyen çıkarsa ÖNCE bölge yoğunluğunu ölçeceğim.
- **ÇIKTI/BİRİM:** hedef başına çözülemeyen kimlik **adedi**; eğri.

### ④ İKİ KİPTE ÖLÇÜM
- **NE BEKLİYORUM:** sert ve yumuşak kip **farklı** sayı verecek; yumuşak
  kip daha çok kimliği bandın içine sokacak (harman gövdeleri altlığa
  yaklaştırıp birbirine de yaklaştırıyor).
- **MAZERETİ:** MAZERET YOK.
- **ÇIKTI/BİRİM:** her iki kip için ayrı adet.

---

## ⚠️ ÇERÇEVE — `§11`: "eşiği gevşetme, SIKILAŞTIR"

Pay eklemek eşiği **sıkılaştırmaktır**, gevşetmek değil. Bu ölçüm bir
gevşetme önerisi ARAMIYOR; sıkılaştırmanın **bedelini** ölçüyor.

## 🔒 KISIT
`renkler.py` · `data/` · `arac/` **DONUK** — yalnız okundu, hiçbir dosya
değiştirilmedi. Çıktı bu dosya.
