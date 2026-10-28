# PAKET-0076-2SK-SINIF-1005 — Değişmez 2sk çalkantısının sınıfı (YER ↔ YALNIZ TARAF)

5 Ekim 2026 · oturum PAKET-0076-TASNIF-1004 · koordinatör görevi. Ölçüm; `denetle.py`ye DOKUNULMADI.

## 0 · ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE YAZILDI VE COMMİTLENDİ
Taban: b49c399d (2sk sınıfının kurulduğu commit, 3160 = 1558 YER + 1602 TARAF) · Şimdi: HEAD.
```
① YER −4'ün ana kaynağı: Dobruca (A) + İshakçı yamaları Silistre · Köstence · Babadağı · İshakçı'nın
   ÇELEBİ kırılmalarını (1410-02-13 · 1410-06-15 · 1411-02-17 · 1413-07-05) SİLDİ. O kırılmalar
   Fetret maddeleriyle (Yanbolu, Çamurlu …) kapanıyordu; yer adıyla mı taraf adıyla mı kapandıklarını
   bilmiyorum — öngörü: bir kısmı YER'di ve kovadan ÇIKTI.
② TARAF +1'in kaynağı: Dobriç (Hacıoğlupazarcığı) 1908-10-05 · 1913-08-10 ya da Berlin A1 Köstendil
   1908-10-05 — bu maddeler (Bulgaristan bağımsızlığı · Bükreş) o yerleri ADIYLA anmıyor ⇒ TARAF.
③ Bu gecenin YAZDIĞIMIZ kırılmaları:
   Dobruca 1402-07-28 · 1416-01-01 · 1419-01-01 + İshakçı  → YER (maddelere adlarını biz yazdık, D261)
   İzdin 1832-01-01                                       → YER (madde başlığı İzdin)
   Romanya 15 nokta 1877-05-09                            → çoğu YALNIZ TARAF (madde yalnız Bükreş'i anıyor)
   Silistre 1913-08-10 · Köstendil / Dobriç 1908-10-05    → YALNIZ TARAF
   ⇒ öngörü: bu gecenin birimlerinin YARIDAN AZI yer ile kapanıyor; en büyük TARAF yükü Romanya 1877.
```

## 1 · ÖLÇÜM (öngörüden SONRA)
Alet: `scratchpad/t76/sk_birim.py` — `degismez2(yer_sarti=True)` döngüsünün birim kayıtlı kopyası; denetle'nin
sayılarını BİREBİR üretti (taban 3160/1558/1602 · HEAD 3157/1554/1603). `denetle.py`ye dokunulmadı.

```
taban b49c399d   3160 = 1558 YER + 1602 TARAF
HEAD  385c65fb   3157 = 1554 YER + 1603 TARAF     (YER −4 · TARAF +1)
```

### ① YER'den ÇIKAN 4 birim — hepsi TEK GÜN: 1419-01-01
Silistre · Köstence · Kayseri · Kırşehir (dördü de YER ile kapanıyordu). Sebep: **benim hatam.**
PAKET-0076-ISHAKCI-1004 yamasında İshakçı'yı 1419-01-01 kovasına soktum ama `olaylar_ek10.js`teki
maddelere adı **"İsakçı"** yazdım. `_2s_norm` → `isakci`; yerleşimin adı → `ishakci`. Eşleşmedi ⇒
İshakçı açıklanmadı ⇒ **kovanın tamamı açıldı**, dört masum birim de kovayla birlikte düştü.
Açık sayıya görünmedi: gün `-01-01` olduğu için YIL-TEMSİLÎ BORÇ'a düştü (164 → 165) ⇒ 2s ✓ dedi.
📌 Ders adayı: yıl-temsilî kova, yeni açılan bir kırılmayı SESSİZCE yutabiliyor (2s ✓ yeşil kaldı).

Ayrıca TARAF'tan ÇIKAN: 1410-02-13 İshakçı (Yanbolu maddesiyle taraf) — İshakçı yamasının çelebi
dönemini silmesiyle, beklenen.

