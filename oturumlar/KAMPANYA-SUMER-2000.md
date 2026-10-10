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
2h  KASA-SUMER-SAHIPLIK (MÖ 539→MS 226) — geldi: 15 nokta zinciri
2l  🆕 HİCRÎ UÇ DÜZELTMELERİ (KASA, dört tur) — `data/devletler.js`
    78 dış uç + 10 ardıl çifti. 🔴 ARDIL ÇİFTLERİ **BİRLİKTE** iner
    (tek taraflı kaydırma Değişmez 1 ihlali üretir):
      rasidin↔emevi 0661-07-29 · karahanli↔doğu/batı karahanli 1041-08-31
      midrari↔magrave 0976-08-30 · zengi-musul↔lului 1233-12-05
      kakuyi↔yezd 1141-08-06 · karmati↔uyuni 1076-08-05
      suve↔evfat 1285-03-09 · yezd↔muzafferi 1318-03-05
    ADIYLA tekil uçlar:
      sasani t 0651-08-24 · hulefa-yi-rasidin f 0632-06-04 (ay, alt sınır
      çıkarımı BEYANLI) · memluk f 1250-07-03 + `__BOSLUK__` (N) 04-30…07-03
      hamdani-yemen f 1098-11-28 · eyyubi-hisnikeyfa f 1232-10-18 (SEÇİM,
      alternatif `hasankeyf` 629 → `ic_not`) · akkoyunlu t 1514-02-26
      trablusgarp-ocagi f 1551-01-09 · yemen-zeydi f 0897-02-08
      kirman-selcuklu f/t 1048-06-16 / 1187-03-13 (2i ile AYNI commit'te)
    DEĞİŞİKLİK YOK ama `ic_not`a beyan: ziyadi f (⑧ başka olay) ·
      hamdani-yemen t (yapısal ±1, geçerli) · muvahhidler t (kaynak kendiyle
      çelişiyor ⇒ ÖLÇÜLEMEDİ, üç yıl `ic_not`ta) · memluk Şecerüddür okulu
    ⚠️ `karakene` YAZILMAZ (tek kaynak livius/Lendering) — ERTELENDİ
2m  🆕 SAHİP DÜZELTMELERİ — `yerlesimler*.js`
    🔴 14 UYDURMA EGEMENLİK DEVRİ: `1281-01-01`de biten dönem AYNI GÜN başka
       sahiple sürüyor — 11'i Selçuklu→İlhanlı (Kayseri · Tokat · Sivas · Van ·
       Kırşehir · Erzincan · Erzurum · Bitlis · Elbistan · Kemah · Bayburt) +
       Sinop→Pervâne · Çankırı→Çobanoğulları · Ankara→Ahiler.
       **1 Ocak 1281'de böyle bir devir YOK.**
       ⚠️ ÖN ŞART: bu 14 kırılmanın kronoloji maddesi VAR MI? Varsa 14 UYDURMA
       MADDE de var ve iş iki katı (kronoloji dosyaları = başka sahipler).
       Sayım `KAYNAKSIZ-14-KIRILMA-1010`da, tahtaya yazıldı.
    9 ÖLÇÜLMÜŞ SAHİP HATASI (2. örneklem): Aydın (TDV 1282 Menteşe) ·
       Larissa (Tesalya Doukas) · Muhâ (Resûlî Tihâme) · Şelif (1351'e dek
       Mağrâve) · Müstegānim (1511 İspanyol / 1539 Osmanlı) · Lâhîcân (1305'e
       dek Nâsırvend) · Nazret (Oromo) · **Maumere (künye Timor, yer FLORES —
       `§3.5` "devlet var, YERİ yanlış")** · Buryat (1281-1368 Yuan, 87 yıl aşım)
    5 ÖRNEKLEM DIŞI tespit (oranı ETKİLEMEZ, düzeltilecek kalem):
       Vize 1413-53 · Ermenek 1397-1402 · Santorini · Purwokerto · Maan↔TDV 1916
    KASA-SASANI: Kutha `sasani` 0226→0637-03-04 · Susa `sasani` 0224→0640
       + `hulefa-yi-rasidin` ARDIL halkası (uç TEK BAŞINA inmez, delik açar)
       `kaynak:`a "bölge cümlesi, şehir adı geçmiyor"
    VARLIK uçları: Ur t −0316 · Nina t −0329 · Uruk t 0400 (`kesinlik:yuzyil`,
       van Ess *"im 4. Jh. aufgegeben"*) · Eridu t 0500 · Larsa t 0300
       + Dēr `ahameni` Ş (Kyros silindiri) + `__BOSLUK__` (K) beş pencere
