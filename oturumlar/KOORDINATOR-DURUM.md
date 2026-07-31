# KOORDİNATÖR — devir durumu (31 Temmuz, 16:40)

> `ORGANIZASYON Karar 2b`: **sıkıştırmadan önce yaz.** Bu dosya tam onun için —
> bağlam sıkıştıktan sonra buradan devam edilir. Kararlar zaten kendi
> dosyalarında; burada yalnız **o dosyalarda olmayan** anlık durum var.

---

## 1. ✅ ANLIK GÖRÜNTÜ KOŞUSU — A/B GEÇTİ, ölçtüm

Koşu 15:58 → 16:38. Geçme ölçütü *"çıktı bit düzeyinde aynı"* idi. Bağımsız
doğrulama (`git show HEAD:data/donemler.js` ile karşılaştırma):

```
window değişkeni     r243              şimdi             sonuç
DONEMLER             9950d3a3e62a72f4  9950d3a3e62a72f4  AYNI
PARCALAR             1701e2a2c64a11ad  1701e2a2c64a11ad  AYNI
PETEKLER             74cb10dbc585ce3e  74cb10dbc585ce3e  AYNI
SERBEST              e06d5f0b833d404d  e06d5f0b833d404d  AYNI
SERBEST_U            ddad27f8d091e13d  ddad27f8d091e13d  AYNI
URETIM_IZI           f8486bc7be791558  e0515f9267841a14  FARKLI ← BEKLENEN
```
`URETIM_IZI` farkının içi de doğru: **girdi izi 3/3 AYNI**, motor izinde
yalnız değişen iki dosya (`girdi.py`, `uret_petek.py`) farklı, `renkler.py`
aynı.

⇒ **Anlık görüntü geometriyi hiç oynatmadı.** Kilit kaldırma güvenli.
📌 Bu, MOTOR'un *"ölçütü kendiliğinden veren değişiklik"* dediği şeyin
karşılığı: hiçbir şeyin değişmemesi gereken bir değişiklikte A/B bedava.

**Yeni dosya:** `data/petek_govde.js` (1,1 MB) — `index.html` YÜKLEMEZ,
yalnız `uret_devirler.py` okur. ⚠️ ZAMANSIZ: taban geometri, `kur:`/`bit:`
devirlerini taşımaz; 1869 öncesine uzanan sorularda **sessizce** yanlış cevap
verir (uyarı dosyanın kendi başında).

---

## 2. ⏳ AÇIK İŞ — kim, ne

| oturum | iş | durum |
|---|---|---|
| **MOTOR** | A/B onayı → damga → commit | ölçüt geçti, yayın bende |
| **YAMACI** | 8 paket, 951 → **965** yerleşim | uygulama izni verildi |
| **COĞRAFYA** | dağ sırtı Kısım 1 şartnamesi (699 köşe, DEM'siz) | yazıyor |
| **DENETÇİ** | boşluk envanteri · `k:` üç otorite · bölgesel çöküş | koşuyor |
| **U4 YER DİZİNİ** | 327 tarihî bölge adını sınıflandır | başladı |
| **GUI/ARAYÜZ** | ok lejantı · Kademe 3 kalan ölçütler | panel açılmıyor |
| **A5 · A3 · A4** | Sudan · Batı Sahra · Basra | araştırma |

### 🔴 BENDE BEKLEYENLER
- **`isg:` 55 kayıt `1882-09-14` → `1882-09-13`** (Tellülkebîr; maddesi zaten
  13'ünde). Uygulanmadı.
- **`ISGALLER` üreticisi** — `uret_devirler.py`'de yazıldı, `petek_govde.js`
  **artık var**, yalnız dosya yolu bağlanacak (`oku_pencere` çağrısı).
- **İki açık kırılma:** Mekke `1806-02-01` (madde 31 gün ötede, aynı konu) ·
  Sana `1905-04-01` (madde yok).
- **Bloke iki paket:** `#19/#20` macaristan-habsburg (renk yok, 31 kayıt
  boyasız kalır) · `#40` Böğürdelen (E-bloğu metinleri).
- **`BEKLENEN_YERLESIM = 951` → 965** DENETÇİ'ye bildirilecek.
- **Faz 1 şema** (`VERI-YAPISI.md`) — Faz 0 ölçümü geldi, yazılacak.

---

## 3. SIRA BAĞLARI — bunlar bozulursa iş ters teper

1. 🔴 **Sönen kenar (`serbest-hale`) YAYINA GİRMEDEN çöl tavanı inmesin.**
   Önce inerse sahipsiz sınırlar keskin çizgi olur ve kullanıcının şikâyetini
   **azaltmak yerine artırır.** (Düzeltme yazıldı, ölçüldü, commit ARAYÜZ'de.)
2. 🔴 **`cos(enlem)` TEK BAŞINA inmesin** — nehir üstü kuralı **önce devrede**
   olmalı, yoksa Mihaliç %65 → %26 düşer ve **kimse aramaz** (düzeltme "birim
   tutarlılığı" diye meşru görünür).
3. **`cos(enlem)` Avrupa merge'ünden ÖNCE kapanmalı** — bugün hata %18-25,
   Baltık'ta %50'ye çıkar ve "yeni noktalar eklendi" gürültüsünde görünmez.
4. **Faz 2-3 (etiket) mevcut dalga kapanmadan başlamasın.**

---

## 4. BUGÜN ALINAN KULLANICI KARARLARI — hepsi dosyada

| karar | dosya |
|---|---|
| Çöl tavanı **300 km** | `YAPILACAKLAR.md` |
| Altlık **kademeli geçiş** (Esri kalır → vektör katman → Esri kalkar) | `YAPILACAKLAR.md` |
| Coğrafya etiketi **tarihî bölge adı** | `PLAN-ETIKET.md §7` |
| **Dördüncü yol** onayı (vektör katman açılır-kapanır) | `YAPILACAKLAR.md` |
| Yönetim: **yön kullanıcının, nasıl'ı koordinatörün** | bu dosya |

⚠️ Ve kullanıcının onayladığı çalışma biçimi: *ölçümden çıkan, kimsenin
istemediği kusurlar* (görünmeyen `isg:`, çizilmeyen sönen kenar, `404` lisans)
**sorulmadan** dalgaya eklenir — çünkü yeni özellik değil, "var sandığımız
şeyin olmadığının" ortaya çıkması. **Yeni işlev** ise sorulur.

---

## 5. 📌 BUGÜNÜN DERSLERİ — `OGRENILENLER`'e yazıldı

`§34` ölçüm başka cevap verebilmeli · `§35` sabiti paylaşmak yetmez, çıktıyı
paylaş · `§36` `git add` ile commit arası pencere ortak (`git commit -o`).

**Yazılmayı bekleyen iki tanesi:**
- **"Büyük sayı, çoğu zaman yöntemin yanlış olduğunun işaretidir"** — bugün
  beş vakası: Pen/cape %36,7 · göl %21,3 · Plain %18,7 · Desert %14 · medial
  eksen 697 km.
- **"Bir mekanizmanın verisinin üretiliyor olması, çiziliyor olması demek
  değildir"** (COĞRAFYA) — `serbest-hale` üç koşudur üretiliyordu, hiç
  çizilmiyordu.
- **"Denetim, ölçtüğü şeyi ortadan kaldırabiliyorsa ölçmekten iyidir"**
  (COĞRAFYA) — `Karar 3`'ün bir üst basamağı.
