# P84-TIMUR-SAHIPLIK-1006 — H-0001(b) · H-0006 · H-0011 (Timur dönemi sahipliği)

Ağaç: `C:\atlas-p84-timur` (detached, `origin/makine/umit` @ `cdc1ccea`). Salt okur; veri
dosyasına yazılmadı. Ölçüm aracı: `denetim/ARAC-P84-TIMUR-SAHIP-1006.py` (salt okur,
`girdi.yukle()`; kökünü `__file__`den bulur). TDV gövdeleri bu ölçümde (6 Ekim 2026)
çekildi: `denetim/P84-TIMUR-SAHIPLIK-1006-tdv/*.txt` (ilk satır = istenen URL | dönen URL).
Görseller AÇILDI: H-0001-1, -4, -5, -6, -8 · H-0006-1 · H-0011-1 (metin hangi günü/yeri
gösterdiğini söylemiyordu). H-0001-2/3/7 açılmadı (küçük, ufuk sorusu — (a) kalemi).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı, sonra karşılaştırıldı

**Mükerrer kapısı (ölçüldü):** `denetim/` altında bu üç sorunun HÜKMÜ yok. Yakın iş:
`KRONO-DOGU-ISLAM-0929-YERLESIM-ONERI.md` #2 Kemah · #3 Divriği · #4 Arapkir vd. · #12
Bistâm/Dâmgan/Simnân · #16 Zencan · #20 Serbedârî; `YERLESIM-BIRLESTIR-0930.md` DOI-2/3.
Ölçüm: DOI-2 (Kemah mutahharten 1402-1410) ve DOI-3 (Divriği 1398→1401 memluk) veride
UYGULANMIŞ; #12 (Serbedârî hayaleti) UYGULANMAMIŞ — bu raporun tek diff'i odur.

| madde | öngörü (sayı · mekanizma) | ölçüm | sonuç |
|---|---|---|---|
| H-0001(b) | 2-5 yerleşim · Ankara günü Osmanlı→memluk; Kemah–Erzincan arası şerit noktasızlık | **1 yerleşim (Divriği)**, kırılma **1401-01-01**, Ankara günü değil | sayı TUTMADI (alt sınırın altı), mekanizma YARI tuttu: Ankara değil 1401 dönüşü; noktasızlık var ama küçük |
| H-0006 | ≥ 3 kusur: Serbedârî hayaleti · tâbilik/ilhak · Gence | **2 kaynaklı kusur** (Serbedârî hayaleti 3 nokta · Mâzenderan 1392 fethi YOK 4 nokta) + 1 yapısal sınır (yabancı tâbilik kademesi yok) | sayı sınırda; Gence bu kutuda değil (Karabağ) — ÖLÇÜLMEDİ |
| H-0011 | ayrı kimlikler var; 1-2 beylik noktasızlıktan Karaman'a emilir | ayrı kimlikler VAR (karaman 20 · candar 13 · germiyan 8 · aydın 8 · menteşe 6 · teke 2 · saruhan **1**); "komple Karaman" **TDV ile DOĞRU**; ters yönde 1 kusur: Teke-ili | mekanizma ÇÜRÜDÜ: emilme değil, Timur'un bilinçli bağışı |

---

## 1. H-0001(b) — Sivas'ın doğusundaki Memlûk toprağı

### ÖLÇÜM
Görseller (açıldı): **-5** Timur'un Sivas seferi oku (1400); **-6** Sivas ile Kemah
arasında Memlûk rengi (`#f09087`), Malatya/Arapkir Osmanlı koyu kırmızı, Kemah
Mutahharten zeytinî ⇒ gün **[1401-01-01, 1401-02-01)**; **-8** Kemah ve Erzincan Osmanlı,
arada "MEMLÛK" ⇒ gün **[1401-02-01, 1402-07-28)**.

Kutu 38,2–40,6K × 36,3–40,2D, 18 yerleşim, 9 gün tarandı. Memlûk'e geçen **tek** nokta:

