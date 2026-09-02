# KOŞU SONRASI DEFTERİ — 2 Eylül 2026

> Koşu bitince **bu sırayla** yapılır. Sıra tesadüf değil; her adımın
> önceki adıma bağımlılığı yazılı. Koordinatör (1.MURAT) uygular.

## ⓪ ÖNCE DOĞRULA — "bitti" bir olaydır, bir tahmin değil
```bash
powershell -NoProfile -Command "if (Get-Process -Id 27596 -ErrorAction SilentlyContinue) {'CANLI'} else {'BITTI'}"
stat -c '%y  %s bayt' data/donemler.js      # damga 10:30'dan YENİ olmalı
tail -c 400 kosu_2eylul.log                 # "Doğrulama: … geçerli ✓" satırı
```
🔴 **Üçü de tutmadan sonraki adıma geçme.** PID bitmiş ama `donemler.js`
damgası eskiyse **koşu başarısız bitmiştir** — log okunur, yeniden koşulur.
📌 Ve bugün ölçüldü: PowerShell CPU'yu `29.061,2` diye basar — **nokta
BİNLİK ayırıcıdır.** "29 saniye" okumak koşuyu ölü sanmaya götürdü.

---

## ① ÖNGÖRÜYÜ ÖLÇ — koşuya dokunmadan, ilk iş
```bash
py arac/_tavan200_olc.py kosu_2eylul.log
py arac/denetle.py | grep -E "Değişmez 1 |Değişmez 1b|SONUÇ"
```
`denetim/ONGORU-TAVAN-200.md` yedi kalem damgalamış ve **kabul ölçütünü
önceden yazmış**:
```
🟢 KABUL   ① Gât↔Ubârî kapandı · ⑤ Değişmez 1 temiz · ④ < 3.397.649 km²
🟡 EMRE'YE ② Gât↔Murzuk tutmadı  ya da  ④ 4b mertebesinde
🔴 GERİ AL ⑤ bozuldu (Değişmez 1 kırmızı)  ya da  ① tutmadı
```
⚠️ **Mazereti sonradan yazma.** ①·④·⑤ için öngörü *"mazeret YOK"* diyor.
🔴 Ve `PUANLAMA KAPISI` satırının birimi **km²·DÖNEM**, km² değil —
öngörünün `2-15 M km²` bandı bu birimle **karşılaştırılamaz**.

---

## ② ÜÇ RENK — birlikte, ve SIRASI ÖNEMLİ
Reçeteler: `denetim/UYGULA-OK128-POLONYA.json` (üç kenar kısıt listesi) ·
`denetim/UYGULA-OK109-VARSOVA.json` · `denetim/UYGULA-OK127-4C.json`

```
künye 440  ·  BOYALAR 403
renksiz: varsova-dukaligi · kongre-polonyasi · transkafkasya(*)
(*) künyesi HENÜZ YAZILMADI — OK127'nin reçetesinden yazılacak
```

🔴 **`luba ↔ lunda` TUZAĞI BU İŞTE TEKRARLAYACAK — önlemi sıradadır:**
```
① ÜÇ KİMLİĞİ DE ÖNCE BOYALAR'a yaz (geçici değerle)
   ⇒ yoksa hangisi önce çözülürse ikincisi sözlükte OLMAZ,
     `if rk in BOYALAR` False döner, kısıt SESSİZCE ATLANIR
② sonra çöz
③ CANLI `assert`: beklenen her özel kısıt GERÇEKTEN kuruldu mu?
   kurulmadıysa çözücü DURSUN
④ çözüm SONRASI: hedef çiftler eşiği GERÇEKTEN geçiyor mu?
```
⚠️ ③ ve ④ **ayrı sınavlar**: biri kısıtın *kurulduğunu*, öteki *işe
yaradığını* ölçer.
🔴 **Ve `renkler.py`de CANLI `assert` YOK** — `:408` ve `:1082`
yorumlarındaki *"assert ile SINANDI"* güvencesi scratchpad'de yaşamış,
depoya hiç girmemiş. **O iki yorum damgalanacak:** *"SCRATCHPAD'de
yaşadı, DEPODA YOK"*. Assert'in evi `arac/renk_olc.py` (parmak izinde
DEĞİL, yazmak güvenli).

