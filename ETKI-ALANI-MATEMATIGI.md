# ETKİ ALANI MATEMATİĞİ — pergel çemberlerinden kurtulmak

> **Emre'nin sorusu (11-12 Ağustos 2026):** *"Sahra'daki ve Himalaya'lardaki
> garip çembersel toprak bölgelerine karşı ne yapacağız? … Her merkezden
> etrafa yayılan, uzaklıkla azalan bir etki yaysak ve toplamları belli bir
> miktarı geçince orayı sınırlara dâhil etsek nasıl olur? … Yalnız bu formül
> ancak düz alanlarda uygulanabilmeli; eğer dağ var ise **sınır dağa
> yaslanmalı**."*

Ve üç yol önerdi. **Üçü de doğru sezgi — ama eşit değiller.**

---

## ⓪ ÖNCE KUSURUN KAYNAĞI — çember nereden geliyor

Çemberi Voronoi üretmiyor. **Yarıçap tavanı** üretiyor:
`_tavan_daire` (`uret_petek.py:599`) her noktanın etrafına **izotrop bir
elips** çizer ve hücreyi onunla keser. İzotrop = her yöne aynı.

```
TAVAN_KM = {1:700, 2:420, 3:280, 4:140, 0:280}   (:595)
ÇÖL_TAVAN_KM = 300.0                              (:1549)
```

⇒ Emre'nin *"pergelle çizilmiş gibi"* dediği şey **birebir doğru bir
teşhis**: orada gerçekten bir pergel var. Sahra kutusunda 193 noktanın
**75'i** bu tavana bağlı (ölçüldü, 11 Ağustos).

📌 Ve niçin yalnız çöl/Himalaya'da göze batıyor: **komşusu olan nokta tavana
çarpmaz**, komşusuyla ortadan bölüşür. Tavan ancak **komşusuzluk**ta
görünür. Yani çember, seyrekliğin görünür hâlidir.

---

## ① EMRE'NİN BİRİNCİ YOLU — sabit yarıçap + engelde dur

> *"Merkezin alanını 200-300 km gibi sabit bir sayı ile düz alanlara yaymak,
> ama dağ göl deniz gibi engellerin çıktığı yerde yerleşimin etkisini
> bitirmek."*

```
🟢 basit · öngörülebilir · bugünkü tavanın küçük bir düzeltmesi
🔴 ÇEMBERİ ÇÖZMEZ — engel yoksa yine daire çıkar
   Sahra'nın ortasında engel YOKTUR; sorunun tam olduğu yerde çare yok
```

⇒ Bu yol, **Himalaya'yı düzeltir ama Sahra'yı düzeltmez.**

## ② EMRE'NİN İKİNCİ YOLU — toplanan etki, eşik

> *"100 km'ye 3 puan, 100-200'e 2, 200-300'e 1 … birkaç merkezin toplamı 3'ü
> geçerse orayı dâhil etsek. Ya da uzaklığın karesiyle azalan bir etki."*

Bu, coğrafyada bilinen bir aile: **çekim modeli / çekirdek yoğunluğu**.
Emre'nin basamaklı puanı bir **basamak çekirdeği**, karesiyle azalan hâli
bir **kuvvet çekirdeği**:

```
E(x) = Σ  w(s) · f( d(s,x) )        f = 1/d²  ya da basamaklı 3/2/1
      s∈S
x SAHİPLİ  ⇔  E(x) ≥ T
```

🟢 **Emre'nin en güçlü sezgisi burada ve doğru:** iki nokta *birlikte*, tek
noktanın tek başına tutamayacağı yeri tutar. Bu, bugünkü modelde **hiç yok**
— tavan her noktayı **yalnız** hesaplıyor.

🔴 **AMA TEK BAŞINA KULLANILAMAZ, ve sebebi ölçülebilir bir çelişki:**

