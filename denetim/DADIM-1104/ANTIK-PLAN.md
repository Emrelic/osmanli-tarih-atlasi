# ANTİK turu planı (UMIT, 5 Kasım 2026)

Ölçüm `antik_olc.py` ile yapıldı. Ağaç `afe2b86f1`, origin/main `7acb10c1e` birleşik. Evren: f < 0640-01-01 olan s, d, v ve isg dönemleri.

## 1. Ölçüm: künye ailesine göre
Sınıflama künye id'si, adı ve bölgesiyle, anahtar kelimeye göre yapıldı. Sınıflama yaklaşıktır.

| Aile | dönem | yerleşim | kaynaksız |
|---|---|---|---|
| Mısır | 8 | 7 | 0 |
| Mezopotamya | 40 | 17 | 0 |
| Hitit / Anadolu | 6 | 4 | 0 |
| Pers / İran | 27 | 22 | 0 |
| Helenistik / Yunan | 17 | 15 | 0 |
| Roma / Bizans | 146 | 62 | 30 |
| Çin | 105 | 40 | 0 |
| Hint | 18 | 11 | 0 |
| Diğer | 453 | 300 | 52 |
| **TOPLAM** | **820** | | **82** |

"Diğer"in ayrıştırılmışı:
- `__BOSLUK__`: 120.
- Germen göç devletleri: yaklaşık 95 (odoakar 21, doğu-got 21, frank 17, langobard 14, vizigot 13, vandal, burgund, süev, gepid).
- Kore ve Güneydoğu Asya: yaklaşık 40 (silla, goguryeo, baekje, funan, linyi-champa, thaton-mon, van-xuan).
- Tarih öncesi ve arkeolojik kültürler: yaklaşık 30 (aseramik, PPNB, Yangshao, Olmek, Maya preklasik, Casma-Sechín).
- Bozkır: yaklaşık 15 (eftalit, alkhon, Göktürk 1, Avrupa Hunları, Avar).
- Erken İslâm: 4 (Hulefâ-yi Râşidîn).

dadim_sonuc'ta f < 0640 olan satır sayısı 174: KAYNAKLI 44 · BULUNAMADI 92 · BAKILMADI 22 · ONERI 16.

## 2. Kurallar (brife zorunlu)
- **Astronomik yıl:** MÖ n = −(n−1). Sıfır yılı vardır (VERI-YAPISI §304; EMRELİC "§281"). MÖ 3000 → `-2999`. Her MÖ öneride ajan yılı bu kuralla sınar. Veii örneğinde 396 → -0395 doğru, -0396 hatalıdır.
- **Bilinen kayma satırları:** `denetim/KRONOLOJI-1104/MO-KAYMA-29.tsv` (dal `emrelic-1104-l2`, 29 satır). Bu satırlar ayrı bir parti olarak ilk sırada sınanır. Satırda "MÖ ~2094-2047" ile `-2094` gibi astronomik ve tarihî yıl karışması ayıklanır.
- **Kronoloji uzlaşımı (CLAUDE.md):**
  - Mısır: Shaw (ed.), *Oxford History of Ancient Egypt* (2000).
  - Mezopotamya: orta kronoloji (Ur III: Frayne, RIME).
  - Hitit: Bryce, *Kingdom of the Hittites* (2005).
  - Başka kronoloji yalnız ic_not'a yazılır. Bir künyenin bütün uçları aynı uzlaşımda olmalı.
- **Sümer çekirdek kutusu (MIMARI §5.1):** bu turda yalnız sahiplik teyidi yapılır. Nokta ekleme ve yoğunluk değişikliği yoktur.
- **Ortak kurallar:** önceki turun bütün kuralları geçerlidir.
  - Alıntı ham metinden alınır; dolaylı çıkarım KAYNAKLI sayılmaz.
  - Her satıra `uc` yazılır.
  - Hayalet devlet denetimi yapılır.
  - Himaye ve tâbilik devir değildir.
  - Savaş işgali `isg`'dir.
  - Yıla indirme delik ya da çakışma açıyorsa yapılmaz.

## 3. Kaynak sırası
1. Shaw 2000 (Mısır)
2. Bryce 2005 (Hitit)
3. Frayne / RIM (Mezopotamya)
4. TIB, Tabula Imperii Byzantini (Anadolu, Balkan, Bizans)
5. Treccani (Roma, Germen göçü, İtalya)
6. Encyclopaedia Iranica (Pers, Part, Sasani, bozkır)
7. CAH, Cambridge Ancient History (archive.org açık ciltleri; `ia-oku`)
8. Çin: Cambridge History of China cilt 1-3 (açık ciltleri), Academia Sinica takvim. Kore ve Güneydoğu Asya: LoC Country Studies, Coedès.
9. Erken İslâm: TDV.

Britannica, academia.edu ve archive.org ödünç kitapları denenmez. Vikipedi tek dayanak olamaz.

## 4. Kapsam ve sıra (öneri)
- **Öncelik A**, yaklaşık 330 satır:
  - MO-KAYMA-29: 29 satır.
  - dadim_sonuc f < 0640 ONERI, BAKILMADI ve BULUNAMADI: 130 satır.
  - Veri tarafında kaynaksız 82 dönem.
  - `__BOSLUK__` 120 dönemin boşluk-doldurma merdiveni sınaması. Bu yalnız "o devirde yerleşim var mıydı" sorusudur.
- **Öncelik B**, yaklaşık 490 satır: kaynaklı ama tek eski kaynağa dayananlar (EB1911 ve Treccani 1929-37 sınıfı).
  - Önce ölçülür, sonra yalnız İPUCU sınıfı olanlar alınır.
- **Parti:** 15 satır, aile bazında gruplanır. Aynı künye ailesi aynı ajana gider; kaynaklar bir kez okunur.

## 5. Tahmin
- Öncelik A: yaklaşık 22 parti. Parti başına ortalama 6 dk ajan süresi (bu turun ölçümü 4-8 dk). Toplam yaklaşık 2,2 ajan-saat; 6 paralel ajanla yaklaşık 25-30 dk duvar saati, birleştirme ve kararlar dahil yaklaşık 1 saat.
- Öncelik B: yaklaşık 33 parti, yaklaşık 3,3 ajan-saat; 6 paralel ajanla yaklaşık 40 dk duvar saati.
- Risk: Shaw, Bryce ve Frayne çoğunlukla ödünç ya da kapalı. Ham metne ulaşılamazsa satır ONERI kalır ve tarayıcı listesine "Emre girişi" notuyla yazılır. Bu yüzden Mısır, Mezopotamya ve Hitit'te KAYNAKLI oranı düşük beklenir. Ölçülmedi; tahmin.

## 6. Bekleyen
- Tazelemedeki DONEM_YOK 70 satır KASA kuyruğunda "eklenecek dönem" olarak durur (EMRELİC).
