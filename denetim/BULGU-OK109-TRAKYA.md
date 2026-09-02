# BULGU — `parti-emrelic-0039 / H-0001` TRAKYA KOLU

**OPUS HAZIR KITA 109 · 2 Eylül 2026**

---

## 🔴 ÖNCÜL ÇÜRÜDÜ — BORÇ ZATEN ÖDENMİŞ

Kalemi *"Trakya kolunda nokta boşluğu var, `Kofçaz ↔ Malko Tırnova ~51 km`
baskın boşluk"* diye taşıyordum. **Ölçüm çürüttü:**

```
iddia    Kofçaz ↔ Malko Tırnova ~51 km, baskın boşluk
ölçüm    ikisi en-yakın-komşu bile DEĞİL · aralarında Dereköy var
         Kofçaz  → Dereköy   18,6 km
         Malko T.→ Dereköy   11,2 km
         Kofçaz  ↔ Malko T.  ~29 km (ve ilgisiz)
```

**Sebep:** şerit **11 Ağustos 2026'da kuruldu** — commit `d333096`,
*"TRAKYA SINIR ŞERİDİ — 16 nokta, hattın İKİ YAKASINDAN"*, ve onu yazan
**koordinatörün kendisi.** Commit mesajı benim öncülümü kelimesi kelimesine
doğruluyor **ama geçmiş zamanda**:

> *"Türkiye-Bulgaristan hattı öncesinde TAMAMEN noktasızdı (Kırklareli
> hariç) — sınırın yeri hiçbir kayıtla belirlenmiyordu."*

⇒ Benim taşıdığım sayı **o commit'ten ÖNCEYE** ait. `§11`in *"bir talebi işe
dönüştürmeden önce `git log` — bu iş zaten yapılmış mı?"* kuralının bir vakası
daha; bu sefer **on saniyelik kontrolü yapmayan bendim**, ve dahası **kalemi
tahtaya `hazır bir kalem` diye ilan etmiştim** (M-2163).

---

## BUGÜNKÜ DURUM — ölçüldü, şerit SAĞLAM

`girdi.py`nin 69 dosyası · 2663 nokta · kesit `1923-06-15`
Kutu `41,3-42,3 K / 25,9-28,3 D` → **18 nokta**, hattın **iki yakası da** dolu:

```
BG yakası  Elhova · Mustafapaşa · Malko Tırnova · Ahtapolu · Rezve
TR yakası  Lalapaşa · Kofçaz · Dereköy · Demirköy · İğneada · Kırklareli · Vize
GR yakası  Çirmen · Orestiada · Dimetoka
```
Onunun onu `k:3` — yani `d333096`in *"sınır noktası `k:4` yazılınca
komşularına yeniliyor ve sınırı TUTAMIYOR"* düzeltmesi de yerinde.

**En büyük en-yakın-komşu boşluğu 39,6 km** (Elhova ↔ Lalapaşa) ve **iki ayrı
devletin** noktaları — yani hattın kendisi zaten iki yakadan kayıtlı.
`k:3` tavanı 280 km olduğuna göre bu aralık **emilme üretmez.**

⇒ **Bu kolda yazılacak nokta YOK.** Kalem kapanmalı.

---

## 🟡 GERÇEKTEN AÇIK OLAN TEK ŞEY — KARAAĞAÇ, ve o bir NOKTA İŞİ DEĞİL

`d333096` bunu kendi içinde kaydetmiş:

> *"🔴 KARAAĞAÇ YAZILAMADI: Edirne'ye ~2,5 km, 3 km kuralının ALTINDA —
> Lozan'ın Karaağaç çıkıntısı bu modelde İFADE EDİLEMEZ."*

**Bugün ölçüldü ve borç duruyor:**
```
atlasta Karaağaç kaydı        0 — YOK
Edirne 41,6770 / 26,5560  ·  Karaağaç ~41,6640 / 26,5330
ölçülen mesafe                2,40 km   ⇒ 3 km kuralının ALTINDA
```

### Yapısal sonuç
Kendi noktası olmadığı için **Karaağaç her zaman Edirne'nin peteğine düşer ve
Edirne'nin sahibiyle boyanır.** Lozan'ın Karaağaç çıkıntısı — Yunanistan'ın
tazminat yerine Türkiye'ye bıraktığı şerit — **haritada ayrı bir varlık olarak
hiç görünemez.**

### 🔴 ÖLÇMEDİĞİM
Edirne ile Karaağaç'ın sahibinin **hangi tarihlerde ayrıştığını ÖLÇMEDİM.**
Ayrışma yoksa bu kusur *görünmez* kalır; varsa `§2` emilme hatası üretir.
Bunu ölçmek ayrı bir iştir ve **kaynak kararı** gerektirir (1913 · 1920 · 1923
düzenlemeleri). *Ölçmediğimi ölçmedim diye yazıyorum.*

### Ve niçin kendi başıma çözemem
Karaağaç'ı yazmak **3 km kuralını çiğnemek** olur — o kural `§11`in
Varat/Varad ve Afyon/Karahisâr-ı Sâhib vakalarından doğdu ve **yakın mükerrer
nokta** üretmeyi engelliyor. Yani burada iki proje kuralı **birbirini kesiyor**:

```
3 km kuralı        yakın mükerrer noktayı yasaklar     → Karaağaç YAZILAMAZ
§2 / ifade gücü    her ayrı tasarruf kayıtla belirlenmeli → Karaağaç YAZILMALI
```

📌 Bu, `§11`in *"kusur ne tavandaydı ne yetim-yüz mantığında — İKİSİNİN
ARASINDAYDI"* dersinin aynısı: **iki kural da tek başına doğru**, ve hiçbir
denetim *"bu ikisi birbirini kesiyor mu"* diye sormuyor.
⇒ Karar **koordinatörün/Emre'nin**; bir işçi oturum iki kuraldan birini
kendi başına feda edemez.
