<!-- DURUM: BITTI | 2026-08-25 | OPUS HAZIR KITA 82 | ALTYAPI ⑤ koridor agi — KAYNAK ARAYISI -->
# KORİDOR AĞI — KAYNAK ARAYIŞI · `ALTYAPI ⑤`

**Oturum:** OPUS HAZIR KITA 82 · **Tarih:** 25 Ağustos 2026
**İş:** Emre'nin kararı — *"5 — bu konuda KAYNAK ARAŞTIRALIM, SAĞLAM KAYNAK
BULMADAN İŞE BAŞLAMAYALIM."*
**Kapsam:** yalnız RAPOR. Tek satır veri yazılmadı, hiçbir dosya bağlanmadı.

---

## ÖZET — sayıyla

```
7 aday incelendi
  🟢 KABUL            2   Itiner-e · OWTRAD
  🟡 ŞARTLI            1   ORBIS
  🔴 RED               3   TIB/DigTIB (kapalı) · Viabundus (coğrafya) · DARMC (aşıldı+ölçülemedi)
  ⚪ VERİ YOK, YAYIN VAR  1   Osmanlı menzil külliyatı

Viabundus ölçümü          KISMEN DOĞRULANDI — 1 iddia tuttu, 2 iddia ÇÜRÜDÜ
TDV slug ölçümü           şartnamedeki 3 slugun 2'si ÖLÜ · doğrusu bulundu
```

---

# ① VİABUNDUS ÖLÇÜMÜNÜN DOĞRULANMASI

Şartname: *"devraldığın rakamı taban yapma."* Yaptım. Alet:
`scratchpad/viab_dogrula.py` — düğümler `node` ile `data/koridor*.js`ten
çıkarıldı (§11: *veri zaten bir dilde yazılıysa o dilin yorumlayıcısını çağır*),
Viabundus kenarları GeoJSON'dan, mesafe haversine.

| şartnamedeki iddia | ölçüm | hüküm |
|---|---|---|
| Viabundus 1.3 · **19.283 kenar** | 19.283 feature | 🟢 **BİREBİR TUTTU** |
| **bizim 39 koridor düğümü** | **124 tekil düğüm** (4 dosya) | 🔴 **BAYAT** |
| 25 km'sinde **SIFIR kenar** | **1 düğüm var** — Lvov, **0,2 km** | 🔴 **ÇÜRÜDÜ** |
| en yakın kenar Belgrad'a **466 km** | **438,2 km** | 🟡 mertebe doğru, sayı değil |

### ② ÇIKARDIĞIM — üç ayrı şey, üçü de ayrı satır

**(a) "39" bayat bir sayıydı ve sebebi ölçüldü.** Bugün koridor ağı dört
dosyada duruyor:
```
KORIDOR_DUGUM          39      ← şartnamenin saydığı, TEK dosya
KORIDOR_H2B_DUGUM      52
KORIDOR_YAMA_F5C9A5    23
KORIDOR_HALKA2_DUGUM   10
                      ───
                      124 tekil (ad+koordinat)
```
Yani sayı **yanlış değildi, ESKİYDİ** — 18 Ağustos'ta doğruydu. `CLAUDE.md
§1.5`in bayatlama ailesinin bir üyesi daha; burada bayatlayan bir tablo
satırı değil, **bir şartname tabanı.**

**(b) "Sıfır kenar" çürüdü ve çürüten şey tam da (a)'nın sebebi.** Lvov
`KORIDOR_H2B_DUGUM` içinde — yani **39'luk kümede yoktu.** Ağ büyüdü,
Viabundus'un güney sınırının üstüne bir düğüm çıktı ve iddia kendiliğinden
düştü. ⇒ *Ölçüm doğruydu, EVREN büyümüştü.*

**(c) Ama hüküm DEĞİŞMİYOR — ve asıl sayı bu:**
```
Viabundus kirilma noktasi kutusu   48,7 - 60,7 K  ·   3,2 - 37,6 D
bizim ag kutusu                    21,4 - 49,8 K  ·  16,4 - 46,3 D

Viabundus kutusunun ICINDE kalan dugumumuz:  2 / 124  (%1,6)
   Lvov       49,840 K  24,030 D
   Yazlofça   48,951 K  25,435 D
