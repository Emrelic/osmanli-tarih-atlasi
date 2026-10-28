# UMIT-W46b — kesintisiz sahiplik: kalan 37 aday · Değişmez 2 ölçümü · komşu-kesinti sayımı

**Temel commit: `c779df9a`** (`origin/main`, ağaç `C:\atlas-w46b`, `--detach`). YALNIZ ÖLÇÜM + ÖNERİ, veri yazılmadı.
Önceki teslim `aac22710` (`UMIT-W46-…-1006.md`).

## Öngörü (ölçümden ÖNCE, 6 Ekim 2026)
1. **Değişmez 2 (±30 gün):**
   - **Antlaşma gününe düşen kırılmalarda madde VAR:** Dimetoka 1913-09-29 · 1915-09-06 · Erzurum 1829-09-14.
     Dimetoka 1920-05-22 ve Van 1918-04-02 için de muhtemelen var (Gümülcine/Batı Trakya işgali; 1918 Mart geri alımları).
   - **YIL düzeyli (`YYYY-01-01`) uçlarda madde YOK** (Dubiça 1687/1701 · Novi 1691/1703 · Kostayniçe 1687 · Banaluka 1688)
     ⇒ çoğu "madde gerekir" çıkacak.
   - Erzurum 1829-07-08: muhtemelen madde yok.
2. **Kalan 37:**
   - Doğu Anadolu'da Kemah ve Erciş doğrulanır (Rus işgali 1916–18).
   - Harput, Palu ve Çemişgezek doğrulanmaz (işgal edilmedi).
   - Mora adaları (Egina) Venedik 1687–1715 doğrulanır; Tebai/Salamis ölçülemez.
   - Bosna'nın kalan 6'sının çoğu ölçülemez ya da doğrulanmaz (Bihaç/Krupa hattı kuşatma gördü, düşmedi).
   - Suriye: Kütahya 1833 kaynağı Adana/Halep eyaletlerini verirse İskenderun, Birecik, Mersin vb. Mısır idaresinde çıkar.
     Ama yerleşim ADIYLA okunmadan hüküm yok.
3. **Komşu-kesinti sayımı:** Yüzlerce aday; çoğu sınır yerleşimi ve kaynak sessizliği. Suriye kümesi baskın.

## Öngörü sınavı
- **① TUTTU, ama sayı yanıltıcı.** Kapı ölçütüyle (yer şartı YOK, `d/v/isg` kolu) 23 uçtan 18'i "VAR" çıkıyor.
  Ama yakın maddelerin çoğu **alakasız**: Dubiça 1701 ⇐ "Prusya Krallığı ilan edildi", Novi 1703 ⇐ "Yenikale'nin inşası",
  Van 1918-04-02 ⇐ Tonga. ⇒ Aşağıda iki sütun var: **KAPI** (`denetle.py` ne der) ve **ANLAM** (madde o olayı mı anlatıyor).
  Erzurum 1829-07-08 öngörümün aksine kapıdan geçiyor, ama Silistre'yle; anlamca madde gerekir.
- **② KISMEN.**
  - **Kemah TERS çıktı:** TDV açıkça *"Rus işgaline uğramadıysa da"* diyor ⇒ atlas DOĞRU.
  - Erciş ölçülemedi.
  - **Doğubayazıt** öngörülmemişti, en güçlü bulgu: **dört işgal, atlasta hiçbiri yok**.
  - **Egina doğrulandı, ama pencere tahminimden geniş:** HE 1664–1715.
- **③ TERS.** Yüzlerce değil, **47 aday** çıktı. Suriye baskın değil: 47'nin 10'u.

