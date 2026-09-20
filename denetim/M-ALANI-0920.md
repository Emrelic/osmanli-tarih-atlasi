# M-ALANI-0920 — `m:` alanı önerileri · doğrulama raporu · 20 Eylül 2026

> 🔴 **ŞARTNAME DÜZELTMESİ — sonraki oturum buradan okusun.**
> `oturumlar/M-ALANI-0920.md`deki *"938 kayıt · 548 yerleşim `m:` ile kapanır"* hükmü
> **YANLIŞTIR ve 1.MURAT tarafından GEÇERSİZ sayılmıştır** (tahta M-4689). O ölçüm
> `m:`yi bölge alanı varsayarak kuruldu; `m:` bölge alanı değildir (§1). `glm/M-ALANI-ONERI.json`
> önerileri **uygulanmadı ve uygulanmamalıdır**. Yürürlükteki hüküm §7 (B)'dir.

**Bölüm 1-6: GLM önerilerinin reddi** (neden uygulanmadı). **Bölüm 7-9: yerine yapılan iş.**

Sayıların tamamı üretilir, elle yazılmaz:
`py denetim/ARAC-M-ALANI-0920.py` (öneri × şema) · `py denetim/ARAC-M-ALANI-KAPI-0920.py` (kapı ölçümü).

---

## 1. Şema ne diyor

`VERI-YAPISI.md:120`, yerleşim şeması tablosu:

> `m` — Bağlı olduğu k1/k2 merkezinin **adı** — bir yerleşim adına birebir eşleşmeli

Bölge alanı değildir. Veri de bunu doğruluyor:

| ölçüm | sayı |
|---|---|
| `m:` dolu kayıt | 818 / 3921 |
| benzersiz `m:` değeri | 87 |
| bunlardan birebir yerleşim adı olan | **85** |
| ad tutmayan (eski borç) | 2 — `Lutsk`, `Üsküb` |
| mevcut bağların mesafesi | ortanca 130 km · %90 390 km · maks 1084 km |

Sözlüğün tamamı sancak/eyalet merkezi: Kahire 56 · Hartum 46 · Bursa 44 · Cezayir 41 ·
Edirne 39 · Tunus 35 · Rodos 25 · Yanya 24 · Erzurum 20 · Budin 19 …

## 2. Öneriler şemayı tutmuyor

| güven | kayıt | benzersiz çift | **öneri yerleşim adı DEĞİL** | ad tutan | ad tutan ama >300 km | `m:` zaten DOLU |
|---|---|---|---|---|---|---|
| YÜKSEK | 71 | 63 | **50** | 13 | 2 | 0 |
| ORTA | 867 | 752 | **413** | 339 | 89 | **559** |
| DÜŞÜK | 991 | 955 | 492 | 463 | 459 | 220 |

Şema dışı öneri değerlerine örnek (hiçbiri veride bir yerleşim adı değil):
`Podolya` · `Necid` · `Kosova` · `Trakya` · `Doğu Anadolu` · `Çukurova` · `Macaristan` ·
`Hicaz` · `Azerbaycan` · `Acara` · `Herat — Horasan` · `Tisa boyu` · `Dağıstan kıyısı` ·
`Necid güneybatısı` · `Kasımpaşa-Şişli arası` · `Çarşıkapı` · `Candar toprakları`.

ORTA'daki **559 kayıt** `m:`si zaten dolu olanı **değiştirmeyi** öneriyor — şartname §2
"Yerleşimin `m:` alanı DOLUYSA değiştirme" diyor; bunlara bakılmadı.

## 3. Ad tutan 13 YÜKSEK çifti — tek tek

Şartname §2 gereği toplu değil, tek tek bakıldı. **Hiçbiri uygulanabilir değil.**