```
Enlem kuşaklarına göre dağılımımız:
```
20,0-30,0 K :   2        40,0-45,0 K :  50
30,0-35,0 K :  12        45,0-48,7 K :  28
35,0-40,0 K :  30        48,7-55,0 K :   2   ← Viabundus kuşağı
```
⇒ **Viabundus'un güney sınırı (48,7°K) ağımızın en kuzey saçağını teğet
geçiyor.** Koordinatörün *"Osmanlı dünyasını hiç kapsamıyor"* hükmü **AYAKTA**
— iki iddiası çürüdü ama **sonuç değişmedi.** Bunu böyle ayırıyorum: bir
hükmün doğru olması, gerekçesinin de doğru olduğu anlamına gelmiyor.

⚠️ **Yöntem sınırı, damgalıyorum:** kenarların yalnız **kırılma noktalarını**
(1.208.514 vertex) ölçtüm, iki vertex arasındaki gerçek en yakın noktayı
değil. Bu, gerçek mesafeyi **olduğundan büyük** gösterebilir, küçük değil —
yani *"kapsamıyor"* hükmünü **güvenli tarafta** bırakıyor. 438,2 km'lik
Belgrad ölçümü de bu yüzden bir **üst sınır**.

⚠️ **Ve Belgrad bizim ağımızda bir düğüm DEĞİL** — o sayıyı Belgrad'ın
koordinatıyla (44,8176 / 20,4569) ayrıca ölçtüm. Koordinatörün 466'yı
neyle ölçtüğünü **bilmiyorum**; 28 km'lik farkın sebebini **ölçmedim.**

---

# ② ADAYLAR — dört alanla

## 🟢 KABUL 1 — **Itiner-e** (Roma yol ağı, yüksek çözünürlük)

| alan | değer |
|---|---|
| **kapsam** | Roma İmparatorluğu azamî sınırları (~150 MS). **Anadolu · Balkanlar · Levant · Mısır · Kuzey Afrika dâhil** |
| **lisans** | **CC BY 4.0** |
| **biçim** | GeoJSON (78,05 MB) · GeoPackage (33,62 MB) · Shapefile (144 MB) · gecelik ndjson dökümü |
| **tanecik** | **KENAR + GERÇEK GEOMETRİ** — 14.769 yol parçası, LineString, parça başına metaveri ve URI |

**Dayanak (doğrulandı — tam metin okundu):** de Soto, Pažout, Brughmans ve
ark., *"Itiner-e: A high-resolution dataset of roads of the Roman Empire"*,
**Scientific Data 12: 1731 (2025)**, DOI `10.1038/s41597-025-06140-z`.
Veri: Zenodo `10.5281/zenodo.17122148` · portal `itiner-e.org`.

**Sayılar:** 299.171,31 km (ana yol 103.477,9 km / tâli 195.693,3 km) —
selefi DARMC'nin 188.555 km'sini neredeyse ikiye katlıyor.

🔴 **İKİ CİDDÎ ÇEKİNCE, ikisi de makalenin KENDİ cümlesinden:**
```
KESİNLİK     "kesin"        %2,737
             "varsayımsal"  %89,818      ← ondan dokuzu KESİN DEĞİL
             "hipotetik"    %7,445
KRONOLOJİ    "A major challenge is the absence of chronological evidence
              of the creation and change of roads"
