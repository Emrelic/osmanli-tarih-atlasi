# ÖLÇÜM — künyesi biten 24 gövde: **sahipsiz 0, ama maliyet başka yerde**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2938` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM — *veri yazılmadı, HÜKÜM YOK.*
> **Yöntem:** `denetle.py` **KOŞTURULMADI** (koşu 5b canlı); eşik ondan
> **okundu** (`ATLAS_SONU = "1923-10-29"`, satır 1619), ölçüm
> `girdi.yukle()` ile bağımsız yapıldı.

---

## 1. ⇒ MANŞET: **SAHİPSİZ 0** — künye bitişi harita deliği açmıyor

28 künye (24 + 🟠 dördü) · her birinin bitişinden **bir gün sonra**,
o kimliği kullanan **her nokta** `Değişmez 1` ölçütüyle (`f <= g < t`)
sınandı:

```
🟢 ZİNCİR DEVAM      133 nokta
🟡 `bos:` BEYAN        0
🔴 SAHİPSİZ            0
```
⇒ **Künyeyi himaye gününde bitirmenin bugün ölçülebilir bir `Değişmez 1`
maliyeti YOK.** Her nokta için ardıl kimlik zaten yazılmış.

**Ardıl kimlikler — ve hepsi bir desen:**
```
bagirmi · bundu · futa-callon · loango · sine-salum · tio · yatenga
                                          → fransa-cumhuriyet
gyaaman · ibadan · lozi · nijer-deltasi · nkore · toro · tsvana ·
gambiya-mandinka · gonja                  → ingiltere
eve-notse → almanya    ·  ruanda → belcika  ·  matamba → portekiz
laos-kralliklari → fransiz-cinhindi        ·  lan-na → toungoo
svahili-sehirleri → umman-zengibar×11, portekiz×2
malay-sultanliklari → ingiliz-malaya×8, hollanda-dogu-hint×4,
                      cohor-sultanligi×3, siyam-chakri×1
bulgaristan-prensligi → bulgaristan-kralligi×14, romanya-kralligi×3, OSMANLI×2
sirbistan-nemanjic → OSMANLI×18, sirbistan×10, macaristan×1
savoya → isvicre
```

---

## 2. 🔴 AMA MALİYET VAR — ve **TEMSİLDE**

Sahipsizlik yok, çünkü nokta **metropolün kimliğiyle** boyanıyor. Ve
aynı tarihsel durumdaki öteki künyeler **kendi kimlikleriyle** kalıyor.

```
KENDİ KİMLİĞİYLE SÜRENLER              nokta-yıl
  afganistan      himaye 1880-07-22 →     216,3
  san-devletleri  himaye 1887-01-01 →     110,5
  manipur         himaye 1891-01-01 →      32,8
  ─────────────────────────────────────────────
  TOPLAM                                  359,6

METROPOLE ÇEVRİLENLER
  20 künye · 52 dönem · himaye gününden atlas sonuna  ≈ 1.890 nokta-yıl
```
⇒ **Aynı olay (himâyeye girmek), iki farklı harita görünümü.**
Manipûr 32,8 yıl **kendi rengiyle** duruyor; Bundu 1858'den itibaren
**Fransa** olarak görünüyor. Tarihsel durumları aynı.

---

## 3. 🔴🔴 VE ÜÇÜNCÜ BİR TEMSİL BİÇİMİ VAR — 0 noktalı iki künye onu açtı

`tunus-ocagi` ve `misir-kavalali` **hiçbir noktada kullanılmıyor** (0
dönem). Sebebi ölçüldü — o coğrafya **Osmanlı tâbi katmanıyla**
boyanıyor:
```
Kahire · İskenderiye · Asyut   1805-07-03 → 1914-12-18   `tabi`
Tunus  · Kayrevan              1705-07-17 → 1881-05-12   `tabi`
```

> ### ⇒ ÜÇ AYRI İŞLEM, TEK BİR TARİHSEL DURUM
> ```
> ① OSMANLI ÇEVRESİ    `v:` tâbi katmanı   → gövde GÖRÜNÜR ve
>                       (misir-kavalali · tunus-ocagi)  BAĞIMLILIĞI da görünür
> ② SÖMÜRGE, künye biter  metropol kimliği → gövde GÖRÜNMEZ
>                       (bundu → fransa · tsvana → ingiltere · 20 künye)
> ③ SÖMÜRGE, künye sürer  kendi kimliği    → gövde BAĞIMSIZ GİBİ görünür
>                       (manipur · san-devletleri · afganistan)
> ```
> 🔴 **Ve ①'in niçin yalnız Osmanlı'ya açık olduğu bu sabah ölçülmüştü:**
> `v:` dönemlerinin **kimlik alanı yok** (423 dönem: yalnız
> `f`/`t`/`k`/`enklav`). Yani *"X'e tâbi"* diyebilmenin tek yolu
> Osmanlı'dan geçiyor.
> ⇒ **② ile ③ arasındaki tutarsızlık bir tercih değil, bir EKSİĞİN
> sonucu:** sömürge himayesi için ① yok, o yüzden herkes ② ya da ③'ü
> seçmek zorunda kalmış.

