# DOĞU BORÇ 1 — F2 tarihçe raporu (UMIT, 17 Kasım 2026)

Dosya: `data/sehir_tarihce_dogu_borc_1.js` (`window.SEHIR_TARIHCE_DOGU_BORC_1`, `arac/sehir_tarihce.py yaz`).
Ölçüm: worktree `sehir-afrika-1116`, `py -I -X utf8 arac/sehir_tarihce.py denetle` → **14 şehir · 21 sahiplik dönemi ·
158 olay · ihlal 0 · uyarı 13 · çıkış 0**. Commit/push yapılmadı.

## ① Ne ölçtüm

**İki yönlü `tarihce_var` kontrolü:** 35 yerel + 50 origin/main `sehir_tarihce_*` dosyası (git show); aday adı,
atlas adı, `adlar[]` ve ≤3 km (ikinci turda ≤10 km + 1900 adları). Sonuç: yazılan 14 adayın hiçbiri başka dosyada yok.
**Yanlış negatif 1:** Tbilisi → `sehir_tarihce_k12.js` "Tiflis" (≈5 km, ad farkı) — yazılmadı.

**Yazılan 14 kayıt** (olay sayısı):
Bakü 15 · Gence 14 · Kâşân 7 · Kirmanşah 11 · Kum 8 · Ahvaz 10 · Hoy 15 · Nahçıvan 16 · Batum 17 ·
Dongola (yeni, el-Urdî) 6 · Eski Dongola (Makurya başşehri, ayrı kayıt, ≈90 km) 11 · Berberâ 15 · Addis Ababa 5 · Cibuti 8.

- Kaynak: 13 kayıt TDV İslâm Ansiklopedisi tam gövde (tarayıcı, navigate + sayfa metni); Addis Ababa Britannica
  (TDV'de madde yok). **Tek kaynak: 14/14; çift teyit: 0.**
- Hicrî yıllar: tablo takvimi (1582 öncesi Jülyen, sonrası Gregoryen) ile hicrî aralık ∩ kaynağın mîlâdî yılı →
  kesişimin ilk günü; her biri `ic_not`ta beyanlı (≈35 tarih). TDV'nin verdiği gün 13 Şevval 674 = 31 Mart 1276 hesapla tuttu.
- **Zayıf tanık: 9.** 6'sı özne zamir/madde konusu ya da yıl bitişik cümlede (Kâşân, Ahvaz, Hoy, Nahçıvan, Batum, Gence),
  ortak kurala göre kabul. 3'ü tarihin kendisi dolaylı olduğu için `kesinlik: belirsiz`: Kum (I. Kubâd saltanat aralığı
  488-531), Eski Dongola (651 = Mısır'ın fethi, sefer "takip eden yıllarda"), Berberâ (1229 = Yâkūt'un ölüm yılı).
- Zincirler: sahiplik dönemlerinin 11'i `__BOSLUK__` ve hepsi beyanlı. TDV hanedan sırasını verip devir yılı vermeyince
  (Emevî/Abbâsî/Büveyhî…) beyansız yaklaşıklık yazmadım. 4 dikiş `dikis_beyan` ile kapatıldı (Bakü 1160 şirvanşah;
  Kum, Ahvaz, Hoy 1281 ilhanli): atlasın başlangıç iddiası kaynaksız. Yer tutucu olay yazılmadı.
- Uyarılar (13): 4 dikiş borcu · 4 "atlas başlangıcı düzeltilmeli" · 5 künye aşımı (Batum roma-imp ×2 ve gurcistan,
  Eski Dongola turk-misir-sudani ×2), hepsi `ic_not`ta beyanlı.

**Açılan siteler:** islamansiklopedisi.org.tr — BAKÜ, TİFLİS, GENCE, RE'Y (yanlış madde, kullanılmadı), REY (`rey--iran`),
KÂŞÂN, KİRMANŞAH, KUM, AHVAZ, NAHCIVAN, BATUM, DONGOLA, BERBERÂ, CİBUTİ, HOY ve 6 arama sayfası. HOY'da 2 kez 429
geldi, beklendi. britannica.com/place/Addis-Ababa. İndirme yapılmadı.

## ② Ne bulamadım

Ayrıntısı `YAZILAMADI-DOGU-BORC-1.md`'de:
- Rey: atlas `s:` boş olduğu için zincir 1900'e kadar uzamalı, oysa TDV 1447-1900 arasını kapsamıyor.
- Bamiyan, Buşehr, Kısmâyû: TDV'de madde yok.
- Eski Gence ayrı kayıt olmalı ama koordinatı okunmadı.
- Addis Ababa'nın kuruluş yılı tek kaynaklı (1887; 1886 rivayeti doğrulanmadı).

## ③ Ne istiyorum — atlas düzeltme önerileri

1. **Dongola:** atlas noktası yeni Dongola'da (el-Urdî, 1820) ama 652'de `nube` ile başlıyor. 652-1820 dönemleri
   ≈90 km güneydeki Eski Dongola'ya ait. Nokta 1820'den başlatılmalı, eski Dongola için ayrı nokta açılmalı (TDV DONGOLA).
2. **Gence:** atlas 1231'de başlıyor; bugünkü Gence 1606 sonrası kuruldu, eski şehir ~6 km uzakta (TDV GENCE).
   1606 öncesi için eski Gence noktası açılmalı.
3. **Addis:** atlas 1281'de `habesistan` ile başlıyor; şehir 1887'de kuruldu (Britannica). Öncülü Entoto ayrı yer.
4. **Cibûtî:** atlas başlangıcı 1888-01-01 TDV'nin ilk anılışıyla aynı gün. Tutarlı, ama kuruluş yılı kaynaklı değil.
5. **Rey:** atlas kaydı `s:` dönemsiz. Tarihçe yazılabilmesi için atlasta dönem açılması ya da Iranica ile 1900'e kadar
   zincir kurulması gerekiyor.
6. **BORC eşleştirmesi:** 5 km'ye yakın ve ad farklı kayıtları (Tbilisi/Tiflis) kaçırıyor. Eşleştiriciye LISTE'nin
   `tarihce_var` sütununu da okutmayı öneririm.