| yerleşim | öneri | mesafe | hüküm |
|---|---|---|---|
| Şam | Nablus (k=3) | 173 km | 🔴 TERS — Şam eyalet merkezi, Nablus ona bağlı sancak |
| Revan | Ardahan (k=4) | 185 km | 🔴 TERS — Revan kendisi eyalet merkezi (1583) |
| Revan | Sarıkamış (k=3) | 165 km | 🔴 TERS — aynı sebep |
| Kutaisi | Ardahan (k=4) | 129 km | 🔴 hedef k=4, kendi zinciri de açık |
| Ba'lebek | Nablus (k=3) | 218 km | 🔴 Ba'lebek Bekaa/Şam tarafı, Nablus Filistin |
| Sûr (Tyre) | Nablus (k=3) | 117 km | 🔴 Sûr Sayda sancağı |
| Deyrülkamer | Nablus (k=3) | 167 km | 🔴 Şûf/Sayda tarafı |
| Białystok | Šiauliai (k=3) | 312 km | 🔴 Podlasie ≠ Samogitya; hedef k=3, zinciri açık |
| Grodno | Šiauliai (k=3) | 253 km | 🔴 aynı sebep |
| İshaklı | Beyşehir (k=4) | 105 km | 🔴 İshaklı Akşehir/Karahisâr-ı Sâhib tarafı; hedef k=4 |
| Cumai (Birlikköy) | Erzurum (k=2) | 315 km | ⚪ **ölçülemedi** — kaynak aranmadı (şema zaten tutmuyor) |
| Silivri | Edirne (k=1) | 156 km | ⚪ **ölçülemedi** |
| Bender Enzeli | Astara (k=3) | 118 km | ⚪ **ölçülemedi** |

**Ad tutması yetmiyor — homonim tuzağı var.** ORTA'da `Modon → Mora` çifti veride
`Mora` adlı **lat 61.01 / lon 14.54** (İsveç) noktasına işaret ediyor; gerçek Mora
`Mora (Tripoliçe)` adıyla **lat 37.51 / lon 22.38**'de duruyor. Benzerleri:
`Sevilla → Limni` 2705 km · `Tallinn (Reval) → Batum` 2296 km · `Nyala → Tâif` 1962 km.

## 4. Yan hasar — `m:`nin üç tüketicisi

Bölge adı yazmak 2s kapısını kapatır, ama:

| yer | ne yapar | bölge adı yazılırsa |
|---|---|---|
| `arac/uret_petek.py:1055` `k12_merkez()` | `m:` zincirini `AD2IDX[ad]` ile k1/k2'ye kadar yürür | zincir **kırılır** → "kademe zinciri açık" uyarısı (beklenen 0) |
| `arac/denetle.py:1808` Değişmez 3 | `ix.get(y["m"])` ile merkezi bulup sahipliği karşılaştırır | bölge adı sessizce `None` döner → kayıt **çelişki evreninden düşer**; Değişmez 3 *daha az ölçerek daha temiz görünür* |
| `js/app.js:7089` | dizin panelinde `ad + " → " + m` basar | kullanıcı **"Şam → Nablus"** görür |

## 5. Kök sebep

2s kapısının YER kolu, `arac/denetle.py:1380`:

```py
Y_BOLGE = {y["ad"]: _2s_norm(y.get("m") or "") for y in Y}
```

Kapı `m:`yi **bölge** okuyor. Öneri üreteci de (`glm/M-ALANI-ONERI.json` →
`tanimlar.oneri_kaynaklari`) adayı "madde metninde geçen ve kapıyı geçiren kelime"den
seçmiş. Bu **döngüsel**: kapıyı, ona duymak istediğini yazarak kapatıyoruz —
`CLAUDE.md §11` *"ölçüm doğru, çıkarım yanlış"* ailesi.

Döngüselliğin kendi kanıtı veride duruyor: aynı üreteç **aynı yerleşime iki farklı değer**
öneriyor — `Dilem (Harc)` · `Havta` · `Leylâ (Eflâc)` için 1818/1824/1902 kırılmalarında
`Necid`, 1891 kırılmasında `Necid güneybatısı`. Bir yerleşimin bağlı olduğu merkez
kırılmadan kırılmaya değişmez; **değişen şey maddenin metnidir.** Ölçüt yer değil, metin.

## 6. Gerçek şema borcu — ödenebilir kısım

Motorun kendi uyardığı, kaynakla kapatılabilir borç:

| ölçüm | sayı |
|---|---|
| canlı (`d:`/`v:` taşıyan) kayıt | 1016 |
| k3/k4 ve `m:` zinciri **açık** | **86** |
| bunlardan 2s açık listesinde de olan | **58** |

Bu 58 kayıt her iki borcu birden taşıyor: `m:` alanları boş, `k12_merkez()` zincirleri
açık, ve 2s'de açıkları var. TDV'den sancak/kaza bağıyla **tek tek** doldurulurlarsa yama
şemaya uygun olur, üç tüketiciyi de düzeltir; 2s'de kapanma olursa **yan üründür**, hedef
değil. Liste betiğin `[3]` bölümünde (Braslav · Vinnitsa · Vize · Silivri · Üsküdar ·
Siirt · Hoy · Ordubad · Köprülü · İştip · Ustrumca · Karaferye · Bosna dörtlüsü ·
Necid dörtlüsü …).

