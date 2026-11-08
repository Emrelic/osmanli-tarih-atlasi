# YERLEŞİM × KRONOLOJİ × SAHNE — SALT ÖLÇÜM (8 Kasım 2026)

**Ne:** Emre'nin 8 Kasım isteği (kronoloji maddesinin andığı her yer o tarihte haritada olmalı; ad değişimi kimliği bozmamalı; künye kuruluşunda yerleşimi olmalı; seyreklik; 4 yerleşim tipi) için 6 ölçüm.
**Ölçüm kaynağı:** `origin/main` @ `cf3aa1f39` el yazısı veri — `arac/girdi_listesi.py` 123 dosya → **5.515 yerleşim**; `data/olaylar*.js` + `data/kronoloji*.js` → **18.004 madde**. `denetle.py` ÇALIŞTIRILMADI; dosyalar `vm` ile doğrudan okundu. Hiçbir veri/motor/tuz dosyasına yazılmadı.
**Yeniden çalıştırma:** `node onbellek.js <veri.json>` sonra `node olc_1_2.js|olc_1b.js|olc_3_4.js|olc_4b.js|olc_6.js <veri.json> cikti` ve `py -I olc_5.py <veri.json> cikti ../../veri-kaynak` (hepsi bu dizinde, tümü ~1 dk). Çıktılar `cikti/`.

---
## ① MADDE → YERLEŞİM
- Yer bilgisi olan madde (`yer_id` ∨ `yer_kon` ∨ `odak_yer`): **17.685 / 18.004 = %98,2**; hiç yok **319 (%1,8)**.
- Tek tek: `yer_id` **12.368 (%68,7)** *(görev metnindeki ≈14.281 ile uyuşmadı; ölçülen bu)* · `yer_kon` 1.226 (%6,8) · `odak_yer` 4.773 (%26,5) · `yer` metni 8.374 (%46,5).
- `yer_id` → atlas yerleşim adı (uygulamanın `adKonumBul` kuralı: birebir ya da " (" öncesi): **12.336 eşleşir (%99,74)**; eşleşmeyen **32 madde / 11 ad**, hepsi Polonya–Ukrayna–Beyaz Rusya sınır kronolojileri: Brest-Litovsk 9, Chełm (Kholm) 5, Grodno 3, Białystok 3, Zamość 3, Lublin 2, Lutsk 2, Włodzimierz 2, Bolgrad, Kahul, Rivne. `odak_yer`: 6.336 ad atıfından 2 çözülemez.
- `yer` metni dolu ama `yer_id` boş: **3.317 madde** *(≈3.700 değil)*; 2.859'u 1281 öncesi. Jeton ayrıştırmasıyla: hepsi atlasta **1.343 (%40,5)**, kısmen 273, **hiçbiri atlasta değil 1.691 (%51,0)**. Benzersiz jeton 2.434: atlasta var 719, **yok 1.715**.
- **EKSİK YERLEŞİM ADAY LİSTESİ:** `cikti/m1_EKSIK_YERLESIM_ADAY.tsv` (ad · madde sayısı · ilk tarih · dosya; ilk 1.500). Eşik: ≥2 madde 360 ad · ≥3 127 · ≥5 40. En çok: Ötüken 24, Medâin 18, Tuna 13, Horasan 13, Taberistan 13, Addis Ababa 9, Heian-kyō 9, Tiran 8, Champa 8, Kannauj 8, Wessex 8, Kent 7, Mercia 7, Ekbatana 7, Budapeşte 6, Eflak 6.
- ⚠️ Liste **ham**: bölge/nehir/hanedan (Tuna, Horasan, Wessex, Anadolu) ile gerçek yerleşimi ayırmaz; ayrıca **ad varyantı** kaçakları var (Budapeşte↔Budin, Addis Ababa↔Addis, Medâin↔Ktesiphon olabilir) — bunlar "eksik yerleşim" değil ⑥'nın alias sorunu. Elle ayıklama şart.

