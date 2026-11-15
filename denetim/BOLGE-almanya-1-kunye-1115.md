# BOLGE-almanya · Adım 1 — Künye envanteri (UMIT, 15 Kasım 2026)

Ölçüm: `origin/main` (8fb10bdf1) ağacında, Node ile `data/*.js` (ceviri/paket hariç) yüklenerek; araç scratchpad'te (commit'lenmedi). Atlas kaynak değildir; aşağıdaki "eksik" hükümleri kaynaklı devlet tarihi bilgisine ve ad aramasına dayanır, `f`/`t` günleri bu adımda YAZILMADI (kaynaklı teyit adım 7'ye kalan iş).

## Ölçülen durum
- `bolge=orta-avrupa` künye: 92 (son ölçümde HRE evrenine ilişkin ~53 aktif). Hibrit model: tek `almanya` (f 0962-02-02, t 1945-06-05; 180 yerleşimin sahibi; 11 künye-içi madde) + ayrı küçük künyeler.
- Alman kutusunda (lat 46.4-55.1, lon 5.8-15.2) yerleşim: 120 nokta (5546 toplam yerleşimden).
- Yerleşimsiz künye (sahibi hiçbir yerleşimin `s:`'inde geçmeyen) — doğrulandı, 13: hamburg-sehri, lubeck-sehri, bremen-sehri, hanse-birligi, hessen-landgrafligi, mecklenburg-dukaligi, pomeranya-dukaligi, karintiya-dukaligi, moravya-markgraflik, nordmark, lihtenstayn (kopya: `liechtenstein` 1 yerleşimli), bern-cumhuriyeti, orta-macar-kralligi, frankfurt-serbest-sehri (1815-66; Frankfurt noktası `almanya`/`prusya` ile boyalı).
  Not: `lihtenstayn` ile `liechtenstein` AYNI polity için iki künye (ikisi de f 1719-01-23; biri t 2026-12-31, öteki t boş) — mükerrer.
- Yerleşimli ama tek yerleşimli büyük künyeler: magdeburg-basepiskoposlugu 1, mecklenburg 1, hannover 1, schwaben 1, thuringia 1.

## Künye eksik listesi (HRE 1281-1806, hükümde güçlü kaynaklı olanlar)
| Polity | Atlas durumu | Not |
|---|---|---|
| Köln Elektör Başpiskoposluğu | künye YOK | Köln yerleşimi 1281-1801 `almanya`; Köln 1801-15 fransa-cumhuriyet |
| Mainz Elektör Başpiskoposluğu | künye YOK | Mainz 1281-1945 `almanya` (1797-1814 Fransız işgali/Ren sol yakası boyada görünmüyor) |
| Trier Elektör Başpiskoposluğu | künye YOK | Trier 1281-1801 `almanya` |
| Nürnberg, Augsburg, Frankfurt (1815 öncesi), Regensburg, Ulm serbest/imparatorluk şehri | künye YOK | hepsi `almanya` |
| Hamburg 1510, Lübeck 1226, Bremen 1646 | künye VAR, yerleşim YOK | haritada görünmez |
| Würzburg, Bamberg, Münster, Speyer, Paderborn, Passau piskoposlukları | künye YOK (Speyer/Bamberg/Paderborn/Passau yerleşim de YOK) | |
| Pfalz-Zweibrücken, Anhalt (1863 öncesi), Thüringen (1247 sonrası), Oldenburg, Holstein-Gottorp | künye YOK/kısmî | |
| Palatinat-Neuburg, Jülich-Berg-Kleve | künye YOK (Berg 1806-13 var) | |
| Bonn, Worms, Braunschweig, Lüneburg, Brandenburg a.d. Havel, Salzwedel, Wittenberg, Bautzen, Kempten | yerleşim `bit:"1281-01-01"` ya da `s:[]` — 1281 sonrası haritada YOK | büyük bölümü adım 4'te |

## Çelişki/zayıf nokta (adım 1'den çıkan)
1. `hanse-birligi.f="1356-02-02"` tek kaynağı Wikipedia'ya dayanıyordu (künyenin `ic_not`ı kendisi söylüyor), akademik kaynak (Hansischer Geschichtsverein Lexikon) baskın görüşü **1358** verir. Karar KASA/üst ajanda bekliyor — bu bölge yeniden çözmedi (adım 2).
2. `bremen-sehri.t="2026-12-31"` ve `lihtenstayn.t="2026-12-31"`: yaşayan polity için yer tutucu bitiş.
3. Teyit: 13 yerleşimsiz künye hiçbir yerleşim `s:` kaydında adlanmadığından yalnız künye-içi kronolojisi sayfada kalır (`kronoloji` 5-8 madde); sınır kırılması üretmez.

## Ne yazılmadı
Yeni künye `f`/`t` günü bu adımda yazılmadı: Köln/Mainz/Trier/Nürnberg/Augsburg için gün hassasiyetli akademik kaynak (HRG, NDB/ADB, Germania Sacra) bu oturumda okunamadı (HLS 403; WebSearch yalnız popüler/derleme sonuç verdi). "bulunamadı/okunmadı" olarak beyan edilir.
