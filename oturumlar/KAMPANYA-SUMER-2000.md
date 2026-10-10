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

### ⑤ 🔴 KOŞUDAN SONRA İNİŞ SIRASI — LİSTE DEĞİL, SIRA (10 Ekim, güncellendi)

⚠️ Bu bölüm bir LİSTEYDİ ve sekiz bağımsız diff birikince liste yetmez oldu:
diff'ler birbirine bağlı ve yanlış sırada inen doğru bir yama, kapıyı yanlış
ötürür. Beş faz, ve fazlar ARASINDA sıra bağlayıcıdır.

#### FAZ 0 — KOŞU 22 İNER ve YAYINLANIR, hiçbir şeyle karıştırılmaz
`kosu/22` dalından `git checkout kosu/22 -- <dosyalar>` · sonra `surum_damgala`
→ `denetle_yayin` → yayın. **Koşu çıktısı bayattır ve yine yayınlanır** (§9);
durduran yalnız koşunun kendi `denetle.py` ihlalidir. Aşağıdaki hiçbir diff bu
faza KARIŞMAZ — karışırsa "koşu neyi getirdi" sorusu bir daha cevaplanamaz.

#### FAZ 1 — KAPI ÖNCE: `SAHIPLIK-KAPSAM` + hüküm listesi
🔴 **Niçin veriden ÖNCE:** bu kapı, sessiz atlamayı çıkış 2'ye çeviriyor.
Veriyi önce indirmek, onu **görmeyen bir kapıyla** indirmektir — ve bu gecenin
ölçümü tam o: 104 inmiş yamadan 9'u / 10 kaydı **çıkış 0 ile sessizce atlandı.**
```
① denetle.py'nin BEDAVA katmanı: hüküm listesi DOSYA olarak denetlenir
   (dayanak çözülüyor mu · ölü satır var mı · dayanaksız satır var mı)
② hüküm listesi ilk içeriği: Akçahisar · Floransa · Ahıska (63bb90dd)
   + Timbuktu üçlüsü (HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906)
③ Honolulu · Mergen · Çehrin · Silistre · Şehrizor → hükmüm YOK ⇒ listeye
   GİRMEZ, çıkış 2 verir, borç GÖRÜNÜR kalır. Bu bir arıza değil, tasarım.
④ sınav İKİ YÖNDE: listedeki atlama 0 · listede olmayan atlama 2
```
⚠️ Ölçülmüş şart: `denetle_yayin.py` `_sahiplik_uygula`yı **hiç çağırmıyor**
(UMIT ölçtü, `:1376` yalnız metin taraması) ⇒ çıkış 2 yayını BLOKE ETMEZ.

#### FAZ 2 — VERİ (tuz DIŞI), bağımlılık sırasıyla
```
2a  SESSIZ-7 v2         🔴 ok107 satırı + BEKLENEN_BELGESIZ 4→3 + tavan
                           HEPSİ AYNI COMMIT'te (§3.4 ②)
2b  LAB-KONUM-ONERI v3b  v3.diff (9 TAŞIMA) → -v3-ikame.diff (Kandehar+Angkor)
                        → -v3-balasagun-not.diff → `paketle.py yenile` → sına
                        ⚠️ park: -v3-balasagun-tasima-BEKLER.diff (ikinci tanık yok;
                           not:'unda `[İKİNCİ TANIK BURAYA]` yer tutucusu var,
                           tanık yazılmadan İNEMEZ)
                        iniş SONRASI iki adım: ⓐ kademe_f5c9a5.js:81 yeniden
                           ölçülür, geri yazıyorsa AYNI commit'te düzeltilir
                           ⓑ yer_yama_1923_1945.js:1575/:7729 karantina şerhi
2c  Z5 v4
2d  KRONO-ONCE1281 A+B+C + index.html ÜÇ satır (C'ninki YOK) + paketle yenile
2e  Timbuktu tam zinciri + BEYAN_EDILEN_BOSLUK muafiyeti
2f  Urfa + Siverek (1465→1404 · 1507→1514 · 1516-05→1517)
    Lazkiye kol künyesi — 🔴 YALNIZ noktalarıyla BİRLİKTE (Cebele·Merkab·Baniyas)
    Merakeş Murâbıt · Antalya Aldobrandini · Ayla 1170 fatimi
    Trablusşam 1289-01-01 → 1289-04-26
2g  Taiz 13 dilimi · BOYA-BAYRAK-TEMIZ-1010 (94 ölü bayrak)
    NOKTA-ONCE1281-UCUZ (4 pencere · Silistre **1279**, 1189 DEĞİL)
2h  KASA-SUMER-SAHIPLIK (MÖ 539→MS 226) — geldiğinde
```
🔴 Her 2x'ten sonra `denetle.py`; **hepsi bittikten sonra `renk_olc.py`**
(palet verinin fonksiyonudur, renge dokunmadan çakışma doğar).

