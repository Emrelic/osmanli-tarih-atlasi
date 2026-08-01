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

## 🟢 A-3 · ÇAPRAZ BATI'nın B-1'i (Venedik 126,5 yıl) — **SINANDI, TUTMADI**

BATI bunu *"projenin en büyüğü, `CLAUDE.md` tablosundaki en büyük vakadan %50 daha
büyük"* diye raporladı. Kesitim olduğu için sınadım.

### ① İDDİA
```
harita Ayamavra (Lefkada)  s:venedik  1684-08-06 → 1923-10-29   fazlalık 126,5 yıl
ve: "1797-1923 arasında Lefkada'nın gerçek sahipleri de haritada hiç yok —
     Fransız/Rus dönemleri, 1815-1864 İngiliz himayesi, 1864 Yunanistan devri.
     Yani tek satırlık bir düzeltme değil, bir zincir eksik."
```

### ② CANLI VERİDE NE VAR — ham kayıt, `yerlesimler.js`
```
s:[ {1281-01-01→1479-08-01 napoli}
    {1684-08-06→1715-09-07 venedik}      ← venedik penceresi BURADA bitiyor
    {1718-07-21→1797-10-17 venedik}
    {1797-10-17→1815-11-05 fransa}       ← "hiç yok" denen zincir
    {1815-11-05→1864-05-21 ingiltere}    ←        ...
    {1864-05-21→1923-10-29 yunanistan} ] ←        ... ÜÇÜ DE VAR
d:[ {1479-08-01→1684-08-06} {1715-09-07→1718-07-21} ]
```

### ③ HÜKÜM — **ÖLÇÜM ARTEFAKTI**, veri hatası değil.

`1684-08-06 → 1923-10-29` = **ilk `venedik` penceresinin `f`'i + kaydın SON
penceresinin `t`'si.** Aradaki dört pencere atlanmış. Ve bu bir "bu arada
düzeltilmiş olabilir" vakası değil: `git log -S'Ayamavra' -- data/yerlesimler.js`
son dokunuşu **`39f3f49`, 2026-07-29** veriyor — BATI'nın ölçümünden önce.

📌 **Ve `venedik` bütün veride ölçüldü:** dizin ölümünden (`1797-05-12`) sonra
açılan pencere **0**; en uzun tekil fazlalık **158 gün**. O 158 gün de meşrudur —
Venedik Cumhuriyeti 12 Mayıs 1797'de dağıldı, mülkleri **17 Ekim 1797 Campo
Formio** ile devroldu; `CLAUDE.md §3.5` bölgesel teslim gecikmesini *"aylar
mertebesinde"* meşru sayıyor. **Hayalet Venedik yok.**

⚠️ Bunu BATI'yı düzeltmek için değil, **kaynakları doğru yere yönlendirmek için**
yazıyorum: `CLAUDE.md §3.5` tablosuna 126,5 yıllık bir satır girseydi, gerçek
bulgu (A-1'deki 58,4 yıl-nokta) onun gölgesinde kalırdı.

⇒ **Kural önerisi:** bir pencere fazlalığı ölçülürken **o kimliğin kendi
penceresinin `t`'si** alınır, kaydın son penceresinin değil. Aynı hata sınıfı
`iran` gibi çok pencereli kayıtlarda sessizce tekrar eder.

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

## Sıradaki (aksi söylenmezse)

1. **Ada ada gün kaynaklama** — 1798 sonbaharı Osmanlı-Rus seferi: Çuha · Zaklise ·
   Kefalonya · İthaki · Ayamavra'nın Fransızlardan çıkış günleri. A-1'in rakamını
   temkinliden gerçeğe çeker.
2. **Kıbrıs 1489-1571 ve Girit 1645-1669** — Venedik arşivi tarih bakımından gün
   gün kesindir (`CAPRAZ-GOREV §7`, kullanıcının kendi sorusu). Bizde Magosa
   `1571-08-01` (ay hassasiyetli görünüyor), Kandiye `1669-09-27`.
3. **1536 kapitülasyonu** — kesitimin adını veren olay; `fransa` kaydının
   `ozet:`inde geçiyor ama kronolojide karşılığı ölçülmedi.
