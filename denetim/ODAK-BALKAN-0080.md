# ODAK-BALKAN-0080 — Balkan · Sırbistan · Bizans · Ege Latinleri: harita odağı

**27 Eylül 2026 · paket ODAK-0080 · koordinatör YILDIRIM BAYEZIT**
Şartname: `oturumlar/ODAK-BALKAN-0080.md` · Uygulayıcı: `denetim/ODAK-BALKAN-0080-uygula.py`

## 1. Taban (ölçüldü, `py arac/odak_olc.py --dosya <f> --ayrinti`)

| dosya | madde | KONUMLU | BEYANLI→yabancı | ODAKSIZ | YÜK |
|---|---|---|---|---|---|
| kronoloji_balkan.js | 177 | 81 | 81 | 15 | 96 |
| kronoloji_sirbistan.js | 35 | 13 | 0 | 22 | 22 |
| kronoloji_bizans.js | 97 | 80 | 2 | 15 | 17 |
| kronoloji_rodos_sovalyeleri.js | 96 | 87 | 0 | 9 | 9 |
| kronoloji_atina_dukaligi.js | 25 | 24 | 0 | 1 | 1 |
| **TOPLAM** | **430** | | **83** | **62** | **145** |

Şartname tablosuyla **birebir**.

## 2. Sınıflama — 145 madde

| sınıf | adet | ne yazıldı |
|---|---|---|
| **A** tek belli yer | 67 | `yer_id` 34 (havuzda) · `yer_kon` 33 (havuzda yok, OSM Nominatim) |
| **B** birkaç yer / iki taraf | 52 | `odak_yer` 46 · `odak_kimlik` (≥2 kimlik) 6 |
| **C** bir devletin tamamı | 25 | `odak_kimlik` tek kimlik (hepsi o gün ≥ 2 yerleşim, ölçüldü) |
| **D** Osmanlı çapı | **0** | — bu beş dosyada meşru Osmanlı-çapı beyan YOK |
| **E** bulunamadı | 1 | yazılmadı: Rodos 1786-01-01 "Tarikat gelirlerinin … son ölçümü" (Avrupa'ya dağılmış commanderie ağı; `rodos-sovalyeleri` 1786'da 1 yerleşim) |

83 BEYANLI maddenin **hepsinde** `kapsam_genis:true` kaldırılıyor (D=0).

Kurallar tutuldu:
- `yer_id` yalnız olayın metinde adıyla geçtiği yerde (imza yeri, muharebe, şehir). Yeri
  metinde olmayan her maddeye `odak_yer`/`odak_kimlik` (kamera) — ör. Solomos 1823 (şair
  Zakintoslu, yazıldığı yer açık değil) → `odak_yer:["Zaklise"]`, `yer_id` DEĞİL.
- `yer_kon`: kaynak **OSM Nominatim** (27 Eyl 2026 sorgusu), atlasın kendi koordinatı
  KULLANILMADI (`D207`; Navarin'in atlastaki başka kaydı `[36.913,21.696]` dayanak
  alınmadı, OSM Pilos `[36.914,21.696]` bağımsız ölçüldü). Meydan/koy noktaları
  gerekçede **YAKLAŞIK** diye yazıldı: Kosova Ovası (Gazimestan) · Navarin (Pilos
  kasabası) · Klokotnitsa · Grahovo · Hexamilion (Korint Kanalı noktası).
- Kimlikler `devletler.js`ten tarandı; `sirbistan`, `japonya` türü tahmin id yok.
  Uygulayıcı künyesi olmayan id'yi reddeder (ters sınavda `sirbistan` → RED; not: suzgec
  onu `harita:` anahtarıyla 21 yerleşime çözüyor — app.js uçardı, ama `D215` gereği
  gerçek `id` yazıldı).

## 3. Uygulayıcı

```
py denetim/ODAK-BALKAN-0080-uygula.py            KURU KOŞU
py denetim/ODAK-BALKAN-0080-uygula.py --uygula   yazar
py denetim/ODAK-BALKAN-0080-uygula.py --grup A,B kısmî
py denetim/ODAK-BALKAN-0080-uygula.py --ters     süzgecin ters sınavı
```
Kuru koşu (27 Eyl): **değişen 144 · zaten böyle 0 · kayıt yok 0 · eski tutmuyor 0 ·
şartı sağlamadı 0 · E 1.** Ters sınav: 4 bozuk öneri (1 yerleşimli kimlik · havuzda
olmayan ad ×2 · künyesiz id) + eski-değer süzgeci → **beşi de RED.**
Şart sınavı app.js'in işlevleriyle: `node denetim/ODAK-BALKAN-0080-sina.js` +
`js/suzgec.js` (ODAK-AVRUPA-BATI-0080 kalıbı, kendi önekimle kopya).

