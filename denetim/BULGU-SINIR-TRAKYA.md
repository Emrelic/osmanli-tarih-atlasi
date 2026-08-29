# BULGU — SINIR YERLEŞİMİ / TRAKYA

**Oturum:** HAZIR KITA OPUS 86 · **Tarih:** 30 Ağustos 2026
**Şartname:** `oturumlar/SINIR-YERLESIMI.md`

---

## 0. ÖZET — görevin varsayımı ÖLÇÜLDÜ ve ÇÜRÜDÜ

Şartname sapmayı **çift mesafesinden türetiyordu**: *"en kötü sapma =
çift mesafesinin yarısı"* ⇒ ortanca çift 39,2 km ⇒ **~19,6 km sapma** ⇒
*"~10 km'lik çiftler yaz, ≤5 km'ye in."*

Bu bir **üst sınır**, ölçüm değil. Gerçek sınır çizgisi repoda duruyordu
(`veri-kaynak/ne_10m_admin_0_countries.geojson`) ve sapmayı **doğrudan**
ölçmeyi mümkün kılıyor. Ölçtüm:

```
                        ŞARTNAMENİN VARSAYIMI     ÖLÇÜM
ortanca sapma           ~19,6 km                   3,3 km
en kötü sapma           ~62 km (en uzak çift)     10,4 km
15 km üstü                       —                 SIFIR (%0)
5 km hedefinde olan hat          —                 ~481 km / 580 km (%83)
```

⇒ **Trakya sınırının %83'ü hedefin ZATEN İÇİNDE.** İş, sanılanın onda
biri kadar — ama kalan %17 tek bir yerde toplanmış.

📌 Niçin çift mesafesi kötü bir vekil: bisektör konumunu mesafe değil
**iki noktanın sınıra göre DİZİLİMİ** belirler. 40 km'lik bir çift,
ikisi de sınıra eşit uzaklıktaysa 0 km sapma verir; 12 km'lik bir çift
ikisi de aynı yakadaysa 6 km sapma verir. ***Mesafe ölçüldü sanılan şey,
aslında hiç ölçülmemişti.***

---

## 1. YÖNTEM

```
① Türkiye · Yunanistan · Bulgaristan poligonları (Natural Earth 10m)
② Türkiye sınırının Yunanistan/Bulgaristan'a DEĞEN kısmı  → 580 km kara hattı
③ hat boyunca ~2 km'de bir örnek                          → 207 örnek nokta
④ her örnekte  d_TR = en yakın 1923-OSMANLI/tâbi nokta
               d_YB = en yakın 1923-yabancı nokta
⑤ Voronoi kenarı ikisinin ORTASINDAN geçer ⇒
      SAPMA = (d_YB − d_TR) / 2
      +  atlas sınırı Bulgar/Yunan içine taşıyor  (OSMANLI FAZLA)
      −  atlas sınırı Türk içine taşıyor          (OSMANLI EKSİK)
```

⚠️ **VARSAYIM, ölçülmedi:** 1923 Trakya sınırı ile bugünkü sınırın
Trakya'da aynı olduğunu varsaydım (Lozan'dan beri değişmedi). Başka
kesimlerde (Suriye · Irak · Kafkasya) bu varsayım **geçerli değildir**
ve orada aynı yöntem ancak dönemin sınır poligonuyla koşulabilir.

---

## 2. HÂKİM KUSUR — TEK KESİM, sapmanın yarısı

```
41,96K 26,70D  →  42,09K 27,21D     30 örnek · ~51 km hat
en kötü  +10,4 km  @ 42,0827/27,0657        🔴 OSMANLI FAZLA
o noktada en yakın çift:  Kofçaz  ↔  Malko Tırnova   (39,6 km)
```

**Sebep ölçüldü ve `CLAUDE.md §3.5.1`in tam vakası:**

```
KUTU 41,85-42,45K / 26,40-27,60D  →  DÖRT kayıt (tarihten bağımsız)
   Elhova (Elhovo)        42,170  26,573   bulgaristan-kralligi
   Malko Tırnova          41,983  27,525   bulgaristan-kralligi
   Dereköy (Kırklareli)   41,943  27,401   OSMANLI
   Kofçaz                 41,936  27,176   OSMANLI
```

