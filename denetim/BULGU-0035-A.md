# BULGU-0035-A — H-0015: kullanıcıya görünen metinde kalan İÇ İŞ NOTLARI

**Oturum:** OPUS HAZIR KITA 101 · **Parti:** parti-emrelic-0035 · **Madde:** H-0015
**Sevk:** 1.MURAT, tahta M-1903

## Şikâyet

> "ummanlıların bahseyni istilası konusu madde içeriğinde ilginç ifadeler var
> tek blok yoksa birkaç dönem filan bazı kirli ifadeler var ne alakası var ise
> bunları kaldırmak mı gerekir düzeltilmeli mi ne demek isteniyor orada"

## Ölçüm

1277 kronoloji maddesinin **görünür** alanları (`b` · `d` · `gun` · `yer` ·
`kisiler`) node ile — kendi regex'imle değil, dosyaları kendi dilinde okuyarak —
tarandı. JS yorum satırları (`//`) **hariç tutuldu**: onlar kullanıcıya görünmez
ve meşrudur.

```
işaretli madde-alan (⚠️ · 🔴 · TODO · 'bu turda' …)   71
bunlardan KULLANICIYA GÖRÜNEN iç iş notu               20
```

### İki sınıf var ve çareleri FARKLI

| sınıf | örnek | hüküm |
|---|---|---|
| 🟢 **A · kaynak şeffaflığı** | "TDV yalnız yılı veriyor, günü vermiyor" | okuyucuya dönük, **KALSIN** |
| 🔴 **B · iç iş notu** | "CLAUDE.md §8" · "data/yerlesimler.js" · "Oturum 14 bu noktayı yuvarlamıştı" | okuyucunun bilemeyeceği şeye atıf, **ÇIKARILSIN** |

⚠️ Çoğu satır **karma**: A cümlesinin sonunda B atfı var. O yüzden çare
*"cümleyi sil"* değil, **"projeye ait atfı çıkar, kaynak bilgisini bırak"**.

### Önerilen dönüşüm kuralı (üç kalem)

```
① "… kayıt ayın ilkine yazıldı (CLAUDE.md §8)."
   → "… kayıt ayın ilkine yazıldı."          (parantezi at, cümle kalsın)
② "(bkz. OTURUM-13-ANADOLU.md §4)" · "data/yerlesimler.js'teki … kaydı" ·
   "Oturum 14 bu noktayı yuvarlamıştı" · "koordinatöre bildirildi (M-…)"
   → TAMAMEN ÇIKAR. Okuyucu için bilgi taşımıyor.
③ "⚠️ Bu pencerenin iç ayrıntısı bu turda kesinleştirilemedi; kayıt
    yazılırken tek blok mu … ayrı bir ölçüm ister."   (Emre'nin gördüğü)
   → "Bu otuz beş yılın iç ayrıntısı kaynaklarda kesin değildir."
      (iş notu DEĞİL, kaynak durumu — okuyucuya dönük hâle gelir)
```

## Uygulanabilir liste — dosya : satır

### `data/olaylar_ek10.js:372`

imza: `CLAUDE.md`

```
…e Bulgaristan elçilerinin pasaportları ellerine verildi, ertesi gün bu iki devlet, ardından Yunanistan savaş ilân etti. ⚠️ Kronolojide bu olay bugüne kadar ay hassasiyetli `1912-10` olarak duruyordu; CLAUDE.md §8 gün yazılmasını şart koşuyor.",…
```

### `data/olaylar_ek11.js:77`

imza: `OTURUM-13-ANADOLU.md`

```
…a Osmanlı idaresine girdi. ⚠️ Tarihte TDV kendi içinde ayrışıyor: `aydinogullari` maddesi 829 (1425-26), `cuneyd-bey` maddesi 1426 veriyor; haritadaki 1425-06-01 kırılması ikisinden de erkendir (bkz. OTURUM-13-ANADOLU.md §4).",…
```

### `data/olaylar_ek13.js:301`

imza: `bu turda kesinleştirilemedi`

```
…lâ etti ve Safevî hâkimiyeti sona erdi. Bunu izleyen otuz beş yıl körfezin en karışık dönemidir: ada Umman, İran ve yerel Arap güçleri arasında birkaç kez el değiştirdi. ⚠️ Bu pencerenin iç ayrıntısı bu turda kesinleştirilemedi; kayıt yazılırken tek blok mu yoksa birkaç dönem mi olacağı ayrı bir ölçüm ister.",…
```

### `data/olaylar_ek13.js:336`

imza: `bu turda çözülemedi`

