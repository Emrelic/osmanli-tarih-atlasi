# 15 · Makedonya (İskender İmparatorluğu) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-03 (ölçer top100_olc.py + elle grep)

## Özet
- Künye 3 doğrudan (makedonya-krallik, antigonid-makedonya, iskender-imparatorlugu) + komşu parça makedon-merisleri (−0166 → −0147). Açık kırılma: 0/3 (krallik), 0/2 (antigonid), 0/4 (iskender). Ölçer "temiz" ama anlamlı değil: üç künyede toplam yalnız 2 + 2 + 4 yerleşim var.
- En ağır 3 bulgu:
  1. **İskender'in fetihleri haritada hemen hiç görünmüyor.** −0325 yılında İskender'e ait yalnız 4 nokta (Hemedan, Uruk, Babil, Pasargad); Sart, Şam, Kudüs, Eski Van `__BOSLUK__`; Susa ve Persepolis'in s: dizileri Ahamenis bitişinde (−0330/−0329) kesilmiş, İskender'e devredilmemiş; Mısır, Baktriya, Pencap hiç yok.
  2. **Künye çakışması:** makedonya-krallik t=−0167-01-01 ile antigonid-makedonya f=−0275-01-01 aynı 108 yılı iki künyede taşıyor (harita yalnız s: bitişi −0275 olduğu için çakışmıyor).
  3. Argead sonrası (MÖ 310/309 → MÖ 276) kral-arası dönemin (Kassandros, Demetrios, Pyrrhos, Lysimakhos, Ptolemaios Keraunos) künyesi yok; yalnız krallık künyesinin t'si bunu örtüyor.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| makedonya-krallik | Makedonya Krallığı (Argead-Antigonid) | −0699-01-01 | −0167-01-01 | VAR; harita ömrü −699 → −275 (2 yerleşim: Pella, Aigai) |
| antigonid-makedonya | Antigonid Makedonya Krallığı | −0275-01-01 | −0167-01-01 | VAR; çakışıyor (aşağıda); 2 yerleşim |
| iskender-imparatorlugu | Büyük İskender İmparatorluğu | −0335-01-01 | −0322-06-10 | VAR; harita ömrü −330 → −322 (4 yerleşim) |
| makedon-merisleri | Dört Makedon Cumhuriyeti | −0166-01-01 | −0147-01-01 | VAR (başka ajanın devleti; çakışma yok) |
| makedonya | Makedonya Cumhuriyeti | 1991-09-08 | — | modern; ilgisiz |
EKSİK künyeler (Diadokh): lisimakhos (Trakya-Anadolu, ~MÖ 306/301-281), kassandros/antipatrid Makedonya (~MÖ 317-297), Demetrios Poliorketes Makedonya'sı (MÖ 294-288), Pyrrhos Makedonya'sı (MÖ 288-285, MÖ 274-272) — `grep` ile devletler.js'te bu adlarda id bulunamadı. Mevcut Diadokh künyeleri: selevkos (−0311 → −0062), ptolemai (−0322-06-10 → −0029-08-01), antigonos (−0305 → −0300), antigonos-krallik (−0305 → −0282), epir (−0369 → −0230).

