# koja1 — JAPONYA yarısı (fork raporu)

## 1. Ölçülen (sayı)
- Kapsam: yamato, nara-japonya, heian-japonya (KUNYE_MAIN_DA) · masakado-shinno (MS1 dalında, künye yazılmadı) · abe-mutsu (KUNYE_YOK → YAZILDI) · yamatai (pencere dışı).
- Künye: 1 (`_part_jp_kunye.json`: abe-mutsu, f 1051-01-01 / t 1062-01-01, yıl hassasiyeti; kaynak yalnız Japon ansiklopedileri).
- Kronoloji_cok: 23 madde (`_part_jp_cok.json`): yamato 6 (528-12-07, 536-06-05, 604-05-06, 645-07-10, 646-01-01, 646-01-22) · nara-japonya 5 (710-04-13, 743-11-06, 764-10-10, 764-10-17, 784-12-27) · heian-japonya 6 (794-11-18, 794-12-04, 866-04-28, 866-10-01, 1180-11-04, 1185-12-22) · masakado-shinno 3 (940-01 ay, 940-03-19, 940-03-25) · abe-mutsu 3 (1051, 1057, 1062; yıl). 20 madde gün hassasiyetli (sexagenary gün + ay başı), 4 madde yıl/ay.
- Kronoloji_sinir: 15 madde (`_part_jp_sinir.json`) = 15 `s:` dilimi (her dilim başı için 1).
- Yeni yerleşim: 0 (`_part_jp_yer.json` boş: Masakado başkenti Shimōsa Ishii ve Abe başkenti Koromo-gawa için çift koordinat tanığı toplanmadı; atlasta Hiraizumi ayrı kayıt, Koromo-gawa ile özdeşliği sınanmadı).
- Yama: 5 yerleşim, 15 dilim (`_part_jp_yama.json`): Nara (3), Kyoto (2), Kamakura (2), Osaka (4), Hakata (Fukuoka) (4). Hepsi son dilim t = 1281-01-01 (mevcut zincir başı `kamakura 1281-01-01`) → `devam_gerekli` yok. `__BOSLUK__` dilimi 0.
- Takvim: her gün-hassasiyetli maddede `ic_not_takvim` var. Yöntem: gün indeksi=(JDN+49)%60 (2000-01-01=戊午 ile sınandı) + ortalama yeniay (±1). İç tutarlılık denetimleri: 940 (2/8 甲辰 → 3/9 乙亥 +31 gün), 866 (8. ay 癸酉朔 → 19. gün 辛卯; 閏3. ay 丙午朔 → 10. gün 乙卯), 872, 764 (9/11 乙巳 → 9/18 壬子), 743, 604, 645, 528, 1180 (10/15 甲午), 1185 (11/29 戊申). Hepsi ortalama yeniayla ±0-1 gün uyumlu.
- Doğrulama: `_jp_check.py` (id'ler devletler.js ∪ {masakado-shinno, abe-mutsu}, dilim sırası/çakışma, her dilim başı için sinir maddesi, son t=1281-01-01) → kusur 0.

## 2. Bulamadığım / doğrulayamadığım
- abe-mutsu: birincil kaynak (Mutsu waki, Konjaku, Azuma Kagami Kōhei öncesi) Wikisource'ta yok (ja 陸奥話記 / 将門記 / zh 陸奧話記 / 日本紀略 / 百練抄 → YOK); WebSearch yalnız ansiklopedi özeti verdi. Künye ve 3 madde Kotobank üzerinden Sekai Daihyakka (Heibonsha), Yamakawa, Britannica Japonya, Nihon Kokugo Daijiten alıntılarına dayanır; Kuriyagawa günü 9/7 (Sekai) ↔ 9/17 (öteki) çelişir → yıl hassasiyeti. Kuruluş: 1051 (Yoriyoshi valiliği) ↔ 1056 (Tenki 4) iki okuma.
- masakado-shinno: Shōmonki'nin kendisi okunamadı (Fusō ryakki alıntısı kullanıldı); 12/11 ve 12/15 için gün işareti yok → ay hassasiyeti. Fusō ryakki'de «十二月廿一日» Hitachi satırı 11. ay yerine görünüyor (kullanılmadı).
- Nanotsu = Hakata, Naniwa = Osaka özdeşlemeleri yaygın ama ayrı akademik/koordinat kaynağıyla açılmadı (atlas mevcut noktaları kullanıldı).
- Osaka 500-646 ve Hakata 500-536: tarihli tanık bulunamadı → dilim yazılmadı (yerleşim o aralıkta haritada yok).
- Kyoto→kamakura 1185-12-22→1281: Heian sarayı 1868'e sürer; BEYANLI YAKLAŞIKLIK (atlas modeli). Jōkyū (1221) sonrası Rokuhara tandai denetimi açılmadı.
- Yamato kronolojisi 450-500 aralığı, Fujiwara-kyō/Asuka yerleşimleri, Dazaifu, Tsushima: yazılamadı (aşağıda).

## 3. YAMA yazılamadı (neden)
Tsushima (İzuhara), Kagoshima, Kumamoto, Funai (Ōita), Okayama, Himeji, Sakai, Gifu, Sunpu (Shizuoka), Niigata, Odawara, Aizu-Wakamatsu, Matsumae, Hakodate: bu yerlerin 500-1281 arası sahibini kanıtlayan tarihli tanık bulunamadı/aranmadı (Hayato-Emishi bölgeleri 8-12. yy'a dek Yamato/Heian denetiminde değildi; bu çıkarım kaynaklı olmadığından yazılmadı). Hiraizumi: Abe (1051-1062) → Kiyohara-dewa (koja2 künyesi henüz yok; 1062-1087) → Ōshū Fujiwara; Hiraizumi=Koromo-gawa özdeşliği sınanmadı, yama yazılmadı.

## 4. Kararlar
- KÜNYE DÜZELTME ÖNERİSİ: heian-japonya t 1185-01-01 → 1185-12-22; kamakura f 1185-01-01 → 1185-12-22 (veya 1180-11-04 fiilî; KOJA_RAPOR2 madde 3, Emre kararı); nara-japonya f 0710-01-01 → 0710-04-13; heian-japonya f 0794-01-01 → 0794-11-18; yamato t 0710-01-01 → 0710-04-12. Yama dilimleri bu yeni günleri kullanıyor: künye aşımı denetimi (hayalet devlet) bu düzeltmeler uygulanmadan Kamakura (1180-11-04 heian-japonya) için sorun çıkarmaz; ama kamakura 1185-12-22 sınırı künye f'den sonradır → sorun yok. heian-japonya t künyede 1185-01-01 iken dilim t=1185-12-22: künye düzeltilmeden bu dilim 355 gün künye aşımıdır.
- Eski yıl-hassasiyetli maddelerin gün düzeltmesi: 0710-01-01 (baskent Heijō-kyō ×2), 0794-01-01 (Heian), 0645-01-01/0604-01-01 (yıl maddeleri) yeni gün maddeleriyle çifttir; eski maddeler silinebilir ya da güne çekilebilir (Emre).
- Nagaoka-kyō (784-12-27 → 794-11-18): kronolojiye yazıldı, ayrı dilim/künye ve yerleşim yazılmadı (Emre kararı, RAPOR2 madde 4).
- BOYA İHTİYACI (`arac/renkler.py BOYALAR` grep): yamato, nara-japonya, masakado-shinno, abe-mutsu YOK; heian-japonya ve kamakura VAR. yamato/nara-japonya ana hat yerleşimlerinde (Nara, Osaka, Hakata) görünür → boya gerekli.
- Yeni tür/bölge: yok (abe-mutsu tur=hanedanlik, bolge=dogu-asya).
- yamatai: pencere dışı (f 0189, MS 250 sonrası yok; MS 500'den önce) → yazılmadı.
- Birleştirme notu: yama kayıtlarında `ic_not_takvim` dilim içi alandır; `kaynak` alanı kısa alıntı + BEYAN/ABİ MERKEZ içerir.
