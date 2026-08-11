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
