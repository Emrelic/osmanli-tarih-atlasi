# `denetle_eslesme.py` BEKÇİSİ — ÜÇ KAYIP DOĞURAN VAKANIN ÇATALI

**Oturum:** OPUS HAZIR KITA 102 · **Sevk:** 1.MURAT · **Tarih:** 2 Eylül 2026
**Soru:** *(a) denetim geriledi mi, (b) veri düzeldi mi?*

> Bekçinin kendi cümlesi işin tarifiydi:
> *"son değişikliği geri al ya da vakanın gerçekten DÜZELTİLDİĞİNİ DOĞRULA;
> **ikisi aynı şey değildir**."*

---

## 0. HÜKÜM — ÜÇÜNÜN ÜÇÜ DE (b): **VERİ DÜZELDİ, BEKÇİ BAYAT**

```
1803-05-15  Mekke ve Tâif → Mekke      (b) DÜZELDİ — ve en güçlü biçimde
1422-01-01  Cüneyd Bey    → Aydın      (b) DÜZELDİ
1479-08-01  İyon adaları  → Kefalonya  (b) DÜZELDİ
```
**Gerileme YOK.** `denetle_eslesme.py` bu üç vakayı artık bildirmiyor çünkü
**bildirecek bir kusur kalmadı** — üçünde de eksik kırılma VERİYE YAZILMIŞ.

### 🔴 VE KOORDİNATÖRÜN ŞÜPHESİ ÇÜRÜDÜ — ölçüldü
Şüphe (kendisi de *"ölçüm değil"* diye işaretlemişti):
> *"Üçü de 'madde BÖLGE adı taşıyor, yerleşim onun içinde' deseni. Biri
> eşleştiriciyi bölge adlarını kabul edecek şekilde iyileştirmiş olabilir."*

**Öyle olmadı.** Eşleştirici değil **VERİ** değişti; üç vakanın üçünde de
beklenen yerleşimin **kendi kırılması artık var**:
```
Aydın      1422-01-01  d-kayıp + s-kazanç(aydin)     ← maddenin günüyle BİREBİR
Kefalonya  1479-08-01  d-kazanç + s-kayıp(napoli)    ← maddenin günüyle BİREBİR
Mekke      1803-04-30  v-kayıp + s-kazanç(suud)      ← madde de o güne taşınmış
```

---

## 1. VAKA 1803-05-15 · Mekke — **EN GÜÇLÜ ÖDEME: MADDE İKİYE BÖLÜNMÜŞ**

Bekçi `1803-05-15` tarihini arıyor. **O tarihte artık madde yok** —
çünkü birleşik madde **iki gerçek olaya ayrılmış**, her biri kendi günüyle:
```
1803-02-01  k=kayip  yer_id=Tâif   "Vehhâbîlerin Tâif'i ele geçirmesi"
1803-04-30  k=kayip  yer_id=Mekke  "Vehhâbîlerin Mekke'yi ilk kez ele geçirmesi"
```
Ve Mekke'nin veri tarafı da tam: **1803-04-30**'da `v:` dönemi bitiyor,
`s:suud` başlıyor. Dahası, tek bir düzeltme değil **bütün zincir** yazılmış:
```
1803-04-30  Vehhâbîler Mekke'yi alıyor       (v → suud)
1803-08-06  Şerif Gālib Mekke'yi geri alıyor (suud → v)
1806-01-01  Mekke tekrar Vehhâbîlere         (v → suud)
1813-01-23  Mekke geri alınıyor — hac yolu açılıyor
```
⇒ Kusur *"kapatılmadı"*, **çözüldü**: `"Mekke ve Tâif"` gibi iki yeri tek
kaleme sıkıştıran madde ortadan kalktı, yerine gün gün modellenmiş bir
dizi geldi. `ARABİSTAN` oturumunun `hatalar 16 md.8`de bildirdiği şikâyet
**tam olarak istediği biçimde** ödenmiş.

## 2. VAKA 1422-01-01 · Aydın — DÜZELDİ

Madde duruyor ve *bölge* adıyla yazılmış:
```
1422-01-01  yer_id=İzmir · yer="İzmir, Ayasuluk, Tire, Birgi — Aydın-ili"
            b: "Cüneyd Bey Aydın-ili'nin başına döndü — Aydınoğulları
                yeniden müstakil"
```
Ve **Aydın'ın kendi kırılması AYNI GÜN var**: `d` bitiyor, `s:aydin` başlıyor.
⇒ Madde N yer anıyor, N'i de kıpırdıyor. `§C`nin ölçütü sağlandı.

