# UYGULA-4 — üç yamanın indirilmesi · 18 Eylül 2026 · koordinatör 1.MURAT

Sevk: `YAMA-ISGAL-1787-0918` · `YAMA-KARADENIZ-0917` · `YAMA-CERKEZISTAN-0917`.
**COMMIT EDİLMEDİ** (sevk gereği). Ön sınav aleti: `denetim/ARAC-UYGULA4-ONSINAV-0918.py`.

## İNDİ (2 kayıt)
| # | kayıt | dosya | ne yazıldı |
|---|---|---|---|
| I-1 | Belgrad | `data/yerlesimler.js` | `isg:` avusturya **1789-10-13 → 1791-08-04**; `d:` 1739-1867 DOKUNULMADI (işgal, ilhak değil) |
| Y-3 | Kuban deltası bozkırı (YENİ dolgu) | `data/yerlesimler_ek_bozkir.js` | 45,50/37,80 · `tur:bolge` · altinorda → (kirim gevşek himaye) → kirim → rusya → geçici hükümet → sovyet |

**Ön sınav (indirmeden ÖNCE ölçüldü):**
```
D002   yeni noktaya en yakın mevcut nokta ANAPA 77,4 km · ad çakışması 0 · 3 km eşiği temiz
2i     Belgrad'ın iki ucunda ±30 günde madde VAR:
       1789-10-13 → 19 gün (Bükreş'in işgali, olaylar_p0917kosu13.js)
       1791-08-04 →  0 gün (Ziştovi Antlaşması, olaylar_ek5.js)
```
**Sonra:** `py arac/denetle.py` → **SONUÇ: temiz** (Değişmez 1 ✓ 3908 yerleşim · 2 ✓ 558/0 açık ·
2s ✓ 97 açık (tavan 121) · **2i ✓ 118 işgal kırılması, 1 açık (tavan 3)** · 4/4c/4d/4s ✓).
`py arac/renk_olc.py` → çıkış 0 · 0 görünmez · 0 çakışma; 6 "yakın ama değmeyen" ÖNCEDEN vardı
(dukagin↔macaristan, ingiliz-sudani↔nkore …) ve bu yamanın kimlikleriyle ilgisiz — yeni kimlik
EKLENMEDİ.

## İKİNCİ TUR — Çerkezistan indi (M-4495: `cerkez` künyesi + rengi geldi)
Alet: `denetim/ARAC-UYGULA4-CERKEZ-0918.py` (kuru koşu → `--yaz`; her eski parça dosyada
TAM BİR KEZ bulunmazsa exit 2 ve hiçbir şey yazılmaz). Üç kayıt: **Soçi (Sâşe) · Tuapse ·
Maykop (Çerkezya)**, hepsi `data/yerlesimler.js`.

| # | ne | sonuç |
|---|---|---|
| C-4 | `s:` `__BOSLUK__` 1441-1475 → `cerkez` | kimlik değişti, **gün değişmedi** |
| C-1 | `d:` 1783-04-19→1829-09-14 (doğrudan) → `v:` `kid:cerkez` · `statu:gevsek` · `himaye:true` | `d:[]` boşaldı |
| C-2 | `s:` rusya 1829→1923 bölündü | kıyı: cerkez 1829→**1838**, rusya 1838→1923 · Maykop: cerkez 1829→**1864-07-01**, rusya sonrası |

**Yamadan iki sapma — ikisi de kasıtlı:**
1. Yama C-4 için (a) `1427-01-01`i öneriyordu (altinorda→cerkez sınırını öne çekmek).
   **Yazılmadı:** o kırılma Y-1 (Kabartay) ile aynı gerekçeye ve aynı **KK-1** maddesine bağlı.
   1427-01-01'de ±30 günde madde VAR (Tata Antlaşması) ama **konusu Çerkez değil** — sayaçta
   kapalı, anlatıda karşılıksız bir toprak değişimi olurdu.
2. Yama C-2'de rusya `1917-03-15`te bitiyordu. **Yazılmadı:** bu üç kayıtta
   `rusya-gecici-hukumet`/`sovyet-rusya` dilimleri YOK; yazılsaydı **1917-1923 arası
   sahipsizlik** (Değişmez 1) açılırdı. Bitiş `1923-10-29` kaldı.
