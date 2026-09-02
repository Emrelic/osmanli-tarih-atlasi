# BULGU — SONNET HAZIR KITA 121 — `_sahiplik_uygula.py`: bos/neden/not

Görev: `oturumlar/DAGITIM-0902-AKSAM.md` M-2237 sevki (1.MURAT). Kök kusur:
`arac/_sahiplik_uygula.py` `bos:`/`neden:`/`not:` alanlarını hiçbir kümede
tutmadığı için bu alanlar SESSİZCE düşüyordu (Timbuktu 1430-1468 vakası,
`Değişmez 1b`nin tek beyansız boşluğu).

**DÜZELTME YAPILDI, VERİYE UYGULANMADI** — `arac/_sahiplik_uygula.py`
düzeltildi ve KURU KOŞU (`--yaz` YOK) ile sınandı. `data/*.js`'e hiçbir yazma
olmadı; "hazır" diyorum, uygulamayı 1.MURAT yapacak.

## ① ÖLÇTÜM — yapılan değişiklik

```
arac/_sahiplik_uygula.py:
  JS süzgeç (satır ~84)   r.bos/r.neden/r.not de artık geçiriliyor
                          (SÜZGEÇ 1'in AYNISI, iki alan ötede — yorum yazıldı)
  SKALER_ALANLAR          ("m","kaynak") → ("m","kaynak","bos","neden","not")
  CATISABILIR             (...,"kaynak") → (...,"kaynak","bos","neden","not")
  SKALER_KORUNAN (YENİ)   ("kaynak","bos","neden","not") — DOLUYSA EZİLMEZ
                          (`m` bilerek dışarıda, sözleşmesi ÜZERİNE YAZILIR)
  "yalnız X ayrışıyor" istisnası — YALNIZ `kaynak`TA BIRAKILDI, bos/neden/not'a
                          TAŞINMADI (aşağıdaki ② ölçümün gerekçesi budur)
```

## ② KABUL ÖLÇÜTÜ — C13, ÜÇ AYAK

### ① GEÇME — TUTTU
Aynı yamalar, kuru koşu, DEĞİŞİKLİK ÖNCESİ (git HEAD) vs SONRASI:
```
                  ÖNCE (HEAD)   SONRA (bu değişiklik)
uygulandi              1             113   ⬆ (DÜŞMEDİ — kabul şartı bu)
zaten-boyle          157              41   ⬇ (daha çoğu artık gerçekten uygulanıyor)
cakisma                4               8   ⬆ (aşağıya bak — REGRESYON DEĞİL)
kendi-kilidi            2               2   =
veride-yok              1               1   =
kapsam-daraldi          1               1   =  (Ahıska — aynı, ilgisiz vaka)
cipa-yok/NODE HATASI    0               0   =  (yeni çökme/hata YOK)
```
ÇIKARIM (ayrı satır): `uygulandi` düşmedi, hiçbir yeni hata/çökme yok ⇒
GEÇME şartı sağlanıyor. `cakisma`nın artması AŞAĞIDAKİ ② KARARIN sonucu,
bir regresyon değil.

### ② ATEŞLEME — TUTTU (gerçek veriyle, sahte girdiye gerek kalmadı)
Timbuktu (orijinal kusur vakası) kuru koşuda gerçekten fırlıyor:
```
Timbuktu   yerlesimler.js   s+bos+neden+not   ⚠️ 2s zayıf gün: 1430-01-01, 1591-04-13, 1700-01-01
Timbuktu   kaynak: ZATEN DOLU, ezilmedi        ← DOĞRU: kaynak zaten "tinbuktu" idi, korunuyor
```
Ayrıca üretilecek satırı bağımsız bir regex simülasyonuyla (aletin kodu
DEĞİL, aynı mantığın elle tekrarı) `node --check` ile JS-geçerliliği
doğrulandı — bozuk sözdizimi yok, alan sırası/virgülleme doğru.

### ③ GİRDİ — TUTTU (yapı gereği)
Bu ölçümün tamamı enjekte kayıtla DEĞİL, `py arac/_sahiplik_uygula.py`nın
GERÇEK haliyle, gerçek `data/*.js` dosyalarını okuyarak yapıldı — yani
dosya-okuma yolu zaten koşuldu, ayrı bir sahte-girdi testine gerek yok.

## ③ ÇATIŞMA DAVRANIŞI SORUSU — ÖLÇTÜM, KARAR VERMEDİM

