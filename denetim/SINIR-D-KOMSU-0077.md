# SINIR-D-KOMSU-0077 — çalışma defteri

Dosyam: `data/d_sinirlar_komsu.js` (tek). Koordinatör: YILDIRIM BAYEZIT.

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (sınav anı 2026-09-24 12:54)

YOK kayıtlarının içeriğine henüz BAKILMADAN yazıldı (yalnız sayıları biliniyor: 53 kayıt, 28 YOK).

- **Ö1 · Yunanistan–Arnavutluk (1923-09-01, hattın 5 km iki yanı):** ÖNCE ≈ %36 (koordinatörün
  ölçümü; benim betiğim ±5 puan içinde aynısını vermeli, vermezse ölçüler farklıdır — bildirilir).
  SONRA (hat E'ye çıkarsa) ≥ %90.
- **Ö2 · 28 YOK kaydının en çok 8'i** (%29) bir belgeye bağlanıp C ya da E'ye çıkarılabilir;
  kalan ≥ 20'si `YOK`ta kalır (1923'te hat bugünkünden farklı ya da koordinat bilinmiyor).
- **Ö3 · Pozitif kontrol:** zaten E ve yaslanan `d1923-gr-shs-1` (Yunanistan–SHS) hattında aynı
  betik ≥ %90 vermeli. Vermezse betik bozuktur ve öteki sayılar sonuç sayılmaz (B9).

Evren: 1923-09-01 günü tarayıcının `devlet` kaynağında (yaslama UYGULANMIŞ hâli) çizilen gövdeler.

## 1. Ölçü aleti — `denetim/SINIR-D-KOMSU-0077-olc.js`

Şartname `.py` diyor; `.js` oldu çünkü yaslama YALNIZ tarayıcıda (`js/d_katman.js`) yapılır, ekrandaki
boyayı okumanın tek yolu `devlet`/`osmanli` kaynaklarıdır. 2 km'de bir hat noktası, dik yönde ±5 km,
sol = ilerleme yönünün solu (`_dSeritTek` kuralı). `oran_karada` = doğru / (doğru + yanlış); deniz/göl
("boş") ayrı sayılır. `KOMSU_OLC(ids, aile, ham)` — `ham=true` yaslanmamış petek gövdeleri.

**B9 — aramanın çalıştığı kanıtı:** ilk sürüm `_data.features` okuyordu, MapLibre 4.7'de
`_data.geojson.features`. Pozitif kontrol `d1923-gr-shs-1`'de **132 noktanın 132'si "boş"** çıktı ⇒
betik bozuk bulundu, düzeltildi; ikinci koşuda aynı hat %100 (127/127 karada). Ö3 TUTTU.

## 2. Yunanistan–Arnavutluk (`d1923-gr-al`) — C → E

