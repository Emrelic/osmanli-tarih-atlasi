# ACILIS-ANIM-0081 — açılış perdesi, ikinci tur (şartname taslağı)

**Kaynak:** parti-emrelic-0080 H-0001 · ölçüm: `denetim/ACILIS-ANIM-0081.md`
(önce onu oku, §0 ve §④). **Uygulayıcıyı koordinatör atar.** Bu dosya
ölçen oturumun önerisidir, atama değildir.

## Kapsam — BASAMAK 1 (Basamak 2 Emre kararı bekler, BU ŞARTNAMEDE YOK)

| # | iş | kabul ölçütü |
|---|---|---|
| 1 | **Yön:** küre batıdan doğuya döner | yüzey soldan SAĞA akar. `kureDon` 0 → **+360px** (ya da transform eşdeğeri) |
| 2 | **Donmama:** küre + silüetler yalnız `transform`/`opacity` canlandırır | `background-position`/`background-image` canlandırması KALMAZ. Sınav: DevTools Performance'ta uzun görev sırasında küre dönmeye devam eder |
| 3 | **Arkadan çık + serp:** her silüet ayrı öğe, kürenin ARKASINDAN (z-index küreden düşük, scale ≈.1, merkez) çıkar, kendi hedefine uçar ve **orada kalır** | `animation-delay: i×2s` · `fill-mode: forwards` · hedefler kürenin çevresinde, üst üste binmez, 700px altı ekranda da taşmaz |
| 4 | **17 silüet**, renk renk | 13 NE modern: TUR RUS IRN AUT DEU FRA ITA GBR ESP POL CHN IND USA · Osmanlı 1600 (mevcut json) · Avusturya-Macaristan = atlas `avusturya` 1914 kesiti · Alman İmp. = atlas `almanya` 1914 kesiti · İngiliz İmp. = atlas `ingiltere` 1900 gövdesi **mini dünya haritası üzerinde** (tek silüet olmaz, dağınık). **JPN çıkar.** Her silüetin altında adı + (tarihî olanlarda) yılı |
| 5 | Perde kalkışı değişmez | `js/app.js:2859-2860` `atlas-hazir` kancası aynen. **`js/app.js`e DOKUNULMAZ** |
| 6 | Erişilebilirlik | `prefers-reduced-motion` altında hareket yok, statik görünüm kalır. Hata kutusu (z 9999) perdenin üstünde kalır |
| 7 | Boyut | silüet bloğu ölçülür ve bildirilir. Tahmin ≈ 40-45 KB ham. **60 KB'ı aşarsa sadeleştirme toleransı artırılır** |

## Dosyalar — sahipliği koordinatör onaylar
- `denetim/ARAYUZ-0077-yukleme-silueti.py`: üretici genişler. Atlas gövdeleri
  `data/devletler_harita.js`ten okunur; yol `denetim/ACILIS-ANIM-0081-govde-olc.py`de hazır.
  Blok elle yazılmaz, betik yazar.
- `css/style.css`: yalnız `ARAYUZ-0077 · H-0002` perde bloğu (`:2893-2971`) +
  `>>> ARAYUZ-0077 SILUETLER` bloğu. ⚠️ ARAYUZ-0077-B aynı dosyada çalışıyor.
- `index.html`: `<body>` başına statik perde işaretlemesi (≈ 20 öğe).
  **JS ile KURULMAZ**, çünkü 277 senkron betik bitene kadar JS koşmaz.

## Ölçerek teslim
`py denetim/ACILIS-ANIM-0081-zaman-olc.py <yerel-ya-da-yayın-url> 3`:
FCP farkı (önce/sonra) ve perde süresi. Ekran görüntüsü üç anda alınır:
FCP, perdenin ortası, kalkıştan hemen önce.
