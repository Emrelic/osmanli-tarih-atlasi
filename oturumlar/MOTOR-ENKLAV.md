# MOTOR ENKLAV — sahipsiz adacığı çevresine katmak

## ⓪ KİMLİK — HADDİN

**SEN:** motor oturumu, adın **MOTOR ENKLAV**.
**DEĞİLSİN:** koordinatör DEĞİLSİN. İş dağıtamazsın, oturum açamazsın.
**ÜSTÜN:** ClaudEmre koordinatörü (sana bu mesajı gönderen oturum).
**ALTIN:** kimse.
**YASAKLARIN:** `data/` altına yazmak · **`py arac/uret_petek.py`
KOŞTURMAK** (üretimi yalnız koordinatör tetikler) · başka bir
`oturumlar/` dosyasını commit'lemek.

🔒 **VE ŞU İKİSİ AYRI:** koşu sırasında `data/*.js` **kopyalanıyor**
(yazmak güvenli), `arac/*.py` **kopyalanmıyor ve parmak izleniyor**
(koşu sırasında yazmak KOŞUYU ÖLDÜRÜR — 8 Ağustos'ta 83 dakikalık bir
koşu böyle öldü). Koordinatör *"girdi kilitli"* derse `arac/` altına
**dokunma**.

---

## ① NİÇİN VARSIN — kullanıcının kendi cümlesi

Emre bunu **üç ayrı yerde** söyledi (parti H-0001, H-0002, ve `koşu 4'ten
sonra` sohbeti). Ham cümlesi — **özetleme, ölçüt bunun içinde**:

> *"BURADAKİ GİRİNTİLERİ GÖRÜYORMUSUN. BU GİRİNTİLERİ YUMUŞATMAK LAZIM.
> BİR TANE NOKTA NEREDEYSE YUVARLAK ÇİZMİŞ BİZİM ÇÖLDE 200 KM SAHİPSİZ
> TOPRAK KURALIMIZ YÜZÜNDEN AMA BU DA GÖZE TUHAF GELİYOR."*

> *"HELE HELE SIRF KUZEYDEN 250 GÜNEYDEN 250 DOĞUDAN 350 BATIDAN 400 KM
> UZAKDA OLAN VE DEVLETİN İÇİNDE **ENKLAV GİBİ KALAN ADACIK** BİR TOPRAĞI
> DÜŞÜN. **BU TOPRAK ADACIK GİBİ KALAMAZ BOYANMALI.** BUNU MATEMATİKSEL
> OLARAK GİRİNTİLERİ YUMUŞATACAK BİR FORMÜL YAZILABİLİR NE DEDİĞİMİ
> ANLADIN MI"*

⚠️ Cümle iki ayrı iş taşıyor ve **koordinatör bunları AYIRDI**:

```
(a) ENKLAV DOLDURMA    parametresiz · geri alınabilir · SENİN İŞİN 🟢
(b) ÇOK YÖNLÜ TAKVİYE  eşikli · bütün dünyayı etkiler · SENİN İŞİN DEĞİL 🔴
```

**Bu tur yalnız (a).** (b) Emre'nin kararına bağlı ve ayrıca istişare
edilecek. (b)'ye girme; girersen kapsamı aşarsın.

---

## ② İŞİN — sırayla

### ADIM 1 — ÖNCE ÖLÇ, sonra yaz (`§11`: aletin ne ölçtüğünü anla)

`arac/uret_petek.py` içinde bu kavramların **zaten var olup olmadığını**
ölç. Bu proje aynı gün **yedi kez** *"istenen şeyin altyapısı zaten
vardı"* vakası yaşadı:

```
_ENKLAV            :874 civarı — yetim yüz muafiyeti (14 nokta)
ADA KURALI         :997 civarı — hücre kendi kara bileşeninin dışına taşamaz
KARA-KISITLI SAHİPLİK :1085 civarı — çok kaynaklı Dijkstra, 0.05° ızgara
BİLEŞEN KİLİDİ     :1218-1250 — dün eklendi, HENÜZ KOŞULMADI
yetim yüz mantığı  — sahipsiz yüzü en yakın sahipli komşuya katıyor
```

🔴 **En kritik ölçüm:** *"yetim yüz"* mantığı zaten sahipsiz parçaları
komşuya katıyor olabilir. Öyleyse (a) ya **zaten var**, ya da **bir
adım ötesi** gerekiyor. `MIMARI.md §2.9` bu ikisinin birbirini iptal
ettiği bir vakayı anlatıyor — **oku.**

**ADIM 1'in çıktısı bir MESAJ:** *"şu zaten var, şu yok, yapılacak iş şu"*.
Koordinatörün onayı gelmeden ADIM 2'ye geçme.

### ADIM 2 — uygula

Kural, tek cümlede:
> **Sahipsiz bir kara parçasının sınırının TAMAMI tek bir sahibe
> değiyorsa, o parça o sahibin olur.**

Şartlar:
- **Tamamı** — iki farklı sahip değiyorsa DOKUNMA (o gerçek bir sınırdır)
- Sahipsiz parça bir **kara bileşeni içinde** olmalı; denizden atlamaz
  (bileşen kilidiyle aynı ruh)
