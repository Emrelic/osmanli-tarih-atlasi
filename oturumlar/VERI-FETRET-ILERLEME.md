<!-- DURUM: BITTI | 2026-08-14 07:45 | VERI FETRET 4/4 + M-0017 7/7 (SINIF B) · denetle.py 0 · 1c 29->16 · rapor: tahta M-0045 -->
# VERİ FETRET — ilerleme
## (14 Ağustos'tan itibaren ikinci iş: **M-0017 · 13 Amerika noktası** — §⑭)

**Oturum:** Opus hazır kıta 2 · **Açılış:** 13 Ağustos 2026 ~09:55
**Şartname:** `oturumlar/VERI-FETRET.md`
**Nasıl başladı:** koordinatör dağıtmadan önce **Emre doğrudan verdi** ("VERİ FETRET'i al").
Koordinatöre iki mesaj atılmış, ikisi kuyrukta bekliyordu.

---

## ⓪ ŞARTNAMEDE BULUNAN HATA — kanal ölü adres gösteriyordu

```
VERI-FETRET.md §⑤ :  session_id : local_17712720-a5a0-4315-8986-48c222eeeadf
list_sessions'ta   :  YOK
canlı koordinatör  :  local_17712720-a5a0-4315-8986-48c222eeeadf
```
Şartname §⑤ *"BU KURAL ÜÇ KEZ ÇİĞNENDİ — üç oturum dosyaya yazdı, mesaj atmadı,
koordinatör onları ölü sandı"* diye uyarıyor; ama verdiği adres **ölü.** Kuralı
harfiyen uygulayan bir işçi yine ulaşamaz, ve **dördüncü kez** "yazdı ama mesaj
atmadı" sanılırdı.
📌 `§11` ailesinin yeni yüzü: kural doğru, alışkanlık doğru, **adres yanlış** —
doğru alete bozuk girdi. Öteki beş şartname aynı kalıptan kopyalandıysa beşi de
ölü adres taşıyor.

**Ek alet arızası:** `list_sessions` koordinatörün `lastActivityAt`ini **12 Ağu
21:23** gösteriyordu; oysa `git log` **13 Ağu 09:49:52** commit'i söylüyordu.
⇒ "Ölü mü canlı mı" hükmü o alanla verilirse yanılır; bakılacak yer `git log`.

---

## ① İŞ 1 — 16 NOKTAYA FETRET: **13 YAZILDI · 3 DOKUNULMADI**

**Yazılan (13):** Uzunköprü · Havsa · Meriç · Orestiada · Sofulu · Dedeağaç ·
Lalapaşa · Kofçaz · Dereköy · Demirköy · Mustafapaşa · Elhova · Malko Tırnova
→ `data/yerlesimler_ek24.js`, yalnız `s:` ve `d:` alanları.

**Şablon — İCAT EDİLMEDİ, veride 33 komşu noktanın kullandığı şablon alındı**
(Edirne · Dimetoka · Filibe · Kırklareli · Lüleburgaz · Gelibolu · Gümülcine…):
```
1402-07-28 > 1410-02-13  suleyman-celebi
1410-02-13 > 1410-06-15  musa-celebi
1410-06-15 > 1411-02-17  suleyman-celebi
1411-02-17 > 1413-07-05  musa-celebi
```
🟢 **Dört günün dördü de TDV `musa-celebi` maddesiyle doğrulandı:**
```
13 Şubat 1410  = 8 Şevval 812    Musa Edirne'yi alıyor
15 Haziran 1410                  Kosmidion — Süleyman geri alıyor
17 Şubat 1411  = 22 Şevval 813   Süleyman katlediliyor
 5 Temmuz 1413 = 5 Rebîülâhir 816  Çamurluova — Musa'nın ölümü
```
Madde Musa'nın sahasını *"Trakya (Edirne, **Yanbolu**, Çirmen)"* diye sayıyor —
Elhova, Yanbolu'nun 40 km güneyi, yani şablon onun için de kaynakla destekli.

**ÖN KABUL kısmen çürüdü ve veri ondan daha iyiydi:**
```
"1403-1411 Süleyman"  →  1402-07-28 (Ankara Savaşı), sekiz ay ÖNCE
tek Süleyman dönemi   →  ARADA Musa'nın dört aylık dönemi var
"1411-1413 Musa"      →  ✓ tuttu
```

### 🔴 Üç noktaya niçin dokunulmadı — 1403 BİZANS ŞERİDİ
```
`suleyman-celebi-emir` : 1403'te "Marmara denizinden Karadeniz'deki
                          Mesembria'ya (MİSİVRİ) uzanan sahil toprakları
                          Bizanslılar'a terkedildi"
`fetret-devri`          : "Kartal, Pendik ve Gebze ile bazı adalar ve
                          MİSİVRİ'YE KADAR KARADENİZ kıyıları"
```
Misivri = Nesebar, **42,66°K**. Üçü de şeridin içinde: Ahtapolu 42,10 (liman) ·
Rezve 41,99 (kıyı köyü) · İğneada 41,89 (liman).
Fetret yazmak TDV'nin dediğinin tersi olurdu; **Bizans yazmak da olmadı**:
1. şeridin **geri alınma tarihi TDV'de YOK** (iki madde de susuyor) ⇒ yazmak
   **tarih uydurmak** olurdu,
