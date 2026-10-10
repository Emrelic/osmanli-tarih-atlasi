# KASA-BAYAT-OZILAN-1010 — bayat öz-ilan taraması (üç kova)

Görev: YILDIRIM BAYEZIT (M-5905 ④ + son hüküm ⑥: "formülü bekleme, ③'e geç") · Araştırmacı: KASA · salt okuma.
**Bağlayıcı dört şart:**
1. ÜÇ kova ayrı sayılır. "raporda/bildirildi/çelişki" ibareleri ⓑ'ye değil ⓒ ADAYINA düşer; ⓒ kararı VERİYE bakılarak
   verilir.
2. Çıktı LİSTE: kayıt adı + dosya + kova.
3. Hiçbir eski ilan silinmez, çürütme yanına yazılır.
4. Desen `girdi.yukle()` ile kurulur, grep ile değil.

Kovalar:
- ⓐ **SUSAN** — ilan var ama hata, ilanın sustuğu aralıkta (Mljet).
- ⓑ **BAYAT** — ilan çözülmüş bir sorunu açık gösteriyor (Bosna ×5).
- ⓒ **DOĞRU ama UYGULANMAMIŞ** — ilan doğru, raporlanmış, veriye inmemiş (Novi).
- Kova dışı, sayılır ama listelenir:
  - **GEÇERLİ**: ilan bugün de doğru.
  - **İLGİSİZ**: desen tuttu ama cümle bir öz-ilan değil, ya da yıl başka bir olayın.

## Evren (ölçüldü — `girdi.yukle()`, @ 6f9e5fb7; SINIFLANDIRMA YAPILMADAN)
- Taranan: **4300** kayıt.
- Kayıt düzeyinde (`neden`/`not`/`kaynak`) öz-ilan deseni taşıyan: **857** (kaynak 789 · not 40 · neden 38).
  - Desen: araştırılmadı · bulunamadı/bulunamadi · doğrulanamadı · kaynağı yok · komşu emsal.
  - ⇒ Hepsine elle bakılmaz.
- **Mekanik aday kümesi B1** (ⓑ adayı): öz-ilan CÜMLESİNDE geçen bir yıl, kaydın HİÇBİR dilim sınırında / `kur` /
  `bit`'te YOK. Yani ilan, verinin artık taşımadığı bir tarihe atıf yapıyor. ⇒ **29 kayıt, 35 cümle.**
  - Doğrulama: bilinen 5 bayat Bosna kaydından **2'sini** yakalıyor (Brod, Jasenovaç: "1538").
  - Kalan 3'ün ilan yılları hâlâ bir sınırda ⇒ **B1'in duyarlılığı bilinen pozitiflerde 2/5** (beyan; B1 bayatlığın
    yalnız "tarih kayması" yüzünü görür).
- **Mekanik aday kümesi C** (ⓒ adayı, şart ①): herhangi bir metin alanında (kayıt + dilim `kaynak:`)
  raporda/rapora/raporlandı/bildirildi/çelişki rapor ⇒ **23 kayıt.**
- **Bakılacak:** B1 ∪ C = en çok 52 kayıt — HEPSİNE elle (veriye bakarak) bakılır.
- **ⓐ SUSAN mekanik olarak ÖLÇÜLEMEZ:** ilanın sustuğu yerdeki hatayı görmek gövde ölçümü ister ⇒ bu taramada **0
  beklenir**, bulunursa yan bulgu.

## 0. ÖNGÖRÜ (sınıflandırmadan ÖNCE — ayrı commit)
- **B1 (29 kayıt):** ⓑ BAYAT **8 ± 4** · GEÇERLİ **13 ± 5** · İLGİSİZ **6 ± 3** · ⓒ **1 ± 1**.
- **C (23 kayıt):**
  - ⓒ (raporlanmış, veride UYGULANMAMIŞ) **6 ± 3**.
  - ⓑ (raporlanmış VE uygulanmış, ifade bayat) **7 ± 4**.
  - İLGİSİZ ("rapor" başka anlamda: dış rapor, denetim dosyası) **8 ± 4**.
  - GEÇERLİ **2 ± 2**.
