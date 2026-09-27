# KUNYE-ANADOLU-0081 — parti-emrelic-0080 Sınıf C (28 Eylül 2026)

Betik: `py denetim/KUNYE-ANADOLU-0081-uygula.py [--uygula] [--grup H5,H4,H3,H3b]` · kuru koşu:
**11 düzenleme, 4 dosya, SINAV temiz** (node ile: yalnız hedef alan değişiyor ve BEKLENEN diziye
eşit; öteki kayıtlar birebir). SINAV ters yönde de denendi: beklenen bozulunca BAŞARISIZ deyip yazmıyor.
Aletler: `-sahip.py` (motor evreni 4296 nokta, sahip önceliği suzgec.js ile aynı) ·
`-komsu.py` (Delaunay bitişikliği — YAKLAŞIK, motor çıktısıyla teyit edilmeli) · `-habsburg-olc.py`.

---

## H-0005 · Eretna kuruluş toprakları + eksklav — **eksklav YANLIŞ OKUMADAN doğuyor**
**Ölçüm (1335-01-01, motor evreni):** eretna 19 yerleşim, **2 parça**: ana gövde 18 + **Bayburt tek başına**
(komşuları Kelkit · Erzincan · Aşkale [ilhanli] · Rize [trabzon-rum] · Artvin [gurcistan]).
1340 · 1350 · 1360 · 1370'te de 2 parça.

**Bayburt'un kendisi DOĞRU:** TDV `bayburt` — *"Ebû Said Bahadır Han'ın ölümünden sonra (1335) Bayburt
Eretnaoğulları'nın eline geçti."*

**Kusur aradaki iki nokta:**
| nokta | atlas | TDV | hüküm |
|---|---|---|---|
| Erzincan | ilhanli →1348, eretna 1348→1378 | `erzincan`: *"önce Timurtaş'ın, ardından onun Anadolu'dan ayrılması ile Eretna Bey'in hükmüne girdi"* (yıl yok) | 🔴 **1348, "Bu sırada şehir Ahî İne (Ayna) Bey'in idaresindeydi (1348)" cümlesinden okunmuş** — o yıl Eretna'ya geçişi değil Ahî İne idaresini tarihler (TDV tuzağı ⑧). Başlangıç künye günü 1335-01-01'e çekilir, kaynaksızlığı kayda yazılır |
| Kemah | ilhanli →1340, **akkoyunlu 1340→1401** | `kemah`: *"İlhanlı hâkimiyetinin zayıflamasıyla Eretnaoğulları'nın idaresine girdi"* · *"Bir ara Erzincan emîri olan Mutahharten'in eline geçti"* · Akkoyunlu ancak Karakoyunlu'dan SONRA | 🔴 akkoyunlu 1340 TDV ile çelişiyor → eretna 1335→1378 · mutahharten 1378→1401 (gün komşudan: Erzincan · TDV erzincan 1378) |

