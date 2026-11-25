# Çeviri kapsamı: ölçüm ve plan (KASA, 25 Kasım 2026)

**Ağaç:** `D:\atlas\.claude\worktrees\kasa19-kapi`. Salt okur; depoya dosya yazılmadı. Ölçüm sırasında HEAD `54bae3fa2` idi; 22:37'de `24bca150f` görüldü (push kapısının damga commit'i; bu çalışmanın değil). `git status --short` boştu.

**Etiketler:** `[KOD]` koddan okundu, **tarayıcıda sınanmadı**. `[ÖLÇÜM]` node betiğiyle sayıldı. `[TAHMİN]` varsayıma dayanır. Satır numaraları, ayrıca belirtilmedikçe `js/app.js`'indir. Boyut ve yükleme ayrıntıları için `denetim/EKOKUMA-ALTYAPI-1125.md` §2-3'e bakın; burada tekrarlanmadı.

## 0. Sonuç

1. **Doğrulandı:** yalnız `arayuz`, `devlet` (yalnız `ad`), `olay` (yalnız `b`, `d`) çevriliyor (`arac/ceviri.py:30`, `js/ceviri.js:22`, `:291`). Tanımadığı türü `Ceviri.ekle` sessizce atar. Kronolojilerden yalnız `OLAYLAR*` ile `KRONOLOJI_COK_ARABISTAN2` sayılıyor (`arac/ceviri_cikar.js:25-37`).
2. Aktif dil **21** (`data/ceviri_dizin.js`). Betik `ko`yu da tanımlıyor ama dosyası yok. Tavan tablosu 18 dili adıyla yazıyor; listede olmayanın tavanı 0.
3. Çevrilmeyen görünür metin **yaklaşık 9,14 milyon Türkçe karakter** (üst sınır, statik sayfalar ve kaynakça hariç). Bugünkü madde çevirisi evreni 1,64 milyon (`b`+`d`), yani **5,6 katı** eksik. 21 dilde yaklaşık 196 milyon çıktı karakteri.
4. 🔴 **Bugün canlı olması beklenen bir kusur: yabancı dilde ek okuma kartları kayboluyor** (§1).
5. 🔴 **Birleştirilerek kurulan etiketler sözlükte olsa bile Türkçe kalıyor** (§2.2).
6. 🔴 Yol balonu **iç notu ekrana basıyor** (§2.3).

## 1. Önce düzeltilmesi gereken: yabancı dilde kart bağı kopuyor

- `[KOD]` `_ekBagEslesir` (`:14289-14296`) `"gün|ayırt edici"` bağında Türkçe kelimeyi `o.b` içinde arıyor. `Ceviri.uygula` ise `o.b`yi yerinde çeviriyor; Türkçesi `o.b_tr`de duruyor. Antlaşma ve isyan eşleştiricileri `b_tr` kullanıyor, bu fonksiyon kullanmıyor.
- `[ÖLÇÜM]` `_ekNorm`, `_ekBagGun`, `_ekBagEslesir`, `ekKartBagliMi` `app.js`'ten kesilip gerçek çeviri dosyalarıyla koşturuldu. 1.109 kartın 995'i Türkçede en az bir `OLAYLAR*` maddesine bağlı. Türkçedeki kart-madde çifti 1.920.

