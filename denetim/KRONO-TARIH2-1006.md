# KRONO-TARIH2-1006 — 2. tarih turu: Potop · Mora · Halep (D2d) + Hanya bölünmesi (UMIT-W28)

**Temel commit: `78945582`** (atlas-umit HEAD, ölçüm anı). Hedef dosyaların hiçbiri `ee415f4e` → `78945582` arasında
değişmedi; mevcut zincir (D1 → D2 → D2b → D2c → D3b) bu commit'in üstüne `--check` ✓ ile sırayla oturdu ve yeni iki
diff onun ÜSTÜNE üretildi. Çalışma yeri: ayrı worktree (scratchpad `w28b`). `data/`'ya yazılmadı.

## 0. Zincir sırası — koordinatörün önerdiği sıra DEĞİŞTİ (gerekçe)
Önerilen: `… → 1006c → 1006d → MUKERRER-SIL-1006b`. **Uygulanan: `… → 1006c → MUKERRER-SIL-1006b → 1006d → HANYA-BOL`.**
Sebep ÇAKIŞMA: 1006d Halep maddesinin `t:` satırını (`kronoloji_timurlu.js:85`) değiştiriyor; MUKERRER-SIL-1006b aynı
maddenin `kaynak:` satırına (:88) iz notu yazıyor ve diff bağlamı 3 satır — 1006d önce girerse zaten commitli
MUKERRER-SIL-1006b uygulanamaz, onu yeniden üretmek gerekirdi. 1006d'yi SONA almak commitli diff'e dokunmuyor.
Potop ve Mora'nın künye maddeleri MUKERRER-SIL-1006b'nin silme listesinde YOK; Halep'in künye maddesi orada siliniyor,
bu yüzden 1006d Halep'te yalnız dosya maddesini değiştirir. Hanya bölünmesi en sonda (yapısal, ayrı diff).

| sıra | diff | `--check` (önceki adımın üstüne) |
|---|---|---|
| 1-5 | SAHTE-ALINTI · TARIH · TARIH-b · TARIH-c · MUKERRER-SIL-1006b | ✓ (commitli zincir) |
| 6 | **`KRONO-TARIH-1006d.diff`** — 74 satır · devletler.js CR 16 · lehistan/timurlu/venedik CR 0 | ✓ |
| 7 | **`KRONO-HANYA-BOL-1006.diff`** — 23 satır · venedik CR 0 | ✓ |
Yedisi `78945582` üstüne sırayla uygulanınca sonuç worktree'yle birebir. Teslim anındaki HEAD `c57b59bc`; hedef dosyalar
`78945582` → `c57b59bc` arasında değişmedi. Her iki yeni diff'in başında Değişmez 2 önce/sonra sayısı yazılı (başlık
metni `git apply` tarafından yok sayılır; başlıklı hâliyle yeniden sınandı ✓).

