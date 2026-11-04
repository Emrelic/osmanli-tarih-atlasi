# 70 · Ptolemaios (Lagid) Krallığı — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 2026-11-04 (ölçer `top100_olc.py yeni-babil medya ptolemai`; yerleşim okuması `y68b/y68c.py`)

## Özet
- Künye 1: `ptolemai` ("Ptolemai (Lagid) Krallığı", devletler.js:19116). `--ara ptolem` → yalnız bu; `batlam` → boş (TDV'de Batlamyus yalnız astronom). Mükerrer yok. İlişkili ama ayrı polity: `kyrene` (-0630 → -0095, Ptolemaios hâkimiyeti dönemiyle örtüşüyor), `kush-krallik`, `selevkos`.
- Ölçer: kırılma günü 2, **açık 0**, yalnız otomatik "dönem ucu" maddesiyle kapanan 1 (-0322-06-10). Uyarı yok.
- En ağır 3 bulgu:
  1. **Haritada yalnız 1 yerleşim (İskenderiye)** 293 yıl boyunca. Memphis `s:` sonu -0401'de, Uksur/Asvan/Kahire/Kirene (Beyzâ)/Kıbrıs şehirleri/Gazze/Sûr/Sayda/Kudüs hiç Ptolemaios taşımıyor. Mısır iç kısmı petek emilmesiyle "Ptolemaios" boyanıyor olabilir (ölçülemedi); Koile-Suriye (301-200), Kıbrıs, Kirene ise boş. Kudüs -0585 → 1253 `__BOSLUK__`.
  2. **f -0322-06-10:** gün İskender'in ölümü gününe (künye iskender-imparatorlugu t) eşitlenmiş; Babil taksimi (Diodoros 18.3.1) birkaç gün sonradır ve Ptolemaios Mısır'a fiilen sonbaharda girdi. Atlas `kesinlik.f:"ay"` + beyan taşıyor (dürüst); fakat harita f'yi **tam gün** gibi Memphis/İskenderiye'ye uyguluyor ve künye `tur:"krallik"` 323-305 arası satraplığı da kapsıyor (beyanlı).
  3. **t -0029-08-01 günü kaynakta okunmadı:** Dio 51.19.6 günü vermiyor (okundu: «The day on which Alexandria had been captured they declared a lucky day»); gün Skeat/Orosius/Fasti dayanağına bağlı (erişilemedi). Yıl çift teyitli (Dio 51.17 + Treccani).

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| ptolemai | Ptolemai (Lagid) Krallığı | -0322-06-10 | -0029-08-01 | TAMAM; satraplık 323-305 dahil |
| iskender-imparatorlugu | Büyük İskender İmp. | -0335 | -0322-06-10 | öncül (Mısır 332 → ahamenis-misir-2 t -0331) |
| ahamenis-misir-2 | Ahamenis Mısır'ı (31. Hanedan) | -0342 | -0331 | öncül |
| kyrene | Kyrene Devleti | -0630 | -0095 | Kyrenaika Ptolemaios hâkimiyetinde 322/1-96 (Apion); **polity çakışması** — mükerrer değil, iç içe |
| selevkos | Selevkos | -0311 | -0062 | komşu |
| kush-krallik | Kuş | -0749 | 0349 | komşu |
Eksik parça: yok. (Kıbrıs, Kirene, Koile-Suriye, Ege kıyısı Ptolemaios hâkimiyeti künye değil `s:` ile ifade edilir; **hiç `s:` yok.**)

## b) f/t ve evreler
**f (-0322-06-10, ay)**
- Atlas: Ptolemaios satrap, Babil taksimi MÖ 323 (günü İskender'in ölümü).
- Kaynak 1: Treccani, *Enciclopedia Italiana*, "Egitto" (okundu) — «il generale Tolomeo figlio di Lago, riuscì a farsi assegnare come satrapia l'Egitto» (323). Kaynak 2: Livius "Ptolemy I Soter" (yol gösterici; okundu) — Mısır valiliği Babil'deki taksimde, İskender'in 11 Haziran 323 ölümünün sonrasında. Kaynak 3 (atlas; bu turda açılmadı): Diodoros 18.3.1 (Perseus yönlendirme/404).
- Hüküm: yıl çift teyit (323). Gün **İskender'in ölüm günüdür, taksim günü değildir**; atlas beyanı doğru. Ayrıca İskender'in ölüm günü kaynaklarda 10/11 Haziran (Livius 11 Haziran, atlas künyesi 10 Haziran): ±1 gün; `iskender-imparatorlugu` künyesi ile hizalama zaten tek yönlü.
- Önerilen: f `-0322-06-10` kalsın, `kesinlik.f:"ay"` kalsın; `ic_not_f`'ye "Mısır'a fiilen giriş ve Kleomenes'in öldürülmesi 322 civarı (kaynak okunmadı)". Hiçbir değişiklik gerekmeyebilir.
**Kral unvanı**: Treccani (okundu): «assunse ufficialmente il titolo di re» 305; ayrıca «counted sovereignty from 324-23». Atlasın "MÖ 305/304" (-0304-01-01) maddesi doğru yıl (MÖ 305 → -0304 ✓). Gün (7 Kasım 305?) **okunmadı**; yazma.
**t (-0029-08-01, gün)**
- Kaynak 1: Cassius Dio 51.17.1 «he made Egypt tributary» ve 51.19.6 (Thayer, okundu); Kaynak 2: Treccani «La battaglia d'Azio determinò la fine della dinastia tolemaica» (okundu). Kaynak 3: Livius/WBU-chronology (bu.edu Schäfer 1983 özeti; dayanak değil): son Ptolemaios kraliçesi Kleopatra VII; hanedanın sonu "30".
- Hüküm: yıl 30 doğru (-0029 ✓). Gün 1 Ağustos: Dio günü vermiyor; Skeat (JRS 43, 1953) / Orosius 6.19.16 / Fasti Antiates açılmadı → "yalnız yıl teyitli; gün teyitsiz" ya da `kesinlik.t:"ay"`.
- **Kleopatra'nın ölümü** (12 Ağustos 30? Dio 51.14.1: «No one knows clearly in what way she perished», gün vermiyor) — kralın fiilen ölümü ile "krallığın sonu" (Roma ilhakı: 1 Ağustos / Dio'da Gallus'un prefektliği) ayrımı: `ic_not_t`'ye yazılabilir.
- Alternatif t: Actium (2 Eylül 31) hanedan sonu SAYILMAZ; Roma sonrası Kleopatra hâlâ krallıkta. Atlas doğru.
**Evreler**: Ptolemaios içi evreler (satraplık 323-305 / krallık 305-30) künye bölmesi gerektirmez (beyan var). Kaynak devamı: Treccani 306 Salamis yenilgisi (Ptolemaios Kıbrıs'ı kaybetti: Demetrios). 
Not: Kıbrıs 294 (Demetrios'tan geri) kaynak okunmadı.

## c) Kronoloji (`data/olaylar_antik_misir_nubya.js` ağırlıklı)
Var (kontrol: MÖ→astronomik doğru, hepsi yıl kesinliği):
- :27 Perdikkas Mısır seferi -0320 (MÖ 321) ✓; :28 Kirene -0321 (322/1) ✓; :26 Gazze Muharebesi -0311 (312) ✓; :25 kral ilanı -0304 (305/4) ✓; :24 Ipsos sonrası Koile-Suriye -0300 (301) ✓; :23 III. Ptolemaios (Laodike Savaşı) -0245 (246/5) ✓; :22 Seleukeia Pieria -0218 (219); :21 **Raphia -0216 (MÖ 217; yıl)**; :20 Teb ayrılığı -0204 (205); :19 Paneion -0199 (MÖ 200); :18 Rosetta Kararnamesi **-0195-03-27 gün** (MÖ 196, 27 Mart ✓ Memphis Sinodu); :17 Teb isyanı bastırıldı -0185; :16 VI. Suriye Savaşı -0168 (169); :14 Roma Kıbrıs'ı ilhak -0057 (MÖ 58); :13 Gabinius -0054 (MÖ 55); :12 İskenderiye Savaşı -0046 (48-47); :11 Antonius armağanları -0035; :10 İskenderiye Bağışları -0033; :9 Aktion **-0030-09-02 gün** ✓ (Dio 51.1: 2 Eylül); :8 Octavianus İskenderiye'ye girdi **-0029-08-01 gün** (ölçerin t kapanışı); :7 Gallus -0028.
- olaylar_antik_akdeniz.js:31 Apion vasiyeti Kirene -0095; :24 Kyrene Roma eyaleti -0073; :102 Salamis -0305 (Demetrios, MÖ 306); :104 Diadokhos barışı -0310 (311).
- olaylar_antik_misir_nubya.js:30 İskender Mısır'a girdi -0331 (MÖ 332); :29 Siwa -0330.
- olaylar_arkeoloji_zincir.js:156, :983 `-0322-06-10`: "dönem ucu kaydı" (otomatik; gerçek olay sayılmaz — açıklama güvenli).
Eksik/öneri:
1. **Raphia gün:** Treccani (okundu): «Raphia (22 June)» → `-0216-06-22` (MÖ 217, Jülyen; çeviri P-D/Polybius 5.82-86 açılmadı). Mevcut -0216-01-01 yıl; gün için ikinci kaynak (Polybius 5.82-86, Perseus) gerekir.
2. **Paneion** MÖ 200 vs 198 (kaynak çelişkisi, Schäfer/bu.edu 200 okundu; Treccani Panion'u bulmadı): mevcut -0199 yıl; ikinci akademik kaynak yok → beyan.
3. **Ptolemaios'un Mısır'a fiilen girişi / Kleomenes** (322) maddesi yok.
4. **Kıbrıs'ın geri alınışı 294** ve **Ege hâkimiyeti** (Chremonides, Kos-Andros) maddesi yok; Kıbrıs 306 Salamis kaybı var.
5. **Kleopatra VII ölümü** (Ağustos 30): maddesi yok; Dio 51.14.1 gün vermiyor → "gün bilinmiyor: yalnız yıl -0029" ile yazılabilir.
6. **Pharos/Müze Kütüphanesi vs.** kültürel maddeler kapsam dışı.
Evren dışı: künye `kronoloji:[...]` maddeleri var.

## d) Harita uyumu
- Ölçer: kırılma günü 2 → açık 0 (1 otomatik). İskenderiye -0322-06-10 → -0029-08-01 tek nokta (en geniş an 1 yerleşim; ölçerin "yıl:yerleşim" satırı her yıl 1).
- Hangi şehirler `s:` gerektirir (Ptolemaios hâkimiyeti, kaynak okunmuş olanlar):
| Aralık | Yerleşim | Durum / öneri |
|---|---|---|
| -0322 → -0029 | Memphis (`kur -0524, bit -0401`) | Ptolemaios (Treccani/Muhs: «initially ruled from Memphis») — atlas zinciri -0401'de bitiyor; Memphis sonrası sahip yok. Öneri: Memphis `bit`'ini uzat, `s:` ptolemai (kaynak: Treccani/Muhs). Zincirde -0331..-0322 İskender (Memphis: iskender -0331'de; `ahamenis-misir-2` t -0331) |
| -0300 → -0199 | Gazze, Kudüs (şimdi BOSLUK -0585..1253), Sûr, Sayda | Koile-Suriye 301-200 (Treccani 301 «regained ... Coele-Syria»; Paneion 200 bu.edu özeti). Gazze/Sûr/Sayda için hiç `s:` yok → ölçüm `y68c`; öneri `ptolemai` -0300..-0199 + `selevkos` sonrası |
| -0321 → -0095 | Beyzâ (Kirene) | Kyrene künyesi `kyrene` -0630..-0095; Ptolemaios hâkimiyeti 322/1 + Apion (117-96) → hangi künye? **Karar:** `kyrene` polity sürüyorsa künye genişletme; Ptolemaios bağımlılığı ayrı beyan |
| ~-0294 → -0057 | Kıbrıs şehirleri (Salamis, Baf, Kition) | Kıbrıs 294-58 Ptolemaios (olaylar:14 ilhak -0057); `s:` yok. Ada atlasta var mı: "Kulluk (Salamis)" Atina Salamis'i; Kıbrıs Salamis Magosa |
| -0322 → -0029 | Uksur, Asvan, Kahire | Yukarı Mısır Teb isyanı -0204..-0185 (olaylar:20,17); kaynak: Treccani Rafia sonrası «insurrezioni»; Teb/Uksur `s:` sorunu: ölçer yalnız `ptolemai` künyesine yerleşim sayar |
- Boşluk merdiveni: Memphis/Teb ptolemai için kaynak zinciri hazır (Treccani + Dio); atlas kaydı kaynağa dayanmıyor. Mısır'ın tamamı İskenderiye peteğine emiliyorsa kıyı/Nil çizgileri bozulur; motor çıktısı bu turda ölçülemedi (**ölçülemedi ≠ temiz**).
- `ptolemai` ile `iskender-imparatorlugu` aynı gün -0322-06-10: Babil/Uruk `-0322-06-10 → -0310` `__BOSLUK__` (Diadokh dönemi; Selevkos f -0310) — Ptolemaios dosyası değil, bilgi için.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js:19116` `ptolemai`: `ic_not_t`: "Dio 51.17.1 + Treccani 'Egitto': yıl çift teyit; 1 Ağustos günü Dio'da yok (51.19.6 yalnız 'lucky day'); Skeat/Orosius/Fasti açılmadı → gün teyitsiz" (kesinlik.t "gun" → "ay"). `ic_not_f`'ye: "satraplık Treccani 323; Mısır'a fiilen giriş kaynak okunmadı".
2. `data/olaylar_antik_misir_nubya.js:21` Raphia: `t:"-0216-06-22"`, `kesinlik:"gun"` ancak Polybius 5.82-86/Perseus ile ikinci kaynak okunursa; şimdilik yıl kalır, gün Treccani'den tek kaynak.
3. Memphis `data/yerlesimler_mo_zincir.js:18`: `bit:-0401`/`s:` sonrası Ptolemaios (Treccani «initially ruled from Memphis», Muhs) ve Roma 30 sonrası; zincir devamı HAVVA koşusu gerektirir (veri → harita).
4. Koile-Suriye/Kıbrıs/Kirene yerleşimleri için `s:` yazımı: kaynakları önce zincir (TDV yetmez; Treccani + Polybius 16.18, Livius) → ayrı iş paketi; Kudüs `__BOSLUK__` işi 68 ve Selevkos dosyalarıyla ortak.
5. Mükerrer: yok. `kyrene` iç içe polity — Kirene Ptolemaios altında sayılacaksa `kyrene` f/t'ne dokunma, Ptolemaios `s:` kullan.

## Erişilemeyen kaynaklar
- Diodoros 18.3.1 (Perseus) — hopper 302 yönlendirme; Thayer 404. Soru: Babil taksimi metninin Ptolemaios'a verdiği alan (Mısır, Libya, Arabistan) ve günü.
- Hölbl, G., *A History of the Ptolemaic Empire* (Routledge 2001) — soru: 305 kral ilan tarihi (Kasım 305?), 323 vs 322'de Mısır'a giriş, 7 Kasım 305 doğrulaması.
- Skeat, T. C., JRS 43 (1953) 98-100 (JSTOR) + Orosius 6.19.16 — soru: İskenderiye'nin alınış günü (1 Ağustos) ve Jülyen/Roma takvimi karşılığı.
- Polybios 5.82-86 (Raphia, Perseus/Thayer) — soru: 22 Haziran 217 günü kaynakta açık mı.
- Polybios 16.18-19 / Josephus *Ant.* 12.129-153 / Grainger *The Syrian Wars* (Brill 2010) — soru: Paneion 200 mü 198 mi; Koile-Suriye'nin Ptolemaios'tan çıkışı.
- Britannica "Ptolemy I Soter / Ptolemaic dynasty" — 403.
- Treccani Egitto yalnız 100000-char dilimlerle okundu; MÖ 294 Kıbrıs, MÖ 58 Kıbrıs'ın gün/yıl sorusu için ilgili bölüm (≈ s. 572-575) tam taranmadı.