2. ölçüldü — **proje bu şeridi hiç ifade etmiyor**: 46 noktalık Marmara-Karadeniz
   kuşağında 1405'te Bizans olan yalnız 3 nokta var (İstanbul · Boğaziçi ·
   Marmara Adası) ve üçü de **1281'den beri** Bizans,
3. yeni kırılma günü `Değişmez 2` maddesi ister.
⇒ Şartnamenin kendi kuralı: *"BULAMADIĞIN NOKTAYA DOKUNMA."*

📌 **Ve bu 19 noktadan büyük bir bulgu, koordinatöre devredildi:** şerit Kartal ·
Pendik · Gebze'yi de kapsıyor ve veride **Gebze 1403-1411 arası `suleyman-celebi`**
görünüyor. Hayalet üç noktada değil, **kuşağın tamamında** olabilir.

**Sınırda kalan iki nokta (bildirildi):** Demirköy kıyıdan ~18 km, Malko Tırnova
~40 km içeride, ikisi de Istranca'da dağ kasabası (`tur:"kasaba"`), liman değil
⇒ "sahil toprakları" saymadım, şablon yazıldı.

---

## ② İŞ 2 — ELHOVA: `bulunamadı`, tarihe DOKUNULMADI

🟢 **Kimlik çözüldü:** Elhovo'nun Osmanlı adı **Kızılağaç Yenicesi** — TDV
`mustafa-celebi` (*"**Tunca nehri kenarındaki** Kızılağaç Yenicesi'nde
yakalanıp"*) ve `evlad-i-fatihan` (*"Yenice-i Kızılağaç, Yanbolu, İslimye"*).
```
`yanbolu`       fetih 766/1365 (Timurtaş Paşa) ya da 1373 — TDV 1373'ü tercih
                ediyor; Elhovo'nun kendi tarihini VERMİYOR
`bulgaristan`   Kızılağaç yalnız 1543-1609 Naldöken yörük iskânı bağlamında
`cirmen`        1371 zaferi var; savaş sonrası hangi yerlerin girdiği YAZILMIYOR.
                Çirmen sancağı listesinde Elhova YOK
müstakil `kizilagac` maddesi   YOK
akademik arama  §4 kırmızı çizgisini geçen kaynak ÇIKMADI (Vikipedi ·
                Grokipedia · turizm sitesi — üçü de kullanılmaz/tek dayanak değil)
```
⇒ `1371-01-01` **duruyor.** `data/olaylar_ek8.js` **yazılmadı** — madde yazmak
için tarih gerekir; boş dosya da bırakılmadı.

**Öneri (ÇIKARIM, ölçüm DEĞİL — işaretlenerek bildirildi):** `1371-09-26`
(Çirmen). Dört komşusu o günü kullanıyor, kronolojide maddesi var, ve `ek24`in
kendi yorumu bu yöntemi kabul ediyor. **Uygulanmadı** çünkü TDV bunu söylemiyor.

🔴 **Alakasız madde sorunu DURUYOR:** `1371-01-01`in ±45 gününde kronolojideki
tek madde *"Kârkiyâ hânedanı Gîlân'da kuruldu"* — Hazar kıyısı.

---

## ③ İŞ 3 — ÜÇ YUVARLAK TARİH: 0 yazıldı (yetki yok), 3 gerekçeli öneri

### 🔴🔴 KIRCAALİ — ANAKRONİK: şehir 1363'te YOK
TDV `kircaali`:
```
· yerleşim Kırca Ali'nin TÜRBESİ etrafında oluştu
· Kırca Ali mezar taşına göre 1371-1434 yaşadı
· Osmanlı kayıtlarında İLK 1482 ("Kırca") · 1530 ("Kırcalı")
· "tek bir fetih tarihi yok; kademeli Osmanlı yerleşimi"
```
Veri şehri **adını verdiği kişi doğmadan sekiz yıl önce** Osmanlı yapıyor ve
üstüne Fetret dönemlerini de yazıyor. Şartname *"tarihen imkânsız değil"* diye
geçmişti; asıl mesele **fetih yılı değil, yerleşimin var olmaması.**

🟢 Emsal veride var: `kur:` alanı **201 noktada**, `girdi.py` tanıyor, ve
`Herseknovi` → `kur:1382-01-01` + `ilk d:1482-01-01` (kuruluş ≠ fetih).
⚠️ İkisi **birlikte** yazılmalı: `kur:` olmadan `d:`yi 1482'ye çekmek
**119 yıl sahipsizlik** doğurur (`Değişmez 1`). Fetret dönemleri de silinmeli.
🔴 **Yazılmadı:** `kur:` bir dönem değil **başka alan** (§③) · dosya
`yerlesimler_seyrek.js`.

### FERECİK — öneri `1363-01-01` → `1357-01-01`
```
Hadîdî 758/1357 · Nişancı Mehmed Paşa ve Âlî 759/1358
   → TDV: "Muhtemelen bu SONUNCU tarihler gerçeği yansıtmakta"
     (Süleyman Paşa, ölümünden kısa süre önce)
Oruç Bey 1359-1363   (Evrenos Bey, KEŞAN ve İPSALA ile BİRLİKTE)
Hoca Sâdeddin · Kâtib Çelebi · Müneccimbaşı  774/1372-73
veride 1363-01-01 = Oruç Bey rivayeti
```
🟢 Öneri çift ayaklı: TDV'nin **açıkça tercih ettiği** tarih **ve** ölçüldü —
**İpsala veride `1357-01-01`**, TDV Ferecik'i tam olarak İpsala'yla birlikte
anıyor. Yeni gün icat etmiyor.

### GÜMÜLCİNE — dokunma önerilmedi
1361 civarı (ilk Osmanlı kronikleri + Yunan araştırmacılar) · 1363 (*"bazı
kaynaklar"* — veride bu) · *"1371 Meriç savaşından biraz önce"* (yeni
araştırmalar). Üçünde de **gün yok**. Veri yanlış değil, TDV'nin ağırlık verdiği
tarih değil sadece ⇒ bir rivayeti başka rivayetle değiştirmenin kazancı yok.

---

## ④ DENETİM — yazdıktan sonra GERİ OKUNDU (motorun gözüyle)

`girdi.oku_dosya` ile yeniden ayrıştırıldı — kendi yazdığım metne değil, **motorun
okuduğuna** bakıldı:
```
ek24                        16 nokta (yazmadan önce de 16 — kayıt eklenmedi/silinmedi)
çakışma · boşluk · ters dönem   0
Değişmez 1                  ✓ 2369 yerleşim, 180 sahipsiz (beklenen 180)
Değişmez 1b                 ✓ pencere arası boşluk 0
Değişmez 2                  ✓ 507 kırılma, 0 AÇIK
SONUÇ                       temiz
```
🟢 **Ve en önemlisi: YENİ KIRILMA GÜNÜ DOĞMADI.** Dört gün 33 noktada zaten
vardı ⇒ kronoloji maddeleri de var. Kendi tarihimi yazsaydım **52 maddesiz
kırılma** açacaktım.

**Yöntem notu (§11):** hiçbir düzenleme kabuktan geçmedi · regex kullanılmadı
(veri JS'te, `girdi.oku_dosya` çağrıldı) · `replace`e sayı argümanı verilmedi ·
her değişiklik tekil eşleşmeyle `assert`lendi · 13 hedefin işlenmediği durumda
betik **durur** (`assert len(islenen) == 13`).

---

## ⑤ SANA AİT BİR §4 BULGUSU (kök `*.md` bana yasak)

`CLAUDE.md §4` `emir-suleyman` slug'ını *"kurtarıldı, CANLI"* diye kaydediyor.
Ölçüldü: **canlı ama GÖVDESİ YOK** — yalnız *"bk. SÜLEYMAN ÇELEBİ, Emîr"*
yönlendirmesi. Gerçek madde **`suleyman-celebi-emir`** (tek tire;
`suleyman-celebi--emir` çift tire **ÖLÜ**, arama sayfasına düşüyor).
⇒ Slug tuzağının **beşinci** cinsi ve öteki dördünün sınavını da geçiyor:
```
① ölü slug            302
② yanlış madde        200 + yanlış içerik      (ordu · saray · cin)
③ boş gövde           200 + doğru başlık, içi boş   (mogadisu)
④ boilerplate gövde   200 + içerik hiç gelmez       (mazenderan)
⑤ YÖNLENDİRME         200 + doğru başlık + gövde YERİNE "bk. …"   ← YENİ
```
`⑤`in ayırt edici yanı: gövde **boş değil**, *işaret ediyor* — yani "içeriği
oku" kuralı bile onu yakalamaz, okunan şey bir **adres.**

---

## ⑥ İKİNCİ TUR (Emre: "devam") — FERECİK YAZILDI, BİR DURDURUCU BULUNDU

### 🟢 (b) FERECİK UYGULANDI — ve gerekçe ölçümle üçe katlandı
`data/yerlesimler.js` · **`1363-01-01` → `1357-01-01`** (iki yerde: `d:` ilk
dönemin `f`si · `s:` bizans döneminin `t`si). Kaydın üstüne 14 satırlık gerekçe
yorumu yazıldı, `kaynak: TDV ferecik` damgasıyla (§4 *kaynak gizlenmez*).

🔴 **Kaydın kendi yorumu düzeltmenin gerekçesini verdi:**
> *"Zincir Gümülcine ile BİREBİR… Tarih UYDURULMADI, **komşudan alındı**."*

⇒ `1363` Ferecik'in **kendi kaynağı değil**, Gümülcine'den kopya. Üç bağımsız
dayanak yeni tarihi tutuyor:
```
① TDV `ferecik`   tercihini AÇIKÇA söylüyor: Hadîdî 758/1357 · Nişancı Mehmed
                  Paşa ve Âlî 759/1358 → "Muhtemelen bu sonuncu tarihler
                  gerçeği yansıtmakta" (Süleyman Paşa)
② TDV, Ferecik'i İPSALA ve KEŞAN ile BİRLİKTE anıyor
③ kronoloji       1357-01-01 maddesi: "Süleyman Paşa'nın Trakya ilerleyişi:
                  MALKARA, İPSALA, KEŞAN…"     ← tam o küme
                  1363-01-01 maddesi: "Batı Trakya'ya iniş: GÜMÜLCİNE'nin fethi"
```
⇒ Ferecik **başka bir şehrin fetih maddesine** bağlıydı — Elhova'nın "Kârkiyâ
hânedanı" sorunuyla aynı sınıf, ama bu sefer **kaynak konuşuyordu.**
Yeni gün icat edilmedi: `1357-01-01`i veride 12 nokta kullanıyor, maddesi ±0 gün.

**Geri okundu** (`girdi.oku_dosya`): 1356 bizans → 1358 OSMANLI ✓ · İpsala ·
Keşan · Malkara ile aynı zaman çizgisi ✓ · çakışma/boşluk/ters dönem **0** ·
Gümülcine ve Kırcaali 1363'te **kaldı.**

### 🔴🔴 DURDURUCU — `denetle.py` HİÇ KOŞMUYOR, sebep BENDE DEĞİL
```
data/yerlesimler_amerika.js   (NOKTA AMERİKA'nın dosyası — DOKUNULMADI)
  796 · 802 · 951   {…d:"pueblo-bagimsizligi"},   // ÖNERİLEN KİMLİK
  965               {…d:"teksas-cumhuriyeti"},    // ÖNERİLEN KİMLİK
```
42 girdi dosyası tarandı (tırnak durumu izlenerek, `http://` hariç):
**4 ihlal, dördü de bu dosyada, başka hiçbir dosyada YOK.**

📌 **Ve bu, DÜNKÜ dersin aynı dosyada tekrarı.** `95e5e6c` commit mesajı:
*"sebep SATIR SONUNDA yorum ('}, // ONERILEN KIMLIK') — _cevir yalnız satır
BAŞINDAKİ // yi siliyor ⇒ Sözleşme yazılıyor: yorum yalnız KENDİ SATIRINDA."*
Sözleşme **bir gün önce** yazıldı, **aynı yerde, aynı yorum metniyle, dört kez**
çiğnendi. `§11`in *"kural yetmiyor, ALIŞKANLIK gerekiyor"* dersinin en keskin
vakası.

🔴 **Ve bir denetim boşluğu:** bu kusuru hiçbir nöbetçi göremez, çünkü
**nöbetçiyi çökertiyor.**
```
normal kusur   denetim ÖLÇER  → "şu satırda şu var"
bu kusur       denetim ÇÖKER  → hiçbir şey demez
```
Üstelik patlama mesajı kaynağı **göstermiyor**: `line 455` diyor, o `_cevir`in
ürettiği geçici JSON'un satırı; kaynak dosyanın satırı **796**. Teşhis için
`_cevir`in adımlarını elle taklit etmek gerekti.
🟢 Nöbetçi betiği yazıldı ve `C13` uyarınca **iki yönde de sınandı**: gerçek
veride **ateşliyor** (4 ihlal, doğru satır numaraları) · ihlalsiz 41 dosyada
**temiz geçiyor** · `http://` ve tırnak içi `//` yanlış pozitif vermiyor.
`arac/*` yasak olduğu için oraya **taşınmadı**, scratchpad'de duruyor ve
koordinatöre bildirildi.

⚠️ **Sonuç: Ferecik düzeltmesi benim ölçümüme göre temiz, ama projenin
denetimine göre ÖLÇÜLEMEDİ.** `§11`: *ölçülemedi ≠ temiz.* Amerika dosyası
düzelince ilk iş `denetle.py`.

---

## ⑦ BEKLEYEN — tek karar kaldı

```
(a) Elhova   1371-01-01 → 1371-09-26   BEKLİYOR · çıkarım (TDV susuyor), onay şart
(b) Ferecik  1357-01-01                🟢 UYGULANDI
(c) Kırcaali `kur:1482` + d:1482 + Fetret silme   BEKLİYOR · yetki dışı:
             `kur:` bir dönem DEĞİL (§③ "başka alana dokunma") + dosya
             `yerlesimler_seyrek.js`. İkisi BİRLİKTE yazılmalı, yoksa
             119 yıl sahipsizlik doğar.
(d) Üç kıyı noktası                    ✔ KAPANDI — akademik kaynak arandı,
             §4 kırmızı çizgisini geçen kaynak BULUNAMADI (Vikipedi · Fandom
             wiki · Wikidata, üçü de reddedilen kümede) ⇒ `bulunamadı` kalıyor
```
**Aciliyet sırası:** Kırcaali > Elhova. Kırcaali bir **anakronizm** (haritada var
olmayan bir şehir boyanıyor, `§3.5` hayalet ailesinin yerleşim tarafı); Elhova
yalnız bir **rivayet tercihi.**

---

## ⑧ ÜÇÜNCÜ TUR (Emre: "Kırcaali'yi de yaz, yetki verdim")

### 🔴 ÖNCE ÖZ ELEŞTİRİ: "yeni bulgu" dediğim şey KAYITLIYDI
Yazmadan önce kaydın **üstündeki yorumu** okudum:
```
// ⚠️ `kur:` YAZILMADI: TDV 1482 ilk tahrir kaydını veriyor ama yerleşim yeri
//    daha eski ve zincir komşularıyla AYNI olduğu için kur: haritada tek
//    piksel değiştirmez — uydurma bir kuruluş günü ise kalıcı yanlış olurdu.
//    (Akmescid ve Or Kapı'da verilen kararın aynısı, yerlesimler_kirim.js.)
```
⇒ TDV'nin 1482 tahrir kaydı **zaten ölçülmüş**, `kur:` yazmama kararı **zaten
verilmiş ve gerekçelendirilmiş.** Ben ⑤'te onu *"anakronizm buldum"* diye **yeni
bir bulgu gibi** raporladım — kaydın yorumuna bakmadan.
📌 `§11`in *"ölçmediğini `ölçmedim` diye yaz"* dersinin bana düşen hâli, ve orada
anlatılan vakanın birebir tekrarı: *"'kasıtlı mı, YAZILI DEĞİL' — HİÇ BAKILMADI,
ve YAZILIYDI."*

### 🟢 AMA GEREKÇE ÖLÇÜLDÜ VE BİR AYAĞI ÇÜRÜDÜ — koda bakılarak
```
uret_petek.py:2326   kur günü gelmemiş noktanın peteğini HİÇ ÇİZMİYOR
uret_petek.py:2341   KOMŞULUK hesabına da SOKMUYOR
uret_petek.py:2366   üçüncü okuma
uret_petek.py:2512·2514   kur: günlerinden EPOK üretiyor
js/app.js:2706 · :2770    dizinde "kuruluş" olarak GÖSTERİYOR
```
🔴 *"`kur:` haritada tek piksel değiştirmez"* → **YANLIŞ.**
🟢 *"uydurma kuruluş günü kalıcı yanlış olurdu"* → **HAKLI**, ve o yüzden gün
uydurulmadı: `1482-01-01` TDV'nin **tahrir kaydı.** Anlamı *"bu yıl kuruldu"*
değil, **"en geç bu tarihte vardı"** üst sınırı (1482'de zaten 41 haneli köy).
Alt sınır Kırca Ali'nin ölümü (~1434); TDV arada gün **vermiyor** ⇒ **belgeli
olan seçildi, tahmin edilen değil.**

📌 `B10`un **tersten** hâli: burada **hüküm** yanlıştı çünkü **teşhis** yanlıştı.
Ve teşhisi çürüten şey akıl yürütme değil **koda bakmak** oldu.

### NE YAZILDI
```
data/yerlesimler_seyrek.js · Kırcaali
+ kur:"1482-01-01"
  d: DOKUNULMADI · s: DOKUNULMADI
```
**`d:`ye dokunmamak bilinçli:** ① çelişki yok — `d:1363` **YERİN** sahipliğini
söyler (Rodop 1363'ten Osmanlı), `kur:1482` **YERLEŞİMİN** varlığını; iki ayrı
eksen. ② `d:`yi 1482'ye çekmek **yeni bir kırılma** doğurur ve `Değişmez 2` madde
ister — kazanç yok, borç var. Fetret dönemlerini silmek de gereksiz: motor
noktayı o günlerde **hiç işlemiyor.**
Eski karar **silinmedi, DAMGALANDI** (`§3.5.1`: *vakayı silmek dersi de siler*).

**Geri okundu** (motorun kendi mantığıyla): `1481-06-15` 🚫 haritada YOK ·
`1483-06-15` ✓ VAR/OSMANLI · Değişmez 1 kesitlerinde **sahipsiz satırı yok** ·
`girdi.py 'kur' tanıyor: True`.
⇒ 1363-1482 arası Kırcaali'nin toprağı `§2` gereği komşularına (Gümülcine ·
Filibe · Eski Zağra) kalıyor — 119 yıl boyunca **doğru** olan davranış.

### 📌 KOORDİNATÖRE SEVK
Çürüyen gerekçe **Akmescid ve Or Kapı**'da da kullanılmış (`yerlesimler_kirim.js`
— yorumun kendisi söylüyor). Dosyada `kur:` üç yerde var ama o iki kayıtta
görünmüyor. **Dokunulmadı**, yetki dışı.

### 🟢 DENETİM ARTIK KOŞUYOR — ve 202 sahipsiz BENDEN DEĞİL
Amerika dosyası düzelmiş (**2369 → 2503 nokta**), `denetle.py` çökmüyor.
```
Değişmez 1   ✗ 2503 yerleşim, 202 sahipsiz (beklenen 180)
Değişmez 1b  ✓ 0     ·  Boşluk cinsi ✓ 0  ·  Değişmez 2 ✓ 507 kırılma 0 AÇIK
2s ✓ 62/121  ·  2i ✓ 3/3  ·  2t ✓ 31/42        SONUÇ: İHLAL VAR (kod 1)
```
İhlalin atfı **tahmin edilmedi, ölçüldü** (`denetle.py:656-666` ile aynı kesitler
ve aynı `kur:`/`bit:` muafiyetleri):
```
BENİM 19 NOKTAMDAN SAHİPSİZ OLAN:  0     ← liste BOŞ
dağılım: h2_afrika 56 · yerlesimler.js 37 · AMERIKA 22 · ek8 18 · ek13 16 · …
damga:   134'ü `kasitli_bosluk` · 68'i damgasız
```
🟢 Atıf birebir oturuyor: **`beklenen 180` + Amerika'nın 22 sahipsizi = 202.**
`95e5e6c` commit'i *"203/180"* diyordu ⇒ bugün 202, biri kapatılmış.
⚠️ Damgasız 68'in çoğu **çöl dolgu noktası** (Sahra · Necid · Rub'ul Hâlî · Nefud
· Karakum) — `§3` bunları *"kasten öyle"* sayıyor ama `kasitli_bosluk` damgası
**yok.** Ayrı bir kalem: *damgasız kasıtlı boşluk.* Ölçüldü, devredildi.

---

## ⑨ KAPANIŞ

```
İŞ 1   16 → 13 YAZILDI · 3 DOKUNULMADI (1403 Bizans şeridi)          ✔
İŞ 2   Elhova BULUNAMADI · kimlik çözüldü (Kızılağaç Yenicesi)       ✔
İŞ 3   Ferecik 1357-01-01 ✓ · Kırcaali kur:1482-01-01 ✓ ·
       Gümülcine gerekçeyle dokunulmadı                              ✔
```
**Bekleyen tek kalem: Elhova** (`1371-01-01` → `1371-09-26`). Yazılmadı çünkü
**TDV susuyor** ve öneri bir çıkarım — Kırcaali'de olduğu gibi belgeli bir
dayanak yok. Açık kararla yazılır.

---

## ⑩ DÖRDÜNCÜ TUR (Emre: "Elhova'yı da 1371-09-26 yaz")

```
data/yerlesimler_ek24.js · Elhova (Elhovo)
  1371-01-01 → 1371-09-26   (d: ilk dönemin f'si · s: bulgaristan döneminin t'si)
```
⚠️ Kaydın üstüne **26 satır gerekçe** yazıldı ve **çıkarım olduğu damgalandı**
(`kaynak: bulunamadı — TDV bu taneciği kapsamıyor`). Kaynak *"Elhova
1371-09-26'da alındı"* **demiyor**; yazılan şey şu: eski gün **kesinlikle
yanlış** bir maddeye bağlıydı, yenisi doğru olaya bağlı.

### 🟢 Ve bu kısım çıkarım DEĞİL — eski günün gerçek sahibi bulundu
```
1371-01-01'i kullanan öteki noktalar:  LÂHÎCAN · BENDER ENZELİ · Kotor
1371-01-01 maddesi: "Kârkiyâ hânedanı Gîlân'da kuruldu — Hazar kıyısı"
```
⇒ O madde **Lâhîcan ile Bender Enzeli'nin** maddesi (ikisi de Gîlân, Hazar
kıyısı). Kusur *"Elhova'nın maddesi alakasız"* değil, daha keskin: **Elhova
başka bir coğrafyanın maddesine tutunmuş.**
Yeni gün: `1371-09-26` = *"Çirmen Savaşı — **Meriç vadisinin denetimi**"*; Elhova
Tunca (Meriç'in kolu) vadisinde, dört komşusu (Uzunköprü · Meriç · Sofulu ·
Dedeağaç) tam o günü kullanıyor. TDV `musa-celebi` Musa'nın sahasını *"Trakya
(Edirne, **Yanbolu**, Çirmen)"* diye sayıyor — Elhova Yanbolu'nun 40 km güneyi.

