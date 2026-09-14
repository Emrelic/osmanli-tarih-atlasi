# NEHİR GEÇİŞ SÜRELERİ — KAYNAKLI SÜRE ARAŞTIRMASI

```
TARİH     14-15 Eylül 2026 · tek kullanımlık araştırma oturumu
ÖNCÜL     denetim/ARASTIRMA-NEHIR-0912.md · oturumlar/MENZIL-KARARLARI-0912.md · data/gecitler.js
VERİ      denetim/NEHIR-GECIS-SURE-0915.json  (her sayı `guven` + `kaynak` taşır)
YÖNTEM    5 paralel araştırma kolu · TDV slug testi (302 = ölü; 200 → GÖVDE OKUNDU) ·
          DergiPark/Belleten PDF metni · archive.org birincil eser tam metni
🔴 data/ ve arac/ altına YAZILMADI (koşu sürüyor).
GÜVEN     kaynakli · turetildi (hesap yazılı) · bulunamadi
```

# ⓪ TEK CÜMLEYLE

**Özne rutin idare olunca nehir bedelinin birimi "saat" değil "günün geri
kalanı"dır.** Kaynaklı beş kafile kaydının **beşinde de** feribotla geçiş
o günün kalan yürüyüşünü tüketti; fiilî karşıya geçiş ise yalnız ≈4 saatti.
Ordu için hazır köprü **1,25–3 gün**, köprü kurarak kurma medyanı **7 gün** (n=10).
**Tek kişinin (ulak/memur) bir nehri kaç dakikada geçtiğini veren kaynak BULUNAMADI.**

---

# ① ÖNCE BU — 12 EYLÜL RAPORUNA DÜZELTMELER

| # | 0912'de yazan | Ölçüm | Hüküm |
|---|---|---|---|
| D1 | Drava/Ösek 1526: köprü **"beş günde"**, **300 m** | Perjés 1988 (Karavelioğlu 2013 aktarımı): köprü 14 Ağustos'ta başladı, 19 Ağustos'ta bitti. "Beş gün" ifadesi **hiçbir akademik kaynakta geçmiyor**. "300/332 m" **yalnız Vikipedi'de** var. | 5 gün → `turetildi`. **Uzunluk silinmeli.** |
| D2 | Ösek 1526 geçişi (tek kayıt) | **Kayıt A**, Perjés: geçiş 21 Ağustos'ta başladı, "üç gün üç gece" sürdü. **Kayıt B**, TDV `mohac-muharebesi`: son grup 22 Ağustos'ta geçti, yani 2 gün. | **ÇELİŞKİ.** Birleştirilmedi. |
| D3 | "16 Ağu 1526 Osijek-Darda köprüsü, Mimar Sinan, ~7 km" | **1566** Zigetvar köprüsüyle **karışmış**: 118 gemi, 4800 zirâ ≈ 3,5 km, 17 gün (Selânikî; Tanyeli 1990; Gökbilgin 1966). "7-8 km" yalnız Vikipedi'de. Tanyeli, Evliya'nın da köprüyü 1526'ya tarihlediğini kaydediyor. | 0912 G bölümündeki satır **yanlış vaka**. |
| D4 | "Ordu, HAZIR köprüden geçiş süresi — **bulunamadı**" | Artık **6 kaynaklı kayıt** var (§③). | **Kapandı.** |
| D5 | "Sefer mevsimi bedeli düşürmez, YÜKSELTİR" | Kar erimesi rejimli nehirlerde (Tuna, Sava, Tisa, Fırat, Dicle, Aras, Sakarya, Özi, Ten) tutuyor. **Nil'de TERS:** Mayıs en düşük 669, Eylül en yüksek 8.389 m³/s. Meriç/Edirne'de yılın en yüksek ayı **Ocak**, yani sezon dışı. | Hüküm **genel değil**. Nil ve Meriç istisna. |
| D6 | Ordu köprü kurarak "200 km = 5 gün × 40" | Taban tek vaka ve o vaka da türetilmiş (D1). Yeni dağılım n=10: kurma medyanı **7 gün**, aralık 1–17 (§⑥). | Taban **değişti.** |

📌 **`data/gecitler.js` için (dokunulmadı, koordinatöre):**
- `kopru` kademesinin gerekçesindeki *"Çobandede, askerin geçişi 3 gün"* bir **ORDU** verisidir. Rutin idare öznesi için köprü bedelinin dayanağı olamaz.
- Budin–Peşte kaydı TDV `budin` ile tutarlı ("on gün içinde"). Ama TDV `suleyman-i` padişahın Budin'e 11 Eylül'de girdiğini ve köprünün 19 Eylül'de bittiğini yazıyor. Köprüye girişten sonra başlandıysa süre ≤8 gün çıkar. Başlangıç tarihi kaynakta yok, bu yüzden bu bir **çelişki adayıdır**, çelişki değil.
- Rusçuk–Yergöğü "70 şayka" doğrulandı (TDV `tuna`).

---

# ② SORU 1 — TUNA VE KOLLARINI GEÇEN ORDU VAKALARI

