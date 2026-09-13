# FERHAT PAŞA 1590 · BATI KANADI (Kasr-ı Şirin → Mahabad) — ÖLÇÜM · paket 0047 H-0001

```
OTURUM   0047 araştırma işçisi · 13 Eylül 2026 · koşu AKTİF → data/ DONUK, çıktı ÖLÇÜM + YAMA ÖNERİSİ
SORU     "Ferhat Paşa anlaşması sonrası Kasr-ı Şirin, Zencan, Sultaniye, Bicar, Merivan,
          Sakız, Bane, Serdeşt, Mahabad Osmanlı'da mı yoksa Safevilerde mi kaldı"
EKRAN    H-0001-1.png — 1590-03-21 · dokuz adın dokuzu da AÇIK pembe alanda (koyu kırmızı = Osmanlı)
ÖNCEL    denetim/OLCUM-KITA29-FERHATPASA-0913.md (doğu kanadı) — yöntem aynen
```

## Ö · ÖNGÖRÜ — ölçümden ÖNCE yazıldı (D022)

⚠️ **Dürüstlük beyanı:** öngörü yazılmadan önce iki şey GÖRÜLDÜ — (a) Emre'nin ekran
görüntüsü (dokuzu da açık tonda), (b) bir ad araması (`Grep`) Zencan · Merîvan · Bîcâr
satırlarının `s:` zincirini ekrana bastı (üçü de `safevi 1501→1736`, `d:[]`). Yani
**atlas tarafı için öngörü değeri yok** — öngörü yalnız **KAYNAK tarafı** içindir.

| # | yer | 1590-03-21 beklentim (kaynaklar ne diyecek) | gerekçe (hafıza — ölçülmedi) | güven |
|---|---|---|---|---|
| Ö1 | Kasr-ı Şirin | **Osmanlı (doğrudan)** | Bağdat–Hemedan yolu üstünde; Osmanlı 1580'lerde Luristan–Nihâvend hattını tuttuysa arkasındaki geçit de Osmanlı olmalı | orta |
| Ö2 | Zencan | **Safevî** | Kazvin (başkent) kapısı; antlaşma bölge listelerinde Zencan beklemiyorum | orta-yüksek |
| Ö3 | Sultaniye | **Safevî** | Zencan–Kazvin arası; aynı gerekçe | orta-yüksek |
| Ö4 | Bîcâr (Garrus) | **belirsiz** — büyük olasılıkla kaynak adıyla anmayacak | Erdelân ile Hemedan arası; ne Osmanlı tahririnde ne TDV'de adıyla beklemiyorum | düşük |
| Ö5 | Merîvan | **tâbi (Erdelân) veya Osmanlı** | Erdelân beyleri 1580-1600 arası Osmanlı'ya yönelmiş olabilir; Şehrizor'a komşu | düşük |
| Ö6 | Sakız | **tâbi / belirsiz** | Mukrî–Erdelân arası | düşük |
| Ö7 | Bâne | **tâbi / belirsiz** | Şehrizor sınırı, küçük Kürt beyliği | düşük |
| Ö8 | Serdeşt | **tâbi / belirsiz** | Mukrî/Bradost kuşağı | düşük |
| Ö9 | Mahabad (Soğukbulak) | **Osmanlı veya tâbi** | Tebriz eyaleti 1585-1603 Osmanlı; Merâga–Urmiye arası | düşük |

**Toplam öngörü:** 1590'da kaynaklar Osmanlı/tâbi diyecek **5-7** (Kasr-ı Şirin + Kürt kuşağı) ·
Safevî **2** (Zencan · Sultaniye) · belirsiz **1-3**.
**Kaynak öngörüsü:** TDV `zencan` / `sultaniye` canlı ama 1590'ı ANMAYACAK (Ö-K1); Kürt beylikleri
için gün hassasiyetli tarih **bulunamayacak** (Ö-K2); en az bir yer için kaynak "bulunamadı" kalacak (Ö-K3).
**Mazeret önceden:** "tâbi" ile "Osmanlı" arasındaki ayrımı kaynak yapmayabilir — o zaman hüküm
`belirsiz-tür` olarak yazılır, öngörü tutmuş/çürümüş SAYILMAZ.