### Denetim — bir sayı BEKLENDİĞİ GİBİ DÜŞTÜ
```
Değişmez 1   ✗ 2503 yerleşim, 202 sahipsiz   ← DEĞİŞMEDİ (Amerika/çöl kaynaklı)
Değişmez 1b  ✓ 0
Değişmez 2   ✓ 506 kırılma, 0 AÇIK           ← 507'den DÜŞTÜ
Değişmez 2s  ✓ 894 yabancı · 62 AÇIK (tavan 121)
19 noktada çakışma/boşluk/ters dönem: 0
```
🟢 **507 → 506 tam beklenen davranış:** Elhova'nın tek başına tuttuğu
`1371-01-01` kırılması, 33 noktanın paylaştığı `1371-09-26`ya katıldı ⇒ bir
kırılma eksildi, açık 0 kaldı. Düzeltme `Değişmez 2`yi bozmadı, **sadeleştirdi.**
Eski gün **ölmedi** (Lâhîcan · Bender Enzeli · Kotor kullanıyor).

---

## ⑪ HABERLEŞME — ÖLÇÜLDÜ, kanıtı `git log`da

Emre *"koordinatörle irtibatınız sağlam mı"* diye sordu; tahmin edilmedi, ölçüldü:
```
"VERI FETRET" geçen commit: 6
95e5e6c   KALEM 2 birebir aktarılmış: "16 -> 13 yazdi, 3'une DOKUNMADI
          (Igneada·Ahtapolu·Rezve — 1403 Bizans seridi) ve on kabulumu KISMEN CURUTTU"
388d39a   KALEM 4: "VERI FETRET bir DURDURUCU bildirdi: denetle.py HIC KOSMUYORDU"
          + "Ferecik'i 1363 -> 1357 yazdi (TDV'nin ACIK tercihi + Ipsala emsali)"
336df54   AÇILIŞ mesajındaki bulgu: "OLU KOORDINATOR ADRESI — yedi sartnamede
          duzeltildi… 12 mesaj, 0 varis. Uc oturum kusuru BAGIMSIZ buldu"
```
⇒ **Yedi mesajın hepsi ulaştı ve karşılık gördü.** En güçlü kanıt `336df54`:
proje genelinde **12 mesaj kaybolmuş (0 varış)**, bu oturumun mesajları
kaybolmadı — çünkü ilk iş şartnamedeki adres doğrulanıp **ölü olduğu** bildirildi
ve canlı kimlik `list_sessions` ile bulundu.
📌 Ve bir raporundan **kalıcı bir alet doğdu**: `arac/yorum_temizle.py`.
İşçinin bulgusu → koordinatörün nöbetçisi → bütün oturumları koruyan sözleşme.
⚠️ Tek eksik: **koordinatörden bu oturuma hiç mesaj gelmedi.** İhtiyaç olmadı
(kararları Emre doğrudan verdi) ama kanalın o yönü **sınanmadı.**