Günler: "kurma" = köprü başlangıcından bitişine; "geçiş" = ordunun ilk ve son geçişi.

| Vaka | Nehir · yer | Köprü kurma | Ordu geçişi | Ölçü | Güven · kaynak |
|---|---|---|---|---|---|
| 1396 Niğbolu | Tuna · Orsova | bulunamadı | bulunamadı | — | TDV `nigbolu-savasi` yalnız "Orsova yakınında aştı" diyor. "8 gün" yalnız popüler sitede, kullanılmadı. |
| 1444 Varna | Tuna | köprü yok/bulunamadı | **18–22 Eylül 1444** (4–8 C.âhir 848) | — | kaynakli · TDV `murad-ii` (aralık olarak veriyor, süre olarak değil) |
| 1462 Eflak | Tuna | bulunamadı | bulunamadı | büyük şayka 14 at alıyordu | TDV `tuna`. "Turnu, 80 kayık" yalnız Vikipedi'de. |
| 1476 Boğdan | Tuna · İsakça | gemilerden köprü (Tursun Bey) | Temmuz başı, gün sayısı yok | — | kaynakli · TDV `mehmed-ii`; Tanyeli 1990 |
| 1484 Kili-Akkerman | Tuna · İsakça | köprü değil, donanma desteği | **26 Haziran 1484** geçiş | donanma ≤~100 birim | kaynakli · Beldiceanu 1983 (*Belleten* 186) |
| **1521** Belgrad | Sava · Böğürdelen (kazıklı) | **9 gün** ↔ 9-10 ↔ 17 (üç kayıt); 10?→18 Temmuz | köprü selde yıkıldı; gemiyle **20 gün** ↔ **~1 ay** | 1.800 zirâ ≈ 1.364 m | kaynakli · Deniz 2025 (*Hazine-i Evrak* 7) |
| **1521** Belgrad | Sava-Tuna · Belgrad önü (duba) | **12 gün**, 6→18 Ağustos | 31 Ağu ↔ 15 Eyl (iki kayıt) | zincirli duba | kaynakli · Deniz 2025 (Feridun Bey *Münşeât* I) |
| **1526** Mohaç | Drava · Ösek | **5 gün**, 14→19 Ağustos | 21→23/24 Ağu (Perjés) ↔ 21→22 Ağu (TDV) | bulunamadı | turetildi / kaynakli · Perjés 1988; TDV `mohac-muharebesi` |
| **1526** | Tuna · Budin–Peşte | "on gün" ↔ ≤8 gün | padişah 21 Eylül'de geçti | sonraki kalıcı köprü ~70 kayık | kaynakli · TDV `budin`, `suleyman-i` |
| **1532** Alman seferi | Sava · Belgrad (**hazır**) | — | **26→28 Haziran, ≈2-3 gün** | — | turetildi · Erdoğru 2014 (ruznâme) |
| **1532** | Raba | emir 5 Ağu → geçiş 7 Ağu, **≤2 gün** | 7-8 Ağustos | — | turetildi · Erdoğru 2014 |
| **1532** ⭐ | Drava · Morporuk | **3-4 gün**, 16→19 Eylül | **20 Eyl sabah → 21 Eyl öğle ≈ 1,5 gün**, gece de sürdü; sonra köprü yakıldı | — | turetildi · Erdoğru 2014 — **en temiz vaka** |
| **1538** Karaboğdan | Tuna · İsakça | bulunamadı | **30 saat** (Celâlzâde) ↔ "bir iki gün" | gemi köprüsü | kaynakli · Guboğlu 1986 (*Belleten* 198) |
| **1538** | Prut (Sinan) | **13 gün** | bulunamadı | — | kaynakli · TDV `sinan`. Rûznâmedeki "iki gün ara" kaydıyla bağdaşmıyor. |
| **1566** Zigetvar | Drava · Ösek–Darda | **17 gün** (Sâî: 16 + 17. gün geçiş) | 19 Temmuz'da tamamen geçildi | **118 gemi · 4800 zirâ ≈ 3,5 km** | kaynakli · Selânikî (Tanyeli 1990); Gökbilgin 1966 |
| **1595** Eflak | Tuna · Rusçuk–Yergöğü | bulunamadı | ricatte geçiş **3 gün sürecekti** (plan) · köprü çöktü | **70 şayka** | kaynakli · TDV `tuna`; Alkan 2013 · çöküş günü 24 Ekim ↔ 27-30 Ekim doğrulanamadı |
| **1621** Hotin | Tuna · İsakça | 12 Temmuz'da bitmemişti; Şaban içinde bitti (**≤~8 gün** varıştan sonra) | alay alay; köprübaşında 18 gün, 29 Temmuz'da hareket | bulunamadı | kaynakli / turetildi · Kazalak-Gündüz (*OTAM*) |
| **1697** Zenta | Tisa | **≤2-3 gün** (8→10 Eylül) | 10 Eylül'de başladı, 11 Eylül'de Eugène baskını — **yarım kaldı** | **83 araba tombazı** | kaynakli / turetildi · TDV `zenta` |
| **1711** Prut | Tuna · İsakça | tombaz yapımı Aralık 1710'da başladı; kurma günü bulunamadı | "haziranın son günleri" | **76 tombaz · 688,9 m × 9,1 m** | kaynakli · TDV `prut-antlasmasi`; Çağatay 2023 (*JIEES* 5/1) |
| **1711** | Prut | **bir gece** (19 Temmuz) | bulunamadı | — | turetildi · TDV `prut-antlasmasi` |
| **1737** | Tuna · İsakçı | ödeme dönemi 31 Mart–13 Mayıs (**kurulum süresi DEĞİL**); onarım 11 gün | bulunamadı | 71 ↔ 72 tombaz · 562 m | kaynakli · Çağatay 2023; Tuğluca-Bayram 2021 |
| **1769** | Tuna · İsakçı | kazıklar Ocak'ta çakıldı; ordu 14 Mayıs'ta vardığında bitmemişti; 20 günlük konakta tamamlandı | bulunamadı | **62 tombaz · 562,5 m × 12 m** | kaynakli · Tuğluca-Bayram 2021 (*Osm. Araşt.* LVIII) |
| **1770** | Tuna · İsakçı→Kartal | **taşkın yüzünden köprü kurulamadı** | tekneyle geçildi, süre yok | — | kaynakli · Tuğluca-Bayram 2021; TDV `ivazzade-halil-pasa` |
| **1828** Rus | Tuna · Satunovo–İsakça | **≈23 saat** (03:00 → ertesi 02:00) | 8 Haziran çıkarma → **11 Haziran bütün 3. Kolordu geçti** | **63 praam + 12 ponton · nehir 900 adım** · ≤30.000 kişi | kaynakli / turetildi · Moltke 1854 (birincil gözlem) |
| **1877** Rus | Tuna · İbrail / Galaç | İbrail **12→16 Haziran**; su çekilene kadar kullanılamadı | 22 Haziran'da iki alay tekneyle geçti | ~22.000 piyade | kaynakli · Greene 1879 (ABD ataşesi raporu) |
| **1877** Rus ⭐ | Tuna · Zimniçe–Ziştovi | **28 Haziran → 2 Temmuz** | tekneyle ilk gün **25.000** kişi (≈20 saat); köprüden **3→16 Temmuz ana ordu = 14 gün** (kolordu başına 2-7 gün); IV. Kolordu dahil 30 Temmuz | köprü boyu bulunamadı · ordu ~200.000 | kaynakli / turetildi · Greene 1879 |

