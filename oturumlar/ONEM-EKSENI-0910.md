# ÖNEM EKSENİ — kronoloji süzgeci · 10 Eylül 2026

> Emre: *"tüm atlas sistemindeki kronolojik maddeleri öneme göre sıralamalıyız.
> Bir kronolojik olay o devlet için hangi önemde, bölge için hangi önemde,
> dünya için hangi önemde… kişi bir devlet seçtiği zaman o devletin
> kronolojisini çalıştırmadan önce bu ayarları yapmalı."*

🔴 **Bu belgedeki her sayı ölçüldü. Hiçbiri hatırlanmadı.**

---

## ⓪ 🔴🔴 ÖNCE ŞUNU BİL: SİSTEMİN ÇOĞU **ZATEN YAZILMIŞ**

Emre'nin tarif ettiği şemanın **dört alanından üçü veride mevcut** —
ve 4889 maddede dolu:

```
alan            kaç maddede    ne taşıyor
onem              4889         1-5   ← Emre'nin istediği ÖLÇEĞİN AYNISI
dunya             4900         0-5   ← dünya ekseni
kapsam            4900         ic / dis
tur               4888         savas · hukumdar · kultur · bilim · …
etiket            6158         askeri · siyaset · toprak-kazanc · kultur · …
kapsam_genis       543         true
```

`onem` dağılımı: **5→1344 · 4→1692 · 3→1393 · 2→450 · 1→10**
`dunya` dağılımı: **5→142 · 4→474 · 3→972 · 2→1835 · 1→1474 · 0→3**

📌 `D045` ailesinin bu haftaki **yedinci** vakası: *istenen şeyin altyapısı
zaten vardı.* Yapılacak iş sıfırdan tasarım değil, **üç boşluğu kapatmak.**

---

## ① ÜÇ BOŞLUK — ölçüldü, adı kondu

### 🔴 BOŞLUK 1 — TERS SİMETRİ: çekirdek puansız, kuyruk tam puanlı

```
ÇEKİRDEK  data/olaylar*.js      onem VAR    51  ·  YOK 1272     %96 PUANSIZ
KUYRUK    data/kronoloji*.js    onem VAR  4838  ·  YOK    0     %100 PUANLI
```

⚠️ **Ve ters yönde olması meselenin kendisi:** kullanıcının izlediği şey
Osmanlı kronolojisidir (`olaylar*.js`) ve **asıl puansız olan orası.**
Dünya kronolojisi (`kronoloji*.js`) tam puanlı ama onu kimse süzemiyor.

📌 `D124` — *aynı kelime iki ayrı şeyi anlatıyorsa, birini ölçen ötekini
ölçtüğünü sanır.* "Kronoloji" bu projede İKİ kovadır (`§5`), ve önem
ekseni yalnız birine inmiş.

### 🔴 BOŞLUK 2 — **BÖLGE EKSENİ HİÇ YOK**

Emre üç eksen istiyor; veride **iki** var:

```
o DEVLET için   →  onem     ✅ VAR
BÖLGE için      →  —        ❌ YOK
DÜNYA için      →  dunya    ✅ VAR
```

⚠️ Ve eksik olan tam da **Emre'nin en çok kullanacağı** eksen: *"kendi
bölgesindeki diğer devletlerle ilgili hangi önemdeki maddeleri görmek
istiyor."* Bugün bu soru **sorulamıyor.**

### 🔴 BOŞLUK 3 — **`js/app.js` BU ALANLARIN HİÇBİRİNİ OKUMUYOR**

Arandı: `onem` · `dunya` · `kapsam` — arayüzde **sıfır kullanım.**
⇒ 4889 maddedeki puan **hiçbir şeyi süzmüyor.** Veri var, tüketen yok.

📌 `D059` — *bir hüküm, veriye inmedikçe hüküm değil bir metindir* —
buranın **tersi**: veri inmiş ama **okunmuyor**, yani aynı kapıya çıkıyor.

---

## ② ÖLÇEK TANIMI — Emre bana bıraktı, tanım budur

> Emre: *"bu maddelerin önemini sen belirle."*

### `onem` 1-5 — **olayın KENDİ ÖZNE DEVLETİ için**

```
5  devletin VARLIĞINI ya da REJİMİNİ değiştirir
   kuruluş · yıkılış · hanedan değişimi · başkent · bağımsızlık · ilhak
4  KALICI toprak ya da kurum değişimi
   büyük fetih/kayıp · antlaşma · köklü reform · taht kavgasının sonu
3  KAYDA DEĞER ama geri döndürülebilir
   sefer · kuşatma · yerel isyan · büyük imar · önemli tayin
2  DAR etki — bir şehir, bir kurum, bir yıl
1  ANSİKLOPEDİK ayrıntı
```

### `bolge` 1-5 🆕 — **olayın bulunduğu BÖLGE için**

```
5  bölgenin güç dengesini değiştirir      (Ankara 1402 · Çaldıran 1514)
4  komşu devletleri doğrudan etkiler      (bir devletin kuruluşu/yıkılışı)
3  bölgede duyulur, dengeyi değiştirmez
2  komşu vilâyeti aşmaz
1  yereldir
```

### `dunya` 1-5 — **küresel** *(veride 0 da var — 3 madde; 0 = "ilgisiz")*

```
5  dünya tarihinin akışını değiştirir     (1453 · 1492 · 1914)
4  kıtalar arası etki
3  bölgeler arası etki
2  komşu bölgeye etki
1  yerel
```

### 🔴 ÜÇÜ AYNI OLAY İÇİN ÇOK FARKLI ÇIKAR — ve mesele budur

