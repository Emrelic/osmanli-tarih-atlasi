# EKOKUMA-SIMGE-0070 — ek okuma kategori simgesi + Mehmed Ali ek okuması

**Oturum:** EKOKUMA-SIMGE-0070 (Opus) · **Tarih:** 20 Eylül 2026 · **Koordinatör:** 1.MURAT
**Şartname:** `oturumlar/DALGA-0070.md` §4 (H-0001 · H-0009) · **Emre'nin metni:**
`ClaudEmre/kutu/giden/parti-emrelic-0070/PARTI.json`

---

## 1 · H-0001 ① — satır başında simge, yanında maddenin başlığı

### Ne değişti (kod)
| Dosya | Değişiklik |
|---|---|
| `js/app.js` | `_ekEtiketiBol()` (yeni, ~12 satır) · `ekAkordeonKur` içindeki satır başlığı çizimi |
| `css/style.css` | `.ek-ak-simge` + `.ek-ak-simge::after` ipucu balonu (yeni blok) |

**Eski satır:** `[▸] 🔬 Teknik / Bilimsel · <başlık kırpılmış>`
**Yeni satır:** `[▸] 🔬 · <maddenin başlığı>` — simgenin üstüne gelince **"Teknik / Bilimsel ek
okuma"** balonu çıkar (CSS ipucu, anında; aynı metin `title` ve `aria-label`da da duruyor).

**İkinci kaynak AÇILMADI:** simge ile kategori adı `EKOKUMA_TUR` / `AKORDEON_EK_TUR`un
**mevcut `etiket` dizgesinden** ayrılıyor (ilk boşluğa kadarı simge). Ayrı bir `{simge, ad}`
tablosu, aynı etiketi ikinci kez yazmak ve bayatlatmak olurdu (D045).

**Kartvizit/kişi satırları ayrı tutuldu:** `kv-kunye · kv-nasil · kv-magazin · kisi` satırları
ek okuma KARTI değil; onların balonunda "… ek okuma" eki YOK ("Künye", "Kişi").

### Ölçülen risk ve çaresi — başlıksız kart
Etiket simgeye inince başlıksız kart satırı BOŞ kalırdı. Ölçüm (bu oturum, 555 kartlık havuz):

| Ölçü | Sayı |
|---|---|
| `soru`/`baslik`/`ad` alanı boş kart | **197 / 555** |
| bunlardan `EKOBASLIK_ONERI` ile kurtulan | 168 |
| `sebep-sonuc` olup başlığı `sebep→sonuç`tan türeyen | 17 |
| **hiçbir başlık kaynağı olmayan (gerçek boşluk)** | **12** |

⇒ Çare: başlık yoksa **kategori adı yazıya düşer** (eski görünümün aynısı), satır asla boş
görünmez. Tarayıcıda doğrulandı: `antlasma-pasarofca-1718` satırı "📜 Antlaşma hükümleri"
basıyor (`class="ek-ak-etiket"`), başlıklı satırlar "📜 Pasarofça" basıyor.

Gerçek boşluktaki 12 kart (başlık yazılması önerilir, **bu oturumda yazılmadı — kapsam dışı**):
`antlasma-karlofca-1699` · `antlasma-pasarofca-1718` · `antlasma-kucuk-kaynarca-1774` ·
`antlasma-berlin-1878` · `hukum-alani-mesafe` · `teknik-muhendishane-i-bahri-i-humayun` ·
`teknik-osmanli-vergi-sistemi` · `teknik-muhendishane-ardil-okullar` · `teknik-nizam-i-cedid` ·
`teknik-osmanli-spor-gelenekleri` · `teknik-osmanli-kiyafet-statu` · `teknik-tophane-tersane-amire`.

