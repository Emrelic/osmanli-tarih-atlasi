# DÜNYA PENCERESİ — Emre'nin kararı, 28 Ağustos 2026

```
AD        DÜNYA PENCERE
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya + oturumlar/ORTAK-PAKET-KURALLARI.md
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

> Emre: *"Böyle ilerleyelim, bir görelim bakalım ne çıkacak önümüze —
> tüm dünyayı açalım."*

## 0. NİÇİN ARTIK MÜMKÜN — bir yasak ölçülerek düştü

`CLAUDE.md §6` bunu yasaklıyordu:
> *"Nokta yoğunluğu sağlanmadan `BOLGE` kutusunu açma. Kars'ın peteği
> Çin'i, Fas'ınki Atlantik'i boyar."*

🔴 **Emre itiraz etti, ölçüm onu haklı çıkardı.** `§6` yazıldığında olmayan
üç koruma bugün var:
```
① ADA KURALI            :1731 — "peteği KENDİ kara parçasının dışına
                        taşamaz" ⇒ Fas okyanusu geçemez, YAPISAL
② KARA-KISITLI SAHİPLİK :1819 — Dijkstra kara ızgarasında
                        ⇒ sahiplik düz çizgiyle değil KARA YOLUYLA yayılır
③ TAVAN_KM {1:700, 2:420, 3:280, 4:140}
```
🟢 **Doğrudan kanıt (28 Ağu, koşu 1):** tavan kısıldı ve kaybolan toprak
**SAHİPSİZLEŞTİ, uzak komşuya GİTMEDİ** (1800: 5.175.521 → 4.304.332).
`§6` doğru olsaydı o toprak komşulara dağılırdı. Dağılmadı.
⇒ Yasak düştü. **Ama gerekçesi değişti, risk yok olmadı** — aşağıda.

## 1. YOĞUNLUK TABANI — ölçüldü, 28 Ağustos

| bölge | nokta | alan | km²/nokta |
|---|---|---|---|
| Anadolu | 294 | 0,78 M | **2.653** |
| Güneydoğu Asya | 212 | 4,5 M | 21.226 |
| Hindistan | 143 | 4,2 M | 29.371 |
| Çin | 141 | 9,6 M | 68.085 |
| Sahra altı Afrika | 189 | 21 M | 111.111 |
| Sibirya | 60 | 13 M | 216.667 |
| Kuzey Amerika | 83 | 24 M | 289.157 |
| Güney Amerika | 53 | 17,8 M | 335.849 |
| Avustralya | 14 | 7,7 M | **550.000** |

**207 kat** açıklık. Toplam 2609 nokta.

---

## 2. 🔴 GERÇEK RİSK: "TAŞMA" DEĞİL, "ANLAMSIZ DOLGU"

Tavan taşmayı önler. Ama **dolgu kapısı** (`PUAN_ESIK`) boş peteği
doldurmaya çalışır — ve Emre'nin en çok şikâyet ettiği davranış bu:
> *"Boşluk var diye anlamsız derecede gereksiz çölde boyamalar yapılsın
> istemiyorum."*

Sahra'da çare bulundu ve **çalıştı**: `COL_PUAN_ESIK = 8` (normal 4).
Koşu 1'de **14.468 petek-gün çölde takıldı, boyanmadı.**

### SENİN İŞİN ① — o çareyi GENELLEŞTİR
```
Bugün:  çöl poligonu İÇİNDE  →  eşik 8
Öneri:  YOĞUNLUĞU DÜŞÜK bölgede → eşik yükselt
```
🔴 Ama **eşiği sen uydurma, ÖLÇ.** Cevaplanacak sorular:
```
a) "seyrek bölge" nasıl tanımlanır? km²/nokta eşiği kaç?
   (Sahra altı 111 bin ile Avustralya 550 bin arasında nerede kesilir?)
b) tanım COĞRAFİ mi (poligon) yoksa HESAPLANMIŞ mı (her petek için
   en yakın N komşunun ortalama mesafesi)?
   📌 İkincisi daha iyi olabilir: veri büyüdükçe KENDİLİĞİNDEN gevşer.
      Poligon elle bakım ister ve bayatlar.
c) çöl poligonu ile çakışırsa hangisi kazanır?
```
⚠️ `COL_TAVAN_KM = 300` bugün **İŞLEVSİZ** — k0/k3/k4 hepsi altında,
2283/2356 noktada yapısal olarak hiçbir şey kesemiyor. Motorun kendi
yorumu (`uret_petek.py:789`) bunu yazıyor. Yeni bir eşik tasarlarken
**aynı tuzağa düşme**: eşiğin BAĞLAYICI olduğunu ölç.

---

## 3. SENİN İŞİN ② — PENCERE KUTUSU

Bugün:
```python
BOLGE = unary_union([box(-12, -11, 146, 82), box(-25, 60, -12, 82)])
```
Dünya için önerilen:
```python
BOLGE = box(-180, -60, 180, 85)
```
🔴 **Kendin doğrula ve şu üçünü ölç:**
```
a) -60 güney sınırı doğru mu? Antarktika hariç ama Tierra del Fuego
   (-55,9) ve Güney Georgia dâhil olmalı mı?
