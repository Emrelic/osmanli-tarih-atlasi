# NAPOLYON-MISIR-0070 — Mısır'ın Fransız işgali haritada doğru mu? (H-0002)

Oturum: SEFER-OK-0070 (Opus) · 20 Eylül 2026 · koordinatör 1.MURAT (sevk M-4724)
Şartname: `oturumlar/DALGA-0070.md` §5 · görsel `ClaudEmre/kutu/giden/parti-emrelic-0070/H-0002-1.png`
Ölçüm aleti: `denetim/ARAC-NAPOLYON-MISIR-0070.py` · ham çıktı `denetim/OLCUM-NAPOLYON-MISIR-0070.json`
Yama önerisi: `denetim/YAMA-NAPOLYON-MISIR-0070.json` — **veriye YAZILMADI**

---

## 1. Emre'nin görseli ne gösteriyor

Görselin künyesi **1798-07-01**. O kesitte taralı (işgal altında) görünenler:
İskenderiye çevresi, Kahire–Benhâ, **Süveyş ve bütün Sina yarımadası**, **Asyut–Deyrut
(Yukarı Mısır)**. Yani Fransız ordusunun karaya çıktığı gün Mısır'ın üç ayrı ucu
işgal altında çiziliyor.

## 2. ÖLÇÜM — veri ne diyor

Mısır + Sina kutusunda (lat 21–32,5 · lon 24–36,5) **70 yerleşim**, bunların
**8'inde** 1797–1802 penceresine değen işgal kaydı var.

| Yerleşim | f | t | d | kaynak alanı |
|---|---|---|---|---|
| İskenderiye · Kahire · Reşîd · Dimyat · Süveyş · Asyut · Sina güneyi | **1798-07-01** | **1801-10-09** | fransa-cumhuriyet | **"kahire"** |
| El-Arîş | 1799-02-18 | 1799-11-17 | fransa-cumhuriyet | "aris" |

Yedi kayıt **tek blok**: aynı gün başlıyor, aynı gün bitiyor, hepsinin dayanağı
TDV'nin **Kahire** maddesi. Sekizincisi (El-Arîş) ayrı yazılmış ve doğru.

Kesit sayıları: 1798-07-01 → 7 işgal · 1798-07-24 → 7 · 1799-02-20 → 8 · 1801-09-02 → 7.
Yani atlas, işgalin **yayılma sürecini hiç göstermiyor**: ilk günden son güne sabit.

## 3. KAYNAK — fiilî denetim ne zaman nereye ulaştı

TDV birincil (§4), kapsamadığı tanecikte akademik kaynak (Fondation Napoléon'un
*Correspondance générale* kronolojileri, Fayard 2005/2009 ciltleri).

| Olay | Gün | Kaynak |
|---|---|---|
| Marabout koyuna çıkarma | 1 Temmuz 1798 | NAPO-2 |
| **İskenderiye'nin alınışı** | **30 Haziran 1798** (TDV) · 2 Temmuz (NAPO-2) | TDV iskenderiye / NAPO-2 |
| **Kahire'nin teslimi** | **22 Temmuz 1798** (giriş 24 Temmuz) | NAPO-2 |
| Fayyum'un denetime girmesi (Sediman) | 7 Ekim 1798 | NAPO-2 |
| **Süveyş limanının işgali** | **8 Kasım 1798** | NAPO-2 |
| Asvan (Yukarı Mısır'ın güney ucu) | 1 Şubat 1799 | NAPO-2 |
| **El-Arîş** | **18 Şubat 1799** (TDV) · 20 Şubat (NAPO-2) | TDV aris / NAPO-2 |
| El-Arîş'in geri alınışı | 17 Kasım 1799 | TDV aris |
| **Kahire'nin kapitülasyonu** (Belliard) | **27 Haziran 1801** | NAPO-3 |
| **İskenderiye'nin kapitülasyonu** (Menou) | **31 Ağustos 1801** | NAPO-3 |
| Ordunun Fransa'ya dönüşünün başlaması | 2 Eylül 1801 | NAPO-3 |

**Çelişkiler bildiriliyor, gizlenmiyor:** İskenderiye'de TDV 30 Haziran, NAPO-2
2 Temmuz diyor → §4 gereği TDV esas alındı. El-Arîş'te TDV 18, NAPO-2 20 Şubat
diyor → veride zaten TDV günü yazılı, dokunulmadı.

**TDV'nin gün VERMEDİĞİ yerler** (D211 ⑧ — rakamın gövdede geçmemesi ölçülmüş bir
sonuçtur): `kahire` (yalnız "1798'de"), `suveys` (yalnız kanal çalışmaları),
`asyut` (Fransız işgali gövdede yok), `dimyat` (yalnız yıl), Mısır'daki
**Reşîd için TDV'de madde yok**.

