# Atlas başlangıcı ilk tanıktan önce olan şehirler — ölçüm ve karar (14 Ekim 2026)

Kaynak: `data/sehir_tarihce_osm.js` — zinciri boş ve atlas noktası olan **56** kayıt (raporun "57"si; Hürremâbâd
kitabe kararıyla çıktı). Ölçüm: `girdi.yukle()` + tarihçe, bu oturum.

## Motor gerçeği (ölçüldü)
- Yerleşimin VAR OLDUĞU dönemi belirleyen tek alan **`kur:`** (`girdi.BILINEN_ALANLAR`: "motor: petek_epok() bu
  tarihten önce peteği komşuya devreder"). `kur:` yoksa nokta UFUK başından beri vardır.
- Değişmez 1 (`denetle.py:1244`) `kur:` öncesini atlar, sonrasında s/d/v ister ⇒ ilk dönemi ileri alıp `kur:`
  yazmamak 1285–… kesitlerinde **sahipsiz delik** üretir.
- Değişmez 5a `kur:` öncesindeki dönemi affetmez ⇒ `kur:` yazılırsa öncesindeki s/d/v dönemleri KIRPILMALI.
- `girdi.py` motor dondurma listesinde ⇒ yeni bir alan (ör. "görünme başlangıcı") TAM YENİDEN İNŞA ister.

## Kural çatışması
- `VERI-YAPISI` §kesinlik / ŞIRNAK: `kur:"1891-01-01"` + `kesinlik:"belirsiz"` **MEŞRU** — "haritada görünme
  günü için ALT SINIR" olarak.
- `VERI-YAPISI` 10 Ekim 2026 (KASA): "İLK ANILIŞTAN `kur:` TÜRETİLMEZ … `f:` o tarihtir, `kur:` YAZILMAZ".
- İkisi aynı anda uygulanamaz: `kur:` yazılmadan `f:` ileri alınırsa Değişmez 1 kırılır.

## Dört grup

| Grup | Sayı | Şehirler | Çare |
|---|---|---|---|
| A — biçimsel | 4 | Hâil, Isparta, Kırşehir, Portsaid | ilk tanık = atlas günü; değişiklik YOK |
| B — kuruluş tanıklı, yer aynı | 13 | Dedeağaç 1869, Batna 1844, El-Fâşir 1792, El-Obeyd ~1800, Feyzâbâd 1680-01-23, Hartum ~1700, Mürzük ~1400, Nâsıriye 1872, Senendec 1636-05-26, Saraybosna 1462-02, Sidi Belabbas 1843, Sincâ ~1886, Çanakkale 1463 | `kur:` = kuruluş (kural UYGUN) + öncesi dönemleri kırp |
| C — atlas noktası ESKİ şehri taşıyor | 7 | Van (Tuşpa 1232→), Malatya (Melitene), Basra (eski Basra), Şehrizor/Süleymaniye, Kandehar (eski Kandehar), Kuseyr (el-Kadîm), Hums (Lebde) | ÖNCE eski yer için AYRI nokta (koordinat + zincir), SONRA modern noktaya `kur:` — yoksa eski şehir haritadan silinir |
| D — yalnız ilk anılış | 32 | Balıkesir, Banaluka, Bilecik, Burdur, Çorum, Deyrizor, Drama, Ed-Dâmer, Cirge, Ergiri, Çölemerik, Hudeyde, Kesela, Gümülcine, Görice, Ağvât, Lâr, Mostar, Tatarpazarcığı, Preveze, Priştine, Reşt, Sisam, Şârika, Şibînülkûm, Tîzî Vezzû, Travnik, Tuzla, Vâdî Halfâ, Yefren, Ammâre, Benî Süveyf | ÇATIŞMA — aşağıdaki karar |

(B'de üç şehirde `kesinlik` yüzyıl: El-Obeyd, Hartum, Mürzük — `kur:` + `kesinlik:"yuzyil"`.)

## D grubu için seçenekler
1. **Şırnak kalıbı (önerim):** `kur:` = ilk anılış + `kesinlik` + `kaynak:` ve `neden:` alanlarında
   "kuruluş DEĞİL, ilk anılış — haritada görünme için alt sınır" beyanı; 10 Ekim kuralına "atlas yerleşimlerinde
   motor ancak `kur:` okuduğu için görünme alt sınırı `kur:`a yazılır, beyanla" istisnası eklenir.
   Motor değişmez, tam inşa gerekmez; bir sonraki olağan koşuda haritaya yansır.
2. **Yeni alan** (ör. `gor:` — görünme başlangıcı; motor `kur:` gibi okur, anlamı "ilk tanık"): kavramsal olarak
   temiz, ama `girdi.py` + `uret_petek.py` değişir ⇒ TAM YENİDEN İNŞA (7–8 saat, HAVVA) ve motor işi.
3. **Dokunma:** D grubu atlasta 1281'den kalır, borç tarihçede beyanlı durur.

## Sıra önerisi
B (13) hemen → A (4) kapanış notu → C (7) eski-yer noktaları ayrı iş → D (32) karara göre.
Her değişiklik: Değişmez 1/5a ve 2s (yabancı senkron) ölçülür; `kur:` ile kırpılan dönemlerin kronoloji
maddeleri (`olaylar*`) gerekiyorsa tarihçedeki kaynaklı olaylardan aktarılır.
