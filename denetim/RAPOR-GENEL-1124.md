# GENEL RAPOR — bütün makineler, son 10 gün (14–24 Kasım 2026)

Hazırlayan: EMRELİC 21 KASIM, 24 Kasım. Kaynak: EMRELİC'in kendi ölçümü (oturum dökümü + `git`), HAVVA ve LAB'ın
yazdığı raporlar (`havva-rapor-1124`, `rapor-lab-1124`), UMIT'in brifingi, KASA'nın mesajları. **KASA ve UMIT
raporları henüz yazılı gelmedi** (aşağıda "eksik" diye işaretli). Her makine kendi oturumlarının son turlarına
baktı, gövdelerini okumadı: "bitti" kararı son tura dayanır; emin olunmayan "belirsiz" yazıldı.

## 1. Makineler şu an

| Makine | Durum (24 Kasım) | Ne yapıyor |
|---|---|---|
| KASA 21 | AÇIK, çalışıyor | Kapı (push) kuyruğunu eritiyor: 8 tur indi, şimdi eşik+HAVVA borcu, sonra uçuş ayarı, sonra veri zincirleri |
| HAVVA 21 | AÇIK | Koşu 40 sürüyor (19.11'den beri, 5. gün); kendi dallarını itti |
| LAB 21 | AÇIK | Denetim; rapor yazdı; EczAsist'te 2 itilmemiş commit |
| UMIT 21 | AÇIK (rapor yazdı; kapatma başlatmıştı ama makine ayakta) | Boşluk-1280 kampanyası 7 bölgede bitti, hepsi itildi |
| EMRELİC 21 | AÇIK (bu oturum) | Koordinasyon + arayüz işleri |

## 2. YAPILANLAR (main'de olanlar)
- Dizin yeniden tasarımı + Yüzyıllar + Kaynaklar sekmeleri; Roma Krallığı/Cumhuriyeti kronoloji düzeltmesi; kapsam şeridi 3 sn.
- Tanıtım turu: masaüstü/telefon ayrı, kart hedefi örtmüyor, Butonlar menüsü gösteriliyor.
- LAB denetim düzeltmeleri (Dizin kişi eşlemesine dönem süzgeci, EN yüzyıl sayfası geri dönüşü, Roma Krallığı kaynak düzeyi).
- Boşluk doğrulaması (Kirene/Merc/Tulmeyse Roma dönemi), borç defteri A20–A27. `main` a5aaaee3 (8 tur).

## 3. YAPILMAKTA OLANLAR
- **Kapıda (KASA):** `emrelic-24-bayat-esik` (eşik 4→10) + `havva-borc-kosu40-1123` birlikte; arkasında `emrelic-24-ucus-ayar` (tek "Uçuş ayarları" düğmesi + telefon yatay/dikey düzeni + 21 dil çeviri).
- **Kapı sırasında bekleyen veri dalları:** UMIT zinciri (`umit-bosluk-dasya1-1122` @947d3e0ab), HAVVA b6/b7/b7y/b7z/b8 + dünya/Amerika dalları, `lab-bosluk-duzeltme-1122` ve `-2`, `emrelic-bosluk-rus-1122`; `bizans` sahibinin rebase'ini bekliyor. Hepsi "yayın bayat" eşiğine takılıydı; eşik açılınca denenecek.
- **Koşu 40:** HAVVA'da 5 gündür sürüyor, bitiş tahmini ÖLÇÜLEMEDİ. İniş zinciri koşu bitmeden başlayamaz.

## 4. EMRE'DEN CEVAP / KARAR / İZİN BEKLEYENLER (hepsi tek listede)
1. **Koşu 40:** 26.11 sabahı hâlâ bitmediyse durdur mu / sürdür mü? (HAVVA bu tarihte soracak)
2. **Koşu 41** istek belgesi (çevrili boşluk + kıyı kuralı, Ⓑ sahipli toprağa çizilmesin, beyanlı yaklaşıklık görseli) ve "başla" izni — HAVVA, Koşu 40 inişinden sonra size gösterecek.
3. **A13 (ACİL, açık):** HAVVA'da pagefile 48 GB sabit + Chrome kapatma.
4. **A1/A5/A10:** Defender dışlaması (UMIT'te `yerlesimler_hint_adalar.js` silinmişti, HAVVA'da da aynı belirti); eski `worktree-agent-*` / `ceviri-*` dalları ve eski worktree'lerin silinmesi (HAVVA'da 132 worktree, 4 push-kapısı artığı).
5. **A21 Ziyaretçi günlüğü:** anonim sayaç mı, kimlikli (IP/ad) günlük mü (KVKK).
6. **Eşiğin 2.0'a geri alınması** Koşu 40 inince (KASA yapacak, bilgi).
7. **Kronoloji seçim bölümü** (oturum "Kronoloji seçim bölümü tasarımı"): ek devlet varsayılan eşiği 4 kalsın mı; puansız 11.757 madde (%35) için ayrı veri işi açılsın mı; `origin/kronoloji-secim-ui` (+2 commit) yayınlansın mı.
8. **`origin/onceki-sonraki-kaldir`** (+1 commit): kapı yeniden koşturulsun mu (kilit artık düşmüş).
9. **#198 post-it** cevabınız + oturuma "devam" (bekleme betiği ağ hatasıyla iki kez çöktü, kendiliğinden uyanmaz). #199–#201 sırada, dağıtıcı oturum ("Site yükleme animasyonu") açık bırakıldı.
10. **Açılış hızı:** soğuk açılışı boş makinede ölçelim mi; kaynak etiketlerini üretimde önceden hesaplayalım mı (üretim düzenine dokunur).
11. **Çeviri araçları:** `ceviri.py` CRLF düzeltmesi ve `push_kapisi.py`nin `ceviri_dizin.js` çatışmasını çözmesi için yeni oturum açılsın mı.
12. **Koordinatör bayrağı** (eski EMRELİC/HAVVA/UMIT 19 çelişkisi): LAB 17 hâlâ "hangisi koordinatör" diye askıda; EMRELİC 21 fiilen koordinatör, onayınız gerekir.
13. **LAB:** Calais → `artois-kontlugu` boya kararı; Sofala/Yarkent için kaynak (TDV "Tuva Han", Rashid, Chittick/Pearson).
14. **UMIT boya kararları:** vaghela, kolattiri, neopatra-tesalya, bearn, artois künye+boya (BOYA-ISTEKLERI-UMIT21.md).
15. **VPN oturumu (LAB):** AnyDesk/sshd/WSL kapatılsın mı (uzak bağlantı kopar) — test sitesinin "VPN benzeri program" uyarısı.
16. **Eczane işleri (LAB):** EczAsist `543be15` itilsin mi; yıllık gelir vergisi 31 Mart + 31 Temmuz ikiye bölünsün mü; bordrodan net maaş borcu okunsun mu; Guzergah araçta deneme sonucu.
17. **Ardıl devlet zinciri:** öncül/ardıl alanı şema kararı (13 sorunlu çift düzeltilmedi).
18. **Dizin Kaynaklar sekmesi** yalnız 5193 olay maddesini sayıyor (KRONOLOJI* ~13.7 bin dahil değil): kapsam kararı.
19. **BAYAT eşiği / 1281 "dikiş" / Hukukî-Fiilî birleştirme** eski kararlar (BORC-DEFTERI.md A bölümü).
20. **Bilgisayar kapatma** (A20): sizin doğrudan sözünüz gerekir. HAVVA'ya "kapatma, koşu devam etsin" dediniz; KASA/UMIT/LAB için karar bende değil.

