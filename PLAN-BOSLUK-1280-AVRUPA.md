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
