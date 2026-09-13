# FERHAD PAŞA HATTI · KÖŞE 4-5-6 (SARÂB · MİYÂNE SAFEVÎ TARAFINA)

```
OTURUM   FERHATPASA-KOSE · 13 Eylül 2026 · koşu 10 AKTİF → data/ js/ arac/ DONUK, commit YOK
GÖREV    data/hukuki_sinirlar.js `ferhad-pasa-1590-sinir-hatti` köşe 4·5·6 Sarâb ve Miyâne'yi OSMANLI
         tarafına düşürüyor (Emre kararı: ikisi SAFEVÎ). Kaynaklı yerine koyma köşeleri.
KURAL    CLAUDE.md §4 "ATLAS REFERANS DEĞİLDİR" — atlas noktası/orta noktası DAYANAK DEĞİL
ÇIKTI    bu rapor · denetim/YAMA-KOSE-SARAB-MIYANE-0913.json (ÖNERİ, uygulanmadı)
ALET     denetim/ARAC-KSM-INDIR-0913.py (indir + ilk HTTP kodu) · ARAC-KSM-ARA-0913.py (metin arama)
         ARAC-KSM-GEONAMES-0913.py (geonames.org tam metin, İran) · ARAC-KSM-TARAF-0913.py (taraf sınaması)
```

## ① ÖZET

```
KÖŞE 4  ESKİ "Sarâb ↔ Erdebil" (38.0952, 47.9149)  → YENİ "Areštanāb sınır köyü" (37.9323, 46.7506)
        KAYNAKTA ADIYLA SINIR diye geçen yer — Iranica AZARBAIJAN iv (Bosworth 1987):
        "the frontier being fixed at the village of Areštanāb twelve farsakhs to the southeast of Tabrīz"
KÖŞE 5  ESKİ "Miyâne ↔ Halhâl" (37.5196, 48.1221)  → YENİ "Heşrûd ↔ Miyâne" (37.4494, 47.3829)
        Osmanlı ucu: TDV tebriz 1593 idarî taksim — Tebriz livâsı nahiyesi "Heşrûd"
        Safevî ucu: Miyâne (Emre kararı; Eskandar/Savory II s.828)
KÖŞE 6  ESKİ "Miyâne ↔ Zencan" (37.0486, 48.1056)  → ATILDI
        iki ucu da artık Safevî; araya kaynaklı Osmanlı ucu BULUNAMADI; 5→7 segmenti tarafları doğru bölüyor
TARAF   eski hat: 2 yanlış (Sarâb, Miyâne OSMANLI çıkıyor) · önerilen hat: 0 yanlış (16 nokta)
```

## ② KAYNAK TARAMASI — ne arandı, ne çıktı

