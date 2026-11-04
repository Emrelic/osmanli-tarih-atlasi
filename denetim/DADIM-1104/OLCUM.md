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

## Koordinatör kararları (EMRELİC 1 KASIM, 4 Kasım 2026; Emre isterse değiştirir)

### 1. Sovyet ardılları
- **Karar:** cumhuriyetin başlangıcı bağımsızlık ilanı günüdür. Örnek: Türkmenistan 1991-10-27. Kayda konacak `ic_not`: "SSCB'nin sona erişi 1991-12-26; uluslararası tanınma Aralık 1991".
- **Ölçüm (ceb0ce402):**
  - Künyelerin `f`'si bu kuralla zaten uyumlu.
  - Ardıl künyeyle başlayan 525 yerleşim döneminden yalnız **3'ü tutarsız**:

  | yerleşim | dosya | dönem | şimdiki f | olması gereken |
  |---|---|---|---|---|
  | Brest-Litovsk | `yerlesimler_p0037.js` | `belarus` | 1991-12-25 | 1991-08-25 (künye f) |
  | Grodno | `yerlesimler_p0037.js` | `belarus` | 1991-12-25 | 1991-08-25 (künye f) |
  | Viipuri (Vyborg) | `yerlesimler_avrupa.js` | `rusya-federasyonu` | 1991-12-25 | 1991-12-26 (künye f) |

  - Belarus satırlarında önceki dönemin `t`'si de aynı güne çekilir.

### 2. ÇİFT-TDV
- **Karar:** iki TDV maddesi çelişiyorsa önce üçüncü, bağımsız bir akademik kaynak aranır (Iranica, EI, Cambridge).
- Bulunamazsa yerleşimin **kendi şehir maddesindeki** TDV tarihi esastır; öteki madde `ic_not`ta beyan edilir.
- **Bu kurala göre karar verilenler:**
  - Bağdat Karakoyunlu/Akkoyunlu: TDV «Bağdat» esas.
  - Sana: TDV «San'â» esas.
- **Iranica bekleniyor:** Nîşâbur Afşar/Abdalî için «NISHAPUR» maddesi okunacak (EMRELİC okutuyor).

### 3. Fiilî denetim ilkesi
Bu karar TBMM 1920 ve Ege 1912 kararlarıyla tutarlıdır.
- **Delhi:**
  - `ingiliz-hindistani` f 1803-09-11 olarak **kalır**: Delhi Muharebesi'nden sonra fiilî denetim Şirket'in elindedir.
  - TDV'deki 1858 tarihi Bâbür'ün nominal sonudur; `ic_not` alanında beyan edilir.
  - **Künye:** `ingiliz-hindistani` tek künye olarak kalır; şimdilik bölünmez (koordinatör kararı). Bölmek haritada görünür bir fark yaratmaz, ama renk/tuz değişikliği ister. "EIC/Taç ayrımı (1858-08-02)" Emre'nin karar listesine eklendi.
- **Şam:** atlastaki zincir bu kararla zaten uyumlu.
  - 1918-10-01'de `suriye-arap-kralligi` başlar. Bu tarih Arap-İngiliz birliklerinin fiilî girişidir.
  - 1920-07-25'te `suriye-lubnan-mandasi` başlar: Fransız girişi, Meysellûn 24 Temmuz.
  - San Remo (Nisan 1920) hukukî adımdır; `ic_not` alanında beyan edilir.
  - `suriye-lubnan-mandasi` künyesi 1920-07-01'de başlıyor; Şam'daki dönem 07-25'te başlıyor. Bu **sorun değildir** (koordinatör): künye Lübnan kıyısı gibi başka yerleri de kapsar, künye f ≤ ilk dönem yeterlidir.
- **Asîrgarh:** 1370-~1399 arası için boşluk doldurma merdiveni uygulanır. Önce Râcpût künyesi aranır, sonra ABİ MERKEZ Burhânpûr.

### 4. TEK KURAL: işgal ve sahiplik (EMRELİC, 4 Kasım 2026; önceki "fiilî" yazımları geçersiz kılar)
- Savaş işgali, ilhak ya da egemenlik devri gerçekleşene kadar **`isg:`** olarak yazılır.
- `s:` sahipliği hukukî ilhak ya da devir gününden başlar. Ham işgal günü ic_not alanına yazılır.
- İstisna: işgalci egemenliği açıkça devralırsa sahiplik o gün başlar. Örnek: Berlin Deklarasyonu 1945-06-05.

| yerleşim | uygulama | açık |
|---|---|---|
| Brüksel | isg fransa 1794 → ilhak; s: fransa ilhaktan itibaren | İlhak kararnamesi 1795-10-01 (9 Vendémiaire IV) koordinatörün belleğinden, KAYNAKLA TEYİT GEREK. Treccani «Belgio» yalnız "ilhak, Campo Formio ve Lunéville ile onaylandı" diyor |
| Aachen | isg fransa 1794 → hukukî ilhak | İlhak günü KAYNAK GEREK. Adaylar: Campo Formio 1797-10-17, 1798 département düzeni, Lunéville 1801-02-09. Alman ya da Fransız akademik kaynak belirlemeli |
| Kâbil | isg ingiltere 1839-42 ve 1879-80; afganistan s: kesintisiz | — |
| Berlin | almanya t 1945-06-05 kalır (devir istisnası); isg sovyet-rusya 1945-05-02 → 1949-10-07 | Uç DDR'nin kuruluşu; KASA teyit etmeli |

**KASA listesi (bu karardan):**
- **Künye genişletme:** `almanya-muttefik-isgali` t 1949-09-20 → **1949-10-07**. Aynı polity sürüyor: Sovyet bölgesi 10-07'ye kadar işgal altındaydı. Kayda konacak ic_not: "batı bölgeleri 1949-09-20'de BRD".
- **Batı Berlin:** ayrı nokta **zaten var**. "Batı Berlin (Charlottenburg)", `yerlesimler_halef_1946.js`, `kur` 1948-12-07, Berlin noktasından 7,3 km; ayrıca "Spandau (Batı Berlin)". Yeni nokta açılmaz. Mükerrer taraması yapıldı: 3 km içinde ikinci nokta yok.

## Teslim dosyaları
- `dadim_sonuc.json`: bütün satırlar. Satır biçimi: dosya:satır · alan · d · f/t · hüküm (KAYNAKLI / ONERI / BULUNAMADI) · kaynak · alıntı · öneri · not.
- `ONERILER.md`: ONERI satırları, bayraklarıyla.
  - **KURAL:** öneri bir atlas kuralına dokunuyor.
  - **ÇİFT-TDV:** iki TDV maddesi çelişiyor.
  - **ÜLKE:** kaynak yalnız ülke düzeyinde.
- `topla.py`: parti sonuçlarını bu iki dosyaya toplar.
