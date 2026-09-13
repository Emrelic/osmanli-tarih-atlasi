# BULGU — KITA 22 · PADİŞAH ALBÜMÜ + İLGİNÇ HİKÂYELER (pilot)

**Paket 0045 · H-0001 (albüm) · H-0010 (magazin/komplo/ilginç hikâye)**
Oturum `local_4c91797a-ddc3-4c07-b08e-fead3ee98b40` · 13 Eylül 2026
Şartname: `oturumlar/KITA-22-PADISAH-0045.md`

---

## 0. TESLİM — SAYIYLA

```
MAGAZİN KARTI       13 yazıldı · 13'ü kaynaklı (TDV GÖVDESİ okunarak, HTTP kodu yetmedi)
                    kesin 7 · tartışmalı 3 · iddia 2 · rivayet 1
                    padişah başına: II. Mehmed 2 · I. Selim 2 · I. Süleyman 3 · IV. Murad 3 · II. Abdülhamid 3
                    doğrulayıcı: 0 hata (13/13 t: değeri kronolojide BİREBİR var)
ALBÜM GÖRSELİ       17 görsel taslağa girdi · 18 lisans KABUL ölçüldü · 7 RED/çelişkili · 1 kesinlik ölçülemediği için dışarıda
                    3-5 hedefini TUTMAYAN: IV. Murad (2) · II. Abdülhamid (2)
GÖRSEL İNDİRİLDİ    0  (assets/ bu oturumun değil; indirme ayrı izin ister)
GÖRSEL GÖZLE GÖRÜLDÜ 0  (gorsel_alt metinleri Commons açıklamasından — yayından önce gözle okunmalı)
```

| Dosya | Ne | Durum |
|---|---|---|
| `data/ekokuma_magazin.js` | 13 kart · `window.EKOKUMA_MAGAZIN` | yazıldı, node ile doğrulandı · **commit ETMEDİM** (`data/` koordinatörün) · **bugün ekrana GELMEZ** (§1) |
| `denetim/TASLAK-PADISAH-ALBUM-0913.json` | 5 albüm, KITA 24 şemasıyla | taslak |
| `denetim/ARAC-KITA22-MAGAZIN-DOGRULA-0913.js` | kart doğrulayıcısı | `node denetim/ARAC-KITA22-MAGAZIN-DOGRULA-0913.js` · çıkış 0/1 |

---

## 1. 🔴 D099 — KARTLAR BUGÜN GÖRÜNMEZ

```
js/app.js:6505  ekOkumaMerakYukle → YALNIZ data/ekokuma.js + data/merak.js
EKOKUMA_TUR["magazin"].kaynak()  → YALNIZ window.EKOKUMA
```
⇒ `data/ekokuma_magazin.js` yüklenmez, yüklense de havuza girmez. İstek KITA 12'de:
**M-3656** (KITA 21 — genel yükleyici listesi + `ekHavuz()`) ve **M-3665** (bu dosyanın çifti).
Aynı engel bugün KITA 17 · 20 · 21 · 23'ün dosyalarında da var; ayrıca diskte zaten
yetim bir `data/ekokuma_sh104.js` duruyor (yükleyici listesinde yok).

⚠️ **Tarayıcıda doğrulama YAPILMADI** — dosya yüklenmediği için görünüm ölçülemez; ölçmek
hiçbir şey kanıtlamazdı. Yükleyici inince ilk iş: bir kartın butonu + penceresi.

---

## 2. 🔑 BAĞLAMA `t:` İLE — ve bu, iki tuzak açıyor

```
js/app.js:6520   if (kart.tur === "magazin" || !kart.tur) return kart.t === o.t;
```
Magazin kartı `olay:[...]` ile DEĞİL, tek `t:` ile bağlanır. (KITA 24'ün M-3650 şeması
"olay:[...] EKOKUMA deseni" diyor — sebep-sonuç için doğru, magazin için değil; kendisine bildirildi.)