### ② TARAF'a GİREN — Dobriç
1908-10-05 Hacıoğlupazarcığı · 1913-08-10 Hacıoğlupazarcığı (ikisi YALNIZ TARAF: Bulgaristan
bağımsızlığı / Bükreş maddeleri Dobriç'i adıyla anmıyor). İshakçı 1419 GİRMEDİ (açıktı, bkz. ①).
Net TARAF: −1 (İshakçı 1410) +2 (Dobriç) = **+1**.

### DÜZELTME — `denetim/PAKET-0076-ISHAKCI-DUZELT-1005.diff` (veri dosyası, koordinatör uygular)
- `olaylar_ek10.js`: 5 madde satırında "İsakçı" → "İshakçı"
- `yerlesimler_ek29.js`: İshakçı `not`una D208 çekincesi (koordinatörün M-5818 isteği): *İshakçı'ya ÖZEL
  bir kaynak çıkarsa bu hükmü geçersiz kılar.*

Worktree'de (HEAD 385c65fb + diff) tam `denetle.py`:
```
D1 ✓ 309 · 1b ✓ 0 · D2 ✓ 623/0 · 2s ✓ 189 açık · yıl-temsilî 164 (165'ten GERİ) · 2i ✓ · D7 727
2sk 3162 = 1559 YER + 1603 TARAF   (tavan 1602 ⇒ ⚠️ +1)
1419-01-01: eksik YOK, kapandı; İshakçı bu gün YER ile kapanıyor
```
`git apply --check` (C:\atlas) temiz.

### ③ ASIL SORU — bu gecenin kırılmaları (düzeltme SONRASI)
| Grup | YER | YALNIZ TARAF | gün açık / ölçülmez |
|---|---|---|---|
| Dobruca (A) 1402/1416/1419 + İshakçı | 4 (1416 Babadağı · 1419 Silistre/Köstence/İshakçı) | 0 | 4 (1402-07-28 günü Fetret yüzünden KRONİK açık — kova açık, birim ölçülmez) |
| İzdin 1832 | 0 | 0 | 1 (kendi birimi YER ile açıklanıyor; günü Fort Robidoux açık tutuyor) |
| Köstendil 1908 | 1 | 0 | 0 |
| Silistre 1913 | 1 | 0 | 0 |
| Dobriç 1908 · 1913 | 0 | 2 | 0 |
| Romanya 1877 (15 nokta) | 11 | 4 | 0 |
| **TOPLAM 28** | **17** | **6** | **5** |

⇒ Kapalı 23 birimin **17'si (%74) YER ile**, 6'sı yalnız taraf koluyla kapanıyor.
- **ok109** (be79c67a): yalnız madde değişikliği, birim etkisi **0**.
- **Alaska**: 87e9f851 TABANDA (b49c399d'den önce) ⇒ çalkantıya katkısı 0. Bilgi: 1867-07-01 Kanada
  Dominyonu birimleri Quebec dışında hep yalnız taraf; 1867-10-18 Alaska devri KAPSAM DIŞI kovada.

### ÖNGÖRÜ PUANI
- ① "YER −4 çelebi silmesinden" → **ÇÜRÜDÜ.** Çelebi kırılmalarından yalnız 1 birim çıktı ve o TARAF'tı;
  YER −4'ün tamamı benim yazım hatamın açtığı 1419 kovası.
- ② "TARAF +1 Dobriç ya da Köstendil" → **TUTTU (Dobriç)**; Köstendil YER çıktı.
- ③ "Yarıdan azı YER; Romanya çoğu TARAF" → **ÇÜRÜDÜ.** 17/23 YER; Romanya 11/15 YER.

### İSTEĞE BAĞLI (önerim, uygulanmadı)
Dobriç'in adını 1908 Bulgaristan bağımsızlığı ve 1913 Bükreş maddelerine eklemek ⇒ 2 birim TARAF → YER,
2sk TARAF 1603 → 1601 (tavan altı). Madde metnine ad yazmak D261'e uygun, ama Bükreş'in Dobriç'i andığı
kaynak cümlesiyle bağlanmalı (yazılmadı, ölçülmedi).
