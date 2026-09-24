# SINIR-D-AFRIKA-0077 — Afrika 1923 sınırları (çalışma defteri)

Şartname `oturumlar/SINIR-DUNYA-0077.md` · dosyam `data/d_sinirlar_afrika.js` · koordinatör YILDIRIM BAYEZIT.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (sınav anı: 24 Eylül 2026, ölçüm betiği henüz koşmadı)

Evren: `data/d_sinirlar_afrika.js` 41 kayıt; 1923-09-01 günü aktif E/D/C hatları; ölçü §4.2
(hattın 5 km iki yanı, doğru renk oranı). "Doğru" = noktanın o gün boyandığı gövde, hattın o
yanındaki tarafın HARİTADAKİ gövdesi (sömürge künyesi haritada metropol kimliğiyle çizildiği
için eşleme tablosu betikte beyanlı).

- **Ö1** Bugünkü kodla Afrika'da SONRA = ÖNCE, fark tam 0 nokta (yaslama 0 hat — tarayıcıda ölçüldü:
  32/32 aday "gövde o gün yok").
- **Ö2** Metropoller arası hatlarda ÖNCE doğru renk %60–80 aralığında (petek sınırı 5 km'de
  kıyı/nehir yaslanmasıyla kısmen tutar); aynı metropol içi hatlar (Kenya–Tanganyika vb.) %95+
  "doğru" çıkar ama bu anlamsızdır (iki yan aynı renk) — ayrı raporlanır.
- **Ö3** Sömürge künyelerine metropol eşlemesi SİMÜLE edilirse (yalnız sayfa belleğinde, dosyaya
  yazılmadan) metropoller arası hatlar ≥%90'a çıkar; en az bir hat "yön doğrulanamadı" ile atlanır.
