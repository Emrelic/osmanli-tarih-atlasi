# KITA 24 — GÖRSEL BORU HATTI + PAŞA PORTRELERİ (pilot) · paket 0045 H-0004 · H-0005

AD: KITA 24 · DİZİN: proje kökü · ClaudEmre: evet
**Önce:** `CLAUDE.md` baştan sona (özellikle §1.6 görsel kırmızı çizgisi) ·
`oturumlar/ORTAK-KOSU10-KURALLARI.md` · `oturumlar/ORTAK-0045-ICERIK-PROGRAMI.md` ·
`denetim/ONERI-GORSEL-0907.md`
**Dosyaların:** `data/gorsel_madde.js` (`window.GORSEL_MADDE`) · `denetim/`

Emre: H-0004 *"kronoloji maddelerinde bahsedilen sadrazam ve paşaların resmi
varsa madde içeriğine koyalım"* · H-0005 *"kronoloji maddelerinin içeriği ile
ilgili görselleri araştırıp madde içeriğine koyalım."*

## 🔑 SEN GÖRSELİN SAHİBİSİN — üç pilot da (KITA 22 albüm · KITA 23 mimari) senin biçimine uyacak
① **Şema:** `denetim/ONERI-GORSEL-0907.md`i oku ve kesinleştir. Görsel maddeye
   NASIL bağlanır — madde dosyalarına (`olaylar*` KITA 14'ün, DOKUNMA) alan eklemeden,
   ayrı `data/gorsel_madde.js` içinde `olay:` anahtarıyla. Alanlar en az:
   `url · baslik · lisans · gorsel_kaynak (dosya sayfası) · eser/sanatçı/yıl ·
   olay[] · kesinlik`. **Şemayı tahtaya HERKES'e yaz** — KITA 22 ve 23 bekliyor.
② **Lisans sınavı:** yalnız kamu malı / CC0 (CC-BY-SA DEĞİL). Wikimedia Commons
   dosya sayfasındaki lisans şablonunu OKU. Bir kontrol betiği yaz
   (`denetim/ARAC-GORSEL-LISANS-0913.py`) — URL listesi alır, lisansı okur,
   uymayanı ELER ve SAYAR (sessizce atlama yok).
③ **Pilot paşa portreleri:** Sokullu Mehmed · Barbaros Hayreddin · Pargalı İbrahim ·
   Köprülü Mehmed · Merzifonlu Kara Mustafa. Gerçek dönem portresi yoksa
   `bulunamadı` — 19. yy hayalî tasviri "portre" diye KONMAZ; konursa
   `kesinlik:"temsilî — dönem sonrası tasvir"` açıkça yazılır.
④ **Pilot madde görselleri:** 5 çekirdek madde (İstanbul'un fethi · Preveze ·
   Viyana 1683 · Lâle Devri · Tanzimat Fermanı) — dönem minyatürü/gravür.
⑤ **Yükleyici:** app.js görseli nerede gösterebilir (`ob-gorsel` app.js:6392 bir
   kart görseli — ölç). Gereken satırı KITA 12'ye tahtadan iste.
⚠️ `url` dış bağlantıysa kırılır; `assets/`e indirmek boyut ister — ikisini
   fiyatla, öner, KARAR VERME. Teslim tahtaya.
