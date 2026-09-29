# HARİTA ETİKETİ ZAMANSIZ — yapısal bulgu + bekletilen yama

Koordinatör: YILDIRIM BAYEZIT · 30 Eylül 2026, 03:30
Doğuran: `AVRUPA-TEYID-0082` (H-0052 · H-0079 · H-0082 · Danimarka bulgusu)

---

## 1 · Bulgu — üç "etiket hatası" aslında TEK yapısal eksik

AVRUPA-TEYID üç anakronik harita etiketi buldu:

| kimlik | bugünkü etiket | kusur |
|---|---|---|
| `danimarka` | "Danimarka-Norveç" | 1814-01-14'ten sonra **Norveç yok** |
| `almanya` | "Kutsal Roma / Almanya" | 1806-1871 arası **Alman Konfederasyonu** |
| `ferrara` | "Ferrara Dukalığı" | 1598'den sonra Ferrara **papalık**; Este devleti = Modena ve Reggio |

Üçünü de "düzeltmek" için `renkler.py`ye gittim ve şunu ölçtüm:

```python
BOYALAR = { "danimarka": ("Danimarka-Norveç", "#b484e7"), ... }
#            kimlik    →  (ETİKET, RENK)
```

🔴 **Şema `{kimlik: (etiket, renk)}` — ZAMAN BOYUTU YOK.** Bir kimliğin tek
bir etiketi vardır ve 1281'den 1923'e kadar aynı kalır.

⇒ Üçü de "etiket yanlış yazılmış" değil, **"etiket zamana bağlanamıyor"**.
Aynı kusur sınıfı: bir kimliğin ömrü boyunca adı değişen HER devlette
tekrar eder. Tek tek düzeltmek, üçünü de sonraki dönemde yeniden yanlış
yapar — çünkü hangi etiketi seçersen seç, ömrün bir yarısında yanlıştır.

## 2 · İki yol, ve niçin bu gece HİÇBİRİ uygulanmadı

**(a) NÖTR ETİKET** — her dönemde doğru olan tek ad:
```
danimarka : "Danimarka-Norveç"     → "Danimarka"
ferrara   : "Ferrara Dukalığı"     → "Este Devleti"
almanya   : "Kutsal Roma / Almanya" (zaten bileşik, en az kötüsü)
```
Ucuz, anakronizmi kaldırır, ama bilgiyi de kaldırır: 1800'de "Danimarka"
yazan etiket, Norveç'in orada olduğunu SÖYLEMEZ.

**(b) ZAMANLI ETİKET** — `BOYALAR` değerine dönem listesi eklemek:
```python
"danimarka": ("Danimarka-Norveç", "#b484e7",
              [{"t": "1814-01-14", "ad": "Danimarka"}])
```
Doğrusu bu. Ama `BOYALAR`ı okuyan her yer (motor · `durum_tablosu.py` ·
`renk_olc.py` · arayüz) üçlü/dörtlü demeti karşılamalı — **ölçülmedi.**

## 3 · 🔴 NİÇİN UYGULAMADIM — kuralın kendi vakası

`arac/renkler.py` **motorun tuzundadır** (`CLAUDE.md §9.1`): dosyanın
sha256'sı değişirse BÜTÜN önbellek anahtarları değişir ve tam yeniden inşa
gerekir. Ölçülmüş vaka aynı bölümde yazılı:

> *"24 Eylül'de koordinatörün kendisi `girdi.py`ye dokunup 279 MB'lık
> önbelleği öldürdü — aynı sabah şartnameye 'motorun tuzuna dokunulmaz'
> yazdıktan sonra."*

Ve §9.1 maddesi 2 ne yapılacağını da söylüyor: *"Biriken motor yamaları TEK
SEFERDE girer, tuz bir kez değişir… Yamalar `denetim/*.diff` olarak
bekletilir."*

📌 Bu gecenin koşusu zaten başlamadı (bellek). Tuzu şimdi kırmak,
başlamayacak bir koşu için önbelleği öldürmek olurdu.

## 4 · Karar Emre'nin — ve sayısı burada

| şık | bedel | ne kazanır / ne kaybeder |
|---|---|---|
| (a) nötr etiket | 3 satır, bir sonraki tam inşa koşusunda | anakronizm gider · dönem bilgisi de gider |
| (b) zamanlı etiket | `BOYALAR` okuyan HER yer ölçülmeli + koşu | doğrusu · ölçülmemiş iş |
| (c) dokunma | 0 | üç etiket yanlış kalır |

**Önerim (b)** ama ayrı bir pakete: bu, üç etiketin işi değil, "devletin adı
zamanla değişir" diye bir boyutun işi — ve atlasın tamamını ilgilendiriyor
(künye adları zaten `f`/`t` taşıyor, etiket taşımıyor).

## 5 · Öteki bekleyen motor kalemi — aynı partiye

`ARAYUZ-0082` bu gece **yeni bir sınıf** ölçtü: 0,05° sahiplik ızgarasının
kenarı gövdeye sızıyor (`uret_petek.py:1190` "IZGARA SINIR ÇİZMEZ" Özi'de
tutmuyor; 1774'te 2.085/175.847 gövde kenarı, Özi'de köşelerin %14,8'i
ızgara çizgisinde — rastlantı ~%4). Bu da motor kalemi ve tam inşa istiyor.

⇒ **Bir sonraki tam inşa koşusu üç yükü birden taşımalı:**
① çöl kelepçesi + bantlar (`MOTOR_COL_UFUK_SAAT=56 MOTOR_UFUK_BANT=40,56,80`)
② etiket kararı (a ya da b)
③ ızgara sızması yaması
Üçü ayrı ayrı koşarsa üç kez 5 saat ödenir.