**Kuruluş toprağı:** TDV `eretnaogullari` — İbn Battûta Eretna'nın *"Aksaray, Niğde, Kayseri ve Sivas'ı Şeyh
Hasan adına idare ettiğini"* bildirir; ölümünde (1352) listede de Niğde, Aksaray var. TDV `nigde`: XIV. yy.
ilk yarısında Eretna idaresine girdi, Karaman 1366-67'de aldı. Atlas Niğde ve Aksaray'ı **ilhanli 1308→1366**
tutuyor — üstelik ilhanli künyesi 1353'te bitiyor (**HAYALET, 13 yıl**) → eretna 1335→1366.
Atlasın öteki kuruluş noktaları: Malatya (eretna 1335-38 ✓ TDV `malatya` *"bir ara … 1338'den itibaren
Memlükler"*), Divriği (✓ TDV, yıl yok), Kırşehir (TDV *"XIV. yüzyıl ortalarında"* — 1335 kaba ama çelişmiyor).
Osmancık · Merzifon · Gürün · Terme · Çarşamba **ölçülmedi** (TDV'de ayrı cümle aranmadı).

**Öngörü (Delaunay, motor çıktısıyla teyit gerek):** 1335 · 1340 · 1350 · 1360 · 1370'in HEPSİNDE 2 parça → **1 parça.**
Değişmez 2s: yeni `s:` kırılmaları 1335-01-01 (`olaylar_ek16.js:53` kuruluş maddesi, 0 gün) ve Kemah 1378
(`olaylar_2s_0919.js:394`, 0 gün) — karşılıklı. Kalkan kırılmalar: Erzincan 1348 · Kemah 1340.
Değişmez 4c: Niğde ve Aksaray'ın ilhanli hayaleti −2 (benim ölçümüm; denetle.py sayısı koşuyla doğrulanmalı).

## H-0016 · 1402-09-15 Karaman — **DEĞİŞİKLİK YOK, büyüklük Timur'un eseri: TDV doğruluyor**
TDV `karamanogullari`: *"Ankara Savaşı'ndan (1402) sonra Timur Karamanlı ülkesini **Kayseri, Kırşehir,
Sivrihisar ve Beyşehir**'le birlikte Alâeddin Bey'in oğulları Mehmed ve Ali beylere vermişti."*
Atlasın 22 noktasından bu dördü + 1380 listesindeki Karaman çekirdeği (Lârende, Anamur, Silifke, Ermenek, Ulukışla,
Niğde, Aksaray, Akşehir, Ilgın, Konya, Beyşehir, Seydişehir) TUTUYOR. ⇒ Emre'nin sorusunun cevabı **EVET.**
⚠️ **Tutmayan beş nokta — Hamîd-ili** (Isparta · Burdur · Eğirdir · Uluborlu · Yalvaç, hepsi karaman 1402-09-15→1415):
TDV Timur'un verdikleri arasında SAYMIYOR; `karamanogullari` *"Mehmed Bey, Hamîd-ili'ni ülkesine kattıktan sonra …"*
(YIL YOK); `isparta` *"Timur'un ordularının geri dönüşü sırasında Uluborlu ve Eğridir işgal edilip tahribata
uğramakla birlikte (1403)"*. Geçiş günü **bulunamadı** (`hamidogullari`, `isparta`, `mehmed-bey-karamanoglu`
— bu sonuncusu XIII. yy. Mehmed Bey, ilgisiz). Yerine yazacak kaynaklı gün olmadığı için değiştirmedim; kayda
"gün kaynaksız" notu koordinatörün kararı.

## H-0003 · Habsburg künyesi Mohaç'ta başlıyor — **sınıf ② AYNI POLITY → GENİŞLET**
**Sınıflandırma:** Viyana ve Graz 1281'den beri `s:avusturya` (= habsburg künyesinin `harita:` anahtarı) —
yani harita bu devleti 1281'den beri ÇİZİYOR, dizin 1526'da "kuruluyor" diyor. Aynı hanedan, aynı başkent,
aynı toprak çekirdeği sürüyor → ② (① öldü değil · ③ ardıl yapı değil).
**Kaynak:** TDV `avusturya` XVI-XX. yy.'ı işliyor, başlangıcı vermiyor. *Die Welt der Habsburger*
(habsburger.net, Schönbrunn Group): Rudolf I *"enfeoffed his sons with the duchies of Austria, Styria and
Carniola together with the Wendish March in **1282**"*. Gün yok → **f:"1282-01-01"**.
Mohaç (1526) Habsburgların Macar ve Çek taçlarını aldığı yıldır, devletin kuruluşu DEĞİL.
**Ölçüm:** `s:avusturya` 239 dönem / 172 yerleşim. f=1526-08-29 ile künyeden >400 gün önce başlayan **6**:
Viyana · Graz (1281) · Ljubljana (1335) · Trieste (1382) · **Uyvar · Nitra (1281)**. f=1282 ile **0**.
🔴 **H3b ŞART:** Uyvar ve Nitra Macar Krallığı toprağıdır (macaristan künyesi 1526-08-29'da bitiyor);
H3 tek başına inerse bu iki kusur 4d'den **GİZLENİR** (1281→1282 tolerans içinde). H3b onları aynı dosyadaki
Komárom kaydının deseniyle macaristan 1281→1526-08-29 + avusturya 1526-08-29→1663'e böler.
⚠️ Nitra için kasaba-tanecik kaynak OKUNMADI. ⚠️ Uyvar 1545'te KURULDU (TDV `uyvar`) — `kur:` alanı yok,
nokta 1281'den beri var sayılıyor (Değişmez 5 sınıfı) — dokunmadım, bildiriyorum.
Dokunulmayan: künyenin `ozet`i ve 1526-08-29 `tur:"kurulus"` kronoloji maddesi (I. Ferdinand Çek tacını Ekim 1526,
Macar tacını Aralık 1526'da aldı — Mohaç günü değil) — metin alanı, koordinatörün kararı.

## H-0004 · Debrecen 1526-08-29'da Osmanlı mı — **HAYIR; kayıt kendi beyanını çiğniyor**
**Ölçüm:** Debrecen `v: 1526-08-29 → 1660-08-27` (adsız, `k:` yok) ⇒ Mohaç GÜNÜ tâbi rengi. Görsel tam o gün.
Kaydın kendi başlığı: *"zincir Varad kaydının günleriyle BİREBİR aynı"*. Varad: macaristan →**1526-09-01**,
v 1526-09-01→1541-08-29 *"Macaristan (Zapolya vasal krallığı)"*, v 1541-08-29→1660-08-27 *"Erdel Prensliği"*.
Debrecen üç gün önce ve adsız başlıyor → Varad'a hizalandı. Değişmez 2: 1526-09-01 Mohaç'a 3 gün ✓, 1541-08-29
"Budin'in ilhakı" 0 gün ✓.
⚠️ Bölgesel soru (dokunmadım): Zápolya'nın tâbiliği 1526-09-01'de başlatılıyor; TDV `macaristan` yalnız
*"János Szapolyai (1526-1540) … yerli kral seçtiler"* ve *"1529'da … Budin'e yeniden girdi ve burayı
Szapolyai'ye bıraktı"* diyor. Varad · Erdel · Debrecen'in hepsi aynı sözleşmeyi taşıyor; ayrı kalem.

---
## Rastlanan, dokunulmayan
- `kronoloji_akkoyunlu.js:122` 1378-01-01 *"Erzincan ve Bayburt **Eretna'ya** geçti"* — TDV ve `olaylar_2s_0919`
  Mutahharten diyor; başlık çelişkili.
- Kemah 1402-07-28→1502 `akkoyunlu`: TDV'ye göre 1402'de Timur Kemah'ı Mutahharten'e geri verdi, sonra Karakoyunlu —
  bu pencere de şüpheli, H-0005 kapsamı dışı.
