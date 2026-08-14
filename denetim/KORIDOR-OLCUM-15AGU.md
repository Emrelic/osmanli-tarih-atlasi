<!-- DURUM: BITTI ¦ 2026-08-15 ¦ ALTYAPI ⑤ ölçüldü + 18 eksik menzil kasabası -->
# KORİDOR AĞI — ÖLÇÜM · `ALTYAPI ⑤`

`ALTYAPI-DORT-MADDE.md §⑤` şunu yazıyordu: **"⚠️ HİÇBİRİ ÖLÇÜLMEDİ."**
Ölçüldü. Alet: `arac/koridor_olc.py` (üreteç — elle yazılan sayı bayatlar).

## Bugünkü durum

```
① DÜĞÜM (boğum)          65
② YERE OTURMUŞ           39  (%60,0)   ← lat/lon dolu; ötekiler ÇİZİLEMEZ
③ KENAR (iplik)          64   · uzunluğu ölçülmüş 22 · süresi ölçülmüş 25
④ KAPSAM                 kanat: anadolu 38 · rumeli 26
                         kutu: 21,4–46,6°K · 20,5–46,3°D
⑤ KAYNAK                 65/65 kaynaklı — Sak-Çetin, DergiPark 258113 🟢
```

🟢 **Şema kurulmuş ve kaynak disiplini temiz:** düğüm · kenar · kanat ·
kol · dönem · kaynak alanları var, `§4`ün kırmızı çizgisine uyuluyor.
🔴 **Kapsam Anadolu-Rumeli.** Emre'nin istediği *"tüm dünya nezdinde"*
değil; bugünkü ağ **tek bir kaynağın** kapsadığı alandır.

---

## 🔴 ASIL BULGU — koridor ağı, YERLEŞİM KATMANINDA 18 DELİK gösterdi

26 düğümün koordinatı yok ve sebebi `menzil-eslesmedi`. Sebebi ölçtüm —
üç ayrı sınıf çıktı ve **çareleri farklı**:

```
① YAZIM FARKI     5 düğüm  → eşleşiyor, mekanik
② YERLEŞİM YOK   18 düğüm  → NOKTA İŞİ, gerçek borç
③ belirsiz        3 düğüm  → araştırma
```

### ① Güvenli eşleşen 5 (tam ad eşleşmesi)
```
Harput   → Harput (Elazığ)      Lâdik  → Ladik (Amasya)
İzdin    → İzdin (Lamia)        İstefe → İstefe (Tebai)
Yenişehir→ Yenişehir (Bursa)
```

### ② 🔴 VERİDE HİÇ OLMAYAN 18 MENZİL KASABASI

Bunlar Osmanlı'nın **ana menzil güzergâhı** üzerindeki duraklar ve
`yerlesimler*.js` içinde **yokular**:

```
ANADOLU KOLU   Üsküdar · İshaklı · Ilgın · Karapınar · Ulukışla ·
               Tosya · Karahisâr-ı Şarkî · Kelkit · Aşkale
RUMELİ KOLU    Silivri · Vize · Prevadi · Babadağı · İshakçı ·
               Yagodina · Firecik · Praviște · Lanzaka
```

⚠️ **Üsküdar ve Silivri yok.** Doğrulandı: `Üsküdar` aramasında yalnız
`Üsküp` çıkıyor, `Silivri` aramasında `Silifke` ve `Silistre`.

🔴 **Bu, `CLAUDE.md §2`nin tam vakası:** noktası olmayan bölge en yakın
peteğe emilir. Ve `§3.5.1`in dersi gereği **iki yöne de** hata üretir —
hangi yöne, komşunun kimliğine bağlı.

📌 Ve şu ders yeni: **koridor ağı bir DENETİM ALETİ çıktı.** Menzil
listesi bağımsız bir kaynaktan geliyor ve yerleşim katmanına tutulduğunda
deliği kendiliğinden gösteriyor — hiçbir denetim betiği bu 18'i
bulamazdı, çünkü hepsi *"var olmayan"* kayıtlar ve bir betik olmayan
kaydı sayamaz.

---

## 🔴 VE BİR YANLIŞ EŞLEŞTİRİCİ YAKALANDI — kendi yazdığım

İlk denemede *"önek eşleşmesi"* kullandım (ad başlangıcı tutuyorsa eşle).
Ürettiği eşleşmeler:

```
Hasan Çelebi  → Hâş   (28,2°K 61,2°D — İRAN, ~2000 km ötede)
Hasankale     → Hâş   (aynı)
Karasu        → Karasubazar  (KIRIM)
```

Sebep: `sade("Hasan Çelebi") = "hascelebi"` ve `"hascelebi".startswith("has")`.

⇒ **Önek kuralı atıldı, yalnız TAM eşleşme kabul edildi.** Yakalanma
sebebi tekniğin kendisi değil, çıktıya **koordinatı da basmam** oldu.
📌 Ders: bir eşleştiricinin çıktısı **eşleşen adı değil, eşleşmenin
SONUCUNU** göstermeli. "Hasan Çelebi → Hâş" makul görünür; "Hasan Çelebi
→ Hâş (61°D)" görünmez.

---

## Bir gecede kapanmayan, açıkça yazılan üç iş

```
① 18 menzil kasabası → nokta olarak eklenecek
   ⚠️ Her biri koordinat + sahiplik dönemi ister. Sahiplik dönemi
   YAZILMADAN nokta eklemek `Değişmez 1`i kırar (sahipsiz nokta = delik).
   ⇒ Bu bir ARAŞTIRMA partisidir, mekanik iş değil. TEK GECEDE, kaynak
   açmadan yapılmaz — ve yapılırsa 18 uydurma tarih üretir.
② 42/64 kenarın uzunluğu ölçülmemiş
③ dünya güzergâh verisi (Viabundus vb.) YOK — kapsam Anadolu-Rumeli
```
