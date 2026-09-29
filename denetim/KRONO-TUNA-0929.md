# KRONO-TUNA-0929 — Tuna ve Kuzey Karadeniz kronolojisi (Romanya · Ukrayna) — rapor

> 29 Eylül 2026 · şartname `oturumlar/KRONO-TUNA-0929.md` + `KRONO-DUNYA-0929-ORTAK.md`
> Koordinatör hükümleri: M-5396 (dosya adı → `kronoloji_cok_*`), M-5416 (künye kuralı).

## 1. Teslim edilen

| dosya | global | madde | künye başına |
|---|---|---|---|
| `data/kronoloji_cok_romanya.js` | `window.KRONOLOJI_COK_ROMANYA` | **69** | eflak 38 · bogdan 30 · erdel 16 · romanya 2 · romanya-kralligi 1 (ortak maddeler her künyede sayılır) |
| `data/kronoloji_cok_ukrayna.js` | `window.KRONOLOJI_COK_UKRAYNA` | **35** | zaporojye 30 · bogdan 1 · ukrayna-halk-cumhuriyeti 2* · ukrayna-devleti-1918 3* |
| `denetim/KRONO-TUNA-0929-KUNYE.md` | — | 6 öneri | *önerilen künyeler |
| `denetim/KRONO-TUNA-0929-YERLESIM-ONERI.md` | — | 9 öneri | koşu ister |
| `denetim/KRONO-TUNA-0929-DUZELTME.md` | — | 21 kalem | mevcut maddelerdeki kusurlar |

**Bağlanmayı bekliyor:** iki dosya da `index.html`e ve `arac/paketle.py`ye eklenmedi (koordinatörün işi).

## 2. Envanter (① ÖNCE ölçüldü)

- Künyeler (`devletler.js`, okunarak): `eflak` 1330-1859 · `bogdan` 1359-1859 · `erdel` 1570-1711 ·
  `romanya` 1859-1881 · `romanya-kralligi` 1881-1923 · `zaporojye` 1552-1775. "Ukrayna" künyesi YOK.
- Künyelerin kendi maddeleri: eflak 5 · bogdan 6 · erdel 7 · romanya 4 · romanya-kralligi 4 · zaporojye 4.
- Başka COK/SINIR dosyalarından bu künyelere bağlı: 22 madde (1dunya_A 9 — Romanya 1916-20;
  sinir_avrupa_orta 11; sinir_komsu 4). Hiçbiri tekrar yazılmadı.
- Metin taraması (bütün kronoloji/olaylar, anahtar kelimeyle; gürültülü): Eflak ~103 · Boğdan ~207 ·
  Erdel ~81 · Romanya ~69 · Ukrayna/Kazak ~142 anılma — çoğu `olaylar*.js` (Osmanlı seferleri) ve
  komşu künye dosyalarında; **Eflak/Boğdan/Erdel künyesinden bakınca görünen: 18 madde** idi.
