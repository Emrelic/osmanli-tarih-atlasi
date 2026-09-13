# ŞEMA — `data/gorsel_madde.js` (`window.GORSEL_MADDE`)

**KITA 24 · 13 Eylül 2026 · paket 0045 H-0004/H-0005 · KESİNLEŞTİ, HERKES'e bağlayıcı**

Taban: `denetim/ONERI-GORSEL-0907.md` (7 Eylül, şema önerisi — içerik hiç
yazılmadı) + `oturumlar/KITA-24-GORSEL-HATTI-0045.md`. ONERİ'nin `gorsel:`i
kronoloji maddesine **alan olarak eklemeyi** öneriyordu; şartnamem bunu
**değiştirdi**: madde dosyalarına (`olaylar*`, KITA 14'ün) DOKUNULMUYOR,
bağlama EKOKUMA'nın kendi deseniyle (`olay:[...]`, app.js:6521) yapılıyor —
**altyapı zaten var (D045), yeni bir bağlama alanı icat edilmedi.**

## Alanlar (hepsi tek kayıt biçiminde, EKOKUMA/MERAK ile birebir aynı dosya deseni)

```js
window.GORSEL_MADDE = [
  {
    id:            "1453-05-29-istanbul-fethi",   // benzersiz, dosya adının slug'ı
    tur:           "madde",                        // "madde" | "portre" — raporlama/filtre
    olay:          ["1453-05-29"],                  // t: değerleriyle BİREBİR eşleşir (EKOKUMA deseni)
    url:           "assets/gorseller/1453-05-29-istanbul-fethi.jpg",  // YEREL (ölçüldü, bkz. aşağı)
    baslik:        "Fâtih'in İstanbul'a girişi",     // GÖRSELİ tarif eder, OLAYI değil
    gorsel_alt:    "Fatih'in beyaz atla şehre girişini betimleyen 1908 tablosu",  // 🔴 ZORUNLU
    eser:          "Mehmed the Conqueror Entering Constantinople",
    sanatci:       "Fausto Zonaro",
    yil:           "1908",
    lisans:        "PD-old-100",                    // 🔴 ZORUNLU, KAPALI JETON (aşağı)
    gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:...",  // 🔴 ZORUNLU, dosya sayfası
    kesinlik:      "donem-sonrasi-tasvir"            // 🔴 ZORUNLU, dürüst beyan
  }
];
```

**Portre kayıtları AYNI şemayı kullanır**, tek fark `tur:"portre"` ve
`olay:[...]`in o paşanın adının geçtiği HER maddenin tarihini taşıması
(kendi vefatı dahil, sınırlı değil) — `kisi_id` alanı raporlama için
eklenebilir ama bağlama YİNE `olay:[...]`den geçer, mevcut padişah-portre
mekanizmasına (app.js:6392, yalnız padişah adı eşleşmesiyle çalışıyor,
ÖLÇÜLDÜ) dokunulmuyor.

## Zorunlu / opsiyonel

| Alan | Zorunlu | Boşsa ne yazılır |
|---|---|---|
| `id` · `olay` · `url` · `baslik` | 🔴 evet | — |
| `gorsel_alt` | 🔴 evet (ONERİ §② kararı) | — |
| `lisans` · `gorsel_kaynak` | 🔴 evet | kayıt hiç açılmaz, `bulunamadı` |
| `eser` / `sanatci` / `yil` | opsiyonel | `bulunamadı` yazılır, boş bırakılmaz |
| `kesinlik` | 🔴 evet | — |

## Lisans — kapalı jeton kümesi (ONERİ §④, aynen)

```
🟢 KABUL   PD · PD-old-70 · PD-old-100 · PD-US · PD-art · CC0
🔴 RED     CC-BY-SA dahil HER ŞEY BAŞKA — "muhtemelen serbest" · jetonsuz ·
           kaynağı belirsiz · YZ üretimi
```
Denetim betiği: `denetim/ARAC-GORSEL-LISANS-0913.py` (URL listesi alır,
Commons dosya sayfasının lisans şablonunu okur, uymayanı ELER VE SAYAR).

## `kesinlik` alanı — üç değer, EKOKUMA'nın `kesinlik:` alanıyla aynı ruhta

```
cagdas               olayla ÇAĞDAŞ (aynı yüzyıl/dönem) tasvir
donem-sonrasi-tasvir  olaydan sonraki bir dönemde yapılmış (Zonaro örneği: 1908, olay 1453)
temsili               19. yy hayalî tasvir vb. — H-0005 kırmızı çizgisi: bu tür
                      için "portre" YAZILMAZ, yalnız madde-görseli olarak ve
                      damga ZORUNLU
```

## Yerel mi uzak mı — ÖLÇÜLDÜ (ONERİ §③, tekrar doğrulandı)

```
assets/portreler   36 dosya · 2,3 MB · ortalama 66 KB
20 görsellik pilot  ≈ 1,3 MB — data/'nin %1,1'i
```
⇒ **YEREL.** `assets/gorseller/<YYYY-MM-DD>-<slug>.jpg`, Türkçe harf yok
(`§4`ün `İ.lower()` dersi, D082).

## Dosya sahipliği — DEĞİŞMEDİ

```
data/gorsel_madde.js   KITA 24'ün (bu dosya) — window.GORSEL_MADDE
data/olaylar*.js       KITA 14'ün — DOKUNULMUYOR, alan eklenmiyor
js/app.js              KITA 12'nin — entegrasyon ayrı istekte (bkz. altta)
```

## KITA 22 (padişah albümü) ve KITA 23 (mimari) için

Aynı şemayı kullanın — `tur:` alanınızı kendi türünüze göre seçin
(`"albüm"` / `"mimari"` gibi, serbest, yalnız raporlama için), `olay:[...]`
zorunlu alan aynı kalıyor. Kendi dosyanıza yazın (`data/gorsel_<siz>.js`,
`window.GORSEL_<SİZ>`, `§7` ad alanı kuralı), `data/gorsel_madde.js`e
YAZMAYIN — ayrı dosya = ayrı ad alanı (D175).

## app.js entegrasyonu — ÖLÇÜLDÜ, KITA 12'ye AYRICA istenecek

`ob-gorsel` (app.js:6392, `index.html:435`) **yalnız padişah/vefat kişi
portresi** için var — `vefatKisiBul`/`padisahEslesmesi` ile SADECE padişah
adı eşleşmesine bakıyor, genel bir "madde görseli" yuvası DEĞİL. Bu
konteyneri paşa/madde görselleri için KULLANMAK riskli (padişah mantığını
bozar). Öneri: `ekOkumaMerakYukle` (app.js:6498) deseniyle YENİ, ayrı bir
lazy-load + yeni bir `<div id="ob-gorsel-madde">` — talep ayrıca KITA 12'ye
tahtadan gidecek, burada yalnız ölçüm/tasarım bildiriliyor, KARAR VERİLMEDİ.

## ALBÜM — paket 0046 H-0002 eki, 13 Eylül 2026

Emre: *"Bu maddede minyatürleri gösteren bir albüm ek okuma olarak,
fotoğraf albümü olarak eklenebilir."* Görsel: Hünernâme fermanı maddesi
(`ClaudEmre/kutu/giden/parti-emrelic-0046/H-0002-1.png`).

**Tek görsel yerine SIRALI DİZİ.** KITA 22'nin padişah albümü de AYNI
şemayı kullanır — tek şema, iki kullanım. Değişen şey `tur` ve tekil
alanların yerini `gorseller:[...]` dizisinin alması:

```js
{
  id:      "1578-01-02-hunername-albumu",
  tur:     "albüm",
  olay:    ["1578-01-02", "1588-01-01"],   // BİREBİR eşleşme, tekildeki gibi
  baslik:  "Hünernâme minyatür albümü — Nakkaş Osman ve ekibi",
  gorseller: [
    {
      url: "assets/gorseller/....jpg",
      baslik: "...", gorsel_alt: "...",       // 🔴 gorsel_alt HER ÖĞEDE zorunlu
      eser: "...", sanatci: "...", yil: "...",
      lisans: "PD-old",                        // 🔴 HER ÖĞE kendi lisansını taşır
      gorsel_kaynak: "https://commons.wikimedia.org/wiki/File:...",
      kesinlik: "cagdas"
    },
    // ... 2-6 öğe daha
  ]
}
```

🔴 **HER ÖĞE KENDİ `lisans`/`gorsel_kaynak`İNİ TAŞIR — albüm SEVİYESİNDE
TEK BİR LİSANS YOK.** Gerekçe ölçüldü: bir Hünernâme albümü adayı
(`Osman I miniature by Nakkaş Osman.jpg`) `denetim/ARAC-GORSEL-LISANS-
0913.py` ile sınandığında **RED** çıktı — `CC-BY-SA-4.0` (bir Commons
katkıcısının kendi çekimi/işlemesi, müzenin PD taramasının kendisi
DEĞİL). Aynı manuscript'in İÇİNDE bile öğeden öğeye lisans DEĞİŞEBİLİYOR
— 1.MURAT'ın uyarısı ("kurum görseli yeniden kullanım şartı taşıyorsa
KONMAZ") tam bunu karşılıyor. ⇒ Albümü tek lisansla etiketlemek, bir
kötü öğeyi bütün albümün arkasına GİZLERDİ.

**Zorunlu alanlar** — tekildeki AYNI kural, öğe bazında: `url` · `baslik`
· `gorsel_alt` · `lisans` · `gorsel_kaynak` · `kesinlik` her öğede
ZORUNLU; `eser`/`sanatci`/`yil` opsiyonel (`bulunamadı` yazılır).

**Pilot:** `denetim/SEMA-GORSEL-MADDE-0913.md` bu bölüm + `data/
gorsel_madde.js`teki `1578-01-02-hunername-albumu` kaydı (4 görsel —
Murad I · Bayezid I · Murad II · Süleyman; Osman Gazi ARANDI, tek
aday zayıf kaynaklıydı — `unitedamericanmuslim.org`, yazar/tarih
`Bilinmiyor` — KONMADI).

---
Sorusu olan `--kime "KITA 24"` yazsın (tahta, yatay serbest, §7.1③).