---

## 7. Hüküm ve yapılan iş

Tahta M-4688 ile üç seçenek soruldu; **1.MURAT M-4689 ile (B)'yi onayladı** ve ayrıca
(A)'nın **ölçümünü** (uygulamasını değil) bu oturuma verdi.

### 7.1 (A) ölçümü — `m:` bacağı kaldırılsa açık kaça çıkar?

`py denetim/ARAC-M-ALANI-KAPI-0920.py`. Yöntem: kod DEĞİŞTİRİLMEDİ. `denetle.py:1479`
`if bolge and …` diyor; `m:` boş dizgi ise bacak hiç çalışmaz. Yerleşimlerin `m:` alanını
**bellekte** boşaltmak bacağı kesmeye birebir denktir (diske yazılmaz).

| ölçüm | bugün | `m:` bacağı kesilmiş | fark |
|---|---|---|---|
| YABANCI kırılması | 1418 | 1418 | 0 |
| ham açık | 931 | 989 | +58 |
| KAPSAM DIŞI | 590 | 589 | −1 |
| YIL-TEMSİLÎ BORÇ | 149 | 156 | +7 |
| **AÇIK (gün hassas)** | **192** | **244** | **+52** |

⇒ **`m:` bacağı şu anda 52 tarihi tek başına kapatıyor.** Kapı düzeltilirse taban 244'tür.
⚠️ Bu 52 kapanış bugünkü **818 merkez adıyla** yapılıyor — yani bacak, bölge adı okuduğu
için değil, merkez adının madde metninde geçmesi sayesinde çalışıyor. Kapıyı düzeltecek
oturum bunu ayrıştırmalı: kaç kapanış gerçekten alâkalı, kaç tanesi tesadüf.

### 7.2 (B) — 1. parti: 20 kayıt

Hedef küme: canlı k3/k4 olup `m:` zinciri açık **86** kayıt; bunların 2s açık listesinde de
olan **58**'i (§6). İz: `denetim/YAMA-M-ALANI-0920.json`.

**Uygulanan — 6** (hepsi TDV alıntısıyla, zinciri kapanıyor):

| yerleşim | `m:` | zincir | TDV dayanağı |
|---|---|---|---|
| Üsküdar | `İzmit` | → İzmit → İstanbul(k1) | «Koca-ili (İzmit) sancağına bağlı Gebze kazası içinde yer aldı» |
| İştip (Štip) | `Köstendil` | → Köstendil → Sofya(k2) | «Ilıca-Köstendil sancağının kaza merkezi oldu» |
| Ustrumca | `Köstendil` | → Köstendil → Sofya(k2) | «Kostadin-ili adıyla bir sancak … Ustrumca kadılık ikametgâhı yapıldı» |
| Siirt | `Diyarbakır` | → Diyarbakır(k2) | «önceleri Diyarbekir beylerbeyiliğinde bir kaza merkeziydi» |
| Babadağı | `Özi` | → Özi → Silistre(k2) | «Özü eyaletinde paşa hassı bir voyvodalık olan şehir» |
| Hoy | `Tebriz` | → Tebriz(k2) | «Tebriz'e bağlı bir sancak merkezi haline getirilerek…» |

**Ölçülemedi — 13.** Boş bırakıldı (*"Eksik alan yanlış alandan iyidir"*). En öğreticileri:
- **Karaferye** — maddenin **tamamı** (15.970 karakter) tarandı, `sancak|kaza|eyalet|vilâyet`
  geçen tek idarî cümle yok. Kaynakçadaki 1906 Selânik Salnâmesi idarî hüküm değildir (`D211` ⑧).
- **Braslav · Vinnitsa** — TDV `KAMANİÇE`: eyalet **dört** sancaktır (Kamaniçe · Bar ·
  Mejibuji · Yazlofça); ikisi de listede **yok**. GLM'in önerdiği `Podolya` hem şema dışı
  hem kaynaksız. *Şartnamenin vaka örneği böylece kaynakta da çürüdü.*
- **Vodina** — TDV kazayı veriyor («Yenice-i Vardar kazasında bir nahiye merkezi»), sancağı
  vermiyor; Yenice-i Vardar'ın kendi sancağı da ölçülemedi ⇒ zincir kapanmaz.
