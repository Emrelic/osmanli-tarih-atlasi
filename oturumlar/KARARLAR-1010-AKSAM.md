# EMRE'NİN KARARLARI — 10 Ekim 2026 akşamı

Bu dosya **karar kaydıdır**, iş planı değil. Her kalem Emre'nin kendi
cümlesiyle başlar; altında kararın NEYİ BAĞLADIĞI durur. Karar bir kez
yazılır, tartışma kapanır (`CALISMA-TIPI-B §3`).

---

## K1 — YABANCI DEVLETE TÂBİLİK ÇİZİLİR 🔴 ŞEMA KARARI

> *"yabancı devletlerede tabilik çizilsin ve tabilik etiketi ile belirtilsin
> fransaya tabi şeklinde ve rengi bir tık açık renk olsun tabi olunan
> devletten"*

**Beş gündür açık duran en büyük şema kalemi KAPANDI.** Bugüne kadar `v:`
alanı YALNIZ Osmanlı'ya tâbiliği taşıyordu; Madrid'in Habsburg'a, Cizre'nin
hükümet sancağı statüsünün çizilememesinin sebebi buydu.

Kararın bağladığı üç şey:
1. **`v:` artık Osmanlı'ya özel değil.** Herhangi bir polity başka herhangi
   bir polity'ye tâbi çizilebilir. `v:<kimlik>` hedefi serbesttir.
2. **Etiket metni:** `"<SUZEREN>'e tâbi"` biçiminde — ör. *"Fransa'ya tâbi"*.
   Etiket ÜRETİLİR, elle yazılmaz (suzerenin künye adından).
3. **Renk: suzerenin renginin BİR TIK AÇIĞI.** Yani tâbi rengi bağımsız bir
   boya değil, suzerenin boyasının TÜREVİ. ⇒ `renkler.py` tâbi rengini
   HESAPLAR; her tâbi için elle renk yazılmaz.

⚠️ Üç ölçülmesi gereken şart (uygulayan işçi bunları ÖNCE ölçer):
- **Osmanlı'nın mevcut tâbi gösterimi** zaten "koyu/açık" ikilisi üstünde
  duruyor (`CLAUDE.md §1`). Yeni kural onu BOZMAMALI: Osmanlı tâbisi
  bugünkü hâlini korur, kural ona da aynı formülle uyuyorsa birleştirilir.
- **Bir tık ne kadar?** ΔE olarak ölçülür ve YAZILIR. Mısır kararında
  (K2) ölçülmüş eşik ΔE 1,0'ın AYIRT EDİLEMEDİĞİ — "bir tık" o eşiğin
  üstünde olmalı, yoksa karar gözle doğrulanamaz.
- **Tâbinin tâbisi** (zincir): A, B'ye tâbi · B, C'ye tâbi ise A'nın rengi
  neyin açığı? Bu SORULUR, varsayılmaz.

📌 Bu karar `durum_tablosu.py`deki **⚪ 14 tâbi-çizili (yalnız `v:kid`)**
kovasını ve 11 "renksiz künye — HARİTA DELİĞİ" kaleminin bir kısmını
doğrudan etkiler: bir künye artık kendi boyası olmadan da çizilebilir.

---

## K2 — MISIR RENGİ KRALLIĞA GEÇİNCE DEĞİŞİR

> *"mısır rengini krallığa geçince değiştir"*

Ölçülmüş kusur: Memlûk Mısır'ı ile Mısır Krallığı arasındaki geçiş
haritada **ΔE 1,0** — yani gözle ayırt edilemiyor. Koordinatörün önerisi
`#9cd824`; karar "değiştir" olduğu için renk işçi tarafından ölçülüp
önerilir, ΔE raporlanır.

⚠️ `renk_olc.py` veri değişmeden de koşar — renk kararı KOŞU BEKLEMEZ.

---

## K3 — ZİNCİR ELLE YAYIN YAPAR

> *"zincir elle yayın yapsın"*

`CLAUDE.md §9`'daki *"gözetimsiz yayın bir ürün kararı, Emre'de"* satırı
**KAPANDI: gözetimsiz yayın YOK.** Zincir türev adımlarında durur, yayını
insan başlatır. Bu, zincirin "BAYAT TÜREV ile durması DOĞRUDUR" hükmünü
bir tercihten bir KURALA yükseltir.

---

## K4 — 19:00 KOŞUSU: EMİR OLMADAN İŞLEM YOK

> *"bugün 19:00 da koşu yapılacak ben emir vermeden işlem yapılmasın"*

Saat bir izin değil bir RANDEVU. HAVVA 19:00'da kendiliğinden başlamaz;
Emre'nin açık "başla" sözünü bekler. Koordinatör de o sözü taşımadan
koşu talimatı vermez.

📌 Bugün bu zaten bir kez ölçüldü: koordinatör *"beklemeden başla"* dedi,
HAVVA *"Emre'nin doğrudan cevabı koordinatörü geçer"* diyerek REDDETTİ ve
HAKLIYDI. Bu madde o doğru davranışı kural hâline getirir.
