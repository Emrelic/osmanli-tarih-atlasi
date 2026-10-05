# UMIT-W16-KISI-ORNEKLEM-1006 — kaynaksız kişi kayıtlarında TDV isabet örneklemi

Ağaç: `C:\atlas-w16` · `origin/main` `3e4b3a98` · 5 Ekim 2026 · YALNIZ ÖLÇÜM, veri yazılmadı.

## 1. Ölçüm — kaynaksız kayıt sayısı
- Tanım: **kaynaksız** = `kaynak` alanı yok ya da boşluktan arınınca boş dizgi.
  (`data/kisiler.js`te kaynakla ilgili tek alan `kaynak`; `kaynak_*` türevi yok — anahtar taraması.)
- `window.KISILER` = **288** kayıt · `kaynak` dolu **22** · **kaynaksız 266** (şartnamedeki 266 tuttu).

## 2. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi (örneklem çekilmeden yazıldı)
Dayanak yalnız tür dağılımı: 266'nın 162'si (%61) `yabanci-hukumdar`.
- **① kendi maddesi:** %45 ± 15 (yani %30–60)
- **① + ②:** %60 ± 15 (yani %45–75)
- Gerekçe: Osmanlı sadrazam/âlim/komutanda ① ≈ %85 beklenir; yabancı hükümdarda TDV
  yalnız İslâm dünyasıyla doğrudan temas eden büyük adları maddeleştirir (≈ %30).

## 3. Örneklem — tohum 1006, n=20, tekrar üretilebilir
`py C:\atlas-umit\denetim\ARAC-KISI-ORNEKLEM-1006.py` (cwd `C:\atlas-w16`, node ile `window.KISILER`
okunur; 266 kaynaksız dosya sırasıyla, `random.Random(1006).sample(..., 20)`). Alfabetik değil.

## 4. Sonuç tablosu (her satır TDV'de AÇILIP okundu; slug HTTP 200, gövde dolu)
Sınıf: **①** kendi maddesi · **②** başka maddede geçiyor · **③** bulunamadı · **D** TDV kapsamı dışı.

