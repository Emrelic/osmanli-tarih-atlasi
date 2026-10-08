# KRONO-SENKRON-1008 — İzvornik çaprazı · Mostar maddesi · Gürcistan üçlüsü

> Oturum **KRONO-SENKRON-1008** · 8 Ekim 2026 · makine UMIT · ağaç `C:\atlas-krono1008`
> (detached `origin/makine/umit` = `e28edfdc`) · görev UMIT İRTİBAT'tan (koordinatör YILDIRIM BAYEZIT).
> Rapor + diff. `data/*.js`e doğrudan yazılmadı. Commit/push yok.

## 0. ÖNGÖRÜLER — ölçümden ÖNCE yazıldı (8 Ekim 2026)

**H-0023 İzvornik (0085):** İki madde aynı gün (1460-?) taşıyor; birinin metni İzvornik,
öbürünün metni Batı Karadeniz kıyısı. Öngörü: ÇAPRAZ `yer_id`/odak alanındadır — İzvornik
maddesinin `yer_id`i Karadeniz kıyısındaki bir yerleşimi, Karadeniz maddesininki
İzvornik'i gösteriyor (metin doğru, odak yanlış). Olasılık ~%60. Alternatif (~%30): iki
maddenin `t:` günleri yer değiştirmiş, kırılmaların günleri metne uymuyor. ~%10: çapraz yok,
kusur başka sınıf (ör. ortak gün → motor ikisini aynı kareye koyuyor; odak tek).

**H-0025 Mostar (0085):** Mostar'ın OSMANLI'ya geçiş kırılması 1466-1467 civarındadır
ve ±30 gün içinde Mostar'ı anan madde yoktur; Değişmez 2 bunu sessiz saymıyorsa sebebi
aynı pencereye düşen başka bir maddenin (II. Arnavutluk seferi) kırılmayı "örtmesi"dir.
Kaynak: TDV "Mostar" maddesi fethi 1466 civarına koyar (Hersek'in kademeli fethi,
1465-1468); kesin gün TDV'de büyük olasılıkla YOK ⇒ yıl hassasiyeti.

**H-0001 Gürcistan (0086):** `devletler.js`te `imereti` var; `kartli` ve `kaheti`
künyeleri ya YOK ya da var ama 1490'da Kartli/Kaheti noktaları hâlâ `gurcistan` taşıyor.
Öngörü: sınıf = "nokta yanlış künyede" (Tiflis + Kaheti noktaları 1490 sonrası
`gurcistan`) — ~%55; "kimlik var, boya aynı/yok" ~%25; "kimlik yok" ~%20.

