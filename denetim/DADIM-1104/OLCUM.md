# D ADIMI — yerleşim sahipliğinin kaynakla teyidi · ölçüm ve yöntem

Ölçen: UMIT SALI · 4 Kasım 2026 · dal `umit-1104-dadim` · ağaç **origin/main ceb0ce402**.
Görev EMRELİC 1 KASIM'dan geldi; öncelik Emre'nin, çekirdek denetimidir.
Salt denetimdir: veri dosyalarına yazılmadı. Uygulama KASA'nındır.

## Ölçüm (`girdi.yukle()`, sitenin yüklediği yerleşim evreni)

| alan | dönem | kaynağı boş |
|---|---|---|
| `s:` | 25.584 | 8.469 |
| `d:` | 1.489 | 1.154 |
| `v:` | 682 | 506 |
| `isg:` | 585 | 93 |
| toplam | 28.340 | 10.222 |

- Yerleşim 5.532; kaynağı boş dönemi olan yerleşim 3.744.
- En çok boş dönem taşıyan dosyalar: `yerlesimler.js` 3.279 · `yerlesimler_asya.js` 1.100 · `yerlesimler_afrika2.js` 537 · `yerlesimler_afrika.js` 499 · `yerlesimler_kamerika.js` 445.

Kaynak sınıfları (s/d/v, 27.755 dönem):

| sınıf | dönem | % |
|---|---|---|
| boş | 10.129 | 36,5 |
| DEVRALMA (kronoloji maddesinden türetilmiş; yerleşim tanıklığı değil) | 7.528 | 27,1 |
| öteki akademik kaynak | 3.514 | 12,7 |
| TDV | 2.750 | 9,9 |
| beyanlı / ABİ MERKEZ | 2.016 | 7,3 |
| Britannica / Vikipedi | 1.818 | 6,6 |

**Boş + DEVRALMA = 17.657.** Bu, işin hedef evrenidir (EMRELİC tahmini: ~18.000).

## Evren 1: TOP100 devletlerinin başkent ve büyük merkezleri
- **Seçim yöntemi:**
  - `denetim/TOP100-1103/OZET.md`'deki 100 künye taranır. Her künyenin `baskent` alanı atlas yerleşimiyle eşlenir; eşleme normalleştirilmiş adla ve elle yazılmış eşanlam tablosuyla yapılır.
  - Ayrıca her devlet için k 1-2 yerleşimlerden sahiplik süresi en uzun 3 merkez alınır.
- **Evren:** 200 yerleşim, 2.009 dönem; bunların 864'ü boş ya da DEVRALMA.
- **Eşlenemeyenler:** 44 başkent parçası eşlenemedi (`evren1_eslesmeyen.json`). Bunların bir kısmı atlasta yerleşim değil: Ötüken, Karabalgasun, Pi-Ramesses, Napata, Njimi gibi. Bir kısmı ise atlasta başka adla duruyor: Stockholm, Buda, Addis Ababa gibi. Bu ikinci grup ayrı tarama ister.
- **Partiler:** Parti 1, 25 yerleşimlik bir partiydi; kapsamı düşük kaldı (129 hedef dönemden 43'ü KAYNAKLI). Kalan 175 yerleşim 13'lük partilere bölündü. Parti 1'de hiç bakılmayan 4 yerleşim ayrı partiye kondu.

## Atlas kuralları (ajan brifinde; öneriler bu kurallara göre okunur)
- **De jure devir antlaşma günündedir (F8).** Fiilî işgal sahiplik değildir, `isg:` katmanına girer.
- **TBMM** 1920-04-23'te başlar.
- **İki TDV maddesi çelişirse** iki madde de yazılır; seçim yapılmaz, `ic_not` beyanı gerekir.
- **Ülke düzeyi kaynak** beyanlı yaklaşıklıktır.
- **Önerilerdeki `YYYY-MM` biçimi ay hassasiyetidir.** KASA bunu `YYYY-MM-01` + beyan olarak yazar (CLAUDE.md: gün yaz).

## Teslim dosyaları
- `dadim_sonuc.json`: bütün satırlar. Satır biçimi: dosya:satır · alan · d · f/t · hüküm (KAYNAKLI / ONERI / BULUNAMADI) · kaynak · alıntı · öneri · not.
- `ONERILER.md`: ONERI satırları, bayraklarıyla.
  - **KURAL:** öneri bir atlas kuralına dokunuyor.
  - **ÇİFT-TDV:** iki TDV maddesi çelişiyor.
  - **ÜLKE:** kaynak yalnız ülke düzeyinde.
- `topla.py`: parti sonuçlarını bu iki dosyaya toplar.
