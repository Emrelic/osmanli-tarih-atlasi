# UMIT-W49c — koordinatör hükmü (tırnak kaldırma · P3-3a yeniden · P3-3b · ÇÖZÜLDÜ-YOK) — yalnız DİFF, UYGULANMADI

**Temel:** `origin/makine/umit` **cdc1ccea** (44905df6'yı içeriyor, `merge-base --is-ancestor` ile ölçüldü). Worktree `C:\atlas-w49`, geri alındı, temiz.
Ana diff'ler **paket_* / yerlesimler* / yer_yama*** dosyalarını İÇERMEZ. Onlar her kalemin `-DISARIDA-1006b.diff` ikizinde, koordinatör için.

## Bu uçta zaten inmiş olanlar (ölçüldü, yeniden üretilmedi)
P3-1d malatya (kronoloji_memluk) · P3-1f mezyediler (devletler) · P3-1g alemdar · P3-1h bogdan · P3-1i gurcistan (+paket_12) · P3-2'nin inen kalemleri (ör. Y07 tehcir).
**İnmemiş:** P3-1a inebahti, P3-1b kavalali, P3-1c tibhane, P3-1e aynalikavak. a ve c'yi aşağıdaki a2/c2 diff'leri **yerine geçerek** taşıyor.
b ve e için yeni diff üretilmedi, eski `UMIT-W49b-P3-1b/e` diff'leri hâlâ geçerli olabilir. Uygulamadan önce `--check` gerekir.

## UYGULAMA SIRASI — diff'ler KATMANLIDIR
Her katman öncekilerin **üstünde** ölçülüp üretildi (git index katman anlık görüntüsü; commit ve stash yok).
P3-3a2 ile P3-3b aynı uzun satırlara dokunuyor (`ekokuma_p76f/g`); P3-6 da P3-1a2'nin kaldırdığı tırnağı görmemeli. Bu yüzden **sıra şart**:

| # | diff | ne | dosya |
|---|---|---|---|
| 1 | `UMIT-W49c-P3-1a2-inebahti-deniz-savasi-1006b.diff` (+`-DISARIDA`) | slug → `inebahti-deniz-savasi`. İspanya `kaynak:`ındaki tırnak **KALDIRILDI**, metin kaldı, "TIRNAK KALDIRILDI" beyanı ve gövdenin gerçek cümlesi eklendi | 3 (+2) |
| 2 | `UMIT-W49c-P3-1c2-tibhane-i-amire-DISARIDA-1006b.diff` | yer_yama: slug → `tibhane-i-amire` (→ mekteb-i-tibbiyye). '1827'de öğretime başlamış' tırnağı **KALDIRILDI**. t:1827'nin kaynağı **bulunamadı** diye beyan edildi. "Şehzadebaşı TDV'de yok" yanlışı düzeltildi | 0 (+1) |
| 3 | `UMIT-W49c-P3-5-amritsar-tirnak-1006b.diff` | kademe_f5c9a5: iki okuma varyantının tırnakları **KALDIRILDI** ("(a)…, (b)…" biçimi), "kaydın kendi yorumudur, TDV cümlesi değildir" beyanı. TDV'nin birebir cümlesi tırnakta KALDI | 1 |
| 4 | `UMIT-W49c-P3-3a2-ic-alan-isaret-1006b.diff` (+`-DISARIDA`) = istenen **P3-3a 1006b** (aynı içerik `UMIT-W49b-P3-3a-ic-alan-isaret-1006b.diff` adıyla da var) | iç alan (`ic_not_*`) ve `kaynak` tırnağının ardına `[TDV: slug]`. **167 işaret** (17 + 14 dosya) | 17 (+14) |
| 5 | `UMIT-W49c-P3-3b-gorunen-alan-kardes-kaynak-1006b.diff` (+`-DISARIDA`) | görünen alanda (metin/d/not/neden/dayanak/ozet…) METNE DOKUNULMADI. İşaret kaydın **kardeş `kaynak` dizgesinin sonuna** ` · [TDV: slug]` olarak eklendi. **24 işaret** | 7 (+4) |
| 6 | `UMIT-W49c-P3-6-cozuldu-yok-iki-kova-1006b.diff` (+`-DISARIDA`) | ÇÖZÜLDÜ-YOK: `[TDV slug: slug (alıntı doğrulanmadı)]`. İç alanda satır içi, görünen alanda kardeş kaynak. **19 işaret** | 6 (+7) |

**Sınav (temiz uçtan, gerçekten uygulanarak):** 10 diff'in hepsi bu sırayla ✓, yalnız 5 ana diff (DISARIDA'sız) sırayla ✓.
Her biri kendi katman tabanında `--check` temiz. Tek tek temiz uçta değil: 4'ten sonrakiler öncekilere dayanır.

