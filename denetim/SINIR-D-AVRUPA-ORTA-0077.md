# SINIR-D-AVRUPA-ORTA-0077 — çalışma defteri

Dosyam: `data/d_sinirlar_avrupa_orta.js` (tek). Koordinatör: YILDIRIM BAYEZIT.

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı · 2026-09-24 ~12:40 · evren: `data/d_sinirlar_avrupa_orta.js` 205 kayıt)

Görülen tek şey: dosya başlığı + ilk 3 kayıt (hepsi `sinif:"YOK"`, `not` alanında
"29 Ekim 1923 sınıfı: E", `dayanak[]` dolu, `hat:null`).

- Ö1. 147 YOK kaydının **≥ 120'sinde `dayanak[]` zaten dolu** — darboğaz belge değil GEOMETRİ.
- Ö2. 147 YOK'un `not`unda hukukî sınıf **çoğunlukla E** (≥ 100); gerçek anlamda C
  (metin yalnız yer adı sayıyor, koordinat/tahdit protokolü yok) **en çok 15**.
- Ö3. "0 C" ailenin kusuru değil, üreticinin (`ARAC-D3ORTA-URET-0916.py`) kararı:
  geometri yoksa sınıf ne olursa olsun YOK yazılmış.
- Ö4. Belgeye bağlanıp ÇİZİLEBİLECEK YOK sayısı (akademik geometriyle) en çok **N ≈ 60**;
  bunun **M ≤ 15**'i C olarak.
- Sınav anı: sayım betiğinin ilk koşusu.

## 1. SINAV — öngörüler

| | öngörü | ölçülen | hüküm |
|---|---|---|---|
| Ö1 | ≥120/147 dayanak dolu | **147/147** | ✅ tuttu |
| Ö2 | hukukî sınıf çoğunlukla E (≥100); gerçek C ≤15 | `not`ta sınıf okunan 33 kaydın **27'si E**, 4'ü C, 2'si D (+1 kesim C: Javorina); 114 kaydın notu "aralıktaki sınıf" biçiminde (çoğu E) | ✅ yön doğru |
| Ö3 | 0 C = üreticinin kararı | ✅ `dyok()` sınıfı `not`a yazıp `sinif:"YOK"` basıyor (URET-0916 satır 301-306) | ✅ tuttu |
| Ö4 | N≈60 çizilebilir, M≤15 C | **14 C çizildi** (11'i 1923-09-01'de yürürlükte + 3 geriye izdüşüm) | 🟡 N ÇÜRÜDÜ (60 değil 14) — sebep §2 |

## 2. 147 YOK'un anatomisi

- **114'ü 1923-09-01'de yürürlükte DEĞİL** (geriye sarma G1–G10: 1343–1918). 1923 haritasını etkilemez.
- **33'ü yürürlükte.** Hepsinin belgesi var; hiçbirinin 1923 koordinatı yok. Engel: çizilecek
  geometri. Elde yalnız Natural Earth 10m bugünkü sınırlar var; CShapes 2.0 **Emre kararı bekliyor**
  (CC BY-NC-SA, `denetim/D1923-CIZGI-0920.md` satır 168) — kullanılmadı.
