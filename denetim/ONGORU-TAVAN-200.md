# ÖNGÖRÜ — TEK TAVAN 200 km (bütün kademeler)

> **Emre'nin kararı, 2 Eylül 2026 ~03:50:** *"Hepsi 200 olsun bir görelim,
> sonra değiştiririz gerekirse."*
>
> 🔴 **BU BELGE ÖLÇÜMDEN ÖNCE YAZILDI VE DAMGALANDI.** Sonradan yazılan
> beklenti, ölçümü gördükten sonra farkında olmadan ona göre şekillenir ve
> hiçbir zaman yanlış çıkmaz — yani hiçbir şey öğretmez. Önce yazılan
> beklenti **yanlış çıkabilir**, ve ancak yanlış çıkabilen bir şey bilgi
> taşır.

## DEĞİŞİKLİK
```python
# ÖNCE
TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}
# SONRA
TAVAN_KM = {1: 200, 2: 200, 3: 200, 4: 200, 0: 200}
```

### Ölçülmüş taban — nokta dağılımı (2624 nokta)
```
kademe  nokta   bugün  →  200    tavan dairesinin alanı
k0        240    280            ×0,51
k1        259    700            ×0,08     ← en sert
k2        210    420            ×0,23
k3       1236    280            ×0,51
k4        679    140            ×2,04     ← tek GENİŞLEYEN
─────────────────────────────────────────────────────
DARALAN 1945 nokta (%74)  ·  GENİŞLEYEN 679 (%26)
```

---

## ÖNGÖRÜLER — numaralı, ve MAZERETİ OLANI DA ŞİMDİ YAZIYORUM

### ① Gât ↔ Ubârî boşluğu KAPANIR
`140+140 = 280 < 317` → `200+200 = 400 > 317`
**Güven: YÜKSEK — bu geometri, tahmin değil.**
🔴 **Mazereti YOK.** Tutmazsa tavan mekanizmasını yanlış anlamışım demektir.

### ② Gât ↔ Murzuk boşluğu KAPANIR — ama SINIRDA
`390 km` mesafe, `400 km` erişim ⇒ **10 km pay.**
**Güven: ORTA.** Tavan bir DAİRE, ama petek sınırı komşunun ortasından
geçer; 10 km'lik pay kıyı kesimi ve sadeleştirmeyle yenebilir.
🟡 **Mazereti VAR:** tutmazsa sebep 200'ün yanlışlığı değil, payın darlığı
olur — ve o zaman soru *"200 mü yanlış"* değil, *"Gât çevresinde nokta mı
eksik"* olur (`§2`).

### ③ KISALAN PETEK SAYISI: 900-1400 arası
**Güven: DÜŞÜK — bu bir TAHMİN, ölçüm değil.** Dayanağı: bugün 1945 nokta
daha dar bir tavan alıyor, ama tavan yalnız **komşusu uzak** olan noktayı
bağlar. A1 tavanı bugün 391/2356 noktayı bağlıyordu (%16,6); tavan
daralınca bağlanan oran artar ama %74'ün tamamı bağlanmaz.
⚪ Bu sayıyı yanlış tahmin etmem bir şey öğretmez; **aralığın DIŞINA
çıkması** öğretir.

### ④ 🔴 SERBEST KALAN ALANIN BÜYÜK KISMI KOMŞUYA GEÇER
**Güven: YÜKSEK — çünkü bu ÖLÇÜLMÜŞ bir mekanizma, tahmin değil.**
`§11`, koşu 4b: tavan 20 peteği kısalttı, **3.397.649 km² sahipsizleşti**,
ve **118 yetim yüz sahipli komşulara katıldı.** Osmanlı 9 kesitin 7'sinde
değişti, yabancı +%15.
⇒ **Tavan daraltmak deliği kapatmaz, TAŞIR.**
🔴 **Mazereti YOK.** Bu koşuda da olacak; soru *"olacak mı"* değil **"ne
kadar"**.

### ⑤ Değişmez 1 (sahipsizlik) TEMİZ KALIR
**Güven: YÜKSEK.** Tavan yalnız ALAN çıkarır, NOKTA çıkarmaz; her yerleşim
kendi diskinin merkezindedir. Motor yorumu bunu **yapısal** diyor:
*"petek_son ⊆ petek_voronoi her zaman doğru."*
🔴 **Mazereti YOK.** `Değişmez 1` bozulursa tavan mekanizması hakkındaki
yapısal iddia yanlış demektir.

### ⑥ 🔴 OSMANLI ALANI DEĞİŞİR — ve yönü BİLMİYORUM
**Güven: sadece "değişecek" kısmında.** 4b'de daraltma Osmanlı'yı
**büyüttü** (yetim yüzler ona katıldı). Burada k4 **genişliyor** (679
nokta, ×2,04) ve k1/k2 **daralıyor** — iki etki ters yönde.
⚪ **Yönü tahmin ETMİYORUM.** *"Ölçmediğimi ölçmedim diye yaz."*
🔴 Ama **ölçülecek**: dokuz kesitte Osmanlı km²'si, öncesi/sonrası.

### ⑦ ÇÖL TAVANI (`COL_TAVAN_KM = 300`) İLK KEZ ETKİN OLUR
**Güven: YÜKSEK — motorun kendi yorumundan.**
Bugün `k0=280 · k3=280 · k4=140` hepsi 300'ün ALTINDA, o yüzden çöl tavanı
**yapısal olarak hiçbir şey kesemiyor** (2283/2356 nokta).
200 < 300 olduğu için bu **değişmez** — çöl tavanı yine atıl kalır.
🟡 Yani *"çöl tavanı"* adını taşıyan şey bu değişiklikten sonra da
çalışmayacak. **Emre'nin çöl derdinin çaresi bu ayarda değil.**

---

## KABUL ÖLÇÜTÜ — koşudan sonra
```
🟢 KABUL   ① tuttu · ⑤ temiz · ④'ün büyüklüğü < 4b'nin (3,4 M km²)
🟡 EMRE'YE ② tutmadı ya da ④ 4b mertebesinde
🔴 GERİ AL ⑤ bozuldu (Değişmez 1 kırmızı) ya da ① tutmadı
```

## ⚠️ VE BİR ŞEY BAŞTAN YAZILIYOR
Bu değişiklik `arac/uret_petek.py`ye dokunur ve o dosya **koşu sürerken
parmak izlidir.** Uygulama ancak koşu bittikten SONRA yapılacak; bu belge
o ana kadar bekleyecek.
📌 Ve `MALİYET-MESAFE`nin ölçümü hatırda tutulacak: *"emniyet kemeri
YARIÇAP TAVANI değil ÇÖL FRENİ olmalı — tavanı geri koymak, maliyet-
mesafenin kazandırdığı 'delik açmama' özelliğini geri verir."* Bu ayar
**o tartışmayı kapatmıyor**, yalnız bugünkü tavanı tekilleştiriyor.
