# BULGU — PRENSLİK PENCERE, 11 Eylül 2026

Oturum: PRENSLİK PENCERE · Görev: 1.MURAT'ın tahta sevki (HİNDİSTAN
KÜNYE II'nin `nepal` bulgusunun devamı).
Araç: `denetim/ARAC-PRENSLIK-PENCERE-0911.py` (öngörü commit `e90b471`,
ölçüm ondan SONRA). `data/*.js`e TEK SATIR YAZILMADI.

---

## D022 SONUCU — öngörü YÖN OLARAK tuttu, BÜYÜKLÜK OLARAK çürüdü

> *"Beklentim: kümenin ÇOĞUNLUĞU (belki %60-80'i) 🔴 YANLIŞ çıkacak."*

Ölçüm: **113/114 (%99)** 🔴 çıktı. Öngörü YÖNÜ doğruydu ama BÜYÜKLÜĞÜ
**ciddi biçimde eksik tahmin edilmişti** — bu bir "prenslik" sorunu değil,
**neredeyse EVRENSEL bir desen** çıktı: ABD, bütün Güney Amerika,
İngiltere, Fransa, İskandinavya, Fransız Cezayiri, Irak Krallığı — hepsi
aynı kalıba düşüyor. Tek gerçek istisna `tbmm-turkiye`.

---

## ① TARAMA — 114 künye

`t:` değeri tam olarak `1923-10-29` olan **114 künye** bulundu (627
künyenin kendi üst-düzey f/t alanı tarandı, kronoloji[] alt-dizisi
DAHİL EDİLMEDİ — D180'in "pencere ucu bir ölçüm değeri değil" uyarısı
bu tarama için de geçerli, o yüzden yalnız üst-düzey alan sayıldı).

**Ölçülebilir bir yan-bulgu:** bu 114'ün **69'u (%61)** `ozet:`
alanına ELLE bir uyarı cümlesi eklemiş ("...1923 sonrasında da sürdü",
"...hâlâ sürüyor" gibi) — yani yazan oturumların çoğu SORUNUN
FARKINDAYDI. Ama **45'i (%39) bu uyarıyı taşımıyor** — ve bu 45'in
içinde hem `tbmm-turkiye` (uyarıya gerek yok, gerçekten doğru) hem de
ABD, Kanada, bütün Güney Amerika cumhuriyetleri, Irak Krallığı, Fransız
Cezayiri gibi **yüzyıl ölçeğinde yanlış** kayıtlar VAR — yani uyarı,
**en çok ihtiyaç duyulan yerlerde eksik.**

---

## ② ÜÇ KOVA

```
🟢 DOĞRU (gerçekten 1923'te/yakınında bitti)     1   (%1)
🔴 YANLIŞ (devlet sürdü, pencere taşıyor)       ~110 (%96)
⚪ ÖLÇÜLEMEDİ (kapsam/sınır belirsiz)             ~3  (%3)
```

### 🟢 DOĞRU (1)
```
tbmm-turkiye   f:1920-04-23 t:1923-10-29
   Türkiye Büyük Millet Meclisi Hükûmeti, 29 Ekim 1923'te Cumhuriyet'in
   ilanıyla BİZZAT SONA ERDİ — atlasın kendi tanımlayıcı olayı. TEK
   KESİN İSABET.
```

### 🔴 YANLIŞ — alt-gruplarıyla (D024: çareleri FARKLI, karıştırılmadı)

**(a) HÂLÂ VAR / 2026'da bile sürüyor (~55 künye) — DÜZELTME "yeni tarih"
DEĞİL, "bu alan bir yaşam süresi değil" işaretlemesi olmalı:**
```
abd · kanada · ingiltere · fransa-cumhuriyet · almanya · ispanya ·
portekiz · italya · isvicre · hollanda · belcika · luksemburg · isvec ·
norvec · danimarka · finlandiya · izlanda · yunanistan · romanya-kralligi*
· polonya* · cekoslovakya* · avusturya-cumhuriyet* · macaristan-naiplik* ·
letonya · litvanya · estonya · arjantin-cumhuriyeti · bolivya-cumhuriyeti
· sili-cumhuriyeti · paraguay-cumhuriyeti · peru-cumhuriyeti ·
uruguay-cumhuriyeti · ekvador-cumhuriyeti · venezuela-cumhuriyeti ·
kolombiya-cumhuriyeti · brezilya-cumhuriyeti · meksika · guatemala ·
dominik-cumhuriyeti · kuba-cumhuriyeti · panama-cumhuriyeti · haiti ·
liberya · afganistan · yemen-zeydi (1962'ye kadar) · brunei-sultanligi
(BUGÜN HÂLÂ SULTANLIK) · agadez-sultanligi (bugün hâlâ törensel
sultanlık) · avustralya · yeni-zelanda · tonga-kralligi · siyam-chakri
(Tayland, bugün hâlâ krallık) · almanya
   (* bunlar sonradan REJİM DEĞİŞTİRDİ — Romanya/Macaristan monarşi
   kalmaya devam etti farklı biçimde, Çekoslovakya/Avusturya cumhuriyet
   olarak sürdü, ama "devlet" olarak SÜREKLİLİK var, 1923'te BİTMEDİ)
```
⇒ **Bunlar için "doğru t:" ÖNERİLEMEZ** — hâlâ var olan bir devlete
sahte bir "bitiş tarihi" yazmak, tarih uydurmanın TERSİ ama AYNI
KUSURDUR (var olmayan bir sona erişi icat etmek). Doğru düzeltme bir
YENİ TARİH değil, bir **YENİ ALAN**: `t:`nin PENCERE SONU olduğunu
söyleyen yapılandırılmış bir işaret (bkz. ③).