BOŞLUK       oncelikli bosluklar arasinda "central Anatolia" ADIYLA sayiliyor
```
② **ÇIKARDIĞIM:** Itiner-e bize **tarih** vermez, **topoğrafya** verir. Bir
Roma yolu nerede geçiyorsa orada bir geçit, bir sırt oyuğu, bir nehir geçidi
vardır ve o **1281'de de oradadır** — atlasın `ALTYAPI ⑤` ihtiyacı da tam
budur (motorun topoğrafyaya yaslanması). Ama *"bu yol 1453'te kullanılıyordu"*
demek için kullanılamaz. ⇒ **Coğrafî omurga olarak KABUL, tarihsel dayanak
olarak DEĞİL.**

---

## 🟢 KABUL 2 — **OWTRAD / ODDDA** (eski dünya ticaret yolları)

| alan | değer |
|---|---|
| **kapsam** | MÖ 4000 – ~1820. **Bizim dört kümemiz 1200-1600 arası ve tam bizim coğrafyamızda** |
| **lisans** | **CC BY-NC 2.5** 🟡 — *ticarî olmayan* |
| **biçim** | CSV · MapInfo · Google Earth KML |
| **tanecik** | **DÜĞÜM + KENAR**, uçların koordinatıyla; ara geometri YOK |

**Dayanak:** Dr. T. Matthew Ciolek, Research School of Pacific and Asian
Studies, **Australian National University**. Ve asıl dayanak veri kümesinin
**kendi içinde** yazılı: `tmcTRm1300`ün kaynağı
> *"A map 'Trade routes in the Ottoman Empire', pp. 122-123, in: Inalcik,
> Halil. 2000. The Ottoman Empire: The Classical Age 1300-1600."*

⇒ Yani bu küme **İnalcık'ın haritasının georeferanslanmış hâli.** Kaynağın
kendi güven damgası: `Trustworthiness of the source: v.high`.

**ÖLÇTÜĞÜM — dört küme, birebir sayıldı:**

| küme | konu | kenar | düğüm | kutu |
|---|---|---|---|---|
| `tmcTRm1300` | **Osmanlı 1300-1600 ticaret yolları** | **175** | 156 | 20,5-48,5 K · 12,3-49,8 D |
| `tmcTRm1200a` | Anadolu 1200-1400 | **192** | 177 | 36,0-42,2 K · 25,9-46,3 D |
| `tmcTRm1200b` | Ortadoğu-Kafkasya-Orta Asya 1200-1400 | **121** | 109 | 26,1-48,8 K · 23,2-120,4 D |
| `tmcZMEm1300` | Ortadoğu-Hindistan 1300-1600, ticaret **ve hac** | **150** | 131 | 5,0-84,0 K · 23,3-89,1 D |
| | **TOPLAM** | **638** | **573** | |

Örnek zincir (`tmcTRm1300`): `Buda → Mohaç → Ösek → Belgrad → Niş → Sofya →
Tatarpazarcık → Filibe → Edirne` — **Via Militaris**, yani bizim Rumeli
kolumuzun ta kendisi. Kayıtlar `maj`/`min` (ana/tâli) ayrımı ve `1300`-`1600`
tarih alanı taşıyor.

🔴 **ÜÇ ÇEKİNCE — üçü de ölçüldü:**
```
① ÇÖZÜNÜRLÜK   dc.coverage.spatial.resolution = "800 (approx 1:8M sketch map)"
               ⇒ kitap haritasi taneciginde. Gecide/nehir gecidine YASLANMAZ.
② SENTETIK DUGUM  573 dugumun 268'i (%47) gercek yerlesim DEGIL --
               "loc13-tmc050503" gibi catallanma/kirilma noktasi.
               GERCEK ADLI dugum: 305.
               kume kume: TRm1300 %30 · TRm1200a %67 · TRm1200b %69 · ZMEm1300 %21
③ LISANS NC    ticari olmayan sart. Atlas egitim amacli ve ticari degil,
               ama NC lisansli veri GitHub Pages'te yeniden dagitiliyor
               ⇒ HUKUKI HUKUM BENIM VEREBILECEGIM BIR SEY DEGIL, Emre'ye sorulmali.
