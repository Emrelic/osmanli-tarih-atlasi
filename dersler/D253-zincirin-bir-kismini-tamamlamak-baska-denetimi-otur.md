# D253 — Zincirin bir kısmını tamamlamak BAŞKA bir denetimi ötür; düzeltme ve tavan AYNI commit'te olmalı

**Tarih:** 1 Ekim 2026 · **Ölçen:** YAZICI KASA PC (denetleme) + koordinatör
**Bağlı kural:** `CLAUDE.md §3` tavanlar · `§3.5` künye aşımının üç sınıfı

## OLGU

Bir kusur düzeltildiğinde o kayıt **daha önce girmediği denetimlerin
evrenine girer** ve orada yeni ✗ üretir. Düzeltme doğrudur; ✗ da doğrudur.
Yanlış olan, ikisini **ayrı commit'e** koymaktır: o zaman denetim "YENİ
KUSUR" diye öter ve bir sonraki oturum olmayan bir gerilemeyi arar.

## ÖLÇÜLMÜŞ İKİ VAKA

### ① Künyesiz kimlik — KASA, 1 Ekim 2026
`denetle.py`nin `degismez4`ü künyeyi yalnız `id` ile eşliyordu; yerleşimin
`s:d` alanı ise künyenin `harita:` boya anahtarını taşıyor. Sonuç: **1131
dönem / 23 kimlik "künyesiz"** sayılıyor ve denetim *"ölçülemedi"* basıyordu.

```
ongoru (olcumden ONCE)   A 8  · B 10 · C 5
olcum                    A 0  · B 22 · C 1
```
- **A = 0** ⇒ gerçekten eksik künye YOK. Bu hiç bir veri borcu değilmiş,
  baştan sona bir **ARAÇ KÖRLÜĞÜ**ymüş.
- 22'sinin 22'si bir künyenin `harita:` alanında birebir geçiyor
  (`avusturya`→`habsburg` 245 dönem · `suleyman-celebi`→`fetret-*` 236 …).

🔴 **Ve düzeltmenin bedeli ölçüldü:** takma ad çözülürse o 1052 dönem bugün
hiç geçmediği denetimlere girer —
```
4c  +3   bosna→bosna-kralligi (künye 1463-05-01): Foça 1465 · Livno 1469 · Herseknovi 1482
4d  +7   sardinya→sardinya-piyemonte (1720) ×3 · arnavutluk→iskenderbey (1443) ×2
         · kaffa→kaffa-kralligi (1390) ×2
4, 4s  0
```
⇒ `degismez4` düzeltmesi ile `BEKLENEN_4C +3` / `BEKLENEN_4D +7` **AYNI
COMMIT'te** olmalı. Ayrı girerse denetim ✗ öter ve 10 kalem "bu gece
yazılmış yeni kusur" sanılır.

### ② 18 bağlanmamış kronoloji dosyası — koordinatör, 1 Ekim 2026
18 dosya diskte vardı, commitliydi, denetimlerin evrenindeydi — ama
`index.html`e **hiç yüklenmemişti.** Bağlanınca künye bağları 7568 → 11.215,
kronolojisi olan künye 701 → 891 oldu.
🔴 Ve odak denetimi **aynı anda ötmeye başladı**: 152 dosyalık evren üzerinde
ölçülmüş 480 tavanının üstüne 31 yeni dosya ve **245 odaksız** eklendi.
Çare tavanı yükseltmek DEĞİLDİ — `ODAK-TAVAN.json`a `evren` (152 adın
LİSTESİ) ve ayrı bir **YENİ KAPSAM** kovası eklendi:
```
evren 152 dosya → 480   (tavanli, gerileme bloke eder)
YENI KAPSAM     → 204   (tavansiz, yeni is)
TOPLAM          → 684
```
📌 Bu kovanın yokluğu bir ölçüm hatası da üretti: koordinatör "204 odaksız"
dedi, LAB 684 ölçtü ve ikisi de doğruydu — **eksik olan HANGİ KOVA
olduğunu söylemekti.**

## KURAL

1. **Bir kusuru kapatmadan önce sor: bu kayıt hangi denetimlere YENİ girecek?**
   Cevap ölçülür, tahmin edilmez (`git`te eski hâlle karşılaştırılır).
2. **Düzeltme + tavan AYNI COMMIT.** Tavanı sonradan yükseltmek "af"tır;
   aynı commit'te beyanla yükseltmek "kapsam genişlemesi"dir. İkisi aynı
   sayıyı yazar, aynı şeyi söylemez.
3. **Yeni kapsam tavana KATILMAZ, ayrı kovaya düşer.** Yoksa ya gerçek
   gerileme gizlenir (tavan şişer) ya da meşru genişleme kusur sayılır.
4. **Bir sayı verirken KOVASINI da ver.** "204 odaksız" eksik bir cümledir;
   "YENİ KAPSAM'da 204, evrende 480, toplam 684" tamdır.

## BAĞLI

`D237` (§8 tavanları, YENİ KAPSAM kovası) · `D250` (kör ölçümün kaydı) ·
`D204` (ölçülemedi ≠ yok ≠ temiz) · `denetim/KASA-KUNYESIZ-1001.md` ·
`denetim/ODAK-TAVAN.json`