## 4. HÜKÜM — haritadaki işgal YANLIŞ, üç ayrı sınıfta

1. **Anakronizm (kesin):** 1798-07-01'de Süveyş, Asyut ve Sina Fransız denetiminde
   değildi. Süveyş 8 Kasım 1798, Yukarı Mısır Ekim 1798 – Şubat 1799, Sina'nın
   kanıtlı tek noktası El-Arîş 18 Şubat 1799.
2. **Sahte kesinlik:** yedi kaydın günü tek bir maddeden (TDV kahire) türetilmiş;
   o madde zaten gün vermiyor. `kaynak:"kahire"` alanı dayanağı OLMAYAN bir gün
   için dayanak gösteriyor.
3. **Desteksiz kayıt:** "Sina güneyi" işgali için okunan hiçbir kaynakta tek cümle
   yok. (TDV'nin `tûr` maddesi Hz. Mûsâ'nın dağı hakkında — şehir maddesi değil.)

## 5. YAMA ÖNERİSİ — `denetim/YAMA-NAPOLYON-MISIR-0070.json`

| Yerleşim | Öneri | Güven |
|---|---|---|
| İskenderiye | f 1798-07-01 → **1798-06-30** · t 1801-10-09 → **1801-08-31** | iki uç da kaynaklı |
| Kahire | f → **1798-07-22** · t → **1801-06-27** | iki uç da kaynaklı |
| Süveyş | f → **1798-11-08** · t → 1801-06-27 (Kahire kapitülasyonundan **devralındı**, kaynaksızlığı yazılı) | f yüksek |
| Sina güneyi | **kayıt kaldırılsın** (ya da El-Arîş penceresine daraltılsın) | karar Emre'de |
| Asyut | **beklesin** — 1798-07-01'in yanlışlığı kesin, doğru gün bulunamadı | bulunamadı |
| Reşîd (Rosetta) | **beklesin** — TDV'de madde yok, NAPO-2'de giriş yok | bulunamadı |
| Dimyat | **beklesin** — TDV yalnız yıl veriyor; 1798-07-01 sahte kesinlik, 1798-01-01 pencere dışı | bulunamadı |
| El-Arîş | **dokunulmadı** — TDV ile birebir uyuyor | doğru |

🔴 Uydurma yapılmadı: gün bulunamayan üç kayıt DEĞİŞTİRİLMEDİ, `bulunamadı`
olarak yazıldı (§4).

### 5.1 UYGULANDI — 1.MURAT hükmü (M-4731), 20 Eylül 2026

Yama `data/yerlesimler.js`e işlendi. Uygulayıcı betik tam eşleşme sayısını önce
ölçtü (7 blok kayıt), sonra değiştirdi; `replace` körlemesine çalıştırılmadı (§11).

| Kayıt | Yeni hâli |
|---|---|
| Kahire | `f:"1798-07-22" t:"1801-06-27"` + NAPO-2/NAPO-3 alıntılı `kaynak` |
| İskenderiye | `f:"1798-06-30" t:"1801-08-31"` + TDV alıntısı + NAPO-2 çelişkisi yazılı |
| Süveyş | `f:"1798-11-08" t:"1801-06-27"` + **"gün komşudan: Kahire kapitülasyonu 1801-06-27 · NAPO-3"** (§4 şartlı devralma; zincirleme devralma yok) |
| Sina güneyi | işgal kaydı **KALDIRILDI**; gerekçe `not:` alanına yazıldı |
| Dimyat · Asyut · Reşîd | gün DEĞİŞMEDİ; `kaynak` alanına **"🔴 İŞGAL GÜNÜ BULUNAMADI … 1798-07-01 mevcut kayıttır ve KAYNAĞI YOKTUR … alt sınır 1798-06-30"** beyanı eklendi (sahte kesinlik artık işaretli) |

