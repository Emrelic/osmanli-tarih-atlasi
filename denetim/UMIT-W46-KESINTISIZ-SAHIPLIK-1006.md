# UMIT-W46-KESINTISIZ-SAHIPLIK-1006 — atlas kesintisiz, kaynak kesinti diyor (§3.5 "yeri yanlış"ın ZAMAN ekseni)

**Temel commit: `ce885ec2`** (`origin/main`, ağaç `C:\atlas-w46`, `--detach`). YALNIZ ÖLÇÜM, veri yazılmadı, commit yok.

## Öngörü (ölçümden ÖNCE yazıldı, 6 Ekim 2026)
1. **Dubiça:** Atlas 1538→1718'i kesintisiz Osmanlı gösteriyor. Kaynakların (TDV/HE/Karlofça metni) **1687/88 – 1699 arasında
   Avusturya garnizonu** (Büyük Türk Savaşı) dediğini, 1699–1701 arasını ise sınır tahdidi süresi olarak tarif ettiğini tahmin
   ediyorum. Sonuç: ~11–14 yıllık bir sahiplik hatası. Atlas bu kesintiyi `isg:` olarak bile taşımıyor.
2. **Dimetoka:**
   - 1913 İstanbul Antlaşması (29 Eylül 1913) Dimetoka'yı Osmanlı'ya geri bıraktı. ⇒ **1913-09-29 → 1915-10 arası Osmanlı.**
     Atlas'ın 1913-05-30 → 1920 kesintisiz `bulgaristan-kralligi`'si yanlış. Bulgar fiilî yönetiminin başı da 1913-05-30
     değildir (Dimetoka 2. Balkan Savaşı'nda, Temmuz 1913'te geri alındı).
   - **Yunan'a geçiş:** Dimetoka Meriç'in batısında, yani Batı Trakya'da kalıyor. Atlas'ın 1920-05 günü Batı Trakya'nın Yunan
     yönetimine geçişiyle uyumlu. TDV'nin 1922'si büyük olasılıkla ya Mudanya/Doğu Trakya'yla karışmadır ya da Karaağaç'tır.
     §4 ⑥ olarak bildirilecek; TDV birincil olduğu için bu bir hüküm değil, çelişkidir.
3. **Sınıf:** Kesinti beklenen başlıca pencereler:
   - Büyük Türk Savaşı 1683–99 (Macaristan, Slavonya, Bosna kuzeyi, Dalmaçya)
   - Mora'da Venedik 1685/87–1715
   - Azak 1696–1711
   - 1716–18 / 1737–39 / 1788–91 Avusturya savaşları (Belgrad, Sırbistan, Bosna kuzeyi, Eflak-Boğdan)
   - Rus savaşları
   - 1912–13 Balkan savaşları (Edirne Mart–Temmuz 1913)

   Kesintilerin bir bölümünün `isg:` ile taşındığını, bir bölümünün hiç taşınmadığını tahmin ediyorum. Örneklemde
   **onlarca aday**, ağırlıkla Mora ve Bosna/Slavonya sınırı bekliyorum.

## Öngörü sınavı (ölçümden sonra)
- **① Dubiça — TUTTU.** Pencere tahmin ettiğimden geniş: HE 1687–1701.
- **② Dimetoka — 1913–15 kısmı TUTTU, ama gerekçem yanlıştı.**
  - Sebep "30 km yarım daire" ya da genel Meriç sınırı değil. İstanbul Antlaşması Dimetoka'yı **adıyla** Osmanlı'ya bırakıyor.
  - Batı Trakya hükmü Dimetoka'ya TAŞINMAZ (§4 bayrak kuralı).
  - Yunan günü için kurduğum "1922 karışıklık" açıklaması ölçülemedi.
- **③ Sınıf — TUTTU, bir ŞAŞIRTMAYLA.** Mora yarımadası temiz çıktı (yalnız adalar ve Boeotia kaldı). En büyük küme
  Suriye 1831–40 oldu. Bunun sebebi kaynak değil, atlasın **kendi iç tutarsızlığı**.

## ① Dubiça (Bosanska Dubica) — `data/yerlesimler_ek29.js:274` (temel `ce885ec2`)
- **Atlas:** `d[0]` **1538-01-01 → 1718-07-21 kesintisiz Osmanlı**. `isg:` yalnız 1788–91 ve 1878–1908.
- **HE `kozarska-dubica`** (okundu):
  > *"Za austrijsko-turskih ratova više puta dolazila pod vlast Austrije (1687–1701., 1716–41. i 1788–96/97)."*
- **TDV `bosna-hersek`** (okundu): *"1688'de Avusturyalılar Sava'nın güneyindeki bazı bölgeleri geçici olarak işgal ettiler."*
  Dubiça'yı ADIYLA anmıyor (bölge hükmü, şehre taşınmaz). Destekliyor, tek başına dayanak değil.
