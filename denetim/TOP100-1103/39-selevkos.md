# 39 · Selevkos İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py + elle tarama; veriye yazılmadı)

## Özet
- Künye: 1 (`selevkos`); Kırılma 6, AÇIK **0**; eksik madde 2 (Selevkos sonu için gerçek "son" maddesi, Antiokheia/Suriye'nin Roma'ya geçişi) + 2 yanlış çevrilmiş t.
- **Ağır 1 — t yanlış/dayanaksız:** künye `t:-0062` (MÖ 63) yalnız worldhistory.org'a (dayanak değil) dayanıyordu. Okunan kaynaklar: TDV «ANTAKYA» Pompeius'un 64'te girişiyle Selefki devletine son verildiğini yazar (MÖ 64 = **-0063**); Treccani (Enciclopedia Italiana «Seleucidi») "dal 312 al 65" der (MÖ 65 = -0064). Önerilen: `t:"-0063-01-01"` (TDV esas) + ic_not'ta Treccani 65 / MÖ 63 farkı.
- **Ağır 2 — evren maddesinde MÖ→astronomik yıl hatası:** `kronoloji_sinir_antik3_1024.js:25` "MÖ 65 (Treccani)" için `t:-0063` yazılmış; doğrusu -0064. Satır :23 "MÖ 176 (Treccani)" için `t:-0174`; doğrusu -0175 (b alanı da "MÖ 175" diyor, gun alanı "MÖ 176" — kaynak 176 diyor → -0175).
- **Ağır 3 — Suriye çekirdeği haritada yok:** `selevkos` yalnız 5 yerleşimde (Hemedan, Uruk, Babil, Seleukeia, Dura-Europos); en geniş an -302'de 5. Antakya `s:` yalnız 0968'den başlıyor (Selevkos'un başkenti!), Şam/Halep/Kudüs `__BOSLUK__` -0608→1000/1253. Selevkos haritada "Mezopotamya+Media devleti" görünür; Suriye ve Anadolu'ya hiç sahip değil.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| selevkos | Selevkos Imparatorlugu | -0311-01-01 | -0062-01-01 | tek künye; 5 yerleşim (harita ömrü -311→-112) |
| (komşu) elymais, karakene, atropatene, greko-baktria, arsakuni... | Selevkos'tan kopan parçalar | — | — | ayrı künyeler var (Seleukos devletinin evreleri değil, ardıllar) |
Selevkos devlet sınırlarında evre ayrımı gerekli mi: Antiokhos III çağı (-0199→-0189: Panion/Magnesia) ile Apameia sonrası (-0187) ve Part'a kayıplar (-0147 Medya, -0140 Babil) harita-evreleri `s:` düzeyinde (yerleşim başına) işleniyor; künye bölünmesi gerekmiyor. Eksik: Selevkos öncesi Diadokhos evresi (Antigonos: -0319→-0300; Selevkos'un Babil'i alışı -0311) künyesi yok ama Selevkos f'si bunu "Babil'in alınışı"na bağlıyor (bkz. b).

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm |
|---|---|---|---|---|
| f | -0311-01-01 (MÖ 312) | Treccani, «Seleuco I Nicatore», Enciclopedia Italiana: «conquista della Babilonia ... (estate 312)» (atlas `kronoloji_sinir_antik3_1024.js:19` bu satırı alıntılıyor; **bu oturumda Treccani «Seleucidi» okundu, o sayfada bu cümle yok** — ayrı maddeden, doğrulanmadı) | Britannica «Seleucid Empire» (arama özeti: Babil 312; sayfa 403, okunamadı); TDV'de Selevkos I'in kuruluş yılı bulunamadı (ANTAKYA ve İRAN okundu) | MÖ 312 = -0311 makul ama ikinci bağımsız akademik kaynak **okunamadı**: ERİŞİLEMEYEN. Not: Selevkos Çağı (Babil takvimi) MÖ 311 Nisan'ı, Makedon takvimi MÖ 312 Ekim'i; künye `f` Babil'in alınışına bağlı (312) → -0311 doğru. |
| Antiokheia kuruluşu | -0299 (MÖ 300) | TDV ANTAKYA: «Şehri asıl kuran ve ismini veren» Selevkos (yıl verilmiyor) | `olaylar_antik_yakin_dogu.js:19` (kaynak alanı okunmadı) | Yıl TDV'de yok; ikinci akademik kaynak aranacak. |
| t | -0062-01-01 (MÖ 63) | TDV ANTAKYA: «Selefki Devleti'ne son verilerek doğrudan Roma hâkimiyeti tesis edildi» (Pompeius, 64'te şehre girişi; aynı madde «69'da Roma'nın egemenliği altına girdi» der = Tigranes dönemi karışıklığı) — okundu | Treccani «Seleucidi»: «dal 312 al 65 a. C.» ; Pompeo «nel 65 ... comparve in Siria» ... «fece della Siria una provincia romana» — okundu | **TDV esas: MÖ 64 = -0063.** Treccani MÖ 65 (= -0064) verir; Britannica MÖ 64 (arama özeti). worldhistory MÖ 63 → dayanak değil. Öneri `t:"-0063-01-01"`; ic_not: "TDV Antakya 64; Treccani 65; Roma eyaleti 63 sayanlar var; Pompeius'un Suriye'yi eyalet yapması 64/63". |
| Part'a kayıp (Babil) | -0140 | TDV İRAN: «milâttan önce 141'de Selevkos Krallığı'na tamamen hâkim oldu» (Part Mithridatis) — okundu | `olaylar_antik_yakin_dogu.js:9` (MÖ 138 Demetrios II esir) | 141 = -0140 ✓ (TDV); ikinci kaynak okunamadı. |
| Apameia | -0187 (MÖ 188) | atlas olay (kaynak alanı okunmadı) | — | Bu oturumda doğrulanmadı. |
| TDV içi tutarsızlık | — | TDV DÎNEVER «Selevkos dönemi (m.ö. 305–64)» (arama özeti), TDV FARS «Selevkoslar ... m.ö. 164'e kadar» (arama özeti) | TDV ANTAKYA 69/64 | Selevkos'un 64'te bittiği TDV'de tutarlı; 305 başlangıcı (Dînever özeti) f=-0304 olurdu — **f için TDV'de net yıl bulunamadı**. |

