# KORİDOR HALKA2B — ilerleme

**Oturum** KORIDOR HALKA2B (Emre'nin verdiği ad: *opus hazır kıta 22*)
**16 Ağustos 2026** · İKİ GÖREV yapıldı, ikisi de aşağıda:

| # | Görev | Dosya | Hâl |
|---|---|---|---|
| 1 | `oturumlar/KORIDOR-HALKA2B.md` (M-0233) | `data/koridor_f5c9a5.js` | **BİTTİ+TESLİM** |
| 2 | `oturumlar/KADEME-ASYA.md` (M-0305) | `data/kademe_f5c9a5.js` | **YARIM** · TDV tükendi |
| 3 | **KOL D · KORİDOR** (M-0638) | `data/koridor_yama_f5c9a5.js` | **BİTTİ+TESLİM** |
| 4 | **KOL D · ikinci halka** (M-0695) | `data/koridor_f5c9a5.js` | **BİTTİ+TESLİM** |

---

# GÖREV 3-4 — KOL D · KORİDOR (unsur ⑤)

## ⓪ İKİ TESLİM, SAYIYLA

```
③ KOORDİNAT YAMASI  data/koridor_yama_f5c9a5.js
   koridor.js'in 26 koordinatsız düğümü → 23'üne koordinat · 3'ü veride YOK
   🔴 ÇİZİLEN AĞDA PARÇA: 17 → 5   (Boğaz kenarı da inince → 4)
   çizilebilen düğüm 80 → 103 · kenar 64 → 100

④ İKİNCİ HALKA      data/koridor_f5c9a5.js
   MISIR kolu   Şam → sahil → Kahire → İskenderiye   11 kenar · KOPUK 0
   BALKAN kolu  Belgrad → Bosna → Dubrovnik           9 kenar · KOPUK 0
   dosya toplamı 37 → 59 düğüm · 33 → 53 kenar · kabul kapısı 6/6
```

## ① 🔴 BU KOLUN EN DEĞERLİ BULGUSU — KORİDOR, YOĞUNLUĞUN BAĞIMSIZ ÖLÇÜSÜ

```
Mısır      yoğun coğrafya  → 11 kenar ·  0 kopuk
Balkan     yoğun coğrafya  →  9 kenar ·  0 kopuk
ilk dört kol (İran·Rusya·Lehistan·Venedik) → 6 kopuk
Hindistan  SEYREK (ölçüldü, yazılmadı) → 15 kenar · 7 KOPUK (%47)
```
⇒ **Kopukluk koridorun değil, VERİ YOĞUNLUĞUNUN özelliği.** Yoğun yerde
ara durak aramak hiç gerekmedi; seyrek yerde yarısı koptu.
📌 Ve Hindistan'ın seyrekliği bugün **başka bir yoldan** da ölçüldü:
393 noktanın 384'ünde TDV adresi yok. **İki bağımsız ölçüm, aynı hüküm.**
⇒ `BES-ALTYAPI ②` (yerleşim) ile `⑤` (koridor) arasında ölçülmüş bir bağ:
`A` kolu km²/nokta sayıyor, koridor *"ara durak bulabildim mi"* diye soruyor.

## ② KOL A'YA DEVREDİLEN — beş ÖLÇÜLMÜŞ aralık

```
Delhi–Agra          180 km · arada HİÇBİR nokta yok  ← iki başkent arası
Feyzâbâd–Patna      326 km
Patna–Murşidâbâd    353 km
Koil–Kannauc        203 km
Sirhind–Pânipat     150 km
+ Yukarı Mısır: Asyût · Kena YOK ⇒ Nil kolu yazılamadı
```
Her biri kapandığında bir koridor kenarı banda giriyor. *"Nokta lazım"*
değil, **adreslenmiş boşluk.**

## ③ İKİ BAĞIMSIZ ÖLÇÜM BİRBİRİNİ DÜZELTTİ (M-0100 ↔ M-0277 · çakıştırma M-0558)

```
o beni  : `Firecik` veride YOK demiştim → `Ferecik (Feres)` VAR, tek harf
ben onu : `Yenişehir` → Bursa demişti  → doğrusu Larissa
          (zincir lanzaka→yenisehir→izdin→istefe Teselya'da;
           Larissa komşularına 135 ve 84 km · Bursa 560 ve 620 km)
```
🟢 Ve `Yenişehir` kararı **ancak yama inince sınanabilir oldu** — komşuları
koordinat kazandı. **Yama, kendi kararlarından birini doğrulanabilir kıldı.**

## ④ AD ALANI ÇAKIŞMASI — dosya sahipliğinin GÖRMEDİĞİ kusur

İki oturum aynı kola verilmişti ve ikisi de `window.KORIDOR_YAMA` yazdı —
biri DİZİ, öteki NESNE. Birlikte yüklenirse **23 düğüm + 1 kenar → ya 23 ya 1.**
```
benim kapım  kendi dosyamı okuyor   → tek başına KUSURSUZ
onun kapısı  kendi dosyasını okuyor → tek başına KUSURSUZ
çakışma      İKİSİ AYNI ANDA YÜKLENİNCE doğuyor
```
⇒ `§7` **dosyayı** koruyor, **ad alanını** korumuyor. Çare: kapıya *"eski ad
hâlâ tanımlı mı"* dalı (üreteç her koşuda dosyayı baştan yazdığı için
elle düzeltmek yetmezdi).