- **Doyran** — bağ var ama zaman kaydıyla («XIV. yüzyıla kadar … Ustrumca kazası»), kırılma
  1912; `m:` zamansız olduğu için hangi dönem yazılacağı belirsiz.
- Kendi TDV maddesi hiç olmayanlar: **Silivri · Prevadi · Kılkış · Gürün · Göksun**.

**Başka alanın borcu — 1: Vize.** TDV `KIRKLARELİ`: «Kırkkilise, Osmanlı idaresinde Rumeli
eyaletinde **Vize sancağına** bağlı bir kaza merkezi idi.» ⇒ Vize'nin **kendisi** sancak
merkezidir; doğru düzeltme `k:3 → k:2`, `m:` değil. `k:` bu oturumun kalemi değil — sevk edildi.
k:2 yazılırsa Vize zinciri `m:` olmadan kapanır ve 86'lık listeden düşer.

### 7.3 1. partinin ölçümü

| | önce | sonra |
|---|---|---|
| Değişmez 2s AÇIK | 192 | **191** |
| Değişmez 3z zamansız (`m:`) | 482 | **489** |
| ihlal | — | **yok, bütün değişmezler yeşil** |

🔴 **+7'yi açıkla, çünkü ilk bakışta ters görünüyor.** 6 kayıt yazıldı, çelişki 7 arttı.
Sebep: `m:` dolu olmayan kayıt Değişmez 3'ün evrenine **hiç girmiyor** (`ix.get(y["m"])`
None dönüyor). Doğru merkez yazınca kayıt evrene giriyor ve soru **sorulabilir** hâle geliyor.
Yedisinin de dökümü alındı — **hiçbiri yanlış atama değil**:

```
1300-06-15  Babadağı  m=Özi         yer=bulgaristan  merkez=altinorda
1300-06-15  Siirt     m=Diyarbakır  yer=ilhanli      merkez=artuklu
1300-06-15  Ustrumca  m=Köstendil   yer=sirbistan    merkez=bulgaristan
1300-06-15  İştip     m=Köstendil   yer=sirbistan    merkez=bulgaristan
1400-06-15  Babadağı  m=Özi         yer=OSMANLI      merkez=altinorda
1400-06-15  Siirt     m=Diyarbakır  yer=celayirli    merkez=timurlu
1800-06-15  Babadağı  m=Özi         yer=OSMANLI      merkez=rusya
```
Altısı **Osmanlı bağının hiç var olmadığı** örnek günlerde (Siirt 1514'te, Babadağı 1393'te,
İştip/Ustrumca 1395'te Osmanlı oldu). Yedincisi gerçek ayrışma: Özi 1792'de Rusya'ya geçti,
Babadağı 1878'e kadar Osmanlı kaldı. Hepsi `CLAUDE.md §3`ün tarif ettiği sınıf:
*"kusurun %93'ü `m:` alanının zaman penceresi eksikliği — `kd:` çözer."*
⇒ **Doğru `m:` yazmak Değişmez 3'ün sayısını BÜYÜTÜR.** Bu bir gerileme değil, §4'te
anlatılan çürümenin aynadaki görüntüsü: bölge adı yazmak sayıyı *küçültüp* temiz
gösterecekti; merkez adı yazmak evreni büyütüp borcu görünür kılıyor.

### 7.4 (B) — 2. parti: 21 kayıt

**Uygulanan — 2:**

| yerleşim | `m:` | zincir | TDV dayanağı |
|---|---|---|---|
| Ba'lebek | `Şam` | → Şam(k2) | «Ba‘lebek, Şam eyaletine bağlı bir subaşılık ve 150 akçelik bir kaza idi» (Evliya Çelebi) |
| Sûr (Tyre) | `Sayda` | → Sayda → Şam(k2) | «Başlangıçta Şam sancağının bir kaza merkezi olan şehir Sayda'nın sancak haline getirilmesiyle buraya bağlandı» |

🔴 **Ba'lebek, GLM önerisinin ne kadar ters olduğunu tek başına gösteriyor.** Öneri
`Nablus` idi. Veride Nablus `k=3, m:"Kudüs"` — yani öneri, **eyalet merkezi Şam'ı**,
Kudüs'e bağlı bir kazanın altına sokuyordu. TDV üç ayrı dönemde (Memlük · Evliya Çelebi ·
1850) aynı merkezi veriyor: Şam.

