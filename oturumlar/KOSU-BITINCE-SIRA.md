# KOŞU 7b BİTİNCE — YÜRÜTÜLECEK SIRA

> **1.MURAT (Oturum 0) · 6 Eylül 2026.** Koşu 14:23:20'de başladı,
> PID 3880. Bu dosya koşu bittiği an **sırayla** yürütülecek adımları
> taşır. 🔴 **Sıra keyfî değil** — her adım bir öncekinin çıktısına
> dayanıyor, ve `§11`: *"sıra ters çevrilirse `denetle.py` renk
> çakışmasını GÖRMEZ; veri denetimleri renge bakmaz."*

---

## ⓪ ÖNCE: KOŞU GERÇEKTEN BİTTİ Mİ — üç sinyal, biri yetmez
```
① SÜREÇ      Get-Process -Id 3880   → yok = bitti YA DA ÖLDÜ
② ÇIKTI      data/donemler.js mtime → koşunun SONUNDA yazılır (tetik bu)
③ LOG        kosu7-20260906-142320.log son satır
             "Doğrulama: tüm yerleşimlerin peteği geçerli ✓" ARANIR
```
🔴 **Süreç yok + `donemler.js` GÜNCEL DEĞİL = ÇÖKTÜ, bitmedi.**
Çıkış kodu `3221225477` ise 0xC0000005 (koşu 7'nin çökme biçimi).
⚠️ *"Süre doldu, bitti"* demek YANILTICIDIR — bekçi her zaman
**gerçekleşmiş bir olaya** bağlanır (`§10`).

---

## ① EMRE'NİN AÇIK İSTEĞİ — İLK İŞ, atlanamaz
```bash
py denetim/ARAC-IKINCI-GECIS-SURE-0906.py
```
Betiğin **kendi sigortası** var: koşu canlıysa DURUR (motoru içe
aktarmak belleği ikiye katlar). Yani ⓪ geçmeden koşmaz.
🔴 **Sonuç bir ALT SINIRDIR ve raporda AÇIKÇA yazılacak:** bugünkü çıktı
zaten düzeltilmiş, B1 delik bulamıyor. Dayanak:
`denetim/OLCUM-AB-IKI-GECIS-0906.md`.

## ② TABANI ÖLÇ — yamalardan ÖNCE
```bash
py arac/denetle.py                 # on iki değişmez
py arac/durum_tablosu.py --yaz     # §1.5'i YERİNDE güncelle
py arac/renk_olc.py                # 🔴 VERİ DEĞİŞTİYSE ŞART (§9)
```
🔴 **Bu taban, bütün yama sınavlarının kıyas noktasıdır.** Yamalardan
sonra ölçülürse *"bu ihlali yama mı getirdi, zaten var mıydı"* sorusu
cevapsız kalır. `§11`: *taşımanın getirdiği ile zaten orada olanı ayır.*

## ③ YAYIN KAPISI
```bash
py arac/denetle_yayin.py           # SONUCU OKU — "geçti" varsayma
py arac/surum_damgala.py           # ?v=rNN yükselt
```
⚠️ `denetle_yayin` bir kapıdır: *"yanlış yayın, yayınlanmamış
düzeltmeden kat kat pahalıdır."* Reddederse **sebebi oku**, zorlama.
🟡 Ö9 SINAVI (`denetim/ARAC-PETEKSIZ-0905.js`) artık bir **GERİLEME**
testidir, iyileşme testi değil: peteksiz **hâlâ 0** olmalı. Yükselirse
yeni koşu nokta KAYBETMİŞ demektir.
⚠️ Yayın gecikmesi: push'tan sonra GitHub Pages ~40-60 sn.

## ④ TARAYICIDA ÖLÇ — henüz hiç ölçülmedi
```
· kronoloji OYNATILIRKENKİ takılma (§④ — ÖLÇÜLMEDİ)
· document.visibilityState SORULACAK: "hidden" ise ölçüm `ölçülemedi`
  kovasına girer, "YOK" DEĞİL (§11, bir günde dört vaka)
· sayfa "yüklendi" bir AN değil bir ARALIK — erken ölçüm 173 işaretçi
  gösterdi, tam yüklüde 481
```

## ⑤ RENK — yamalardan ÖNCE, atlanamaz
`renkler.py` koşu bitince ÇÖZÜLÜR. Ölçülmüş çakışmalar:
```
irak-kralligi          misir-kralligi     ΔE 1,09   🔴🔴
irak-kralligi          misir-sultanligi   ΔE 1,82   🔴🔴
suriye-lubnan-mandasi  tbmm-turkiye       ΔE 5,27   🔴🔴 (SINIRDAŞ)
filistin-mandasi       ingiliz-sudani     ΔE 5,39   🔴
```
```
① `renk_olc.py --oner` payı YOK (DE_KOMSU 12,0). `renkler.py:3513`in
   kendi `_GUVENLI_PAY = 13,0` emsali kullanılacak — yoksa çözüm eşiğin
   KIL PAYI üstünde durur ve 8 bit yuvarlamada altına iner.
② `suriye-lubnan-mandasi ↔ tbmm-turkiye` hedefi 12 DEĞİL ≥25
   (anlatının merkezindeki çift — Ankara İtilâfnâmesi)
③ ÖNERİ: `misir-sultanligi` + `misir-kralligi` tek `harita:"misir"`
   anahtarında birleşsin (ΔE 0,73 — zaten ayırt edilemiyorlar).
   `denetim/ONERI-MISIR-BOYA-ANAHTARI-0906.md`
```
🔴 Ve üç bölge oturumu yama üretecek — **her yeni kimlik yeni çift
doğurur.** Renk ikinci kez koşulacak.

## ⑥ YAMALAR — sıralı, her birinden SONRA denetim
```
① 18 çakışma (hükümleri VAR)      → hedef: 18 → 0
② ARAC-MUKERRER-DUZELT-0906.py --yaz   (5 mükerrer alan)
③ ARAC-VAN-1548-DUZELT-0906.py --yaz   (1548-08-25 → 08-24, 12 dosya)
④ yer_yama_manda_0906.js          58 nokta · sınavdan GEÇTİ
⑤ yer_yama_silistre_0906.js        1 nokta · zincir 1281-1923 kesintisiz
⑥ KRONOLOJI-MANDA-0906.json        3 ÇEKİRDEK maddesi (⑤'ten ÖNCE değil,
                                    SONRA da olmaz — AYNI partide)
⑦ Sutter · Agadez · Timbuktu
⑧ üç bölge oturumunun yamaları     (geldikçe)
```
🔴 **④ ve ⑥ AYRI UYGULANMAZ:** madde olmadan yama `2s`yi teknik olarak
geçer ama değişim Sevr/Trianon/Sakarya'nın altında belirir (`§10`).

## ⑦ ARAÇ BORÇLARI — koşu bitince yazılabilir
```
· denetle.py künye aramasına `harita:` çözümü
  ⇒ 898 dönem denetime GİRER (23 kimlik)
  ⚠️ TAVANLAR KAYAR: 4c 138 · 4d 409 · yeni tavan ÖLÇÜLECEK
  dayanak: denetim/OLCUM-KUNYESIZ-MUAFIYET-0906.md
· uret_petek.py: "kesilen … km²" → "km²·DÖNEM" (birim etiketi YANLIŞ)
· veri-kaynak/motor_kara.geojson → motor_cizdigi_kara.geojson
  (dört aracı bağlar; adı ÇIKTIYI değil GİRDİYİ ima ediyor)
· aşama satırları TAMPONSUZ bir dosyaya da yazılsın — koşu kendi
  bilançosunu yazıyor ama KOŞARKEN KİMSE OKUYAMIYOR
```

## ⑧ BLOKE — koşu bitse bile açılmaz
```
VASSAL ETİKET   donemler.js `k`/`statu` taşımıyor ⇒ uret_petek DEĞİŞİKLİĞİ
                şart, yani YENİ BİR KOŞU. HUKUM-VASSAL-GORUNUM-0906.md
TAVAN_KM        Emre'nin kararı bekliyor: Ⓐ 200 · Ⓑ eski kademeli ·
                Ⓒ1 k1=400 k2=300 (ÖLÇÜLMÜŞ önerim). Üçü de YENİ KOŞU.
GEOMETRİ FETCH  <script> → fetch()+JSON (~9,2 sn ayrıştırma) — js/app.js
                işi, koşudan BAĞIMSIZ, şimdi de yapılabilir
```

## ⑨ 🔴 ÜÇ OTURUM ÇALIŞIYOR — merge sırası ONLARA bağlı
`ORTADOĞU` · `ASYA` · `BALKAN-DOĞU AVRUPA` 20:14'te göreve başladı.
Yamaları `denetim/` altında birikecek. **18 çakışma tam bu yoldan
doğmuştu.** Uygulamadan önce:
```
· her yamanın DOKUNDUĞU AD KÜMESİ çıkarılır
· iki yama aynı ada dokunuyorsa ÇAKIŞMA → hüküm koordinatörde
· `_sahiplik_uygula.py` KURU KOŞU önce, `--yaz` sonra
· "KAPSAM DARALDI" uyarısı ASLA zorlanmaz (29 Ağustos veri kaybı)
```