| yerleşim | dosya:satır | zincir (1398-1416) |
|---|---|---|
| **Divriği** | `data/yerlesimler.js:2284` | memluk →1398-01-01 · **d: 1398-01-01→1401-01-01** · **memluk 1401-01-01→1516-08-24** |
| Kemah | `data/yerlesimler.js:1491` | mutahharten →1401-02-01 · d: 1401-02-01→1402-07-28 · mutahharten →1410 |
| Erzincan | `data/yerlesimler.js:242` | aynı (1401-02-01 / 1402-07-28) |
| Sivas | `data/yerlesimler.js:230` | d: 1398-07-15→1402-07-28 · timurlu →1408 · mehmed-celebi →1413 |
| Arapkir | `data/yerlesimler.js:2285` | memluk →1399-09-01 · d: →1402-07-28 · memluk →1516 |
| Malatya | `data/yerlesimler.js:256` | memluk →1399-09-01 · d: →1402-07-28 · memluk →1516 |

**Noktasızlık (`§2`) — kaba vekil, motor DEĞİL:** en yakın nokta ile 11 ilçe merkezi
(koordinatları bellekten, ±0,05°) sınandı. Divriği peteğine düşenler: **İliç** (39 km;
Kemah 40 km — başa baş) ve **Alacahan** (46 km). Zara → Mesudiye (63 km), Kangal → Gürün
(57 km), İmranlı/Suşehri/Gölova → Karahisâr-ı Şarkî, Refahiye → Kemah, Hafik/Yıldızeli/Ulaş
→ Sivas. ⇒ Memlûk alanı Divriği'nin kendi yöresi + İliç; büyük bir "emilme" YOK.
⚠️ Görsel -6'da Sivas'ın hemen çevresinin de Memlûk renginde görünmesi **veriyle
açıklanamıyor** (o gün Sivas noktası OSMANLI, en yakın vekil Hafik/Ulaş/Yıldızeli'yi
Sivas'a veriyor) ⇒ ölçülemedi; (a) UFUK kalemine işaret edilir, bu kalemin işi değil.

### KAYNAK (TDV, birebir)
- `divrigi`: "Yıldırım Bayezid 1398’de Sivas, Malatya, Besni (Behisni), Darende ve
  Divriği’yi iki ay muhasaradan sonra Osmanlı topraklarına kattı." · "Ancak Divriği
  yaklaşan Timur tehlikesinden dolayı 1401’de tekrar Memlükler’e verildi." · "Divriği
  Memlük hâkimiyeti sırasında Halep eyaletine bağlı pek de önemli olmayan ileri karakol
  durumundaydı."
- `kemah`: "… Erzincan’la birlikte Kemah’ı da Osmanlı ülkesine kattı (803/1401)" ·
  "Timur, Yıldırım Bayezid üzerine yaptığı sefer sırasında Kemah’ı alıp tekrar
  Mutahharten’e verdi."
- `timur`: "Fakat Timur, emanla teslim olduğu halde bütün halkını kılıçtan geçirdiği
  Sivas’ı zaptettikten sonra önce güneye Memlükler’e yöneldi."

### HÜKÜM
**Atlas DOĞRU** (negatif bulgu). Emre'nin sorusunun cevabı: *Timur o bölgeyi Memlûklere
vermedi*; Divriği'yi **Osmanlı**, "yaklaşan Timur tehlikesinden dolayı" 1401'de Memlûklere
geri verdi (TDV `divrigi`). Aynı yıl Osmanlı Kemah ve Erzincan'ı Mutahharten'den aldı
(TDV `kemah`, 803/1401) ⇒ 1401–1402'de Osmanlı Sivas ile Osmanlı Kemah-Erzincan arasında
bir Memlûk ileri karakolu (Divriği) gerçekten vardı. Haritanın gösterdiği tam budur.
Sınıf: kusur değil. Gün hassasiyeti yıl (`1401-01-01`, `1401-02-01` temsilî) — kaynak
gün vermiyor, ikisinin sırası da kaynakta YOK (aynı yıl).

📌 **Kaynak kendiyle çelişiyor (bildirilir, taraf seçilmez):** Bayezid'in Fırat seferi
TDV `divrigi`de **1398**, TDV `timur` ve `malatya`da **1399**. Atlas Divriği'de 1398,
Malatya/Arapkir'de 1399-09-01 kullanıyor — iki maddeye ayrı ayrı dayanıyor.

### YAN BULGULAR (soru dışı, aynı kutu — ÖNERİ, diff YOK)
1. 🔴 **Malatya** (`yerlesimler.js:256`) TDV `malatya` ile iki noktada çelişiyor:
   "Yıldırım Bayezid, Malatya’yı Dulkadıroğlu Nasreddin Mehmed’e bırakarak Bursa’ya
   dönmüştü." (⇒ 1399'da doğrudan değil, Dulkadır eliyle) · "1400’de Anadolu’ya giren
   Timur, önce Sivas ve Elbistan’ı işgal etti, daha sonra Malatya’ya yöneldi." · "şehrin
   idaresi Timur’un yanında bulunan Karayülük Osman’a bırakıldı" · "Timur’un Malatya’dan
   ayrılmasının ardından Dulkadıroğulları buraya tekrar hâkim oldu." Atlas: Osmanlı `d:`
   **1402-07-28**'e kadar, sonra **memluk**. ⇒ ① Osmanlı penceresi 1400'de bitmeli (gün
   kaynakta YOK) ② Timur sonrası sahip TDV'de **Dulkadır**; 1516'ya kadar Memlûk/Dulkadır
   nöbetleşmesi ("bazan Memlük valileri, bazan da Dulkadır beyleri") — yıllar YOK.
   Sınıf: ③ ardıl yapı (Dulkadır) — kısaltmak delik açar, ardıl gerekir. Karar: koordinatör.
   Arapkir aynı zinciri taşıyor; TDV Arapkir'i ADIYLA anmıyor ⇒ ölçülemedi.
2. 🟡 **Darende** (`yerlesimler_ok110.js:59`) ve **Elbistan** (`yerlesimler.js:1443`)
   1398-1401 boyunca `dulkadir`; TDV `divrigi` (Darende) ve `malatya` (Elbistan, Darende)
   Bayezid'in aldığını söylüyor. Ama Malatya örneğinde Bayezid toprağı Dulkadıroğlu'na
   bırakmış ⇒ doğru kodlama `d:` değil, belki Osmanlı tâbiliği (`v:`). Ölçülemedi; öneri:
   kaynak işi olarak ayrı kalem.
3. ⚪ **Sivas** 1402-1408 `timurlu`; TDV `sivas`: "Timur’un Anadolu’yu istilâsını takip
   eden yıllarda Sivas şehri Mezid Bey’in yönetiminde kaldı." Mezid Bey'in kime bağlı
   olduğu gövdede YOK ⇒ ölçülemedi, çelişki DENMEZ (`OLCUM-KITA §4`: tek kaynak).
4. ⚪ Timur'un Sivas'ı alışı (1400) Sivas zincirinde yok (ne `s:` ne `isg:`); Timur şehri
   yıkıp güneye indi. Kodlanmaması tutarlı olabilir — hüküm verilmedi.

---

## 2. H-0006 — Timur Batı Azerbaycan'a nereden geçti, aradaki bölgeler

### ÖLÇÜM
Görsel H-0006-1 (açıldı): Tebriz Timurlu, Serbedârî hâlâ var ⇒ gün **[1386-01-01,
1387-11-01)**. Timurlu Azerbaycan, Horasan'dan Gîlan (Kârkiyâ) · Mâzenderan (Mar'aşî) ·
Serbedârî · Muzafferî (Kazvin/Tahran/Kum) · Celâyirli (Sâve/Hemedan) kuşağıyla ayrılmış
görünüyor; tek bağlantı Zencan–Sultâniye.

