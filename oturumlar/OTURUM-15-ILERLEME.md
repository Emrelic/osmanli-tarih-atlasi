# Oturum 15 — Orta Asya + Aral poligonu · İLERLEME

**Devir:** Bu görev Oturum 11'den devralındı (KOORDINASYON.md: "Balkan ekseni
Oturum 15'ten Oturum 11'e, Orta Asya + Aral poligonu Oturum 11'den Oturum
15'e geçti"). Önce okundu: `oturumlar/OTURUM-11-ORTA-ASYA.md`,
`oturumlar/OTURUM-11-KIMLIK.md`, `oturumlar/OTURUM-11-ILERLEME.md`.

**Yazma yetkim:** yalnız `data/yerlesimler_ortaasya2.js` · `data/goller.js`.
`data/yerlesimler.js`'e dokunulmadı. Commit atılmadı.

---

## 1. ✅ Tarihî Aral Gölü poligonu — `data/goller.js` (YENİ dosya)

Oturum 11'in ölçtüğü hata: Natural Earth 10m göl katmanı Aral'ı yalnız
kuruma-SONRASI iki artık ("South/North Aral Sea") olarak taşıyor; 1281-1923
boyunca ~68.000 km²'lik tek göl olan tarihî Aral haritada KARA sayılıyor ve
en yakın petek (Küngrat, %95) o alanı yutuyor — yani ~88.000 km²'lik bir
alan yanlışlıkla Hîve Hanlığı rengiyle boyanacaktı.

- Yazılan: `data/goller.js`, `window.GOLLER` altında tek poligon kaydı
  (GeoJSON `Polygon`, `[lon,lat]`), 23 köşe, iki loblu (Küçük Aral/Büyük Aral
  + Berg Boğazı) tarihî kıyı biçimine yaklaşıyor.
- **Doğrulandı (`shapely`):** poligon geçerli (`is_valid: True`), kendi
  kendini kesmiyor, ekvator-yaklaşık alan ölçümü **~73.000 km²** —
  bilinen tarihî değere (~68.000 km²) yakın, kaba kutudan (`box(58.2, 43.5,
  61.8, 46.8)` → ~88.000 km² kara) daha dar ve gerçek şekle daha sadık.
- **Dürüst sınır:** bu, traşe edilmiş bir kıyı vektörü DEĞİL, standart
  tarihî coğrafya bilgisine dayanan bir yaklaşıklıktır — dosya başında
  açıkça işaretli. TDV zorunluluğu burada uygulanmaz (fiziki coğrafya,
  CLAUDE.md §4 kapsamı dışı).
- **Motoru ben elleyemem** (`arac/uret_petek.py` Oturum 16'nın dosyası).
  `data/goller.js`'in biçimi motorun `ne_10m_lakes.geojson` okuyucusuyla
  bire bir uyumlu (`geometry` doğrudan `shape()`'e verilebilir) — Oturum
  16'nın tek yapması gereken bu poligonu `GOLLER` birleşimine katmak ve
  (istenirse) `data/goller.js`'i `GIRDI_DOSYALARI`/okuma listesine eklemek.

## 2. ⏸️ `data/yerlesimler_ortaasya2.js` birleştirme — HÂLÂ BEKLEMEDE

Görev tanımı "nogay/kazak kimlikleri gelmeden birleştirme yapma" diyordu.
Kontrol ettim, **hâlâ hazır değil**:

- `data/kimlikler.js` içinde `nogay` ve `kazak-hanligi` sözlük kayıtları
  **var** (Oturum 9 eklemiş) ama ikisinin de `harita: null` — yani
  `arac/renkler.py`'nin BOYALAR tablosunda (haritayı fiilen boyayan taraf)
  henüz karşılıkları YOK. Kimlik sözlüğü ile harita rengi iki ayrı katman;
  birincisi hazır, ikincisi değil.
- 🔴 **İsim çakışması bulundu:** `data/yerlesimler_ortaasya2.js` kısa-id
  geleneğine uyup `kazak` yazmış (`kazan`, `kirim`, `altinorda`, `hive`,
  `buhara`, `turkmen` ile aynı desen — bkz. `OTURUM-11-KIMLIK.md`'nin kendi
  notu). `data/kimlikler.js` ise `kazak-hanligi` kullanmış — merkez
  oturumun asıl önerdiği uzun yazım. **Bu iki dosya şu an aynı devlet için
  farklı id kullanıyor.** `nogay` isminde çakışma yok (ikisi de `nogay`).
- Bu yüzden `data/yerlesimler_ortaasya2.js`'e DOKUNMADIM — 7 kayıt, önceki
  turdaki hâliyle duruyor, kendi belgelediği gibi hazır ve birleşmeyi
  bekliyor.

### Merkeze karar sorusu
`kazak` mı `kazak-hanligi` mı? Karar verilince değişecek satır sayısı
`yerlesimler_ortaasya2.js`'de **3** (Aral kuzeyi, Üstyurt kuzeyi, Emba (Cem)
kayıtlarındaki `d:"kazak"`). `renkler.py`'ye ekleme Oturum 16'nın işi;
hangi id ile ekleyeceğini bu karara göre seçmeli.

## 3. Sıradaki adım (bana ait değil)

- Oturum 16: `nogay` + (`kazak` ya da `kazak-hanligi`, karara göre)
  `renkler.py` BOYALAR'a eklensin — künye ve komşuluk çizgesi
  `oturumlar/OTURUM-11-KIMLIK.md`'de hazır.
- Oturum 16: `data/goller.js`'teki tarihî Aral poligonunu `GOLLER`
  birleşimine katsın.
- İkisi de tamamlanınca `data/yerlesimler_ortaasya2.js` (7 nokta)
  `yerlesimler.js`'e birleştirilebilir (entegrasyon oturumunun işi).
