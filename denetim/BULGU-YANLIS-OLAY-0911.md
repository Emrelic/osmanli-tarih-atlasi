# YANLIŞ OLAY — kompozit geçiş maddelerinde "hangi olayın günü" taraması

## ÖNGÖRÜ (D022 — ölçümden ÖNCE yazıldı, commit'lendi)

Tarih: 2026-09-11, ölçümden önce.

**Sınıf tanımı:** İki bağımsız vaka (afgan-durrani, İbrahim'in ölümü)
aynı kök hatayı gösteriyor: bir madde İKİ olayı (öncekinin bitişi +
sonrakinin başlangıcı) TEK tarih alanıyla temsil ediyor, ve o tarih
LABEL'ın vurguladığı olaya değil KOMŞU olaya ait. `İÇ TUTARSIZLIK`
görevi metin-tarih ÇELİŞKİSİNE bakıyordu (farklı gün); bu görev
metin ile tarih TUTARLI olsa bile YANLIŞ OLAYA işaret ettiği durumları
arıyor — daha ince, mekanik olarak DAHA ZOR yakalanan bir sınıf.

**Gözlenen konvansiyon (önceki 3 görevden çıkan, ölçümden ÖNCE
yazılan bir HİPOTEZ):** "X'in vefatı VE Y'nin cülûsu" tipi kompozit
maddelerde veri seti TUTARLI olarak İKİNCİ olayın (cülûs) gününü
kullanıyor (Selim II örneği: gerçek ölüm 13 Aralık, madde 22 Aralık
— cülûs/duyuru günü, ve bu DOĞRU kabul edildi). İbrahim'in ölüm
maddesi ("hal'i VE katli") bu konvansiyonu BOZUYOR: ikinci olayın
(katl, 18) değil BİRİNCİNİN (hal', 8) gününü kullanıyor. **Öngörü:** bu
konvansiyon-ihlali NADIR olmalı — çoğu kompozit madde muhtemelen
konvansiyona uyuyor, aksi halde daha önceki iki görevde (İÇ TUTARSIZLIK,
PADİŞAH ÇAPRAZ) çok daha fazla sayıda ortaya çıkardı.

**Yöntem:** `b:` metninde İKİ olayı "ve" ile bağlayan kompozit
maddeleri bul (regex: iki fiil öbeği + "ve"), `gun:` alanında AÇIK
biçimde İKİ ayrı gün veren (aralık ya da "X (olay1) – Y (olay2)"
biçimi) adayları seç, `t:`nin hangi güne denk geldiğini ve bunun
konvansiyona (2. olay) uyup uymadığını kontrol et.

**Evren tahmini (ölçümden ÖNCE):**
```
Kompozit "iki-olay-tek-madde" (b: içinde İKİ fiil + "ve"):     100-300
  (olaylar*.js + kronoloji*.js + devletler.js kronolojisi)
`gun:` alanı AÇIKÇA iki ayrı gün veren alt-küme:                 20-50
Konvansiyona UYAN (2. olayın günü kullanılmış, DOĞRU):           15-40
Konvansiyonu BOZAN (1. olayın günü kullanılmış, YANLIŞ OLAY):     1-5
Ölçülemedi (hangi olaya ait belirsiz / takvim şüphesi):           2-8
```

D010: Bilinen iki pozitif — `İbrahim'in ölümü` (canlı veride,
olaylar*.js) ve `afgan-durrani` (STAGING'de, HAZIRLIK-DALGA2-0911.json,
evren dışı — önceki görevlerde olduğu gibi ikincil/elle doğrulama).
Aracın İbrahim'i YAKALAMASI zorunlu; yakalamıyorsa araç güvenilmez.

Bu öngörü ÇÜRÜRSE sebebi raporun sonunda ayrıca yazılacak.

---

## ÖLÇÜM

(Aşağısı ölçümden SONRA doldurulacak.)
