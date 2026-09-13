# BULGU — KITA 21 · Antlaşma hükümleri · önem · sebep-sonuç (pilot)

**Paket:** 0045 H-0009 · **Şartname:** `oturumlar/KITA-21-ANTLASMA-0045.md`
**Tarih:** 13 Eylül 2026 · **Koordinatör:** 1.MURAT
**Yazılan veri:** `data/ekokuma_antlasma2.js` (`window.EKOKUMA_ANTLASMA2`) — commit ETMEDİM (`data/` koordinatörün)
**Alet:** `denetim/ARAC-KITA21-EKOKUMA-DOGRULA-0913.js`
**Tahta:** açılış M-3644 · aksaklık M-3655 · KITA 12 isteği M-3656

---

## 0. ÖZET

```
yazılan kart            16  = 8 antlaşma × (tur:"antlasma" + tur:"sebep-sonuc")
kaynaklı                16 / 16   (hepsi TDV gövdesi okunarak)
müstakil TDV maddesinden  5 antlaşma · ülke/şehir/kişi maddesinden 3
doğrulayıcı             HATA 0 · UYARI 1 (yükleyici)
gerçek çizici           16 / 16 çizildi (app.js ekKartHtml ile)
ekranda görünür mü      🔴 HAYIR — app.js yükleyicisi dosyayı okumuyor (D099)
görsel                  0 — bu pilotta görsel/lisans işi YAPILMADI
```

---

## 1. NE ÖLÇTÜM — şartnamenin öncülleri

### 1.1 🔴 12 adayın 12'si zaten kartlı — öncül ÇÜRÜDÜ
`data/savaslar.js` `ANTLASMALAR` = **41 kayıt** (alanlar `t · ad · taraf · taraf_metin · ozet · topraklar · savas_basi`).
Şartnamenin 12 adayı — Amasya · Zitvatorok · Kasr-ı Şirin · Karlofça · Pasarofça · Belgrad 1739 · Küçük Kaynarca · Yaş · Bükreş 1812 · Edirne 1829 · Paris 1856 · Berlin — **hepsi 41'in içinde.**

- **Ölçüm:** *"41'de olanları atla"* harfiyen uygulanırsa pilot listesi **boş.**
- **Ölçüm:** 41'deki kart **ince** — `ozet` 16-71 kr, `topraklar` (hükümler) 84-310 kr, tek cümle.
- **Ölçüm:** madde madde **detay kartı** (`data/ekokuma.js`, `tur:"antlasma"`) yalnız **4**: Karlofça · Pasarofça · Küçük Kaynarca · Berlin.
- **Çıkarım:** şartnamenin niyetine en yakın iş, 12'nin **detaysız 8'i**. Bunu (A) şıkkı olarak M-3655'te önerdim ve cevap beklemeden onunla ilerledim (iki şıkta da şema ve kaynak işi aynı).

### 1.2 Gerçekten kartsız olan antlaşmalar başka yerde
```
çekirdek (olaylar*.js) k:"antlasma"          112
  ANTLASMALAR günüyle eşleşmeyen             75   ← butonu HİÇ çıkmıyor
ANTLASMALAR'ın çekirdeğe bağlanmayan kaydı    2   (1830-08-30 Sırbistan fermanı · 1912-10-18 Uşi)
```
75'in Osmanlı taraflı olanları: 1333 İzmit · 1352 Ceneviz · 1387 Ceneviz · 1403 Gelibolu · 1403 Süleyman Çelebi-Bizans · 1415 Karaman · 1491 Memlük · 1502 Venedik · 1533 İstanbul · 1547 İstanbul · 1553 Fransız ittifakı · 1573 İstanbul (Venedik) · 1612 Hollanda ahidnâmesi · 1621 Hotin · 1681 Bahçesaray · 1700 İstanbul · 1713 Edirne · 1724 İstanbul Mukāsemenâmesi · 1727 Hemedan · 1732 Ahmed Paşa · 1735 Gence · 1736 İstanbul · 1739 Niş · 1779 Aynalıkavak · 1790 Prusya ittifakı · 1802 Paris · 1808 Sened-i İttifak · 1809 Kal'a-i Sultâniyye · 1828 İskenderiye · 1830 ABD · 1847 II. Erzurum · 1849 Baltalimanı · 1854 İstanbul ittifakı · 1878 Edirne Mütarekesi · 1913 Katar/Londra · 1914 Alman ittifakı · 1918 Brest-Litovsk · 1920 Gümrü · 1921 Ankara İtilâfnâmesi.
Kalanı Osmanlı dışı (`olaylar_ek16.js` 22 · `olaylar_ok109.js` 5 · `olaylar_kamerika.js` 3 …).

