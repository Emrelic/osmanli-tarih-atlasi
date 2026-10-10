# D273 — ARAMA/SINIFLAMA TÜRÜNDE YANLILIK **KÖTÜMSERDİR**

**Slogan:** Bir arama/sınıflama işine öngörü yazan, **engeli HAYAL EDEBİLİR
ama engelsizliği SAYAMAZ** ⇒ sistematik olarak beklenenden ÇOK engel yazar.
Yön bir tesadüf değil, **soru türünün sonucudur.**

**Tarih:** 10 Ekim 2026 · **Ölçen:** LAB (iki kez) + KASA (bir kez), üç
bağımsız iş · **Taban:** `main` `197455c8` ve `681e2a82`

---

## Üç ölçüm

```
① LAB-INIS-AB-1010   154 kalemi A/B'ye ayırma
   ÖNGÖRÜ  A  95 · B 45 · ÖLÇÜLEMEDİ 14 · yeni ③ tavan 3
   ÖLÇÜM   A 134 · B 20 · ÖLÇÜLEMEDİ  0 · yeni ③ tavan 0
   ⇒ engel KÖTÜMSER tahmin edildi; 154 kalemin 86'sı yalnız `data/*.js`

② LAB-INIS-AB2-1010  B② beşinin "taze haritasız doğrulanabilir mi"
   ÖNGÖRÜ  3/5 geçer
   ÖLÇÜM   5/5 geçti

③ KASA-BAYAT-OZILAN-1010  öz-ilan taraması kova dağılımı
   ÖNGÖRÜ  C içinde İLGİSİZ 8 · GEÇERLİ 2
   ÖLÇÜM   İLGİSİZ 0 · GEÇERLİ 13
   ⇒ aynı yön: beklenenden AZ engel, BEKLENENDEN ÇOK geçerli kalem
```

Üç ayrı iş, iki ayrı oturum, üç ayrı evren — **yön AYNI.**

## Mekanizma — niçin tesadüf değil

Bir arama işinde öngörü yazarken zihin **somut engeller** üretir: *"şu
dosya tuza dokunuyordur", "şunun sınavı harita ister", "şu ad çakışır".*
Her biri hatırlanabilir, adlandırılabilir, sayılabilir.

**Engelsizlik ise sayılamaz:** *"geriye kalan 86 kalem yalnız `data/*.js`e
dokunuyor"* cümlesi, ancak ÖLÇÜMDEN SONRA kurulabilir. Öngörü anında o 86
kalem zihinde **tek tek yok**, bir artık olarak var.

⇒ Yanlılık bir dikkat kusuru değil, **bilgi asimetrisinin sonucu:**
engeller ADLI, engelsizlik ARTIK.

## Karşı yüzü — ve niçin tek bir "pay" yetmez

🔴 Yön **soru türüne** bağlıdır, işin kendisine değil:

| soru türü | yanlılık | sebebi |
|---|---|---|
| **ARAMA / SINIFLAMA** (*"kaçı şu kovaya düşüyor"*) | **KÖTÜMSER** | engel adlı, engelsizlik artık |
| **DEĞİŞİKLİK / ETKİ** (*"bu diff neyi oynatır"*) | yön SABİT DEĞİL | etki ölçülebilir, hayal gerekmez |
| **YOKLUK** (*"hiç var mı"*) | **İYİMSER** | boş küme her öngörüyü doğrular (`§11`) |

⇒ Bu yüzden *"öngörüye pay bırak"* tek başına yetmez: **payın YÖNÜ,
sorunun TÜRÜNDEN okunur.** Yanlış yöne bırakılan pay, payı olmamasından
kötüdür — çünkü yanlışlığı iki katına çıkarır.

📌 KASA'nın tahmin disiplini refinement'ının (*yanlılığın YÖNÜ
çıkarsanamaz; SORU TÜRÜ belirler*) ilk ölçülmüş vakası bu. O kural
*"yönü çıkarsayamazsın"* diyordu; bu ders onun bir türü için **yönü
ÖLÇÜYOR.**

## Uygulama — bir satır

Bir arama/sınıflama işine öngörü yazan oturum, öngörünün yanına şunu yazar:

> *"Bu bir ARAMA/SINIFLAMA işi ⇒ beklenen yanılma yönüm KÖTÜMSER
> (`D273`); engelleri fazla, geçerli kalemleri az tahmin etmem bekleniyor."*

⚠️ Ve bu **öngörüyü düzeltmek için değil**, yanılma ÖLÇÜLÜRKEN yönün
şaşırtıcı sayılmaması için yazılır. Öngörüyü yöne göre "ayarlamak"
öngörüyü bozar: yanlışlanabilirlik, tahminin dürüst olmasına bağlıdır.

## Bağlı kurallar

- `§11` son satır — öngörü ölçümden önce yazılır, **sınav anı + evreniyle**
- `§11` — *boş küme her öngörüyü doğrular* (bu dersin İYİMSER kardeşi)
- [`D271`](D271-kovanin-adi-sinifini-belirlemez.md) — ölçümden ders yazarken
  *"bu ölçtüğüm şey mi, yoksa bir AÇIKLAMASI mı"* sorusu; buradaki
  mekanizma bir AÇIKLAMADIR, ölçülen şey yalnız YÖNDÜR (n=3)
- [`D272`](D272-tanim-kendi-kullanimini-eksik-beyan-eder.md) — sahte yokluk
  İŞ üretir; burada sahte engel İŞ ERTELER