| # | kaynak | erişim | bulgu |
|---|---|---|---|
| K1 | **Encyclopaedia Iranica, "Azarbaijan iv. Islamic History to 1941"**, C. E. Bosworth, Vol. III Fasc. 2-3, s.224-231 (1987) — iranicaonline.org/articles/azerbaijan-iv/ (200) | gövde okundu | *"during the years 993-1012/1585-1603 Tabrīz and the western half of Azarbaijan was permanently occupied … only the eastern part remained in Persian hands, being ruled from Ardabīl. According to the Ottoman-Persian agreement of the Year of the Hare 1000/1591-92, Shah ʿAbbās I had to cede … western Azarbaijan, **the frontier being fixed at the village of Areštanāb twelve farsakhs to the southeast of Tabrīz** (Röhrborn, op. cit., pp. 6-9; on this place see Razmārā, Farhang IV, p. 15)."* |
| K2 | **TDV İslâm Ansiklopedisi `tebriz`** (Ali Sinan Bilgili) — 200, gövde okundu | gövde | *"Osmanlılar'ın 1593 idarî taksimine göre Tebriz eyaleti Tebriz (merkez, Serdsahra, Mihrânrûd, Ardanak, Anzâb, Zenûz, Şahâ, Vidhir, Dihharkân, Dizecrûd, Adangı, **Heşrûd**, Rudgât, Mevâzi'cân), Suldus, Dizmâr (…), Merâga (Seracû, Leylân, Egertû, Kavdûl, Miyandûvab, Ahtacî…), Sarukurgân (…), Saîdâbâd, Alîk livâ ve nahiyelerinden oluşuyordu."* — **Sarâb, Miyâne, Karadağ YOK.** `Uçân` (Ûcân/Bostanâbâd) yalnız **1728** listesinde. Bibliyografyada Bilgili, *Osmanlı İran ve Azerbaycanı I*, Erzurum 2004 — liste dayanağı muhtemelen o, **okumadım**. |
| K3 | **TDV `erdebil`** — 200 | gövde | *"1590'da Osmanlı-İran antlaşması gereğince iki devlet arasındaki sınır Erdebil yakınlarından geçiyordu."* — K1 ile gerilim, bkz. ⑤ |
| K4 | **Eskandar Beg Monshi, tr. Savory** II-III (archive.org `in.ernet.dli.2015.38522` djvu.txt) · I (`…38521`) | tam metin arandı | s.582: Ca'fer Paşa *"advanced as far as Sarāb, making for Ardabīl, but was unable to proceed further and returned to his base"* · s.582: Osmanlı yetkisi *"Ordūbad, Marand, Dezmar, Konūz, and Gargar"*a yayıldı (Sarâb/Miyâne yok) · s.615: sınır tahdidi Hasan Han Çavuşlu + Bestam Ağa ↔ Hızır Paşa (**yer adı vermiyor**) · s.828: Eylül 1603 Erdebil valisine *"join the Shah at Mīāna"* · s.1025 (1609-10): *"Qara Čaman in the Mīānaj district"* (dönem dışı) · s.1242 (1620'ler): Erdebil komşu nahiyeleri *"Meškin, Sarāb, Zarnaq, Garmrud, and Kalkāl"* · **Areštanāb 0 geçiş** · Qezel Owzan / Qaflānkūh / Ūjān 1590-1603 bağlamında **0** |
| K5 | **Bekir Kütükoğlu 1962** (archive.org djvu.txt) | tam metin arandı | s.168 *"Serâb'dan daha ileri gitmeyip Tebriz'e döndü"* · s.196-197 dn.186: *"20 zilhicce 996'da Serdar tarafından sancak tarîkiyle Mehmed Çavuş'a tevcih edilen Germ-rüd'u"* Safevî istedi · Mühimme LXVII 272 (15 Cemâziyelevvel 999): *"hangi tarafın tasarrufunda ise ibka edilip arada bir iki köylük hâli ve harap yer bırakılıp"* · s.197: Hızır Paşa *"Revan ve Tebriz hudûdunu ta'yin ve alâmetler vaz' ettikden"* — **alâmetlerin yeri yazılmıyor** · Saidâbâd *"Tebriz civârında"* (dizin, s.155) · Kızıl Üzen / Kaflankuh / Miyâne / Areštanāb: **0** |
| K6 | Iranica BOUNDARIES i (200) | gövde | 1590 için yalnız genel: *"confirmed in large part by the Treaty of Constantinople, signed in 998/1590"* — yer adı yok |
| K7 | Iranica ʿABBĀS I (Savory, 200) | gövde | 1590 sınırı hakkında cümle **yok** |
| K8 | TDV `zencan` · `azerbaycan` (200) | gövde | Sarâb/Miyâne/Kızıl Üzen **0** |

## ③ KÖŞE ÖNERİLERİ

### Köşe 4 · Areštanāb sınır köyü — `37.9323, 46.7506`
- **Hüküm dayanağı:** sınırın **kendisi** kaynakta adıyla: Iranica AZARBAIJAN iv (Bosworth 1987, III/2-3 s.224-231) ← Röhrborn, *Provinzen und Zentralgewalt Persiens*, 1966, s.6-9 (**OKUMADIM** — archive.org aramasında yok) · Razmārā, *Farhang* IV s.15 (**OKUMADIM**). Kuzey-batısı Tebriz OSMANLI (TDV tebriz), doğusu Sarâb SAFEVÎ (Emre kararı; Eskandar II s.582 + Kütükoğlu s.168 "Sarâb'dan ileri geçmedi").
- **Konum kaynağı:** GeoNames id **22871** "Arshatnāb", East Azerbaijan, populated place, 37.9323 / 46.7506 (tam metin araması "Arshatnab"; "Arshtanab · Areshtanab · Arashtanab · Ereshtanab" 0 sonuç).
- **`dogrulanmadi: true`** — iki sebep, ikisi de açık:
  1. **Ad eşlemesi ÇIKARIM:** Areštanāb ↔ Arshatnāb; GeoNames kayıt sayfası (geonames.org/22871/arshatnab.html) alternatif adları vermedi — **ölçülemedi**.
  2. **Mesafe uyuşmazlığı ÖLÇÜLDÜ:** Tebriz (GeoNames 38.08/46.2919) → Arshatnāb kuş uçuşu **≈43 km**; kaynak *"twelve farsakhs"* ≈ 65-75 km. Yol mesafesi mi, başka köy mü — **ölçülemedi**.
