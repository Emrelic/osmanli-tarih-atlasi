# Arşiv — ZATEN UYGULANMIŞ motor yamaları

Bu dizindeki yamalar **depoya uygulanmış** durumdadır. Buraya taşındılar
çünkü `denetim/` altında kalmaları gerçek çakışmaları **gizliyordu.**

## NİÇİN (KOSU-UMIT ölçtü, 1 Ekim 2026)

Tam inşa koşusuna hazırlık için 18 `.diff` dosyası `git apply --check` ile
sınandı. Üç sınıf çıktı ve ikisi **ekranda birbirine benziyordu**:

```
uygulanabilir   ileri 0           → koşuya girecek
ZATEN UYGULANMIS ileri 1 · geri 0 → girmemesi gereken  ← BU DİZİN
GERCEK CAKISMA   ileri 1 · geri 1 → yeniden üretilmeli
```

🔴 **`ileri 1` tek başına "çakışma" demek DEĞİLDİR.** Hem "zaten uygulanmış"
hem "gerçek çakışma" ileri yönde 1 verir; ayıran şey **geri yöndür**
(`--check -R`): geri 0 ⇒ yama tersine uygulanabiliyor ⇒ içerik ZATEN orada.
Tek yönde ölçen biri altısını da "çakışma" sanır ve iki gerçek çakışmayı
on sekiz gürültünün içinde kaybeder.

## ÖLÇÜM — iki makinede ayrı ayrı

| yama | hedef |
|---|---|
| `BOGAZ-OLCUM-0081-yama` | `uret_petek.py:1609` |
| `GOVDE-CAKISMA-0079-yama` | `uret_petek.py:6326` |
| `KORIDOR-0081-girdi` | `girdi.py:220` |
| `MOTOR-LEGO-0925-ayikla` | `uret_petek.py:5744` |
| `MOTOR-LEGO-0925-yama` | `motor_onbellek.py:127` + `uret_petek.py:429` |
| `YAMA-B3-UYGULANMIS-0912` | `uret_petek.py:1444` |

Altısı da **UMIT'te** ve **EMRELIC'te** ayrı ayrı ölçüldü; ikisinde de
`ileri=1 · geri=0`. 🔴 Koordinatör UMIT'in ölçümünü **kendi makinesinde
doğrulamadan** taşımadı — `D251`: başka makinenin ölçümü bu makinenin
durumunu söylemez.

## SATIR SONU — bir yan bulgu ve bir desen kusuru

`YAMA-B3-UYGULANMIS-0912.diff` taşınırken **85 CR** taşıyordu (worktree
CRLF). İkili okumayla bulundu; `cat -A` bu makinede CR'i **göstermiyor**
(MSYS aracı yutuyor) ⇒ `D246`: satır sonu hükmü ikili okumadan verilir.

🔴 Ve `.gitattributes`'taki desen kusurluydu: `denetim/*.diff` yazılmıştı,
ama gitattributes'ta `*` **eğik çizgiyi geçmez** ⇒ bu dizin kapsam dışı
kalacaktı. `*.diff -text` olarak düzeltildi — desen yola bağlı olmamalı.

## KURAL

- Buradaki dosyalar **koşuya GİRMEZ.** Tam inşa koşusu yalnız `denetim/`
  kökündeki `.diff` dosyalarını sayar.
- Bir yama buraya **ölçülerek** taşınır: `ileri=1 · geri=0`, iki makinede.
- Silinmezler: bir yamanın uygulanmış olduğunun kanıtı yamanın kendisidir.
  `git log` neyin ne zaman girdiğini söyler, ama yamanın METNİ neyin
  amaçlandığını söyler.
- Geri alınması gerekirse `git apply -R denetim/arsiv-yama/<ad>.diff`.