| # | id | tür | sınıf | TDV slug | kayıttaki tarihi destekleyen cümle (kısaltılmış) | kayıt tarihi desteği |
|---|---|---|---|---|---|---|
| 1 | rancit-singh | yab-hük | ② | `amritsar` (+`kesmir`, `ismail-sehid`) | "Ranjit Singh zamanında (1792-1839)" | t 1839 ✓ · f 1780 ✗ |
| 2 | kazim-karabekir-pasa | komutan | ① | `kazim-karabekir` | "KÂZIM KARABEKİR (1882-1948)"; "vefat … (26 Ocak 1948)" | f ✓ t ✓ |
| 3 | louis14 | yab-hük | ② | `fransa` | "XIV. Louis (1643-1715) tahta geçti" | saltanat ✓ t ✓ · f 1638 ✗ |
| 4 | muhammed-davud-sah | yab-hük | ② | `ace` | "Son Açe Sultanı Tunku Muhammed Dâvûd'un 1903'te Hollandalılar'a boyun eğmesi" | `not` (1903) ✓ · kayıtta yıl yok |
| 5 | merzifonlu-kara-mustafa-pasa | sadrazam | ① | `merzifonlu-kara-mustafa-pasa` | "1044 (1634-35) … doğdu"; künye "…/1683" | t ✓ · f BOŞ, TDV 1634-35 veriyor |
| 6 | mihail-fyodorovic | yab-hük | ② | `rusya` | "Michael Fedoroviç Romanov'u çar seçmesiyle … (1613-1645)" | saltanat ✓ t ✓ · f 1596 ✗ (yalnız "on yedi yaşında" — türetme, alıntılanamaz) |
| 7 | tsevang-rabtan | yab-hük | ② | `kalmuklar` | "Sevang Rabdan (1697-1727) … Taşkent dahil" | t 1727 ✓ (TDV yazımı *Sevang Rabdan*) |
| 8 | candarli-hayreddin-pasa | sadrazam | ① | `candarli-kara-halil-hayreddin-pasa` | "Mezar kitâbesine göre ölüm tarihi 789'dur (1387)" | t ✓ · donem başı 1364 okunmadı |
| 9 | nikolay1 | yab-hük | ② | `rusya` | "I. Nikola (1825-1855) ayaklanmanın başarı kazanmasında etken oldu" | saltanat ✓ t ✓ · f 1796 ✗ |
| 10 | gercek-davud | alim | ② | `tulumbaci` | "Gerçek Dâvud (David) tarafından 1132'de (1720)"; "ölümüne kadar (1733)" | `not` ✓ · ⚠️ TDV "Fransız asıllı mühendis" der, `tur:"alim"` şüpheli |
| 11 | mevlay-muhammed | yab-hük | ② | `hafsiler` | "Hafsîler'in son temsilcisi Mevlây Muhammed İstanbul'a götürüldü … (1574)" | `not` ✓ · ⚠️ `mevlay-muhammed-*` başlıkları FAS hükümdarlarıdır, bu kişi değil |
| 12 | t-e-lawrence | siyasi | ① | `lawrence-thomas-edward` | "16 Ağustos 1888'de … doğdu"; "19 Mayıs 1935'te öldü" | f ✓ t ✓ |
| 13 | seyh-edebali | alim | ① | `edebali` | "726 (1326) yılında vefat etti" | t ✓ |
| 14 | muhammed-bello | yab-hük | ① | `muhammed-bello` | "1195'te (1781) doğdu"; "25 Receb 1253 (25 Ekim 1837) … vefat" | f ✓ t ✓ |
| 15 | lala-sahin-pasa | vezir-paşa | ① | `lala-sahin-pasa` | "Gelibolu'ya gönderildi (760/1359)"; "772 (1370-71) … İhtiman ve Samakov" | kayıt "14. yy" ✓ |
| 16 | menelik2 | yab-hük | ② | `etiyopya` | "Menelik de … 2 Mayıs 1889'da … Wichale (Uccialli) Antlaşması" | saltanat başı 1889 ✓ · f 1844 / t 1913 ✗ |
| 17 | candarli-halil-pasa | sadrazam | ① | `candarli-halil-pasa` | künye "…857/1453"; "30 Mayıs 1453'te azledildi" | t ✓ |
| 18 | nasiruddin-sah | yab-hük | ① | `nasiruddin-sah` | "17 Temmuz 1831'de … doğdu"; "1 Mayıs 1896 … suikast" | f ✓ t ✓ |
| 19 | edhem-pasa | komutan | ① | `gazi-edhem-pasa` | "17 Mayıs'ta Dömeke Meydan Muharebesi'nde Yunanlılar'ı büyük bir bozguna uğrattı" | `not` ✓ · ⚠️ ad belirsiz: `edhem-pasa-ibrahim` (sadrazam) BAŞKA kişi; kimlik `not`tan çözüldü |
| 20 | muhammed-ahmed | yab-hük | ① | `muhammed-ahmed-el-mehdi` | "1258 (1842) veya 1260 yılında … doğdu"; "22 Haziran 1885 … öldü" | t ✓ · f 1844 = TDV'nin iki seçeneğinden biri (1260) — tartışmalı, bildirilmeli |

Arama tuzakları (§4) bu ölçümde:
- Ad yazımı ayrışıyor: kayıt *Rançit* / TDV *Ranjit, Randjit* · *Tsevang Rabtan* / *Sevang Rabdan* ·
  *Mihail Fyodoroviç* / *Michael Fedoroviç* · *XIV. Louis* başlıkta yok, gövdede `XIV.` cümle bölücüsüyle kopuk.
  Kayıttaki adla ilk arama 9/20'de kişiye ait başlık döndürmedi (0 ya da adaş/ilgisiz başlık); isabet bulunması **ad varyantı + kapsayıcı madde (devlet/yer)** ile oldu.
