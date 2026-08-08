# NOKTA HALKA-2 **2** — ilerleme notu (Avrupa Rusyası + Nogay/Kazak bozkırı)

> ⚠️ Bu dosya niçin ayrı: şartname `oturumlar/NOKTA-HALKA2.md`ye yazmamı
> söylüyor, ama o dosyayı **ÜÇ oturum birden** okuyor ve `CLAUDE.md §7`
> tam bu deseni *"sessiz veri kaybı"* diye yasaklıyor. Kendi adımla ayrı
> dosya açtım; koordinatöre bildirildi.

- **Çıktı dosyam:** `data/yerlesimler_h2_rusya.js`
- **Kutum:** lon 28-60, lat 45-68
- **Ölçüm aletim:** scratchpad'de, `denetle.py`yi İÇE AKTARIR (değiştirmez)

---

## ① TABAN — şartnamedeki sayı yanlıştı

Şartname §② *"45 nokta · yoğunluk 12,3"* diyor. Ölçülen:

```
bolge                              nokta    kara km2   yogunluk   25 icin
TUM KUTUM   lon28-60 lat45-68         83   4.682.907      17,7       +35
  Karadeniz kusagi  lat45-48          28     652.231      42,9        +0  ✅
  Orta Rusya        lat48-56          38   1.950.251      19,5       +11
🔴 Kuzey Rusya      lat56-68          17   2.080.426       8,2       +36
  Bati (Dnyeper)    lon28-40          53   1.688.604      31,4        +0  ✅
🔴 Dogu (Volga-Ural) lon40-60         30   2.994.303      10,0       +45
```

