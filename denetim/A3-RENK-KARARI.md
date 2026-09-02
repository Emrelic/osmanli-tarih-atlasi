# A3 — İKİ RENK, KOŞU BİTİNCE `renkler.py`YE YAZILACAK

> Hazırlayan: 1.MURAT, 2 Eylül 2026 08:45 (koşu %91). `renkler.py` **KİLİTLİ**
> — bu dosya kararı taşır, uygulama koşudan sonra.

## KARAR
```python
"eyyubi-hisnikeyfa": ("Hısnıkeyfâ Eyyûbîleri", "#108810"),
"kabartay":          ("Kabartay (Kabardey) Beylikleri", "#d058e8"),
```

## 🔴 `renk_olc.py --oner`İN ÇIKTISI REDDEDİLDİ — ve sebebi aracın KENDİ uyarısı
```
önerilen   eyyubi-hisnikeyfa #2424d2   ·   kabartay #242ad2
aralarında ΔE = 3,32                       okunabilirlik tabanı 12
```
Araç uyarısını bastı ve doğruydu:
> *"🔴 komşusu ölçülemeyen kimlik: eyyubi-hisnikeyfa, kabartay — verisi
> girdi.py'nin okuduğu dosyalarda DEĞİL; öneri yalnız altlık ve Osmanlı
> ikilisine dayanır"* · *"yeniler arası komşuluk: 0 çift"*

⇒ İkisinin de verisi yok ⇒ Voronoi komşuluğu kurulamadı ⇒ **birbirlerine
karşı hiç kısıtlanmadılar** ve neredeyse aynı maviyi aldılar.

📌 Bu, `CLAUDE.md §11`deki **`kuba ↔ lunda`** vakasının birebir tekrarı:
*"`lunda` çözülürken `kuba`nın veride noktası yoktu ⇒ engel SAYILMADI…
sonra noktalar indi, komşu oldular ve çakıştılar."* Orada çare **en kötü
hâli varsaymak** olmuştu; burada da öyle yapıldı.

⚠️ Ve bu ikisi **aynı anda sahnede**: künyeleri `1281-1462` arası **181 yıl**
örtüşüyor (eyyubi-hisnikeyfa 1232-1462 · kabartay 1281-1774), bölgeler
`anadolu` ve `kafkasya`, aralarında ~700 km — projenin kademesinde
**UYARI bandı**. `§11`in *"iki gövde değmeden de aynı ekranda yan yana
durur"* dersi (`kaffa ↔ sidamo` ΔE 2,8) tam buraya bakıyor.

## YENİ ÇİFTİN ÖLÇÜMÜ
```
eyyubi-hisnikeyfa  #108810   en yakın MEVCUT renk: ΔE 14,0  (filipin-racaliklari)
kabartay           #d058e8   en yakın MEVCUT renk: ΔE 14,7  (bolivya-cumhuriyeti)
ikisi arası                  ΔE 156,5                        (hedef ≥ 25)
```
🟢 **Evren KASTEN geniş tutuldu:** ikisi de **401 rengin TAMAMINA** karşı
ölçüldü, yalnız komşularına karşı değil. Bu, projenin normal ölçütünden
**daha sıkı** — çünkü komşuluk ölçülemiyor ve en kötü hâl varsayılıyor.
⚠️ Yani 14,0 ve 14,7 marjları *"kıl payı"* değil: normal ölçütte (yalnız
gerçek komşular) marj çok daha geniş olurdu.

🔴 Kırmızı aile **elendi** (`VERI-YAPISI.md`: kırmızı tonları Osmanlı
ailesine ayrılmıştır) — 98 aday 82'ye indi.

## UYGULAMA SIRASI — BAĞLAYICI
```
① renkler.py'ye iki satır          ← A3
② py arac/renk_olc.py --dogrula    ← aracın kendi sınavı, ATLANMAZ
③ yerlesimler_ok104.js bağlanır    ← Hasankeyf artık renkli
④ __BOSLUK__ → d:"kabartay" dönüşümü  ← RENK'in işi, EN SON
```
🔴 ④ ASLA ①'DEN ÖNCE OLMAZ: dönüşüm renkten önce yapılırsa Kabartay
toprağı bir koşu boyunca **boyasız** kalır (`§8`: BOYALAR'da yoksa bölge
boyanmaz = harita deliği).

## ⚠️ ÖLÇMEDİĞİM — açıkça
- Bu iki rengin **%44 opaklıkta** (vassal/işgal katmanı) nasıl davrandığını
  ölçmedim. `renk_olc.py --dogrula` bunu sorarsa cevabı odur, ben sormadım.
- Renklerin *"güzel"* olup olmadığını ölçmedim — aracın kendi cümlesi:
  ***"Araç 'meşru' der, 'güzel' demez."*** Emre beğenmezse ton değişir,
  eşikler değişmez.
