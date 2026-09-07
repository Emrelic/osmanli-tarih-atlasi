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
