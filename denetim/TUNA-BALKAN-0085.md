# TUNA-BALKAN-0085 — paket 0085: H-0012 · H-0013 · H-0017 · H-0018 · H-0021 (gün aralığı 1395 – 1540)

Makine UMIT · ağaç `C:\atlas-tuna` (temel `origin/main` 6865cc87) · 9 Ekim 2026 · `PYTHONHASHSEED=0`
**Görseller AÇILDI** (beyan): H-0012-1, H-0013-1, H-0017-1, H-0018-1, H-0021-1/2 — metinde tarih/yer yoktu. Açık depoya KOPYALANMADI.
Diff UYGULANMADI; ağaçta uygulanıp ölçüldü, geri alındı. Commit yok.

## Özet
| # | soru | teşhis | sınıf | çare |
|---|---|---|---|---|
| H-0012 | Niğbolu'nun Tuna ötesi toprağı | **motor artefaktı + kısmen gerçek** | emilme (§2) | nokta yoğunluğu — bu turda diff YOK |
| H-0013 | "bu ele geçirmenin maddesi yok" | **gerçek madde eksikliği** — 1403-02-01 Bizans kıyı kazanımı | 2s AÇIK | **KRONO.diff: yeni madde** |
| H-0013 ek | 1413-07-05 Edirne kümesi MADDESİZ | madde var (Çamurlu), yeri anmıyordu | yer şartı | **KRONO.diff: Çamurlu metnine Edirne** |
| H-0017 | Babadağı Köstence/Silistre'den önce mi | **evet — TDV'nin kendi tarihleri** | ① gerçek eksklav | değişiklik yok |
| H-0018 | "Alaşehir" Niş/Şehirköy/Priştine'den önce mi | yer **Alacahisar (Kruševac)**; 1454-1456 eksklavı **kaynaklarda belirsiz** | ① / ölçülemedi | değişiklik yok, karar seçeneği |
| H-0021 | İbrail'in statüsü | veri TDV ile **tutarlı** (1462'ye dek Eflak, 1462 sonrası tâbi, 1538-40 doğrudan) | — | değişiklik yok |
**KOORD.diff YOK** — yerleşim verisinde kaynağa dayalı düzeltme çıkmadı. Tek diff KRONO, bağımsız iner (nokta değişmediği için "aynı commit" şartı yalnız **2s tavanı** için geçerli, aşağıda).

## H-0012 — Niğbolu'nun Tuna ötesi toprağı: matematiği
- **Ölçüm:** Niğbolu (43.706, 24.892) · en yakın kuzey-yaka komşular: Slatina **90 km**, Yergöğü 89 km (doğuda), Krayova 112 km. Arada nokta YOK.
- **Mekanizma (kod okundu):** Kara-kara sınırı **Voronoi + 200 km tavan** (`uret_petek.py:1442`: *"Kara-kara sınırı hâlâ Voronoi + 200 km tavan çiziyor"*).
  Nehir geçiş bedeli (`NEHIR_BEDEL_SAAT`, Tuna sınıf-1: idare 16 sa/geçitsiz) Dijkstra ızgarasında var ama haritaya **yalnız denizi kesen parçalarda** iner.
  Nehre yaslama yarıçapı **0,30° ≈ 33 km** (`dogal_hatta_yasla`). Niğbolu–Slatina orta dikmesi Niğbolu'dan ~45 km, Tuna'dan ~40 km kuzeyde
  ⇒ yaslama erimi DIŞINDA ⇒ sınır nehre çekilmez, Niğbolu peteği Tuna'nın ~40 km kuzeyine taşar.
  Emre'nin sezdiği "5 günlük geçiş maliyeti" bugün kara sınırını ETKİLEMİYOR — bu bir motor değişikliğidir (`GORUNUM-ABC-0910 ③`), veri işi değil.
- **Tarih (kısmen haklı):** TDV `nigbolu`: Yıldırım Bayezid 1396'dan sonra *"Ayrıca daha önce İvan Şişman tarafından Tuna’nın hemen karşı sahilinde yaptırılan Halovnik (bugün Turnu Mugurele) Kalesi’ni tekrar inşa ettirdi"*
  ⇒ karşı yakada bir Osmanlı köprübaşı GERÇEK — ama bir kale, 40 km'lik bir şerit değil.
