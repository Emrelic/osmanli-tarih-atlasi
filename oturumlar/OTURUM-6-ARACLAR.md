# Oturum 6 — Denetim araçları

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-6-ARACLAR.md dosyasını oku ve içindeki görevi yap

Model: **Sonnet**. Mekanik, iyi tanımlanmış iş; tarihî muhakeme gerektirmiyor.

---

## Önce oku
`CLAUDE.md` (üç değişmez ve komutları) · `MIMARI.md` §5 (yoğunluk ölçütü) ve §4
(dört boyut) · `VERI-YAPISI.md` (alan sözlüğü).

## Yazabileceğin dosyalar
- `arac/denetle_kapsama.py` — **yeni**
- `arac/denetle.py` — **yeni**
- `denetim/` altına örnek çıktıların

**Başka hiçbir dosyaya dokunma.** Özellikle: `arac/uret_petek.py`, `data/` altındaki
her şey, `index.html`, `js/app.js`, kök dizindeki `*.md`. **Commit atma.**
**`arac/uret_petek.py`'yi ÇALIŞTIRMA** — 15 dakika sürer ve entegrasyon oturumu
koşturuyor olabilir; aynı anda iki üretim çıktıyı bozar.

---

## Görev 1 — `arac/denetle.py`

Üç değişmezi tek komutta koşturan toplu denetim. Bugün bu denetimler `CLAUDE.md`
§3'te tek satırlık node ifadeleri olarak duruyor ve her oturum kopyalayıp
yapıştırıyor.

```bash
py arac/denetle.py            # üçünü de koştur, özet bas
py arac/denetle.py --ayrinti  # her ihlali tek tek listele
```

**Değişmez 1 — sahipsizlik yok.** `data/yerlesimler.js`'i oku; 1300'den 1920'ye
20 yıllık kesitlerde her yerleşimin `d`/`s`/`v` alanlarından birine sahip
olduğunu doğrula. `kur:` alanı olan yerleşim, kuruluşundan önceki kesitlerde
sayılmaz. **Beklenen: 567 yerleşim, 29 sahipsiz** (hepsi kasten — çöller,
1744 öncesi Necid, körfez şeyhlikleri).

**Değişmez 2 — sessiz toprak değişimi yok.** Her `d`/`v` döneminin başı ve sonu
bir "kırılma"dır. `data/olaylar*.js`'teki maddeleri topla; her kırılmanın **±30
gün** içinde bir maddesi olmalı. **Beklenen: 424 kırılma, 0 açık.**

**Değişmez 3 — dört boyut çelişmez.** Her yerleşimin `m` alanı bir merkeze işaret
eder. Aynı tarihte yerleşim ile merkezi farklı devletlerin elinde olmamalı.
**Bugünkü durum: 311 çift ihlal** — bu bilinen bir borç (`MIMARI.md` §3.4),
sayının **artmaması** yeterlidir.

Beklenen sayıları betiğin içinde sabit tut ve sapma varsa uyar:
```
Değişmez 1  ✓  567 yerleşim, 29 sahipsiz (beklenen 29)
Değişmez 2  ✓  424 kırılma, 0 açık (beklenen 0)
Değişmez 3  !  311 çelişki (beklenen ≤311) — bilinen borç
```
İhlal varsa **çıkış kodu sıfırdan farklı** olsun.

Python'da `yerlesimler.js` ve `olaylar*.js` okumak: dosyalar `window.X = [...]`
biçiminde. `uret_petek.py`'nin 274-281. satırlarındaki yöntemi örnek al
(dosyayı okuyup JS'i JSON'a çevirip `json.loads`). O kodu **kopyala**, dosyayı
değiştirme.

---

## Görev 2 — `arac/denetle_kapsama.py`

**Bu araç Faz C-B'nin ön koşulu.** Yeni bir bölgeye yerleşim eklerken "yeterince
nokta eklendi mi?" sorusunun ölçülebilir cevabı olmalı; yoksa her faz bu
tartışmada takılır.

**Ölçüt** (`MIMARI.md` §5): kapsanan kutu içinde karadaki hiçbir nokta, en yakın
yerleşime şundan uzak olmamalı:

| Bölge tipi | Azami uzaklık |
|---|---|
| Yoğun tarihî coğrafya | 60 km |
| Normal | 120 km |
| Seyrek (bozkır, çöl, Sibirya) | 300 km |

**Ne yapacak:**
1. Natural Earth kara maskesini yükle — `uret_petek.py`'deki `BASEMAPS` yolunu ve
   `ne_10m_land.geojson` yükleme kodunu örnek al; 117 gölü de çıkar
2. `BOLGE` kutusunu ızgaraya böl (varsayılan 0.25°, `--adim` ile değiştirilebilir)
3. Karaya düşen her ızgara noktası için en yakın yerleşime uzaklığı hesapla
   (haversine; `yerlesimler.js`'teki `lat`/`lon`)
4. Eşiği aşanları raporla

**Çıktı:**
```bash
py arac/denetle_kapsama.py                    # varsayılan eşik 120 km
py arac/denetle_kapsama.py --esik 300         # seyrek bölge ölçütü
py arac/denetle_kapsama.py --gorsel kapsama.png   # boşlukları haritada göster
```

```
Izgara: 0.25°  |  karadaki nokta: 24 118  |  eşik: 120 km
Eşiği aşan: 1 842 nokta (%7.6)
En kötü boşluklar:
   412 km   28.50, 22.75   (Libya iç çölü)     en yakın: Murzuk (Fizan)
   388 km   45.25, 31.00   (Rub'ul Hâlî)       en yakın: Riyad
   ...
Bölge özeti:
   Anadolu      en kötü  48 km   ✓
   Rumeli       en kötü  61 km   ✓
   Kuzey Afrika en kötü 412 km   ✗
```

`--gorsel` verilirse matplotlib ile PNG üret: kara maskesi gri, yerleşimler nokta,
eşiği aşan ızgara hücreleri kırmızı.

**Not:** yüksek çıkan boşlukların bir kısmı **kasten** öyledir — Sahra ve Rub'ul
Hâlî çöllerinde zaten dolgu noktası var ve orası boş kalmalı. Araç karar vermez,
**ölçer ve raporlar**; yorumu entegrasyon oturumu yapar.

---

## ⚠️ Muhtemel engel: kara maskesi geçici klasörde

`uret_petek.py` içindeki `BASEMAPS` sabiti, bir Claude oturumunun geçici
klasörüne işaret ediyor olabilir. Yol yoksa **kendin indirmeye kalkma ve sabiti
değiştirme** — durumu bildir, entegrasyon oturumu veriyi kalıcı bir yere taşıyacak.
O zamana kadar Görev 1'i (kara maskesi gerektirmiyor) tamamla.

---

## Bitirdiğinde
Her iki aracı da çalıştır, çıktılarını göster. Beklenen sayılarla uyuşmayan bir
şey varsa **düzeltmeye kalkma**, bildir. **Commit etme.**