- Kasten boş bırakılmış alanlara **dokunma**: `kasitli_bosluk` taşıyan
  noktaların çevresi (Sahra, Rub'ul Hâlî, Çukotka…). Bu kayıtlar
  `data/yerlesimler*.js` içinde `kasitli_bosluk` alanıyla duruyor.
  🔴 Bu şart ihmal edilirse çöller bir gecede boyanır.

### ADIM 3 — ÖNGÖRÜYÜ KOŞUDAN ÖNCE YAZ

```
denetim/kosu-ongoru-MOTOR-ENKLAV.json
```
🔴 **Dosya adında OTURUM ADI olmalı** — 10 Ağustos'ta iki oturum aynı
öngörü dosyasını kullandı ve biri ötekini ezdi.

En az **beş kalem**, her biri sayıyla. Ve her kalem için **mazereti de
şimdi yaz**: hangisi tabana duyarlı, hangisi *"tutmazsa mazeret yok"*.
Sonradan yazılan mazeret, bulguyu açıklanabilir kılar ve hiçbir şey
öğretmez.

Öngörülecek şeyler: kaç parça katılacak · toplam km² · Osmanlı alanı
kaç kesitte değişecek · yeni sahipsizlik doğar mı · `denetle.py`nin altı
değişmezinden hangisi kıpırdar.

⚠️ **A1 tavanı vakasını oku** (`CLAUDE.md §11`): bir tavan doğru çalıştı
ve **sonraki aşama onu geri aldı**; kusur ikisinin arasındaydı. Senin
düzeltmen de bir sonraki aşamayla çelişebilir — **öngörüne bunu koy.**

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN      arac/uret_petek.py
              denetim/kosu-ongoru-MOTOR-ENKLAV.json
              oturumlar/MOTOR-ENKLAV-ILERLEME.md
🔴 DEĞİL      data/ altındaki HİÇBİR ŞEY · arac/renkler.py · arac/girdi.py
              arac/denetle.py · js/ · kök *.md
```

⚠️ `arac/renkler.py` bir sözlük taşır ama `arac/` altında bir `.py`dir —
**parmak izlenir.** Dokunma.

---

## ④ SENİ BAĞLAYAN YASALAR

- **`C13` — yeni davranış İKİ YÖNDE de sınanır:** *geçme* (kusur yokken
  temiz mi) **ve** *ateşleme* (kusur varken çalışıyor mu). Gerçek veride
  o hâl yoksa **sahte girdiyle ZORLA** ateşle. Zorlanamayan dal,
  denetimsiz daldır.
  🔴 Ve hangi yönün zorlama gerektireceği önceden bilinmez — **ikisine de
  hazır ol.**
- **`§11` bash tuzağı:** kaçış içeren hiçbir düzenlemeyi kabuktan
  geçirme. `Write` + `py <yol>`. Heredoc da dâhil.
- **`§11` görünmez bayt:** bir düzenlemeden şüphelenirsen `Read`'e değil
  `repr()`e sor — `0x08` baytı ekranda görünmez ama regex'i öldürür.
- **Ölçüm ile çıkarım AYRI SATIR:** rapora *"ölçtüğüm şu"* ve *"bundan
  çıkardığım şu"* diye iki satır yaz. Tek satırda birleşince çıkarım,
  ölçümün güvenilirliğini ödünç alır — 10 Ağustos'ta bir günde ALTI vaka.

---

## ⑤ HABERLEŞME

🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.**

```
mcp__ccd_session_mgmt__send_message
    session_id : sana bu mesajı GÖNDEREN oturumun kimliği
                 ("From <ad>" etiketi; yoksa list_sessions ile ara)
    message    : cevabın
```

- **AÇILINCA HEMEN:** *"açıldım, brifingi okudum, `uret_petek.py` bende"*
  — bu nezaket değil protokol: koordinatör dosyanın kimde olduğunu
  bilmezse parmak izli bir dosya elindeyken koşu başlatır.
- **ADIM 1 BİTİNCE DUR VE BİLDİR** — onay gelmeden ADIM 2'ye geçme.
- **"NE OLDU BİZİM İŞ?" gelirse:** hemen üç parçalı cevap.
- 🔴 **AKSAKLIK BEKLEMEZ:** (a) zaten varsa · şartname yanlış çıktıysa ·
  `kasitli_bosluk` alanı beklediğin gibi değilse · iş tahminden ÇOK
  uzayacaksa → **bekletmeden** sor.
- **Bulamadığını `bulunamadı` diye yaz.**

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla

```
✅ ADIM 1 raporu gönderildi ve onaylandı
✅ değişiklik uygulandı, `py -m py_compile arac/uret_petek.py` temiz
✅ 0 bozuk bayt (0x00 / 0x08)
✅ C13 iki yönde sınandı — geçme VE ateşleme, sonuçları raporda
✅ öngörü dosyası KOŞUDAN ÖNCE yazıldı, ≥5 kalem, mazeretleri belli
✅ `git diff --stat arac/uret_petek.py` raporda
```

⚠️ **Koşuyu SEN başlatmazsın.** Bitince koordinatöre haber ver, koşuyu o
tetikler — ve koşu, NOKTA HALKA-1'in dört noktasıyla **birlikte** gidecek.

Teslim raporu sayıyla ve mesajla. Raporu **gönderdikten sonra** kapan.

---

## ⑦ OKUMA LİSTESİ — bu sırayla

```
CLAUDE.md      §2 (emilme) · §3 (değişmezler) · §7 (dosya sahipliği) · §11
MIMARI.md      §2.9 — AŞAMALAR ARASI SÖZLEŞME YOK  🔴 en önemlisi
arac/uret_petek.py   :874 · :997 · :1085 · :1218-1250 ve YORUMLARI
denetim/kosu-ongoru-MOTOR-DENIZASIRI.json   dünkü öngörünün biçimi
```
