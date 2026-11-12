# Medler, Persler (Ahameniş), Fenike, Kartaca — kronoloji × harita × kaynak denetimi (12 Kasım 2026)

Kapsam: `devletler.js` künyeleri `medya`, `teispid-pers`, `ahamenis`, `fenike-sehirleri`, `kartaca`;
bunların `kronoloji:` maddeleri; `data/olaylar_antik_*.js` / `olaylar_dunya_avrupa_mo.js` maddeleri;
`yerlesimler*.js` zincirleri. Veri dosyalarına DOKUNULMADI. Ölçüm ağacı: worktree `claude/cranky-tu-7ef60c`
(`origin/main` 148bc9f26 tabanlı), yalnız grep/okuma. Konvansiyon: MÖ n = astronomik −(n−1); atlas bu
kurala tutarlı uyuyor (aşağıda aksi belirtilmedikçe).

## 1. Künye uçları ve zincir (ölçüm)

| Devlet | f | t | Haritada sahip olduğu yerleşim |
|---|---|---|---|
| medya | −0677 (MÖ 678) | −0549 (MÖ 550) | **yalnız Hemedan (Ekbatana)** |
| teispid-pers | −0674 | −0549 | **hiç yok** (Anşan `s:[]`, `bos:veri-yok`) |
| ahamenis | −0549 | −0329 | Hemedan, Susa, Babil, Pasargad, Persepolis, Gordion (+Misir eyaletleri ayrı künye) |
| fenike-sehirleri | −1199 | −0331 | **hiç yok** (Sur, Arvad, Cübeyl-Byblos antik kaydı yok; "Sayda"/"Cübeyl" satırları Osmanlı/Körfez yerleşimleri) |
| kartaca | −0813 (gelenek) | −0145 | Karthago (−0759…−0145), Cartagena (−0220…−0208) |

Sınır sürekliliği Medya→Ahamenis: üç künye ucu −0549'da birbirini tutuyor (Medya t = Teispid t = Ahamenis f) —
sorun yok. Iranica (MEDIA/Cyrus) iki yıl okur: 550/549; atlas 550'yi seçmiş, `ic_not`ta beyan var.

## 2. Bulgular

