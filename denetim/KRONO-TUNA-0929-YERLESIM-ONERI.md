# KRONO-TUNA-0929 — yerleşim (`s:`/`v:`/`isg:`) önerileri

> 29 Eylül 2026 · ORTAK §1 (b): **tarihte değişim var, haritada yok (ya da yanlış günde)**.
> `data/yerlesimler*.js`e DOKUNULMADI — Oturum 0'ın dosyası. Hepsi koşu ister; biriktirilmek içindir.
> Ölçüm aracı: `girdi.yukle()` ile pencereler okundu (29 Eylül). Her satırda: dosya · yerleşim ·
> bugünkü satır · önerilen satır · kaynak · gerekçe. **Öncelik sırası: Ö-Y1 en yüksek.**
> `kaynak gün: bulunamadı` yazan önerilerde gün UYDURULMADI — koordinatör kaynak bulana dek ya
> yıl-temsilî yazar ya da öneriyi bekletir.

## Ö-Y1 · Eflak/Boğdan 1829-1878 — İbrail ve Yergöğü tâbi değil BAĞIMSIZ boyanıyor 🔴

Bugün (yerlesimler.js):
```
İbrail              s {f:"1829-09-14", t:"1859-01-24", d:"eflak"}   s {f:"1859-01-24", t:"1881-03-26", d:"romanya"}
Yergöğü (Giurgiu)   s {f:"1829-09-14", t:"1859-01-24", d:"eflak"}   s {f:"1859-01-24", t:"1881-03-26", d:"romanya"}
Bükreş (ve Eflak'ın öteki 10 noktası)   v {f:"1462-06-01", t:"1878-07-13", kid:"eflak", statu:"vassal"}
```
⇒ Edirne'den (1829) Berlin'e (1878) kadar **iki Tuna kasabası `s:` ile kendi renginde (bağımsız),
Eflak'ın geri kalanı `v:` ile Osmanlı tâbii** görünüyor. Aynı voyvodalık iki statüde. 1859-1878'de
ise İbrail/Yergöğü `romanya` (bağımsız renk) iken Bükreş hâlâ `v: kid:eflak`.
**Önerilen:** İbrail ve Yergöğü için `s:` yerine
`v:{f:"1829-09-14", t:"1878-07-13", k:"Eflak Voyvodalığı", statu:"vassal", kid:"eflak"}` ve
`s:{f:"1878-07-13", t:"1881-03-26", d:"romanya"}`.
**Kaynak:** TDV `edirne-antlasmasi` / `ibrail` / `yergogu`: üç kaza 1829'da *"Eflak prensliğine bırakıldı"*
(tâbi prensliğe, bağımsızlığa değil); TDV `romanya`: *"Boğdan-Eflak bağımsızlığını kaybedip Berlin
Kongresi'ne kadar (1878) Osmanlılar'a bağlı kaldı."*
**İkinci soru (koordinatöre):** 1859/1862'den sonra Eflak+Boğdan'ın bütün `v:` pencerelerinde `kid`
`eflak`/`bogdan` mı kalmalı, `romanya` mı olmalı? `eflak` ve `bogdan` künyeleri `t:1859-01-24`'te
bitiyor ⇒ 1859-1878 arası `kid:"eflak"` künyesi ölmüş bir devlete işaret ediyor (hayalet tâbi). Öneri:
bütün Memleketeyn `v:`lerini `1859-01-24`te bölüp ikinci parçayı `kid:"romanya"` yapmak. Ölçüldü:
**15 nokta** (`kid:eflak` 11 · `kid:bogdan` 4), hepsi `t:"1878-07-13"`: Bükreş · Tırgovişte · Piteşti ·
Slatina · Buzău · Rimnik-i Sârat · Krayova · Tırgu Jiu · Rimnik · Turnu Severin · Kımpulung · Yaş ·
Roman · Birlad · Kalas. (Hayalet devlet sınıfı, CLAUDE.md §3.5 — `denetle.py` 4c bunu `v:kid` için
sormuyor olabilir; ölçülmedi.)

## Ö-Y2 · Kili 1856-1878 — Paris'te Boğdan'a dönen kazalardan biri, haritada Rusya'da kalmış

Bugün (yerlesimler.js): `Kili  s {f:"1812-05-28", t:"1917-03-15", d:"rusya"}` ·
komşuları Kahul/İsmail/Bolgrad'da `v {f:"1856-03-30", t:"1878-07-13", k:"Boğdan Voyvodalığı (Cenûbî Besarabya…)"}` VAR.
**Önerilen:** Kili'de `s: rusya` penceresini `1856-03-30`te kes, `v:` (komşularıyla birebir aynı satır)
ekle, `s:{f:"1878-07-13", t:"1917-03-15", d:"rusya"}` ile devam et.
**Kaynak:** TDV `kili`: *"Paris Antlaşması ile (1856) Rusya, Besarabya'nın Kili dahil Kahul, İsmâil ve
Bolgrad kazalarından mürekkep kısmını … Boğdan beyliğine terketti."* Gün: TDV `paris-antlasmasi`
(30 Mart 1856). `kronoloji_sinir_avrupa_orta.js`teki 1857-04-11 Kişinev senedi sınır işaretlemesidir.