**① YUVARLAK TARİH → YANLIŞ MADDEYE YAPIŞMA (ölçüldü, düzeltildi):**
```
ilk bağlama   t:"1534-01-01"  (Kanunî–Hürrem nikâhı, olaylar_ek2.js)
o güne düşen  5 madde: Osmanlı-Safevî Savaşı · Kırım metbûluğu ·
              BREZİLYA'NIN 15 KAPTANLIĞA BÖLÜNMESİ · Matrakçı Nasuh · nikâh
⇒ "Hürrem büyü mü yaptı?" butonu Brezilya maddesinde çıkacaktı
çare          kart t:"1558-04-15"e taşındı (Hürrem Sultan öldü · olaylar_ek7.js · TEK madde)
```
📌 **Kural önerisi (magazin şeması için):** `t:` bağlamalı bir kart `YYYY-01-01` gününe
bağlanmaz — o gün kronolojide yıl hassasiyetli onlarca maddeye aittir (D014 · D145 ailesi).
Aynı ölçümle kalan iki çoklu bağlama:
```
1451-02-18   2 madde — ikisi de II. Mehmed'in ikinci cülusu     ✓ doğru
1553-10-05   2 madde — Mustafa'nın idamı + Kara Ahmed Paşa'nın sadrazamlığı   🟡 kabul edilebilir (doğrudan sonucu)
```

**② D181 — maddenin `t:`si düzelirse kart SESSİZCE KOPAR:**
`1481-05` (Fatih'in ölümü, `olaylar.js`) AY hassasiyetli; TDV **3 Mayıs 1481** diyor (§8 ihlali).
KITA 14 o maddeyi güne çekerse `fatih-zehir-iddiasi` kartının `t:`si **aynı turda** güncellenmeli.
Doğrulayıcı bunu yakalar (`t: kronolojide BİREBİR YOK — buton ÇIKMAZ`).

---

## 3. CÜLUS / VEFAT MADDELERİ — kronolojide ölçüldü

| Padişah | Cülus `t:` | Vefat `t:` (`vefat_id`) | Not |
|---|---|---|---|
| II. Mehmed | `1451-02-18` (ek5 + kronoloji_bizans) · **1444-08 BULUNAMADI** | `1481-05` olaylar.js | ilk saltanat cülusu maddesi YOK; vefat AY hassasiyetli |
| I. Selim | `1512-04-24` ek5 | `1520-09-21` ek5 | PADISAHLAR ile aynı gün |
| I. Süleyman | `1520-09-30` olaylar.js | `1566-09-07` olaylar.js | PADISAHLAR ile aynı gün |
| IV. Murad | `1623-09-10` ek5 | `1640-02-09` ek5 | PADISAHLAR `1640-02-08` — §4 B3 |
| II. Abdülhamid | `1876-08-31` ek5 | `1918-02-10` ek5 | PADISAHLAR ile aynı gün |

Evren: 81 dosya (`olaylar*` + `kronoloji*`) · 6192 madde · ayrıştırılamayan 0 · `gorsel:` alanı dolu madde **0**.

---

## 4. 🔴 KAYNAK ÇELİŞKİLERİ ve BAŞKASININ VERİSİNDE BULDUKLARIM — DÜZELTME YAPMADIM

> Hepsi ölçüm; hüküm koordinatörün (§7.1③ kaynak çelişkisi hükmü).

**B1 · II. Bayezid'in ölüm günü — 15 gün**
```
olaylar_ek7.js   1512-05-26  "II. Bayezid'in Dimetoka yolunda ölümü"  kaynak:bayezid-ii
TDV bayezid-ii   "Çorlu yakınındaki Abalar köyüne varıldığında fenalaştı ve … (10 Haziran 1512) vefat etti"
TDV selim-i      aynı gün: "25 Rebîülevvel 918 (10 Haziran 1512) Abalar köyünde vefatı"
```
⇒ Maddenin kendi beyan ettiği kaynak başka gün veriyor. İki TDV maddesi birbiriyle **tutarlı**.

**B2 · Şehzade Mustafa'nın idamı — TDV kendi içinde 1 gün ayrışıyor**
```
TDV suleyman-i      "4 Ekim'de … geldi, ertesi gün … otağa girdiğinde karşısında cellâtları buldu"  ⇒ 5 Ekim
TDV mustafa-celebi  "(27 Şevval 960 / 6 Ekim 1553 Cuma)"
olaylar_ek5.js      1553-10-05  kaynak:suleyman-i   ← kendi kaynağıyla tutarlı
```
Ölçtüğüm yan kanıt: 1553'te Jülyen takvim geçerli; Jülyen **6 Ekim 1553 = Cuma** (Gregoryen
16 Ekim). Yani `mustafa-celebi`nin gün–hafta günü çifti **kendi içinde tutarlı**. Taraf seçmedim;
karta iki günü de yazdım.

