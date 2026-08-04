# ÇAPRAZ AKDENİZ — bulgular

> **Kapsam:** Venedik + Fransa. Koordinatörün plan B'sinden okundu, **onay bekliyor**
> (`CAPRAZ-AKDENIZ-ILERLEME.md §1`). Onay gelmeden ölçüme, iki planda da başkasına
> ait olmayan kesitten başlandı.
>
> **Yetki:** yalnız bu dosya ve `-ILERLEME.md`. Veriye, `arac/`'a, kök defterlere
> yazılmadı. Öneriler koordinatör üzerinden `VERİ DEVLET` · `VERİ KİMLİK` ·
> `YAMACI`'ya gider.
>
> Girdi: `arac/girdi.py yukle()` → **976 nokta** (`yerlesimler.js` 792 +
> `yerlesimler_afrika.js` 184), 1 Ağustos 2026, üretim koşusu bitmiş hâlde.

---

## 🔴 A-1 · İYON ADALARI — 8,3 yıl hayalet Fransa, **ve altında kaybolan şey bir OSMANLI HARAÇGÜZÂRI**

Bu oturumun en önemli bulgusu ve `CLAUDE.md §3.5.1`'in ("Osmanlı fazla mı
görünüyor?") **tam tersi** sınıfı: burada fazla görünen **yabancı**, eksik
görünen **Osmanlı'nın kendi tâbi devleti.**

### ① BİZDE NE VAR — ölçüldü

Yedi noktanın yedisinde de aynı tek pencere:

```
Korfu · Kefalonya · Zaklise · İthaki · Ayamavra · Çuha Adası · Parga
   s: { f:"1797-10-17", t:"1815-11-05", d:"fransa" }     ← KESİNTİSİZ
```

18 yıl 1 ay boyunca yedi ada kesintisiz Fransız boyalı.

### ② KAYNAKTA NE VAR — TDV, birincil kaynak

`islamansiklopedisi.org.tr/yedi-ada-cumhuriyeti` (`<title>` sınandı: **CANLI**,
"YEDİ ADA CUMHURİYETİ - TDV İslâm Ansiklopedisi")

```
1797-10-17   Campo Formio — adalar Venedik'ten FRANSA'ya       ✓ bizdeki f: doğru
1799-03-05   Korfu kalesi düştü — Osmanlı-Rus donanması        ✗ bizde YOK
1800-03-21   İstanbul Konvansiyonu, 12 madde                   ✗ bizde YOK
1807-07-09   Tilsit — Rusya haklarını Fransa'ya devretti       ✗ bizde YOK
1809-1814    İngiliz fethi kademeli · 1815 Viyana              ~ bizde tek gün: 1815-11-05
1864-05-21   Yunanistan'a devir                                ✓ bizdeki t: GÜNÜ GÜNÜNE doğru
```

Ve konvansiyonun statü hükmü, TDV'nin kendi cümleleriyle:

> *"Yeni oluşum iç işlerinde serbest, dış işlerinde Osmanlı Devleti'ne bağlı
> olacak, vergi verecek ve Rusya'nın kefaleti altında bulunacaktı."*
>
> *"Her üç yılda bir olmak üzere devlete 75.000 kuruş cizye verilecekti."*

📌 İkinci kaynak, aynı yöne: TDV `ayamavra` (`<title>` sınandı: **CANLI**) —
*"Fransa 1797'de adayı işgal etti; Osmanlılar ve Ruslar 1800'de geri aldı,
Fransa 1807'de yeniden ele geçirdi."* İki ayrı TDV maddesi, **çelişmiyor.**

### ③ HÜKÜM — **ÇELİŞİYOR**, ve ölçüsü:

```
en TEMKİNLİ hesap (yedi ada için de Korfu'nun günü, 1799-03-05, kullanıldı)
   çatışan kesit          3.047 gün × 7 nokta = 21.329 gün = 58,4 yıl-nokta
   bunun haraçgüzâr olan kısmı  1800-03-21 → 1807-07-09
                          2.666 gün × 7      = 7,30 yıl × 7 nokta
```

⚠️ **Ölçüm kasten aşağı yuvarlıdır.** Korfu 5 Mart 1799'da düştü ama **öteki altı
ada 1798 sonbaharında** alındı (Preveze ve Vonitsa'nın kendi kayıtları bunu zaten
`1798-10-23` diye biliyor — yani veri **aynı seferin tarihini bir yerde doğru, altı
yerde hiç** taşıyor). Ada ada gün kaynaklandığında rakam **büyür, küçülmez.**

### 🟢 VE DÜZELTMESİ RENK İSTEMİYOR — emsali üç gün önce kondu

Yedi Ada Cumhuriyeti `data/devletler.js`'in 213 kaydında **yok** ve
`renkler.py`'de karşılığı **yok**. Normalde bu, ÇAPRAZ DOĞU'nun çarptığı duvardır:
*"renk olmadan yazılan kimlik boyanmaz."* **Burada değil** — çünkü statü
haraçgüzârlıktır ve `v:` penceresi kimlik değil **ad** taşır:

```
ölçüldü — Dubrovnik, commit ab643ff (üç gün önce):
   v: { f:"1458-01-01", t:"1806-05-27", k:"Dubrovnik Cumhuriyeti (haraçgüzâr)" }
```

⇒ **Önerim (uygulamayı `YAMACI` yapar, ben yazmıyorum):**

```
1797-10-17 → 1799-03-05   s: fransa                              (mevcut f: korunur)
1799-03-05 → 1800-03-21   ❓ AÇIK — Osmanlı-Rus askerî idaresi, konvansiyon öncesi
1800-03-21 → 1807-07-09   v: k:"Yedi Ada Cumhuriyeti (haraçgüzâr)"
1807-07-09 → 1815-11-05   s: fransa                              (mevcut t: korunur)
```

⚠️ **Ortadaki bir yılı doldurmuyorum.** TDV cumhuriyeti 1800 konvansiyonuyla
kuruyor; 1799 Mart'ı ile 1800 Mart'ı arası **müşterek işgal** dönemi ve TDV bu
kesitin idarî statüsünü bu maddede söylemiyor. `CAPRAZ-GOREV §8`: *"doğrulanamadı"
tam bir hükümdür.* Kaynaklanmadan yazılmasın.

⚠️ Ve `Parga` bu listede **ayrı incelenmeli**: anakara kasabasıdır, 1819'da Ali
Paşa'ya satılmıştır (bizdeki `1819-05-10` kaydı bunu biliyor) ve 1800
konvansiyonunda anakara Venedik yerleri adalardan **farklı** işleme tâbi tutuldu.
TDV `parga` slug'ı `CLAUDE.md §4`'te **ÖLÜ** kayıtlı — ayrı kaynak turu gerekiyor,
bu turda yapılmadı.

---

## 🔴 A-2 · `fransa` BİR TORBA — ve dizin kaydı 1792'de ölüyor

ÇAPRAZ DOĞU'nun `iran` bulgusunun Batı'daki birebir eşi.

### ① BİZDE NE VAR

```
dizin  data/devletler.js
   id:"fransa"  ad:"Fransa Krallığı"  f:"987-01-01"  t:"1792-09-21"

harita s:"fransa"   92 pencere / 91 nokta   en geç t: 1923-10-29
   dizin ölümünden SONRA açılan pencere:  85
   en uzun tekil fazlalık:  47.883 gün = 131,1 yıl
```

Kayıt **Fransa Krallığı**'dır ve 21 Eylül 1792'de (Konvansiyon, krallığın ilgası)
biter. Harita ise aynı kimliği şuralarda kullanıyor:

```
1830-1854   Cezayir       35 pencere   → Temmuz Monarşisi / II. Cumhuriyet / II. İmparatorluk
1881        Tunus         27 pencere   → III. Cumhuriyet
1884        Tacûra        1  pencere   → III. Cumhuriyet (Fransız Somalisi)
1918-1919   Suriye        11 pencere   → III. Cumhuriyet
```

📌 Yani bu **ÇAPRAZ BATI'nın B-2'siyle (Habsburg 245,6 yıl) aynı sınıf: bir
"veriyi düzelt" işi değil, TANIM işi.** Ya dizin kaydı ülke olarak yeniden
tanımlanır (987→1923+), ya rejimler ayrı kimliğe çıkar. Kararı koordinatör verir.

### 🔴 VE İNCE KİMLİKLER ZATEN VAR — KULLANIM SIFIR

BATI Macaristan'da ne bulduysa (*"dizinde 3 devlet · kullanım 0"*), Fransa'da
aynısı **ölçüldü**:

```
dizin[cezayir-fransiz]       "Fransız Cezayir İşgali"  1830-07-05 → 1923-10-29
   haritada kullanım 0   ·   renkler.py'de YOK
dizin[fransiz-misir-seferi]  "Napolyon'un Mısır Seferi" 1798-07-01 → 1801-10-02
   haritada kullanım 0   ·   renkler.py'de YOK
```

⇒ **Aynı hafta üçüncü kez: karar veriliyor, kayıt açılıyor, ama okunmuyor.**
(DENETÇİ'nin `kasitli_bosluk` vakası · BATI'nın Macaristan vakası · bu.)

### ⚠️ VE İKİ KAYNAK KENDİ İÇİNDE ÇELİŞİYOR — küçük ama gerçek

```
dizin[fransiz-misir-seferi]  t:"1801-10-02"
harita isg: fransa (7 Mısır noktası)  t:"1801-10-09"
```
**7 gün.** Aynı olayın iki kaydı, iki tarih. Hangisinin doğru olduğunu bu turda
kaynaklamadım — `CAPRAZ-GOREV §3`: çelişki **çözülmeden kaydedilir.**

### ③ HÜKÜM — **ÇELİŞİYOR** (tanım ekseninde), 85 pencere etkileniyor.

---

## 🔴 A-3 · **GERİ ÇEKİLDİ** — B-1 gerçekti; ben düzeltilmiş veriyi ölçtüm

> ⚠️ **Bu bölümün ilk hâli yanlıştı ve silinmedi, çürütüldü.** İlk hâlinde
> ÇAPRAZ BATI'nın B-1 bulgusunu (*"Ayamavra `s:venedik` 1684→1923, 126,5 yıl"*)
> **"ölçüm artefaktı"** ilan etmiştim. **Değildi.**

### NE OLDU
```
$ git show 894bb82^:data/yerlesimler.js | grep Ayamavra
   s:[{1281-01-01→1479-08-01 napoli}, {1684-08-06 → 1923-10-29 venedik}]
                                       ↑ 239 YILLIK TEK PENCERE — B-1 tam olarak buydu

894bb82   1 Ağustos 14:06   "Ayamavra tam zincir (CAPRAZ-BATI.md B-1/B-2)"
```
⇒ Benim okuduğum **altı pencereli temiz zincir, B-1'in çürütülmesi değil ÇIKTISI.**
Bulgu bildirilmiş, aynı gün uygulanmış, ben düzeltilmiş hâli ölçmüşüm.

### 🔴 ARAÇ HATASI — `git log -S` bir PICKAXE'tır
*"Değişmemiş"* hükmümü şuna dayandırmıştım:
```
git log -S'Ayamavra' -- data/yerlesimler.js   →   39f3f49, 29 Temmuz
```
`-S` **dizgenin SAYISININ** değişip değişmediğini sorar. Bir kaydın **içindeki**
dönemleri düzenlemek `"Ayamavra"` sayısını 1'de bırakır ⇒ **pickaxe'a görünmez.**
İçerik değişimi için **`-G`** gerekir:
```
git log -G'Ayamavra' -- data/yerlesimler.js
   078ad4d · 894bb82 · 39f3f49        ← ikisi 1 Ağustos'ta, ikisi de B-1'in ürünü
```

### ⇒ İKİ KURAL (`OGRENILENLER §79`)
> **① Bir iddiayı sınamak için BUGÜNKÜ veriye bakmak yetmez.** İddia bildirildiği
> andaki veriye aitti ve arada düzeltilmiş olabilir. Sınama, iddianın tarihindeki
> ağaca yapılır: `git show <commit>^:<dosya>`.
>
> **② "Bulamadım" bir ölçüm değildir — HANGİ ARAÇLA arandığı yazılmadıkça.**
> Aracın körlüğü, verinin gerçeği diye rapor edilebiliyor.

