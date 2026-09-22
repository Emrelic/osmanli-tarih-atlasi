# Buton paneli analizi — H-0006 / H-0007 (İSTİŞARE, uygulanmadı)

UI-HARITA · 17 Eylül 2026 · DALGA-0065

Emre'nin sorusu: "☰ Butonlar" panelindeki hangi kutular anlamsız/gereksiz,
kaldıralım mı — ve tam ekran/HUKUKÎ-FİİLÎ/otomatik odaklama nereye
taşınmalı. Aşağıdaki bulgular kod okunarak (ölçülerek) çıkarıldı, tahmin
değil. **Hiçbir dosya değiştirilmedi** — bu yalnız öneri.

## Özet tablo

| Kontrol | Emre'nin sezgisi | Ölçüm | Öneri |
|---|---|---|---|
| 📐 Motor hatları (buton) | "gereksiz" | **AYNI 2 katmanı ⑥ ile ikisi de kontrol ediyor** | KALDIR (biri yeter) |
| ⑥ Motor tanı hatları (kutu) | "gereksiz" | kodun kendi yorumu: "son kullanıcı için değil" | KALDIR (bkz. aşağı) |
| ▦ Veri sınırı (buton) | "gereksiz" | geçmişte GERÇEK bir soruyu 5 kez cevapladı | KORU — ama kategorileme hatasını düzelt |
| 🐎 Koridor ağı (buton) | belirtmedi ama "①②③④ gerek yok sanıyorum" listesinde | ③ kutusuyla **AYNI katmanları** kontrol ediyor | TEK kontrol kalsın |
| 🗺 Coğrafya (buton) | "① Coğrafya (kutu)" ile karıştırıyor | farklı ama AYNI ADI taşıyorlar | AD ÇAKIŞMASINI ÇÖZ |
| ⛶ Tam ekran | "kare olsun, üzerine yazsın" | panelin TEK ikon-yalnız butonu | metni ekle (düşük risk) |
| D: Hukukî/Fiilî | "panele taşıyalım" | haritanın üstünde AYRI yüzen kontrol | panele taşınabilir |
| Otomatik odaklama | "panele taşıyalım" | ayrı bir "⚙ Uçuş ayarları" modalında | panele taşınabilir |

---

## 1. 📐 "Motor hatları" (buton) ve ⑥ "Motor tanı hatları" (kutu) — **GERÇEKTEN MÜKERRER**

Emre'nin sezgisi doğrulandı ve beklenenden kötü çıktı: bunlar iki AYRI
özellik değil, **aynı iki katmanı kontrol eden iki ayrı düğme.**

- Buton: `js/app.js:9408` — `altlikGoster('b', acik)` → `ALTLIK_KATMAN.b`
  (`js/app.js:1126-1132`) = `g-nehir-motor` + `g-sirt-motor`.
- Kutu: `js/app.js:12230-12231` — `{ anahtar: "tani", kalip: /^g-(nehir-motor|sirt-motor)$/ }`
  → **BİREBİR AYNI İKİ KATMAN.**

Kodun kendi yorumu zaten hükmü vermiş (`js/app.js:12219`): *"bir TANI
katmanı, son kullanıcı için değil."* Bu, motorun sınırı yasladığı nehir/
sırt hatlarının fotoğrafla üst üste düşüp düşmediğini görmek için — yani
bizim (geliştiricinin) işi, Emre'nin işi değil.

**Öneri: ikisi de son kullanıcı panelinden kalksın.** Tanı ihtiyacı
tamamen kaybolmuyor diye önerim bunu SİLMEK değil, `?tani=1` gibi bir URL
parametresiyle görünür kılan bir "gizli geliştirici modu" bırakmak —
`GUVEN_STIL` zaten aynı deseni kullanıyor (`?guvenstil=1|2|3`, `js/app.js:474`).

## 2. ▦ "Veri sınırı" (buton) — **KALSIN, ama bir kategorileme hatası var**

