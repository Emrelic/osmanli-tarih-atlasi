# KAYNAK-TAVAN-YALANCI-IYILESME-1009 — kaynaksızlık tavanına konacak BEYAN (öneri)

Koordinatör şartı (9 Ekim 2026): ZAMAN-Z5 `--yaz` ile inince kaynaksızlık ölçümü düşüyor. Bu
düşüş ölçme biçiminden geliyor, borç kapanmıyor. Tavanın yanına bunu söyleyen bir satır
konmadan Z5 inmeyecek. Metni UMIT önerir, satırı koordinatör yazar (§3.4④).

## Ölçüm (Z5 v2 alt ajanı, worktree'de gerçek `--yaz` sonrası)
- "hiçbiri" kovası (`s:` taşıyıp ne kayıt ne dönem düzeyinde kaynağı olan kayıt) 1880 → 1462 (−418).
- Sebep: Z5 gövdesi, eklediği 1923-1945 dönemine kendi `kaynak:` metnini yazıyor. Bu yüzden
  `kaynaksizlik_olc` 418 kaydı "hiçbiri"nden "dönem-içi"ne taşıyor. Ama o kaynak YALNIZ yeni
  1923-1945 dönemini tarihliyor. Kaydın 1281-1923 zincirinin kaynak borcu olduğu gibi duruyor.

## Yerleştirme — ÖNEMLİ ayrıntı
Tavan `denetle.py`de bir sabit DEĞİL. `denetim/KAYNAK-TAVAN.json`da bir ÜYELİK DEFTERİ
(`denetle.py` ~5757-5800, `KAYNAK_TAVAN_YOL`). Kapının "iyileşme" dediği şey kayıtların
defterden çıkabilmesidir. Tuzak ise `--kaynak-tavan-indir`: bu bayrak 418 kaydı "hiçbiri"
defterinden SİLER ve bu kayıtlar bir daha hiç görünmez. Bu yüzden beyan iki yere konmalı:
1. `denetle.py`de `KAYNAK_TAVAN_YOL` satırının hemen ÜSTÜNE (yorum).
2. `KAYNAK-TAVAN.json`da bir not alanı varsa oraya da. İndirme bayrağını koşturan kişi JSON'a
   bakar, koda bakmayabilir.

## Önerilen metin (denetle.py yorumu)
```
# 🔴 YALANCI İYİLEŞME — İNDİRME (9 Ekim 2026, KAYNAK-TAVAN-YALANCI-IYILESME-1009):
#    ZAMAN-Z5 gövdesi inince "hiçbiri" ölçümü ~1880 → ~1462 düşer (−418). Bu düşüş ÖLÇME
#    BİÇİMİNDEN gelir: yama, eklediği 1923-1945 dönemine kendi `kaynak:` metnini yazar ve
#    kayıt "dönem-içi" kovasına geçer. O kaynak YALNIZ 1923 sonrasını tarihler; kaydın
#    1281-1923 zincirinin kaynak borcu KAPANMADI. Gerçek borç ≈ 1880.
#    ⇒ `--kaynak-tavan-indir` bu düşüşü İYİLEŞME SAYMAZ. Defter Z5'ten önceki hâlinde
#    BİLEREK bırakıldı. "TAVAN GEVŞEK" uyarısına uyup indiren, 418 kaydın borcunu
#    SESSİZLEŞTİRİR (§3.4③ bu duruma UYGULANMAZ: iyileşme ölçülen şeyden değil,
#    ölçme biçiminden geliyor).
```

## Önerilen not (KAYNAK-TAVAN.json, alan adı dosyanın şemasına göre)
"Z5 (ZAMAN-Z5-1009) inince 'hiçbiri' ~418 düşer. Düşüş YALANCI: yamanın 1923-1945 dönem
kaynağı 1281-1923 borcunu kapatmıyor. Bu kayıtlar için `--kaynak-tavan-indir` UYGULANMAZ.
Bkz. denetim/KAYNAK-TAVAN-YALANCI-IYILESME-1009.md"

## Kalıcı çare önerisi (yazılmadı; karar koordinatörde)
Yorum bir uyarıdır, kapı değildir. Kalıcı çare kodda olur: `kaynaksizlik_olc`, yalnız ufuk
dışı (1923-10-29 sonrası ya da 1281 öncesi) dönemlerde kaynağı olan kaydı "dönem-içi"
SAYMASIN. Dönem-içi sayımı, kaynağı olan dönemin 1281-1923 penceresiyle kesişmesini şart
koşsun. Böylece Z5 de Z6 da (1281 öncesi dönemlere aynı şeyi yapar) sayacı yalancı biçimde
oynatamaz ve yorum gereksizleşir. İki yönlü sınav gerekir: Z5 sonrası "hiçbiri" ~1880'de
kalmalı; 1281-1923 dönemine gerçek kaynak yazılan kayıt yine "dönem-içi"ne geçmeli.
İstenirse UMIT yazar (denetle.py, TİP: kod).

## Sınıf (dersler dizini için öneri)
Bir sayacın İYİLEŞMESİ, ölçtüğü şeyden değil ÖLÇME BİÇİMİNİN değişmesinden geliyorsa, o
iyileşme YALANCIDIR. "İyileşince tavan iner" kuralı (§3.4③) bu duruma uygulanmaz.

YENİ DOSYALAR: denetim/KAYNAK-TAVAN-YALANCI-IYILESME-1009.md