```
Voronoi  →  BÖLÜŞÜM garantisi: her yer TAM BİR sahibe ait
E(x)≥T   →  bu garantiyi YOK EDER:
             · iki devletin ikisi de eşiği geçebilir  ⇒ ÇAKIŞMA
             · hiçbiri geçemeyebilir                  ⇒ DELİK
```

⇒ Sahra'da delik zaten **istiyoruz** (kasıtlı boşluk). Ama Anadolu'da
çakışma **felakettir**: iki devlet aynı toprağı boyar.

🟢 **ÇARE — ve bu sorunun asıl cevabı: İKİ AYRI SORU SORULUR.**

```
① BURASI KİMİN?   argmin  — en güçlü etkiyi kim uyguluyor
                  ⇒ bölüşüm garantisi KORUNUR, çakışma İMKÂNSIZ
② BURASI SAHİPLİ Mİ?  eşik — en güçlü etki bile T'nin altındaysa SAHİPSİZ
                  ⇒ çöl boşluğu KENDİLİĞİNDEN doğar, tavan GEREKMEZ
```

📌 Bugünkü motor ①'i yapıyor (Voronoi = düz mesafede argmin) ama ②'yi
**pergelle** yapıyor. Emre'nin önerisi ②'yi **doğru araca** çeviriyor.
⚠️ Ve ikisini karıştırmak, bu belgenin en kolay hatası olurdu.

## ③ EMRE'NİN ÜÇÜNCÜ YOLU — geçirgenlik · ışığın kırılması

> *"Merkezin etkisinin, tıpkı ışığın farklı ortamlarda farklı geçirgenlik
> sağlaması gibi, havada ayrı suda ayrı katıda ayrı olması — ovada ayrı,
> çölde ayrı, denizde ayrı, dağda ayrı, nehir karşısına geçmede ayrı."*

🟢 **Bu benzetme tesadüf değil, birebir aynı matematiktir.** Işığın en kısa
*zamanlı* yolu seçmesi (Fermat ilkesi) ile ordunun en ucuz yolu seçmesi aynı
denklemdir. Coğrafyadaki adı **maliyet-mesafesi / en ucuz yol**.

```
c(x)   = birim mesafenin MALİYETİ  (dk/km) — araziye göre
D_s(x) = s'den x'e EN UCUZ yolun toplam maliyeti
         (ızgara üzerinde çok kaynaklı Dijkstra ile çözülür)

① sahip   =  argmin_s  D_s(x)
② sahipli ⇔  min_s D_s(x)  <  T
```

### 🔴 VE KRİTİK OLAN ŞU: ③, ①'İ VE ②'Yİ KAPSAR

```
c = sabit, dağ = ∞        →  ① çıkar  (sabit yarıçap, engelde dur)
D yerine Σ 1/D² kullan    →  ② çıkar  (toplanan etki)
c araziye göre değişir    →  ③        (genel hâl)
```
⇒ **Üç yol değil, BİR yol ve iki özel hâli.** Doğru soru *"hangisi"* değil,
*"c(x) neye eşit"*.

### 🟢 VE EMRE'NİN ŞARTI KENDİLİĞİNDEN SAĞLANIYOR

> *"Bu formül ancak düz alanlarda uygulanabilmeli. Eğer dağ var ise sınır
> dağa yaslanmalı."*

Maliyet-mesafesinde bu **ayrı bir kural gerektirmez**: dağda `c` yükselince
iki komşunun maliyet cepheleri **sırtta buluşur**, çünkü sırtı aşmak iki
taraf için de en pahalı yerdir. **Sınır dağa kendiliğinden yaslanır.**
📌 Aynı sebeple nehir yatağı, boğaz ve kıyı da kendiliğinden sınır olur —
`ALTYAPI-DORT-MADDE ③`ün istediği tam buydu.

---

## 🟢 EN ÖNEMLİ BULGU: ÜÇÜNCÜ YOLUN İSKELETİ MOTORDA ZATEN VAR