---

## ⑫ KAPANIŞ — dört kalemin dördü kapandı

```
İŞ 1   16 → 13 YAZILDI · 3 DOKUNULMADI (1403 Bizans şeridi)              ✔
İŞ 2   Elhova: tarih BULUNAMADI, kimlik ÇÖZÜLDÜ (Kızılağaç Yenicesi),
       gün Emre'nin yetkisiyle 1371-09-26 · ÇIKARIM olarak damgalandı    ✔
İŞ 3   Ferecik 1357-01-01 ✓ · Kırcaali kur:1482-01-01 ✓ ·
       Gümülcine gerekçeyle dokunulmadı                                  ✔
```
Dokunulan üç dosya: `yerlesimler_ek24.js` · `yerlesimler.js` ·
`yerlesimler_seyrek.js`. İlk ikisi koordinatör tarafından commit'lendi
(`95e5e6c` · `388d39a`); Elhova değişikliği **commit'siz** bekliyor —
`data/` commit'i Oturum 0'da (§7).

**Kalan tek açık kalem bu oturumun işi değil:** `Değişmez 1` 202/180, sebebi
çöl dolgu noktalarının `kasitli_bosluk` damgasının eksik olması. Sahibi
**VERİ ÇÖL BAYRAK** şartnamesi. ⚠️ Ve bir **sayı ayrışması** devredildi:
koordinatör *"71 noktanın 45'i bayraksız"* ölçmüş, bu oturum *"202 sahipsizin
68'i damgasız"* ölçtü — **68 ≠ 45**, evrenlerden biri dar ve hangisi olduğu
ÖLÇÜLMEDİ. O iş başlamadan kaynağında çözülmeli.

