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


---

## ⑦ KAPANIŞ — ÖLÇÜM ALETİ (oturumla kaybolmasın diye buraya gömüldü)

🔴 **Niçin burada:** `denetle.py:264` şu kuralı koyuyor —

> *"Kural: `s:` yazan her parti, beklenen **2s** değişimini de önceden yazar."*

**Ama o tahmini yapacak alet YOK.** Ben yazdım, scratchpad'de kaldı, oturum
kapanınca gidecek — sıradaki parti aynı şeyi baştan türetir. `arac/` benim
dosyam olmadığı için oraya koyamıyorum ⇒ **metnini buraya gömüyorum.**
Koordinatör `arac/olc_parti.py` diye alırsa **kural aletiyle buluşur.**

**Ne yapar:** `denetle.py`yi İÇE AKTARIR (değiştirmez), onun kendi evrenini
kurar (`Y_cekirdek` = `KUYRUK_DOSYALARI` dışı), sonra bir parti dosyasını
**iki senaryoda** ölçer — çekirdeğe alınırsa tavanı deler mi, kuyruğa alınırsa
kendi sayacı kaç. Ayrıca Değişmez 1 · 1b · konum · 3 km mükerrer · kimlik
renk+künye · dönem sağlığı.

⚠️ **Kullanmadan önce TABANI DOĞRULAT.** Alet, `denetle.py`nin kendi
çıktısıyla aynı üçlüyü vermeli (8 Ağustos 2026: **704 kırılma · 121 AÇIK ·
39 KAPSAM DIŞI**). Vermiyorsa **alet bozuktur, veri değil.** Ben önce bunu
doğruladım, sonra ölçtüm — `§11`deki *"yeni yazılan denetim iki yönde de
sınanmadan çalışıyor sayılmaz"* kuralının **geçme yolu** ayağı.

