# ORGANİZASYON ŞEMASI

Bu dosya **kimin ne yaptığını, nasıl haberleştiğini ve hangi modelle çalıştığını**
tanımlar. Tasarımın tamamı 28-31 Temmuz'da **ölçülmüş** deneyimden çıktı; her
kuralın yanında onu doğuran vaka yazılı.

---

## 0. ÜÇ TEMEL KARAR

### Karar 1 — Oturumlar DOSYAYA göre sahiplenir, ROLE göre modellenir, BÖLGEYE göre araştırır

Bu üçü ayrı sorulardır ve bugüne kadar karıştırıldığı için iş çöpe gitti.

| Soru | Cevabı belirleyen | Neden |
|---|---|---|
| **Kim yazabilir?** | **DOSYA** | 7 petek üretimi çöpe gitti, 3 kez başkasının yarım işi commit'lendi. Hepsinde konular farklı, **dosya aynıydı**. Konu ayrımı çakışmayı önlemez. |
| **Hangi model?** | **ROL** | Yanlış cevap sessizce "tarihî gerçek" olarak veriye yazılıyorsa Opus; şartname yazılıysa Sonnet; yalnız sayı üretiliyorsa Fable. |
| **Ne araştırır?** | **BÖLGE** | Kaynaklar bölgeye kümeleniyor. Bir oturum TDV'nin Balkan maddelerini tanıyorsa Arabistan'da sıfırdan başlar. |

⚠️ **Zaman bazlı bölme denendi ve yanlış çıktı**: "sen 1400-1500'ü al" dediğimizde
aynı bölgenin kaynakları iki oturuma bölünüyor ve ikisi de yarım kalıyor. Dönem
sınırı araştırmayı böler, coğrafya sınırı bölmez.

### Karar 2 — Durum bilgisi MESAJLA DEĞİL DOSYAYLA akar

🔴 **Ölçülmüş sebep:** 30 Temmuz 21:53'te üretim başladı, kilit duyurusu gönderildi,
**mesaj kuyruğa alındı**, hedef oturum turunu bitirmeden ulaşmadı, 22:06'da girdiye
108 satır yazıldı. Koşu temiz bitecekti, denetim temiz çıkacaktı, harita sessizce
veriden geri kalacaktı.

Ayrıca bir oturuma **beş kez** durum sordum ve cevap gelmedi — oysa o oturum
`OTURUM-N-ILERLEME.md` dosyasını zaten güncelliyordu.

> **Kural:** Bitirdiğini kendi ilerleme dosyana yazarsın. Takipçi mesaj beklemez,
> dosyaları okur. Mesaj YALNIZ acil kesme içindir (kilit, hata, durdurma).

### Karar 2b — `/compact` ÖNCE YAZ, SONRA SIKIŞTIR

**`/compact` çalışmayı çöpe atmaz** — dosyalar, commit'ler, denetimler yerinde
kalır. Yalnız **konuşmayı** sıkıştırır. Yani sıkıştırmanın maliyeti, o oturumun
**henüz dosyaya yazmadığı** şey kadardır.

> **Kural: sıkıştırmadan önce ilerleme dosyanı yaz.** Yazdıysan sıkıştırma
> bedava; yazmadıysan ölçümünü kaybedersin ve yeniden ölçmek sıkıştırmanın
> kazandırdığından pahalıya gelir.

Bu, Karar 2'nin ("durum dosyayla akar") ikinci gerekçesi: aynı disiplin hem
mesaj çakışmasını hem sıkıştırma kaybını önlüyor.

**Ne zaman:**
| Durum | Yapılacak |
|---|---|
| Uzun konuşma + **iş sınırında** (paket teslim, koşu bitti) | `/compact` — en ucuz an |
| Uzun konuşma + **iş ortasında** | **sıkıştırma**; birazdan gerekecek ayrıntıyı kaybedersin |
| Aynı oturum **bambaşka** bir bölgeye/işe geçiyor | `/clear` + yeni brifing |
| Kısa konuşma | ikisi de gereksiz, sıkıştırma da token yakar |

⚠️ **Gereksiz sıkıştırma iki kez ödetir:** sıkıştırmanın kendisi konuşmayı
okuyup özet yazar (token), sonra kaybolan ayrıntı için dosyalar yeniden okunur
(token). Bu yüzden "ne olur ne olmaz" diye sıkıştırmak zarardır.

📌 **Asıl token kalemi sıkıştırma değil:** uzun oturumlar arası mesajlar ve
büyük dosyaların tekrar tekrar okunması. Karar metinlerini mesaj yerine
**dosyaya** yazmak ikisini birden azaltır.

### Karar 3 — Denetim, hafızanın kendisidir

Bugün 12 denetim kuruldu ve bunların üçü doğrudan "yaptım mı?" sorusunu makineye
çevirdi: `Değişmez 2s` (yabancı devir maddesiz mi), `Değişmez 2t` (madde var ama
harita kıpırdamıyor mu), `denetle_statu.py E` (etiket kurumun ömrünü aşıyor mu).

> **Kural:** Bir şikâyet sınıfı tekrarlıyorsa, onu düzeltmeden önce **ölçen** bir
> denetim yaz. Denetim yazılınca aynı sınıf bir daha elle aranmaz.

---

## 1. ORGANLAR — 16 tanım, aynı anda en fazla 10 açık

### ÇEKİRDEK — her zaman açık (4)

| # | Ad | Model | Dosyaları | İşi |
|---|---|---|---|---|
| **K** | **KOORDİNATÖR** | Opus | `data/yerlesimler*.js` · `arac/uret_devirler.py` · defterler | Karar verir, görev dağıtır, yayınlar. Kullanıcının konuştuğu oturum. |

🔴 **KOORDİNATÖRÜN DOSYALARI 31 TEMMUZ'DA DARALTILDI — ölçülmüş sebeple.**
Eskiden `js/` · `css/` · `index.html` de bendeydi ve *"düzeltme listelerini
tek elden uygular"* yazıyordu. Bir günün ölçümü bunun **darboğaz** olduğunu
gösterdi:
```
YAMACI (yükümü azaltmak için tanımlanan oturum)  07:32'den beri BOŞ — 7,5 saat
BALKAN (+15 yerleşimlik paket hazır)             07:35'ten beri BOŞ
aynı gün koordinatörün tek elden uyguladığı parti sayısı: 9
```
Sebep tembellik değil, **her seferinde "ben hızlıca yaparım" demek** — dokuz
kez üst üste, ve her seferinde tek başına doğru olan karar toplamda sırayı
kilitledi.
> **Kural: koordinatör KARAR verir, UYGULAMAZ.** Mekanik uygulama YAMACI'ya,
> arayüz ARAYÜZ'e gider. Koordinatör yalnız inceler, koşturur ve yayınlar.
⚠️ İstisna: kilidin sahibi olduğu için `data/yerlesimler*.js`'e **son yazan**
odur — ama yamayı kendisi yazmaz.
| **D** | **DENETÇİ** | Opus | `arac/denetle*.py` · `denetim/` | Bütün denetimler. Kimseye iş yapmaz, herkesi ölçer. Kendi körlüğünü de ölçer. |
| **M** | **MOTOR** | Opus | `arac/uret_petek.py` · `renkler.py` · `girdi.py` | Petek geometrisi, renk grafiği, epoklar. Üretim kilidinin sahibi. |
| **T** | **TAKİPÇİ** | Fable | `KONTROL.md` · `oturumlar/RAPOR-*.md` | Word maddelerini numaralar, ilerleme dosyalarını okur, "kim ne yaptı / ne bayat" raporlar. **Karar vermez, sayar.** |

