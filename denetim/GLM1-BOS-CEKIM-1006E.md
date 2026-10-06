# GLM1-BOS-CEKIM-1006E — 414 bilinmeyen BOŞ slugun tek-GET çekimi (çekim-içinde-onay)

Durum: **KOŞUYOR** (6 Ekim 2026, GLM1; onay: YILDIRIM BAYEZIT, üç koşulla).

Atama: koordinatör mesajı — "414 GET ONAYLANDI — çekim-içinde-onay düzeniyle".
GET'in kendisi çekimdir: gövde dönerse slug o turda inmiş olur, ikinci çekim yok.

Evren: `GLM1-BOS-DARALTMA-1006D.tsv` sinif=`M4_bilinmeyen` — **414 slug**
(475 BOŞ dosya → 449 benzersiz → −5 mükerrer-dolu −30 ölü-kaydı). Bu slugar
hakkında bugüne dek HİÇ ölçüm yok: Eylül hasadı 0 bayt yazıp geçmiş; hiçbir
aramada aday olarak dönmemişler (Eylül-208 ∩ bugünkü-166 kesişimi sıfır).

Koordinatörün ÜÇ KOŞULU (bağlayıcı):
1. Sonuç dağılımı TEK kovaya atılmaz — **gövde · 302 · 000 · boilerplate DÖRT
   AYRI** sayılır. 000 taşıma arızasıdır ölü değil; boilerplate "çekilemedi"dir
   "yok" değil. Belirsiz kalan "ölçülemedi" yazılır (ölçülemedi ≠ yok ≠ temiz).
2. İnen gövdenin YANINDA HTTP durumu durur; yalnız `denetim/GLM1-*` altına
   yazılır. Paylaşılan TDV önbelleğine YAZILMA — durumsuz gövde İDDİADIR,
   durumlusu VERİDİR (önbellek zehirlenmesin).
3. Yazma sınırı aynı: `denetim/GLM1-*` · `data/`/`arac/`/önbellek dışarıda.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi, değiştirilmez

Gerekçe (ölçülmüş zemin): bu evren Eylül'de 302 DEĞİL 0 bayt almış (taşıma
arızası imzası; ölü olanlar ayrı kovada '302\n' yazmışlardı) · aday ölüm oranı
bugün %0 ölçüldü (208/208 GOVDE) · site 30 Eyl'den beri değişti ama madde
ölmedi, YENİDEN ADLANDI.

| # | Soru | Öngörü | Mekanizma |
|---|---|---|---|
| Ö1 | 414'ten GOVDE (200 + gövdeli) ineni | **300-390 (%72-94)** | Eylül arızası taşımaydı; madde yerinde durur |
| Ö2 | 302 dönen (yeni ölü-kaydı) | **≤ 60 (%14)** | ayrık evrenin ölüm oranı bağımsız; aday-ölümü %0 ama slug-ad-değişimi sürüyor |
| Ö3 | 000 (taşıma) + ölçülemedi toplamı | **≤ 30** | ağ bugünkünden farklı değil; az sayıda yeniden deneme yeter |
| Ö4 | 200 ama gövdesiz (boilerplate/boş) | **≤ 10** | TDV tuzağı ③/④ az ölçülür; aday geçişlerinde 0 çıktı |

## 1. ÖLÇÜM DÜZENİ