**B1 — Fenike haritada yok (Değişmez 2'nin amacı: madde ↔ harita).** `fenike-sehirleri` 868 yıllık
künyeli ama hiçbir yerleşim `d:"fenike-sehirleri"` taşımıyor. Kronolojide Sur/Sayda/Cübeyl maddeleri var
(−0537 Pers'e geçiş, −0585 Sur kuşatması, −0331 Sur düşüşü) ama haritada karşılığı olan nokta yok. Sur,
Sayda, Cübeyl, Arvad atlasta antik yerleşim olarak tanımlı değil (Sayda adı Osmanlı satırı). Öneri: dört
yerleşim ekle (kaynaklı), sonra Asur/Babil/Ahameniş/Makedon zincirini yaz (altta B7).

**B2 — Teispid-Pers ve Medya zinciri tek noktaya / sıfıra bağlı.** Medya'nın tek peteği Hemedan; Teispid
için nokta yok (Anşan `veri-yok`). Petek motoru: noktasız bölge en yakın peteğe emilir — yani Med ülkesi
(Ekbatana + Atropatene… ) ve Pers çekirdeği boya olarak başka sahibe geçer. Öneri: Anşan'ı Teispid
(−0674…−0549) ile doldur (Iranica "Čišpiš", künyede kaynakları var); Medya için Ekbatana dışında
Iranica MEDIA'daki Med kalelerinden (Godin Tepe, Nush-i Jan, Tepe Baba…) kaynaklı en az 2–3 nokta.

**B3 — Kartaca künyesinde karma konvansiyon (kural: bir devletin uçları aynı konvansiyonda).** `f` −0813
= Timaios geleneği (edebî; Treccani bunu verbatim doğruladı: «all'814 a. C.»), `t` −0145 = tarihsel
(Treccani/Appianos). Haritadaki gerçek ilk sahip dönemi −0759 (Docter, arkeolojik ~760). Sonuç: künye
−0813'ten başlıyor, harita −0759'dan; kronolojide −0813 "kuruluş" maddesinde haritada değişen bir şey yok
(54 yıl). Öneri: künye `f` korunur ama `ic_not`ta "gelenek tarihi; harita −0759'dan" beyanı eklenir; ya da
(tercihim) künye f = −0759 (arkeolojik), −0813 maddesi "gelenek" etiketiyle kalır ve haritada sınır
kırılmasına bağlanmaz. Karar gerekli (aşağı).

**B4 — Kartaca haritada 2 nokta.** Karthago + Cartagena. Kronolojide Hispania (Ebro −0225, Saguntum,
Ilipa/Gades −0205), Sicilya (Himera −0479, Hannibal Mago −0408), Sardinya (−0549, −0237), Aegates (−0240)
maddeleri var; Gadir, Utica, Hadrumetum, Panormos, Lilybaion, Cagliari/Karales yerleşimlerinde Kartaca
dönemi yok → madde yeri haritada Kartaca rengine boyanmaz (Değişmez 2/3 ruhu). Öneri: Gadir, Utica,
Hadrumetum, Lilybaion, Motya/Panormos, Karales için kaynaklı `s:` dönemi (Treccani/Polybios/Aubet).

**B5 — Sardinya el değiştirmesi iki farklı yılla yazılmış.** `olaylar_antik_akdeniz` −0237 (MÖ 238);
`devletler.js` kartaca kronolojisi −0236 (MÖ 237). Kaynak da «238 or 237» diyor (Oxford Enc. Arch. Near East).
Treccani "Cartagine" Sardinya'yı yılsız veriyor, Polybios 3.10 antlaşma sonrası (238/237). Beyanlı
çelişki: iki kayıt tek yıl + `ic_not` iki yıl beyanı; üçüncü bağımsız kaynak bu turda alınamadı (arama aracı
yok) → "beyanlı bırak" öneri.

**B6 — Salamis iki kez, farklı yılla.** `olaylar_antik_yakin_dogu`: Salamis −0479 (MÖ 480) ✓.
`olaylar_antik_akdeniz`: «Salamis (29 Eylül 480) ve Plataia» maddesi −0478'de (MÖ 479) — metin 480 diyor,
t 479. Gün biliniyorsa (29 Eylül 480 → −0479-09-29 — gün sonuç yine de modern rekonstrüksiyon; Iranica/
Livius teyidi alınamadı: Iranica 403) ve yıl-gün çelişkisi var. Öneri: Salamis'i ayır, Plataia −0478'de kalsın.

**B7 — Fenike zincirinin kaynakları.**
- `f` −1199: künyenin kendi `ic_not`'u "bu turda okunmadı" diyor. Treccani «Fenici» (bugün okundu): "~1200"
  YOK; "prime colonie almeno sec. XI", kriz "fine sec. XIII". → f dayanaksız kalıyor. Kaynak yoksa f'nin
  yıl hassasiyeti yerine yüzyıl+beyan ya da çekirdek aralık (MÖ 12. yy'ın ortası ?); atlas "yıl uydurma"
  yasağına dokunuyor. Tek dayanaklı değer yok → beyanlı bırak, f'yi `yuzyil` kesinliğiyle işaretle.
- Kronolojide −1199, −0737 (Aubet/Markoe), −0331 (Britannica/Markoe) maddeleri **kaynak kuralına aykırı**
  (kitap adı ama sayfa yok; popüler/ansiklopedi). Üç madde Jewish Encyclopedia'ya (1906, akademik değil)
  dayanıyor (−0875, −0852, −0700, −0585, −0479).
- `olaylar_antik_yakin_dogu` −0344: «III. Artakserkses Sayda'yı alıp yıktı», kaynak "TDV SAYDA — «In 351 BCE,
  Artaxerxes adv…»": **TDV Sayda maddesi bugün çekildi, Artakserkses/351/345 içermiyor** (TDV maddesi 637
  Arap fethinden başlar). Treccani «Fenici»: 351'de "tüm Fenike isyan etti, başarısız" (yıkım demiyor).
  Kaynak atfı doğrulanamıyor; tarih (−0344 = MÖ 345) Diodoros/Briant geleneğiyle uyumlu ama bu kaynakla
  teyitsiz → kaynak değiştir ya da "teyitsiz" beyanı.
- Esarhaddon'un Sayda yıkımı −0676 (MÖ 677, Livius) — Treccani «Fenici» **675** veriyor. Çelişki: iki yıl
  beyanlı yazılmalı (677 Assyrian annals geleneksel; Treccani 1932 eski).
- **Luli çelişkisi:** `fenike-sehirleri` kronolojisi −0700: "**Sur** kralı Luli … Sayda'da İtu-Baal tahta oturtulur";
  `olaylar_antik_yakin_dogu` −0700: "Sennacherib **Sayda'yı** aldı; Kral Luli Kıbrıs'a kaçtı". Treccani: «re Lule … di Sidone».
  Asur yıllıkları Luli'yi Sidon kralı sayar, Josephus/Menander Tyre kralı Elulaios. İki kayıt çelişiyor;
  Treccani (Sidon) bir kaynakla birleştirip Tyre alternatifini `ic_not`'a yaz.
- Sur düşüşü: −0331 (MÖ 332) tüm kayıtlarda tutarlı ✓ (Treccani «332» verbatim). Gün/ay (Hekatombaion/Temmuz)
  bu turda akademik kaynakla alınamadı → yıl hassasiyeti kalmalı.
- Fenike→Pers geçişi `olaylar` −0537 (MÖ 538): Briant yıl vermiyor mu, doğrulanmadı; Babil −0538-10-29 (539 sonu)
  sonrası ✓ makul ama "538" yıl atfı kaynağında okunmadı.

**B8 — Ahameniş maddeleri.** Zincir ve künye tutarlı. Notlar:
- Ahamenis t −0329-01-01 (MÖ 330 Ocak) ile madde −0329-01-01 «III. Darius öldürüldü; imparatorluk sona erdi»
  — Darius III'ün ölümü MÖ 330 **Temmuz** (Bessus; yaygın bilgi); Iranica DARIUS v 403 verdi, doğrulanamadı.
  Persepolis yangını da madde olarak −0329-01-01'de «(Nisan)» notuyla (gün-ay biliniyorsa −0329-04-… yazılmalı,
  aksi hâlde "gün yaz" kuralı ihlali; yıl hassasiyeti zorlanırsa künyeye "Persepolis'in düşüşü" olarak yazılmalı).
  Sıralama sorunu: Darius'un ölümü (Temmuz) künye t'sinden (Ocak) SONRA; künye t bir "devletin yok oluşu = hükümdarın
  ölümü" olarak yazılmış ama aslında Persepolis/Susa düşüşü. Öneri: madde "Darius III öldürüldü" −0329-07-…
  ayrı (yıl belirsizliği beyanıyla), künye t'si "Persepolis düşüşü" gerekçesiyle kalsın veya −0329-07'ye
  taşınsın (ikinci uçta Pasargad/Persepolis/Hemedan zincir uçları −0329/−0327'ye bağlı — dönem dengesi
  gerekir).
- Marathon −0489-01-01: metin «11 Eylül MÖ 490»; gün biliniyorsa maddenin günü yazılmalı (−0489-09-11).
  Not: Marathon günü modern rekonstrüksiyondur (Boeckh 12 Eylül / Hignett 17 Ağustos…); iki tarih varsa
  günü yazma, yıl hassasiyetiyle bırak ve metinden "11 Eylül"i çıkar ("YYYY-01-01 + beyan").
- Gaugamela −0330-10-01 (MÖ 331, 1 Ekim) ✓ astronomik günce ile; Opis/Sippar/Babil −0538-10-{10,12,29} ✓ (ABC 7).
- Maddeler sürekli Iranica/Livius/Briant: kaynak kuralı ✓ (Livius.org popüler değil, Lendering akademik; kabul).
- `Ahamenis f` "Dinasti MÖ ~700'den" ozet notu künyeyle çelişmiyor (hanedan ≠ imparatorluk).

**B9 — Kartaca madde kaynakları.** Künye kaynağı Treccani ✓ (814 ve 146 doğrulandı: «814 a. C.»).
Maddeler: −0813 kuruluş (worldhistory.org + Lancel, ozet), −0201 Zama (worldhistory.org/EBSCO),
−0240 Lutatius (Wikipedia), −0145 son (Larousse+worldhistory+historytoday) — **popüler/Vikipedi dayanak**:
kaynak kuralı ihlali. Polybios 1.62-63 / Appianos zaten başka dosyada (olaylar_antik_akdeniz). Öneri:
bu 4 maddenin kaynak alanları Polybios/Appianos/Treccani ile değiştir. Zama 202 (−0201) ✓ iki dosyada.
Zama "gün": Treccani yıl vermiyor; Polybios günsüz → yıl hassasiyeti kalmalı.
- `olaylar_dunya_avrupa_mo` −0549 «Kartaca Sardinya'ya yerleşti (Malkhos, Magon)» kaynak Justinus 18.7:
  Justinus yıl vermez → **yıl atfı uydurma riski** (kural: yıl bilinmiyorsa yazılmaz). Öneri: maddeyi yılsız beyan
  et ya da modern bir akademik kaynakla (Aubet/Ridgway) tarihle.

## 3. Doğrulanamadı / bu turda yapılamadı

- Iranica (DARIUS v, CYRUS II, MEDIA, Marathon) **403**; Wayback denenmedi (alt ajan reddetti). Üçüncü bağımsız
  kaynakla teyit istenen Medya 678, Darius III ölümü, Marathon/Salamis günleri **teyit edilmedi** → beyanlı.
- Sardinya 238/237 ve Sur'un düşüş ayı için akademik kaynak okunmadı (arama aracı yok).
- Treccani «Cartagine» verbatim: 814 ✓. Özetteki "marzo-aprile 146" model özeti; verbatim değil (künye ic_not'u
  bu ifadeyi zaten "marzo-aprile del 146" diye aktarıyor — bir sonraki turda sayfanın o bölümü tam okunmalı).

## 4. Karar gereken (önerimle)

1. **Fenike'yi haritaya sokmak (B1)** — Sur, Sayda, Cübeyl, Arvad + zincir (Asur/Babil/Pers/Makedon). Öneri: **evet**,
   kaynaklı yerleşim ekleme ayrı iş (Treccani «Fenici» + Briant/Aubet sayfalı).
2. **Kartaca f (B3)** — −0813 gelenek mi, −0759 arkeolojik mi? Öneri: **künye f = −0759**, −0813 maddesi "gelenek"
   notlu kalsın (bütün uçlar tek konvansiyon: arkeolojik/tarihsel).
3. **Fenike f −1199 (B7)** — Öneri: kaynak bulunana dek `kesinlik.f = "yuzyil"` + `ic_not` "Treccani ~XI. yy
   koloni, XIII. yy sonu kriz; ~1200 teyitsiz" ve f'yi değiştirme.
4. **Darius III ölümü / Marathon günü (B8)** — Öneri: Iranica'yı Wayback ile okuyup (başka oturum) günü yaz;
   okunana kadar yalnız yıl, "11 Eylül" metinden çıkar.
5. **Kaynak ihlalli maddeler** (B7 TDV Sayda atfı, B9 worldhistory/Vikipedi/Jewish Enc. dayanaklı ~10 madde,
   Justinus yıl atfı) — Öneri: tek kaynak-düzeltme geçişi (yalnız `kaynak:`/`ic_not`; tarih değişmeden).
6. **Luli Sur/Sayda çelişkisi (B7), Sardinya 238/237 (B5), Esarhaddon 677/675 (B7)** — Öneri: tek yıl seç, öteki
   yılı `ic_not`ta iki kaynağıyla beyan et (Treccani'yi ikincil tanık olarak).
7. **Medya/Teispid zincir dolgusu (B2)** — Öneri: Anşan (Teispid) + 2-3 Med noktası kaynaklı ekle.