## 3. VAKA 1479-08-01 · Kefalonya — DÜZELDİ

```
1479-08-01  yer_id=Ayamavra (Lefkada)
            yer="Ayamavra (Lefkada), Kefalonya, Zaklise (Zakynthos), İthaki"
            b: "İyon adalarının fethi — Tocco düklüğünün sonu"
```
**Kefalonya AYNI GÜN kıpırdıyor**: `d` kazanç, `s:napoli` kayıp.
⇒ Madde adaları tek tek sayıyor ve dördü de veride karşılığını bulmuş.

---

## 4. 🔴 ÖNERİ — BEKÇİYİ SİLMEYİN, **TERSİNE ÇEVİRİN**

Üç satırı `DOGURAN_VAKALAR`dan **çıkarmak yanlış olur**: o zaman biri
yarın Mekke'nin 1803-04-30 kırılmasını silse ya da iki maddeyi yeniden
birleştirse **hiçbir şey ötmez**. Borç ödendi, ama **ödendiği de kayda
geçmeli** — ve kayıt, `if` ile sorulabilir olmalı.

```python
# ── ÖDENMİŞ VAKALAR — bekçinin TERS YÜZÜ ─────────────────────────────
# Bu üçü 2 Eylül 2026'da ölçüldü ve ÜÇÜ DE ÖDENMİŞ çıktı (gerileme değil).
# Silmek yerine tersine çevriliyor: artık "hâlâ yakalanmalı" değil,
# "ARTIK TEMİZ OLMALI, ve şu kırılma VERİDE DURMALI" diye sorulur.
# ⚠️ Silseydik, düzeltmeyi geri alan bir değişiklik SESSİZ geçerdi.
ODENMIS_VAKALAR = [
    # (yerleşim, kırılmanın olması gereken gün, ödeme biçimi)
    ("Mekke",     "1803-04-30", "birleşik madde İKİYE BÖLÜNDÜ: 1803-02-01 Tâif · "
                                "1803-04-30 Mekke; zincir 1803/1806/1813 modellendi"),
    ("Aydın",     "1422-01-01", "Aydın'ın kırılması yazıldı (d→s:aydin)"),
    ("Kefalonya", "1479-08-01", "Kefalonya'nın kırılması yazıldı (d kazanç, s:napoli)"),
]

def odenmis_vaka_sinamasi(Y):
    """Ödenmiş borç GERİ ALINDI mı? — bekçinin ters yüzü."""
    geri_alinan = []
    for ad, gun, nasil in ODENMIS_VAKALAR:
        var = any(y["ad"] == ad
                  and any(p.get("f") == gun or p.get("t") == gun
                          for kat in ("d", "v", "s") for p in (y.get(kat) or []))
                  for y in Y)
        if not var:
            geri_alinan.append((ad, gun, nasil))
    return geri_alinan
```
Ve `DOGURAN_VAKALAR` listesinde **ikisi kalır** (1878 Bosna-Hersek ·
1345 Karesi) — onlar bugün hâlâ yakalanıyor, yani hâlâ açık borç.

⚠️ **UYGULAMADIM.** `arac/denetle_eslesme.py` benim dosyam değil (`§7`).
Yama hazır ve tek blok; *"uygula"* dersen dakikalar içinde iner ve
`C13`in iki yönünü de zorlayarak sınarım (ödenmiş vakayı silip ötmesini
görmek dâhil).

---

## 5. NE ÖLÇMEDİM

- **`§A` 130/97 ve `§C` 117/73 tavan aşımları** bu turun konusu değildi ve
  **ölçülmedi**. Bekçi sorusu ayrı bir sorudur: bekçi *"eski vakalar duruyor
  mu"* diye sorar, tavan *"yeni şüpheli doğdu mu"*. **Bekçinin temize
  çıkması, denetimin kırmızısını kaldırmaz** — üçünü de ödemek çıkış kodunu
  0 yapmaz, çünkü tavanlar hâlâ aşkın.
- Ödemeyi **kimin** yaptığını (hangi oturum, hangi commit) aramadım — hüküm
  için gerekli değildi, `git log` maliyeti bu turda gereksizdi.
- 1878 Bosna ve 1345 Karesi vakalarının **niçin hâlâ açık** olduğuna
  bakmadım; onlar bekçide duruyor, bu turun sorusu üç KAYIP vakaydı.