- Yanlış canlı slug riski 2 kayıtta ölçüldü (#11 Fas Mevlây Muhammedleri, #19 Edhem Paşa İbrâhim).
- 302 görülen slug'lar (`kirim-savasi`, `kirim-harbi`, `osmanli-rus-savaslari`) karar verdirmedi; aramayla geçildi.
- Vikipedi kullanılmadı. Boilerplate/000 vakası yok.

## 5. İsabet — iki ayrı rakam (karar koordinatörde)
| ölçü | sayı | oran | %95 aralık (Clopper-Pearson, n=20) | öngörü | öngörü tuttu mu |
|---|---|---|---|---|---|
| **yalnız ①** | 11/20 | **%55** | %32–77 | %30–60 | ✓ |
| **① + ②** | 20/20 | **%100** | %83–100 | %45–75 | ✗ — **düşük tahmin**: yabancı hükümdarın TDV'de devlet/yer maddesi içinde geçtiğini hafife aldım |
| ③ bulunamadı | 0/20 | %0 | %0–17 | — | — |
| D kapsam dışı | 0/20 | %0 | — | — | 11 yabancının 11'i en az ② |

**Ama ② ile ① eşdeğer değil — tarih desteği ayrı ölçüldü:**
- ① 11 kaydın 11'inde kaydın ölüm/görev tarihi TDV cümlesiyle destekleniyor; 1'inde (#20) doğum tartışmalı, 1'inde (#5) TDV kayıtta boş olan doğumu veriyor.
- ② 9 kaydın **9'unda kimlik + olay** destekleniyor, ama `f` dolu 5 kaydın **5'inde de doğum yılı TDV'de YOK** (#1, #3, #6, #9, #16); #16'da `t` 1913 de yok. ② kaynağı yazılırsa `f` alanı "kaynaksız" kalır.

## 6. Örneklemin yapısı — yanlı mı?
| tür | 266 içinde | örneklem | ① | ①+② |
|---|---|---|---|---|
| yabanci-hukumdar | 162 (%60,9) | 11 (%55) | 3/11 | 11/11 |
| Osmanlı + öteki (sadrazam, vezir, komutan, âlim, siyasi…) | 104 (%39,1) | 9 (%45) | 8/9 | 9/9 |
| yabanci-komutan · denizci · mimar · edebiyatçı · hanedan | 27 (%10,2) | **0** | — | — |

- Hafif yan: sadrazam fazla (%15 / %6,4), yabancı hükümdar az (%55 / %61); beş küçük tür hiç çekilmedi.
- Tabakaya göre yeniden ağırlıkla **① ≈ %51** (0,609×3/11 + 0,391×8/9); ①+② yine %100 — yan sonucu değiştirmiyor.
- **Ölçülemedi:** `yabanci-komutan` (12) ve küçük türlerin isabeti; onlar için ①+② %100 genellenemez.

## 7. Bağlam — veride zaten ② emsali var
22 kaynaklı kaydın 2'si ② biçiminde: `burak-reis` → "TDV: kemal-reis (müstakil madde bulunamadı — slug 302)",
`elvend-bey` → "TDV: akkoyunlular (…)". Yani ② biçimi veride kabul görmüş bir kalıp.

## 8. Öneri (karar koordinatörde)
- Eşiğe göre (≳%60): ① tek başına %55 — **sınırda/altında**; ①+② %100 — **açıkça üstünde.**
- Önerim: **kampanya**, ama iki kademeli kural ile — ① bulunan kayıt `kaynak:"TDV: <slug>"`;
  ② bulunan kayıt `kaynak:"TDV: <kapsayıcı-slug> (müstakil madde yok)"` + kaynağın vermediği `f`/`t`
  açıkça "kaynakta yok" diye işaretlenir (uydurulmuş kesinlik olmasın). Toplu "bulunamadı" beyanı
  bu örneklemde 20 kaydın 20'si için **yanlış** olurdu.
- Maliyet uyarısı: ② bulmak kayıt başına ad varyantı + kapsayıcı madde araması istedi (bu örneklemde ①'e göre ~3 kat istek).
- Kampanyada ayrıca düzeltilecek yan bulgular: #10 `tur` (mühendis, âlim değil), #19 ad belirsizliği, #5 `f` doldurulabilir, #20 `f` tartışmalı.