---

## 4. 🟡 KÜÇÜK KALEM — tahsis edilmiş ama hiç çizilmeyen renk

```
misir-kavalali   harita:"kavalali"    BOYALAR'da VAR   veride 0 dönem
tunus-ocagi      harita:"tunus-ocagi" BOYALAR'da YOK   veride 0 dönem
```
`kavalali` için bir renk **ayrılmış ve hiç kullanılmamış** — `§1.5`in
*"künye var, veride yok"* sessiz borç kovası. **Kusur değil**, ama
`renk_olc`un komşuluk hesabında yer tutuyor olabilir. **ÖLÇMEDİM.**
📌 Ve `CLAUDE.md` `kavalali`nin bir yıl boyunca kuyrukta beklediğini
kaydediyor; bu ölçüm o kaydın **bugünkü durumunu** veriyor: hâlâ
çizilmiyor, ama **sebebi eksiklik değil** — Mısır `tabi` olarak
boyanıyor, yani ① işliyor.

---

## 5. ⇒ EMRE'NİN BEŞİNCİ KARARI İÇİN — ölçülmüş dayanak

```
"Künyeyi himâye gününde bitirmek" seçilirse
  🟢 Değişmez 1 maliyeti    : 0 (ölçüldü — 133 noktanın 133'ü kapalı)
  🟢 harita deliği          : 0
  🔴 bedeli TEMSİLDE        : 359,6 nokta-yıl kendi kimliğinden
                              metropol kimliğine geçer
"Künyeyi sürdürmek" seçilirse
  🔴 20 künyenin ardıl zinciri YENİDEN YAZILIR (52 dönem)
  🔴 ve gövdeler "bağımsız gibi" görünür — ③'ün bugünkü kusuru
"Üçüncü yol" (`v:`ye kimlik alanı) seçilirse
  🔴 MODEL değişikliği — motor ve denetim bağlanır
  🟢 ama ② ile ③'ü uzlaştıran TEK yol, ve ① zaten çalışıyor
```
⚠️ **Üçüncü yolu ÖNERMİYORUM** — ölçtüğüm şey onun *mümkün* olduğu
değil, ①'in **zaten var ve çalışıyor** olduğu. Karar Emre'nin.

---

## 6. DAMGALAR

```
🟢 ÖLÇTÜM      28 künye · 133 nokta · `Değişmez 1` ölçütüyle (f<=g<t),
               künye bitişinden BİR GÜN sonra
🟢 SONUÇ       🔴 SAHİPSİZ 0 · 🟡 bos: 0 · 🟢 DEVAM 133
🔴 DÜZELTTİM   ilk ölçütüm DARDI ("t: gününde başlayan ardil var mı") —
               ardıl bir gün sonra da başlayabilir. Örtüşmeyi ölçmek
               gerekiyordu, başlangıcı değil. Yeniden ölçtüm.
🔴 BULDUM      maliyet sahipsizlikte değil TEMSİLDE: 359,6 nokta-yıl
               kendi kimliğiyle · ≈1.890 nokta-yıl metropolle
🔴 BULDUM      ÜÇÜNCÜ temsil biçimi (`v:` tâbi katmanı) ve niçin yalnız
               Osmanlı'ya açık olduğu — `v:`in kimlik alanı yok
🟡 KAYDETTİM   `kavalali` rengi tahsisli ama hiç çizilmiyor (sessiz borç)
🟢 KOŞTURMADIM `denetle.py` — eşik ondan OKUNDU (satır 1619)
⚪ ÖLÇMEDİM    `kavalali` renginin `renk_olc` komşuluk hesabına etkisini
⚪ ÖLÇMEDİM    ②'deki 20 künyenin gövdelerinin km² büyüklüğünü —
               nokta-yıl bir vekil ölçü, ALAN değil
⚪ ÖLÇMEDİM    `bulgaristan-prensligi` ardılındaki `OSMANLI×2` ve
               `romanya-kralligi×3`in doğru olup olmadığını (ilginç
               ama bu turun sorusu değil)
🔴 ÖNERMEDİM   hiçbir model değişikliği. HÜKÜM YOK.
```

---

## 7. TESLİM — sayıyla

```
① SAHİPSİZ     0 / 133   ⇒ künye bitişi harita deliği AÇMIYOR
② `bos:` beyan 0
③ TEMSİL       kendi kimliğiyle 359,6 nokta-yıl (3 künye) ·
               metropolle ≈1.890 nokta-yıl (20 künye)
④ ÜÇ İŞLEM     `v:` tâbi (2) · metropol (20) · kendi kimliği (3)
               ve üçünün ayrışma sebebi: `v:`in KİMLİK ALANI YOK
⑤ 0 NOKTALI    tunus-ocagi · misir-kavalali — kusur DEĞİL, ① ile
               boyanıyorlar (Kahire/Tunus `tabi`)
⑥ KARAR        Emre'nin. Ölçülmüş maliyet yukarıda; ben vermedim.
```