- **Atlasın kendi taşıdığı Karlofça metni** (`:228`):
  > *"all the Imperial Garrisons that are in Novi, Dubizza, Sessenovizza, Doboy and Bred on the part of Bosnia … shall be drawn out"*

  Yani 1699'da Dubiça'da **imparatorluk garnizonu VARDI**.
  - ⚠️ `:232`deki yorum bunu TERS okuyor: *"Bu beş kale … 1699-01-26'da Osmanlı'dan Avusturya'ya geçti"*.
  - Metin tam tersini söylüyor: Avusturya'dan Osmanlı'ya iade. Veri iade yönünde yazılmış, **yorum yanlış**.
  - Kesintinin kendisi ise hiç kodlanmamış.
- **Hüküm:** ~1687 → ~1701 arası (yıl düzeyi, gün yok) atlas Osmanlı diyor, kaynak Avusturya diyor. **~14 yıllık ZAMAN EKSENİ hatası.**
- **Yan farklar** (§4 ⑥, hüküm yok):
  - HE 1716–41 ⇄ atlas `s` 1718-07-21 → 1739-09-28. Atlas antlaşma günlerini kullanıyor, HE fiilî yılları.
  - HE 1788–96/97 ⇄ atlas `isg` 1788-08-26 → 1791-08-04.

## ② Dimetoka — `data/yerlesimler.js:329`
**Atlas:** `d` → 1913-05-30 · `s` 1913-05-30 → 1920-05-27 `bulgaristan-kralligi` · 1920-05-27 → `yunanistan`.

### 1913–1915 arası Osmanlı mıydı? — EVET (dört kaynak aynı yönde)

| kaynak | cümle (okundu) |
|---|---|
| **TTK, İ. Görgülü, "Balkan Harbi"** (ttk.gov.tr/balkan-harbi) | *"Bu antlaşmaya göre Kırklareli, Edirne ve Dimetoka, Osmanlı devletinde kalıyor; Meriç nehri, Türk-Bulgar sınırını teşkil ediyordu."* |
| **M. Abay, "Sınırda Diplomasi: Bulgaristan'ın I. Dünya Savaşı'na Giriş Sürecinde Sofya Sefareti ve Ali Fethi Bey", *Tarih Tetkikleri Dergisi* 1/1 (Haziran 2023), hakemli, DOI 10.5281/zenodo.8053994**, BOA belgeleriyle | *"Edirne, Kırklareli ve Dimetoka Osmanlı Devleti'nde kalırken, Batı Trakya Bulgaristan'a bırakılmıştır"* · *"6 Eylül 1915 tarihinde Osmanlı-Bulgar Hudut Tashihi Antlaşması imzalanmıştır … Dimetoka Bulgaristan'a bırakılmıştır."* |
| **TDV `birinci-dunya-savasi`** | *"6 Eylül 1915'te gizli bir anlaşma yapmışlar, tâviz olarak da Osmanlı Devleti'nden Dimetoka'nın bir bölümünü almışlardı."* |
| **TDV `balkan-savasi`** | 29 Eylül 1913 İstanbul Antlaşması: *"Edirne ile batı tarafında çapı 30 km. tutan yarım daire şeklinde bir toprak parçası Osmanlı Devleti'nde kaldı. Batı Trakya ise Bulgaristan'a iade edildi."* Dimetoka'yı adıyla anmıyor; ötekilerle çelişmiyor. |

- **Hüküm:** atlas **1913-09-29 → 1915-09 arasında Dimetoka'yı yanlış devlete veriyor** (Bulgar yerine Osmanlı olmalı). ~2 yıl.
- **Uçlar:**
  - **Başlangıç:** 1913-09-29 de jure. Fiilî Osmanlı dönüşü Temmuz 1913 olabilir (Edirne 21 Temmuz). Dimetoka için gün **ÖLÇÜLEMEDİ**.
  - **Bitiş:** imza 1915-09-06. Abay'a göre plan, Dimetoka'nın *"10 Eylül 1915'te yani mukavelenin imzalandığı tarihten on beş gün sonra"*
    teslimiydi. Cümle kendi içinde tutarsız (6 + 15 = 21). Rumî takvim olabilir, ama bu bir **çıkarım, ölçüm değil**.
    Fiilî teslim günü **ÖLÇÜLEMEDİ**. (Bir gazete yazısı 1 Ekim 1915 diyor; kırmızı çizgi, KULLANILMADI.)
- **Gümülcine emsali UYMUYOR:** Gümülcine'nin `garbi-trakya` 1913-08-31 → 1913-10-25 dönemi Dimetoka'ya taşınmamalı.
  Antlaşma Dimetoka'yı Osmanlı'da bırakıyor.
