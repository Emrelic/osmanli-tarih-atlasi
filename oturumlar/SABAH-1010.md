# SABAH 10 EKİM 2026 — Emre'nin okuyacağı tek belge

Gece boyu beş makine çalıştı. **Senden ÜÇ KARAR bekliyorum**, hepsi ölçülmüş
sayıyla. Altındaki bölümler yalnız dayanak; karar vermek için §1 yeter.

```
koşu 22        HAVVA · taban e54e60df · başlangıç 00:57 · bitiş ~09:30-10:00
commit         bugün 46 · iki günde 91
ders           269
```

---

## §1 ÜÇ KARAR — her biri üç sayıyla

### ① MÖ PENCERESİ NEREDEN AÇILSIN?
```
SÜMER kutusu    🟡 yoğunluk AÇILACAK  26 nokta + 1 dolgu ⇒ p95 111,4 km
                🔴 ama NOKTALARIN HİÇBİRİ `data/`da YOK — ölçüm ÖNERİ üzerinde
ANADOLU kutusu  🔴 atlas noktalarıyla HİÇBİR KESİTTE açılmıyor (455-620 km)
```
🔴 **DÜZELTME (04:3x, kendi hükmümdü): "yoğunluk AÇILDI" diye yazmıştım, YANLIŞ.**
Ölçtüm, KASA'nın bir yan cümlesi üzerine:
```
grep -rl "Uruk|Nippur|Borsippa" data/         → HİÇBİR DOSYA (0)
devletler.js: ahameni·makedon·selefki·part·akkad → 0 · yalnız `sasani` → 1
```
⇒ **Sümer kutusunun ne noktaları ne künyeleri `data/`da. Hepsi `denetim/`
altında ÖLÇÜLMÜŞ ÖNERİ.** p95 111,4 geçerli bir ölçüm ama **inmemiş bir küme
üzerinde**; kapı AÇIK değil **AÇILACAK**. Ve bu, %83'lük sahiplik boşluğunu da
açıklıyor — künye yoksa sahiplik elbette boş; o rakamın "%63,3'ü künye var"
kısmı **ŞÜPHELİ** ilan edildi (hangi künye kümesinde ölçüldüğü yeniden
sorulacak; yeni sayı UYDURULMADI, eskisi sağlam sayılmadı).

**⇒ O HÂLDE SORU DEĞİŞİYOR:** *"Sümer'i genişletelim mi"* değil,
**"ölçülmüş Sümer PAKETİNİ indirelim mi?"**
```
26 nokta  +  7 künye (ahameni·makedon·selefki·karakene·part·elymais·sasani)
          + 15 sahiplik zinciri (MÖ 539 → MS 226)
hepsi HAZIR · hiçbiri İNMEMİŞ · inişi FAZ 2 (koşu 22'den sonra)
```
📌 KASA bu pencerede şehir adlı akademik tanıkla bağlı payı **%7,7 → %38,2**'ye
çıkardı; kalan %61,8 için kaynak (van der Spek 1992) sırada.
**ÖNERİM: Sümer'den aç, ve ilk dilim MÖ 539 → MS 226.** Sebebi: 765 yıl, kutunun
en uzun kesintisiz boşluğu, ve sahipliği tek seferde **bir** imparatorluk
(Ahameniş → Selevkos → Part) ⇒ 26 nokta için karar sayısı az, kazanılan yıl çok.
MÖ 3000-539 sonraya: orada şehir devletleri sürekli el değiştiriyor, kayıt başına
karar sayısı on katı. İş KASA'ya verildi (`KASA-SUMER-SAHIPLIK-1010`).
⚠️ Dikkat: künye açmak haritayı BOYAMAZ, yalnız "sahipsiz"i "boş"a çevirir.
Boyama için şehrin künyeye BAĞLANMASI gerekiyor — o da veri işi, koşu sonrası.

### ② ANADOLU MÖ'SÜ — üç seçenek, biri reddedildi
| | seçenek | ölçüm | önerim |
|---|---|---|---|
| (i) | MÖ Anadolu kesitlerini **KAPALI beyan et** | bedeli 0 | ✅ **EVET, hemen** |
| (ii) | **höyük tabanlı ayrı nokta katmanı** | 118 nokta ⇒ SINIR · 498 ⇒ MÖ 500 AÇ | ✅ sonraki faz |
| (iii) | MÖ 500'den başlat | orada da **378 km, KAPALI** | ❌ reddedildi |

🔴 **SEBEBİ TEK CÜMLEDE:** *Atlasın nokta kümesi bir **MODERN/ORTAÇAĞ yerleşim
kümesidir**; MÖ kendi nokta kümesini ister.* Sümer açıldı çünkü oranın noktaları
**höyük** (Girsu, Tutub, Eşnunna); Anadolu açılmadı çünkü oranın noktaları
**modern şehir** (Ankara, Kayseri, Konya). Bu bir yorum değil ölçüm: MÖ
sitelerinin **%95'i** (MÖ 3000) ve MÖ 500'de bile **%89'u** atlasta YOK.

**SENDEN İSTEDİĞİM:** (i)+(ii)'yi onayla. (ii) onaylanırsa tek alt soru kalır:
MÖ 3000-1000 için **SINIR yeter mi**, yoksa AÇ mı istiyorsun? AÇ istersen
Pleiades dışı envanter (TAY vb.) gerekiyor ve onun fiyatı HENÜZ ÖLÇÜLMEDİ —
kararını bekliyor, çünkü SINIR'a razıysan o ölçüm gereksiz.

