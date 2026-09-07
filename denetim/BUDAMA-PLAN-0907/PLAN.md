# BUDAMA PLANI — 0907 · uygulanacak tam hâl

**Oturum:** BUDAMA-0907 · **Tarih:** 7 Eylül 2026
**Dayanak:** `denetim/OLCUM-BUDAMA-0907.md` · `denetim/ONERI-BUDAMA-0907.md`
**Emre'nin mandası:** *"Okunmayacak olan ve bize doğruluk, hız ve tasarruf
manasında bir şey katmayacak olan her şeyi buda ve sil. Okunacak ve
uygulanacak bir taban kalsın, kuru gürültü yaratanları silelim."*

🔴 **BU PAKET UYGULANMADI.** `CLAUDE.md`de değişen satır: **0.**
Hepsi `denetim/BUDAMA-PLAN-0907/` altında duruyor ve **Emre'nin
onayını bekliyor** — o *"evet"* dedi ama **hangi metnin gideceğini
görmedi.**

---

## ⓪ 🔴🔴 PLANDAN ÖNCE BİR ÖLÇÜM: BUDAMA TEK BAŞINA YETMEZ

Ölçüm sırasında `CLAUDE.md` **büyüdü** — ve ölçüldü:

```
gün           satır    token     Δtoken
2026-08-07      930   17.701          -
2026-09-02    3.120   60.427    +17.037
2026-09-04    3.933   76.666    +10.862
2026-09-05    7.132  141.112    +64.446   ← TEK GÜNDE
2026-09-07    7.662  151.356    +10.244
```
```
BİR AYDA        17.701 → 151.356 token   =  8,5 KAT
SON 6 GÜNDE     60.427 → 151.356         =  günde ~15.000 token
VE ÖLÇÜM SIRASINDA (14:5x → 16:0x)       =  +288 satır · +5.409 token
```

> 🔴 **Bu budamanın kazancı 79.671 token. Bugünkü büyüme hızıyla
> **5-6 GÜNDE** geri gelir.**
> ⇒ ***Budama bir FOTOĞRAFTIR; kalıcı olan tek şey YAZIM KURALIDIR.***

🟢 **ZORUNLU EK KALEM — YENİ DERS NASIL YAZILIR:**
```
Yeni bir ders CLAUDE.md §11'e yazılırken:
  ① manşet + `⇒`/`📌` hüküm + tek satırlık künye  →  CLAUDE.md
  ② vaka anlatısı (ölçümler · kod · alıntı · çürütme) →  dersler/<slug>.md
Bu kural yazılmazsa budama BİR KEZLİK bir temizliktir ve tekrarlanır.
```
📌 Ve emsali bu projede var: `§1.5` tablosu iki kez bayatladı; çare *"yeni
bir uyarı satırı"* değil **onu elle yazılmaktan çıkarmak** oldu.
Burada da çare bir temizlik değil, bir **yazım kuralı.**

---

## ① PAKETTE NE VAR

```
denetim/BUDAMA-PLAN-0907/
   PLAN.md                bu dosya
   YENI-CLAUDE-11.md      budanmış §11'in TAM METNİ (2.051 satır · 51.065 tok)
   dersler/<slug>.md      çıkan vaka anlatıları — 147 dosya
   EMREYE-ONCE-SONRA.md   üç örnek, tam metin — onay için
   ESLEME-0907.json       ders → dosya eşlemesi (makine okunur)
   KADEME-0907.json       hangi ders hangi kademede (makine okunur)
```
**Aletler** (`denetim/` altında, pakette değil):
```
ARAC-BUDAMA-URET-0907.py     paketi üretir   (CLAUDE.md'yi yalnız OKUR)
ARAC-BUDAMA-SINAV-0907.py    «hiçbir şey kaybolmadı» sınavı · `--atesle`
ARAC-BUDAMA-GERIAL-0907.py   tek ders geri alma · `--liste` · `--yaz`
ARAC-BUDAMA-KADEME-0907.py   kademe bölümü
ARAC-BUDAMA-BUYUME-0907.py   büyüme hızı + §3.5/§4 vaka payı
```

---

## ② ÖLÇÜM — önce / sonra

