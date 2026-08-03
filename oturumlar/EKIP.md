# EKİP DEFTERİ — kim açık, ne yapıyor, ne bekliyor

> 🔴 **NİÇİN VAR.** Kullanıcı sordu (3 Ağustos): *"Kaç tane adamımız
> (oturumumuz) var ekipte, hesabını tutuyor musun? Bunların içinde
> gözden çıkardıkların var mı?"*
>
> **Tutmuyordum.** `oturumlar/` altında 110 dosya vardı ama kimin açık
> olduğunu gösteren tek satır yoktu. Ölçüldü: 2 Ağustos 20:02'den beri
> hiçbir işçi oturum tek satır yazmamış.
> ⇒ Kimse gözden çıkarılmadı — daha kötüsü oldu: **unutuldular.** Açık
> pencere iş almadan durursa üretmez ama yer tutar; koordinatör de işi
> kendi (en pahalı) bağlamında yapar.

## Kural

```
· Bu defter oturum AÇILINCA ve KAPANINCA güncellenir. İkisi de zorunlu.
· Aynı anda en çok 3 işçi (CLAUDE.md §7).
· Bir oturum iş almadan iki gün durursa: ya iş verilir ya KAPATILIR.
  Üçüncü seçenek yok.
· Talep formatı dört alanlıdır (ORGANIZASYON §17): AD · MODEL · PROMPT ·
  ClaudEmre EVET/HAYIR.
```

---

## 🟢 AÇIK VE ÇALIŞIYOR

| oturum | model | iş | son hareket |
|---|---|---|---|
| **0 KOORDİNATÖR** | Opus | ölçüm · dağıtım · commit/push · yayın | sürekli |
| **ARAYÜZ 2** | Sonnet | 8 madde — `ARAYUZ-2-GOREV.md` | 3 Ağu 04:27 ✅ yeni |

## 🟡 AÇIK AMA BOŞ — iş bekliyor

| oturum | model | durumu | ne yapılmalı |
|---|---|---|---|
| **MOTOR 2** | Fable | 2 Ağu 20:02'de kapanış raporunu verdi, sonra boş | 🔴 **İş var:** koşu süresi kalibrasyonu. Ama koşu işlemciyi tutuyor — **koşu bitince** aç |
| **VERİ KİMLİK 2** | Opus | 2 Ağu 12:46, kuyruğu bitti | 🔴 **İş var:** 98 Asya kimliği hâlâ adsız (koşu logunda 559 "bilinmeyen devlet kimliği" uyarısı) |

## ⬜ KAPANDI

| oturum | nasıl kapandı |
|---|---|
| **RENK** | 2 Ağu 14:49 — 53 kimlik yazdı, palet büyümedi, kendini kapattı |

## 🔵 BRİFİNGİ HAZIR, AÇILMADI

| oturum | model | brifing | neden bekliyor |
|---|---|---|---|
| **PETEK / NOKTA** | Opus | `PETEK-NOKTA-GOREV.md` | 🟢 **ŞİMDİ AÇILABİLİR** — yeni dosyaya yazar, motor girdisi değil |
| **VERİ ARAŞTIRMA** | Opus | *(yazılacak)* | 10 madde, yeni dosyaya yazar → koşuyu beklemez |
| **KRONOLOJİ** | Sonnet | *(yazılacak)* | 7 madde ama `devletler.js` yazar = **motor girdisi**, koşuyu bekler |
| **ASYA / Hindistan-Çin** | Opus | `ASYA-HINDISTAN-CIN.md` | Kapı sırası; halka 2 kimlikleri önce |

---

## 🔴 KOŞU SIRASINDA NE AÇILABİLİR — tek soru

```
Bu oturum arac/girdi.py'nin OKUDUĞU bir dosyaya yazacak mı?

  HAYIR → hemen açılır          js/app.js · index.html · css/
                                YENİ data dosyası (henüz girdi.py'de yok)
  EVET  → koşuyu bekler         yerlesimler*.js · devletler.js · goller.js
```

📌 **Yeni dosyaya yazmak kaçış yolu değil, kurulu desen:** `yerlesimler_ek.js`,
`yerlesimler_avrupa.js`, `yerlesimler_asya.js` hepsi böyle doğdu. Oturum
yazar, koşu biter, Oturum 0 dosyayı `girdi.py`ye bağlar.