Emre'nin sorduğu iki madde (`0042/H-0017` ve `H-0020`) bunun **canlı
örneği**, ve ikisi de bugün **puansız**:

```
"Mar'aşî Seyyidleri Âmül'ü aldı" (1359)   onem 5 · bolge 3 · dunya 1
"Kârkiyâ hânedanı Gîlân'da kuruldu" (1371) onem 5 · bolge 3 · dunya 1
```

⇒ **Kendi devletleri için 5** (kuruluş maddesi!), **dünya için 1.**
Emre'nin *"bu Osmanlı için bu kadar önemli mi?"* sorusunun cevabı:
**hayır — ve göründüğü için değil, SÜZGEÇ OLMADIĞI için orada.**
`dis` olayları için `dunya ≥ 4` ya da `bolge ≥ 4` eşiği konsa **ikisi de
düşerdi.**

📌 Ve bu, tek bir sayının niçin yetmediğinin kanıtı: `onem`e bakan bir
süzgeç bu iki maddeyi **5 puanla en üste** koyardı.

---

## ③ SÜZGEÇ PANELİ — devlet seçilince, kronoloji BAŞLAMADAN önce

Emre'nin tarifi doğrudan bir ekrana çevrilebiliyor:

```
┌─ <DEVLET> kronolojisi — ne göreyim? ─────────────────────────┐
│ ① İÇ OLAYLAR         (kapsam:ic)      önem ≥ [1▾]            │
│ ② KONU               ☑ toprak kazanç/kayıp  ☑ askerî         │
│                      ☑ siyaset · hanedan · hükümdar          │
│                      ☐ kültür ☐ bilim ☐ mimari ☐ ekonomi     │
│                      ☐ din ☐ sosyal ☐ spor                   │
│ ③ BÖLGESEL DIŞ OLAY  (kapsam:dis)     bolge ≥ [4▾] / kapalı  │
│ ④ DÜNYA OLAYLARI                      dunya ≥ [4▾] / kapalı  │
└──────────────────────────────────────────────────────────────┘
```

**Hazır ayarlar** (Emre'nin kendi cümlelerinden):
```
"sadece toprak"   etiket ∈ {toprak-kazanc, toprak-kayip} · ③④ KAPALI
                  ⇒ bu tam olarak 0042/H-0003'ün istediği ayar
"hükümdar/hanedan" etiket ∈ {hukumdar, hanedan, taht}
"standart"        onem≥3 · bolge≥4 · dunya≥4
"her şey"         süzgeç yok — bugünkü davranış
```

⚠️ **Konu ekseni İCAT EDİLMEYECEK — `tur` ve `etiket` zaten taşıyor:**
`askeri 1305 · siyaset 1158 · savas 666 · toprak-kazanc 635 ·
toprak-kayip 613 · diplomasi 582 · kultur 550 · din 365 · ekonomi 357 ·
hanedan 327 · bilim 283 · imar 263 · hukumdar 261 · mimari 188 · spor 5`
⇒ Emre'nin saydığı **her başlık** (bilim · sanat · kültür · mimari · spor ·
hükümdar · hanedan · toprak) veride **zaten var.**

---

## ④ SIRA — ve niçin bu sıra

```
① BÖLGE EKSENİ TANIMI      `bolge` alanını girdi.py'ye kaydet
                           ⚠️ girdi.py BILINEN_ALANLAR'a girmezse
                             beyan SESSİZCE DÜŞER (D067)
② 1272 ÇEKİRDEK MADDE      puanla — ⚠️ elle değil, TÜRETİLMİŞ olarak
                           ve DAMGALI: `onem_t:"turetildi"`
                           çünkü türetilmiş bir puan, hükmedilmiş
                           puandan ayırt EDİLEBİLİR kalmalı (D100)
③ app.js SÜZGEÇ PANELİ     koşu GEREKTİRMEZ · veri yazılmaz
④ BÖLGE PUANI              `yer_id` → bölge eşlemesi üzerinden;
                           5969 maddede yer_id VAR
```

🔴 **② NİÇİN TÜRETİLİR, ELLE PUANLANMAZ:** 1272 maddeyi tek tek hükme
bağlamak bu oturumun işi değil ve **tahmin edilmiş bir puan, veriye
inince ölçülmüş puandan ayırt edilemez** — bu projenin en pahalı hata
sınıfı. Çare damgadır: türetilen puan `onem_t:"turetildi"` taşır, bir
sonraki oturum onu **sınanmayı bekleyen bir tahmin** olarak okur.

🟢 **③ EN UCUZ VE EN ÇOK GÖRÜNEN:** panel yazılınca 4889 puanlı madde
**anında** süzülebilir hâle gelir — çekirdek puanlanmasa bile dünya
kronolojisi zaten tam puanlı.
⇒ **Değer/emek oranı en yüksek olan ③'tür, ② değil.**

---

## ⑤ AÇIK SORULAR — Emre'ye

```
① `dunya` veride 0-5, Emre 1-5 dedi. 3 maddede 0 var.
   0 = "ilgisiz" mi, yoksa "puanlanmadı" mı? ⇒ ölçülmedi.
② `onem` çekirdekte hangi devlete göre olacak?
   Öneri: OLAYIN KENDİ ÖZNESİNE göre (yukarıdaki tanım), ve
   kullanıcının seçtiği devlete göre süzme `kapsam` ile yapılır.
③ Konu ekseni `tur` mu `etiket` mi? İkisi de var, `etiket` daha zengin
   (6158 vs 4888) ve ÇOKLU. ⇒ Öneri: süzgeç `etiket`e baksın.
```