## 4. ÖNGÖRÜ — uygulamadan ÖNCE yazıldı

`odak_olc.py` ile, uygulama sonrası:

| dosya | yük önce | **bugünkü aletle** | **düzeltilmiş aletle** |
|---|---|---|---|
| kronoloji_balkan.js | 96 | ODAKSIZ 18 · BEYANLI 0 | 0 |
| kronoloji_sirbistan.js | 22 | ODAKSIZ 4 | 0 |
| kronoloji_bizans.js | 17 | ODAKSIZ 3 | 0 |
| kronoloji_rodos_sovalyeleri.js | 9 | ODAKSIZ 1 | 1 (E) |
| kronoloji_atina_dukaligi.js | 1 | 0 | 0 |
| **TOPLAM** | **145** | **26** | **1** |

🔴 **Neden iki sütun:** `arac/odak_olc.py:156` `odak_kimlik` için `len(liste) >= 2`
ister; `js/app.js:11739-11755` tek kimliği kabul eder, şartı **o gün ≥ 2 yerleşim**dir.
Bugünkü alet 25 C maddesini (tek kimlik) ODAKSIZ sayar, oysa kamera uçar. Tahtaya
bildirildi (M-5293). Önerilen düzeltme `len(ok) >= 1`.

## 5. Ölçülen ama benim işim olmayan bulgular (dokunulmadı)

**Kimlik–yerleşim açığı** (odak_kimlik kurulamadı, `odak_yer`e düşüldü — harita için de
anlamlı: bu devletlerin haritada neredeyse noktası yok):

| kimlik | gün | yerleşim |
|---|---|---|
| `zeta` | 1356 · 1385 · 1490 · 1496 | 1 · 1 · 1 · 1 |
| `zeta` | 1421 · 1451 · 1465 | **0** |
| `crnojevic-zetasi` | 1490 · 1496 | **0** |
| `karadag` | 1530 · 1614 · 1688 | **0** |
| `karadag` | 1711 · 1852 · 1853 | 1 (Cetinje) |
| `bulgar-carligi` | 1277 | **0** |
| `hersek` | 1435 (künye başı) | **0** |
| `sirbistan-nemanjic` | 1217-01-01 (künye başı) | **0** |
| `sirbistan-prensligi` | 1830-10-17 | **0** |
| `mora-despotlugu` | 1408 · 1428 / 1460-05-31 | 1 / **0** |
| `rodos-sovalyeleri` | 1786 | 1 (Malta) |

**Nokta adayları** (havuzda yok; `yer_kon` ya da kamera ile geçildi, yerleşim eklemek
benim değil): Mistra (37.073, 22.368) ×3 · Peç Patrikhanesi (42.661, 20.265) ×3 ·
Grahovo (42.653, 18.671) ×2 · Bileća · Missolonghi · Pasarofça · Đakovo · Chiprovtsi ·
Gabrovo · Orašac · Takovo · Ayastefanos/Yeşilköy · Domokos · Vienne · Klokotnitsa.
Çözülemeyen: **Vučji Do** (Nikšić) — OSM'de meydan bulunamadı · **Kruse/Krusi** ·
**Bapheus/Koyunhisar** (yeri tartışmalı; metin "Yalova yakını").

**Tarih kuşkuları** (TARİH ALANINA DOKUNMADIM, kaynakla doğrulanmalı):
- `kronoloji_balkan.js` 1795-01-01 "Kara Mahmud Paşa Kruse Savaşı'nda öldü" — Krusi
  muharebesi genel literatürde **1796** (Eylül). Kaynak kontrolü gerek.
- `kronoloji_balkan.js` 1912-10-08 Bulgaristan ve Yunanistan "savaşa giriş" — ikisinin
  savaş ilanı genel literatürde **17 ve 18 Ekim 1912**; 8 Ekim Karadağ'ın günü. Kaynak
  kontrolü gerek.