```
② **ÇIKARDIĞIM:** OWTRAD, Itiner-e'nin **tam tersini** veriyor — Itiner-e'de
geometri var tarih yok, OWTRAD'da **tarih var geometri kaba.** İkisi
birbirinin yerine geçmez, **birbirini tamamlar**: OWTRAD *hangi durak hangi
durağa bağlı ve ne zaman* der, Itiner-e *o hat araziden nasıl geçer* der.

---

## 🟡 ŞARTLI — **ORBIS** (Stanford Roma dünyası ağ modeli)

| alan | değer |
|---|---|
| **kapsam** | MÖ 50 – MS 500 · Afrika, Avrupa, **Küçük Asya, Ortadoğu** (40+ ülke) |
| **lisans** | **CC BY 3.0** |
| **biçim** | CSV (düğüm + kenar tablosu) |
| **tanecik** | **678 düğüm · 2.208 kenar** · kenarda **km · gün · denarius maliyeti · tür (kara/nehir/deniz)** — ama **GEOMETRİ YOK** |

**Dayanak:** Meeks, Scheidel, Weiland, Arcenas (2014), *ORBIS (v2) Network
Edge and Node Tables*, **Stanford Digital Repository**,
`purl.stanford.edu/mn425tz9757`.

② **ÇIKARDIĞIM — niçin ŞARTLI:** Şema olarak bize **en yakın** aday bu.
Bizim koridor kaydımızda zaten *uzunluk* ve *süre* alanları var
(`KORIDOR-OLCUM-15AGU.md`: "uzunluğu ölçülmüş 22 · süresi ölçülmüş 25") ve
ORBIS **tam bu iki alanı** taşıyor — üstelik mevsime duyarlı. Ama dönemi Roma,
geometrisi yok. ⇒ **Veri kaynağı olarak değil, MODEL olarak alınmalı**:
"kenar neyi taşımalı" sorusunun hazır ve hakemli bir cevabı.

---

## 🔴 RED 1 — **TIB / Digital Tabula Imperii Byzantini**

Coğrafya ve dönem bakımından **listenin en iyisi**: Bizans tarihî coğrafyası,
4. yüzyıl – 15. yüzyıl ortası, ciltlerin çoğu **Anadolu, Ege ve Balkanlar**
üzerine; Efes hinterlandının yol ağı gibi çalışmalar içeriyor. Avusturya
Bilimler Akademisi (ÖAW), OpenAtlas altyapısı, *Maps of Power* uygulaması.

🔴 **RED SEBEBİ TEK VE KESİN: veri indirilemiyor.** ÖAW telif düzenlemesi
gereği içerik görüntülenebiliyor, **bilimsel ya da özel kullanım için
indirilemiyor.** ⇒ `§4`ün akademiklik ölçütünü fazlasıyla geçiyor, **açıklık**
ölçütünde düşüyor.

📌 Ve Itiner-e'nin Anadolu kaplaması **zaten TIB'e dayanıyor** (makale David
French ve *Tabula Imperii Byzantini*'yi başlıca kaynak olarak sayıyor) —
yani TIB'in içeriğine **dolaylı olarak, açık lisansla** ulaşıyoruz.

---

## 🔴 RED 2 — **Viabundus** (elimizde duran veri)

Yukarıda ölçüldü: kutusu 48,7-60,7°K, ağımızın **%1,6'sı** içinde. Kuzey ve
orta Avrupa · 1350-1650. Kalitesi tartışmasız (hakemli, CC-BY, `KAYNAK.md`
künyesi temiz) — **kusur kalitede değil COĞRAFYADA.**
⇒ **Silinmez, SEÇİLMEZ.** Halka 2'nin batı kanadı açıldığında yerinde duruyor.

---

## 🔴 RED 3 — **DARMC / MAPS** (Harvard)

Roma yol ağı shapefile'ı Harvard Dataverse'te (`10.7910/DVN/TI0KAU`),
Barrington Atlas'tan türetilmiş.
🔴 **İki sebeple listeye girmiyor:**
```
① AŞILDI      Itiner-e makalesi DARMC'yi selefi olarak anip 188.555 km
              diyor; Itiner-e 299.171 km. Ayni kaynak agaci, %59 daha az.
② ÖLÇEMEDIM   darmc.harvard.edu/data-availability -> HTTP 403.
              Lisans metnini OKUYAMADIM.
```
⚠️ **"Ölçemedim" ayrı bir kova ve "temiz" diye raporlanmıyor** (`§11`). DARMC
bir sonraki oturum için **kapalı değil, BAKILMAMIŞ** durumda — ama Itiner-e
varken bakmaya değmeyebilir.

---

## ⚪ VERİ KÜMESİ YOK, YAYIN VAR — **Osmanlı menzil külliyatı**

Bu, şartnamenin *"Osmanlı menzil teşkilatı"* ekseni. Ve cevabı **olumsuz ama
kesin**: konu **çok iyi çalışılmış**, açık bir **veri kümesi yok.**

**Ne var:**
```
TDV `menzil--osmanli`   Yusuf Halacoglu · TDV Islam Ansiklopedisi 29 (2004) 159-161
                        "Ulkenin her tarafina ulasan yollarin merkezi Istanbul olup
                         Anadolu ve Rumeli yonlerinde UC ANA KOLA ayrilirdi"
                        kurulus 1539 (Lutfi Pasa) · kaldirilis 1839
                        atif: Halacoglu · C. Heywood (17-18. yy menzilhane agi)
Veysel Simsek (2025)    "Visualizing the Ottoman Menzils and Travel Times (c. 1830)
                         through Digital Tools", Int. J. Turkish Studies 24/1-2, 79-92
                        ~400 menzil konumlandirilmis, mesafeler SAAT cinsinden
                        kaynak: Husrev Pasa (o. 1855) kutuphanesindeki menzilhane defteri
