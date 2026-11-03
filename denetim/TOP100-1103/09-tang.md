# 09 · Tang Hanedanı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py; ek betikler scratchpad'de, salt okur)

## Özet
- Künye: 2 (tang, wu-zhou). Wu Zhou AYRI künye olarak VAR (690-10-16 → 705-03-03); Tang künyesi aralığı kapsar, yerleşimlerde `s:` tang | wu-zhou | tang diye bölünmüş (Chang'an, Luoyang, Changsha, Fuzhou). Eksik künye yok.
- Açık kırılma: tang 0/34 · wu-zhou 0/2 (Değişmez 2 kapalı). Eksik madde: 3 (kuruluş günü, Talas, Anxi/Beiting kaybı — aşağıda).
- EN AĞIR 3 BULGU: (1) **Haritada Tang neredeyse yok:** tang künyesine yalnız 18 yerleşim bağlı (en geniş yıl 673'te 14); Çengdu 347–907, Dunhuang 423–851, Kanton -110–907 `__BOSLUK__`; Taiyuan, Yangzhou, Hangzhou, Kaifeng, Suzhou, Turfan, Lhasa'da Tang dönemi için `s:` YOK. (2) **f = 617-12-12 kendi beyanıyla Tang'ın kuruluş günü değil** (künye `ic_not`: Gongdi'yi tahta çıkarma günü); Jiu Tangshu 卷1 «五月甲子 … 改隋義寧二年為唐武德元年» = 618-06-18 (Jülyen; aday, çeviri tablosu bu makinede yok). (3) Tang `kaynak:` künyede Jiu Tangshu birincil, ama `ozet`/`kronoloji` (evren dışı) hâlâ Britannica; ikinci bağımsız akademik kaynak (Cambridge History of China cilt 3) okunamadı.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| tang | Tang Hanedani | 0617-12-12 | 0907-06-01 | VAR; f şüpheli (b bölümü); yerleşim 18 |
| wu-zhou | Wu Zhou (Wu Zetian) | 0690-10-16 | 0705-03-03 | VAR; ayrı künye; yerleşim 4 (691-704 arası 4) |
| sonraki-tang-5hanedan | Sonraki Tang (Shatuo) | 0923-05-13 | 0937-01-11 | AYRI devlet (Tang değil; 4 Tang künyesi sayılmaz) |
| tang-jin-shatuo-prensligi | Jin (Li Keyong) | 0902-01-01 | 0923-01-01 | AYRI (öncül) |
Eksik evre: yok. Eksik "Sui son dönemi / Gongdi" künyesi: 617-12-12 → 618-06-18 arası Chang'an'ın sahibi (Yining rejimi) künyesiz — f düzeltilirse bu 6 aylık dilim Chang'an'da boşluk olur (öneri aşağıda).

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | öneri |
|---|---|---|---|---|---|
| tang f | 0617-12-12 | Jiu Tangshu 卷1 (高祖紀, zh.wikisource): «甲子，高祖即皇帝位於太極殿 … 改隋義寧二年為唐武德元年» — 五月甲子, Wude 1 (okundu; künye `kaynak:`ından, ben yeniden açmadım) | Wikipedia (yalnız yol gösterici, DAYANAK DEĞİL): 18 Haziran 618; Cambridge History of China 3, bölüm "The founding of the T'ang dynasty: Kao-tsu" (Wechsler) — metne ERİŞİLEMEDİ | Künyenin kendi `ic_not`u 617-12-12'yi "Gongdi'yi tahta çıkarma günü, imparatorluk değil" diye beyan ediyor. Olaylar'daki madde (olaylar_ortacag_cin.js:15) aynı günü "Li Yuan'ın orduları Daxing'i aldı" diye yazıyor — iki ifade çelişiyor; hangisi doğruysa 617-12-12 TANG'ın kuruluşu değildir. | f → `0618-06-18` (Jülyen, 五月甲子). Çeviriyi `arac/cin_gun.py 618 5 甲子` ile KASA doğrulasın (calendarData.js bu makinede D:\ yok; ölçemedim). 617-12-12'den 618-06-18'e kadar Chang'an/Luoyang vb. için öncül dilim: "Yining rejimi (Gongdi, Li Yuan naipliği)" künyesi YOKSA o dilim `__BOSLUK__` + beyan (Boşluk merdiveni ①-⑤ TDV'de Tang yok → Çin kaynakları). |
| tang t | 0907-06-01 | Jiu Wudaishi 卷3 (梁太祖紀) 開平元年四月甲子 = Aidi'nin tahtı devri; künye ic_not'u arac/cin_gun.py ile 0907-06-01 | (Zhu Wen'in tahta çıkışı 四月戊辰 = 0907-06-05 — ayrı gün, sonraki-liang f'si 0907-06-01 ile AYNI gün; olaylar_ortacag_cin.js:43-44 iki maddeyi 0907-06-01'e koymuş) | Tutarlı (devir günü seçilmiş). İkinci bağımsız kaynak okunamadı. | Değişiklik yok. İsteğe bağlı: Zhu Wen'in tahta çıkış maddesi 0907-06-05'e (四月戊辰) çekilebilir; ama sonraki-liang f'si 0907-06-01 olduğundan şimdiki hâl bilinçli sapma. |
| wu-zhou f | 0690-10-16 | Jiu Tangshu 卷6 (則天皇后紀) «九月九日壬午，革唐命，改國號為周» | Wikipedia 16 Ekim 690 (dayanak DEĞİL) · Cambridge History of China 3 (Twitchett, "Wu Hou") ERİŞİLEMEDİ | Jülyen 690-10-16 olağan hesapla tutarlı (ben tablo ile doğrulayamadım). Tek akademik kaynak okunamadı. | Değişiklik yok; teyit `cin_gun.py 690 9 壬午`. |
| wu-zhou t | 0705-03-03 | Jiu Tangshu 卷7 (中宗紀) «二月甲寅，復國號，依舊為唐» | — | Künye ic_not: 705-03-03 = 神龍元年二月甲寅 Tang adının iadesi (çeviri). NOT: Wu Zetian darbeyle devrilişi/tahttan çekilişi Şubat 705'te (Zhongzong'un tahta çıkışı ~705-02-22, Jülyen), ad iadesi 705-03-03; t = ad iadesi günü seçilmiş. | Değişiklik yok; olaylar tarafında 705-02 sonu "Wu Zetian devrildi" maddesi var mı bkz. c). |
Evre sınırları (Tang içi): `s:` kırılmaları 34 gün; An Lushan evresi Chang'an için 756-07-14 → 757-11-14 (Xuanzong'un kaçışı / Xiangji Tapınağı) tutarlı ve maddeli (olaylar_ortacag_cin.js:29-30); Luoyang 756-01-18 / 757-12-03 / 759-09-26 / 762-11-20 tutarlı maddeli; Chang'an 881-01-08 → 883-05-20 (madde 883-05-18, 2 gün sapma, pencere içinde).