b) 85 kuzey sınırı? Svalbard 78, Grönland kuzeyi 83.
c) ±180 boylam SARMASI — Çukotka ve Aleutlar meridyeni geçiyor.
   `box()` bunu nasıl karşılıyor? Bir petek 179°D'den 179°B'ye
   ATLAYABİLİR Mİ? 🔴 Bu gerçek bir risk ve ada kuralı onu görmez.
```
📌 (c) en tehlikelisi ve kimse bakmadı. Ölç, ölçemiyorsan **`ölçemedim`
diye yaz** — sessiz geçme.

---

## 4. SENİN İŞİN ③ — SÜRE

Bugünkü pencere ≈ 158° × 93°, dünya ≈ 360° × 145° ⇒ **3,55 kat.**
Dijkstra ızgarası `0,05°`: bugün ~5,9 M hücre → dünyada ~20,9 M.
Şu anki koşu 5+ saat. Tahminim **10-15 saat** ama **ÖLÇÜLMEMİŞ.**

🔴 Ölç: hangi aşamalar pencereye duyarlı, hangileri değil?
```bash
grep -E "⏱" kosu2_28agu.log
```
Kara maskesi · göl çıkarma · ızgara kurulumu pencereye duyarlı.
"Osmanlı gövde geometrisi" (56 dk) dönem sayısına duyarlı, pencereye DEĞİL.
⇒ Gerçek çarpan 3,55'ten **küçük** olabilir. Ölç ve söyle.

---

## 5. 🔴 ÖNGÖRÜ — KOŞUDAN ÖNCE, MAZERETLİ/MAZERETSİZ AYRI

Bu proje bunu pahalı öğrendi: sonradan yazılan beklenti ölçümü gördükten
sonra ona göre şekillenir, hiç yanlış çıkmaz, **hiçbir şey öğretmez.**
28 Ağustos'ta koşudan önce yazılmış bir öngörü çürüdü ve **bir yayın
hatasından döndük** (Osmanlı %19 küçülüyordu, sahipsizleşiyordu).

**MAZERETİ OLMAYAN — tutmazsa kod yanlış demektir:**
```
① OSMANLI GÖVDESİ DEĞİŞMEZ (±%0,5)
   Pencere Amerika/Okyanusya'ya açılıyor; Osmanlı coğrafyası ZATEN
   pencerenin içindeydi. Değişirse pencere kodu onu da etkilemiş demektir.
   Ölçüm: 1600 · 1700 · 1800 · 1900 · doğrudan + tâbi TOPLAMI
② ±180 SARMASI YOK — hiçbir petek meridyeni atlamamalı
③ ADA KURALI ÇOK ATEŞLER — kıtalar arası deniz eklendi, sayaç ARTMALI
```
**MAZERETİ OLABİLİR:**
```
④ kaç km² boyandı · kaç km² sahipsiz (taban yok, ilk ölçüm)
⑤ süre (ölçülmemiş tahmin)
⑥ bozuk kenar sayısı (yeni kıyı şeritleri geldi)
```

---

## 6. DOSYA SAHİPLİĞİ

```
🟢 SENİN   denetim/BULGU-DUNYA-PENCERE.md   ← ölçümler + öngörü
🔴 DEĞİL   arac/uret_petek.py — `BOLGE` satırını ve eşiği KOORDİNATÖR yazar
           (motorun parmak izlediği üçlüde; koşu sırasında yazmak ÖLDÜRÜR —
            8 Ağustos'ta 83 dakikalık bir koşu böyle öldü)
```
Sen **ölçer ve tasarlarsın**; uygulamayı ben yaparım.

🔒 **ŞU AN BİR KOŞU KOŞUYOR** (`kosu2_28agu.log`, 17:52). `arac/*.py`ye
DOKUNMA.

## 7. HABERLEŞME

```bash
py arac/tahta_bekci.py --kim "DÜNYA PENCERE" --ara 60      # İLK İŞ
py arac/tahta.py yaz --kim "DÜNYA PENCERE" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
Adım adım bildir — üçünü birden bekleme. ③'ün (süre) sonucu Emre'nin
kararını değiştirebilir; onu **erken** ver.

📌 Ve `ORTAK-PAKET-KURALLARI §4` bağlayıcı: rapora *"ölçtüğüm şu"* ve
*"bundan çıkardığım şu"* diye **iki ayrı satır** yaz. 28 Ağustos'ta bir
günde altı vakada sayı doğruydu, **çıkarım yanlıştı.**
