# 🔴 DÜZELTME — `harita:` BOYAMIYOR. Bugün üç kararın çerçevesi yanlıştı.

> RENK oturumu (Opus 5) buldu, koordinatör bağımsız doğruladı.
> **Bu, bugünün en pahalı kavram hatası.**

---

## 1. ÖLÇÜM

```
uret_petek.py:50    from renkler import BOYALAR
uret_petek.py:272   if sp["d"] not in BOYALAR:      ← BOYAYAN SATIR BU
```

Motor, **yerleşimin kendi `d:`/`v:`/`s:` değerini** doğrudan `BOYALAR`da
arıyor. `devletler.js`'in `harita:` alanına **hiç bakmıyor.**

```
d:"iran"        326 kayıt   (yerlesimler 317 · asya 6 · ortaasya2 3)
d:"safevi"      201 kayıt
d:"afsar"         0
d:"zend"          0
d:"kacar"         0
d:"zaporojye"     0
```

---

## 2. `harita:` NE İŞE YARIYOR — ve ne işe yaramıyor

```
✅ DENETİM KÖPRÜSÜ    denetle_anakronizm.py · renk_olc.py ayni_anahtar()
                      "bu devlet kaydı hangi palet anahtarına karşılık gelir"
❌ BOYAMA             motor bu alanı okumuyor
```

⇒ Bir kimliğin **haritada görünmesi** için gereken zincir:
```
① en az bir yerleşimin d:/v:/s: zincirinde o kimlik geçmeli   ← VERİ işi
② BOYALAR[o kimlik] var olmalı                                 ← RENK işi
③ devletler.js harita: alanı                                   ← yalnız DENETİM
```
**①+② olmadan ③ hiçbir şey çizmez.**

---

## 3. 🔴 BUGÜN ÜÇ KARARIN ÇERÇEVESİ BUNA GÖRE DÜZELİYOR

### ① *"Dört `harita:` değeri taşınınca çizilecek"* — YANLIŞTI

```
arnavutluk-bagimsiz → harita:"arnavutluk"   d:"arnavutluk"    9 kayıt · palet VAR
nogay               → harita:"nogay"        d:"nogay"         2 kayıt · palet VAR
kazak-hanligi       → harita:"kazak-hanligi" d:"kazak-hanligi" 3 kayıt · palet VAR
```
Üçü de **zaten boyanıyordu.** Taşıma **denetimi** düzeltti, haritayı değil.

📌 İş **doğruydu ve gerekliydi** — `denetle_anakronizm.py` ile
`ayni_anahtar()` artık doğru muhakeme yapıyor. **Yanlış olan benim
gerekçemdi:** *"harita boş kaldı"* dedim, oysa harita doluydu; **denetim**
kördü.

### ② *"`zend` → `harita:"safevi"` yazılsın"* — İKİ KEZ YANLIŞTI

VERİ KİMLİK 2 bunu **kullanıcı kısıtı** gerekçesiyle reddetti ve haklıydı.
Ama ikinci ve daha temel gerekçe şuymuş: `d:"zend"` **sıfır kayıt** —
yazılsa **hiçbir şey boyanmazdı.**

### ③ *"`afsar` ile `kacar` 7 yıl ayırt edilemiyor"* — YANLIŞTI

Ölçüm (1791-06-15, İran kutusu lon 44-64 / lat 25-40):
```
iran 111 nokta · osmanli 22 · benihalid 5 · suud 2 · umman 2 · turkmen 1 · buhara 1
```
**Tek gövde var.** *"Ayırt edilemiyorlar"* demek iki gövde varsaymaktı;
**ayrım hiç çizilmemiş.**

🔴 **Ve yazsaydık ZARAR verirdik:** `harita:"afsar"`/`"kacar"` ayrımı
`ayni_anahtar()` denetimini **susturur**, harita bir piksel değişmezdi.
⇒ Bugün açtığımız tek dedektörü, işaret ettiği sorunu çözmeden kapatmış
olurduk.

---

## 4. 📌 DERSİN KENDİSİ — ve niçin bugün ÜÇÜNCÜ kez

Bugün `kimlikler.js` tam bu yüzden emekli edildi: **yazılıyordu, okunmuyordu.**
Sonra ben aynı hatayı `harita:` alanıyla yaptım — **okunuyor, ama başka soru
için.**

```
kimlikler.js   HİÇ okunmuyor          → emekli edildi
harita:        okunuyor, DENETİMDE    → boyama sandım
```

⇒ **"Bu alan okunuyor mu" yetmez: KİM, HANGİ SORU İÇİN okuyor?**
Bir alanın tüketicisi olması, senin sandığın tüketicinin olması demek değil.

⚠️ Ve teşhis yöntemi belli: `grep` ile *"bu dosya okunuyor mu"* diye sordum;
sorulması gereken **`uret_petek.py` hangi anahtarla `BOYALAR`a bakıyor**
idi. **Tüketiciyi değil, TÜKETİM NOKTASINI ölç.**

---

## 5. ⇒ İRAN'IN GERÇEK İŞİ: RENK DEĞİL VERİ

```
bugün      d:"iran" 326 dönem, 1281→1923, TEK anahtar
gereken    o dönemlerin afsar (1736-1796) · zend (1751-1794) ·
           kacar (1789-1923) arasında BÖLÜNMESİ
```
Bu `data/yerlesimler.js` işi — **RENK'in dosyası değil.** Renk o bölmeden
**sonra** anlamlı; şimdi yazılırsa ölü palet kaydı olur.

🟡 **Atanmadı.** Bir veri oturumu gerektiriyor.

### Aynı sınıf: `zaporojye`
MOTOR 2 ölçtü: `d:"zaporojye"` **0 kayıt.** Renk + `harita:` verilse bile
gövde çıkmaz (`uret_petek.py:1556` — `s:` kaydı olmayan kimlik atlanır).
⇒ Üçüncü halka (**en az bir yerleşimin zincirine Dinyeper dönemi**) sahipsiz.