## c) Kronoloji (Değişmez 2 evreni: olaylar_ortacag_cin.js, olaylar_ortacag_bekleyen_acik.js)
Var olanlar: 617-06-23 Li Yuan ayaklanması (cin.js:14) · 617-12-12 Chang'an alındı (cin.js:15) · 618-04-11 Yangdi öldü (cin.js:16) · 626-07-02 Xuanwu Kapısı (cin.js:17) · 626-09-03 Taizong (cin.js:18) · 640-09-19 Gaochang (bekleyen_acik.js:6) · 640-10-11 Anxi Protectorate (cin.js:21) · 755-12-16 An Lushan (cin.js:26) · 756-02-05 · 756-07-10 Tongguan · 756-07-14 Xuanzong kaçışı · 757-11-14 · 757-12-03 Luoyang (bekleyen_acik.js:15) · 763-02-17 · 763-11-18 Tibet Chang'an'da · 821 Tang-Tibet antlaşması · 879 Guangzhou · 880-12-22 · 881-01-08 · 881-01-16 · 883-05-18 · 904-02-10 · 904-09-22 · 907-06-01 (cin.js:43-44).
Künye içi `kronoloji:` (devletler.js:20445-20452) evren DIŞI ve hâlâ Britannica (dayanak olamaz): 0618-01-01 kuruluş (YIL hassasiyeti, 618-06-18 değil), 0690-01-01, 0705-01-01, 0712, 0755, 0875, 0907-01-01 — gün çelişkili/kaynak geçersiz (bu satırlar evren dışı olduğu için Değişmez 2'yi etkilemez ama kullanıcıya görünür).
EKSİK madde önerileri:
1. `{ t:"0618-06-18", kesinlik:"gun", b:"Li Yuan Chang'an'da imparator oldu: Tang hanedanı kuruldu (Wude 1)", tur:"kurulus", yer_id:"Xi'an (Chang'an)", kaynak:"Jiu Tangshu 卷1 (高祖紀): «甲子，高祖即皇帝位於太極殿 … 改隋義寧二年為唐武德元年» (五月甲子; Jülyen gün cin_gun.py ile doğrulanmalı); Cambridge History of China 3 (Wechsler) — okunamadı" }` (f düzeltilirse ŞART).
2. Talas (Tang–Abbâsî çatışması, 751): olaylar'da "Talas/Talâs" maddesi YOK (grep). `{ t:"0751-01-01", kesinlik:"yil", b:"Talas Muharebesi: Abbâsî-Karluk kuvvetleri Gao Xianzhi komutasındaki Tang ordusunu yendi", tur:"savas", yer_id:"Taşkent", kaynak:"DOĞRULANMADI — TDV 'Talas' maddesi ve Cambridge History of China 3 okunmalı (gün/ay kaynakta aranacak; yıl dışında hassasiyet verme)" }`. Abbâsî dosyasında da (06-abbasi.md) önerildi.
3. Anxi/Beiting'in düşüşü: Kaşgar `s:` t 0766-01-01, Hotan/Kuça/Karaşar t 0791-01-01 (yıl hassasiyeti) — ikisini de kapatan maddeler (yer_id'li) ölçerde "açık" çıkmadı (kapanış var), ama gün/kaynak sorulmadı; teyit önerilir. Wu Zetian devrilişi (705-02) için ayrıca `{ t:"0705-02-22", … Wu Zetian tahttan çekildi, Zhongzong tahta çıktı }` — gün Jiu Tangshu 卷7'den (okunmadı), eklemeden önce okunmalı.

