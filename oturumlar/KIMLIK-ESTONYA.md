# KİMLİK — Estonya Cumhuriyeti

**3 Ağustos 2026 · VERİ KİMLİK 3 · Opus.**
`arac/renkler.py`ye **DOKUNULMADI** — renk RENK'ten gelecek.

---

## 🔴 ÖNCE ÖLÇÜM: KÜNYE YAZILMADI ÇÜNKÜ **ZATEN VARDI**

Talimat *"`devletler.js` kaydı yaz"* diyordu. Yazmadan önce baktım
(Zaporog dersi) ve kayıt yerinde çıktı:

```
devletler.js:1728   id:"estonya" · Estonya Cumhuriyeti · cumhuriyet · dogu-avrupa
                    f:"1918-02-24" · t:"1923-10-29" · baskent:"Tallinn"
                    kronoloji: 1918-02-24 bağımsızlık · 1918-11-28 savaş ·
                               1920-02-02 Tartu Barışı
                    🔴 harita: alanı YOK · BOYALAR'da YOK · veride 0 kullanım
```

Pencere, başkent ve kronoloji **eksiksizdi.** Eksik olan tek şey renk —
ve onun sonucu olarak `harita:` köprüsü.

### Ve eski `ozet` ödüncü KENDİ ELİYLE YAZMIŞ

Kaydın özeti şu cümleyi taşıyordu:

> *"BOYALAR'da ayrı id'si yok **(haritada Letonya/Litvanya ile aynı
> bölgeye dahil)**, yine de tam bir devlet olarak kaydedildi."*

Bu bir çözüm tarifi değil, **bir ödünç tarifi** — ve bugün geçersiz:
Tallinn Helsinki'ye 82 km ama Fin körfezinin öte yakasında; nokta
gelince Estonya kıyısı `finlandiya` boyanır, "Letonya/Litvanya bölgesi"
değil. Cümle çıkarıldı, yerine devletin kendi tarifi yazıldı.

📌 **Bu, bugünün dördüncü ödüncü DEĞİL — beşincisi, ve İLK KEZ VERİ
YAZILMADAN ÖNCE yakalandı.** Öncekiler:
```
Azak                rusya ödünç alındı        (yazıldıktan sonra bulundu)
Kalmuk bozkırı      rusya ödünç alındı        (yazıldıktan sonra bulundu)
Donets              hücre hiç açılmadı        (iş durdu)
altinorda→astarhan  altinorda ödünç alındı    (maruziyet ölçümünde bulundu)
irlanda→irl.-serbest-devlet  irlanda ödünç    (maruziyet ölçümünde bulundu)
────────────────────────────────────────────────────────────────────────
Estonya             PETEK/NOKTA YAZMADI ve sordu   ← DÖNGÜ BURADA KIRILDI
```
PETEK/NOKTA'nın `rusya` yazmayı reddetmesi doğru davranıştı; yazsaydı
`estonya` künyesi altı ay daha gövdesiz kalırdı ve kimse bakmazdı.

---

## ① YAPILAN — `harita:` köprüsü + bayat cümlenin düzeltilmesi

```javascript
f:"1918-02-24", t:"1923-10-29", baskent:"Tallinn", harita:"estonya",
ozet:"Rusya İmparatorluğu'nun dağılmasıyla bağımsızlığını ilan eden Baltık
      devleti; Bağımsızlık Savaşı'nda Sovyetler'e karşı direndi ve Tartu
      Barışı'yla tanındı (1923 sonrasında da sürdü)."
```
`devletler.js` **302 kayıt · `harita:` alanı 239** (238 → 239).
Parse ✓ · mükerrer 0 · CRLF korundu.

⚠️ Köprü, rengi gelmeden yazıldı. Gerekçe `OLCUM-GOVDESIZ-KIMLIK.md`:
bugün 52 kayıt "rengi geldi ama köprüsü yazılmadı" diye denetim dışı
kalmıştı. Sonraya bırakmak o borcun bir yenisini açardı. `don-kazak`ta
da aynısı yapıldı ve koordinatör onayladı.

## ② ANAHTAR ADI — kaynağından doğrulandı (talimat gereği)

