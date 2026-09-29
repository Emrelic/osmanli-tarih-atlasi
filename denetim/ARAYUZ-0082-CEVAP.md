# ARAYUZ-0082 — CEVAP (parti-emrelic-0082 · 10 madde)

**Oturum:** ARAYUZ-0082 · 30 Eylül 2026 · **Dosyalara dokunulmadı** (`js/**` · `index.html` · `css/**` · `data/**` — şartname "DOKUNMA"; koordinatörün mesajı "önce haber ver" diyor → kod önerisi aşağıda, uygulama izni bekliyor).
**Ölçüm ortamı:** yerel sunucu (`py -m http.server 8765`), canlı motor r10630, gövdeler `harita.getSource(id).serialize().data`dan. Aletler `denetim/HARITA-0076-YAMA-olcum.js` (`__aci`) + bu oturumda konsolda yazılan üç ölçüm (kesişim, ızgara kenarı, kaplama profili — işlevleri §Ek'te).

## Özet — hüküm dağılımı
| madde | konu | hüküm |
|---|---|---|
| H-0004 | Bosna Brod'u kesik çizgisi | `? emre-karari` (çizginin anlamı doğru; çizimi yanıltıcı) |
| H-0013 | kronoloji metin araması | `✔ dogru` (~bayat — ARAMA-0930 ile yapıldı, 4/4 istek karşılanıyor) |
| H-0028 | Özi 1774 "bozuk görünüm" | `▷ kosu-bekliyor` (motor: 0,05° ızgara kenarı gövdeye sızıyor — **YENİ SINIF**) |
| H-0056 | Dürrânî 1794 çapraz şerit | `▷ kosu-bekliyor` (0° iğne + ince şerit, noktasızlık — Kova C) |
| H-0057 | Üstyurt/Karakum 1796 boş | `? emre-karari` (kasıtlı çöl beyanı; göçebe otlağı boyansın mı) |
| H-0080 | tam ekran sorusu | `✗ hatali` (eksik özellik — kod önerisi hazır) |
| H-0086 | atıf satırı + OWTRAD | `✗ hatali` (davranış) + `? emre-karari` (OWTRAD) |
| H-0087 | Kapat/sürüm/lejant/i yerleşimi | `✗ hatali` (eksik özellik — kod önerisi hazır) |
| H-0088 | yatay +/− köşede | `✗ hatali` (eksik özellik — kod önerisi hazır) |
| H-0100 | Asîr 1871 yıldız şekli | `▷ kosu-bekliyor` (= H-0022, Kova C sivri köşe) |

**dogru 1 · hatali 4 · kosu-bekliyor 3 · emre-karari 2(+1 alt soru) · olculemedi 0**

---

## 🔴 Koordinatörün ön hükmü ÖLÇÜLDÜ ve TUTMADI: H-0028/0056/0100 Kova A DEĞİL
Mesajdaki öngörü: üçü de C katmanının opak `kapsama.kutu` dikdörtgeni (H-0148 sınıfı).
**Ölçüm:** o üç tarihte etkin C kayıtları:
```
1774-07-21 (H-0028)  karlofca-lehistan/venedik/bosna-kaleler (nokta-kumesi — kutu YOK) · bosna-sava (dolgu:false)
1794-01-01 (H-0056)  aynı dört kayıt
1871-01-01 (H-0100)  ii-erzurum-sattularap (dolgu:false) · bosna-sava (dolgu:false) · bosna-kaleler (nokta)
```
Dolgusu açık ve kutusu olan tek kayıt `misir-sudan-22-paralel-1899` (1899→1914) — üç tarihin hiçbirinde etkin değil, üç pencerenin hiçbirine değmiyor.
Ayrıca `tara()` üç pencerede `hukuki-sinir-dolgu` kaynağından **0** özellik buldu. ⇒ Üçü **üç ayrı sınıf**; tek hükümle bağlanamaz.
📌 Yan bulgu: HARITA-0076 yamasının üç kaydından ikisi uygulanmış (`midye-enez`, `sattularap` → `dolgu:false`); `misir-sudan-22-paralel` hâlâ dolgulu (`paralel` türü, `dolgu` alanı hiç yok).

---

## H-0004 — "bu çizgi neyi gösteriyor" · `? emre-karari`
**Ekran:** 1699-01-26 · 44.82–45.27N 17.86–19.47E · Bosna Brod'u.
**Ölçüm:** çizgi C katmanının `hukuki-sinir-hat` katmanı (`js/app.js:2046`, `#1a1a1a`, 2,2 px, kesik). Kayıt `karlofca-bosna-sava-1699` (`data/hukuki_sinirlar.js:312`).
**Anlamı (doğru):** Karlofça'da Bosna–Slavonya sınırı. TDV `karlofca`: *"Sava nehrinin Bossut'un Sava'ya döküldüğü yerden Brot Kalesi'ne kadar sınır olması kabul edildi."*
**Neden garip görünüyor:** hat yalnız **iki uç noktadan** çiziliyor (Brod 17.988/45.138 → Bosut ağzı 19.371/44.941): Sava'nın akışını değil **düz kirişi** çiziyor. Asıl sınır zaten petek motorunda Sava'ya yaslanıyor (Sava `BUYUK` nehir kümesinde). Yani ekranda aynı antlaşmanın iki çizimi var: biri nehri izleyen sınır, öteki nehri kesen cetvel.
Ayrıca kayıt **1699 → 1918** açık: çizgi 219 yıl boyunca her gün görünüyor (Pasarofça 1718, 1878 işgali ve 1908 ilhakı dâhil).
Çizgiye tıklayınca kayıt adı ve TDV alıntısı çıkıyor, ama kullanıcı bunu bilmiyor.
**Seçenekler (sayılarla, seçmiyorum):**
1. **Hattı kaldır** (`hat` → yalnız referans noktası): 1 kayıt, sınır zaten petekte doğru çiziliyor. Bilgi kaybı: tıklanınca çıkan antlaşma künyesi.
2. **Hattı Sava'nın gerçek geometrisine oturt** (`ne_10m_rivers` Sava parçası, Brod→Bosut arası kırpılır): çizim doğru olur. Bedeli `_cKayitGeometrisi`ye yeni bir "nehir izle" türü eklemek.
3. **Olduğu gibi bırak + lejanta satır:** "kesik siyah çizgi = antlaşma metnindeki hukukî sınır (yaklaşık)". Bedeli en düşük, cetvel görüntüsü kalır.
Öneri: 1 (petek zaten doğru; iki çizim yarıştırılmasın) ya da 2. Pencere de en azından **1718 Pasarofça'da** kapanmalı ya da yeni antlaşmaya devredilmeli — bu bir kaynak işi, `bulunamadı`.

## H-0013 — kronoloji metin araması · `✔ dogru` (~bayat)
Şikâyet haklıydı, bu gece `ARAMA-0930` (r10629, `js/arama.js`) ile çözüldü. Emre'nin dört isteğini tek tek sınadım (node, `js/arama.js`):
```
"deli ibrahim"   → TUTAR      "ibrahim deli" → TUTAR   (sıra önemsiz ✓)
"İBRAHİM deli"   → TUTAR      (Türkçe büyük/küçük — sgNorm ✓)
"deli murad"     → TUTMAZ     (VE ✓)
gelişmiş VEYA [murad | b:deli] → TUTAR · VE → TUTMAZ   (VE/VEYA ✓)
sınav: denetim/ARAC-ARAMA-0930-SINAV.js  34/34 geçti
```
**Tek eksik (Emre istemedi, kayda):** gelişmiş pencerede bağlaç **bütün satırlara tek**; `(A VE B) VEYA C` gibi karışık/gruplu sorgu yok. Emre'nin metni ("ve veya bağlaçları ile arayacak yapı") tek bağlaçla karşılanıyor; gruplama isterse ayrı istek.

## H-0028 — Özi 1774 "garip bozuk görünüm" · `▷ kosu-bekliyor` · 🆕 YENİ SINIF
**Ekran:** 1774-07-21 · 45.79–47.15N 31.26–32.88E · Özi/Kınburun.
**Ölçüm:** gövdelerde eksen hizalı, uzun düz kenarlar var:
```
osmanli  32.217,46.456 → 32.533,46.456   (yatay 0.316°)
osmanli  32.533,46.456 → 32.532,46.206   (dikey 0.250°)   ← ekrandaki "dikdörtgen" köşesi
kirim|rusya ortak kenarı  32.000,46.350 → 32.952,46.350  (yatay 0.952° ≈ 74 km)
osmanli|kirim  31.744,46.850 → 31.900,46.850 (yatay)
```
Köşelerin **0,05° ızgarasına** oturup oturmadığını saydım (`KV_ADIM = 0.05`, `arac/uret_petek.py:1208`; ızgara `BOLGE` kökünden, −180/−60):
```
pencere Özi       452 köşe · ızgara çizgisinde 67 (%14,8) · ızgara düğümünde 9
denetim Anadolu    32 köşe · 0 · 0
rastlantı beklentisi (3 hane, her eksende 1/50): ~%4 ve düğümde ~%0,04
```
46.350 = ızgara satırı 2127; 31.90 ve 32.00 ızgara sütunları.
⇒ `uret_petek.py:1190`daki *"IZGARA YALNIZ SAHİPLİĞE KARAR VERİR, SINIR ÇİZMEZ"* **bu pencerede tutmuyor**: kara-kısıtlı sahiplik ızgarasının (`_YR_IZGARA`, "karar bölgesi — raster", `:2073-2090`) basamak kenarları gövde sınırı olarak çiziliyor. Özi–Dinyeper–Bug limanı tam "hat denizden geçiyor ⇒ IZGARA KARAR VERİR" durumu.
**Başka nerelerde (dünya, 1774-07-21):** `osmanli+vassal+devlet` gövdelerinde **175.847 kenardan 2.085'i** (%1,19) ≥ 0,05° uzunlukta ve tam ızgara çizgisi üstünde eksen hizalı. Devlete göre: osmanli 102 · ingiliz-kuzey-amerika 82 · rusya 72 · vassal 71 · avusturya 53 · ispanya 53 · maratha 49 · racput 48. 1°'lik hücrede en yoğun: 29E/46N (Özi'nin kendisi) 18.
**Teşhis sınırı:** ızgara kenarının hangi adımda (`_YR_IZGARA` farkı mı, `_yr_V` rasterize mi, `:2282-2283`) sızdığını **ölçmedim**. Motor koduna ben dokunmam (§7, §9.1).
**İstenen:** motor oturumuna ayrı kalem. Kova A değil, `hukuki_sinirlar.js` yaması bunu çözmez. Çözüm tam inşa koşusu ister (tuz değişir, §9.1 ②).

## H-0056 — Dürrânî 1794 çapraz şerit · `▷ kosu-bekliyor` (Kova C)
**Ekran:** 1794-01-01 · 29.73–34.51N 65.22–70.75E · Kandehar–Gazne.
**Ölçüm (`__aci`):** `devlet:afgan-durrani` gövdesinde **0,0° iğne** @66.748E 32.755N, kenar 0,639° (≈70 km). Aynı doğrultuda (eğim ≈ −0,99) üç uzun düz kenar: 2,77° · 2,43° · 2,41°. Gövde halkası **kendini kesmiyor** (kesişim 0), yani geçersiz poligon değil.
Kaplama profili (hatta dik, 0,1° adım, 66.3E/33.26N'den): `D D D D D D D D D - - - - - - D - - - …` ⇒ yaklaşık 0,07° genişliğinde bir Dürrânî **şeridi**, iki yanında **hiçbir gövde yok**.
**Sebep: noktasızlık.** 63,5–71E × 29–35,5N penceresinde (~450.000 km²) **6 yerleşim** var: Kâbil · Gazne · Kandehar · Dera Gazi Han · Dera İsmail Han · Bannu. Hazârecât/Uruzgân dağlık iç kesimi tamamen noktasız. Şerit iki petek kenarının arasında kalan artık parça (§2: noktasız bölge).
**Başka nerelerde (dünya, iç açı < 5°, kenar ≥ 0,3°):** 1500: 22 · 1600: 23 · 1700: 33 · 1774: 37 · 1794: 39 · 1871: 38 · 1900: 43 tekil iğne. Aynı bölge 1871/1900'de de var: `afganistan` 1,2° @65.07E 34.42N; ayrıca `cammu-kesmir` 0° (kenar 1,14°). ⚠️ Bu sayıya gerçek fiyortlar da giriyor (danimarka/isvec: Norveç, Grönland kıyısı), yani üst sınır; kusur sayısı değil.
**İstenen:** Hazârecât'a kaynaklı yerleşim noktaları (aday adlar: Uruzgân · Bâmiyân · Kalât-ı Gılzây · Mukur). Koordinat + kaynak **bulunamadı** (bu turda aramadım) ⇒ `YERLESIM-ONERI` yazılmadı; ayrı kaynak kalemi.

## H-0057 — Üstyurt/Karakum 1796 "neden hep boş" · `? emre-karari`
**Ekran:** 1796-01-01 · 36.93–47.02N 48.77–64.31E.
**Ölçüm:** 52–61E × 38,5–45,5N'de **12 nokta**; 1796'da **5'i SAHİPSİZ**: `Karakum` (bölge) · `Uzboy` (bölge) · `Üstyurt platosu (batı)` · `Üstyurt platosu (doğu)` · `Krasnovodsk (Türkmenbaşı)` (liman). Geri kalanlar: `turkmen` 3 (Çeleken, Garabogaz, Kızılarvat) · `hive` 4.
Boşluk **kasıtlı beyan**: dört nokta çöl/dolgu noktası, §1.5'teki "beklenen 324 sahipsiz" kovasında. Motor hatası değil. Kahverengi lekeler çöl işareti.
**Kaynak:** TDV `turkmenler`: Mangışlak ve Balhan (Balkan) Türkmenleri; XVI. yy'da Mangışlak'ta Salur boyu. TDV `hive-hanligi`: "Mangışlak'ın Üstyurt bölgesindeki Beş-Tumak vahası" (1839). Yani burası çöl ama **devletsiz değil, göçebe Türkmen (ve kuzeyde Kazak) otlağı**. 1796 için "şu boyun toprağı" diyen kesin cümle **bulunamadı**.
**İki meşru seçenek:**
1. **Çöl kalsın** (bugünkü): yerleşik devlet yok; boş = "yerleşik idare yok" beyanı. 0 değişiklik.
2. **Göçebe otlağı boyansın:** `Uzboy` · `Karakum` · `Üstyurt (batı/doğu)` → `turkmen` (kuzey Üstyurt için Kazak Küçük Cüz ayrıca sorulur). 4–5 `s:` penceresi + koşu. Kaynak borcu: dönem ve boy için TDV dışında akademik kaynak.
Küçük tutarsızlık (hangisi seçilirse seçilsin): `Krasnovodsk` sahipsiz, iki komşusu (Çeleken, Garabogaz) `turkmen`. Kıyı noktası iç çöl noktası gibi davranıyor.

## H-0080 — "tam ekran gezinmek ister misin" penceresi · `✗ hatali` (eksik özellik)
**Ölçüm:** tam ekran düğmesi var (`#btn-tamekran`, `js/app.js:11988`) ama `☰ Butonlar` menüsünün **içinde gizli**. Açılışta soru yok.
**Öneri (uygulanabilir, izin bekliyor):** açılış perdesi (`ACILIS-ANIM-0929`) bittikten sonra küçük modal: *"Haritayı tam ekran gezmek ister misiniz? — [Evet] [Hayır] · Çıkmak için istediğiniz an Esc'ye basın."* Evet → `document.documentElement.requestFullscreen()`. Tarayıcı bunu yalnız kullanıcı tıklamasıyla izin verir; "Evet" tıklaması o hareket, çalışır. Hayır → kapanır.
**Emre'ye tek soru:** her açılışta mı sorulsun, yoksa "Hayır" bir kez seçilince hatırlansın mı (`localStorage`)? Önerim: hatırlansın, ve menüde "⛶ Tam ekran" kalsın.

## H-0086 — atıf satırı ilk açılışta görünsün, tıklayınca gizlensin · `✗ hatali` + OWTRAD `? emre-karari`
**Ölçüm:** atıf denetimi `attributionControl:{compact:true}` (`js/app.js:1481`). Açılışta sınıfı `maplibregl-compact maplibregl-compact-show` (açık, 584×44 px, haritanın altını kaplıyor). MapLibre 4 bu kipte satırı **ilk sürüklemede kendiliğinden** kapatır ve sonra ⓘ ile açılıp kapanır. Emre'nin istediği "tıklamadıkça görünmesin" ile arasındaki fark: kapanış **tıklamayla** değil sürüklemeyle oluyor, ve her ziyarette yeniden açık başlıyor.
**Öneri:** ilk ziyarette açık, ⓘ'ye tıklayınca kapanır; kapandığı `localStorage`da tutulur, sonraki ziyaretlerde kapalı başlar. H-0087 ile birlikte uygulanır (ⓘ butonlar menüsüne taşınacaksa).
**OWTRAD sorusu** (Emre: "bıraksak ne kaybederiz"). Ölçüm:
```
kullanım yeri   yalnız GÖRÜNTÜ — koridor ağı katmanı (data/koridor_owtrad.js, 71.617 bayt)
motor           OKUMUYOR — girdi.GIRDI_DOSYALARI'nda owtrad geçen dosya: 0
hacim           154 düğüm (47'si sentetik ara-nokta) · 174 kenar (43'ü deniz hattı ⇒ kara 131)
kalan koridor   kendi KORIDOR kümemiz 123 düğüm / 121 kenar (canlı ölçüm, app.js:15324 notu)
türev iz        data/yerlesimler_ek_bosluk.js OWTRAD yamasından doğdu ama yalnız
                "kaynağı doğrulanmış iki nokta" taşıyor (kendi başlığı) — bağımsız kaynaklı
lisans          CC BY-NC 2.5 (ve ZIP'te OPL 1.0 — çelişki çözülmemiş, index.html:1742)
```
**Seçenekler:**
1. **Tut:** site eğitim amaçlı ve ticarî değil; NC şartı bugün ihlal edilmiyor. Bedeli: atıf satırında uzun künye ve "ticarîleşirse çıkar" borcu (index.html notunda yazılı).
2. **Bırak:** koridor katmanından 154 düğüm/174 kenar düşer (kara koridoru ~%50'den fazla azalır). Harita sınırları, motor ve Değişmezler **etkilenmez**. Atıf satırı kısalır, NC borcu kalkar.
**Önerim:** proje ticarîleşme düşünmüyorsa 1. Düşünüyorsa şimdi 2 (sonra çıkarmak daha pahalı).

## H-0087 — Kapat → sürüm yerine, sürüm + lejant + ⓘ → Butonlar içine · `✗ hatali` (eksik özellik)
**Ölçüm (1024 px pencere):**
```
⇤ Kapat (#btn-panel)      haritanın sağ üstü  527,48  69×26    ← #harita-ust-sag
☰ lejant (.lejant-dugme)  hemen altı          572,82  24×24    ← #harita
r10630 (#surum-etiketi)   üst çubuk sağ       562,20  30×14    ← #ustbar
☰ Butonlar (#btn-menu)    üst çubuk sol       12,7    83×24
ⓘ atıf                    haritanın sol altı  10,675
```
⚠️ **Karışıklık kanıtı:** iki ayrı düğme aynı `☰` işaretini taşıyor (Butonlar ve lejant). Emre'nin "harita simgeleri butonu"nu menüye alma isteği bunu da çözer.
**Öneri:** ① `#btn-panel` → `#ustbar`da `#surum-etiketi`nin yerine · ② `#surum-etiketi` → `#menu-butonlar` içine, en alta, küçük gri satır · ③ lejant düğmesi → `#menu-butonlar` içine "🗺 Harita işaretleri" (lejant kutusu yerinde açılır) · ④ ⓘ: ilk ziyarette haritada, sonra menüde "ⓘ Kaynaklar/atıf" (H-0086 ile tek iş).
⚠️ **Lisans uyarısı:** OWTRAD (CC BY-NC) ve Esri atfı **görünür bir yerde** kalmalı. Menüye gizlemek "erişilebilir atıf" sayılır (MapLibre'nin compact kipi de böyle), ama tamamen kaldırılamaz.

## H-0088 — +/− yatay, en köşede, Butonlar'ın solunda · `✗ hatali` (eksik özellik)
**Ölçüm:** `NavigationControl({showCompass:false})` `"top-left"` (`js/app.js:1483`), dikey grup 29×58 px, haritanın içinde 10,50. `☰ Butonlar` üst çubukta 12,7.
**Öneri:** NavigationControl kaldırılır. `#ustbar`ın en soluna iki küçük düğme `[+][−]` (`harita.zoomIn()/zoomOut()`), küçük boşluk, sonra `☰ Butonlar`. Haritanın üstünde denetim kalmaz. Alternatif (daha az kod): denetim yerinde kalır, CSS ile `.maplibregl-ctrl-group{display:flex}` yatay yapılır. Ama Emre "Butonlar'ın solunda" dediği için üst çubuk çözümü istenene birebir uyuyor.

## H-0100 — Asîr 1871 "tuhaf harita yapısı" · `▷ kosu-bekliyor` (= H-0022)
**Ekran:** 1871-01-01 · 18.52–20.83N 40.56–45.10E. Madde: Asîr'in doğrudan idareye alınması.
**Ölçüm (`__aci`):** `osmanli` gövdesinde **3,9° sivri köşe**, kenar 0,162° (≈18 km) @44.757E 20.743N. HARITA-0076 aynı tarih ve pencerede H-0022 için **3,7° @44.731E 20.733N** ölçmüştü: aynı iğne (motor koşuları arasında 0,03° kaymış). Kova C: Voronoi kenarı, komşu nokta seyrekliği. C katmanıyla ilgisi yok.
**İstenen:** H-0022 ile tek kalem. Doğu Asîr/Rub'ülhâli kenarına kaynaklı nokta; `bulunamadı` (HARITA-0076 §3'teki borç hâlâ açık).

---

## Ek — bu oturumun konsol ölçümleri (canlı motorda tekrar koşar)
`HARITA-0076-YAMA-olcum.js` yüklendikten sonra:
- `__aci(gun,x0,x1,y0,y1,aciEsik,kenarEsik)`: sivri/iğne (H-0056, H-0100, dünya taraması `__aci(g,-180,180,-60,85,5,0.3)`).
- **Kesişim:** halka kenarlarının çift çift kesişme sınaması; Dürrânî 0, Asîr 0, Özi osmanli 0, Özi kirim 1 (@31.927/46.85, kısa).
- **Izgara kenarı:** köşe/kenarın `|v/0.05 − round(v/0.05)| < 1e-6` sınaması; eksen hizalı ve ≥ 0,049° olan kenar sayılır.
- **Kaplama profili:** hatta dik 31 örnek, `Polygon`+delik halkası ile nokta-içinde.
Bu üçü kalıcı alet dosyasına YAZILMADI (bu turda gerek görmedim). İstenirse `denetim/ARAC-ARAYUZ-0082-OLCUM.js` olarak yazarım.
