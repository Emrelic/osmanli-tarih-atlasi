# HANGİ DENETİM ÇIKTISI ÜRETİLİYOR AMA HİÇBİR YERE AKMIYOR?

`denetle_yayin.py` **dosyalar** için soruyor: *"üretiliyor ama çizilmiyor."*
Aynı soru **bulgular** için hiç sorulmamış.

Doğuran vaka: Kızıldeniz'in hayalet memlûk kayıtları
`denetle_anakronizm.py`'nin B bölümünde **duruyordu** — araç doğru ölçüyordu,
doğru basıyordu, ve kimse okumamıştı. *Kaçan şey ölçüm değil, bakılmamış bir
çıktıydı.*

---

## 🔴 İLK ÖLÇÜTÜM DÜŞTÜ — ve nasıl düştüğü öğretici

İlk vekil: *"aracın adı bir belgede geçiyor mu?"*
```
denetle_bosluk.py       0 anılma
denetle_tabiyet.py      0 anılma
denetle_tutarlilik.py   0 anılma
```
**Üçü de bugün yazıldı.** Yani ölçüt aracın YAŞINI ölçüyor, akışını değil.

Ve asıl kusur: **`denetle_anakronizm.py` beş belgede anılıyor** — yani ölçüt
**kendi doğuran vakasını temiz gösteriyor.** Bir denetimin, var olma sebebi olan
vakayı kaçırması bu depoda bugün beşinci kez çıktı ve her seferinde aynı sonuç:
o denetim kurulmamalı.

## ✅ ÇALIŞAN ÖLÇÜT: rapordaki sayı bugünkü koşuyla uyuşuyor mu?

Bir bulgu okunuyorsa raporu güncellenir. Rapor sayısı ile aracın bugünkü sayısı
ayrışıyorsa, **arada geçen sürede kimse bakmamış** demektir.

| araç | rapor | raporun dediği | bugün | fark |
|---|---|---|---|---|
| `denetle_anakronizm.py` | ANAKRONIZM-2026-07-30 | A) **10 kimlik, 221 dönem** | **6 kimlik, 108 dönem** | 🔴 iki kat |

Anakronizm raporu iki gün eski ve sayıları **yarı yarıya** değişmiş. Rapor
"Oturum 9'a" diye iş dağıtıyor; o iş yapıldı mı, kısmen mi, bilinmiyor — çünkü
rapor bir daha koşturulmadı.

⚠️ Bu ölçüt **doğuran vakayı yakalıyor**: ilk vekilin kaçırdığı yerde bu tutuyor.

## 📊 Rapor yaşları

```
2026-07-29   3 rapor
2026-07-30  10 rapor     ← iki gün önce, arada 100+ commit
2026-08-01   3 rapor     ← bugün yazılanlar
```
**On rapor 30 Temmuz'dan kalma.** O tarihten bu yana veri de araçlar da defalarca
değişti. Hiçbiri "hâlâ geçerli mi" diye sınanmadı.

## 🔴 Rapordan hiç geçmemiş araçlar

`denetle_kapsama.py` · `denetle_olcek.py` · `denetle_yayin.py` ·
`denetle_tabiyet.py` · `denetle_tutarlilik.py`

Son üçü bugün yazıldı, mazeretleri var. Ama **`denetle_kapsama.py` ve
`denetle_olcek.py` günlerdir koşuyor ve hiçbir raporu yok** — çıktıları
yalnız terminale akıyor, yani koşturan oturum kapanınca kayboluyor.

---

## Öneri: raporlara ÖLÇÜM DAMGASI

Her rapor, üretildiği koşunun **başlık sayılarını makine okunur** taşısın:
```
<!-- OLCUM: anakronizm A=10/221 B=17/84 tarih=2026-07-30 commit=abc1234 -->
```
O zaman tek bir araç şunu sorabilir: *"bu rapordaki sayı bugün hâlâ doğru mu?"*
— ve bayat rapor, **okunmadan** tespit edilir.

⚠️ Bu bir öneri, uygulanmadı. Ve kendi kuralıma göre: **ölçüt kurulmadan önce
doğuran vakasında sınanmalı.** Damga fikri anakronizm raporunda sınandı ve
tuttu; ötekilerde sınanmadı.