## 5. YAPILAMAYAN / YARIM KALAN / HATA VEREN
- **İş KAYBI riski, giderildi:** HAVVA'da commit'siz kalan 13→18 dosya (`sehir-yakindogu-1116`) ve 4 itilmemiş yerel dal (kosu/26-hazirlik 30 commit, distracted-carson, worktree-agent-a8e9, sarmizegetusa) bugün `origin`e itildi, kayıp yok.
- **Hâlâ itilmemiş (LAB):** EczAsist `main` 2 commit (`543be15`, `c70f3ad`) + commit'siz `yedek_temizlik_ayarlari.json`; atlas'ta uzağı olmayan 17 yerel dal (`ceviri-*`, `lab19-*`, `lab21-argos-madde-1121`…) — çoğu muhtemelen main'de, doğrulanmadı.
- **Yarım:** "Kronoloji maddesi yapısı" (`onceki-sonraki-kaldir`), "Kronoloji seçim bölümü" (`kronoloji-secim-ui`), LAB 17 (askıda), EczAsist 2 oturum.
- **Hata/engel:** BAYAT eşiği 8 dalı durdurdu (giderildi, kapıda); `ceviri_dizin.js` çatışması kapıyı 7. denemede geçirdi; `not.py bekle` ağ hatasıyla çöküyor; `yerlesimler_hint_adalar.js` HAVVA ana checkout + 4 worktree'de silinmiş görünüyor (sebep doğrulanmadı).
- **Çıkmaz/kurala takılan:** makine kapatma (A20): 4 makine eş-oturum mesajıyla reddetti, doğru olarak.
- **Koşu 40 gecikmesi:** ana süreç + işçi canlı, çıktı dosyası yok, Faz 2'de bir işçi çöktü (3221225477), Ⓑ dolgu kapanışı tek çekirdekte.