**TDV slug tuzakları — bu partide ikisi de yaşandı** (`D211` ①②):
- `/baalbek` **975 karakterlik bir «bk. BA‘LEBEK» yönlendirme kütüğü**; gerçek madde `/balebek`.
  Gövde boş sanıp "TDV'de yok" demek burada yanlış olurdu.
- `/sur` arama sayfasına düşüyor; TDV aynı adla **dört** madde tutuyor
  (`sur--kale` · `sur--kiyamet` · `sur--lubnan` · …). Doğrusu `/sur--lubnan`.

**Ölçülemedi — 19.** Kümeler hâlinde:
- **Necid kümesi (5):** Dilem · Havta · Leylâ · Hurma · Türabe. TDV `NECİD` bu yerleri
  **bölge** olarak sayıyor ama sancak bağı vermiyor; tersine **dolaylı** idare tarif ediyor
  («yakın bulundukları eyaletlerin aracılığı ile», «Bağdat eyaleti, bir kısmı da Lahsâ
  beylerbeyiliği aracılığı ile»), 1871'de «merkezi Ahsâ olmak üzere Necid mutasarrıflığı».
  Kayıtların kırılmaları 1818/1824/1891/1902'ye yayılıyor ve yapı bu aralıklarda **değişiyor**
  ⇒ zamansız `m:` yanlış olur. `kd:` işi.
- **Bosna kuzeybatı kümesi (7):** Bosna Brod'u · Dubiça · Novi · Krupa · Kostayniçe ·
  Jasenovaç · Ostrovica. Kendi maddeleri yok; kapsayıcı `BOSNA-HERSEK` maddesi
  (**55.428 karakter**) tarandı — Bosna sancağı/beylerbeyiliği anlatılıyor ama bu
  kasabaların hiçbirine sancak bağı verilmiyor. En yakını «Novi kadısı Ömer Efendi»:
  kadılık, sancak değil.
