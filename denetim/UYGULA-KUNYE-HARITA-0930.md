# UYGULA-KUNYE-HARITA-0930 — KÜNYE + HARİTA kovası: sınıflandırma

30 Eylül 2026 · koordinatör YILDIRIM BAYEZIT · dosyam `data/devletler.js`
Evren: `denetim/PAKET-ACIK-0930.json` (77 açık madde); `sinif`ında harita/künye/hayalet/motor/veri geçen **62**
maddenin tam notu kendi raporundan okundu. `devletler.js` **DEĞİŞMEDİ** (0 yazma ⇒ `node --check` gerekmedi).
`denetle.py` koşturulmadı. `renkler.py` / `uret_petek.py` dokunulmadı.

## Sonuç: devletler.js'te uygulanabilir madde 0
Künye dosyasında çaresi olan her aday ölçüldü; hiçbiri şu an künye yazarak doğru çözülmüyor:

| madde | künye adayı | ölçüm | neden UYGULANMADI | doğru kova |
|---|---|---|---|---|
| 0078 H-0004 | `milano-dukaligi` f:1395-05-11 (devletler.js:2063-2064) · 6 nokta 1281'den `milanoduka` | 114 yıl aşım | Sınıf ② (Visconti signoria → dükalık) ihtimali var ama **künye genişletme kararı Emre'de** — M-5277 (koordinatör): "Milano künyesi GENİŞLETME kararını betiğe KOYMA … Emre'ye bağlı". Karar kaydı bulunamadı. | YERLEŞİM: `denetim/AVRUPA-SINIR-0077-uygula.py` hazır (5 şehir → `__BOSLUK__` + Zadar), koşu 18 sonrası · Milano: **Emre** |
| 0077 H-0075 · H-0074 · H-0076 · H-0039 | `rusya` t:1917-03-15 · Sohum/Tuapse/Derbend/Soçi/Maykop `rusya` →1923 | ardıllar VAR: `rusya-gecici-hukumet` 1917-03-15→11-07 · `sovyet-rusya` 1917-11-07→1923-10-29 | **Sınıf ③** (ardıl yapı geçti, toprak dolu). Künyeyi genişletmek yanlış (çarlık 1917'de bitti); kısaltmak zaten yapılmış. Çare noktaların `s:` dönemini ardıla bölmek. | YERLEŞİM (NOKTA-KAFKAS kalemi) |
| 0079 H-0003 | `iran` f:1925-12-12 · 3 nokta 1281-1509 | künye öncesi 5 pencere | Sınıf ① hayalet: modern ulus-devlet künyesi 13. yy'a GENİŞLETİLEMEZ. Seçenek ④ (`kumuk-samhalligi` f:1578-11-01'i geri açmak) — kuruluş yılı **bulunamadı** (§4: yıl yazılmaz). | YERLEŞİM (`__BOSLUK__`) + **Emre** kararı |
| 0079 H-0010 · H-0011 | bogdan/eflak aşımı | 1281'de 0 (DUNYA-0079 indi) | Künye tarafı bitmiş; kalan Dobruca B3 ve Bărăgan B2 nokta dönemleri. | YERLEŞİM (`DUNYA-0079-uygula.py --dobruca`) + **Emre** |
| 0077 H-0049 | Rijeka/Fiume künyesi | `devletler.js` tarandı: `fiume`/`rijeka` 0 eşleşme | Künye tek başına açılırsa **sessiz borç 12 → 13** (künyeli ama çizilmeyen): Rijeka noktası yok, boya `renkler.py`de (motor tuzu). Üçü birlikte inmeli; yeni kapsam. | YERLEŞİM + RENK (koşu) + künye — koordinatör/Emre |

12'lik sessiz borç listesine (aleut · arua · … · sani-emirligi) denk gelen madde **yok**.

## HARİTA kovasının geri kalanı — hangi kovaya ait
- **YERLEŞİM (noktasızlık / işgal günü / dönem):** 0077 H-0013 · H-0025 · H-0028 · H-0029 · H-0046 · H-0048 · H-0057 · H-0077 · H-0081 · H-0088 · 0079 H-0012 · 0074 H-0014 (Poti noktası)
- **MOTOR (gövde çakışması / Değişmez 8 — koşu ister):** 0072 H-0005(b) · 0074 H-0008 · 0078 H-0006 · 0077 H-0032 · H-0069 · H-0082 · H-0083 · H-0086 · 0079 H-0001 · H-0002 · H-0006 · H-0005 (Emre)
- **MOTOR / yürüyüş ölçümü (koşu 18 çıktısı):** 0078 H-0002 · H-0005
- **`uret_devirler.py` M1 tarama tavanı (tuzda değil, koşu istemez):** 0077 H-0005 · H-0017 · H-0087
- **`js/d_katman.js` / `d_sinirlar*` (yaslama, C/D sınıfı):** 0072 H-0008 · 0073 H-0007 · 0074 H-0006 · H-0009 · 0077 H-0003 · H-0014 · H-0015 · H-0031 (çizgi yarısı) · H-0065 · H-0066 · H-0070 · H-0084
- **RENK (`renkler.py`, motor tuzu):** 0077 H-0039
- **tekrar (ikizinde):** 0077 H-0059 · H-0060 · H-0076
