# KOMSU-KESINTI-10-1006 — "komşu-kesinti" kovasından rastgele 10 kalem, kaynakla

**Temel:** `origin/makine/umit` `b2d4c2ff` (ağaç `C:\atlas-p84-komsu10`, `--detach`). YALNIZ ÖLÇÜM + ÖNERİ, veri yazılmadı.
Kova tanımı ve 47'lik liste: `denetim/UMIT-W46-KESINTISIZ-SAHIPLIK-1006b.md` §⑤ + Ek.

## 0. Öngörü (ÖLÇÜMDEN ÖNCE yazıldı, 6 Ekim 2026; örneklem çekildikten ve atlas kayıtları dökülmeden önce kaynak açılmadı)
**Sayı:** 10 kalemden **2–3'ünde kova haklı** çıkar (X'in kendisi de kesintiyi taşımalıydı → atlas yanlış),
**4–5'inde atlas doğru** (X kesintisiz), kalanı **⓿ ölçülemedi**.
- Kova haklı beklenenler: **Ebûkîr** (1798–1801 Fransız işgali; 1799 Ebûkîr muharebesi) · **Malko Tırnova** (1912 Bulgar işgali —
  zaten 1913'te Bulgaristan'a bırakıldı) · belki **Dessûk** (Delta; ama kaynak büyük olasılıkla sessiz → ⓿).