📌 **Ve ortalama yanıltıyor.** Kutumun batı-güney çeyreği (halka 1'in kuyruğu)
zaten tabanın üstünde. Delik tek parça değil, **iki blok**: kuzey ve doğu.
Şartnamenin tek sayısı bu ikiliği gizliyordu. Hedefi kutuya değil **iki bloğa**
kilitledim; doygun çeyreğe tek nokta eklemedim.

---

## ② EN ÖNEMLİ KISIT — `Değişmez 2s` TAM TAVANDA

`denetle.py`: **121 AÇIK / tavan 121 · sıfır boşluk.**
⇒ Yeni bir kırılma **GÜNÜ** açan her nokta denetimi kırar.
Şartname bunu söylemiyordu; ölçerek bulundu ve koordinatöre bildirildi
(halka-2'nin öteki iki oturumunu da bağlar).

**Çözüm:** bütün geçişler külliyatta **zaten var olan** kırılma günlerinden
seçildi. `kur:` bir kırılma değildir (çekirdeğin kendi kuralı: Perm kur:1723 ·
Saratov kur:1590 · Ufa kur:1574, hepsinin `s:`i 1281'den başlar) ⇒ **45 yeni
şehir 2s'ye tek gün bile eklemedi.**

### 🔴 Yaptığım hata ve dersi — "hangi kovada?"

1500-01-01'i *"külliyatta zaten var"* diye seçtim (Emba · Üstyurt kullanıyor).
Alet **121 → 123** dedi. Sebep: ikisi de `yerlesimler_asya.js`te, yani
**KUYRUKTA**; 2s sayacı ÇEKİRDEĞİ ölçüyor (`denetle.py:1589`).

> **"Bu gün külliyatta zaten var" YETMİYOR — HANGİ KOVADA olduğu da sorulmalı.
> Aynı gün kuyrukta varken çekirdekte yoktur.**

Nogay Ordası'nın doğuşu için çekirdeğin kendi günü kullanıldı (1441-01-01 —
Penza · Borisoglebsk · Tambov). 2s katkım **2'den 1'e** indi.

---

## ③ TESLİM — 83 → 171 nokta (+88)

```
bolge                             ONCE  SONRA    kara km2  yog ONCE  yog SONRA
TUM KUTUM   lon28-60 lat45-68       83    171   4.682.907      17,7       36,5  ✅
  Karadeniz kusagi  lat45-48        28     32     652.231      42,9       49,1  ✅
  Orta Rusya        lat48-56        38     72   1.950.251      19,5       36,9  ✅
🔴 Kuzey Rusya      lat56-68        17     67   2.080.426       8,2       32,2  ✅
  Bati (Dnyeper)    lon28-40        53     83   1.688.604      31,4       49,2  ✅
🔴 Dogu (Volga-Ural) lon40-60       30     88   2.994.303      10,0       29,4  ✅
```
**Altı kutunun altısı da hedefin (25) üstünde.** İki delik bloğu — kuzey 8,2 ve
doğu 10,0 — sırasıyla **32,2** ve **29,4**e çıktı, yani tabanın (50,9) yarısını
aştı. Kutum dışına tek nokta yazılmadı.

---

## ④ DENETİM SONUÇLARI

```
(A) CEKIRDEGE alinirsa   121 → 122   ✗ tavani 1 asar
(B) KUYRUGA alinirsa     121 → 121   ✓ taban DEGISMEZ · benim sayacim 1
```
**İstek (koordinatörde):** dosyam `denetle.py` `KUYRUK_DOSYALARI`na eklensin —
ÇAPRAZ İBERYA'nın Portekiz-Fas partisinde uygulanan yerleşik usul.

Tek kırılmam **Oreşek 1702-10-22**. Yuvarlamadım: Nöteborg'un düşüşü Neva
ağzını açan olaydır, 1721 Nystad'a çekmek **19 yıl uydurmak** olurdu.

### Öteki denetimler
```
Değişmez 1    sahipsiz 114 → 114        ✓
Değişmez 1b   pencere boşluğu 0 → 0     ✓
mükerrer      3 km'den yakın yeni çift  0 ✓
dönem sağlığı sıfır/ters/çakışan        hepsi 0 ✓
kimlik        7 kimliğin 7'si RENKLİ+KÜNYELİ ✓ → §3 ④ ihlali YOK
konum         (aşağıya bak)
```

---

## ⑤ KOORDİNATÖRE BIRAKILAN — cevap beklemeden (a) ile yazıldı

`rusya` 1281'den başlıyor. **Bu çekirdeğin kuralı** (Moskova · Novgorod ·
Ryazan · Tula · Vologda · Pustozersk hepsi böyle) ama **bir `§3.5` hayaletidir**:
`devletler.js`te `rusya` f = 1547-01-16 ⇒ atlas **266 yıl erken** boyuyor.

Doğrusu `novgorod` · `pskov` · `tver` · `moskova` olurdu; **dördü de renksiz**
(`moskova` künyeli ama renksiz). Renksiz kimlik hiç boyanmaz ⇒ **delik**.
**Delik hayaletten kötüdür** ⇒ (a) seçildi, işaretlendi. Renk gelirse dosya
tek geçişte döner.

---

## ⑥ TDV — §4 ② tuzağının ÜÇÜNCÜ ölçülmüş vakası

```
saray         HTTP 200 · <title> "SARAY"  →  madde MİMARÎ SARAY
saray--sehir  HTTP 200                    →  Altın Orda başkenti  ← doğrusu
```
`ordu` / `ordu--sehir` deseninin aynısı. `CLAUDE.md §4` bugün yalnız `ordu`
vakasını sayıyor; bu satır oraya eklenmeye değer (belge Oturum 0'ın).

**🟢 CANLI (200):** `bulgar` · `saray--sehir` · `altin-orda-hanligi` ·
`ak-orda-hanligi` · `astarhan-hanligi` · `kazan-hanligi` · `kasim-hanligi` ·
`sibir-hanligi` · `nogaylar` · `baskurt` · `kalmuklar` · `kazaklar` · `ufa` ·
`tataristan` · `hazarlar` · `ozbekler` · `hive-hanligi` · `orda`

**🔴 ÖLÜ (302):** `altin-orda` · `altinorda` · `altinordu` · `ejderhan` ·
`astarhan` · `idil` · `itil` · `ukek` · `kirim-hanligi` · `kazak-hanligi` ·
`orenburg` · `vyatka` · `perm` · `novgorod` · `pskov` · `moskova` · `kama` ·
`volga` · `yayik` · `idil-bulgar-devleti` · `bulgar--sehir` · `baskurtlar` ·
`kalmuk` · `mangit` · `hacitarhan` · `haci-tarhan` · `astrahan` · `cerdin`

**⚠️ BULUNAMADI (negatif sonuç da sonuçtur):**
- `ukek` — TDV'de müstakil madde yok; `saray--sehir` ve `bulgar` içinde geçiyor
- Beldjamen (Vodyanskoye) — TDV maddesi bulunamadı, arkeolojik kayda dayanıyor
- `kasim` kimliği — TDV maddesi **VAR** (`kasim-hanligi`) ama kimliğin kendisi
  ne renkli ne künyeli ⇒ Kasimov `rusya` yazıldı, koordinatöre bildirildi
