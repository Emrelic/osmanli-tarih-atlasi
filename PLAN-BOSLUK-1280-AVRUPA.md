# PLAN — 1280 civarında Avrupa'daki sahipsiz (devletsiz) bölgeler

Emre, 22 Kasım 2026 (Pazar): "1280'de Avrupa'da çok fazla boş alan, devletsiz bölge var. Harita 1288'den
(Osmanlı çekirdeği) başlıyordu, önceki tarihleri sonradan doldurduk; şimdi eksik bölge çok. Bu bölgeleri
araştırıp KAYNAKLI sahiplendirelim. Bölge bölge, çağ çağ yapılabilir. UMIT ve HAVVA tam sürat. Yerleşim
yerleri, kronoloji maddeleri ve sahiplikleri kontrol edelim; boş bölgelerin hepsini tarayıp düzeltelim;
haritada görünsün; 1288'le kopukluk olmasın, birbiri üstüne örtüşsün."

Sorumlu koordinatör: EMRELİC 21 KASIM. Kapı: KASA. Yazma: UMIT, HAVVA (koşu 40'a dokunmadan), EMRELİC.

## 0. Neden boş? (varsayım — ÖLÇÜLECEK)
Petek motoru: noktası olmayan toprak EN YAKIN peteğe emilir; en yakın noktası 200 km'den (TAVAN_KM) uzak
kara hücresi hiçbir peteğe girmez ⇒ delik. İkinci neden: bir yerleşimin `s:` penceresi 1281'de başlıyorsa
o yer 1280'de SAHİPSİZ kalır. Üçüncü: devletin `devletler.js` `f`/`t` ömrü ya da `BOYALAR` anahtarı yok ⇒
bölge boyanmaz. Dördüncüsü: `__BOSLUK__` (beyanlı boşluk) fazla kullanılmış olabilir.

## 0b. ÖLÇÜLEN ASIL NEDEN (EMRELİC, 22 Kasım; ham çıktı: `denetim/BOSLUK-1280-AVRUPA/OLCUM-EMRELIC-*.txt`, betik `avrupa_say*.py`)
Avrupa kutusu (34–72K, -12–60D) = 2162 yerleşim noktası. **1280-01-01'de sahnede olan: 726.** Geri kalan 1436'nın dökümü:
- **963 nokta (%45)**: ilk sahiplik penceresi tam **1281-01-01**'de başlıyor ve `kur:` YOK ⇒ yer 1280'den önce de vardı ama veri
  1281'den başlatılmış (harita 1281'den başladığı için). Pre-1281 sonradan doldurulurken bu noktalar ATLANMIŞ. **Birinci iş budur.**
  İlk pencere sahipleri: bizans 131 · ilhanli 115 · altinorda 114 · macaristan 91 · isvec-birlik-oncesi 42 · novgorod 36 · venedik 33 ·
  almanya 33 · norvec-kralligi 20 · bulgar-carligi 19 · gurcistan 19 · sirbistan-nemanjic 18 · danimarka 18 · memluk 17 · zeyyani 17 ·
  ingiltere 16 · sicilya-kralligi 13 · fransa 11 · cenova 10 · iskocya 10 … (136 çeşit sahip).
- 228 nokta: `kur:` > 1280 (meşru, o gün yok). 169 nokta: HİÇ pencere yok (çoğu `yerlesimler_once1281_yt_ortadogu.js`).
  76 nokta: pencere arası boşluk / bitmiş.
- Ayrıca 5° karelerde 1280'de 0-2 nokta olan bölgeler: Kuzey Avrupa (55-65K, 5-60D: İskandinavya, Baltık, Rusya kuzeyi),
  Karadeniz kuzeyi, İtil boyu — burada nokta EKLEMEK gerekir.
- `bosluk_haritasi --gun 1280-01-01` dünya: 225/441 kara karesi boş (%51); sahnedeki nokta 1215 / 5648.
⇒ **Üç kaldıraç, sırayla:** (A) 963 noktanın ilk penceresini kaynaklı olarak GERİYE uzat (sahip devlet 1280'de o bölgeyi tutuyor mu? tutuyorsa
`f` = max(devlet.f, kuruluş); tutmuyorsa o günün gerçek sahibi) — toplu iş, DEVLET × BÖLGE gruplarıyla; (B) 169 pencere-sız + 76 boşluk;
(C) seyrek karelere yeni nokta. Her grubun kaynağı grup düzeyinde yazılır (hangi devlet, hangi bölge, 1280 civarı siyasî harita kaynağı).

