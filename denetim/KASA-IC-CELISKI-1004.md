# KASA-IC-CELISKI-1004 — atlas kendi kronolojisiyle çelişiyor mu? (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatörün talebi (Sivas 1400 bulgusunun genelleştirilmesi)

## ÖNGÖRÜ — ölçümden ÖNCE yazıldı
- Koordinatör: "Sivas tek değil, en az 10 var."
- KASA: Ucuz süzgeç (yer_id'li sahiplik-değişimi maddesi × kayıtta yakın kırılma yok) **yüzlerce** aday verecek, çünkü "kuşattı / yağmaladı / yıktı" maddeleri sahip değiştirmez. Elle okununca gerçek çelişki **10–30** arası. Çoğu Timur, Moğol ve Safevî seferleri ile Osmanlı–Safevî sınır kaleleri.
  (öngörü commit'i `491ec89b`, ölçümden önce)

## ÖNCE BİR DÜZELTME — Sivas Değişmez 2'den ✓ ALMIYOR
Koordinatörün çerçevesi: *"Sivas'ta madde var, senkron ✓ görünüyor ve madde kaydın tersini söylüyor."* Ölçünce bu doğru çıkmadı:
- `Timur Sivas'ı yerle bir etti` maddesi **1400-08-01**. Sivas kaydının kırılmaları 1398-07-15 ve 1402-07-28. Madde hiçbir kırılmanın ±30 günü içinde değil ⇒ Değişmez 2 bu maddeyle hiçbir şeyi kapatmıyor.
- Yani Sivas, kör noktanın **öbür yönü**: kronolojide bir sahip değişikliği **var**, haritada karşılığı **yok** (yetim madde). Değişmez 2 yalnız kırılma → madde yönünü soruyor; madde → kırılma yönünü hiç sormuyor.
- ⇒ Bu tarama o yönü ölçtü. Koordinatörün asıl sorusunu (②: ±30 gün içindeki madde kırılmanın **tersini** mi söylüyor) **ölçmedi**; o ayrı iş (aşağıda İSTİYORUM).

## YÖNTEM
- Okuyucu: `denetle.olaylari_yukle()` (Değişmez 2'nin kendi evreni: `olaylar*.js` + `kronoloji_sinir*.js`, **2165 madde**) × `girdi.yukle()`.
- Süzgeç (`denetim/ARAC-KASA-IC-CELISKI-1004.py`):
  1. maddenin `yer_id`'si bir kayıtla eşleşiyor (458 madde eşleşmedi);
  2. `k` fetih/kayıp ya da metinde sahiplik fiili var (aldı · fethi · ele geçir · zapt · teslim · işgal · hâkimiyetine girdi · eline geçti · ilhak · geri aldı · kaybı · bırakıldı; 742 madde elendi);
  3. kayıtta maddenin ±365 günü içinde **hiç** kırılma yok (`s:`/`d:`/`v:`/`isg:`; 775 madde elendi).
- ⇒ **190 aday** (`denetim/KASA-IC-CELISKI-1004-aday.json`). **190'ın hepsi elle okundu.**
- ⚠️ İlk koşuda `isg:` kırılma sayılmamıştı ve 264 aday çıkmıştı (Niş 1737, Dubiça 1788 gibi işgali zaten modellenmiş vakalar yanlış aday oluyordu). Düzeltildi, sayı 190.

## HÜKÜM (ölçtüm)
**190 adaydan 17'si gerçek çelişki** (16 sahiplik + 1 tarih) · 10'u belirsiz · 163'ü yanlış pozitif.
⇒ Koordinatörün öngörüsü (≥10) **tuttu**. Benimki (10–30) **tuttu**. Ama "çoğu Timur/Moğol/Safevî" kısmım **tutmadı**: Timur yalnız Sivas'ta. Çoğunluk Rus/Avusturya savaşlarındaki kısa işgaller ve 19.–20. yy işgalleri.

### Gerçek çelişkiler — madde `yer_id`'de sahip değişikliğini AÇIKÇA söylüyor, kayıt söylemiyor
| # | madde (t · yer_id · başlık) | maddenin cümlesi (özet değil, kilit kısım) | kayıt o tarihte | fark |
|--:|---|---|---|---|
| 1 | 1330-07-28 · Köstendil · Velbujd Savaşı | "…Köstendil çevresi Sırp hâkimiyetine geçti" | `bulgaristan` 1281→1371 | Sırp dönemi yok |
| 2 | 1339-01-01 · Kayseri · Eretna … Kayseri … yörelerini kendisine bağladı | "…1339'da sınırlarını genişletti" | `eretna` **1335**'ten | **tarih**: madde 1339 · kayıt 1335 · TDV `kayseri` 1343 (üç ayrı değer) |
| 3 | 1374-01-01 · Köstendil · Struma ve Mesta vadilerinin katılışı | "…doğrudan Osmanlı yönetimine alındı. Köstendil, Petriç, Nevrokop ve Drama'nın katılmasıyla…" | `v:` 1371→**1395**, `d:` 1395'ten | 21 yıl (v ↔ d) |
| 4 | 1381-06-01 · Isparta · Hamîd ilinin satın alınışı | "…(Akşehir-Beyşehir-Isparta) nakit karşılığında I. Murad'a sattı" | `hamid` → **1391** | 10 yıl |
| 5 | 1400-08-01 · Sivas · Timur Sivas'ı yerle bir etti | "…şehri on sekiz gün kuşattı…" (TDV `sivas`: "kuşatılarak teslim alındı (1400)") | `d:` Osmanlı 1398→**1402** | ~2 yıl |
| 6 | 1427-01-01 · Alanya · Alâiye'nin Memlük Sultanı Barsbay'a satılması | (başlık) | `alaiye` 1293→1471 | Memlük dönemi yok |
| 7 | 1503-01-01 · Hemedan · Murad Bey'in Hemedan yenilgisi | "Bu tek savaşla Irâk-ı Acem, Fars ve Kirman bölgeleri Safevî idaresine girdi; haritada bu bölgeler aynı anda el değiştirir." | `akkoyunlu` → **1508** | 5 yıl. Madde haritanın aynı anda değiştiğini **iddia ediyor**, değişmiyor |
| 8 | 1555-01-01 · İbrim · İbrim ve Nübye sınırının güneye taşınması | "…güney sınırı … İbrim kalesinin alınmasıyla ikinci çağlayanın ötesine taşındı." | `d:` Osmanlı **1517**'den | 38 yıl |
| 9 | 1736-07-13 · Azak · Azak'ın Ruslara düşüşü | "…Azak Kalesi Rusların eline geçti." | `d:` Osmanlı 1711→1739 | Rus işgali 1736→1739 yok |
| 10 | 1789-01-01 · Akkirman · Ruslar tarafından ele geçirilmesi | "…1770'ten sonra ikinci kez Rus eline geçiyordu." | `isg:` 1770–74 ve 1806–12 var, 1789 yok | ikinci işgal yok |
| 11 | 1789-10-11 · İsmail · İsmâil Kalesi'nin teslimi (1789) | "…11 Ekim 1789'da teslim oldu" | `isg:` yalnız **1790-12-22**'den | ~14 ay |
| 12 | 1829-09-14 · Edirne · Edirne Antlaşması | "Rus ordusunun Edirne'ye girdiği savaşın sonunda…" | `d:` Osmanlı, `isg:` yok | Rus işgali yok (madde aynı anda öteki yerlerin işgalini açıklıyor) |
| 13 | 1883-12-23 · Darfur · Darfur'un Mehdî kuvvetlerine geçişi | "…23 Aralık 1883'te Emîr Madibbo'ya teslim oldu." | `darfur` 1695→1916 kesintisiz | Mısır ve Mehdî dönemleri yok |
| 14 | 1896-09-23 · Dongola · Dongola'nın geri alınışı | "…Dongola vilâyeti 23 Eylül 1896'da geri alındı. On bir yıllık Mehdî idaresi burada sona erdi" | `mehdi` → **1899-01-19** | ~2,3 yıl |
| 15 | 1897-04-17 · Yenişehir (Larissa) · 1897 Osmanlı-Yunan Savaşı | "…bir ay içinde Yenişehir, Çatalca ve Dömeke'yi aldı … kazanılan topraklar iade edildi" | `yunanistan` 1881'den kesintisiz | Osmanlı işgali yok |
| 16 | 1911-10-08 · Tobruk · Tobruk'a İtalyan çıkarması | "…liman çarpışmasız işgal edildi." | `d:` Osmanlı → **1912-10-18** | ~1 yıl, `isg:` yok |
| 17 | 1920-01-01 · Aleksandrovsk (Kuzey Sahalin) · Japonya kuzey Sahalin'i işgal etti | "…Temmuz 1920'de işgal etti … çekilmeyi en geç 15 Mayıs 1925'e bağladı." | `sovyet-rusya` | Japon işgali yok · ⚠️ maddenin kendi `t:`'si 1920-01-01, metni "Temmuz 1920" |

### Belirsiz (10) — kayıtta karşılık yok ama çelişki sayılması bir PROJE KARARINA bağlı
- **Künyesiz isyan / fiilî güç:** Belgrad 1813 (Sırp isyancıları 1804–1813 şehri tutuyor; madde "dokuz yıllık ayaklanma") · Vidin 1795 (Pazvandoğlu) · Urfa 1599 (Karayazıcı "Urfa Kalesi'ni ele geçirdi")
- **Modellenmemiş vasallık:** Priştine 1389 ("Sırbistan Osmanlı yüksek hâkimiyetine girdi") · İstanbul 1373 ("Vasal Bizans")
- **Modellenmemiş fiilî işgal:** İstanbul 1918-11-13 ("şehrin fiilî işgali"; kayıtta `isg:` yok, `tbmm-turkiye` 1920-04-23'ten)
- **Kısa akın:** İbrail 1595 (Cesur Mihail "İbrâil alındı")
- **Başlık ile metin farklı ölçekte:** Bağdat 1821 ("Süleymaniye ve Bağdat'ın İran işgali"; metin eyaleti anlatıyor)
- **Kayıt maddeden ÖNCE değişiyor:** Gardâye 1882 (madde ilhak 1882; kayıt Fransa daha erken) · Kars 1537 (madde: "1534'te … bağlanmış olması kuvvetle muhtemeldir; ancak şehrin kesin katılışı üç yıl sonradır"; kayıt 1534. Madde kendisi iki ucu veriyor)

### Yanlış pozitif sınıfları (163)
- **`yer_id` = antlaşmanın imzalandığı yer, toprağın yeri değil:** Londra, Paris, Berlin, Viyana, Münster, Nijmegen, Moskova, Stettin, Roma, Lozan, Varşova, Kasr-ı Şîrîn, Yaş, Erzurum, Mudanya, Münih, İskenderiye.
- **Başarısız kuşatma:** İznik 1302, Konya 1386, İstanbul 1394, Kefe 1454, Belgrad 1456, Aden 1516, Eğriboz 1688, Korfu 1716, Akkâ 1799 (bu sonuncusu `k=kayip` etiketli).
- **İç siyaset / kültür / kurum** (tahta çıkış, idam, cami, okul, deprem; çoğunun `yer_id`'si İstanbul).
- **`yer_id` başka yer:** Çanakkale 1656 (madde Bozcaada ve Limni'nin kaybını anlatıyor) · Sisam 1426 (Aydınoğulları'nın sonu) · Mora (Tripoliçe) 1540 (Anabolu) · İstanbul 1700 (Azak) · İstanbul 1775 (Bukovina). ⇒ Bu sınıf **ayrı bir kusur**: madde gerçek bir toprak değişikliği anlatıyor ama yanlış yere iliştirilmiş, o yüzden doğru yerin kaydıyla hiç karşılaştırılmıyor. Doğru yerlerin kayıtları **ölçülmedi.**

### Yan gözlem — `s:` ile `d:` aynı anda geçerli (50 kayıt, 53 çift)
- Hemedan 1727 adayı bunu ortaya çıkardı. Hemedan'da `s:safevi 1508→1736` ile `d:` Osmanlı `1724→1730` üst üste biniyor. Atina, Modon, Tebriz, Nahçıvan, Tiflis, Revan, Gence, Şamahı, Bakü ve Derbend'de de aynı desen var.
- Desen bilinçli bir sözleşme gibi görünüyor ("d: s:'nin üstüne yazılır"), ama bu oturumda doğrulamadım. Sözleşmeyse motorun önceliği ve denetimin okuması aynı olmalı. Benim süzgecim önce `s:`'yi okuduğu için Hemedan'ı yanlış aday yaptı.

## BULAMADIM / beyan
- ±365 gün penceresi bir seçim. Kırılması maddeye 366 gün–birkaç yıl uzak olan çelişkiler (Hemedan 1503 ↔ 1508 gibi) yakalandı. Kırılması 365 günden yakın ama **yanlış yönde** olanlar elendi: süzgeç onları "uyumlu" saydı.
- 458 maddenin `yer_id`'si hiçbir kayıtla eşleşmiyor; onlar hiç sorulmadı.
- Sahiplik fiili listesi Türkçe kök eşleşmesi; kaçırdığı fiiller olabilir.
- 17'nin her biri için TDV'ye ayrıca bakılmadı. Hüküm "madde ile kayıt birbirini tutmuyor"; hangisinin doğru olduğu ölçülmedi.

## İSTİYORUM
- ② asıl soru: **±30 gün içinde madde var ama kırılmanın tersini söylüyor** taraması. Ayrı bir süzgeç gerekiyor (maddenin fail devleti ↔ kırılmanın yeni sahibi). İstersen sıradaki iş bu.
- "Yetim madde" yönü için `denetle.py`'ye bir soru önerisi: `yer_id`'li ve sahiplik fiilli bir maddenin ±N günü içinde o yerin kaydında kırılma var mı? Bu taramanın kendisi o sorunun ilk sürümü.
- `yer_id` = imza yeri sınıfı için hüküm (yeni alan mı, `yer_id` kuralı mı?).
