# SİLİNEN KODUN MEZAR TAŞI, HAYATTA KALAN KOD HAKKINDA BİR İDDİADIR — VE GÜVEN VERDİĞİ İÇİN KİMSE ONU ÖLÇMEZ.

> Kimlik `D048` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **SİLİNEN KODUN MEZAR TAŞI, HAYATTA KALAN KOD HAKKINDA BİR İDDİADIR —
  VE GÜVEN VERDİĞİ İÇİN KİMSE ONU ÖLÇMEZ.** *(24 Ağustos 2026)*

  22 Ağustos'ta `yakinlikKm` silindi ve yerine örnek bir kayıt notu
  bırakıldı — *"silinen ölçüm, yeniden ölçülmesin diye"*. Notun kendisi
  **doğru ve değerliydi**:
  ```
  zoom→km dönüşümü MapLibre'nin KENDİ döşeme kuralıyla yapılıyordu:
  512px, 256 DEĞİL (Google/Bing'in eski 256px kuralı burada TAM 2× YANLIŞ
  sonuç veriyordu, ölçülüp düzeltilmişti).
  ⇒ Ters yön (`kmDanZoom`) YAŞIYOR ve uçuşun kalbi; BU BİLGİ ORADA DURUYOR.
  ```
  🔴 **Son cümle yanlıştı ve tam iki gün sonra ölçüldü.** `kmDanZoom`
  `156543.03392` kullanıyordu — **256 piksellik** sabit. Yani:
  ```
  silinen fonksiyon    kuralı BİLİYORDU ve uyguluyordu
  yaşayan fonksiyon    kuralı ÇİĞNİYORDU, tam 2× yanlış
  mezar taşı           "bu bilgi orada duruyor" DİYORDU
  ```
  Zararı da not tarafından **önceden tarif edilmişti** (*"tam 2× yanlış"*)
  ve bugün birebir o çıktı: istenen 1919 km, gerçek 846 km, oran 1,97.

  📌 **Ve kusur, notun yanlış olmasından değil, GÜVEN VERMESİNDEN
  büyüdü.** *"Bu bilgi orada duruyor"* cümlesi, okuyanı oraya
  BAKMAKTAN alıkoyar. Bir uyarı okuru ölçüme iter; bir güvence ölçümden
  ÇEVİRİR. ⇒ ***Yanlış bir güvence, hiç yazılmamış bir nottan kötüdür.***

  ⚠️ Ve bedeli tek bir sürgüde kalmadı: `gorusGenisligiKm`, odak devletin
  genişliğini **1,35 ile çarpıp** onu çerçeveye sığdırmak için yazılmıştı.
  Yarıya inince 1,35 kat istek 0,675 kata dönüştü — yani **devleti
  SIĞDIRMASI gereken çarpan, onu KESMEYİ garanti etti.** Emre iki ayrı
  pakette *"Osmanlı topraklarının genelini harita dışında tutarak"* diye
  şikâyet etti; sebebi buydu ve kimse çarpanın kendisinden şüphelenmedi,
  çünkü çarpan **doğruydu.**

  🟢 **KURAL:** bir kodu silerken komşusu hakkında **iddia yazma** —
  ya ÖLÇ, ya *"ölçmedim"* de. `§11`in *"ölçmediğini `ölçmedim` diye yaz"*
  kuralının **miras tarafı**: silinen kodun notu, kalan koda dair bir
  **taahhüt** gibi okunuyor ve o taahhüdü kimse denetlemiyor.
