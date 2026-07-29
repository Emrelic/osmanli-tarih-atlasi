# Oturum 3 — İlerleme Notu

Bu dosya, `oturumlar/OTURUM-3-DEVLETLER.md` görevini yürüten oturumun kaldığı
yerden devam edebilmesi içindir. **Yalnız `data/devletler.js` yazıldı, commit
yapılmadı** (görev tanımına göre commit entegrasyon oturumunun işi).

## Yapılan (bu partide)

### 0) Ön temizlik — mevcut 77 kaydın `bolge` alanı kapalı sözlüğe çevrildi
Görev tanımı §"`bolge`" bunu istiyordu: eski serbest metin etiketler (`anadolu-balkan`,
`misir-suriye`, `karadeniz-kuzeyi-bozkir`, `hicaz-necid`, `afrika-boynuzu`, `ege`,
`akdeniz`, `balkan`... gibi) yeni kapalı sözlüğe (`anadolu`, `balkanlar`, `iran`,
`sibirya-bozkir`, `arabistan`, `misir-sudan`, `dogu-afrika`, `italya`, `iberya`, ...)
eşlendi. **77 kaydın 77'si de** doğrulama script'inde artık kapalı sözlük içinde.

Birkaç kayıt için tercih tartışmalıydı, not düşülüyor:
- `bizans`: Anadolu'da doğdu ama son yüzyıllarını Trakya/Balkan'da geçirdi → `balkanlar` seçildi.
- `memluk`, `misir-kavalali`, `fransiz-misir-seferi`, `funj`: `misir-sudan` seçildi (Mısır+Suriye ikisini birden karşılayan tek alan yok, başkent esas alındı).
- `akkoyunlu`, `karakoyunlu`, `afsar`, `kacar`: `iran` seçildi (Tebriz/Kazvin/Tahran eksenli devletler).
- `kirim`, `altinorda`, `zaporojye`: `sibirya-bozkir` seçildi (Karadeniz kuzeyi/bozkır için ayrı bir kategori yok).
- `kibris-krallik`, `kibris-ingiliz`: `anadolu` seçildi (Kıbrıs/Ege adaları için ayrı kategori yok).
- Ege ada devletleri (`naksa-dukaligi`, `rodos-sovalyeleri`, `girit-devleti`, `oniki-ada-italyan`) ve tüm Yunan/Balkan isyan-bağımsızlık kayıtları: `balkanlar`.

**Bir sonraki oturum bu seçimleri değiştirmek isterse serbesttir** — bunlar
mekanik atamalar, araştırma gerektirmedi.

