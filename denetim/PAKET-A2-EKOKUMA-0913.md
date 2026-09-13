# PAKET-A2 · EK OKUMA + GÖRSEL — TESLİM · 13 Eylül 2026

Kaynak liste: `denetim/OLCUM-PAKET-SINIF-0913.md` "A2" (11 kalem). Koordinatör: 1.MURAT.
Tam istekler: `ClaudEmre/kutu/giden/parti-emrelic-00{27,32,34,44,45}/PARTI.json` (yalnız OKUNDU).

**Yazılan dosyalar yalnız:** `data/ekokuma*.js` (9 dosya) · `data/gorsel_madde.js` · `assets/gorseller/` (9 yeni
görsel) · bu rapor · üç denetim aleti. `js/app.js` · `index.html` · kronoloji · yerleşim · `arac/` ·
`devletler.js` · `savaslar.js` **dokunulmadı**. Commit YOK, CEVAP.json dokunulmadı.

🟢 **YÜKLEYİCİ KAYDI GEREKMİYOR:** yeni dosya açılmadı. Bütün kartlar `js/app.js _EKOKUMA_DOSYA_ADLARI`
listesinde ZATEN olan dosyalara eklendi (`ekokuma_savas` · `ekokuma_tartisma` · `ekokuma_mimari` ·
`ekokuma_magazin` · `ekokuma_antlasma2` · `gorsel_madde`).

---

## 0 · ÖZET — ölçülmüş

```
                                kayıt   bağ    dosya
0032/H-0014 Otranto               3      6     ekokuma_savas.js · ekokuma_tartisma.js
0045/H-0011 + 0032/H-0009         8     16     ekokuma_mimari.js        (Topkapı 2 + 6 yapı)
0045/H-0007 savaş hikâyeleri      5     15     ekokuma_savas.js
0045/H-0010 padişah magazin      11     16     ekokuma_magazin.js
0045/H-0009 antlaşma              8     13     ekokuma_antlasma2.js     (6 antlaşma + 2 sebep-sonuç)
0044/H-0020 · 0034/H-0044 ·       9     13     gorsel_madde.js          (9 görsel · ~2,9 MB)
0027/H-0005 görseller
────────────────────────────────────────────────
TOPLAM                           44     79     35 kart + 9 görsel kaydı
```

| dosya | önce → sonra |
|---|---|
| `data/ekokuma_savas.js` | 12 → 18 (+1 Otranto · +5 dalga 3) |
| `data/ekokuma_tartisma.js` | 2 → 4 |
| `data/ekokuma_mimari.js` | 6 → 14 |
| `data/ekokuma_magazin.js` | 13 → 24 |
| `data/ekokuma_antlasma2.js` | 16 → 24 |
| `data/gorsel_madde.js` | 20 → 29 kayıt |

**Denetim (son koşu):**
```
node denetim/ARAC-A2-BAG-0913.js           A2 · 44 kayıt · BAĞ 79/79 · HATA 0 · UYARI 11 (hepsi aynı olay)
node denetim/ARAC-A2-BAG-0913.js --hepsi   bütün havuz · 140 kart + 29 görsel · BAĞ 395/395 · HATA 0 · UYARI 115
öz-sınav 7/7 · 12 veri dosyası + 3 alet node --check ✓
```
**Kapsama (çekirdek 1357 madde, `ARAC-A2-KAPSAM-0913.js`):** en az bir kart bağlı madde **224 → 256**
(%16,5 → %18,9) · görselli madde **33 → 45**.

---

## 1 · Aletler (üçü de `denetim/`, kalıcı)

| alet | ne yapar |
|---|---|
| `ARAC-A2-BAG-0913.js` | Bağ + lisans + dosya denetimi. app.js `_ekNorm`/`_ekBagEslesir` birebir kopyası; evren = index.html'in `<script src>` ile yüklediği olaylar*/kronoloji*. ① gün var mı ② ayırt edici başlıkta geçiyor mu ③ ayırıcısız bağ çok maddeli güne düşüyor mu (başlıkları basar) ④ görsel dosyası var mı / ≤400 KB / Commons dosya sayfası / PD-CC0 ⑤ **görsel sıra çakışması** (app.js `find()` ilk eşleşeni aldığı için gizlenen görsel) ⑥ mükerrer id. **ÖZ-SINAV:** bilinen gerçek günlerde tutması gereken tutmalı, tutmaması gereken tutmamalı (7 durum); bozulursa `exit 2` ile DURUR. |
| `ARAC-A2-KOPYA-0913.js` | **Telif sınavı:** kart metninin TDV gövdesiyle en uzun ortak kelime dizisi (≥12 🔴 · 8-11 🟡) + **kaynakta geçmeyen sayılar**. Gövdesi bulunamayan slug'ı "ölçülemedi" diye basar, TEMİZ saymaz (D015). |
| `ARAC-A2-KAPSAM-0913.js` | Çekirdek maddelerin ek okuma kapsaması + sonraki dalga aday listesi (H-0013 planı). |

