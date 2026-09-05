# `napoli` — ve `4d`nin YARISININ ne olduğu

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2869 · 5 Eylül 2026
> 🔴 **HÜKÜM YOK, SAYI.** Ve ⑤. şart ilk adımda karşılığını verdi.

---

## ⑤ ŞART — 24 kayıt kaç ayrı gün? **BİR.**
```
`napoli` dönemleri: 25
🔴 BENZERSİZ BAŞLANGIÇ GÜNÜ: 2
   `1281-01-01` → 24 nokta
   `1481-09-10` →  1 nokta
```
⇒ Yirmi dört kayıt **tek bir güne** bağlı. Ve o gün **atlasın pencere
başı.**

## 🔴 VE O GÜNÜ 231 KİMLİK KULLANIYOR
```
`1281-01-01`i başlangıç yapan: **231 kimlik · 2362 dönem**
ilhanli 197 · bizans 167 · memluk 119 · altinorda 116 · yuan 85 ·
hafsi 75 · almanya 72 · venedik 53 …
```
⇒ `1281-01-01` bir tarih değil, **atlasın kendi sınırı.**
📌 `CLAUDE.md`: *"pencere uçları bir ÖLÇÜM DEĞERİ değil, bir SINIR
İŞARETİDİR; her sayımda ayrıca elenir."*

---

# 🔴🔴 GENELLEME: `4d`NİN **%49'U** PENCERE BAŞI

Soruyu `napoli`den bütün kovaya taşıdım:
```
`4d` TOPLAM                                        467 kayıt
🔵 dönem `1281-01-01`de başlıyor (pencere başı)     229   (%49,0)
🔴 başka bir günde başlıyor (gerçek erken)          238   (%51,0)
```

## 🔵 PENCERE BAŞI KÜMESİ — ve KÜNYEYE UZAKLIĞA GÖRE
```
napoli        24   künye 1282-03-30    **15 AY**      ← EN KÜÇÜK
eflak         13   künye 1330-01-01     49 yıl
bogdan        14   künye 1359-01-01     78 yıl
bosna         14   künye 1377-01-01     96 yıl
milanoduka     6   künye 1395-05-11    114 yıl
adal          37   künye 1415-01-01    134 yıl
arnavutluk     2   künye 1443-01-01    162 yıl
ispanya        7   künye 1479-01-20    198 yıl
somali        26   künye 1500-01-01    219 yıl
isvec         42   künye 1523-06-06    242 yıl
avusturya      4   künye 1526-08-29    245 yıl
toskana        2   künye 1532-01-01    251 yıl
lehistan      25   künye 1569-07-01    288 yıl
sardinya       2   künye 1720-08-02    **439 yıl**    ← EN BÜYÜK
```

## 🔴 VE BURADA BİR TUZAK VAR — "pencere başı" TEK BAŞINA MAZERET DEĞİL
İlk refleksim *"229'u da muaf tut"*tu. **Yanlış olurdu:**
```
napoli    1281'de Anjou hâkimiyeti VARDI (ad 1282'de ayrıştı)
          ⇒ pencere başı MEŞRU, kimlik 15 ay anakronik
sardinya  1281'de "Sardinya Krallığı (Savoya)" DİYE BİR ŞEY YOK
          ⇒ pencere başı MAZERET DEĞİL, 439 yıllık ANAKRONİZM
```
⇒ ***İkisi veride BİREBİR AYNI görünüyor*** (`f: 1281-01-01`, künye
sonra başlıyor) **ama biri sınır işareti, öteki hata.**
🔴 Yani `denetle.py`ye *"`f == ATLAS_BASI` ise muaf tut"* diye simetrik
bir kural eklemek **439 yıllık anakronizmi gizlerdi.** Kod bugün künye
tarafında bu muafiyeti yapıyor (`if kf and kf > ATLAS_BASI`) ama dönem
tarafında yapmaması **doğru.**

---

## ⇒ `napoli` HÜKMÜ: KUSUR YOK — ve üç kovadan üçüncüsü
Sevkin üç kovası:
```
① künye dar        ✗ — künye `f:` akademik kaynaklı (kendi `kaynak:`
                       alanı söylüyor: "standart akademik kaynak
                       (1282/1734/1806/1815, TDV'de yok)")
② veri erken       ✗ — 15 ay, ve o gün atlasın SINIRI
③ ikisi de doğru,  🟢 künye KRALLIĞIN ADININ doğuşunu ölçüyor
   farklı şey         (Sicilya Vespers, 30 Mart 1282);
   ölçüyor            veri TOPRAĞIN o gün kimde olduğunu.
                      1281'de Anjou'nun elindeydi — adı henüz
                      "Napoli Krallığı" değildi.
```
⇒ **`zend`in üçüncü kovası** ile aynı: *hânedan/ad ömrü ≠ tasarruf
sürekliliği.* Fark şu ki `zend`de 3 yıl, burada **15 ay** ve tolerans
400 gün — kıl payı aşıyor.

🔴 **ÖNERİM: DOKUNMA.** 15 aylık bir anakronizm için ne künye
değiştirilir ne veri; ve `1281-01-01` zaten 2362 dönemin ortak sınırı.
⚠️ Değiştirilecekse **tek doğru yol künyenin `f:`ini 1281'e çekmek
DEĞİL** (o akademik kaynağı silerdi) — toleransı ya da beklentiyi
gözden geçirmektir. **Ve o benim kalemim değil.**

---

## 🔴 ASIL İŞ NEREDE: 238 "GERÇEK ERKEN"
```
zend             131   ← BAŞKA OTURUMDA
umman             18   künye 1624-01-01
ispanyol-peru     13   künye 1542-11-20
lehistan          12   ← 19'u yazıldı, bunlar KALAN
sur-hanedani       9 · bengal-sultanligi 8 · sih-imparatorlugu 7 ·
siyam-chakri 5 · yeni-ispanya 5 · babur 4 · qing 4 · meysur 3
```
⇒ `zend` çıkınca **107 kayıt** kalıyor ve hiçbiri 20'den büyük değil.
📌 Yani `4d`nin gerçek iş yükü sanıldığından **çok küçük**: 467'nin
229'u sınır işareti, 131'i tek bir künye, kalan **107'si dağınık.**

## ÖLÇMEDİKLERİM
```
OKUMADIM   TDV `napoli` — künyenin kendi `kaynak:` alanı zaten
           "TDV, 1480/1861" diyor, yani 1282 TDV'de YOK. Açmadım.
ÖLÇMEDİM   `sardinya` · `isvec` · `toskana` — pencere başı kümesinin
           BÜYÜK uçlarını; üçü de gerçek anakronizm ADAYI ama
           BAKMADIM
ÖLÇMEDİM   `umman` 18 · `ispanyol-peru` 13 — "gerçek erken"in
           `zend`den sonraki en büyük ikisi
ÖLÇMEDİM   `1481-09-10`daki tek `napoli` kaydını (Otranto olabilir)
```
