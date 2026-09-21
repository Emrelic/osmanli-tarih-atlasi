# PARTİ 0075 — uygulama sırası (22 Eylül 2026, 02:15)

Sekiz blok da teslim etti (17:05–17:40). Hiçbiri `data/` ya da `arac/`ya
dokunmadı — kilit tuttu. Bu dosya **ne zaman ne yapılacağını** sıralar.

---

## 🔴 ÖNCE: BİR TEŞHİS ÇÜRÜDÜ, DÜZELTİLİYOR

**"Açık yeşil boş arazi Rusya'dır" YANLIŞTI.** 21 Eylül'de HARITA-DURUM-0074
öyle ölçmüştü, ben de iki kez öyle aktardım. GOSTERIM-0075 piksel piksel
ölçtü ve çürüttü:

| kimlik | ΔE (H-0017/H-0022 pikseli) |
|---|---|
| **eflak** | **1,8 – 2,2** ← bu |
| rusya | 15,1 – 15,7 |

Etiket de "EFLAK VOYVODALIĞI" diyor. Sahipsiz hücre oranı %0,05–0,14, yani
toprak boş da değil. Karışıklığın sebebi: 0074'ün baktığı piksel
(`#a6bb8f`) H-0014/15'e aitti, bunlarınki `(165,211,142)` — **başka bir
renk, başka bir madde**. İki ayrı şikâyet tek teşhise bağlanmış.

**Gerçek kusur veride:** İbrail ve Yergöğü 1829-09-14'ten sonra `s:eflak`
taşıyor; öteki 11 Eflak noktası `v:eflak`. `s:` ayrı bir yabancı gövde
çizdiriyor, `v:` tâbi çizer. Çare iki noktaya `v:eflak`. Aynı sınıf toplam
**14 nokta-pencere / 4 kimlik** (bulgaristan-prensligi 6 · haciemir 5 ·
eflak 2 · sirbistan 1).

---

## A · KOŞU BİTMEDEN YAPILABİLİR (data/ ve arac/ dışı)

| # | iş | dosya | not |
|---|---|---|---|
| A1 | `data/seferler_p0074.js` `index.html`e bağlı DEĞİL — 7 sefer dosyasından tek o. Silistre→Edirne 1829 oku canlı değil | `index.html` | dosya VAR, satır yok; tersi olsaydı 404 olurdu |
| A2 | `js/app.js` `_EKOKUMA_DOSYA_ADLARI`na üç yeni ad | `js/app.js` | ama dosyalar `data/`ya inmeden eklenmez — A1'le aynı tuzak |

