# 38 · Part (Arşakî) İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py + elle tarama; yalnız okundu, veriye yazılmadı)

## Özet
- Künye: 1 ana (`part`) + 3 komşu/alt künye (`elymais`, `karakene`, `atropatene`: Part vasalı, ayrı devlet; `arsakuni-ermenistan` Part dalı). Kırılma 4, ±30 günde alâkalı maddesi olmayan (AÇIK) **0**. Ölçülemeyen yok.
- **Ağır 1 — harita neredeyse boş:** `part` yalnız 6 yerleşimde sahip (Hemedan, Uruk, Babil, Seleukeia, Ktesiphon, Dura-Europos), en geniş yıl -111'de 6. Partia çekirdeği (Nisa, Hekatompylos, Merv, Rey), Susa, Persepolis (Part dönemi), Herat vb. ya hiç `s:` taşımıyor ya da `s:[]` + `bos:"veri-yok"` (Hekatompylos, Rey). Haritada Part, Mezopotamya + Hemedan'dan ibaret görünür.
- **Ağır 2 — künye ↔ künye-içi kronoloji uyuşmazlığı:** künye `f:-0249` (MÖ 250) ama künyenin kendi `kuruluş` maddesi `-0246` (MÖ 247). İki kaynak kümesi gerçekten ayrışıyor (aşağıda b); karar: `f` -0249 kalsın, madde -0246'yı da "MÖ 247" beyanıyla `ic_not`a bağla ya da maddeyi -0249'a çek.
- **Ağır 3 — t günü kaynaksız:** `t:0224-04-28`in "04-28" günü TDV'de ve okunan akademik kaynaklarda YOK (yalnız popüler CAIS sayfa başlığında). Ktesiphon/Babil/Uruk/Seleukeia/Dura `s:` uçları buna bağlı → "[yalnız yıl teyitli; gün teyitsiz]" beyanıyla kalmalı. Evren (olaylar*) içinde elle yazılmış bir "Part sona erdi / Sasani kuruluşu" maddesi de yok; yalnız üretilmiş `olaylar_arkeoloji_zincir.js:1591` (0224-04-28) karşılıyor.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| part | Part (Arsakid) Imparatorlugu | -0249-01-01 | 0224-04-28 | ana künye; yerleşim 6 (harita ömrü -147→224) |
| elymais | Elymais Krallığı | -0146-01-01 | 0224-01-01 | vasal, ayrı künye (var) |
| karakene | Karakene (Mesene) Krallığı | -0140-01-01 | 0222-01-01 | vasal, ayrı künye (var) |
| atropatene | Atropatene Krallığı | -0320-01-01 | 0226-01-01 | vasal/ayrı (var) |
| arsakuni-ermenistan | Arşakuni Ermenistan (Part dalı) | 0063-01-01 | 0428-01-01 | dal; Part t'sinden sonra da sürer (Part künyesine bağlı değil) |
Eksik evre: yok (tek hanedan, evre bölünmesi gerekmiyor). Eksik künye adayı: Persis (Fars) vasal krallığı — Persepolis `s:` Ahameniş -0329'da bitiyor, sonrası yok (aşağıda d).

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f | -0249-01-01 (MÖ 250) | TDV «İRAN» (islamansiklopedisi.org.tr/iran): «Arsakes, Selevkoslar'a karşı ayaklandı» ... «(m.ö. 250)» — okundu | Treccani, Pagliaro, «Arsacidi», Enciclopedia Italiana 1929: «riuscì a scacciare nel 250 il satrapo Ferecle» — okundu | **Teyitli: MÖ 250 = -0249.** Karşı veri: TDV «MUHAMMED HASAN HAN» md. Eşkânîler'i «(m.ö. 247 - m.s. 225)» verir (TDV içi çelişki); Treccani aynı maddede "Parth era 14 Nisan 247" (Tiridate I'in cülusu) der; Iranica «Arsacids ii» ~247 verir (arama özetinden; sayfa 403, okunamadı). Beyan: "250 = Arsakes'in isyanı/krallığı; 247 = Part Çağı başlangıcı (Tiridat)". |
| Künye-içi madde | -0246-01-01 "MÖ 247" kuruluş | (künye kronoloji, evren dışı) | — | Künye f ile çelişir → maddeyi -0249 + "MÖ 250" yap, 247'yi ic_not'a taşı. |
| Selevkos'tan kopuş (harita) | Babil/Uruk/Seleukeia -0140 (MÖ 141) | TDV İRAN: «milâttan önce 141'de Selevkos Krallığı'na tamamen hâkim oldu» | atlas `olaylar_arkeoloji_zincir.js:67`: «Temmuz 141'de Seleukeia'yı» (Mithradates I; kaynak alanı tam okunmadı) | 141 = -0140 ✓. İkinci bağımsız akademik kaynak **okunamadı** (Treccani Arsacidi Mitridate I'in fethini anmıyor; Iranica 403) → ERİŞİLEMEYEN. |
| Hemedan | -0147 (MÖ 148) | atlas `olaylar_arkeoloji_zincir.js:84`: «Mithradates I Medya'yı fetheder (148; Justinus 41.6.7)» | — | Tek (birincil, aktarım). İkinci akademik kaynak ARANACAK. |
| Dura-Europos | -0112 (MÖ 113) | atlas zincir:39 «Part fethi (ca. 113)» (Leriche–MacKenzie, EncIr) | — | Tek kaynak; yaklaşık. |
| t | 0224-04-28 | TDV İRAN: «Arsaki hânedanı sona erdi (m.s. 224)» ; «Sâsânî İmparatorluğu'nu kurmuştu (226)» | Treccani «Arsacidi»: Artabano V'in saltanatı «-224» | **Yıl 224 teyitli (iki kaynak).** Gün 04-28: kaynaklı DEĞİL (yalnız CAIS sayfa başlığı «28 April CE 224», popüler/derleme). Hüküm: günü "gün teyitsiz" beyanıyla tut (sınıra bağlı) ya da Hormozdgan gününü veren akademik kaynak bulunana dek 0224-01-01'e indir. Not: Ktesiphon'un fiilen Ardeşir'e geçişi/taç giyme 226 (TDV) — 224→226 arası Ktesiphon sahipliği belirsiz (atlas Part'ı 224'te kesiyor; kaynak yazılırsa `ic_not` şart). |
Önerilen satır (künye): `ic_not:` "f: TDV İran + Treccani(Pagliaro) MÖ 250; karşı: TDV Muhammed Hasan Han ve Iranica MÖ 247. t: yıl TDV+Treccani teyitli; 04-28 günü kaynaksız."

