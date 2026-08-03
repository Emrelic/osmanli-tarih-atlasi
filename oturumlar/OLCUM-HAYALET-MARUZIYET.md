# ÖLÇÜM — hayalet dönemlerin MARUZİYET sıralaması

**3 Ağustos 2026 · VERİ KİMLİK 3 · Opus.** Koordinatörün isteği:
*"her hayalet için: kaç YIL künye dışında · kaç KAYIT · toplam km²."*

Ölçüm: `devletler.js` 302 kayıt (225 `harita:` anahtarı) × canlı **1619
yerleşim** × Voronoi hücreleri **Natural Earth kara maskesiyle kesilmiş**.
Eşik `denetle_anakronizm.py` ile aynı: **365 gün.**

---

## 🔴 ÖNCE İKİ DÜZELTME — ikisi de ilk koşumda yanlıştı

### ① Kara maskesi olmadan ölçtüm, sıralama YANLIŞ çıktı
İlk koşuda hücreleri yalnız `BOLGE` kutusuna kestim. Sonuç:
```
irlanda   601.125.116 km²·yıl   ← 1. sıra
   Tralee tek başına 1.314.199 km²  ← ATLANTİK
```
Kara maskesi uygulanınca `irlanda` **20.044.240**'a düştü ve **4. sıraya**
indi; Tralee listeden tamamen çıktı. Alanının **%97'si okyanusmuş.**
📌 Motor petekleri kara maskesiyle kesiyor; ölçüm de kesmezse "boyanan
alan" değil "hücrenin kutu içindeki payı" ölçülür. İkisi aynı şey değil.

### ② Aracın beyaz listesini atlamıştım
`denetle_anakronizm.py`de `SUREKLI_KIMLIK` var: *"kaydın bitişi bir BİÇİM
DEĞİŞİKLİĞİ, yıkılış değil"* denen 17 kimlik (`fransa` · `rusya` · `iran`
· `ispanya` · `avusturya` …). Ham taramam onları da sayıyordu ve
`fransa` 299M ile 2. sıradaydı — **kasten muaf bir kalem.** Liste elle
kopyalandı, çıkarıldı.
⇒ Kalan: **36 kimlik / 223 dönem.** (Aracın kendi toplamı 213; fark
`BEYAZ_LISTE`nin iki tekil satırı ve A/B bölüm muhasebesi.)

---

## SIRALAMA — maruziyete göre (km²·yıl)

```
kimlik              kayıt  en çok yıl    toplam km²      km²·yıl   künye
─────────────────────────────────────────────────────────────────────────
kuzey-yuan              3        85,0     3.413.050  193.700.686   1368-1635
altinorda               7        54,0       640.975   34.612.661   1242-1502
kazak-hanligi           3        21,0     1.351.891   28.389.719   1465-1847
irlanda                10       320,6        62.525   20.044.240   1200-1603
angkor-kmer             1       267,0        72.728   19.418.424   1281-1431
maratha                 7       105,4       255.682   19.029.532   1674-1818
meysur                  3       124,5        77.391    9.634.032   1761-1799
yuan-hanedani           3        13,3       564.664    7.516.447   1271-1368
benihalid               4        46,8       117.271    5.482.411   1670-1795
timurlu                 1        15,3       215.179    3.302.364   1370-1507
karakoyunlu            97         2,0     1.521.531    2.920.000   1351-1467
cagatay                 2         9,0       284.882    2.563.942   1227-1370
kirim                   3        46,4        52.717    2.446.218   1441-1783
navarra                 1       108,2        21.173    2.291.624    824-1512
lehistan                1        19,6        75.608    1.483.848   1569-1795
cungar                  4         1,0     1.423.555    1.423.555   1634-1758
gurcistan               2       119,5        26.233    1.281.156   1008-1801
artuklu                 3        56,0        20.740    1.161.448   1102-1409
… (18 kimlik daha, hepsi 1,2M km²·yıl altında)
```

### 🔴 KOORDİNATÖRÜN SEZGİSİ DOĞRULANDI — yıl sırası yanıltıyor

