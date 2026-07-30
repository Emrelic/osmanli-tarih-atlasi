# Oturum 2 — denetim katmanı · ilerleme

**Son güncelleme:** 30 Temmuz 2026
**Dosyalarım:** `arac/denetle*.py` · `denetim/` · bu dosya. Başkasına yazmadım.

---

# İkinci tur — 30 Temmuz (merkez oturumun 4 maddesi)

| # | İş | Durum |
|---|---|---|
| 1 | Yeni denetim — **sürüm damgası** | ✅ `arac/denetle_yayin.py` · `denetim/DAMGA-2026-07-30.md` |
| 2 | **Mükerrer denetimi neden kaçırdı** — eşiği ölçerek ayarla | ✅ `arac/denetle.py` · `denetim/MUKERRER-ESIK-2026-07-30.md` |
| 3 | Yeni denetim — **statü tutarlılığı** (`d:`↔`v:` sıçraması, işgal `s:` mi `v:` mi) | ✅ `arac/denetle_statu.py` · `denetim/STATU-2026-07-30.md` |
| 4 | Sekizinci denetim — **anakronizm** | ✅ önceki turda bitti: `arac/denetle_anakronizm.py` · `denetim/ANAKRONIZM-2026-07-30.md` |

Ayrıca önceki turda istenmeden çıkan: **görünürlük denetimi**
(`arac/denetle_gorunurluk.py` · `denetim/GORUNURLUK-2026-07-30.md`) — bir kırılma
kullanıcının ekranında gerçekten değişiyor mu.

## 1 — sürüm damgası

`js/` ya da `css/` değişmişse `index.html`'deki `?v=rNN` artmış olmalı.

- Son 30 commit: 6 commit kod değiştirmiş, **3'ünde damga artmamış, üçü de gerçek**
  (`591a5c6`, `b8e4794` = merkez oturumun bildirdiği r83 vakası; `cbbc0b9` yeni).
  **Yanlış alarm 0/3.** Bu denetimin öznel eşiği yok, sayım var.
- İki soru sorar: geçmişte kim unuttu (bilgi) ve **şu anda çalışma ağacında kod
  değişik ama damga aynı mı** (ihlal, çıkış kodu 1). İkincisi commit'ten **önce**
  uyarır — asıl değeri orada.

## 2 — mükerrer denetimi: eşik suçlu değil, rapor suçlu

Merkez oturum "Âli Paşa'nın 1871 vefatı iki madde, eşiği ölçerek ayarla" dedi.
Ölçüldü:

- **Âli Paşa çiftinin gerçek Jaccard'ı = 0.125** (eşik 0.34).
- Yer gerçeği olarak `SİLİNDİ` yorumlarından **27 doğrulanmış mükerrer çift**
  çıkarıldı. Dağılım: min 0.000 · orta 0.222 · **max 0.333** — yani **hiçbiri**
  eşiğin üstünde değil. Eşik "biraz yüksek" değil, başlık benzerliği bu sınıfı
  ilkesel olarak göremiyor.
- **Eşiği düşürmenin bedeli ölçüldü:** hepsini yakalayan eşik 0.15 ve orada
  **207 çiftin 182'si yanlış** (%88). Eşik **0.34'te bırakıldı.**
- Asıl kusur triyaj: **27 gerçek çiftin 27'si zaten yakalanıyordu** (zayıf ölçüt:
  ortak kişi + ±3 gün) ama liste 57 çiftti, %47 kesinlikti, ihlal sayılmıyordu ve
  özet çıktıda yalnız ilk 8'i basılıyordu.
- **Yeni kademe** (dört aday arasından ölçülerek seçildi): *aynı GÜN + ortak kişi
  + (aynı kaynak slug | başlık J≥0.10 | 3 ortak kişi)* → **İHLAL**.
  Kesinlik 0.96, duyarlılık 0.89. Silme öncesi veride 25 alarm (24'ü yer gerçeği),
  **bugünkü veride 1 alarm.**

### 🔴 Sahibine havale — Pasarofça iki kez yazılmış

Bugünkü tek alarm gerçek bir mükerrer ve benim dosyam değil:

```
1718-07-21  Pasarofça Antlaşması — Lâle Devri                  data/olaylar.js
1718-07-21  Pasarofça Antlaşması — Mora kazanıldı, Belgrad ve   data/olaylar_ek5.js
            Banat kaybedildi
aynı gün · aynı k:"antlasma" · aynı kaynak · 6 ortak kişi · J=0.222
```

Üçüncü bir Pasarofça kaydı hatalar 5 turunda zaten silinmişti; bu ikisi kaldı.
**`denetle.py` bu düzeltilene kadar çıkış kodu 1 verecek** — bilerek: ihlal
kademesi bir şey söylüyorsa iş vardır.

## 3 — statü tutarlılığı: aranan hata yok, ARANMAYAN hata var

`arac/denetle_statu.py` — dokuzuncu denetim. Ölçüm önce, kural sonra.
Rapor: `denetim/STATU-2026-07-30.md`.

- **A) `d:`↔`v:` sıçraması TEMİZ.** 13 bitişik geçişin **0'ı maddesiz** — çünkü
  `d:`/`v:` sınırları zaten Değişmez 2'nin kırılma listesinde. Kaygı yerindeydi,
  bugünkü veri temiz. Tek yeni boyut "madde statüden bahsediyor mu": 1 vaka
  (Modon 1825), **İHLAL değil** — 13 örneklik kümede eşik ayarlanmaz.
