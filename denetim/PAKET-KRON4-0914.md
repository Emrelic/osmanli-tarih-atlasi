# PAKET-KRON4 · 14 Eylül 2026 — Şırnak 1891 · 8 eski `onem` · Şeyhrumi · Karakoyunlu sonu

Sevk: 1.MURAT (tahta M-3890 açılış). Okunan: CLAUDE.md §3/§4/§7 · `denetim/PAKET-KAPSAM2-0914.md` §2.3/§4 ·
`denetim/ARASTIRMA-CALDIRAN-0913.md` §0/§2/§3/§8.

## 0 · Özet (sayıyla)

| kalem | sonuç |
|---|---|
| ① Şırnak 1891 | **1891'e madde YAZILMADI** — kaynakta 1891'e ait olay yok, `kur:1891-01-01` dayanaksız (atlas düzelecek yer). Yazılan: 1 kaynaklı Şırnak maddesi, **1884** (`data/olaylar_p0052.js`). Eşik 4'te Osmanlı d:/v: kırılması **1 → 1** (kabul ölçütü bilerek karşılanmadı, §1.4) |
| ② 8 eski `onem` | **8/8 yazıldı** · 7 öneriye katıldım · **1 ayrıldım** (ek22#0 Zend: öneri 3, yazılan **4**) |
| ③ Şeyhrumi | **Aynı sınıf (İŞARET)** → zincir yazıldı: `safevi 1502→1548-08-24` · `d: 1548-08-24→1920-04-23` · `tbmm 1920→1923` (değişmedi) |
| Karakoyunlu sonu (yazılmadı) | 3 madde **aynı olay**; kaynaklı gün yalnız **ek5#54 1467-11-10**. ek20#3 yıl-kaba mükerrer · ek7#121 "1468 baharı" **kaynaksız** (§4) |
| Eşik 4 kırılma aleti | gizli madde 37 → **31** · yalnız gizlilerle kapanan 39 → **32** · Osmanlı-hiç yerleşimli 15 → **9** · osm 1 → **1** |

Değişen dosyalar: YENİ `data/olaylar_p0052.js` (1 madde) · `data/olaylar_ek20.js` (7 satır, yalnız `onem`) ·
`data/olaylar_ek22.js` (1 satır, yalnız `onem`) · `data/yerlesimler_sinir_dogu.js` (yalnız Şeyhrumi: `s` · `d` · `kaynak` · `neden`).
Yazımdan önce dört dosya da `git status` temizdi. Commit atılmadı.

**index.html bağlama satırı** (koordinatör; `olaylar_p0050.js` satırı 1029'un altına):
```html
<script src="data/olaylar_p0052.js?v=r8232"></script>
```

---

## 1 · ŞIRNAK 1891

### 1.1 Kayıt (`data/yerlesimler_ok109.js:166-176`, dokunulmadı — dosya benim değil)
`kur:"1891-01-01"` · `kesinlik:"belirsiz"` · `d:[{f:"1891-01-01",t:"1920-04-23"}]` · `s: tbmm 1920→1923` · `m:"Bitlis"`.
Kaydın kendi yorumu (ok109.js:141-150): *1891-01-01 bir **alt sınırdır**, kuruluş günü değildir* — dayanağı Cuinet.

### 1.2 Kaynak ne diyor — TDV `sirnak` (HTTP 200, gövde okundu, 11.123 karakter)
- Toprak: 1514 Çaldıran Seferi'nin ardından Osmanlı'ya katıldı; Diyarbekir eyaleti **Siirt sancağı**.
- Tanzimat sonrası: Diyarbekir vilâyeti Siirt sancağı. **1884**: Siirt sancağı Bitlis vilâyetine bağlanınca Şırnak da
  Bitlis vilâyeti Siirt sancağı **Eruh kazası** içinde.
- Yerleşme: ad *"XIX. yüzyılın sonlarına doğru bir köy adı olarak"* geçiyor (Cuinet, II, 612) — **YIL YOK.**
- Kaza merkezi: Cumhuriyet'ten önce, dayanak 1925-26 Devlet Salnâmesi — **1923 penceresinin dışı, yıl yok.**
- İki BOA belgesi aşiret adı için (İrade-Dahiliye 1326, 1313-R-16 · İrade-Hususi 41) — **okunmadı**, 1891 değil (1313 ≈ 1895).
- TDV `siirt` (200) aynı yılı teyit ediyor: *"1884'te Bitlis vilâyetine nakledilen Siirt"*. `eruh` slugu **302 ÖLÜ**.

### 1.3 1891 günü — ölçüldü, dayanaksız
```
TDV             yıl vermiyor ("XIX. yüzyılın sonlarına doğru")
Cuinet II       cilt yılı KATALOGLARDA ÇELİŞKİLİ:
                  Wikimedia Commons (British Library HMNTS 10077.k.18): cilt 2 = 1892
                     "CUINET(1892) 2.552 Bitlis Vilayet" · "2.434 Diyarbekir Vilayet"
                  Internet Archive (Google-Michigan taraması laturquiedasieg02cuingoog): 1890
                  Gallica T2 kaydı: 403, OKUNAMADI
⇒ 1891 ÖLÇÜLEMEDİ (en güçlü tek işaret 1892'yi gösteriyor, ama tek katalog kaydı; başlık sayfası görülmedi)
```
🔴 **Ve kırılmanın cinsi yanlış:** 1891 bir egemenlik değişimi değil, noktanın **kayıtta görünmeye başladığı** alt sınır.
TDV bu toprağı 1514'ten Osmanlı sayıyor. Yani `Değişmez 2`nin sorduğu *"toprak değişimi anlatıldı mı"* sorusunun
burada anlatılacak bir olayı **yok**.

### 1.4 Niçin kabul ölçütü (1 → 0) karşılanmadı
±30 günde bir Osmanlı maddesi yazmanın tek yolu 1891'e bir olay koymaktı; kaynak yıl bile vermiyor.
*"Cuinet Şırnak'ı kaydetti — 1891"* yazmak **yıl uydurmaktır** (§4 ①, Guiengola vakası) ve atlasın dayanaksız gününü
madde üzerinden meşrulaştırırdı (§4 "ATLAS REFERANS DEĞİLDİR" — maddeyi atlasa uydurmak DEĞİL). PAKET-KAPSAM2'nin
Müleydâ'yı 4'e çekmeme gerekçesiyle aynı yön.

### 1.5 Yazılan madde — `data/olaylar_p0052.js` (window.OLAYLAR_P0052, 1 madde)
`t:"1884-01-01"` · `kesinlik:"yil"` · `k:"idari"` · `kapsam:"ic"` · `etiket:["idari","konu-idari"]` (toprak-* YOK ⇒ 2t'ye girmez) ·
`yer_id:"Şırnak"` · `kaynak:"siirt · sirnak"` · b: *Siirt sancağı Diyarbekir'den Bitlis vilâyetine nakledildi — Eruh kazası ve
Şırnak köyü de Bitlis'e bağlandı*. `ic_not_gun` iki TDV maddesinin yılını, `ic_not_d` atlas düzelecek yeri taşıyor.
Kayıtta `m:"Bitlis"` zaten bu idarî bağı gösteriyor; madde onu kronolojide anlatıyor. **1891 kırılmasını kapatmaz.**

### 1.6 ATLAS DÜZELECEK YER (Oturum 0 · `yerlesimler_ok109.js` Şırnak) — üç seçenek, öneriyle
1. 🟢 **Öneri:** Cuinet II'nin başlık sayfası yılı birincil taramadan okunur (BL/Gallica); 1892 çıkarsa `kur` ve `d:` başı
   `1892-01-01` olur ve `kaynak` metni *"alt sınır = Cuinet II yayın yılı"* diye düzeltilir. O günde de ±30 gün içinde madde
   olmayacak — kırılma **açık** görünür ve bu doğru görünürlüktür (egemenlik değişimi yok).
2. Denetim tarafı (6 · `denetle.py` sahibi): `d:` başı `kur`a eşit **ve** hemen önünde başka bir dönem olmayan kırılma bir
   *belirme*dir, toprak değişimi değil — `KAPSAM DIŞI` benzeri ayrı kovada sayılabilir. (Karar koordinatörün; ölçmedim kaç
   kayıt bu desende.)
3. Dokunmamak: bugün `denetle.py` Değişmez 2 bu kırılmayı Müleydâ ile **tesadüfen** kapalı sayıyor (D147); süzgeç Osmanlı
   listesine bağlanınca maddesiz görünecek.

---

## 2 · ESKİ `onem` — 8 madde (yalnız `onem` alanı)

Ölçüt (Emre): *bölgesel bazda Osmanlı'yı ilgilendiren önemli olay 4-5.* Kıyas için aynı paketin komşu hükümleri:
Nâdir Şah Mugan 1736 = 4 · Safevî kuruluşu 1501 = 5 · Oran 1509 = 4 · Celâyirli kuruluşu 1340 = 3 ("erken Osmanlı'dan uzak").

| dosya#sıra | t | madde | eski | öneri | **yazılan** | hüküm |
|---|---|---|---|---|---|---|
| ek20#5 | 1315-04-28 | Memlük Malatya'ya girdi | 2 | 3 | **3** | katılıyorum — İlhanlı-Memlük hattı; Osmanlı o yıl Bitinya'da, bölgesel ilgi yok |
| ek20#6 | 1338-01-01 | Malatya yeniden Memlük | 1 | 3 | **3** | katılıyorum — aynı gerekçe; 1'in altında kalmasını haklı kılan bir şey yok |
| ek20#1 | 1344-10-28 | İzmir Haçlılara (Aydınoğulları) | 3 | 4 | **4** | katılıyorum — Ege'deki komşu beyliğin deniz gücü kırıldı; Batı Anadolu dengesi |
| ek20#3 | 1467-01-01 | Uzun Hasan Karakoyunlu'ya son verdi (Van) | 3 | 4 | **4** | katılıyorum — aynı olayın öteki iki maddesi zaten 4; tek kopyayı düşük puanlamak tutarsız. ⚠️ Mükerrer — §4 |
| ek20#4 | 1490-01-01 | Gürcistan üçe bölündü | 2 | 4 | **4** | katılıyorum — Trabzon (1461) üzerinden doğrudan komşu; 1508 İmereti tâbiliği ve 1555 Amasya paylaşımının zemini (gövdede). ⚠️ Gövde: yıl "başka dayanaktan" |
| ek20#7 | 1510-07-25 | Trablusgarp İspanyol işgali | 2 | 4 | **4** | katılıyorum — 1519 Osmanlı'dan yardım talebi ve 1551 fethinin önü; Oran 1509 = 4 emsali |
| ek20#8 | 1530-03-24 | Malta-Trablus şövalyelere | 2 | 4 | **4** | katılıyorum — Rodos'tan sürülen hasmın yeni üssü; 1551 Trablus, 1565 Malta |
| ek22#0 | 1794-01-01 | Zend sonu — Kaçar hâkimiyeti | 2 | 3 | **4** | 🔴 **AYRILDIM** — Osmanlı'nın en uzun kara komşusunda hânedan değişimi ve Kafkasya-Azerbaycan tasarrufu; 1821-23 savaşının hasmı. Nâdir Şah 1736'nın (4) birebir karşılığı; 3 bu emsalle çelişir |

**Yalnız-alan sınavı** (`scratchpad/sinav.js`, HEAD ile vm yüklemesi): ek20 17 madde · onem değişen **7** · onem çıkarılınca fark **0** ·
ek22 1 madde · değişen **1** · fark **0**. `git diff --stat`: ek20 +7 −7 · ek22 +1 −1.

---

## 3 · ŞEYHRUMİ (Yücelen) — `data/yerlesimler_sinir_dogu.js`

### 3.1 Önce / sonra
```
ÖNCE  s: … akkoyunlu 1467→1502 · safevi 1502→1639-05-17 · tbmm 1920→1923   d: 1639-05-17→1920-04-23
SONRA s: … akkoyunlu 1467→1502 · safevi 1502→1548-08-24 · tbmm 1920→1923   d: 1548-08-24→1920-04-23
```
Eski zincir, kaydın kendi `kaynak` metnine göre *"en yakın komşu Çaldıran'dan BİREBİR alındı"* — yani 13 Eylül'de emekli edilen,
dayanaksız Çaldıran zincirinin kopyası. Eşi Şeyh Salû-yi Ulyâ (İran tarafı, 8,2 km) ve Çaldıran 1548-1639 Osmanlı iken bu köy
tek başına Safevî boyanıyordu.

### 3.2 Sınama — aynı sınıf mı
**Köyün kendi kaydı ve bağlı olduğu sancak/nahiye: BULUNAMADI** (web taraması: yalnız harita/istatistik siteleri, akademik kayıt yok;
BOA *Osmanlı Yer Adları* PDF'i 11 MB — okuyucu sınırını aştı, indirilmedi, **ölçülemedi**).
Çaldıran'ın hükmü de kendi kaydına değil **işaretlere** dayanıyor (ARAS-CALDIRAN §3: 🟡 İŞARET). Aynı işaretler bu köy için de
geçerli ve iki TDV maddesi bu turda **yeniden okundu**:
- TDV `van` (200): Van Kalesi *24 Ağustos 1548*'de fethedildi, bir daha el değiştirmedi; Van eyaletinde devamlılığı olan sancaklar
  arasında **Bargiri, Mahmudi ve Kotur**.
- TDV `maku` (200): 1574'te Mahmûdî İvaz Bey Mâkû'yu almakla görevli; 1605'te I. Abbas kaleyi alamadı; 1639 Kasrışîrin çerçevesinde
  Kotur ve Mâkû kaleleri yıkıldı, IV. Murad'ın ölümünden sonra İran tekrar işgal etti.
- Karataş 2025 (1585 *"Bargiri ma'a Kotur dere Beyi"*): ARAS-CALDIRAN raporundan — **bu turda yeniden okunmadı**, kayda böyle yazıldı.
- Konum (GeoNames koordinatı, kaynak iddiası değil): köy Bargiri (Muradiye) ile Kotur vadisi arasındaki kuşakta.
- Safevî tasarrufuna 1548-1639 arası işaret: **bulunamadı**.

⇒ **Hüküm: Çaldıran ile aynı sınıf (İŞARET), zincir yazıldı.** GÜN §4 şartlı komşu kuralıyla **doğrudan Van'dan** (TDV `van`),
Çaldıran kaydından devralınmadı (zincirleme yasak). `kaynak:` ve `neden:` alanlarına damgasıyla yazıldı.
⚠️ **Kalan belirsizlik:** 1548-1574 arası Mâkû Safevî'ydi; köyün (sınıra 4,2 km) o dilimde hangi yanda kaldığı **ölçülemedi**.
1281-1502 zinciri araştırılmadı, dokunulmadı.

### 3.3 Sınav
Kayıt sayısı 6 = 6 · **Şeyhrumi dışı fark 0** · değişen alanlar yalnız `s` `d` `kaynak` `neden`.
Yeni kırılma günleri `1548-08-24` (ek5 Van maddesi) — Değişmez 2/2s aşağıda (§5). Harita üretimi koşulmadı (Oturum 0).

---

## 4 · KARAKOYUNLU DEVLETİ'NİN SONU — üç madde (ölçüldü, YAZILMADI)

| madde | t | kaynak alanı | kaynak ne diyor | hüküm |
|---|---|---|---|---|
| **ek5#54** | 1467-11-10 | `karakoyunlular` | TDV `karakoyunlular` · `cihan-sah` · `uzun-hasan` üçü de: Cihan Şah Bingöl-Sancak baskınında öldürüldü, **12 Rebîülâhir 872 / 10 Kasım 1467** | 🟢 **kaynaklı, gün düzeyi — kanonik** |
| ek20#3 | 1467-01-01 | `akkoyunlular` | TDV `akkoyunlular` yalnız **yıl** (1467) | 🟡 aynı olayın **yıl-kaba mükerrer**i; daha ince gün başka TDV maddesinde var |
| ek7#121 | 1468-04-01 · gun "1468 baharı" | `akkoyunlular` | TDV `akkoyunlular` **1468 demiyor**. TDV `uzun-hasan`: 1468 baharı = **Bağdat kuşatması**; Hasan Ali'nin ordusu Merend'de bozuldu **Safer 873 / Eylül 1468**. TDV `karakoyunlular`: ordu dağıldı **Zilhicce 872 / Temmuz 1468**; Hasan Ali öldürüldü **Şevval 873 / Nisan 1469**; Bağdat kolu sonu **19 Aralık 1469** | 🔴 **"1468 baharı" kaynaksız** — gövde iddiası (*"ertesi bahara kadar kırıldı"*) gösterilen maddede yok |

⚠️ İki TDV maddesi Hasan Ali'nin yenilgisinde ay farkı veriyor (karakoyunlular Temmuz 1468 · uzun-hasan Eylül 1468 Merend). Aynı
savaş olup olmadığını ayrıştırmadım — **çelişki ilan etmiyorum** (§4 ⑥ ön koşulu), bildiriyorum.

**Öneri (sahiplerine):**
1. **ek5#54 kanonik kalır.** Atlasın Van havzası `karakoyunlu→akkoyunlu` `1467-01-01` kırılması (Erzurum · Kars · Ardahan · Van · Bitlis)
   kaynağa göre **1467-11-10**'a çekilir (Oturum 0 yerleşim yaması) — sonra **ek20#3 kaldırılır** (bugün o kırılmanın tek maddesi; önce
   kaldırılırsa Değişmez 2s açılır).
2. **ek7#121** ya kaldırılır ya da kaynağın verdiği gerçek son olarak yeniden yazılır: *Hasan Ali'nin yenilip öldürülmesi* ·
   `t:"1469-01-01"` · gün metinde "Nisan 1469 (Şevval 873)" (§4 kaba tarih kuralı; künye penceresi kontrol edilmeli). Atlasın `1468-04-01`
   kullanan `karakoyunlu` sonları aynı dayanaksız günü taşıyor — **30 kayıt** (`yerlesimler.js` 25 · `_kalite4` 2 · `_sinir_dogu` 3; sayım
   `t:"1468-04-01",d:"karakoyunlu"` dizgisi) — atlas düzelecek yer. `1467-01-01` karakoyunlu sonu ise **17 kayıt** (`yerlesimler.js` 5 ·
   `_ek26` 5 · `_ek_ferhadpasa` 4 · `_sinir_dogu` 3). ⚠️ İki ayrı gün iki ayrı kuşakta: 1467 Van havzası, 1468 Azerbaycan-İran —
   ikisi de tek olayın (10 Kasım 1467 → Nisan 1469 süreci) kaynaksız yuvarlamaları.
3. `denetle.py` mükerrer ölçütü farklı günleri yakalamıyor (PAKET-KAPSAM2 §2.3 yan bulgu) — bu vaka bir *aynı olay, üç gün* sınavı için örnek.

---

## 5 · KABUL SINAVLARI

```
node --check              p0052 · ek20 · ek22 · yerlesimler_sinir_dogu   4/4 temiz
yalnız-alan sınavı        ek20 fark 0 · ek22 fark 0 · sinir_dogu Şeyhrumi dışı fark 0   → TEMİZ
ARAC-A2-BAG --hepsi       önce 551/551 · HATA 0 · UYARI 141   sonra AYNI (çıktı diff'i BOŞ)
ARAC-KPS2-KIRILMA --esik 4
   önce   gizli 37 · yalnız gizlilerle kapanan 39 {yab 38, osm 1} · Osmanlı-hiç 15 · osm 1
   sonra  gizli 31 · yalnız gizlilerle kapanan 32 {yab 31, osm 1} · Osmanlı-hiç  9 · osm 1
   kalan osm: 1891-01-01 Şırnak ← Müleydâ (§1.4: bilerek)
```
`py arac/denetle.py` — önce (yazımdan önce) / sonra. ⚠️ **İzole DEĞİL:** iki koşu arasında VERI-KIRIM aynı çalışma ağacında
`yerlesimler.js · ek3 · ek4 · ek6 · ek17 · ek_bozkir · ok106 · h2_rusya · olaylar_ek16 · p0051` yazdı (`git status`); madde sayısı
1378 → 1383'ün yalnız +1'i benim.
```
                 ÖNCE                              SONRA
Değişmez 1       3818 · 324 sahipsiz ✓             aynı ✓
Değişmez 2       528 kırılma · 0 açık ✓            531 kırılma · 0 açık ✓
Değişmez 2s      1331 · 102 AÇIK (tavan 121) ✓     1329 · 100 AÇIK (tavan 121) ✓
Değişmez 2i      65 · 3 açık (tavan 3) ✓           aynı ✓
Değişmez 2t      15 (tavan 42) ✓                   15 ✓   (yeni madde toprak-* taşımıyor)
Değişmez 3z      m: 486                            481
Değişmez 7       ✗ 656 enklav (beklenen 650)       ✗ 658
exit             1 (yalnız Değişmez 7)             1 (yalnız Değişmez 7)
```
🔴 **Değişmez 7 başlangıçta zaten ✗'ydi.** +2'nin görünen satırı `1502-01-01 Kemah → safevi · ada: Aşkale+Erzincan+Erzurum+Kemah`
(A-koridor 488 → 490) — Erzurum kuşağı, VERI-KIRIM'in yerleşim dosyaları. Şeyhrumi denetim çıktısının **hiçbir satırında geçmiyor**
(önce de sonra da); değişikliği bir Safevî adacığını **kaldırıyor**, eklemiyor. ⇒ Bu pakete bağlanamaz, ama izole koşu yapılmadığı için
*"benden değil"* **ölçülmüş değil, çıkarımdır.** Kötüleşme yok: D2 açık 0 · 2s 100 ≤ 121.

---

## 6 · BULAMADIM / YAPMADIM
- 1891 için kaynaklı Şırnak olayı: **bulunamadı**. Cuinet II cilt yılı: **ölçülemedi** (katalog çelişkisi, Gallica 403).
- Şeyhrumi'nin sancak/nahiye bağı: **bulunamadı**. BOA *Osmanlı Yer Adları* (11 MB): **okunamadı** (araç sınırı; indirme izni istenmedi).
- Karataş 2025 bu turda **okunmadı** (ARAS-CALDIRAN'dan aktarıldı, kayıtta damgalı).
- BOA İrade-Dahiliye 1326 / İrade-Hususi 41 (Şırnak aşireti): **okunmadı**.
- Karakoyunlu maddeleri ve atlas günleri: yazılmadı (sevk: yalnız ölç).
- index.html bağlaması ve harita üretimi: Oturum 0.