#### FAZ 3 — MOTOR PARTİSİ: tuz BİR KEZ değişir (§9.1 ②)
🔴 **FAZ 2 TAM İNMEDEN VE ÖLÇÜLMEDEN BAŞLAMAZ.** Sebebi aritmetik: tuz
değişince önbellek TAMAMEN ıskalar ve tam inşa **7-8 saat** (ölçüldü, HAVVA,
`uretim_canli.log`). Faz 2'de kalan bir veri hatası, ikinci bir GECEYE mal olur.
```
TUZ v3 — ALTI dosya · 🔴 `CLAUDE.md §9.1` "dört" → "ALTI" AYNI COMMIT'te
         (sınav bunu zorluyor; ayrılırsa kapı doğru çıktıyı reddeder)
NEGATIF-YIL-B (motor tarafı) · C3 tur 5 (ön şartı: gömülü dil listesi)
BOYA v2 (16) · Z6'nın 4 rengi · norvec-bagimsiz-1814 · resuli + tahiri
kibris-isaakios · `uret_petek.py:606` coğrafî süzgeç (gun.py + motor_onbellek.py,
   yukseklik.py DEĞİL) · 🔴 DEM .tif sha256 coğrafî tuza
🆕 HAVVA'nın iki kalemi — ÖNCELİKSİZ (ölçülmüş kazanç %3-9, `D270`):
   ⓐ işçi bitiş log satırı (ucuz, ÖNCE — teşhis kabiliyeti kazandırıyor)
   ⓑ devlet İÇİ gün bölmesi (~%9; ağırlık yeniden ölçeklemesi yalnız ~%3,
      çünkü TEK DEVLET BÖLÜNEMEZ ve İngiltere yalnız ~100 dk)
   ⚠️ Asıl kuyruk BAŞKA aşamada: dönemler 2s11 + ufuk bantları 57 dk
```

#### FAZ 4 — TAM İNŞA ve YAYIN
`uret_petek.py` (7-8 saat, HAVVA) → `uret_devirler.py` → `renk_olc.py` →
`denetle.py` → `surum_damgala.py` → `denetle_yayin.py` → yayın.