- Haritadaki kırılmalar (bu altı künyenin `s:`/`v:`/`isg:` uçları, `girdi.yukle()`): 36 (tarih ·
  kimlik · yön · katman) grubu. `erdel` kimliği haritada **0 noktada** (Erdel `v:` kid'siz);
  `zaporojye` 1 noktada (Zaporojye Seçi).

## 3. Kaynaklar (hepsi önbellekte, yeniden okunabilir)

- **TDV** (46 madde gövdesi önbellekte, `denetim/KRONO-TUNA-0929-tdv-onbellek/`; ölü slug'ların boş
  dosyaları silindi): eflak (K. Karpat) · bogdan ·
  erdel · romanya · hotin · akkirman · bender-kalesi · kili · ibrail · yergogu · bukres · fener ·
  kamanice · cehrin-seferi · bucas-antlasmasi · hatman · ukrayna · bahcesaray · karlofca ·
  pasarofca-antlasmasi · zitvatorok-antlasmasi · prut-antlasmasi · kucuk-kaynarca-antlasmasi ·
  yas-antlasmasi · zistovi-antlasmasi · edirne-antlasmasi · paris-antlasmasi · berlin-antlasmasi ·
  nigbolu-savasi · tokoli-imre · belgrad · budin · silistre … Ölü slug (302): 30'dan fazla
  (bender, fenerliler, dorosenko, hmelnitski, mazepa, karlofca-antlasmasi, bukres-antlasmasi …) —
  TDV olay değil yer-kişi ansiklopedisidir, kapsayıcı maddeye gidildi.
- **Encyclopedia of Ukraine** (Canadian Institute of Ukrainian Studies; akademik kurumsal):
  Pereiaslav 1654 · Eternal Peace 1686 · Khmelnytsky · Doroshenko · Mazepa · Zaporozhian Sich ·
  Hetman state · Orlyk · Hetman government · UNR · Bukovyna · Bessarabia
  (`denetim/KRONO-TUNA-0929-eou-onbellek/`, 12 sayfa). 11 sayfa adı tutmadı (~1000 kr "bulunamadı"
  gövdesi; silindi): Zboriv · Hadiach · Andrusovo · Poltava · Chyhyryn · Buchach · Brest-Litovsk ·
  Zhovti Vody · Korsun · Berestechko · Konotop — o olaylarda TDV'ye ya da başka EoU sayfasına dayanıldı.
- **History of Transylvania I** (ed. B. Köpeczi, Macar Bilimler Akademisi Tarih Enstitüsü; MEK):
  s. 95-140 (`denetim/KRONO-TUNA-0929-ht-onbellek/`) — Erdel 1541-1606 günleri.
- **Brockhaus-Efron (ESBE)** yalnız iki maddede, "gün komşudan" beyanıyla (1739-09-18, 1828-05-07).
- Vikipedi KULLANILMADI. Kırmızı listedeki hiçbir kaynak kullanılmadı.

## 4. Kurallar nasıl uygulandı

- **Gün:** kaynak gün vermiyorsa `YYYY-01-01` + `gun:` alanında açıklama. Ay veriyorsa `YYYY-MM-01` +
  `gun:`da "ay verir, gün vermez". **Üç yerde çekirdeğin günü DEVRALINMADI** çünkü o kayıtların
  gösterdiği kaynak da gün vermiyor (1462-06-01, 1775-05-07, 1849-05-01 — DUZELTME §C).
- **Takvim:** TDV günü olduğu gibi; History of Transylvania 1582 sonrası Gregoryen ve `gun:`da öyle
  yazıldı; çevirme yapılmadı. Aynı olayın komşu dosyalardaki Jülyen/Gregoryen ikiliği DUZELTME §B.
- **`yer_id`:** yalnız `girdi.yukle()` ad kümesinde bulunan adlar; bulunmayanda `""` + `odak_yer`.
  Pereyaslav, Hadiç, Zborov, Korsun, Kişinev, İstinye atlasta YOK (odak komşu noktalara verildi).
- **Çelişki gizlenmedi:** 24 maddede `ic_not_d:` (kaynak iç çelişkisi · Romen/Ukrayna tarihyazımı
  farkı · haritayla uyuşmazlık).
- **Fener devri:** her voyvoda değişimi YAZILMADI; yalnız başlangıç (Boğdan 1711, Eflak 1716,
  onem 5), Brâncoveanu'nun idamı (1714) ve son (1822, onem 5).

## 5. Denetim

```
node --check data/kronoloji_cok_romanya.js   ✓
node --check data/kronoloji_cok_ukrayna.js   ✓
node denetim/ARAC-KRONO-TUNA-0929-SINA.js    SONUÇ: temiz   (104 madde)
node denetim/ARAC-KRONO-TUNA-0929-SINA.js --bozuk   5 kusur yakaladı (ters yön ✓)
py arac/odak_olc.py   kronoloji_cok_romanya 69 → KONUMLU 57 · KUTULU 12 · ODAKSIZ 0
                      kronoloji_cok_ukrayna 35 → KONUMLU 30 · KUTULU 5  · ODAKSIZ 0
                      ÇÖZÜLMEYEN ODAK: 1 — kronoloji_dogu_afrika.js 'Ogaden' (BENİM DEĞİL)
py arac/denetle.py    SONUÇ: temiz — 2s 180 AÇIK / 786 KAPSAM DIŞI / 158 YIL-TEMSİLÎ (DEĞİŞMEDİ, §6),
                      mükerrer madde 114 (≤114, değişmedi)
```
⚠️ `odak_olc` TOPLAM ODAKSIZ **531** (`denetim/ODAK-TAVAN.json` tavanı 485) — benim iki dosyamın
katkısı **0**. Artışın hangi dosyalardan geldiği bu pakette ölçülmedi (bugün yazılan öteki
`kronoloji_cok_*` dosyalarında ODAKSIZ > 0 olanlar var: fas 17 · libya 8 · cezayir 3 · tunus 3).
Yayın kapısını kilitleyebilir — koordinatörün bilgisine.

## 6. 🔴 Bulgu — `kronoloji_cok_*.js` Değişmez 2s evreninde DEĞİL

`arac/denetle.py:1039 olaylari_yukle()` evreni: `olaylar*.js` + `kronoloji_sinir*.js`. On iki
KRONO-DÜNYA paketinin yazdığı `kronoloji_cok_*.js` dosyaları **2s ölçümüne hiç girmiyor** ⇒
Emre'nin *"harita ile senkronize olmasını sağlasın"* isteğinin (a) yarısı yapılıyor ama ÖLÇÜLMÜYOR.
Simülasyon: `py denetim/ARAC-KRONO-TUNA-0929-2S-SIM.py` (denetle.py'ye dokunmaz; iki dosyamı
süreç içinde evrene ekleyip `main()`i koşturur). Sonucu §7'de.

## 7. 2s simülasyon sonucu (iki dosyam evrende OLSAYDI)

```
                         bugün (gerçek)   iki dosyam evrende (simülasyon)
Değişmez 2s AÇIK              180               179     (−1)
            KAPSAM DIŞI       786               786     (Tuna Osmanlı küresine yakın; beklenen)
            YIL-TEMSİLÎ       158               158
Değişmez 2t kırılmasız         11                11
Ek denetim mükerrer           114 ✓             136 ✗   (+22 — kapı ≤114'te KIRILIR)
```
⚠️ Simülasyon 2s ve mükerreri bastıktan sonra, koordinatörün M-5446 kaynak uyarısı üzerine
DURDURULDU (tam `denetle.py` koşusu ~1,5 GB tutuyordu); SONUÇ satırına kadar koşmadı.

**Mükerrer +22'nin içeriği** (`py denetim/ARAC-KRONO-TUNA-0929-MUKERRER.py` — denetle.py'nin kendi
`mukerrer_maddeler` işleviyle; bu HAM sayımda — denetle'nin bastığı süzülmüş sayıdan geniş — benim
maddelerime dokunan 30 çift; 28'i dış, 2'si iç):
- **24 çift = aynı olay, iki künye.** Çekirdek maddesi Osmanlı'nın panelinde, benimki Eflak/Boğdan/
  Erdel/Zaporojye'nin panelinde (Niğbolu, Akkirman 1484, Karlofça, Pasarofça, Belgrad 1739, Küçük
  Kaynarca, Ziştovi, Bükreş 1812, Akkirman 1826, Edirne, Paris, Bucaş, Çehrin 1678, Ebedî Barış…).
  Bu `KRONOLOJI_COK_*` yolunun TASARIMIDIR (1dunya_A dosyası da aynısını yapıyor) — iki madde aynı
  panelde görünmez, çünkü Osmanlı "ek" olarak sunulmuyor (`app.js` odakKur yorumu).
