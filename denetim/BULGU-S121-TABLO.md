# BULGU — SONNET HAZIR KITA 121 — ⑨ `§1.5` TABLO FARKI

Görev: `oturumlar/DAGITIM-0902-AKSAM.md` §⑨. `py arac/durum_tablosu.py`
(`--yaz` KULLANILMADI) çıktısı ile `CLAUDE.md §1.5`'teki tablo satır satır
karşılaştırıldı.

## ① ÖLÇTÜM

```bash
py arac/durum_tablosu.py     # --yaz yok, yalnız ekrana bastı
```

Çıktı, `CLAUDE.md:75-90` (mevcut `§1.5` tablosu) ile **satır satır, karakter
karakter karşılaştırıldı — FARK SIFIR.** 13 satırın 13'ü birebir eşleşiyor
(başlıklar, sayılar, ✓/✗ işaretleri, altındaki dipnotlar dahil):

```
Yerleşim              2663 nokta, 69 girdi dosyası        = tablo
Kronoloji             1289 madde · 1237 duygu · 1194 yer_id · 28 vefat_id = tablo
Değişmez 1            ✓ 2663 yerleşim, 219 sahipsiz        = tablo
Değişmez 1b           ✗ BEYANSIZ boşluk 1, beyanlı 3/3     = tablo
Değişmez 2            ✓ 534 kırılma, 0 açık                = tablo
Değişmez 2s           ✓ 994 YABANCI · 75 açık · 173 kapsam dışı = tablo
Değişmez 2i           ✗ 26 İŞGAL, 4 açık                   = tablo
Değişmez 2t           ✓ kırılmasız madde 18                = tablo
Konum denetimi        0 nokta dışarıda                     = tablo
Devletler dizini      438 künye · 403 renk                 = tablo
Dizinsiz harita kim.  ✓ 0/0, kapsam 69 dosya               = tablo
Kasıtlı boşluk kim.   🟡 1 kimlik / 2 pencere               = tablo
Renkli-künyesiz kim.  ✓ 0                                  = tablo
Padişah·kartvizit     41·36·41                             = tablo
Harita penceresi      box(-180,-60,180,85)                 = tablo
Yayın                 r4776 · 5a6de08                       = tablo
```

## ÇIKARIM (ayrı satır — ölçümden bağımsız okunsun)

**Fark bulamamamın sebebi kendim ölçtüğüm için değil: tablo benden önce
zaten güncellenmiş.** `git log -- CLAUDE.md` şunu gösteriyor:

```
e9322b9  2026-09-02 16:14:06  Emrelic
  "1.5 TABLOSU URETILDI — alti sayida bayatti, ve iki oturum BAGIMSIZ olctu"
  → OPUS HAZIR KITA 124 ve OPUS HAZIR KITA 128, ikisi de bağımsız
    `durum_tablosu.py` çağırdı, aynı altı sayıya vardı, Emre `--yaz` ile
    commit'ledi.
```

Yani `oturumlar/DAGITIM-0902-AKSAM.md`'deki **"DEVRALDIM — DOĞRULANMADI"**
öncülü (*"§1.5 tablosu bayat (2663/69 dosya vs 2624/63)"*, kaynak
PAKET-0035-0902 M-2162) **① 1.MURAT'ın dağıtımı yazdığı ANDA doğruydu**
② **benim ölçtüğüm ANDA artık geçerli değil** — araya e9322b9 girmiş.

**Damga: ÇÜRÜDÜ** — ama teşhis hatası değil, **zamanlama**: `§11`'in
*"bir bilgi ölçümden önce doğru olabilir, ölçüm anında bayatlamış
olabilir"* ailesinin bir vakası daha. Öncülü taşıyan (PAKET-0035-0902 →
1.MURAT) yanılmadı; arada üçüncü bir oturum zemini değiştirdi.

## ② BULAMADIM

`§1.5` tablosunda **hiçbir fark yok** — aranacak bir şey kalmadı, iş bu
haliyle kapalı.

**Ek gözlem (istenmedi ama aynı komuttan geldi):** `durum_tablosu.py`
çalışırken 3 UYARI bastı — şema alanı `BILINEN_ALANLAR`de tanımsız:
```
'baskent'     1 kayıt   yerlesimler_amerika2.js: Comanchería (Güney Büyük Ovalar)
'ikiz'        4 kayıt   yerlesimler.js: Budin, Peşte, Anadolu Hisarı…
's.kesinlik'  2 kayıt   yerlesimler.js: Vidin · yerlesimler_ok106.js: Kızıkermen
```
`ikiz` zaten `DAGITIM-0902-AKSAM.md`'nin "KİMSENİN ALMAYACAĞI İŞ" listesinde
("girdi.py BILINEN_ALANLAR'a `ikiz` eklenmesi — koşu bitince"), yani
bilinen bir borç. **`baskent` ve `s.kesinlik` o listede YOK** — yazım hatası
mı yeni şema alanı mı, ÖLÇMEDİM (kapsamım dışında, `arac/`e dokunmadım).

## ③ NE İSTİYORUM

- `§1.5` tarafında ek iş yok — görev **kapandı**, tekrar tablo yazımı GEREKMİYOR
  (zaten güncel, ve kök `*.md` yazımı 1.MURAT'ın kendi kararı/dosyası).
- `baskent` ve `s.kesinlik` uyarılarını **koşu bitince** (arac/ kilitliyken
  dokunulmaz) 1.MURAT'ın "bende kalanlar" listesine eklemesini öneririm —
  `ikiz` ile aynı kovada, aynı koşuda toplu çözülsün.
- Bana yeni iş için tahtaya "boştayım" yazıyorum.

Dosya: `denetim/BULGU-S121-TABLO.md` (bu dosya) — yalnız kendi dosyam,
başka hiçbir şeye dokunmadım.