🔴 **Bulunamayanlar:** 1396, 1462, 1529, 1541/43, 1596, 1663-64, 1686-97 köprü günleri; 1716-17; 1736-39 Rus geçişleri; 1773; 1790; 1806-12; 1853-54; Niğbolu–Turnu 1877 köprüsü.
Hepsi için yalnız Vikipedi ya da popüler kaynak vardı, sayı alınmadı. Erişilemeyen birincil neşirler:
- Feridun Bey Mohaç rûznâmesi
- Börekçi 2016 Eğri rûznâmesi
- Kurat, *Prut Seferi*
- Rus resmî 1877 harp tarihi

---

# ③ SORU 2 — HAZIR KÖPRÜDEN ORDU GEÇİŞİ

| Kayıt | Köprü | Ordu | Geçiş | Güven |
|---|---|---|---|---|
| Celâlzâde, 1538 | Tuna / İsakça gemi köprüsü | Kanunî ordusu | **30 saat** (↔ "bir iki gün") | kaynakli · Guboğlu 1986 |
| Ruznâme, 1532 | Drava / Morporuk (yeni kurulmuş) | Kanunî ordusu | **≈1,5 gün**, gece dahil | turetildi · Erdoğru 2014 |
| Ruznâme, 1532 | Sava / Belgrad (hazır) | Kanunî ordusu | **≈2-3 gün** | turetildi · Erdoğru 2014 |
| Evliya Çelebi | Aras / Çobandede (taş, 7 kemer) | doğu seferi askeri | **3 gün** | kaynakli · TDV `aras` |
| Moltke, 1828 | Tuna / Satunovo (75 yüzer) | Rus 3. Kolordu, ≤30.000 | köprü bitince **≤2-3 gün** | turetildi · Moltke 1854 |
| Greene, 1877 | Tuna / Ziştovi | Rus Tuna ordusu ~200.000 | **14 gün** (kolordu başına 2-7) | turetildi · Greene 1879 |
| Perjés ↔ TDV, 1526 | Drava / Ösek | Kanunî ordusu | **3 gün 3 gece ↔ 2 gün** | çelişki |
| Alkan, 1595 | Tuna / Rusçuk–Yergöğü | Sinan Paşa ordusu | **3 gün — PLAN**, gerçekleşmedi | kaynakli (plan) |

⇒ Osmanlı imparatorluk ordusu için **1,25–3 gün**, medyan ≈ **2 gün**.
⚠️ 1877'deki 14 gün **ayrı bir mertebedir**: ordu yaklaşık 7 kat büyük ve geçiş harekât planına göre kademelendirilmiş. Tabana katılmadı, dışarıda yazıldı.

