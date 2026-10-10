# KASA-UCSUZ-ISGAL-2-1010 — uçsuz işgal turu 2: Feyzâbâd (Bâbürlü · Dürrânî) · Ji'an (Taiping 1861)

Görev: YILDIRIM BAYEZIT (ZAYIF42 hükmü, sıra ①: "Bâbürlü/buhara ÇELİŞKİSİ önce · sonra Dürrânî · Ji'an") ·
Araştırmacı: KASA · `data/` DONUK · salt okuma.
Kaynak türü belirler: sefer/kampanya tarihi gün verir, ansiklopedi yıl verir. TDV birincil (İslâm dünyası), Iranica
akademik; Çin için 清史稿 (Qing resmî kaydı). Vikipedi yalnız ipucu.

## 0. ÖNGÖRÜ (ölçümden ÖNCE — ayrı commit)
### A. Bâbürlü 1645-47 ↔ `buhara 1584-01-01 → 1657-01-01` (koordinatör: "yanlış sahip, daha ağır")
- Bu Şah Cihan'ın **Belh-Bedahşan seferi** (Murad Bahş, sonra Evrengzîb); Bâbürlüler 1647'de çekildi ve Canî
  (Buhara) hâkimiyeti döndü. ⇒ **sahiplik değişimi değil, İŞGAL** (`isg:babur-imparatorlugu`, sahip `buhara` aynen):
  **%75**. Yani koordinatörün "yanlış sahip" çerçevesi değil, "uçsuz işgal" çerçevesi tutacak — `buhara` dilimi YANLIŞ
  değil, eksik.
- Başlangıç: seferin Bedahşan'a girişi **1646** (TDV'nin "1645"i ya Raca Jagat Singh'in 1645 öncü harekâtı ya yuvarlama):
  1646 **%60**, 1645 %30.
- Bitiş: çekiliş **Ekim 1647** civarı: %70.
- **Feyzâbâd şehri ADIYLA** anılır: **%35** (kaynaklar "Bedahşan" der, şehir değil) ⇒ D208 şehir adlı tanık şartı
  büyük ihtimalle KARŞILANMAZ ⇒ bölge düzeyi beyan.
- İki ucun ikisi de **gün** düzeyinde, şehir/bölge adlı, kabul edilir kaynakta: **%30** ⇒ çoğu ihtimalle `isg:`
  YAZILAMAZ, `not:`ta beyan kalır.
### B. Dürrânî 1768 ↔ `__BOSLUK__ 1657 → 1859`
- Ahmed Şah'ın Bedahşan'ı ele geçirişi Yârî mîrlerini **tâbi** kıldı, onları kaldırmadı ⇒ **yabancı metbûluk** (`not:`/
  `kaynak:`), işgal değil: **%65**. ⇒ `__BOSLUK__` aynen kalır, metbûluk beyanı eklenir.
