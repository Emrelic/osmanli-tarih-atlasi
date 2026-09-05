# BULGU — Utatlán + Iximché "sahipsizliği" (M-2822 ①)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

## SONUÇ — KUSUR YOK, ZATEN ÇÖZÜLMÜŞ (14 Ağustos, M-0047)

Her iki kaydı da doğrudan okudum (`data/yerlesimler_amerika.js:320` ve `:329`):

```
Utatlán (Q'umarkaj)  s: maya-sehir-devletleri (1400-01-01 → 1524-03-07)
                     bit: "1524-03-07"
                     yorum: "Pedro de Alvarado 1524 başında K'iche' krallarını
                             yakıp şehri ATEŞE VERDİ."
                     kaynak: Restall & Asselbergs, "Invading Guatemala"
                             (Penn State UP, 2007)

Iximché              s: maya-sehir-devletleri (1470→1524-07-25)
                        ispanya (1524-07-25→1527-01-01)
                     bit: "1527-01-01"
                     yorum: "1526 isyanı sonrası terk edildi."
                     kaynak: Penn Museum "Expedition Magazine" + Restall &
                             Asselbergs (2007)
```

Dosyanın kendi yorumu 14 Ağustos'ta zaten şunu kaydetmiş:
> *"DÜZELTME (koordinatör M-0047 hükmü): `kasitli_bosluk`/`bos:` KALDIRILDI,
> yalnız `bit:` bırakıldı — 'burası kasten boş' DEĞİL 'şehir artık yok'."*

**`bit:` alanı `denetle.py`nin Değişmez 1 mantığında TANINAN bir alandır**
(`arac/denetle.py:960,1109` — `bit = t.get("bit")` / `y.get("bit")`) ve
`girdi.py:798`te tanımlı: *"yok oluş tarihi — kur:'un aynadaki hâli."* Yani
bu iki noktanın `bit:` sonrası sahipsiz görünmesi bir **hata değil**, aracın
kendisinin **tanıdığı ve beklediği** bir durum.

**Künye şartı:** `kice`/`kakcikel` diye ayrı bir kimlik GEREKMİYOR — her iki
şehir de aktif döneminde zaten mevcut `maya-sehir-devletleri` künyesini
(f:1200, t:1697-03-13) kullanıyor, bu künye onları rahatça kapsıyor. Renk
sorunu YOK, kuyruğa gidecek bir şey yok.

## 🔴 VE BU, KENDİ ÖNCEKİ ÖLÇÜMÜMÜ ÇÜRÜTÜYOR

`BULGU-1923-0905.md`de bu ikisini (ve Mayapán, Cahokia, Zaculeu'yu) "30
belgesiz sahipsiz nokta" listesine yazmıştım — ÖLÇÜMÜM O ZAMAN yalnız
`kasitli_bosluk` bayrağını kontrol ediyordu, `bit:` alanını HİÇ SORMAMIŞTIM.
Şimdi doğrudan okudum: **Mayapán, Zaculeu ve Cahokia'nın ÜÇÜ DE `bit:` alanı
+ akademik kaynak + açıklayıcı yorum taşıyor** (Xiu isyanı 1441, Alvarado
1525, Pauketat 2009 akademik kaynağı). Bunlar belgesiz DEĞİL — belge
`kasitli_bosluk`tan FARKLI bir alanda duruyor ve benim ilk taramam onu
görmüyordu.

⇒ **"30 belgesiz" sayısı ÇÜRÜDÜ — gerçek sayı muhtemelen çok daha düşük.**
Kalan gerçek şüpheli sayıyı bu turda yeniden ÖLÇMEDİM (kapsam dışı, M-2822
yalnız Utatlán+Iximché istedi) ama bunu AÇIKÇA bildiriyorum: eski rapordaki
30 rakamına güvenilmemeli.

## DAMGA

| kalem | damga |
|---|---|
| Utatlán + Iximché sahipsizliği | **TUTTU, KUSUR DEĞİL** — `bit:` ile doğru belgelenmiş, M-0047 zaten çözmüş |
| Künye/renk ihtiyacı | **YOK** — mevcut `maya-sehir-devletleri` yeterli |
| "30 belgesiz" (önceki ölçümüm) | **ÇÜRÜDÜ** — en az 3'ü (Mayapán/Zaculeu/Cahokia) `bit:` ile belgeli çıktı, tam liste yeniden ölçülmedi |

`⏳ BEKLİYORUM: "30 belgesiz" listesinin `bit:` filtresiyle yeniden ölçülmesi ayrı bir iş olarak açılsın mı?`