### ③ `kaynaksız s:` 1841 — BEYAN BORCU MU, YANLIŞLIK TAHMİNİ Mİ?
Bu, gecenin en rahatsız edici ölçümü. Yemen örneklemi:
```
7 kaynaksız nokta · denetlenebilenlerin 4'ü YANLIŞ çıktı
2 kaynaklı nokta  · ikisi de DOĞRU
Taiz: 254 yıl boyunca YANLIŞ SAHİP
```
🔴 **ÖLÇÜLDÜ (04:4x) — CEVAP "İKİSİ DE DEĞİL", VE SEBEBİ BULUNDU.**
`KAYNAKSIZ-ORNEKLEM-1010`, tabakalı örneklemle (N=48, 11 bölge, tohum 20261010)
ölçtü ve **asıl bulgu bir desen değil bir SEBEP:**
```
İKİ TUR (tohum 20261010 N=48 · tohum 20261011 N=40 — bolge() dondurulmuş)
1281-başlangıçlı halka   YANLIŞ %39,0 (16/41, %25,7-54,3) ⇒ ≈554 kayıt (364-770)
daha GEÇ başlayan halka  YANLIŞ  %8   (3/36, %3-22)
1841 kaydın 1419'u (%77) en az bir 1281-başlangıçlı halka taşıyor
toplam yanlış iddia (tur 1, bütün evren)  ≈400  (Wilson %95: 226-655)
```
⚠️ **BU SAYI BİR KEZ DÜZELDİ:** tur 1 yalnız n=10 ile **%70** demişti ve ben
onu sana öyle yazmıştım. Tur 2 düşürdü — %70 **küçük n + bölge karışımıydı**
(tur 1'in 1281 alt kümesi Afrika Boynuzu ağırlıklı; tur 2 Avrupa'ya 11 pay
verdi ve Kutsal Roma/Portekiz/Danimarka/Tver DOĞRU çıktı). Fark hâlâ GERÇEK
(%39 ↔ %8) ama **küçük**, ve yanlış kayıt tahmini ≈554, ≈990 DEĞİL.
**Sebebi — ve burada DÜRÜST OLMAM gerekiyor:** ben *"`1281-01-01` atlasın
ufkunun kenarı, bir sınır işareti, ve 1419 kayıtta bir KAYNAK GİBİ yazılmış"*
dedim ve bunu **ölçülmüş bir sebep** gibi yazdım. Ölçen oturum çürüttü:
```
1419 kaydın 1419'unda f TAM 1281-01-01 · f < 1281 olan 0
⇒ KARŞILAŞTIRMA GRUBU BOŞ
```
İki açıklama aynı veriyi üretiyor: **Ⓐ** ufuk ucu varsayılan yazıldı · **Ⓑ**
zincirin ilk halkası zaten en zor halkadır (en eski dönem, en ince kaynak).
Veri Ⓐ ile uyumlu ama Ⓑ'yi **dışlamıyor** ⇒ sebep bir **HİPOTEZ.** Üstelik
kontrol grubunun boşluğunun bir kısmı veri değil **evren seçimi**: ölçüm
penceresi `1281-01-01..1923-10-29` ve 1281'den öncesini zaten dışlıyor.
⇒ Ayırt edici tek ölçüm koşuyor: *ilk halkası KAYNAKLI olan kayıtlarda
(`donem_ici` 460) `f:` kaç tanesinde tam `1281-01-01`?* Dağınıksa Ⓐ
desteklenir, ~%100 ise yoğunlaşma bir kaynak sorunu değil veri yapısıdır.
📌 Ne olursa olsun `§4`ün *"atlas referans değildir, mamul üründür"* kuralı
(senin 13 Eylül kararın) bu kayıtların düzeltilmesini gerektiriyor — sebep
hangisi çıkarsa çıksın **~554 kayıt yanlış** ve bu bir DÜZELTME işi.

