# KIMLIK-KID-0907 — 24 `k` metni · 50 dönem bağlandı · ve BİR MOTOR SATIRI

**Oturum:** KIMLIK-KID-0907 (`local_9927df76-31b4-41c3-92a0-d0ac098c3979`)
**Damga:** 7 Eylül 2026 · **ANLIK GÖRÜNTÜ:** koşu 8 sürerken (11:17:46)
**Cins:** ÖLÇÜM + YAMA — `data/*.js`e **dokunulmadı**, yama `denetim/` altında.

---

## 🔴🔴 ÖNCE MANŞET: YAMAM TEK BAŞINA ETİKETİ DEĞİŞTİRMİYOR

Şartnamenin bitiş ölçütü *"mükerrer etiket AZALMALI"*. Ölçüldü — **veri
tek başına bunu sağlayamaz:**

```
uret_petek.py:4823    _ad = _dn.get("k") or _dn.get("kid")
                                  └── `k` ÖNCE gelir
```
⇒ `k`si **olan** bir döneme `kid` yazmak çapayı **hiç değiştirmez.**

**63 kesitte tâbi etiket çapası:**
```
① BUGÜN            motor `k or kid` · yama YOK      382
② YAMA TEK BAŞINA  motor `k or kid` · yama VAR      382    +0   🔴
③ YAMA + MOTOR     motor `kid or k` · yama VAR      321   −61   🟢
```
Somut, `1830-06-15`:
```
BUGÜN       3 çapa:  Kavalalı hanedanı | Mısır (Kavalalı) | Mısır valiliği (Kavalalı hanedanı)
YAMA+MOTOR  1 çapa:  misir-kavalali
```

⚠️ **VE ③'ÜN BİR TUZAĞI VAR:** `kid` bir **slug**tur; grubu `kid`e çevirmek
ekrana **`misir-kavalali`** yazdırır. Doğru biçim: **gruplama `kid` ile,
GÖSTERİM künyenin `ad`ı ile.**
```
misir-kavalali      → Mısır Kavalalı Hanedanı
konstantin-beyligi  → Konstantin Beyliği (Ahmed Bey)
```
📌 `CLAUDE.md`: *`devletAdi()` yalnız `d.id` okuduğu için 30 gövde ham slug
gösteriyordu* — birebir aynı tuzak.

🔴 **Motor benim dosyam değil ve koşu sürüyor ⇒ DOKUNMADIM.** Karar
koordinatörün; ölçüm burada.

---

## ① TABAN — devralmadım, ölçtüm

```
`v:` dönemi 429 · statu 421 · k 373 · kid 291        🟢 şartnameyle BİREBİR
```
🟡 **İki sayı ayrıştı** ve sebebi ölçüldü:
```
şartname   ARAŞTIRMA 81 · 26 farklı `k` metni
ölçüm      ARAŞTIRMA 78 · 23 farklı `k` metni   (+ 4 MEKANİK hâlâ bekliyor)
```
Sebep: şartname **yama ÖNCESİ** sayıları taşıyor. Ve bunu doğrulayan şey
koordinatörün **kendi commit mesajı**: `2127303 … çakışma 26 -> 23`.
📌 `§11`: *kendi ödediğin borcu, kaydını okumadan yeniden iş sanabilirsin* —
burada zararsız, çünkü tabanı kendim ölçtüm.

### 🔵 VE 4 MEKANİK TAMAMLAMA GERİDE KALMIŞ — sebebi ölçüldü
`Süveyş · Kusayr · Sefâce · Tûr (Sînâ)` → `Kavalalı hanedanı` → `misir-kavalali`.
**Sebep dosya değil** (ölçtüm: eksikler ve tamamlananlar **aynı dosyalarda**).
Sebep, mekanik sözlüğün **tam dizgiye** bakması: `Mısır (Kavalalı)` eşleşti,
`Kavalalı hanedanı` eşleşmedi. Bu dördü yamama **dâhil**.

## ② TASNİF — 24 metin · 82 dönem

```
🟢 BAĞLANDI        16 metin · 50 dönem    → yamada
🔵 SORU (DURUM)     5 metin · 23 dönem    → `kid` UYDURULMADI
🔴 BLOKE            3 metin ·  9 dönem    → künye yok / model sorunu
```

### 🟢 BAĞLANAN 16
| ×n | `k` metni | `kid` |
|---|---|---|
| 11 | Ahmed Bey'in Konstantin beyliği | `konstantin-beyligi` |
| 9 | Mekke Şerifliği | `mekke-serifligi` |
| 5 | Ahmed Bey'in Konstantin beyliği (Osmanlı adına) | `konstantin-beyligi` |
| 5 | Orta Macar Krallığı (Tököli İmre) | `orta-macar-kralligi` |
| 4 | Kavalalı hanedanı | `misir-kavalali` |
| 4 | Dejanović Prensliği (Kostadin-ili) | `dejanovic-prensligi` |
| 3 | Erdel Prensliği ⚠️ | `erdel` |
| 1 | Kumuk şamhallığı · Kaheti · İmereti · Dubrovnik · Mısır valiliği · Mısır Hidivliği · Arvanid ×2 · Munkács | (sırasıyla) |

⚠️ **`Erdel` KISMÎ:** künye 1570-1711, dönem **1541**-1687 ⇒ 1541-1570 künyenin
**dışında**, ve o dilim tarihen Zapolya'nın Doğu Macar Krallığı'dır (aşağıda).

