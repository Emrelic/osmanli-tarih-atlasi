# D262 — Bilerek aşık bırakılan bir tavan, DEĞİŞİM SEZİCİ olmaktan çıkar

**Slogan:** *Sürekli yanan bir uyarı, değişim hakkında bilgi taşımaz. Bir tavan aşıldığı
anda borcu görünür kılar ama gerilemeyi görünmez kılar — ikisi aynı sayıyla ölçülemez.*

## Vaka (5 Ekim 2026)

İshakçı yamasında bir normalleştirme hatası vardı: maddelere **"İsakçı"** yazılmıştı,
normalleştirici `isakci ≠ ishakci` verdi, İshakçı "açıklanmamış" sayıldı ve **dört birim
açıldı** (Silistre · Köstence · Kayseri · Kırşehir, hepsi 1419-01-01).

**Kapı bunu göstermedi.** `Değişmez 2s` `✓ 189 AÇIK (tavan 189)` bastı. Sebep: açılan
kırılmaların günü `YYYY-01-01` olduğu için `yil_temsili_ayir` onları **yıl-temsilî borç**
kovasına aldı ve o kova `164 → 165` oldu.

İlk teşhis — işçinin de benim de — şuydu: *"yıl-temsilî kova yeni açılan kırılmayı
sessizce yutuyor; kovanın bir tavanı olmalı."*

🔴 **İKİSİ DE YANLIŞTI.** Kovanın tavanı ZATEN VAR (`BEKLENEN_2S_YIL_BORC = 151`) ve kapı
uyarıyı ZATEN BASIYOR:
```
⚠️ YIL-TEMSİLÎ BORÇ tavanı aşıldı (164 > 151) — ihlal DEĞİL, ama yeni
   `YYYY-01-01` kırılması yazılmış olabilir.
```
Ve bu aşım **1 Ekim 2026'dan beri bilerek duruyor**: ölçüm 164'e çıkmış, tavan
yükseltilmemiş ve kodun kendi yorumu *"tavan YÜKSELTİLMEDİ ve bu doğru karardı"* diyor.
Üstelik üyelik de ölçülmüş (KASA: ORTAK 144 · YENİ 20 · DÜŞEN 7, net +13).

## Asıl kusur

Uyarı **1 Ekim'den beri her koşuda yanıyordu.** Dolayısıyla 164 → 165 geçişi ekranda
**hiçbir şeyi değiştirmedi**: aynı satır, aynı ⚠️, bir büyük sayı. Gerileme görünmedi —
sensör yok olduğu için değil, **sensör doymuş olduğu için.**

```
Tavan AŞILMAMIŞKEN   her artış görünür      → değişim sezici ÇALIŞIR
Tavan AŞIKKEN        uyarı zaten yanıyor    → değişim sezici KÖR
```

Proje bilinçli bir takas yapmıştı: *borcu görünür tut* (tavanı yükseltme) ⇄ *değişimi
sezebil* (tavanı ölçüme eşitle). Takasın bedeli bu gece tahsil edildi.

## Kural

1. **Bir tavan aşıldıysa iki iş birden yapamaz.** Ya borcu gösterir (sabit kalır) ya
   değişimi sezer (ölçüme eşitlenir). İkisi isteniyorsa **iki sayı** gerekir:
   dondurulmuş TABAN (borç) + SON ÖLÇÜM (değişim).
2. **Aşık bir tavan, bir sonraki gerilemeyi saklar.** "İhlal değil, uyarı" diye bırakılan
   her tavan, o andan sonra o daldaki regresyonlara karşı KÖRDÜR.
3. **Gerilemeyi yakalayan şey, aşık tavan değil YAN SAYAÇ oldu.** Bu vakada hatayı
   `Değişmez 2sk` buldu (`YER −4`): kurulalı birkaç saat olmuş bir sayaç, kurulma
   sebebinin ta kendisini — *"kapalı"nın sınıfını göstermek* — ilk günden kanıtladı.
   ⇒ Bir dalın sağlığı, o dalın kendi tavanıyla değil **bağımsız bir ikinci ölçüyle**
   anlaşılır.

## Çare (aday, uygulanmadı)
Yıl-temsilî satırı iki sayı bassın: `164 (TABAN 151 · önceki ölçüm 164 · değişim 0)`.
Böylece borç da görünür kalır, değişim de sezilir. `DEGISMEZ-0086-defter.json` emsali
hazır: ölçümü deftere yaz, bir sonraki koşuda ÜYELİKLE karşılaştır.

## Bağlı dersler
- [[D248]] yazdım ama ÖLÇMEDİM — bu vakada ilk teşhisimiz de ölçülmeden yazılmıştı
- [[D199]] sayı ölçümün fotoğrafıdır; kaynağını aç
- [[D261]] madde var ≠ yeri anıyor — açılan dört birimin kökü tam bu (norm uyuşmazlığı)
- [[D004]] dondurma GEVŞETMEYE dönüşmesin — bu dersin tersten okunuşu