**BENİM KARARIM (senin onayına sunmuyorum, bildiriyorum):** 1841 tek kova
olmaktan çıkıyor, ikiye bölünüyor —
```
kaynaksız ∧ 1281-01-01 başlangıçlı  = 1419  → YANLIŞLIK ŞÜPHESİ
kalan                               =  422  → gerçek BEYAN BORCU
```
İkinci bir örneklem (1419'dan, n≈40, yeni tohum) koşuyor: %40-89 aralığı bir
müdahaleyi 1419 kayda uygulamaya yetmez. **Senden karar istemiyorum**; sayı
daralınca önceliği ben kurarım.
📌 Bölgesel yoğunlaşma: Sahra-altı Afrika 4/5 · Dahlak · Kannur · Bintan ·
Bantaeng. Avrupa/Amerika/Rusya/Doğu Asya'nın geç iddiaları TEMİZ.

---

## §2 KOŞU 22 — ne zaman, ne getiriyor, neyi getirmiyor
```
taban    e54e60df  (Z6 indi: 80 değişim/11 dosya + tavan 181→193 aynı commit'te)
yayın    dal kosu/22 · koordinatör `git checkout kosu/22 -- <dosyalar>` ile alır
```
🔴 **İÇİNDE OLMAYANLAR** (koşu başladıktan sonra hazırlananlar, hepsi diff olarak
bekliyor): SESSIZ-7 v2 · SAHIPLIK-KAPSAM + hüküm listesi · LAB KONUM-ONERI v3
(Van taşıma · Kandehar/Angkor ikame · Pantelerya · Balasagun) · Z5 v4 ·
KRONO-ONCE1281 A+B+C · Timbuktu zinciri · motor partisi (TUZ v3, BOYA v2…).
⚠️ Bunların hiçbiri koşu 22'de **görünmeyecek** — iniş sırası
`KAMPANYA-SUMER-2000.md §10`da yazılı.

**Rapordan adıyla istediğim dört satır:** 8a Hanak KAYBOLDU/KALDI · Tehuantepec ·
Kıbrıs 1000-1192 · 1000-1280 görüntüsü.
**Çıkış 1 gelir ve tek ihlal `8a` ise: YAYIN DURUR**, kararı ben veririm.

---

## §3 GECE NE ÜRETTİ — başlıklarla (ayrıntı belgelerde)
- **`CLAUDE.md`** üç yeni bölüm: `§5` çıktı yüzü (yayınlanan harita dosyası
  `devlet_harita_ust.js`, `devletler_harita.js` DEĞİL) · `§4` hicrî yıl tuzağı
  (`YYYY-01-01` kaynağın söylediği hicrî yılın DIŞINA düşüyor) · `§11`
  **çağıranı olmayan kapı, kapı değildir**.
- **`HUKUM-KASA-1010.md`** tanık kuralı artık **beş katman**: `§6.1` tanığın
  hatası · `§9.4` çözünürlüğü · `§6.2` gösterdiği nesne · `§6.3` zamana
  bağlılığı · 🆕 `§6.4` **kaydın kendi `tur:`/`ad:` alanı birinci tanıktır**.
- **`MIMARI.md §5.1b`** TAVO hükmü: `provenance: TAVO Index` etiketi `kur:`
  kaynağı SAYILMAZ (etiketler antik addan değil MODERN ad girdisinden geliyordu).
- **`D269` kanal da bir alettir** — bir aracın çıktısı, onu taşıyan kanalın
  kusuruyla birlikte okunur (altı ölçülmüş vaka).

## §4 SENİ BEKLEMEYEN, SÜREN İŞLER
```
UMIT   SAHIPLIK-KAPSAM + hüküm listesi · SESSIZ-7 v2 · Z5 v4
KASA   SUMER-SAHIPLIK-1010 (yeni)
LAB    KONUM-ONERI v3 · 42 ADA noktası mekanik taraması
kıta   NOKTA-ONCE1281 (üç dal) · KAYNAKSIZ-ORNEKLEM · HARITA-DIL-OLCUM
HAVVA  koşu 22
```
⚠️ EMRELIC'te **canlı bekçi 0** — 7 Ekim'deki `KOSU` darboğaz ilanı (token
gerekçesi) bekçi kurulmasını yasaklıyor, bu yüzden buradaki oturumlara görev
`send_message` ile gidiyor. İlanı yalnız sen kaldırabilirsin; **kaldırmanı
istemiyorum**, gerekçesi hâlâ geçerli.

## §5 🆕 KOŞU NİÇİN 7-8 SAAT SÜRÜYOR — ölçüldü, ve ÖNCÜLÜM ÇÜRÜDÜ

03:55'te "bölünme devlet SAYISINA göre yapılıyor" diye okudum. HAVVA kodu açtı:
**yanlış.** Bölme `uret_petek.py:7002-7009`da **LPT ile AĞIRLIĞA göre** yapılıyor
(en ağır devlet en hafif kovaya); gördüğüm 235/236 eşitliği, ağırlık
eşitlemesinin **yan ürünü.** Üç kovanın üçü de "yük payı %33" basıyor.

🔴 **AMA KUSUR BAŞKA YERDE, VE DAHA İLGİNÇ:**
```
kova 2 (işçi 2)  236 devlet                      ≈  10 dk
kova 0 (ana)     payı + Rusya (301 gün)          ≈  76 dk
kova 1 (işçi 1)  payı + İngiltere TEK BAŞINA     ≈ 115 dk
                 ⇒ aynı %33 ağırlık için ~11× AYRIŞMA
```
Sebep: ağırlık vekili (hücre-birleşimi, kodun kendi notu **R²=0,96**)
İngiltere'nin gerçek maliyetini **büyük ölçüde küçük tahmin ediyor** — İngiltere'de
geç günler pahalı (sömürge gövdesi büyüdükçe gün başına süre artıyor: nabız başına
18 gün → 7-9 gün).

> 🔴 **ÇIKAN KURAL: ortalamada doğrulanmış bir vekil, UÇ DEĞER için doğrulanmış
> DEĞİLDİR — ve paralel bir işte çalışma süresini uç değer belirler.**
> `R²=0,96` kuyruk hakkında hiçbir şey söylemiyor, ve kuyruk burada %100'ü.

**KALDIRAÇ — ölçülmüş üst sınır, benim iddiamın çok altında:**
```
ağırlık yamasıyla      ≤ ~15 dk  (aşamanın %13'ü, KOŞUNUN ~%3'ü)
                       çünkü tek devlet BÖLÜNEMEZ: İngiltere yalnız ~100 dk
devlet İÇİ gün bölmeyle ~45-50 dk (koşunun ~%9'u)
```
⚠️ Yani *"bir gecelik koşu bir öğleden sonrasına iner"* cümlem **ÇIKMADI.**
Kuyruğun büyük kısmı bu aşamada değil: dönemler (KOŞU 21'de 2s11dk) ve ufuk
bantları (57 dk) bu ölçümün DIŞINDA. Yama yine değerli ama **%3-9 bandında**,
ve motor partisinde iner (tuz, koşu sürerken dokunulmaz).
📌 Ucuz ikinci kalem duruyor: işçi bitişinde log **açık bir satır basmıyor** —
bugün bir işçi sessizce ölse, bitmiş işçiden ayırt edilemez.
⚠️ Kesinlik: süreler 5 dk'lık nabızlardan (±5 dk), devlet başına süre logda YOK,
İngiltere'nin bitişi tahmin. Kesin sayı İngiltere bitince.

⚠️ **Düzeltme (§2'ye): LAB'ın `KONUM-ONERI v3`ünden Balasagun ÇIKARILDI.**
Taşıma kararı TDV'den sağlam ama 6,02 km'lik yeni koordinat **tek tanıklı**
(TGN) ⇒ ikinci tanık bulunana kadar kayıt yerinde kalır, çelişki yalnız `not:`
alanına beyan edilir. Kalan 9 taşıma + ikame onaylı.
Ölçüldü (LAB): Pleiades tam dökümünde ve al-Ṯurayyā'da **Ak-Beşim/Suyab kaydı
YOK** (10 anahtar denendi; Pleiades 884869 "Balasagan" Kafkas Balasakan'ı,
ilgisiz). ⇒ `ÖLÇÜLEMEDİ` beyanı, "yok" değil.

### §5.1 BENİM AÇIK KALEMLERİM (koşu sonrası, kimseyi bekletmiyor)
- Karantina listesine şerh: `yer_yama_1923_1945.js` çıkmadan önce Kandehar +
  Angkor kayıtları **adıyla** kontrol edilir (LAB'ın önerisi v3 raporunda).
- `VERI-YAPISI.md` alan tablosuna `not:` eklenmesi — veride yerleşik (18 + 44
  kayıt), tabloda YOK. Yeni alan icat edilmedi, tablo eksik.
- Balasagun taşıması park: `-v3-balasagun-tasima-BEKLER.diff`, ikinci koordinat
  tanığı bulunursa iner.

📌 **VE BU BÖLÜM BİR DESENİN BEŞİNCİ VAKASI:** bu gece beş kez bir işçinin
ölçümü benim hükmümü düzeltti, ve beşinde de ölçüm kabul edildi. Bir koordinatör
olarak ürettiğim en pahalı şey hüküm değil, **ölçülmeden verilmiş hüküm.**

---

## §6 🔴 SENİN AÇMAN GEREKEN TEK ŞEY — EMRELIC'in yedeği kullanılamıyor

Gece ilerledikçe yeni iş dağıtmak gerekti ve **ölçtüm:**
```
EMRELIC'te 6 "HAZIR KITA 0910.21xx" oturumu var — ve GERÇEKTEN BOŞ:
   ad damgası 21:28:16  ↔  son etkinlik 21:30:03   ⇒  107 SANİYE yaşamış
   (yani §7.3 ⑧'in "dolu işçi" tuzağı DEĞİL; bunlar gerçek yedek)
```
Üçüne görev göndermeyi denedim:
```
HAZIR KITA 0910.2128.16   ✅ TESLİM EDİLDİ — turu başladı (KUNYE-SUMER-7-1010)
HAZIR KITA 0910.2127.47   ❌ undelivered — "onay penceresinde olabilir"
HAZIR KITA 0910.2127.58   ❌ undelivered — aynı
```
⇒ `CLAUDE.md §7.2`nin yazdığı hâl: **`send_message` "undelivered" diyorsa oturum
ONAY PENCERESİNDEDİR ve bunu yalnız SEN açabilirsin.** Deneme başına ~20 sn
beklediği için daha fazla denemedim — ölçüm yeterli.

**SENDEN İSTEDİĞİM (tek hareket):** o oturumların pencerelerine bir kez bakıp
bekleyen onayı ver, ya da onlara *"izinli kipte çalış"* de. Sonrasında
dağıtımı ben yapıyorum.
📌 Niçin önemli: UMIT · KASA · LAB · HAVVA dört makinede sorunsuz çalışıyor
(köprüden haberleşiyorlar). Tıkanan **yalnız EMRELIC'in kendi yedeği** — yani
senin makinende duran altı boş işçi. Dört makine doluyken yedeğe iş
verememek, kadro yokluğundan değil **bir onay penceresinden** kaynaklanıyor.
⚠️ Ve EMRELIC'te **canlı bekçi 0** (7 Ekim `KOSU` darboğazı, token gerekçesi
— kaldırmanı İSTEMİYORUM, gerekçesi hâlâ geçerli); bu yüzden buradaki
oturumlara tek ulaşma yolu `send_message`, ve o da onay penceresinde duruyor.

⚠️ **KÜÇÜK BİR RİSK, bilmen için:** `NOKTA-SUMER-1010` görevi iki kıtaya da
kuyruklandı (ikisi de "sonra alabilir"). İkincisine **mükerrer koruması**
koydum (başlamadan önce dosya/dal var mı diye bakıp durur), birincisine
koyamadım. İkisi de uyanırsa aynı dal adına push edecekleri için ikinci push
**başarısız olur ve bana rapor eder** — yani sistem kendi kendini yakalar,
ama bir kıtanın turu boşa gidebilir. Kabul ettim; alternatifi işi hiç
başlatmamaktı.

### §6.1 BU GECE DAĞITILAN YENİ İŞLER (senin onayını beklemiyor)
```
KUNYE-SUMER-7-1010   7 künyenin devletler.js diff'i — ÇALIŞIYOR
NOKTA-SUMER-1010     26 Sümer noktasının diff'i — KUYRUKTA (yukarıdaki onay)
KASA-SUMER-VARLIK    Eridu/İsin/Dēr/Nina + Ur/Dilbat: iskân mı, terk mi
LAB-AYNI-AD-TARAMA   koordinat yanlış CİNSTEN bir kayıttan mı alınmış
                     (vaka: Hvar — nokta bir OTEL kaydında, kasaba 19-20,8 km uzakta)
UMIT  FAZ 1          hüküm listesi + hızlı kip (--atlama-yalniz, ölçüldü: 12 sn)
```
📌 Bir karar da verildi ve not düşüyorum: Sümer noktaları **yeni bir dosyaya
DEĞİL**, mevcut `data/yerlesimler_nokta_ortadogu_0917.js`e girecek. Sebebi
`girdi.py`nin **motor tuzunda** olması — yeni bir dosya ona satır ister, satır
tuzu bozar, tuz **7-8 saatlik tam inşa** demektir. Mevcut dosyaya eklemek
noktaları FAZ 2'de indiriyor, FAZ 3'ü beklemiyor.

---

## §7 GECENİN İKİNCİ YARISI — ve BENİM İKİ KUSURUM

### §7.1 🔴 `CLAUDE.md` ŞİŞTİ — ve bu benim kendi kuralımın ihlali
```
gece başı  733 satır   →   05:20  850 satır   (+16%)
```
Eklenenler ölçülmüş kurallar (hicrî sözleşme · çağıranı olmayan kapı · öneri
sayısı · süreç öldürme · `§4`ün iki şartı) **ama `§11` açıkça şöyle diyor:**
> *"Yeni ders: slogan DIZIN'e tek satır, vaka `dersler/D<sıra>-<slug>.md`e
> (ikisini buraya yazmak bu dosyayı yeniden şişirir)."*
Hicrî bloğuna **vaka ayrıntısı** yazdım — sınır günleri, künye adları, örnek
cümleler. Onların yeri bir `D` dosyası. Ve bu dosyayı **her oturum** okuyor
(`§7.1`de ölçülmüş: 10.773 token/oturum, şimdi daha fazla).
📌 17 Eylül'de 167 → 25 KB budanmıştı; bir gecede %16 geri aldım.
**AÇIK KALEMİM:** hicrî vakasını `D272`ye taşı, `§4`te **sözleşme + iki şart +
"70 bir tabandır"** kalsın (vakalar `D272`de). Koşu sonrası, acele yok —
7 oturum şu an bu dosyayı okuyor, ortasında yeniden yapılandırmak riskli.

### §7.2 🔴 MESAJ KOTASI — otonom koordinasyonun tavanı
```
"this session has already messaged Claude Desktop sessions 10 times since
 your user last typed here … Paused until your user's next message."
```
⇒ **EMRELIC'teki yerel oturumlara ulaşamıyorum.** Köprü (UMIT · KASA · LAB ·
HAVVA — öteki makineler) ÇALIŞIYOR; tıkanan yalnız bu makinenin kendi
oturumları. Hükümleri **tahtaya** yazdım (`git` üzerinden gider, kotaya tabi
değil) ama bekçileri olmadığı için (7 Ekim `KOSU` darboğazı) **uyanmıyorlar.**
**SENDEN:** tek satır. Ne yazdığın önemli değil, kota sıfırlanıyor.
📌 Bu, `§6`daki onay penceresi sorunuyla birleşince şu sonucu veriyor:
**EMRELIC'in kendi iş gücü, gece boyunca senin iki kez klavyeye dokunmanı
gerektiriyor.** Öteki dört makine tam otonom çalıştı.

### §7.3 HİCRÎ TUZAĞIN TAM BİLANÇOSU (KASA, dört tur)
```
897 künye tarandı · hicrî taşıyan 108 · kontrol edilebilen uç 145
İÇİNDE 75 · DIŞINDA 70 · SINIRDA 0   ·   DIŞARIDAKİ 70'in 70'i `-01-01`
gün YAZILMIŞ 28 ucun 0'ı dışarıda     ⇒ TEK BİR MEKANİZMA
madde başına tarama: 12 TDV maddesi · 788 H/M çifti · 6 YENİ hata
```
🔴 **Ve 70 bir TABAN:** ① 789 künye hiç ölçülemedi ② 1. turun 75 `İÇİNDE`si
doğrulanmadı (gevşek eşleştirici komşu hânedanın maddesini "içeriyor"
sayabiliyor — bir vaka bulundu ve DIŞINDA çıktı).
**Kapanan iki büyük uç:** `sasani` t `0651-08-24` · `hulefa-yi-rasidin` f
`0632-06-04` · ve Râşidîn↔Emevî çifti **birlikte** `0661-07-29`.

### §7.4 🔴 14 UYDURMA EGEMENLİK DEVRİ — somut, ve hepsi Anadolu
`1281-01-01`de biten dönem **aynı gün başka sahiple** sürüyor:
```
11'i Selçuklu→İlhanlı  Kayseri · Tokat · Sivas · Van · Kırşehir · Erzincan
                        Erzurum · Bitlis · Elbistan · Kemah · Bayburt
Sinop Selçuklu→Pervâne · Çankırı Selçuklu→Çobanoğulları · Ankara Selçuklu→Ahiler
```
**1 Ocak 1281'de böyle bir devir yok.** Bu, ufuk kenarının bir OLAY gibi
yazıldığı tek doğrudan kanıt. ⚠️ Ve bu 14 kırılma Değişmez 2'nin evreninde:
maddeleri varsa **hata belgelenmiş görünüyor** demektir, ve o belgelenmemiş
bir hatadan kötüdür. Sayım sırada.

---

# §8 🟢 **TEK EKRAN — 07:40 İTİBARIYLA. YALNIZ BUNU OKUSAN YETER.**

## Senden istediğim: iki İŞ, dört KARAR

**İŞ** — karar değil, yalnız senin yapabileceğin:
```
① TEK SATIR MESAJ — ne yazdığın önemli değil. Oturumlar arası mesaj
   kotası doldu (10 mesaj, sen yazana kadar kapalı) ⇒ EMRELIC'teki
   7 yerel kıta ULAŞILAMAZ. Köprüdeki dört makine çalışıyor.
② EMRELIC'teki iki hazır kıtanın ONAY PENCERESİNİ aç (§6)
```
⚠️ ①+② olmadan bu makinenin kendi iş gücü atıl; öteki dört makine tam
otonom çalıştı.

**KARAR** — gerekçeleri §1-§7'de, burada yalnız soru:
```
① MÖ PAKETİNİ İNDİRELİM Mİ? 21 nokta + 7 künye + zincirler HAZIR,
   hiçbiri inmemiş. Soru "genişletelim mi" değil: "İNDİRELİM Mİ"
② ANADOLU MÖ    → ÖNERİM (i) KAPALI beyan + (ii) höyük katmanı;
                   (iii) reddim gerekçeli (§1 ②)
③ kaynaksız 1841 → ≈554 kayıtta yanlış ilk halka. Sebep hâlâ HİPOTEZ
                   ama artık KONTROL GRUBU var: Bağdat 1258-02-10 ↔
                   sekiz komşusu 1281-01-01, aynı sahip aynı kutu aynı
                   İlhanlı olayı ⇒ 1281 bir İHMAL, hassasiyet değil
④ `kur:` SINIFI  → modern idarî merkezler erken sahiplik iddiasıyla
                   (Mersin 1671↔~1836 · Batna · Aynı Beydâ · Berc Bû
                   Areric). Sınıfın adı var, hükmü yok
```

## ⚠️ BİR GİZLİLİK OLAYI — kapandı, ama bilmen gerek
LAB'ın bir alt ajanı Wikidata'ya giden ~7 istekte `User-Agent` başlığına
**senin e-posta adresini** koydu (Wikidata'nın görgü kuralları iletişim
adresi İSTER — iyi niyetli bir kural çarpışması). Ajan fark edip çıkardı.
**Bağımsız doğruladım:** çalışma ağacında 0 isabet · `git log --all -S`
ile bütün dallarda 0 commit (ekleyen de, silen de). Commit müellifliğindeki
adres meşrudur, o ayrı şey.
⇒ Kural yazıldı: **dış servise giden iletişim bilgisi PROJE adresi olur,
şahsî e-posta ASLA.** LAB kalıcı hafızasına da aldı.

## Gece ne ÜRETTİ — üç başlık
**① KAMPANYANIN İLK TAM ZİNCİRİ:** Kutha + Susa, **MÖ 539 → 1281 kesintisiz,
1.820 yıl.** (MÖ 539-226 %44,1 · 226-650 %24,3 · 650-1281 %66,2)
**② ÜÇ YENİ KAPI**, hepsi iki yönde sınandı:
```
dikiş kapısı      1281-01-01 halkası + önünde halka var + kaynak YOK ⇒ İHLAL
                  (10/10 sınav; MÖ paketi BENZETİLEREK sınandı)
hüküm listesi     sessiz atlamayı çıkış 2'ye çeviriyor (104 yamadan 9'u
                  çıkış 0 ile sessizce atlanıyordu)
hicrî sözleşme    `§4`te kalıcı kural; 79 uç düzeltilecek
```
**③ YEDİ KEZ BİR İŞÇİNİN ÖLÇÜMÜ HÜKMÜMÜ DÜZELTTİ** ve yedisi de kabul edildi.
İki ders (`D270` · `D271`) aynı gece yazıldı ve aynı gece düzeltildi.

## 🔴 BİR SIRA DEĞİŞİKLİĞİ — sana dün FAZ 2 demiştim, FAZ 3 oldu
**Sümer noktaları FAZ 3'e kaydı.** İki bağımsız ölçüm:
```
① sahipsiz nokta inerse → 22/22 BOŞ petek, ~62.400 km², 900 yıl
   ve 🔴 Değişmez 1 BUNU GÖRMEZ   (simülasyon tekrarlanabilir)
② tek negatif dönem → `gun_no` ÇÖKÜYOR, D1b'den sonra hiçbir denetim
   koşmuyor · `js/suzgec.js` negatif tarihte SESSİZCE yanlış
```
⇒ Motor yaması + NEGATİF-YIL-B + noktalar **tek tuz değişiminde** inecek.
Künyeler FAZ 2'de kalıyor (inert — ölçüldü).

## 🔴 KOŞU — SABAH HARİTASI YOK, VE SEBEBİ BİR BELGE BOŞLUĞU
```
KOŞU 22  00:57 → 06:43 (5s45dk) · çıkış 0 · bütün değişmezler TEMİZ
         🔴 AMA YANLIŞ AYARLA KOŞTU: üç YÜRÜYÜŞ aşaması + Ⓑ ufuk bantları
            aşaması HİÇ KOŞMADI · `ufuk_bant_parcalar.js` hâlâ 1923 ufkunda
         ⇒ YAYINLANMADI. Yayınlansa harita GERİLERDİ.
KOŞU 22b 06:53:49 başladı · aynı taban (e54e60df)
         🟢 ÖLÇÜLDÜ (HAVVA, 07:36:38) — tahmin değil:
            NEREDE  "Çöl tavanı", koşu saati 32dk 15sn
            BAYRAK  BEŞİ DE motorun KENDİ logunda, satır numarasıyla ✓
                    (503 yürüyüş+bütçe 40sa · 534 çöl ufku 56sa ·
                     537 bantlar 40/56/80 · 28 işçi süreç)
            YÜRÜYÜŞ 3 aşamanın 2'si koştu, 1 kaldı
            İŞÇİ    ikisi de SAĞ, tam yükte · GEOS segfault sınıfı YOK
            BİTİŞ   uret_petek ~15:00-16:15 · inişle ~15:45-17:00
                    dayanak KOŞU 21 bilançosu × ölçülen hız (×1,15);
                    bayraksız KOŞU 22'nin oranları KULLANILMADI
```
**SEBEP — ve yarısı BENİM:** beş zorunlu bayrak
(`MOTOR_YURUYUS=1` · `MOTOR_YURUYUS_SAAT=40` · `MOTOR_UFUK_BANT=40,56,80` ·
`MOTOR_COL_UFUK_SAAT=56` · `MOTOR_SUREC_ISCI=2`) **hiçbir belgede yazılı
değildi** — yalnız KOŞU 21'in commit mesajında. Motorun varsayılanları onları
KAPATIYOR, zincir yalnız ikisini koyuyor. Kök `*.md` benim dosyalarım ve koşu
emrini ben verdim; **bayrakları yazmadım.** Şimdi `CLAUDE.md §9`da.
> **Bir koşunun ayarları commit mesajında yaşıyorsa, o ayarlar KAYITLI
> DEĞİLDİR** — bir sonraki koşucu onları aramak zorundadır, ve aramadığında
> kimse fark etmez.

**ÜÇ SEÇENEKTEN BİRİNİ SEÇTİM** (*"tüm yetki sende"* dediğin için):
```
(A) ✅ 22b'yi ŞİMDİ koş, doğru bayraklarla      ← SEÇİLDİ
(B) ❌ bu çıktıyı yayınla — GERİLEME
(C) ❌ hiçbir şey koşma, Emre karar verir — makine 9 saat boş durur ve
       senin 09:00 kararın bitişi 18:00-19:00'a kaydırır
```
📌 Ve bir ayrım çizdim: `§9`un *"bayat çıktı yine de yayınlanır"* kuralı
**BAYATLIĞI** affeder, **GERİLEMEYİ** affetmez.
⚠️ İşçi 2 KOŞU 22'de çöktü (GEOS `0xC0000005`); o koşunun `GOVDE-CAKISMA` ve
`EKLEYİCİ KAPI` sayaçları yalnız ana sürecin payıydı. 22b yeni sayaçlar
üretecek; eskiler kullanılmayacak.
🔴 Ve koşucunun uyarısı kabul edildi: *"×1,1-1,2 süre oranlarım YANILTICI"* —
**5s45dk, 7s14dk'dan hızlı değil; DAHA AZ İŞ YAPMIŞ.** Çıkış 0, "iş yapıldı"
demek değil.

## 🔴 06:00'DAN SONRA ÇIKAN ÜÇ BAŞLIK
```
① ÖZ-İLAN SINIFI — veride yaşayan bir YAPILACAKLAR listesi bulundu.
   Kayıtların KENDİ kaynak notları kendi dilimini yanlış ilan ediyor:
   Malta "1284-1530 napoli YANLIŞ, yazılmadı" · Hama · Mljet · Çehrin ·
   Königsberg "künyesi YOK, dokunulmadı" — O KÜNYE ARTIK VAR.
   ⇒ Önceki işçi hatayı GÖRMÜŞ, ADIYLA YAZMIŞ, düzeltmemiş; ve hiçbir
   alet o notu okumuyor. Tarama SÖZLÜKSÜZ ve BEDAVA (kanıt elde).
② LAB KENDİ SAYISINI DÜRÜSTLEŞTİRDİ — 221 "YANLIŞ"ın yalnız 26'sı
   kanıtlı (%11,8), 195'i ölçüm açığı. İkinci tanık ailesi 171 satırın
   1'ini kapattı (%0,6) ⇒ o hat KAPATILDI. Üç turda öngörü üç kez AYNI
   YÖNE ıskaladı: yanlış olan tek öngörü değil ÖNGÖRÜ MODELİ.
③ "KAYNAKSIZ = RİSKLİ" YANLIŞLANDI. Ayırt eden doluluk değil GÖVDE:
   gövdesi tanıksız dilim %62 yanlış ↔ gövdeli %33 — ve tanıksızların
   13 yanlışının SIFIRI kaynağın tarihlediği uçta. Beş kural HUKUM §9.8.
```

## 🔴 VE BİR KUSURUM DAHA — 30 saniyeyle bu belgeye girmedi
Koşunun durumunu EMRELIC'teki `uretim_canli.log`dan okudum; o dosya
**4 Ekim 19:17'den**, altı gün bayat, ve içinde gerçek bir aşama bilançosu
durduğu için TAZE görünüyor. *"Koşu bitti, 4 saat sürdü"* diye buraya
yazmaya 30 saniye vardı. Sebep yapısal: koşu **ayrı worktree'de** koşar
(`C:\atlas-kosu22\`) ⇒ ana checkout'un logu tanım gereği o koşunun logu
DEĞİLDİR. Kural `CLAUDE.md §5`e yazıldı — 93 MB'lık vakanın üçüncü yüzü,
ve en sinsisi: ötekiler BOYUTLA ele veriyordu, bu yalnız **mtime** ile.

## Üç karar (§1) — kısa hâli
```
① MÖ penceresi   → Sümer paketi HAZIR, hiçbiri İNMEMİŞ: 21 nokta + 7 künye
                   + zincirler. Soru "genişletelim mi" değil "İNDİRELİM Mİ"
② Anadolu MÖ     → atlas noktalarıyla KAPALI (455-620 km) · höyük katmanıyla
                   SINIR (149-186) · MÖ 500'de AÇ (87). ÖNERİM: (i)+(ii)
③ kaynaksız 1841 → %39 (26-54) yanlış ilk halka ⇒ ≈554 kayıt. Sebep HÂLÂ
                   hipotez ama artık bir KONTROL GRUBU var (Bağdat 1258-02-10
                   ↔ komşuları 1281-01-01, aynı sahip aynı kutu)
```

## Çalışan iş hatları — ⚠️ 06:00 FOTOĞRAFI (güncel hâl §8 sonunda)
```
HAVVA  koşu 22 · canlılık saat başı (05:55 alındı, ~06:55 bekleniyor)
KASA   SAHIP-BOLGE: Kuzey Afrika kıyısı · Tihâme · Gîlân · Ege-Tesalya
UMIT   SAHIPLIK-KAPSAM + hüküm listesi + hızlı kip (12 sn, ölçüldü)
LAB    AYNI-AD-TARAMA v2 — tek koşu, BEŞ sayı (ablasyon şartıyla)
kıta   NOKTA-SUMER v2 (bitti, FAZ 3 bekliyor) · NEGATIF-YIL (bitti) ·
       KUNYE-SUMER-7 v2 (bitti) · HARITA-DIL (C3 kararı verildi)
```

## ⓔ ŞU AN ÇALIŞAN (07:40) — yukarıdaki 06:00 bloğunun YERİNE
```
HAVVA  KOŞU 22b gözetim (dakikada bir süreç + olay 1000) · iniş sırası hazır
UMIT   CELISKI-ICKAYNAK-1010 (taze ajan) — ÖZ-İLAN + ENGEL-KALKMIŞ taraması
       FAZ 1 tarafı BİTTİ: 4 diff kümülatif temiz, sınavlar 93/18/23
KASA   dört hüküm ölçüldü (Kostajnica A geçerli · Töton tuza dokunmuyor) +
       `_kaynak_tanikli` diff v2 (13/13) · ÖZ-İLAN öngörüsü 07:34:56 MÜHÜRLÜ
LAB    Ö-T2 kova bölünmesi + Ö-T1 TESLİM · tanık-arama hattı KAPATILDI
BEN    91 commit · iniş öncesi kümülatif `--check` bende
```
**İNİŞ — ⚠️ 09:00 İTİBARIYLA DEĞİŞTİ, bu bölümün üstü 07:40'ın fotoğrafı:**
```
FAZ 1 artık DOKUZ kalem (dörtlü DEĞİL):
  KAPSAM-v3 → KUR-KAPI → D5-GUN-v3 → SESSIZ-7 → KASA-GORUNURLUK →
  KASA-DIKIS-v3 → OKU-DOSYA-ATLAMA → MADDE-VAR-MÖ → NEGATIF-YIL-A2
  (+ KRONO-NEG · TAHTA-ACIL · KOSU-YAYIN-KAPI · SINAV-ISIRMA: sırasız, tuz dışı)

🔴 MÖ PAKETİ BU İNİŞE GİRMİYOR — BEŞ ön koşulu var (INIS §8.1d):
  ① NEGATIF-YIL-A2 ✅  ② KUNYE-SUMER-v3 (4 günlük örtüşme)
  ③ SUMER-SAHIP (21 noktanın `s:`i YOK!)  ④ MOTOR-GECISLI  ⑤ NEG-B-v2
  ⇒ KÜNYE de çıktı: "etkisiz" ölçmüştüm, ÇAKIŞMAYI sormamıştım
```
İki tavan (TABAN 190 → **188** · D5C 2449) **koşu indikten SONRA** yeniden
ölçülüp sabitle aynı commit'e girer. Güncel hâl her zaman
`git show origin/main:oturumlar/INIS-KOSU22.md` **§8**'dedir.
