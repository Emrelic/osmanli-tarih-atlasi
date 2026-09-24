# SINIR-ICASYA-0078 — İç Asya sınırları, 1923 Faz 1 · 24 Eylül 2026

Dosyam: `data/d_sinirlar_icasya.js` → `window.D_SINIRLAR_ICASYA` (5 kayıt).
Üretici: `denetim/ARAC-SINIR-ICASYA-0078.py` (`--yaz`; kuru koşu varsayılan). Şartname `oturumlar/BITIR-1923-0078.md`.

## 1. 1923-09-01'de kapsamda ne vardı (ÖNCE)
Ölçü: `girdi.oku_devletler()` (678 künye, 146'sı o gün canlı) + bütün `d_sinirlar*.js` (785 kayıt).

| çift | ÖNCE | SONRA |
|---|---|---|
| sscb–cn Altay | C 39 km (ASYA) | değişmedi |
| sscb–cn Kazak · Kırgız · Pamir | D-YOK (ASYA) | değişmedi — 1994/1996/1999 değişimlerinin YERİ okunmadı |
| sscb–mn | D-YOK (ASYA) | değişmedi — 1958 SSCB–Moğol antlaşmasının etkisi okunmadı |
| cn–mn | D-YOK (ASYA) | değişmedi — IBS 173: 1962'ye kadar tahdit yok |
| ih–tb McMahon | D-YOK (ASYA) | değişmedi — §3 soru |
| ih–tb Batı Himalaya · np–tb · ck–cn ×2 · af–cn | D-YOK (ASYA) | değişmedi |
| **ih–tb Sikkim** | D-YOK (ASYA) | **E, 175,5 km** (yeni kayıt) |
| **tb–cn** | **KAYIT YOK** | D-YOK beyanı — tablonun BOŞ GÖZÜ |
| **sscb–tuva** | **KAYIT YOK** | D-YOK beyanı — belge bulunamadı |
| **tuva–mn** | **KAYIT YOK** | D-YOK beyanı — belge bulunamadı |
| **ck–tb (Ladakh–Tibet)** | **KAYIT YOK** | D-YOK beyanı — belge bulunamadı |

⇒ Faz 1 şart ① için kapsamımdaki her çiftin artık ya kaydı ya yazılı beyanı var.

## 2. Tek E: Sikkim–Tibet (`d1923-ih-tb-sikkim`)
- **Milimetrik:** 1890 Kalküta md. I, Teesta/Mochu su ayrımı sırtı. Nehru'nun 22 Mart 1959 mektubuna göre 1895'te "jointly demarcated on the ground". Mektup ÇHC 2017 beyanının ek III-A'sında alıntılanıyor.
- **Hukukî, iki taraf:** Tibet 1904 Lhasa md. I ile tanıdı. İngiliz onayı 11 Kasım 1904; Pekin 1906 md. IV bunu önsözünde veriyor. `f` bu gündür. Çin 1906 md. IV ile teyit etti.
- **Bugüne:** iki taraf (Hindistan, ÇHC) hattı devraldığını yazılı beyan ediyor, bu yüzden `degisti:false`. İstisna güney üçlü noktası (Gipmochi / Batang La, Doklam), birkaç km.
- **Taraf:** Sikkim'in künyesi YOK, `ingiliz-hindistani` vekildir (ASYA'nın kararıyla aynı).
- **Sol taraf:** 52 segmentin oylamasında 52/0 IND. Tek orta segment yöntemi burada TERS çıktı: 20 m'lik bir kıvrım segmenti. Oylama bu yüzden eklendi.
- **ARAC-MILIMETRIK** (kopyasına ailem eklenerek, `--hepsi`): ① 0 · ② benim kaydımda 0 · hayalet 0.

