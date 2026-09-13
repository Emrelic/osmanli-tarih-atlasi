# GÖRSEL DALGA 2 — padişah albümleri (H-0001) + imar maddelerine mimari görsel (H-0002)

**13 Eylül 2026 · paket 0045 · işçi oturum (GORSEL-DALGA2)**
Dosyalarım: `assets/gorseller/` (yeni görseller) · `data/gorsel_madde.js` (kayıt eki) ·
`denetim/ARAC-GORSEL-LISANS-0913b.py` (alet kopyası) · bu rapor. **Commit ETMEDİM.**
`js/app.js`, `yerlesim`/motor dosyaları, `olaylar*`/`kronoloji*` dosyaları **dokunulmadı.**

---

## 0. TESLİM — SAYIYLA

```
(a) H-0001 PADİŞAH ALBÜMÜ   5 albüm kaydı · 21 öğe
    indirilen 17 yeni dosya + 4 mevcut portre (assets/portreler/, KAYNAKLAR.txt ile eşleşti)
    taslağın 17 görselinin 17'si yeniden ölçüldü, 17'si KABUL, 17'si bağlandı
      (13'ü indirildi + 4'ü mevcut portre dosyası)
    + taslakta "alet RED — çelişki" bekleyen 4 dosya 0913b ile KABUL → 4'ü de EKLENDİ
    elenen/bulunamadı: Murad_IV.jpg (künyesiz) · IV. Murad 3. görsel · 3 türbe/cami adayı (CC BY-SA)
    padişah başına öğe: II. Mehmed 4 · I. Selim 5 · I. Süleyman 6 · IV. Murad 2 · II. Abdülhamid 4
(b) H-0002 MİMARİ GÖRSEL    6 kayıt · 6 yeni dosya
    bağlı 4: Süleymaniye · Selimiye · Sultanahmet · Nuruosmaniye
    indirildi ama BAĞLANMADI 2: Mostar · Mihrimah (1566-01-01'de 3 madde — §4②)
    taslağın 3 adayı 3/3 KABUL · taslağın 3 "bulunamadı"sı bu oturumda BULUNDU
    elenen 7 aday (CC BY-SA 3 · lisans kategorisiz 2 · daha iyi künyeli aday seçildiği için kullanılmayan 2)
TOPLAM   23 yeni dosya · 3.464 KB · en büyüğü 249 KB · data/gorsel_madde.js 9 → 20 kayıt
node doğrulaması  kayıt 20 · öğe 39 · hata 0
🔴 AÇIK ÇAKIŞMA   Kanûnî albümü vefat maddesinde (1566-09-07) GÖRÜNMEZ — §4①
⚠️ git status js/app.js "M" gösteriyor — BU OTURUM DOKUNMADI (başka bir oturumun değişikliği)
```

---

## 1. YÖNTEM — her görsel için dört adım

```
① LİSANS YENİDEN ÖLÇÜLDÜ, indirmeden hemen önce
   Commons API (extmetadata: LicenseShortName · Copyrighted · Artist · Date + kategoriler)
   + denetim/ARAC-GORSEL-LISANS-0913.py (asıl alet)
   + denetim/ARAC-GORSEL-LISANS-0913b.py (düzeltilmiş kopya, §5)
② İNDİRME   Commons küçük resmi (≤1024 px) → Pillow: RGB, en çok 1000×1100 px,
            JPEG q85→60 kademeli, her dosya ≤250 KB
③ GÖZLE GÖRÜLDÜ   her dosya açıldı, gorsel_alt GÖRÜNTÜYE göre yazıldı
④ BAĞLAMA   olay: değerleri data/olaylar*.js + kronoloji*.js (81 dosya · 6193 madde)
            node eval ile BİREBİR ölçüldü; aynı güne düşen madde sayısı da sayıldı
```
Doğrulama betiği (scratch, node): kayıt 18 · öğe 36 · **hata 0** — her `olay` günü
kronolojide var, her `url` diskte var, her `lisans` app.js'in
`_gorselLisansGosterilebilirMi` sınavını geçiyor, her öğede `gorsel_alt` dolu.