## 0c. KAPSAM GENİŞLEDİ — Asya, Afrika, Amerika da (Emre, 22 Kasım, öğleden sonra)
Emre: "Asya, Afrika, Amerika için de geçerli. Tarihin belli bir döneminde eskide kayıt yok ya da sınırlı; ama belli bir dönemden SONRA oluşan
boşlukları araştırıp kapatmalıyız. Bir bölge boşsa ya yerleşim haritaya konmamıştır, ya yerleşimin sahipliği yapılmamıştır, ya kronoloji maddesi eksiktir."
⇒ ÜÇ NEDEN (her boş kare bunlardan biri): ① NOKTA-YOK · ② SAHİPSİZ (nokta var, o güne penceresi yok) · ③ KRONOLOJİ EKSİĞİ.
Aracı: `py arac/bosluk_sinif.py [--gun G ...] [--liste]` (DEM gerekir; ölçüm: `denetim/BOSLUK-1280-AVRUPA/SINIF-*.txt`).
ÖLÇÜM (5° kare, atlas DEM kutusu; Amerika bu DEM kutusunda YOK → `yukseklik_indir.py --dunya` ile ölç):
| gün | ① nokta-yok | ② sahipsiz | OK |
|---|---|---|---|
| 1280 | 122 | 102 | 215 / 439 |
| 1300 | 125 | 6 | 308 |
| 1500 | 115 | 6 | 318 |
| 1700 | 76 | 4 | 359 |
| 1900 | 65 | 0 | 374 |
Okuma: ② (sahipsizlik) 1281 ÖNCESİ bir sorundur (≈100 kare; "ilk pencere 1281-01-01" yüzünden) — 1300'den sonra neredeyse yok.
1281 SONRASI asıl boşluk ① NOKTA-YOK'tur: 1500'de 115 kare (Asya 97, Afrika 13, Avrupa 4, Okyanusya 1). Emre'nin "belli dönemden sonra"
vurgusu bu: kaynakları zengin çağda (1281-1923) ① kareleri önce kapatılır; 1281 öncesi ② ise 0b'deki yöntemle.
③ kronoloji eksiği Değişmez 2 (0 açık) + devlet başına kronoloji yoğunluğuyla ayrıca ölçülür.
ÖNCELİK SIRASI (yeni): (1) 1281 sonrası ① NOKTA-YOK kareleri, kıta kıta, 1500 ve 1700 günlerinde; (2) kareye yeni nokta ekleyince ② ve ③'ü birlikte
çöz: nokta + sahiplik penceresi + devlet kronolojisinde madde; (3) 1281 öncesi ② (Avrupa işi: 0b). Amerika: önce ölçüm.

## 1. Ölçüm (ilk adım — HAVVA ya da DEM'i olan makine)
- `py arac/bosluk_haritasi.py --gun 1280-01-01` (ve 1200-01-01, 1100-01-01, 1000-01-01, 1281-01-01, 1288-01-01):
  Avrupa kutusu 34–72K, -12–60D. DEM yoksa `py arac/yukseklik_indir.py --dunya`.
- `py arac/_dunya_bosluk.py` ve `py arac/denetle_kapsama.py --esik 200`: 200 km'den uzak kara hücreleri.
- `py arac/denetle.py` Değişmez 1 / 1b: sahipsiz yerleşim ve pencere arası boşluk listesi (1280 için).
- Çıktı: `denetim/BOSLUK-1280-AVRUPA/OLCUM.md` — bölge bölge: hücre sayısı, hangi ülke/bölge, en yakın nokta,
  o gün sahipsiz yerleşim kimlikleri, `__BOSLUK__` kullanımı. Sayılar ölçülür, tahmin yazılmaz.
- Süre sınırı yok ama RAM: HAVVA'da koşu 40 sürüyor, ona dokunulmaz; ölçüm gerekirse başka makinede.

## 2. Bölgeler (Avrupa'yı 10 parçaya böl; her biri ayrı dal, ayrı kaynak dosyası)
B1 İber Yarımadası (Kastilya, Aragon, Portekiz, Navarra, Gırnata)
B2 Fransa ve Burgundy/Provence (Fransa Krallığı, Anjou, Aquitaine/İngiliz, Savoy, Arles)
B3 Britanya ve İrlanda (İngiltere, Galler, İskoçya, İrlanda lordlukları)
B4 Aşağı Ülkeler ve Almanya (Kutsal Roma, dukalıklar, Hansa, Brabant, Flandre, Hollanda)
B5 İtalya ve adalar (Napoli/Sicilya, Papalık, Venedik, Cenova, Milano, Toskana, Sardunya, Korsika)
B6 İskandinavya ve Baltık (Danimarka, İsveç, Norveç, Cermen Düzeni, Litvanya, Estonya/Livonya)
B7 Polonya, Bohemya, Macaristan (Piast dukalıkları, Çek, Macar, Silezya, Moravya)
B8 Balkanlar (Sırbistan, Bulgaristan, Bosna, Arnavutluk, Epir, Mora, Latin kalıntıları, Venedik kolonileri)
B9 Rus knezlikleri ve Karadeniz kuzeyi (Vladimir-Suzdal, Novgorod, Galiçya-Volhynia, Altın Orda, Kırım)
B10 Anadolu-Avrupa eşiği: Bizans (Paleologos), Trakya, Bitinya, Latin Konstantinopolis sonrası — 1281/1288 DİKİŞİ