- **Sınır katmanı da eksik:** `data/d_sinirlar.js:38` `d1913-osm-bg-dogu` hattı yalnız Tunca'nın doğusunda başlıyor
  (ilk nokta 26.543, 41.920). `:31` `d1915-osm-bg` 41.71°K'nin altına inmiyor. ⇒ Dimetoka çıkıntısının (41.35°K) 1913 ve
  1915 hattı **sınır katmanında da YOK**. `kronoloji_sinir_turkiye.js` 1915 maddesi bunu kendisi söylüyor:
  *"Düzeltmenin Meriç ucundaki tam etkisi bu kayıtta ölçülmedi."*
- **Başlangıç ucu da şüpheli:** TDV `dimetoka` *"Osmanlı döneminde (1361-1912)"* diyor; atlas Londra gününü (1913-05-30) kullanıyor.
  Kırklareli/Tekirdağ fiilî işgal gününü (1912-10/11) kullanıyor. Dimetoka'nın 1912 Bulgar işgal günü **ÖLÇÜLEMEDİ**.
  Yalnız yıl kesin: 1912.

### Yunan'a geçiş: TDV 1922 ⇄ atlas 1920-05-27 — §4 ⑥ ÇELİŞKİ, ve atlasın günü yanlış cümleden
- **TDV `dimetoka`:** *"1922'de kasaba Yunanistan'a bağlandı."*
- **TDV `bati-trakya`:**
  > *"Batı Trakya'nın Yunanlılar tarafından işgali günlerinde de (22 Mayıs 1920) … Hemetli'de Türkler Batı Trakya hükümetini kurdular (27 Mayıs 1920)."*

  Atlas'ın **1920-05-27'si Hemetli hükümetinin kuruluş günü**, işgal günü değil. İşgal günü TDV'de **22 Mayıs 1920** (§4 tuzak ⑧:
  rakamı taşıyan cümlenin neyi tarihlediği). Aynı gün Gümülcine, Sofulu ve Ferecik'te de kullanılıyor; onlar ölçülmedi.
- Aynı madde **Fransız işgalini (15 Ekim 1919)** de veriyor. Atlasta bir Batı Trakya `isg:`'i yok (Gümülcine ve Dimetoka'da ölçüldü).
- TDV'nin iki maddesi kendi arasında çelişiyor (1920 işgal ⇄ 1922 "bağlandı"). 1922 bilinen bir olaya denk düşmüyor:
  Sevr 1920-08-10, Lozan 1923. Hüküm verilmedi, bildirildi.
- Fiilî gösterim için atlasın 1920'si TDV `bati-trakya` ile uyumlu; günü 22 Mayıs olmalı.

## ③ Sınıf taraması
**Yöntem.** Kaynakta bilinen 10 geçici-kayıp penceresi tanımladım, her biri tarih aralığı + bbox. Her yerleşim için şunu sordum:
"pencereyi tek bir `d:` dönemi TAMAMEN örtüyor mu, ve pencereyle kesişen hiçbir `s:`/`v:`/`isg:` yok mu?"
- Evren: `girdi.yukle()` (93 dosya).
- Betik: scratchpad `w46_tara.py` (repoya yazılmadı).
- ⚠️ İlk koşuda yalnız `isg`'ye baktım ve Suriye'de 34 aday çıktı. `v:` örtüşmesini (Halep `misir-kavalali`) eklenince 16'ya düştü.
  **İlk sayı yanlıştı.**

**Örneklem:** 10 pencerede **48 aday**. Bbox kaba bir süzgeç; aday ≠ hata.