```
…ni İngiltere'ye bağlayan himaye düzeninin ilk halkasıdır ve ada, Osmanlı'nın 1871'de Lahsa ile Katîf'e yeniden yerleşmesinden sonra da bu düzenin dışında kaldı. ⚠️ İki tarih arasındaki on günlük fark bu turda çözülemedi; atlas bugün 31 Mayıs'ı taşıyor.",…
```

### `data/olaylar_ek13.js:421`

imza: `padisahlar.js`

```
…gun:"Mart 1362 (gün bilinmiyor; kaynakların bir kısmı Nisan 1362 der. `padisahlar.js` 1362-03 taşıyor)",…
```

### `data/olaylar_ek17.js:202`

imza: `yerlesimler.js`

```
…ddeleri bu üç yerleşimi ayrı ayrı ANMIYOR; tarih Kars'ın kendi fetih gününe dayanarak ÇIKARIMLA verilmiştir, TDV alıntısı değildir. 🔴 GÖREV TARİFİNDEKİ Gümrü ve Eçmiyadzin BU MADDEYE DAHİL EDİLMEDİ — yerlesimler.js kaydında ikisinin de bu tarihte (hatta hiçbir zaman 1828'e/Rusya'ya kadar) Osmanlı dönemi yok, akkoyunlu→safevi→afşar→zend→kacar zinciri kesintisiz. Bu bir veri çelişkisidir, koordinatöre bekletilmeden bildirildi (M-1368), çözülene kadar yazılma…
```

### `data/olaylar_ek17.js:234`

imza: `data/yerlesimler_ek_macaristan.js`

```
…kale 17 Ocak 1688'de General Antonio Caraffa'ya teslim edildi. Bu, Osmanlı-Habsburg cephesinde Macaristan'daki Osmanlı yanlısı direnişin son büyük kalelerinden birinin düşüşüydü. ⚠️ VERİ DÜZELTMESİ: `data/yerlesimler_ek_macaristan.js`'i yazan oturum, Değişmez 2'yi açmamak için BİLEREK bu tarihi Eğri'nin (Eger, ~250 km uzak, ayrı bir kuşatma) düşüş gününe (1687-12-17) eşitlemiş ve bunu kendi yorumunda açıkça 'sadeleştirme, ölçüm değil' diye işaretlemişti —…
```

### `data/olaylar_ek17.js:235`

imza: `CLAUDE.md`

```
…n müstakil maddesi yok, 17 Ocak 1688 tarihi çok sayıda yayımlanmış başvuru eserinde (hungarianottomanwars.com, Encyclopedia.com, Wikipedia) tekrarlanıyor ama hakemli akademik kaynakta doğrulanamadı — CLAUDE.md §4 kırmızı çizgisi gereği bu popüler/derleme kaynaklar tek dayanak sayılmadı, eksiklik açıkça yazıldı" },…
```

### `data/olaylar_ek19.js:15`

imza: `CLAUDE.md`

```
…d:"⚠️ TDV İslâm Ansiklopedisi'nde bu olayın müstakil maddesi yok — konu TDV'nin coğrafî/tematik kapsamı dışında (Avrupa'nın iç tarihi, CLAUDE.md §4); standart akademik kaynak kullanıldı. Kral XVI. Louis'nin maliye bakanı Necker'i azletmesinin (11 Temmuz 1789) yarattığı öfke ve ekonomik bunalımın ortasında, Paris halkı silah ve barut talebiyle Bastille kalesine yürüdü. Öğleden sonra başlayan ç…
```

### `data/olaylar_ek21.js:29`

imza: `CLAUDE.md`

```
…ler.\" Rus kuvvetlerinin çekilmesinin ardından Osmanlılar kaleyi yeniden yaptırdı; 1813-1814 tarihli kitâbe bu onarımın kaydıdır. ⚠️ TDV yalnız ayı veriyor, günü vermiyor — kayıt ayın ilkine yazıldı (CLAUDE.md §8).",…
```

### `data/olaylar_ek21.js:43`

imza: `CLAUDE.md`

```
…u bildirdi.\" Aynı kale 1827-1828 savaşında Ruslar tarafından yeniden alınacak ve o kuşatmayı Helmuth von Moltke ayrıntılı biçimde anlatacaktır. ⚠️ TDV yalnız ayı veriyor — kayıt ayın ilkine yazıldı (CLAUDE.md §8).",…
```

### `data/olaylar_ek21.js:57`

imza: `CLAUDE.md`

```
…minde Slobozia'da kuşatılan Tuna ordusunun âkıbeti, bu geri çekilişin ardından gelen kısa Osmanlı üstünlüğünün nasıl tersine döndüğünü gösterir. ⚠️ TDV yalnız ayı veriyor — kayıt ayın ilkine yazıldı (CLAUDE.md §8).",…
```

### `data/olaylar_ek21.js:76`

imza: `CLAUDE.md`

