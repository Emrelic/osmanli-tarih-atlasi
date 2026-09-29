# KRONO-KAFKAS-0929 — şartname (Kafkasya)

> 🔴 ÖNCE OKU: `CLAUDE.md` + [`oturumlar/KRONO-DUNYA-0929-ORTAK.md`](KRONO-DUNYA-0929-ORTAK.md)
> Dalga 1 · model Opus

## Kapsam

| Coğrafya | Bugün | Ölçüm (29 Eylül 2026) |
|---|---|---|
| **Gürcistan** | 🟡 45 madde | 142 anılma · 17 künye eşleşmesi |
| **Ermenistan** | 🔴 dosya YOK | 79 anılma · 11 künye eşleşmesi |

Emre: *"gürcistan ermenistan … kronolojilerini de ayrıca ele alalım."*

⚠️ **Bu paket kasıtlı olarak küçük tutuldu** — ikisi de az anılan (142 ve 79,
bütün listenin en düşükleri) ve kaynak tarafı zor coğrafyalar. Az madde ama
**yüksek keskinlik** beklenen bir paket. İşi bitirip boşalırsan tahtadan söyle,
sana Azerbaycan/Şirvan/Dağıstan kolunu veririm.

## 🔴 Dosya sahipliği — BUNLARIN DIŞINA YAZMA

| Dosya | Global adı | Durum |
|---|---|---|
| `data/kronoloji_gurcistan.js` | `window.KRONOLOJI_GURCISTAN` | **SENİN** — genişlet (45) |
| `data/kronoloji_ermeni.js` | `window.KRONOLOJI_ERMENI` | YENİ |
| `denetim/KRONO-KAFKAS-0929.md` | — | raporun |
| `denetim/KRONO-KAFKAS-0929-YERLESIM-ONERI.md` | — | `s:` önerileri |
| `denetim/KRONO-KAFKAS-0929-DUZELTME.md` | — | mevcut maddelerdeki kusurlar |

## 🔴 MÜKERRER TUZAĞI — yazmadan önce bunları tara

```
data/kronoloji_gurcistan.js       45 madde  ← senin dosyan, ÖNCE BUNU OKU
data/kronoloji_iran.js           107 · kronoloji_safevi.js 81  ← Kafkasya hâkimiyet kavgası
data/kronoloji_iran_ardillari.js 155 madde  ← Afşar/Kaçar, 1800'ler
data/kronoloji_akkoyunlu.js       77 · kronoloji_karakoyunlu.js 70 ← 15. yy Doğu Anadolu
data/kronoloji_altinorda.js       44 · kronoloji_timurlu.js 24
data/kronoloji_rusya.js          173 madde  ← 1801 Kartli-Kaheti ilhakı, 1828 Türkmençay
data/olaylar*.js                1736 madde  ← Osmanlı-Safevi seferleri BURADA
```
⚠️ **KRONO-DOGU-ISLAM-0929** (Dalga 2) İran/Safevi/Akkoyunlu/Karakoyunlu'ya
bakacak; **KRONO-KUZEY-0929** Rusya'ya. Üçü de Kafkasya'yı anıyor. Yatay mesaj
serbest; iş bölümü hükmü bende. Ayrıca canlı bir `NOKTA-KAFKAS-0077` ve
`KAFKAS-KORFEZ-0081` oturumu vardı — çıktıları `denetim/` altında,
`denetim/NOKTA-KAFKAS-0077-tdv-onbellek/` TDV önbelleği **hazır duruyor, kullan.**

## Sana özel — beş uyarı

**① Gürcistan tek devlet değil, ÜÇ+ krallıktır ve bu haritayı doğrudan etkiler.**
```
Kartli · Kaheti · İmereti  (+ Samtshe-Saatabago, Guria, Megrelya, Abhazya)
1490 civarı  birleşik krallık dağıldı
1555 Amasya · 1590 İstanbul · 1612 Nasuh Paşa · 1639 Kasr-ı Şirin
             → Osmanlı-Safevi arasında BÖLÜNDÜ, sınır defalarca değişti
1801-1810    Rusya ilhakları (Kartli-Kaheti 1801, İmereti 1810)
```
🔴 Haritada bu krallıklar ayrı ayrı görünüyor mu, tek "Gürcistan" olarak mı?
`data/devletler.js`te 17 künye eşleşmesi var — hangileri? **Ölç ve söyle;**
künyeye dokunma.

**② Ermenistan 1281-1923 arasında bağımsız bir devlet DEĞİLDİR** (Kilikya Ermeni
Krallığı 1375'te düştü; 1918-1920 Cumhuriyeti kapsamın sonunda).
🔴 **Bu yüzden `window.KRONOLOJI_ERMENI` bir DEVLET kronolojisi değil, bir
COĞRAFYA/TOPLULUK kronolojisidir** ve dosyanın başına bunu **yazacaksın.**
Yoksa okuyucu "devlet yoktu ama kronolojisi var" çelişkisini görür.
İçerik: Kilikya'nın sonu (1375) · Osmanlı-Safevi sınırında Doğu Anadolu ·
Ermeni Patrikliği (1461) · millet sistemi · 1863 Nizâmnâme · 1878 Berlin 61. madde ·
1918-1920 Cumhuriyeti · 1920 Gümrü.
🔴 **20. yüzyıl için özel dikkat:** `CLAUDE.md §4` kırmızı çizgi mutlaktır —
yalnız akademik/kurumsal kaynak, `kaynak:` alanı **açık**, çelişki `ic_not_d:`e.
Rakam ve nitelendirme tartışmalıysa **taraf tutmayın, kaynağı adıyla anın.**
Emin olmadığın yerde madde yazmak yerine `-DUZELTME.md`ye "ölçülemedi" yaz.

**③ Takvim tuzağı.** Gürcü ve Ermeni kaynakları ayrı takvim/erâ kullanır; Rus
kaynakları Jülyen. `VERI-YAPISI.md §59` atlas geleneği Jülyen'dir. Şüphedeysen
`gun:` alanında takvimi yaz.

**④ Ad ekseni.** `CLAUDE.md §4` / `D215`: `Tiflis`↔`Tbilisi`, `Kars`↔`Karin`,
`Erivan`↔`Yerevan`, `Ahıska`↔`Akhaltsikhe`. Kodda `"İ".lower()` iki kod noktası
verir — `denetim/ARAC-NORMAL-0903.py` normalleştiricisini kullan. `yer_id`yi
**atlasın kullandığı yazımla** yaz, yoksa odak çözülmez ve kapı kapanır.

**⑤ Boşalırsan.** İki dosya 45+0 maddeden başlıyor; iş beklediğinden kısa
sürerse **kendi kendine iş arama** (`HAZIR-KITA.md §2` yasak) — tahtadan söyle.

## Sıra ve denetim

`ORTAK.md §6`daki altı adım. Yazdıktan sonra:
```bash
node --check data/kronoloji_ermeni.js
node --check data/kronoloji_gurcistan.js
py arac/denetle.py    &&  py arac/odak_olc.py
```
🔴 `yer_id` uydurma — çözülmeyen `yer_id` yayın kapısını kilitler (0 tolerans).

## Teslim
Tek tahta mesajı, üçlü kural + dosya listesi + commit. Sonuna: **"bekçimi öldüreyim mi?"**
