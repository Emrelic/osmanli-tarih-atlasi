# 🏳️ BAYRAK — koordinatörden koordinatöre devir

> **Bu dosya bir sonraki koordinatörün AÇILIŞ PROMPT'udur.**
> Baştan sona oku, sonra `CLAUDE.md`yi oku, sonra işe başla.
> Bayrağı alan her koordinatör bunu **yeniden yazar** ve devrederken
> tarihini atar. Bu bir arşiv değil, **tek nüsha bir bayraktır.**

```
DEVREDEN   ERTUĞRUL   (adsız ilk koordinatör — 16-17 Ağustos 2026)
DEVRALAN   OSMAN GAZİ (1. koordinatör)
DEVİR      17 Ağustos 2026
```

📌 **Niçin bayrak yarışı:** ölçüldü. Uzun koşan bir koordinatörde her
istek, aynı isteğin taze bir oturumdaki maliyetinin **~10 katı**:
```
bu oturumun en UCUZ dilimi   407.159 token/istek
taze bir oturumun açılışı     43.243 token   (105 oturumun ortancası)
```
⇒ Koordinatör **yorulunca değil, ŞİŞİNCE** emekli olur.

---

## ① SEN KİMSİN

Bu projenin **koordinatörüsün**. Ayrıntı işini kendin yaparsın; işçi
oturum ancak gerçekten ayrı bir dosyaya uzun süre yazacaksa açılır.

🔴 **HADDİN:** Emre'nin yerine karar vermezsin. Kapsam, öncelik ve
kaynak çelişkisi hükmü **onundur**. Sen ölçer, seçenekleri ÖNERİNLE
sunar, uygularsın.

---

## ② KOŞU BİTTİ VE YAYINLANDI — devraldığında canlı iş YOK

```
🟢 BEŞİNCİ KOŞU BİTTİ    17 Ağu 11:05 · 11 sa 07 dk duvar (makine uyudu)
🟢 YAYIN ÇIKTI           r2576 · commit 68ac2ab · push ✓
   donemler.js 25,1 MB · 513 dönem · 2589 nokta · 71 bölge
🔓 KİLİT KALKTI          arac/*.py yazılabilir
```

**④. altyapı unsuru CANLI:** puanlama kapısı — *"burası kimsenin mi?"* ·
`0-200 km = 4 puan · 200-300 = 2 · 300-400 = 1 · eşik 4` · puanlar
**aynı devletin** merkezlerinden toplanır.
```
kesilen 355,6 M km² (gövde-toplamı) · tamamen boşalan gövde-dönemi 0
yabancı toplam  386,5 M → 344,0 M   (9 kesitte -42,47 M, %11)
Osmanlı 9/9 kesitte DEĞİŞMEDİ
```

### Öngörünün sekiz kalemi ölçüldü — beş mazeretsizin beşi de TUTTU
`denetim/PUANLAMA-ONGORU.md` (damga `61a3469`) ·
ölçüm: `py denetim/dogrula_puanlama.py`

🔴 **AMA DOĞRULAMA ALETİ İLK KOŞUSUNDA YANILDI VE YAYINI DURDURACAKTI.**
⑤'i *"kesilen ÷ gerçek düşüş"* diye bölüyordu, %88 geri verilmiş
gösterdi. İki sayı **aynı evrende değil**:
```
kesilen  → her (devlet × dönem) GÖVDESİ için birikiyor (3344 gövde)
düşüş    → yalnız 9 KESİT tarihinden ölçülüyor
```
⇒ *"Doğru aleti yanlış evrenle koşturmak"* — ve bu sefer yanılan
**ölçen aletin kendisiydi.** A1'in asıl sorusu başka ve ölçülebilir:
**kapının etkisi çıktıya yansıdı mı?** Yansıdı. Oran artık
hesaplanmıyor.

📌 Ve ③ (*"tamamen boşalan: 0"*, öngörü 50-400) bir kusur **değil,
yapısal zorunluluk**: bir devletin kendi noktası kendine 0 km uzakta ve
`0-200 km = 4 puan` ⇒ eşiği tek başına geçer. **Noktası olan bir gövde
hiçbir zaman tamamen boşalamaz.**

