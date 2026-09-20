# ANTLASMA-KADEME-0074 — H-0013 · ÖLÇÜM ve PLAN (kod YAZILMADI)

**Oturum:** ANTLASMA-KADEME-0074 · 21 Eylül 2026 · şartname `oturumlar/DALGA-0074.md`
**Aletler (salt okuma, hiçbiri veri yazmaz):**
`denetim/ARAC-ANTLASMA-KADEME-0074.js` · `ARAC-ANTLASMA-ZINCIR-0074.js` ·
`ARAC-ANTLASMA-AYIRT-0074.js` · `ARAC-ANTLASMA-MALIYET-0074.js` · `ARAC-ANTLASMA-KAPSAM-0074.js`
**Ham sayılar:** `denetim/ANTLASMA-KADEME-0074.json` · `ANTLASMA-ZINCIR-0074.json` · `ANTLASMA-AYIRT-0074.json`
**Öngörü (ölçümden önce yazıldı):** `denetim/ANTLASMA-KADEME-0074-ONGORU.md`
Hepsi `js/suzgec.js`in uygulamayla AYNI fonksiyonlarını koşturur (D045).

---

## 0. TEŞHİS — Emre'nin eksik sandığı kademe ile gerçekte eksik olan kademe AYNI DEĞİL

Emre "bugün iki kademe var (önce/sonra), üçüncüsü olsun" diyor. Ölçüm başka bir şey
söylüyor: **bugünkü "Öncesi" düğmesi "savaştan önce"yi göstermiyor.**

`antlasmaFarkiHesapla` → `SUZGEC.antlasmaFarki` penceredeki İLK sınır gününü bulur ve
"Öncesi"ni o günden **bir gün önce** olarak gösterir. Yani bugünkü iki kademe:

| bugünkü düğme | gerçekte gösterdiği |
|---|---|
| ◀ Öncesi | antlaşma kırılmasından **bir gün önceki** hukukî sahiplik = **savaşın SONU** |
| Sonrası ▶ | kırılma günündeki hukukî sahiplik = antlaşmadan sonra |

Ölçülen ara (25 maddede, `ARAC-ANTLASMA-MALIYET-0074.js`): bugünkü "Öncesi" günü ile
savaşın başı arasında **80 ile 5867 gün** var (Lozan 1530 gün, Mondros 1454, Kaynarca
2111, Karlofça 5674). Yani bugünkü "Öncesi" savaşın başını DEĞİL sonunu gösteriyor.

Dahası: `SUZGEC.sahipAnahtari` yalnız `d:` / `v:` / `s:` okur — **`isg:` alanını HİÇ
okumaz** (`sinirIndeksi` de `isg:`yi indekslemez). Yani bugünkü "Öncesi" savaşın sonunu
**hukuken** gösterir, **fiilen** değil: işgal altındaki toprak hâlâ eski sahibinin
renginde görünür.

⇒ **Emre'nin istediği üç kademenin ikisi eksik, biri yanlış adlandırılmış:**

| Emre'nin kademesi | bugünkü karşılığı | durum |
|---|---|---|
| ① savaştan önce | **YOK** | yeni — kaynağı `ANTLASMALAR[].savas_basi` |
| ② savaş sonrası FİİLÎ durum | bugünkü "Öncesi", ama işgalsiz | **yarım** — `isg:` örtüsü eklenecek |
| ③ barış antlaşmasından sonra | bugünkü "Sonrası" | ✓ tam |

Bu, şartnamedeki öneriyi (*"fiilî durum = `isg:`nin antlaşma gününden hemen önceki hâli"*)
**doğrular ve tamamlar**: `isg:` doğru kaynaktır, ama tek başına üçüncü kademeyi vermez —
`isg:` ② kademesini düzeltir; eksik olan ① kademesidir ve onun kaynağı `savas_basi`dir.

---

## 1. ÖLÇÜLEN SAYILAR

### 1.1 Evren
| ölçüm | sayı |
|---|---|
| kronoloji maddesi (`OLAYLAR*`, 72 dosya anahtarı) | 1727 |
| **antlaşma maddesi** (`k:"antlasma"` 131 ∪ karma 6) | **137** |
| `ANTLASMALAR` künyesi | 41 |
| 137 maddenin `ANTLASMALAR` kaydına **bağlı** olanı | **44** · bağsız **93** |
| `savas_basi` alanı dolu künye | **37 / 41** |
| `kaynak` alanı olan künye | **0 / 41** 🔴 |

