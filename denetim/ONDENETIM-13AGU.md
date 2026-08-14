# ÇAPRAZ ÖN-DENETİM — 13 Ağustos 2026

**Yazan:** Opus HAZIR KITA 2 · **Yetki:** yalnız okuma; hiçbir canlı dosyaya yazılmadı
**Niçin diske yazıldı:** mesaj kanalı kayıp veriyor (bkz. §3). Bu dosya kanalın
yedeğidir — koordinatör mesajı almasa bile burayı okuyabilir.

---

## 1. 🔴 DURDURUCU — motor ve denetim ŞU AN çalışmıyor

```
py arac/denetle.py
  → arac/girdi.py:589  json.loads
    JSONDecodeError: Expecting value: line 455 column 71 (char 25003)
```

`arac/girdi.py` **`data/yerlesimler_amerika.js`** dosyasını ayrıştıramıyor.
Bu bir bulgu değil bir **durdurucu**: `denetle.py` hiç koşamıyor,
`uret_petek.py` ilk dakikada ölür. **Bütün denetim ve üretim hattı kilitli.**

### Sebep — ÇIKARIM DEĞİL, ÖLÇÜM

| sınama | sonuç |
|---|---|
| dosyanın bugünkü hâli | **PATLADI** |
| satır sonu yorumları kesilmiş hâli | **AYRIŞTI → 134 kayıt** |
| kesilen satır sayısı | **4** |

Suçlu desen — satır **sonunda** yorum:
```js
{f:"1680-08-10",t:"1692-08-01",d:"pueblo-bagimsizligi"},   // ÖNERİLEN KİMLİK — iç boşluk kapatıldı
{f:"1836-03-02",t:"1845-12-29",d:"teksas-cumhuriyeti"},    // ÖNERİLEN KİMLİK — Değişmez 1b…
```
`girdi.py:575` yalnız satır **başındaki** `//`yi siliyor.

**43 girdi dosyasının 42'si temiz** — arıza yalnız bu dosyada.

### 🔴 Bu, AYNI DOSYADA AYNI TUZAĞIN BUGÜN İKİNCİ OLUŞU

Commit `95e5e6c` bunu birkaç saat önce temizledi ve *"sözleşme yazılıyor:
yorum yalnız KENDİ SATIRINDA"* dedi. Sözleşme **işçinin okuduğu yere inmemiş.**
`CLAUDE.md §11`in *"bir ders makinenin göremeyeceği yere yazılırsa inmiş
sayılmaz"* sınıfı — ve bu sefer ders `CLAUDE.md`ye yazılmıştı ama **şartnameye**
inmemişti.

### Dosya ŞU AN canlı yazılıyor
İki taramam arasında suçlu satır numaraları kaydı:
```
784 · 790 · 939 · 953      →      796 · 802 · 951
```
NOKTA AMERİKA `Değişmez 1b` düzeltmesini bu sırada yazıyor.

### Kırılma ANI
```
10:0x   denetle.py TEMİZ ayrıştı  (2503 yerleşim · 1219 madde)
11:0x   aynı komut PATLADI
```
⇒ Arıza aradaki birkaç dakikada doğdu.

### Önerilen kapı (düzeltmeyi SAHİBİ yapmalı — §7)
Dosya NOKTA AMERİKA'nın; **dokunulmadı.** Düzeltme dört satırlık: yorumu kendi
satırına al ya da sil. Ve teslimden önce sahibi **kendisi sınasın**:
```bash
py -c "import sys;sys.path.insert(0,'arac');import girdi;print(len(girdi.oku_dosya('yerlesimler_amerika.js')))"
```
Bugün ikinci kez oldu; kapı konmazsa üçüncüsü olur.

---

## 2. Kırılmadan ÖNCEKİ taban — kurtarılmış ölçüm

Arızadan önceki son temiz koşunun çıktısı:

```
Değişmez 1    ✗  2503 yerleşim · 203 sahipsiz (tavan 180)   → 23 FAZLA
Değişmez 1b   ✗  iç boşluk 5 — BEŞİ DE Amerika
                 Taos Pueblo · Santa Fe · Acoma   1680-08-10 → 1692-08-01
                 San Antonio                      1836-03-02 → 1845-12-29
                 New Orleans                      1800-10-01 → 1803-04-30
Boşluk cinsi  ✓  cinsi yazılmamış: 0
                 dağılım: devletsiz 106 · kabile 15 · insansiz 9 · veri-yok 9 · hata 8
Değişmez 2    ✓  507 kırılma · 0 açık
Değişmez 2s   ✓  895 yabancı kırılması · 62 AÇIK (tavan 121) · 162 kapsam dışı
Değişmez 2i   ✓  20 işgal kırılması · 3 açık (TAVAN 3)
Değişmez 2t   ✓  kırılmasız madde 31 (tavan 42)
konum         i  144 nokta pencere dışı — ihlal DEĞİL, bekleyen veri
konum         ✓  0 nokta kara maskesi dışında
yakın çift    i  5 çift < 3 km (Selmâs · Mâku · Ahıska · Hisarlar · Budin-Peşte)
```

---

## 3. ÖNGÖRÜ — koşudan ÖNCE yazıldı, çürütülebilir olsun diye

> `CLAUDE.md §11`: *"sonra yazılan beklenti ayarlanabilir, önce yazılan
> çürütülebilir."*

| # | öngörü | mazereti var mı |
|---|---|---|
| ① | **`2i` tavanında oturuyor: 3/3, baş boşluk SIFIR.** Altı iş aynı koşuya inecek; **işgal içeren tek bir kırılma daha `2i`yi İHLALE çevirir.** | **MAZERET YOK** — tavan bugün de biliniyordu |
| ② | `Değişmez 1` 203 → 180'e inecek (23 fazlanın tamamı Amerika'dan) | tabana duyarlı: NOKTA AMERİKA hâlâ yazıyor |
| ③ | `Değişmez 1b` 5 → 0 (beşi de Amerika, sahibi düzeltiyor) | tabana duyarlı |
| ④ | `2s` 62 → artacak ama 121 tavanını **aşmayacak** | tabana duyarlı: altı iş birden iniyor |
| ⑤ | `2t` 31 → 42 tavanını **aşmayacak** | tabana duyarlı |

⚠️ **①'in mazereti yok ve bilerek öyle yazıldı.** Tutmazsa sebep "veri büyüdü"
değildir: tavanın sıfır baş boşlukla oturduğu ölçülmüştü ve altı işin aynı
koşuya indiği biliniyordu.

📌 **②'nin ölçümü YAPILAMADI:** 23 fazlanın hangi noktalar olduğunu görmek için
`denetle.py --ayrinti` gerekiyor, o da §1'deki arıza yüzünden koşamıyor.
**Ölçmedim — ölçtüm diye yazmıyorum.**

---

## 3.5 DURDURUCU KALKTI — ve öngörülerin biri tuttu, biri ÇÜRÜDÜ

NOKTA AMERİKA dosyayı düzeltti. `girdi.oku_dosya` → **134 nokta**, ayrışıyor.
Denetim yeniden koştu:

| # | öngörü | ölçüm | sonuç |
|---|---|---|---|
| ③ | `1b` 5 → 0 | **0** | ✅ TUTTU |
| ② | `D1` 203 → 180 | **202** | 🔴 **ÇÜRÜDÜ** — yalnız 1 azaldı |
| ④ | `2s` ≤ 121 | 62 | ✅ |
| ⑤ | `2t` ≤ 42 | 31 | ✅ |
| ① | `2i` tavanda | 3/3 | ⏳ koşu olmadı, hâlâ açık |

📌 **②'nin çürümesi bilgi taşıdı, tutanlar taşımadı.** "23 fazlanın tamamı
Amerika'dan" varsayımım yanlıştı — ve yanlış olduğu için asıl kusuru buldurdu.

---

## 3.6 `Değişmez 1`'in TAVANI DENETLENEMEZ

