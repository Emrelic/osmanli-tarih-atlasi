# D-GEOARAC — Antlaşma haritası VERİ ALETİ · DALGA-0055 §B · 16 Eylül 2026

Görev: her antlaşma için (tarih ± pencere, taraflar) `data/yerlesimler*.js`'ten el değiştiren
yerleri çıkarmak; önce Osmanlı antlaşmaları.

## Kaynak seçimi

`~414` madde (olaylar/kronoloji, adında "antlaşma/barış") · `~270` künye kronolojisi ·
`ANTLASMALAR` 41 · ek okuma `~30` ölçülmüştü. Bu turda **yalnız `data/savaslar.js`
`window.ANTLASMALAR`** (41 kayıt) işlendi — sebebi taraflılık DEĞİL, **veri kalitesi**:
bu 41 kayıt zaten yapılandırılmış `taraf` (devletler.js kimlik listesi) ve `t` (gün
hassasiyetli tarih) taşıyor, hepsi Osmanlı antlaşması (`taraf[0]` hep `osmanli`/
`tbmm-turkiye`). **Öteki ~684 kalem** (kronoloji serbest metni + künye kronolojisi + ek
okuma) bu turda İŞLENMEDİ — taraf/tarih çıkarımı serbest metinden yapılacağı için ayrı
bir (ve çok daha riskli) doğal dil eşleştirme gerektiriyor; kapsam dışı bırakıldı, aşağıda
"sıradaki iş" olarak not edildi.

## Yöntem

1. `arac/girdi.py`'nin **üretimde kullanılan** `yukle()` fonksiyonuyla 3855 yerleşim
   okundu (D023 — kendi ayrıştırıcım yazılmadı).
2. Her yerleşimin `d:`/`v:`/`s:` dizileri TEK bir sahiplik zaman çizelgesine birleştirildi
   (`d` → `osmanli`, `v` → `period.kid`, `s` → `period.d`).
3. Ardışık iki dönem arasında sahip değişiyorsa (ve boşluk ≤3 yıl — daha büyük boşluk
   muhtemelen ilişkisiz "sahipsiz ara dönem", D020) bu bir **el değiştirme olayı** sayıldı.
   Toplam: **10.591 olay** (bütün veri, bütün tarihler — yalnız antlaşma çevresindekiler
   değil).
4. `window.ANTLASMALAR` (41 kayıt, kendi bracket-eşleştiricim ile hem ana dizi hem iki
   `.push()` bloğu birleştirilerek okundu — `_cevir` savaslar.js'te ANTLASMALAR'ın SON
   dizi olmadığını bilmiyor, o yüzden doğru sınırı ayrıca bulundu).
5. Her antlaşma için **±60 gün** pencere (dosyanın kendi `antlasma_haritalari.js`
   docstring'indeki mevcut kural) ve bir ucu antlaşmanın **ev sahibi** tarafı
   (`taraf[0]`) olan, öteki ucu da `taraf` listesinde geçen el değiştirme olayları
   **onaylı eşleşme** sayıldı. Öteki uç taraf listesinde YOKSA ayrı bir **"aday"**
   listesine düşürüldü (bkz. Bulgular §3) — kaynaksız/kesin olmayan hiçbir şey
   `eslesen_yerlesimler`e YAZILMADI.

## Sonuç sayıları

```
antlaşma kaydı (ANTLASMALAR)         41
eşleşme YOK ("bulunamadı")           21
  bunların "toprak el değiştirmedi"   8   (Zitvatorok·Hünkâr İskelesi·Balta Limanı·
                                            Kerden·Sırbistan özerklik·Serav·Ziştovi·
                                            Akkerman·Londra Boğazlar — DOĞRU sıfır)
  bunların toprak İDDİASI VAR        13   (§3'e bakın — gerçek boşluk olabilir)
eşleşme VAR                          20
toplam eşleşen yerleşim kaydı       217
```

Çıktı: `denetim/_ANTLASMA-HARITA-CIKTI-0916.json` — **İNCELEME dosyası**,
`data/antlasma_haritalari.js`'e YAZILMADI (bkz. §4, D-KATMAN'la şema mutabakatı gerekiyor).

## Bulgular

### 1. 8 "bulunamadı" kaydı DOĞRU sıfır

`topraklar` metni açıkça "toprak el değiştirmedi" / "toprak konusu yok" diyor
(Zitvatorok, Hünkâr İskelesi, Balta Limanı, Londra Boğazlar Sözleşmesi, Kerden, Sırbistan
özerklik fermanı, Serav, Ziştovi, Akkerman). Alet bunları doğru biçimde boş bıraktı —
sahte bir eşleşme UYDURMADI.

### 2. 🔴 `ANTLASMALAR`in `taraf` listesi Kars antlaşmasında EKSİK — somut bulgu

