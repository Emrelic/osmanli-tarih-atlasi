<!-- DURUM: BOSTA ¦ 2026-08-14 17:5x ¦ 40/45 bayrakli, 7 nokta arastirmasi OPUS HAZIR KITA 2'ye devredildi (M-0067) -->

## EK — 14 Ağustos: iki çelişki araştırıldı, sonuç ve düzeltme

Emre'nin talimatıyla iki açık soru araştırıldı: (a) 6 şüpheli noktanın kaderi,
(b) ARAYÜZ BOŞLUK'un itiraz ettiği Ogaden/Somali çölü/Yeni Gine çelişkisi.
Kaynak: WebSearch, akademik/standart tarih (bu coğrafyalar TDV kapsamı dışı,
`CLAUDE.md §4` istisnası geçerli).

### SONUÇ — 3 kova

**① Kabile bayrağı DOĞRULANDI, yazıldı (1 nokta):**
- **Tamanrasset** — Kel Ahaggar Tuareg konfederasyonu (~1750'den Amenokal
  liderliğinde), öncesinde gevşek Tuareg boyları. Hiçbir dönemde devlet
  düzeyinde yapı yok, 1902 Tit Muharebesi'ne kadar sürdü. `bos:"kabile"`
  yazıldı (data/yerlesimler.js:817).