## Ö-Y3 · Erdel 1551-1556 Habsburg ara dönemi — haritada yok

Bugün: Erdel (Kaloşvar) · Erdel Belgradı · Brassó · Segesvár (yerlesimler.js / _ek29.js)
`v {f:"1541-08-29", t:"1687-08-12", statu:"vassal"}` — 146 yıl kesintisiz Osmanlı tâbii.
**Önerilen:** her dört noktada `v:`yi iki parçaya böl, araya
`s:{f:"1551-07-26", t:"1556-03-12", d:"macaristan-habsburg"}`.
**Kaynak:** History of Transylvania, c. I (ed. B. Köpeczi, MTA), s. 102 — 19 Haziran 1551 İzabella'nın
feragati; **26 Temmuz 1551** Kolozsvár diyeti Ferdinand'ın idaresini tanıdı; **12 Mart 1556**
Szászsebes diyeti János Zsigmond'u yeniden seçti. Kolozsvár (= Erdel/Kaloşvar) diyetin yeridir.
**Not:** Lugos'un `v:`si zaten `1551-07-01`de bitiyor (TDV `timisvar`) — kaynak aynı olayı gösteriyor.
Varad ve Yanova'nın aynı dönemi ölçülmedi (Tisza ötesi; HT'ye göre Várad Nisan 1557'ye kadar direndi).

## Ö-Y4 · Çehrin 1669-1678 — Doroşenko'nun Osmanlı himayesi ve Rus garnizonu haritada yok

Bugün (yerlesimler.js): `Çehrin (Çigirin)  s {f:"1569-07-01", t:"1678-08-21", d:"lehistan"}`.
Aynı bölgede Braslav'da (yerlesimler_ukrayna_0916.js) zaten VAR:
`v {f:"1672-10-18", t:"1699-01-26", k:"Sağ Yaka Ukrayna (Osmanlı himayesindeki hatmanlık)", statu:"vassal"}`.
**Önerilen (Çehrin):**
```
s {f:"1569-07-01", t:"1669-05-01", d:"lehistan"}         ← aşağıdaki not: 1648-1667 ayrı soru
v {f:"1669-05-01", t:"1676-09-19", k:"Sağ Yaka Ukrayna (Osmanlı himayesindeki hatmanlık)", statu:"vassal", kid:"zaporojye"}
s {f:"1676-09-19", t:"1678-08-21", d:"rusya"}
```
**Kaynak:** EoU «Doroshenko, Petro»: himaye padişahça **1 Mayıs 1669**'da ilan; Doroşenko Çehrin'de
**19 Eylül 1676**'da Samoyloviç'e teslim. TDV `cehrin-seferi`: *"Doroşenko'nun hatmanlık merkezi olan
Çehrin'i Ruslar'a teslimi"*; fetih 21 Ağustos 1678. Braslav'ın `f:1672-10-18` (Bucaş) seçimi ile
tutarlılık için Çehrin'de de `1672-10-18` kullanılabilir — ama TDV `cehrin-seferi` Çehrin'in
Doroşenko'nun merkezi olduğunu 1668'den verir; 1669-05-01 EoU'nun ilan günüdür. Hüküm koordinatörde.

## Ö-Y5 · Hetmanlık 1648-1667 haritada hiç yok (soru, öneri değil)

