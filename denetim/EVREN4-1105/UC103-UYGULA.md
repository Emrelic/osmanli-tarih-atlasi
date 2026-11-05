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

## EMRELİC kararları (gece-123)

- **Triyeste B → Yugoslavya:** **1954-10-05** (TEK ÖLÇÜ: Yugoslavya 1945'ten idare ediyordu → imza günü; Umag ve Koper ile aynı). 10-26 `ic_not`a yazılır.
- **Kosova gölge cumhuriyeti** (Draç emsali): ilan eden hükûmet ilan ettiği yeri fiilen yönetmiyordu, sahip değildir.
  - Gilan ve Mitroviça: `s: yugoslavya-federal` (FRY) → 1999-06-10 `unmik-kosova`. Gölge cumhuriyet `ic_not`a yazılır.
- **Brazzaville:** özerk künye LAB'da. Künye gelene kadar 1958-11-28 → 1960-08-15 boş bırakılmaz; `fransiz-ekvator-afrikasi` ya da `fransa` BEYANLI uzatılır (D1 kuralı).
- **Gudermes, Urus-Martan, Şali:** yerel gün bulunamazsa ABİ MERKEZ Grozni (2000-02-06, Rus kontrolü), BEYANLI. Gudermes'in 1999-11 teslimi kaynakla bulunursa o gün ve maddesi yazılır.
- **İngiliz Togoland → Gana** 1957-03-06: dayanak BM Genel Kurulu A/RES/1044(XI).
  - KASA okuması: UN Dag Hammarskjöld Kütüphanesi'nin GA 11. oturum karar dizini (research.un.org/en/docs/ga/quick/regular/11), ham metin: «A/RES/1044(XI) C.4 39 A/PV.619 13 Dec. 1956 64-0-9 A/3449 The future of Togoland under British administration».
  - Karar metninin kendisi okunamadı: docs.un.org yalnız görüntüleyici kabuğu döndürüyor, digitallibrary.un.org robots ile yasaklı.
  - Dizin kararın günü ile konusunu teyit ediyor, ama vesayetin Gold Coast bağımsızlığıyla sona ermesini (1957-03-06) tarihleyen cümle okunmadı → **ONERI** kalır, kaynak alanına karar künyesi yazılır. Metin TARAYICI listesinde.
- **San Salvador:** ÇELİŞKİ beyanlı, künye 1841.

## Açık kalemler

- Hepsi gece-123'te karara bağlandı (yukarıda).

## San Salvador (EMRELİC gece-118 kuralı)

- history.state.gov: «El Salvador declared itself an independent republic in 1839». Bu bir bağımsız cumhuriyet ilanıdır (yalnız yıl); federasyonun çözülüşü ayrı bir cümlede.
- → **ÇELİŞKİ.** `ic_not`: "1839 (state.gov) / 1841 (künye f 1841-01-01)"; künye 1841 kalır.

## TARAYICI

tribune.com.pk (403) · iranicaonline swat (404) · britannica (403) · un.org A/RES/1044(XI) (403) · history.state.gov Kongo (404) · Enugu kaynağı (404) · gov.za Anayasa 200/1993 yeniden okunmadı (bantustanlar bu yüzden ONERI-KARAR) · RFE/RL Aralık 1999.
