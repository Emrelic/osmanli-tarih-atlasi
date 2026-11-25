# GÖREV PAKETİ — Gariplik tarama PİLOTU (KASA / LAB'a verilecek) · 24 Kasım 2026

Üst belge: `denetim/PLAN-GARIPLIK-TARAMA-1124.md` (K1–K9 onaylı). Betik: `arac/gariplik_tara.py`.
Kısıtlar: motor dosyalarına (`uret_petek.py`, `renkler.py`, `girdi.py`, `motor_onbellek.py`) DOKUNMA · HAVVA'ya iş verme ·
EMRELİC'te koşturma (RAM) · Koşu 41 yayınlanmadan toplu tarama YOK (yalnız bu pilot) · çıktı `main`e girmez, dalda kalır.

**Kim:** KASA (betik koşusu, ölçüm) + 1 Sonnet teyit oturumu (KASA ya da LAB). **Süre:** ≈ 7–8 saat, 2 oturum, 2 gün (tahmin).
**Pilot:** R4 Güney Asya × `erken-yeni` (1500–1800). **Pozitif kontrol:** Roma (R1/R2, MS 150 + MÖ 27). **Negatif kontrol:** 1900 Avrupa (R1, `yakin`).

## 0 · Hazırlık (KASA/LAB, ayrı worktree, `origin/main`den; ~640 MB, 1 dk)
1. `git fetch origin --quiet`; `EnterWorktree gariplik-pilot`; ardından `git merge origin/gariplik-plan-1124` (betik + belgeler bu dalda).
2. Çözülmüş harita: `py arac/kodla.py coz-c data data/devletler_harita.js` (**`kodla.py yay` çıkış 0 vermeden koşturma**; worktree'de
   `devletler_harita.js` yok). `veri-kaynak/ne_10m_land.geojson` repoda.
3. Bağımlılık: `py -c "import shapely, numpy"` (shapely 2.1.2 bu makinede ölçüldü).
4. **Önce sınav (saniyeler):** `py arac/gariplik_tara.py --sinav` → "GEÇTİ" yazmalı (bu oturumda geçti). Yazmıyorsa DUR, "betik kırık" borcu yaz.
   Sınav tür 4, 5, 1b, 1e'yi ve temiz yapıyı sınar; **tür 2 ve 3 sentetik sınanmadı** — gerçek veriyle ilk kez pilotta.
   **Betik gerçek veriyle HİÇ koşturulmadı** (RAM sıkışık; yalnız sentetik sınav): `devletler_harita.js` okuma/`parcaCoz` eşdeğeri
   (`poligonlar`) ilk gerçek koşuda ölçülür — hata çıkarsa betiği düzelt, gerekçeyi rapora yaz.

## 1 · Gün listesi (kuru; ağır analiz yok)
`py arac/gariplik_tara.py --kuru --bolge R4 --dilim erken-yeni --harita data/devletler_harita.js` → gün sayısını **rapora yaz**
(plan §B.1: "geometri değişim günü sayısı ölçülmedi"). 150'yi aşıyorsa `--kontrol-gunleri 3` ve ilk koşuda `--en-cok-gun 20`.

## 2 · Koşular (CPU ağır — makinede başka iş yokken; RAM/CPU tepesini yaz)
```
py arac/gariplik_tara.py --bolge R4 --dilim erken-yeni --harita data/devletler_harita.js --carpan 0.7 --en-cok-gun 20
py arac/gariplik_tara.py --bolge R4 --dilim erken-yeni --harita data/devletler_harita.js --carpan 0.7
py arac/gariplik_tara.py --bolge R4 --dilim erken-yeni --harita data/devletler_harita.js --carpan 1.0
py arac/gariplik_tara.py --bolge R4 --dilim erken-yeni --harita data/devletler_harita.js --carpan 1.5
```
Çıktı: `denetim/GARIPLIK-R4-erken-yeni-c07|c10|c15.tsv`. Üç eşiğin bulgu sayısı karşılaştırılır; gün başına bulgu > 50 ise eşik
1,5× gevşetilir. Koşu süresi ve RAM'i raporla (plan: "ölçülmedi" → ölç).

