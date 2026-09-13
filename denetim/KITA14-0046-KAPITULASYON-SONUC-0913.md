# KITA 14 · KITA 26 M-3698 — İngiltere kapitülasyonu mükerreri · SONUÇ

```
ÖNGÖRÜ   denetim/KITA14-0046-KAPITULASYON-ONGORU-0913.md (ölçümden ÖNCE)
HÜKÜM    MÜKERRER — iki madde de 1580 Harborne ahidnâmesi. İki aşama DEĞİL.
```

## Ölçüm
```
olaylar_ek7.js   t:1580-02-01  "İngiltere ile ilk ticaret ahidnâmesi imzalandı"  kaynak ingiltere
olaylar_ek2.js   t:1580-06-01  "İngiltere'ye kapitülasyon verildi"               kaynak kapitulasyon
ikisinin de gun: alanı "1580" — ay ve gün UYDURULMUŞ (§4)

TDV ingiltere   HTTP 200 · birebir: "1580 tarihli bu ahidnâmeye göre İngiliz tüccarları da
                Fransız ve Venedikliler'e daha önce verilen ticarî imtiyazlardan (kapitülasyon)
                aynı derecede istifade edeceklerdi." → YALNIZ YIL · tek olay
                "…mektuplar teâti edildi, böylece resmî bir ilişki de kurulmuş oldu."
                "…hemen ardından 1581'de Londra'da Levant Company adlı bir şirket kuruldu."
TDV kapitulasyon HTTP 200 · 81 KB · <title> doğru · ama Fransa 0 · İngiliz 0 · Bibliyografya 0
                ⇒ §4 tuzak ④ (canlı slug, gövde çekilemedi) — ÖLÇÜLEMEDİ
TDV harborne    302 → arama sayfası — ÖLÜ
```

## Yapılan
| dosya | işlem |
|---|---|
| `olaylar_ek2.js` | 1580-06-01 maddesi **KALDIRILDI**, yerine gerekçeli yorum |
| `olaylar_ek7.js` | `t:` 1580-02-01 → **1580-01-01** (TDV yıl veriyor) · başlık "— İngilizlere kapitülasyon verildi" · ek2'ye özgü iki bilgi (resmî ilişki, Levant Company) TDV `ingiltere` birebir alıntısıyla eklendi · kişilere I. Elizabeth |

## Pencere ve değişmezler
```
--haric ile iki madde çıkarılınca (ARAC-KITA14-PENCERE-0913.py):
   1580-01-01  Hûglî · Buenos Aires      🟢 başka maddeyle de kapalı
   1580-02-01  kırılma yok
   1580-06-09  Nagazaki (s.t azuchi-momoyama · s.f portekiz)  🔴 YALNIZ BU MADDEYLE KAPALIYDI
denetle.py SONRA: D2 528 · 0 açık · 2s 102 (değişmedi) · KAPSAM DIŞI 358 (değişmedi) ·
                  mükerrer 0 · kronoloji 1354 → 1353
```
🔴 **D147 vakası:** Nagazaki'nin Portekiz'e geçişi ham ölçütte bir **İngiliz
kapitülasyonu maddesiyle** "kapalı" görünüyordu. `denetle.py` onu KAPSAM DIŞI
saydığı için sayı değişmedi — ama kırılmanın kendi maddesi çekirdekte yok
(kuyrukta `kronoloji_japonya.js` Nagazaki maddeleri var, Değişmez 2 evreninde değil).
Yazılmadı: çöl seyyahı — Osmanlı bağı yok, kapsam dışı.

## Öngörü
```
1 aynı olay                    ✓ tuttu
2 ek2 çıkınca açılan kırılma 0 ✗ ÇÜRÜDÜ — ham ölçütte Nagazaki açıldı (denetle sayısında KAPSAM DIŞI, 0)
3 ek7 01-01'e taşınınca 0      ✓ tuttu
4 "Levant" 1580'e bağlanmıyor  ✗ ÇÜRÜDÜ — TDV "bu imtiyazlarla … hemen ardından 1581'de" diyerek BAĞLIYOR
```

## Koordinatöre — dosyası bende olmayan yan bulgu
```
kronoloji_ingiltere.js:489  t:1580-06-01 "İlk İngiliz-Osmanlı ahidnamesi" · kaynak "ingiltere (TDV)"
   TDV ingiltere gün vermiyor ⇒ 06-01 kaynaksız. Kuyruk kovası (D006) — DOKUNULMADI.
```