**Diff etkisi öngörüsü — `denetle.py` SONRA koşusundan ÖNCE yazıldı:** taban çıkış 2
(yalnız D8 körlük kovası; ihlal 0). ① Değişmez 2: 624 kırılma, 0 açık KALIR (Mostar ve
Trebinye 1466-01-01'e iner, yeni madde aynı gün). ② Değişmez 2t: "Hersek'in ilhakı"
(1483-01-01) maddesi Mostar kırılmasını kaybeder, en yakın Hersek kırılması Herseknovi
1482-01-01 (365 gün) ⇒ kırılmasız 13 → **14, tavan 13 ⇒ İHLAL (çıkış 1)**. ③ Değişmez 2s:
Zagem'in iki yeni yabancı kırılması (1490-01-01 · 1762-01-01); 1490 kronoloji_gurcistan
maddesi Kaheti'yi anıyor ⇒ kapanır; 1762 için madde var mı bilmiyorum ⇒ AÇIK +0 ya da +1.

**Öngörü ↔ ölçüm:** İzvornik öngörüm (odak çaprazı, %60) **YANLIŞ** çıktı: odak doğru, sebep
öngördüğüm ~%10'luk sınıf (aynı gün). Mostar öngörüm **YARI doğru**: kırılma 1466'da DEĞİL
1483'te; 1466'da Arnavutluk maddesinin örttüğü kırılma Trebinye'nin. Gürcistan öngörüm
**doğru** (nokta yanlış künyede) ama EKSİK: Kaheti künyesinin penceresi de tutmuyor. Diff etkisi
öngörüm ①② birebir tuttu, ③'te AÇIK +0/+1 dedim: ölçüm **−1** (iyileşme).

---

## Kapı — `py arac/denetle.py`, ÇIKIŞ KODU (ağaç `e28edfdc`)

| koşu | çıkış | not |
|---|---|---|
| taban, temiz ağaç | **2** | D8 ölçülemedi: `devletler_harita.js` / `donemler.js` diskte yok (gitignore). İkisini `kodla.py coz-c` ile ağaçta kurdum ⇒ yine **2**, bu kez yalnız "D8 körlük — defterde olmayan 18 (hat,gün)". İhlal 0. |
| diff'ler, ilk hâl (1483 maddesine dokunmadan) | **1** | **2t 13 → 14 ✗** — "Hersek'in ilhakı" 1483-01-01 kırılmasız kaldı (öngörü tuttu). |
| diff'ler, son hâl | **2** | tabanla AYNI kova (D8 körlük); ihlal 0. |

Son hâlin tabandan farkı:
```
Değişmez 2    624 kırılma · 0 açık                → değişmedi
Değişmez 2s   1722 yabancı · 185 AÇIK (tavan 185) → 1720 · 184 AÇIK   ⇐ İYİLEŞME: tavan 184'e İNMELİ (§3.4-3, aynı commit)
Değişmez 2sk  yalnız-taraf 2250 (tavan 2250)      → 2251 ⚠️ (ihlal DEĞİL, sınıfı istenir — aşağıda)
Değişmez 2t   13 (tavan 13)                       → 13 ✓
Sayaç 3z      m:/egemen uyuşmazlığı 489           → 491 (ŞEMA borcu, ihlal değil)
ZAYIF mükerrer (aynı kişi ±3 gün, ihlal değil) 81 → 82
```
**2sk +1'in sınıfı (çıkarım, ADIYLA ölçülmedi):** Zagem 1490-01-01 gurcistan→kaheti-kralligi
kırılması `kronoloji_gurcistan.js` 1490 maddesiyle yalnız TARAF ("Kaheti") üzerinden
kapanıyor; madde Zagem'i anmıyor. Künye devralması DEĞİL. Maddeye "Zagem" yazdırmanın kaynağı
yok (TDV Zagem'i anmıyor) ⇒ önerim tavan 2251. **2s −1'in hangi birim olduğu ADIYLA ölçülmedi**
(en olası: Trebinye'nin hersek bitişi, artık Trebinye'yi anan maddeye düşüyor).

---

## ① H-0023 İzvornik (0085) — "çapraz" YOK; sebep AYNI GÜNÜN KIRPMASI

**Ne ölçtüm**
- İki madde: `olaylar_ek5.js` "Batı Karadeniz kıyısının alınışı: Amasra" (`yer_id` Amasra) ·
  `olaylar_ek8.js` "İzvornik (Zvornik) kalesinin fethi" (`yer_id` İzvornik). İkisi de
  **1460-01-01**, ikisi de YIL (TDV izvornik: "Osmanlılar burayı 1460’ta fethettiler";
  Amasra maddesi `kaynak:"osmanlilar"`; TDV `amasra` slug'ı **302**, ölü).
- 1460-01-01 kırılmaları (girdi.py, 93 dosya): **3** — Amasra (ceneviz→OSM) · İzvornik
  (bosna→OSM) · Tuzla (bosna→OSM). Motor çıktısında tek dönem "Katılım: Amasra, İzvornik
  (Zvornik), Tuzla (Bosna)", Osmanlı alanı 667.000 → 675.000 km².
- Üç eksen de DOĞRU eşli: gün ✓ · `yer_id` ✓ · kamera hedefi ✓. Bu ağacı yerel sunucuda
  (127.0.0.1) açıp gerçek arayüzle ölçtüm: ⏭ Amasra maddesi → kamera 41.75,32.39 · ⏭ İzvornik
  → 44.39,19.10. ▶ oynatmada da aynı (Amasra 1,7 sn, İzvornik 7,4 sn). `odak_olc.py` ikisini
  kusurlu listelemiyor.
- **Çapraz algısının sebebi:** `oncesiSonrasiKirp(gi)` önce/sonra'yı **GÜN** üzerinden yakıp
  söndürür, maddeye göre değil ⇒ iki maddenin İKİSİNDE de üç petek birden yanıp söner. Kamera
  z≈3.9'da (görüş ~31-56K × −1-40D) Bosna da çerçevede. Petek alanları (yaklaşık Voronoi,
  `motor_kara` ile kesilmiş): **Amasra ~690 km² · İzvornik ~3.930 · Tuzla ~2.610** ⇒ Amasra
  maddesinde gözün gördüğü değişim ~9 kat büyük Bosna değişimidir.

**Ne bulamadım** — maddelerden birine başka gün veren kaynak (ikisi de yalnız yıl). Emre'nin
ekranının görseli (0085 görsel klasörü UMIT'te yok).

**Ne istiyorum**
- 🔴 **"Yer değiştir" UYGULANMASIN:** metinler değişirse İzvornik metni Amasra kamerasına
  gider — iki doğru eşleşme iki yanlışa döner. Veri diff'i YOK.
- Çare arayüzde (`js/app.js`, benim dosyam değil — sevk): aynı güne ≥2 madde düşünce kırpma o
  maddenin `yer_id`/`yer` peteklerine DARALSIN (ötekiler "sonra" hâlinde sabit kalsın).
  Öngörü: yanıp sönen alan Amasra maddesinde ~690, İzvornik maddesinde ~6.540 km² olur.
- Yan bulgu (kapsam dışı, ölçülmedi): ⏭ ile 1460-05-29 "Mora'nın fethi"ne geçince kamera
  İzvornik'te KALDI.

---

## ② H-0025 Mostar (0085) — iki ayrı kusur: biri veri, biri motor

**Ne ölçtüm**
- Veride Mostar `s: hersek 1448-01-01→1483-01-01`, `d: 1483-01-01→`. Motor çıktısında
  (KOŞU 21) `hersek` gövdesi 1466-06-01..1483 **4.611 km²** ve Mostar'ı İÇERİYOR ⇒ harita
  Mostar'ı 1466'da Osmanlı BOYAMIYOR.
- 1466-06-01'de Hersek'te el değiştiren nokta **Trebinye** (hersek gövdesi 8.015 → 4.611 km²).
  Trebinye'nin günü **İlbasan'dan devralınmış** (dosyadaki kendi notu: "1466-06-01 …
  (İlbasan'ın günü). Gün TDV'de yok") ⇒ kırılma Hersek'i hiç anmayan "II. Arnavutluk seferi"
  maddesine (aynı gün) sessizce bağlanıyor. §4 komşu günü şartı (aynı olay + yakın konum)
  tutmuyor: başka sefer, ~180 km.
- **"Mostar Osmanlı görünüyor"un asıl kaynağı:** `bolgeler.js` "Saraybosna" bölgesi (k2,
  f 1448-01-01) Mostar · Trebinye · Herseknovi dahil 14 üyenin STATİK birleşimi; `hersek`
  gövdesinin **%100'ünü** örtüyor (1448-66: 8.015/8.015 km² · 1466-83: 4.611/4.611 km²) ⇒
  Mostar 1448'den beri Osmanlı bölge sınırının ve "Saraybosna bölgesi" etiketinin İÇİNDE.
  Bilinen Değişmez 8b borcu: `DEGISMEZ-0086-defter.json` 8b'de `Saraybosna|1448-01-01` var
  (tavan 82'nin içinde). Kök bölge üretimi (motor) ⇒ tam inşada düşer; kronoloji/`kd:` kapatmaz.
- Kaynak: TDV mostar — "1466-1468’de Blagaj, Osmanlılar tarafından fethedildikten az önce
  Mostar da zaptedilmiş olmalıdır." · "872-873 (1468-1469) tarihli … icmal tahrir defterinde
  bu yer Mostar (Köprülü Hisar) adıyla zikredilir." · "Hersek bölgesinin fethi 888’de (1483)
  tamamlandıktan sonra". TDV trebinye — "1466’da Trebinye hemen hemen bütün Hersek bölgesiyle
  birlikte Osmanlılar tarafından ele geçirildi." TDV bosna-hersek — "buranın diğer bir kısım
  toprakları ise 1482 başlarında fethedilerek sancağa katılmıştı."
  ⇒ **Veri TDV'ye göre Mostar'ı ~17 yıl geç alıyor** (1483 BÖLGENİN tamamlanışı, Mostar'ın
  değil). Mostar kaydının kendi notu bunu "d: günü ayrı iş" diye bırakmış.
- ⚠️ **TDV kendiyle çelişiyor:** tamamlanış mostar'da 888/1483, bosna-hersek'te "1482 başları".
  Haritadaki son Hersek kırılması Herseknovi 1482-01-01 (künye `hersek` t 1482).

**Ne bulamadım** — Mostar'ın ve Trebinye'nin GÜNÜ (ikisi de yıl). Mostar için kesin yıl yok:
TDV aralık + "olmalıdır" veriyor; kesin olan yalnız ÜST SINIR (1468-69 tahriri). TDV
`herseknovi` ve `hersek-sancagi` slug'ları **302**.

**Ne istiyorum**
1. `KRONO-SENKRON-1008.diff` (`data/olaylar_ek5.js`): **yeni madde** 1466-01-01 "Hersek'in
   büyük kısmının fethi: Trebinye ve Mostar" (`kesinlik:"yil"`, `yer_id` Mostar, TDV tırnakları
   birebir) + **"Hersek'in ilhakı" 1483-01-01 → 1482-01-01**, `yer_id` Mostar → Herseknovi
   (maddenin KENDİ kaynağı bosna-hersek 1482 diyor; çelişki `ic_not_d`de). İkincisi olmadan
   2t 14 ✗ — ölçüldü.
2. `KRONO-SENKRON-1008-KOORD.diff`: Mostar `s:hersek` t ve `d:` f **1483 → 1466-01-01** (yıl,
   aralığın alt ucu; kaynak alanında yazılı) · Trebinye **1466-06-01 → 1466-01-01** (devralınan
   gün geri verildi, gerekçe yorumda) · `yer_yama.js` satır 293 eşlemesi yeni güne/yere.
3. Seçenek B (daha dar): yalnız Trebinye günü + Trebinye'ye madde, Mostar 1483'te kalsın ⇒ TDV
   ile ~17 yıllık fark AÇIK BORÇ kalır. Önermiyorum.
4. 8b (Saraybosna bölgesi Hersek'i örtüyor) motor işidir: bölge poligonu üyelerin O GÜNKÜ
   sahipliğine göre kurulmalı. Bu diff'ler onu değiştirmez; Mostar 1466'ya inince 1448-1466
   örtüsü 8b'de kalır (TAM İNŞA bekler).
⚠️ `denetim/ESLESME-A/B-DEFTERI.json` "1483-01-01 … Hersek'in ilhakı" anahtarını taşıyor —
`denetle_eslesme.py`nin diff sonrası ne dediğini ölçmedim; uygulayan koştursun.

---

## ③ H-0001 Gürcistan (0086) — MÜKERRER ÇEKİRDEK: 0081/H-0001'in yarım kalan devamı

**Mükerrer kapısı:** `denetim/KAFKAS-KORFEZ-0081-nokta.md` §3 aynı şikâyeti (Kartli+Kaheti tek
renk) ölçmüş, üç adım önermiş. Bugünkü durum:
```
① kaheti-kralligi künye f: 1578 → 1490   YAPILMADI  (f hâlâ 1578-08-09; t 1606 → 1762 yapılmış)
② renkler.py BOYALAR'a kaheti-kralligi    YAPILDI    (YAMA-MOTOR-0930, #5ad224)
③ Zagem (+ Telavi) s: 1490-1762 kaheti    YAPILMADI  (Zagem hâlâ gurcistan 1281-1801; Telavi/Gori YOK)
```

**Ne ölçtüm** (`devletler.js` TARANDI, tahmin edilen id aranmadı)
- Künyeler: `gurcistan` 1008-1801 (boya #e020b0) · `imereti` 1490-1810 (#deea90) ·
  `kartli-kralligi` 1484-1801 (**boya YOK**, künye notu "harita rengi verilmedi") ·
  `kaheti-kralligi` **1578-08-09**-1762 (#5ad224).
- 1490-06-01'de kutudaki (40,8-43,7K × 41-47D) 25 noktanın sahibi: **imereti 1 (Kutaisi)** ·
  **gurcistan 19** (Tiflis, Zagem, bütün Samçhe/Acara/Lazistan) · akkoyunlu 2 · OSMANLI 1
  (Arhavi) · kabartay 1 · sahipsiz 1 (Vladikavkaz).
- **Sınıf (D205):** Kaheti = "pencere tutmuyor" (1578 KURULUŞ değil Osmanlı tâbiliği; TDV:
  "Kahet ülkesi ocaklık olarak buranın eski hâkimi Alexandre’a bırakıldı" ⇒ krallık daha önce
  vardı = sınıf ② GENİŞLET) + "nokta yanlış künyede" (Zagem gurcistan). Kartli = `gurcistan`
  kimliği (0081'in kararı); Kaheti ayrılınca Kartli zaten ayrı renkte kalır.
- Kaynak (0081 "aranmadı" demişti): EB1911 'Georgia' (Wikisource) — Alexandre "at the end of
  his reign divided his territory between his three sons, whom he made sovereigns of Imeretia,
  Kakhetia and Karthli" · "in 1492, when the king of Kakhetia sought the protection of Ivan
  III" (**1492'de Kahetya kralı KESİN**). EB1911 kendiyle çelişiyor ("the partition in 1424").
  TDV yıl vermiyor. Iranica **403**. ⇒ 1490 kaynak yılı DEĞİL, atlasın bölünme yılı (imereti
  f ile aynı) ve EB1911 aralığının içinde.

**Ne bulamadım** — Kaheti'nin kuruluşu için TDV'de ya da erişilebilir akademik kaynakta YIL.
0081'in Telavi/Gori nokta önerisi uygulanmamış; yeniden yazmadım.

**Ne istiyorum** — `KRONO-SENKRON-1008-KOORD.diff` içinde:
- `devletler.js` `kaheti-kralligi`: f 1578-08-09 → **1490-01-01** (gerekçe + EB1911 tırnakları
  `kaynak:`ta) · 1578 kalemi `kurulus` → `vassal` · bayat "1606 son, DOĞRULANMADI" kalemi →
  **1762 son** (TDV: "1762 yılında Irakli, Kartli ve Kahet’i bir idare altında birleştirdi").
  CRLF korundu (CR yalnız devletler.js hunk'larında, 16 satır).
- `yerlesimler.js` Zagem: `s:` gurcistan 1281-**1490** · **kaheti-kralligi 1490-1762** ·
  gurcistan 1762-1801 (1578-1606 tâbi `v:` aynen). 1762 kırılması `kronoloji_gurcistan.js`
  1762-01-08 maddesine (7 gün) düşüyor.
- Öngörü (koşu ister): 1490-1762 Zagem peteği yeşil (#5ad224), Tiflis pembe (gurcistan),
  Kutaisi açık yeşil (imereti) ⇒ **üç parça**. Renk ayrımı (ΔE) `renk_olc.py` ile ölçülmedi.
  Samçhe noktaları (Ahıska vd.) gurcistan kalır ⇒ Kartli ile aynı renk; Samçhe ayrı istenirse
  ayrı iş.
- Motor tuzuna (`renkler.py`) dokunulmadı; boya zaten var ⇒ **veri koşusu yeter**.

---

## Dosyalar
- `denetim/KRONO-SENKRON-1008.md` (bu rapor)
- `denetim/KRONO-SENKRON-1008.diff` — `data/olaylar_ek5.js` (yeni madde + 1483→1482), LF, CR 0
- `denetim/KRONO-SENKRON-1008-KOORD.diff` — `data/yerlesimler.js` · `data/yerlesimler_seyrek.js`
  · `data/yer_yama.js` · `data/devletler.js` (CR yalnız devletler.js)
- Temel `origin/makine/umit` = `e28edfdc`; ikisi de `git apply --check --cached` temiz;
  iki diff birlikte uygulanmalı (madde ile kırılma aynı commit'te, yoksa 2t/2 oynar).
- Tavan önerileri (§3.4, koordinatör yazar, aynı commit): `2s` 185 → **184** · `2sk` 2250 → **2251**.
