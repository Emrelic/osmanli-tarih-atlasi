# KRONO-ASYA-UZAK-0929 — YERLEŞİM ÖNERİLERİ (harita, koşuya girecek)

`data/yerlesimler*.js` **dokunulmadı** (Oturum 0'ın dosyası). Aşağıdakiler koordinatörün biriktirip tek koşuda
uygulayacağı önerilerdir. Şema: dosya · yerleşim · mevcut `s:` · önerilen · kaynak · gerekçe · **kesinlik**.
Mevcut `s:` satırları `girdi.yukle()` çıktısından okundu (29 Eylül 2026).

**Kesinlik ölçeği:** 🟢 kaynak metni bu oturumda web özetinde görüldü, yıl/gün destekli · 🟡 yıl destekli, gün ya da ayrıntı
sınanmadı · 🔴 yön belli ama tarih kaynaksız (uygulamadan önce kaynak aranmalı). Kitap sayfaları HİÇBİRİNDE açılmadı
(bkz. `KRONO-ASYA-UZAK-0929.md §4`).

---

## Ö1 🟡 Herat — Herat 1863'e dek `afganistan` DEĞİL  (en önemlisi)
- Dosya: `yerlesimler_ek16.js` · yerleşim: **Herat**
- Mevcut: `…{f:1747-06-20,t:1826-01-01,d:afgan-durrani} {f:1826-01-01,t:1923-10-29,d:afganistan}`
- Önerilen: `{f:1747-06-20,t:1826-01-01,d:afgan-durrani}` **kalır**, ama `{f:1826-01-01,…,d:afganistan}` satırı
  `f:1863-…` olmalı; 1826–1863 arası **künye önerisi** `herat-emirligi` (Sadozay Kâmrân ve Yâr Muhammed sülâlesi; KUNYE.md K5)
  ya da kasıtlı boşluk (`bos:"…"`, koordinatör kararı). Günü kaynaklı DEĞİL: **1863 (Mayıs)**.
- Kaynak: Britannica, «Afghanistan — Dōst Moḥammad (1826–39; 1843–63)»: *Herat'ı 1863'te aldı.*
- Gerekçe: Dost Muhammed 1826'da Kâbil'i aldı ama Herat Sadozay hanedanının elinde kaldı (1863'e dek); harita 1826'da Herat'ı
  `afganistan` (Bârekzâyî) boyuyor. `afgan-durrani` künyesinin t'si de 1823 — **hayalet devlet** riski (CLAUDE.md §3.5).
- Etkilenen kırılma: `1826-01-01 afgan-durrani→afganistan (yil_temsili)`.

## Ö2 🟡 Belh 1841 → 1850 / 1859
- Dosya: `yerlesimler_ek16.js` · **Belh**
- Mevcut: `…{f:1826-01-01,t:1841-01-01,d:buhara} {f:1841-01-01,t:1923-10-29,d:afganistan}`
- Önerilen: `t:1841-01-01`/`f:1841-01-01` → **1859** (Britannica: «Balkh and the northern Khanates (1859)»); başka bir web
  özeti 1850 diyor. **Kaynaklar arası 9 yıl** — uygulamadan önce Adamec (Historical Dictionary of Afghanistan) ya da Iranica
  «Balkh» ile sınanmalı.
- Etkilenen: `1841-01-01 buhara→afganistan (yil_temsili)`.

## Ö3 🟡 Harezm — Şeybânî fethi 1502 değil 1505
- Dosyalar: `yerlesimler.js` · yerleşimler: **Hîve · Köhne Ürgenç (Gürgenç) · Küngrat** (+ **Hazârasp** — adı
  `girdi.yukle`de bu yazımla bulunamadı; dosyası koordinatörce aranmalı)
- Mevcut (üçü de aynı): `{f:1379-01-01,t:1502-01-01,d:timurlu} {f:1502-01-01,t:1512-01-01,d:buhara} {f:1512-01-01,t:1740-01-01,d:hive}`
- Önerilen: her ikisinde `1502-01-01` → **`1505-01-01`** (`t` ve `f`).
- Kaynak: Britannica «Muḥammad Shaybani»: *1505'te Harezm'i aldı.* Madde: `kronoloji_cok_orta_asya2.js` 1505-01-01.
- Gerekçe: harita üç yıl erken. **Ek uyarı:** `hive` künyesi f:1512 diyor (Yadigâroğulları); 1505-1512 arası `buhara`
  boyaması Şeybânî hâkimiyeti olarak doğru.

## Ö4 🟡 Taşkent — 1503'te eski sahip `timurlu` değil, Moğulistan (`mogulistan`)
- Dosya: `yerlesimler_ek15.js` · **Taşkent**
- Mevcut: `{f:1370-01-01,t:1503-01-01,d:timurlu} {f:1503-01-01,t:1809-01-01,d:buhara} {f:1809-01-01,t:1865-06-17,d:hokand}`
- Sorun: (a) 1503'te Taşkent Moğul Mahmud Han'ındı (Şeybânî onu Aksı'da yendi, Haziran 1503) — `timurlu` değil.
  (b) `buhara` 1503-1809 arası dokuz yüzyıl-çeyreği boyunca Taşkent'i Buhara'ya bağlıyor — Taşkent bu sürede Kazak Hanlığı'nın,
  yerel hanların ve bağımsız Taşkent şehir devletinin elindeydi (kaynaksız hafıza; 🔴).
- Önerilen: dilimin **kaynaklı** kısmı: `{f:1503-06-01,…,d:buhara}` (gün web özetinde: Haziran 1503); öncesi için `mogulistan`
  (tarihi kaynaklı bulunamadı); 1503-1809 arasının kime ait olduğu **ölçülemedi.**
- Kaynak: Britannica «Muḥammad Shaybani»; Encyclopaedia of Islam², «Shībānids».

## Ö5 🟢 Timur'un 18 şehri — `1370-01-01` → `1370-04-09`
- Yerleşimler (18): Andican · Belh · Buhara · Cizzah · Hisar · Hokand · Hucend · Karşi (Nahşeb) · Külâb (Kulob) · Oş ·
  Sayram (İsficâb) · Semerkant · Taraz (Evliya-Ata) · Taşkent · Termez · Türkistan (Yesi) · Çimkent · Şehrisebz (Kiş)
- Dosyalar: `yerlesimler_ek14.js` · `yerlesimler_ek15.js` · `yerlesimler_ek16.js` · `yerlesimler_ok107.js`
- Mevcut: `{f:1281-01-01,t:1370-01-01,d:cagatay} {f:1370-01-01,t:…,d:timurlu}`
- Önerilen: her ikisinde `1370-01-01` → **`1370-04-09`**.
- Kaynak: TDV `timur` (mevcut madde `kronoloji_iran.js` 1370-04-09, «Timur, Mâverâünnehir'de tek hâkim oldu», kaynak «timur (TDV,
  doğrulanmış)») — künye `timurlu` f:1370-04-09 ile de uyumlu.
- Etkilenen kırılma: `1370-01-01 cagatay→timurlu (kapsam_disi, 18 yerleşim)`; madde ±30 gün içine girer (0 gün).

## Ö6 🟡 Raipur · Ratanpur — Nagpur ilhakı 1853-01-01 değil 1853-12-11 (ya da 1854)
- Dosya: `yerlesimler_nokta_asya_0917.js` · yerleşimler: **Raipur · Ratanpur**
- Mevcut: `{f:1818-01-01,t:1853-01-01,d:__BOSLUK__} {f:1853-01-01,t:1923-10-29,d:ingiliz-hindistani}`
- Önerilen: `1853-01-01` → **`1853-12-11`** (III. Raghuji'nin ölümü; biçimsel ilhak 1854) ve 1818–1853 arasını `nagpur-bhonsle`
  künyesine bağla (KUNYE.md K3) — şimdiki `__BOSLUK__` yanıltıcı: bölge bir devletin toprağıydı, boş değildi.
- Kaynak: Metcalf & Metcalf, *A Concise History of Modern India* (2006); Britannica «Doctrine of Lapse».
- Gerekçe: harita 11 ay erken; ilhak Aralık 1853'te.

## Ö7 🟡 Sambalpur — 1797-1817 aralığı ve 1817-1849 boşluğu
- Dosya: `yerlesimler_nokta_asya_0917.js` · **Sambalpur**
- Mevcut: `{f:1281-01-01,t:1797-01-01,d:__BOSLUK__} {f:1797-01-01,t:1817-01-01,d:maratha} {f:1817-01-01,t:1849-01-01,d:__BOSLUK__} {f:1849-01-01,…,d:ingiliz-hindistani}`
- Sorun: 1849 doğru (ölüm ilkesi). 1797-1817 `maratha` (Nagpur Bhonsle'leri?) ve 1817-1849 «boşluk» kaynaksız — Sambalpur'un o
  aralıkta hangi siyasi yapıya bağlı olduğu bu oturumda ARAŞTIRILMADI; kaynak eser/gün bulunamadı.
- Önerilen: **hiçbir şey** — yalnız `__BOSLUK__`un kasıtlı beyan olup olmadığı koordinatörce bakılsın. 🔴 ölçülemedi.

## Ö8 🟢 Baram (bölge) · Niah kıyısı (bölge) — `1882-06-13` yıl temsilîdir
- Dosya: `yerlesimler_a78_asya.js`
- Mevcut: `{f:1368-01-01,t:1882-06-13,d:brunei-sultanligi} {f:1882-06-13,…,d:sarawak-brooke}`
- Önerilen: yıl **1882 ✓** (kaynak destekli); **gün 06-13 kaynaksız** — atlas günü dayanak değildir (CLAUDE.md §4). Ya
  `1882-01-01` + hassasiyet notu, ya kaynaklı gün bulunana dek olduğu gibi. Aynı şey Bintulu `1861-01-01`, Limbang `1890-01-01`:
  Limbang'ın kaynaklı günü **1890-03-17** (madde yazıldı) → `f:1890-03-17`.
- Kaynak: Runciman (1960), Tarling (1971); Limbang için web özeti «17 Mart 1890».

## Ö9 🟡 Feyzâbâd (Bedahşan) — 1657 ve 1859
- Dosya: `yerlesimler_a78_asya.js`
- Mevcut: `{f:1479,t:1584,__BOSLUK__} {f:1584,t:1657,buhara} {f:1657,t:1859,__BOSLUK__} {f:1859,…,afganistan}`
- 1584 ✓ (Abdullah Han II, Bedahşan) · 1859 ✓ yıl (Kunduz/Bedahşan, Mayıs–Haziran 1859) · **1657 kaynaksız** (Bedahşan
  mirlerinin Buhara'dan kopuşu) 🔴 ölçülemedi.

## Ö10 🟢 Timor beylikleri — kırılma günü künye penceresinden
- Yerleşimler (9): Atapupu · Baucau · Lautém (Moro) · Maliana · Maucatar · Niki-Niki … (`guneydogu-asya`, `1769-10-10`)
- Sorun: `timor-beylikleri` künyesi `t:1769-10-10`, `timor-beylikleri→__BOSLUK__` kırılması aynı gün. O tarih **sınır
  işaretidir**, ölçüm değil (CLAUDE.md §4). Timor liurai'leri 1769'da bitmedi (Portekiz idaresi Lifau'dan Dili'ye 1769'da geçmiş olabilir, yerel
  beylikler 20. yüzyıl başına dek sürmüş olabilir — hafıza, HİÇ sınanmadı 🔴). **Harita 9 yerleşimi 1769'dan sonra boş bırakıyor**; gerçekte
  bölge ya beylik ya Portekiz idaresindeydi. KUNYE.md K9.

## Ö11 🟢 Brunei kırılmaları 1368-01-01 (5 yerleşim) ve Banjar 1526-01-01
- Baram · Bintulu · Labuan (Victoria) · Limbang · Niah kıyısı: `__BOSLUK__→brunei-sultanligi 1368-01-01`.
  `brunei-sultanligi` f:1368 **temsilî bir künye başlangıcı** (kaynaklı bir kuruluş günü bu oturumda bulunamadı); bu beş yerleşimin Brunei'ye bağlandığı gün **bir olay değil.** Öneri: Brunei ömrü `f`'sini sorgula (KUNYE.md «ÖMRÜ şüpheli» bölümü),
  yerleşim penceresine dokunma.

## Ö12 🟡 Asîrgarh · Burhânpûr — `1860-01-01` (babur→ingiliz)
- Dosya: `yerlesimler_hindistan.js`
- Mevcut: `{f:1601-01-01,t:1860-01-01,d:babur-imparatorlugu} {f:1860-01-01,…,d:ingiliz-hindistani}`
- Sorun: `babur-imparatorlugu` t:1857-09-21; Asîrgarh 1819'da İngilizlerin eline geçti (hafıza — 🔴 kaynaksız), Burhânpûr'un
  1601'den itibaren Bâbürlü kaldığı ve Sindiya/Nimar arasındaki yerini bilmiyorum. 1860 yalnız bir YIL temsilî.
  Uygulamadan önce kaynak aranmalı. **Ölçülemedi.**

---

### YAZILMAYAN öneriler (bilerek)
- Okyanusya'nın 19 doğuş satırı için **yerleşim önerisi yok** — kuruluş günleri kaynaklı (`kur:` alanı Te Ara/An Encyclopaedia
  of New Zealand/Kroesen raporu); harita doğru.
- Doğu Asya'nın 7 doğuş satırı için nokta önerisi yok: Mergen 1686 · Sanxing 1714 · Barkol 1715 · Chifeng 1738 · Qitai 1771
  `kur:` DOLU (kuruluşu kaynaklı). **Ama Habarovka · Vladivostok · İmperator limanı (1653-01-01) ve Nikolayevsk (1689-09-06)
  `kur:` taşımıyor** — bu dört yerleşimin «—»→qing günleri kaynaksız; Vladivostok'un 1653'te «Qing» olması Amur/Ussuri havzası
  için tartışmalı bir iddia. 🔴 ölçülemedi — Rusya paketine havale önerilir.