⚠️ **VE SOMUT RİSK:** *"B-1 çürüdü"* kayda geçseydi biri `894bb82`'yi geri alabilir
ve Ayamavra yeniden **239 yıllık tek pencere** olurdu. Bu satır o yüzden burada
duruyor — `KARAR-DAYANAK`'a *"B-1 tutmuyor"* **yazılmasın.**

### 🟢 GEÇERLİ KALAN TEK ŞEY — ve o da B-1'in yerine geçmiyor
`venedik`in bütün veride ölçümü ayrı bir bulgudur ve ayakta: dizin ölümünden
sonra **açılan pencere 0**, kalan 19 pencerenin hepsi `1797-10-17` (Campo Formio),
**158 gün** ⇒ meşru. Bu ölçüm **tur 2 · B-1** olarak ayrıca yazıldı ve
koordinatör bağımsız doğruladı. **Ama bu, BATI'nın B-1'inin yokluğunu değil,
DÜZELTİLDİKTEN SONRAKİ hâlin temizliğini gösteriyor.**

⇒ Ayakta kalan kural önerisi (BATI da katıldı, burada uygulanmıyor ama geneldir):
**bir pencere fazlalığı ölçülürken o kimliğin kendi penceresinin `t`'si alınır,
kaydın son penceresinin değil** — `iran` gibi çok pencereli kayıtlarda gerçek tuzak.

📌 Ve A-1 (Yedi Ada) **bu geri çekmeden etkilenmiyor**: BATI'nın kendi sözüyle,
*"zincir düzeltilmeseydi dördüncü halkanın eksikliği görünmezdi bile."* A-1
B-1'e **rağmen değil, üstüne** geliyor.

---

## 🟡 A-4 · ŞAM ve HALEP 1918'de Fransız DEĞİLDİ — Arap Krallığı haritada yok

Kesitimin Doğu Akdeniz ucu. `YAMACI` bu bölgede aktif çalışıyor, o yüzden
**paket değil, uyarı** olarak bırakıyorum.

### ① BİZDE NE VAR
```
Şam · Hama · Humus      d: OSMANLI → 1918-10-01,  sonra s:"fransa" → 1923-10-29
Halep · Antakya · Deyrizor · Rakka   →1918-10-26,  sonra s:"fransa"
Beyrut · Sayda · Trablusşam          →1918-10-06/08/13, sonra s:"fransa"
```

### ② KAYNAKTA NE VAR — TDV `suriye` (`<title>` sınandı: **CANLI**)
> *"Şam, İngiliz-Arap kuvvetleri tarafından Ekim 1918 başında işgal edildi"*
> — ve Şam'da **Faysal'ın Arap idaresi** kuruldu (Ali Rıza Paşa başkanlığında).
>
> *"İtilâf devletlerinin **Nisan 1920** San Remo Konferansı'nda Suriye'yi Fransız
> manda yönetimine vermesiyle…"*
>
> *"**Temmuz 1920**'de Beyrut-Şam arasında Han Meyselûn'da Fransızlar'ın
> Suriyeliler'i ağır bir yenilgiye uğratmasının ardından Suriye'de Faysal dönemi
> sona erdi."*

