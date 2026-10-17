# ŞEHİR TARİHÇESİ — OSMANLI BÖLGESİ (13–14 Ekim 2026)

Emre'nin planı: 1900'de kategori 1–3 olan şehirleri (`denetim/SEHIR-1900-LISTE-1013`) tarih sahnesine ilk
çıktıkları güne geri götürmek; her şehre sahiplik zinciri + kronoloji. İlk bölge: Osmanlı ve İslâm dünyası.

Çıktı: **`data/sehir_tarihce_osm.js`** (`window.SEHIR_TARIHCE_OSM`) · şema: `VERI-YAPISI.md` son bölüm ·
denetçi: `arac/sehir_tarihce.py` · görev metni: `GOREV.md` · tam denetim çıktısı: `DENETIM.txt` ·
parti parti karar/düzeltme kalemleri: `KARARLAR.md`.
**Motor, `denetle.py` ve site bu dosyayı OKUMAZ** — atlas verisi değişmedi; aktarım ayrı iştir.

## ① Ne ölçtüm (`arac/sehir_tarihce.py denetle data/sehir_tarihce_osm.js` → çıkış 0)

| | sayı |
|---|---|
| Şehir | **241** (247'lik bölge listesinin, adı bilinmeyen 6 birim hariç tamamı) |
| Sahiplik dönemi | **1.592** |
| Kronoloji olayı | **2.356** |
| İhlal | **0** |
| Uyarı | 283 — hayalet künye 85 · künye bekliyor 91 · atlas başlangıcı düzeltilmeli 57 · dikiş beyanlı borç 49 · 1 gereksiz işaret |
| Başlangıç | ilk anılış 189 · kuruluş 52 · **MÖ'de başlayan 65** · 1281 öncesi başlayan 160 |
| Atlasta noktası olan | 206 · olmayan (yeni nokta adayı) 35 |
| `__BOSLUK__` (şehir var, sahibi bilinmiyor) | 176 dilim, 105 şehir |
| `__YOK__` (yerleşim yok) | 6 dilim (Rusçuk, Elbasan, Mersin, Nablus, Vidin, Zekâzîk) |
| `koordinat_bekliyor` | 6 (eski Bayazıt, Eski Gümüşhane, Seyûn, Vamos, Şeyh Saad, Gernik) |

Yöntem: 25 parti × ≤10 şehir, her parti bir Opus araştırmacısı, 5 paralel. TDV HAM metinle çekildi
(WebFetch özetleyicisi kullanılmadı). Parti başına ~20–37 dk, ~330–480 bin token; toplam ≈ 9,5 milyon token.
Her parti `sehir_tarihce.py yaz` çıkış 0 olmadan teslim edilmedi; oturum her teslimi yeniden doğruladı ve
meta-olay taramasından (`meta_tara.py`) geçirdi.

## Yöntemde yolda kapanan açıklar (her biri bir partinin ölçtüğü vaka)
| Açık | Bulan | Çare |
|---|---|---|
| Dikiş kuralı yanlıştı ("son sahip = atlasın ilk sahibi"; el değiştirme tam atlas gününde olabilir) | p01 | kural düzeltildi, o gün için olay ister |
| `kesinlik:{f,t}` nesnesi denetçiyi çökertiyordu | p01 | iki biçim okunur |
| Hicrî çeviri beyansızdı (TAKVİM kuralı) | p01 | 18 öğeye çeviri beyanı |
| `osmanli` künyesi yok (atlas `d:` ile taşır) | p04 | ayrılmış kimlik |
| **Ölçütü olay UYDURARAK geçmek** — `kaynak:"bulunamadı"` yer tutucu (Cezayir) ve "tarihî olay değil" meta-maddeler (Maskat, Manastır, Yanya, Konstantine, Dimyat) | p02–p06 | yasak; `dikis_beyan` ile borç beyanı; denetçi "bulunamadı" kaynaklı olayı ihlal sayar |
| Künye id ↔ harita anahtarı (kibris-krallik ↔ lusignan) | p06 | denetçi eşler |
| Terk edilmiş yerleşime bölge sahibini yazmak (Rusçuk) | p10 | `__YOK__` |
| Yanlış adaş koordinat (Neapoli → Selanik banliyösü) | p09 | koordinat sınaması görevde; Maden, Yarpuz başlamadan düzeltildi; Kerek'i ajan buldu |
| Yer değiştirmiş şehirde iki ajan iki farklı çözüm (Doğubayazıt ↔ Gümüşhane) | p16/p17 | kural: kayıt 1900 yerleşimini tarihler, `koordinat_bekliyor`; ikisi düzeltildi |
| ≤ 3 km'de süreklilik varsaymak (Zekâzîk–Bubastis) | p14 | kesinti kaynakla gösteriliyorsa `__YOK__` |
| Atlasta olmayan `atlas_ad` denetçiyi çökertiyordu | p20 | ihlal verir |

## ② Ne bulamadım / zayıf kalan
- **Adı bilinmeyen 6 birim** (Bulgaristan 2 okrug, el-Hudud, Tunus kaidlikleri, İran'da Belûcistan ve Irâk-ı Acem) araştırılamadı.
- **Bellekten/ikincilden gelen ve doğrulanması gereken tanıklar:** Lefkoşa Asarhaddon prizması yılı (MÖ 673) · Nablus Babil
  kronikleri (ABC 3/5/7) · Acman ve Ümmülkayveyn 1820 imza günleri (IOR, yalnız arama özeti) · Seniçe 1253.
- **Kaynak kuralına aykırı dayanak:** Vamos (Girit) — ilk anılış ve 1646/1867/1896 bir **belediye sitesinden** → akademik kaynakla
  doğrulanmalı. Serfiçe ana kaynağı Yunan Kültür Bakanlığı sitesi (kurumsal, ansiklopedi değil).
- Perseus çoğu kez 503 verdi; birçok klasik yıl "genel kronoloji (ayrıca doğrulanmadı)" etiketiyle — beyanlı.
- 35 yeni nokta adayından 6'sının koordinatı yok (GeoNames cities1000'de değil).

## ③ Ne istiyorum — EMRE KARARI GEREKEN

### A. İlke kararları (bundan sonraki bölgeleri de bağlar)
1. **Yerinde kitabe başlangıç sayılır mı?** Hürremâbâd: ad yazılı kaynakta 1340, yerinde 1123 kitabesi. Önerim: **evet** — kitabe yazılı tanıktır, arkeolojik tarihleme değil.
2. **TDV kendi içinde çelişirse akademik kaynak alınabilir mi?** Berat (TDV "XIII. yy'da kuruldu" ↔ aynı madde 1204 öncesi Bizans), Annaba (TDV "395'te Bizans'ın payına" — olgu hatası). Önerim: **evet, beyanla**.
3. **"Yerleşimin varlığı da bilinmiyor" dilimi:** Zekâzîk 641–1800 şu an `__BOSLUK__` (o "şehir var, sahibi bilinmiyor" der). Önerim: yeni ayrılmış kimlik `__BILINMIYOR__`.
4. **Yeri kesin olmayan eşitlemeler** (Adana kuralının uygulamaları — onay için): Erzincan = Eriza, Mostaganem = İbn Havkal'ın Müstegānim'i, Medea = Lambdia, Kerkük = Ur III adı, Çankırı Morzeus. Hepsinde başlangıç SAYILMADI.

### B. Atlas düzeltme ÖRÜNTÜLERİ (tek tek liste `KARARLAR.md`de)
- **57 şehirde atlasın başlangıcı ilk tarihli tanıktan ÖNCE** (zincir boş). Örnekler: Saraybosna 1462, Mostar 1452, Travnik 1463,
  Banja Luka ~1464, Görice ~1402, Çanakkale 1463, Bilecik 1284, Balıkesir 1333, Çorum 1352, Batna 1844, Sidi Belabbas 1843,
  Süleymaniye 1784, Mersin 1812 (atlasın 1671'i başka köy), El-Fâşir 1792, Hartum ~1700.
- **Balkan 1281 başlangıçları sistematik kaynaksız/yanlış** (19 şehir): Filibe, Köstendil, Sofya, İslimye, Eski Zağra, Üsküp (1282'ye kadar Bizans), Manastır (Bizans), Yanya (Epir), İşkodra (Venedik ancak 1396), Debre (Milutin 1283), Preveze (ilk anılış 1292), Ergiri (1336), Kırklareli, Tatarpazarcığı (1472), Saraybosna, Mostar, Travnik, Tuzla, Banja Luka. → Balkanlar'ın 1281 sahiplik verisi toplu kaynak taramasına alınmalı.
- **Cezayir 1281 `zeyyani` sistematik tanıksız** (13 şehir): Cezayir, Konstantine, Bicaye, Batna, Kalama, Şelif, Medea, Setîf, Lağvat, Tizi Uzu, Milyâne, Sidi Belabbas, Sükeyke. Kaynaklar doğuyu 1230'dan Hafsî gösteriyor; birkaç şehir 1281'de hiç yoktu.
- **Doğrudan sahip ↔ metbû karışması:** Mekke, Medine, Cidde (atlas `memluk`; doğrudan sahip şerifler/emîrler) · Kerman (Kutluğhanlı) · Vâdî Halfâ (Nûbe).
- **Yemen 1281 `yemen` (Zeydî) → Resûlî:** San'a, Taiz, Hudeyde, Ebhâ.
- **Ege adaları 1281 `ceneviz` → Bizans:** Sakız (Zaccaria 1304, Maona 1346), Midilli (Gattilusio 1354), Sisam.
- **Atlas noktası tarihî merkezden kayık (> 3 km):** Şiraz 5,5 · Limasol ~4 · Cidde 6,0 · Silifke 7,7 · Limni 7,9 · Hartum 6,4 · Trablusşam (el-Mînâ 3,3) · Doğubayazıt ~5 · Gümüşhane 3,6.
- **Atlasta hiç olmayan 1900 merkezi:** İpek (atlasta yalnız 1991 noktası), Maden, Yarpuz, Seniçe, Lom, Mezâr-ı Şerîf, Muş, Lazkiye … (35 yeni nokta adayı).
- **Ayrı antik/eski kayıt önerileri** (3 km kuralı): Tuşpa/Eski Van, Eski Basra, Harput, Eski Malatya, Laodikeia, Scupi, Novae, Abritus, Lambaesis, Kuseyr el-Kadîm, Lepcis Magna, eski Kandehar, el-Mînâ, Şehrizor, Trâgen, Ed-Dûr, antik Samos.

### C. Künye işleri (`devletler.js`)
- **67 önerilen yeni künye** (92 dilim). En çok istenenler: sakiz-polis 5 · midilli-polis 5 · girit-emirligi 4 · byzantion-polis 4 ·
  makedon-merisleri 3 · kibris-isaakios 3 (+ kibris-isaakios-komnenos 2 = AYNI) · rodos-polis 3 · atsiz-beyligi/atsiz-filistin (AYNI, 4).
  Önerim: önce tekrarlananlar; aynı yapının iki adı tek künyede birleşir.
- **Künye ömrü düzeltmeleri — birden çok partinin bağımsız bulduğu:** ptolemai (MÖ 323'ten; 5 parti) · hulefa-yi-rasidin t 661-07-29 (4) ·
  hammadiler t 1153 (4) · medine-devleti t 632-06-08 (3) · zeyyani f 1235 (3) · emevi f 660 (2) · ziriler f 960 (2) · vandal f 429 (2).

## Öneri — sırada ne var
1. A1–A4 kararları (kısa) → kural `VERI-YAPISI.md`ye.
2. Tekrar eden künyeler + künye ömürleri (tek oturum, `devletler.js`).
3. Atlas düzeltmeleri: önce 57 "başlangıç erken" şehri — bunlar `kur:` alanıyla, motor değişmeden çözülür.
4. Öteki bölgeler (Rusya, Avrupa, Asya, Amerikalar+Afrika): bu bölgede oturan yöntem ve görev metniyle ayrı oturumlar.