- Dürrânî nüfuzunun bitişi gün düzeyinde bulunur: **%10** (Timur Şah sonrası çözülme, yüzyıl kabalığında).
### C. Ji'an 1861 ↔ zemin dilim
- Zemin: `qing-hanedani 1677-04-30 → 1911` (ölçülecek) **%90**.
- 清史稿 Qing'in Ji'an'ı geri alışını gün düzeyinde kaydeder: **%55**; geri alış 1861-08-30'dan **≤ 12 ay** sonra: %75.
- İki uç bulunursa `isg:taiping` yazılabilir (künye `taiping` VAR): **%50**.
### Toplam
Üç adaydan `isg:`/düzeltme olarak YAZILABİLİR hâle gelen: **1 ± 1** (en olası Ji'an).

## 1. ÖLÇÜM
Okuyucular: `scratchpad/okuma_feyzabad.md` · `scratchpad/okuma_jian.md` (alıntılar birebir, URL'li). **KENDİM doğruladım:**
Iranica FAYŻĀBĀD (Wayback 20231119123020; canlı site 403) ilgili paragraf · 湘軍志 卷4 + 卷1 ve 曾文正公年譜 (zh.wikisource ham
metin) · dört günün altmışlık döngü hesabı ((JDN+49) mod 60). Okuyucu ayrıca Academia Sinica 兩千年中西曆轉換 ile çevirdi.

### 1.1 Feyzâbâd / Bâbürlü — "yanlış sahip" DEĞİL; asıl bulgu `kur:`
- **Kayıt:** `kur:"1479-01-01"`, kaynak *"Iranica 'FAYŻĀBĀD': Kokça köprüsü 884/1479 (kur = İLK TANIKLIK, üst sınır;
  eski adı Cevzun)"*.
- **Iranica (Balland, 1999; KENDİM okudum):** *"The first settlement was 5 km west of the present town, at Ḵamčān (or
  Kūrī) … a stone bridge over the Kōkča, now ruined, was built there in 884/1479 (Barrow 1888, pp. 48, 63). In
  1091/1680 Mīr Yar(ī) Bēg … shifted his capital from Ḵamčan … to a new city 5 km upstream. First known as Jawzān, or
  Jawz(g)ūn …, the latter's name was changed to Fayżābād after a shrine was built there in 1109/1697-98"*.
  - ⇒ 1479 köprüsü **Ḵamčān'da**, Cevzun'da değil. Bugünkü şehir (= Cevzun) **1091/1680**'de KURULDU. Adamec, *Gazetteer*
    I (1972): *"until 1680 (1091) called Jauz Gun or Jauzun"* (okuyucu).
  - Kaydın `kur:` dayanağı kendi kaynağıyla **çelişiyor**: köprü öncül yerleşimin tanığı, şehrin değil.
- **Sonuç:** 1645-47'de Feyzâbâd **YOKTU**. "Bâbürlü/`buhara` çelişkisi" koordinatörün sıraladığı biçimde yok. Yerine
  daha temel bir soru çıktı: **nokta neyi temsil ediyor?**
  - (a) Bugünkü şehir ⇒ `kur:"1680-01-01"` `kesinlik:"yil"`. 1479-1680 dilimleri (`__BOSLUK__` 1479-1584 · `buhara`
    1584-1657 · `__BOSLUK__` 1657-1680 kısmı) düşer.
  - (b) Ḵamčān + Cevzun yerleşim zinciri (5 km) ⇒ `kur:` kalır, `kaynak:`a "öncül yerleşim Ḵamčān" yazılır.
  - ⑥ hüküm senin. Ben (a)'yı öneriyorum: D208 şehir adlı tanık ister. 1479 tanığı başka bir yerin adını taşıyor.
- **Bâbürlü seferi (okuyucu; Saksena 1932 s.192-208, Sarkar 1912 I s.93-110, Lee 1996 s.50-54):**
  - 1645 hazırlık evresi: Kahmard Haziran 1645, alınıp kaybedildi. Asalat Han 2 Ağu 1645, başarısız. Jagat Singh
    15 Eki-4 Kas 1645, Host/Enderab. ⇒ TDV "1645-1647"nin 1645'i bu.
  - Bedahşan: **Kunduz 22 Haziran 1646**, *"Thus Badakhshan passed into the hands of the Imperialists"*.
  - Belh: 2 Temmuz 1646 (Sarkar) ↔ 17 Temmuz 1646 (Lee, "3 Jumada II 1056") ⑥.
  - Çekiliş: Belh devri **1 Ekim 1647**, ordu 3 Ekim 1647. Bedahşan'a özgü tahliye günü YOK.
  - Nezir Muhammed iade edildi; Lee s.54: 1647 sonrası Kunduz ve Bedahşan ıktâı Özbek Mahmud Bi'ye ⇒ **geçici işgal**.
  - TDV BEDAHŞAN: *"1645-1647 yılları arasındaki iki yıllık yeni bir Bâbürlü istilâsı hariç"*.
