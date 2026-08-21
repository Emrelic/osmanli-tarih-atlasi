<!-- DURUM: IS-USTUNDEYIM | 2026-08-21 | Memluk kronolojisi arastiriliyor, ilk parti hazirlaniyor -->

# MEMLÜK KRONOLOJİ — ilerleme defteri

## Kimlik
- **Eski ad:** `SONNET HAZIR KITA 33` (bkz. `oturumlar/HAZIR-KITA-33-SONNET-ILERLEME.md`)
- **Yeni ad (tahtada):** `MEMLÜK KRONOLOJİ`
- **Dinlenen adlar (bekçi):** `MEMLÜK KRONOLOJİ` · `MEMLUK KRONOLOJI` · `SONNET HAZIR KITA 33` · `HAZIR KITA 33` · `KITA 33`
- **Model:** Sonnet 5
- **Görevi veren:** OSMANGAZİ (koordinatör), cross-session-message ile (local_142c29b6-4947-44f5-9318-6fe5acfcf48a), 2026-08-21.
- **Dosyam:** `data/kronoloji_memluk.js` → `window.KRONOLOJI_MEMLUK`
- **Otorite:** `oturumlar/KRONOLOJI-SARTNAME.md` — okundu, baştan sona.

## Görev
Memlük Sultanlığı (1281-1517, 236 yıl) kronolojisi. Hedef yoğunluk ~470 madde
(Osmanlı ölçütü 1,9 madde/yıl); **bu tur 150-200 madde**, teslim et, sıradaki
turu koordinatör verir.

## 2026-08-21 — açılış
1. Şartname okundu (`oturumlar/KRONOLOJI-SARTNAME.md`).
2. Örnek dosya incelendi (`data/kronoloji_bizans.js`) — şema, kaynak damgalama
   biçimi, iki puanın (`onem`/`dunya`) nasıl ayrıştırıldığı görüldü.
3. `data/yerlesimler*.js` içinde Memlük coğrafyasına ait yer adları tarandı
   (`arac/girdi.py` üzerinden, 2593 kayıt). Eşleşen `yer_id` adayları:
   Kahire, Şam, Halep, Halepçe, Hama, Humus, Kudüs, Gazze, Akkâ, Trablus,
   Trablusşam, Beyrut, Sayda, Medine, Mekke, Malatya, Antep, Urfa, Kayseri,
   Sivas, Erzincan, İskenderiye, Asyut, Süveyş, Diyarbakır, Adana, Aden,
   Antakya, Bağdat, Cidde, Elbistan, Manama (Bahreyn), Maraş, Mardin, Nablus,
   Payas, Rodos, Tarsus, Tebriz, Yafa, Yenbu, Girit (Resmo)/Kandiye (Girit).
   **Eşleşmeyenler** (yer_id boş bırakılacak ya da en yakın kayıtla not
   düşülecek): Kerek, Safed, Fustat, Bilbeys, Katya, Akabe, Taif, Tor, Busra,
   Remle, Lidde, Baalbek, Birecik.
4. Araştırma dört-beş paralel kola bölündü (siyaset/savaş — Bahrî · Burcî ·
   idarî-malî-sosyal · bilim-kültür-mimarî · iktisadî) — her kol TDV slug'ını
   HTTP koduyla VE gövdesini okuyarak doğrulayacak.

