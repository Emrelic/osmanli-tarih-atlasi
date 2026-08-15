<!-- DURUM: CALISIYORUM | 2026-08-16 | ek31 acildi: 2 nokta (Abalak · Kizil-Tura) · asil urun OLCUM: Degismez 5c'yi doguran 10 nokta · kendi denetimim 4 hata yakaladi ve DUZELTILDI -->
# NOKTA SİBİRYA 2 — ilerleme

**Oturum:** `local_dc1f5720-f6a1-4891-a08a-e22c1fe02da4`
**Önceki adlarım:** OPUS HAZIR KITA 6 → NOKTA MENZİL → **NOKTA SİBİRYA 2**
**Görev:** [oturumlar/NOKTA-SIBIRYA-2.md](NOKTA-SIBIRYA-2.md) · tahta `M-0115`
**Dosyam:** `data/yerlesimler_ek31.js`

---

## ⓪ IS 0 — bölge sanıldığından DOLU

Sibirya kutusu (50-73°K / 52-180°D): **77 nokta zaten var.**
```
kur: VAR                      19
kur: YOK ama 1281'de SAHİPLİ  10   ← 🔴 hiçbir denetimin görmediği sınıf
kur: YOK, 1281'de sahipsiz    48   ← 48/48'inde `bos:` bayrağı VAR
```

### 🟢 ASIL ÜRÜN BU DOSYA DEĞİL, ÖLÇÜMDÜ — `Değişmez 5c` doğdu
`Değişmez 5`in iki dalı da o 10 noktayı **göremiyordu**: `5a` `kur:`ı
olmayana bakmıyor, `5b` ilk dönemi 1381'den sonra olana bakıyor. Bu sınıfın
`kur:`ı **hiç yok** ve ilk dönemi 1281'de başlıyor — **ikisinin arasından
geçiyorlardı.** Koordinatör `Değişmez 5c` olarak koda çevirdi
(`M-0119` · `M-0121` · `M-0122`).

### Ve "hepsi hayalet değil" — kaynağa sorup ayırdım
```
🟢 MEŞRU     Tümen (Çimgi-Tura) · Tobolsk (İsker)
             TDV `sibir-hanligi` ikisini de ADIYLA sayıyor — Rus ostrogu
             değil, fetihten ÖNCE var olan Tatar şehirleri
🟡 ALAN ADI  Ural eteği · Baraba bozkırı · Buryat toprakları · Kazak bozkırı
             yerleşim değil bölge dolgusu; `kur:` kavramı uygulanmaz
🔴 ŞÜPHELİ   Çerdın · Pustozersk · Ust-Tsilma · Yelabuga
             VERİ ZAMAN'ın menzilinde DE değiller (onunki "kur: var ama geç")
```

### Ural farkı — çelişki değil, SORU farkı çıktı
Şartname *1281'de 6*, ben *20* ölçtüm. *"Şartname yanlış"* demedim, kutu
istedim. Kutular **birebir aynıymış**; fark şuradan: ben `kur:` kontrolü
**yapmadım**, yalnız *"dönem 1281'i kapsıyor mu"* sordum. İkimiz de doğru
ölçmüşüz, farklı soru sormuşuz — ve aradaki boşluk **14 hayaleti** ortaya
çıkardı.

---

## ① ek31 — 2 nokta yazıldı

TDV `sibir-hanligi` (gövdesi okundu) beş şehir adı verdi:
*"Kızıl-Tura, Karaçin, Taşatkan, Abalak, Tarhankale vb."* — **hiçbiri
veride yok.** Ama TDV **koordinat vermiyor**, ve ikisini yazabildim:

```
Abalak       58,129 / 68,594   ✅ özdeşleştirme TARTIŞMASIZ (yer adı sürekli,
                                  1636 manastırı aynı yerde), Tobolsk'a 21 km
Kızıl-Tura   57,700 / 71,170   🟡 özdeşleştirme ZAYIF (Ust-İşim), TDV
                                  söylemiyor, akademik kaynakta doğrulanamadı
```
**Yazılmayanlar ve sebepleri dosyada:** Karaçin (konum onlarca km belirsiz,
3 km ihlali riski) · Taşatkan · Tarhankale (modern karşılığı bulunamadı).
📌 Üçü de *"araştırılmadı"* değil **"arandı, koordinatı bulunamadı"** —
eksik olan tarih değil **koordinat**. Bir sonraki oturum sıfırdan aramasın.

## ② 🔴 KENDİ DENETİMİM TESLİMDEN ÖNCE DÖRT HATA YAKALADI

