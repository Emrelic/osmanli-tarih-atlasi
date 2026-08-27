# BULGU — BAĞLAMA SINAVI

**DEĞİŞMEZ 7 ENKLAV** · 27 Ağustos 2026 · ORHANGAZİ sevkiyle
Sınanan: `data/yerlesimler_kafkas_duzeltme.js` · `data/yerlesimler_ek_korfez.js`
**Hiçbir dosya bağlanmadı**; `girdi.py` kilitli ve zaten bağlama koordinatörde.
Ölçüm **simülasyonla** yapıldı: dosyalar ayrıca yüklenip mevcut külliyata eklendi.

---

## 0. HÜKÜM — tek bakışta

| dosya | kayıt | hüküm |
|---|---:|---|
| `yerlesimler_ek_korfez.js` | 1 | 🟢 **BAĞLANABİLİR** — ama **iki tavan yükseltilmeli** |
| `yerlesimler_kafkas_duzeltme.js` | 19 | 🔴 **BAĞLANAMAZ** — iki SERT engel, yükleme anında patlar |

---

## 1. 🔴 KAFKAS DOSYASI — bağlamak motoru YÜKLEME ANINDA durdurur

### Engel ①: AD ÇAKIŞMASI — `girdi.py` birleştirmiyor, **ValueError fırlatıyor**

```python
# arac/girdi.py:898
if y["ad"] in nereden:
    raise ValueError(
        f"AD ÇAKIŞMASI: '{y['ad']}' hem {nereden[y['ad']]} hem {ad} "
        f"içinde. Yerleşim adı benzersiz olmalı (VERI-YAPISI.md).")
```
**Ölçüm: 19 kaydın 19'u da mevcut bir yerleşimle AYNI ADI taşıyor.**
Kars · Ardahan · Derbend · Kutaisi · Gence · Revan · Hemedan · Kirmanşah ·
Gümrü · Eçmiyadzin · Digor · Arpaçay · Iğdır · Başkale · Çaldıran · Özalp ·
Yüksekova · Doğubayazıt · Kasr-ı Şîrîn

⇒ Dosya `GIRDI_DOSYALARI`ya eklenirse `girdi.yukle()` **ilk çakışmada
ValueError atar**. Motor başlamaz — 3,5 saatlik koşu kaybı bile olmaz, koşu
hiç başlamaz. **En ucuz cinsten bir felaket, ama yine de felaket.**

### Engel ②: KOORDİNAT YOK — ve `VARSAYILAN` bunu dolduramaz

**19 kaydın 19'unda `lat`/`lon` alanı YOK.** `girdi.py`nin `VARSAYILAN`
sözlüğünde `tur · g · k · m · s · d · v` var, **`lat`/`lon` YOK** — yani
eksik koordinat sessizce doldurulmaz.
⇒ Kayıt bir şekilde yüklense bile koordinat isteyen her aşama `KeyError: 'lat'`
ile düşer. **Bunu varsaymadım, YAŞADIM:** simülasyonda kendi `degismez7`im
tam bu satırda çöktü.

### 🟢 VE SEBEBİ ANLAŞILDI — dosya YANLIŞ TÜRDE

19 kaydın hiçbiri **yeni yerleşim değil**; hepsi **var olan şehirlerin dönem
düzeltmesi**. Yani içerik bir *yerleşim dosyası* değil, bir *yama*:
```
yerlesimler_*.js   YENİ NOKTA tanımlar · lat/lon ZORUNLU · ad BENZERSİZ olmalı
yer_yama_*.js      VAR OLAN kaydı düzeltir · koordinat gerekmez · ad EŞLEŞMELİ
```
⇒ **Öneri: dosya `data/yer_yama_kafkas.js` → `window.YER_YAMA_KAFKAS` olarak
yeniden adlandırılsın** ve `girdi.py`ye değil, uygulayıcı elden geçirsin —
tıpkı `yer_yama_hayalet.js` · `yer_yama_iran.js` ailesi gibi.
📌 Bekletme gerekçesi olarak kayıtlı olan *"sirvansah rengi yok"* hükmünü siz
zaten çürütmüştünüz; **gerçek engel renk değil, DOSYA TÜRÜYMÜŞ.**

### İçerikten çıkan tek denetim borcu
Kayıtlar bir şekilde uygulanırsa **Değişmez 4 · 8 → 9**:
```
YENİ HAYALET: Derbend · `iran` · 1281-01-01..1509-05-17
              "devlet 1925-12-12'te kuruldu, dönem 416,6 yıl ÖNCE bitiyor"
```
`iran` künyesi **Pehlevî İran'ıdır**; ortaçağ için kullanılamaz. Uygulanmadan
önce bu kimlik `ilhanli`/`safevi`/`akkoyunlu` gibi doğru künyeyle
değiştirilmeli.

---

## 2. 🟢 KÖRFEZ DOSYASI — bağlanabilir, bedeli iki tavan

Tek kayıt: **Katar Yarımadası (iç, dolgu)** · `tur:"bolge"` ·
`kasitli_bosluk:true` · `bos:"devletsiz"` · `lat/lon` **VAR** · ad **benzersiz**.