### ③ HÜKÜM — **ÇELİŞİYOR** (Şam · Hama · Humus · Halep · Deyrizor · Rakka'da),
**UYUYOR** (Beyrut · Sayda · Trablusşam — Fransız idaresi kıyıda gerçekten
Ekim 1918'de başladı).

⚠️ Ayrım keyfî değil, **ölçüye çeviriyorum:** iç şehirlerde Fransız boyası
**1918-10 → 1920-07-24** arasında ≈ **1,8 yıl × 6 nokta ≈ 10,6 yıl-nokta**
erken. Ve o boşlukta duran devlet — **Faysal'ın Suriye Arap Krallığı** —
dizinin 213 kaydında **yok.**

📌 Ve `isg:` alanı bu ayrımı taşımak için zaten var (`girdi.py`: *"d:/v:/s: →
DE JURE · isg: → DE FACTO"*). Mısır'ın 1882-1914 vakasıyla aynı desen. Şam için
doğru yapı büyük ihtimalle `d:`/`v:` **+ `isg:`** ikilisidir, tek `s:` değil —
ama bu bir **şema kararı** ve benim değil.

---

---
---

# TUR 2 — koordinatörün ① ve ② numaralı işleri

> Ölçüm commit'i: `c0bc9a8` (`ORGANIZASYON §14`). Girdi 976 nokta, dizin 242 kayıt.

## 🟢 B-1 · HAYALET VENEDİK TARAMASI — **sınıf BOŞ, ve boş olması bir bulgudur**

Koordinatörün ①. işi: *"`venedik t=1797-05-12` sonrasına taşan BÜTÜN `s:venedik`
pencerelerini say. Ayamavra'yı BATI buldu; kaçı daha var?"*

**Cevap: 19 pencere var, hepsi aynı, ve hiçbiri hayalet değil.**

```
s:"venedik"                      80 pencere / 74 nokta
  t: > 1797-05-12                19 pencere
  bu 19'un BİTİŞ tarihi          1797-10-17 ×19    ← TEK BİR GÜN, istisnasız
  f: > 1797-05-12 (ölümden sonra AÇILAN)   0
  en uzun tekil fazlalık         158 gün
```

19 nokta: Korfu · Kefalonya · İthaki · Zaklise · Ayamavra · Çuha · Parga ·
Preveze · Vonitsa · Brakya · Cres · Hvar · Korçula · Krk · Mliyet · Pag · Rab ·
Uzunada · Vis.

**HÜKÜM — UYUYOR.** Bu bir dağılım değil **tek bir olay**: Venedik Cumhuriyeti
12 Mayıs 1797'de dağıldı, mülkleri **17 Ekim 1797 Campo Formio** ile devroldu.
`CLAUDE.md §3.5` teslim gecikmesini *"aylar mertebesinde"* meşru sayıyor; bu 5,2 ay
ve **19 noktada birden aynı gün** — yani veri tutarlı, hatalı değil.

### 🔴 VE BURADA BİR TUZAK VAR — düzeltmeye kalkılırsa `Değişmez 1` kırılır

Bu 19 pencere *"dizine uysun"* diye `1797-05-12`ye çekilirse:
```
19 noktada 158 günlük SAHİPSİZ pencere açılır → sahipsiz 34 → 53
   ya da halef (fransa/avusturya) 158 gün ÖNE alınır → hayalet taraf değiştirir
```
📌 `CLAUDE.md §3.5.1`'in kendi cümlesi: *"hayalet yok olmadı, taraf değiştirdi."*
⇒ **Doğru düzeltme dizin tarafındadır**, veri tarafında değil: `venedik` kaydının
`t:`i mülklerin devrini mi (17 Ekim 1797) yoksa cumhuriyetin ilgasını mı
(12 Mayıs 1797) anlatıyor? **`§74`: bunlar aynı sorunun cevapları değil.**

---

## 🔴 B-2 · NAPOLİ — 62,7 yıl × 4 nokta, **ve aynı desen aynı gün ikinci kez**

Taramanın kesitimde bulduğu **gerçek** hayalet.

```
dizin  napoli   1282-01-01 → 1861-02-13      (Gaeta düştü, İki Sicilya bitti)
harita Brindisi · Taranto · Lecce · Otranto   s:"napoli" → 1923-10-29
       22.902 gün = 62,7 yıl × 4 nokta
```

🔴 **Ve halefi zaten veride, zaten doğru tarihle:** aynı krallığın öteki altı
noktası — **Napoli · Palermo · Messina · Sirakuza · Trapani · Pantelerya** —
`1861-02-13`'te düzgünce `s:"italya"`ya geçiyor.

⇒ **Veri aynı olayı altı noktada doğru, dört noktada hiç taşıyor.**

📌 **Bu, A-1'in birebir aynısı** — orada da Preveze/Vonitsa 1798 seferini doğru
biliyordu, öteki altı ada hiç bilmiyordu. **Aynı gün, aynı sınıf, ikinci kez:**

> **Bir olay veriye yazılırken o olayın BÜTÜN noktalarına yazılmıyor; birkaçı
> yazılıyor, gerisi eski penceresinde kalıyor. Ve üç değişmezin hiçbiri sormuyor,
> çünkü kalan pencerenin sahibi VAR — yanlış sahip.**

⚠️ Bu, *"eksik nokta"* sınıfından (`CLAUDE.md §2` emilme) **ayrıdır** ve ondan
daha sinsidir: emilme haritada delik/taşma yapar, bu **temiz ama yanlış** görünür.

---

## 🔴 B-3 · SARDUNYA — 141,1 yıl, **ve doğru kimlik elde duruyor, kullanılmamış**

Kesitimin en büyük tekil fazlalığı, A-2'den (131,1 yıl) **büyük**.

```
harita Kalyari (Cagliari) · Sasari (Sassari)
   s: 1324-01-01 → 1720-02-24  d:"ispanya"    ← dizin ispanya 1479-01-20'de başlıyor
   s: 1720-02-24 → 1923-10-29  d:"italya"     ← dizin italya  1861-03-17'de başlıyor
        155,0 yıl erken                            141,1 yıl erken
```

🟢 **1720-02-24 günü DOĞRU** — Lahey Antlaşması, Savoya Sicilya'yı verip
Sardunya'yı aldı. Yani kırılma noktası bilinen ve gün hassasiyetli; **yanlış olan
yalnız o günden sonraki kimlik.**

🟢 **Ve kimlik dizinde VAR:** `sardinya-piyemonte` → `harita:"sardinya"`,
`1720-08-02 → 1861-03-17`. **Torino zaten onu kullanıyor**, yani `renkler.py`'de
boyası var. ⇒ **Renk gerekmiyor, VERİ KİMLİK kuyruğuna girmiyor.**

⚠️ Ama iki tarih birbirini tutmuyor: dizin `sardinya-piyemonte f=1720-08-02`,
harita kırılması `1720-02-24`. **160 gün.** `§74`: Lahey'in imzası mı, Sardunya
Krallığı unvanının alınması mı? **Çözmedim, kaydettim.**

📌 1324-1479 kesiti ayrı bir kalem: o dönem ada **Aragon**'undur, birleşik
İspanya'nın değil. Dizinde Aragon kaydı **yok** — bu bir kimlik isteği.

---

## 🟡 B-4 · FİZAN — Hafsî 2,3 yıl fazla (Kuzey Afrika, artık bende)

```
dizin  hafsi 1229-01-01 → 1574-09-13
harita Murzuk (Fizan) · Gât · Sokna · Câlû · Sebha · Ubârî
       s:"hafsi" → 1577-01-01        841 gün = 2,3 yıl × 6 nokta
```
**HÜKÜM — ÇELİŞİYOR**, ama küçük ve `1577-01-01` yıl hassasiyetli bir yer
tutucu (`§76`). Kuzey Afrika turumda kaynaklanacak; **şimdi düzeltilmesini
önermiyorum** — gerçek gün bulunmadan 1574'e çekmek `§76`'nın yasakladığı şey.

## 🟡 B-5 · TOSKANA ve İTALYA'nın kendi başlangıcı — `§74` vakası, hata değil

```
toskana  dizin t=1860-03-22 · harita t=1861-03-17   360 gün × 2 (Floransa, Elba)
italya   dizin f=1861-03-17 · harita f=1861-02-13    32 gün × 6
```
İkisi de **aynı sorunun cevapları değil**: ilhak referandumu / Gaeta'nın düşüşü /
İtalya Krallığı'nın ilanı üç ayrı olay. **ÇELİŞKİ SAYMIYORUM** — ama o 32 günde
altı nokta dizine göre **hiçbir devlete ait değil**, ve bunu kaydediyorum.

---

## 🔴 B-6 · TAKVİM KURALININ İLK AKDENİZ VAKASI — TDV kendiyle 13 gün çelişiyor

`CAPRAZ-GOREV §2` bu çelişkiyi **veri gelmeden önce** haber vermişti. İlk vakası:

### ① İKİ TDV MADDESİ, İKİ TARİH
```
yedi-ada-cumhuriyeti   "21 Mart 1800"  İstanbul Konvansiyonu, 12 madde
korfu                  "8 Zilkade 1214'te (3 Nisan 1800)"  Korfu Antlaşması
                       ve adı veriyor: "Cezâyir-i Seb'a-i Müctemia Cumhuru"
```
**Fark tam 13 gün.**

### ② ÖLÇÜT UYGULANDI — `§3.1` kademeleri
- **Kademe ⓪ (aynı soruya mı cevap veriyor?):** Muhtemelen **HAYIR** — biri
  Rusya ile Bâbıâli arasındaki *konvansiyon*, öteki adalarda *ilan/akit*.
  İkisi de doğru olabilir.
- **`§2.1` ölçütü:** *"TDV tarihi GÜN-AY hicrîsiyle veriyorsa → Osmanlı belgesi
  var, DOĞRU."* `korfu` **8 Zilkade 1214** diyor; `yedi-ada-cumhuriyeti` hicrî
  gün **vermiyor.**
- **Jülyen kontrolü:** 21 Mart 1800 Jülyen + 12 gün = **2 Nisan 1800** Gregoryen.
  TDV'nin verdiği 3 Nisan'a **bir gün** kalıyor.

### ③ HÜKÜM — **`t:` ekseni için `1800-04-03`; sebep SEBEBİ BELİRSİZ kalır**

⚠️ **Jülyen DEMİYORUM.** `§2.1`'in kendi şartı: *"Ayırt edici soru: kaynak çift
tarih ya da 'eski/yeni takvim' diyor mu? Demiyorsa 'sebebi belirsiz' diye ayrı
yazılır — Jülyen denmez."* **İki madde de demiyor.** Şüphe kuvvetli (12 günlük
XIX. yy farkı bire bir oturuyor) ama **teşhis değil.**

⇒ Öneri: `t:`/`f:` **1800-04-03** (hicrî gün ile çapraz doğrulanmış) ·
`gun:` alanı **"21 Mart / 3 Nisan 1800"** ham hâliyle.
📌 Ve dizin kaydının adı uydurulmasın — Osmanlı belgesindeki adı elimizde:
**Cezâyir-i Seb'a-i Müctemia Cumhuru.**

---

## 🔴 B-7 · A-1 DARALTILDI — ve zincir **üçüncü** bir yerde daha kırık

TDV `korfu` (CANLI) A-1'i gün hassasiyetine çekti **ve yeni bir kusur çıkardı**:

```
Kasım 1798    Osmanlı-Rus kuşatması başladı
5 Mart 1799   Korfu teslim
1807-1814     "yeniden Fransa'nın kontrolüne geçen Korfu"      ← 1814, 1815 DEĞİL
1815          "İngiltere'nin himayesine girdi"
```

⇒ Bizim tek `fransa 1797-10-17 → 1815-11-05` penceremiz **üç ayrı yerde** yanlış:
```
1799-03-05 → 1800-04-03   Osmanlı-Rus askerî idaresi   → bizde fransa (YANLIŞ)
1800-04-03 → 1807-07-09   OSMANLI HARAÇGÜZÂRI          → bizde fransa (YANLIŞ)
1807-07-09 → 1814         Fransa                       → bizde fransa (DOĞRU)
1814       → 1815-11-05   İngiltere                    → bizde fransa (YANLIŞ)
```
⚠️ Üçüncüsü **A-1'in ilk hâlinde yoktu** — ilk turda `1815-11-05`i doğru
saymıştım. `1815-11-05` **Paris Antlaşması**dır (Birleşik İyon Devletleri'nin
kuruluşu) ve **hukukî** tarihtir; Korfu'nun **fiilen** İngiliz eline geçişi
1814'tür. `§74`: iki ayrı soru — ama bizim `s:` eksenimiz **fiilî** hâkimiyeti
sorduğu için (`§3.1 ⓪`: *"o gün orayı FİİLEN kim yönetiyordu"*) burada
**fiilî tarih gerekiyor.** Günü TDV vermiyor; **kaynaklanmadan yazılmasın.**

📌 **Hükmümü ayırıyorum:** A-1'in **58,4 yıl-nokta** ölçümü `1799→1807` kesiti
içindi ve **geçerli**, hattâ temkinli. 1814-1815 ucu **ayrı bir kalemdir**,
ölçülmedi, ve tek başına ≈1,5 yıl × 7 nokta daha ekleyebilir.

---

---
---

# TUR 3 — Girit · Kıbrıs · anakara Venedik yerleri

> Ölçüm commit'i: `995e608`. Onaylı sıra: ada ada 1798 → Kıbrıs → Girit.

## 🔴 C-1 · GİRİT 1669'DA OSMANLI OLMADI — üç Venedik kalesi haritada **hiç yok**

`§3.5.1`'in **tam vakası**: *"Osmanlı, olmadığı yerde ve olmadığı tarihte
boyanıyor mu?"* — Girit'te cevap **evet**.

### ① BİZDE NE VAR
```
Girit kutusunda (lat 34.7-35.8 · lon 23.4-26.4) TOPLAM 5 nokta:
   Hanya · Girit (Resmo) · Kandiye · Sitiye · İsfakiye
Kandiye · Sitiye · İsfakiye:  s:venedik → 1669-09-27, sonra d:OSMANLI
⇒ 27 Eylül 1669'dan itibaren ada BÜTÜNÜYLE Osmanlı boyalı.
```

### ② KAYNAKTA NE VAR — TDV `girit` (`<title>` sınandı: **CANLI**)
> *"Bu anlaşma ile Venedikliler'in elinde kalmış olan **Spinalonga ile Suda**
> kaleleri daha sonra **1127 (1715)** yılında Venedik'e karşı açılan Mora seferi
> sırasında fethedildi."*
>
> *"**Granbosa** Kalesi ise **1692** yılında ele geçirilmişti."*

```
Suda        ✗ kayıt YOK        Spinalonga  ✗ kayıt YOK
Granbosa    ✗ kayıt YOK        (yedi ad denendi, hiçbiri tutmadı)
```

### ③ HÜKÜM — **ÇELİŞİYOR**, ve sınıfı `CLAUDE.md §2` (noktası olmayan bölge)
```
Suda + Spinalonga   1669-09-27 → 1715-09-07   16.780 gün = 45,9 yıl × 2
Granbosa            1669-09-27 → 1692          8.131 gün = 22,3 yıl × 1
                                        toplam ≈ 114,2 yıl-nokta
```
⚠️ Ama bu **"veriyi düzelt" işi değil, NOKTA EKLEME işi** — üç kale veride
yokken petek onları en yakın komşuya emiyor ve Osmanlı boyuyor. `§2`: *"Bir
'harita yanlış' raporu geldiğinde ilk sorulacak soru budur: o bölgede yerleşim
noktası var mı?"* **Cevap hayır.**

🟢 **VE EMSAL VERİDE HAZIR:** `1715-09-07` bu projede zaten kullanılıyor —
Ayamavra ve Çuha Adası'nın Mora seferi tarihi **birebir aynı gün.** Yani üç
kalenin bitiş tarihi uydurulmayacak, **var olan emsalden gelecek.**

⚠️ `Granbosa 1692` **yıl hassasiyetli** — `§76` gereği gün uydurulmasın,
`1692-01-01` yer tutucu olarak yazılsın.

📌 Nokta ekleme `data/yerlesimler_ek.js`'in işidir, benim değil (`§5`). Öneri
olarak veriyorum; koordinatör dağıtır.

---

## 🟡 C-2 · RESMO — TDV ile 2 gün, ve **`§3.1 ②` burada karar veriyor**

```
bizde              Girit (Resmo)  s:venedik → 1646-11-13
TDV `girit` (genel)               "Resmo 1055/1645'te alındı"      ← YIL bile farklı
TDV `resmo` (özel)  "6 Şevval 1056'da (15 Kasım 1646) emanla teslim alınmıştır"
```
**`§3.1` kademe ②: ÖZEL > GENEL** ⇒ `resmo` maddesi esas, `girit`in 1645'i
düşüyor. Ve `§2.1` ölçütü de aynı yöne bakıyor: `resmo` **gün-ay hicrîsi**
taşıyor (**6 Şevval 1056**) ⇒ Osmanlı belgesi var.

### HÜKÜM — **ÇELİŞİYOR**, 2 gün. `t:` `1646-11-15` olmalı.
⚠️ Küçük ama bu bir *"aynı sorunun iki cevabı"* vakasıdır (`§74` değil): ikisi de
**teslim gününü** söylüyor, biri yanlış. 40 günlük kuşatmanın sonu tek gündür.

## 🟢 C-3 · KANDİYE — 21 gün fark, ama **çelişki DEĞİL** (`§74`)

```
bizde        s:venedik → 1669-09-27
TDV `girit`  "9 Rebîülâhir 1080'de (6 Eylül 1669) imzalanan on sekiz maddelik
              bir teslim anlaşmasıyla sona erdi"
```
**21 gün.** Ama `§74`'ü uyguluyorum: *"bunlar aynı sorunun cevapları mı?"*
**Hayır** — biri **anlaşmanın imzası** (6 Eylül), öteki **kalenin fiilen
devri/tahliyesi** (27 Eylül). Bizim `s:` eksenimiz `§3.1 ⓪`'a göre *"o gün orayı
FİİLEN kim yönetiyordu"* diye soruyor ⇒ **27 Eylül yerinde duruyor.**

⇒ **Veriye dokunulmasın.** Ama kronoloji maddesi **6 Eylül**'ü de taşımalı —
21 günlük bu aralık `Değişmez 2`'nin ±30 gün penceresine sığıyor, yani bugün
görünmüyor ve **bir maddeyle iki tarih birden kaydedilebilir.**

---

## 🔴 C-4 · PARGA — **doğru tarih, yanlış soru**; ve desen ÜÇÜNCÜ kez

A-1'de *"Parga ayrı incelenmeli, TDV `parga` slug'ı ölü"* diye **açık
bırakmıştım.** Cevap `yedi-ada-cumhuriyeti` maddesinden geldi.

### ② KAYNAKTA NE VAR
> *"**Parga, Preveze, Voniça ve Butrinto**, Osmanlı egemenliğinde kalacak, halkı
> anlaşmanın imzalanmasından itibaren iki yıl vergiden muaf tutulacaktı."*

⚠️ Ve TDV belirsizliği de söylüyor: bu dört yer cumhuriyetin sınırlarına
*"şeklen de olsa"* dâhil edilmiş, ihtilaf **1819 anlaşmasına** kadar sürmüş.

### ① BİZDE NE VAR
```
Preveze · Vonitsa   1798-10-23 → d:OSMANLI      ✓ DOĞRU (TDV'yle uyuyor)
Parga               1797-10-17 → 1815-11-05 s:fransa
                    1815-11-05 → 1819-05-10 s:ingiltere
                    1819-05-10 → d:OSMANLI     ← 1819 var ama SEBEBİ başka
```

### ③ HÜKÜM — **ÇELİŞİYOR**, ve kusur ilginç:
Parga'nın `1819-05-10`'u **doğru bir tarih** — ama o, **ihtilafın çözüldüğü**
gündür, **egemenliğin başladığı** gün değil. TDV'ye göre Osmanlı egemenliği
**1800 konvansiyonuyla** başlıyor. `§74`: iki ayrı soru, veri ikincisini
birincinin yerine koymuş.

🔴 **VE BU, BUGÜN ÜÇÜNCÜ KEZ AYNI DESEN:**
```
A-1  1798 seferi   Preveze/Vonitsa DOĞRU  ·  yedi ada HİÇ
B-2  1861 ilhakı   Napoli/Palermo… DOĞRU  ·  Brindisi/Taranto/Lecce/Otranto HİÇ
C-4  1800 konv.    Preveze/Vonitsa DOĞRU  ·  Parga HİÇ
```
> **Bir olay veriye yazılırken o olayın bütün noktalarına yazılmıyor.** Ve üç
> değişmezin hiçbiri göremiyor, çünkü kalan pencerenin **sahibi var — yanlış sahip.**

📌 Üçünde de *"doğru yazılmış nokta"* aynı kaydın komşusu. Yani hata bilgi
eksikliğinden değil, **uygulamanın kapsamının ölçülmemesinden** doğuyor.

## 🟡 C-5 · BUTRİNTO — konvansiyonun saydığı dört yerden biri, haritada yok
`Butrinto` · `Butrint` · `Bûtrinto` — üç yazım denendi, **kayıt yok.** C-1 ile
aynı sınıf (eksik nokta). Kaynaklanması gereken ayrı bir kalem.

---

## 🟢 C-6 · KIBRIS — **UYUYOR**, bulgu yok

```
Lefkoşa  1489-02-26 → 1570-09-09    Girne   1489-02-26 → 1570-09-17
Magosa   1489-02-26 → 1571-08-01    Baf · Limasol → 1570-07-23
Tuzla    → 1570-09-09               (öncesi altısında da s:lusignan)
```
Altı noktanın altısı da **gün hassasiyetli**, Lusignan → Venedik → Osmanlı
zinciri eksiksiz, ve `1489-02-26` (Caterina Cornaro'nun tahttan çekilişi) altı
kayıtta **tutarlı.**

⚠️ **Ölçümün sınırı:** bu bir **kayıt düzeyinde** doğrulamadır — zincirin
tutarlılığını ve tarihlerin bilinen fetih günleriyle uyumunu ölçtüm; **madde
madde TDV turu yapmadım.** ÇAPRAZ BATI da aynı kesitte *"tarihler tutuyor ama
derinlemesine sınamadım"* demişti. ⇒ **İki bağımsız yüzeysel sınama aynı sonucu
verdi**; bu bir kanıt değil, ama Kıbrıs'ı öncelik sırasının **altına** taşımak
için yeter.

---

---
---

# TUR 4 — Adriyatik: ÇAPRAZ BATI'nın devrettiği kayıtlar

> Ölçüm commit'i: `63ff8b9`. BATI sekiz kayıt devretti (*"kusur `KESİN`, ardıl
> kaynak istiyor, adres sende"*). **Ardılları kaynaklandım ve listeyi genişlettim.**

## 🔴 D-1 · SEKİZ DEĞİL **ON** KAYIT — ikisini BATI'nın listesi kaçırmış

Deseni kendi ölçümümle taradım: `s:avusturya` penceresi `1918-11-11`den **sonra**
devam eden bütün noktalar.

```
1918-11-11'de DOĞRU kırılan avusturya noktası:  43
kırılmayan Dalmaçya adası:                      10   ← BATI sekiz saymıştı

  Krk (Veglia) · Cres (Cherso) · Rab (Arbe) · Brakya (Brač) · Hvar (Lesina)
  Korçula (Kurzola) · Vis (Lissa) · Mliyet (Mljet)          ← BATI'nın sekizi
  Pag (Pago) · Uzunada (Dugi Otok)                          ← + BENİM İKİM
```
Onunun da kaydı **birebir aynı**: iki dönem, `s:venedik 1281→1797-10-17` +
`s:avusturya 1797-10-17→1923-10-29`. **Pag ve Uzunada aynı kusuru taşıyor.**

📌 Bu, D-1'in kendisinden çok **§80 deseninin** teyidi: bir olay noktalarının
hepsine değil birkaçına yazılıyor — ve şimdi **bulgunun kendisi** de aynı şekilde
eksik çıktı. BATI'nın yöntemi doğruydu, kapsamı dar kaldı.

⇒ **Fazlalık: 1.813 gün × 10 nokta = 49,6 yıl-nokta hayalet Avusturya.**

## 🟢 D-2 · ARDIL KAYNAKLANDI — ve ikiye ayrılıyor

Rapallo Antlaşması, **12 Kasım 1920**. `CLAUDE.md §4`: Avrupa'nın iç tarihi için
standart akademik referans yeterli; iki kaynak okundu.

> *"Italy received Zara, the islands of **Cherso, Lussino, Lagosta and Pelagosa**."*
> *"the other islands and Dalmatia remained in the new kingdom of Yugoslavia."*

| nokta | ardıl | güç (`§73`) |
|---|---|---|
| Krk · Rab · Pag · Uzunada · Brakya · Hvar · Korçula · Vis · Mliyet | **yugoslavya** | **KESİN** |
| **Cres (Cherso)** | **italya** | **DESEN** — bir kaynak adıyla sayıyor, öteki "İstria" formülüyle örtük kapsıyor |

⚠️ **Cres'i `KESİN` yazmıyorum.** Britannica 403 döndü, elimde bir bölgesel
tarih sitesi + bir genel özet var ve **genel özet Cherso'yu adıyla saymıyor** —
yalnız Lastovo/Palagruža/Zadar diyor. İki kaynak **çelişmiyor** ama biri ötekini
kapsamıyor. `§73`: yama yalnız `KESİN`e dayanır ⇒ **Cres için ek kaynak gerekiyor.**

### 🟢 VE TARİH SORUSU: 1918-11-11 mi, 1920-11-12 mi?
Veride **emsal tek tip ve altı kayıtta aynı**:
```
Zagreb · Ljubljana · Ösek · Varadin · Baç · Dubrovnik
    s:yugoslavya  1918-11-11 → 1923-10-29
```
⇒ Ev kuralı **1918-11-11**, ve `§3.1 ⓪` (*"o gün orayı FİİLEN kim yönetiyordu"*)
bunu destekliyor: Avusturya-Macaristan o gün dağıldı. Rapallo **1920-11-12**
sınırı *tanıyan* antlaşmadır, kuran değil — `§74`: ayrı sorular.
⇒ **Dokuz ada için `1918-11-11 → yugoslavya`**, emsale birebir uyar, **yeni renk
gerekmez** (`yugoslavya` zaten boyalı).

⚠️ Cres için aynı tarih **de facto** doğrudur (İtalyan işgali Kasım 1918'de
başladı) ama **de jure** 1920-11-12'dir. Şema bu ayrımı taşıyor (`isg:`). Karar
koordinatörün; ben iki tarihi de veriyorum, **birini ötekinin yerine koymuyorum.**

---

## 🟡 D-3 · MLİYET — BATI'nın şüphesi güçlendi ama **KANITLANMADI**

BATI: *"Mljet 1345'ten itibaren Ragusa Cumhuriyeti'nin adasıydı, Venedik'in
değil; TDV `dubrovnik` hiç değinmiyor, hükmüm `DOĞRULANAMADI`."*

### ① BİZDE
```
Mliyet (Mljet)   s:venedik 1281-01-01 → 1797-10-17   (452 yıl tek pencere)
```
### ② BULABİLDİĞİM
Mljet'i Ragusa'nın **1345**'te aldığı, Benedikten keşişlerin o yıl idareden
çekildiği, **1410**'da tam denetimin kurulduğu; ve Venedik'in Dalmaçya
iddialarından **1358 Zadar Antlaşması** ile çekildiği.

### ③ HÜKÜM — **ZAYIF** (`§73`), yama dayanağı DEĞİL
⚠️ **Kaynaklarım Vikipedi türevi ve turizm siteleri.** `CLAUDE.md §4`: *"Vikipedi
hiçbir zaman tek dayanak değildir."* Bulduğum şey deseni **güçlendiriyor** ama
452 yıllık bir kimlik değişikliği için gereken kanıt bu değil.

🔴 **AMA SONUCU BÜYÜK, O YÜZDEN ADINI KOYUYORUM:** Mljet Ragusa'nınsa,
**Dubrovnik'in kendi kaydını izlemesi gerekir** — ve o kayıt bizde şöyle:
```
Dubrovnik  v: 1458-01-01 → 1806-05-27  k:"Dubrovnik Cumhuriyeti (haraçgüzâr)"
```
⇒ Mljet de **1458-1806 arası Osmanlı haraçgüzârı** olurdu. Yani bu doğrulanırsa
**A-1 ile aynı sınıfta ikinci vaka**: `§3.5.1`'in tersi — fazla görünen yabancı,
**eksik olan bizim kendi tâbimiz**, bu sefer **348 yıl.**

⇒ **Ne gerekiyor:** Ragusa arşiv tarihyazımı ya da `dubrovnik` dışında bir TDV
maddesi. **Bu turda bulamadım ve tahmin etmiyorum.**
📌 BATI'nın ikinci uyarısı da burada geçerli: Mljet'in **1918 ardılı** ile
**1281-1797 kimliği** iki ayrı sorudur; D-2 birincisini çözdü, D-3 ikincisi.

---

---
---

# TUR 5 — kendi açtığım borcu kapatıyorum (B-7'nin ucu) + C-4 düzeltildi

> Ölçüm commit'i: `e63a750`.
> ⚠️ Koordinatörün 1. sıra işi (**sekiz Dalmaçya adası**) mesajlar çakışırken
> **zaten teslim edilmişti** — `TUR 4 · D-1/D-2/D-3`, commit `e63a750`. Sekiz
> değil **on** çıktı, ardıl kaynaklandı, `Cres` ötekilerden ayrıldı.

## 🔴 E-1 · PARGA "EKSİK" DEĞİLMİŞ — ÇAPRAZ BATI'nın ölçütü C-4'ü düzeltiyor

C-4'te *"Parga 1800'de Osmanlı egemenliğinde olmalıydı, bizde 1819'a kadar
fransa/ingiltere ⇒ ÇELİŞİYOR"* demiştim. **Teşhis eksikti.**

BATI'nın bugün koordinatörle kurduğu ölçüt (`OGRENILENLER §78`):
> **Pencere BOYUNCA hükümranlık kimdeydi?** Osmanlı hükümranlığı hukuken sürüyor
> + başkası fiilen tutuyor ⇒ **`isg:`**. Hükümranlık hukuken devrettiyse ⇒ `s:`.
> ⚠️ Soru **başlangıçta** sorulur, bitişte değil.

Parga'ya uygulandığında **iki kayıt da doğru çıkıyor, çelişmiyorlar:**
```
1800 konvansiyonu   "Parga… Osmanlı egemenliğinde kalacak"   → de jure  → d:
1800-1819           fiilen Rus/Fransız/İngiliz denetiminde   → de facto → isg:
1819-05-10          İngiltere Ali Paşa'ya devretti           → fiilî devir
```

⇒ **Hükmümü değiştiriyorum: `ÇELİŞİYOR` değil, `EKSİK KATMAN`.** Veri yanlış
bir tarih taşımıyor; **taşıyamadığı bir ayrımı tek alana sıkıştırmış.**

### Önerim (BATI'nın taslağı, ölçütü kendim sınadım)
```
d:   1800-04-03 → 1819-05-10                    Osmanlı de jure
isg: 1800-04-03 → 1815-11-05  d="fransa"        fiilî denetim
isg: 1815-11-05 → 1819-05-10  d="ingiltere"     fiilî denetim
d:   1819-05-10 → 1913-03-06                    (mevcut, DEĞİŞMİYOR)
```
🟢 `isg:` motor tarafından **okunmuyor** ⇒ petek geometrisi değişmez, **üretim
koşusu gerekmez, yeni renk yok.** Emsal: Mısır 1798-1801, Bosna 1878-1908.
🟢 BATI'nın bant uyarısı sınandı: mevcut 72 `isg:` kaydının hepsi **1771 sonrası**;
Parga **1800**, bant içinde ⇒ genişletme sorunu yok.
⚠️ Başlangıcı `1800-03-21` değil **`1800-04-03`** yazdım — `B-6`'daki takvim
hükmüm (hicrî gün taşıyan taraf esas) burada da geçerli, tutarlı olmak zorundayım.

📌 **Ve C-4'ün ASIL değeri bu düzeltmeden sonra da duruyor:** Preveze/Vonitsa
aynı maddede geçiyor ve onlar `d:OSMANLI` taşıyor, Parga taşımıyor. **§80 deseni
ayakta** — değişen, eksiğin `s:` mi `isg:` mi olduğu.

---

## 🔴 E-2 · B-7'NİN UCU ÖLÇÜLDÜ — **3,7 kat büyük**, ve pencere kendi süresinin ancak dörtte birinde doğru

B-7'de *"1814-1815 ucu ölçülmedi, tek başına ≈1,5 yıl × 7 ekleyebilir"* diye
**kendi borcumu açık bırakmıştım.** Kapatıyorum — ve tahminim yanlıştı.

### ② KAYNAKTA NE VAR
İngiliz fethi **tek bir tarih değil**, üç dalga:
```
Ekim 1809      Zaklise · Kefalonya · İthaki · Çuha Adası (Zante·Cephalonia·Ithaca·Cerigo)
Nisan 1810     Ayamavra (Santa Maura kuşatması, Mart-Nisan 1810)
Haziran 1814   Korfu (Napolyon'un tahttan çekilmesinden sonra garnizon teslim)
```
> *"In 1809 the British drove the French out of what before 1797 had been
> Venetian territory and annexed the islands in 1814."*

### ③ HÜKÜM — **ÇELİŞİYOR**, güç: **DESEN** (`§73`)
⚠️ **`KESİN` demiyorum:** üç kaynak birbiriyle tutarlı ama **gün vermiyorlar**,
ve hiçbiri TDV/akademik birincil değil. `§76`: gün uydurmuyorum, **ay
hassasiyetli** yazılmalı (`1809-10-01` · `1810-04-01` · `1814-06-01` yer tutucu).

### ÖLÇÜ — ve rakam ilk tahminimi çürütüyor
```
üçüncü kırılma tek başına     11.470 gün = 31,4 yıl-nokta   (6 nokta)
ilk turda "hepsi 1814" sansaydım        = 8,6 yıl-nokta
                              ⇒ 3,7 KAT BÜYÜK
```

### 🔴 VE ASIL SAYI BU — tek pencerenin anatomisi
`fransa 1797-10-17 → 1815-11-05` = **6.592 gün / 18,05 yıl.** Bunun ne kadarı
gerçekten Fransız? (en temkinli hesapla — birinci çıkış için Korfu'nun günü)
```
                        GERÇEKTEN fransız        YANLIŞ
Zaklise·Kefalonya·      1.319 gün (3,61 yıl)     5.273 gün (14,44 yıl)
İthaki·Çuha  ×4
Ayamavra                1.501 gün (4,11 yıl)     5.091 gün (13,94 yıl)
Korfu                   3.023 gün (8,28 yıl)     3.569 gün ( 9,77 yıl)
─────────────────────────────────────────────────────────────────────
6 nokta                 9.800 gün = 26,8 y-n     29.752 gün = 81,5 y-n
```
> ⇒ **Pencere kendi süresinin yalnız %24,8'inde doğru. %75,2'si yanlış.**

📌 **Ve bu, `§3.5`'in "hayalet devlet" sınıfından farklı bir şey söylüyor:** kayıt
hayalet bir devlet boyamıyor — Fransa 1797-1815 arasında **gerçekten vardı.**
Kusur, **bir pencerenin varlığında değil, tekliğinde.** Üç sahip değişimi tek
pencereye sıkıştırılmış ve `Değişmez 2` bunu göremiyor çünkü **kırılma yok ki
maddesi aransın.**

⇒ **Sınıfın adı önerim: "yutulmuş kırılma".** Hayalet devlet *var olmayanı*
boyar; yutulmuş kırılma *var olanı* boyar ama **değişimi yok eder.** İkisi de üç
değişmezin kör noktasında, ama farklı sebeple.

⚠️ **A-1'in 58,4 yıl-nokta rakamı hâlâ geçerli ve ayrı** — o `1799→1807`
kesitiydi. E-2 `1809/1810/1814→1815` kesitini ölçüyor. **Toplanmazlar, üst üste
binmezler; ikisi aynı pencerenin iki ayrı yarası.**

---

---
---

# TUR 6 — Girit'in sorusu bütün Venedik kesitine

> Ölçüm commit'i: `8c083c7`. Koordinatörün 1. sıra işi: *"tarihler doğru ama
> EKSİK KALE var mı?"* — Kıbrıs'a soruldu, **ve kesitin tamamına.**

## Yöntem — ve iki adımlı olması şart

C-1'i bulduran soru *"tarih doğru mu"* değil *"nokta var mı"*ydı. Bunu 34 bilinen
Venedik mülküne uyguladım, **sonra her eksiğin peteğini kimin yuttuğunu ölçtüm**
(`§2`: noktası olmayan bölge en yakın peteğe emilir).

⚠️ **İkinci adım şart:** eksik nokta tek başına hüküm değil. Peteği yutan nokta
**doğru sahibi taşıyorsa** renk kazara doğru çıkar; **yanlış taşıyorsa** hata
görünür hâle gelir. İkisi ayrı sınıf ve ayrı öncelik.

---

## 🔴 F-1 · GİRİT'İN ÜÇ KALESİ — C-1 **mekanizmayla** doğrulandı

```
Suda        → Hanya            7 km    yutanın sahibi: 1700=OSMANLI · 1790=OSMANLI
Spinalonga  → Sitiye (Sitia)  34 km                    1700=OSMANLI · 1790=OSMANLI
Granbosa    → Hanya           41 km                    1700=OSMANLI · 1790=OSMANLI
```
⇒ Üç kale de **Venedik oldukları dönemde Osmanlı boyalı.** C-1'in 114,2
yıl-noktası artık yalnız *"kayıt yok"*a değil, **emilme yönünün ölçümüne**
dayanıyor. `§3.5.1`'in tam vakası.

---

## 🔴 F-2 · VENEDİK ARNAVUTLUĞU — bütün kıyıda **SIFIR nokta**, ve emilme TERS

Kesitimin bu turda çıkan en büyük boşluğu. Kotor Körfezi ve Karadağ kıyısı —
370 yıllık Osmanlı-Venedik sınırı — **veride hiç yok.**

```
Kotor (Cattaro)  → Cetinje  12 km   yutan: 1500=OSMANLI 1600=OSMANLI 1700/1790=karadag
Budva            → Cetinje  13 km   yutan: 1500=OSMANLI 1600=OSMANLI 1700/1790=karadag
Herceg Novi      → Cetinje  32 km   yutan: 1500=OSMANLI 1600=OSMANLI 1700/1790=karadag
Bar (Antivari)   → İşkodra  34 km   yutan: dört kesitte de OSMANLI
Ülgün (Ulcinj)   → İşkodra  30 km   yutan: dört kesitte de OSMANLI
```

🔴 **Ve emilme F-1'in TERSİ yönde:** Girit'te Venedik kalesi Osmanlı boyanıyordu;
burada **Venedik'in kendi merkezi** (Kotor, Venedik Arnavutluğu'nun başkenti)
önce Osmanlı sonra **Karadağ** boyanıyor. Kıyı, **iç bölgedeki dağ noktalarından**
boyanıyor.

⚠️ **Ve bu, DENETÇİ'nin Cetinje tartışmasına doğrudan değiyor.** `girdi.py`'de
kayıtlı: *"Kuşatılmışlık ovadan geliyor; dağ yönetilmiyordu"* — Cetinje'nin
`kasitli_bosluk` istisnası oradan çıkmıştı. **Ama Cetinje bugün 12 km ötedeki
Kotor'u da yutuyor**, ve Kotor bir dağ köyü değil **Venedik'in tahkimli liman
başkenti.** ⇒ Cetinje'nin peteği yalnız *"boş bırakılmalı mı"* sorusunu değil,
*"neyi yutuyor"* sorusunu da doğuruyor.

### HÜKÜM — boşluğun yapısı **KESİN**, tarihî düzeltme **kaynak istiyor**
```
KESİN   beş mülkün beşinde de kayıt YOK · yutan nokta ve sahibi ÖLÇÜLDÜ
ZAYIF   "Kotor 1420-1797 Venedik'ti" — bu turda KAYNAKLANMADI, genel bilgi
```
⚠️ Venedik Arnavutluğu'nun tarihlerini (1420 kazanım · 1571 Bar/Ülgün kaybı ·
1687 Herceg Novi) **bu turda kaynaklamadım** ve rakam vermiyorum. `§73`: yama
yalnız `KESİN`e dayanır. **Kaynaklanması gereken ayrı bir paket.**

---

## 🟡 F-3 · DALMAÇYA ANAKARASI — **doğru renk, uydurma sınır**

Beş büyük Venedik şehri eksik; ama emilme onları **doğru** renge taşıyor:
```
Zadar (Zara) → Uzunada 19 km      Split → Brakya 26 km
Nin          → Uzunada 27 km      Trogir → Brakya 38 km
Şibenik      → Uzunada 75 km   ← en uzak
yutanların hepsi: 1500·1600·1700·1790 = venedik
```
⇒ **Renk kazara doğru.** Ama bir şey doğru değil:

🔴 **Venedik-Osmanlı KARA SINIRI Dalmaçya'da veriden gelmiyor.** Anakarada tek
Venedik noktası yok; sınır, bir **ada** ile içerideki bir **Osmanlı** noktası
(Mostar vb.) arasındaki orta çizgi olarak çıkıyor. Yani sınırın yeri bir ölçüm
değil, **geometrik artık.**

📌 Ve bu bölge bu projede zaten suçlu: `CLAUDE.md §2` *"Brač, Hvar, Korčula
1483'ten itibaren Osmanlı oldu (Mostar'dan)"* diye kayıtlı. **Aynı boşluk, ters
yönde tekrar ediyor.**