```
🟢 **Şimşek atfını DOĞRULADIM** (`§4`: *özet bir yayına atıf veriyorsa atıf da
doğrulanır*). Dergi içindekiler PDF'ini çekip `pypdf` ile okudum:
> *"Veysel Şimsek: Visualizing the Ottoman Menzils and Travel Times (c. 1830)
> through Digital Tools ... 79"* — sonraki madde s. 93'te. **Arama özetinin
> verdiği 79-92 aralığı birebir tuttu.**

🔴 **Ama makalenin VERİSİ yayımlanmış değil.** Basılı dergi makalesi; ne
Zenodo ne Dataverse ne de bir depo bağlantısı bulabildim. ⇒ Kullanmak için
**yazarla temas** gerekir — bu benim yetkim dışında, koordinatöre bildiriyorum.

🔴 **Ve `digitalottomanstudies.com/gis` taraması OLUMSUZ:** 16 proje listeli
(Yunus Uğur'un Osmanlı şehirleri atlası, Kabadayı'nın sanayileşme projesi,
Yaycıoğlu-Hadjikyriacou'nun *Mapping Ottoman Epirus*'u dâhil) — **hiçbiri
yol/güzergâh/menzil veri kümesi değil**, hepsi yerleşim, nüfus ya da idarî
bölünme. İndirilebilirlik ve lisans **hiçbirinde belirtilmemiş.**

---

# ③ YAN BULGU — ŞARTNAMEDEKİ TDV SLUGLARININ İKİSİ ÖLÜ, VE YENİ BİR SONEK DESENİ

Şartname *"TDV `menzil` · `derbend` · `ulak`"* diyordu. `§4` gereği üçünü de
HTTP koduyla sınadım:

```
🔴 302 (OLU)   menzil · derbend · menzilhane · derbentci · sol-kol · orta-kol
               menzil--osmanlilar · derbend--osmanlilar · ulak--osmanlilar
               menziller · hac-yolu
🟢 200 (CANLI) ulak · posta · kervan · kervansaray · berid · peyk
🟢 200         menzil--osmanli      ← DOGRU SLUG
```

**Doğru slug arama sayfasından çıktı** (`arama/?q=menzil`) ve `§4`ün sonek
ailesine **yeni bir üye** ekliyor:
```
bilinen desen   ordu -> ordu--sehir · saray -> saray--sehir · cin -> cin--ulke
YENI            menzil -> menzil--osmanli
```
⇒ **Bir kurum adı genel bir kelimeyle çakışıyorsa, Osmanlı kurumu maddesi
`--osmanli` sonekinde olabilir.** Ve dikkat: `menzil--osmanlilar` (çoğul)
**ÖLÜ**, `menzil--osmanli` (tekil) canlı — sonek tahmin edilemiyor, **aranması
gerekiyor.**

🔴 **`derbend` için sonuç OLUMSUZ ve bunu böyle yazıyorum:** aramanın verdiği
tek madde `derbend--dagistan`, yani **Dağıstan'daki Derbent şehri** — geçit
muhafazası kurumu değil. `derbentci`, `derbend teskilati` aramaları **boş
döndü.** ⇒ *Derbend teşkilatının TDV'de müstakil maddesi **bulunamadı.***
(`§4`: bu bir sonuçtur, uydurmaktan kat kat değerlidir.)

---

# ④ HÜKÜM VE ÖNERİ

## Emre'nin sorusuna doğrudan cevap
> *"Sağlam kaynak bulmadan işe başlamayalım."*

🟢 **SAĞLAM KAYNAK VAR — ama tek bir kaynak değil, İKİSİ BİRDEN.** Ve
ikisinin de tek başına bir eksiği var, üstelik **eksikleri birbirinin
tersi**:

```
                  GEOMETRI          TARIH              TANECIK
