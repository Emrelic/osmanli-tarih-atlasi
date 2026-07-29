# Oturum 12 — Batı ve Kuzey Avrupa yerleşim katmanı

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-12-BATI-AVRUPA.md dosyasını oku ve içindeki görevi yap

---

## Bu işin sebebi — ölçüldü

Haritanın kutusu içinde kalan bölgelerin nokta yoğunluğu sayıldı:

| Bölge | Nokta |
|---|---|
| Anadolu | 200 |
| Balkanlar | 198 |
| İran-Irak | 169 |
| **Britanya ve İrlanda** | **3** |
| **Fransa** | **6** |
| **İskandinavya** | **7** |
| **İberya** | 11 |
| İtalya | 47 |
| Orta Avrupa | 44 |
| Doğu Avrupa / Rusya | 43 |

Batı ve Kuzey Avrupa neredeyse boş. Bunlar `box(-12, 1.5, 62, 62)` kutusunun
**içinde**, yani eklenen her nokta **anında haritada görünür** — Asya'nın aksine.

Sonucu görünür: Fransa'nın 6 noktası bütün ülkeyi temsil ediyor, Britanya'nın
3 noktası bütün adayı. Petekler devasa ve sınırlar coğrafyayı takip etmiyor.
Ayrıca denetim raporunda B-6 ve B-7 bulguları tam bu yüzden: **Jutland
Almanya boyalı, Bretanya İngiltere boyalı ve batı ucu hiç boyanmamış.**

## Senin işin

Batı ve Kuzey Avrupa'nın yerleşim katmanını kurmak. **Hedef 200-260 nokta:**

| Bölge | Bugün | Hedef |
|---|---|---|
| Britanya ve İrlanda | 3 | 30-40 |
| Fransa | 6 | 40-50 |
| İberya (İspanya, Portekiz) | 11 | 35-45 |
| İskandinavya + Danimarka | 7 | 30-40 |
| Alçak Ülkeler ve Batı Almanya | — | 30-40 |
| İtalya (mevcudu sıklaştır) | 47 | +20 |

**Öncelik:** önce **B-6 ve B-7'yi kapatan** noktalar — Jutland yarımadası
(Danimarka: Ribe, Viborg, Aarhus, Aalborg) ve Bretanya (Rennes, Nantes, Brest,
Quimper). Bu ikisi ölçülmüş, adı konmuş hatalar.

## Yazabileceğin tek dosya

**`data/yerlesimler_avrupa.js`** — sen oluşturacaksın:

```js
window.YERLESIMLER_AVRUPA = [
{ ad:"Rennes", tur:"sehir", lat:48.114, lon:-1.680, g:0, k:0,
    s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},{f:"1532-08-13",t:"1923-10-29",d:"fransa"}],
    d:[] },
];
```

**Dokunma:** `data/yerlesimler.js`, `data/yerlesimler_iran.js`,
`data/yerlesimler_ortaasya.js` (başka oturumların) · `arac/` altındaki her şey ·
`data/devletler.js`, `kisiler.js`, `savaslar.js`, `olaylar*.js` ·
`index.html`, `js/app.js` · kök `*.md`.

**Commit atma. `arac/uret_petek.py`'yi çalıştırma** — üretim ~2,5 saat sürüyor.

## Devlet kimlikleri

`arac/renkler.py`'de tanımlı olmayan kimlik yazarsan bölge **boyanmaz**.
Mevcut olanlar: `fransa` · `ingiltere` · `ispanya` · `portekiz` · `granada` ·
`hollanda` · `almanya` · `isvec` · `danimarka` · `norvec` · `italya` ·
`napoli` · `papalik` · `venedik` · `ceneviz` · `sardinya` · `toskana` ·
`milanoduka` · `avusturya` · `lehistan` · `letonya` · `litvanya` · `finlandiya`

**Eksik gördüklerini EKLEME, BİLDİR.** Bu coğrafyada gerekecek olanlar
muhtemelen: Bretanya Dükalığı, Burgonya, Savoya, İskoçya, İrlanda beylikleri,
Aragon/Kastilya ayrımı, Navarra, Kutsal Roma'nın büyük prenslikleri
(Bavyera, Saksonya, Brandenburg), İsviçre Konfederasyonu, Cenova dışı İtalyan
şehir devletleri (Siena, Ferrara, Mantua), Teutonic Şövalyeleri, Novgorod.
Her biri için `oturumlar/OTURUM-12-ILERLEME.md`'ye yaz: kimlik önerisi, tam ad,
varlık aralığı, merkez, kaynak. Entegrasyon oturumu ekleyecek.

⚠️ Renkler komşuluk çizgesine göre dağıtılıyor (DSATUR ile 7 renk yetiyor,
10-12 kullanılıyor); rastgele eklenen renk o dengeyi bozar. Bu yüzden ekleme.

## Kaynak kuralı
Bu coğrafya TDV'nin kapsamadığı alan; **standart akademik referans yeterli.**
TDV yalnız Osmanlı temaslı konularda (Gırnata, Endülüs, Fransa-Osmanlı
ittifakı) birincil.

**Tarih uydurma.** Gün bilinmiyorsa `YYYY-01-01` (konvansiyon: yalnız yıl
biliniyor demektir). Şehir sonradan kurulduysa `kur:`, yok olduysa `bit:` yaz —
motor `kur:`'u bugün okumuyor (bilinen borç, `MIMARI.md` §3.1) ama veri ileriye
dönük hazırlanıyor.

**Ad yazımı:** Türkçe tarih yazımında yerleşik karşılık varsa onu kullan
(Beç değil Viyana; Frengistan değil Fransa; Londra, Paris, Lizbon, Kopenhag).
Yoksa özgün adı bırak, parantezle açıklama ekleyebilirsin.

## Kendi kendini denetle
```bash
py arac/denetle_kapsama.py --esik 120      # Avrupa içi normal ölçüt
py arac/denetle.py                          # üç değişmezi bozmadığını gör
```
Ayrıca kendi betiğinle: nokta karada mı (`veri-kaynak/ne_10m_land.geojson`),
3 km içinde mükerrer var mı.

## Bitirdiğinde
Kaç nokta eklediğini, Jutland ve Bretanya'nın kapsandığını gösteren ölçümü ve
**eklenmesini istediğin devlet kimliklerinin listesini** entegrasyon oturumuna
bildir. **Commit etme.**