- **Tekler (7):** Deyrülkamer · Bedir (madde Bedir Gazvesi'ni anlatıyor, idarî cümle yok) ·
  Râbiğ · Soçi · Segesvár (yalnız `ERDEL` içinde anılıyor; Erdel tâbi prenslikti, sancak
  yapısında değildi) · Gyula · **Uman**.
- 🔴 **Uman — homonim yakalandı:** TDV `UMAN` maddesi Arap yarımadasındaki **Umman
  ülkesi**; verideki Uman ise **Ukrayna'daki şehir**. Yanlış madde, kullanılmadı. Bu,
  §3'teki `Modon → Mora` tuzağının kaynak tarafındaki eşi.

### 7.5 2. partinin ölçümü

| | önce | sonra |
|---|---|---|
| Değişmez 2s AÇIK | 191 | **191** |
| Değişmez 3z zamansız | 489 | **489** |
| ihlal | — | **yok** |

Bu partide 2s'de kapanma **olmadı** ve yeni çelişki **doğmadı**. Beklenen: hedef 2s değil,
şema borcudur (M-4689: *"2s'de kapanma olursa yan üründür, hedef değil"*).

### 7.6 (B) — 3. parti: 18 kayıt · **hedef küme tamamlandı**

**Uygulanan — 1:**

| yerleşim | `m:` | zincir | TDV dayanağı |
|---|---|---|---|
| Ordubad | `Nahçıvan` | → Nahçıvan → Revan(k2) | «1590'larda **Revan eyaletine bağlı Nahcıvan bölgesi**, Nahcıvan …, Şerûr … ve **Ordubâd** (beş nahiye…)» |

Verideki Osmanlı dönemi **1586-01 … 1603-10**; TDV'nin *"1590'larda"* ifadesi tam bu
pencerenin içinde. Zincir TDV'nin hiyerarşisini birebir taşıyor. Bu madde ayrıca GLM'in
`Revan → Ardahan` / `Revan → Sarıkamış` önerisini de çürütüyor: **Revan eyalet merkezidir.**

**Ölçülemedi — 17.** Üç öğretici tanesi, çünkü GLM önerilerini kaynakta çürütüyorlar:
- **İshaklı** — kendi maddesi yok; tek isabet «İSHAKLI KERVANSARAYI — **Akşehir**
  yakınlarında». İdarî hüküm değil, ama GLM'in `Beyşehir` önerisini yerinden ediyor.
- **Yagodina** — kendi maddesi yok; tek isabet «**Belgrad yakınlarındaki** Yagodina'da
  doğdu». GLM'in `Yenipazar` (Novi Pazar) önerisi buraya da uymuyor.
- **Şemdinli** — kapsayıcı `HAKKÂRİ` maddesi Hakkâri'nin Van eyaletine bağlı ocaklık
  sancak olduğunu söylüyor, ama Şemdinli'yi yalnız **modern ilçe** olarak anıyor.
  Modern ilçe Osmanlı kazası değildir — yazılmadı.

Kalanlar: Gevgili (maddesi var, sancak vermiyor) · Kızıkermen · Kuban · Tuapse · Seyûn ·
Nadin · Vrana (kapsayıcı `KLİS` maddesi tarandı, ikisi de geçmiyor) · İshakçı · Zamantı ·
Kasr-ı Şîrîn (üç isabetin üçü de yanlış pozitif) · Bacirge · Şeyhrumi · Lanzaka · Praviște.

---

## 8. Kapanış — hedef kümenin tamamı

| ölçü | önce | sonra |
|---|---|---|
| **k12 zinciri açık** (motorun `uret_petek.py:1075`'te uyardığı) | **86** | **77** |
| bunlardan 2s açık listesinde de olan | 58 | **49** |
| Değişmez 2s AÇIK | 192 | 191 |
| Değişmez 3z zamansız | 482 | 489 |
| ihlal | — | **yok** |

**İşin asıl ölçüsü birinci satırdır:** açık zincir **9 azaldı** — yazılan 9 kaydın tamamı.
2s'deki −1 yan üründür (M-4689: *"2s'de kapanma olursa yan üründür, hedef değil"*).

**58 kaydın tamamı incelendi:** 9 uygulandı · 48 ölçülemedi · 1 başka alanın borcu.
Sayım `ARAC-M-ALANI-0920.py` `[3]` bölümüyle karşılaştırılarak doğrulandı; ilk sayımda
atlanan **Yagodina** bu kontrolde yakalandı ve eklendi.

🟡 **KAYNAK TAVANI — sonraki oturum bunu bilsin.** Yazılabilme oranı **9/58 = %16**.
Kalan 48'in ezici çoğunluğu **TDV'de kendi maddesi olmayan** kasaba/köy; kapsayıcı madde
de sancak vermiyor (Bosna 55.428 karakter · Karaferye 15.970 karakter tarandı, ikisi de
boş çıktı). *"`m:` yazılınca kapanır"* beklentisi bu kümede **gerçekçi değil** —
938'lik ilk tahminle arasındaki mesafenin ölçülmüş hâli budur.

## 8.1 Açık sevkler (üçü de bu oturumun kalemini aşıyor)
1. **Vize** `k:3 → k:2` — TDV `KIRKLARELİ` "Vize sancağı"nı adıyla anıyor. Yapılırsa
   Vize zinciri `m:` olmadan kapanır (77 → 76).
2. **Hoy** — `kd:` içindeki `m:null`. `girdi.kd_oku()` `kd:` varsa üst düzey `m:`yi hiç
   okumaz; yazdığım `m:"Tebriz"` yalnız `k12_merkez()` ve Değişmez 3 için geçerli.
3. **2s kapısının `m:` bacağı** — kaldırılırsa açık **192 → 244**. Ölçüm aleti hazır.

## 9. Değişen dosyalar
- `denetim/ARAC-M-ALANI-0920.py` · `denetim/ARAC-M-ALANI-KAPI-0920.py` (ölçüm aletleri)
- `denetim/M-ALANI-0920.md` · `denetim/YAMA-M-ALANI-0920.json`
- **1. parti** — `data/yerlesimler.js` (Hoy) · `data/yerlesimler_ek29.js` (Üsküdar ·
  Babadağı) · `data/yerlesimler_ok107.js` (Siirt · İştip · Ustrumca). 1.MURAT: `0f37695`.
- **2. parti** — `data/yerlesimler_ek29.js` (Ba'lebek · Sûr). 1.MURAT: `3a268e3`.
- **3. parti** — `data/yerlesimler.js` (Ordubad). **1.MURAT'ı bekliyor.**

Toplam **9 kayıt**, hepsinde **yalnız `m:` alanı** yazıldı; her parti
`git diff --word-diff` ile doğrulandı (9 satır, 9 ekleme, başka hiçbir alan değişmedi).
`arac/` · `index.html` · `glm/` dosyalarına dokunulmadı. Motor koşusu yapılmadı.
