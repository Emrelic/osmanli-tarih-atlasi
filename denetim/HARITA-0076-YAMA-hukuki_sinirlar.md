# YAMA — `data/hukuki_sinirlar.js` · C katmanının opak dikdörtgeni

**Üreten:** `HARITA-0076` · 23 Eylül 2026 · **Uygulayan:** koordinatör
**Kapattığı madde:** H-0096 · H-0139 · H-0147 · H-0148 (4 madde, tek sınıf)
**Ölçüm:** `denetim/HARITA-0076.md` §1

---

## 🔴 Önce bunu okuyun: bu kusur DAHA ÖNCE BİR KEZ ÇÖZÜLDÜ — ama tek kayıtta

`data/hukuki_sinirlar.js:325` bugün şunu yazıyor:

> *"🔴 15 Eylül 2026 — DOLGU KAPATILDI (Emre bildirdi: Srebrenik–Bosna
> Brod'u üstünde yarısı kırmızı yarısı yeşil DİKDÖRTGEN). Bu kutu opak
> boyanıyor ve ... DÜZ KİRİŞİYLE bölünüyordu."*

Emre'nin 15 Eylül'de bildirdiği kusurla H-0096/0139/0147/0148'de
bildirdiği kusur **aynı kusurdur**. O gün çare **yalnız o kayda**
uygulandı, **sınıfa** uygulanmadı. Geriye kalan üç kutu sekiz gün sonra
aynı şikâyetle geri geldi.

⇒ Bu yamanın asıl değeri üç satır değil, **sınıfın süpürülmesi**.
Bundan sonra `kapsama.kutu` + dolgu açık her yeni kayıt aynı kusuru
doğurur; §3'te kalıcı koruma önerisi var.

---

## 1. Kayıt kayıt hüküm — üçü AYNI DEĞİL

`dolgu:false` her kayıtta doğru çare değil. Ölçüt, 15 Eylül notunun
kendi ölçütü: **"dolgunun gizleyeceği yanlış sınır var mı?"**

### ① `ii-erzurum-sattularap-1847` — `dolgu: false`  ✅ TEREDDÜTSÜZ

```
pencere : 1847-05-31 → 1923-10-29   = 27 910 gün ≈ 76 yıl
kutu    : lon 46.5–49.0 · lat 28.5–31.5
madde   : H-0096 (1900-09-01) · H-0147 (1913-07-29)
```
Emre bu kutuyu **iki ayrı fotoğrafta, 13 yıl arayla** bildirdi ve
*"hâlâ devam ediyor, uzun süre bozuk gösteriliyor"* dedi. 76 yıllık
pencere onu birebir doğruluyor. En yüksek getirili tek satır budur.

**Uygulama** — `data/hukuki_sinirlar.js`, `kapsama` bloğu (≈ satır 189):
```js
    negatif_taraf: "osmanli",
    // 🔴 23 Eylül 2026 — DOLGU KAPATILDI (H-0096 · H-0147; HARITA-0076
    // ölçümü). 15 Eylül'de karlofca-bosna-sava'ya uygulanan çarenin
    // aynısı: opak kutu, Basra'nın üstüne kenarları coğrafyayla ilgisiz
    // bir dikdörtgen basıyordu. Pencere 1847→1923, yani 76 yıl boyunca
    // her gün. Hat (kesik çizgi) kalıyor.
    dolgu: false,
    kutu: { lat_min: 28.5, lat_max: 31.5, lon_min: 46.5, lon_max: 49.0 },
```

### ② `midye-enez-1913` — `dolgu: false` (kısa vadeli), asıl çare poligon

```
pencere : 1913-05-30 → 1913-06-29   = 30 gün
kutu    : lon 25.5–29.5 · lat 40.0–42.5
madde   : H-0139
```
Burada dolgu **gerçek bilgi taşıyor**: Midye–Enez hattı Londra
Antlaşması'nın sınırıdır ve motor bu hattı bilmiyor (`js/app.js:1864`).
Kapatmak dikdörtgeni kaldırır ama antlaşmanın toprak sonucunu haritadan
düşürür. Buna karşılık kutunun kenarları Bulgaristan'ın içinden ve
denizden geçiyor; 30 günlük bir pencere için "yanlış görünüm" bedeli
"eksik bilgi" bedelinden büyük.

**Önerim:** şimdilik `dolgu: false`, kalıcı çare `tur:"poligon"`
(§2). Kutu bloğu (≈ satır 87), aynı biçimde `dolgu: false` satırı eklenir.

### ③ `misir-sudan-22-paralel-1899` — 🔴 `senin-kararin`, tek başıma kapatmam

