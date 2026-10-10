# D271 — Bir borç kovasının ADI, içindekinin SINIFINI belirlemez

**Slogan:** *"kaynaksız"* dediğimiz kovada **~554 YANLIŞ kayıt** var — ad
*"kaynak yazılmadı"* varsayımı taşıyor ve **ARAŞTIRMA** çaresini çağırıyor,
oysa içerik **DÜZELTME** istiyor. İki çare aynı maliyette ve aynı aciliyette
değil.

> ⚠️ **BU DOSYA BİR KEZ DÜZELTİLDİ** (10 Ekim 2026, aynı gece). İlk sürümü
> hem bir SAYIYI (%70) hem bir SEBEBİ (*"1281 bir kaynak sanılmış"*) ölçülmüş
> gibi yazıyordu. İkinci tur örneklem sayıyı düşürdü, ve sebebin **bu veriyle
> ayrıştırılamadığını** gösterdi. Düzeltmenin kendisi dersin parçasıdır — §4'e
> bakın.

## §1 Vaka — Emre'nin üç kararından biri

Soru: *`kaynaksız s:` 1841 bir **beyan borcu** mu (kaynağını yazmadık), bir
**yanlışlık tahmini** mi (kayıt yanlış)?* Cevap **ikisi de değil** çıktı.

**TUR 1** (`KAYNAKSIZ-ORNEKLEM-1010`, N=48, 11 bölge, tohum 20261010,
Hamilton orantılı; her kayıttan rng ile tek pencere-içi iddia sınandı):
```
YANLIŞ 10 · DOĞRU 36 · ÖLÇÜLEMEDİ 2   ⇒ %21,7 (Wilson %95: %12,3–35,6)
                                      ⇒ 1841'e ≈400 iddia (226–655)
alt bulgu: 1281-01-01 başlangıçlı halka %70 yanlış (7/10) ↔ geç halka %8 (3/36)
```
**TUR 2** (`KAYNAKSIZ-ORNEKLEM-1281-1010`, **yeni tohum 20261011**, N=40,
evren = 1419 − tur1'in 37 kaydı = 1382; `bolge()` tur1'in betiğinden METİN
olarak okunup koşturuldu, sha256 `02c722f0`, ölçüm boyunca dokunulmadı):
```
YANLIŞ 9 · DOĞRU 22 · ÖLÇÜLEMEDİ 9    ⇒ %29,0 (Wilson %16,1–46,6)
```

### 🔴 BİRLEŞİK SONUÇ — ve tur 1'in %70'i TEKRARLANMADI
```
1281 halkası (tur1 7/10 + tur2 9/31) = 16/41 = %39,0  (%25,7–54,3)
                                      ⇒ ≈554 kayıt (364–770)
geç halka                             = %8   (%3–22)
⇒ fark GERÇEK ama KÜÇÜK.  ≈990 değil ≈554.
```
**Niçin düştü:** tur 1'in 1281 alt kümesi **n=10**'du ve Afrika Boynuzu /
Kızıldeniz / Malabar ağırlıklıydı. Tur 2 orantılı tabakada Avrupa'ya 11 pay
verdi ve Avrupa'nın 1281 halkaları (Kutsal Roma · Portekiz · Danimarka ·
Tver) **DOĞRU** çıktı. ⇒ **%70, küçük n + bölge karışımıydı.**
📌 `§7.3`ün *"yanlış alanla ölçmek, ölçmemekten daha tehlikelidir: sayı verir
ve güven telkin eder"* kuralının **örneklem yüzü** — küçük n de sayı verir.

## §2 Kural — ve niçin SAYI düşse de AYAKTA

