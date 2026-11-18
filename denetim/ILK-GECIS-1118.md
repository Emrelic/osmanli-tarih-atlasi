# İLK GEÇİŞ 1118 — `kur:`suz yerleşimlerin kaynakta ilk geçtiği gün

18 Kasım 2026 · EMRELİC · dal `claude/nostalgic-khorana-351579` · ağaç `origin/main` 2c47a1d22 (fetch'te geride 0).
Bağlam: Emre'nin sahne kuralı (yerleşim, kaynakta ilk geçtiği günden önce haritada yok) her çağda aynı.
**Emre kararı (18 Kas, EMRELİC ana oturumu üzerinden):** 1281 öncesine düşen `kur:` da veriye yazılır.

Tam liste, nokta başına karar ve kaynak: `denetim/ILK-GECIS-1118/ILK-GECIS-1118.tsv` (2129 satır).
"Zincir gerekli" sütunu 1281 öncesi sahiplik işi için hazırdır.

## ① Ne ölçtüm

**Liste** (`arac/girdi.py yukle()`). Ölçüt: `kur:` yok ve en erken d/v/s `f` = `1281-01-01` ya da hiç kayıt yok.
Toplam **2129** nokta: zinciri 1281'de başlayan **2038** + hiç kaydı ve `bit:`i olmayan **91**. Başlangıçtaki ölçümle aynı.

| k | 1281 zinciri | kayıtsız | toplam |
|---|---|---|---|
| 1 | 82 | 1 | 83 |
| 2 | 71 | 0 | 71 |
| 3 | 826 | 1 | 827 |
| 4 | 523 | 0 | 523 |
| 0 | 536 | 89 | 625 |

**Araştırılan: k1 ve k2'nin tamamı, 154 nokta.** 3 sonnet alt ajanı iki turda araştırdı, ana oturum (Opus) denetledi.

| karar | nokta |
|---|---|
| bulundu → veriye yazıldı | **34** |
| şüpheli (yazılmadı) | **93** (5'i ana oturumca bulundu'dan çekildi, aşağıda) |
| bulunamadı | **27** |
| **araştırılmadı** (k3, k4, k0) | **1975** |

**Yazım kalıbı.** VERI-YAPISI "Şırnak kalıbı" kullanıldı:
- `kur:` = ilk yazılı tanık, `kesinlik:` = tanığın hassasiyeti.
- `neden:` alanına "ILK-GECIS-1118 · KURULUŞ DEĞİL, İLK YAZILI TANIK — görünme için ALT SINIR" yazıldı, ardından kaynak cümlesinin özeti, kaynak, URL ve not.
- Kaynak açıkça kuruluşu tarihliyorsa `neden:` "KURULUŞ" der.
- Kayıtta zaten `neden:` varsa yeni metin başa eklendi ("‖ ÖNCEKİ NEDEN:" ile).
- MÖ yıllar astronomik yazıldı: Yarkent "MÖ 100" → `-0099`.
- Yüzyıl hassasiyetinde geç uç alındı, çünkü görünme alt sınırıdır: "X. yy" → `0999-01-01`.

**`kur:` 1281 sonrasına düşen 11 noktada** dönemler `kur:`a kırpıldı. `kur:`dan önce biten dönemler silindi:
- Gondar 1636
- Vilnius 1323-01-25
- Bîdar 1322 (Kakatiya 1281-1322 silindi)
- Samudra Pasai 1292
- Kaunas 1361
- Hagåtña 1668-06-16
- Bükreş 1368 (1281-1330 silindi)
- Yaş 1392 (1281-1359 silindi)
- Aseb 1869-11-15 (1281-1415 `__BOSLUK__` silindi)
- Demak 1500, yüzyıl hassasiyeti (Majapahit/Singasari 1281-1478 silindi)
- Zaria 1536

**`kur:` 1281 öncesine düşen 22 noktada** 1281 öncesi sahipsiz aralık açıldı (`kur:` → 1281-01-01):
- Erdebil 484
- Meşhed 999
- Maskat 903
- Amsterdam 1275-10-27
- Stokholm 1252
- Mogadişu 999
- Tahran 900
- Lâhîcan 982
- Ras el-Hayme 637
- Tver 1209
- Zanzibar 899
- Büyük Zimbabve 1200
- Kamaniçe 1099
- Temeşvar 1212
- Nizva 794
- Şeki 699
- Berde 645
- Bihaç 1260
- Yarkent -99
- Katsina 1100
- Baroda 812
- Liepāja 1253

Bunlar Emre kararının öngördüğü deliklerdir; zincir işi bu listeyle başlar (TSV `zincir_gerekli` = EVET).
Oraibi 1150 hiç sahiplik kaydı olmayan (kasıtlı boş) noktadır. `kur:` onu 1150'den itibaren sahneye koyar.

**`py arac/denetle.py` — önce/sonra** (bu worktree; `coz-c` ile `devletler_harita.js` ve `donemler.js` çözüldü):

| ölçüm | önce | sonra |
|---|---|---|
| çıkış kodu | **0** | **0** |
| Değişmez 1 sahipsiz (1285+ kesitleri) | 210 (beklenen 210) | 210 (beklenen 210) |
| ZAMAN-GENİŞ KAPSAM DIŞI (1281 öncesi, yerleşim × devir) | 2153 | 2141 |
| Değişmez 2s yabancı kırılma · AÇIK · yıl-temsilî borç | 3727 · 157 · 441 | 3729 · 159 · 444 |
| Değişmez 5c "`kur:` hiç yok, 1281'de sahipli" | 2942 | 2909 |

⚠️ **Değişmez 1 sayısı 1281 öncesi delikleri GÖRMEZ.** Kesitleri 1285'te başlar, 1281 öncesi devirler yalnız bilgi kovasındadır (`BEKLENEN_VERILI_DELIK = None`).
Doğrudan ölçüm: bu yazımla 1281 öncesinde sahnede olup sahibi olmayan **22 nokta** çıktı (liste yukarıda).
Bu delikler denetleyi düşürmez. Haritada 1281 öncesi kesitlerde delik olarak görünürler; bu ancak koşudan sonra görülür.
Değişmez 2s'deki +2 AÇIK ve +3 yıl-temsilî kırılma, kırpılan ilk dönemlerin yeni başlangıç günleridir (ör. Bükreş 1368-01-01, Demak 1500-01-01). Tavan sonsuz, ihlal değil; yıl-temsilî uyarısı önceden de aşıktı (441 > 436).

`paketle.py yenile` / `surum_damgala.py` koşturulmadı. EMRELİC yazma makinesidir; paket ve damga KASA'nın birleştirme/push kapısında üretilir.

## ② Ne bulamadım

- **1975 nokta araştırılmadı** (k3 827, k4 523, k0 625). Bu oturum yalnız k1-2'yi bitirebildi. Ölçülen hız: bir sonnet ajanı iki turda ~51 noktaya karar veriyor, bunların ~%25'i "bulundu".
- **27 bulunamadı.** Gümüşhane'de TDV "kuruluş bilinmiyor" diyor. Harar, Sircân, Buraymî, Leh, İmphâl, Şigatse, Golkonda, Bîcâpur, Arkot, Asîrgarh, Elicpûr, Gulca, Aksu, Okyanusya ve Mezoamerika noktaları da bu kovada.
- **93 şüpheli.** Başlıca sebepler:
  - Yalnız geleneksel ya da efsanevî tarih var (Oslo, Bergen, Kopenhag, Lhasa, Luang Prabang).
  - Hakemli kaynak okunamadı: Britannica ve Iranica WebFetch'te 403 verdi; arama özeti "okunmadı" sayıldı.
  - Nokta bir bölgeyi ya da iki ayrı yeri temsil ediyor (Erdel, Murzuk, Zaporojye Seçi, Johor, Banda Neira).
  - Kaynak şehri değil devleti ya da fethi tarihliyor (Kazan 1437, Kalikut 1498, Tatta).
- **Ana oturumun bulundu'dan şüpheliye çektiği 5 nokta:**
  - **Söğüt:** TDV "XIII. yy ikinci yarısı, muhtemelen" diyor. Geç uç 1300 olur; yazılsa Osmanlı çekirdeğinin 1281-1300 `d:` dönemi silinirdi. Ertuğrul'un yerleşmesi ayrı tanık olarak aranmalı.
  - **Feyzâbâd (Ayodhya):** 1730 Feyzâbâd'ın kuruluşu; nokta Ayodhya'yı da taşıyor.
  - **Ilâhâbâd:** 1583 Ekber'in Prayag yerinde kuruluşu; Prayag daha eski.
  - **Tobolsk (İsker):** 1587 Rus Tobolsk'u; nokta Sibir başkenti İsker'i de taşıyor.
  - **Manama:** Britannica sayfası okunamadı, yalnız arama özeti var.
- **Zayıf ama yazılanlar** (kaynak türü TSV'de görünür):
  - Kaunas 1361: Wigand von Marburg kroniği, şehir sitesi üzerinden okundu.
  - Oraibi, Katsina, Zaria, Liepāja: Britannica özeti, "probably" kaydıyla.
  - Aseb 1869-11-15: gün tek ikincil kaynakta.
  - Ras el-Hayme: TDV sayfa numarası araç özetinden alındı.

  Bunlar ikinci denetimde öncelikli.
- Alt ajanlar WebSearch sonuçlarına gömülü ilgisiz komutlar gördü (tarif, şarkı sözü). Hiçbirine uyulmadı.

## ③ Ne istiyorum (önerilerim)

1. **Zincir işi:** 22 noktanın (ve kasıtlı boş Oraibi'nin) 1281 öncesi sahiplik zinciri yazılmalı. Kaynak ilk tanıktaki sahibi yalnız 3'ünde söylüyor: Erdebil → Sâsânî, Amsterdam → Hollanda Kontluğu, Tver → Vladimir-Suzdal (TSV `sahip_ilk_kaynakta`). Zincir yazılana kadar bu noktalar 1281 öncesi haritada delik bırakır. Devlet ömrü `devletler.js` f/t'den ve Değişmez 2 kontrolüyle yazılmalı.
2. **k3 dalgası (827 nokta)** bu yöntemle yaklaşık 16 ajan turu ister. Önerim önce **1281 sonrası kuruluş adaylarını** taramak, çünkü haritayı değiştirenler onlar. 1281 öncesi tanıklar zincir yazılmadan yalnız delik açar.
3. **Britannica/Iranica erişimi:** 403 yüzünden şüpheli kalan ~40 nokta için tarayıcı ya da kütüphane kanalı gerekir. Kanal bulunursa şüpheli kovasının yarısı kapanabilir.
4. **Söğüt ve ikili adlı noktalar** (Feyzâbâd/Ayodhya, Ilâhâbâd/Prayag, Tobolsk/İsker) için Emre kararı gerekiyor: nokta hangi yerleşimi temsil ediyor?

## Ek A — Araştırılan 154 nokta (k1-2), nokta başına karar

| no | ad | k | karar | kur (astronomik) | kesinlik | veriye | kaynak | not |
|---|---|---|---|---|---|---|---|---|
| 1 | Söğüt | 1 | supheli | 1300-01-01 | yuzyil | hayir | TDV İslâm Ansiklopedisi, SÖĞÜT maddesi (yazar/cilt/sayfa sayfa metninden okunamadı) | TDV 'muhtemelen' diyor; yüzyıl hassasiyeti, son yıl 1300 yazıldı. Ertuğrul'a Selçuklu Sultanı Alâeddin'in kışlak verdiği gelenektir, kaynak… |
| 2 | Erdebil | 1 | bulundu | 0484-01-01 | yil | evet | TDV İslâm Ansiklopedisi, ERDEBİL (Saleh Muhammedoğlu Aliev), c. 11, s. 276-277 | Aralık 459-484 verildi, güvenli uç GEÇ uç (484). Kuruluş rivayeti kaynaklarda aktarım, kesin değil; yazılı ilk anılış X. yy Hudûdü'l-âlem. … |
| 3 | Meşhed | 1 | bulundu | 0999-01-01 | yuzyil | evet | TDV İslâm Ansiklopedisi, MEŞHED (İran) maddesi (yazar/cilt sayfadan okunamadı) | TDV kesin yıl vermiyor; yüzyıl hassasiyeti. Tûs'taki türbe 203 (818) ayrı konudur (MEŞHED terim maddesi, Mustafa Öz, c.29, s.362-363). Şehr… |
| 4 | Maskat | 1 | bulundu | 0903-01-01 | yil | evet | TDV İslâm Ansiklopedisi, MASKAT (Mustafa L. Bilge), c. 28, s. 77-78; telif tarihi için TDV İBNÜ'l-FAKİH (Ceng… | Yıl eserin telif tarihinden (yaklaşık 290/903, de Goeje giriş s.10'a dayanılarak) alınmıştır, Maskat'ın kendisi için verilmiş yıl değil: 'e… |
| 5 | Gondar | 1 | bulundu | 1636-01-01 | yil | evet | TDV İslâm Ansiklopedisi, ETİYOPYA maddesi | Bu başşehir yapılma tarihidir, kuruluş açıkça verilmedi; 'en geç 1636'. Yazar/cilt/sayfa kısa arama alıntısında görünmedi, ETİYOPYA maddesi… |
| 6 | Edinburg | 1 | supheli | 0638-01-01 | yil | hayir | Y Gododdin (Din Eidyn) ve 638 Anglo kuşatması; ikincil özetler (Britannica Edinburgh History sayfası listelen… | Şiirin yaşı tartışmalı (VII.-XI. yy, elyazması XIII. yy). 638 kuşatma tarihi akademik kaynaktan doğrulanmadı. Akademik teyit gerekli. |
| 7 | Amsterdam | 1 | bulundu | 1275-10-27 | gun | evet | Floris V'in gümrük muafiyeti belgesi (Toll Privilege), 27 Ekim 1275; Amsterdam arşiv/Hollanda kaynaklarının a… | Birçok kaynak aynı günü veriyor; kentlik hakları 1300 veya 1306. Akademik monografi (ör. Stadsarchief) doğrudan okunmadı. |
| 8 | Stokholm | 1 | bulundu | 1252-01-01 | yil | evet | Encyclopaedia Britannica, Stockholm | Mektuplar gün taşıyor olabilir; gün araştırılmadı. |
| 9 | Kopenhag | 1 | supheli | 1167-01-01 | yil | hayir | Saxo Grammaticus, Gesta Danorum (ikincil özetler); Lex.dk København - historie | 1167 geleneksel; kaleden önce yerleşim (Havn) XI. yy'a gidiyor, kesin tarih yok. Britannica doğrudan okunmadı. |
| 10 | Oslo | 1 | supheli | 1048-01-01 | yil | hayir | Snorri Sturluson'a dayanan geleneksel tarih (ikincil özetler); akademik teyit yok | Saga tabanlı; arkeoloji 1000 öncesi Hristiyan mezarları gösteriyor. Akademik kaynak okunmadı. |
| 11 | Varşova | 1 | supheli | 1313-04-23 | gun | hayir | İkincil kronolojiler; Britannica Jazdów (1262 ilk kayıt) | Çelişki: 1251 (köy), 1262 (Jazdów), 1313 (kastelan). Gün verisi akademik doğrulanmadı. |
| 12 | Vilnius | 1 | bulundu | 1323-01-25 | gun | evet | Gediminas'ın 25 Ocak 1323 tarihli mektupları (Riga nüshası); Litvanya Ulusal Müzesi / Vilnius Üniversitesi se… | Orijinaller kayıp, nüshalar var. Britannica okunmadı. |
| 13 | Kazan | 1 | supheli | 1437-01-01 | yil | hayir | TDV İslâm Ansiklopedisi, KAZAN (İsmail Türkoğlu), c. 25, s. 134-136 | Çelişki: resmî 1005 (tartışmalı, Kremlin müzesi: X-XI. yy tahkimat); Eski Kazan Bulgar sonrası. TDV 1437 han devleti tarihi, şehir kuruluşu… |
| 14 | Mogadişu | 1 | bulundu | 0999-01-01 | yuzyil | evet | TDV İslâm Ansiklopedisi, MAKDİŞU (Ahmet Kavas), c. 27, s. 435-437 | Alternatifler: 685-705 (Abdülmelik dönemi), 887 (João de Barros). Genel kabul X. yy; yüzyıl hassasiyeti, son yıl 999 yazıldı. İbn Battûta 1… |
| 15 | Harar | 1 | bulunamadi | — | — | hayir | TDV İslâm Ansiklopedisi, HARAR (Ahmet Kavas), c. 16, s. 107-109 | TDV kuruluş/ilk anılış vermiyor; yalnız bölgeye İslâm X. yy sonu, Zeyla' başkentinin 1520'de Harar'a taşınması, 1647 bağımsız emirlik. Bunl… |
| 16 | Tahran | 1 | bulundu | 0900-01-01 | yuzyil | evet | TDV İslâm Ansiklopedisi, TAHRAN (Esko Naskali, Osman Gazi Özgüdenli), c. 39, s. 416-419 | Yüzyıl hassasiyeti; III. h. yüzyıl 816-913 aralığına denk, IX. yüzyıl sonu 900 yazıldı (güvenli uç). Adın kaynaklarda sık geçişi XII. yy. İ… |
| 17 | Lâhîcan | 1 | bulundu | 0982-01-01 | yil | evet | TDV İslâm Ansiklopedisi, LÂHÎCÂN (Rıza Kurtuluş), c. 27, s. 51-52; Hudûdü'l-âlem telif tarihi için TDV HUDÛDÜ… | Hicrî 372 = 982-83; yıl hassasiyeti, 982 yazıldı (983 de mümkün). Eserin telif yılı = en geç tanık. Lâhîc b. Sâm rivayeti efsane. |
| 18 | Ras el-Hayme (Cülfâr) | 1 | bulundu | 0637-01-01 | yil | evet | TDV İslâm Ansiklopedisi, RE'SÜLHAYME (Mustafa L. Bilge), c. 35, s. 6-7 (araç özetine göre; sayfa teyit edilme… | Hicrî 16 / mîlâdî 637; hicrî yıl-ay kesişimi hesaplanmadı, yıl hassasiyeti. Re'sülhayme adı XVIII. yy'da yaygınlaştı; nokta Culfâr'ı temsil… |
| 19 | Zaporojye Seçi | 1 | supheli | — | — | hayir |  | Seç tek yer değil; XVI-XVIII. yy boyunca Hortitsa, Bazavluk, Mikitin, Çortomlık, Kamenska vb. arasında taşındı. Nokta (47.75,34.8) hangi Se… |
| 20 | Çerkask (Razdory) | 1 | supheli | — | — | hayir | Ikincil özetler (Starocherkasskaya / Cherkassk; müze-koruma alanı bilgileri); TDV 'çerkes' araması ilgisiz çı… | Çerkask yaklaşık 1570'te kuruldu deniyor ama akademik kaynak okunamadı; Razdory ilk başkent, Çerkask 1644-1805 arası Don başkenti. 'Eski de… |
| 21 | Bonga (Kaffa) | 1 | supheli | — | — | hayir | İkincil özetler: Kaffa Krallığı Minjo hanedanı ~1390; Bonga ilk başkent (Orent 1970, Lange 1982 önerilen akad… | Bonga'yı kimin kurduğu/ele geçirdiği belirsiz (Bon-noghe); Kaffa krallığı tarihi şehir kuruluşu değil. Akademik teyit yok. Sahip __BOSLUK__. |
| 22 | Bergen | 1 | supheli | 1070-01-01 | yil | hayir | Bergen Belediyesi ve Bergen Üniversitesi bilgi notları (geleneksel tarih); akademik kaynak okunmadı | Geleneksel tarih; arkeolojik bulgular daha erken. Akademik teyit gerekli. |
| 23 | Leh (Ladakh) | 1 | bulunamadi | — | — | hayir |  | TDV 'leh' araması Polonya (Leh) maddelerini verdi, Ladakh şehri için madde yok. Web aramasında Leh'in kuruluşu/ilk anılışı bulunamadı; Namg… |
| 24 | Tatta (Thatta) | 1 | supheli | — | — | hayir | TDV İslâm Ansiklopedisi, SİND (Azmi Özcan), c. 37, s. 242-244 | TDV kuruluş/ilk anılış vermiyor; 1558-59 ve 1591 'en geç' tanıklarıdır, ilk tanık değil. İkincil özetler Samma hanedanı (XIV. yy) başkenti … |
| 25 | Çitor (Chittorgarh) | 1 | supheli | — | — | hayir | İkincil özetler (Wikipedia türevi); akademik kaynak yok | Kale Mori hanedanı/Chitrangada efsanesine bağlanıyor (VII. yy rivayeti); 713 tarihli bir Mori yazıtı anılıyor ama kaynak teyit edilmedi. Ta… |
| 26 | Pandua (Hazret Pandua) | 1 | supheli | — | — | hayir | İkincil özetler (Banglapedia 'Pandua' listelendi, okunmadı) | Hazret Pandua (Malda): başkent 1339 (Ilyas Şah geleneği) / 1353 / Firûz Şah dönemi darphane; kaynaklar çelişiyor. Şehir 1281'de Delhi Sulta… |
| 27 | Kattak (Cuttack) | 1 | supheli | 0989-01-01 | yil | hayir | Andrew Stirling (1825), Madala Panji'ye dayanır; Odisha Hükümeti turizm sayfası; K.C. Panigrahi'nin eleştiris… | 989 geleneksel; Panigrahi'ye göre Nrupa/Markat Kesari başka güvenilir kayıtta yok. 1211 başkent statüsü daha sağlam. Akademik doğrulama ger… |
| 28 | Sibsâgar (Rangpûr) | 1 | supheli | — | — | hayir | İkincil özetler: Rangpur'un Rudra Singha tarafından 1698/1699/1702-03/1704/1707'de kurulduğu iddiaları; UNESC… | Rangpur (Ahom başkenti) 1699-1788 arası başkent; kurucu Rudra Singha (Rajeswar Singha değil). Yıl çelişkili (1698-1707). Sibsagar adı sonra… |
| 29 | İmphâl (Manipûr) | 1 | bulunamadi | — | — | hayir |  | İmphal'ın kuruluş/ilk anılış tarihi bulunamadı; Cheitharol Kumbaba kroniği Kangla için 33 CE geleneğini verir (efsanevi). Akademik kaynak (… |
| 30 | Bîdar | 1 | bulundu | 1322-01-01 | yil | evet | TDV İslâm Ansiklopedisi, MUHAMMEDÂBÂD maddesi (BÎDER buraya yönlendirir; yazar/cilt/sayfa okunamadı); Bîder B… | 1322 fetih tarihidir: 'en geç o tarihte vardı'; daha erken anılış (ör. Kakatiya/Yadava dönemi) aranmadı. TDV 'bidar' araması yalnız BÎDÂRÎ … |
| 31 | Bombay | 1 | supheli | 1500-01-01 | yuzyil | hayir | TDV İslâm Ansiklopedisi, BOMBAY (Sayyid Maqbul Ahmad), c. 6, s. 280-281 | TDV'ye göre ilk ad tanığı XV. yy; ancak Yadava 1281 sahibi ve bölgede daha erken yerleşimler (Mahikavati/Mahim XIII. yy) var, Ptolemaios il… |
| 32 | Tancûr (Thanjavur) | 1 | supheli | 0850-01-01 | yil | hayir | İkincil özetler: Vijayalaya Çola'nın Thanjavur'u yaklaşık 848-850'de ele geçirmesi; öncesinde Mutharaiyar hâk… | Şehir Çola fethinden öncesine gidiyor (Mutharaiyar yazıtları); 850 'en geç' tanık, kesin kaynak değil. Brihadisvara 1010 tapınak tarihidir,… |
| 33 | Cinci (Gingee) | 1 | supheli | — | — | hayir | İkincil özetler; Srinivasachari, History of Gingee and its Rulers (1943) önerildi, okunmadı | Gingee: Kon hanedanı (1190 / XI. yy), Çola IX. yy küçük kale, XIII. yy kale olarak gelişme; Krishnappa Nayak XVI. yy şehir kurucusu — kayna… |
| 34 | Kalikut (Kozhikode) | 1 | supheli | — | — | hayir | TDV İslâm Ansiklopedisi, HİNDİSTAN (Vasco da Gama 1498'de Kaliküt'e vardı); ikincil özetler İbn Battûta 1342-… | TDV'de Kalikut maddesi yok (arama ASYA, ABDÜRREZZÂK es-SEMERKANDÎ, BAHÂR verdi); 1498 'en geç' tanıktır ve ilk anılış değil. İbn Battûta (~… |
| 35 | Koçin (Kochi) | 1 | supheli | — | — | hayir | İkincil özetler: 1341 Periyar seli sonrası Kochi limanı; İbn Battûta Kochi'yi atladı; Nicolo Conti / Çin heye… | TDV HİNDİSTAN yalnız Râbiye adlı kraliçeyi (Cochin) tarihsiz anar. 1341 sel tarihi dolaylı kanıta dayanıyor (Puthuvype takvimi). Akademik d… |
| 36 | Trivandrum (Thiruvananthapuram) | 1 | supheli | — | — | hayir | İkincil özetler: Padmanabhaswamy Tapınağı'nın en erken anılışı IX. yy (iddia) / 1304 (teyitli); Ay hanedanı, … | Kaynaklar IX. yy iddiasıyla 1304 'doğrulanabilir en eski' arasında çelişiyor; yazıt kaynağı gösterilmiyor. Tarih yazılmadı. Akademik (epigr… |
| 37 | Kandy | 1 | supheli | 1469-01-01 | yil | hayir | İkincil özetler (Kingdom of Kandy; Daily FT 'The days of Senkadagala') | İki aday: 1357-1374 (şehir) ve 1469 (devlet). Akademik kaynak okunmadı; 1469 yalnız siyasî kuruluş. |
| 38 | Mukden (Şenyang) | 1 | supheli | -0299-01-01 | yil | hayir | Ikincil özetler: Houcheng, Yan Devleti generali Qin Kai ~MÖ 300; Batı Han'da Houcheng ilçesi (Britannica Shen… | MÖ tarih: mo_yil 300 (yaklaşık). Britannica sayfasına erişilemedi; MÖ 300 Houcheng yerleşimi ikincil/ticari sitelerden. Mukden/Şenyang adı … |
| 39 | Lhasa | 1 | supheli | 0647-01-01 | yil | hayir | Jokhang Tapınağı kuruluşu, Songtsen Gampo dönemi (ikincil özetler; Tibetan & Himalayan Library kmaps) | Tapınak yılı 639-652 arasında değişiyor (647 en yaygın); şehir kuruluşu tapınaktan türetildi — kuruluş sayılabilir mi hakem kararı gerek. A… |
| 40 | Şigatse | 1 | bulunamadi | — | — | hayir |  | Samdrubtse kalesi 1363 iddiası hiçbir kaynakta teyit edilmedi; Şigatse için TDV'de madde yok. Tibetolojik kaynak (Petech, Tucci) gerek. |
| 41 | Şuri (Naha) | 1 | supheli | — | — | hayir |  | Şuri Kalesi: XIV. yy ortası/sonu (1372 veya 1392 tartışmalı; Satto/Shō Hashi 1420'ler) — kaynaklar çelişiyor. Şuri ile Naha ayrı yerler, no… |
| 42 | Toungoo | 1 | supheli | 1279-04-20 | gun | hayir | Toungoo Yazawin (kronik) aktaran ikincil özetler: Thawun Gyi ve Thawun Nge 1279'da yeni yerleşimi kurdu (17 v… | İki gün (17 / 20 Nisan) çelişiyor, geç uç yazıldı. Vikipedi türevi özetlerden; akademik (Lieberman) okunmadı, bu yüzden şüpheli. TDV yalnız… |
| 43 | Kengtung | 1 | supheli | — | — | hayir | İkincil özetler; Karlsson (Southeast Asian Studies/Kyoto) makalesi listelendi, okunmadı; Chiang Tung Chronicle | Kuruluş tarihleri çelişkili: ~1243 (Mang Kun), 1253 (tek kaynak), 'XIII. yy sonu' (Mangrai fethi). Efsanevi öncül (Tai Lue). Akademik makal… |
| 44 | Luang Prabang | 1 | supheli | 0698-01-01 | yil | hayir | İkincil özetler (Khun Lo efsanesi, Muang Sua); NIU SEAsite 'Legend of Xieng Dong-Xieng Thong' | 698 efsanevî Khun Borom geleneği; tarihî olarak 1353 daha sağlam. Akademik kaynak okunmadı. Sahip __BOSLUK__. |
| 45 | Vientiane | 1 | supheli | — | — | hayir | İkincil özetler: Vietnamca yazıtta Văn Đan (Vientiane) anılışı 1135 / 1159; Setthathirath başkenti 1560-1563 | Vietnamca yazıt tarihi (1135/1159) kaynağında doğrulanamadı; Dvaravati/Mon kökenli iddia var. Akademik kaynak (Lempert, Lao Studies) listel… |
| 46 | Johor | 1 | supheli | — | — | hayir | TDV İslâm Ansiklopedisi, MALEZYA (İsmail Hakkı Göksoy), c. 27, s. 486-493 | TDV devletin kuruluşunu (~1530, yıl doğrudan yazılmıyor) verir, şehri değil; nokta (1.493,103.741) Johor Bahru'yu gösterir (XIX. yy kuruluş… |
| 47 | Samudra Pasai | 1 | bulundu | 1292-01-01 | yil | evet | TDV İslâm Ansiklopedisi, AÇE (Numan Kurtulmuş), c. 1, s. 329-332 | TDV devletin XIII. yy'da kurulduğunu söyler; 1292 Marco Polo anılışı Samudra/Pasai bölgesi için 'en geç tanık'. Şehrin (Samudra) tam yeri/a… |
| 48 | Palembang | 1 | supheli | 0682-01-01 | yil | hayir | Kedukan Bukit yazıtı (Saka 605 / 682) — aramada sonuç gelmedi, genel bilgi | Yazıt Palembang yakınında bulundu, Śrîvijaya ilk seferini 682'de anlatır; yazıtın yeri ve şehir ilişkisi akademik kaynakla (Coedès, Wolters… |
| 49 | Banten | 1 | supheli | — | — | hayir | TDV İslâm Ansiklopedisi, ENDONEZYA (Naquib al-Attas, İ. H. Göksoy), c. 11, s. 194-197 | TDV sultanlığı (1526) verir, şehrin ilk anılışını değil; Banten Girang ile Banten Lama karışma riski. Sunda-Pajajaran 1281 sahibi anakronik… |
| 50 | Makassar | 1 | supheli | — | — | hayir | TDV ENDONEZYA c.11 s.194-203 (Makassar İslâmlaşması 1505, Gowa hükümdarı 1603); ikincil: Jalur Rempah — Somba… | TDV şehir kuruluşu vermiyor; Somba Opu 1510/1511 iddiası akademik değil. Tarih yazılmadı. Akademik kaynak (Cummings, Making Blood White; AN… |
| 51 | Banda Neira | 1 | supheli | — | — | hayir | İkincil özetler: Portekizliler 1511'de Banda'ya geldi; Fort Nassau 1609; Fort Belgica 1611 | Nokta bir ada merkezini (Banda Neira) temsil ediyor, ilk anılış tarihi bulunamadı; ada grubu çok eski tanıkları olan bölge (Banda). Holland… |
| 52 | Colo (Jolo) | 1 | supheli | — | — | hayir |  | Tur 2: TDV SULU maddesi Sulu Sultanlığı'nı '15. yy'da kurulan' diye anar, Jolo adı/tarihi vermez. Sulu (ada/devlet) ile Jolo kasabası ayrı;… |
| 53 | Kotabato (Magindanao) | 1 | supheli | — | — | hayir |  | Tur 2: Maguindanao Sultanlığı geleneksel olarak 1515'te Şerif Kabungsuvan'la kurulmuş sayılır, merkez Kutawato (bugünkü Cotabato) denir; am… |
| 54 | Kaunas | 1 | bulundu | 1361-01-01 | yil | evet | Wigand von Marburg, Nova chronica Prussiae (Kaunas şehir sitesi en.kaunas.lt/city/city-history aracılığıyla) | Çelişki: 1361 kale için, şehrin kendisi 1384'te anılır diyen kaynak var (Kaunas kuşatması 1362 maddesi, ikincil). Şehir sitesi akademik değ… |
| 55 | Karşi (Nahşeb) | 1 | supheli | 1326-01-01 | yil | hayir | Qarshi'nin Kebek Han (1318-1326) tarafından kurulduğunu söyleyen Özbek dergi makalesi 'Analysis of Reforms in… | Tur 2: hakemli statüsü doğrulanamayan tek makale; Wikipedia 'Kebek' maddesi sarayı Cengiz'in yazlık otlağı yerinde der. Nahşeb (Nasaf, çok … |
| 56 | Texcoco | 1 | supheli | — | — | hayir |  | Tur 2: ikincil kaynaklar 12. yy (Chichimec) ya da 1200 kuruluş, 1337 dolayında Acolhua'nın Coatlinchan'dan başkenti buraya taşıması der; Qu… |
| 57 | Tlaxcala | 1 | supheli | — | — | hayir |  | Tur 2: INAH Tizatlán sayfası Postklasik yerleşimi 1100-1529 verir; Tepeticpac için Geç Postklasik (MS 1250-1519); ansiklopedik metin Tlaxca… |
| 58 | Zaachila | 1 | supheli | — | — | hayir |  | Tur 2: INAH Zaachila'da Preklasik köy bulunduğunu söyler (San José Mogote çağdaşı); şehir 13. yy ya da 1399'da kuruldu diyen zayıf kaynakla… |
| 59 | Maní | 1 | supheli | — | — | hayir |  | Tur 2: Xiu hanedanı Mayapan'ın düşüşünden (1441) sonra Maní'yi merkez yaptı (ikincil); Wikipedia 13. yy der, çelişkili. Roys çevirileri oku… |
| 60 | Sotuta | 1 | supheli | — | — | hayir |  | Tur 2: Cocom kalıntısı 1441 sonrası Sotuta'da ayrı devlet kurdu (ikincil aktarım). Yer adının daha eski anılışı bulunamadı; tarih verilmedi. |
| 61 | Nojpetén (Tayasal / Flores) | 1 | supheli | — | — | hayir |  | Tur 2: Nojpetén kuruluşu etnotarihî belgelere göre 15. yy ortası (Itza'ların ~1441-1446'da Mayapan sonrası güneye gelişi); 1194 Chichén Itz… |
| 62 | Acalán (Itzamkanac) | 1 | supheli | — | — | hayir |  | Tur 2: Scholes-Roys Acalán'ı Postklasik sayar, Itzamkanac başkenttir (Vargas y Delgado 2012/2016, mesoweb); iskân dizisi okunamadı. Tarih v… |
| 63 | Pskov | 1 | supheli | 0903-01-01 | yil | hayir | Povest' vremennykh let (Rus Birincil Kroniği), 6411 (903) maddesi; Cross & Sherbowitz-Wetzor çevirisi, Mediae… | Tur 2: kronik metni arama ile doğrulanamadı (maddeyi veren sayfa bulunamadı); 903 yaygın aktarım. Şüpheliye çekildi. TDV'de yalnız 1510. |
| 64 | Tver | 1 | bulundu | 1209-01-01 | yil | evet | tver.ru resmî tarih sayfası (XII-XIII yy); Britannica 'Tver' | Çelişki: Britannica ilk anılış 1134-35 (Novgorod'a bağlı) der; resmî 'kuruluş' yılı 1135. Güvenli (geç) uç kronik tarihi 1209 alındı; daha … |
| 65 | Kasimov | 1 | supheli | 1152-01-01 | yil | hayir | Geleneksel: Yuri Dolgorukiy, Gorodets Meshchersky, 1152; Akhmetgalin arkeoloji makalesi (journal-vniispk.ru) … | Geleneksel tarih, arkeolojik doğrulama yok; daha erken Ugor yerleşimi var. Ad Kasimov 1471 sonrası. |
| 66 | Yeni Saray (Tsarev) | 1 | bulunamadi | — | — | hayir |  | Tur 2: Berke Han'ın Saray'ı ile Özbek Han dönemi Yeni Saray karışabilir; akademik kaynakla tarih bulunamadı. |
| 67 | Zanzibar (Zengibar) | 1 | bulundu | 0899-01-01 | yuzyil | evet | TDV İslâm Ansiklopedisi, ZENGİBAR (Ahmet Kavas), c. 44, s. 262-267 | Madde kuruluş günü vermez; yalnız arkeolojik kalıntı. Güvenli uç 9. yy sonu alındı (8. yy olabilir). |
| 68 | Tümen (Çimgi-Tura) | 1 | supheli | — | — | hayir |  | Tur 2: TDV SİBİR HANLIĞI (İlyas Kemaloğlu, EK-2, s. 505-506) Çimgi-Tura'nın kuruluş tarihini vermez; Tümen Hanlığı Şeybânî Hacı Muhammed (1… |
| 69 | Tobolsk (İsker) | 1 | supheli | 1587-01-01 | yil | hayir | TDV İslâm Ansiklopedisi, ASYA maddesi (Tobolsk 1587); Presidential Library (prlib.ru) 14 Haziran 1587 der | Tur 2: nokta Rus Tobolsk'u (İsker/Kaşlık ~17 km yukarıda, 14. yy ortasında Sibir Tatarlarınca kuruldu denir, başkent statüsü tartışmalı). G… |
| 70 | Niani | 1 | supheli | — | — | hayir |  | Tur 2: Filipowiak kazıları (1965-73) 6. yy'dan iskân gösterir, kentsel evre 14. yy; Fauvelle-Aymar Niani'nin Mali başkenti oluşunu reddeder… |
| 71 | Mao (Kanem) | 1 | supheli | — | — | hayir |  | Tur 2: Kanem şehirleri dış kaynaklarda ilk kez 12. yy'da anılır; Njimi/Manan başkent tartışması var, 'Mao' adlı kent bu kaynaklarda doğrula… |
| 72 | Benin Şehri (Edo) | 1 | supheli | — | — | hayir |  | Tur 2: MOWAA 2025 kazı raporu: en erken radyokarbon tarihler 1. binyıl (kültürel buluntusuz), asıl dizi 14. yy; Connah 1975 aralığı 1180-15… |
| 73 | Büyük Zimbabve | 1 | bulundu | 1200-01-01 | yil | evet | Chirikure, Pollard, Manyanga, Bandama, 'A Bayesian chronology for Great Zimbabwe', Antiquity 87(337), 2013, s… | Tur 2: duvarlı anıtın başlangıcı; Batı Çevre altında daha eski Demir Çağı katmanı (4. yy) var. Geç uç alındı. |
| 74 | Nauru (Yaren) | 1 | bulunamadi | — | — | hayir |  | Modern/sömürge dönemi yerleşim adı olabilir; ön-temas dönemi için akademik kaynak bulunamadı. Tur 2: yeniden arandı; yer için hakemli/ akad… |
| 75 | Papeete | 1 | supheli | — | — | hayir |  | Tur 2: ikincil kaynak misyoner William Crook'un 1818'de Papeete'ye yerleştiğini söyler; başkentlik 1827/1842/1847 tartışmalı. Modern yerleş… |
| 76 | Avarua (Rarotonga) | 1 | bulunamadi | — | — | hayir |  | Modern/sömürge dönemi yerleşim adı olabilir; ön-temas dönemi için akademik kaynak bulunamadı. Tur 2: yeniden arandı; yer için hakemli/ akad… |
| 77 | Hagåtña (Agaña) | 1 | bulundu | 1668-06-16 | gun | evet | Journal of Pacific Archaeology (2020), Guam ispanyol sömürgesi makalesi (pacificarchaeology.org, makale 304) | Tur 2: yazılı kaynakta Hagåtña ile ilk temas/Cizvit kuruluşu; ön-temas Chamorro köyü (Latte Dönemi MS 900-1700) var, arkeolojik tarih Hagåt… |
| 78 | Jaluit (Jabor) | 1 | bulunamadi | — | — | hayir |  | Modern/sömürge dönemi yerleşim adı olabilir; ön-temas dönemi için akademik kaynak bulunamadı. Tur 2: yeniden arandı; yer için hakemli/ akad… |
| 79 | Hilo | 1 | bulunamadi | — | — | hayir |  | Modern/sömürge dönemi yerleşim adı olabilir; ön-temas dönemi için akademik kaynak bulunamadı. Tur 2: yeniden arandı; yer için hakemli/ akad… |
| 80 | Lahaina | 1 | bulunamadi | — | — | hayir |  | Modern/sömürge dönemi yerleşim adı olabilir; ön-temas dönemi için akademik kaynak bulunamadı. Tur 2: yeniden arandı; yer için hakemli/ akad… |
| 81 | Port Vila | 1 | bulunamadi | — | — | hayir |  | Modern/sömürge dönemi yerleşim adı olabilir; ön-temas dönemi için akademik kaynak bulunamadı. Tur 2: yeniden arandı; yer için hakemli/ akad… |
| 82 | Waitangi (Bay of Islands) | 1 | bulunamadi | — | — | hayir |  | Modern/sömürge dönemi yerleşim adı olabilir; ön-temas dönemi için akademik kaynak bulunamadı. Tur 2: yeniden arandı; yer için hakemli/ akad… |
| 83 | Oraibi (Hopi, Üçüncü Mesa) | 1 | bulundu | 1150-01-01 | yil | evet | SAH Archipedia, Old Oraibi / Walpi (sah-archipedia.org/node/7928); Britannica 'Oraibi' c. 1150 | Tur 2: SAH Archipedia (akademik mimarlık tarihi veritabanı) 'mid-twelfth century'; Wikipedia 1100 civarı/öncesi, ulusal sicil 1150. Kazı/de… |
| 84 | Muğla | 2 | supheli | 1344-05-11 | yil | hayir | TDV İslâm Ansiklopedisi, MENTEŞEOĞULLARI (Merçil/Karakaya), c. 29, s. 152-156 | Tur 2: 'en geç o tarihte vardı' tanığı. Hicrî 745 (1344-05-11..1345-04-30) ∩ 1344 → ilk gün. TDV MUĞLA (Zekai Mete, c.30): kuruluş bilinmez… |
| 85 | Gümüşhane | 2 | bulunamadi | — | — | hayir |  | Tur 2: TDV GÜMÜŞHANE (Tuncel, c.14, s.273-276) kuruluşu bilinmez der; ilk yerleşim Canca, şehir sonra iki kez taşınmış; Haldiye (İbn Hurdâz… |
| 86 | Mora (Tripoliçe) | 2 | supheli | 1467-01-01 | yil | hayir | TDV İslâm Ansiklopedisi, TRİPOLİÇE (Machiel Kiel), c. 41, s. 314-315 | Mora = Peloponez bölgesi; nokta Tripoliçe şehri. Ad Slav kökenli, 900 öncesi olmalı deniyor. Hangisi kastedildi belirsiz. |
| 87 | Bükreş | 2 | bulundu | 1368-01-01 | yil | evet | TDV İslâm Ansiklopedisi, BÜKREŞ (Nicoară Beldiceanu), c. 6, s. 484-485 | Kuruluş günü yok; 1368 belgesi Dâmboviţa kalesi için, Bükreş'le özdeşliği tartışmalı olabilir. |
| 88 | Yaş | 2 | bulundu | 1392-01-01 | yil | evet | TDV İslâm Ansiklopedisi, YAŞ (Mihai Maxim), c. 43, s. 342 | Aralık: geç uç 1392 alındı; erken ucu 1387. |
| 89 | Kamaniçe | 2 | bulundu | 1099-01-01 | yuzyil | evet | TDV İslâm Ansiklopedisi, KAMANİÇE (Dariusz Kołodziejczyk), c. 24, s. 274-275 | Tur 2: yüzyıl hassasiyeti, güvenli uç 11. yy sonu. Armenian kaynakta 1062 diyen ikincil aktarımlar var (hakemli kaynak okunamadı). |
| 90 | Erdel (Kaloşvar) | 2 | supheli | — | — | hayir |  | Nokta bölge (Erdel) temsil ediyor, nokta Kaloşvar/Cluj; TDV ERDEL (Kemal Karpat, c. 11, s. 280-283) Cluj için tarih vermez. Kuruluş günü an… |
| 91 | Temeşvar | 2 | bulundu | 1212-01-01 | yil | evet | TDV İslâm Ansiklopedisi, TİMİŞVAR (Mihai Maxim), c. 41, s. 94-95 | Kuruluş günü yok. |
| 92 | Revan | 2 | supheli | -0781-01-01 | yil | hayir | TDV İslâm Ansiklopedisi, REVAN (Mustafa Aydın), c. 35, s. 26-29 | MÖ 782 Erebuni kalesi (modern Erivan'ın kuruluş tarihi sayılır); Osmanlı Revan Kalesi 1583 ayrı yapı. Hangisi kastedildi belirsiz. |
| 93 | Sevâkin | 2 | supheli | 0999-01-01 | yuzyil | hayir | El-Hemdânî (10. yy) aktarımı; Aramco World / Sudan Memory (ikincil) | Batlamyus'un Limen Evangelis'i ile özdeşleştirme tentatif; akademik birincil/hakemli kaynak okunmadı. TDV Habeş Eyaleti maddesinde 10 Nisan… |
| 94 | Murzuk (Fizan) | 2 | supheli | — | — | hayir |  | Tur 2: nokta bölge (Fizan) temsil ediyor. Murzuk çevresi Garamant yerleşimleriyle (Jarma ~100 km) ilişkili; ortaçağ hanedanı Beni Hurman (~… |
| 95 | Manama (Bahreyn) | 2 | supheli | 1345-01-01 | yil | hayir | Britannica, 'Manama'; Burrell, 'al-Manāma', Encyclopaedia of Islam 2 | Kaynak yazarı/metni doğrudan okunmadı (arama özeti); İbn Battûta bağlantısı doğrulanmadı. TDV MENÂME maddesi var, tarih okunmadı. · ana otu… |
| 96 | Nizva | 2 | bulundu | 0794-01-01 | yil | evet | TDV İslâm Ansiklopedisi, UMAN maddesi (snippet okundu, tam madde okunmadı) | Hicrî 177 (793-94) ∩ 794 → ilk gün 794-01-01. Madde tam okunmadı; snippet tabanlı. |
| 97 | Asmara | 2 | supheli | 1411-01-01 | yil | hayir | Latince yolculuk kaydı, İmparator I. Dawit dönemi (1382-1411); Wikipedia 'History of Asmara' dolayımıyla (iki… | Dört köyün birleşmesi: sözlü gelenekte 12. yy, başka kaynakta 1508/~1515; Sembel arkeolojisi doğrulanmadı. Hakemli kaynak okunmadı. |
| 98 | Sircân | 2 | bulunamadi | — | — | hayir |  | Tur 2: Iranica ve Britannica 403/bulunamadı. İkincil kaynaklar Sasani dönemi ve Kirman'ın Sasani-öncesi başkenti olduğunu söyler, kurucu/ta… |
| 99 | Şeki (Nuha) | 2 | bulundu | 0699-01-01 | yuzyil | evet | TDV İslâm Ansiklopedisi, ŞEKİ (Mustafa Aydın), c. 38, s. 489-491 | Kuruluş bilinmez; ipek üretimi 3. yy diye ikinci bölümde (kaynaksız). Nuha 1772 sonrası yeni yerleşim (Kiş taşkını). Nokta Nuha'yı göstereb… |
| 100 | Berde (Karabağ) | 2 | bulundu | 0645-01-01 | yil | evet | TDV İslâm Ansiklopedisi, ARRÂN maddesi (snippet okundu) | Hicrî 24 (644-11-24..645-11-12) ∩ 645 → 645-01-01. Fetih 'en geç o tarihte vardı' tanığı; Sasani Peroz (459-484) tarafından kuruldu diyen i… |
| 101 | Buraymî | 2 | bulunamadi | — | — | hayir |  | Tur 2: TDV'de ayrı madde bulunamadı; EI2 'al-Buraymī' (Rentz-Mulligan) atfı snippetten, tarih yok. Tarih verilmedi. |
| 102 | Aseb | 2 | bulundu | 1869-11-15 | gun | evet | Encyclopaedia Africana (Sapeto maddesi); worldhistory.org 'Italian Colonialism in Eritrea' | Tur 2: modern liman için yazılı ilk belge (satın alma sözleşmesi); önceki Afar yerleşimi belirsiz. Gün tek ikincil kaynakta (diğeri Kasım 1… |
| 103 | Kassa (Košice) | 2 | supheli | 1230-01-01 | yil | hayir | Košice şehri resmî sitesi 1230 verir (akademik sayılmaz); Britannica 'Kosice': 9. yy kökenli, 1241 imtiyaz | Çelişki: akademik kaynakta 1230 teyit edilemedi (Britannica 1241 imtiyaz). 1230 resmî site; hakemli Macar/Slovak kaynak okunmadı. |
| 104 | Klis | 2 | supheli | 0852-01-01 | yil | hayir | Trpimir'in 852 tarihli belgesi (Clissa); ikincil özetlerden, akademik teyit yok | Hakemli kaynak okunmadı; belgenin asıl nüshası kayıp olduğu bilinir (doğrulanmadı). |
| 105 | Bihaç (Bihać) | 2 | bulundu | 1260-01-01 | yil | evet | Encyclopaedia Britannica, Bihać | Gün (26 Şubat 1260, Béla IV fermanı) ikincil kaynaktan; Britannica yalnız yıl veriyor. |
| 106 | Feyzâbâd (Ayodhya) | 2 | supheli | 1730-01-01 | yil | hayir | Encyclopaedia Britannica, Faizabad (Sādāt ʿAlī Khan) | TDV'de FEYZÂBÂD maddesi yok (arama: Hindistan/Gulâm Hasan'da geçer). Ayodhya Britannica'ya göre bitişik banliyö ve çok daha eski; bu tarih … |
| 107 | Benâres (Vârânasî) | 2 | supheli | -0799-01-01 | yil | hayir | TDV İslâm Ansiklopedisi, BENÂRES (A. S. Bazmee Ansari), c. 5, s. 430; arkeoloji: Rajghat kazıları (Narain; Ja… | TDV'nin ilk tarihli olayı 1193 Gurlu fethi. 800 MÖ tarihi ders sitelerinden; hakemli rapor okunmadı. mo_yil 800 arkeolojik, 1200 rivayet. |
| 108 | Ilâhâbâd (Allahabad) | 2 | supheli | 1583-01-01 | yil | hayir | Encyclopaedia Britannica, Prayagraj; Encyclopaedia Iranica, ALLAHABAD (Ziyaud-Din A. Desai), c. I, fasc. 8, s… | TDV'de İLÂHÂBÂD maddesi yok. Gün (13 Kasım 1583, Ebü'l-Fazl) ikincil kaynaklı; Bedauni 14 Haziran 1574 verir. Prayag hac yeri daha eski (Ir… |
| 109 | Eski Kandehar (Şehr-i Köhne) | 2 | supheli | -0329-01-01 | yil | hayir | Encyclopaedia Iranica (Kandahar); Harvard White-Levy proje özeti | Kesin tarih yok; Bisütun yazıtı I. Darius dönemini anar (Iranica). MÖ 330 gelenek, belirsiz. |
| 110 | Cammû (Jammu) | 2 | bulunamadi | — | — | hayir | Tarikh-i Azmi (1417) atfı; Journal of the Panjab Historical Society 1921 özeti; resmî Jammu siteleri | Hakemli doğrulama yok; tarih verilmedi. |
| 111 | Diu | 2 | bulunamadi | — | — | hayir | Encyclopaedia Britannica, Daman and Diu | İlk anış tarihi bulunamadı (Maurya iddiası zayıf kaynaklı). 1535 yalnız Portekiz kalesi. |
| 112 | Cûnâgadh | 2 | supheli | 0150-01-01 | yil | hayir | Rudradaman Girnar kaya yazıtı (Saka 72, yaklaşık MS 150), Girinagara adı; ikincil özetlerden okundu | Kale (Uparkot) MÖ 319 Chandragupta iddiası turizm kaynaklı; yazıtın kendisi okunmadı. |
| 113 | Mandu (Mândû) | 2 | supheli | 0555-01-01 | yil | hayir | MS 555 tarihli Mandapa-durga yazıtı (puratattva.in, livehistoryindia özetleri) | VS 612 / MS 555 karışıklığı; hakemli kaynak okunmadı. |
| 114 | Devagiri (Devletâbâd) | 2 | supheli | 1187-01-01 | yil | hayir | İkincil kaynaklar: Bhillama V Yadava başkenti c. 1187 | Hakemli kaynak okunmadı; 'c.' belirsiz. |
| 115 | Elicpûr (Achalpur) | 2 | bulunamadi | — | — | hayir | Encyclopaedia Britannica, Khalji dynasty (Students); Berar | Britannica Ellichpur için tarihli ilk anış vermiyor; Vikipedi türevi '13. yy' 'citation needed'. |
| 116 | Gülberge (Gulbarga) | 2 | supheli | 1347-08-03 | gun | hayir | Encyclopaedia Iranica, ḤASAN GĀNGU; Britannica, Kalaburagi | En geç tanık (kale 1347'de var), ilk anış değil. Britannica: bölge önce Kakatiya toprağı, 14. yy başında Delhi'ye katıldı. TDV'de yalnız Be… |
| 117 | Bîcâpur (Bijapur) | 2 | bulunamadi | — | — | hayir | TDV, BÎCÂPÛR (Arif Naim), c. 6, s. 127-128; Britannica, Vijayapura; Iranica, BĪJĀPŪR | Kuruluş/ilk anış günü TDV, Britannica ve Iranica'da yok; 'Chalukya 10.-11. yy' iddiası yalnız Vikipedi türevi. Yadava = TDV 1190 bölge olay… |
| 118 | Golkonda | 2 | bulunamadi | — | — | hayir | Encyclopaedia Britannica, Golconda; Iranica HYDERABAD | Kakatiya dönemi kuruluşu (1143/13. yy) yalnız zayıf kaynaklarda; TDV GÛLKÜNDE okunmadı. En geç tanık 1518 (başkent oluşu). |
| 119 | Varangal (Warangal) | 2 | bulunamadi | — | — | hayir | Rudradeva/Daksharamam 1158 yazıtı özetleri (zayıf) | Yazıtın Orugallu'yu anıp anmadığı belli değil; tarih uydurulmadı. |
| 120 | Pûne (Poona) | 2 | supheli | 0758-01-01 | yil | hayir | Krishna I bakır levhaları (758/768, Punya-vishaya); ikincil özetler, epigrafik neşir okunmadı | Bölge (vishaya) adı, şehir değil. 937/993 iddiaları da var. |
| 121 | Seringapatam (Şrirangapatnam) | 2 | supheli | 0894-01-01 | yil | hayir | Ranganathaswamy tapınağı yazıtı 894 (Batı Ganga'ya bağlı Tirumalaiah); ikincil kaynaklar | Tapınak tarihi, şehir değil; 817/849 gibi çelişkili rakamlar var. |
| 122 | Arkot (Arcot) | 2 | bulunamadi | — | — | hayir | Encyclopaedia Britannica, Arcot | Kuruluş/ilk anış tarihi yok; 1751 Clive kuşatması yalnız en geç tanık. |
| 123 | Kunming | 2 | supheli | 0799-01-01 | yuzyil | hayir | Encyclopaedia Britannica, Kunming | MÖ 109 Han Yizhou, Dian bölgesi; Dianchi ilçe merkezi başka yerde olabilir. 765 iddiası Vikipedi kaynaklı. |
| 124 | Amoy (Xiamen) | 2 | supheli | 0282-01-01 | yil | hayir | Xiamen Belediyesi resmî sayfası (Tong'an ilçesi, Jin 282) | Xiamen adı 1387 (Ming kalesi). İlçe, ada limanı değil. |
| 125 | Yarkent (Şaçe) | 2 | bulundu | -0099-01-01 | yuzyil | evet | Encyclopaedia Iranica, YARKAND (Pavel Lurje, 2009); Britannica, Yarkand | TDV'de madde yok (başlık ve içerik araması sıfır). Iranica MÖ 1. yy (Hanshu), Britannica MÖ 2. yy sonu; geç uç MÖ 100 seçildi (yüzyıl hassa… |
| 126 | Gulca (Yining) | 2 | bulunamadi | — | — | hayir | Encyclopaedia Britannica, Kuldja; Britannica, Xinjiang/Ili crisis | Çağatay öncesi/Moğol dönemi ilk anış bulunamadı; 1755-57 Qing hâkimiyeti ilk anış değil. |
| 127 | Cao Bằng | 2 | bulunamadi | — | — | hayir | Vikipedi türevleri (Mạc 1592) | İlk anış kaynağı bulunamadı; 1592 Mạc çekilişi ilk anış değil. |
| 128 | Saygon (Gia Định) | 2 | supheli | 1698-01-01 | yil | hayir | Britannica, Ho Chi Minh City (17. yy Vietnamlılar; 1700 öncesi); 1698 Gia Định: HCMC Müzesi | Britannica 1698'i vermiyor; Khmer Prey Nokor daha eski. Hakemli kaynak aranmalı. |
| 129 | Demak | 2 | bulundu | 1500-01-01 | yuzyil | evet | TDV İslâm Ansiklopedisi, DEMAK (Rıza Kurtuluş), c. 9, s. 148-149 | TDV yıl vermiyor, yalnız 'XV. yy son çeyreği'; üst sınır 1500 alındı (Vikipedi 1475 der, kullanılmadı). Ricklefs: Cek Ko-po kurucu. |
| 130 | Erdel Belgradı (Gyulafehérvár) | 2 | supheli | 1097-01-01 | yil | hayir | Encyclopaedia Britannica, Alba Iulia | Roma Apulum'u (Batlamyus 2. yy) bitişikte; 1206/1276 başka kayıtlar. |
| 131 | Brassó (Braşov) | 2 | supheli | 1235-01-01 | yil | hayir | Catalogus Ninivensis: Corona (Brașov şehir turizm sitesi) | 1234 mü 1235 mi çelişki; geç uç seçildi. Brașov adı 1252. |
| 132 | Cempoala (Zempoala) | 2 | supheli | — | — | hayir | INAH Cempoala sayfası (dönem 900-1521) | Kesin kuruluş tarihi yok. |
| 133 | Huexotzinco (Huejotzingo) | 2 | supheli | — | — | hayir | Ders/yerel özetler; akademik 600-1292 Olmeka-Xicalanca iddiası zayıf | Kuruluş günü bulunamadı; Postklasik altepetl, Monarquía Indiana'da tarihsiz geçer. |
| 134 | Mitla | 2 | supheli | 0450-01-01 | yil | hayir | Mitla yerleşimi (Vikipedi/World History özetleri); INAH bulunamadı | Hakemli kaynak okunmadı; kaynaklar 100 MS'den de başlatır. |
| 135 | Zaculeu | 2 | supheli | 0250-01-01 | yil | hayir | Zaculeu işgali Erken Klasik (MS 250-600), ikincil kaynaklar | 250 mi 300 mü belirsiz; hakemli kaynak okunmadı. |
| 136 | Potonchán (Santa María de la Victoria) | 2 | supheli | — | — | hayir | Vikipedi türevleri; Estudios de Cultura Maya makalesi başlığı (yer tanımı sorunu) | Potonchán'ın yeri tartışmalı (arkeolojik sorun); ilk Avrupalı teması Grijalva 8 Haziran 1518. |
| 137 | Bacatá (Bogotá) | 2 | bulunamadi | — | — | hayir | Muisca özet kaynakları | Yerleşim başlangıcı için tarih bulunamadı; Funza'nın fethi 1537 ilk anış değil. |
| 138 | Hunza (Tunja) | 2 | supheli | — | — | hayir | Muisca hükümdar tabloları (zayıf) | Hunzahúa c.1470 rivayeti hakemli değil; tarih verilmedi. |
| 139 | Werowocomoco (Powhatan Konfederasyonu B… | 2 | supheli | 1200-01-01 | yil | hayir | NPS Werowocomoco: kasaba ~MS 1200'de gelişmeye başladı; W&M arkeoloji projesi | Alan ö.8000'den kullanılmış; kasaba başlangıcı seçildi. |
| 140 | Natchez (Grand Village) | 2 | supheli | 1200-01-01 | yil | hayir | MDAH Grand Village; Shawl 2021 tezi (Fatherland Site kronolojisi) | Höyük inşası 13. yy; Mound E 1300-1500. |
| 141 | Coweta (Creek/Mvskoke Konfederasyonu — … | 2 | supheli | 1675-01-01 | yil | hayir | Creek Heritage Trail işaret levhası (hmdb.org); Apalachicola Province özeti (Vikipedi) — ikincil | Hakemli kaynak okunmadı; Mississippi dönemi öncesi yerleşim Chattahoochee'de olabilir (nokta konfederasyon merkezi). |
| 142 | Chota (Cherokee Overhill Başkenti) | 2 | supheli | 1745-01-01 | yil | hayir | Overhill Cherokee/Chota özetleri (Vikipedi türevleri) — ikincil | Hakemli kaynak okunmadı (UT 1969-74 Chota-Tanasi kazıları var); Tanasi ondan eski. |
| 143 | Nanih Waiya (Choctaw Konfederasyonu, ku… | 2 | supheli | — | — | hayir | Nanih Waiya höyüğü (Choctaw Nation; Clio) | Höyük yaşı bilinmiyor; kutsal merkez. |
| 144 | Thanh Hoa | 2 | supheli | — | — | hayir | Cửu Chân komutanlığı MÖ 111; Hồ Kalesi 1397 (özetler) | Cửu Chân MÖ 111 bölge; Hồ Kalesi Vĩnh Lộc'te, nokta şehir değil. Tarih verilmedi. |
| 145 | Katsina | 2 | bulundu | 1100-01-01 | yil | evet | Encyclopaedia Britannica, Katsina | 'probably' ve gelenek; 10-12. yy aralığı. |
| 146 | Zaria (Zazzau) | 2 | bulundu | 1536-01-01 | yil | evet | Encyclopaedia Britannica, Zaria | TDV'de ZARİA maddesi yok (arama: yalnız 1806 fethi). 'Probably'; kırallık geleneği 11. yy (Gunguma). |
| 147 | Prizren | 2 | supheli | 1019-01-01 | yil | hayir | II. Basileios 1019 hrisoboulosu (Prisdriana); ikincil özetler | Antik Theranda ve Prokopios kalesi (6. yy); hakemli kaynak okunmadı. |
| 148 | Comanchería (Güney Büyük Ovalar) | 2 | supheli | — | — | hayir | Sorgulanmadı | Nokta bir bölgeyi temsil eder; kuruluş günü anlamsız. |
| 149 | Asîrgarh | 2 | bulunamadi | — | — | hayir | Encyclopaedia Britannica, Asirgarh; Iranica FĀRŪQĪ DYNASTY, BURHANPUR | Kuruluş/ilk anış yok; Britannica 'geç 13. yy'da Delhi'ye düştü' der (tarihsiz). Burhanpur 1399'da kuruldu. |
| 150 | Aksu (Tarım) | 2 | bulunamadi | — | — | hayir | Encyclopaedia Iranica, AKSU (Alain Cariou, 2009); TDV araması: şehir yok | Tarihli ilk anış verilmiyor; Gumo/Bohuan adları Iranica'da yok. |
| 151 | Sığnak (Sunak Kurgan) | 2 | supheli | 1100-01-01 | yuzyil | hayir | Kâşgarlî Divânü Lügâti't-Türk: Oğuz şehri (bilig dergisi 2026/116 özetinden); akademik ikincil | Tek hakemli dergi makalesi, Divân metni doğrudan okunmadı; Vikipedi 10./11. yy der. Yüzyılın son yılı seçildi. |
| 152 | Baroda (Vadodara) | 2 | bulundu | 0812-01-01 | yil | evet | Encyclopaedia Britannica, Vadodara | Ankottaka (Akota) daha eski yerleşim; 10. yy'da Vadapadraka onu geride bıraktı. |
| 153 | Jelgava (Mitau) | 2 | supheli | 1265-01-01 | yil | hayir | Britannica, Jelgava (1226 Kılıç Kardeşleri kalesi); şehir resmî sitesi (1265, akademik sayılmaz) | Çelişki: 1226 (Britannica) / 1265 (şehir sitesi, Livonya Kafiyeli Kroniği'ne dayandırıyor). Hakemli üçüncü kaynak okunmadı; 1265 geç uç tut… |
| 154 | Liepāja (Libau) | 2 | bulundu | 1253-01-01 | yil | evet | Encyclopaedia Britannica, Liepāja | Gün 4 Nisan 1253 (Vikipedi); 1263 şato kuruluşu. |

## Ek B — Araştırılmayan 1975 nokta

Tam liste `ILK-GECIS-1118.tsv`de (`karar=arastirilmadi`). Kademe dağılımı:

| k | grup | nokta |
|---|---|---|
|  | 1281 | 536 |
|  | kayitsiz | 89 |
| 3 | 1281 | 826 |
| 3 | kayitsiz | 1 |
| 4 | 1281 | 523 |