## 3 · Kontroller (iki yön)
| Kontrol | Yöntem | Geçer notu |
|---|---|---|
| **Pozitif** | `--bolge R1 --dilim antik --gunler 0150-06-15,-0025-06-01` (ve `--bolge R2` aynı günler); `BOSLUK-DOGRULAMA-1123/RAPOR.md`'deki Mısır/Memphis ve İtalya/Galya/İberya boşlukları bulunmalı. Gün biçimi: `gun_anahtar` negatif yılı destekler | ≥ %80 bilinen boşluğu bulur |
| **Negatif** | `--bolge R1 --dilim yakin --gunler 1900-06-15` | gün başına ≤ 50 bulgu |
| **Betik kusuru** | 5 bulguyu tarayıcıda (`queryRenderedFeatures`, LAB) gözle doğrula; yanlış pozitif oranını yaz | ölçülür |

Roma'daki bilinen boşluklar **Koşu 41 kuralının kapsamında** olabilir: bulunmaları betiğin çalıştığını gösterir, düzeltilmesi beklenir.

## 4 · Teyit (Sonnet oturumu; ≈ 20–30 bulgu)
`c10.tsv`'den en yüksek `gun_sayisi` × `olcu` olan 20–30 bulguyu al. Her biri için **PLAN §D**: D.0 ön eleme (`beyanli`/`bilinen`
(Envanter 1119)/`kosu41-bekliyor`/`kosu-bekliyor`), altı soru, sonra merdiven (TDV → akademik → komşu → var mıydı → abi merkez) ve
Hakemli karar. Bulgu başına süreyi yaz. Okunamayan kaynak `BORC-DEFTERI.md`'ne ("okunmadı" ≠ "yok"). **Teyitsiz hiçbir şey yazılmaz;**
`gercek-*` sonuçlar için 3–5 örnek `data/teyitli_yapilar.js` kaydı (PLAN §F.2) YALNIZ dalda hazırlanır, `main`e girmez.

## 5 · Teslim (hepsi dalda; `main`e değil)
- `denetim/GARIPLIK-R4-erken-yeni-c07|c10|c15.tsv`
- `denetim/GARIPLIK-PILOT-RAPOR-<tarih>.md`: ① ne ölçtüm (gün sayısı, üç eşikte bulgu sayısı, koşu süresi/RAM, pozitif/negatif
  kontrol, yanlış pozitif oranı, bulgu başına teyit dakikası) ② ne bulamadım/okunamadı ③ ne istiyorum (eşik kesinleştirme önerisi).
- `git push origin HEAD:refs/heads/gariplik-pilot-1124`; EMRELİC 21 KASIM'a dal adı. `denetle/paketle/push_kapisi` KOŞTURMA.
- Bitince: kilitleri bırak (`py arac/kilit.py birak-hepsi --kim "<ad>"`), worktree'yi kaldır, arka planda süreç bırakma.

## 6 · Durma koşulları
RAM/CPU kasılması (yalnız KASA/LAB; eczane makinelerinde DEĞİL) · bir günün analizi 10 dk'yı aşarsa `--en-cok-gun` küçült · bulguların
≥ %70'i `kosu41-bekliyor/beyanli/bilinen` ise eşik gözden geçir · Emre "dur" derse.

## 7 · Bilinen betik sınırları
- `ESIK` tablosu plan §C.2'nin **ilk önerisi**; kalibrasyon bu pilotun işidir. Devlet ölçeği atlasın o günkü gövdesinden hesaplanır (süzgeç, hüküm değil).
- Tür 2 (tek komşulu kıyı şeridi) ve tür 3 (gövde-kapatma farkı) ilk kez gerçek veriyle pilotta sınanır.
- Kutu kenarını kesen boşluklar atlanır (artefakt); bölge sınırı boyunca boşluklar komşu bölgede (çakışma) yakalanır.
- Arada deniz olan parçalar tür 1'de sayılmaz; > 2×`t1` mesafeli kopuklar koloni sayılıp atlanır.
- Hash: `tür|0,5° hücre|devletler|ilk gün`; kalıcılık eşleşmesi gün başı olmadan yapılır (`gun_sayisi`, `son_gun`).
- Teyitli indeks (`GARIPLIK-TEYITLI-INDEKS.tsv`) ile atlama henüz betikte YOK (pilotta indeks boş); toplu taramadan önce eklenecek.
