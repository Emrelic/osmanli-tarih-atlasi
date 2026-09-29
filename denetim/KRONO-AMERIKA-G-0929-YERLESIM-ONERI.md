# KRONO-AMERIKA-G-0929 — YERLEŞİM nokta ÖNERİLERİ (ORTAK §1 (b)) — **ölçülemedi damgalı**

🔴 **Dürüst sınır:** petek koşusu görmedim, dolayısıyla aşağıdaki noktaların yokluğunun HARİTADA yanlış boya üretip üretmediğini
**ölçemedim**. Öneriler kronoloji ↔ harita odağı içindir: bu şehirler haritada nokta değil, maddelerimin `yer_id` odağı
ya çözülemiyor (yerleşim yok) ya yakın başka şehre kayıyor. `data/yerlesimler*.js`e dokunmadım (Oturum 0'ın dosyası).

Aşağıdaki koordinatlar yaklaşık (±0.02°); koşu öncesi `konum_kesinlik` ve kara maskesi denetimi ŞART (CLAUDE.md §1.5).

| Ad | Yaklaşık lat, lon | Neden gerekli | Bağlı maddem | `s:` önerisi (kaynak gerekir) |
|---|---|---|---|---|
| Antofagasta | -23.65, -70.40 | Pasifik Savaşı'nın ilk işgali; Bolivya→Şili | (künyede) 1879-02-14 | `bolivya-cumhuriyeti` → 1879-02-14 `sili-cumhuriyeti` |
| Iquique | -20.21, -70.15 | Tarapacá'nın merkezi; Ancón 1883 | (künyede) 1883-10-20 | `peru-cumhuriyeti` → 1879-11 (işgal) → Şili; ölçülemedi |
| Tacna | -18.01, -70.25 | Tacna–Arica 1880-1929 Şili idaresi; 1880-05-26 Alto de la Alianza | (yok) | `peru-cumhuriyeti` (Şili işgali; hukuken Peru) |
| Arica | -18.48, -70.31 | aynı | (yok) | aynı |
| Valparaíso | -33.05, -71.61 | Şili'nin ana limanı; 1884-04-04 Mütareke yeri | (künyede) | `sili-cumhuriyeti` |
| Callao | -12.06, -77.12 | 1826-01-23 İspanyolların son kalesi | ledger dışı | `peru-cumhuriyeti`/`ispanyol-peru` 1826-01-23'e kadar |
| Ancud (Chiloé) | -41.87, -73.83 | 1826-01-15 Chiloé teslimi; `Castro (Chiloé)` zaten var | 1826-01-15 (Castro odaklı) | mevcut nokta yeterli olabilir |
| Recife | -8.05, -34.88 | Hollanda Brezilyası merkezi (`Olinda` bağlıdır) | 1654-01-26 (Olinda odaklı) | `portekiz-brezilyasi`/`hollanda-brezilyasi` 1630-1654 |
| Villarrica (Şili) | -39.29, -72.23 | 1883-01-01 Araukanya işgalinin son merkezi | 1883-01-01 (odaksız) | `mapuche-araukanya` → `sili-cumhuriyeti` 1883 |
| San Miguel de Tucumán | -26.81, -65.22 | 1816-07-09 Bağımsızlık Kongresi | 1816-07-09 (odaksız) | `arjantin-cumhuriyeti` (1816'da bağımsız) |
| Pisco | -13.71, -76.20 | 1820-09-08 San Martín çıkarması | 1820-09-08 (odaksız) | `ispanyol-peru` → `peru-cumhuriyeti` 1821-07-28 |

📌 **Gerçek noktasızlık artefaktı iddiası YOK** — bu tabloyu "koşu için gerekli" diye değil, "odak ve kronoloji-harita eşleşmesi için
aday" diye okuyun. Motorun bu noktaları eklemeden nasıl boyadığını ölçmek koordinatörün koşusuna bağlı.