### Renk ölçüsü (1923-09-01, 5 km iki yan, 10 km adım)
- **Pozitif kontrol:** `d1923-ir-af-kuzey` ham %50, n=36 ⇒ alet ateşliyor.
- **Sikkim ÖNCE (ham):** 36 örneğin **36'sı gövdesiz** (0 doğru / 0 yanlış).
- **Gövde noktaları:** Sikkim (88,45/27,45), Çumbi (88,9/27,6) ve Darjeeling (88,26/27,04) hiçbir gövdede değil. Tibet gövdesi 28,4°K'de, İngiliz gövdesi Siliguri'de (26,7°K) başlıyor.
- **Sebep:** 86,5–92,5°D × 26,3–30,5°K kutusunda 1923'te yalnız 3 yerleşim var (Lhasa, Şigatse, Gyantse).
- **SONRA ÖLÇÜLEMEDİ:** tarayıcı bölmesi gizli, MapLibre stil yüklemiyor (`harita.getSource("devlet")` 35 sn boyunca yok). Yaslama bu yüzden koşmadı.
- Gövde hatta inmediği için yaslamanın bu hatta ya atlaması ya da boşluğu kısmen doldurması beklenir; bağlandıktan sonra ölçülmeli.

## 3. Koordinatöre sorular / hükümler
1. **tb–cn BOŞ GÖZ.**
   - ① Simla kırmızı hattı (md. 9): Tibet ve İngiltere imzaladı, Çin imzalamadı. Harita çizgisi, tahdit yok.
   - ② 1918 sonu ateşkes "provisional boundary" (Teichman 1922 s. 58): Sichuan ve Tibet sınır makamları arasında. Çizgi değil ilçe listesi: Batang, Litang, Nyarong, Kanze Çin'de; Çamdo, Draya, Markam, De-ge Tibet'te.
   - İkisi de kaba ve merkezce tanınmamış. Uydurmadım, D-YOK beyanı yazdım. Hüküm sizde.
2. **McMahon (ih–tb): D DEĞİL, C adayı. Yazmadım.**
   - Tanınma ölçüldü: 1914 İngiliz–Tibet beyannamesi iki tarafı bağlıyor, Çin çiftin tarafı değil.
   - Ama hat harita çizgisi, tahdit edilmedi, bu yüzden milimetrik değil.
   - 1923'te İngilizler uygulamıyordu; Tavang Tibet idaresindeydi. Kaynak: akademik değil (arama sonuçları), dayanak YAPMADIM.
   - Önerim: ASYA'daki D-YOK beyanı kalsın. C istenirse akademik kaynak (Lamb 1966 / Goldstein 1989) gerekir.
3. **ASYA'daki `d1923-ih-tb-BILINMIYOR-sikkim` (D-YOK, hatsız)** benim E kaydımla aynı hattın yer tutucusu. Geometrik çakışma yok (hatsız), ama emekliye ayırmak ASYA sahibinin ya da sizin işiniz.

## 4. A katmanı borçları (benim dosyam DEĞİL)
- **Tannu Tuva 1923-09-01'de 0 yerleşim noktasına sahip.** 3921 noktanın hiçbiri `tannu-tuva`da değil. Tuva haritada yok.
- Sikkim, Darjeeling ve Çumbi (Yatung) noktasız, Tibet'te toplam 4 nokta var. Sikkim E hattının yaslanması buna bağlı.
- Kham ilçeleri (Batang, Litang, Kanze, De-ge, Draya, Markam) — tb–cn fiilî ayrımı ancak bunlarla görünür.

## 5. Kaynaklar (okunan)
- **IBS No. 64 (1978):** s. 7, Tuva 1921 bağımsızlık. s. 13, Sayan tarifinin belirsizliği.
- **IBS No. 173 (1984):** s. 12–13, 1915 md. XI komisyonu kurulmadı. Aynı yerde 1921 Moskova anlaşmasının künyesi var.
- **Antlaşma metinleri** (van Walt van Praag, *The Status of Tibet*, 1987 ekleri; tibetjustice.org): 1890 · 1904 · 1906 · 1914 Simla · 1914 İngiliz–Tibet beyannamesi.
- **ÇHC Dışişleri, Sikkim kesimi beyanı** (2 Ağu 2017, gov.cn). Taraf beyanıdır; Nehru mektuplarını alıntılıyor.
- **E. Teichman, *Travels of a Consular Officer in Eastern Tibet*** (Cambridge UP 1922), s. 58 (archive.org tam metin).

## 6. Denetim
`py arac/denetle.py` → **SONUÇ: temiz**. Dosya bağlanmadığı için bu, dosyamın etkisini ölçmüyor.