### ARAŞTIRMA — bölgeye göre, aynı anda en fazla 3 (4 tanım)

| # | Ad | Model | Kapsamı |
|---|---|---|---|
| **A1** | **ANADOLU** | Opus | Anadolu beylikleri · Selçuklu · Fetret · Karaman/Germiyan zinciri · Kırım |
| **A2** | **BALKAN** | Opus | Rumeli · Macaristan-Erdel · Eflak-Boğdan · Yunanistan · Balkan savaşları |
| **A3** | **ARAP-AFRİKA** | Opus | Mısır · Kuzey Afrika · Hicaz-Yemen · Sudan · Habeşistan |
| **A4** | **DOĞU** | Opus | İran · Irak · Kafkasya · Orta Asya · Hindistan |
| **A5** | **ARABİSTAN** | Opus | Hicaz · Yemen · Necid · Asîr · Lahsa · Katar · Kuveyt · Umman |

🔴 Araştırma oturumları **veriye yazmaz** — `oturumlar/DUZELTME-<bölge>.md` yazar.
Sebep: `yerlesimler.js` tek dosya ve çok yazarlı olduğu an bozuluyor.

### UYGULAYICI — gerektiğinde açılır (3)

| # | Ad | Model | Dosyası | İşi |
|---|---|---|---|---|
| **U1** | **KRONOLOJİ** | Sonnet | `data/olaylar_ek*.js` | Araştırmanın doğrulanmış madde metinlerini işler. **Kendi başına tarihî iddia üretmez.** |
| **U2** | **KATALOG** | Sonnet | `data/devletler.js` · `data/kimlikler.js` | Devlet kayıtları, kimlikler, renk paylaşımı ölçümü. |
| **U3** | **SAVAŞLAR** | Sonnet | `data/savaslar.js` | Oklar, muharebeler, `tur`/`sonuc` etiketleri. |

### DESTEK — koordinatörün yükünü AZALTMAK için açıldı (2)

| # | Ad | Model | Dosyası | İşi |
|---|---|---|---|---|
| **Y** | **YAMACI** | Sonnet | `scratchpad/` | Düzeltme listelerini **sınanmış yama betiğine** çevirir. Veriye yazmaz — koordinatör inceleyip koşar. |
| **S** | **KAYNAK** | Fable | `oturumlar/KAYNAK-DENETIMI.md` | Listelerdeki TDV slug'larını önceden doğrular (ölü slug + yönlendirme tuzağı). |
| **G** | **COĞRAFYA** | Opus | `oturumlar/COGRAFYA-*.md` | Natural Earth katmanlarının hangisi **gerçek engel**, hangisi haritacının isim lekesi — ölçer, beyaz liste ve yaslama şartnamesi yazar. **`uret_petek.py`'ye YAZMAZ**, MOTOR uygular. |
| **A** | **ARAYÜZ** | Opus | `js/` · `css/` · `index.html` · `arac/uret_altlik.py` | Bütün ön yüz. Harita katmanları, panel, kronoloji akışı, etiketleme, gösterim kararları. Veriye YAZMAZ. |

📌 **ARAYÜZ neden ayrı bir oturum ve neden Opus:** ön yüz işi veri işiyle
**hiç çakışmıyor** (ayrı dosya, ayrı hata sınıfı) ama bugüne kadar aynı
oturumun sırasında bekliyordu — yani ücretsiz bir paralellik kullanılmıyordu.
Opus olmasının sebebi §2'nin ölçütü: *"bu bir devlet sınırı mı yoksa nehir mi"*
sorusunu doğurmayan bir gösterim seçmek, yanlış cevabı **sessizce doğru
görünen** bir karardır — kullanıcı yanlış okur ve kimse hata vermez.
⚠️ **`js/` ve `css/` TEK YAZARLI kalır.** Devir tamdır: koordinatör de artık
oraya yazmaz. İki yazarlı `app.js` yedi çöpe giden üretimin aynı sınıfıdır.

📌 **COĞRAFYA neden Opus:** "bu poligon gerçek bir şev mi yoksa 'ARABIAN PENINSULA'
yazmak için çizilmiş bir leke mi" sorusunun yanlış cevabı **sessizce geometriye
gömülür** — sınıf adı doğru, sonuç yanlış olur (`Plateau` içinde hem Üstyurt şevi
hem PENÍNSULA IBÉRICA var). §2'nin ölçütü birebir bu.

⚠️ **Açma ölçütü genişledi:** kural "koordinatörün yükünü azaltıyor mu" diyordu;
COĞRAFYA **MOTOR'un** yükünü azaltıyor. Genişletme bilinçli — darboğaz artık tek
bir organ değil, **üretim kilidinin sahibi olan her organ.** Ölçü aynı kalıyor:
çıktısı doğrulanmayı bekleyen organ ekler, şartname üreten organ azaltır.

⚠️ **Bu ikisi neden var:** koordinatör `yerlesimler.js`'in tek yazarı ve bu kural
yedi çöpe giden üretimden sonra kondu — ama tek yazar olmak **darboğaz** yaratıyor.
Bir günde üç kez desen tutmadı (Kuveyt · Annaba/Bicâye · Hanya) ve beş ölü slug
bulundu, biri **tek harf** farkıyla. İkisi de mekanik ve devredilebilir işti.

> **Yeni oturum açma ölçütü: koordinatörün yükünü AZALTIYOR mu?** Araştırma oturumu
> ekler (çıktısı doğrulanmayı bekler), YAMACI ve KAYNAK azaltır.

### 🤖 SAHİBİ OLMAYAN — üretilir, elle yazılmaz

`data/donemler.js` · `data/devletler_harita.js` · `data/bolgeler.js` · `data/devirler.js`

Elle düzenleme bir sonraki koşuda **sessizce ezilir** — hata vermez, denetim temiz görünür.

---

## 2. MODEL SEÇİM KURALI

Tek ölçüt: **yanlış cevap sessizce "gerçek" olarak veriye yazılır mı?**

| Model | Rol | Çıktı |
|---|---|---|
| **Opus** | *"Ne doğru?"* — tartışmalı tarih, TDV doğrulaması, geri alınamaz motor kararı | Kaynaklı, slug'ı doğrulanmış olgu listesi |
| **Sonnet** | *"Kural yazılı mı?"* — şartnamesi belli dönüşüm, transkripsiyon | Dosyaya işlenmiş veri |
| **Fable** | *"Kaç?"* — yalnız ölçüm ve sayım | `.md` raporu, **veriye yazmaz** |
| **Haiku** | ❌ **KULLANILMAZ** | TDV ölü slug tuzağını kaçırıyor |

⚠️ Bir Sonnet oturumu doğrulanmamış tarihî iddia yazmaz; kaynak gerektiren madde
önüne çıkarsa **durur** ve ilgili Opus oturumuna havale eder.

---

## 3. DEFTERLER — 8 değil 6

Sekiz ayrı dosya istendi. **Altıya indiriyorum ve sebebi ölçülmüş:** okunmayan
kural, olmayan kuraldan kötüdür — çünkü "yazılıydı" diye güven verir. Bugün
`§28`'e yanlış bir ders yazıldı ve sonraki oturumu yanıltacaktı.

