# RAPOR — KASA 21 KASIM · 24 Kasım 2026

Ölçüm yeri: KASA (bu makine), push kapısı worktree'si `kasa19-kapi`. Ölçülen ile ölçülemeyen ayrı yazıldı.

## 1. Gece ve gündüz inişleri (main'e, kapıdan geçerek)

| Tur | Dal | main |
|---|---|---|
| 1 | emrelic-23-roma-serit + kaynaklar | e8b854e9 |
| 2 | emrelic-23-tur | 6c43c255 |
| 3 | emrelic-23-borc + lab-dizin-denetim + lab-kasa-denetim | 46b00646 |
| 4 | emrelic-23-lab-duzelt | 2d43fffc |
| 5 | bosluk-dogrulama-1123 | bd04cb7d |
| 6 | KASA borç satırı (C-KASA-1123) | b53dd73f |
| 7 | emrelic-23-borc2 | a5aaaee3 |
| 8 | emrelic-24-bayat-esik (4.0→10.0) + havva-borc-kosu40-1123 | 25c14338 |
| 9 | emrelic-24-ucus-ayar | 90f4fc8d |
| 10 | UMIT zinciri (dasya1) + havva b7y/b7z/b8 + rus + lab-2 | c56fd2ff |
| 11 | lab-bosluk-duzeltme-2 yeni uç (9ac0c007a) | c53d1487 |
| 12 | dört rapor dalı + bu rapor | (bu tur) |

## 2. Kapıda düşen denemeler ve kök neden (ölçüldü)

- **YAYIN BAYAT 5,84 > 4 gün** (11:45): `data/yerlesimler.js`'e dokunan her dal bu eşikte reddediliyordu. Çözüm: EMRELİC'in `emrelic-24-bayat-esik` dalıyla `BAYAT_TAZE_GUN` 4.0→10.0 (Emre'nin 24 Kasım kararı). Koşu 40 inince 2.0'a geri alınacak — **BORÇ: geri alma yapılmadı.**
- **Çeviri tavanı** (telefon-tek-kutu, halka-düzelt ilk uç): yeni arayüz metinleri 21 dilde çevrilmemişti; sahibi çevirileri ekledi.
- **Değişmez 5** (HAVVA b6/b7y: `kur:` ilk dönemden sonra): sahibi `f=kur` yaptı.
- **Kaynaksız `s:` kaydı gerilemesi** (11. tur ilk deneme): UMIT'in yeni noktası Sehvan'ın dönemlerinde kaynak vardı, kaydında yoktu (kayıt-kaynaksız 2211 > tavan 2210). **Tavan açılmadı**; kayda kaynak yazıldı (4da9ca801).
- **PAKET BAYAT** (11. tur ikinci deneme): Sehvan kaydı değişince `paketle yenile` unutulmuştu; yenilenip `paket_kunye.json` commit'lendi.
- **index.html damga çatışması** (5 kez): yalnız sürüm damgası; HEAD tarafı alınıp `surum_damgala` yeniden üretti.

## 3. Bekleyenler (kapıya ALINMADI — gerekçe ölçüldü)

- `lab-bosluk-duzeltme-1122` (06ea91584): UMIT zinciriyle `data/yerlesimler.js`'te **gerçek veri çatışması** (Travnik, İzvornik, Foça, Srebrenik… UMIT `kur:` yazıp `s:` kaldırmış, LAB aynı kayıtların `s:` dönemlerini düzeltmiş). İki sahibin kararı ters; KASA çözmedi. Sahibi: LAB.
- `kronoloji-secim-ui` (25cb299, 19 Kasım tabanlı): `data/ceviri_dizin.js` (üretilmiş) + `index.html` çatışıyor, `js/app.js` sessiz otomatik birleşiyor. Kör birleşme indirilmedi. Sahibi: EMRELİC (rebase + kendi sınaması + `denetle_yayin` 0).
- `emrelic-bosluk-bizans-1122`: `data/yerlesimler.js` çatışması; sahibinin rebase'i bekleniyor.
- `giris-altyapi-1124` (95432894d, site üyelik altyapısı): **gerçek ortamda (Supabase/OAuth) sınanmadı**; kapı yalnız mevcut denetimleri ölçer. Emre'nin sınama kararı bekleniyor, kapıya alınmadı.
- Boya paketi (renkler.py/BOYALAR): motor dondurması; Koşu 40 inişinden sonra, Koşu 41 öncesi (UMIT: vaghela, kolattiri, neopatra-tesalya, bearn-vikontlugu, artois-kontlugu — karar EMRELİC, onaylandı).
- `emrelic-24-onceki-sonraki-kaldir`: Emre kararı yok, dokunulmadı.

## 4. Ölçülemeyenler / okunmayanlar

- Koşu 40 durumu: KASA ölçmedi (HAVVA'nın işi).
- `giris-altyapi-1124` canlı davranışı: ölçülmedi.
- `kronoloji-secim-ui` arayüz davranışı: ölçülmedi (görsel test yok).
- Bekleyen veri dallarında Değişmez 1/2/3: yalnız birleşen 11. turda ölçüldü (temiz); `lab-bosluk-duzeltme-1122` ve Bizans için ölçülmedi.

## 5. Oturum ölçümü (son 10 gün, 14–24 Kasım) — KASA'dan görünen liste

Ölçülen: `list_sessions` 60 satır döndürdü; 14 Kasım sonrası **atlas** oturumu 7, hepsi `isRunning:false`:
KASA 19 Kasım (21.11), KASA 17 Kasım (18.11), KASA 13 Kasım (18.11), KASA 16 Kasım (18.11), «Forum yazılımı ve site geliştirmesi» (18.11), «B tipi harita dolguları durumu» (15.11), «Bilgisayarlar arası işleri toplama ve push» (15.11).
Bunlardan işi bitmiş sayılabilecek aday: KASA 13/16/17 (18.11'den beri boşta, 19 Kasım oturumu devraldı), «Bilgisayarlar arası işleri toplama ve push» (15.11), «B tipi harita dolguları durumu» (15.11). **Hiçbirini arşivlemedim:** işi bittiğini içeriğini okuyarak doğrulamadım ve arşivleme sahibi Emre'nin kararı. Ayrıca listede atlas olmayan (EczAsist, Botanik, ilactarif) oturumlar var; KASA'nın alanı değil, dokunulmadı.
Ölçülemedi: HAVVA/UMIT/LAB/EMRELİC makinelerinin oturumları bu makinenin listesinde yok.
