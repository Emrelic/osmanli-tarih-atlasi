# ONCE1281-YERLESIM-0930 — 1281 öncesi yerleşim ölçümü

*Oturum: ONCE1281-YERLESIM-OLC · 30 Eylül 2026 · RAPOR görevi — `data/` ve `arac/`a
dokunulmadı, `denetle.py` koşturulmadı, git işlemi yapılmadı.*
Makine okur tam liste: [`ONCE1281-YERLESIM-0930.json`](ONCE1281-YERLESIM-0930.json) (355 KB).
Araçlar (hepsi yeniden koşturulabilir, `data/`a yazmaz):
`denetim/ARAC-ONCE1281-YERLESIM-OLC.py` (①②) · `-TDV.py` (③) · `-EKSIK.py` (④) · `-YOGUNLUK.py` (⑤).
TDV önbelleği: `denetim/ONCE1281-YERLESIM-tdv-onbellek/` (≈1.100 sayfa).

Evren: `girdi.GIRDI_DOSYALARI` = **93 dosya · 4296 nokta** (§1.5 ile uyuşuyor).
`data/yerlesimler*.js` 94 dosya → 1'i bağlı değil: `yerlesimler_p77_kafkas.js`
(içinde f<1281 dönem: 0).

---

## 0 · ÖNGÖRÜ — ölçümden ÖNCE yazıldı (`CLAUDE.md §11`)

