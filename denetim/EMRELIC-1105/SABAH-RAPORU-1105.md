# Sabah raporu — 5 Kasım 2026 (EMRELİC koordinasyon)

## ① Ne ölçtüm (sayılarla)

**Koşu 34 (HAVVA)**
- Başlangıç 02:36, taban `7acb10c1e`; tam inşa (renkler tuzu değişmişti).
- 05:38 itibarıyla "Yabancı devlet gövdeleri" aşamasında, Traceback 0.
- 09:00'da eczane kısıtı başlayınca yavaşlayacak. Koşu 33'te bu aşama kısıt altında 18 saat sürmüştü; iniş öğleden sonraya, hatta akşama kalabilir.
- Bitince iniş zincirini aynı oturum, beklemeden başlatır.

**EVREN4 — zayıf kaynaklı sahiplik dönemlerinin akademik teyidi**

HAVVA kovası (HAVVA + KASA + UMIT ortak çalıştı): KAPANDI. 4.494 sıranın 4.490'ı tarandı. Birleşik sayım: `origin/havva-1104-l2` → `denetim/EVREN4-1105/BIRLESIK-SAYIM.md`.

| Satır bazında | Ham | Kural sonrası |
|---|---|---|
| Kaynaklı | 2.272 | **2.199** |
| Öneri | 1.313 | 1.386 |
| Bulunamadı | 734 | 734 |
| Bakılmadı | 597 | 597 |

Kural sonrası inişler (73 satır):
- Ticarî ya da genel ansiklopedi: 42.
- Japon genel ansiklopedisi: 9.
- state.gov tanıma günü: 22. Tanıma, bağımsızlığı tarihlemez.

Kaynaklı satırların makinelere dağılımı: HAVVA 1.885 · KASA 130 · UMIT 257.