## 3. Her bölge için iş akışı (sıra bağlayıcı; Sonnet alt ajan araştırır, Opus karar verir)
1. **Kimler vardı?** 1280-01-01 için o bölgenin siyasî tablosu. Kaynak: TDV (komşu devletler için), Cambridge/Oxford
   Medieval History ciltleri, Atlas of Medieval Europe (Mackay), Historical Atlas of Europe, ulusal akademik
   yayınlar (Bizans: Oxford Dictionary of Byzantium/TIB; Balkan: Sırp/Bulgar/Yunan akademik; Rus: Martin,
   Franklin&Shepard; Baltık: Christiansen). Popüler site, Vikipedi tek dayanak YASAK. Okunamayan "okunmadı".
2. **Künye.** `data/devletler.js`te var mı, `f`/`t` ömrü 1280'i kapsıyor mu, `arac/renkler.py BOYALAR` anahtarı var mı.
   Yoksa: yeni künye (id, ad, f, t, harita anahtarı) — hayalet devlet yasak (ömür kaynakla).
3. **Yerleşim noktaları.** Bölgede 200 km'den seyrek yer: o devirde var olan başlıca şehir/kale/manastır noktası
   (`data/yerlesimler*.js`; mükerrer taraması: normalleştirilmiş ad + 3 km). Her nokta koordinat + kaynak + `s:` penceresi.
4. **Sahiplik pencereleri.** `s:[{d:"<devlet id>", f:..., t:...}]`: 1280'i ve 1281/1288'i KESİNTİSİZ örter.
   Pencereler çakışmaz, ters olmaz, sıfır uzunlukta olmaz; bir pencerenin bitişi öbürünün başlangıcıdır.
5. **Kronoloji.** Her `d:`/`v:` kırılmasının ±30 gün içinde madde (Değişmez 2). Gün yoksa `YYYY-01-01` + "gün teyitsiz" beyanı;
   yıl bilinmiyorsa yıl yazılmaz.
6. **Boşluk merdiveni** (CLAUDE.md): TDV → akademik → komşu kaynak → yerleşim var mıydı → abi merkez zinciri ("ABİ MERKEZ: …")
   → hâlâ yoksa `__BOSLUK__` + beyan. Beyansız yaklaşıklık YASAK.
7. **Doğrulama (dalda):** `py arac/denetle.py` (0 olmalı), `py arac/renk_olc.py`; `py arac/paketle.py yenile` + `surum_damgala` KASA kapısında.
8. **Çeviri:** her yeni/değişen kronoloji maddesi 22 dilde (çeviri tavanı 0) — LAB çevirtir.

## 4. 1281/1288 dikişi (kopukluk yasak)
- Osmanlı çekirdeği (Söğüt/Bitinya) ve Bizans/Selçuklu/Moğol komşuları 1281'de başlayan pencereleri taşır; 1281 öncesi
  doldurulan pencereler o günde BİTMEMELİ, 1281'in ötesine taşmalı ya da aynı kimlikle sürmelidir.
- Her bölgenin dalı, 1281-01-01 ve 1288-01-01 gününde de ölçülür: `bosluk_haritasi.py --gun 1281-01-01 / 1288-01-01`
  önceki ölçümden KÖTÜ olmamalı. Dikişte devlet kimliği değişiyorsa kırılma = kronoloji maddesi (Değişmez 2).

## 5. Görünürlük
- Veri değişikliği haritaya ANCAK tam koşudan sonra yansır. Koşu 40 bitince HAVVA iniş yapar; Koşu 41 bu verilerle başlamalı.
  ⇒ KESİM: yazılan veri koşu 41 başlamadan KASA ile main'e inmiş olmalı (HAVVA başlamadan önce bana yazar).
- Koşu 41 bittiğinde 1280 haritası yeniden ölçülür (bosluk_haritasi). Kalan hücreler bir sonraki tura kalır, listelenir.

## 6. Makine dağılımı (Pazar, eczane mesaisi YOK)
| Makine | Rol | Bu iş |
|---|---|---|
| UMIT | araştırma+yazma, tam sürat | B1 B2 B3 B4 B5 (batı + orta), sırayla; alt ajan ≤ makinenin kaldırdığı kadar |
| HAVVA | koşu 40 sürüyor (Normal öncelik); koşuya dokunma | önce 1. ölçüm (DEM'i var), sonra B6 B7 B8 yazımı — koşuyu boğmayan hafif ajanlarla |
| EMRELİC | koordinasyon + yazma | B9 B10 (Rus + Bizans dikişi) |
| LAB | bağımsız denetim + çeviri | her inen dalı denetler, çeviri tavanı 0, 1280 yeniden ölçüm |
| KASA | kapı | dalları sırayla indirir, koşu 41 öncesi kesim |

## 7. Kurallar
- Her dal ayrı ad: `<makine>-bosluk-<bolge>-1122`; düz `git push origin <dal>`; adını KASA'ya ve bana bildir.
- Çıkış: her bölge için "önce/sonra" hücre sayısı; bulunamayan her şey `BORÇ:` (defter).
- Kural gevşetilmez: Değişmez 2, hayalet devlet, kaynak şartı. Tavan açmak gerekirse neden/ölçüm raporlanır.
- Atlas referans değildir: mevcut `s:` pencereleri, atlasın kendisi dayanak olamaz.
