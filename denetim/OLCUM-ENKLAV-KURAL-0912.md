# Ⓑ ENKLAV KURALI — ÖLÇÜM (KITA 2, 12 Eylül 2026, tahta M-3566)

Görev **hüküm değil ölçüm**. Alet: `denetim/ARAC-ENKLAV-KURAL-0912.py`
(D023: `arac/denetle.py`nin KENDİ `degismez7()` fonksiyonu çalıştırıldı,
kendi ayrıştırıcım yazılmadı — üstüne yalnız "arada ne var" sorusunu
mekanik hâle getiren bir koridor testi eklendi). Ham çıktı:
`denetim/OLCUM-ENKLAV-KURAL-0912.json`.

## ① Dağılım — bugünkü 648 `degismez7` ihlali (650 tavan, güncel taban 648)

| Kova | Sayı |
|---|---|
| ② GERÇEK ENKLAV (arada YABANCI/tâbi-dışı yapı var) | **491** |
| ③(a) ARA YERLEŞİM VAR, zincire katılmamış — **veri işi** | **108** |
| ③(b) boş arazi, ≤200 km — BİRLEŞTİRİLEBİLİR | 14 |
| ③(b) boş arazi, >200 km — BİRLEŞMEZ | 35 |
| ölçülemedi (ana/ada eşleşmedi) | 0 |
| **TOPLAM** | **648** |

