# GLM1-SLUG-ONARIM-1006C — ölü slug'lar için kapsayıcı madde ADAY tablosu (ölçüm; onarım YOK)

Durum: **BİTTİ** (6 Ekim 2026, GLM1) — teslim üçlüsü §4'te.

> 🔴 **Koordinatör hükmü (6 Ekim, teslim sonrası) — raporun başına alındı:**
> *TDV aramasının kaçırma oranı SABİT değil, KAYAN'dır (Eylül'de dönen 137 ·
> dönmeyen 71 · bugün yeni 29). Eylül'de ölçülmüş bir kaçırma oranı bugün için
> geçerli değildir; "aday tükendi" hükmü bir TARİHE bağlıdır.*
> İki liste BİRLEŞTİRİLMEZ (hüküm ①): **74** veri hakkında bulgudur (onarım
> adayı; aday "doğrulanmış" SAYILMAZ — TDV tuzağı ② açık: canlı slug yanlış
> madde olabilir) · **71** ALET hakkında bulgudur (veri kusuru değil, motorun
> kaçırması). Ayrı kova, ayrı hüküm, ayrı tavan.
> Süzgeç kuralı (hüküm ③): süzgeç tanımadığını eleyip geçmez, SAYAR ve BASAR —
> her koşu "muellif/ N · büyük-harfli M elendi" satrı yazar. Büyük-harfli
> döndürülenler (NÎSÂBÛRÎ · NÎŞÂBUR) ÇÖP DEĞİL: "eski biçim — karşılığı ölçülmedi"
> adlı kovaya düşer.

Atama: YILDIRIM BAYEZIT (koordinatör) mesajı, 6 Ekim — 1006B tesliminin ardılı; sıra
değişti, bu eski ③'ün kendisi. Soru: **482 ölü slug'ın her biri için bugünkü canlı
TDV'de geçerli bir KAPSAYICI madde var mı?** Ve: 2026-10-06 motoru ile 2026-09-30
motorunun farkı sayıyla (bayat oraklının bedeli).

Sınırlar (koordinatör şartları): önbelleğe/`data/`'ya/`arac/`'a **dokunulmaz** ·
**hiçbir slug onarımı uygulanmaz** (tablo üretilir, hüküm koordinatörde) · istekler
arası 1 sn bekleme · öngörü ölçümden önce mühürlenir · `bulunamadı` bir sonuçtur.

## 0. ÖNGÖRÜ — ölçümden ÖNCE mühürlendi, değiştirilmez

**Evrenler (disk tarafı, HTTP öncesi):**
- ölü slug: içeriği `302\n` olan dosyalar (1006 ölçümü: 482; koşu sırasında yeniden
  türetilir, sayı farklı çıkarsa ölçülen sayı esas olur ve bildirilir);
- Eylül adayı: 79 sonuçlu ARAMA dosyasındaki menü-dışı satırlar — 217 satır / 208
  benzersiz (1006B ölçümü);
- bugünkü arama: 482 ölü slug'ın her biri için `arama/?q=<slug>` — **yalnız ilk sayfa**
  (Eylül hasadı da tek sayfaydı; `?p=m` izlenmez — beyan);
- GET doğrulaması: 208 Eylül adayı + bugünkü aramanın **yeni** (Eylül listesinde
  olmayan) adayları.

