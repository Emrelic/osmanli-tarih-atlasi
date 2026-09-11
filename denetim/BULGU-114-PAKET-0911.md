# BULGU — 114 PAKET, 11 Eylül 2026

Oturum: 114 PAKET · Görev: PRENSLİK PENCERE'nin bulgusunu uygulanabilir
pakete çevirme. Öngörü: `denetim/ONGORU-114-PAKET-0911.md` (commit
`f0e422b`, işten ÖNCE). Araç: `denetim/ARAC-114-PAKET-0911.py`. Çıktı:
`denetim/PAKET-114-0911.json` (114 künyenin tamamı). `data/*.js`e TEK
SATIR YAZILMADI.

---

## D022 SONUCU

```
① "gercek|pencere" iki değer YETTİ, üçüncü değer GEREKMEDİ — TUTTU.
② ~40 grubunun 25-30'una güvenilir tarih öngörmüştüm; GERÇEKTE bulunan:
   24 (24/40 = %60, tahminin alt-orta bandında).
③ 45 uyarı-eksiğinin <10'unun özel durum olacağını öngörmüştüm;
   GERÇEKTE: 16/45 (%36) özel durum çıktı (gerçek tarih bulunduğu için
   uyarıya hiç gerek kalmadı) — bu ÖNGÖRÜLENDEN BÜYÜK bir oran, çünkü
   "özel durum" tanımım dardı (yalnız Nepal-tipi ekstra bilgiyi
   düşünmüştüm, "zaten gerçek tarihi biliyoruz" ihtimalini AZ
   TAHMİN ETMİŞTİM).
```

---

## ① BAYRAK ŞEMASI — `t_cinsi: "gercek" | "pencere"`

```
alan adı     : t_cinsi
değerler     : "gercek" (t: bir TARİH İDDİASIDIR) · "pencere" (t: atlasın
               1923-10-29 ufkunun sonudur, TARİH İDDİASI DEĞİLDİR)
üçüncü değer : GEREKMİYOR — `iran` künyesi (t:"2026-08-07") zaten
               kanıtlıyor: GERÇEK bir tarih, ufkun NE KADAR ötesinde
               olursa olsun motoru bozmuyor (dizin amaçlı kalıyor,
               haritada boyanmıyor). "gercek_ufuk_disi" gibi ayrı bir
               kategori İCAT ETMEYE gerek yok.
```

**Tüketici — KİM OKUYACAK, OKUMAZSA NE OLUR:**
```
js/app.js kartCiz()     Künye kartında "1281 – 1923" tipi aralık basıyor.
                        Bu alanı BUGÜN OKUMUYOR (dokunulmadı, Oturum 1'in
                        dosyası). OKUMAZSA: kart metni HER İKİ durumda
                        (gerçek/pencere) da AYNI görünür — kullanıcı hâlâ
                        "1923'te bitti" yanılgısına düşebilir. Alanın asıl
                        FAYDASI ancak js/app.js onu okuyup "…-1923
                        (sürüyor)" gibi AÇIK UÇLU bir gösterim eklerse
                        ortaya çıkar — BU GÖREVİN KAPSAMI DIŞI.
arac/uret_petek.py      Künye penceresi hesaplamaları BU ALANI OKUMAZ —
                        motor DAVRANIŞI DEĞİŞMEZ (zaten t:'ye göre
                        çiziyor, t_cinsi'ne göre değil). Alan yalnız
                        DİZİN/KART gösterimi içindir.
alan OKUNMAZSA          Sessizce düşer — künye kaydında durur ama HİÇBİR
                        görsel/işlevsel fark yaratmaz. `data/` donuk
                        olduğu için bu görev alanı YALNIZ HAZIRLIYOR;
                        tüketiciyi yazmak AYRI bir sevk (muhtemelen
                        Oturum 1 / js/app.js) gerektirir.
```

---

## ② 114'ÜN DAĞILIMI

```
gercek  : 31   (t: değişecek/değişmeyecek ama artık BİR TARİH İDDİASI)
pencere : 83   (t: 1923-10-29 kalacak, ama artık AÇIKÇA "iddia değil" işaretli)
```

**31 "gercek" kaydın kırılımı:**
```
① tbmm-turkiye (1)         — zaten doğru, t: DEĞİŞMİYOR
② 6 "yakın 1-4 yıl" (PRENSLİK PENCERE'nin (c) grubu) — t: DEĞİŞECEK
   (harezm-halk-cumhuriyeti, buhara-halk-cumhuriyeti, mogolistan, kacar,
   rif-cumhuriyeti, suud-ucuncu)
③ 24 "onlarca yıl sonra bitti" grubundan GÜVENİLİR TARİHİ BULUNAN —
   t: DEĞİŞECEK (aşağıda tam liste)
```