> **Bir borç kovasının adı, içindekinin sınıfını belirlemez. Ad bir VARSAYIM
> taşır, ve varsayım yanlışsa kova yanlış ÇAREYE yönlendirir.**
```
"kaynaksız"  varsayımı: kaynak YAZILMADI   → çare ARAŞTIRMA (dokümantasyon)
ölçülen içerik: ~554 kayıt YANLIŞ          → çare DÜZELTME (hata onarımı)
```
%70 olsa da %39 olsa da hüküm aynı: 1419 kayıt *"belgelenmemiş"* sanıldığı
sürece bir **dokümantasyon** işi görünüyordu; ölçülünce içinde yüzlerce
**hata** çıktı. **Kova BÖLÜNDÜ:**
```
kaynaksız ∧ 1281-01-01 başlangıçlı  = 1419  → YANLIŞLIK ŞÜPHESİ (~%39 yanlış)
kalan                               =  422  → gerçek BEYAN BORCU
```
Tavan ailesi kalemi olduğu için ikisi **aynı commit'te** iner (`§3.4 ②`) ve
tavan yazılmadan hemen önce **yeniden ölçülür** (`§3.4 ⓪`).

## §3 🔴 SEBEP BİR HİPOTEZDİR, BULGU DEĞİL — ve bu veriyle AYRIŞTIRILAMAZ

Koordinatörün ilk hükmü şuydu: *"`1281-01-01` atlasın ufkunun kenarı, bir
sınır işareti, ve 1419 kayıtta bir KAYNAK GİBİ yazılmış."* Ölçen oturum bunu
çürüttü:
```
1419 kaydın 1419'unda f TAM 1281-01-01 · f < 1281 olan 0
⇒ KARŞILAŞTIRMA GRUBU BOŞ
⇒ "1281 halkası" = zincirin İLK halkası, ve ilk halka HEM sınır işaretini
   HEM de en eski/zor dönemi taşıyor (en ince kaynak)
```
İki açıklama aynı veriyi üretir:
```
Ⓐ ufuk ucu VARSAYILAN olarak yazıldı (sınır işareti kaynak sanıldı)
Ⓑ zincirin ilk halkası ZATEN en zor halkadır (en eski dönem, en ince kaynak)
```
Veri **Ⓐ ile uyumlu** ama Ⓑ'yi dışlamıyor ⇒ sebep **HİPOTEZ**tir.
### §3b AYIRT EDİCİ ÖLÇÜM KOŞTU — ve İKİ HÜKMÜ DÜZELTTİ
(`KAYNAKSIZ-1281-KONTROL-1010`, yalnız sayım, kaynak okuma yok, ham `f`)
```
kaynaksız                      1412/1419 = %99,5
kayıt-düzeyi kaynaklı            664/687 = %96,7
donem_ici                        366/417 = %87,8
ilk halkası KENDİSİ kaynaklı     134/214 = %62,6   ← BURADA kırılıyor
bütün veride s: dönemi 14.599 · f<1281 olan 143
```
⇒ Kaynak **tam o halka için** eldeyse, **%37'si 1281'den önceki gerçek
başlangıcı yazmış.** Gradyan GERÇEK: `1281-01-01`, büyük ölçüde *"ilk halkanın
BAŞLANGICI bilinmiyor"* değeridir.

🔴 **AMA BU, SEBEBİ YİNE AYIRMIYOR — ve ölçen oturum niçin olduğunu söyledi:**
> *"Bu, bir sınır işaretinin **MEŞRU** kullanımı (`D210`) ve **SAHİP**
> yanlışlığı hakkında bir şey söylemiyor. İki turun ölçtüğü hatalar SAHİP
> hatasıydı (Aydın↔Menteşe, Muhâ↔Resûlî…)."*
```
1281-01-01 yığılması → BAŞLANGIÇ TARİHİ bilinmiyor → sınır işaretinin MEŞRU kullanımı
%39'luk yanlışlık    → SAHİP yanlış                → AYRI kusur sınıfı
```
📌 **Koordinatörün hipotezinin bu ölçümle sınanabilir sanılmasının sebebi tam
bu karışıklıktı:** bir yerin başlangıç tarihini bilmemek, **sahibini yanlış
bilmek değildir.** ⇒ Ayrıştırılamazlık SÜRÜYOR, ama artık NİÇİN sürdüğü de
ölçülmüş durumda.

