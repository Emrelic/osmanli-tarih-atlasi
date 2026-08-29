# BULGU — `Değişmez 7`de 485 → 488: altı yeni soru, hiçbiri kusur değil

**Tarih:** 29 Ağustos 2026 · **Ölçen:** ORHANGAZİ (koordinatör)
**Sebep:** sahiplik yaması, commit `3cf33e9` + `08ab66d` (25 kayıt)

---

## Niçin bu dosya var

`Değişmez 7` **veri değil YÖNTEM ölçer.** Denetimin kendi metni:

> *"Aşağıdaki liste **'burada bir SORU SORULMADI'** der, **'burası YANLIŞ'
> DEMEZ.** Kayıtları silerek kapatmak, hakiki enklavları yok etmek olur."*

Sahiplik yaması indi, sayı 485'ten büyüdü. Tavan **488'e çekildi** — ama
`CLAUDE.md`nin kuralı gereği **sessizce değil:**

> *"Ölçülmüş ve kabul edilmiş bir borç, kayıtsız kalırsa yarın bir kusur
> olarak yeniden bulunur — ve ikinci keşif, ilkinin emeğini boşa çıkarır."*

Bu dosya o kayıttır.

---

## Ölçüm yöntemi — uydurulmadı, DİFF'LENDİ

```bash
py arac/denetle.py --ayrinti          # SONRA listesi
git stash push -- data/yerlesimler*.js
py arac/denetle.py --ayrinti          # ÖNCE listesi
git stash pop
comm -13 once.txt sonra.txt           # yeni doğanlar
comm -23 once.txt sonra.txt           # kapananlar
```

**Sonuç: 7 soru KAPANDI, 18 satır yeni doğdu, net +6.**
Sonra Şehrizor yaması (`08ab66d`) üç enklav daha kapattı ⇒ **net +3.**

---

## 🟢 KAPANANLAR (7) — yamaların ikinci faydası

```
1341-01-01  Karahisâr-ı Sâhib  en yakın madde 366 gün  →  KAPANDI
            kırılma TDV'ye göre 1327'ye çekildi, o gün maddeli
1500-06-15  Erzincan (m:Erzurum) yerleşim=OSMANLI merkez=akkoyunlu → KAPANDI
            Erzincan'ın Safevî dönemi yazılınca merkeziyle uyuştu
1502-01-01  üç ayrı Safevî adası (Aşkale+Erzurum · Kemah · …) → TEK ada
1535-1550   Şehrizor'un erken Osmanlı penceresi üç enklav kapattı
```

📌 Yani bir `2s` açığı **madde yazmadan**, yalnız **kırılma gününü
düzelterek** kapanabiliyor. Bu bir desen ve ARAŞTIRMA 2S'ye sevk edildi.

---

## 🔴 YENİ DOĞAN SORULAR (6) — ve her biri yamanın DOĞRU olmasından

### ① Kafkas üçlüsü — 3 soru · **araştırma ister, nokta ÇÖZMEZ**

```
1783-04-19  Maykop (Çerkezya)  → OSMANLI  222 km
1783-04-19  Soçi (Sâşe)        → OSMANLI  241 km
1783-04-19  Tuapse             → OSMANLI  165 km
            ada: Maykop + Sohum + Soçi + Tuapse
```

🔴 **İLK HİPOTEZ ÇÜRÜDÜ.** *"Sohum ile Anapa arası noktasız"* sanıldı;
ölçüldü, **değil**:

```
Taman → Anapa                  58,2 km
Anapa → Kuban (Yekaterinodar) 131,6 km
Kuban → Tuapse                103,4 km
Tuapse → Soçi                  77,1 km
Soçi  → Maykop                117,2 km
```

Kıyı yeterince sık. **Sebep noktasızlık DEĞİL:** Anapa ve Taman Osmanlı,
ama **aradaki Kuban Rus elinde** — yani ada gerçekten kopuk.

⇒ Emre'nin ③. kuralının tam vakası:
> *"Eğer iki birbirinden kopuk yapının arasında başka devletin bölgesi
> var ise bu **gerçek bir enklav olabilir** ve ek araştırma yapılmadan
> bu iki bölgenin birleştirilmesi gerektiğine karar verilemez."*

**Cevaplanacak soru:** 1783-1829 arası Çerkez kıyısı (Soçi · Tuapse) ve
iç kesim (Maykop) gerçekten Osmanlı tasarrufunda mıydı, yoksa yalnız
**iddia** mıydı? Küçükkaynarca sonrası Kuban nehri sınır oldu; kıyı
kaleleri (Anapa 1781, Sucuk-Kale 1722) Osmanlı'ydı ama iç Çerkezistan
hiçbir zaman fiilen idare edilmedi.
⚠️ Bu **ölçülmedi, sorudur.** `CLAUDE.md §3.5.1`: iki uç da ölçülür —
"Osmanlı fazla mı görünüyor" ve "eksik mi" birlikte sorulacak.

### ② Ankara Fetret — 2 soru

```
1404-03-01  Ankara → suleyman-celebi  200 km   ada: Ankara
1411-02-17  Ankara → mehmed-celebi    191 km   ada: Ankara
```
Sivrihisar'ın dönemi düzelince Ankara komşusuz kaldı. Fetret devrinde
şehzade toprakları zaten parçalıydı; **hakiki enklav olması muhtemel**,
ama aradaki kayıtlara (Sivrihisar · Beypazarı · Çankırı) o dönemin
yazılıp yazılmayacağı sorulmadı.

### ③ Safevî Erzincan kümesi — net 1

```
1502-01-01  Aşkale + Erzincan + Erzurum + Kemah → safevi  205-378 km
```
Üç ayrı ada tek adada birleşti. **Soru sayısı azaldı, adanın kendisi
büyüdü** — yani bu satır bir gerileme değil, bir düzelme.

---

## Hüküm

| soru | cins | çare | kimde |
|---|---|---|---|
| Kafkas üçlüsü | araştırma | 1783-1829 Çerkez kıyısı tasarrufu ölçülecek | **sevk edilecek** |
| Ankara ×2 | koridor | aradaki kayıtlara Fetret dönemi yazılmalı mı | açık |
| Safevî kümesi | bilgi | düzelme, iş yok | — |

🔴 **Tavan 488'e çekildi ve `denetle.py:1528`de gerekçesi yazılı.**
Borç ödendikçe İNER — `BEKLENEN_SAHIPSIZ` ve `BEKLENEN_HAYALET` ile
aynı desen.