**Yayılma ölçüldü — atlas artık süreci gösteriyor** (`ARAC-NAPOLYON-MISIR-0070.py`):

| Kesit | Önce | Sonra |
|---|---|---|
| 1798-07-01 | 7 | **4** (İskenderiye + 3 beyanlı borç) |
| 1798-07-24 | 7 | 5 (Kahire eklendi) |
| 1799-02-20 | 8 | 7 (Süveyş + El-Arîş eklendi) |
| 1801-09-02 | 7 | 3 (Kahire ve İskenderiye teslim oldu) |

### 5.2 DENETİM — `py arac/denetle.py` önce/sonra

| Ölçüt | Önce | Sonra |
|---|---|---|
| Değişmez 1 | 3921 yerleşim, 299 sahipsiz | **aynı** |
| Değişmez 2 | 587 kırılma, 0 açık | **aynı** |
| Değişmez 2s | 1418 kırılma, 183 açık (tavan 195) | **aynı** |
| **Değişmez 2i** | 125 İŞGAL kırılması, **1 açık** (tavan 3) | **130 kırılma, 3 açık (tavan 3)** |
| Değişmez 2t | 1 (tavan 42) | aynı |
| Genel | temiz | **temiz** |

🔴 **İki yeni açık işgal kırılması — kronolojide madde YOK** (madde YAZILMADI,
bildiriliyor; koordinatör hükmü M-4731 §4):

| Kırılma | Yerleşim | En yakın madde |
|---|---|---|
| **1801-06-27** | Kahire, Süveyş | 87 gün uzakta (Vehhâbîlerin Kerbelâ baskını) |
| **1801-08-31** | İskenderiye | 39 gün uzakta ("Mısır'ın Fransızlardan tahliyesi", 1801-10-09) |

Sebebi açık: eski veri bütün işgali **tek bir güne** (1801-10-09) bağlamıştı ve o
günün maddesi vardı — senkron "tam" görünüyordu çünkü gerçek iki teslim günü
atlasta hiç yoktu. Gereken iki madde (kaynağı hazır):
* **27 Haziran 1801** — General Belliard'ın Kahire'deki kapitülasyonu (NAPO-3)
* **31 Ağustos 1801** — Menou'nun İskenderiye'deki kapitülasyonu (NAPO-3)

⚠️ **Tavan tam sınırda (3/3).** Bu iki madde yazılana kadar yeni bir açık işgal
kırılması Değişmez 2i'yi ihlale düşürür.

### 5.3 İKİ MADDE YAZILDI — kırılmalar kapandı (M-4735)

Yeni dosya: **`data/olaylar_misir1801.js`** → `window.OLAYLAR_MISIR1801`
(2 madde). `index.html` satırı **eklenmedi** — koordinatör ekler; `denetle.py`
`olaylar*.js` glob'uyla okuduğu için denetim bağlanmadan da görüyor.

| Madde | Gün | Kırılmayı kapattığı yerleşimler |
|---|---|---|
| Kahire'nin Fransızlardan teslim alınması — Belliard'ın kapitülasyonu | 1801-06-27 | Kahire, Süveyş |
| İskenderiye'nin Fransızlardan teslim alınması — Menou'nun kapitülasyonu | 1801-08-31 | İskenderiye |

**Kaynak (§4):** TDV'de karşılık **bulunamadı ve bu ölçüldü** — `misir`
maddesinin gövdesinde 1801 yılı geçmiyor, `kahire` ve `iskenderiye` maddeleri bu
iki teslime gün vermiyor. Akademik kaynak künyesiyle yazıldı: Fondation Napoléon,
*Correspondance générale… tome 3 — Pacifications, 1800-1802* kronolojisi;
alıntılar gerçekten açılan gövdeden (27 juin · 17/21/31 août · 2 septembre).