---

# ④ SORU 3 — TEK KİŞİ / MEMUR / KAFİLE FERİBOTLA

🔴 **ANA SONUÇ: bulunamadı.**
Aşağıdaki kaynakların hiçbiri **tek ulağın/memurun** bir nehri kaç dakikada ya da saatte geçtiğini söylemiyor:
- TDV `ulak`, `menzil--osmanli`, `peyk`, `berid`
- Busbecq, Evliya (Hammer çevirisi c. II), Teixeira, Otter, Tavernier, Buckingham, Ainsworth
- Öğün-Başı 2016, Altan 2020, Dursun 2012, Parlak 2021

**Tek bir teknenin tek seferinin** süresi de hiçbir kaynakta yok. Bütün süreler **kafile/kervan** düzeyinde.

| # | Yer · tarih | Özne | Fiilî geçiş | Bekleme | Kapasite | Kaynak |
|---|---|---|---|---|---|---|
| K01 ⭐ | Fırat · Birecik · Mayıs 1816 | kervan | şafaktan sonra → "öğleye yakın" (**≈3-5 s**, turetildi) | gümrük **akşama kadar** | **6 tekne**; tekne başı ~2 ton + 4 deve + 1-2 at + 3-4 eşek + 8-10 yolcu; mürettebat 6; akıntı ~400 m sürüklüyor | Buckingham 1827, I s.45-49 |
| K02 ⭐ | Fırat · Müseyyib · 3 Ekim 1604 | küçük kafile | gün doğumu → 10:00 sonrası (**≈4 s**, turetildi) | önceki akşam "vakit geç" → **bir gece** | **2 feribot**; kişi/denk başına ücret | Teixeira (Hakluyt 1902) s.55-56 |
| K03 | Fırat · Ana · 23-24 Aralık 1604 | küçük kafile | süre yok | **izin + karanlık → ≈18-20 saat** | — | Teixeira s.80-81 |
| K05 | Dicle · Musul · 1737 | elçilik kafilesi | kayık köprüsü kırık, **2 gün** | +1 gün hazırlık | — | Otter 1748 |
| K06 | Ceyhan · Misis · 1737 | elçilik kafilesi | süre yok | köprü yıkık, sal yapımı **6 gün** | — | Otter 1748 |
| K12 | Fırat · Birecik · 1836 | 6 kişi | süre yok | feribot gecikmesiyle ilk gün kısaldı | — | Ainsworth 1888, I s.190 |
| K13 | Habur · Zaho · 1830'lar | küçük kafile + katır | süre yok | boşaltıp yeniden yükleme ≈ **yarım gün** (turetildi) | nehir ~20 yarda, taşkında | Ainsworth 1888, II s.328-9 |
| K11 | Fırat · Birecik · 1552/1570 | iskele teşkilatı | — | — | 45 / 63 görevli (5 / 6 reis) | TDV `birecik` |
| K04 | Dicle · Bağdat · 1604 | genel trafik | — | köprü **her gece**, cuma namazında ve taşkında açılıyordu | — | Teixeira s.61; TDV `bagdat` |
| K15 | Dicle · köprüsüz yerler · 19-20. yy | tek yolcu | — | kelek çoğu zaman hazır bulunmazdı | **tek tulum = 1 yolcu** | Öğün-Başı 2016 (*JHS* 8/3) |
| K18 | Tuna · 1860 | posta | — | Tuna donunca posta süvari zaptiyesine verildi; gün sayısı yok | — | Dursun 2012 (BOA A.MKT.MHM 204/12) |
| — | Drava · Ösek köprüsü · 17. yy | yolcu | köprüyü geçmek **2 saat** (~3,5 km) | — | — | Evliya, Tanyeli 1990 s.10 aktarımı |

🔴 **DESEN — ve bedelin birimini değiştiren bulgu:**
```
fiilî geçiş (kafile)      ≈ 4 saat          K01 · K02
günün geri kalanı gitti    5 / 5 kafile kaydı K01 gümrük · K02 gece · K03 izin+karanlık ·
                                              K12 ilk gün kısaldı · K13 yarım gün
köprü kırık / tekne yok    2 – 6 GÜN          K05 · K06
```
⇒ Beklemenin sebebi **nehrin genişliği değil, KURUMDUR**: gümrük, teskere/izin, gece kapanan köprü, tekne bulunmaması.
Bu yüzden bedel genişlik ya da debiyle ölçeklenmez. Kaynaklarda böyle bir ilişki **hiç geçmiyor**, sayı üretilmedi.

---

# ⑤ SORU 4 — 16 NEHİR: SEFER MEVSİMİ DEBİSİ VE GENİŞLİĞİ

TDV'nin **hiçbir** nehir maddesi debi ya da genişlik vermiyor (`tuna`, `firat`, `dicle`, `nil`, `aras`, `meric` gövdeleri okundu). Rejim cümleleri yalnız `dicle` ve `meric` maddelerinden alındı. Aşağıdaki sayılar kurumsal ve akademik kaynaklardan geliyor.