**B3 · IV. Murad'ın ölüm günü — TDV'nin tarihi kendi hafta günüyle çelişiyor**
```
TDV murad-iv    "15 Şevval 1049 (8 Şubat 1640) Perşembe yatsıdan sonra"
ölçtüm          8 Şubat 1640 = ÇARŞAMBA · 9 Şubat 1640 = PERŞEMBE
olaylar_ek5.js  1640-02-09   ← hafta gününe UYUYOR
padisahlar.js   olum:"1640-02-08" ← TDV'nin miladi çevrimine uyuyor
```
⇒ §4⑥ (kaynak kendi içinde çelişik) + D110 (takvim). Hicrî 15 Şevval'in miladi karşılığını
**ölçmedim**. Karta "Şubat 1640, bir perşembe akşamı" yazdım, iki günü `not:`a koydum.

**B4 · `padisahlar.js` IV. Murad `olum_sebep` — dayanağı gövdede YOK**
```
olum_sebep   "nikris (gut) ve sefer yorgunluğu komplikasyonları, 27 yaşında"
TDV murad-iv METİN 51.477 · iki bölüm · "nikris" 0 · "siroz" 0
```
⇒ D144 adayı. `padisahlar.js`in kendi `kaynak` alanını **ölçmedim** — bilgi başka bir kaynaktan
gelmiş olabilir. EK-OKUMA.md listesindeki "IV. Murad'ın … kendi sirozu" da TDV'de **bulunamadı**.

**B5 · 1905 Yıldız suikastı maddesi — beyan edilen kaynak olayı TAŞIMIYOR**
```
olaylar_ek5.js  1905-07-21  "Yıldız Suikastı …"  kaynak:abdulhamid-ii
TDV abdulhamid-ii  METİN 62.722 · "1905" 0 · "bomba" 0
TDV yildiz-camii   olayı günü, ölü/yaralı sayısı ve kurtuluş sebebiyle veriyor
```
⇒ D144. Doğru adres `yildiz-camii`.

**B6 · EK-OKUMA.md "Kanunî'nin üç kez cenaze namazı → rivayet" etiketi**
```
TDV suleyman-i  "İstanbul'a ulaşıldığında cenaze merasimi ÜÇÜNCÜ DEFA 23 Kasım'da Süleymaniye Camii'nde yapıldı"
```
⇒ Üç tören TDV'de **belgeli**. EK-OKUMA'daki "rivayet" etiketi bu ölçümle tutmuyor. ⚠️ TDV
"merasim" diyor, "namaz" değil — ilk iki törenin ne olduğunu **ölçmedim**.

**B7 · Site portreleri**
```
murad4.jpg   Commons "Murad_IV.jpg": lisans KABUL (PD-old-100) · sanatçı BOŞ · tarih BOŞ
             ⇒ sitenin bugün gösterdiği IV. Murad portresinin KÖKENİ BİLİNMİYOR — borç
selim1.jpg   Commons: sanatçı "Konstantin Kapıdağlı" · tarih "16. yüzyıl" — iki alan ÇELİŞİYOR
             ⇒ albümde ihtiyatla "donem-sonrasi-tasvir" sayıldı
```
Ek: 5 pilot portrenin 5'i de KITA 24 aletinden **KABUL** geçti (`assets/portreler/KAYNAKLAR.txt`
tek bir "kamu malı" beyanı taşıyordu; dosya başına ölçüm ilk kez yapıldı — ONERI-GORSEL-0907 §④'teki borcun 5/36'sı).

---

## 5. ALET KUSURLARI — ölçüldü, bildirildi