**24 güvenilir tarih (D107: `okumadım` damgalı — genel tarih
konsensüsü, TEK TEK akademik kaynakla bu turda doğrulanmadı):**
```
irak-kralligi        → 1958-07-14   14 Temmuz Devrimi
urdun-emirligi       → 1946-05-25   Londra Antlaşması
filistin-mandasi     → 1948-05-14   Manda sona erdi
misir-kralligi       → 1953-06-18   Cumhuriyet ilanı
ingiliz-sudani       → 1956-01-01   Sudan bağımsızlığı
cezayir-fransiz      → 1962-07-05   Cezayir bağımsızlığı
kesiri-sultanligi    → 1967-11-30   Güney Yemen bağımsızlığı
kuayti-sultanligi    → 1967-11-30   Güney Yemen bağımsızlığı
ingiliz-hindistani   → 1947-08-15   Hindistan/Pakistan bağımsızlığı
racput               → 1947-08-15   (YAKLAŞIK — eyalet eyalet değişir)
manipur              → 1949-10-15   Hindistan Birliği'ne katılım
travankur            → 1949-07-01   Travancore-Cochin birleşmesi
haydarabad-nizam     → 1948-09-17   Operasyon Polo
bahavelpur           → 1955-10-14   (YAKLAŞIK)
bharatpur-cat        → 1948-03-30   Racasthan Birliği
bhopal               → 1949-06-01   ⚠️ TDV "1952'ye dek" diyor — ÇELİŞKİ,
                                     araştırılmalı, ŞİMDİLİK 1949 önerildi
cunagadh             → 1948-02-20   Referandum sonrası ilhak
ingiliz-malaya       → 1957-08-31   Malaya bağımsızlığı
hollanda-dogu-hint   → 1949-12-27   Endonezya egemenliği tanındı
fransiz-cinhindi     → 1954-07-21   Cenevre Antlaşmaları
nguyen-hanedani      → 1945-08-25   Bao Dai'nin çekilmesi
sarawak-brooke       → 1946-07-01   İngiliz Tacı'na devir
ingiliz-guyanasi     → 1966-05-26   Guyana bağımsızlığı
hollanda-guyanasi    → 1975-11-25   Surinam bağımsızlığı
```
🔴 **1 çelişki bulundu**: `bhopal` için önerdiğim tarih (1949-06-01,
Hindistan Birliği'ne resmî katılım) ile TDV'nin kendi `bopal--devlet`
maddesinin dediği ("1952'ye dek") ÇELİŞİYOR — bu ARAŞTIRILMADAN
yazılmamalı, `PAKET-114-0911.json`de AÇIKÇA işaretli.

**cammu-kesmir** için GERÇEK tarih YAZILMADI — 1947 sonrası statüsü
tartışmalı/karmaşık (bugüne dek süren bir anlaşmazlık konusu),
`bulunamadı` damgalandı, `pencere` olarak bırakıldı.

**83 "pencere" kaydın kırılımı:**
```
① 54 zaten "hâlâ var" ya da bilinen (kısmen ozet uyarılı) — DEĞİŞMEDİ
② 29'una YENİ standart ozet uyarısı EKLENDİ (45 eksikten 16'sı ①'e
   ("gercek" kovasına) taşındığı için 45-16=29 kaldı)
```

---

## ③ 45 EKSİK UYARI — durum

```
45 eksik uyarının 16'sı  → artık GERÇEK tarih bulundu, uyarıya GEREK
                           KALMADI (kova ①'e taşındı)
kalan 29'u                → STANDART cümle eklendi:
   "(t: alanı atlasın 1923-10-29 ufkunun sonudur — devlet/hanedan bu
    tarihte sona ermedi, yalnız atlas buradan sonrasını çizmiyor.)"
```
Tek, standart cümle YETTİ — `D022` öngörümdeki "özel durum" endişesi
(Nepal tipi ekstra bilgi gerektiren istisna) GERÇEKLEŞMEDİ; kalan 29'un
hiçbiri künyeye özgü bir ek bilgi GEREKTİRMEDİ, hepsi aynı jenerik
cümleyle karşılanabildi.

---

## ④ PAKET — `denetim/PAKET-114-0911.json`

114 kaydın HER BİRİ için: `id · t_mevcut(1923-10-29) · t_cinsi ·
onerilen_t · ozet_eki · kaynak`. Örnek satırlar:
```
{"id":"irak-kralligi", "t_cinsi":"gercek", "onerilen_t":"1958-07-14",
 "ozet_eki":null, "kaynak":"14 Temmuz Devrimi... — genel tarih konsensüsü"}
{"id":"abd", "t_cinsi":"pencere", "onerilen_t":"1923-10-29 (değişmez)",
 "ozet_eki":"(t: alanı atlasın 1923-10-29 ufkunun sonudur...)",
 "kaynak":"hâlâ var / 2026'da bile sürüyor — gerçek bitiş tarihi YOK, uydurulmaz"}
```
🔴 Tarih UYDURULMADI — hiçbir "hâlâ var" kayda sahte bitiş tarihi
YAZILMADI, `cammu-kesmir` gibi tartışmalı olanlara da.

---

## §5 — Ölçmediklerim

```
① 24 "genel tarih konsensüsü" tarihinin HİÇBİRİ TDV/akademik tek
   kaynakla BU TURDA doğrulanmadı — hepsi `okumadım` damgalı (D107),
   yaygın bilinen 20. yy tarihleri olsa da TEK TEK teyit EDİLMEDİ.
② `bhopal` çelişkisi (1949 vs TDV'nin 1952'si) ÇÖZÜLMEDİ, yalnız
   İŞARETLENDİ.
③ `js/app.js`in `t_cinsi`yi GERÇEKTEN nasıl kullanacağı (görsel
   biçim) TASARLANMADI — bu görev yalnız VERİYİ hazırladı.
④ Motor koşulmadı, `data/*.js`ye hiçbir satır yazılmadı.
```
