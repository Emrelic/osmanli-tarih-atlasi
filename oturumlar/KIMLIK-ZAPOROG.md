# KİMLİK TASLAĞI — Zaporog Kazak Ordası

> # 🔴 KÜNYE TASLAĞI GEÇERSİZ — KİMLİK ZATEN VAR
>
> ```
> devletler.js:1129   id:"zaporojye" · 1552-01-01 → 1775-06-16 · Zaporojye Seçi
> renkler.py:643      "zaporojye": ("Zaporojye Kazak Hetmanlığı", "#8c92fe")
> ```
> Aşağıdaki `zaporog` künyesini ve `#4242ba` rengini **UYGULAMAYIN** —
> mükerrer kimlik açar (`YASALAR B11`). Ben de doğrulamadan yazdım:
> tek `grep`ti, koordinatörün "yok" bilgisini ölçmeden aldım. **Aynı
> hatanın üçüncü halkası** — PETEK/NOKTA "yok" dedi, koordinatör
> doğrulamadan iletti, ben doğrulamadan yazdım.
> 📌 Ders: *"filanca kimlik yok"* bir ÖLÇÜM iddiasıdır ve iletilirken
> ölçüsü de iletilmeli. Üçümüz de zincirin bir halkasıydık.
>
> ## Bu dosyada GEÇERLİ kalan üç şey
> ```
> ① TDV `ukrayna` doğrulaması — mevcut kayıtta kaynak yazılı DEĞİL;
>    altı tarihin altısı da TDV'den teyitli (§Tarihlerin kaynağı).
> ② `tabi` önerisi — mevcut kayıtta tabi: alanı YOK. Osmanlı himayesi
>    (1669-1681, Doroşenko) yazılmamış; savaslar.js'in iç/dış savaş
>    ölçütü bunu okuyor.
> ③ ZAMAN ZİNCİRİ UYARISI (§③) — üç harita hücresinin 1281-1552 ve
>    1775-1923 uçları hâlâ sahipsiz. En değerli kısım budur.
> ```
> Mevcut kaydın kronolojisi (Vyshnevetsky · Hotin 1621 · Aleşki 1711 ·
> II. Katerina 1775-06-16) benimkinden **daha iyi** — bitiş GÜNÜ var,
> bende yoktu. Birleştirilecekse taban o kayıt olmalı.


**3 Ağustos 2026 · VERİ KİMLİK 3 · Opus.** Koşu sürerken yazıldı:
`data/devletler.js` ve `arac/renkler.py` **KİLİTLİ, dokunulmadı.**
Bu dosya taslaktır — koordinatör yayından sonra tek commit'te işleyecek.

Kaynak: **TDV `ukrayna`** (sayfa açıldı, `<title>` sınandı: *"UKRAYNA -
TDV İslâm Ansiklopedisi"*). Bu bir Osmanlı komşusu ve TDV maddesi var —
yani `CLAUDE.md §4` gereği **birincil kaynak TDV'dir**, akademik değil.

---

## 🔴 ÖNCE KARAR: TEK KİMLİK Mİ, İKİ Mİ

Koordinatörün sorusu: *"Hetmanlık dönemi (1648 Hmelnitski, 1654
Pereyaslav) ayrı kimlik mi aynı mı?"*

### Önerim: **TEK KİMLİK — `zaporog`**, `tabi` alt-aralıklarıyla

Dört gerekçe, üçü bu depodan:

```
① ADI DEĞİŞMİYOR. Devletin kendi adı 1648 öncesi de sonrası da
   "Zaporog Ordası"dır (Vijsko Zaporizke). Hetmanlık, o ordunun
   yönetim biçimidir; ayrı bir gövde değil.
② DEPONUN KENDİ ÖRNEĞİ: `kirim` 1441-1783 arası TEK kayıttır ve
   Osmanlı tâbiliği `tabi:[{1475-06-06 → 1774-07-21}]` ile yazılmıştır.
   Zaporog'un durumu birebir aynı sınıf — statü değişimi, gövde değişimi
   değil. `sirbistan-prensligi` de aynı kalıpta.
③ CLAUDE.md GRANÜLERLİK KURALI: "BİR KİMLİK = haritada ayrı boyanması
   anlamlı olan bir siyasî gövde. Aynı gövdenin hanedan değişimi ayrı
   kimlik değildir." 1648 bir hanedan değişiminden bile daha az kopuş:
   aynı ordu, aynı seçilmiş hatman kurumu.
④ HARİTADA NE OKUNUR: iki kimlik verilirse 1648'de renk DEĞİŞİR ve
   kullanıcı "yeni bir devlet belirdi" diye okur. Belirmedi — statüsü
   değişti. Bu, `§3.5.1`in "hata taraf değiştirdi" dersinin renk hâli.
```

### ⚠️ Ama bir KARAR NOKTASI var ve senin olmalı

**1552-1648 penceresi boyanmalı mı?** TDV Seç'i 1552'de kuruyor ama o
tarihte Zaporog **bir sınır boyu askerî kardeşliğiydi** — toprağı akışkan,
hukuken Lehistan-Litvanya egemenliğinde. 1648'den sonra ise alaylara
(polk) bölünmüş, dış siyaset yürüten **toprak devleti**.