- **Öneri (diff yok):** ① Turnu (Kule/Halovnik) noktası (Osmanlı, Niğbolu'yla) + ② kaynaklı bir Eflak noktası (Turnu ile Slatina arası) — ikincisi için bu turda kaynak aranmadı/bulunamadı; uydurulmadı.
- 📌 Yan bulgu: Niğbolu `d.f 1395-01-01` (yıl-temsilî) — TDV *"Bazı anonim Bulgar kronikleri bu fethin 3 Haziran 1395’te gerçekleştiğini belirtir"* (gün VAR, kronik rivayeti olarak).

## H-0013 — Görselde BİZANS: 1403 Gelibolu Antlaşması'nın kıyı kazanımı
- Görsel: Istıranca kıyısı (Ahtapolu çevresi) BİZANS boyalı. Veri: **İğneada · Ahtapolu · Rezve** `s: suleyman-celebi → bizans` **1403-02-01 → 1424-02-22** (kaynak: TDV fetret-devri, "Şubat 1403 — AY").
- `denetle --ayrinti` (önce): **1403-02-01 (3) Değişmez 2s AÇIK** — *"en yakın 36g: Yıldırım Bayezid'in esarette ölümü"*. Antlaşma külliyatta **üç ayrı günde** duruyor ve hiçbiri kıyıyı anmıyor:
  `kronoloji_bizans` 1403-01-01 (31 g — pencere dışı) · `olaylar_ek` 1403-06-01 · `olaylar_ek3` 1403-06-15 (yer_id Selanik). Künye-içi `fetret-suleyman` 1403-02-01 var.
- **Çare:** `olaylar_ek3` yeni madde **1403-02-01 (kesinlik ay)** *"Gelibolu Antlaşması: Misivri'ye kadar Karadeniz kıyısı Bizans'a bırakıldı"*, yer_id `Ahtapolu (Ahtopol)`,
  kaynak TDV fetret-devri birebir: *"…Gelibolu Antlaşması’nı imzaladı (Şubat 1403). Buna göre Süleyman Çelebi Kartal, Pendik ve Gebze ile bazı adaları ve Misivri’ye kadar Karadeniz sahillerini, Rumeli’de Selânik ve Tesalya’yı Bizanslılar’a terkediyordu."*
  `kesinlik:"ay"` emsali `olaylar_p0917kosu13` 1516-10-01. (CLAUDE §8 "ay → YYYY-01-01" uygulanırsa madde 31 gün kayar ve kırılmayı KAPATMAZ — yerleşim kaydı da 02-01/ay beyanlı; ikisi aynı biçimde tutuldu.)
- 📌 Ayrı kalem: aynı antlaşmanın üç farklı günü (01-01 · 06-01 · 06-15) TDV'nin "Şubat 1403"üyle hizalanmalı — dokunulmadı (dosyaları başka maddeleri kapatıyor olabilir).

### H-0013 ek — 1413-07-05 Edirne kümesi (D2-YER-SARTI-OLC-1009: MADDESİZ 30)
- Gerçek madde **Çamurlu** (`olaylar_ek3` 1413-07-05) — Mûsâ'nın ölümüyle Rumeli Mehmed'e geçti; ama yer_id Sofya ve metin Edirne'yi anmıyordu.
- **İlk deneme ayrı maddeydi** ("Mûsâ Çelebi'nin ölümüyle Edirne ve Rumeli…") → **mükerrer kapısı ✗ 95→96** (aynı kişi + aynı gün) ve çıkış 1 ⇒ **geri alındı.**
- **Çare:** Çamurlu maddesinin `d`sine TDV cümlesi eklendi: *"Çelebi Mehmed, hayatta kalan son kardeşi Mûsâ Çelebi’nin de ortadan kalkmasından sonra Edirne’de kendisini Osmanlı Devleti’nin yegâne hükümdarı olarak ilân etti."* + `ic_not_t`.
- Yer şartı aracı (ağaçta koşturuldu): Edirne kümesi **MADDESİZ 30 → 29** (yalnız Edirne'nin kendisi ESLESTIRME). Kalan 29 `m:Edirne` kasabası (Kırklareli, Dereköy, Demirköy, Vize…)
  adıyla anılmadıkça kapanmaz. ⇒ **Ölçüt sorusu:** bölge merkezini anan madde bölgeyi kapatmalı mı? `denetle.py`de `_2s_merkez_aniyor` zaten var; yer şartı aracı bunu kullanmıyor. 29 kasaba adını metne dizmek önerilmedi.
- ⚠️ **D206:** TDV fetret-devri Mehmed'in Çamurlu'dan ÖNCE *"önce Kara Halil kumandasındaki öncü kuvvetlerini bozguna uğrattı, daha sonra da Edirne’ye geldi"* diyor — Edirne fiilen daha erken geçmiş olabilir; günü kaynakta YOK, kırılma ölüm gününde bırakıldı.

## H-0017 — Babadağı: Köstence ve Silistre alınmadan mı? → EVET, kaynakların kendisi böyle
| nokta | veri | TDV |
|---|---|---|
| Babadağı | Osmanlı **1416-01-01** | `babadagi`: *"Babadağı ve çevresi, Çelebi Sultan Mehmed’in Eflak Voyvodası Mircea ile oğlu Mihail’i mağlûp etmesinden sonra Osmanlı hâkimiyetine girdi (819/1416)"* |
| Köstence | Eflak → **1419-01-01** | `kostence`: *"Osmanlılar 1419’da Constanta ile beraber Dobruca’nın büyük kısmını fethettiler"* |
| Silistre | Eflak → **1419-01-01** | `silistre`: *"822 (1419) ilkbaharında Çelebi Sultan Mehmed’in Silistre’yi ve bütün Dobruca’yı tekrar almasına fırsat tanıdı"* |
| İshakçı | Eflak → 1419-01-01 | Stănică 2016 (akademik) |
- Babadağı'nın 47-80 km çevresindeki üç noktanın üçü de 1419'a dek Eflak ⇒ 1416-1419 Osmanlı eksklavı **kaynakların doğrudan sonucu (① gerçek)**. TDV `dobruca` iki aşamayı ayırıyor: *"…ancak 1416’da Çelebi Mehmed’e yenilmiştir. Çelebi Mehmed Dobruca kalelerini fethetmekle kalmamış, Eflak’ı da ele geçirerek Mircea’ya Osmanlı hâkimiyetini kabul ettirmiştir (1419)."*
- Maddeler senkron: `olaylar_ek10` 1416-01-01 Babadağı · 1419-01-01 Silistre/Dobruca. Varna'nın Osmanlı görünmesi 1413-07-05 (Mûsâ'nın payı → Mehmed) — ayrı, doğru.
- D206 iki uç: Babadağı'nı 1419'a çekmek TDV babadagi'yi, ötekileri 1416'ya çekmek TDV kostence/silistre'yi çiğner ⇒ **değişiklik önerilmedi.**

## H-0018 — "Alaşehir" değil **Alacahisar (Kruševac)** (görselden okundu)
- ⚠️ Koordinatörün yönlendirmesi Alaşehir'e (Philadelphia, EPOK-SAHIP 1300-1391 kalemi) gidiyordu. Görselde etiket *"…sar (Kruševac)"*, Niş/Şehirköy/Priştine'nin kuzeybatısında ⇒ **EPOK-SAHIP ile çakışma YOK.**
- Veri: Alacahisar Osmanlı **1454-01-01** · Priştine Sırp → **1455-06-01** · Niş, Şehirköy Sırp despotluğu → **1456-01-01** ⇒ 1454-1456 eksklavı.
- TDV `alacahisar`: *"İstanbul’un fethinden sonra Sırp despotu Alacahisar ve yöresini Osmanlılar’a iade etti. Nitekim Alacahisar’a bağlı bazı köylere ait timar kayıtlarının mevcudiyeti, yörenin muhtemelen 1453 sonları veya 1454 başlarında yeniden Osmanlı hâkimiyetine girdiğini gösterir"* —
  ama aynı madde: *"1454’te Sırbistan’a gönderilen Osmanlı kuvvetleri Alacahisar civarında Macar ve Sırp kuvvetleri tarafından bozguna uğratıldı. Bunun üzerine Fâtih 1455’te bu bölgeye yeni bir sefer düzenledi. Bu sefer sonunda … kuzeyde Alacahisar sınır olmak üzere bir kısım toprakları ona bıraktı. … Alacahisar yöresinde kesin olarak Osmanlı hâkimiyeti sağlandı (1458)."*
- TDV `nis`: 1444 Sırplara iade · *"860’ta da (1456) Curac Brankoviç’in ölümünün ardından kati olarak Osmanlı hâkimiyetine girdi"* · `sehirkoy`: *"fakat 1456’da … Osmanlılar’a geçti"* · `pristine`: *"859’da (1455) kesin şekilde"*.
- **Hüküm:** eksklav TDV'nin harfi harfine okunmasından doğuyor; TDV `alacahisar` 1454-1458 arasını kendi içinde belirsiz bırakıyor (iade → bozgun → 1455 anlaşması → 1458 kesin). **Ölçülemedi** (① mi ③ mü ayırt edilemiyor).
  Seçenekler (koordinatör/Emre): (a) bugünkü veri (1454, timar kaydı) · (b) Alacahisar → **1458** ("kesin olarak") — eksklav kalkar, ama 1454 timar tanıklığı düşer. Diff yazılmadı.
- Şehirköy (YAMA-INMEMIS yan bulgusu): veri zaten **1412** modelinde (`musa-celebi → 1412-01-01 → sirp-despotlugu`); TDV `sehirkoy` *"1412’de Sırp Despotu Stefan Lazareviç tarafından alındı"* ile tutarlı — eski 1413 modeli veride YOK.

## H-0021 — İbrail'in statüsü
- Veri: İbrail `s:eflak` 1330 → **1462-06-01** → `v:eflak` (tâbi) → **1538-09-01** doğrudan. Eflak künyesi `tabi` 1462-06-01'den. Boğdan tâbi 1456'dan.
- TDV `eflak`: Mircea 1417'de hükümranlığı kabul etti; Segedin'le *"ikili bir hükümranlık"*; Vlad Tepeş (1456-1462) *"tekrar Osmanlılar’la mücadeleye girişti"*; *"Radu tam anlamıyla İstanbul’a tâbi oldu"* (1462).
  TDV `ibrail`: *"İbrâil’in Osmanlı hâkimiyetine geçişi Kanûnî Sultan Süleyman zamanında olmuştur"* · *"1538-1540 arasında alındığı kesindir"*.
- **Hüküm:** Boğdan'ın tâbi, İbrail'in yeşil (Eflak) göründüğü pencere **1456-1462**dir — Vlad Tepeş'in Osmanlı'ya karşı savaştığı yıllar. Veri TDV ile **tutarlı.** Değişiklik yok.
  (Eflak'ın 1417-1462 arası "ikili hükümranlık"ı tâbi mi sayılmalı, ayrı bir karar; bugün 12 Eflak noktası `v:` 1462-06-01'den başlıyor.)

## Öngörü (ölçümden ÖNCE) ↔ ölçüm
| soru | öngörü | ölçüm |
|---|---|---|
| 2s AÇIK | 184 → 183 (1403-02-01 kapanır) | **183** ✓ |
| 1413-07-05 (2s listesi) | kapanmayabilir | listede kaldı (Anadolu s→s kümesi, Edirne değil) ✓ |
| D2 · 2t | 0 · 13 değişmez | 0 · 13 ✓ |
| ayrı 1413 maddesi | — | **mükerrer ✗ 95→96, çıkış 1** — öngörülmemişti; geri alındı, Çamurlu metni yolu seçildi |
| 2sk | — | YER ile kapanan 2087 → **2090** (+3) · maskeli 2251 değişmedi |
| yer şartı Edirne | 30 → 0 umuluyordu | **30 → 29** ✗ (araç kasaba adı arıyor) |
| odak | +1 madde, kırık 0 | OLAYLAR 1793 → 1794 · ek3 32 → 33 KONUMLU · çıkış 0 ✓ |
`denetle.py` (son hâl) önce **2** / sonra **2** — yalnız D8 ölçülemedi (`devletler_harita.js` taze ağaçta yok).

## 🔴 Tavan (§3.4) — işçi önerir, koordinatör yazar
**`2s` AÇIK tavanı 184 → 183, KRONO.diff ile AYNI commit'te** (iyileşince tavan iner; ayrı commit'te gevşek tavan yeni borcu yutar).
Diff dışında kalan: 2s sabiti `denetle.py`de (koordinatör dosyası) — bu teslimde yazılmadı.

## Dosyalar
- `denetim/TUNA-BALKAN-0085.md` (bu rapor)
- `denetim/TUNA-BALKAN-0085-KRONO.diff` → `data/olaylar_ek3.js` (+1 madde 1403-02-01 · Çamurlu 1413-07-05 metni) — LF, `git apply --check` temiz
- KOORD.diff: **yok** (gerekçe yukarıda)
