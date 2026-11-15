# BOLGE-CINHINDI-4-yerlesim-1115 — Çinhindi bölge denetimi, adım 4 (yerleşim kronolojisi)

Ağaç: worktree `agent-a994e7b7a57a29cc9`, dal `umit-1115-bolge-cinhindi` (taban `origin/main` 8fb10bdf1). Ölçüm 15 Kasım 2026, UMIT.
Bölge tanımı (ölçüm kutusu): lat 7-23,8 / lon 92,3-109,6 → **128 yerleşim**; künye = bu yerleşimleri `s:` ile sahiplenen ve `bolge: guneydogu-asya` olan **58 künye** (`girdi.yukle` + `girdi.oku_devletler`). Madde evreni: `data/olaylar*.js` + `data/kronoloji*.js`, `OLAY_TARAF` eşlemesiyle: **295 madde** (201 tanesi 1281 öncesi, 94 tanesi 1281 sonrası).

**Önce oku — yöntem sınırı:** bu oturumda erişilen web aracı yalnız Vikipedi türevi sayfalar ve archive.org taramaları döndürdü; CLAUDE.md'ye göre Vikipedi tek dayanak olamaz. Akademik kaynakların (Wyatt, Baker-Phongpaichit, Harvey, Hall, Taylor, Coedès, Lieberman, Leider, TDV'nin Tayland/Vietnam/Burma maddeleri) sayfaları **okunmadı** (TDV Cloudflare, ticari kitaplar kapalı). Bu yüzden aşağıda "teyit edildi" yalnız **atlasın kendi kaynaklı kayıtlarının birbiriyle tutarlılığı** için kullanılır; dış teyit gerektiren her yer "OKUNMADI" diye işaretlidir. Veri düzeltmesi yazılmadı (bkz. adım 7).

## 1. Pencere envanteri (128 yerleşim)
box=128 s-yok=9 bosluk=43 kunye-asim=28 ara=0 cakisma=0
(s-yok = `s:` penceresiz yerleşim; bosluk = `__BOSLUK__` penceresi; kunye-asim = pencere künye `f`/`t` dışına taşıyor, **gün hassasiyetiyle** ölçüldü; denetle Değişmez 4/4c/4d yıl-hassasiyetli künye uçlarını yıl içinde tolere eder, bu yüzden 0 diyor — bkz. "Yöntem farkı".)

### Yöntem farkı
`denetle` künye `t`=`YYYY-01-01` ise aynı yılın sonuna kadar tolere eder; bu oturumda yazılan betik gün farkını da sayar. Çıkan 28 kayıt:
- **Toungoo/Konbaung 1752 (22 kayıt)**: künye `t` 1752-01-01, pencere 1752-04-23'e kadar. Gerçek 1752 olayları arasında 23 Nisan karşılığı BİLİNMİYOR.
- **Huế, Quang Tri 1801-06-15**: Nguyễn künyesi 1802-06-01'de başlıyor, pencere bir yıl önce (Nguyễn Ánh'ın Phú Xuân'ı alışı 1801; Gia Long ilanı 1802) → **Nguyễn Beylikleri künyesi (Đàng Trong) 1802-06-01'e kadar** sürmeli, Nguyễn Hanedanı künyesi değil: pencere sahibi yanlış künye (`nguyen-hanedani` yerine `nguyen-beyligi` 1801-06-15 → 1802-06-01 aralığı). Karar için Taylor (2013) OKUNMADI.
- **Hanoi/Hai Phong 1883-08-25..1954/55**: Fransız Çinhindi künyesi 1954-07-21'de bitiyor, pencere 1954-10-10 (Hanoi) ve 1955-05-01 (Hai Phong)'e uzanıyor → künye `t` ile pencere 81/284 gün fark; Hanoi'nin Fransız tahliyesi Ekim 1954, Hai Phong Mayıs 1955 (genel bilgi, okunmadı).
- **Linyi-Champa 0500-1000**: pencere 1000-01-01'e kadar, künye `t` 0999-12-31 (1 gün).