### 1) `harita:` alanı eklendi — mevcut 77 kayıttan 60'ına
`arac/uret_petek.py`'deki `BOYALAR` sözlüğü **okundu** (çalıştırılmadı). Dizin
id'si ile harita id'si birebir veya yakın eşleşen 60 kayda `harita:"..."` eklendi
(ör. `habsburg→avusturya`, `cenova→ceneviz`, `yemen-zeydi→yemen`,
`suud-birinci`+`suud-ikinci→suud`, `kibris-krallik→lusignan`,
`atina-dukaligi→atinadukaligi`, `rodos-sovalyeleri→sovalye`,
`afsar`+`kacar→iran` [BOYALAR'da ayrı Afşar/Kaçar rengi yok, jenerik "iran" ile
boyanıyor], 10 Anadolu beyliği [karaman, germiyan, aydin, saruhan, mentese,
hamid, candar, dulkadir, ramazanoglu, karesi] id'si zaten birebir aynıydı).

`sirp-despotlugu` ve `bulgar-carligi` (ortaçağ Sırbistan/Bulgaristan) da
`sirbistan`/`bulgaristan` harita id'sine bağlandı çünkü BOYALAR'da bu iki
devlet için ayrı bir renk yok — muhtemelen aynı jenerik id ortaçağ ve modern
dönemi birlikte karşılıyor.

**BOYALAR'da olup henüz hiçbir dizin kaydına bağlanmayan id'ler** (bu partinin
kapsamı dışında, ileri partiler için not): `kazan`, `italya` (birleşik İtalya,
henüz dizinde yok), `katalan` (Atina Dukalığı'nın Katalan Kumpanyası dönemi,
mevcut `atina-dukaligi` kaydından ayrı bir polity — Balkan partisinde ele
alınmalı), `hafsi`, `zeyyani` (Kuzey Afrika partisi), `mehdi`, `nube`, `somali`,
`cekoslovakya`, `polonya`, `yugoslavya`, `letonya`, `litvanya`, `finlandiya`,
`norvec`, `sardinya`, `toskana`, `milanoduka` (1918 sonrası/İtalya birliği
öncesi partiler).

### 2) Parti 1 tamamlandı — Anadolu ve Osmanlı öncesi (21 yeni kayıt)
Görev sırasının 1. maddesi. Eklenen kayıtlar (hepsi TDV İslâm Ansiklopedisi'nden
`<title>` ile doğrulanmış slug'lara dayanıyor, slug'lar her kaydın `ozet`
alanında not edildi):

`selcuklu` (Anadolu Selçuklu Devleti, harita karşılığı yok), `ilhanli`,
`timurlu`, `eretna`, `burhaneddin` (Kadı Burhâneddin), `artuklu`, `ahiler`
(Ankara Ahi Birliği), `cobanogullari`, `pervane`, `esrefogullari`,
`inancogullari`, `sahibata`, `taceddin`, `alaiye`, `teke`, `haciemir`
(Ordu-Ünye), `mutahharten` (Erzincan-Kemah), ve Fetret Devri'nin (1402-1413)
dört şehzade saltanatı: `fetret-suleyman`, `fetret-isa`, `fetret-musa`,
`fetret-mehmed`.

**Yeni `tur` değeri eklendi:** `sehzadelik` (Fetret Devri şehzade saltanatları
için — bunlar ne "isyan" ne "hanedanlık", Ankara Savaşı sonrası rakip meşru
saltanat iddiaları). Dosya başındaki alan sözlüğüne işlendi.

**Kaynak notu — `mutahharten`:** TDV'de ayrı maddesi yok (arama sonuçlarında
yalnız `eretnaogullari`, `akkoyunlular`, `erzincan` gibi komşu maddeler
Mutahharten'den bahsediyor, kendisine ayrı madde yok). Tarihler (1379 kuruluş,
1403 ölüm) standart akademik kaynaklara (Uzunçarşılı, Cambridge History of
Turkey) dayanıyor; `ozet` alanında bu açıkça belirtildi — kural ihlali değil,
şeffaflık.

**`selcuklu` neden `harita:` almadı:** BOYALAR sözlüğünde Anadolu Selçuklu
Devleti için ayrı bir id yok (muhtemelen harita 1281'den başladığı ve o tarihte
Selçuklu zaten fiilen dağılmış olduğu için). Kural gereği alan hiç yazılmadı.

### 3) Doğrulama — TEMİZ
```
node -e "...doğrulama script..." (görev tanımındaki komut)
→ kayit: 98 | harita eslesmesi olan: 80
```
`TERS aralik` uyarısı 7 kayıtta çıktı (`bizans`, `venedik`, `papalik`, `fransa`,
`sirvansah`, `yemen-zeydi`, `almanya`) — **hepsi bu partiden ÖNCE vardı, benim
eklemedim.** Sebebi veri hatası değil, **doğrulama script'inin kendi
kısıtı**: 3 haneli yıllar (`"330-05-11"`, `"697-01-01"`, `"756-01-01"`,
`"861-01-01"`, `"897-01-01"`, `"962-02-02"`, `"987-01-01"`) 4 haneli yıllarla
(`"1461-08-15"` vb.) **string olarak** karşılaştırılınca "3" > "1" olduğu için
yanlışlıkla ters aralık gibi görünüyor. Gerçek tarih aralıkları doğru.
Entegrasyon oturumu isterse script'i `parseInt` ile düzeltebilir; veri
tarafında yapılacak bir şey yok.

## Parti 2 — Balkanlar (tamamlandı)

Görev tanımının Balkan listesindeki (Sırp, Bulgar, Bosna, Arnavut, Eflak,
Boğdan, Erdel, Dubrovnik, Karadağ, Hersek, Zeta, Mora despotluğu, Atina/Nakşa)
çoğu Parti 0'da (ilk 77 kayıt) zaten vardı. Bu partide gerçekten eksik olan 4
kayıt eklendi + 1 mevcut kayıt zenginleştirildi:

- **`katalan`** (Katalan Dukalığı, Atina-Neopatras Kumpanyası, 1311-1388) — YENİ.
  `arac/uret_petek.py` BOYALAR'da ayrı `katalan` id'si vardı ama dizinde hiç
  karşılığı yoktu; mevcut `atina-dukaligi` kaydı (1205-1458) bu dönemi
  görmezden geliyordu. **`atina-dukaligi` kaydının kronolojisine de** Katalan
  istilası (1311) ve Floransalı Acciaiuoli'nin geri alışı (1388) maddeleri
  eklendi, `ozet` güncellendi, `[[katalan]]` çapraz referansı verildi. TDV'de
  madde yok (Latin/Katalan Yunanistan tarihi — kaynak kuralının "TDV
  kapsamadığı: Avrupa'nın iç tarihi" istisnasına giriyor), standart akademik
  kaynağa (Setton, Cambridge Medieval History) göre yazıldı.
- **`dubrovnik`** (Dubrovnik/Ragusa Cumhuriyeti) — YENİ. TDV'de doğrulanmış
  madde var (`dubrovnik`).
- **`hersek`** (Kosača Dukalığı, 1435-1482) — YENİ. TDV'de ayrı madde yok
  (yalnız "Hersekzâde" şahıs maddeleri var), standart akademik kaynağa göre
  yazıldı, `ozet`te belirtildi.
- **`zeta`** (Zeta Prensliği, Balšić/Crnojević, 1356-1514) — YENİ, mevcut
  `karadag` kaydının (f:1516) doğrudan öncülü; TDV'nin `karadag` maddesindeki
  Zeta anlatımına dayanıyor, bitiş tarihi (1514, İskender Bey döneminde ayrı
  sancak) `karadag`'ın başlangıcıyla (1516) çakışmayacak şekilde seçildi.

**Doğrulama (bu partiden sonra):**
```
kayit: 102 | harita eslesmesi olan: 81
```
`dubrovnik` de 3 haneli yıl (`"700-01-01"`) yüzünden "TERS aralik" listesine
düştü — Parti 1'deki notta açıklanan **aynı script kısıtı**, gerçek hata değil.
Yeni `TEKRAR id` veya `EKSIK alan` yok.

## Sırada ne var (görev tanımındaki sıra bozulmadı)

- [x] Parti 1 — Anadolu ve Osmanlı öncesi
- [x] Parti 2 — Balkanlar (bkz. aşağıdaki ayrıntı)
- [ ] Parti 3 — Orta ve Batı Avrupa (Habsburg vb. zaten var; Bohemya, Milano,
      Floransa/Toskana, Sardinya-Piyemonte gibi BOYALAR'da id'si olup dizinde
      olmayanlar bu partide)
- [ ] Parti 4 — Doğu ve Kafkasya (Trabzon Rum, Gürcü krallıkları ayrıntısı —
      Timurlu zaten Parti 1'de eklendi, tekrar etmeyin)
- [ ] Parti 5 — Kuzey ve bozkır (Kazan, Astarhan, Nogay, Sibir hanlıkları —
      `kazan` BOYALAR'da var, dizinde yok)
- [ ] Parti 6 — Arabistan ve körfez (Âiz, Benî Hâlid zaten BOYALAR'da var)
- [ ] Parti 7 — Afrika (Hafsî, Zeyyânî BOYALAR'da var, dizinde yok; Mehdî
      Devleti, Nûbe krallıkları da BOYALAR'da var dizinde yok)
- [ ] Parti 8 — 1918-1924 ardılları (Çekoslovakya, Polonya, Yugoslavya, Baltık
      devletleri, Finlandiya BOYALAR'da var dizinde yok)
- [ ] Parti 9-15 — Dünya kapsamı (Orta Asya, Hindistan, Doğu Asya, Güneydoğu
      Asya, Sahra altı Afrika, Amerika, kalanlar) — henüz hiç başlanmadı

## Sonraki oturuma not
Doğrulama komutunu her partiden sonra tekrar çalıştır. `harita:` eklerken önce
`arac/uret_petek.py`'deki BOYALAR sözlüğünü oku (yalnız oku, çalıştırma) —
Parti 2-8'de birçok id zaten orada tanımlı, tahmin etmeye gerek yok.