---

# GÖREV 2 — KADEME-ASYA

## ⓪ BİTİŞ ÖLÇÜTÜ — sayıyla

```
536 kademesiz nokta vardı → 127'sine KAYIT yazıldı
   k:1 → 69 · k:2 → 55 · k: YAZILMAYAN → 3 (üçünün de nedeni yazılı)
   kd: taşıyan 124 · coklu_merkez:true 54
409 nokta ARAŞTIRILMADI
başka kademe dosyalarıyla ORTAK AD: 0
```
🟢 **`kd:` sayacı SIFIRDAN çıktı.** `KADEME-KD.md §②` ölçümü *"`kd:` yazılı
kayıt **0** — alan CANLI, veri SIFIR"* diyordu. İlk 124 kayıt bu dosyada.

## ① ÖNGÖRÜLERİM — ölçümden ÖNCE yazıldı (M-0311), şimdi PUANLANIYOR

```
(a) k:1 kümesi en kolay ve en sağlam doğrulanacak, karşılığı
    devletler.js künyelerinde duruyor                      🟢 TUTTU
    127 kaydın 120'si başkent çapraz eşlemesinden geldi
(b) "kaynak susuyor" oranı %50'nin ÜSTÜNDE çıkacak          🔴 ÇÜRÜDÜ
    8 TDV araması: 5'i kademe verdi, 3'ü vermedi = %37,5
    ⚠️ AMA örneklem 8 ve SEÇİMİ TARAFLI — en tanınmış şehirleri seçtim.
      Gerçek oran daha yüksek çıkabilir; "çürüdü" hükmü BU ÖRNEKLEM içindir.
(c) Doğu Asya TDV'de idarî taksimat taneciğinde neredeyse hiç
    konuşmayacak                                            🟢 TUTTU
    cin--ulke Ming/Qing yerine MODERN taksimat veriyor (1989 nüfusu);
    japonya han/daimyo düzenini şehir düzeyinde vermiyor
```
📌 Ve bilgiyi taşıyan **çürüyen** oldu: (b) yanlış çıkmasaydı örneklem
taraflılığını hiç fark etmezdim.

## ② KABUL KAPISI — altısı da koşuldu

```
① node ile okundu       127 kayıt · mükerrer ad 0
② ad veride VAR MI      uygulanamayacak kayıt 0 · zaten kademesi olana yazan 0
③ kaynak alanı          kayıt satırı 127 = `,kaynak:"` alanı olan 127 = node 127
④ k: yazılmayan         3, ve ÜÇÜNÜN DE nedeni yazılı · neden: boş olan 0
                        kd: aralık bozuk (ters/sıfır/ufuk dışı) 0
⑤ bayt_denetle.py       kod=0
⑥ git status            commit'li (fb730e8 ve öncesi)
```

## ③ ALTI SESSİZ DÜŞME — hepsi bende, hepsini İKİNCİ SAYIM yakaladı

Hiçbirini bir denetim betiği bulmadı; çünkü hiçbir denetim *"kaç tane
OLMALIYDI"* diye sormuyor.
```
① ÜÇ HANELİ YIL    "918-01-01" > "1281-01-01" (metin karşılaştırması)
                   goryeo · pagan · song kırpılırken 4 kayıt yok oldu