### 1.3 "152" ve "548" sayıları — ÜRETEMEDİM (çürüdü DEĞİL, ölçülemedi)
Tanımı yazılı olmadığı için hangi ölçütle sayıldığını bilmiyorum. Denediğim ölçütler:
```
                                        ÇEKİRDEK   KUYRUK   TOPLAM
k / tur = "antlasma"                       112        315      427
b ~ antlaşma                                87        238      325
k/tur VEYA b ~ (antlaşma|mütareke|ahidnâme|sözleşme…)  125  269  394
b VEYA d ~ antlaşma                        195        370      565
```
Hiçbiri 152 ya da 548 vermiyor. Plan (§7) bu ölçülmüş bileşenlerle kuruldu.

---

## 2. NE ÖLÇTÜM — engeller (koddan, çalıştırarak)

### 2.1 🔴 Yükleyici dosyayı okumuyor (D099)
- `js/app.js:6505` `ekOkumaMerakYukle` yalnız `data/ekokuma.js` + `data/merak.js` yüklüyor; `kalan = 2` **sabit**.
- `EKOKUMA_TUR` kaynakları yalnız `window.EKOKUMA` / `MERAK` / `ANTLASMALAR` okuyor.
- ⇒ **`data/ekokuma_antlasma2.js`'teki 16 kart bugün ekrana GELMEZ.**
- 🔴 **Ve bu zaten bir kez olmuş:** `data/ekokuma_sh104.js` (`window.EKOKUMA_SH104`, 1 `sebep-sonuc` kartı) `app.js`'de de `index.html`'de de geçmiyor ⇒ o kart görünmüyor.
- İstek KITA 12'ye yazıldı (M-3656): liste + `kalan = liste.length` + tek bir havuz yardımcısı.

### 2.2 Zincir bağlantısı da yalnız `window.EKOKUMA`'da arıyor
`app.js` zincir tıklaması `(window.EKOKUMA || []).filter(...)` — başka dosyadaki kart id'si **kırık bağ** olur. ⇒ 16 kartın hepsinde `zincir: []` bilerek boş.

### 2.3 Çizici şemayı belirliyor
`ekKartHtml`'de `tur:"antlasma"` için **dal yok**; EKOKUMA antlaşma kartı SON ÇARE dalına düşüyor ve yalnız `ozet/metin/kisa/not/bag/aciklama` **dizgilerini** basıyor, başlık basmıyor.
⇒ `hukumler:[...]` gibi bir dizi **görünmezdi**. Yeni alan icat etmedim: mevcut 4 kartın biçimi (`metin` içinde ①②③) + `sebep-sonuc`un mevcut alanları (`bag` = **Önemi**).

---

## 3. NE YAZDIM — 16 kart

