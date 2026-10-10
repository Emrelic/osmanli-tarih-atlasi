# KASA-KESINLIK-1502-1010 — `1502-03-01` gününün kesinliği (ZAYIF42 hükmü ③ → genişledi)

Görev: YILDIRIM BAYEZIT (ZAYIF42 hükmü ②: "Kuban/Stavropol `kesinlik:"yil"` — ONAYLI, 3+3 = 6 kayıt, mekanik") ·
Yazan: KASA · `data/` DONUK ⇒ diff.

## 1. Sayım düzeltmesi: 6 değil 3 kayıt, ama sorun 21 kayıtta
- Onaydaki "3+3 = 6" ZAYIF42'nin **kalem** sayısıydı (Z5/27/29 · Z6/28/30). **Kayıt** sayısı **3**: Kuban (Yekaterinodar) ·
  Kuban Nogay bozkırı · Stavropol–Kuma bozkırı. Her kayıtta iki uç şişkin: `s[0] altinorda t:1502-03-01` ve
  `v[0] kirim f:1502-03-01` ⇒ **6 uç**. (Sayı yine 6, liste farklı: kalem değil uç.)
- **Ölçüm (`girdi.GIRDI_DOSYALARI` tamamı):** `1502-03-01`i dilim ucu olarak taşıyan **21 kayıt, 42 uç**:
  `s.t` 21 · `v.f` 12 · `s.f` 9. Sahipler: altinorda 21 · kirim 12 · nogay 7 · astarhan 2. Dosyalar: yerlesimler.js 6 ·
  ek22 4 · ek_bozkir 4 · ek6 3 · ek3 2 · seyrek 1 · ek4 1. **42 ucun hiçbirinde `kesinlik` YOK.**
- 42 ucun hiçbirinin `kaynak:`ı gün vermiyor. Yalnız Kuban ×3 ve Kuban deltası, kaynakta yalnız yıl olduğunu söylüyor
  ("TDV kirim (1502 Mengli Giray son darbe)" · "yıl 1502, gün çekirdek madde olaylar_ek5.js"). Kalan 17 kaydın
  `kaynak:`ında 1502 hiç geçmiyor. Hepsi günü aynı yerden alıyor: `olaylar_ek5.js:145`
  `{ t:"1502-03-01", … gun:"1502" }`. Çekirdek maddenin kendisi gününün yıl olduğunu söylüyor.
- ⇒ Öz-ilan yalnız 3 kayıtta konuştu, kusur 21 kayıtta. ZAYIF42 §1.2'nin (Mljet) dersi bir kez daha: not, yazarın
  BİLDİĞİ yerdedir.

## 2. Diff'ler — İKİ seçenek (birbirini DIŞLAR; hüküm senin)
| dosya | kapsam | ne |
|---|---|---|
| `KASA-KUBAN-KESINLIK-1010.diff` | 3 kayıt · 6 uç · 2 dosya | onaylanan kapsam |
| `KASA-KESINLIK-1502-GENIS-1010.diff` | **21 kayıt · 42 uç** · 7 dosya | **önerim**: aynı kural, aynı dayanak (çekirdek madde `gun:"1502"`) |
Biçim (VERI-YAPISI §kesinlik İKİ BİÇİM, kural ②: uçlar ayrıştığında NESNE):
`{f:"1281-01-01",t:"1502-03-01",…,kesinlik:{t:"yil"}` · `{f:"1502-03-01",t:"1774-07-21",…,kesinlik:{f:"yil"}`.
Diğer uç pencere kapısı ya da kaynaklı gün olduğu için skaler YAZILMADI.
Geniş diff dar diff'i kapsar ⇒ ikisi birlikte UYGULANMAZ (aynı satırlar).

## 3. Sınav
- **Dar:** temiz worktree'de (`HEAD` 0be9a481) `git apply` ✓; `girdi.oku_dosya` üç kayıtta `s0 {'t':'yil'}` ·
  `v0 {'f':'yil'}` okuyor.
- **Geniş:** `git apply` ✓ (7 dosya, 30+/30−). İki ağaç AYRI süreçte yüklenip karşılaştırıldı: değişen uç **42**,
  kayıt **21**; her biri `1502-03-01` ucunda ve `"yil"` değerinde; başka HİÇBİR alan değişmedi (4300 = 4300 kayıt).
  (İlk karşılaştırma betiğim iki ağacı aynı süreçte yükledi; `girdi` yolu kendi dosyasından çözdüğü için ikisi de aynı
  ağacı okudu ⇒ "0 fark" sahte temizdi. Ayrı süreçle yeniden ölçüldü.)
- Tam `denetle.py`, dar diff ile ve tabanla (aynı temiz worktree): iki çıktı **satır satır AYNI** (349 satır, `diff`
  boş). İkisi de çıkış 2: Değişmez 8 ÖLÇÜLEMEDİ (`devletler_harita.js` üretilmiş + gitignore'lu, taze ağaçta yok). Bu
  diff'ten bağımsız, iki koşuda da aynı. ⇒ Dar diff hiçbir kapı sayısını değiştirmiyor; Değişmez 8 iki tarafta da
  ölçülmedi. **Geniş diff için tam koşu YAPILMADI** (beyan; yalnız yükleme + alan karşılaştırması).

## 4. Yan bulgular (hüküm değil)
- **Künye ↔ dilim:** `devletler.js` `altinorda` `t:"1502-01-01"`; 21 dilim `1502-03-01`de bitiyor ⇒ dilimler künyeyi
  **2 ay aşıyor**. Kesinlik "yıl" olunca bu aşım YIL içinde kalır; Değişmez 4'ün aşan kovası bunu yıl hassasiyetinde
  sayıyor mu, ÖLÇMEDİM.
- **Ay da yanlış olabilir (ölçülmedi, ipucu):** Mengli Giray'ın Şeyh Ahmed'i yenişi genel literatürde **1502 yazı**
  (Haziran) olarak geçer. `03-01` muhtemelen yer tutucu. Gün/ay aramak çekirdek maddenin işi (`olaylar_ek5`). Bu turda
  aranmadı ⇒ `kesinlik:"yil"` doğru, gün/ay iddiası yok.