| Defter | İçerir | Durum |
|---|---|---|
| **`CLAUDE.md`** | Genel kurallar · kaynak kuralı · ses protokolü · yıldızlı komutlar | ✅ var |
| **`ORGANIZASYON.md`** | Bu dosya: organlar · modeller · haberleşme · token disiplini | 🆕 |
| **`KONTROL.md`** | Kullanıcının gördüğü her madde, numarayla, durumu ve sahibiyle | 🆕 |
| **`YAPILACAKLAR.md`** | Sıradaki işler, sahibi ve ölçülmüş gerekçesiyle | ✅ var |
| **`OGRENILENLER.md`** | Ölçülmüş dersler (bugün 29 madde) | ✅ var |
| **`MIMARI.md`** + `VERI-YAPISI.md` | Şema, değişmezler, veri sözleşmeleri | ✅ var |
| **`KARAR-DAYANAK.md`** | Açık kararlar ve **yaslandıkları sayılar** — okunmaz, ARANIR | 🆕 31 Tem |

🔴 **Yedinciyi eklerken kendi kuralımı çiğniyor muyum?** Hayır, ve ayrım
kullanım biçiminde: yukarıdaki altı defter **okunur**, `KARAR-DAYANAK.md`
**grep'lenir.** Girdi kümesi değiştiren oturum tek satır arar:
`grep -n "su kümesi" KARAR-DAYANAK.md`. Bu yüzden `ORGANIZASYON.md`'ye
katılamaz — burası baştan sona okunan bir dosya, arama hedefi ise **kısa ve
sabit** olmak zorunda. Karar kapanınca satır **silinir**; defter uzarsa
kimse aramaz, aranmayan defter yoktur.
📌 Gerekçesi ölçülmüş: `OGRENILENLER §41`, bedeli **bir üretim koşusu (~40 dk)**.

**Birleştirilenler ve sebebi:**
- *Çalışma kuralları* → `ORGANIZASYON.md`'ye girdi; ayrı dosya olsa kimse iki
  dosyayı birden okumaz.
- *Motor/model defteri* → `ORGANIZASYON §1-2`; tablo tek yerde durmalı, iki yerde
  durursa biri bayatlar ve **hangisinin bayat olduğu bilinmez**.
- *Token tasarrufu defteri* → `ORGANIZASYON §5`; kural az, dosya gereksiz.

---

## 4. SESLER — beş ayrı sinyal

Ses, kullanıcının ekrana bakmadığı anda tek iletişim kanalı. Bu yüzden
**anlamları ayrışmalı**, yoksa hepsi "bir şey oldu"ya iner.

| Sinyal | Ses | Anlamı |
|---|---|---|
| 🟢 **İş bitti** | 3 × 800 Hz, 300 ms | Sıradan görev tamam, sıra sende |
| 🎉 **Uzun iş bitti** | 9 × 880 Hz, 250 ms aralıklı | Üretim/doğrulama bitti — **masaya dön** |
| ❓ **Soru var** | 2 × 1200 Hz, 150 ms | Cevabın olmadan devam edemiyorum |
| 🔴 **Hata var** | 4 × 400 Hz, 500 ms | Bir şey bozuldu, müdahale gerek |
| 💤 **Boştayım** | 1 × 600 Hz, 800 ms | Görevim bitti, yeni iş bekliyorum |

```bash
# iş bitti
powershell -c "[Console]::Beep(800,300); [Console]::Beep(800,300); [Console]::Beep(800,300)"
# uzun iş bitti
powershell -c "1..9 | ForEach-Object { [Console]::Beep(880,250); Start-Sleep -Milliseconds 120 }"
# soru var
powershell -c "[Console]::Beep(1200,150); Start-Sleep -Milliseconds 100; [Console]::Beep(1200,150)"
# hata var
powershell -c "1..4 | ForEach-Object { [Console]::Beep(400,500); Start-Sleep -Milliseconds 150 }"
# boştayım
powershell -c "[Console]::Beep(600,800)"
```

⚠️ **Bitti sanıp erken haber vermek, hiç haber vermemekten kötüdür.** Sinyal her
zaman **gerçekleşmiş** bir olaya bağlanır — geçen süreye, tahmine ya da bir
oturumun "bitiyorum" demesine değil. Uzun işlerde bekçi betiği somut bir dosya
damgasını yoklar.

---

## 5. TOKEN DİSİPLİNİ — 5 saatlik pencere

### Maliyeti belirleyen şey oturum sayısı değil, ARAŞTIRMA HACMİDİR

Paralellik toplamı değiştirmez, pencereyi daha çabuk tüketir. Kaldıraç **dalga
başına madde sayısıdır**.

### Devretme ölçütü: SIKIŞTIRMA ORANI

| Oran | İş türü | Kim yapar |
|---|---|---|
| ~20:1 | Araştırma — 20 TDV sayfası okunur, 7 doğrulanmış olgu çıkar | **Ayrı oturum** |
| ~50:1 | Ölçüm — bütün geometri taranır, 5 sayı çıkar | **Ayrı oturum** |
| ~1:1 | Mekanik düzenleme — dosya girer, aynı dosya çıkar | **Koordinatör** |
| — | Entegrasyon, karar, yayın | **Koordinatör** |

🔴 **Gerçek tavan bütçe değil, DOĞRULAMA KAPASİTESİDİR.**

📏 **Ölçüldü (31 Temmuz):** bir günde ~40 mesaj gönderildi, ~15 esaslı teslimat
doğrulandı. **10 aktif oturumu geçince** teslimatlar doğrulanabildiğinden hızlı
geliyor. O gün üç kez bedeli ödendi: `§28`'e yanlış ders yazıldı, `§22` **iki kez**
düzeltildi, Kırım'da iki oturum çelişti ve **ikisi de yanlıştı**.

🎯 **Tavanı yükselten şey oturum sayısı değil, DENETİM.** Koordinatörün bakması
gereken şeyleri azaltan her denetim tavanı gerçekten yükseltir:
`Değişmez 2s` (115 vaka, elle bakılamazdı) · `Değişmez 2t` (7 `fetih` maddesi) ·
`denetle_statu.py E` (koordinatörün kendi hatasını yakaladı) · koşu bekçisi.
**11 oturum + güçlü denetim, 15 oturum + zayıf denetimden hızlıdır.** Her çıktı koordinatörden
geçiyor; oturumlar doğrulanabilenden hızlı üretirse ya birikir ya doğrulanmadan
kabul edilir — ikincisi bu projeye hatanın giriş yolu.

### compact / clear disiplini

| Ne zaman | Ne yapılır |
|---|---|
| Görev dağıtımından **hemen sonra** | `/compact` — mesajlar gönderildikten sonra, çünkü görev metni tam ayrıntı ister |
| Bir blok bitip yenisi başlarken | `/compact` |
| Konu tamamen değiştiğinde | `/clear` + `KOORDINASYON.md` oku |
| Uzun koşu beklenirken | **hiçbir şey** — bekleme token yakmaz |

⚠️ `/compact` **sessizce ayrıntı kaybeder**. Bu yüzden ayrıntı önce **dosyaya**
yazılır, sonra compact edilir. Kuyruk `YAPILACAKLAR.md`'de duruyorsa compact
zararsızdır.

---

## 6. KULLANICI → İŞ BORU HATTI

