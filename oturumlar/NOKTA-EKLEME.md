# NOKTA EKLEME — GÖREV TANIMI

> Kullanıcı kararı, 1 Ağustos 2026 16:40. Bu oturum **tek bir hata sınıfını**
> kapatır ve bittiğinde kapanır.

---

## 0. NİÇİN AYRI BİR OTURUM

`CLAUDE.md §2` bu projenin en pahalı cümlesini taşıyor:

> **Noktası olmayan bölge, en yakın peteğe emilir ve O PETEĞİN SAHİBİYLE
> boyanır.**

1 Ağustos'ta üç ayrı oturum, birbirinden bağımsız olarak, **aynı sınıftan**
üç büyük boşluk ölçtü. Üçünde de **kod doğru, motor doğru, kayıtlar doğru** —
kusur **noktasızlıkta.** Ve üçü de on binlerce km².

Bu oturum o üçünü kapatır. **Veri düzeltme işi değil, NOKTA EKLEME işi** —
farkı bilmek önemli, çünkü araçları ve kaynak ihtiyacı başka.

---

## 1. ÜÇ BOŞLUK — hepsi ölçülmüş, hiçbiri tahmin değil

### 1.1 🔴 YUKARI MACARİSTAN — ~28.000 km², 91 yıl
**Ölçen:** ÇAPRAZ BATI (`cb8f5a0`) · **koordinatör doğruladı**

```
48,0-49,6°K / 18,8-22,6°D kutusunda   SIFIR NOKTA
en yakın sahipli komşu Eğri (Eger)    1596-10-12 → 1687-12-17 Osmanlı
⇒ bölge 91,2 yıl boyunca OSMANLI boyanıyor
   ölçülen: 51.178 km²'nin 27.982'si (%54,7)
```
🔴 **Yukarı Macaristan hiçbir zaman Osmanlı eyaleti olmadı.** Kassa
(Košice) **Habsburg'un Yukarı Macaristan Kaptanlığı'nın merkeziydi.**
Bocskai (1604-06) ve Bethlen dönemlerinde **Erdel prenslerine** geçti — ama
Erdel **tâbi bir prenslikti, eyalet değildi**, ve harita bu farkı `v:` ile
zaten ifade edebiliyor.

**Eklenecek (kullanıcı onayladı):**
```
Kassa (Košice)     ~48,72 / 21,26    Yukarı Macaristan Kaptanlığı merkezi
Tokaj              ~48,12 / 21,41
Eperjes (Prešov)   ~49,00 / 21,24
Sopron             ~47,68 / 16,58
```
✅ `macaristan` · `avusturya` **`BOYALAR`'da var, yeni renk gerekmiyor.**
⚠️ Koordinatlar **yaklaşıktır** — GeoNames'ten doğrula, hafızadan yazma.

### 1.2 🔴 DALMAÇYA ANAKARASI — Karlofça'nın yedi kalesi
**Ölçen:** ÇAPRAZ BATI (`5aed391`) · ARAŞTIRMA BALKAN (`§43`, `§44`)

```
Dalmaçya kutusunda 14 nokta:  7 Venedik → HEPSİ ADA
                              7 diğeri  → HEPSİ İÇ BÖLGE
                              anakara kıyısı → SIFIR
```
TDV `karlofca` Venedik'e kalanları **adıyla** sayıyor ve **yedisinin de kaydı
yok**: `Knin · Signe (Sinj) · Verlice · Delovar · Zadvar · Vergoriçe ·
Çiklit`. Ayrıca `Zadar · Split · Şibenik · Klis · Kotor · Herseknovi` de yok.

🔴 Üretilen üç ayrı hata (ÇAPRAZ BATI ölçtü):
```
Knin        1700'de OSMANLI  → doğrusu VENEDİK (TDV adıyla sayıyor)
Sinj        1700'de OSMANLI  → doğrusu VENEDİK
Kotor       1700'de karadag  → doğrusu VENEDİK, 1420-1797 KESİNTİSİZ
Herseknovi  1700'de karadag  → doğrusu VENEDİK, 1686/1687'den
Zadar/Split/Şibenik: rengi doğru ama peteği ADA'dan geliyor — sınır KURGUSAL
```
📌 **Venedik Arnavutluğu (Albania Veneta) tamamen yok** — Cetinje 12,3 km'den
bütün Boka Kotorska'yı yutuyor, Karadağ orada hiç sahip olmadı.

🔴 **VE SINIR ÜÇ KADEMELİ** (ARAŞTIRMA BALKAN, `§44`) — tek hatta yazmak
diğer ikisini siler:
```
Linea Nani      1671              Acquisto Vecchio
Linea Grimani   1699/1700         Acquisto Nuovo      (Şubat 1701'de araziye çizildi)
Linea Mocenigo  1718/1720/1721    Acquisto Nuovissimo
```

⚠️ **TDV bu kesiti yazmaya yetmiyor** — yedi kalenin **hiçbirinin** müstakil
maddesi yok (`kotor` · `knin` · `sinj` · `split` · `zadar` · `sibenik` ·
`hersek-novi` **ölü slug**). BALKAN kaynak damarını buldu:
```
Alberghetti 1732 haritası    birincil KARTOGRAFİK kaynak, ÜÇ hattı birden gösteriyor
Fürst-Bjeliš (2007)          hakemli, açık erişim
Tea Mayhew                   Dalmatia between Ottoman and Venetian Rule 1645-1718
```
📌 Ve BALKAN'ın kuralı: **damar konuya bağlı** — Dalmaçya'nın kaynağı belge
neşri değil **haritacılık**; sınırı Venedik askerî mühendisi ölçüp çizmiş.