⚠️ Önceliği F-2'nin altında: renk yanlış değil, **sınır belirsiz.** Ama Şibenik'in
75 km'si `MIMARI.md §5` nokta yoğunluğu ölçütünün altında kalıyor olabilir —
o ölçüt benim değil, **MOTOR'a soru olarak bırakıyorum.**

---

## 🔴 F-4 · PAKSOS — **Yedi Ada'nın üyesi, kaydı yok; ve A-1'in kendi listesi eksikti**

```
Paksos (Paxos)  → Parga 22 km   yutan: dört kesitte de venedik
```
Renk kazara doğru. **Ama bulgu bu değil:**

🔴 **A-1'de *"yedi nokta"* demiştim ve o yedi, Yedi Ada değildi.** Listem şuydu:
Korfu · Kefalonya · Zaklise · İthaki · Ayamavra · Çuha · **Parga**.
1800 konvansiyonunun yedi adası ise: Korfu · **Paksos** · Ayamavra · Kefalonya ·
İthaki · Zaklise · Çuha.

⇒ **Parga bir ada değil, anakara kasabası** (ve C-4/E-1'de zaten ayrı işlendi);
**Paksos gerçek üye ve veride hiç yok.**

📌 **Nokta başına ölçümlerim geçerli** (58,4 ve 31,4 yıl-nokta, her nokta tek tek
hesaplandı) — **yanlış olan kümenin bileşimiydi.** Paksos eklenirse rakam
büyür, Parga'nın payı `isg:` tarafına geçer.

⚠️ Ve bu, kendi `§80` desenimin bana üçüncü kez dönmesi: **"olayın bütün üyeleri
sayıldı mı?"** sorusunu bulguyu yazarken kendime sormamışım.

## 🟡 F-5 · BUTRİNTO ve MONEMVASİA
```
Butrinto            → Korfu    16 km   yutan: venedik (C-5 doğrulandı)
Monemvasia (Menekşe)→ Çuha Ad. 50 km   yutan: venedik — DÖRT kesitte de
```
⚠️ Monemvasia Osmanlı dönemlerinde de **venedik** boyanıyor (yutan nokta hiç
Osmanlı olmuyor). Tarihleri bu turda kaynaklamadım ⇒ **`ZAYIF`, ayrı kalem.**

---

## 🟢 F-6 · KIBRIS — sorusu soruldu, **cevap BOŞ**, ve bu tam bir hüküm

Koordinatörün 1. sıra işi. Kıbrıs kutusunda **6 nokta**, altısı da kayıtlı;
**eksik Venedik kalesi çıkmadı.**

⇒ Ve sebebi yapısal: **Girit'in deseni Kıbrıs'ta olamaz.** Girit'te boşluk,
Venedik'in 1669'dan sonra **elde tuttuğu** kalelerden doğuyordu; Kıbrıs
1570-71'de **bütünüyle** düştü, elde kalan kale yok.

⇒ **C-6 (Kıbrıs UYUYOR) ikinci ve bağımsız bir sınamadan geçti**: birincisi
tarih ekseninde, bu ikincisi nokta ekseninde. **Kıbrıs kapanabilir.**

---

## ⚠️ F-7 · VE KENDİ ARAMAMDA HATA — bu sefer ters yönde

Koordinatörün bugünkü tuzağı *"`ad:"X"` tam eşleşme **çok dar**"*tı. Ben alt
dizge kullandım ve **çok geniş** oldu — tarama **dört sahte eşleşme** üretti:
```
"Herceg Novi"  → "Çernovitz (Çernivtsi)"   ("Novi" alt dizgesi)
"Bar (Antivari)" → "Bar (Podolya)"          (başka bir Bar)
"Zadar (Zara)" → "Hazârasp"                 ("zara" alt dizgesi)
"Lefke"        → "Lefke (Osmaneli)"         (Anadolu'da, Kıbrıs'ta değil)
```
Dördü de **"VAR" diye raporlanmıştı** ve gerçekte **YOK**. Koordinat kontrolüyle
yakalandılar.

> ⇒ **Tam eşleşme çok dar, çıplak alt dizge çok geniş — ikisi de yanlış cevap
> veriyor, ters yönlerde.** Doğrusu: **alt dizge + koordinat doğrulaması.**

📌 Bugünkü beşinci araç hatası, ve ilk dördüyle aynı biçimde geldi: *"aradım,
buldum/bulamadım."* Kendi cümlemi tekrar ediyorum çünkü bana da geçerli:
**ölçüm aracı, ölçtüğü veriden daha az denetleniyor.**

---

---
---

# TUR 7 — A-4 paketlendi (Suriye/Lübnan 1918-1920)

> Ölçüm commit'i: `252325e`. Koordinatörün önerisi ①.
> ⚠️ Üretim koşuyor, `data/`ya yazılmadı — zaten yazmıyorum.

## 🔴 G-1 · ÖNCE EV KURALINI ÖLÇTÜM — ve **ilk önerimi çürüttü**

A-4'ü ilk yazdığımda *"doğru yapı `d:` + `isg:` ikilisidir, tek `s:` değil"*
demiştim ve gerekçem `girdi.py`'nin Mısır yorumuydu. **Önce emsali aradım.**

```
1914-1918 kayıplarında veri NE YAPIYOR:
  Bağdat   d:OSM→1917-03-11  ·  s:ingiltere 1917-03-11→1923-10-29
  Kudüs    d:OSM→1917-12-09  ·  s:ingiltere 1917-12-09→1923-10-29
  Musul    d:OSM→1918-11-08  ·  s:ingiltere 1918-11-08→1923-10-29
  Cidde    d:OSM→1916-06-16  ·  s:hicaz     1916-06-16→1923-10-29
  ⇒ 1918-1923 arası açılan pencerelerin dağılımı: [s] 88 · [isg] 0
```
**Ev kuralı tek tip ve istisnasız:** 1914-1923 bandında `s:` = **fiilî askerî
denetim**, hukukî hükümranlık değil. Osmanlı hükümranlığı Lozan'a (1923-07-24)
kadar hukuken sürüyor ama veri bunu **hiçbir yerde** `isg:` ile göstermiyor.

🟢 **Ve Mısır bu kuralın istisnası değil, KANITI:** orada `isg:` kullanılmış
çünkü **Osmanlı idaresi yerinde kalmıştı** (`v:` Kavalalı hanedanı 1914'e kadar
sürüyor). 1918 Suriye/Irak/Filistin'de Osmanlı idaresi **kaldırıldı.**
⇒ `§78` ölçütü (*"pencere boyunca hükümranlık kimdeydi"*) burada `s:` diyor.

⇒ **İlk önerimi geri alıyorum.** Suriye'yi 1923'e kadar Osmanlı yapmak **72
kayıtlık tek tip bir kuralı tek kesit için bozmak** olurdu. `§5`: şema kararı
benim değil — ama şema kararı **gerekmediğini** ölçebilirim, ve gerekmiyor.

## 🔴 G-2 · ASIL HATA DAHA DAR VE DAHA NET: **işgalci yanlış**

Ev kuralı doğru; yanlış olan **kimin yazıldığı.**

### ① BİZDE
```
Şam · Hama · Humus         d:OSM→1918-10-01  ·  s:fransa 1918-10-01→1923-10-29
Halep · Deyrizor · Rakka   d:OSM→1918-10-26  ·  s:fransa 1918-10-26→1923-10-29
Beyrut · Sayda · Trablusşam · Antakya        ·  s:fransa 1918-10-06/08/13/26→
```
### ② KAYNAKTA
TDV `suriye` (CANLI): *"Şam, **İngiliz-Arap kuvvetleri** tarafından Ekim 1918
başında işgal edildi"* — ve Şam'da **Faysal'ın Arap idaresi** kuruldu.
> *"İtilâf devletlerinin **Nisan 1920** San Remo Konferansı'nda Suriye'yi Fransız
> manda yönetimine vermesiyle…"* · *"**Temmuz 1920**'de … Han Meyselûn'da …
> Faysal dönemi sona erdi."*

TDV `faysal-i` (CANLI): Arap Krallığı **8 Mart 1920**'de ilan edildi; Fransızlar
*"**14 Temmuz 1920**'de Şam'ı işgal edip Faysal'ı tahttan uzaklaştırdı."*

### ③ HÜKÜM
```
🔴 ÇELİŞİYOR  Şam · Hama · Humus · Halep · Deyrizor · Rakka   (iç şehirler)
🟢 UYUYOR     Beyrut · Sayda · Trablusşam · Antakya           (kıyı, Fransız idaresi
                                                               gerçekten Ekim 1918)
```
⚠️ Ayrım keyfî değil: kıyı **OETA West** (Fransız), iç şehirler **OETA East**
(Faysal'ın Arap idaresi). Veri ikisini **tek renge** indirmiş.

### ÖLÇÜ
```
Şam · Hama · Humus         1918-10-01 → 1920-07-14   652 gün × 3
Halep · Deyrizor · Rakka   1918-10-26 → 1920-07-14   627 gün × 3
                                      toplam 3.837 gün = 10,5 yıl-nokta
```

## ⚠️ G-3 · TDV KENDİYLE YİNE ÇELİŞİYOR — temmuz 1920'nin günü

```
suriye     "Temmuz 1920'de … Meyselûn'da …"      → GÜN YOK
faysal-i   "14 Temmuz 1920'de Şam'ı işgal edip"  → GÜN VAR
```
`§3.1 ②` **ÖZEL > GENEL**: konusu **o yer** olan madde kazanır ⇒ `suriye`.
Ama `suriye` **gün vermiyor.**

⚠️ Ve `§74`: temmuz 1920'de **birden çok olay** var (ültimatom · muharebe ·
şehre giriş) ve TDV'nin verdiği `14 Temmuz`un **hangisi** olduğu maddeden
çıkmıyor. **Bunlar aynı sorunun cevapları olmayabilir.**

⇒ **Önerim `§4⑤` gereği:** `t:`/`f:` **`1920-07`** (ay hassasiyetli — kaynağın
verdiği hassasiyet), `gun:` alanına **"14 Temmuz 1920 (TDV `faysal-i`)"**.
**Gün uydurmuyorum ve tek maddeye dayanarak güne çıkmıyorum.**
📌 KAYNAK oturumuna: *"Meyselûn muharebesinin ve Fransızların Şam'a girişinin
günü ayrı ayrı"* — bu bir kalem.

## 🟡 G-4 · KİMLİK — ve bu **benim kararım değil**, ama maliyeti ölçtüm

Ev kuralı `s:` + işgalci istiyor ⇒ Faysal'ın idaresi için bir kimlik gerekiyor.
Dizinde **yok.** İki yol var:

```
(a) mevcut `hicaz`            renk GEREKMİYOR · zaten kullanılıyor ve KOMŞU:
                              Medine · Tebük · MAAN  s:hicaz 1918-1923
                              Faysal, Şerif Hüseyin'in oğlu; OETA East onun adına
                              ⚠️ ama Suriye Arap Krallığı (8 Mart 1920) AYRI devlet
(b) yeni `suriye-arap-kralligi`  tarihen daha sıkı · RENK gerekiyor
                                 ⇒ VERİ KİMLİK kuyruğu (bugün 10 kalem tıkalı)
```

⇒ **Tarihen (b) doğru, ucuz olan (a).** `§5` gereği hüküm vermiyorum; ama şunu
ölçtüm: **(a) seçilirse 8 Mart 1920 - 14 Temmuz 1920 arası dört ay yanlış
kimlikle boyanır** (Hicaz değil, Suriye Arap Krallığı). Yani (a) hatayı
**10,5 yıl-noktadan ~1,1 yıl-noktaya indirir, sıfırlamaz.**

📌 Bu, kesitimde **rengin gerçekten gerektiği ilk paket.** Önceki altı `KESİN`
bulgunun beşi renksiz çözülüyordu; bu çözülmüyor.

⚠️ Yeni ÖLÜ slug (`CLAUDE.md §4` listesine): **`sam`** — arama sayfasına
düşüyor, `<title>` *"Arama - TDV İslâm Ansiklopedisi"*.
⚠️ Yeni CANLI slug: `faysal-i`.

---

---
---

# TUR 8 — F-2 kaynaklaması: bir TDV hatası ve görünmeyen bir Osmanlı sancağı

> Ölçüm commit'i: `005eb20`. Onaylı iş: Venedik Arnavutluğu tarihlerini
> kaynaklamak. **Kesit beklediğimden başka bir yere açıldı.**

## 🔴 H-1 · TDV `dalmacya` KENDİ İÇİNDE YANLIŞ — ve **bizim verimiz doğru**

### ② KAYNAKTA NE VAR — verbatim
> *"Dalmaçya'daki Venedik hâkimiyeti **1737**'ye kadar sürdü. Bu tarihte Venedik
> **Campo Formio Antlaşması**'yla Avusturya'ya bırakılınca Dalmaçya da onların
> idaresi altına girdi."*

### ③ HÜKÜM — **TDV YANLIŞ**, ve bu bir yorum değil, cümlenin kendi içinde çözülüyor

**Campo Formio 17 Ekim 1797'dir.** Bir antlaşma adı özel isimdir ve tarihi
sabittir; cümle *"1737'de Campo Formio"* diyerek **kendini yalanlıyor.** Ve aynı
madde başka yerde tutarlı:
```
"1699 Karlofça ve ardından 1718 Pasarofça … Osmanlılar'ın Dalmaçya'daki
 hâkimiyetlerinin sonu oldu"
⇒ Venedik hâkimiyetinin 1718'den SONRA da sürdüğü aynı maddede yazılı;
  1737'de biten hiçbir şey yok, o yıl bir antlaşma yılı bile değil.
```

🟢 **VE BİZİM VERİMİZ DOĞRU:** on Dalmaçya adasının onunda da
`s:venedik → 1797-10-17` yazıyor — Campo Formio'nun **gerçek günü.**

⇒ **`CLAUDE.md §4` *"çelişirse TDV esastır"* diyor; burada esas alınamaz**, çünkü
çelişki bizimle değil **TDV'nin kendisiyle.** `§3.1`'in kademeleri de bunu
çözüyor: kademe ① **BELGE > ÖZET** — *"Campo Formio"* tarihli ve failli bir
kayıttır, *"1737'ye kadar sürdü"* genel bir dönem cümlesidir.

📌 Bu, bugün bulduğum **üçüncü TDV-içi çelişki** (B-6 takvim · G-3 temmuz 1920 ·
bu). Ama öncekilerden farkı: **ötekiler çözülemiyordu, bu çözülüyor.** Fark,
çelişkinin bir **özel isme** çarpması — antlaşma adı tarihi kilitliyor.
⚠️ **60 yıllık bir hata** ve `dalmacya` maddesine dayanan herhangi bir oturum
Dalmaçya'yı 1737'de Avusturya'ya verirdi.

## 🔴 H-2 · KLİS SANCAĞI — bir Osmanlı sancağı haritada **görünmüyor**

F-3'te *"Dalmaçya'da sınır veriden gelmiyor, geometrik artık"* demiştim.
TDV bunu **çok daha ileri** götürdü.

### ② KAYNAKTA
> *"1527-1528'deki akınlarda, bazı kaleler alındığı gibi **1537'de Klis
> Kalesi'nin fethinden sonra Dalmaçya sınırında YENİ BİR SANCAK tesis edildi.**"*
>
> *"1538'de … Venedikliler, Osmanlı hâkimiyeti altındaki **Ostrovica
> (Sivrihisar), Obrovac ve Scardona** kasabalarını almışlar…"*
>
> *"1540'taki Osmanlı-Venedik antlaşması ile Venedikliler Dalmaçya'daki **Nadin
> ve Urana** kalelerini Osmanlılar'a bırakmışlardı."*

### ① BİZDE — ölçüldü
```
Klis · Knin · Sinj · Skradin (Scardona) · Vrana (Urana) · Nadin ·
Ostrovica · Obrovac        ✗ HİÇBİRİ YOK

Dalmaçya iç kesimi (lat 43.3-44.6 · lon 15.3-17.5) TOPLAM 3 nokta:
   Brakya (Brač)   ← ADA, iç kesimde değil
   Livno (İhlevne) · Yayça (Jajce)   ← Bosna içleri
```

### ③ HÜKÜM — **ÇELİŞİYOR**, ve F-3'ten daha ağır bir sınıf

F-3 *"sınırın yeri belirsiz"* diyordu. Gerçek şu: **1537'de kurulmuş bir Osmanlı
sancağının tek bir noktası yok.** Yani eksik olan Venedik tarafı değil —
**Osmanlı tarafı.**

🔴 Ve `§3.5.1`'in sorusu burada **ters cevap veriyor.** O bölüm *"Osmanlı fazla
mı görünüyor?"* diye soruyor; Dalmaçya'da Osmanlı **eksik görünüyor**: sancağın
toprağı, veride komşu olan **adalara** (Brač 26-38 km) emiliyor ve **Venedik**
boyanıyor.
```
Sinj    → en yakın Livno 33 km      Knin  → en yakın Livno 69 km
Skradin → en yakın Uzunada 74 km (ADA)   Vrana → en yakın Uzunada 39 km (ADA)
```
⇒ **F-3'ün "renk kazara doğru" hükmü YALNIZ KIYI İÇİN geçerliydi.** İç kesimde
renk kazara doğru değil, **kazara yanlış** — Osmanlı sancağı Venedik boyanıyor.

📌 Ve `CLAUDE.md §2`'nin kayıtlı vakası bunun aynısıydı ters yönde: *"Brač, Hvar,
Korčula 1483'ten itibaren Osmanlı oldu (Mostar'dan)."* O zaman ada Osmanlı
olmuştu; **bugün anakara Venedik oluyor.** Aynı boşluk, ondört yıl arayla iki
yönde de patlamış.

