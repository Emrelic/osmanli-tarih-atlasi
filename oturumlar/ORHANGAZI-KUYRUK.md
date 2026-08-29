# ORHANGAZİ — İŞ KUYRUĞU

> Emre (29 Ağustos 2026): *"Benim söylediklerimi sıraya al, zaten yaptığın
> işleri bırakıp sonra onları yarım yamalak unutma."*

🔴 **KURAL: bir kalem BİTMEDEN sıradakine geçilmez.** Yarıda bırakılan iş
denetimi kırmızı bırakır ve o kırmızı BÜTÜN oturumları durdurur.
Her kalem bitince: **denetim koş · commit · burada işaretle.**

**Durum imleri:** ✅ bitti · ⏳ üstünde · 🔵 sırada · ⚪ bekliyor (başkasında)

---

## 📍 29 AĞUSTOS 2026 — GÜN SONU DURUMU (pil %40'ta yazıldı)

```
🌍 DÜNYA PENCERESİ    box(-180,-60,180,85) · 3,48 kat · denetim TEMİZ ✅
📦 SAHİPLİK YAMASI    25 kayıt indi — üçüncü ailenin uygulayıcısı YOKMUŞ ✅
🚪 YAYIN KAPISI       yetim 45 → 8 · kalan 8 GERÇEK, adıyla kayıtlı ✅
📌 ÇATALCA            eklendi (2609 → 2610) — Trakya kolunun engeliydi ✅
⚔️ BALKAN SAVAŞLARI   3 kola sevk edildi ⏳
🔴 KAFKAS DÜZELTMESİ  19 kaydın 19'u DA İNMEMİŞ — DÜNYA PENCERE'de ⏳
```

**Aydın'da fişe takılınca SIRAYLA:**
```
① py arac/denetle.py            temiz mi (bugün temizdi)
② py arac/uret_petek.py         ~5s 15dk (dünya penceresi ilk kez)
③ py arac/uret_devirler.py
④ py arac/renk_olc.py           🔴 VERİ DEĞİŞTİ ⇒ ŞART
⑤ py arac/denetle_yayin.py      "YAYIN BAYAT" ancak burada kapanır
⑥ py arac/surum_damgala.py      sonra push
```
⚠️ Koşudan önce `arac/*.py` DONMUŞ olmalı — motor_izi her aşamada
bakıyor ve koşu sırasında `arac/` altına yazmak koşuyu ÖLDÜRÜR.
(Ben bunu bir kez yaptım: `girdi.py`ye dokundum, 4s 08dk gitti.)

**Koşunun öngörüsü** (DÜNYA PENCERE yazdı, koşudan ÖNCE):
```
MAZERETİ OLMAYAN  ① Osmanlı gövdesi DEĞİŞMEZ (±%0,5) — tutmazsa KOD YANLIŞ
                  ② ±180 sarması YOK — hiçbir petek meridyeni atlamaz
                  ③ ada kuralı ÇOK ateşler — kıtalar arası deniz eklendi
MAZERETİ OLABİLİR ④ km² ⑤ süre ~5s15dk ⑥ bozuk kenar ⑦ çöl tavanı ×2
```
🔴 Ve B2 köprüsü ilk kez sınanacak: **konkav kenar** (H-0003) ve
**köprünün yaslandığı gövdenin rengini alması** (H-0004). Karne
basılıyor: `🎨 B2 KÖPRÜ RENGİ: N DOĞRUDAN · M TÂBİ`.

---

## ✅ 1. DÜNYA PENCERESİ — **BİTTİ** (29 Ağu · denetim TEMİZ · çıkış kodu 0)

```
BOLGE = box(-180, -60, 180, 85)        3,48 kat
17 nokta düzeltildi (40,45 km → 0,10 km)
Bâdis: iki kez aracın önerisi tutmadı; tam maskeyle sondalandı,
       35.1721,-4.3009 → 35.1727,-4.3007 (67 m). ✓
denetle.py: SONUÇ temiz · konum 0 · Değişmez 7 ✓ 488
```
📌 Ve iki kusur yol boyunca çıktı: ayrıştırıcım iki satırı sessizce
kaçırdı (sayı tutuyor mu kilidi eklendi), ilk sondam maskeyi YEREL
sadeleştirip yanlış cevap verdi (evren dardı).

<details><summary>eski hâli</summary>

`BOLGE = box(-180,-60,180,85)` yazıldı (3,48 kat), ama **179 noktanın
"pencere dışı" muafiyeti kalkınca 18'i kara maskesi dışında çıktı.**

```
Ek denetim ✗ konum: 18 nokta kara maskesinin dışında (beklenen 0)
SONUÇ: İHLAL VAR — çıkış kodu 1
```

Denetim önerileri hazır ve **sınanmış** (`⚠️ bu öneri sınandı ve GEÇMEDİ`
damgası taşımayanlar güvenli). 17'si ≤5 km kıyı düzeltmesi, biri
(Bâdis) kendi testini geçmiyor.

- [x] 17 noktayı öneriyle düzelt
- [x] Bâdis'i ayrı ele al (öneri sınandı ve GEÇMEDİ)
- [x] `denetle.py` yeşil, çıkış kodu 0
- [x] commit — `0f688ec` + bu
</details>

---

## ⏳ 2. MERİÇ'İN BATISI — ölçüldü, **KALEM 3'E DEVREDİLDİ**

Ölçüm aşağıda duruyor ve BALKAN TRAKYA kolunun şartnamesine **başlangıç
kanıtı** olarak kondu — aynı kutu, aynı üç şehir. Ayrı iş olarak
tutmuyorum ki iki yerden birden yazılmasın.

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

- [x] şartname yaz — `oturumlar/BALKAN-SAVASLARI.md`
- [x] üç kola sevk et (3/3 adresli, 29 Ağu)
- [⏳] **TRAKYA** → UYGULAMA-0019 · Meriç kusuru BU KUTUDA
- [⏳] **MAKEDONYA** → ALTI BARDAK · Drama'nın 510 yıllık tek bloğu burada
- [⏳] **BATI** (Arnavutluk-Epir-Sancak) → YAMA KURTARMA
- [ ] Ege adaları (Limni · Midilli · Sakız · Rodos) — henüz sevk EDİLMEDİ
- [ ] yamaları uygula (`_sahiplik_uygula.py`) + denetim
- [ ] **Emre'ye tekrar kontrol** — kendisi *"tekrar kontrol et"* dedi

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

- [ ] 🔴 **İKİ BEKÇİ ÇELİŞİYOR — `_isci_nabzi.py` PİLDEN HABERSİZ.**
      29 Ağu %22'de ölçüldü: pil bekçisi *"yeni iş başlatma, toparlan"*
      dedi, on üç oturum uydu ve sustu. Nabız o sessizliği **arıza** sanıp
      *"İŞÇİLERİ send_message İLE DÜRT"* dedi. Tavsiyeye uyulsaydı kendi
      toparlanma emrim çiğnenecekti.
      📌 Kusur ikisinde de değil, **aralarında**: nabız *"çıktı durdu"*
      diye bakıyor, *"durması İSTENDİ mi"* diye sormuyor.
      `CLAUDE.md`nin *"kusur ne tavanda ne yetim-yüz mantığında —
      İKİSİNİN ARASINDAYDI"* vakasının bekçi tarafı.
      ⇒ ÇARE: nabız pil eşiğini okusun; %40'ın altında *"sessizlik
      BEKLENEN"* desin. Küçük iş, ama %25'te BAŞLATILMADI (kendi kuralım).

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