---

## ⑬ AYRIŞMA ÇÖZÜLDÜ — AYRIŞMA YOKMUŞ (17:20 ölçümü)

> 🔴 **Bu bölüm ASIL KANALA yazılıyor.** MOTOR MALİYET'in bugün yazdığı kural
> (`KORIDOR-SEMA-ILERLEME.md`den okundu): ***asıl kanal DOSYA olsun, mesaj
> yedek.*** Aşağıdaki bulgu ilk olarak yalnız **mesajla** gönderildi — yani
> yanlış kanala. Buraya yazılmasının sebebi bu.

```
SORU A  "en az BİR kesitte sahipsiz"   202 · damgalı 134 · DAMGASIZ 68
SORU B  "HİÇ sahipli olmamış"           71 · damgalı  26 · DAMGASIZ 45
A \ B   "bir dönem sahipliydi, sonra sahipsiz kaldı"  131 · DAMGASIZ 23
```
⇒ Koordinatörün `71 · 26 · 45`i **birebir tuttu.** Ayrışma değil, **iki farklı
soru**: `denetle.py` *"hiç delik var mı"* diye sorar, koordinatör *"bu nokta hiç
sahiplenilmemiş mi"* diye. **Dar değil, BAŞKA.** Benim ⑫'deki *"evrenlerden biri
dar"* çerçevem yanlıştı.