## ① Değişmez 2 — önerilen her kırılmanın ±30 günü (`UMIT-W46b-OLC-1006.py d2`, evren `olaylar*.js` + `kronoloji_sinir*.js`)
| yerleşim | gün | ne | KAPI | ANLAM | en yakın madde |
|---|---|---|---|---|---|
| Dimetoka | 1913-09-29 | `d` başı | ✔ | ✔ | +0 "İstanbul Antlaşması — Osmanlı-Bulgar sınırının tarifi" |
| Dimetoka | 1915-09-06 | `d` sonu | ✔ | ✔ | +0 "Sofya Sözleşmesi — Osmanlı-Bulgar sınırının düzeltilmesi" |
| Dimetoka | 1920-05-22 | `s yunanistan` başı | ✔ | ✔ (aynı olay) | +5 "Gümülcine'nin işgali — Batı Trakya'nın kaybı" (05-27; hükmünüze göre 05-27 Hemetli ayrı olay — o maddenin günü ayrıca sınanmalı) |
| Dubiça | 1687-01-01 | `isg` başı | ✘ | ✘ | — **madde gerekir** |
| Dubiça | 1701-01-01 | `isg` sonu | ✔ | ✘ | +17 Prusya Krallığı — **madde gerekir** |
| Novi | 1691-01-01 | `isg` başı | ✘ | ✘ | — **madde gerekir** |
| Novi | 1703-01-01 | `isg` sonu | ✔ | ✘ | +0 Yenikale — **madde gerekir** |
| Kostayniçe | 1687-01-01 | `d` sonu | ✘ | ✘ | — **madde gerekir** |
| Banaluka | 1688-01-01 | `isg` | ✔ | ~ | −15 Eğri'nin kaybı · +16 Munkács (aynı savaş, başka yer) — süre/bitiş bilinmediği için öneri eksik |
| Erzurum | 1829-07-08 | `isg` başı | ✔ | ✘ | −8 Silistre'nin teslimi — **madde gerekir** |
| Erzurum | 1829-09-14 | `isg` sonu | ✔ | ✔ | +0 Edirne Antlaşması |
| Van | 1918-04-02 | `isg` sonu | ✔ | ✘ | −4 Brest-Litovsk yürürlüğü (dolaylı) — **madde gerekir** · başlangıç ölçülemedi |
| Egina | 1664-01-01 | `s venedik` başı | ✘ | ✘ | — **madde gerekir** |
| Egina | 1715-01-01 | `s venedik` sonu | ✔ | ~ | +0 "Suda ve Spinalonga kalelerinin fethi" · −24 "Venedik'e savaş ilanı" (aynı sefer; Egina'yı anmıyor) |
| Doğubayazıt | 1828-01-01 | `isg` başı | ✘ | ✘ | — **madde gerekir** (gün bilinmiyor) |
| Doğubayazıt | 1829-09-14 | `isg` sonu | ✔ | ✔ | +0 Edirne Antlaşması |
| Doğubayazıt | 1854-07-29 | `isg` başı | ✔ | ✘ | +26 "İlk dış borç" — **madde gerekir** |
| Doğubayazıt | 1856-03-30 | `isg` sonu | ✔ | ✔ | +0 Paris Antlaşması |
| Doğubayazıt | 1877-04-30 | `isg` başı | ✔ | ~ | −6 "Rusya'nın savaş ilânı" (savaş, işgal değil) |
| Doğubayazıt | 1878-07-13 | `isg` sonu | ✔ | ✔ | +0 Berlin Antlaşması |
| Doğubayazıt | 1918-04-14 | `isg` sonu | ✔ | ~ | +0 "Batum'un geri alınışı" (aynı harekât, başka yer) · başlangıç ölçülemedi |
| Lüleburgaz | 1912 (yıl) | `s` başı | ✘ | ✘ | ⚠️ `1912-01-01` savaştan ÖNCEYE düşer (I. Balkan Savaşı Ekim 1912) — gün kaynağı gerekir |
| Lüleburgaz | 1913 (yıl) | `s` sonu | ✔ | ✘ | +22 Bâb-ı Âli Baskını — aynı ⚠️ |

**Sayım:** 23 uç.
- **KAPI:** 17 ✔ · 6 ✘
- **ANLAM:** 7 ✔ · 4 ~ · 12 ✘
- **"Madde gerekir" (ANLAM ✘): 12 uç, adıyla:**
  - Dubiça 1687 · 1701
  - Novi 1691 · 1703
  - Kostayniçe 1687
  - Erzurum 1829-07-08
  - Van 1918-04-02
  - Egina 1664
  - Doğubayazıt 1828 · 1854-07-29
  - Lüleburgaz 1912 · 1913
- ⚠️ **Kapının eksikliği:** `d/v/isg` kolunda `yer_sarti=False`. Bu kol 2s'in yer/taraf şartını kullanmıyor; bu ölçüm
  "alakasız madde kapıyı açıyor" durumunu 23 uçta **10 kez** gösterdi (KAPI ✔, ANLAM ✘/~). Bilgin olsun, öneri değil:
  bu `denetle.py`'nin tasarım kararı (D2 yorumu, `:1575`).
- **YIL düzeyli uçlar** (`YYYY-01-01`) bir maddeye ancak tesadüfen düşer. Bu uçlara madde yazmak §4 "tarih uydurma"ya
  dikkat ister: madde de YIL hassasiyetinde olmalı.

## ② Kalan 37 aday — adıyla
| küme | aday | sonuç | kaynak (okundu) |
|---|---|---|---|
| Doğu Anadolu | **Doğubayazıt** | ✔ **DOĞRULANDI — 4 işgal** | TDV `dogubayazit`: 1828 işgal → *"1829 Edirne Antlaşması ile geri alındı"* · *"29 Temmuz 1854'te işgale uğrayan"* → *"30 Mart 1856 … Paris Antlaşması … geri verildi"* · *"Rus birlikleri 30 Nisan 1877 tarihinde Doğubayazıt'ı ele geçirdi"* → Ayastefanos ile terk, *"Berlin Antlaşması'nın 60. maddesiyle şehrin Osmanlı Devleti'ne iadesi kesinleşti"* (1878-07-13) · *"31 Ekim 1914'te Ruslar … ilk önce bu şehre saldırdılar"* → *"14 Nisan 1918'de kesin olarak kurtarıldı"*. Atlas: `d` 1514-09-06 → 1920-04-23 kesintisiz, `isg` YOK |
| Doğu Anadolu | Kemah | ✘ **atlas DOĞRU** | TDV `kemah`: *"Bu savaş esnasında Kemah Rus işgaline uğramadıysa da"* |
| Doğu Anadolu | Harput | ○ kaynak kesinti anmıyor | TDV `harput`: Rus/işgal geçmiyor |
| Doğu Anadolu | Erciş · Çemişgezek · Palu · Çaldıran · Özalp · Bargiri · Şeyhrumi | ? **ölçülemedi** | Hiçbirinin TDV maddesi yok (slug 302 + başlık araması yapıldı, yalnız ilgisiz başlıklar çıktı) |
| Mora/Ege | **Egina** | ✔ **DOĞRULANDI** | HE `egina`: *"Venecije (1451–1537. i 1664–1715) i Osmanskoga Carstva (1537–1664. i 1715–1828)"*. Atlas: `d` 1537-10-01 → 1821 kesintisiz ⇒ **~51 yıllık hata** |
| Mora/Ege | İstefe (Tebai) | ○ kaynak kesinti anmıyor | TDV `istefe`: 1687 Venedik geçmiyor |
| Mora/Ege | Kulluk (Salamis) · Çamlıca (Hidra) | ? ölçülemedi | TDV ve HE maddesi yok |
| Bosna | Yayça · Srebrenik · Tuzla · Ostrovica (HE `kulen-vakuf`) · Cetin (HE `cetingrad`) | ○ kaynak kesinti anmıyor | HE maddeleri okundu, pencerede Avusturya yönetimi geçmiyor |
| Bosna | Bihaç | ? ölçülemedi | HE slug 302 |
| Sırbistan | Vişegrad | ? ölçülemedi | HE slug 302 |
| Suriye 1831–40 | Amman · Kerak · Suruç · Azez · Münbiç · Cerablus · Ayn el-Arab · Mersin · İskenderun · Dörtyol · Erzin · Yumurtalık · Sûr · Birecik · Mercihamis · Sincan (16) | ⏸ **HÜKÜM YOK (④)** | Okunan: TDV `ibrahim-pasa-kavalali` · `kavalali-mehmed-ali-pasa`: *"Halep ve Şam'dan başka Adana'nın da İbrâhim Paşa'ya bırakılmasına razı oldu … (3 Mayıs 1833)"* · ferman 6 Mayıs 1833 · *"gerçekte muahede şeklinde teâti edilmiş bir belge mevcut değildir"*. Destek **EYALET düzeyinde**; 16 yerleşimin hiçbiri ADIYLA geçmiyor. Bir sonraki adım: her yerleşimin 1833'teki eyaleti/sancağı (Adana · Halep · Şam · Sayda · Rakka/Urfa?) ayrı bir kaynaktan ölçülmeli. Birecik/Suruç (Urfa) ve Amman/Kerak (çöl kenarı) en şüphelileri |

**Toplam 37:** ✔ 2 · ✘ 1 · ○ 7 · ? 11 · ⏸ 16.
⇒ W46 ile birlikte kaynakla sınanan 48 aday: **8 doğrulandı** (Dubiça · Novi · Kostayniçe · Banaluka · Van · Erzurum ·
Egina · Doğubayazıt) · 2 atlas doğru (Krupa · Kemah) · 7 kaynak sessiz · 15 ölçülemedi · 16 hükümsüz.

## ③ Dubiça ve W45 kilidi — öneri W45 diff'inin ÜSTÜNE zincir
**Taban:** `denetim/UMIT-W45-DUBICA-1718-1006.diff` (yalnız `d[0].kaynak` ve `s[2].kaynak` metnini değiştiriyor;
dönem sınırlarına dokunmuyor).

**Zincir (W45 uygulandıktan SONRA):** aynı kayıtta `isg:` dizisinin BAŞINA tek öğe:
```
{f:"1687-01-01",t:"1701-01-01",d:"avusturya",kaynak:"HE Kozarska Dubica «više puta dolazila pod vlast Austrije (1687–1701., …)» — YIL (gün yok, §4) · Karlofça birincil metni garnizonun Dubizza'dan ÇEKİLECEĞİNİ söyler (iade yönü) · UMIT-W46"}
```
- W45'in `d[0]` (1538 → 1718) metnine dokunmaz. `isg` üst katmandır; `d`'yi bölmeye gerek yok (Novi'nin 1788 `isg`'si emsal).
- **Değişmez 2:** iki uç da ANLAMca maddesiz (①). İki madde gerekir; ikisi de YIL hassasiyetinde ve kronoloji sahibinin.
- `:232` yorum düzeltmesi ("Osmanlı'dan Avusturya'ya geçti" → iade) W45 diff'iyle çakışmıyor (farklı satır). Ayrı hunk olur.

## ⑤ Yeni denetim adayı: "komşum kesinti taşıyor, ben taşımıyorum"
**Tanım** (betik `denetim/UMIT-W46b-OLC-1006.py komsu`):
- **GEÇİCİ kesinti:** Y'nin `s/v/isg` dönemi, ≥180 gün, ve Y'nin `d:`'si hem öncesinde hem sonrasında var.
- **Aday X:** ≤40 km içinde, aynı aralığı tek bir `d:` ile kesintisiz örtüyor ve kendisi o aralıkta hiçbir `s/v/isg` taşımıyor.

**Sınav (iki yön + uzaklık):**
- Yapay komşusu kesintili, kendisi değil ⇒ aday ✔
- Kesintiyi kendisi de taşıyor ⇒ aday değil ✔
- 580 km uzak ⇒ aday değil ✔
- Sonuç: **GEÇTİ.**

**Veride sayım:** **47 aday / 4299 yerleşim** (R=40 km, ≥180 gün). En kalabalık kümeler (onyıl × kesinti sahibi):
- 1830'lar `misir-kavalali` 10
- 1360'lar `bizans` 4
- 1680'ler `venedik` 4
- 1790'lar `fransa` 4
- 1910'lar `bulgaristan-kralligi` 3

Tam liste aşağıda (Ek).

**Görünen kazanç (sınandı):**
- **Lüleburgaz ✔ DOĞRULANDI.** TDV `luleburgaz`: *"I. Balkan Savaşı sırasında (1912) Bulgar ordusu şehri … ele geçirdiyse de 1913'te Türkler tarafından geri alındı. 1918-1922 yıllarında burası ve bütün Trakya Yunanlılar tarafından işgal edildi."*
  - Atlas: `d` 1413 → 1920 kesintisiz. Ne 1912–13 Bulgar `s`'si ne Yunan `isg`'si var; Kırklareli ikisini de taşıyor.
  - TDV'nin "1918"'i Kırklareli'nin TDV'li 1920-07-26'sıyla çelişiyor (§4 ⑥, hüküm yok).
- Egina ve Hidra bu yoldan da yakalandı (komşuları Damala, Methana ve Ermiyoni 1686–1715 `venedik`).

**Göremediği (ölçüldü):**
- **Dubiça, Doğubayazıt ve Dimetoka aday DEĞİL.** Komşuları da aynı kesintiyi taşımıyor (küme bütünüyle eksik) ya da
  kesinti tek kayıtlık.
- ⇒ Denetim **yalnız iç tutarsızlığı** yakalar, "kümece eksik"i yakalayamaz. Pencere taraması (W46) ile birbirini tamamlar.

**Yanlış pozitif riski:** Ölçülmedi. Liste kıyı/boğaz karşısı (Çanakkale ⇄ Gelibolu 1366 `bizans`) ve nehir karşısı
(Rusçuk ⇄ Yergöğü) örnekleri içeriyor; bunların çoğu büyük olasılıkla atlasın DOĞRU olduğu yerler.
⇒ Denetim bir **ihlal kapısı değil, aday listesi** olarak önerilir; tavanı yazmadan önce ölçülmeli (§3.4).

**Öneri:** `denetle.py`'ye girmez (talimat). Betik `denetim/` altında duruyor; koordinatör kapıya bağlamak isterse önce
yanlış pozitif payı ölçülmeli: 47'nin rastgele 10'u kaynakla.

## Bulunamadı (adıyla)
- **Gün bulunamadı:** Dubiça 1687/1701 · Novi 1691/1703 · Kostayniçe 1687 · Banaluka 1688 (süresi de) · Egina 1664/1715 ·
  Doğubayazıt 1828 · Lüleburgaz 1912/1913.
- **İşgal başlangıcı bulunamadı:** Van (TDV) · Doğubayazıt WWI (31 Ekim 1914 bir saldırı günü, işgal günü değil).
- **Maddesi yok:** Erciş · Çemişgezek · Palu · Çaldıran · Özalp · Bargiri · Şeyhrumi · Kulluk · Hidra (TDV/HE).
- **Slug 302:** Bihaç · Vişegrad (HE).
- **Suriye 16:** yerleşim adıyla kaynak bulunamadı.

## Ek — komşu-kesinti adayları (47)
| aday | komşunun kesintisi (ilk 2) |
|---|---|
| Arhavi | 1878-07-13→1917-03-15 s:rusya (Murvaneti, 35 km) · 1915-02-23→1917-03-15 s:rusya (Hopa, 10 km) (+2) |
| Arta | 1684-09-29→1797-10-17 s:venedik (Preveze, 30 km) · 1684-09-29→1797-10-17 s:venedik (Vonitsa, 28 km) (+2) |
| Azez (A'zâz) | 1832-07-29→1841-02-25 v:misir-kavalali (Kilis, 16 km) |
| Beyrut | 1861-06-09→1915-07-11 v:cebel-i-lubnan-mutasarrifligi (Deyrülkamer (Dayr al-Kamer), 22 km) |
| Bihaç (Bihać) | 1638-01-01→1670-01-01 s:avusturya (Cetin (Cetingrad), 37 km) |
| Bosna Novi'si (Bosanski Novi) | 1718-07-21→1739-09-28 s:avusturya (Bosna Dubiçası (Bosanska Dubica), 37 km) |
| Budin | 1595-09-02→1605-10-03 s:avusturya (Estergon, 40 km) |
| Cetinje | 1538-01-01→1539-08-10 isg:ispanya (Herseknovi (Herceg Novi), 32 km) |
| Dessûk | 1798-07-01→1801-10-09 isg:fransa-cumhuriyet (Reşîd (Rosetta), 37 km) |
| Drežnik (Drežnik Grad) | 1638-01-01→1670-01-01 s:avusturya (Cetin (Cetingrad), 22 km) |
| Dörtyol | 1832-07-29→1841-02-25 v:misir-kavalali (Payas, 10 km) |
| Ebûkîr | 1798-06-30→1801-08-31 isg:fransa-cumhuriyet (İskenderiye, 19 km) · 1798-07-01→1801-10-09 isg:fransa-cumhuriyet (Reşîd (Rosetta), 35 km) |
| Egina (Aegina) | 1686-08-30→1715-07-20 s:venedik (Damala (Troizen), 29 km) · 1686-08-30→1715-07-20 s:venedik (Methana, 19 km) (+1) |
| Erzin | 1832-07-29→1841-02-25 v:misir-kavalali (Payas, 22 km) |
| Han Yûnus | 1831-10-31→1841-02-25 v:misir-kavalali (Gazze, 24 km) |
| Karacahisar | 1919-01-23→1920-03-20 isg:ingiltere (Eskişehir, 7 km) |
| Keşan | 1366-08-01→1376-09-01 s:bizans (Bolayır, 37 km) · 1366-08-01→1376-09-01 s:bizans (Çimpe, 39 km) |
| Kilitbahir | 1912-11-01→1913-11-01 s:yunanistan (İmroz, 39 km) |
| Krupa (Bosanska Krupa) | 1788-10-03→1791-08-04 isg:avusturya (Bosna Novi'si (Bosanski Novi), 25 km) |
| Kulluk (Salamis) | 1687-09-26→1688-04-01 s:venedik (Atina, 22 km) |
| Kılkış (Avrathisar) | 1423-09-14→1430-03-29 s:venedik (Selanik, 40 km) |
| Lanzaka (Lagkadas) | 1423-09-14→1430-03-29 s:venedik (Selanik, 16 km) |
| Lüleburgaz | 1912-10-24→1913-07-21 s:bulgaristan-kralligi (Kırklareli, 38 km) |
| Malko Tırnova | 1912-10-24→1913-07-21 s:bulgaristan-kralligi (Kırklareli, 37 km) |
| Manisa | 1422-01-01→1425-06-01 s:aydin (İzmir, 34 km) |
| Maydos (Eceabat) | 1912-11-01→1913-11-01 s:yunanistan (İmroz, 38 km) |
| Menzile | 1798-07-01→1801-10-09 isg:fransa-cumhuriyet (Dimyat, 31 km) |
| Mersin | 1832-07-29→1841-02-25 v:misir-kavalali (Tarsus, 27 km) |
| Mîle | 1526-01-01→1527-01-01 s:hafsi (Konstantin, 33 km) |
| Plevne | 1810-10-01→1811-04-01 isg:rusya (Niğbolu, 39 km) |
| Rusçuk | 1427-01-01→1450-01-01 s:eflak (Yergöğü (Giurgiu), 5 km) |
| Saroz kuzey kıyısı | 1366-08-01→1376-09-01 s:bizans (Bolayır, 13 km) · 1366-08-01→1376-09-01 s:bizans (Gelibolu, 26 km) (+1) |
| Sayda | 1861-06-09→1915-07-11 v:cebel-i-lubnan-mutasarrifligi (Deyrülkamer (Dayr al-Kamer), 23 km) |
| Sincan | 1832-07-29→1841-02-25 v:misir-kavalali (Payas, 4 km) |
| Suruç | 1832-08-15→1841-02-25 v:misir-kavalali (Urfa, 39 km) |
| Söğüt | 1919-01-23→1920-03-20 isg:ingiltere (Eskişehir, 40 km) |
| Sûr (Tyre) — Lübnan | 1832-05-27→1840-11-03 v:misir-kavalali (Akkâ, 40 km) · 1832-06-15→1840-10-10 v:misir-kavalali (Sayda, 36 km) |
| Trebinye | 1538-01-01→1539-08-10 isg:ispanya (Herseknovi (Herceg Novi), 33 km) |
| Vaç (Vác) | 1595-09-02→1605-10-03 s:avusturya (Estergon, 30 km) |
| Yumurtalık | 1832-07-29→1841-02-25 v:misir-kavalali (Payas, 38 km) |
| Çamlıca (Hidra) | 1686-08-30→1715-07-20 s:venedik (Damala (Troizen), 22 km) · 1686-08-30→1715-07-20 s:venedik (Ermiyoni (Hermione), 21 km) (+2) |
| Çanakkale | 1366-08-01→1376-09-01 s:bizans (Gelibolu, 37 km) · 1366-08-01→1376-09-01 s:bizans (Maydos (Eceabat), 7 km) |
| Çorlu | 1912-11-01→1913-07-21 s:bulgaristan-kralligi (Tekirdağ, 31 km) |
| İmroz | 1656-07-13→1657-08-25 s:venedik (Bozcaada, 39 km) |
| İshakçı (Isaccea) | 1790-12-22→1792-01-09 isg:rusya (İsmail, 31 km) · 1809-12-02→1812-05-28 isg:rusya (İbrail, 38 km) |
| İskenderun | 1832-07-29→1841-02-25 v:misir-kavalali (Payas, 19 km) |
| Şarköy | 1366-08-01→1376-09-01 s:bizans (Bolayır, 32 km) |
