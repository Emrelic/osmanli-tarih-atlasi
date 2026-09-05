# FAZ 2 ÖN ÖLÇÜMÜ — `isg:` bugün ne yapıyor, `2i` tavanı neye göre kurulmuş

> **NEHİR SÜRTÜNME · 5 Eylül 2026 · VERİ YAZILMADI.**
> Alet: `denetim/ARAC-ISG-FAZ2-0905.py` — `denetle.py`nin KENDİ
> fonksiyonlarını çağırır, taklit etmez (bu gecenin `4s` dersi).

---

## ① 🔴 SEVKİN İKİ SAYISI BAYAT — VE İKİSİ DE `denetle.py`NİN KENDİ YORUMUNDAN

```
sevk / denetle.py:550   "88 isgal donemi / 82 kayit · 16 ayrik kirilma gunu"
BUGÜN ÖLÇÜLEN           229 dönem / 169 kayıt · 47 kırılma
                        ⇒ dönem 2,6× · kayıt 2,1× · kırılma 2,9×
```
Sayılar 7 Ağustos'a ait. Kod dinamik, **yorum bayat** — `§2`nin *"bir
sayı okumadan önce koşunun logunu aç"* dersinin denetim tarafı.
⚠️ Sevkteki *"bugün 47 kırılma, 3 açık"* **doğru**; bayat olan yalnız
dayanağı olarak gösterilen 88/82.

---

## ② 🔴 TAVAN BİR KAPASİTE DEĞİL, BİR BORÇ KÜTÜĞÜ

Sevk *"FAZ 2 o tavanı kesin zorlayacak"* diyor. **Ölçüm bu çerçeveyi
düzeltiyor.** `denetle.py:550-553`ün kendi gerekçesi:

> *"3 ACIK: Niş 1737-10-01 · Semendire 1789-10-13 · Bihaç 1878-09-18
> ⇒ Borç KÜÇÜK ve kapatılabilir; tavan 3 ile giriyor ve **inmesi
> beklenir**."*

⇒ `3` sayısı *"üç işgal kırılması taşıyabiliriz"* demek **değil**;
***"bugün maddesi olmayan üç kırılma var ve adları şunlar"*** demek.
Ve `2i` **AÇIK** sayar, kırılma değil:
```python
kir_i, acik_i = degismez2(Y_cekirdek, O, ("isg",))
durum2i = "✓" if len(acik_i) <= BEKLENEN_ACIK_ISG else "✗"
```

🟢 **SONUÇ — FAZ 2 tavanı HACİMLE zorlamaz.** Yüzlerce `isg:` dönemi
eklemek `2i`yi **hiç** hareket ettirmez, **her kırılmanın ±30 gününde
çekirdek bir maddesi olduğu sürece.** Tavanı zorlayan şey sayı değil
**maddesizlik.**

⚠️ Ve tersi de yazılı: *"borç kapandıkça tavan iner; kapanan borcun
yeniden açılması yeni borçtur."* Yani FAZ 2 üç borcu kapatırsa tavan
**0'a inmeli** — ve o andan sonra tek bir maddesiz kırılma bile ihlal.

---

## ③ 🔴🔴 ASIL RİSK TAVANDA DEĞİL, KOVADA

`2i`nin evreni ölçüldü — **kod okundu, varsayılmadı**:
```python
def olaylari_yukle():
    for yol in sorted(glob.glob(os.path.join(DATA, "olaylar*.js"))):
```
ve yerleşim tarafı `Y_cekirdek` (kuyruk dosyaları **elenmiş**).

⇒ **FAZ 2'nin maddeleri `data/olaylar*.js`e yazılmazsa, `2i` açığını
KAPATMAZLAR.** `data/kronoloji*.js`e yazılan bir madde `Değişmez 2`nin
evreninde **yok** (`CLAUDE.md §5` bunu zaten söylüyor) — ve o zaman
denetim *"maddesi yok"* der, oysa madde **vardır ve canlıdır.**

📌 `§11`in *"bu gün zaten var yetmiyor — HANGİ KOVADA olduğu da
sorulmalı"* dersi, ve FAZ 2'nin ölçeğinde bu **yüzlerce** kırılma
demek. Bu, ön ölçümün en pahalı bulgusu.

---

## ④ PENCERE BOŞ — SEVKİN TEŞHİSİ DOĞRULANDI

```
`isg:` dönemi 1918-1923 başlangıçlı :  0
```
FAZ 2 **boş bir pencereye** yazıyor. Bugünkü 229 dönemin dağılımı:
```
ingiltere 109 · fransa-cumhuriyet 41 · yunanistan 27 · avusturya 18
rusya 18 · italya 13 · fransa 2 · ispanya 1
1500'ler 1 · 1700'ler 17 · 1800'ler 117 · 1900'ler 94
```
🟢 **Ve FAZ 2'nin altı işgalcisinden beşinin kimliği ZATEN
KULLANILIYOR** — `yunanistan · fransa-cumhuriyet · ingiltere · italya
· rusya`. Yani biçim ve kimlik hazır; eksik olan yalnız **o pencere.**
🔴 Altıncısı (**Ermeni**) `isg:` içinde hiç geçmiyor — künye
`ermenistan-demokratik-cumhuriyeti` (M-3067'de ölçüldü, renk VAR),
ama işgal örtüsü olarak ilk kez kullanılacak.

---

## ⑤ ÜÇ AÇIK BORCUN BUGÜNKÜ HÂLİ — ve biri FAZ 2'yle AYNI AİLEDEN

```
Niş        1737-10-01  kayıp   en yakın madde 58 gün — Banaluka Zaferi
Semendire  1789-10-13  kazanç  en yakın madde 91 gün — Bastille
Bihaç      1878-09-18  kazanç  en yakın madde: "Bosna-Hersek ve
                               Yenipazar'ın Avusturya-Macaristan
                               tarafından işgali"
```
🔴 **Üçüncüsü öğretici:** en yakın madde **tam da o işgali** anlatıyor
ve yine de açık — demek ±30 günün dışında. Yani `2i` açığı *"olay
anlatılmamış"* demek değil, ***"o GÜNÜN maddesi yok"*** demek.
⇒ FAZ 2'de ay ay işgal yazılırken bu ayrım kritik: bir şehrin işgali
için genel bir madde varsa bile, **o şehrin kendi günü** ayrıca
maddelenmezse `2i` açılır.

---

## ⑥ ÖLÇMEDİĞİM
- FAZ 2'nin **kaç kırılma** üreteceği — şehir/ay listesi henüz yok.
- Üç açık borcun kapatılabilirliği (madde yazılabilir mi) — TDV'ye
  sormadım.
- `Değişmez 7` (enklav) FAZ 2'de ne yapar — koordinatörün M-3068 ④'ü
  toplu yamanın **geometride** kopukluk ürettiğini gösterdi; `isg:`
  örtüsü ayrı bir katman olduğu için aynı riski taşıyıp taşımadığı
  **ölçülmedi.**