- **B1 ∩ C:** **2 ± 2** kayıt.
- **Novi tipi YENİ bir veri hatası** (ⓒ'de, kaynakla teyitli, veri ≠ kayıt içi kaynak) en az 1: **%70**; ≥ 3: %25.
- **Dosya yoğunlaşması:** ⓑ+ⓒ'nin ≥ %50'si **en çok 3 dosyada** (paket-paket güncelleme deseni — Bosna ek29 gibi):
  **%65**.
- **Diff:** ⓒ'lerin veriye bakılarak teyit edilenleri + ⓑ'lerin yanına "⇒ GÜNCEL DEĞİL" notu ⇒ bir diff; tam `denetle`
  ⓑ notları için tabanla AYNI %95, ⓒ düzeltmeleri için kapı sayısı değişebilir.

## 1. ÖLÇÜM (B1 ∪ C = 47 ayrı kayıt; HEPSİNE elle, veriye bakarak)
B1 ∩ C = 5 kayıt (Brod, Jasenovaç, Çaldıran, Başkale, Sambalpur) ⇒ 29 + 23 − 5 = **47**. Kova kararı kayıt başına,
ⓒ kararları VERİ okunarak (şart ①).

### 1.1 LİSTE (şart ②)
| kova | kayıt | dosya | gerekçe (veri okundu) |
|---|---|---|---|
| ⓑ BAYAT | Bosna Brod'u | yerlesimler_ek29.js | `neden:`/`kaynak:` "1538 komşu emsali" + s[0]/s[1] "(atlas 1538 — çelişki raporda)" — veri 1536 (BOSNA-MACAR-0087) |
| ⓑ BAYAT | Jasenovaç | yerlesimler_ek29.js | aynı |
| ⓑ BAYAT | Çaldıran | yerlesimler_ek26.js | `neden:` "atlas Van kaydı 25 yazıyor, fark raporda" — Van artık **1548-08-24** (ölçüldü) |
| ⓑ BAYAT | Başkale | yerlesimler_ek26.js | aynı |
| ⓒ UYGULANMAMIŞ | Bosna Novi'si | yerlesimler_ek29.js | "Osmanlı 1557 (atlas 1556 — çelişki raporda)" — veri 1556 ⇒ **KASA-BOSNA-EK29 diff'inde çözülüyor** |
| ⓒ UYGULANMAMIŞ | **Uyvar** | yerlesimler.js | s[0]: "⚠️ nokta 1545'te KURULDU (kur: yok, ayrıca bildirildi)" (TDV uyvar: kale 1545'te Estergon başpiskoposunca) — veri: `kur` YOK, `macaristan 1281 →` ⇒ kur hükmü sınıfı (Feyzâbâd emsali: öncül yerleşim var mı ölçülmeli) |
| ⓒ UYGULANMAMIŞ | **Lugos → Temeşvar** | yerlesimler.js | Lugos s[1] (enklav:true): "Ferdinand 1551'de Banat kalelerinin HEPSİNİ (Temesvár, Lippa … Lugos …) aldı; ada, komşu Temeşvar kaydının bu dönemi taşımamasından doğuyor (Temeşvar 1552'ye kadar macaristan — raporda kayıtlı)" — veri: Temeşvar `macaristan 1281 → 1552-07-27`, 1551-07 → 1552-07 Ferdinand dilimi YOK ⇒ Lugos enklavı canlı. Kayıt-içi tanık B 0013/988 ('július 16-ika körül') — **KASA doğrulamadı** |
| ⓒ UYGULANMAMIŞ | **Cizre** | yerlesimler_ok107.js | `neden:` "Cizre/Bohtan emirliği künyesi YOK … KUNYE ONERISI raporda" — `devletler.js`'te cizre/bohtan/botan kimliği **0** (ölçüldü); veride 1508 → 1515-09-19 deliği sürüyor |
| ⓒ UYGULANMAMIŞ | **Rykovskoye (Kirovskoye)** | yerlesimler_a78_asya.js | s[2]: "1920-07-03 → 1925-05-15 JAPON İŞGALİ (FRUS 1921 II belge 656 · FRUS 1925 II belge 563) — isg YAZILMADI, koordinatöre bildirildi" — veride `isg` YOK |
| ⓒ UYGULANMAMIŞ | **Onor** | yerlesimler_a78_asya.js | aynı cümle, `isg` YOK |
| GEÇERLİ | Kirmanşah | yerlesimler.js | "1588-1604 ADIYLA kaynak BULUNAMADI" hâlâ doğru; d 1590-1603 açıkça Emre kararı + komşu-kuşak dayanağı (kayıt bunu söylüyor) |
| GEÇERLİ | Deyrülkamer · Katar Yarımadası · Şeyhrumi · Sambalpur · Hengyang · Ganzhou · Chenzhou · Mianning · Lijiang · Taşkurgan | ek29 · ek_korfez · sinir_dogu · nokta_asya_0917 ×4 · a78_asya ×3 | ilan bugünkü veriyle uyumlu (kodlanmayan dönem / reddedilen öneri / uçsuz işgal beyanı) |
| GEÇERLİ | Colcha K · Inquisivi · Moura · San Pedro de Atacama · Putre · Taltal · Daru | a78_amerika ×6 · a78_okyanusya | kuruluş / işgal günü bulunamadı — hâlâ doğru |
| GEÇERLİ | Dimetoka · Drežnik · Zeya · Cali · La Agüera · Atâr · Şinkît · Gobernador Gregores · Murska Sobota · Napier · Taupō · Eisenstadt | yerlesimler.js · ek29 · sibirya2 · gamerika · a78_afrika ×3 · a78_amerika · a78_avrupa · a78_okyanusya ×2 · p77_avrupa | "çelişki bildirildi" = kaynak SEÇİMİ yapılmış ve beyan edilmiş (ya da emsal sınıfı, F8) — uygulanacak bir şey yok |
| İŞLENDİ (inmemiş diff) | Ji'an (1861 cümlesi) · Feyzâbâd | nokta_asya_0917 · a78_asya | çürütme notları KASA-JIAN-TAIPING / KASA-FEYZABAD-KUR diff'lerinde |
| İLGİSİZ | Beyan K7.5 B62.5 · Santa Ana del Yacuma · São Paulo de Olivença · Fortín Muñoz · Cushamen | gamerika · a78_amerika ×4 | yıl, başka bir yerin kuruluşu / aday nokta notu — öz-ilan değil |
| ⓐ SUSAN | — | — | mekanik ölçülemez (beyan); bu taramada yan bulgu da çıkmadı |

**Sayım (birim: İLANI TAŞIYAN KAYIT — listede satırı olan kayıt):** ⓑ **4 KAYIT** · ⓒ **6 KAYIT** · GEÇERLİ **30 KAYIT** ·
İŞLENDİ **2 KAYIT** · İLGİSİZ **5 KAYIT** · ⓐ 0 ⇒ **47 KAYIT**.
**ⓒ BİRİMLİ (koordinatör düzeltmesi M-? — "6" birimsizdi):**
```
İLANI TAŞIYAN KAYIT : 6   Novi · Uyvar · Lugos · Cizre · Rykovskoye · Onor          (yukarıdaki sayım bu)
VAKA (ayrı sorun)   : 5   Novi 1557 · Sahalin isg · Temeşvar 1551-52 · Uyvar kur · Cizre künye
DÜZELTİLECEK KAYIT  : 8   Novi · Temeşvar (Lugos DEĞİL — düzeltme komşuda) · Uyvar · Cizre ·
                          Sahalin ×4 (Rykovskoye · Onor · Aleksandrovsk · Kuzey Sahalin (bölge))
                          — son ikisi ilan TAŞIMIYOR, ölçümle eklendi
YENİ (Novi hariç)   : 5 KAYIT / 4 VAKA   — mesajımdaki "beşi yeni" KAYIT, numaralı liste VAKA idi
UÇ (Sahalin)        : 8   (4 kayıt × 2 uç)
```
**B1 duyarlılığı 2/5 (bilinen pozitiflerde) ⇒ liste GÜVENİLİR ama TAM DEĞİL**; ⓒ kovası KAPANMIŞ ilan edilmez.
ⓐ (SUSAN) ilan taramasıyla TANIM GEREĞİ bulunamaz ⇒ ayrı yöntem (örneklem + doğrulama), ayrı kalem.
- B1 içinde (29): ⓑ 4 · ⓒ 0 · GEÇERLİ 18 · İŞLENDİ 2 · İLGİSİZ 5.
- C içinde (23): ⓑ 4 · ⓒ 6 · GEÇERLİ 13 · İLGİSİZ 0.

### 1.2 🔴 Bulgu: ⓒ'nin beş yeni üyesi — "bildirildi" bir ÖDEME DEĞİL
Novi tek değilmiş. Beşinin ortak deseni: işçi doğru bulguyu kaydın İÇİNE yazmış ("raporda kayıtlı" / "ayrıca
bildirildi" / "koordinatöre bildirildi" / "KUNYE ONERISI raporda"), ama veri değişmemiş.
- **Kuzey Sahalin Japon işgali 1920-1925:** iki kayıt kendi kaynağında FRUS belgesiyle yazıyor, `isg:` yok. Aynı bölgenin
  Aleksandrovsk ve "Kuzey Sahalin (bölge)" kayıtlarında da `isg:` yok (ölçüldü) ⇒ 4 kayıtlık bir uçsuz-DEĞİL işgal
  (iki ucu günlü!). Kuyruğun en ucuz kalemi.
- **Temeşvar 1551-52:** Lugos'un enklavı Temeşvar'ın eksik dilimi yüzünden; düzeltme Lugos'ta değil KOMŞUDA ⇒ notu
  okuyan, sorunu notun yazılı olduğu kayıtta arar ve bulamaz.
- **Uyvar `kur`** ve **Cizre künyesi:** kur hükmü (Feyzâbâd sınıfı) ve künye kuyruğu kalemleri.
⇒ Bu kova, öz-ilan evreni üstüne kurulacak işler için en tehlikelisi (koordinatörün uyarısı birebir tuttu): beşi de
"ele alınmış" diye okunuyor.

### 1.3 Diff'ler
- **`KASA-BAYAT-OZILAN-1010.diff`** (yerlesimler_ek26.js, 2+/2−): Çaldıran + Başkale `neden:` "fark raporda"nın yanına
  "⇒ GÜNCEL DEĞİL: Van kaydı artık 1548-08-24 — fark kapanmış". Eski metin silinmedi.
- **`KASA-BOSNA-EK29-1010.diff` v2** (aynı dosya ⇒ KATLANDI, "atıf aynı commit'te iner"): v1 + Brod/Jasenovaç s[0]/s[1]
  "(atlas 1538 — çelişki raporda)" yanına "⇒ GÜNCEL DEĞİL: veri artık 1536". v1'e göre yalnız not; veri değişikliği aynı
  (Novi 1557).
- ⓒ'lerin veri düzeltmeleri bu turda YAZILMADI (Sahalin isg · Temeşvar dilimi · Uyvar kur · Cizre künye) — her biri
  ayrı kaynak doğrulaması ve/veya senin hükmün ister. Liste §1.1'de.
- Sınav: aşağı (§3).

## 2. Öngörü ↔ ölçüm
```
B1 ⓑ 8 ± 4            ✗ 4 … AMA B1'de ⓑ 2 kayıt (Brod, Jasenovaç); Çaldıran/Başkale ⓑ'si C'den geldi
                      (B1'deki ilan cümleleri GEÇERLİ, bayat olan aynı kaydın BAŞKA cümlesi) — sayım kayıt başına 4
B1 GEÇERLİ 13 ± 5     ✗ 18 (üst sınır 18 — sınırda)
B1 İLGİSİZ 6 ± 3      ✓ 5
B1 ⓒ 1 ± 1            ✓ 0
C ⓒ 6 ± 3             ✓ 6
C ⓑ 7 ± 4             ✓ 4
C İLGİSİZ 8 ± 4       ✗ 0 — "bildirildi" bu veride hep öz-ilan anlamında
C GEÇERLİ 2 ± 2       ✗ 13 — "çelişki bildirildi"nin çoğu kaynak SEÇİMİ beyanı; öngörü onu İLGİSİZ sanmıştı
B1 ∩ C 2 ± 2          ✗ 5
Novi tipi yeni hata ≥1 %70 / ≥3 %25    ✓ 5 (Sahalin ×2 · Temeşvar · Uyvar · Cizre) — ≥3 tuttu
ⓑ+ⓒ ≥%50 en çok 3 dosyada %65          ✓ 7/10 (ek29 3 · ek26 2 · yerlesimler.js 2)
```
**Ders:** "bildirildi" kelimesinin anlamını öngörüde dağıttım (İLGİSİZ 8). Veride bu kelime HEP öz-ilan ve iki
anlamı var: (i) "seçim yaptım, beyan ettim" ⇒ GEÇERLİ; (ii) "bulgu başkasına gitti, ben uygulamadım" ⇒ ⓒ. İkisini
ayıran tek şey VERİ okumak (şart ①'in birebir gerekçesi).

## 3. Sınav
- İki diff birlikte (temiz worktree, @ aa279db0): `git apply` ✓; `girdi` ek26 (14 kayıt) ve ek29 (42 kayıt) okunuyor; çıplak LF 0.
- Tam `denetle.py` tabanla **satır satır AYNI** (yalnız not değişikliği + v1 Novi düzeltmesi).
- `paketle.py yenile` gerekir (ek26 + ek29 paketleri).

## 4. ⓒ kalemleri — ölçüm (koordinatör sırası: Sahalin → Temeşvar → Uyvar → Cizre)
### 4.1 Kuzey Sahalin Japon işgali — 2i ölçümü: **(i)**, ama mevcut madde YANLIŞ GÜNLÜYDÜ ⇒ düzeltildi
Okuyucu: `scratchpad/okuma_sahalin.md`. **KENDİM doğruladım (birebir):** FRUS 1921 II d656 · FRUS 1925 II d563
(history.state.gov) · Родина 2025/8 (Kulagin raporu) · calendar.libsakh.ru/event/291.
- **Kayıtların kendi "iki ucu günlü" iddiası (benim de tekrarladığım) YANLIŞ NEYİ tarihlediğini okumuyordu (§4 ⑧):**
  - **1920-07-03 = DEKLARASYON günü:** FRUS 1921 II d656 *"Her position on this question is explained in the declaration
    of the Japanese Government of July 3, 1920"*.
  - **1925-05-15 = antlaşma SON GÜNÜ, ikinci elden:** FRUS 1925 II d563 *"The Sinclair Oil Company later claimed that
    Japan had entered into a treaty with Russia whereby the Japanese troops were to be removed by the fifteenth of May,
    1925"*. Okuyucu LNTS 34 No.866 Protokol A md.III'ü okudu: *"completely withdrawn from the said region by May 15, 1925"*.
- **OLAY günleri:**
  - **Başlangıç 1920-04-22:** Kulagin raporu 25.05.1920 (РГАСПИ Ф.71 Оп.35 Д.961 Л.4-6; *Родина* 2025/8): *«22 апреля с.г.
    гор. Александровск на Сахалине занят высадившимся японским десантом около 2000 человек»*. Sahalin Bölge Kütüphanesi:
    *«Оккупация Северного Сахалина Японией (1920) 22 апреля 1920 г.»*. Bölge hükmü: Shulatov, *Slavic Studies* 67 (2020)
    s.69 「4月末に北サハリンを占領し…7月3日に…「保障占領」すると宣言した」 (okuyucu).
  - **Bitiş 1925-05-14:** libsakh/291 *«14 мая 1925 года был спущен флаг над зданием штаба японского командования. …
    подписание завершающего документа – Акта уполномоченных СССР и Японии о выводе оккупационных войск»*. Hara 1989 (Takeno
    2013 aktarımı) tahliyenin tamamlanmasını 15.05.1925 verir ⇒ ⑥ 14 ↔ 15, beyan.
- **Kapsam (ölçüldü — benim "4" sayım da EKSİKTİ):** Kuzey Sahalin'de (50°K üstü, 1905 sınırı) **6 KAYIT**:
  - Aleksandrovsk (Kuzey Sahalin) — ek13; Rykovskoye · Onor · Poronay yukarısı (bölge) · Nabil kıyısı (bölge) · Kuzey
    Sahalin (bölge) — a78_asya.
  - Hiçbirinde `isg` yoktu.
  - "(bölge)" kayıtları `tur:"bolge"` ama **YERLEŞİM katmanında** dolgu/bağlayıcı noktalar (`not:` "Dolgu/bağlayıcı
    nokta"), BOLGELER katmanı değil ⇒ `isg:` aynı biçimle yazılır.
- **Pencere:** taban dosyalar 1923-10-29'da bitiyor (UFUK DAMGASI) ⇒ `isg` **1920-04-22 → 1923-10-29** (Katar
  `isg … → 1923-10-29` emsali).
  - 1923-10-29 → 1925-05-14 kısmı **`yer_yama_1923_1945.js`**'te. Altı kaydın tamamının kopyası orada var, hepsi
    `isg`'siz (ölçüldü). O dosya LAB'ın ⇒ **DEĞİŞİKLİK TALEBİ**: altı kayda `isg:[{f:"1920-04-22",
    t:"1925-05-14", d:"meiji-japonya", kaynak: (aynı)}]`.
- **2i ölçümü — A/B deneyi (benim tabanımda, @ 76aa191e):**
  - **A (yalnız isg):** 2i 171 → **172** kırılma, açık **1 → 1** (tavan 1) ⇒ **(i)**. Tek yeni kırılma (altı kayıt aynı
    gün); mevcut bir madde eşleşiyor.
  - **B (isg + 2 yeni madde):** 2i aynı, AMA **mükerrer madde 95 → 96 ✗** ⇒ yeni madde MEVCUT BİR MADDENİN İKİZİ.
  - Eşleşen madde: `kronoloji_sinir_asya.js:104` — `t:"1920-01-01"` (YIL), yer_id Aleksandrovsk, *"Japonya, …
    Temmuz 1920'de işgal etti (gün kaynakta yok; …)"*.
    - ⇒ Madde VARDI, ama ayı YANLIŞTI: "Temmuz" deklarasyonun ayı.
    - 2i'yi geçiren şey, yanlış ayı taşıyan bir yıl-temsilî maddeydi. **Kapı geçiyordu, ama yanlış sebeple.**
- **Diff — `KASA-SAHALIN-ISG-1010.diff`** (@ `main` 9805c002; 3 dosya, 12+/12−):
  1. 6 kayda `isg:[{f:"1920-04-22", t:"1923-10-29", d:"meiji-japonya", kaynak}]`.
     - Aleksandrovsk'un kaynağı şehir adlı (Kulagin).
     - Diğer beşi "GÜN KOMŞUDAN (§4 şartlı): Aleksandrovsk" + Shulatov bölge hükmü.
  2. Beş kaydın eski "⚠️ 1920-07-03 → 1925-05-15 … isg YAZILMADI/yazılmadı" ilanının YANINA "⇒ YAZILDI: …, 07-03
     deklarasyon günü, 05-15 antlaşma son günü" (silinmedi).
  3. `kronoloji_sinir_asya.js:104`:
     - `t` 1920-01-01 → **1920-04-22**, `kesinlik:"gun"`;
     - `d`'deki "Temmuz 1920'de işgal etti (gün kaynakta yok …)" → "22 Nisan 1920'de … çıkarmayla işgal etti; … 3 Temmuz
       1920'de deklarasyonla resmîleştirdi";
     - ESKİ metin + çürütmesi `ic_not_d`'de;
     - `kaynak:`a Kulagin + libsakh eklendi.
     - ⇒ Yeni madde YAZILMADI (B'nin mükerrer dersi).
  - Sınav: aşağı.
  - ⚠️ İlk derlemede genel bir çapa ("— isg yazılmadı") **3 Çin kaydına** (Mianning, Lijiang ve bir Pingnan kaydı)
    Sahalin notunu yapıştırdı; `git diff` okunarak yakalandı, çapa FRUS cümlesine daraltıldı, yeniden derlendi. Son
    diff'te not yalnız 5 Sahalin kaydında.
- **Sınav (@ `main` 9805c002, tabanı da ayrı worktree'de koşturuldu — DELTA, koordinatör kuralı):**
  - `git apply` ✓ · `girdi` 6 kayıtta `isg 1920-04-22 → 1923-10-29 meiji-japonya` okuyor · çıplak LF 0 (üç dosyada taban da 0).
  - Tam `denetle.py` DELTA: **2i 171 → 172 kırılma (+1), açık 1 → 1 (tavan 1, SABİT)** · `isg:` dönemi 372 → 378 (+6) · mükerrer madde DEĞİŞMEDİ (B'deki 95→96 yok) · başka satır yok.
  - Mutlak: kendi tabanımda; çıkış kodu taban ile aynı (2, Değişmez 8 ÖLÇÜLEMEDİ).
  - `paketle.py yenile` gerekir (a78_asya · ek13 · kronoloji_sinir_asya paketleri).
  - ⇒ (i)+düzeltme: diff TEK BAŞINA İNEBİLİR, tavan oynamıyor.

### 4.2 Temeşvar 1551-52 — tanık OKUNDU, iki uç ölçüldü (yazan: koordinatör, `yerlesimler.js`)
Okuyucu: `scratchpad/okuma_temesvar.md`. **KENDİM doğruladım (birebir):** Bánlaky, *A magyar nemzet hadtörténelme*
(MEK 09477) 0013/988 · 0013/991 · 0013/1003 + Kenyeres István, *Fons* IV (1997) no.2 (REAL-J PDF).
- **"B 0013" = Bánlaky, bölüm 0013.** Lugos'un alıntısı DOĞRU — 988: *"Temesvár, Lippa, Solymos, Karánsebes, Lugos,
  Becse, Becskerek, Csanád … átvételére Martinuzzi Castaldo beleegyezésével július 16-ika körül Báthory Endrét küldte
  ki"* (16 Temmuz civarında Báthory'yi teslim almaya GÖNDERDİ — gönderme günü, devralma değil).
- **Devralma ⇒ Temmuz 1551 sonu (AY):**
  - Kenyeres 1997: *"Temesvárt Báthori András 1551. július végén vette át"* · *"1551 nyarán Báthori András Petrovicstól
    vette át Temesvárt … Ferdinánd király számára"*.
  - Üst sınır Bánlaky 991: 3 Ağustos'ta Sokollu Szalánkemén'e vardığında *"Petrovics Temesvárt és a többi alvidéki
    végvárakat is átadta Ferdinánd biztosának, Báthory Endrének"*.
- **Düşüş ⇒ 1552-07-26 / 27 ⑥:**
  - Bánlaky 1003: *"Ő maga július 26.-án este a várból az őrséggel a városba vonult … az elvonulást július 27.-én
    reggelre tűzte ki"* (26 akşamı kale boşaltıldı, Türkler kaleyi tuttu; 27 sabahı çıkış).
  - TDV timisvar (okuyucu, özetli): *"4 Şâban 959'da (26 Temmuz 1552) kale garnizonu teslim oldu"*.
  - Veri **1552-07-27**. 26 = kalenin el değiştirmesi; 27 = tahliye. İkisi de savunulur, hüküm senin.
- **Süreklilik:** 1551 sonbaharı kuşatması (Bánlaky 990/992), Losonczy'nin Ocak 1552 ayrılışında Aldana tuttu, kalıcı
  atama 30 Mart 1552 (Kenyeres) ⇒ devralmadan düşüşe Ferdinand garnizonu.
- **🔴 İKİ UÇ ÖLÇÜMÜ (§3.5 ters yön) — sorun yalnız 1551 değil:**
  - Temeşvar `s: macaristan 1281-01-01 → 1552-07-27` ama **`macaristan` künyesi `t:1526-08-29`** ⇒ dilim künyeyi
    **26 yıl AŞIYOR**. 1526-1551 Szapolyai/Petrovics dönemi `macaristan` (bağımsız krallık) boyasıyla gösteriliyor.
  - Komşu **Lugos** aynı dönemi ZATEN kaynaklı zincirle taşıyor:
    - `v 1526-08-29 → 1541-08-29` "Macaristan (Zapolya vasal krallığı)" — TDV macaristan + TDV timisvar *"Timiş bölgesi
      Szapolyai yanlısı Petrovics'in elinde"*;
    - `v erdel 1541-08-29 → 1551-07-01`;
    - `s avusturya 1551-07-01 → 1552-08-06`.
  - ⇒ **Öneri (Lugos emsali, yazan sen):**
    ```
    s macaristan           1281-01-01 → 1526-08-29   (künye sonu; Lugos ile aynı)
    v (Zapolya vasal)      1526-08-29 → 1541-08-29   (Lugos v[0] dayanağı: TDV timisvar Petrovics — BÖLGE hükmü, beyan)
    v erdel                1541-08-29 → 1551-07-01   (Lugos v[1]; TDV timisvar haraçgüzâr Erdel)
    s avusturya            1551-07-01 → 1552-07-26|27  kesinlik:{f:"ay"}  (Kenyeres 'július végén' · Bánlaky 991 üst sınır)
    d                      1552-07-26|27 →  (mevcut)
    ```
  - Bu, Lugos'un `enklav:true` adasını KAPATIR (Lugos avusturya dilimi komşusuz kalmaz).
  - ⚠️ `avusturya` künyesi 1282 → 1918-11-11 (pencere ✓). Kimlik ve boya için Lugos'un aynı dilimi emsal.
  - ⚠️ Açık uç: `f:1551-07-01` (AY) ↔ "július végén". Ay başına çekmek Lugos emsali ve VERI-YAPISI ay kuralı; gün
    uydurulmadı.
- **Ters yön riski (ölçüldü):** 988 listesindeki Lippa · Solymos · Karánsebes · Becse · Becskerek · Csanád — `girdi` taramasında atlasta HİÇBİRİ YOK (Lipova/Bečej/Zrenjanin/Cenad/Caransebeş adlarıyla da) ⇒ 1551 boşluğu yalnız Temeşvar'da; öneri tek kayıt.
- Değişmez 2 / 2s etkisi: ölçülmedi (diff yazılmadı — dosya senin). Yazınca 1526-08-29 / 1541-08-29 / 1551-07-01 uçları
  Lugos'ta zaten maddeli kırılmalar ⇒ yeni açık beklenmez, ama koşmadan söylemiyorum.

### 4.3 Uyvar `kur:` — tanık BU NOKTANIN mı, ÖNCÜLÜN mü? (ölç; hüküm koordinatörün)
Okuyucu: `scratchpad/okuma_uyvar.md`. **KENDİM doğruladım:** TDV (curl, birebir) + e-obce.sk ve Hunektár (WebFetch,
alıntı istendi).
- **TDV "UYVAR" (V. Kopčan):** *"Slovakça Nové Zámky, Almanca Neuhäusel, Latince Castelnuovo ve Türkçe'de Uyvar adıyla
  bilinen şehrin çekirdeğini 1545'te … Estergon başpiskoposu tarafından inşa ettirilen ve Macarca Érsek Ujvár denilen
  küçük bir kale (palanka) oluşturur."* ⇒ 1545 tanığı BU şehrin çekirdeği (Feyzâbâd'ın tersi: tanık başka yerin
  değil).
- **e-obce.sk (Nové Zámky, história):** *"Mesto Nové Zámky vzniklo z protitureckej pevnosti, ktorú postavili r. 1573-81 v
  chotári obce Lék v susedstve nevyhovujúceho protitureckého hradu z r. 1545"* (şehir, 1545 kalesinin yanında Lék
  köyünün arazisine 1573-81'de yapılan kaleden doğdu) · *"Nové Zámky dostali pozemky zničených obcí Lék, Gúg, Nyárhíd,
  Ďorok"* (yıkılan köylerin arazileri sonradan şehre verildi).
- **Hunektár:** *"The first castle was built around 1545 on the banks of the Nyitra River on the Lék estate of the
  Archbishop of Esztergom."*
- **ÖNCÜL:** **Lék** köyü. 1545 kalesi onun arazisinde; köy kaleyle YAN YANA ayrı yerleşim olarak sürdü (slovensko.sk:
  Lék ve Nyárhíd 1663'te yıkıldı — okuyucu). Lék'in ilk anılışı 1317 yalnız Vikipedi'den (İPUCU, tanık değil). Nyárhíd
  1183 (slovensko.sk, okuyucu) ama ~3 km kuzeyde.
- Kaynak çelişkisi (beyan): Magyar Katolikus Lexikon Várdai *"kezdte építtetni 1543"* (inşaya 1543'te başladı) ↔
  TDV/Hunektár 1545.
- **Sonuç (ölçüm, hüküm değil):** `kur:"1545-01-01"` + `kesinlik:"yil"` adayının tanığı BU noktaya ait (TDV şehir
  adıyla). 1281-1545 `macaristan` dilimi bu noktanın değil, komşu/öncül köylerin (Lék, ayrı yerleşim) dönemi ⇒
  Feyzâbâd (a) ile AYNI sonuç yönü (kısalt), ama gerekçe farklı: orada tanık başka yerindi, burada tanık bu yerin ve
  ÖNCESİNDE bu nokta YOKTU. ⚠️ 1543 ↔ 1545 ⑥.

### 4.4 Cizre künyesi — koordinatörün (devletler.js). Kaynak kümesi isteği alındı; bu turda ÇALIŞILMADI.
### 4.5 Süzgeç dersi (koordinatör, kalıcı): ⓒ'yi YALNIZ C süzgeci üretti (6/6); B1 ⓒ için KÖR (0/6). ⓑ arıyorsan ikisi, ⓒ arıyorsan yalnız C.
