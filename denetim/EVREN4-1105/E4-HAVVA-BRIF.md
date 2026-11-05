# EVREN 4 — HAVVA ajan brifi (5 Kasım 2026)

Önce ana brifi OKU ve kurallarının HEPSİNİ uygula:
C:\Users\user\AppData\Local\Temp\claude\61bcdfa88cf2fd72\05d6722f-8c1a-4f81-939f-c03e49711dd1\scratchpad\e4\DA-BRIEF.md
(UMIT'in D ADIMI brifi: TAHRİR ölçütü, TEK KURAL, TEK ÖLÇÜ, künye f–t / hayalet devlet, kaynak sırası,
JSON çıktı biçimi, KAYNAKLI / ONERI / BULUNAMADI / BAKILMADI ayrımı.)

HAVVA'ya özgü FARKLAR (bunlar ana brifin önündedir):
1. Depo SALT OKUNUR: `C:\atlas-kosu33` (güncel ağaç). Künye kontrolü için `data/devletler.js`te grep
   yapabilirsin (Grep aracı). Depoya YAZMA, git ya da python ÇALIŞTIRMA.
2. SAYFA ÇEKİCİ (5 Kasım 01:00'den itibaren VAR — WebFetch'ten önce bunu kullan; tek izinli python budur):
   `py -X utf8 "C:\Users\user\AppData\Local\Temp\claude\61bcdfa88cf2fd72\05d6722f-8c1a-4f81-939f-c03e49711dd1\scratchpad\arac\sayfa.py" oku "<url>" "<anahtar1,anahtar2>" 400`
   · `ia-ara "<sorgu>"` · `ia-oku <kimlik> "<anahtarlar>" 400` (archive.org tam metin) · `ham <url>` (bağlantılar).
   Bash ya da PowerShell aracıyla, tam yolla çalıştır. robots.txt'e uyar, istekler arası 3 sn bekler (paralel
   ajanlar ortak bekler). `tdv-ara` şu an boş dönüyor, KULLANMA. TDV maddesi: https://islamansiklopedisi.org.tr/<slug>,
   slug Türkçe küçük harf, şapkasız, tireli (ç→c, ş→s, ı→i, ğ→g, ö→o, ü→u), ör. `karesiogullari`, `bagdat`.
   Bulamazsan WebFetch ile https://islamansiklopedisi.org.tr/arama/?q=<kelime> dene. Iranica: iranicaonline.org/articles/<slug>.
   403 / robots yasağı veren siteyi zorlama. Tarayıcı paneli AÇMA.
   `ia-ara` ÇALIŞIR (00:55 sınandı): sorguyu kısa İngilizce KİTAP BAŞLIĞI kelimeleriyle yaz, ör.
   `ia-ara "imperial gazetteer of india"`, `ia-ara "history of persia sykes"`, `ia-ara "cambridge history of china"`;
   tırnak içi uzun cümle ya da Türkçe sorgu boş döner. Sonra `ia-oku <kimlik> "<şehir adı>,<yıl>" 400`.
3. Girdi: parti JSON'u — `{"<yerleşim>": [ {sira, sinif, alan, d, f, t, mevcut_kaynak}, ... ]}`.
   `sinif`: BOS (kaynak boş) · ZAYIF_ATLAS (kaynak atlas kaydı/devralma) · ZAYIF_VIKI (Vikipedi/popüler) ·
   DIGER. Hepsi teyit ister. `dosya_satir` girdide yok: çıktı satırında `"sira": <sira>` yaz
   (dosya_satir alanını boş bırak).
4. Çıktı: `C:\Users\user\AppData\Local\Temp\claude\61bcdfa88cf2fd72\05d6722f-8c1a-4f81-939f-c03e49711dd1\scratchpad\e4\e4_HAVVA_<parti>.json`,
   ana brifteki satır biçimiyle + `"sira"` alanı. Partideki HER yerleşim için giriş; hiç bakamadığın dönem
   `BAKILMADI`. Her 5 yerleşimde bir dosyayı Write ile baştan yaz. Bitirince Read ile açıp JSON'un
   geçerli olduğunu ve yerleşim sayısını kontrol et.
