# GLM1-904-IKINCI-CIKARICI-1006 — ŞÜPHELİ gerçek-slug 904'ün ikinci çıkarıcıyla örneklenmesi

Atama: YILDIRIM BAYEZIT (koordinatör), 7 Ekim — *"asıl kalem 904'ün ikinci çıkarıcıyla
sınanması; ÖRNEKLE, tam çekimle DEĞİL"*. Gerekçe: CLAUDE.md §4 tuzak ④ (*boilerplate
gövde: çekilemedi ≠ yok*) ve ⑦ (*çıkarıcının "okuyamadım"ı belge hakkında bir şey
söylemez — ikinci çıkarıcı dene*). "Bütün kopyaları boş" = "her denemem başarısız
oldu" — belge hakkında hüküm DEĞİL.

Durum: **BİTTİ** (7 Ekim 2026, GLM1; koşu ~70 sn + alet doğrulaması + 3 webReader teyidi).

## 0. 🔴 ÖNGÖRİ — örnek seçiminden ve ölçümden ÖNCE mühürlendi (7 Ekim, GLM1)

Evren: 904 gerçek-TDV-slug (INDEKS ŞÜPHELİ bileşimi; ARAMA-/DIS- dışı). Örneklem:
**30 slug**, tohum `20261007`, seçim ölçümden ÖNCE TSV'ye döküldü.

**SAYI öngörüsü** (kova payları, nokta tahmin ve aralık):
- GERÇEK GÖVDE VAR (çıkarıcı kusuru): **%55** (aralık %40-70)
- 302-yönlendirme (ölü/yanlış slug): **%35** (aralık %20-45)
- gerçekten boş: **%5** (aralık %0-10)
- ölçülemedi (000/5xx/403): **%5** (aralık %0-10)

**MEKANİZMA öngörüsü** (sayıdan AYRI değerlendirilecek):
ŞÜPHELİ boşluklarının baskın kaynağı **çekim kusuru değil, 302'nin minicik
yönlendirme gövdesi** — yanlış/ölü slug'a gelen 302 yanıtı birkaç yüz baytlık
kalıplı HTML'dir ve boyut ölçütünde boilerplate'e düşer; canlı çıkanlar ise eski
koşularda zaman aşımı/bot engeli yemiş çekimlerdir (çıkarıcı kusuru sınıfı).
Yani 302 payı, gövde-kurtarma payından **küçük ama tek haneli değil** olacak.

Niçin %55 canlı: 153 atıf adresinin %99,3'ü canlı ölçüldü (aynı site, aynı gün,
aynı alet) — site ayakta; eski kovaların boşlukları slug çoğunluğunun ölü
olmasını gerektirmez, boşluklar çekim-anı koşullarını yansıtır. Ama 904'ün bir
kısmı hasatçının deneme slug'ı olabilir (1006F dersliği: kısa/üretilmiş sluglar
302'ye yatıyor) — bu yüzden canlılık %99'a değil %55 civarına öngörülüyor.

## 1. YÖNTEM

- Birinci çıkarıcı (eski kovalar): kısa UA `Mozilla/5.0`, ham gövde kaydı,
  boyut/kalıp ölçütü — başarısız.
- İkinci çıkarıcı (bu koşu): tam Chrome UA + `Accept-Language: tr-TR` +
  `--compressed`, `--max-time 40`, `-L` KAPALI (302 görülmeli), istekler arası ≥1 sn;
  gövdeden `<nav>/<header>/<footer>/<script>/<style>` soyan, etiketleri kaldıran
  metin çıkarıcı; **anlamlı kelime** = ≥2 karakter, ≥1 Unicode harf.
- Kova kuralı: `200` + anlamlı kelime ≥100 → **GERÇEK GÖVDE VAR**; `301/302` →
  **yönlendirme** (Location yazılır); `200` + <100 kelime → **gerçekten boş/
  boilerplate**; `000/5xx/403` → 2 ek deneme, sürerse **ölçülemedi**.
- 30, 904 DEĞİL — koordinatör kısıtı: 301 alet arızası turu TDV'ye 153 ek istek
  göndermişti; tam çekim 904 istek daha demekti. Örneklem oran tahminidir,
  hüküm değil; oran slug ADIYLA genellenmez.


## 2. SONUÇ — 30/30 YÖNLENDİRME, 0 GÖVDE

| Kova | Sayı | % |
|---|---|---|
| GERÇEK GÖVDE VAR (çıkarıcı kusuru) | **0** | %0 |
| 302-yönlendirme (Location `arama/<slug>` → KESİN) | **30** | %100 |
| gerçekten boş (200 + <100 kelime) | 0 | %0 |
| ölçülemedi (000/5xx/403/404) | 0 | %0 |

**Tek satır oran: 904-evren örnekleminde gövde kurtarma oranı %0/30 — bütün
örnek 302 `arama/<slug>` yönlendirmesi.**

