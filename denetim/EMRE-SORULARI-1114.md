# EMRE SORULARI 1114

Emre'nin kararını bekleyen sorular. Her soru bağlı kayıtları ve kaynağı verir.

## 1. Yunan Bağımsızlık Savaşı başlangıç günü atlasta hangisi olsun?

Seçenekler:
- **A) 25 Mart 1821** (geleneksel bayram günü; Jülyen = 6 Nisan 1821 Gregoryen). Şu anki kayıt budur; atlas günü Gregoryen olması gerektiğinden 6 Nisan'a taşınması gerekirdi (+12), ama bu gün tarihsel olay günü değil bayram günüdür.
- **B) 6 Mart 1821 Gregoryen** (22 Şubat Jülyen; Prut geçişi, İpsilantis'in Eflak'a girişi).
- **C) 17 ya da 21 Mart 1821** (Mora'daki ilk ayaklanma tarihleri; kaynaklar tartışmalı).

Kaynak notu (hakemli): Roderick Beaton, "The Greek Revolution of 1821: An Overview" (Hellenic Society): başlangıcı 6 Mart 1821 Gregoryen (22 Şubat Jülyen, Prut geçişi) verir; 25 Mart Agia Lavra sahnesini "almost certainly apocryphal" diye niteler; 17/21/25 Mart tartışması vardır. Bu bir takvim sorunu değil, olay tanımı sorunudur (başlangıç = Eflak/Prut mu, Mora ayaklanması mı, bayram mı). Şimdilik gün DEĞİŞTİRİLMEDİ; kayıtlara not düşüldü (BELİRSİZ).

Bağlı kayıtlar:
- data/olaylar.js satır 150: "Yunan İsyanı başladı" (t 1821-03-25; ic_not_gun eklendi)
- data/savaslar.js satır 411: "Mora isyanı" (t 1821-03-25; ic_not_takvim eklendi); satır 501 Londra Protokolü `savas_basi:"1821-03-25"` alanı da aynı günü taşır
- Çeviri/olay_taraf anahtarları: ceviri_*_olay_*.js `OLAYLAR:1821-03-25:*` ve olay_taraf.js `1821-03-25|...` (TAKVIM-PARTISI-1114.md bölüm 6; gün değişirse anahtar t'si taşınır)

Bağlı yerleşim kırılmaları (1821-03-25 günü; 19 kırılma, 16 yerleşim kaydı adı):
- data/yerlesimler.js (17 satır): Atina, Mora (Tripoliçe), Modon, Balyabadra (Patras), Anabolu (Nauplion), Vostitsa (Aigion), Kalavrita (Kalavryta), Damala (Troizen), Methana, Ermiyoni (Hermione), Kranidi, İstefe (Tebai), Livadya, Kulluk (Salamis), Egina (Aegina), Çamlıca (Hidra) ve yorum satırı
- data/yerlesimler_ek_adalar.js (3 satır; 1821-03-25 Yunan devralma ucu)
- data/yerlesimler_zincir64.js (4 satır; Atina d ucu `1456-06-04`..`1821-03-25` dahil)
- Ayrıntı: denetim/TAKVIM-PARTISI-1114.md bölüm 5 ve YUN-126B/YUN-174B satırları.

Not: seçim B ya da C ise 19 yerleşim kırılmasının günü ve Değişmez 2 komşuluğu (kronoloji maddesi ±30 gün) birlikte taşınır; yerlesimler*.js değişikliği KASA/HAVVA hattına gider.
