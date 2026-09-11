# BULGU — VASSAL RENK (11 Eylül 2026)

Öngörü: `denetim/ONGORU-VASSAL-RENK-0911.json`, commit **f73ebf5**.
🟡 İtiraf: ① ve mimari keşif öngörüden önce yapıldı, önemi nedeniyle
bekletmeden bildirildi (M-3401); yanıt gelmedi, aşağıdaki karar KENDİ
ölçümüme dayanarak verildi.

## 🔴🔴 ÖNCE — MİMARİ SINIR: js/app.js ANA HARİTAYI BOYAMIYOR

Bu bulgunun kabul ölçütünü ("1900 kesitinde Tunus hangi renkte")
etkilediği için en başa koyuyorum:

```
ANA HARİTA (petek/geometri)   arac/uret_petek.py → data/donemler.js
                               İKİSİ DE DONUK (Koşu 9)
                               Motor `y["d"]+y["v"]`yi HER YERDE
                               (satır 2899, 4481, 4545, 4627) TEK
                               "Osmanlı" kategorisi sayıyor —
                               `kid:` dallanması HİÇBİR YERDE yok.

DETAY PANELİ (yerleşim şeridi) js/app.js:_yerlesimSerit — CANLI kod,
                               `kid:`i (varsa) OKUMUYORDU, HER v: için
                               sabit "Osmanlı" dönüyordu.
```