Kayıt biçimi dosyadaki mevcut Hünernâme albümüyle aynı (`tur:"albüm"`, öğe başına
`url · baslik · gorsel_alt · eser · sanatci · yil · lisans · gorsel_kaynak · kesinlik`).
Ek alanlar (app.js okumaz, izlenebilirlik için): `kisi_id` · `lisans_olcum` · `not` ·
`bekleyen_olay`.

---

## 2. (a) H-0001 — PADİŞAH ALBÜMLERİ

| Kayıt `id` | `olay` (cülus · vefat) | Öğe | Yeni indirilen | Portre (mevcut dosya) |
|---|---|---|---|---|
| `1451-02-18-mehmed2-albumu` | `1451-02-18` · `1481-05` | 4 | 3 | `assets/portreler/mehmed2.jpg` |
| `1512-04-24-selim1-albumu` | `1512-04-24` · `1520-09-21` | 5 | 4 | `assets/portreler/selim1.jpg` |
| `1520-09-30-suleyman1-albumu` | `1520-09-30` · `1566-09-07` | 6 | 5 | `assets/portreler/suleyman1.jpg` |
| `1623-09-10-murad4-albumu` | `1623-09-10` · `1640-02-09` | 2 | 2 | — (bkz. elenen) |
| `1876-08-31-abdulhamid2-albumu` | `1876-08-31` · `1918-02-10` | 4 | 3 | `assets/portreler/abdulhamid2.jpg` |

Portre dosyalarının Commons kaynağı `assets/portreler/KAYNAKLAR.txt` ile eşleştirildi
(dört dosyanın dördü de taslaktaki Commons sayfasını gösteriyor) ve dördü de gözle görüldü.

**Taslağa göre EKLENEN (taslakta "alet RED — çelişki" diye bekliyordu, 0913b ile KABUL):**
```
Fâtih Camii, Abdullah Frères 1880-93        PD-Abdul_Hamid   → mehmed2 albümü
Atmeydanı alayı frizi, MET DP146524 (1553)  CC-Zero / API CC0 → suleyman1 albümü
Cuma selamlığı, Hamidiye Camii 1880-93      PD-Abdul_Hamid   → abdulhamid2 albümü
Şehzade Abdülhamid, Balmoral 1867           PD-Bain          → abdulhamid2 albümü (500 px — §6 hız sınırı)
```

**ELENEN / BULUNAMADI (H-0001):**
```
Murad_IV.jpg (sitenin IV. Murad portresi)  lisans KABUL ama Commons'ta sanatçı ve tarih BOŞ
                                           → kesinlik dürüstçe doldurulamaz, albüme ALINMADI (taslak kararı korundu)
IV. Murad 3. görsel                        bulunamadı — taslağın aramasında tuğra yalnız 2009 vektör çizimi,
                                           Bağdat/Revan köşkü adayları CC BY-SA; bu oturum yeni arama YAPMADI
Yavuz Selim Camii/türbesi · Kanûnî türbesi  taslak: adaylar CC BY-SA (RED) — yeniden ölçülmedi
'Sultans of the Ottoman Empire' serisi     CC-BY-SA-4.0 kategorisi bağlı (RED, taslak)
Abu Ayyub türbesinde Süleyman (1687)       CC-BY-SA-4.0 kategorisi bağlı (RED, taslak)
```

---

## 3. GÖZLE GÖRÜNCE ÇÜRÜYEN TARİFLER — taslakların gorsel_alt metinleri