```
devletler.js        renkler.py
id:"letonya"        "letonya":     ("Letonya",     "#c96990")   ✅ birebir
id:"litvanya"       "litvanya":    ("Litvanya",    "#a87b57")   ✅ birebir
id:"finlandiya"     "finlandiya":  ("Finlandiya",  "#99a857")   ✅ birebir
id:"estonya"        —  (RENK yazacak)
```
Üçünün de `id` ile `BOYALAR` anahtarı **birebir aynı**; `estonya` da
aynı biçimde, ek/tire/uzatma yok. `alihalife` vakasının tersi: burada
kayıt zaten kanonik anahtarı taşıyordu.

📌 Kalıp da tutuyor — üç Baltık/Kuzey kaydı da `1918 civarı → 1923-10-29`
ve `ozet`leri *"(1923 sonrasında da sürdü)"* ile bitiyor. `estonya` bu
kalıba uyuyor.

## ③ RENGİ — SEÇMEDİM, RENK'e girdi

```
EŞZAMANLI KOMŞULAR (1918-02-24 → 1923-10-29 · beş yıllık dar pencere)
  finlandiya   #99a857   🔴 EN KRİTİK — Tallinn ↔ Helsinki 82 km, körfezin
                          iki yakası; bugünkü hata tam burada
  letonya      #c96990   güney sınır, kara komşusu
  rusya        #4f7d4f   doğu sınır (Narva) — 1918'e kadar da sahibiydi
  isvec        —         komşu değil ama 1561-1721 aynı toprağın sahibi
  litvanya     #a87b57   Letonya'nın ötesinde, doğrudan sınırdaş değil
```
⚠️ **Pencere beş yıl** — yani `renk_olc.py`nin gün düzeyinde örtüşme
ölçütünde `estonya`nın komşuluk kümesi çok dar çıkacak ve araç ona
"kısıtsız" davranıp uçlara kaçabilir. RENK'e not: kısıt az diye marj
geniş tutulmalı, **`finlandiya`dan ayrışma bu kimliğin varlık sebebidir.**

📌 Ve `kalmuk` · `don-kazak` · `astarhan` · `irlanda-serbest-devlet` ile
birlikte **beş kimlik** renk bekliyor. `renk_olc.py --oner` bunları
**BİRLİKTE** çözmeli (kendi kuralı: *"N kimliği BİRLİKTE çözer, tek tek
değil"*) — ama `estonya`↔`kalmuk` gibi hiç komşu olmayan çiftler için
paylaşım serbest; paletin doyduğu ölçüldü (226 kimlik / 184 hex, aday
havuzunun palet geneline açabildiği en büyük ΔE **4,6**).

## ④ PETEK/NOKTA'YA — zincir doğrulandı, bir notla

Verilen zincir:
```
almanya → 1561-11-28 · isvec → 1721-08-30 · rusya → 1918-02-24 · estonya
```
Üç devir tarihi de yerinde: **28 Kasım 1561** Vilnius Antlaşması (Livonya
Konfederasyonu'nun paylaşımı), **30 Ağustos 1721** Nystad Antlaşması
(İsveç Estonya ve Livonya'yı Rusya'ya bıraktı), **24 Şubat 1918**
bağımsızlık ilanı — künyenin `f`si ile birebir aynı gün.

⚠️ İki not:
```
① 1281 → 1561 arası `almanya` yazılıyor. O dönemde bölge LİVONYA
   NİŞANLILARI'nın (Livonya Ordusu) idaresindeydi; `almanya` bir
   battaniye kimliktir. Bugün için meşru — ama `teodoro`/`astarhan`
   sınıfının aynısı: doğru kimlik yok diye komşu ad ödünç alınıyor.
   Kayda geçiyor, bu partide iş DEĞİL.
② Estonya kuzeyi 1561'de İsveç'e geçerken güneyi (Livonya) Lehistan'a
   gitti. Tartu'nun 1561-1625 arası sahibi İsveç DEĞİL, Lehistan'dır.
   Dört noktanın hepsine aynı zinciri yazmak Tartu'da hata üretir —
   PETEK/NOKTA nokta nokta ölçmeli.
```

---

## SONRAKİ ADIM

```
① RENK: estonya + kalmuk + don-kazak + astarhan + irlanda-serbest-devlet
        BİRLİKTE çözülsün (beşi de künyeli, beşi de renksiz)
② PETEK/NOKTA: dört nokta + zincir (Tartu'nun 1561-1625'i ayrı ölçülerek)
③ py arac/denetle_anakronizm.py — estonya köprüsü artık kurulu
```
