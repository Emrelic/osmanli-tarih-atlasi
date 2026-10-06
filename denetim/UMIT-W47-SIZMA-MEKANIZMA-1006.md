# UMIT-W47 · 22 Ağustos yorum sızıntısının mekanizması (6 Ekim 2026)

Yalnız ölçüm: hiçbir dosya değiştirilmedi, bu rapor commitlenmedi.
Temel: `origin/main` = `e8e0bc2e`. Denetim aracı `530c6998`den beri değişmedi
(`git log 530c6998..origin/main -- arac/denetle_arayuz.py` boş).

## ⓪ Düzeltme: kanıt `530c6998`de değil
`530c6998`in yalnız iki dosyası var: `arac/denetle_arayuz.py` ve
`arac/kosu_yayin.py`. **`index.html`e dokunmuyor**, yani sızıntının diff'i bu
commit'te değil. Sızıntıyı düzelten commit **`5603267d`**dir (22 Ağu 23:30,
"YORUM SIZINTISI DUZELTILDI"). Ondan önceki `index.html` (`5603267d^`) kusurlu
hâldir. `530c6998^` kusurlu hâli taşımaz: düzeltme 28 dakika önce inmişti.

## ① 22 Ağustos kusuru hangi sınıftı — kanıt
`5603267d^:index.html`, satır 352–371, Ayarlar `<details>` bloğunun içi:

```
352  <!-- 🔴🔴 22 Ağustos 2026 — `ayar-yakinlik` KALDIRILDI: ÖLÜ SÜRGÜYDÜ.
...
367       📌 SİLİNDİ, yorumlanmadı: blokta zaten bir `<!-- -->` vardı ve
368       iç içe HTML yorumu ÇALIŞMAZ — dıştaki, içteki `-->`de kapanır.
369       (Bugün bu tuzağa bir kez düştüm; kayıt olsun diye yazıyorum.)
370       Eski uçlar, gerekirse geri gelsin diye: min 3 ≈ 9.000 km ·
371       max 8 ≈ 230 km · varsayılan 5.5 ≈ 950-1.360 km. -->
```

**Mekanizma: yorum gövdesinde DÜZ METİN olarak yazılmış KAPANIŞ DİZİSİ
(`-->`).** Yorum 352'de açılıyor ve 367'deki ilk `-->`de kapanıyor. Bu `-->`,
ters tırnak içine örnek diye yazılmış `<!-- -->` ifadesinin parçası. 367'nin
geri kalanından 371'e kadar her şey belge metni olarak ayrıştırılıyor; 368 ve
371'deki `-->`ler metin içinde "yetim" kalıyor. Commit mesajı da bunu
söylüyor: "kapanış dizisini METİN olarak yazmıştım".

Kusur `-->` sınıfıdır, çıplak `--` sınıfı değildir. Öteki adaylar elendi:
- `>`: hayır.
- Kapanmamış yorum: hayır, yorum kapanıyor, hem de ERKEN.
- `--!>`: hayır, dosyada geçmiyor.

Sızan metnin ölçümü (Python stdlib `html.parser`; ilk `-->`de kapanma
bakımından tarayıcıyla aynı davranır): **1 metin düğümü** sızıyor, satır 367'den
başlıyor: *"` vardı ve iç içe HTML yorumu ÇALIŞMAZ — … 950-1.360 km. -->"*.
Yani Emre'nin ekran görüntüsündeki "açıklama Ayarlar penceresine sızdı"
anlatısı ile içerik birebir uyuşuyor.
⚠️ Gerçek tarayıcı DOM'u ölçülemedi: yerleşik tarayıcı `file://` sayfada
betik çalıştırmıyor. Ayrıştırıcı ölçümü tarayıcı ölçümü sayılmamalı.

📌 Koordinatörün bugünkü bulgusuyla fark: `e8e0bc2e` öncesi :1170/:1640'taki
`--`ler `-->`ye dönüşmüyordu, bu yüzden yorum `-->`de doğru kapandı. Bu bir
SIZMA değil, UYGUNLUK kusuruydu. Ölçümüm de bunu doğruluyor: `origin/main`de
157 yorum düğümü var, yetim kapanış taşıyan metin düğümü **0**.

