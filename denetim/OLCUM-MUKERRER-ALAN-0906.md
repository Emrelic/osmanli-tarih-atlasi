# MÜKERRER ALAN — **5 kayıt**, ve beşinde de bir DÜZELTME sessizce kayboluyor

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ YAZILMADI** (koşu 7b sürüyor).
> Aletler: `denetim/ARAC-MUKERRER-ALAN-0906b.js` (tarama) ·
> `denetim/ARAC-MUKERRER-FARK-0906.js` (bedel).

---

## ⓪ NİÇİN ARANDI

`Honolulu` kaydında iki `s:` bulundu ve bu, `_sahiplik_uygula.py`nin
**"KAPSAM DARALDI"** korumasını kör bıraktı. Soru: *bu bir tek vaka mı,
bir sınıf mı?*

## ① 🔴 ALETİN BİRİNCİ SÜRÜMÜ BOZUKTU — kaydı burada

Naif bir süslü-parantez sayacı **322 kayıt** dedi. Doğrulandı, **yanlış**:
*"Akkirman ve Kili → `yerlesimler.js:346`"* diyordu, oysa o satırda
Mora/Modon var ve `ad:` **yalnız bir**. Sayaç yorumları ve dizgi içindeki
parantezleri ayırt etmiyordu ⇒ bitişik kayıtları birleştirip **sahte ×2**
üretiyordu. **Alet silindi, sayı raporlanmadı.**

🟢 **v2**: regex ya da sayaç değil, **karakter karakter çözümleyici** —
dizgi (`' " \``), kaçış, satır yorumu ve blok yorumu ayrı izleniyor;
anahtar yalnız kaydın **üst düzeyinde** toplanıyor.
**İki yönde sınandı:**
```
① bilinen vaka (Honolulu) BULUNDU        ✓
② bilinen sahte pozitif (Akkirman/Kili)  0 ✓
```

---

## ② ÖLÇÜM — 4668 kayıt tarandı, **5'i mükerrer alan taşıyor**

```
Honolulu             [yerlesimler_4ff22b.js:82]     kaynak×2, s×2
Mersin               [yerlesimler_ek27.js:51]       s×2, d×2
Yagodina (Jagodina)  [yerlesimler_ek29.js:405]      s×2, d×2
Yedisan bozkırı      [yerlesimler_ek_bozkir.js:109] s×2
Şırnak               [yerlesimler_ok109.js:149]     s×2, d×2
```

## ③ 🔴🔴 BEŞİNİN BEŞİ DE AYRIŞIYOR — ve desen TEK

**Mekanizma:** bir yama `ad:` satırına `s:`/`d:` **eklemiş**, ama aşağıdaki
**eski** yazım silinmemiş. JavaScript ve `json.loads` **son anahtarı** alır
⇒ **düzeltme kaybolur, eski değer kazanır.**

```
Şırnak    İLK (düzeltme) d:1891→1920-04-23 · s:1920-04-23→1923 tbmm-turkiye
          SON (eski)     d:1891→1923-10-29 · s: BOŞ
          🔴 TBMM KATMANI TAMAMEN KAYIP
Mersin    İLK  s: … + tbmm-turkiye 1921→1923
          SON  s: tbmm YOK
Yagodina  İLK  d: 1459→1689-09-24 | 1690-09-09→1717   (Habsburg işgali AYRI)
          SON  d: 1459→1717                            (işgal YOK)
Yedisan   İLK  kirim → 1783-04-19      SON  kirim → 1792-01-09
Honolulu  İLK  s: yalnız abd 1898→1923  SON  + hawaii-kralligi 1795→1898
          (burada SON doğru — tek ters vaka)
```

## ④ 🔴 VE BU, ŞU ANDA KOŞAN ÜRETİMİ ETKİLİYOR

`girdi.py` ile ölçüldü — **motor da son yazımı okuyor**:
```
py … girdi.yukle() → Şırnak   d:[{1891-01-01 → 1923-10-29}]   s:[]
```
⇒ **Koşu 7b, Şırnak'ı 1923'e kadar doğrudan Osmanlı çiziyor; TBMM yok.**
Öteki dördü de düzeltmesiz.

⚠️ **KOŞUYU ÖLDÜRMEDİM** ve gerekçesi ölçülü: 3805 noktanın **5'i**
(%0,13), koşu 3,2 saattir çalışıyor, ve `data/` donuk olduğu için
düzeltmek çıktıyı **yayınlanamaz** yapar. `CLAUDE.md` beş boşa giden
üretim kaydediyor; altıncısını bu sebeple açmıyorum.
🔴 **Ama bu KARAR Emre'nindir** — bildiriyorum: *"bu koşunun çıktısında
beş nokta düzeltmesiz olacak."*
📌 `§11`: *"çıktı girdinin bir tur gerisindedir ve bu bir kusur değil bir
GECİKMEdir — ama gecikme KAYITSIZSA kusurdan ayırt edilemez."* Bu satır
o kayıttır.

---

## ⑤ ÇARE — ve niçin `yer_yama_` DEĞİL

Kusur bir yamanın eksikliği değil, **taban dosyada mükerrer bir anahtar**.
Çare: her kayıtta **eski (son) yazımı sil**, düzeltmeyi bırak.
```
Şırnak · Mersin · Yagodina · Yedisan  → SON yazım silinir (eski değer)
Honolulu                              → İLK yazım silinir (`ad:` satırındaki
                                         yarım uygulama; doğru olan SON)
```
⚠️ Honolulu **ters yönde** — hangisinin doğru olduğu vaka vaka ölçülür,
kural *"hep ilkini tut"* ya da *"hep sonuncuyu tut"* **değildir.**

🔴 `data/` donuk ⇒ koşu bitince uygulanır.

---

## ⑥ 📌 DERS — ve bunu kayıt KENDİSİ yazmış

`Mersin`in `neden:` alanında, benden önce biri şunu yazmış:
> *"Aynı düzeltme `yerlesimler_ek27.js:51`'e yazılmış ama **MÜKERRER
> `s:`/`d:` yüzünden JS'te sonuncusu kazanıyor ve düzeltme motora hiç
> girmiyordu.**"*

⇒ **Kusur teşhis edilmiş, yazılmış, ve DÜZELTİLMEMİŞ.** Bir `neden:`
metnine yazılan teşhis, hiçbir aletin sorusu değil — `§11`in *"bir ders
veriye SERBEST METİN olarak inerse inmiş sayılmaz"* dersinin ta kendisi.
🟢 Çare: bu tarama `denetle.py`ye katılacak — o zaman `if` ile sorulabilir.

🔜 **BORÇ:** `denetle.py`ye iki denetim birden —
`ARAC-ALAN-TIPI-0906.js` (alan tipi) ve `ARAC-MUKERRER-ALAN-0906b.js`
(mükerrer alan). İkisi de bugün doğdu, ikisi de gerçek kusur buldu,
ikisi de `arac/` donuk olduğu için henüz katılmadı.
