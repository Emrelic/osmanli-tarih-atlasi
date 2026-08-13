# VERİ FETRET — ilerleme

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