⇒ **NOKTA EKLEME'ye:** Klis öncelikli — hem sancak merkezi hem `1537` gün
aranabilir bir fetih. Ötekiler (Knin · Sinj · Skradin · Vrana · Nadin ·
Ostrovica · Obrovac) TDV'de **adıyla geçiyor**, yani kaynak zemini var.

## 🟡 H-3 · F-2 KISMEN KAYNAKLANDI — beşte bir

TDV `karadag` (CANLI) **tarihleri vermiyor** — yalnız *"Sahil kasabaları Katolik
olarak kalırken iç bölgelerde Ortodoks kilisesi üstünlük sağladı"* ve Venedik
gücü için tarihsiz bir cümle. Kotor · Budva · Bar · Ülgün için **TDV'de dayanak
bulamadım.**

🟢 **Ama `dalmacya` bir tanesini verdi:**
> *"1684'te Venedikliler Dalmaçya cephesinde pek çok kaleyi zaptettiler ve son
> olarak da **1686'da Castelnuovo'yu** aldılar."*

**Castelnuovo = Herceg Novi.** ⇒ Venedik'e geçişi **1686** (TDV).
⚠️ **Yıl hassasiyetli** (`§4⑤`) ve yaygın olarak 1687 de veriliyor — **günü
uydurmuyorum**, `1686` TDV'nin verdiği hâliyle kaydedilsin, KAYNAK'a *"Castelnuovo
1686 mı 1687 mi"* kalemi düşülsün.