- Atlas doğru beklenenler: **Budin** (1595–1605'te Estergon/Vaç düştü, Budin kuşatıldı ama düşmedi) · **Çanakkale** (1366
  Amadeo Gelibolu'yu aldı; Anadolu yakası değil) · **Lanzaka** (1423–30 Venedik yalnız Selanik şehri) · **Cetinje**
  (1538–39 İspanya yalnız Kastelnuovo/Herceg Novi kalesi) · **Sayda** (1861 Cebel-i Lübnan mutasarrıflığı Sayda'yı içermez).
- Belirsiz: **İmroz** (1656 Venedik Bozcaada + Limni aldı; İmroz'un adı geçer mi bilmiyorum) · **Manisa** (1422–25
  Cüneyd/Aydın; Manisa Saruhan'dı).

**Mekanizma:** Kova **coğrafî yakınlık** üstüne kurulu. Komşudaki kesintilerin çoğu **NOKTA** kesintisi (tek kale/şehir:
Gelibolu 1366, Selanik 1423, Kastelnuovo 1538, Estergon 1595) ⇒ 40 km komşu kesintiyi taşımaz, kova yanlış pozitif verir.
**ALAN** kesintileri (Mısır'ın Fransız işgali, 1912 Trakya işgali) ise komşuya gerçekten yayılır ⇒ kova haklı.
İsabet oranı kesintinin nokta/alan sınıfına bağlıdır, mesafeye değil.

## 1. ⚠️ Görev metnindeki iki yönlü okuma — ikisini de ölçtüm
Kova kalemi bir ÇİFTTİR: **X** (aday, atlasta kesintisiz) · **Y** (≤40 km komşu, kesinti taşıyor). Görev metninin
etiketleri (*"✓ kaynak kesintiyi ANIYOR → kova haklı, atlas doğru"*, *"✗ kaynak KESİNTİSİZ diyor → atlas yanlış"*) ancak
soru **Y'nin** kesintisi için sorulursa tutarlıdır; W46b ⑤'in sorduğu "yanlış pozitif payı" ise **X'in** sorusudur
(X de kesintiyi taşımalı mıydı?). İki soru ayrı sütunda:
- **X sütunu (kovanın İSABETİ):** ✓ kaynak X için kesinti anıyor ⇒ kova haklı, **atlas X'te YANLIŞ** · ✗ kaynak X için
  kesintisizlik söylüyor ⇒ **yanlış pozitif, atlas DOĞRU** · ⓿ kaynak X için kesintiden söz etmiyor ⇒ **ÖLÇÜLEMEDİ**.
- **Y sütunu (komşunun kesintisi kaynakta var mı, yoksa atlas zincirinden mi):** ✓ / ✗ / ⓿ aynı anlamda.
Oranı X sütunundan veriyorum; koordinatör öteki okumayı kastettiyse cevap Y sütunundadır.

## 2. Seçim yöntemi (rastgelelik kaydı)
- Evren: W46b Ek tablosundaki **47** satır (betikle ayrıştırıldı, sayı doğrulandı: 47).
- **Mükerrer kapısı — 13 kalem havuzdan ÇIKARILDI (hüküm VAR ya da başka kıtada):**
  - W46b'de aynı kesinti için hükümlü: Lüleburgaz (✔) · Egina (✔) · Kulluk (? aynı 1687 Venedik penceresi) · Çamlıca/Hidra (? aynı pencere).
  - SAHIPLIK-OLCULEMEDI kıtasının Suriye-16 kümesi (ikisini birden yürümemek için): Azez · Dörtyol · Erzin · Mersin ·
    Sincan · Suruç · Sûr · Yumurtalık · İskenderun.
  - ⚠️ Çıkarılmadı, çünkü W46/W46b'deki hükümleri **BAŞKA bir kesinti penceresi** içindi: Krupa (W46: 1688–99; kova: 1788–91) ·
    Bihaç (W46b: Bosna 1688–99 penceresi; kova: 1638–70).
- Havuz **34** (ada göre sıralı) → `random.Random(20261006).sample(havuz, 10)` (tohum = bugünün tarihi, sınavdan önce sabitlendi).
  Betik: scratchpad `sec.py` (salt okur). Tekrar üretilebilir.
- Çekilen 10 (çekiliş sırasıyla): **İmroz · Budin · Manisa · Çanakkale · Ebûkîr · Lanzaka · Cetinje · Sayda · Malko Tırnova · Dessûk**.
- ⚠️ **Yanlılık beyanı:** Suriye-16'yı çıkarmak örneklemi 1830'lar `misir-kavalali` kümesinden (47'nin 10'u) arındırdı ⇒
  bu oran **34'lük havuz** içindir, 47'ye doğrudan taşınmaz.

## 3. On kalem
Atlas dökümü `girdi.yukle()` ile (ağaç `b2d4c2ff`). Bütün TDV istekleri 6 Ekim 2026; slug GET + gerektiğinde arama sayfası.

| # | X (aday) | Y kesintisi (atlas) | X sonucu | Y sonucu | denenen yollar |
|---|---|---|---|---|---|
| 1 | İmroz | Bozcaada `s venedik` 1656-07-13 → 1657-08-25 | **⓿** (zayıf atlas lehine) | ✓ | TDV `imroz` 200 · `bozcaada` 200 |
| 2 | Budin | Estergon `s avusturya` 1595-09-02 → 1605-10-03 | **✗ atlas DOĞRU** | ✓ | TDV `budin` 200 · `estergon` 200 |
| 3 | Manisa | İzmir `s aydin` 1422-01-01 → 1425-06-01 | **⓿** | ✓ (bitiş yılı farklı) | TDV `manisa` 200 · `izmir` 200 |
| 4 | Çanakkale | Gelibolu `s bizans` 1366-08-01 → 1376-09-01 | **⓿** | ✓ (başlangıç günü farklı) | TDV `canakkale` 200 · `gelibolu` 200 |
| 5 | Ebûkîr | İskenderiye `isg fransa-cumhuriyet` 1798-06-30 → 1801-08-31 | **✓ KOVA HAKLI — atlas YANLIŞ** | ✓ (atlasın kendi kaynağı) | TDV `ebukir` 200 · `ebu-kir` 302 · `ebukir-savasi` 302 |
| 6 | Lanzaka (Lagkadas) | Selanik `s venedik` 1423-09-14 → 1430-03-29 | **⓿** | ✓ | TDV `lankaza` · `langaza` · `lagkadas` · `lagadas` hepsi 302 · arama "Langaza"/"Lankaza" 0 madde · `selanik` 200 |
| 7 | Cetinje | Herseknovi `isg ispanya` 1538-01-01 → 1539-08-10 | **⓿** | ✓ (fail çelişkili) | TDV `cetine` 302 · `cetinje` 302 · `karadag` 200 · `barbaros-hayreddin-pasa` 200 · HE `herceg-novi` 200 |
| 8 | Sayda | Deyrülkamer `v` 1861-06-09 → 1915-07-11 | **✗ atlas DOĞRU** | ölçülmedi | TDV `sayda` 200 · `cebel-i-lubnan` 302 |
| 9 | Malko Tırnova | Kırklareli `s bulgaristan-kralligi` 1912-10-24 → 1913-07-21 | **⓿** | ✓ GÜN düzeyinde | TDV `malko-tirnova` · `malko-tarnovo` · `kucuk-tirnova` 302 · arama "Malko" 0 · `kirklareli` 200 (adını anmıyor) · `balkan-savasi` 200 (anmıyor) · `bulgaristan` 200 (yalnız Veliko Tırnova) · `istanbul-antlasmasi` · `istranca` · `yildiz-daglari` 302 · TTK `ttk.gov.tr/balkan-harbi/` 200 (anmıyor) |
| 10 | Dessûk | Reşîd `isg fransa-cumhuriyet` 1798-07-01 → 1801-10-09 | **⓿** | ⓿ (atlas kaydı kendisi "işgal günü bulunamadı" diyor) | TDV `dessuk` · `disuk` · `desuk` 302 · arama "Desûk" (yalnız `desuki-ibrahim-b-abdulaziz` · `desukiyye` — ikisi tarikat/kişi; `desuki-…` 200, Fransız/Napolyon geçmiyor) · tam metin araması `p=t` "Desûk"/"Dessûk"/"Disûk" sonuç döndürmedi (sayfa içerik listesi boş — arama aracının sınırı, yokluk kanıtı DEĞİL) · Britannica `place/Disuq` 403 |

### Birebir alıntılar ve hükümler
1. **İmroz — ⓿.** TDV `imroz`: *"Venedikliler Çanakkale Boğazı’nı abluka altına aldılar ve Bozcaada ile birlikte İmroz’u da tehdit ettiler."*
   Aynı dönem için Bozcaada'da "eline geçti", İmroz'da yalnız "tehdit" deniyor; yine de kaynak İmroz'un **ele geçirilmediğini
   söylemiyor** ⇒ ✗'e yuvarlanmadı. Y: TDV `bozcaada` *"Venedik’in eline geçti (21 Ramazan 1066 / 13 Temmuz 1656)"* ·
   *"30 Ağustos 1657’de adayı terkettiler"* — atlasın `t: 1657-08-25`i TDV'de **Osmanlı çıkarmasının** günü (TDV: Kurd Paşa'nın kuvveti 25 Ağustos 1657'de adaya çıkarıldı), terk günü 30 Ağustos (5 gün; hüküm değil, bilgi).
2. **Budin — ✗ atlas DOĞRU.** TDV `budin`: *"Bu dönemde karşılıklı hücumlar sırasında Budin üç defa kuşatıldı (1598, 1602, 1603), fakat alınamadı."*
   Y: TDV `estergon` *"teslim etmek zorunda kaldılar (Eylül 1595)"* · *"3 Ekim 1605’te yeniden Osmanlılar’ın eline geçti"* (atlasın 1595-09-02 günü TDV'de yok, TDV ay veriyor).
3. **Manisa — ⓿.** TDV `manisa`: *"Bunun ardından İzmir Beyi Cüneyd’in sebep olduğu karışıklıklardan etkilendi."* ·
   *"Cüneyd Bey şehir yakınlarında Osmanlı kuvvetleri karşısında yenildi (827-828/1424-1425)."* Şehrin el değiştirdiği söylenmiyor.
   Y: TDV `izmir` *"İzmir’i tekrar ele geçirdi; II. Murad 1424’te şehri kesin olarak zaptetti."* — atlas `t: 1425-06-01`;
   TDV 1424 diyor (Manisa maddesi 1424-1425). **Fark bildirilir, çelişki hükmü yok** (atlas tarafının kaynağı yazılı değil).
4. **Çanakkale — ⓿.** TDV `canakkale`: *"Bu beyliğin topraklarının Sultan I. Murad tarafından 1360 yılında Osmanlı topraklarına kesin olarak katılmasıyla Çanakkale yöresi Osmanlı idaresine geçmiş oldu."*
   1366'yı anmıyor. Y: TDV `gelibolu` *"13 Ağustos 1366’da Savoy (Savoia) Dükü Amedeo bir Haçlı filosu ile Gelibolu’yu alıp 14 Haziran 1367’de Bizans’a terketti."* —
   şehir hükmü, Anadolu yakasına taşınmaz. Atlas f 1366-08-01, TDV 13 Ağustos (12 gün).
   📌 Yan not (soru dışı): TDV şehrin nüvesini 1463 kalesine bağlıyor (*"1463 yılında inşa edilen ve Kal‘a-i Sultâniyye adı verilen"*); atlas noktası `d` 1345'ten başlıyor — nokta "yöre"yi temsil ediyorsa sorun yok, ölçmedim.
5. **Ebûkîr — ✓ KOVA HAKLI.** TDV `ebukir`: *"Köse Mustafa Paşa kumandasındaki Osmanlı kuvvetleri, 25 Temmuz 1799’da, Akkâ’dan mağlûp olarak dönen Napolyon tarafından burada yenilgiye uğratıldı ve Ebûkīr Kalesi Fransızlar’ın eline geçti."* ·
   *"Mısır’daki Fransız işgaline son vermek üzere gelen Amiral Abercromby idaresindeki İngiliz ordusu, 8 Mart 1801’de buradan karaya çıktıktan sonra 21 Mart’ta Fransız kumandanı Menou’yu mağlûp etti."*
   Atlas: `d` 1517-05-19 → 1805-07-03 kesintisiz, `isg` yok. **ÖNERİ (UYGULANMADI, diff yazılmadı — yerleşim dosyası koordinatörde):**
   `isg: fransa-cumhuriyet`. Uçlar: başlangıç TDV `ebukir`de **YOK** (1 Ağustos 1798 bir deniz savaşı günü, ele geçirme değil);
   İskenderiye'nin TDV'li 30 Haziran 1798'i D207 komşu şartlarını sağlıyor (komşu günü kendi kaynağına dayanıyor · hedefte gün yok ·
   aynı çıkarma · 19 km) ⇒ ancak "gün komşudan: İskenderiye · TDV iskenderiye" notuyla. Bitiş **ÖLÇÜLEMEDİ** (TDV yalnız 8/21 Mart 1801 veriyor, kale teslimini değil) ⇒ yıl düzeyi 1801.
   ⚠️ Temmuz 1799'da kale kısa süre Osmanlı elinde (TDV: Osmanlı kuvvetleri yenildi ve kale *"Fransızlar’ın eline geçti"*) — kesintinin içinde ikinci bir kesinti; günü TDV'de yok, önerilmez.
   🆕 **Yan bulgu (kümece eksik, kovanın göremediği sınıf):** aynı madde *"İngiliz donanması, intikam için Mart 1807’de İskenderiye ve Ebûkīr’i istilâ etti."* — atlasta **ne Ebûkîr'de ne İskenderiye'de** 1807 `isg` var (döküm: ikisinde de 1882 öncesi `isg` yalnız 1798 Fransız). Ölçülmedi, aday.
6. **Lanzaka — ⓿.** Maddesi yok (4 slug 302, arama 0). TDV `selanik` yalnız şehir: *"Selânik’teki Venedik idaresini (1423-1430)"* · *"II. Murad tahta geçince Selânik’i abluka altına aldı."* — ablukanın çevreyi Osmanlı elinde gösterdiği bir **çıkarımdır**, Lanzaka adı geçmiyor ⇒ ✗ denmedi. Y ✓ (*"29 Mart 1430’da"* atlasla aynı gün).
7. **Cetinje — ⓿.** TDV `karadag` 1538–39'u anmıyor (Çetine yalnız vladikalık ve *"1692’de Osmanlı kuvvetleri Çetine’yi tahrip etti"*).
   Y ✓ ama **failde iki kaynak ayrılıyor:** TDV `barbaros-hayreddin-pasa` *"Doria tarafından daha önce ele geçirilen Adriyatik kıyısındaki Nova da (Castelnuova) kolaylıkla geri alındı (10 Ağustos 1539)."* ·
   HE `herceg-novi` *"a 1538. zauzeli su ga Mlečani"* (Venedikliler). Atlas `isg: ispanya`. TDV "İspanya" demiyor, Doria diyor; HE Venedik diyor ⇒ §4 ⑥ **bildirim, hüküm yok** (bu görevin sorusu değil).
8. **Sayda — ✗ atlas DOĞRU.** TDV `sayda`: *"Sayda bir kaza merkezi konumuna getirilip vilâyetin Beyrut sancağına bağlandı."* · *"1888’de gerçekleştirilen yeni bir idarî düzenleme ile Beyrut vilâyeti teşkil edildi. Sayda yine Beyrut sancağına bağlı bir kazanın merkeziydi."*
   Sayda doğrudan idarede, mutasarrıflıkta değil. ⚠️ 1861–1865 arası için TDV *"Sayda vilâyetini lağvederek"* diyor (1865'e dek vilâyet merkezi) — o da doğrudan idare.
9. **Malko Tırnova — ⓿.** Hiçbir yolda adı geçmiyor (10 yol, tabloda). Y ✓ TDV `kirklareli`: *"24 Ekim 1912 tarihinde Bulgar kuvvetlerince işgal edildi. Şehir dokuz ay kadar süren bu işgalden 21 Temmuz 1913’te kurtarıldı."*
   ⚠️ Öngörümdeki "1913'te Bulgaristan'a bırakıldı" bilgim **ÖLÇÜLMEDİ**; atlasın kendi `s bulgaristan` 1913-09-29'u kaynak değildir (D207) ⇒ dayanak yapılmadı.
10. **Dessûk — ⓿.** Kasaba maddesi yok; tarikat/kişi maddesi Fransız dönemini anmıyor. Y de kaynaksız (atlas kaydı: *"İŞGAL GÜNÜ BULUNAMADI"*).

## 4. Ölçülen isabet oranı
```
X sütunu (n=10, havuz 34)     ✓ kova haklı 1 (Ebûkîr) · ✗ atlas doğru 2 (Budin, Sayda) · ⓿ ölçülemedi 7
ölçülebilen içinde            1 / 3
alt sınır / üst sınır         1/10 (⓿'ların hepsi atlas-doğru ise) … 8/10 (hepsi kova-haklı ise)
Y sütunu (n=10)               ✓ 8 · ⓿ 1 (Reşîd) · ölçülmedi 1 (Deyrülkamer)
```
**47 için ne söylüyor — TAHMİNDİR:** ① Kovanın asıl maliyeti yanlış pozitif değil **ÖLÇÜLEMEZLİK**: 10'un 7'si TDV + bir
akademik yolla karar verilemedi; küçük yerler (Lanzaka, Dessûk, Malko Tırnova) TDV'de madde değil, büyükler (Manisa,
Çanakkale) komşunun kesintisini anmıyor. ② Ölçülebilen 3'ten 1'i isabet — n=3, güven aralığı anlamsız genişlikte;
"%33" bir oran olarak **yazılmamalı**. ③ 47'de bilinen kesin isabetler şimdi **3** (Lüleburgaz · Egina · Ebûkîr — ilk ikisi
rastgele seçilmedi), kesin yanlış pozitif **2** (Budin · Sayda). ⇒ Kova bir **aday üreticisidir** (§9), ihlal kapısına
bağlanırsa tavanı kaynakla değil yalnız sayıyla kurulabilir — W46b'nin "önce yanlış pozitif ölçülsün" şartı bu örneklemle
**karşılanamadı**, çünkü pay ölçülemedi.
④ Y sütunu: 8/8 ölçülebilen komşu kesintisi kaynakta var ⇒ kova **atlas zincirinden türemiş hayalet kesintiler** üretmiyor
(bu örneklemde); sorun komşunun değil, X'in kaynak sessizliği.

## 5. Öngörü sınavı
- **Sayı:** "2–3 kova haklı" → **1** ölçüldü (Malko Tırnova ve Dessûk ⓿ kaldı — çürümedi, ölçülemedi). "4–5 atlas doğru" → **2**
  (Budin, Sayda TUTTU; Çanakkale, Lanzaka, Cetinje ⓿). "kalanı ⓿" — 1–2 bekledim, **7** çıktı ⇒ **sayı TUTMADI**, en büyük
  sapma ölçülemezlikte: öngörüm kaynağın sessizliğini hafife aldı.
- **Mekanizma (nokta/alan):** ölçülebilen 3 kalemin üçü de uyuyor (Estergon kalesi → Budin değil · mutasarrıflık sınırı → Sayda
  değil · Mısır Fransız işgali → Ebûkîr evet). **Çürümedi ama n=3 ile sınanmış da sayılmaz.**

## 6. Bulunamadı (adıyla)
- Ebûkîr Fransız işgalinin başlangıç ve bitiş günü (TDV `ebukir`).
- Lanzaka · Malko Tırnova · Dessûk · Cetinje için 1423 / 1912 / 1798 / 1538 dönemi hakkında herhangi bir kaynak cümlesi.
- TDV tam metin araması (`p=t`) bu oturumda içerik listesi döndürmedi — **araç sınırı**, yokluk kanıtı değil (§7).
