# 🔴🔴 UYGULAYICILARIN VARSAYILAN GLOB'U `*0905*`E ÇİVİLENMİŞ — 226 KAYIT GÖRÜNMÜYOR

**Oturum:** ASYA · 7 Eylül 2026 · yan bulgu (`ONERI-KAYNAK-ASYA-0907` yazılırken
ad çakışması kontrolünden çıktı)
**Cins:** ÖLÇÜM — hiçbir dosyaya dokunulmadı. **Karar koordinatörün.**
**ANLIK GÖRÜNTÜ:** koşu 7b sürerken (PID 3880).

---

## SONUÇ — TEK CÜMLE
Merge kuyruğunun ①. ve ②. adımları uygulayıcıları **desen vermeden** çağırıyor;
uygulayıcıların varsayılan deseni ise **`*0905*`** — yani 6 ve 7 Eylül'de
yazılmış **12 yama dosyası (10 künye + 216 kronoloji maddesi)** o koşuda
**hiç okunmuyor.**

## ① ÖLÇÜM
```
arac/_kunye_uygula.py:44       VARSAYILAN      = "denetim/YAMA-KUNYE-*0905*.json"
arac/_kronoloji_uygula.py:49   VARSAYILAN_YAMA = "denetim/KRONOLOJI-*0905*.json"

oturumlar/KOSU-SONRASI-KUYRUK.md:17   py arac/_kunye_uygula.py --yaz       ← desen YOK
oturumlar/KOSU-SONRASI-KUYRUK.md:20   py arac/_kronoloji_uygula.py --yaz   ← desen YOK
```

### GLOB'UN DIŞINDA KALANLAR
```
KÜNYE      YAMA-KUNYE-VASSAL-0906.json                       10 künye
KRONOLOJİ  KRONOLOJI-BATIAFRIKA-0904.json                    92 madde
           KRONOLOJI-GUNEYAMERIKA-0904.json                  81
           KRONOLOJI-ORTAAMERIKA-0904.json                   27
           KRONOLOJI-BALKAN-0906.json                         4
           KRONOLOJI-1917-TASIMA-0906.json                    3
           KRONOLOJI-MANDA-0906.json                          3
           KRONOLOJI-AVRUPA-0906.json                         2
           KRONOLOJI-AFRIKA-0906 · AGADEZ-1906-0906 ·
           ORTADOGU-URDUN-0907 · SOHUM-0907                   1+1+1+1
────────────────────────────────────────────────────────────────────
TOPLAM     12 dosya · 10 künye + 216 kronoloji maddesi
```
⚠️ Dikkat: **`0904` dosyaları da kaçıyor** — sorun yalnız "bugünün tarihi"
değil, deseninin **sabit bir güne** çivilenmiş olması.

## ② TAHMİN DEĞİL — ALETİN KENDİ ÇIKTISIYLA DOĞRULANDI
Kuru koşu (hiçbir şey yazılmadı):
```
py arac/_kunye_uygula.py       → okunan yama dosyası 11 · çıktıda "0906" geçen satır: 0
py arac/_kronoloji_uygula.py   → çıktıda "0906" ya da "0907" geçen satır: 0
```
📌 Deseni **okuyup** hüküm vermedim; `§11`in *"bir aletin cevabını doğru
yerden okuduğunu göster"* kuralı gereği **aleti koşturup çıktısını** saydım.

## ③ NİÇİN SESSİZ — ve niçin bugüne kadar görünmedi
```
🔴 Alet "şu dosyayı atladım" DEMEZ — deseni tutmayan dosya hiç VAR OLMAZ
🔴 Kuyruğun BEKLENEN sayıları da dar kümeden üretilmiş:
   satır 3835  «11 künye  (kuru koşu: 11 kabul / 0 red)»
   satır 3836  «160 madde (kuru koşu: 160 kabul / 8 mükerrer)»
   ⇒ beklenti ile ölçüm UYUŞUYOR, çünkü İKİSİ DE aynı dar kümeden geliyor
```
📌 Bu, `CLAUDE.md`in *"bir artefakt hiçbir aletin glob'una girmiyorsa,
yapılmamış olmakla aynı sonucu verir"* dersinin **ters yüzü**: orada bir
dosyanın **adı** yanlıştı; burada dosyaların adı doğru, **aletin deseni**
eski. Ve bu hâli daha sinsi — çünkü *"kabul 11 / red 0"* satırı **temiz bir
başarı** gibi okunuyor.

## ④ ÇARE — üç seçenek, ve ölçülmüş riskleri
```
A  kuyruğa desen yaz:   --yama "denetim/YAMA-KUNYE-*.json"
   🟢 en ucuz · 🔴 aletin varsayılanı YANLIŞ KALIR, bir sonraki tur yine ısırır
B  VARSAYILAN'ı tarihsizleştir: "denetim/YAMA-KUNYE-*.json"
   🟢 kökten · 🔴 `arac/*.py` KOŞU SÜRERKEN DONUK (§7) ⇒ koşudan SONRA
C  her turda deseni güne çevir
   🔴 aynı kusuru her gün yeniden üretir — SEÇİLMEMELİ
```
🔵 **Önerim B** (koşudan sonra), geçici olarak A. **Uygulamadım:** `arac/*.py`
donuk ve `§7`ye göre benim dosyam değil.

## ⑤ ÖLÇMEDİM
```
⚪ 226 kaydın KABUL edilip edilmeyeceğini — desen genişletilince mükerrer/
   çakışma çıkabilir. Ölçülmesi gereken şey "kaç kabul", ve o AYRI bir kuru koşu.
⚪ Öteki uygulayıcıların (`_sahiplik_uygula` · `_kademe_uygula`) desenlerini —
   ikisi `data/` tarıyor, `denetim/` glob'u kullanmıyorlar; ama TARANMADILAR.
⚪ 12 dosyanın sahiplerini — kimin işi olduğunu SAYMADIM, yalnız SAYILARI ölçtüm.
```
