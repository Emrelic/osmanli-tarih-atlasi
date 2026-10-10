# PAKET-1010 — dört kıta şartnamesi (YILDIRIM BAYEZIT, 10 Ekim 2026 08:10)

🔴 **YALNIZ SANA AİT BÖLÜMÜ OKU.** Dördünü okumak dört kat token yakar ve
hiçbirini daha iyi yapmaz. Hangi bölüm senin olduğu görev mesajında yazılı;
yazılı değilse tahtadan `--kim "<ADIN>"` ile sor.

**HEPSİ İÇİN GEÇERLİ — altı sınır:**
```
① data/ ve arac/ DONUK — KOŞU 22b sürüyor (§9.1 ③). YALNIZ OKU; yazacağın
   şey DİFF ve kendi raporun. Hiçbir ağaçta motor tuzuna dokunma.
② ÖLÇÜM ZEMİNİ ayrı worktree + origin/main (§1):
      git worktree add <yol> origin/main --detach
   ve raporunun başına TABAN COMMIT + SAAT. Ana checkout ölçüm zemini DEĞİL.
③ ARA DOSYALAR KENDİ DİZİNİNDE (scratchpad ya da kendi worktree'n) — §7.
   Paylaşılan `denetim/` yalnız TESLİM içindir. Bu gece bir sınav tam bu
   yüzden kirlendi (17/18 verdi, sebebi ölçüm değil kirlenmeydi).
④ ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILIR ve COMMITLENİR — ve EVRENİYLE birlikte.
   🔴 Bu gece ölçüldü: aynı öngörü, evrene göre hem TUTTU hem ÇÖKTÜ.
   Evreni yazılmayan öngörü yanlışlanabilir değildir.
⑤ TAVAN ÖNERİLİR, YAZILMAZ (§3.4 ④). Sen ölçersin, koordinatör yazar.
⑥ TESLİM TEK MESAJ (§7.1 ④): ① ne ölçtüm (sayıyla) ② ne bulamadım
   (`bulunamadı` bir SONUÇTUR) ③ ne istiyorum. Sonuna: "bekçimi öldüreyim mi?"
```
⚠️ **BU GECENİN EN PAHALI DERSİ — hepinize:**
> **Bir kaydın KENDİ notu, kendi hakkında bir KAYNAK DEĞİLDİR.** `§4` *"atlas
> referans değildir, mamul üründür"* der ve bu **notlara da** uygulanır.
> Ölçülen vaka: Klagenfurt'un notu *"1809-1813 İlirya illeri yazılmadı"*
> diyor; EB1911 yalnız **Yukarı** Karintiya'nın Fransa'ya geçtiğini söylüyor
> ve Klagenfurt **Aşağı** Karintiya'da ⇒ notun itirafı YANLIŞ olabilir.
> ⇒ Notun söylediği her şey bir ADAYDIR, bir bulgu değil.

---

## §A — ANADOLU MÖ HÖYÜK KATMANI (Emre onayladı)

Emre'nin kararı: *"anadolu mö önerini kabul ediyorum"* — yani **(i)** Anadolu
MÖ'sünün atlasın mevcut noktalarıyla KAPALI olduğunun beyanı (bunu
koordinatör yazıyor) **+ (ii) höyük katmanı** (senin işin).

**ÖLÇÜLMÜŞ ZEMİN** (`oturumlar/KAMPANYA-SUMER-2000.md §12.1`): atlasın
bugünkü noktalarıyla Anadolu MÖ'sünde komşu mesafesi **455-620 km** (kapalı)
· höyük katmanıyla **149-186 km** (sınır) · MÖ 500'de **87 km** (açılabilir).
Höyük fiyatı ölçülmüş: **118 nokta ⇒ SINIR · 498 nokta ⇒ MÖ 500 AÇ.**

