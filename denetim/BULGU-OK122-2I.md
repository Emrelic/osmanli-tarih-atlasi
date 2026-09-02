# BULGU — `Değişmez 2i` KÖKENİ (4 açık, tavan 3)

**Oturum:** OPUS HAZIR KITA 122 · `local_19106e17-7807-4b0d-bf9d-ee54fdf38b56`
**Sevk:** `oturumlar/DAGITIM-0902-AKSAM.md` §③ · 1.MURAT
**Tarih:** 2 Eylül 2026
**Kapsam:** kökeni ÖLÇMEK. Düzeltme yapılmadı, tavan önerilmedi (koordinatörün kararı).
**Dokunulan dosya:** yalnız bu dosya. `arac/` okundu, YAZILMADI (koşu canlı, PID 27596).

---

## 0. ÖLÇÜM TABANI — devraldığım hiçbir sayı aktarılmadı

Şartnamenin iki `ÖLÇTÜM` öncülünü de **doğrulamadan kabul etmedim**, ikisini
de kendim ölçtüm. Ölçüt yeniden yazılmadı: `denetle.py`nin kendi
`degismez2()` · `olaylari_yukle()` · `gun_no()` fonksiyonları **çağrıldı**.
Kendi ayrıştırıcımı yazsaydım ölçüt benim yorumum olurdu, denetimin değil.

```
yerleşim TOPLAM        2663        kronoloji ÇEKİRDEK   1302 madde
yerleşim ÇEKİRDEK      1548        tavan BEKLENEN_ACIK_ISG = 3
yerleşim KUYRUK        1115
```

| Öncül | Kaynak | Damga |
|---|---|---|
| `2i` = 26 kırılma, 4 açık | şartname `ÖLÇTÜM` | **TUTTU** — birebir |
| Dört açık gün (Niş · Semendire · Bükreş+Yaş · Bihaç) | şartname `ÖLÇTÜM` | **TUTTU** — birebir |
| "İki yeni kırılma, altı yeni dosyadan" | şartname `VARSAYIM` | **ÇÜRÜDÜ** — §2 |

İki bağımsız sayım aynı çıktı: `denetle.degismez2` **26**, kendi dosya
taramam **26**. (Aynı soruya iki yoldan gitmek; farklı sorulara aynı cevap
almak değil.)

---

## 1. İKİ YENİ KIRILMA — adıyla, dosyasıyla, commit'iyle

```
1828-05-01   Bükreş · Yaş   kazanç
1834-01-01   Bükreş · Yaş   kayıp     ← aynı zamanda dört AÇIKtan biri
```

**Doğdukları yer:** `data/yerlesimler.js` · commit **`aaadabf`** ·
2026-09-02 **11:58:15** · *"137 YAMA INDI — ve FETRET DUZELTMESI…"*

Commit iki kayda `isg:` **ekledi** (öncesinde `isg:` alanı hiç yoktu):

```
+ ad:"Bükreş", isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"eflak"},
                    {f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"eflak"}]
+ ad:"Yaş",    isg:[{f:"1806-11-30",t:"1812-05-28",d:"rusya",kaynak:"bogdan"},
                    {f:"1828-05-01",t:"1834-01-01",d:"rusya",kaynak:"bogdan"}]
```

### Niçin DÖRT tarih eklendi ama sayaç sadece İKİ arttı

`1806-11-30` ve `1812-05-28` **zaten kırılma günüydü** — Akkirman, Hotin,
Kili, İbrail o günleri taşıyordu. Yeni kayıtlar var olan günlere katıldı.
Yalnız `1828-05-01` ve `1834-01-01` **yeni gün** açtı.

⇒ **24 → 26 mekanizmasıyla kapandı.**

### Aynı commit'te `isg:` dokunan öteki iki satır — SAYAÇ ETKİSİ YOK

