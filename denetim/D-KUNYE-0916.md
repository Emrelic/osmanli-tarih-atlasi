# D-KUNYE — 29 Ekim 1923 dünya devlet/sömürge/manda kapsam ölçümü

Oturum: D-KUNYE (Sonnet Hazır Kıta 1002) · koordinatör 1.MURAT · 16 Eylül 2026
Görev: `oturumlar/D-1923-0916.md` "DÜNYA KADROSU" tablosu, D-KUNYE satırı.
Yazdığım dosyalar: bu rapor + `denetim/TASLAK-KUNYE-D-0916.json` (75 taslak künye).
**`data/devletler.js` ve `arac/renkler.py`'ye YAZMADIM** — şartname gereği.

## 1. Yöntem

1. `data/devletler.js`'teki 639 künyeden `f <= 1923-10-29 <= t` olanları çıkardım (node ile eval).
2. `arac/renkler.py`'deki `BOYALAR` sözlüğünün 588 anahtarını regex ile çıkardım.
3. Her aktif künye için `harita` alanı varsa onu, yoksa `id`yi `BOYALAR` anahtarlarıyla eşleştirdim
   (CLAUDE.md §3.5.0: "renk `harita:` anahtarına bakar, `id`ye DEĞİL").
4. Wikipedia'nın **tam bu tarih için hazırlanmış** sayfasını (`List of sovereign states in 1923`,
   gerçek kaynağı `List of sovereign states in the 1920s`) kaynak alarak 1923-10-29'da var olan
   bütün egemen devlet + Milletler Cemiyeti mandası + sömürge/protektora/dominyon listesini
   çıkardım, İngiltere'nin bağımlı toprak listesini ayrıca genişlettim (76 kalemlik kontrol listesi).
5. Bu kontrol listesindeki her kalemi `devletler.js`'in TAMAMINDA (yalnız aktif pencere değil,
   639 künyenin hepsinde) id/ad/harita alanlarında arayarak "künyesi var mı" diye taradım
   (CLAUDE.md §4 Türkçe yazım ekseni dersi: tahmin edilen id aranmaz, gerçek veri taranır).

## 2. 🔴 Yan bulgu — üç haneli yıl tuzağı (CLAUDE.md §3.5.0) canlı örnek

İlk taramada `d.f <= "1923-10-29"` string karşılaştırması kullandım ve **118** aktif künye buldum.
`"897-01-01" <= "1923-10-29"` gibi ifadeler `"8" > "1"` olduğu için **YANLIŞ** (`False`) dönüyor —
bu tam olarak `CLAUDE.md §3.5.0`'ın kendi tarif ettiği tuzak. Yıl alanını 4 haneye `pad` edip
tekrar ölçünce sayı **120**'ye çıktı: `yemen-zeydi` (f:897) ve `almanya` (f:962) ilk turda
yanlışlıkla "1923'ü kapsamıyor" görünmüştü, ikisi de aslında kapsıyor.

**`data/devletler.js`'te 3 (ya da daha az) haneli yıl taşıyan TOPLAM 18 künye var** — herhangi bir
alet bunlarla naif string karşılaştırması yaparsa aynı hataya düşer:
`bizans`(330) · `venedik`(697) · `papalik`(756) · `fransa`(987) · `sirvansah`(861) ·
`yemen-zeydi`(897) · `almanya`(962) · `dubrovnik`(700) · `nube`(543) · `song`(960) ·
`goryeo`(918) · `poni`(977) · `kanem-bornu`(800) · `iskocya`(843) · `bretanya`(939) ·
`navarra`(824) · `pagan`(849) · `sunda-pajajaran`(669).
📌 Bu listeyi burada bırakıyorum ki D2-D5 dalga oturumları kendi 1923-10-29 filtrelerini
yazarken aynı tuzağa düşmesin.

## 3. Sayılar

| Ölçüm | Sayı |
|---|---|
| `devletler.js` toplam künye | 639 |
| 1923-10-29'u kapsayan künye (`f<=gün<=t`, pad düzeltmeli) | **120** |
| Künyesi var, `BOYALAR`de rengi YOK | **3** |
| Dünya kontrol listesi (Wikipedia 1923 + İngiliz bağımlı toprak genişletmesi) | 76 kalem |
| Kontrol listesinden `devletler.js`'te HİÇ künyesi bulunmayan | **64** kalem → **75 taslak künye** (bazı kalemler birden çok ayrı koloniye bölündü, örn. "İngiliz Batı Hint" → Jamaika/Trinidad-Tobago/Bahama/Barbados/Leeward/Windward/Bermuda) |

## 4. Künyesi var ama rengi yok (3)

`arac/renkler.py`'nin `BOYALAR` sözlüğünde ne `id` ne `harita` anahtarı karşılığı yok — bu üçü
haritada **hiç boyanmıyor** demektir (motor kimliği bulamayınca gövde çizilmiyor ya da varsayılan
renge düşüyor, `uret_petek.py:363-368 _HARITA_ALT`):

```
oniki-ada-italyan       İtalya'nın Oniki Ada İşgali
cezayir-fransiz         Fransız Cezayir İşgali
avusturya-cumhuriyet    Avusturya Cumhuriyeti (I. Cumhuriyet)
```
Bunlar TASLAK değil — künye zaten `devletler.js`'te var, yalnız `renkler.py`'ye bir HEX eklenmesi
gerekiyor (RENK/UYGULA işi).

