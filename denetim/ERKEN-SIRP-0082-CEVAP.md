# ERKEN-SIRP-0082 — CEVAP (parti-emrelic-0082 · 6 madde)

> Oturum: ERKEN-SIRP-0082 · 30 Eylül 2026 · HİÇBİR VERİ DEĞİŞMEDİ (`data/` · `js/` · `index.html` dokunulmadı).
> Ek: `denetim/ERKEN-SIRP-0082-YERLESIM-ONERI.md` (noktasızlık önerileri).

| # | Hüküm | Tek satır |
|---|---|---|
| H-0001 | ✗ hatali | Erbil'in dönüşü Bağdat'tan **1 gün geç** (12-25 ↔ 12-24); maddenin günü olan 24 Aralık'ta Erbil Safevî adası kalıyor |
| H-0002 | ◔ olculemedi | Szatmár kalesinin 1682'deki sahibi kaynakta **bulunamadı**; enklavın BÜYÜKLÜĞÜ ise kesin noktasızlık (73 km'de nokta yok) |
| H-0003 | ? emre-karari | Veri HAZIR (`data/ittifaklar.js`, 5 üye kaynaklı), ÇİZİM hiç yapılmadı (`js/`de `ITTIFAKLAR` okuyan satır 0); iki çizim seçeneği |
| H-0005 | ✔ dogru | Tâbi sınırında açık kırmızı kalın şerit ZATEN var (`vassal-serit-dis` #b2384a, 4→8 px); Emre'nin görselinde (H-0090) görünüyor |
| H-0090 | ✗ hatali | Özerk Sırbistan Belgrad·Semendire·Şabac'ı İÇERİR (TDV); atlas gövdesi 37 km güneyde bitiyor — sebep noktasızlık · gün sorusu `? emre-karari` |
| H-0091 | ? emre-karari | Doğrudan idarenin koyu hattı VAR ama ince (`osmanli-cizgi` #4d0713, sabit 1,8 px); kalınlaştırma seçenekleri |

Dağılım: **✗ 2 · ◔ 1 · ? 2 · ✔ 1** · koşu gerektiren: H-0001, H-0090 (+ H-0002 kaynak bulunursa).

---

## H-0001 — Bağdat'ın geri fethinde Erbil · ✗ hatali

**Görsel:** 1638-12-24 · 34,72–37,54N · 41,47–45,81E · madde "Bağdat'ın geri fethi". Ortada açık renkli ada = Erbil peteği.

**Ölçtüm** (`data/yerlesimler.js`):
- Bağdat (s. 741): `safevi 1623-11-28 → 1638-12-24`, `d:` **1638-12-24**'ten.
- Erbil (s. 1872): `safevi 1623-11-28 → 1638-12-25`, `d:` **1638-12-25**'ten.
- 1623–1640 aralığında Safevî penceresi olan **21 nokta** tarandı: **20'si 1638-12-24'te** bitiyor (Kerbelâ, Sâmerrâ, Tikrit, Hille, Necef, Kûfe, Vâsıt, Kût, Kifri, Hânekîn, Tuz Hurmatu, Halepçe, Âne, Hît, Fellûce, Dîvâniye …), **yalnız Erbil 12-25**. Erbil'in `kaynak:`/`neden:` alanı yalnız İlhanlı–Celâyirli sınırını anlatıyor; 25 Aralık için dayanak YOK.
- Kronoloji maddesi `data/olaylar_ek5.js:233` `t:"1638-12-24"`, kaynak `murad-iv`.

**Kaynak:** TDV `murad-iv`: *"17 Şâban 1048 / 24 Aralık 1638 Cuma"* Bektaş Han Bağdat'ı teslim etti. (TDV `bagdat` kuşatma başını "15 Ekim" diye aktarıyor — okuduğum özet böyle; `murad-iv` ordu Kâzımiye'ye "7 Receb (14 Kasım)" varmış diyor. Kuşatma başı bu hükmü etkilemiyor, not düşülür.)

**Hüküm:** Emre haklı: maddenin günü olan 24 Aralık'ta Erbil hâlâ Safevî görünüyor. Tek günlük ayrışma **kaynaksız** ve öbür 20 noktayla çelişiyor.
**Önerilen düzeltme (Oturum 0):** Erbil `s:` safevi `t:` ve `d:` başı → `1638-12-24`. Değişmez 2 etkilenmez (madde aynı gün). Koşu gerekir.

⚠️ **Ek bulgu (D206: iki uç ölçülmeli), bu maddeden BÜYÜK:** Erbil'in Safevî penceresi **1623–1638 kesintisiz**. Oysa komşuları Musul ve Kerkük yalnız **1624–1625** Safevî (TDV `musul--irak`, `hafiz-ahmed-pasa`), Şehrizor 1630'da geri alınmış (TDV `sehrizor`). ⇒ 1625–1638 arası Erbil haritada **Osmanlı toprağı içinde bir Safevî adası** oluyor. TDV `erbil` 1623 Safevî işgalini **hiç anmıyor** (yalnız 1535 fethi ve IV. Murad'ın 1638 menzilnâmesinde "önemli bir kale" olarak geçiyor); TDV `hafiz-ahmed-pasa` Erbil'i **anmıyor**. ⇒ Erbil'in 1625–1638 Safevî dönemi: **kaynak bulunamadı**. Bu ayrı bir kalem olmalı; kaynak bulunmadan Kerkük çizgisine (1625'e kadar) çekmek de uydurma olur. Önerim: koordinatör ayrı bir kaynak kalemi açsın (Kılıç 2001 *Türk Kültürü* XXXIX/460 zaten Kerkük/Şehrizor kayıtlarında kullanılmış; Erbil için aynı makaleye bakılmalı).

---

## H-0002 — Szatmár (Satu Mare) · ◔ olculemedi

**Görseller:** 1682-09-16 · 47,08–48,74N · 21,50–26,53E (ve 47,08–48,34N · 21,97–24,63E) · madde "Tököli İmre'ye Orta Macar krallığı beratı". Szatmár, Osmanlı + tâbi kırmızısı içinde sarı (Avusturya) bir **enklav**.

**Ölçtüm:**
- Kayıt `data/yerlesimler_ek_macaristan.js:280`: `macaristan →1526-08-29 → avusturya → 1918-11-11 → romanya-kralligi`, `v:[]`. Kaydın kendi notu: *"kaynak: bulunamadı — TDV `satmar`/`sakmar` ölü (302)"*, Orta Macar dönemi bilerek yazılmamış.
- **Noktasızlık:** Szatmár'ın 130 km çevresinde yalnız 6 nokta; en yakını Munkács **73 km**, sonra Debrecen 97, Ungvár 102, Varad 108, Tokaj 115, Erdel (Kolozsvár) 126 km. Máramaros (Máramarossziget 47,93/23,89) çevresinin **60 km içinde hiç nokta yok**. Görseldeki sarı alanın doğu yarısı (Nagybánya, Máramaros ≈ 23,5–24,6E) Szatmár peteğine emilmiş.

**Kaynak:**
- TDV `erdel`: Satmar'ı Varad ve Arad ile birlikte *"Macaristan ve eski Erdel arasında kalan"* ve Evliya Çelebi'nin **"Orta Macar ili"** dediği bölgede sayıyor. 1682'de kalenin kimde olduğunu SÖYLEMİYOR.
- TDV `macaristan`: Szatmár'ı yalnız 1711 Szatmár Muahedesi bağlamında anıyor (kaydın kendi ölçümü).
- hu.wikipedia `Szatmárnémeti` (tek dayanak değil, yalnız işaret): 1661 Türk tahribatı, 1676 Apafi'nin **başarısız** kuşatması. Tököli dönemi (1682–1685) için hiçbir şey yok.

**Hüküm:** "Szatmár 1682'de kimindi" sorusu **ölçülemedi**. Habsburg garnizonlu bir kalenin Kuruc/Osmanlı bölgesi içinde enklav kalması tarihsel olarak **mümkün** (1676'da Apafi alamamış). Ama atlasın Habsburg kaydı da kaynaksız (kardeş kayıtlardan kopya). Kaynaksız bir kaleyi Orta Macar'a geçirmek de uydurma olur.
**Kesin olan:** enklavın **BÜYÜKLÜĞÜ** yanlış (noktasızlık). Máramaros'un 17. yüzyıl sahibi (Erdel Prensliği olduğu yaygın bilgi) TDV'de **bulunamadı**, bu yüzden aday noktalar YERLESIM-ONERI'de "sahibi kaynak bekliyor" olarak listelendi.
**İstenen:** Szatmár 1682–1685 ve Máramaros 1570–1733 için akademik kaynak (Macar tarih yazımı: ör. *Erdély története* II, Akadémiai 1986). Bulunursa ▷ kosu-bekliyor olur.
⚠️ Kaydın `1526–1918 avusturya` tek parçası Szapolyai/Erdel dönemlerini (Partium) modellemiyor; kayıt bunu kendisi "SADELEŞTİRME" diye beyan ediyor.

---

## H-0003 — 5 Mart 1684 Kutsal İttifak animasyonu · ? emre-karari

**Ölçtüm:**
- **Veri hazır:** `data/ittifaklar.js` (P11-SEFER, 14 Eylül): `kutsal-ittifak-1684`, yer Linz [48,3069, 14,2858], 5 üye (papalık · habsburg · venedik · lehistan 1684-03; rusya 1686 yıl), her üye TDV kaynaklı (`polonya`, `karlofca`). Başlık notu: *"Çizim (rozet · Osmanlı'yı dolanan ip · tek seferlik animasyon) P14'ün işidir"*.
- **Çizim yok:** `js/*.js`'de `ITTIFAKLAR` okuyan satır **0**. Dosya `paket_15.js`e paketlenmiş (index.html s. 1262), yani yükleniyor ama kullanılmıyor.
- Bu, aynı isteğin **üçüncü** gelişi: parti-0023/H-0003 · 0027/H-0006 · şimdi 0082/H-0003.
- ⚠️ Gün: kronoloji maddeleri (`olaylar_ek3.js` + 3 kuyruk dosyası) **5 Mart**; `ittifaklar.js` `celiski`: TDV `polonya` yalnız **"Mart 1684"**, 5 Mart yalnız Vikipedi'de okunmuş. Madde günü kaynaksız.

**Karar Emre'nin (iki meşru seçenek):**
- **(a) Tek seferlik:** yalnız 1684-03-05 maddesi açılınca; rozetler başkentlerde (Roma · Viyana · Venedik · Varşova/Krakov, 1686'dan sonra Moskova), kavisli ipler, kırmızı-beyaz oklar akar ve söner. `ittifaklar.js` şeması buna göre yazılmış (`madde:` = tetik).
- **(b) Kalıcı:** 1684-03 → 1699-01-26 boyunca rozetler ve ipler haritada kalır; Rusya 1686'da eklenir. Karlofça'ya kadar her gün görünür (daha çok ekran kalabalığı; H-0088'deki "ekranı kirletmeyelim" isteğiyle gerilim).
- Önerim: **(a)**. Şema hazır, H-0088 ile çelişmiyor. (b) istenirse bir düğmeyle açılan katman olarak.
- Uygulama koordinatörün (arayüz işçisi). Veri tarafında eksik yok; yalnız 5 Mart günü kaynak bekliyor.

---

## H-0005 — Vassal sınırı açık kırmızı, kalın · ✔ dogru (zaten uygulanmış)

**Ölçtüm** (`js/app.js:1886-1890`): `vassal-serit-dis` katmanı, renk **#b2384a** (açık kırmızı), genişlik zoom 3→4 px · 5→6 px · 8→8 px. Dolgunun ALTINDA çizildiği için ekranda **dış yarısı** görünüyor (2–4 px). İç dolgu Osmanlı kırmızısı #8e0b22. Karar Emre'nin H-0084'ü (DALGA-0052, 16 Eylül).
Emre'nin kendi H-0090 görselinde Sırbistan gövdesinin çevresinde bu şerit **açıkça görünüyor**.
Himaye için ayrıca iki parçalı şerit var (`himaye-serit-dis` #8e0b22 + `himaye-serit-ic` #d4707d; 13 Eylül kararı). `statu:"gevsek"` + `himaye:true` → **#e8a2aa** dolgu (parti-0075/H-0010 ölçümü, `app.js:312`). **Yeni veri alanı gerekmiyor.**
**İstenirse:** "daha açık" ise #b2384a → #d4707d (himaye iç şeridinin tonu, zaten ölçülmüş), "daha kalın" ise [3,4,5,6,8,8] → [3,6,5,8,8,12]. Bu yalnız `app.js` değişikliği, koşu gerektirmez. Bu yüzden H-0091 ile tek karar olarak sunuldu.

---

## H-0090 — Sırbistan özerk prensliği Çaçak ve Jagodina'dan mı ibaret · ✗ hatali (gün: ? emre-karari)

**Görsel:** 1830-11-08 · 43,35–44,69N · 19,44–22,06E · madde "Sırbistan'a özerklik fermanı". Gövde Kragujevac·Çaçak·Jagodina çevresi; Semendire ve Belgrad dışarıda.

**Ölçüm parti-0075/H-0005'te yapılmıştı** (`denetim/SINIR-STATU-0075.md §3`); veri o günden beri **değişmedi**, bugün yeniden ölçüldü:
- `v:sirbistan-prensligi` yalnız Kragujevac (s. 2312) ve Çaçak (s. 2313) → `1830-11-08`; Jagodina (`yerlesimler_ek29.js:469`) tâbi.
- Belgrad (s. 444) ve Semendire (s. 443): `d:` doğrudan → **1867-04-18**, `v:` ancak 1867'den. Böğürdelen/Şabac (s. 2327) `kale`, doğrudan.
- Požarevac · Valjevo · Užice · Ćuprija · Paraćin · Ražanj · Loznica: **nokta yok** (bugün de 0 eşleşme). 0075'in alan ölçümü: gövdenin kuzey kenarı 44,498N, yani Belgrad'ın 37 km, Semendire'nin 26 km, Şabac'ın 31 km güneyi; Požarevac 15 km dışarıda.

**Kaynak:** TDV `sirbistan`: *"17 Ekim 1830'da verilen bir imtiyaz fermanıyla Sırplar muhtar bir idare elde etti"*, *"kale muhafızları dışında Sırp topraklarında hiçbir Türk'ün oturmayacağı"*, 1867'de Belgrad, Fethülislâm, Semendire ve Böğürdelen **kalelerindeki** garnizonların çekilmesi. TDV `belgrad`: *"Belgrad Sırbistan'ın idarî ve siyasî merkezi oldu (1839)"*. Ilić, *Istraživanja* 35 (2024): sınır = Belgrad Paşalığı sınırı; Kruševac, Paraćin, Ražanj **1832 sonu–Mayıs 1833**'te eklendi.

**Hüküm:** Emre'nin şüphesi doğru. Özerk Sırbistan **Belgrad Paşalığının tamamıydı**: Belgrad, Semendire, Şabac şehirleri dahil. Osmanlı'da kalan yalnız **kale garnizonlarıydı**. Atlasın "Belgrad bölgesi dışarıda" görüntüsü **yanlış**. Kök neden: kaleyle şehir aynı noktada `d:` taşıyor, çevrede de nokta yok.
**Düzeltme (Oturum 0 · ▷ koşu):** ① YERLESIM-ONERI'deki 7 nahiye merkezi ② Belgrad/Semendire/Şabac: şehir noktası `v:sirbistan-prensligi`, kale ayrı yakın nokta `d:` →1867-04-18 (0075 §3.3 (a)) ③ Kruševac/Paraćin/Ražanj 1833'e kadar doğrudan ④ koşu.

**Gün · ? emre-karari** (üç gün, kaynaklarıyla):
| Gün | Nerede | Dayanağı |
|---|---|---|
| **17 Ekim 1830** | TDV `sirbistan`; `d_sinirlar_avrupa_orta` `d1830-hm-sr-tuna-sp` | TDV cümlesi, doğrudan |
| **8 Kasım 1830** | kronoloji `olaylar_ek.js:73` (`gun:"1830"`) + Kragujevac/Çaçak `v:` başı | **bulunamadı** (0075'te de bulunamadı) |
| **30 Ağustos 1830** | künye `devletler.js:1249` · `savaslar.js:550` | kaynak alanı yok; künye günü kaynak değildir (§4) |

Kırılma günü kronoloji maddesiyle birlikte kaymalı (Değişmez 2, ±30 gün): 17 Ekim ↔ 8 Kasım arası 22 gün, yani pencere zaten tutuyor. 30 Ağustos seçilirse 70 gün olur ve madde de taşınmalı. Önerim 17 Ekim (tek kaynaklı gün), ama karar Emre'nin.

---

## H-0091 — Doğrudan idarenin sınırı daha koyu kırmızı · ? emre-karari

**Ölçtüm** (`js/app.js`):
- Doğrudan Osmanlı: `osmanli-cizgi` **#4d0713**, **1,8 px sabit** (zoomla büyümüyor), `osmanli-dolgu`nun üstünde (s. 1980).
- Bütün imparatorluk (doğrudan + tâbi) dış hattı: `imparatorluk-hale` #6d0d1c, 3,5 px, dolgunun altında, yani görünen ~1,75 px (s. 1863; Emre'nin "yarı yarıya inceltelim" kararı).
- Tâbi: `vassal-serit-dis` #b2384a, 4→8 px (H-0005).
⇒ İstenen ayrım (**koyu = doğrudan, açık = tâbi**) renk olarak ZATEN var. Ama doğrudan hat ince ve sabit; tâbi şeridi zoom 8'de 8 px'e çıkarken doğrudan hat 1,8'de kalıyor. "Algıda çarpıcı" olmamasının sebebi bu.

**Seçenekler (yalnız `app.js`, koşu yok):**
- (a) `osmanli-cizgi` 1,8 px → zoom ifadesi [3, 2 · 5, 3 · 8, 4], renk #4d0713 kalır.
- (b) (a) + renk #3a0510 (daha koyu). Dolgu #8e0b22 ile kontrast artar.
- (c) Dokunma: tâbi şeridini (H-0005) açarak ayrımı karşı taraftan büyüt.
Önerim **(a)**. Emre'nin daha önce "inceltelim" dediği hat `imparatorluk-hale`dir, `osmanli-cizgi` değil. İkisi karışmamalı.

---

## Bulamadıklarım
- Erbil'in 1625–1638 Safevî dönemine dayanak (TDV `erbil`, `hafiz-ahmed-pasa` anmıyor).
- Szatmár kalesinin 1682–1685 sahibi; Máramaros'un 17. yüzyıl sahibi (TDV `erdel` sınıf vermiyor, TDV `satmar` ölü).
- Kutsal İttifak'ın 5 Mart günü (TDV yalnız "Mart 1684").
- 8 Kasım 1830'un herhangi bir kaynakta karşılığı.

## Değişen dosyalar
`denetim/ERKEN-SIRP-0082-CEVAP.md` · `denetim/ERKEN-SIRP-0082-YERLESIM-ONERI.md` (ikisi de yeni; veri dokunulmadı).