Taslaklar görselleri açmadan Commons açıklamasından tarif yazmıştı (kendileri de uyarıyordu).
Açınca **beşi** görüntüyle tutmadı:
```
murad4 "Bağdat seferi"   taslak: "Arap tarzı zırh giymiş ATLI IV. Murad"
                         görüntü: yarım boy portre — at YOK, zırh YOK (sarı kaftan, kırmızı kavuk, hançer)
suleymaniye-1853         taslak: "kubbeleri ve minareleri gösteren" genel görünüm
                         görüntü: kemerli bir revak girişi ve basamaklar, minare YOK
suleymanname-mohac       taslak: "çift sayfalık savaş minyatürü"
                         görüntü: Commons dosyası yalnız padişahın başını/gövdesini gösteren KESİT
selimname-mengli-giray   taslak: "çift sayfalık"  →  görüntü: tek sahne, otağ altında iki hükümdar
hunername-kaplan-avi     taslak: "otağın kurulduğu dere kenarında kaplan avı"
                         görüntü: otağ YOK; av hayvanı beyaz, BENEKLİ bir yırtıcı (kaplan mı pars mı ölçülemez)
Mihrimah (KITA 23)       taslak: "Gurlitt tarafından ÇEKİLMİŞ FOTOĞRAF"
                         görüntü: fotoğraf DEĞİL — mimari rölöve levhası (kesit + zemin planı)
```
📌 Dosya adları taslakların planladığı adlarla kaldı (`...-bagdat-seferi.jpg`, `...-kaplan-avi.jpg`);
yalnız `baslik`/`gorsel_alt` düzeltildi. ⇒ *Bir görselin tarifini açıklamasından yazmak, bir
maddeyi başlığından yazmak gibidir* (`§4②` — `<title>` doğru, gövde başka).

---

## 4. 🔴 BAĞLAMA ÇAKIŞMALARI — görsel var ama madde onu GÖSTERMEYECEK

`app.js:6694` `window.GORSEL_MADDE.find(g => g.olay.indexOf(o.t) >= 0)` — **İLK** eşleşen
kaydı alır, ve eşleşme yalnız `t:` gününe bakar (hangi madde olduğuna değil).

**① `1566-09-07` — Kanûnî albümü vefat maddesinde GÖRÜNMEZ.**
```
1566-09-07-sokullu-mehmed-pasa-portresi  olay ["1566-09-07","1573-03-07"]   ← dizide ÖNCE, find onu alır
1520-09-30-suleyman1-albumu              olay ["1520-09-30","1566-09-07"]
kronolojide o gün TEK madde: "Zigetvar — Kanunî'nin vefatı" (olaylar.js)
```
Sırayı DEĞİŞTİRMEDİM (başka oturumun kaydının görünürlüğünü sessizce kaldırmak olurdu).
Albüm cülus maddesinde (`1520-09-30`) görünür.

**② `1566-01-01` — Mostar ve Mihrimah görselleri BAĞLANMADI (`olay: []`, `bekleyen_olay`).**
```
1566-01-01  3 madde:  Mostar Köprüsü'nün tamamlanması (olaylar_ek14)
                      Edirnekapı (Mihrimah Sultan) Camii'nin tamamlanması (olaylar_ek14)
                      Yasef Nasi'ye verilmesi — Crispo hanedanının azli (kronoloji_naksa_dukaligi)
```
Bağlasaydım: ilk kayıt (Mostar) **üç maddenin üçünde de** çıkardı — Naksa Dukalığı maddesinde
Mostar Köprüsü; Mihrimah görseli hiçbir yerde çıkmazdı. Görseller indirildi ve kayıtları hazır;
yalnız `olay` boş. (`D014` · `D145` — yuvarlak tarih çelişkiyi saklar; KITA 22 bulgusu §2① ile aynı sınıf.)

**③ Aynı sebeple bağlanmayan günler (mimari):**
```
1568-01-01  Selimiye inşaatının başlaması — 5 madde (Habsburg · Hollanda · İsveç · Lehistan) → bağlanmadı,
            Selimiye yalnız 1575-03-01'e (tek madde) bağlandı
```