### 🟢 BAĞIMSIZ DOĞRULAMA — ve `131` iki oturumda da aynı çıktı
`VERI-COL-BAYRAK-ILERLEME.md` (16:43): *"geriye yalnız 6 şüpheli + **131
'kısmen sahipsiz'** (hiç incelemediğim, şartname kapsamı dışı) kalıyor."*
⇒ **131 birebir aynı sayı**, iki oturum bağımsız ölçtü. Ve o kümeyi **kimse
incelemedi** — bu oturumun ölçtüğü **23 damgasız** tam oraya düşüyor.

### 6 ŞÜPHELİ — üç noktada örtüştük, üçünde ayrıldık
```
VERİ ÇÖL BAYRAK  Ndjamena · Agadez · Tamanrasset · Timbuktu · Darfur · Hadramut
bu oturum        Ndjamena · Timbuktu · Hadramut · Ogaden · Yeni Gine (2)
ortak            Ndjamena · Timbuktu · Hadramut          (3)
```
Ölçütler farklıydı: onlar `tur:` alanına baktı (`sehir` vs `bolge`), bu oturum
tarihî/coğrafî kimliğe. İkisi de kısmen doğru.

### 🔴 VE BU OTURUMUN BİR İTİRAZI ÇÜRÜDÜ — kayda geçiyor
Mesajla şunu bildirmiştim: *"Yeni Gine İç Kesimi çöl bile değil, yağmur
ormanı — bayrak yanlış."* **Yanlış çerçeveydi.** Bayrak `kasitli_bosluk`
bayrağıdır, *"çöl"* bayrağı değil; ve VERİ ÇÖL BAYRAK onu **gerekçesiyle**
yazmış: *"Yeni Gine iç yaylaları için sömürge-öncesi temas yokluğu
literatürü"* → `bos:"kabile"`. Aynısı **Ogaden** için de geçerli.
⇒ Kusur onların kaydında değil, benim **ölçütümdeydi**: alanın adına
(*"çöl bayrağı"*) bakıp içeriğini (*kasıtlı boşluk*) varsaydım.
📌 `§11`in *"ölçüm doğru, çıkarım yanlış"* ailesine bu oturumun **ikinci**
katkısı — ve ikisi de aynı turda çıktı.

