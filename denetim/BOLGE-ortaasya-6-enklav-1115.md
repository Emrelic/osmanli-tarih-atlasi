# BOLGE-ortaasya-6-enklav-1115 — Orta Asya enklav/eksklav (UMIT, 15 Kasım 2026)

## Ölçüm
| ölçü | sonuç |
|---|---|
| `s:` penceresinde `eksklav:` alanı olan kayıt — Orta Asya kutusunda (244 yerleşim) | **0** (küresel 251: Mora/Modon… Avrupa/Akdeniz) |
| `denetle` Değişmez 7 (sorgusuz enklav, tüm veri) | 2505 (beklenen 731) — bölge payı ölçülmedi: `denetle` çıktısı bölgeye ayırmıyor |
| `denetle` Değişmez 8a (şehir peteği D hattını aşıyor, tüm veri) | 270 (tavan 270), 8b 0 — Orta Asya payı ölçülmedi; düzeltme koşudan sonra görünür |
| `denetle` Değişmez 8m | 460 hat = 409 ölçülen + 45 tam kör + 6 atlanan |
Orta Asya'nın hiçbir penceresi `eksklav` ile işaretli değil; yani modelleme tamamen "komşu petek emer" mantığında.

## Tarihî enklav/eksklav/özel statü vakaları (bölge) ve atlastaki karşılıkları
| vaka | dönem | atlastaki modelleme | durum |
|---|---|---|---|
| Buhara ve Hive Rus himayesi (vasal; iç egemenlik) | Buhara 1868-06-02→1920-09-02; Hive 1873-08-24→1920 | `buhara` / `hive` künyeleri ve yerleşim pencereleri vasal dönemde sürüyor (Buhara şehri `buhara`, Hive `hive`) | **Doğru yönde**. Kayıp topraklar: Semerkant/Zerafşan 1868-05-14 → rusya ✓; Hive'nin Amuderya sağ yakası 1873'te Rusya (Gendemiyan) — Hive künyesi pencerelerinde bu kayıp için ayrı kırılma **kontrol edilmedi** (Amu-Derya yerleşimleri: Köhne Ürgenç/Çarcuy kaydı yok) |
| Gulca (Kulca/Yining) Rus işgali | 1871-07-04→1882-03-22 | `rusya` pencere ✓ (madde 1871 «ay yaklaşık»); 1881 Petersburg Antlaşması'ndan 1882 devri | ✓ (kaynak okunmadı) |
| Hâmi (Kumul) Hanlığı (Qing vasalı) | 1697→1930 | `qing-hanedani` altında; ayrı enklav değil | künye yok (adım 1 D) |
| Afgan Vahan koridoru | 1883-08-15 / 1895-03-11 | Kala-i Pençe, Serhad (Vahan) → `afganistan` 1883-08-15'ten; 1895-03-11 Pamir notaları maddesi var; Horog 1883 afganistan → 1895 buhara → 1905 rusya | koridor doğru yönde modellenmiş; **Horog 1895-03-11→1905 `buhara`** şüpheli (Pamir notalarına göre Horog Buhara'ya bağlı Rus nüfuz alanı; 1905 rusya geçişi yıl-hassasiyetli) — kaynak okunmadı |
| Pamir (Murgab) Rus Pamir Postu | 1893→ | Pamirski Post `rusya` 1893'ten ✓ | ✓ |
| Kokand Hanlığı'nın Rus işgalinde parça parça kaybı | 1853 Ak-Mescit, 1864-65 Çimkent/Taşkent, 1868, 1876 | Taşkent 1865-06-17, Çimkent/Yesi 1864 madde, Hokand/Andican/Oş 1876-02-19 | takvim uyumsuz (adım 2 T3, T5); Kızılorda (Akmescid) yerleşimi yok |
| Rus Türkistan Genel Valiliği (1867-1917) | | tek künye `rusya` | yeterli |
| Alay vadisi / Tarım | 1876 | Alay vadisi boşluk → 1876-02-19 | boşluk beyanlı |
| Doğu Türkistan ve Kuça rejimleri | 1864-1877 | `yakub-beg` pencereleri 1864-06-04'ten (künye f 1865-01-01); `kuca-hocalari` yalnız 1 yerleşim | adım 3: 211 gün aşım |
| Sovyet ulusal sınırlandırması 1924 | Özbek/Türkmen/Tacik ÖSSC/SSC | tek künye `sovyet-rusya`; Türkistan ÖSSC 1924-09-16'ya kadar, Buhara/Hârizm 1924'e kadar | ulusal sınırlandırma haritada görünmez (künye yok) |
| Fergana vadisi modern dış-enklavları: Sokh, Şahimardan (Özbekistan'ın Kırgızistan içinde), Vorukh (Tacikistan'ın Kırgızistan içinde), Barak/Kayrakkum (Kırgızistan'ın Özbekistan içinde) | 1991-→ | **yerleşim yok → hiç modellenmedi**; petek en yakın büyük şehir sahibini (Özbekistan/Kırgızistan) olarak boyar | EKSİK; yerleşim noktaları + `eksklav` penceresi kuyruğa. Kaynak ve koordinat okunmadı → yerleşim yazılmadı |
| Karakalpakistan (Hârizm Halk C. → Karakalpak ÖSSC 1925/1932) | | Nukus yerleşimi yok | EKSİK |
| Baykonur kiralık alanı, Çarcuy... | | — | kapsam dışı |

## Değişmez 8 ve şehir bölgesi ülke sınırını aşamaz
Motor çıktısı koşu sonrası ölçülür; bugün `denetle` 8a tavanı (270) tabanda dolu. Orta Asya şehirlerinin (Taşkent, Hokand, Semerkant, Buhara, Aşkabad, Almatı) peteklerinin D hattını aştığı bu belgede **ölçülemedi**. Örnek risk: Taşkent (Rus Türkistan → Özbekistan hattı 1991), Hucend–Hokand Fergana vadisi sınırı.

## Öneri
1. Fergana vadisi enklavları (Sokh, Şahimardan, Vorukh, Barak) için yerleşim kayıtları + `eksklav` pencere: kaynak (Özbek/Kırgız/Tacik akademik kaynaklar; 1991 sonrası sınır antlaşmaları) okunmadan yazılmadı.
2. Hive Amuderya sağ yakası Rus kaybı (1873) için ayrı pencere gerekip gerekmediği — kaynak (Gendemiyan Antlaşması metni) okunmadı.
3. D7/D8'in Orta Asya paylarını görmek için `denetle` bölge süzgeci (KASA/araç işi).