```
KARA-KISITLI SAHİPLİK   uret_petek.py:1148
  · 0,05° ızgara (KV_ADIM, :1177)
  · ÇOK KAYNAKLI DIJKSTRA  (:1218 civarı)
  · bugün maliyet İKİLİ:  kara = 1 · deniz = ∞
```

⇒ **Yeni bir altyapı gerekmiyor.** Gereken tek şey `c`yi ikiliden
**kademeliye** çevirmek:

```
ova · bozkır      c = 1,0        (taban)
çöl               c = 1,5-2,0    su ve yem yok
orman · bataklık  c = 2,0-3,0
tepe · yayla      c = 1,5-2,5    eğime göre
sıradağ           c = 5-15       ya da geçit dışında ∞
nehir geçişi      c = sabit ceza (genişliğe göre) — mesafe DEĞİL
boğaz · körfez    c = sabit ceza (gemi varsa) · yoksa ∞
açık deniz        c = ∞  ya da donanma varsa yüksek sabit
```

⚠️ **Ve bu tablo bugün DOLDURULAMAZ**, çünkü `c`nin girdisi olan yükseklik ·
eğim · orman · bataklık verisi **elimizde yok** (ölçüldü, `ALTYAPI ①`).
Elimizde olan: kıyı · nehir · göl · kısmen sırt.

⇒ ***Darboğaz matematik değil VERİ.*** Formül belli, altyapı yarı hazır,
eksik olan `c`yi hesaplayacak coğrafî katman — ve o, Emre'nin bekleyen
**internet kotası + disk** kararı.

---

## KADEMELİ YOL — her adım kendi başına işe yarar

```
A · İZOTROP TAVANI YÖNE DUYARLI YAP        veri GEREKMEZ
    Tavanı daire yerine, KOMŞU YOĞUNLUĞUNA göre yönde değişen bir
    çokgen yap. Emre'nin ②'sinin en ucuz hâli: iki nokta birlikte daha
    uzağı tutar. ⇒ Sahra çemberleri YUMUŞAR.
    🔴 Ölçülmeli: tavanı gevşetmek YETİM YÜZ mantığıyla çelişiyor mu
       (`MIMARI.md §2.9` — A1 vakası aynen bu).

B · MEVCUT DIJKSTRA'YA KADEMELİ MALİYET     az veri yeter
    Bugünkü ikili maliyeti üçe çıkar: kara 1 · nehir geçişi ceza ·
    deniz ∞. Nehir verisi VAR (187 parça). ⇒ Nehirler sınır olmaya başlar.

C · TAM MALİYET YÜZEYİ                      YÜKSEKLİK VERİSİ ŞART
    Yukarıdaki `c` tablosu. Himalaya ve Toroslar burada çözülür.
    ⇒ Emre'nin kota kararına bağlı.

D · TAVANI KALDIR, YERİNE EŞİK KOY          C'den sonra
    `min D_s(x) < T` — çöl boşluğu artık pergelle değil, ULAŞILABİLİRLİKLE
    belirlenir. Emre'nin ②'si tam olarak burada gerçekleşir.
```

📌 **Sıra bağlayıcı:** D, C'yi bekler; C, veriyi bekler. Ama **A ve B bugün
yapılabilir** ve ikisi de Emre'nin şikâyet ettiği çemberi doğrudan etkiler.

---

## ⚠️ ÖLÇÜLMEMİŞ OLANLAR — açıkça

```
· A'nın yetim yüz mantığıyla çelişip çelişmediği     ÖLÇÜLMEDİ
· T eşiğinin hangi değerde Sahra'yı doğru bıraktığı  ÖLÇÜLMEDİ
· c katsayılarının hiçbiri                            ÖLÇÜLMEDİ, yukarıdakiler
                                                      ÖRNEK, kaynak DEĞİL
· askerî literatürün bu katsayılara ne dediği        ARAŞTIRILMADI
  (Emre istedi; `MESAFE-VE-SURTUNME.md §⑤`de iz noktaları var)
```