Elhovo ile Malko Tırnova arası **79 km** ve arada Bulgar yakasında
**sıfır nokta**. Türk yakasında Lalapaşa + Kofçaz var. ⇒ Boşluk en yakın
peteğe emiliyor ve **Osmanlı Bulgaristan'ın içine ~10 km taşıyor.**

🟢 **Ve boşluğun cinsi ölçüldü — bu ayrım işi belirliyor:**
```
kutudaki her kaydın 1923'te sahibi VAR
⇒ eksik olan DÖNEM değil, KAYIT
```
Dönem eksiği olsaydı yama yazardım (benim dosya türüm). **Kayıt eksiği,
yeni nokta demek — ve yeni nokta KOORDİNAT demek.**

---

## 3. KALAN KESİMLER — sekizi de dar

```
40,84→40,88K   ~4 km    −5,4  OSMANLI EKSİK   İpsala ↔ Ferecik
40,95→40,97K   ~2 km    +5,5  OSMANLI FAZLA   İpsala ↔ Ferecik
41,01K         ~0 km    +5,0  OSMANLI FAZLA   İpsala ↔ Ferecik
41,32→41,35K   ~5 km    −6,9  OSMANLI EKSİK   Uzunköprü ↔ Dimetoka
41,45→41,53K   ~9 km    −5,8  OSMANLI EKSİK   Havsa ↔ Orestiada
41,66→41,68K   ~3 km    +6,5  OSMANLI FAZLA   Edirne ↔ Orestiada
41,74→41,79K   ~6 km    −6,2  OSMANLI EKSİK   Edirne ↔ Mustafapaşa
41,83→41,90K   ~9 km    +7,6  OSMANLI FAZLA   Lalapaşa ↔ Mustafapaşa
```
Sekizinin toplamı ~38 km ve hiçbiri 8 km'yi aşmıyor. **Yatırımın
karşılığı burada düşük**; asıl kazanç §2'deki tek kesimde.

---

## 4. KARAAĞAÇ — eklenemiyor, ve bu YAPISAL

```
Karaağaç (Edirne)   41,660 / 26,535   en yakın: Edirne  2,6 km
🔴 3 KM MÜKERRER KURALI İHLALİ — EKLENEMEZ
```

⚠️ Buranın önemi ayrı: Karaağaç, **Lozan'da Türkiye'ye bırakılan** ve bu
sınırın anlatısında en çok adı geçen yerleşim. Ama Edirne'ye 2,6 km ve
`§11`in *"yakın mükerrer yerleşim"* kuralı onu yasaklıyor.

⇒ **Edirne kesiminin hassasiyeti Türk yakasından ARTIRILAMAZ.** O
kesimde (+6,5 km) tek çare Yunan yakasına nokta koymak.

📌 Ve bu, kuralın bir kusuru değil: 2,6 km'lik iki nokta zaten aynı
peteği paylaşır, sınır hassasiyetine **hiçbir şey katmaz.**

---

## 5. KAYNAK DURUMU — ve niçin nokta YAZMADIM

`§4` yöntemiyle sınandı (HTTP kodu):
```
🔴 ÖLÜ (302)   karaagac · uzunkopru · lalapasa · demirkoy · kofcaz ·
               ipsala--edirne
```
⇒ **TDV bu tanecikte susuyor** — `§4`ün *"TANECİKLİK boşluğu"* sınıfı,
yani standart akademik kaynak meşru. Ama elimde **o kaynak yok**:
adayların koordinatlarına güvenim **ORTA**, hedef ise **5 km**.

Şartname `①` şunu diyor, harfiyen:
> *"GERÇEK YERLEŞİM OLACAK. Uydurma köy YOK. Bulamıyorsan `bulunamadı`
> yaz ve o kesimi BOŞ bırak — **yanlış nokta, eksik noktadan kötüdür.**"*

⇒ **Nokta YAZMADIM.** ORTA güvenli bir koordinatla 5 km hedefi tutturmak
mantıksız: hatanın kendisi hedef kadar büyük.

**Ölçülmüş aday durumu** (3 km sınavını geçenler, güven ORTA):
```
Kastanies           41,648 / 26,545   en yakın Edirne     3,4 km  ✓ geçer
Pythio (Kuruçeşme)  41,363 / 26,548   en yakın Dimetoka   4,6 km  ✓ geçer
Kipoi               40,870 / 26,355   en yakın İpsala     5,4 km  ✓ geçer
```
⚠️ Üçü de §3'teki **dar** kesimlere denk geliyor. §2'nin 51 km'lik asıl
kesimi için adayım **Bulgar yakasında** olmalı (Elhovo–Malko Tırnova
arası) ve orası için **doğrulanmış tek bir koordinatım yok** —
`bulunamadı`.