```
(a) f = 1552   Seç'in kuruluşu. Bozkırın fiilî sahibini gösterir,
               ama "devlet" iddiası 1648 öncesi için GENİŞ.
(b) f = 1648   Hmelnitski ayaklanması. TDV'nin kendi cümlesi:
               "Ukrayna artık bağımsız bir siyasî yapı haline geldi."
               Dar ama savunması kolay. 1552-1648 arası `lehistan`.
```
📌 **Benim önerim (a) — 1552.** Sebep: koordinatörün tarifine göre o üç
hücrenin sorunu tam olarak *"sahibi dönem dönem değişiyor"*; 1648'den
başlatırsak 1552-1648 arası yine `lehistan`a düşer ve Lehistan'ı
Donets bozkırına kadar taşımak, oturumun zaten reddettiği hatanın
(Rusya'yı yüz yıl erkene çekmek) aynası olur. Ama (b) de meşrudur ve
kararı sen ver.

---

## ① `data/devletler.js` künye taslağı — YAZILMADI, kopyala-yapıştır hazır

```javascript
{ id:"zaporog", ad:"Zaporog Kazak Ordası (Hetmanlık)", tur:"devlet", bolge:"dogu-avrupa",
  f:"1552-01-01", t:"1775-06-01", baskent:"Zaporog Seç'i → Çigirin → Baturin", harita:"zaporog",
  tabi:[{f:"1654-01-01", t:"1669-01-01", ust:"rusya"},
        {f:"1669-01-01", t:"1681-01-01", ust:"osmanli"},
        {f:"1681-01-01", t:"1775-06-01", ust:"rusya"}],
  ozet:"Dinyeper çağlayanlarının altında kurulan, seçilmiş hatmanlarca yönetilen Kazak ordası; Hmelnitski ayaklanmasıyla toprak devletine dönüştü, Lehistan-Rusya-Osmanlı arasında taraf değiştirdi ve Seç'in yıkılmasıyla son buldu (kaynak: TDV, madde: ukrayna).",
  kronoloji:[
    { t:"1552-01-01", tur:"kurulus", b:"Dinyeper çağlayanlarında Zaporog Seç'i kuruldu" },
    { t:"1648-01-01", tur:"isyan", b:"Bohdan Hmelnitski ayaklanması Lehistan'ı yendi, Ukrayna bağımsız bir siyasî yapı hâline geldi" },
    { t:"1654-01-01", tur:"antlasma", b:"Pereyaslav Antlaşması ile Moskova'nın hâkimiyetine girildi" },
    { t:"1669-01-01", tur:"ittifak", b:"Hatman Doroşenko Osmanlı himayesine girdi; 1672 Kamaniçe seferi bu ittifakla yürüdü" },
    { t:"1681-01-01", tur:"antlasma", b:"Bahçesaray Antlaşması ile Rus hâkimiyeti yeniden kuruldu" },
    { t:"1775-06-01", tur:"son", b:"Rus kuvvetleri Zaporog Seç'ini yıktı, orda tarihe karıştı (GÜN kaynakla saptanamadı — TDV 'Haziran 1775' diyor)" }
  ]
},
```

### Tarihlerin kaynağı — hepsi TDV `ukrayna`'dan

| tarih | TDV'nin sözü |
|---|---|
| 1552 | *"Seç" (established 1552)* — Dinyeper çağlayanlarındaki müstahkem yerleşim |
| 1648 | Hmelnitski *"bir Kazak ayaklanmasını büyük bir devrime dönüştürdü"* |
| 1654 | Pereyaslav — *"en önemli yanı Ukrayna'yı Moskova'nın hâkimiyetine sokmasıdır"* |
| 1669-1681 | Osmanlı himayesi Doroşenko döneminde (hatmanlığı 1665-1672); 1672 Kamaniçe seferi |
| 1681 | Bahçesaray Antlaşması ile Rus denetimi |
| Haziran 1775 | *"Haziran 1775"* — Seç'in Rus kuvvetlerince yıkılışı |

⚠️ **Uydurulmayan üç gün:** Pereyaslav'ın, Bahçesaray'ın ve Seç'in
yıkılışının GÜNÜ TDV'de yok. `YYYY-01-01` yazıldı; Seç için ay bilindiği
(*Haziran*) için `1775-06-01` yazıldı ve kronolojide işaretlendi.
Başka bir oturum gün bulursa düzeltilir.

### ⚠️ `tabi` alanında MODELİN SINIRI — bilerek basitleştirildi

1667 Andrusovo'dan sonra orda **ikiye bölündü**: sol yaka Rusya'da, sağ
yaka Lehistan'da, 1669-1681 arası sağ yaka Osmanlı himayesinde. `tabi`
alanı **devlet başına tek `ust`** tutuyor, "yarısı şuna yarısı buna"
diyemiyor. Yukarıdaki üçlü, atlasın ilgilendiği baskın diziyi verir.
📌 Bölünme haritada zaten **yerleşim yerleşim** `s:` dönemleriyle
gösterilecek — motor oradan boyar, `tabi` yalnız `savaslar.js`in
iç-savaş/dış-savaş ölçütünü besler. Yani kayıp yok, ama bu satır
`VERI-YAPISI.md`e not düşülmeyi hak ediyor.

---

## ② `arac/renkler.py` rengi — ÖLÇÜLDÜ

```python
"zaporog":  ("Zaporog Kazak Ordası", "#4242ba"),
```

### Ölçüm (bindirilmiş renk üzerinden, `renk_olc.py`nin fonksiyonlarıyla)

```
#4242ba    ton 297,0°   L* 65,2

  kirim            41,7        ← eşik 12
  rusya            41,5
  lehistan         22,2        ← en yakın engel
  nogay            63,0
  altinorda        23,8
  OSMANLI doğrudan 48,0        (Hetmanlık 1669-81 Osmanlı himayesinde,
  OSMANLI tâbi     37,9         yani sınırdaşlık gerçek — ölçüye alındı)
  ZEMİN (#e8dfc8)  41,5        ← eşik 15
```
**En dar marj 22,2** — eşiğin (12) neredeyse iki katı. Zeminden 41,5,
eşiğin (15) iki buçuk katı.

### Karışması istenmeyen iki kimlikten de uzak (koordinatörün uyarısı)
```
nogay          #f9a825   ΔE 63,0      turuncu — hiç benzemiyor
kazak-hanligi  #ad1457   ΔE 30,1      bordo   — hiç benzemiyor
```

### 🔴 Neden "sınırda geçen" değil, marjı geniş olan seçildi

`zaporog` **canlı veride yok** — `renk_olc.komsuluk()` ona sıfır komşu
döner ve aracın kendi uyarısı devreye girer: *"komşusu ölçülemeyen
kimlik … öneri yalnız altlık ve Osmanlı ikilisine dayanır."* Yani araç
bir sayı verirdi ama dayanaksız olurdu; ve renk yazıldıktan sonra da
denetim onu **ölçemez**, çünkü boyayacak noktası yok.
⇒ Ölçülemeyen kimlikte **marj, denetimin yerine geçer.** Seçim yine
`uyum() ≤ 0,05` havuzundan yapıldı (aracın *"en ayrık değil, yetinmeci"*
dersi korundu); yalnız o havuzun içinde en geniş marjlı alındı.
📌 `teodoro`da da aynısı yapıldı; bu artık bu oturumun kuralı.

**İşlendikten sonra koşulacak:** `py arac/renk_olc.py` —
taban 10 görünmez / 55 çakışma / 0 aynı-hex **artmamalı.**

---

## 🔴 ③ PETEK/NOKTA'YA UYARI — bu kimlik ÜÇ HÜCRENİN TAMAMINI KAPATMIYOR

Kimlik `1552 → 1775-06`. Atlasın penceresi `1281 → 1923`. Yani o üç
hücrede (Donets bozkırı · Don aşağısı · Harkov çevresi) **iki uçta hâlâ
sahip yok**:

```
1281 → 1552   271 yıl   ⬜ zaporog DEĞİL
1775 → 1923   148 yıl   ⬜ zaporog DEĞİL
```

Nokta eklenip yalnız `zaporog` yazılırsa **Değişmez 1 iki yeni sahipsiz
pencere görür** (`arac/denetle.py`, beklenen sayı 55'ten yukarı çıkar).
Öneri — üçü de mevcut kimlikler, yeni renk gerekmiyor:

```
1281-1502   altinorda      (devletler.js: 1242-1502)
1502-1552   kirim          Altın Orda'nın çözülmesinden Seç'e
1775-1923   rusya          Seç'in yıkılışından sonra doğrudan Rus idaresi
```
⚠️ Aradaki devir günleri **kaynakla** konmalı; yukarısı bir iskelettir,
gün değildir. Ve `§3.5.1`in her iki ucu da sorulmalı: `kirim`i 1502'de
Donets'e kadar taşımak Kırım'ı olmadığı yere götürüyor mu? Ölçen
PETEK/NOKTA olmalı — ben veriyi görmüyorum.

📌 Koordinatörün tarifi *"kimlik eksiği"* diyordu ve haklıydı — ama
eksik **bir kimlik değil, bir zaman zinciri.** `zaporog` zincirin en
uzun ve en tartışmalı halkasını kapatıyor; iki ucu hazır kimliklerle
kapanıyor ama **yazılması gerekiyor.**

---

## İŞLEME SIRASI (koordinatör için)

```
① devletler.js'e künyeyi ekle          (yukarıdaki blok, olduğu gibi)
② renkler.py'ye rengi ekle             "zaporog": ("Zaporog Kazak Ordası", "#4242ba")
③ py arac/renk_olc.py                  10 / 55 / 0 ARTMAMALI
④ PETEK/NOKTA'ya §③'ü ilet             üç hücrenin iki ucu hâlâ açık
⑤ nokta eklenince py arac/denetle.py   Değişmez 1 sahipsiz sayısı 55'te kalmalı
```