🟢 Ve en ucuz doğrulama kaynağı **dışarıda değil içeride**: projede **41
sefer güzergâhı** kayıtlı. Gerçek orduların gerçekten yürüdüğü yollar,
`c`nin sağlamasıdır — bir maliyet yüzeyi doğruysa, en ucuz yolu o
güzergâhlara **benzemelidir.**

---

# EK — 12 Ağustos 2026

## 🔴 ADIM B, BU HÂLİYLE SESSİZCE HİÇBİR ŞEY YAPMAZ — ölçüldü

Yukarıda *"adım B: bugünkü ikili maliyeti üçe çıkar, nehir verisi VAR"*
yazıyor. Bugün Dijkstra'nın **kapsam nöbetçisi** okundu (`uret_petek.py:1571`
ve `:1575`) ve B'nin niçin işlemeyeceği çıktı:

```python
if _a < KV_MIN_KM2:                                    # 200 km² altı
    continue                          # ızgara bu ölçekte karar veremez
if _kvkp.contains(LineString([_ptl[_i], _rp])):
    continue                          # kesin geometri geçerli — DOKUNMA
```

⇒ **Tohum ile parça arasındaki düz hat tamamen KARADAYSA, Dijkstra'nın
cevabı ATILIR ve Voronoi kalır.**

Ve bir nehir geçişi tam olarak böyledir: nehir kara maskesinde bir **delik
değil**, bir **çizgi**. Yani `KARA.contains(hat)` bir nehrin üstünden
geçerken de **TRUE** döner ⇒ nöbetçi, B'nin var olma sebebi olan vakayı
**tam olarak eleyecek** kutudur.

### Ve nöbetçi YANLIŞ DEĞİL — evreni değişti

Gerekçesi kodun kendi yorumunda yazılı ve **doğru**:
> *"0,05° ızgara mesafeyi ~%8 hatayla ölçer ve KARADA bu, Voronoi'nin
> KESİN cevabından kötüdür."*

**İkili maliyet için bu tartışmasız doğru.** Izgara orada düz mesafenin
kaba bir *tahmini*dir, ve kaba tahmin kesin hesabın yerini almaz.

🟢 **Ama maliyet ikili olmaktan çıktığı an, argüman TERSİNE DÖNER:**
hücreler katsayı taşıdığında ızgara artık düz mesafeyi *tahmin etmiyor*,
**Voronoi'nin hiç ifade edemediği BAŞKA bir büyüklüğü** ölçüyor. Karşısına
konacak "kesin cevap" ortadan kalkar, dolayısıyla *"ondan kötü"* cümlesi
anlamsızlaşır.

⇒ ***Nöbetçi bir DOĞRULUK sınaması değil, bir KAPSAM sınaması — ve kapsamı
ikili maliyete göre çizilmiş.*** B'ye geçilirken şart şuna dönmeli:
```
bugün    hat denizi kesiyor mu            → yalnız deniz vakaları
B'de     hat SIFIRDAN BÜYÜK ceza taşıyor mu → deniz + nehir + (C'de) eğim
```

📌 Bu, `MIMARI §2.9`un (*"iki aşama birbirini iptal ediyor"*) **üçüncü**
vakası ve en sinsisi: orada iki aşama çakışıyordu, burada bir nöbetçi
**henüz yazılmamış** bir aşamayı önceden iptal ediyor. Ve iptal **sessiz**
olurdu: B yazılır, koşu temiz biter, nehirler sınır olmaz, kimse sebebini
sormaz.

---

## ⑤ TERİMLER — bunlar bizim icadımız değil, literatürün adları

Emre'nin getirdiği doktrin taramasından (bkz. uyarı) çıkan **aranabilir**
başlıklar. Değeri şurada: bugüne kadar bu konuyu tarif ediyorduk, artık
**arayabiliyoruz.**

