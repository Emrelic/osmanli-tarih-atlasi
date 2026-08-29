# ORHANGAZİ — İŞ KUYRUĞU

> Emre (29 Ağustos 2026): *"Benim söylediklerimi sıraya al, zaten yaptığın
> işleri bırakıp sonra onları yarım yamalak unutma."*

🔴 **KURAL: bir kalem BİTMEDEN sıradakine geçilmez.** Yarıda bırakılan iş
denetimi kırmızı bırakır ve o kırmızı BÜTÜN oturumları durdurur.
Her kalem bitince: **denetim koş · commit · burada işaretle.**

**Durum imleri:** ✅ bitti · ⏳ üstünde · 🔵 sırada · ⚪ bekliyor (başkasında)

---

## ⏳ 1. DÜNYA PENCERESİ — YARIM, denetim ŞU AN KIRMIZI

`BOLGE = box(-180,-60,180,85)` yazıldı (3,48 kat), ama **179 noktanın
"pencere dışı" muafiyeti kalkınca 18'i kara maskesi dışında çıktı.**

```
Ek denetim ✗ konum: 18 nokta kara maskesinin dışında (beklenen 0)
SONUÇ: İHLAL VAR — çıkış kodu 1
```

Denetim önerileri hazır ve **sınanmış** (`⚠️ bu öneri sınandı ve GEÇMEDİ`
damgası taşımayanlar güvenli). 17'si ≤5 km kıyı düzeltmesi, biri
(Bâdis) kendi testini geçmiyor.

- [ ] 17 noktayı öneriyle düzelt
- [ ] Bâdis'i ayrı ele al (öneri sınandı ve GEÇMEDİ)
- [ ] `denetle.py` yeşil, çıkış kodu 0
- [ ] commit

---

## 🔵 2. MERİÇ'İN BATISI — ölçüldü, DÜZELTİLMEDİ

> Emre: *"Balkan savaşlarından sonra Meriç nehrinin batısında Osmanlı
> toprağı kalmış görünüyor, bu hatalı olmalı. Teyid et düzelt."*
> Ve ekran görüntüsü üzerine: *"Bu tarihte haritanın bu şekilde olduğuna
> emin miyiz?"* — **HAYIR, emin değiliz. Ölçtüm, yanlış.**

**Ölçüm (1913-10-01 kesiti, Batı Trakya kutusu 40,5-41,8K / 24,0-26,4D):**

```
🔴 Drama      24,15°D   d: 1413-07-05 → 1923-10-29   TEK BLOK
              Balkan savaşları HİÇ yazılmamış. TDV: "bir ara Bulgarlar'ın
              eline geçen Drama, II. Balkan harpleri esnasında yeniden
              Yunanlılar tarafından zaptedildi"
🔴 Gümülcine  25,41°D   d: 1913-09-29 → 1920-05-27   Bulgar'dan sonra YİNE Osmanlı
🔴 İskeçe     24,89°D   aynı desen
🔴 Ferecik    26,17°D   aynı desen
🟢 Enez · İpsala — Meriç ağzının DOĞU/Türkiye yakası, muhtemelen DOĞRU
```

🟢 **Verinin kendi içindeki çelişki kanıt:** aynı kutuda **Dedeağaç ve
Sofulu `bulgaristan-kralligi`** yazılı. Yani bazı Batı Trakya kayıtları
doğru, üçü yanlış — tek bir oturumun hatası.

**Külliyatta HAZIR günler (ölçüldü):**
```
1912-10-23  Şark Ordusu bozgunu — Kumanova ve Selânik'in kaybı
1912-11-08  Selanik'in alınması
1913-05-30  Londra Antlaşması — I. Balkan Savaşı sona erdi
1913-07-21  Edirne Osmanlı tarafından geri alındı
1913-08-10  Bükreş Antlaşması        ← Drama · Kavala · Serez → YUNANİSTAN
1913-09-29  İstanbul Antlaşması      ← Batı Trakya → BULGARİSTAN
1913-11-14  Atina Antlaşması
```

- [ ] Drama · Gümülcine · İskeçe · Ferecik düzelt
- [ ] Enez ve İpsala'yı ayrıca doğrula (yanlış alarm mı)
- [ ] denetim yeşil · commit

---

## 🔵 3. BALKAN SAVAŞLARI 1912-1914 — GÜN BE GÜN

> Emre: *"Tüm Balkan savaşları 1912-1914 arası birinci ikinci balkan
> savaşlarında hangi şehir hangi ülkeye kaybedildi, ordular nereye kadar
> ilerledi, harita gün be gün nasıl değişti — bunu detaylı çalış ve
> haritayı da buna uygun hale getir, tekrar kontrol et."*

Kalem 2 bunun **küçük bir parçası**; bu iş bütün Rumeli'yi kapsıyor.
Oturumlara bölünecek (dosya bazlı):

- [ ] şartname yaz · oturumlara sevk et
- [ ] Makedonya kolu (Selanik · Manastır · Üsküp · Kumanova)
- [ ] Trakya kolu (Kırklareli · Lüleburgaz · Edirne · Çatalca)
- [ ] Arnavutluk-Epir kolu (Yanya · İşkodra · Draç)
- [ ] Ege adaları (Limni · Midilli · Sakız · Rodos)
- [ ] uygulama + denetim + **Emre'ye tekrar kontrol**

---

## ⚪ 4. KARAR ④ HİMAYE ŞERİDİ — ARAYÜZ'le birlikte inmeli

Tâbi toprak kendi rengiyle + sınırında ince Osmanlı şeridi.
🔴 Motor bugün `kayit["v"]`yi **TEK BİRLEŞİK GÖVDE** olarak yazıyor;
devlet ayrımı yok. Arayüz Eflak'ı Kırım'dan ayrı boyayamaz.
⇒ Motorun **devlet başına** tâbi gövde yayması gerek (`vp`), ve bu
**geriye uyumlu** olmalı (eski `v` kalsın) yoksa yarısı inince harita
bozulur.

- [ ] ARAYÜZ canlı mı ölç
- [ ] sözleşmeyi yaz, iki tarafa birden ver

---

## ⚪ 5. KÜÇÜK KALEMLER

- [ ] Kahul · Bolgrad noktaları (UYGULAMA-1 devretti)
- [ ] Sibiu · Debre · Foça-İzmir (YAMA KURTARMA devretti, araştırılmadı)
- [ ] ±180 komşuluk kaybı — **borç kaydı**, engel değil
      (Fiji↔Tonga 750 km, motor 353,7° görüyor)
- [ ] `SEYREK_ESIK_KM` — DÜNYA PENCERE önerdi (300 km, 313 nokta) ama
      *"uygulamadan önce ölçülmeli"* dedi: N=5 duyarlılığı · eşik değeri ·
      peteğe mi noktaya mı ait

---

## 🔒 KOŞU — Emre'nin emri

> *"Koşuyu ben Çanakkale'den Aydın'a varınca, Aydın'da fişe taktım koşu
> başlatalım derim, o zaman koşarsın. Şimdilik diğer işleri yapalım."*

**Bataryada koşu YOK.** Pil 14,8 Wh (sağlık %49) ⇒ koşu 25-35 dakikada
ölür ve motor `donemler.js`i EN SONDA yazdığı için **sıfır** üretir.
