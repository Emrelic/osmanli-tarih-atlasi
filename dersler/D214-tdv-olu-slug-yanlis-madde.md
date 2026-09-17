# TDV ölü slug ve canlı-slug-yanlış-madde tuzakları

> Kimlik `D214` · `CLAUDE.md §4` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

### ⚠️ TDV ölü slug tuzağı — projede en çok hata bunun yüzünden çıktı

`islamansiklopedisi.org.tr/<slug>` olmayan slug için sessizce arama sayfasına
yönlendirir. **"Sayfa açıldı" demek "madde var" demek değildir.**

🔴 **İKİ AYRI TUZAK VAR ve testleri farklı. Karıştırma.**

**① ÖLÜ SLUG — madde YOK.** İki işaret de ele verir, **en ucuzu HTTP kodu**:
```bash
curl -s -o /dev/null -w "%{http_code}" https://islamansiklopedisi.org.tr/<slug>
# 302 → ÖLÜ (arama sayfasına yönleniyor)      200 → madde VAR
```
> `<title>` testi de çalışır ama **`-L` şart** (yönlendirmeyi izlemeli);
> izlenmiş sayfanın başlığı **"Arama - TDV İslâm Ansiklopedisi"** ise madde YOKTUR.

⚠️ **Bu satır 6 Ağustos 2026'da DÜZELTİLDİ.** Önceki hâli *"olmayan slug için
de HTTP 200 döndürür"* diyordu ve **ölçülünce yanlış çıktı**: denenen on bir
ölü slugun (`corlu · kertler · cobanlilar · haciemirogullari · parga ·
nihavend · cildir · hurmuz · derbend · samahi · incular`) **on biri de 302**
döndürdü. ÇAPRAZ İRAN 302 biçimini bildirdi, ölçüm belgeyi düzeltti.
📌 Yani tek istekle, gövde ayrıştırmadan karar verilebiliyor — eski belge
gereksiz yere pahalı bir test öğretiyordu.

**② CANLI SLUG, YANLIŞ MADDE — ve bu testi GEÇER.**
`ordu` HTTP **200** döndürür, `<title>` **"ORDU"** yazar, iki test de temiz —
ama açılan madde **askerî ordu**dur, şehir maddesi `ordu--sehir`'dir.

🔴 **VE BU DESEN ÜÇ KEZ ÖLÇÜLDÜ — üçü de `<title>` testini GEÇİYOR:**
```
ordu     200 · "ORDU"     → askerî ordu       doğrusu  ordu--sehir
saray    200 · "SARAY"    → mimarî saray      doğrusu  saray--sehir
                            (Altın Orda başkenti)
mogadisu 200 · "MOGADİŞU" → İÇİ BOŞ           doğrusu  makdisu
```
⚠️ **Üçüncüsü ayrı bir alt-sınıf:** slug canlı, başlık doğru, **ama gövde
boş.** Yani `<title>` testi *"yanlış madde"*yi de *"boş madde"*yi de
geçiriyor. **Tek çare içeriği OKUMAK.**
⇒ Kod ve başlık *maddenin var olduğunu* söyler, **doğru madde olduğunu
söylemez.** Onu yalnız **içeriği okumak** ele verir.

🔴 **DÖRDÜNCÜ VAKA — `cin` (8 Ağustos 2026):** slug canlı, ama açılan madde
**cin/fıkıh terimi**dir; ülke maddesi **`cin--ulke`**'dir. `ordu` →
`ordu--sehir` ve `saray` → `saray--sehir` deseninin birebir tekrarı.
📌 **Desen artık dörtlendi ve kuralı var: TDV'de bir ülke/şehir adı başka bir
kavramla çakışıyorsa, ülke maddesi `--ulke` / `--sehir` sonekindedir.**

🔴 **BEŞİNCİ VAKA — `torun` (3 Eylül 2026, `PRUSYA-0903` ölçtü):** Polonya
şehri Toruń arandı, slug **200** döndü, ve açılan madde bir **akrabalık
terimi**: *"Torun kelimesinin Arapça'da en bilinen karşılığı … hafîd
olup"*. Denenen 15 sluğun **14'ü 302**, tek `200` ise **yanlış madde.**
⚠️ **Ve bu vaka öncekilerden bir kademe kötü:** `ordu`/`saray`/`cin`de
doğru madde bir sonekle **vardı** (`--sehir` / `--ulke`); burada madde
**hiç yok** — yani sonek kuralı da çare değil. TDV Prusya'nın Polonya
tarafını (Krakov 1525 · Wehlau 1657 · Oliwa 1660 · Danzig · Poznan)
**altı konunun altısında da** kapsamıyor.
⇒ Bu bir **coğrafî boşluktur** ve `§4`e göre akademik kaynak meşrudur;
`kaynak:` alanına açıkça yazılır, **TDV diye gösterilmez.**