## LİSTE — diff VERİLMEDİ, koordinatör onayına (döküm `scratchpad`taki `p35-*.json`, istenirse TSV'ye dökerim)
- **P3-3b (görünen alan, kardeş `kaynak` YOK ya da kullanılamaz):** kardeş kaynak yok 12 · nesne bulunamadı 4 · alan sınıflanamadı 9 · `alinti*` yapılandırılmış alan 8 · ağaçta yok 1.
  ⚠️ Biri: `merak.js` ankara-savasi (P3-2'nin yeni birebir tırnağı; kardeş kaynak yok).
- **P3-6:** P3-2 diff'i henüz inmemiş 10 kalem (paket_01/05/12/13/14, yerlesimler, yerlesimler_ek29, yer_yama_1923). Eski tırnağa "doğrulanmadı" koymak bekleyen P3-2 diff'iyle çakışırdı, işaret KONMADI.
  P3-2'nin bu uçta inmiş yeni tırnakları birebir doğrulandı; 11'inin 10'unda slug zaten yakında ya da kaynakta (ATLA).
  Ağaçta artık olmayan eski YOK tırnağı 13 · yapılandırılmış alan 1 · kaynak dizge değil 1 · kardeş kaynak yok 1.
- **Atlananlar (mükerrer olurdu):** slug zaten tırnağın hemen önünde, ya da kardeş `kaynak` slug'ı zaten taşıyor (yüzlerce; sayılar katman çıktılarında).

## Önce / sonra (bütün katmanlar birlikte)
- `denetle.py`: önce çıkış 2 · sonra çıkış 2. **Sıralanmış çıktılar AYNI** (tek ölçülemeyen Değişmez 8, `devletler_harita.js` taze ağaçta yok).
- 50 dosya, 195 satır. Hepsi node'da `new Function('window',…)` ile hatasız yükleniyor.
- Kişi kaynağı kovası önce = sonra: **tdv 257 · başka 2 · beyan 29 · kaynaksız 0**.

## KOVA — HER TÜKETİCİ İÇİN ADIYLA
| tüketici | neyi okur | `[TDV: x]` (sona ekli) | `[TDV slug: x (alıntı doğrulanmadı)]` (sona ekli) | aynı biçim ÖNEK olsaydı |
|---|---|---|---|---|
| `durum_tablosu.kisi_kova` (yalnız `kisiler.js` `kaynak`) | önek: "TDV:" → tdv · "bulunamadı" → beyan · dolu → başka · boş → kaynaksız | kova DEĞİŞMEZ (önek korunur). P3-3b `kisiler.js`e 2 işaret ekler, ikisinin öneki zaten "TDV:" → **tdv kalır** (ölçüldü) | `kisiler.js`e bu biçim **yazılmadı** | `TDV: x` → **tdv** · `TDV slug: x …` → **BAŞKA** (beyan DEĞİL; beyan yalnız "bulunamadı" öneki) |
| `denetle.kaynaksizlik_olc` (yerleşim `s:` taşıyan kayıt, `kaynak` doluluğu) | boş mu, dolu mu | dolu kalır, kova değişmez | dolu kalır | ikisi de **dolu** sayılır |
| `app.js:6423` koridor düğümü `kaynakli` | `/bulunamad/i` metnin herhangi bir yerinde → kaynaksız | dokunulmadı (koridor verisi diff'te yok). İşaret "bulunamad" içermez | aynı | etkisiz |
| `app.js:7361` devlet kronolojisi gösterimi | `"Kaynak: TDV " + kaynak` olarak EKRANA basar | işaret **okura görünür** ("… · [TDV: x]") | görünür | — |

⇒ **Kaynak sayısı şişmedi:** hiçbir işaret önek olarak yazılmadı. "TDV slug:" biçiminin önek olarak kullanılması `kisi_kova`da onu BAŞKA'ya düşürür, BEYAN'a değil.
Hüküm metnindeki "beyan'a" beklentisi bugünkü sınıflandırıcıyla karşılanmıyor. Ya sınıflandırıcıya kural eklenmeli ya da biçim önek yapılmamalı. Bugün önek yapılmadı.