| | ders | satır | token |
|---|---:|---:|---:|
| **§11 BUGÜN** | 182 | 5.527 | **109.586** |
| **§11 BUDANMIŞ** | 182 | 2.051 | **51.065** |
| **KAZANÇ** | — | −3.476 | **−58.521 (%53,4)** |

```
CLAUDE.md bugün      151.356 token
CLAUDE.md budanmış    92.835 token   ⇒ %61'ine iner
manşet                   182 → 182   KAYIP 0
vaka dosyası             147 · YERİNDE kalan 35 ders
ders başına kalan        ortalama 282 token (eski ortalama 681)
```

### 🔴 BU SAYI, İLK RAPORLADIĞIM 79.671'DEN DÜŞÜK — VE SEBEBİ BİR KUSURDU

İlk üretim satır bazlıydı ve **cümleleri ortasından kesiyordu.** Emre'ye
sunulacak örneği çıkarınca göründü:
```
üretilen:  «⇒ Süzgeç "ölçemediğim aday"ı "sorun olmayan aday" diye eledi. Bu,»
                                                                        ↑ YARIM
```
⇒ 79.671'lik kazancın bir kısmı **tasarruf değil KAYIPTI.** Alet paragraf
bazlıya çevrildi; kazanç 79.671 → 39.486'ya düştü, sonra kapak (`⑦`) ve
net kazanç kapısıyla (`⑧`) **58.521**'de dengelendi.
📌 ***Kusur ölçümde değil OKUMADAYDI, ve onu bir sayı değil bir ÖRNEK
gösterdi.*** Örnek çıkarılmasaydı yarım hükümler `CLAUDE.md`ye inecekti.

### KAPAK — ölçülen bant, ve niçin `1` seçildi

Bir ders çoğu zaman aynı hükmü birkaç yönden söyler. Kapak, paragrafı
**ortasından kesmeden** sadeleştirir: ilk N hüküm paragrafı kalır.

| kapak | §11 sonrası | kazanç |
|---|---:|---:|
| **1 (seçilen)** | **51.065** | **58.521 (%53,4)** |
| 2 | 63.565 | 46.021 (%42,0) |
| 3 | 68.210 | 41.376 (%37,8) |
| sınırsız | 70.100 | 39.486 (%36,0) |

🔴 **DAMGA paragrafları kapağın DIŞINDA.** `KAPAK=1` ilk denemede bir
dersin *«BU İKİ SATIR ERTESİ GÜN BAYATLADI»* damgasını düşürdü. Damga
dersin **bugünkü geçerliliğidir**; düşerse bir oturum çürümüş bir dersi
geçerli sanar — yani kapak, tasarrufu **kusurdan** üretirdi. Düzeltildi.

### 🟡 İKİ KAPI — ve ikisi de ÖLÇÜMLE kondu
```
⑥ EŞİK        blok ≤150 token ise taşınmaz
⑧ NET KAZANÇ  taşımanın net kazancı <40 token ise taşınmaz
   🔴 Sebep ölçüldü: yalnız EŞİK varken son kademenin (37 ders) toplam
     kazancı **-221 TOKEN** çıktı — o dersleri taşımak PAHALIYA geliyordu.
⇒ 35 ders YERİNDE kaldı. Taşımanın maliyeti kazancından büyükse taşınmaz.
```

---

## ③ NE KALIR, NE İNER — koruma kuralı

**`CLAUDE.md`de KALAN** (alet bunları makineyle seçiyor, elle değil):
```
① MANŞET          bloğun ilk satırı — kuralın kendisi
② HÜKÜM satırı    `📌` · `⇒` · `KURAL` · `HÜKÜM`
③ DAMGA satırı    ÇÜRÜDÜ · DAMGALANDI · BAYATLADI · BORÇ KAPANDI ·
                  DEVRALDIM · KAPSAM DARALTILDI · DERS SİLİNMEDİ …
   🔴 Bunlar dersin BUGÜNKÜ GEÇERLİLİĞİNİ taşır. Vakayla birlikte
      inerse bir oturum ÇÜRÜMÜŞ bir dersi geçerli sanır.
④ KÜNYE           üretilen tek satır: tarih · oturum · bağlantı
⑤ TABAN GÜVENCESİ ①-③'ten hiçbiri tutmayan derste gövdenin ilk anlamlı
                  satırı yine tutulur ⇒ bir ders ASLA yalnız manşetle
                  kalmaz. (Bu koşuda bu dala düşen ders: 0)
```
**`dersler/<slug>.md`ye İNEN:** ölçümler · kod parçaları · alıntılar ·
çürütmeler · *"niçin öyle"* gerekçesi — yani **vaka.**

