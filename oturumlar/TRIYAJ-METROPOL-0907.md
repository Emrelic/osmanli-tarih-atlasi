# TRİYAJ METROPOL — ⑨ KOL · 7 Eylül 2026

Koordinatör: 1.MURAT HÜDAVENDİGAR. Şartname: `oturumlar/KOL-0907.md §⑨`.
Yöntem otoritesi: `oturumlar/YONTEM-1923-SINIR.md §②a`.

```
VERİ YAZILMADI · YAMA YAZILMADI · COMMIT EDİLMEDİ
bütün çıktı `denetim/` altında
```

## ① TABAN — devralınan sayı doğrulandı (`B10`)

| | devralınan | ölçtüğüm |
|---|---|---|
| anakara dışı metropol kaydı | 803 | **803** ✅ |
| Britanya · Fransa · İtalya · Portekiz · Belçika | 384·226·84·50·50 | **birebir** ✅ |
| yamada kapsanan / kapsanmayan | 116 / 687 | **117 / 686** 🟡 |

🟡 **1 kayıtlık fark bir ölçüt farkı olabilir, ölçüm farkı değil.** Benim ölçütüm:
`denetim/yer_yama_*.js` (data/'ya HENÜZ taşınmamışlar) içinde `ad:` alanı geçen
kayıt. `data/` altındakiler ZATEN CANLI — `girdi.py` onları okuyor, yani taban
kümesinde etkileri var; ikisini karıştırmak inmiş bir yamayı "bekliyor" saymaktır.

📌 Ve fark triyajı **etkilemiyor**, çünkü 686'yı değil **803'ün tamamını** triyaj
ettim ve yama kapsamasını ayrı bir bayrakla işaretledim — böylece "hangi 687"
seçimimin doğru olduğunu varsaymam gerekmedi.

Devraldığım üç sayı eksikti (kusur değil, sayılmamış): **İspanya 5 · Almanya 3 ·
Hollanda 1**. Toplam yine 803.

## ② ARAÇLAR

```
denetim/ARAC-TRIYAJ-METROPOL-0907.js   803 kaydı TEK TEK döker (girdi.py otoritesi)
denetim/ARAC-TRIYAJ-KOVA-0907.js       64 coğrafî-idarî kümeye ayırır + kova atar
denetim/TRIYAJ-METROPOL-0907.json      çıktı — kova · gerekçe · kaynak · damga · adlar
```
🔴 **Sınıflanamayan kayıt SESSİZCE DÜŞMEZ**: `SINIFLANMADI` basılır ve alet çıkış
kodu **1** verir. Bugün **0**.
🔴 **Sıra ad-bazlı → kutu.** İlk turda Güney Afrika Birliği kutusu Namibya'nın
güneyini (Keetmanshoop · Vindhuk · Rehoboth …) **ve** Beçuanaland'ı (Tsabong ·
Serove · Palapye …) yutuyordu; kutu sırası KUME dizisinin yazım sırasına
bırakılmıştı. Dar kural artık **her zaman** kazanıyor — HİMAYE 38 → 55.

## ③ SONUÇ — kova dağılımı

```
KOVA          TOPLAM  YAMADA  YAMASIZ
SOMURGE          336       6      330
KOVA-DISI        151      37      114
MANDA            121      60       61
ILHAK            118      13      105
HIMAYE            55       0       55
KUSUR-ADAYI       16       0       16
SINIRDA            3       0        3
KUTU               3       1        2
──────────────────────────────────────
TOPLAM           803     117      686
```

🔴 **DÖRT KOVA YETMEDİ — dördü de eklendi ve dördü de GEREKLİ:**

```
KUTU         3    metropolün KENDİ toprağı, kaba kutunun dışında kalmış
                  → hiç sömürge değil, kayıt DOĞRU, ÖLÇÜM ARTEFAKTI
KOVA-DISI  151    hukukî sınıf dördün DIŞINDA: DOMİNYON · KONDOMİNYUM ·
                  ŞİRKET İDARESİ. Sonuç yine "kendi kimliği" ama gerekçe
                  sömürge DEĞİL ⇒ ayrı sevk gerekiyor
KUSUR-ADAYI 16    kimlik 1923'te hukuken YANLIŞ görünüyor — triyaj kalemi
                  değil, TARİH düzeltmesi. Bildirildi, YAZILMADI
SINIRDA      3    iki kova arasında GERÇEK belirsizlik — koordinatör seçmeli
```

