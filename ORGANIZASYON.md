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
