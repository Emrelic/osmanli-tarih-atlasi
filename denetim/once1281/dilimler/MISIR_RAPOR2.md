# MISIR (misir-sudan + dogu-afrika) — Tur 2 raporu

Web erişimi VAR: WebSearch yalnız özet/bağlantı döndürdü, WebFetch sayfa okuttu (Vikipedi, TDV, Cambridge Core özeti, PAM özeti, Bahir Dar PDF). Vikipedi her yerde yalnız aracı olarak kullanıldı; `kaynak:` alanında "yalnız aday/aracı" diye etiketli ve sayfanın atfettiği akademik eserler ayrıca yazıldı (o eserler doğrudan açılmadı).

## 1. Sayılar
| Dilim | Kayıt | okundu | kismen-okundu | taslak |
|---|---|---|---|---|
| A | 4 | 0 | 3 | 1 (ta-seti) |
| B | 12 | 0 | 11 | 1 (yam) |
| C | 5 | 0 | 5 | 0 |
| D | 11 | 2 (makuria, kilwa-uzun) | 3 | 6 |
| E | 11 | 1 (ifat) | 4 | 6 |
| Toplam | 43 | 3 | 26 | 14 |

- Eklenen: 15 (beja-bazin, -jarin, -baqlin, -nagash, -qita, mogadisu-erken, sofala-sehir-devleti, pate-nabhani, mombasa-sehir-devleti, al-abwab, ifat-sultanligi, hadiya, dawaro, sharkha, arabini; 31 - 3 elenen + 15 = 43).
- Elenen (`MISIR_ELENEN.json`, 3): aegyptus-roma-bizans (Roma eyaleti), zenc-kiyi (siyasî birlik değil), dotawo (1281 öncesi Makuria'nın yerli adı; 1365 sonrası kalıntı devlet kapsam dışı).
- Eşleme: tüm `mevcut_id`'ler TSV'de var (betik doğruladı). Değişen: kilwa-uzun → `kilva-sultanligi` (var-f-t-farkli), aksum-uzun → `aksum` (t boş, ~960 öneri), misir-16-hanedan notu (tebai-17-hanedan'ı kapsıyor olabilir).
- Tarih düzeltmeleri (eski değer her kayıtta `ic_not`ta): tebai-amon -1079→-1076; 22. Hanedan f -0944→-0942; 23. f -0837→-0836 (MÖ 837 astronomik düzeltme); 24. -0732/-0720→-0731/-0719 (astronomik düzeltme); abydos-0 -3199→-3299; dmt -0979→-0799; aksum t 0940→0960; tebai-ayaklanma t -0185-01-01→-0185-08-27 (gün); nobatia f 0350→0400, t 0650→0652; blemmyes f 0300→0400, t 0600→null; makuria t 1312→1365; alodia f 0550→0350; zeyla f/t null→1050/1285; kenzu f/t null→1006/1174; punt f→-2499 (ilk anılma), t null; beja-krallik f 0600→0800, t 1300→null.

## 2. Doğrudan okunan akademik/birincil sayfalar ve ulaşılamayanlar
Okundu: TDV Nûbe, Asvan, Kilve, Zeyla, Evfât, Bâlî, Makdişu, Dehlek (Dehlek mevcut kaydı destekler; yeni kayıt gerekmedi); Chittick 1965 (JAH) Cambridge özeti; Godlewski 2019 (PAM 28/2) özeti; Bayu 2021 Damot makalesi (PDF metni).
Ulaşılamayan / boş: Britannica (403), Oxford Academic Ruffini bölümü (yalnız menü), PCMA Old Dongola 5 (captcha), Vikipedi Ta-Seti ve Yam (404), Bale/Dawaro Vikipedi sayfaları (404), TDV "Beca" (yok), TDV Hadiye/Dâvaro (madde yok; arama sayfası), Encyclopaedia of Islam / Encyclopaedia Aethiopica / Welsby 2002 / Ruffini 2013 / Pankhurst 1997 / Paul 1954 (hiç açılmadı).

## 3. Ne hâlâ sığ (bulamadım)
- Etiyopya sultanlıkları: Hadiya/Dâvaro/Şerhâ/Erâbînî 1281 öncesi varlığı yalnız TDV Evfât'ın ~1285 sayımına dayanıyor, kuruluş yılı yok (f null). Bâli 14. yy'da ilk anılıyor, alınmadı. Dâre (TDV Evfât'ın altıncı sultanlığı) kimliği bulunamadı, eklenmedi. Medri Bahri/Bahr Negash, Gafat, Bizamo ayrı polity kanıtı vermedi. Ifat kuruluşu çelişkili (TDV 1285; TDV Zeyla maddesi XI. yy ortası; Vikipedi 1275, Maqrizi 1185) — Ifat f=1285 sınırda, ana oturum kapsam kararı versin.
- Svahili kıyısı: Mombasa/Pate/Sofala yalnız taslak. Lamu, Manda/Takwa, Shanga, Zanzibar (Kizimkazi 1107 yazıtı, Unguja Ukuu), Barawa, Merka, Malindi için polity kanıtı bulunamadı; Kilwa'nın başlangıcı üç farklı tarihte (TDV 975; Chittick ~1200; Vikipedi 957). Sofala'nın Kilwa'ya bağlanışı da TDV (1130-1170) ile Vikipedi (1180'ler) arasında çelişkili.
- Beja: 5 alt krallık yalnız Vikipedi (hepsi el-Yakûbî'ye dayanıyor, kendi aralarında türemiş); EI "Bedja", A. Paul 1954, Ibn Hawqal açılamadı. Alt krallıkların f/t bilgisi yok.
- Dotawo: ayrı polity değil (Makuria'nın adı); ana oturum bunu doğrulasın. Banu Kanz: 1006 unvanı ve 1174 yenilgisi var, ama Maris dönemi (1174-1317) polity olarak kanıtlanmadı.
- Nobatia/Makuria birleşme tarihi kaynaklarda 620'ler ile 8. yy arasında çelişkili; 652 üst sınır olarak alındı.
- Mısır: eyalet valileri, Sasani Mısır'ı (618-629), Palmira işgali yazılmadı; Zaghawa/Daju-Darfur dışarıda. Dynasty 0 öncesi Delta krallıkları (Buto, Tarkhan) ayrı kayıt yapılmadı. Yam ve Ta-Seti taslak.

## 4. İstekler
- Ana oturum karar: (a) Beja üst kayıt mı 5 alt kayıt mı; (b) `nube` künyesini Nobatia/Makuria/Alodia/al-Abwab olarak bölmek; (c) Ifat'ı (1285) kapsama almak; (d) Meroe'yi `kush-krallik`ten ayırmak; (e) Dotawo'nun elenmesi; (f) 21.-24. Hanedanları ve 16. Hanedan'ı ayrı tutmak.
- TDV'de Beja, Hadiye, Dâvaro, Bâli, Zagwe, Sultanate of Shewa için doğrudan madde adlarını bilen biri/başka bir oturum arasın; Welsby 2002 ve Ruffini 2013, Pankhurst 1997, Braukämper 2012, Chittick 1974 elle okunmalı (tam metin web'de açılamadı).