- 33'ün bugünkü karşılığı:
  - **11'inin bugünkü uluslararası sınırda karşılığı var** → C (kaba vekil) yapıldı.
  - **22'sinin yok**: DE-PL ×3, Danzig ×2, Saar, PL-SU ×3, PL-LT, PL-LV, EE-SU, LV-SU, FI-SU ×3
    (1940-45'te değişti ya da bugün iç sınır), CS-PL-2 (Rutenya–Galiçya, bugün Ukrayna içi),
    PL-RO-2 (Çeremoş NE nehirlerinde YOK), CS-PL-RO-Stoh ve PL-RO-1940 (birkaç km'lik kesim,
    üçlü nokta konumu bulunamadı), AT-HU Pinka / Ólmod (1.MURAT 20 Eyl hükmüyle "KAYNAK BEKLİYOR" —
    dokunulmadı).
- **114 tarihî kaydın** en az 3'ü aynı hattır: Versay md. 82, 1923 DE-ÇS hattını "3 Ağustos 1914
  eski sınırı" diye TANIMLAR ⇒ `d1878-de-ah-bohemya-1/2/3` aynı vekille C yapıldı.
  Aday olup yapılmayanlar (kaynak/konum eksik): `d1606-alm-ah-bohemya-*` ×3 (1606–1878 arası
  değişiklik aranmadı) · `d1878-sr-ro-tuna-*` ×3 (1918 öncesi HU-RO-RS üçlü noktası Tuna'da nerede
  — bulunamadı) · `d1878-bs-sr-drina-*` ×3 · `d1878-bs-mn-*` ×2 · Silezya ×3 (1742 hattı Hlučín'de
  bugünkünden farklı).

## 3. YAPILAN — 14 kayıt YOK → C

Betik `denetim/SINIR-D-AVRUPA-ORTA-0077-C.py` (kuru koşu varsayılan, `--yaz`).

| id | km | sol_taraf | kesinlik_km | not |
|---|---|---|---|---|
| d1923-de-cs-3 | 99.6 | almanya | 5 | Versay md. 82 |
| d1923-de-cs-1 | 164.3 | almanya | 5 | Bavyera–Saksonya bölme noktası YAKLAŞIK (renk etkisiz) |
| d1923-de-cs-2 | 322.6 | almanya | 5 | |
| d1923-de-cs-4 | 523.0 | almanya | 10 | doğu ucu Olza–Oder kavşağı YAKLAŞIK (1922 üçlü noktası kaynakla doğrulanmadı) |
| d1923-cs-pl-1 | 482.4 | polonya | 5 | Javorina 1923-09-01'de ihtilaflı |
| d1923-ro-yu-banat | 238.8 | romanya-kralligi | 15 | 1923-11-24 takası SONRA; üçlü nokta ~13 km kaymış |
| d1923-ro-yu-tuna | 219.5 | romanya-kralligi | 3 | Demir Kapı barajı |
| d1923-al-yu-naum | 14.6 | yugoslavya | 5 | 1923'te Sveti Naum ARNAVUTLUK'ta — bugünkü hat bu kutuda yanlış tarafta |
| d1923-al-yu-vermos | 43.4 | yugoslavya | 10 | 1925 değişikliği |
| d1923-ee-lv | 255.3 | letonya | 5 | DOĞU UCU EKSİK (Petseri/Abrene) |
| d1923-de-lt-memel | 195.8 | almanya | 5 | Kurşiu Nerija (4 km) çizilmedi |
| d1878-de-ah-bohemya-3/1/2 | 99.6/164.3/322.6 | almanya | 5 | Versay md. 82 geriye izdüşüm |

1923 kayıtları toplam **2.559 km** yeni çizgi (siyah, C).

Doğrulama:
- `node --check` ✓ · `node denetim/ARAC-MILIMETRIK-0923.js --hepsi`: ① anakronizm **0**, ② ADAY listesinde
  bu 14'ten **hiçbiri yok**.
- Örtüşme: yeni 14 hat, 9 ailenin o gün yürürlükteki bütün hatlarıyla karşılaştırıldı — %2'yi aşan
  ortak kesim **0**. Pozitif kontrol: aynı betik AUT-HUN ile `d1923-at-hu-*`, HUN-ROU ile `d1923-hu-ro`
  (%88) örtüşmesini BULDU.
- `sol_taraf` 14'ünde de NE ülke poligonuyla ölçüldü (orta segmentin 3 km solu).

## 4. ÖLÇÜ — 5 km iki yan, 1923-09-01 (`denetim/SINIR-D-AVRUPA-ORTA-0077-olc.js`)

Betik ASYA'nınkinin birebir kopyası (tarayıcıda koşar, çünkü yaslama tarayıcıdadır).
**Pozitif kontrol (B9):** yaslanan E hatları `son` %100'e çıkıyor (at-hu-1..4, hu-cs-2, al-yu-*),
`ham` ≈ %50 ⇒ betik doğru ve yanlış yanı ayırt ediyor.

| | ÖNCE | SONRA |
|---|---|---|
| E (27 hat, 3.986 km) ham → son | %52,6 → **%88,5** | %52,6 → **%88,5** (hat hat aynı: fark 0) |
| C | 0 hat | **11 hat, 2.554 km · %51,8 → %52,3** |
| aile, hepsi | 28 hat, 4.668 km · son %85,0 | **39 hat, 7.222 km** · son %74,1 |

⇒ **Renk oranı C ile ARTMAZ, artamaz** (C yaslamaya girmez — kural). C'nin kazancı kapsama:
çizilen km 4.668 → 7.222 (+%55). C hatlarındaki %52, A katmanının o hatlara OTURMADIĞINI
gösteriyor — aşağıya bakın.

## 5. A KATMANINDA GÖRÜLEN KUSURLAR (dosyam DEĞİL — koordinatöre)

`data/devletler_harita.js` (motor çıktısı, e1cf22ba) 1923-09-01 günü, bağımsız node sorgusuyla
(`scratchpad/govde_kontrol.js`, tarayıcıyla aynı sonuç):

| nokta | A'nın sahibi | olması gereken | sebep (ölçüldü) |
|---|---|---|---|
| Wrocław, Legnica, Opole, Gliwice | **polonya** | almanya | 87 girdi dosyasında Breslau/Oppeln/Liegnitz/Gleiwitz noktası **0** — petek Polonya'dan emiliyor (§2) |
| Kłodzko, Wałbrzych | **hiçbiri (delik)** | almanya | nokta 0 |
| Broumov, Jeseník | **hiçbiri (delik)** | cekoslovakya | nokta 0 |
| Klaipėda, Palanga | **almanya** | litvanya (1923-02-16'dan) | `yerlesimler_ek7.js` Klaipėda `s:` almanya →1923-10-29; kendi yorumu "1923 Ocak'a kadar Almanya" diyor ama veri öyle değil (ayrıca 1920-01-10 → 1923-02-16 Müttefik idaresi) |
| Abrene/Pytalovo | **sovyet-rusya** | letonya (1920–44) | nokta 0 |
| Petseri/Pechory | **sovyet-rusya** | estonya (1920–44) | nokta 0 |
| Freistadt (Yukarı Avusturya) | **cekoslovakya** | avusturya | nokta 0 — `d1923-at-cs` bu yüzden YASLANMIYOR ("yön doğrulanamadı", sol gövde doğru/yanlış 803/6212 km²) |
| Murska Sobota (Prekmurje) | **macaristan-naiplik** | yugoslavya | nokta 0 |

`d1923-at-cs` (335 km E) ve `d1923-pl-ro` (20 km E) bugün hâlâ yaslanmıyor; `_dTarafRengi`/harita
anahtarı kusurunun KALINTISI yok (`_dTarafGovdesi` 11 tarafın hepsinde gövde buluyor;
`arnavutluk-bagimsiz → arnavutluk` doğru çözülüyor).

## 6. Bulunamadı / yapılmadı
- 22 yürürlükteki YOK için geometri kaynağı bulunamadı (CShapes kararı Emre'de).
- 1922 DE-ÇS-PL üçlü noktası, 1918 öncesi HU-RO-RS Tuna üçlü noktası, Stoh üçlü noktası: kaynakta bulunamadı.
- 1606–1878 Bohemya hattındaki değişiklikler ARANMADI.
- NE vekillerinin 1923 hattından sapması ÖLÇÜLMEDİ (kesinlik_km'ler beyan, ölçüm değil).
