# KASA-1281-ILK-HALKA-1010 — `1281-01-01` halkaları: kırpma mı, atlama mı, sahte geçiş mi?

Görev: YILDIRIM BAYEZIT (MEZOPOTAMYA kararı ⑤) · Araştırmacı: KASA · salt okunur, `data/` DONUK.
Soru: ilk halkası `1281-01-01` olan ve gerçek başlangıcı tarihlenebilir bir olay olan kaç nokta var?

### 🔴 Ölçümden önce kavramsal ayrım (sonucu değiştirir)
`1281-01-01` iki AYRI şey olabilir:
- **Ⓚ KIRPMA:** `s[0]` 1281-01-01'de başlıyor, önünde halka yok, sahip 1281'den ÖNCE gelmiş (Irak İlhanlı 1258).
  Atlasın penceresi 1281'de açılıyorsa bu halka "1281'den itibaren İlhanlı" der, ve bu **doğrudur**. Hata değil,
  pencere kırpması.
  ⇒ Bağdat'ın `1258-02-10`'u o zaman **pencere dışı** bir değer. İki sözleşme yan yana:
  - kırp (`max(gerçek, 1281)`)
  - gerçek günü yaz
  Hangisi sözleşme ise öteki "hata"dır. Bu bir **sözleşme kararı**; tek tek düzeltme kalemi değil.
- **Ⓖ SAHTE GEÇİŞ:** bir halka 1281-01-01'de BİTİYOR ve bir sonraki AYNI gün başlıyor (Anadolu 14 deseni:
  Selçuklu → İlhanlı). Burada 1281-01-01 bir **olay günü iddiası**: "sahip 1281'de değişti". Gerçek geçiş başka
  tarihteyse (1243 · 1256 · 1277 …) bu **ölçülmüş bir hata**.
⇒ Evren iki kovaya ayrılır. Düzeltme kalemi yalnız Ⓖ'den çıkar. Ⓚ sözleşme sorusudur, sayısı raporlanır.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — kendi aralığım
**Desen:**
- ① Evrenin büyük kısmı Ⓚ (s[0] başlangıcı) (%85). Ⓖ küçük ama hatanın kendisi orada.
- ② Ⓖ'ler 1281 civarında sahip değiştiren bölgelerde toplanır: Anadolu (Selçuklu/İlhanlı), Doğu Avrupa
  (Altın Orda). Irak'ta Ⓖ YOK, çünkü Irak'ta 1281'de değişen sahip yok (%80).