```
1. Kullanıcı haritaya bakar, gördüğünü NUMARALAYARAK KONTROL.md'ye yazar
2. Koordinatör her maddeyi okur ve ÜÇ SORUYU sorar:
      · bu bir ÖLÇÜM işi mi (bak, say, raporla)  → Fable/Denetçi
      · bir ARAŞTIRMA işi mi (kaynak gerekiyor)  → Opus, bölgeye göre
      · bir UYGULAMA işi mi (şartname yazılı)    → Sonnet ya da kendisi
3. Prompt yazılır, ilgili oturuma gönderilir, KONTROL.md'de satır işaretlenir
4. Oturum işi yapar, kendi ILERLEME dosyasına yazar
5. Takipçi dosyaları okur, KONTROL.md'yi günceller
6. Koordinatör düzeltme listelerini uygular, denetimi koşar, yayınlar
```

**`KONTROL.md` satır biçimi:**

```
| 15-07 | Eflak'ın üçte biri açık kırmızı görünüyor | 🔬 A2 | ölçüldü: 14 noktanın 8'i doğrudan | ⏳ 8 nokta bekliyor |
| 15-19 | Petek denizaşırı geçiyor (Oran→İspanya)   | ⚙️ M  | kara-kısıtlı Voronoi, 32 parça  | ⏳ koşu bekliyor    |
| 14-01 | Detay penceresi ortada açılıyor           | 🖥️ K  | r143'te panel içine yöneltildi   | ✅ bitti            |
```

Durum: `✅ bitti` · `⏳ sırada` · `🔬 ölçülüyor` · `❌ yapılmayacak (gerekçe)` ·
`❓ konumu belirsiz`

---

## 7. OTURUMLARIN UYMAK ZORUNDA OLDUĞU KURALLAR

1. **Yalnız kendi dosyana yaz.** Başka dosyada düzeltme gerekiyorsa sahibine bildir.
2. **`git add .` YASAK.** Dosyaları tek tek adıyla ekle, `git diff --cached --stat`
   ile gör, sonra commit et. Push **yalnız koordinatör** yapar.
3. **Kaynak: TDV birincil, Wikipedia asla tek başına.** Her slug `<title>` ile
   doğrulanır. İki tuzak birden var: **ölü slug** (arama sayfasına yönlendirir,
   "madde var" sanılır) ve **yönlendirme** (başka maddeye gider, "madde yok"
   sanılır). Bulamazsan **uydurma** — "kaynak yok" yaz.
4. **Ölçmeden eşik koyma.** Yüzlerce sonuç çıkıyorsa bilinen borç + tavan deseni;
   ihlal ilan etmek denetimi işlevsizleştirir.
5. **Sayı büyükse önce sayma yöntemini sorgula.** 313 vaka aslında 13 konumdu.
6. **Bir düzeltmenin GÖRÜNÜR olduğunu doğrula.** İşlem başarılı dönebilir ve sonuç
   yanlış olabilir — bugün altı kez oldu.
7. **Bitirince kendi `ILERLEME` dosyana yaz.** Mesaj beklenmez, dosya okunur.
8. **Uzun yazma turuna başlamadan önce sor: "üretim koşuyor mu?"** Ölçüsü:
   `donemler.js` · `bolgeler.js` · `devletler_harita.js` damgaları.

---

## 8. AÇILIŞ SIRASI

Yeni bir oturum açıldığında **sırasıyla** okur:

1. `CLAUDE.md` — genel kurallar, kaynak kuralı, ses protokolü
2. `ORGANIZASYON.md` — bu dosya: kim, hangi dosya, hangi model
3. `YAPILACAKLAR.md` — kendi kuyruğu
4. `OGRENILENLER.md` — ölçülmüş dersler (en az başlıkları)
5. kendi `oturumlar/OTURUM-*-ILERLEME.md` dosyası

⚠️ `OGRENILENLER.md` uzuyor. 40 maddeyi geçtiğinde **konu başlıklarına** bölünmeli
(ölçüm · kaynak · araç · protokol), yoksa okunmaz hâle gelir ve okunmayan ders
yoktur.

---

## 9. 🔴 BAŞLIK → ROL TABLOSU — başlığa göre yönlendirme YASAK

**Neden var:** koordinatör 31 Temmuz'da **üç kez** oturum başlığına bakıp yanlış
yönlendirdi. Üçünde de tanı aynı: *"aynı adı taşıyan iki farklı şey."* Bir
kural üç kez ihlal edilmişse eksik olan disiplin değil, **arama hedefidir.**

⚠️ Oturum başlıkları **kullanıcının açtığı sırayı** yansıtıyor, rolü değil.
Yönlendirmeden önce buraya bak.

| başlık (listede görünen) | GERÇEK ROL | dosyası |
|---|---|---|
| `VERİ KRONOLOJİ 2` | **U4 YER DİZİNİ** — 327 yer adı sınıflandırma | `data/cografya.js` (yeni) |
| `VERİ KRONOLOJİ` | **U1 KRONOLOJİ** — madde yazımı | `data/olaylar*.js` |
| `ARAYÜZ COĞRAFYA` | **G COĞRAFYA** — hat/DEM/su bölümü | `arac/uret_altlik.py`, DEM zinciri |
| `GUI GELİŞTİRME` | **A ARAYÜZ** — arayüz | `js/`, `css/`, `index.html` |
| `ARAŞTIRMA BALKAN` | araştırma, **`OTURUM-11-BALKAN.md`**'ye yazar | rapor dosyası |
| `VERİ DEVLET` | Oturum 3 | `data/devletler.js` |
| `VERİ KİMLİK` | palet / kimlik | `arac/renkler.py` |
| `UI ELEMENT INSPECTOR` | proje DIŞI araç | ayrı depo |
| `MOTOR` | petek üretimi, geometri, tavanlar | `arac/uret_petek.py`, `uret_devirler.py` |
| `DENETÇİ` | değişmezler ve denetim araçları | `arac/denetle*.py` |
| `TAKİPÇİ` | kontrol/kanıt defteri | `KONTROL.md`, `arac/kontrol_dogrula.py` |
| `YAMACI` | paket uygulama (başkasının önerisini veriye işler) | `data/yerlesimler*.js` |
| `KAYNAK` | kaynak denetimi | `oturumlar/KAYNAK-DENETIMI.md` |
| `ARAŞTIRMA ARABİSTAN` | **kendini "A5" diye imzalar** — Arabistan/Hicaz/Yemen/Sudan | `oturumlar/ARABISTAN-DUZELTMELER.md` |
| `ARAŞTIRMA ANADOLU` | Anadolu beylikleri, Karaman, Doğu Anadolu | rapor dosyası |
| `ARAŞTIRMA DOĞU` | İran doğusu, Afganistan, Sind, Doğu Türkistan | rapor dosyası |
| `ARAŞTIRMA ARAP AFRİKA` | Kuzey Afrika ocaklıkları | rapor dosyası |
| `VERİ ORTASYA` | Hârizm, Hîve, Kazak bozkırı, **Kırım/Deşt-i Kıpçak** | `data/yerlesimler_ortaasya2.js` |
| `VERİ KİŞİ` | kişi dizini | `data/kisiler.js` |
| `VERİ SAVAŞ` | sefer/savaş verisi, `tur:"deniz"` etiketleri | `data/savaslar.js` |
| `ÖLÇÜM GEOMETRİ` | ölçüm oturumu (iki nüsha var) | — |
| `ÇAPRAZ DOĞU` | **çapraz doğrulama** — İran (altı hanedan) + Memlük | `oturumlar/CAPRAZ-DOGU.md` |
| `ÇAPRAZ KUZEY` | **çapraz doğrulama** — Rusya + Lehistan | `oturumlar/CAPRAZ-KUZEY.md` |
| `ÇAPRAZ BATI` | **çapraz doğrulama** — Avusturya + Macaristan + Venedik + Fransa | `oturumlar/CAPRAZ-BATI.md` |

