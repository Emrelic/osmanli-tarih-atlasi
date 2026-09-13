# ARAŞTIRMA — BAĞDAT 1623-1639 ve KASR-I ŞİRİN MADDELERİ ↔ ATLAS

> **Oturum:** ARAS-BAGDAT · **Koordinatör:** 1.MURAT · **Tarih:** 14 Eylül 2026
> **Sevk:** Emre partisi `parti-emrelic-0050` — **H-0002** (Bağdat'ın geri fethinde Irak) · **H-0006** (Kasr-ı Şirin maddeleri; Halepçe/Şehrizor)
> **Veriye YAZILMADI.** Öneriler: `denetim/YAMA-BAGDAT-0914.json`. Commit atılmadı.
> **Tahta:** M-3891 (açılış) · M-3904 (çelişki) · M-3906 → M-3907 (ayrıştırma, koordinatör onayı M-3908) · künye mesajı KAYBOLDU, yeniden yazıldı (§7).

---

## 0. KISA CEVAP (Emre için)

**H-0002 — "Bağdat geri alınınca yalnız Bağdat mı döndü?"**
Harita **bir günlük bir kayıt ayrışması** gösteriyor, tarihsel bir durum değil. Atlasın veri kayıtlarında Bağdat, Şehrizor ve Halepçe **24 Aralık 1638**'de, Irak'ın öteki 17 noktası (Hille, Kerbelâ, Necef, Kûfe, Vâsıt, Kût, Dîvâniye, Sâmerrâ, Tikrit, Âne, Hît, Fellûce, Hânekîn, Kerkük, Erbil, Kifri, Tuz Hurmatu) **25 Aralık 1638**'de Osmanlı'ya dönüyor. Ekran görüntüsü tam 24 Aralık'ta alındığı için "yalnız Bağdat + Şehrizor/Halepçe" göründü; ertesi gün bütün Orta Irak dönüyor.
Kaynak günü **24 Aralık 1638**'dir (TDV `murad-iv`: 17 Şâban 1048 Cuma, Bektaş Han teslime karar verdi). 25 Aralık'ın **hiçbir kaynağı yok** ⇒ hepsi 24'e hizalanmalı (yama A).

**Ama araştırma daha büyük iki kusur buldu:**
1. **Kerkük ve Musul** atlasta yanlış: Kerkük 15 yıl (1623-1638) Safevî gösteriliyor, oysa kaynaklar Safevî hâkimiyetinin **1624'te başlayıp 1625'te bittiğini** söylüyor. Musul ise atlasta **hiç** Safevî olmadı, oysa 1624'te Safevî valisi tayin edilmiş (yama D-E-F).
2. **Şehrizor** 1630 Mart'ında Hüsrev Paşa'nın Gülanber Kalesi'ni yeniden kurmasıyla Osmanlı beylerbeyiliği oldu; atlas 1638'e kadar Safevî gösteriyor (yama B-C).

**H-0006 — "Halepçe ve Şehrizor Kasr-ı Şirin'le kime kaldı?"**
**Osmanlı'ya.** Antlaşma metni Şehrizor'u Osmanlı sınırı sayıyor ve Şah'ın ona dokunmayacağını yazıyor. Halepçe **adıyla geçmiyor**, ama metin **Zalim Kalesi'ne bakan çevreyi Osmanlı'ya**, **Avroman (Hevraman) köylerini Şah'a** veriyor. Halepçe Zalm'a 17,6 km, ovanın içinde ⇒ Osmanlı tarafında. Atlas 17 Mayıs 1639'da ikisini de Osmanlı gösteriyor: **UYUYOR.**

---

## 1. ÖLÇÜM — ATLASIN KENDİ DÖNEMLERİ (girdi.py, 3818 yerleşim, 59'u Irak kutusunda)

Kutu: 29-37,3°K · 41-48,6°D. Dayanak sütunu `yerlesimler.js`'teki kaydın `kaynak` alanıdır.

### 1.1 Bağdat eyaleti ve Şehrizor

| yerleşim | 1622 | 1623-11-29 | 1625 | 1630 | 1638-12-23 | **1638-12-24** | 1638-12-25 | 1639-05-18 | dönem sınırları | dayanak |
|---|---|---|---|---|---|---|---|---|---|---|
| **Bağdat** | OSM | safevi | safevi | safevi | safevi | **OSM** | OSM | OSM | s 1623-11-28→**12-24** | TDV `bagdat` (1623) · TDV `murad-iv` (1638) — **kaynaklı** |
| **Şehrizor** | OSM | safevi | safevi | safevi | safevi | **OSM+safevi (örtüşme)** | OSM | OSM | s →**12-25**, d **12-24**→ | 🔴 **1 gün d/s örtüşmesi** · kaynak alanı yok |
| **Halepçe** | OSM | safevi | safevi | safevi | safevi | **OSM** | OSM | OSM | s →12-24 | kaynak alanı yok — atlas zinciri |
| Kerkük | OSM | safevi | safevi | safevi | safevi | safevi | **OSM** | OSM | s →12-25 | `kaynak` alanı İlhanlı sınırını anlatıyor, 1623'ü DEĞİL |
| Erbil · Kifri · Tuz Hurmatu | OSM | safevi | safevi | safevi | safevi | safevi | **OSM** | OSM | s →12-25 | aynı (İlhanlı notu) |
| Hânekîn | OSM | safevi | safevi | safevi | safevi | safevi | **OSM** | OSM | s →12-25 | aynı |
| Hille · Kerbelâ · Necef · Kûfe · Vâsıt · Kût · Dîvâniye · Sâmerrâ · Tikrit · Âne · Hît · Fellûce | OSM | safevi | safevi | safevi | safevi | safevi | **OSM** | OSM | s →12-25 | kaynak alanı yok |
| **Musul** | OSM | **OSM** | **OSM** | OSM | OSM | OSM | OSM | OSM | d 1516-08-24→1918 kesintisiz | TDV `ilhanlilar` notu — 1624'ü ANMIYOR |
| Zaho · Duhok · Akra · Rewândiz · Telafer · Sincar · İmâdiye | OSM | OSM | OSM | OSM | OSM | OSM | OSM | OSM | kesintisiz | — |
| Basra · Kürne · Ammâre · Semâve · Fâv · Abâdân | OSM | OSM | OSM | OSM | OSM | OSM | OSM | OSM | kesintisiz | — |
| **Kasr-ı Şîrîn** | safevi | safevi | safevi | safevi | safevi | safevi | safevi | safevi | s 1503→1736 | `kaynak:"hemedan"` |
| Merîvan · Bâne · Serdeşt · Sakkız · Mahabad | safevi | ← | ← | ← | ← | ← | ← | safevi | — | — |

**Sayılar:** 20 Irak noktası 1623-11-28'de Safevî'ye geçiyor. Dönüşte **3'ü 12-24'te, 17'si 12-25'te**. Musul ile yedi bağlı noktası ve Basra kümesi hiç el değiştirmiyor. 20 kaydın **20'sinde de** 1623-1638 dönemi için **kaynak alanında 1623 veya 1638'i anan bir dayanak yok**. Dayanak zincir: Bağdat'ın günleri bütün eyalete kopyalanmış.

⚠️ **Görsel ↔ veri:** H-0002 görüntüsü (alt yazı `1638-12-24`) veriyle birebir uyuyor: Bağdat peteği + Şehrizor/Halepçe adası koyu, geri kalan Orta Irak açık. Yayın ile veri ayrışması **yok** (bu kesitte).

### 1.2 Kasr-ı Şirin günü (1639-05-16 → 05-18) — kuzey maddeleri

| yer | 05-16 | 05-18 | antlaşma |
|---|---|---|---|
| Kars · Ahıska · Van | OSM | OSM | Şah bu hudutlara dokunmayacak — **UYUYOR** |
| Revan | safevi | safevi | Revan Safevî'de kaldı (TDV `kasrisirin-antlasmasi`) — **UYUYOR** |
| Mâku | safevi | safevi | "iki taraftan yıktırıla" — **tarafı ölçülemedi** |
| **Kotur** | **OSM** | **safevi** | 🟡 **METİNLE UYUŞMUYOR, KAYIT BUNU BEYAN EDİYOR:** antlaşma Kotur'u **devretmiyor**, iki tarafça yıkılmasını şart koşuyor. Kaydın kendi yorumu (`yerlesimler_ek_ferhadpasa.js:88-93`) Osmanlı bitişini TDV `maku`'nun 1639 anmasına bağlıyor ve "1639 SONRASI için ayrı bir Osmanlı dayanağı BULUNAMADI" diyor. ⇒ 1639 sonrası **Safevî dolgusunun kaynağı yok**. Kusur gizli değil, beyanlı; yama önerilmedi, tarafı ölçülemedi |
| Mağazberd | — | — | atlasta nokta YOK |
| Tiflis | gurcistan | gurcistan | antlaşma Gürcistan'ı anmıyor — ölçülemedi |

---

## 2. KAYNAK

### 2.1 1623-1624: Safevî neleri aldı?

| iddia | kaynak | damga |
|---|---|---|
| Bağdat iç kalesi 28 Kasım 1623'te Derviş Mehmed tarafından teslim edildi; kuşatma Temmuz 1623'te başlamıştı | TDV `bagdat` | 🟢 KANIT (gün) |
| Bağdat'ın düşüşü hicrî 1033/1624 | TDV `murad-iv` | 🟢 KANIT (yıl; 1033 = 25.10.1623-13.10.1624, 28 Kasım ile tutarlı) |
| Bağdat'la **Necef ve Kerbelâ** Safevî hâkimiyetine girdi | TDV `abbas-i` | 🟢 KANIT (yıl) |
| Karçakay Han Musul ve Kerkük'e gönderildi; **ikisi de İran hâkimiyetine geçti**, Musul'a Kāsım Han vali | TDV `musul--irak` | 🟢 KANIT (yıl) |
| Sipahi Küçük Ahmed Musul'u (ve Kerkük'ü) geri aldı; Şah şehri **1033/1624'te tekrar aldı** | TDV `musul--irak` · Kılıç 2001 | 🟢 KANIT (yıl, gün yok) |
| 🔴 **KARŞI:** Şah Abbas Musul, Kerkük ve Van'ı almak istedi, "muvaffak olamadı" | TDV `abbas-i` | 🟡 **ÖZET cümle** |
| "Basra dahil bütün Irak Safevî nüfuzu altına girmiş oldu" | Kılıç 2001 | 🟡 İŞARET — nüfuz ≠ tasarruf; TDV `basra` bir işgal anmıyor |

