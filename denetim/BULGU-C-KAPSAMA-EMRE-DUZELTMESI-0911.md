# BULGU — C KAPSAMA GEOMETRİSİ (Emre'nin tanım düzeltmesi SONRASI)

Oturum: C KAPSAMA GEOMETRİSİ · Görev: koordinatörün M-3463'ten (Emre'nin
C tanım düzeltmesi) sonraki sevki. Araç: `denetim/ARAC-C-VORONOI-KARLOFCA-0911.py`
(öngörü commit `219fcbb`, sınamadan ÖNCE). `data/` ve `arac/` yalnız
OKUNDU, TEK SATIR YAZILMADI.

🔴 **BEKLETMEDEN BİLDİRİM (§7.1⑥) — önceki teslimimin durumu:**
`C KAPSAMA GEOMETRİSİ` teslimim (Şattülarap/yerel cross-product)
Emre'nin yeni tanımıyla **KIRILMIYOR** — o iş hâlâ geçerli, çünkü
"🅰 hat verilmişse" durumu için yazılmıştı ve koordinatör bunu ④'te
AÇIKÇA "bırakma, hâlâ gerekli" diye doğruladı. Yalnız kapsamı
DARALTIYOR: artık C'nin İKİNCİ bir cephesi (🅱 nokta listesi) de var.

---

## D022 SONUCU — kendi ölçümümü kendim çürüttüm

> *"Una nehri motor tanımıyor (scalerank 8.0, eşik 5.0'ın üstünde) —
> SAF Voronoi Una'nın gerçek rotasından belirgin sapacak."*

**MEKANİZMA YANLIŞ ÇIKTI, SONUÇ AYNI YÖNDE AMA DAHA CİDDİ:** Una
nehrini `veri-kaynak/ne_10m_rivers.geojson`de ararken TEK bir "Una"
kaydı buldum ve koordinatlarını (-36,-8 civarı) kontrol etmeden
kullandım — bu **Brezilya'daki bir "Una" nehri**, Balkanlar'daki Una
DEĞİL! Dosyada Balkan Una'sı için **HİÇBİR kayıt YOK** — yalnız
"scalerank filtresine takılıyor" değil, **kaynak veride HİÇ MEVCUT
DEĞİL.** Bu, öngörümde kabul ettiğim mekanizmadan (eşik filtresi) daha
pahalı bir durum: `"①b DOĞAL-TANINMAYAN"` sınıfı bile değil, tam bir
`"①b′ VERİDE YOK"` alt-sınıfı — Natural Earth'ten kopyalanacak bir
geometri YOK, tamamen BAŞKA bir kaynaktan (ör. OSM) elle alınması
gerekir. **Kendi hatam** — D064'ün ("aynı ad, kaç ayrı biçimde")
tam örneği, bu sefer nehir tarafında.

---

## ① AYNI KAYIT HEM 🅰 HEM 🅱 TAŞIYOR — doğrulandı

Karlofça'nın Bosna maddesinin **birincil metni** (WebSearch'te bulunan
İngilizce çeviri, `HAZIRLIK-BOSNA-NOKTA-0911.json`'da zaten kayıtlı):
```
"...limited and bounded by the hither Shore of the River Unna..."  → 🅰 HAT
"Imperial Garrisons that are in Novi, Dubizza, Sessenovizza, Doboy
 and Bred... shall be drawn out... left entirely free"             → 🅱 NOKTA LİSTESİ
```
**Aynı madde, iki mekanizma.** Şema (C DOSYA YAZIM/C ŞEMA'ya iletildi —
aşağıya bak) her ikisini de TEK kayıtta taşıyabilmeli.

---

## ② SAF VORONOI YETER Mİ — kavramsal cevap NET, sayısal ölçüm BLOKE

**Kavramsal cevap: HAYIR, bu örnekte 🅱 (saf Voronoi) GEREKMİYOR/
YETERSİZ — çünkü belge ZATEN bir 🅰 hat veriyor.** Nokta listesi
(Kostajnica, Novi, Dubica, Jasenovac, Brod) sınırı **BELİRLEMİYOR**,
zaten Una'ya göre belirlenmiş sınırın **SONUCUNU TEYİT EDİYOR** ("bu
kaleler nehrin BİZDE kalan tarafında değildi, boşaltılacak"). ⇒
Koordinatörün sorduğu *"belge 'sınır şu iki köyün arasından geçer'
derken daha ince bir şey mi kastediyor?"* sorusunun cevabı: **EVET,
bu örnekte kastediyor — "daha ince şey" bizzat NEHRİN KENDİSİ.**

