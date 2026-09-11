# SINIRLI VORONOİ — tanım, sınama, kenar sorunu, alternatif kıyası

Görev: koordinatör sevki (11 Eylül 2026). `data/` ve `arac/` DONUK —
yalnız `denetim/` altında YENİ bir betikle (mevcut hiçbir dosya
değiştirilmedi/koşulmadı), HAFİF bir sınama yapıldı (bellek: birkaç
yüz nokta + 8 tohum, KARA maskesi/petek geometrisi YÜKLENMEDİ).

Araç: [`denetim/ARAC-SINIRLI-VORONOI-0911.py`](../denetim/ARAC-SINIRLI-VORONOI-0911.py)
Görsel: [`denetim/SINIRLI-VORONOI-KASRISIRIN-0911.png`](../denetim/SINIRLI-VORONOI-KASRISIRIN-0911.png)
Ham veri: [`denetim/OLCUM-SINIRLI-VORONOI-0911.json`](../denetim/OLCUM-SINIRLI-VORONOI-0911.json)

## ① TANIM

**Tohum kümesi = yalnız belgenin adıyla andığı yerler.** Ama Kasr-ı
Şirin'i test ederken bu tanımın KENDİSİ bir sorun çıkardı (bkz. ②'nin
sonundaki not): belge yalnız **Bağdat**'ı isimle anıyor, gerisi BÖLGE
adı (Mezopotamya, batı/doğu Gürcistan-Ermenistan, Dağıstan, Şirvan).
Test için Basra/Şehrizor/Musul/Van/Kars/Revan/Tebriz'i BEN ekledim —
bunlar **VARSAYIMDIR**, belgenin kendisi onları nokta olarak ANMADI.
⇒ **Bu, "sınırlı Voronoi"nin kendi başına çözemediği bir sorunu
gösteriyor: bölge-düzeyi belgelerde tohum kümesinin KENDİSİ zaten bir
YORUMDUR** — ölçüme aşağıda dönülüyor.

**Öksüz yerleşim sorunu — cevap:** kapsama alanındaki ÖTEKİ (belge
dışı) yerleşimler, geometrik olarak EN YAKIN tohumun hücresine düşer
(bu, standart Voronoi'nin tanımı gereği zaten "en yakın tohum" ile
AYNI ŞEYDİR). **Ama bu MEŞRU DEĞİL** eğer o yerleşimin **KENDİ
ARAŞTIRILMIŞ egemenlik kaydı VARSA** — o zaman belgeden dolaylı atama,
zaten var olan DAHA ÖZGÜL bir kaynağı EZER. 🔴 **ÖNERİLEN KURAL:**
sınırlı Voronoi yalnız **gerçekten BOŞ olan** (kendi `s:`/`d:`/`v:`
kaydı o tarihte OLMAYAN) yerleşimlere/alanlara uygulanır; kendi kaydı
olanlar KENDİ KAYDINI korur. Bu, C'nin "kaynak susunca devralınır"
ilkesiyle TUTARLI — kaynak (yerleşimin kendi araştırılmış kaydı)
KONUŞUYORSA, belge-türetilmiş tahmin ONU EZMEZ.

**Kapalı sezgiler (A/B → C geçişinde):** enklav birleştirme (B2),
koridor kırpma (B3), çöl tavanı, A1 yarıçap tavanı, emilme (§2) —
HEPSİ KAPALI, M-3463 zaten böyle diyor.

**"Doğal hatta yaslama" — ⚠️ ŞARTA BAĞLI, KAPALI DEĞİL:**
- Belge AÇIKÇA bir nehri/dağı sınır İLAN EDİYORSA (Karlofça'nın Una
  nehri gibi) → yaslama AÇIK ve GEREKLİ — bu bir TAHMİN değil, belgenin
  KENDİ metnini uygulamaktır.
