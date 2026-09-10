# PARALEL — DÖNEM BAŞINA BİT DENKLİĞİ · **ÖNGÖRÜ**

```
🔴 BU DOSYA ÖLÇÜMDEN ÖNCE YAZILDI VE ÖLÇÜMDEN ÖNCE COMMIT'LENDİ.
   Yazıldığı an: dönem-paralel kip HENÜZ KODLANMADI, tek bir koşu yok.
   Sebep: D022 — "sonra yazılan beklenti AYARLANABİLİR, önce yazılan
   ÇÜRÜTÜLEBİLİR."
```

## ⓪ ÖNGÖRÜ

**`sha256(sıralı) == sha256(dönem-paralel)` — DENK ÇIKACAK.**

Ve güvenim devlet başına sınavdan **DAHA YÜKSEK.** Gerekçe aşağıda; her
maddesi ayrı ayrı çürütülebilir.

## ① KOORDİNATÖRÜN İŞARET ETTİĞİ RİSK — ve niçin kapanıyor

> *"Dönem birleştirme ölçütü `aktif == onceki and dnm` GEOMETRİ SONUCUNA
> bağlı (`:4443` yorumu) — devlet içinde sıralıydı, şimdi onu da
> bölüyorsun. ASIL RİSK tam orası."*

Risk **doğru tespit**, ama tasarım onu **bölmüyor**:
```
FAZ 0  SIRALI   her devletin dönemleri ve `aktif` kümeleri kurulur
                (motorun kendi mantığı, birebir)
FAZ 1  PARALEL  YALNIZ GEOMETRİ — (did, a, aktif) → halka listesi
FAZ 2  SIRALI   motorun BİRLEŞTİRME MANTIĞI aynen oynatılır ve
                havuza() ÖZGÜN sırayla çağrılır
```
⇒ `aktif == onceki and dnm` kararı **hiçbir zaman paralel bir bağlamda
verilmiyor.** Paralelleşen tek şey saf geometri.

🔴 **VE BİR TAMLIK ŞARTI VAR — bu tasarımın en kırılgan yeri:**
FAZ 1'in hangi dönemler için geometri hesaplayacağı, FAZ 2'nin
birleştirme kararına bağlı; o karar da geometriye bağlı. Döngüsel.
⇒ Çare: **ÜST KÜME.** FAZ 1, `aktif` boş olmayan **HER** dönem için
hesaplar. Birleştirilecek dönemlerin geometrisi boşa gider — bu, bu
tasarımın **ölçülecek maliyetidir** (rapora sayıyla yazılacak).
⚠️ Üst kümeyi daraltmak (yalnız `aktif != onceki` olanları hesaplamak)
**YANLIŞ OLURDU**: `dnm` boşken motor birleştirmez, aynı `aktif`i
**kendi `a`sıyla yeniden hesaplar**.

## ② NİÇİN DEVLET BAŞINADAN DAHA GÜVENLİYİM — ölçülmüş bir sebep

Dönem başına bölmenin akla gelen tek gizli sıra bağımlılığı
`_PUAN_ONBELLEK` idi: anahtarı **`(did, aktif)`**, ve fonksiyon üçüncü
bir argüman alıyor: **`gun`**. Anahtarda `gun` YOK ⇒ aynı `(did, aktif)`
iki farklı tarihte gelirse **ilk hesaplanan** değer ikincisine de
dönüyor. Sıralı koşuda "ilk" = en erken dönem; paralelde "ilk" = hangi
iş parçacığı önce varırsa.

**ÖLÇÜLDÜ (AST, `gun` adının Load sayısı fonksiyon gövdesinde):**
```
_puan_bolgesi(did, aktif, gun)   →  `gun` OKUMA satırı: []   (SIFIR)
```
⇒ `gun` **ölü bir parametre.** Sonuç yalnız `(did, aktif)`e bağlı,
önbellek doğru anahtarlanmış, **sıra sonucu değiştiremez.**
📌 Bu, sınavı koşmadan kapatılan bir risktir — ve tam da bu yüzden
öngörüye yazılıyor: ölçüm sonrası bulunsaydı "zaten biliyordum"
denemezdi.

## ③ AYRIŞIRSA — mazeret değil, sıralı şüpheli listesi
```
① ÜST KÜME EKSİK      FAZ 1 bir dönemi atlamış olabilir; FAZ 2 onu
                      ararken KeyError verir ya da sessizce atlar
                      ⇒ ilk ayrışan bayt bir DÖNEM SINIRINDA olur
② devir_kumesi/_dolgu ÇAĞRI SIRASI FAZ 0'da değişmiş olabilir
                      (motor devlet→dönem sırasıyla çağırıyor; FAZ 0 da
                       öyle çağırmalı — aksi hâlde önbellek ısınma sırası
                       değişir, DEĞER değişmez ama sayaçlar değişir)
③ frozenset SIRASI    `unary_union` listesinin sırası (devlet başına
                      sınavda ÇÜRÜMEDİ, burada da beklemiyorum)
```

## ④ ÖLÇÜLECEK — ve öngörüsü ayrıca yazılıyor
```
ÜST KÜME MALİYETİ   FAZ 1'in hesapladığı dönem sayısı / motorun
                    gerçekte hesapladığı (3730 tam koşuda)
ÖNGÖRÜ              üst küme, gerçek işin %5-25 üstünde çıkacak
                    (birleştirme ardışık EŞİT `aktif` koşularını eliyor;
                     bu koşuların ortalama uzunluğu 1'e yakınsa fark küçük)
```
🔴 Bu öngörünün **mazereti yok**: sayı ölçülecek ve yazılacak, hangi
yöne çıkarsa çıksın.
