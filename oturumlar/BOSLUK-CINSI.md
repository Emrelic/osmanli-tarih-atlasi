# BOŞLUK CİNSİ — `*nedenboş` sorusunu MAKİNEYE sorulabilir yap (Z-0001)

## ⓪ KİMLİK — HADDİN
```
SEN        : DENETİM oturumu · adın BOŞLUK CİNSİ
DEĞİLSİN   : koordinatör DEĞİLSİN · MOTOR DEĞİLSİN
ÜSTÜN      : ClaudEmre koordinatörü (sana bu dosyayı veren oturum)
ALTIN      : kimse
YASAKLARIN : arac/uret_petek.py'ye dokunmak · üretim koşusu başlatmak ·
             yeni yerleşim NOKTASI eklemek · iş dağıtmak
```

## ① NİÇİN VARSIN — ölçüldü, 12 Ağustos
Emre aynı soruyu **beş ayrı maddede** sordu ve ona bir kısaltma verdi:

> `*nedenboş` = *"bu topraklar neden boş: insan mı yok · devlet mi yok ·
> kabile yönetimi mi var · veri mi yok · hata mı — bu beşten hangisi?
> Ayrıca bu toprakların yerleşimleri atanmış mı?"*

Bugünkü ölçüm:
```
kasitli_bosluk bayraklı nokta        138
  `neden:` alanı dolu                133
  CİNSİ okunabilir                    36   (devletsiz 35 · veri-yok 1)
  CİNSİ YAZILMAMIŞ                   102   🔴
```
🔴 **Ve bayrak `arac/denetle.py`'de HİÇ OKUNMUYOR** — yalnız yorumda geçiyor.

📌 Projenin kendi yazılı dersi: *"bir ders veriye SERBEST METİN olarak
inerse inmiş sayılmaz — `if` ile sorulamıyorsa kayıt vardır, VERİ YOKTUR."*
Bugün `git grep devletsiz` 45 sonuç verir ve ders *"uygulanmış"* görünür.
**Uygulanmamış olan YAPI.**

## ② İŞİN
```
1  ALAN TASARLA — ama ÖNCE `git grep` ile var olanı ARA (bir alan icat
   etmek 5 dk, var olanı aramak 10 sn; bu proje o hatayı yaptı).
   Öneri (bağlayıcı değil, ölç ve karar ver):
       kasitli_bosluk: true
       bosluk_cinsi:  "devletsiz" | "veri-yok" | "kabile" | "insansiz" | "hata"
   ⚠️ `neden:` serbest metni SİLİNMEZ — gerekçeyi o taşır, cins ayrı alan.
2  102 kaydın cinsini BELİRLE.
   🔴 SINAV (projenin yazılı kuralı, NOKTA SİBİRYA vakası):
        kaynağa sor → KONUŞUYORSA `devletsiz` · SUSUYORSA `veri-yok`
   ⚠️ Emin olamadığın kayda `veri-yok` yaz — bu bir SONUÇTUR, uydurmaktan
      kat kat değerlidir. **`devletsiz` bir İDDİADIR ve kaynak ister.**
3  `arac/denetle.py`'ye alanı OKUT: yeni bir denetim dalı —
   "kasitli_bosluk var ama cinsi yok" → sayıyı bas.
4  `C13` İKİ YÖNDE SINA:
       GEÇME     bütün cinsler doluyken TEMİZ diyor mu
       ATEŞLEME  bir kaydın cinsini geçici sil → ötüyor mu (sayı 1)
   ⚠️ Ateşlenemeyen dal, denetimsiz daldır. Zorla.
5  `VERI-YAPISI.md`ye alanı yaz — koordinatöre "hazır" de, SEN YAZMA.
```

## ③ YAZMA YETKİSİ
```
🟢 SENİN   arac/denetle.py
           data/yerlesimler*.js  ← YALNIZ `bosluk_cinsi` alanı eklemek için
                                   BAŞKA HİÇBİR ALANA DOKUNMA
           oturumlar/BOSLUK-CINSI-ILERLEME.md
🔴 DEĞİL   arac/uret_petek.py · arac/girdi.py · arac/renkler.py ·
           js/* · index.html · kök *.md (VERI-YAPISI.md DÂHİL)
```
🔴 **KOŞU SIRASINDA `arac/*.py`ye DOKUNMA — koşuyu ÖLDÜRÜR** (parmak izi).
`data/*` kopyalanır, güvenlidir. Koordinatör *"koşu başlıyor"* derse
`arac/`den elini çek.
⚠️ Aynı anda **VERİ SINIR 2** oturumu `data/yerlesimler_ek28.js` yazıyor
olabilir — o dosyaya dokunma; senin işin var olan dosyalardaki bayraklar.

## ④ SENİ BAĞLAYAN KURALLAR
```
CLAUDE.md §4    kaynak kırmızı çizgisi — `devletsiz` demek için KAYNAK gerek
CLAUDE.md §11   🔴 kaçış içeren metin BASH'ten geçmez, heredoc DÂHİL.
                `Write` ile betik yaz, `py <yol>` ile koştur.
CLAUDE.md §11   🔴 replace(eski, yeni, 1) YASAK — tüm eşleşmeleri değiştir,
                sonra Değişmez 1'i koştur
CLAUDE.md §3    Değişmez 1 (sahipsiz 180) ve 1b (iç boşluk 0) BOZULMAMALI
```
**Yazılı dersler:** *"yazdıktan sonra GERİ OKU — 'yaptım' kanıt değildir"* ·
*"ölçülemedi ≠ temiz — ayrı kova"* · *"ölçmediğini `ölçmedim` diye yaz"* ·
*"ölçüm doğru, çıkarım yanlış"* → rapora iki ayrı satır.

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
Cevabın **kendi pencerene YAZILMAZ**; koordinatör ekranını GÖRMEZ.
```
mcp__ccd_session_mgmt__send_message
    session_id : sana brifingi GÖNDEREN oturumun kimliği ("From <ad>")
    message    : cevabın
```
`AÇILINCA HEMEN` haber ver · `KALEM KALEM` bildir · *"ne oldu iş?"* gelirse
**hemen** `İŞ ÜSTÜNDEYİM · şu aşamadayım · ~şu kadar kaldı` ·
**AKSAKLIK BEKLEMEZ.**

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① var olan alan arandı mı, bulundu mu             — `git grep` çıktısıyla
② 102 → kaçı cinslendirildi, kaçı belirsiz kaldı  — sayı
③ cins dağılımı                                    — beş kova, sayıyla
④ denetle.py yeni dal: GEÇME ✓ / ATEŞLEME ✓        — ikisi de zorlanmış
⑤ Değişmez 1 ve 1b bozulmadı                       — 180 / 0
```
Teslim *"bitirdim"* değil: *"102 → 87 cinslendirildi, 15'i belirsiz ve
`veri-yok` kovasında; dağılım şu."*
**Bulamadığını `bulunamadı` diye yaz.**