1.MURAT'ın sorusu: *"iki yamada `bos:` farklıysa çatışma sayılmalı mı?"*
Uyguladığım karar: **EVET, `kaynak`'ın sessiz-geçiş istisnası bos/neden/not'a
TAŞINMADI** — farklı bir `bos`/`neden`/`not` iki yamada TAM ÇAKIŞMA sayılıp
BLOKE ediliyor (yalnız o alan değil, kaydın tamamı).

**ÖLÇÜLEN ETKİ — bugünkü 166 addan 4'ü yeniden sınıflandı:**
```
Bağdat     erken.js vs ok109_fetret.js    kaynak VE neden İKİSİ DE farklı
Halepçe    ok109_fetret.js vs uyg3.js     kaynak VE neden İKİSİ DE farklı
Şehrizor   ok109_fetret.js vs uyg3.js     kaynak VE neden İKİSİ DE farklı
Kutaisi    ferhatpasa.js vs kafkas.js     🔴 YALNIZ `neden` farklı —
                                          s/v/kaynak İKİ YAMADA DA BİREBİR AYNI
```
Bağdat/Halepçe/Şehrizor zaten önceden ya "yalnız kaynak ayrışıyor" (veri
inip kaynak yazılmıyordu) ya da tam çakışma sınırındaydı; şimdi TAM
BLOKE oluyorlar — veri de artık inmiyor (önceden geometri inip yalnız
kaynak yazılmıyordu, `neden` de ayrıştığı için artık GEOMETRİ bile inmiyor).

**Kutaisi FARKLI bir alt-vaka — kararınızı özellikle bunun üstünden verin:**
iki yamanın `s:`/`v:`/`kaynak:` alanları TARTIŞMASIZ BİREBİR AYNI; yalnız
`neden:` metni (gerekçe anlatımı) farklı. Şu an bu da TAM BLOKE ediliyor —
yani tartışmasız, özdeş bir coğrafi düzeltme SIRF gerekçe metni ayrıştığı
için hiç uygulanmıyor.

## ④ ÖNERİ — kendi başıma uygulamadım

`kaynak`ın "yalnız o alan ayrışıyorsa veriyi geçir, alanı yazma" istisnası,
**geometri (d/s/v/isg) VE kaynak BİREBİR AYNIYKEN yalnız `neden`/`not`
farklıysa** (Kutaisi tipi) aynı mantıkla genişletilebilir: veri + kaynak
iner, `neden`/`not` YAZILMAZ, UYARI basılır. Bağdat/Halepçe/Şehrizor tipi
(kaynak DA farklı) için önerim DEĞİŞMEDİ — tam bloke kalmalı, çünkü orada
zaten `kaynak` da tartışmalı.

Bu, tek bir koşul eklemek kadar küçük bir değişiklik ama **kapsamı
1.MURAT'ın sorduğu sorunun dışına taşıyor** (o yalnız "bos: farklıysa"
diye sordu, ben "yalnız neden farklıysa VE geometri aynıysa" alt-vakasını
buldum) — o yüzden UYGULAMADIM, öneri olarak bırakıyorum.

## ⑤ BULAMADIM

- `bos`/`neden`/`not` alanlarının birbirleriyle (örn. `bos` dolu ama `neden`
  boş) tutarlılığını denetleyen ayrı bir kural YOK — istenmedi, aramadım.
- Gerçek `--yaz` sonrası `denetle.py` çıktısı ÖLÇÜLMEDİ (kasıtlı — toplu
  yeniden uygulama benden istenmedi, 1.MURAT yapacak).

## ⑥ NE İSTİYORUM

1. ③'teki çatışma sınıflandırması (Bağdat/Halepçe/Şehrizor tam bloke,
   Kutaisi tam bloke) kabul mü, yoksa Kutaisi tipi için ④'teki öneri
   (kaynak-gibi sessiz geçiş) uygulansın mı — **karar sizde.**
2. Kabul edilirse: `--yaz` ile gerçek uygulama + `py arac/denetle.py`
   koşusu — bu adım bende değil, sizde (M-2237: "toplu yeniden uygulamayı
   YAPMA, hazır de").
3. Commit — **yine aksaklık bildiriyorum**: bu oturumda `git add`/`git
   commit` "Claude Code auto mode classifier" tarafından REDDEDİLDİ
   (⑨ raporunda da aynı engel vardı, hâlâ çözülmedi). Dosyalar diskte:
   `arac/_sahiplik_uygula.py` (düzeltilmiş) ve bu rapor. Commit için
   başka bir oturuma ihtiyaç var.

✅ Bu iş bitti (karar bekleyen ③/④ dışında). Yeni iş bekliyorum.
