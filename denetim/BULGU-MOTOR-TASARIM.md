# MOTOR MADDELERİ — ÖLÇÜM ve TASARIM (koşuya dokunmadan)

> Oturum **DENETİM AÇIK** · 30 Ağustos 2026 · şartname M-1715
> 🔒 Koşu canlı. `arac/` altına **hiçbir şey yazılmadı** — yeni dosya bile.
> Bütün ölçüm betikleri scratchpad'de koştu.

---

## 1. `p0002/H-0014` + `p0008/H-0005` — TEK KÖK, ve KURAL ZATEN VAR

Koordinatör bunları iki ayrı madde diye verdi. **Aynı şeyi anlatıyorlar:**

```
0002/H-0014  "Gelibolu yarımadasına ek olarak Saroz körfezinin kuzeyi de
              eklenmiş görünüyor, doğru mu hata mı"
0008/H-0005  "…Saros körfezinin kuzeyi ile Şarköy'e doğru olan kısım da
              Osmanlı'ya geçmiş gibi görünüyor… PETEKLERİN DENİZ ÖTESİNE
              GEÇMESİ OLMAMASI LAZIM… KARŞI KIYIDAKİ EGEMENLİĞİN
              YANSIMASI TAŞMASI şeklindeki hatayı düzeltelim"
```

### 🟢 ÖLÇÜLDÜ — istenen kural motorda ZATEN VAR

```
uret_petek.py:1909  ADA KURALI              gövdeyi KENDİ kara bileşenine kırpar
uret_petek.py:1997  KARA-KISITLI SAHİPLİK   Dijkstra KARA ızgarasında yürür,
                                            "deniz aşırı sahiplik ÜRETİLEMEZ"
git: 07-29 22:21 (ADA KURALI) · 07-31 14:01 (KARA-KISITLI, r217)
```

### 🔴 AMA KURAL BU VAKAYI KAPSAMIYOR — ve sebebi tasarımın kalbi

Şikâyetler kuraldan **sonra** geldi (`parti-0002` 08-02 · `parti-0008`
08-08), yani basit bir bayatlama değil. Sebep ölçülünce çıktı:

> **Saroz körfezinin iki yakası KARADAN BAĞLIDIR.** Körfezin başından
> (~40,85 K) dolaşarak yürünür. Yani kuzey kıyı, Çimpe'den **topolojik
> olarak deniz aşırı DEĞİLDİR** — Dijkstra karada yürüyerek oraya
> ulaşabilir ve rakip nokta yoksa **haklı olarak** kazanır.

⇒ **İKİ AYRI SINIF VAR ve yalnız birincisi bir topoloji sorunudur:**

```
① TOPOLOJİK DENİZ AŞIRI   ada · boğazın karşısı · kara yolu YOK
                          → KARA-KISITLI SAHİPLİK zaten ENGELLİYOR ✓
② KARADAN BAĞLI AMA
   GÖZE DENİZ AŞIRI       körfez/koy — etrafından dolaşılabiliyor
                          → kural engellemez ve ENGELLEMEMELİ:
                            motor doğru yürüdü, YANLIŞ GÖRÜNEN şey
                            insanın körfeze bakışı
```

📌 **Emre'nin cümlesi bir KURAL gibi okunuyor ama ölçülünce bir ALGI
sınırı çıkıyor.** *"Peteklerin deniz ötesine geçmesi"* zaten yasak;
şikâyet edilen şey deniz ötesi değil, **körfez ardı.**

### 🟢 VE ÇARE ZATEN İNMİŞ — 11 Ağustos

```
data/yerlesimler_ek23.js
{ ad:"Saroz kuzey kıyısı", tur:"bolge", lat:40.6456, lon:26.6950, k:0 }
kendi gerekçesi: "Emilen: Çimpe 10,8 km · Bolayır 14,8 km — ikisi de
körfezin GÜNEY yakasında… Tek başına ölçüldü: 1355'te −331 km² Osmanlı"
⚠️ koordinat 1,77 km denizdeydi, SINANMIŞ öneri uygulandı
```
Bugünkü kutu ölçümü (`_yer_ara.py --kutu 40.45 26.55 41.05 27.60 --gun
1356-01-01`): **7 nokta** — Çimpe ve Bolayır `OSMANLI`, **Saroz kuzey
kıyısı · Şarköy · Keşan · Malkara · Tekirdağ `bizans`.**

