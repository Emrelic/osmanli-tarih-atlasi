# LAB-ARAC-DOGRULAMA-1004 — UMIT'in dört aracını + denetle.py'yi LAB ortamında koşturma

> Görev: YILDIRIM BAYEZIT, 4 Ekim 2026. Denetleyici: LAB IRTIBAT (LAB makinesi).
> Yalnız ölçüm. Hiçbir araç düzeltilmedi, veriye yazılmadı. UMIT'in raporu OKUNMADI;
> karşılaştırma yalnız koordinatörün mesajındaki beyan sayılarıyladır.

## 0. Öngörü — ölçümden ÖNCE yazıldı

- **Sınav anı:** 4 Ekim 2026, `main` = `fb11565f` (Merge origin/makine/umit — yetim madde aracı + sınav),
  `git pull --ff-only` sonrası, çalışma ağacı temiz (`status --short` 0 satır).
- **Evren:** her aracın kendi okuduğu dosya kümesi; LAB'da `py` yorumlayıcısı.
- **Öngörü:** dört aracın sayıları beyanla **birebir aynı** çıkar (veri aynı commit'te, araçlar
  saf Python dosya okuması). `denetle.py` çıkış kodu **0**. Farkın tek makul kaynağı: UMIT'in
  beyanından sonra `main`e giren veri commit'leri ya da LAB'da eksik bir bağımlılık (node vb.) —
  ikincisi kod **2** olarak görünür.

## 1. Ortam

`Python 3.14.3` · `node v22.17.1` · `numpy` YOK · `shapely` YOK · `pyproj` YOK
(`importlib.util.find_spec` ile ölçüldü). Koşu dizini `C:\atlas`, `main` = `fb11565f`.

## 2. Ölçüm — beyan ↔ LAB

| araç | beyan (UMIT) | LAB | çıkış | fark |
|---|---|---|---|---|
| `ARAC-KUNYE-KRONO-KAPSAM-1004.py` | A=670 · B=222 · C=3 | A=670 · B=222 · C=3 (895 künye · 10004 madde · 183 dosya) | 0 | **yok** |
| `ARAC-KRONO-KUNYE-PENCERE-1004.py` | İÇERDE 12969 · SINIR 47 · DIŞARDA 389 | 12969 · 47 · 389 (13405 çift, ±366 g) | 0 | **yok** |
| `ARAC-KRONO-SUZGEC-1004.py` | (c) ek %18,5 ↔ öteki %3,3 · (d) 96 | (c) ek 228 = %18,5 ↔ öteki 292 = %3,3 · (d) toplam 96 (ek 69 · öteki 27) | 1 | **yok** |
| `ARAC-YETIM-MADDE-1004.py` | kapı kümesi 2020 · W 1158 | kapı kümesi 2020 · W 1158 | 0 | **yok** |
| `arac/denetle.py` | — | — | **2** | aşağıda |

⇒ **Dört araç iki ortamda aynı sayıyı veriyor.** Öngörü (§0) bu dört araç için tuttu.

`ARAC-KRONO-SUZGEC-1004.py` çıkış **1**: araç kendi çıktısında "bayrak VAR … Süzgeç silmez,
düzeltmez — elle bakılacak aday listesi. Çıkış kodu 1" diyor ⇒ tasarım gereği bayrak kodu,
arıza değil. Beyanda çıkış kodu verilmediği için bu kodun UMIT'te de 1 olup olmadığı
**ölçülemedi** (beyanla karşılaştırılamaz).

## 3. `denetle.py` — çıkış 2, ölçülemeyen soru ADIYLA

- **Değişmez 8 — ÖLÇÜLEMEDİ:** `No module named 'numpy'` (shapely/numpy yok). Araç bunu
  kendisi "Ölçülemeyen soru TEMİZ DEĞİLDİR" diye sayıyor → çıkış 2. **Eksik bağımlılık.**
