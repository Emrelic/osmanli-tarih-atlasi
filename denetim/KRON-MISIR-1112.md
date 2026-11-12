# KRON-MISIR-1112 — Eski Mısır kronolojisi × künye × yerleşim × kaynak denetimi

12 Kasım 2026 · dal `claude/jolly-dewdney-b8cfe9` · yalnız okuma/rapor; veri dosyası DEĞİŞTİRİLMEDİ.
Ölçüt: Antik konvansiyon (CLAUDE.md) — Mısır = **Shaw (ed.), *The Oxford History of Ancient Egypt* (2000)**, pp. 479–483.
Yıl dönüşümü: atlas astronomik yıl, `-0663` = MÖ 664.

## Kaynak notu (neye dayandım)
- Shaw tablosuna **doğrudan erişilemedi** (kitap açılamadı). Shaw'dan türetilen iki tablo okundu:
  ① Poznań Arkeoloji Müzesi "Chronology" (https://nowa.muzarp.poznan.pl/en/chronology — "Shaw 2000'e dayanır, küçük revizyonlarla"; 200 OK, tam okundu);
  ② Wikipedia *Egyptian chronology* Shaw (2000) sütunu (dn. 1-26; yalnız **dolaylı** — tek dayanak değil, ikinci okuma). Dn. 27-31 satırları Wikipedia'da yok.
  ③ Art Institute of Chicago kronoloji sayfası: **çekilemedi (HTTP 403)**; arama özeti Shaw 2000 ile uyumlu (Dn. 25: 747–656; Dn. 26: 664–525) diyor — özet, sayfa okunmadı.
- Hükümdar saltanat yılları (Shaw'ın kral listesi tablosu) **okunamadı**; ilgili maddeler "doğrulanmadı" diye işaretli.
- TDV: künyelerin içindeki TDV alıntıları (Mısır, Nûbe, Sudan) yeniden açılmadı; yalnız kayıttaki metne bakıldı.

## A. Künye ucu × Shaw (devletler.js)
| Künye (satır) | Atlas f → t (MÖ) | Shaw 2000 | Sonuç |
|---|---|---|---|
| misir-erken-hanedan (19005) | 3126 → 2686 | ED 3000–2686 (1. Dn. 3000–2890) | **F UYUŞMAZ (126 yıl)**: f Dee vd. 2013 (Bayes C14). Ayrı kronoloji okulu `ic_not`ta beyanlı ama **künye ucu başka konvansiyonda** — kural ihlali (bkz. B1). t ✓ |
| misir-eski-krallik (19011) | 2686 → 2181 | OK 2686–2160 (3.-6. Dn. 2686–2181; 7-8. Dn. 2181–2160) | f ✓, t = 6. Dn. sonu ✓; **2181–2160 (7.-8. Dn., Memfis) hiçbir künyede yok** (B2) |
| herakleopolis (19022) | 2160 → 2055 | 9-10. Dn. 2160–2055 (Poznań) | ✓ (kayıttaki "Shaw 2025" çekincesi: Wikipedia Shaw sütunu 9. Dn. için 2160–2125 diyor; Poznań 2160–2055 — Poznań'la uyumlu, değiştirme) |
| tebai-11-hanedan (19027) | 2125 → 2055 | 11. Dn. (yalnız Teb) 2125–2055 | ✓ |
| misir-orta-krallik (19034) | 2055 → 1650 | OrK 2055–1650 | ✓ |
| hiksos-15 (19042) | 1650 → 1550 | 15. Dn. 1650–1550 | ✓ |
| tebai-17-hanedan (19047) | 1650 → 1550 | 16. Dn. 1650–~1580; **17. Dn. ~1580–1550** | f **yanlış ad/uç**: künye "17. Hanedan" ama f=1650 (B3) |
| misir-yeni-krallik (19053) | 1550 → 1069 | YK 1550–1069 | ✓ |
| misir-3-ara (19061) | 1069 → 664 | TAD 1069–664 | ✓ |
| misir-21-hanedan (22497) | 1069 → 945 | 21. Dn. 1069–945 | ✓ (bire bir) |
| kush-25-hanedan (19072) | **725 → 653** | **747–656** (Poznań; AIC özeti) | **UYUŞMAZ** f 22 yıl, t 3 yıl (B4) |
| sait-26-hanedan (19079) | 664 → 525 | 664–525 | ✓ |
| ahamenis-misir (19093) | 525 → 404 | 27. Dn. 525–404 | ✓ |
| misir-28-30-hanedan (19101) | 404 → **343** | 28.–30. Dn. 404–343 | ✓ (B5: ic_not'taki 342/343 çelişkisi Shaw ile çözülür) |
| ahamenis-misir-2 (19111) | 343 → 332 | 31. Dn. 343–332 | ✓ |
| ptolemai (19119) | 323-06-10 → 30-08-01 | Makedon 332–305; Ptolemai 305–30 | f **Shaw'dan farklı ama beyanlı** (satraplık 323, Diodoros 18.3.1 + Hölbl 2001); bkz. B6 |
| kerma (19136) | 1750 → 1500 | Shaw kapsamı dışı (Nubya) | kerma.ch beyanlı, denetlenmedi |
| naqada-kultur (22205) | 3756 → 3126 | Naqada III/Dn. 0 3200–3000 | f/t Dee okuluna bağlı; B1 düzelirse t=2999'a gider |

Çakışma/boşluk: Hiksos↔Tebai-17 aynı aralık (paralel hanedanlar, kasıtlı). kush-25 (725–653) × sait-26 (664–525) × misir-3-ara (→664) çakışır — paralel polity olarak olağan. 332–323 arası Mısır `iskender-imparatorlugu` (f −0335, t −0322-06-10) ile örtülü — **boşluk yok**; ptolemai.f = iskender.t (aynı gün) ✓.

## B. Bulgular
**B1 — Erken Hanedan f: Shaw yerine Dee (konvansiyon ihlali).** Kayıt: `misir-erken-hanedan` f=-3125. Kural: "bir devlet kaydının bütün uçları aynı konvansiyonda olmalı; öteki kronolojiler yalnız ic_not'ta beyan". Kayıtta Dee 2013 ucu f'te, Shaw t'de (2686 ortak). Öneri: f=`-2999-01-01` (MÖ 3000, Shaw/Poznań; 1. Dn. 3000–2890); Dee 3126'yı `ic_not`ta bırak; naqada-kultur t (ve Hierakonpolis HK11 zinciri) aynı uçla senkronla. Kaynak: Poznań (Shaw tabanlı) + Wikipedia Shaw sütunu (1. Dn. 3000–2890) — iki okuma tutarlı. Not: Wikipedia Hornung sütunu 2900; Shaw'ın "~3100" cümlesi kaynakta görülmedi.
**B2 — Memfis 2181–2160 boşluğu.** `misir-eski-krallik.t` (-2180) ile `herakleopolis.f` (-2159) arası 21 yıl (7.-8. Dn., Shaw: Eski Krallık içinde 2181–2160). Önerim: eski-krallik t'sini `-2159`'a uzat (Shaw OK 2686–2160; künye adı "3.-6." → "3.-8.") ya da beyanlı bırak. Yerleşim zinciri Memfis'te zaten yok (B7), harita etkisi şimdilik sıfır.
**B3 — Tebai 17. Hanedan f.** Kayıt 1650–1550; Shaw/Poznań: 16. Dn. 1650–~1580, 17. Dn. ~1580–1550. Öneri: f=`-1579` ya da adı "Tebai 16.-17. Hanedan"; kayıttaki olaylar zaten 1630'larda "17. Hanedan kuruluşu" diyor (Britannica ~1630-1540, **başka kronoloji**) — `ic_not`ta beyan şart. (Shaw'ın "~1580" ucu yaklaşıktır.)
**B4 — Kush 25. Hanedan.** Atlas f=-0724/t=-0652 (TDV "yaklaşık 725-660" + Tanutamani sonu 653). Shaw: 747–656. Mısır için Antik konvansiyon Shaw'ı seçer; TDV burada yalnız "bir ara… yaklaşık" der (yıl aralığı kesin değil) ve kayıt içi tutarsızlık yaratıyor: `misir-3-ara` olayı Piye'yi MÖ 747'de (Livius) başlatırken künye f=725. Öneri: f=`-0746`, t=`-0655`; TDV 725/660 `ic_not`ta beyan (zaten var); tek bağımsız ek kaynak: Poznań. Kayıtta "Hornung-Krauss-Warburton 2006 ve Shaw açılamadı" notu duruyor — bu turda Shaw türevi tablo okundu, not güncellenebilir. **Çelişki üçüncü kaynakla teyitsiz** (TDV ↔ Shaw türevi iki tablo) → karar bekliyor (aşağıda).
**B5 — 28.-30. Hanedan t: 343 vs 342.** `ic_not` "karar verilmedi" diyor. Shaw/Poznań: 30. Dn. 380–343, 31. Dn. 343–332; künye zaten 343/342 (−0342) ve ahamenis-misir-2 f aynı. Öneri: karar = **MÖ 343 (Shaw)**, Treccani'nin 342'si ic_not'ta kalsın. Ayrıca kayıttaki Diodoros dipnotu düzeltilmeli (kayıt kendisi bunu not ediyor: Diodoros 16.46-51 yıl çerçevesi 343/342'yi desteklemez). `kaynak:` alanına Shaw eklenmeli (şimdi yalnız Treccani/Diodoros).
**B6 — Ptolemai f=323 (satraplık).** Shaw'da Makedon dönemi 332–305, Ptolemai 305–30. Kayıtta f=323 beyanlı (ic_not_f: Önceden 305 idi; 323–305 künyesiz kalıyordu). Çelişen iki ucun üçüncüsü: Diodoros 18.3.1 + Hölbl 2001 f=323'ü; Shaw/Poznań 305'i verir. **Beyanlı bırakmayı öneririm** (harita boşluğu doğurmaz; ic_not_f'e "Shaw 2000: 305" eklensin). Gün: `kesinlik t:"gun"` (1 Ağustos MÖ 30) iken `ic_not`: "gün yerel Perseus'ta yok… okunmadı" — **kesinlik alanı ic_not'la çelişir** → t kesinliğini `ay` yap ya da gün kaynağını (Skeat 1953 / Fasti Antiates) açıp yaz. Bu turda açılamadı.
**B7 — Yerleşim zinciri çok seyrek.** Mısır künyelerine bağlı yerleşimler: Memfis (yalnız 525–403 Ahameniş + `__BOSLUK__` 403–401; "Memfis 1. Hanedan–Eski Krallık'ın başkenti" zinciri **yok**, kayıt "yıllı sınır yok, dönem yazılmadı" diyor), Tanis (21. Dn.), Avaris (Hiksos), Sais (26. Dn.), Herakleopolis, Akhetaten (misir-yeni-krallik 1348–1332), İskenderiye (ptolemai). **Hiç zincir yok:** Teb/Luksor (YK başkenti), Itj-tawy, Abydos, Giza (`s:[] bos:"veri-yok"`), Pi-Ramesses. Sonuç: Eski/Orta/Yeni Krallık, 3. Ara Dönem'in çoğu ve 28.–31. Dn. haritada kronolojiyle **doğrulanamıyor** (Değişmez 2 evrenine girmeyen eski dönem). Öneri: Memfis zincirini "başkent bağı" modeliyle (Tanis/Sais örneği: yerleşim.s = künye ömrü + `kaynak: BAŞKENT BAĞI`) genişlet: Memfis→eski-krallik, Itj-tawy→orta-krallik (Teb'le birlikte), Teb→yeni-krallik, Pi-Ramesses→19-20. Dn.; Mısır'daki yerleşim noktaları olmadan "noktası olmayan bölge en yakın peteğe emilir" kuralı bütün Nil vadisini yanlış sahiplendirir (ölçülmedi — koşu çıktısı bu turda okunmadı).
**B8 — Kaynak kalitesi (yasaklı tür).** Mısır künye bloğunda (devletler.js 19005–19160) `worldhistory.org` 58, `livius.org` 50, `britannica.com` 19, `metmuseum.org` 19 geçiş. CLAUDE.md: "popüler tarih sitesi… kullanılmaz"; Britannica/Livius/worldhistory akademik hakemli kaynak basamağında değil (Met denemeleri küratör metinleri: sınırda). Saltanat yılları (Djer 2870, Den 2813, Piye 747–721, Smendes 1077–1051, vb.) bunlardan; ayrıca **farklı kronolojiler karışık** (Britannica'nın Djer'i Shaw'dan ~250 yıl eski, kayıtta kendisi beyan ediyor). Öneri: hükümdar maddelerini Shaw kral listesi (pp. 479–483 / Kitchen, Ryholt, von Beckerath) ya da Hornung-Krauss-Warburton (2006) ile teyit edip kaynakları değiştir; teyit edilene dek madde "[kaynak: Shaw teyidi bekliyor]" ic_not'u taşısın. Bu turda tek tek madde teyidi **yapılmadı** (Shaw kral tablosu okunamadı).
**B9 — Örnek hatalı/şüpheli madde (kral listesi okunmadan işaretli):**
- `misir-orta-krallik` Sobekneferu ölümü/12. Dn. sonu MÖ ~1802 (worldhistory/Met) ↔ Shaw/Poznań 12. Dn. **1985–1773** (28 yıl fark). Üçüncü kaynak bulunamadı → beyanlı bırak ya da tarihi 1773'e çek (Shaw konvansiyonu).
- Amenemhat I MÖ 1981 (Shaw tablosu 12. Dn. başı 1985) — Shaw kral tablosu okunamadı, doğrulanmadı.
- `misir-yeni-krallik` XI. Ramses MÖ 1107 (worldhistory) — Shaw 20. Dn. 1186–1069 içinde mümkün, kral tablosu okunamadı, doğrulanmadı.
- `misir-3-ara` Piye −0746 (747) künye f=1069..., `kush-25` f=725 ile iç çelişki (B4).
**B10 — Kush (`kush-krallik`).** f=750 Shaw kapsamı dışı; ic_not zaten Wikipedia ipucunu temizleme notu içeriyor (kaynak alanı şimdi TDV); sorun yok. Meroe yerleşim zinciri f=-0299 (Peeters 2026 PNAS "300 BCE–350 CE") ↔ künye f=-0749: zincir f daha geç ama kayıtlı beyanlı ("kur:" ilk kaynaklı sahip).

## C. Ölçülemedi / çekilemedi
- Shaw (2000) kitabı: erişilemedi; türev tablolardan okundu.
- Art Institute of Chicago kronoloji sayfası: 403.
- TDV, Treccani, UCL Digital Egypt, Met sayfaları: bu turda yeniden açılmadı; kayıttaki alıntılar olduğu gibi kabul edildi.
- Harita çıktısı (koşu): okunmadı; zincir noktası eksikliğinin görsel etkisi ölçülmedi.
- Dn. 27–31 için Wikipedia Shaw sütunu yok; yalnız Poznań (tek tablo) — 28.–30. Dn. sınırları (404/399/380/343) **tek Shaw-türevi kaynak**; Livius/Treccani ile uyumlu (399/398 farkı var).

## Karar gereken (önerimle)
1. **B1 Erken Hanedan f** → öneri: f=−2999 (Shaw), Dee `ic_not`ta; naqada-kultur.t eşitle. (Etki: erken-hanedan, naqada, HK11 zinciri; harita 3126→3000 arası Naqada/ED toprak değişimi — Değişmez 2 kronoloji maddesi −3125 maddesiyle birlikte taşınır.)
2. **B4 Kush 25. Hanedan f/t** → öneri: −0746 / −0655 (Shaw 747–656), TDV 725/660 beyan.
3. **B3 Tebai 17.** → öneri: f=−1579 ya da ad "16.-17. Hanedan".
4. **B2 7.-8. Hanedan** → öneri: eski-krallik t=−2159, ad "3.-8.".
5. **B5** → öneri: 343 (Shaw) karar, ic_not'ta 342 (Treccani) kalsın, kaynak alanına Shaw.
6. **B6 Ptolemai** → öneri: f=323 beyanlı kalsın (Shaw 305 ic_not'a); t kesinliği `ay`.
7. **B7 zincir** → öneri: Memfis/Teb/Itj-tawy/Pi-Ramesses "başkent bağı" zincirleri (ayrı iş, kaynak: Shaw + künye başkenti).
8. **B8 kaynak** → öneri: Mısır hükümdar maddelerinin Shaw/Hornung teyit turu (ayrı iş; Shaw kitabı erişimi gerekir — kütüphane PDF/İSAM).
