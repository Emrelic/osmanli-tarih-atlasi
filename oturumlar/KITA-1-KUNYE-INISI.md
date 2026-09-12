# KITA 1 — KÜNYE İNİŞİ (`data/devletler.js` TEK SAHİBİ)

| alan | değer |
|---|---|
| **AD** | KITA 1 — KÜNYE İNİŞİ |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **SAHİP OLDUĞUN DOSYA** | `data/devletler.js` — **YALNIZ SEN**. Bu gece başka hiçbir oturum bu dosyaya yazmayacak. |
| **ClaudEmre** | hayır — işçisin, koordinatör 1.MURAT |

---

## 0. ZEMİN — bu gece değişen iki şey

```
🟢 YAYIN İNDİ          a8feb8d · damga r7487 · koşu 9 canlı
🟢 data/ ve arac/ SERBEST   hiçbir koşu canlı değil, donukluk BİTTİ
```
Yani **yazabilirsin.** Gece boyunca yazılamamasının sebebi buydu.

## 1. İŞİN — iki paket, tek dosya

### ① `denetim/PAKET-KUNYE-0911.json` — 12 YENİ künye

```
lubnan-emirligi (1516-1842)            misir-eyaleti (1517-1805)
cebel-i-lubnan-mutasarrifligi (1861-1915)  sirbistan-eyaleti (1459-1804)
harfusogullari (1521-1850)             tunus-beyligi-fransiz (1881-1923)
meysur-racaligi (1799-1947)            gvalyar (1731-1948)
indor (1732-1948)                      kolhapur (1710-1949)
baroda (1721-1949)                     bali-kralliklari-pejeng (1292-1343)
```

🔴 **ŞEMA KARARI — Emre verdi, uygula:** `tur:` sözlüğüne **`"eyalet"`**
eklenecek (`misir-eyaleti`, `sirbistan-eyaleti` için). `tur:` alanı eksik
olan 10 künyenin hepsini doldur; sözlükte karşılığı olmayan ikinci bir tür
gerekiyorsa (`mutasarriflik`) **önerini gerekçesiyle bildir, kendi başına
sözlüğe ekleme** — sözlük kararı Emre'nin.

⚠️ Bu 12 künye, yedi ayrı HAZIRLIK dosyasının **birleştirilmiş hâlidir**
(LÜBNAN 3 · MISIR-SIRBISTAN 2 · TUNUS 1 · HİNDİSTAN 5 · BALİ 1). Ham
dosyaları ayrıca işlemene gerek yok — ama bir künyenin gerekçesini
sorgularsan kaynağı orada:
`HAZIRLIK-LUBNAN-0911.json` · `HAZIRLIK-MISIR-SIRBISTAN-0911.json` ·
`HAZIRLIK-TUNUS-0911.json` · `HAZIRLIK-HINDISTAN-II-0911.json`

### ② `denetim/PAKET-T-0911.json` — 114 künyenin `t:` alanı

```
kova                          sayı   ne yapılacak
E-hala-var                      83   onerilen_t = null → DOKUNMA
A-net-gercek                    25   → YAZ
C-gun-belirsiz                   2   → YAZ (YYYY-01-01, gerekçesi kayıtta)
D-bulunamadi                     1   → DOKUNMA, `bulunamadı` kalır
B-iki-aday-KARAR-GEREKIYOR       3   🔴 YAZMA: kacar · mogolistan · suud-ucuncu
                                      (KITA 6 Emre'ye karar dosyası hazırlıyor)
⇒ SENİN YAZACAĞIN: 27 kayıt
```

🔴 **`t:` ALANININ İKİ ANLAMI VAR (`D195`) ve Emre kararını verdi:**
> *"t bittiği gün düzgün yazılsın; atlasın bitiş tarihi ayrı, asıl
> meselenin bittiği tarih farklı."*

⇒ `1923-10-29` **atlasın penceresidir, bir bitiş iddiası değildir.**
Devlet gerçekten sürüyorsa (83 kayıt) `t:` yine `1923-10-29` kalır ama bu
bir **pencere işareti**tir. Gerçek bitiş biliniyorsa **gerçek gün yazılır**,
`1947`, `1949` olsa bile. `PAKET-T` bunu zaten böyle kodlamış — sen yalnız
uygula.

## 2. 🔴 SANA ÖZEL UYARI — ÇAPRAZ BULGU (bu sevkte ölçüldü)

`HAZIRLIK-DALGA2-0911.json` ile `PAKET-T` **5 kimlikte kesişiyor**:
`buhara-halk-cumhuriyeti · harezm-halk-cumhuriyeti · tannu-tuva ·
tonga-kralligi · yeni-zelanda`

Değer çatışması **yok** (biri `t:`, öteki kronoloji maddesi yazıyor) **ama
bir SIRA bağımlılığı var:**
```
harezm-halk-cumhuriyeti   HAZIRLIK-DALGA2 bir TDV olayını (1924 bölünmesi)
                          "pencerenin DIŞINDA" diye YAZMAMIŞ
   PAKET-T aynı künyenin t:'sini 1923-10-29 → 1924-01-01 ÇEKİYOR
   ⇒ senin yazımın o olayı PENCERENİN İÇİNE ALIYOR
```
⇒ Bu ikisini yazdıktan sonra **KITA 3'e tahtadan haber ver** (`§7.1③`
yatay mesaj serbest): *"harezm/buhara penceresi genişledi, DALGA2'nin
atladığı 1924 olayı artık yazılabilir."*

## 3. NASIL YAZILIR

```
① ÖNCE ÖLÇ         py arac/denetle.py   → tabanı KENDİN kur (§2, B3)
② YAZ              yalnız data/devletler.js
③ SONRA ÖLÇ        py arac/denetle.py  +  py arac/renk_olc.py
                   🔴 renk_olc ŞART: palet verinin fonksiyonudur, künye
                      penceresi değişince yeni çakışma DOĞABİLİR (§9)
④ ÖNGÖRÜNÜ ÖNCEDEN YAZ (D022): denetle.py'nin dört sayısı yazımdan sonra
   ne olacak? ÖLÇMEDEN yaz, sonra ölç, tutmazsa SÖYLE.
```

🔴 **COMMIT ETME.** `data/` commit'i 1.MURAT'ta (`§7`). Yazdığını bildir.

## 4. TESLİM — sayıyla

```
① 12 künyenin kaçı yazıldı, kaçı neden yazılmadı
② 27 t: kaydının kaçı yazıldı
③ denetle.py ÖNCE / SONRA dört sayı
④ renk_olc.py yeni çakışma verdi mi
⑤ tur: sözlüğü için önerin (mutasarriflik)
⑥ ÖNGÖRÜN TUTTU MU
```

## 5. HABERLEŞME (`§7.1`)

🔴 **Cevabını KENDİ PENCERENE YAZMA — görünmez.** Koordinatöre:
`mcp__ccd_session_mgmt__send_message` · `session_id` = sana mesaj gönderen
oturum (1.MURAT). Yatay mesaj (KITA 3'e) **tahtadan**:
`py arac/tahta.py yaz --kim "KITA 1" --kime "KITA 3" --mesaj "..."`

**Aksaklık BEKLEMEZ** (`§7.1⑥`): kaynak çelişirse, şartname yanlışsa,
beklenenden çok farklı bir sayı ölçersen — **bitmesini bekleme, sor.**
