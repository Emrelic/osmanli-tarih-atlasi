# YERLESIMLER-JS-KUYRUK-1115-cinhindi

Çinhindi bölge denetiminden (`BOLGE-cinhindi-*-1115.md`) `data/yerlesimler.js`'e düşen düzeltme: **YOK.**
Ölçüm: bölgedeki 128 yerleşimin kaynak dosyası dağılımı — yerlesimler_gdasya.js 63, yerlesimler_asya.js 37, yerlesimler_a78_asya.js 7, yerlesimler_odak_yedek_1023.js 6, yerlesimler_once1281_yt_dogu_gd_asya.js 4, yerlesimler_halef_1946.js 3, yerlesimler_dogu_500_1281.js 3, yerlesimler_mo_iran_asya.js 2, yerlesimler_hint_adalar.js 2, yerlesimler_nokta2.js 1. `yerlesimler.js` içinde Çinhindi yerleşimi **0**.

Bu denetimde dosyalara yazılan yerleşim düzeltmeleri (yerlesimler.js DIŞI, bkz. BOLGE-cinhindi-7-duzeltme-1115.md):
- yerlesimler_asya.js: Chiang Mai konbaung→tonburi 1774-01-15 → 1775-01-15
- yerlesimler_gdasya.js: Chiang Rai, Nan aynı kırılma 1774-01-15 → 1775-01-15 (gün komşudan, beyanlı)
- yerlesimler_dogu_500_1281.js: Nakhon Pathom `__BOSLUK__`/ayutthaya sınırı 1350-01-01 → 1351-03-04

Kuyrukta bekleyen, kaynağı okunamadığı için YAZILMAYAN kalemler (yerlesimler.js değil; ilgili dosya adıyla):
1. Toungoo→Konbaung `1752-04-23` (22 pencere; yerlesimler_asya.js / yerlesimler_gdasya.js ağırlıklı): gün kaynaksız; aday günler 1752-02-29 (Konbaung ilanı), 1752-03-23 (Ava'nın Hanthawaddy'ye düşüşü), 1753 (Alaungpaya'nın Ava'yı geri alışı) — Harvey 1925 / Lieberman 2003 / Htin Aung **okunmadı**.
2. Tây Sơn→Nguyễn `1802-06-20` (10 pencere, Hanoi dahil): Thăng Long'un düşüşü Temmuz 1802 olarak anılıyor (Taylor 2013 **okunmadı**).
3. Lê→Mạc geri alışı `1592-01-01` (6 pencere): Lê'nin Thăng Long'u geri alışı 1592 sonu (**okunmadı**).
4. Nguyễn `1801-06-15` (Huế, Quang Tri) sahibi `nguyen-hanedani` yerine `nguyen-beyligi` olabilir (künye f 1802-06-01).
5. Chakri/Thonburi 1782-04-06 ↔ 1782-04-20 (Nakhon Pathom, Thonburi `t`): hakem kaynakları (Wyatt, Baker-Phongpaichit, TDV) **okunmadı**.


## Ek (ikinci tur, KASA kararı): Ayutthaya yıl hassasiyeti ve ikiz künye birleştirme önerileri
- Ayutthaya `f`: 1351-01-01 (yıl hassasiyeti). Gün 4 Mart 1351 TEK KAYNAK (Baker-Pasuk 2017); Vickery JSS 67 yalnız yıl (cula 712, aynı kronik geleneği), Charnvit JSS 80 yalnız yıl. Nakhon Pathom penceresi, kronoloji_sinir_dogu_500_1281 maddesi, kronoloji_sinir_asya maddesi ve künye-içi madde aynı hassasiyette (1351-01-01); Ayutthaya'nın kendi penceresi ve Lopburi geçişi 1351-03-04 olarak kaldı. İkinci bağımsız gün kaynağı (Wyatt, Coedès-Fr, Cushman) gelirse hepsi 1351-03-04'e çekilir.
- İkiz/ardıl künye birleştirme ÖNERİLERİ (hiçbiri silinmedi; birleştirme KASA kararı):
  1. `launggyet` (1237-1433) ile `arakan` (1281-1785) 1281-1433 arasında aynı toprakta çakışıyor: `arakan.f` 1430'a (Mrauk U kuruluşu, Leider okunmadı) çekilmeli ya da Launggyet'e katlanmalı.
  2. `nguyen-beyligi` (1558-1802) ve `nguyen-hanedani` (1802-1945): aynı `harita:` anahtarı, tek hanedan; tek künye + iç dönem önerilir.
  3. `angkor-kmer` / `kamboc-kralligi` / `khmer-cumhuriyeti` / `demokratik-kampucya` / `kampucya-halk-cumhuriyeti`: ortak `harita: kamboc-kralligi`; devlet kimliği ayrı kalmalı (rejim değişimi), ama renk ayrımı gerekebilir.
  4. `ayutthaya` / `tonburi` / `siyam-chakri`: Siyam devamlılığı; Thonburi `t` 1782-04-20 ile Chakri `f` 1782-04-06 çakışması çözülmeden birleştirme önerilmez.
  5. `hanthawaddy` (1287-1757, iki ayrı dönem) tek kayıt: 1539-1740 `toungoo`; "Birinci/İkinci Hanthawaddy" ayrımı önerilir.
- Renk: Konbaung↔Ayutthaya/Chakri ΔE76 23,1 önerisi `denetim/BOLGE-cinhindi-5-renk-1115.md`'de duruyor; `renkler.py`'ye dokunulmadı.