### F-2'nin durumu — dürüst tablo
```
Herceg Novi   Venedik'e 1686        🟢 TDV `dalmacya`, yıl hassasiyetli
Kotor · Budva · Bar · Ülgün         🔴 TDV'de DAYANAK YOK — açık
```
⇒ **Beş noktanın biri kaynaklandı.** Kalan dördü için TDV yetmiyor; `§3`'e göre
bunlar **temas olguları** ve karşı taraf (Venedik arşivi / Karadağ tarihyazımı)
gerekiyor. **Tahmin etmiyorum.**

## 🟢 H-4 · VE İKİ TEYİT — veri TDV ile tutuyor

```
TDV  "1479'daki Osmanlı-Venedik barışı ile Akçahisar (Kruya) ve İŞKODRA'nın
      teslimi karşılığında Dalmaçya'dan ele geçirilen yerler Venedik'e iade edildi"
bizde İşkodra   s:venedik 1281-01-01 → 1479-01-25        ✓ UYUYOR
      Akçahisar s:arnavutluk → 1478-06-15                ✓ UYUYOR (kuşatma 1478)
```
📌 Bunu yazıyorum çünkü **tur boyunca üç hata buldum ve teyitler de kayda geçmeli**
— yoksa rapor yalnız kusur listesi olur ve verinin sağlam olduğu yerler görünmez.