Bugün: Poltava `lehistan → rusya` **1654-01-18**; Çernigov ve Baturin `lehistan → rusya` **1654-01-08**;
Kiev `lehistan` 1569 → **1667-02-09**; Çehrin `lehistan` → 1678. Yani ① 1648-1654 Hmelnitski devleti
(başkenti Çehrin) haritada Lehistan boyalı; ② aynı olay (Pereyaslav) üç noktada İKİ ayrı günde
(Jülyen 8 Ocak / Gregoryen 18 Ocak — VERI-YAPISI takvim kuralı); ③ Kiev 1654'te Moskova garnizonu
aldığı hâlde 1667'ye kadar Lehistan.
**Soru:** Hetmanlık `s:` ile ayrı renkte (`zaporojye` ya da açılırsa `kazak-hetmanligi`) mi gösterilsin,
yoksa atlas 1654 sonrası Rus tâbiliğini `rusya` ile mi bırakmalı? Kaynak: EoU «Hetman state»
(1648'den; başkentler Çehrin 1648-63, Hadiç 1663-8, Baturin 1669-1708, Hluhiv 1708-34; *"from 1654
nominally a vassal of Muscovy"*). En az ② düzeltilmeli: üç nokta tek takvimle aynı güne.

## Ö-Y6 · Besarabya ve Erdel 1918 — yıl-temsilî ve ateşkes günü

- Besarabya (9 nokta: Akkirman · Bender · Bolgrad · Hotin · İsmail · Kahul · Kili · Orhei · Soroka)
  `romanya-kralligi` **1918-01-01** (yıl-temsilî). **Önerilen:** `1918-03-27` —
  EoU «Bessarabia»: *"annexed by Romania on 27 March 1918"* (takvim beyansız; Rusya o gün Gregoryen'e
  geçmişti, Besarabya meclisi Jülyen kullanıyordu — `kronoloji_sinir_avrupa_orta.js` 1918-04-08 yazar,
  DUZELTME.md). ⚠️ **Lugos ve Orsova** (Banat, Besarabya DEĞİL) da aynı `1918-01-01`le Romanya'ya
  geçiyor — Banat'ın öteki noktaları (Temeşvar) `1918-11-11` taşıyor; aynı bölge iki günde. Ölçülmedi.
- Erdel ve Banat (Kaloşvar · Gyulafehérvár · Brassó · Segesvár · Szatmár · Varad · Yanova · Temeşvar)
  `romanya-kralligi` **1918-11-11** (Compiègne ateşkesi günü — Erdel'le ilgisi yok). **Önerilen:**
  `1918-12-01` (Gyulafehérvár kararı; TDV `romanya` *"Böylece Büyük Romanya … oluştu (1 Aralık 1918)"*).
  ⚠️ **Temeşvar** (Banat) 1918 sonunda Sırp işgalindeydi ve Romanya'ya 1919'da geçti — kaynak gün:
  **bulunamadı** (bu pakette ölçülemedi); Temeşvar'ın 1918-11-11'i büyük olasılıkla yanlış ama
  düzeltme önerilmiyor, KRONO-ORTA-AVRUPA/SIRBİSTAN'a soru olarak iletilsin.
- Bukovina (Suçava, Çernovitz) `1918-11-28` — EoU «Bukovyna» ile BİREBİR doğru (28 Kasım kongresi).

## Ö-Y7 · Memleketeyn 1769-1774 Rus işgali — Yaş ve Bükreş'te yok

Bugün: Hotin'de `isg {f:"1769-09-19", t:"1774-07-21", d:"rusya"}` VAR; Yaş ve Bükreş'te bu savaşın
`isg:`i YOK (Yaş: 1739, 1806, 1828 · Bükreş: 1789, 1806, 1828 var).
**Önerilen:** Yaş ve Bükreş'e `isg {f:"<?>", t:"1774-07-21", d:"rusya"}`.
**Kaynak gün: bulunamadı** — TDV `hotin` (1769), `kili` (1184/1770) yalnız yıl verir. Öteki `isg:`lerde
kullanılan ESBE «Турецкие войны России» büyük olasılıkla günü taşır; bu pakette okunmadı.

## Ö-Y8 · Kili 1448-1465 Eflak'ta — haritada Boğdan

Bugün: `Kili  s {f:"1359-01-01", t:"1456-06-01", d:"bogdan"}` → `v kid:bogdan`.
TDV `kili`: *"Kili Kalesi 1448'den sonra tekrar Eflak Voyvodalığı'na geçti"*; Stefan onu
**24 Ocak 1465**'te aldı. **Önerilen:** `s:{f:"1448-01-01", t:"1456-06-01", d:"eflak"}` +
`v:{f:"1456-06-01", t:"1465-01-24", kid:"eflak"}` + `v:{f:"1465-01-24", t:"1484-07-15", kid:"bogdan"}`.
(1448 yıl-temsilî; TDV gün vermez.) Düşük öncelik — tek nokta, kısa pencere.

## Ö-Y9 · Küçük düzeltmeler (yıl-temsilî ile kaynak arasında)

| yerleşim | bugün | kaynak | not |
|---|---|---|---|
| Yergöğü | `s eflak` biter **1450-01-01** | TDV `yergogu`: 853 (1449) | hicrî 853 = Şubat 1449–Şubat 1450; ikisi de temsilî, madde 1449'da |
| Silistre | `romanya-kralligi` **1913-05-30** | Londra Antlaşması günü — Silistre Bulgar'dı, Osmanlı'yla ilgisi yok | Silistre'yi Romanya'ya veren Petersburg protokolü (Mayıs 1913) — **kaynak gün: bulunamadı** |
| Hotin | `v kid:bogdan` biter **1713-06-24** | TDV `hotin`: *"1711'den sonra Boğdan'dan alınıp doğrudan Osmanlı idaresine"* | 1713-06-24 Edirne Antlaşması günü (TDV `prut-antlasmasi`); tutarlı olabilir, ölçülmedi |
| İbrail | `v kid:eflak` biter **1538-09-01** | TDV `ibrail`: 1538-1540 arası, kesin yıl yok | temsilî, dokunulmasın; madde 1538-01-01'de |
