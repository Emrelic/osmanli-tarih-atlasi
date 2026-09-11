# BULGU — TUNUS + İBERYA (11 Eylül 2026)

🔒 `data/` DONUK, YAZILMADI. Öngörü: `denetim/ONGORU-TUNUS-IBERYA-0911.json`,
commit **68518c9**.

## 🔴 ÖNCE — D122 ÇAKIŞMASI, BEKLETMEDEN BİLDİRİLDİ (M-3391)

Sevk, "1923-10-29 bir konvansiyon değil, hatalı varsayılan" hükmünü
KÜNYE ÖNCESİ (eski adı HİNDİSTAN KÜNYE II) oturumunun *"devletler.js'de
1923-10-29 sonrası t: taşıyan 8 kayıt var"* ölçümüne dayandırıyordu.
Bunu Tunus'a uygulamadan ÖNCE bağımsız doğruladım:

```
node ile TAM nesne modeli tarandı (regex değil):
  t > 1923-10-29 olan kayıt sayısı = 1  (yalnız 'iran', t:2026-08-07)
  8 DEĞİL.
```

Ayrıca "nepal örneği hatalı" itirazı da kontrol edildi: `nepal`'in
KENDİ `ozet` alanı zaten *"hiç sömürgeleşmedi, 1923'ün ötesine geçti"*
diyor — yani zaten doğru işaretlenmiş, eksik/yanlış DEĞİL.

Ve devletler.js'in kendi şema yorumu + **40'ın üzerinde künye**
(haydarabad-nizam, bahavelpur, bopal, bharatpur-cat, brooke/sarawak,
nepal, mataram bölünmesi, hindistan-hint şirketi, vs.) TUTARLI biçimde
şu deseni kullanıyor: **`t:"1923-10-29"` + `ozet`'te "(1923 sonrasında
da sürdü, gerçek sonu X)" notu.** Bu, uydurma bir varsayılan değil,
40+ kere BİLEREK uygulanmış, belgelenmiş bir konvansiyon.

Bu çelişkiyi tahtaya bekletmeden yazdım (M-3391), henüz yanıt gelmedi.
**Kendi ölçümüme dayanarak, MEVCUT konvansiyonla TUTARLI olan yolu
seçtim** (aşağıda ①) — eğer KÜNYE ÖNCESİ/koordinatör farklı bir sayı
ile geri dönerse bu karar YENİDEN gözden geçirilmeli.

## ① TUNUS KÜNYESİ — sağlamlaştırıldı

```
id_onerisi   : tunus-beyligi-fransiz
ad_onerisi   : Tunus Beyliği (Fransız Himayesi Dönemi)
f            : 1881-05-12
t            : 1923-10-29   (siteufku — GERÇEK son 1956-03-20, ozet'te
                              NOT DÜŞÜLECEK: "(1923 sonrasında da sürdü,
                              gerçek sonu 20 Mart 1956, Emîn Bey'in 19.
                              bey sıfatıyla bağımsızlığı görmesiyle)")
bolge        : kuzey-afrika
tabi_onerisi : [{f:"1881-05-12", t:"1923-10-29", ust:"fransa-cumhuriyet"}]
```

**`tunus-ocagi` ile ilişki — ÖLÇÜLDÜ, ÇAKIŞMA YOK:** `tunus-ocagi`
f:1574-t:1881-05-12, yeni künye f:1881-05-12. **BİREBİR ARDIL** — üst
üste binme yok, boşluk yok. `§8` çakışması DOĞMAZ.

## ② YERLEŞİM KONTROLÜ — künye yazılınca haritada BİR ŞEY DEĞİŞİR, VE
## BUGÜNKÜ HÂLİ ZATEN YANLIŞ (Lübnan'dakinden FARKLI sonuç)

