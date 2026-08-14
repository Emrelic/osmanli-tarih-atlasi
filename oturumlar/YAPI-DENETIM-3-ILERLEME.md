<!-- DURUM: CALISIYORUM | 2026-08-14 07:55 | IS 1 olculdu ve CANLI SAYFAYLA dogrulandi (127/2845 sessiz govde); denetle.py fonksiyonu sirada -->

# YAPI DENETİM 3 — ilerleme

*(eski adım: Opus hazır kıta 10 · eski dosyam:
`oturumlar/HAZIR-KITA-10-ILERLEME.md` — kanal ölçümleri orada kalıyor,
silinmiyor)*

**Teyit anahtarı: `KITA10-TEYIT-7B2M`** (değişmedi — eski adımla yazılmış
kayıtlar bu anahtarla bulunur).

---

## ① GÖREVİ NASIL ALDIM — ve bu bir ÖLÇÜM sonucudur

Bana **hiçbir mesaj gelmedi.** Görevi, Emre `iii` dediği için koştuğum
üçüncü turda **`git log` tarayarak** buldum:
```
23:24 ölçümü   ca36a4e TAHTA + POSTA doğdu · oturumlar/POSTA.md:64
               "## YAPI DENETİM 3  (eski adı: Opus hazır kıta 10)"
```
⇒ Kanal **dosya olarak çalıştı** — mesaj olarak değil. POSTA panosunun kendi
gerekçesi (`send_message` ölçülerek çürütüldü) benim üç turluk ölçümümle
birebir örtüşüyor.

📌 Ve şu ayrım kayda değer: koordinatör panoyu **22:10**'da yazdı, ben
**23:24**'te gördüm. Aradaki 74 dakika bir arıza değil; **panoyu okumam
gereken bir tetik yoktu** — beni tetikleyen şey Emre'nin `iii`siydi.
⇒ *Pano çalışıyor, ama okunması bir OLAYA bağlı değil.* Kendi turumda
düzenli okuyacağım.

## ② İŞİM — üç yeni denetim (şartname: `oturumlar/YAPI-DENETIM-3.md`)

```
İŞ 1  H-0023  etiketsiz gövde        — en ucuz, en kesin
İŞ 2  H-0024  sessiz toprak değişimi — Değişmez 2'nin TERSİ
İŞ 3  H-0066  kopuk gövde (enklav)   — İHLAL değil SORU üretir
```
Yazma yetkim: `arac/denetle.py` (yalnız YENİ fonksiyon) · `denetim/YAPI-3-*.md`
· bu dosya. **Düzeltme yapmam, rapor yazarım.**

**Kilit durumu ölçüldü (kendim, 20:50 ve 23:24):** üretim koşmuyor, kilit
dosyası yok, zincir 20:15'te bitti, r1288 yayınlandı, depo temiz.
⇒ Şartnamedeki *"denetle.py'ye ŞU AN DOKUNMA"* uyarısı **18:47 koşusuna**
aitti ve POSTA `🔓 SERBEST` diyor. İkisi uyuşuyor; yine de dosyaya
dokunmadan önce her turda kilidi **yeniden** ölçeceğim.

## ③ SIRADAKİ ADIM

İŞ 1 ölçümü — `data/devletler_harita.js` ve `data/donemler.js` yapısını
**kendi ayrıştırıcımı yazmadan** okumak (`§11`: veri bir dilde yazılıysa o
dilin yorumlayıcısını çağır ⇒ `node`). Ölçülecek: kaç gövde boyanıyor ·
kaçının kimliği `BOYALAR`da var · kaçının `devletler.js`te künyesi var ·
**kaçı ekranda etiketsiz kalıyor** (bu sonuncusu kimlik tarafından AYRI —
şartname varsaymamamı açıkça söylüyor).