**② Kabile bayrağı YANLIŞTI, GERİ ALINDI — gerçek devlet tarihi var (2 nokta):**
- **Ogaden** (lat 7.20, lon 44.00) — İfat Sultanlığı (13.-14. yy başı,
  sınırları Şewa'ya kadar uzanıyordu) ve ardından **Adal Sultanlığı
  (1415-1577)**, ikisi de "Ogaden/Somali bölgesi" olarak tanımlanan bu
  coğrafyayı doğrudan kapsıyordu. `kabile` bayrağım bu ~260 yıllık gerçek
  devlet dönemini siliyordu — ARAYÜZ BOŞLUK haklıydı. Bayrak GERİ ALINDI
  (data/yerlesimler.js:1029, artık `d:[] }` — temiz, bayraksız).
- **Somali çölü** (lat 8.00, lon 46.50) — Ajuran Sultanlığı (13.-17. yy)
  "Somali'nin büyük kısmını" kapsıyordu ama bu noktanın tam olarak
  Ajuran'ın nehir-vadisi (Şebelle/Cuba) çekirdeğinde mi yoksa daha
  çevre bir bölgede mi olduğu benim araştırmamla NETLEŞMEDİ. Riski
  almadım, bayrak GERİ ALINDI (data/yerlesimler.js:1028).

**③ Dönem araştırması TAMAMLANDI, YAZMA YETKİM YOK — devlet/tarih verildi,
   bir VERİ oturumuna devrediliyor (7 nokta, 6 şüpheli + Ogaden):**

| Nokta | Önerilen dönem(ler) | Kaynak |
|---|---|---|
| **Agadez** | `agadez-sultanligi` 1405→1500 (bağımsız) · 1500→1591 (Songhay'a bağlı) · 1591→1906 (yeniden bağımsız) · 1906→1920 (Fransız himayesi) | [Sultanate of Agadez — Wikipedia](https://en.wikipedia.org/wiki/Sultanate_of_Agadez), [Britannica](https://www.britannica.com/place/Agadez) |
| **Timbuktu** | `mali` (1300'lerin başı) → Tuareg (~1433-1468) → `songhay` (1468-1591) → Fas/Arma Paşalığı (1591, fiilen bağımsız 1612'den itibaren) → 18-19.yy (Fulani/Tuareg/Toucouleur — İKİNCİ TUR araştırma ister) → Fransa (1893) | [Pashalik of Timbuktu](https://en.wikipedia.org/wiki/Pashalik_of_Timbuktu), [Moroccan invasion of Songhai](https://en.wikipedia.org/wiki/Moroccan_invasion_of_the_Songhai_Empire) |
| **Darfur** | `darfur` (Keira/Süleyman Solong) 1603→1874 · Türk-Mısır/Kavalalı idaresi 1874→1898 · `darfur` yeniden (Ali Dinar) 1898→1916 · sonrası İngiliz Sudanı. **NOT: `darfur` künyesi zaten `data/devletler.js`'de var** (VERİ DEVLET partisinden), yalnız BU NOKTAya dönem hiç yazılmamış. | [Sultanate of Darfur — Wikipedia](https://en.wikipedia.org/wiki/Sultanate_of_Darfur), [Keira dynasty](https://en.wikipedia.org/wiki/Keira_dynasty) |
| **Hadramut** | Kathiri Sultanlığı 1395→~1858 (bölgenin çoğunda) · Kesîrî-Kuaytî çekişmesi ~1858→1918 (İKİ sultanlık aynı anda, coğrafi paylaşım ister — Kesîrî Seyyûn/iç vadi, Kuaytî Mukalla/kıyı) · 1918 sonrası İngiliz himayesinde ikisi de sürüyor | [Kathiri sultanate — Britannica](https://www.britannica.com/place/Kathiri-sultanate), [Qu'aiti — Wikipedia](https://en.wikipedia.org/wiki/Qu'aiti) |
| **Ogaden** | `ifat` (13.-14.yy başı) → `adal` 1415→1577 → 1577-~1890 KASITLI BOŞLUK (klan yapısı, gerçek — kaynak susuyor) → Habeşistan/İtalya/İngiltere çekişmesi 1890'lardan sonra (AYRI araştırma ister) | [Ogaden — Wikipedia disambig üzerinden Adal Sultanate](https://en.wikipedia.org/wiki/Ogaden_(disambiguation)) |
| **Ndjamena** | Kanem-Bornu (Sayfawa hanedanı) ve/veya Bagirmi Sultanlığı etki alanı — TAM SINIR benim araştırmamla NETLEŞMEDİ, bu nokta Chari-Logone kavşağında, iki devletin sınır bölgesinde olabilir. İKİNCİ TUR araştırma ister. | [Kanem-Bornu — Britannica](https://www.britannica.com/place/Kanem-Bornu) |
| **Timbuktu 18-19.yy** | (yukarıdaki satırın devamı) 1826 Fulani Massina İmparatorluğu, sonra Tuareg/Fulani çekişmesi, 1863 Tûkûlör (El Hac Ömer) — İKİNCİ TUR ister | — |

⚠️ **Darfur, Ndjamena ve Timbuktu'nun 18-19.yy kısmı "ikinci tur araştırma
ister" diye işaretli** — tek oturumda TAM dönem zinciri kurulamadı, kaba
taslak var ama gün hassasiyeti ve kesin geçiş tarihleri eksik.

### Bu 7 nokta HÂLÂ BAYRAKSIZ (doğru davranış)
`kasitli_bosluk` yazılmadı, çünkü bunlar "hiç sahibi olmadı" değil "sahibi
var ama veri eksik" durumundadır — bayrak yanlış olurdu. Yazma yetkim
şartname gereği yok (`dönem yazmak YASAK`). **Bir VERİ oturumuna
(muhtemelen VERİ DEVLET) devrediliyor.**

# VERİ ÇÖL BAYRAK — İlerleme Notu

🔴 KİMLİK DÜZELTMESİ (14 Ağustos, M-0015 sonrası): Bu oturumun gerçek kimliği
scratchpad yolu ile doğrulandı: **local_cddd7c9e-7738-4140-ab7e-accb23228860**.
Daha önce `send_message` aracının bana atfettiği `local_32635081-fad5-4366-a502-6cc31d416789`
ve TAHTA M-0005'e yazdığım `--kimlik` bu yüzden YANLIŞTI — aracın kendisi yanlış
kimlik veriyordu, bu da projenin "send_message çalışmıyor" bulgusuna bir kanıt
daha ekliyor (yalnız teslimat değil, KİMLİK ATFI da bozuk).

Bu dosya `oturumlar/VERI-COL-BAYRAK.md` görevini yürüten oturumun kaldığı
yerden devam edebilmesi içindir.

## İş 1 — 45 aday doğrulandı

`arac/girdi.py`nin `yukle()`si çağrılarak (regex/py -c değil), 1300-1920
arası 20 yıllık kesitlerin HİÇBİRİNDE sahipli olmayan VE `kasitli_bosluk`
bayrağı taşımayan noktalar bulundu: **45 — koordinatörün ölçümüyle birebir.**

### 🔴 Şartnamenin öngördüğü "Timbuktu sınıfı" istisna TEK DEĞİL, ALTI çıktı

`tur:` alanına göre ayırdım: 4'ü `tur:"sehir"` (gerçek şehir), 41'i
`tur:"bolge"` (jenerik dolgu). Ama 41'in içinde de **iki tane daha** gerçek
siyasi/coğrafi kimlik taşıyan kayıt vardı:

**ŞÜPHELİ — bayrak YAZILMADI, dokunulmadı (6):**
- **Ndjamena** (tur:sehir) — Kanem-Bornu/Bagirmi etki alanında gerçek şehir
- **Agadez** (tur:sehir) — Agadez Sultanlığı (Aïr), gerçek bir devletti
- **Tamanrasset** (tur:sehir) — Ahaggar Tuareg konfederasyonunun merkezi
- **Timbuktu** (tur:sehir) — şartnamenin kendi şüphesi, Mali/Songhay/Fas
- **Darfur** (tur:bolge ama) — Darfur Sultanlığı (1603-1916) `devletler.js`de
  ZATEN kayıtlı bir devlet; bu nokta o devletin dönemini hiç almamış
- **Hadramut** (tur:bolge ama) — Kesîrî/Kuaytî sultanlıkları gibi gerçek
  siyasi yapılara sahip bölge, TDV kapsıyor olabilir, kontrol edilmedi

Bu 6, koordinatöre bekletilmeden bildirildi. Dönem yazma yetkim yok
(şartname ⓪: "YASAKLARIN: DÖNEM yazmak"), bu yüzden dokunmadım.

## İş 2 — kalan 39 nokta yazıldı

25 `devletsiz` + 14 `kabile` (kaynak: Sahra/Arabistan/Orta Asya deseni için
Tuareg/Toubou/Bedevi/Türkmen/Somali aşiret konfederasyonları literatürü;
Yeni Gine iç yaylaları için sömürge-öncesi temas yokluğu literatürü —
standart akademik kaynak, TDV kapsamı dışı bölgeler). Hiçbiri `veri-yok`
çıkmadı çünkü genel tarih/coğrafya kaynakları her birinin siyasi statüsü
hakkında (doğrudan ya da bölgesel olarak) konuşuyordu.

Her kayda YALNIZ üç alan eklendi: `kasitli_bosluk:true`, `bos:"..."`,
`neden:"..."`. Format dosyadan dosyaya farklıydı (`d:[] },` vs
`s:[], d:[], v:[] },`); önce dar bir dize eşleştirmesi 13'ünü atladı, sonra
biçimden bağımsız "son `}`nin önüne ekle" yöntemiyle düzeltildi. Yazdıktan
sonra `Read`/`Grep` ile geri okundu, Türkçe karakterler sağlam.

**Yazılan dosyalar:** `data/yerlesimler.js`, `data/yerlesimler_seyrek.js`,
`data/yerlesimler_ek4.js`, `data/yerlesimler_afrika.js`,
`data/yerlesimler_emilme.js`. Başka hiçbir alana/dosyaya dokunulmadı.

## İş 3 — denetim

```
py arac/yorum_temizle.py   → ✓ TEMİZ
py arac/denetle.py         → Değişmez 1: 202 sahipsiz (beklenen 180) — DEĞİŞMEDİ
                              Boşluk cinsi: ✓ cinsi yazılmamış 0 (önce >0 idi)
                                dağılım: devletsiz 130, hata 8, insansiz 9,
                                         kabile 30, veri-yok 9 (toplam 186)
                              Değişmez 1b: ✓ hâlâ 0
```

🔴 **Değişmez 1'in 202 sayısı DEĞİŞMEDİ ve bu BEKLENEN bir sonuç, hata
değil.** `arac/denetle.py:646` içindeki `degismez1()` fonksiyonu
`kasitli_bosluk` alanını HİÇ okumuyor — sahipsizliği yalnız `d:`/`s:`/`v:`
dönemlerine bakarak ölçüyor, tasarım gereği. Bu işin amacı sayıyı
düşürmek değildi (şartname zaten "sen tavanı değiştirme" diyordu),
**71 noktanın (26+45) tamamının artık meşru bir gerekçeye bağlanmasıydı**
— ve `Boşluk cinsi` denetimi bunu doğruluyor: cinsi yazılmamış kayıt 0.

📌 202'nin içinde `kasitli_bosluk`'lu (artık 71'i de dahil, önceden 26'ydı)
noktalar VAR ama sayılıyor; asıl fark **artık hepsinin `bos:` gerekçesi
kayıtlı ve `if` ile sorulabilir** — CLAUDE.md §11'in onbirinci kusur
sınıfının ("ders veriye serbest metin olarak inerse inmiş sayılmaz")
tam çaresi.

## Bitiş ölçütü (şartname §⑥)

```
① 45 doğrulandı — 45, koordinatörün sayısıyla birebir
② 39'a bayrak yazıldı, 6'sı ŞÜPHELİ bırakıldı
   (Ndjamena · Agadez · Tamanrasset · Timbuktu · Darfur · Hadramut)
③ bos: dağılımı (yeni yazılan 39): devletsiz 25 · kabile 14 · veri-yok 0
④ Değişmez 1: 202 → 202 (DEĞİŞMEDİ, tasarım gereği — yukarıda açıklandı)
⑤ Değişmez 1b: hâlâ 0
⑥ yorum_temizle: TEMİZ
```

## Koordinatöre bırakılan karar

`BEKLENEN_SAHIPSIZ = 180` (arac/denetle.py:150) — sen onu değiştirme
dendiği için dokunmadım. Şimdi 71/71 nokta meşrulaştırılmış durumda; geriye
yalnız 6 şüpheli + 131 "kısmen sahipsiz" (hiç incelemediğim, şartname
kapsamı dışı) kalıyor. Tavanı 180'den nasıl güncelleyeceğin (ve 6 şüpheliye
ne yapılacağı — dönem mi yazılacak, yoksa yine mi bayrak) senin kararın.

**Commit edilmedi** (data/yerlesimler*.js) — genel kural gereği yalnız bu
ilerleme dosyası pathspec'li commit edildi.
