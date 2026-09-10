# BİR MERGE ADIMININ ÖN KOŞULU, O ADIMIN KENDİ GİRDİSİNDEN TÜRETİLEMEZ — ÖNCEKİ ADIMLARDAN SONRAKİ DURUMDAN türetilir.

> Kimlik `D166` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴🔴 **BİR MERGE ADIMININ ÖN KOŞULU, O ADIMIN KENDİ GİRDİSİNDEN
  TÜRETİLEMEZ — ÖNCEKİ ADIMLARDAN SONRAKİ DURUMDAN türetilir.**
  *(5 Eylül 2026 · adım ⑧ renk listesi · iki liste, aynı kusur)*

  İki bağımsız liste yazıldı ve **ikisi de kendi artefaktına sordu**:
```
adım ⑥ ön-sınavı   sordu: "yamalar birbiriyle çakışıyor mu?"
                   sormadı: "kullandıkları kimliklerin RENGİ var mı?"
adım ⑧ renk listesi kaynak: YENİ KÜNYE ÖNERİLERİ (`kunyeleri_cikar()`)
                   sormadı: "veri hangi MEVCUT künyeyi kullanmaya
                             başlayacak?"
```
  ⇒ Ölçüldü ve ikisinin **arasından altı delik** çıktı:
```
⑧'in listesi                26   ← kaynak: yeni künye önerileri
verinin ihtiyacı            17   ← kaynak: yamaların kullandığı kimlik
kesişim                     11
🔴 ⑧'DE YOK                  6   ← künyesi VAR, rengi YOK
⚪ ⑧'de var, veri kullanmıyor 15   ← ileriye dönük, DOĞRU
```
  Altısının **altısının da künyesi var** (`id:` 1/1) ⇒ yeni künye
  önerilerinden türetilen bir liste onları **yapısal olarak göremez.**

  📌 ***Her liste kendi kaynağında eksiksizdi; eksik olan İKİSİNİN
  ARASIYDI.*** `§11`in *"kusur ne tavandaydı ne yetim-yüz mantığında —
  İKİSİNİN ARASINDAYDI"* dersinin **merge** yüzü, ve aynı çare: bir adımın
  ön koşulu **öteki adımların çıktısı üzerinden** ölçülür.
  🟢 Ve sınav ucuz: *taşıma koşulduktan SONRA hangi kimlik `BOYALAR`da
  olmayacak?* — bu tek soru iki listenin arasındaki boşluğu kapatıyor.