② AYIRAÇ           `baskent` alanı "/" ve "·" da kullanıyor; Bâbürlü'nün
                   başkenti AGRA hiç aday olmadı ("Delhi / Agra")   → +11 kayıt
③ TRANSLİTERASYON  "Murshidabad" ↔ "Murşidâbâd" · "Bahawalpur" ↔ "Bahâvelpûr"
                   "Junagadh" ↔ "Cûnâgadh" · "Banda Aceh" ↔ "Banda Açe"
                   "Faizabad" ↔ "Feyzâbâd"                          → +5 kayıt
④ ÇIKTI SAYACI     üretici "125" bastı, dosyada 130 vardı (faz 2'yi saymıyordu)
⑤ KAPI ③          "kaynak:" kelimesini dosyanın HER YERİNDE saydı (245 vs 127)
⑥ glob YOLU        Windows "\" döndürdü, kendi dosyamı TANIYAMADIM
```
🔴 **Ve ③'te bulanık eşik DOĞRUYU eleyip YANLIŞI geçirdi:**
```
Bahâvelpûr ↔ Bahawalpur  0,80  ← DOĞRU, eşik ELEDİ
Bhâgalpûr  ↔ Bahawalpur  0,84  ← YANLIŞ, eşik GEÇİRDİ (Bihar ↔ Pencap, ~1500 km)
```
⇒ Benzerlik oranı bir **sıralama** aracıdır, bir **karar** aracı değil.
Kararı koordinat verdi. Aracı *"karar verme, aday listele"* diye kurmuş
olmam, yanlış kaydı yazmamı engelleyen tek şeydi.

## ④ KUTU ÇAKIŞMASI — sordum, sonra sormanın gereksiz olduğunu ölçtüm

M-0330'da koordinatörden *"öteki kutuları yaz"* istemiştim. Sonra:
```
ÖLÇTÜĞÜM  : kutuları bilmeye GEREK YOK — yama dosyaları diskte duruyor,
            aynı `ad` iki dosyada varsa çakışma ZATEN GERÇEKLEŞMİŞTİR
ÇIKARIMIM : "kutular kesişiyor mu" YANLIŞ SORU.
            Doğrusu "aynı noktaya iki kayıt yazılmış mı" — ve o BEKLENMEZ, ölçülür
```
`data/kademe_4ff22b.js` ile **7 ortak ad**: beşinde değer AYNI (iki ayrı
oturum, iki ayrı yöntem — bağımsız doğrulama), ikisinde farklı. Orta Asya'nın
beşi ona devredildi, Sind'in ikisi bende kaldı; karar **yatay** yazıldı
(M-0408) ve **geri alma daveti** ile birlikte gitti. Kabul etti (M-0425),
uyguladı, **ortak ad 0**.

⚠️ Ve karşı oturum bana bir ADRES DERSİ verdi: `--kime` alanına dosya yolu
yazmıştım; doğrusu karşı tarafın **tahtada kayıtlı adı**. Mesaj ancak onun
nöbetçisinin adres-tuzağı yakalayıcısı sayesinde ulaştı.

## ⑤ ŞARTNAME KUSURU — bildirildi (M-0414)

`KADEME-ASYA.md` **kutuyla** `lat -11..55 / lon 63..146` diyor, **düz metinle**
*"Hint · Çin · Japonya · Kore · Güneydoğu Asya"* diyor. Kutu Orta Asya'yı
içeriyor, metin içermiyor. **Metni seçtim ve seçtiğimi yazdım** — bu bir
TERCİHTİ, ölçüm değil.

## ⑥ ÖLÇÜLMÜŞ KAPSAM SINIRLARI — tıkanma değil, SONUÇ

```
TDV `baburluler`  HİYERARŞİYİ veriyor: "Sûbeler 'serkâr' denilen kazalara
                  bölünmüştü · Her serkâr 'pergene' adı verilen nahiyelere
                  ayrılmıştı" + sûbe BÖLGELERİ
TDV `hindistan`   sûbe listesini ve MERKEZLERİNİ vermiyor
TDV `dekken`      Bâbürlü Dekken sûbesinin merkezini adlandırmıyor
TDV `cin--ulke`   Ming/Qing yerine MODERN taksimat (1989 nüfusu)
TDV `japonya`     han/daimyo düzenini şehir düzeyinde vermiyor
```
⇒ **Hiyerarşi kaynaklı, ATAMA kaynaksız.** Doğu Asya'da sınır daha sert.

## ⑦ M-0441 (beşinci TDV tuzağı) UYGULANDI ve KENDİ HÜKMÜMÜ ÇÜRÜTTÜ

```
ilahabad · ilahabad--sehir · ilahabad--hindistan   302 ÖLÜ
allahabad                    200 · 93 KB · ALLAHÂBÂD   ← GERÇEK MADDE
```
*"Erişemedim"* hükmüm **erkendi**; doğru adres vardı. Kayıt düzeltildi.
📌 Bir slug denemek *"aradım"* değildir.

🟢 **Ve tuzağa ucuz bir çare ölçüldü:** M-0441 ölü slugun 1542 bayt gövde
döndürdüğünü söylüyor; bende 15 bayt döndü. Fark: **yönlendirmeyi
izlemiyorum.** ⇒ Ölçüt gövde boyu değil, **izlenmemiş HTTP kodu** olmalı.
Eşik ayarlamak tuzağı kovalar; yönlendirmeyi izlememek onu **ortadan
kaldırır**.

## ⑧ NE YAPMADIM — açıkça

- 409 nokta araştırılmadı (Çin ~130 · Hindistan ~85 · GD Asya · Kore · Japonya).
- Doğu Asya'ya yalnız **başkent** kaydı var; eyalet/prefektür merkezleri YOK.
- `data/yerlesimler*.js`e dokunmadım — yamayı koordinatör işler.
- Statik `k:` eşiğim (1/3) koordinatör onayı **bekliyor** (M-0330 H1).

---

# GÖREV 1 — KORİDOR HALKA2B

**Dosyam** `data/koridor_f5c9a5.js` · tahta **M-0233**

---

## ① BİTİŞ ÖLÇÜTÜ — sayıyla

```
4 kol → 4 kol YAZILDI          (İran · Rusya · Lehistan · Venedik)
düğüm  37  = 31 YENİ + 6 bağlantı ucu
kenar  33  = 27 saati türetilmiş + 6 KOPUK
kaynaksız durak  31 tane ve 31'i de kesinlik:3 · kaynak:"bulunamadı"
yeni nokta yaratılan  0        — hepsi girdi.yukle()'den SEÇİLDİ
```

## ② KABUL KAPISI — altısı da koşuldu, altısı da yeşil

```
① node ile okundu            düğüm 37 · kenar 33 · mükerrer id 0
② KIRIK UÇ                   0
③ TEK PARÇA                  hiçbir eski düğüme değmeyen kolum: 0
                             ⚠️ birleşik ağ 2 parça — sebebi BENDE DEĞİL, aşağıda ⑤
④ ÇİFT BOYAMA                0   (öteki iki dosyada boyar:true olan 49 kimlik tarandı)
                             bağlantı ucu olup ötekinde tanımlı olmayan: 0
⑤ SAAT/KM                    saati türetilmiş 27 kenarın 3-28 saat bandı dışında: 0
                             km/saat tutarsızlığı 0 · saat:null ↔ saat_cinsi tutarsızlığı 0
⑥ kaynak alanı               düğüm 37/37 · kenar 33/33
```

🔴 **VE İKİ SAYI AYRI DURUR — tek satırda birleştirmiyorum:**
```
ÖLÇTÜĞÜM  : saati türetilmiş 27 kenarın 27'si de TDV'nin 3-28 saat bandının İÇİNDE
ÖLÇTÜĞÜM  : 6 kenarın saati TÜRETİLMEDİ (kopuk)
ÇIKARIMIM : bu 6, "bandı ihlal" DEĞİL "ölçülemedi"dir — ve "ölçülemedi" asla
            "temiz" diye raporlanmaz
```

## ③ ZAMAN ÇERÇEVESİ — devraldığım rakamı DOĞRULAMADAN aktarmadım (B10)

`islamansiklopedisi.org.tr/menzil--osmanli` **kendim çektim, gövdesi geldi:**
```
"Kanûnî Sultan Süleyman döneminde 946'da (1539) Vezîriâzam Lutfi Paşa
 menzil sistemini yeni baştan teşkilâtlandırdı"
"1839'da posta teşkilâtı kurularak menzil sistemi tamamen yürürlükten kaldırıldı"
"üç saatten yirmi sekiz saate kadar olan mesafelerde tesis edilmiştir"
```
⇒ Şartnamedeki üç sayının üçü de **doğrulandı.** Ana kolların ADLARI ve
DURAKLARI ise maddede **yok** — şartname bunu da doğru söylüyordu.

## ④ ŞARTNAMEDE ÇÜRÜYEN SAYI

```
ŞARTNAME  : "18 delik buldu"
ÖLÇTÜĞÜM  : py arac/koridor_olc.py → 65 düğüm · 39 yere oturmuş · 26'sı koordinatsız
ÇIKARIMIM : şartnamedeki 18 bayat. İşimi 26 üzerinden kurdum.
```

## ⑤ 🔴 ÜÇ BULGU — üçü de BENİM DOSYAMDA DEĞİL, bildiriyorum

### ⑤a — koridor.js'in "26 deliği"nin 19'u BUGÜN KAPATILABİLİR

`yerlesimler_ek29.js` (NOKTA MENZİL, dün) tam da bu durakları yazmış. Ölçüm:
```
🟢 adı BİREBİR eşleşti VE coğrafî sınavı geçti (koridor komşusuna ≤250 km)  19
   Üsküdar · İshaklı · Ilgın · Karapınar · Ulukışla · Tosya · Harput · Lâdik ·
   Karahisar-ı Şarkî · Kelkit · Aşkale · Vize · Prevadi · Babadağı · İshakçı ·
   Silivri · Yagodina · Pravişte · Lanzaka
🟡 adı eşleşti ama SINANAMADI (komşularının da koordinatı yok)               3
   Yenişehir → Yenişehir (Larissa) · İzdin → İzdin (Lamia) · İstefe → İstefe (Tebai)
   ⇒ üçü de rumeli/sol'un Teselya-Boiotia kuyruğunda; adlar tek anlamlı ama
     "sınandı" DEMİYORUM, "sınanamadı" diyorum.
🔴 veride adı HİÇ YOK                                                        4
   Hasan Çelebi · Hasankale · Karasu · Firecik
19 + 3 + 4 = 26 ✓
```
⚠️ **Ve bu ölçümün İLK SÜRÜMÜ İKİ YANLIŞ ÜRETTİ** — ad benzerliğiyle eşledi:
`Karasu → Karasubazar` (Kırım'da, oysa durak Dobruca'da) ve
`Yenişehir → Yenişehir (Bursa)` (oysa Yenişehir-i Fener = Larissa).
⇒ Eşleme **birebir ada** çevrildi ve **coğrafî sınav** eklendi. *Ölçüm doğruydu,
çıkarım yanlıştı* — `CLAUDE.md §11`'in o gün altı kez ölçülen sınıfı.

### ⑤b — 🔴 BİRLEŞİK KORİDOR AĞI TEK PARÇA DEĞİL: BOĞAZ GEÇİŞİ YOK

```
koridor.js + koridor_halka2.js + benimki = 106 düğüm · 107 kenar · 2 PARÇA
   62 düğüm  Rumeli kanadı (+ Avusturya kolu + benim 3 kolum)
   44 düğüm  Anadolu kanadı (+ benim İran kolum)
KESİK YERİ: koridor.js'te `istanbul` ile `uskudar` arasında KENAR YOK.
```
`uskudar` düğümü **var** (`anadolu/sag#1` · `anadolu/orta#1`) ama İstanbul'a
bağlanmıyor: `istanbul`un üç kenarı da Rumeli'ye gidiyor (vize · silivri ·
tekirdağ). ⇒ **Menzil ağının kalbi olan Boğaz geçişi ağda yok.**
📌 Ve şartnamenin kendi cümlesi bunu öngörüyordu: *"var olmayan bir kaydı hiçbir
Değişmez sorgulamıyor — koridor, yokluğu ölçebilen tek alet."* Bu, aletin
kendi kurucusunda bulduğu ilk yokluk.