## ② Kapı o mekanizmayı soruyor mu? — HAYIR, yalnız TESADÜFEN yakaladı
Kapının ① dalı (`denetle_arayuz.py`) şöyle çalışıyor: `<!--` bul → **ilk**
`-->`yi bul → aradaki gövdede `--` var mı diye bak → aramaya o `-->`den sonra
devam et.

Bu algoritma iki noktada kördür:
1. Gövde tanımı gereği ilk `-->`de bittiği için, **erken kapatan `-->`in
   kendisi gövdeye hiç girmez.** Asıl suçlu dizi soruya konu olmaz.
2. Erken kapanıştan sonra sızan metin **hiç taranmaz.** Arama bir sonraki
   `<!--`ya atlar; aradaki yetim `-->` görünmez.

`5603267d^`te kapı ötüyor. Ama sebep, sızan metindeki `<!--` açılış dizisinin
de `--` içermesi. Örnek yorumda kapanıştan önce bir açılış yazıldığı için
yakalandı; mekanizmayı sorduğu için değil.

### İki yönlü sınav
Aracın bugünkü sürümü, scratch kopyada ilgili `index.html` + `app.js` ile
koşturuldu:

| Girdi | Gerçek sızıntı (yetim `-->` taşıyan metin düğümü) | `denetle_arayuz.py` |
|---|---|---|
| `5603267d^` (22 Ağu kusurlu hâl) | 1 (satır 367) | çıkış 1 · "satır 352 gövdede `--`" ✓ ötüyor |
| **SENTETİK**: aynı dosya, yalnız `` `<!-- -->` `` → "yorum" | **1 (satır 368)** | **çıkış 0 · ✓ temiz ← KÖR** |
| `5603267d` (düzeltilmiş) | 0 | çıkış 0 ✓ |
| `origin/main` `e8e0bc2e` | 0 | çıkış 0 ✓ |

Sentetik satırın tam hâli, commit mesajındaki cümlenin kendisi: *"dıştaki,
içteki `-->`de kapanır"*. Bu yazımla kapı kusuru **görmüyor**, oysa metin
Ayarlar penceresine sızıyor.

## ③ Eksik soru (öneri, kod yazılmadı)
**"Yorum dışındaki metinde (`<script>`/`<style>` gövdeleri hariç) yetim yorum
kapanışı var mı?"**
- Ayrıştırma ilk `-->`de kapatarak yapılır. `--!>` de kapanış sayılır, çünkü
  spec'te yorumu o da kapatır.
- Kapanıştan sonraki, bir sonraki etikete kadar olan metin düğümünde `-->`
  ya da `--!>` geçiyorsa yorum erken kapanmış ve metin sızmıştır.
- Bu ölçüt kesin: geçerli HTML'de yorum dışında çıplak `-->` yazmanın meşru
  bir amacı yok, kasıtlı metinde `&gt;` yazılır. Bu yüzden 22 Ağustos'ta terk
  edilen "sızan metin mi, kasıtlı metin mi" belirsizliğine düşmez.
- Ölçümüm: `origin/main` 0 · `5603267d` 0 · kusurlu hâl 1 · sentetik 1. Yanlış
  pozitif yok, kusurlu iki hâlde de ötüyor.

Ek, daha küçük boşluklar (spec'in "abrupt closing" durumları, ölçülmedi):
- `<!-->` ve `<!--->` yorumu hemen kapatır.
- Mevcut dal bunları ancak gövdede `--` kalırsa görür.

Mevcut `--` dalı kalmalı. Uygunluk sorusunu (spec ihlali, erken uyarı) o
soruyor; önerilen dal ise sızıntı sorusunu soruyor. İkisi ayrı sorular.

## Bulunamadı
- 22 Ağustos'un yayındaki DOM'u (Pages geçmişi yok) ve gerçek tarayıcıda
  sentetik dosyanın DOM'u. Yerleşik tarayıcı `file://`de betik çalıştırmıyor.
- Ekran görüntüsünün kendisi: depoda aramadım.

## Yöntem dosyaları (scratch, depoda değil)
`scratchpad/{eski,sentetik,yeni,main}/` (aracın kopyası + `index.html` +
`app.js`) ve `scratchpad/sizinti.py` (stdlib `HTMLParser` ile yetim kapanış
sayacı).