**④ Başkasının kayıtlarında ölçtüğüm (DOKUNMADIM, bilgi):**
```
1538-09     Barbaros portresi VE Preveze minyatürü aynı günde — find Barbaros'u alır, Preveze GÖRÜNMEZ
1453-05-29  8 madde · 1683-09-12 5 madde · 1588-01-01 5 madde · 1578-01-02 · 1730-09-25 · 1573-03-07 2'şer
            → ilgili görseller o günün bütün maddelerinde çıkar
```

**İSTEK (üçü de başkasının dosyası):**
```
KITA 12 (app.js)   find → filter (bir günde birden çok kayıt hepsi gösterilsin) — ① ve ④ çözülür
KITA 14 (olaylar)  Mostar ve Mihrimah maddelerine TDV'den gün hassasiyeti — ② çözülür,
                   sonra bekleyen_olay → olay taşınır (tek satır)
```

---

## 5. (b) H-0002 — MİMARİ GÖRSEL

| Kayıt `id` | `olay` | Kaynak · lisans | Durum |
|---|---|---|---|
| `1550-06-01-suleymaniye-camii` | `1550-06-01` · `1557-10-16` | LOC photochrom ~1890-1900 · `PD-US` | ✅ bağlı |
| `1566-01-01-mostar-koprusu-1900` | `[]` (bekleyen `1566-01-01`) | Photochrom 16793 P.Z. · `PD` (PD-Detroit/PD-US/PD-Switzerland) | ⏸ indirildi, bağlanmadı (§4②) |
| `1566-01-01-mihrimah-sultan-camii-edirnekapi` | `[]` (bekleyen `1566-01-01`) | Gurlitt 1912 levhası · `PD-old-80` | ⏸ indirildi, bağlanmadı (§4②) |
| `1575-03-01-selimiye-camii-edirne` | `1575-03-01` | BnF Gallica, Agence Meurisse 1920 · `PD` (PD-1996 + PD-France) | ✅ bağlı |
| `1609-08-09-sultanahmet-camii` | `1609-08-09` · `1616-06-09` | Abdullah Frères ~1880, LOC 2003677072 · `PD-old-100` | ✅ bağlı (taslakta "bulunamadı") |
| `1749-01-19-nuruosmaniye-camii` | `1749-01-19` · `1755-12-05` | Sébah & Joaillier 1888, LOC 2004666781 · `PD-old-100` | ✅ bağlı (taslakta "bulunamadı") |

