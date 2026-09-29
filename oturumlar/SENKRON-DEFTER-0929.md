# SENKRON-DEFTER-0929 — şartname

> 🔴 ÖNCE OKU: `CLAUDE.md` + [`oturumlar/KRONO-DUNYA-0929-ORTAK.md`](KRONO-DUNYA-0929-ORTAK.md)
> Dalga 1 · model Opus · **DARBOĞAZ PAKETİ** — Dalga 2'nin beş paketi senin defterini bekliyor

## Amaç

Emre: *"harita ile senkronize olmasını sağlasın."*

Haritada toprak değişiyor ama hiçbir kronoloji maddesi bunu açıklamıyor.
`denetle.py` bunu **sayıyor** ama **dökmüyor** — sen dökeceksin. Çıktın, on bir
kardeş paketin iş listesi olacak: *"senin coğrafyanda şu 37 kırılmanın maddesi yok."*

## 🔴 Dosya sahipliği — BUNLARIN DIŞINA YAZMA

- `denetim/SENKRON-DEFTER-0929.md` — raporun
- `denetim/SENKRON-DEFTER-0929.json` — ham defter (bölge kırılımlı)
- `denetim/ARAC-SENKRON-DEFTER-0929.py` — ölçen betiğin

🔴 **`arac/denetle.py`ye DOKUNMA.** O tek kapıdır ve paylaşılandır. Onu
**içe aktar** (`sys.path.insert(0,'arac'); import denetle`) ve işlevlerini ÇAĞIR.
🔴 **`data/` altına hiçbir şey yazma** — sen ölçüyorsun, madde yazmıyorsun.

## Ölç — 29 Eylül 2026 taban ölçümü ŞU (`py arac/denetle.py`)

```
Değişmez 2s ✓  1666 YABANCI kırılması · 180 AÇIK (tavan 195)
               786 KAPSAM DIŞI · 158 YIL-TEMSİLÎ BORÇ
Değişmez 2  ✓  591 kırılma, 0 açık
Değişmez 2i ✓  139 İŞGAL kırılması, 1 açık (tavan 3)
Değişmez 2t ✓  kırılmasız madde: 11 (tavan 42)
```

**① ÜÇ KOVAYI AYRI DÖK.** `denetle.py:4476-4480` bu üç kovayı şu sırayla üretir:
`degismez2(...,("s",))` → `kapsam_disi(Y, acik_ham)` → `yil_temsili_ayir(...)`.
Her kovanın **her kaydını** çıkar; `--ayrinti` yalnız ilk 10'u basıyor.

| Kova | Sayı | Anlamı (kapının kendi tanımı) |
|---|---|---|
| `AÇIK` | 180 | ±30 günde madde VAR ama o madde kırılan **yeri/tarafları anmıyor** |
| `KAPSAM DIŞI` | 786 | Osmanlı küresine 300 km'den uzak — *"maddesi bu kronolojide OLAMAZ, yazılmamış DEĞİL"* |
| `YIL-TEMSİLÎ` | 158 | kırılma `YYYY-01-01` — günü bilinmiyor |

🔴 **`KAPSAM DIŞI`ı "borç" diye raporlama.** Kapı temiz. Bunlar çekirdeğin işi
DEĞİL — **ülke kronolojilerinin** işi. Senin defterin tam bunu söyleyecek:
*"bu kırılma çekirdeğe ait değil, `kronoloji_<ülke>.js`e ait."*

**② BÖLGEYE BÖL.** Her kaydı §8'deki on bir pakete ata. Ölçüt uydurma —
ölçülebilir olsun (kırılan yerleşimin koordinatı, `s:`teki devlet kimliği,
künyenin coğrafyası). Bir kayıt iki pakete düşüyorsa **ikisine de yaz**, hangisinin
birincil olduğunu söyle.

**③ YOĞUNLUK.** Kırılmaların kaçı **aynı güne** düşüyor? (Bir fetih dalgası 40
yerleşimi aynı gün çevirir; o **bir** maddeyle kapanır, 40 maddeyle değil.) Bu
sayı olmadan paketler "şu kadar madde yazmam gerek" diye yanlış hesap yapar.
🔴 **Bu ölçüm işin en değerli parçası olabilir** — gün gruplaması yapılmazsa
786 kırılma "786 madde gerekiyor" gibi okunur ve bu muhtemelen yanlıştır.

**④ ÇAPRAZ.** `Değişmez 2t`nin 11 kırılmasız maddesi (tavan 42) ile `AÇIK` 180'in
kesişimi var mı? Ve `2i`nin 1 açık işgal kırılması hangisi?

## Çıktı biçimi

```json
{ "olcum_ani":"2026-09-29T…", "denetle_surum":"<git rev-parse --short HEAD>",
  "kova": { "acik":180, "kapsam_disi":786, "yil_temsili":158 },
  "paket": { "KRONO-BALKAN-B-0929": {
      "kayit": [ {"gun":"…","yerlesim":"…","kimlik":"…","kova":"kapsam_disi",
                  "km":420.0,"gun_grubu":"<aynı güne düşen kaç kırılma>"} ],
      "ayri_gun": 37, "toplam_kirilma": 122 } } }
```

## 🔴 Öngörü — ölçmeden ÖNCE yaz

`CLAUDE.md §11`: *"Öngörü ölçümden önce yazılır."* Raporunun başına, dökümü
almadan önce şunu yaz: **786 kırılma kaç AYRI GÜNE düşüyor sanıyorsun, ve en çok
kırılma hangi pakete çıkacak?** Sonra ölç, tuttu mu yaz. Tutmadıysa **niçin**
tutmadığı, tutmasından daha değerlidir.

## Teslim

Tek tahta mesajı, üçlü kural + rapor yolu. Sonuna: **"bekçimi öldüreyim mi?"**
⏱️ Dalga 2'nin beş paketi bunu bekliyor — **bölge kırılımı** çıkar çıkmaz ara
mesaj at, tam raporu sonra bitir.