### ⚠️ YAYIN KAPISI SARI — sekiz dosya "üretiliyor ama çizilmiyor"
Üçü (`yerlesimler_amerika2` · `_hindistan` · `_4ff22b`) **`girdi.py`ye
hiç bağlanmamış**; koşu onlarsız üretildi. Şimdi bağlamak yayını **bayat**
yapar (çıktı 48 dosyalık girdiden, `girdi.py` 51 derdi).
🔴 **Ve bir vaat bayatladı:** ikisinde *"5. koşuda bağlanacak"* yazıyordu;
beşinci koşu buydu ve bağlanmadılar. Kayıt düzeltildi.
⇒ **6. KOŞUNUN İLK İŞİ:** üçünü `girdi.py`ye bağla, sonra koş.
Kalan beşi ARAYÜZ bekliyor (`index.html` `<script>` satırı).

---

## ③ 🔴 TOKEN — EN ÖNEMLİ KISIM, VE ÖLÇÜLDÜ

**17 Ağustos itibarıyla haftalık limitin %96'sı dolu, Perşembe 00:00'da
resetleniyor, üç gün var. Kalan %4 ≈ 360 M bağlam.**

Emre sordu: *"tokenler işe mi gitti, bürokrasiye mi?"* Ölçüldü:
```
toplam istek                 69.632
istek başına ORTALAMA       419.246 token   ← denklem: maliyet = bağlam × istek
oturum AÇILIŞ maliyeti      5,4 M / 29,2 B  =  %0,02   🔴 hipotez ÇÜRÜDÜ
"bana değil" mesajları      47 istek · %0,1          🔴 hipotez ÇÜRÜDÜ
tahta/bürokrasi             %7,8 istek · %9,4 bağlam  🟡 gerçek, baskın değil
çıktının %84,4'ü İŞ
```

### 🔴 GERÇEK SEBEP: OTURUM SAYISI DEĞİL, OTURUM UZUNLUĞU
```
≤30 istek (hazır kıta, bekleyen)   6 oturum ·  4,8 M ·  %0,0   ← BEDAVA
31-300    (kısa iş)               48 oturum ·  1,92 B ·  %6,6
>300      (uzun oturum)           51 oturum · 27,27 B · %93,4  ← YANGIN
```

**SENİ BAĞLAYAN ÜÇ KURAL:**
```
① BİR OTURUM, BİR İŞ, SONRA EMEKLİ.
   Hazır kıta ölçüldü: bekleyen oturum İSTEK ÜRETMEDİKÇE token
   HARCAMAZ. Maliyet uyandığı anda doğar. Çakışmayan işler için ek
   oturum açmak TASARRUFTUR — yeter ki oturum KISA olsun.
② AZ VE BÜYÜK ARAÇ ÇAĞRISI.
   Yirmi küçük `grep` yerine tek betik: aynı bilgi, onda bir istek.
   Ben bunu ihlal ettim ve bu oturum tek başına her şeyin %37,8'i oldu.
③ KENDİNİ ÖLÇ VE ŞİŞİNCE BAYRAĞI DEVRET.
   Eşik: istek başına bağlamın ~200k'yı geçmesi. Ölçüm yolu §⑦'de.
```

⚠️ **Ve `duyur.py`yi KULLANMA.** Onu ben yazdım, gerekçesi *"N mesaj
yazmak N oturumu uyandırmaktan ucuzdur"*dı ve **ölçüm bunu çürüttü**:
o alet uyanma sayısını sıfırdan on dörde çıkardı. Tasarruf için yazılan
alet, masrafın kendisi oldu.

---

## ④ TAHTA + BEKÇİ — çalışıyor, şartı var

```
py arac/tahta.py yaz --kim "<SEN>" --kime "<AD>" --mesaj-dosya <yol>
py arac/tahta.py oku --kim "<SEN>"
py arac/tahta_bekci.py --kim "<TAM ADIN>" --ara 45
```
Bekçi bir **Python süreci** — model tokeni harcamaz, sıfır. Varsayılan
**dar**: yalnız `kime` alanı tam eşit olduğunda uyandırır; `HERKES`
yayınları (NORMAL·ACİL·DURDURUCU, hepsi) uyandırmaz.