#### ARAÇ/ALTYAPI (faz dışı, sırası serbest)
`ARAC-TAHTA-NUMARA-1010` (TEMIZ-AGAC'tan SONRA oturur) · makine önekleri ilanı ·
`VERI-YAPISI.md` alan tablosuna `not:` eklenmesi (veride yerleşik 18+44 kayıt,
tabloda YOK — alan icat değil, TABLO EKSİK).

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

### §12 🔴 KAMPANYANIN MERKEZÎ SONUCU — atlasın nokta kümesi MÖ'nün kümesi DEĞİL

Gece boyunca iki kutu ölçüldü ve **ters sonuç verdi:**
```
SÜMER kutusu    → yoğunluk AÇILACAK    26 nokta + 1 dolgu ⇒ p95 111,4 km
                  🔴 ÖLÇÜLDÜ 10 Ekim 04:3x: o 26 noktanın HİÇBİRİ `data/`da
                  YOK, künyelerden yalnız `sasani` var ⇒ ölçüm ÖNERİ üzerinde.
                  **Bir kapının "AÇIK" olması, ölçülen kümenin CANLI olmasına
                  bağlıdır; ÖNERİLEN küme üzerinde ölçülen kapı AÇILACAK'tır.**
                  İkisini aynı kelimeyle anmak, yapılmamış işi yapılmış gösterir.
ANADOLU kutusu  → HİÇBİR KESİTTE AÇILMIYOR
                  MÖ 3000 620 · 2000 484 · 1500 484 · 1000 455 · 500 378 km
```
**Niçin biri açıldı öteki açılmadı** — cevap iki ölçümü yan yana koyunca çıkıyor:
```
Sümer noktaları   = HÖYÜKLER (Girsu · Tutub · Eşnunna · Ubaid · Nina …)
                    ⇒ MÖ tasdikli, çünkü MÖ'nün yerleşimleri ONLAR
Anadolu noktaları = MODERN ŞEHİRLER (Ankara · Kayseri · Konya · Sivas …)
                    ⇒ MÖ tasdiki YOK, çünkü MÖ'de o şehirler yok
ve §6.2 kanıtı:  147 Anadolu noktasının 40'ı (%27) yanında AYRI bir antik site taşıyor
```

> 🔴 **ATLASIN NOKTA KÜMESİ BİR MODERN/ORTAÇAĞ YERLEŞİM KÜMESİDİR.
> MÖ, KENDİ NOKTA KÜMESİNİ İSTER.**

Bu, `§6`nın sırasına (dizin → yoğunluk → pencere) **dördüncü** bir şart
ekliyor: *noktalar O DÖNEMİN yerleşimleri mi?* Bir kutuda yoğunluk eşiği
sağlanıyor görünüyorsa, bunun sebebi noktaların **o dönemde var olmaması**
olabilir (`MIMARI §5.1b`: Anadolu'nun bugünkü 67 km'si tam böyle doğmuş).

**EMRE'NİN KARARI — üç seçenek, ölçülmüş bedelleriyle:**
| | seçenek | ölçüm | koordinatör önerisi |
|---|---|---|---|
| (i) | MÖ Anadolu kesitleri **KAPALI/ölçülemedi** beyanı | bedeli 0 | ✅ **EVET, hemen** |
| (ii) | **höyük tabanlı ayrı site katmanı** | 🆕 **ÖLÇÜLDÜ** — 118 nokta ⇒ SINIR · 498 nokta ⇒ MÖ 500 AÇ | ✅ sonraki faz |
| (iii) | MÖ 500'den başlatmak | TASDİKLİ'de **378 km, KAPALI** | ❌ reddedildi |

(iii) niçin reddedildi: eşiği aşmayan bir başlangıç, başlangıç değildir.
(ii) niçin tek işleyen yol: **MÖ'nün yerleşimleri höyüklerdir** — Sümer'de
zaten böyle yaptık, Anadolu'da yapmadık. Fiyatı `KASA-HOYUK-KATMAN-1010`
ölçüyor: Anadolu kutusunda Pleiades'te MÖ tasdikli kaç höyük var, kaçı
atlasta yok, ve o noktalarla kutu **açılıyor mu.**

⚠️ Ve bir şey daha ölçüldü: kutuyu açmanın tek "kolay" yolu **sınıflanmış
C'leri MÖ 3000'de 'var' saymak** (~90 nokta) — ve bu **kaynağın söylediğinin
TERSİ.** Yani kutu, ancak ölçümü yok sayarak açılıyor.

#### §12.1 🆕 (ii)'NİN FİYATI ÖLÇÜLDÜ — `KASA-HOYUK-KATMAN-1010`

Hükmüm bir öngörüydü; **sayıyla doğrulandı ve fiyatı çıktı.** Kaynak Pleiades
dökümleri (2026-10-09), TAVO satırları süzülerek (`§5.1b` TAVO hükmü):
```
Anadolu kutusunda Pleiades yeri 3.354 · TAVO-DIŞI MÖ etiketli 684
```

| kesit | MÖ sitesi | atlasta YOK (>3 km) | p95 (site + TASDİKLİ) | kapı |
|---|---|---|---|---|
| MÖ 3000 | 37 | **35 (%95)** | 186,1 / azamî 254,8 | 🟡 SINIR |
| MÖ 2000 | 67 | 63 | 158,1 | 🟡 SINIR |
| MÖ 1500 | 67 | 63 | 148,8 | 🟢 AÇ — ama **kırılgan** (yalnız `precise` 151,3 ⇒ SINIR) |
| MÖ 1000 | 98 | 90 | 172,4 | 🟡 SINIR |
| MÖ 500 | 462 | **412 (%89)** | 86,9 | 🟢 AÇ |

🔴 **ÜÇ SONUÇ:**
1. **§12'nin merkezî hükmü SAYIYLA DOĞRULANDI.** "Atlasın nokta kümesi MÖ'nün
   kümesi değil" bir yorum değil **ölçüm**: MÖ sitelerinin **%95'i** (MÖ 3000)
   ve MÖ 500'de bile **%89'u** atlasta YOK. Örtüşme neredeyse sıfır.
2. **KAPALI, HİÇBİR KESİTTE KALMIYOR.** Azamî her kesitte ≤255 km; atlas
   noktalarıyla 455-620 olan TASDİKLİ ölçüm **kabaca üçte bire** iniyor.
   Yani (ii) işliyor — ama MÖ 3000-1000'i **AÇ'a getirmiyor, SINIR'a getiriyor.**
3. **Pleiades YETMİYOR.** Erken kesitlerde AÇ için **Pleiades dışı** höyük
   envanteri (TAY vb.) şart; erişim/lisans henüz ölçülmedi.

📌 **MÖ 1000'in MÖ 1500'den KÖTÜ olması bir kusur değil, GERÇEK:** Hitit
etiketleri MÖ 1200'de bitiyor. Eğri monoton değil çünkü kaynak monoton değil.

🆕 **VE BİR ŞÜPHE ÖLÇÜMLE KAPANDI:** `§5.1b`de "Mersin'in MÖ 6000'i büyük
olasılıkla ayrı bir höyük (Yumuktepe)" diye yazılmıştı — **doğrulandı:**
Yumuktepe = Pleiades 12504073, atlas Mersin'ine **2,57 km**. Çukuriçi de
atlas noktasına 2,55 km'de AYRI bir höyük. ⇒ `HUKUM §6.2`nin ("tanık yanlış
nesneyi ölçüyor") iki yeni vakası, ve **ikisi de 3 km eşiğinin ALTINDA** —
yani yakınlık ayrı nesne olmadığını göstermiyor.

🔴 **KATMAN GELİRSE İKİ ŞART** (KASA'nın önerisi, kabul edildi):
```
① Yumuktepe · Çukuriçi AYRI NOKTA olur (Milid deseni · §6.2 ikame)
② kur:/t: dönem aralığının UÇLARINDAN alınır — höyükler TERK EDİLDİ,
   "başlangıçtan beri var" SAYILMAZ
```
②'nin sebebi: terk edilmiş bir höyüğü sürekli saymak, `§6.3`ün
(koordinat zamana bağlıdır) **varlık yüzüdür** — nokta vardı ama o tarihte
YOKTU, ve bu da bir sahiplik yalanı üretir.

**EMRE'YE TEK CÜMLE:**
> *"Anadolu MÖ'sü atlas noktalarıyla KAPALI (455-620 km), Pleiades höyük
> katmanıyla SINIR (149-186), MÖ 500'de AÇ (87); erken kesitlerde AÇ için
> Pleiades dışı envanter gerekir."*

---

### ⑦ MÖ İÇİN SIRADAKİ KAPI — `§6`nın kuralı
`MIMARI.md §5`e bu gece yazıldı: **AÇ = p95 ≤150 km VE azamî ≤300 km.**
Sümer kutusu için **13-20 kaynaklı nokta** gerekiyor (KASA'nın 10 adayıyla
3-10 eksik). ⚠️ Ve `arac/denetle_kapsama.py` **hâlâ YOK** ⇒ bu ölçüt kapıya
BAĞLI DEĞİL; bir faz onu geçer ama hiçbir kapı SORMAZ. Açık kalem.
