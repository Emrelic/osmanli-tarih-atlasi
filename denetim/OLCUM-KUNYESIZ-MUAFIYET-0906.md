# ÖLÇÜM — DENETİMİN KÜNYESİZ MUAFİYETİ: 898 dönem muaf, ama arkasında 36 aday

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ YAZILMADI.**
> Alet: `denetim/ARAC-KUNYESIZ-MUAFIYET-0906.js`.
> Bu ölçüm `PLAN-1923-SINIRLAR.md`in **B sınıfı önceliğini DÜŞÜRÜYOR** —
> kendi planımı çürüten bir sonuç.

---

## ① BULGU — muafiyet gerçek ve aletin kendi kodunda yazılı

```python
# arac/denetle.py:1831
if kim not in K:                    # K = _devletler_yukle() -> {id: (f,t)}
    kunyesiz.append((y["ad"], kim))
    continue                        # ← hayalet/4c/4d'ye HİÇ ULAŞMAZ
```
`K` yalnız künye **`id`**lerini taşıyor. `harita:` anahtarı olarak yaşayan
her kimlik bu dalda eleniyor.

🟢 **Ve alet bunu GİZLEMİYOR** — kendi çıktısında dürüstçe yazıyor:
> *"i N dönem KÜNYESİZ kimlik kullanıyor — ölçülemedi, **İHLAL DEĞİL ama
> TEMİZ de değil**"*

⇒ Kusur aletin dürüstlüğünde değil: **kimse o sayının ARKASINI ölçmemiş.**

## ② KAPSAM — 23 kimlik · 898 dönem
```
suleyman-celebi 214 -> fetret-suleyman      sirbistan  29 -> 4 künye
musa-celebi     156 -> fetret-musa          yemen      29 -> yemen-zeydi
avusturya       145 -> habsburg             ceneviz    25 -> cenova
mehmed-celebi   121 -> fetret-mehmed        bulgaristan 19 -> 3 künye
isa-celebi       56 -> fetret-isa           suud       18 -> 3 künye
```
⚪ **Çözülemeyen tek kimlik `__BOSLUK__` (2 dönem)** — ve o zaten
`§1.5`in beyanlı istisnası. Yani muafiyetin **%99,8'i çözülebilir.**

## ③ 🟡 AMA ARKASINDA YIĞIN YOK — ölçüldü
`harita:` hedefleri künyelerine geri çözülüp (paylaşılan anahtarda
pencerelerin BİRLEŞİMİ) denetimin **kendi eşiği (400 gün) ve kova
yapısıyla** ölçüldüğünde:
```
hayalet    0 dönem      ← HİÇ YOK
4c         7 dönem      bosna 5 (en büyük 19,7 yıl) · avusturya 2 (5,0)
4d        33 dönem      bosna 14 · avusturya 6 · milanoduka 6 ·
                        sardinya 3 · arnavutluk 2 · kaffa 2
4s         4 dönem      (4c ∩ 4d — KESİŞİM, üçü TOPLANMAZ)
net aday  36 dönem      = 7 + 33 − 4
```
⇒ **898 muaf dönemin %4'ü aday.** Muafiyet büyük, arkasındaki kusur değil.

## ④ 🔴 VE ADAYLARIN ÇOĞU MUHTEMELEN MEŞRU — alet bunu doğruladı

`sardinya` **439,6 yıl** çıktı. `CLAUDE.md §3.5.0` bu vakayı **adıyla ve
aynı sayıyla** kaydediyor:
> *"sardinya künye 1720-08-02 · veri 1281 · **439 YIL** … Torino ve
> Chambéry Savoya'nın tarihî merkezleri … **ad/unvan ömrü ≠ tasarruf
> sürekliliği**"* — ve hüküm **DOKUNMA.**

🟢 Aletim bu ruled vakayı **bağımsız olarak, aynı sayıyla** yeniden
buldu. İki şey söylüyor: ölçüm doğru çalışıyor, **ve 4d kovası ağırlıklı
olarak zaten hükme bağlanmış `③ ikisi de doğru` sınıfı.**
⇒ 4d'nin 33'ü kör gözle düzeltilirse **doğru veri bozulur.**

## ⑤ HÜKÜM — iki ayrı iş, ve öncelikleri FARKLI
```
🟢 YAPILMALI  denetle.py'nin künye aramasına `harita:` çözümü eklensin.
              Kazanç: 898 dönem denetime GİRER, ve bir daha "ölçülemedi"
              kovasında saklanmaz. Bu bir DENETİM HİJYENİ işi.
              🔒 `denetle.py` DONUK DEĞİL — koşu sırasında yazılabilir
                 (parmak izi yalnız uret_petek/renkler/girdi).
                 Ama ölçüm DEĞİŞECEĞİ için koşu bitmeden yazılmaz:
                 `4c 138` ve `4d 409` tavanları kayar.
🟡 ACELE DEĞİL 36 adayın tek tek vetlenmesi. Çoğu `§3.5.0 ③` sınıfı.
              Gerçek iş burada DEĞİL.
```

## ⑥ 🔴 KENDİ PLANIMI DÜZELTİYORUM
`PLAN-1923-SINIRLAR.md` **B sınıfını** *"en ucuz sınıf"* diye yazmıştı ve
öncelik sırasında yukarıdaydı. Ölçüm ucuzluğu doğruladı ama **değeri
düşürdü**: B'nin ardındaki gerçek kusur 36 aday ve çoğu meşru.
⇒ **B sınıfı ①-③ oturumlarının ANA işi DEĞİL, bir yan kalem.**
Sınır oturumlarının asıl işi **D sınıfı** (sömürge kimliği) ve
bölge bölge kaynak denetimi.

📌 `§11`: *"ölçüm doğru, çıkarım yanlış"* — burada ölçüm (4 kimlik / 25
nokta) doğruydu, **çıkarım** (*"en ucuz ⇒ önce yapılmalı"*) ucuzluğu
değerle karıştırıyordu.

## ⑦ 🔴 BİR GERÇEK KALEM ÇIKTI — `avusturya` 1923'te
`avusturya` (145 dönem) `habsburg` künyesine çözülüyor. Ama **1923'te
Habsburg monarşisi YOK** — Avusturya Cumhuriyeti var (kuruluş
1918-10-30, çekirdekte maddesi VAR). 1923 kesitinde `avusturya` taşıyan
**2 nokta** bu yüzden yanlış künyeye bağlanıyor.
⇒ Ayrı kalem; `avusturya-cumhuriyeti` künyesi var mı — **ÖLÇÜLMEDİ.**

## ⑧ ÖLÇÜLMEDİ
```
· 36 adayın tek tek vetlenmesi (hangisi §3.5.0 ③, hangisi gerçek)
· `avusturya-cumhuriyeti` künyesi var mı
· `harita:` çözümü eklenirse 4c/4d TAVANLARININ ne olacağı
  (138 ve 409 kayar — yeni tavan ölçülmeli)
· `isg:` alanı: bu ölçüm yalnız `s:`e baktı (denetle.py'nin döngüsü öyle)
```