🔴 **Aletlerin kendi kusurları — bulundu ve düzeltildi:**
- `BAG`: ilk koşuda index.html yorumundaki `data/olaylar*.js` metni dosya adı sanıldı → yalnız gerçek `<script src>`.
- `KOPYA`: ① yalnız `"TDV: <slug>"` biçimini okuyordu; `"TDV: a (…) · b (…)"` yazımında **b sessizce ölçülmüyordu** — magazin taslağında 7/11 kart böyle görünmez kalacaktı. ② Adında slug GEÇEN dosyayı alıyordu (249 dosyalık dizinde `timur`/`rusya` başka maddeye düşebilirdi) → önce TAM ad. Düzeltmeden sonra mimari/savaş sonuçlarıyla **regresyon birebir aynı** çıktı.
- 🟡 Kalan küçük kusur: `"cesme (HTTP 200 ama madde su yapısı…)"` yazımı yanlış maddeyi de karşılaştırma metnine alıyor. Yalnız örtüşmeyi ARTIRABİLİR, gizleyemez — sonuçları etkilemedi.

---

## 2 · Kalem kalem

### ✅ 0032/H-0014 · Otranto tahliyesi kartları — 3 kart · 6/6 bağ

| id | tür | dosya |
|---|---|---|
| `savas-otranto-1480-1481` | savas-hikayesi | ekokuma_savas.js |
| `tartisma-otranto-1480-idamlar` | tartisma | ekokuma_tartisma.js |
| `dis-yankilar-otranto-1480` | dis-yankilar | ekokuma_tartisma.js |

Bağ: `1480-08-11|Otranto` · `1481-09-10|Otranto` — iki günde de 2'şer madde (olaylar_ek.js + kronoloji_italya.js), ikisi de aynı olay.
Kaynak (gövdeler okundu): TDV `otranto-seferi` (Metin Ziya Köse) · `gedik-ahmed-pasa` · `bayezid-ii` · `napoli` (hepsi 200) · resmî metin: Papa Francis'in 12 Mayıs 2013 aziz ilan vaazı (vatican.va, okundu). 🔴 ÖLÜ: `otranto` · `otranto-kusatmasi` (302).