| antlaşma | kaynak (TDV) | slug durumu | antlaşma kartı kesinlik | sebep-sonuç `olay:` bağları |
|---|---|---|---|---|
| Amasya 1555 | `amasya-antlasmasi` | 200 canlı | kesin | 1555-05-29 |
| Zitvatorok 1606 | `zitvatorok-antlasmasi` | 200 canlı | **tartışmalı** (iki tarafın metni farklı) | 1593-07-01 · 1606-11-11 |
| Kasr-ı Şirin 1639 | `kasrisirin-antlasmasi` · `murad-iv` | 200 (çekirdeğin `kasr-i-sirin-antlasmasi`'sı 302) | kesin | 1638-12-24 · 1639-05-17 · 1746-09-04 · 1847-05-31 |
| Belgrad 1739 | `avusturya` · `rusya` · `sirbistan` · `belgrad` | müstakil madde **bulunamadı** | kesin | 1739-07-22 · 1739-09-18 · 1739-10-03 |
| Yaş 1792 | `yas-antlasmasi` | 200 canlı | kesin | 1783-04-19 · 1787-08-17 · 1792-01-10 · 1792-06-01 |
| Bükreş 1812 | `bogdan` · `rusya` · `sirbistan` | müstakil madde **bulunamadı** | kesin | 1804-02-14 · 1806-12-22 · 1812-05-28 · 1813-10-05 |
| Edirne 1829 | `edirne-antlasmasi` | 200 canlı | kesin | 1827-10-20 · 1828-04-26 · 1829-09-14 · 1830-02-03 |
| Paris 1856 | `paris-antlasmasi` | 200 canlı | kesin | 1853-10-04 · 1856-02-18 · 1856-03-30 |

Antlaşma kartlarının `olay:`ı yalnız antlaşma günü (mevcut 4 kartla aynı). `sebep.t` / `sonuc.t` kaynağın verdiği gün; kaynak yalnız yıl veriyorsa `YYYY-01-01` (Belgrad `1737-01-01` · Bükreş `1806-01-01`).
**Telif:** TDV metni kopyalanmadı, özetlendi. Tek kısa alıntı: Paris md. 9'daki *"yüksek değerinin takdir edildiği"* ifadesi.

---

## 4. SINAV — `C13` üç ayak + gerçek çizici

Öngörü (D022, koşmadan önce doğrulayıcının başına yazıldı): *16 kart · 0 HATA · 1 UYARI (yükleyici)*.

```
① GEÇME     ilk koşu  HATA 0 · UYARI 4  → ÖNGÖRÜ ÇÜRÜDÜ
            3 kartın `kisa`sı 57-60 kr — butonda 51'de kırpılacaktı
            düzeltildi → HATA 0 · UYARI 1  ✓
② ATEŞLEME  iki turda 7 bozuk kart, dosya KOPYASINA yazıldı:
            mükerrer id (antlasma-karlofca-1699 ekokuma.js'de) · tanımsız tur ·
            geçersiz kesinlik · kaynak TDV değil · sebep.t biçimi · bag yok ·
            çizilmeyen alan (hukumler) · hiç dizgi yok · olay günü çekirdekte yok
            ⇒ HEPSİ öttü
③ GİRDİ     sahte kartlar belleğe değil DOSYAYA yazıldı, alet dosyadan okudu
④ ÇİZİCİ    app.js'in KENDİ ekEsc + kesinlikRozeti + ekKartHtml fonksiyonları
            kaynaktan çıkarılıp 16 kart çizildi: 16/16 metin basıldı,
            sebep-sonuç 8/8 başlık (h4) VAR, antlaşma 8/8 başlıksız (mevcut 4 gibi),
            Zitvatorok rozeti "tartışmalı", 16/16 "Kaynak:" satırı VAR
```
🔴 **Ateşlemenin ilk turu bir dalı MASKELEDİ (D013):** "olay günü çekirdekte yok" dalını zorlamak için `1555-06-01` seçmiştim — ölçtüm, o gün çekirdekte **VAR** (`olaylar_ek14.js`, Ebüssuûd Efendi'nin gedik meselesi). Dal hiç sınanmamıştı; ikinci turda `1111-11-11` ile zorlandı ve öttü.
⚪ **Tarayıcıda ölçemedim:** dosya yükleyicide olmadığı için sayfada gösterilemiyor.

---

## 5. KAYNAK BULGULARI — hiçbirini DÜZELTMEDİM (dosyalar benim değil)

Ölçüm ve çıkarım ayrı; her birinin damgası yanında.

| # | kayıt | atlas | TDV | damga |
|---|---|---|---|---|
| a | **Amasya günü** | `1555-05-29` (çekirdek + ANTLASMALAR) | madde başlığı: *11 Receb 962 / 1 Haziran 1555*; esasları belirleyen mektup elçiye 1 Haziran'da verildi | **ÇELİŞKİ — ölçüldü.** Karta TDV'nin gününü metin olarak yazdım, `olay:` bağı atlasın gününde |
| b | **Zitvatorok toprak hükmü** | ANTLASMALAR: *"Toprak el değiştirmedi (savaş öncesi sınıra dönüş)"* | savaşta alınan yerler ellerinde kaldı; Eğri, Kanije, Estergon Osmanlı'da | **ÇELİŞKİ — ölçüldü.** Aynı pencerede iki kart yan yana çıkınca kullanıcı ikisini de görecek |
| c | 🔴 **Yaş tazminatı** | çekirdek `olaylar_ek5.js` 1792-01-10: *"On iki milyon kuruşluk savaş tazminatı yükümlülüğü de kabul edilerek"* | Rusya 24.000 kese (12 milyon kuruş) istedi; İstanbul meclisi ödemeyi kabule karar verdi; ama 7 Ocak 1792'de Bezborodko **çariçenin tazminattan tamamen vazgeçtiğini** ilan etti | **ÇELİŞKİ — ölçüldü.** Madde, meclis kararını antlaşma hükmü gibi yazıyor. TDV'nin sonuç paragrafı da *"razı olunması"*ndan söz ediyor — yani kaynak iki katmanlı, madde yalnız birini taşıyor |
| d | Belgrad günü | `1739-09-18` | `rusya` maddesi: *"Belgrad'da yapılan barışı (29 Eylül 1739)"* | **11 gün fark — Jülyen/Gregoryen adayı (D110). Ölçmedim.** |
| e | Yaş savaş ilanı | `1787-08-17` | `yas-antlasmasi`: *2 Zilkade 1201 (16 Ağustos 1787)* | 1 gün fark. Ölçmedim. Karta `sebep.t` olarak TDV'ninkini yazdım |
| f | TDV kendi içinde | — | `rusya`: Yaş *8 Ocak 1792* · `yas-antlasmasi`: *10 Ocak 1792* mühürlenip değiştirildi | atlas müstakil maddeyle (10 Ocak) uyumlu. Bildirim |
| g | Paris — Besarabya | ANTLASMALAR: *"Güney Besarabya Rusya'dan geri alınıp Boğdan'a katıldı"* | *"Hotin Kalesi ve … Bolgrad üzerinden Jalpuch gölüne uzanan bölge Rusya'ya bırakıldı"* | **ÇELİŞKİ İLAN ETMİYORUM (D092 — önce ayrıştır).** TDV Rusya'nın *elinde tuttuğu* yeri anlatıyor olabilir. İkinci kaynak gerek. **Karta bu hükmü yazmadım** |
| h | Amasya ve Kasr-ı Şirin: "Karabağ Safevî'de kaldı" | ANTLASMALAR | iki TDV maddesinde de **geçmiyor** | çelişki değil, **dayanak bulunamadı** |
| i | Bükreş: Kafkasya | — | `rusya`: *"Kafkaslar'da bazı yerlerin terki yanında"* — kimin kime bıraktığı belirsiz | **ölçülemedi**, karta yazmadım |
| j | ölü kaynak slugları (D063) | çekirdek `kaynak:` | `kasr-i-sirin-antlasmasi` 302 (canlı: `kasrisirin-antlasmasi`) · `belgrad-antlasmalari` 302 · `bukres-antlasmalari` 302 | **ölçüldü** — doğru bilgi, ölü adres |
| k | TDV tuzakları | — | `ivaz-mehmed-pasa` 200 ama yönlendirme kütüğü *"bk. HACI İVAZ PAŞA"* (D109) · `mahmud-i` · `mahmud-ii` 302 (padişah slug biçimi bulunamadı) · `kirim-savasi` 302 | bildirim |

---

## 6. NEYİ BULAMADIM / ÖLÇMEDİM

- **Belgrad 1739 ve Bükreş 1812'nin müstakil TDV maddesi: BULUNAMADI.** Denenen: `belgrad-antlasmasi` · `belgrad-antlasmalari` · `belgrad-antlasmasi-1739` · `bukres-antlasmasi` · `bukres-antlasmalari` · `bukres-antlasmasi-1812` (hepsi 302). TDV arama sayfası sonuçları JavaScript ile yüklüyor, `curl` boş döndü ⇒ **"TDV'de yok" DEMİYORUM**, "bu yollarla bulunamadı" diyorum. Bu iki kartın hükümleri ince (Bükreş 3 hüküm).
- **İkinci (akademik) kaynak aranmadı** — 5b(g)'yi çözmek için gerekiyor.
- **Görsel ve lisans işi yapılmadı.** (TDV sayfalarında Amasya minyatürü ve Yaş haritası var; TDV görselleri başka ortamda yayımlamayı **yasaklıyor**, kullanılamaz.)
- **Tarayıcıda görünürlük ölçülemedi** (yükleyici).
- **Kuyruk maddelerinde (kronoloji*.js) butonun çıkıp çıkmadığını ölçmedim** — `ekKartBagliMi` `o.t`'ye bakıyor; kuyruk maddeleri aynı `olaylar` dizisine giriyorsa çıkar.
- **75 kartsız çekirdek antlaşmaya ve 29 detaysız temel karta dokunmadım.**

---

## 7. TOPLU ÜRETİM PLANI (şartname ③)

### 7.1 Evren — ölçülmüş
```
temel kart (ANTLASMALAR, savaslar.js)          41
  detaylı                                     12  (4 eski + 8 bu pilot)
  detaysız                                    29
çekirdek k:"antlasma", temel kartı YOK          75  (Osmanlı taraflı ~40)
kuyruk tur:"antlasma"                          315  (kronoloji_fransa 22 · balkan 17 · ingiltere 17 · isvec 16 …)
```

### 7.2 Önerilen dalgalar (ONCELIK.md çöl seyyahı: Osmanlı önce)
```
ÖN KOŞUL   KITA 12 yükleyici havuzu — olmadan hiçbir dalga ekrana gelmez
DALGA 1    29 detaysız temel karta detay + sebep-sonuç (58 kart)
           tek dosya sahibi (ben ya da bir içerik kolu) · savaslar.js'e dokunmaz
DALGA 2    75 kartsızın Osmanlı taraflı ~40'ı
           🔴 İKİ SAHİP: temel kart ANTLASMALAR'a (savaslar.js) + detay ekokuma'ya
           ⇒ sahiplik kararı SENDE; yoksa buton temel kartsız, yalnız detayla çıkar
DALGA 3    kuyruk 315 — çoğu Osmanlı dışı, TDV kapsamı zayıf, akademik kaynak
```

### 7.3 Pilotun birim ölçüsü
```
antlaşma başına 2 kart
müstakil antlaşma slugu canlı 5 / 8 · ölü 3 / 8
  (CLAUDE.md §4'ün 553 sluglık taramasında ANTLAŞMA cinsi 7 / 25 ölüydü;
   8'lik örneklem bir oranı doğrulamaz, yalnız aynı yönü gösterir)
indirilen sayfa sayısını kaydetmedim — ölçmedim
ölü slugda hükümler 3-4 ayrı maddeden toplandı ve İNCE kaldı (Bükreş 3 hüküm)
süreyi ÖLÇMEDİM — tahmin vermiyorum
```

### 7.4 Toplu üretimin kuralları (bu pilotta sınandı)
1. `olay:` günü çekirdek maddenin `t`'siyle **birebir** — `ARAC-KITA21-EKOKUMA-DOGRULA-0913.js` sınıyor.
2. `tur:"antlasma"` kartında **yalnız dizgi alanları** (`metin`); dizi alanı görünmez.
3. `sebep-sonuc` kartında `bag` = **"Önemi: …"**, `kisa` ≤ 52 kr.
4. `zincir: []` — yükleyici havuzu gelene kadar.
5. ANTLASMALAR temel kartıyla **çelişen** bir hüküm karta yazılmaz; rapora yazılır (5b-g emsali).
6. Müstakil madde ölüyse `kaynak:`a *"müstakil madde bulunamadı"* açıkça yazılır.

---

## 8. NE İSTİYORUM

1. **Kapsam onayı:** (A) ile yazdım — 8 detaysız aday. (B) dersen aynı şemayla 75'e geçerim.
2. **KITA 12 yükleyicisi** (M-3656) — ekrana gelmek için tek engel.
3. **Üç çelişkinin sahiplerine sevki:** (c) Yaş tazminatı → `olaylar_ek5.js` sahibi (KITA 14) · (a) Amasya günü ve (b) Zitvatorok toprak hükmü → `savaslar.js` sahibi.
4. **Paris-Besarabya (5g)** için ikinci kaynak araştırması kime?
5. **Dalga planı (§7.2)** ve özellikle Dalga 2'nin iki sahipli yapısı için karar.
