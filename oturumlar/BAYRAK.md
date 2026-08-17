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

## ② ŞU AN NE OLUYOR — devrettiğim canlı iş

### 🔴 BEŞİNCİ ÜRETİM KOŞUSU ÇALIŞIYOR
```
süreç      py arac/uret_petek.py    (17 Ağu 09:48'de devlet 80/392)
log        kosu_puanlama.log
başlangıç  16 Ağu 23:57:16
⚠️ makine gece UYUDU: 497 dk duvar / 26 dk işlemci oranı görülürse
   koşu ÖLMEMİŞTİR, uyumuştur. Motor bunu kendi satırıyla söylüyor:
   "⚠️ duvar ≫ işlemci: UYKU ya da REKABET"
```

**Bu koşu Emre'nin ④. altyapı unsurunu ilk kez sınıyor** — puanlama
kapısı: *"burası kimsenin mi?"* · `0-200 km = 4 puan · 200-300 = 2 ·
300-400 = 1 · eşik 4` · puanlar **aynı devletin** merkezlerinden toplanır.

🔒 **KİLİT SÜRÜYOR:** `arac/girdi.py` · `arac/renkler.py` ·
`arac/uret_petek.py` — üçü `motor_izi` ile parmak izli, koşu sırasında
birine yazmak **koşuyu öldürür.** `data/*.js` **serbest** (anlık görüntü
23:57'de alındı).

### KOŞU BİTİNCE — sırayla
```bash
py denetim/dogrula_puanlama.py
```
Bu betik **koşudan önce damgalanmış** öngörünün
(`denetim/PUANLAMA-ONGORU.md`, commit `61a3469`) sekiz kalemini ölçer.
Ayrıştırıcıları iki yönde sınandı (8/8). Taban ölçüm
`denetim/olcu_TABAN.json`'da (koşu öncesi `URETIM_OLCU`).

🔴 **BEŞ KALEM MAZERETSİZ. Biri çürürse YAYIN DURUR** — harita değil
**kapı** düzeltilir. En kritiği:

> ⑤ **A1 TUZAĞI** — kapının kestiği alan geri veriliyor mu?
> Vakası: `A1 tavanı` koşusunda tavan doğru hesapladı, sonra **yetim yüz**
> mantığı toprağı en yakın komşuya **geri verdi** ve düzeltme kendini
> iptal etti. *"Bir tavan alanı ARTIRAMAZ."* Kusur ne tavandaydı ne
> yetim-yüzde — **ikisinin arasındaydı.**

Betik temiz çıkarsa yayın: `uret_devirler.py` → `renk_olc.py` →
`denetle_yayin.py` → `surum_damgala.py` → commit + push. Yayın gecikmesi
~40-60 sn.

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

🔴 **Emre'nin sıra kararı bağlayıcı:** *"Altyapı bitsin tümüyle, sonra
yeni dünyaların siyasî yapılarını, devletlerini, indekslerini,
kronolojilerini kuralım."* Küre projeksiyonu **ertelendi.**

```
1  KOŞU + DOĞRULAMA + YAYIN            ← şu an, ~50 istek
2  ④ puanlama sonucunun hükmü           doğrulama çıktısına bağlı
3  ② Kol A nokta yoğunluğu (~1400 nokta)
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

🏳️ **Bayrak senin, Osman Gazi. Ölç, sonra konuş.**
