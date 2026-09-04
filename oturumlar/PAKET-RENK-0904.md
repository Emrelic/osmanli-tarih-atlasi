# PAKET RENK 0904 — H-0004 · H-0005

```
AD     : PAKET RENK 0904
MODEL  : Opus
DİZİN  : C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SAHİP  : denetim/ONERI-RENK-0904.json   (YALNIZ bu dosyaya yazarsın)
PAKET  : ClaudEmre/kutu/giden/parti-emrelic-0040/  (H-0004-1.png · H-0005-1..3.png)
```

## 🔒 GEÇİLMEZ KISIT

```
PETEK ÜRETİMİ KOŞUYOR (10+ saat, PID 12656).
🔴 arac/renkler.py DONMUŞ — TEK KARAKTER yazmak KOŞUYU ÖLDÜRÜR
   (motor_izi() tam üç dosyayı parmak izliyor: uret_petek · renkler · girdi)
🔴 data/* DONMUŞ — yazmak çıktıyı yayınlanamaz kılar
🟢 SERBEST: denetim/* · oturumlar/* · arac/ altındaki ÖTEKİ dosyalar
```
⇒ **Renk YAZMAYACAKSIN, ÖNERECEKSİN.** Çıktın bir öneri artefaktı; koşu
bitince ben `denetim/ARAC-RENK-AKTAR-0903.py` ile aktaracağım.

## EMRE'NİN SÖZLERİ — birebir

> **H-0004:** *"renk seçimi berbat denizle benzer renk denizden ayırdetmek
> zorlaşıyor. hem deniz daha açık renk olmalı hem de bu renkler mavinin
> daha koyu tonlarında olmalı"*
>
> **H-0005:** *"ilhanlı renk seçimi mesela deniz rengi tonuna yakın güzel
> durmuyor / bosna ve sırbistanda var ama onlar hafif derecede çok dert
> değil / ama **novgorod cumhuriyeti rezalet**"*

## 🔴 ZATEN ÖLÇÜLDÜ — bu senin tabanın, ama DOĞRULA

`renk_olc.py`'nin **deniz denetimi VAR** (`DE_DENIZ = 15.0`, `_deniz_oku()`
`SU_RENGI`yi `app.js`ten okuyor). Bugün koşturdum:

```
DENİZ #c4dcea · eşik DE 15.0 · ölçülen kimlik 550
EŞİĞİN ALTINDA : 0        ⇒ denetim "TEMİZ" diyor
SINIR BANDI 15-25 : 3     ⇒ ve ÜÇÜ DE EMRE'NİN İŞARET ETTİKLERİ

  novgorod      DE 17.9  #84c9cf   Emre: "REZALET"
  le-hanedani   DE 19.7  #9ceded   Emre ADINI SAYMADI
  bosna         DE 24.2  #90f3f3   Emre: "hafif, çok dert değil"
  ── eşik dışı ──
  sirbistan     DE 35.0  #518790   Emre: "hafif"
  ilhanli       DE 54.9  #c690ed   Emre: "deniz tonuna yakın, güzel durmuyor"
```

🔴 **BULGU: metrik DOĞRU, EŞİK YANLIŞ.** Emre'nin şiddet sıralaması
(novgorod ≫ bosna ≈ sırbistan) ölçümün sıralamasıyla **birebir** aynı —
yani ΔE-deniz doğru şeyi ölçüyor. Ama `15` fazla gevşek: **Emre'nin gözü
~25'te duruyor.** Bir denetim "temiz" derken kullanıcı şikâyet ediyorsa
kusur eşiktedir, metrikte değil.

📌 Bu, `CLAUDE.md §11`in *"denetim var ≠ o soruyu soruyor"* ailesinin
**eşik** yüzü: burada denetim doğru soruyu soruyor, **fazla hoşgörülü**
cevaplıyor.

⚠️ `le-hanedani` ÇİFT TARAFLI: denize DE 19.7 **ve** aletin kendi uyarısına
göre **altlığa DE 14.9** — hem denize hem karaya karışıyor. Emre onu
görmemiş; sen gör.

## SENDEN İSTENEN — dört kalem

