---
name: ceviri-yenile
description: Türkçe kronoloji / devlet adı / arayüz metni değişince (ya da bayat çeviri borcu görülünce) bütün aktif dillerdeki çevirileri yeniler: kuyruğu parçalar, parça başına Sonnet alt ajan çevirir, `uygula` ile işler, çeviri tavanını doğrular. Emre "çevirileri güncelle", "bayat çeviri" ya da /ceviri-yenile deyince, ya da yayın kapısı "çeviri tavanı aşıldı" deyince çalışır.
---

# Çeviri yenileme (Emre, 22 Kasım 2026)

**Kural:** çeviri kaydı Türkçe metnin FNV-1a özetini taşır. Türkçe değişince kayıt *bayat* olur, site o maddede
Türkçe gösterir ve yayın kapısı çeviri tavanını (`BEKLENEN` 0) aşar. Yani **Türkçe metni değiştiren her iş,
aynı inişte 22 dilin çevirisini de yenilemek zorundadır** — tavan açılmaz.

## Ne zaman
- Bir kronoloji maddesinin `b:`/`d:` metni, devlet `ad:`ı ya da arayüzde görünen bir metin değişti.
- `py arac/ceviri.py denetim` ✗ "tavan AŞILDI" ya da bayat/eksik > 0.

## Adımlar (çeviri makinesi: LAB; yazma makineleri de kendi değişiklikleri için koşabilir)
1. Dal: `origin/main`den tazele; değişiklik hangi dalda ise çeviri AYNI dalın üstüne commit edilir.
2. Ölç: `py arac/ceviri.py denetim` (tür/dil bazında eksik·bayat). Çıkış kodunu oku, cümleyi değil.
3. Böl: `py arac/ceviri_yenile.py hazirla --parca 120` → `<klasör>/<dil>_<tür>_NN.json` + `MANIFEST.json`.
   Parça sayısı = yaklaşık madde/120 × aktif dil sayısı. 22 dil × 80 madde ≈ 22 parça.
4. Çevir: **parça başına bir Sonnet alt ajan** (Opus değil; token ekonomisi). Aynı mesajda birden çok ajan
   paralel başlatılabilir (en çok ~6; makine yüküne bak). Ajan talimatı: `denetim/CEVIRI-1103/CEVIRMEN.md`
   (biçim, akademik ad ölçüsü, dil başına ölçüler) + şu satır: *"Girdi: <klasör>\<parça>.json; çıktıyı
   Write ile <klasör>\<parça>.cevap.json olarak yaz; geçerli JSON, her id için bir kayıt; kaynakta olmayan
   id ekleme."* Ajanlar yalnız o klasöre yazar; veri dosyalarına dokunmaz.
5. İşle: `py arac/ceviri_yenile.py topla --klasor <klasör>` (her parça için `ceviri.py uygula`, sonunda `denetim`).
   Çıkış 0 olmalı. Eksik/atlanan parça varsa o parçayı yeniden çevirt.
6. Commit: yalnız `data/ceviri_<dil>_<tür>*.js` + `data/ceviri_dizin.js` — **adıyla** ekle (`git add -- ...`).
7. Doğrula: `py arac/ceviri.py denetim` → "tavan aşılmadı · açık borç 0".
8. Bildir: dal adını KASA'ya (`SendMessage` → "KASA 21 KASIM"; adres canlı oturumun adıdır, ölü "KASA" değil).

## Tuzaklar (vaka)
- **`py arac/ceviri.py yaz` KOŞTURMA** — 181 dosyanın satır sonunu yeniden yazar. `uygula` zaten kendi dosyasını yazar.
- **Aktif olmayan dile `uygula` yapma** (ör. `ko`): yeni dil dosyası açar, dil "aktif" olur, 1861+2315+5196 eksik
  görünür ve tavan aşılır. Aktif diller: `py arac/ceviri.py durum`un yazdığı diller.
- Yeni dil eklemek ayrı karardır (Emre sırası: ko vi BCS uz ro bg(yapıldı) sq hu hy ka).
- Çeviri sırasında Türkçe metnin kendisinde hata görürsen çeviriyi yapma-düzelt: önce Türkçeyi düzelt, sonra yenile
  (hata `denetim/CEVIRI-KAYNAK-METIN-HATALARI-1118.md`ye de yazılır; bozuk metin dedektörü: `py arac/metin_bozuk.py`).
- Ajan çıktısında `#` yer tutucusu sayısı/sırası değişmemeli; çıktı boş id içermemeli (`uygula` atlar ve sayar).
