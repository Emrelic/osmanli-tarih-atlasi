# GERİYE SARMA — 1923'ten geriye, yıl yıl dünya sınırları · Emre'nin kararı, 16 Eylül 2026 akşamı

Tanımlar: `oturumlar/GORUNUM-ABCD-0916.md` en üst bölüm (**A–F ALTI KADEME**, bağlayıcı).
Kurallar: `oturumlar/DALGA-0052.md` §0. Kısaca:
- Tahtaya yalnız AÇILIŞ, ENGEL ve TESLİM yazılır.
- Commit pathspec'lidir: add'de de commit'te de dosya ADIYLA.
- Atlas referans değildir.
- Kaynaksız tarih yazılmaz.

## 0. Sıra — her bölge oturumu için aynı

```
ADIM 0  (yalnız 1923 verisi eksik olanlar) aşama 2'yi bitir: 1923 hat kayıtları
ADIM 1  KENDİ dosyana `sinif` alanı ekle (eşleme: GORUNUM en üst bölüm). F için kanıt:
        D-KUNYE'nin tanınma tablosu (denetim/TANINMA-1923-0916.json) gelene kadar E yaz, notla.
ADIM 2  GERİYE SARMA — dalga dalga:
        G1  1923 → 1918-11-11   (Mondros/Compiègne ateşkesleri, işgal hatları, Paris antlaşmaları)
        G2  1918 → 1914-07-28
        G3  1914 → 1878-07-13   (Berlin)
        G4  1878 → 1815-06-09   (Viyana Kongresi)                     ← 17 Eylül 01:15 AÇILDI
        G5  1815 → 1774-07-21   (Küçük Kaynarca)
        G6  1774 → 1699-01-26   (Karlofça)
        G7  1699 → 1606-11-11   (Zitvatorok)
        🟢 G4'ten itibaren ZİNCİRLİ: bir dalgayı bitirince tahtaya tek teslim yaz ve
           koordinatörü BEKLEMEDEN sonrakine geç (Emre, 17 Eylül: "sabaha kadar").
           Bölgende o dönemde ikinci taraf/sınır yoksa (ör. sömürge öncesi) bunu tek
           cümleyle teslimde söyle ve sonraki dalgaya geç — boş kayıt uydurma.
           Her dalgada ÖNCE mevcut kronoloji maddelerini say (olaylar*/kronoloji*/künye),
           yalnız EKSİK olan antlaşma/işgal maddesini yaz (mükerrer yok).
        Her sınır parçası için: bu hat NE ZAMAN başladı (f), ÖNCESİNDE ne vardı?
        Öncesi yeni bir hat kaydıdır (kendi f/t'si, kendi sinif'i, kendi dayanağı).
        Antlaşmadan önceki işgal/ateşkes hattı → sinif D (koordinat kesinse). Kesin değilse
        kayıt YAZILMAZ; harita orada A/B'ye düşer (bu kasıtlıdır, boşluk kusur değildir).
ADIM 3  KRONOLOJİ: her E/F/D değişikliği için madde → data/kronoloji_sinir_<bolge>.js
        window.KRONOLOJI_SINIR_<BOLGE>. Biçim: data/kronoloji_almanya.js ile AYNI.
        İlgili İKİ devletin kimliği de maddede. Gün yoksa YYYY-01-01 + metinde hassasiyet.
        index.html satırını koordinatör ekler — teslimde dosya adını yaz.
```

## 1. Kadro

| Oturum | Adımlar | Dosyalar (yalnız bunlar) |
|---|---|---|
| D1-TURKIYE | 1 → 2 → 3 | `data/d_sinirlar.js` · `data/kronoloji_sinir_turkiye.js` |
| D2-KOMSU | 1 → 2 → 3 | `data/d_sinirlar_komsu.js` · `data/kronoloji_sinir_komsu.js` |
| D3-AVRUPA-ORTA | 1 → 2 → 3 | `data/d_sinirlar_avrupa_orta.js` · `data/kronoloji_sinir_avrupa_orta.js` |
| D4-ORTADOGU | 1 → 2 → 3 | `data/d_sinirlar_ortadogu.js` · `data/kronoloji_sinir_ortadogu.js` |
| D5-ASYA | 1 → 2 → 3 | `data/d_sinirlar_asya.js` · `data/kronoloji_sinir_asya.js` |
| D3-AVRUPA-BATI | **0** → 1 → 2 → 3 | `data/d_sinirlar_avrupa_bati.js` · `data/kronoloji_sinir_avrupa_bati.js` |
| D5-AMERIKA | **0** → 1 → 2 → 3 | `data/d_sinirlar_amerika.js` · `data/kronoloji_sinir_amerika.js` |
| D4-AFRIKA | **0** → 1 → 2 → 3 | `data/d_sinirlar_afrika.js` · `data/kronoloji_sinir_afrika.js` |
| D5-OKYANUSYA | **0** → 1 → 2 → 3 | `data/d_sinirlar_okyanusya.js` · `data/kronoloji_sinir_okyanusya.js` |
| D-KUNYE | tanınma tablosu 1914-1923: her devlet için Milletler Cemiyeti üyeliği ve tanıyan büyük devletler (tarihli, kaynaklı). F kararı buna dayanır | `denetim/TANINMA-1923-0916.json` · `denetim/D-KUNYE-0916.md` |
| D-KAYNAK | Sınıf dizini aleti. Bütün `data/d_sinirlar*.js` dosyalarını okur ve `data/sinir_sinif_dizini.js` (`window.SINIR_SINIF_DIZINI`) üretir. Satır: taraflar · f · t · sinif · dayanak kısa · kaynak dosya/kimlik. Yeniden koşturulabilir olmalı | `denetim/ARAC-SINIF-DIZINI-0916.py` · `data/sinir_sinif_dizini.js` |
| D-KATMAN | `js/d_katman.js`: `sinif` alanını okur. İki görünüm anahtarı: HUKUKÎ (`F>E>C`) / FİİLÎ (`D>F>E>C`). Sınıf başına ayırt edici çizgi, üstüne gelince sınıf + dayanak. `kategori`ye geri düşme (geçiş dönemi). `index.html`/`app.js` satırı gerekiyorsa tahtadan 1.MURAT'a | `js/d_katman.js` · `denetim/D-KATMAN-0916.md` |

**Ortak sınır:** alfabetik ilk bölgenin oturumunda.
**Teslim:** her adım sonunda tahtaya tek mesaj, sayıyla. Örnek: "ADIM 2 G1: 14 yeni hat (E 9 · D 3 · C 2), 11 kronoloji maddesi, commit x".
