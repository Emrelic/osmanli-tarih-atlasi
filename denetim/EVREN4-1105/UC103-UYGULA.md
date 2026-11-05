# 103 uç deliği — uygulama talimatı (KASA PAZAR; EMRELİC gece-116)

Öneri dosyası: `UC103-ONERI.json`, 67 satır. Ayrıca 36 Tunus kaydı. KASA SALI veriye yazmaz.

**Amaç:** 1930–2000 arasında zinciri biten ve sahipsiz kalan yerleşimler. Bunlar D1'in bugünkü 1285–1920 örnekleminde görünmüyor. Bu tablo D1'i azaltır, hiçbir dilim boş açmaz.

## Sayılar (KASA kontrolü, `uc103_kontrol.py`)

- **73 öneri dilimi:** 19 KAYNAKLI, 29 ONERI, 23 ONERI-KARAR (bu gece kararlaşmış günler), 2 BULUNAMADI (geçici gün).
- Her dilimde uc dolu.
- Künye penceresi: hayalet 0, künyesiz id 0.
- **36 Tunus kaydı:** UFUK-1923 listesiyle (Tunus 72 satır → 1956-03-20) kapanır; burada uygulanmaz.

## 🔴 Önceki dilim düzeltmeleri (ardıl dilimle AYNI commit'te; yoksa bir boşluk kalır)

| yerleşim | önceki dilim | eski t | yeni t | dayanak |
|---|---|---|---|---|
| Orašje, Posušje, Vitez, Çapljina | herzeg-bosna | 1996-08-14 | 1996-08-31 | KARARLAR (Herzeg-Bosna t 1996-08-31); JSON `onceki_dilim_t_duzelt` |
| Bahlâ, İzkî | umman-ic-imamlik | 1955-01-01 | 1955-12-01 | ay hassasiyeti; yalnız JSON notunda |
| Berbérati, Bangassou | orta-afrika-imparatorlugu | 1979-09-20 | 1979-09-21 | KARARLAR gece-101 (c): künye t 09-20 → 09-21, LAB UYGULA'da; künyeyle aynı commit |
| Nador | fas-ispanyol-himayesi | 1956-04-07 | 1956-04-05 | TDV; LAB UYGULA'daki künye kalemiyle aynı commit |

## Mükerrer (burada uygulanmaz)

- Bulawayo, Bangassou ve Butterworth noktaları `HALEF1946-UYGULA.md` birleştirmelerinde (Bulavayo, Bangassu, Gcuva) siliniyor. Ardıl zincir oradaki ana kayda yazılır.
- Bulawayo'nun bu dosyadaki zinciri 1965-11-11'de bitiyor (eksik); ana kayıt HALEF1946'da tamamdır.

## Bit önerisi

- Grammos ve Vitsi (DSE dağ üsleri): `bit 1949-08-28`. Alternatif ardıl zincir de satırda var.

## D2

- **Yeni madde gerekli:**
  - Bahlâ / İzkî, Aralık 1955 (tek taslak).
  - Gudermes, 1999-11-12 seçilirse.
- **Taşıma gerekli** (var olan madde, yeni güne):
  - Nador 04-07 → 04-05.
  - Herzeg-Bosna dörtlüsü 08-14 → 08-31.
- Kalan satırlarda son t'nin ±30 gününde madde var.

## Açık kalemler (EMRELİC)

- Triyeste B bölgesi: Yugoslavya'ya geçiş 1954-10-05 (imza, TEK ÖLÇÜ) mi, 10-26 (fiilî devir) mi?
- Kosova gölge cumhuriyeti dilimleri: sahip fiilî Yugoslavya mı? (Mitroviça kararıyla aynı soru.)
- Brazzaville: özerk künye 1958-11-28 (LAB'da).
- Gudermes, Urus-Martan ve Şali fiilî alış günleri: mevcut D2 maddesi 2000-02-06 hepsini anıyor. Urus-Martan ve Şali BULUNAMADI, geçici gün 2000-02-06.
- İngiliz Togoland → Gana 1957-03-06: Gana Bağımsızlık Yasası Togoland'ı açıkça anmıyor; ONERI.

## San Salvador (EMRELİC gece-118 kuralı)

- history.state.gov: «El Salvador declared itself an independent republic in 1839». Bu bir bağımsız cumhuriyet ilanıdır (yalnız yıl); federasyonun çözülüşü ayrı bir cümlede.
- → **ÇELİŞKİ.** `ic_not`: "1839 (state.gov) / 1841 (künye f 1841-01-01)"; künye 1841 kalır.

## TARAYICI

tribune.com.pk (403) · iranicaonline swat (404) · britannica (403) · un.org A/RES/1044(XI) (403) · history.state.gov Kongo (404) · Enugu kaynağı (404) · gov.za Anayasa 200/1993 yeniden okunmadı (bantustanlar bu yüzden ONERI-KARAR) · RFE/RL Aralık 1999.
