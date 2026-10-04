# PAKET-0076-BITIR — Berlin 1878 noktaları (15 + Ziştovi + 7 ek)

Tarih: 4 Ekim 2026 · Yazılan dosyalar: yalnız bu rapor ve `PAKET-0076-BITIR-berlin-noktalar.js`
(`window.PAKET_0076_BERLIN_TASLAK`, 23 kayıt, `node --check` temiz). `data/`ya YAZILMADI, git komutu ÇALIŞTIRILMADI.

## 0. Özet

| Durum | Sayı | Anlamı |
|---|---|---|
| **B** — taşınabilir (koordinatör hükmüyle) | **9** | 1281→1923 her gün sahipli, boşluk 0, s/d çakışması 0 (betikle ölçüldü). Her halkanın kaynağı var; ⚠️ işaretli bir-iki halka yorum ya da bölge→kasaba taşıması |
| **C** — UYGULANAMAZ | **14** | En az bir dilimde sahip yok (Değişmez 1 deliği) ya da `????` yer tutucusu — taşınmamalı |
| **A** — her halka doğrudan kaynaklı | 0 | Hiçbir kayıtta tam temiz zincir çıkmadı |

B listesi: İvranye · Leskofça · Kurşunlu · Ürküp · Bar · Lofça · İslimye · Ziştovi (ek) · Hacıoğlupazarcığı (ek).

## 1. Ad ve 3 km taraması (`girdi.yukle()`, 93 dosya, 4298 nokta)

- 15 yerin hiçbirinde 25 km içinde nokta yok. Tek istisna Tulça: İsmail 19 km uzakta, mükerrer değil.
  Ad grep'i (Türkçe/yerel/Latin yazımlar) yerleşim kaydı bulmadı.
- 🔴 **Ziştovi VERİDE YOK.** Görev "zaten var" diyordu, ölçünce yanlış çıktı: 25 km içinde nokta 0.
  "Ziştovi" yalnız antlaşma adı olarak geçiyor (`yerlesimler.js:445/511`, `ek29`, `serhat`).
  Bu yüzden taslak 16 olarak eklendi (B).
- Ek 7 yerin hiçbirinde 3 km içinde nokta yok. En yakın noktalar: Alasonya→Yenişehir 30 km, Kalabaka→Tırhala 20 km,
  Kardiçe→Tırhala 25 km, Balçık→Varna 29 km, Dobriç→Varna 40 km. Golos ve Tutrakan için 40 km içinde nokta yok.

## 2. Yer yer tablo