## c) Kronoloji (Değişmez 2 evreni: data/olaylar*.js, kronoloji_sinir*.js)
Var olanlar:
- Kuruluş (onyıl): `data/olaylar_antik_yakin_dogu.js:14` — "Arsakes I ve Tiridates Parthava'yı alıp Part devletini kurdu", t -0249 (MÖ 250) ✓ künye f ile uyumlu.
- Part Selevkos'tan Mezopotamya'yı alır: `olaylar_antik_yakin_dogu.js:9` (t -0137, MÖ 138, II. Demetrios esir) ✓; Babil/Seleukeia/Uruk `olaylar_arkeoloji_zincir.js:67-72` (-0140) ✓.
- Hemedan (-0147) `olaylar_arkeoloji_zincir.js:84` ✓; Dura-Europos (-0112) `:39` ✓.
- Carrhae `olaylar_antik_yakin_dogu.js:6` (-0052, MÖ 53 Haziran) ✓; Augustus–Phraates antlaşması `:4` (-0019, MÖ 20) ✓.
- Severus/Ktesiphon yağması: `olaylar_antik_akdeniz.js:177` (0198) ✓.
- Bitiş: yalnız üretilmiş `olaylar_arkeoloji_zincir.js:1591` (0224-04-28).
Eksik/öneri (kaynak okunduktan sonra yazılacak; aşağıdakiler yalnız TDV İRAN'da okunanlara dayanır):
```
{ t:"0224-01-01", b:"Sâsânî Ardeşir, Arsakî son kralı Ardavan'ı (V. Artabanos) yenip hânedanı sona erdirdi", yer_id:"Ktesiphon", tur:"son", kesinlik:"yil", kaynak:"TDV İRAN: «Arsaki hânedanı sona erdi (m.s. 224)»; Treccani, Arsacidi: Artabano V «-224»", ic_not:"gün teyitsiz; künye t 04-28 ile uyum için bkz b)" }
{ t:"0226-01-01", b:"Ardeşir Sâsânî İmparatorluğu'nu kurdu", yer_id:"Ktesiphon", tur:"kurulus", kesinlik:"yil", kaynak:"TDV İRAN: «... Sâsânî İmparatorluğu'nu kurmuştu (226)»" }
```
(İkincisi Sasani künyesi 47-sıra denetiminin işi; yalnız Part sonunu karşılamak için.) Eksik büyük olaylar, kaynak aranacak (bu oturumda okunmadı → madde yazılmadı): Mithradates I Ktesiphon/Seleukeia karşısına kamp (bkz CAIS, popüler), Trajan'ın Ktesiphon'u alışı (116), Vologases başkent politikası, Nisa → Ktesiphon başkent değişimi. Başkent değişikliği için akademik kaynak (Bivar 1983 CHI 3(1), Debevoise 1938) ERİŞİLEMEDİ.

## d) Harita uyumu
Ölçer: kırılma 4, AÇIK 0 (-0147 Hemedan, -0140 Babil/Uruk/Seleukeia/Ktesiphon, -0112 Dura, 0224 hepsi karşılanıyor).
**Ama harita verisi eksik** (ölçer bunu sormaz):
| Gün | Yerleşim | Bulgu / öneri |
|---|---|---|
| tüm dönem | Hekatompylos (Şehr-i Kumis), Rey | `s:[]`, `bos:"veri-yok"` (`yerlesimler_once1281_yt_ortadogu.js:34, :9`). Önce Selevkos→Part; Hekatompylos Part'ın ilk başkenti (olaylar_antik_yakin_dogu.js:14 `odak_yer`). `s:` gerekir (kaynak: TDV İRAN / Iranica). |
| tüm dönem | Nisa (Part başkenti, künye baskent:"Nisa → Ktesiphon") | Yerleşim kaydı bulunamadı (ad:"Nisa" yok). Eklenmeli ya da baskent alanından çıkarılmalı. |
| -0329→0224 | Susa (`yerlesimler_mo_zincir.js:15`) | Son `s:` Ahameniş -0330. Selevkos (Susa/Seleukeia on Eulaios) → Elymais (-0146) → Part; arada boşluk (hiç `s:` yok). Elymais künyesi var; Susa'ya `elymais`/`part` dönemleri yazılmalı. |
| -0329→0224 | Persepolis (:17) | Son `s:` Ahameniş -0329; Selevkos→Persis krallığı→Part vasalı→Sasani. Boşluk. Persis künyesi yok (eksik). |
| -0111 (en geniş yıl) | Hemedan, Uruk, Babil, Seleukeia, Ktesiphon, Dura-Europos | 6 yerleşimin hepsi Part'ın bilinen çekirdek-batısında; sınır dışına taşan yok. Doğu yarım (Merv, Herat, Belh bölgesi, Kandahar, Sistan) Part sınırında ama Merv `s:` 500'de Sâsânî ile başlıyor (Part döneminde ilk kayıt yok), Belh `__BOSLUK__` -0124→500. |
| Antakya vs Part | Antakya `s:` 0968'den başlıyor | Part-Roma sınırı (Fırat) tarafında hiçbir yerleşim yok (Samosata/Zeugma/Nisibis Part-Roma sınırında); haritada Part–Roma sınırı belirsiz. |
Sonuç: en geniş an -111'de 6 yerleşim; harita 224'e dek bu 6 noktaya yaslanır → petek motoru Part'ı yalnız Mezopotamya + Hemedan çevresinde boyar. Önerilen minimum: Nisa, Hekatompylos, Rey, Susa (Elymais/Part), Merv (Part dönemi), Persepolis (Persis→Part) için `s:`.

## Önerilen düzeltmeler (KASA için, uygulanabilir satırlar)
1. `data/devletler.js` `part` künyesine `ic_not` ekle: "f MÖ 250 (TDV İran + Treccani/Pagliaro 1929); karşı: TDV Muhammed Hasan Han ve Iranica MÖ 247; t yıl 224 TDV+Treccani; gün 04-28 kaynaksız".
2. Künye-içi `kuruluş` maddesi (`devletler.js:~19448`): `t:"-0246-01-01"` → `"-0249-01-01"` ve `b`'de "MÖ 250", "MÖ 247 = Part Çağı başlangıcı" ic_not'a.
3. Evren maddesi 0224 (yukarıdaki satır) → `data/olaylar_antik_yakin_dogu.js`.
4. `yerlesimler*`: Hekatompylos, Rey, Nisa (yeni), Susa, Persepolis, Merv için Part dönemi `s:` (kaynak: akademik; TDV İran/İrân Tarihi ilk adım).
5. Gün 04-28 için: akademik kaynak bulunana kadar `ic_not`ta "gün teyitsiz" beyanı.

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica «Arsacids ii. The Arsacid dynasty» (K. Schippmann) https://www.iranicaonline.org/articles/arsacids-ii/ — **403.** Soru: Arsaces'in "~247" mi "MÖ 250/248" mi; Mithradates I'in Seleukeia'ya girişi (141 mi?).
- Iranica «Ardašir I» https://www.iranicaonline.org/articles/ardasir-i/ — **403.** Soru: Hormozdgan zaferinin yılı/günü (224, 28 Nisan?) ve Ktesiphon'un alınışı (226?).
- A.D.H. Bivar, «The Political History of Iran under the Arsacids», Cambridge History of Iran 3(1), 1983, s. 21-99 — archive.org/details/Bivar1983ArsacidsCHI03 (djvu.txt çekilemedi: 404). Soru: Arsaces/Tiridates tarihleri; Hormozdgan günü; başkent Nisa→Ktesiphon.
- Debevoise, *A Political History of Parthia* (1938) — archive.org `Debevoise1938Parthia` tam metin çekilemedi (katalog sayfası geldi).
- Britannica «Arsacid dynasty» — 403.
