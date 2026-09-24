# D235 — Koşu worktree'si kodu taşır, İZLENMEYEN GİRDİYİ TAŞIMAZ

**25 Eylül 2026 · koşu 15 · YILDIRIM BAYEZIT**

## Ne oldu

Koşu 15, `§7`in emrettiği gibi ayrı bir worktree'de başlatıldı
(`git worktree add -b kosu15 C:/atlas-kosu15 HEAD`). Motor **8 saniye
sonra kendini öldürdü:**

```
EGIM DEM YOK ya da YARIM. Kosu baslamadan durduruldu.
  arananlar: veri-kaynak/yukseklik/etopo2022_30s_dunya.tif
  NICIN OLDURUYORUM: egimsiz kosan motor kusursuz gorunen bir
  harita uretir ve HICBIR denetim bunu gormez.
```

Sebep basit ve tekrarlanabilir: **`git worktree` TAKİPLİ dosyaları
kopyalar, `.gitignore`daki girdileri KOPYALAMAZ.** Atlas'ın motor girdisinin
**780 MB'ı bilerek takipsizdir** (`.gitignore`: "kamu malı bir veriyi depoda
taşımak, onu ÜRETEN komutu taşımaktan pahalıdır"):

| dosya | boyut | kim indirir |
|---|---|---|
| `veri-kaynak/yukseklik/etopo2022_30s_dunya.tif` | 597 MB | `arac/yukseklik_indir.py` |
| `veri-kaynak/yukseklik/etopo2022_30s_atlas.tif` | 183 MB | aynı |
| `veri-kaynak/viabundus/Viabundus-1.3-Edges.geojson` | 46 MB | `arac/viabundus_indir.py` |
| `veri-kaynak/viabundus/Viabundus-1.3-Town_Outlines.geojson` | 2,2 MB | aynı |
| `veri-kaynak/viabundus/Viabundus-1.3-CSV.zip` | 25 MB | aynı |

`KAYNAK.md` worktree'ye geçmişti — yani dizin **dolu görünüyordu.** Boş
olan dizin değil, İÇİNDEKİ VERİYDİ.

## Çare — kopyalama, BAĞLA (hardlink)

`C:/atlas-kosu14` bu dosyaları **kopyalamıştı** (780 MB, diskte ikinci nüsha).
Gereksiz: girdiler salt okunur ve aynı birimdeler (C:). Sert bağ anında
kurulur ve sıfır disk yer:

```powershell
New-Item -ItemType HardLink -Path C:\atlas-kosu15\veri-kaynak\yukseklik\etopo2022_30s_dunya.tif `
                             -Target C:\atlas\veri-kaynak\yukseklik\etopo2022_30s_dunya.tif
```
⚠️ Sert bağ AYNI BİRİMDE olmak zorundadır ve dosya YAZILIRSA iki taraf da
değişir. Bu girdiler için doğru (motor onları okur, yazmaz); **çıktı
dosyalarına asla uygulanmaz.**

## Neden bir ders — sessizce yanlış cevap verebilirdi

Motorun kendi ölüm gerekçesi bu dersin özüdür: *"eğimsiz koşan motor
kusursuz görünen bir harita üretir ve HİÇBİR denetim bunu görmez."* Yani
girdi eksikliği bir **çıktı** kusuru olarak görünmez. Eğer bu kapı olmasaydı,
19 saatlik koşu **tamamlanır**, `denetle.py` temiz der, yayına iner ve
eksiklik aylar sonra bir sınır raporunda ortaya çıkardı.

📌 **Genel kural: bir dizinin VAR OLMASI, içinin dolu olması değildir.**
Aynı aile: `D219` (dosya listesi yalnız `GIRDI_DOSYALARI`dan okunur),
`B9` ("0 bulundu" aletin ateşlendiğinin kanıtı değildir).

## Koşu öncesi sınama — tek satır

Worktree kurduktan sonra, koşuyu başlatmadan ÖNCE:

```bash
ls -la <worktree>/veri-kaynak/yukseklik/*.tif <worktree>/veri-kaynak/viabundus/*.geojson
```
Boş dönerse bağla. `git status --ignored --short` ana depoda hangi girdilerin
takipsiz olduğunu söyler — liste burada TUTULMAZ, `.gitignore`dan okunur
(`D219`: liste tutmak üç kez bayatladı).
