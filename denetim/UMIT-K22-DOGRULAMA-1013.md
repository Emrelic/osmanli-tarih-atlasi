# UMIT-K22-DOGRULAMA-1013 — 85dee38cb (origin/makine/umit-k22) ↔ origin/main b17181b2a

Ölçüm yeri: UMIT worktree `agent-affad3eaf6991d499`, ağaç = origin/main (b17181b2a), 13 Ekim.

## Sonuç: kurtarma commit'inde EKSİK GERÇEK DEĞİŞİKLİK YOK — yeniden uygulama gerekmedi

1. **Aynılık:** `85dee38cb` ile main'deki `e54e60dff` ("Z6 INDI, 80 degisim, 11 dosya") `data/` altında
   birebir aynı +/- satır kümesidir (sıralı karşılaştırma: 206 = 206 satır, fark 0).
   K22 commit'i, detached HEAD'de kalmış aynı Z6 çalışmasının kurtarılmış kopyasıdır.
2. **Girdi-bazlı (yerleşim ad+koordinat) dönem karşılaştırması**, çok satırlı girdiler dahil
   (11 dosya, 80 değişen girdi, 172 eklenen + 66 silinen dönem nesnesi `s:`/`d:`):
   - Eklenen 172 dönemden **168'i main'de aynen var.**
   - **4'ü farklı biçimde, daha yeni genişletilmiş:** main'de bitiş tarihi sonraki işle uzatılmış (ardıl yapı):
     - Semerkant `sovyet-rusya` 1917-11-07→1923-10-29 → main: →1991-08-31 (+ `ozbekistan` 1991-08-31→)
     - Hucend, Taşkent: aynı (`sovyet-rusya` 1917-11-07→1991-08-31 ve →1991-09-09; ikisi ayrı bağımsızlık gününe bağlı)
     - Belh `afganistan` 1841-01-01→1923-10-29 → main: →2000-12-31
     Bunlar eksik değil; K22'nin uç tarihi eskidir, main daha ileridir. Geri alınmaz.
   - Silinen 66 dönemin **66'sı main'de de yok** (hiçbiri geri gelmemiş).
3. Satır düzeyi ek ölçüm: 80 eklenen satırdan yalnız 1'i bayt-bayt aynı kalmış (geri kalanı sonraki
   işlerce — ufuk 1945, künye genişletmeleri — yeniden yazılmış); bu yüzden karar satır değil girdi/dönem bazında verildi.

## Eksik / farklı liste
- Eksik: **0**
- Farklı (main daha yeni, geri alınmayacak): Semerkant, Hucend, Taşkent (sovyet-rusya t), Belh (afganistan t) — 4.

## Yapılan
Veri değişmedi. K22 dalı (`origin/makine/umit-k22`) güvenle silinebilir/arşivlenebilir (içerik main'de).