## b) f/t ve evreler
| Uç | Atlas | Kaynak 1 | Kaynak 2 | Hüküm | Önerilen |
|---|---|---|---|---|---|
| makedonya-krallik f | −0699-01-01 (yüzyıl) | Treccani 'Macedonia' (okundu): «Dominata dal 7° sec. a.C. dalla dinastia degli Argeadi» | Enciclopedia Italiana 'Perdicca I' (künye alıntısı, yeniden okunmadı) | Yalnız yüzyıl bilgisi var; `-0699-01-01` yıl uydurmaz mı? Kural: "yıl bilinmiyorsa yıl yazılmaz." Künye kesinlik alanında yüzyıl yazıyor; kabul edilebilir ama haritada gün-hassas gösterilmemeli. | `kesinlik:"yuzyil"` doğrulanmalı; f değişmez. |
| makedonya-krallik t | −0167-01-01 | Treccani 'Macedonia' (okundu): «la disfatta dei Macedoni a Pidna provocò la fine del Regno di Macedonia» | atlas olaylar_antik_akdeniz.js:50 Pydna −0167-06-22 'gun' (Livius, Aemilius Paullus) | Pydna = MÖ 168 = astronomik −0167 ✓. Gün mevcut kronolojide var (22 Haziran), künye yıl düzeyinde. | Künye f/t değişmeden kalabilir; t'yi −0167-06-22'ye çekmek (kesinlik gun) tutarlılığı artırır. İki bağımsız akademik gün kaynağı bu turda okunmadı: Livius ve Treccani. |
| makedonya-krallik t / antigonid f çakışma | −0167 / −0275 | Treccani Ef. Italiana «Dopo 7 anni, il 276, re di Macedonia era suo figlio, Antigono Gonata» (künye alıntısı) | Treccani 'Macedonia' (okundu): Antigonos Gonatas'ı Yunanistan odaklı krallar arasında sayıyor, tarih vermiyor | f=MÖ 276 (−0275) tutarlı; ama makedonya-krallik t'si aynı hanedanın devamını (antigonid) da kapsıyor ⇒ **künye aşımı**. CLAUDE.md sınıflandırması: aynı polity (Makedonya krallığı) sürüyor. | İKİ SEÇENEK (biri seçilmeli): (A) makedonya-krallik t=−0275-01-01 (Argead + Antigonid öncesi dönem), antigonid ayrı kalır; (B) antigonid-makedonya silinir, krallık künyesi −0167'ye dek tek künye. Haritada s: bugün (A)'ya göre kurulu (krallik −275'te bitiyor), yani (A) en az değişimle uyar. |
| iskender-imparatorlugu f | −0335-01-01 | TDV 'İskender' (okundu): «Babasının 336'da bir suikast sonucu öldürülmesinden sonra kral ilân edildi.» | Treccani Alessandro Magno (künye alıntısı) «salì sul trono nell'estate del 336» | MÖ 336 = −0335 ✓ (yıl). Ama künye adı "imparatorluk" ve f Makedonya tahtına çıkışı; imparatorluk fiilen MÖ 334 (Granikos) / MÖ 333 (Issos) ile başlar. | f=−0335 kalsın (hükümdar bazlı künye), haritada s: −0330'dan başlıyor: Anadolu −0333 (Granikos), Suriye/Mısır −0332/−0331, Susa −0330 haritada görünmüyor (aşağıda d). |
| iskender-imparatorlugu t | −0322-06-10 | TDV 'İskender': «ö. m.ö. 323» (yıl; gün gövdede yok) | Treccani (künye): 13 Haziran 323; Oxford Companion (Bosworth, künye): 10 Haziran | Gün çelişkisi künyede beyanlı (Treccani 13, atlas 10/11). MÖ 323 = −0322 ✓. | Değişme. |

Not: TDV'nin Diadokh paylaşımı hakkında cümlesi YOK (okundu) — Diadokh bölünmesi için TDV'de ayrı madde/başka kaynak gerekir (Selevkos/Batlamyus maddeleri ayrı).

## c) Kronoloji
Var olan (Değişmez 2 evreninde):
- kronoloji_sinir_akdeniz3_1024.js:6 −0412 Archelaos Pella başkent; :7 −0699 Perdikkas, Argead.
- kronoloji_sinir_antik3_1024.js:26 −0358 II. Filippos tahta; :29 −0275 Antigonos Gonatas; :30 −0196 Kynoskephalai (toprak-kayip); :31 −0167-01-01 Pydna.
- olaylar_antik_akdeniz.js: :117 −0335 İskender tahta; :118-119 Korint Birliği/Khaironeia (−0337); :111/110 Lamia/Krannon (−0322/−0321-09-05); :112-114 Hydaspes/Hyphasis/Baktria; :115 Batı Anadolu −0333; :104 Diadokhoslar Barışı −0310; :102 Salamis −0305; :93 Lysimakhos −0284; :87 Antigonos Gonatas −0275; :50 Pydna −0167-06-22; :44 Andriskos −0147; :43 Roma eyaleti −0145; :48 dört merides −0166; :58 Kynoskephalai −0196.
- Çift kayıt: Pydna hem kronoloji_sinir_antik3:31 (−0167-01-01, yıl) hem olaylar_antik_akdeniz:50 (−0167-06-22, gün) — tutarsız gün hassasiyeti; yıl düzeyindeki kaldırılmalı.
Evren DIŞI (devletler.js içinde künye kronolojisi): iskender-imparatorlugu satır 19431-19439 (Granikos, Issos, Gaugamela, Persepolis, Hydaspes, Susa, ölüm); makedonya-krallik satır 21008-21015.
BULUNAMAYAN (Değişmez 2 evreninde grep ile yok): Granikos, Issos, Gaugamela, Persepolis'in yakılışı, Susa'da toplu evlilik, **İskender'in Babil'de ölümü (−0322-06-10)**, İskenderiye'nin kuruluşu, Triparadeisos, Ipsos (olaylar_antik_akdeniz'de "Ipsos" anahtarıyla bulunamadı; MÖ 301 Lysimakhos hazinesi var), Korupedion (:92'de yalnız Philetairos cümlesi).

Önerilen maddeler (künye kronolojisindeki Iranica/Briant alıntıları yeniden kullanılabilir; Iranica bu makineden 403 verdi, bu yüzden okunmadı — künye metnine dayanıyor):
```
{ t:"-0333-05-01", kesinlik:"ay", devlet:"iskender-imparatorlugu", taraflar:["iskender-imparatorlugu","ahamenis"], b:"Granikos: İskender Pers satraplarını yendi (Mayıs MÖ 334)", tur:"savas", yer_id:"Sart", kaynak:"Iranica 'Alexander the Great' (Briant) — künye alıntısı «in May, 334»; TDV iskender (okundu): «Pers ordularıyla ilk defa Grenikos'ta (Biga çayı) karşılaştı ve onları yendi»" },
{ t:"-0332-11-05", ... } // künyede -0332-11 ay; "gün yalnız güvensiz kaynakta" beyanıyla yıla indirilmiş; madde -0332-11-01 kesinlik ay
{ t:"-0330-10-01", kesinlik:"gun", devlet:"iskender-imparatorlugu", taraflar:["iskender-imparatorlugu","ahamenis"], b:"Gaugamela: İskender III. Darius'u yendi; Pers imparatorluğunun çöküşü", tur:"savas", yer_id:"Babil", kaynak:"Iranica 'Alexander the Great' (Briant): «On 1 October 331…» (künye alıntısı); TDV iskender (okundu): «Gaugamela ovasında Dârâ ile tekrar karşılaştıysa…»" },
{ t:"-0329-01-01", kesinlik:"ay", devlet:"iskender-imparatorlugu", b:"Persepolis'in ele geçirilip yakılması (ilkbahar MÖ 330) — Pers merkezinin sonu", tur:"toprak-kazanc", yer_id:"Persepolis", kaynak:"Iranica (Briant) «Persepolis, which he burnt down in the spring of 330»" },
{ t:"-0322-06-10", kesinlik:"gun", devlet:"iskender-imparatorlugu", taraflar:["iskender-imparatorlugu","ptolemai","selevkos"], b:"İskender Babil'de öldü; imparatorluk Diadokhlara bölünme sürecine girdi", tur:"son", yer_id:"Babil", kaynak:"Oxford Companion to Classical Civilization (Bosworth): «died (10 June 323)»; Treccani 13 Haziran (çelişki künye ic_not'ta); TDV iskender: «ö. m.ö. 323»" }
```
Eksik (kaynak okunmadı, yalnız önerilen konu): Triparadeisos paylaşımı (MÖ 321), Ipsos (MÖ 301), Korupedion (MÖ 281), Kassandros'un ölümü (MÖ 297), Galatlar'ın Makedonya'ya girişi (MÖ 279), Keraunos'un ölümü — her biri iki akademik kaynakla (Cambridge Ancient History vol.7.1 / Errington / Hammond-Walbank) doldurulmalı.

## d) Harita uyumu
Açık kırılma sayısı: 0 (3+2+4 kırılma, hiçbiri açık değil) — ama kapsam sorunu var:
| yıl | sahip dağılımı (Doğu Akdeniz–Orta Asya kutusu) | yorum |
|---|---|---|
| −325 | iskender-imparatorlugu 4 (Hemedan, Uruk, Babil, Pasargad), `__BOSLUK__` 5 (Eski Van, Şam, Kudüs, Cerablus, Sart), yahya-donemleri 1 | İskender'in Anadolu, Suriye, Mısır, Susa, Persepolis, Ekbatana (Hemedan hariç), Baktriya, Sogdiana, Pencap şehirleri hiçbir yerde İskender'in değil |
| −250 | antigonid-makedonya 2 (Pella, Aigai) + Korint, Sparta, Akhaia Birliği (tek nokta) | Antigonid Makedonya'nın gerçek alanı (Makedonya + Tesalya + Korint-Argos çevresi + Demetrias/Khalkis) haritada iki noktaya indirgenmiş; Korint −0242'de Akhaia'ya geçiş ayrı |
Öneri (yerleşim sahipliği, tarihleri kaynakla belirlenecek):
1. Susa (−0330 bit) ve Persepolis (−0329 bit) — Ahamenis → iskender-imparatorlugu devri eksik; kaynak: Iranica (Briant) «Persepolis… spring of 330».
2. Anadolu: Sart (şu an `__BOSLUK__`), Efes, Miletos, Halikarnassos (olaylar_antik_akdeniz:115 −0333 madde var) → İskender −0333/−0332; sonra Antigonos/Lysimakhos/Selevkos.
3. Suriye-Mısır: Sûr (Tyre, kuşatma MÖ 332), Gaza (MÖ 332), Memfis, İskenderiye (MÖ 331) → İskender; −0322-06'da ptolemai künyesi zaten başlıyor (f −0322-06-10).
4. Doğu: Baktra (Belh), Marakanda (Semerkant), Taksila, Hydaspes çevresi → olaylar_antik_akdeniz:112-114 maddeleri zaten var; s: yok.
5. Makedonya anayurdu: İskender döneminde (−0335 → −0322) Pella/Aigai makedonya-krallik; iskender künyesi yerleşimlerde yalnız doğu.
6. Krallik-arası (MÖ 310 → MÖ 276): yeni künye (lisimakhos, antipatrid) ya da krallik künyesi devamı ve Pella/Aigai `__BOSLUK__` (beyanlı); kaynak: Treccani Enc. Italiana 'Macedonia'.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:21006` makedonya-krallik: t'yi `-0275-01-01` yap (A seçeneği), `ic_not`: "antigonid-makedonya ardıl künye; aynı polity — hanedan değişimi (künye aşımı sınıfı: ardıl)". Antigonid f/t değişmez. Karar Emre'nin: (B) seçeneği de mümkün.
2. `data/kronoloji_sinir_antik3_1024.js:31` Pydna maddesini sil (olaylar_antik_akdeniz.js:50 gün-hassas kayıt kalsın) ya da gün ekle (−0167-06-22).
3. Yeni dosyada (öneri: `data/kronoloji_sinir_iskender_1103.js`): yukarıdaki 5 madde + Triparadeisos/Ipsos/Korupedion (kaynak okunmadan yazılmaz).
4. `data/yerlesimler_mo_zincir.js`: Susa (satır 15) ve Persepolis (17) s: dizilerine `{f:"−0329…",t:"−0322-06-10",d:"iskender-imparatorlugu"}` ardılı; Sart'ı `__BOSLUK__` → `iskender-imparatorlugu` (−0333 Granikos sonrası, Treccani/TDV 'Sardes' kaynağıyla).
5. `devletler.js` iskender-imparatorlugu: `kaynak` alanına TDV 'İskender' okunan cümleleri eklendi (zaten var); "Diadokh paylaşımı" için TDV'de cümle yok — bu alan için başka kaynak (CAH 7.1).

## Erişilemeyen kaynaklar
- Encyclopaedia Iranica, «Alexander the Great» (P. Briant) — https://iranicaonline.org/articles/alexander-the-great-356-23-bc/ — 403. Soru: Granikos Mayıs 334, Issos Kasım 333, Gaugamela 1 Ekim 331, Persepolis ilkbahar 330 tarihleri (künye alıntıları yeniden okunamadı).
- Cambridge Ancient History vol.7 part 1 (2nd ed., 1984) ch. on Antigonos Gonatas / Makedonya — Soru: Antigonos Gonatas'ın Makedonya tahtını kesin aldığı yıl (MÖ 277 mi 276 mı?) ve kral-arası dönemin sınırları.
- Hammond & Walbank, *A History of Macedonia* vol.3 (OUP 1988) — Soru: Alexander IV'ün ölümü yılı (MÖ 310/309) ve Kassandros hanedanının sonu.
- Livius.org 'Pydna' ve Plutarkhos *Aemilius Paullus* 17 — Pydna gününü (22 Haziran 168 MÖ) ikinci bağımsız kaynakla doğrulamak için (ay tutulması 21 Haziran).