## 2. Sahneye çıkış (yerleşim kronolojisi)
- `kur:` alanı **Ayutthaya 1351-03-04, Chiang Mai 1296-04-12, Bangkok 1767-12-28**, Mrauk U yok (pencere 1281'den). 9 yerleşimin `s:`'i yok: Ishanapura (Sambor Prei Kuk), Tayland, Kamboçya, Vietnam, Angkor Borei, Sri Ksetra (Hmawza, Pyay), Bac Ninh, Wat Phu, Sambor (Kratie) — bunlar arkeolojik/ülke noktası olarak tanımlı (denetle Değişmez 1 bunları sayıyor; beklenen 306 içinde).
- **Chiang Mai 1296-04-12** (kuruluş günü): kaynak anılışı atlas kaydında var (DEVRALMA), ikinci akademik kaynak OKUNMADI.
- Her yerleşimin bağımsız kronolojisi (kuruluş + devir zinciri): yalnız 5 örnek tam çıkarıldı (Hanoi, Huế, Pegu, Ayutthaya, Chiang Mai, Mrauk U, Saygon); 128 yerleşimin tamamı için tek tek kaynak karşılaştırması **bu turda yapılmadı** ("ölçülmedi").

### Örnek zincir: Hanoi (Thăng Long)
`liang-guney 0502 → van-xuan 0544 → liang-guney 0546 → triyu 0550 → van-xuan 0571 → sui 0602 → tang 0618 → khuc 0906 → guney-han 0930 → BOSLUK 0931-0966 → 12-su-quan 0966-0968 → BOSLUK 0968-0980 → tien-le 0980 → ly 1009 → tran 1225 → ho 1400-03-01 → ming 1407-06-16 → BOSLUK 1427-11-12..1428-01-03 → le 1428-01-03 → mac 1527-06-15 → le 1592-01-01 → tay-son 1786-07-21 → nguyen 1802-06-20 → fransiz 1883-08-25 → vietnam-dc 1954-10-10`
Boşluklar: 931-939 (Dương Đình Nghệ/Kiều Công Tiễn, künye yok), 939-966 (Ngô Quyền ve ardılları: **`ngo-hanedani` künyesi var (939-965) ama pencere `__BOSLUK__`** — künye var, pencere sahibini yazmıyor!), 968-980 (Đinh: künye yok), 1427-11-12..1428-01-03 (Lê Lợi'nin Đông Quan'ı alışı ile künye `f` 1428-01-01 arası).

**Bulgu:** `ngo-hanedani` (939-965) künyesi mevcut, 1 yerleşim (Co Loa) sahibi; Hanoi'nin 939-966 dilimi ise `__BOSLUK__`. Dư Việt/Ngô'nun başkenti Cổ Loa; Hanoi'nin Ngô egemenliğinde olduğu kaynağa bağlı (okunmadı). Boşluk doldurma merdiveni ③ (Vietnam akademik kaynakları) **bulunamadı/okunmadı**.

## 3. Boşluklar (`__BOSLUK__`) — 43 pencere / 128 yerleşim
Büyük gruplar:
1. **1767-04-07..1767-10-01** (25 Siyam yerleşimi, 181 gün) — beyanlı, Wood; ikinci/üçüncü basamak OKUNMADI.
2. **1281-01-01..1353-01-01 Luang Prabang, Vientiane, Xieng Khouang, Savannakhet, Muang Sing** (72 yıl): Lan Xang'dan önce Laos/Tay-Lao müang'ları; Lan Xang'ın 1353'te kuruluşu (Fa Ngum). Boşluk doldurma merdiveni ③: Laos akademik kaynakları (Stuart-Fox, *A History of Laos* 1997; Viravong) **OKUNMADI**.
3. **Sukhothai 0500-1238** (yerleşim ilk anılışı?) ve **Suphan Buri 0500-1181**, **Nakhon Pathom 1100-1350**, **Phayao 1096-1338 ve 1727-1764**: `kur:`/künye eksik; "yerleşim o devirde var mıydı?" basamağı (④) uygulanmadı.
4. **Halin 0001-1297**, **Takeo 0500-0627**, **Prome 0832-1077**, **Mrauk U 0500-1281**, **Sandoway 0500-1237**: erken Pyu/Mon/Arakan boşlukları; çoğu çekirdek (1281+) dışı.
5. **Hanoi 931-939/968-980/1427-1428**, **Lin'an 1253-1256**.

## 4. Sonuç
Yerleşim penceresi düzeyinde en kritik üç iç kusur: (a) Toungoo→Konbaung `1752-04-23` kaynaksız ve künye `t` ile gün-ihlali (22 kayıt); (b) Nguyễn 1801-06-15 ile künye f 1802-06-01 (2 kayıt, yanlış künye?); (c) Mac→Lê `1592-01-01` yıl-temsilî (6 yerleşim). Bir kusur (Chiang Mai/Chiang Rai/Nan 1774→1775) çift teyitle düzeltildi.