`git show aaadabf` dört `+isg:[` satırı gösteriyor. Öteki ikisi
(**Süveyş**, **Sina güneyi**) için `-`/`+` satırları karşılaştırıldı:
`isg:` içerikleri **harfi harfine aynı**; satırları başka bir alan
yüzünden değişmiş. Gün üreten tek değişiklik Bükreş + Yaş.

---

## 2. ŞARTNAMENİN VARSAYIMI ÇÜRÜDÜ — ve üçüncü bir ihtimal çıktı

> *"ikisi de bugün bağlanan altı yerleşim dosyasından geldi,
> koordinatörün madde silmesinden DEĞİL"*

```
"madde silmesinden değil"     ✅ DOĞRU  — madde silinmedi
"altı yeni dosyadan geldi"    🔴 YANLIŞ — kaynak data/yerlesimler.js,
                                          projenin en eski çekirdek dosyası
```

Varsayım **iki şıklı** kurulmuştu (*yeni dosya* / *madde silme*) ve
gerçekleşen üçüncü şıkkı hiç saymıyordu:

> **VAR OLAN bir çekirdek kayda `isg:` EKLENMESİ.**

📌 Bu, `CLAUDE.md §11`in *"bir çerçeve vermek, çerçevenin doğruluğunu
peşinen kabul ettirmektir"* dersinin aynısı — 2 Eylül'de Irâk-ı Arab
fetret sevkinde ölçülmüştü, aynı gün ikinci vakası bu.
⚠️ **Zararı gerçekleşmedi**, çünkü sevk *"çürütülecek şey BU"* diye
açıkça damgalanmıştı. Damga olmasaydı altı dosyada boşuna aranacaktı.

### ÖLÇMEDİM
Önceki **24** sayısını doğrudan ölçmedim; 26'dan bu iki günü düşerek
**çıkardım**. Bu bir çıkarım, ölçüm değil. Doğrudan ölçüm için
`aaadabf~1` ayrı koşturulmalı — istenirse yaparım.

---

## 3. DÖRT AÇIK — "madde YOK" mu, "madde VAR ama uzak" mı

Şartnamenin sorusu buydu ve **ikisi ayrı çıktı: 3 + 1.**

### 🔴 A) MADDE YOK — 3 gün

| gün | yer | tip | en yakın madde | uzaklık | ilgili mi |
|---|---|---|---|---|---|
| `1737-10-01` | Niş | kayıp | Banaluka Zaferi | 58 g | başka yer, başka olay |
| `1789-10-13` | Semendire | kazanç | Bastille'in düşüşü | 91 g | alâkasız |
| `1834-01-01` | Bükreş · Yaş | kayıp | Bicâye'nin (Bougie) işgali | 94 g | alâkasız |

Üçünde de **o olayın kendi maddesi külliyatta yok.** Yakınlarındaki her
madde başka bir olayı anlatıyor:
- `1737` yılının **tamamında** çekirdekte 2 madde var (Özi · Banaluka);
  Niş'in Ekim 1737'de Osmanlı'ya dönüşü **yazılmamış**.
- `1789` yılında 4 madde var, dördü de İstanbul/Paris; Semendire'nin
  Avusturya'ya düşüşü **yazılmamış**.
- `1834` yılında 3 madde var (Nablus · Mekteb-i Harbiye · Redif);
  Rus ordusunun Eflak-Boğdan'dan çekilişi **yazılmamış**.

### 🟡 B) MADDE VAR, ALÂKALI, AMA ±30 DIŞINDA — 1 gün

```
1878-09-18  Bihaç (Bihać)  kazanç
   51 gün ötede: "Bosna-Hersek ve Yenipazar'ın Avusturya-Macaristan
                  tarafından işgali"  (1878-07-29)
```

Bu, ötekilerden **cinsçe farklı**: madde var, aynı seferin maddesi, ve
Bihaç o seferin **son direnen şehri**. Yani borç *"madde yazılmamış"*
değil, ***"bir seferin başı yazılmış, sonu yazılmamış"***.