### 🟢 GEÇERLİ KALAN BULGU: `131`in içindeki 23 damgasız ÜÇ SINIF
```
① DÖNEM istiyor, bayrak değil   Riyad · Dir'iye · Hâil · Buraydâ · Uneyze ·
   Şakrâ · Necid içi · Manama (Bahreyn) · Mukalla
   `§3` bunları "1744 öncesi Necid, körfez şeyhlikleri" diye zaten sayıyor,
   ama bunlar bir dönem SAHİPLİ, sonra sahipsiz ⇒ "hiç kimsenin olmadı"
   değil, "bir aralıkta dönemi YOK". Bayrak bunu kapatmaz, GİZLER.
② `bit:` istiyor                Mayapán (şehir 1441-61'de yıkıldı, 1460'tan
   sonra sahipsiz) · Utatlán (Q'umarkaj) (1524'te yıkıldı, 1540'tan sonra)
   Bayrak "burası kasten boş" der; doğrusu "yerleşim ORTADAN KALKTI".
   `denetle.py:663` `bit:`i zaten okuyor.
③ kalanı ölçülmedi — 23'ün 11'i yukarıda, gerisi tek tek bakılmadı
```
Ölçüm betiği: `scratchpad\ayrisma.py` (üç kovanın tam listesini basar).