**İSTEDİĞİM:** `denetim/HOYUK-ANADOLU-1010.md` + `.diff`
```
① ADAY LİSTESİ — Anadolu'nun MÖ yerleşim höyükleri, KAYNAKLI.
   Hedef 118-150 nokta. Her nokta için:
   ad · lat/lon · kur: (varsa) · bit: (varsa) · kaynak: ADIYLA
② 🔴 KAYNAK: TDV Anadolu için BİRİNCİL (§4) ama höyük arkeolojisinde
   kapsamı dardır — TAVO · Pleiades · TAY (Türkiye Arkeolojik Yerleşmeleri)
   · kazı yayınları meşrudur ve `kaynak:`a AÇIKÇA yazılır.
   Vikipedi TEK DAYANAK DEĞİLDİR. Bulunamadıysa `bulunamadı` YAZ.
③ MÜKERRER TARAMASI ŞART: her yeni noktadan önce ad (normalleştirilmiş,
   `denetim/ARAC-NORMAL-0903.py`) + **3 km** yarıçap. Atlasta 4300 nokta var.
   📌 Ölçülen tuzak: bir kıta "Kiş (Kish)" diye arayınca atlastaki
   **Kays adası**nı buldu — 1.127 km uzakta, aynı ad.
④ KUR:/BIT: 🔴 NEGATİF YIL — astronomik yıl numaralandırması:
   MÖ 3000 = `-2999`, ve **yıl 0 VARDIR**. MÖ/MS çevirisini elle yapma.
⑤ 🔴 HİÇBİR NOKTAYI `s:`SİZ YAZMA. Sahipsiz nokta = haritada DELİK, ve
   Değişmez 1 bunu GÖRMÜYOR (ölçüldü: 22 noktanın 22'si boş kalıyor,
   ~62.400 km²). Sahip ölçemiyorsan `bos:` alanını kullan (sabit liste:
   kabile · devletsiz · veri-yok · insansiz · hata) ve BEYAN et.
⑥ YOĞUNLUK ÖLÇÜMÜ: diff uygulanmış ağaçta Anadolu MÖ komşu mesafesi
   p50/p95 KAÇ oldu? 149-186 bandına girdi mi? Girmediyse kaç nokta eksik?
```
⚠️ Nokta dosyası `data/`dedir ve DONUK ⇒ sen `denetim/*.diff` üretirsin,
uygulamazsın. `git apply --check` TEMİZ tutulur.

---

## §B — KAYNAKSIZ 1841: KOMŞU TANIKLIĞI TARAMASI

**NİÇİN:** atlasta ~1841 kayıt, ilk halkası `1281-01-01`de başlıyor ve
kaynaksız. Gecenin ölçümü: bunların **%39'unda (26-54) ilk halka YANLIŞ** —
gerçek başlangıç daha erken. 554 kaydı tek tek kaynaklamak bir gecelik iş
değil. **Ama bir KONTROL GRUBU bulundu ve ucuz bir alt sınıf açıyor:**
```
BAĞDAT     s[0].f = 1258-02-10   (KAYNAKLI — Hülâgû'nun alışı)
8 KOMŞUSU  s[0].f = 1281-01-01   AYNI SAHİP · AYNI KUTU · AYNI İLHANLI OLAYI
⇒ o sekizin 1281'i bir İHMAL, bir hassasiyet beyanı DEĞİL
```

**İSTEDİĞİM:** `denetim/KOMSU-TANIK-1281-1010.md` + `.json`
```
① TARAMA (mekanik, kapı DEĞİL):
   kayıt K'nın s[0].f == 1281-01-01 ve kaynaksız
   VE  yarıçap R içinde bir komşu N var ki:
         N.s[0].d == K.s[0].d      (AYNI SAHİP)
         N.s[0].f  < 1281-01-01    (DAHA ERKEN)
         N.s[0].kaynak dolu ve `bulunamadı` ile BAŞLAMIYOR
   ⇒ K bir ADAY. R'yi 50/100/200 km'de ölç, üçünü yan yana bas.
② SINIFLA: aynı olay mı (komşunun kaynağı K'yı da kapsıyor olabilir) yoksa
   yalnız yakınlık mı? 🔴 Bu ayrımı YAPAMIYORSAN `ÖLÇÜLEMEDİ` yaz — ADAY
   üretmek yeter, hüküm vermek zorunda değilsin.
③ 🔴 `§4`ün KOMŞU GÜNÜ kuralı ŞARTLI SERBESTTİR, oku ve HARFİYEN uygula:
   komşunun günü kendi kaynağına dayanıyor + hedefte kaynak gün vermiyor +
   AYNI olay/süreç + yakın konum ⇒ kayda `"gün komşudan: <komşu> ·
   <kaynağı>"` YAZILIR. **Zincirleme devralma YASAK** (komşudan alınmış bir
   günü üçüncü bir kayda devretme).
④ İLK 20 ADAYI ELLE OKU ve isabet oranını yaz (öngörünü ÖNCE yaz).
⑤ KALAN BORÇ: aday olmayan kaynaksız-1281 kayıtlarının sayısı — bu
   **beyanlı borç** olarak raporlanır, sessiz kalmaz.