**Yapısal sebep ölçüldü:** aynı seferin öteki **14 kaydı**
(`Banaluka · Foča · Konjic · Livno · Mostar · Saraybosna …`) `isg:`
başlangıcını `1878-07-29` yazıyor ve o gün maddesiyle **0 gün** uzakta
eşleşiyor. Bihaç tek başına `1878-09-18` taşıyor — ve **veri doğru**
görünüyor (Bihać gerçekten Eylül ortasında düştü, direnişin son noktası).
⇒ Kusur veride değil: **14 kayıt seferin BAŞINI, 1 kayıt SONUNU işaret
ediyor; kronolojide yalnız BAŞ var.**

**ÖLÇMEDİM:** `1878-09-18` gününün kaynakla (TDV / akademik) birebir
doğruluğunu sınamadım — şartname tarih doğruluğu istemiyordu, köken
istiyordu. Tarihin kendisi **açık bir soru** olarak duruyor.

---

## 4. 🔴 KENDİ ALETİMİ İHBAR EDİYORUM — "18 alâkasız" BİR BULGU DEĞİL

26 günün hepsine `denetle._madde_yeri_aniyor` uyguladım (denetim bunu
`2i` çıktısında **kullanmıyor**, `Değişmez 2`de kullanıyor). Çıktı:

```
GEÇEN ve maddesi ALÂKALI     4
GEÇEN ama maddesi ALÂKASIZ  18   ← BUNU RAPORLAMIYORUM
```

**Çünkü 18'in çoğu aletin kör noktası, verinin kusuru değil.** Aleti ayrı
sınadım (kontrol grubuyla birlikte) ve **iki yapısal yanlış negatif** buldu:

```
① AKSAN            ad "İbrail"  ·  başlık "İbrâil’in düşüşü"   → False
                   aynı başlık aksansız yazılınca               → True
   ⇒ fonksiyon yalnız ’→' normalleştiriyor, â/î/û'yu DEĞİL

② BÖLGE ≠ ŞEHİR    ad "Kahire" · başlık "Napolyon'un Mısır'ı işgali" → False
                   ad "Kefe"   · başlık "Kırım yarımadasının Rus işgali" → False
   ⇒ işgal maddeleri BÖLGE düzeyinde yazılır, kırılma ŞEHİR taşır.
     Bu bir kusur değil, ölçütün `isg:`e YAPISAL OLARAK UYMAMASI.

KONTROL GRUBU SAĞLAM: gerçekten alâkasız çiftler doğru şekilde False
                      döndü, pozitif kontrol ("Rusçuk"↔"Rusçuk'un teslimi")
                      doğru şekilde True döndü. Yani alet BOZUK DEĞİL,
                      KAPSAMI DAR.
```

⇒ **Damga: `ÖLÇÜLEMEDİ`.** *"Çürüdü"* diye yazmıyorum — çürüseydi kalem
kapanır, bir sonraki oturum ölçmezdi. Kalem **açık**.

### 🟢 Buna rağmen elle okumayla ayakta kalan ÜÇ gerçek yanlış geçiş

Alet güvenilmez olduğu için 18'i **tek tek okudum**. On beşi aletin yanlış
negatifi (Mısır · Kırım · Bosna · Ziştovi · İbrâil…) — maddeleri **doğru**.
Üçü gerçekten alâkasız bir maddeyle geçiyor:

| gün | yer | eşleştiği madde | uzaklık |
|---|---|---|---|
| `1538-01-01` | Herseknovi | Mimar Sinan'ın hassa mimarbaşılığına atanması | 0 g |
| `1539-01-01` | Herseknovi | Zebîd'in Osmanlı hâkimiyetine kesin girişi | 0 g |
| `1806-01-01` | Hotin · Kili | Mekke'nin Vehhâbîlere kaybı | 0 g |

