# ÖLÇÜM — TAVAN SEÇENEKLERİ: **kazanç ve bedel birlikte**, ve kazanan `Ⓒ1`

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · KOD/VERİ YAZILMADI** (koşu 7b sürüyor).
> Alet: `denetim/ARAC-TAVAN-SECENEK-0906.js`
> Önceki adım: `OLCUM-TAVAN-KAPLAMA-0906.md` (yalnız KAZANCI ölçmüştü)

---

## ⓪ NİÇİN — kendi eksiğimi kapatıyorum

Önceki ölçümde `Ⓒ`yi (yalnız `k1`/`k2` yükselt) **önerdim ama
ölçmedim**, ve *"kararın en önemli eksik parçası: kaplama kazancı
ölçüldü, YAN ETKİ ölçülmedi"* diye yazdım. Bu alet o eksiği kapatıyor:
**çöl bölgeleri de ızgaraya kondu** — orada kaplamanın ARTMASI kazanç
değil **BEDEL**dir (2 Eylül kaydı: *"tavan indirimi ağır bedel
bindiriyordu"*, ters yönün bedeli çöl emilmesidir).

---

## ① TABLO — beş şema, aynı ızgarada

```
bölge                      Ⓐ bugün   Ⓒ1        Ⓒ2        Ⓓ         Ⓑ eski
                           hepsi200  k1=400    k1=700    hepsi300  kademeli
                                     k2=300    k2=420
──────────────────────────────────────────────────────────────────────────
🟢 KAZANÇ · Çağatay          %83,9    %91,2     %96,9     %96,6     %98,5
🟢 KAZANÇ · Altın Orda       %98,5    %98,9    %100,0    %100,0    %100,0
⚪ KONTROL · Anadolu        %100,0   %100,0    %100,0    %100,0    %100,0
🔴 BEDEL  · Sahra            %67,9    %68,8     %82,4     %88,1     %90,3
🔴 BEDEL  · Rub'ul Hâlî      %43,2    %57,4     %91,4     %73,4     %97,2
```

### Ⓐ'ya göre FARK (puan)
```
                             Ⓒ1       Ⓒ2       Ⓓ        Ⓑ
Çağatay      KAZANÇ         +7,2    +12,9    +12,6    +14,6
Altın Orda   KAZANÇ         +0,3     +1,5     +1,5     +1,5
Anadolu      KONTROL         0,0      0,0      0,0      0,0
Sahra        BEDEL          +0,9    +14,6    +20,3    +22,4
Rub'ul Hâlî  BEDEL         +14,2    +48,2    +30,2    +54,0
```

---

## ② 🟢 HÜKÜM: **Ⓒ1** — ve gerekçesi oran, tercih değil

```
            Çağatay kazancı      çöl bedeli (Sahra + Rub ortalaması)
Ⓒ1            +7,2  (%49)             +7,6   ← EN İYİ ORAN
Ⓒ2           +12,9  (%88)            +31,4
Ⓓ            +12,6  (%86)            +25,3
Ⓑ            +14,6 (%100)            +38,2
```

🟢 **`Ⓒ1` mevcut kazancın YARISINI alıyor, Sahra bedelinin YALNIZ %4'ünü
ve Rub'ul Hâlî bedelinin %26'sını ödeyerek.**
🔴 **`Ⓒ2` reddedilir:** kazancın %88'ini alıyor ama Rub'ul Hâlî'de
bedelin **%89'unu** ödüyor — neredeyse eski tavana dönmek demek.
🔴 **`Ⓑ` (eskiye tam dönüş) en pahalısı:** Rub'ul Hâlî %43 → %97, yani
çölün neredeyse tamamı bir yerleşime bağlanıyor.

📌 **VE BİR BULGU: RUB'UL HÂLÎ, SAHRA'DAN ÇOK DAHA DUYARLI.**
`Ⓒ2`de Sahra +14,6 iken Rub'ul Hâlî +48,2. Sebep yapısal: Arabistan'ın
çevresindeki yerleşimler **yüksek kademeli** (Mekke · Medine · Riyad
gibi `k1`/`k2`), Sahra'nınkiler daha alçak kademeli. ⇒ `k1`/`k2`
tavanını yükseltmek Arabistan'ı **orantısız** etkiliyor.
⇒ Bu, `Ⓒ1`i daha da haklı çıkarıyor: `k1=400` `k2=300`, `k1=700`
`k2=420`den çok daha güvenli.

---

## ③ ⚠️ ÖLÇÜMÜN SINIRLARI — karar bunlarla birlikte okunmalı

```
🔴 HÜCRE sayar, km² DEĞİL. Oranlar güvenilir, MUTLAK büyüklük değil.
🔴 KARA/DENİZ ayrımı YOK — ızgara ham dikdörtgen.
🔴 "Çölde kaplama artışı = bedel" varsayımı KABA: bir vahanın kendi
   hinterlandını alması MEŞRU olabilir. Bu ölçüm meşru genişlemeyi
   emilmeden AYIRT EDEMEZ.
🔴 `COL_PUAN_ESIK` ve `COL_TAVAN_KM=300` gibi ÇÖLE ÖZEL frenler bu
   ölçüme GİRMEDİ — motor onları ayrıca uyguluyor, yani gerçek çöl
   bedeli buradakinden DÜŞÜK olabilir.
   ⇒ Yani `Ⓒ1`in bedeli burada gösterilenden İYİ olabilir, KÖTÜ değil.
🔴 Yalnız BEŞ şema denendi. `k1=350` ya da `k2=250` gibi ara değerler
   ölçülmedi — ama alet hazır, tek satır değişiklikle ölçülür.
```

---

## ④ KARAR EMRE'NİN
```
Ⓐ 200'de KAL      Çağatay'ın %16'sı boş kalır. Koşu 7b zaten böyle çıkacak.
Ⓒ1 ÖNERİLEN       k1=400 · k2=300 · gerisi 200.
                  Çağatay %83,9 → %91,2 · Sahra bedeli neredeyse SIFIR
Ⓑ/Ⓒ2/Ⓓ           ölçüldü, ORANI KÖTÜ — kazanç için ödenen çöl bedeli
                  orantısız
```
🔴 Üçü de `uret_petek.py` değişikliği ⇒ **yeni koşu (~16+ saat)**, ve
koşu 7b bitmeden hiçbiri yapılamaz.