```
🔴 **BU BİR KAPI DEĞİLDİR.** `denetle.py`ye BAĞLAMA, tavan yazma. Dönemin
başının 1281 olması kendiliğinden ihlal değil — `§4` pencere uçlarının
*"ölçüm değeri değil sınır işareti"* olduğunu söylüyor.

---

## §C — `kur:` SINIFI: sahiplik yerleşimden önce başlamaz

**KOORDİNATÖR KARARI (10 Ekim):** sahiplik halkası yerleşim VAR OLMADAN
başlamaz. Üç yol, sırayla sınanır:
```
① erken sahiplik ADI OLAN bir ÖNCEL yerleşime mi ait → AYRI KAYIT olur,
   erken halka ORAYA yazılır (modern noktaya değil)
② yalnız BÖLGE sahipliği mi, yerleşim yok mu → halka `kur:`da başlar;
   öncesi bu noktadan BOYANMAZ (§2: bölge en yakın peteğe emilir)
③ ölçülemiyorsa → `kur:` esas, fark `ic_not`ta BEYAN
```
🔴 **VE BİR ŞART, atlanırsa düzeltme HATA ÜRETİR:** halkayı kısaltmak
**delik açabilir** (`D205`: *kısaltmak delik açar*). Kısaltmadan önce o
dönemi **komşu peteğin kapatıp kapatmadığı** ölçülür; kapatmıyorsa kısaltma
değil **`__BOSLUK__` beyanı** gelir.

**EVREN — bilinen dört kalem, ama tarama bunlarla SINIRLI DEĞİL:**
`Mersin` (1671 ↔ `kur:` ~1836) · `Batna` · `Aynı Beydâ` · `Berc Bû Areric`.
⚠️ `data/yer_yama_cukurova_isg_0907.js` BAYATTIR — Mersin için onu
uygulamak 10 Eylül'de budanmış bir *"164 yıllık hayalet"*i geri getirir.

**İSTEDİĞİM:** `denetim/KUR-SINIFI-1010.md` + `.diff`
```
① TARA: `kur:` alanı dolu VE bir `s:`/`isg:` halkası `kur:`dan ÖNCE
   başlayan bütün kayıtlar. Sayıyı ve dağılımı bas.
   📌 `Değişmez 5` bu soruyu ZATEN soruyor (5a/5b/5c) — çıktısını OKU,
   sıfırdan yazma. Tolerans **400 gün** ve yuttuğunu ölç (§3.4 ⑥).
② HER KALEMİ üç yoldan birine SINIFLA, gerekçesiyle.
③ ① yolu için: öncel yerleşimin ADI ve kaynağı — yoksa ② ya da ③.
④ Her kısaltma için DELİK ÖLÇÜMÜ (yukarıdaki şart).
```

---

## §D — YEDİ SAHİPSİZ ŞEHİR

`denetim/`de bekleyen yedi sahipsiz şehir kalemi var (KASA İRTİBAT bildirdi).
**İlk işin onları ADIYLA bulmak ve LİSTELEMEK** — hangi dosyada, hangi
tarihte, niçin sahipsiz.

**İSTEDİĞİM:** `denetim/SAHIPSIZ-7-1010.md`
```
① YEDİSİNİ ADIYLA bul (tahtada ya da denetim/*.md'de anılıyor). Bulamazsan
   `py arac/denetle.py` Değişmez 1 çıktısından 309 sahipsizin dökümünü al
   ve §1.5'in "beklenen 309"u ile karşılaştır — FAZLA olanlar bunlar.
② Her biri için: var olduğu tarihte sahibi KİM olmalı · kaynak ADIYLA
③ 🔴 ÜÇ SEÇENEK, ve üçü de meşru:
   · sahip BULUNDU → `s:` dilimi (kaynaklı)
   · yerleşim o tarihte YOKTU → `kur:`/`bit:` düzeltmesi (VARLIK kusuru,
     sahiplik kusuru DEĞİL — çareleri ayrı)
   · devlet teşkilâtı yoktu → `bos:"devletsiz"` BEYANI
④ Hiçbirini ölçemediysen `ÖLÇÜLEMEDİ` yaz — **boş küme her öngörüyü
   doğrular**, "temiz" demek yok.
```
📌 Değişmez 1 ihlali = **haritada DELİK**; bu yüzden sahipsizlik, sayısı
§1.5'teki beklenenin üstüne çıktığı an durdurucudur.