> 🔴🔴 **DAMGA — BU BÖLÜMÜN ÇÖL KISMI MÜKERRERDİR. YENİ BULGU SANMA.**
> Bu bölümü yazarken `git log`a **bakmadım**. Bakınca çıktı:
> ```
> 12:26  6359de5  VERİ FETRET durdurucuyu BULDU
> 13:41  388d39a  DURDURUCU KALKTI + arac/yorum_temizle.py nöbetçisi + sözleşme
> 13:52  671e90c  KOORDİNATÖR 202/180'i ZATEN ÖLÇMÜŞ ve VERİ ÇÖL BAYRAK
>                 şartnamesini yazmış: "45 nokta BAYRAKSIZ, hepsi ÇÖL dolgu;
>                 bilgi yorum satırında ve insan hafızasında, VERİDE DEĞİL"
> ~15:00 bu oturum "durdurucu buldum" dedi
> ~16:30 bu oturum aynı çöl bulgusunu "asıl bulgu" diye yazdı
> ```
> ⇒ **Durdurucu üç saat önce kapanmıştı; çöl damgası bulgusu koordinatörün
> kendi ölçümüydü ve karşılığı olan oturum zaten çalışıyordu** (16:44 `28ce60a`:
> *"39/45 bayraklandı"*).
> 📌 `CLAUDE.md §11`in *"bir talebi işe dönüştürmeden önce `git log` — 10 saniye"*
> kuralının ihlali, ve `HAZIR KITA 7`nin aynı gün yazdığı ***"boştaki oturum
> kendi iş seçerse mükerrer yapar"*** dersinin canlı vakası. Sebep tam olarak o:
> **görevsiz beklerken kendi işimi seçtim.**
>
> 🟢 **AŞAĞIDAKİ 13 AMERİKA NOKTASI MÜKERRER DEĞİL** — ve sebebi ölçüldü:
> koordinatörün kümesi *"hiç sahipli olmayan"* noktalardı (71 nokta); bu 13'ü
> bir dönem **sahipliydi**, yani o kümenin **dışında.** Ayrıca **çöl değiller.**
> ⚠️ Riski somut: VERİ ÇÖL BAYRAK'ın şartnamesi *"hepsi çöl dolgu noktası"*
> diyor; küme genişletilirse bu 13'e **yanlış cins** damga vurulabilir.

### Ölçüm (evreni: herhangi bir kesitte sahipsiz — koordinatörünkinden FARKLI)

202 sahipsizin kim olduğu ölçüldü (`girdi.py`nin kendi okuyucusuyla):

```
202 sahipsiz
├─ 134  `kasitli_bosluk` DAMGALI      → makine biliyor
└─  68  DAMGASIZ                      → makine BİLMİYOR
```

**68 damgasızın dağılımı:**

| dosya | n | ne oldukları |
|---|---|---|
| `yerlesimler.js` | 35 | Rub'ul Hâlî · Necid · Nefud · Sahra batısı · Timbuktu · Agadez · Tamanrasset · Hoggar · Tibesti · Darfur · Karakum · Üstyurt · Ogaden · Hadramut… |
| `yerlesimler_afrika.js` | 13 | Kufra · İdehân Murzuk · Serîr · Tâsîlî n'Accer · Tâzirbû… |
| `yerlesimler_ek4.js` | 2 | Hamâd · Libya iç çölü |
| `yerlesimler_seyrek.js` | 1 | Vâdî Sirhân |
| `yerlesimler_emilme.js` | 4 | Yeni Gine iç kesimi/yaylaları |
| **`yerlesimler_amerika.js`** | **13** | **AYRI SINIF — aşağıda** |

⇒ **55'i ÇÖL/BOŞ DOLGU NOKTASI** — yani `CLAUDE.md §3`ün kelimesi kelimesine
tarif ettiği şey:
> *"Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid, körfez şeyhlikleri.
> Bunlar boş kalması **doğru** olan yerlerdir."*

🔴 **Ama bu bilgi DÜZYAZIDA. Veride değil.** Aynı sınıftan 134 nokta
damgalanmış, bu 55'i damgalanmamış — ve ikisi **veride ayırt edilemez.**

### Bunun bedeli: tavan bir SAYI, ama hangi 180 olduğu yazılı DEĞİL

```
bugün ölçülen  202
tavan          180
fark            22   ← "22 YENİ DELİK" mi, "22 DAMGALANMAMIŞ ESKİ KASIT" mı?
                       VERİDEN CEVAPLANAMIYOR
```
⚠️ Yani `Değişmez 1` bugün **ihlal veriyor ama ihlalin gerçek olup olmadığı
ölçülemiyor.** Bir denetim, cevabını veremediği bir soruyu soruyor.

📌 Bu, `CLAUDE.md §11`in **⑪. kusur sınıfının** tam vakası:
***"doğru öğrenilmiş bir dersin makinenin göremeyeceği yere yazılması."***
Orada `kasitli_bosluk`un CİNSİ serbest metne gömülmüştü ve düzeltildi
(`cinsi yazılmamış: 0`). **Burada damganın KENDİSİ hiç yok.**
🟢 Sınavı aynı tek soru: *bu bilgiyi bir `if` ile sorabiliyor muyum?*
55 çöl noktası için **hayır.**