## ② SAHNEYE ÇIKIŞ (`yer_id` eşleşen 12.336 madde, maddenin `t` günü)
- Yerleşim o gün **sahnede** (kur ≤ t ∧ s/d/v dönemi kapsıyor ∧ `__BOSLUK__` değil): **11.085 = %89,9**. **Sahneye çıkmamış: 1.251 = %10,1.**
- Döküm: ilk dönemden ÖNCE **547** · `__BOSLUK__` sahipsiz **416** · `kur` sonrası (madde kurdan önce) **115** · hiç dönemi yok 66 · son dönem bitişinden sonra 17 · dönemler arası boşluk 2 · **son dönemin bitiş günü 88** (t dışlayıcı; terk/kayıp maddeleri — büyük olasılıkla meşru).
- 1281–1923 arasında yalnız **129** ihlal; gerisi antik/ortaçağ (kron. `ms1_1000_ortadogu` 124, `olaylar_ortacag_bekleyen_acik` 72, `ms1_1000_iber_balkan` 56, `ortacag_italya_dogu_avrupa` 38, `antik_yakin_dogu` 34). Yerleşim dosyası: `yerlesimler.js` 435, `once1281_yt_avrupa` 53, `asya` 43, `avrupa` 40, `h2_kuzeyafrika` 35.
- Örnekler (`cikti/m2_ihlaller.tsv`, 1.251 satır): **Malatya** maddeleri 1315/1322/1338 — `kur:"1838"` (yanlış/modern kuruluş); Balıkesir 1297 (kur 1333); Van 1375 (kur 1918); Palermo 1282, Padova 1318, Lucca 1328, Ahlat 1340 — `__BOSLUK__` ya da dönem dışı; Uruk MÖ 3349 (ilk dönem MÖ 2323); Memphis MÖ 2699 (ilk dönem MÖ 524); Susa MÖ 2299; Dâmgan MÖ 3921.
- **Bulgu:** `kur` alanı yalnız 1.998/5.515 yerleşimde dolu ve bazen şehrin *modern* kuruluşunu taşıyor (Malatya, Van) → sahneyi geç açıyor. 576 yerleşimin hiç dönemi yok (239 şehir, 194 bölge, 84 harabe, 19 kale).
- Kapsam dışı: `fethedilen:[]` ve `yer` metni yerleşim atıfları bu oranda yok (yalnız `yer_id`).

## ③ KADEME (`k`) ve BAĞLI YERLEŞİM (`m`)
- `k`: 0 → 1.907 (%34,6) · 1 → 389 (%7,1) · 2 → 259 (%4,7) · 3 → 1.452 (%26,3) · 4 → 759 (%13,8) · **alan yok 749 (%13,6)**. `k=0` çoğu yabancı şehir (1.215) + harabe (112) + bölge dolgusu (292).
- `m` dolu **867**: k=4'ün **583/759 (%76,8)**'ü, k=3'ün 277/1.452 (%19,1)'i; **866/867 merkez adına çözülür** (çözülemeyen: "Üsküb"); kendine bağ 0, döngü 0. Merkezlerin `k`'si: k2 **719**, k1 110, k3 33, k4 4.
- **Tip1'i (başkent) işaretleyen yerleşim alanı YOK.** Tek iz `devletler.js baskent` (serbest metin, 2.179/2.266 dolu, 1.569 benzersiz ad; "Tebriz → Kazvin → İsfahan", "—" ×52 gibi). Atlasta bulunan 893 başkent adının `k`'si: **k0 393 (%44)**, k1 150, k2 102, k3 174, k4 26 → `k` Osmanlı-merkezli, yabancı başkent genellikle k=0. 676 başkent adı atlasta yok.
- `yer_kat.js` (547 tanık) ile `k` uyuşmuyor: kat2 (eyalet) → k0 57 · k1 38 · k2 44 · k3 55 · k4 11; kat3 (sancak) → k0 54 · k1 6 · k2 16 · k3 140 · k4 58. ⇒ `k` tek başına Emre'nin 4 tipi değil.
- **Eşleme ÖNERİSİ (onay bekler; yeni türetilmiş `tip`):** tip1 = `devletler.baskent` kümesi ∪ yer_kat kat1 · tip2 = yer_kat kat2 ∪ (Osmanlı için k1) · tip3 = yer_kat kat3 ∪ k2 ∪ (m'siz k3) · tip4 = `m` dolu (867; ayrıca m'siz k=4: 176 yerleşim merkez aranacak). Alan açılmadan önce motor tuzu etkisi (`girdi.py BILINEN_ALANLAR`) HAVVA planına girmeli.
- **Birlikte el değiştirme (866 çiftin tamamı):** çocuğun 7.460 kırılma gününden **4.864 (%65,2)** merkezin bir kırılmasının ±30 gün içinde; çocuğun kırılma gününde ikisinin de sahibi varken aynı sahip **4.432/6.230 (%71,1)**. **300 çift örneği** (`m3_bagli_300cift.tsv`; k≥3, ≥2 kırılma): 1.751/2.590 (%67,6) · aynı sahip 1.587/2.162 (%73,4) · tamamen uyumlu çift 113 (%37,7). Fark örnekleri: Adranos↔Bursa 1323 (bizans≠osmanlı), Akşehir↔Konya 1297 (hamid≠selçuklu), Akkirman↔Silistre 1359. Sınır: sahip eşitliği dize karşılaştırması (`d:` Osmanlı ↔ `s:osmanli` farkı yanlış negatif verebilir).
- `tur:"bolge"`: **309** (%5,6); 194 dönemsiz dolgu, 115 dönemli. "Noktasız bölge en yakın peteğe emilir" kuralı kodda; emilimin gerçek çıktısı **ÖLÇÜLEMEDİ** (motor/koşu çıktısı gerekir). Veride k1-3'ün "kendi bölgesi" ayrıca işaretli değil (her sahipli yerleşimin peteği olması motorun yapısı).

