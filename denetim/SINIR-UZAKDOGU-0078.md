# SINIR-UZAKDOGU-0078 — Uzakdoğu 1923 sınır hatları (24 Eylül 2026)

Şartname `oturumlar/BITIR-1923-0078.md` §3.1 · dosya `data/d_sinirlar_uzakdogu.js` → `window.D_SINIRLAR_UZAKDOGU`
· üretici `denetim/SINIR-UZAKDOGU-0078-uret.py` · gövde dökümü `denetim/SINIR-UZAKDOGU-0078-govde.js`.

## 1. İlk ölçüm — sevkteki "bugün TEK HAT YOK" DOĞRU DEĞİL
Bütün `d_sinirlar*.js` aileleri (780 kayıt, 1923-09-01'de aktif 360) node ile yüklendi. Kutu (boylam ≥115°D, enlem ≥35°K):
aktif **3 hat**, üçü de `data/d_sinirlar_asya.js`te (SINIR-D-ASYA-0077'nin işi):

| id | sınıf | km |
|---|---|---|
| `d1923-jp-sscb-sahalin` (Portsmouth 50°K) | **E** | 132,2 |
| `d1923-sscb-cn-dogu-argun-amur` | C | 2.290,8 |
| `d1923-sscb-cn-dogu-ussuri` | C | 361,4 |

Aletin ateşlediği: aktif hatların en doğu boylamı **144,0073** = Sahalin hattının doğu ucu (sevkteki "144°D" budur).
⇒ Portsmouth zaten **E** olarak var; yeniden yazılmadı.

## 2. 144°D doğusu — boşluk değil, KARA SINIRI YOK
1923'te Kuriller tümüyle Japon (1875 St. Petersburg), Kamçatka/Okhotsk/Çukotka tümüyle Sovyet. Kuriller–Kamçatka
(Şumşu–Lopatka boğazı) ve Bering hatları DENİZ sınırıdır. Faz 1 şartı ① "kara sınırı olan her devlet çifti" ⇒
bu kesimde çizilecek hat **0**; bu bir eksik değil, beyandır.

## 3. Yazılan (C, 2 kayıt, 885,9 km)
| id | taraflar | pencere | km | dayanak |
|---|---|---|---|---|
| `d1923-jp-cn-tumen` | meiji-japonya · cin-cumhuriyeti | 1911-10-10 → 1923-10-29 | 313,3 | 1909-09-04 Gando md. I · 1915-06-09 köprü · IBS 17 · Fravel 2005 |
| `d1923-jp-cn-yalu` | aynı | aynı | 572,6 | IBS 17 ("en az 1875'ten beri") · 1911-11-02 Mukden md. 2 · Fravel 2005 |

- Yöntem Amur/Ussuri emsalinin BİREBİRİ (koordinatör hükmü, iki şart): geometri bugünkü CHN–PRK çizgisinin KABA
  VEKİLİ (NE 10m), NE nehir etiketi ≤3 km, `degisti:null`, `kesinlik_km:null`.
- **Şart 1:** Fravel 2005 Tablo 1 — 1962 antlaşmasında değişen bildirilen yalnız Changbai/Paektu. Paektu kara kesimi
  (42,8 km) + iki yanında 30 km pay (kaynak deresi tartışması, IBS 17: ~20 mil, ~600 mil²) DIŞARIDA ⇒ A/B.
- Neden E/D değil: IBS 17 "nehirde ayrıntılı işaretleme hiç yapılmadı"; Japon döneminde talveg yalnız "genel olarak"
  kabul. Milimetrik belge YOK.
- `f` 1911-10-10 = `cin-cumhuriyeti` künye başı (asya kalıbıyla aynı); 1909–1911 öncülleri Faz 2'nin işi.
- asya'daki `d1923-jp-cn-BILINMIYOR-yalu-tumen` (D-YOK, hat null) kaydına DOKUNULMADI (başkasının dosyası);
  notunda "A/B (ya da C) geçerli" diyor ⇒ çelişmiyor. Koordinatör isterse o kayda "C kesimleri uzakdogu'da" notu düşülür.

## 4. Yazılmayan — bulunamadı / hükümle kapalı
- **Kore–SSCB aşağı Tumen (~17 km):** tanımlayan antlaşma YOK (IBS 59: Sovyetler 1920'lerde Japonya'ya "durum
  belirsiz" dedi) ⇒ "kimse tanımıyor + kaba" boş gözü ⇒ YOK'ta kalır.
- **Sungaça–Hanka–Tumen (Rus–Çin kara):** koordinatörün SINIR-D-ASYA-0077 Şart 1 hükmüyle YOK — dokunulmadı.
- **Kwantung kira hattı:** kiralık toprak, asya envanterinde bilerek dışarıda; hüküm koordinatörde.

## 5. Ölçüm (§5.4) — 1923-09-01, 10 km'de bir örnek, hattın iki yanında 5 km
Gövdeler `data/devletler_harita.js`ten (üretim 22 Eyl), `js/app.js` ile aynı çözümleme. C yaslanmaz ⇒ ÖNCE = SONRA.

| hat | doğru | yanlış | gövdesiz | doğru % |
|---|---|---|---|---|
| jp-cn-tumen | 24 | 30 (jp 17 · sscb 9 · cn 4) | 10 | %44,4 |
| jp-cn-yalu | 22 | 22 (hepsi jp — Çin yakası Japon boyalı) | 72 | %50,0 |
| *(asya)* sahalin E | 10 | 10 (hepsi sscb — 50°K güneyi Sovyet) | 8 | %50,0 |
| *(asya)* argun-amur C | 171 | 94 (sscb) | 195 | %64,5 |
| *(asya)* ussuri C | 18 | 19 (sscb) | 37 | %48,6 |

Pozitif kontrol: tumen'de `sol_taraf` ters verilince %44,4 → %38,9. Ayrışma zayıf, çünkü A katmanı iki yakada
da bozuk (§6). Örnek noktalar: Dandong(ÇN)→meiji-japonya · Longjing(ÇN)→meiji-japonya · Namyang(KR)→cin-cumhuriyeti ·
Manpo/Hyesan/Ji'an/Changbai/Hunchun→gövdesiz · Poronaysk (orta Sahalin)→gövdesiz.

## 6. A katmanı bulguları (benim dosyam değil — A-ASYA / koordinatör için)
1. **Kore–Mançurya şeridinde Çin yakasında 0 nokta.** Andong/Dandong, Ji'an, Changbai, Yanji/Longjing, Hunchun yok;
   Uiju (12 km) Dandong'u Japon boyuyor. Kore iç kuzeyi (Manpo, Hyesan) en yakın noktaya 120–170 km ⇒ gövdesiz.
2. **Sahalin:** yalnız 2 nokta (Korsakov, Aleksandrovsk) ⇒ petek sınırı ~48,8°K, 50°K değil; orta ada gövdesiz.
   **Kuzey Sahalin 1920-07 → 1925-05-15 Japon işgali** Aleksandrovsk'ta `isg:` YOK (asya notunda da geçiyor).
3. **Kuriller: 0 nokta.** Orta Kuriller en yakın noktaya 666 km; kuzey Kuriller en yakın Bolşeretsk (Sovyet, 245 km)
   ⇒ Japon adaları Sovyet'e emiliyor ya da boş.
4. **Kamçatka/Çukotka:** kutudaki 7 nokta 1923-09-01'de `s:` boş (Anadır, Çukotka merkezi, Koryak toprakları, Penjina
   havzası, Kamçatka İtelmen, Kolıma havzası, Doğu Sibirya kıyısı) — kasıtlı dolgu mu, delik mi ÖLÇÜLMEDİ.

`py arac/denetle.py` → **SONUÇ: temiz** (dosya bağlanmadığı için denetim onu henüz görmüyor).
