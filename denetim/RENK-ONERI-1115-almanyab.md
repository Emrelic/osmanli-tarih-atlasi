# RENK-ONERI-1115-almanyab — Almanya ikinci dalga (UMIT, 15 Kasım 2026)

`arac/renkler.py` dokunulmadı. Aşağıdaki anahtarlar BOYALAR'a eklenirse `denetim/YERLESIMLER-JS-KUYRUK-1115b-almanya.md` II. bölümündeki pencereler uygulanabilir.
Yeni 4 künye (bu dalda `data/devletler.js`e yazıldı) şu an `harita:"almanya"` taşıyor (mevcut boya anahtarı; Timor-Leste/untaet emsali).

| Künye | Önerilen BOYALAR anahtarı = künye id | Önerilen renk | Gerekçe |
|---|---|---|---|
| `nurnberg-imparatorluk-sehri` | aynı | `#8fcf5a` | `almanya` (#78d028) ile aynı yeşil ailesi, daha açık: Nürnberg çevresinde `bavyera` (#fc1200 kırmızı) ve `almanya` komşusu var; özgür şehir ailesi (Lübeck #f5d149, Hamburg #189046, Bremen #1eccde) farklı tonlardadır, çakışmasın diye açık yeşil |
| `augsburg-imparatorluk-sehri` | aynı | `#5fb04a` | `almanya` yeşilinin koyu varyantı; Nürnberg'den (~120 km) ayrışır |
| `mainz-elektorlugu` | aynı | `#b3d44a` | Ren boyu; `fransa-cumhuriyet` ve `prusya` (#2478d2) komşuluğunda sarı-yeşil |
| `koeln-elektorlugu` | aynı | `#3fa075` | Köln/Bonn; `fransa-cumhuriyet` ve `prusya`dan ayrışan teal-yeşil |

Çakışma/komşuluk ölçümü YAPILMADI (renk_olc koşturulmadı): önerilen hex'ler BOYALAR'da yok (grep, 4 hex için 0 sonuç) ama Voronoi komşuları ölçülmedi. KASA kendi ölçümüyle seçer.

**Yerleşimli künyelerin eklenmesi sonrası renk:** Bu dalda data/'ya yazılan künyeler (`lubeck-sehri`, `bremen-sehri`, `hessen-landgrafligi`, `mecklenburg-dukaligi`, `pomeranya-dukaligi`, `karintiya-dukaligi`, `bern-cumhuriyeti`) BOYALAR'da zaten tanımlıdır; yeni anahtar gerekmez. Renkleri: Lübeck #f5d149 (sarı) Bremen #1eccde (turkuaz) Hessen #609690 Mecklenburg #a3dc57 Pomeranya #fe978f Karintiya #3e8b32 Bern #96bf3f — **Bern #96bf3f ile `frankfurt-serbest-sehri` #96bf3f AYNI** (yalnız iki künye; coğrafî komşu değil, ama aynı atlas ekranında karışabilir): ayrıştırma önerisi `bern-cumhuriyeti` → `#7fae2e`.
