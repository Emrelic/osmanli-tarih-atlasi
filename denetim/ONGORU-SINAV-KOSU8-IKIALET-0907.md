# ÖNGÖRÜ — İKİ ALET KALEMİ

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> 🔴 **ÖLÇÜMDEN ÖNCE YAZILDI.** `_bayat_uygula.py` **açılmadı** (yalnız
> çöküş satırı görüldü: `KeyError: 'ATLAS_KOK'`); `ALASKA-DEVIR-0907`in
> yalnız **ilk kaydı** görüldü, şeması karşılaştırılmadı.
> Sahibi: bu oturum. Sınav anı: **hemen.**

---

## Ⓐ `ATLAS_KOK` NE OLMALI?

```
Ö-I1  `ATLAS_KOK` = DEPO KÖKÜ olacak (data/ · arac/ · denetim/'in üstü)
      ① beklenen: evet
      ② MAZERET YOK — öteki dört uygulayıcının hepsi kökü
         `os.path.dirname(os.path.dirname(__file__))` ile buluyor;
         adın kendisi de («ATLAS KÖKÜ») bunu söylüyor.
      ③ nereden: `arac/_bayat_uygula.py` kaynağı · birim YOL
      ④ neye karşı: bugünkü depo

Ö-I2  🔴 AYNI ALETTE BAŞKA ORTAM BAĞIMLILIĞI DA ÇIKACAK
      ① beklenen ≥1 tane daha (`os.environ` kullanımı)
      ② MAZERET VAR: tek bir `os.environ` çağrısı da olabilir —
         bir alet bir kez o yolu seçtiyse tekrarlaması BEKLENİR ama
         ZORUNLU değil. Bant o yüzden tek yönlü.
      ③ nereden: aynı kaynakta `os.environ` sayımı · birim ÇAĞRI
      ④ neye karşı: bugünkü depo

Ö-I3  ÇEVRE DEĞİŞKENİ VERİLİNCE ALET KOŞACAK
      ① beklenen: `ATLAS_KOK` set edilirse kuru koşu çalışır
      ② MAZERET VAR: başka bir eksik (girdi dosyası, glob) çıkabilir;
         `KeyError` yalnız İLK engeldir, tek engel olduğunu göstermez.
      ③ nereden: koşturma denemesi
      ④ neye karşı: bu tur
```

## Ⓑ `ALASKA-DEVIR-0907.json` HANGİ ALETE AİT?

```
Ö-I4  🔴 ŞEMASI `_sahiplik_uygula`YA UYMAYACAK
      ① beklenen: UYMUYOR
      ② MAZERET YOK — bugün ilk kaydını gördüm:
           {"ad": "...", "eski": ["1281-01-01..1763-02-10 ingiltere", …],
                         "yeni": [...]}
         `eski`/`yeni` birer İNSAN OKUNUR ZİNCİR DİZGİSİ; uygulayıcı
         ise yapılandırılmış `s:[{f,t,d}]` bekliyor (bugün ölçüldü:
         `ALAN_RX = d·s·v·isg`).
      ③ nereden: iki şemanın karşılaştırılması · birim ALAN
      ④ neye karşı: bugünkü depo

Ö-I5  FARK «ALAN ADI» DEĞİL «TEMSİL» OLACAK
      ① beklenen: eksik olan bir alan değil, verinin BİÇİMİ
      ② MAZERET YOK — bir alan eksikse eklenir; bir dizgi
         yapılandırılmış veriye çevrilmek zorundaysa bu bir
         DÖNÜŞTÜRÜCÜ ister, bir alan değil.
      ③ nereden: aynı karşılaştırma
      ④ neye karşı: bugünkü depo

Ö-I6  BU DOSYA İÇİN «HANGİ ALET» SORUSUNUN CEVABI «HİÇBİRİ» OLACAK
      ① beklenen: mevcut beş aletten hiçbiri
      ② MAZERET VAR: `_kademe_uygula`nın node izdüşümünü bugün
         okumadım; onun girdi biçimi farklı olabilir.
      ③ nereden: beş aletin girdi biçimi
      ④ neye karşı: bugünkü depo
```

🔴 **MAZERETİ OLMAYANLAR: Ö-I1 · Ö-I4 · Ö-I5.**
🟡 Mazereti olanlar: Ö-I2 · Ö-I3 · Ö-I6 — mazeretleri yukarıda yazılı.

---

## ⚠️ SINIRLAR

1. `arac/*` içindeki parmak izli üçlüye (`uret_petek` · `renkler` ·
   `girdi`) **yazmayacağım**; `_bayat_uygula` onlardan biri **değil**
   ama yine de **benim dosyam değil** — bulup **bildireceğim.**
2. `ATLAS_KOK`u geçici olarak set edip koşturmak **çevreyi değiştirmez**
   (yalnız o alt süreçte geçerli) — ama yine de **`--yaz` KOŞMAYACAĞIM.**
