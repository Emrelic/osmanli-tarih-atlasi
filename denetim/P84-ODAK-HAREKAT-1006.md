# P84-ODAK-HAREKAT-1006 — PAKET 0084 §E: H-0007 (odak) · H-0009 (harekât oku)

Oturum: P84-ODAK-HAREKAT-1006 (eski hazır kıta 0610 1236) · 6 Ekim 2026 · makine EMRELIC.
Temel: `origin/makine/umit` @ `cdc1ccea` · worktree `C:/atlas-p84-odak`.
Görev veren: UMIT İRTİBAT. Diff'ler **UYGULANMADI**.

## 0. Mükerrer kapısı
- `denetim/` içinde `ODAK-TIMUR` · `HAREKAT-OK` · `0084…H-0007/H-0009` için içerik taraması yapıldı.
  Tek isabet (`PAKET-SINIF2-0914.md`) başka paketlerin H-0007/H-0009 maddeleri
  (0039, 0043, 0037). Bu kalem için yazılmış bir **hüküm yok**, yani mükerrer değil.
- 📌 Kısmi öncül: `data/yer_yama_kapsam.js:17` (23 Ağustos, SONNET HAZIR KITA 73) bu
  maddeyi zaten şöyle not etmiş: *"DEVLET: timurlu … Harita Timurlu'nun genişleyen
  sınırlarını açmalı; Osmanlı ile hiç ilgisi yok."* Ama `YER_YAMA_KAPSAM`ı **hiçbir
  tüketici okumuyor**. `js/` ve `index.html` taramasında 0 isabet var, yalnız
  `arac/_yama_sinav.py` ile `denetle_yayin.py` adını anıyor. Yani teşhis 6 haftadır
  yazılıydı ama hiçbir zaman alana dönüşmedi.

---

## İŞ 1 — H-0007: "1387 — Timur'un İran'ın büyük bölümünü hâkimiyeti altına alması"

### Öngörü (ölçümden önce yazıldı)
- Sınıf: **BEYANLI** (`kapsam_genis:true`, odak alanı yok) ⇒ kamera `donemler[di].b`ye,
  yani o günün **Osmanlı kutusuna** uçar. Paketin tahmin ettiği sınıf budur.
- `odak_kimlik:["timurlu"]` yazılırsa 1387-11-01 günü için ≥2 yerleşim çıkar
  (tahmin: 15–40) ve kutu Maveraünnehir, Horasan ve İran'ı kapsar.