---

## ④ SINAV — ve C13'ün DÖRT AYAĞI DA KOŞULDU

**Değişmez:** *eski §11'in her anlamlı satırı, ya budanmış §11'de ya bir
`dersler/*.md` içinde bulunur.*

```
① GEÇME     🟢 eski §11 anlamlı satır 4.940 · KAYIP SATIR 0 · KAYIP MANŞET 0
② ATEŞLEME  🟢 3/3 dal ötüyor — ÜÇÜ DE AYRI AYRI zorlandı:
              ders dosyasından SATIR düşür  → öttü (1 bulgu)
              budanmış §11'den MANŞET düşür → öttü (2 bulgu)
              bir vaka dosyasını TÜMÜYLE sil → öttü (29 bulgu)
   🔴 VE BU DAL BİR KEZ SUSTU: kapak düzeltmesinden sonra «ders-satırı»
     dalı 3/3'ten 2/3'e düştü. Sebep dalın kendisi değil SEÇİMİYDİ —
     rastgele seçilen satır hem vaka dosyasında hem budanmış §11'de
     duruyordu (hüküm satırları İKİSİNDE DE var), yani düşürülmesi bir
     kayıp değildi ve sınav haklı olarak susuyordu. Seçim «yalnız vaka
     dosyasında duran satır» olarak daraltıldı. **Ateşlemeyen dal,
     denetimsiz daldır** (`§11 C13`).
③ GİRDİ     🟢 `CLAUDE.md` ve paket dosyaları DİSKTEN okunuyor;
              hiçbir kayıt enjekte edilmiyor
④ ÇIKTI     🟢 bilerek kusurlu girdide sınav BİLDİRİYOR (②'nin kanıtı)
```
🔴 **BEŞİNCİ KOVA — TABAN KAYMASI.** `CLAUDE.md` paket üretildikten sonra
büyürse, yeni derslerin satırları pakette olmaz. Bu bir **kayıp değil,
gecikme** — ayrı kovada raporlanıyor, yoksa sınav **yanlış alarm** verir.
⚠️ Ve o yanlış alarm **bir kez gerçekten üretildi**: eşik konduğunda 5
"yerinde kalan" ders *"taban kayması"* diye raporlandı. Sınav düzeltildi.

```bash
py denetim/ARAC-BUDAMA-SINAV-0907.py            # GEÇME
py denetim/ARAC-BUDAMA-SINAV-0907.py --atesle   # ATEŞLEME (3 dal)
```

---

## ⑤ GERİ ALMA — üç kademe, üçü de SINANDI

