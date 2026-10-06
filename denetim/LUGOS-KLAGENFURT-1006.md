# LUGOS-KLAGENFURT-1006 — Lugos 1918-1920 · Klagenfurt 1335 · Mustafapaşa 1361

**Oturum:** LUGOS-KLAGENFURT-1006 (eski adı Hazır kıta 0510 2217) · görev: UMIT İRTİBAT, 6 Ekim 2026
**Temel:** `origin/makine/umit` `4d5b5f96` · ağaç `C:\atlas-p84-lugos` · YALNIZ ÖLÇÜM + ÖNERİ, veri dosyasına yazılmadı
(diff'ler ağaca yalnız ÖLÇÜM için geçici uygulandı, `git checkout -- data/` ile geri alındı).
**Teslim:**
- `denetim/LUGOS-KLAGENFURT-1006.md` (bu rapor)
- `denetim/LUGOS-KLAGENFURT-1006-KOORD.diff` — 3 yerleşim kaydı → **KOORDİNATÖR** (`yerlesimler.js` · `yerlesimler_a78_avrupa.js` · `yerlesimler_ek24.js`)
- `denetim/LUGOS-KLAGENFURT-1006.diff` — 2 kronoloji maddesi → **UMIT parti sırası** (`olaylar_ok109.js` · `olaylar_ek16.js`)

İkisi de `4d5b5f96` üstünde `git apply --check` **temiz**, satır sonu LF (CR bayt **0**), **UYGULANMADI**.
Diff'ler betikle üretildi; bütün tırnaklar diff yazılmadan önce çekilmiş kaynak gövdesine karşı **birebir** sınandı
(eşleşmeyen tırnak betiği durdurur). Her değiştirme tam 1 eşleşme istedi (`yerlesimler_ek24.js`te kalıp 3 kayıtta
geçiyordu — kapı yakaladı, değiştirme Mustafapaşa kaydının içine daraltıldı).

---

## 0. Mükerrer kapısı (içerikle tarandı, `grep -l` + hükme bakıldı)
| kalem | daha önce | o raporun HÜKMÜ | bu rapor |
|---|---|---|---|
| Lugos 1918 | `KRONO-TUNA-0929-YERLESIM-ONERI` Ö-Y6 · `ONCE1281-MACAR-TAC-1004` · `P84-BRASSO-TEMESVAR-1006 §4` | üçü de **"ölçülmedi / ayrı borç / ayrı kalem"** — hüküm YOK | ölçer |
| Klagenfurt 1335 | `KRONO-ORTA-AVRUPA-0929-YERLESIM-ONERI` Y2 (ORA-Y2) · `P84-TRAKYA-MACARISTAN-1006` | Y2: yıl 1335, **gün doğrulanmadı (yalnız Vikipedi aynası)**, "TASARIM KARARI" diye bırakıldı · P84-TRAKYA: diff'e alınmadı | kaynağı bulur, tasarım sorusunun bugünkü hâlini ölçer (§2.4) |
| Mustafapaşa 1361 | `P04-BALKAN-0914` (T4) · `UYGULA-0916` (T4 **BEKLETİLDİ**) · `KORIDOR-0081` ⑦ (anakronizm şüphesi) | P04: TDV murad-i sırasına göre **1366** önerisi, Çirmen sorusuna bağlandı, bekletildi · KORIDOR: "ŞÜPHE, hüküm değil" | **yeni ölçüt:** kasabanın KENDİ TDV maddesi (§3) |

---

## Ö. ÖNGÖRÜ — kaynak ölçümünden ÖNCE yazıldı (zincirler dökülmüştü, kaynak okunmamıştı)
- **Sayı:** 3 kalemin **3'ünde** atlas yanlış.
- ① Lugos: 1918-01-01 yıl-temsilî; doğrusu Temeşvar emsali (1918-11-11 naiplik → 1920-06-04 Romanya). Lugoj Sırp işgaline
  girmedi, Romen `isg:` Temeşvar'dan önce başlar (1919 bahar); şehir günü kurumsal kaynakta **büyük olasılıkla yok**.
- ② Klagenfurt: 1335-05-02 (Linz beratı), kurumsal kaynak yıl verir, gün belki.
- ③ Mustafapaşa: kesin fetih yılı bulunamaz; öneri Çirmen kararına bağlı kalır. Kasaba 16. yy köprüsüyle kurulmuş olabilir.

**Karşılaştırma (ölçümden sonra):**
- Sayı **TUTTU** (3/3 yanlış).
- ① Zincir TUTTU. "Bahar 1919" **ÇÜRÜDÜ**: Romen girişi **22 Temmuz 1919**, Temeşvar'dan yalnız 12 gün önce. "Şehir günü yok"
  **ÇÜRÜDÜ**: iki bağımsız gazete aynı günü veriyor; kurumsal kaynak (MNIR) yalnız AY'ı doğruluyor. "Sırp işgaline girmedi":
  **ölçülemedi** (iki yönde de kaynak bulunamadı, §1.2).
- ② Yıl TUTTU. Gün **çürüdü**: kurumsal kaynak yalnız *"Anfang Mai 1335"* diyor ⇒ AY.
- ③ "Bulunamaz" **ÇÜRÜDÜ**: TDV'de kasabanın kendi maddesi var (`cisr-i-mustafa-pasa--kasaba`) ve bölgeyi açıkça Edirne'nin
  fethine bağlıyor. "Çirmen kararına bağlı" da çürüdü: madde Çirmen'den bağımsız hüküm veriyor. Anakronizm TUTTU (aynı madde).

---

## 1. LUGOS (Lugoj, Banat)

### 1.1 Bugünkü zincir — `data/yerlesimler.js:495-509`
```
s: … 1716-01-01 → 1918-01-01  macaristan-habsburg   kesinlik:"yil"
     1918-01-01 → 1923-10-29  romanya-kralligi      kesinlik:{f:"yil"}  kaynak: TDV timisvar "Barış antlaşmalarına göre Banat bölgesi …"
isg: YOK
```
Komşular: Temeşvar (`yerlesimler.js:489`, 53 km) ve Yanova (`:1364`) **F8 düzeninde**: `macaristan-habsburg → 1918-11-11
macaristan-naiplik → 1920-06-04 romanya-kralligi` + Temeşvar `isg: 1919-08-03 romanya-kralligi`.
⇒ Lugos haritada **1918 Ocak'tan** Romen; komşusu 1920 Haziran'a kadar Macar. Aynı bölge iki günde.

### 1.2 Kaynak (birebir; denendi 6 Ekim 2026)
- **TDV `timisvar`** (kaydın kendi kaynağı) — *"Barış antlaşmalarına göre Banat bölgesi Romanya ve Sırbistan arasında
  bölüşüldü"*: cümle bir **antlaşmayı** tarihliyor, 1918 başını değil (`§4 ⑧`). 1918-01-01 bu cümleden türetilemez.
- **MNIR, Muzeul Virtual al Unirii** (mvu.ro, *"How Transilvania, Banatul, Crisana and Maramuresul got togheter"*) — kurumsal,
  **BÖLGE düzeyi**: *"The Romanian administration was installed in the bumble Banat, in the part attributed to Romania, only
  in July 1919."* Şehre taşınmadı (`D208`); AY'ı doğrular.
- **Actualitatea** (Lugoj gazetesi, 30.07.2019) — *"Marți, 22 iulie 1919 . La ora 14 trenul G.1 a sosit în Lugoj."*
  (aynı yazıda Caraş-Severin prefekti George Dobrin'in karşılama konuşması ve General Jitianu'nun cevabı).
- **Ziua de Vest** (gazete, 04.08.2015; Temeşvar kaydının kaynağıyla aynı yayın, ayrı yazı) — *"la întâmpinarea glorioasei
  armate române, la 22 iulie 1919. Populaţia Lugojului a făcut coloanelor o primire triumfală."*
- İki gazete **bağımsız** iki yazı, aynı gün. Kırmızı listede değil (gazete; Temeşvar `isg:`i de gazeteye dayanıyor —
  emsal). Kurumsal bir ŞEHİR günü **bulunamadı**.

**Bulunamayan:** Lugoj'a 1918 Kasım–1919 Temmuz arasında Sırp ya da Fransız birliklerinin girdiğine dair ŞEHİR düzeyinde
kaynak. MNIR yalnız Banat için *"territory occupied by the Serbian and French armies"* diyor (bölge hükmü). Arama motoru
özetinde "Sırplar 14 Kasım 1918'de Lugoj'a girdi" cümlesi çıktı ama **kaynağı gösterilmedi** — kullanılmadı.

### 1.3 Fark
- 1918-01-01 → 1918-11-11: **10 ay** boyunca Lugos yanlış devlette (Romen yerine Macar tacı olmalı).
- 1918-11-11 → 1920-06-04 `macaristan-naiplik` ara dönemi **yok** (F8 ile tutarsız).
- 1919-07-22 fiilî Romen idaresi **yok**.

### 1.4 Öneri — `-KOORD.diff` (UYGULANMADI)
```
s: … 1716-01-01 → 1918-11-11  macaristan-habsburg   kesinlik:{f:"yil"}   (t: Banat emsali; eski t yıl-temsilîydi)
     1918-11-11 → 1920-06-04  macaristan-naiplik    (F8 kaynak metni Temeşvar'dan birebir)
     1920-06-04 → 1923-10-29  romanya-kralligi      (F8 + TDV timisvar cümlesi korundu)
isg: 1919-07-22 → 1920-06-04  romanya-kralligi      (Actualitatea + Ziua de Vest birebir · MNIR AY/bölge)
```
- `isg:` Sırp/Fransız dönemi **yazılmadı** (kaynak yok). Bu pencerede Lugos `macaristan-naiplik` görünür — Temeşvar'ın
  P84-BRASSO öncesi hâliyle aynı sınıf, bilinçli.
- **Kronoloji (UMIT `.diff`):** yeni madde **1919-07-22** *"Romen birlikleri Lugoj'a (Lugos) ulaştı"*, `yer_id:"Lugos (Lugoj)"`,
  Temeşvar 1919-08-03 maddesinin hemen önünde. Mükerrer taraması: `data/` altında 1919-07 Lugoj maddesi **0**.

---

## 2. KLAGENFURT

### 2.1 Bugünkü zincir — `data/yerlesimler_a78_avrupa.js:111-113`
```
s: 1281-01-01 → 1526-08-29 almanya · 1526-08-29 → 1918-11-12 avusturya · 1918-11-12 → avusturya-cumhuriyet
kaynak: "Karintiya merkezi; 1335'ten Habsburg (1526 öncesi Kutsal Roma = almanya, Viyana emsali künyeye göre)."
```
Kaydın kendi kaynak alanı 1335 diyor, zincir 1526-08-29 (Mohaç, **Macar tacının günü** — Karintiya için anlamsız) diyor.

### 2.2 Kaynak (birebir)
- **NDB "Ludwig der Bayer"** (Neue Deutsche Biographie, deutsche-biographie.de/gnd118574957.html) — *"bereits Anfang Mai 1335"*
  … *"die österr. Herzöge mit Kärnten belehnt"* ⇒ **AY** (gün yok).
- **AEIOU / Austria-Forum, "1335 Erwerbung Kärntens"** — *"1335 belehnte der Kaiser die Habsburger mit Kärnten, das seither
  mit Österreich verbunden blieb."* ve *"1286-1335 regierten in Kärnten die Herzöge aus dem Haus Görz-Tirol"* ⇒ YIL; 1281-1335
  `almanya` doğru.
- NDB "Albrecht II." (Otto Brunner) — *"Zu diesem Besitz gewann er u. a. 1335 Kärnten und Krain"* (YIL, ek tanık).
- **2 Mayıs günü: DOĞRULANMADI.** Yalnız Vikipedi ve onun aynası veriyor (ORA-Y2 de aynı yerde kalmıştı). Regesta Imperii
  arama sayfası **403** döndü. habsburger.net yalnız yıl veriyor.

### 2.3 Fark
`almanya` 1335 → 1526 = **191 yıl** fazla. "Viyana emsali" iddiası da yanlış: Viyana ve Graz **1281'den** `avusturya`.

### 2.4 Tasarım kararı (ORA-Y2) bugün nerede — ölçüldü
ORA-Y2 (29 Eylül) veraset ülkelerini "1282'den mi `avusturya`, emsal mi korunsun" diye Emre'ye bırakmıştı. Bugünkü veri:
Viyana · Graz `avusturya` **1281**'den; Ljubljana `avusturya` **1335-05-02**'den; Linz · Maribor · Klagenfurt hâlâ
`almanya → 1526`. ⇒ Veri **ikisinin de değil**; ama aynı 1335 beratıyla gelen **Ljubljana zaten (a)** seçeneğinde.
Klagenfurt'u 1335'e çekmek yeni bir tasarım seçimi değil, **aynı belgenin öbür yarısını Ljubljana ile eşitlemek**tir.
Hüküm yine koordinatörde; ben (a) yönünde diff verdim.

### 2.5 Öneri — `-KOORD.diff` (UYGULANMADI)
```
s: 1281-01-01 → 1335-05-01 almanya · 1335-05-01 → 1918-11-12 avusturya  kesinlik:{f:"ay"} · (sonrası aynen)
```
- `1335-05-01` = *"Anfang Mai"* AY kodlaması (`D213`); gün kaynakta yok, `kaynak`ta yazılı. Habsburg künyesi `f:1282-01-01`
  ⇒ pencere içinde.
- Kaydın genel `kaynak`ı düzeltildi: "Viyana emsali" iddiası kaldırıldı, 1286-1335 Görz-Tirol tanığı eklendi.
- **Kronoloji (UMIT `.diff`):** `olaylar_ek16.js` 1335 maddesi → `t:"1335-05-01", kesinlik:"ay"` (eski `1335-05-02` ve
  `gun:"2 Nisan…"` kaynaksızdı) · `yer:"Ljubljana, Klagenfurt"` · `kaynak:"bulunamadı …"` → NDB + AEIOU birebir.
  **Niçin şart:** bu madde olmadan Klagenfurt'un yeni 1335-05-01 kırılması **2s AÇIK** kalıyor (ölçüldü, §4): madde
  yalnız Ljubljana'yı anıyor, tarafı da başlıkta tanınmıyor.

---

## 3. MUSTAFAPAŞA (Svilengrad)

### 3.1 Bugünkü zincir — `data/yerlesimler_ek24.js:93-95`
```
s: 1281-01-01 → 1361-01-01 bizans · … · d: 1361-01-01 → 1402-07-28 (kaynak YOK) · 1413-07-05 → 1913-09-29
```
Komşular: Edirne `1361-05-05` (TDV murad-i, gün) · Çirmen (5 km, Meriç'in öbür yakası) `1371-09-26`.
⇒ Mustafapaşa Edirne'den **4 ay**, kendi komşusu Çirmen'den **10 yıl** önce Osmanlı.

### 3.2 Kaynak (TDV, birebir)
- **TDV `cisr-i-mustafa-pasa--kasaba`** (başlık araması `Svilengrad` ile bulundu; `cisr-i-mustafa-pasa`, `svilengrad`,
  `mustafapasa-koprusu`, `mustafa-pasa-koprusu`, `cisr-i-mustafapasa` slug'ları **302**) — *"Kasabanın bulunduğu bölge, 1362
  yılında Edirne’nin fethi sırasında Osmanlı idaresine girmiş olmalıdır."* Ve kuruluş: *"Buranın Cisr-i Mustafa Paşa adıyla
  bir kasaba haline gelmesi ise muhtemelen III. Murad devrinden (1574-1595) itibaren olmuştur."*
- **TDV `murad-i`** (İnalcık) — *"Edirne halkı şehri teslim etti (28 Cemâziyelâhir 762 / 5 Mayıs 1361)"*. 1366 seferinde
  Çirmen'in teslimini anlatıyor; **Mustafapaşa'yı anmıyor** — P04-BALKAN'ın "1366 Mustafapaşa" satırı bir bölge çıkarımıydı.
- **TDV `cirmen`** — Çirmen de *"I. Murad zamanında Edirne’nin fethi sırasında Osmanlı topraklarına katılmış"*.
- ⚠️ **TDV kendiyle çelişiyor (bildirilir, taraf seçilmedi):** `cisr-i-mustafa-pasa` Edirne'nin fethini **1362**'ye,
  `murad-i` **1361**'e koyuyor. Atlasın Edirne kaydı `murad-i`yi izliyor; öneri ona uydu.

### 3.3 Fark
1361-01-01 hiçbir kaynağa dayanmıyor (Edirne'den önce). Kasabanın kendi maddesi bölgeyi Edirne'nin fethine bağlıyor.

### 3.4 Öneri — `-KOORD.diff` (UYGULANMADI)
`s: bizans t:1361-01-01 → 1361-05-05` · `d: f:1361-01-01 → 1361-05-05` + `kaynak`:
**gün komşudan: Edirne · TDV murad-i** (`D207` şartları: komşunun günü kendi kaynağında ✓ · hedefte gün yok ✓ · **aynı olay,
hedefin kendi maddesi söylüyor** ✓ · 30 km ✓ · zincirleme değil ✓). Madde'nin *"olmalıdır"* çekincesi `kaynak`ta yazılı.
- **Nokta bir BÖLGE vekilidir:** kasaba 16. yy sonunda kuruldu (aynı madde). Nokta silinirse Meriç vadisi Edirne/Çirmen
  peteklerine emilir; bu öneri noktayı bırakıp `kaynak`ta beyan ediyor (`kur:` YAZILMADI — yazılırsa 1361-1574 delik açar).
- Bu, P04-BALKAN T4'ün bekleyen **Çirmen** sorusunu çözmez ama **ona bağlı da değildir**. Yan not: TDV `cirmen` da
  "Edirne'nin fethi sırasında" diyor (P04'ün iki seçeneğinden 1361'i destekleyen ikinci TDV maddesi) — Emre sorusuna girdi.

---

## 4. ÖLÇÜM — `py arac/denetle.py`, önce / sonra (diff'ler ağaca geçici uygulandı, sonra geri alındı)
**Ek öngörü** (uygulanmadan önce yazıldı): D1/D2 değişmez · 2s 1720→1721, AÇIK 186→186..187, YIL-TEMSİLÎ 165→164 ·
2sk 2247→2247..2249 · 2i 171→172..173, açık 1→1..2 · mükerrer 95 =.

| soru | ÖNCE | yalnız KOORD | KOORD + UMIT | yalnız Lugos (KOORD Lugos + UMIT madde) |
|---|---|---|---|---|
| çıkış | **2** (yalnız D8 ÖLÇÜLEMEDİ: `devletler_harita.js` yok, taze ağaç) | 2 | 2 | 2 |
| D1 sahipsiz | 309 / 4299 | = | = | = |
| D2 | 623 / 0 açık | = | = | = |
| 2s kırılma · AÇIK · yıl-temsilî | 1720 · 186 · 165 | 1721 · **187** · 165 | 1721 · **186** · 165 | 1720 · 186 · 165 |
| **2sk yalnız-taraf** | 2247 (tavan 2247) | **2249 ⚠️** | **2249 ⚠️** | **2249 ⚠️** |
| 2i | 171 / 1 açık | 172 / 1 | 172 / 1 | 172 / 1 |
| 2t · mükerrer | 13 · 95 | = | = | = |
| D7 | 733 | 733 (muaf `kucuk-devlet` 306→307) | — | — |

**Okuma:**
- **2s AÇIK +1 = Klagenfurt 1335-05-01** (`--ayrinti`: *"1335-05-01 (1) Klagenfurt | en yakın …: Habsburgların Karniyola ve
  Karintiya'y…"*). UMIT diff'i (madde Klagenfurt'u anıyor) onu kapatıyor: 187 → **186**. ⇒ İki diff **birlikte** inmeli.
- **2sk +2 = Lugos** (yalnız-Lugos ölçümü ayırdı: GÜN TARAF 1584→1586). Lugos'un 1918-11-11 ve 1920-06-04 kırılmaları Temeşvar
  ve Yanova'yla aynı tarih biriminde, **yalnız TARAF** ile kapanıyor (ateşkes/Trianon maddeleri Lugos'u anmıyor). Sınıf:
  **F8 Banat emsali, künye devralması DEĞİL**. ⇒ Ya `BEKLENEN` 2247→**2249** (koordinatör, `§3.4 ②` gereği KOORD diff'iyle
  **aynı commit'te**), ya da UMIT Trianon maddesinin yer listesine Lugos'u ekler. Önerim: tavan — Temeşvar/Yanova aynı sınıfta
  zaten tavanın içinde, Lugos'u ayrı tutmak tutarsız olur.
- **2i:** yeni `isg:` 1919-07-22 kırılması açık **kalmıyor** — ama madde olmadan da kapanıyordu (yalnız-KOORD sütunu), çünkü 2i
  eski "takvim yakınlığı" kolunda; Temeşvar 1919-08-03 maddesi 12 gün uzakta. Lugoj maddesi kapıyı değil **dürüstlüğü** düzeltiyor.
- **Öngörünün karşılaştırması:** 2s kırılma, 2s AÇIK aralığı, 2sk aralığı, 2i TUTTU. **YIL-TEMSİLÎ 165→164 ÇÜRÜDÜ:**
  165'te kaldı. Olası mekanizma (ÖLÇÜLMEDİ): kapanış birimi tarih başınadır, ve **Orsova** aynı 1918-01-01 biriminde hâlâ
  duruyor. Mükerrer 95 = TUTTU (yeni Lugoj maddesi dedektörde çift üretmedi).
- D7 `kucuk-devlet` muafı +1: hangi gövde olduğu **ölçülmedi** (başlık 733 değişmedi).
- **Değişmez 8 ölçülemedi** (taze ağaç, `devletler_harita.js` yok) ⇒ Lugos'un yeni Macar penceresinin D8 hatlarıyla
  ilişkisi ölçülmedi. `LAB-D8-UYE-1005` defterinde `d1920-hu-ro-fiili|1920-03-31|sag|Lugos (Lugoj)` satırı var; Lugos
  1920-03-31'de artık `macaristan-naiplik` + `isg romanya` olacağından o satırın kovası değişebilir. **Koşu sonrası ölçülmeli.**

---

## 5. YAN BULGULAR (kapsam dışı — yazılmadı, adıyla)
- **Orsova (Eski Orsova)** `yerlesimler.js`: aynı `1918-01-01 romanya-kralligi` yıl-temsilîsi (TDV timisvar cümlesi). Lugos'la
  aynı sınıf; YIL-TEMSİLÎ birimini muhtemelen o tutuyor (ölçülmedi). Ayrı kalem önerilir (Orsova'nın Romen giriş günü aranmadı).
- **Ljubljana** `s: 1335-05-02` ve 1335 maddesi: gün kaynaksız (yalnız Vikipedi). UMIT diff'i maddeyi 1335-05-01/AY yapıyor;
  Ljubljana kaydı 1 gün farkla kalıyor (±30 içinde, kapı etkilenmez). Krain'in Mayıs beratı NDB "Ludwig"de **adıyla yok**
  (yalnız Kärnten) ⇒ Klagenfurt kaynağı Ljubljana'ya taşınmadı (`D207` zincirleme).
- **Linz · Freistadt · Gmünd · Maribor · Innsbruck · Landeck · Feldkirch · Bregenz · Lienz**: hâlâ `almanya → 1526-08-29`
  (ORA-Y2). Maribor P84-TRAKYA'da önerildi; ötekiler bekliyor.
- **Mustafapaşa 1829 ve 1878 Rus işgalleri**: TDV aynı maddede *"Kasaba 1829 ve 1876 yıllarında Rus orduları tarafından işgal
  edildi"* — `isg:` yok. ⚠️ "1876" Rus-Osmanlı savaşıyla (1877-78) uyuşmuyor; TDV'nin kendi yazımı, düzeltilmedi, **bildiriliyor**.
- **Çirmen 1371-09-26**: TDV `cirmen` "Edirne'nin fethi sırasında", TDV `murad-i` 1366 teslim — veri ikisine de aykırı (P04 T4,
  hâlâ Emre sorusu).

## 6. BULAMADIM / ÖLÇMEDİM (denenen yollar adıyla — 6 Ekim 2026)
- Lugoj'a Sırp/Fransız girişi (Kasım 1918) — kurumsal/akademik kaynak **bulunamadı**; MNIR yalnız bölge.
- Klagenfurt beratının günü (2 Mayıs) — Regesta Imperii arama **403**; NDB Albrecht II / Ludwig / Margarethe Maultasch,
  Austria-Forum iki sayfası, habsburger.net okundu: hiçbiri gün vermiyor.
- TDV arama sayfası (`/arama/?q=…`, `&p=t` dahil) curl ile **madde bağlantısı döndürmedi** (çirmen gibi canlı madde için de);
  `ARAC-TDV-CIKARICI-1006.py baslik` (`&p=m`) çalıştı ⇒ bu arama yolu ADAY üretiyor, düz sorgu üretmiyor.
- Değişmez 8 · `odak_olc.py` · `denetle_yayin.py`: koşturulmadı (taze ağaç; yeni maddenin `yer_id`si mevcut yerleşim adı).
