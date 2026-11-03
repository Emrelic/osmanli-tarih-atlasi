# 66 · Mısır Eski Krallık (3.-6. Hanedan) — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb (yönerge şablonundan; ben `git` koşmadım), 2026-11-04. Ölçer: `top100_olc.py misir-eski-krallik`; yerleşim sahipliği için kendi `sahip65.py` betiğim.

## Özet
- Künye 1 (`misir-eski-krallik`, -2685-01-01 → -2180-01-01) + bitişik 2 künye (`misir-erken-hanedan` öncesi, 1. Ara Dönem sonrası: `herakleopolis`, `tebai-11-hanedan`). Eksik evre: 7.-8. Hanedan (Memfis) yok ⇒ -2180 ile -2159 (Herakleopolis f) arası 21 yıllık boşluk.
- **Yerleşim 0 ⇒ Eski Krallık haritada GÖRÜNMÜYOR.** Mısır'ın bütün Firavunlar çağı boş: Memphis'in ilk `s:`'si -0524 (Ahameniş), Giza/Abydos/Herakleopolis/Sais/Bubastis/Tanis `s:[]` `veri-yok`. Kırılma 0 ⇒ açık kırılma 0 (anlamsız: nokta yok).
- En ağır 3 bulgu: (1) **Aynı künyede iki-üç mutlak kronoloji karışık**: künye f/t Shaw 2000 (MÖ 2686/2181) ama künye `kronoloji:` hükümdar maddeleri Met/Britannica sayımı (Djoser 2649, Hufu 2551, 6. Hanedan 2323, II. Pepi 2246–~2152); evren maddelerinde Treccani 1932 (Djoser 2700) ve Shaw (Hufu 2589-2566) bir arada. (2) **Künye içi çelişki:** II. Pepi saltanatı MÖ ~2246-2152 yazılı, künye t = MÖ 2181 (Shaw'da Pepi II 2184'te ölür; Met sayımında 2152). (3) Hufu maddesi (olaylar_antik_misir_nubya.js:77) `t:-2559` "MÖ 2560" yazar, kendi kaynağı Shaw "Hufu MÖ 2589-2566" der — ne bu ne öbürü.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| misir-eski-krallik | Misir Eski Krallik (3.-6. Hanedan) | -2685-01-01 (MÖ 2686) | -2180-01-01 (MÖ 2181) | var (devletler.js:19008); BOYALAR'da var (renkler.py:296) |
| misir-erken-hanedan | 1.-2. Hanedan (bitişik, bu iş dışı) | -3125-01-01 (MÖ 3126, Dee 2013) | -2685-01-01 | var (devletler.js:19002 civarı); öncül |
| herakleopolis | 9.-10. Hanedan | -2159-01-01 (MÖ 2160) | -2054-01-01 | var; ardıl (kuzey) |
| tebai-11-hanedan | 11. Hanedan Tebai | -2124-01-01 | -2054-01-01 | var; ardıl (güney) |
**EKSİK:** 7.-8. Hanedan (Memfis; Shaw 2000: Eski Krallık 2686-2160'a 7.-8. dahil, 1. Ara Dönem 2160'ta başlar). Atlas künyesi "3.-6." adıyla kesilmiş ⇒ MÖ 2181…2160 (-2180…-2159) hiçbir künyede yok. `ozet` bunu kısmen beyan ediyor ("7.-8. Hanedan dahil").

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | öneri |
|---|---|---|---|---|---|
| f -2685 | MÖ 2686 | Shaw (ed.) *Oxford History of Ancient Egypt* 2000 kronolojisi; Poznań Arkeoloji Müzesi kronoloji sayfası (Shaw tabanlı): «3rd Dynasty 2686–2613», «Old Kingdom 2686–2160» (nowa.muzarp.poznan.pl/en/chronology, okundu) | TDV *Mısır*: **Birinci Ara Dönem «m.ö. 2270-2100»** ve Orta Krallık «m.ö. 2065-1785» (eski sayım ≈ +90 yıl); *Piramit* dönemi «milâttan önce 2650'ye doğru» (basamaklı piramit) | Shaw okulu içinde tutarlı. Kaynak 2 başka okul: TDV Eski Krallık sonunu ~2270'e çeker. Bağımsız ikinci okul olan Hornung–Krauss–Warburton 2006 **erişilemedi**. | Shaw 2000 tek okul olarak kalsın; künye `ic_not_f`'ye "okul: Shaw 2000 (Poznań/AIC aynı tabloyu verir — bağımsız değil); TDV sayımı farklı (FIP 2270-2100)" beyanı. Değeri değiştirme. |
| t -2180 | MÖ 2181 | Shaw 2000 / AIC (6. Hanedan sonu 2181) ; Poznań «6th Dynasty 2345–2181» | Poznań Shaw tablosu: Eski Krallık **2160**'a dek (7.-8. dahil); TDV FIP başı 2270 | Künye adı "3.-6." ⇒ t=2181 Shaw'a uygun, ama sonraki künye 2160'ta başlıyor ⇒ 21 yıl delik (bkz. a). | Seçenek A (tavsiye): ad "3.-8. Hanedan", `t:"-2159-01-01"` (Shaw: Eski Krallık 2686-2160) — Herakleopolis f ile uç uca; seçenek B: boşluğu `ic_not_t`'de beyan. CLAUDE.md "iki kaynaklı uç arasındaki boşluk zorla kapatılmaz" ilkesi hicrî yılı içindir; burada iki künye aynı okulun (Shaw) iki tablo satırı olduğundan kapatmak meşru. Harita etkisi yok (nokta 0). |
| Evre 4. Hanedan başı (Sneferu) | yok (künye kronolojisinde -2574 Sneferu, Met) | Poznań/Shaw: «4th Dynasty 2613–2494» | Met (atlas dosyasında alıntılı): Sneferu 2575 | **Okullar karışık**: Shaw'da Sneferu 2613'te başlar (⇒ -2612) | bkz. c |
| Evre 5. Hanedan başı | -2464 (MÖ ~2465) | Poznań/Shaw: «5th Dynasty 2494–2345» ⇒ -2493 | Met: 2465 | 29 yıl fark; künye f/t Shaw ⇒ Shaw dizisi kullanılmalı | -2493 |
| Evre 6. Hanedan başı | -2322 (MÖ ~2323) | Poznań/Shaw: «6th Dynasty 2345–2181» ⇒ -2344 | Met: 2323 | 22 yıl fark | -2344 |