- **Ö4** "%40 kapsamanın" ötesinde, D4 §5'in `bulunamadı` listesinden bu oturumda IBS ile en çok
  **6** yeni hat belgeye bağlanabilir (IBS PDF'leri erişilebilirse); bağlanamayanlar `bulunamadı`.
- **Ö5** Ruanda/Burundi–Tanganyika `sinif:"D"` terim tuzağı adayı: bu hatlar hukukî (MC mandası +
  Orts-Milner) — "hukuken geçersiz mi?" sorusunun cevabı HAYIR çıkarsa `E`/`C`'ye alınmalı.

- **Ö6** (21 yeni kayıt yazıldıktan SONRA, ölçümden ÖNCE — sınav anı 24 Eylül öğleden sonra): iki
  tarafı da 1923 haritasında gövdeli 13 yeni E hattından **en az 9'u** yaslamayla SONRA ≥%80 olur;
  Güney Afrika Birliği'ne değen 3 hat (`guney-afrika-birligi` gövdesiz) eşleme olmadan 0 yaslanır.
- **Ö4 SONUCU:** ÇÜRÜDÜ, ters yönde — 6 değil **21** hat IBS ile belgeye bağlandı (16 E, 5 C). Sebep:
  IBS dizisinin 175 PDF'i toptan indirilebildi; tahminim tek tek arama varsayıyordu.

## 1. Ölçümler

### 1.1 Yaslama performansı (tarayıcı, yerel sunucu, 1923-09-01, fitBounds(-180,-60,180,85))
ÖNCE (HEAD 5213f7c0, önbellekler sıfırlanıp `_dYaslaGuncelle` tek başına):
| küme | soğuk | hat | not |
|---|---|---|---|
| 9 aile | 56.686 ms | 78 | ana iş parçacığı TEK PARÇA donuk |
| eski 4 aile | 49.142 ms | 69 | beş ailenin payı +7,5 sn (%15) |
| yalnız AFRIKA | 5 ms | 0 | 32/32 aday "gövde o gün yok" |
| 9 aile sıcak | 33 ms | 78 | `_dGovdeOnbellek` |
| `guncelle()` 1281→1923 | 53.077 ms | — | kullanıcının göreceği donma |

Profil (sarmalayıcıyla, 86 sn'lik koşu): şerit kurulumu 41 sn (606 çağrı = 101 hat × 6 genişlik), küme
geri kalanı 22 sn, kesim+birleştirme 23 sn; en uzun tek `_dSeritTek` 1.211 ms, en uzun tek `_dPc` 912 ms.

SONRA (dilimli hesap: `_dYaslaPlanla` + üreteçler, MessageChannel ile 25 ms dilim; veri: koordinatörün
`harita:` eşlemesi inmiş hâli, 97 hat):
- en uzun TEK adım / dilim (`_dYaslaOlcu.dilimMax`): **1.677 ms** (1923-09-01) · 353 ms (1921-06-01)
- toplam duvar süresi 83,4 sn (gizli bölmede; sayfa bu sürede cevap veriyor — ölçüm çağrıları dilimler
  arasında cevaplandı) · 1.831 dilim
- ön hazırlık (`_dYaslaHazirla`) 20 ms · `guncelle()`nin kalan 2,7 sn'lik eşzamanlı kısmı app.js'in kendi işi
- sıcak (önbellekten) değişmedi: tek seferde uygulanır.
- `setTimeout` DENENDİ ve bırakıldı: gizli sekmede saniyede bire kısıldı, 25 ms'lik dilimlerle hesap
  dakikalarca sürdü.

SONUÇ DEĞİŞMEDİ — A/B (aynı sayfa, aynı veri; eski kod `git show HEAD:js/d_katman.js`ten, dört fonksiyon
`_E_` önekiyle yeniden adlandırılıp `"use strict"` çıkarılarak yüklendi — ilk deneme strict eval yüzünden
yeni kodu koşturmuştu, geçersiz sayıldı):
| gün | yeni dilimli | yeni eşzamanlı | ESKİ | yaslanan / yama / gövde | atlanan listesi |
|---|---|---|---|---|---|
| 1923-09-01 | b9b438fe | b9b438fe | b9b438fe | 97 / 162 / 44 | eşit |
| 1921-06-01 | 200c938b | — | 200c938b | 71 / 118 / 37 | eşit |
(imza = `_dYaslaSon`'daki her gövdenin JSON'unun FNV-1a özeti.) 1921 koşusu İPTAL yolundan geçti: 1923 işi
başladı, 4 sn sonra gün 1921'e alındı; 1923 işi ekrana hiçbir şey yazmadan bırakıldı, yalnız 1921 uygulandı.

Değişmeyen: `_dYaslaGuncelle` hâlâ EŞZAMANLI (öbür bölgelerin `-olc.js` betikleri onu çağırıp sonucu hemen
okuyor). Yalnız haritanın kendi üç çağrısı `_dYaslaPlanla`ya geçti.

### 1.2 Ölçüm aracının sınanması (B9) — `denetim/SINIR-D-AFRIKA-0077-olc.js`
- Pozitif: KOMSU ailesi, yaslama açık: %45,0 → %82,9 (yaslanan hatlar %46–65 → %90–100).
- Negatif (`ters:true`, sol_taraf çevrilmiş): SONRA %1,2 — araç yön hatasını görüyor.

### 1.3 Afrika ÖNCE → SONRA (1923-09-01, 5 km, 10 km adım, metropoller arası 16 hat, 3412 nokta)
- Kimlik eşlemesi yokken: %2,4 → %2,4 (Ö1 TUTTU: fark 0).
- Eşleme ÖLÇÜMDE beyanlı, yaslama yok: %40,6 (Ö2 ÇÜRÜDÜ: %60–80 beklemiştim).
- Eşleme sayfa belleğine yazılıp yalnız Afrika yaslandı: **%40,6 → %70,1**, 13 hat yaslandı; negatif %4,0
  (Ö3 kısmen çürüdü: ≥%90 beklemiştim; yaslanan hatlar %54–99).
- Yaslanamayan 3: Çad–Sudan (Sudan yakası `ingiltere` boyalı, `ingiliz-sudani` gövdesi şeritte 0 km²) ·
  Çad–Libya (Libya yakası BOŞ) · Angola–GB Afrika (yön doğrulanamadı 54.622/59.460 km²).
- 📌 Aynı metropolün iki kolonisi arasındaki hat (Kenya–Tanganyika, Becuanaland–GB Afrika, GB Afrika–K.Rodezya)
  eşlemeyle de renk AYIRMAZ (iki yan `ingiltere`). Yaslamadan fayda gören hat ~14, 78 değil — beklenti budur.

### 1.4 Yeni kayıtlardan sonra (koordinatörün `harita:` eşlemesi indi — 864c5abe; 62 kayıt; dilimli yaslama)
Yaslama: 109 hat (9 aile) · 46,3 sn duvar · en uzun adım 748 ms.
| küme | nokta | ÖNCE | SONRA |
|---|---|---|---|
| eski 16 metropoller arası hat | 3412 | %40,6 | **%70,1** (simülasyonla birebir aynı) |
| yeni 16 hat (IBS) | 1968 | %42,7 | **%69,9** |
| hepsi (farklı gövdeli) | 5380 | %41,3 | **%70,0** · negatif kontrol %6,6 |
Yeni hatlar tek tek (ÖNCE→SONRA): Eritre–Fr.Somali 50→100 · Fr.–İng.Somali 66,7→100 · Sudan–B.Kongo 50→100 ·
Tanganika–Mozambik 53,5→99,3 · Nijer–Nijerya 57,6→96,2 · Dahomey–Nijerya 50→95,9 · P.Gine–Senegal 42,6→85,3 ·
Eritre–Habeşistan 43,8→82,6 · Habeşistan–İng.Somali 39,5→80,3 · Uganda–B.Kongo 32,2→58,2 · Habeşistan–Fr.Somali
27,3→48,5 · İng.–İt.Somali 23,1→23,1 (yaslanmadı: İtalya gövdesi şeritte 0 km²) · Tanganika–B.Kongo 0→0 (ÖLÇÜ
ARTEFAKTI: hat göl orta hattı, 5 km'deki noktalar gölde; hat yaslandı) · Güney Afrika Birliği'ne değen 3 hat
yaslanmadı: `guney-afrika-birligi` gövde değil. Eşleme kanıtı: (28,-26.2) Johannesburg, (31,-29.9) Durban,
(25,-29) = ingiltere; (18.4,-33.9) Kap = BOŞ.
**Ö6 TUTTU (sınırda):** gövdeli 13 hattın tam 9'u ≥%80.

## 2. Veri değişikliği (`data/d_sinirlar_afrika.js`, 41 → 62 kayıt)
Betik `denetim/SINIR-D-AFRIKA-0077-ek.py` (D4-AFRIKA üreticisine dokunmaz; mevcut dosyayı okur, ekler; mevcut
41 kaydın baytları korunur — gidiş-dönüş byte-eşit sınandı). Kaynak taraması `denetim/SINIR-D-AFRIKA-0077-ibs.md`
(IBS 1–175 PDF'i, 36'sı okundu, 47 kalemin 38'i doğrulandı). Alıntılar IBS metninden; ben ayrıca 17 IBS'in
anahtar cümlesini metinden teyit ettim.
- **16 E:** Habeşistan–Fr.Somali (1897) · Habeşistan–İng.Somali (1897 Ek 3) · Eritre–Habeşistan (1900/1908) ·
  Eritre–Fr.Somali (1901) · Fr.–İng.Somali (1888) · İng.–İt.Somali (1894) · Sudan–B.Kongo (1894, Lado 1910) ·
  Uganda–B.Kongo (1915) · Tanganika–B.Kongo (1885 göl orta hattı) · Tanganika–Mozambik (1886, Kionga 1919) ·
  Mozambik–GAB (1869/1891) · G.Rodezya–GAB (1881) · Becuanaland–GAB (1881/1895) · Dahomey–Nijerya (1906) ·
  Nijer–Nijerya (1910) · P.Gine–Senegal (1906).
- **5 C** (belge var, bugünkü geometri 1923'ü vermiyor ya da tek dayanak dipnot): Kenya–Habeşistan (1907; 1970'te
  değişti) · Sudan–Habeşistan kuzey/güney (1902, yalnız IBS 152 dipnotu) · Mozambik–Svaziland (1923'te bir kesim
  ihtilaflı) · Sudan–Uganda (1914; 1926'da değişti).
- **Düzeltme:** `d1923-angola-belcika-kongo` dayanağı "bulunamadı" idi → IBS 144 (1885/1891/1913); `degisti:true`
  (22 Temmuz 1927 takası: Luao ve Noqui'de 1923 hattı farklı), kesinlik 10 → 30 km.
- Taraf künyesi olmayan sömürgeler (Uganda, İng./Fr./İt. Somali, Eritre, Svaziland) D4-AFRIKA'nın beyanlı geçici
  konvansiyonuyla metropol künyesi; her kayıtta `not`.
- Denetim: `node --check` temiz · `ARAC-MILIMETRIK-0923.js --hepsi` ① 0, pencere bozuk 0, hayalet 0; Afrika'da
  ② adayı 0/62.

## 3. Bulunamadı / açık
- Kimsede yok ve IBS'te de yok: Gambiya–Senegal (mevcut kayıt IBS'siz kalıyor), Eritre–Sudan, B.Kongo–K.Rodezya
  (yalnız IBS 44'te anılıyor), Altın Sahili–Yukarı Volta (IBS 128'de anılıyor), İsp.Ginesi–Kamerun/Gabon (IBS 115
  dipnotu). Brownlie *African Boundaries* (1979) / Hertslet *Map of Africa by Treaty* (1909) açılmadı.
- **1923 haritası için IBS'in söylediği farklar** (mevcut kayıtlarla ilişkisi): Kisaka (Gisaka) 21 Mart 1921 –
  1 Ocak 1924 Tanganika'da ⇒ `d1923-ruanda-tanganyika` (D, bugünkü Kagera hattı) 1923-09-01 için YANLIŞ geometri;
  D olduğu için hukukî görünümde çizilmiyor, ama Ö5'in cevabı: sınıf sorunu değil geometri sorunu — düzeltilmedi.
  Cubaland 1923'te Kenya · Turkana 1923'te Uganda · Tibesti 1923'te Nijer (FBA) · Sarra üçgeni 1923'te Sudan ⇒
  `d1923-sudan-libya` (C) bugünkü hat, 1923'ü vermiyor · Libya–Mısır 1923'te tahditsiz (ORTADOGU'nun kalemi).
- Habeşistan–İt.Somali 1923'te Dolo–Iet dışında belirsiz ⇒ YAZILMADI (YOK bile değil).
- Mağrip iç hatları ORTADOGU'da (M-5081).