```
pencere : 1899-01-19 → 1914-12-18   = 5 812 gün ≈ 16 yıl
kutu    : lon 24.0–37.0 · lat 20.0–24.0
madde   : H-0148
```
Bu kayıtta dolgunun **taşıdığı bilgi gerçek ve başka yerde yok**:
22. paralel Mısır–Sudan sınırıdır, gerçekten düz bir hattır ve ölçüme
göre o kuşakta yerleşim noktası yok denecek kadar az (H-0064 ölçümü:
`Gilf el-Kebîr` SAHİPSİZ, `Cağbûb` tek Osmanlı noktası). Dolgu
kapatılırsa Mısır ile Sudan arasındaki ayrım haritadan tümüyle düşer.

Kusurlu olan **paralelin kendisi değil, kutunun doğu–batı kenarları**
(24°E ve 37°E) ve kuzey kenarı (24°N): bunlar coğrafyada karşılıksız.

**Seçenekler (hüküm koordinatörün / Emre'nin):**
- **a)** `dolgu:false` — dikdörtgen gider, Mısır–Sudan ayrımı da gider.
- **b)** kutuyu **denize ve gerçek sınıra** oturt: batı kenarı 25°E
  (Sudan–Libya düz sınırı, gerçek), doğu kenarı Kızıldeniz kıyısına,
  kuzey kenarı Mısır'ın boyalı gövdesinin içine düşmeyecek kadar yukarı.
  Kenarların üçü de o zaman ya deniz ya mevcut sınır olur ⇒ yapay kenar
  görünmez. **Önerim bu.**
- **c)** `tur:"poligon"` + kıyı izleyen `nokta_dizisi` (§2) — en doğrusu,
  en pahalısı.

⚠️ `b)` bir **coğrafi hüküm**dür ve `§4 kaynak kuralı` gereği kaynağa
dayanmalıdır; 25°E Sudan–Libya sınırı için kaynak **bende yok**
(`bulunamadı`). Bu yüzden kendi başıma yazmıyorum.

---

## 2. Kalıcı çare — kod zaten hazır, veri eksik

`js/app.js:7346` `_cKapsamaPoligonu`:

```js
if (kapsama && kapsama.tur === "poligon" && kapsama.nokta_dizisi) {
  return kapsama.nokta_dizisi.map(function (p) { return [p.lon, p.lat]; });
}
if (kapsama && kapsama.kutu) return _cBboxPoligonu(kapsama.kutu);
```

Yani **poligon dalı çalışır durumda**; eksik olan üç kayıt için
kıyı/sınır izleyen `nokta_dizisi`. Kural basit ve sınanabilir:

> **Kapsama poligonunun her kenarı ya denizde ya mevcut bir devlet
> sınırında bitmeli.** Kara üstünde biten her kenar ekranda yapay bir
> çizgi olarak görünür — kusur tam budur.

---

## 3. Sınıfı bir daha doğurmamak için — öneri

`arac/denetle.py`ye (ya da `denetle_yayin.py`ye) tek soruluk bir kapı:

> `data/hukuki_sinirlar.js`'te `kapsama.kutu` taşıyan **ve** `dolgu`
> alanı `false` olmayan her kayıt, ekranda eksen hizalı opak bir
> dikdörtgen çizer. Böyle kayıt sayısı > 0 ise **beyan** istenir.

**Alet hazır ve koşuyor: `denetim/HARITA-0076-kutu-kapisi.py`**
(çıkış 0 = temiz, 1 = dikdörtgen çizen kayıt var).

```
C kaydı · kutu taşıyan        : 5
MUAF (dikdörtgen çizmez)      : 2
    ⚪ karlofca-bosna-sava-1699      — dolgu:false
    ⚪ ferhad-pasa-1590-sinir-hatti  — poligon dalı
🔴 OPAK DİKDÖRTGEN ÇİZEN      : 3
    🔴 midye-enez-1913
    🔴 misir-sudan-22-paralel-1899
    🔴 ii-erzurum-sattularap-1847
```

**İki yönde sınandı** (CLAUDE.md §11): pozitif yönde üçünü de buluyor;
negatif yönde `dolgu:false` taşıyan kaydı ve poligon dalındaki kaydı
**bulmuyor**. Sayı tarayıcıda çizilen gövdelerle ayrıca karşılaştırıldı,
ikisi tutuyor.

⚠️ Alet iki kez yalan söyledi, ikisi de yazılı duruyor: ① `kapsama`
bloğunu sabit 1400 karakterle kesince bir sonraki kaydın `kutu:`sunu
yuttu; ② `'kutu:' in blok` testi `odak_kutu:` alanını da yakaladı.
Öngörü "3" demişti, alet "4" dedi — ikisinde de kusur **alette**ydi.
`denetim var ≠ o soruyu soruyor`.

---

## 4. Uygulama sırası uyarısı

Bu yama `data/hukuki_sinirlar.js`e dokunur. Kalıcı çare (§2) ve §3'teki
kapı `js/app.js` ile `arac/denetle.py`ye dokunur; ikisi de başka
oturumların dosya ailesi (`SINIR-CIZGI-0076` → `js/app.js`).
M-5023'ün kuralıyla yamayı ben ürettim, **uygulama sırası koordinatörde.**