5. Bütçe: partin KÜÇÜK (8 yerleşim). Yerleşim başına 8-10 araç çağrısını GERÇEKTEN harca; erken pes
   etme. Önceki ajanlar 25 yerleşimde 15-25 çağrıyla bırakıp %90 BAKILMADI yazdı — bu kabul edilmez.
   Aynı şehir maddesi birçok dönemi verir: bir kez oku.
   Erişim ipuçları (önceki turdan):
   - TDV slug tahmini tutmazsa `https://islamansiklopedisi.org.tr/arama/?q=<kelime>` sayfasını WebFetch
     ile aç ve oradaki madde bağlantısını izle. Şapkalı/şapkasız iki yazımı dene.
   - Hindistan: Imperial Gazetteer of India 1908 — Digital South Asia Library
     `https://dsal.uchicago.edu/reference/gazetteer/` (arama: `.../gazetteer/pager.html?objectid=...`)
     ya da archive.org tam metin (`https://archive.org/stream/<kimlik>/<kimlik>_djvu.txt`).
   - Britannica 403 verir: deneme. EB1911 için wikisource (`en.wikisource.org/wiki/1911_Encyclopædia_Britannica/<Madde>`)
     açılır ama tek başına en çok "kısmen" sayılır.
   - Britanya/İrlanda: British History Online, Dictionary of Irish Biography (dib.ie), Historic Environment Scotland.
   - Çin: Wikisource resmî tarihleri (明史, 清史稿) birincil kaynaktır; ülke düzeyi geçişlerde (1368, 1644,
     1912, 1949) şehrin hangi gün el değiştirdiğini ara, bulamazsan "ÜLKE DÜZEYİ" notuyla yıl düzeyi KAYNAKLI.
   - Norveç: Store norske leksikon (snl.no); İskandinavya için Svenskt biografiskt lexikon, Dansk biografisk.
6. Takvim: Çin/Japon/Kore/Vietnam ay-güneş günlerini ÇEVİRME; ifadeyi `not`a aynen yaz.
6b. 🔴 YENİ KURAL (EMRELİC, 5 Kasım 01:05): KAYNAKLI hükmünün `alinti`sı sayfanın HAM metninden
   (`sayfa.py oku`) gelmeli. WebFetch'in özetinden gelen alıntıyla KAYNAKLI verdiysen `not`a
   "[alıntı özetten]" yaz. Mümkünse alıntıyı sayfa.py ile yeniden oku ve bu notu kaldır.
6c. 🔴 YENİ KURAL (EMRELİC, 5 Kasım 01:25) — HANGİ UÇ: her satıra `"uc": "f" | "t" | "f+t"` alanı ekle:
   alıntının tarihlediği uç. KAYNAKLI yalnız alıntı satırın KENDİ ucunu (o dönemin f'sini ya da t'sini)
   ve o olayı tarihliyorsa verilir. Alıntı başka bir ucu ya da başka bir olayı tarihliyorsa (ör. komşu
   dönemin ucu, kuşatma başı, ülke düzeyinde farklı olay) hüküm ONERI olur; `not`a hangi ucu tarihlediğini yaz.
   İki uç da kaynaklıysa `"uc": "f+t"`; yalnız biri kaynaklıysa öteki uç için `not`a "öteki uç teyitsiz" yaz.
6d. 🔴 HİCRÎ ÇEVİRİ (EMRELİC, 5 Kasım 03:35): kaynak mîlâdî karşılık vermiyorsa ve sen çevirmek
   zorundaysan TEK tabular varyant kullanılır: Perşembe epoch'u (ör. 1 Rebîülevvel 923 = 1517-03-23 Jülyen).
   1582-10-15 öncesi sonuç Jülyen'dir. Çeviriyi `not`a "hicrî X → (tabular, Perşembe epoch) Y" diye beyan et.
7. Bitince kısa özet: yerleşim sayısı, KAYNAKLI / ONERI / BULUNAMADI / BAKILMADI sayıları, öne çıkan ONERI'ler.