2n  🆕 LAB KONUM — v3b (2b) ÜSTÜNE
    ada taramasından KESİN: Krk (6,0-6,3) · Pantelerya (v3b'de)
    **Hvar: KUSUR KESİN / TAŞIMA PARK** (`§6.5` — kimlik kategorik olarak
    kapanıyor, koordinat tek tanıklı: GN 3199180, 20,8 km)
    ADAY-GÜÇLÜ, ilk partiye GİRMEZ: Paros 4,7 · Mikonos 4,3 · Nio 4,2 ·
    İpsara 3,3 · Sömbeki 3,4 (nesne belirsiz ⇒ `§6.1` eşiği DÜŞMEZ)
2q  🆕 DÖRT YENİ KÜNYE (`devletler.js`, hepsi `boya_gerekli:true`)
    `nasirvend` · `sasa-bey-beyligi` · `dehlek-sultanligi` ·
    `tesalya-sirp-beyligi` — `f`/`t`/`kaynak` ADIYLA `KASA-KUNYE-4-1010`de
    ⚠️ `tesalya-sirp-beyligi` t ≈1372 (Nicol, Cambridge 1984) — **TDV 1393
       diyor, 21 YIL FAZLA.** `§4`: İslâm dünyası DIŞI ⇒ TDV birincil DEĞİL
    ❌ AÇILMAYANLAR, gerekçeli: `karakene` (tek kaynak livius/Lendering) ·
       `tesalya-angelos` (Nicol'da ne atama ne bağımsızlık cümlesi ⇒
       `__BOSLUK__` N) · güney Tunus aileleri (dört şehir devleti, ağır
       makine ⇒ `__BOSLUK__` N, künyeler ADAY) · Tebesse şeyhi (şeyh ≠ polity)
    🟡 ADAY künyeler kuyrukta: `cerbe-emirligi` (1480-) · `gattilusio`
       (Midilli Senyörlüğü — `D205`: AYRI polity, `ceneviz` DEĞİL)
2r  🆕 SAHİP DÜZELTMELERİ — 4 bölge + 130 nokta + 16 Cezayir
    `KASA-SAHIP-BOLGE-1010` · `-2-1010` · `KASA-CEZAYIR-16-1010`
    🔴 ASIL ORAN: kaynaklı halkada hata **0/27** · kaynaksızda **≥15/477**
       (Yemen'in "kaynaksız 7/7 yanlış" bulgusunun büyük ölçekte tekrarı)
    🔴 BASKIN DESEN (3 turda 3 kez): **"uzun düz dilim ARA sahipleri yutmuş"**
       — Cerbe `hafsi 1281-1560` Sicilya 1284-1334'ü ve 1480 istiklâlini ·
       Midilli `ceneviz 1281-1462` 1281-1354 Bizans'ı · Sisam iki Bizans
       dilimini + 1475-79 TERKİ yuttu
    🔴 Doğu Cezayir: **Zeyyânî iddiasını doğrulayan şehir SIFIR** ⇒ 5 nokta
       `hafsi` (Brunschvig 1940) · 12 `__BOSLUK__` (K)
    ⚠️ ÖLÇÜLEMEDİ, ADIYLA beyanlı: Fas 22 · Endülüs/Portekiz · Tunus içi ·
       Ege adaları · 22 çelişkili nokta ⇒ **tek künye maddesiyle KAPATILMADI**
       (`D208`: bölgeden şehre hüküm taşınmaz)
2s  🆕 LAB KONUM v2 — `LAB-AYNI-AD-TARAMA-v2-1010` (+ `-etki`)
    ablasyon: v1 358 → **231** (`9 KESİN / 205 ADAY / 17 ÖLÇ`)
    🔴 YÖN AYRIMI: tanım düzeltmeleri AZALTIYOR (−234), kapsam
       genişletmeleri ARTIRIYOR (+191) — net düşüş ikisini GİZLİYORDU
    8 KESİN = HAZIR 5 · **İKAME 1 (Egina, `§6.3`)** · PARK 2 (Hvar ·
       Xieng Khouang) · Kimolos ADAY'a indi (*kırılgan: 4 m*)
    `etki:` ekseni: Ulubat 12,43 km/405 km² · Zaklise 10,58/354 · Tshane
       3,39/1649 · üç havalimanı köyü listede ALTTA
    ⚠️ `etki` SONUCU ölçer, GÜVENİ ölçmez: ADAY-YÜKSEK'in uzakları
       (Brakya 103 km · Elba 78 · Peşte 67) **"önce ELLE BAK"** demek

#### 🔴 FAZ 1'İN İÇ SIRASI — üç diff, sıra BAĞLAYICI
```
① SAHIPLIK-KAPSAM-1010-v2   hüküm listesi + gruplu ölçülemedi + hızlı kip
                            (`--atlama-yalniz --json`, 12-19 sn)
                            tavan: BEKLENEN_TABAN_OLCULEMEDI = 190 (LİSTE
                            defteri, "NET TAKAS" kolu) — ÖNERİ, iniş anında
                            YENİDEN ölçülüp AYNI commit'te yazılır
② SAHIPLIK-KUR-KAPI-1010    YAZICI kapısı: `gun(f) < gun(kur)` ⇒ YAZMA
                            🔴 KAPSAM-v2 ile AYNI FAZDA ya da ÖNCE — çünkü
                            KAPSAM anahtar sırası körlüğünü kapatınca
                            Mergen'in TESADÜFÎ koruması KALKTI
③ D5-GUN-1010               DENETLEYİCİ: `gun.gun` · sayısal sıralama ·
                            `isg:` evrene · tolerans KALIR + "yuttu: N"
                            bilgi kovası (Berezov ADIYLA) · `5c` adlı kova
                            ve BAŞLIĞI DÜZELTİLDİ (80 kayıt için yanlıştı)
+ KASA DİKİŞ KAPISI v2      `ESKI_UFUKLAR` + `gun()` kıyası, TEK diff
                            (10/10 sınav; MÖ paketi BENZETİLEREK sınandı)
```
⚠️ `SAHIPLIK_HIZLI_HARIC` (Z5 karantinası) **Z5 v4 commit'inde kalkar** — ve o
commit'te defter + sabit **YENİDEN ÖLÇÜLÜR**, çünkü evren değişir.
2o  🆕 **İLK TAM ZİNCİR — Kutha + Susa, MÖ 539 → 1281 KESİNTİSİZ**
    Kampanyanın ilk tamamlanmış kalemi: iki nokta, **1.820 yıl.**
    ```
    MÖ 539 → MS 226   ahameni · makedon/selefki · part   (bağlı %44,1)
    MS 226 → 650      sasani                             (bağlı %24,3)
    MS 650 → 1281     rasidin · emevi · abbasi · buveyhi (bağlı %66,2)
    ```
    KUTHA  `abbasi` Ş (Ibn Khurdâdbih/Kudâma Sevâd listesi: *"…along the Kutha
           canal … sub-districts of Kutha"*) · `t: ≈1258` (Ibn Hawkal, 10. yy:
           *"Kutha Rabba … a city larger than Babil"*)
    SUSA   `abbasi` Ş + `buveyhi` Ş · 1281'e **ULAŞIYOR** (Mustawfî, 8./14. yy
           *"flourishing place"*)
    🔴 SUSA `§8` ÇAKIŞMASI ÇÖZÜLDÜ: iki Ş halkası aynı yıllara düşüyor
       (itibarî halife ↔ fiilî emîr) ⇒ **`d:` = `buveyhi` (FİİLÎ denetim)**,
       `ic_not`: *"itibarî hükümranlık `abbasi`de"*. Ölçüt `sasani` f'yi
       0224'e çekerken kullanılanın aynısı: **`d:` toprak DENETİMİNİ gösterir,
       hânedan MEŞRUİYETİNİ değil.** İkisini de `d:` yazmak dönem çakışması
       üretir; birini silmek kaynağı gizler.
    ⚠️ Emevî ve Selçuklu/İlhanlı dönemleri için şehir adlı tanık YOK ⇒ **B**
    ⚠️ Nippur son tasdik `0800` (Streck, Nestûrî piskoposu); RlA'nın 14. yy
       köyü **500 m ötede AYRI NESNE** (`§6.2`) — kaynağın kendi cümlesi
       *"long after the city had ceased to exist"*
    📌 Ve bir kaynak sınırı ölçüldü: bu kutuda TDV'de müstakil madde **0/6**
       (Kûsâ · Nüffer · Burs · Sûs · Bâdarâyâ · Sippar yok; `hille` 2,6 KB
       taslak; TDV `sus` = **Fas**). Tanık **Le Strange 1905** ve **RlA**'dan
       geldi. ⇒ `D217`/`D218`e sınır: TDV şehir-kişi ansiklopedisidir **ama
       Abbâsî dönemi Mezopotamya KASABALARI için değil** — taneciği belirleyen
       kasaba değil, **coğrafya + dönem ÇİFTİ.**
2p  🆕 **1281 İLK HALKA DÜZELTME PROGRAMI** (`KASA-1281-ILK-HALKA-1010`)
    Irak'ın 8 noktası + Anadolu'nun 14'ü aynı sınıf. Bölge+sahip çiftine göre
    gruplanır; *"o sahibin o bölgeye girişi TARİHLENEBİLİR bir olay mı?"*
    ```
    EVET       → gerçek gün + kaynak ADIYLA        ⇒ DÜZELTME
    HAYIR      → gerçekten bilinmiyor ⇒ 1281-01-01 MEŞRU (`D210`), DOKUNULMAZ
    ÖLÇÜLEMEDİ → ayrı kova
    ```
    🔴 Program `1281-01-01`i TOPLUCA MAHKÛM ETMEZ. Kaldıraç: `§4`ün *"komşu
    günü şartlı serbest"* kuralı — tek tarihlenmiş olay (Bağdat 1258-02-10)
    onlarca komşuyu düzeltebilir, **zincirleme devralma YASAK.**
```
```
2i  NOKTA-ONCE1281-ZINCIR  8 nokta / 33 pencere + 14 KRONOLOJİ MADDESİ +
                           `kirman-selcuklu` f/t düzeltmesi — 🔴 TEK COMMIT
2j  KASA-SUMER-VARLIK      Ur `t: −0316` · Nina `t: −0329` · Dēr `ahameni` Ş
                           + `__BOSLUK__` (K) beş pencere (İsin·Dēr·Dilbat
                           Selevkos-Part · Eridu bütün pencere · Nina Ahamenî)
2k  KUNYE-SUMER-7          6 künye (`ahameni·makedon·selefki·part·elymais` +
                           `sasani` f: 0226→0224) · künye 897→902 · +70/−7
                           🔴 ÜÇ ZARF DÜZELTMESİ AYNI DİFF'TE (ayrılırsa 4c kırılır):
                              makedon f: −0330-10-18 (Sippar ADART, 4 gün ÖNCE)
                              makedon t: −0308 (BCHP 3 "Year 8 … Borsippa")
                              selefki  t: ≥ −0129-06-01 (ara dilimi KAPSA)
                           ⚠️ makedon −0308 ↔ selefki −0311 ÜÇ YIL ÖRTÜŞÜR —
                              kusur DEĞİL: `§8`in çakışma yasağı BİR NOKTANIN
                              dilimleri içindir, iki künyenin ömrü için değil
                              (ve 311-308 Babilonya'da iki iddia yan yanaydı)
                           ⚠️ `karakene` YAZILMADI: `t:` yalnız livius/Lendering
                              222 ⇒ livius'ta BARINAN akademik çeviri (Grayson ·
                              BCHP · ADART) meşru, Lendering'in KENDİ metni
                              popüler tarih (`§4` kırmızı çizgi). ERTELENDİ;
                              Characene yılları tahminle `part`a YAZILMAZ (`D208`)
```

#### 🔴🔴 FAZ 2'NİN BİRİNCİ ÖN ŞARTI — **GENİŞLETME KAPISI**
*(KASA ölçtü, `KASA-1281-ILK-HALKA-1010`. Bu şart, MÖ paketinin YARATACAĞI bir
kusuru önceden kapatıyor — var olan bir kusuru değil.)*

`1281-01-01` **İKİ AYRI ŞEY**, ve ikisi tek sayıda okunuyordu:
```
Ⓚ KIRPMA       s[0].f = 1281-01-01, ÖNÜNDE halka YOK   765 nokta / 72 grup
               ⇒ UFUK işaretçisi · ZARARSIZ · `D210` gereği MEŞRU
Ⓖ SAHTE GEÇİŞ  bir halka 1281'de biter, BAŞKA sahip     13 nokta, hepsi
               aynı gün başlar                           ANADOLU
               ⇒ UYDURMA bir egemenlik devri · YALAN
```
🔴 **VE Ⓖ'Yİ, Ⓚ'YI GENİŞLETMEK YARATTI.** Mekanizma ölçüldü: o 13'ün 1281
öncesi halkaları `ZAMAN-Z6-1008` ile **eklendi**; eski `s[0]` kırpması, önüne
halka eklenince bir **sahip değişimi günü**ne dönüştü. **Kanıt: 13'ün hepsinde
`1281-01-01`de başlayan halkanın `kaynak:` alanı YOK, öncekinin VAR.**
⇒ **Sümer/MÖ paketi tam bunu yapacak** — 1281'in önüne halka ekliyor.

```
🔴 KAPI (FAZ 1'e, `denetle.py`): bir `s:` halkasının `f`si tam `1281-01-01`
   ise VE o halka s[0] DEĞİLSE ⇒ `kaynak:` alanı ZORUNLU.
   Yoksa İHLAL (ya da beyanlı istisna listesinde, dayanağıyla).
SINAV İKİ YÖNDE: kaynaksız 1281 halkası → İHLAL · kaynaklı → 0 ·
                 s[0] olan → DOKUNULMAZ
```
Gerekçe: önünde halka varsa `1281-01-01` **artık bir sınır işareti değil**,
iddia edilen bir **GEÇİŞ GÜNÜDÜR** — ve geçiş günü kaynak ister. Kapı 13'ün
13'ünü yakalar, Ⓚ'nin 765'ine **dokunmaz.**
> **Önüne halka eklenen her `s[0]`ın `f`si YENİDEN KAYNAKLANIR; kırpma günü
> geçiş günü olarak BIRAKILAMAZ.**

**SÖZLEŞME KARARI (`D271`):**
```
İLERİYE DÖNÜK : yeni yazılan ya da önüne halka EKLENEN her `s[0]` GERÇEK günü
                taşır, kaynağıyla. Kırpma YENİ VERİDE kullanılmaz.
MEVCUT 765    : olduğu gibi KALIR ve BEYAN edilir — Ⓚ'nin zararsızlığı ÖLÇÜLDÜ.
                765 noktayı yeniden kaynaklamak kampanyanın önüne geçer ve
                hiçbir yalanı düzeltmez.
```
⇒ **Zararsız veriyi toptan yeniden yazmak bir iyileştirme değil, bir MALİYET.**
⚠️ Ve komşu devralma Ⓚ'ye UYGULANMAZ: pencere-DIŞI bir gün yazılır, o bir
düzeltme değil **sözleşme değişikliğidir.**

**Ⓖ'nin 13'ü için modelleme kararı — 1308, ve 1243 AYRI BİR ŞEY:**
```
1243 Kösedağ → VESÂYET/TÂBİYET ⇒ `v:` alanı; `d:` DEĞİŞMEZ
1308 Selçuklu sonu → EGEMENLİK ⇒ `d:` selcuklu → ilhanli
```
İkisini tek güne yazmak `D206`nın tersi: **tâbi olmak ≠ ilhak edilmek**, ve
atlasta `v:` mekanizması tam bu iş için var. ⇒ 12 nokta `d:` **1308**
(`ic_not`: *"şehir adlı geçiş cümlesi bulunamadı; `selcuklu` künye t'si
devralındı, kaynaksızlığı beyanlı"* — `§4` izin veriyor ama künye günü bir
KAYNAK DEĞİLDİR, yani bu bir **beyanlı devir**, ölçüm değil).
🟢 **ERZURUM İSTİSNA — ölçüldü:** TDV `erzurum` *"Anadolu Selçuklu Devleti'nin
yıkılmasından (1308) sonra İlhanlılar'a bağlandıysa da…"* ⇒ şehir adlı ve
yıllı. `selcuklu` t → **1308** · `ilhanli` f → **1308**. 1281 orada **27 yıl
erken.** (Kalan 12'de TDV yalnız 1243'ü ya da iç olayları tarihliyor —
Tokat Pervâne'ye verildi · Elbistan 15 Nisan 1277 · Van Argun 1284-91 —
hiçbirinde **1281'de** bir geçiş cümlesi YOK.)
⚠️ Açık kalem: `Bayburt` — `EPOK-SAHIP-1008` 14 sayıyordu, bu ölçüm 13 buldu;
fark ADIYLA bırakıldı, kontrol edilmedi.

#### 🔴 FAZ 2'NİN ÖN ŞARTI — **NEGATİF YIL ÖLÇÜLMEDEN SÜMER NOKTASI İNMEZ**
`KUNYE-SUMER-7-1010`ın raporunun son cümlesi bir blokaj açığa çıkardı:
> *"`pad()` docstring 'negatif yıl `gun_no` ÇÖKER' ⇒ veri partisinden ÖNCE
> ölçülmeli."*
`NEGATIF-YIL-B` FAZ 3'te (motor partisi) yazılıydı — **yanlış yerde.** Sümer
noktalarının `kur:`/`t:` değerleri de negatif; `gun_no` negatif yılda çöküyorsa
noktalar **`s:`siz bile** inemez. ⇒ Paralel bir kalem değil, **ÖN ŞART.**
📌 Ve bunu künye diff'i **göstermedi**, çünkü künye `f:`leri inert: hiçbir
yerleşim o kimlikleri kullanmıyor, o yüzden `gun_no` hiç çağrılmadı.
*Bir kodun çökmemesi, çökmeyeceği anlamına gelmez — sadece ÇAĞRILMADIĞI.*
### 🔴🔴 ÖLÇÜLDÜ — CEVAP **HAYIR**: SÜMER NOKTALARI **FAZ 3**'E KAYDI
*(10 Ekim 05:5x. Sorulan soru: "NEGATİF-YIL-B olmadan FAZ 2'de inebilir mi?"
Cevap HAYIR, ve **iki BAĞIMSIZ ölçüm** aynı sonuca vardı — biri beklediğim
sebepten, biri HİÇ beklemediğim sebepten.)*

**① SESSİZ DELİK** (`NOKTA-SUMER-1010-K2`, simülasyon TEKRARLANABİLİR:
`denetim/NOKTA-SUMER-1010-K2-DELIK-SIM.py`):
```
motor, sahnede olmayan SAHİPSİZ peteği YALNIZ ≥%90 kuşatılmışsa devrediyor
   (`_kusatilmis`)
⇒ 22 nokta sahipsiz inerse:  22/22 BOŞ  ·  ~62.400 km²  ·  1000-1923 BOYUNCA
⇒ 🔴 ve Değişmez 1 BUNU GÖRMEZ
```
⚠️ Bu, K1'in *"`petek_epok` paylaştırır"* iddiasını ÇÜRÜTTÜ. ⇒ **`s:`siz nokta
indirmek bir ara çözüm DEĞİL, deliğin kendisi.**

**② ÇÖKME ve SESSİZ YANLIŞ** (`NEGATIF-YIL-OLCUM-1010`, altı senaryo ayrı
worktree'de AYNI ANDA):
```
TEK negatif dönem ⇒ `gun_no` (denetle.py:1491→1230) "year -53 is out of range"
   ⇒ 🔴 Değişmez 1b'den SONRA HİÇBİR DENETİM KOŞMUYOR
`_gun_farki` / `_d8_gun_once` negatifte ÇÖKMEZ, **sessizce None döner**
   ⇒ denetim ihlal GÖRMEZ   ·   `_d8_gun_once` 0001'de OverflowError
`js/suzgec.js` `gunKaydir` (-0538 → "0000-09-30", yıl 0 → "00-1-12-31") ve
`sahipAnahtari` (negatif dönemde "") SESSİZ YANLIŞ — ve ne A ne B bu dosyaya
   dokunuyor  ⇒ kapı TEMİZ der, KULLANICI yanlış harita görür (`D265` ailesi)
B'nin kodu main'e **İNMEMİŞ** (apply --check reddedildi: sınav dosyası main'de
   FARKLI sürümde, `gun.py`de `Tarih` yok)
```
📌 Ve iki isteğin ÇELİŞTİĞİ yer: NEGATİF-YIL *"noktalar DÖNEMSİZ insin"* dedi,
K2 *"inmesin"* dedi. **Dönemsiz nokta, K2'nin ölçtüğü deliğin TAM KENDİSİDİR.**
⇒ "Dönemsiz" şıkkı REDDEDİLDİ.

#### FAZ 3'ÜN SÜMER BLOĞU — hepsi AYNI TUZ DEĞİŞİMİNDE
```
ⓐ MOTOR YAMASI : sahnede olmayan nokta SAHİPSİZ de olsa DEVREDİLSİN
                 (`bos:` taşıyan HARİÇ — Kuveyt deseni)
                 🔴 KABUL SINAVI: K2'nin delik simülasyonu — yama inince
                    22/22 DOLU çıkmalı
ⓑ NEGATİF-YIL-B : `gun_no` · `_gun_no` · `_gun_farki` · `_d8_gun_once`
                 + 🔴 `js/suzgec.js` (ayrı kalem, AYNI parti)
ⓒ SÜMER NOKTALARI (21) — ⓐ ve ⓑ ile AYNI koşuda
ⓓ künye BAĞLAMA (KASA §1.2 zincirleri) — ⓑ'den SONRA
```
⚠️ Niçin hepsi tek tuz değişiminde: ⓐ ve ⓑ **motor tuzundadır** (`§9.1`), tuz
bir kez değişir ve o koşu zaten sıfırdan inşa eder. Ayrı inerlerse arada kalan
commit'te **ya delik ya çökme** olur.
🟢 **`KUNYE-SUMER-7` FAZ 2'DE KALIYOR** (kalem `2k`): künyeler **inert** —
hiçbir yerleşim o kimlikleri kullanmıyor, `gun_no` çağrılmıyor; ölçüldü
(senaryo s2: tabanla fark YALNIZ yerleşim sayısı 4300→4322).
📌 *Bir kodun çökmemesi, çökmeyeceği anlamına gelmez — sadece ÇAĞRILMADIĞI
anlamına gelir.* Bu cümle hem künyelerin FAZ 2'de kalmasını hem noktaların
FAZ 3'e kaymasını **aynı anda** açıklıyor.

#### ESAS DIFF: `NOKTA-SUMER-1010` **v2** (21 nokta)
v2, TAVO provenansını **satır satır** okudu, kendi v1 kuralını ÇÜRÜTTÜ ve
**Tutub'u ÇIKARDI** (bütün tarihli etiketleri TAVO).
🔴 **VE KASA'NIN TAVO GENELLEMESİ DÜZELTİLDİ:** *"late-antique etiketleri
yalnız TAVO satırlarındaydı"* bu kümede **TUTMUYOR** — Sippar · Dilbat · Kiş ·
Kutha · Uruk · Nippur'un late-antique'i **BARRINGTON** satırında
(Roaf/Simpson); yalnız **Ur**'unki TAVO. ⇒ `MIMARI §5.1b`nin TAVO hükmü
YERİNDE (TAVO sayılmaz) ama *"geç etiketler TAVO'dandır"* ÇIKARIMI yanlıştı.
**Kural ayakta, çıkarım düştü.**
```
GEÇERLİ TAVO-dışı geç tasdikler: Girsu -0549 · Marad -0029 · İsin -0329
                                 Kutha 0640 · Uruk 0640 · Nippur 0640 · Larsa 0300
`bit:` KURALI (onaylı): adlı hüküm > siteye özgü açıklama > son TAVO-dışı tasdik
KİŞ: açıklama ("abandonment under the Seleucids", -0139) ESAS
     ⚠️ BEYAN ŞART: Kutha/Uruk/Nippur'un 0640'ı AYNI Barrington satırından
     geliyor ve KULLANILIYOR; Kiş'te kullanılmamasının tek sebebi ÇELİŞEN
     AÇIK BİR CÜMLE olması
AD ÇAKIŞMASI: atlasta "Kiş (Kish)" = **Kays adası**, 1.127 km uzakta (`§6.2`)
ÖLÇÜLEMEDİ 2: Adab (TGN 12,48 km yuvarlak + iki CIGS aynı köken) ·
              Tell el-Lahm (tek kayıt) — K1 ve K2 BAĞIMSIZ olarak aynı hükmü verdi
```
📌 **ÇİFT ATAMA koordinatörün hatasıydı** (aynı görev iki kıtaya gitti: ilki
"undelivered" döndü, ikincisi korumalı gönderildi, sonra ikisi de uyandı). K2
üstüne yazmayıp `-K2` ekiyle ayrı dala push etti ⇒ israfın yarısı **TEYİDE**
dönüştü: iki bağımsız ölçüm aynı 22'yi ve aynı Adab hükmünü verdi.
🔴 Her 2x'ten sonra `denetle.py`; **hepsi bittikten sonra `renk_olc.py`**
(palet verinin fonksiyonudur, renge dokunmadan çakışma doğar).

#### 🔴 FAZ 2'NİN YENİ KURALI — **PENCERE + MADDE AYNI COMMIT'TE**
`NOKTA-ONCE1281-ZINCIR-1010` ölçtü ve bir öngörüsü ÇÜRÜDÜ:
```
pencereler MADDESİZ inerse  2s AÇIK 193 → 207 (+14)  ⇒ ÇIKIŞ 1, İHLAL
maddelerle birlikte         193 → 193 ✓  ·  16 kırılma kapandı (2sk 2122→2138)
```
> **1281 ÖNCESİ bir PENCERE, kendi KRONOLOJİ MADDELERİYLE aynı commit'te iner.
> Ayrılırsa arada kalan commit Değişmez 2s'yi KIRAR.** (`§3.4 ②`nin yeni ekseni.)
⚠️ Ve niçin bugüne kadar görülmedi: `yerlesimler.js` ve ek14 **2s evreninde**,
kuyruk kronoloji dosyaları **değil.** `NOKTA-ONCE1281-UCUZ`un temiz çıkması bir
doğrulama değil **TESADÜFTÜ** — o noktalar şans eseri kuyruk dosyalarındaydı.
*Tesadüfü kural sanmak, `§11`in "boş küme her öngörüyü doğrular" ailesi.*
📌 İlgili: madde dosyası `index.html`e **bağlanmazsa** kapı TEMİZ der ama
kullanıcı HİÇBİR ŞEY GÖRMEZ (`denetle` glob'la okur, ekran okumaz) — `D265`'in
*"hesaplanan ama basılmayan"* sınıfı. `index.html` satırı koordinatörde ve
**aynı partide** iner (o dosya motor tuzunda DEĞİL).

#### 🔴 FAZ 2 UYARILARI — nokta yazacak her oturuma
```
ERİDU  Pleiades 912845   = Eridu TELL'i          ✅ atlasın noktası BU
       Pleiades 54136919 = Babil'in Eridu MAHALLESİ  ❌ yüzlerce km uzakta
       ⇒ §6.2'nin ders kitabı vakası: aynı ADI taşıyan İKİ AYRI NESNE,
         ve biri ötekinin İÇİNDE bir mahalle. Ad eşleşmesi nesne eşleşmesi DEĞİL.
TAVO   bir noktanın "geç dönemde de vardı" etiketi TAVO satırından geliyorsa
       TANIK SAYILMAZ (`MIMARI §5.1b`). KASA bu yüzden Ur'un kendi ölçümünü
       çürüttü — hüküm Anadolu için yazılmıştı, Sümer'de de kesti.
MOĞOL  `mogol-imparatorlugu` BOYALAR'da YOK ⇒ ZİNCİR inince 4 noktanın Moğol
       dilimi FAZ 3'e kadar BOYANMAZ. Geçici, BEYANLI delik (kapı kırmıyor —
       ölçüldü: çıkış 2, sebebi yalnız D8 ölçülemedi).

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