⇒ **İki madde de VERİ TARAFINDA KAPALI.** Açık kalan tek şey Emre'nin
*"buna sebep olan hatayı da ortadan kaldıralım"* isteği — yani **sınıf ②
için genel bir çare.**

---

## 2. TASARIM — sınıf ② için ne yapılmalı

### Önce: bu sınıf KAÇ KEZ elle yamalandı?

```
`tur:"bolge"` dolgu noktası: 144
gerekçesinde körfez/boğaz/karşı kıyı/taşma geçen: 21
  → bunların 18'i ÇÖL dolgusu (Rub'ul Hâlî · Sahra · Nûbe · bozkır…),
    yani BAŞKA bir sınıf (seyreklik, `CLAUDE.md §2`)
  → GERÇEKTEN su aşırı olan: 3
       Boğaziçi (Rumeli yakası) · Saroz kuzey kıyısı · Garabogaz (Bekdaş)
```

### ⇒ ÖNERİM: MOTOR KURALI DEĞİL, NÖBETÇİ

**Gerekçe ölçüme dayanıyor: sınıf ② bilinen 3 vakadan ibaret.** Üç vaka
için geometri motoruna kural eklemek, bu projenin en pahalı dersini
tekrarlama riski taşır:

> `CLAUDE.md §11` — **A1 yarıçap tavanı**: tavan doğru hesapladı, öngörü
> birebir tuttu, **ama yayın durduruldu**: 20 petek kısaldı, 3,4 milyon
> km² sahipsizleşti ve **118 yetim yüz sahipli komşulara katıldı** —
> *"tavanın önlemek için var olduğu şeyi sonraki aşama yeniden yaptı."*
> ⇒ Kusur ne tavandaydı ne yetim-yüzde; **İKİSİNİN ARASINDAYDI.**

Bir "dolambaç oranı" kuralı **birebir aynı riski** taşır: hücreden bir
parça koparırsınız, yetim-yüz mantığı onu en yakın sahipli komşuya geri
verir — ve bu sefer komşu **körfezin bu yakası** olur, yani hiçbir şey
değişmez ama koşu 4-5 saat sürer.

### Nöbetçinin tarifi (koşudan sonra `arac/`a inecek)

```
SORU      bir peteğin bir parçasına ulaşmak için KARA yolu, kuş uçuşu
          mesafenin K katından uzun mu?
ÖLÇÜT     dolambaç oranı = kara_yolu_km / kusucusu_km
          (motorun Dijkstra'sı zaten kara yolunu hesaplıyor — YENİ
           MAKİNE GEREKMİYOR, `uret_petek.py:1997`nin çıktısı yeter)
EŞİK      önce ÖLÇÜLECEK, sonra konacak. Saroz için beklenen oran yüksek
          (körfezin başından dolaşmak ~60 km, kuş uçuşu ~11 km ⇒ ~5×)
ÇIKTI     İHLAL DEĞİL — "burada dolgu noktası gerekebilir" UYARISI
          + hangi noktanın hangi parçayı nereden aldığı
```
🔴 **Ve niçin uyarı, ihlal değil:** motor doğru çalışıyor. Kusur veride
(nokta yok) ve çaresi **nokta yazmak** — tıpkı Saroz'da yapıldığı gibi.
Bir denetimin *"burası yanlış"* değil *"burada bir soru sorulmadı"*
demesi bu projede zaten yerleşik (`Değişmez 7`ün kendi başlığı).

⚠️ **Ölçmediğim:** bilinen 3 vaka dışında kaç aday olduğunu **ölçmedim**
— ölçmek için Dijkstra çıktısı gerekiyor ve o koşu içinde. Nöbetçinin
ilk işi bu sayıyı vermek olacak. **3 sayısı "elle yamalanmış olanlar"dır,
"var olanlar" değil.**

---

## 3. HÜKÜM

| madde | hüküm | gerekçe |
|---|---|---|
| `p0002/H-0014` | **zaten-dogru** | veri tarafı 08-11'de kapandı, ölçüldü |
| `p0008/H-0005` | **cozuldu** (veri) + **sirada** (genel çare) | kural ① için var; ② için nöbetçi önerildi |

📌 Ve bir kayıt: `p0008/H-0005`in *"motor kuralı"* diye sınıflandırılması
**yerindeydi** — ama kural **yazılacak** değil, **zaten yazılmış** çıktı.
İstenen şeyin bir kısmı vardı, kalan kısmı ise bir kuralla değil bir
nöbetçiyle karşılanmalı. *Ölçüm, işin cinsini değiştirdi.*