📌 Üçünün ortak görev tanımı: **`oturumlar/CAPRAZ-GOREV.md`**. Veriye YAZMAZLAR;
öneri üretirler, uygulamayı veri oturumları yapar.

📌 Yeni oturum açılınca **satırı buraya ekle.** Tablo eksikse yönlendirme yine
başlığa düşer ve hata tekrarlanır.

### 🔴 EK KURAL — kullanıcıya yazarken KOD ADI kullanılmaz

1 Ağustos: koordinatör kullanıcıya *"DENETÇİ ve A5'e `/compact`"* yazdı.
Kullanıcı **A5'i bulamadı** — çünkü o ad hiçbir yerde görünmüyor; oturumun
listedeki başlığı `ARAŞTIRMA ARABİSTAN`. Kod ad oturumun **kendi imzası**.

⚠️ Ve o sırada bu tablo **21 oturumun yalnız 8'ini** taşıyordu, yani §9'un
kendi bakım kuralı işletilmemişti. Kural yazmak yetmiyor; **tabloyu güncel
tutmak da bir iş** ve sahibi koordinatör.

⇒ İki yönlü kural:
- **Oturumlar arası** yazışmada kod ad serbest (oturum kendini öyle tanıyor)
- **Kullanıcıya** yazarken **yalnız listedeki başlık** kullanılır

📌 Bu, §9'un asıl dersinin kullanıcı tarafı: *"aynı şeyin iki adı varsa,
karşındakinin gördüğü adı kullan."*

📌 Ve doğru davranışın örneği kayda geçsin: U4, iş **dosya sahipliğini
bozmadığı hâlde** (metni ilerleme dosyasına yazacaktı) *"iş TÜRÜ benim işimin
dışında"* diyerek durdu. **Sahiplik ihlali olmaması, doğru adres olduğu
anlamına gelmiyor.**

---

## 10. KULLANICI HER OTURUMLA KONUŞUR — soru soracak oturum önce haber verir

🔴 **Yanlış öncül düzeltildi (31 Tem):** koordinatör *"kullanıcı yalnız
koordinatör oturumunda konuşuyor"* varsayıyordu. **Yanlış** — ARAYÜZ ölçtü:
kullanıcı aynı gün ona doğrudan üç kez yazdı.

Sonucu: aynı soru **iki yerden birden** kullanıcıya gitti (atlasın açılıp
açılmadığı sınavı).

> **Kural:** kullanıcıya bir şey soracak oturum, sormadan önce koordinatöre
> bildirir. İzin için değil — **aynı sorunun iki yerden gitmesini önlemek
> için.** Cevap kime gelirse öbürüne iletir.

