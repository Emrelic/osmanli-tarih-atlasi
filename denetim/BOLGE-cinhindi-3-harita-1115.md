# BOLGE-CINHINDI-3-harita-1115 — Çinhindi bölge denetimi, adım 3 (harita uyumu)

Ağaç: worktree `agent-a994e7b7a57a29cc9`, dal `umit-1115-bolge-cinhindi` (taban `origin/main` 8fb10bdf1). Ölçüm 15 Kasım 2026, UMIT.
Bölge tanımı (ölçüm kutusu): lat 7-23,8 / lon 92,3-109,6 → **128 yerleşim**; künye = bu yerleşimleri `s:` ile sahiplenen ve `bolge: guneydogu-asya` olan **58 künye** (`girdi.yukle` + `girdi.oku_devletler`). Madde evreni: `data/olaylar*.js` + `data/kronoloji*.js`, `OLAY_TARAF` eşlemesiyle: **295 madde** (201 tanesi 1281 öncesi, 94 tanesi 1281 sonrası).

**Önce oku — yöntem sınırı:** bu oturumda erişilen web aracı yalnız Vikipedi türevi sayfalar ve archive.org taramaları döndürdü; CLAUDE.md'ye göre Vikipedi tek dayanak olamaz. Akademik kaynakların (Wyatt, Baker-Phongpaichit, Harvey, Hall, Taylor, Coedès, Lieberman, Leider, TDV'nin Tayland/Vietnam/Burma maddeleri) sayfaları **okunmadı** (TDV Cloudflare, ticari kitaplar kapalı). Bu yüzden aşağıda "teyit edildi" yalnız **atlasın kendi kaynaklı kayıtlarının birbiriyle tutarlılığı** için kullanılır; dış teyit gerektiren her yer "OKUNMADI" diye işaretlidir. Veri düzeltmesi yazılmadı (bkz. adım 7).

## 1. Çözülme
- `py arac/odak_olc.py` (15 Kasım 2026, bu ağaç): **ÇÖZÜLMEYEN ODAK ATFI: 0 kayıt**. Çinhindi maddelerinin `yer_id`/`odak_yer` adları atlasta birebir çözülüyor.
- `py arac/denetle.py` (tam koşu, bkz. adım 7): Değişmez 2 (sessiz toprak değişimi) **760 kırılma, 0 açık** (global); Değişmez 4/4c/4d/4s 0; Değişmez 1: 306 sahipsiz (beklenen 306, global). Bölge-özgü sayı denetle çıktısından ayrıştırılamadı (denetle bölge filtresi yok) → "ölçülmedi".

