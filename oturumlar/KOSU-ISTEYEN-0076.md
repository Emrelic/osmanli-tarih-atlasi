# KOŞU İSTEYEN — `parti-emrelic-0076` · koordinatörün biriktirme defteri

> Bu gece hiçbir işçi `data/`ye yazmıyor. Nokta/hat/boya isteyen her bulgu
> **buraya** düşer; paket kapanınca `yerlesimler*.js` tek elden işlenir, sonra
> **tek koşu**. `arac/` donuk kaldığı sürece koşu ~23 dakika (22 Eylül ölçümü).
> Kaynak: tahta mesajları. Her satırın yanında kimin ölçtüğü yazılı.

---

## 🔴 Eklenecek yerleşim noktaları — SINAVDAN SAĞ ÇIKANLAR

⚠️ **Buraya bir ad yazılmadan önce `denetim/KRONO-0076-B-olc5.py` sınıfından
bir aramadan geçirilir.** Sebebi aşağıdaki "geri alınanlar" bölümü.

### Şarkî Rumeli — 13 kaza merkezi · `H-0081` · ölçen: `KRONO-0076-B`
```
Yeni Zağra · İslimye (Sliven) · Burgaz · Hasköy · Kızanlık · Çırpan
Ahyolu · Mesemvri · Sozopol · Karinabad · Aydos · Rupçoz · Ahiçelebi
```
**Havuzda ZATEN olan:** Filibe · Eski Zağra · Tatarpazarcığı · Yanbolu · Kırcaali.
📌 Emre'nin *"doğru mu"* sorusunun cevabı ölçüldü: haritadaki şekil vilâyet
sınırı **değil**, o beş noktanın Voronoi'sidir. Doğu yarısı (Burgaz–Ahyolu–
Mesemvri kıyı şeridi + İslimye–Yanbolu havzası) **noktasız** — `CLAUDE.md §2`.

### Refah–Taba hattı · `H-0103` · ölçen: `KRONO-0076-B`
```
Refah · Taba · Akabe · Nahl · Bi'rüssebi · Kuseyme     (altısı da YOK)
```
**Havuzda olan:** El-Ariş · Gazze · Süveyş.
📌 Hat **çizili** (`d1906-filistin-misir-hidivlik`, f:1906-10-01 · t:1914-12-18,
kategori E) — yani Emre'nin tahmini doğruydu; eksik olan hattın **tarif ettiği
uçlar**.

### Tunus–Trablusgarp · `H-0082` · `H-0087` · ölçen: `KRONO-0076-B`
```
Râs Ecdîr (hattın Akdeniz ucu, 1886 düzenlemesinin konusu) · Sinâven
Dehîbat · Remâda
```
**Havuzda olan:** Ğadâmis · Derc · Nâlût · Zuvâre · Bin Gerdân.

---

## 🔴 NOKTA İLE ÇÖZÜLMEYEN — hat kaydı işi
**1886 ve 1892 Tunus–Trablusgarp düzenlemeleri için `d_sinirlar*` kaydı SIFIR.**
Çizilen en eski hat `d1910-libya-tunus-osmanli` (f:1910-05-19). Kronoloji iki
kez *"sınır çizildi"* diyor, harita **24 yıl** boyunca hiçbir şey göstermiyor.
⇒ Bu bir hat kaydı işi; nokta eklemek çözmez. `H-0082` · `H-0087`.

---

## ✅ GERİ ALINANLAR — "yok" hükmü ÇÜRÜDÜ, nokta EKLENMEYECEK

🔴 **Bu bölüm bu dosyanın en önemli yeri.** İkisini de ben *"koşu isteyen"*
diye işaretlemiştim; `KRONO-0076-B` M-5024'ü okuyup süzgecini sınadı ve
**kendi ölçümünü çürüttü** — nokta eklenseydi mükerrer yerleşim doğacaktı
(`§11` · *yakın mükerrer yerleşim*).

| ad | "yok" sanılma sebebi | gerçek |
|---|---|---|
| **Eski Zağra** | literal `ad:"Eski Zağra` arandı | kayıt PARANTEZLİ: `"Eski Zağra (Stara Zagora)"` · 42.425 / 25.633 · `kid:"sarki-rumeli"` |
| **Ğadâmis** | baş harf `G` ile arandı | kayıt `Ğ` ile · `yerlesimler_afrika.js`. `Derc (Derj)` de var |

📌 Arama kördü, veri değil. Süzgeç artık 9 pozitif vakayla **önce ateşleniyor**
(9/9 OK) ve parantezli adlar iki anahtarla indeksleniyor
(`"Eski Zağra (Stara Zagora)"` → `eski zagra` + `stara zagora`).
Havuz: 9418 ad anahtarı · 6292 kayıt anahtarı. Alet:
`denetim/KRONO-0076-B-olc5.py`. `YASALAR B9`nin tam karşılığı.

---

## ✅ HARİTA YANLIŞ DEĞİL — ölçüldü, iş çıkmadı

**`H-0070` · Mehdî'nin Doğu Sudan'a "uçakla mı geldiği"** — `KRONO-0076-B`
`s:` kırılmalarını batıdan doğuya sıraladı:
```
Kordofan (Ubeyyid) 30,2°  → 1882-09-07     Berber   34,0° → 1884-05-01
Kordofan           29,5°  → 1882-09-07     Hartum   32,6° → 1885-01-26
TOKAR              37,7°  → 1884-01-01     Dongola  30,5° → 1885-01-26
                          (enklav:true)    Sennâr · Kesela · Fâşoda → 1885-01-26
```
⇒ 1884-01-01 ile 1884-05-01 arasında Mehdî'nin doğuda tek noktası Tokar,
batıda Kordofan; arası hâlâ Mısır. **Harita bitişiksizliği DOĞRU gösteriyor**
ve zaten `enklav:true` ile beyan edilmiş. Cevap: uçakla gelmediler, doğudaki
ayaklanma yereldi. ⚠️ Tokar'ın `1884-01-01` günü `YYYY-01-01` dolgusudur —
kaynağa soruluyor.