| Nehir | İstasyon (dönem) | Yıllık debi m³/s | Sezonun en yüksek ayı | Sezonun en düşük ayı | Genişlik | Güven · kaynak |
|---|---|---|---|---|---|---|
| **Tuna** Budin | Nagymaros (1921-2012) | 2.308 | Haziran-Temmuz (Alp) | (Kasım-Ocak, sezon dışı) | bulunamadı | kaynakli · Konecsny-Nagy 2014 |
| **Tuna** Novi Sad–Belgrad | Bezdan (1931-90) / Pančevo | 2.372 / 5.380 | Nisan-Mayıs | sonbahar | **350-500 m** (Novi Sad kesimi) · **500-800 m** (Belgrad kesimi); hız 0,5/0,85/1,4 m/s | kaynakli · Belz 2004 (Sommerwerk 2009); Soskić-Ćurčić 2011 (1960 askerî tarif, baraj öncesi) |
| **Tuna** Vidin→Silistre | Gruia→Chiciu (1931-70) | 5.692 → 6.204 | Nisan-Mayıs | Ağustos-Eylül | bulunamadı (Moltke 1828: Demirkapı altında hiçbir yerde 900 adımdan dar değil; Greene 1877: ana kol ~1.000 yarda) | turetildi · Gâştescu-Ţuchiu 2012 |
| **Tuna** İsakça | Ceatal Izmail (1931-70) | 6.470 | Nisan-Mayıs | Ağustos-Eylül | 1828 Satunovo'da **900 adım** | turetildi · Gâştescu 2012; Moltke 1854 |
| **Sava** | Sr. Mitrovica (1931-90) | 1.572 | **Nisan ≈2.433** | **Ağustos ≈637** | ≤1.000 m (üst sınır) | kaynakli · Belz 2004; Leščešen 2022 |
| **Drava** | Donji Miholjac (1931-90) | 541 | Mayıs 611 (Mayıs-Haziran) | bulunamadı | bulunamadı | kaynakli · Belz 2004; *HSJ* 2021 |
| **Tisa** | Szeged (1921-2012) / Senta | 834 / 792 | Mart-Nisan | Ekim | **Senta 220 m**, ortalama ~150 m; 0,5 m/s | kaynakli · Konecsny-Nagy; Soskić-Ćurčić |
| **Prut** | Ungheni (baraj öncesi) | 86,6 ⚠️ doğrulanmadı · kurumsal 78-94 | Mart taşkını | bulunamadı | bulunamadı | düşük · Moldova Çevre Bak. |
| **Özi** | Kiev / ağız | 1.380 / 1.670 | ilkbahar zirvesi ~7.000 (Kiev) | yaz payı %17-21 | **Kiev ~700 · şelaleler 300-800 · Kichkas 175 m**; şelalelerde 6 m/s'ye kadar | kaynakli · *Encyclopedia of Ukraine* (baraj öncesi yatak) |
| **Ten** | Razdorskaya (natüralize 1891-1964) | 845 | Mart-Mayıs %62,4; zirve ≈3.900 (Mayıs) | yaz-sonbahar ≈400-500 | ≤396 m (yukarı kesim) | turetildi · Georgiadi 2023; Britannica (ikinci kaynak) |
| **İdil** | Volgograd (doğal 1881-1957) | 8.112 | Mayıs-Haziran | bulunamadı | bulunamadı | turetildi · Safarov 2024 |
| **Fırat** | Keban (1936-67) · Jarablus (1938-73) | 648 · ≈951 | **Nisan-Mayıs ≥2.000** (Keban) | **Eylül** (min 136) | **Anah-Hit ≈320 m, 3,4 m derin, taşkında 1,5 m/s**; deve geçitleri (Hit-Felluce) | kaynakli / turetildi · UNU Press; ESCWA 2013; Chesney 1836 |
| **Dicle** | Musul / Kut (1931-73) | ≈675 / ≈1.014 | Nisan | Ağustos-Ekim (%7) · Cizre Eylül 55 | Musul, Bağdat, Cizre: bulunamadı | turetildi · ESCWA 2013; TDV `dicle` |
| **Nil** | Vâdî Halfa (1911-60) | ≈2.729 | 🔴 **Eylül 8.389** | 🔴 **Mayıs 669** | Sudan kesimi ortalama 600 m | turetildi · Sutcliffe-Parks 1999 |
| **Aras** | Kür kavşağı · Surmeli (TR) | 210 · 56 | Nisan-Mayıs | Ağustos-Eylül | **Nahçıvan ≤55 m**; Megree ≈73 m, 1,2 m derin; yazın birçok yerde sığ geçit | kaynakli · *Iranica* (Kinnier 1810); UNECE 2011 |
| **Kür** | Tiflis (dönem ?) | 204 | bulunamadı | bulunamadı | bulunamadı | kaynakli, orta güven · UNECE 2011 |
| **Kızılırmak** | istasyonu belirsiz (35 yıl) | 184 | Nisan | Ağustos (bazı yıllar ~10) | bulunamadı | kaynakli, istasyon belirsiz · Bahadır 2011 |
| **Sakarya** | Doğançay (1953-75) | 136,9 | **Nisan 247,1** | **Ağustos 61,9** | genel 60-70 m (yer yer 150) | kaynakli · Işık-Şaşal-Doğan 2006 (EİE) |
| **Meriç** | Edirne Meriç Köprüsü (≤1976) | 182 | **Nisan 278,2** | **Ağustos 64,9** | bulunamadı | kaynakli · Kurter 1976; TDV `meric` |

