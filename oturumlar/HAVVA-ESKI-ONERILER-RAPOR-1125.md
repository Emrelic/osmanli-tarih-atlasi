# Motor bellek / işlemci / süre önerileri — durum tablosu (25 Kasım 2026, salt okuma)

Ölçüm yeri: C:\atlas\.claude\worktrees\havva-bosluk-olcum-1122 (dal havva-rapor-1124, HEAD 2487f6c17). Hiçbir şey çalıştırılmadı/yazılmadı.
Not: "UYGULANDI" yalnız kodda/commit'te kanıt bulunca yazıldı; belge iddiası ayrıca belirtildi.

## A. UYGULANMADI / KISMEN / BELİRSİZ (önce)

| # | Öneri | Nerede / kim / tarih | Durum | Neden kaldı / etki |
|---|---|---|---|---|
| 1 | Ⓑ dolguyu ayrı süreçte koşturmak (döküm dosyaları + `dolgu_ayri.py`) | oturumlar/TASARIM-B-DOLGU-AYRI-SUREC-1125.md; BORC E-HAVVA-1125a; HAVVA 21, 25.11 (62d7a8355, 2487f6c17) | UYGULANMADI (yalnız tasarım; belge kendisi "kod yazılmadı" diyor) | Koşu 40 canlı; `uret_petek.py`ye döküm kipi eklemek motor tuzunu değiştirir (bir tam yeniden inşa, A kısmı 21 sa 32 dk) ve motor koşarken main'e girmez. `dolgu.py`ye dokunmak 11,8 GB önbelleği öldürür. Bit denkliği sınavı (§3.2) yapılmadı. Etki: Ⓑ sırasında ~33 GB ölü yük kalkar [TAHMİN]; tek başına 16 GB hedefini sağlamaz (A gövde tepesi 16,6 GB). |
| 2 | Ⓑ'yi tarih dilimli paralel koşturmak (dilim ham parça + tek birleştirme) | BORC E-HAVVA-1125b; aynı tasarım §4 | UYGULANMADI | #1'e bağlı. Hızlanma ÖLÇÜLMEDİ (Ⓑ tek çekirdekte 5,5+ gün; dilim belleği 1-3 GB TAHMİN; SQLite kilit beklemesi, `_birlestir` dilim sınırı, yük dengesizliği [OSMANLI 283/1242 yavaş satır] sınanmadı). Mevcut kısmî altyapı: dolgu.py `MOTOR_DOLGU_TARIH_BAS/SON/KESIT` (:1456-1469) var AMA `_ana` motor-içi yoldan 3 farklı (kanca yok, gövde gruplaması, kara maskesi) ⇒ bit denk değil. |
| 3 | Bellek ölçüm aracı ile aşama başı GB ölçümü (16 GB hedefi) | denetim/ARAC-BELLEK-OLC-1125.py (de2f4a95b); BORC C-HAVVA-1125a; Emre 25.11 | KISMEN: araç YAZILDI ve sahte motorla sınandı, GERÇEK motorla DENENMEDİ, ÖLÇÜM YAPILMADI | Koşu 40 canlı (araç başka motor görürse çıkış 3; commit boş payı 5 GB). Plan: Koşu 40 inişinden sonra, mesai dışı, ayrı kopya, `MOTOR_SUREC_ISCI=1`, aynı önbellek, önce tracemalloc'suz. |
| 4 | `MOTOR_SUREC_ISCI=1` ile koşmak (işçi motoru baştan koşup belleği katlıyor) | KUYRUK-1006.md:139, ARAC-BELLEK-OLC-1125.py başlığı; BORC C-HAVVA-1125a; kod uret_petek.py:573-614 | KISMEN: bayrak kodda VAR; Koşu 40 `=2` ile koşuyor (KOSU-YAYIN.md:75 listesi `=2`). `=1`'in koşu için belgelenmiş kararı yok (yalnız ölçüm için öneri). | `=1` bellek tasarrufu sağlar ama gövde aşamasını (koşunun %78-81'i) tek süreç = yavaş yapar (GIL'li iş parçacığı ≈0,79 çekirdek, uret_petek.py:122-123 yorumu). Hız/bellek takası ÖLÇÜLMEDİ. Ölçülen: 4 süreç 60,3 GB (KUYRUK-1006:346), 2 süreç ≈30 GB. |
| 5 | "Uzak coğrafya seyreltme" aşamasının tek süreç tepesini (16,4 GB, Koşu 20; Koşu 40 tepe çalışma kümesi 16,6 GB) düşüren yama | KUYRUK-1006.md:372 ("düşüren tek şey o aşamanın kendi yamasıdır"); BORC E-HAVVA-1125b son cümlesi | UYGULANMADI (aşamanın bellek yaması commit'lerde YOK: bulunan seyrelt commit'leri doğruluk düzeltmesi fe1ce5d9d / kayıp taraması 8ba5d8318) | Hangi yapının büyüttüğü hâlâ ölçülmedi (#3'e bağlı). Bu, 16 GB hedefinin asıl engeli. |
| 6 | `_PUAN_ONBELLEK` için tavan (MOTOR_EZBER_TAVAN_PUAN) | uret_petek.py:3368, :7282; w-bellek2 deneyi (YEDEK-1105) | KISMEN: mekanizma kodda; varsayılan 0 = SINIRSIZ (bilerek) | Etkisi ölçülmedi; BORC E-HAVVA-1125b bunu "sınırsız tablolar" arasında sayıyor. Ayrıca `_VARLIK_ONBELLEK`, `_KUS_ONBELLEK`, `_DOLGU_ONBELLEK`, `_IC/_CEP_ONBELLEK` bilerek sınırsız ("pahalı yeniden hesap", uret_petek.py:3365-3366) ve boyları hiç ölçülmedi. |
| 7 | Sabit 48 GB pagefile + chrome kapat (commit tükenmesine karşı) | BORC A13 / C34 (19.11, HAVVA 19) | BELİRSİZ: A13 defterde "AÇIK — ACİL / Emre kararı bekliyor"; DONANIM-1124 sınırı 54,5 GB (RAM 23,7 + pagefile ~30,7) gösteriyor ⇒ pagefile otomatik büyümüş, sabit 48 GB yapılıp yapılmadığı kayıtta YOK. | Sistem ayarı, Emre'nin kararı. Koşu 25.11 commit 49,5/54,5 GB (boş 5,0 GB). |
| 8 | Ⓑ'ye kesit sayacı / devam noktası (checkpoint) (log'da kesit sayacı yok; "gerçek çözüm koşunun devam noktası") | BORC D9 (ÖLÇÜLEMEDİ listesi), DONANIM-1124-NIHAI.md UPS satırı | KISMEN: gövde aşaması için `MOTOR_DEVAM=1` (kodda :575-586, :8833-8911) VAR; Ⓑ için devam noktası YOK (yalnız dolgu SQLite önbelleği kapanışları saklıyor, dolgu.py:1036-1048). Ⓑ'de kesit sayacı yok. | Ölen koşuda Ⓑ önbellekten hızlı sürebilir ama denenmedi (D8: "isabet denenmedi"). |
| 9 | Yeni koşu bilgisayarı: Ryzen 9 9950X 16 çekirdek, 64 GB RAM, UPS, kule soğutucu (≈166 bin TL) | oturumlar/DONANIM-1124.md, -IKINCI-TUR.md, -NIHAI.md (24.11, HAVVA) | UYGULANMADI (öneri; defterde alım kararı kaydı yok) → BELİRSİZ/Emre kararı | Beklenen tek çekirdek hızı 1,5-2x [TAHMİN, ölçülmedi]; çoklu işçide toplam RAM ölçülmedi. |
| 10 | Aynı koşu içinde GEOS çökmesine karşı `MOTOR_PARALEL_ISCI` 4→1 | KUYRUK-1006.md:137-140, BORC C39 | BEKLEMEDE: bayrak kodda (uret_petek.py:8793, varsayılan 4); Koşu 40'ta işçi 1 GEOS 0xC0000005 ile çöktü ve 347 devlet ana süreçte hesaplandı (~5 sa 22 dk). Neden/tekrar edip etmediği incelenmedi (C39 AÇIK). | Hız kaybı (işçi çökünce ana tek çekirdek). |
| 11 | "Ⓑ dolgu bekle mi, durdurup dolgusuz mu koş" | BORC A14 | KARAR VERİLDİ (23.11, koşu sürsün), karar noktası 26.11 sabahı (D8). | Süre kararı, kod değil. |

## B. UYGULANDI (kodda/commit'te kanıtlı)

| # | Öneri | Kanıt | Etki (kayıtta) |
|---|---|---|---|
| 12 | Süreç paralelliği: `MOTOR_SUREC_ISCI=N` (GIL'i aşmak) — M-4533, 18 Eyl | uret_petek.py:122-154, :573-614, Faz 1 işçi diske yazma; commit 27b760881 (Lego motoru ana dala) | Koşu 40 "Yabancı devlet gövdeleri" 17 sa 57 dk duvar / 34 sa 34 dk işlemci (DONANIM-1124). Bellek işçi sayısıyla doğrusal: 4 süreç 60,3 GB, 2 süreç ≈30 GB (KUYRUK-1006:346-365). |
| 13 | İş parçacığı paralelliği `MOTOR_PARALEL_ISCI` (varsayılan 4) | uret_petek.py:8793, :8868, :9076-9128 | GIL yüzünden ≈0,79 çekirdek (uret_petek.py:122-123 yorumu); asıl kazancı süreç yolu verdi. |
| 14 | Artımlı motor / koşular arası SQLite önbellek (M-4537, Emre 18 Eyl); tuzlu anahtar; k1/col/kusat/dolgu/osm/sb/govde katmanları | uret_petek.py:633-713 (`_ONB`, `_ONB_GEO`), arac/motor_onbellek.py, commit 27b760881 | Kayıt: devlet-bazlı önbellek 10,3 kat ucuz (uret_petek.py:7261); Koşu 33 24 sa 11 dk (önbellek isabeti, e5db2a762) ve Koşu 36 genel önbellek ıskası 36 sa 09 dk etkin / 74 sa 45 dk duvar (72c4b7187). Tuz değişince isabet yok (D284 motor dondurma). |
| 15 | Kaldığı yerden devam `MOTOR_DEVAM=1` (M-4535) | uret_petek.py:575-586, :8833-8911; KOSU-YAYIN pkl doğrulama dersi (93ea1d847) | Gövde aşaması için; ön aşamalar (1,5-3 sa) yine koşar. |
| 16 | Gün başına ezberlere LRU tavanı (EZBER_TAVAN=128: `_DEVIR/_SAHIPLI/_SAHIP/_SK_SAHIP_EZBER`) — MOTOR-SINIR-KISIT-BELLEK-1016 | uret_petek.py:3352-3426, :5663, :7846, :8344 (w-bellek2 diff'i YEDEK-1105'te aynı kodu içerir; main'de var) | Koşu 26 "sanal bellek çok düşük" ölümü; dar kutuda +1,4 GB büyüme kaynağı. Bit denkliği "dar kutuda iki yönde" sınandı (belge iddiası). Koşu 40 tepesine etkisi ölçülmedi. |
| 17 | dolgu.py `_paylas` bellek patlaması: `alan.buffer(r)` yerine sınır kutusu süzgeci; kayıt bazlı `_birlestir` | commit ad9712b47 (22 Eki) | 1281'de 6-8 GB → ana süreç 0,99 GB (commit mesajı). |
| 18 | Dolgu süreç-içi kapanış önbelleği + SQLite (`dolgu2_kesit/talep`) | dolgu.py:155-158, :199-215, :1036-1048 | Önbellek 11,8 GB / 246.560 kayıt (BORC D8); durdurma sonrası isabet beklenir, DENENMEDİ. |
| 19 | Yayın kapısı/araç belleği: `kodla.py` sha256 parça parça + `_coz_havuz` yerinde; `coz-c` havuz metni parça parça | commit 400dbf630 (5 Kas), 04100e6ee (12 Kas) | ufuk_bant ve KASA MemoryError giderildi (commit mesajı). |
| 20 | Genel kısıt ve hız: çeviri çıkarıcı önbelleği (61b9656b8), paketle (paketler 20,26→19,14 MB fedb9cdc/fedbc4fc5), servis işçisi sw.js sıcak yükleme ~48 MB→0 (7a4fe1c6f), açılış hızı (860fc2f60, d129f09ce 22,7→6,1 sn) | commit'ler solda | Motor değil site/araç hızı; kayıt için listelendi. |
| 21 | Eczane önceliği: dinamik öncelik betiği (Idle/Normal, ACIL.txt), Pzt-Cmt 09-19 ≤%25 CPU ≤16 GB, mesai dışı tam kaynak | CLAUDE.md "Çalışma düzeni", BORC C34 (betik repoda değil, makinede; bu çalıştırmada dosya doğrulanmadı) | Belge iddiası; kod kanıtı bu depoda YOK. |
| 22 | Ölçüm aracı yazımı (#3) ve tasarım belgesi (#1-2) | de2f4a95b, 2487f6c17 | Bkz. A bölümü: araç var, ölçüm yok. |

## C. REDDEDİLDİ / vazgeçildi / önerilmedi

| # | Konu | Kayıt |
|---|---|---|
| 23 | `MOTOR_SUREC_ISCI=4` | KUYRUK-1006:365 "TEKRARLANAMAZ" (sağ kalması pagefile +21 GB büyümesine bağlıydı) ⇒ 2'ye inildi. |
| 24 | Koşuda (hata ayıklama için) önbelleksiz beşinci koşu | uret_petek.py:7261-7265 (M-0744): hız yerine doğruluk için önbellek bilerek geç açıldı (sonra açıldı). |
| 25 | 9950X3D, 360 mm AIO, DRAM'siz SSD, Linux geçişi | DONANIM-1124-NIHAI.md konsensüs tablosu: alma/katılmıyorum (gerekçeleri belgede). |
| 26 | Koşu 40'ı durdurup Ⓑ'siz yeniden başlatma (A14 seçenek B) | Emre 23.11: koşu sürsün (D8). |

## D. Aranıp bulunamayanlar (okunmadı/yok ayrımı)
- numba, rtree, prepared-geometry "hızlandırma önerisi" belgesi: BULUNAMADI — kodda `STRtree` (uret_petek.py:161, :1665, :3003, :3264...) ve `prep` (:163) kullanılıyor ama bunları "bellek/süre önerisi" olarak gerekçelendiren bir kayıt bulunmadı; Shapely 2 vektörleştirme önerisi: BULUNAMADI.
- `gc.collect` motorda yok (grep sıfır); `del` ile ara değişken temizliği var (uret_petek.py:1507, 1520, 1775, 2146, 2524 vb.) — kimin önerdiği kayıtlı değil.
- arsiv/ ve dersler/ tam taranmadı (anahtar sözcükle D170, D141, D283 başlıkları okundu; D141 süre tahmini dersi içeriği okunmadı).
- Kayıp: `Documents`/C:\atlas-veri DEVIR-KOORDINATOR-1022.md içeriği okunmadı (yalnız adı doğrulandı).
