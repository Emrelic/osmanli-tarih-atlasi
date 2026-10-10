# KAYNAKSIZ-ORNEKLEM-1281-1010 — ÖNGÖRÜ (örneklem ÇEKİLMEDEN ve kaynak okunmadan ÖNCE)

Zemin `origin/main` = `9ffa82f6` (data/ · girdi.py · denetle.py `ed1c200e`den beri DEĞİŞMEDİ, ölçüldü).
Birinci tur: dal `kaynaksiz-orneklem-1010` @ `7a562f12` (1281-başlangıçlı 7/10 YANLIŞ).

## Evren
`kaynaksizlik_olc` `hicbiri` (VERI_UFKU, 1841) ∩ en az bir pencere-içi `s:` dönemi `f ≤ 1281-01-01`
⇒ **1419** (yeniden ölçüldü, bu commit'ten önce) − birinci turda seçilen kayıtlar (aynı kaydı iki kez
ölçmemek için; beyan). İddia: kaydın 1281-başlangıçlı dönemi (birden çoksa `rng.choice`).

## Yöntem — koordinatörün iki şartı
- ⓐ **YENİ TOHUM: 20261011** (birinci tur 20261010). N = **40**.
- ⓑ **Bölge kutuları DONUK:** `bolge()` birinci turun betiğinden METİN olarak okunup çalıştırılır,
  sha256'sı basılır. Ölçüm başladıktan sonra tabaka tanımına dokunulursa yeni tohumla baştan.
- Hüküm kuralı ve güç etiketleri birinci turla AYNI (`KAYNAKSIZ-ORNEKLEM-1010-ONGORU.md`).

## ÖNGÖRÜ (sayıyla)
- ÖLÇÜLEMEDİ: **7 / 40** (erken ve taşra iddiaları — birinci turdan yüksek).
- Ölçülen ~33'te YANLIŞ: **18 ≈ %55** (beklenen aralık %40–70). Birinci turun %70'i n=10 idi;
  ortalamaya dönüş bekliyorum ⇒ %70'in ALTINDA ama %8'in çok üstünde.
- 1419'a genelleme: ≈ **780** kayıt (1281 halkası yanlış).
- 🔴 Alt hipotez (koordinatörün sebep cümlesinin sınavı — "1281 = atlasın sınır işareti, kaynak
  sanılmış"): ham `f` **tam 1281-01-01** olan iddialarda YANLIŞ ≈ **%60**; ham `f` **1281'den
  önce** (gerçek bir önceki tarih yazılmış, pencere kırpmış) olanlarda ≈ **%35**. Fark çıkmazsa
  sebep cümlesi bu veriyle DESTEKLENMEZ.