## d) Harita uyumu
Açık kırılma: **0** (tang 34 kırılma günü, wu-zhou 2). Yerleşim: tang 18 kayıt; yıl:yerleşim 631:8 645:9 659:13 673:14 687:9 701:8 715:12 729:12 743:12 757:10 771:11 785:11 799:8 813–869:8 897:6. En geniş yıl 673 (14).
Ölçülen sahiplik (750 ve 670): Chang'an, Luoyang, Nanjing (620-01-01→902), Changsha, Jingzhou, Hanoi, Pyongyang (670), Kaşgar/Hotan/Kuça/Karaşar (649-670, 692-766/791) = Tang. **Delikler/eksikler (750-07-01):** Çengdu `__BOSLUK__` (347–907), Dunhuang `__BOSLUK__` (423–851; Tang 7.-8. yy sahibi tartışmasız), Kanton `__BOSLUK__` (-110–907), Pyongyang 750 `__BOSLUK__`; Taiyuan (Tang `s:` YOK, kayıt 895'te başlıyor), Yangzhou (902'de başlıyor), Hangzhou (907), Kaifeng, Suzhou, Wuchang, Nanchang, Turfan (Gaochang), Lhasa (Tibet), Chengdu çiftleri: tekrar kayıt (Çengdu (Chengdu) ve Chengdu — mükerrer). Yani Tang'ın bilinen çekirdeğinin (Jiangnan, Sichuan, Shanxi, Guangdong, Hexi koridoru) çoğu haritada Tang rengi taşımıyor veya delik.
Şüpheli kayıtlar (önce kaynaklarına bak): Hanoi s: tang **0618-01-01** (Tang'ın kuruluşundan 5,5 ay önce; Jiaozhi'nin Tang'a bağlanışı ~622) ; Fuzhou s: tang **0618-06-18** (kuruluş günüyle aynı gün — Fujian'ın o gün Tang'a ait olduğu kaynaklı mı belirsiz; bu bir "kuruluş gününe yaslanma" izlenimi veriyor); Nanjing 0620-01-01 (yıl). Bunlar beyanlı yaklaşıklık olarak yazılmış olabilir (Hanoi `kaynak:` "BOŞLUK BEYANI karşılandı" diyor) — KASA kaynakları yeniden okusun.
Önerilen `s:` dönemleri (kaynak okunacak; ben yazmıyorum): Çengdu 621-ila-907 (Wude 3, Sichuan Tang'a geçişi), Dunhuang 621→781 (Tibet işgali; Guiyi-jun 851), Kanton 621→907, Taiyuan 617→895 (Tang'ın Beidu'su), Yangzhou 624→902, Hangzhou 622→907, Turfan/Gaochang 640-09-19→790.

## Önerilen düzeltmeler (KASA için)
1. data/devletler.js `id:"tang"` f: "0617-12-12" → "0618-06-18" (çeviri doğrulaması şartıyla) + `ic_not_f` güncelle; olaylar_ortacag_cin.js'e 0618-06-18 kuruluş maddesi; Chang'an 617-12-12→618-06-18 dilimi için Yining/Gongdi künyesi veya beyanlı `__BOSLUK__`.
2. data/devletler.js:20445-20452 künye içi `kronoloji:` Britannica kaynaklarını Jiu/Xin Tangshu ile değiştir; 0618-01-01 → 0618-06-18.
3. Eksik Tang `s:` dönemleri (c/d): Çengdu, Dunhuang, Kanton, Taiyuan, Yangzhou, Hangzhou, Turfan — her biri kaynak okunarak (Jiu Tangshu 地理志).
4. olaylar_ortacag_cin.js'e Talas (751) maddesi (kaynak doğrulaması şartıyla) ve 705-02 Wu Zetian'ın devrilişi.
5. Mükerrer Çengdu/Chengdu kayıtlarını birleştir (mükerrer tarama kuralı).

## Erişilemeyen kaynaklar
- Cambridge History of China cilt 3 (Twitchett, Sui and T'ang China, 589–906): bölüm 4 "The founding of the T'ang dynasty: Kao-tsu" (Wechsler) ve "Empress Wu" bölümü — Cambridge Core sayfası yalnız başlık verdi.
- Britannica (HTTP 403, çekilemedi) — Tang/Wu Zetian/Mehmed vb. maddeleri.
- arac/cin_gun.py'nin veri dosyası D:/kaynak-derlem/cin-takvim/src/calendarData.js bu makinede YOK (Jülyen gün çevirileri ölçülemedi).
- TDV'de Tang/Çin maddesi okunmadı (TDV kapsamı zayıf; Çin için birincil kaynak Jiu/Xin Tangshu).