- **223 tâbi döneminin 223'ünün `k:` etiketi var.** Eşiksiz şema kuralı olarak
  denetime kondu; altı Sonnet oturumu `v:` yazacak, bekçi ileriye dönük.
- **🔴 B) ASIL BULGU — `s:`→`s:` yabancı devir Değişmez 2'nin KÖR NOKTASI.**
  234 yabancı el değiştirmenin **154'ünün maddesi yok** (%66): 81'i gerçek gün
  taşıyor (tartışılmaz eksik), 73'ü `YYYY-01-01`'e yuvarlanmış. Granada 1492,
  Lehistan taksimleri, Campo Formio 1797 — harita renk değiştiriyor, kronoloji
  susuyor. Sessiz toprak değişiminin yabancı devletlerdeki tam karşılığı.
  **Değişmez 3 deseni uygulandı: bilinen borç + tavan** (81 / 73). Geçmişi
  affeder, geleceği affetmez — tavan aşılırsa çıkış kodu 1.
- **C) İşgal `s:` mi `v:` mi: denetimle çözülmez, KARAR gerekir.** İkisi de
  kullanılıyor: `v:` "(işgal)" 3 dönem, `s:` sandviç 78 dönem. Süreye dayalı bir
  işgal bulucu **%88 yanlış alarm** verir (kısa sandviçlerin 381'i Fetret
  şehzadesi). Envanter olarak bırakıldı.
  ⚠️ `js/app.js:818` üçüncü gösterimi (taralı işgal alanı) **beslenmiyor** —
  `window.ISGALLER` üreticisi yok, katman boş diziyle çalışıyor. Veri
  `yerlesimler.js`'te var ama işgal olduğunu söyleyen alan yok. Öneri: `s:`
  dönemine `isg:1` bayrağı (2. seçenek olan "hepsini `v:`e taşı", Değişmez 3'ün
  `OSMANLI`↔`tâbi` muafiyetini bozar).

Regresyon: üç sentetik hata (etiket silme, `d→v` sıçraması, yeni `s→s` devri)
bellekteki kopyaya enjekte edildi, üçü de yakalandı. `data/` dosyalarına
dokunulmadı.

---

## Bu turda yazılan / değişen dosyalar

```
arac/denetle.py              5. denetim üç kademeli oldu (eşikler DEĞİŞMEDİ)
arac/denetle_yayin.py        damga artışı denetimi eklendi (+ --gecmis)
arac/denetle_statu.py        YENİ — dokuzuncu denetim
denetim/MUKERRER-ESIK-2026-07-30.md   yeni
denetim/DAMGA-2026-07-30.md           yeni
denetim/STATU-2026-07-30.md           yeni
```

⚠️ Önceki turun dosyaları (`denetle_anakronizm.py`, `denetle_gorunurluk.py` ve
dört rapor) **benim commit'imle gitmedi** — Oturum 10 geniş `git add` yapıp
`bc89690`'a ("savaslar.js: 10 yeni ok") süpürdü. İş kayıp değil, commit mesajı
yanlış. Merkez oturum geri almadı; revert daha büyük hasar olurdu.

---

# Birinci tur — 29 Temmuz (harita hata avı)

Ayrıntı: `denetim/BULGULAR-2026-07-29.md` (14 bulgu, kanıt ve tekrarlanabilirlik
komutlarıyla). Uygulanan düzeltmeler yayında (B-1 Fetret boşluğu, B-12 Kilitbahir,
B-9/B-13 renkler). B-5 uygulandı, yanlış çıktı, geri alındı — `s:` çizelgesi
şehrin değil **toprağın** sahibini anlatıyor; asıl sebep motorun `kur:` alanını
okumamasıydı ve o **`b781c2c`'de düzeltildi** (1,7 milyon km²lik hayalet toprak).

## Hâlâ açık bulgular ve sahipleri

| Bulgu | Ağırlık | Sahibi |
|---|---|---|
| **B-2** gövdeler komşunun yerleşimini yutuyor — Bursa fethinden 16 yıl önce Osmanlı, 26 yerleşim | **yüksek** | Oturum 16 (motor) |
| **B-4** bölge çizgileri merkez Osmanlı değilken de çizili — Sana 237 yıl, Tebriz 216 yıl, 44/61 bölge | yüksek | Oturum 16 (motor) |
| B-6/7/8 Jutland, Bretanya, Bender Abbas — yeni yerleşim noktası | orta | Oturum 4 |

**B-2 iki ayrı denetimden bağımsız olarak doğrulandı:** görünürlük denetimi,
Bursa'nın 1326 fethinde boyanan alanın **0,0 km²** değiştiğini ölçtü — nokta
1310'dan beri boyalı olduğu için fetih anı ekranda hiç yaşanmıyor. Kronoloji
"Bursa fethedildi" diyor, harita kıpırdamıyor. Bu, B-2'nin önceliğini yükseltir.
