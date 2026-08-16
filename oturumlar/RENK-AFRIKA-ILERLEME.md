# RENK AFRİKA — ilerleme

**DOSYAM** `arac/renkler.py` · **M-NUMARALARIM** M-0132 · M-0134 · M-0148

## TESLİM — 16 Ağustos 2026

```
BOYALAR            327 → 337        on kimliğin ONU DA yazıldı
renk_olc.py        kod 0 · 0 görünmez · 0 çakışma · 0 aynı-anahtar ·
                   0 aynı-hex · 8 yakın-ama-değmeyen   (TABANLA BİREBİR AYNI)
renk_fark.py       kod 1 · 0 doğan kusur · 0 düşen çift · 0 yakın-çift
                   regresyonu       (kod 1'in sebebi TABANDA duran Amerika
                                     borcu; benim partimle ilgisi yok)
--dogrula          kod 0 · 10 öneri · 0 fark · eşik altı komşu YOK
görünmez bayt      0 · BOM yok · 189.343 bayt
```

**Kova hareketi — tam olarak beklenen ve BAŞKA HİÇBİR ŞEY:**
```
künyesi var, rengi yok              54 → 44   (−10)   ← benim onum
rengi var, künyesi yok               0 →  0
VERİDE kullanılıyor, rengi YOK      44 → 44   (değişmedi)
VERİDE kullanılıyor, künyesi YOK    32 → 32   (değişmedi)
künye var ama harita: BAŞKA anahtar  1 →  1   (değişmedi)
```

## YAZILAN ON RENK
```
mali-imparatorlugu      #d428d4      benin-kralligi     #4028d4
songhay-imparatorlugu   #28d428      dahomey            #28ccd4
hausa-sehir-devletleri  #d4d428      asanti             #28d05c
oyo-imparatorlugu       #d47028      sokoto             #2860d4
kanem-bornu             #80d428      zulu-kralligi      #cca828
```

**Dört kritik çift** (üçü şartnameden, dördüncüsü ölçümden):
```
mali ↔ songhay          97,3      sokoto ↔ kanem-bornu   69,0
oyo ↔ dahomey           48,0      hausa ↔ sokoto         69,2   ← EKLENEN
on kardeş arasında en dar çift: 14,3
```

## ÇÖZÜLEMEYEN: YOK
Dört ayrı sırayla koşuldu, dördü de çözdü (en kötü pay 14,3 · 18,0 · 14,7 ·
18,1). *"Çözülemedi"* cinsi (tercih / sıra / yapı) sorulmadı çünkü hiç
çıkmadı. Ama **sıra kaliteyi değiştirdi** — ilk sıra kabul edilseydi
3,8 ΔE boşa giderdi.

## BU PARTİDE BULUNAN DÖRT KUSUR — üçü kendi işimde, biri araçta

Dördü de *"geçme yolu temiz"* dedikten SONRA çıktı, ve **hiçbirini bir
denetim bulmadı**: dördü de kendi varsayımımı kırmaya çalışmaktan çıktı.

```
① TARİH METİN KARŞILAŞTIRMASI (kendi çözücümde, sonra ARAÇTA da)
   '800-01-01' < '1808-01-01' → False    ('8' > '1')
   engel_kumesi("kanem-bornu") → 0 engel · sıfır dolgulu hâli → 25
   devletler.js'te 3 haneli yıl: 18 alan · bunlardan RENGİ OLAN: 13
   (almanya · bizans · bretanya · fransa · goryeo · iskocya · navarra ·
    nube · pagan · papalik · poni · sunda-pajajaran · venedik)
   ⇒ renk_olc.py:696 — BENİM DOSYAM DEĞİL, bildirdim (M-0211), düzeltmedim.
   ÖLÇMEDİM: o 13 kimliğin kaçının fiilen zarar gördüğünü.

② DENETİMİN KÖRLÜĞÜ (C13 ateşlemesi ZORLANARAK bulundu)
   mali'ye kongo-kralligi'nin TAM hex'i → beş başlık sayısı SESSİZ
   sokoto'ya kanem-bornu'nun TAM hex'i → SESSİZ
   (altlık ve deniz dalları ÖTTÜ)
   Sebep: renk_olc.py:358 `k not in aralik` ⇒ veride dönemi olmayan
   kimlik `çakışan`a değil `ÖLÇÜLEMEDİ`ye gider.
   ASIL SAYI: yakin_renk ölçülemedi 633 → 837 (+204)
   ⇒ M-0199'daki "taban ile aynı ⇒ temiz" cümlem DAYANAKSIZDI ve
     M-0211 ile DÜZELTTİM. Sayı doğruydu, ÇIKARIM yanlıştı.

③ KARDEŞ ÇİFTLER (zarf dayanıklılık sınavı)
   mali ↔ sokoto  ΔE 0,9  ·  hausa ↔ zulu  ΔE 1,2
   Künyeleri HİÇ örtüşmüyor ⇒ kurala göre MEŞRU. Ama mali ile sokoto
   AYNI COĞRAFYADA (kutular 0 km) ve kullanıcı zaman çubuğunu kaydırdıkça
   aynı yeşili arka arkaya görür. Kural ZAMAN eksenine bakıyor, kullanıcı
   MEKÂN eksenine.  ⇒ kardeş kısıtı örtüşmeden bağımsız yapıldı.
   ÖLÇÜM: 0,9 → 14,3   (M-0227)

④ `tahta.py` — AYNI UYARI, İKİ FARKLI SONUÇ
   vaka 1 (M-0252)  push kod≠0 · commit VAR  ⇒ mesaj ULAŞTI
   vaka 2           push kod≠0 · commit YOK  ⇒ mesaj KAYBOLDU
   Uyarı ikisini AYIRT ETMİYOR; gönderen yeniden mi göndersin bilemiyor.
   ⇒ M-0263. `arac/tahta.py` benim dosyam değil, düzeltmedim.
```

## AÇIK BORÇ — kayda geçiyorum ki yarın kusur diye bulunmasın

🔴 **`ek32` `girdi.py`ye BAĞLANDIĞINDA `renk_olc.py` YENİDEN KOŞMALI.**
Bu on kimliğin bugün veride tek noktası yok; engel kümesini künye penceresi
ve **elle yazılmış coğrafî zarflarla** kurdum (vekil, ölçüm değil). Nokta
inince gerçek Voronoi komşuluğu ölçülebilir olacak. Bu satır o borcun
kaydıdır — `renkler.py` içindeki blokta da yazılı.

🟢 **180. meridyen kusuruna maruziyetim: SIFIR.** `girdi.km()` boylamı
sarmalamıyor (M-0234) ve engel kümemi onunla kurdum. Sarmalayan bir
haversine yazıp yeniden ölçtüm: on kimliğin onunda da engel kümesi
DEĞİŞMEDİ (kaçırılan 0). `girdi.py` düzeltmesi inince renk partisinin
yeniden koşmasına **gerek yok** (M-0235).

## COMMIT
`arac/renkler.py` **commit'lenmedi** — `§7`: commit Oturum 0'dan.
Bu dosya (kendi ilerleme dosyam) pathspec'li commit edildi.