Itiner-e          ✓ gercek hat      ✗ ~150 MS, kronoloji YOK    14.769 parca
OWTRAD (4 kume)   ✗ 1:8M taslak     ✓ 1300-1600                 638 kenar / 305 adli dugum
```

**Önerim — üç kademe, ama KARAR EMRE'NİN VE KOORDİNATÖRÜN:**
1. **OWTRAD `tmcTRm1300` ile başla.** Dönem birebir bizim çekirdeğimiz
   (1300-1600), kaynağı İnalcık, şeması bizim şemamız (düğüm-kenar-tarih-tür),
   ve **175 kenar** bugünkü ağımızı birkaç katına çıkarır.
   🔴 **Ama önce lisans kararı gerekiyor: CC BY-NC.**
2. **Itiner-e'yi geometri omurgası olarak al.** OWTRAD'ın kaba hattını
   Itiner-e'nin gerçek yol geometrisine yaslamak, `ALTYAPI ⑤`in *"motorun
   topoğrafyaya yaslanması"* amacını doğrudan karşılar.
3. **ORBIS'i veri olarak değil ŞEMA olarak oku** — kenarın hangi alanları
   taşıması gerektiğini hakemli bir modelden devral.

## 🔴 BENİM ÖLÇMEDİĞİM — açıkça yazıyorum
```
· OWTRAD dosyalarini INDIRMEDIM, yalniz HTML sayfalarindaki gomulu CSV'yi
  ayristirdim. Indirilebilir CSV/KML dosyalarinin ayni sayida kayit tasidigini
  DOGRULAMADIM.
· Itiner-e'yi INDIRMEDIM (78 MB). Anadolu'daki gercek parca yogunlugunu
  OLCMEDIM -- makale "central Anatolia"yi bosluk diye sayiyor ama ne kadar
  bosluk oldugunu SAYMADIM.
· DARMC lisansi OKUNAMADI (403).
· NC lisansinin bu proje icin uygunlugu bir HUKUK sorusu; ben hukum vermedim.
· Simsek 2025'in verisinin yayimlanmadigini ARADIM ve BULAMADIM;
  "yayimlanmamistir" diye kesin konusmuyorum, "bulamadim" diyorum.
```

## Kabul ölçütü — şartnamenin istediği biçimde
```
7 aday incelendi · 2 KABUL · 1 SARTLI · 3 RED · 1 "veri yok, yayin var"
bosluk kalmadi: her adayda kapsam · lisans · bicim · tanecik dolduruldu
Viabundus olcumu: 1 iddia DOGRULANDI · 2 iddia CURUDU · hukum AYAKTA
```

---

## Kullanılan aletler (scratchpad, depoya girmedi)
```
viab_dogrula.py     Viabundus x koridor mesafe olcumu (node + haversine)
viab_ek.py          kapsama kutusu ve enlem kusagi dagilimi
owtrad_olc.py       dort OWTRAD kumesinin kenar/dugum/kutu sayimi
owtrad_sentetik.py  gercek yerlesim ile sentetik ara-nokta ayrimi
toc_oku.py          IJTS 24/1-2 icindekiler — Simsek atfinin dogrulanmasi
```

## Kaynaklar
- de Soto, Pažout, Brughmans ve ark., *Itiner-e: A high-resolution dataset of roads of the Roman Empire*, **Scientific Data** 12:1731 (2025) — DOI `10.1038/s41597-025-06140-z` · veri `10.5281/zenodo.17122148` · `itiner-e.org`
- Meeks, Scheidel, Weiland, Arcenas, *ORBIS (v2) Network Edge and Node Tables*, **Stanford Digital Repository** (2014) — `purl.stanford.edu/mn425tz9757`
- Ciolek, T. Matthew, *OWTRAD Dromographic Digital Data Archives*, **Australian National University** — `ciolek.com/owtrad` (CC BY-NC 2.5); `tmcTRm1300`ün kaynağı: İnalcık, Halil, *The Ottoman Empire: The Classical Age 1300-1600*, London: Phoenix (2000), ss. 122-123
- Halaçoğlu, Yusuf, "Menzil", **TDV İslâm Ansiklopedisi** 29 (2004), 159-161 — `islamansiklopedisi.org.tr/menzil--osmanli`
- Şimsek, Veysel, "Visualizing the Ottoman Menzils and Travel Times (c. 1830) through Digital Tools", **International Journal of Turkish Studies** 24/1-2 (2025), 79-92
- *Tabula Imperii Byzantini* / DigTIB, **Österreichische Akademie der Wissenschaften** — `tib.oeaw.ac.at` (indirme kapalı)
- Viabundus 1.3 — `veri-kaynak/viabundus/KAYNAK.md` (CC BY 4.0, DOI `10.5281/zenodo.10828107`)