⚠️ Bunları dört kovaya zorlamak `§11`in *"iki ayrı kusur tek satırda
raporlanırsa çareleri ters olsa bile aynı çare uygulanır"* tuzağıdır: Sudan'a
sömürge çaresi uygulamak kondominyumu siler, Königsberg'i "ilhak" saymak
Almanya'nın kendi toprağını bir sömürge gibi kaydeder.

## ④ ŞARTNAMENİN ASIL ŞARTI — 121 KAYIT DOĞRU YAZILMIŞ

`ILHAK 118 + KUTU 3 = 121`. Bunlara **dokunulmamalı**; ayırmak atlası düzeltmez,
bozar. En büyük üçü:

```
53  Cezayir (départements + Territoires du Sud)   1848'den Fransa'nın ÜÇ VİLÂYETİ;
                                                  Sahra 1902 kanunuyla Cezayir'e bağlı
40  Libya (Trablusgarp · Sirenayka · Fizan)       1911 ilhak + Uşi 1912
13  Oniki Ada (Dodekanez)                         Lozan md. 15 (1923-07-24)
 6  Kıbrıs · 4 Plazas · 1 Cebelitarık · 1 Aden
```

🟢 **VE İLHAK KOVASINDAKİ 13 YAMALI KAYIT AYRICA ÖLÇÜLDÜ — tehlike YOK.**
Bir yama İLHAK kovasındaki bir kaydı metropolden ayırırsa atlas bozulur, o yüzden
iki bekleyen yamanın içi okundu:
```
yer_yama_ada_kaynak.js    yalnız `isg:` `kaynak:` alanını dolduruyor,
                          KİMLİĞE DOKUNMUYOR ("bu yama GÜNLERE DOKUNMUYOR")
yer_yama_avrupa_1923.js   Menorka'nın kastilya/aragon zincirini düzeltiyor;
                          1923 kimliği `ispanya` OLARAK KALIYOR
```
⇒ İkisi de güvenli. (`§3.5.1`: *bir sınır kayması önerildiğinde iki uç da ölçülür.*)

## ⑤ KOORDİNATÖRE ÇIKAN KALEMLER

```
🔴 SEVK GEREKİYOR (16)   bu kolun kovalarına girmiyor — TARİH kusuru
   Mısır Kızıldeniz+Sina+Süveyş 5   Mısır 1922-02-28'de bağımsız
   Batı Afrika sınır şüphesi     8   Garoua·Maroua·Ngaoundéré·Rey Buba·
                                     Tibati·Banyo Fransız Kamerunu'nda,
                                     Nikki Dahomey'de, Bondoukou Fildişi'nde
   Memel 1 · Umtali 1 · Ondjiva 1
🔴 KARAR GEREKİYOR (3)   Malta · Hong Kong · Kemeran
🔴 AYRI SEVK (151)       dominyon (Güney Afrika Birliği + Valvis Körfezi) ·
                         kondominyum (Anglo-Mısır Sudanı 99) ·
                         şirket idaresi (Kuzey Rodezya)
```

## ⑥ DAMGALAR — dürüst kayıt

```
dogrulandi     0    hiçbir TDV/akademik gövde bu turda AÇILMADI
genel-bilgi   ~50   standart tarih bilgisi (antlaşma adı + yıl); gövde OKUNMADI
okumadım      12    aramadım bile — sınır şüpheleri ve Kemeran
```
🔴 **Hiçbir kaynak gövdesi okunmadı.** Bu bir eksiklik değil bir **kapsam
kararı**: şartname *"kova ayrımı ve gerekçe yeter"* diyor ve tur bütçesi 803
kaydı kümelemeye gitti. Ama kaydın dürüst hâli budur — `genel-bilgi` damgası
`dogrulandi` DEĞİLDİR ve bir sonraki oturum bunu ölçülmüş sanmamalı.
