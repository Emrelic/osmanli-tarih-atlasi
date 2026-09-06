# ② HİCAZ · YEMEN — **KUSUR DEĞİL, `harita:` KONVANSİYONU**

> **ORTADOĞU · 7 Eylül 2026 · VERİ YAZILMADI. Hüküm: DOKUNMA.**
> Alet: `denetim/ARAC-ORTADOGU-HICAZ-0907.py`

---

## ① ÖNCE: HANGİ KATMANDA KONUŞUYORUM

Koordinatörün şartı — *"`harita:` dolaylaması bugün iki ayrı yerde ayrı
çalışıyor; hüküm vermeden önce hangi katmanda konuştuğunu yaz."*
Üç katman **ayrı ayrı** soruldu:
```
Ⓐ KÜNYE    `devletler.js`te `id` olarak var mı
Ⓑ BOYA     `renkler.BOYALAR`da ANAHTAR olarak var mı (çizilir mi)
Ⓒ DENETİM  ilgili künyenin penceresi veriyi tutuyor mu (4c / 4d)
```
**Hüküm ölçütü** — üçü aynı cevabı vermek zorunda değil:
```
Ⓐ🔴 + Ⓑ🟢  ⇒ `harita:` KONVANSİYONU · kusur DEĞİL, çizim çalışıyor
Ⓐ🔴 + Ⓑ🔴  ⇒ 🔴 GERÇEK KUSUR · harita DELİĞİ
Ⓐ🟢        ⇒ zaten künyeli, soru yok
```

## ② ÖLÇÜM

```
`hicaz`   veride 13 dönem · 1923'te 13
   Ⓐ id olarak 🔴 YOK   ·   `harita:hicaz` diyen künye: hicaz-kralligi
   Ⓑ BOYALAR['hicaz'] = 🟢 #78360c
   Ⓒ hicaz-kralligi 1916-06-10 → 1923-10-29 · AŞAN 0 · ÖNCE 0
   1923: Mekke · Medine · Cidde · Yenbu · Tebük · Maan …

`yemen`   veride 29 dönem · 1923'te 9
   Ⓐ id olarak 🔴 YOK   ·   `harita:yemen` diyen künye: yemen-zeydi
   Ⓑ BOYALAR['yemen'] = 🟢 #9fb454
   Ⓒ yemen-zeydi 897-01-01 → 1923-10-29 · AŞAN 0 · ÖNCE 0
   1923: Zebîd · Moha · Sana · Taiz · Hudeyde · Ferasan …
```

## ③ 🟢 HÜKÜM — **İKİSİ DE KONVANSİYON, DOKUNULMAYACAK**

İkisi de `Ⓐ🔴 + Ⓑ🟢` deseninde: künye `id`si yok ama **künye VAR**
(`hicaz-kralligi` · `yemen-zeydi`) ve `harita:` alanıyla boyaya
bağlanıyor. Renk mevcut, gövde çiziliyor, pencere veriyi tutuyor.
⇒ Şartnamenin *"künyesiz 13 + 9"* kalemi bir **kusur değil**;
`OLCUM-KUNYESIZ-MUAFIYET-0906.md`in *"898 dönemin yalnız %4'ü aday"*
ölçümünün bu bölgedeki karşılığı.

⚠️ **VE BU KALEM KAPANIYOR** — kaydı buraya yazılıyor ki bir sonraki
oturum onu *"künyesiz kimlik"* diye yeniden açmasın.
📌 `§11`: *"ödenmiş bir borç da kayıtsız kalırsa yeniden İŞ diye
bulunur."*

🟢 Yan doğrulama: `Maan` `hicaz`ın 13 noktasından biri — yani Ürdün
yamasında dışarıda bırakmam bu ölçümle de tutarlı; Maan bugün doğru
kimlikle ve doğru renkle çiziliyor.

## ④ 🔴 ALET DERSİ — ÜÇ HANELİ YIL TUZAĞI, BEŞİNCİ VAKA VE BU SEFER BENDE

İlk koşuda `yemen` için **"ÖNCE 29"** çıktı — yani 29 dönem künyenin
başlangıcından önce başlıyor görünüyordu. Sahteydi:
```
künye  yemen-zeydi  f: "897-01-01"      ← ÜÇ HANELİ
veri                 1281'den başlıyor
dizgi karşılaştırması "1281-01-01" < "897-01-01"  →  TRUE
                      çünkü "1" < "8"
```
`CLAUDE.md §3.5.0` bu tuzağı kayda geçirmiş ve **bir gecede dört alette**
çıktığını yazmış (`dubrovnik` · `nube` 47 sahte pozitif · `ARAC-4C` ·
ardıl kontrolü). Bu **beşinci** vaka.
🟢 Pad kondu, `AŞAN 0 · ÖNCE 0` çıktı — hüküm değişmedi, **dayanağı
düzeldi.**
📌 Ve yakalayan şey alet değil **göz** oldu, tıpkı ilk dört vakadaki
gibi: *"veri 1281'den başlıyor, künye 897 — 29 nasıl önce olabilir?"*
⇒ Bir aletin çıktısını gözle sınamak, alete güvenmenin yerine geçmez
**ama onu yakalar.**

## ⑤ ÖLÇMEDİĞİM
```
🔴 `yemen`in 29 döneminin 20'si 1923 KESİTİNDE DEĞİL — onların
   kaynak denetimi bu turun kapsamı dışında (kesit 1923-10-28).
🔴 `hicaz-kralligi` ve `yemen-zeydi` künyelerinin `t:` günlerinin
   KAYNAĞI — pencere veriyi tutuyor, ama günün dayanağına BAKMADIM.
🔴 `js/app.js`teki `harita:` dolaylamasını KOŞTURMADIM; Ⓑ ölçümüm
   `renkler.BOYALAR`a doğrudan sordu, arayüz katmanına değil.
   ⇒ Koordinatörün "iki yerde ayrı çalışıyor" uyarısının ARAYÜZ ucu
   bu ölçümde **ölçülmedi**.
```