---

## 6. NE İSTİYORUM

```
① 51 km'lik Kofçaz–Malko Tırnova kesimi için Bulgar yakasına 2 nokta
   gerek. Koordinat kaynağı YETKİSİ istiyorum: hangi kaynağa
   dayanabilirim? (repoda yerleşim koordinatı yok — `veri-kaynak/`
   yalnız kara/göl/nehir/ülke poligonu taşıyor)
② §3'ün sekiz dar kesimi için: yatırım değer mi, yoksa §2'ye mi
   yoğunlaşayım? ÖNERİM: yalnız §2 — kazancın yarısı orada, sekizinin
   toplamı ise 8 km'yi hiç aşmıyor.
③ Yöntem GENELLEŞTİRİLEBİLİR: aynı ölçüm Suriye · Irak · Kafkasya
   sınırlarına da koşulabilir (~10 dk). İster misin?
   ⚠️ Ama orada "bugünkü sınır = 1923 sınırı" varsayımı GEÇMEZ; dönemin
   sınırı ayrıca gerekir.
```

---

## 7. ÖLÇTÜĞÜM ≠ ÇIKARDIĞIM

`§11`in *"ölçüm doğru, çıkarım yanlış"* dersine uyarak ayırıyorum:

```
ÖLÇTÜM      207 örnekte sapma: ortanca 3,3 · en kötü 10,4 · >15 km yok
            51 km'lik kesimde en kötü +10,4, Bulgar yakası 79 km boş
            Karaağaç Edirne'ye 2,6 km
            altı TDV slug'ı 302

ÇIKARDIĞIM  görevin "~14 çift yaz" tarifi FAZLA GENİŞ; iş tek kesimde
            → bu bir ÇIKARIM. Dayanağı §2'deki dağılım, ve dağılım
              başka bir gün başka nokta inince DEĞİŞİR.

ÖLÇMEDİM    · adayların koordinatlarını doğrulamadım (güven ORTA)
            · Trakya dışındaki sınırlara hiç bakmadım
            · "bugünkü sınır = 1923 sınırı" varsayımını sınamadım
            · §3'teki sekiz kesimin görsel etkisini ölçmedim
```

---

## 8. EK ÖLÇÜM — tıkanma KISMÎ DEĞİL, TAM

Koordinatörü beklerken **izin gerektirmeyen** bir soru sordum: sekiz dar
kesimin bir kısmı **dönem yamasıyla** kapanabilir mi? Kapanabilseydi
koordinat beklemeden yazardım — yama benim dosya türüm.

Her dar kesimin en kötü noktasının **30 km** çevresindeki bütün kayıtlar
tarandı (tarihten bağımsız), 1923'te sahipsiz olan arandı:

```
Ipsala-Ferecik guney   -5,4   4 kayit · SAHIPSIZ 0
Ipsala-Ferecik kuzey   +5,5   5 kayit · SAHIPSIZ 0
Ipsala-Sofulu          +5,0   5 kayit · SAHIPSIZ 0
Uzunkopru-Dimetoka     -6,9   5 kayit · SAHIPSIZ 0
Havsa-Orestiada        -5,8   5 kayit · SAHIPSIZ 0
Edirne-Orestiada       +6,5   5 kayit · SAHIPSIZ 0
Edirne-Mustafapasa     -6,2   3 kayit · SAHIPSIZ 0
Lalapasa-Mustafapasa   +7,6   2 kayit · SAHIPSIZ 0
```

⇒ **SIFIR.** Sekizin hiçbiri dönem yamasıyla kapanmaz — §2'nin 51 km'lik
ana kesimi gibi, hepsi **kayıt eksiği.**

🔴 **Yani tıkanma tam:** Trakya kolunda koordinat kaynağı olmadan
yapılabilecek **hiçbir iş yok.** §6①'deki soru, işin yarısını değil
**tamamını** bekletiyor.

📌 Yan bulgu: kesimlerin 30 km çevresinde yalnız **2-5 kayıt** var.
Sınır kuşağının seyrekliği §2'ye özgü değil, **hat boyunca genel.**
