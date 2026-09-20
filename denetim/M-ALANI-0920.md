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

## 8. Açık kalemler
- **2. parti:** kalan 38 kayıt (58 − 20). Gevgili · Kızıkermen · Uman · Bosna dörtlüsü ·
  Necid kümesi · Ba'lebek · Sûr · Deyrülkamer · Soçi · Tuapse · Kuban · Segesvár · Gyula …
- **Sevk edilen:** Vize `k:` düzeltmesi · Hoy'un `kd:` içindeki `m:null` kararı · 2s kapısının
  `m:` bacağı (taban 244).

## 9. Değişen dosyalar
- `denetim/ARAC-M-ALANI-0920.py` · `denetim/ARAC-M-ALANI-KAPI-0920.py` (ölçüm aletleri)
- `denetim/M-ALANI-0920.md` · `denetim/YAMA-M-ALANI-0920.json`
- `data/yerlesimler.js` (Hoy) · `data/yerlesimler_ek29.js` (Üsküdar · Babadağı) ·
  `data/yerlesimler_ok107.js` (Siirt · İştip · Ustrumca) — **yalnız `m:` alanı**, 6 kayıt.
  `data/` commit'i 1.MURAT'ta.