### 1.2 `isg:` evreni (üçüncü kademenin ikinci kaynağı)
| ölçüm | sayı |
|---|---|
| `isg:` kaydı | **326** · **238** yerleşimde |
| işgalci künye | 8 — ingiltere 116 · rusya 67 · fransa-cumhuriyet 57 · yunanistan 40 · avusturya 26 · italya 18 · almanya 1 · ispanya 1 |
| `isg:` başlangıç yılı (50'lik kova) | 1500:1 · 1700:3 · 1750:40 · 1800:41 · 1850:108 · 1900:133 |
| `isg:` ayrı sınır günü | 132 (d/v/s sınır günü 1928 — **`isg:` bu indekste YOK**) |

`isg:` verisinin **%74'ü 1850 sonrası**. Üçüncü kademe tarihsel olarak son iki yüzyılın
işidir; Karlofça/Pasarofça/Amasya'da fiilî kademe boş kalır (veri yok, ihmal değil).

### 1.3 Kademeler birbirinden AYIRT EDİLEBİLİYOR MU? (asıl cevap)
`ARAC-ANTLASMA-AYIRT-0074.js` · ölçüt: ① ≠ ② **ve** ② ≠ ③

| sınıf | sayı | oran |
|---|---|---|
| **ÜÇ kademe ayırt edilebilir** | **23** | %17 |
| yalnız iki kademe ayırt edilebilir | 15 | %11 |
| hiçbir kademe farkı yok | 3 | %2 |
| **`savas_basi` YOK → ① türetilemez** | **96** | **%70** |

96'nın **40'ında** bugünkü fark (③) var ama ① kaynağı yok; 56'sında fark da yok.
Bu 96'nın yüzyıl dağılımı: 1300:3 · 1400:7 · 1500:9 · 1600:8 · 1700:22 · 1800:30 · 1900:17
ve büyük çoğunluğu **Osmanlı dışı dünya antlaşmaları** (Campo Formio 1797 fark 31, Kiel
1814 fark 20, Fredrikshamn 1809 fark 19, Viyana Kongresi 1815 fark 18). `ANTLASMALAR`
bir **Osmanlı antlaşmaları künyesidir**; tavan buradan geliyor, ihmalden değil.

🔴 **Emre'nin "tüm antlaşmaların ayarını buna göre yapalım" isteği bugünkü veriyle
karşılanamaz: 137 maddenin 23'ünde (%17) üç kademe anlamlıdır.** Mimarî 137'sini de
kaldırır; veri 23'ünü besler.

### 1.4 Üç kademesi tam olan 23 madde
`①≠② (bunun kaçı İŞGAL) · ②≠③`

| tarih | ①≠② | işgal | ②≠③ | madde |
|---|---|---|---|---|
| 1923-07-24 | 406 | 78 | 23 | Lozan Antlaşması |
| 1918-10-30 | 197 | 68 | 25 | Mondros Mütarekesi |
| 1913-11-01 | 129 | 27 | 2 | Bozcaada ve İmroz'un geri alınışı |
| 1913-11-14 | 129 | 27 | 17 | Atina Antlaşması |
| 1913-05-30 | 108 | 27 | 26 | Londra Antlaşması — Rumeli'nin kaybı |
| 1830-02-03 | 103 | 11 | 21 | Londra Protokolü — Yunanistan |
| 1913-09-29 | 99 | 0 | 4 | İstanbul Antlaşması — Bulgaristan |
| 1555-05-29 | 74 | 0 | 1 | Amasya Antlaşması |
| 1699-01-26 | 62 | 0 | 13 | Karlofça Antlaşması |
| 1812-05-28 | 52 | 25 | 8 | Bükreş Antlaşması |
| 1479-01-25 | 48 | 0 | 4 | İstanbul Antlaşması — Arnavutluk |
| 1590-03-21 | 40 | 0 | 1 | Ferhad Paşa Antlaşması |
| 1878-07-13 | 33 | 0 | 46 | Berlin Antlaşması |
| 1718-07-21 | 23 | 0 | 8 | Pasarofça Antlaşması |
| 1774-07-21 | 23 | 20 | 23 | Küçük Kaynarca Antlaşması |
| 1829-09-14 | 20 | 13 | 10 | **Edirne Antlaşması** (Emre'nin görseli) |
| 1639-05-17 | 18 | 0 | 3 | Kasr-ı Şirin Antlaşması |
| 1912-10-18 | 18 | 16 | 40 | Uşi Antlaşması |
| 1791-08-04 | 11 | 9 | 2 | Ziştovi Antlaşması |
| 1878-03-03 | 6 | 0 | 15 | Ayastefanos Antlaşması |
| 1739-09-18 | 5 | 2 | 11 | Belgrad Antlaşması |
| 1856-03-30 | 5 | 0 | 3 | Paris Antlaşması |
| 1672-10-18 | 4 | 0 | 2 | Bucaş Antlaşması |

**Yalnız 10 maddede işgal (fiilî kademe) gerçekten var.** Öteki 13'te ① ve ② ikisi de
hukukî — savaş toprak değiştirmiş ama işgal kaydı yok.

---

## 2. ÜÇÜNCÜ KADEMENİN KAPSAMI — kararı gereken YER (maliyet ölçüldü)

Bugün bir antlaşma açılınca `data/petek_govde.js`ten yalnız **el değiştiren** peteklerin
gövdesi haritaya basılıyor. Üçüncü kademe kümeyi büyütür. Üç seçenek ölçüldü
(`ARAC-ANTLASMA-KAPSAM-0074.js`, 25 madde, GeoJSON yükü):

| seçenek | kapsam | madde başına ort. | en kötü vaka | toplam |
|---|---|---|---|---|
| **DAR** (bugünkü) | yalnız el değiştiren petek | 12 KB | Uşi 59 KB | 299 KB |
| **ORTA** ✅ | DAR ∪ antlaşma günü taraf işgali ∪ pencerede biten işgal | **23 KB** | Mondros 113 KB · Lozan 92 KB | 567 KB (**×1,9**) |
| GENİŞ | savaş başından antlaşma sonrasına sahipliği değişen HER taraf yerleşimi | 85 KB | Lozan 337 KB (406 petek) | 2115 KB (×7,1) |

**Önerim ORTA.** Gerekçe:
- DAR üçüncü kademenin **asıl anlatısını kaçırır**: işgal edilip antlaşmayla GERİ VERİLEN
  toprak (Eflak-Boğdan 1829, Ankara İtilâfnâmesi'nde Fransız işgali) `s:`te hiç değişmediği
  için bugünkü fark listesine girmez — bugünkü iki kademe bunları **hiç göstermiyor**.
  Ölçüldü: Bükreş 1812'de DAR 8 petek, ORTA 25; Bozcaada 1913'te DAR 2, ORTA 29;
  Lozan'da DAR 23, ORTA 78.
- GENİŞ "savaş boyunca dünyada ne değişti"yi çizer; Lozan'da 406 petek / 337 KB. Bu
  antlaşmanın anlatısı değil, dört yılın anlatısıdır — hem pahalı hem yanıltıcı.

---

## 3. MİMARÎ PLAN (kod YAZILMADI — hüküm 1.MURAT/Emre'de)

### 3.1 Yeni katman AÇILMIYOR
`antlasma-fark-dolgu` tek katman kalır. `_antlasmaHal(hal)` zaten
`fill-color = ["get", hal]` yapıyor; kademe eklemek **özelliğe bir alan eklemek**tir:

```
properties: { once, sonra, koyu, ad }            // bugün
properties: { savasOncesi, fiili, sonra, koyu, ad }   // önerilen
```
`once` adı `fiili` olarak **yeniden adlandırılmaz**, `once` geriye dönük korunur
(`ANIM.kayitOl("cozul", …)` · `_eleGecirmeSahnesi` · sefer oku `koyuTon` üzerinden
bağlı — 9 çağrı yeri var). Yeni iki hâl EKLENİR: `savasOncesi`, `fiili`.

### 3.2 Veri akışı
| kademe | gün | kaynak | bugün var mı |
|---|---|---|---|
| ① savaştan önce | `savas_basi − 1` | `ANTLASMALAR[].savas_basi` + `SUZGEC.sahipAnahtari` | hayır |
| ② savaş sonrası fiilî | kırılma − 1 | `sahipAnahtari` **+ yeni `isgalAnahtari`** (`y.isg`) | yarım |
| ③ antlaşmadan sonra | kırılma günü | bugünkü `antlasmaFarki` | evet |

Yeni `js/suzgec.js` fonksiyonları (DOM'suz, ölçüm aleti aynılarını koşturur):
- `isgalAnahtari(y, gs)` → o gün yürürlükteki `isg:` kaydının `d`si ya da `""` (≈6 satır)
- `isgalIndeksi(Y)` → `isg:` sınır günleri (132 gün) — `sinirIndeksi`nin kardeşi (≈10 satır)
- `kademeKumesi(Y, ix, isgIx, k1gun, k2gun, k3gun, T)` → ORTA kapsam kümesi + üç sahiplik (≈35 satır)

`js/app.js`: `_farkKutusuCiz`e iki düğme + `ozellikleriKur`a iki renk alanı +
`antlasmaFarkiKirp` sırasına iki adım. Tahminim **< 110 satır** (öngörü Ö4 ile uyumlu).

### 3.3 Başarım
Ham ① hesabı (3921 yerleşimin tam taraması) madde başına ortalama **111 ms**, azami
**662 ms** (Atina) — bugünkü fark 7 ms medyan olduğu için bu **kabul edilemez**.
Çare ölçüldü: `sinirIndeksi` ile pencereyi daraltmak. `[savas_basi, antlaşma]` aralığında
sınır günü olan yerleşim sayısı — Lozan **481**/3921 · Mondros 693 · Kaynarca 47 ·
Karlofça 192, **aday çıkarma süresi 0 ms**. Tam tarama yerine bu aday kümesi taranır.

### 3.4 "YOK" dürüstlüğü (§ bugünkü blok ilkesi)
- `savas_basi` yoksa (**96 madde**) ① düğmesi **hiç çıkmaz** — gri pasif düğme değil.
  Kutu metninde tek cümle: *"savaşın başlangıcı bu antlaşma için kayıtlı değil."*
- `isg:` yoksa (**13 / 23** üç kademeli maddede) ② düğmesi çıkar ama **"fiilî = hukukî"**
  denir; uydurma tarama çizilmez.

### 3.5 🔴 KAYNAK UYARISI (D210 · D207)
`ANTLASMALAR`ın **41 kaydının hiçbirinde `kaynak` alanı yok**; `savas_basi` günleri
kaynaksız duruyor. Birinci kademe doğrudan bu güne oturacağı için, ekranda
"savaştan önce · <gün>" yazmak **kaynaksız bir gün iddiasını ekrana taşır**.
İki yol var, hüküm gerekli:
- **(a)** ① düğmesinde gün YAZILMAZ, yalnız "◀ Savaştan önce" yazar (gün ipucunda kalır);
- **(b)** `ANTLASMALAR`a `savas_basi_kaynak` alanı açılır ve 37 kayıt TDV'den doğrulanır
  (ayrı bir veri işi, bu oturumun kalemi değil).

---

## 4. HÜKÜM BEKLEYEN ÜÇ SORU
1. **Kapsam:** ORTA (önerim, ×1,9 yük) mu, DAR mı, GENİŞ mi?
2. **Kaynak:** ① düğmesinde gün gösterilsin mi (§3.5 a/b)?
3. **Kapsam genişletme:** `savas_basi`si olmayan 96 maddenin 40'ında fark var. Bunlara
   `ANTLASMALAR` kaydı açmak ayrı bir veri işidir (çoğu Osmanlı dışı antlaşma) —
   bu dalgada AÇILSIN mı, yoksa mimarî 23 madde üzerinde mi kurulsun?

## 5. ÖNGÖRÜ SINAVI (`ANTLASMA-KADEME-0074-ONGORU.md`)
| öngörü | tahmin | ölçüm | sonuç |
|---|---|---|---|
| Ö1 antlaşma maddesi | 117–135 (~122) | **137** | ✗ bant DIŞI (az tahmin) |
| Ö2 `isg:` doğru kaynak ama yetersiz | evet | evet — `isg:` ②'yi düzeltir, eksik olan ① | ✓ |
| Ö2b bugünkü "önce" ile fiilî durum çakışır | "yarıdan çoğunda" | çakışmıyor; **bugünkü "önce" savaşın SONU**, ara 80–5867 gün | ✗ teşhis daha ağır çıktı |
| Ö3 üç kademe anlamlı | 8–25 (~15) | **23** | ✓ bant içinde |
| Ö4 `app.js` < 120 · `suzgec.js` < 60 satır | — | plan < 110 / ≈ 51 | ✓ (uygulanmadı, tahmin) |
| Ö5 veri yoksa düğme çıkmasın | öneri | öneri korundu (§3.4) | — hüküm bekliyor |