| pencere | aday | kaynakla ölçülen | sonuç |
|---|---|---|---|
| Bosna/Sava 1688–99 | 14 | **Dubiça** HE 1687–1701 ✔ · **Novi** HE *"Pod austrijskom vlašću 1691–1703"* ✔ · **Kostayniçe** HE *"Pod osmanskom vlašću ostala je do 1687"*, atlas `d` 1699-01-26'ya dek ✔ (kesinti değil, **12 yıl geç bitiş**) · **Banaluka** HE *"1688. nakratko ju je zauzela austrijska vojska"* ✔ (süre/gün ölçülemedi) · **Krupa** HE yalnız kuşatma (1690, 1692) ✘ ⇒ atlas DOĞRU (negatif kontrol) · Zvornik, Jasenovac: HE kesinti anmıyor ⇒ ölçülemedi · Brod: HE slug bu koşuda 302 ⇒ ölçülemedi · kalan 5 ölçülmedi | **4 doğrulandı + 1 bitiş hatası · 1 negatif** |
| Belgrad 1688–90 | 1 (Böğürdelen) | HE `sabac` 1688'i anmıyor | ölçülemedi |
| Sırbistan 1718–39 | 1 (Vişegrad) | — | büyük olasılıkla bbox yanlış pozitifi, ölçülmedi |
| Mora/Venedik 1687–1715 | 4 (İstefe, Kulluk, Egina, Hidra) | — (Atina'da `venedik` 1687–88 VAR; Mora yarımadası temiz) | ölçülmedi |
| Azak · Bağdat 1624–38 · Edirne 1913 | 0 | — | atlas kesintiyi taşıyor |
| **Suriye-Adana Mısır 1831–40** | **16** | 18 komşu (Adana, Halep, Şam, Akkâ, Sayda, Antep, Kilis…) `v: misir-kavalali` taşıyor. İskenderun, Mersin, Dörtyol, Erzin, Yumurtalık, Birecik, Sûr, Azez, Münbiç vb. TAŞIMIYOR. TDV `iskenderun`/`mersin` dönemi anmıyor; `birecik` yalnız Nizip 1839 | **İÇ TUTARSIZLIK** (kaynak değil, komşu düzeni) · tek tek kaynak ölçülmedi |
| Doğu Anadolu Rus 1916–18 | 11 | **Van** TDV *"2 Nisan 1918 tarihinde Van düşman işgalinden kurtarıldı"* ✔ (başlangıç TDV'de bulunamadı) · Harput, Palu, Çemişgezek büyük olasılıkla yanlış pozitif · kalanı ölçülmedi | **1 doğrulandı** |
| Erzurum Rus 1829 | 1 | **TDV `erzurum`:** *"Rus ordusu 8 Temmuz 1829 günü … şehre girdi"* · *"şehri geri vermek zorunda kaldılar (14 Eylül 1829)"* ✔ GÜN düzeyinde | **1 doğrulandı** |

**Sayılar:**
- Kaynakla sınanan **11 aday:**
  - **6 doğrulandı:** Dubiça, Novi, Kostayniçe (bitiş), Banaluka, Van, Erzurum.
  - **1 negatif:** Krupa.
  - **4 ölçülemedi:** Zvornik, Jasenovac, Brod, Böğürdelen.
- 37 aday ölçülmedi.
- Dimetoka (görev ②) taramanın dışında, ayrıca doğrulandı.
- ⇒ **Sınıf gerçek ve yaygın.** Payı ölçülemedi: örneklem rastgele değil, en güçlü pencereler seçildi.

**Yan bulgular (fetih yılı, §4 ⑥):**
- Jasenovac HE *"osvojio ga je 1536."* ⇄ atlas 1538 (komşu emsali).
- Novi HE *"zauzeli 1557."* ⇄ atlas 1556.

## Ne bulamadım
- Dimetoka'nın 1912 Bulgar işgal günü, 1913 Osmanlı dönüş günü ve 1915 fiilî teslim günü.
- Dubiça ve Novi kesintilerinin gün düzeyi uçları.
- Van işgalinin başlangıcı (TDV'de bulunamadı).
- 37 adayın kaynakları.

## Öneri (uygulanmadı; dosyalar Oturum 0'ın)
1. **Dimetoka:**
   - `s` 1913-05-30 → 1920-05-27 dönemi, **1913-09-29 → 1915-09-06** arasında `d:` Osmanlı ile bölünmeli (kaynak: Abay 2023 + TTK).
     Uçlar de jure; fiilî gün ölçülemedi ve kayda bu yazılmalı.
   - Yunan günü 22 Mayıs olmalı (TDV `bati-trakya`); TDV `dimetoka`'nın 1922'si §4 ⑥ olarak kayda yazılmalı.
   - **Değişmez 2:** 1913-09-29 ve 1915-09-06'da kronoloji maddesi VAR (`olaylar` ve `kronoloji_sinir_turkiye`).
   - **Sınır katmanında** Dimetoka çıkıntısı eksik, ayrı iş.
2. **Dubiça · Novi:** 1687–1701 ve 1691–1703 kesintileri `isg: avusturya` olarak (YIL ⇒ `YYYY-01-01`, kaynak HE).
   `:232`deki Karlofça yorumunun yönü düzeltilmeli.
3. **Kostayniçe:** `d` bitişi 1699-01-26 → 1687 (HE). Önce kronoloji maddesi gerekip gerekmediği ölçülmeli (D2).
4. **Erzurum:** `isg: rusya` 1829-07-08 → 1829-09-14 (TDV). 1829-09-14 Edirne Antlaşması maddesi var; 07-08 için madde gerekir.
5. **Suriye 16:** kaynak ölçülmeden `v:` yazılmamalı. Önce Kütahya 1833 sınırının (Adana dahil) TDV metni okunmalı.
6. **Yeni denetim önerisi:** "komşu kesintisi" kontrolü. Aynı pencerede ≤ N km komşusu `v/isg/s` taşıyan ama kendisi taşımayan
   yerleşim. Suriye kümesini kaynaksız yakalardı. Sınanmadı, iki yönde sınanmalı.