⚠️ **① için ayrı bir kova AÇILMADI — gerekçe:** Emre'nin ①'i ("devletin
toprakları arasındaki boşluk, içi boşsa enklav değil") ile ③(b)'nin
"≤200 km → birleştir" sonucu **aynı olguyu** anlatıyor: iki dilim
birleştirildiğinde artık tek bir devlet toprağı olur ve tanım gereği
enklav kalmaz — yani **③(b)_altinda200 = ①'in mekanik karşılığı.**
Bunu tek bir sayı olarak sunmak yerine iki ayrı kova (③a/③b) tutuldu ki
④'ün istediği "①/③b" karışıklığı gizlenmesin. **Alternatif okuma:** ①
tamamen ayrı bir kova olarak da tanımlanabilirdi (örn. "arada HİÇBİR
yerleşim yok VE mesafe önemsiz, dolayısıyla soru bile sorulmaz");
seçmedim çünkü sartname'nin ③(b)'si zaten aynı sonucu (birleştir/
birleştirme) üretiyor ve iki ayrı isim aynı sayıyı iki kez raporlamak
olurdu (D051 sınıfı: iki ayrı soru aynı cevabı verebilir, ama bu ikisi
**aynı soru**).

## ② EN DEĞERLİ KOVA — ③(a), 108 kayıt (ilk 60 aşağıda, tamamı JSON'da)

Yöntem: ada'nın test edilen noktası ile "ana" (en yakın aynı-sahip nokta)
arasındaki doğru parçasına ≤150 km (`D7_BAG_KM`) mesafede, **aynı sahibe
ait** ve gün itibarıyla dönemi geçerli bir yerleşim var mı? Varsa
listelendi — bu, zaten veride kayıtlı ama zincire (flood-fill'e) 150 km
tek-atlama sınırı ya da dönem uyuşmazlığı yüzünden katılmamış bir
noktadır; **çare bir yama değil, o noktanın kendi verisinin (ya da
mesafe/gün hizasının) gözden geçirilmesidir.**

```
1725-12-15  Odanak (Abenaki)           fransa            -> Tadoussac 77.6 km
1763-02-10  Odanak (Abenaki)           ingiliz-kuzey-amerika -> Tadoussac 77.6 km
1899-01-19  Debbe                      ingiltere         -> Ebû Hamed 96.5 · Berber 98.5 · Ed-Dâmer 142.2
1470-01-01  Iximché                    maya-sehir-devletleri -> Acalán (Itzamkanac) 148.7
1333-07-04  Funai (Ōita)               kenmu             -> Himeji 49.5 · Kyoto 121.9 · Osaka 138.8
1336-11-07  Funai (Ōita)               muromachi         -> Himeji 49.5 · Kyoto 121.9 · Osaka 138.8
1611-01-01  Hirosaki                   edo-bakufu        -> Niigata 85.2 · Aizu-Wakamatsu 97.7
1868-01-03  Hirosaki                   meiji-japonya     -> Niigata 85.2 · Aizu-Wakamatsu 97.7
1763-02-10  Trois-Rivières             ingiliz-kuzey-amerika -> Tadoussac 77.6
1867-07-01  Trois-Rivières             kanada            -> Tadoussac 77.6
1646-07-06  Shaoxing                   qing-hanedani     -> Nanking 95.0 · Anqing 95.8 · Yangzhou 122.8
1504-01-01  Kurmuk                     funj              -> Kosti 68.1 · Sincâ 124.0 · Sennar 128.3
1885-01-26  Kurmuk                     mehdi             -> Cebeleyn 94.4
1400-01-01  Utatlán (Q'umarkaj)        maya-sehir-devletleri -> Acalán (Itzamkanac) 148.7
1905-06-07  Oslo                       norvec            -> Bergen 127.5 · Ålesund 146.8
1700-01-01  Kanye (Ngvaketse)          tsvana            -> Serove 78.9 · Palapye 91.3
1885-03-31  Kanye (Ngvaketse)          ingiltere         -> Kuruman 149.7
1603-03-24  Kamakura                   edo-bakufu        -> Sendai 97.7
1603-03-24  Edo (Tokyo)                edo-bakufu        -> Sendai 97.7
1526-04-21  Câlandhar (Jalandhar)      babur-imparatorlugu -> Pânipat 107.6
1540-05-17  Câlandhar (Jalandhar)      sur-hanedani      -> Pânipat 107.6
1480-01-01  Ludhiyana                  delhi-sultanligi  -> Pânipat 107.6
1526-04-21  Ludhiyana                  babur-imparatorlugu -> Pânipat 107.6
1540-05-17  Ludhiyana                  sur-hanedani      -> Pânipat 107.6
1795-01-01  Battambang                 siyam-chakri      -> Ayutthaya 149.4
1884-07-18  Mayd                       ingiltere         -> Bulhar 60.2 · Burao 117.4 · Hargeysa 133.2
1884-07-18  Hîs                        ingiltere         -> Bulhar 60.2 · Burao 116.3 · Hargeysa 133.2
1821-06-14  Fâzûğlî                    OSMANLI           -> Sennar 60.4 · Cebeleyn 128.2 · Kosti 137.6
1504-01-01  Fâzûğlî                    funj              -> Sennar 60.4 · Cebeleyn 128.2 · Kosti 137.6
1660-01-01  İlyinsk                    rusya             -> Barguzin 88.6 · Buryat toprakları 104.3
1917-03-15  İlyinsk                    rusya-gecici-hukumet -> Buryat toprakları 117.4
1917-11-07  İlyinsk                    sovyet-rusya      -> Buryat toprakları 117.4
1338-01-01  Hûglî (Hooghly)            bengal-sultanligi -> Pandua 34.4 · Bhâgalpûr 148.7
1538-01-01  Hûglî (Hooghly)            sur-hanedani      -> Pandua 34.4 · Bhâgalpûr 148.7
1564-01-01  Hûglî (Hooghly)            bengal-sultanligi -> Pandua 34.4 · Bhâgalpûr 148.7
1576-07-12  Hûglî (Hooghly)            babur-imparatorlugu -> Pandua 34.4 · Bhâgalpûr 148.7
1632-06-24  Hûglî (Hooghly)            babur-imparatorlugu -> Kattak (Cuttack) 123.7
1333-07-04  Odawara                    kenmu             -> Kyoto 53.2 · Nara 79.9 · Osaka 81.0
1336-11-07  Odawara                    muromachi         -> Kyoto 53.2 · Nara 79.9 · Osaka 81.0
1573-01-01  Odawara                    azuchi-momoyama   -> Kyoto 53.2 · Nara 79.9 · Osaka 81.0
1640-12-01  Aveiro                     portekiz          -> Setúbal 29.2 · Évora 105.7
1665-01-01  Verhneudinsk               rusya             -> Barguzin 146.2
1917-03-15  Verhneudinsk               rusya-gecici-hukumet -> Barguzin 146.2
1917-11-07  Verhneudinsk               sovyet-rusya      -> Barguzin 146.2
1660-01-01  Kabansk                    rusya             -> Buryat toprakları 125.0 · Barguzin 100.4
1515-04-01  Dukm                       umman             -> Şüveymiye 57.8 · Hâsik 137.4
1368-01-23  Hangzhou                   ming-hanedani     -> Nanking 95.0 · Anqing 95.8 · Yangzhou 122.8
1644-04-25  Hangzhou                   guney-ming        -> Nanking 95.0 · Anqing 95.8 · Yangzhou 122.8
1912-02-12  Hangzhou                   cin-cumhuriyeti   -> Nanking 95.0 · Anqing 95.8 · Yangzhou 122.8
1861-02-13  Reggio Calabria            italya            -> Trapani 71.3
1861-02-13  Messina                    italya            -> Trapani 71.3
1318-01-01  Devagiri (Devletâbâd)      delhi-sultanligi  -> Elicpûr 139.1
1633-06-28  Devagiri (Devletâbâd)      babur-imparatorlugu -> Asîrgarh 14.7 · Elicpûr 135.0
1305-01-01  Mandu (Mândû)              delhi-sultanligi  -> Broaç 86.8 · Kanbâyet 87.0 · Sûrat 145.9
1739-09-18  Azak                       rusya             -> Bahmut 65.9
1917-03-15  Azak                       rusya-gecici-hukumet -> Bahmut 65.9
1917-11-07  Azak                       sovyet-rusya      -> Bahmut 65.9
1370-01-01  Semerkant                  timurlu           -> Hucend 143.8 · Termez 144.0
1500-01-01  Semerkant                  buhara            -> Hucend 143.8 · Termez 144.0
... 48 kayıt daha — tam liste denetim/OLCUM-ENKLAV-KURAL-0912.json → detay.③a
```

⚠️ **NOKTA — Fâzûğlî (OSMANLI, 1821-06-14) tek Osmanlı vakası bu kovada.**
Geri kalan 107'si YABANCI devletlerin (Fransa, İngiltere, Rusya, Japon
şogunlukları, Delhi Sultanlığı, Babür, Ming/Qing…) kendi enklav sorunu —
`degismez7` Osmanlı'ya özgü değil, VERİDEKİ HER devleti tarıyor. Bu bir
kusur değil: `CLAUDE.md §3.5.1`in "ters yön" dersiyle tutarlı, atlas
yalnız Osmanlı'yı değil dünyayı boyuyor.

## ③ Mekanik "arada ne var" testinin tanımı — seçim + gerekçe + alternatif

**Seçilen:** ada'nın test edilen noktası (p0) ile "ana" (en yakın
aynı-sahip nokta, p1) arasında **doğru parçası** çizilir; her üçüncü
nokta k için bu parçaya **en kısa uzaklık** (segment dışına düşerse uç
noktaya uzaklık) hesaplanır (düzlemsel yaklaşım, kıta-içi mesafelerde
haversine'den ayrışması ihmal edilebilir — km cinsine çevrilip Öklid
kullanıldı). **Eşik = 150 km, yani `D7_BAG_KM` ile AYNI sayı** — yeni bir
parametre icat edilmedi, projenin zaten "iki nokta bağlıdır" tanımı
olarak kullandığı sayı ödünç alındı.

**Elenen alternatifler:**
- *En kısa kara yolu / yol ağı*: veri yok, kurulamaz.
- *Voronoi/petek tamponu*: `uret_petek.py` motoru tek elde (M-3566), bu
  turda erişilebilir değil; ayrıca 4-5 saatlik bir koşu gerektirir
  (`degismez7`nin kendi yorumu, satır 2044).
- *Sabit yarıçap (p0 ve p1'in her birinden ayrı ayrı r km)*: iki bölgenin
  ARASINDAKİ dar bir koridoru (örn. Kuban vakası, `denetle.py` satır
  2115-2122) KAÇIRIR — segment mesafesi onu yakalar, yarıçap yakalamaz.

## ④ 200 km eşiğinin bugünkü veride kestiği

```
③(b) ≤200 km (BİRLEŞTİRİLEBİLİR, ①'in mekanik karşılığı):  14
③(b) >200 km (BİRLEŞMEZ, açık kalır)                        : 35
```

## ⑤ Cebel Merre sınav vakası (12,950°K / 24,270°D, Darfur)

🔴 **Cebel Merre bugünkü 648 ihlalin İÇİNDE DEĞİL** — kendi ölçtüm, sebebi
kayıtlı: 1874-1883 arası Mısır (Kavalalı) vassalı olduğu dönemde (`v:`),
"OSMANLI ailesi" içinde Kutum/Kebkâbiye gibi komşu Darfur noktalarıyla
150 km içinde zaten aynı bileşende — yani bu ÖZEL dönemde zaten bağlı,
ada oluşmuyor. Dolayısıyla gerçek 648 listesinde Cebel Merre'yi ②
sınıflandıran doğal bir örnek YOK.

⇒ Bu yüzden **sentetik bir mekanizma testi** koşuldu (kod:
`cebel_merre_sinav.py`, ayrı çalıştırıldı): Cebel Merre'nin "darfur"
sahipliğinde olduğu bir gün (1800-01-01) seçilip, onu Doğu (Nil kıyısı,
13,0°K/32,0°D) ile Batı (Vaday yönü, 13,0°K/16,0°D) arasına yerleştiren
varsayımsal bir Osmanlı-Osmanlı hattı çizildi:

```
Cebel Merre sahibi (1800-01-01): darfur
Hatta uzaklığı: 5.6 km (eşik 150 km) -> KORİDOR İÇİNDE
Sahibi Osmanlı mı: HAYIR (yabancı)
SONUÇ: alet bu durumu ② (GERÇEK ENKLAV) diye sınıflandırırdı.
```

**Beklenen davranış doğrulandı: alet, coğrafi olarak arada duran ve
yabancı sahipli bir yapıyı doğru şekilde ② işaretliyor.** Gerçek veri
kümesinde bu YAPISAL konfigürasyon (Osmanlı'nın Darfur'un HER İKİ
yanında olduğu bir an) hiç oluşmadığı için doğal bir örnekle
gösterilemedi — bu, ölçümün eksikliği değil, **verinin o senaryoyu hiç
üretmemesi.**

## Özet — üç şey istendi, üçü de ölçüldü

1. Dağılım: ② 491 · ③a 108 · ③b≤200 14 · ③b>200 35 (① ayrı kova değil,
   ③b≤200 ile aynı sonuç — gerekçe yukarıda).
2. ③a'nın 108 kaydı adıyla listelendi (tam liste JSON'da).
3. "Arada ne var" sorusu mekanik hâle getirildi (segment-mesafe, 150 km,
   D023 uyumlu — `denetle.py`nin `_d7_km`/`D7_BAG_KM`'i ödünç alındı).
4. 200 km eşiği: 14 altında, 35 üstünde.
5. Cebel Merre: gerçek veride ② örneği yok (Osmanlı'nın iki yanı
   birbirine hiç bakmıyor); sentetik testte mekanizma DOĞRU çalıştı.

COMMIT EDİLMEDİ (yalnız `denetim/` altında kendi dosyalarım — pathspec
ile commit edilebilir, §7 istisnası — ama teslim mesajdır, commit değil).
