# 🔴 BİR KOŞU SÜRESİ TAHMİNİ, ÖLÇÜLDÜĞÜ GİRDİ BÜYÜKLÜĞÜYLE BİRLİKTE

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 817 token

---

- 🔴 **BİR KOŞU SÜRESİ TAHMİNİ, ÖLÇÜLDÜĞÜ GİRDİ BÜYÜKLÜĞÜYLE BİRLİKTE
  TAŞINIR — ve fırlatıcının kendi kaydı bir TAHMİNDEN iyidir ama
  TABANSIZ okunursa yanıltır.** *(5 Eylül 2026 · koşu 5b)*

  Koordinatör gece boyunca *"koşu ~18:40'ta biter"* diye rapor etti.
  Tahminin kaynağı ölçüldü — bir varsayım değil, **fırlatıcının kendi
  kaydıydı**:
```
kosu_ayrik.log:  ADIM: uretim (uret_petek.py) — olculen en uzun kosu 16s09dk
02:40:26 + 16s09dk = 18:49
```
  🟢 Yani taban gerçekti. 🔴 **Ama hangi GİRDİ üzerinde ölçüldüğü
  yazılmıyordu:**
```
16s09dk ölçüldüğünde   petek ~2731
koşu 5b               petek  3805   (+%39)
```
  Voronoi ve kesişim maliyeti nokta sayısıyla doğrusaldan kötü ölçekler
  ⇒ **daha uzun bir koşu beklenen davranıştır.** 16:55'te tarihî azami
  aşıldı ve bu bir arıza işareti değil.

  📌 Bu, aynı gün ölçülen *"bir eşik, ölçüldüğü tabanla birlikte taşınır"*
  dersinin (R1 dikiş sınavı) **süre** ekseni — ve o ders bu vakayı
  **açıklıyor**: orada eşik 96 parçalık bir tabandan 640'lık bir tabana
  taşınmıştı, burada 16s09dk'lık bir süre 2731'lik bir tabandan 3805'e.
  ⇒ Bir süre kaydının yanına **girdi büyüklüğü** yazılmazsa, o kayıt bir
  sonraki koşuda **yanlış alarm** üretir.

  🟢 **VE CANLILIK AYRICA ÖLÇÜLDÜ — süre aşımı takılma DEĞİLDİR:**
  `8 sn'de +8s CPU` (tam çekirdek, kesintisiz) · bellek 192 → 444 MB
  (büyüyor) · 8 iş parçacığı · bekçi 60 dk'da bir raporlu.
  ⚠️ *"Tahmini aştı"* ile *"takıldı"* iki ayrı hükümdür ve ikincisi
  **ayrıca ölçülür**; CPU deltası olmadan ayırt edilemezler.

  🔴 **YAN KUSUR — İKİ BEKÇİ LOGU AYNI ÇIKTIYI ALIYOR:**
  `denetim/BEKCI-KOSU4C.log` şu an **koşu 5b'nin** bekçisi tarafından
  yazılıyor (aynı PID, aynı son satır, aynı mtime). Yani eski adlı bir
  dosya **yeni koşunun** verisini taşıyor. `§11`in *"log da bir çıktıdır
  ve dosya adı numarası tarihle ilgisiz"* dersinin bir kademe kötüsü:
  orada ad **bayattı**, burada ad bayat **ve içerik üzerine yazılıyor** —
  koşu 4c'nin süresi artık o dosyadan **ölçülemez.**