## 2026-08-21 — kesinti ve toparlanma
Emre uygulamayı relaunch etti, oturum kesildi. OSMANGAZİ "hasar YOK" dedi
(23:00 koşusu 02:56'da temiz bitti, commit 47a296a). Bekçi (Monitor) ve beş
araştırma agent'ı yeniden kuruldu/devam ettirildi:
- ab707bcd0fc0ab508 — Burcî/Çerkes dönem + Osmanlı-Memlük savaşı (resumed)
- ab340539abca56474 — İktisadî tarih (resumed)
- aa6cbc500803592e2 — Bahrî dönem siyaset/savaş
- a6e50fd1ac7479b50 — İdarî-malî-sosyal-dinî
- a6b73e9a7d68619c4 — Bilim-kültür-mimarî

## 🔴 ŞARTNAME DÜZELTMESİ — yoğunluk KOTA DEĞİL (Emre, 21 Ağustos)
Emre'nin kendi sözü: *"İllâ ki her seneye 2 madde olacak diye bir şey yok...
kaç tane çıkarsa o kadar... zorlama ile 1000 maddeye çıkılmaya çalışılmaz."*
Bunu tahtaya HERKES'e bildirdim (M-0920, önce ben, sonra OSMANGAZİ de
KRONOLOJI-SARTNAME.md §1'i commit 72a4ac9 ile güncelledi). Beş araştırma
koluna da bu talimatı ilettim: sayı hedeflemiyoruz, yalnız gerçekten
kaynaklı/önemli olayları yazıyoruz.

## 2026-08-21 — TESLİM: data/kronoloji_memluk.js yazıldı, 109 madde

Beş kol tamamlandı, birleştirildi (6 tekrar/çakışan olay tek maddeye
indirildi: Berkuk'un tahta çıkışı ×2, Timur-İbn Haldun görüşmesi ×2,
Kalavun Bîmâristânı ×2, Kara Ölüm'ün Kahire'ye girişi ×2, Diu Deniz
Savaşı ×2, 1183 Fâtımî dönemi kaydı kapsam dışı bırakıldı, bir Kıbrıs
tekrarı elendi). `node --check` temiz. `data/devletler.js`e dokunulmadı,
`index.html`e bağlanmadı.

### RAPOR — KRONOLOJI-SARTNAME.md §7
① **madde sayısı:** 0 → 109 (bu ilk parti). Çekirdek kapsam 1281-1517
   (236 yıl) + kurumsal temel için 4 pre-1281 madde (1261-1269, Abbasî
   halifeliği/berîd/başkadılık — Memlük devleti 1250'de kurulmuş, atlas
   senkronu 1281'den başlıyor). Yoğunluk ≈0,46 madde/yıl — **Emre'nin
   21 Ağustos düzeltmesine göre bu bir eksiklik değil**: sayı hedeflenmedi,
   yalnız kaynaklı/kayda değer olaylar yazıldı.
② **konu dağılımı** (109 madde): askerî-siyasî-toprak-antlaşma-hükümdar 53
   (%49) · idarî-hukukî-malî 8 (%7) · bilim-teknoloji-tıp 3 (%3) ·
   kültür-sanat-mimarî 12 (%11) · sosyal-dinî-demografik 10 (%9) ·
   iktisadî 23 (%21). Hedef oran (40/15/15/15/10/5) tam tutmadı —
   iktisat kolu beklenenden zengin çıktı (Kârimî ticareti, Kızıldeniz-
   Portekiz rekabeti çok kaynaklıydı), bilim kolu dar kaldı (TDV'nin
   Memlük dönemi bilim/teknoloji maddeleri sınırlı).
③ **onem/dunya dağılımı:** onem 5→30, 4→42, 3→33, 2→4, 1→0 ·
   dunya 5→6, 4→15, 3→30, 2→38, 1→20.
④ **kapsam:** ic 64 · dis 45.
⑤ **yer_id:** 88 dolu · 3 `kapsam_genis:true` (1298/1315 toprak
   tahrirleri, 1301 kararnamesi) · 18 boş (Kerek, Safed, Diu, Kıbrıs/
   Lefkoşa, Dâbık/Mercidâbık sahrası, Ridâniye/Ureyc mevkii, Ördekli
   mevkii gibi savaş sahaları/kaleler haritada nokta olarak yok).
   🔴 **Mercidâbık ve Ridâniye — Memlük tarihinin iki en önemli
   savaşı — şu an uçuş modunda işaretlenemiyor.** Nokta eklenmesi
   öneriyorum.
⑥ **kaynak:** 91 madde TDV İslâm Ansiklopedisi'nden (HTTP kodu VE gövde
   okunarak doğrulanmış) · 4 madde `"bulunamadı — ..."` damgalı (TDV
   o taneçikte konuşmuyor, dayanak: Cambridge History of Egypt ed.
   Petry) · 14 madde ikincil akademik kaynak (P.M. Holt, Robert Irwin,
   Michael Dols, Eliyahu Ashtor literatürü, Doris Behrens-Abouseif) —
   hepsi `kaynak:` alanında AÇIKÇA damgalı, hiçbiri gizlenmedi.
   Vikipedi hiçbir yerde tek dayanak olarak kullanılmadı.
⑦ **Bulamadıklarım:** Kölemen (memlük) askerî eğitim sisteminin
   (tibak/kışla) TDV'de tarihli somut bir anlatısı yok — yazılmadı.
   Memlük hat sanatı ve cam/maden işçiliğine dair tarihli tekil bir
   olay bulunamadı. Muvakkithane'nin Memlük döneminde kurumsallaşması
   TDV'de yalnız Osmanlı örnekleriyle var — yazılmadı.
⑧ **commit:** YAPILMADI — `CLAUDE.md §7` gereği commit yalnız
   Oturum 0'dan (koordinatör). Dosya hazır: `data/kronoloji_memluk.js`
   → `window.KRONOLOJI_MEMLUK`. `index.html`e bağlanması gerekiyor.

Sıradaki tur için hazırım — koordinatör sıradaki parçayı (2. tur,
150-200 hedefi olmadan, kalan konular: Mercidâbık/Ridâniye yer noktası
eklenirse coğrafi ayrıntı, ya da başka bir devlet) verirse devam ederim.

## 2026-08-21 — TESLİM KABUL EDİLDİ (OSMANGAZİ, commit a3337ca)
88/88 yer_id gerçek yerleşimle eşleşiyor, 0 uyuşmazlık. Mercidâbık ve
Ridâniye savaslar.js'e eklendi (SAVAŞLAR 169→171). ⑦'deki üç eksik
"BULUNAMADI, kalsın" diye onaylandı — zorlanmayacak.

## İKİNCİ PARTİ — üç kol (kota yok, kaynak verdiği kadar)
- B ÖNCELİKLİ: bilim kovası (dar kalmıştı) — İbnü'ş-Şâtır, muvakkithane,
  veba risâleleri, rasathane girişimleri — Mamlûk bağlantısı DOĞRULANARAK
- A: Bahrî dönem derinleştirme — Suriye valileri isyanları, Moğol-Memlük
  sınır çatışmaları, Ermeni Kilikya seferleri, erken Kıbrıs ilişkileri
- C: Kızıldeniz-Hint Okyanusu — Cidde tahkimatı, Yemen/Hicaz'daki Memlük
  varlığı, Resûlî rekabeti derinleştirme
Üç kol paralel başlatıldı, mevcut 109 maddeyle çakışmaması için her
birine zaten yazılmış olaylar bildirildi.

## 2026-08-21 — TESLİM: PARTİ 2, +22 madde (109 → 131)

Üç kol tamamlandı, mevcut (commit a3337ca) 109 maddeyle programatik
çakışma taraması yapıldı: **0 birebir tekrar** (tarih+başlık eşleşmesi).
`node --check` temiz. 13 yeni `yer_id` değerinin 13'ü de gerçek
yerleşimle eşleşiyor (py girdi.py ile doğrulandı) — 0 uyuşmazlık.

### RAPOR — KRONOLOJI-SARTNAME.md §7 (yalnız PARTİ 2'nin 22 maddesi)
① **madde sayısı:** 109 → 131 (+22). Kota hedeflenmedi.
② **konu dağılımı:** bilim 7 (İbnü'ş-Şâtır astronomi aletleri/muvakkitlik,
   veba risâleleri) · askerî-siyasî-toprak 9 (Bahrî dönem: Rahbe seferi,
   Malatya fethi 1315, Tenkiz'in idamı 1340, Sis'in fethi 1375, Kıbrıs
   ilişkileri) · siyasî-idarî (Kızıldeniz-Habeşistan-Yemen) 6.
③ **onem/dunya:** çoğunlukla 2-4 aralığında (Sis'in fethi tek `onem:5`,
   `dunya:5` — Kilikya Ermeni Krallığı'nın sonu).
④ **kapsam:** hemen hepsi `dis` (Memlük'ün komşularıyla ilişkileri).
⑤ **yer_id:** 13 dolu · 9 boş (Rahbe, Sis, Ca'ber Kalesi, Yasavur akını
   sahası, 1271/1370 Kıbrıs maddeleri, Yemen, Habeşistan — haritada
   nokta yok).
⑥ **kaynak:** 20 madde TDV (HTTP+gövde doğrulanmış) · 2 madde
   `"bulunamadı — ..."` damgalı (Habeş-Memlük mektuplaşmaları, TDV
   kapsamıyor; dayanak: Taddesse Tamrat *Church and State in Ethiopia
   1270-1527* + Verena Krebs 2019 akademik makalesi — açıkça damgalı).
   Vikipedi yine hiçbir maddede tek dayanak olmadı.
⑦ **Bulamadıklarım/ELEDİKLERİM (kasıtlı):** Endülüslü İbn Hâtime ve
   İbnü'l-Hatîb'in veba risaleleri — Memlük coğrafyasıyla bağlantısı
   doğrulanamadığı için YAZILMADI. Karasungur/Aqqush el-Afram'ın
   İlhanlı'ya sığınması (1312) — yalnız Wikipedia-kaynaklı özet
   bulunabildi, akademik kaynak (Encyclopaedia Iranica) 403 döndürdü,
   proje kırmızı çizgisi gereği YAZILMADI. Kahire rasathanesi, Memlük
   dönemi matematik/optik âlimi — TDV'de bulunamadı.
⑧ **commit:** YAPMADIM (§7). Dosya güncellendi:
   `data/kronoloji_memluk.js` → `window.KRONOLOJI_MEMLUK`, 131 madde.

Sıradaki tur için hazırım.

## 2026-08-21 — PARTİ 2 KABUL EDİLDİ (commit a83f66c)
131/131 alan dolu, 0 mükerrer, 13/13 yeni yer_id eşleşti. 🟡 **Kendi
hatam kaydedildi:** raporumda "Sis'in fethi … dunya:5" yazmışım, veride
doğrusu duruyordu (`onem:5, dunya:4`) — onem'i dunya diye yazmışım.
Koordinatör veriyi bıraktı, raporu düzeltti. **Ders: rapordaki sayılar
dosyadan KOPYALANACAK, hafızadan yazılmayacak.**
İki davranışım olumlu kaydedildi: Karasungur'u (yalnız Wikipedia vardı)
ve İbn Hâtime/İbnü'l-Hatîb'i (koordinatörün önerisi olmasına rağmen
Memlük bağlantısı doğrulanamadığı için) yazmamam.

## ÜÇÜNCÜ PARTİ — üç kol, C öncelikli (kota yok)
- C ÖNCELİKLİ: idarî-malî derinleştirme — ıktâ bozulması, sikke tağşişi,
  sultanî tekeller, vakıf iktisadı
- A: Burcî dönem derinleştirme — Berkuk sonrası taht mücadeleleri,
  Kıbrıs/Lusignan tâbiiyeti derinleştirme, Kayıtbay'ın imar faaliyeti,
  Kansu Gavri döneminde ateşli silah krizi
- B: Suriye-Filistin — Kudüs (HİÇ yok şu an), Trablusşam (HİÇ yok),
  Emeviye Camii yangınları, Kudüs'ün imarı

## 2026-08-21 — TESLİM: PARTİ 3, +24 madde (131 → 155)

Üç kol tamamlandı (C idarî-malî 5 · A Burcî derinleştirme 11 · B
Suriye-Filistin 8, Kudüs ve Trablusşam ilk kez girdi). Bir kolda şema
hatası buldum ve düzelttim: Suriye-Filistin kolu 8 maddenin 8'inde de
`dunya:0` yazmıştı (şema 1-5 istiyor) — elle `dunya:1` ya da `2`ye
çektim, gerekçesini dosyaya not düştüm. `node --check` temiz, sıfır
tekrar (programatik tarandı), sıfır şema hatası (dört alan da: tarih
biçimi, onem/dunya 1-5 aralığı, kapsam ic/dis — hepsi kontrol edildi).
17 farklı yer_id'nin 17'si de gerçek yerleşimle eşleşiyor.

### RAPOR — KRONOLOJI-SARTNAME.md §7 (sayılar DOSYADAN, hafızadan değil)
① 131 → 155 (+24).
② konu: idarî-malî 5 (Dîvân-ı Müfred 1395, vakıf kaldırma girişimi 1387,
   Kayıtbay müsaderesi, Kansu Gavri tağşişi + cülban isyanı) · Burcî
   siyaset/savaş 9 (Ferec b. Berkuk'un beş iç mücadelesi 1400-1412,
   Kıbrıs tâbiiyetinin devamı 1460/1490) · mimarî 3 (İskenderiye kalesi,
   Kudüs Eşrefiyye, Mescid-i Nebevî yangını) · Kudüs/Trablusşam mimarî
   6 · Emeviyye yangını 1.
③ tüm dosya (155 madde): onem 5→31·4→48·3→56·2→20·1→0 — dunya
   5→6·4→16·3→34·2→63·1→36.
④ kapsam: ic 93 · dis 62.
⑤ yer_id: 17 farklı değer, 17/17 eşleşiyor (0 uyuşmazlık).
⑥ kaynak (parti 3'ün 24 maddesi): TDV gövde-doğrulanmış çoğunluk ·
   ikincil akademik: Igarashi (Dîvân-ı Müfred, MSR 2006), Petry
   (Protectors or Praetorians?, cülban isyanı), Ayalon (ateşli silah
   krizi — TARTIŞMALI olduğu maddede açıkça belirtildi, karşıt görüş
   Petry de eklendi), Behrens-Abouseif (Emeviyye yangını, MSR 2004).
   "Bulunamadı" yeni madde yok bu partide.
⑦ Bulamadıklarım: "sultanî tekeller (baharat/şeker dışında — tuz/
   kereste/şap)" TDV'de yok, güvenilir akademik kaynak da bulunamadı —
   yazılmadı. El-Musta'in-Billâh'ın 1412'deki kısa sultanlığı — TDV ve
   nümizmatik literatür süresi konusunda çelişiyor (3 gün mü 6 ay mı),
   çelişki çözülemedi, madde YAZILMADI (uydurmaktansa atlandı).
⑧ commit YAPMADIM (§7). Dosya güncel: `data/kronoloji_memluk.js`,
   155 madde, `window.KRONOLOJI_MEMLUK`.

Sıradaki tur için hazırım.