**Kural beyanları:**
- **"geçerli aday"** = bugünkü aramada dönen VE doğrudan GET'te 200 + gövdeli olan
  slug. Arama dizini makaleden geri kalabilir (ölü slug'ların hikâyesi budur) —
  arama dönüşü tek başına geçerlilik SAYILMAZ, GET şart.
- sonuç çıkarımı DOM'dan: `madde_liste_satir` bloklarının href'i (`?`/`.php`/dış
  bağlantı hariç) — 1006B'de bu satırların sunucu-taraflı olduğu ölçüldü.
- ölü slug'ın adı bugünkü aramada kendisini dönerse ayrı işaretlenir
  (`kendini_döndürdü` — madde var ama adresi değişmiş olabilir izi).
- ölü slug adında Türkçe/Kiril karakter varsa URL kodlanır (`moгol` vb.).

**Kuramsal zemin:** makaleler naden ölürlür, yeniden ADLANDIRILIRLAR (302); motor
30 Eyl'den beri DARALMIŞ (meshed 9→3, 1006B ölçümü) ama yön bilinmiyor — daralma
hem aday düşürür hem (daha isabetli) yeni aday çıkarabilir. D217: TDV olay değil
YER-KİŞİ ansiklopedisidir; arama önerileri zaten bu ekseni taşır.

**Sayı öngörüleri:**
| # | Soru | Öngörü | Mekanizma |
|---|---|---|---|
| Ö1 (ASIL) | 482 ölü slugu bugün ≥1 GEÇERLİ adayı olanı | **70-130 (%15-27)** | Eylül'de 363 aramanın 79'u (%22) sonuçluydu; motor daraldı ama GET-geçerlilik oranı yüksek |
| Ö2 | 208 Eylül adayından bugün GET 200-gövdeli olanı | **≥ 170 (%82)** | makale ölmek yerine yeniden adlandırılır; ölen ≤ 35 |
| Ö3 | 79 Eylül-sonuçlu sorgudan bugün ≥1 arama sonucu dönen · bugünkü ilk-sayfa benzersiz aday toplamı | **≥ 45 sorgu** · **120-180 aday** (Eylül 208'den az) | daralma yönü (meshed 9→3) |
| Ö4 | Eylül-sonuçsuz ≥300 sorgudan bugün sonuç çıkanı | **≤ 40** | daralan motor sonuçsuzlara yeni sonuç uydurmaz — ama ters yön ölçülmeden bilinmez |
| Ö5 | inmiş 14 adaydan bugün gövdeli olanı | **≥ 13** | 30 Eyl'de gövdesi çekilmişti; makale ölmez |

## 1. AŞAMA ELEME — disk (HTTP yok) — BİTTİ

| Ölçüm | Değer |
|---|---|
| kova | 35 · dosya 2.682 (1006 evreniyle aynı) |
| ölü slug (içerik `302\n`) | **482** (beklenen 482 ✓) |
| Eylül-sonuçlu ARAMA sorgusu | **79** (beklenen 79 ✓) |
| Eylül benzersiz aday | **208** (beklenen 208 ✓) |
| inmiş aday (dolu döküm kardeşi) | **herhangi kovada 25** · aynı kovada 14 (1006B ölçümü) |

**Kapsam beyanı (inmiş):** 1006B'nin "izlenen 14"ü ARAMA dosyasıyla AYNI kovadaki
kardeşe bakıyordu; 1006C diski herhangi bir kovadaki dolu dökümü sayar (=25).
İkisi de doğru, ayrı ölçüt. Mükerrer-çekimden düşürme için doğru kapsam 25'lidir.

**Koşu düzeni (koordinatör, geçiş 1 sonrası): iki geçişe bölündü** — GEÇİŞ 1:
208 aday GET'i (asıl sorunun bir yarısı: adaylar bugün geçerli mi) · GEÇİŞ 2:
482 ölü slug araması (öteki yarısı: eşleme bugün ne diyor). Tek koşuda ikisi
karışırsa hangi küme ne söylüyor ayrışmaz.

## 2. AŞAMA ÖLÇÜM — HTTP

### GEÇİŞ 1 — 208 Eylül adayının bugünkü GET doğrulaması — BİTTİ
**208 istek · 0 yeniden deneme. Sonuç: 208/208 GOVDE (%100)** — ölü 0 ·
gönderme 0 · boş sayfa 0 · ayıklama hatası 0. inmiş 25/25 GOVDE.
⇒ **Eylül oraklısı ADAY düzeyinde bayat değil**: atılmış cevabın tamamı bugün
çekilebilir. Bayatlık (varsa) yalnız EŞLEMEDEDİR (hangi ölü slug → hangi aday);
onu GEÇİŞ 2 ölçer (1006B'deki meshed 9→3 vakası eşleme daralmasıydı — aday
ölmesi değildi; adayların hiçbiri ölmedi).

### GEÇİŞ 2 — 482 ölü slug × bugünkü arama — BİTTİ
**482 istek · 482/482 kod 200 · 0 yeniden deneme.** Bugün sonuçlu sorgu **77** ·
sonuçsuz **405**. `kendini_döndürdü` = **0** (hiçbir ölü slug bugünkü aramada
kendisini döndürmedi). Bugünkü ilk sayfa benzersiz aday: **166** (Eylül: 208).

### Ek tur — bugünün YENİ adayları (Eylül-208'de olmayan) — BİTTİ
**29 istek.** 22 GOVDE · **2 OLU** (`NÎSÂBÛRÎ` · `NÎŞÂBUR` — büyük harfli eski
biçim; GET 302; `nisabur` sorgusu döndürüyor) · **5 BOS_SAYFA** (`muellif/…`
yazar sayfaları — madde değiller; `karacabey` · `sine` · `yesi` · `ane` ·
`erzin` sorguları döndürüyor). "Geçerli" tanımı (GET 200 + gövde) gereği
`muellif/` satırları aday SAYILMADI — beyan.

## 3. FARK — Eylül oraklısı ↔ bugünkü motor (yalnız ölçüm, hüküm yok)

**Koordinatör cümle biçimi (çıkarım yazılmaz):**
```
482 ölü slug: Eylül'de aranan 363 (sonuçlu 64 · sonuçsuz 299) · hiç aranmamış 119
              bugün (482'nin tamamı): sonuçlu 77 · sonuçsuz 405
Eylül-sonuçluların bugünkü hâli: 64/64 sonuçlu (sıfıra inen 0) · 13'ü ters yönde
              (Eylül-sonuçsuz olup bugün sonuç çıkan: ani · ermenek · guclu ·
              halki · kete · ladik · mahmudi · makri · nahseb · tur · karacabey*
              · sine* · yesi*   [* geçerli adaysız — yalnız muellif/ döndü])
```

**Aday düzeyi (geçiş 1 + ek tur):**
| Küme | Sayı | Bugünkü GET hâli |
|---|---|---|
| Eylül-208'in tamamı | 208 | **208 GOVDE (%100)** — ölü 0 |
| iki tarihte de dönen | **137** | GOVDE |
| Eylül'de dönen, bugün HİÇBİR sorgunun döndürmediği | **71** | **GOVDE** (canlı; düşen eşleme, düşen madde değil) |
| bugünkü yeni | 29 | 22 GOVDE · 2 OLU · 5 BOS(`muellif/`) |

**Sayısı değişen Eylül-sonuçlu sorgu: 19** (15 azaldı · 4 arttı) — ADAY TSV'de
`sayi_degisimi` sütununda sorgu sorgu; başlıcalar:
`has 12→8 · resid 10→9 · beri 9→6 · hit 9→8 · kis 9→8 · kain 8→5 · esferayin 6→1 ·
sur 5→6 · nisabur 3→5 · ane 3→4 · erzin 1→2` (tam 19'luk liste TSV'de).

**Bugün ≥1 GEÇERLİ (GET-200-gövdeli) aday taşıyan ölü slug: 74 / 482 (%15,4).**
Eylül-sonuçlu olup bugün geçerli-adaysız kalan: **0**.

**ÖNGÖRÜ KARŞILAŞTIRMASI (kural ⑦ — §0 mühürlü hâliyle):**
| # | Öngörü | Ölçüm | Tuttu mu |
|---|---|---|---|
| Ö1 (ASIL) | 70-130 ölü slugin bugün ≥1 geçerli adayı var | **74** | ✓ (aralığın alt ucunda) |
| Ö2 | Eylül-208'den ≥170 GOVDE | **208/208** | ✓ aşıldı |
| Ö3 | Eylül-sonuçlu ≥45 bugün de sonuçlu · bugünkü benzersiz aday 120-180 | 64/64 (karşılaştırılabilir evren) · **166** | ✓ (evren beyanı: "79" ARAMA-dosya sayısıydı; 15'i ölü-olmayan sorgu — ölü evreninde 64) |
| Ö4 | Eylül-sonuçsuzlardan bugün sonuç çıkan ≤40 | **13** (evren 418) | ✓ |
| Ö5 | inmiş ≥13/14 canlı | **25/25** (kapsam 25'e büyüdü, §1 beyan) | ✓ |

**Dokunulmazlık beyanı:** 6 gönderme-dönüşmüş dosya (`colemerik · urfa ×2 ·
tuareg · doha · dimask`) bu koşunun evreninde YOK (ölü slug değiller) ve koşu
hiçbir yere yazmıyor — önbelleğe/`data/`'ya/`arac/`'a sıfır yazma, yalnız okuma.

## 4. TESLİM — üçlü kural

**① NE ÖLÇTÜM** — üç HTTP geçişi: **719 istek** (geçiş 1: 208 · geçiş 2: 482 ·
ek tur: 29; 0 yeniden deneme), ara bekleme 1 sn. Çıktılar:
- `GLM1-SLUG-ONARIM-ADAY-1006C.tsv` — **482 satır**, ölü slug başına: Eylül
  adayları · bugün adayları · düşen/yeni · **bugün geçerli adaylar** ·
  `sayi_degisimi` · kendini_döndürdü.
- `GLM1-SLUG-ONARIM-DOGURULAMA-1006C.tsv` — **237 satır** (137 ikisi · 71 eylul ·
  29 bugun): GET kodu/durumu, başlık, Eylül ve bugün hangi sorguların döndürdüğü,
  inmiş/dolu/kendisi-ölü işaretleri.

Baş sayılar: **74/482 ölü slugun bugün geçerli kapsayıcı adayı var** · Eylül-208
**%100 canlı** · eşleme: bugün 166 benzersiz aday, kesişim 137, Eylül'de kalıp
bugün dönmeyen 71 (canlı) · 19 sorguda aday sayısı değişti · 13 sorgu bugün yeni
sonuçlandı (3'ü yalnız `muellif/` — geçerli değil) · kendini döndüren 0.

**② NE BULAMADIM** (bulunamadı bir sonuçtur):
- 119 ölü slug Eylül'de HİÇ aranmamış — karşılaştırma evrenleri yok; bugünkü
  arama tek ölçümleri (ADAY TSV'de duruyorlar).
- Bugünkü motorın döndürdüğü büyük harfli eski biçimler (`NÎSÂBÛRÎ` · `NÎŞÂBUR`)
  GET'te 302 — bu biçimlerin gerçek karşılıkları bu ölçümde bulunamadı.
- `muellif/…` satırlarının madde olup olmadığı ayrıca ölçülmedi (GET boş sayfa
  verdiği için aday sayılmadılar — sınıf beyanı).

**③ NE İSTİYORUM** (öneriler, hüküm koordinatörde):
1. **Onarım tablosu hazır:** 74 ölü slugun bugün geçerli kapsayıcı adayları
   ADAY TSV `bugun_gecerli_adaylar` sütununda; yanında Eylül listesi. Hangi
   tarihin listesi kullanılır — hüküm sizde (Eylül 208'in 71'i bugün hiçbir
   sorguda dönmüyor ama canlı: iki liste TAMAMLAYICI, çakışan değil).
2. **Mükerrer çekim:** inmiş 25 (herhangi kovada dolu döküm) + 208/208 canlı
   olduğundan, yeniden çekim listesi yalnız GERÇEKTEN istenen gövdelere
   indirilebilir — ELEME verisiyle kesişim sizin kaleminiz.
3. **Yeni-aday sınıfı:** bugünkü motor `muellif/` ve büyük harfli biçim
   döndürüyor — ileride yapılacak her arama tabanlı aday üretiminde bu sınıfın
   süzülmesi gerekir (ölçüm; süzme kararı hüküm).

**Yazdığım dosyalar:** `denetim/GLM1-SLUG-ONARIM-ADAY-1006C.tsv` (482) ·
`denetim/GLM1-SLUG-ONARIM-DOGURULAMA-1006C.tsv` (237) ·
`denetim/GLM1-SLUG-ONARIM-1006C.md` (bu rapor) · `denetim/GLM1-SLUG-KARAKTER-1006.tsv`
(ek kalem; hükmünüz: iki dosyaya da DOKUNULMAZ — önerilerin ikisi de zarar
verirdi; kalemin kalan değeri: tarayıcı çalıştı, 2.680 ad temiz).
Önbellek dizinlerine, `data/`'ya, `arac/`'a yazılmadı.

## 3. FARK — Eylül oraklısı ↔ bugünkü motor
(henüz değil)

## 4. TESLİM — üçlü kural
(henüz değil)