3. Anapa'nın `__BOSLUK__`una DOKUNULMADI (yamanın kendi notu: Ceneviz kolonisi, ayrı ölçüm).

**Sonra:** `denetle.py` → **SONUÇ: temiz** (2s 97 açık/tavan 121 · 2i 1 açık/tavan 3 · 4d 356).
`renk_olc.py` → çıkış 0 · 0 görünmez · 0 çakışma, **ama "yakın ama değmeyen" 6 → 7**:
`cerkez ↔ dulkadir ΔE 11,56 · 579 km · 1441-1515` — C-4 kimliği 1441'e yazıldığı için doğdu.
İhlal değil (eşik 12'nin altı, çıkış kodunu etkilemiyor) ama **renk sahibine bildirilmeli**.

## UYGULANMADI — sebebiyle
| # | kayıt | sebep |
|---|---|---|
| Y-1 | Kabartay 1441 → 1427 | **KARAR + ŞART.** Yamanın kendi koşulu: "yeni 1427 kırılması Değişmez 2s evrenine girer ⇒ KK-1 maddesiyle birlikte inmeli". Kronoloji dosyası bu sevkte bende değil ⇒ tek başına indirmedim. |
| C-1 | Soçi·Tuapse·Maykop `d:` → `v:` himaye | **ÖN KOŞUL İNMEDİ.** `kid:"cerkez"` künyesi `data/devletler.js`te YOK, rengi `renkler.py`de YOK (ikisini de ölçtüm). Yamanın kendi sırası: C-3 → C-1. `himaye:true` iç dolguyu devletin KENDİ rengiyle boyar ⇒ renksiz kimlik = harita deliği. |
| C-2 | Soçi/Tuapse 1838, Maykop 1864 `cerkez` dilimi | aynı sebep: `cerkez` kimliği yok. |
| C-4 | `__BOSLUK__` 1441-1475 → `cerkez` | C-3'e bağlı; ayrıca başlangıç için a/b kararı açık. |
| I-1'in IK-1 maddesi · KK-1..KK-4 · CE-1..CE-3 | kronoloji önerileri | kronoloji dosyaları bu sevkte bende değil. |
| I-2 · I-3 · Y-2 · Y-4 · Y-5 · Y-6 · C-5 · C-6 | — | yamaların kendisi "değişiklik önerilmiyor / reddedildi / ölçülemedi" diyor. |

## Gün kararı (I-1) — kayda ne yazıldı
TDV Belgrad'ın düşüşü için **yalnız yıl** veriyor (dört madde tarandı: belgrad · zistovi-antlasmasi ·
semendire · koca-yusuf-pasa). Yamanın (a) seçeneği uygulandı: `f:"1789-10-13"`, **günün komşu
Semendire'den alındığı kayda açıkça yazıldı** (§4 şartlı komşu kuralı: komşunun günü kendi
kaynağına dayanıyor · hedef için kaynak gün yok · aynı harekât, 45 km · kayda yazıldı).
(b) seçeneği (`1789-01-01`) reddedildi: haritayı Ocak-Ekim 1789 arası 9 ay boyunca işgal altında
gösterirdi — kaynağın söylemediği bir şey.

## 1.MURAT'a düşenler
1. **`cerkez` künyesi + rengi** (D-KUNYE · renk sahibi) — C-1/C-2/C-4 buna kilitli.
   ⚠️ `arac/renkler.py` şu anda UYGULA-3'te; çakışma olmasın.
2. **Y-1 kararı (a/b)** ve KK-1 maddesi — birlikte inmeli.
3. Kronoloji önerileri (IK-1 · KK-1..4 · CE-1..3) bir kronoloji oturumuna.
4. Koşu 13'ten sonra ölçülmeli: `window.ISGALLER` penceresinde 9-10 kayıt mı (yamanın M-1 kalemi),
   ve Anapa gövdesinin Kuban kuzeyi 2.575 → ~121 km²'ye indi mi (Y-3'ün simülasyonu motorun nehir
   yaslanmasını içermiyordu).