## 6. OKUNAMAYAN / BULUNAMAYAN KAYNAKLAR
- **Okunmadı (denenmedi/çekilemedi):** TDV, CAH, OCD, Roller, Amyntas bölgesi, Dobruca, kuzey İspanya (Roma sınırı); CMH VII, Cambridge History of Poland, Hrushevsky, HathiTrust metinleri; Hodge (kopya bozuk), Thwaites, Hakluyt, Winsor, Bancroft; Livius/Cornell bölüm numaraları; Cambay (Britannica/Wikipedia açılamadı), Sofala (Chittick/Pearson/Britannica), Calais ilişkisi (Longnon); 7 Roma maddesi worldhistory.org kaynaklı (ikincil).
- **Bulunamadı (aranıp yok):** Zenta/Tokaj/Kanije 1280 tanığı; Pozsony/Győr/Sopron batı sınırı; 11 Kuzey Amerika halkının yerleşim noktası; Yarkent/Kopal yılı; UMIT'in ~920 noktası (yer adı ≤1280 kaynakta yok — "yoktu" demek değil), borç C55–C64.
- **Yapılmadı:** 13 dilin ana dilli okuması (20 dil + bg), Bulgarca çevirinin okuma ölçümü; Bengalce/Urduca/Farsça/Hintçe/Çince/Japonca yazı tipi CSS'i; dizine alma ölçümü.

## 7. PLANLAMA İÇİN ÖNERİ SIRASI (karar sizde)
1. **Bugün:** KASA kuyruğu erisin (eşik → uçuş ayarı → veri zincirleri); sonuçlar gelince `main` ölçülür.
2. **Bugün, sizin tek sözünüzle:** #3 (A13 pagefile), #20 (hangi makine kapansın/açık kalsın), #12 (koordinatör).
3. **Koşu 40 kararı 26.11:** bitmezse durdur/sürdür; bitince iniş zinciri → eşik 2.0 → toplu BOYA paketi → Koşu 41 isteği size gösterilir.
4. **Kaynaklı veri turu (EMRELİC/LAB/UMIT):** Roma odak/kaynak (A25), 13 ardıl çift (A23), okunmayan kaynaklar (§6) — önce paywall'sız olanlar.
5. **Küçük ürün işleri:** `onceki-sonraki-kaldir` ve `kronoloji-secim-ui` kararı, Kaynaklar sayımı, yazı tipi CSS, tarih kutusu kısaltması gibi şerit ayarları.
6. **Temizlik (A1/A5/A10):** Emre onayıyla eski dal ve worktree silme; 132 worktree.
7. **Eczane işleri (LAB):** EczAsist itmeleri, T cetveli kararları — atlastan bağımsız.

## 8. EKSİK
- KASA raporu (`denetim/RAPOR-KASA-1124.md`) kuyruk bitince gelecek.
- UMIT raporu GELDİ (dal `umit-rapor-1124`, c13de9597, `denetim/RAPOR-UMIT-1124.md`; makine açık): son 10 günde 5 UMIT oturumu (13/16/17/19/21 Kasım), hepsi idle; yarım = UMIT 13 (Sigtuna e32fc31e3 incelenmedi, emeklilik sorusu açık); itilmemiş tek commit yerel `claude/umit-17-kasim-32e632` 5f6231aea (birleştirme); Emre'den bekleyen: A1 Defender, A9 kaynak erişimleri (B9/B10/C53–C64), 5 künye/boya kararı, LAB düzeltmeleri, koordinatör bayrağı teyidi; kirli ara dosyalar: `C:\atlas`ta umit19_*.tsv, umit-1104-dadim ve umit-1113-bizans worktree'leri (silinmedi). Arşivleme yapılmadı (aday UMIT 16/17/19; UMIT 13 emin değil). Dal yalnız rapor, zincirin ucu dasya1'in üstünde: KASA indirirse zincir de girer.
- Her makinenin 13 Kasım ve öncesi oturumları bu rapora girmedi (10 gün penceresi dışı); HAVVA ~60, LAB ~55 eski oturum listeledi.