```
              YIL sırası      MARUZİYET sırası
irlanda           1.  (320 yıl)      4.
angkor-kmer       2.  (267 yıl)      5.
meysur            3.  (124 yıl)      7.
navarra           5.  (108 yıl)     14.
kuzey-yuan        9.  ( 85 yıl)   →  1.
karakoyunlu      36.  (  2 yıl)     11.   ← 97 KAYIT taşıyor
```
`navarra` tek bir kasabada 108 yıl; `kuzey-yuan` bozkırda 3,4 milyon
km²'de 85 yıl. Aynı satırda durmamalılar. `karakoyunlu` ise kaydı
en çok olan (97) ama yılı en küçük (2,0) — üçüncü bir eksen.

---

## 🔴 ASIL DESEN — ARDIL KİMLİK ZATEN VAR, YALNIZ RENGİ YOK

İlk üçün dökümü aynı şeyi söylüyor ve bu **beklediğimden temiz** bir
sonuç: hayaletlerin çoğu özensizlik değil, **eksik bir renge karşı
yazılmış geçici çözüm.**

### ① `kuzey-yuan` — 193,7M km²·yıl (künye 1368-09-14 → 1635-01-01)
```
Urga (Ulan Batur)   56,4 yıl · 2.909.943 km²  1639→1691   ← maruziyetin %87'si
Dunhuang            85,0 yıl ·   345.710 km²  1524→1720
Hohhot               1,0 yıl ·   157.397 km²  1581→1636
```
**Künye genişletilebilir mi? HAYIR — kaynak tersini söylüyor.** Kuzey
Yuan, Ligdan Han'ın ölümünden sonra oğlu Ejei'nin Yuan mührünü
Mançulara teslimiyle **1635'te bitti**; bu tarih künyeye kaynakla
yazıldı. 1720'ye çekmek `CLAUDE.md §3.5`in hayalet devletini üretir.
⇒ **VERİ dar tutulmalı.** Ardıllar:
```
Urga 1639-1691    Halha hanlıkları   🔴 KİMLİK HİÇ YOK (devletler.js 0 · BOYALAR 0)
                  1691-05-30 zaten Dolonnor'da Qing'e biat tarihidir —
                  veri o günü BİLİYOR, yalnız sahibinin adı yanlış.
Dunhuang 1635+    cungar             ✅ VAR ve RENGİ VAR (1634-1758) — bugün düzeltilebilir
Hohhot 1635-1636  1,0 yıl            eşiğin hemen üstü; ya veri 1635'e çekilir
                  ya beyaz listeye gerekçesiyle yazılır
```

### ② `altinorda` — 34,6M km²·yıl (künye 1242 → 1502)
Yedi kaydın **hepsi** `1281 → 1556`: Astrahan · Saratov · Tsaritsyn ·
Ural eteği · Rın kumulları · Kalmuk bozkırı · Terek deltası.
**Künye genişletilebilir mi? HAYIR** — Altın Orda 1502'de Kırım'a
yenilerek dağıldı. 1502-1556 Volga'nın sahibi **Astarhan Hanlığı**'dır.
⇒ **Ve o kayıt ZATEN VAR:**
```
devletler.js:1518  id:"astarhan" · 1466-01-01 → 1556-01-01
                   kaynak: TDV, madde: astarhan-hanligi
                   🔴 harita: alanı YOK · BOYALAR'da YOK · veride 0 kullanım
```
Künyenin bitiş tarihi (**1556**) verinin taşma tarihiyle **birebir
aynı.** Yani veriyi yazan oturum doğru tarihi biliyordu; `astarhan`
boyamadığı için `altinorda` yazmak zorunda kaldı.

### ③ `kazak-hanligi` — 28,4M km²·yıl (künye 1465 → 1847)
```
Aral kuzeyi     21,0 yıl · 1.179.466 km²  1500→1868
Emba · Üstyurt  21,0 yıl                  1644→1868
```
Kazak Hanlığı 1847'de (Kenesarı'nın ölümü) bitti; 1847-1868 Rus
ilhakının tamamlanma dönemidir. ⇒ **VERİ dar tutulmalı**, ardıl
`rusya` **var ve rengi var** — bugün düzeltilebilir.

