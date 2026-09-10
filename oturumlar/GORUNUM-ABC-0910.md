# A · B · C GÖRÜNÜMLERİ — Emre'nin kararı, 10 Eylül 2026

> 🔴 **Bu `0041/H-0001`in cevabıdır ve DÖRT GÜNDÜR bekliyordu.** O madde
> A/B ayrımını önermişti, `0042/H-0002` üstüne inşa etti (*"B görünümünde
> bu boşlukları paylaştırmamız gerekiyor biliyorsun"*), ve karar hiç
> verilmemişti. Emre bugün verdi — ve **üçüncü bir katman ekledi.**

## ⓪ EMRE'NİN TARİFİ — aynen

> *"Koşu 9 kapsamında önce **A** koşulup çıkacak, yani bizim Dijkstra
> Voronoi sürtünme tavan filan gibi klasik yöntemlerle yaptığımız harita.
> Bunun üzerine **B** koşulacak: A'da çıkan haritadaki boşluklar
> doldurulacak, enklavlar birleştirilecek, koridorlar doldurulacak, iki
> devlet arası sahipsiz topraklar bölüştürülecek.*
>
> *Bunun üzerine **C** koşulacak — daha doğrusu A veya B koşulurken, eğer
> hukuki olarak netlik varsa bir sınırda Voronoi Dijkstra tavan mavan
> olmaksızın hukuki dayanakta ne diyorsa haritaya o yazılacak.*
>
> *Sonuç harita gösteriminde biz ya A ya B seçeceğiz.*
>
> *A gösteriminde bol bol benek, enklav, boşluk, koridor olan bir harita
> söz konusu. Ama tarih ilerleyip hukuki sınırlar, modern sınırları
> oluşturan antlaşmalar, hukuki dayanaklar ortaya çıkınca belli bir
> bölgedeki sınır hukuki yapıya geçecek; diğer yerler A olarak kalabilir.*
>
> *B seçilirse A gösterimi rötuşlanacak — boşluk, enklav, koridor,
> sahipsiz toprakların üleştirilmesi sonunda ortaya çıkan harita
> kullanılacak. Ama belli bir tarihten sonra gene hukuki dayanağı olan net
> sınırlar ortaya çıkınca, bu gösterim o bölgede o iki ülkenin sınırları
> konusunda yerini hukuki metnin sınırına bırakacak.*"

## ① ÜÇ KATMAN, VE ÜÇÜ AYNI CİNSTEN DEĞİL — ayrım kritik

```
A  ÜRETİLİR    Voronoi + Dijkstra + sürtünme + tavan
               ⇒ bugün var olan motor. Çıktısı BENEKLİ ve BOŞLUKLU.
B  TÜRETİLİR   A'nın ÜZERİNE uygulanır: enklav birleştir · koridor
               doldur · sahipsiz toprağı paylaştır
               ⇒ A'yı SİLMEZ, RÖTUŞLAR. A hep saklanır.
C  DEVRALIR    hukukî metin ne diyorsa O yazılır — Voronoi'ye,
               Dijkstra'ya, tavana BAKILMAZ
               ⇒ bir HESAP değil bir BEYAN. A ve B'nin ÜSTÜNDEDİR.
```

🔴 **VE `C` BİR "GÖRÜNÜM" DEĞİL — Emre bunu açıkça söylüyor:** *"sonuç
harita gösteriminde biz ya A ya B seçeceğiz."* Yani kullanıcı **iki**
seçenek görür; `C` her ikisinin de İÇİNE girer, seçilmez.

⇒ Gerçek denklem:
```
gösterim = C(bölge, tarih)  varsa  →  C
           yoksa ve kullanıcı B dediyse  →  B(A)
           yoksa                          →  A
```

## ② `C`NİN ZAMAN BOYUTU — meselenin kalbi

Emre iki kez vurguluyor: *"tarih ilerleyip hukuki sınırlar ortaya
çıkınca"* · *"belli bir tarihten sonra."*

⇒ `C` **her yerde ve her zaman yoktur.** Bir sınır parçası için:
```
1300'de   hukukî metin YOK   → A (ya da B)
1699'da   Karlofça VAR       → o hat C'ye geçer
1913'te   Londra VAR         → başka bir hat C'ye geçer
```
🟢 **Ve bu, atlasın kendi doğasına uygun:** harita zaten GÜN
hassasiyetinde. `C` bir tarih aralığı + bir hat demektir — yani mevcut
`f:`/`t:` dönem şemasıyla AYNI cinsten.

⚠️ **VE BU BİR TUZAK TAŞIYOR — `D083`:** *idarî devir, sahiplik değişimi
değildir.* Bir antlaşmanın çizdiği hat ile FİİLÎ tasarruf ayrışabilir
(Hatay 1939 · Kıbrıs · Mısır 1882-1914). `C` yazılırken hangisinin
çizildiği BEYAN EDİLMELİ, yoksa atlas "tasarrufu boyar" ilkesinden
sessizce kayar.

## ③ NE KADAR HAZIR — ölçüldü

```
A  🟢 %100 ÇALIŞIYOR — bugünkü motorun ta kendisi
B  🟡 PARÇALARI VAR, BİRLEŞTİRİLMEMİŞ
     · enklav birleştirme: motorda `b2` mekanizması VAR
       (`_B23_SAYAC`: b2_birlesti · b2_deniz · b2_uzak · b2_yerlesim)
       ⇒ sıfırdan yazılmayacak, EŞİĞİ gevşetilecek
     · koridor sığlaştırma: Emre'nin kuralı ÖLÇÜLEBİLİR yazılmış —
       *"koridorun derinliği koridor ağzının genişliğini geçemez"*
     · boşluk paylaştırma: 🔴 KARŞILIĞI YOK ve EN PAHALISI.
       Ölçüldü (10 Eylül): iki KARA yerleşimi arasında sürtünme HİÇ
       koşmuyor — sürtünmeli Dijkstra yalnız düz hat DENİZİ kesince
       devreye giriyor (`uret_petek.py:2396`). Emre'nin istediği
       *"bir tarafta sıradağ, öteki tarafta düzlük ⇒ düzlük daha çok
       pay alır"* davranışı için Dijkstra'nın KARA-KARA çiftlerinde de
       koşması gerekir. Bu bir ayar değil MOTOR DEĞİŞİKLİĞİ.
C  🔴 HİÇ YOK — ne alan, ne veri, ne çizim
     · gereken: hat geometrisi + geçerlilik aralığı + kaynak
     · 🟢 ama şema hazır: `f:`/`t:` + `kaynak:` deseni aynen kullanılır
```

## ④ SIRA — ve niçin bu sıra

```
① A'yı KOŞTUR              bugün mümkün · koşu 9
② B'nin UCUZ İKİ PARÇASI   enklav eşiği + koridor kuralı
                           (mevcut mekanizma, ayar)
③ C'NİN ŞEMASI             alan tanımı + bir PİLOT hat (Karlofça?)
                           ⇒ koşu GEREKTİRMEZ, veri işi
④ B'nin PAHALI PARÇASI     kara-kara sürtünmeli Dijkstra
                           ⇒ MOTOR değişikliği, ayrı koşu
```

🔴 **③ NİÇİN ②'DEN SONRA AMA ④'TEN ÖNCE:** `C` bir hattı A/B'den
KOPARIR — yani `④`ün pahalı hesabı, `C` kapsayacaksa O BÖLGEDE BOŞA
GİDER. Önce hangi hatların hukukî olduğunu bilmek, sonra kalanına pahalı
hesap yapmak daha ucuz. *(Ve tersi ölçülmedi: `C` kapsamının ne kadar
büyük olduğu bilinmiyor — pilot hattın işi bunu ölçmek.)*

## ⑤ AÇIK SORULAR — Emre'ye

```
① `C` bir HAT mı bir ALAN mı? Antlaşma metni çoğu zaman HAT tarif eder
   (nehir · dağ sırtı · meridyen), ama harita ALAN boyar. Aradaki
   dönüşüm kimin işi?
② `C` kaynağı `§4` kırmızı çizgisine tâbi mi? (Öneri: EVET — antlaşma
   metni birincil kaynaktır ve `kaynak:` alanına yazılır.)
③ B seçiliyken A da saklanacak mı? (Öneri: EVET — A ÜRETİLİR, B
   TÜRETİLİR; A silinirse B bir daha üretilemez.)
```