MÖ→astronomik çevirisi (n → -(n-1)) künye f/t'de ve künye kronoloji satırlarında **doğru** uygulanmış (-2685=MÖ 2686, -2180=MÖ 2181, -2648=MÖ 2649, -2574=MÖ 2575, -2550=MÖ 2551, -2464=MÖ 2465, -2322=MÖ 2323, -2254=MÖ 2255, -2245=MÖ 2246). Sorun çeviri değil, **kronoloji okulu karışması**.

Mutlak kronoloji tutarlılığı (istenen özel denetim):
| kayıt | yer | tarih | okul |
|---|---|---|---|
| Künye f/t | devletler.js:19008 | MÖ 2686 / 2181 | Shaw 2000 |
| Künye: Djoser | devletler.js (kronoloji) | -2648 = MÖ 2649 ("MÖ 2649-2630") | **Met** |
| Künye: Sneferu / Hufu | " | -2574 (MÖ 2575) / -2550 (MÖ 2551) | **Met** |
| Künye: 5. / 6. Hanedan başı | " | -2464 / -2322 | **Met** |
| Künye: I. Merenre / II. Pepi | " | -2254 / -2245 ("MÖ ~2246-2152") | **Met** (Pepi sonu 2152 > künye t 2181 ⇒ künye içi çelişki) |
| Evren: "Cöser tahta çıktı" | olaylar_antik_misir_nubya.js:78 | -2685 (MÖ 2686 "Shaw") | Shaw'da MÖ 2686 **3. Hanedan başı**; Djoser'in kendisi Shaw'da ≈2667 ⇒ madde "Cöser tahta çıktı" diyor ama hanedan başlangıcı günü kullanıyor |
| Evren: Djoser | kronoloji_sinir_antik3_1024.js:32 | -2699 (MÖ 2700 "Treccani" 1932) | Treccani/Enciclopedia Italiana |
| Evren: Hufu piramidi | olaylar_antik_misir_nubya.js:77 | -2559 (MÖ 2560) | "Shaw (Hufu MÖ 2589-2566)" alıntılıyor ⇒ tarih kaynağıyla uyuşmuyor |
| Evren: 1. Ara Dönem | olaylar_antik_misir_nubya.js:74 | -2180 | Shaw |
| TDV | islamansiklopedisi.org.tr/misir | FIP 2270-2100 | eski sayım |
Hüküm: "Djoser tahta çıkışı" üç ayrı yerde -2699, -2685, -2648 (51 yıl aralık) — aynı olay, üç okul. Hufu üç ayrı yerde -2588?(Shaw), -2559, -2550. Atlas içinde Eski Krallık için **tek bir okul seçilmeli**. Önerilen: Shaw 2000 (künye f/t zaten Shaw; bağlı Orta Krallık künyesi Shaw/AIC; `kronoloji_sinir_antik3_1024.js` TDV/Treccani kayıtları "kronoloji sistemi" beyanı taşıyor ama aynı künyeye bağlı). Not: Shaw 2000'in hükümdar-bazlı yıllarını (Djoser 2667-2648, Sneferu 2613-2589, Hufu 2589-2566, II. Pepi 2278-2184) kitaptan **doğrulayamadım** — arama yalnız hanedan sınırlarını (Poznań tablosu) ve Hufu 2589-2566'yı (atlasın kendi kaynak alıntısı) verdi; yıllar "Shaw (hatırlanan), doğrulanmadı" olarak önerilmiştir.