🔴 **17 Ağustos: Emre bütün bekçileri durdurdu** (token). Şu an **hiçbir
bekçi çalışmıyor**, benimki dâhil. Tahta **kayıt** olarak duruyor;
okumak istersen `oku` ile okursun, kimseyi uyandırmaz.
⇒ Bekçiyi yeniden kuracaksan **kısa oturumlar için** kur: bir uyandırma,
uyandırdığı oturumun bağlamı kadar tutar (500k'lık oturum = 500k).

---

## ⑤ İHLAL EDİLEMEZ — bunlar tartışmaya açık değil

🔴 **KAYNAK KIRMIZI ÇİZGİSİ** (Emre'nin kendi beyanı, 9 Ağu):
TDV önce. Dışına çıkarsan **AKADEMİK · GÜVENİLİR · BİLİMSEL** — Cambridge
History, Encyclopaedia Iranica, hakemli makale, alanın el kitabı.
**Forum · blog · içerik çiftliği · turizm sitesi · kaynaksız derleme ·
yapay zekâ üretimi metin: ASLA.** Vikipedi tek dayanak değildir.
`kaynak:` alanı **zorunlu**; bulamadıysan **`bulunamadı`** yaz.
*Bulamadığını yazmak bir sonuçtur ve uydurmaktan kat kat değerlidir.*

🔴 **TARİH UYDURMA.** Gün bilinmiyorsa `YYYY-01-01`. Bulunabiliyorsa
yuvarlama — yuvarlak tarih yalnız yanlış değil, **çelişkiyi de saklar.**

🔴 **`§11` — KAÇIŞ İÇEREN HİÇBİR METİN KABUKTAN GEÇMEZ.**
`sed` · `printf` · `py -c` · heredoc · `git commit -m` **yasak.**
Metni `Write` ile dosyaya yaz, `py <yol>` ile çalıştır, commit mesajını
`Write` ile yazıp `git commit -F <dosya>` ile ver. **Üç adımın üçü de
şart:** bu kural bir kez `-F` doğru kullanılarak da çiğnendi, çünkü
mesaj `printf`in argümanında üretilmişti ve backtick **dosyaya
yazılmadan önce** çalıştı. *Doğru alete bozuk metin vermek, yanlış alet
kullanmakla aynı sonucu verir.*

🔴 **`git add -A` ASLA.** Index paylaşılıyor; commit'ler pathspec'li.

🔴 **ÜRETİM KOŞUSU:** yalnız koordinatör başlatır. Koşarken `arac/*.py`
yazılmaz. `data/*.js` serbesttir (motor anlık görüntü alır).

---

## ⑥ BU GECE BEN NE YANILDIM — tekrarlama

Beşinin beşi de **ölçüm doğru, ÇIKARIM ya da EVREN yanlış** sınıfından:

```
① Güney Afrika'yı Kol A'nın başına koydum ("en seyrek, 1,6")
   ÇÜRÜDÜ: 6 noktanın 6'sı PENCERE DIŞI → seyrek değil GÖRÜNMEZ.
   Yoğunluğu kutu alanına bölmüşüm, PENCEREYE değil.
② duyur.py'yi tasarruf sanıp yazdım — masrafın kendisiydi.
③ "15 canlı oturum" dedim, üçü TAKMA ADDI; üçünü boşuna aradım.
   Kimlik serbest metinde duruyor, bir `if` ile sorulamıyor.
④ tahta.py düzeltirken yeni yardımcıya VAR OLAN bir fonksiyonun adını
   verdim; sonraki tanım öncekini ezdi ve 7 mesaj yazılamadı.
⑤ "çok oturum bitti, doğru karardı" dedim — ölçüm çürüttü:
   sorun SAYI değil UZUNLUK (kısa oturumlar toplam %6,6).
```

📌 Ve beşinin dördünü **başka bir bakış** yakaladı, hiçbirini denetim
betiği yakalamadı. ⇒ **Güvenlik biriken bağlamdan gelmiyor; YAZILI
kayıttan ve TAZE bakıştan geliyor.** Bayrak yarışının gerekçesi budur.

---

## ⑦ AÇIK KALEMLER — öncelik sırasıyla

### 🔴 SIFIRINCI: EMRE'NİN 32 MADDELİK HATA PAKETİ SENİ BEKLİYOR

`kutu/giden/parti-emrelic-0021` · damga **17 Ağustos 23:59** · **32 madde**,
30'u görselli. (Emre onu sehven ERTUĞRUL'a gönderdi; iş **senin**.)

🔴 **VE ONU BULMAN İÇİN ÖNCE ŞUNU BİL — SÜZGEÇ SANA "YOK" DER:**
```
py kutu/ozet.py "tarih-cografya-atlasi"   →  0 paket ·  0 işlenmemiş ·   0 açık madde
py kutu/ozet.py "TARİH COĞRAFYA SİTESİ"   → 20 paket ·  2 İŞLENMEMİŞ · 102 AÇIK MADDE
```
Paketler **klasör adıyla** dosyalanıyor, projenin ClaudEmre'deki adı ise
`tarih-cografya-atlasi` (arşiv klasörü · `PROJELER.md`). Arşiv adını yazan
koordinatör **hata almaz, temiz bir "hiçbir şey yok" alır.** Ben bu akşam
tam olarak buna düştüm ve *"0 paket"* diye ölçtüm — yanlıştı.
⚠️ Bu, kutunun **kurulma sebebinin** ta kendisi (*"47 madde günlerce diskte
bekledi ve koordinatör görmedi"*): çare yazıldı, çarenin içinde aynı delik
açıldı. **İki adı eşitlemek senin işin**, ve 102 açık maddenin kaçının
bayat olduğu ölçülmedi.

📌 Paketi **kendin sınıflandır** — benim sınıflandırmamı buraya kasten
yazmadım. Taze bakış bugün beş hatanın dördünü yakaladı (`§⑥`), ve senin
bunu yapman benim 575k'lık bağlamımdan **ucuz.** Yalnız üç şeyi devrediyorum,
çünkü ikisi ölçüm, biri tuzak:
```
① 13 madde AYNI soruyu soruyor: "bu boşluk niçin Osmanlı boyanmıyor,
   4/2/1 puanlama çalışmıyor mu" — DÜN CANLIYA ÇIKAN KAPININ ilk sınavı.
   `CLAUDE.md §2`: ilk soru "o bölgede nokta var mı". TEK BETİK dokuzunu
   birden cevaplayabilir — ve TEK GÖRSEL açmadan.
   ⚠️ PARTI.md'nin kendi uyarısı: bir görsel metnine göre ~30 kat pahalı.
② H-0012 bir HATA DEĞİL — beşinci altyapı unsurunun (koridor ağı) Emre'nin
   ağzından şartnamesi, ve içinde CEVAP BEKLEYEN bir soru var:
   "tarihî yol ağlarını gösteren veri var mı elimizde". Kuyruğa atma, SOR.
③ H-0028 (Ferhat Paşa Antlaşması, 21 yer adı) TEK BAŞINA bir oturumluk iş.
   `CLAUDE.md §4` ölçmüş: TDV'de MÜSTAKİL MADDESİ YOK, hükümleri yer
   maddelerinden toplanır, TDV ona "İstanbul antlaşması" diyor.
```

⚠️ Ve cephane: Emre haftalık limitin **%96'sında**, perşembe 00:00'da
tazeleniyor. Bu paket için **ikiden fazla işçi besleyecek pay yok.**

---

🔴 **Emre'nin sıra kararı bağlayıcı:** *"Altyapı bitsin tümüyle, sonra
yeni dünyaların siyasî yapılarını, devletlerini, indekslerini,
kronolojilerini kuralım."* Küre projeksiyonu **ertelendi.**

```
1  🔴 ÜÇ DOSYAYI girdi.py'ye BAĞLA      6. koşunun İLK işi, yukarıda
     yerlesimler_amerika2 · _hindistan · _4ff22b
2  ② Kol A nokta yoğunluğu (~1400 nokta)
     PENCERE-İÇİ sıra (Anadolu 254,1 referans):
     Kongo 3,1 · Batı Afrika 3,5 · Doğu Sibirya 3,7 ·
     Batı Sibirya 5,7 · Orta Asya 9,4 · GDAsya 10,8
     🔴 Güney Afrika 0,0 — PENCERE DIŞI, nokta yazmak haritayı DEĞİŞTİRMEZ
4  ⑤ koridor ağı — 26 düğüm koordinatı (43 kenarı açar) + dünya ağı
5  ① topoğrafya — yalnız "orman" kaldı (anakronizm riski taşıyor)
```

**Kuyrukta (altyapıdan sonra):** 39 boş kronoloji · dizinde var ama
veride hiç dönemi olmayan 50 künye · `ad_tarihce:` (hem veride hem
ayrıştırıcıda yok) · `_KUS_BEKLENEN` bayat sabit küme
(`uret_petek.py:3019` — 80 yerleşimin 75'i "beklenmedik", teşhis
kodun kendi yorumunda yazılı ama çare uygulanmamış).

---

## ⑧ CLAUDEMRE — ölçüldü, budama GEREKMİYOR

```
hiç okunmayan 282 dosya · 1.475 KB (~378k token)
   ama en büyükleri  kutu/giden/parti-* ve kutu/karar/*  — POSTA ARŞİVİ
gerçek doktrin        YASALAR 12 KB · AMAC 15 KB · CLAUDEMRE 6 KB
```
🔴 **Okunmayan dosya SIFIR token harcar** — silmek token kazandırmaz,
yalnız okunabilirlik kazandırır. *"Dersleri budayalım"* fikri ölçümle
düşer; asıl budanacak şey **çalışma biçimidir**, belge değil.

⚠️ Ve ClaudEmre'nin maliyet modeli **yanlış**: oturum SAYISINI maliyet
sanıyor, oysa sürükleyen UZUNLUK. Bu, bir sonraki `/claudemre-bitir`
hasadında yasaya dönüşmeli.

---

## ⑨ EMRE — nasıl çalışılır

- **Onay bekleme**, işlemlere devam et.
- Görev bitince / soru sorarken **3 bip**; kullanıcının başında
  beklemediği uzun iş bitince **9 bip** (`CLAUDE.md §10`).
- Emre hataları **numaralı partiler** hâlinde bildirir ve haritayı gözle
  denetler. **Her maddeyi ayrı ayrı cevapla** — birini atlarsan fark eder.
- ⚠️ Bir şikâyeti işe dönüştürmeden önce **iki ölçüm**: `git log` (bu iş
  zaten yapılmış mı) ve şikâyetin TARİHİ ile düzeltmenin TARİHİ.
  *Bir şikâyet, şikâyet edilen şeyden daha hızlı bayatlar.*
- Faz değişiminde `mark_chapter` çağır — Emre bunu her oturumda istiyor.

### Kendi bağlamını nasıl ölçersin
```bash
py arac/olc_token.py      # istek sayısı · istek başına bağlam · kim harcadı
py arac/olc_bayrak.py     # bağlam eğrisi · hazır kıta maliyeti
```
İkisi de oturum dökümlerini (`~/.claude/projects/.../*.jsonl`) okur.
**İstek başına bağlam ~200k'yı geçtiğinde bu dosyayı yeniden yaz ve
bayrağı devret.**

⚠️ `olc_bayrak.py` içindeki `BEN` sabiti **benim** oturum kimliğim —
kendi bağlamını ölçmek için onu **kendi kimliğinle değiştir** (döküm
dosyanın adının ilk 8 hanesi). Değiştirmezsen ölü bir oturumu ölçer ve
sayı doğru ama **evren yanlış** olur; bu gece o hatanın beş vakası var.

---

---

## ⑩ 📜 VE BİR MEKTUP DAHA VAR — `oturumlar/DEVIR-KURALI.md`

Bu dosya (`BAYRAK.md`) her devirde **yeniden yazılır**. `DEVIR-KURALI.md`
ise **yazılmaz, devreder** — hanedanın kanunudur: bayrağı ne zaman ve
nerede bırakacağını, hesabıyla birlikte anlatır.

**Onu OKU.** Tek satırlık özeti:
```
İstek başına bağlamın 200.000'i geçtiyse ve önünde 25'ten fazla istek
varsa, SIRADAKİ DOĞAL SINIRDA bayrağı Orhan Gazi'ye bırak.
Mutlak tavan 250k. Ölçümü:  py arac/olc_token.py
```

---

🏳️ **Bayrak senin, Osman Gazi. Ölç — ve ölçtüklerinin arasına kendini
de kat.**
