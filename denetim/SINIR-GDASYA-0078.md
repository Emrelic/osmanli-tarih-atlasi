# SINIR-GDASYA-0078 — Güneydoğu Asya 1923 sınırları (BİTİR-1923-0078 Faz 1)

Oturum SINIR-GDASYA-0078 (Opus) · koordinatör YILDIRIM BAYEZIT · 24 Eylül 2026
Çıktı `data/d_sinirlar_gdasya.js` → **`window.D_SINIRLAR_GDASYA`** (12 kayıt) · üretici `denetim/ARAC-SINIR-GDASYA-0078-URET.py`
(yeniden üretim: `GDASYA_ADM1=<NE 10m admin-1 geojson> py denetim/ARAC-SINIR-GDASYA-0078-URET.py` — admin-1 depoda YOK, Emre'nin 24 Eyl indirme onayıyla scratchpad'e indirildi).

## 1. Ölçüm — 1923-09-01'de kapsamda ne var

Alet: `girdi.yukle()` 3936 nokta + 9 `d_sinirlar*` ailesi, kutu 92–141,5°D × −11,5–28,5°K.
- **Hat kayıtları:** kutuya değen 50 kayıt, **31'i 1923-09-01'de yürürlükte** (28 `d_sinirlar_asya.js`, 3 `d_sinirlar_okyanusya.js`); ayrıca D5-ASYA'nın 5 hatsız D-YOK kutusu (Mekong ×2, Mae Sai, Pakchan, Api–Raja).
- **A katmanı:** kutuda 243 nokta (hepsi 1923'te var), 19 sahip — hollanda-dogu-hint 67 · fransiz-cinhindi 46 · ingiliz-hindistani 28 · siyam-chakri 24 · cin-cumhuriyeti 23 · abd 14 · ingiliz-malaya 11 · sahipsiz 11 · meiji-japonya 4 · san-devletleri 3 · cohor-sultanligi 3 · portekiz 2 · brunei 1 · sarawak 1 · yogyakarta 1 · surakarta 1 · tidore 1 · manipur 1 · ingiltere 1 (Hong Kong).
- **Komşu çiftler:** Delaunay kenarı (≤600 km, farklı sahip) ile. Kara komşusu olup HİÇ kaydı/beyanı olmayan çiftler: Sarawak–Brunei · Sarawak–K.Borneo · Malaya–Johor · Yogyakarta–Surakarta–Hollanda. Deniz komşuları (Malaka Boğazı, Riau, Tayland Körfezi, Sulu) sayılmadı.

## 2. Yazılanlar

### 2.1 D5-ASYA D-YOK → C ardılları (4 hat, 1039,5 km) — SINIR-D-ASYA-0077 ile M-5138/M-5139
| yeni id | eski D-YOK id | km | 1923 hattı | niçin C (kesinlik) |
|---|---|---|---|---|
| gdasya-si-fc-mekong-1893-1 | d1923-si-fc-DEGISTI-mekong-1 | 71,6 | 1893 md. I: Mekong, bütün adalar Laos'un ⇒ Siyam kıyısı (ÇIKARIM) | 1926 talvegi Siyam'a EN YAKIN kolun talvegidir ⇒ fark yarım kol genişliği; 1,5 km |
| gdasya-si-fc-mekong-1893-2 | d1923-si-fc-DEGISTI-mekong-2 | 836,3 | aynı (orta Mekong, IBS 20 ~541 mil) | aynı; 1,5 km |
| gdasya-si-ih-maesai-1894 | d1923-si-ih-DEGISTI-maesai | 47,1 | 1891-94 Mae Sai orta akışı, 17 Eki 1894 harita teatisi | 1929/1940 yatak kayması dere ölçeğinde (ÖLÇÜLMEDİ); 1,5 km |
| gdasya-si-ih-pakchan-1868 | d1923-si-ih-DEGISTI-pakchan | 84,5 | 1868: "Pakchan boyunca ağzına" (kanal tanımsız) | 1934 talveg + 40 akre parsel; haliç genişliği ÖLÇÜLMEDİ; 2,5 km |
Kaynak: IBS 20 ve IBS 63 metinleri bu oturumda pypdf ile OKUNDU (alıntılar kayıtlarda, ≤15 kelime). Parça kesimi D5-ASYA üreticisiyle birebir.

### 2.2 Yeni çiftler — D-YOK kutuları (8 kayıt; 1923'te hukukî dayanak VAR, `sinif_aday:"C"`)
| id | taraflar | f | dayanak | niçin hat yok |
|---|---|---|---|---|
| gdasya-co-ma-pahang | cohor × ingiliz-malaya | 1898-02-18 | 1862 · Ord 1 Eyl 1868 · 1898 Johore Boundaries Award (ICJ MM 86/87) | bugünkü eyalet hattının 1898'e eşitliği kaynaksız |
| gdasya-co-ma-negerisembilan | 〃 | 1898-02-18 | 1898 Award (Gemas ırmağı) | 〃 |
| gdasya-co-ma-malaka | 〃 | 1898-02-18 | 1855 (gün çelişkili) · 1898 (Kesang–Chohong orta hattı) | 〃 |
| gdasya-sw-en-kuzeyborneo | sarawak × ingiltere | 1910-07-28 | 1910 Sarawak–K.Borneo Anl. (metin görülmedi) · 1904 Lawas | 1962 SI kıyı kesimini DEĞİŞTİRDİ; NE kıyı ucu Bengkulit ağzından ~4 km sapıyor |
| gdasya-br-sw-bati | brunei × sarawak | 1890-03-17 | Baram 1882 (gün yok) · Limbang 17 Mar 1890 | kesimler 1931/33/39'da tanımlandı (2009 Malezya açıklaması) |
| gdasya-br-sw-temburong | 〃 | 1920-02-04 | Pandaruan Anl. 4 Şub 1920 · Trusan 12 Ara 1884 | Pandaruan kesimi bugünle aynı (HT dn. 78) ama uçları ölçülmedi |
| gdasya-yo-su | yogyakarta × surakarta | 1830-09-27 | Klaten Ant. 27 Eyl 1830 (ENI; "Ekim 1830 başı" kesin düzenleme, günü yok) | Opak→yol geçişinin günü yok; anklavlar (Kota Gede, Imogiri, Ngawen) 1958'e dek |
| gdasya-yo-hd | yogyakarta × hollanda-dogu-hint | 1830-11-03 | Djokja sözleşmesi 3 Kas 1830 | batı hattının resmî tarifi yok |
Kutular NE 10m admin-1/admin-0 bugünkü hattından; Yogya ikiye Merapi doruğunda (Smithsonian GVP −7,54/110,446) ayrıldı.

### 2.3 Kaydı gerekmeyen / yazılmayan çiftler (Faz 1 şartı ① beyanı)
- **Fransız Çinhindi içi** (Tonkin–Annam–Laos–Kamboçya): tek künye `fransiz-cinhindi` ⇒ İÇ, çizilmez (D5-ASYA başlığıyla aynı).
- **Surakarta × Hollanda (Madiun/Semarang/Kedu):** hat hat tarif BULUNAMADI ⇒ A/B'de kalır. Bugünkü karşılığı eyalet hattı değil (kabupaten), kutu çıkarılamadı.
- **Tidore × Hollanda:** A katmanında yalnız ada noktası; Halmahera'daki kara payı için belge aranmadı ⇒ A/B.
- **Johor × Singapur:** kara sınırı yok (Johor Boğazı; 1927 anlaşması 1923'ten sonra).
- **Api–Raja (D5-ASYA D-YOK):** 1923 hattı 1891 su ayrımı, bugünkü 1928 hattı; fark ölçülemedi ⇒ yükseltilmedi.

## 3. Ölçü (şartname §5.4) — 1923-09-01, hattın 5 km iki yanı
Alet `denetim/SINIR-D-ASYA-0077-olc.js` (tarayıcı, yerel önizleme, dosya sayfaya elle eklendi — `index.html` DEĞİŞMEDİ).
- 4 C hattı, 206 örnek (**alet ateşledi**: doğru 113 / yanlış 83 / boş 10) → **%57,7 doğru renk**. ÖNCE (hat yokken) = SONRA: C yaslanmaz (kural) — kazanç KAPSAM.
- Hat başına: Mekong-1 %64,3 · Mekong-2 %58,3 · Mae Sai %50 · Pakchan %50.
- Yorum (A katmanı işi, benim değil): Mae Sai'nin Burma yakası A'da `san-devletleri`; Pakchan/Mekong'daki yanlışlar nokta seyrekliği.
- D-YOK kayıtları çizilmez ⇒ ölçüye girmez.
- `py arac/denetle.py` → **SONUÇ: temiz** (dosya bağlanmadığı için evrenine girmedi).

## 4. Bulunamadı
1898 Award Gazette/yürürlük günü · 1910 Sarawak–K.Borneo metni · Baram devrinin günü · Pandaruan kesiminin uçları · Yogya–Solo "Ekim 1830" belgesinin adı/günü · Vorstenlanden sınır taşları · Surakarta dış hatlarının tarifi · Johor hatlarının 1923 öncesi işaretlemesi.

## 5. Koordinatöre
1. **Bağla:** `index.html` + `js/d_katman.js` `_D_AILELER`'e `D_SINIRLAR_GDASYA` (yaslamaya gerek yok — E yok).
2. **Kural hükmü (boş göz değil, eşik):** 8 D-YOK kutusunun hepsinde 1923'te C düzeyinde hukukî dayanak var; hattın bugünkü eyalet çizgisiyle aynılığı yalnız ölçülmedi. "C + `degisti:null` + bugünkü hat vekil" izin verilirse ~850 km C çizilir. D5-ASYA geleneği (null ⇒ D-YOK) korunarak yazıldı; karar sende.
3. **A katmanı (başkasının):** K.Borneo gövdesi yok · `san-devletleri` 1923'te Burma'yı böldüğü için Mae Sai / Mekong-Burma / Nam Hka hatlarında taraf ≠ boyanan · Brunei 1, Sarawak 1 nokta · `kamboc-kralligi` künyesi 1923-10-29'a dek açık ama 1923'te noktası yok (hayalet mi? sınıflandırılmadı).