## ④ KÜNYE KURULUŞU (2.266 künye; `harita:` boya takma adları sayıldı)
- **Hiçbir yerleşimde `d:/s:/isg` ile geçmeyen: 551 (%24,3)** — ufuk içi (f ≤ 1923-10-29) 517. **Kuruluş gününde (f) yerleşimi olmayan: 914 (%40,3)**, ufuk içi 870. Yerleşimi f gününde olan 1.352 (%59,7).
- Ufuk içi 517'nin türü: krallık 128 · hanedanlık 45 · devlet 41 · sömürge 34 · emirlik 28 · konfederasyon 21 · prenslik/beylik 22 · kültür 9 …
- **İlk 30 (süreye göre; tam liste `m4_kunye_yerlesimsiz.tsv`):** ubaid-kultur, fayum-neolitik, shangshan, gojoseon, peiligang, anuradhapura, kutai-martapura, dubrovnik, pre-kerma, dogu-ganga, badusbani, iberya-kartli, fenike-sehirleri, halin, kamarupa, bosporos-krallik, trento-piskoposlugu, hadramavt, moravya-markgraflik, moab, lubeck-sehri, montferrat-markizligi, ebla-orta-tunc, hivite-afrigid, saba, franche-comte, tripura-manikya, sakiz-polis, maya-klasik, tiwanaku.
- **Önemli:** yerleşimsiz 517 künyenin 470'inde `baskent` yazılı; bunların **276'sının başkent adı atlasta birebir VAR** ama künyeye bağlı değil (79'u hiç dönemsiz, 197'si başka devlete bağlı: Dubrovnik→venedik, Lübeck→almanya, Trento→almanya, Anuradhapura dönemsiz). Yani çoğu "yerleşim ekle" değil **"mevcut yerleşime dönem/künye bağla"** işi (`m4b_*.tsv`); ~194 başkent atlasta yok (ekleme).
- Tersi: yerleşimlerde künyesiz tek kimlik `__BOSLUK__` (687 dönem) — tasarım gereği.

