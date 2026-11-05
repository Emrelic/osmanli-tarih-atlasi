# EVREN 4 — yerleşim sahiplik dönemlerinin akademik kaynakla teyidi (ajan brifi)

> **ÖNCE OKU (5 Kas ek):** asıl kural metni aynı klasördeki `DA-BRIEF.md` ("Atlasın sahiplik kuralları",
> "Kaynak sırası"); çelişkide o geçerli. Onun "Araç" bölümündeki sayfa.py yolunu KULLANMA, WebFetch kullan.
> Çıta: TEK okunmuş akademik kaynak yeter (tarihleyen cümle birebir). Erişilemeyen kapılar, deneme:
> Britannica (403), Iranica (404), core.ac.uk, Cambridge, Brill, De Gruyter, BRE. Hükümler: KAYNAKLI / ONERI /
> BULUNAMADI (aradın, yok) / BAKILMADI (aramadın). Yerleşim başına en çok 8-10 araç çağrısı. alinti ≤ 15 kelime.
> **EB1911 yalnız İPUCU** (KAYNAKLI olamaz → ONERI + not "EB1911 ipucu"). KAYNAKLI: TDV, akademik ansiklopedi, hakemli makale.
> **Sayfa çekici (WebFetch yerine/yanında, archive.org tam metni için şart):** PowerShell ile
> `$env:SAYFA_ZAMAN="C:\Users\ikizler1\AppData\Local\Temp\claude\61bcdfa88cf2fd72\b2b9fd61-2d88-4adb-9145-dd2ae139cc0a\scratchpad\arac\.son_istek"; py -I -X utf8 C:\Users\ikizler1\AppData\Local\Temp\claude\61bcdfa88cf2fd72\b2b9fd61-2d88-4adb-9145-dd2ae139cc0a\scratchpad\arac\sayfa.py oku "<url>" "<anahtar1>,<anahtar2>" 400`
> Ayrıca `ia-ara "<sorgu>"`, `ia-oku <kimlik> "<anahtarlar>" 400` (archive.org tam metin — Imperial Gazetteer of India 1908 vb.),
> `ham <url>` (bağlantılar). TDV: slug tireli Türkçe küçük harf (`https://islamansiklopedisi.org.tr/<slug>`); tdv-ara şu an boş dönüyor.
> Iranica doğru biçim: `iranicaonline.org/articles/<slug>`. 403/robots yasağını zorlama.
> **BİREBİR ALINTI = sayfa.py:** WebFetch sayfayı modelle özetler; ondan gelen "alıntı" birebir olmayabilir. KAYNAKLI
> hükmünün `alinti`sını sayfa.py `oku` çıktısından (ham metin) kopyala. Yalnız WebFetch ile okuduysan not'a "WebFetch özeti" yaz.
> **HANGİ UÇ (EMRELİC, 5 Kas gece):** her satıra `"uc": "f" | "t" | "f+t"` alanı ekle = alıntının tarihlediği uç.
> KAYNAKLI yalnız alıntı dönemin **f** ucunu (o devlete geçişi; ya da öneri hangi ucu değiştiriyorsa O ucu) ve o olayı tarihliyorsa.
> Alıntı yalnız öteki ucu tarihliyorsa (ör. satır f'yi teyit/değiştiriyor ama alıntı t'yi veriyor) → ONERI, not'a "alıntı yalnız t ucunu tarihliyor".
> **HİCRÎ (EMRELİC gece-79):** atlas TEK tabular varyant kullanır: Perşembe epoch (1 Rebîülevvel 923 = 1517-03-23). ic_not ±1-2 gün (rü'yet).
> **JSTOR DİZİNİ BİREBİR (EMRELİC gece-76):** JSTOR tam metin dizininin verdiği birebir yayın cümlesi (model/arama motoru yeniden
> ifadesi değil) okunmuş metin sayılır. Tek dizin isabeti → KAYNAKLI ama not'a "[JSTOR dizini birebir, tek isabet — çekinceli;
> makale gövdesi açılmadı]". İki bağımsız hakemli isabet aynı günü veriyorsa → KAYNAKLI, not'a "[çift kaynak: …; JSTOR dizini
> birebir, gövde açılmadı]". Google/Bing arama özeti bu sınıfa girmez. TDV arama sonuç sayfasının madde içi birebir parçaları
> da bu sınıftadır (iki bağımsız madde → KAYNAKLI; not "madde gövdesi açılmadı"). Hicrî yıl varsa hicrî kural öncelikli.
> **İpucu sayılanlar (KAYNAKLI vermez):** Vikipedi, EB1911, ESBE, Enciclopedia Italiana 1929-37, **Imperial Gazetteer of India 1907-09 (IGI; ipucu-artı — modern akademik teyit olmadan ONERI, not "IGI ipucu")**, EBSCO Research Starters, SAHO (sahistory.org.za), kurum portalları, arama özeti.
> **AÇILAMAYAN PDF:** metni çıkmayan her PDF'in tam URL'sini BULUNAMADI satırının `kaynak` alanına yaz (başka makinede okunacak).
> **Devletin kendi resmî tarih yayını** (assemblee-nationale.fr, history.state.gov, legislation.gov.uk, hükûmet siteleri) birebir cümleyle KAYNAKLI verir (gece-91); kurum/müze/turizm portalı vermez.
> Tarih derneği dergileri (society journal, hakemlilik teyitsiz) İPUCU (gece-96). Huambo için 1902-11-04 KAYNAKLI (dos Santos, Cantareira).
> **ÜLKE DÜZEYİ KAYNAKLI** şartı (gece-98): yerleşim o tarihte ayrıca el değiştirmemiş olmalı (alt-bölge istisnası varsa ONERI). Himaye anlaşması → v:, yerel polity s: sürer.
> **Larousse = İPUCU-ARTI** (gece-90); 19. yy akademik makaleler (Ambrosetti 1897 vb.) EB1911 sınıfı ipucu.
> Atlas yerleşim kaydında `d` boşsa ve alan `d` ise, çıktıda `d: ""` bırak (OSMANLI yazma).