**(b) Kolonyal/manda yönetimi ONLARCA YIL sonra bitti (~40 künye):**
```
irak-kralligi (1958) · urdun-emirligi (1946, Ürdün Krallığı) ·
suriye-lubnan-mandasi (1943-46) · filistin-mandasi (1948) ·
misir-kralligi (1953) · ingiliz-sudani (1956) · cezayir-fransiz (1962) ·
kesiri-sultanligi (1967) · kuayti-sultanligi (1967) ·
ingiliz-hindistani (1947) · racput · manipur · nepal · travankur ·
haydarabad-nizam · cammu-kesmir · bahavelpur · bharatpur-cat · bhopal ·
cunagadh (Hint prenslikleri, HEPSİ 1947-48'e kadar) ·
ingiliz-malaya (1957) · hollanda-dogu-hint (1949) ·
fransiz-cinhindi (1954) · nguyen-hanedani (1945, biçimsel olarak) ·
kamboc-kralligi (1953'e kadar Fransız himayesi, sonra bağımsız —
   KRALLIK BUGÜN HÂLÂ VAR) · surakarta · yogyakarta (Endonezya
   bağımsızlığına, 1945-49) · sarawak-brooke (1946, İngiliz
   Taç Kolonisi'ne devir) · san-devletleri · cohor-sultanligi ·
   tidore-sultanligi (Malay/Endonezya sultanlıkları, çoğu 1940'lara
   kadar özerk sürdü) · ingiliz-guyanasi (1966) ·
   hollanda-guyanasi/Surinam (1975) · fransiz-guyanasi (BUGÜN HÂLÂ
   Fransız toprağı) · rif-cumhuriyeti (1926 — İspanyol-Fransız
   yenilgisi) · suud-ucuncu (1926-27'de Krallığa dönüştü, 1932'de
   Suudi Arabistan'a katıldı) · yunanistan (oniki-ada-italyan 1943'e
   kadar İtalyan işgali sürdü)
```
⇒ Bunlar için de tek bir "doğru t:" yazmak riskli — bazıları (Hint
prenslikleri, Malay sultanlıkları) BAŞKA bir künyeye (bağımsız
Hindistan/Malezya) devrolarak bitti, bazıları (Fransız Guyanası, Brunei)
HÂLÂ SÜRÜYOR. Her biri AYRI araştırma ister; bu görev bunu YAPMADI,
yalnız BÜYÜKLÜĞÜ (onlarca yıl) gösterdi.

**(c) 1-4 YIL İÇİNDE gerçekten bitti — DÜZELTİLEBİLİR, somut tarih
önerilebilir:**
```
harezm-halk-cumhuriyeti   t:1923-10-29 → öneri ~1924-10 (Harezm SSC'ye
   dönüşüm/Orta Asya millî sınırlandırması) — GÜN belirsiz, `bulunamadı`
buhara-halk-cumhuriyeti   t:1923-10-29 → öneri ~1924-09/10 (Buhara
   SSC'ye dönüşüm) — GÜN belirsiz, `bulunamadı`
mogolistan (Bogd Hanlık)  t:1923-10-29 → öneri 1924-05-20 (Bogd Han
   öldü) VEYA 1924-11-26 (Moğolistan Halk Cumhuriyeti ilanı, monarşi
   resmen kaldırıldı) — İKİ olay var, hangisi "son" sayılacağı KARAR
   gerektirir
kacar (Kaçar Hanedanı)    t:1923-10-29 → öneri 1925-10-31/12-15 (Meclis
   Ahmed Şah'ı hal'etti / Rıza Han taç giydi, Pehlevî hanedanı başladı)
rif-cumhuriyeti           t:1923-10-29 → öneri 1926-05-27 (İspanyol-
   Fransız ortak seferi Rif direnişini bitirdi)
suud-ucuncu               t:1923-10-29 → öneri 1926-01-08 (İbn Suûd
   Hicaz Kralı ilan edildi, "III. Suûdî Devleti/Necid Sultanlığı" kimliği
   burada BİÇİM DEĞİŞTİRDİ) VEYA 1932-09-18 (Suudi Arabistan Krallığı
   ilanı, TAM birleşme) — hangi eşiğin "son" sayılacağı bir MODELLEME
   kararı
```
⇒ Bu beş kayıt, görevin ④ maddesinin TAM istediği türden: küçük
büyüklükte (1-4 yıl), somut ve YAZILABİLİR bir düzeltme. **Ama gün
hassasiyeti çoğunda YOK** — `harezm`/`buhara` için `bulunamadı` yazılmalı
(§4: hassasiyeti düşür, uydurma).