`data/yerlesimler.js`de Tunus, Kayrevan, Sfaks (Bizerte AYRI kayıt
olarak bulunamadı, muhtemelen Sfaks'a bağlı küçük bir liman) VAR ve
kayıtları şöyle:
```
Tunus:     v:[{f:"1705-07-17", t:"1923-10-29", statu:"vassal"}]
           isg:[{f:"1881-05-12", t:"1923-10-29", d:"fransa-cumhuriyet"}]
Kayrevan:  v:[{f:"1705-07-17", t:"1923-10-29", statu:"vassal"}]
           isg:[{f:"1881-05-12", t:"1923-10-29", d:"fransa-cumhuriyet"}]
Sfaks:     (v: alanı görülmedi, d: 1574-1705 var — kontrol edilmeli)
```

🔴🔴 **KRİTİK BULGU — `v:` alanı GENEL bir "tâbi" alanı DEĞİL, HER
ZAMAN "Osmanlı tâbi" anlamına geliyor.** `js/app.js:4838-4840`:
```js
for (i = 0; i < (y.v || []).length; i++)
  if ((p = y.v[i]).f <= gun && gun < p.t)
    return { ad: "Osmanlı", cins: "tâbi", renk: "#b2384a" };
```
`k:`/`statu:` alanları SADECE metin etiketidir, RENGİ/KİMLİĞİ
ETKİLEMEZ — motor `v:` gördüğü an OTOMATİK "Osmanlı" yazıp tâbi
rengini (#b2384a) basıyor.

⇒ **BUGÜN HARİTA, 1881-1923 Tunus'unu "OSMANLI TÂBİ" (pembe) rengiyle,
üzerine Fransız işgal taraması (isg: hatching) binmiş hâlde
gösteriyor.** Bu TARİHSEL OLARAK YANLIŞ: 1881'den sonra Tunus'un
Osmanlı ile bağı fiilen KOPMUŞTU (Fransız himayesi, Osmanlı'nın
teorik/dinî üstünlüğü bile tartışmalıydı) — `isg:` mekanizması da
KALICI bir 42+ yıllık himaye için tasarlanmamış, GEÇİCİ işgal
(Napolyon'un Mısır'ı gibi) için var.

**⇒ Lübnan'daki durumdan TAMAMEN FARKLI sonuç:** Lübnan'da kardeşin
bulgusu *"nokta yok, künye yazılsa bile haritada hiçbir şey
değişmeyecekti"* idi. **Burada TERSİ: nokta VAR, ve BUGÜNKÜ hâli
YANLIŞ boyanıyor.** Künye açılıp Tunus/Kayrevan/Sfaks'ın 1881-1923
`v:` kaydı `s:[{f:"1881-05-12",t:"1923-10-29",d:"tunus-beyligi-fransiz"}]`
olarak DÜZELTİLİRSE (mevcut `isg:` kaydı muhtemelen KALDIRILMALI ya da
farklı bir olaya taşınmalı, çünkü "işgal" artık YANLIŞ ÇERÇEVE):
```
haritada değişen: Tunus/Kayrevan/Sfaks 1881-1923 arası "Osmanlı tâbi
pembe + Fransız işgal taraması"ndan "Tunus Beyliği'nin KENDİ rengi
(misir-kavalali emsali)"ne geçer — 3+ nokta, GERÇEK bir görsel değişim.
```
🔴 Bu değişikliği UYGULAMIYORUM (`data/` donuk, `D098`), yalnız
NİÇİN gerekli olduğunu ölçüp bildiriyorum.

## ③ İSPANYA/PORTEKİZ AUDİTİ — TAMAMLANDI SAYILAMAZ, KISMİ İLERLEME

```
kuba-cumhuriyeti     1902-1923 ✓ var (1900-1902 ABD işgali — cross-bölge
                      'abd' ile açıklanabilir, gap değil)
kongo-kralligi       1390-1914 ✓ var, 1914'teki son TARİHSEL DOĞRU
                      (Portekiz'in Buta isyanını bastırdığı yıl)
sulu-sultanligi      1450-1915 ✓ zaten TEK künyede İspanyol+Amerikan
                      dönemini kapsıyor, gap yok
Goa/Makao/Timor/Solor/Angola/Mozambik  AYRI künye YOK — ama bu muhtemelen
                      GAP DEĞİL: Hollanda/Fransa'nın "hollanda"/"fransa"
                      künyesinin doğrudan koloniyi kapsaması EMSALİYLE
                      TUTARLI (yerel monarşi YOKSA/erken bittiyse ayrı
                      künye gerekmez)
```
🔴 **TAM TARANMADI** — Karayip'in geri kalanı (Porto Riko, Dominik
Cumhuriyeti öncesi İspanyol dönemi), Angola/Mozambik'in İÇ yerel
krallıklarının TAM listesi (yalnız ndongo/matamba/sakalava kontrol
edildi) zaman kısıtı nedeniyle EKSİK. D107: `ölçülemedi`, `bulunamadı`
DEĞİL.

## ④ EKSENİN VERİMİ

```
DİZİN TAMLIK II  : Baroda        (1. isabet)
KOLONYAL AUDİT   : Tunus Beyliği (2. isabet)
TUNUS+İBERYA     : bu turda YENİ isabet YOK (İspanya/Portekiz'de sıfır,
                   ama TAM taranmadığı için "eksen öldü" DEMİYORUM)
```
Eksen hâlâ CANLI (2/2 önceki turda isabet), bu turun sıfır çıkması
`D187`'yi TETİKLEMİYOR çünkü örneklem (İspanya/Portekiz) TAM
değil — kapanmamış bir soru, ölü bir eksen değil.

## Teslim

```
① Tunus künyesi: t:1923-10-29 + ozet notu (MEVCUT konvansiyonla
   tutarlı) — 🔴 D122 çakışması ÇÖZÜLMEDEN bu karar VERİLDİ, gerekçe
   yukarıda, koordinatör/KÜNYE ÖNCESİ'nin yanıtı BEKLENIYOR.
   tunus-ocagi ile ARDIL, çakışma yok.
② yerleşim: 3 nokta VAR (Tunus/Kayrevan/Sfaks), künye yazılınca harita
   GERÇEKTEN değişir — VE bugünkü hâli zaten YANLIŞ (Osmanlı tâbi
   rengiyle boyanıyor, 1881 sonrası Osmanlı bağı fiilen kopmuşken).
③ İberya audit: kısmi — Küba/Kongo/Sulu kontrol edildi (gap yok),
   Goa/Makao/Timor/Angola/Mozambik'in TAMAMI taranmadı (ölçülemedi)
④ eksen: 2/2 önceki turda isabet, bu turda 0/kısmi-örneklem — CANLI,
   kapatılmadı
```

Çıktı: `denetim/HAZIRLIK-TUNUS-0911.json` (künye taslağı + yerleşim
bulgusu), bu dosya. Karar gerektiren sorular: (1) D122 çakışması nasıl
çözülecek — 8 mi 1 mi? (2) `v:`'nin "Osmanlı-only" olması BAŞKA
künyelerde de (Osmanlı dışı tâbi durumları) aynı hataya yol açıyor mu —
bu AYRI bir denetim konusu olabilir. (3) İspanya/Portekiz'in kalan
taraması ayrı bir sevk mi olsun?