### ⑤c — `koridor_olc.py` yalnız `koridor.js` OKUYOR

`arac/koridor_olc.py:31` tek dosyaya bakıyor: `koridor_halka2.js` ve benim
dosyam **ölçümüne hiç girmiyor.** Yani araç bugün *"65 düğüm"* diyor, birleşik
gerçek **106**. ⚠️ Araç yanlış DEĞİL, **evreni dar** — ve `arac/` benim değil.

## ⑥ İKİ GÜZERGÂH KARARI — gerekçesi ÖLÇÜM, tercih değil

**① İran kolu Van'dan sonra GÜNEY hattından geçiyor.**
```
KUZEY (klasik Van-Hoy-Merend)      Van→Hoy 135,7 km / 31,9 sa   🔴 bant dışı
GÜNEY (Van-Başkale-Selmâs-Merend)  17,4 · 16,1 · 21,6 saat       🟢 tamamen içinde
```
Hoy düşürülmedi: Selmâs'tan **tâli kol** olarak asıldı (42,4 km / 10,0 sa).
⚠️ İkisi de kaynaksız; seçimi yapan **TDV'nin kendi bandı** oldu.

**② Venedik kolu Draç/Avlonya'da bitiyor, Venedik şehri YAZILMADI.**
Adriyatik'i geçen ayak **başka bir kurumdur** (Venedik posta sistemi) ve onu
ölçmedim. `koridor_halka2.js`'in *"1839'u başka bir kuruma taşımam"* kararının
aynısı.