#### 2.1.1 Çelişkinin ayrıştırılması (M-3904 → M-3906 → M-3907)
`abbas-i` cümlesi 1623 Bağdat zaptı ile 1629'daki ölüm arasındaki **saltanat özetinde** duruyor; tek bir seferi tarihlemiyor. Kalıcı tutamamayı anlatıyor olarak okunabilir. `musul--irak` yıllı ve ayrıntılı bir sıra veriyor. **Üçüncü kaynak** Kılıç 2001 bu sırayı doğruluyor ve bir adım ekliyor: Hâfız Ahmed harekâtıyla Kerkük ile Musul Safevî kuvvetlerinden "tamamen arındırılmıştır". Koordinatör uzlaştırmayı onayladı (M-3908). **İki TDV cümlesi yan yana duruyor; güven ORTA.**

### 2.2 1625-1638: arada ne oldu?

| olay | tarih | kaynak | atlasa etkisi |
|---|---|---|---|
| Çerkez Hasan öncüleri Kerkük dahil bölgeyi kontrol altına aldı | 1035 (1625) | TDV `musul--irak` | 🔴 Kerkük/Musul **1625'te Osmanlı** — atlas 1638 diyor |
| Hâfız Ahmed ordusu "önce Musul'a, ardından Kerkük'e vardı" | Eylül 1625 | TDV `hafiz-ahmed-pasa` | aynı |
| Bağdat kuşatması 13.11.1625-3.7.1626, sonuçsuz | | TDV `bagdat` | Bağdat Safevî kalır ✓ |
| "Kerkük Beylerbeyisi Bostan Paşa" Erzurum'a sevk ediliyor | 1627 | Kılıç 2001 | 🟡 İŞARET: Osmanlı Kerkük beylerbeyi var |
| Hüsrev Paşa, Genç Osman eliyle "Kerbelâ, Necef ve Hille gibi yerleri zaptetti" | 1629-30 | TDV `murad-iv` | 🟡 Hille kısa Osmanlı dönemi — gün yok, yama yok, halka önerisi H6 |
| **16 Mart 1630** Gülanber inşaatı başladı, Şehrizor beylerbeyilik merkezi, Arnavud Mustafa Paşa beylerbeyi | gün | Kılıç 2001 · TDV `sehrizor` (1630) · TDV `murad-iv` | 🔴 **Şehrizor 1630'da Osmanlı** — atlas 1638 diyor |
| Mihriban alındı; 5 Mayıs 1630 zaferi | gün | Kılıç 2001 · TDV `murad-iv` | Mihriban atlasta nokta yok |
| Bağdat ikinci kuşatması (6 Ekim 1630'dan), sonuçsuz; Halil Paşa Hille'yi üç ay savunup terk etti | 1630-31 | Kılıç 2001 · TDV `murad-iv` | Hille Safevî'ye döner |
| Zâlim Kalesi 1630'da alındı, "tekraren İran'ın eline geçmiştir" | **tarihsiz** | Koç (Evliya C.4 s.348) | ⚪ ÖLÇÜLEMEDİ — Şehrizor yamasının açık şartı |
| Küçük Ahmed Paşa kuvvetleri Mihriban civarında yenildi | 1636-37 | TDV `murad-iv` | 🟡 İŞARET: Osmanlı Şehrizor'dan harekât ediyor |

### 2.3 1638 fethi: hangi yerler Bağdat'la döndü?
- Bağdat: **24 Aralık 1638** (TDV `murad-iv`: 17 Şâban 1048 Cuma). TDV `bagdat` "15 Ekim 1638'de başlayıp kırk gün" diyor. Oysa `murad-iv` ile Kılıç 2001 ordunun Kâzımiye'ye 14 Kasım'da vardığını yazıyor. ⇒ TDV `bagdat`'taki "15 Ekim" **muhtemelen 15 Kasım**. Kendi içinde bir çelişki, **bildirildi**, taraf seçilmedi; yamayı etkilemiyor.
- Öteki Irak kasabalarının **ayrı ayrı döndüğüne dair hiçbir kaynak bulunamadı.** Kaynaklar yalnız Bağdat'ın teslimini ve antlaşmanın "Bağdat, Basra ve Şehrizor bölgesini" Osmanlı'da bıraktığını kaydediyor. ⇒ Komşu günü (§4 şartlı): hepsi Bağdat günü (yama A, güven orta).
- IV. Murad 17 Ocak 1639'da Bağdat'tan ayrılıp Musul'a gitti (`murad-iv`); Musul Osmanlı ✓.

### 2.4 Kasr-ı Şirin (17 Mayıs 1639) — METİN

**Günler:** müzakere 11 Muharrem 1049 (14 Mayıs), imza **14 Muharrem 1049 = 17 Mayıs 1639**, Zühâb'da. Kesin tasdik Kasım 1639 sonu (TDV `kasrisirin-antlasmasi`, R. Murphey — slug **canlı**; veride kullanılan `kasr-i-sirin-antlasmasi` **302 ölü**).

**Metnin iki bağımsız neşri okundu:**
- **Kılıç 2001** (*Türk Kültürü* XXXIX/460, ss. 479-493). Osmanlıca metinden sınır maddelerini aktarıyor.
- **British and Foreign State Papers 105, s. 763-766**. İngilizce çeviri. 🟡 BFSP taramasına doğrudan inilmedi; erişim kurdistanica aktarımıyla.

İki neşir madde madde örtüşüyor. Özetler: As 2010 · Soofizadeh 2017 · Efe-Kızıl 2017.

| # | madde (öz) | atlas 1639-05-18 | hüküm |
|---|---|---|---|
| 1 | Bağdat eyaletinde **Cessân, Bedre, Mendelî, Derteng, Derne** Osmanlı'ya | Noktaları YOK. En yakın atlas noktası: Mendelî → Hânekîn 68,9 km OSM · Bedre → Kût 67,9 km OSM · Cessân → Kût 51,1 km OSM | 🟢 UYUYOR (işaret; Voronoi yaklaşığı) |
| 2 | Mendelî ile Derteng arası ovalar, Câf ve Ziyâeddin/Hârûnî aşiret toprakları Osmanlı'ya | noktasız | ⚪ ölçülemedi |
| 3 | Serminil/Sermenel, Derteng ile Derne arasında sınır | konum bulunamadı | ⚪ ölçülemedi |
| 4 | **Zencir Kalesi** yıkılacak; **batısındaki köyler Osmanlı'ya, doğusundakiler Şah'a** | Zencir'in konumu kaynakla bağlanamadı (GeoNames aday "Sarāb-e Bard Zanjīr" 34,754°K 46,291°D — DOĞRULANMADI) | ⚪ ölçülemedi |
| 5 | **Şehrizor yakınında Zalim Kalesi'ne bakan çevre Osmanlı'ya**; **Orman (Avroman) kalesi köyleri Şah'a** | Zalm (GeoNames 89563, 35,314°K 46,084°D) → en yakın Halepçe **OSM** 17,6 km · Hevraman dağları → en yakın Merîvan **safevi** 18,9 km | 🟢 UYUYOR |
| 6 | Şehrizor'da Çıygan gediği sınır; **Kızılca Kale Osmanlı'ya**, **Mihriban Şah'a** | Kızılca noktası yok (GeoNames "Qiziljah" Penjwin — eşleme doğrulanmadı); Mihriban noktası yok | ⚪ ölçülemedi |
| 7 | Van serhaddinde **Kotur ve Mâkû**, Kars tarafında **Mağazberd** iki taraftan yıkılacak | Kotur OSM→**safevi** devri 1639-05-17 · Mâkû safevi · Mağazberd yok | 🟡 **Kotur:** antlaşma devretmiyor; atlasın Safevî dolgusu kaynaksız ama kayıt bunu beyan ediyor (§1.2) · Mâkû ölçülemedi |
| 8 | Şah Ahıska, Van, Kars, **Şehrizor**, Bağdat, Basra hudutlarına dokunmayacak | hepsi OSM | 🟢 UYUYOR |
| 9 | Revan Safevî'de (TDV) | safevi | 🟢 UYUYOR |
| — | **Kasr-ı Şirin · Zohâb · Hânekîn** | Kasr-ı Şîrîn safevi · Hânekîn OSM | ⚪ **antlaşma metninde ADSIZ** |

⚠️ **Hânekîn tuzağı:** Kılıç 2001'in *özet* paragrafı ve As 2010 "Bedre, Cessan, **Hanikin**, Mendeli…" diyor. Kılıç'ın **aynı makalede aktardığı Osmanlıca metin** ve BFSP çevirisi Hânekîn'i **anmıyor** ("Tzanan, Bedrie, Mendelgeen, Dertenk and Dernai"). ⇒ Hânekîn bir özet eklemesi, metin maddesi değil (muhtemelen bir sadeleştirme kaynağından geliyor). Atlasta Hânekîn OSM; bu durum metne dayanmıyor.

⚠️ **H-0006-2 görüntüsü:** Hânekîn noktası açık (Safevî) zeminde görünüyor, ama veride 1639-05-18'de **OSM**. Bu ayrışmayı **ölçemedim** (petek çıktısı açılmadı). Aday sebepler: yayın bayat (§11 D115) ya da Hânekîn peteğinin sınır yaslanmasıyla kuzeydoğusunun kırpılması. Kasr-ı Şîrîn 25,4 km ötede.

---

## 3. HALEPÇE ve ŞEHRİZOR HÜKMÜ

| soru | cevap | damga |
|---|---|---|
| Kasr-ı Şirin'le Şehrizor kime kaldı? | **Osmanlı'ya**. Antlaşma Şehrizor hududunu Osmanlı hududu sayıyor; TDV `kasrisirin`: Bağdat, Basra ve Şehrizor bölgesi Osmanlı'da | 🟢 KANIT (iki TR kaynağı + BFSP) |
| Halepçe kime kaldı? | **Osmanlı'ya**. Halepçe adıyla geçmiyor; metin Zalim Kalesi'ne bakan çevreyi Osmanlı'ya, Avroman köylerini Şah'a veriyor. Halepçe Zalm'ın 17,6 km güneybatısında, Hevraman sırtının batısında, ovada | 🟡 ÇIKARIM (coğrafî; ad yok) — güçlü |
| Atlas 1639-05-17 doğru tarafta mı? | **EVET**, ikisi de OSM | 🟢 |
| Atlas 1623-1638 doğru mu? | **Muhtemelen HAYIR:** kaynak 16 Mart 1630'dan itibaren Şehrizor'da Osmanlı beylerbeyiliği kaydediyor | 🟡 güven orta (1630 sonrası yeniden kayıp tarihsiz) |
| Kayıt sağlığı | Şehrizor 1638-12-24'te **d ve s birlikte geçerli** (1 gün örtüşme) | 🔴 KUSUR — yama B |

---

## 4. LEHTE / ALEYHTE — kanıt ile işaret ayrı

**Kerkük/Musul 1624-1625 önerisinin**
- 🟢 lehte kanıt: TDV `musul--irak` (yıllı sıra) · Kılıç 2001 (aynı sıra + "tamamen arındırılmıştır") · TDV `hafiz-ahmed-pasa` (Eylül 1625'te ordu Musul ve Kerkük'te)
- 🟡 lehte işaret: 1627 "Kerkük Beylerbeyisi Bostan Paşa" · 1629 Hüsrev Paşa Musul'da kırk gün kışlıyor
- 🔴 aleyhte: TDV `abbas-i` özet cümlesi
- ⚪ ölçülemedi: 1624 içindeki iki el değiştirmenin günleri; Musul'a bağlı noktaların durumu

**Şehrizor/Halepçe 1630 önerisinin**
- 🟢 lehte kanıt: Kılıç 2001 (gün, beylerbeyi tayini) · TDV `sehrizor` (1630) · TDV `murad-iv`
- 🟡 lehte işaret: 1636-37 Mihriban çarpışması; antlaşma Şehrizor'u Osmanlı hududu sayıyor
- 🔴 aleyhte işaret: Zâlim Kalesi "tekraren İran'ın eline geçmiştir" (Evliya aktarımı, tarihsiz)
- ⚪ ölçülemedi: 1623'te Şehrizor'un Safevî'ye geçiş yılı

**Yama A (12-24 hizalaması)**
- 🟢 kanıt: Bağdat günü `murad-iv`
- ⚪ ölçülemedi: kasabaların ayrı günleri, ama 12-25'in de hiçbir dayanağı yok

---

## 5. YAMA ÖZETİ (ayrıntı JSON'da)

| grup | kayıt | değişiklik | güven | Değişmez 2 |
|---|---|---|---|---|
| A | 15 Bağdat eyaleti noktası | 12-25 → 12-24 | orta | 1638-12-24 KAPALI · 12-25 kırılması kalkar |
| B | Şehrizor | Safevî bitişi 1638 → **1630-03-16** (yedek: yalnız örtüşmeyi kapat) | orta | 1630-03-16 AÇIK ⇒ **M3** |
| C | Halepçe | aynı (komşu günü) | düşük | M3 |
| D | Kerkük | Safevî 1623-1638 → **1624-1625** | orta | 1624-01-01 AÇIK (−34) · 1625-01-01 AÇIK ⇒ **M1 + M2** |
| E | Musul | yeni Safevî dilimi **1624-1625** | orta | M1 + M2 |
| F | Erbil | D ile aynı (komşu) | düşük | M1 + M2 |
| K1-K5 | kuyruk madde + halka + 8 ölü slug yeri | gün/metin/slug düzeltmesi | yüksek | — |
| H1-H6 | halka önerileri | Şehrizor 1630 · Mendelî/Bedre/Cessân 1639 · Musul/Kerkük · Hille 1630 | — | — |

**Değişmez 2 net etkisi:** M1+M2+M3 ile birlikte uygulanırsa **yeni açık 0**. Yerleşim yamaları maddesiz inerse **+3 açık**.
**Değişmez 1:** önerilen dönemler uç uca; yeni sahipsiz dilim yok (elle kontrol, `denetle.py` koşulmadı).
**Hukukî sınır:** `hukuki_sinirlar.js`'te 1639 kaydı yok. Köşe önerisi yazılmadı: metin yer/bölge düzeyinde (③), kaynaklı koordinatlı bir çizgi vermiyor.

---

## 6. BULUNAMAYANLAR / ÖLÇÜLEMEYENLER (sayıyla: 11)

```
① Encyclopaedia Iranica  BOUNDARIES iii · ZOHAB          → HTTP 403 (iki madde, WebFetch)
② Sabri Ateş, "Treaty of Zohab, 1639" (Iranian Studies 52, 2019) → yalnız özet; tam metin erişilemedi
③ Kütükoğlu (Osmanlı-İran Siyâsî Münâsebetleri)           → ARANMADI/erişilemedi
④ BFSP 105 taramasının kendisi                            → İNİLMEDİ (aktarım üzerinden)
⑤ Zencir Kalesi konumu                                    → bulunamadı (GeoNames adayı doğrulanmadı)
⑥ Mihriban · Kızılca · Serminil · Derne · Derteng konumu  → bulunamadı / eşleme doğrulanmadı
⑦ Şehrizor'un 1623'te Safevî'ye geçiş yılı                → bulunamadı
⑧ Zâlim Kalesi'nin 1630 sonrası yeniden kaybının tarihi     → bulunamadı
⑨ Kerkük/Musul 1624 içi iki el değiştirmenin günleri       → kaynakta yok
⑩ Hânekîn'in H-0006-2'de Safevî zeminde görünme sebebi    → ölçülemedi (petek çıktısı açılmadı)
⑪ Koç makalesinin dergi künyesi                            → PDF'ten çıkarılamadı
```
TDV canlı/ölü slug ölçümü (HTTP): **canlı** `kasrisirin-antlasmasi · murad-iv · bagdat · sehrizor · kerkuk · musul--irak · basra · hille · kerbela · necef · kufe · hafiz-ahmed-pasa · abbas-i · luristan · zencir`. ⚠️ `zencir` **yanlış madde** (§4②): mûsiki usulü. **Ölü (302):** `kasr-i-sirin-antlasmasi · kasrisirin · zuhab · zohab · musul · mendeli · bedre · derne--irak · halepce · hanekin · erdelan · baban · babanlar · bekir-subasi · bagdat-seferi · cevazir · kemankes-kara-mustafa-pasa · safi-i · dertenk · derteng · cessan · zengabad` + birkaç `--irak/--iran` varyantı.

---

## 7. ARIZA KAYDI (§7.1⑤b)

Koordinatörün M-3908'ine yazdığım künye cevabında `tahta.py` "TEKRAR YAZMA — mesaj tahta.json'da ZATEN var, yalnız gitmedi" dedi. `tahta.json` geri okumasında mesaj **YOKTU**: arama 0 sonuç verdi, son kayıt M-3916 başka oturumlardan. Mesaj yeniden yazıldı. Aracın talimatı bu arızada yanıltıcıydı; §7.1⑤b vakasının tekrarı.