- Koşucu: `%TEMP%\glm1_1006E_bos_cek.py` — 1006C altyapısı aynen:
  `curl -s --max-time 30 -A Mozilla/5.0 -w __KOD__` · 1 sn bekleme ·
  000 → 5 sn sonra 1 yeniden deneme · resume (JSONL'den `yapilmis`).
- Sınıflayıcı: `denetim/ARAC-TDV-CIKARICI-1006.py` `tam()` — READ-ONLY import.
- Ham kayıt: `%TEMP%\glm1_1006E_bos.jsonl` (slug · kod · deneme · bolum ·
  gonderme · baslik · boyut).
- Tesliler (yalnız `denetim/GLM1-*`):
  - `GLM1-BOS-CEKIM-1006E.tsv` — manifest: slug · http_kod · deneme ·
    sonuc_sinifi · baslik · govde_boyut · govde_dosyasi. **Durum kodu gövdeyle
    aynı satırda** (koşul ②).
  - `GLM1-BOS-CEKIM-1006E-govde/<slug>.html` — yalnız GOVDE sınıfının gövdesi;
    dosyasız gövde yok, gövdesiz dosya yok.

## 2. SONUÇ — BİTTİ

**415 istek (414 slug + 1 yeniden deneme) · 0 ölçülemedi · 0 arıza · 000 yok.**

| Kova (koşul ①: dört+ kova AYRI) | Sayı | Kim / nerede |
|---|---|---|
| **GOVDE** (200 + gövdeli) | **2** | `dalmaçya` · `danismend-gazi` — gövdeler indi |
| **OLU_302** (yeni ölü-kaydı) | **411** | tam liste ADIYLA manifest TSV'de |
| **GONDERME** (200, madde→madde) | **1** | `kumanlar` → **`kipcaklar`** (başlık "KUMANLAR", gövde Kıpçaklar'a gönderiyor) |
| ARIZA_000 | 0 | — |
| BOILERPLATE / boş gövde | 0 | — |
| ölçülemedi | 0 | — |

İnen gövde: `GLM1-BOS-CEKIM-1006E-govde/` altında **2 dosya** (`dalma_ya.html` —
dosya adında `ç`→`_` dönüşümü var, manifest `govde_dosyasi` kolonu bağlar ·
`danismend-gazi.html`). Durum kodu + gövde AYNI satırda: `GLM1-BOS-CEKIM-1006E.tsv`
(koşul ②). Paylaşılan önbelleğe / `data/` / `arac/` sıfır yazma (koşul ③).

**Mekanizma kanıtı** (3 ek istek — onaylı evrenin kanıt turu, yazma yok):
- `abaka-han` → 302 → **Location: `arama/abaka-han`**
- `abdulkays` → 302 → **Location: `arama/abdulkays`**
- `danismend-gazi` → 200 (canlılık teyidi)
⇒ 302'nin hedefi **yeni makale slug'ı DEĞİL, arama sayfası**: bu evrende
"yeniden adlandırılma" Location'dan OKUNAMAZ; yeni ad (varsa) ancak aramayla bulunur.

**Desen ölçümleri** (disk, manifest TSV'den):
- 411 ölüden **13'ü `--` içeriyor**; **4'ünde** `--`suz gövdesi AYNI evrende başka
  slug olarak duruyor (`alanlar--kavim`/`alanlar` · `balear-adalari--`/`balear-adalari`
  · `elhamra--saray`/`elhamra` · `minorka--`/`minorka`) — ölçülmüş yazım-ikizi olgusu.
- Türkçe karakterli 3: `dalmaçya` (**GOVDE**) · `eçmiyazin` (ölü; `ecmiyazin` de ölü)
  · `taşnak` (ölü; `tasnak` da ölü).

## 2.5 ÖNGÖRÜ KARŞILAŞTIRMASI (§0 mühürlü hâliyle — değiştirilmedi)

| # | Mühürlü öngörü | Ölçüm | Tuttu mu |
|---|---|---|---|
| Ö1 | GOVDE 300-390 | **2** | ✗ BÜYÜK çürüyüş |
| Ö2 | OLU_302 ≤ 60 | **411** | ✗ tam tersi |
| Ö3 | 000 + ölçülemedi ≤ 30 | **0** | ✓ |
| Ö4 | boilerplate ≤ 10 | **0** | ✓ |

**Çürüyüşün muhasebesi (çıkarım — ayrı işaretli, hüküm koordinatörde):** "Eylül'de
0 bayt = taşıma arızası, madde yerinde durur" hipotezi yanlıştı. Ölçülen olgularla
tutarlı okuma: bu kova harvester'in **deneyip bulamadığı adların** kovasıdır
(302 alınca `302\n` yazan kod yolu ile hiç yazmayan yol ayrı — 1006B'nin format
bulgusuyla uyumlu); `--` ve yazım-ikizi yoğunluğu da aynı yöne bakıyor. Öngörü
hatası, ayrık bir evrene ölü-slug kovasının DIŞINDAN mekanizma aktarmaktan doğdu:
"bu evren hakkında hiç ölçüm yoktu" cümlesini yazıp sonra onu taşıma-arızası
saymak, ölçmemiş varsayımı mühürlemekti.

## 3. TESLİM — üçlü

**① NE ÖLÇTÜM** — çekim turu **415 istek** (414 slug; 1 slug 000 sonrası yeniden
denendi) + kanıt turu 3 istek = **418 toplam**. Dört kova: GOVDE 2 · OLU_302 411 · GONDERME 1
(→`kipcaklar`) · ARIZA_000 0 · BOILERPLATE 0 · ölçülemedi 0. İnen gövde 2 dosya.
Yazılanlar: `GLM1-BOS-CEKIM-1006E.tsv` (414 satır manifest, durum kodu gövdeyle
aynı satırda) · `GLM1-BOS-CEKIM-1006E-govde/` (2 html) · bu rapor.

**② NE BULAMADIM** (bulunamadı bir sonuçtur):
- 411 ölü slugun **yeni adı bulunamadı** — Location arama sayfasıdır, makale
  slug'ı taşımaz (2 örnekte ölçüldü; geneline genellenmesi ölçüm değil).
- 302'nin "hiç var olmadı" mı "kaldırıldı" mı olduğu bu ölçümde ayırt EDİLEMEDİ.

**③ NE İSTİYORUM** (öneriler, hüküm koordinatörde):
1. Bilinen ölü slug evreni artık **482 + 411 = 893** (302-kaydı + BOŞ-çırpılmış);
   birleştirme (GLM-GOREV-1005) girdisi bu raporla tazelendi — sıra onun.
2. 411 için kapsayıcı-aday araması (1006C GEÇİŞ 2 düzeni) YENİ bir onay ister;
   ölçülürse `--`/ikiz desen ölçümü başlangıç süzgeci olabilir (karar sizde).
3. `kumanlar` ≡ `kipcaklar` göndermesi veriye hazır bir eşleme; `dalmaçya` ve
   `danismend-gazi` gövdeleri inmiş durumda.