## 2. Kırılma-madde eşleşmesi (bu oturumda kurulan bölge ölçümü)
Ölçek: 1281+ ve `data/olaylar*.js`/`kronoloji_sinir*.js` evreni, `yer_id`/`odak_yer` kutudaki yerleşim olan **53 madde**.
- ±30 gün içinde o yerleşimin `s:` kırılmasına denk **olmayan: 14**. Bunlar:
  - 1287-01-01 | Pagan | Moğollar Pagan'ı ele geçirdi; Birman krallığı geçici olarak dağıldı, ülke Tay beylerinin y
  - 1351-01-01 | Ayutthaya | Ayutthaya Krallığı kuruldu, Sukhothai'nin bölgesel üstünlüğü sarsıldı
  - 1400-01-01 | Hanoi (Thăng Long),Thanh Hoa | Trần hanedanı devrildi, Hồ Quý Ly Đại Việt tahtını ele geçirdi
  - 1527-01-01 | Hanoi (Thăng Long) | Mạc Đăng Dung Lê tahtını gasbederek Mạc hanedanını kurdu
  - 1558-01-01 | Chiang Mai | Lan Na başkenti Chiang Mai Birmanlar'ın eline geçti
  - 1763-01-01 | Lamphun (Haripuñjaya) | Konbaung Birmanyası Lan Na'nın güneyini (Lamphun ve Chiang Mai) yeniden fethetti
  - 1868-07-03 | Moulmein (Mawlamyine),Mergui (Myeik) | İngiliz–Siyam Sözleşmesi onaylandı — Tenasserim sınırı çizildi
  - 1885-11-28 | Mandalay,Mandalay | Üçüncü Birman Savaşı: Mandalay İngiliz kuvvetlerinin eline geçti, Yukarı Burma işgal edild
  - 1887-06-26 | Lạng Sơn,Cao Bằng,Nanning | Pekin Sözleşmesi — Tonkin–Çin sınırı çizildi
  - 1894-10-17 | Chiang Rai,Kengtung | İngiliz–Siyam sınır haritaları değişildi — kuzey Burma–Siyam sınırı işaretlendi
  - 1896-01-15 | Kengtung,Muang Sing,Chiang Rai | İngiliz–Fransız Deklarasyonu — Mekong Burma–Laos sınırı oldu
  - 1896-08-07 | Muang Sing,Lạng Sơn | 1895 Tamamlayıcı Sözleşme onaylandı — Tonkin ve Laos'un Çin sınırı yeniden çizildi
  - 1904-02-13 | Luang Prabang,Battambang,Angkor (Siem Reap) | Fransız–Siyam Sözleşmesi — Mekong'un sağ yakasında yeni sınır

Yorum: (a) sınır maddeleri (1868, 1887-06-26, 1894, 1896-01-15, 1896-08-07, 1904): yerleşimin sahibi değişmiyor, yalnız sınır çiziliyor → "fazla kırılma" değil, bilgi maddesi (hata değil); (b) **1287 Pagan (iki madde)**: kırılma yok, Pagan künyesi 1297'ye kadar sürüyor → künye `t`ile madde 10 yıl çelişkili; (c) **1351/1400/1527/1558 yıl-temsilî maddeler**: gün kırılması var, madde yıl günlü değil; 1558 bu turda düzeltildi (14→13); (d) 1763 Lamphun: kronolojide Konbaung fethi var, pencere `1752-01-01 toungoo→konbaung` (Lamphun) → 1763'te el değişimi yok: Lamphun yerleşimi kaynak maddesine göre 1752'de Konbaung'a geçmiş sayılıyor ama madde "1752'de Konbaung Lamphun'u elinde tutmuyordu" diyor → **iç çelişki** (kaynak: Grabowsky JSS 87 okundu; Lamphun pencere sahibi 1752-1775 için `bulunamadı`/Özgür Lan Na tarafı).