- ③ Ⓖ grupları tarihlenebilir tek bir olaya bağlanır (Kösedağ 1243, Abaka'nın 1277 Anadolu seferi vb.) ⇒ Bağdat
  deseni (komşu devralma) Ⓖ'de işler.
**Büyüklük (geniş):**
- `s[0].f` = 1281-01-01 olan nokta: **1.400 ± 300** (koordinatör "1419 kayıt" dedi).
- Ⓖ (1281-01-01'de biten + aynı gün başlayan halka çifti olan nokta): **40 ± 30**.
- Ⓖ'den gerçek olay günü tarihlenebilen (kaynaklı): **20 ± 20** · gerçekten bilinmeyen (meşru): **10 ± 10** ·
  ölçülemedi: **10 ± 10**.
- Ⓚ'de gerçek başlangıcı 1281'den önce bir olaya bağlanabilen grup: çoğunluk (%70), ama sözleşme sorusu.

## 1. ÖLÇÜM

Zemin: main 5ba57827, `data/yerlesimler*.js`.
- `s:` dizisi nesne nesne ayrıştırıldı (alan sırası değişken: `{f, d, kaynak, t, kesinlik}`). İlk denemede sabit
  sıralı desen Ⓖ'yi **0** buldu; düzeltildi ⇒ 933 `s:`'li nokta okundu.
- Künye bölgesi `devletler.js` `bolge` alanından.

### 1.1 Evren ve iki kova
```
s:'li nokta                                  933
Ⓚ KIRPMA   s[0].f = 1281-01-01               765   (72 sahip×bölge grubu)
Ⓖ SAHTE GEÇİŞ (bir halka 1281-01-01'de biter,
   farklı sahip AYNI gün başlar)              13   — HEPSİ ANADOLU
s[0] 1281'DEN ÖNCE başlayıp 1281'i aşan       31   (gerçek gün taşıyanlar: Bağdat 1258-02-10 · Halep 1260-09-03 ·
                                                    İzmit/Gelibolu/Kavala 1261-07-25 · Antalya 1216-01-22 …)
```
Ⓚ en büyük gruplar: ilhanli/iran 139 · almanya 72 · bizans 67 · venedik 42 · fransa 35 · altinorda 33 · ingiltere 33 ·
macaristan 26 · memluk 23 · kastilya 23 …

### 1.2 Ⓖ 13 — mekanizma ve kaynak
```
selcuklu → ilhanli (10): Kayseri · Tokat · Sivas · Erzincan · Erzurum · Van · Bitlis · Elbistan · Kemah · Kırşehir
selcuklu → ahiler: Ankara · selcuklu → pervane: Sinop · selcuklu → cobanogullari: Çankırı
```
🔴 **Daha önce ölçülmüş:** `denetim/EPOK-SAHIP-1008.md` aynı kümeyi bulmuş ("14 çelişki, hepsi Anadolu, hepsi TEK
SINIF"; benim 13'ümden farkı Bayburt). Hükmü: "modelleme (D205: kimlik) — koordinatör kararı; diff'e GİRMEDİ".
Main'de seam'ler duruyor. ⇒ Koordinatörün "Anadolu 14 (başka oturum)" dediği bu. Bu rapor onu YENİDEN sınıflamıyor;
iki yeni şey ekliyor:
**(a) MEKANİZMA — Ⓚ'nin Ⓖ'ye dönüşümü:**
- Bu 13 noktanın 1281 öncesi halkaları ZAMAN-Z6-1008 ile EKLENDİ. Sivas'ın selcuklu halkasının kaynağı
  "…· ZAMAN-Z6-1008"; `denetim/IZNIK-1097-1010.md`: "öncesi İznik `s:` 1281'den başlıyordu".
- Eski zincirin `s[0]`'ı 1281-01-01'di (Ⓚ, kırpma). Z6 önüne bir halka ekleyince o kırpma işaretçisi bir
  **SAHİP DEĞİŞİMİ GÜNÜ**'ne dönüştü.
- Kanıt: 13'ün hepsinde 1281-01-01'de başlayan halka (`ilhanli` vb.) **kaynak alanı TAŞIMIYOR**; önceki halka taşıyor.
- ⇒ D271 için: kırpma, pencere genişletilmeden zararsızdır. Pencere **genişletildiği an** bir yalana dönüşür.
  MEZOPOTAMYA §1.3'teki Irak uyarısının Anadolu'da GERÇEKLEŞMİŞ hâli.
**(b) EPOK'un okumadığı yeni TDV cümlesi — Erzurum:**
- TDV `erzurum`: "Anadolu Selçuklu Devleti'nin yıkılmasından (1308) sonra İlhanlılar'a bağlandıysa da bu devletin
  parçalanmasının (1335) ardından en karışık dönemini yaşadı." ⇒ şehir adlı, YILLI geçiş: **selcuklu → ilhanli 1308**.
- `selcuklu` künye t'si de 1308-01-01 ⇒ zarf ile uyumlu. ⇒ Erzurum için 1281-01-01 **27 yıl erken**, ve modelleme
  sorusu Erzurum'da KAYNAKLA cevaplanıyor.
- Öteki 12'de TDV yalnız 1243'ü (Kösedağ / Moğol ele geçirişi / "vesâyet") ya da iç olayları tarihliyor:
  - Tokat "İlhanlılar, Tokat Emirliği'ni Muînüddin Süleyman Pervâne'ye verdiler" · "1276'da Tokat, Nûreddin Cibrîl
    idaresinde"
  - Elbistan "(10 Zilkade 675 / 15 Nisan 1277)" Baybars–Abaka savaşı
  - Van "Argun Han zamanında (1284-1291) … yaylakları"
  - Sinop Pervâne "geri alındı (664/1266)"
  - Ankara (Ahîler), Çankırı (Çobanoğulları): yıllı geçiş cümlesi yok.
  - ⇒ 1281'de geçişi destekleyen cümle HİÇBİRİNDE yok; 1308 / 1243 / 1277 seçimi EPOK'un açık modelleme sorusu.

### 1.3 Ⓚ 765 — sözleşme sorusu, tek tek düzeltme değil
Veride iki sözleşme yan yana:
- **765 nokta** sahibi 1281'den önce gelmiş olsa bile `s[0]`'ı 1281-01-01'de kırpıyor.
- **31 nokta** gerçek (1281 öncesi) günü yazıyor. Bağdat deseni: Irak'ta Bağdat 1258-02-10 iken Hille, Kerbelâ, Kûfe
  vb. 1281-01-01; Bizans'ta İzmit 1261-07-25 iken 67 Balkan noktası 1281-01-01.
⇒ Komşu devralma (§4 "komşu günü şartlı serbest") Ⓚ'ye uygulanırsa sonuç pencere-DIŞI bir gün olur. Pencere 1281'de
açıksa bu bir düzeltme değil, sözleşme değişikliğidir. ⇒ Ⓚ'yi tek tek DÜZELTME kalemine çevirmiyorum; sözleşme
kararını (kırp mı / gerçek gün mü) sana bırakıyorum. Karar "gerçek gün" olursa Bağdat deseniyle devralınabilecek
grup sayısı: **ilhanli/Irak 8 · bizans 67'nin bir kısmı (1261 Konstantinopolis'in geri alınışı) · memluk/Suriye** —
ayrı tur.

### 1.4 ⑤ Çıktı — sayıyla
```
DÜZELTİLEBİLİR (kaynaklı gerçek gün, Ⓖ)   1   Erzurum: selcuklu → ilhanli 1308 (TDV erzurum, yıl)
MEŞRU (gerçekten bilinmiyor)              0   — Ⓖ'lerin hiçbiri "bilinmiyor" değil; geçiş bir MODELLEME seçimi
ÖLÇÜLEMEDİ / MODELLEME (EPOK açık soru)   12
Ⓚ KIRPMA (sözleşme sorusu)                765   — kalem değil, karar
```

### 1.5 Öngörü sınavı
```
DESEN ① evrenin çoğu Ⓚ                       ✓ (765 ↔ 13)
DESEN ② Ⓖ Anadolu'da, Irak'ta yok             ✓ 13/13 Anadolu · Irak 0
DESEN ③ Ⓖ tek tarihli olaya bağlanır          ✗ — tek olay yok; 1243 vesâyet / 1308 Selçuklu sonu / 1277; modelleme
s[0]=1281 1.400 ± 300                         765 ✗ (koordinatörün 1419'u başka evren: kd/bütün kayıt)
Ⓖ 40 ± 30                                     13 ✓
Ⓖ tarihlenebilen 20 ± 20                      1 ✓
meşru 10 ± 10 · ölçülemedi 10 ± 10            0 ✓ · 12 ✓
```
🆕 Öngörmediğim: Ⓖ'nin MEKANİZMASI. Kırpma, geriye genişletmede sahte geçişe dönüşüyor; ve bu zaten bir kez oldu (Z6).

### 1.6 🔴 DÜZELTME (KASA-DIKIS-KAPI-1010 ölçümüyle)
- **Kırpma sayısı 765 değil 2.442.** Yetkili yükleyici `girdi.yukle` (4.300 kayıt, bütün nokta dosyaları) ile ölçüldü;
  765 benim dar ayrıştırıcımındı. Ⓚ/Ⓖ ayrımı ve hükümler değişmez.
- **Ⓖ 13 değil 14 (13 kaynaksız + Elbistan kaynaklı):** Bayburt (`yerlesimler_anadolu_0914.js`) yükleyiciyle bulundu
  ⇒ EPOK'un 14'ü TAMAM.
- Elbistan'ın 1281 halkası kaynak taşıyor ama kaynak SONU (1337) tarihliyor (kapının beyanlı sınırı).

## 2. ③ İSTİYORUM
a) **Erzurum:** selcuklu t 1281-01-01 → **1308** (TDV erzurum, yıl), ilhanli f 1308. EPOK'un modelleme sorusunda
   kaynakla çözülen ilk nokta.
b) **EPOK modelleme kararı** (12 nokta): vesâyetteki Selçuklu toprağı 1243 / 1277 / 1308 hangisinde İlhanlı
   boyanacak? Erzurum'un TDV cümlesi "1308" lehine bir veri noktası, ama tek şehir.
c) **Sözleşme kararı (D271):** `s[0]` kırp mı (765 nokta, bugünkü çoğunluk), gerçek gün mü (31 nokta)?
   - Hangisi seçilirse öteki küme "hatalı" olur.
   - 🔴 Ayrıca: pencere geriye genişletilirken eski `s[0]` kırpmasının sahte geçişe dönüşmesini önleyen bir
     **genişletme kuralı** önerim. "Önüne halka eklenen her `s[0]`'ın f'si yeniden kaynaklanır; kırpma günü geçiş
     günü olarak BIRAKILAMAZ." Z6'nın 13 seam'i bu kural olmadığı için doğdu.