🟡 `DESEN` etiketli, doğrulanmamış dört tarih (BALKAN buldu, **yazmadı**):
`1684-04-25` savaş ilânı · `1686-09-30` Sinj · `1688-09-11` Knin · `1715`

### 1.3 🔴 GİRİT'İN ÜÇ KALESİ — ~114,2 yıl-nokta
**Ölçen:** ÇAPRAZ AKDENİZ (`63ff8b9`)

```
Girit kutusunda 5 nokta: Hanya · Resmo · Kandiye · Sitiye · İsfakiye
Suda ✗   Spinalonga ✗   Granbosa ✗     (yedi yazım denendi)
⇒ harita 27 Eylül 1669'dan itibaren adayı BÜTÜNÜYLE Osmanlı boyuyor
```
TDV `girit` (**canlı**):
> *"Venedikliler'in elinde kalmış olan **Spinalonga ile Suda** kaleleri daha
> sonra **1127 (1715)** yılında Mora seferi sırasında fethedildi."*
> *"**Granbosa** Kalesi ise **1692** yılında ele geçirilmişti."*

```
Suda + Spinalonga   16.780 gün = 45,9 yıl × 2
Granbosa            22,3 yıl
```
🟢 **Bitiş tarihi uydurulmayacak:** `1715-09-07` veride **zaten var** —
Ayamavra ve Çuha Adası kullanıyor (Mora seferi).
⚠️ `Granbosa 1692` **yıl hassasiyetli** — `OGRENILENLER §76`, gün uydurma.

🟡 **Butrinto** da aynı sınıf (`C-5`): 1800 İstanbul Konvansiyonu'nun saydığı
dört yerden biri, üç yazım denendi, **kaydı yok.**

---

## 2. YAZMA YETKİN

```
✅ data/yerlesimler_ek.js        (yeni nokta dosyası — yoksa aç)
✅ oturumlar/NOKTA-EKLEME-ILERLEME.md
❌ data/yerlesimler.js           mevcut kayıtlara DOKUNMA
❌ arac/*.py · kök defterler     hiçbirine
```
🔴 **Mevcut bir kaydı düzeltmen gerekiyorsa YAZMA — koordinatöre bildir.**
Bu oturum **ekler**, düzeltmez. (Knin/Sinj/Kotor'un "yanlış" görünmesi bir
kayıt hatası değil; kayıt **yok**.)

---

## 3. HER NOKTA İÇİN ZORUNLU

```
ad          Türkçe (Yerel)  biçiminde — ör. ad:"Kassa (Košice)"
lat / lon   GeoNames'ten DOĞRULANMIŞ. Hafızadan koordinat YASAK.
tur         sehir | kale | liman | bolge
s: / d: / v:  KESİNTİSİZ zincir — 1281'den 1923'e boşluksuz
kaynak      TDV slug ya da akademik künye
```

⚠️ **3 km kuralı:** yeni nokta mevcut bir noktaya 3 km'den yakınsa petek
bozulur. Eklemeden önce en yakın komşuyu ölç ve yaz.

---

## 4. BUGÜN DOĞAN VE SENİ BAĞLAYAN KURALLAR

```
§73    Her bulguya GÜÇ ETİKETİ: KESİN · DESEN · ZAYIF · ÇELİŞKİLİ
       Yama YALNIZ KESİN'e dayanır
§73.1  Etiket YAZILANA konuyor, YAZILMAYANA konmuyor —
       "yazılması gereken her şey yazılmış mı" AYRI bir soru
§74    Birden çok tarih varsa önce "aynı sorunun cevapları mı" diye sor
       (fetih / antlaşma / tanıma AYRI alanlara gider)
§76    Gün bilinmiyorsa UYDURMA, komşunun gününü de ÖDÜNÇ ALMA
§78    Mevcut bir kayda benzemek doğru olmanın delili değildir —
       emsal göstermeden önce EMSALİN KENDİSİ sınanır
§80    Bir olay noktalarının HEPSİNE yazılmalı; birkaçına yazıp bırakma
§14    Rapor yazmadan önce git log --oneline -5, ÖLÇÜM COMMIT'İNİ yaz
§15    ad:"X" diye TAM EŞLEŞME arama — kayıtlar ad:"Türkçe (Yerel)" biçiminde
```

🔴 Ve `CLAUDE.md §4`: **TDV birincil, Vikipedi hiçbir zaman tek dayanak
değildir.** Dalmaçya'da TDV yetmiyor ⇒ akademik kaynak, künyesiyle.

---

## 5. SIRA — büyükten küçüğe, ama kaynağı hazır olandan

```
1. GİRİT üç kale      kaynak HAZIR (TDV girit canlı), emsal tarih HAZIR   → en ucuz
2. YUKARI MACARİSTAN  kullanıcı ONAYLADI, renk gerekmiyor, 4 nokta
3. DALMAÇYA           en büyük, ama kaynak turu gerekiyor — ÜÇ KADEMELİ yaz
```
📌 ①'den başla: bir noktayı baştan sona doğru eklemenin **yöntemini** orada
kur, sonra ölçekle.

---

## 6. BİTİRİNCE

1. `git diff --cached` **commit'ten ÖNCE** (`§66`)
2. `py arac/denetle.py` — `Değişmez 1` yeni sahipsiz **açmamalı**
3. 🔴 `py arac/uret_petek.py` **ÇALIŞTIRMA** — üretimi koordinatör tetikler
4. Raporda **her nokta için**: koordinat kaynağı · en yakın komşu mesafesi ·
   güç etiketi

⚠️ Bulamadığın noktayı **`bulunamadı` diye yaz.** 1 Ağustos'ta dört oturum
negatif sonuç yazdı ve dördü de doğru davrandı — **negatif sonuç da sonuçtur.**