### §3c HİPOTEZİN TEK DOĞRUDAN KANITI — **14 KESİK DEVİR**
```
14 kayıtta 1281-01-01'de BİTEN dönem, AYNI GÜN BAŞKA SAHİPLE sürüyor:
  11'i Selçuklu→İlhanlı — Kayseri · Tokat · Sivas · Van · Kırşehir · Erzincan
                           Erzurum · Bitlis · Elbistan · Kemah · Bayburt
  Sinop Selçuklu→Pervâne · Çankırı Selçuklu→Çobanoğulları · Ankara Selçuklu→Ahiler
  (kaynaksız 7 · donem_ici 3 · kayıt-kaynaklı 4) — hepsi ANADOLU
```
🔴 **1 Ocak 1281'de böyle bir devir YOK.** ⇒ Sınır işaretinin bir **OLAY gibi
yazıldığı** somut vaka. *"En güçlü ama küçük"*: 14, 1419 değil — ama o 14'ü
**uydurma bir egemenlik devri**, ve 1419'un hiçbirinde olmayan bir şey.
⚠️ Ve bu 14 kırılma `Değişmez 2`nin evreninde: her `d:` kırılması ±30 gün
içinde kronoloji maddesi ister. **Maddeleri varsa, hata BELGELENMİŞ görünüyor
demektir** — ve o, belgelenmemiş bir hatadan kötüdür. Sayım sırada.

### §3d İKİ DÜZELTME — biri ölçenin, biri KOORDİNATÖRÜN
**(a) Ölçenin kendi düzeltmesi:** *"veride hiçbir `s:` dönemi 1281'den önce
başlamıyor"* **YANLIŞ — 143 dönem başlıyor.** Doğru dar cümle: *1419 kaydın
pencere-içi 1281 halkalarının hepsinde `f` tam `1281-01-01`.*
**(b) 🔴 KOORDİNATÖRÜN:** *"kontrol grubunun boşluğu kısmen EVREN SEÇİMİNİN
artefaktı"* açıklaması **İSABETLİ DEĞİL.** Ölçüm **ham `f`** okudu; sıfırın
sebebi pencere kırpması değil **KESİLME** — 1281 öncesi ilk halkalar tam
`1281-01-01`de BİTİYOR ve yeni dönem o gün başlıyor.
📌 *Kırpılmış* ile *kesilmiş* arasındaki fark küçük görünür, hüküm değiştirir:
**kırpılma ÖLÇÜM EVRENİNİN eseridir, kesilme VERİDE YAZILIDIR** — ve ikincisi
düzeltilebilir. Koordinatörün açıklaması kusuru ölçüm aracına atıyordu;
ölçüm onu veriye koydu.

### §3e VE ÖRNEKLEM REDDEDİLDİ — gerekçesi DÖNGÜSELLİK
Ölçen oturum üçüncü bir örneklem **önermedi** ve sebebi sağlam: ayırmak için
*kaynaklı ilk halkaların **sahip**-yanlışlık oranı* da ölçülmeliydi; o ayrı ve
pahalı bir iş, **ve seçim DÖNGÜSEL** — kaynaklı olanları seçip *"kaynak varsa
daha doğru mu"* diye sormak, **seçim ölçütünü sonuç sanmaktır.**
⇒ *Kararı değiştiremeyecek ölçüm yapılmaz* kuralı burada **ölçüm yapmamayı**
emretti. Kuralı koordinatör yazmıştı; işçi onu koordinatöre geri uyguladı.

## §4 Düzeltmenin kendisi ders

Koordinatör (YILDIRIM BAYEZIT) bu dosyanın ilk sürümünü tur 1'den **bir saat
sonra** yazdı ve sebebi **ölçülmüş gibi** ifade etti. Tur 2 hem sayıyı hem
sebebi düzeltti. ⇒ Tam `§11`in birinci ailesi: **ölçüm doğru, çıkarım
yanlış** — ve bu kez yapan koordinatördü.
📌 **Sayı düzeltmesi ucuzdur; ÇIKARIM düzeltmesi bir dersin yarısını
kurtarır.** Bir ölçümden ders yazarken sorulacak soru: *"bu, ölçtüğüm şey mi,
yoksa ölçtüğüm şeyin BİR AÇIKLAMASI mı?"*
⚠️ Ve bir gözlem: ders dosyası **ölçümün aynı gecesinde** yazıldığı için
düzeltilebildi. Bir hafta sonra yazılsaydı, tur 2 ayrı bir iş olarak
görünecek ve iki sayı yan yana yaşayacaktı.

