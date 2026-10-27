# Kural — aynı ad iki ayrı yeri/kapsamı gösteriyorsa (YER-TANIMA, 21 Ekim 2026; Emre adına varsayılan karar)

Örnek: **Burgonya** — 912 maddesi Cenevre/Saint-Maurice çevresindeki Burgundia krallığı, 1015 maddesi Dijon çevresindeki dükalık.
Aynı durum: Moesia (Üst/Alt), Çin (Neolitik Jiahu ↔ Tang), Galya (Köln–Trier ↔ Fransa ortası), Dacia (Gepid ↔ Erdel).

1. **Tek ad = tek kayıt DEĞİLDİR.** Madde bağlamları (tarih + ornek_maddeler) ayrı yerlere gidiyorsa her bağlam için AYRI temsilci kaydı yazılır.
2. **Ad biçimi:** `"<Ad> (<ayırt edici>)"`, ayırt edici = devir veya çekirdek şehir: `"Burgonya (Burgundia krallığı, Cenevre çevresi)"`, `"Burgonya (dükalık, Dijon çevresi)"`.
3. **Zaman penceresi:** her kaydın `kur:` (ilk geçtiği yıl) ve gerekiyorsa `bit:` alanı kendi bağlamının yıllarından yazılır; pencereler çakışabilir (iki ayrı nokta olduklarından Değişmez 1/2'yi etkilemez; `s:` yok).
4. **Her kayıt kendi iki kaynağını taşır** (Pleiades + TDV/akademik); biri yalnız tek kaynakla kalırsa o kayıt yazılmaz, diğeri yazılır.
5. **Kronoloji `yer_id`'si** hangi kayda bağlanacaksa ayırt edici adla birebir yazılır (bağlama işi era oturumunda).
6. **Çözülemeyen kapsam** (Çin gibi çok geniş) tek temsilci noktaya sıkıştırılmaz; bağlam bazında parçalanır (ör. "Çin (Tang, Chang'an çevresi)") ya da yazılmaz. Beyansız yaklaşıklık, beyanlı boşluktan kötüdür.
7. Üreteç (`ARAC-YER-URET-1021.py`) bu kuralı henüz otomatik uygulamıyor: `parti_NN_sonuc.json`'da aynı `ad` için birden çok kayıt gelirse yalnız ilki yazılır → bu durumda ad alanına ayırt edici elle yazılmalı.