Proje: eğitim amaçlı tarih atlası. Her yerleşimin hangi tarihten hangi tarihe hangi devlete ait olduğu
dönemler hâlinde yazılı (`s:` sahiplik, `d:` Osmanlı doğrudan, `v:` Osmanlı'ya tâbi, `isg:` işgal).
Görevin: sana verilen yerleşimlerin **hedef** dönemlerini akademik kaynakla teyit etmek. Veri dosyalarına
YAZMA; yalnız çıktı JSON'unu yaz. Commit yok.

## Girdi
JSON listesi. Her yerleşim: `ad`, `dosya_satir`, koordinat, `zincir` (bütün dönemler, mevcut kaynak/ic_not
ile), `hedef` (teyit edeceğin dönemler), `kunye` (zincirdeki devletlerin atlas künyesi f–t).

## Yöntem (sırayla)
1. **Kayıt düzeyinde kaynak varsa önce onu oku** (zincirdeki `kaynak:` URL'si/eseri). Uygunsa teyit et.
2. **1 yerleşim = 1 TDV maddesi:** önce TDV İslâm Ansiklopedisi'nde yerleşimin maddesini ara
   (`https://islamansiklopedisi.org.tr/arama/?q=<ad>`; sonuç sayfasından madde slug'ını bulup aç). Bir madde
   o yerleşimin birçok dönemini kapatabilir. TDV yoksa ya da yalnız yıl veriyorsa sıradakine geç.
3. Kaynak merdiveni: ① TDV → ② İSAM (Osmanlı Araştırmaları) → ③ TTK (Belleten) → ④ DergiPark hakemli
   tarih dergileri → ⑤ YÖK Tez → ⑥ akademik monografi/üniversite yayını → ⑦ yabancı akademik
   (Encyclopaedia Iranica, Encyclopaedia of Islam (Brill), Britannica (ikincil kabul), Treccani, Cambridge/
   Oxford yayınları, Imperial Gazetteer of India (1908-31, DSAL Chicago), resmî kurum tarih sayfaları).
   **Vikipedi, blog, forum, haber sitesi, YZ metni dayanak OLAMAZ** — yalnız ipucu.
4. Sayfayı WebFetch ile gerçekten aç ve oku. Arama özeti okunmuş sayılmaz. Rakamı taşıyan cümlenin NEYİ
   tarihlediğini oku (kuruluş mu, fetih mi, idari bağlanma mı).

## Atlas kuralları (öneri yaparken uy)
- **Tarih uydurma.** Kaynak yıl diyorsa öneri `YYYY` ya da `YYYY-01-01` + "yalnız yıl"; ay diyorsa `YYYY-MM`.
  Gün yalnız kaynak gün veriyorsa.
- **TAHRİR ÖLÇÜTÜ (`isg:` mi `s:` mi):** ele geçiren orayı kendi idaresine kattıysa (vergisi, defteri,
  idarî birime bağlanması) → `s:`/`d:` (fetih). Kendi toprağı saymıyorsa, eski sahibin iddiası sürüyorsa,
  devir geçici/askerî ise → `isg:`. Osmanlı için: tahrir defterine girdi mi / sancağa bağlandı mı.
  Kaynak susuyorsa seçme, `not`a "tahrir ölçütü: kaynak susuyor" yaz. `isg`/`s` önerisinde `not`a ölçütün
  hangi maddesine dayandığını yaz.
- **TEK ÖLÇÜ (antlaşmalı devir günü):** devralan devlet toprağı zaten fiilen yönetiyorsa **imza günü**,
  yönetmiyorsa **teslim (fiilî devir) günü**; yürürlük günü yalnız `not`a. Mütareke/ön barış hukukî devir
  içermiyorsa sayılmaz.
- **Künye kontrolü (hayalet devlet):** dönemin `d`'si künyenin f–t dışına taşıyorsa `not`a "KÜNYE AŞIMI:
  dönem f/t, künye f/t" yaz (öneriyi kaynak belirler, künye değil).
- İki akademik kaynak çelişirse ikisini de yaz, seçme.

## Çıktı (DADIM biçimi) — tek JSON dosyası
Nesne: yerleşim adı → satır listesi. Her **hedef dönem** için en az bir satır:
```json
{"<ad>": [{"dosya_satir": "data/x.js:123", "alan": "s", "d": "<devlet id>", "f": "<hedefteki f>",
  "t": "<hedefteki t>", "hukum": "KAYNAKLI|ONERI|BULUNAMADI",
  "kaynak": "<yazar, eser/madde, yayın, yıl, sayfa — URL>", "alinti": "<okunan cümle, ≤ 30 kelime>",
  "oneri": {}, "not": "<ne teyit edildi: f ucu mu t ucu mu, yıl mı gün mü; çelişki; tahrir/TEK ÖLÇÜ>"}]}
```
- **KAYNAKLI:** kaynak dönemi (sahibi ve en az bir ucu) teyit ediyor; `oneri` boş `{}`. Hangi ucun hangi
  hassasiyette teyit edildiğini `not`a yaz.
- **ONERI:** kaynak farklı gün/devlet/alan diyor; `oneri` = `{"f": "...", "t": "...", "d": "...", "alan": "..."}`
  (yalnız değişen anahtarlar). Önerilen her değer kaynaktan okunmuş olmalı.
- **BULUNAMADI:** kabul edilen kaynakta bulunamadı; `kaynak` = bakılan yerler, `alinti` boş.
- Her hedef dönem çıktıda olmalı (eksik satır bırakma). Zincirdeki hedef olmayan dönemlere satır yazma.
- Çıktıyı ara ara (her 4-5 yerleşimde) dosyaya kaydet ki iş kaybolmasın.

Bitince kısa rapor: KAYNAKLI / ONERI / BULUNAMADI sayıları, en önemli 5 ONERI, açılamayan kaynaklar.
