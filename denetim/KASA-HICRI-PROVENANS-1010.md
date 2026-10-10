# KASA-HICRI-PROVENANS-1010 — 64 tek ifadeli İÇİNDE: ifade HANGİ maddeden?

Görev: YILDIRIM BAYEZIT (ICINDE kararı (d)) · Araştırmacı: KASA · salt okunur, `data/` DONUK.
Risk sınıfı (tek): ifade tek, ama KOMŞU bir polity'nin maddesinden alıntı (`hamdani-yemen` f ↔ `suleyhiler`).
Yöntem (ölçümden önce sabit):
- **Provenans kaynağı:** eşleşme kaydı (`icinde.json`) ifadenin çevresindeki not metnini taşıyor. Künye notları
  alıntıyı "TDV: <slug>" / "[TDV: <slug>]" / "TDV `<slug>`" ile etiketliyor ⇒ ifadeye EN YAKIN etiket okunur. Madde
  çekilmez.
- **Künyenin kendi maddesi:** künyenin `kaynak` alanındaki İLK TDV slug'ı (ya da `ozet`'teki "madde: X").
- **Sınıflar:**
  - KENDİ (etiket = kendi maddesi) ⇒ risk yok, İÇİNDE kalır.
  - KOMŞU POLITY (başka hânedan/devlet maddesi) ⇒ RİSKLİ, yeniden ölçülür.
  - ÜLKE/ŞEHİR maddesi ⇒ ICINDE (a) kuralıyla: künyenin kendi f/t'si için polity maddesi esas ⇒ RİSKLİ sayılır,
    kendi maddesinde karşılık aranır.
  - ETİKETSİZ (yakında etiket yok) ⇒ ölçülemedi-provenans. Sayılır, İÇİNDE'ye karıştırılmaz.
- Riskli olanlar için künyenin KENDİ maddesi çekilir, aynı olayın hicrî yılı aranır, kesişim kuralı uygulanır.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — kendi aralığım
**Desen:**
- ① Etiketsizlerin çoğu, notun kendisinin "TDV: X" ile başlayıp alıntıyı sonra verdiği tek-kaynaklı künyeler. Bunlar
  aslında KENDİ ⇒ etiket okuma kuralı en yakın etiketi doğru buluyor (%80).
- ② Riskli (komşu + ülke/şehir) olanlar ⚠️ karşılaştırma notu taşıyan künyelerde (%75).
- ③ Yeniden ölçülen riskliler içinden DIŞINDA çıkanlar yine `-01-01` ve yapısal ±1 (%90).
**Büyüklük (kendi kurduğum, desen dar · büyüklük geniş):**
- KENDİ **44 ± 16** · KOMŞU **6 ± 6** · ÜLKE/ŞEHİR **6 ± 6** · ETİKETSİZ **8 ± 8**.
- Yeniden ölçülen riskliden DIŞINDA: **2 ± 2** ⇒ 78 → **80 ± 2**.