- **Ek denetim · konum — ATLANDI:** "shapely ya da veri-kaynak yok". ⚠️ Bu satır araç
  tarafından **ölçülemeyen soru sayısına KATILMIYOR** (sayaç 1 diyor, yalnız Değişmez 8);
  yani konum denetimi sessiz bir "atlandı"dır, çıkış koduna yansımıyor. §1.5'teki
  "Konum denetimi 0 nokta kara maskesinin dışında" satırı bu makinede **ölçülemedi**.
- Öngörüm (kod 0) **TUTMADI**; §0'da adı konan ikinci fark kaynağı (eksik bağımlılık) çıktı.

Ölçülen öteki değişmezler (hepsi ✓, LAB ortamında):
```
1   4298 yerleşim, 309 sahipsiz (beklenen 309)      1c  belgesiz 4 (tavan 4)
1b  beyansız boşluk 0 · beyanlı 7/7                 boşluk cinsi yazılmamış 0
2   621 kırılma, 0 açık                             2s  1709 · 189 AÇIK (tavan 189)
2i  142 · 1 açık (tavan 1)                          2t  kırılmasız 13 (tavan 13)
4   5 hayalet · 4c 127 · 4d 324 · 4s 5              5   0 çelişki · 5a-muaf 1 (tavan 1)
dönem sağlığı 0/0/0 · kaynaksız s: 1968 (tavan 1968) · mükerrer 113 (≤113)
3z  bilgi: m: 489 · kd: 53 · kd yazılı 418          5b/5c bilgi: 146 / 2258
7   🧊 726 sorgusuz enklav (beklenen 731)            savaş senkronu bilgi: 165/174
```
📌 §1.5 ile iki küçük fark (bayatlık, ihlal değil): yerleşim **4298** (§1.5: 4296) ·
2s tavanı **189** (§1.5: 191). Değişmez 7'de ölçülen 726 ≠ beklenen 731 (🧊, araç ihlal
saymıyor) — hüküm koordinatörde.
📌 Uyarı satırı: `alan: 'dogrulanmadi' BILINEN_ALANLAR'da yok — 1 kayıt
(yerlesimler_ek29.js: Deyrülkamer)`.

### 3.1 Yeniden koşu — numpy/shapely/pyproj kuruldu (koordinatör onayı, 4 Ekim)

`numpy 2.5.3 · shapely 2.1.2 · pyproj 3.8.0` · `main` = `fb11565f` (koordinatörün
`olculemedi("konum denetimi", …)` onarımı bu commit'te HENÜZ YOK — `pull --ff-only`
"Already up to date") · `denetle.py` çıkış **2**, süre 93 sn:
```
Ek denetim  ✓  konum: 0 nokta kara maskesinin dışında (beklenen 0)
               (SINIRDA bilgi: 8 nokta ham gölün içinde, sadeleştirilmişin dışında)
Değişmez 8  !  ÖLÇÜLEMEDİ — FileNotFoundError: 'C:\atlas\data\devletler_harita.js'
```
⇒ Konum denetimi artık ÖLÇÜLDÜ ve temiz. Değişmez 8'in engeli değişti: bağımlılık değil
**eksik dosya** — `data/devletler_harita.js` `.gitignore:28`de, depoda izlenmiyor
(`git ls-files` boş; son izlenen commit `f312269b` "169 MB depoya sığmıyordu"). Motor
çıktısını ölçen Değişmez 8 yalnız koşu yapılmış ortamda (HAVVA) ölçülebilir; taze klonda
**yapısal olarak ölçülemez**.

## 4. Bulunamayan

- UMIT ortamındaki çıkış kodları ve `denetle.py` sonucu: beyanda yok → karşılaştırma
  **ölçülemedi**.
- Değişmez 8 ve konum denetimi: LAB'da **ölçülemedi** (numpy/shapely yok).

## 5. İstek

LAB'ın denetleyici rolü için Değişmez 8 ve konum denetimi şart: `py -m pip install numpy
shapely` (ve araç gerektiriyorsa `pyproj`) — kurulum kararı koordinatörde/Emre'de; kurulunca
`denetle.py` yeniden koşar ve yalnız o iki satır eklenir.