**Buz (sezon dışı, ama kışlık geçiş için):**
- Tuna/Tulcea: 1837-1950 arası ~32 gün/kış; tarihî buz geçişleri var (1595; Evliya 1659, Yergöğü)
- Prut: 60-65 gün
- Özi: Zaporijya ≈63 gün
- Ten: Kalach ≈120 gün
- İdil: aşağı kesim ≈90 gün
- Aras: buz üzerinden geçildiği kayıtlı (Tavernier), gün sayısı yok

⚠️ **Baraj uyarısı:** Mümkün olan her yerde baraj öncesi dönem seçildi (Tuna 1931-70, Fırat ≤1973, Nil ≤1960, Ten ≤1964, İdil ≤1957). Dört değer baraj sonrasına düşebilir: Kür, Kızılırmak, Meriç ve Sakarya'nın 1953-75 dizisi (Sarıyar 1956'dan sonra).

---

# ⑥ KURMA SÜRESİ DAĞILIMI (yerinde montaj)

```
vaka                          gün     güven
1828 Satunovo (Rus)           ~1      turetildi (23 saat)
1532 Morporuk                  3,5    turetildi
1877 İbrail                    4      turetildi
1877 Ziştovi                   4,5    turetildi (28 Haz → 2 Tem)
1526 Ösek                      5      turetildi
1521 Böğürdelen                9      kaynakli
1526 Budin–Peşte              10      kaynakli
1521 Belgrad (duba)           12      kaynakli
1538 Prut (Sinan)             13      kaynakli
1566 Ösek (3,5 km bataklık)   17      kaynakli
────────────────────────────────────────────
n = 10 · MEDYAN = (5 + 9) / 2 = 7 gün · aralık 1–17
yalnız Osmanlı (n=7)          medyan 10 gün
```
⚠️ **Bu sayılar yalnız YERİNDE MONTAJI ölçer.** Tombaz tedariki aylar önce başlıyordu:
- 1711: Aralık 1710'da başladı
- 1769: Kasım 1768'de başladı, kazıklar Ocak'ta çakıldı

Kalıcı ya da önceden hazırlanmış bir köprübaşı olan yerde (İsakça, Belgrad) ordu çoğu zaman **hazır köprü kademesine** düşer.

---

# ⑦ MOTOR İÇİN ÖNERİLEN ADIM BEDELİ

**Çerçeve (`MENZIL-KARARLARI-0912`):**
- Özne **RUTİN İDARE** (bağlayıcı, `D030`).
- Bütçe **40 yürüyüş saati** = 5 gün × 8 saat.
- km eşdeğeri = saat × 5,04 (Tobler düz hız).

**Dönüşüm kuralı (turetildi):** Bekleme geceye taşarsa, bütçeden yalnız **o günün kalan yürüyüş saatleri** düşer; gece saatleri düşmez. Bu yüzden bir geceyi aşan bekleme en fazla 8 saat eder. Ordu kayıtlarında 1 gün = 8 yürüyüş saati alındı.

| Özne | Geçit türü (`gecitler.js` `tur`) | Önerilen bedel | km eşdeğeri | Aralık | Güven | Dayanak |
|---|---|---|---|---|---|---|
| **İDARE** | `kopru` (kalıcı) | **0 saat ek** (kenarın kendi uzunluğu yeter) | 0 | 0 – 1,3 | turetildi | Evliya: 3,5 km'lik Ösek köprüsü 2 saat. Yürüme hızıyla 0,7 saat; fark ≤1,3 saat. Tek kişi için başka kayıt bulunamadı. |
| **İDARE** | `feribot` · `kale-cifti` | **8 saat** (1 yürüyüş günü) | **40 km** | 4 – 8 | turetildi | Fiilî geçiş ≈4 saat (K01 Buckingham 1816; K02 Teixeira 1604). **5/5** kafile kaydında günün kalanı gitti (K01 · K02 · K03 · K12 · K13). ⚠️ Kayıtlar KAFİLE; tek ulak için alt sınır bulunamadı. |
| **İDARE** | istisna: köprü kırık / tekne yok | yazılmaz (olay, sabit değil) | — | 16 – 48 | kaynakli | Musul 1737: 2 gün; Misis 1737: 6 gün (Otter 1748) |
| **İDARE** | `sig-gecit` (mevsimlik) | **bulunamadı** | — | — | bulunamadi | Varlık kaynaklı: Aras'ta yazın birçok yerde sığ geçit (Kinnier 1810/*Iranica*), Fırat'ta deve geçitleri (Chesney). Süre kaydı yok. Tek taşınabilir dayanak 0912'deki Herzog oranı (geçitli:geçitsiz = 1:4). |
| **İDARE** | geçit yok | **sabit yazılmaz** | — | — | — | Dolanma bedelini model hesaplar (0912 öneri 3). |
| ORDU | `kopru` (hazır) | **16 saat** (2 gün) | **81 km** | 10 – 24 (1,25-3 gün) | turetildi | İsakça 1538 30 saat · Morporuk 1532 ≈1,5 gün · Belgrad 1532 ≈2-3 gün · Satunovo 1828 ≤2-3 gün · Çobandede ~3 gün. Dışarıda: Ziştovi 1877, 14 gün. |
| ORDU | `feribot` (köprüsüz, tekneyle) | **önerilmez** | — | 8 – 240 (1 – 30 gün) | kaynakli | n=2, 30 kat fark: Ziştovi 1877'de 25.000 kişi ≈20 saatte (planlı çıkarma) ↔ Böğürdelen 1521'de 20 gün ↔ ~1 ay (Deniz 2025) |
| ORDU | köprü kurarak | **72 saat** (7 gün kurma medyanı + 2 gün geçiş) | **363 km** | 24 – 160 | turetildi | §⑥ n=10 + §③ medyanı. ⚠️ **40 saatlik bütçeyi tek başına aşar** ⇒ ordu bütçesi ayrı tanımlanmalı. |