### 🔵 SORU — POLITY DEĞİL, DURUM (`kid` uydurulmadı)
```
×11  Osmanlı hükümranlık iddiası (ocaklık lağvedildi)   Fransız işgali sonrası
                                                        HUKUKÎ iddia — yerde polity YOK
×6   Sahra vahalarının özerk idaresi                    merkezsiz vaha idareleri
×3   Mısır ordusu (işgal)                               polity `misir-kavalali` AMA
                                                        ilişki VASSALLIK DEĞİL, İŞGAL
×2   Kabiliye'nin fiilî özerkliği                       bir DURUM
×1   manastır harâcı                                    bir VERGİ ilişkisi (Patmos)
```
🔵 **SORUM:** bunlar etiketsiz mi kalsın, yoksa `statu` bir varyantla mı
ifade edilsin? ×3 `Mısır ordusu (işgal)` ayrıca **katman** sorusu: işgal
`v:`de mi durmalı, `isg:`de mi?

### 🔴 BLOKE — 3 metin
```
×5  Macaristan (Zapolya vasal krallığı)   🔴 KÜNYE YOK — yeni künye gerek
×3  Boğdan (Cenûbî Besarabya)             🔴 MODEL: dönem İKİ polity'ye yayılıyor
×1  eski Memlûk beyleri (Osmanlı desteğiyle)  🔴 künye adayı YOK
```

#### 🔴🔴 ZAPOLYA — ve alet beni YANLIŞ KÜNYEYE bağlıyordu
Aday üreticim `Macaristan (Zapolya vasal krallığı)` → **`macaristan-habsburg`**
önerdi (tek 🟢 aday). **Uygulasaydım Osmanlı'ya tâbi toprağı RAKİBİNİN tacıyla
etiketleyecektim.** Künyenin kendi özeti çürütüyor:
> *"Habsburg hanedanının … sürdürdüğü … **Kraliyet Macaristanı**"*

Zapolya'nın Doğu Macar Krallığı Habsburg'un **rakibi** ve Osmanlı'nın
**tâbisi**. Tarandı: `devletler.js`te Zapolya künyesi **YOK**.
📌 `§4`: *ad benzerliği eşanlam DEĞİLDİR* — ve bu, şartnamenin uyardığı
tuzağın birebir gerçekleşmiş hâli.

#### 🔴 BOĞDAN — `kid` bunu ÇÖZEMEZ
```
dönem   1856-03-30 → 1878-07-13   (İsmail · Kahul · Bolgrad)
bogdan  künye 1359 → 1859-01-24
romanya künye      1859-01-24 → 1881
```
Tek bir `v:` dönemi **iki polity'ye** yayılıyor. Tek bir `kid` bunu ifade
edemez; dönemin **1859-01-24'te BÖLÜNMESİ** gerekir — bu bir `kid`
tamamlaması değil, bir **veri düzeltmesi**.

## ③ YAMA VE SINAVI

`denetim/yer_yama_kid_kimlik_0907.js` — **44 yerleşim · 50 dönem** · tam `v:`
dizisiyle, canlı veriden üretildi.
```
🟢 node --check                       GEÇTİ
🟢 canlıda bulunmayan yerleşim        0
🟢 dönem SAYISI değişen               0     (sessiz kayıp yok)
🟢 `kid` DIŞINDA değişen alan         0     (f · t · k · statu · kaynak · not KORUNDU)
🟢 mevcut `kid` EZİLEN                0
🟢 yeni yazılan `kid`                50
```
**ETKİ:** `kid` kapsaması **291 → 341 / 429** (%67,8 → **%79,5**).
Kalan 88 = k'li 32 + **adsız 56**.

⚠️ Ad alanı `§7`ye uygun: dosya `yer_yama_kid_kimlik_0907.js` →
değişken `window.YER_YAMA_KID_KIMLIK_0907`.

## ④ ②c — 56 ADSIZ dönem
Sayı **doğrulandı: 56** (ne `k` ne `kid`). Kod onları zaten eliyor, etiket
üretmezler. **Araştırılmadı** — şartname kapsam dışı bırakıyor.
⚪ `ölçmedim`: bu 56'nın hangi coğrafyada yığıldığını.

## ⑤ KENDİ KUSURLARIM — ikisi de ölçümle yakalandı
```
① ÜÇ HANELİ YIL: `dubrovnik` f:"700-01-01" · kn["f"][:4] = "700-"
   ⇒ aletim «pencere TUTMUYOR» dedi, oysa dönem künyenin TAM İÇİNDE.
   🔴 Bu, BUGÜN AYNI OTURUMDA İKİNCİ kez ("543-01-01"[:4] · `nube`).
   Dilimleme DEĞİL regex. Ve `pad()` düzeltmem İŞE YARAMADI çünkü hasar
   BİR ADIM YUKARIDAYDI — yıl zaten bozulmuş hâlde saklanıyordu.
② «MÜKERRER grup» ölçütüm yama sonrası +11 gösterdi ve bu bir GERİLEME
   DEĞİL, ölçütün artefaktı: bağlanan metinler artık tek grupta toplandığı
   için o grup «çok metinli» sayılıyor. Gerçek kazanç «ayrı polity grubu»
   satırında: 354 → 321.
```
📌 ②'yi gizlemek kolaydı (−33 rakamı yazıp geçmek). `§11`: *ölçüm doğru,
çıkarım yanlış* — ve iki satırı ayırmak tam bunun için.

## ⑥ ÖLÇMEDİM
```
⚪ `Mısır Hidivliği` → `misir-kavalali` bağı KAYNAĞA sorulmadı — künye adı
   ve penceresi tutuyor, ama Hidivlik bir UNVAN değişikliği; aynı polity
   sayılması bir KONVANSİYON kararı, ölçüm değil
⚪ 56 adsız dönemin coğrafî dağılımı
⚪ Yamanın `denetle.py` üzerindeki etkisi — `kid` hiçbir değişmezin evreninde
   değil, ama SINANMADI
```