## 1. D2d — her tarih kaynak cümlesiyle (§4 ⑧)
| kalem | dosya:satır (`78945582` + zincir) | eski → yeni | kaynak | cümle | cümle neyi tarihliyor |
|---|---|---|---|---|---|
| Potop | `kronoloji_lehistan.js:293` (F) · `devletler.js:728` (K) | F 1655-07-25 → **07-21** · K 07-01 → **07-21** | Muzeum Historii Polski, kalendarium "Początek potopu szwedzkiego" | "21 lipca 1655 r. na ziemie Rzeczypospolitej wkroczyła z Pomorza Szczecińskiego armia szwedzka" | İsveç ordusunun Rzeczpospolita topraklarına GİRİŞİ — maddenin olayı ("Tufan başladı") budur |
| Mora | `kronoloji_venedik.js:481` (F) · `devletler.js:369` (K) | F 1715-07-01 → **09-07** · K 06-25 → **09-07** | Sarıkaya & Göger, Tarih Dergisi 67 (2018) | "Benefşe de 7 Eylül’de teslim oldu." + ardından "Böylece Mora’daki Osmanlı hâkimiyeti yeniden tesis edildi…" | son kalenin teslimi; makale yeniden hâkimiyeti BU teslimden sonraki cümleye bağlıyor |
| Halep | `kronoloji_timurlu.js:85` (F; künye maddesi MUKERRER-SIL-1006b'de siliniyor) | 1400-10-01 → **10-30** | Cengiz, Kafkas Üniv. SBE Dergisi 26 (2020) | "Memluk kuvvetleri 30 Ekim’de şehrin dışına çıkarak Timur’un ordusuna doğru saldırıya geçtiler" … "Timur’un ordusu Halep’e girerek şehri yağmaladı" | meydan savaşı ve şehre giriş (aynı anlatı); Halep Kalesi daha sonra düştü, günü verilmiyor |
Her değişen maddede eski gün `gun:` (dosya) ya da `ic_not_b:` (künye) alanında duruyor; Potop'un "el-kitabi" dayanağı MHP cümlesiyle değişti.

### 1.1 Mora — iki aday ve SEÇİMİN gerekçesi (koordinatör şartı ①)
| aday | gün | cümle | neyi tarihliyor |
|---|---|---|---|
| A | **1715-06-26** | fetihnâme: "mâh-ı Cumâdelâhıra'nın yigirmi üçüncü günü … Gördüs Boğazı … Mora Cezîresi içine dühûl eyleyüp" + dipnot "23 Cumâdelâhır 1127 = 26 Haziran 1715 Çarşamba" | ordunun yarımadaya GİRİŞİ — seferin başlangıcı |
| B | **1715-09-07** | öz: "Benefşe de 7 Eylül’de teslim oldu. … Böylece Mora’daki Osmanlı hâkimiyeti yeniden tesis edildi" | son kalenin teslimi ve hâkimiyetin yeniden kuruluşu |
**Seçilen B.** İki maddenin metni de bir SONUCU anlatıyor (K "Osmanlı, Mora'yı geri aldı" · F "Mora'nın kaybı"); geri alma/kayıp
girişle değil son kalenin teslimiyle tamamlanır ve makale "Böylece … yeniden tesis edildi" cümlesini tam bu teslimin
ardına koyuyor. A bu maddelerin değil, seferin başlangıcının günüdür; atlasta "Osmanlı ordusu Mora'ya girdi" diye ayrı
bir madde açılırsa A onun günüdür (bu turda açılmadı — kapsam kararı). Her iki aday da maddenin `gun:` alanına yazıldı.
⚠️ K'nın eski 06-25'i A'ya bir gün yakındı; seçim K'yı 74 gün oynatıyor. Bunun Değişmez 2'ye etkisi ölçüldü (§3): yok.

## 2. KRONO-HANYA-BOL-1006 — 1 madde → 2 madde (yapısal, AYRI diff)
`kronoloji_venedik.js:402` "Girit Savaşı'nın başlaması ve Hanya'nın düşüşü" (1645-08-22) ikiye bölündü:
| yeni madde | gün | kaynak cümlesi (Menekşe 2021, SİSAD 5/3, DOI 10.30692/sisad.987261) | neyi tarihliyor |
|---|---|---|---|
| "Girit Savaşı başladı — Osmanlı donanması Aya Todori önüne geldi" | **1645-06-23** | "Bundan sonra donanma, 23 Haziran günü, Hanya’nın kuzeybatısındaki Aya Todori Adası önüne gelmiş ve Girit sahiline çok yakın olan bu adadaki iki kale iki günde zapt edilmiştir" | donanmanın ada önüne gelişi = savaşın ilk fiilî harekâtı |
| "Hanya'nın fethi — elli dört günlük kuşatmanın sonu" | **1645-08-22** (değişmedi) | "22 Ağustos 1645 tarihinde Hanya Kalesi’ni fethederek “Hanya Fâtihi” unvanını almıştır." | kalenin fethi |
- Karaya çıkış günü makalede "ertesi gün" — hangi günün ertesi olduğu (23'ün mü, iki günlük zaptın mı) cümleden
  ayrıştırılamıyor ⇒ ayrı gün YAZILMADI, metinde anlatıldı.
- Makale iç uyumsuzluğu (İngilizce özet "August 19" ↔ metin 22 Ağustos fetih / 19 Ağustos teslim teklifi) 08-22 maddesinin
  `gun:` alanında BEYAN.
- Eski maddedeki mükerrer-silme iz notu ("daha önce künyede 1645-01-01 yazılıydı…") 08-22 maddesinde KALDI; yeni 06-23
  maddesi künyedeki "Girit (Kandiye) Savaşı başladı" olayının asıl karşılığı olduğunu kaynağında söylüyor.
- `KRONOLOJI_VENEDIK` 86 → **87** madde.

## 3. Ölçüm — Değişmez 2 önce/sonra (diff başlıklarındaki sayılar)
| durum | Değişmez 2 | 2s | 2i | 2t | mükerrer | çıkış |
|---|---|---|---|---|---|---|
| D3b sonrası (taban) | **623 kırılma · 0 açık** | 187 | 1 | 13 | 112 | 2 |
| + D2d | **623 · 0 açık** | 187 | 1 | 13 | 112 | 2 |
| + HANYA-BOL | **623 · 0 açık** | 187 | 1 | 13 | 112 | 2 |
- Üç çıktı arasındaki TEK fark Değişmez 4s'in örnek listesinde `katalan`/`adal` (ikisi de "1 dönem") yazdırma sırası — eşit
  sayılı kayıtların sırası, değer değil (önceki ölçümlerde de görüldü).
- Değişen dosyalar Değişmez 2 evreninde değil (`olaylar*` + `kronoloji_sinir*`) ⇒ Mora'nın 74 günlük kayması da kırılma
  açmadı.
- Çıkış 2: Değişmez 8 ÖLÇÜLEMEDİ (taze worktree'de `devletler_harita.js` yok) — her ölçümde aynı sebep.

**Odak kapısı** (`odak_olc.py`, D3b ↔ D3b+D2d+HANYA): madde 10028 → 10029 · konumlu 8115 → 8116 · ODAKSIZ 769 = 769 ·
BEYANLI→yabancı 653 = 653 · çözülmeyen atıf 1 = 1 (ilgisiz Ogaden) · çıkış 0 = 0. Fark yalnız `kronoloji_venedik.js`
86→87, yeni madde ODAKLI (`yer_id:"Hanya"`).

## 4. Bilinen açıklar
- Potop F'nin `yer_kon`u Ujście'yi gösteriyor; 21 Temmuz'daki giriş Pomeranya sınırında. Konum bu turda DEĞİŞTİRİLMEDİ,
  `kaynak:`'ta not edildi.
- 1422 ve Katalan 1303 hâlâ `bulunamadı` (akademik tur raporu §1).