## 3. Aynı olayın farklı yerleşimlerde farklı günü (iç tutarsızlık taraması)
Aynı (eski sahip → yeni sahip) çifti için birden çok kırılma günü:
```
ava -> toungoo
   1510-10-16 : 1 yerlesim: Toungoo
   1542-05-19 : 2 yerlesim: Prome (Pyay), Taungdwingyi
   1555-01-01 : 11 yerlesim: Pagan, Ava (İnwa), Shwebo, Myingyan, Yenangyaung
cin-cumhuriyeti -> cin-halk-cumhuriyeti
   1949-10-01 : 7 yerlesim: Nanning, Beihai (Pakhoi), Yuanjiang, Lin'an (Jianshui), Mengzi
   1950-05-01 : 2 yerlesim: Danzhou (Zhonghe), Yazhou (Yacheng)
fransiz-cinhindi -> vietnam-dc
   1954-07-21 : 8 yerlesim: Cao Bằng, Lạng Sơn, Nam Dinh, Thanh Hoa, Vinh
   1954-10-10 : 1 yerlesim: Hanoi (Thăng Long)
   1955-05-01 : 1 yerlesim: Hai Phong
guney-ming -> qing-hanedani
   1650-11-24 : 2 yerlesim: Danzhou (Zhonghe), Yazhou (Yacheng)
   1652-01-01 : 2 yerlesim: Nanning, Beihai (Pakhoi)
   1659-01-30 : 4 yerlesim: Yuanjiang, Lin'an (Jianshui), Mengzi, Kaihua (Wenshan)
hanthawaddy -> konbaung
   1755-05-03 : 3 yerlesim: Rangun (Yangon), Pathein (Bassein), Henzada (Hinthada)
   1757-05-06 : 3 yerlesim: Pegu (Bago), Moulmein (Mawlamyine), Thaton
konbaung -> ingiliz-hindistani
   1826-02-24 : 5 yerlesim: Mrauk U (Arakan), Moulmein (Mawlamyine), Tavoy (Dawei), Mergui (Myeik), Sandoway (Thandwe)
   1852-04-14 : 3 yerlesim: Rangun (Yangon), Pathein (Bassein), Henzada (Hinthada)
   1852-12-20 : 4 yerlesim: Pegu (Bago), Toungoo, Prome (Pyay), Thaton
   1885-11-28 : 6 yerlesim: Pagan, Ava (İnwa), Shwebo, Myingyan, Pakokku
   1886-01-01 : 6 yerlesim: Mandalay, Taungdwingyi, Yenangyaung, Meiktila, Minbu
konbaung -> tonburi
   1774-01-15 : 3 yerlesim: Chiang Mai, Chiang Rai, Nan
   1775-01-01 : 1 yerlesim: Phayao
   1775-01-14 : 1 yerlesim: Lamphun (Haripuñjaya)
kuzey-yuan -> ming-hanedani
   1382-01-16 : 3 yerlesim: Lin'an (Jianshui), Mengzi, Kaihua (Wenshan)
   1382-04-14 : 1 yerlesim: Yuanjiang
le-hanedani -> tay-son
   1786-06-01 : 6 yerlesim: Huế (Phú Xuân), Hội An (Faifo), Đà Nẵng (Tourane), Nha Trang (Kauthara), Quang Tri
   1786-07-21 : 10 yerlesim: Hanoi (Thăng Long), Cao Bằng, Lạng Sơn, Hai Phong, Nam Dinh
mac-hanedani -> le-hanedani
   1592-01-01 : 6 yerlesim: Hanoi (Thăng Long), Lạng Sơn, Hai Phong, Nam Dinh, Son Tay
   1677-01-01 : 1 yerlesim: Cao Bằng
nguyen-beyligi -> tay-son
   1773-01-01 : 1 yerlesim: Vijaya (Quy Nhơn)
   1777-01-01 : 7 yerlesim: Saygon (Gia Định), Vinh Long, Can Tho, Tra Vinh, Ben Tre
nguyen-hanedani -> fransiz-cinhindi
   1859-02-17 : 7 yerlesim: Saygon (Gia Định), Vinh Long, Can Tho, Tra Vinh, Ben Tre
   1883-08-25 : 10 yerlesim: Hanoi (Thăng Long), Cao Bằng, Lạng Sơn, Hai Phong, Nam Dinh
   1884-06-06 : 8 yerlesim: Huế (Phú Xuân), Hội An (Faifo), Đà Nẵng (Tourane), Vijaya (Quy Nhơn), Phan Rang (Panduranga)
san-fan -> qing-hanedani
   1680-01-01 : 1 yerlesim: Nanning
   1681-12-07 : 4 yerlesim: Yuanjiang, Lin'an (Jianshui), Mengzi, Kaihua (Wenshan)
siyam-chakri -> fransiz-cinhindi
   1893-10-03 : 3 yerlesim: Vientiane, Champasak, Attapeu
   1907-03-23 : 4 yerlesim: Angkor (Siem Reap), Battambang, Pursat, Sisophon
sukhothai -> ayutthaya
   1351-03-04 : 1 yerlesim: Lopburi
   1438-01-01 : 17 yerlesim: Sukhothai, Nakhon Si Thammarat, Phitsanulok, Nakhon Ratchasima, Songkhla
tay-son -> nguyen-hanedani
   1801-06-15 : 2 yerlesim: Huế (Phú Xuân), Quang Tri
   1802-06-01 : 5 yerlesim: Hội An (Faifo), Đà Nẵng (Tourane), Vijaya (Quy Nhơn), Nha Trang (Kauthara), Quang Ngai
   1802-06-20 : 10 yerlesim: Hanoi (Thăng Long), Cao Bằng, Lạng Sơn, Hai Phong, Nam Dinh
tonburi -> siyam-chakri
   1782-04-06 : 27 yerlesim: Sukhothai, Ayutthaya, Bangkok (Tonburi), Chiang Mai, Nakhon Si Thammarat
   1782-04-20 : 1 yerlesim: Nakhon Pathom (Phra Pathom)
toungoo -> konbaung
   1752-01-01 : 2 yerlesim: Lamphun (Haripuñjaya), Halin (Hanlin)
   1752-04-23 : 16 yerlesim: Pagan, Ava (İnwa), Toungoo, Prome (Pyay), Chiang Mai
```
Anlamlı olanlar (yıl-ayı farkı şüpheli, kaynak okunmadı):
- **toungoo→konbaung**: 2 yerleşim 1752-01-01, 16 yerleşim **1752-04-23** — kaynaksız gün; D4c yıl tolerasyonu nedeniyle denetle ötmez.
- **konbaung→tonburi**: Chiang Mai/Chiang Rai/Nan 1774-01-15 (**düzeltildi → 1775-01-15**), Phayao 1775-01-01, Lamphun 1775-01-14.
- **tonburi→siyam-chakri**: 27 yerleşim 1782-04-06, Nakhon Pathom 1782-04-20 (adım 1.2).
- **tay-son→nguyen-hanedani**: 1801-06-15 (Huế, Quang Tri), 1802-06-01 (5), **1802-06-20 (10; Hanoi dahil)**. Thăng Long'un düşüşü Temmuz 1802 olarak anılır (Taylor 2013, **okunmadı**) → ay hatası şüphesi.
- **mac→le**: 1592-01-01 (6 yerleşim): Lê'nin Thăng Long'u alışı 1592 sonu (gün kaynağı okunmadı), `01-01` ay-temsilî.
- **hanthawaddy→konbaung**: Rangun/Pathein/Henzada **1755-05-03**, Pegu/Moulmein/Thaton **1757-05-06** — iki ayrı olay (Dagon ele geçirilişi 1755, Pegu 1757); Hanthawaddy künye `t` = 1757-05-06 ile uyumlu, kaynak okunmadı.
- **fransiz-cinhindi→vietnam-dc**: 1954-07-21 (8), Hanoi 1954-10-10 (Hanoi'nin fiilî devri, Eylül/Ekim 1954 — kaynak okunmadı), Hai Phong 1955-05-01 (Fransız tahliyesi Mayıs 1955 — okunmadı).

## 4. Eksik/fazla kırılma
- **Eksik kırılma adayı:** Ayutthaya 1569-08-08 ve 1584-05-03 pencereleri var, kronoloji maddesi yok (denetle Değişmez 2 açık saymıyor → maddeler başka dosyada/taraf eşlemesiyle karşılanıyor olabilir; "ölçülmedi").
- **Fazla kırılma:** 1767-04-07→1767-10-01 `__BOSLUK__` (181 gün): 25 yerleşim Siyam'da boşluk; atlasın kendi beyanıyla "arandı, bulunamadı" (Wood: Taksin Ekim 1767'de Thonburi'yi aldı). Boşluk doldurma merdiveni: ① TDV (okunmadı) ② Wyatt/Baker-Phongpaichit (okunmadı) → **sonraki oturum**.
