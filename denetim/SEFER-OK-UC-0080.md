# SEFER-OK-UC-0080 — ok başı (parti-emrelic-0080 H-0012)

Oturum: SEFER-OK-0077 · 28 Eylül 2026 · koordinatör YILDIRIM BAYEZIT (M-5317)
Emre: *"deniz seferi ok başı çok şekilsiz bunun şeklini düzeltelim, hem çok büyük hem asimetrik hem ok başı olduğu anlaşılmıyor."* Görsel: `C:/claudemre/kutu/giden/parti-emrelic-0080/H-0012-1.png` (Savoy 1366, z6).

Aletler: `denetim/ARAC-SEFER-OK-UC-0080.js` (headless Chrome, 5 sahne, `node … <once|sonra>`) · `denetim/ARAC-SEFER-OK-UC-KIRP-0080.py` (yan yana kırpıntı).
Görüntüler: `SINAV-SEFER-OK-UC-0080-KARSILASTIRMA.png` (5 sahne, önce|sonra) · `SINAV-SEFER-OK-UC-0080-YAKIN.png` (Gelibolu z8 + Novorossiysk z5 yakın plan, sol önce / sağ sonra).

## ① Bugünkü ok başı nasıl üretiliyordu

- `js/app.js` `_okUcuKanatlari(yol)` (eski ~5269): son parçanın yönünden ±30° iki kanat ÇİZGİSİ (MultiLineString), `sefer-ucu` + `sefer-ucu-kenar` **line** katmanları (eski ~2251-2261), besleme `seferGuncelle` (eski ~5497).
- **Ölçü KİLOMETRE cinsindendi:** kanat boyu = okun toplam uzunluğunun %6'sı, 18–130 km arasına kıstırılmış. ⇒ **ekrandaki boyu zoom'a bağlı.** Gövde ise piksel (`line-width` = `kalinlik`, 2.5–3.2 px).
- Ölçüm (131 ok, `seferKayitlariniTopla`, kanat boyu ekran pikseline çevrildi):

| zoom | en küçük | ortanca | en büyük |
|---|---|---|---|
| z4 | 2 px | 3 px | 18 px |
| z6 | 9 px | 14 px | 70 px |
| z8 | 34 px | 54 px | 282 px |

Tek okun iki ucu (D206): Savoy 1366'nın kanat açıklığı z4'te 35 px, **z6'da 140 px, z8'de 559 px** (headless, `harita.project`). "Çok büyük" şikâyeti z6'da doğru, z4'te ise tersi: uç 2-3 px'le **görünmüyordu**. Yani tek bir çarpanı küçültmek z4'ü büsbütün silerdi. Çare birimi değiştirmek: km yerine piksel.

## ② Asimetrinin sebebi — HESAP, SVG/marker değil

- DOM marker (`.sefer-ok`) yalnız tür glifini (⚓) taşıyor; ucun şekliyle ilgisi yok.
- Kusur kanat boyu ile yönün birbirinden kopuk olması: yön SON PARÇADAN, boy OKUN TAMAMINDAN geliyordu. Deniz oklarının `rota`sı kıyıyı dolanıyor; Savoy'un son parçası 9,6 km, kanatlar 123 km. 123 km'lik kanat, son 10 km'nin yönüyle, gövdenin çok gerisine uzanıyor: biri gövdenin üstüne yattı (Limni yönü), öbürü güneye inip **Ayvalık'a kadar** ikinci bir güzergâh gibi çizildi (`KARSILASTIRMA.png` 1. satır, sol). İki kanadın biri görünmez, öbürü dev ⇒ "asimetrik ve ok başı olduğu anlaşılmıyor".
- 131 okun **36'sında** son parça kanattan kısaydı (hepsi aynı riski taşıyor); 6 okta son parçanın yönü gövdenin kanat boyu gerisindeki kirişinden >20°, 2'sinde >45° sapıyordu.

## ③ Düzeltme (js/app.js, yalnız bu üç bölge — ARAYUZ-0077-B'ye bildirildi, M-5329 → M-5330 "açık değişikliğim yok")

1. `sefer-ucu` artık **symbol** katmanı: kod içinde üretilen SDF **dolu üçgen** (`_okUcuResmiEkle`, dış dosya yok), `icon-color` = gövde rengi, `icon-halo` = eski kenarın açık tonu, harita ile döner.
2. **Boy piksel:** `icon-size` = `kalinlik × 5.5 / 26` ⇒ uç **14–18 px, her zoom'da aynı** (gövde gibi). ×4.5 de denendi: 13 px uç, yerleşim işaretinin ve ok adının yanında seçilmedi.
3. **Yön kirişten:** `_okUcuYonu` = uçtan gövde boyunca `geriKm` (okun %3'ü, 3–20 km) gerideki noktadan uca açı. Mercator konform olduğundan atan2(Δλ·cosφ, Δφ) ekrandaki açıdır.
4. **Çapa:** gövdenin bittiği nokta üçgenin ucundan %30 geride (`icon-offset [0, 5.2]`). Uç hedefi ~5 px aşar. KASITLI: gövde yuvarlak başlı, ucu tam hedefe koymak gövdeyi üçgenin en dar yerinden yanlara taşırırdı.
5. `sefer-ucu-kenar` kimliği boş bir yer tutucu olarak kaldı (`_seferKatmanSirasi` ve eski aletler bu adı arıyor).

## Sınav (headless, gerçek index.html + data)

| sahne | önce (kanat açıklığı) | sonra (üçgen boyu) | render |
|---|---|---|---|
| Savoy z4 | 35 px | 16 px | 1/1 |
| Savoy z6 (Emre'nin karesi) | 140 px | 16 px | 1/1 |
| Savoy z8 | 559 px | 16 px | 1/1 |
| Karadeniz z5 (4 ok) | 21–29 px | 16 px ×4 | 4/4 |
| Bakü z6 (kara oku) | 19 px | 17 px | 1/1 |

Yön: Savoy 41° (KD, Çanakkale Boğazı'nın ekseni). Önceki başıboş kanatlar (Imroz'a ve Ayvalık'a uzanan iki çizgi) görüntüde yok.

## SINANMADI / açık

- Kavşak ve kalabalık sahnede üçgenin öteki sembollerle (yerleşim işareti, ok adı, 💥) üst üste binmesi: `icon-allow-overlap` açık, yani uç HEP çizilir; Novorossiysk'te 💥'nin altında kalıyor (YAKIN.png sağ alt), ikisi de görünüyor.
- Animasyon fazı (`js/sefer_ok.js`) kendi ucunu çizmiyor (çizgi + yuvarlak nokta), dokunulmadı.
- `HAREKET` yorumlarındaki "gövde 9 px" sayıları eskimiş: ölçülen `kalinlik` 2.5–3.2 px. O yorumlar benim bölgemin dışında, düzeltilmedi.