İlk yazdığım dönemler `§3.5`in **hayalet devlet** sınıfına giriyordu:
```
yazdığım    sibir-hanligi 1428 →  rusya 1923'e kadar
künye ömrü  sibir-hanligi 1430-01-01 → 1598-08-20
            rusya         1547-01-16 → 1917-03-15
```
⇒ Hanlık künyesinden **2 yıl önce** başlıyordu; `rusya` künyesi 1917'de
bittiği hâlde **1923'e kadar** boyuyordu.

🟢 **Ve künye benim uydurduğumdan iyisini verdi: `1598-08-20`.** Ben *"gün
bilinmiyor"* deyip `1598-01-01` yazmıştım; künyede **kesin gün** duruyormuş.
⇒ Uydurulmuş yuvarlak tarih, **var olan kesin tarihi örtüyordu** — `§11`in
*"yuvarlak tarih yalnız yanlış değil, çelişkiyi de saklar"* dersinin
tersten hâli.

Düzeltilmiş zincir künyelerle **birebir**:
`altinorda` → `sibir-hanligi` → `rusya` → `rusya-gecici-hukumet` →
`sovyet-rusya`, beşinin de rengi VAR, **HATA: 0**.

⚠️ **Bir tutarsızlık bildirdim:** Sibirya'daki mevcut noktalar bu 1917
zincirini **kullanmıyor** (kutuda 1900 sonrası tek kayıt var, o da
`cin-cumhuriyeti`). Benim dosyamın kusuru değil ama komşularımla ayrışıyor.

---

## ③ YAKUTİSTAN + KAMÇATKA 1281 KESİTİ — 3 nokta eklendi ✅

### Ölçüm önce, nokta sonra
Sorulan soru *"kaç nokta var"* değil: **`§2` gereği bu alan kimin peteğine
emiliyor?** 1281'de **sahnede olan** noktalar ayrıldı (`kur:`ı 1281'den
sonra olan nokta o gün sahnede DEĞİLDİR) ve ızgara tarandı:
```
1281'de sahnede            2241 / 2527 nokta
500 km'den uzak hücre      8 · EN KÖTÜSÜ 751 km
```

### 🔴 Ve sebep tek bir yerde toplandı — KAMÇATKA
```
56°K 160°D → "Koryak toprakları"  751 km
56°K 168°D → "Koryak toprakları"  678 km
56°K 152°D → "Ohotsk"             642 km
```
Çünkü **Petropavlovsk'un `kur:`ı 1740** — yarımadanın tek noktası 1281'de
sahnede değil. Kamçatka o gün **boştu** ve yüzlerce km öteden emiliyordu.
📌 NOKTA SİBİRYA'nın kapattığı *"Çukotka 2.106 km öteden emiliyor"*
kusurunun kardeşi: orada **kimlik yanlıştı**, burada **nokta hiç yoktu.**

### Eklenenler ve boşluğun CİNSİ
```
Kamçatka (İtelmen toprakları)         55,000 / 158,500   veri-yok
Kolıma havzası (Yukagir toprakları)   66,000 / 152,000   veri-yok
Doğu Sibirya kıyısı (Çuvan-Yukagir)   70,000 / 161,000   veri-yok
```
Üçü de **`veri-yok`**, ve bu bir tercih değil sınavın sonucu: TDV bu
halkları (İtelmen · Yukagir · Çuvan) **kapsamıyor**, akademik literatürü
ise **aramadım**. `devletsiz` deseydim *"bir daha bakılmasın"* demiş
olurdum — yani ölçmediğim bir şeyi ölçmüş gibi gösterirdim.
⇒ Çukotka'ya bakılmayacak (kaynak konuştu), **buraya bakılacak.**

### Sonuç — 8 boşluğun 7'si kapandı
```
56°K 152°D  642 → 425 km ✓      64°K 152°D  555 → 223 km ✓
56°K 160°D  751 → 146 km ✓      68°K 160°D  567 → 226 km ✓
56°K 168°D  678 → 609 km 🔴     72°K 160°D  709 → 226 km ✓
```
⚠️ Kalan tek hücre **56°K / 168°D — Bering Denizi**, Kamçatka'nın ~300 km
doğusunda açık su. Kara maskesi zaten kesiyor ⇒ nokta gerekmiyor.
**Ölçüm bu; "deniz olduğu için önemsiz" çıkarımını da ayrı yazıyorum.**

### Denetim
```
3 km ihlali   0   (en yakın 21,3 km)
yapı          mevcut boşluk noktalarıyla birebir: tur:"bolge" · bos:true ·
              s/d/v 0/0/0 · neden: alanı CİNS önekiyle başlıyor
yorum         TEMİZ
```

## ④ SIRADAKİ
- Dört şüpheliyi (Çerdın · Pustozersk · Ust-Tsilma · Yelabuga) kaynağa
  sorup `kur:` teklifi çıkarmak — **ölç ve BİLDİR, YAZMA** (M-0147)
- 🔴 Dosya `girdi.py`ye **bağlanmadı** — koordinatörde
