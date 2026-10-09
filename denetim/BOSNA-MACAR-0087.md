# BOSNA-MACAR-0087 — Bosna Brod'u / Yayça / Banaluka (H-0016) · Mohaç sonrası "Avusturya" (H-0024)

> Oturum **BOSNA-MACAR-0087** · 9 Ekim 2026 · makine UMIT · ağaç `C:\atlas-bosna` (detached
> `origin/main` = `6865cc87`) · görev UMIT İRTİBAT'tan · yöntem `oturumlar/EEK-PROTOKOL.md`.
> Rapor + UYGULANMAMIŞ diff. Commit/push yok. Görseller gizli depoda okundu, KOPYALANMADI.

## 0. Öngörü — ölçümden ÖNCE yazıldı (9 Ekim 2026)
Bu bölüm diff denetlenmeden önce yazıldı. Kimlik değişikliği aynı harita rengine (`macaristan`)
geçtiği için Avusturya rengi Macar/Hırvat noktalarından tamamen çekilir. Değişmez 2 (Osmanlı)
etkilenmez: `d:` değişmiyor, yalnız Brod ve Jasenovaç'ın fetih yılı 2 yıl geri gidiyor. 1536-01-01
günü için ±30 gün içinde madde olmayabilir ⇒ **Değişmez 2'de +1 açık riski**.
2s'de iki taraflı etki bekliyorum:
- Kapanışların bir kısmı "Avusturya/Habsburg" taraf adıyla kuruluydu ⇒ birkaç kırılma AÇIK'a düşebilir (+0..+3).
- macaristan → macaristan-habsburg geçişi yeni bir 2s kırılması üretebilir.

Değişmez 4c: Banaluka ve Yayça'ya dokunmadığım için değişmez.

**Öngörü ↔ ölçüm:**
- Değişmez 2: +1 açık riski gerçekleşmedi. Ama sebebi kötüydü — 1536 kırılmasını ilgisiz bir Muisca maddesi takvimden "kapatıyordu". Madde yazdım (aşağıda).
- 2s AÇIK: 184 sabit kaldı (öngörü +0..+3).
- 2sk: öngörmediğim bir hareket çıktı — maskeli TARAF +14. Sınıfı aşağıda, ADIYLA.

---

## Mükerrer kapısı
`denetim/BALKAN-MACAR-0081.md` (paket 0081) aynı bölgeyi ölçmüş, ama soruları farklıydı:
- 0081 H-0026/H-0029 Mohaç sonrası tâbilik GÜNLERİYLE uğraştı.
- 0081 "54 kayıt Mohaç günü `s:avusturya`ya geçiyor" diye saydı, çare olarak yalnız GÜN kaydırdı (Macar 21 → 1526-12-17). KİMLİĞİ sorgulamadı.
- 0081'in uygulayıcısı (`BALKAN-MACAR-0081-uygula.py`) bugünkü `main`e **İNMEMİŞ**: künye `macaristan` t hâlâ 1526-08-29, `macaristan-habsburg` f hâlâ 1526-08-29.
- ⚠️ Benim diff'im aynı dönem nesnelerine dokunuyor. 0081 uygulayıcısı sonradan koşarsa `count==1` eşleşmeleri düşer — sıra koordinatörde.

KRONO-SENKRON-1008, EPOK-SAHIP-1008 ve P04-BALKAN-0914 bu iki soruyu sormuyor.

---

## H-0016 — "Bosna Brodu, Yayça ve Banaluka Osmanlı'ya geçerken henüz ele geçirilmemiş mi idi?"

**Görsel açıldı** (metin gün/nokta vermiyordu): H-0016-1 Bosna Brod'u çevresinde tan (Avusturya)
cep · H-0016-2 Banaluka ve Yayça "+1528" etiketiyle kızıl (Osmanlı), kuzeyde Bosna Brod'u tan.

**Ne ölçtüm (EEK-PROTOKOL sırasıyla):**
1. **Nokta var mı:** var. Bosna Brod'u (45.14, 17.99) ve Sava şeridinde Jasenovaç, Bosna Dubiçası,
   Bosna Novi'si, Kostayniçe, Krupa — hepsi `yerlesimler_ek29.js`.
2. **Kimlik zinciri:**
   - Banaluka ve Yayça: `macaristan` 1463→**1528-01-01** OSM.
   - Sava şeridi: `macaristan` →1526-08-29, `avusturya` → Brod/Jasenovaç/Dubiça **1538-01-01**, Novi 1556, Krupa 1565, Kostayniçe 1556-07-16.