Bağlanan her gün kronolojide **tek maddeye** düşüyor (ölçüldü). `1606-10-11` (Sedefkâr Mehmed
Ağa'nın atanması) Sultanahmet'e bilerek bağlanmadı — madde bir kişinin atanması, yapının değil.

**ELENEN (H-0002):**
```
File:Mosque of Sultan Ahmet I, Istanbul, Turkey LOC 4210471537.jpg
      Commons: "No restrictions" (Flickr Commons) · lisans kategorisi YOK · Copyrighted=True → RED
File:Abdullah frères - Sultan Ahmet camii, Istanbul.jpg
      yalnız CC-PD-Mark · yazar ve tarih BOŞ → RED (0913 ve 0913b ikisi de)
File:Thrace, Andrinople, Mosquée Sultan Selim II et mosquée Eski-Djami - A36449.jpg   CC-BY-SA-4.0 → RED
File:Selimiye Camii (…) au soleil couchant - A36543.jpg                               CC-BY-SA-4.0 → RED
      (ikisi de Albert-Kahn / Gadmer 1922 — müze taraması CC BY-SA yayımlanmış)
File:20. yüzyılın ilk çeyreğinde … Selimiye Camii.jpg   KABUL (PD-Tr/PD-US) ama yazarı bilinmiyor →
      daha iyi künyeli aday (BnF Meurisse) seçildi, KULLANILMADI
File:Nuruosmaniye Mosque Gurlitt 1912.jpg   KABUL (PD-old-70-expired) → Sébah & Joaillier seçildi, KULLANILMADI
File:Exterior_of_Nuruosmaniye_Mosque.jpg    CC-BY-SA-4.0 (KITA 23 taslağı) → RED
```

---

## 6. ALET — `ARAC-GORSEL-LISANS-0913b.py` (kopya; asıl alete DOKUNULMADI)

KITA 22'nin bildirdiği üç yanlış negatifin üçüyle de karşılaşıldı:
```
aynı 34 URL          asıl 0913: KABUL 26 · RED 8     kopya 0913b: KABUL 30 · RED 4
fark = 4 dosya, 4'ü de gerçek kamu malı:
  ① önek   PD-Bain (Balmoral) · PD-Abdul_Hamid (Fatih Camii, Cuma selamlığı)  → 0913 RED
  ② CC0    MET DP146524: kategori adı "CC-Zero", aletin jetonu "CC0"            → 0913 RED
  ③ ASCII  argv/dosyadan yüzde-kodsuz URL verilince çöküyordu                   → 0913b quote() ile kodluyor
```
0913b kuralları: `PD` ve `CC0`/`CC-Zero` TAM eşitlik · `PD-` ya da `PD_` ile başlayan her
kategori KABUL · RED kümesi ve "RED her şeyi ezer" kuralı asıldakiyle aynı ·
**`CC-PD-Mark` TEK BAŞINA KABUL DEĞİL** (Abdullah frères Sultanahmet dosyası bu yüzden RED).
⚠️ `PD_Old` gibi eski/bakımsız kategoriler 0913b'de KABUL — asıl aletin bilerek dışarıda
bıraktığı şey buydu; ben bunları lisansı değiştirmeyen bakım kategorisi saydım. **Karar KITA 24'ün:**
0913b'nin kuralı asıl alete alınacak mı.
⚪ Ayrıca `PD-Abdul` diye bir kategori de eşleşti (HTML'de boşluklu yazımın kesiği) — zararsız, ölçülmedi.

**Wikimedia hız sınırı:** indirme sırasında 429 "Too many requests" alındı (özgün boyutu
≤1024 px olan dosyalar küçük resim yerine özgün URL'den geliyor ve sınır onlara daha sıkı).
Betik bekleyip tekrar denedi; üç dosya uzun geri çekilmede takıldı, betik durduruldu ve
standart küçük resim boyutlarıyla (960 / 500 px) yeniden çekildi. İkinci engel: Commons
**standart olmayan genişliği reddediyor** (`800px` → HTTP 400 "Use thumbnail sizes listed on
w.wiki/GHai"); Balmoral bu yüzden 500 px. ⇒ Sonraki indirici: 250 · 330 · 500 · 960 · 1280 px
dışında genişlik İSTEMESİN, ve özgünü ≤1024 px dosyalarda da küçük resim yolunu kullansın.

---

## 7. KLASÖR

```
assets/gorseller   35 dosya · 5.383.727 bayt (≈5,3 MB)
   önceki 12 dosya  ≈1,8 MB (üçü 250 KB üstünde — KITA 24'ün, dokunulmadı)
   bu oturum 23     3.464 KB · ortalama 151 KB · en büyüğü 249 KB (murad4-sofra, q60)
portreler (yeniden kullanılan 4)   assets/portreler/ — yeni bayt yok
```

## 8. ÖLÇMEDİM · OKUMADIM

```
okumadım    TDV maddeleri — tarih/bağlam notları KITA 22/23 taslaklarının aktarımı
ölçmedim    Süleymaniye LOC photochrom'un Türkiye'de kamu malı olup olmadığı (Commons: ABD dışı belirsiz)
ölçmedim    Robertson fotoğrafının Süleymaniye'nin HANGİ girişi olduğu
ölçmedim    Gurlitt levhasındaki ikinci (çizer) imzanın sahibi ve ölüm yılı
ölçmedim    Selimname sahnesinde hangi figürün Selim, hangisinin Mengli Giray olduğu (tarif nötr yazıldı)
ölçülemedi  arayüzde görünüm — tarayıcıda açılmadı (app.js'e dokunmak bu oturumun işi değil)
```
