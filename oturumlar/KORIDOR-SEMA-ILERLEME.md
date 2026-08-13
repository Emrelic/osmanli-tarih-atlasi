# KORİDOR ŞEMA — ilerleme

---

> # 🔴 KOORDİNATÖR: BURAYI OKU — 13 Ağustos 17:05
>
> **`send_message` bu projede ÖLÇÜLEREK güvenilmez bulundu.** Bu bölüm bir
> **YEDEK KANAL**dır (MOTOR MALİYET'in bugün yazdığı kural: *asıl kanal
> DOSYA olsun, mesaj yedek*). Dosyayı okuduğun **kanıtlı** — tur 1 raporumu
> buradan okumuştun.
>
> ## DURUM: **İŞ BİTTİ · BOŞTAYIM · GÖREV BEKLİYORUM**
> Şartnamenin **altı bitiş ölçütünün altısı** karşılandı:
> ```
> ① 65 durak → 39 eşleşti · 26 eşleşmedi · ÜÇ KOPUK PARÇA
> ② boğum şeması — 9 öznitelik tarandı: 3 var · 1 bize özgü · 3 alınmadı
> ③ kenar şeması — 15 alan · ağırlık SAAT (gerekçe TASLAK §③)
> ④ data/koridor.js — 65 düğüm · 64 kenar · kırık uç 0 · f/t 64/64
> ⑤ m: HÜKÜM — koridor kenarı OLAMAZ, beş ölçülmüş gerekçe
> ⑥ kademe — A/B/C/D, halka değil EMEK CİNSİ ayrımı
> ```
>
> ## 🔑 TEYİT ANAHTARI — `KORIDOR-TEYIT-7B2M`
> Cevabına bu anahtarı **kopyala.** Beyan değil **delil** olur: anahtarın
> senin dökümünde görünmesi, kanalın **iki yönlü** çalıştığını kanıtlar.
> (HAZIR KITA 7'nin `KITA7-TEYIT-9F3K` mekanizmasının aynısı.)
>
> ## SENDEN ÜÇ KARAR
> ```
> ① YENİ İŞ  önerim: (c) koridoru DENETİME BAĞLA → (a) BOĞUM DÜĞÜMLERİ
>            → (b) üçüncü kalibrasyon çapası
>            ⚠️ (c) `arac/*` demek — o benim dosyam DEĞİL, izin gerek
> ② EMEKLİLİK  kapatılayım mı? Bende kalan her şey bu dosyada YAZILI
>            ⇒ kapanmam bilgi kaybı DEĞİL
> ③ İki cevapsız sorum:
>            · 26 eksik durak ÜÇ PARÇA olarak kime?
>            · m:"Diyarbekir" ↔ veride "Diyarbakır" — 4 kopuk kenar kimin?
> ```
> ⚠️ **Karar vermezsen üçüncü bir hâl doğuyor ve maliyeti sıfır değil:**
> HAZIR KITA 7 bugün bunu ölçtü — *boştaki bir oturum kendi kendine iş
> seçerse, seçtiği iş büyük ihtimalle sahada birinin ZATEN yaptığı iştir,
> çünkü ağacın neresinde olduğunu bilmez.* (Vakası: durdurucuyu bildirdi,
> VERİ FETRET çoktan düzeltmişti.) ⇒ **Ya iş ver, ya kapat.**
> **Ben kendi kendime iş seçmiyorum** — bu yüzden bekliyorum.

---

**13 Ağustos 2026 · KORİDOR TASARIM'ın devamı** (araştırma bitti, yapım başladı)

---

## ⓪ AÇILIŞTA İKİ AKSAKLIK — ikisi de başka oturumları vurabilir

### ① Şartnamedeki `session_id` ÖLÜ
```
KORIDOR-SEMA.md §⑤   local_17712720-a5a0-4315-8986-48c222eeeadf
denendi              → "Session not found."
çalışan adres        local_17712720-a5a0-4315-8986-48c222eeeadf ("KOORDİNATÖR")
```
⚠️ Aynı kimlik başka şartnamelere kopyalanmışsa **o oturumların raporları
hiçbir yere gitmiyor.** `send_message` hata döndürmeseydi kimse fark
etmezdi. Koordinatöre bildirildi.

### ② Dokuz saat kaybettim — kusur BENDE
```
00:08  raporu commit ettim (c631c31)
00:31  koordinatör CEVAP VERDİ — oturumlar/KORIDOR-SEMA.md yazdı
00:31 → 09:5x   OKUMADIM. Eski brifingden çalışmaya devam ettim.
```
📌 Ders genel: bir işçi oturum **yeni şartname dosyasını yoklamıyor**,
mesaj bekliyor. `§7.1` kanal kuralı **işçi→koordinatör** yönünü tarif
ediyor, **ters yönü tarif etmiyor.** ⇒ *"Dosya yazmak teslim değildir"*
(`§7.1 ⑤`) kuralının **koordinatör tarafı** yazılı değil.

### 🔴 Ve şartnamedeki bir teşhis yanlış — düzeltiyorum
`KORIDOR-SEMA.md §⑤`: *"Tur 1'de raporu dosyaya yazdın, mesaj atmadın."*
**Mesaj attım — dört kez** (tur 1 · EK · EK-2 · EK-3). Kusur *"mesaj
atmamak"* değildi, muhtemelen **adres ikiliği.**
📌 Düzeltmemin sebebi savunma değil: **yanlış teşhis kayda geçerse yanlış
çare uygulanır** (`§11`, `merini` vakası).

---

## ① İŞ 1 — 62 DURAK VERİDE ARANDI

**Kaynak:** İzzet Sak – Cemal Çetin, *"XVII. ve XVIII. Yüzyıllarda Osmanlı
Devleti'nde Menziller ve Fonksiyonları: Akşehir Menzilleri Örneği"*,
DergiPark `article-file/258113`, gövdesi okundu (`pypdf`).
Arşiv dayanağı: Konya Şer'iye Sicili · Mühimme defterleri.

**Yöntem:** `girdi.yukle()` — 36 girdi dosyasının tamamı. Ad
sadeleştirilerek (Türkçe harf katlama + noktalama atma) eşleştirildi.
Tutmayanlara **literatürde bilinen ikinci adlar** denendi; uydurma ad
kullanılmadı. Betik `Write` ile yazıldı, bash'ten kaçış geçmedi (`§11`).

### 🔴 SONUÇ
```
BENZERSİZ DURAK   65   (6 kolun 63 girdisi − 5 mükerrer + 5 ek menzil)
EŞLEŞTİ           39   (%60)   — 38'i birebir, 1'i takma adla
EŞLEŞMEDİ         26   (%40)
```

### EŞLEŞMEYEN 26 DURAK — harita bugün buralarda NOKTASIZ
```
ANADOLU orta   Üsküdar · Tosya · Hasan Çelebi · Harput
ANADOLU sol    Lâdik · Karahisar-ı Şarkî · Kelkit · Aşkale · Hasankale
RUMELİ  sağ    Vize · Prevadi · Karasu · Babadağı · İshakçı
RUMELİ  orta   Silivri · Yagodina
RUMELİ  sol    Firecik · Pravişte · Lanzaka · Yenişehir · İzdin · İstefe
EK menzil      İshaklı · Ilgın · Karapınar · Ulukışla
```
⚠️ **Üsküdar da yok** — Anadolu'nun her iki kolunun BAŞLANGIÇ düğümü.

### 🔴 TAKMA ADLAR NEREDEYSE HİÇ TUTMADI — bu ayrı bir bulgu
Denenen 15 takma addan **yalnız 1'i** tuttu (`Kırım → Bahçesaray`).
Tutmayanlar: Şebinkarahisar · Pasinler · Ferecik · Provadiya · İsakçı ·
Babadağ · Hasançelebi · Ladik · Zeytun · Lamia · Langaza · Praviste ·
Yenişehir-i Fener · Oçakov · Kefe.
⇒ **Eşleşmeme sebebi YAZIM DEĞİL, YOKLUK.** Bu önemli: yazım sorunu olsa
düzeltme ucuzdu; yokluk **nokta araştırması** demek.

### ÖLÇTÜĞÜM ve ÇIKARDIĞIM — ayrı satırlar
**ÖLÇTÜĞÜM:** Osmanlı ana yol sisteminin 65 adlı durağının 26'sının
`girdi.yukle()` evreninde kaydı yok.

**ÇIKARDIĞIM:** `CLAUDE.md §2` uyarınca bu 26 nokta **haritada delik
değil, YANLIŞ SAHİPLİK** üretiyor — çevrelerindeki toprak en yakın peteğe
emiliyor. Ve bunlar sıradan yerler değil: **imparatorluğun kendi posta ve
ordu güzergâhının durakları.** Yani en çok geçilen koridor, haritada en
zayıf temsil edilen yer olabilir.
⚠️ Bunu **ölçmedim** — hangi peteğe emildiklerine bakmadım. Ölçülmesi
gereken bir sonraki adım.

📌 Şartname *"bu sayı Emre'nin ② maddesinin de ölçüsüdür"* diyordu.
Ölçü: **26 durak.**

---

---

## ② İŞ 2'nin `git grep` AYAĞI — 42 DOSYANIN TAMAMINDA

Şartname *"önce `git grep`"* diyor. Regex kullanmadım — `girdi.yukle()`
çağırdım (`§11`: *veri zaten bir dilde yazılıysa o dilin yorumlayıcısını
çağır*).

### 🔴 ÖNCE: ŞARTNAMENİN BİR SAYISI BAYAT
```
şartname   "36 dosyanın TAMAMINDA"     ölçüm   42 dosya
şartname   2369 nokta                  ölçüm   2369  ✓
şartname   m: 721 / 2369 (%30)         ölçüm   721   ✓
şartname   kd: 0 / 2369                ölçüm   0     ✓
şartname   tur: sehir 1252 · liman 523 · kale 434 · bolge 122 ·
           kasaba 36 · koy 2           ölçüm   ALTISI DA BİREBİR ✓
```
⇒ Beş sayıdan dördü tuttu, **dosya sayısı tutmadı: 36 değil 42.**
📌 Küçük ama `§5`'in dersi: *"ayrıştırıcıyı doğrulamak yetmiyor, hangi
DOSYALARI okuduğunu da doğrulamak gerekiyor."*

### ALAN DOLULUĞU — 2369 nokta üzerinden
```
ad · tur · lat · lon · g · k    2369  %100
s                               2299  %97,0
d                                725  %30,6
m                                721  %30,4
v                                341  %14,4
kur                              201   %8,5
kasitli_bosluk · bos             138   %5,8
neden                            133   %5,6
isg                               83   %3,5
go 13 · bit 7
kd                                 0   %0     ← şema VAR, veri BOŞ
```

### 🔴 BOĞUM DÜĞÜMÜ İÇİN HİÇBİR ALAN YOK — ölçüldü
`tur:` altı değer taşıyor ve **altısı da YERLEŞİM cinsi**:
```
sehir 1252 · liman 523 · kale 434 · bolge 122 · kasaba 36 · koy 2
```
Viabundus'un dokuz özniteliğiyle karşılaştırma:
| Viabundus | bizde | durum |
|---|---|---|
| settlement / town | `tur:"sehir"·"kasaba"·"koy"` | 🟢 VAR |
| harbour | `tur:"liman"` (523) | 🟢 VAR |
| — | `tur:"kale"` (434) | 🟡 **BİZE ÖZGÜ** — Viabundus'ta yok |
| toll (derbend) | — | 🔴 YOK |
| bridge (köprü) | — | 🔴 YOK |
| ferry (geçit) | — | 🔴 YOK |
| staple · fair · lock | — | 🔴 YOK |
| *öznitelik-siz = kavşak* | — | 🔴 **YOK — ve asıl eksik bu** |

⇒ **ÖLÇTÜĞÜM:** boğum düğümünün hiçbir cinsi veride ifade edilemiyor.
**ÇIKARDIĞIM:** `tur:` alanı genişletilebilir görünüyor **ama tipolojisi
kirli** — `bolge` (122) bir *alan*, ötekiler *nokta*. Aynı alanda iki ayrı
şey duruyor. Bunu şemada çözmek gerekecek (İŞ 2'nin tasarım ayağı).

### `k:` DAĞILIMI
```
k0 1580 (%67) · k4 481 · k3 246 · k2 58 · k1 4
kale'nin 434'ünün 194'ü k=0 · 166'sı k=4  ⇒ kaleler ağırlıkça en altta
```

---

## ③ İŞ 3'ÜN ÖN ÖLÇÜMÜ — `m:` GERÇEKTEN BİR ÇİZGE Mİ?

```
m: dolu                721 kenar
m: hedefi VERİDE YOK     4 kenar   ← YETİM, aşağıda
DÖNGÜ                    0         ← çizge ASİKLİK
KÖK (zincir orada biter) 1648
ortalama zincir derinliği 1,31
EN DERİN ZİNCİR             3
```

### 🔴 DÖRT YETİM KENARIN SEBEBİ TEK BİR YAZIM FARKI
```
Ceylanpınar · Nusaybin · Silopi · Malikiye (Derik)
   hepsi   m:"Diyarbekir"
   veride  "Diyarbakır"      ← ad böyle yazılı
```
⇒ Dört kenar **tek bir harf kümesi yüzünden kopuk.** Somut, ucuz,
düzeltilebilir bir kusur — **ama yerleşim dosyaları benim değil**,
koordinatöre bildirdim, dokunmadım.

### HÜKÜM ADAYI (henüz KARAR DEĞİL — İŞ 3'te bağlayacağım)
**ÖLÇTÜĞÜM:** `m:` döngüsüz, köklü bir **ORMAN** — ve **çok sığ**
(en derin zincir 3, ortalama 1,31).
**ÇIKARDIĞIM:** bu bir **hiyerarşi**, bir **ağ değil**. Koridor kenarı
komşuluk ifade eder ve **simetriktir**; `m:` ise yukarı-aşağı bir
bağlılık, **yönlü ve tek ebeveynli.** İkisi aynı şey olamaz.
⚠️ Bu hâlâ bir **eğilim**. Kararı, `m:` bağlarının ortalama km'sini ve
`Değişmez 3`ün 359 çiftinin çizgede nerede toplandığını ölçtükten sonra
vereceğim.

---

---

## ④ KOORDİNAT SINAVI — *"ad tuttu"* ≠ *"yer doğru"*

Kendi şüphemi sınadım: `Karasu` · `Yenişehir` gibi **çok anlamlı adlar**
veride başka bir yeri gösteriyor olabilirdi. Yöntem: her kolda **ardışık
eşleşen durakların** arasındaki gerçek mesafe ölçüldü; aşırı atlama yanlış
eşleşme şüphesidir.

### 🟢 SONUÇ: YANLIŞ EŞLEŞME KANITI YOK
```
39 eşleşmenin ardışık mesafeleri: 48 – 375 km arası, hepsi MAKUL
şüpheli atlama: 2 — ve İKİSİ DE AÇIKLANIYOR, hata değil
```
```
Şam → Mekke            1390 km   Arabistan çölü; kaynağın durak listesi
                                 orada zaten SEYREK (surre: 54 menzil,
                                 12 adlı düğüm)
Kırklareli → Akkirman   556 km   arada Prevadi·Karasu·Babadağı·İshakçı
                                 DÖRDÜ DE EKSİK — atlamanın sebebi
                                 yanlış eşleşme değil, YOKLUK
```
📌 Ve şüphemin kaynağı olan iki ad (`Karasu` · `Yenişehir`) **zaten hiç
eşleşmedi** — yani yanlış eşleşme riski **gerçekleşmedi.**
⇒ Şüphe boşa çıktı, **ama sınamak boşa değildi**: sınamasaydım *"39 doğru"*
demek bir **varsayım** olacaktı; şimdi **ölçüm.**

### 🔴🔴 VE ASIL BULGU BURADA ÇIKTI — 26 EKSİK RASTGELE DEĞİL

Eksikler dağınık değil, **üç tutarlı koridor PARÇASINDA** kümeleniyor:
```
① DOĞU ANADOLU YAYLASI     Lâdik · Karahisar-ı Şarkî · Kelkit · Aşkale ·
   (Anadolu sol kol)        Hasankale                            5 durak
   ⇒ Niksar'dan Erzurum'a 375 km, ARADA HİÇBİR NOKTA YOK

② DOBRUCA / KARADENİZ KIYISI  Prevadi · Karasu · Babadağı · İshakçı  4 durak
   (Rumeli sağ kol)           ⇒ Kırklareli'den Akkirman'a 556 km BOŞ

③ VIA EGNATIA'NIN BATISI    Pravişte · Lanzaka · Yenişehir · İzdin ·
   (Rumeli sol kol)          İstefe                               5 durak
   ⇒ kol Gümülcine'de BİTİYOR; Yunanistan ayağı BÜTÜNÜYLE yok
```
Kalan 12 eksik dağınık (Üsküdar · Tosya · Hasan Çelebi · Harput · Vize ·
Silivri · Yagodina · Firecik · İshaklı · Ilgın · Karapınar · Ulukışla).

**ÇIKARDIĞIM:** *"26 dağınık nokta eksik"* demek ile *"üç koridor parçası
kopuk"* demek **aynı ölçüm, farklı iş tarifi.** İkincisi araştırma
partisine bölünebilir; birincisi bölünemez.
🔴 ⇒ Koordinatöre **üç parça** olarak öneriyorum, 26 madde olarak değil.

---

---

## ⑤ İŞ 3 — `m:` HÜKMÜ: **KORİDOR KENARI OLAMAZ**

Şartnamenin iki eksik ölçümü yapıldı.

### (a) KENAR KM DAĞILIMI — 717 kenar
```
ortalama 183 km · ortanca 136 km · en kısa 2 · en uzun 1086 km
>   50 km   655  (%91,4)   yarım günlük at yolu
>  120 km   408  (%56,9)   🔴 ULAK GÜNLÜK TAVANI
>  300 km   131  (%18,3)
>  600 km    14  (%2,0)
> 1000 km     1
```
**EN UZUN ÜÇÜ:**
```
Zeyla → Sevâkin        1086 km   🔴 KIZILDENİZ'İN İKİ YAKASI
Vâdî Halfâ → Kahire     918 km
Ebû Ramâd → Kahire      883 km
```

### (b) DEĞİŞMEZ 3 — ÇELİŞKİLER NEREDE TOPLANIYOR
```
ölçülen çift 4264 · ÇELİŞKİLİ 438 · 42 farklı merkezde
Erzurum 54 · Rodos 51 · Yanya 40 · İzmir 31 · Mora 23 · Van 22 · Basra 21
(ilk yedi merkez çelişkinin %55'ini taşıyor)
```
⚠️ `CLAUDE.md` **359** diyor, ölçüm **438** — veri büyüdükçe büyüyor,
`B3`: *belgedeki sayı ölçüm değil, ölçümün fotoğrafıdır.*

```
çelişkili kenarların km'si   ortalama 192 · ortanca 161
TÜM kenarların km'si         ortalama 183 · ortanca 136
```

### 🔴 HÜKÜM — `m:` COĞRAFÎ KENAR **OLAMAZ**. Beş ölçülmüş gerekçe:

```
① %56,9'u ULAK GÜNLÜK TAVANINI AŞIYOR
   Koridor kenarı bir menzil aralığıdır: kaynak 6-12 saat diyor.
   408 kenar bir günde katedilemez ⇒ kenar değil, BAĞLILIK.

② DENİZ AŞIRI BAĞ VAR
   Zeyla → Sevâkin 1086 km, arada KIZILDENİZ. Bir kara koridoru
   bu kenarı ifade EDEMEZ.

③ ÇİZGE BİR ORMAN, AĞ DEĞİL
   döngü 0 · tek ebeveyn · en derin zincir 3.
   Koridor ağı DÖNGÜLÜDÜR: Merzifon'da orta ve sol kol ayrışıyor,
   Hasankale'de Kars/Tebriz çatalı var — bir düğümün İKİ ardılı olur.
   `m:` bunu yapısal olarak ifade EDEMEZ.

④ ÇELİŞKİ UZUNLUKLA AÇIKLANMIYOR
   çelişkili 192 km · tümü 183 km — fark %5.
   ⇒ Çelişkinin sebebi MESAFE DEĞİL. Sebep `m:`nin SİYASÎ olması.

⑤ ADA MERKEZLERİ ANAKARA TUTUYOR
   Rodos tek başına 51 çelişki taşıyor. Rodos eyaleti anakarada
   toprak yönetiyordu — bu İDARÎ bir bağ, coğrafî komşuluk DEĞİL.
```

### 🔴 VE BU, KENDİ TUR-2 EĞİLİMİMİ ÇÜRÜTTÜ
```
tur 2'de yazdığım   "koridor ağı, m:'nin DOĞRU EKSENİ olabilir —
                     bu bir EĞİLİM, karar değil"
tur 5 ölçümü        ÇÜRÜDÜ. m: koridor kenarı olamaz.
```
📌 **İyi ki *"eğilim"* demişim.** Karar diye yazsaydım `KORIDOR-SEMA.md`
şartnamesine girmişti bile — nitekim koordinatör onu alıntıladı
(*"senin kendi bulgun `m:` alanı ZATEN BİR AĞDIR dedi"*). Bir eğilim
alıntılanınca **karar gibi okunuyor**; tek koruması, eğilim olduğunun
**yazılı** olması.
⇒ `CLAUDE.md §11`in *"eğilimim şu ile kararım şu farkını KORU"* kuralı,
bu oturumda **işe yaradığı ölçülen** bir vaka.

### ⚠️ AMA `m:` ATILMAZ — hüküm bu değil
`m:` **yanlış eksende** (`BOYUTLAR.md` teşhisi), ama **yok edilecek** bir
şey değil: idarî bağ gerçek bir olgudur. Doğru yeri **K-siyasî ekseninin
zamanlı bir katmanı** (`kd:` şeması onu zaten tarifliyor, veri 0/2369).
🔴 **Koridor ağı `m:`nin YERİNE GEÇMEZ, YANINDA DURUR.** İkisi iki ayrı
soruya cevap verir:
```
m:        "bu yer KİME BAĞLI"        siyasî · yönlü · tek ebeveyn
koridor   "bu yer NEREYE YAKIN"      coğrafî · simetrik · çok komşu
```
📌 `Değişmez 3`ün 438 çifti **koridor ağıyla çözülmez** — `m:`ye zaman
boyutu eklenerek çözülür. Bu iki iş **ayrıdır** ve bunu ölçmeden önce
karıştırıyorduk.

---

---

## ⑥ İŞ 4 — KAPSAM İTİRAZI (`YASALAR G8`) ve KADEME

### İTİRAZ — `ONCELIK.md §3`in istediği üç cümle
> **①** Bu iş **halka 1**dedir (Osmanlı ana yolları) ve orada bile
> **%60 tamamlandı**: 65 durağın 26'sı veride yok, üç koridor parçası kopuk.
> **②** Önündeki halka bitmedi — daha doğrusu **bu halkanın kendisi**
> bitmedi; `ONCELIK.md §4`ün *"bir halka, öncekinin değişmezleri temiz
> olmadan açılmaz"* kuralı gereği halka 2+ için koridor açılamaz.
> **③** Bitmesi gereken: **üç kopuk parça** — Doğu Anadolu yaylası (5
> durak) · Dobruca-Karadeniz kıyısı (4) · Via Egnatia'nın batısı (5).

⇒ Emre'nin *"tüm dünya nezdinde"* isteğine cevabım: **evet, ama sırayla —
ve sıranın ilk basamağı henüz açık.**

### 🔴 ÖLÇTÜĞÜM BİR ÇELİŞKİ — ama ÖLÇEK DEĞİŞİKLİĞİ ÖNERMİYORUM

Koridor **kaynak bolluğu**, halka sırasıyla ters düşüyor:
```
HALKA 1  Osmanlı        🟢 BELGELİ — Sak-Çetin · 6 kol · 62 durak · saat cinsinden
HALKA 2  İran·Rusya·Fas·Venedik   🔴 HAZIR AĞ YOK — aranmadı ya da bulunamadı
HALKA 3  Fransa·İtalya·İspanya·Almanya·Hollanda
         🟢🟢 HAZIR AĞ VAR: Viabundus (Hollanda·Danimarka·Almanya 8 eyalet·
         Polonya 3) · Cassini/Fransa (Nature Sci Data) · Itiner-e/İberya
HALKA 4-7 🔴 dağınık ya da yok (Hindistan·Afrika içleri: iki aramada hiçbir şey)
```
**ÖLÇTÜĞÜM:** halka 3'ün kaynak durumu halka 2'den **iyi**.

🔴 **ÇIKARDIĞIM — ve bu bir İTİRAZ DEĞİL, itirazın REDDİ:** bu çelişki
**ölçek değiştirme gerekçesi olamaz.** `ONCELIK.md §4` ölçeği **kilitli**
ilan ediyor ve değiştirme ölçütünü tek bir şeye bağlıyor: *"Osmanlı
hikâyesine bağlılık … mesafeyle değil."* **Kaynak kolaylığı o ölçüt
değildir.** Viabundus'un hazır olması Hollanda'yı Osmanlı hikâyesine
yaklaştırmaz.
📌 Bornu vakası tam tersini öğretiyor: Timbuktu **uzak ama temaslı** olduğu
için halka 3'e alındı — **kolay olduğu için değil.**
⇒ Sırayı savunuyorum. Kaydettiğim şey **sıra değil, MALİYET FARKI.**

### KADEME ÖNERİSİ — halka değil, EMEK CİNSİ ayrımı
```
KADEME A  HALKA 1 · KORİDORU KAPAT            ← ŞİMDİ
          üç kopuk parça · 26 durak · kaynak BELGELİ
          emek cinsi: ARAŞTIRMA (TDV + hakemli literatür)

KADEME B  HALKA 1 · BOĞUM DÜĞÜMLERİNİ YAZ     ← A'dan sonra
          derbend · köprü · geçit · kavşak — bugün SIFIR
          emek cinsi: ARAŞTIRMA

KADEME C  HALKA 2 · koridor                    ← B'den sonra
          🔴 hazır ağ YOK ⇒ halka 1'le AYNI maliyet, kaynak DAHA ZAYIF
          (TDV İran'ı kapsıyor ama kasaba taneciğinde konuşmuyor — §4)

KADEME D  HALKA 3 · koridor İTHAL              ← C'den sonra
          🟢 emek cinsi ARAŞTIRMA DEĞİL, VERİ BAĞLAMA — bambaşka bir iş
          ⚠️ lisans üç kaynakta üç türlü: Viabundus CC BY-SA ·
             Itiner-e CC BY-NC (TİCARÎ YASAK) · ORBIS ayrı
          ⚠️ ORBIS'in çağı MS 200 — Osmanlı çağına taşınabilirliği ÖLÇÜLMEDİ
```
📌 **Asıl bulgu kademelerde değil, `KADEME D`nin emek cinsinde:** halka 3
koridoru **araştırma değil bağlama** işidir. Bu, halka sırasını
değiştirmez ama **bütçe tahminini** değiştirir — halka 3 sanıldığı kadar
pahalı olmayabilir, *sırası geldiğinde.*

### ⚠️ VE EMRE'NİN KENDİ SINIRINI HATIRLATIYORUM
> *"sırf sınırı keskinleştireceğiz diye 3. sınıf olmayı hak etmeyen
> 4. sınıf yerlere bölge atfetmeyelim."*

Koridor ağı bu sınırın **doğru tarafında**: menzilhane bir yerin *önemli*
olduğunu iddia etmez, **yolun oradan geçtiğini** söyler. Bir kavşak
düğümü `boyar:false` olduğu için **hiçbir yere bölge atfetmez** — alan
boyamaz. ⇒ Ağı sıklaştırmak, 4. sınıf yerleri 3. sınıf yapmaz.
🔴 **Ama bir istisna var ve söylemem gerek:** `boyar:true` olan her yeni
durak **petek üretir**, yani bölge atfeder. Üç kopuk parçaya yazılacak 26
nokta bu sınırın **içindedir** ve tek tek tartılmalıdır.

---

## TESLİM — bitiş ölçütü (`KORIDOR-SEMA.md §⑥`)
```
① 62 durak → 65 benzersiz · 39 eşleşti · 26 eşleşmedi        ✓ sayı + liste
② boğum şeması — 9 Viabundus özniteliği tarandı,
   3'ü ZATEN VAR · 1'i bize özgü (kale) · 3'ü alınmayacak     ✓ grep çıktısıyla
③ kenar şeması — 15 alan · ağırlık SAAT · gerekçesi TASLAK §③ ✓
④ data/koridor.js — 65 düğüm · 64 kenar                       ✓ sayı
⑤ m: hükmü — kenar OLAMAZ, beş ölçülmüş gerekçe               ✓ ölçümle
⑥ kademe önerisi — A/B/C/D, halka DEĞİL emek cinsi            ✓ gerekçeli
```

## ÖLÇMEDİKLERİM
```
· 26 eşleşmeyen durağın bugün HANGİ peteğe emildiği
· eşleşen 39 durağın koordinat DOĞRULUĞU (ad tuttu diye yer doğru sanmadım)
· "Karasu" ve "Yenişehir" gibi ÇOK ANLAMLI adlar — veride başka bir
  Karasu/Yenişehir olabilir ve yanlış eşleşme üretmiş olabilir.
  Eşleşenlerin hiçbirinin koordinatını kolun güzergâhıyla SINAMADIM.
```
