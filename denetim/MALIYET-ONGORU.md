<!-- DURUM: CALISIYORUM ¦ 2026-08-15 ¦ maliyet-mesafe prototipi öngörüsü -->
# MALİYET-MESAFE PROTOTİPİ — ÖNGÖRÜ

> 🔴 **BU DOSYA KOD YAZILMADAN ÖNCE YAZILDI.** Sonradan yazılan beklenti,
> ölçümü gördükten sonra farkında olmadan ona göre şekillenir ve hiçbir
> zaman yanlış çıkmaz — yani hiçbir şey öğretmez. Önce yazılan beklenti
> **yanlış çıkabilir**, ve ancak yanlış çıkabilen bir şey bilgi taşır.
> (`CLAUDE.md §11`, RENK 2'nin 8 Ağustos dersi.)

**Yazan:** KOORDİNATÖR · **Zaman:** 2026-08-15, prototip koşmadan önce
**Ölçülecek alet:** `arac/maliyet.py` (henüz yazılmadı)

---

## SINAV — Çimpe / Gelibolu

Bu sınav bu projede **zaten kayıtlı** (`denetim/KUTU-ACIK-MADDELER.md:594`),
Emre'nin kendi kuralından doğdu:

> *"Toprağın boyanması için orada yerleşim ya da garnizon olmalı; karşı
> kıyıdaki egemenliğin taşması olmamalı."*

Bugünkü motor mesafeyi **kuş uçuşu** ölçüyor, deniz engel **değil**.
Maliyet-mesafe motorunun ilk işi bunu kesmek.

---

## BEŞ ÖNGÖRÜ — sayıyla, ve MAZERETİ ÖNCEDEN YAZILMIŞ hâlde

```
① VORONOİ, Rumeli kıyısını Anadolu noktalarına verir
   öngörü: Gelibolu yarımadasının KARA hücrelerinin > %20'si, Çanakkale
   Boğazı'nın ANADOLU yakasındaki bir noktaya atanır.
   🔴 MAZERET YOK — tutmazsa "deniz zaten engeldi" demektir ve
      bütün gerekçe çöker.

② MALİYET-MESAFE bunu SIFIRA indirir
   öngörü: aynı hücrelerin ATLAYANI = 0 (deniz sürtünmesi ∞).
   🔴 MAZERET YOK — bu, motorun VAR OLMA sebebi.

③ İKİSİ ARASINDAKİ FARK, KARA ÜZERİNDE de görünür ama KÜÇÜK
   öngörü: yalnız karadan yürünen bölgede iki yöntemin ayrıştığı
   hücre oranı %5-15 arası.
   🟡 MAZERETİ VAR: nehir geçiş bedelini kaç seçtiğime bağlı.
      %15'in çok üstü çıkarsa nehir bedeli fazla yüksek demektir,
      parametre hatası — motor hatası değil.

④ AĞIRLIK, SONUCU KOMŞUSUNA GÖRE DEĞİŞTİRİR
   öngörü: aynı ağırlık farkı (k:1 vs k:4), İstanbul'un yanında ihmal
   edilebilir, boşlukta koca bir bölge verir. Ölçüt: aynı ağırlık oranıyla
   iki ayrı yerde üretilen alan farkı > 3 kat.
   🟡 MAZERETİ VAR: bu bir TASARIM iddiası (`ALTYAPI §1.1b`), prototip
      onu yalnız GÖSTERİR; tutmazsa ağırlık formülü yanlış demektir.

⑤ HIZ — bölgesel ızgarada koşulabilir
   öngörü: 0,01° çözünürlükte (~1,1 km) Marmara kutusu < 60 saniye.
   🟡 MAZERETİ VAR: saf Python Dijkstra; yavaşsa çözüm çözünürlük
      düşürmek DEĞİL, numpy'a taşımaktır.
```

---

## NE ÖLÇÜLMEYECEK — açıkça

```
🔴 YÜKSEKLİK / EĞİM      veri YOK (veri-kaynak/ tarandı: kıyı · göl ·
                         nehir · bölge · ülke var, DEM yok)
                         ⇒ katman PLUGGABLE yazılıyor, ağırlığı BUGÜN 0.
                         "Dağ engeldir" iddiası bu gece SINANMAZ.
🔴 ORMAN / BATAKLIK      veri YOK, aynı muamele
🔴 DÜNYA ÖLÇEĞİ          prototip BÖLGESELDİR. "Bütün dünyada çalışır"
                         bu gece ölçülmeyecek bir iddiadır.
```

⚠️ Ve bu liste `§11`in *"ölçemediğini eleyen süzgeç onu temiz sayar"*
dersinin gereği: ölçülmeyen şey **`ölçülmedi` diye yazılır**, `yok`
diye değil.
