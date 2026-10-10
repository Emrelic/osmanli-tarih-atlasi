# KAMPANYA — SÜMER'DEN 2000'E (10 Ekim 2026)

**Emre'nin emri, birebir:** *"sabaha kadar çalış ve sümerlerden 2000 senesine kadar
atlasın kapsamının genişletilmesi işini yürüt. 5 bilgisayar olarak çalışın. her
bilgisayarı yapabildiğin kadar kullan. hazır kıta oturumlarını da kullanabilirsin.
token tasarrufuna dikkat et. TAM YETKİLİSİN."*

🔴 **BU BELGE, UZUN GÖREV MESAJLARININ YERİNE GEÇER.** Koordinatör beş makineye
beş uzun mesaj yazmak yerine bunu diske yazar; mesajlar **kısa işaret** olur
("şartnamen bu belgenin §X'i"). Token kuralı gereği böyle (Emre: *"token
tasarrufuna dikkat et"*). Belgeyi **kendi işini bulup okursun**, baştan sona değil.

---

## §0 ÖNCE BUNU OKU — İKİ KURAL, İSTİSNASIZ

**① AĞACIN GERİDEYSE DUR.** `git fetch origin --quiet` sonra
`git rev-list --count HEAD..origin/main` → **0 değilse ÖLÇME**, koordinatöre yaz.
Ölçüm ayrı worktree'de: `git worktree add <yol> origin/main --detach`.
Geride bir ağaçta ölçülen sayı yanlış değil — **BAŞKA BİR ATLASIN** sayısıdır.

**② ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR.** Kaç bekliyorsun, hangi kovada. Sonra ölç,
sonra tuttu/tutmadı yaz. Boş küme her öngörüyü doğrular; **"bulamadım" bir
SONUÇTUR** ve sayıyla yazılır.

---

## §1 HEDEF VE NEDEN BUGÜN YAPILAMIYOR — dört engel, ölçüldü

Bugünkü çekirdek **1281-1923**. Hedef **MÖ ~3000 – MS 2000**. Dört engel ölçüldü
(9 Ekim, bağımsız doğrulandı):

| # | engel | ölçüm |
|---|---|---|
| ① | **MÖ verisi HİÇ YOK** | en eski künye `sasani` **0226**; MÖ künye 0, MÖ yerleşim 0 |
| ② | **gün sayacı negatif yılı çeviremiyor** | `gunIdx("-2999-01-01")` → **2149-11-01** |
| ③ | **tarih ayrıştırma** | `fromisoformat` negatif yılda ValueError; dizgi sıralaması negatifi TERS çeviriyor |
| ④ | **`gun.py` / `js/gun.js` TÜKETİCİSİZ** | yazıldı, commitlendi, ama hiçbir şey çağırmıyor |

⇒ ①③④ ayrı ayrı çözülebilir ve **birbirini beklemez.** Kampanya bu yüzden
paralel yürür.

### Astronomik yıl numaralandırması — her kayıtta geçerli
```
MÖ 3000 = -2999        MÖ 1 = 0        MS 1 = 1
YIL 0 VARDIR.
```
🔴 Bu dönüşüm her kayıtta **AÇIKÇA** yazılır (`MÖ xxxx ↔ -yyyy`). Yazılmazsa veri
sessizce bir yıl kayar ve hiçbir kapı bunu yakalamaz.

---

## §2 SIRA ZORUNLUDUR — §6'nın kuralı (atlanamaz)

> **Dizin katmanı → yerleşim yoğunluğu → harita penceresi.**
> Nokta yoğunluğu sağlanmadan pencere AÇILMAZ (kenar petekleri dünyaya yayılır).

⇒ MÖ için sıra: **künye (dizin) → nokta → ufuk.** Ufku açan commit, nokta
yoğunluğu ölçülmeden inmez. Bu kural kampanyanın omurgasıdır; "bir deneyelim"
diye atlanamaz çünkü atlandığında harita bozulur ve 7-8 saatlik koşu çöp olur.

### Bu gecenin somut adımı: 1923 → 1945
ZAMAN-PAKET-v2 ufku `1923-10-29` → `1945-09-02` taşıyor (`js/app.js:90` ·
`arac/girdi.py:717`). **KOŞU 22 bu paket olmadan başlatıldı ve durduruldu**
(00:11:25 → 00:23:49, 12 dk 24 sn). Paket inince yeni tabanla yeniden başlar.
📌 Yani bu gece MÖ açılmıyor; **1945 açılıyor.** MÖ'nün malzemesi bu gece HAZIRLANIYOR.

---

## §3 KRONOLOJİ HÜKÜMLERİ — koordinatör kararı, tartışma kapandı

Bunlar KASA'nın `KASA-MO-DIZIN-1009`da sorduğu üç soruya ve türevlerine cevaptır.
**MÖ veri yazan/öneren herkes bunlara uyar.**

### ③-a MÖ ~1500 öncesi hassasiyet: `onyil`
Tarih **biçimi** değişmez (`YYYY-01-01` kalır); değişen **hassasiyet alanıdır**.
`kesinlik:` yeni değer alır: **`onyil`**. `D213`: hassasiyet tarih biçiminden değil
**AÇIKLAYAN ALANDAN** okunur — `-2499-01-01` hem "tam o gün" hem "o onyıl" demek
zorunda kalmaz. Türetilmiş uçlara `ic_not_f` / `ic_not_t` ile **"🔴 TÜRETİLMİŞ,
ÖLÇÜM DEĞİL"** yazılır.
⚠️ `D210` yürürlükte: **yıl bilinmiyorsa yıl YAZILMAZ.** `onyil` "yılı bilmiyoruz
ama onyılı biliyoruz" demektir; "yıl uyduralım" demek DEĞİLDİR.

### ③-b Sümer `f` alt sınırı: **SAYI SEÇMİYORUZ**
`-2499` gibi bir taban **uydurmadır.** Alt sınır, kaynağın desteklediği en eski
tarihtir — ne daha eski ne daha yeni. Kaynak yoksa künye YAZILMAZ.

### ③-c Kronoloji okulu: **ORTA KRONOLOJİ, ve ADIYLA beyan edilir**
Mezopotamya tarihlemesinde orta/kısa kronoloji 56-64 yıl ayrışır. Kampanya
**ORTA KRONOLOJİ** kullanır. Her künyenin `kaynak:` alanına **hangi okul**
olduğu yazılır. İki okulu aynı dizinde karıştırmak, 11 künyeyi birbirine
göre 60 yıl kaydırır — KASA bu ayrışmayı 11 uçta ÖLÇTÜ.

### ③-d Hitit: **İKİ KÜNYE, ama önce SINIFLANDIR**
Eski Hitit Krallığı ve Hitit İmparatorluğu ayrı künye olabilir — ama `D205`
sınıfı önce belirlenir: ① devlet öldü mü ② aynı polity mi sürüyor ③ ardıl yapı
mı geçti. **Sınıf yazılmadan künye yazılmaz;** üç sınıfın çaresi TERSTİR.

### ③-e Kaynaksız kayıt: **SİLİNMEZ, BEYAN EDİLİR**
(KASA'nın "Tarki 1501 silinsin mi" sorusunun cevabı.) Hiçbir gövdede
geçmeyen bir kayıt **dayanaksızdır, YANLIŞ olduğu ölçülmemiştir.** Silmek
bilgiyi yok eder; `D209`: *"bulunamadıysa `bulunamadı` yazılır."*
⇒ `kaynak: bulunamadı` + `ic_not` ile beyan. Silme yalnız **yanlışlığı
ÖLÇÜLEN** kayıt için.

### ③-f Halka (bayrak kuralı): çıkarım halka ALMAZ
(KASA'nın "Derne İspanya halka alınsın mı" sorusunun cevabı.) `D208`: halkaya
yalnız **kaynakta kesin okunan** "şu yer, şu tarihte, şu devletin" tanıklığı
girer. Örtülü, çıkarım, istisna cümlesi, bölgeden şehre taşınan hüküm GİRMEZ.
Çıkarımsa **HAYIR.**

### ③-g TDV'nin kapsamadığı coğrafya: akademik tur MEŞRU
(Sayram/Taraz/Termez/Külâb ve bütün MÖ coğrafyası.) §4: TDV'nin kapsamadığı
yerde akademik kaynak meşrudur ve `kaynak:` alanına **AÇIKÇA** yazılır.
Kırmızı çizgi aynen yürürlükte: forum · blog · içerik çiftliği · YZ metni ·
popüler tarih sitesi **YOK.**

---

## §4 MAKİNE DAĞITIMI — kim neyi yürütür

| makine | rol | bu kampanyadaki işi |
|---|---|---|
| **EMRELIC** | koordinatör · paketleyici | iniş · tavan · hüküm · birleştirme · ölçüm kıtaları |
| **UMIT** | yazıcı (kod) | **②③④ engelleri** — negatif yıl makinesi; ZAMAN paketi; motor partisi |
| **HAVVA** | koşucu · yayıncı | tam inşa koşuları + yayın. Koşu dışında **boş durmaz**: log/süre ölçümü |
| **KASA** | araştırmacı (yalnız metin) | **① engeli** — MÖ künye + eksik şehir kaynaklandırma |
| **LAB** | denetleyici | **§6 ön şartı** — nokta yoğunluğu ızgarası + beş denetleme türü |

🔴 **DOSYA SAHİPLİĞİ DEĞİŞMEDİ** (§7): `yerlesimler.js` · `uret_petek.py` ·
üretilen `data/*.js` · kök `*.md` **koordinatörde.** İşçi ÖNERİR, koordinatör YAZAR.
`main`in tek yazıcısı koordinatördür; her makine kendi dalına push eder
(`tahta.py`nin kendi push'u istisnadır).

---

## §5 UMIT — negatif yıl makinesi (engel ②③④)

**Sıra ÖNEMLİ, ve ④ ilk:** `gun.py`/`gun.js` yazıldı ama **tüketicisi yok.**
Tüketicisiz bir çeviri katmanı, sınavı geçse bile atlası değiştirmez — bu gece
ölçülen ders: *"sınav geçti" ≠ "dosya indi" ≠ "bir şey kullanıyor."*
```
⓵ TÜKETİCİ BAĞLA   gun.py / js/gun.js'i çağıran NE olacak — adıyla
⓶ gunIdx           negatif yılı doğru çevir (bugün -2999 → 2149-11-01 veriyor)
⓷ AYRIŞTIRMA       fromisoformat yerine negatif-güvenli ayrıştırıcı
⓸ SIRALAMA         dizgi sıralaması negatifi ters çeviriyor — sayısal sıraya geç
⓹ SINAV            her biri İKİ YÖNDE: doğru çeviriyor · yanlışı YAKALIYOR
```
🔴 Bu dosyalar **TUZDA olabilir** (`girdi.py` tuzda). Koşu SÜRERKEN tuza
dokunulmaz (`§9.1③`). Yamalar `denetim/*.diff` olarak bekler, `--check` temiz
tutulur, ve **tek motor partisinde** iner (`§9.1②`).
**Motor partisinin bekleyen kalemleri:** C3 yürüyüş diş süzgeci (tur 5) ·
Z6'nın 4 rengi · BOYA v2'nin 16'sı · TUZ-DÖRDÜNCÜ-DOSYA yaması · negatif yıl.

---

## §6 KASA — MÖ dizin katmanı (engel ①)

Yalnız metin. **Künye YAZMAZ, ÖNERİR.** §3'ün hükümlerine uyar.
```
① SÜMER ŞEHİR DEVLETLERİ   Uruk · Ur · Lagaş · Kiş · Nippur · Eridu · Umma ·
                            Şuruppak · Adab · Larsa
② HANEDANLAR               Akad · Ur III · Isin · Larsa · Babil · Asur · Hitit · Elam
③ MISIR                    Erken/Eski/Orta/Yeni Krallık + ara dönemler
④ EKSİK ŞEHİRLER           LAB'in bulduğu, atlasta HİÇ OLMAYAN 89 şehir (653 adaydan)
⑤ ÇELİŞKİLER               kayıt kaynağı anıyor ama kaynakla çelişiyor (ör. Urfa 61 yıl)
```
Her künye: ad · `f`/`t` (+ `kesinlik`) · `bolge` · başkent · `kaynak` (+ kronoloji
okulu) · astronomik yıl dönüşümü açıkça.

---

## §7 LAB — §6'nın ön şartını ÖLÇ (artık sıranın başında)

🔴 **ÖNCELİK DEĞİŞTİ:** "nokta yoğunluğu ızgarası" sıradan ÖNE alındı, çünkü
Emre'nin yeni emri kapsam genişletmesidir ve `§2`nin kuralı *pencere açmadan
önce yoğunluk* diyor. Yani bu ölçüm artık bir merak değil, **kapının kendisi.**
```
IZGARA   bölge × yüzyıl → nokta sayısı
SORU     hangi bölge/yüzyıl bir AVUÇ noktayla boyanıyor
ÇIKTI    pencere açılabilir bölgeler · açılamaz bölgeler · eşik ÖNERİSİ (hüküm DEĞİL)
MÖ ayağı  MÖ'de nokta 0 ⇒ "ne kadar nokta gerekli" sorusunun cevabı buradan çıkar
```
Beş denetleme türü (Emre'nin kendi listesi) devam: ① ölü devlet etiketi ·
② enklav ✓ · ③ şehir kronolojisi · ④ eksik devlet · ⑤ eksik şehir ✓.
Artı: `(b)` 21 YALAN-0'ın risk sıralaması — bir yayın onların üstünde duruyor.

---

## §8 TOKEN DİSİPLİNİ — Emre'nin açık talimatı

```
· Rapor TEK mesaj. Satır satır yazma. Ekrana yazılan rapor koordinatöre ULAŞMAZ.
· HERKES'e mesaj ATILMAZ (ACİL/DURDURUCU değilse kimseyi uyandırmaz, tur yakar).
· Boş uyandıysan EKRANA HİÇBİR ŞEY YAZMA; bekçiyi sessizce kur ve dur.
· Bekçinin 2 SAATLİK süre tavanı var — düşmesi ARIZA DEĞİL, SINIR. Sessizce kur.
· İş toplanır: aynı oturuma gidecek işler TEK sıcak pencerede verilir.
· Uzun görev şartnamesi MESAJA yazılmaz, BU BELGEYE yazılır; mesaj işaret eder.
```
Üçlü kural her teslimde: **① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum.**
Teslim mesajının sonuna: **"bekçimi öldüreyim mi?"**

---

## §9 BU GECENİN AÇIK DURUMU (koordinatör günceller)

```
main                  6e625e15
KOŞU 22               DURDURULDU 00:23:49 — tabanında ZAMAN paketi yoktu
                      HAVVA hazır, yeni taban SHA'sını bekliyor
KRİTİK YOL            ZAMAN-PAKET-v2 (UMIT) → in → HAVVA yeniden başlat
KOSU dondurması       YÜRÜRLÜKTE (7 Ekim, token gerekçeli). `ac` KİMSEDE AÇIK DEĞİL.
tavanlar              8a 1508 (ölçüm 1517, +9 payı AYRILMADI — tavana YAZILMADI)
                      D7 731 🧊 Emre'nin dondurması · kaynaksız s: 1930 (LİSTE)
```
🔴 **TAVAN KURALI:** tavanı İŞÇİ ÖNERİR, KOORDİNATÖR YAZAR. Bir sayaca **birden
çok diff dokunuyorsa tahmin TUTMAZ** — bu gece dört kez ölçüldü (Harput ve EEK
ikisi de "126→125" dedi, birlikte ölçülünce **124** çıktı). Teslimde şunu yaz:
*"bu sayaca kaç diff dokunuyor."*

---

## §10 KOŞU 22 BİTTİĞİNDE — sıra, ve hiçbir şey beklemesin

Koşu ~09:00'da bitiyor. **Bu bölüm sabah tartışılmasın diye şimdi yazıldı.**

### ① HAVVA'nın koşu sonu zinciri (kendi emrinde var, burada da dursun)
```
uret_devirler → renk_olc (VERİ DEĞİŞTİ ⇒ ŞART) → denetle → denetle_yayin → surum_damgala
```
Her birinin **ÇIKIŞ KODU komutun KENDİSİNDEN** okunur (`| tail; echo $?` YAZILMAZ).

### ② RAPORA GİRMESİ ŞART OLAN ÜÇ SATIR — adıyla sorulmuş sorular
```
8a Hanak: KAYBOLDU / KALDI
    KAYBOLDU ⇒ bayat gövde eseriydi, tavan 1508'de KALIR, kalem KAPANIR
    KALDI    ⇒ VERİ kusuru, Hanak adıyla parti maddesi olur
TEHUANTEPEC: yayındaki harita 1523-58 ingiltere / 1849-50 abd boyuyordu
    (DALGA 1'de düzeltildi) — taze gövdede DÜZELDİ Mİ
1000-1280 DİLİMİ: haritada nasıl GÖRÜNÜYOR (81 boyalı ada / 2.741 boş site)
```

### ③ ÇIKIŞ 1 GELİRSE — yayın DURUR, koordinatör karar verir
Tek ihlal `8a` ise **yayınlanmaz, koordinatöre yazılır.** `8a` ÖNCE ölçümü
**1517** (tavan 1508, +9) ve **+9'un payı AYRILMADI** (gövde mi / hat mı /
nokta mı). Taze gövde bu ayrımı mümkün kılan tek şey; tavanı koordinatör
o ölçümü gördükten sonra yazar (`§3.4④`).

### ④ ÜÇ SAYI PAYI AYRILMADAN TAVANA YAZILMAZ
```
kaynaksız s:  1930 → 1834   İYİLEŞME ama ufuk değişti ⇒ "ölçme biçiminden
                            gelen iyileşme YALANCIDIR" · payı ayrılacak
YIL-TEMSİLÎ   228 > 151     aynı sebep · DOKUNULMADI
D7            739 → 800     Emre'nin dondurması yürürlükte · DOKUNULMADI
2s AÇIK       193           YENİ KAPSAM, 12 birim adıyla · 8'i kapandı
                            (KRONO-ONCE1281 A/B/C) ⇒ üçü BİRLİKTE ölçülüp inecek
```

### ⑤ KOŞUDAN SONRA İNECEK, HAZIR BEKLEYENLER
```
MOTOR PARTİSİ (tuz bir kez değişir, §9.1②) — tam inşa gerektirir:
  C3 yürüyüş diş süzgeci (tur 5) · Z6'nın 4 rengi · BOYA v2'nin 16'sı
  TUZ-DÖRDÜNCÜ-DOSYA yaması · norvec-bagimsiz-1814 boyası
  NEGATIF-YIL-B (motor tarafı) · C3'ün ÖN ŞARTI: gömülü dil listesi
VERİ (koşudan sonra, tuz dışı):
  KRONO-ONCE1281 A+B+C → index.html ÜÇ satır (C'ninki YOK, eklenecek) + paketle
  LAB-KONUM-ONERI: 4 KESİN + 4 YAN-KESİN + 2 İKAME koordinat düzeltmesi
  Urfa + Siverek zinciri (1465→1404 · 1507→1514 · 1516-05→1517)
  Lazkiye kol künyesi — 🔴 YALNIZ noktalarıyla BİRLİKTE (Cebele · Merkab · Baniyas)
  Merakeş Murâbıt dönemi · Antalya Aldobrandini künyesi · Ayla 1170 fatimi
  Trablusşam penceresi 1289-01-01 → 1289-04-26
ARAÇ/ALTYAPI:
  ARAC-TAHTA-NUMARA-1010 (TEMIZ-AGAC'tan SONRA oturur) · makine önekleri ilanı
```

### ⑥ KOŞUDAN SONRA ÖLÇÜLECEK — bu gece ölçülemeyenler
```
D8          ÖNCE 8a 1517 · 8b 82 · konum 0 · 8k 78 (taban 3429ead9 + KOŞU 21 gövdesi)
            🔴 ÜÇ ölçüm gerekiyor, ikisi değil:
               ① ÖNCE (var) ② YENİ TABAN + ESKİ gövde ③ SONRA (yeni gövde)
            ①→② farkı YENİ KAPSAM · ②→③ farkı koşunun GERÇEK etkisi
H-0011/H-0003  piksel ÖNCE alındı (sahne.json + sor.js commitli) ⇒ SONRA birebir
①④ SONRA ayağı  LAB'de, 61 ölü kimlik boyası + dizinsiz kimlik
C3 ön şartı     ≤2 hücre enli gömülü dil listesi (HARITA-DIL-OLCUM-1009)
```

### §11 🔴 KAYNAKSIZ KAYIT YANLIŞ ÇIKIYOR — ölçülmüş korelasyon (10 Ekim)

KASA Yemen bölgesini ölçtü (`denetim/KASA-YEMEN-RESULI-1010.md`) ve çıkan
şey tek bir şehrin hatası değil:
```
Resûlî döneminde `yemen` (Zeydî) yazan 7 nokta
  → YEDİSİ DE 1281'de başlıyor  ·  YEDİSİ DE KAYNAKSIZ
  → kontrol edilebilen 4'ü YANLIŞ (Taiz · Hudeyde · Kemeran · Ebha)
kaynaklı iki nokta (Zebîd · Aden)
  → İKİSİ DE DOĞRU SAHİPTE
Taiz tek başına: 1281-1535 arası 254 YIL yanlış sahipte, 13 dilim gerekiyor
```
⇒ **`kaynak:` alanının VARLIĞI doğruluğu ÖNGÖRÜYOR.**

🔴 **VE BU, `kaynaksız s:` SAYACININ ANLAMINI DEĞİŞTİRİYOR.** Bugün onu
*"beyan borcu"* diye okuyoruz (tavan **1930**, ölçüm **1841**, `§3.4` gereği
dondurulmuş). Yemen oranı genelleşirse o sayı bir beyan borcu değil
**bir YANLIŞLIK TAHMİNİDİR** — yani atlasın bilmediği değil, **yanlış
bildiği** kayıtların sayısı.

📌 Ve bu, `§4`ün kaynak disiplininin niçin var olduğunun **ilk sayısal
kanıtı**: kural bugüne kadar "iyi uygulama" diye duruyordu.

**AÇIK İŞ — `KAYNAKSIZ-ORNEKLEM-1010`:** 1841 kaynaksız `s:` kaydından
**beyanlı rastgele örneklem** (tohum yazılı, n ≥ 40, bölgeye orantılı
tabakalı) çekilip her biri TDV/akademik kaynakla karşılaştırılacak.
```
ÇIKTI   doğru / yanlış / ölçülemedi oranı + %95 güven aralığı
         ve 1841'e genelleme
SORU    "kaynaksız s: bir BEYAN BORCU mu, bir YANLIŞLIK TAHMİNİ mi?"
ŞART    öngörü ölçümden ÖNCE · bölge dağılımı beyan edilecek
         (Yemen'in oranı bütün atlası temsil etmeyebilir — Yemen
          kaynaksızlığı YOĞUN bir bölge)
```
⚠️ Ve kapsamın sınırı şimdiden beyanlı: Yemen **7 noktalık** bir ölçüm.
7/7 bir desen gösteriyor ama **1841'i temsil ettiği ÖLÇÜLMEDİ.** Örneklem
tam bunu ölçecek.

---

### ⑦ MÖ İÇİN SIRADAKİ KAPI — `§6`nın kuralı
`MIMARI.md §5`e bu gece yazıldı: **AÇ = p95 ≤150 km VE azamî ≤300 km.**
Sümer kutusu için **13-20 kaynaklı nokta** gerekiyor (KASA'nın 10 adayıyla
3-10 eksik). ⚠️ Ve `arac/denetle_kapsama.py` **hâlâ YOK** ⇒ bu ölçüt kapıya
BAĞLI DEĞİL; bir faz onu geçer ama hiçbir kapı SORMAZ. Açık kalem.