3. Ⓑ'de bir dönüştürücü **önerebilirim**, **yazamam**: hangi alete ait
   olduğu bir sözleşme kararı ve o koordinatörde.

---
---

# ⇒ SINAV SONUCU — ölçüldü · 6'nın 5'i tuttu

## Ⓐ `ATLAS_KOK` — ÇÖZÜLDÜ
```
_bayat_uygula.py:18   PROJE = os.environ["ATLAS_KOK"]
⇒ TEK `os.environ` çağrısı  (Ö-I2 ÇÜRÜDÜ, mazereti vardı)
SINANDI: ATLAS_KOK=<depo kökü> verilince alet TAM KOŞUYOR —
   «TOPLAM uygulanan: 0 · yön kısıtıyla reddedilen: 67»
```
⇒ Tek engel **belgesiz bir ortam değişkeniydi.**

### 🔴 VE DAHA BÜYÜK BİR BULGU: BEŞ ALET, KÖKÜ ÜÇ AYRI YOLLA BULUYOR
```
_kunye_uygula       os.path.dirname(os.path.dirname(abspath(__file__)))
_kronoloji_uygula   aynı
_sahiplik_uygula    os.getcwd()
_kademe_uygula      os.getcwd()
_bayat_uygula       os.environ["ATLAS_KOK"]
```
Üçü de **farklı şey**: `__file__` nereden koşulursa koşulsun doğru;
`getcwd()` **yalnız depo kökünden** koşulursa doğru; `environ` ise
**önceden kurulmuş bir çevre** istiyor.
🔴 **`os.getcwd()` BELGESİZ BİR ÖN KOŞULDUR:** o iki alet başka bir
dizinden çağrılırsa **sessizce yanlış yeri okur** — çökmez, **yanılır.**
📌 Bugün ölçülen *"aynı iş, üç ayrı anahtar adı"* (`SINIR-HUKUKI`) ve
*"~50 ayrı alan adı"* bulgularının **ALET yüzü**: sözleşme yokluğu
yalnız veride değil, **araçların kendi kurulumunda** da var.

## Ⓑ `ALASKA-DEVIR-0907` — HİÇBİR ALET OKUYAMAZ
```
ALASKA kaydı  {"ad", "eski":[str], "yeni":[str]}
   ve eski/yeni birer İNSAN OKUNUR ZİNCİR DİZGİSİ:
   "1763-02-10..1867-07-01 ingiliz-kuzey-amerika"
_sahiplik_uygula süzgeci (:88)  `r.ad` VE
   (d|s|v|isg|m|kaynak|bos|neden|not|kur)'dan EN AZ BİRİ
⇒ ALASKA'da `ad` VAR, öteki ONUNDAN HİÇBİRİ YOK ⇒ SÜZGEÇTE ELENİR
```
🟢 **Ö-I5 tuttu ve önemli:** eksik olan bir **alan** değil — `yeni` bir
**dizgi listesi**, uygulayıcı yapılandırılmış `s:[{f,t,d}]` bekliyor.
***Bir alan EKLENİR; bir temsil DÖNÜŞTÜRÜLÜR.*** Gereken şey bir
**dönüştürücü.**

🟡 Ve bir **yanlış pozitif elendi**: `grep -c "eski|yeni"`
`_kademe_uygula`da 4 sonuç verdi — ama onlar onun **KENDİ ÇIKTI
biçimi** (`eski: (r.mevcut||{}).k`), **girdisi değil.** Girdisi
`r.yerlesim`/`r.mevcut`/`r.oneri` istiyor.

## ÖNGÖRÜ SINAVI
```
Ö-I1 ATLAS_KOK = depo kökü   🟢   MAZERET YOKTU
Ö-I2 başka ortam bağımlılığı 🔴 ÇÜRÜDÜ (tek çağrı)  MAZERET VARDI
Ö-I3 değişken verilince koşar 🟢  MAZERET VARDI
Ö-I4 şema uymaz              🟢   MAZERET YOKTU
Ö-I5 fark TEMSİL             🟢   MAZERET YOKTU
Ö-I6 hiçbir alet             🟢   MAZERET VARDI
```

## ÖNERİ — sözleşme kararı DEĞİL, o koordinatörde
```
Ⓐ `_bayat_uygula:18` → `__file__` tabanlı emsale çevrilsin.
   En sağlamı o: `getcwd()` de `environ` da BELGESİZ ön koşul taşıyor.
Ⓑ ALASKA için bir DÖNÜŞTÜRÜCÜ: `eski`/`yeni` dizgilerini
   `s:[{f,t,d}]`e çevirip `data/yer_yama_alaska.js` üretsin.
   ⚠️ Dizgi ayrıştırmak bu projede TEHLİKELİ (bugün yedi vaka);
     dönüştürücünün `--kuru` çıktısı ELLE doğrulanmalı.
```
