# BORÇ DEFTERİ

Kuruluş: 19 Kasım 2026 (Emre'nin emri, EMRELİC 19 KASIM). Amaç: araştırmada bulunamayan, okunamayan,
teyit edilemeyen, yarım kalan, ertelenen, hata veren ya da **Emre'den cevap bekleyen** hiçbir şey
unutulmasın, geçiştirilmesin. Buraya yazılan şey "bitti" sayılmaz; borç ödendiğinde satır **Ödendi**
bölümüne taşınır (tarih + kanıt: commit/dal).

## Kural (bütün makineler, bütün oturumlar)

1. Bir iş **bulunamadığı, okunamadığı, doğrulanamadığı, mesai/RAM yüzünden durdurulduğu, hata verdiği,
   sırası gelmediği ya da Emre'den cevap beklediği** an, o iş bu deftere yazılır. Sessiz geçmek yasaktır.
2. Yazım yolu: oturum, koordinatör oturuma (**EMRELİC 19 KASIM**, ondan sonra devralan koordinatör)
   `SendMessage` ile **`BORÇ:`** önekli mesaj gönderir; koordinatör ilgili bölüme işler. Koordinatör
   yoksa oturum bu dosyayı kendi worktree'sinde düzenler (aynı satıra iki oturum yazmasın diye yalnız
   kendi bölümüne satır ekler) ve dalı KASA'ya bildirir. Defter `main`e yalnız KASA kapısından girer.
3. Satır biçimi: `| No | Tarih | Makine/oturum | Başlık | Ayrıntı | Bekleyen (kişi/koşul) | Durum |`.
4. Emre'ye sorulup cevaplanmayan her soru **A bölümüne** girer, **sorulan tarih ve soran oturumla**.
   Emre cevaplayana ya da "gerek yok" diyene kadar satır açık kalır; koordinatör **her gün başında**
   A bölümünü Emre'ye kısa liste olarak yeniden sunar.
5. Mesai yüzünden durdurulan ağır iş (tam denetle, koşu, ajan turu, paketle, push kapısı) **C bölümüne**
   "mesai sonrası" etiketiyle yazılır; mesai bitince koordinatör ilgili makineye yeniden başlatma emri verir.
6. Kaynak engeli (paywall, şifre, 403/404, ödünç-kilitli, OCR yok, DNS yok) **B bölümüne**; "bulunamadı"
   ile "denenmedi/okunmadı" ayrı yazılır (**ikisi aynı şey değildir**).
7. Defter her iş sonu raporunun ve her *yyy brifinginin parçasıdır: açık satır sayısı bölüm bölüm yazılır.

## A. EMRE'DEN BEKLEYEN KARAR / İZİN / İSTEK