**Kars (1921-10-13)** kaydının `taraf` alanı yalnız `["tbmm-turkiye"]` — Sovyet Rusya ve
Gürcistan YOK. Gevşetilmiş "aday" taramasında **16 yerleşim** tam **gün gününe**
(`gun_farki: 0`) `sovyet-rusya → tbmm-turkiye` geçişi gösteriyor (Şavşat, Posof, Hanak…
Kars ilinin ilçe merkezleri). Bu, antlaşmanın taraf listesi tamamlansa **kesin
eşleşecek** güçte bir sinyal. **Öneri:** `data/savaslar.js`teki Kars kaydına
`"sovyet-rusya"` (ve varsa Gürcistan kimliği) eklensin — bu benim dosyam değil, öneri
olarak bırakıyorum, YAZMADIM.

### 3. Kalan 12 "toprak iddialı ama eşleşmeyen" kayıt — TARANMADI, borç olarak kayıtlı

Amasya (1555) · Ferhad Paşa (1590) · Nasuh Paşa (1612) · Kütahya Sözleşmesi (1833) ·
Londra/Mısır (1840) · İskenderiye Konvansiyonu (1840) · Paris (1856) · Sevr (1920) ·
Mudanya Mütarekesi (1922) · Lozan (1923). Gevşetilmiş taramada da 0 aday çıktı — ya
ilgili yerleşimlerin (Tebriz, Karabağ, Şirvan, Gürcistan; İzmir, Doğu Trakya, Oniki Ada…)
dönem tarihleri ±60 gün penceresinin dışında (yuvarlak `YYYY-01-01` gibi), ya da o
yerleşimler veri setinde `s:`/`d:` ile bu geçişi hiç taşımıyor. **Tek tek doğrulanmadı**
— zaman kısıtı. Bir sonraki tur için: pencereyi antlaşma bazında genişletmek (örn.
Lozan/Sevr için 1919-1923 tüm aralığı) ya da yerleşim adı ↔ `topraklar` metni çapraz
taraması (Sevr'in "İzmir", "Doğu Trakya" gibi somut adları var, aranabilir).

### 4. ⚠️ Bir "aday" YANLIŞ TARAFA sızdı — pencere çakışması örneği

**Londra Boğazlar Sözleşmesi (1841-07-13)** için 4 aday bulundu (Cidde/Yenbu/Bedir,
`misir-kavalali → osmanli`, 1841-05-24, gün farkı -50) — ama bu antlaşmanın kendi
metni "toprak konusu yok" diyor. Gerçek sahip muhtemelen **İskenderiye Konvansiyonu**
(1840-11-27, 43 gün önce, Hicaz'ın Mehmed Ali'den merkeze dönüşünü içeriyor) —
iki antlaşmanın ±60 günlük pencereleri ÇAKIŞIYOR ve Cidde/Yenbu/Bedir'in geçişi her
ikisinin de penceresine düşüyor. **Ders:** pencereler çakıştığında "aday" listesi
kör bir otomatik atamayla KESİN sayılmamalı — bu proje kültüründe (`D024`: "iki ayrı
kusur tek satırda raporlanırsa çareleri ters olsa bile aynı çare uygulanır") aynı
mantık burada da geçerli: bitişik iki antlaşmanın adayları AYRI AYRI okunmalı.

## Sıradaki iş (yapılmadı, kapsam dışı bırakıldı)

- Kronoloji serbest-metin taraması (~414 madde) ve künye kronolojisi (~270) — doğal
  dil taraf/tarih çıkarımı gerektiriyor, bu turun kapsamı dışında.
- 12 taranmayan "toprak iddialı" kaydın tek tek incelenmesi (§3).
- Kars taraf listesinin tamamlanması (koordinatörün/1.MURAT'ın kararı — `data/savaslar.js`
  benim dosyam değil).

## Şema — D-KATMAN ile mutabakat gerekiyor

`data/antlasma_haritalari.js`'teki Karlofça pilotu **poligon tabanlı** (`bolgeler[].sinir_id`
→ `data/hukuki_sinirlar.js`). Bu alet **yerleşim NOKTASI tabanlı** çıktı üretiyor (41
antlaşmanın yalnız 1'inde — Karlofça — hukuki_sinirlar.js kaydı var; öteki 40'ında yok
ve muhtemelen olmayacak, o kadar el emeği bu kapsamda yok). İki temsil türünü
(poligon/nokta) aynı `ANTLASMA_HARITALARI` dizisinde nasıl birlikte tutacağımızı
D-KATMAN'la tahtadan konuşmam gerekiyor — bu rapor onun için hazırlandı, veri henüz
paylaşılan dosyaya YAZILMADI.
