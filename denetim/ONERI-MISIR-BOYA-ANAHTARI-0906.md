# ÖNERİ — MISIR'IN İKİ GREN'İ TEK ANAHTARDA BİRLEŞSİN (atlasın kendi kuralı)

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · UYGULANMADI** (`renkler.py` DONUK).
> Dayanak: `OLCUM-MANDA-RENK-CAKISMA-0906.md` · alet
> `denetim/ARAC-KIMLIK-BOYA-0906.py`.

---

## ① ÖLÇÜLEN DESEN — atlas ardışık devletleri TEK ANAHTARDA topluyor

```
sirbistan     <- sirbistan-nemanjic · sirp-despotlugu · sirbistan-prensligi
                 · sirbistan-kralligi                            (4 künye)
bulgaristan   <- bulgar-carligi · bulgaristan-prensligi
                 · bulgaristan-kralligi                          (3 künye)
suud          <- suud-birinci · suud-ikinci · suud-ucuncu         (3 künye)
fetret-*      <- suleyman-celebi · musa-celebi · mehmed-celebi
                 · isa-celebi                                     (4 anahtar)
```
⇒ **11 künye `harita:` dolaylaması kullanıyor**, ve 23 boya anahtarının
kendi `id` künyesi yok — bunların hepsi **tasarım**, kusur değil.
📌 Bu ölçüm `§1.5`in *"dizinsiz kimlik ✓ 0"* satırıyla **çelişmiyor**:
o satır `harita:` hedeflerini dizinli sayıyor. İki ölçüm aynı şeyi
farklı kovalarla söylüyor.

## ② MISIR BU DESENİN DIŞINDA — ve bedeli ölçüldü

```
bulgaristan-prensligi  harita: bulgaristan   ┐ ARDIŞIK, TEK RENK
bulgaristan-kralligi   harita: bulgaristan   ┘
misir-sultanligi       harita: (yok -> id)   #4ed224  ┐ ARDIŞIK, İKİ RENK
misir-kralligi         harita: (yok -> id)   #48d224  ┘  ve ΔE 0,73
```
🔴 **ΔE 0,73 — ekranda ayırt EDİLEMEZ.** Yani iki ayrı palet yuvası
tutuluyor ve karşılığında **hiçbir görsel fark** üretilmiyor.

Ve o iki yuva, `irak-kralligi`nin (#42d224) çözüm alanını daraltıyor:
```
irak ↔ misir-kralligi     ΔE 1,09   🔴
irak ↔ misir-sultanligi   ΔE 1,82   🔴
```

## ③ ÖNERİ

```
misir-sultanligi  →  harita: "misir"
misir-kralligi    →  harita: "misir"
BOYALAR'a         →  "misir" tek anahtar (bugünkü iki grenden biri)
```
**Kazanç:** atlasın kendi konvansiyonuna uyum · bir palet yuvası serbest ·
`irak-kralligi`nin sağlaması gereken kısıt **iki çiftten bire** iner.
**Bedel:** görsel olarak **sıfır** — iki renk zaten ayırt edilemiyor.

⚠️ **VE BU TEK BAŞINA ÇAKIŞMAYI ÇÖZMEZ.** `irak-kralligi` yine kalan tek
Mısır greninden ΔE ≥ 12 (tercihen ≥ 13, `renkler.py:3513` `_GUVENLI_PAY`
emsali) uzaklaşmak zorunda. Bu öneri çözümü **kolaylaştırır**, yerine
geçmez.

## ④ 🟡 KARŞI GÖRÜŞ — ölçülmedi, karar Emre'nin

Mısır Sultanlığı (İngiliz himayesi, 1914-1922) ile Mısır Krallığı
(bağımsız, 1922-) arasındaki fark **statü değişimidir** ve kullanıcı onu
haritada görmek isteyebilir. Bulgaristan'da prenslik→krallık farkı da
görünmüyor — yani konvansiyon **zaten bu farkı göstermiyor**.
⇒ Ayrı renk istemek tutarlı bir tercih olur, **ama o zaman fark GÖRÜNÜR
olmalı** (ΔE 0,73 değil). Bugünkü hâl iki tarafın da en kötüsü: iki yuva
harcanıyor, fark görünmüyor.

## ⑤ ÖLÇÜLMEDİ
```
· "misir" anahtarının BOYALAR'da çakışma doğurup doğurmayacağı
· birleştirmenin `renk_olc.py` tam koşusundaki net etkisi
· misir-kavalali (harita: kavalali) bu aileye katılmalı mı
```