📌 **Emre'nin "100 km"i** 19,8 saat eder. Bu değer **ordu / hazır köprü** kademesine (16 saat) yakın düşer. İdare / feribot (8 saat) bunun yarısıdır. 0912'nin *"100 km yalnız ordu için doğru"* hükmü, bu kez kaynaklı sürelerle **tutuyor**.

🔴 **Önerinin sınırı — koordinatörün kararına:**
1. **İdare/feribot için 8 mi 4 mü?** 8 = "günü yer" deseni (kaynaklı 5/5, ama öznesi kafile). 4 = fiilî geçiş. Tek memur için veri yok. **Önerim 8:** beklemenin sebebi kurum (gümrük, teskere, gece kapanan köprü) ve kurum tek memura da uygulanır (Ana 1604 izin; Musul'da teskere şartı, Ainsworth).
2. Bedel **kenara** yazılmalı, hücreye değil (0912 ④ bulgusu hâlâ geçerli).
3. Genişlik ya da debiye bağlı bir çarpan **önerilmez**. Kaynaklarda süre ile genişlik arasında bir ilişki yok; süreyi kurum belirliyor.

---

# ⑧ AÇIKÇA ÖLÇEMEDİKLERİM

```
🔴 bulunamadı   tek ulak / tek memur geçiş süresi (dakika-saat) — hiçbir nehirde
🔴 bulunamadı   tek teknenin bir yakadan öbürüne sefer süresi
🔴 bulunamadı   taşkın ya da buzla geçişin KAÇ GÜN kesildiği (Tuna 1855/1858/1860 kesintiyi
                söylüyor, gün sayısı vermiyor)
🔴 bulunamadı   Rusçuk–Yergöğü, Vidin, Silistre iskelelerinde tekne sayısı ve geçiş süresi
🔴 bulunamadı   Tuna yatak genişliği: Vidin · Niğbolu · Ziştovi · Rusçuk · Silistre ·
                İsakça noktaları (GRWL veri seti işlenmedi)
🔴 bulunamadı   Nisan–Ekim TAM aylık debi dizisi: yalnız Nil (Sutcliffe), Sava (Nisan/Ağustos),
                Sakarya ve Meriç (Nisan/Ağustos) sayılı
⚪ okumadım     Feridun Bey Mohaç rûznâmesi · Börekçi 2016 · Kurat *Prut Seferi* · Murphey ·
                Ágoston · Finkel · Halaçoğlu *Menziller* · Orhonlu *Derbend Teşkilatı* ·
                Dernschwam/Gerlach/Schweigger (Fraktur OCR aranamadı) — tam metne ERİŞİLEMEDİ
⚪ ölçülemedi   Prut/Ungheni 86,6 m³/s (sayfa Cloudflare arkasında, yalnız özet görüldü)
⚪ ölçülemedi   Kür, Kızılırmak, Meriç değerlerinin dönemi → baraj öncesi olduğu doğrulanamadı
⚪ ölçülemedi   1828 Satunovo köprüsünün başladığı gün (8 mi 9 Haziran mı; metin söylemiyor)
⚪ ölçülemedi   Moltke 1854 takvimi (Gregoryen kabul edildi — ÇIKARIM)
```

# ⑨ TDV SLUG NOTLARI — §4 tuzak listesine adaylar

```
② CANLI, YANLIŞ MADDE   kur → KÜR (ölçü birimi) · kura → KUR'A · sakarya → il ("bk. ADAPAZARI") ·
                        mohac → şehir (savaş: mohac-muharebesi) · kanuni-koprusu → Gebze'deki köprü ·
                        ozu → Özü KALESİ (Dinyeper değil) · ordu → askerî ordu (geçiş verisi yok)
③ CANLI, SAPLAMA        tatar → "bk. ULAK" · posta → "bk. BERÎD/MENZİL/PEYK/ULAK" ·
                        zigetvar · mimar-sinan · sinan-pasa-koca · sefername (~2 KB yönlendirme)
DOĞRUSU                 menzil (302) → menzil--osmanli · savaş: mohac-muharebesi · sinan
① ÖLÜ (bu işte ölçüldü) kizilirmak · menzil · iskele · kelek · mauna · derbend · tombaz · sayka ·
                        osek · osijek · drava · sava · tisa · prut · turla · ozi · dinyester ·
                        zistovi · ismail · osmanli-rus-savaslari · kirim-savasi · musul
500 (Türkçe karakter)   kamaniçe · karaboğdan · ciğerdelen · maçin · ziştovi · özi
                        → "ölü" DEĞİL, taşıma arızası (§4 ⑤)
```
📌 Olay slugları yine ölü, bilgi yer ve kişi maddelerinde çıktı (`§4`: *TDV bir OLAY ansiklopedisi değildir*):
- 1444 geçişi `murad-ii` maddesinden
- 1538 Prut köprüsü `sinan` maddesinden
- 1711 köprüsü `prut-antlasmasi` maddesinden

---

## KAYNAKÇA (kullanılan)

**TDV İslâm Ansiklopedisi** (gövdeleri okundu): tuna · budin · varadin · isakca · yergogu · ruscuk · silistre · nigbolu · nigbolu-savasi · murad-ii · mehmed-ii · suleyman-i · mohac-muharebesi · sinan · lutfi-pasa · aras · kopru · zenta · mustafa-ii · cigerdelen · estergon · macaristan · akinci · prut-antlasmasi · ivazzade-halil-pasa · birecik · bagdat · firat · dicle · nil · meric · menzil--osmanli

**Akademik:**
- Deniz 2025, *Hazine-i Evrak* 7/7
- Erdoğru 2014, *Tarih İncelemeleri Dergisi* XXIX/1
- Tanyeli-Tanyeli 1990, *ODTÜ MFD* 10/1-2
- Gökbilgin 1966, *Tarih Dergisi* XVI/21
- Guboğlu 1986, *Belleten* L/198
- Beldiceanu 1983, *Belleten* XLVII/186
- Kazalak-Gündüz, *OTAM*
- Alkan 2013, *Akademik Bakış* 7/13
- Karavelioğlu 2013, *DEAD* 11 (içinde Perjés 1988, TTK)
- Heper-Türker 2024, *OMAD* 21
- Danış 2021, *FSM İlmî Araştırmalar* 18
- İpçioğlu, *Osmanlı Araştırmaları* X
- Çağatay 2023, *JIEES* 5/1
- Tuğluca-Bayram 2021, *Osmanlı Araştırmaları* LVIII
- Öğün-Başı 2016, *JHS* 8/3
- Altan 2020, *Hazine-i Evrak* 2/2
- Dursun 2012, *Türk Dünyası İncelemeleri Dergisi* XII/2
- Parlak 2021, *HÜ Türkiyat Araştırmaları Dergisi* 35

**Birincil (neşir/çeviri):**
- Moltke 1854, *The Russians in Bulgaria and Rumelia*
- Greene 1879, *The Russian Army and Its Campaigns in Turkey*
- Teixeira, Hakluyt 1902
- Otter 1748, *Voyage en Turquie et en Perse*
- Tavernier 1678, *Six Voyages*
- Buckingham 1827, *Travels in Mesopotamia*
- Ainsworth 1888, *Personal Narrative*
- Busbecq (Forster-Daniell 1881)
- Chesney, *Euphrates Expedition*

**Hidroloji:**
- Belz vd. 2004 (Sommerwerk vd. 2009, *Rivers of Europe*)
- Gâştescu-Ţuchiu 2012
- Konecsny-Nagy 2014
- Soskić-Ćurčić 2011
- Leščešen vd. 2022, *Water Supply*
- *HSJ* 66 (2021)
- Ionita vd. 2018, *Sci. Rep.*
- Georgiadi vd. 2023
- Safarov vd. 2024, *Water*
- Górski vd. 2011
- *Encyclopedia of Ukraine*
- ESCWA-BGR 2013
- UNU Press, *Managing Water for Peace in the Middle East*
- Sutcliffe-Parks 1999, IAHS SP5
- UNECE 2011
- *Encyclopaedia Iranica* "Araxes"
- Bahadır 2011, *Turkish Studies*
- Işık-Şaşal-Doğan 2006, *Gazi MMF Dergisi*
- Er-Atalay Dutucu 2020
- Kurter 1976, *İÜ GDAAD* 4-5
- Erkal-Topgül 2020
- Britannica: yalnız ikinci kaynak

**Kullanılmayanlar (yalnız ipucu):** Vikipedi · warfarehistorynetwork · kaynağı belirsiz arama özetleri · turizm siteleri