Bitişik not (erken hanedan künyesi, bu işin dışı ama aynı konvansiyon sorunu): künye f -3125 (Dee vd. 2013, radyokarbon-Bayes: Aha MÖ 3126) ve t -2685 (Shaw); aynı künyenin Djer maddesi -2869 (Britannica "MÖ ~2870") — Aha ile ardılı Djer arasında 256 yıl, mümkün değil: **üç okul tek künyede**. Dee 2013 Tablo 1'in 3. Hanedan/Djoser tahmini bakılmadı (`erişilemedi`).

## c) Kronoloji
Var olanlar:
| gün | madde | dosya:satır | hüküm |
|---|---|---|---|
| -2685-01-01 | Eski Krallık başlar (künye `kurulus`) | devletler.js:19009 | f ile uyumlu ✓ |
| -2685-01-01 | Cöser tahta çıktı; Eski Krallık başlar | olaylar_antik_misir_nubya.js:78 | tarih III. Hanedan başı (MÖ 2686, Shaw); metin Djoser'in tahta çıkışı diyor — iki olay |
| -2699-01-01 | Djoser saltanatı başladı (Treccani 2700-2678) | kronoloji_sinir_antik3_1024.js:32 | **ikinci okul**; olaylar:78 ile 14 yıl, künye ile 51 yıl fark |
| -2559-01-01 | Hufu piramidi (MÖ ~2560) | olaylar_antik_misir_nubya.js:77 | kaynak alıntısı Shaw 2589-2566 ile çelişir |
| -2299-01-01 | Weni seferi (I. Pepi dönemi) | olaylar_antik_misir_nubya.js:76 | Shaw: I. Pepi 2321-2287; -2299 (MÖ 2300) ✓ makul |
| -2279-01-01 | Harkhuf Yam seferleri (Merenre/II. Pepi) | olaylar_antik_misir_nubya.js:75 | ✓ makul |
| -2180-01-01 | Eski Krallık çöktü | olaylar_antik_misir_nubya.js:74 | ✓ t ile uyumlu |
| -2648…-2245 | 9 hükümdar/hanedan maddesi (Met/Britannica) | devletler.js:19010-19017 | evren dışı (künye `kronoloji:`) — okul karışık (bkz. b) |
| -3099-01-01 | Narmer birleşme (yuzyil) | olaylar_antik_misir_nubya.js:79 | erken künyeye ait; "MÖ 3100" Shaw/AIC-uyumlu ama erken künye f -3125 (Dee) ile 26 yıl fark; "Atlas'ta Memphis yok" |