**Kaynak:** Büyükelçiler Konferansı kararı, Paris 9 Kas 1921 (Société des Nations, Recueil des traités
c.12; metin Digithèque MJP, Univ. Perpignan). Gerekçe cümlesi: güney sınırları *"fixées sur le terrain
par la Commission de délimitation"* — nihaî protokol Floransa, 17 Ara 1913. Karar md. II işaretleme
komisyonuna YALNIZ Kuzey/Kuzeydoğu hattını verir, md. III'teki dört düzeltme de kuzeydedir ⇒ güney hattı
1921'de yeniden açılmadı. IBS 113 (1971): 1925 Floransa tarifi "based on the 1913 London accord",
"the issues do not relate to the specific alignment" ⇒ bugünkü çizgi 1923 hukukî hattıdır.
F değil E: tanınma tablosu yok (karar LNTS'de kayıtlı — F adayı).

**Çelişki (bildirildi, çözülmedi):** IBS 113 1921 kararı için "confirmed, with certain modifications"
der; kararın kendi metninde güneye dair düzeltme YOK (düzeltmelerin dördü de kuzey). Metin esas alındı.

| ölçü (1923-09-01, ±5 km, karada) | gr-al |
|---|---|
| ham petek (yaslama yok) | %40,2 (90/224) — koordinatörün %36'sına yakın |
| ÖNCE (C, komşu hatlar yaslanmış) | %52,7 (118/224) |
| **SONRA (E, yaslandı)** | **%71,0 (159/224)** |

**Ö1 ÇÜRÜDÜ** (≥%90 bekleniyordu). Kalan 65 yanlışın **62'si `yugoslavya`**: Yugoslav gövdesi
1923-09-01'de 40,2°K'ye, Görice havzasına iniyor. Sebep A katmanında: 19,8–21,6°D × 39,6–41,3°K
kutusunda Görice (Korçë), Kesriye (Kastoria), Florina, Konitsa, Përmet, Leskovik noktası YOK; havza
Ohri'nin (yugoslavya) peteğine emiliyor (§2). Yaslama yalnız iki tarafın gövdesini değiştirir, üçüncü
devlete dokunmaz ⇒ bu hat E olsa da düzelmez. Çare `yerlesimler*.js` (Oturum 0).

## 3. YOK kayıtları (28) — merdiven taraması

Hepsinin `hat`ı boştu (bugünkü çizgi 1923'ü göstermez diye). Kaynağı okunup farkı SAYIYLA sınırlanabilenler
`denetim/SINIR-D-KOMSU-0077-yok.py` ile bugünkü çift çizgisinden (`veri-kaynak/d_bugunku_sinirlar.geojson`)
hatlandırıldı:

| kayıt(lar) | yeni sınıf | kaynak | kesinlik |
|---|---|---|---|
| Aras/Talış × 5 (d1923, g1, g2, g3-1893, g4 1828) | C | Türkmençay md. IV · IBS 25 | 10 km (Dyman ~6 mil, Mugan 1957, Aras kıyı→talveg) |
| Hazar–Serahs × 4 (d1923, g1, g2, g3-1893) | C | 1881 Ahal · 1893 Tahran · IBS 25 | 20 km (Atrek deltası 1954) |
| Şattülarap × 2 (d1923-iq-ir, g1-osm-ir) | **E** | 1913 İstanbul Prot. + 1914 komisyon · IBS 164 | 1,5 km (sol kıyı ↔ talveg < yarı nehir) |

**11 / 28** — **Ö2 ÇÜRÜDÜ** (en çok 8 demiştim). Ölçü (1923-09-01):
- Şattülarap: ham petek %71,6 → **SONRA %100** (95/95, yaslandı).
- Aras/Talış %69,5 · Hazar–Serahs %54,4 — C olduğu için boya oturmaz; bu sayı bir "önce" değeri değil,
  E'ye çıkarsa kazanılacak payın ölçüsüdür.

**YOK kalan 17:** Gevgeli × 2 (1923 kesiminin koordinatı yok) · Dobruca × 3 (1913 hattı köy listesiyle
tarifli ama liste okunmadı — `bulunamadı`) · g4 Hazar–Serahs 1881–93 (yalnız Babadurmaz'a kadar; kesim
noktası koordinatı okunmadı) · g4 Atrek 1869 · g5 Gülistan · g6 Safevî × 2 · d1923-ir-af-FIILI-orta
(1923'te hukukî hat yok) · ORTADOĞU'nun devir istediği 6 Levant/Irak kaydı (M-5066, hüküm bekliyor,
dokunulmadı).

## 4. Yan bulgular (benim kalemim değil)
- `d1923-ir-af-guney` (E): 288 noktanın 288'i "boş" — iki gövde de o bölgede yok; yaslanmıyor.
- `d1923-iq-ir`: 125 yanlışın 105'i `ingiltere` gövdesi (Irak kıyısında İngiliz boyası).
- `d1923-gr-bg-dogu` (D, fiilî): hukukî görünümde yaslanmaz, %55,7; 118 yanlış `yunanistan`.
- `d1923-bg-ro-tuna` ② adayı (f 1913 < en erken dayanak 1919) — önceden vardı, dokunulmadı.
- Yaslama süresi 1923-09-01: 38 s → 70 s (aynı sekmede iki koşu; öteki oturumların eşzamanlı
  değişiklikleri de içinde — yalnız bana ait pay ÖLÇÜLMEDİ).