⚠️ A2 bekler: yükleyici listesi ile dosyanın **aynı commit'te** gitmesi
şart (21 Eylül'de 5 dakikalık 404 böyle oldu).

## B · KİLİT KALKAR KALKMAZ, KOŞU İSTEMEYEN

| # | iş | kim uygular |
|---|---|---|
| B1 | `data/hukuki_sinirlar.js` → `ii-erzurum-sattularap-1847` `kapsama.dolgu:false`. 79.947 km²lik opak dikdörtgen 76 yıl boyunca dolgu basıyor (H-0039). Karlofça emsali, tek satır | 1.MURAT |
| B2 | Üç ek okuma taslağı `data/ekokuma_p75{a,b,c}.js` olarak inecek (30 kart) + yükleyici listesi + `index.html` — **hepsi tek commit** | 1.MURAT + üç blok |
| B3 | H-0007 üslup temizliği A ve B: basılan 6 "Emre" + 122 geliştirici sesi bulgusu / 71 kart / 19 dosya | EKOKUMA-TOPLUM |
| B4 | KRONO-YER A listesi: 33 `yer_id` + 23 `odak_yer` (8 dosya) | KRONO-YER |
| B5 | SEFER-OK: deniz rotası yaması (546 km kara kesimi → 3 km), kademe yaması, 3 tahliye oku | SEFER-OK |

## C · KOŞU İSTEYEN (bir sonraki koşuya biriktir)

| # | iş | niçin koşu |
|---|---|---|
| C1 | İbrail + Yergöğü → `v:eflak` | petek sahipliği değişir |
| C2 | Sırbistan: Belgrad · Semendire · Şabac şehir noktalarına `v:sirbistan-prensligi` + 12 nahiye merkezi noktası | yeni nokta = yeni petek |
| C3 | Mısır seferi düzeltmeleri (aşağıdaki kararlardan sonra) | aynı |
| C4 | `uret_petek.py` çakışma yaması (`baskasinin_petegini_cikar`, 8/8 sentetik sınav geçti ama **tam koşuda sınanmadı**) | motor kodu |
| C5 | H-0010 `asi` statüsü: yeni alan GEREKMİYOR, `v:`in `statu` alanına yeni değer; renk hattı 13 Eylül'de zaten kurulu | motor + denetim |

---

## 🔴 SENİN KARARIN — on kalem

**Mısır seferi (MISIR-SEFER-0075)**
1. **Urfa kaydı kaldırılsın mı?** Atlasta 1832-08-15→1841 Mısır yazılı ama
   **kaynaksız**: TDV yalnız "1839'da kısa süre" diyor, Kutluoğlu Urfa'yı
   Kütahya kapsamı DIŞINDA sayıyor. Kaldırılırsa senin sorduğun "Konya-Urfa
   niçin kopuk eksklav" sorusu da çözülür.
2. **Maraş:** TDV "1833'te işgal, on dokuz aya yakın" — atlasta 8,5 yıl.
   Pencere kısaltılsın mı?
3. **Konya'ya giriş günü:** Gencer (BOA atıflı) 18 Kasım 1832 · atlas
   21 Kasım · TDV'nin 21 Aralık'ı muharebe günü.
4. **Mersin · Silifke · Ulukışla · Han Yûnus · İskenderun** eklensin mi
   (dolaylı tanıklık; koridor kopukluğunun öteki yarısı bunlar).

**Statü ve sınır (SINIR-STATU-0075)**
5. **Sırbistan fermanı: 17 Ekim 1830 (TDV).** Atlasta üç ayrı gün yazılı —
   madde 8 Kasım, künye 30 Ağustos, `d_sinirlar` 17 Ekim. Hangisi kalacak?
   Ve **Belgrad özerk gövdenin 37 km dışında** duruyor; sebep noktasızlık
   (Sırp çekirdeğinde 12 kasaba merkezi hiç yok).
6. **Lübnan künyesi bölünsün mü** (1516→1832 osmanlı · 1832→1840 üst
   `misir-kavalali` · 1840→1842 osmanlı)? TDV 1832-1840 Mısır idaresi diyor.
7. **Sisam:** renk ve gün doğru; eksik olan `sisam-prensligi` künyesi ve
   `v:kid`. Açılsın mı? (Bitişte ayrıca atlas 13 Mart 1912 ↔ TDV 11 Kasım 1912.)

**Kronoloji (KRONO-YER-0075)**
8. **Odak kuralı A'dan B'ye genişlesin mi** — merkezî karar maddeleri
   (4 tane: Redif · Tehcir Kanunu · Avusturya savaş ilânı · I.DS girişi)
   İstanbul'a odaklansın, süreç maddeleri tüm ekranda kalsın.
9. **Atlasta olmayan 13 yer** (Ziştovi tek başına 5 madde · Adakale ·
   Kalafat · Maçin · Fokşani · Trianon · Saint-Germain …): yeni nokta mı
   açılsın, yoksa `yer_yama.js` emsaliyle en yakın anlamlı yerleşime mi
   bağlansın (Trianon → Paris)?

**Ek okuma**
10. Üç yeni kartın kronolojiye bağı: **Galata Köprüsü** (1844 ↔ 1845
    tartışmalı, gün yok) ve **Tünel** (17 Ocak 1875, TDV + İTÜ) için
    kronolojiye madde açılsın mı?

---

## Sessiz borçlar — bu partinin yan ürünü

- `kronoloji_cok_1dunya_A/B.js` (**152 noktasız madde**) ve
  `olaylar_0073_iran_yanya.js` (5 madde) `index.html`de **yüklü değil**.
- `js/app.js` devlet-kronolojisi dalı (~13595-13633) `maddeOdakKutusu`yu
  çağırmıyor ⇒ B listesine odak yazmak **etkisiz** olurdu. Önce app.js.
- `js/app.js:9304-9308`: kaynak alanı TDV url'sine olduğu gibi ekleniyor;
  7165 maddenin **4818'inde** kaynak boşluk ya da "bulunamad" içeriyor →
  kırık bağlantı şüphesi (koddan okundu, tarayıcıda denenmedi).
- CLAUDE.md §1.5 "1713 madde" diyor, `denetle.olaylari_yukle()` bugün
  **1736** veriyor ⇒ tablo bayat, koşudan sonra `durum_tablosu.py --yaz`.
- `ekokuma_dunya.js:163` Navarin "3.000 can" ↔ TDV (Bostan 2006) 52 gemi +
  6000 denizci.
- `olaylar_ek5.js:372` Oltenitsa 11 Kasım 1853 ↔ Köremezli 2021 "4 Kasım
  1853 Cuma" (7 gün).
- Tarayıcı bölmesi `visibilityState=hidden` iken MapLibre `load`
  ateşlemiyor ⇒ canlı `queryRenderedFeatures` yapılamıyor. H-0048-2'nin
  kaynak katmanı bu yüzden **bulunamadı** (altı aday elendi).
