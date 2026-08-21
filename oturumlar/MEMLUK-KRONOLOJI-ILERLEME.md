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