- Belge nehir/dağ ANMIYORSA (Kasr-ı Şirin — önceki görevde ölçüldü,
  BELGE Zagros/nehir ADI VERMİYOR) → yaslama KAPALI KALIR; aksi halde
  "hangi dağa/nehre yaslanacağını BİZ seçeriz" — tam da Emre'nin
  kapatmak istediği YORUM.

## ② SINAMA — Kasr-ı Şirin, 8 tohum, 80 gerçek yerleşimle kıyas

Tohumlar (★ ile PNG'de işaretli): Bağdat·Basra·Şehrizor·Musul·Van·Kars
(Osmanlı) / Revan·Tebriz (Safevî). Kutu: 33-41°K, 41,5-48°D. Referans
tarih: 1639-06-15 (antlaşmadan hemen sonra).

```
Kutudaki gerçek yerleşim:              83
Osmanlı/Safevî ile karşılaştırılabilir: 80  (3'ü değerlendirme dışı)
Restricted-Voronoi (en yakın tohum)
  tahmininin GERÇEK sahiplikle UYUMU:   64/80  (%80,0)
UYUŞMAYAN:                              16/80  (%20,0)
```

**Uyuşmazlıkların 14'ü (16'nın) AYNI YÖNDE:** gerçek=Safevî iken tahmin
Osmanlı çıkıyor — hepsi Zagros/Kürdistan kuşağında (Kirmanşah, Selmas,
Sakkız, Senendec, Merivan, Bicar, **Kasr-ı Şirin'in KENDİSİ**, Mahabad,
Bane, Serdeşt, Kotur, Sero, Gümrü, Şeyh Salı). 📌 **En çarpıcısı:
antlaşmanın İMZALANDIĞI ŞEHİR olan Kasr-ı Şirin'in KENDİSİ bile yanlış
sınıflanıyor** (gerçek Safevî, tahmin Osmanlı) — çünkü en yakın tohumu
"Şehrizor" (117 km) ve Şehrizor'u BEN Osmanlı tarafına yazmıştım. Bu,
①'deki uyarıyı DOĞRULUYOR: **Osmanlı tarafında 6, Safevî tarafında 2
tohum vardı — bu DENGESİZLİK, sonucu Osmanlı lehine SİSTEMATİK
ÇARPITIYOR.** Hata belgeden değil, BENİM SEÇTİĞİM tohum yoğunluğundan
geliyor — **③'ün altında yatan asıl risk budur: tohum seçimi başlı
başına bir YORUMDUR.**