Öteki kovalar:
- **KASA kovası:** 82/82 parti, 4.496 dönem. Kaynaklı 2.400 (%53), öneri 1.106, bulunamadı 590, bakılmadı 400.
- **UMIT dilimi (r8_127 → 076 ve 033/038/039):** 55 parti, 440 yerleşim, 844 satır. Kaynaklı 257, öneri 429, bulunamadı 119; 31 satırda başlangıç geri çekildi.
- **LAB PAZAR v2:** parti 010–043 bitti (sıra 1569'a kadar). Kalan bölüşüldü:
  - LAB PAZAR: 1616–1935.
  - KASA SALI: 1936–2255 (320 dönem); üç ajanla başladı.

**Bu gece bulunan sistemik açıklar**
- **Çeviri açığı:** `js/ceviri.js` yalnız `OLAYLAR*` dizilerini ve devlet adlarını çeviriyor. Bütün `KRONOLOJI_*` dizileri hiçbir dilde çevrilmiyor: 150 dizi, **13.203 madde**. Bunun 8.619'u sınır ve çok taraflı kronolojiler. "Çeviri eşitliği" kuralına (4 Kasım) aykırı. KASA'nın bu gece yazdığı 147 çeviri JSON'da duruyor, sitede okunmuyor.
- **Ardılsız zincir:** 71 kayıt halefe bağlandı (69'u öneri). `yerlesimler_halef_1946.js`'te yalnız 3 gerçek katman mükerreri var (Bulawayo, Bangassou, Butterworth); dönemleri ana kayda taşınacak.
- **Kafkas Jülyen taraması (372 uç):** 10 uç çevrilecek (1801-09-12 → 09-24) ve şüpheli 24'ten 3'ü daha. 7 belirsiz uç "Gregoryen varsayıldı" notuyla kalıyor.
- **Çin takvimi:** 48 satır Academia Sinica ile çevrildi.
  - Atlasla tutmayanlar: Jingdong 1382, Yunnan 1659 (iki gün), Ji'an 1856 ve 1858, Wu Sangui 1673 (koşullu).
- **Kronoloji eksikleri (D2):** 21 yeni madde taslağı yazıldı, 7 dile çevrildi. 14 madde ABD (13 koloni ve batı karakolları), 5 madde Tacna, 2 madde Yeni Granada (1802, 1803). Bunlar veriyle aynı commit'te girmeli.
- **Yeni nokta: Tacna.** Mükerrer taraması temiz. Nokta yoksa 1929'da Tacna'nın Peru'ya dönüşü haritada görünmüyor.

## ② Ne bulamadım
- Robots ya da bot korumasıyla kapalı siteler (senin tarayıcın gerekiyor):
  - Te Ara, NZ History, DNZB, ADB, utas Companion (14 satır bulunamadı).
  - HLS (Cloudflare), Canadian Encyclopedia, ANOM.
  - Dialnet ve UNAM'daki birkaç PDF.
  - INEGI PDF'leri (AES şifreli: Acaponeta, Bolaños, Batopilas).
  - vestnik.vogu35 (Belozersk), USP revista (Belém), history.idaho.gov (Fort Hall).
- Giriş isteyenler: Cambridge Core, JSTOR, bigenc, Persée, Holt, Society of Malawi Journal.
- Kafkas Rus askerî tarihleri (Sytin, Dubrovin, Muratoff): erişilemedi.

## ③ Ne istiyorum — karar bekleyenler (önerimle)

**Bu gece yeni çıkan sınıf soruları**
1. **Dolaylı idare krallıkları (BEKLET):** Lozi/Barotseland, Kabompo, Balovale, Beçuanalend (iki model), Yatenga, Onitsha, Karagve, Papeete, Mutsamudu, Molepolole, İlorin ve Kuzey Nijerya emirlikleri, Pontianak.
   - *Önerim:* resmî himaye antlaşması olanlarda (Zanzibar, Annam, Tunus, Ruanda emsali) s: yerel + v: koruyucu, bu gece uygulandı. Koloni içinde kalan krallıklarda (b) seçeneği; LAB SALI'nın Lozi modeli güçlü aday.
2. **Versay sonrası manda sahipliği:** Namibya, Garapan ve Tanganika aynı modelle yazıldı: 1919-06-28'den s: işgalci, 1920/22'den manda.
   - Benim itirazım: Versay md. 119 kolonileri Japonya'ya değil, Başlıca Müttefik Devletler'e bırakır. Emsal tutarlılığı için gece içinde emsal korundu. Karar senin.
3. **TAHRİR ve işgal künyesi:** Doğu Timor'da gece-93 modeli korundu (ayrı işgal künyesi). Benim TAHRİR modelim altta sahipsiz toprak bırakıyordu; geri aldım.
4. **Antlaşmasız yerli toprağı:** Alaska kuzeyi (Utqiaġvik, Kotzebue) ve Kanada Arktiği (Bernard Harbour).
   - Kanada'da emsal netleşti: yerli s:, numaralı antlaşmanın imza ya da adhezyon gününe kadar sürer. ABD'de de yerli devrinde imza = devir.
   - Antlaşma hiç olmayan yerde ne olacak? Yerli s: fiilî idareye kadar mı, egemenlik devriyle mi?
5. **Koloni künyeleri:** Şili Kaptanlığı, Yeni Fransa, İspanyol Küba/Filipinler/Florida/Santo Domingo, Yeni Hollanda künyeleri var ama kullanılmıyor; yerleşimler metropolü yazıyor. Geçmek d:'yi ve rengi değiştirir. *Önerim:* evet, ama ayrı bir renk partisiyle.
6. **Toplu künyeler:** Somali sultanlıkları, Malay sultanlıkları vb. bölünsün mü (Majerteen, Pahang)? *Önerim:* yalnız kronolojide ayrı olay varsa.
7. **Tanınmayan kukla devletler:** bantustanlar, Transkei. Gece içinde Draç emsaliyle s: yazıldı.
8. **Güzelyurt 1974-08-16 → 1975-02-13:** isg türkiye, altında s: kibris-cumhuriyeti, 1975'ten KTFD. Siyasî açıdan hassas; onayın gerekiyor.
9. **13 koloni:** 21 şehir 1776-07-04'te abd. İngiliz işgal dilimleri: New York, Filadelfiya, Charleston, Savannah, Wilmington. Batı karakolları 1796 Jay teslimine kadar ingiltere. Öneri olarak yazıldı. 9 yerli merkezi (İrokua vb.) senin kararın.
10. **Kaynak sınıfı:**
    - "Eski Treccani" (EI 1929–37 kökenli maddeler): KAYNAKLI sayılsın mı? 10 satır.
    - Japon ansiklopedileri: bu gece kural kondu. Nipponica ve Heibonsha ONERI-güçlü, Yamakawa KAYNAKLI-çekinceli.
11. **"f = varoluş günü" kuralı:** bu gece bütün EVREN4'te çalışma kuralı yapıldı. İlçe ya da belediye günü ic_not'a gidiyor, F-GERI listeleri tutuluyor. Kalıcı olsun mu? *Önerim:* evet.
12. **TDV esas kuralının uluslararası belgeyle çatışması:** Nador'da TDV 1956-04-05, İspanya–Fas ortak bildirisi 04-07. Kural gereği 04-05 uygulandı, künye de değişiyor.

13. **🔴 Değişmez 1'in kör noktası (06:30 sonrası bulgu, KASA ölçtü):** 65 yerleşimin zinciri 2000'den önce bitiyor; ardılı yok. Bunlar haritada son uçta delik. Örnekler:
    - DDR ×4 ve Batı Berlin ×2;
    - bantustanlar, Biafra, Krajina, UNTAES, Herzeg-Bosna;
    - Svaziland, Brazzaville, Nador.

    `denetle.py:1268` Değişmez 1'i yalnız 1285–1920 arasında örnekliyor, bu yüzden bu delikler sessiz. Ardıl dilimler KASA'da hazırlanıyor.

    *Karar:* D1 örneklemi 1920 sonrasına uzatılsın mı? Araç değişikliği; yeni tavan ölçülerek yazılır.

    **Ölçüm** (KASA; `denetle.py`'nin kendi fonksiyonlarıyla, araca dokunmadan):
    - Bugünkü taban 311 = `BEKLENEN_SAHIPSIZ`, doğrulandı.
    - 1930–2000 arası 10 yılda bir örnekleme 259 sahipsiz yerleşim veriyor. Bunların **103**'ü bugün hiç sayılmıyor: 65 uç deliği + 38 başka.
    - Örneklem uzatılırsa tavan 311 → ≥414 olur, delikler kapandıkça iner.
    - 103'ün tamamı için ardıl dilim tablosu hazırlanıyor.
14. **Başlangıç = künye f yapıtı:** 198 kayıt (89 künye) ilk künyenin f gününde başlıyor, öncesi boş. Örnek: Schwerin 1949'da başlıyor, oysa 1160'tan beri var. Kayıtların 112'si `halef_1946.js`'te. F-GERI önerileri sonra hazırlanacak.
14a. **F-GERI turu SIĞ çıktı:** 200 kayıt, iki parti. Kaynaklı kuruluş bulunan yalnız 2 kayıt: Frankfurt (Oder) 1253 ve Schwerin 1160.
- Ajanlar ham metin okumamış; Vikipedi ya da kendi bilgileriyle kalmışlar. KASA'nın hükmüyle kuruluşlar **uygulanmıyor**; yapı temiz.
- Yan bulgu, yanlış sahip: künyeleri var ama kullanılmamış. Ngoni (ingiltere yerine Alman Doğu Afrikası zinciri), Matabele ve Rodezya (ingiltere yerine ingiliz-guney-rodezya). Hızlı kalem olarak hazırlanıyor.
- 12 kayıtta kuruluş künye f'sinden sonra: başlangıç ileri alınacak (merdiven ④).
- *Önerim:* ikinci tur dar partilerle, önceden belirlenmiş akademik kaynaklarla, senin önceliğine göre.
15. **Norveç 1814:** 20 kayıt Kiel imzasıyla 123 günlük bir "isvec" dilimi taşıyor.
    - Model (ONERI): isvec dilimi düşer (TEK ÖLÇÜ). Sıra: danimarka → 1814-02-19 norvec-1814 → 1814-11-04 norvec-isvec-birligi.
    - *Karar:* şahsî birlik ayrı s: mi (öneri), yoksa s: + v: isvec mi?
16a. **LAB kovası KAPANDI:** LAB izinde toplam 4.747 dönem.

| İz | Dönem | Kaynaklı | Öneri | Bulunamadı | Bakılmadı |
|---|---|---|---|---|---|
| Küme izi | 2.232 | 1.132 | 592 | 301 | 207 |
| Eski kova 001–009 | 576 | 125 | 230 | 98 | 123 |
| v2 010–053 | 1.939 | 532 | 730 | 599 | 78 |

KASA'nın v2 payı (sıra 1936–2255): 320 dönem; 76 KAYNAKLI, 116 ONERI, 62 BULUNAMADI, 66 BAKILMADI.

Ayrıca bu turda bitenler:
- **103 uç deliği:** ardıl dilimler hazır (73 dilim, 19'u KAYNAKLI). Aynı commit'te girmesi gereken 9 bitişiklik düzeltmesi var.
- **Zend/Kaçar Kafkas turu:** 33 yerleşim, 126 satır. Sahipsiz dilim 0, 81 alıntının hepsi birebir.
- **Norveç 1814:** uygulamaya hazır ONERI.
16b. **North-Western Territory künyesi:** Mackenzie havzasındaki kaleler (Good Hope, Simpson, Norman, Resolution vb.) Rupert's Land değil, NWT'dir. Ayrı künye adayı; havza sınıflaması LAB'da.
16d. **Kabile toprağı sorusuna ipucu:** atlasta zaten bir "kasıtlı boşluk beyan noktası" mekanizması var. `kasitli_bosluk:true, bos:"kabile"` alanları kullanılıyor; `yerlesimler_gamerika.js`'te 46 "Beyan …" noktası ve `bos_alanlar.js` eşleri var. Örnek: Uruguay'da Charrúa/Minuan toprağı, 1281 → 1828.

Ainu (Kunashiri), Kpelle, Acholi vb. için bu gece "D1'i artırır" diye BEKLET dedim.

**Ölçüm** (KASA; `D1-KABILE-OLCUM.md`, `denetle.py`'ye dokunulmadı): mekanizma D1'den **muaf değil**.
- `degismez1()` `kasitli_bosluk`/`bos:` alanlarını okumuyor. Bugünkü 311 sahipsizin 275'i kasıtlı, 149'u kabile.
- Yalnız ayrı bir değişmez olan 1c, "sahipsiz VE belgesiz"i sayıyor: 3 kayıt, tavan 4.
- Geçmişte kabile beyanları tavanı aynı commit'te açarak girmiş.

**Senin kararın:**
- (a) Belgeli kabile boşluğu için `BEKLENEN_SAHIPSIZ` açılabilir mi? Bu gece kuralım bunu yasakladı.
- (b) Ya da kapı ölçütü 1c'ye taşınsın, D1 bilgi satırı olsun. Bu bir araç değişikliği.

16c. **Bu gece benim geri aldığım kararlar** (emsal tutarlılığı için): Doğu Timor TAHRİR modeli, Garapan'da Versay itirazı, Napoli künyesinin 1266'ya genişletilmesi. Üçünde de mevcut atlas modeli korundu.

**Benim hatam:** Fiume için 1920-12-29 dedim; günün kaynağı yoktu. KASA yakaladı: iki akademik kaynak ve mevcut kronoloji maddesi 1920-12-31 veriyor. Düzeltildi. Ayrıca gece-28 ve gece-37'de verdiğim iki kararda bir günlük boşluk vardı (t = ardıl f kuralı); onlar da düzeltildi.

**Madde kuyruğu:** 39 taslak hazır (7 dil; 11 KAYNAKLI, 28 ONERI). Ek olarak:
- Norveç 2, Tacna 5, ABD 14 maddesi.
- Yanlış sahip kalemi: 56 kayıt (Tanganika Versay-isg sistemiği 21, Güney Rodezya, Togo, Kıbrıs). Uygulamaya hazır, 6 maddesi yazılıyor.
16. **Çeviri açığı:** 13.203 `KRONOLOJI_*` maddesi çevrilmiyor (yukarıda). Düzeltme `ceviri.js` işi.

**Önceden bekleyenler (değişmedi):** Filistin · TBMM 1920–22 · Osmanlı d: ucu 1923-10-29 (287 dönem) · SINIF-ŞÜPHE (87) · Doğu Trakya 1912–13 · TEK ÖLÇÜ onayı · TDV istisna adayları · Hollanda künye A/B/C · D-ANAHTAR (Fetret, avusturya, ceneviz) · yeni künye adayları (LAB'da 69'a çıktı) · 7e tavanı · D7 enklav dondurma · Polonya f.

**Bakman gereken bir şey:** UMIT worktree'si (`umit-1104-dadim`) açık bırakıldı. İçinde UMIT'in yazmadığı iki izlenmeyen dosya var: `SABAH-ACILACAKLAR-UMIT.md` ve `brif/.son_istek`. Worktree kaldırılırsa bu dosyalar silinir.

**LAB:**
- `.claude/worktrees/lab-1104-kunye` temiz; commit'i origin'de (`685cd7ee6`). Ancak başka bir canlı Claude sürecine kilitli (pid 12372), bu yüzden LAB PAZAR kaldırmadı. Sahibi kaldırmalı ya da sen karar ver.
- Ayrıca boş bir `evren4` dizini kaldı (Windows tutamağı).
- LAB'ın havza ölçümü: 60 kalenin 40'ı HUDSON (ruperts-land), 18'i ARKTİK, 2'si Yukon (bu 20'si NWT adayı). Dosya: `IKA-HAVZA-1870.tsv`.

**Tek uygulama listesi:** `origin/kasa-1104-kronoloji` → `denetim/EVREN4-1105/KASA-PAZAR-UYGULAMA-SIRASI.md` (`056a96a94`).
- 15 dalga, sırayla: UFUK-1923 → UC103 → ARDIL → HALEF1946 → Yeni Granada → Kanada/Burma → hicrî → Kafkas Jülyen → Çin takvimi → LAB v2 + ON5 → Norveç → yanlış sahip → Zend/Kaçar → F-GERI B yapısal → ABD/Tacna.
- Her satırda "aynı commit" şartları ve uygulanmayacaklar yazılı.

**Uygulama sırası (KASA PAZAR):** bütün UYGULA dosyaları tek dalgada, koşu 34 inişinden sonra uygulanacak. D2 için kronoloji maddeleri ile veri aynı commit'te girmeli.