---

## ⑭ İKİNCİ İŞ — M-0017 · 13 AMERİKA NOKTASI (14 Ağustos)

> Koordinatör bu işi **benim bulgumdan** doğurdu: *"BULDUĞUN KUSUR SENİN İŞİN
> OLDU."* Ve şartname sınırını da düzeltti: *"VERİ ÇÖL BAYRAK şartnamesi 'hepsi
> çöl dolgu' diyordu ve YANLIŞTI — bu 13 o sınıfa girmiyor."*

### İŞ 0 — sayı doğrulandı (B10) ve **iki ters uçlu sınıf** çıktı
```
yerlesimler_amerika.js'te sahipsiz görülen : 22
bunlardan kasitli_bosluk DAMGASIZ          : 13   ← koordinatörün sayısı BİREBİR
```
| | boşluk nerede | çare |
|---|---|---|
| **SINIF A** (6) Cahokia · Mayapán · Utatlán · Iximché · Zaculeu · Caparra | **SONDA** — yerleşim sona erdi | `bit:` / `insansiz` |
| **SINIF B** (7) İrokua beşliği · Acoma · Taos | **BAŞTA** — dönem yazılmamış | `bos:` cinsi |

⇒ İkisine aynı çareyi uygulamak `§11`in *"iki ayrı kusur tek satırda
raporlanırsa doğru veri bozulur"* vakası olurdu. SINIF A'ya **dokunmadım**:
`bit:` yetkim yoktu, koordinatöre sordum (M-0036).

### KAYNAK — §4 sırası uygulandı, **TDV önce denendi ve ölçüldü**
TDV `amerika` (kıta) maddesi çekildi: Maya · Aztek · İnka · Toltek **var**;
İrokua **yok** · Pueblo **yok** · Cahokia **yok** · Maya şehir-devletleri tek
tek **yok** · Caparra **yok**.
⇒ Coğrafî değil **TANECİK** boşluğu ⇒ akademik kaynak meşru, ve `neden:`
alanına **açıkça** yazıldı:
```
İrokua  American Antiquity / Cambridge Core — 42 Kuzey İrokua yerleşmesinden
        184 AMS radyokarbon tarihinin Bayes modellemesi (hakemli)
        bulgu: konfederasyon ÖNCESİ ayrı köy toplulukları, birbirleriyle
        ÇATIŞIYORLARDI — konfederasyon o çatışmayı dindirmek için kuruldu
Pueblo  NPS + Britannica "Pueblo peoples" — "İspanyol öncesi 70'ten fazla
        köyün HER BİRİ siyaseten ÖZERKTİ, dinî toplulukların başkanlarından
        oluşan bir konseyle yönetiliyordu"
```

### YAZILDI — 7/7 · geri okundu · denetim temiz
```
kabile    (5)  Mohawk · Oneida · Onondaga · Cayuga · Seneca      1281-1450
devletsiz (2)  Acoma Pueblo · Taos Pueblo                        1281-1610

yorum_temizle.py  0        denetle.py  0 · SONUÇ temiz
Değişmez 1c       BELGESİZ 29 → 16 · belgeli 173 → 185
Boşluk cinsi      kabile 30→35 (+5 benim) · devletsiz 130→132 (+2 benim)
                  insansiz 9→15 (+6 BENİM DEĞİL — aşağıya bak)
```

### 🔴 ÇAKIŞMA — SINIF A'yı başkası yazmış, aynı dosyada aynı andaydık
Yazmaya başladığımda `data/yerlesimler_amerika.js` **zaten `M`**di. Sonradan
ölçtüm: SINIF A'nın altısı da yazılmış — `bos:"insansiz"` ile.
🟢 Kim yazdıysa **doğru iş yapmış** ve benim `bit:` önerimden **daha ucuz** bir
yol bulmuş. İtirazım yok. İki not:
- **Kayıp yok** (ikisini de geri okudum) ama `§7`nin sessiz veri kaybı
  senaryosu tam buydu. **Benim hatam:** dosyanın `M` olduğunu **gördüm** ve
  yine de yazdım; tahtadan "bu dosya kimde" diye sormalıydım.
- **Tutarsızlık:** altısının beşinde `bit:` **yok**, yalnız Caparra'da var
  (`bit:"1521-01-01"`). Aynı sınıf, farklı işlem. Karar koordinatörde;
  dokunmadım.

**Teslim:** tahta M-0045 · `data/yerlesimler_amerika.js` commit'siz (data/
commit'i Oturum 0'da).