Ters yönde yalnız 2 uyuşmazlık (gerçek=Osmanlı, tahmin=Safevî: Iğdır,
Doğubayazıt — Revan'a yakın ama kayıtlı Osmanlı).

## ③ KENAR SORUNU — ÖLÇÜLDÜ, GERÇEK VE BÜYÜK

```
Gerçek yerleşimler arası ORTALAMA en-yakın-komşu mesafesi
  (normal petek hücre ölçeği vekili):        43,6 km  (medyan 42,4 km)
Tohumlar arası ORTALAMA en-yakın-tohum mesafesi
  (sınırlı-Voronoi hücre ölçeği vekili):     ~236 km  (129-451 km aralığı)
```
⇒ **~5-10 KAT büyüklük farkı.** Kapsama alanının kenarında, hücreler
~40 km'lik normal ölçekten aniden 130-450 km'lik dev parçalara sıçrar
— kardeşin bulduğu "dikiş"in TAM ÖNGÖRDÜĞÜ TÜRDEN, ve burada SAYIYLA
doğrulandı. Bu GÖRSEL bir kusur olmanın ötesinde YAPISAL: dev hücre,
kenarındaki gerçek (küçük, araştırılmış) yerleşimleri EZER — ②'de
görülen "Kasr-ı Şirin'in kendisi bile yanlış" vakası TAM BUNUN ürünü.

## ④ ALTERNATİF KIYASI — SEÇENEK A vs B vs (önerilen) C-hibrit

**Seçenek A (saf, yalnız tohumlar):** ②'de test edildi. Sınıflandırma
kuralı "en yakın tohum" — %80 uyum, BÜYÜK hücreler, KENAR SORUNU var.

**Seçenek B (bütün yerleşimler tohum, etiket belgeden):** 🔴 **MATEMATİKSEL
OLARAK SEÇENEK A İLE AYNI SINIFLANDIRMAYI ÜRETİR** — ikisi de "bu nokta
hangi BELGE-tohumuna en yakın" kuralını kullanıyor; fark yalnız
GÖRSEL/MESH GRANÜLERLİĞİNDE. B, MEVCUT ince petek hücrelerini KORUR (her
küçük hücre yalnız RENK/ETİKET değiştirir), yani kenarda **kenar sorunu
YOK** — ince mesh zaten oradaki A/B hücreleriyle KUSURSUZ uyuşuyor
(aynı mesh). **AMA B, HER YERLEŞİMİN KENDİ ARAŞTIRILMIŞ KAYDINI belge-
türetilmiş etiketle EZER** — ②'deki 16 hatanın TAMAMI B'de de AYNEN
oluşur (Kasr-ı Şirin kasabası yine "Osmanlı" etiketlenir), ÇÜNKÜ
sınıflandırma kuralı DEĞİŞMEDİ.

**Önerilen C-hibrit (①'in kuralı):** yalnız KENDİ KAYDI OLMAYAN
(gerçekten boş) noktalara/alanlara belge-türetilmiş etiket uygulanır;
kaydı OLAN noktalar (bu test bölgesindeki 80/80'i gibi) KENDİ
KAYDINI korur. **Ölçüldü: bu test bölgesindeki 80 yerleşimin
80'i de zaten kendi kaydına sahip (0 kasıtlı boşluk bulundu)** — yani
BU BÖLGEDE hibrit-C'nin FİİLEN HİÇBİR ŞEYE dokunacağı yer YOK, ②'deki
16 hata da OLUŞMAZ (çünkü hiçbiri "boş" değil). ⇒ **Hibrit, hem A'nın
kenar sorununu hem B'nin ezme sorununu AYNI ANDA çözüyor — bedeli, C'nin
pratik kapsamının bu tür yoğun-araştırılmış bölgelerde NEREDEYSE SIFIRA
inmesi** (ki bu zaten Emre'nin "belli bölgelerde/tarihlerden sonra"
sezgisiyle tutarlı: C'nin gerçek işi ARAŞTIRILMAMIŞ boşluklardadır,
zaten dolu yerlerde değil).

## ⑤ HÜKÜM VE ÖNERİ

```
🔴 Seçenek A (saf tohum Voronoi)     — KENAR SORUNU ölçüldü (5-10x
                                      ölçek farkı), araştırılmış
                                      noktaları EZİYOR (%20 hata)
🟡 Seçenek B (ince mesh + belge etiketi) — kenar sorunu YOK ama
                                      araştırılmış noktaları AYNI
                                      ORANDA (%20) EZİYOR
🟢 C-HİBRİT (önerilen) — yalnız BOŞ noktalara uygulanır: kenar sorunu
                                      YOK (B'nin mesh'i), ezme YOK
                                      (kendi kaydı olan dokunulmaz),
                                      kapsamı KÜÇÜK ama DOĞRU YERDE
```

**Ayrıca ①'de ölçülen bağımsız bir sorun:** Kasr-ı Şirin gibi
bölge-düzeyi belgelerde TOHUM KÜMESİNİN KENDİSİ zaten yorum
gerektiriyor (belge yalnız 1 nokta — Bağdat — isimle anıyor). Bu,
③ kadar önemli ikinci bir sınırlama: **C'nin "yorum yapmamıza gerek
kalmaz" vaadi, YALNIZ belge GERÇEKTEN zengin bir isim listesi
verdiğinde (Karlofça'nın kale listesi gibi) tam olarak tutuyor;
bölge-düzeyi belgelerde (Kasr-ı Şirin) tohum seçimi kaçınılmaz olarak
YENİ bir yorum katmanı ekliyor.**