## c) Kronoloji (Değişmez 2 evreni)
Var olanlar:
- `kronoloji_sinir_antik3_1024.js:19` (-0311 Babil'in alınışı, Treccani), `:20` (-0280 Antiokhos I, MÖ 281 ✓), `:21` (-0222 III. Antiokhos, MÖ 223 ✓), `:22` (-0186, MÖ 187 ✓), `:23` (-0174 → olması gereken -0175, MÖ 176), `:24` (-0144 Balas MÖ 145 ✓), `:25` (-0063 → olması gereken -0064).
- `olaylar_antik_yakin_dogu.js`: :19 Antiokheia kuruluşu (-0299); :18 Selevkos I ölümü (-0280, MÖ 281); :12 Apameia (-0187); :16 I. Suriye Savaşı (-0273); :10 Makabi (-0166); :9 Demetrios II Part'a esir (-0137); :8 VII. Antiokhos ölümü (-0128).
- `olaylar_antik_misir_nubya.js:26` Gazze Muharebesi MÖ 312 (-0311).
- Selevkos'un sonu için **alâkalı evren maddesi yok**: `kronoloji_sinir_antik3_1024.js:25` yalnız "Pompeius Suriye'ye geldi" der, Selevkos sonu değildir; künye-içi `son` maddesi (devletler.js:19446) evren dışı.
Eksik/öneri:
```
{ t:"-0063-01-01", b:"Pompeius Antakya'ya girdi, Selefki devletine son verildi; Suriye doğrudan Roma yönetimine geçti (MÖ 64)", yer_id:"Antakya", tur:"son", kesinlik:"yil", kaynak:"TDV ANTAKYA (islamansiklopedisi.org.tr/antakya): «Selefki Devleti'ne son verilerek doğrudan Roma hâkimiyeti tesis edildi»", ic_not:"Treccani 'Seleucidi' MÖ 65 (Pompeo Suriye'de); worldhistory MÖ 63 (dayanak değil); iki ucu ölç: t=-0063" }
```
Düzeltme (mevcut): `kronoloji_sinir_antik3_1024.js:25` `t:"-0063-01-01"` → `"-0064-01-01"`; :23 `t:"-0174-01-01"` → `"-0175-01-01"`.
Diğer büyük olaylar için (okunmadı, kaynak aranacak): Ipsos (MÖ 301), Korupedion (281, :18 var), Raphia (MÖ 217), Panion (MÖ 200, künye-içi var; evren: aranacak), Magnesia (MÖ 190, künye-içi var; evren: aranacak), Antiokhos IV Mısır seferi (MÖ 168), Pompeius sonrası. Hepsi `olaylar_antik_yakin_dogu.js`'te kısmen var; eksikler tam okunmadığı için madde satırı yazılmadı.

## d) Harita uyumu
Ölçer: kırılma 6; AÇIK 0 (-0311 f, -0147 Hemedan, -0140 Babil/Uruk/Seleukeia, -0112 Dura, -0062 t).
Harita tarafı:
| Gün | Yerleşim | Bulgu |
|---|---|---|
| -0311→-0112 | Hemedan (-0311→-0147), Uruk, Babil, Seleukeia, Dura-Europos | 5 yerleşim; en geniş -302. Selevkos'un -0140'tan sonra yalnız Dura (-0112'ye kadar) kalıyor: -0140→-0062 arası (Kuzey Suriye/Kilikya çekirdeği) harita Selevkos'u **hiç göstermez**. |
| -0299→-0063 | Antakya (başkent) | `s:` 0968'den başlıyor; Selevkos (ve Roma/Bizans öncesi) yok. Antakya `s:` -0299→-0063 `selevkos`, sonrası `roma-cumhuriyeti` (-0063→) önerilir (TDV ANTAKYA: Pompeius 64). |
| -0608→1000 | Şam, Halep, Kudüs | `__BOSLUK__` (Kudüs -0585→1253). Selevkos Şam'ı -0199 Panion sonrası aldı (olaylar_antik_yakin_dogu:… "III. Antiochos Panion", künye-içi -0199); Şam/Halep/Kudüs için `s:` gerekir (öncesinde Ptolemaios -0301→-0199 ("Suriye Savaşları", `olaylar_antik_yakin_dogu.js:16`)). Kaynak aranacak (TDV Şam/Halep). |
| Anadolu | Sardes, Efes, Tarsus, Apameia, Selevkeia Pieria | Selevkos'un -0301→-0188 Anadolu toprağı (Apameia -0187) için ilgili yerleşimlerde Selevkos `s:` yok. Antik Anadolu yerleşim kapsamı bu denetimde taranmadı: ölçülmedi. |
Not: yerleşim sayısı >0 olduğu için "haritada görünmüyor" değil; ama "görünen kısım bilinen sınırın çok altında" (5 nokta).

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `selevkos`: `t:"-0062-01-01"` → `"-0063-01-01"`; `ic_not`a "TDV Antakya 64; Treccani 65; MÖ 63 yalnız ikincil".  Etkilenen uçlar: Selevkos `s:` zaten -0140/-0112'de bitiyor → 5 yerleşimde t etkisi yok.
2. `data/kronoloji_sinir_antik3_1024.js:25` `t` -0063 → -0064; `:23` `t` -0174 → -0175.
3. Yeni evren maddesi (yukarıdaki satır) → `data/olaylar_antik_yakin_dogu.js`.
4. `data/yerlesimler.js` Antakya: `s:[{f:"-0299-01-01",t:"-0063-01-01",d:"selevkos",kesinlik:"yil",kaynak:"TDV antakya: Selevkos kurucusu; Pompeius 64"}]` (kuruluş yılı için ikinci kaynak şart).
5. Şam/Halep/Kudüs için Ptolemaios→Selevkos zinciri (kaynak aranacak) — bu denetimde veri yazılmadı.

## Erişilemeyen kaynaklar
- Britannica «Seleucid Empire» / «Seleucid dynasty» — 403. Soru: f (312) ve t (64) cümlesi.
- Met Museum / Heilbrunn, «The Seleucid Empire (323–64 B.C.)» https://www.metmuseum.org/essays/the-seleucid-empire-323-64-b-c — 429 (aşırı istek, tekrar denenebilir). Soru: Babil 312, Selevkos Çağı, Pompeius 64/63.
- Grainger, *The Seleukid Empire of Antiochus III / A Seleukid Prosopography*; Kuhrt–Sherwin-White, *From Samarkhand to Sardis* (1993); Cambridge Ancient History VII.1 (2. bas.) — soru: Selevkos Çağı başlangıcı (1 Nisan MÖ 311) ve Pompeius'un Suriye'yi eyalet yapma yılı (64/63).
- Treccani «Seleuco I Nicatore» https://www.treccani.it/enciclopedia/seleuco-i-nicatore_(Enciclopedia-Italiana)/ — okunmadı; atlas alıntısı doğrulanmadı.

## KESİN HATA (koordinatör onayı)
- `data/kronoloji_sinir_antik3_1024.js:25` `-0063` → **`-0064`** (MÖ 65) · `:23` `-0174` → **`-0175`** (MÖ 176). MÖ n → -(n-1) çevirisi.