- `isg:` **YAZILMADI**:
  - (a) seçilirse şehir yoktu;
  - (b) seçilirse tanıklar bölge adlı (Bedahşan/Kunduz), Feyzâbâd/Cevzun/Ḵamčān ADI YOK (D208);
  - bitiş günü Belh'in.
- Kaynak çelişkisi (beyan): Iranica BALKH (Fourniau) *"from 1051/1641 to 1057/1647"* öteki tüm kaynaklarla çelişiyor,
  kullanılmadı. TDV ŞAH CİHAN *"1055'te (1646)"* hicrî-milâdî eşlemesi kayık (Belh 1056).

### 1.2 Feyzâbâd / Dürrânî 1768 — metbûluk, `__BOSLUK__` kalır
- Iranica FAYŻĀBĀD (KENDİM): *"after Ahmed Shah's conquest of Badaḵšān in 1182/1768"* (hırka Kandehar'a taşındı).
- Ganda Singh 1959 (okuyucu): Şah Velî Han *"in the beginning of 1182 A.H., 1768 A.D."*.
- Newby 2005 s.43 (okuyucu): Sultan Şah 1769'da öldürüldü; dipnot 74, Courant: *"invaded Badakhshan in 1768, took
  Faizabad and then relinquished it"*.
- Lee 1996 s.89-90 (okuyucu, Belh/Küçük Türkistan geneli): *"never entertained the idea of direct rule or annexation"*.
- ⇒ İlhak değil, metbûluk/haraç; Yârî mîrleri yerinde ⇒ `__BOSLUK__ 1657 → 1859` **AYNEN**, `not:`a metbûluk beyanı
  önerilir (yabancı metbû = `not:`/`kaynak:`, `v:` değil).
- Bitiş: gün düzeyinde YOK (1829 Kataganlı yıkımı · 1859 Dost Muhammed · 1883 vilâyet).
- Vikipedi'nin "Mayıs 1768" (Eijk & Khan 2023, Brill 403) **İPUCU**, okunmadı.

### 1.3 Ji'an — 1861 uçsuz kaldı; ama 1856-58 `taiping` diliminin İKİ UCU da "bildirim günü"ydü
- **1861:** 清史稿 本紀 '辛亥，粵匪陷吉安' (1861-08-30) bir **BİLDİRİM günü**. Aynı ay 本紀 義寧'yi düşmeden ÖNCE geri
  alınmış yazıyor ⇒ muhtıra varış sırası.
  - Düşüş: 曾文正公年譜 咸豐十一年三月, 18. ve 20. gün kayıtları arası (KENDİM okudum): *'賊乃西竄，陷吉安府，旋經官軍收復。
    二十日，賊陷瑞州府城'* ⇒ ≈ **Nisan 1861 sonu**.
  - Geri alış *'旋'* (kısa süre sonra), gün YOK. 清史稿 卷475 *'遂陷吉安，大軍旋復之'* (okuyucu).
  - 本紀 卷21-22'de geri alış maddesi YOK.
  - ⇒ **`isg:` YAZILMADI.** Kaydın not:undaki "≈1861-08-30" ≈4 ay geç: düzeltme notu diff'te.
- **🔴 Asıl bulgu, 1856-1858 `taiping` dilimi:** kayıt `1856-04-09 → 1858-10-15`, ikisi de *"gün (kayıt)"*. Kaydın
  kendi öz-ilanı: *"asıl alış birkaç hafta önce olabilir, bulunamadi"*. Kampanya tarihi günü veriyor (KENDİM okudum,
  döngü hesabı KENDİM):
  - DÜŞÜŞ: 湘軍志 卷4 *'六年正月，吉安守經七十日，寇勢愈盛。甲申，城破，周玉衡及文武僚吏死者四十一人'*. 正月己未朔 =
    1856-02-06 ⇒ 甲申 = **1856-03-02**, bildirimden 38 gün önce.
  - GERİ ALIŞ: 湘軍志 卷4 *'戊午，夜收吉安，江西列城皆復'* + 卷1 *'八月…戊午，援江西軍將趙煥聯等與曾國荃克吉安'*. 八月癸卯朔 =
    1858-09-07 ⇒ 戊午 = **1858-09-22**, bildirimden 23 gün önce.
  - ⇒ "Kaynak türü belirler" kuralının Çin yüzü: **本紀 bildirim günü verir, kampanya tarihi olay günü.**
- **Diff:** `KASA-JIAN-TAIPING-1010.diff` (1 dosya, 5+/5−).
  - Üç dilim ucu: qing → **1856-03-02** · taiping **1856-03-02 → 1858-09-22** · qing **1858-09-22** →.
  - `kaynak:` dönem dayanaklarında eski bildirim alıntıları SİLİNMEDİ; yanına "= BİLDİRİM günü ⇒ BULUNDU" ve yeni tanık
    yazıldı.
  - `not:` 1861 maddesine düzeltme eklendi (öz-ilan silinmez, çürütmesi yanına).
- **Sınav:**
  - temiz worktree'de `git apply` ✓; `girdi` üç dilimi yeni günlerle okuyor; satır sonu CRLF (değişmedi);
  - tam `denetle.py` çıktısı tabanla **satır satır AYNI** (aynı Değişmez 8 ÖLÇÜLEMEDİ, `devletler_harita.js` taze
    ağaçta yok).
  - ⚠️ `paketle.py sina` ✗: `paket_23.js` bu dosyanın kopyası ⇒ uygulayan `py arac/paketle.py yenile` koşar (FAZ 2
    §6 ile aynı uygulama, üretilmiş dosyaya DOKUNULMADI).
- **Sistem adayı (ölçüldü, hüküm değil):** `yerlesimler_nokta_asya_0917.js` diff sonrası **7 uç** daha "(gün (kayıt))"
  / "(kayıt, bölge)" taşıyor ⇒ aynı bildirim-günü kaymasına aday. Kampanya tarihiyle (湘軍志 vb.) tek tek sınanabilir.
  Bu turda YAPILMADI.

## 2. Öngörü ↔ ölçüm
```
A işgal, sahiplik değişimi değil %75           ✓ (geçici; Nezir Muhammed iade, Mahmud Bi)
A başlangıç 1646 %60 / 1645 %30               ✓ 1646 (Kunduz 22.06.1646); 1645 = hazırlık evresi
A bitiş Ekim 1647 %70                          ✓ 1-3.10.1647 (Belh'in)
A Feyzâbâd ADIYLA anılır %35                   ✓ anılmıyor — ama SEBEP öngörülmedi: şehir YOKTU (1680)
A iki uç gün + kabul edilir tanık %30         ✓ (yazılamaz)
B metbûluk, işgal değil %65                    ✓
B bitiş günü %10                               ✓ (yok)
C zemin qing (1858→1911) %90                   ✓ (başı 1858-09-22'ye düzeldi)
C geri alış gün düzeyinde %55                  ✗
C ≤12 ay %75                                   ✓ ('旋'; ama düşüş Nisan, Ağustos değil)
C isg yazılabilir %50                          ✗
Toplam yazılabilir isg 1 ± 1                   0 — alt sınırda
```
**Öngörülmeyen iki bulgu (asıl kazanç):**
1. Feyzâbâd `kur:` kendi kaynağıyla çelişiyor (1479 = Ḵamčān köprüsü; şehir 1680).
2. Ji'an 1856-58 diliminin iki ucu bildirim günü; kampanya tarihi olay gününü veriyor (38 ve 23 gün kayma).

İkisi de uçsuz işgal aranırken, **aranan dilimin KOMŞUSUNDA** çıktı.
