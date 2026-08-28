# TASNİF — 174 madde, ALTI OTURUMA bölündü

```
ŞARTNAME  bu dosya + oturumlar/ORTAK-PAKET-KURALLARI.md  ← ÖNCE ONU OKU
          + oturumlar/TASNIF.md  ← yöntem orada, TEKRAR ETMİYORUM
LİSTE     denetim/kume/SINIFLANMADI.md   (174 satır: parti · madde · hüküm · not)
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

## 0. NİÇİN BÖLÜNDÜ

Emre'nin sözü (28 Ağustos): *"Tüm eksik paketlerdeki işleri yap bitir,
sonra koşu yayın yapalım."* 174 madde tek oturumda saatler alır; koşu
onları bekliyor. Altı oturum, **kesişmeyen paket kümeleri.**

## 1. 🔴 KİM HANGİ PAKETLERİ ALIR — kesişme YOK

| oturum | paketler | ~adet |
|---|---|---|
| **TASNİF** (mevcut) | `0002 · 0003 · 0004 · 0006 · 0007 · 0008` | ~30 |
| **TASNİF-B** | `0010 · 0013 · 0014 · 0016 · 0017 · 0019` | ~36 |
| **TASNİF-C** | `0020 · 0021 · 0022 · 0023 · 0024 · 0025` | ~27 |
| **TASNİF-D** | `0027 · 0028 · 0029 · 0030 · 0031` | ~34 |
| **TASNİF-E** | `0032 · 0033 · 0036` | ~39 |
| **TASNİF-F** | `0034` | ~36 |

🔴 **Kendi paketlerinin DIŞINA çıkma.** `SINIFLANMADI.md`yi açıp yalnız
kendi satırlarını süz:
```bash
grep "parti-emrelic-0019\|parti-emrelic-0021" denetim/kume/SINIFLANMADI.md
```
⚠️ `parti-0002` ile `parti-emrelic-0002` **ayrı paketlerdir** — tabloda
hangisi yazıyorsa o.

## 2. HERKESİN AYNI ÜÇ KOVASI — `TASNIF.md`de tarif edildi

```
🟢 KAPANMIŞ     çare zaten uygulanmış → ÖLÇ, sonra cozuldu / zaten-dogru
🔵 KÜMEYE GİT   var olan dokuz kümeden birine ait → adını yaz, hüküm SIRADA kalır
🔴 YENİ İŞ      hiçbirine uymuyor → ne gerekiyor + hangi DOSYA
```
🟠 **VE DÖRDÜNCÜ BİR KOVA VAR** — TASNİF oturumu ölçüp buldu ve haklı:
```
🟠 ÇARE İLAN EDİLDİ AMA UYGULANMADI
   not "yazılacak / eklenecek / önerildi" diyor, aradan gün geçmiş,
   veride KARŞILIĞI YOK.
```
Bu en sinsisi: kayıt *"çözülmüş"* gibi okunur, veri boştur. **Ayrı say.**

## 3. 🔴 ÇIKTI DOSYAN — adında SENİN ADIN olacak

```
denetim/HUKUM-<SENİN-ADIN>.json     kapattığın maddeler
denetim/BULGU-<SENİN-ADIN>.md       🔵 🔴 🟠 kovaları
```
Örnek: `denetim/HUKUM-TASNIF-C.json`
🔴 **`CEVAP.json`a DOKUNMA** — birleştirmeyi koordinatör yapıyor.
🔴 **Başkasının `HUKUM-*.json`una DOKUNMA.**

## 4. İKİ ÖLÇÜM — her madde için, ikisi de on saniyelik

```bash
git log --oneline --all -S"<anahtar>" -- <ilgili dosya>   # zaten yapılmış mı
py arac/_yer_ara.py "<yer adı>"                            # kayıt var mı
```
🔴 İkincisi ZORUNLU. Bu gece ölçüldü: `data/yerlesimler.js` yalnız
`window.YERLESIMLER`i tanımlar (790 nokta); öteki 54 dosyanın her biri
KENDİ değişkenini tanımlar. Elle yazılmış node sorgusu verinin **%70'ini
görmez** ve *"kayıt yok"* diye **yanlış negatif** üretir — iki kayıt böyle
"yok" ilan edildi, ikisi de vardı. **Aleti kullan, sorgu yazma.**

⚠️ Ve alet *"kayıt yok"* dese bile bir adım daha: **Türkçe/Osmanlı adı.**
`Lefkada → Ayamavra` · `Kithira → Çuha Adası`. Bu gece iki kez ısırdı.

## 5. ŞİKÂYET BAYAT MI — görselden anlaşılıyor

Paket klasörlerinde `H-XXXX-1.png` var. Kronoloji panelindeki
**`N / TOPLAM başlık`** sayısı görüntünün hangi yayından olduğunu söyler.
Bugün külliyat **1250+ madde**; görüntü `422 / 951` diyorsa **çok geride.**
⇒ İlk soru *"bu kusur var mı"* değil, ***"bu şikâyet hâlâ geçerli mi"***.
⚠️ Ama bayat **sanıp geçme** — bugünkü veride kusur duruyorsa şikâyet
canlıdır, görselin yaşı ne olursa olsun.

## 6. TESLİM — YİRMİLİK gruplar hâlinde, biriktirme

```
py arac/tahta_bekci.py --kim "<SENİN ADIN>" --ara 60        # İLK İŞ
py arac/tahta.py yaz --kim "<SENİN ADIN>" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
Rapor sayıyla ve kova kova:
```
N madde  →  🟢 kapanmış A   🔵 kümeye giden B   🟠 uygulanmamış C   🔴 yeni iş D
```

⚠️ **Sen düzeltme YAPMIYORSUN** — ölçer, hüküm yazarsın (`CLAUDE.md §7`,
Oturum 2 kuralı). Tek satırlık bir veri düzeltmesi çıkarsa koordinatöre
sor; o karar verir.

🔴 **AKSAKLIĞI BEKLETME.** Şartname yanlışsa, sayı tutmuyorsa, bir madde
başka bir oturumun dosyasına dokunuyorsa — **hemen** yaz.