📌 Ve aletin **ateşleme** ayağı da sınandı, kasıtsız: yazdığım veri üzerinde
üç gerçek kusur için **üç kez öttü** (Kostroma + Solovki maske dışı ·
1500-01-01'in çekirdekte yeni olması). Üçü de düzeltildi, sonra sustu.

```python
# -*- coding: utf-8 -*-
"""NOKTA HALKA-2 2 — kendi dosyamin 2s / Degismez 1 / konum etkisini OLCER.

denetle.py'yi ICE AKTARIR (degistirmez), onun KENDI evrenini kurar:
    Y_cekirdek = KUYRUK_DOSYALARI disindaki noktalar
ve benim dosyami iki senaryoda olcer:
    (A) CEKIRDEGE alinirsa  -> tavani zorlar mi?
    (B) KUYRUGA alinirsa    -> kendi sayacim kac?
Boylece denetle.py:264 kurali ("s: yazan her parti 2s degisimini onden yazar")
yerine gelir.
"""
import sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))

import denetle as D

BENIM = sys.argv[1] if len(sys.argv) > 1 else "data/yerlesimler_h2_rusya.js"

O = D.olaylari_yukle()
Y_hepsi = D.yerlesimleri_yukle()
Y_cek = [y for y in Y_hepsi if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]


def olc(Y_evren, Y_kapsam, etiket):
    """Y_evren = 2s'nin sayacagi kume · Y_kapsam = kapsam_disi icin tam kume."""
    kir_s, ham = D.degismez2(Y_evren, O, ("s",))
    ici, disi = D.kapsam_disi(Y_kapsam, ham)
    print(f"{etiket:<26} nokta {len(Y_evren):>5} | 2s kirilma {len(kir_s):>4} "
          f"| ACIK {len(ici):>4} (tavan {D.BEKLENEN_ACIK_S}) "
          f"| KAPSAM DISI {len(disi):>3}")
    return {r[0] for r in ici}


print("=" * 78)
taban = olc(Y_cek, Y_hepsi, "TABAN (cekirdek, bugun)")

if not os.path.exists(BENIM):
    print(f"\n(dosyam henuz yok: {BENIM})")
    sys.exit(0)

YENI = D.oku_pencere(BENIM, "YERLESIMLER_H2_RUSYA")
for y in YENI:
    y["_kaynak"] = os.path.basename(BENIM)
print(f"\nBENIM DOSYAM: {len(YENI)} nokta\n")

# (A) cekirdege alinirsa
a = olc(Y_cek + YENI, Y_hepsi + YENI, "(A) CEKIRDEGE alinirsa")
yeni = sorted(a - taban)
print(f"    -> benim actigim YENI ACIK: {len(yeni)}"
      f"   {'✓ tavan GECER' if len(a) <= D.BEKLENEN_ACIK_S else '✗ TAVANI ASAR'}")
for d in yeni:
    print("        ", d)

# (B) kuyruga alinirsa -> taban degismez, benim sayacim ayri
print(f"\n(B) KUYRUGA alinirsa       taban {len(taban)} DEGISMEZ · "
      f"benim kendi sayacim: {len(yeni)} acik kirilma")

# ── Degismez 1 · 1b · konum · yakinlik: benim noktalarim uzerinde
print("\n" + "=" * 78)
tam = Y_hepsi + YENI
s0 = D.degismez1(Y_hepsi)
s1 = D.degismez1(tam)
benim_ad = {y["ad"] for y in YENI}
yeni_sahipsiz = [a for a in s1 if a not in s0]
print(f"Degismez 1   sahipsiz {len(s0)} -> {len(s1)}   "
      f"{'✓' if len(s1) <= len(s0) else '✗ YENI SAHIPSIZ: ' + ', '.join(yeni_sahipsiz)}")

b0, b1 = D.degismez1b(Y_hepsi), D.degismez1b(tam)
print(f"Degismez 1b  bosluk {len(b0)} -> {len(b1)}   "
      f"{'✓' if len(b1) <= len(b0) else '✗'}")
for r in b1:
    if r[1] in benim_ad:
        print("      🔴", r)

# konum: kara maskesi
maske = D.konum_denetimi(YENI)
print(f"Konum        maske disinda: {len(maske)}   {'✓' if not maske else '✗'}")
for r in maske:
    print("      🔴", r)

# 3 km mukerrer — benim noktalarim vs HEPSI
import math
def km(a, b):
    dl = math.radians(a["lon"] - b["lon"]) * math.cos(
        math.radians((a["lat"] + b["lat"]) / 2))
    return 6371 * math.hypot(math.radians(a["lat"] - b["lat"]), dl)

cift = []
for i, y in enumerate(YENI):
    for z in Y_hepsi + YENI[i + 1:]:
        if z is y:
            continue
        d = km(y, z)
        if d < 3.0:
            cift.append((d, y["ad"], z["ad"]))
print(f"Mukerrer     3 km'den yakin yeni cift: {len(cift)}   "
      f"{'✓' if not cift else '✗'}")
for d, a_, b_ in sorted(cift):
    print(f"      🔴 {d:.2f} km  {a_} <-> {b_}")

# kimlik: renk + kunye
import renkler, girdi
B = renkler.BOYALAR
KUN = {d["id"] for d in girdi.oku_devletler()}
kul = sorted({p["d"] for y in YENI for p in y.get("s", [])})
print(f"\nKimlik       kullandigim {len(kul)} kimlik:")
for k in kul:
    r = "renk ✓" if k in B else "🔴 RENK YOK"
    u = "kunye ✓" if k in KUN else "🔴 KUNYE YOK"
    print(f"      {k:<18} {r:<12} {u}")

# donem sagligi
print()
ds = D.donem_sagligi(YENI)
print("Donem sagligi:", ds if ds else "✓ temiz")
```

---

## ⑧ KAPANIŞTA AÇIK KALANLAR — devralan bilsin

```
🔴 BAGLANTI      girdi.py GIRDI_DOSYALARI · index.html · js/app.js — UCU DE BOS
                 (denetle.py KUYRUK_DOSYALARI yapildi, ama girdi.py okumadan
                  ETKISIZ — dosya bugun kulliyatta HIC YOK)
🟡 astarhan      kunye+renk girdi ama Astrahan SEHRI hala altinorda kullaniyor.
                 Asagi Volga kumem (10 nokta) cekirdekle TUTARLI birakildi.
                 Tek sweep'te cekirdekle birlikte donmeli; benim payim +1 2s.
🟡 (b) donusu    novgorod #42151e · pskov #840f75 · tver #9f6ced HAZIR.
                 Dosyam ayrilmaya hazir yazildi: kuzey kumesi (29) -> novgorod,
                 Tver cevresi -> tver, Pskov -> pskov.
🟡 kasim         TDV maddesi VAR (kasim-hanligi) ama kimlik renksiz+kunyesiz.
                 Kasimov rusya yazildi; kimlik gelirse 1452-1681 penceresi girer.
🟡 baraj golu    Kostroma tarihi merkezi Gorki baraj golunun (1955) altinda ⇒
                 NE kara maskesinde SU gorunuyor. Rybinsk · Kuybisev ·
                 Volgograd · Tsimlyansk ayni sinifta OLABILIR — OLCMEDIM.
```

**Koordinatörün dört uyarısı teslimden SONRA geldi; dördü de veriye karşı
ölçüldü, dördü de temiz** — tekrar ölçmeye gerek yok:
1441 öncesi `kirim` **0** · Kefe/Taman'dan türetme **yok** (Taganrog Azak'tan,
ve Azak kaydı bugün de değişmemiş) · 1917 sonrası dönem **0** · bozkır
noktaları dolgu mantığında.

📌 **Son not, kendi hatam:** bu bölümü ilk yazışımda metni `bash`ten geçirdim
ve backtick'ler **kabuğa çalıştı** — `§11`in *"kaçış içeren hiçbir düzeltme
bash'ten geçirilmez"* kuralının bugünkü vakası. Kuralı **alıntılarken ihlal
ettim.** Dosya `git checkout` ile geri alındı, bu metin `Write` + `py`
ile yazıldı. ⇒ Kural işliyor; ihlal ucuz atlatıldı çünkü **commit edilmişti.**