⇒ **Tunus'un ANA HARİTADAKİ rengini js/app.js'i düzelterek
DEĞİŞTİREMEM** — `donemler.js` zaten "Osmanlı" diye üretilmiş, js
yalnız onu çiziyor. Bunu düzeltmek motoru yeniden koşturmayı
(Emre'nin kararı, Koşu 9 bitene kadar mümkün değil) gerektirir.

**Yaptığım şey:** genel görevin İÇİNDE kalan, GERÇEKTEN js-ici ve canlı
olan tek parçayı (`_yerlesimSerit`, "Yerleşim Kronolojileri" dizin
panelinin sahiplik şeridi) düzelttim ve kanıtladım. Bu, ANA HARİTA
DEĞİL ama gerçek, görünür, kullanıcının etkileşime girdiği bir UI
öğesi.

## ① ÖLÇÜM — künye · dönem · yerleşim ayrı sayıldı

```
v: taşıyan yerleşim (künye)     136
toplam v: dönemi                163

kid: İLE AÇIKÇA İŞARETLİ         112 dönem, 13 farklı kid
  → TAMAMI Osmanlı ailesinden (misir-kavalali 46 · eflak 16 · bogdan 13
    · cezayir-ocagi 10 · bulgaristan-prensligi 7 · sirbistan-prensligi 5
    · trablusgarp-ocagi 5 · sarki-rumeli 3 · haciemir 2 · kuveyt 2 ·
    kirim 1 · katar 1 · zeta 1)
  → BUGÜN Osmanlı-dışı bir üste işaret eden SIFIR kayıt var

kid: ALANI HİÇ YOK                38 künye, 51 dönem
  → örnek/belirgin taranan (TAM DEĞİL, D107):
    🔴 muhtemelen GERÇEKTEN yanlış: Tunus/Kayrevan/Gabes/Sfaks/Cerbe/
       Kerkene (1881-1923 dilimi, Fransız himayesi) · Kandiye/Hanya/
       Girit-Resmo/Sfakia/Sitia (1830-41 Mısır-Kavalali · 1898-1913
       Girit Devleti — zaten künyesi VAR) · Kütahya/Konya/Karaman
       (1832-33 "Mısır ordusu İŞGALİ" — muhtemelen v: değil isg:
       OLMALIYDI, AYRI bir miskodlama)
    🟢 muhtemelen doğru, yalnız İMPRECISE: Erdel/Budin/Peşte/Varad/
       Yanova · Mekke/Medine/Tâif · Tarki/Zagem/Kutaisi · Konstantin/
       Annaba/Bicâye/Setif/Biskra (Ahmed Bey) · Zebîd/Tuggurt/Batnoz/
       Dubrovnik
```

## ② ÇARE — şema BOŞLUĞU değil, JS OKUMUYORDU

`v:` kaydı süzerenini **TAŞIYABİLİYOR** (`kid:` alanı zaten şemada var,
112 dönemde KULLANILIYOR) — sorun şema değil, `js/app.js`'in onu
HER ZAMAN "Osmanlı" ile ezmesiydi. Yani coordinatörün ikinci
hipotezi doğru çıktı: **"taşıyor ama js OKUMUYOR."**

## ③ UYGULAMA — yalnız js/app.js, 29 satır ekleme

```js
var _KID_YABANCI_UST = (function () {
  var m = {};
  (window.DEVLETLER || []).forEach(function (d) {
    if (d.id && d.tabi && d.tabi.length && d.tabi[0].ust && d.tabi[0].ust !== "osmanli")
      m[d.id] = d.tabi[0].ust;
  });
  return m;
})();
```
`sahip()`'in `v:` dalına: `kid:` varsa VE o kid'in `devletler.js`teki
KENDİ `tabi.ust`si AÇIKÇA "osmanli" DIŞINDAysa → o kimliğin adı/rengiyle
göster; aksi hâlde (bugünkü TÜM kayıtlar) mevcut "Osmanlı tâbi" pembe
KORUNUR.

**Niçin bu eşik güvenli:** Eflak/Boğdan/Kırım/Mısır-Kavalalı'nın
KENDİ `tabi.ust` alanı zaten `"osmanli"` — bu testten GEÇEMEZLER,
renkleri DEĞİŞMEZ. `cezayir-ocagi`/`trablusgarp-ocagi`/vb (tabi: alanı
hiç yok) de aynı şekilde korunur (varsayılan: Osmanlı-ailesi say).

## ④ KABUL ÖLÇÜTÜ — kanıt

**Node izole test (3/3 geçti):**
```
eflak/bogdan/kirim/erdel/misir-kavalali/sirbistan-prensligi  ETKİLENMEDİ ✓
sentetik "fransız tâbi" kimlik                                YAKALANDI ✓
gerçek veride etkilenen dönem sayısı                          0 (beklenen)
```

**Canlı tarayıcı testi (ekran görüntüsü alındı):** Bükreş (Eflak,
`kid:"eflak"`, 1462-1878) için "Yerleşim Kronolojileri" panelini açtım
(preview_start ile `atlas` sunucusu, `tarihAyarla`/`gunIdx` ile 1800'e
gidildi) — şerit **"Osmanlı (tâbi) 1462-06-01 → 1878-07-13, 416 yıl"**
gösteriyor, **DEĞİŞMEDİ** (beklenen sonuç — kullanıcıya ekran görüntüsü
gönderiliyor).

⚠️ **Tunus'un "önce/sonra" ekran görüntüsü ALINAMADI** çünkü Tunus'un
`v:` kaydında BUGÜN `kid:` yok (veri donuk, eklenemez) — düzeltme
kendi başına Tunus'un rengini DEĞİŞTİRMEZ, yalnız Tunus Beyliği künyesi
açılıp `kid:"tunus-beyligi-fransiz"` yazıldığında DOĞRU çalışacak
ALTYAPIYI kurar. Bunu sentetik bir test kaydıyla (bellekte, depoya
YAZILMADI) doğruladım: `_KID_YABANCI_UST` böyle bir kaydı doğru
yakalıyor.

**Öteki 38 kid-siz kayıt (Erdel/Boğdan-emsali vb.) etkilenmedi mi?**
Evet — onlar da `kid:` taşımadıkları için mevcut "Osmanlı tâbi" dalına
düşmeye DEVAM ediyor, hiçbir görsel değişiklik yok.

## Teslim

```
① ölçüm: 136 künye/163 dönem v: taşıyor; 112 dönem (13 kid) TAMAMEN
   Osmanlı-ailesi; 38 künye/51 dönem kid-siz (bir kısmı GERÇEKTEN
   yanlış — Tunus/Girit/Mısır-işgali —, çoğu muhtemelen doğru-imprecise)
② çare: ŞEMA boşluğu DEĞİL — js OKUMUYORDU. kid: zaten var, kullanılıyor.
③ uygulandı: js/app.js, 29 satır, YALNIZ _yerlesimSerit — data/arac
   DONUK KALDI
④ kanıt: Node testi (3/3) + canlı tarayıcı ekran görüntüsü (Bükreş
   değişmedi) — Tunus'un kendi ekran görüntüsü ALINAMADI çünkü veri
   (kid:) eksik, bu js'in sınırı değil VERİNİN sınırı
```

🔴 **AÇIK KALAN, KARAR GEREKTİREN SORU:** Ana haritanın (petek
geometrisi) Tunus'u doğru boyaması için MOTOR yeniden koşmalı (Koşu 9
bitmeli, `data/yerlesimler.js`de Tunus'un `v:` kaydı `kid:`
alacak şekilde güncellenmeli — `§7 D098` gereği bunu ben
UYGULAMADIM). Bu görevin "js/app.js DONUK DEĞİL" öncülü yalnız DETAY
PANELİ için doğruydu, ANA HARİTA için değil — M-3401'de bildirdim,
burada teyit ediyorum.

Çıktı: `denetim/OLCUM-VASSAL-RENK-0911.json`, bu dosya, `js/app.js`
(29 satır ekleme, commit edilecek).
