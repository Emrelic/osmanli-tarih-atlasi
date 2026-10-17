# TEYIT-KARAR-1014 — teyit-yil (96) ve tarih çelişkisi (23) satırları

Emre kararları (14 Ekim 2026) ①②③. Girdi: P1-bizans · P2-ingiltere-a · P3-dogu-asya-a ·
P4-kuzey-avrupa-iberya-sibirya `.cikti.tsv` (`teyit` satırları 3e8addd8'de işlenmişti).
Ölçüm: UMIT, worktree `agent-a789e9156ab666552`, taban `origin/main` 9bf3366e (geride 0).
Satır numaraları değişiklik SONRASI dosyanın satırıdır.

## ① teyit-yil — `py arac/teyit_uygula.py <4 tablo> --yil-karari --rapor denetim/TEYIT-KARAR-1014`

Sınır bağlılığı `arac/denetle.py` içe aktarılarak ölçüldü: (i) D2 evreni (olaylar*/kronoloji_sinir*)
+ 2/2s/2i kırılmasına ±30 gün; (ii) t = künye f/t (künye = madde künyesi ya da başlıkta adı geçen,
o gün ucu olan devlet); (iii) t = yerleşim `s:/d:/v:/isg:` ucu ve dönem kimliği künye/taraf
(`d:`/`v:` = osmanli). Ek koruma (beyanlı): `YYYY-01-01` künyenin f'sinden önceye düşüyorsa inmez.
Satır satır sonuç: `uygulama.tsv`; bağlı kayıt güncellemeleri: `baglanti.tsv`.

| sonuç | sayı |
|---|---|
| **yıla indi** (t → YYYY-01-01, eski gün `ic_not_t`ye, kaynak başa) | **35** |
| **sınıra bağlı — gün kaldı**, kaynak "[yalnız yıl teyitli; gün teyitsiz]" notuyla | **7** |
| t zaten YYYY-01-01 — yalnız kaynak eklendi (11'i bağlı ölçüldü, değişen yok) | 54 |
| eşlenemedi | 0 |

Dağılım: P1 21 · P2 23 · P3 46 · P4 6. D2 evreninde (olaylar*/kronoloji_sinir*) teyit-yil satırı **0** —
(i) ölçütü kuruldu ama bu partide kimseyi bağlamadı.

**Sınıra bağlı, günü kalan 7:**
- `KRONOLOJI_BIZANS[9]` 1311-03-15 Katalanlar Atina'yı aldı — ii: katalan künye f · iii: Larissa/Tırhala/Volos/Kalabaka… bizans.t + katalan.f (12 uç)
- `KRONOLOJI_BIZANS[42]` 1387-04-09 Selanik düştü — iii: Selanik/Kavala/Pravişte/Lankaza bizans.t
- `KRONOLOJI_BIZANS[61]` 1423-09-14 Selanik Venedik'e — iii: Selanik bizans.t + venedik.f
- `KRONOLOJI_BIZANS[75]` 1452-08-31 Rumelihisarı tamamlandı — iii: Rumeli Hisarı `d:` (osmanli) f; taraf elle beyan (`TARAF_EK`)
- `KRONOLOJI_BIZANS[81]` 1460-05-31 Mora Despotluğu ilhakı — ii: mora-despotlugu künye t
- `alas-ozerkligi#0` 1917-12-18 ve `#1` 1917-12-26 — künye-penceresi: 1917-01-01 < künye f 1917-12-01 (kaynak ay verir: 1917-12)

**Zaten yıl düzeyinde olup bağlı ölçülen 11** (değişen yok): BIZANS[31] 1361, [48] 1394; goryeo#9 1232
(Moğol eşleşmesi zayıf — başlık-adı sezgisi), goryeo#11 1356; goguryeo#4, baekje#0, baekje#3, dian#3,
dogu-wei#0, dogu-wei#1, bati-wei#0 (künye f/t).

**Bağlı kayıt güncellemesi (dosya + t + b ile):** `yer_yama_ing.js` 6 kayıt (1284-03-19, 1296-03-30,
1337-10-01, 1348-06-01, 1360-05-08, 1536-03-01), `etiket_yama.js` 2 kayıt (1348-06-01, 1665-06-01).
**Dokunulmayan:** `kronoloji_fransa.js` "Brétigny Antlaşması" 1360-05-08 — aynı olayın Fransa
kronolojisindeki AYRI maddesi (kendi kaynağıyla); İngiltere maddesi 1360-01-01'e indi, Fransa'daki
1360-05-08'de kaldı. Emre karar versin (öneri: ayrı teyit; Brétigny 8 Mayıs 1360 akademik kaynakta kolay bulunur).

## ② 23 tarih çelişkisi (elle, TARIH-DUZELT-1014 yöntemi)

TDV günleri **ham HTML'den** (`py` urllib, 14 Ekim 2026) okundu: tirnova--bulgaristan, bayezid-i,
orhan, musa-celebi, murad-ii, mehmed-i, mora, bursa, osman-i.

| # | madde | eski → yeni | dayanak | birlikte kayan (dosya:satır) |
|---|---|---|---|---|
| 1 | BIZANS[12] Bursa ablukası | 1317-01-01 → **değişmedi** | TDV «Osman I» 1303, TDV «Bursa» 1308 — iki TDV maddesi ayrışıyor | — |
| 2 | BIZANS[14] Pelekanon | 1329-06-10 → 1329-06-01 | TDV «Orhan»: «Savaşın ilk günü (1 Haziran 1329)»; bozgun «ikinci günü» (TDV'nin yazdığı tek gün alındı) | kronoloji_bizans:181 · savaslar:179 (meydan), 701 (sefer t) · savas_kunye_1:77-81, 109 (savas_t; savas_t_ek kaldırıldı), 112 |
| 3 | BIZANS[20] taç mücevherleri | 1345-01-01 → 1343-01-01 | Kushch 2021 (hakemli): «August 1343» — ay düzeyi ⇒ yıl + beyan | kronoloji_bizans:219. 1345-01-01'deki Makedonya bizans→sırp uçları BAŞKA olay, kaydırılmadı |
| 4 | BIZANS[46] Tırnova | 1393-07-17 → 1393-06-17 | TDV «Tırnova (Bulgaristan)» «(17 Haziran 1393)»; TDV «Bayezid I» aynı | kronoloji_bizans:377 · olaylar_ek:38 (t, gun, kaynak, ic_not_t) · kronoloji_balkan:408-414 · devletler:1021 (bulgaristan) · yerlesimler:359 (Tırnova s.t + d.f), 1448 (Plevne s.t + d.f) · yer_yama_1923_1945:153, 577 · ekokuma_bakis:59 · ekokuma_karadeniz:131 — 12 geçiş, boşluk/çakışma yok |
| 5 | BIZANS[55] Musa Çelebi kuşatması | 1411-06-01 → 1411-01-01 | TDV «Mûsâ Çelebi»: «1411 sonbaharında» (mevsim ≠ ay ⇒ yıl) | kronoloji_bizans:433 · olaylar_ek3:19 (t, gun «1411 sonbaharı») · savaslar:96 |
| 6 | BIZANS[59] II. Murad cülûsu | 1421-05-26 → 1421-06-25 | TDV «Murad II» ve «Mehmed I»: 23 Cemâziyelâhir 824 / 25 Haziran 1421 | kronoloji_bizans:458 · padisahlar:111 mehmed1 `to` 1421-05 → 1421-06 (murad2.from ile bitişik; + ic_not_to) |
| 7 | BIZANS[64] Mora son Latin toprakları | 1428-01-01 → 1430-01-01 | TDV «Mora»: Patras 1430, «yeniden zaptı tamamlandı» | kronoloji_bizans:490 |
| 8 | INGILTERE[9] Northampton | 1328-05-01 → 1328-05-04 | Oxford Companion to British History | kronoloji_ingiltere:217 · yer_yama_ing:31 |
| 9 | INGILTERE[25] VI. Henry | 1422-08-31 → 1422-09-01 | EWB (Gale) «Sept. 1, 1422» | kronoloji_ingiltere:319 |
| 10 | INGILTERE[36] VIII. Henry | 1509-04-22 → 1509-04-21 | EWB + Renaissance & Reformation RL 21 Nisan; varyant 22 (babanın ölümü, Europe 1450–1789), 23 (ilân, Oxford) `ic_not_t`de | kronoloji_ingiltere:388 |
| 11 | INGILTERE[44] Dua Kitabı | 1549-01-21 → 1549-01-01 | Dictionary of British History: «March 1549» — ay ⇒ yıl + beyan | kronoloji_ingiltere:437 · yer_yama_ing:91 |
| 12 | INGILTERE[61] Jamestown | 1607-05-14 → 1607-05-13 | Oxford Companion to US History «13 May» | kronoloji_ingiltere:551 · yer_yama_ing:103 (+ kaynak metni) · yerlesimler_amerika:928-931 (kur + s.f) · yer_yama_1923_1945:2651 — öncül dönem yok |
| 13 | goryeo#6 Liao barışı | 1022-01-01 → **değişmedi** | EKC «이듬해» 1019 mu 1020 mi belirsiz; 1022 tanıma EKC'de yok | — |
| 14 | goryeo#13 Wihwado | 1388-05-22 → 1388-06-26 | EKC ay-güneş 5/22; Academia Sinica 兩千年中西曆轉換: 明洪武21年5月22日 = Jülyen 1388-06-26 (6/8 = 07-11). Başlık aralığı 26 Haziran–6 Temmuz | devletler:5529 |
| 15 | ezo#0 kuruluş | 1868-12-15 → 1869-01-27 | Yamakawa 明治元年12月15日; NAOJ 日本の暦日データベース = 1869-01-27 | devletler:18070 künye **f** (+ ic_not_f, özet «Haziran 1869»), 18071 |
| 16 | ezo#4 Hijikata | 1869-05-11 → 1869-06-20 | Britannica Japan 明治2.5.11; NAOJ | devletler:18075 |
| 17 | ezo#5 teslim | 1869-05-18 → 1869-06-27 | Britannica Japan 明治2.5.18; NAOJ | devletler:18070 künye **t** (+ ic_not_t), 18076 |
| 18 | bati-wei#9 son | 0557-01-01 → **değişmedi** | Kaynak yalnız Çin yılı 556 verir; Çin 556 (丙子) Jülyen 557-02-14'te biter (Sinica) ⇒ Jülyen yılı belirlenemez | — (künye t'ye bağlı) |
| 19 | danimarka#9 Grönland | 1985-01-01 → 1985-02-01 | CSM 1 Şubat 1985 + Hollanda antlaşma bankası 01-02-1985 | devletler:1814 (Grönland künyesinde 15976 zaten 1985-02-01) |
| 20 | cebelitarik-ingiliz#1 | 1779-06-24 → 1779-06-21 | EBSCO Research Starters | devletler:15933 |
| 21 | schleswig-holstein-1848#6 Isted | 1850-07-24 → 1850-07-25 | lex.dk «Isted» | devletler:16795 |
| 22 | norvec-1814#2 | 1814-07-27 → 1814-07-26 | SNL «krigen i 1814» | devletler:17206 (başlıktaki "XIII. Karl" — SNL'ye göre Karl Johan; düzeltilmedi, `ic_not_t`de beyan) |
| 23 | uzak-dogu-cumhuriyeti#6 | 1922-06-24 → 1922-07-19 | BSE «Чанчуньская конференция» | devletler:17684 |

Değişen 20, belirsiz kalan 3 (#1, #13, #18). Takvim kuralı uygulamaları: #14-17 (tablo çevirisi +
`ic_not_t`), #3/#11 (ay ⇒ yıl), #5 (mevsim ⇒ yıl), #18 (çevrilemedi ⇒ değiştirilmedi).

**Dokunulmayanlar / açık kalanlar:**
- `arac/uret_donemler.py:488` "Tırnova'nın düşüşü" 1393-07-17 — üretim betiği (eski donemler üreticisi); veri işinde dokunulmadı.
- `data/devletler.js.yedek`, `glm/`, `gemini/`, `oturumlar/` arşiv kopyaları — dokunulmadı.
- Ezo: `#1` Matsumae 1868-12-18 (Batı kaynaklı Gregoryen, doğru) artık künye f'sinden (1869-01-27) ÖNCE; `#2/#3`
  1869-01-01 ("Nisan/Mayıs 1869", büyük olasılıkla eski takvim ayları) yıl düzeyinde f'den önce görünür. `denetle`
  ihlal saymıyor. Öneri: #3 «Mayıs 1869» ay-güneş ise Haziran'a; Matsumae için künye f'yi Ezo kuvvetlerinin
  Hakodate'yi alışına çekmek ya da maddeyi öncül olarak bırakmak — Emre kararı.
- Ezo ve Goryeo yerleşim noktası taşımıyor (harita etkisi yok).

## Ölçüm

- `py arac/kodla.py coz-c` (iki ham dosya) → `py arac/denetle.py` **çıkış 0** ("SONUÇ: temiz"); Değişmez 2: 679 kırılma 0 açık; 2s 190 açık (tavan 191); 2i 1 (tavan 1).
- `py arac/kaynak_guven.py` tam ölçüm, **güvensiz önce → sonra** (önce = HEAD~1 veri dosyaları geri alınarak aynı ağaçta ölçüldü):

| evren | önce | sonra | fark |
|---|---|---|---|
| dosya maddesi | 492 | 437 | −55 |
| künye-kronoloji | 2043 | 1982 | −61 |
| künye kaynak | 26 | 26 | 0 |
| **toplam** | **2561** | **2445** | **−116** (96 teyit-yil + 20 çelişki) |

- `py denetim/KAYNAK-ARAYUZ-1014/esit_sina.py` **FARK 0** (24696 madde; guvensiz 2445).
- `py arac/renk_olc.py` çıkış 0 · `py arac/odak_olc.py` çözülmeyen odak atfı 0.
- `py arac/paketle.py yenile` (30 paket, 11 değişen kaynak) + `py arac/surum_damgala.py` (r12339).
- Harita bu değişikliği HAVVA'daki bir sonraki tam koşudan sonra gösterir (Tırnova/Plevne, Jamestown).