Kutu 34,5–38,6K × 46,5–59,5D, 38 yerleşim, 7 gün (1381-1393):

| yerleşim | dosya:satır | atlas | TDV |
|---|---|---|---|
| Tebriz | `yerlesimler.js:649` | celayirli→timurlu **1386-01-01** | `tebriz`: "1386’da Tebriz’i savaşsız ele geçiren Timur…" ✓ |
| Zencan | `yerlesimler.js:1138` | →timurlu **1383-01-01** | `zencan`: "1382-1383 yıllarında Timur, Zencan ve civarındaki şehirleri ele geçirdi." ✓ |
| Sultâniye | `yerlesimler.js:1823` | →timurlu 1386-01-01 | `celayirliler`: Kuzey İran'ı "bu tarihten (1384) başlayarak" · slug `sultaniye` → arama (ölü), `sultaniyye` = Memlûk kapıkulu (yanlış madde) ⇒ **ölçülemedi** |
| Esterâbâd | `yerlesimler.js:2029` | serbedariler→timurlu 1386-01-01 | `marasiler`: Esterâbâd'ı Timur ele geçirdi, Mar'aşî itaati **787/1385** · `timur`: o yörede "Toga Timurlular" ⇒ Serbedârî kimliği şüpheli |
| **Simnân · Dâmgan · Bistâm** | `:1912` `:1913` `:1916` | serbedariler →**1387-11-01** | `serbedariler`: "Hâce Ali’nin 788 (1386) yılında öldürülmesiyle Serbedârî hânedanı sona erdi." · künye `serbedariler` t **1386-01-01** (`devletler.js:577`) ⇒ **22 ay HAYALET** |
| **Sârî · Âmül · Bârfurûş · Eşref** | `:2020` `:2021` `:2022` `:2026` | mazenderan-marasi **1359→1596 kesintisiz** | `marasiler`: "… Mâhâneser Kalesi’ne çekilmek ve 8 Zilhicce 794 (26 Ekim 1392) tarihinde teslim olmak zorunda kaldılar." · "Sârî ve Âmül’ü ele geçiren Timur … Sârî’yi Kiyâ Efrâsiyâb’ın oğlu İskender Şeyhî’ye verdi." · "Mar‘aşîler’den bazıları Timur’un ölümünden (1405) sonra oğlu Şâhruh’un izniyle Mâzenderan’a geri döndülerse de bir daha burada güçlü bir hâkimiyet kuramadılar." · `taberistan`: "… Mar‘aşîler’i Mâverâünnehir’e sürgüne gönderdi" |
| Kazvin · Tahran · Kum | `:1136` `:1329` … | muzafferi 1357→**1387-11-01** | `kazvin`, `tahran`, `kum` 14. yy sahibini VERMİYOR · `muzafferiler` Kazvin/Rey'i anmıyor ⇒ **bulunamadı** |
| Sâve · Hemedan | — | celayirli →1387-11-01 | `hemedan`: "İlhanlılar’dan sonra Celâyirliler ve Timurlular’ın eline geçti" (yıl YOK) · `save` slug → arama (ölü) ⇒ ölçülemedi |
| İsfahan | `yerlesimler.js:1024` | muzafferi→timurlu 1387-11-01 | `isfahan`: "6 Zilkade 789’da (18 Kasım 1387)" katliam · "Muzafferîler hâkimiyeti 1387’de Timur’un şehri zaptetmesiyle son buldu" — yıl ✓, gün 17 gün erken (temsilî) |
| Reşt · Lâhîcan | — | gilan-kiya 1371→1501/1592 | `gilan` gövdesinde Timur cümlesi YOK ⇒ bulunamadı |