- **2 çift = aynı gün, ilişkili ama AYRI olay:** 1541-08-29 Budin'in ilhakı ⟷ Erdel'in János
  Zsigmond'a bırakılması; 1918-11-28 Bukovina ⟷ 1918-12-01 Büyük Romanya'nın kuruluşu.
- **2 yanlış pozitif:** 1504 "Büyük İstefan öldü" ⟷ "II. Bayezid'in Kırkpınar güreşçilerine büyük
  ödül vermesi" (ortak kelime "büyük"); 1918-11-28 Bukovina ⟷ "Sırp-Hırvat-Sloven Krallığı kuruldu —
  Yunanistan'ın kuzey sınırı" (ortak kelime "krallığı").
- **2 iç çift:** 1668 Doroşenko hatmanlığı ⟷ 1669 Osmanlı himayesi (ayrı olaylar); Karlofça'nın
  Erdel ve Boğdan maddeleri (aynı gün, iki künye).
⇒ **İstiyorum/öneriyorum:** `kronoloji_cok_*` 2s evrenine alınacaksa mükerrer ölçütü künye-farkında
olmalı (`devlet`/`devletler` alanı farklıysa çift sayılmasın) — yoksa on iki KRONO-DÜNYA paketinin
hepsi kapıyı kırar. Bu `denetle.py` değişikliğidir, benim yetkimde değil.