⚠️ **F-7 yine tetiklendi:** `Klis` araması `Zaklise (Zakynthos)`'u getirdi
(alt dizge). Koordinat kontrolüyle elendi — kural çalışıyor.

---

## Sıradaki (aksi söylenmezse)

1. **Ada ada gün kaynaklama** — 1798 sonbaharı Osmanlı-Rus seferi: Çuha · Zaklise ·
   Kefalonya · İthaki · Ayamavra'nın Fransızlardan çıkış günleri. A-1'in rakamını
   temkinliden gerçeğe çeker.
2. **Kıbrıs 1489-1571 ve Girit 1645-1669** — Venedik arşivi tarih bakımından gün
   gün kesindir (`CAPRAZ-GOREV §7`, kullanıcının kendi sorusu). Bizde Magosa
   `1571-08-01` (ay hassasiyetli görünüyor), Kandiye `1669-09-27`.
3. **1536 kapitülasyonu** — kesitimin adını veren olay; `fransa` kaydının
   `ozet:`inde geçiyor ama kronolojide karşılığı ölçülmedi.

---
---

# TUR 9 — üç gün sonra: paketlerin âkıbeti + taban 976 → 1713

> Ölçüm HEAD'i: `e9b61dd` (4 Ağustos 05:12). Oturum 4 Ağustos'ta yeniden açıldı.
> ⚠️ **Girdi tabanı benim bütün önceki turlarımdan BÜYÜK:** 976 → **1713 nokta**
> (Avrupa 228 ve Asya 344 merge edildi; `yerlesimler_kirim` · `_seyrek` ·
> `_ek7-9` eklendi). Dizin 242 → **302 kayıt.**
> ⇒ **Önceki turların rakamları o günkü tabanın fotoğrafıdır**; aşağıdaki her
> sayı yeniden ölçüldü.

## 🟢 J-0 · BEKLEYEN PAKETLERİN ÂKIBETİ — ölçüldü, tahmin edilmedi

| paket | 1 Ağustos'ta | **bugün** |
|---|---|---|
| **B-2** Napoli 62,7 yıl-nokta | 4 nokta `s:napoli`→1923 | 🟢 **UYGULANMIŞ** — dördü de `1861-02-13 → italya`; `napoli` hayalet taraması **temiz** |
| **B-3a** Sardunya 141,1 yıl | `italya` 1720'den | 🟢 **UYGULANMIŞ** — `sardinya 1720-02-24 → 1861-03-17` |
| **D-1/D-2a** dokuz ada | `avusturya`→1923 | 🟢 **UYGULANMIŞ** — dokuzu da `1918-11-11 → yugoslavya` |
| **D-2b** Cres | ardıl `DESEN` | 🟡 **KASTEN BEKLETİLMİŞ** — hâlâ `avusturya → 1923-10-29`. **Doğru hamle:** kaynak `KESİN` değildi |
| **H-2** Klis sancağı, 8 kale | hiçbiri yok | 🟡 **BEŞİ EKLENMİŞ** — Klis · Knin · Sin (Sinj) · Vrana (Urana) · Nadin. **Skradin · Ostrovica · Obrovac hâlâ yok** |
| **F-3** Dalmaçya anakarası | 5 şehir yok | 🟢 **ÜÇÜ EKLENMİŞ** — Zadar · Split · Şibenik. **Trogir · Nin yok** |
| **F-2** Venedik Arnavutluğu | 5 mülk yok | 🟡 **İKİSİ EKLENMİŞ** — Kotor (`venedik 1420-01-01`) · Herseknovi (`venedik 1687-09-30`). **Budva · Bar (Antivari) · Ülgün hâlâ yok** |
| **C-1/F-1** Girit'in üç kalesi | yok | 🔴 **HÂLÂ YOK** — Girit kutusunda yine **5 nokta** |
| **F-4** Paksos | yok | 🔴 **HÂLÂ YOK** — İyon kutusunda 10 nokta, Paksos yok |
| **C-5/F-5** Butrinto · Monemvasia | yok | 🔴 **HÂLÂ YOK** |
| **A-1/B-7/E-2** İyon penceresi | tek `fransa` 1797→1815 | 🔴 **DEĞİŞMEMİŞ** — yedi noktada da tek pencere (58,4 + 31,4 yıl-nokta) |
| **E-1** Parga `isg:` katmanı | öneri | 🔴 **UYGULANMAMIŞ** — `s:fransa` / `s:ingiltere` / `d:1819-05-10` aynen |
| **G-2** Suriye iç şehirleri | 10,5 yıl-nokta | 🔴 **DEĞİŞMEMİŞ** — Şam·Hama·Humus `1918-10-01`, Halep·Deyrizor·Rakka·Antakya `1918-10-26`, hepsi `s:fransa` |

🟢 **Zincir uçları genişlemiş** (benim paketim değil, kesitimi ilgilendiriyor):
İyon adaları artık `1815-11-05 → 1864-05-21 ingiltere` ve `1864-05-21 →
yunanistan` taşıyor. **A-1'in `t:` ucu veriye girmiş.** Ortadaki üç kırılma
(1799 · 1800 · 1809/1810/1814) hâlâ yok ⇒ **pencere hâlâ yutulmuş kırılma
taşıyor**, yalnız sonu doğrulanmış hâlde.

⚠️ **Herseknovi `1687-09-30` seçilmiş.** H-3'te TDV `dalmacya`'nın **1686**
dediğini, yaygın olarak 1687 de verildiğini yazıp *"KAYNAK'a kalem düşülsün"*
demiştim. Karar 1687'den yana verilmiş; **gerekçesini bu turda görmedim** —
kaynaklandıysa kalem kapanmıştır, kaynaklanmadıysa açık.

---

## 🔴 J-1 · `yugoslavya` 25 PENCEREDE **20 GÜN ERKEN** — ve boşlukta bir devlet var

Kendi D-2 teslimimin bugünkü tabanda geri dönmesi.

