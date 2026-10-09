# ODAK-KAPI-KORLUK-1006 — odak kapısı dosya bazlı: dosyalar arası göçü göremez

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı)
Evren: `arac/odak_olc.py kapi_olcumu()` (yalnız okundu) · deney atılabilir ağaçta, `data/` kopyası üstünde.
- **Y1 dosya içi gerileme:** evrendeki bir `kronoloji_*` dosyasında 1 KONUMLU madde odaksızlaştırılır → `✗ ODAKSIZ GERİLEDİ (+1)`, ihlal **True**. 1 madde `kapsam_genis` (BEYANLI) yapılır → `✗ BEYANLI→yabancı GERİLEDİ (+1)`.
- **Y2 yönlendirme göçü:** W37'nin `app.js` yönlendirmesi (1.680 madde künyelere iner, 224'ü BEYANLI) uygulanır → kapı satırları **birebir aynı** kalır. Sebep: `odak_olc` `app.js`i okumaz.
- **Y3 dosya taşıma göçü:**
  - BEYANLI madde `kronoloji_*` → `olaylar*`: `BEYANLI→yabancı` **−1** ve "İYİLEŞME" basılır, kamera davranışı aynıdır.
  - ODAKSIZ madde evren dosyası → yeni dosya: tavandan çıkar, ⓘ YENİ KAPSAM'a düşer, `✗` basılmaz.
  - Y1 gerilemesi + Y3 göçü aynı sayıda birlikte → net 0 → ihlal **False** (gerileme maskelenir).
- **Y4 ters yön (yanlış pozitif):** `bilinen_kusur` anahtarı `(dosya,t,alan,deger)` olduğu için beyanlı bir kırık atıfın dosyası değişirse → "YENİ ÇÖZÜLMEYEN" **öter** + "KAPANDI" basılır.
- Madde kimliği: maddelerin **< %5'i** açık `id` taşır; `t`+`b` çiftinin dosyalar arası ikizi **~20**.

Mühür: sha256 `d324377d…bcc9` (yalnız §0), 2026-10-06T08:06:47+03:00, ölçümden önce.

## 1. Ortam — İKİ TEMEL, iki ölçüm
- **İlk ölçüm (08:0x):** `59961e52`. Tavanlar ODAKSIZ 438 · BEYANLI→yabancı 655. Oturum 05:03'te rapor yazımının ortasında düştü; diskte yalnız §0 kaldı.
- **Bu rapor (yeniden ölçüm):** `origin/makine/umit` **`a1182e75`**. Tavanlar `bebc58ae` + `b3cdfe3b` ile indi: **ODAKSIZ 401 · BEYANLI→yabancı 426**. Aşağıdaki BÜTÜN sayılar bu temele aittir; eski temelden farklar §6'da adıyla.
- Ağaç: `git -C C:\atlas worktree add --detach C:\atlas-w39 a1182e75` (atılabilir). Her deneyden önce `git checkout -- data js`. Teslimden önce kaldırıldı.
- `arac/odak_olc.py` ve `arac/odak_cozum.js` **yalnız import edildi / okundu**. `ARAC-KRONO-BAGLAMA-0929-KAPI.*` için de aynı: sayaç scratch kopyaya eklendi.
- Deney betikleri scratchpad'de: `korluk.py` · `korluk_sim.py` · `goc_js.js` · `kimlik.js` · `kapi_olc.*`.
- Taban E0: ODAKSIZ **401 = tavan** · BEYANLI→yabancı **426 = tavan** (pay 0) · bilinen kusur 1 (`kronoloji_dogu_afrika.js` 1897 `Ogaden`) · evren 152 dosya · YENİ KAPSAM 8 dosya / 331 odaksız.
- Yeni temelde W37 zinciri `js/app.js`'in İÇİNDE (`c62cbb5d` · `e3913aec` · `f73235cd`). E2 bu yüzden ters yönde koştu: app.js ← `c62cbb5d^`.