| # | Yer | Durum | Osmanlı fethi (kaynak) | 1877-78 / devir | Eksik / şüpheli halka |
|---|---|---|---|---|---|
| 1 | İvranye (Vranje) | B | 1428 → 1444-11 Brankoviç'e iade → **Haziran 1455** kesin (TDV ivranye, Kiel) | Sırp işgali (gün yok) → Berlin md.36 | 1371-1402 Uglješa prensliği künyesiz, Sırp çerçevesinde gösterildi. 1413-07→1414-05 belirsiz (Niş deseni). 1428 için Kiel "Osmanlı kaynaklarında rastlanmamaktadır" diyor |
| 2 | Leskofça (Leskovac) | B | 1428 (TDV leskofca, Kiel) | Sırp işgali → Berlin "teyit eder" | **İç çelişki:** aynı madde "büyük ihtimalle 1433" de diyor; 1428 seçildi. 1281-1303 Sırp sahipliği bölgeden (TDV nis) taşındı |
| 3 | Kurşunlu (Kuršumlija) | B | 1433 "büyük ihtimalle" (Toplice). 1445-47 tahrirde Osmanlı'da | TDV leskofca/ivranye + Berlin md.36 | 1281 sahibi kasaba düzeyinde **kaynaksız** (TDV nis bölge cümlesi) |
| 4 | Ürküp (Prokuplje) | B | Kurşunlu ile aynı | aynı | aynı |
| 5 | Nikşiç (Nikšić) | **C** | 1455 (Britannica; TDV isa-bey 1455 has listesi) | Berlin md.28 (EB1911 adıyla anar) | ❌ **1356-1455 sahibi bulunamadı** (Zeta mı, Hersek/Kosača mı?) |
| 6 | Bar (Antivari) | B | 1571 (TDV arnavutluk, Britannica) | isg karadag 1878 (yıl), Berlin md.29 | 1403 sonrası Venedik ara dönemi yazılmadı. isg isteğe bağlı (Podgorica yazmıyor) |
| 7 | Ülgün (Ulcinj) | **C** | 1571 | Berlin md.29 Türkiye'ye iade → **25 Kasım 1880** Karadağ'a (EB1911) | ❌ **Zeta'dan Venedik'e geçiş yılı** bulunamadı (1403-1421 arası) |
| 8 | Kolaşin (Kolašin) | **C** | kale: Sultanzâde Mehmed Paşa (TDV), yıl yok | Berlin md.28 Kolaşin'i adıyla anmıyor, devir yalnız geometriden çıkarılıyor | ❌ **kuruluş yılı**. Teslim günü 4.10.1878 yalnız Vikipedi'de var, kullanılmadı |
| 9 | Tulça (Tulcea) | **C** | 1419 (TDV tulca) | Berlin md.46 (adıyla) | ❌ **1281-1419 sahibi**: Dobruca Despotluğu'nun künyesi yok, tarihler yok |
| 10 | Hırsova (Hârșova) | **C** | 1419 (bölge) | Berlin md.46 "Hirsovo" | ❌ 1281-1419. TDV'de maddesi yok |
| 11 | Mangalya (Mangalia) | **C** | 1419 (bölge) | Berlin md.2 + md.46 (adıyla) | ❌ 1281-1419 |
| 12 | Lofça (Loveč) | B | 1393 "sanılmaktadır" (TDV lofca, Kiel) | isg rusya 1877-08-23 (TDV) → v prenslik | İlk Rus işgali "5-15 Haziran 1877" **şüpheli**, yazılmadı. Fetret dönemi bölge deseniyle yazıldı |
| 13 | İslimye (Sliven) | B | 1370 "veya kısa süre sonra" (TDV islimye) | Doğu Rumeli (TDV bulgaristan adıyla sayar) | 1281'de Bizans mı Bulgar mı belli değil; komşu deseni (Bulgar) kullanıldı |
| 14 | Burgaz (Burgas) | **C** | bulunamadı | Doğu Rumeli (TDV bulgaristan) | ❌ **kuruluş, Osmanlı öncesi sahip, fetih**. Çelişki: Britannica "17. yy'da kuruldu" diyor, TDV bulgaristan Burgaz'ı 1543-84 yörük yerleşimleri arasında sayıyor |
| 15 | Hasköy (Haskovo) | **C** | kuruluş 1361 sonrası "tahmin" | Doğu Rumeli → 1885 (TDV haskoy--bulgaristan) | ❌ **kuruluş yılı** (yalnız Fâtih dönemi tahriri, yıl yok) |
| 16 | Ziştovi (Svishtov) — ek | B | 1388 (TDV zistova, Neşrî) | v prenslik | 1281 sahibi açık cümleyle verilmiyor (Tırnova çarlığının Tuna kıyısı) |
| 17 | Golos (Volos) | **C** | bulunamadı (1540 İnebahtı sancağı = üst sınır) | 1881 Tesalya | ❌ Osmanlı öncesi sahip ve fetih |
| 18 | Alasonya (Elassona) | **C** | 1389 "olmalıdır" (TDV alasonya, Kiel) | **1881'de Osmanlı'da KALDI** (TDV), Atina 1913-11-14 | ❌ **1356-1389 sahibi**. 1912 Yunan işgalinin günü yok |
| 19 | Kalabaka | **C** | 1394 (TDV tirhala, bölge) | 1881 | ❌ 1281-1349 (Batı Tesalya tarihsiz el değiştirme) |
| 20 | Kardiçe (Karditsa) | **C** | Osmanlı döneminde kurulmuş, yıl yok | 1881 | ❌ kuruluş yılı |
| 21 | Balçık (Balchik) | **C** | Temmuz 1389 / 1393 / 1418 (TDV balcik, Kiel) | 1878 prenslik · Bükreş 1913-08-10 | ❌ 1281-1389 (Dobruca Despotluğu) |
| 22 | Hacıoğlupazarcığı (Dobrich) | B | kur 1518 = ilk tahrir kaydı (TDV) | 1878 prenslik · Bükreş 1913-08-10 | kur kuruluş yılı değil, ilk kayıt yılı |
| 23 | Tutrakan | **C** | bulunamadı (1444'te Osmanlı garnizonu vardı = üst sınır) | 1878 · 1913 (bölge) | ❌ Osmanlı öncesi sahip ve fetih |

## 3. Kaynaklar

**TDV İslâm Ansiklopedisi.** Hepsi bu oturumda çekildi; önbellek scratchpad'de, `denetim/`a yazılmadı.
- Okunan maddeler: `ivranye` · `leskofca` · `lofca` · `islimye` · `haskoy--bulgaristan` · `tulca` · `zistova` (Ziştovi'nin slug'ı `zistova`dır, `zistovi` 302 veriyor) · `alasonya` · `tirhala` · `tesalya` · `balcik` · `hacioglupazarcigi` · `velestin` · `narda` · `ruscuk` · `balkan-savasi` · `karadag` · `arnavutluk` · `murad-ii` · `isa-bey` · `sancak--sirbistan` · `mehmed-pasa-sultanzade` · `romanya` · `deliorman`.
- Mevcut `denetim/` önbelleklerinden okunanlar: `dobruca` · `berlin-antlasmasi` · `bulgaristan` · `sirbistan` · `nis`.
- **Maddesi olmayanlar** (slug 302, aramada madde başlığı 0): Nikšić · Bar · Ülgün · Kolaşin · Hırsova · Mangalya · Burgaz · Ürküp · Kurşunlu · Golos · Kalabaka · Kardiçe · Tutrakan.

**Birincil metin.** Berlin Antlaşması'nın Fransızca metni, Université de Perpignan (`mjp.univ-perp.fr/traites/1878berlin.htm`):
- md. 2: Mangalia Romanya'ya
- md. 14: Doğu Rumeli
- md. 28: Karadağ sınırı (Tara–Mojkovac–Šiškojezero)
- md. 29: "Antivari … annexés au Monténégro", Ülgün ("Dulcinjo") Türkiye'ye iade
- md. 36: Sırbistan, Toplica/Morava havzaları
- md. 46: "Toultcha … Hirsovo …" Romanya'ya

**Akademik ansiklopediler.**
- Britannica (`Niksic`, `Bar-Montenegro`, `Burgas`, `Mangalia`, `Svishtov`). Siteye 403 geldi, yeniden denenince açıldı.
- EB1911 "Montenegro" (Wikisource sayfa görüntüsü; Vikipedi değil): Berlin md. xxviii'nin içeriği ve Dulcigno'nun 25 Kasım 1880'de teslimi.

**Koordinatlar.** GeoNames arama sayfasından, şehir/idari merkez satırı alındı. Bar için Osmanlı kasabası Stari Bar kullanıldı (42.097/19.136).

**Kullanılmayan kaynaklar.**
- Vikipedi: Kolaşin'in 4.10.1878 teslimi ve "Berlin'le Kolaşin'i ilhak" cümlesi. Tek dayanak olacağı için kullanılmadı.
- Hansard 1880: konuyla ilgili bir şey içermiyordu.

## 4. Koordinatöre — karar ve ek iş gerektirenler

1. **Değişmez 2 — kronolojisi olmayan yeni `d:`/`v:` kırılmaları.** Taşınırsa madde gerekir. Ölçüm: `olaylar*.js`, ±30 gün.
   - Eksik maddeler: İslimye `1370-01-01` · Kurşunlu/Ürküp `1433-01-01` · Ülgün `1880-11-25` · Lofça isg `1877-08-23` (2i) · Balçık `1389-07-01` / `1390-01-01` / `1418-01-01`.
   - Maddesi olanlar: 1388-01-01 · 1393-01-01 · 1428-01-01 · 1444-11-10 · 1455-06-01 · 1571-01-01 · 1878-07-13 · 1885-09-18 · 1908-10-05 · 1402-07-28 · 1413-07-05.
2. **Dobruca deseni çelişkisi.**
   - Komşular (Babadağı, Köstence, İshakçı, Silistre) "bulgaristan →1393-09-01, fetret, d 1413-07-05" yazıyor. Bu kayıtların kaynağı yok.
   - TDV dobruca/balcik/tulca ise başka bir zincir veriyor: Mircea 1390-93 ve 1402-1418, Osmanlı 1418/1419.
   - TDV içinde de bir yıllık fark var: Balçık için Kiel 1418 diyor, tulca/dobruca 1419.
   - Hüküm sizde. Taslaklar TDV'yi izliyor.
3. **Tesalya 1881 günü.** `1881-07-02` komşularda ve kronolojide kaynaksız (`gun:"1881"`). TDV yalnız yıl veriyor; TDV narda Arta için "6 Temmuz 1881" diyor. Taslaklar senkron bozulmasın diye 07-02'yi kopyaladı ve ⚠️ ile işaretledi.
4. **1885-09-18.** TDV yalnız yıl veriyor. Gün `sarki-rumeli` künyesinden devralındı (künyenin kaynağı "standart akademik"). D210 bildirimi yapılmıştır.
5. **Kiel'in iki maddesi birbiriyle çelişiyor.**
   - `leskofca`: 1444 Segedin'de Kruševac/Dubočica Osmanlı'da kaldı.
   - `ivranye`: "1428’de Brankoviç’ten alınan topraklar … iade edildi".
   - Leskofça için tahrir kaydı (1445-47) Osmanlı'yı destekliyor. İvranye için iade yazıldı.
6. **Tuzaklar.**
   - TDV `zistovi-antlasmasi`daki "eski Hırsova" = **Orsova**dır, Dobruca'daki Hırsova değil.
   - TDV `sancak--sirbistan`daki "Kolašin kazası" 1878 sonrası Yenipazar sancağında kalan ayrı bir birimdir (İbar Kolaşini), Karadağ'daki Kolaşin kasabası değil.
7. **Bilerek yazılmayan işgaller (gün yok):**
   - Sırp 1877-78 (dört Sırp kasabası)
   - Karadağ 1877-78 (Nikšić, Ülgün)
   - Bulgar 1915-18 (İvranye) ve 1916-18 (Güney Dobruca)
   - Osmanlı 1897 (Golos)
   - Rus 1877-78 (İslimye, Ziştovi, Dobriç)
   - Yunan 1912 (Alasonya)
8. **`_taslak` alanı** `girdi.py`de tanımlı değil. Taşırken silinmeli. `????` içeren kayıtlar (C) motoru kırar.
