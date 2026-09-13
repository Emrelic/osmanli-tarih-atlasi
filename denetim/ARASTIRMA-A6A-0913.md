# PAKET-A6A · ARAŞTIRMA — Balkan · Anadolu (+ 12 kalem) · 13 Eylül 2026

**Sahip:** PAKET-A6A (işçi, 1.MURAT'a) · **Yazma:** yalnız bu dosya + `denetim/YAMA-A6A-0913.json` + `denetim/ARAC-A6A-*-0913.py`
**Proje verisine hiçbir yazma yapılmadı** (koşu 10 sürüyor, `§7`).

**Evren:** `arac/girdi.py` `GIRDI_DOSYALARI` → 79 dosya · 3818 nokta (ölçüldü). Sahiplik sırası `v → d → s` (`VERI-YAPISI.md`).

**Aletler (tekrar koşulabilir):**
```
py denetim/ARAC-A6A-OLC-0913.py kutu GUN LAT1 LAT2 LON1 LON2   # kutudaki noktalar + o günkü sahip
py denetim/ARAC-A6A-OLC-0913.py ad  AD [AD…]                   # normalleştirilmiş ad araması, tam kayıt
py denetim/ARAC-A6A-YAKIN-0913.py GUN LAT LON [N]              # en yakın N nokta
py denetim/ARAC-A6A-IZGARA-0913.py GUN LAT1 LAT2 LON1 LON2 ADIM # en-yakın-nokta ızgarası (Voronoi YAKLAŞIĞI)
py denetim/ARAC-A6A-TDV-0913.py DIZIN slug…                    # yönlendirme izlemeden HTTP kodu + gövde
```
**TDV:** 56 slug denendi → 40 canlı (gövde okundu) · 16 ölü (302). Liste JSON'da.

**Damga sözlüğü:** `bulunamadı` = arandı, yok · `okumadım` = kaynak biliniyor, açılmadı · `ölçülemedi` = alet/erişim ölçemedi.

---

## Özet

| kalem | tarih · alan | hüküm | öneri |
|---|---|---|---|
| 0042/H-0011 Kemah | 1340 · Doğu Anadolu | 🔴 **veri yanlış** — Akkoyunlu 1340-1401'in temeli YOK | Y1: eretna → mutahharten → (1401-02 Osmanlı) → mutahharten → karakoyunlu → akkoyunlu · ek: Erzincan 1348-1379 aynı hata (Y1b) |
| 0042/H-0025 Sırp enklavı | 1387-06-08 · Vodina | 🔴 **veri yanlış** (Vodina'nın fethi TDV'ye göre 1386-87 kışı) | Y2 ile enklav kalkar · 1371-87 "sirbistan" kimliği kaynaksız (Y15) |
| 0042/H-0027 Vodina | 1392-01-15 | 🔴 **veri yanlış** — Üsküp'le değil, ~5 yıl ÖNCE | Y2 (1387-01-01) + yeni madde · Y3 Üsküp günü 15 → **6 Ocak 1392** |
| 0042/H-0028 Dejanović | 1371-1395 | 🟢 **tâbi — DOĞRU** (TDV üç madde) · 🔴 başkent Köstendil doğrudan boyanıyor | Y4 Köstendil `v:` · Y5 künye kaynağı · Y10 Pirlepe noktasızlığı |
| 0042/H-0029 enklavlar | 1393 · Irak/İran | 🔴 Zencan veri yanlış · 🟡 Bağdat yıl artefaktı · ⚪ Zagros içi kaynaksız | Y9 |
| 0042/H-0031 Ordu-Ünye | 1398 | 🟢 **veri doğru** — tâbi (TDV) · 2 gün kaynaksız · görünüm | Y11 (arayüz: tâbi tonu) |
| 0042/H-0043 Saruhan | 1415-06-01 · Manisa | 🔴 **veri yanlış** — Manisa 1415'ten önce Osmanlı | Y6 (1416-09-01 → 1415-01-01) + yeni madde |
| 0035/H-0052 II. Kosova | 1448-10-20 → 1449-01-01 | 🟢 **veri doğru** (Yergöğü 1449) · kırılma alakasız madde altında | Y7 yeni madde ×2 · küçük üçgen ölçülemedi (Y16) |
| 0035/H-0070 Solnok | 1685-10-19 | ⚙️ **motor** (taralı devir gövdesi) · kök e53c86a yayında | Y12 · canlı teyit ölçülemedi |
| 0034/H-0036 Azak bölgesi | 1637-06-18 | 🟢 Azak doğru · kasıtlı seyreklik + gerçek noktasızlık | Y13 Temrük/Açu/Açe (dönem kaynağı bulunamadı → nokta yazılmadı) |
| 0021/H-0005 iki boşluk | 1594-11-13 · Boğdan | ⚙️ **motor** (üst: kurulmamış Uman peteği) · alt: ölçülemedi | Y14 |
| 0019/H-0050 Canbirdi | 1516-12-21 · Filistin | 🔴 **veri yanlış** — ileri harekât gerçek, ARADAKİ ŞEHİRLER zaten Osmanlı | Y8 (Nablus·Sayda·Yafa·Akkâ → 1516-09-27, Kudüs 🟡) |

**Hüküm sayımı:** veri yanlış **6** (H-0011 · H-0025 · H-0027 · H-0029[Zencan] · H-0043 · H-0050) · veri doğru **4** (H-0028[künye] · H-0031 · H-0052 · H-0036) · motor **2** (H-0070 · H-0005) · noktasızlık ek bulgu **2** (Pirlepe · Temrük/Açu/Açe).
**Yama önerisi:** 17 kalem (JSON `yamalar`, Y1b dahil) · **Halka önerisi:** 11 (JSON `halkalar`) · yazılmayan halka gerekçeli 12.

---

## 0042/H-0011 — Kemah Akkoyunlu'ya geçmiş mi?

**İstek + görsel:** 1340-01-01, Celayirli kuruluş maddesi açık; Kemah'ın hücresi "AKKOYUNLULAR" etiketli. Madde metni kendisi *"bu tekil kayıt için ayrı bir kaynak bulunamadı"* diyor.

**Ölçüm:** `Kemah` s: ilhanli →1340 · **akkoyunlu 1340→1401-02-01** · (d 1401-02→1402-07) · **akkoyunlu 1402-07-28→1502** · safevi →1515-05-19 · d. Komşu Erzincan: ilhanli →1348 · **akkoyunlu 1348→1379** · mutahharten 1379→1401 · mutahharten 1402→1410 · akkoyunlu 1410→1502.

**Kaynak (TDV `kemah`, gövde okundu):** İlhanlı → *"İlhanlı hâkimiyetinin zayıflamasıyla Eretnaoğulları’nın idaresine girdi. Bir ara Erzincan emîri olan Mutahharten’in eline geçti"* → 796/1394 Kemah valisi Kadı Burhâneddin'e bağlandı, Pulur'dan sonra tekrar Erzincan Emirliği'ne → 803/1401 Osmanlı → Timur geri Mutahharten'e verdi → *"Ardından Karakoyunlular’ın eline geçen Kemah, Karakoyunlular’la Akkoyunlular arasındaki mücadelelere sahne oldu"* → *"Akkoyunlu idaresi 1473 Otlukbeli Savaşı’ndan sonra da sürdü"* → Safevî → 19 Mayıs 1515 Osmanlı.
TDV `erzincan`: Timurtaş → Eretna → Ahî İne → Pîr Hüseyin (ö. 1378) → Mutahharten; *"(1379)"*. TDV `akkoyunlular`: Akkoyunlu'nun tarih sahnesine çıkışı *"1340’ta Tur Ali Bey idaresinde Trabzon’a akınlar"*; 1348'de *"Erzincan ve Bayburt hâkimleri İLE BİRLİKTE"* Trabzon kuşatması.

**Hüküm: 🔴 veri yanlış.** 1340'ta Akkoyunlu yalnız Diyarbekir yöresinde bir aşiret; Kemah-Erzincan'da hiçbir TDV maddesi Akkoyunlu idaresi anmıyor. İkinci blok (1402-1502) de başındaki Mutahharten + Karakoyunlu dilimlerini yutuyor. **Kullanıcının sorusunun cevabı: temeli yok.** Kaynağı olmayan kayıt, `1340` epok sınırından türemiş görünüyor (Celayirli kuruluşu ile aynı gün).

**Öneri:** `A6A-Y1` (Kemah zinciri) · `A6A-Y1b` (Erzincan 1348-1379 → eretna, ek bulgu) · madde metnindeki "kaynak bulunamadı" cümlesinin silinmesi. **İç günler (1410 · 1469) künye pencerelerinden devralındı ve 🟡 kaynaksız**; Kemah'ın KK↔AK el değiştirmeleri modellenemedi — TDV yıl vermiyor.
**Halka:** Kemah akkoyunlu 1473 (durum) · Kemah osmanlı 19.05.1515 (gün).

---

## 0042/H-0025 — Selanik teslimi / Ceneviz ahidnamesi: Sırp enklavı

**Görseller:** ① 1387-04-09 Selanik'in ilk teslimi — Vodina-Karaferye "SIRBİSTAN" hücresi güneye bağlı. ② 1387-06-08 Osmanlı-Ceneviz ahidnamesi — Vodina tek başına kırmızı içinde cep. ③ ①'in yakını.

**Ölçüm (kutu 40.3-42.6N / 20-24E):** 1387-06-08'de 23 nokta: Osmanlı 12 · sirbistan 4 (Prizren · Üsküp · Debre · **Vodina**) · tâbi 4 (Dejanović) · arnavutluk 1 · kurulmamış 2. Aradaki tek değişim **Karaferye 1387-05-08** (sirbistan → Osmanlı). Ahidname maddesi değişimle ilgisiz, yalnız o güne düşüyor.

**Kaynak:** TDV `karaferye`: *"Diğer Yunan kaynakları ise şehrin Türkler tarafından alınmasının 8 Mayıs 1387’de olduğunu yazar"* (veri ✓). TDV `vodina`: aşağıda H-0027.

**Hüküm: 🔴 veri yanlış.** Cep, Vodina'nın 1392'ye kadar Sırp kalmasından doğuyor; TDV Vodina'nın fethini **1386-1387 kışına** koyuyor (H-0027). Yama inerse 1387-06-08'de cep **yok.** Ayrıca 1371 sonrası bu yörede tek bir "Sırbistan" devleti yok — `sirbistan` kimliğinin 1371-1387 dilimi kaynaksız (yerel hükümdar: **bulunamadı**, akademik kaynak aranmadı).
⚠️ `§3.5.1` iki uç: yama sonrası Ocak-Mayıs 1387 arasında Karaferye'nin kendisi cep olabilir — **ölçülmedi.**

**Öneri:** `A6A-Y2` · `A6A-Y15`. **Halka:** Karaferye osmanlı 08.05.1387 (gün, Yunan kaynaklarına atıf).

---

## 0042/H-0027 — Vodina Üsküp'le mi, önce mi?

**Görseller:** 1392-01-15 "Üsküp'ün fethi · Katılım: Üsküp, Vodina"; öncesi (1392-01-01) Vodina cebi.

**Ölçüm:** `Vodina (Edessa)` (`yerlesimler_ok107.js`) s sirbistan 1345→**1392-01-15**, d 1392-01-15→1402-07-28, `kaynak:"vodina"`. `Üsküp` aynı gün. `1392-01-15` yalnız bu iki kayıtta geçiyor.

**Kaynak (TDV `vodina`, gövde okundu):** Neşrî *"1389 yılından hemen sonra"* · Kemalpaşazâde *"Üsküp’ün fethinin ardından 1391’de"* · Oruç Bey Vidin'den (1396) sonra · Âşıkpaşazâde Üsküp'ten sonra, 1391'den önce · Hoca Sâdeddin *"1386’da"* — ve maddenin kendi hükmü: ***"Kuvvetli bir ihtimale göre doğru olan bu son tarihin 1386-1387 kışı olarak kabul edilmesi daha uygundur."***
TDV `uskup`: *"İlk Osmanlı kronikleri fetih tarihini vermemektedir. Buna karşılık Batılı müellifler şehrin **6 Ocak 1392**’de Osmanlı idaresine girdiğini kaydederler."*

**Hüküm: 🔴 veri yanlış (🟡 kaynak kesin değil).** Veri, Vodina'ya Üsküp'ün gününü vermiş (komşu günü, ama Vodina'nın kendi kaynağı başka yıl söylüyor ⇒ `§4` komşu şartı ② sağlanmıyor). TDV yazarı açık tercih bildiriyor: **Üsküp'ten ~5 yıl önce.** Ayrıca Üsküp'ün günü TDV'de **6 Ocak**, veride 15 Ocak — 15'in kaynağı **bulunamadı**.

**Öneri:** `A6A-Y2` Vodina → 1387-01-01 (yıl; metinde tartışma yazılır) · **ek madde** «Vodina'nın fethi (1386-1387 kışı, Evrenos Bey)» · `A6A-Y3` Üsküp 1392-01-06 (🟡 takvim, D110).
**Halka:** Üsküp osmanlı 06.01.1392 (gün, Batılı müelliflere atıf). Vodina halka **almaz** (muhtemel).

---

## 0042/H-0028 — Dejanović Prensliği vassal mıydı?

**Görsel:** 1392-01-15, Köprülü-İştip-Ustrumca-Doyran açık tonda "Dejanović Prensliği (Kostadin-ili) tâbi".

**Ölçüm:** künye `dejanovic-prensligi` 1371-09-26→1395-05-17, `kaynak:"bulunamadı … ARANMAYA DEVAM"`. İştip · Köprülü · Ustrumca · Doyran `v:` aynı pencere ✓. **Köstendil** (prensliğin başkenti, adı *Kostadin-ili*'den) → s bulgaristan →1374 · **d 1374→1383-09-19 `y:"vassal"` (DOĞRUDAN kategori)** · d 1383-09-19→1402.

**Kaynak (üç TDV maddesi, gövde okundu):**
- `kostendil`: *"Köstendil’in idarecisi olan Sırp Prensi Konstantin Dejanović 1371’de I. Murad’ın hükümdarlığını tanıyarak Osmanlı hizmetine girdi ve … Rovine Muharebesi’nde … hayatını kaybetti. 1395’ten sonra … Köstendil sancağı haline getirip doğrudan kendilerine bağladılar."*
- `koprulu`: *"Oliver’in ölümünün ardından Dejanović tarafından yönetildi … 1371’den beri Osmanlı vasalı olan … Dejanović hânedanının, 1395’te …"*
- `ustrumca`: *"1395’te … Konstantin, Rovine savaşını kaybedip ölünce küçük devleti … Kostadin-ili adıyla bir sancak şeklinde Osmanlılar’a intikal etti."*

**Hüküm: 🟢 vassal DOĞRU — ama 🔴 başkent Köstendil doğrudan Osmanlı boyanıyor.** `y:"vassal"` bir **edinim yolu** alanı; kategori `d:` olduğu için harita doğrudan tonda çiziyor (`VERI-YAPISI`: *"`vassal` = tâbiyet yoluyla edinim, `v:` kademesiyle karıştırılmasın"*). Künye kaynağı artık bulunmuş: üç canlı madde.
**Ek bulgu — noktasızlık:** **Pirlepe (Prilep) noktası yok.** TDV `pirlepe`: *"Pirlepe bölgesi Kral Marko’nun ölümünden sonra 1395’te Osmanlı topraklarına kesin şekilde katıldı"* ⇒ 1392 görsellerinde Manastır'ın doğrudan peteği Marko'nun yöresini boyuyor. Marko için künye yok ⇒ B paketi.

**Öneri:** `A6A-Y4` Köstendil `v:` (günler künye penceresinden, bildirilerek) · `A6A-Y5` künye kaynağı · `A6A-Y10` Pirlepe.
**Halka:** Köstendil tâbi 1371→1395 · Köprülü tâbi 1371→1395 (ikisi de tek kaynak, iki uç, süreklilik).

---

## 0042/H-0029 — Bu tarihlerde bu enklavlar var mıydı? (1393-01-01, Irak/İran)

**Görseller:** ① Sâmerrâ-Tikrit arası "TİMURLU VALİLİĞİ" cebi, çevresi Celâyirli · ② Râmhürmüz'de "CELÂYİRLİLER" cebi, çevresi Timurlu · ③ Zencan'da "CELÂYİRLİLER" cebi, çevresi Timurlu (Sultâniye · Miyâne · Bîcâr).

**Ölçüm:** ① Irak kutusu 19 nokta: celayirli 15 · **timurlu 2 (Bağdat · Kasr-ı Şîrîn)** · kurulmamış 1 · sahipsiz 1 — `Bağdat` s timurlu 1393-01-01→1394-01-01. ② kutuda 4 nokta: **`Zagros içi` (tur:bolge, dolgu) celayirli 1340→1410**; zinciri Zencan'ınkiyle **birebir aynı** (kopya). ③ `Zencan` celayirli 1340→1410; komşu Sultâniye timurlu 1386'dan.

**Kaynak:**
- TDV `zencan`: *"1382-1383 yıllarında Timur, Zencan ve civarındaki şehirleri ele geçirdi."* ve *"832’de (1428-29) Sultâniye, Ebher, Kazvin ve Zencan, Timurlular’dan … Hoca Yûsuf’un idaresindeydi."*
- TDV `bagdat`: *"Bağdat Timur tarafından 795’te (1393) ve 803’te (1401) … işgal edildi"* · `celayirliler`: *"1393’ten itibaren de Bağdat, Diyarbekir ve el-Cezîre bölgelerini ele geçirmesi"* (bölge cümlesi).
- Zagros içi / Râmhürmüz: `celayirliler` · `muzafferiler` gövdelerinde Huzistan/Luristan/Tüster/Râmhürmüz **geçmiyor** ⇒ **bulunamadı.**

**Hüküm:** ③ **🔴 Zencan veri yanlış** — 1383'ten Timurlu; cep kalkar. Ayrıca veri 1410-1469 karakoyunlu diyor, TDV 1428-29'da Timurlu diyor (çelişki, halka ile görünür). ① **🟡 Bağdat kaynağın hassasiyetinde** (795/1393 → `1393-01-01` §4'e uygun) ama olay YALNIZ Bağdat'a yazıldığı için tek hücrelik cep doğuyor; komşu Irak şehirleri için şehir adıyla kaynak **bulunamadı** (bölge cümlesi taşınmaz). Günü veren akademik kaynak (Iranica "Jalayerids") **okumadım.** ② **⚪ kaynaksız dolgu** — Zencan zincirinin kopyası.

**Öneri:** `A6A-Y9`. **Halka:** Zencan timurlu 832 (→1429, gerekçe JSON'da).

---

## 0042/H-0031 — Canik sonrası Ordu-Ünye vassal mı doğrudan mı?

**Görseller:** 1397-07-01 Hacıemîroğulları turuncu · 1398-07-01 (Canik katılışı) Ordu-Ünye kırmızımsı.

**Ölçüm (kutu 40-42.2N / 34.3-39.5E):** 1397: haciemir 2 (Ünye · Ordu). 1398-07-01: **TABI 2** (Ünye · Ordu) — `v:` 1398-06-01→1402-07-28 `k:"Hacıemîroğulları Beyliği (Osmanlı tâbii)"`. 1428: Osmanlı (d 1427-06-01'den).

**Kaynak (TDV `ordu--sehir`, gövde okundu):** *"I. Bayezid 800 (1398) baharında büyük bir orduyla Canik bölgesine girince diğer bazı emîrlerle birlikte Ordu yöresi emîri Süleyman da ona **tâbi** oldu"* · *"1404’te … Clavijo, bu sahillerin … Türk Beyi Arzamir’in (Hacı Emîr [?]) yönetimi altında"* · *"Hacıemîroğulları Beyliği 1427’de Osmanlılar tarafından ilhak edildi."*

**Hüküm: 🟢 veri doğru** — 1398'de **tâbi**, doğrudan değil; 1402 sonrası bağımsız, 1427 ilhak. Haritada görünen ton **doğrudan değil tâbi tonudur**; ikisinin birbirine yakın okunması veri değil arayüz meselesi (Oturum 1). 🟡 iki gün kaynaksız: `1398-06-01` (kaynak "bahar") · `1427-06-01` (kaynak yalnız yıl). Ünye'nin beyliğe aitliği: `unye` 302, `ordu--sehir` Ünye'yi anmıyor ⇒ **bulunamadı.**

**Öneri:** `A6A-Y11`. Halka yok (olay yılları; 1404 kimliği soru işaretli).

---

## 0042/H-0043 — 1415'te Saruhanoğulları var mıydı?

**Görsel:** 1415-06-01 "İzmir'in Aydınoğlu Cüneyd Bey'den alınışı"; Manisa etrafında küçük Saruhan cebi.

**Ölçüm:** `Manisa` s saruhan **1402-08-17→1416-09-01**, d 1416-09-01'den. Kutuda Saruhan kimliği taşıyan **tek nokta** Manisa (31 noktanın 1'i).

**Kaynak:**
- TDV `saruhanogullari`: 1404 Hızır Şah · *"Çelebi Mehmed … 808 (1405-1406) civarında Manisa’ya girip … Hızır Şah’ı ortadan kaldırdı"* · Saruhan b. İshak'ın 814 (1411) sikkesi · ***"1411’den sonra ve 1415’ten önce Saruhan ülkesinin Çelebi Mehmed’in idaresi altına girdiği, böylece Saruhanoğulları’nın Manisa kolunun tarihe karıştığı"*** · Demirci kolu 1426'ya kadar · Torlak Kemal 819/1416 *"Saruhan bölgesindeki kesin Osmanlı idaresinin tarihini de belirler."*
- TDV `manisa`: *"Osmanlı idaresi ancak 818’den (1415) biraz önce tam olarak kurulabildi."*

**Hüküm: 🔴 veri yanlış.** 1415-06-01'de Manisa Osmanlı'dır; veri 1416-09-01'e (Torlak Kemal'e, gün kaynaksız) kadar Saruhan boyuyor. Künye `saruhan` t:1416 **dokunma** (Demirci kolu sürdü — `§3.5.0` ③); ama künye kronolojisindeki *"1410 kesin ilhak"* TDV'nin 1411 sikkesiyle çelişiyor.

**Öneri:** `A6A-Y6` (1415-01-01) + yeni madde. **Halka:** Manisa saruhan 17.08.1402 (gün) · Manisa osmanlı 1415 (durum).

---

## 0035/H-0052 — II. Kosova'da boş toprak girip çıkıyor

**Görseller:** 1448-10-20 (II. Kosova) Tuna'nın kuzeyi Eflak yeşili · 1449-01-01 (Epir kıyısının katılışı) Osmanlı kırmızısı Bükreş'in güneyine kadar çıkmış.

**Ölçüm:** kutu 42.4-44.8N/23.3-28.1E, 15 nokta, **sahipsiz 0**. Değişen tek nokta **Yergöğü (Giurgiu)**: s eflak 1427-01-01→**1449-01-01**, d 1420→1427 ve 1449→1810. 1427 kırılması için Yergöğü maddesi **bulunamadı**; 1449-01-01 kırılması aynı günkü **ilgisiz** "Epir kıyısı" maddesinin altında beliriyor (Değişmez 2 bunu maddeli sayıyor — `D147` sınıfı).

**Kaynak (TDV `yergogu`):** *"1420’de Osmanlılar’ca ele geçirildi … 1427’de Eflaklılar Giurgiu Kalesi’ni geri aldı. Ancak 853’te (1449) burası tekrar Osmanlı kontrolü altına girdi."*

**Hüküm: 🟢 veri doğru** (yıl yıl TDV ile aynı) — toprak "boş" değil, Yergöğü'nün peteği; girip çıkması tarihsel. Kusur **anlatıda**: değişimin kendi maddesi yok. 🟡 853 H 24.02.1449'da başlıyor, veri 1449-01-01 (54 gün önce). Görsel 1'deki Silistre güneybatısındaki küçük koyu üçgen **ölçülemedi** (geometri okunmadı).

**Öneri:** `A6A-Y7` iki yeni madde (1427 · 1449) · `A6A-Y16`. **Halka:** Yergöğü osmanlı 1420→1427 · eflak 1427→1449.

---

## 0035/H-0070 — Solnok kaybında iki renk üst üste

**Görsel:** 1685-10-19; Solnok peteği Osmanlı kırmızısının üstünde yarı saydam turuncu, "AVUSTURYA (HABSBURG)" etiketi.

**Ölçüm:** `Solnok (Szolnok)` d 1552-09-04→**1685-10-19**, s avusturya 1685-10-19'dan — tek, temiz kırılma; kutudaki diğer 16 noktada aynı gün kırılma yok. Görsel partisi **25.08.2026** tarihli (aynı partinin H-0052 görev çubuğu). Kök düzeltme **e53c86a (27.08.2026 02:49)** — *"`uret_devirler.py` `coz()` PARCA_HALKA katmanını ATLIYORDU ⇒ hiçbir tarihe ait olmayan gövde"*; `git merge-base --is-ancestor e53c86a a00592d` ⇒ **yayında.**

**Hüküm: ⚙️ motor/görsel** (devir vurgusu "taralı alan" gövdesi), veri doğru. Görüntü düzeltmeden 2 gün önce. **Canlı haritada teyit ölçülemedi:** `js/app.js` tarih URL parametresi okumuyor (yalnız `?guven=`), zaman çubuğu tarayıcıyla sürülmedi. Solnok'un gününün kaynağı bu kalemde sınanmadı (`macaristan`, okumadım).

**Öneri:** `A6A-Y12` — koordinatör canlı sürümde 1685-10-19'a gidip bakmalı; sürüyorsa kök `uret_devirler.py`.

---

## 0034/H-0036 — Bu bölgede yalnız kayıtlı yerleşimler mi var? (1637-06-18, Azak)

**Görsel:** Azak'ın Don Kazaklarına kaybı; çevre "KIRIM HANLIĞI BOZKIRI" etiketleriyle geniş, seyrek noktalı.

**Ölçüm (44.5-51.2N / 33-45E):** 44 nokta — **9'u bozkır dolgu noktası** · 8'i kurulmamış · Azak don-kazak ✓. Temrük · Açu · Açe **nokta yok.**

**Kaynak:** TDV `azak`: *"Nihayet 1637’de Kazaklar kaleyi ele geçirdiler."* · `anapa`: *"Taman, Temrük, Açe ve Açu kalelerinin Kuban nehrinin kuzeyinde Rusya’da kalması sebebiyle…"* (1783-84) · `cerkezler`: *"Evliya Çelebi Azak, Taman, Temrük ve diğer Osmanlı kaleleri…"* · `sahib-giray`: *"Temrük Hisarı’na vardığında içeri alınmadı"* (1532-51). `taman` · `kuban` · `temruk` · `temruk--kale` → 302.

**Hüküm: 🟢 veri doğru + kasıtlı seyreklik + gerçek noktasızlık.** Bozkır büyük ölçüde gerçekten yerleşimsiz; dolgu noktaları `§3.5`in çöl dolgusu mantığıyla konmuş. Ama **Temrük/Açu/Açe Osmanlı kaleleri eksik** ve Taman yarımadası-Kuban ağzı birkaç noktayla temsil ediliyor. Kaynaklar kalelerin varlığını ve Osmanlılığını 16.-18. yy için söylüyor ama **dönem başlangıcını vermiyor** ⇒ **nokta önerisi YAZILMADI** (dönemsiz nokta yeni delik/emilme üretir). Akademik kaynak aranmadı.

**Öneri:** `A6A-Y13`.

---

## 0021/H-0005 — Tuna'daki (Boğdan'daki) iki boşluk

**Görsel:** 1594-11-13 (Bükreş ayaklanması), Soroka-Orhei-Bender; sağ üstte ve sol altta iki açık krem boşluk. Soru: *"bu topraklar hiçbir merkeze 200 km'den az uzaklıkta değil mi?"*

**Ölçüm:** görsel çerçevesinden koordinat (Orhei ve Bender ile sınandı, ±0,1°): üst ≈48.58N/30.04E · alt ≈46.68N/28.60E.
- Üst boşluğun en yakını **Uman 23 km — `kur:1616-01-01`**, 1594'te sahnede değil. Izgara (0,04°, bütün noktalar): 3720 hücrenin **603'ü Uman'ın** ⇒ **üst boşluk = Uman peteği.**
- Hiçbir ızgara hücresi en yakın noktaya **>200 km değil** ⇒ kullanıcının sezgisi doğru: sebep tavan DEĞİL.
- Alt boşluk: en yakın Bender 69 km (Osmanlı); ızgara yaklaşığında sahnede olmayan/sahipsiz hücre **yok** ⇒ ölçülemedi.

**Motor:** `uret_petek.py` `_kusatilmis()` — sahnede olmayan ve sahibi yazılmamış noktanın peteği, ancak kara komşuluğunun **≥%90**'ı sahipliyse komşuya devredilir. Uman'ın komşuları arasında **Yelisavetgrad da kurulmamış** ⇒ eşik tutmuyor ⇒ petek boş.

**Hüküm: ⚙️ motor** (üst) · **ölçülemedi** (alt — muhtemel kıyı/nehir yaslanması ya da Chaikin şeridi; petek geometrisi okunmadı).
**Öneri:** `A6A-Y14` — Oturum 0: sahnede olmayan noktanın peteği komşularla yeniden bölüşülsün ya da eşik hesabından sahnede olmayan komşu çıkarılsın.

---

## 0019/H-0050 — Canbirdi Gazâlî ileride yenilmiş: aradaki topraklar

**Görsel:** 1516-12-21; Şam ve Gazze-Han Yûnus Osmanlı, arada Nablus-Kudüs-Akkâ-Sayda hattı Memlük pembesi; Sayda Beyrut ile Sûr arasında Memlük.

**Ölçüm (29-34.3N / 33.3-38.8E):** 17 nokta — Osmanlı 6 (Baalbek · Beyrut · Şam · Sûr · Gazze · Han Yûnus) · tâbi 1 · **memlük 9** (Sayda · Akkâ · Nablus · Yafa · Amman · Kudüs · Kerak · El-Arîş · Maan). Memlük→Osmanlı günleri: Şam/Beyrut **1516-09-27** · Gazze/Han Yûnus 1516-12-21 · Nablus/Yafa **1516-12-28** · Kudüs **1516-12-29** · Sayda/Akkâ **1517-01-01**.

**Kaynak:**
- TDV `selim-i`: *"27 Eylül’de Şam’a ulaştı"* · *"Sinan Paşa’yı önden 4000 kişilik kuvvetle Gazze’ye gönderdi."*
- TDV `canbirdi-gazali`: *"Osmanlılar’ı Gazze’de durdurmak istedi. Ancak Han Yûnus mevkiinde Vezîriâzam Sinan Paşa’nın kuvvetleri karşısında yenildi (21 Aralık 1516)"* (veri ✓).
- TDV `nablus`: ***"Şehir 922 (1516) sonbaharında Osmanlı yönetimine girdi."***
- TDV `sayda`: *"922 (1516) Mercidâbık zaferinden sonra Osmanlı ülkesine katıldı"* ⇒ veri 1517-01-01 kaynağın **yılı dışında.**
- TDV `kudus`: *"… 29 Aralık 1516 … Kudüs’e geldi. Ancak Kudüs, padişahın gelişinden önce **muhtemelen Ekim 1516**’da Osmanlı yönetimine girmişti (Ercan, s. 10)."*
- TDV `yafa`: *"Mercidâbık Savaşı’nın ardından (922/1516) bütün Suriye Osmanlı hâkimiyetine girdi"* (bölge cümlesi) · `akka`: 1516/1517 **bulunamadı.**

**Hüküm: 🔴 veri yanlış.** Sorunun ① kısmının cevabı: **ileri harekât gerçek** — Sinan Paşa öncü kuvvetle Şam'dan Gazze'ye indi. **Ama aradaki şehirler Osmanlı'ya "geçmeden" değil:** TDV'ye göre Nablus 1516 sonbaharında, Sayda 1516'da, Kudüs muhtemelen Ekim 1516'da zaten Osmanlı yönetimindeydi. Veri devir günü olarak padişahın **geçiş/varış** günlerini (28-29 Aralık) ve bir **yıl yuvarlamasını** (1517-01-01) kullanmış ⇒ harita Memlük'ü üç ay **fazla** gösteriyor ve yapay bir "öncü koridoru" çiziyor. (Öncü kuvvet taraması önerisi — ② — sohbet ⑦'de zaten HAYIR; bu rapor ona dokunmaz.)

**Öneri:** `A6A-Y8` — Nablus · Sayda · Yafa · Akkâ → **1516-09-27** (*gün komşudan: Şam · TDV `selim-i` "27 Eylül’de Şam’a ulaştı"*; dört şart JSON'da) · Kudüs 🟡 karar (1516-10-01 ay ya da 09-27; Ercan s. 10 okunmalı). Halka yazılmadı (mevsim/yıl/muhtemel).

---

## Açık kalanlar ve sınırlar

- **Değişmez 2 etkileri ölçülmedi** — hiçbir yama uygulanmadı; her yamanın JSON'daki `degismez2` satırı yeni/silinen kırılmaları sayıyor, madde yakınlığı koşu 10 sonrasında `denetle.py` ile ölçülmeli.
- **Akademik kaynak hiç açılmadı** (Iranica · Fine · İnalcık vb.) — bütün hükümler TDV gövdesine dayanıyor; Bağdat günü, Vodina'nın 1371-87 hükümdarı, Temrük'ün dönem başlangıcı bu yüzden `okumadım/bulunamadı`.
- **Canlı harita açılmadı** (H-0070, H-0052 üçgeni, H-0005 alt boşluk).
- Takvim (Jülyen/Gregoryen) yalnız Üsküp 6 Ocak için işaretlendi; diğer günler TDV'nin verdiği gibi alındı.
