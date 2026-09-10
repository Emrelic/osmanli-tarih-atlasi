# BİR DÜZELTME SLUGA DEĞİL KAYDA BAKAR — aynı slug iki kayıtta farklı yere gidebilir.

> Kimlik `D065` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **BİR DÜZELTME SLUGA DEĞİL KAYDA BAKAR — aynı slug iki kayıtta
  farklı yere gidebilir.** *(2 Eylül 2026)*
  ```
  ferhad-pasa-antlasmasi  1588 · olaylar_ek5.js "Karabağ ve Gence'nin
                                 ilhakı"          → `gence`   ADRES
                          1590 · olaylar_ek2.js "Ferhad Paşa Antlaşması"
                                                  → DAMGA (adres YOK)
  derbend                 İKİ kaydı da `dagistan`a → slug bazlı GÜVENLİ
  ```
  Global `sed s/ferhad-pasa-antlasmasi/gence/` 1590 **antlaşmasını** `gence`
  maddesine dayandırırdı ve o gövde 1590'ı vermiyor.
  ⇒ **Uygulayıcı `t:` + eski değer çiftiyle eşler, ve eşleşme 1 değilse
  DURUR — hiçbir dosya yazılmaz.** Aynı gün ikinci vaka: `lehistan` veride
  **50 dönemde** geçiyor, yalnız **4'ü** hayaletti; kör bir değiştirme
  **46 meşru dönemi** bozardı.
  📌 Ve eşleştirmenin kendisi de dar kurulabilir: ilk uygulayıcı `ad:` ile
  dönemi **aynı satırda** aradı, oysa kayıt çok satırlıydı ⇒ 0 eşleşme.
  Nöbetçi durdurdu. ⇒ *Dosya bazlı ve **beklenen sayı önceden yazılı**
  bir eşleştirme, satır bazlıdan güvenlidir.*