**Öngörü önce yazıldı** (`denetim/ONGORU-MISIR1801-0070.md`), sonra ölçüldü:

| Ölçüt | Öngörü | Ölçülen |
|---|---|---|
| Değişmez 2i açık | 1 | **1** ✓ (kalan 1878-09-18 Bihaç/Ostrovica) |
| Değişmez 2i kırılma | 130 | 130 ✓ |
| Değişmez 2 · 2t · 1 | aynı | aynı ✓ |
| Değişmez 2s açık | aynı (183) | **180** ✗ (öngörü tutmadı, yön iyi; tavan 195) |
| Genel | temiz | **temiz** |

🔴 Ara adımda bir ihlal doğdu: maddeler inince `mükerrer madde` ölçütü 1 şüpheli
çift verdi (ikisi benim maddelerim — aynı yıl, ortak başlık kalıbı). Denetimin
kendi talimatıyla çift `arac/denetle.py`nin `BILINEN_AYRI` kümesine gerekçesiyle
yazıldı (iki şehir, iki ay ara, iki kumandan, **veride iki ayrı `isg:`
kırılması**). Başlıkları benzemesin diye değiştirmek tercih edilmedi — o,
denetimi metinle atlatmak olurdu. `arac/denetle.py` paylaşılan dosya: commit
koordinatörde.

## 6. ÖLÇÜLEMEYEN

- **Kırsal yayılım:** kutuda yalnız 8 işgal noktası var; petek motoru sahipliği en
  yakın noktadan türettiği için tek bir "Sina güneyi" kaydı bütün yarımadayı
  boyuyor (CLAUDE.md §2: "harita yanlış" raporunda ilk soru — o bölgede nokta var
  mı?). Görseldeki geniş taralı alanların bir kısmı kayıt hatası değil **nokta
  seyrekliğidir**; Reşîd, Menzile, Benhâ, Feyyûm gibi noktalar eklendikçe gösterim
  incelir. Ayrı sevk.
- 1801 tahliyesinin şehir şehir günleri (Dimyat, Reşîd, Süveyş): okunan
  kaynaklarda yok.

---

## 7. İKİNCİ KALEM — mükerrer ok (koordinatörün sevki, M-4724)

"Abdülaziz'in Avrupa seyahati (1867)" iki dosyada:

| Dosya | Satır | Yol | Kaynak |
|---|---|---|---|
| `data/savaslar.js` | 995 | **5 nokta** (İstanbul → Paris → Londra → Viyana → İstanbul), düz hat | yok — kendi yorumu "ara duraklar uydurulmadı" diyor |
| `data/seferler_p0037.js` | — | **20+ nokta**, günü günüre istasyonlu (Çanakkale, Messina, Napoli, Toulon, Marsilya, Lyon, Paris, Boulogne, Dover, Londra, Calais, Brüksel, Koblenz, Nürnberg, Passau, Viyana, Peşte…) | iki hakemli çalışma (dosya başında künyeleriyle) |

`seferler_p0037.js` kendi başlığında bunu **zaten söylüyor**: *"savaslar.js:743'teki
kaydın YERİNE GEÇECEK tam hâlidir … İki yol da olur; ikisi birden OLMAZ (mükerrer
ok)."* Sonradan dosya `index.html`e bağlandı (satır 1257) ama `savaslar.js`teki eski
kayıt **düşürülmedi** — mükerrer buradan doğdu.

**Önerim:** `data/savaslar.js`teki 5 noktalı kayıt (satır 995–997) düşürülsün;
`SEFERLER_P0037` kalsın. Gerekçe: kaynaklı ve 4 kat ayrıntılı olan odur, ve
dosyanın kendi sözleşmesi bunu emrediyor. `savaslar.js` paylaşılan dosya —
**dokunmadım**, uygulama koordinatörde.

📌 Not: çizim tarafındaki mükerrerlik bu teslimde zaten kapatıldı (`js/app.js`
`seferGuncelle` aynı uçlu+aynı günlü oku TEK çiziyor, `denetim/SEFER-OK-0070.md`
§2.6). Yani harita artık iki ok çizmiyor; ama **veride iki kayıt duruyor** ve
hangisinin kalacağı bir veri kararıdır.