**Beklenen kısıt listesi — `assert`in girdisi:**
```
kongre-polonyasi ↔ rusya             ΔE ≥ 25   aynı sahne 101 y 9 a
varsova-dukaligi ↔ rusya             ΔE ≥ 25   aynı sahne 1807-1815
varsova-dukaligi ↔ kongre-polonyasi  ΔE ≥ 25   AYNI SAHNEDE DEĞİL ⇒ ELLE
```
🟡 `transkafkasya` ötekilerle **aynı sahnede değil** (1918 vs 1917/1815) —
OK128 ölçtü, OK127 doğruladı ⇒ aralarında kısıt gerekmiyor, sona konabilir.
⚠️ `rusya` #4f7d4f ve `almanya` #78d028 **ikisi de yeşil** ⇒ o köşede
üçüncü bir yeşil okunamaz olur, **yeşil bandı elenmeli.**

---

## ③ RENK ÖLÇÜMÜ — `§9`, VERİ DEĞİŞTİYSE ŞART
```bash
py arac/renk_olc.py
```
📌 *"Palet verinin fonksiyonudur"* — hiçbir renge dokunmadan, yalnız bir
dönem tarihi değişerek yeni çakışma doğabilir. Bugün veri **çok** değişti.

---

## ④ ÜRETİLEN ÖTEKİ ÇIKTILAR — `uret_petek`ten SONRA koşar
```bash
py arac/uret_devirler.py
py arac/uret_altlik.py
```
🔴 Bugün bir kez unutuldu ve yayın kapısı ikisini de **BAYAT** damgaladı.

---

## ⑤ DENETİM + YAYIN KAPISI
```bash
py arac/denetle.py
py arac/denetle_yayin.py
```
Bugün kapanan: `1b` ✓0 · `2i` ✓3 · `4` ✓8. Açık kalan: **`4c` 286**
(beklenen 280) ve **mükerrer madde 2 çift** — ikisinin de reçetesi
`denetim/` altında, ama **`4c`nin 11 kaydı `transkafkasya` künyesine
bağlı**, yani ②'den sonra yeniden ölçülecek.

---

## ⑥ YAYIN — ve SIRA BOZULMAZ
```bash
py arac/surum_damgala.py
git add -- <dosyalar> && git commit -F <mesaj> -- <dosyalar> && git push
```
🔴 **KOŞU BİTER → YAYINLA → BAĞLA → YENİ KOŞU.**
Bugün bu sıra bir kez bozuldu (önce bağladım) ve kapı `✗ YAYIN BAYAT`
deyip durdurdu. **Kapı beni yakaladı, ben değil.**

---

## ⑦ YAYINDAN SONRA — biriken bağlama borcu
Bunlar `arac/girdi.py`ye dokunuyor ⇒ **koşu yokken** yapılır:
```
KUYRUK_DOSYALARI'na   data/yerlesimler_amerika3.js   (AMERIKA-0902, 25 kayıt)
                      ⇒ karar KUYRUK: 2s 70'te kalır, borç kendi
                        sayacıyla görünür kalır (çekirdeğe alınsa
                        85/121 olur ve borç tavanın içinde ERİR)
BILINEN_ALANLAR'a     `ikiz` (4 kayıt yerlesimler.js'te BEKLİYOR)
                      `not`  (bugün 0 kayıt, ama S121'in düzeltmesi
                              artık yazıyor — inmeden ekle)
```

---

## ⑧ SONRA — açık kalemler, sahipleriyle
```
transkafkasya künyesi + 5 kayıt zinciri   OK127   (reçete sürüm 2 hazır)
1795-1807 üçüncü Polonya parçası          OK128   (prusya künyesi YOK)
mükerrer madde 2 çift                     OK122   (teslim etti)
2s'in 75 açığı — DÖRT KOVA                S120    (kuruluş günü ≠ el değiştirme)
2t'nin 9 gerçek kusuru                    S122    (8'i cins gereği, kusur değil)
1c'nin 7 belgesi                          S123    (7'sinin de belgesi BAŞKA DOSYADA)
dört bölge araştırması                    OK125 · OK120 · S129 · AMERIKA-0902
```

---

## 🔴 VE BUGÜNÜN EN PAHALI DERSİ — sevk yazarken
Bugün **dört** sevk öncülü işçiler tarafından çürütüldü, ve dördü de
**bayat bir kayıttan** geliyordu (`HUKUM-OK110.json`). Üç iş boşa açıldı
(Trakya · Uzunyayla · Polesya) ve üçü de *"borç zaten ödenmiş"*ti.
OK125 bugün dördüncüsünü ölçtü: Afrika'da *"bariz eksik"* sanılan 95
adayın **44'ü atlasta zaten varmış**.
```
⇒ Bir kalemi işe dönüştürmeden ÖNCE:  git log  (on saniye)
⇒ Sevke yazılan her öncülün yanına:   ÖLÇTÜM | DEVRALDIM-DOĞRULANMADI
```