---
```
TABAN    girdi.yukle() · 3818 nokta · 79 girdi dosyası
ALETLER  ARAC-0047-KESIT-0913.py        9 yer · normalleştirilmiş ad araması · 2 kesit + 6 ek kesit · 8 komşu
         ARAC-0047-HAT-0913.py          komşu zincirleri · "örtülü" hat tarafı (4 hat varyantı, km)
         ARAC-0047-BENZETIM-0913.py     yamalar BELLEKTE · boşluk · d/s çakışma · cep · yeni kırılma günü
         ARAC-0047-TDVARALIK-0913.py    TDV cümle aralığı (TDVPASAJ ile aynı bölme)
         ARAC-0047-ESKANDARARA-0913.py  Eskandar Beg (Savory çev.) archive.org KİTAP-İÇİ ARAMA — kitap indirilmedi
         ARAC-0047-FARSIPDF-0913.py     Farsça PDF terim arama (pypdf)
         + KITA13-TDVPASAJ · KITA29-IRANICAPASAJ · KITA29-BELGEPASAJ (yeniden kullanıldı — D045)
KURALLAR  koordinatör iletileri: (1) çok gelenekli kaynak + "kaynak geleneği" sütunu · (2) Emre'nin
          ÖRTÜLÜ kuralı: "bahsedilmiyorsa ama Osmanlı'da kalan hattın batısındaysa enklav olamaz ⇒
          örtülü Osmanlı" — kaynaklı/örtülü AYRI sütun · (3) ÖNCELİK Zencan · Sultaniye · Bîcâr
          (Emre'nin çapası: "Bicar, Hemedan, Sultaniye Osmanlı'da kalmışsa batısı Osmanlı")
ARA NOT  SendMessage → main (üç öncelikli yer + Hemedan çapası uyarısı)
```

## ⓪ CEVAP — TEK TABLO (1590-03-21 · antlaşmadan Safevî geri alışına, ~1603)