| Soru | Öngörü (araç koşmadan) | Ölçüm | Hüküm |
|---|---|---|---|
| ① `f:"1281-01-01"` dönem | ~2900 dönem · ~2700 nokta | **2526 dönem · 2526 nokta** | ❌ TUTMADI (bayat 2807'yi doğru sandım — o sayı `kd:`yi de sayıyor, §1) |
| ① doğan / yalnız el değiştiren | doğan ≈ tamamı · el değiştiren < 50 | 2526 / **0** | ✅ TUTTU |
| ② f<1281 dönem | 0–5 | **1** | ✅ TUTTU |
| ② tamamen 1281 öncesinde biten | 0 | **0** | ✅ TUTTU |
| ③ çekirdek kovada TDV yer maddesi olan | %30–40 | 214/593 = **%36** | ✅ TUTTU |
| ④ eksende atlasta HİÇ olmayan | ~%40 | 6/111 = **%5,4** (+3 "yakın, ad tutmadı") | ❌ TUTMADI — atlas dünya başkentlerini ZATEN taşıyor |
| ⑤ yoğunluğu yetersiz | Sahra-altı · Amerika · Sibirya/İç Asya · GD Asya | Sahra-altı · Amerika · Sibirya ✓ — ama **Hindistan · Çin · Kore/Japonya · Mâverâünnehir · K.Afrika kıyısı** da; İç Asya ve GD Asya kıtası beklenenden İYİ | 🟡 KISMEN |

---

## ① 1281 duvarı ne kadar kalın?

| Ölçüm | Sayı |
|---|---|
| `f:"1281-01-01"` dönem (s/d/v/isg) | **2526** — s 2521 · d 5 · v 0 · isg 0 |
| ayrı nokta | **2526** (her noktada tek) |
| bunlardan ilk sahiplik dönemi 1281-01-01 olan = **DOĞAN** | **2526** (%100) |
| 1281'den önce başlayıp 1281-01-01'de **EL DEĞİŞTİREN** | **0** |
| doğanlardan `kur:"1281-01-01"` taşıyan | 191 |
| canlı noktaların ilk dönemi yüzyıla göre | 1281-99: 2529 · 13xx: 35 · 14xx: 63 · 15xx: 172 · 16xx: 282 · 17xx: 301 · 18xx: 643 · 19xx: 120 · <1281: 1 · dönemsiz: 150 |

⇒ **Duvar 2526 noktadır — canlı yerleşimlerin %58,8'i.** Hepsi o gün "doğuyor"; o gün
el değiştiren yok. Yani `1281-01-01` veride yalnız bir ARAŞTIRILMAMIŞ-epok damgası
olarak kullanılıyor, gerçek bir devir olarak hiç kullanılmıyor.

### 🔴 Bayat 2807 ile fark: −281, ve sebebi EVREN hatası
Koordinatörün 2807'si birebir **ham metin sayımıdır**: çıplak `f:"1281-01-01"` 2667 + JSON
tırnaklı `"f":"1281-01-01"` 140 = **2807** (dizgi içi alıntı: 0). Bu sayı üç şeyi karıştırıyor:

| 2807'nin içinde | sayı |
|---|---|
| gerçek s/d/v/isg dönemi | 2526 |
| **`kd:` idari kademe dönemi** (sahiplik DEĞİL) | 277 |
| yorum satırı (`yerlesimler_afrika.js:1044,1047`) | 2 |
| açıklanamayan | 2 |

⇒ "duvarı kalınlaştırarak" kaldırma hesabı 2807 üstüne kurulursa 277 fazla sayılır.
`kd:` dönemleri de 1281'den başlıyor ve pencere açılınca onlar da geriye çekilmeli,
ama bu ayrı bir kalemdir (sahiplik değil kademe).

---

## ② 1281'den önce GERÇEKTEN var olan noktalar

| Ölçüm | Sayı |
|---|---|
| f < 1281-01-01 dönem | **1** — `Lapaha (Muʻa)` `s:{f:"1220-01-01",t:"1845-12-04",d:"tui-tonga-imparatorlugu"}` (`yerlesimler_ek30.js`) |
| tamamen 1281 öncesinde biten (t ≤ 1281-01-01) | **0** |
| `kur:` < 1281 | **2** — Lapaha (Muʻa) 1220 · Rapa Nui (Paskalya Adası) 1200 |
| bağlanmamış dosyada f<1281 | 0 |

⇒ **"Sessizce düşen" nokta YOK (0).** Tek f<1281 dönemin bitişi 1845'tir, yani 1281'de hâlâ
etkin. Motor kodu zaman çizelgesini `EPOK`tan başlatıyor (`uret_petek.py:4498-4499`,
`tarihler = [t for t … if EPOK <= t …]`); bu dönem EPOK'ta etkin sayılır ve **KIRPILIR**,
düşmez. ⚠️ Bu hüküm koddan okunmuştur — koşu çıktısında (Lapaha'nın 1281 peteği)
**ölçülmedi.**

---

## ③ Çekirdek kovada 1000-1281 varlığı — 593 nokta, katman katman

**Kova** = koordinat kutusu (araçta yazılı; Suriye/Irak önce, Cezîre Irak'a, Halep/Antakya
Suriye'ye) · `tur:"bolge"` dolgu noktaları hariç. `m:` alanı bölge değil merkez ADI taşıdığı
ve `bolge:` alanı yerleşimde olmadığı için kova koordinattan kuruldu.

| Kova | nokta | TDV yer maddesi | **var-aday** | ölçülemedi |
|---|---|---|---|---|
| Anadolu | 309 | 121 | **98** | 211 |
| İran | 103 | 29 | **19** | 84 |
| Irak (Cezîre dahil) | 70 | 21 | **14** | 56 |
| Mısır | 50 | 13 | **5** | 45 |
| Mâverâünnehir+Horasan doğusu | 37 | 13 | **11** | 26 |
| Suriye | 24 | 17 | **15** | 9 |
| **toplam** | **593** | **214 (%36)** | **162 (%27)** | **431** |

`ölçülemedi` 431 = **379 TDV maddesi bulunamadı** (slug 302 ve arama `--` ekiyle tutmadı)
+ **52 madde var, gövdede 1000-1280 tarihli cümle yok.** "Yok" hiçbir kayda yazılmadı.

### `var-aday` NE DEMEK — ve ne DEMEK DEĞİL
TDV gövdesinde **tarih biçiminde** (`(1071)` · `(464/1071)` · `1071'de` · `1071 yılı` ·
`(1096-1099)`) 1000-1280 arası miladî yıl taşıyan ilk cümle, JSON'da **birebir alıntı**
(`tdv_cumle`). Son sürümden 15 kayıtlık rastgele örneklem (tohum 42): **13'ü noktanın kendisini,
2'si YÖREYİ tarihliyor** — Çanakkale ("Çanakkale yöresine kadar ulaştılar", 1110 — şehir 1462
kuruluşudur) ve Bartın ("Bartın yöresini … kesin olarak bilinmemektedir"). ⇒ `var-aday` bir
**İNSAN TEYİDİ kuyruğudur**, hüküm değildir; `CLAUDE.md §4` "bölgeden şehre taşınan hüküm
halka almaz" kuralı burada tam geçerli.

### Aracın kendi hataları — ölçüldü, düzeltildi (başkası tekrarlamasın)
| Tuzak | Ölçüm | Çare |
|---|---|---|
| **TDV hız sınırı** | ilk koşuda 741 isteğin **421'i HTTP 503** — ve önbelleğe "madde yok" diye yazılmıştı | 5xx/000 önbelleğe YAZILMAZ, 6 kez artan bekleme; tek iş parçacığı, 1 sn aralık. Son koşu: kalıcı 5xx **0** |
| **arama bağlantısı göreli** | `href="/slug"`; mutlak desen **361 aramanın 361'inde** sessiz 0 | desen iki biçimi de tanır (D240 ailesi) |
| **arama yanlış madde** | tek tireli önek 6 isabetin **5'inde** yanlış madde (`meshed-ulucamii`, `resid-riza`, `sari-abdullah-efendi`, `esref-i-mazenderani`, `damgan-tarihane-camii`) | yalnız `--` ayrım eki kabul (`humus--suriye`) |
| **canlı slug yanlış madde** (§4 ②) | `ordu` = ordu teşkilatı; 21 kayıt | ilk 1500 karakterde yer sözcüğü yoksa madde reddedilir |
| **sayı ≠ yıl** | "1000 askerin", "1200 akçe", "1000 tona", "milâttan önce 1100", sayfa kalıbı artığı | yalnız tarih biçimi; MÖ öneki elenir |
| **hicrî tuzak** | "1087’de (1676)" — hicrî 1000-1280 = miladî 1591-1864 | ardından ≥1281 miladî parantez gelen yıl atlanır |

---

## ④ EKSİK noktalar — 111 şehirlik eksen

Eksen: 1000-1281 başkentleri ve büyük şehirleri (İslâm dünyası 62 · Avrupa/Bizans/Rus 17 ·
Doğu/Güney/GD Asya 17 · Afrika 10 · Amerika 7 — tam liste araçta). Eşleşme: normalleştirilmiş ad
(`ARAC-NORMAL-0903`) **≤ 50 km** içinde, yoksa 3 km, yoksa 15 km "yakın".
⚠️ Ad eşleşmesine 50 km tavanı sonradan kondu: `Tula` ilk koşuda **329 km** ötedeki
`Tula (Tamaulipas)` ile "VAR" çıkmıştı.

| Sonuç | Sayı |
|---|---|
| VAR (ad ya da 3 km) | **102** — 99'unun ilk dönemi `1281-01-01` (duvar) · Gao 1324 · Mapungubwe ve İfe dönemsiz |
| YAKIN (≤15 km, ad tutmadı — insan bakmalı) | **3** |
| YOK | **6** |

### Nokta ÖNERİLERİ — eklenmedi
🔴 **Koordinatlar YAKLAŞIKTIR, kaynak DEĞİLDİR** (bilinen arkeolojik alan/şehir merkezi; 3 km
taramasını sürmek için). Nokta yazılmadan önce TDV/akademik gazeteerden teyit edilmelidir —
bu oturum koordinat kaynağı **bulamadı** (`veri-kaynak/`ta yerleşim gazeteeri yok; yalnız
Natural Earth kara/ülke/göl/nehir).

| Öneri | yakl. lat, lon | Rol (1000-1281) | Atlasta en yakın | TDV |
|---|---|---|---|---|
| **Fîrûzkûh** | 34.40, 64.52 | Gurlu başkenti | Herat 213 km | `firuzkuh` 302 — **bulunamadı** |
| **Otrar** | 42.85, 68.30 | Hârizmşah sınır şehri, 1219 | Türkistan (Yesi) 50 km | `otrar` 302 — **bulunamadı** |
| **Polonnaruva** | 7.94, 81.00 | Sri Lanka başkenti | Kandy 83 km | kapsam dışı |
| **Kumbi Salih** | 15.77, −7.97 | Gana başkenti | Nema 121 km | kapsam dışı |
| **Tula (Tollan)** | 20.06, −99.34 | Tolték başkenti | Tlacopan 69 km | kapsam dışı |
| **Chaco Kanyonu** | 36.06, −107.96 | Anasazi merkezi | Acoma Pueblo 124 km | kapsam dışı |
| *Ani* (YAKIN) | 40.51, 43.57 | Bagratlı başkenti · 1064 Selçuklu fethi | Kliçatak (Suser) **14,7 km** | `ani` 302 — **bulunamadı** |
| *Rey* (YAKIN) | 35.59, 51.44 | Büyük Selçuklu merkezi | Tahran **12,0 km** | `rey` 200 ✓ |
| *Fustat* (YAKIN) | 30.00, 31.23 | Mısır'ın ticaret merkezi | Kahire **5,4 km** | `fustat` 200 ✓ |

⚠️ Fustat 5,4 km ve Rey 12 km'de ayrı nokta açmak `§11` yakın-mükerrer kuralına **takılmaz**
(eşik 3 km) ama petek açısından Kahire/Tahran peteğini bölecektir — `kur:`/`bit:` ile zaman
ayrımı gerekir (Rey 1220 Moğol yıkımı, Tahran sonra büyür). Karar koordinatörün.
📌 `Merv (Mari)` atlasta **modern Mary'de**, eski Merv'e (Sultan Kale) 32 km — 1000-1281 için
nokta yanlış yerde durabilir; ölçüldü, düzeltme önerilmedi.

---

## ⑤ Kapsam genişlemesinin sırası bozuluyor mu?

Ölçüt `MIMARI.md §5` (yoğun 60 · normal 120 · seyrek 300 km). Izgara 0,5° kara hücresi
(**61.565** hücre, `ne_10m_land`, box(−180,−60,180,85)), alan ağırlıklı (cos φ).

- **A — "1281 kesiti" (2673 nokta):** pencere geriye açılıp 1281'de var olan her nokta 1000'e
  UZATILIRSA. **İyimser tavandır**: hepsinin 1000-1281'de var olduğunu varsayar. Ve ters yönde
  eksik: ilk dönemi 1281'den sonra başlayan 1623 nokta (ör. Amerika'da fetih tarihinden başlayan
  `s:`) A'ya girmez, oysa bir kısmı o kuşakta vardı.
- **B — "kanıtlı" (163 nokta):** ③'teki var-aday + ②'deki Lapaha. Yalnız çekirdek kovada ölçüldü.

| Bölge | eşik | A: eşik üstü % | A medyan km | A nokta | B: eşik üstü % |
|---|---|---|---|---|---|
| Rumeli/Balkan | 120 | **0,0** | 32 | 276 | — |
| İskandinav | 300 | 0,0 | 65 | 100 | — |
| Batı/Orta Avrupa | 120 | 0,5 | 45 | 318 | — |
| Britanya+İrlanda | 120 | 1,1 | 42 | 47 | — |
| Kafkas | 120 | 1,8 | 54 | 76 | — |
| İber | 120 | 2,5 | 53 | 66 | — |
| Anadolu | **60** | 10,3 | 29 | 330 | 31,3 |
| Kazak bozkırı | 300 | 10,9 | 161 | 33 | — |
| Arabistan | 300 | 14,5 | 126 | 137 | — |
| İtalya | **60** | 17,3 | 38 | 122 | — |
| Moğol/İç Asya | 300 | 17,3 | 180 | 59 | — |
| Levant+Irak | 120 | 21,2 | 70 | 104 | 52,3 |
| Sahra | 300 | 29,7 | 195 | 79 | — |
| Doğu Avrupa/Rus | 120 | 29,8 | 87 | 185 | — |
| İran | 120 | 29,9 | 82 | 150 | 69,6 |
| GD Asya kıta | 120 | 30,1 | 86 | 126 | — |
| Nil vadisi+Mısır | 120 | 35,1 | 93 | 56 | 86,6 |
| Mâverâünnehir+Horasan | 120 | 39,9 | 102 | 68 | 81,9 |
| Kuzey Afrika kıyısı | 120 | 40,4 | 95 | 177 | — |
| Orta Afrika | 300 | 47,1 | 286 | 16 | — |
| Ada GD Asya | 120 | 48,5 | 118 | 170 | — |
| Çin | 120 | 49,9 | 121 | 91 | — |
| Avustralya+Okyanusya | 300 | 49,9 | 307 | 50 | — |
| Doğu Afrika+Habeş | 120 | 51,2 | 124 | 157 | — |
| Hindistan | 120 | 54,0 | 132 | 109 | — |
| Güney Afrika | 300 | 57,1 | 343 | 19 | — |
| Kore+Japonya | 120 | 59,9 | 226 | 32 | — |
| Batı Afrika+Sahel | 120 | 64,7 | 160 | 41 | — |
| Güney Amerika | 300 | 70,0 | 488 | 33 | — |
| Mezoamerika | 120 | 74,7 | 275 | 20 | — |
| Sibirya | 300 | 78,7 | 579 | 25 | — |
| **DÜNYA (A)** | | **>120 km %68,6 · >300 km %34,8** | | | |

### Hüküm — `§6` "hangi sıra" sorusunun dayanağı
1. **Pencere bugün açılırsa bile yoğunluk YETER (A <%3):** Balkan · Batı/Orta Avrupa ·
   Britanya · İskandinav · Kafkas · İber. Bu bölgelerde iş YOĞUNLUK değil, 2526 noktanın
   `1281-01-01` dönemini **gerçek 1000-1281 sahipleriyle bölmek**tir.
2. **Sınırda (A %10-30):** Anadolu (60 km ölçütünde %10) · İtalya (%17, 60 km) ·
   Levant+Irak · İran · Doğu Avrupa/Rus · GD Asya kıtası · Arabistan/Kazak/Moğol (seyrek
   ölçütte). Önce ③'ün teyit kuyruğu kapanmalı.
3. **YETERSİZ (A ≥ %40):** Mâverâünnehir+Horasan · K.Afrika kıyısı · Hindistan · Çin ·
   Kore/Japonya · Ada GD Asya · bütün Sahra-altı Afrika · Mezoamerika · G.Amerika ·
   Avustralya · Sibirya. **Pencere buralarda açılırsa kenar petekleri yayılır** — tam
   `§6`nın uyardığı durum. Önce nokta yoğunluğu.

🔴 **Ve iyimser A bile ÇEKİRDEKTE yetmiyor:** B (kanıtlı) ile Mısır %87 · Mâverâünnehir %82 ·
İran %70 · Levant+Irak %52 · Anadolu %31 hücre eşiğin dışında kalıyor. Yani "1281 noktasını
geriye uzat" varsayımı teyit edilmeden çekirdek coğrafyada bile yoğunluk **ölçülmüş değil,
varsayılmıştır.**

---

## ⑥ Bulunamayanlar (`bulunamadı` bir sonuçtur)
- Yerleşim koordinatı için **akademik gazeteer** — `veri-kaynak/`ta yok; ④ önerileri yaklaşık.
- TDV'de `ani`, `otrar`, `firuzkuh` slug'ları **302**; `--` ekli arama isabeti yok. `CLAUDE.md §4`e
  göre sonraki adım olayın KİŞİSİ/kapsayıcı YER maddesidir (ör. Ani → `kars`; Otrar → `farab`) —
  bu oturumda **denenmedi**.
- ③'ün 379 "madde yok" kaydı için ikinci ad varyantı (eşanlam sözlüğü) denenmedi.
- Motorun f<1281 dönemi KIRPTIĞI koddan okundu, koşu çıktısında **ölçülmedi**.