| bizim dediğimiz | literatürdeki adı |
|---|---|
| kuş uçuşu geçersiz | **friction of distance** |
| maliyet mesafesi | **cost distance** |
| devletin gerçekten ulaşabildiği alan | **operational reach** |
| arazinin geçilebilirliği | **trafficability** |
| dağa/nehre yaslanan sınır | **natural frontiers** |
| geçit · boğaz | **choke point** |
| nehir geçişi (askerî) | **wet-gap crossing** · bridgehead |
| eşit maliyet konturu | **isodapane** (izodap) |

⚠️ **KAYNAK UYARISI — `CLAUDE.md §4` kırmızı çizgisi.** Bu tarama bir
**yapay zekâ üretimi metindir** ve o kırmızı çizgide açıkça
`🔴 KULLANILMAZ` kovasındadır. ⇒ **Kaynak olarak kullanılamaz.**
Kullanılabilir olan tek şey: **nereye bakılacağını söylemesi.** Yukarıdaki
terimlerin her biri gerçek ve hakemli literatürü olan kavramlardır; katsayı
yazılacağı zaman dayanak **o literatür** olacak, bu metin değil.

📌 Ve metnin kendisi de aynı şeyi söylüyor:
> *"Ama ? işaretlerini bizim uydurmamamız lazım."*

---

## ⑥ KONTROL KADEMESİ — 6 basamak, ve bu **statü kademesi** tıkanıklığını açıyor

```
1  DOĞRUDAN     merkezden hızla asker gönderilebilir
2  SÜREKLİ      yerel garnizon / vali var
3  PERİYODİK    vergi ve asker zaman zaman toplanır
4  ETKİ ALANI   yerel hükümdar merkeze bağlı
5  TARTIŞMALI   merkez iddia ediyor, fiilî kontrol zayıf
6  TEORİK       haritada var, fiilen yok
```

🟢 **Ve bu, Emre'nin 11 Ağustos kararıyla ÇELİŞMİYOR — onu tamamlıyor.**
Emre statü kademesi için *"sadece iki renk olarak görünsün"* dedi. Yukarıdaki
ölçek **veriye** aittir, **boyaya** değil:
```
VERİ      6 kademe   → denetlenebilir, sorgulanabilir, kartta yazılır
HARİTA    2 renk     → doğrudan toprak · bağlı toprak     (Emre'nin kararı)
```
⇒ Ekran sadeliği ile veri zenginliği aynı anda mümkün; ikisi ayrı katman.

📌 Ve **1923 sınavının tek tutmayan kalemi tam buraya düşüyor**: Kahire
1922'de bağımsızlığını ilan etti ama İngiliz kontrolü sürdü — bugünkü model
bunu *"ingiltere"* ya da *"misir"* diye **ikiye zorluyor**, oysa gerçek
cevap **kademe 4**tür.

---

## ⑦ DÜZELTME — nehir hakkında sezginin ters olduğu iki nokta

```
Q = A × v          debi = kesit alanı × ortalama hız
```
① *"Nehir daraldıkça debi artar"* — **hayır.** Debi korunur; daralan
kesitte artan şey **hız**tır. Askerî sonucu tersine çevirir: dar nehir
kısa ama **hızlı**, geniş nehir uzun ama **yavaş ve sığ geçit taşıyabilir**.
⇒ **En iyi geçiş noktası genellikle en dar yer DEĞİLDİR.**

② Aynı şey köprü için de geçerli: köprü en dar yere değil, **iki yakası da
yaklaşım yolu · sağlam zemin · manevra alanı** taşıyan yere kurulur.

📌 Motora etkisi somut: nehir cezası **genişliğin tersiyle** değil,
`genişlik × akıntı × kıyı eğimi` bileşkesiyle ölçeklenmeli. Bugün elimizde
`ne_10m_rivers` var ama **yalnız çizgi** — genişlik, debi ve eğim **yok**.
⇒ B adımı bugün ancak **sabit** bir nehir cezasıyla yapılabilir; ayrımlı
ceza yeni veri ister. Bu, açıkça bir **kabalık** ve öyle damgalanmalı.