Eksik maddeler (öneri; tarihler **Shaw 2000** (doğrulanmadı, hanedan sınırı Poznań tablosu ile doğrulandı), ancak yalnız hanedan sınırları kesin yazılsın):
- `{ odak_yer:["Memphis"], t:"-2612-01-01", kesinlik:"onyil", tur:"siyaset", b:"4. Hanedan başladı (Sneferu; MÖ 2613)", kaynak:"Shaw (ed.) Oxford History of Ancient Egypt 2000, kronoloji tablosu (4. Hanedan 2613-2494); Poznań Arkeoloji Müzesi kronoloji sayfası (Shaw tabanlı) 'Fourth Dynasty 2613–2494'" }`
- 5. Hanedan: `t:"-2493-01-01"` (MÖ 2494); 6. Hanedan: `t:"-2344-01-01"` (MÖ 2345) — aynı kaynak.
- `{ t:"-2159-01-01", ... "Eski Krallık (7.-8. Hanedan) sona erer; Herakleopolis (9.-10.) başlar (MÖ 2160)" }` — künye t -2159 seçilirse.
- Kronoloji okulu beyan maddesi (künyede, evren dışı değil olay değil): `ic_not`: "KRONOLOJİ OKULU: Shaw 2000; künye kronolojisindeki Met tarihleri Shaw'a çevrildi" (tür: `ic_not`).
- Düzeltilecek maddeler: olaylar_antik_misir_nubya.js:78 `b`: "III. Hanedan başladı; Eski Krallık başlar (Cöser, Shaw'da ≈MÖ 2667-2648 saltanat)" ve `odak_yer` bırakılır; ayrı madde "Cöser tahta çıktı" **Shaw'da** `-2666` (hatırlanan; doğrulanmadı) — doğrulanana dek yalnız hanedan başını yaz. kronoloji_sinir_antik3_1024.js:32 Treccani maddesi evrende kalırsa "ikinci okul" beyanı var; ama aynı olay için ayrı gün üretiyor ⇒ kaldırma/`ic_not`'e taşıma önerilir (Değişmez 2: aynı olayın iki farklı günü sınır bağlamında zarar vermez çünkü Eski Krallık sınırı yok).
- Hufu: olaylar:77 `t` Shaw ile uyumlu olsun: `-2588-01-01` (MÖ 2589, saltanat başı; piramit inşası yerine "Hufu tahta çıktı" demek daha kaynaklı) veya kaynağı Met/Britannica ile değiştir; şimdiki hali kendi kaynağıyla çelişiyor.