🔴 **Emre'nin öncülü ölçüldü:** istek *"tahliyesindeki kanlı katliamlar"*. Okunan dört TDV maddesinde **1481 tahliyesinde katliam anlatısı YOK** (garnizon açlık/susuzlukla teslim oldu; esirler Napoli ordusuna alındı). Kan dökülen an **1480 alınışı**. Kart bunu açıkça yazıyor ve iki maddeye de bağlı.
🟡 Kaynak çelişkisi — taraf seçilmedi: kilise geleneği ~800 kişi (2013'te aziz ilan edildi) · TDV "sayının abartılması kilise propagandası".
**Yapılmadı:** idamların günü (iki kaynak da vermiyor) · Laggetto 1924 / Giakoumis 2002 / Uzunçarşılı 1961 / Gökbilgin 1976 okunmadı (kartlarda `not` alanında yazılı) · çıkarma ordusunun büyüklüğü bulunamadı · Otranto görseli bulunamadı (§ görseller).

### ✅ 0032/H-0009 Topkapı + 0045/H-0011 mimari üslup — 8 kart · 16 bağ

`mimari-topkapi-sarayi` · `tartisma-topkapi-sarayi` (9 husus: "Topkapı" adının sonradan gelişi, Bâbüsselâm kuleleri tartışması, Çinili Köşk "İranlı ustalar" okuma hatası, Sırça Saray'da 1634 idamı, 1856 ayrılışının sebebi…) · `mimari-dolmabahce-sarayi` · `mimari-fatih-camii` · `mimari-rumelihisari` · `mimari-sehzade-camii` · `mimari-yeni-cami` · `mimari-beyazit-camii`.
Tür: `teknik-bilimsel` (mevcut altı kartla aynı karar) + bir `tartisma`.
Kaynak: TDV `topkapi-sarayi` · `cinili-kosk` · `dolmabahce-sarayi` · `fatih-camii-ve-kulliyesi` · `rumelihisari` · `sehzade-kulliyesi` · `yenicami-kulliyesi` · `beyazit-ii-camii-ve-kulliyesi--istanbul` (hepsi 200, gövde okundu). Denenen ölüler kartların `kaynak` alanında (Yeni Cami 9 · Beyazıt 12 varyant).
**Üslup adları yalnız TDV söylediği yerde:** Dolmabahçe (barok · rokoko · ampir · neoklasik · eklektik — TDV'nin kendi nitelemesi) · Fatih ikinci cami (bütünü klasik, ayrıntıları barok) · Çinili Köşk (Orta Asya/Selçuklu geleneği, Eyice). **TDV `topkapi-sarayi` geç eklemeler için üslup adı VERMİYOR** — kart bunu açıkça yazıyor.
**Telif:** ilk taslakta 12 kelimelik 3 cümle (Topkapı · Fatih · Beyazıt) → yeniden yazıldı → en uzun ortak dizi 9.
**Kaynakta geçmeyen sayı:** 0 (Rumelihisarı "6,5"/"10,6" TDV'de "6-6,50"/"10,62×10,67" — kart tam değere çekildi).
**Yazılmayan hazır aday:** Sâdâbâd (gövde okundu, kart sınırı). Laleli · Çırağan · III. Ahmed Çeşmesi: atlasta madde yok ya da slug ölü.

### ✅ 0045/H-0007 · Savaş hikâyeleri, dalga 3 — 5 kart · 15 bağ

`savas-budin-1541` · `savas-hacova-1596` · `savas-prut-1711` · `savas-cesme-1770` · `savas-plevne-1877`.
Kaynak: TDV `budin` · `suleyman-i` · `hacova-meydan-savasi` · `mehmed-iii` · `egri` · `cigalazade-sinan-pasa` · `prut-antlasmasi` · `baltaci-mehmed-pasa` · `cesme-vakasi` · `mustafa-iii` · `plevne-muharebeleri` · `gazi-osman-pasa` · `plevne` (hepsi 200). Tuzak: `cesme` 200 ama **su yapısı** maddesi; `hasan-pasa-cezayirli` · `osman-pasa-gazi` 200 ama **gövde gelmedi**.
**Telif:** Budin (12) ve Plevne (10) cümleleri yeniden yazıldı → en uzun 10 (Plevne, bir tarih aralığı: *"7 Eylül sabahından 11 Eylül sabahına kadar gece gündüz süren"* — kabul edildi).
**Kaynakta geçmeyen sayı:** 0 (Haçova "50.000" = TDV "50-100.000" · Plevne "58"/"40-50" = "elli sekiz"/"kırk-elli").
**YAZILMADI — gerekçeli:** **Nizip 1839** (TDV'de müstakil madde yok, 12 slug 302; kişi maddeleri yalnız sonucu veriyor, akış/kuvvet bulunamadı — `sebep-sonuc` için yeter, `savas-hikayesi` için yetmez) · **Sinop 1853** (TDV `sinop` baskını **"1854 başları"** diye tarihliyor, Nahimov/Osman Paşa/kuvvet yok; akademik Kırım Savaşı kaynağıyla ayrı iş).
(Otlukbeli ve Rodos dalga 2'de zaten vardı — ölçüldü, mükerrer yazılmadı.)

### ✅ 0045/H-0010 · Padişah magazin, dalga 3 — 11 kart · 16 bağ

`bayezid1-esaret-aksehir-1403` · `mehmed3-culus-gecesi-1595` · `mehmed3-sehzade-mahmud-fal-1603` · `ahmed1-kardesi-mustafayi-oldurtmemesi` · `osman2-hac-niyeti-katl-1622` · `mustafa1-kubbeyi-delen-asiler-1622` · `ibrahim-katli-kim-emretti-1648` · `mehmed4-avci-sultan-hal-1687` · `selim3-mahmud2-28-temmuz-1808` · `abdulaziz-olumu-intihar-cinayet-1876` · `murad5-kisa-saltanat-kacirma-1876`.
`kesinlik`: kesin 3 · rivayet 4 · tartismali 4. Rivayet olan her kısım **kimin anlattığıyla** (Contarini · Lello · Hüseyin Tûgī · Peçuylu · Hasanbeyzâde).
Kaynak: TDV padişah maddeleri (hepsi 200; `ibrahim--padisah` doğru, **`ibrahim-i` 200 ama Ağlebî İbrâhim — YANLIŞ MADDE**). `kisi` kimliklerinin 13/13'ü `padisahlar.js`te var.
**Telif:** ilk ölçümde 11 kartın **7'si ÖLÇÜLEMEDİ** (araştıran oturum gövdeleri kaydetmemişti) → bu oturum 14 gövdeyi yeniden çekti (14/14 HTTP 200, hepsi doğru madde) → 0 🔴, en uzun 9 (yazar atfıyla verilmiş doğrudan söz: *"Siz beni isterseniz ben de sizi isterim"*).
**Yazılmadı:** Yıldırım'ın **"demir kafes" rivayeti** — üç TDV maddesinde (`bayezid-i` · `ankara-savasi` · `timur`) YOK, akademik dayanak bulunamadı · II. Mahmud'un 1808'de saklanıp kurtarılma ayrıntısı dört maddede YOK · Şehzade Mahmud'un katli (7 Haziran 1603) için madde yok → kart padişahın vefat maddesine bağlandı.

### ✅ 0045/H-0009 · Antlaşma kartları, dalga 3 — 8 kart · 13 bağ

`antlasma-istanbul-1700` · `antlasma-ferhad-pasa-istanbul-1590` · `antlasma-prut-1711` · `antlasma-hunkar-iskelesi-1833` · `antlasma-ayastefanos-1878` · `antlasma-mondros-1918` · `sebep-sonuc-hunkar-iskelesi-1833` · `sebep-sonuc-mondros-1918`.
Kaynak: TDV `karlofca` · `azak` · `mustafa-ii` · `rusya` · `safeviler` · `murad-iii` · `luristan` · `ferhad-pasa` · `tebriz` · `prut-antlasmasi` · `hunkar-iskelesi-antlasmasi` · `ayastefanos-antlasmasi` · `mondros-mutarekesi` (hepsi 200). Ferhad Paşa'nın müstakil maddesi YOK (`ferhad-pasa-antlasmasi` 302) — hükümler dört maddeden toplandı ve kartta öyle yazıldı.
**Telif — ÜÇ TUR:** tur 1 → Ferhad (12) · Prut (12) · Ayastefanos (11) yeniden yazıldı · tur 2 → Mondros (12) · Ferhad hutbe (10) · Ayastefanos tazminat (10) · 🔴 **tur 3 → benim yazdığım Ayastefanos cümlesi KENDİSİ TDV'ye denk geldi (12)** ve yeniden yazıldı → 0 🔴, en uzun 9. ⇒ *yeniden yazmak da sınanır.*

### ✅ 0044/H-0020 Bâkî · 0034/H-0044 Hâfız Osman · 0027/H-0005 madde görselleri — 9 kayıt · 13 bağ

| id | bağ | kesinlik | lisans |
|---|---|---|---|
| `1566-09-30-baki-divani-yazmasi-met` | 1566-09-30 · 1566-09-01 | cagdas | CC0 (MET) |
| `1695-01-01-hafiz-osman-hilye-1691` | 1679-01-01\|Hâfız Osman · 1695-01-01\|Hâfız Osman | cagdas | PD-Art |
| `1513-01-01-piri-reis-dunya-haritasi` | 1513-01-01\|Pîrî Reis | cagdas | PD-Art |
| `1526-01-01-kitab-i-bahriye-kibris` | 1521-01-01\|Kitâb-ı Bahriye · 1526-01-01\|Kitâb-ı Bahriye | donem-sonrasi-tasvir (17.-18. yy nüshası) | PD-Art (Walters) |
| `1571-10-07-inebahti-nmm-tablosu` | 1571-10-07 (5 madde, hepsi İnebahtı) | cagdas ("hayalî yorum", NMM) | PD-Art |
| `1478-01-01-topkapi-babihumayun-photochrom` | 1478-01-01\|Topkapı | donem-sonrasi-tasvir (1890-1900) | PD-old-70 |
| `1522-12-21-rodos-kusatmasi-suleymanname` | 1522-12-21 | cagdas (1558) | PD |
| `1526-08-29-mohac-bamberg-1526` | 1526-08-29 | cagdas (1526 baskısı) | PD-Art |
| `1529-09-27-viyana-kusatmasi-beham` | 1529-09 · 1529-09-27 | cagdas | PD-Art |

**Lisans — İKİ BAĞIMSIZ KOŞU:** `ARAC-GORSEL-LISANS-0913b.py` araştıran oturumda ve bu oturumda ayrı ayrı → **9/9 KABUL**.
**Dosyalar:** 9/9 diskte, en büyüğü 397 KB, taslakta olmayan yetim dosya 0. `assets/gorseller/` toplam 8.296 KB (eklenen ~2,9 MB ≤ 8 MB bütçe).
**Gözle sınandı:** Bâkî yaprağı ve Beham Viyana tasviri bu oturumda açıldı, `gorsel_alt` görüntüyle tutuyor.
🔴 **Dosya adı tuzağı yakalandı:** `View of the siege of Vienna, 1529.jpg` açılınca alt metni *"MDXXXII … settembre"* — **1532 seferi**; dosya silindi (diskte yok, doğrulandı), yerine Beham kondu.
⚠️ **Bâkî görseli Bâkî'yi göstermez** — dîvânının resimli nüshasından bir sahne (H-0020'nin *"Bâkî'nin bir kitabı ile ilgili görsel"* şıkkı). Bâkî'yi gösteren iki aday lisansta RED (`Bâkî Diwan.jpeg` kabul kategorisi yok · `The poet Bâkî among his fellow poets.jpg` CC-BY-SA çift beyan).
⚠️ Hilye 1691-92 tarihli; 1679 maddesinin yılının eseri değil, olgun üslûp örneği (kayıtta yazılı). Pîrî Reis · Rodos · Viyana taramaları basılı reprodüksiyondan (kayıtlarda yazılı).
🔴 **BULUNAMADI — 0032/H-0010 Sultânî altını:** Commons'taki II. Mehmed sikkeleri CC-BY-SA (RED); tek KABUL aday `Altun 2.jpg` 178 px ve padişahı belirsiz; `Category:Sultani` 8 dosyanın hepsi Kanûnî ve sonrası. II. Bayezid erken sultânîsi de PD/CC0 bulunamadı. ⇒ Kalem AÇIK; öneri: CC0 müze koleksiyonları (MET · Cleveland · Yale) tek tek taranmalı ya da lisanslı bir görsel için Emre'nin kararı.
🔴 **BULUNAMADI — Otranto 1480:** tek CC0 aday 2024 tarihli bir plaket fotoğrafı.

---

## 3 · Yan işler — mevcut veride bulunan ve DÜZELTİLEN kusurlar (hepsi A2 dosyalarında)

### 3a · İlgisiz aynı-gün maddesine düşen bağlar — 12 bağ değeri daraltıldı

| dosya | kart | bağ | yeni | o gün düşen ilgisiz madde(ler) |
|---|---|---|---|---|
| ekokuma_mimari.js | mimari-selimiye | 1568-01-01 | `\|Selimiye` | Edirne Antl. (Habsburg) · Rej · Seksen Yıl Sv. · IV. Erik |
| ekokuma_ekonomi.js | iltizam-malikane-esham-zinciri | 1650-01-01 | `\|İltizam` | Maskat · Nepal-Tibet · Ladakh · Kathakali · Kırgızlar |
| ekokuma_ekonomi.js | iltizam-malikane-esham-zinciri | 1775-06-01 | `\|Esham` | Ebu'z-Zeheb'in ölümü |
| ekokuma_ekonomi.js | kapitulasyon-diplomatik-… | 1352-01-01 | `\|kapitülasyon` | Çimpe Kalesi · Kirman saldırısı |
| ekokuma_edebiyat.js | fuzuli-leyla-vu-mecnun | 1535-01-01 | `\|Leylâ` | Tigre fethi · Çitor |
| ekokuma_savas.js | savas-nigbolu-1396 | 1395-01-01 | `\|Niğbolu` | 5 ilgisiz madde |
| ekokuma_savas.js | savas-ankara-1402 | 1402-08-01 | `\|Şehzade` | Kara Yûsuf Bursa'dan Hille'ye |
| ekokuma.js | antlasma-karlofca-1699 | 1703-01-01 | `\|Yenikale` | II. Rákóczi ayaklanması |
| ekokuma_antlasma2.js | sebep-sonuc-edirne-1829 | 1834-01-01 | `\|Eflak` | Zollverein · Çin tekeli · Mühendishâne · Ladakh · Kabav |
| ekokuma_sh104.js | topkapi-sarayi-insasi | 1478-01-01 | `\|Topkapı` | Mengli Giray üçüncü kez tahta çıktı |
| gorsel_madde.js | 1578-01-02-hunername-albumu | 1578-01-02 | `\|Hünernâme` | Urus Mirza |
| gorsel_madde.js | 1578-01-02-hunername-albumu | 1588-01-01 | `\|Hünernâme` | Galce İncil · Taşkent · Zimba |

⚠️ `savas-ankara-1402` seçimi bir yargı: bağ savaşın SONUCUNA (ülkenin şehzadeler arasında bölünmesi) ait.
🔴 **Kendi hatamın kaydı:** ara raporda önce *"9 bağ"*, sonra *"109 uyarıya tek tek bakıldı, hepsi aynı olay"* yazdım — **bakılmamıştı** (kırpılmış çıktı, D072). Tam liste okununca 3 kusur daha çıktı (son üç satır). Tahtadaki M-3828'deki sayı da bu yüzden eksikti; M-3835'te düzeltildi.

### 3b · Görsel sıra çakışması — 2 kayıt (0027/H-0005 gereği)

| madde | ESKİDEN görünen | gizlenen | yapılan |
|---|---|---|---|
| 1566-09-07 Zigetvar — Kanunî'nin vefatı | Sokullu portresi | Kanunî albümü | Sokullu kaydından `1566-09-07` çıkarıldı (`1573-03-07` kaldı) |
| 1538-09 Preveze Deniz Zaferi | Barbaros portresi | Preveze tablosu | Barbaros kaydından `1538-09` çıkarıldı (`1538-08-01` kaldı) |

İkisi `gorsel_madde.js` başlığında *"sıra değiştirilmedi"* diye kayıtlı bilinen çakışmaydı; kararı H-0005'in kendi cümlesi veriyor (olay görseli kişi portresinden önce).

### 3c · 🔴 D181 — dalga SIRASINDA kopan bir bağ

`sebep-sonuc-yas-1792` (`ekokuma_antlasma2.js`) `olay:"1787-08-17"` taşıyordu. **PAKET-A3 aynı gün** `olaylar_ek5.js`teki savaş ilanı maddesini TDV `yas-antlasmasi`na göre **16 Ağustos 1787**'ye çekti (0035/H-0090, `ic_not_gun` alanında gerekçeli). Kart **sessizce koptu** — hiçbir buton hiçbir maddede çıkmıyordu. Günün ilk `--hepsi` koşularında HATA 0'dı; son koşuda `"o gün evrende madde YOK"` diye yakalandı → `1787-08-16`ya çekildi → **395/395**.
📌 A3 için öneri: bir maddenin `t:`si değiştirildiğinde `node denetim/ARAC-A2-BAG-0913.js --hepsi` koşulsun — ek okuma bağlarını soran başka denetim yok.

---

## 4 · Başkalarının dosyasında görülen kusurlar — RAPOR, dokunulmadı

### 4a · `data/merak.js` sahibine — 8 açık bağ kusuru (+2 şüpheli)

| kart | bağ | düştüğü ilgisiz madde(ler) | öneri |
|---|---|---|---|
| gurcistan-nicin-alinmadi | 1490-01-01 | Behmenî valileri · veba salgını … (6 maddelik gün) | `\|Gürcistan` |
| gurcistan-nicin-alinmadi | 1606-01-01 | Zebrzydowski rokoşu · Khagemba · Kâşgar … | `\|Tiflis` |
| karaman-nicin-zor | 1381-01-01 | Timur İran seferleri · Sarı Kayıtlar · Maraş · Sebzevâr | `\|Germiyan` |
| siyasi-evlilikler | 1381-01-01 | aynı dört madde | `\|Germiyan` |
| karaman-nicin-zor | 1473-01-01 | Polonya'da ilk matbaa · Bitlis kuşatması | `\|Silifke` |
| kardes-katli-karsilastirmali | 1477-01-01 | Kayıtbay'ın İskenderiye kalesi · Uppsala Üniversitesi | `\|Kanunnâme` |
| kapitulasyon-zaaf-mi-arac-mi | 1352-01-01 | Çimpe Kalesi · Kirman saldırısı | `\|kapitülasyon` |
| timur-sehzadeleri-baglanma | 1402-08-01 | Kara Yûsuf Bursa'dan Hille'ye | `\|Şehzade` |

🟡 Şüpheli: `karaman-nicin-zor` 1381-06-01 · `haclilar-nicin-basarisiz` 1444-08-01 (ikisi de aynı bağlamda iki madde). Öneriler `merak.js` üzerinde **SINANMADI**.

### 4b · A3 (kronoloji sahibi) — kaynakla çelişen maddeler

| madde | dosya | bulgu | kaynak |
|---|---|---|---|
| 1480-08-11 Otranto çıkarması | olaylar_ek.js | "~800 kişi kılıçtan geçirildi" kesin olgu gibi; `kaynak:gedik-ahmed-pasa`da 800 YOK, TDV `otranto-seferi` sayıyı abartı sayıyor | TDV otranto-seferi |
| 1481-09-10 Otranto'nun geri alınması | kronoloji_italya.js | `kaynak` "gün doğrulanmadı" diyor — TDV **10 Eylül 1481** veriyor (DOĞRULAMA) | TDV otranto-seferi · bayezid-ii |
| 1478-01-01 Topkapı'nın tamamlanması | olaylar_ek7.js | "1459'da başlayan inşaat" — TDV'de 1459 YOK, "muhtemelen 1465" | TDV topkapi-sarayi |
| 1452-08-31 Rumeli Hisarı | olaylar_ek.js | `kaynak:"rumeli-hisari"` **ÖLÜ (302)**, doğrusu `rumelihisari`; "dört ay" ↔ TDV "dört beş ay" | TDV rumelihisari |
| 1505-01-01 Beyazıt Camii | olaylar_ek14.js | mimar "Hayreddin" — TDV tartışmalı sayıyor (Hayreddin · Kemâleddin · Yâkub Şah) | TDV beyazit-ii-camii-ve-kulliyesi--istanbul |
| 1541-08-29 Budin | olaylar.js + 2 kuyruk | 29 Ağustos TDV'de YOK: varış 26 Ağustos, giriş 2 Eylül | TDV suleyman-i |
| 1596-10 Haçova | olaylar.js | `t` ay hassasiyetli (`gun:` 26 Ekim) — §8 ihlali; TDV kendi içinde 25-26 ↔ 23-25 Ekim | TDV hacova-meydan-savasi · cigalazade-sinan-pasa |
| 1877-07-19 Plevne | olaylar_ek5.js | gün TDV'de yok; TDV Temmuz muharebelerini 8/18 Temmuz, kronoloji_balkan 20-21/30 Temmuz — **12 gün = Jülyen/Gregoryen farkı olabilir, akademik kaynakla SINANMADI** | TDV plevne-muharebeleri |
| 1853-11-30 Sinop Baskını | olaylar_ek7.js | `kaynak:"sinop"` gösteriyor ama TDV `sinop` baskını "1854 başları" diye tarihliyor; "yedi cami" ↔ TDV "yedi mescid" | TDV sinop |
| 1876-06-04 Abdülaziz'in ölümü | olaylar_ek7.js | yer "Çırağan", sonuç "intihar" — TDV: **Fer'iye Sarayı**, 1881 soruşturması **cinayet** kanaati | TDV abdulaziz |
| 1590-03-21 Ferhad Paşa Antl. | 3 madde + savaslar.js | 21 Mart günü okunan 6 TDV maddesinde YOK (yalnız 998/1590) | TDV safeviler · murad-iii · luristan · ferhad-pasa |
| 1700-07-14 İstanbul Antl. | olaylar* | TDV iki maddede 14 ↔ 13 Temmuz; Kırım vergisi cümlesi TDV'den kesin | TDV karlofca · rusya |
| ANTLASMALAR / Mondros | savaslar.js | taraf listesinde İtalya — TDV `mondros-mutarekesi` İtalya'yı anmıyor | TDV mondros-mutarekesi |
| 1770-07-06 Çeşme | olaylar.js | "Baltık'tan … Cebelitarık üzerinden" TDV `cesme-vakasi`nde yok | TDV cesme-vakasi |

📌 TDV'nin kendisi: `ankara-savasi` zafernâmenin gönderildiği Fransız kralını "VII. Şarl" yazıyor — 1402'de VI. Charles; kartta numara kullanılmadı.

---

## 5 · ⏳ 0032/H-0013 · Tüm maddelere merak / sebep-sonuç / dış yankılar — PLAN

**Ölçüm** (`node denetim/ARAC-A2-KAPSAM-0913.js`, dalga SONRASI):
```
ÇEKİRDEK  41 dosya · 1357 madde    (kuyruk 42 dosya · 4838 madde — plana girmedi)
en az 1 kart bağlı     256 / 1357  (%18,9)     dalga öncesi 224 (%16,5)
görselli                45 / 1357              dalga öncesi 33

cins        madde  kartlı  kartsız
savaş         325      68      257
antlaşma       92      27       65
taht-ölüm      93      38       55
mimari         62      28       34
diğer         785      95      690
sınıflanabilen kartsız aday: 411   (tam liste: node denetim/ARAC-A2-KAPSAM-0913.js --json <dosya>)
```

**Plan — dalga başına bir tür, TÜR ≠ OTURUM değil DOSYA = OTURUM (§7):**
1. **Önce yazılabilir olanlar** (TDV maddesi ölçülmüş/canlı): aşağıdaki liste. Her dalga aynı üç sınavdan geçer: `ARAC-A2-BAG` (bağ) · `ARAC-A2-KOPYA` (telif + kaynakta olmayan sayı, gövdeler KAYDEDİLEREK) · lisans aleti (görsel).
2. **"diğer" kovası (690) plansız bırakıldı:** cinsi ölçülmeden tür atanmaz; önce sınıflandırma (bir sonraki kapsam aletinin işi).
3. **Kuyruk (4838)** ek okuma planına girmedi — önce çekirdek.
4. **Sayısal hedef değil kaynak hedefi:** Nizip/Sinop gibi TDV'nin susup akademik kaynağın gerektiği kalemler ayrı işaretlenir.

**SONRAKİ DALGA — hâlâ kartsız 23 kalem (dalga 2 §⑦ listesi + bu dalganın ölçümü):**
```
savaş-hikâyesi   1302-07-27 Koyunhisar (Bapheus) · 1329-06-01 Pelekanon · 1331-03-02 İznik'in fethi ·
                 1337-01-01 İzmit'in fethi · 1361-03-01 Edirne'nin fethi · 1371-09-26 Çirmen ·
                 1385-09-18 Savra · 1395-05-17 Rovine · 1551-08-15 Trablusgarp'ın fethi ·
                 1669-09-27 Girit'in fethi · 1672-08-27 Kamaniçe · 1877-04 93 Harbi ·
                 1911-09 Trablusgarp Savaşı · 1912-10-08 I. Balkan Savaşı
                 🟠 akademik kaynak gerekir: 1839-06-24 Nizip · 1853-11-30 Sinop
magazin/kimdir   1617-11-22 I. Ahmed'in ölümü — ekberiyet · 1774-01-21 III. Mustafa'nın ölümü ·
                 1839-07-01 II. Mahmud'un ölümü · 1918-02-10 II. Abdülhamid'in vefatı ·
                 1918-07-03 V. Mehmed Reşad'ın vefatı
antlaşma/s-s     1914-08-02 Osmanlı-Alman gizli ittifakı · 1922-11-01 Saltanatın kaldırılması
```
Bu dalgada kapananlar (listeden düştü): 1596-10-12 Eğri (Haçova kartı) · 1622-05-20 Genç Osman · 1700-07-14 İstanbul Antl. · 1808-07-28 III. Selim · (Budin · Haçova · Prut · Çeşme · Plevne).

---

## 6 · Ölçülmeyen / sınırlar

- **Tarayıcıda canlı SINANMADI.** Bağ denetimi app.js eşleşme kuralının Node'da birebir kopyasıdır. Özellikle `tartisma` (sebep/sonuç alanı olmadan) ve `dis-yankilar` kartlarının app.js'in son çare dalıyla nasıl çizildiği gözle görülmedi.
- Kartların içerik doğruluğu TDV gövdesine karşı **telif ve sayı** ekseninde ölçüldü; her cümlenin anlamca kaynağa sadakati tek tek değil, taslak raporları ve örnek okumayla sınandı.
- 9 görselin 2'si gözle açıldı (Bâkî · Viyana); 7'si araştıran oturumun gözle kontrolüne dayanıyor.
- Plevne takvim farkı (Jülyen/Gregoryen) akademik kaynakla sınanmadı.

## 7 · Haberleşme

- M-3819 açılış · M-3828 ara (Otranto + ilk bağ daraltmaları) · M-3835 ara-2 (mimari + savaş, M-3828 sayısını düzeltti) · TESLİM mesajı. Hepsi `oturumlar/tahta.json`dan GERİ OKUNARAK doğrulandı.
- 🔴 **Tahta arızası:** M-3828 yazıldı ama `tahta.py` commit/push adımı başarısız oldu ("mesaj tahta.json'da var, yalnız gitmedi"). §7.1⑤b gereği kayıt dosyada arandı ve BULUNDU; git'e dokunulmadı.
- Bu dalga boyunca PAKET-A2'ye yazılmış yeni tahta mesajı yok (ölçüldü).
