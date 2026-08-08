# 🧭 BOYUTLAR — atlasın koordinat sistemi

> 8 Ağustos 2026 · Emre'nin sorusundan doğdu: *"1 metreküpte x, y, z boyutları
> vardır ve her biri 100 cm'dir. Bir orijin noktası var iken x=55 y=12 z=69'daki
> bir desimetreküpün yeri bellidir. Bizim kaç boyutumuz var?"*
>
> **Cevap: dört.** Emre üçünü saydı; dördüncüsü **zaten kullanılıyordu** ama
> adı konmamıştı — ve proje ekibini **o eksene göre** bölüyor.

---

## 0. Boyut nedir, katman nedir — önce bu ayrılmalı

**BOYUT**, bir işin *nerede durduğunu* söyleyen eksendir. Bir işin her boyutta
**bir değeri vardır** ve boyutlar birbirinden **bağımsızdır**.

**KATMAN**, bir koordinatta *duran şeydir*. Katman bir eksen değil, eksenin
üstündeki içeriktir.

**ÖLÇEK** ise ne boyut ne katmandır — **çözünürlüktür.** Aynı koordinata ne
kadar yakından baktığın. (Matruşka: `kutu/TESPIH-SISTEMI.md §2b`.)

```
BOYUT   nerede?          Z · M · K · Ü
KATMAN  orada ne var?    topografya · yerleşim · gövde · kronoloji
ÖLÇEK   ne kadar yakın?  dam³ → m³ → dm³ → cm³ → mm³
```

---

## 1. DÖRT BOYUT

```
┌─────────────────────────────────────────────────────────────────────┐
│  Z  ZAMAN          tek eksen · gün hassasiyetinde · MÖ 12000→2026    │
│  M  MEKÂN          FİZİKÎ — siyasetten bağımsız                      │
│  K  KONU           8 dal · her birinin kendi iç ağacı                │
│  Ü  ÜRETİM KATMANI hangi CİNS iş — projenin dosya sahipliği bu eksen  │
└─────────────────────────────────────────────────────────────────────┘
```

Bir iş **dört değerle** yerleşir:

```
   ⟨ 1453-05-29 · Doğu Trakya/İstanbul · siyasî›askerî›savaş · kronoloji ⟩
     └── Z ──────┘  └──── M ─────────┘  └──── K ──────────┘  └── Ü ──┘
```

---

## 2. Z — ZAMAN

**Tek eksen, tek yön.** En basit boyut, ve Emre haklı: düz bir çizgi.

```
MÖ 12000 ─────────────── 0 ─────── 1281 ═══════════ 1923 ─── 2026
                                    └ bugünkü çekirdek ┘
```

⚠️ **Ama tek bir incelik var: çözünürlüğün kendisi bilgidir.**

```
1453-05-29    gün biliniyor
1453-01-01    yıl biliniyor, GÜN BİLİNMİYOR   ← uydurma değil, BEYAN
1400-01-01    yüzyıl sınırı — TDV "XV. yüzyıl" diyor, yıl vermiyor
```

📌 `CLAUDE.md §4`: *"Tarih uydurma. Gün bilinmiyorsa `YYYY-01-01` yaz."*
Yani Z ekseninde bir nokta, **hem konumu hem konumun kesinliğini** taşır.

---

## 3. M — MEKÂN · 🔴 **siyasetten ARINDIRILMIŞ olmalı**

Emre'nin (d) maddesi tam isabet:
> *"Bölgede ülke deyince siyasî yapılar karışmamalı; **Eflak, Boğdan, Attika,
> Makedonya** gibi söylemek daha doğru."*

```
kıta            Avrupa
 └ bölge        Balkanlar
    └ alan      Trakya · Makedonya · Attika · Eflak · Boğdan · Mora
       └ nokta  İstanbul · Edirne · Selanik · Atina · Bükreş
```

🔴 **VE BU BUGÜN İHLAL EDİLİYOR — ölçüldü (8 Ağustos 2026):**

```
yerleşimin `m:` alanı bir İDARÎ MERKEZ tutuyor — yani SİYASÎ bir şey
2133 yerleşimin 660'ında `m:` dolu
⇒ 359 yerleşim-tarih çiftinde yerleşim ile merkezi FARKLI DEVLETLERİN elinde
```

