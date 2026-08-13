# VERİ FETRET — 16 noktanın Fetret dönemi + Elhova + üç yuvarlak tarih

## ⓪ KİMLİK — HADDİN
```
SEN        : YAPIMCI oturum · adın VERİ FETRET
DEĞİLSİN   : koordinatör DEĞİLSİN · MOTOR DEĞİLSİN
ÜSTÜN      : ClaudEmre koordinatörü (sana bu dosyayı veren oturum)
ALTIN      : kimse
YASAKLARIN : `arac/*` · `js/*` · `index.html` · kök `*.md` ·
             üretim koşusu başlatmak · iş dağıtmak · başka oturum açmak
```

---

## ① NİÇİN VARSIN — ölçülmüş, 13 Ağustos 2026

Emre haritada iki şey gördü ve **ikisinde de haklı çıktı.**

### 🔴 A · "Emir Süleyman'ın toprakları niçin iki parça?"

1406-06-15, Rumeli kutusu (39,5-43,0°K / 22-30°D), 104 nokta:
```
suleyman-celebi   73 nokta
OSMANLI           16 nokta   🔴 ŞEHZADEYE HİÇ ATANMAMIŞ — düz `d:`
bizans 10 · ceneviz 3 · germiyan 1 · sahipsiz 1
```
⇒ O 16 nokta **ayrı renkle** boyanıyor ve Emir Süleyman'ın toprağını
ikiye bölüyor. **Motor hatası değil, VERİ EKSİĞİ.**

**ON ALTI NOKTA — hepsi Trakya'nın kuzeyi/doğusu:**
```
Uzunköprü · Havsa · Meriç (İpsala kuzeyi) · Orestiada (Kumçiftliği) ·
Sofulu (Soufli) · Dedeağaç (Alexandroupoli) · Lalapaşa · Kofçaz ·
Dereköy (Kırklareli) · Demirköy · İğneada · Mustafapaşa (Svilengrad) ·
Elhova (Elhovo) · Malko Tırnova · Ahtapolu (Ahtopol) · Rezve (Rezovo)
```
📌 Hepsi `1361-01-01` ve `1371-09-26` kümelerinden gelen **SINIR
noktaları** — ana şehirlere (Edirne · Dimetoka) Fetret yazılmış, sınıra
yazılmamış.

🟢 **Ve Fetret modeli ASLINDA SAĞLAM** — kimlikler veride var ve çalışıyor:
```
1403  isa-celebi 55 · suleyman-celebi 38 · mehmed-celebi 7 · timurlu 3
1410  suleyman-celebi 95 · mehmed-celebi 8
1413  mehmed-celebi 65 · musa-celebi 38
```
⇒ Yeni kimlik İCAT ETME. Var olanları kullan.

### 🔴 B · Elhova'nın kırılması ALAKASIZ bir maddeye bağlı

```
Elhova (Elhovo)   d: 1371-01-01
o günün ±45 gününde kronolojide TEK madde:
  "Kârkiyâ hânedanı Gîlân'da kuruldu — Hazar kıyısının son bağı"
```
⇒ **Hazar Denizi kıyısı.** Trakya'yla sıfır ilgi. Kullanıcı Elhova el
değiştirirken bu maddeyi okuyor.

⚠️ `Değişmez 2` bunu **temiz görüyor** çünkü *"±30 günde madde VAR MI"*
diye soruyor, *"AYNI ŞEYİ mi anlatıyor"* diye **sormuyor.**

### 🟡 C · Üç yuvarlak tarih coğrafî olarak tuhaf sıra üretiyor

```
1363-01-01   Gümülcine · Kırcaali · Ferecik   ← ÜÇÜ DE AYNI GÜN
1371-09-26   Meriç · Sofulu · Uzunköprü · Çirmen · Dedeağaç
```
Kırcaali, Meriç'ten **~90 km daha uzak** ve **8 yıl önce** alınmış
görünüyor. Tarihen imkânsız değil (ordu vadi koridorlarını izler) ama
`1363-01-01` **yuvarlak** — muhtemelen *"1363 civarı"*nın kestirmesi.

---

## ② İŞİN — sıra bağlayıcı, EN UCUZ VE EN KESİN OLAN ÖNCE

### İŞ 1 — 🔴 ON ALTI NOKTAYA FETRET DÖNEMİ (en büyük görsel etki)
```
① Her nokta için TDV'den doğrula: 1403-1413 arası kimin elindeydi?
   ÖN KABUL (koordinatörün, ve DOĞRULANMADI):
     1403-1411  Trakya kuzeyi Emir Süleyman'da
     1411-1413  Musa Çelebi'de
   🔴 BU BİR TAHMİN. Doğrula; çürürse kendi bulgunu yaz.
② `s:` dönemi olarak yaz — kimlikler ZATEN VAR:
   `suleyman-celebi` · `musa-celebi` · `mehmed-celebi` · `isa-celebi`
③ Var olan `d:` döneminin Fetret aralığını AÇ (bölmen gerekecek)
   ⚠️ §11: `replace(eski, yeni, 1)` YASAK. Tüm eşleşmeleri değiştir.
④ Sonra `py arac/denetle.py` KOŞTUR — Değişmez 1 (180) ve 1b (0)
   BOZULMAMALI.
```
🔴 **BULAMADIĞIN NOKTAYA DOKUNMA.** 16'nın 10'unu doğrulayıp 6'sını
bırakmak, 16'sını tahminle doldurmaktan **kat kat** iyidir.

### İŞ 2 — ELHOVA'nın gerçek fethi
```
· TDV/akademik kaynaktan Elhova (Elhovo, Bulgaristan) fetih tarihi
· Bulursan: `d:` gününü düzelt VE kronolojiye MADDE yaz
· Bulamazsan: `bulunamadı` yaz ve tarihe DOKUNMA — ama durumu bildir
```
⚠️ Madde yazacağın dosya: **yeni** `data/olaylar_ek8.js` (var olan
`olaylar*.js` dosyalarına dokunma).
📌 `index.html`e bağlamayı KOORDİNATÖR yapar — sen yaz ve *"hazır"* de.

### İŞ 3 — üç yuvarlak tarih (Gümülcine · Kırcaali · Ferecik)
TDV'den üçünün **ayrı ayrı** gerçek tarihini ara. Bulduğunu yaz,
bulamadığını `1363-01-01` bırak ve **hangisini bulamadığını BİLDİR.**
🔴 Gün bilinmiyorsa `YYYY-01-01` — **TARİH UYDURMA.**

---

## ③ YAZMA YETKİSİ
```
🟢 SENİN   data/yerlesimler*.js  ← YALNIZ yukarıdaki 19 noktanın dönemleri
                                   BAŞKA NOKTAYA, BAŞKA ALANA DOKUNMA
           data/olaylar_ek8.js   ← YENİ dosya, Elhova maddesi için
           oturumlar/VERI-FETRET-ILERLEME.md
🔴 DEĞİL   arac/* · js/* · index.html · kök *.md ·
           var olan data/olaylar*.js · data/devletler.js
```

## ④ SENİ BAĞLAYAN KURALLAR
```
CLAUDE.md §4    🔴 TDV ÖNCE. Dışarı çıkarsan AKADEMİK·GÜVENİLİR·BİLİMSEL.
                Forum/blog/içerik çiftliği/YZ metni KULLANILMAZ.
                Vikipedi TEK DAYANAK DEĞİL. `kaynak:` ZORUNLU.
                Slug tuzağı: 302=ölü · 200 dönmesi "doğru madde" DEMEK DEĞİL,
                İÇERİĞİ OKU (`ordu` askerî ordu maddesini açar).
CLAUDE.md §4    🔴 TARİH UYDURMA. Gün bilinmiyorsa YYYY-01-01.
CLAUDE.md §3    Değişmez 1 (sahipsiz 180) · 1b (iç boşluk 0) BOZULMAMALI
CLAUDE.md §8    dönemler ÇAKIŞMAZ · TERS OLMAZ · SIFIR UZUNLUK OLMAZ
                (Tebriz vakası: {f:"1514-09-06",t:"1514-09-06"} yüzünden
                 Çaldıran'dan sonra hiç Osmanlı görünmedi)
CLAUDE.md §11   🔴 kaçış içeren metin BASH'ten geçmez, heredoc DÂHİL.
                `Write` ile betik yaz, `py <yol>` ile koştur.
CLAUDE.md §11   🔴 replace(eski, yeni, 1) YASAK
CLAUDE.md §11   🔴 yazdıktan sonra GERİ OKU — "yaptım" kanıt değildir
```

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
Cevabın **kendi pencerene YAZILMAZ**; koordinatör ekranını GÖRMEZ.
```
mcp__ccd_session_mgmt__send_message
    session_id : <ADRES YAZILMAZ>
    ⚠️ ADRES DOGRULAMA — HER MESAJDAN ONCE:
       Bu kimlik BAYATLAYABILIR. `send_message` "Session not found." derse
       DURMA: `mcp__ccd_session_mgmt__list_sessions` ile koordinatoru ARA
       (basligi KOORDINATOR ya da CLAUDEMRE, dizini bu proje) ve ORAYA yaz.
       🔴 13 Agu'da tam bu oldu: sartnamelerdeki adres OLUYDU ve UC oturumun
       raporu hicbir yere gitmedi. Ucu de kusuru KENDI buldu — sen de bul.
```
🔴 **BU KURAL ÜÇ KEZ ÇİĞNENDİ** — dün üç oturum çalıştı, üçü de dosyaya
yazdı, **hiçbiri mesaj atmadı** ve koordinatör onları ölü sandı.
⇒ `AÇILINCA HEMEN` tek satır at · `KALEM KALEM` bildir · *"ne oldu iş?"*
gelirse **hemen** üç parça · **AKSAKLIK BEKLEMEZ.**

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① 16 → kaçına Fetret dönemi yazıldı, kaçı BULUNAMADI     — liste
② ön kabul (Süleyman 1403-1411 / Musa 1411-1413) TUTTU MU  — kaynakla
③ Elhova: tarih bulundu mu · madde yazıldı mı
④ üç yuvarlak tarihten kaçı gerçek güne çekildi
⑤ denetle.py: Değişmez 1 = 180 · 1b = 0 · SONUÇ temiz mi
```
Teslim *"yaptım"* değil: *"16 → 13 yazıldı, 3'ü bulunamadı; ön kabul
kısmen tuttu — Musa'nın hâkimiyeti 1411 değil 1410'da başlıyormuş."*
**Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` diye yaz.**