## 5. Eksik künye — 75 taslak (`denetim/TASLAK-KUNYE-D-0916.json`)

Bölgelere göre dağılım:

```
Afrika (kuzey/bati/dogu/orta/guney)   26
Amerika (kuzey/orta/karayip)          11
Asya (guney/dogu/guneydogu)           13
Okyanusya                              7
Avrupa mikro-devletler                 6
Arabistan/Ortadogu                     3
```

Her taslak kayıt şu alanları taşır: `id · ad · bolge · tur_onerisi · f · t(=1923-10-29) · ozet ·
harita(null) · kaynak("bulunamadı — taslak")`. **Hiçbiri `kronoloji:` dizisi taşımıyor** — bu bir
taslak, tam künye değil; UYGULA ya da ilgili D-oturumu akademik kaynakla (TDV kapsamıyorsa
Iranica/Cambridge/üniversite yayını, CLAUDE.md §4 kırmızı çizgi) dolduracak.

### 🔴 Tür sözlüğü eksiği

`data/devletler.js` başındaki `tur` kapalı sözlüğü (`imparatorluk|krallik|prenslik|dukalik|
cumhuriyet|hanlik|beylik|devlet|sultanlik|ocaklik|hanedanlik|isyan|gecici-isgal|sehzadelik`)
**20. yüzyıl sömürge/manda kavramlarını karşılamıyor.** Taslakta önerdiğim yeni değerler:
`koloni · manda · protektora · dominyon · federasyon-koloni · kiralik-bolge · serbest-sehir ·
bagimli-toprak · seyhlik · emirlik`. CLAUDE.md kendi kuralı gereği ("yetmezse yeni tür eklenebilir,
bu listeye de yazılmalı") bu, `VERI-YAPISI.md`'ye de işlenmeli — UYGULA'nın kararı.

### 🟡 Üç granülarite kararı — ben karar vermedim, ilgili D-oturumuna bırakıyorum

1. **`ingiliz-uganda-protektorasi`** (taslak) ile mevcut **`buganda`** künyesi (zaten var,
   1923'ü kapsıyor) haritada nasıl bir arada duracak? Buganda, daha geniş Uganda
   Protektorası'nın İÇİNDE özerk bir krallıktı (Bunyoro/Toro/Ankole de protektoranın parçası
   ama künyesi yok). D4-AFRIKA karar versin.
2. **`straits-settlements`** (taslak) mevcut **`ingiliz-malaya`** künyesiyle örtüşüyor olabilir —
   D5-ASYA taneciği belirlesin.
3. **`fransiz-antilleri`**'ni tek künyede mi (taslakta öyle yaptım) yoksa Guadelup/Martinik ayrı mı
   tutmalı — D5-AMERIKA karar versin.

### ⚠️ Pencere sınırında iki kayıt — ayrıca doğrulanmalı

- **`fiume-serbest-devleti`**: 1923-10-29'da resmen hâlâ Milletler Cemiyeti himayesinde "serbest
  devlet" ama 1922 darbesinden beri fiilen İtalyan kontrolünde; resmî ilhak 1924-01-27 (atlasın
  ufkunun 11 ay ÖTESİNDE). Hangi durumun 1923-10-29'u temsil ettiği kaynakla doğrulanmalı.
- **`ingiliz-guney-rodezya`**: öz-yönetimli koloni statüsü tam **1923-10-01**'de başladı — atlasın
  ufkuna yalnız 28 gün kala. Tarih doğru ama pencereye bu kadar yakın bir geçiş özellikle
  kaynakla teyit edilmeli (WebSearch ile doğruladım: ilhak 1923-09-12, öz-yönetim 1923-10-01).

## 6. Bilinmeyen/araştırılmamış bırakılanlar

- Küçük Pasifik/Karayip adaları (örn. Tonga zaten künyeli, ama Cook Adaları, Niue gibi çok küçük
  bağımlı topraklar taslağa alınmadı — okyanusya'da yalnız kara sınırı olan/önemli olanlar seçildi).
- Küçük Afrika iç bölgeleri (örn. Fransız Sudanı'nın AOF içindeki alt-parçaları) ayrı künye
  önerilmedi, AOF/AEF tek federal künye olarak taslaklandı.
- Filipinler'in 1571-1898 arası İspanyol dönemi de künyesiz görünüyor (`filipin-racaliklari`
  1571'de bitiyor, `filipinler-abd` 1898'den başlıyor, arada 327 yıl boşluk) — bu benim
  kapsamımın (1923 kesiti) dışında ama HARITA-VERI/UYGULA'ya bildiriyorum, ayrı bir "sessiz
  boşluk" (CLAUDE.md §3.5) olabilir.

## 7. İstek

Taslak `denetim/TASLAK-KUNYE-D-0916.json`'da hazır. UYGULA'dan istediğim:
1. 75 taslağı akademik kaynakla doğrulayıp `data/devletler.js`'e işlemek (ya da bölge
   oturumlarına devretmek).
2. 3 renk-eksik künyeye (`oniki-ada-italyan · cezayir-fransiz · avusturya-cumhuriyet`) HEX atamak.
3. Tür sözlüğüne yeni değerleri eklemek ya da eklenmeyecekse bana alternatif söylemek.

Teslim mesajını tahtaya (`M-????`) ayrıca yazıyorum.