### ① BİZDE NE VAR — ölçüldü
```
dizin  id:"yugoslavya"  "Sırp-Hırvat-Sloven Krallığı (SHS)"  f:"1918-12-01"
harita s:"yugoslavya"   25 pencere / 25 nokta
       25'inin de f:    1918-11-11        ← İSTİSNASIZ TEK GÜN
       fark 20 gün × 25 = 500 gün = 1,4 yıl-nokta
```
📌 Dizin **kendi içinde tutarlı**: `sirbistan` kaydı da `t:"1918-12-01"` ve
kronolojisinde *"Sırp-Hırvat-Sloven Krallığı'nın kuruluşuyla birleşti"* diyor.
⇒ Sırbistan tarafı 1 Aralık'ta düzgün devrediyor; **20 günlük fark yalnız
Habsburg tarafındaki 25 noktada.** O tarihi **D-2'de ben önerdim** (ev kuralı:
Zagreb · Ljubljana · Ösek · Varadin · Baç emsali).

### ③ HÜKÜM — **`§74` vakası**; ölçüm **KESİN**, teşhis **kaynak istiyor**
```
1918-11-11  Avusturya-Macaristan'ın dağılması / mütareke   → FİİLÎ boşalma
1918-12-01  SHS Krallığı'nın ilanı                         → HUKUKÎ kuruluş
```
`§3.1 ⓪` haritanın sorusunu *"o gün orayı FİİLEN kim yönetiyordu"* diye
tanımlıyor ⇒ **11 Kasım savunulabilir.** Ama o zaman **boyanan devlet henüz
kurulmamıştır** ve bu `§3.5`'in hayalet tanımına birebir uyar: 20 gün × 25 nokta.

⚠️ **Ve boşlukta gerçekten bir devlet var:** 29 Ekim 1918'de ilan edilen
**Slovenler-Hırvatlar-Sırplar Devleti** (Država SHS). Dizinin 302 kaydında
karşılığı **yok**; `sloven` araması yalnız `yugoslavya` ve `sirbistan`
maddelerinin **metnine** düşüyor, kayda değil.
📌 Bu cümlenin kaynağı **genel bilgi, bu turda kaynaklanmadı** (`§73`: `ZAYIF`).
Ölçüm KESİN, tarih hükmü değil.

⇒ **Üç yol, hüküm vermiyorum** (`§5`):
```
(a) dizin f: → 1918-11-11   "SHS" adı 1 Aralık'ta doğduğu için AD yanlış olur
(b) harita f: → 1918-12-01  25 noktada 20 günlük SAHİPSİZ pencere açar
(c) yeni kimlik             tarihen doğru · RENK ister · 20 gün için
```
📌 **(b) tam olarak B-1'in tuzağı.** Kendi ölçütümü kendi teslimime
uyguluyorum: **veri tarafı değil, dizin tarafı sorgulanmalı.**
⚠️ Rakam küçük diye kapatılabilir sanılmasın: aynı 20 gün Habsburg ardılı
**bütün** noktalarda tekrar edecek ve yeni merge'lerde emsal olarak kopyalanır.

---

## 🔴 J-2 · SARDUNYA'NIN İKİNCİ YARISI AÇIK — **ve kimlik artık ELDE**

B-3'ün uygulanmayan yarısı; bugün **maliyeti sıfıra inmiş.**

### ① BİZDE NE VAR — ölçüldü
```
Kalyari (Cagliari) · Sasari (Sassari)
   s: 1281-01-01 → 1324-01-01  ceneviz
   s: 1324-01-01 → 1720-02-24  ispanya    ← dizin ispanya f:"1479-01-20"
   s: 1720-02-24 → 1861-03-17  sardinya   🟢 (B-3'ün birinci yarısı, uygulandı)
fazlalık  56.632 gün × 2 nokta = 310,1 yıl-nokta ERKEN
```

### 🟢 ② ARADIĞIM KİMLİK DİZİNE GİRMİŞ — kendi ağzıyla Sardunya diyor
```
dizin  id:"aragon"  "Aragon Tacı"  f:"1164-01-01"  t:"1479-01-20"  harita:"aragon"
       özet: "…Akdeniz'de (Sicilya, Napoli, SARDİNYA) geniş bir deniz
              imparatorluğu kuran taç; Katolik Kralların evliliğiyle Kastilya
              ile birleşti"
renkler.py  "aragon": ("Aragon Krallığı", "#c639b1")     ← RENK VAR
haritada    11 pencere zaten kullanıyor · hayalet taraması TEMİZ
```
B-3'te *"dizinde Aragon kaydı yok — bu bir kimlik isteği"* demiştim. **İstek
karşılanmış.**

### ③ HÜKÜM — **ÇELİŞİYOR**, güç **KESİN**; düzeltme **yeni tarih istemiyor**
```
1324-01-01 → 1479-01-20   s:"aragon"    ← dizin aragon'un KENDİ t:'si
1479-01-20 → 1720-02-24   s:"ispanya"   ← dizin ispanya'nın KENDİ f:'si
```
🟢 **Ne yeni renk, ne yeni kaynak, ne uydurma gün:** kırılma günü evin kendi
dizininde yazılı (Katolik Kralların birleşmesi, `1479-01-20`) ve iki kimlik de
boyalı. ⇒ **310,1 yıl-noktanın tamamı kapanır.**

⚠️ **Dokunmadığım iki uç:**
- `1324-01-01` **yıl hassasiyetli yer tutucu** (`§76`). Aragon'un Sardunya
  seferi 1323'te başladı, Cagliari daha sonra düştü. **Günü aramadım; mevcut
  gün korunarak yalnız kimlik değişsin.**
- `1281-1324 ceneviz` kesitini **sınamadım.** Pisa/Cenova rekabeti ayrı kalem.

---

## 🟢 J-3 · B-1 YENİ TABANDA TEKRAR ÖLÇÜLDÜ — sınıf hâlâ boş, **ve büyüdü**

```
s:"venedik"                     100 pencere / 89 nokta   (önce 80/74)
  dizin t:1797-05-12'yi aşan     29 pencere              (önce 19)
  bu 29'un fazlalığı             158 gün × 29, TEK DEĞER  ← istisnasız
  dizin f:'inden önce açılan      0
```
🟢 **On yeni nokta merge edilmiş ve onu da aynı güne hizalanmış.** Bu B-1'i
yalnız tekrarlamıyor, **hizanın tesadüf olmadığını** gösteriyor: veri büyürken
`1797-10-17` (Campo Formio) tek istisnasız değer olarak kaldı.

⚠️ **Tuzak da büyüdü:** bu 29 pencere *"dizine uysun"* diye `1797-05-12`ye
çekilirse **29 noktada 158 günlük sahipsiz pencere** açılır (önce 19 idi).
⇒ Doğru soru hâlâ dizin tarafında: `venedik t:` cumhuriyetin ilgasını mı
(12 Mayıs 1797), mülklerin devrini mi (17 Ekim 1797) anlatıyor? (`§74`)

📌 **J-1 ile J-3 aynı sorunun iki yüzü:** birinde harita dizinden 20 gün
**önde**, ötekinde 158 gün **geride** — ve ikisinde de doğru cevap *"veriyi
dizine çek"* değil. **Dizin kaydındaki tarih bir olay değil, bir SORUNUN
cevabıdır.**

---

## 🟡 J-4 · İTALYA'NIN 32 GÜNÜ — B-5 altı noktaydı, **bugün on altı**

```
dizin  italya f:"1861-03-17"   ·   harita s:italya f:"1861-02-13"   16 pencere
       32 gün × 16 = 512 gün = 1,4 yıl-nokta
```
B-5'te bunu *"`§74`, çelişki değil"* diye kaydetmiştim (Gaeta'nın düşüşü /
Krallığın ilanı iki ayrı olay) ve **hükmüm değişmiyor.** Ama sayı 6'dan 16'ya
çıktı: **B-2 paketi uygulanırken `1861-02-13` dört noktaya daha yazıldı.**

📌 Ders — eleştiri değil, mekanizma: **bir paket uygulanırken taşıdığı `§74`
belirsizliği de kopyalanıyor.** Bulguyu yazarken *"bu gün dizine göre 32 gün
sahipsiz"* uyarısını pakete iliştirmemişim.
⇒ **Öneri:** bir pakette dizinle uyuşmayan gün varsa, paket o farkı **taşıyıcı
not** olarak yanında götürsün; yoksa fark uygulama sayısınca çoğalır.

---

## ⚠️ J-5 · KENDİ ARACIMDA YİNE İKİ HATA — ikisi de kendi yazdığım kuraldan

**① `Rab` → Trabzon, `Şam` → Şamahı.** İlk koşuda koordinat doğrulaması
koymadım; `"Rab"` alt dizgesi **Tra-b-zon**'a, `"Şam"` **Şam-ahı**'ya çarptı ve
çıktı *"Rab: d:1461-08-15 OSMANLI"* dedi — yani bir Dalmaçya adası Trabzon'un
fetih tarihini taşıyor göründü.
> **F-7'nin birebir tekrarı — ve F-7'yi yazan benim.** Kuralı bilmek uygulamak
> değilmiş; ikinci koşuda koordinat kutusu eklendi, ikisi de elendi.

**② Dizin eşlemesini `id` üzerinden kurdum; oysa harita `harita:` alanını
okuyor.** İlk taramam `sardinya` · `ceneviz` · `aragon` · `arnavutluk` için
**"DİZİNDE YOK"** dedi. Dördü de dizinde **var**, yalnız `id`leri farklı
(`sardinya-piyemonte` → `harita:"sardinya"`).
> ⚠️ Bu hatanın yönü tehlikeli: *"dizinde karşılığı yok"* **bir bulgu gibi
> görünür** ve kimlik talebine dönüşür. **Sahte bir kimlik isteği üretecekti.**

📌 Ortak sınıfları `§79②`: ***"bulamadım" bir ölçüm değildir — HANGİ ARAÇLA
arandığı yazılmadıkça.*** Bu turda araç iki kez yanlış yerde aradı ve
**ikisinde de çıktı makul görünüyordu.**

---

## 🟡 J-6 · KESİTİM DIŞI — ölçüldü, dokunulmadı, sahibine

```
sardinya   Nice 1388-09-28 → 1860-06-14   121.203 gün = 331,8 yıl ERKEN
           ⇒ `sardinya` bir TORBA: Savoya Kontluğu (1388) + Sardinya-Piyemonte
             Krallığı (1720). A-2 (`fransa`) ve BATI'nın Habsburg'uyla aynı sınıf.
avusturya  Ljubljana 1335-05-02 · Trieste 1382-09-30   335,2 yıl ERKEN   (BATI)
           Suçava · Çernovitz 1775-05-07 → 1923-10-29                    (KUZEY)
sirbistan  26 pencere 1918-12-01'i aşıyor = 127,6 yıl-nokta
karadag    2 pencere 1918-11-26'yı aşıyor = 9,8 yıl-nokta
fransa     157 pencere GEÇ — A-2'nin bugünkü hâli                        (DOĞU)
```

⚠️ **Ve bütün oturumları ilgilendiren bir sınıf ölçtüm:**
**haritada kullanılan 272 `s:` kimliğinin 47'sinin dizinde karşılığı YOK**
(`afsar` 128 pencere · `kacar` 123 · `cin-cumhuriyeti` 85 · `bengal-sultanligi`
22 · `turkmen` 8 …). Bu kimlikler için **hayalet taraması yapısal olarak
koşturulamaz** — ömür bilinmiyor, kıyas edilecek `f`/`t` yok.
📌 `afsar` ve `kacar` Tur 2'de *"0 kayıt"* diye ölçülmüştü; bugün 128 ve 123
pencere. **Veri tarafı yapılmış, dizin tarafı yapılmamış** — ve `§3.5`'in
denetimi tam olarak dizin tarafına bakıyor.

---

## Sıradaki (aksi söylenmezse)

1. **J-2 paketi** — Sardunya/Aragon: gerekçe ve tarihler hazır, ek kaynak
   istemiyor; uygulaması `YAMACI`'nın.
2. **Ada ada gün kaynaklama** (A-1/E-2'nin borcu) — 1798 sonbaharı ve
   1809/1810/1814 çıkışları; TDV veremiyor, Rus donanma tarihyazımı gerekiyor.
3. **1536 kapitülasyonu** — kesitimin adını veren olay, kronolojide ölçülmedi.
