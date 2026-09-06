# ㉚ ÖNGÖRÜ — `oner()` sekiz çift · ÖLÇÜMDEN ÖNCE YAZILDI

**Yazıldığı an:** 7 Eylül 2026, `oner()` koşusu arka planda başlatıldıktan
sonra, **çıktısı okunmadan**. Damganın kanıtı bu dosyanın mtime'ıdır:
`scratchpad/oner_8cift.log` tamamlanmadan yazıldı.

**Ölçülen zemin (öngörü değil, girdi):**
- sonda: `oner(["granada"])` → `#24d854`, **en yakın engel ΔE 12,1** ·
  17,4 sn/kimlik
- ㉗: 8 bit yuvarlama kayması **ortanca 0,175 · ortalama 0,212 · azami 0,806**
- ㉗: kendi kısıt kümemle çözülemeyen, 15,0 hedefte bile **0**

**Yapısal bulgu (öngörü değil, koddan okundu):**
`oner()` engel kümesini `gorunen(b)` ile kuruyor = **float harman.**
8 bit çizimi hiç görmüyor. ⇒ Hedefi 13,0'a çekmek bile **8 bitte 13,0'ı
garanti etmez.** Ölçülecek şey tam bu.

---

| # | NE BEKLİYORUM | MAZERET | HANGİ ÇIKTI · BİRİM | HANGİ KOŞU · NEYE KARŞI |
|---|---|---|---|---|
| ① | A geçişinde (hedef 12,0) `oner()`in seçtiği renklerin **8 bitte <12** olanı: **4-10 / 16** | **MAZERET YOK.** ㉗ zaten ölçtü: pay 0,1 · kayma ortancası 0,175. Payın kaymadan küçük olması bunu zorunlu kılar. Sayı 0 çıkarsa ㉗'nin kayma ölçümü yanlıştır. | kendi `olc()` tablomun `bit8` sütunu · ΔE00 | A geçişi · eşik **12,0**a karşı |
| ② | B geçişinde (hedef 13,0) **8 bitte <12** olan: **0 / 16** | **MAZERET YOK.** 1,0'lık pay ölçülen **azami** kaymadan (0,806) büyük. >0 çıkarsa 1,0'lık pay YETMİYOR demektir ve ㉗'nin ① numaralı önerisi (pay = 1,0) **düzeltilmelidir.** | aynı tablo · `bit8 < 12` sayacı | B geçişi · eşik **12,0**a karşı |
| ③ | B geçişinde `oner()`in **ÇÖZÜLEMEDİ** dediği kimlik: **0-2 / 16** | 🟡 **MAZERET VAR ve önceden yazıyorum:** ㉗'nin "bedel 0" sonucu **benim** kısıt kümemle ölçüldü. `oner()`in ek tercihleri (uyum · palet hissi · `KULLANILAN` hex elemesi) evreni daraltır. 0'dan büyük çıkarsa ㉗'nin "bedel sıfır" hükmü **bu evrende geçersizdir** — ve koordinatörün sorduğu ölçüm tam budur. | `oner()` çıktısındaki `ÇÖZÜLEMEDİ` satır sayısı | B geçişi · ㉗'nin "13,0'da 0 çözülemeyen" eğrisine karşı |
| ④ | `oner()`in kendi bastığı **"en yakın engel ΔE"** ile benim `float` sütunum **±0,1 içinde aynı** | **MAZERET YOK — bu bir ÖZ-SINAV** (`C13 ④`). Aynı evren, aynı formül, aynı harman. Ayrışırsa bozuk olan `oner()` değil **benim engel kümem**dir ve ①-③'ün hiçbiri okunmaz. | `oner()` stdout `en yakın engel ΔE` ↔ tablomun `float` sütunu | A ve B · birbirine karşı |

---

## 🔴 ÖNCEDEN YAZILAN SINIR

- Bu ölçüm **öneri üretir, uygulama yapmaz.** `renkler.py` donuk.
- `DE_KOMSU` yalnız **bellekte** yamanıyor; `renk_olc.py` dosyası
  değişmiyor. B geçişinin float payı 13,0'a çıkmazsa yama **tutmamış**
  demektir (bir varsayılan argümana bağlanmış olabilir) ⇒ o hâlde ②-③
  `ölçülemedi` damgası alır, `çürüdü` değil.
- Sekiz çiftin **her iki ucu** da çözülüyor; hangi ucun taşınacağı bir
  **KARAR**dır, ölçüm değil — önermiyorum.
