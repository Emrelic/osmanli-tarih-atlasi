# GLM1-SLUG-ONARIM-1006C — ölü slug'lar için kapsayıcı madde ADAY tablosu (ölçüm; onarım YOK)

Durum: **SÜRÜYOR** (6 Ekim 2026, GLM1)

Atama: YILDIRIM BAYEZIT (koordinatör) mesajı, 6 Ekim — 1006B tesliminin ardılı; sıra
değişti, bu eski ③'ün kendisi. Soru: **482 ölü slug'ın her biri için bugünkü canlı
TDV'de geçerli bir KAPSAYICI madde var mı?** Ve: 2026-10-06 motoru ile 2026-09-30
motorunun farkı sayıyla (bayat oraklının bedeli).

Sınırlar (koordinatör şartları): önbelleğe/`data/`'ya/`arac/`'a **dokunulmaz** ·
**hiçbir slug onarımı uygulanmaz** (tablo üretilir, hüküm koordinatörde) · istekler
arası 1 sn bekleme · öngörü ölçümden önce mühürlenir · `bulunamadı` bir sonuçtur.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi, değiştirilmez

**Evrenler (disk tarafı, HTTP öncesi):**
- ölü slug: içeriği `302\n` olan dosyalar (1006 ölçümü: 482; koşu sırasında yeniden
  türetilir, sayı farklı çıkarsa ölçülen sayı esas olur ve bildirilir);
- Eylül adayı: 79 sonuçlu ARAMA dosyasındaki menü-dışı satırlar — 217 satır / 208
  benzersiz (1006B ölçümü);
- bugünkü arama: 482 ölü slug'ın her biri için `arama/?q=<slug>` — **yalnız ilk sayfa**
  (Eylül hasadı da tek sayfaydı; `?p=m` izlenmez — beyan);
- GET doğrulaması: 208 Eylül adayı + bugünkü aramanın **yeni** (Eylül listesinde
  olmayan) adayları.

**Kural beyanları:**
- **"geçerli aday"** = bugünkü aramada dönen VE doğrudan GET'te 200 + gövdeli olan
  slug. Arama dizini makaleden geri kalabilir (ölü slug'ların hikâyesi budur) —
  arama dönüşü tek başına geçerlilik SAYILMAZ, GET şart.
- sonuç çıkarımı DOM'dan: `madde_liste_satir` bloklarının href'i (`?`/`.php`/dış
  bağlantı hariç) — 1006B'de bu satırların sunucu-taraflı olduğu ölçüldü.
- ölü slug'ın adı bugünkü aramada kendisini dönerse ayrı işaretlenir
  (`kendini_döndürdü` — madde var ama adresi değişmiş olabilir izi).
- ölü slug adında Türkçe/Kiril karakter varsa URL kodlanır (`moгol` vb.).

**Kuramsal zemin:** makaleler naden ölürlür, yeniden ADLANDIRILIRLAR (302); motor
30 Eyl'den beri DARALMIŞ (meshed 9→3, 1006B ölçümü) ama yön bilinmiyor — daralma
hem aday düşürür hem (daha isabetli) yeni aday çıkarabilir. D217: TDV olay değil
YER-KİŞİ ansiklopedisidir; arama önerileri zaten bu ekseni taşır.

**Sayı öngörüleri:**
| # | Soru | Öngörü | Mekanizma |
|---|---|---|---|
| Ö1 (ASIL) | 482 ölü slugu bugün ≥1 GEÇERLİ adayı olanı | **70-130 (%15-27)** | Eylül'de 363 aramanın 79'u (%22) sonuçluydu; motor daraldı ama GET-geçerlilik oranı yüksek |
| Ö2 | 208 Eylül adayından bugün GET 200-gövdeli olanı | **≥ 170 (%82)** | makale ölmek yerine yeniden adlandırılır; ölen ≤ 35 |
| Ö3 | 79 Eylül-sonuçlu sorgudan bugün ≥1 arama sonucu dönen · bugünkü ilk-sayfa benzersiz aday toplamı | **≥ 45 sorgu** · **120-180 aday** (Eylül 208'den az) | daralma yönü (meshed 9→3) |
| Ö4 | Eylül-sonuçsuz ≥300 sorgudan bugün sonuç çıkanı | **≤ 40** | daralan motor sonuçsuzlara yeni sonuç uydurmaz — ama ters yön ölçülmeden bilinmez |
| Ö5 | inmiş 14 adaydan bugün gövdeli olanı | **≥ 13** | 30 Eyl'de gövdesi çekilmişti; makale ölmez |

## 1. AŞAMA ELEME — disk (HTTP yok) — BİTTİ

| Ölçüm | Değer |
|---|---|
| kova | 35 · dosya 2.682 (1006 evreniyle aynı) |
| ölü slug (içerik `302\n`) | **482** (beklenen 482 ✓) |
| Eylül-sonuçlu ARAMA sorgusu | **79** (beklenen 79 ✓) |
| Eylül benzersiz aday | **208** (beklenen 208 ✓) |
| inmiş aday (dolu döküm kardeşi) | **herhangi kovada 25** · aynı kovada 14 (1006B ölçümü) |

**Kapsam beyanı (inmiş):** 1006B'nin "izlenen 14"ü ARAMA dosyasıyla AYNI kovadaki
kardeşe bakıyordu; 1006C diski herhangi bir kovadaki dolu dökümü sayar (=25).
İkisi de doğru, ayrı ölçüt. Mükerrer-çekimden düşürme için doğru kapsam 25'lidir.

**Koşu düzeni (koordinatör, geçiş 1 sonrası): iki geçişe bölündü** — GEÇİŞ 1:
208 aday GET'i (asıl sorunun bir yarısı: adaylar bugün geçerli mi) · GEÇİŞ 2:
482 ölü slug araması (öteki yarısı: eşleme bugün ne diyor). Tek koşuda ikisi
karışırsa hangi küme ne söylüyor ayrışmaz.

## 2. AŞAMA ÖLÇÜM — HTTP

### GEÇİŞ 1 — 208 Eylül adayının bugünkü GET doğrulaması — BİTTİ
**208 istek · 0 yeniden deneme. Sonuç: 208/208 GOVDE (%100)** — ölü 0 ·
gönderme 0 · boş sayfa 0 · ayıklama hatası 0. inmiş 25/25 GOVDE.
⇒ **Eylül oraklısı ADAY düzeyinde bayat değil**: atılmış cevabın tamamı bugün
çekilebilir. Bayatlık (varsa) yalnız EŞLEMEDEDİR (hangi ölü slug → hangi aday);
onu GEÇİŞ 2 ölçer (1006B'deki meshed 9→3 vakası eşleme daralmasıydı — aday
ölmesi değildi; adayların hiçbiri ölmedi).

### GEÇİŞ 2 — 482 ölü slug × bugünkü arama
(sürüyor — ~25 dk)

## 3. FARK — Eylül oraklısı ↔ bugünkü motor
(henüz değil)

## 4. TESLİM — üçlü kural
(henüz değil)
