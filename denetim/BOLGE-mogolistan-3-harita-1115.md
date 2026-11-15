# BOLGE-mogolistan — Adım 3: harita uyumu (15 Kasım 2026)

Ölçüm yöntemi: yerleşim `s:` pencereleri ile kronoloji maddeleri node ile karşılaştırıldı. Resmî `py arac/denetle.py` KOŞULMADI (bölge verisine sonuç değiştiren yazma yok; yalnız 6 `odak_yer` yeniden adlandırıldı; Değişmez 8 ana worktree'de ölçülemiyor). `py arac/odak_olc.py`: ÇÖZÜLMEYEN ODAK ATFI **0** (koşu çıktısı; değişiklikten önce/sonra aynı).

## 1) Kronolojide madde var, haritada karşılığı yok / yanlış yerde
- **Dolon Nor 1691-05-30 (Halha'nın Qing'e katılışı):** yerleşim `s:` sınırı var (Urga 1691-05-30 kuzey-yuan → qing, Karakurum kd:1691), künye t=1691-05-30, ama atlasın hiçbir kronolojisinde 1691 Halha maddesi YOK. Değişmez 2 için ±30 gün madde gerekir (Urga/Kerulen/Öndörhaan/… yerleşimlerinin 1691 kırılması). Madde adayı: "Dolon Nor toplantısı, Halha Qing'e bağlandı" (kaynak okunmadı → yazılmadı, kuyruk).
- **Zuunmod 1696, Galdan'ın Halha işgali 1688, Cungar–Qing savaşları (Jao Modo 1696, Tsevang Rabtan 1720'ler)** — maddesi yok; Cungar künyesi dört maddeyle özetleniyor.
- **Qing–Halha ilişkisi 1635-1691** (Ejei 1635 → Halha bağımsız) haritada tersine görünüyor, aşağıda.

## 2) Harita kırılması var, kronoloji/kaynak çelişiyor
| Yerleşim | `s:` pencere | Çelişki |
|---|---|---|
| **Karakurum** | kuzey-yuan 1368-09-14 → 1635-01-01, **qing 1635-01-01 → 1911-12-29** | Aynı yerleşimin `kd:` penceresi `1368-09-14 → 1691-05-30 k:1 m:Karakurum`, künye kuzey-yuan t=1691-05-30, Urga (Halha merkezi) ve Kerulen/Öndörhaan/Bulgan kuzey-yuan'ı 1691'e dek tutuyor. Karakurum Halha toprağındaydı (Erdene Zuu 1586, Halha'nın Tüşetü/Casaktu ülkesi); 1635'te Qing'e geçmesi atlasın kendi künyesiyle (Dolon Nor 1691) çelişir. **Atlas içi iç çelişki, yerleşimler dosyasında düzeltilmeli** → `YERLESIMLER-JS-KUYRUK-1115-mogolistan.md` |
| Ejin (Hara-Hoto) | kuzey-yuan → 1636-05-15 qing | Alaşa/Ejin bölgesi Hoşut/Torgut idaresi; Qing'e geçiş tarihi 1636 olabilir mi? kaynak OKUNMADI, şüphe |
| Kobdo (Hovd) | kuzey-yuan → 1635-01-01 cungar | Cungar künyesi 1634-01-01'den; 1634-01-02 Hara Hula maddesi var (Cungarya odaklı) ama 1635-01-01 kırılması için ±30 gün madde Kobdo'ya bağlı değil (denetle bakar) |
| Karakurum 1921-07-11 / Urga 1921-07-11 | cin-cumhuriyeti → mogolistan | 1921-02-04 Ungern'in Urga'yı alması ve 22 Şubat 1921 özerklik ilanı; atlas 1921-07-11 diyor (Adım 2) |

## 3) Yer çözümü (`odak_yer`)
- Moğolistan Halk Cumhuriyeti künyesindeki 6 madde (1924-11-26, 1945-10-20, 1946-01-05, 1961-10-27, 1990-03-09, 1992-02-12) `odak_yer:["Karakurum"]` idi: kamera Karakurum harabesine (47.198N 102.833E, 1235 Ögedey şehri) gidiyordu, olaylar Urga/Ulan Batur'da. **Düzeltildi** (`data/devletler.js`): `odak_yer:["Urga (Ulan Batur)"]` — 6 kayıt, dönem/tarih/metin değişmedi. İhlal etkisi: tarih değişmediğinden çeviri anahtarı/olay_taraf anahtarı etkilenmez; `odak_olc` 0 çözülmeyen.
- `mogol-imparatorlugu` 1206 kuruluş maddesi `odak_yer:["Karakurum"]`: Karakurum 1206'da yoktur (Ögedey 1235'te kurdu; kuruluş Onon kıyısı kurultayı). Kaynakta "Onon" yerleşimi adlandırılmadığı için YAZILMADI; `Burkhan Khaldun (Hentey, vekil)` vekil noktası mevcuttur → öneri (kuyruk).

## 4) Fazla / eksik kırılma sayımı
Fazla: Karakurum 1635 (1 kırılma, kaynaksız). Eksik madde: 1691 Dolon Nor (~13 yerleşim kırılması), 1755-1758 Qing–Cungar (Kobdo 1755 `qing` var, "1755-01-01 Qianlong seferleri" maddesi Gulca/Ürümçi odaklı, Kobdo'ya bağlı değil), 1912-08-20 Kobdo'nun Moğollarca alınışı (yerleşim penceresi var; madde Kobdo'ya bağlı bulunamadı).