| yerleşim | | merkezi | tarih |
|---|---|---|---|
| İnegöl | **OSMANLI** | Bursa — **bizans** | 1300 |
| Söğüt | **OSMANLI** | Bursa — **bizans** | 1300 |
| Bilecik | **OSMANLI** | Bursa — **bizans** | 1300 |
| Bodrum | **bizans** | Muğla — **menteşe** | 1300 |

⚠️ `CLAUDE.md §3` bunu `Değişmez 3` olarak zaten biliyor ama **311** yazıyor;
bugünkü ölçüm **359**. *(Sayı veri büyüdükçe büyüyor — `B3`: belgedeki sayı
ölçüm değil, ölçümün fotoğrafıdır.)*

📌 **Teşhis Emre'nin: M ekseni siyasî bir alanla temsil edilirse, M ile K
birbirine karışır ve ikisi de bozulur.** Doğrusu: `m:` **coğrafî alan**
göstermeli (Bitinya, Trakya), idarî merkez ise **K-siyasî**nin bir katmanı
olmalı — ve **zaman boyutu taşımalı** (bir yer 1300'de Bursa'ya, 1500'de
İstanbul'a bağlıdır).

### M ekseninin ÜSTÜNDEKİ katmanlar

```
🏔  TOPOGRAFYA      dağ · nehir · göl · çöl · bozkır · orman · kıyı
🏘  YERLEŞİM        şehir · kale · liman · vaha  (2133 nokta)
🧩  PETEK           her noktanın temsil ettiği toprak (üretilmiş)
```

🔴 **Ve burada asıl ayrım şu — motorun mimarîsini bu açıklıyor:**

```
TOPOGRAFYA  M'nin ÖZELLİĞİDİR        zamandan bağımsız (insan ölçeğinde)
            ⇒ statik altlık, BİR KEZ hazırlanır

SİYASÎ SINIR  Z × M × K KESİŞİMİDİR  her gün YENİDEN hesaplanır
            ⇒ `donemler.js` 20,4 MB, 73 dakikada üretiliyor
```

Yani sınır bir **katman değil**, üç boyutun kesişiminde **türetilen** bir
nesnedir. Bir gövde çizmek için Z (hangi gün), M (hangi petek), K (kimin)
üçü birden gerekir.

---

## 4. K — KONU · **en karmaşık eksen**

Emre: *"Konu katmanı karmakarışık."* Doğru — çünkü **tek ağaç değil, sekiz
ayrı ağaç.**

```
K
├── ⚔️  SİYASÎ-ASKERÎ        ← BUGÜN AÇIK OLAN TEK DAL
│    ├── devletler            künye · sınır · renk · hânedan
│    ├── savaşlar             muharebe · kuşatma · sefer · seri
│    ├── antlaşmalar
│    ├── kişiler              hükümdar · komutan · devlet adamı
│    ├── kurumlar             eyalet · sancak · ocak
│    └── iç olaylar           isyan · fetret · taht kavgası
├── 🕌  DİN                   ulemâ · tarikat · külliye · ihtilâf
├── 🎨  KÜLTÜR-SANAT          mimarî · hat · minyatür · edebiyat · mûsikî
├── 🔬  BİLİM-TEKNOLOJİ       rasathane · tıp · matbaa · denizcilik
├── 💭  FELSEFE               kelâm · mantık · ahlâk
├── 🏛  SOSYAL-İKTİSADÎ       nüfus · vakıf · ticaret yolu · lonca
├── ⚖️  İDARÎ-HUKUKÎ          kanunnâme · tımar · defter
└── 🏅  SPOR                  cirit · okçuluk · güreş
```

⚠️ `CLAUDE.md §1.6`: **sekizinci boyut KASTEN KAPALI.** Bugün yalnız
`SİYASÎ-ASKERÎ` dalı açık; ötekiler tespihte var ama *"8. boyut, kasten
kapalı"* diye işaretli.

📌 **K'nın kendine has özelliği:** dalları **eşit derinlikte değil.** Siyasî
dal beş kademe iner, spor dalı iki. Bu bir kusur değil — konu ağacı
**doğal olarak asimetriktir**, ve matruşka bunu zaten taşıyor.

---

## 5. Ü — ÜRETİM KATMANI 🔴 **dördüncü boyut, ve zaten kullanılıyordu**

Emre üç boyut saydı ve *"başka boyut olduğunu sanmıyorum"* dedi. **Bir tane
daha var** ve kanıtı projenin kendi yapısında:

> **Aynı (Z, M, K) koordinatında, birbirinden bağımsız ALTI CİNS iş vardır.**

Fas 1549-1659 örneği — **tek koordinat, dört ayrı iş** (8 Ağustos'ta yapıldı):

```
⟨1549-1659 · Fas · siyasî›devlet⟩
   Ü=kimlik      `sadi` künyesi yazıldı           (devletler.js — VERİ DEVLET)
   Ü=görünüm     `sadi` rengi #1290ed yazıldı     (renkler.py — RENK 2)
   Ü=gövde       48 dönem bölündü                 (yerlesimler_*.js — koordinatör)
   Ü=kronoloji   1659 maddesi yazıldı             (olaylar_ek15.js — koordinatör)
```

Dördü de **aynı yerde, aynı zamanda, aynı konuda** — ama **dört ayrı iş,
dört ayrı dosya, üç ayrı oturum**. Bu K değil, M değil, Z değil. **Ü.**

```
Ü
├── 📐 GÖVDE        yerleşim noktası · sahiplik dönemi · petek     yerlesimler_*.js
├── 📜 KRONOLOJİ    olay maddesi · gün · anlatı                    olaylar_*.js
├── 🪪 KİMLİK       künye · f/t · başkent · özet                   devletler.js
├── 🎨 GÖRÜNÜM      renk · palet · ayrışma                         renkler.py
├── 📚 KAYNAK       TDV slug · doğrulama · "bulunamadı"            kaynak: alanları
├── 🛡 DENETİM      değişmez · eşik · nöbetçi                      denetle*.py
└── 🖥 ARAYÜZ       kart · dizin · zaman çubuğu                    app.js · style.css
```

🔴 **VE BU EKSENİN VARLIĞININ KANITI: proje ekibi TAM BU EKSENE GÖRE
BÖLÜNÜYOR.** `CLAUDE.md §7`: *"Bölme kriteri konu değil DOSYADIR."*

```
Oturum 0  Entegrasyon    Ü = gövde + üretilmiş çıktı
Oturum 1  Yazılım        Ü = arayüz
Oturum 3  Devletler      Ü = kimlik
Oturum 4  Yerleşim       Ü = gövde
Oturum 7  Kronoloji      Ü = kronoloji
RENK 2                   Ü = görünüm
```

📌 Yani `§7`'nin *"dosya sahipliği"* kuralı, aslında **"her oturum tek bir Ü
değerinde çalışır"** demenin başka bir söylenişidir. Eksen zaten vardı; adı
yoktu.

---

## 6. ŞEMA — dördü bir arada

```
                          Ü (üretim katmanı)
                          ▲
              denetim ────┤
              görünüm ────┤        ╱ K (konu)
              kimlik  ────┤      ╱  spor
           kronoloji  ────┤    ╱   sanat
              gövde   ────┤  ╱     din
                          │╱       siyasî-askerî
   ───────────────────────┼─────────────────────────▶ Z (zaman)
                         ╱│   1281        1453      1923
                       ╱  │
                     ╱    │
                   ╱      ▼
              M (mekân)
        kıta › bölge › alan › nokta
```

**Bir iş, dört değerle tam olarak yerleşir.** Emre'nin metreküp benzetmesi
birebir çalışıyor — yalnız küp değil, **dört boyutlu**.

---

## 7. Emre'nin örnekleri — koordinatlarıyla

| ifade | Z | M | K | Ü |
|---|---|---|---|---|
| *1500'de İtalya'da ressam* | 1500 | Avrupa›İtalya | kültür-sanat›minyatür/resim | kimlik + kronoloji |
| *1000'de Peru'da siyasî devlet* | 1000 | Amerika›And›Peru | siyasî›devlet | kimlik + gövde |
| *600'de Arabistan'da dinî mesele* | 600 | Asya›Arabistan›Hicaz | din | kronoloji |
| *MÖ 600'de Atina'da felsefe* | -600 | Avrupa›Balkanlar›**Attika** | felsefe | kronoloji |

📌 Dördüncü satırda **Attika** yazılı, "Yunanistan" değil — Emre'nin (d)
kuralı. MÖ 600'de Yunanistan diye bir siyasî varlık **yoktur**; Attika ise
bir **coğrafî alan** olarak vardır ve zamandan bağımsızdır.

---

## 8. ÇÖZÜNÜRLÜK — Emre'nin 1453 sorusu

> *"1453'te Doğu Trakya'daki İstanbul'da savaşlar dediğinde 1 tane var.
> Ama 1453'te tüm coğrafyalarda savaşlar dendiğinde belki 10 tane çıkar."*

**Bu, boyut değil ÇÖZÜNÜRLÜK sorusudur** — bir eksende ne kadar daralttığın:

```
Z=1453 · M=* · K=savaş                    → 10 sonuç   (M eksenini AÇIK bıraktın)
Z=1453 · M=Trakya›İstanbul · K=savaş      →  1 sonuç   (M'yi noktaya DARALTTIN)
Z=* · M=Trakya›İstanbul · K=savaş         → 12 sonuç   (Z'yi açtın: 1204, 1261, 1422…)
Z=1453 · M=* · K=*                        → 40 sonuç   (yalnız Z sabit)
```

⇒ **Sorgu = dört eksende birer aralık.** Bir ekseni `*` bırakmak, o eksende
**bütün değerleri** istemektir. Matruşka da tam bu: bir paketi açmak, bir
eksende daralmaktır.

```
🟥 dam³   "Çin"                        Z=* M=Çin K=* Ü=*      ← üç eksen açık
🟧 m³     "Çin · 1000-1288"            Z daraldı
🟨 dm³    "Çin · 1000-1288 · Kuzey"    M daraldı
🟩 cm³    "…· savaşlar"                K daraldı
🟦 mm³    "…· kronoloji maddesi"       Ü daraldı  ⇒ TEK BONCUK
```

📌 **Bir boncuk, dört eksende de daralmış demektir.** Bir paket ise en az
bir eksende hâlâ açıktır. **Matruşkanın matematiği budur.**

---

## 9. Beşinci boyut var mı — arandı, YOK

Üç aday değerlendirildi ve üçü de **boyut değil** çıktı:

| aday | niçin boyut değil |
|---|---|
| **ÖLÇEK** (dam³…mm³) | Bir *konum* değil, **çözünürlük**. Dört eksende ne kadar daraldığının ölçüsü — yani boyutların **fonksiyonu**, kendisi değil |
| **KAYNAK REJİMİ** (TDV / akademik / yok) | Bağımsız değil: (Z, M)'den **türüyor**. Ölçüldü — Balkanlar/Anadolu %100, Batı Avrupa %0 · yani M'nin bir fonksiyonu |
| **HÂL / OLGUNLUK** (bekleyen · biten · %85) | Bir *konum* değil **durum**. Aynı koordinat zamanla hâl değiştirir; eksen değişmez |

⚠️ **Ve bir uyarı:** *"boyut yok"* demek, ölçülmüş bir sonuçtur — ama
**arandığı kadar geçerlidir.** Yeni bir eksen, ancak *"aynı koordinatta
birbirinden bağımsız iki iş"* bulunduğunda doğar. `Ü` tam böyle doğdu.

---

## 10. Ne yapılacak — bu şemadan çıkan işler

| # | iş | niçin |
|---|---|---|
| 1 | 🔴 **`m:` alanını coğrafîleştir** | 359 çiftte M ile K karışıyor. `m:` idarî merkez değil **coğrafî alan** tutmalı; idarî bağ K-siyasî'ye taşınmalı ve **zaman boyutu almalı** |
| 2 | `CLAUDE.md §3`'teki **311 → 359** düzelt | `B3` — belgedeki sayı bayatlamış |
| 3 | Tespihe **koordinat alanları** ekle (`z` · `m` · `k` · `u`) | Bir boncuk nerede duruyor, sorgulanabilir olsun |
| 4 | `K` ağacını `ETIKETLEME.md` ile hizala | Konu dalları bugün etiketlerde dağınık |

---

> **Özet:** Emre üç boyut saydı, dördüncüsü zaten çalışıyordu ve ekibi
> bölüyordu. Dördü de bağımsız, dördü de gerekli. Beşinci arandı, bulunamadı
> — ve *"bulunamadı"* demek bir sonuçtur.