### Ve dördüncüsü aynı deseni üçüncü kez tekrarlıyor
`irlanda`nın 10 kaydının **onu da** `1922-12-06 → 1923-10-29`. Karşılığı:
```
devletler.js:2691  id:"irlanda-serbest-devlet" · 1922-12-06 → 1923-10-29
                   🔴 BOYALAR'da YOK
```
**Tarihler gün gününe aynı.** Yine: doğru kimlik yazılmış, rengi yok,
veri en yakın boyayan anahtara düşmüş.

---

## ⇒ KALAN 21 İÇİN DESEN

Üç sınıf çıkıyor ve üçünün de işi farklı yerde:

```
A) ARDIL KİMLİK VAR + RENGİ VAR        → VERİ düzeltilir, bugün yapılabilir
   kuzey-yuan/Dunhuang → cungar · kazak-hanligi → rusya ·
   angkor-kmer → kamboc-kralligi · demak → mataram-sultanligi ·
   malaka-sultanligi → cohor-sultanligi
B) ARDIL KİMLİK VAR + RENGİ YOK        → önce RENK, sonra veri
   altinorda → astarhan · irlanda → irlanda-serbest-devlet
   ⚠️ Bu sınıf, gövdesiz-kimlik ölçümündeki "116 kayıtta harita: yok"
     bulgusunun GÖRÜNEN ZARARI. O 116 kayıt atıl değil — veriyi yanlış
     anahtara itiyorlar.
C) ARDIL KİMLİK HİÇ YOK                → önce KÜNYE (benim işim)
   kuzey-yuan/Urga → `halha` (Halha hanlıkları, ~1600-1691)
   don-kazak'ın doğusu → `kalmuk` (Volga Kalmuk Hanlığı 1630-1771)
```

Ve dördüncü bir sınıf var, ölçüt tartışması gerektiriyor:
```
D) İKİSİ DE DOĞRU, ÖLÇÜT FARKLI
   maratha  künye Konfederasyon'un sonunu (1818) alıyor, veri
            Gvalyar/İndor hânedanlarının sürekliliğini — ikisi de doğru.
   meysur   OTURUM-13 §B bunu ZATEN yazmış: "devletler.js 1761-1799 ·
            bu dosya 1565-1923 · Vodeyar krallığının tamamı".
   yuan-hanedani  Kunming/Dali 1382 TARİHSEL OLARAK DOĞRU (Liang Prensi
            Yunnan'da direndi); künye Dadu'nun düşüşünü (1368) alıyor.
   ⇒ Bunlar için doğru araç `SUREKLI_KIMLIK` beyaz listesidir —
     `fransa`/`rusya` için zaten kullanılan mekanizma. Gerekçesiyle
     yazılırsa alarm susar ve bilgi KAYBOLMAZ.
   navarra  ⚠️ AYRI: kaydın KENDİ kronolojisi 1620-10-19'da bitiyor ama
            t:"1512-07-25". Kayıt kendisiyle çelişiyor — beyaz liste
            değil, DÜZELTME işi. Ama kaydı yazan oturumun kararı.
```

⚠️ **Hiçbirini tek taraflı düzeltmedim.** A ve B sınıfının verisi
`yerlesimler*.js`te (benim dosyam değil), D sınıfı ölçüt kararı,
C sınıfı benim ama künye yazmak için önce kapsam onayı gerekiyor.

---

## ÖLÇÜMÜN SINIRLARI — kayda geçsin

```
① km² değerleri Voronoi hücresinin BUGÜNKÜ hâlidir. Nokta eklendikçe
   hücreler küçülür; bu sıralama 1619 noktalık evrene aittir.
② Alan enlem düzeltmeli düzlem yaklaşımıyla hesaplandı
   (derece² × 111,32² × cos φ). Sıralama için yeterli, yayın için değil.
③ `SUREKLI_KIMLIK` listesi araçtan ELLE kopyalandı. Araç değişirse bu
   ölçüm bayatlar — `renkler.py`nin "%30 opaklık" vakasının aynı sınıfı.
④ Eşik 365 gün; aracınkiyle aynı tutuldu ki sayılar karşılaştırılabilsin.
```