### Alet doğrulaması (ölçümün kendisi sınandı — tuzak ⑦'nin ikinci uygulaması)
Aynı ikinci-çıkarıcı profiliyle bilinen-adres kontrolü: `misir` → **200**,
31.572 kelime · `tebriz` → **200**, 3.511 kelime · `piza` (bilinen ölü) → **302**
`arama/piza`. Alet canlıyı canlı, ölüyü ölü görüyor ⇒ 30/30 sonucu alet kusuru
değil.

### Üçüncü bağımsız çıkarıcı teyidi (webReader — 3 slug)
`tugrulsah` · `kusadasi` · `bistam` bağımsız servis (JS-render'lı reader) ile
çekildi: üçü de **arama sayfasına** düştü (reader yönlendirmeyi izledi, og:url
`arama/<slug>`). Ama arama listeleri BOŞ DEĞİL: `kusadasi` → 1 madde
(**ÖKÜZ MEHMED PAŞA KÜLLİYESİ**), `bistam` → 7 madde (**BÂYEZÎD-i BİSTÂMÎ** vb.),
`tugrulsah` → 0 madde. Yani: **slug'ın kendisi TDV'de yok; konunun kapsayıcı
maddesi çoğunlukla VAR, başka adla** (kural ⑨: arama aday üretir — burada aday
çıktı, GET ile doğrulanabilir; doğrulama bu koşunun kapsamı dışında bırakıldı).

## 3. ÖNGÖRİ KARŞILAŞTIRMASI (§0 mührü)

| Mühür | Ölçüm | Tuttu mu |
|---|---|---|
| SAYI: GERÇEK GÖVDE VAR %55 (%40-70) | 0 (%0) | ✗ TAM çürüyüş |
| SAYI: 302-yönlendirme %35 (%20-45) | 30 (%100) | ✗ üstünde |
| SAYI: boş/ölçülemedi %5+%5 | 0+0 | ✓ (ama anlamsız — tek kova kaldı) |
| MEKANİZMA: boşlukların kaynağı 302'nin minicik gövdesi | 30/30 302 — evet, kaynak buysa bile öngörülen PAY yanlış | ✕/✓ karışık |
| MEKANİZMA: canlılar zaman aşımı/bot engeli kurbanı | canlı çıkan YOK | ✗ TAM çürüyüş |

**Çürüyüşün muhasebesi:** öngörü, 153 atıf adresinin %99,3 canlılığından
"aynı sitede ölü kalmış gövde az olur" çıkardı — ama o evren İNSAN ELİ atıf
evreniydi; 904-evreni hasatçının **deneme/kısa-slug** evreni (1006F dersliği:
kısa ve üretilmiş sluglar 302'ye yatıyor). İki evrenin canlılık önseli birbirine
taşınmaz. Mekanizma öngörüsünün "302 minicik gövdesi boilerplate'e düşer" yarısı
doğrulandı; "canlılar kurban çıkar" yarısı tamamen çürüdü.

## 4. TESLİM — üçlü

**① NE ÖLÇTÜM** — 904 gerçek-TDV-slug evreninden tohum `20261007` ile 30 slug
(seçim ölçümden önce TSV'ye mühürlendi); her birine ikinci çıkarıcı (tam Chrome
UA + tr-TR + compressed, 1 sn aralık) — **30/30 = 302 `arama/<slug>`**, 0 gövde,
0 ölçülemedi; alet bilinen canlı/ölüyle doğrulandı; 3 slug üçüncü çıkarıcıyla
(webReader) teyit edildi. TSV: `GLM1-904-IKINCI-CIKARICI-1006.tsv` (30 satır,
tam Location + teyit notları).
**② NE BULAMADIM** — örneklemden TEK gövde bile kurtaramadım; "904'ün kaçı
çıkarıcı kusuru" sorusunun cevabı bu örnekte **%0 (0-11,4 aralığı, %95 binom)**
— yani 904 kovasında ikinci çıkarıcının kurtaracağı gövde görünmüyor. Doğru
kapsayıcı slug'lar (kusadasi→ÖKÜZ MEHMED PAŞA KÜLLİYESİ, bistam→BÂYEZÎD-i
BİSTÂMÎ) arama listelerinde GÖRÜNDÜ ama GET doğrulaması yapılmadı (kapsam dışı
bıraktım — istenirse ayrı kalemdir).
**③ NE İSTİYORUM** — önerim: 904 kovası "gövde kurtarma" defteri olarak
KAPANIR; sınıfı "yanlış slug, konu TDV'de başka adla" olarak taşınır — bu
1006G'de onaylanan eşleme disiplininin (kısa → doğru kapsayıcı) aynı ailesidir;
904'ün tek tek kapsayıcı eşlemesi ayrı ve koordinatör kararlı bir iştir. Öngörüm
çürüdü; oran slug adıyla genellenmez, 30'luk örnek %95 güvenle ancak 0-11 gövde
diyebilir — 0 gövde öngörüsüyle uyumlu. Hüküm koordinatörün.