```
…1509'da şehri zaptedip Rumlu oymaklarından birini buraya yerleştirdi. 1538'de Şirvan doğrudan Safevî hâkimiyetine girince...\" ⚠️ TDV yalnız yılı veriyor, günü vermiyor — kayıt yılın ilkine yazıldı (CLAUDE.md §8).",…
```

### `data/olaylar_ek21.js:92`

imza: `CLAUDE.md`

```
…z kırk yıl boyunca Osmanlı'nın kuzeydoğu serhaddinin kilidi olarak kalacak, 1877-78 savaşının ardından Rusya'ya bırakılacaktır. ⚠️ TDV yalnız yılı veriyor, günü vermiyor — kayıt yılın ilkine yazıldı (CLAUDE.md §8).",…
```

### `data/olaylar_ek8.js:96`

imza: `atlas verisindeki kırılma günü`

```
…"gun": "1577 — atlas verisindeki kırılma günü; TDV asıl olayı 1551'e bağlıyor",…
```

### `data/olaylar_ek8.js:99`

imza: `oturumlar/NOKTA-HALKA2`

```
…L. Atlas verisinde bu 12 yerleşimin `hafsi` (Tunus Hafsî Devleti) dönemi 1577-01-01'e kadar sürüyor ve bu tarihte Osmanlı tâbiiyetine geçiyor — ama Hafsî Devleti'nin kendisi 1574-09-13'te sona erdi (`oturumlar/NOKTA-HALKA2-3.md`'nin önceki tespiti: 2,3 yıllık bir 'hayalet', çözülmemiş bilinen borç). Bu madde o iç tarihe DOĞRU İÇERİĞİ bağlıyor; tarihin kendisinin 1551'e çekilip çekilmeyeceği ayrı bir karardır, VERİ SAHİPLİK'e devredilmiştir.",…
```

### `data/olaylar_ek8.js:190`

imza: `CLAUDE.md`

```
…"kaynak": "suleyman-ii (TDV, genel bağlam — gün vermiyor) + Ive Mažuran, Hrvati i Osmansko Carstvo, Zagreb 1998, s.262-263 (kesin tarih; TDV bu taneciği kapsamıyor, CLAUDE.md §4)"…
```

### `data/olaylar_ek8.js:239`

imza: `yerlesimler.js`

```
…bn Ali ailesine karşı giriştiği mücadeleyi 1835'te kazanarak Hâil emirliğini ele geçirdi ve Reşîdî hânedanının hâkimiyetini kurdu. TDV kaynağı yalnız yılı veriyor, gün belirtmiyor. ⚠️ VERİ NOTU: data/yerlesimler.js'teki Hâil kaydı bu değişimi 1836-01-01 olarak taşıyor (1 yıl fark) — Değişmez 2 senkronu için yerleşim tarihinin 1835-01-01'e çekilmesi gerekir; bu düzeltme Yerleşim/Entegrasyon oturumuna aittir, benim yetkim dışında.",…
```

### `data/olaylar_ek9.js:70`

imza: `Oturum 14 bu noktayı`

```
…mp kurma emrini verdi; inşaata 18 Haziranda başlandı ve aynı yılın kasımında Yabancı Lejyon'un bir taburu buraya yerleşti. Kamp, Vehrân ile Tilimsan arasındaki iç ovayı denetleyen kalıcı bir üs oldu. Oturum 14 bu noktayı 1844-03-04'e yuvarlamıştı; gerçek tarih budur.",…
```

### `data/olaylar_ek9.js:82`

imza: `Oturum 14 bu tarihi`

```
…ü. Ağvât, Tell ile Sahra arasındaki geçişi tutan vaha şehriydi; düşmesi Fransız ilerleyişini çöl kervan yollarına açtı ve Mîzâb konfederasyonunun bir yıl içinde vergiye bağlanmasının önünü hazırladı. Oturum 14 bu tarihi 1854-12-02'ye (Tuggurt) yuvarlamak zorunda kalmıştı.",…
```

## Niçin BEN uygulamadım

M-1903 §④: *"VAR OLAN HİÇBİR PAYLAŞILAN VERİ DOSYASINA YAZMAYIN."*
Bu 20 satır `data/olaylar*.js` içinde, yani paylaşılan dosyalarda.
Var olan yama mekanizması da yetmiyor: `arac/yama_uygula.js` kronoloji
yamasını yalnız eşleşme/`yer_id` için uyguluyor, **metin değiştirmiyor**.

Üç yol koordinatöre soruldu (tahta M-1925): ① bana dar yazma izni ·
② `data/metin_yama_ok101.js` + uygulayıcıyı koordinatör yazsın ·
③ kapat. **Önerim ①** — bir turda biter.