| No | Tarih | Soran | Başlık | Ayrıntı | Durum |
|---|---|---|---|---|---|
| A1 | 19.11 | UMIT 19 | Windows Defender dışlaması | UMIT makinesinde `data/yerlesimler_hint_adalar.js` Defender tarafından siliniyor (Errno 22); paket_24 (Hint adaları) ve tam denetle UMIT'te üretilemiyor. `C:\atlas\.claude\worktrees\*` için dışlama eklenmeli (sistem ayarı, oturum yapmaz). Emre 19.11: "sonra eklerim". | AÇIK — Emre ekleyecek |
| A2 | 19.11 | EMRELİC 19 | Egemenlik günü tanımı | Emre 19.11: "daha çok resmî bağımsızlık, duruma göre değişir". Kural: kırılma günü varsayılan RESMÎ ilan/tanınma; fiilî özerklik ic_not'ta beyanlı. Uygulama C bölümünde (mesai sonrası). Emre "sanırım" dedi: kesin onay istenirse sorulacak. | TASLAK KARAR — C9'da uygulanıyor |
| A3 | 19.11 | LAB 19 | Semerkant/Buhara 1088 tâbilik gösterimi (Emre post-it #13) | Emre'nin karar maddesi, oturum dokunmadı. | AÇIK |
| A4 | 19.11 | LAB 19 | Batum: iki çelişik TDV (XV. yy sonu / 1520-21) | Hangi TDV maddesi esas? İki kaynağıyla ic_not'ta beyan; karar gerekiyor. | AÇIK |
| A5 | 19.11 | EMRELİC 19 | Gereksiz eski worktree'ler ve `origin/worktree-agent-*` dalları | Emre 19.11: gereksiz worktree'ler silinsin, önce gerekirse commit. HAVVA'ya emir verildi (15 commit'siz worktree commit→push→sil). origin'deki 14 `worktree-agent-*` dalı: Emre "worktree sil" dedi, dalları silmeyi söylemedi — sorulacak. | KISMEN VERİLDİ |
| A6 | 19.11 | LAB 19 | Çeviri kalite denetimi (insan okuma) | 20 dil Sonnet çevirisi, ikinci insan okumasından geçmedi; bn/sw/ur/fa özel ad yazımları yerli okuyucu kontrolsüz. İnsan okuma isteği Emre'ye. | AÇIK |
| A7 | 19.11 | LAB 19 | 2sk tavanı (5938) şu an 5975 | Tavan yükseltilsin mi, indirilsin mi? CLAUDE.md "tavan onayı sorulmaz" gereği KASA ölçüp açabilir; yine de rapor edilecek. | KASA'ya devredildi |
| A8 | 19.11 | EMRELİC 19 | Maskat tarihi (TDV 1630 ↔ 1650) | Emre 19.11: üçüncü kaynaklara danışılsın. SONUÇ: Iranica (Cunha 2009, Portugal i) ve EB 1911 'Muscat' Portekizlilerin Maskat'tan 1650'de çıkarıldığını söylüyor; TDV 'Maskat' 1630 diyor (Ya'rubîler, İran desteğiyle) ama 1630'da Maskat'ta böyle olay bulunamadı (1622 Hürmüz kaybı ya da 1629-30 Kong barışı ile karışmış olabilir). Karar (EMRELİC 19, Emre'nin 'üçüncü kaynaklara danış' emriyle): YIL 1650 kalır. GÜN: atlasın 1650-01-26'sı için bağımsız akademik gün kaynağı YOK (23/28 Ocak yalnız Vikipedi) → gün teyitsiz: C24. Okunamayan: da Costa 2022/23 NOVA tezi (Anubis bot koruması), Britannica Yaʿrubid (403), Iranica Oman i (403), Miles 1919 portekiz bölümü okunmadı. | KARAR VERİLDİ (yıl 1650); gün borcu C24 |
| A9 | 19.11 | EMRELİC 19 | Antik Mısır/Sümer/Levant dilimi için e-kitap/makale erişimi | Emre 19.11: hangi site açılmalıysa tespit edilsin, indirilsin, bize verilsin. Araştırma tamam (aşağıda, bölüm G): ücretsiz yollar bulundu (Breasted 1906 archive.org, UCLA Encyclopedia of Egyptology, ORACC/CDLI, OI PDF); Shaw 2000 / Frayne RIME / Grayson ABC / Bryce 2005 için ücretsiz yasal yol YOK (kütüphane/EKUAL/ödünç gerekir). Emre 19.11: PDF indirme için izin sorulmasın, her zaman indirilebilir (CLAUDE.md'ye kural yazıldı). Breasted cilt 1-4 PDF + düz metin İNDİRİLDİ: `C:\Users\emrem\Documents\atlas-kaynaklar\breasted-1906\` (EMRELİC makinesi; 85 MB; diğer makineler aynı archive.org adreslerinden indirebilir). Kalan: Shaw/Frayne/Grayson/Bryce için ücretsiz yol yok (kütüphane/EKUAL). | KISMEN ÖDENDİ — Breasted tamam; Shaw/Frayne/Grayson/Bryce açık |
| A10 | 19.11 | KASA 19 | KASA makinesi temizliği | D:\atlas ana checkout'ta 8 eski yerel commit + kirli defter.json; ~80 `agent-*` worktree; D:\tmp_rev.txt; `.git` tmp_pack 427 MB; eski 57 `ceviri-*-1118` dalı + 6 NOOP dal. Silme emri Emre'de (kurala göre kaybolacak iş olmadığı doğrulanarak). | AÇIK — Emre onayı |
| A11 | 19.11 | EMRELİC 19 | Sonraki 10 çeviri dili (ko vi BCS uz ro bg sq hu hy ka) | Emre 19.11: "diğer dilleri daha sonraya bırakacağız". Başlamaz; C25 (KRONOLOJI_* kapsamı) ile birlikte yeniden gündeme gelecek. | ERTELENDİ (Emre kararı) |
| A12 | 19.11 | EMRELİC 19 | Sonnet mi Opus mu çeviri | Emre sordu (19.11). Cevap Emre'ye verildi; kalite ölçümü (aynı 40 madde iki modelle, geri-çeviri karşılaştırması) önerildi, Emre'den onay bekleyen karar yok ama ölçüm yapılmadı. | ÖLÇÜLMEDİ — C25 ile |

## B. KAYNAK / ERİŞİM ENGELİ (bulunamadı · okunamadı · paywall · şifre · hata)

| No | Tarih | Oturum | Kaynak/konu | Sebep | Etkilenen kayıtlar | Durum |
|---|---|---|---|---|---|---|
| B1 | 19.11 | LAB 19 | Qatar Digital Library (qdl.qa) 403 Cloudflare | Arab Bulletin, Lorimer Gazetteer okunamadı | Rabigh/Râbiğ 1916, Hâil 1818, Rakka/Deyrizor 1918 | OKUNMADI |
| B2 | 19.11 | LAB 19 | Tauber 1991 'Struggle for Dayr al-Zur' (Cambridge/IJMES) | paywall | Rakka/Deyrizor 1918-10 | OKUNMADI |
| B3 | 19.11 | LAB 19 | archive.org ödünç/kısıtlı: Hovannisian 'Republic of Armenia' I, Kazemzadeh, Wilson 'Mesopotamia 1917-1920', Winder | ödünç kilidi | Gümrü 1918-12, Hâil, Altınköprü ek | OKUNMADI |
| B4 | 19.11 | LAB 19 | fundamentalarmenology.am | DNS yok | Gümrü 22 Kasım/4 Aralık iddiası | DOĞRULANAMADI |
| B5 | 19.11 | LAB 19 | Rousset t.II, Julien (Gallica) | taranmadı | Ayn Temûşent, Bû Sa'âde, Hanşele, Ayn Beydâ, Sûk Ahrâs, Mesîle günleri | DENENMEDİ |
| B6 | 19.11 | LAB 19 | Finlay, Gordon, Holt-Daly, Hill, Sheriff, Pouwels, İnalcık defter, Persée makaleleri | tam metin indirilemedi | Argos giriş günü, Berber/Debbe/Ebû Hamed, Kilindoni/Lindi/Mikindani, Ouesso/Impfondo, Ayasaranda | OKUNMADI |
| B7 | 19.11 | LAB 19 | TDV 'burgaz', 'seyun', 'anadolu hisarı' | madde yok/farklı ad | Burgaz, Seyûn, Beykoz | BULUNAMADI |
| B8 | 19.11 | LAB 19 | BTNG-RBHC 12 (1981) PDF | taranmış CCITT, OCR yok | Nieuwpoort 1814 (Biekorf Nisan ↔ atlas Şubat) | OKUNMADI |
| B9 | 19.11 | UMIT 19 | Gilson Samoa 1830-1900; Salomon/Hemming Quito/İnka; Levtzion Ancient Ghana and Mali; Rostworowski/Hyslop/D'Altroy; Pellissier de Reynaud Annales algériennes; Vansina Tio Kingdom; AWM/Falls/Hovannisian | ödünç-kilitli / erişim yok | Apia, Quito, Niani, Tumbes/Cajamarca, Cezayir, Rakka vb. | OKUNMADI — Emre e-kitap/kütüphane erişimi |
| B10 | 19.11 | UMIT 19 | Antik firavun/Sümer/Levant: Shaw 2000, Charpin, Bryce 2005, Breasted, Grayson ABC, Frayne RIME | paywall | 2t antik ≈48 madde; antik B 13 öneri halka yazılamadı | OKUNMADI — A9 |
| B11 | 19.11 | UMIT 19 | Tarawa, Banaba, Funafuti: Colonial Reports/Mahaffy bulundu | okunmadı | 3 sahipsiz yerleşim | OKUNMADI |
| B12 | 19.11 | UMIT 19 | Iranica (Erdebil), akademik şehir kaynağı | okunamadı | Rey (13 dönem, Irak Selçuklu çıkarım), Zencan (başlangıç yılı), Erdebil (Tebriz abi-merkez zinciri) | BULUNAMADI/OKUNMADI |
| B13 | 19.11 | UMIT 19 | Pago Pago, Daru, Vanimo, Tumbes, Cajamarca, Quito, Niani | kaynakla bağ bulunamadı | 7 sahipsiz yerleşim | BULUNAMADI |
| B14 | 19.11 | UMIT 19 | Osmanlı sıra 36-65 (22 yer): Kaş, Edremit, Mudanya, Enez, Çorlu, İğneada, Egina, Cezayir yerleri, Mısır Delta şehirleri… | TDV'de ayrı madde yok / Britannica 404; İSAM/TTK/DergiPark/YÖK basamakları KOŞULMADI | 22 yerleşim tarihçesi | DENENMEDİ |
| B15 | 19.11 | UMIT 19 | Boston 1630-09-07, Charleston 1670-04-15 gün kaynağı; Cayuga/Arauco/Cherokee/Iroquois (HNAI çevrimiçi yok, ödemeli duvar) | bulunamadı | Amerika yerli konfederasyonlar, 44 kaynaksız yerleşim (≈148 dönem) | BEYANLI |
| B16 | 19.11 | LAB 19 | Kragujevac 1944 kurtuluşu | tek Vikipedi tabanlı sayfa | Kragujevac (UMIT dokunmadı) | BULUNAMADI |
| B17 | 19.11 | UMIT 19 | Mahmudâbâd 1735-03-21 | TDV Mahmudâbâd'ı adıyla anmıyor | Mahmudâbâd | BEYANLI |

## C. YARIM KALAN · ERTELENEN · SIRASI GELMEYEN İŞ

| No | Tarih | Makine | İş | Bekleyen koşul | Durum |
|---|---|---|---|---|---|
| C1 | 19.11 | HAVVA | Koşu 40 (başlangıç 19.11 00:49, ETA 15:30–16:00; mesai yavaşlatması ile kayabilir) | koşu biter | ÇALIŞIYOR |
| C2 | 19.11 | HAVVA→KASA | Koşu 40 inişi (`kosu40-inis-1119`, KOSU-YAYIN.md ①–⑤, `--uretilen-onay "KOŞU 40"`) | koşu bitişi | BEKLİYOR |
| C3 | 19.11 | KASA | abi-merkez-k4 @34244f3e6, UMIT -c (@c24b05723+), ilk-gecis-1118-r2 @68e85affa kapıya girecek | YAYIN BAYAT eşiği: Emre 19.11 "istisna verilsin" dedi → BAYAT_TAZE_GUN geçici yükseltilecek | KASA UYGULUYOR |
| C4 | 19.11 | KASA | **BAYAT_TAZE_GUN'u 2.0'a GERİ AL** (ayrı commit; iniş `main`e girdikten sonra) | koşu 40 inişi | BORÇ — unutulmasın |
| C5 | 19.11 | KASA | Tavan yazımları UMIT partisiyle aynı commit'te: BEKLENEN_SAHIPSIZ 210→207, BELGESIZ 2→0, kaynaksızlık hiçbiri 1930→43 (--kaynak-tavan-indir), BEYAN_EDILEN_BOSLUK'a Cenne satırı | UMIT -c kapıda | BEKLİYOR |
| C6 | 19.11 | UMIT | 4 yerleşim kırılması commit'siz (İnebahtı 1829-04-30, Missolonghi 1829-05-14, Altınköprü 1918-10-31, Kerkük 1918-10-25) | mesai sonrası tam denetle 0 + commit + uç KASA'ya | MESAİ SONRASI |
| C7 | 19.11 | LAB | LAB maddeleri: İnebahtı 04-30, Missolonghi 05-14, Altınköprü 10-31, Kerkük 10-25; Zencan 0997-01-14 madde t'si | UMIT ucunu itince | BEKLİYOR |
| C8 | 19.11 | UMIT | osm_5 (8 kayıt: Uluborlu, Eğirdir, Ermenek, Sincar, Sübaytıla, Munastır, Chełm, Volodymyr) commit EDİLMEDİ (WebFetch özeti "kısmî alıntı" ≠ birebir kuralı) | mesai sonrası tek tek birebir doğrulama | MESAİ SONRASI |
| C9 | 19.11 | UMIT | Egemenlik günü uygulaması: Arjantin 1810/1816 (Córdoba, Santa Fe, Mendoza, Buenos Aires…), Şili 1810/1818, Guatemala 1821/1823/1844, Chota 1791/1819, Cayuga/Antigua | mesai sonrası ağır ölçüm; yalnız kaynaklı + künye ömrü/Değişmez 2 temiz olan | MESAİ SONRASI |
| C10 | 19.11 | UMIT | Ajan tanıkları satır satır doğrulanmadı (Isfahan, Gence, Rey zincirleri) | mesai sonrası doğrulama turu | MESAİ SONRASI |
| C11 | 19.11 | UMIT | Tam denetle (coz-c) UMIT'te mesai için durduruldu; Defender yüzünden zaten ölçülemiyor | mesai bitişi + A1 | MESAİ SONRASI |
| C12 | 19.11 | UMIT | Tarihçesiz yerleşim: antik 379 (tur açılmadı), osm 22 yer 2.-5. basamak | mesai sonrası ajan turu + B9/B10 erişim | BEKLİYOR |
| C13 | 19.11 | UMIT | Künye/tuz: İfe künyesi taslağı (`umit-19-kunye-taslak`; ife-kralligi f 1001 yüzyıl, t 1888; BOYALAR #24d2d8), 51 künyesiz polity kimliği (taras-sehir-devleti, smyrna-polis, pontus-polemon, trapezus-polis, seyhogullari…), `osmanli` kimliği s: dönemlerinde yok, Apia samoa-kralligi f 1889 beyanlı | koşu 40 sonrası paket (renkler.py/BOYALAR) | KOŞU SONRASI |
| C14 | 19.11 | UMIT | Varna/Serez/Manastır/Konstantin künye-aşımı: dönem kısaltıldı/beyanlı boşluk; Tebriz künye genişletilmedi (0956-04-15 madde yok) | kaynak + madde | BEYANLI |
| C15 | 19.11 | LAB | Mükerrer 247 çift kalanı (G* bilinçli ikiz 7, F ~85, K ~21, B ~10, riskli G: 173, 203, 207, 253, 259, 265, 323, 252, 214, 295…); künye aynası seçimi (196, 204, 213, 215, 217) | LAB sıralı temizlik | YARIM |
| C16 | 19.11 | LAB | 2s kalan 120 (≈45 'belirsiz', `denetim/LAB19-2s-belirsiz.tsv`), 2t kalan 163 (antik 96 UMIT; LAB 71'in ≈25'i B/M), 2sk yalnız-taraf 5975 (tavan 5938), yıl-temsili borç 443 | kaynak merdiveni sonraki basamak | YARIM |
| C17 | 19.11 | LAB | Dânişmendli/Kudüs/Mostar maddeleri UMIT yerleşim dalıyla birleşimde ölçülmedi; yerleşim `taraflar` künye ucu eşlemesi bazı silinen sınır kayıtları için zayıf (Septimania/vizigot) | birleşik parti ölçümü | BEKLİYOR |
| C18 | 19.11 | HAVVA | Worktree temizliği: 15 commit'siz `agent-*` worktree (commit→push→sil), 14 commit'li (main'de) worktree sil | HAVVA mesai hafif iş | EMİR VERİLDİ |
| C19 | 19.11 | UMIT | Worktree `umit19-yerlesim-kronoloji` açık | kapı sonucu | BEKLİYOR |
| C20 | 19.11 | LAB | `origin/lab19-2s-1119b` eski uçlar/`lab19-2s-1119` dalı silinecek | birleşince | BEKLİYOR |
| C21 | 19.11 | EMRELİC | Sonraki çeviri dilleri: ko vi BCS uz ro bg sq hu hy ka (hafıza: sıradaki 10 dil, aktif diller bitince eklenir) | Emre onayı + token | BAŞLAMADI |
| C22 | 19.11 | EMRELİC | Gece boyu yarım kalmış eski dallar: `origin/ceviri-*-1118` (57, aşılmış), `kaynak-*`, `postit-190`, `havva-p1-dilim` (arac/kodla_dilim.py, koşu 40 sonrası) | KASA ölçümü | KASA LİSTELEDİ |
| C24 | 19.11 | UMIT+LAB | Maskat günü: atlasın 1650-01-26'sı gün kaynaksız → "yalnız yıl teyitli; gün teyitsiz" notu + gerekirse 1650-01-01; yerleşim kırılması ve kronoloji maddesi BİRLİKTE taşınır (Değişmez 2). Elle indirilecek: da Costa tezi (run.unl.pt/bitstream/10362/118903/1/Portugal_in_Oman_1622_1650_v3_Final.pdf) kuşatma günü için | mesai sonrası + PDF (Emre indirir ya da başka makine) | BEKLİYOR |
| C25 | 19.11 | EMRELİC | **ÇEVİRİ KAPSAMI:** çeviri aracı yalnız `OLAYLAR*` (5139 madde) + `KRONOLOJI_COK_ARABISTAN2`'yi sayıyor (`arac/ceviri_cikar.js:28-29`). `KRONOLOJI_*` 150 dizi · ≈13.272 madde (kronoloji_cok_*, kronoloji_sinir_*, devlet kronolojileri) KADEMELİ çeviriye alınmamış: sitede Türkçe kalır. "20 dilde çeviri bitti" = yalnız çeviri evreni (menü/arayüz 1857, devlet adları, OLAYLAR 5139); toplam kronoloji maddesinin ≈%27'si (5139/≈18.400). Karar: Emre 19.11 "diğer diller sonra" ama bu KRONOLOJI_* kapsam boşluğu ayrı soru. | Emre kararı (önce hangi diller/hangi diziler?) + Sonnet/Opus kalite | BAŞLAMADI |
| C26 | 19.11 | KASA | KASA kararı: bayat istisnası KULLANILACAK (Emre KASA'ya: "hangisi daha sağlıklı sence, ona göre yapalım, ne yapılacaksa borç defterine yazalım"): BAYAT_TAZE_GUN 4.0 geçici; sıra asiret → lab19 → borc-defteri → eşik 4.0 → abi-merkez → UMIT -c → r2. Koşu 40 inişi sonrası 4.0→2.0 geri (ayrı commit). abi-merkez/UMIT -c/r2 verisi koşu 40 haritasında YOK: koşu 41 gerekir [HAVVA] | KASA UYGULUYOR |
| C27 | 19.11 | KASA | lab19↔UMIT Dellîs/Mostar bağı: lab19 önce girerse bağ UMIT'e kadar eksik → birleşik ağaçta Değişmez 2/2s/2t yeniden ölç | BEKLİYOR |
| C28 | 19.11 | KASA | Temizlik onayı bekliyor [Emre]: D:\atlas ana checkout'ta 8 eski yerel commit + kirli defter.json; ~80 agent-* worktree (KASA makinesi); D:\tmp_rev.txt; .git tmp_pack 427 MB; eski 57 ceviri-*-1118 + 6 NOOP dal; yerel dal kasa19-abi-merkez-hazir silinebilir | A bölümüne taşındı: A10 |
| C29 | 19.11 | KASA/Emre | CRLF/.gitattributes: kapı çalışma ağacı kirliyse (paket_* CRLF gürültüsü) --autostash gerekiyor | YAZILIM İŞİ |
| C23 | 19.11 | KASA | Kapı log'u yalnız kuyruğu saklıyor; ret nedenini sonradan okumak zor (abi-merkez ✗ satırı) | push_kapisi.py'ye tam log dosyası | YAZILIM İŞİ |

## D. HATA VEREN · YAPILAMAYAN · ŞÜPHELİ/TEYİTSİZ

| No | Tarih | Oturum | Ne | Ayrıntı | Durum |
|---|---|---|---|---|---|
| D1 | 19.11 | LAB 19 | 2s 'belirsiz' ≈45 | Batna (8 Şubat 1844 yalnız çıkış), Ayn Temûşent/Bû Sa'âde/Hanşele/Ayn Beydâ/Sûk Ahrâs/Mesîle (geçici sefer), Tébessa 1842-05-31 (geçici), Berber 1821, Argos 1822 (giriş günü yok; Dramali çekilişi 6 Ağustos Phillips s.105), Maan (27 Eylül 1918 öncesi boşaltma; TDV 1916), Yenbu (atlas 1805/06 doğrulanmıyor), Hâil 1818 (Lorimer 9 Eylül 1818 Dir'iye, Hâil değil), Gümrü (yalnız 'Aralık 1918'), Rakka, Râbiğ, Seyûn, Kilindoni, Ouesso/Impfondo, Ayasaranda, Takova, Burgaz, Beykoz (TDV Anadoluhisarı 793/797 çelişkisi), Alasonya/Dömeke/Golos, Edinburgh 1650 (13 Eylül şehir girişi teyitsiz; kale 24 Aralık), Nieuwpoort 1814 (iki ucuyla beyan edilecek, henüz yazılmadı) | ŞÜPHELİ |
| D2 | 19.11 | LAB 19 | 2t E/Y 'belirsiz' | Peşte 1684-11-03 (madde yanlış olabilir), Beyrut 1291 (gün yok), Yanova 1693, Modon 1686 (7/10 Temmuz çelişkisi), Çankırı 1417, Dia 1494 (yerleşim yok), Mantua/Bolonya/Rimini/Trapani 1281 sentetik (denetim yapaylığı) | ŞÜPHELİ |
| D3 | 19.11 | UMIT 19 | Atlas düzeltme adayları | Cajamarca (inka 1465) ve Tumbes (inka 1470): Rowe/Cabello 1462 tek yıl, Britannica Chimú 1465-70, Sarmiento/Cieza çelişik → atlas beyanlı kaldı; Niani (Mali): 13. yy başkentlik sözlü gelenek = Hunwick 'alleged' (Levtzion kilitli), mali 1599-1670 ucu doğrulanmadı; Gence künye t 1075-08-16 (günü hicrî-ilk-gün kuralı; yıl 1075 iki bağımsız kaynak, TDV Gence 1076/1088 ayrı olay) | BEYANLI |
| D4 | 19.11 | LAB 19 | Paralel yazım kazası | hi/pt/de olay dosyalarında ~1600 kayıt kaybolmuştu, commit'ten geri yüklendi, HAVVA bağımsız doğruladı (kalıcı kayıp yok). Ders: çeviri dosyalarına paralel yazım yok. | KAPANDI (kayıt) |
| D5 | 19.11 | KASA | abi-merkez-k4 `denetle_yayin` ✗ | önce PAKET BAYAT (KASA paketleri yeniledi), sonra YAYIN BAYAT 2.43 gün | BEYANLI → C3 |
| D6 | 19.11 | EMRELİC | `ilk-gecis-1118-r2` denetle ölçülemedi | alt ajanın denetle'si 1 sa 40 dk koştu, ben sonlandırdım (çıkış 1 yapay); kapı ölçümü esas | KAPIDA ÖLÇÜLECEK |
| D7 | 19.11 | HAVVA | Dünkü HAVVA bayat istisnası repoda kayıtsız | KASA taradı: yerel/uncommitted ya da sözlü. HAVVA 19 ve HAVVA 17 de bulamadı (HAVVA 17: 'bu oturumda istisna almadım; yalnız 27 Eki kaydı var, o zaman çıkış yolu yeni koşuydu'). Emre'nin 19.11 sözü ("istisna verilsin") geçerli açık izin; dünkü istisnanın hangi oturumda/biçimde verildiği Emre'ye sorulabilir. | KAYITSIZ — Emre'nin bugünkü sözü esas |

## E. YAZILIM / ARAÇ İŞİ

| No | Tarih | İş | Ayrıntı |
|---|---|---|---|
| E1 | 19.11 | push_kapisi tam log | Ret nedeni (✗ satırı) sonradan okunsun diye kapı çıktısını dosyaya yazsın (C23) |
| E2 | 19.11 | denetle_yayin bayat eşiği tasarımı | Eşik "yerlesimler.js son commit − donemler_on.js son commit" ölçüyor; başka dosya değişimi yaşlandırmıyor; veri değişikliği koşusuz girmeyince çıkmaz yaratıyor (hafıza: yayin-bayat-cikmazi). Kalıcı çözüm Emre kararı. |
| E3 | 19.11 | OLAY_TARAF okuyuşu | `maddeSahipleri()` `devletler:` / `taraflar:` / `devlet:` sırasıyla okur; `olay_taraf` yalnız OLAYLAR* `kapsam:"dis"` için (js/app.js ~8791, ~17858); dump betikleri `devletler` alanını da almalı |
| E4 | 19.11 | Defender dışlaması (A1) olmadan UMIT'te paket üretimi/denetle sahte "ölçülemedi" |

## G. ANTİK MISIR/SÜMER/LEVANT/HİTİT İÇİN ERİŞİM YOLLARI (araştırma ajanı, 19.11; "doğrulandı" = sayfa/metadata okundu)

| Kaynak | Yol | Ücret/lisans | Not |
|---|---|---|---|
| Breasted, *Ancient Records of Egypt* (1906-07) | archive.org/details/ancientrecordsof01brea (cilt 1, doğrulandı); cilt 2 `ancientrecordsof02brea_0`, cilt 4 `ancientrecordse04breagoog`, cilt 3 `dli.ernet.19796` (arama sonucu) | ücretsiz, kamu malı | Emre'nin "ödünç kilidi" 1962 Russell&Russell baskısıydı; 1906 baskı kısıtsız. Yalnız ham metin/olay sırası; mutlak yıl için Shaw/Hornung. İndirme izni gerekir. |
| UCLA Encyclopedia of Egyptology | uee.ucla.edu/chronology (doğrulandı), escholarship.org/uc/nelc_uee | ücretsiz açık erişim, hakemli | Shaw'a çapraz doğrulama; MÖ 664 öncesi tarihler yaklaşık |
| ORACC | oracc.museum.upenn.edu/ribo, RIAo, RINAP, ETCSRI | ücretsiz | RIME'in ORACC projesi YOK; Ur III/Lagaş için ETCSRI kapsamı doğrulanmadı |
| CDLI | cdli.earth | ücretsiz | tablet kayıtları yıl-adı+ay verir, mutlak saltanat tarihi vermez |
| Chicago OI/ISAC PDF katalog | oi.uchicago.edu/research/pubs/catalog/ | ücretsiz, "personal use" şartı | depoya KOYMA, yalnız URL+sayfa bildir |
| Hethitologie Portal | hethport.net | ücretsiz | kronoloji içeriği doğrulanmadı |
| Shaw (2000), Frayne RIME, Grayson ABC, Bryce 2005, Hornung-Krauss-Warburton 2006 | ücretsiz yasal yol YOK | kütüphane ödünç / EKUAL (üye kurum) / satın alma | Glassner *Mesopotamian Chronicles* (SBL 2004) açık erişim olabilir (doğrulanmadı) |
| TR: DergiPark hakemli makaleler, YÖK tezleri | dergipark.org.tr, tez.yok.gov.tr | ücretsiz | arama sonucu, açılıp okunmadı |

## F. ÖDENDİ (taşınan satırlar)

| Tarih | Ne | Kanıt |
|---|---|---|
| 19.11 | 20 aktif dilde çeviri borcu 0 (olay/devlet/arayüz) | HAVVA ve LAB ölçümü, `ceviri.py denetim` açık borç 0; yetim temizliği `cfbb53a7` |
| 19.11 | 14 `worktree-agent-*` dalının `main`'de olduğu doğrulandı | HAVVA git cherry 16/16 |
| 19.11 | LAB mükerrer birleştirme (99→96 silme) bağımsız doğrulandı | HAVVA: çeviri kaybı yok, taraf eksiği 2 → düzeltildi (Petersburg/Reşt) |