3. **Pencere:** Banaluka ve Yayça'nın `macaristan` dilimi künyenin ölümünü (1526-08-29) 16 ay AŞIYOR (4c, beklenen listede). Dokunmadım.
4. **Kaynak:**
   - TDV banaluka: "Mohaç Zaferi’nden sonra Yayça bölgesinin alınışının hemen peşinden 1527-1528 kışında ele geçirilmiştir."
   - TDV bosna-hersek: "Yayça ve Banaluka ise Mohaç Zaferi sonrasında (1527 veya 1528) ele geçirilebildi."
   - HE 'Bosanski Brod': "Osmanlije su ga zauzeli 1536."
   - HE 'Jasenovac': "Bosanski sandžak-beg Husrev-beg osvojio ga je 1536."
   - HE 'Kozarska Dubica': "… a 1538."
   - TDV gazi-husrev-bey: "Pojega (Požega) ve civarını zaptetmiş (1536)".
   - TDV `yayce` slug'ı **302**.
5. **İki uç:** Sava şeridi kuzeyde Slavonya/Hırvatistan'la bitişik — bir enklav değil, sınırın kendisi. Değişiklik komşunun sınırını oynatmıyor.

**Karar: ① GERÇEKTEN ATLANDI — görüntü DOĞRU.** 1528'de Banaluka ve Yayça düştüğünde Sava boyu (Brod, Jasenovaç, Dubiça) Habsburg tacına bağlı Hırvat-Slavon sınırında kaldı. 1536-1538'de Gazi Hüsrev Bey'in harekâtıyla alındı. Yine de iki kusur var:
- **Gün kusuru:** Brod ve Jasenovaç 1538 idi. Bu, Dubiça'dan **KOMŞU EMSALİ** olarak devralınmıştı; kayıtların kendi notu "kendi kaynağı yok" diyor. HE'nin kendi maddeleri 1536 veriyor ⇒ **1536-01-01** (YIL).
- **Sessiz kırılma:** yeni 1536-01-01 Osmanlı kırılmasının ±30 gününde yalnız bir Muisca (Kolombiya) maddesi vardı ve Değişmez 2'yi takvimden "kapatıyordu". ⇒ Müstakil madde yazıldı: "Gazi Hüsrev Bey'in Sava boyu harekâtı: Bosna Brodu ve Jasenovaç" (`KRONO.diff`).
- **Kimlik:** H-0024'ün aynısı (aşağıda).

---

## H-0024 — "Mohaç'ta Macaristan yenilince Avusturya Macar topraklarının bir kısmına el koymuş gibi görünüyor; doğru mu?"

**Görsel açıldı:** Mohaç sonrası (H-0024-1) Yukarı Macaristan, Batı Macaristan ve Hırvatistan "AVUSTURYA (HABSBURG)" taba rengine boyanıyor. Öncesinde (H-0024-2) tek yeşil MACARİSTAN.

**Ne ölçtüm:** 1526-08-29 ile 1527-09-23 arasındaki `s:` geçişleri (`girdi.yukle()`, 93 dosya):
```
macaristan → avusturya            19  (1526-08-29) Eğri · Kanije · Uyvar · Yanıkkale · Zigetvar · Kassa ·
                                       Eperjes · Tokaj · Nitra · Fülek · Ungvár · Munkács · Sisak ·
                                       Kostayniçe · Bosna Dubiçası · Bosna Novi'si · Jasenovaç · Bosna Brod'u · Krupa
macaristan → avusturya             4  (1527-01-01) Bihaç · Udbina · Cetin · Drežnik
(OSM 1526) → avusturya             2  (1527-09-23) Budin · Peşte
macaristan → macaristan-habsburg  11  (1526-08-29) Zagreb · Bratislava · Sopron · Komárom · Léva ·
                                       Trencsén · Varasd · Szatmár · Murska Sobota · Lendava · Eisenstadt
almanya → avusturya               18 + 5  (Avusturya/Bohemya/Silezya — DOKUNULMADI, 0081 S1)
```
- **Künyeler** (`devletler.js` tarandı):
  - `habsburg` "Habsburg Avusturya", 1282-1918, `harita:"avusturya"`.
  - `macaristan` 1000→1526-08-29.
  - `macaristan-habsburg` "Macaristan Krallığı (Habsburg Tacı)", 1526-08-29→1918, `harita:"macaristan"`.
  - `dogu-macar-kralligi` (Zapolya) 1526-08-29→1541-08-29.
- **Kaynak:**
  - TDV budin: "diğer kısmı ise Macar tahtında hak iddia eden Habsburg hânedanına mensup İmparator V. Karl’ın (Charles Quint) kardeşi Ferdinand’ı (17 Aralık 1526) seçmişti" · "1527 Ağustosunda Buda’yı ele geçiren Ferdinand".
  - TDV hirvatistan: "Mohaç Muharebesi’nden bir yıl sonra (1527) … Hırvatlar … Habsburg hânedanına mensup I. Ferdinand’ı kral olarak seçtiler".
  - TDV macaristan: "Macaristan’da Habsburglar’ın elindeki kısım".
  - TDV `zapolya` slug'ı **302**.