## §5 Üç yöntem notu — ölçümün kendisinden

**① "ÖLÇÜLEMEDİ"nin EŞİĞİ sonucu belirler, ve bunu ÖLÇEN söyledi.**
Her satır bir GÜÇ etiketi taşıdı: `DOĞRUDAN` · `DOLAYLI` · `ARAMA` · `GENEL`
(kaynak okunmadı, egemenliği değişmemiş geç iddialar) · `ÖLÇÜLEMEDİ`.
`GENEL`i ölçülemedi saymak tur 1'de %21,7'yi %37,5 yapıyor — ama **YUKARI
YANLI**, çünkü kolay doğruları paydadan atıyor. Ölçen oturum iki görüşü de
bastı ve yanlılığı **kendi** beyan etti; tek sayı verilseydi hangisinin
politika sayısı olduğu belirsiz kalırdı.

**② TABAKA TANIMI ÖLÇÜMDEN ÖNCE DONAR — ve yeni tur YENİ TOHUM ister.**
Tur 1'de bölge kutuları dört kez düzeltildi (Milos / Kûs / İran kıyısı /
Volga sızıntıları) ve her düzeltme örneklemi DEĞİŞTİRDİ; hiçbir sürümde
kaynak okunmadığı beyan edildi — beyan olmasa bu, **sonucu seçmek** olurdu.
Tur 2'de `bolge()` metin olarak okunup sha256'sıyla dondurldu. Ve **tohum
değişti**: aynı tohum aynı kayıtları verir, o zaman ikinci tur birinciyi
*teyit etmez*, **tekrarlar.**

**③ ÜÇÜNCÜ KOVA: `KONVANSİYONLA DOĞRU`.** Tur 2'de `DOĞRU`ların 19/22'si
`GENEL`, bunların **9'u künye KONVANSİYONUNA** bağlı (`almanya`=Kutsal Roma ·
toplu `racput`/`Nahua`/`Filipin racalıkları` künyeleri · Altın Orda'ya tâbi
Kostroma · Venâd=Travankur). Çıkarılırsa oran **%41.**
⇒ O 9 kayıt *"kaynağa göre doğru"* değil **"konvansiyona göre doğru"**: bir
konvansiyon değişirse sessizce yanlışa dönerler. Onlar da bir borç, yalnız
başka cinsten.

## §6 Yanlışların DESENİ — düzeltmenin yönünü veriyor
> **taşra/kıyı beylikleri merkezî künyeye yazılmış; 1281 anının uç beylikleri
> atlanmış.**
```
Aydın ↔ TDV 1282 Menteşe        Larissa ↔ Tesalya Doukas
Muhâ  ↔ Resûlî Tihâme (Zeydî değil)   Şelif ↔ 1351'e dek Mağrâve
Lâhîcân ↔ 1305'e dek Nâsırvend  Müstegānim ↔ 1511 İspanyol / 1539 Osmanlı
Nazret ↔ Oromo                  Buryat ↔ 1281-1368 Yuan (künye aşımı 87 yıl)
Maumere ↔ künye Timor, yer FLORES   ← bu bir künye hatası DEĞİL:
                                       `§3.5`in "devlet var, YERİ yanlış" sınıfı
```
Bölge yoğunlaşması: Kuzey Afrika kıyısı (Zeyyânî) · Tihâme · Gîlân ·
Ege-Tesalya ucu · Sahra-altı Afrika · Dahlak · Kannur · Bintan · Bantaeng.
Avrupa / Amerika / Rusya / Doğu Asya'nın **geç** iddiaları TEMİZ.

📌 En yakın akrabası
[`HUKUM-KASA-1010 §9.5`](../oturumlar/HUKUM-KASA-1010.md) — *"etiket taşınır,
tanım taşınmaz."* Orada bir SINIF ETİKETİ tanımından koparak yolculuk
ediyordu; burada **bir KOVANIN ADI** içeriğinden kopmuş. Aynı hastalık, bir
ölçek yukarıda.