```
① İLHANLI'YI ÇÖZ — 🔴 ÖLÇÜM EMRE'NİN SÖZÜYLE ÇELİŞİYOR
   ilhanli #c690ed denize DE 54.9 — yani deniz TONUNDA DEĞİL.
   Emre yine de "deniz rengi tonuna yakın güzel durmuyor" diyor.
   ⇒ Ya cümle başka bir şeyi kastediyor, ya karşılaştırdığı şey deniz
     DEĞİL (göl? altlık? komşu gövde?), ya da ekranda harmanlanmış
     görünüyor (yumuşak kip 0.44 ile altlık üstüne biniyor).
   🔴 GÖRSELİ AÇ (H-0005-1..3) — bu, metnin YETMEDİĞİ madde.
   ⚠️ Ve YUMUŞAK KİP'i hesaba kat: 4 Eylül'de eklendi, siyasî dolgular
     0.44/0.60/0.68 saydamlıkla çizilebiliyor ⇒ ekrandaki renk BOYALAR'daki
     renk DEĞİL, altlıkla harmanlanmış hâli. ΔE ölçümü SERT kip içindir.
     Emre'nin görseli hangi kipte çekilmiş, ÖLÇ.

② EŞİĞİ ÖNER, DAYATMA
   DE_DENIZ 15 → kaç? Emre'nin üç veri noktası: 17.9 rezalet · 24.2 hafif ·
   35.0 hafif. Öneriyi GEREKÇESİYLE yaz; eşiği DEĞİŞTİRME (renk_olc.py
   donmuş değil ama eşik değişikliği bir KARAR, koordinatörün).
   ⚠️ Eşiği yükseltmenin bedelini de ölç: 25'e çıkarsa kaç kimlik ihlale
     düşer? Bedeli yazmadan öneri verme.

③ ÜÇ KİMLİĞE RENK ÖNER — novgorod · le-hanedani · bosna
   Kısıt: komşularıyla ΔE ≥ 12 (okunabilirlik tabanı) KORUNACAK.
   `denetim/ARAC-CIFT-OLC-0903.py` ve `arac/renk_olc.py` senin aletlerin.
   🔴 Yeni rengin denize ΔE'si kadar KOMŞUSUNA ΔE'sini de ölç — bir ucu
     düzeltip öbür ucu bozmak bu projenin adı konmuş hatası (§3.5.1).

④ EMRE'NİN İKİ TASARIM TALİMATI — ölç, sonra öner
   (a) "deniz daha AÇIK renk olmalı"  → SU_RENGI #c4dcea daha açık olursa
       BÜTÜN palet ona göre yeniden ölçülür (deniz her gövdenin kenarında).
       Kaç kimlik ihlale düşer / çıkar? ÖLÇ, sonra öner.
   (b) "bu renkler mavinin daha KOYU tonlarında olmalı" → L* düşürmek.
       ⚠️ `renkler.py`nin bir "açıklık tavanı" uyarısı var (altlıktan
       ayrışma, eşik DE 15) — koyulaştırmak onu İYİLEŞTİRİR, dikkat et
       ters yöne değil.
```

## 🔴 ÖNGÖRÜ ZORUNLU — ölçümden ÖNCE yaz

`denetim/ONERI-RENK-0904.json` içine, **ölçmeden önce**, her kalem için:
```
① NE bekliyorum (sayı ya da yön)
② MAZERETİ var mı — yoksa "mazeret YOK" diye YAZ
③ HANGİ ÇIKTIDAN, HANGİ BİRİMDE okuyacağım
④ HANGİ KOŞUDA / NEYE KARŞI ölçülecek
```
Sonradan yazılan beklenti ölçümü gördükten sonra ona göre şekillenir ve
hiçbir şey öğretmez. Önce yazılan **yanlış çıkabilir**, ve ancak yanlış
çıkabilen bir şey bilgi taşır.

## TESLİM

`denetim/ONERI-RENK-0904.json`:
```json
{ "oturum":"PAKET RENK 0904", "damga":"<tarih saat>",
  "ongoru":[ … ],
  "esik_onerisi": { "DE_DENIZ": 15.0, "onerilen": 0, "gerekce":"", "bedel":"" },
  "renkler":[ { "id":"novgorod", "eski":"#84c9cf", "yeni":"#......",
                "de_deniz_eski":17.9, "de_deniz_yeni":0,
                "en_yakin_komsu":"", "de_komsu":0, "gerekce":"" } ],
  "olculemedi":[ … ] }
```
🔴 **`olculemedi` kovası AYRI ve ZORUNLU.** *"Ölçülemedi"* asla *"temiz"*
diye raporlanmaz — ama *"çürüdü"* diye de raporlanmaz.

## HABERLEŞME — 🔴 CEVAP KENDİ PENCERENE YAZILMAZ

```
mcp__ccd_session_mgmt__send_message
    session_id : local_0de4b2d7-a2ce-4a61-934c-c4146f3f130b
```
```
AÇILINCA     "açıldım, brifingi okudum, dosyam bende"
KALEM KALEM  bir kalem bitince — biriktirme
SORU GELİNCE iş sürerken bile HEMEN: "iş üstündeyim · şu aşamadayım · ~ne kadar kaldı"
BİTİNCE      SAYIYLA
```
Her madde üç şey: **① ne ölçtüm** · **② neyi bulamadım** · **③ ne istiyorum**.
🔴 **AKSAKLIK BEKLEMEZ.** Ve devraldığın hiçbir rakamı doğrulamadan
aktarma — yukarıdakileri bugün ben ölçtüm, **sen de ölç.**
