# ÖNERİ — `misir-sultanligi`/`misir-kralligi` renk adayları (M-2925 yeni iş)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

🔴 **ÖNERİDİR, YAZILMADI.** `renkler.py` bu koşuda DONUK — bu belge yalnız
merge adım ⑧'de kullanılacak bir ADAY listesi. Aşağıdaki ΔE hesapları
**yaklaşık CIE76**'dır (Lab uzayında düz Öklid mesafesi), projenin kendi
`renk_olc.py`'sinin kullandığı tam CIEDE2000/kompozit ΔE **DEĞİLDİR** —
gerçek sınav ancak koşu bitip `renk_olc.py --oner` çalıştırılınca yapılabilir.

## ① KOMŞULUK ÖLÇÜLDÜ

1914-1923 arası Mısır'ın (misir-sultanligi/misir-kralligi) coğrafi/zamansal
komşuları, senin verdiğin dört adayla BİREBİR doğrulandı:

```
ingiliz-sudani     GÜNEY   — bu oturumun kendi önerisi, RENKSİZ (kuyrukta)
hicaz              DOĞU/GÜNEYDOĞU — MEVCUT, #78360c (kahverengi)
libya (italya)     BATI    — Osmanlı sonrası İtalyan Libyası, künye "italya"
                             üzerinden MEVCUT, #74a074 (yeşilimsi)
filistin-mandasi   KUZEYDOĞU — bu oturumun kendi önerisi, RENKSİZ (kuyrukta)
```

🔴 **ÖNEMLİ BULGU:** Mısır'ın dört komşusundan İKİSİ (`ingiliz-sudani`,
`filistin-mandasi`) **kendisi de renksiz** — aynı oturumun aynı gece
önerdiği, henüz onaylanmamış künyeler. ⇒ Bu DÖRT kimlik (misir-sultanligi
· misir-kralligi · ingiliz-sudani · filistin-mandasi) muhtemelen **AYNI
renk turunda** birlikte çözülecek ve BİRBİRLERİYLE de çakışmamalı — yalnız
mevcut paletle değil, **kendi aralarında da**.

## ② RENK ADAYLARI — dördü de yaklaşık ΔE≥26 (mevcut komşularla)

Kavalalı (Mısır'ın kendi selefi, #20d820), İngiltere (#7e3d8f), İtalya
(#74a074), Hicaz (#78360c) ve bölgenin diğer künyeleri (memluk/funj/
darfur/mehdi) referans alındı:

```
A  Hardal/khaki (klasik dönem-atlası Mısır tonu)   #c9a635   en yakın: italya ΔE≈49,3
B  Koyu zeytin-yeşil (kavalalı ailesinden, koyu)    #4a6b1f   en yakın: italya ΔE≈27,9
C  Kum/bej (nötr, çöl uyumlu)                       #d4b483   en yakın: memluk ΔE≈32,3
D  Donuk turuncu-kahve (hicaz'dan ayrı aile)         #b8722e   en yakın: hicaz  ΔE≈26,0
```

🟢 **A en geniş güvenlik payını veriyor** (en yakın komşusuyla bile ΔE≈49) ve
tarihsel Mısır haritalarının klasik hardal/khaki tonuyla da örtüşüyor —
ama bu bir ÖNERİDİR, `renk_olc.py`'nin `ingiliz-sudani`/`filistin-mandasi`
ile birlikte çalıştıracağı asıl sınav sonucu DEĞİL.

⚠️ **BURADAN DÜŞÜLMEYECEK EKSİK:** `ingiliz-sudani`/`filistin-mandasi`nin
kendi renk adayları henüz yok (bu belgenin kapsamında değil) — dördü aynı
turda çözülürse, A/B/C/D'nin ikisi arasında da (misir + o iki komşu)
çakışma çıkabilir. **Renk turunda dördü BİRLİKTE değerlendirilmeli.**

## ③ 🟡 TASARIM SORUSU — HÜKÜM VERİLMEDİ, iki seçenek

`misir-sultanligi` (1914-1922, himaye) ve `misir-kralligi` (1922-1923,
nominal bağımsızlık) **ardışık ve aynı coğrafya** — hiçbir zaman aynı anda
ekranda yan yana durmuyorlar (biri biter, öteki başlar). İki seçenek:

```
SEÇENEK 1 — AYNI RENK
  İkisi TEK bir hex paylaşır (örn. A: #c9a635 ikisine de).
  Gerekçe: kullanıcı aynı ulusun devamlılığını görür, harita "Mısır"ı
  tek bir renk bloğu olarak okur — himaye→bağımsızlık geçişi haritada
  GÖRÜNMEZ ama bu doğru olabilir, çünkü sınır DEĞİŞMEDİ, yalnız
  STATÜ değişti (`§2`nin tâbi/doğrudan ayrımına benzer bir durum).

SEÇENEK 2 — AYNI AİLEDEN İKİ TON
  misir-sultanligi AÇIK ton (örn. #d4bc5a) · misir-kralligi TAM ton
  (örn. #c9a635) — CLAUDE.md'nin "tâbi toprağı açık tonda" kalıbına
  benzer bir mantık: himaye dönemi (İngiliz'e bağımlı) daha soluk,
  bağımsızlık dönemi daha doygun. Kullanıcı zaman çubuğunu 1922'de
  geçerken bir TON DEĞİŞİKLİĞİ görür — küçük ama gerçek bir siyasi
  olayı (unvan değişikliği) haritada iz bırakır hale getirir.
```

Bu proje `isg:` örtüsü için zaten "tâbi açık ton" kalıbını kullanıyor
(Osmanlı doğrudan/tâbi ayrımı) — SEÇENEK 2 o kalıba daha yakın, ama
SEÇENEK 1 daha SADE ve renk bütçesini (yeni bir hex daha üretme
zorunluluğu) hafifletir. **Karar Emre'nin/koordinatörün.**

`⏳ BEKLİYORUM: A adayı mı denenecek, yoksa dört renksiz kimlik (misir×2 + ingiliz-sudani + filistin-mandasi) TEK bir toplu renk_olc.py --oner turunda mı çözülecek?`
