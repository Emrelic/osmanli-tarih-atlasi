# KUNYE-UYGULA-0930 — şartname (228 künye · 419 maddeyi görünür kılar)

> 🔴 OKU: `CLAUDE.md` (özellikle §3.5 "Denetimin görmediği sınıflar") → bu
> dosya. Model Opus.

## Durum — iki ayrı şey aynı eksikte kilitli

29 Eylül'de 16 paket **228 künye kalemi** çıkardı: eksik devlet, ömrü
yanlış künye, eşanlam, tür-ad çelişkisi. Hiçbiri `data/devletler.js`e
uygulanmadı. `KUNYE-BIRLESTIR-0929` bir uygulayıcı da yazdı:
`denetim/ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py`

🔴 **Ve bu eksik, yazılmış 419 kronoloji maddesini GÖRÜNMEZ tutuyor.**
30 Eylül ölçümü (`denetim/YETIM-KRONO-0930.json`): 12 kronoloji dosyası
index.html'e bağlanamadı, çünkü maddelerinin künye atıfları
`devletler.js`te YOK — dosya yüklense bile `cokTarafliKronolojiEkle`
eşleşmeyeni sayıp ATAR. Tutmayan id'ler arasında:
`epir-despotlugu` · `ukrayna-halk-cumhuriyeti` · `ukrayna-devleti-1918` ·
`yeni-ispanya-ilk-donem` · `tahiri` · ve Gürcistan'da 7 tane.
Ayrıca canlı konsolda 4 tane daha: `trablus-cumhuriyeti` ·
`kunduz-hanligi` · `kuca-hocalari` · `nagpur-bhonsle`.
⇒ Künyeler inince o 12 dosya AYNI kapıdan geçirilip bağlanacak.

## Dosya sahipliği
| Dosya | Durum |
|---|---|
| `data/devletler.js` | **SENİN** — bu gece başka kimse yazmıyor |
| `denetim/KUNYE-UYGULA-0930.md` · `-RED.md` | **SENİN** |
| `arac/renkler.py` | 🔴 DOKUNMA — koordinatörde (etiket düzeltmeleri bende) |
| `data/kronoloji*` `data/yerlesimler*` | 🔴 DOKUNMA |

## 🔴 Üç kural — üçü de bu deponun kendi vakasından

**① "KİMLİK YOK" DEMEDEN `devletler.js` TARANIR.** Tahmin edilen id
aranmaz; `bolge:` alanı da taranır. Türkçe küçültme tuzağı için
`denetim/ARAC-NORMAL-0903.py`. (`D205` · `D215`)

**② KÜNYE AŞIMININ ÜÇ SINIFI VAR ve çareleri TERS** (`D205`):
```
① devlet öldü            → dönemi KISALT
② aynı polity sürüyor    → künyeyi GENİŞLET
③ ardıl yapı geçti, toprak dolu → ARDIL KÜNYE aç
```
🔴 **İlk iş düzeltme değil SINIFLANDIRMA.** Kısaltmak ③'te harita deliği
açar; ardıl künyenin penceresi de TUTMALI. Üç haneli yıl dizgi
karşılaştırmasında `pad()` şart.

**③ HAYALET DEVLET** (`D203`): yeni künyenin `f`/`t`'si o devletin gerçek
ömrü olmalı. Kaynak yoksa `bulunamadı` yaz — uydurma. Künyenin `f:`/`t:`
günü bir KAYNAK DEĞİLDİR (`D210`).

## Sıra
```
① 16 `*-0929-KUNYE*` dosyasını oku, 228 kalemi tek listede topla
② her kalemi ÜÇ SINIFTAN birine sok (yukarıdaki ②)
③ `ARAC-KUNYE-BIRLESTIR-0929-UYGULA.py`yi OKU — ne yapıyor, güvenli mi?
   🔴 Körü körüne koşturma; ne yazdığını gör, gerekirse kendi kapını yaz.
④ uygula · `node --check data/devletler.js`
⑤ 🔴 ÖNCELİK: yukarıda adı geçen 13 id'yi MUTLAKA kapat — onlar 419 madde
   ve 4 canlı uyarı demek. Ötekiler sıraya girer.
⑥ teslimden ÖNCE BİR KEZ `py arac/denetle.py`
```
⚠️ `denetle.py` tepe 2,4 GB ölçüldü ve makinede boş RAM ~1,2 GB. Koşturmadan
önce `tasklist | findstr python` ile başka bir denetim koşuyor mu BAK.

## Teslim
TEK tahta mesajı: kaç künye açıldı · kaç genişletildi · kaç kısaltıldı ·
kaç red (sebebiyle) · 13 öncelikli id'den kaçı kapandı · `denetle.py` ne
diyor. Sonuna **"bekçiyi öldürdüm, duruyorum"**.