Üçü de **`-01-01` / yuvarlak tarih** çakışması: gün belirsiz olduğu için
`YYYY-01-01` yazılmış, aynı yuvarlak güne düşen alâkasız bir madde
denetimi **0 gün uzaklıkla** susturuyor.
📌 `CLAUDE.md §11`: *"yuvarlak tarih yalnız yanlış değildir — çelişkiyi de
saklar."* Burada sakladığı şey **denetimin kendisi**.
⚠️ Dördüncü bir zayıf geçiş: `1737-07-01` Niş ↔ *Özi'nin düşüşü* (12 g) —
aynı savaş, başka cephe. Alâkasız demiyorum, **zayıf** diyorum.

⇒ **`2i`nin gerçek borcu 4'ten büyük olabilir** (4 açık + 3 yanlış geçiş).
**Ama tavan önermiyorum** — o koordinatörün kararı, şartname öyle diyor.

---

## 5. `2i`nin `2s`den YAPISAL FARKI — kayda geçiyorum

`denetle.py:3122` okundu:

```python
kir_i, acik_i = degismez2(Y_cekirdek, O, ("isg",))     # 2i
kir_s, acik_ham = degismez2(Y_cekirdek, O, ("s",))     # 2s
acik_s, disi_s = kapsam_disi(Y, acik_ham)              # ← 2s'de VAR
```

**`2i`de `kapsam_disi` ÜÇÜNCÜ SINIFI YOK.** `2s` bir kırılmayı
*"maddesi bu kronolojide OLAMAZ"* diye ayırabiliyor; `2i` ayıramıyor.

Bugünkü dört açık için bu **fark yaratmıyor** — dördü de Osmanlı
küresinin tam içinde (Niş · Semendire · Eflak-Boğdan · Bosna), yani
`kapsam_disi` olsaydı da hiçbiri oraya düşmezdi. **Bilgi olarak
kaydediyorum, öneri olarak DEĞİL.**

---

## 6. NE İSTİYORUM

1. **Karar sende:** dört açığın üçü (`1737-10-01` · `1789-10-13` ·
   `1834-01-01`) yalnız **üç madde** yazılarak kapanır; dördüncüsü
   (`1878-09-18`) **bir madde** ile (Bihaç'ın düşüşü = Bosna işgalinin
   tamamlanması). Kronoloji dosyaları bende değil — kim yazacak?
2. **Aksan kusuru (`_madde_yeri_aniyor`) `arac/` işidir ve koşu canlı.**
   Düzeltmedim, düzeltilmesini de ben zamanlayamam. Ama etkisi `2i` ile
   sınırlı değil: **`Değişmez 2`nin ⚠️ satırı** da bu fonksiyonu
   kullanıyor, yani orada da *"madde bu yerlerden BAHSETMİYOR"* uyarısı
   aksanlı adlarda **haksız yere** basılıyor olabilir. Ölçmedim.
3. **Üç yuvarlak-tarih yanlış geçişi** (`1538` · `1539` · `1806-01-01`)
   ayrı bir kalem mi, yoksa `2i` borcunun içinde mi sayılacak — senin
   kararın.

---

## ÖZET DAMGALAR

```
TUTTU        2i = 26 kırılma / 4 açık            (iki bağımsız sayım)
TUTTU        dört açık günün kimliği             (birebir)
ÇÜRÜDÜ       "iki yeni gün altı yeni dosyadan"   → yerlesimler.js, aaadabf
TUTTU        24 → 26 mekanizması                 (Bükreş+Yaş isg: eklendi)
ÖLÇMEDİM     önceki 24'ün DOĞRUDAN ölçümü        (çıkarımla bulundu)
ÖLÇÜLEMEDİ   26 günün alâka taraması             (alet aksana ve bölge
                                                  adına kör — ihbar §4)
TUTTU        3 gün "madde YOK" · 1 gün "madde VAR ama 51 g uzakta"
ÖLÇMEDİM     1878-09-18 tarihinin kaynak doğruluğu
```