Emre'nin "gereksiz" sezgisi burada **çürüyor**: bu buton geçmişte somut
bir sorunu çözdü. `js/app.js:1174` yorumu: *"Kullanıcı beş kez 'burası
neden boş' diye sordu; beşi de bu kutunun iki kenarıydı."* Yani bu buton
Emre'nin GERÇEKTEN sorduğu bir soruyu, o sorulduğunda tekrar sormasına
gerek kalmadan cevaplıyor. Kaldırılırsa aynı soru altıncı kez sorulur.

Ama ölçüm bir **yan hata** buldu: `veri-siniri-cizgi` katmanı hem kendi
dedicated butonuna sahip (`js/app.js:9419-9429`) HEM DE "④ Siyasî" kutusunun
kalıbına (`js/app.js:12257`, regex içinde `veri-siniri` geçiyor) **yanlışlıkla**
düşüyor. Yani "④ Siyasî"yi kapatan bir kullanıcı, farkında olmadan Veri
Sınırı butonunun durumunu da bozabilir — tıpkı `§UI` bölümünün 5 Eylül'de
`altlik`/`cografya` için tarif ettiği "iki denetim aynı katmana sahip,
biri sessizce kazanıyor" hatasının bir benzeri.

**Öneri: butonu koru, `veri-siniri`yi "④ Siyasî" kalıbından çıkar** (küçük
bir regex düzeltmesi — `js/app.js:12257`). Bu H-0006/7 kapsamında
uygulanmadı, ayrı bir maddeyle yapılabilir.

## 3. 🐎 "Koridor ağı" (buton) ve ③ "Yollar ve koridorlar" (kutu) — **mükerrer, ama madde 1'den farklı**