| yer | lat · lon | atlas 1590-03-21 / 1603-10-21 | hüküm | kaynaklı / örtülü | kaynak geleneği | güven | önerilen dönem · gün · dayanak |
|---|---|---|---|---|---|---|---|
| **Sultâniye** | 36.4318 · 48.7970 | safevi / safevi | **SAFEVÎ** | kaynaklı | IR (Eskandar Beg) · TR (TDV tebriz 1593 listesinde yok — destekleyici) | orta | yama YOK — atlas ✓ |
| **Zencan** | 36.6730 · 48.4780 | safevi / safevi | **SAFEVÎ** | kaynaklı-dolaylı + örtülü (hattın 48-202 km doğusu) | IR (Eskandar Beg 1585) · TR (TDV zencan 1578-1603'ü anmıyor) | orta | yama YOK — atlas ✓ |
| **Bîcâr** | 35.8728 · 47.6053 | safevi / safevi | **BELİRSİZ — sınır hattının üstünde** | ne kaynaklı ne örtülü kararlı (hat A +16 · B +53 · C/D −55 km) | EN (Iranica BIJAR: yalnız varlık) | düşük | yama YOK — KARAR (C0047-3) · ayrıca `tur/kur` anakronizmi |
| **Kasr-ı Şirin** | 34.5150 · 45.5772 | safevi / safevi | **OSMANLI (doğrudan — Bağdat eyaleti sancağı)** | **kaynaklı** | TR (TDV bagdat [758-760]) · EN (Iranica iraq-iv: yol/sınır bağlamı) | yüksek (1590 durumu) · orta (günler) | d `1534-12-04 → 1623-11-28` (günler Hânekîn'den, 25 km, D084) — A0047-1 |
| **Merîvan** | 35.5214 · 46.1772 | safevi / safevi | **OSMANLI (tâbi — Erdelan)** | kaynaklı | TR (BOA hükümleri, Özcoşar-Açar 2024) · IR (Münşi-yi Kumi, aynı makale üzerinden) · EN (Iranica Banī Ardalān: genel "safları değiştirdiler") | orta | `1585-09-25 → 1603-10-21` (Tebriz kuşağı günleri, D084) — B0047-1 · başlangıç kaynakta daha erken (1582) |
| **Bâne** | 35.9900 · 45.8800 | safevi / safevi | **OSMANLI (tâbi/ekrâd beyi, tür belirsiz)** | kaynaklı (1585) + örtülü (1590) | TR (BOA hüküm 19 Nisan 1585) ↔ EN (Iranica BĀNA: Safevî dönemi genel "İran şahlarının gözetimi") — **çelişki** | orta-düşük | `1585-09-25 → 1603-10-21` — B0047-2 |
| **Mahabad (Soğukbulak)** | 36.7700 · 45.7200 | safevi / safevi | **OSMANLI (tâbi — Mukrî)** | kaynaklı (Mukrî) · nokta bağı çıkarım + örtülü | EN (Iranica MOKRI) ← IR (Eskandar Beg) · TR (TDV tebriz: 1593 livâ listesinde YOK, 1728'de "Sovukbulak" VAR — tâbi statüsüyle tutarlı) | orta | `1585-09-25 → 1603-10-21` — B0047-3 |
| **Sakız (Sakkız)** | 36.2461 · 46.2631 | safevi / safevi | **OSMANLI** | **örtülü (enklav olamaz)** — hat C/D +39 km batı | — (kaynak bulunamadı) | örtülü | `1585-09-25 → 1603-10-21` — C0047-1 |
| **Serdeşt** | 36.1600 · 45.4800 | safevi / safevi | **OSMANLI** | **örtülü (enklav olamaz)** — hat C/D +116 km batı | — (kaynak bulunamadı) | örtülü | `1585-09-25 → 1603-10-21` — C0047-2 |

⚠️ Atlasta `Sakız` araması İKİ nokta verdi: Ege'deki **Sakız adası** (OSMANLI, ilgisiz) ve İran'daki **Sakkız**. Tablo Sakkız'dır.

**Sayılar:** atlas 9/9 safevi · kaynağa/kurala göre **Safevî 2** (Sultâniye kaynaklı · Zencan dolaylı+örtülü) · **Osmanlı sistemi 6** (kaynaklı 4: Kasr-ı Şirin · Merîvan · Bâne · Mahabad · örtülü 2: Sakkız · Serdeşt) · **belirsiz 1** (Bîcâr).
⇒ **atlas UYUYOR 2 · KUSUR 6 (4 kaynaklı + 2 örtülü) · karar bekleyen 1.**

## ① EMRE'NİN ÇAPA KURALI — BU HÂLİYLE UYGULANAMIYOR

> *"Bicar, Hemedan, Sultaniye eğer Osmanlı'da kalmışsa onun batısındaki tüm toprakları Osmanlı kabul edebiliriz"*

```
Sultâniye  SAFEVÎ (kaynaklı) → kuralın ŞARTI tutmuyor; çapa olamaz
Hemedan    ŞEHİR SAFEVÎ valisiyle yönetiliyor (Eskandar Beg, Savory çev.):
             998/1589-90 bölümü: şah barıştan önce Hemedan'a Safevî vali atıyor; barıştan sonra
             Nihâvend'deki Osmanlı KALESİNE dokunmuyor — "in the heart of the province of Iraq"
             sonraki yıllar: "Hoseyn Ali Khan Cegani, the governor of Hamadan" (~1594-96) ·
             1011/1602: vali Hasan Khan
           TDV hemedan [63] yalnız "1588'de Cigalazâde Sinan Paşa Hemedan CİVARINI zaptetti"
           TDV nihavend--iran [94-100]: Nihâvend beylerbeyiliği; 1590 müzakerelerinde "Nihâvend
             üzerinde uzun tartışmalar" ve şehir Osmanlı'da kaldı
           ⇒ Osmanlı'da kalan: NİHÂVEND KALESİ. Hemedan şehri için 1590-1603 Osmanlı dayanağı YOK.
           🔴 ATLAS: Hemedan d:1590-03-21→1603-10-21 — bu bir KAYNAK ÇELİŞKİSİDİR (GUNEY kapsamı, bildirildi)
Bîcâr      kaynak yok; çapa olamaz
```
**Önerim:** çapa **kaynaklı** Osmanlı noktalarından kurulmalı: Tebriz · Merâga · Mîyandoab (TDV) · Nihâvend (TDV + Iranica + Eskandar Beg) · Şehrizor · Kasr-ı Şirin. Hat C bu noktalardan geçer.

## ② ATLAS ÖLÇÜMÜ (`ARAC-0047-KESIT`)

```
eşleşme   9 adın 9'u bulundu (Sakız → 2: Ege adası + Sakkız) · NOKTASI OLMAYAN: 0
zincir    9'unun 9'u: safevi 1501/1503/1508 → 1736 KESİNTİSİZ · d:[] · v: yok
          (Kasr-ı Şîrîn yalnız d 1723-10-01→1730-08-12)
ek kesit  1583 · 1588 · 1595 · 1612 · 1624 · 1639 — 9'u da her kesitte safevi
kutu      33,5-37,5°K × 44,5-49,5°D, 1590-03-21: OSMANLI 15 · safevi 9 · HENÜZ-YOK 1 (Senendec) · gilan-kiya 1
          ⇒ safevi 9 = TAM OLARAK Emre'nin 9 adı. Soru ile atlasın açık ton adası birebir örtüşüyor.
komşu     Kasr-ı Şîrîn'in en yakın 8'inin 7'si OSMANLI (Hânekîn 25 km) — ön-yama cebi
kaynak    yerlesimler_kalite4.js:22-28 — Mahabad · Bâne · Serdeşt'in zinciri "komşularla AYNI" diye
          kopyalandı; dayanak "Wikipedia/Iranica"; "ayrı Erdelan/Mükrî künyesi YOK" diye künye önerilmedi.
          Merîvan · Bîcâr · Sakkız · Zencan · Sultâniye: kaynak alanı YOK.
künye     devletler.js'te Erdelan/Mukrî/Baban/Bradost kimliği YOK · renkler.py'de YOK
```

## ③ KAYNAKLAR — ne okundu, ne dedi

| kaynak | gelenek | ne dedi (kısa) | taşıdığı |
|---|---|---|---|
| TDV `murad-iii` [115] | TR | barış, fethedilen ülkeler Osmanlı'da kalmak şartıyla (statüko) | çerçeve |
| TDV `safeviler` [211] | TR | 1590 listesi: Azerbaycan · Luristan · **Kürdistan** · Nihâvend · Şehrizor … | bölge (Kürdistan = nokta eşlemesi ÇIKARIM) |
| TDV `bagdat` [757-760] | TR | "1578-1588 listelerine göre" Bağdat eyaleti sancakları arasında **Derteng … Kasrışîrin** | Kasr-ı Şirin |
| TDV `nihavend--iran` [94-102] | TR | 1588 sonu fetih + kale · beylerbeyilik · 1590 müzakere · 1603 Abbas | çapa |
| TDV `hemedan` [58-64] | TR | "1588'de … Hemedan civarını zaptetti" — 1590-1603 için başka söz yok | Hemedan çapası zayıf |
| TDV `tebriz` [184-185] | TR | 1593 Osmanlı taksimi livâları (Zencan · Sultâniye · Gerrus · Soğukbulak YOK); 1728'de Sovukbulak VAR | Zencan/Sultâniye (dolaylı) · Mahabad |
| TDV `meraga` [35-37] | TR | 1585'te Osmanlı'ya geçti, III. Murad tahririnde livâ | çapa |
| TDV `zencan` [134-146] | TR | 1578-1603'ü hiç anmıyor (1724 var) | Ö-K1 |
| TDV `sehrizor` [35-42] | TR | Zalm 1554, Erdelan beyleri | bağlam |
| TDV `luristan` [35] | TR | 1590 İstanbul antlaşmasıyla Osmanlı'ya bağlanan Luristan | bağlam |
| TDV `kurtler` [362] | TR | Kelhûr · Erdelân · Bâbân · Şehrizor · Mûkrî Safevî ittifakında (Kanunî dönemi) | bağlam |
| TDV `kasrisirin-antlasmasi` [28] | TR | 1639: Bağdat · Basra · Şehrizor Osmanlı'da | 1639 sonrası (kapsam dışı) |
| **Özcoşar & Açar 2024**, Bingöl Üniv. SBE Dergisi 28, 214-225, doi 10.29029/busbed.1518775 | TR (+ IR birincil: Münşi-yi Kumi, Şerefnâme) | [132][161] 11 Mart 1582 hükmü: Hasanabad + 7 kale anahtarı teslim · [134] Merivan Teymur Han'ın oğlu Murad'a sancak · [138] 19 Nisan 1585 hükmü: Soran · Kızılcakale · Erbil · **Bane** beyleri Mihriban'da (Merivan) toplanıp Teymur Han'ı bertaraf etsin · [139-146] Teymur Han yeniden III. Murad'a itaat, 1590'da Safevî ordusuyla savaşta öldü · [148-149] Helu Han ilk yıllarında III. Murad'a itaat · [152-159] sonra Şah Abbas'a yöneldi | Merîvan · Bâne |
| **Iranica MOKRI TRIBE** (Oberling) [22-28] | EN ← IR (Eskandar Beg) | Osmanlılar 1580'lerde Azerbaycan'ı alınca Mukrî emîri Amira Bey III. Murad'a bağlılık bildirdi; 1603'te oğlu Şeyh Haydar şaha bağlandı · [13] başkent Sāujbolāq (1838 kaydı) | Mahabad |
| Iranica BANĪ ARDALĀN [36][39] | EN | Safevî döneminde işlerine gelince Osmanlı'ya geçtiler (Minorsky) — tarihsiz | Merîvan (genel) |
| Iranica BĀNA [8-15] | EN | Bāne yöneticileri 1747'ye kadar İran şahlarının gözetiminde (genel) | Bâne — **çelişki** |
| Iranica BĪJĀR [8][16] | EN | 15. yy'da köy; kasaba boyutuna ancak 19. yy'da; ilçenin eski adı Garrūs | Bîcâr (varlık) |
| Iranica NEHĀVAND [67] | EN ← IR | 998/1589 Osmanlı kalesi, 1011/1602-03'e kadar | çapa |
| Iranica IRAQ iv [15][119] | EN | Kasr-e Şirin–Hânekîn arası ana yol/sınır · İstanbul antlaşması Şehrizor'u Osmanlı'ya verdi | Kasr-ı Şirin bağlamı |
| Iranica BOUNDARIES i [15-16] | EN | sınır bir çizgi değil geniş bir kuşak; 1590 antlaşması bunu büyük ölçüde teyit etti | çerçeve (hat ≠ antlaşma çizgisi) |
| **Eskandar Beg Monshi, çev. R. M. Savory** (archive.org kitap-içi arama, tarama sayfası no.) | IR | s.614 Nihâvend kalesi · s.618 barıştan sonra şah Nihâvend kalesine dokunmadı · s.644 (1000/1591-92) Soltaniya ve Sojās tımarlı Safevî emîri · s.721 & 856 Safevî Hemedan valileri · s.855 barış şartı: herkes elindekini tutar · s.505 (1585) Hamza Mirza Sultaniye otlağında · s.497 (1585) Zenjān-rūd kabilesi | Sultâniye · Zencan · Hemedan |
| Heper & Öntuğ, DergiPark 2336528 | TR | 1590: Tebriz · Azerbaycan · Şirvan · Gürcistan · Luristan · Şehrizor | bağlam |

**Tarama sayfası ↔ yıl eşlemesi** aynı aletle ölçüldü: s.617 "Year of the Ox 998/1589-90" · s.635 999/1590-91 · s.643 1000/1591-92 · s.651 1001 · s.663 1002.

## ④ ÇELİŞKİLER VE TUZAKLAR

```
🔴 ÇELİŞKİ  Bâne: BOA 1585 hükmü (Osmanlı beyleri arasında, TR) ↔ Iranica BĀNA (1747'ye kadar İran şahlarının
            gözetiminde, EN). Iranica cümlesi TARİHSİZ ve genel; §4⑥ ön koşulu: bu bir "tüm Safevî dönemi"
            genellemesi, 1585-1603 istisnasını dışlamıyor ⇒ hüküm TR belgesi yönünde, güven orta-düşük.
🔴 ÇELİŞKİ  Hemedan: atlas + TDV hemedan ("civarı") ↔ Eskandar Beg (Safevî valileri). GUNEY'e bildirilecek.
🟡 NOT      Özcoşar-Açar [280] 1720'ler için "Erdelan, Hemedan, Kermanşah, Lorıstan İLK DEFA Osmanlı tarafından
            ele geçirilmiş" diyor (Özgüdenli 2013'e atıf) — 1590 Luristan/Nihâvend kaydıyla çelişir görünür;
            muhtemelen "ilk defa TAHRİR edilen" anlamında. KULLANILMADI.
🔴 TUZAK    TDV `sultaniyye` 200 CANLI ama Memlük askerî terimi (§4②) · `mukri` 200 CANLI ama başka madde (KIRAAT) ·
            `derne` 200 CANLI ama Libya Derne'si · `sakiz` 302
🔴 TUZAK    Grep ile `Sakız` Ege adasını da buldu — iki ayrı nokta (D064)
🔴 TUZAK    Arama motoru YZ özetleri "Sakız Murad Bey'e verildi" gibi iddialar taşıdı → dayanağı blog (blogfa) — KULLANILMADI
🟡 ARAÇ     `py -c` Türkçe/Farsça metinde kanca tarafından durduruldu (§11 PY-C) → betik dosyaları yazıldı
```

## ⑤ BENZETİM (`ARAC-0047-BENZETIM`, bellekte · data/ dokunulmadı)

```
yama       7 kayıt (Kasr-ı Şirin + Kürt kuşağı 5 + Bîcâr — Bîcâr YALNIZ ölçüm için dahil, ÖNERİLMİYOR)
boşluk     7/7 kayıtta 0 sahipsiz gün (1500-1750, 30 günlük adım + uçlar ±1)
çakışma    Kasr-ı Şîrîn: 1 d/s çift — mevcut d 1723-1730 ile s safevi zaten üst üste (ÖN-VAR, yamadan değil)
yeni gün   0 — bütün günler (1534-12-04 · 1623-11-28 · 1585-09-25 · 1603-10-21) mevcut kırılma kümesinde VAR
           ⇒ Değişmez 2'ye yeni açık üretmez (KOŞU SONRASI denetle.py ile doğrulanmalı)
cep (16 nokta, ≥6/8 farklı)   1580 1→0 · 1590 1→0 · 1595 1→0 · 1605 1→0 · 1630 0→0
           Kasr-ı Şîrîn 1590: 7/8 → 0/8 · Mahabad 5→0 · Şehrizor 4→0 · Mîyandoab 4→0
```

## ⑥ ÖRTÜLÜ HAT TESTİ (`ARAC-0047-HAT`, km · + = batı/Osmanlı tarafı)

| yer | A Tebriz-Hemedan-Nihâvend | B +Miyâne | **C Tebriz-Merâga-Mîyandoab-Nihâvend** (Hemedan çıkarıldı) | D C+Miyâne |
|---|---|---|---|---|
| Kasr-ı Şirin | +264 | +264 | +232 | +232 |
| Zencan | −110 | −48 | −190 | −190 |
| Sultâniye | −124 | −70 | −202 | −202 |
| **Bîcâr** | **+16** | **+53** | **−55** | **−55** |
| Merîvan | +167 | +192 | +101 | +101 |
| Sakkız | +114 | +163 | +39 | +39 |
| Bâne | +165 | +205 | +92 | +92 |
| Serdeşt | +190 | +236 | +116 | +116 |
| Mahabad | +130 | +196 | +49 | +49 |

⇒ **Bîcâr'ın tarafı yalnız Hemedan'ın çapa olup olmadığına bağlı** — kaynak Hemedan şehrini Safevî gösterdiği için (C/D) Bîcâr doğuya düşüyor. Öteki 8'in tarafı dört varyantta da DEĞİŞMİYOR.
⚠️ Bu bir geometri ölçüsüdür, antlaşma çizgisi değildir (Iranica BOUNDARIES: "sınır bir çizgi değil kuşak").

## ⑦ ÖNGÖRÜ KARNESİ

| # | öngörü | ölçüm | hüküm |
|---|---|---|---|
| Ö1 | Kasr-ı Şirin Osmanlı doğrudan | TDV bagdat sancak listesi | 🟢 TUTTU |
| Ö2-3 | Zencan · Sultâniye Safevî | Sultâniye kaynaklı · Zencan dolaylı+örtülü | 🟢 TUTTU |
| Ö4 | Bîcâr belirsiz, adıyla anılmayacak | anılmıyor; hat üstünde | 🟢 TUTTU |
| Ö5 | Merîvan tâbi/Osmanlı | Erdelan tâbi (BOA) | 🟢 TUTTU |
| Ö6-8 | Sakız · Bâne · Serdeşt tâbi/belirsiz | Bâne kaynaklı tâbi; Sakız/Serdeşt kaynaksız (örtülü) | 🟢 TUTTU (mazeret dalı: tür belirsiz) |
| Ö9 | Mahabad Osmanlı/tâbi | Mukrî tâbi | 🟢 TUTTU |
| toplam | Osmanlı/tâbi 5-7 · Safevî 2 · belirsiz 1-3 | 6 · 2 · 1 | 🟢 TUTTU |
| Ö-K1 | TDV zencan/sultaniye canlı ama 1590'ı anmaz | zencan ✓ · **sultaniye ÖLÜ (302)** | 🟡 YARIM |
| Ö-K2 | Kürt beylikleri için gün bulunamayacak | **iki BOA hüküm günü bulundu** (11 Mart 1582 · 19 Nisan 1585) — belge günü, değişim günü değil | 🔴 ÇÜRÜDÜ (bilgi taşıdı) |
| Ö-K3 | ≥1 yer "bulunamadı" kalacak | Sakız · Serdeşt · Bîcâr | 🟢 TUTTU |

📌 **Öngörülmeyen en değerli bulgu:** Hemedan şehrinin barış yıllarında Safevî valisiyle yönetilmesi (Eskandar Beg) — öngörüler Hemedan'ı sabit Osmanlı çapası sanıyordu, ve Emre'nin kuralı da.

## ⑧ NE ÖLÇEMEDİM — üç damga (D107)

```
BULUNAMADI   Sakkız · Serdeşt · Bîcâr için 1578-1603 kaynağı · Kasr-ı Şirin'in Osmanlı sancağı olma BAŞLANGIÇ
             ve BİTİŞ günü (liste yalnız 1578-1588) · Erdelan/Mukrî tâbiliğinin BİTİŞ günü · Teymur Han'ın 1590'daki
             ölüm AYI (antlaşma gününden önce mi sonra mı) · Mukrî'nin 1590'daki merkezinin Soğukbulak olduğu
             (Iranica başkent bilgisi 1838)
ÖLÇÜLEMEDİ   Abedini 2009, Journal of Iranian History 2/1 (SBU) — PDF 41.105 karakter çıktı ama Farsça terimlerin
             HİÇBİRİ eşleşmedi (yaygın kelimeler dahil) ⇒ kodlama bozuk, §4⑦ · jhcin.srbiau.ac.ir "Erdelan eyaletinin
             Osmanlı-Safevî ilişkilerindeki yeri" makalesi — sunucu bağlantıyı reddetti (000) · Iranica ZANJAN /
             SOLṬĀNIYA / QAṢR-E ŠIRIN / MARIVAN / BANEH(slug) / SARDASHT / MAHABAD maddeleri 404
OKUMADIM     Kütükoğlu 1962/1993 s.201-206 (1590 sınır müzakeresi — en belirleyici kaynak bu) · Röhrborn 1966
             (DE, yalnız katalog) · Petruşevski (RU) · Bacqué-Grammont (FR) · Cambridge History of Iran c.6 ·
             Cambridge History of the Kurds (yalnız özet) · Koçak 2016 tezi (29 Mayıs Üniv., depo sayfası açılmadı) ·
             "Acem Serhaddinde Cafer Paşalar 1583-1591" (academia.edu) · Şerefnâme'nin kendisi · BOA hükümlerinin
             kendisi (makale üzerinden) · Ermeni/Gürcü/Azerbaycan akademik kaynakları — bu 9 yer için ilgili madde
             bulunamadı, taranmadı
```

## ⑨ KULLANICI KARARI GEREKENLER

1. **Çapa kuralı:** Hemedan şehri kaynağa göre Safevî ⇒ çapa **Nihâvend** (hat C) olsun mu? (Bîcâr'ın tarafını bu belirliyor.)
2. **Bîcâr:** dokunma (safevi) · ya da hat A kabul edilirse örtülü Osmanlı. Önerim: **dokunma**, beyanı `kaynak:`a yaz.
3. **Kürt kuşağı biçimi:** `d:` (doğrudan) mı, `v:` (tâbi, `k:"Erdelan Emirliği"` / `"Mukrî Beyliği"`) mi? Künye ve renk YOK ⇒ `v:` için önce künye gerekir (bugün yazılamaz, `§3.5.0` ③ sınıfı).
4. **Günler:** Kürt kuşağına Tebriz kuşağının `1585-09-25 → 1603-10-21` günleri mi, yoksa Merîvan için belge günü `1582-03-11` mi? (1584-85 Teymur Han isyanı tek dönemle MODELLENEMEZ.)
5. **Kasr-ı Şirin başlangıcı:** Hânekîn günü `1534-12-04` (D084) mi, yoksa yalnız kaynağın tanıklık aralığı mı? Liste "1578-1588".
6. **Hemedan** (GUNEY kapsamı): atlas d:1590-1603 Eskandar Beg ile çelişiyor — GUNEY'e sevk.
