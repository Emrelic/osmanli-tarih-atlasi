# DONANIM — Emre'nin alacağı bilgisayar · KARAR ve PARÇA LİSTESİ

```
AD      DONANIM DANIŞMANI
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
TARİH   10 Eylül 2026 · fiyatlar bu tarihte ölçüldü
🔴 VERİYE, KODA, KOŞUYA DOKUNULMADI.
```

## ⓪ KARAR

```
BİÇİM      BÜYÜK KASA (ATX mid-tower)
İŞLEMCİ    AMD Ryzen 9 9950X — 16 GERÇEK çekirdek, Zen 5, AM5
TOPLAM     ≈ 61.500 TL   (bütçe tavanı 120.000 TL — YARISININ ALTINDA)
```

## ① NİÇİN BU BİÇİM — dört biçim aynı hedefe karşı fiyatlandı

| Biçim | 16 gerçek çekirdekle | Sürekli tam yük |
|---|---|---|
| **Büyük kasa** | **≈ 61.500 TL** | 170W'ı 5 saat kısılmadan sürdüren tek biçim |
| Mini kasa | ≈ 59.000 TL + gümrük (TR fiyatı **bulunamadı**) | 48 mm kutuda 170W — kısılma kaçınılmaz |
| Laptop | **≈ 130.000 TL**'den | en kötüsü; zirvede bile %15 daha yavaş (PassMark) |
| All-in-one | 16 çekirdekli model **BULUNAMADI** | piyasa Ryzen 7 (8 mobil çekirdek) ile bitiyor |

⇒ Emre'nin kuralı *"aynı performans aynı paraysa taşınabilir olsun"* idi.
**Aynı performans aynı paraya çıkmıyor:** laptop 2,1 kat pahalı ve daha
yavaş, mini pahalı ve kısılıyor, all-in-one hedefi hiç karşılamıyor.

## ② 🔴 ÖNCEKİ LİSTEMDE BİR HATA VARDI — ve tam uyardığım yerden

İlk listemde anakart olarak **ASUS Prime B850M-K** (7.000 TL) yazmıştım.
Ölçtüm — **9950X için uygun değil**: VRM stres testinde 100 °C'yi hızla
aşıp **128 °C**'ye çıkıyor. 5 saatlik tam yükte bu doğrudan **kısılma**,
yani parasını verdiğimiz 16 çekirdeğin kaybı.
🟢 Yerine **MSI B850 Gaming Plus WiFi (ATX)** — 13.311 TL.
📌 Bu, kendi verdiğim öğüdün ta kendisi: *"hazır sistemler soğutucu ve
güç kaynağından kısar"* dedim; ben de **anakarttan** kısmıştım.
⇒ Toplam 58.100 → **61.500 TL** (fark tamamen bu düzeltme).

## ③ PARÇA LİSTESİ — hepsi 10 Eylül 2026'da ölçülmüş liste fiyatı

| Parça | Model | Fiyat |
|---|---|---|
| İşlemci | AMD Ryzen 9 9950X (tray) | 24.600 |
| Anakart | MSI B850 Gaming Plus WiFi (ATX) | 13.311 |
| RAM | G.Skill Ripjaws S5 32 GB (2×16) DDR5-6000 CL30 | 6.399 |
| SSD | Crucial P3 Plus 1 TB Gen4 NVMe | 9.094 |
| Soğutucu | Thermalright Peerless Assassin 120 SE | 1.999 |
| Güç kaynağı | Rampage P850 850W 80+ Gold | 4.000 |
| Kasa | MSI MAG Forge 100R ARGB (mesh, ATX) | 2.139 |
| | **TOPLAM** | **61.542 TL** |

**Seçenekler:**
- 64 GB RAM: **+6.400** → 67.942 TL
- Daha güvenli güç kaynağı (MSI MAG A850GL Gold, tam modüler): **+2.899** → 64.441 TL
- Kasa+750W paket (MSI MAG Forge 121A Airflow B75, 4.999) ayrı kasa+PSU
  yerine: **−1.140** ama PSU Bronze ve paket ürünü

## ④ GÜÇ KAYNAĞI NİÇİN 850W — bugünkü karar, yarınki ekran kartı için
9950X'in entegre grafiği var (2 CU RDNA2, doğrulandı) ⇒ ekran kartsız
çalışır. Ama yerel yapay zekâ için sonradan kart gerekecek.
```
650W  → 9950X (~200W) + orta-üst GPU (250-360W) SIKIŞIR
850W  → bugün +1.000-2.000 TL, sonra güç kaynağı DEĞİŞTİRMEK YOK
```

## ⑤ HAZIR SİSTEM DEĞİL — parçaları seç, tek satıcıdan al, montajı ona yaptır
İtopya vb. **ücretsiz montaj ve test** veriyor; hazır sistemde de her
parça kendi markasının garantisinde (yani "tek garanti" avantajı yok).
🔴 Gerekçe bu projeye özel: hazır sistemler **soğutucu ve güç
kaynağından** kısar, çünkü oyuna göre tasarlanır — oyun 20 dakikalık
patlamalarla yükler, bizim yükümüz **5 saat kesintisiz %100**.

## ⑥ AÇIKÇA ÖLÇEMEDİKLERİM (`D107`)
```
⚪ 9950X3D (128 MB L3) bu iş yükünde daha iyi mi — ÖLÇÜLMEDİ, +~7.000 TL
⚪ paralel koşuda RAM ihtiyacı — önerilen tasarım iş parçacığı tabanlı,
   bellek PAYLAŞILIYOR ⇒ 32 GB yeter; süreç tabanlı tasarımda büyür
⚪ mini PC (Minisforum MS-A1) TÜRKİYE fiyatı — bulunamadı, $919 barebone
⚪ satıcı stok durumu ve montaj politikaları — satın alma anında teyit
⚪ kasa/PSU bundle'ının PSU kalitesi — Bronze, ölçülmedi
```

## ⑦ KAYNAKLAR
Akakçe · incehesap · Vatan · Teknosa · Pazarama ürün sayfaları,
Tom's Hardware (9950X vs 285K), PassMark (9955HX vs 9950X),
İlkByte 47 model B850 VRM testi, Mynet (USD/TRY 48,51 · 10 Eylül 2026).