## 2. (a) İki yönlü deney — `kapi_olcumu()` gerçek çağrı
| # | değişiklik (madde içeriği aynı, aksi yazmadıkça) | dosya bazlı kapı | doğru hüküm |
|---|---|---|---|
| E1a | `kronoloji_iran.js` 1335-11-30 `yer_kon` silindi (KONUMLU → ODAKSIZ) | **✗ ÖTER** 402 > 401 | öter ✓ |
| E1b | aynı madde → `kapsam_genis:true` (KONUMLU → BEYANLI) | **✗ ÖTER** 427 > 426 | öter ✓ |
| E1c | aynı, 3 madde | **✗ ÖTER** 429 > 426 (+3) | öter ✓ |
| E2 | W37 yönlendirmesi geri alındı (app.js ← `c62cbb5d^`) | ✓ satırlar E0 ile **birebir aynı** | görmeli ✗ |
| E3a | BEYANLI `kronoloji_iran.js` 1381 → `olaylar.js` | ✓ **"1 İYİLEŞME"** (425) | değişiklik yok ✗ |
| E3b | ODAKSIZ `kronoloji_akkoyunlu.js` 1412 → yeni dosya | ✓ **"1 İYİLEŞME"** (400) | değişiklik yok ✗ |
| E3c | E1a + E3b (ODAKSIZ, 1'e 1) | ✓ **ihlal False**, 401 = tavan | öter ✗ **MASKELENDİ** |
| E3e | E1b + E3a (BEYANLI, 1'e 1) | ✓ **ihlal False**, 426 = tavan | öter ✗ **MASKELENDİ** |
| E3d | E1c ×3 + E3a ×1 | ✗ öter ama **+2** der (gerçek +3) | +3 ✗ kısmî maske |
| E4 | bilinen kusur (Ogaden) başka dosyaya taşındı | **✗ ÖTER** "YENİ ÇÖZÜLMEYEN" + "KAPANDI 1" | ötmemeli ✗ (yanlış pozitif) |

**Teşhis — iki yapısal kusur + bir yan bulgu:**
1. **Sayı tavanı dosyadan habersiz toplar.** Bir dosyadaki gerileme, başka bir dosyadan çıkan maddeyle sıfırlanır (E3c, E3e). Çıkış iki yoldan olur:
   - `olaylar*` önekli dosyaya taşıma: BEYANLI→yabancı sayılmaz.
   - Evren dışı dosyaya taşıma: madde YENİ KAPSAM'a düşer.
   Madde değişmediği hâlde ikisi de "İYİLEŞME" basar.
2. **"→yabancı" DOSYA ADINDAN okunur** (`ozetle`: `startswith("olaylar")`), kapı `app.js`i okumaz.
   - E2: W37'nin 1.680 maddelik yönlendirmesi var ya da yok, kapı satırları aynı.
   - 📌 **Yeni temelde kısmî çare VAR ama kapıya BAĞLI DEĞİL.** `odak_cozum.js` (`f73235cd`) artık madde × künye **`sekme`** dökümü üretiyor: `taraflar` ile künyeye iner, W37'nin modelini statik olarak kuruyor. Toplam: GOVDE 331 · KUTU 104 · TABI_KUTU 13 · **SESSIZ 97** · OLCULEMEDI 0.
   - Ama `odak_olc.py`de `sekme` geçen satır **0**; `kapi_olcumu()` bunu okumuyor. ⇒ Ölçüm var, kapı yok.
3. Yan bulgu (eski temelde, KAPANDI): tavan 655 / ölçüm 653 iken 2'lik indirilmemiş pay E1b'yi yutuyordu. `b3cdfe3b` tavanı ölçüme indirdi ve E1b bugün ötüyor. `§3.4 ③`ün işe yaradığının ölçüsü.
- `bilinen_kusur` anahtarındaki `dosya` alanı ters yönde ötüyor: taşınan kusur hem "yeni" hem "kapandı" basılıyor (E4).

## 3. (b) ÖNERİ — ölçütü MADDE KİMLİĞİ bazına çevir
**Ölçüm** (`kimlik.js`, odak_olc'un evreni, a1182e75: 184 dosya · **10.026 madde**):
- Açık kimlik alanı (`id` / `kimlik` / `madde_id` / `uid`) taşıyan madde **0**.
- `t | NFC(b)` tekil **9.973**. Dosya içi ikiz **0**, dosyalar arası ikiz grubu **52**.
- ODAKSIZ kümesinde 732 kimlik, **732'si tekil**.

**Öneri** (uygulama W37'nin / kapı sahibinin işi; bu bir taslak):
1. **Kimlik** = `t | NFC(b)` (açık `id` yokken). 52 ikiz grubu çoklu küme olarak sayılır.
2. **Tavan sayı değil LİSTE:** `odaksiz_kimlik: [...]` · `beyanli_kimlik: [...]`. Bu `bilinen_kusur` deseni.
   - Kümede yeni kimlik varsa öter, dosyası ne olursa olsun.
   - Çıkan kimlik adıyla "İYİLEŞME" diye basılır.
   - Dosya değiştiren kimlik ötmez, "TAŞINDI" diye bilgi basılır.
3. **`bilinen_kusur` anahtarından `dosya` çıkar:** `(kimlik, alan, deger)`. E4'ün yanlış pozitifi kalkar. Bu bir ÇIKARIM; simüle edilmedi.
4. **"→yabancı" dosya adından değil, `sekme` dökümünden ölçülür.** Döküm zaten var (§2 ②); kapının **SESSIZ** sayısını (bugün 97) kimlik listesi olarak tavana bağlaması yeter. Bu, W37'nin 224 BEYANLI'sının hangi künyede sessiz kaldığını gösterir.
5. `evren` (dosya kümesi) yerine **kimlik evreni**: YENİ KAPSAM = tavan listesinde hiç geçmemiş kimlik.

**Simülasyon** (`korluk_sim.py`, a1182e75; yalnız ODAKSIZ, kimlik `t|b[:90]`, odak_cozum'un kendi `odaksiz` dökümünden):

| deney | dosya bazlı | kimlik bazlı |
|---|---|---|
| E1a | öter | **ÖTER** (yeni 1: 1335-11-30 Ebû Said) |
| E3b | ötmez + sahte iyileşme | ötmez (yeni 0 · giden 0) — doğru |
| E3c | **ÖTMEZ** | **ÖTER** (yeni 1) — maske kalktı |
| E4 | öter (yanlış pozitif) | ötmez (yeni 0) — doğru |

⚠️ Bulunamadı / sınır:
- BEYANLI kimlik simülasyonu yapılmadı: çözücü yalnız ODAKSIZ ve SESSIZ maddeleri döküyor, BEYANLI'nın tam listesini dökmüyor. Öneri 2, çözücüye `beyanli: [...]` dökümü ister.
- Kimlik `b` metnine bağlı: başlık düzeltmesi "çıktı + girdi" görünür ve öter. Bu bilinçli bir sertlik, ama yazım düzeltmelerinde gürültü yapar. Kalıcı çözüm açık `id`; bu bir veri şeması kararı (Emre / VERI-YAPISI.md).

## 4. (c) `ARAC-KRONO-BAGLAMA-0929-KAPI` yönlendirmeyi modellemiyor — ölçüldü (a1182e75)
- Yöntem: KAPI.js'in a1182e75 sürümünün scratch kopyasına tek sayaç eklendi. Her dosyanın kaç maddesi herhangi bir künyenin `.kronoloji`sine **nesne kimliğiyle** indi (W37 §2.1'in D265 yöntemi).
- Evren yayın/paket, 68 dosya. Önce = app.js ← `c62cbb5d^`.
- Yeni temelde KAPI.js değişmiş (`ec819dd3`: temsil yüklemi), ama eşlenmeyen mantığı **aynı** (satır 89 `dizi[0]`).

| | W37 öncesi | W37 sonrası (a1182e75) |
|---|---|---|
| bağlı | 26 dosya · 2.479 madde | 33 dosya · 3.421 madde |
| EŞLENMEYEN ("sitede ERİŞİLEMEZ") | 15 dosya · 2.084 madde | **8 dosya · 1.142 madde** |
| bu 8 dosyada gerçekten inen | 0 | **917** (246+190+121+108+111+65+61+15) |
| 7 "bağlı"ya geçen dosyada gerçekten inen | — | **763 / 942** (CIN 124/136 · HINDISTAN 100/131 · JAPONYA 61/71 · ARABISTAN 43/60 · GUNEY_ASYA 133/153 · ITALYA_SEHIR 166/186 · ORTA_ASYA 136/205) |
| ekrandan düşen künye maddesi | 156 (25 künye), hepsi TEMSİL EDİLİYOR | aynı |

- **Sebep:** KAPI.js:88-89 bağlılığı dosyanın **İLK maddesi** (`dizi[0]`) bir künyede bulunuyor mu diye sınıyor.
  - Eşlenmeyen kalan 8 dosyanın **8'inde** ilk madde taraflı değil.
  - "Bağlı"ya geçen 7 dosyanın **7'sinde** ilk madde taraflı.
  - ⇒ 15→8 bir hüküm değil, ilk maddenin rastlantısı.
- **İki yönde de yanlış:**
  - 8 dosya "1.142 madde ERİŞİLEMEZ" diyor, gerçekte erişilemeyen **225**.
  - 7 dosya "bağlı 942" diyor, gerçekte inen **763**: 179 madde inmiyor ama "bağlı" sayılıyor.
- Sağlama: 917 + 763 = **1.680** = KRONOLOJI-COK-1006'nın inen madde sayısı ✓. İki temelde de aynı.
- **Öneri:** ilk-madde sezgisi yerine madde başına nesne kimliği. Dosya üç kovaya ayrılır: **BAĞLI** (tek künye, `.kronoloji === dizi`) · **YÖNLENDİRİLDİ k/n** (ÇOK yolu, k madde indi) · **EŞLENMEYEN** (0 indi). Hüküm sayısı madde olur: "n−k madde inmiyor", adıyla.
- Araca DOKUNULMADI, yama yazılmadı.

## 5. ① DEGISMEZ-0086 TEMP artığı → `DEGISMEZ-0086-TEMP-1006c.diff`
- Diff tek dosya, +2 −1: `import shutil` + `finally`ye `shutil.rmtree(d, ignore_errors=True)`.
- `git apply --check` temiz: **59961e52** (yazıldığı temel) ve **a1182e75** (yeni temel).
- TOPLU-SINAV ölçümü (59961e52 + 1006 + 1006b):

| sınav | sonuç | TEMP |
|---|---|---|
| ESKİ sürüm | GECTI | **1** `tmp*` |
| YENİ | GECTI | **0** |

- Gerçek 3'lü liste: çıkış 0, **TEMP 0**. `--yapay` 18/18 tuttu.
- ⚠️ TEMP ölçümü yeni temelde **yeniden koşturulmadı**: diff orada da temiz uygulanıyor, betik değişmedi (`git log 59961e52..a1182e75 -- denetim/DEGISMEZ-0086-sinav.py` boş).

## 6. Eski temelden (59961e52) bu temele (a1182e75) farklar — adıyla
| ölçüm | 59961e52 | a1182e75 | sebep |
|---|---|---|---|
| ODAKSIZ (evren) / tavan | 438 / 438 | 401 / 401 | `b3cdfe3b` ODAK-ASYA uygulandı + tavan aynı commit'te |
| BEYANLI→yabancı / tavan | 653 / **655** (pay 2) | 426 / 426 (pay 0) | `bebc58ae` + `b3cdfe3b` |
| T: KUTULU · BEYANLI · ODAKSIZ | 477 · 667 · 769 | 722 · 440 · 732 | odak kampanyası (KRONOLOJI-COK-ODAK, ODAK-ASYA) |
| E1b (BEYANLI +1) | **ötmedi** (pay yuttu) | **öttü** | pay kapandı |
| E3d (BEYANLI +3 −1) | ötmedi (pay + göç) | öttü, +2 dedi | pay kapandı, göç maskesi sürüyor → E3e eklendi |
| E3e (BEYANLI 1'e 1) | — | ötmedi | maske, yeni deney |
| ODAKSIZ kimlik kümesi | 769 | 732 | aynı sebep |
| `odak_cozum` `sekme` dökümü | yok | var (SESSIZ 97), kapıya bağlı değil | `f73235cd` |
| (c) 15→8 · 917 · 763 | aynı | aynı | eşlenmeyen mantığı değişmedi |

## 7. Öngörü karşılaştırması (öngörü eski temelde yazıldı)
- Y1 ODAKSIZ öter → **TUTTU**.
- Y1 BEYANLI +1 öter → eski temelde **YANLIŞ** (tavan payı), yeni temelde **TUTTU**.
- Y2 E2 birebir aynı → **TUTTU** (iki temelde).
- Y3 göç iyileşme / ⓘ / maskeleme → **TUTTU**.
- Y4 ters yön öter → **TUTTU**.
- Açık `id` < %5 → **TUTTU** (%0).
- `t+b` dosyalar arası ikiz ~20 → **YANLIŞ**: 52 grup.

## 8. Dokunulmayanlar / git status
- Dokunulmadı: `arac/odak_olc.py` · `arac/odak_cozum.js` · `ARAC-KRONO-BAGLAMA-0929-KAPI.*` · `denetim/ODAK-TAVAN.json` · `data/` · motor tuzu (4 dosya).
- Ağaçlar kaldırıldı. TEMP'te `lego_sinav_*` / `toplu_*` artığı 0.
- atlas-umit: `?? denetim/ODAK-KAPI-KORLUK-1006.md` · `?? denetim/DEGISMEZ-0086-TEMP-1006c.diff`.
