# BİR ALAN TASARLAMADAN ÖNCE, O ALANIN ZATEN VAR OLUP OLMADIĞINI ÖLÇ — VE VARSA, ONUN NEYLE DOLU OLDUĞUNU DA ÖLÇ.

> Kimlik `D028` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **BİR ALAN TASARLAMADAN ÖNCE, O ALANIN ZATEN VAR OLUP OLMADIĞINI ÖLÇ —
  VE VARSA, ONUN NEYLE DOLU OLDUĞUNU DA ÖLÇ.**

  **Vaka (8 Ağustos 2026, koordinatör).** Kullanıcı yerleşimlere zamanla
  değişen bir *sınıf* istedi. Koordinatör `sinif:` diye yeni bir alan
  tasarladı, `ALTYAPI.md`ye yazdı, **kullanıcıya bildirdi.** Sonra üretim
  logunda şu satır çıktı:
  ```
  UYARI kademe: Dubrovnik (k:3) m: zinciri bir k1/k2 merkeze kapanmıyor
  ```
  ⇒ `k:` alanı **zaten vardı**, ve `VERI-YAPISI.md` zamanlı hâlini
  (`kd:[{f,t,k,m}]`) **zaten tasarlamıştı** — *"k/m'nin yerini alacak"*
  notuyla birlikte. Yeni alan **gereksizdi**, ve `kd:` daha iyiydi: kademeyi
  **ve** bağlı merkezi *birlikte* zamanlı yapıyor, yani `Değişmez 3`ün 359
  çiftini de çözüyor — ayrı bir `sinif:` alanı çözmezdi.

  🔴 **Ve ikinci kusur birincisinden ağırdı: TASARIM VERİYE UYGULANINCA
  ÇÖKTÜ.** Koordinatör *"4. sınıf = ağırlık 0, yani kapı ağırlığın özel
  hâlidir"* demişti — matematik doğru, ve kullanıcıya *"güzel bir sonuç"*
  diye sunuldu. Ölçüm:
  ```
  k:4 → 473 NOKTA   İnegöl · Geyve · Kestel · Aydos Kalesi
  k:0 → 1538 NOKTA  (yabancı şehir; "kademesiz" demek, "ağırlıksız" DEĞİL)
  ```
  Ağırlık 0 verilse **473 petek bir gecede silinirdi** ve çoğu **doğruydu**:
  İnegöl 1300'de bir kasabadır ama 40 km'de başka nokta yoktur, toprağı
  tutması gerekir.
  ⇒ Doğrusu ağırlığın **sıfırlanması değil KÜÇÜLTÜLMESİ**: sonucu belirleyen
  ağırlığın kendisi değil **komşusuyla ORANI.** Aynı düşük ağırlık,
  İstanbul'un yanında ihmal edilebilir bir hücre verir, boşlukta ise koca bir
  bölge — **ve ikisi de doğrudur.**

  📌 Ve bu, aynı gün ölçülen `banda-adalari` vakasının tersidir: orada küçük
  bir kimlik **komşusu olmadığı için** 573.188 km² boyuyordu. **Petek
  büyüklüğünü belirleyen şey noktanın kendisi değil ÇEVRESİDİR.** İki vaka,
  tek kural.

  ⚠️ Ve zarar sayıldı: yanlış talimat **çalışan bir oturuma gitti**
  (*"`k:0` yazma"* — oysa 1538 noktanın 1538'i `k:0`). Bir tur boşa gitti.
  ⇒ **Tasarım, veriden ucuz değildir.** Bir alan icat etmek beş dakika,
  `git grep` ile var olanı aramak **on saniye**.
