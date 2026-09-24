# SINIR-D-OKYANUSYA-0077 — Okyanusya + ada Güneydoğu Asya 1923 sınırları

Şartname: `oturumlar/SINIR-DUNYA-0077.md` · dosyam: `data/d_sinirlar_okyanusya.js`

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (sınav anı: 24 Eylül 2026, oturum saati ~12:55)

Ölçmeden önce bilinenler (yalnız kayıt listesi okundu, renk ölçülmedi):
- Dosyamda 6 kayıt, hepsi Yeni Gine 141° meridyeni. 1923-09-01'de 2'si aktif
  (`guney-avustralya` E, `kuzey` E).
- Borneo (1891/1915 İngiliz–Hollanda) ve Timor (1904/1914/1916 Hollanda–Portekiz)
  hatları **benim dosyamda değil, `data/d_sinirlar_asya.js`de** (ASYA'nın).
- Bölge gövde yoklaması (`devletler_harita.js`, 1923-09-01, kutu 94–180°D/-48–22°K):
  `ingiltere` gövdesi yalnız 155,5–180°D'de (Solomon vb.) — **Borneo'da `ingiltere`
  gövdesi yok**; `sarawak-brooke` yalnız 109,8–111,9°D.

Öngörüler:
1. **Kayıt sayısı:** 6 → en çok **8**. Okyanusya'da 1923'te başka KARA sınırı yok
   (Avustralya, Pasifik adaları, Filipinler kara sınırsız); Borneo/Timor ASYA'da.
   Aday: Brunei–Sarawak, Sarawak–Kuzey Borneo — kaynak koordinat vermezse `C`,
   bulunamazsa hiç yazılmaz.
2. **Yeni Gine 141° hatları (1923-09-01, ±5 km):** ÖNCE ≥%85 doğru (meridyen düz,
   petek iki yanda yoğun değil ama kıyı noktaları var) · SONRA ≥%95.
3. **Fly Nehri kesimi:** dosyadaki düz çizgi yerine NE admin-0 Endonezya–PNG hattı
   (IBS 160: hat 1895'ten beri değişmedi) konursa kesinlik 50 km → ~1–2 km.
4. **Borneo hatları (ASYA'nın):** yaslama `ingiltere` hatlarında "gövde kendi şeridinde
   < 50 km²" ile ATLANIR; doğru renk oranı ÖNCE = SONRA, düşük (<%60). Çare hat değil
   NOKTA (Kuzey Borneo yerleşimleri `ingiltere`/ayrı künye) — benim kalemim değil.
5. **Timor (ASYA'nın, E):** SONRA ≥%90.

## 1. Sahiplik hükmü (M-5069 → M-5070)
ASYA cevapladı: Borneo / Timor / Siyam–Malaya hatları `d_sinirlar_asya.js`de kalır,
kopyalanmaz (mükerrer hat çift çizilir). Bende yalnız Yeni Gine 141°.

## 2. Ölçüm aleti ve B9 sınavı
`denetim/SINIR-D-OKYANUSYA-0077-olc.py` — 1923-09-01, hattın 5 km iki yanı, ~5 km adım.
ÖNCE = `devletler_harita.js` gövdeleri; SONRA = `d_katman.js` yaslamasının benzetimi
(sınıf E/F, iki gövde var, ≥10 km, yön doğrulaması). Gövdesiz nokta orana girmez,
"sahipsiz kara" (NE karası içinde) ve "deniz" olarak ayrı sayılır.

`--sina` (sınav hattı Timor orta, E, iki gövde de var):
- ① Port Moresby=avustralya ✓ · Jayapura=hollanda-dogu-hint ✓ · Dili=portekiz ✓
- ② gerçek beyan: ÖNCE %50 → SONRA %100 (YASLANIR) · **TERS beyan: ÖNCE %50 → SONRA %50,
  YÖN DOĞRULANAMADI** (alet ters beyanı reddediyor)
- ③ sentetik taşma (sol gövdenin 20 km'si sağa verildi): ÖNCE **%0** → SONRA **%100**
⇒ alet iki yönde ateşliyor; "düzelmedi" sonucu bir sonuçtur.

## 3. Sonuç — 1923-09-01

| hat (dosyam) | sınıf | km | ÖNCE | SONRA | sahipsiz kara | yaslama |
|---|---|---|---|---|---|---|
| `guney-avustralya` | E | 311 → **347** | — (0 sahipli örnek) | — | 123 → 137 | gövde yok (şeridin iki yanı da boş) |
| `kuzey` | E | 412 | %50 (26/52) | %50 | 112 | YÖN DOĞRULANAMADI: sağ (Avustralya) gövdesi şeritte 0 km² |

- 302 örneğin **249'u sahipsiz kara**. Yeni Gine iç kesimindeki bütün noktalar
  (`Merkezî Yaylalar`, `Fly Nehri Bataklıkları`, `Sepik Havzası`…) 1923'te **sahipsiz**
  (s: yok). Sahipli 52 örneğin hepsi kuzey kıyıda ve **hepsi Hollanda** — hattın doğusu
  (Vanimo kıyısı) Jayapura peteğine emiliyor; orada Avustralya noktası YOK.
- Güney kesimde iki yanda da sahipli nokta yok: **Merauke (Hollanda, 1902) ve Daru
  (Papua) atlasta yok.**
- ⇒ **Kusur hatta değil NOKTADA** (CLAUDE.md §2). Hattı ne kadar iyi çizersem çizeyim
  renk değişmez: yaslama yalnız iki tarafın gövdeleri arasında toprak taşır, boşluğu
  boyamaz.

Bölge geneli (ASYA'nın hatları dahil, 28 hat): ÖNCE %47,4 → SONRA %53,1 (1101/2075),
sahipsiz kara 1009. Timor orta/Oecussi %50 → %100. Borneo'da `ingiltere` hatları
ölçülemedi (Kuzey Borneo'da `ingiltere` gövdesi yok; örneklerin hepsi sahipsiz/Brunei).

## 4. Yapılan veri değişikliği
`d_sinirlar_okyanusya.js` — üç güney kaydı (aynı hat): Fly Nehri talvegi artık düz
çizgi değil; NE 10m admin-0 IDN–PNG kıvrımı (60 nokta) meridyen kesimlerinin (IBS
160/1973) arasına işlendi. 313 → 346,6 km; kesinlik 50 → 5 km (1895 öncesi izdüşüm
kaydı 50'de kaldı). Betik: `denetim/SINIR-D-OKYANUSYA-0077-fly.py`.
`ARAC-MILIMETRIK-0923.js`: ① 0 · ② 0. `node --check` temiz.

## 5. Öngörülerin sınavı
1. 6 → 8 kayıt — **ÇÜRÜDÜ**: 6'da kaldı. Brunei–Sarawak: 1920–1939 arası beş anlaşma
   var (Sovereign Limits) ama 1923'ten önceki hangileri, hangi kesim — **bulunamadı**;
   1933 anlaşması 1923'ten sonra. Sarawak–Kuzey Borneo: NE'de çift yok, kaynak
   **bulunamadı**. Uydurulmadı.
2. Yeni Gine ÖNCE ≥%85 / SONRA ≥%95 — **ÇÜRÜDÜ**: %50 → %50. Sebebi öngörüde yoktu:
   iç kesim bilinçli olarak sahipsiz.
3. Fly kesinlik 50 → ~5 km — **TUTTU**.
4. Borneo `ingiltere` hatları yaslanamaz — **TUTTU**.
5. Timor SONRA ≥%90 — **TUTTU** (%100).

## 6. Bulunamayanlar
- Brunei–Sarawak sınırının 1923'teki belge dayanağı (1920–23 anlaşmalarının tarihi/kesimi).
- Sarawak–Kuzey Borneo iç sınırı geometrisi (NE admin-0'da yok, admin-1 kaynağı yok).
- Merauke / Daru / Vanimo kuruluş günleri için kaynak aramadım (yerleşim benim kalemim değil).

## 6b. İKİNCİ TUR — kapsam düzeltmesi sonrası (koordinatör: Avustralya · Yeni Gine · Pasifik)

### Kapsam ölçümü — 1923'te bu coğrafyada KARA sınırı
| # | hat | belge | koordinat | kayıt |
|---|---|---|---|---|
| 1 | Hollanda ↔ Papua (Avustralya): Bensbach → 141°01'10" → Fly → 141° → 5°G | 1895 Sözl. Md. I–IV | VAR (IBS 160 / 1973 monümanları + Fly için NE) | `guney-*`, `orta-*` (E) |
| 2 | Hollanda ↔ Yeni Gine mandası (Avustralya): 141°, 5°G → kuzey kıyı | 1895 Md. IV + MC mandası 1920 | VAR | `kuzey` (E) |
| 3 | Papua ↔ Yeni Gine mandası (Londra 1885 hattı) | Londra Nisan 1885 (IBS 160) | uçlar var, **ara köşeler bulunamadı** | 1885–1914 `YOK`; 1914–23 yazılmadı (iki yan da `avustralya`, künye yok) |

⇒ **N = 3 kara sınırı · M = 3 belgeli · K = 2 koordinatlı.** Avustralya, Yeni Zelanda,
Filipinler, Samoa, Fiji, Tonga, Solomon, Gilbert-Ellice, Nauru, Yeni Hebridler,
Yeni Kaledonya: 1923'te iki egemenlik arasında bölünmüş ada **yok** ⇒ kara sınırı yok
(bu bir ölçüm sonucu, eksiklik değil). Borneo/Timor/Sebatik ASYA'da.

### Bulunan ve düzeltilen TARAF hatası
`kuzey-*` üç kaydı 141°'yi 6,3233°G'den başlatıyordu ⇒ 6,32–5°G kesimi 1884–1920 arası
"Hollanda ↔ Almanya" çiziliyordu. IBS 160 s.2 (Londra 1885 hattı 5°G×141°D'de biter)
ve 1895 Md. IV (141°, üçlü noktaya kadar Hollanda–İngiltere) ⇒ o kesimin doğusu
İngiliz/Papua. `orta-*` (3 kayıt, 146,3 km) ayrıldı; `kuzey-*` 5°G'den başlıyor
(266,1 km). 1923-09-01'de renk değişmez (iki taraf da `avustralya`); düzelen 1885–1920
tarafı ve dayanağı. Betik `denetim/SINIR-D-OKYANUSYA-0077-bol5.py`. Tarayıcıda
doğrulandı: 11 kayıt yükleniyor; 1900 `guney-britanya`+`orta-britanya` (E), 1910
`guney/orta-avustralya`, 1923 üç E hattın üçü de yaslama adayı.
Ölçüm (5°G bölmesi sonrası): `kuzey` %51 → %51 (n=53), iki güney kesimde sahipli örnek 0.

### Sömürge kimliği → gövde tablosu
`denetim/SINIR-D-OKYANUSYA-0077-govde.py` · tahtada M-5082. Özet: `ingiliz-kuzey-borneo`
künyesi YOK (1923'te Kuzey Borneo için hiçbir künye yok: `sabah-emirligi` 1914'te
bitiyor); Brunei'nin id'si `brunei-sultanligi`; Miri ve Limbang Brunei'ye boyanıyor;
Merauke 510 km, Daru 345 km uzaklıkta gövdesiz; Samoa/Nauru/Gilbert/Y.Hebridler gövdesiz.

## 7. İstenenler (koordinatöre)
1. **Nokta talebi** (`yerlesimler*.js` sahibine): Merauke (Hollanda), Daru (Papua →
   `avustralya` 1906-09-01'den), Vanimo (Alman → Avustralya işgali 1914 → manda).
   Kaynak ve günler o oturumca bulunmalı. Bunlar olmadan 141° hattının kıyı uçları
   boyanamaz.
2. **Hüküm sorusu:** Yeni Gine iç kesimi 1923'te `sahipsiz`. Hukukî görünümde E hattı
   "burası 141°'nin batısı Hollanda, doğusu Avustralya" der; dolgu ise "kimse yönetmiyor"
   der. Bu bilinçli bir fiilî/hukukî ayrım mı, yoksa iç noktalara hukukî sahip mi
   verilmeli? (Emre/koordinatör kararı — ben değiştirmedim.)