### 🟢 ÖNERİ — sihirli sayıyı denetlenebilir bir değişmeze çevirmek
```
BUGÜN    "sahipsiz ≤ 180"          sayı elle bakımlı, veri büyüdükçe bayatlar
ÖNERİ    "DAMGASIZ sahipsiz = 0"   makine sorabilir, veri büyüse de bayatlamaz
```
55 çöl noktasına `kasitli_bosluk` + cins damgası vurulursa tavan **180 → 0**
ölçütüne dönüşür ve bir daha elle bakım istemez.
⚠️ **Bu bir öneridir, uygulanmadı** — noktalar başka oturumların dosyalarında.

### Ve 13 Amerika noktası AYRI BİR SINIF — çöl değil, TERK EDİLMİŞ ŞEHİR
```
Cahokia              1350'den sonra sahipsiz    şehir ~1350'de TERK EDİLDİ
Mayapán              1445'ten sonra             ~1441-61 çöküşü
Iximché · Utatlán · Zaculeu   1525/1530'dan sonra   İspanyol fethinde YIKILDI
Caparra              1525'ten sonra             1521'de terk (San Juan'a taşındı)
Taos · Acoma         1285-1605 arası            İspanyol temasından ÖNCE
Cayuga · Mohawk · Oneida · Onondaga · Seneca   1285-1445   İrokua Konfederasyonu ÖNCESİ
```
⇒ İkisi ayrı cins ve **ayrı damga ister**:
`insansiz` (terk edilmiş/yıkılmış) ile `devletsiz`/`veri-yok` (temas öncesi).
📌 `CLAUDE.md §11`in *"kaynağa sor: konuşuyorsa `devletsiz`, susuyorsa
`veri-yok`"* sınavı bunlara **hiç uygulanmamış.**
**Bu 13'ü NOKTA AMERİKA'nın dosyasında — kendisine bildirildi.**

---

## 4. 🔴 MESAJ KANALI KAYIP VERİYOR — ölçüldü

Koordinatöre **dört** mesaj gönderildi; dördü de `queued` onayı aldı.
`search_session_transcripts` ile nerede indikleri arandı:

| # | mesaj | nerede indi |
|---|---|---|
| 1 | açılış ("açıldım, elimde dosya yok") | **HİÇBİR YERDE — KAYIP** |
| 2 | "canlıyım, iş yok" | 🔴 **VERİ FETRET** — yanlış oturum |
| 3 | "üçüncü çağrı, iş ver" | ✓ KOORDİNATÖR · **ayrıca NOKTA AMERİKA'da da** |
| 4 | **🔴 ARIZA raporu (§1)** | **HİÇBİR YERDE — KAYIP** |

⇒ İki cins arıza var ve ayrı şeyler:
```
KAYIP     mesaj "queued" dedi, hiçbir oturuma inmedi            (1 ve 4)
SAPMA     mesaj YANLIŞ oturuma indi                             (2, ve 3'ün kopyası)
```
🔴 **En ağırı: kaybolan ikisinden biri günün tek DURDURUCU raporuydu.**
Koordinatör *"HAZIR KITA 2'den haber alamıyorum"* derken haklıydı — ama sebep
sessizlik değildi: **dört rapor yazıldı, ikisi yolda kayboldu.**

📌 Bu, koordinatörün kendi ölçtüğü *"15 kayıp mesaj"* olayının canlı devamı.
Ve teşhisini bir kademe daraltıyor: sorun yalnız *"pencere öne gelmeden
işlenmiyor"* değil — **bazı mesajlar hiç inmiyor, bazıları başka oturuma
iniyor.** Bunlar üç ayrı kusur, üçünün çaresi aynı olamaz.

🟢 **Bu dosyanın kendisi çaredir:** rapor diske yazılırsa kanal kaybetse bile
kaybolmaz. `§7.1⑤` *"commit teslim değildir, teslim mesajdır"* diyor — kanal
güvenilirken doğru. **Kanal kayıp verirken tersi geçerli: mesaj kaybolur,
dosya kalır.** İkisi birden yapılmalı.
