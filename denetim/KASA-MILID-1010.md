# KASA-MILID-1010 — Milid (Arslantepe) ↔ atlastaki Malatya noktası

Görev: YILDIRIM BAYEZIT (NOKTA-ANADOLU-MO kararı (b): "ölçülmeden karar yok") · Araştırmacı: KASA ·
LAB'in mevcut ölçümü kullanıldı (`denetim/LAB-KONUM-KUSURU-1010-noktalar.csv`, origin/main
`2d931a6f`), sıfırdan tarama yapılmadı. `data/` DONUK.

## Ölçüm
```
nokta                                  koordinat              kaynak
atlas "Malatya" (yerlesimler.js:256)   38.353, 38.334         kd: 1281-01-01 … 1845 (dört dönem)
TGN 1086264 "Malatya"                  38.3502, 38.3167       inhabited places (modern şehir)
Pleiades 25078867 "Arslantepe (Melid)" 38.38206, 38.36120     OSM + CIGS höyük, Pl-iç 0,01 km
Pleiades 629040 "Melitene"             38.38222, 38.36115     "ancient city on the Tohma River … Legio XII Fulminata from AD 70"

atlas Malatya ↔ TGN Malatya (modern)   1,54 km
atlas Malatya ↔ Arslantepe             4,01 km
atlas Malatya ↔ Pleiades Melitene      4,02 km
Arslantepe   ↔ Pleiades Melitene       0,02 km   ← AYNI NOKTA
```
LAB CSV satırı: `Malatya,yerlesimler.js,38.353,38.334,1281-01-01,…,TEMİZ-ÖLÇÜLDÜ,Malaṭīn,2.1,Melitene,4.0,precise`.

## Sonuç (üç soru)
① **Atlastaki Malatya MODERN şehirde** — TGN'nin modern Malatya kaydına 1,54 km; Arslantepe'ye 4,01 km.
② **Arslantepe ≠ atlas Malatya** — 4 km ayrı höyük ⇒ **Milid AYRI NOKTA** olmalı (koordinatörün
   ilk dalı: "Malatya noktası MODERN şehirdeyse → Milid AYRI nokta").
③ 🔴 **LAB'in "TEMİZ" hükmü yanlış kıyasa dayanıyor:** Pleiades `Melitene` reprPoint'i
   **Arslantepe höyüğünün üstünde** (0,02 km) — yani "Malatya ↔ Melitene 4,0 km" ölçümü modern
   Malatya'yı **höyükle** kıyaslıyor, Roma/Ortaçağ Malatya'sıyla (Battalgazi / Eski Malatya)
   DEĞİL. Pleiades'in Melitene noktası kendi açıklamasıyla da tartışmalı (Legio XII'nin kampı
   genellikle Battalgazi'ye konur — bu turda izinli kaynakla ÖLÇÜLMEDİ).
   ⇒ Atlas "Malatya"nın **1281-1839 dönemleri** için konum sorusu AÇIK: o dönemlerin şehri
   (Battalgazi) ayrı yerde olabilir — LAB'in kendi (d) listesinde "Malatya/Battalgazi" var.
   Battalgazi için ikinci tanık: TGN'de yalnız idari birim (LAB: 8 km) ⇒ `bulunamadı`.

## İstek
a) Milid → **ayrı nokta** (Arslantepe, Pleiades 25078867).
b) Atlas Malatya'nın 1281-1839 konumu → LAB'in KONUM-KUSURU kovasında yeniden değerlendirilsin
   ("TEMİZ" kıyası höyüğe yapılmış). Battalgazi için kaynaklı koordinat gerekiyor.