⚠️ **Kuralın sınırı (ARAYÜZ'ün düzeltmesi):** kullanıcı bir oturuma **doğrudan**
yazdığında o oturum haber beklemeden cevap verir — soru zaten ona gelmiştir.
Kural yalnız **oturumun kendi başlattığı** sorular için geçerli.

📌 Ve düzeltmenin **sonuç aynı olduğu hâlde** yapılması önemliydi: yanlış öncül
düzeltilmezse ileride bir dağıtım kuralı ona dayanır ve **sessizce** bozulur.
Bugün tam bu sınıftan üç hüküm çürüdü (`OGRENILENLER §49`, `§50`).

⚠️ Bunun ikinci sonucu: **kullanıcının bir oturuma söylediği şey öbürlerinde
bilinmiyor.** Bir karar başka bir oturuma verilmişse koordinatör onu
duymayabilir. Karar niteliğindeki her cevap `KARAR-DAYANAK.md`'ye ya da ilgili
şartnameye yazılmalı — mesajda kalmamalı (`Karar 2`).

---

## 11. 🔴 SÜRÜM DAMGASI YAYINI TUTMAZ — yalnız TUTARSIZ yapar

ARAYÜZ gün boyu şöyle davrandı ve gerekçesi makuldü:
> *"Gözle doğrulanmadı → damgalamıyorum, doğrulanmamış değişikliği yayına
> sokmam."*

**Ama yayın 30 commit'le gitti ve o commit'ler de içindeydi** — yalnız
damgasız olarak. Kendi tespitiyle:

> *"Damgayı tutmak yayını TUTMUYOR, yalnız yayını TUTARSIZ yapıyor: kod
> gidiyor, tarayıcı eski dosyayı önbellekten okuyor."*

⇒ Yani damgayı tutmak, *"yazıldı ama ulaşmadı"* sınıfının **kendisini
üretiyor** — üstelik o sınıfı kataloglarken.

### Kural

| istenen | YANLIŞ yol | DOĞRU yol |
|---|---|---|
| değişiklik yayına girmesin | damgayı tutmak | **koordinatöre "bu commit'i dalgaya alma" demek** |
| değişiklik doğrulanmamış | damgayı tutmak | **damgayı normal at, commit mesajına yaz** |

**Damga bir onay aracı değil, bir önbellek aracıdır.** İki ayrı işi tek
araçla yapmaya çalışmak ikisini de bozar.

📌 Ve `js`/`css`'e dokunan her turun sonunda `py arac/surum_damgala.py`
koşturulur. Koşturulmazsa `denetle_yayin.py` kapıda yakalar — bugün yakaladı
(`ca53d9c` ve `a4ea23a`, r360'ta takılı kalmışlardı; r376'ya çıkarılıp öyle
gönderildi). Bu, aynı aracın daha önce yakaladığı *"r83'te 4 commit takıldı"*
vakasının tekrarı olacaktı.

### 📌 Ve günün maliyet ölçümü — ARAYÜZ'ün notu

> *"Sekiz önerinin elenmesi UCUZDU, ikisinin uygulanması PAHALI oldu.
> Elenenler bir mesaj turuna mal oldu; uygulanan ikisi (r298 açılış
> değişikliği, damgasız commit'ler) bir gerileme ve bir yayın tutarsızlığı
> üretti. Ölçüm maliyeti HER ZAMAN uygulama maliyetinden küçük çıktı —
> bugünkü 14 ölçümün hiçbiri bu kadar pahalıya mal olmadı."*

Bu, `OGRENILENLER §58-59`'un işletme karşılığı: ölçmek bir gecikme gibi
görünür, ama bugünkü sayılarla **her seferinde** uygulamaktan ucuzdu.

---

## 12. 🔴 KOORDİNATÖR BİR RÖLEDİR — ve röle, doğrulamadığı sayıyı ŞARTA ÇEVİRİR

1 Ağustos: BALKAN *"10 maddeye işlendi, 14 etiket"* diye bildirdi ve üç vaka
tarif etti. Koordinatör bunu **doğrulamadan** ARAYÜZ'e **sınav şartnamesi**
olarak geçirdi. ARAYÜZ ölçtü, üçü de tutmadı:

| koordinatörün ilettiği | gerçek |
|---|---|
| *"10 madde, 14 etiket"* | **7 madde, 10 ad** |
| *"1482-01-01'de aynı maddede hem kazanç hem kayıp — iki alanı da oku"* | O tarihte **iki ayrı madde** var; Zaklise'ninki alansız (o kayıt 1479 listesinde) |
| *"1806-01-26'da alan Mekke'yi kesiyor"* | O maddede alan **yok**; alanlı Böğürdelen `1521-07-07` |

⚠️ Üçünde de **kural doğruydu, vakalar yanlıştı.** ARAYÜZ sınavı koordinatörün
tarifinden kursaydı **olmayan bir davranışı** sınamış olurdu — ve geçseydi
"çalışıyor" diye damgalanacaktı.

### Neden bu koordinatöre özgü bir kusur

Bir oturum kendi ölçümünü yanlış raporlarsa, hata **bir** yerde kalır. Ama
koordinatör onu başka bir oturuma **şart** olarak geçirdiğinde:

1. Sayı doğrulanmış **gibi** görünür — çünkü artık koordinatörden geliyor
2. Alıcı oturum onu **hedef** kabul eder, kaynak saymaz
3. Ve o hedefe göre kurulan sınav, yanlış şeyi doğrular

⇒ **Röle, aktardığı iddianın otoritesini yükseltiyor.** Oturumun *"ölçtüm,
şöyle çıktı"* sözü koordinatörün ağzında *"şöyle olmalı"* hâline geliyor.

### Kural

> **Bir oturumun sayısı başka bir oturuma ŞART olarak geçecekse, geçmeden
> önce doğrulanır. Doğrulanamıyorsa "X şöyle bildirdi, teyit edilmedi" diye
> KAYNAĞIYLA aktarılır — şart olarak değil.**

📌 Bu `OGRENILENLER §52`'nin ("türetilmiş sayı türetimiyle raporlanır") röle
tarafı. §52 rapor edenin ödevini, §58 kabul edenin ödevini yazıyordu; bu
üçüncüsü **aktaranın** ödevi ve en kolay atlanan.

📌 Aynı gün ikinci kez oldu: 31 Temmuz'da *"32 işaret"* rakamı nasıl
türetildiği sorulmadan kabul edilip bir karara dayanak yapılmış, karar sonra
geri alınmıştı. Orada koordinatör **kabul eden**di, burada **aktaran**.

---

## 13. 🔴 COMMIT KOMUTUNDA YOL ADI YAZILIR — ortak çalışma ağacının tek çaresi

1 Ağustos'ta **üç commit çakışması** oldu:

```
40a66fc  koordinatörün commit'i  →  YAMACI'nın 6 kayıt + 2 düzeltmesini yuttu
b755a21  DENETÇİ'nin commit'i    →  VERİ SAVAŞ'ın savaslar.js düzenlemesini yuttu
1c34fa0  DENETÇİ'nin commit'i    →  koordinatörün §67 metnini yuttu
```

Üçünde de **veri kayıp değildi** ama commit mesajı işi tarif etmiyordu. Yani
`git log` bir daha güvenilir bir tarih anlatmıyor.

### Sebep — ve neden `-o` çözmüyor

Ortak bir çalışma ağacında birden çok oturum var. Oturum A bir dosyayı
**sahneler**; oturum B `git add`/`git commit` koşar ve **sahnedeki her şeyi**
alır.

MOTOR'un tespiti: `git commit -o <dosya>` bunu **çözmüyor**, çünkü `-o` dosyanın
o **anki tam içeriğini** commit eder — aynı dosyada iki oturum çalışıyorsa yine
karışır.

### Kural

> **Commit komutunda yol adı YAZILIR:**
> ```
> git commit -F - -- <yol> [<yol> …]
> ```
> Böylece **başkasının sahnelediği dosya senin commit'ine giremez.**

⚠️ Bu, kendi işini başkasının yutmasını engellemez — **onu ancak herkes aynı
kuralı uygularsa** engelleyebiliriz. O yüzden kural **herkese** geçerli.

📌 Ve `§66` ile birlikte okunmalı: önce **ayrı** sahnele, **ayrı** kontrol et,
sonra **yol adı yazarak** commit et. Üç adım, üç ayrı komut.

### İkinci kural — kim commit'ler

Bugün hem oturumlar kendi işlerini commit'ledi hem koordinatör onların işini
commit'ledi. **İkisi birden yapılırsa çakışma kaçınılmaz.**

> **Oturum kendi dosyasını kendi commit'ler.** Koordinatör yalnız **kendi**
> dosyalarını ve **kimsenin sahiplenmediği** teslimleri commit'ler.

📌 Gerekçe `ORGANIZASYON §1`'in aynısı: *koordinatör karar verir, uygulamaz.*
Commit de bir uygulamadır.

---

## 14. 🔴 PARALEL OTURUMDA "VERİ ŞU AN ŞÖYLE" DEMEDEN ÖNCE `git log`

ÇAPRAZ KUZEY, 1 Ağustos, bulgu B15:

> *"Türkmençay veride İKİ GÜNDE: `1828-02-10` (Astara, Lenkeran) hâlâ Jülyen,
> `1828-02-22` (Nahçıvan, Revan, Ordubad) düzeltilmiş. **Tek antlaşma, 12 gün
> arayla iki gün** — harita antlaşmanın yarısını yürürlükte gösteriyor."*

Bulgu **ölçüldüğü an doğruydu.** Ama YAMACI aynı paketi `00ffed0`'da bitirmişti
ve altı sınırın hepsi girmişti. Sayım şimdi sıfır. **ÇAPRAZ KUZEY commit'ten
önceki ağacı ölçmüştü.**

### Neden bu sınıf bu projede kaçınılmaz

Yirmi oturum **tek çalışma ağacını** paylaşıyor. Bir oturumun dosyayı okuduğu
an ile rapor yazdığı an arasında başka bir oturum aynı dosyayı değiştirmiş
olabilir. Rapor **doğru ölçümden yanlış sonuç** üretir — ve en kötüsü, **inandırıcı
görünür**, çünkü ölçüm gerçekten yapılmıştır.

⚠️ Ve maliyeti çift taraflı: koordinatör bu raporu doğrulamadan röleye verirse
(`§12`) düzeltilmiş bir şeyi ikinci kez düzelttirir; **iki kez uygulanan sınır
kayması, hatayı geri getirir.**

### Kural

> **Bir oturum *"veri şu an şöyle"* diye rapor yazacaksa, ölçümü ile raporu
> arasında `git log --oneline -5` çalıştırır.** İlgili dosyaya dokunan yeni bir
> commit varsa **ölçüm tekrarlanır.**

> **Ve koordinatör, gelen her *"veride şu var"* iddiasını kaynakta SAYAR**
> (`§12`). Sayı sıfırsa iddia bayattır, yanlış değil — **ve rapor edene "hata
> yaptın" denmez.**

🟢 Ucuz çare: rapora **ölçüm anının commit'i** yazılır (`ölçüm: 0c7f2e9`).
Bayatlık o zaman **kendini gösterir**, tartışma gerektirmez.

📌 `§12` ile farkı: orada koordinatör **doğrulamadığı sayıyı** aktarıyordu;
burada sayı **doğru ölçülmüş ama ölçüldüğü ağaç geçmiş.** İkisinin de çaresi
aynı: **kaynakta say.**


---

## 15. 🔴 TEST NOKTASI ÖLÇÜMÜ, KAYIT ÖLÇÜMÜ DEĞİLDİR

ARAŞTIRMA BALKAN, 1 Ağustos:

> *"Brifing **'dört mevcut noktayı düzelt (Knin · Sinj · Kotor · Herseknovi)'**
> diyor. Bütün `yerlesimler*.js`'te aradım: **dördü de yok.**"*

Koordinatör bu dört adı ÇAPRAZ BATI'dan almıştı. ÇAPRAZ BATI'nın ölçümü
**doğruydu** — *"Knin 1700'de Osmanlı görünüyor"* gerçekten öyleydi. Ama o
ölçüm bir **koordinatın hangi peteğe emildiğini** ölçüyordu, **bir kaydın ne
yazdığını** değil. Knin diye bir kayıt yok; o koordinat komşu peteğe emiliyor.

⇒ Rölede *"düzeltilecek dört kayıt"*a dönüştü. **Yapılacak iş `düzelt` değil,
`ekle`ydi** — ve bu, bambaşka bir maliyet ve bambaşka bir kaynak ihtiyacı.

### İkinci vaka — desen olduğunu BALKAN gösterdi

> *"Bu benim `§15.4`'te yaptığım hatanın aynısı — Yergöğü'nü **'zaten var,
> dokunmayın'** diye işaretlemiştim, **yoktu.**"*

İki farklı oturum, aynı sınıf: **haritada bir yerin GÖRÜNMESİ, orada bir KAYIT
olduğu anlamına gelmiyor.** Petek motoru sahipsiz koordinatı en yakın komşuya
emiyor (`uret_petek.py` §2 emilmesi) — yani **kaydı olmayan yer de boyanıyor,
üstelik bir renkle.**

### Kural

> **Bir yerin haritada bir rengi olması, o yerin bir kaydı olduğunu
> göstermez.** *"Şu nokta yanlış görünüyor"* diyen her bulgu, **kaydın var
> olup olmadığını** ayrıca söylemek zorundadır:
> ```
> KAYIT VAR, değeri yanlış   → düzelt   (ucuz, tek satır)
> KAYIT YOK, komşuya emiliyor → EKLE     (pahalı: koordinat + zincir + kaynak)
> ```

🟢 Ucuz sınama, bir satır:
```bash
grep -c 'ad:"Knin"' data/yerlesimler*.js
```

🔴 **AMA TAM EŞLEŞME ARAMA — proje `ad:"Türkçe (Yerel)"` biçimini kullanıyor.**
Koordinatör aynı gün bunun tersine düştü: ÇAPRAZ BATI'nın *"Böğürdelen'de
`1791-08-04` zaten yazılı"* ölçümünü **doğrulayamadı** ve *"o adla veride
yok"* dedi. Kayıt duruyordu:
```
aranan:  ad:"Böğürdelen"           → 0
gerçek:  ad:"Böğürdelen (Šabac)"   → 1
```
Aynı biçim `Kuban (Yekaterinodar)` · `Bozkır (Deşt-i Kıpçak)` ·
`İzvornik (Zvornik)`'te de var — **bir oturumda üç kez** yanlış "yok"
üretti.

> **`ad:"X"` diye tam eşleşme arama; `ad:"[^"]*X` diye ara.** Aksi hâlde
> `§15`'in tersi olur: **var olanı yok sanmak**, ve bu daha sinsidir çünkü
> *"aradım, bulamadım"* titiz bir cümle gibi görünür.

🔴 **AMA ÖTEKİ UÇ DA VAR — ÇAPRAZ AKDENİZ aynı gün ölçtü.** Çıplak alt dizge
kullandılar ve **dört sahte "VAR"** üretti:
```
"Herceg Novi"     → "Çernovitz (Çernivtsi)"    ("Novi" eşleşti)
"Bar (Antivari)"  → "Bar (Podolya)"            başka bir Bar
"Zadar (Zara)"    → "Hazârasp"                 ("zara" eşleşti)
"Lefke"           → "Lefke (Osmaneli)"         Anadolu'da, Kıbrıs'ta değil
```
**Dördü de "kayıt VAR" diye raporlandı, gerçekte YOKTU** — ve yalnız
**koordinat kontrolüyle** yakalandılar.

> **Tam eşleşme çok DAR, çıplak alt dizge çok GENİŞ. İkisi de yanlış cevap
> verir, TERS yönlerde.**
> ```
> tam eşleşme      → var olanı YOK sanmak      (Rab → Rabat kaçtı)
> çıplak alt dizge → olmayanı VAR sanmak       (Zadar → Hazârasp)
> DOĞRUSU          → alt dizge + KOORDİNAT DOĞRULAMASI
> ```

📌 Ve iki yanılgı **aynı gün, iki ayrı oturumda, ters yönlerde** çıktı. Ortak
noktaları: **ikisi de bir ölçüm sonucu gibi raporlandı**, ikisinde de arama
biçimi yazılmamıştı.

⚠️ Ve koordinatör için ek yük: `§12` *"doğrulamadığın sayıyı şarta çevirme"*
diyordu; bu madde onu genişletiyor — **doğrulamadığın bir VARLIĞI da şarta
çevirme.** Bu vakada koordinatör *"ben doğrulamadım"* diye yazmıştı ama yine de
*"mevcut dört nokta"* dedi. **Uyarı, yanlış çerçeveyi düzeltmiyor.**


---

## 16. 🔴 PAYLAŞILAN ÇALIŞMA AĞACINDA `git stash` YASAK

**Doğuran vaka (2 Ağustos, VERİ KİMLİK 2 — kendi bildirdi):** temel çizgi
ölçümü için `git stash` kullanıldı. Komut kendi dosyalarını değil, **çalışma
ağacının tamamını** aldı:

```
oturumlar/OTURUM-9-ILERLEME.md      78 satır · BAŞKA bir oturumun işi
veri-kaynak/motor_kara.geojson      kaydedilmemiş
```

Hemen geri yüklendi, doğrulandı (`stash list` boş, ikisi de yerinde, **kayıp
yok**). Bu turda şans yaver gitti.

### Neden bu hata bu depoda kaçınılmaz görünüyor

`git stash` **oturum başına** değil **ağaç başına** çalışır. Yedi oturum aynı
ağaçta yazarken *"kendi değişikliğimi bir kenara koyayım"* diye düşünen bir
oturum, **görmediği altı oturumun işini** kenara koyar. Ve `stash` sessizdir:
çıktısı *"saved working directory"* der, kimin işini aldığını söylemez.

📌 `§13`'ün (commit'te yol adı yaz) tam kardeşi: orada `git add`, burada
`git stash` — **ikisi de varsayılan olarak GLOBAL, oysa iş YERELDİR.**

### Kural

```
❌ git stash · git stash pop · git checkout <dal> · git reset --hard
✅ kopyala + ölç + geri al:
     cp <dosya> <dosya>.olcum
     git checkout HEAD -- <dosya>        ← YOL ADIYLA, dosya dosya
     <ölçümü koştur>
     mv <dosya>.olcum <dosya>
```

**Ölçüt:** bir git komutu **yol adı almadan** çalışıyorsa, muhtemelen senin
olmayan dosyalara da dokunuyordur. Yol adı almayan komut, paylaşılan ağaçta
**tehlikeli** kabul edilir.

⭐ Ve bu maddenin kendisi bir şey daha gösteriyor: **kusuru oturum kendi
bildirdi**, kimse yakalamadı. Kaydı düzelten bir ekip, hata yapmayan ekipten
değerlidir — ikincisi zaten yoktur.

---

## 17. 🔴 OTURUM AÇMA TALEBİNDE MODEL **ADIYLA** YAZILIR

**Doğuran vaka (2 Ağustos):** `BEKLEYENLER.md`'de *"RENK oturumunu aç — **EN
GÜÇLÜ MODEL**"* yazdı. Kullanıcı ne yapacağını bilemedi:

> *"«en güçlü model» diyerek neyi kastediyor anlamıyorum, Fable'de mi açmam
> lazım? Neden açılacak model ismini belirtmiyor?"*

Ve aynı gün bunun **bedeli ödendi**: MOTOR oturumu *"en güçlü model"*
denilerek istendi, kullanıcı **Fable 5** açtı. (İyi çalıştı — ama bu şans,
tasarım değil.)

### Sebep

*"En güçlü"* koordinatörün kafasında **bir sıralamaya** karşılık geliyor;
kullanıcının kafasında **bir tahmine.** Koordinatör bir sıfat yazıp
sıralamayı kullanıcıya **çözdürüyor** — ve o sıralamayı kullanıcının bilmesi
için hiçbir sebep yok.

📌 `§12`'nin kardeşi: orada *doğrulanmamış sayıyı şarta çevirme*, burada
**çözülmemiş bir sıfatı talimata çevirme.**

### Kural

```
❌ "en güçlü model"  ·  "güçlü bir model"  ·  "iyi bir model"
✅ "Opus 5 ile aç"   ·  "Sonnet 5 yeter"   ·  "Fable 5 uygun"
```

Ve gerekçesi tek cümleyle yanına yazılır — *"renk kontrastı muhakeme işi"*
gibi. Kullanıcı **ne açacağını** ve **niçin** öğrenir; sıralamayı ezberlemesi
gerekmez.

⚠️ `CLAUDE.md §7` tablosu zaten `Opus`/`Sonnet` diye **ad veriyor.**
`BEKLEYENLER.md` o tabloyla hizalı yazılır; iki belge iki dil konuşamaz.

---

## 18. 🔴 OTURUM YANLIŞ DİZİNDE AÇILABİLİR — ÇARE TAŞINMAK DEĞİL, MUTLAK YOL

**Ölçüm (2 Ağustos):** sekiz oturumun **üçü** yanlış dizinde açılmıştı
(`Projeler\Uibul`), koordinatörün kendisi ise **iki dizinli**.

```
MOTOR 2            Projeler\Uibul               ← yanlış, ama sorunsuz çalıştı
VERİ KİMLİK 2      Projeler\Uibul               ← yanlış, ama sorunsuz çalıştı
NOKTA EKLEME       Projeler\Uibul               ← yanlış (15 nokta yazdı, r578'de yayında)
RENK · MOTOR · DENETÇİ · VERİ KRONOLOJİ   doğru
```

**Ve zarar ÖLÇÜLDÜ: sıfır.**
```
Ranking deposu   bugün 0 commit, çalışma ağacı temiz
Uibul deposu     bugün 0 commit (son commit dünden)
atlas deposu     bugünün bütün commit'leri burada
```
⇒ Sebep: bütün oturumlar **mutlak yolla** çalıştı ve commit'lerinde **yol adı**
verdi (`§13`).

### 🔴 Ama risk gerçek — ve tehlikeli olan sessiz olanı

| ne olur | sınıf |
|---|---|
| `py arac/denetle.py` | 🟢 **GÜRÜLTÜLÜ** — dosya yok, hemen patlar |
| `data/x.js` yazımı | 🔴 **SESSİZ** — yanlış depoda dosya oluşur, kimse görmez |
| çıplak `git status` / `git log` | 🔴 **EN TEHLİKELİSİ** |

Sonuncusu neden en tehlikeli: **hata vermez, GÜVENLE YANLIŞ cevap verir.**
Bir oturum `git status` koşup *"çalışma ağacı temiz"* diye rapor edebilir —
oysa Uibul'un ağacına bakmıştır, atlas kirlidir. `§14` *"veri şu an şöyle
demeden önce `git log`"* diyordu; **yanlış depoda `git log` o kuralı
sağlamış gibi gösterir.**

### Kural — taşıma, YOLU ZORLA

```
❌ cd <proje>              ← koordinatörün kabuğu her komuttan sonra sıfırlanıyor
❌ git status · git log    ← çıplak hâli, hangi depoya baktığını söylemez
✅ git -C "<mutlak yol>" log --oneline -1
✅ git -C "<mutlak yol>" commit -F - -- <yol adı>
✅ py "<mutlak yol>/arac/denetle.py"
```

**Görev tanımının İLK maddesi** mutlak proje yolunu vermeli, ve oturumun **ilk
işi** doğrulama olmalı:
```bash
git -C "<mutlak yol>" log --oneline -1     # beklenen commit mi?
```

⚠️ **Çalışan bir oturumu taşıma.** Bağlamı gider, kazancı yoktur: mutlak yol
zaten çareyi veriyor. Taşıma yalnız oturum **kapalıyken** ve **yeni açılışta**
anlamlıdır.

---

## 19. 🔴 PAYLAŞILAN AĞAÇTA YAZAN OTURUM, **BİTMEDEN ÖNCE** HABER VERİR

**Doğuran vaka (2 Ağustos):** RENK, `arac/renkler.py`'ye `iran` rengini yazdı
ama işi bitmediği için **haber vermedi.** Aynı anda MOTOR 2 `renk_olc.py`'de
bir düzeltme yapıp önce/sonra çıktısını karşılaştırıyordu.

```
MOTOR 2'nin gördüğü:   çakışma 72 → 69
MOTOR 2'nin sandığı:   "benim değişikliğim mi bozdu?"
gerçek:                RENK'in commit'lenmemiş yazısı, iki koşu ARASINA denk geldi
```

MOTOR 2 kaynağı **izole etti** ve kendi değişikliğinin masum olduğunu
kanıtladı — ama bu **fazladan bir ölçüm turu** demekti.

### Sebep

Bu depoda **ölçüm tabanı çalışma ağacıdır.** Bir oturum ölçtüğünde,
görmediği başka bir oturumun yarım işi tabana karışıyor. Ve fark **makul**
görünüyor (72→69 iyileşme gibi), o yüzden `§58` gereği alarm vermiyor.

📌 `§13`/`§16`'nın üçüncü kardeşi: orada `git add` ve `git stash` **global**
davranıyordu, burada **yazma eyleminin kendisi** global.

### Kural

```
❌ "iş bitince haber veririm"           ← taban o zamana kadar kayar
✅ "X dosyasına yazdım, henüz BİTMEDİ"  ← durum bildirimi, teslim değil
```

Bir dosyaya ilk yazışta bildirilir. **Bitmiş iş beklemek darboğaz yaratıyordu
(`§4`); bitmemiş yazıyı gizlemek ÖLÇÜMÜ BOZUYOR.** İkisi ayrı hata ve ikisinin
de çaresi aynı: **durum akar, teslim beklenmez.**

⚠️ Ve ölçüm yapan oturum için karşı önlem: taban alınacaksa **HEAD'den** alınır
(`git show HEAD:<yol>`), çalışma ağacından değil. Ağaç ortak, HEAD sabittir.