**Sayısal ölçüm (SAF Voronoi çizgisi Una'nın gerçek rotasından ne kadar
sapıyor) YAPILAMADI** — Una'nın gerçek geometrisi veri kümesinde YOK
(yukarıdaki itiraf). Bu, `D107` gereği `ölçülemedi` — `bulunamadı`
DEĞİL (nehrin KENDİSİ var olduğu tartışmasız, yalnız BU veri kümesinde
temsili yok).

### 🅱'nin GERÇEKTEN gerektiği durum var mı?

Karlofça'nın 5 maddesinin (SEMA-C-0911.md §3) TAMAMI tekrar tarandı:
**hiçbirinde SAF, hatsız bir nokta listesi YOK** — Bosna maddesi Una
hattına bağlı, Lehistan/Venedik maddeleri zaten mevcut noktalara
`d:`/`s:` eklemekle çözülüyor (C bile gerekmiyor). ⇒ **Bu turda GERÇEKTEN
🅱 gerektiren bir örnek BULUNAMADI** — bu, 🅱'nin nadir/gereksiz olduğu
anlamına GELMEZ (Emre'nin tanımı GENİŞ bir kapıyı yeni açtı, tarama
kapsamım yalnız Karlofça'ydı), yalnız **bu turda görülmedi.**

---

## ③ KENAR GEÇİŞİ — analitik değerlendirme (kod YAZILMADI, zaman sınırı)

```
SORU: C bölgesi bitince A/B yeniden devreye giriyor — sınır ATLAR MI?
```
**Analitik cevap: EVET, atlama RİSKİ gerçek, ve nedeni B2/B3'ün ZATEN
çözdüğü bir sorunla AYNI aileden.** B2'nin "köprü" mekanizması (bkz.
`arac/uret_petek.py`, `B2_KAVIS`) tam bu yüzden var: iki ayrı geometrik
parçayı (ana gövde + enklav) DİKİŞSİZ birleştirmek için köprünün
UÇLARI ana gövdeye TAM GENİŞLİKTE kaynatılıyor (§ B2_KAVIS yorumu:
"dar kaynak köprüyü koparır"). **C'nin hat/nokta sınırı da AYNI riski
taşır**: eğer C hattının UÇ noktası, A/B'nin kendi Voronoi ağının bir
KÖŞESİYLE/kenarıyla ÇAKIŞMIYORSA, iki sistem farklı hesaplarla üretilmiş
iki ayrı çizgi üretir ve bunlar TAM ÖRTÜŞMEZ — görünür bir çentik/
boşluk/bindirme doğar.

**ÖNERİ**: C hattının/nokta-kümesinin uçları, MÜMKÜNSE zaten var olan
bir yerleşimin PETEK KÖŞESİNE denk düşecek şekilde seçilmeli (Midye-
Enez'de Enez ZATEN bir petek noktası — bu YARIM çözüm zaten VAR;
Una/Bosna örneğinde ise Bihać/Srebrenik gibi uç noktaların PETEK
sınırlarıyla hizalanması AYRICA sınanmalı). Bu **ölçülmedi, yalnız
ÖNERİLDİ** — gerçek sınama `arac/`e dokunmadan (motor donuk)
YAPILAMAZ, bir SONRAKİ uygulama oturumunun işi.

---

## §4 — Ölçmediklerim

```
① Una nehrinin GERÇEK Balkan geometrisi bu veri kümesinde YOK —
   SAF Voronoi'nin ondan ne kadar saptığı SAYISAL ölçülemedi.
② 🅱'nin (saf nokta-Voronoi) GERÇEKTEN gerekli olduğu bir örnek
   Karlofça'da bulunamadı — başka antlaşmalarda olup olmadığı
   TARANMADI (kapsam dışı, zaman sınırı).
③ Kenar geçişi (③) yalnız ANALİTİK değerlendirildi, KOD YAZILIP
   SINANMADI.
④ Motor koşulmadı, `data/*.js` ve `arac/*.py`ye hiçbir satır yazılmadı.
```
