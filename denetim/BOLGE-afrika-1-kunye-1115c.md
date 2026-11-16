# AFRİKA — 1. Künye envanteri (UMIT, 3. dalga, 15 Kasım 2026)

Ağaç: `umit-1115c-afrika` (taban `origin/kasa-1115-umit-birlesim` c317d2d85). Ölçüm: `girdi.oku_devletler()` + `girdi.yukle()` (scratchpad betikleri `afr_env2.py`, `afr_renk.py`; depoya yazılmadı).

## Ölçüm (sayı)
- `bolge:` Afrika kümesi (kuzey-afrika 76 · misir-sudan 51 · dogu-afrika 98 · bati-afrika 98 · orta-afrika 46 · guney-afrika 47 · sahra 1) = **417 künye**.
- Yerleşim penceresi olmayan künye: yalnız `s:[].d == id` sayılırsa **95**; `harita:` anahtarı ve `d:`/`v:` sahipliği de sayılırsa **87** (8 künye `harita:` anahtarı üzerinden zaten pencereli: ör. `kaffa-kralligi` → `kaffa` anahtarı Bonga'da 1390-1897 pencereli). "Yerleşimsiz" ölçüsü kimliği değil **boya anahtarını** izlemelidir; KASA'nın 1114 ölçümü bunu ayırmıyorsa Afrika'da yerleşimsiz sayısı 8 fazla çıkar.
- 87 yerleşimsiz künyenin sınıfı:
  - Osmanlı-dönemi idari kimlikler (ocaklık/eyalet/kavalalı; yerleşimleri başka kimlikle yazılmış): `cezayir-ocagi`, `trablusgarp-ocagi`, `misir-eyaleti`, `misir-kavalali`, `konstantin-beyligi` — çoğu ikiz künye; silinmez, öneri `YERLESIMLER-JS-KUYRUK-1115c-afrika.md`.
  - Sömürge/protektora (Cape, Natal, Basutoland, Gambiya, Uganda, Fransız/İtalyan Somali, Eritre…): 1900'lerin ekseninde, çekirdek 1281-1923 içinde ama Osmanlı komşuluğu dışı.
  - Antik Mısır/Nubya/Libya (misir-*, kush-25, kyrene, numidia…): 1281 öncesi, brif kapsamı dışında bırakıldı.
  - **Brif kapsamındaki (Mısır, Sahel, Hausa, Doğu/Güney Afrika) açık künyeler:** `kebbi`, `dendi`, `akwamu`, `denyanke`, `kaabu`, `fante`, `shewa`, `evfat`, `suve-emirligi`, `vedday-sultanligi`, `touggourt`, `ammarogullari`, `trablus-benihazrun`, `turk-misir-sudani`, `tulunoglu`, `mogadisu-erken`, `dervis-devleti`, `gane`/`wagadu-gane-erken`, `tekrur-*`, `susu-kralligi`, `sahra-sanhaca`, `kevkev-erken`, `sfaks-firyani-emirligi`, `magrave-fas`.
- Renk: 417 künyenin **0'ı** boya anahtarsız (bkz. 5. adım).

## Eksik devlet (B) — kaynaklı olarak okunabilenler
Hiçbiri bu oturumda **yeni künye olarak** yazılmadı (kaynak gerekçesi 2. adım). Gözlenen olası eksikler (kaynak okunmadan künye yazılmaz): Bornu/Kanem (Kanem-Bornu künyeleri var mı → ölçülmedi, Afrika bölge listesi ad düzeyinde taranmadı), Darfur Sultanlığı, Sennar Sultanlığı, Mossi, Ashanti — hepsi için "atlasta var mı" taraması **ölçülmedi** (kimlik adı araması yapılmadı); bir sonraki oturuma devir.

## 1000-1199 seyrek dilim (C)
Ölçülmedi (yerleşim yüzyıl sayımı bu oturumda çıkarılmadı). Gözlem: `gane` (1000-1076), `susu-kralligi`, `tekrur-kralligi`, `kevkev-erken`, `sahra-sanhaca` künyeleri 1000-1199'da var ama yerleşim penceresi yok; `Gao`/`Kano` bu dilimde pencereli (Kano 1000→, Gao 801-1000 BOŞLUK, 1000-1324 kevkev).