Aynı desen: buton `js/app.js:9436-9447` (`koridor-kenar-cizgi` +
`koridor-dugum-daire` katmanlarının `visibility`sini değiştiriyor), kutu
`js/app.js:12246` (`kalip: /^(koridor-|sefer-)/`) **AYNI katmanları**
(artı bugün D1-TURKIYE'nin eklediği `sefer-*` katmanlarını da) kapsıyor.

Farkı madde 1'den: bu **son kullanıcı için gerçekten ilginç** bir tarihî
katman (menzil/ulak yolları, 1539-1839) — "tanı" değil. Emre'nin
"gereksiz" dediği şey muhtemelen ismin ne olduğunu anlamamasıydı
("üstteki ne işe yarıyor anlamadım" — H-0006), mükerrerliği değil.

**Öneri: TEK kontrol kalsın**, hangisi olduğu bir tasarım tercihi:
- Buton kalsın, kutu silinsin (bugünkü davranış daha zengin tooltip taşıyor)
- ya da kutu kalsın, buton silinsin (KATMANLAR listesi zaten tutarlı bir
  yer, sefer oklarıyla aynı yerde durur)

Ben **kutuyu öneriyorum**: sefer okları da aynı listeye ekleniyor
(D1-TURKIYE bugün ekliyor), tek bir "Yollar" başlığı altında toplamak
tutarlılığı artırır.

## 4. 🗺 "Coğrafya" (buton) vs ① "Coğrafya" (kutu) — **farklı şey, aynı ad**

Bu ikisi mükerrer DEĞİL — ikisi de gerçek ve farklı bir iş yapıyor, ama
**aynı adı taşıdıkları için** kafa karışıyor (Emre'nin H-0006'daki
kendi cümlesi bunu gösteriyor: iki ayrı "Coğrafya" var ve hangisinin ne
olduğunu ayırt edemiyor).

- Buton (`js/app.js:9408`, grup "a"): Esri fotoğraf altlığı ↔ bizim kendi
  çizdiğimiz illüstrasyon (kara/göl/dağ/nehir) arasında **harita TARZI**
  geçişi.
- Kutu (`js/app.js:12245`, `kalip: /^(zemin|g-)/`): o illüstrasyonun
  kendisini **AÇ/KAPA** (görünürlük).

**Öneri: adlardan birini değiştir.** Örnek: buton → "🎨 Harita Tarzı"
(Fotoğraf/Çizim), kutu adı "① Coğrafya" olarak kalsın (KATMANLAR
listesinin geri kalanıyla tutarlı: Yerleşim, Siyasî, Yollar…).

## 5. ⛶ Tam ekran — kolay ve düşük riskli

`index.html:94`: `<button id="btn-tamekran" title="Tam ekran (F11)">⛶</button>`
— panelin TEK ikon-yalnız butonu; öteki hepsi ikon+yazı (📚 Dizin, 🗺
Coğrafya, 📐 Motor hatları, ▦ Veri sınırı, 🐎 Koridor ağı). Emre'nin
"kare olsun, üzerine yazsın" isteği zaten var olan deseni tamamlıyor.

**Öneri:** metni ekle — `⛶ Tam Ekran` (tam ekrandayken `⤢ Küçült` —
`js/app.js:9474-9475` zaten simgeyi değiştiriyor, yalnız metin eklenir).

## 6. HUKUKÎ/FİİLÎ anahtarı — panele taşınabilir

Bugün `js/d_katman.js:234-276` (`_DGorunumKontrolu`) haritanın **üstünde
yüzen, ayrı bir MapLibre kontrolü** (sağ üst köşe, "boşta" — kendi
yorumunda böyle yazıyor). İki buton: "D: Hukukî" / "D: Fiilî", sınır
sınıflarının (`F>E>C` ya da `D>F>E>C`) öncelik sırasını seçiyor.

Emre haklı: bu, "☰ Butonlar" panelindeki öteki katman kontrolleriyle
AYNI işi yapıyor (bir görünüm anahtarı) ama farklı bir yerde ve farklı
bir görsel dilde duruyor. **Panele taşınması** tutarlılığı artırır ve
haritayı örten bir kutuyu kaldırır.

**Uygulama notu (yapılmadı):** `_DGorunumKontrolu`, `harita.addControl(...)`
yerine düz bir DOM parçası olarak `#menu-butonlar` içine eklenebilir;
mantık (`_dGorunum` değişkeni, `_dSinirGuncelle` çağrısı) hiç değişmeden
taşınır — yalnız `onAdd`/`onRemove` yerine sabit bir `<div>` kurulumu.

## 7. Otomatik odaklama — panele taşınabilir, ama ayrımı KORU

Bugün `index.html:579-586` (`#ayar-oto-odak`), `#ayarlar-pencere`
("⚙ Uçuş kipi ayarları" modalı, `index.html:436` gear ikonuyla açılıyor)
içinde — "Görüş genişliği" ve "Genişlik kipi" ile aynı kutuda.

**Öneri: yalnız "Otomatik odaklama" satırını panele taşı**, "Görüş
genişliği"/"Genişlik kipi" uçuş ayarlarında kalsın. Gerekçe: ilk ikisi
gerçekten UÇUŞ mekaniğiyle ilgili (kamera hızı, kadraj genişliği), oto-
odaklama ise bir DAVRANIŞ anahtarı ("toprak değişince zıplasın mı") —
Emre'nin panele taşımak istediği şey muhtemelen bu ayrımı sezgisel
olarak zaten yapıyor.

---

## Önerilen sıralama (1.MURAT karar verir)

```
UCUZ VE RİSKSİZ    ⛶ Tam ekran metni · ▦ Veri sınırı kategorileme hatası
ORTA               📐/⑥ mükerrer motor hatları temizliği (?tani=1 arkasına)
                   🐎/③ mükerrer koridor temizliği (tek kontrol)
                   🗺/① Coğrafya ad çakışması (yeniden adlandırma)
DAHA GENİŞ         HUKUKÎ/FİİLÎ anahtarını panele taşı
                   Otomatik odaklamayı panele taşı
```

Hiçbiri bu turda UYGULANMADI — görev tanımı (`oturumlar/DALGA-0065.md`
H-0006/7) açıkça "İSTİŞARE, uygulama değil" diyordu.