| Dil | Düşen kart-madde çifti | Hiçbir maddede kalmayan kart | Düşen görsel-madde çifti (58'de) |
|---|---|---|---|
| de | 715 | 329 | 0 |
| en | 766 | 358 | 0 |
| az | 848 | 403 | 8 |
| ar | 1.296 | 698 | 14 |
| ru | 1.289 | 690 | 14 |
| zh | 1.298 | 699 | 14 |

- Öteki 15 dil ölçülmedi. `en`de ayrıca 1 yeni (yanlış) çift oluştu. Devlet kronolojisi yolu bu sayımda yok.
- **Çare:** `:14295` → `_ekNorm(o.b_tr || o.b)`. Tek satır, çeviri gerektirmez. Kart çevirisinden **önce** inmeli, yoksa çevrilen kartların büyük kısmı görünmez.

## 2. Türlere göre ölçüm

### 2.1 Sayım kuralı

- `index.html`'deki data betikleri ile 88 tembel ek okuma dosyası node `vm`'de yüklendi (yükleme hatası 0).
- **Görünen** = o türü çizen kodun bastığı metin alanları. Harf içermeyen değerler atıldı. Aynı tür içinde birebir aynı dizge **bir kez** sayıldı.
- **Hariç:** `kaynak` (künye bilgisi, ayrı sütun), `ic_not*` (ayrı sütun), `id`, tarih, koordinat, bağ alanları. HTML'e gömülü sabit etiketler arayüz türüne aittir.
- `app.js`'in çalışma anındaki birleştirme ve süzgeçleri **uygulanmadı**. Kronoloji satırları bu yüzden **üst sınırdır**: güvensiz kaynak yüzünden gizlenen, künye penceresi dışında kalan, hiçbir künyeye eşlenmeyen ve derin kronolojinin temsil ettiği gömülü maddeler de sayıldı.

### 2.2 Tablo (çevrilmeyen veri metinleri)

Sütunlar: **TR** = görünen Türkçe karakter · **×21** = TR × 21, milyon · **girdi/çıktı** = milyon token, 21 dil, tek geçiş `[TAHMİN]`.

| Tür (kayıt) | Kaynak | Gösterildiği yer `[KOD]` | TR | ×21 | girdi / çıktı | kaynak / iç not (karakter) |
|---|---|---|---:|---:|---:|---|
| Ek okuma ve merak (1.109 kart; öneri başlıkları dahil) | `data/ekokuma*.js`, `merak*.js` (tembel) | `ekKartHtml` :14755; akordeon :14436; pencere :14920 | **2.496.480** | 52,4 | 19,4 / 22,4 | 297.315 / 298.988 |
| Kişi kartları (288) | `kisiler.js` | :12879-12964; Dizin :11412 | 281.524 | 5,9 | 2,2 / 2,5 | 17.951 / 8.481 |
| Padişah paneli ve künyesi (41) | `padisahlar.js` | panel :8568; albüm :8645; künye :12879 | 49.416 | 1,0 | 0,4 / 0,4 | 607 / 8.580 |
| Savaş künyesi (204) | `savas_kunye_1..3.js` | :14424-14434, `ekKartHtml` savaş dalı | 150.102 | 3,2 | 1,2 / 1,4 | 22.478 / 189 |
| Antlaşma özeti (42) | `ANTLASMALAR` | :14360, :13088 | 8.616 | 0,2 | 0,1 / 0,1 | 3.039 / 537 |
| Antlaşma maddeleri, oynatıcı (61) | `antlasma_madde_*.js` | `js/antlasma_oynatici.js:216-223` | 267.361 | 5,6 | 2,1 / 2,4 | 155.315 / 0 |
| Antlaşma haritası etiketleri (70) | `ANTLASMA_HARITALARI` | `js/antlasma_harita.js:198, :320` | 7.643 | 0,2 | 0,1 / 0,1 | 30.528 / 0 |
| Devlet kronolojisi dizileri, `b` 816 bin + `d` 3,17 milyon (13.626) | `KRONOLOJI_*` | odak listesi :19575-19605; kart `maddeAc` :19638 | **3.988.467** | 83,8 | 31,0 / 35,8 | 2.592.367 / 32.696 |
| Künyeye gömülü kronoloji, üst sınır (13.289; neredeyse yalnız `b`) | `DEVLETLER[].kronoloji` | aynı; birleştirme :18325-18345 | 1.134.735 | 23,8 | 8,8 / 10,2 | 1.393.278 / 87.592 |
| Madde yer adı (çekirdek dahil) | `yer` | :13013, :19699 | 112.545 | 2,4 | 0,9 / 1,0 | yok |
| Madde kişi adları satırı (bütün satırlar; çoğu özel ad, ekranda nerede basıldığı tek tek izlenmedi) | `kisiler` | eşleştirme :12944 | 113.630 | 2,4 | 0,9 / 1,0 | yok |
| `gun` alanı kalıpları (rakamlar `#`; çekirdek dışında) | kronoloji | :13002 `[KOD]` | 149.073 (`OLAYLAR` dışında kalan 3.293 kalıp) | 3,1 | 1,2 / 1,3 | yok |
| Derin pencere adımları | `alt_kronoloji` | :20317-20400 | 8.316 | 0,2 | 0,1 / 0,1 | 1.706 / yok |
| Madde görselleri ve albüm altyazısı (34 kayıt) | `gorsel_madde.js` | :13959-14040; `js/album.js:34-63` | 17.307 | 0,4 | 0,1 / 0,2 | yok / 1.651 |
| Yerleşim adları (5.650) | `YERLESIMLER*` | harita etiketi, Dizin | 70.352 | 1,5 | 0,6 / 0,6 | yok |
| Başkent adları | `DEVLETLER.baskent` | :19568, :11672 | 25.586 | 0,5 | 0,2 / 0,2 | yok |
| Şehir etiketi 499 + bölge/dönem adı 20.512 | `sehirler.js`, `BOLGELER`, `DONEMLER` | harita; dönem adı akışta :17791 | 21.011 | 0,4 | 0,2 / 0,2 | yok |
| Savaş işareti, sefer, işgal/seri/ittifak adları (seferin 11.191'i `tarih_hassasiyet`; ekranda olduğu doğrulanmadı) | `SAVASLAR*`, `SEFERLER*` ve diğerleri | :5664, :7399, :5975 | 34.867 | 0,7 | 0,3 / 0,3 | 94.219 / 108.931 |
| Yol adı ve geçtiği yerler (482) | `YOLLAR_*` | balon :7984-8010 | 66.216 | 1,4 | 0,5 / 0,6 | 162.420 / aşağıda |
| D sınır balonu (ad, ilk 2 dayanak ve alıntı) | `D_SINIRLAR*` | `js/d_katman.js:520-590` | 35.501 | 0,7 | 0,3 / 0,3 | yok |
| Boşluk gerekçeleri (yaklaşık; `bos` bayraklı yerleşim 48 bin + `BOS_ALANLAR` 49 bin) | yerleşim `neden`, `BOS_ALANLAR` | :3786-3854, :11563 | ~97.000 | 2,0 | 0,8 / 0,9 | yok |
| **TOPLAM** | | | **9.135.748** | **191,9** | **71 / 82** | |

Ölçülmeyen küçük katmanlar: isyan taraması ve lejantları (:6411), koridor ve hukukî sınır balonları (:3255, :7975), yol üstü durakları, rötuş, kaynaklı halka balonu (:10758), açılış tablosunun kullanıcıya görünen alanları.

**Token varsayımı:** Türkçe girdi 2,7 karakter/token, her dil ayrı çağrı (21 kez). Çıktı uzunluk oranları mevcut madde çevirisinden **ölçüldü** (zh 0,37; ja 0,50; ar 0,87; en 1,14; el 1,23). Karakter/token oranları **varsayımdır** (Latin 2,8-3,8; Kiril 2,3; Arap 1,8-2,0; Yunan 1,8; Hint 1,4-1,5; zh 1,1; ja 1,2). Sistem istemi, JSON anahtarları, düşünme ve yeniden deneme **hariç**. İkinci göz denetimiyle gerçek tüketim kabaca 2-3 katı olabilir.

**Karşılaştırma (çevrilen):** `OLAYLAR*` + sayılan tek dizi 5.196 kayıt, 1,64 milyon karakter (iç not 73.850, kaynak 845.919). Devlet adı ve arayüz ayrıca.

### 2.3 Arayüz metni: sayılıyor ama ekranda Türkçe kalan yerler

- `[ÖLÇÜM]` `js/ceviri.js`, `en` arayüz sözlüğüyle node'da koşturuldu (`Ceviri.t`; DOM sınaması değil).

| Çevrilen | Aynen Türkçe dönen |
|---|---|
| `📄 Açıklama`, `👤 Künye`, `🔗 Sebep-Sonuç`, `tartışmalı`, `Öncesi:`, `Hükümleri:`, `📚 Kaynaklar (3) ·` | `Kaynak:`, `Kaynak: …`, `Komutan: …`, `Doğum: …`, `Övgü: …`, `Eşleri: …`, `Bitirdiği savaş: …`, `Geçtiği yerler: …`, `Bu günde 3 olay var — 1/3`, `Venedik ile · …`, `Muharebe`, `kesin`, `23 madde`, simgesiz `Sebep-Sonuç` |

- Neden `[KOD]`: `sozlukBul` (`js/ceviri.js:139-153`) birleşik dizgeyi ancak **bütün** parçalar sözlükteyse çevirir. Etiketin yanında veri varsa etiket de Türkçe kalır. Etkilenen yerler: kartvizit satırları (:12886-12935), `ekKartHtml` etiketleri, muharebe ve antlaşma kutuları (:13082-13090; `Osmanlı zaferi` dahil), isyan kutusu, yol balonu, oynatıcının `Kaynak:` satırı.
- **Çeviri tavanının 0 olması ekranın çevrildiğini göstermez.** Toplam sayısı ölçülmedi; `?ceviri_topla=1` ile tarayıcıda toplanmalı.
- 400 karakterden uzun metin düğümü atlanır (`:173`). `[ÖLÇÜM]` `index.html`'de böyle sabit düğüm 0.
- `data/` içindeki arayüz benzeri adlar (ör. `tur_siniflari.js`) çıkarıcıya girmez `[KOD]`; sayılmadı.

**İç not sızıntısı** `[KOD]`: `yolTikla` (:8025) ve :8044 `ic_not`u balona basıyor. `[ÖLÇÜM]` 482 yolun 482'sinde dolu, 288.223 benzersiz karakter; örnekler veri ekibine yazılmış çalışma notu. **Çevrilmemeli, gizlenmeli.** Katmanın varsayılan görünürlüğü sınanmadı.

### 2.4 Diğer yüzeyler

| Yüzey | Durum | Hacim `[ÖLÇÜM]` |
|---|---|---|
| `index.html` sabit metni, `js/*.js` dizgileri, tanıtım turu (`js/tanitim.js:236`), giriş pencereleri | Arayüz sözlüğünde; §2.3 istisnası | Dil başına 2.077-2.313 kayıt, 68-95 bin karakter (zh 31, ja 40 bin) |
| `js/marka.js`: başlık, meta, beta ve "yapım aşamasında" penceresi | Kendi sözlüğü: tr + en, ar, es, fr, ru, pt, de. `M[dil] \|\| M.tr` (`:124`). **21 yabancı dilin 14'ü Türkçe görür** `[KOD]` | Dil başına küçük blok; karakter sayılmadı |
| `gizlilik/index.html` | Yalnız Türkçe; dosya yorumu bunun bilinçli olduğunu ve metnin taslak olduğunu söylüyor | 5.486 karakter; 21 dilde 0,12 milyon. Hukukî onaysız makine çevirisi önerilmez |
| `forum/` | `ceviri.js` yüklenmiyor | HTML 395 karakter; metnin çoğu `forum.js`'te (37,9 KB dosya; dizge sayılmadı) |
| `yonetim/` | Yönetici sayfası; kapsam dışı | |
| Statik `m/` | TR (+ `en/m`) | 15.113 sayfa, 12,46 milyon karakter, 68,3 MB |
| Statik `en/` | yalnız İngilizce | 3.908 sayfa, 3,68 milyon, 19,8 MB |
| `devlet/`, `kisi/`, `tarih/`, `sehir/` | yalnız TR | 2.317 / 327 / 53 / 80 sayfa; 3,70 / 0,38 / 1,35 / 0,064 milyon |
| Şehir bilgisi (köken, önem, tarihçe, yapılar) | `app.js` bu alanları **okumuyor**; yalnız `arac/statik_sayfa.js:404-410` | 44.026 karakter; uygulama toplamına katılmadı |
| Kaynakça (`kaynak`) | Görünür (:20508; kart altı) | Yaklaşık 5,6 milyon (kronoloji 3,99; çekirdek 0,85; ek okuma 0,30; diğer). **Öneri: eser adları çevrilmesin**, yalnız "Kaynak" etiketi ve damga adları |

Statik sayfa sayıları etiket ve `head` atılarak bulundu; yinelenen menü metni dahildir.

## 3. Bugünkü dil dosyaları ve paket etkisi

`[ÖLÇÜM]` LF, gzip 6. 21 dil, 203 dosya (dizin dahil izlenen ad sayımı): **69,1 MB ham, 20,1 MB gzip**.

| | Ham | gzip |
|---|---|---|
| Dil başına en küçük / en büyük | 2,48 (zh) / 5,18 MB (hi) | 0,85 (id) / 1,15 MB (el) |
| `en` | 2,68 | 0,90 |
| bunun `arayuz` / `devlet` payı (gzip, en) | | 0,08 / 0,06 |
| `olay`, Türkçe karakter başına ortalama | 1,75 B | 0,493 B |

**Yeni türlerin tahmini** `[TAHMİN]` (olay oranlarıyla; kısa adlarda kayıt yükü daha büyük olduğundan iyimser):

| Grup | Dil başına ham / gzip | 21 dil, depoda ham |
|---|---|---|
| Ek okuma | 4,4 / 1,23 MB | 92 MB |
| Kişi + padişah | 0,6 / 0,16 | 12 |
| Savaş künyesi + antlaşmalar | 0,8 / 0,21 | 16 |
| Kronoloji dizileri | 7,0 / 1,97 | 147 |
| Künyeye gömülü kronoloji | 2,0 / 0,56 | 42 |
| Yer, gün, alt kronoloji, görsel, harita adları, kişi adları | 1,3 / 0,37 | 28 |
| **Toplam ek** | **16 / 4,5 MB** | **337 MB** (gzip toplamı 95) |

- `[KOD]` Bugün seçili dilin **bütün** dosyaları `document.write` ile `app.js`'ten önce, açılışı bekleterek iner (`js/ceviri.js:308-315`). Yeni türler bu yola eklenirse yabancı dilde ilk yük dil başına yaklaşık 0,96'dan 5,5 MB gzip'e çıkar. **Eklenmemeli.**
- 🔴 `[ÖLÇÜM]` `git ls-tree` toplamı bugün **1.067 MB** (data 505, denetim 355, m 68, veri-kaynak 55). 337 MB ek bunu yaklaşık 1,4 GB yapar. GitHub Pages'in yayımlanan site için 1 GB sınırı bildiğim kadarıyla belgelidir; **bugün doğrulanmadı** ve depo ağacının tamamının mı yayımlandığı ölçülmedi. Büyük dalgadan önce ölçülmeli (seçenekler: `denetim/`i yayından çıkarmak, çeviriyi ayrı depo ya da CDN'e almak). Git geçmişi de her yeniden yazımda büyür.

## 4. Plan

### 4.1 İlke: Türkçe veriyi yerinde değiştirme, çizerken çevir

`[KOD]` Eşleştiriciler Türkçe alanlara bakıyor. Yeni türler `uygula` gibi veriyi yerinde değiştirirse şunlar bozulur:

- `ANTLASMALAR.ad`, `SAVASLAR.ad`: `o.b_tr` içinde aranıyor (:13080, :13089, :13156).
- `KISILER.ad`, `PADISAHLAR.ad`: Türkçe `o.kisiler` ile eşleşiyor (:12675-12813); albüm portre bağı `p.ad` ile (:8645 sonrası).
- Antlaşma maddesi `ad` / `anahtarlar` (`js/antlasma_eslesme.js:41-48`) ve harita `antlasma_ad`.
- Yerleşim adı: `yerler[ad]`, başkent eşleme (:5004-5019), oynatıcıda `y.ad === yerAdi`.
- Kart metni üstünde Türkçe sınayan kodlar: `_tartismaVarMi` ("ayrış … kaydetmiyor"), `bulunamadı` öneki, `"yok"` / `"bilinmiyor"` değerleri.
- Madde `b`: §1.

**Öneri:** tek yardımcı `Ceviri.alan(tur, anahtar, yol, tr)`; özet tutmazsa Türkçe döner. Kart için doğal geçit `ekKartHtml`'in ilk satırındaki kopya (`_icNotAyikla`, :14756); başlık için `_ekSatirBasligi`. Koşul sınamaları Türkçe asılda kalmalı.

### 4.2 Türler ve anahtarlar

| Yeni tür | İçerik | Anahtar | Yükleme anı | Parçalama |
|---|---|---|---|---|
| `ekokuma` | kart, merak | `id` + alan yolu (`taraflar.0.komutan`) | `ekOkumaMerakYukle` ile; akordeon çeviri gelince çizilir | Tembel kaynak dosyasına göre ya da `id` özetine göre ~150-300 KB |
| `kart` | kişi, padişah, görsel | `id` | ilk kart ya da Dizin | 1-2 dosya |
| `belge` | savaş künyesi, antlaşma özet, madde, harita | `id` (özette `id` yoksa ad+gün) | düğme ya da kart açılınca | antlaşma başına |
| `krono` | `KRONOLOJI_*` ve gömülü maddeler; `b` ve `d` ayrı | **Türkçe metnin özeti** (kimlik kaymaz, mükerrer bir kez çevrilir) | `b`: devlet odağı açılınca; `d`: madde açılınca | devlet başına `b`; `d` için devlet ya da yüzyıl |
| `ad` | yerleşim, başkent, bölge, yol, kişi adı | Türkçe ad | harita hazır olduktan sonra, engellemeden | 1 dosya |

- 32 bit FNV, on binlerce dizgede çakışabilir (30 bin dizgede kabaca %10 olasılıkla en az bir çift `[TAHMİN]`). `krono` için yazım anında çakışma denetimi ya da 64 bit özet gerekir.
- Yer adları serbest makine çevirisine verilmemeli; sözlük ya da çevriyazı tablosu ve örnekle denetim gerekir. Arama (`js/arama.js`, `_yaDizinKur` :11870) hem Türkçe hem çevrilmiş adla çalışmalı.

### 4.3 Dosya değişiklikleri

- **`js/ceviri.js`:** `VERI`ye yeni türler; `ekle` bilinmeyen türde `console.error`; `alan()`; `yukle(tur, parça, geriÇağrı)` (dinamik `<script>`, bekleme kuyruğu; :14183'teki sonsuz özyineleme dersi geçerli); parça dizini dil başına ayrı dosya (21 dilin yüzlerce parçası `ceviri_dizin.js`'e yazılmasın). Statik üç tür bugünkü yolda kalır.
- **`arac/ceviri_cikar.js`:** tembel listeyi `app.js`'ten okuyup yüklesin (ölçüm betiğim böyle yaptı). **Görünen alan listesi tek bir ortak dosyada** dursun; çıkarıcı ve çizici aynı listeyi kullansın, `ic_not` ve `kaynak` dışarıda kalsın. Kronoloji için `app.js`'in birleştirme ve gizleme süzgeçleri uygulanmalı.
- **`arac/ceviri.py`:** `TURLER` genişlesin; `kiyasla`, `uygula`, `kuyruk`taki yalnız `olay`a özgü çok alanlı dal genelleşsin; `yaz_tur` her büyük türü bölsün; `--parca` / `--sinir` iş dilimleme; `temizle` yeni türleri kapsasın. `ozet()` ile JS birebir kalmalı.
- **Çeviri tavanı:** yeni tür açıldığı gün eksik yaklaşık 191 milyon karakterlik borçtur. Her yeni Türkçe kart da 21 dile borç yazar. Öneri: tür **dil × tür bazında "tamamlandı" ilan edilene kadar yalnız raporlansın**; tamamlanan çift tavana 0 ile girsin. Tamamlandıktan sonra yeni içerik için kural Emre'ye sorulmalı: bloke mi, uyarı mı. Aksi hâlde içerik ekibi her push'ta durur ya da tavan sürekli açılır.
- **Yayın kapısı:** parça dosyaları yetim veri denetimine tanıtılmalı; her parçaya `node --check`; bağ sınaması (§1'deki betik: her dilde kart-madde çifti Türkçeye eşit olmalı).
- **Sağdan sola ve yazı tipi:** `ar`, `fa`, `ur` için yeni kart, tablo ve balonlar tarayıcıda sınanmalı.

### 4.4 Öncelik ve iş gücü

İş gücü `[TAHMİN]`: bir ajan partisi 35 bin Türkçe karakter × 1 dil; parti başına yaklaşık 10 dakika; 3 paralel ajan. **Hız ölçülmedi**; ilk 20 partide ölçülüp güncellenmeli. İkinci göz denetimi hariç. Model: bellek notuna göre çeviri Sonnet.

| Dalga | İş | TR karakter | Parti (21 dil) | 3 ajanla kesintisiz saat | Kod işi |
|---|---|---:|---:|---:|---|
| **0** | §1 `b_tr` düzeltmesi; yol `ic_not` gizleme; birleşik etiketleri parçalı çevirme (`Ceviri.t("Kaynak") + ": "`); `marka.js`'e 14 dil | yalnız yeni arayüz dizgileri | küçük | birkaç | Yarım-1 gün; yeni dizgeler arayüz tavanı 0 olduğundan aynı commit'te 21 dile çevrilmeli |
| **1** | Altyapı + `ekokuma` (önce `en`, tarayıcı kabulü, sonra 20 dil) | 2.496.480 | ~1.500 | ~83 | 2-3 gün |
| **2** | Padişah, kişi, savaş künyesi, antlaşmalar, görsel | ~782.000 | ~470 | ~26 | 1-2 gün (`belge`, `kart`) |
| **3a** | Kronoloji **başlıkları** (dizi `b` + gömülü) | ~1.941.000 | ~1.165 | ~65 | 1-2 gün (`krono`, süzgeçler) |
| **3b** | Kronoloji açıklamaları (`d`) | ~3.180.000 | ~1.910 | ~106 | yok |
| **4** | Yer adları, `yer`, `gun`, kişi adları, harita katman metinleri | ~734.000 (§2.2'nin kalanı) | ~440 (sözlükle daha az) | ~24 | 1-2 gün (arama dahil) |
| **Toplam** | | 9,14 milyon | **~5.500** | **~300** | 6-10 gün |
| Sonra | Statik sayfalar, gizlilik, forum | | | | ayrı karar |

- Dil sırasını ziyaret ölçümüne göre vermek dalga 1'i erken yayına sokar; ziyaret verisine bakılmadı.
- **Statik sayfalar:** 21 dile açmak yüz binlerce sayfa ve `[TAHMİN]` TR kümesinin ağırlığıyla (yaklaşık 85 MB) 1,5 GB üstü HTML demektir. Bu barındırmada **önerilmez**; en çok `en` kapsamı tamamlansın.

### 4.5 Riskler

1. **Eşleştirme kopması** (§1, §4.1): sessizdir, hata vermez. En büyük risk.
2. **Barındırma ve depo boyutu** (§3).
3. **Açılış süresi:** yeni türler `document.write` yoluna girerse.
4. **Kalite:** 196 milyon karakterlik çıktı insan denetimine sığmaz; sayı, tarih ve özel ad korunumu için otomatik sınama ve örneklem gerekir. `kesinlik` ve "beyanlı yaklaşıklık" dili yumuşamamalı. Edebiyat alıntıları ayrıca ele alınmalı (telif ve özgün metin).
5. **Hareketli hedef:** kartlar ve kronoloji büyüyor (yeni devlet kartları planlı); her metin değişikliği 21 dilde bayat üretir. Büyük dalgadan önce metin temizliği (iç nota benzeyen cümleler) yapılmalı; yoksa onlar da 21 kez çevrilir.
6. **Araç belleği:** çıkarıcı bugün de yaklaşık 0,5 GB (`ceviri.py:201`); kapsam büyüyünce KASA'da push kapısı bellek sorunu yaşayabilir.
7. **Git:** 21 dil × yüzlerce parça aynı anda yazılırsa çatışma ve `ceviri_dizin.js` çakışması; dil başına ayrı dal ve dizin gerekir.

## 5. Ölçülemeyenler

- Hiçbir davranış tarayıcıda sınanmadı (kart kaybı, etiketler, yol balonu, RTL, yükleme süresi dahil).
- `ceviri.py denetim`, `denetle.py`, `denetle_yayin.py` koşturulmadı.
- Kronolojinin gerçekten ekrana çıkan kısmı (çalışma anı süzgeçleri uygulanmadı).
- §2.2 altında sayılan küçük katmanlar, `forum.js` ve `marka.js` karakterleri, birleşik etiketlerin toplam sayısı.
- Kart bağı kaybı 6 dilde ve yalnız `OLAYLAR*` maddelerinde ölçüldü; savaş künyesi ve antlaşma özeti bağı sayılmadı.
- Gerçek token tüketimi, ajan hızı, GitHub Pages sınırı ve gerçek aktarım boyutu.

Ölçüm betikleri bu raporla aynı klasörde: `yukle.js`, `olc.js` (sonuç `olc.json`), `olc2.js`, `olc3.js`, `olc4.js`, `hesap.js`, `bag.js`, `bag2.js`. Not: `olc.js`'in `yer_adi` ve yerleşim `neden` satırları yalnız taban diziyi sayıyor; doğrusu `olc2.js` ve `olc4.js`'tedir.