## d) Harita uyumu
Ölçer: yerleşim 0, kırılma 0, açık 0. **Haritada görünmüyor.** Eski Krallık boyanmaz; Mısır Nil vadisi Eski Krallık süresince boşluk (muhtemelen `dolgu_once1281.js` `__BOSLUK__`/bölge dolgusu veya ham arka plan). Atlasın Memphis noktası (`yerlesimler_mo_zincir.js:18`, 29.8495, 31.2551) -0524'ten önce `s:`'siz.
Önerilen `s:` dönemleri (hepsi `d:"misir-eski-krallik"`, f -2685-01-01, t -2180-01-01 [veya t -2159 seçilirse], `kesinlik:{f:"onyil",t:"onyil"}`, kaynak: Shaw 2000; BEYANLI YAKLAŞIKLIK "Nil vadisi Elefantin'den Delta'ya Eski Krallık egemenliği; Sina madenleri ve Nubya sınırı Elefantin — olaylar_antik_misir_nubya.js:78 d: 'Sina maden ocakları ve Nubya sınırı (Elefantin) devletin kontrolündedir'"):
- **Memphis** (başkent; `yerlesimler_mo_zincir.js:18`), **Giza** (`yerlesimler_once1281_yt_afrika_levant.js:9`, kuruluş Hufu — Memphis'e bağlı), **Abydos** (`...yt_afrika.js:24`; I. Hanedan nekropolü, Eski Krallıkta Tebai yok), **Uksur/Tebai** (Teb Eski Krallıkta küçük kent; Eski Krallık egemenliği Aşağı Nubya sınırına dek: önce "var mıydı" sorusu — Teb 6. Hanedan'a dek önemsiz ama nomos merkezi), **Asvan (Elefantin)** (güney sınırı; `yerlesimler.js` Asvan), **Asyut** (6. Hanedan nomarkları; 1. Ara Dönem'de özerk), **Sais**, **Bubastis**, **Tanis** (Delta; Tanis Eski Krallıkta yok olabilir ⇒ önce `kur:` kontrolü), **Mısır (bölge)** noktası (`yerlesimler_once1281_yt_afrika_levant.js:30`, bölge adlı nokta, `k:0` ⇒ yalnız yer tanıma).
- Sina (madenler) için `Sina güneyi` (`yerlesimler.js`; `m:`/`s:` 1281'den başlıyor).
Bu kadar nokta 3 (Memphis, Giza, Abydos) + güney-kuzey iskeletiyle Voronoi'yi kurar; ancak "noktası olmayan bölge en yakın peteğe emilir" ⇒ Nil vadisi boyunca en az 5-6 nokta olmazsa Mısır komşu bölgeye (Sina/Libya) emilir.
Kırılma günleri (künye f/t) Değişmez 2'yi karşılar: -2685-01-01 (olaylar:78 ve künye `kurulus`), -2180-01-01 (olaylar:74) — nokta yazılınca ilk `kazanç` için madde mevcut.
Not (Değişmez 1): erken hanedan (-3125…-2685) ve Eski Krallık noktaları yazılmazsa Nil vadisi -3125…-1549 arası sahipsiz/delik — Orta/Yeni Krallık künyeleri de bu sorundan etkilenir, bu iş dışı ama aynı kökten.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:19008` (ve paket_05.js yeniden üretilir): künye `kronoloji:` satırlarını Shaw sayımına çevir — Sneferu -2574→-2612, 5. Hanedan -2464→-2493, 6. Hanedan -2322→-2344; Djoser/Hufu/Merenre/II. Pepi satırlarında yıl **Shaw kitabından doğrulanınca** yaz (şimdilik Met sayımı olduğunu `ic_not`ta beyan et). II. Pepi'nin "MÖ ~2246-2152" saltanatı Shaw'da bitiş 2184 olmalı; en az `b` metnindeki "2152" künye t ile çelişmesin.
2. `ic_not_f`/`ic_not_t`: "Shaw 2000; TDV *Mısır* FIP 2270-2100 farklı okul; Treccani 1932 Djoser 2700-2678".
3. `devletler.js`: t `-2180-01-01` → `-2159-01-01` ve ad "3.-8. Hanedan" (seçenek A) **veya** boşluğu `ic_not_t`'de beyan et. `herakleopolis` f -2159 ile uç uca.
4. `olaylar_antik_misir_nubya.js:77` Hufu `t` / metin kaynağıyla uyumlu (-2588 Shaw veya Met -2550). `:78` Cöser/III. Hanedan maddesi iki olaya bölünmesin; `kronoloji_sinir_antik3_1024.js:32` Treccani Djoser maddesi `ic_not`'a.
5. Yerleşim `s:` dönemleri (d bölümü) — **harita için yapılacak asıl iş**; HAVVA koşusu gerekir.
6. Hanedan sınırı maddeleri (c).

## Erişilemeyen kaynaklar
- Art Institute of Chicago, *Ancient Egyptian chronology* (https://www.artic.edu/digital-publications/42/ancient-egyptian-art-at-the-art-institute-of-chicago/192/ancient-egyptian-chronology) — 403. Soru: 6. Hanedan sonu MÖ 2181 ve Eski Krallık sonu 2181/2160.
- Met *Egypt in the Old Kingdom* ve *Chronology of Pharaohs* (metmuseum.org/essays/egypt-in-the-old-kingdom-ca-2649-2150-b-c; metmuseum.org/toah/hd/phar/hd_phar.htm) — 429. Soru: Met'in hangi kronolojiye dayandığı (Eski Krallık 2649-2150) ve II. Pepi sonu 2152.
- Shaw (ed.) 2000, *The Oxford History of Ancient Egypt*, kronoloji tablosu s. 479-83 — baskıya erişilmedi. Soru: Djoser 2667-2648, Sneferu 2613-2589, Hufu 2589-2566, I. Pepi, II. Pepi 2278-2184.
- Hornung, Krauss & Warburton (ed.) 2006, *Ancient Egyptian Chronology* (Brill, HdO 83) — bağımsız ikinci okul; soru: 3. Hanedan başı (2592 civarı mı?) ve Eski Krallık sonu.
- Dee vd. 2013, *Proc. R. Soc. A* 469:20130395, Tablo 1 — soru: 3. Hanedan (Djoser) modeli kaç yıl, yani erken hanedan künyesi f/t aynı okuldan mı.
- Treccani *Egitto* 1932 (https://www.treccani.it/enciclopedia/egitto_(Enciclopedia-Italiana)/) — tarih bölümü 100.000 karakter sonrasında; açılan bölümde Djoser 2700-2678 doğrulanamadı (kaynağın tam alıntısı atlas maddesinde var; ben görmedim).
- TDV *Mısır* ikinci yarısı (offset 100000+) okunmadı; Eski Krallık için TDV'de açık "m.ö." rakamı yalnız FIP 2270-2100 ve Orta Krallık 2065-1785 olarak bulundu.