- Önemli: bu köşe **atlas noktası değil, iki yerin orta noktası da değil** — kaynağın adıyla verdiği sınır yeri.

### Köşe 5 · Heşrûd ↔ Miyâne — `37.4494, 47.3829`
- **Osmanlı ucu:** TDV tebriz 1593 idarî taksim, Tebriz livâsı nahiyesi *"Heşrûd"* — GeoNames id 142554 **Hashtrūd** 37.4779/47.0508. ⚠️ **Heşrûd = Hashtrūd eşlemesi ÇIKARIM** (Farsça "Hašt-rūd"; TDV yazımında `t` düşmüş olabilir) — doğrulanmadı.
- **Safevî ucu:** Miyâne — Emre kararı (13 Eylül); Eskandar/Savory II s.828 (Eylül 1603 Safevî toplanma yeri, Tebriz'e girmeden önce); K1 *"only the eastern part remained in Persian hands"*. GeoNames id 124082 **Mīāneh** 37.421/47.715. ⚠️ Safevî ucu **karar dayanaklı**, tasarruf cümlesi değil (OLCUM-AHAR-SARAB-MIYANE: "çıkarım, orta").
- **Konum:** iki GeoNames konumunun orta noktası — iki ucun ikisi de kaynakta adıyla anılan yer (biri ad eşlemesi şartlı, öteki karar şartlı; bu şartlar kayda yazılıdır).
- **`dogrulanmadi: true`**.

### Köşe 6 · ATILDI
- Eski "Miyâne ↔ Zencan": iki uç da artık Safevî ⇒ köşe tanımsız.
- Yerine konacak kaynaklı Osmanlı ucu (Hashtrūd'un güneyi, Sakkız'ın doğusu) **BULUNAMADI**: TDV tebriz listesindeki Merâga/Sarukurgân nahiyelerinden konumu ölçülebilen **Leylân** (GeoNames 125710, 37.011/46.2065) hattan 88 km batıda kalıyor, köşe üretmiyor; `Sarukurgân`, `Egertû`, `Kavdûl` GeoNames'te **bulunamadı/eşlenemedi** ("Qavdul/Qaudul/Qowdul" 0).
- 5 → 7 doğrudan segment taraf sınamasından geçti (④).

## ④ TARAF SINAMASI — `ARAC-KSM-TARAF-0913.py`

Yöntem: eşdikdörtgen izdüşüm (cos 37,5°), her noktanın **en yakın segmenti**, çapraz çarpım işareti; işaret **kalibre edildi** (Van → −1 Osmanlı, Kazvin → +1 Safevî, ayrışıyor ✓). Hat köşe 2 → 8.

| nokta (GeoNames) | beklenen | ESKİ hat | ÖNERİLEN hat | en yakın segment (öneri) · km |
|---|---|---|---|---|
| Tebriz 38.08/46.2919 | Osmanlı | ✓ | ✓ | 3→4 · 43.7 |
| Ahar 38.4774/47.0699 | Osmanlı | ✓ | ✓ | 3→4 · 22.3 |
| Hashtrūd 37.4779/47.0508 | Osmanlı | ✓ | ✓ | 4→5 · 18.0 |
| Leylān 37.011/46.2065 | Osmanlı | ✓ | ✓ | 5→7 · 88.7 |
| Āz̄arshahr (Dihharkân) 37.759/45.9783 | Osmanlı | ✓ | ✓ | 3→4 · 70.8 |
| **Sarāb** 37.9408/47.5367 | **Safevî** | **✗ Osmanlı** | ✓ | 4→5 · 48.8 |
| **Mīāneh** 37.421/47.715 | **Safevî** | **✗ Osmanlı** | ✓ | 4→5 · 29.5 |
| Ardabil 38.2498/48.2933 | Safevî | ✓ | ✓ | 2→3 · 83.6 |
| Khalkhāl 37.6184/48.5293 | Safevî | ✓ | ✓ | 4→5 · 102.9 |
| Zanjan 36.6764/48.4963 | Safevî | ✓ | ✓ | 5→7 · 116.3 |
| **YANLIŞ TARAF** | | **2** | **0** | |

Belirsiz (hüküm yok, bilgi için): Meşkinşehr → Safevî (27 km) · **Bostānābād/Ūjān → Osmanlı, hatta 1,7 km** · Torkamān → Safevî (11 km) · Qāflānkūh → Safevî (38 km).
⚠️ Bostānābād hatta 1,7 km: köşe 4'ün ~30 km'lik konum belirsizliği (mesafe uyuşmazlığı) içinde; Ūcân'ın 1590-1603 tarafı **bulunamadı**. Iranica BOUNDARIES i'nin *"not a line but a broad zone"* uyarısı burada somut.

## ⑤ AYRIŞMALAR — taraf seçilmedi

```
① TDV erdebil: "sınır Erdebil yakınlarından geçiyordu"  ↔  Bosworth: sınır Areštanāb'da, Tebriz'in 12 fersah GD'sunda
   Arshatnāb → Erdebil kuş uçuşu ≈ 140 km. "Yakınlarından" ölçüsüz bir ifade; Erdebil'in Safevî kaldığında
   ikisi de hemfikir. Çelişki mi, ölçek farkı mı — ölçülemedi.
② Germrüd: Osmanlı 20 Zilhicce 996 (Kasım 1588) sancak beyi atadı (Kütükoğlu dn.186); Safevî talep etti;
   1591 tahdidinde kimde kaldı — Kütükoğlu cilt II OKUMADIM. Eskandar'ın komşuluk listesi Germrud'u
   Erdebil–Sarâb–Halhâl kuşağına koyuyor; önerilen hatta Safevî yanda kalır. Bu hüküm Germrüd için değil,
   yalnız hattın geometrisi için; açık kalem.
③ Ahar (köşe 3, DEĞİŞTİRİLMEDİ): Emre kararı tâbi 1588-1603; Eskandar s.619-620 1592'de İran'a bırakıldı diyor
   (ASM raporundaki ayrışma aynen geçerli). Areštanāb köşesi Karadağ'ın kimde olduğunu çözmez.
④ Mihrânrûd (1593 Tebriz nahiyesi) doğu uç adayı olarak KULLANILMADI: GeoNames'te "Mehrān Rūd" Tebriz
   yanındaki dere (13413917, 38.068/46.369); nahiye merkezinin yeri kaynakla eşlenemedi.
```

## ⑥ NE ÖLÇEMEDİM — üç damga

```
BULUNAMADI   Eskandar/Kütükoğlu/TDV'de Areştanāb (her yazımla 0) · 1590-1603 için Kızıl Üzen / Kaflankuh / Qaranqu'yu
             SINIR diye anan cümle · Sarukurgân · Egertû · Kavdûl GeoNames eşlemesi · Hashtrūd–Sakkız arasında
             konumu ölçülebilir kaynaklı Osmanlı yeri (köşe 6 için) · Ūcân / Türkmençay'ın 1590-1603 tarafı
             TDV: serab · miyane · merage · kiziluzen · cafer-pasa-kucuk → hepsi 302 ÖLÜ
ÖLÇÜLEMEDİ   Areštanāb = Arshatnāb ad eşlemesi (GeoNames kayıt sayfası alternatif ad vermedi) · "12 fersah" ile
             43 km uyuşmazlığının sebebi · Heşrûd = Hashtrūd ad eşlemesi · Iranica SARĀB / MĪĀNA maddeleri
             (articles/sarab · /miana, eğik çizgili ve çizgisiz → 404; madde adı farklı olabilir)
OKUMADIM     Röhrborn 1966 s.6-9 (Bosworth'ün dayanağı — archive.org'da yok) · Razmārā, Farhang-e joḡrāfiā'ī IV s.15 ·
             Bilgili 2004 Osmanlı İran ve Azerbaycanı I (1593 listesinin dayanağı) · Kütükoğlu 1590-1612 cildi ·
             BL Add. 1688 143a-145a sınırnâme · Petrushevsky · Minorsky (bu turda açılmadı)
```

## ⑦ KOORDİNATÖRE

- Yama önerisi: `denetim/YAMA-KOSE-SARAB-MIYANE-0913.json` — köşe 4 ve 5 aynı biçimde nesne, köşe 6 `atilan_koseler`e; eski `gecici`/`bekleyen` alanları yeni köşelerde **yok** (Emre kararı verildi), `emre_kararlari_notu.acik` metni için öneri JSON'da.
- **Uygulama sonrası sınanacak:** hattın Kızıl Üzen/kara maskesi üstünden geçişi app.js'te görsel olarak — ben çizdirmedim.