### ⚪ ÖLÇÜLEMEDİ (~3)
```
somali (Somali Sultanlıkları, ÇOĞUL/BELİRSİZ künye) — hangi sultanlığı
   kastediyor BELLİ DEĞİL; Hobyo ~1925, Majeerteen ~1927 İtalyan
   ilhakına kadar sürdü ama künye TEK bir tarih taşıyacaksa hangisi
   esas alınacak, ÖLÇÜLEMEDİ.
cimma-sultanligi — TDV/akademik kaynakla 1932-05 (Abba Jifar II'nin
   ölümü, Haile Selassie'nin ilhakı) BULUNDU aslında — bu (c) grubuna
   taşınabilir, 9 yıl fark, ÖLÇÜLDÜ ama görev kapsamında (b)/(c) sınırı
   net değil, KOORDİNATÖRE bırakıyorum.
umman-zengibar — künyenin Umman'ın kendisinden (ayrı künye: `umman`)
   AYRI olarak neyi temsil ettiği (1698-1856 birleşik dönem mi, yoksa
   Zengibar hattının TAMAMI 1964'e kadar mı) künyenin `ozet:`i
   OKUNMADAN karar verilemez — bu görev o gövdeyi OKUMADI.
```

---

## ③ 🔴🔴 ŞEMA BOŞLUĞU — asıl mesele budur

`t:"1923-10-29"` bu projede **İKİ FARKLI ANLAMA** geliyor ve **kayıtta
bu ikisi AYRIŞTIRILAMIYOR**:

```
(A) PENCERE SONU BEYANI   "atlas buradan sonrasını çizmiyor, devlet
                          sürüyordu" — 113/114 kayıt BÖYLE
(B) GERÇEK BİTİŞ TARİHİ   "devlet bu tarihte/yakınında GERÇEKTEN bitti"
                          — 1/114 kayıt (tbmm-turkiye) BÖYLE
```

Bunu ayırt eden TEK sinyal, **69/114 kayıtta ELLE yazılmış, YAPILANDIRILMAMIŞ
bir `ozet:` cümlesi.** Hiçbir araç, hiçbir UI kodu (`kartCiz()` dahil)
bu cümleyi okuyup "(A) mı (B) mi" diye AYIRT EDEMİYOR — çünkü bu bir
serbest metin, bir alan/bayrak değil. `js/app.js`in `kartCiz()`
fonksiyonu her iki durumda da AYNI ŞEKİLDE "1281 – 1923" tipi bir aralık
basıyor (bu görev bunu OKUMADI, DOĞRULAMADI — `§5` ölçmediklerimde).

**ÖNERİ (karar Emre'nin/koordinatörün):**
```
Şık A: Yeni bir bayrak alanı — `pencere_sonu:true` — t: alanı
       DEĞİŞMEDEN, 113 kayda eklenir. UI bu alanı görürse "…'den
       BERİ" gibi açık uçlu bir ifade kullanabilir, "…-…" aralığı
       yerine.
Şık B: `t:` alanının KENDİSİ hiçbir zaman gerçek bitiş sayılmaz
       (atlas ufkunun DOĞASI gereği) — yalnız GERÇEKTEN 1923
       civarında biten (c) grubundaki 5-6 kayıt İSTİSNA olarak
       düzeltilir, geri kalan 107-108 kayıt DOKUNULMAZ (davranış
       zaten "doğru", yalnız OKUYANIN yanılma riski kalır).
Şık C (BENİM ÖNERİM): B + `ozet:` uyarısı OLMAYAN 44 kayda (tbmm-turkiye
       hariç) STANDART bir cümle eklenir ("Bu tarih atlasın 1923 ufkunun
       sonudur; devlet bu tarihte sona ermedi.") — ucuz, veri modelini
       BOZMAZ, yalnız 44 satırlık metin eklemesi.
```

---

## §4 — Ölçmediklerim (`§7.1④`)

```
① `js/app.js`teki `kartCiz()` bu `t:` alanını GERÇEKTEN nasıl
   gösteriyor — DOĞRULANMADI, yalnız "1281 – 1923" tipi bir gösterim
   VARSAYILDI (CLAUDE.md'nin kendi tarifinden).
② (b) grubundaki ~40 kaydın HER BİRİ için kesin/kaynaklı bitiş tarihi
   ARANMADI — yalnız BÜYÜKLÜK (onlarca yıl) sınıflandırıldı.
③ `somali`, `cimma-sultanligi`, `umman-zengibar`in `ozet:`/`kaynak:`
   gövdeleri TAM OKUNMADI — yalnız WebSearch özetiyle sınıflandı.
④ Motor koşulmadı, `data/*.js`ye hiçbir satır yazılmadı.
```
