# MOTOR 2 — İLERLEME DEFTERİ (2 Ağustos 2026, Fable 5)

> Görev tanımı: `oturumlar/MOTOR-2-GOREV.md` (4c366a9) · Ana brifing: `MOTOR-KAPILAR.md` (19417f7)
> Kapsam: İş A (ortaasya2 girdiye) · İş B (denetle.py:962 kaynaktan okusun) · İş C (BOLGE maliyet ÖLÇÜMÜ)
> Kapı B (15 Avrupa rengi) BU OTURUMDA DEĞİL — VERİ KİMLİK 2 çakışması.

---

⏳ başladım: İş A — ortaasya2 çakışma ölçümü + girdiye alma — 2026-08-02 12:10

## ✅ İş A — ortaasya2 girdiye alındı (12:25)

Ölçümler (hepsi bu oturumda, betik scratchpad'de; sayılar KENDİ ölçümüm):
- ortaasya2: **7 nokta · 9 kimlik · rengi olmayan 0 · 7/7 BOLGE kutusu içinde**
  (lon 51,92..61,50) — koordinatörün sayılarıyla birebir aynı.
- **3 km çakışma: 0 çift** (canlı 991 noktaya karşı; beklenen negatif sonuç,
  çıkmadı). En yakın çift 17,36 km: Aşkabad ↔ Nesâ (yerlesimler.js).
  Partinin kendi içinde de 3 km çifti yok.
- Çürük yorumlar KENDİ ölçümümle düzeltildi: asya rengi olmayan kimlik
  98→**135** (toplam kimlik 147), avrupa 228→**237 nokta**. Koordinatör
  ölçümüyle uyumlu.

Kabul koşusu (`py arac/denetle.py`, öncesi/sonrası tam çıktı karşılaştırıldı):
- Değişmez 1: **50 sahipsiz → 50 sahipsiz** (991→998 yerleşim). YENİ SAHİPSİZLİK YOK. ✓
- Değişmez 2: 493 kırılma, 0 açık — değişmedi. ✓
- Konum: 0 maske dışı — değişmedi. ✓
- ⚠️ Değişmez 2s (bilinen borç, taban zaten ✗ 119/114): 610→614 kırılma,
  açık 119→**121 (+2)**. Yeni iki açık satır yalnız ortaasya2 noktaları:
  `1500-01-01` (Aral kuzeyi · Emba · Üstyurt kuzeyi — Nogay/Kazak sahneye
  çıkışı, TDV yıl vermiyor) ve `1640-01-01` (Guryev kuruluşu). 1869 ve 1881
  satırları önceden vardı (Krasnovodsk, Dihistan), yalnız nokta eklendi.
  → Kırılma borcu VERİ KRONOLOJİ sınıfı iş; koordinatöre bildirildi.
- Değişmez 2t: 52 — değişmedi (taban zaten ✗ 52/49).
- Çıkış kodu her iki koşuda da 1 (bilinen borçlar yüzünden) — SINIF DEĞİŞMEDİ.

---

⏳ başladım: İş B — denetle.py:962 _BOLGE_KUTU kaynaktan okusun — 2026-08-02 12:30

## ✅ İş B — denetle.py _BOLGE_KUTU artık kaynaktan okunuyor (12:40)

Elle kopya `(-12, 1.5, 62, 62)` silindi; `_BOLGE_KUTU` artık
`uret_petek.py`'deki `BOLGE = box(...)` satırından regex ile okunuyor —
desen `denetle_kapsama.py:47-58` emsalinden (a6215ce) aynen alındı.
Ayrıştırma başarısızsa SystemExit (sessizce eski değere düşme YOK).

Kabul ölçütü ÜÇ UÇLU, üçü de koşuldu:
- ① önce: `py arac/denetle.py` → çıktı X (İş A sonrası koşu)
- ② sonra: aynı koşu → **çıktı BİREBİR AYNI** (satır satır diff: 0 fark;
  çıkış kodu da aynı, 1 — bilinen 2s/2t borçları)
- ③ `uret_petek.py` BOLGE GEÇİCİ olarak 62→63 yapıldı →
  `denetle._BOLGE_KUTU` **(-12.0, 1.5, 63.0, 62.0)** okudu = YENİ değeri
  gördü. Sonra geri alındı; doğrulama: tekrar (-12.0, 1.5, 62.0, 62.0) ve
  `git diff arac/uret_petek.py` boş — kalıcı iz YOK.

---

⏳ başladım: İş C — BOLGE 142° genişletme MALİYET ÖLÇÜMÜ (kutu açılmayacak) — 2026-08-02 12:45

## ✅ İş C — BOLGE genişletme MALİYET ÖLÇÜMÜ (12:55) — KUTU AÇILMADI

Yöntem: `uret_petek.py:91-152` maske kurulumu ayrı betikte BİREBİR taklit
edildi (KARA_TOL 0.002, göl filtresi, goller.js tarihî göl düzeltmeleri
dahil). `uret_petek.py` ÇALIŞTIRILMADI; hiçbir depo dosyasına yazılmadı.

### İstenen dört sayı

**① Bugünkü maske** — box(-12, 1.5, 62, 62), 74° genişlik:
- alan **3.363 derece²** (~35,5 milyon km²) · poligon **1.102** ·
  köşe 52.339 · çıkarılan göl 90

**② Kutu 142°'ye açılınca** — box(-12, 1.5, 142, 62), 154° genişlik:
- alan **6.417 derece²** (~64,5 milyon km², ×1,91) · poligon **2.522**
  (×2,29) · köşe 98.933 (×1,89) · çıkarılan göl 204
- kv ızgarası (0,05°): 1,79 M → 3,73 M hücre (×2,08)

**③ Kutuya giren yeni nokta**: yerlesimler_asya.js 344 noktadan **320**.
🔴 **24 nokta 142° kutusuna SIĞMIYOR** — boylamdan değil GÜNEY sınırından:
hepsi 1,5°K'nın altında (Endonezya/Malaya: Singapur, Cava, Bali, Makassar,
Ternate, Timor… lat −10,18'e iniyor). Yani "lon 142" tek başına Asya
partisini TAM almıyor; karar verirken bilinmeli.
- **③b ek ölçüm — TAM kutu** box(-12, −11, 142, 62): 344/344 girer;
  alan 6.915 derece² (×2,06) · poligon 3.047 (×2,76) · köşe 117.955
  (×2,25) · kv ızgara 4,50 M hücre (×2,51)

**④ Tahminî koşu süresi** — dayanak r578 = 43 dk (10:24→11:07, bugünkü
maske + 991 nokta). TÜRETİM: koşu maliyetinin sürücüleri ölçülen dört
çarpanla büyür — kara alanı ×1,91 (ızgara Dijkstra + rasterleştirme),
ızgara ×2,08, maske köşesi ×1,89 (Voronoi kırpması), poligon ×2,29 (ada
kuralı), nokta ×1,32 (998→1318, Voronoi). Doğrusal ölçekleme varsayımıyla
çarpanlar ×1,9–2,3 kümesinde ⇒ **43 × (1,9..2,3) ≈ 82–99 dk, merkez ~90 dk
(≈ 2,1 kat)**.
⚠️ DOĞRUSAL OLMAYABİLİR — takımada ölçüldü: eklenen 62°..142° şeridinde
1.421 poligonun **1.261'i 0,01 derece²'den küçük ada**. Ada kuralı kara
parçası başına iş yapıyor; o aşama parça×nokta ile ölçeklenirse
(×2,29 × ×1,32 ≈ ×3,0) tavan **~130 dk**. TAM kutuda (③b) çarpanlar
×2,1–2,8 ⇒ 90–120 dk merkez ~105 dk, takımada tavanı ~160 dk.
⚠️ §82 uyarısı ölçümle doğrulandı: 1.261 küçük adanın çoğunda nokta
olmayacak — "nokta = çevresindeki toprak" varsayımı her adada kırılır;
süre kadar ÇIKTI kalitesi de takımadada ayrı karar ister.

KARAR KOORDİNATÖRÜN — kutu açılmadı, uret_petek.py'ye dokunulmadı
(İş B'nin ③ geçici denemesi anında geri alınmıştı, `git diff` boş).

---

📌 ÇÜRÜK UYARI BİLDİRİMİ (koordinatör istedi, YAZILMADI — Kapı B kapsamı):
`arac/renkler.py:352` "ortaasya2 hâlâ d:\"kazak\" yazıyor" uyarısı ÇÜRÜK —
dosya bugün `kazak-hanligi` yazıyor (üç kayıt) ve palette `#ad1457` ile
tanımlı; kendi ölçümüm de 9 kimlik / 0 eksik dedi. renkler.py'ye dokunmadım.

---

⏳ başladım: İş B-2 — denetle.py _KARA_TOL + _DOGAL_GOL kaynaktan okusun — 2026-08-02 13:05

## ✅ İş B-2 — _KARA_TOL ve _DOGAL_GOL de kaynaktan okunuyor (13:15)

denetle.py'deki maske sabiti bloğu tek parse'a birleştirildi: BOLGE +
KARA_TOL + DOGAL_GOL üçü de `uret_petek.py`'den regex ile okunuyor
(DOGAL_GOL `ast.literal_eval` ile küme olarak; küme değilse hata).
Herhangi biri bulunamazsa SystemExit — sessizce eski değere düşme YOK.

Kabul ölçütü ÜÇ UÇLU, üçü de koşuldu:
- ① önce: çıktı X (İş B sonrası koşu)
- ② sonra: aynı koşu → **satır satır diff 0 fark** (çıkış kodu aynı: 1,
  bilinen 2s/2t borçları)
- ③ uret_petek.py'de GEÇİCİ: KARA_TOL 0.002→0.003 VE DOGAL_GOL'e beşinci
  göl ("GECICI TEST GOLU") eklendi → denetle **0.003** ve **5 elemanlı
  kümeyi** okudu = YENİ değerleri GÖRDÜ. Geri alındı; doğrulama: 0.002 +
  4 göl, `git diff arac/uret_petek.py` boş — kalıcı iz YOK.