### Tarayıcı sınaması (gerçek veriyle, mock yok)
`py arac/sunucu.py` (preview, port 50220) · Campo Formio maddesi (`1797-10-17`) açıldı:
- satır 1 `👤 Napolyon Bonapart` · satır 2-3 `🌐 <başlık>`
- simgenin üstüne gelince koyu balon: **"Dış Yankılar ek okuma"** — ekran görüntüsüyle görüldü.
- Mayıs 1805 maddesinde 4 satır: `👤 Ömer Mekrem` · `👤 Kavalalı Mehmed Ali Paşa` ·
  `🔄 Mısırlıların gözünden Osmanlı…` · `🔄 Mayıs 1805: Kahire'nin vali düşürmesi…`
  (maddenin günü §5'te aya düşürüldü; sınama düşürmeden önce ve sonra iki kez yapıldı)
- konsolda ek okuma ile ilgili hata YOK.

---

## 2 · H-0001 ② — Campo Formio kartlarının kategorisi

### Ölçüm
`1797-10-17` gününe bağlı ek okuma kartı: **2** — ikisi de `data/ekokuma_ihtilal.js`te ve
ikisi de `tur:"teknik-bilimsel"` taşıyordu. **İkisinin de başlığı yoktu**, yani satır yalnız
"🔬 Teknik / Bilimsel" basıyordu. Emre'nin gördüğü kusur birebir bu.

| id | eski tur | içerik | yeni tur |
|---|---|---|---|
| `ihtilal-italya-etkisi` | teknik-bilimsel | 1796-97 İtalya seferi, Cisalpine, Risorgimento | **dis-yankilar** |
| `ihtilal-venedik-paylasimi` | teknik-bilimsel | Campo Formio'da Venedik'in paylaşılması | **dis-yankilar** |

Dosyanın **9 kartının tamamı** aynı hatayı taşıyordu (hiçbiri teknik/bilimsel değil, hepsi
siyasî-diplomatik tarih) — hepsi düzeltildi:

| id | yeni tur | eklenen başlık |
|---|---|---|
| ihtilal-osmanli-genel-baglam | tartisma | İhtilâl Osmanlı'da: düşman ilan edilen Fransa, ödünç alınan bir kavram |
| ihtilal-misir-seferi-ve-kavalali | tartisma | Napolyon'un Mısır'da bıraktığı boşluğu kim doldurdu? |
| ihtilal-misir-istah-nedenleri | tartisma | Fransa Mısır'ı niçin istedi? Üç sebep |
| ihtilal-sirp-yunan-milliyetcilik | dis-yankilar | Sırp isyanı ile Yunan hareketinin İhtilâl'le bağı niçin eşit değil? |
| ihtilal-rusya-etkisi | dis-yankilar | Rusya İhtilâl'e nasıl tepki verdi: Katerina'dan 1812'ye |
| ihtilal-avusturya-etkisi | dis-yankilar | Avusturya 844 yıllık tacını niçin kendi eliyle feshetti? |
| ihtilal-prusya-etkisi | dis-yankilar | Jena bozgunu Prusya'ya ne kazandırdı? |
| ihtilal-italya-etkisi | dis-yankilar | İtalya'nın ilk birleşme provası — ve Venedik'in sonu |
| ihtilal-venedik-paylasimi | dis-yankilar | Venedik Campo Formio'da niçin ikiye bölündü? |

**Ölçüt (rapora yazılan, keyfî değil):**
- `teknik-bilimsel` = tekniğin/bilimin KENDİSİ (mühendishâne, matbaa, takvim, tahrir/narh
  defteri, icatlar).
- `dis-yankilar` = olayın BAŞKA bir devlette yankısı — kovanın mevcut iki kartının deseni
  (`dis-yankilar-otranto-1480`, `avusturya-prens-eugen-hafiza`).
- `tartisma` = Osmanlı-Mısır çerçevesinde bir soruyu tartışan çözümleme.

**Metin değişmedi** (şartname: "metni yeniden yazma, kategori/etiket düzelt"). Başlıklar
kartın KENDİ gövdesinden türetildi; `kisa` kopyalanmadı (0032/H-0008: `kisa` cevabı söyler).

### 🟡 AÇIK KALEM — kova hâlâ karışık (karar Emre/1.MURAT'ın)
`teknik-bilimsel` kovasında **72 kart** kaldı; kaynak dağılımı:

| dosya | kart | gözlem |
|---|---|---|
| EKOKUMA_DUNYA | 24 | deniz savaşları, Kutsal İttifak, Venedik-Mora, İpek Yolu, depremler/yangınlar — çoğu `tartisma`/`dis-yankilar` |
| EKOKUMA_MIMARI + MIMARI2 + CAMITARZ | 19 | cami/köprü/saray kartları — yapı tekniği mi sanat tarihi mi? **yeni bir `mimari` türü gerekebilir** |
| EKOKUMA_KURUM + KURUM2 | 16 | tahrir, narh, iltizam, mühendishâne, vergi — kovanın GERÇEK sakinleri |
| EKOKUMA_RIVAYET | 4 | Kâtib Çelebi (teknik ✓) · Karlofça yuvarlak masa protokolü (✗ `tartisma`) |
| ötekiler (TAMAMLA/LALE/YENILESME/RUSIRAN/EKOKUMA) | 9 | takvim, matbaa, kıyafet-statü, spor — karışık |

Bu oturum yalnız Campo Formio kümesini (=`ekokuma_ihtilal.js`) düzeltti; kalan 72 kart için
tek tek hüküm gerekiyor ve `mimari` gibi yeni bir tür açmak **Emre'nin kararı** (§1.6, tür
listesi Emre'nin 11 başlıklık listesinden geliyor).

---

## 3 · H-0009 — 13 Mayıs 1805 ek okuma kartı

**Yeni dosya:** `data/ekokuma_misir1805.js` → `window.EKOKUMA_MISIR1805` (1 kart)
**Yükleyici:** `js/app.js` `_EKOKUMA_DOSYA_ADLARI` listesine `"ekokuma_misir1805"` eklendi
(index.html'e DOKUNULMADI — ek okuma dosyaları ana yüke girmez).
**Kart:** `misir1805-tarih-anlatisi` · **tur `karsi-anlati`** · bağ: `1805-05|Mehmed Ali`
(§5'teki hassasiyet düşürmesinden sonra; önce `1805-05-13|…` idi), `1805-07-03|vali` ·
zincir: `bakis-misir`.

**Tür gerekçesi:** kartın konusu olayın kendisi değil, olayın **Mısır tarih yazımındaki
işlenişi**; `karsi-anlati` kovasının 29 kartı tam olarak bu şemayı taşıyor ("… gözünden
Osmanlı"). Aynı maddeye bağlı `bakis-misir` kartı Mısır DERS KİTAPLARININ genel bakışını
anlatıyor, bu kart TEK OLAYIN tarih yazımındaki yerini — mükerrer değil, tamamlayıcı.

### Kullanılan kaynaklar — hepsinin GÖVDESİ bu oturumda açıldı
1. **TDV `hursid-ahmed-pasa`** (Cevdet Küçük, 1998) — Mayıs–Ağustos 1805 günleri, ulemânın
   talebi, Hurşid'in "birkaç fellâhın isteğiyle" cevabı, kalenin kuşatılması.
2. **TDV `kavalali-mehmed-ali-pasa`** — "ulemâ, eşraf ve Mısır halkının desteğini de elde edip
   Bâbıâli tarafından valiliğe getirildi (3 Temmuz 1805)".
3. **Fatma Zehra Beyaz**, "İki Yeni Eser Münasebetiyle: Oryantalizm ve Milliyetçiliğin
   Kıskacındaki Mısır Tarih Yazımını Yeniden Düşünmek", *TALİD* 20/40 (2022/2), 297-328 —
   tam metin PDF okundu (dergipark).
4. **Halil İbrahim Erol**, [Khaled Fahmy, *Kavalalı Mehmed Ali: Osmanlı Valiliğinden Mısır
   Hükümdarlığına* değerlendirmesi], *İslâm Araştırmaları Dergisi* 46 (2021), 225-229 —
   tam metin PDF okundu.

### 🔴 BULUNAMADI / ÇELİŞKİ — dördü de kartta ve burada açık
1. **TDV'de "Ömer Mekrem" maddesi YOK** (`islamansiklopedisi.org.tr/arama` ile arandı);
   nakîbüleşrafın adı iki TDV gövdesinin ikisinde de geçmiyor. Atlasın kronoloji maddesindeki
   "Ömer Mekrem'in önderliği" bu oturumda TDV'den doğrulanamadı.
2. **"13 Mayıs 1805" günü iki TDV gövdesinde de YOK.** TDV'nin verdiği günler: 10 Mayıs
   (hil'at), 18 Haziran (Bâbıâli kararı), 3 Temmuz / 9 Temmuz, 6 Ağustos.
   ⚠️ **Atlas kaydının `kaynak:` alanı fazla söylüyor:** `data/olaylar_ek4.js:28` ve
   `data/kronoloji_misir.js:105` bu günü "kavalali-mehmed-ali-pasa (TDV)"ya dayandırıyor;
   o gövdede bu gün YOK. *Bu kayıtlar bu oturumun dosyası değil — DÜZELTİLMEDİ, bildiriliyor.*
3. **TDV kendiyle çelişiyor (D211 ⑥):** `kavalali-mehmed-ali-pasa` "valiliğe getirildi
   (3 Temmuz 1805)" derken `hursid-ahmed-pasa` kararı 18 Haziran, fermanın okunmasını
   9 Temmuz gösteriyor. Atlas 1805-07-03'ü kullanıyor; fark kartta AÇIKÇA yazıldı.
4. Mısır ders kitaplarının/tarih yazımının **tam olarak 13 Mayıs 1805'i** nasıl anlattığına
   dair doğrudan okunmuş bir inceleme bulunamadı; kart bu yüzden anlatı ÇERÇEVESİNİ veriyor,
   ders kitabı cümlesi uydurmuyor. Khaled Fahmy'nin kitabı ve el-Cebertî'nin *Acâib*'i bu
   oturumda AÇILMADI — ikisi de yukarıdaki akademik değerlendirmelerden AKTARILDI (D073).

---

## 4 · Değişen dosyalar
| Dosya | Sahibi | Durum |
|---|---|---|
| `js/app.js` | PAYLAŞILAN | 2 dokunuş: ① ek okuma satırı çizimi (şartname) ② yükleyici listesine 1 satır |
| `css/style.css` | PAYLAŞILAN | `.ek-ak-simge` bloğu (yeni) |
| `data/ekokuma_ihtilal.js` | ek okuma verisi | 9 kart: `tur` + `baslik` (metin değişmedi) |
| `data/ekokuma_misir1805.js` | YENİ | 1 kart (H-0009) |
| `denetim/EKOKUMA-SIMGE-0070.md` | bu oturum | rapor |

⚠️ `js/app.js` bu dalgada **DALGA-0070 §2 (ELE-GECIRME-ANIM-0070) ve §3 (SEFER-OK-0070)** ile
paylaşılıyor; bu oturum dosyayı düzenlerken "diskte değişmiş" uyarısı aldı — birleştirme
1.MURAT'ta, dokunulan bölgeler ayrı (`ekAkordeonKur` ve `_EKOKUMA_DOSYA_ADLARI`).


---

## 5 · M-4715 — "13 Mayıs 1805 gününü kaynağa oturt" (1.MURAT'ın ek sevki, 20 Eylül 2026)

### 5.1 · Olayın ayrıştırılması (sevk maddesi 1)
Sevk "ulemânın vali İLAN ETMESİ" ile "Bâbıâli'nin TAYİN fermanı"nı ayırmamı istedi.
**Ölçüm: atlas bunları ZATEN ayrı iki maddede tutuyor** — `1805-05-13` (Kahire, ulemâ) ve
`1805-07-03` (İstanbul, ferman + `statu_vasal` ile Mısır'ın tâbi katmana geçişi). Yani
(c) şıkkı (maddeyi ikiye ayır) GEREKMİYOR; sorun yalnız Mayıs maddesinin GÜNÜ ve KAYNAĞI.

### 5.2 · Kaynak taraması (sevk maddesi 2) — dördünün de gövdesi açıldı
| Kaynak | Ne diyor | Gün veriyor mu? |
|---|---|---|
| TDV `hursid-ahmed-pasa` (Cevdet Küçük, 1998) | "…hil'at giydirdi (10 Mayıs 1805)" · "Mısır ulemâsı ve şeyhleri Hurşid Paşa'dan görevini terketmesini istediler" · karar 18 Haziran · ferman okundu 9 Temmuz · Hurşid ayrıldı 6 Ağustos | Mayıs için yalnız **10 Mayıs** (hil'at), ilan için **HAYIR** |
| TDV `kavalali-mehmed-ali-pasa` | "ulemâ, eşraf ve Mısır halkının desteğini de elde edip Bâbıâli tarafından valiliğe getirildi (3 Temmuz 1805)" | **HAYIR** |
| Özge Özkoç, *İmparatorluk İktidarının Sınırında Osmanlı Mısırı…*, doktora tezi, Ankara Üniv. SBE, 2013, s. 66 | "…1805 yılının Mayıs ayına gelindiğinde … ulemanın ve eşrafın yanı sıra şimdi de halkın desteğini alarak Hurşit Paşa'ya karşı bir ayaklanma başlatmayı başardı… **Bunun üzerine, Mehmet Ali Paşa kendisini Mısır valisi ilan etti.**" (ferman 3 Temmuz 1805) | **HAYIR — yalnız AY** |
| Arzu Ertuğrul, *Kavalalı Mehmet Ali Paşa Dönemi'nde Mısır'da Edebi ve Kültürel Hayat (1805-1848)*, yüksek lisans tezi, İstanbul Üniv. SBE, 2018, s. 52 | "**Mayıs 1805'te** Kahire'ye bir atama fermanı gönderildi. **Aynı ay**, ulema ve Kahire'nin ileri gelenleri, Hurşid Paşa'nın Mısır valiliğinden alınması ve yerine Mehmet Ali Paşa'nın atanması için **talepte bulundular**." | **HAYIR — yalnız AY** |

**Bulunamadı:** "13 Mayıs 1805" günü okunan hiçbir kaynakta geçmiyor. Cambridge History of
Egypt bölümleri ve Marsot/Fahmy'nin kendi kitapları **ödeme duvarının ardında**, açılamadı;
TDV'de "Ömer Mekrem" maddesi yok. Gün başka bir kaynakta bulunabilir — bu rapor "yok"
demiyor, **"okunan dört kaynakta yok"** diyor.

### 5.3 · Hüküm: (b) hassasiyeti düşür
`t:"1805-05-13"` → **`t:"1805-05"`** · `gun:"13 Mayıs 1805"` → **`gun:"Mayıs 1805"`**.
Biçim keyfî değil: kronolojide ay hassasiyeti için zaten kullanılan biçim (ölçüm: 1662 gün
hassas, **20 ay hassas** `t:"YYYY-MM"` kaydı var — `olaylar.js` 1299-01, 1514-08 …).
`kaynak:` alanı dört kaynağın künyesine çevrildi; `d:` alanına gün kaynaksızlığı ve
kaynakların olayı nasıl anlattığı AÇIKÇA yazıldı (CLAUDE.md §4 · D210 · D213).

### 5.4 · Değişmez 2 — ÖNGÖRÜ ÖNCE YAZILDI, SONRA ÖLÇÜLDÜ (sevk maddesi 4)
**Öngörü (ölçümden önce):** madde 12 gün geriye kayarsa, yalnız bu maddeyle kapanan ve
`1805-05-31`–`1805-06-12` aralığına düşen bir kırılma varsa AÇILIR.
**Ölçüm** (`denetle.py`nin kendi yükleyicisiyle, 3921 yerleşim × 1719 madde): 1805 yılında
**67 kırılma ucu** var; hepsinin bugünkü en yakın maddesi ile "05-13 yok, 05-01 var"
senaryosundaki en yakın maddesi karşılaştırıldı — **AÇILAN KIRILMA: 0**. Sebebi ölçüldü:
Mısır'ın toprak değişimi (47 yerleşim, `v:f misir-kavalali`) **1805-07-03**'e bağlı, Mayıs
maddesine değil; Hicaz kırılmaları (Medine/Hayber `1805-06-01`) kendi maddesine oturuyor.
**Koşu:** `py arac/denetle.py` yamadan ÖNCE ve SONRA koşturuldu — çıktı **birebir aynı**,
`SONUÇ: temiz`.

### 5.5 · Yan etki: ek okuma bağları da düştü (ölçülüp düzeltildi)
`_ekBagEslesir` gün dizgisinde **TAM EŞİTLİK** arar. `1805-05-13` → `1805-05` değişimi,
o güne bağlı **iki ek okuma kartını** sessizce görünmez bırakırdı (D099 sınıfı):
`misir1805-tarih-anlatisi` (bu oturum) ve `bakis-misir` (EKO-BAKIS-0069). İkisinin de
`olay:` bağı `1805-05|Mehmed Ali` olarak güncellendi; tarayıcıda gerçek veriyle doğrulandı —
madde açıldığında dört satır çıkıyor (👤 Ömer Mekrem · 👤 Kavalalı Mehmed Ali Paşa ·
🔄 Mayıs 1805: Kahire'nin vali düşürmesi… · 🔄 Mısırlıların gözünden Osmanlı…).
Kartın başlığı ve son paragrafı da yeni tarihe göre düzeltildi.

### 5.6 · 🟡 DOKUNMADIM — hüküm 1.MURAT'ın
Maddenin **başlık cümlesi** (`b:`) hâlâ *"Kahire ulemâsı Mehmed Ali'yi vali ilan etti"* diyor.
Okunan iki tez bunu böyle kurmuyor: ulemâ/eşraf/halk Hurşid'in **azlini istedi**, Mehmed Ali
**kendini vali ilan etti**, Bâbıâli 3 Temmuz'da **tanıdı**. Sevk bana "yalnız bu maddenin
tarih/kaynak alanları"nı verdiği için `b:` DEĞİŞTİRİLMEDİ. Önerim:
*"Kahire ulemâsı ve eşrafı Hurşid Paşa'yı düşürdü, Mehmed Ali valiliği ilan etti"*.

### 5.7 · Bu bölümde değişen dosyalar
| Dosya | Değişiklik |
|---|---|
| `data/olaylar_ek4.js` | 1805 Mayıs maddesi: `t` · `gun` · `kaynak` · `d:`ye hassasiyet notu |
| `data/kronoloji_misir.js` | aynı maddenin Mısır perspektifli kopyası: `t` · `kaynak` · `d:` notu |
| `data/ekokuma_misir1805.js` | `olay:` bağı · başlık · son paragraf · başlık notu |
| `data/ekokuma_bakis.js` | `bakis-misir` kartının `olay:` bağı (yalnız 1805 günü) |
| `denetim/EKOKUMA-SIMGE-0070.md` | bu bölüm |
