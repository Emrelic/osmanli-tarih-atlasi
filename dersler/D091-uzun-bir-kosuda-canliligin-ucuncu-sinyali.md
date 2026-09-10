# UZUN BİR KOŞUDA CANLILIĞIN ÜÇÜNCÜ SİNYALİ: CPU DELTASI — ve ötekilerin çözemediği belirsizliği O çözer.

> Kimlik `D091` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🟢🟢 **UZUN BİR KOŞUDA CANLILIĞIN ÜÇÜNCÜ SİNYALİ: CPU DELTASI — ve
  ötekilerin çözemediği belirsizliği O çözer.** *(5 Eylül 2026 · koşu 5b)*

  Bu proje koşu ölçümünü iki sinyale dayandırıyordu ve ikisi de **belirli
  bir belirsizliği taşıyor**:
```
① PID canlı mı        → süreç var, ama ÇALIŞIYOR mu bilinmez (asılı olabilir)
② MERDİVEN ilerledi mi → sessizlik BELİRSİZ: ya basamak İÇİNDE uzun bir
                         hesap sürüyor, ya BASAMAKLAR ARASI, ya TAKILDI
```
  5 Eylül 14:37'de merdiven **30,5 dakika** sessizdi (gözlenen bant
  12-35 dk'nın tepesi) ve bekçinin saatlik raporu **52 dakika** öncesine
  aitti. İki sinyal de sınırdaydı ve hiçbiri ayırt etmiyordu. Üçüncüsü
  ölçüldü:
```powershell
$c1 = $p.CPU; Start-Sleep 8; $p.Refresh(); $p.CPU - $c1
→ 8 saniyede **+7,98s**  ·  bellek 192 → 211 MB  ·  8 iş parçacığı
```
  ⇒ **Tam bir çekirdek, kesintisiz.** Koşu takılmamış, uzun bir hesabın
  içinde. ***CPU deltası tek yönlü bir sinyaldir: artıyorsa süreç
  ÇALIŞIYORDUR, ve bunu hiçbir dosya damgası söyleyemez.***

  🔴 **VE AYNI ÖLÇÜM KOORDİNATÖRÜN SABAHKİ BİR OKUMASINI ÇÜRÜTTÜ —
  YEREL AYRAÇ:** 13:03'te `CPU 36.266s` görülmüş ve *"10 saatlik bir
  koşu için şüphesiz düşük"* diye kaydedilmişti. **Türkçe yerelde `.`
  BİNLİK AYRAÇTIR:** o sayı 36 saniye değil **36.266 saniye ≈ 10 saat**,
  yani duvar saatinin ~%97'si. Koşu baştan beri bir çekirdeği doldurmuş.
  📌 `§11`in *"sayıyı biliyorum ≠ sayının neye göre olduğunu biliyorum"*
  ailesinin **yerel biçim** yüzü — birim doğruydu (saniye), **ayraç**
  yanlış okundu. Ve tıpkı ötekiler gibi **hata vermedi**: temiz bir sayı
  üretti ve yanlış yorumlandı.