## ⑤ SEYREKLİK (2°×2°, kara ≥%50: 5.367 hücre)
- **Önceki iş:** `denetim/SEYREKLIK-DUNYA-0905.json` — 1° kara hücresi, en yakın yerleşime km, 3.805 nokta, tek (zamansız) kesit, elle bölge kutuları. `_seyreklik_ham.json` **bulunamadı**. **Fark:** burada zaman kesiti (1000/1500/1800/1900; sahnede = var ∧ gerçek sahipli), hücre sayımı, komşu-göreli ölçüt.
- Sahnedeki yerleşim: 1000 → 428 · 1500 → 2.772 · 1800 → 3.627 · 1900 → 4.377. Boş kara hücresi: %95,8 · %83,6 · %74,9 · %67,5 (enlem −58…70: %93,6 · %75,1 · %62,0 · %50,7).
- "Anlamsız seyreklik" (komşu ort. ≥3 iken hücre ≤ %20'si; en çok 16 hücre çıktı, 30 yok): 1000 → 1 · 1500 → 12 · 1800 → 16 · 1900 → 16; **3 kesitte kronik 10, 4'ünde 0**. 1500: Etiyopya 12N40E · Mısır 28N28E (Batı Çölü: muhtemelen meşru) · Meksika 16N−100 · G.Kore 36N128E · Sudan 12N34E · Fas 32N−4E · **İspanya 38N−4E** (Sierra Morena–La Mancha) · **Türkiye 38N32E (yalnız Ankara; komşu ort. 8,2)** · Eritre 16N38E · **Fransa 46N4E (Burgundy)** · Suriye 34N40E (çöl) · **Romanya 46N24E (Transilvanya, 1 yerleşim)**. Tam liste `m5_seyrek_*.tsv`.
- ÖLÇEMEDİM: çöl/dağ maskesi yok (Mısır, Suriye hücreleri elle elenmeli); 2° ≈ 220×170 km — mutlak yoğunluk düşük olduğu için ölçüt göreli.

## ⑥ AD BAĞIMSIZLIĞI
- **Mekanizma:** yerleşimde alias/kimlik alanı **YOK** (tek `ad`, benzersiz: tekrar 0). Madde bağı `yer_id` = ada **birebir** (12.279) ya da " (" öncesi (57, %0,5); koordinatla bağ yok. `yer_kon` varsa `olayKonumu` onu önce okur — `yer_id`+`yer_kon` birlikte 341 madde, 338'i ≤50 km uyumlu (Benevento 462 km, Viyana 212 km, Oslo 53 km uyumsuz). `ad_esanlam.js` yalnız 25 çift, **araç girdisi (tarayıcıya gitmez)**; `kimlikler.js` ölü.
- **≤1 km farklı adlı kayıt: 12 çift** (≤3 km: 24 — "3 km içinde ikinci nokta açma" kuralına aykırı): aynı yer iki ad — Vostitsa (Aigion)⇄Aigion, Kalavrita⇄Kalavryta, Port Vila⇄Port Vila (Efate; dönemler çakışır), Dimitrofça⇄Sirmium (0,36 km), Belgrad⇄Belgrad Kalesi (dönem çakışır); bölge/üst-ad çiftleri: Lusitania⇄Baetica, Kurtuba⇄Endülüs, Kayrevan⇄İfrîkıye.
- **Kopma riski:** 1.902 yerleşim (%34,5) parantezli ad (87'si çok dilli: "Kaohsiung (Takao / Dagou)"); parantezli yerleşimlere **4.023 madde/m bağı** (3.408 tam adla, 615 kısa adla). Ad yeniden yazılırsa tam adla bağlı 3.408 bağ sessizce kopar (`yer_id` bulunmayınca kamera/işaret yok, hata da yok). En çok atıf alan: İstanbul 610, Kahire 289, Paris 195, Tebriz 184, Londra 181, Xi'an (Chang'an) 171, Bağdat 154 …; ≥10 atıflı 436 yerleşim.
- **Belirsizlik:** 67 kısa ad birden çok kayda/başka kaydın tam adına çakışır (Yenişehir→Bursa/Larissa, Akhisar, Bar, Tuzla, Kiş); uygulama *ilk eşleşeni* alır. Bugün hiçbir `yer_id` bu belirsiz adı kullanmıyor (ölçüldü: 0) — güvenli ama kırılgan. Normalleşince aynı ama >50 km uzakta ad: 61 (Kudüs/Kudus, Roma/Roma (Queensland)) — normalleştirmeli eşleme araçları için tuzak.

---
## ÖLÇEMEDİKLERİM
1. Motor çıktısı (petek, bölge emilimi, haritadaki gerçek görünüm) — koşu çıktısı gerekir.
2. `fethedilen:`, `kisiler`, başlıktaki yer adları — yalnız `yer_id/yer_kon/odak_yer/yer` ölçüldü.
3. `yer` metni ayrıştırması sezgisel (virgül/ve/parantez); bölge–yerleşim ayrımı yok.
4. Çöl/dağ maskesi; sahip eşitliğinde `d:`↔`s:osmanli` normalleştirmesi; `kur`'suz yerleşimin "var" sayılması (1000 kesitinde 2.977 "var ama sahnesiz").
5. Gerçek "ihlal" mi "meşru boşluk" mu hükmü (özellikle 88 sınır-günü, 416 `__BOSLUK__`).

## ÖNERİLEN SONRAKİ ADIMLAR (sırayla)
1. **`kur` hijyeni + sahne açılışı:** 115 `kur_oncesi` (Malatya/Van/Balıkesir…) ve 547 `ilk_donem_oncesi` yerleşimini madde-gün önceliğiyle düzelt (veri işi, motor tuzuna dokunmaz; ~129 kaydı 1281–1923 aralığında → önce bunlar).
2. **Eksik yerleşim ayıklaması:** 11 eşleşmeyen `yer_id` adı + `m1_EKSIK_…` ilk 127 (≥3 madde) ad → {gerçek yerleşim / bölge / alias} diye üçe böl; yalnız ilkini ekle (Boşluk merdiveni + kaynak kuralı).
3. **Künye–başkent bağı:** 276 künye, başkent adı atlasta var → `s:` dönemi ekle/bağla; ~194 başkent yerleşimi ekle. (Doğrudan "künye f gününde sahne" boşluğunu kapatır.)
4. **Ad bağımsızlığı tasarımı:** alias/kimlik alanı (örn. `alt:[]`) + `yer_id`'nin koordinat/kimlik yedeği; önce çözüm-yolu denetimi (`yer_id` kırılırsa `denetle` uyarsın), alan eklemek motor tuzunu değiştirir → HAVVA koşu planına bağla. Aynı anda 24 adet ≤3 km çifti birleştir.
5. **`tip` türetimi (onay):** yukarıdaki eşleme; önce yalnız rapor (hesaplanmış sütun), sonra veri.
6. **Seyreklik:** 16 hücreyi elle ayıkla (çöl hariç): Ankara hücresi, Burgundy, Transilvanya, Sierra Morena, Etiyopya yaylası öncelikli.
7. Bu betikleri `denetle` yan çıktısına değil, ayrı salt-okur ölçüm olarak ayda bir koştur (tavan koyma, tavan onaylama önerisi yok).