## ⑦ ALTI KOPUK KENAR — hepsi `eksik_durak:true` ALANIYLA, serbest metinle değil

```
diyarbakir → h2b-bitlis    172,4 km   Silvan · Tatvan · Ahlat · Adilcevaz veride YOK
ozi        → h2b-orkapi    172,6 km   Kilburun · Yediçkul durakları veride YOK
h2b-taman  → h2b-azak      297,5 km   Azak Denizi doğu kıyısı boş; bağ DENİZ aşırıydı
h2b-yazlofca → h2b-lvov    141,8 km   Haliç (Halicz) · Rohatin veride YOK
lanzaka    → h2b-selanik   ölçülemedi uç düğümün koordinatı koridor.js'te YOK (⑤a)
h2b-selanik → h2b-manastir 142,2 km   Vodina (Edessa) · Ostrovo veride YOK
```
📌 Boşluk `neden:` gibi bir **serbest metne** değil `eksik_durak:true` **alanına**
yazıldı: *bir `if` ile sorulamayan ders, ders değildir* (`CLAUDE.md §11`, ⑪. sınıf).
⇒ Bir sonraki nokta oturumu **tek sorguyla** kendi iş listesini çıkarabilir.

## ⑧ KAYNAK — ne buldum, ne bulamadım

```
🟢 TDV menzil--osmanli   HTTP 200 · gövde okundu · üç sayı da doğrulandı
🔴 TDV kamanice          HTTP 200 · gövde okundu · YOL/GÜZERGÂH ANLATMIYOR
                         Hotin · Yaş · Suçava · Çernovitz · Lvov adları GEÇMİYOR
                         ⇒ "aradım, YOK" — "aramadım" değil
```
Bütün duraklar `kaynak:"bulunamadı"` · `kesinlik:3`. **Seçilmiş durak ile
uydurulmuş durak ayrı şeydir**: 31 durağın 31'i de veride zaten vardı.

## ⑨ NE YAPMADIM — açıkça

- `koridor.js` · `koridor_halka2.js` · `yerlesimler*` · `arac/*` — **dokunmadım.**
- ⑤a'nın 19 deliğini **kapatmadım** (koridor.js benim değil) — ölçtüm, bildirdim.
- ⑤b'nin Boğaz kenarını **eklemedim** — aynı sebep.
- Dosyamı `index.html`e / `girdi.py`ye **bağlamadım** — koordinatörün işi.
- Venedik şehri ve Adriyatik geçişi **yazılmadı** (⑥②).