| sınav | sonuç |
|---|---|
| ① sözdizimi | ✓ `node --check` temiz |
| ② ad alanı | ✓ `window.YERLESIMLER_EK_KORFEZ` — çakışma yok, dosya adıyla uyumlu (§7) |
| ③ 3 km mükerrer | ✓ **0** — 3 km içinde başka nokta yok |
| ④ renk | ✓ **0 borç** — dönemi yok, kimlik kullanmıyor |
| ⑤ Değişmez 1 | 🟡 **214 → 215** ⇒ `BEKLENEN_SAHIPSIZ` yükseltilmeli |
| ⑥ **Değişmez 2** | ✓ **523/AÇIK 0 → 523/AÇIK 0** · doğurduğu kırılma günü **0** |
| ⑦ Değişmez 4 | ✓ 8 → 8 |
| ⑧ Değişmez 7 | 🟡 **486 → 488** ⇒ `BEKLENEN_ENKLAV_SORGU` yükseltilmeli |

🔴 **Değişmez 2 borcu SIFIR** — koordinatörün en pahalı saydığı kalem temiz
çıktı, çünkü kayıt bir **dolgu noktası**: hiç dönem taşımıyor, dolayısıyla hiç
kırılma doğurmuyor.

### Bağlama reçetesi — iki satır
```
arac/denetle.py   BEKLENEN_SAHIPSIZ        214 → 215
                  BEKLENEN_ENKLAV_SORGU    486 → 488
```
⚠️ İkisi de **benim dosyam** (`denetle.py`) ama **yazmadım**: bağlama sizde ve
tavanı bağlamadan önce yükseltmek, olmayan bir borcu kayda geçirmek olur.
**Söyleyin, aynı dakikada yazarım.**

---

## 3. ÖNGÖRÜ KARNESİ — `M-1336`, ölçümden önce yazıldı

| # | öngörü | ölçüm | sonuç |
|---|---|---|---|
| ① | `girdi.py` aynı adı **EZER** (2606→2607) | **EZMİYOR — ValueError atıyor** | 🔴 **ÇÜRÜDÜ** |
| ② | 19'unun 19'u 3 km'de eşleşir | **ölçülemedi** (koordinat yok) | ⚪ |
| ③ | renk borcu 0 | 0 | 🟢 tuttu |
| ④ | hayalet 8 → **10-25** | 8 → **9** | 🟡 mekanizma tuttu (`iran`), **sayı çürüdü** |
| ⑤ | yeni sahipsiz **0** | **+1** (Katar) | 🔴 **ÇÜRÜDÜ** |
| ⑥ | D2 **5-40** yeni açık | **0** | 🔴 **ÇÜRÜDÜ** |
| ⑦ | D7 değişimi ±5 | +2 | 🟢 tuttu |

**Üç tuttu · üç çürüdü · biri ölçülemedi.**

📌 Ve bilgiyi taşıyan yine **çürüyenler** oldu:
- **①** en değerlisi: ben "ezer mi ekler mi" diye sordum, ikisi de yanlıştı —
  `girdi.py` **üçüncü bir şey** yapıyor ve bu, bağlama kararını tek başına
  belirledi. *İki şık arasında seçim yaparken üçüncü şıkkı sormamak, sorunun
  kendisinde bir kusurdur.*
- **⑥** çürüdü çünkü kafkas dosyası **zaten bağlanamıyor**; D2 borcu ancak
  bağlanabilen bir dosya için anlamlı. Yani öngörüm yanlış evrende kuruluydu.
- **⑤** çürüdü çünkü `kasitli_bosluk:true` bir kaydın **muaf** olduğunu
  varsaymıştım; Değişmez 1 onu **sayıyor**, muafiyeti tavanla veriliyor.

⚠️ Ve mazeret sınırım `M-1336`da yazılıydı: ①·③·④ için *"mazeret yok"* demiştim.
① çürüdü ⇒ **mazeret aramıyorum**, varsayımım yanlıştı.

---

## 4. Ölçmediklerim

- **İçeriğin tarihsel doğruluğu ölçülmedi** — şartname zaten istemiyordu
  (*"TDV sınanmış" hükmü başka bir oturumun işi*). Yalnız `iran` kimliğinin
  **künye ömrüyle çeliştiğini** ölçtüm; bu tarihsel değil **yapısal** bir kusur.
- **Kafkas dosyasının 19 kaydının hangi düzeltmeyi getirdiği okunmadı** —
  bağlanamadığı için içerik farkı ölçmedim.
- **`girdi.py` çakışma davranışı KODDAN okundu**, canlı koşturarak
  denenmedi: dosyayı `GIRDI_DOSYALARI`ya eklemek `girdi.py`yi değiştirmek
  demekti ve o dosya **kilitli**. Çakışma sayısı (19) ise ölçüldü.
- **Şartnamedeki "34 şehir" sayısı tutmadı** — dosyada **19** kayıt var.
  Kaba sayım mı, dosya mı değişti: **ölçmedim**.
