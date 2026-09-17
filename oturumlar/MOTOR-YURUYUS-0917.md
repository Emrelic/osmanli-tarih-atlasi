# MOTOR-YURUYUS — kara sınırını yürüyüş süresi çizsin · 17 Eylül 2026

```
AD        MOTOR-YURUYUS
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ  (kod işi AYRI worktree'de, aşağıda)
ŞARTNAME  bu dosya
KOORDİNATÖR 1.MURAT (tahtadan)
```

## 0. Emre'nin kuralı (17 Eylül, kelimesi kelimesine özü)
> *"Haritadaki bir nokta, kendisine askerî yürüyüşle EN YAKIN yerleşim yerine ait olur. Bu sahiplik
> 5 günlük yoldan fazlasını içermez. Bir noktada 5 günlük yürüyüşten yakın yerleşim yoksa o bölge
> SAHİPSİZ kalır."* — dağ (rampa), nehir (geçiş) yürüyüşü yavaşlatır/keser.

Bağlayıcı kararlar: `oturumlar/MENZIL-KARARLARI-0912.md` (özne RUTİN İDARE · bütçe tek yön **40 saat**
= 5 gün × 8 s ≈ 201 km düzde · Tobler 5,04 km/s) · `GORUNUM-ABC-0910.md` ④ · `denetim/MOTOR-0916.md` ③.

## 1. Bugünkü durum (1.MURAT ölçtü, 17 Eylül)
- `arac/uret_petek.py` 0,05° ızgarada çok kaynaklı Dijkstra koşuyor: `_kv_dijkstra(surt, nehir)` (≈:2551),
  eğim sürtünmesi + nehir KENAR bedeli (`NEHIR_BEDEL_SAAT`, idare) + 63 geçit. Çıktı `_kvuzak` (km-eşdeğeri),
  `_kvsahip` (sahip).
- AMA sonucu haritaya yalnız düz hat DENİZİ kesen parçalarda iner (`_kvkp.contains(LineString(...))` süzgeci,
  "parçaları sına ve devret" aşaması). Kara-kara sınırı hâlâ **Voronoi + `TAVAN_KM`=200 + 16 sektörlü tavan
  (`_TV_SEKTOR`)** ile çiziliyor.
- `MOTOR-0916 §③` önerisi: tavanı `_kvuzak ≤ 40 × 5,04` şartına bağla; ızgaranın sahipliği Voronoi'nin ve puan
  kapısının yerine geçsin.

## 2. İş
1. **ÖNCE OKU, SONRA ÖNGÖRÜ YAZ** (D022): koşuya dokunmadan, ölçüm betiğiyle `denetim/ONGORU-MOTOR-YURUYUS-0917.json`:
   karada sahibi değişecek alan (km²), yeni sahipsiz alan (km², en büyük 10 küme ve yerleri), Osmanlı doğrudan
   toprağı alan değişimi 1520/1683/1800 kesitlerinde, en çok etkilenen 20 yerleşim. Mazeret olabilecek öngörüyü de yaz.
2. **KOD:** kara-kara sınırını ızgaradan türet:
   - her hücre = en düşük yürüyüş süreli yerleşim; süre > 40 s ⇒ SAHİPSİZ (boyanmaz);
   - Voronoi + 200 km tavan + sektör tavanı kara-karada bu sonuçla YER DEĞİŞTİRİR (deniz kuralı, ada/bileşen kilidi,
     "ana parça dokunulmaz" korunur — satır açıklamalarını oku, her birinin doğuran vakası var);
   - **Değişmez 1:** yerleşimin kendi hücresi/ana parçası hiçbir zaman sahipsiz ya da başkasının olamaz;
   - **zaman:** petek geometrisi bütün yerleşimler için mi bir kez kuruluyor, `kur`/dönem başına mı? Önce ölç;
     yürüyüşte "o tarihte VAR OLAN en yakın yerleşim" gerekiyorsa bunun maliyetini raporla, kendi başına büyük
     yeniden yapılanmaya girme — sor.
   - **bayrak:** `MOTOR_YURUYUS=1` ile AÇILIR, varsayılan KAPALI (koşu 13 bu kodla bayraksız koşabilmeli, bit bit aynı).
   - Seçenek (önerirsen ölç): 8 komşu yerine **16 komşu** (at hamlesi adımları, 22,5° çözünürlük) — düz arazide
     sapma ~%8 → ~%3. Emre'nin "16 yön" sezgisinin ızgaradaki karşılığı budur; maliyeti ölç, ayrı bayrak.
   - ORDU öznesi (`MOTOR_NEHIR_OZNE=ordu`) kapsam dışı; bütçe parametre olsun (`MOTOR_YURUYUS_SAAT`, vars. 40).
3. **SINAV:** küçük bir bölge/kısa koşu yolu varsa onu kullan (motorun mevcut test/kutu araçlarına bak);
   bayrak kapalıyken çıktı bugünküyle aynı mı; açıkken öngörüyle karşılaştır. Tam koşuyu BAŞLATMA —
   tam koşuyu yalnız 1.MURAT açar (koşu 14).

## 3. Sınırlar
- 🔒 **Koşu 12 çalışıyor** (`C:/atlas-kosu12`, ayrı worktree) — ORAYA YAZMA. Koşu 13 ana klasörden açılacak.
  ⇒ Kodu **kendi worktree'nde** yaz: `git worktree add C:/atlas-yuruyus -b motor-yuruyus` (ana klasörde
  `arac/uret_petek.py`'ye DOKUNMA). Birleştirmeyi 1.MURAT koşu 13 başladıktan sonra yapar.
- `data/` yazma. `§7`: commit yalnız kendi dalında/kendi dosyalarında, pathspec add'de ve commit'te ADIYLA.
- Heredoc yok (hook reddeder): betik dosyasını Write ile yaz, `py <yol>` ile koş.
- Sayılar koşunun kendi logundan; yorumdaki bayat sayıya güvenme (CLAUDE.md §2 kutusu).

## 4. Teslim
`denetim/MOTOR-YURUYUS-0917.md` (ne değişti, nerede, bayrak, sınav sonuçları, öngörü) + dal adı + commit.
Tahtaya: `py arac/tahta.py yaz --kim MOTOR-YURUYUS --kime 1.MURAT --mesaj "..."` — açılışta tek satır,
engelde HEMEN (özellikle §2 "zaman" sorusu), teslimde sayıyla: ① ölçtüğüm ② bulamadığım ③ istediğim.