```
① TEK DERS      py denetim/ARAC-BUDAMA-GERIAL-0907.py <slug> --yaz <dosya>
                🟢 SINANDI (bir KOPYA üzerinde, CLAUDE.md'ye dokunulmadan):
                   9 satırlık budanmış girdi → 82 satırlık orijinal blok
                   ve 3 satırlık girdi → 1 satırlık orijinal blok
                Vaka dosyası SİLİNMEZ ⇒ geri alma da geri alınabilir.
② BİR KADEME    git revert <kademe-commit>
③ BELGENİN TAMI git show <sha>:CLAUDE.md
```
`--yaz` verilmeden hiçbir dosyaya dokunulmaz; varsayılan **kuru koşu.**
Hedef dosyayı **çağıran** söyler — alet kendiliğinden `CLAUDE.md` seçmez
(`§7`: kök `*.md` Oturum 0'ın).

---

## ⑥ KADEME BÖLÜMÜ — tek dev commit DEĞİL

🔴 **Sebep:** 21 oturumun paylaştığı bir depoda tek dev commit, bir
gerileme çıkarsa neyin bozulduğunu **ölçülemez** kılar.

| kademe | ders | eski tok | kalan tok | KAZANÇ | sonrası §11 |
|---|---:|---:|---:|---:|---:|
| **K1** (en çok kazandıran 20) | 20 | 22.546 | 4.834 | **17.712** | 91.874 |
| K2 | 32 | 25.996 | 8.476 | 17.520 | 74.354 |
| K3 | 32 | 22.825 | 10.199 | 12.626 | 61.728 |
| K4 | 32 | 16.897 | 9.096 | 7.801 | 53.927 |
| K5 | 31 | 11.965 | 8.968 | 2.997 | 50.930 |
| **TOPLAM** | **147** | | | **58.656** | |

🟢 **Ve beş kademenin beşi de ARTI.** Net kazanç kapısı (`⑧`) konmadan
önce K5'in kazancı **−221 token**tu; kapı o dersleri yerinde bıraktı.

**Her kademede sırayla:**
```
① kademenin derslerini uygula   ② SINAV (geçme) koş — KAYIP 0 olmalı
③ token'ı ölç ve yaz            ④ ayrı commit, mesajında NE SİLİNDİĞİ yazılı
🔴 ② tutmazsa: git revert, ve SONRAKİ KADEMEYE GEÇME.
```
📌 K1 ayrı bir kademe çünkü kazancın **%25'ini 20 ders taşıyor** —
yirmi ders bir gecede geri alınabilir, 177 ders alınamaz.

---

## ⑦ 🔴 SIRA BAĞLAYICI — ŞİMDİ DEĞİL

```
🔒 koşu 8 SÜRÜYOR · ON ÜÇ OTURUM CLAUDE.md'yi okuyarak çalışıyor
⇒ UYGULAMA: koşu 8 bittikten VE bu dalga teslim ettikten sonra
👤 KİM: kök `*.md` Oturum 0'ın; ve CLAUDE.md EMRE'NİN belgesi
⚠️ PAKET BAYATLAR: CLAUDE.md büyümeye devam ediyor. Uygulamadan önce
   `ARAC-BUDAMA-URET-0907.py` YENİDEN koşulmalı ve sınav tekrar
   geçmelidir — sınav «taban kayması» kovasıyla bunu zaten gösterir.
```

---

## ⑧ KAPSAM DIŞI — ölçüldü, DOKUNULMADI

`§1`-`§10` bu turda dışarıda. Ama `§3.5` ve `§4` içinde de **vaka
anlatıları var** ve ölçüldü:

```
§3.5   7.726 token · kod bloğu 2.010 (%26) · «Vaka/Ölçüldü» satırı 96 (%1)
§4    13.755 token · kod bloğu 2.611 (%19) · «Vaka/Ölçüldü» satırı 349 (%3)
```
⚠️ **Bu bir ALT SINIRDIR:** kod bloğu ve «Vaka» satırı sayıldı, o satırları
**açıklayan düzyazı sayılmadı.** Gerçek vaka payı daha yüksek.
⇒ İkisi birlikte **21.481 token**; aynı işlem uygulanırsa **~15.000 token**
daha beklenir — 🟡 **TAHMİN, ölçüm değil.** Ayrı bir kalem.

---

## ⑨ AÇIK KALEM DEĞİL — kapatıldığı BURADA YAZILI

Şartnamenin ⑤. sorusu *"bir oturum bayat bir DIZIN satırı okursa ne
olur?"* diye soruyordu.

🟢 **BU RİSK YAPISAL OLARAK YOK — çünkü ayrı bir dizin ÖNERİLMEDİ.**
`§11`in kendisi dizindir: manşetler yerinde kalıyor, bağlantı manşetin
altında duruyor. **İkinci bir otorite doğmuyor**, dolayısıyla bayatlayacak
bir dizin satırı da yok.
📌 Bunu buraya yazıyorum ki bir sonraki oturum onu **açık kalem
sanmasın** — `§11`in kendi dersi: *"ödenmiş bir borç kayıtsız kalırsa
yeniden İŞ diye bulunur."*