**Rey noktası veride YOK** (ad taraması: yalnız "Rey Buba", "Reyes", "Reykjavík"). Timur'un
1384 ve 1386 yolunun düğümü Rey'dir; atlasta onun yerini Tahran (`muzafferi`) tutuyor.

### KAYNAK — güzergâh (TDV `timur`, birebir)
"Horasan’a seferleri sırasında İran’ın vaziyetini daha yakından gören Timur 788’de (1386)
buraya yürüdü." · "“Üç yıllık sefer” diye anılan (1386-1388) bu harekât sırasında
Mâzenderan, Luristan ve Gürcistan üzerinden Azerbaycan’a giderek Karabağ’a ulaştı."
Öncesi: Serbedârî Hâce Ali 1381'de "onun hizmetine girerek iktidarını sürdürmeyi başardı"
(`serbedariler`); Mar'aşî itaati 787/1385 (`marasiler`); Zencan 1382-83 (`zencan`).

### HÜKÜM
Emre'nin sorusunun cevabı: Timur Azerbaycan'a **Mâzenderan üzerinden** geçti (TDV
`timur`). Aradaki beyliklerin çoğu o sırada **yıkılmamış, TÂBİ** idi: Serbedârî 1381'den
(Hâce Ali'nin hizmete girmesi), Mar'aşî 1385'ten (itaat), Muzafferî Şah Şücâ' ve
Zeynelâbidîn'in itaatleri (`muzafferiler`). Atlasın gösterdiği "Timurlu adası" bu
yüzden doğar: **atlasta yabancı tâbilik kademesi yok** (`v:` yalnız Osmanlı tâbiliği) ⇒
tâbi beylik ya ilhak gibi boyanır (Sebzevâr 1381 → timurlu) ya da hiç Timur'a bağlı
görünmez (Mâzenderan, Gîlan). Bu bir VERİ kusuru değil, **MODEL sınırıdır** — karar Emre'de.

Kaynakla düzelebilen iki VERİ kusuru:
1. 🔴 **Serbedârî hayaleti** (Simnân · Dâmgan · Bistâm): `serbedariler` 1387-11-01'e kadar,
   künye 1386'da bitiyor; TDV 788/1386. Sınıf `§3.5`: **① devlet öldü** + **③ ardıl
   yapı** ("Serbedârî hâkimiyetindeki topraklar Timur’a hizmet eden birkaç lider
   arasında bölündü" — `serbedariler`) ⇒ kısaltma + ardıl `timurlu` (delik açmaz).
   **DIFF: `denetim/P84-TIMUR-SAHIPLIK-1006-KOORD.diff`** (aşağıda §4 ölçümüyle).
   ⚠️ Bu diff kusurun yalnız ÖLÇÜLEBİLEN kısmını kapatır: TDV `simnan` ("766 (1364-65)
   yılına kadar onların egemenliği altında kalan Simnân") ve `timur` (1380 civarı
   "Esterâbâd, Damgan ve Simnân yöresinde Toga Timurlular") bu üç noktanın 1365-1384
   arası **Serbedârî olmadığını** söylüyor; atlasta Toga Timurlu / Emîr Velî künyesi
   YOK (`devletler.js` metin taraması `Emîr Velî|Emir Veli|Toga|Togay|Toğa`: 0 satır). ⇒ künye işi, ayrı kalem.
2. 🔴 **Mâzenderan'ın 1392 fethi veride YOK** (Sârî · Âmül · Bârfurûş · Eşref): TDV iki
   maddede (`marasiler`, `taberistan`) Timur'un 26 Ekim 1392'de Mar'aşîleri teslim alıp
   sürgüne gönderdiğini söylüyor; künyenin kendi kronolojisinde bile var
   (`devletler.js:654`: `{ t:"1392-10-26", tur:"vassal", … }`). Sınıf: ② aynı polity
   sürmüyor, ③ ardıl = Timur'un atadığı yerel (İskender Şeyhî) ⇒ `timurlu`.
   **DIFF YAZILMADI** — başlangıç kaynaklı (1392-10-26, gün TDV'de), **bitiş kaynakta
   YOK**: "Timur’un ölümünden (1405) sonra" bir ALT SINIRDIR, yıl değil; ve dönen
   Mar'aşîler "güçlü bir hâkimiyet kuramadılar" ⇒ 1405 sonrası da düz Mar'aşî değil.
   Seçenekler (KOORDİNATÖR/EMRE):
   - **A** timurlu 1392-10-26 → 1405-02-18 (Timur'un ölüm günü, kronolojide var — D2
     kapanır) — ⚠️ dönüşü ölüm gününe bağlar; "gün komşudan" şartı (aynı olay) TUTMAZ.
   - **B** timurlu 1392-10-26 → bitiş ölçülene dek açık (yeni kaynak işi: Iranica
     `MARʿAŠIS` / Zahîrüddîn-i Mar‘aşî) — benim önerim **B**: tarih uydurulmaz.
   Not: Eşref (Behşehr) 1612'de kurulmuş bir şehirdir ama 1359'dan Mar'aşî penceresi
   taşıyor — bölge temsilcisi olarak kalmış olabilir; ölçülmedi, hüküm yok.

---

## 3. H-0011 — "Timur beylikleri yeniden kurdu ama bölüm komple Karamanoğlu"

### ÖLÇÜM
Görsel H-0011-1 (açıldı): Ankara "Timurlu valiliği", Amasya Çelebi Mehmed, Akşehir'den
Kayseri'ye, Isparta-Burdur'a kadar tek Karaman gövdesi; batıda Germiyan, güneyde Teke ve
Alâiye.

Kutu 36,5–42,1K × 26–35,5D, 1402-07-27 → 1403-03-01 geçişleri (tablo sayımı):
`isa-celebi→mehmed-celebi` 59 · `suleyman-celebi` 35 · **`karaman` 18 (+2 zaten)** ·
`candar` 12 (+1) · `germiyan` 8 · `mentese` 6 · `aydin` 5 (+3) · `teke` 2 · `saruhan`
**1** · `timurlu` 1 (Ankara). `hamid` **0**.

| yer | dosya:satır | atlas 1402 sonrası |
|---|---|---|
| Kayseri · Kırşehir · Sivrihisar · Beyşehir | `:217` `:1506` `:1505` `:1501` | timurlu (→1402-09-15) → **karaman** |
| Isparta · Eğirdir · Burdur · Uluborlu · Yalvaç (Hamîd-ili) | `:170` … | timurlu → **karaman** →1415-03-01 |
| Manisa (Saruhan'ın TEK noktası) | `:171` | timurlu →1402-08-17 → **saruhan** →1415 |
| **Antalya** | `:187` | **teke** 1402-07-28→1423-01-01 |
| **Elmalı** | `:1790` | **teke** 1402-07-28→1423-01-01 |

### KAYNAK (TDV, birebir)
- `karamanogullari`: "Ankara Savaşı’ndan (1402) sonra Timur Karamanlı ülkesini Kayseri,
  Kırşehir, Sivrihisar ve Beyşehir’le birlikte Alâeddin Bey’in oğulları Mehmed ve Ali
  beylere vermişti."
- `isparta` (önbellek `ODAK-OSMANLI-ANADOLU-0080`): "Onun bu bölgeden ayrılmasından sonra
  muhtemelen Karamanoğulları yöreyi ellerine geçirdiler." (Hamîd-ili; TDV de ihtiyatlı)
- `hamidogullari`: beylik 1391'de Osmanlı'ya geçti; 1402 sonrası ihya cümlesi YOK.
- `germiyanogullari`: "1402’de Ankara Savaşı’ndan sonra eski toprakları kendilerine
  verilen Anadolu beylerinden biri de Yâkub Bey idi." · `aydinogullari`, `menteseogullari`:
  iade · `saruhanogullari`: "Orhan Bey, Timur’un desteğiyle Manisa’ya gelip 17 Ağustos
  1402’de beyliğin başına geçti." · `candarogullari`: "… Timur Çankırı ve Kalecik’i de
  vermişti."
- `tekeogullari`: "1402-1415 yılları arasında Antalya ve Alâiye dışında bütün Teke-ili’ne
  Karamanoğlu II. Mehmed Bey hâkim oldu." · "Bu sırada Osmanlılar’ın Antalya subaşılığına
  getirdikleri Fîruz Bey vefat etti, yerine Tekekarahisarı’nda bulunan oğlu Hamza Bey
  tayin edildi."

### HÜKÜM
**"Komple Karaman" görünümü TDV ile DOĞRU** (negatif bulgu): Timur Karaman'a kendi
ülkesinin üstüne Kayseri, Kırşehir, Sivrihisar ve Beyşehir'i verdi; Hamîd-ili ihya
edilmedi, Karaman'a geçti (TDV `isparta`, "muhtemelen"). Germiyan · Aydın · Menteşe ·
Saruhan · Candar **ayrı kimliklerle** veride var — tek kimliğe düşmemiş; görselde
kırpılmış oldukları için görünmüyorlar. Sınıflandırma: kusur değil; öngörüdeki
"noktasızlıkla emilme" mekanizması çürüdü.

Ters yönde iki kusur (TDV `tekeogullari`) — atlas Karaman'ı **az** gösteriyor:
1. 🔴 **Elmalı** (Teke-ili): atlas `teke` 1402-1423; TDV 1402-1415 **Karaman**. Sınıf:
   devlet var, yeri yanlış (`§3.5` ikinci madde). 1415-1423 arası kimin? TDV'de YOK
   (Osman Çelebi Karaman desteğiyle İstanoz'da oturuyor — ayrı bir Teke yönetimi değil).
2. 🔴 **Antalya**: atlas `teke` 1402-1423; TDV Antalya'da **Osmanlı subaşısı** (Fîruz Bey →
   Hamza Bey) ve Karaman kuşatması — Teke'nin değil. Fetret'te hangi şehzadeye bağlı
   olduğu gövdede YOK.
**DIFF YAZILMADI:** Elmalı için 1415 ucu yıl hassasiyetli ve yeni bir yabancı kırılma
(`karaman→?`) açar — ardılı kaynakta yok; Antalya için Fetret kimliği (isa/süleyman/
mehmed-celebi ya da düz `d:`) kaynakta yok. İkisi de uydurmadan yazılamıyor.
Seçenek (KOORDİNATÖR): Elmalı `karaman` 1402-07-28→1415 (yıl) + 1415-1423 ölçülemedi
beyanı; Antalya Ankara günü `d:` kesilmeden sürer mi (Fetret kuralı ne diyorsa) — benim
önerim: önce Fetret'te Anadolu'daki "şehzadesiz Osmanlı subaşılığı" için bir kodlama
kuralı (Emre), sonra diff.
3. 🟡 **Saruhan tek noktada** (Manisa): Saruhan-ili'nin öteki merkezleri (Nif, Demirci,
   Gördes, Akhisar, Turgutlu) veride YOK ⇒ beylik haritada küçük görünür. TDV
   `saruhanogullari` "Demirci, Nif" adlarını veriyor. Nokta önerisi kaynak işidir.

---

## 4. DIFF ve ÖLÇÜLEN ETKİSİ

`denetim/P84-TIMUR-SAHIPLIK-1006-KOORD.diff` — 3 satır, `data/yerlesimler.js` (KOORDİNATÖR):
Simnân · Dâmgan · Bistâm `serbedariler` t **1387-11-01 → 1386-01-01**, ardıl `timurlu` f
aynı. Temel `origin/makine/umit` @ `cdc1ccea` · `git apply --check` TEMİZ · CR 0, LF
(çalışma ağacı autocrlf ile CRLF; diff `git diff` ile normalleştirildi).
**UYGULANMADI.** Motor tuzuna dokunmaz (yalnız veri).

Kırılma günü dayanağı: `data/kronoloji_iran_ardillari.js:1038` — `t:"1386-01-01"`
"Hâce Ali öldürüldü — Serbedârî hânedanı sona erdi" (yıl hassasiyeti, TDV `serbedariler`).
Gün yıl temsilîdir; aynı gün Esterâbâd/Tebriz/Sultâniye kırılmalarıyla hizalı.

`py arac/denetle.py`, aynı ağaçta, diff ÖNCESİ ve SONRASI (ikisi de çıkış **2** — sebep
diff değil: `devletler_harita.js` bu taze ağaçta yok ⇒ Değişmez 8 ÖLÇÜLEMEDİ):

| ölçüt | önce | sonra |
|---|---|---|
| D1 sahipsiz | 309 (beklenen 309) | 309 |
| D2 Osmanlı | 623 kırılma, 0 açık | aynı |
| D2s yabancı | 1720 · 186 AÇIK (tavan 189) | aynı |
| D2t | 13 | 13 |
| **D4c ölümü aşan** | **127** (beklenen 127) | **124** — araç: "TAVAN GEVŞEK — BEKLENEN_ASAN = 124 yapılmalı" |
| D4d | 324 | 324 |
| koridor A / B | 540 / 183 | 539 / 184 (Dâmgan bir kovadan ötekine geçti) |

🔴 **`§3.4 ②`: diff ile `BEKLENEN_ASAN 127 → 124` AYNI COMMIT'te inmeli** — ayrı inerse
arada kapı gevşek kalır (3 hayalet görünmez). Tavanı ben yazmadım (`§3.4 ④`), ÖNERİYORUM.
📌 Gözlem (bu kalemin işi değil): `makine/umit` temelinde D2s 186 AÇIK, tavan 189 ⇒ tavan
şimdiden 3 gevşek.

## 5. DENENEN VE ÖLÜ YOLLAR (6 Ekim 2026)
- TDV slug ölü (arama sayfasına yönleniyor): `sultaniye` · `save` · `bistam` · `damgan` ·
  `karkiyalar` · `kar-kiya` · `rey--sehir` · `rey-sehir` · `damgan--sehir` ·
  `bistam--sehir` · `mentesogullari` (yazım hatası; doğrusu `menteseogullari`, canlı).
- Canlı ama YANLIŞ madde: `rey` (= "Re'y", fıkıh terimi) · `sultaniyye` (Memlûk kapıkulu)
  · `mazenderan` (→ `taberistan`'a yönlendiren kısa madde).
- TDV arama (`/arama/?q=`), ilk sayfa (~10 sonuç, sayfa sayısı basılmıyor): "sultaniye" →
  yalnız `el-ahkamus-sultaniyye` · "damgan" → `damgan-tarihane-camii` · "bistam" →
  `bayezid-i-bistami` · "emîr velî", "toga timur", "kârkiyâ", "firuzkuh" → 0 ·
  "taberistan" → `taberistan` (kullanıldı). ⚠️ Arama sonuç yok ≠ madde yok
  (`OLCUM-KITA §7`).
- Canlı ve gövdesi okunmuş: `timur` · `sivas` · `ankara-savasi` · `celayirliler` ·
  `serbedariler` · `muzafferiler` · `marasiler` · `taberistan` · `gilan` · `kazvin` ·
  `zencan` · `tahran` · `kum` · `hemedan` · `simnan` · `esterabad` · `isfahan` · `tebriz` ·
  `germiyanogullari` · `aydinogullari` · `menteseogullari` · `saruhanogullari` ·
  `candarogullari` · `karamanogullari` · `hamidogullari` · `tekeogullari` (+ önbellekten
  `divrigi` · `malatya` · `kemah` · `dulkadirogullari` · `isparta`).