**Karar (D205 — kimlik kusuru, dönem değil):** Emre'nin gördüğü şey bir **KİMLİK HATASI**.
- Ferdinand bu topraklara Avusturya arşidükü olarak değil, **seçilmiş Macar (ve Hırvat) kralı** olarak sahip oldu. Toprak Macar tacında kaldı.
- Atlas aynı statüdeki 36 noktanın 11'ini `macaristan-habsburg` (yeşil, doğru), 25'ini `avusturya` (taba, yanlış) yazmış. Aynı krallık iki renkte çiziliyor, "Avusturya el koydu" görüntüsü buradan doğuyor.
- **Çare:** 25 kaydın Mohaç'la başlayan dilimi `avusturya` → `macaristan-habsburg`. Gün DEĞİŞMEDİ. Künye ve boya zaten var ⇒ **motor tuzuna dokunmaz, veri koşusu yeter**. Görünür sonuç: Mohaç sonrasında Habsburg Macaristanı yeşil kalır, taba renk Macar topraklarından çekilir.

**Kapsam dışı (yazmadım, sahibine):**
- **Zapolya/Ferdinand paylaşımı:** Kassa, Eperjes, Tokaj, Munkács, Ungvár ve Eğri 1526-1528'de büyük ölçüde Zapolya tarafındaydı. Atlas onları Mohaç gününden Habsburg yazıyor. Ayrı bölge sorusu; TDV `zapolya` 302, ölçülmedi.
- **Gün:** Ferdinand'ın seçimi 17 Aralık 1526, Hırvatların seçimi 1527. Künye ve dilimler Mohaç gününden (1526-08-29) başlıyor. 0081 bunu önerdi, inmedi.
- **Sonraki dilimler:** ilk dilim dışında `avusturya` yazılı Macar tacı dilimleri de var (ör. 1686/1699 sonrası; Jasenovaç zaten `macaristan-habsburg`). Bu diff yalnız Mohaç ile başlayan dilimi değiştiriyor.
- **0081 S1:** 18 Avusturya/Bohemya/Silezya noktası Mohaç GÜNÜ `almanya`→`avusturya` geçiyor. 2s'in 1526-08-29 kovasını AÇIK tutan tek sebep bu (aşağıda).

---

## Kapı — `PYTHONHASHSEED=0 py arac/denetle.py` (ağaç `origin/main` 6865cc87, D8 girdileri `kodla.py coz-c` ile kurulu)

| koşu | çıkış | fark |
|---|---|---|
| taban | **2** | yalnız D8 körlük; ihlal 0 |
| KOORD | **2** | Değişmez 2: 627→628 kırılma, 0 açık · 2sk maskeli TARAF 137→151 ⚠️ · kaynaksız `s:` 1908→1907 |
| KOORD + KRONO | **2** | + 2sk YER 2087→**2089** (Brod ve Jasenovaç 1536 artık YER anılarak kapanıyor). 2s 1727 / **184 AÇIK** / 791 / 167 — **tabanla birebir**. İhlal 0. |

**2sk +14'ün sınıfı — ADIYLA ölçüldü:** `degismez2(… "s", yer_sarti=True)` doğrudan çağrıldı, açık kovalardaki açıklanmış birimler döküldü.
- Tek fark **1526-08-29 kovası**: açıklanan 16 → **30**. Hırvat-Slavon ve Yukarı Macar noktaları artık Mohaç maddesine "Macaristan" TARAFI üzerinden bağlanıyor.
- Kova yine de AÇIK. Sebep yalnız 18 `almanya→avusturya` noktası (Bregenz · Breslau · Brno · Innsbruck · Linz …, 0081 S1). O yüzden yeni açıklananlar "maskeli" sayılıyor.
- ⇒ Bu bir GERİLEME DEĞİL: 14 birim açıklanmamıştan açıklanmışa geçti, AÇIK sayısı aynı.
- Tavan önerisi (§3.4, aynı commit): **2sk 2251 → 2265**, gerekçe bu satır.
- S1 kapanırsa (Avusturya veraset topraklarına 1526 maddesi ya da günü) bu 30 birim görünür kapanır.

---

## Teslim — ① ölçtüm · ② bulamadım · ③ istiyorum

**① Ölçtüm:** yukarıda.

**② Bulamadım:**
- TDV `yayce`, `zapolya` ve `husrev-bey` slug'ları 302.
- Bosna Brodu'nun TDV'de kendi maddesi yok.
- Zapolya/Ferdinand bölge paylaşımının şehir düzeyinde kaynağı.
- `denetle_eslesme.py` ölçülmedi.

**③ İstiyorum:**
- İki diff ve 2sk tavanı (2251 → 2265) AYNI commit'te insin:
  - `BOSNA-MACAR-0087-KOORD.diff`: 4 dosya, 25 kimlik + Brod/Jasenovaç 1536.
  - `BOSNA-MACAR-0087-KRONO.diff`: `olaylar_ek5.js`, 1536 maddesi.
- Veri koşusu yeter; tuz yok.
- BALKAN-MACAR-0081 uygulayıcısıyla sırayı koordinatör belirlesin.

**Dosyalar:** `denetim/BOSNA-MACAR-0087.md` · `-KOORD.diff` · `-KRONO.diff`. Taban `origin/main` = `6865cc87`; ikisi de `git apply --check --cached` temiz, LF (CR 0).