### Ölçüm
| soru | sonuç |
|---|---|
| madde nerede | `data/olaylar_ek7.js:204` (kopyası: `data/paket_01.js:3231`, index.html'in yüklediği) |
| yazılı odak alanları | `kapsam_genis:true` · `yer_id` **yok** · `odak_kimlik` **yok** · `odak_yer` **yok** · `odak_kutu_kaynak` **yok** · `yer_kon` **yok** |
| `odak_cozum.js` sınıfı (önce) | **BEYANLI** — `olaylar_ek7.js`teki tek BEYANLI madde (129 madde: 127 KONUMLU · 1 KUTULU · 1 BEYANLI) |
| kamera nereye gidiyor (önce) | `donemler` 1387-05-08…1388-01-01 "Katılım: Karaferye (Veria)" · `b=[20.3, 36.71, 34.4, 43.9]` = **Balkanlar + Batı Anadolu**. Olay ise Horasan/İran'da, yani ~2.000 km doğuda |
| `ODAK-TAVAN.json` | madde `cekirdek_beyanli_kimlik` listesinde kayıtlı (satır 1282) |
| `timurlu` künyesi | `data/devletler.js:1795` · Timurlu Devleti · 1370-04-09 → 1507-05-01 (madde günü pencerede) |
| `odak_kimlik:["timurlu"]` @ 1387-11-01 | **110 yerleşim** · kutu `[40.34, 30.61, 73.15, 43.65]` (Erzurum/Kars → Taşkent/Kâbil; Tebriz, Isfahan, Yezd, Herat, Semerkant, Buhara dâhil) — ölçen: `denetim/ARAC-P84-ODAK-TIMUR-1006.py` (gerçek `SUZGEC` işlevleri) |

### Hüküm
- Paketin dediği sınıf bu: **`kapsam_genis:true` + odak yok ⇒ Osmanlı kutusu.** Yabancı
  bir olay Osmanlı çekirdek dosyasında (`olaylar_ek7.js`) duruyor ve beyan kamerayı
  Osmanlı'ya gönderiyor. Bu, odaksızlıktan daha kötü: kamera yanlış yeri emin bir
  şekilde gösteriyor.
- Çare tek alan: `odak_kimlik:["timurlu"]`. `kapsam_genis:true` **yerinde kalıyor**,
  çünkü olay gerçekten çok bölgeli. Kamera artık o günün Timurlu topraklarına gidiyor
  ve panel "ilgili bölgeye odaklanıldı" diyor. `yer_id` YAZILMADI: olayın tek bir yeri
  yok (`app.js` `maddeOdakKutusu` yorumu: `yer_id` veriye yalan yazar).

### Önce / sonra — `py arac/odak_olc.py` + `kapi_olcumu()` (değişiklik worktree'de deneme olarak uygulandı)
```
                      önce            sonra
olaylar_ek7.js        127/1/1/0       127/2/0/0      (KONUMLU/KUTULU/BEYANLI/ODAKSIZ)
TOPLAM KUTULU         722             723
TOPLAM BEYANLI        440             439
çekirdek meşru beyan  14              13
ÇÖZÜLMEYEN ODAK ATFI  1 (yer_id)      1 (yer_id)      ← aynı eski borç, YENİ kırık atıf 0
kapi_olcumu ihlal     —               False  ("yeni çözülmeyen odak atfı: 0")
```
`node --check data/olaylar_ek7.js` temiz.

### Diff
`denetim/P84-ODAK-HAREKAT-1006-H0007.diff` (yalnız `data/olaylar_ek7.js`, +`odak_kimlik:["timurlu"]`).

---

## İŞ 2 — H-0009: Timur'un sefer oku Tebriz'den başlamalı

Görsel `H-0009-1.png` açıldı. Ok, "Timur'un yürüyüşü (1402)" etiketiyle Sivas
dolayından (Timurlu Valiliği) başlayıp Ankara'da bitiyor.

### Öngörü
Okun kaydı `data/savaslar.js` `SEFERLER` içindedir ve başlangıç `yol[0]`dır
(`rota` yoksa). `yol[0]` Sivas koordinatıdır.

### Ölçüm
| soru | sonuç |
|---|---|
| kayıt | `data/savaslar.js:700-701` `{ ad:"Timur'un yürüyüşü (1402)", tur:"sefer", f:"1402-06-01", t:"1402-09-01", yol:[[37.02,39.75],[35.48,38.73],[34.16,39.15],[32.86,39.93]] }` |
| hangi alandan çiziliyor | `js/app.js:5380` `_cizYol = (rota ≥2) ? s.rota : s.yol` · bu kayıtta `rota` YOK ⇒ **`yol`** · ok başlangıcı `yol[0]` (`app.js:5925` çapa noktası `m.yol[0]`) |
| `yol[0]` | `[37.02, 39.75]` = **Sivas** (yerleşim Sivas 39.750/37.015) |
| duraklar | Sivas → Kayseri (35.48/38.73) → Kırşehir (34.16/39.15) → Ankara (32.86/39.93) |

### Kaynak — TDV (6 Ekim 2026'da çekildi: `timur` HTTP 200 · `ankara-savasi` HTTP 200, başlıklar doğru)
- TDV `timur`: "Memlükler'e ağır bir darbe indirdi, ardından tekrar Tebriz'e döndü."
- TDV `ankara-savasi`: "Bu sebeple Orta Asya'daki kuvvetlerinden takviye alan Timur, 13 Mart 1402'de Tebriz'den gönderdiği elçi vasıtasıyla, savaş mesuliyetini Bayezid'e yüklemek için ondan bazı isteklerde bulundu."
- TDV `timur`: "7 Şevval 804'te (10 Mayıs 1402) hareket eden Timur Kemah, Sivas, Kayseri, Kırşehir üzerinden gelip Ankara'yı kuşattı."

🔴 **BULUNAMADI:** "Timur seferine Tebriz'den başladı / Tebriz'den hareket etti"
anlamında **tek bir birebir cümle** yok. Hareket cümlesi (10 Mayıs 1402) çıkış yerini
**adıyla vermiyor**. Tebriz, iki cümlenin birlikte okunmasından çıkıyor (Suriye'den
sonra Tebriz'e döndü + 13 Mart 1402'de elçiyi Tebriz'den gönderdi). Bu bir
**çıkarımdır**, tırnaklı iddia olarak yazılmadı. Arada `ankara-savasi`nde "Timur da
Nahcıvan'a geldi" cümlesi de var, ama o cümle 13 Mart'tan önceki safhayı anlatıyor.
⇒ Emre'nin hükmü (Tebriz) TDV ile **uyumlu**, ama TDV onu tek cümleyle söylemiyor.

### Ek bulgu
TDV durak listesi **Kemah**'la başlıyor. Atlastaki `yol`da Kemah **YOK**. Kemah
yerleşimi var (39.60/39.03).

### Hüküm ve düzeltme
`yol` = Tebriz → Kemah → Sivas → Kayseri → Kırşehir → Ankara:
`[[46.29,38.08],[39.03,39.60],[37.02,39.75],[35.48,38.73],[34.16,39.15],[32.86,39.93]]`
- Tebriz ile Kemah arasına ara durak **UYDURULMADI**: TDV bu arada bir durak vermiyor.
- Kayda, kaynağı ve "çıkış yeri çıkarımdır" uyarısını taşıyan bir yorum bloğu eklendi.
- `rota` eklenmedi: kara seferi, kavis açık kalıyor.
- Mükerrer süzgeci (`app.js:5759` `_mukerrerMi`, başlangıç ve bitiş noktası ≤25 km) yeni
  başlangıçla başka bir okla çakışmıyor. Aynı pencerede `dusman` taraflı, `sefer` türünde
  başka kayıt yok; İzmir seferi `kusatma` türünde.
- `node --check data/savaslar.js` temiz.
- `py arac/denetle.py` (iki değişiklik birlikte uygulanmışken): **ihlal yok**, ama çıkış
  **2**. Sebep yalnız Değişmez 8'in ÖLÇÜLEMEMESİ (`devletler_harita.js YOK`, taze ağaç).
  Bu bu değişiklikten bağımsız ve ölçülemedi ≠ temiz. Savaş senkronu 165/174 (ok
  kayıtları bu sayıya girmiyor).
- 🟡 Görsel doğrulama (tarayıcıda okun çizimi) **yapılmadı**.

### Öneri B — UYGULANMADI, diff'te YOK
`f:"1402-06-01"` kaynaksız görünüyor. TDV hareketi **10 Mayıs 1402** (7 Şevval 804) diye
günlüyor. Ok artık Tebriz'den başladığı için `f:"1402-05-10"` daha doğru olur. Bu bir
tarih düzeltmesi ve kapsamı bu kalemin üstünde olduğu için yalnız öneri olarak
bırakıldı. Karar sevkte.

### Diff
`denetim/P84-ODAK-HAREKAT-1006-H0009.diff` (yalnız `data/savaslar.js`).

---

## 🔴 PAKETLER — iki diff'in YAYINA ULAŞMASI için şart
`index.html` ham dosyaları değil **paketleri** yükler: `olaylar_ek7.js` → `paket_01.js`,
`savaslar.js` → `paket_12.js` (`index.html:1024-1038`, `:1308`). Diff uygulanıp
paketler yenilenmezse ekran **eski** kaydı göstermeye devam eder.
- KOORD diff'i **ÜRETİLMEDİ**, bilerek. Temeldeki paketler zaten bayat:
  `py arac/paketle.py sina` 14 paketin kaynakla uyuşmadığını söyledi, `yenile` 45
  kaynak değişikliği taşıdı. Bu temelde üretilecek bir paket diff'i başkalarının
  değişikliklerini de taşırdı. Üretilmiş dosya **birleştirilmez, yeniden üretilir**
  (`CLAUDE.md §7`). Deneme `yenile` geri alındı (`git checkout --`), worktree temiz.
- ⇒ Uygulayan taraf diff'i indirdikten sonra **kendi ağacında**
  `py arac/paketle.py yenile` + `sina` koşturmalı.

## ODAK-TAVAN — öneri
İŞ 1 indiğinde `1387-11-01|Timur'un İran'ın…` kimliği `cekirdek_beyanli_kimlik`ten
düşer (14 → 13). Kapı bunu "beyanlı borç kapandı, tavandan düşürülmeli" diye basar,
ihlal saymaz. `§3.4 ③-④`e göre tavan iner, ama yazan koordinatördür
(`--tavan-yaz`, bütün evrenle, körü körüne değil). Bu kalemde dokunulmadı.

## Ek gözlem — kapsam dışı, yalnız kayıt
Maddenin `t:"1387-11-01"` alanı kaynakta bir gün karşılığına sahip değil (`gun:"1387"`,
TDV "1386-1388 üç yıllık sefer"). `§4` "sahte kesinlik" sınıfına aday. Ölçülmedi,
düzeltilmedi.

## Dosyalar
- `denetim/P84-ODAK-HAREKAT-1006.md` (bu rapor)
- `denetim/P84-ODAK-HAREKAT-1006-H0007.diff` — `data/olaylar_ek7.js` · CR 0 · temiz temelde `git apply --check` ✓
- `denetim/P84-ODAK-HAREKAT-1006-H0009.diff` — `data/savaslar.js` · CR 0 · temiz temelde `git apply --check` ✓
- `denetim/ARAC-P84-ODAK-TIMUR-1006.py` — SALT OKUR ölçüm aracı (kök `__file__`den)