**KITA 24 lisans aleti (tahtada KITA 24'e yazıldı)** — üçü de YANLIŞ NEGATİF:
```
① önek kuralı "PD"de işlemiyor   PD-Abdul_Hamid (Abdullah Frères ×2) · PD-Bain (Balmoral 1867) → RED
② kategorisiz CC0'ı göremiyor     MET: şablon Cc-zero, lisans kategorisi YOK → RED
③ ASCII dışı URL'de çöküyor       'ascii' codec … '\xfc' → ÖLÇÜLEMEDİ; yüzde-kodlayınca çalıştı
```
⇒ Bu üç kusur düzelirse RED'deki 5 dosya yeniden ölçülmeli; IV. Murad ve Abdülhamid albümleri
3 görsel eşiğini ancak böyle geçebilir.

**Kendi aletlerimde:**
```
D159   "gut" araması "Turgutlu"yu buldu — kartlara GİRMEDİ, cümle okunarak elendi
D109   `sehzade-mustafa` 200 · 80.760 bayt · metin 2.353 — §4④ boilerplate'e benziyordu;
       İKİNCİ çıkarıcı (tarayıcı) gösterdi: "ŞEHZADE MUSTAFA — bk. MUSTAFA ÇELEBİ" yönlendirme kütüğü.
       Gerçek madde `mustafa-celebi` (METİN 15.783).
       ⇒ "boilerplate" ile "kütük" curl'den ayırt EDİLEMİYOR; ikinci çıkarıcı şart.
cümle bölücü  "II." Roma rakamında cümleyi kesiyor ("…II. Abdülhamid'i suikasttan kurtarmıştır" başsız geldi)
       ⇒ karakter penceresiyle yeniden okundu; kurtuluş sebebi ancak böyle bulundu.
```

---

## 6. BULUNAMAYAN · BİLEREK YAZILMAYAN

```
bulunamadı   "şirpençe" (Yavuz)        selim-i gövdesinde yok · `sirpence` slug 302
                                        ⇒ kart TDV'nin kendi teşhisiyle: "muhtemelen veba yumrusu"
bulunamadı   IV. Murad "siroz"/"nikris" murad-iv gövdesinde ikisi de yok
bulunamadı   Fatih zehir iddiasının faili  TDV kimseyi adıyla anmıyor — ayrıntı YAZILMADI
bulunamadı   Yavuz'a "vezir olsun" bedduası (EK-OKUMA listesi)  selim-i'de yok
bulunamadı   II. Mehmed'in 1444 ilk cülusu için kronoloji maddesi
bulunamadı   Abdülhamid 1905 suikastı abdulhamid-ii maddesinde (yildiz-camii'de VAR — B5)
yazılmadı    IV. Murad'ın içki/tütün/kahve yasağı  olaylar_ek17.js 1632-01-01'de ZATEN magazin maddesi
             olarak var — MÜKERRER olmasın diye başka üç hikâye seçildi
albüm        Fâtih Camii · Yavuz türbesi · Kanunî türbesi · Bağdat/Revan köşkü · Yıldız Camii
             için KITA 24 aletinden geçen kamu malı görsel BULUNAMADI (adaylar CC BY-SA ya da §5 kusurları)
```

## 7. ÖLÇÜLEMEDİ · ÖLÇMEDİM · OKUMADIM

```
ölçülemedi   kartların arayüzdeki görünümü (dosya yüklenmiyor — §1)
okumadım     Busbecq, Âlî, Feridun Bey, Âşıkpaşazâde'nin kendi metinleri — kartlar TDV'nin AKTARIMINA dayanır
okumadım     görsellerin kendisi (hiçbiri açılmadı) — gorsel_alt Commons açıklamasından
ölçmedim     hicrî 15 Şevval 1049'un miladi karşılığı (B3)
ölçmedim     KITA 24 aletindeki "PD" önek kusurunun hangi satırdan doğduğu
```

## 8. İSTEDİKLERİM

```
① KITA 12   yükleyici + havuz (M-3656 / M-3665) — bu olmadan 13 kart görünmez
② 1.MURAT   B1 · B2 · B3 · B5 için hüküm (KITA 14'ün dosyaları) ve B4 için padisahlar.js sahibine iletim
③ KITA 24   §5 ①②③ düzeltilecek mi; kesinlik sözlüğüne "gerçek yapı fotoğrafı" değeri gerekir mi
④ 1.MURAT   magazin şemasına "t: YYYY-01-01'e bağlanmaz" kuralı eklensin mi (§2①)
```
Önerim: ② B1 ve B5 düşük riskli ve kendi kaynaklarıyla çelişiyor — önce onlar. B2 ve B3'te TDV
kendi içinde ayrışıyor; orada taraf seçmek yerine ayrışmayı maddenin metnine yazmak daha doğru.
