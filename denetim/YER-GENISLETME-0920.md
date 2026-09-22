# YER-GENİŞLETME-0920 — madde `yer` alanının genişletilmesi (2s borcunun en büyük sınıfı)

**Oturum:** EKOKUMA-SIMGE-0070 (Opus) · **Sevk:** 1.MURAT, M-4727 · **Tarih:** 20 Eylül 2026
**Alet:** `denetim/ARAC-YER-GENISLETME-0920.py` · **Kapı:** `py arac/denetle.py`

---

## 1 · Aletin kalibrasyonu — ilk sayı YANLIŞTI, düzeltildi

Ham `degismez2(..., kategoriler=("s",), yer_sarti=True)` çağrısı **1360 açık** veriyor;
`denetle.py`nin konuştuğu sayı **187**. Fark üç süzgeçtir ve üçü de anlam taşır:

| Süzgeç | Ne eler | Sayı |
|---|---|---|
| `Y_cekirdek` (KUYRUK_DOSYALARI hariç) | kronoloji kuyruğundaki yerleşimler | 1360 → 927 |
| `kapsam_disi` (Osmanlı küresine > 2014 km) | "maddesi bu kronolojide OLAMAZ" | −589 |
| `yil_temsili_ayir` (`YYYY-01-01`) | günü bilinmeyen kırılma, ayrı defter | −151 |
| **kalan: GÜN-HASSAS AÇIK** | | **187** |

Süzgeçsiz listenin başında 471 yerleşimlik Rusya 1917 ve 130 yerleşimlik Kanada 1867
duruyordu — işi 7 kat büyük ve yanlış gösterirdi. Alet şimdi `denetle.py` ile **birebir**
aynı sayıyı basıyor (1418 kırılma · 589 kapsam dışı · 151 yıl-temsilî · 187 açık).

## 2 · 187 açığın büyüklük dağılımı (yama stratejisini bu belirledi)

| eksik yerleşim | satır |
|---|---|
| 1-3 | **117** |
| 4-10 | 40 |
| 11-30 | 23 |
| 31+ | 7 |

31+ kovası Fetret Devri ve benzeri **toplu el değiştirmeler** (ör. 1413-07-05 Çamurlu
Savaşı, 144 yerleşim): bunların çaresi `yer` alanına 144 ad yazmak DEĞİLDİR — ayrı bir
hüküm gerekir (1.MURAT'a soruldu). Parti 1 bu yüzden 1-3 kovasından seçildi.

Ayrıca ölçüldü: 1-3 kovasının yalnız **3 satırında** madde eksik adı KISMEN zaten anıyor
(yazım kanonikleştirme); **111 satırda** madde o yeri hiç anmıyor ⇒ kaynak şart.

## 3 · PARTİ 1 — işlenen 15 satır, tek tek hüküm

**Ölçüt (kendime koyduğum, rapora yazılı):** bir yerleşim ancak kaynağın gövdesi ONU ADIYLA
o olayla birlikte anıyorsa eklenir. "Beyliğin/adanın parçasıydı, demek ki o gün geçti"
çıkarımı EKLEMEZ — ayrı kovada listelenir (§4).

| # | tarih | madde | eksik yerleşim | hüküm | kaynak |
|---|---|---|---|---|---|
| 1 | 1329-06-01 | Pelekanon Savaşı ve Kocaeli'nin alınması | Aydos Kalesi | ✅ **eklendi** | madde zaten "Aydos" diyordu — yazım kanonikleştirme, yeni iddia yok |
| 2 | 1354-03-02 | Gelibolu'nun alınışı | Bolayır, Maydos | ⚪ ölçülemedi | TDV `gelibolu` gövdesi okundu: Bolayır yalnız Süleyman Paşa'nın türbesi vesilesiyle geçiyor, el değiştirme tarihi YOK; TDV'de Bolayır maddesi yok (arama: yalnız şair Ali Ekrem Bolayır) |
| 3 | 1366-08-01 | Gelibolu'nun kaybı (Savoy) | Bolayır, Maydos | ⚪ ölçülemedi | aynı gövde: "13 Ağustos 1366'da Savoy Dükü Amedeo … Gelibolu'yu alıp" — yarımadanın öteki iki noktası anılmıyor |
| 4 | 1376-09-01 | Gelibolu'nun geri alınışı | Bolayır, Maydos | ⚪ ölçülemedi | aynı gövde: "1376'daki bu ikinci fetihle Gelibolu kati olarak Osmanlı hâkimiyetine girmiş oldu" |
| 5 | 1381-06-01 | Hamîd ilinin satın alınışı | Seydişehir, Yalvaç, İshaklı | ✅ **Seydişehir + Yalvaç eklendi** · ⚪ İshaklı ölçülemedi | TDV `hamidogullari`: "783'te (1381-82) … Akşehir, Beyşehir, **Seydişehir, Yalvaç** ve Karaağaç beldeleri 80.000 altın karşılığında Osmanlılar'a satıldı." |
| 6 | 1383-09-19 | Serez'in fethi | Gevgili, Kılkış | ⚪ ölçülemedi | TDV `serez`: "Serez 785'te (1383) Deli Balaban Bey ve Lala Şâhin Paşa'nın idare ettiği Osmanlı birliklerince fethedildi" — çevre yerler sayılmıyor |
| 7 | 1387-04-09 | Selanik'in ilk teslimi | Lanzaka, Praviște | ⚪ ölçülemedi | TDV `selanik`: "789 (1387) baharında … Selânik'i ele geçirdi" — çevre yerleşim anılmıyor |
| 8 | 1393-09-01 | Dobruca'nın katılışı | Babadağı, İshakçı | ⚪ ölçülemedi | TDV `dobruca`: **"Dobruca'nın Osmanlı idaresine giriş tarihi kesin olarak belli değildir."** · TDV `isakca`: "XIV ve XV. yüzyıllardaki huzursuzluk döneminin ardından Osmanlı idaresine geçti" (gün/yıl yok) |
| 9 | 1439-08-27 | Semendire'nin ilk alınışı | Kragujevac, Yagodina, Çaçak | ⚪ ölçülemedi | TDV `semendire` gövdesi kuşatmayı günüyle veriyor (27 Ağustos 1439) ama bu üç şehri ANMIYOR |
| 10 | 1459-06-20 | Sırbistan'ın ilhakı | Kragujevac, Yagodina, Çaçak | ⚪ ölçülemedi | aynı gövde: "20 Haziran 1459'da Lazar Brankoviç'in dul eşi Helena kaleyi Osmanlılar'a teslim etti" — üç şehir yok |
| 11 | 1462-09-17 | Midilli adasının fethi | Molova (Molyvos) | ✅ **eklendi** | TDV `midilli`: "Adadaki **Molova**, Eressos ve Ayo Teodoro kalelerine de çatışma olmadan girildi." |
| 12 | 1470-07-12 | Eğriboz'un fethi | Karistos (Kızılhisar) | 🟡 birim delili var, gün delili yok (eklenmedi) | TDV `egriboz` Kızılhisar'ı (Castel Rosso-Karystos) adanın bir NAHİYESİ olarak anıyor ama 1470'te geçtiğini söylemiyor |
| 13 | 1473-08-11 | Otlukbeli Savaşı | Karahisâr-ı Şarkî | ✅ **eklendi** | TDV `sebinkarahisar`: "kalesini Akkoyunlu Beyi Uzun Hasan'a karşı kazandığı **Otlukbeli Savaşı** ile 878'de (1473) aldı." |
| 14 | 1515-06-13 | Turnadağ Zaferi ve Dulkadir ilhakı | Göksun, Gürün, Zamantı | ✅ **Göksun eklendi** · ⚪ Gürün, Zamantı ölçülemedi | TDV `dulkadirogullari`: "Osmanlı ordusunu **Göksun** ile Andırın arasında Ördekli mevkiinde karşılayan Alâüddevle yenildi ve öldürüldü." |
| 15 | 1732-09-02 | Rusların Gîlân ve Tâliş'i boşaltması | Bender Enzeli | ✅ **eklendi** | madde zaten "Enzeli" diyordu; yerleşim kaydının adı "Bender Enzeli" (Bandar-e Anzali) — yazım kanonikleştirme |

### Ölçüm — öngörü ÖNCE yazıldı
**Öngörü:** 6 madde yamalanıyor ama satır ancak eksik yerleşimlerin TAMAMI açıklanınca
kapanır ⇒ 1381 (İshaklı) ve 1515 (Gürün, Zamantı) AÇIK KALIR. **Beklenen: 187 → 183.**
**Ölçüm:** `py arac/denetle.py` → `Değişmez 2s ✓ 1418 YABANCI kırılması · **183 AÇIK**
(tavan 195)` · Değişmez 2: 0 açık · **SONUÇ: temiz**. Öngörü birebir tuttu.

| Ölçü | Parti 1 |
|---|---|
| işlenen satır | 15 |
| kapanan satır | **4** (1329 · 1462 · 1473 · 1732) |
| kısmen yamalanan, açık kalan | 2 (1381 · 1515) |
| eklenen yerleşim adı | **6** (Aydos Kalesi · Seydişehir · Yalvaç · Molova · Karahisâr-ı Şarkî · Göksun) + 1 kanonik düzeltme (Bender Enzeli) |
| "ölçülemedi" yerleşim | **13** (Bolayır ×3, Maydos ×3, İshaklı, Gevgili, Kılkış, Lanzaka, Praviște, Babadağı, İshakçı, Kragujevac ×2, Yagodina ×2, Çaçak ×2 — satır bazında 9 satır) |
| yeni madde yazıldı mı | **HAYIR** (sevk: bu sınıfa yeni madde mükerrer üretir) |

## 4 · 🔴 YAN BULGULAR — verinin kendi tarihi şüpheli (benim dosyam değil, DÜZELTMEDİM)

1. **1515 Dulkadir ilhakı.** Atlas Göksun/Gürün/Zamantı'yı 1515-06-13'te `dulkadir`den
   çıkarıyor. TDV `dulkadirogullari` gövdesi ise ilhakı Turnadağ'a değil, **Şehsuvaroğlu
   Ali Bey'in öldürülmesinden sonrasına** bağlıyor: *"Ali Bey'in öldürülmesinden sonra
   Dulkadırlı ülkesi Osmanlı topraklarına katılarak Maraş merkez olmak üzere bir eyalet
   haline getirildi."* Yani 1515 ile ilhak arasında **tâbi bir beylik dönemi** var.
   ⇒ Yerleşimlerin 1515'te doğrudan Osmanlı olması sorgulanmalı (belki `v:` tâbi olmalı).
2. **1393 Dobruca.** TDV açıkça *"giriş tarihi kesin olarak belli değildir"* diyor; atlasın
   `1393-09-01` günü gün hassasiyetinde bir kaynağa dayanmıyor olabilir (D210 sınıfı).
3. **Gelibolu yarımadası (Bolayır, Maydos).** Üç satır (1354 · 1366 · 1376) aynı iki noktayı
   açıkta bırakıyor ve TDV bu iki yerin el değiştirme tarihini hiç vermiyor. Bu üçü tek bir
   akademik kaynak taramasıyla birlikte çözülebilir — ayrı sevk önerilir.

## 5 · Değişen dosyalar (parti 1)
| Dosya | Değişiklik |
|---|---|
| `data/olaylar.js` | 1473-08-11 maddesinin `yer` alanı |
| `data/olaylar_ek.js` | 1381-06-01 maddesinin `yer` alanı |
| `data/olaylar_ek5.js` | 1329-06-01 · 1462-09-17 · 1515-06-13 maddelerinin `yer` alanları |
| `data/olaylar_p0060.js` | 1732-09-02 maddesinin `yer` alanı |
| `denetim/ARAC-YER-GENISLETME-0920.py` | ölçüm aleti (yeni) |
| `denetim/YER-GENISLETME-0920.md` | bu rapor |

Hiçbir maddenin `b:`, `d:`, `yer_id` ya da tarih alanına dokunulmadı; `yer` biçimi
(virgülle ayrılmış liste) korundu.


---

## 6 · PARTİ 2 — 15 satır daha (aynı ölçütle)

| # | tarih | madde | eksik | hüküm | kaynak |
|---|---|---|---|---|---|
| 1 | 1515-09-15 | Doğu Anadolu'nun katılışı | Bitlis | ✅ **eklendi** | TDV `bitlis`: "Yavuz Sultan Selim'in Çaldıran Seferi dönüşünde (1514) İdrîs-i Bitlisî'nin de gayretleriyle Bitlis'teki mahallî beyler Osmanlı Devleti'ne bağlılıklarını bildirdiler." ⚠️ TDV **1514** diyor, atlas 1515-09-15 |
| 2 | 1516-05-01 | Koçhisar Savaşı, Mardin ve Urfa'nın fethi | Palu, Çemişgezek | ✅ **Palu** · ⚪ Çemişgezek | TDV `biyikli-mehmed-pasa`: "Mardin muhasarası sürerken civardaki kalelerden Musul, Ruha, Birecik, Harput, Çermik, Ergani, **Palu** ve Sincar ele geçirildi." (Çermik ≠ Çemişgezek) |
| 3 | 1534-12-04 | Bağdat'ın fethi — Irakeyn Seferi | Erbil, Kifri, Tuz Hurmatu | ✅ **Erbil** · ⚪ Kifri, Tuz Hurmatu | TDV `erbil`: "Erbil, Kanûnî Sultan Süleyman'ın Irakeyn Seferi sırasında (1535) Bağdat'la birlikte Osmanlı topraklarına katıldı." |
| 4 | 1543-08-10 | Estergon ve İstolni Belgrad'ın fethi | Segedin | ⚪ ölçülemedi | TDV `segedin` Osmanlı idaresini **1541-43 başı**na bağlıyor, Estergon seferiyle bağ KURMUYOR ⇒ atlasın 1543-08-10 günü ayrı bir soru |
| 5 | 1551-08-15 | Trablusgarp'ın fethi | Derne | ✅ **eklendi** | TDV `derne`: "1551'de Osmanlı idaresine geçti" · "Turgut Reis (Paşa) sınırlarını genişleterek doğuda Tobruk ve **Derne**'yi almıştı." |
| 6 | 1638-12-24 | Bağdat'ın geri fethi | Halepçe, Kifri, Tuz Hurmatu | ⚪ ölçülemedi | TDV'de Halepçe maddesi yok (yalnız `suleymaniye` içinde anılıyor), 1638 bağı kurulmuyor |
| 7 | 1638-12-25 | Bağdat'ın geri fethi | Erbil | ⚪ ölçülemedi | TDV `erbil` 1638'i anmıyor; şehrin sonraki el değiştirmesini 1743 Nâdir Şah seferine bağlıyor |
| 8 | 1663-09-24 | Uyvar'ın fethi | Nitra (Nyitra) | ⚪ ölçülemedi | TDV `uyvar` yalnız Győr ve Komarno'yu anıyor, Nitra geçmiyor |
| 9 | 1550-06-12 | (Süleymaniye Camii inşaatı) | Helsinki | ⛔ **SINIF ②** — penceredeki madde alâkasız; çare `yer` değil YENİ MADDE |
| 10 | 1552-10-02 | (Solnok'un fethi) | Kazan, Simbirsk | ⛔ **SINIF ②** — Kazan Hanlığı'nın Ruslarca ilhakı; Osmanlı kronolojisinde maddesi yok |
| 11 | 1636-04-17 | (Revan'ın kaybı) | Tambov | ⛔ **SINIF ②** |
| 12 | 1645-08-13 | (Girit seferi) | Östersund | ⛔ **SINIF ②** — Danimarka-İsveç savaşı |
| 13 | 1650-01-26 | (İltizam sistemi) | Maskat, Suhâr, Sûr | ⛔ **SINIF ②** — Umman'ın Portekiz'i çıkarması |
| 14 | 1591-04-13 | — (pencerede aday madde YOK) | Cenne, Gao, Timbuktu | ⛔ **SINIF ②** — Fas'ın Songhay seferi |
| 15 | 1654-01-18 | Pereyaslav Radası | Sloboda bozkırı | ⚪ ölçülemedi — bölge adı, kaynakta yerleşim olarak aranamıyor |

**Öngörü (ölçümden önce):** 4 madde yamalanır; 1515-09-15 ve 1551-08-15 kapanır, 1516-05-01
ve 1534-12-04 açık kalır ⇒ **183 → 181**. **Ölçüm:** `Değişmez 2s ✓ … 181 AÇIK` · SONUÇ: temiz.
Öngörü yine birebir tuttu.

| Ölçü | Parti 2 | Parti 1+2 |
|---|---|---|
| işlenen satır | 15 | 30 |
| kapanan satır | 2 | **6** |
| eklenen yerleşim adı | 4 | **10** (+1 kanonik) |
| "ölçülemedi" | 7 satır | 16 satır |
| SINIF ② (yeni madde gerekir) | 6 satır | 6 satır |

---

## 7 · M-4733 md.1 — TOPLU EL DEĞİŞTİRME ÖLÇÜMÜ (11+ yerleşimli 30 satır)

Alet: `py denetim/ARAC-YER-GENISLETME-0920.py --toplu`. İki ölçüt sayıya çevrildi:

| Ölçüt | Sonuç |
|---|---|
| satır sayısı (11+ eksik) | **30** |
| taraf çifti TEK olan (tek devir) | **13** |
| çok çiftli (birden çok alıcı/verici) | **17** |
| pencerede **taraflarını anan madde VAR** ⇒ olay ANLATILMIŞ | **16** |
| pencerede taraflarını anan madde YOK ⇒ olay YAZILMAMIŞ | **14** |

🔴 **Asıl ayrım "kaç çift" değil, "olay anlatılmış mı"dır.** Çok çiftli olmak yığılma
demek değil: Berlin (5 çift), Karlofça (3), Lozan (2), Küçük Kaynarca (3), Polonya III (3)
TEK olaydır, yalnız alıcısı çoktur. Buna karşılık tek çiftli 1547-01-16 (Moskova→Rusya, 23
yerleşim) tek bir olayın sonucu DEĞİL, bir künye değişiminin aynı güne yığılmasıdır ve
penceresindeki madde "Üsküdar İskele Külliyesi'nin tamamlanması"dır.

**SINIF ② (14 satır, çare YENİ MADDE — `yer` genişletme YANLIŞ araç):**
1917-03-15 (Rus İhtilali, 367) · 1917-11-07 (Bolşevik ihtilali, 367) · 1921-08-23
(İngiltere→Irak Krallığı, 35) · 1916-09-01 (Almanya→İngiltere, 25) · 1547-01-16
(Moskova→Rusya, 23) · 1923-07-24 (→İtalya/Yunanistan, 23) · 1918-10-30 (Mondros sonrası
devirler, 20) · 1517-05-19 (Memlük→—, 19) · 1813-10-24 (Kaçar→Rusya, 15 — **Gülistan
Antlaşması'nın maddesi yok**) · 1404-03-01 (14) · 1921-10-13 (Sovyet Rusya→TBMM, 13) ·
1402-09-15 (11) · 1478-01-15 (Novgorod→Moskova, 11) · 1552-10-02 tipi küçük kardeşleri.

⚠️ **Ölçütün sınırı açıkça:** taraf testi `eski` ya da `yeni` BOŞ olan devirlerde ("—→italya")
zayıflar; 1923-07-24 Lozan satırı bu yüzden ② çıktı, oysa penceresinde "Lozan Antlaşması"
maddesi duruyor (madde İtalya/Yunanistan adlarını metninde taşımıyor). Yani ② sayısı
**en fazla 14**, gerçek değer biraz daha düşük olabilir.

## 8 · M-4733 md.2 — ÜÇ SEÇENEK (karar Emre'nin; şemaya DOKUNULMADI)

### (a) Maddeye açık **kapsam beyanı** alanı — `kapsam:`
Madde, hangi devri hangi bölgede kapattığını KENDİ söyler. Yanlış kapanışa karşı iki şartlı:
`kapsam:{taraf:"musa-celebi→mehmed-celebi", bolge:"Rumeli"}` — yalnız BEYAN EDİLEN taraf
çiftine uyan kırılmaları kapatır.
- **Veri maliyeti:** 16 maddeye birer alan (bugün); şema notu `VERI-YAPISI.md`ye; `denetle.py`
  2s koluna ~20 satır. Yeni toplu olay geldikçe madde başına 1 alan.
- **Yanlış kapanış riski:** DÜŞÜK-ORTA. Taraf çifti şartı olmadan "Rumeli" gibi bir beyan
  bölgedeki HER kırılmayı kapatır (Mankup 1349 mekanizmasının kardeşi). Şartla birlikte risk,
  beyanın kendisinin yanlış yazılmasına iner — ve beyan GÖRÜNÜR, denetlenebilir.
- Not: bu bir gevşetme DEĞİL, ölçütün yerini değiştirmedir: "yakınlık" değil "beyan" kapatır.

### (b) Denetimin toplu olayda **bölge/taraf eşleşmesini yeterli sayması**
- **Veri maliyeti:** SIFIR (yalnız kod).
- **Yanlış kapanış riski:** YÜKSEK — **ve bu açıkça bir GEVŞETMEDİR.** 20 Eylül'de tam bu
  gevşeklik kaldırıldı (`_2s_merkez_aniyor` daraltması, `denetim/DENETIM-KAPI-0920.md`).
  Geri alınırsa 1547 Moskova→Rusya satırı "Üsküdar Külliyesi" maddesiyle kapanır: madde
  tarafı anmıyor ama aynı pencerede Rusya'yı anan başka bir madde bulunabilir. Önermiyorum.

### (c) **Yerleşim tarafında beyan** (dönem kaydına "bu devir şu maddeyle açıklanır")
- **Veri maliyeti:** YÜKSEK — 30 satır ≈ 1400 yerleşim dönemi; elle yazılırsa parti parti
  aylar, üretilirse "üretilmiş beyan" olur ki beyanın anlamını boşaltır.
- **Yanlış kapanış riski:** DÜŞÜK (en dar kapsam) ama **bayatlama riski YÜKSEK**: madde
  taşınır/yeniden adlandırılırsa 1400 beyan sessizce yanlışa döner.

**ÖNERİM:** (a), taraf-çifti şartıyla ve YALNIZ ① sınıfındaki 16 satır için. ② sınıfındaki
14 satır bu seçeneklerin hiçbiriyle çözülmez — oradaki eksik gerçek bir KRONOLOJİ BOŞLUĞUDUR
(ör. 1813 Gülistan Antlaşması'nın maddesi hiç yok) ve ayrı bir madde-yazma sevki ister.


---

## 9 · BÜTÜN AÇIKLARIN SINIF ÖLÇÜMÜ — işin gerçek büyüklüğü

`py denetim/ARAC-YER-GENISLETME-0920.py --sinif` (ölçüt: pencerede kırılmanın
TARAFLARINDAN birini anan madde var mı?):

| kova | ① madde VAR (`yer`/kapsam işi) | ② madde YOK (yeni madde işi) | toplam |
|---|---|---|---|
| 1-3 | **39** | 72 | 111 |
| 4-10 | 13 | 27 | 40 |
| 11-30 | 12 | 11 | 23 |
| 31+ | 4 | 3 | 7 |
| **TOPLAM** | **68** | **113** | **181** |

⇒ 181 açığın **yalnız 68'i** `yer` genişletmeyle çözülebilecek sınıfta. Kalan **113'ünde**
pencerede olayın taraflarını anan HİÇBİR madde yok — oradaki eksik gerçek bir kronoloji
boşluğudur ve çare yeni madde yazmaktır (ayrı sevk).

🔴 **VE ① BİR ÜST SINIRDIR, GARANTİ DEĞİL.** Ölçütü sınadım ve YANILTTIĞI bir vaka buldum:
`1920-12-02 Revan` satırı ① çıkıyor, çünkü penceredeki "Gümrü Antlaşması" maddesi Ermenistan'ı
anıyor. Oysa verideki devir `ermenistan-demokratik-cumhuriyeti → sovyet-rusya`, yani olay
**Ermenistan'ın Sovyetleştirilmesi (2 Aralık 1920)**, Gümrü Antlaşması değil. Revan'ı Gümrü
maddesinin `yer`ine yazmak SAHTE KAPANIŞ olurdu — yazılmadı, satır açık bırakıldı ve buraya
yazıldı. ⇒ Her ① satırı yine tek tek kaynakla sınanmalı; ölçüt işi DARALTIR, bitirmez.

## 10 · PARTİ 3 — 15 satır (yeni alet: TDV gövde çekici)

🆕 `denetim/ARAC-TDV-GOVDE-0920.py` — TDV maddesinin gövdesini HAM çekip aranan kelimenin
geçtiği cümleleri olduğu gibi basar. Sebebi D211 ⑦: bir çıkarıcının "geçmiyor" demesi belge
hakkında değil ÇIKARICI hakkında bir cümledir. Nitekim bu alet, özetleyicinin "yer almıyor"
dediği `bucak` maddesinde aranan üç şehri de BULDU.

| # | tarih | madde | eksik | hüküm | kaynak |
|---|---|---|---|---|---|
| 1 | 1856-03-30 | Paris Antlaşması | Bolgrad, Kahul, İsmail | ✅ **ÜÇÜ DE eklendi — satır kapandı** | TDV `bucak`: "Kırım Savaşı'nda yenilen Rusya, Paris Antlaşması (1856) gereğince, Bucak'ın güneybatısını teşkil eden **İsmâil ile Kahul ve Bolgrad** arazilerini … Boğdan-Moldavya'ya bıraktı." |
| 2 | 1690-09-09 | Niş, Vidin ve Belgrad geri alındı | Yagodina, Şehirköy | ✅ **Şehirköy** · ⚪ Yagodina | TDV `sehirkoy`: "1689'da şehir Kutsal İttifak kuvvetlerince zaptedildi. Ertesi yılın eylülünde Köprülüzâde Fâzıl Mustafa Paşa kasabayı üç gün süren mücadelenin ardından geri aldı." |
| 3 | 1812-05-28 | Bükreş Antlaşması | Kahul, Orhei, Soroka | 🟡 birim delili var (eklenmedi) | TDV `bucak`: "Bucak'ın 1812 Bükreş Antlaşması ile Rus idaresine girmesi…" — bölge adı; üç yerleşim ADIYLA anılmıyor (Orhei ve Soroka Bucak'ın dışında, kuzey Besarabya) |
| 4 | 1672-10-18 | Buçaş Antlaşması | Braslav, Vinnitsa | ⚪ ölçülemedi | TDV `bucas-antlasmasi`: "Üçüncü madde **Podolya** ülkesinin tamamen Osmanlı Devleti'ne teslim edilmesiyle ilgiliydi" + Kamaniçe ve "kırk sekiz palanka". Braslav/Vinnitsa YOK — ikisi Bratslav voyvodalığında, yani Podolya'nın dışında; statüleri (Kazak hetmanlığı üzerinden tâbilik?) AYRI bir soru |
| 5 | 1739-09-28 | Belgrad Antlaşması | Bosna Brod'u, Bosna Dubiçası | ⚪ ölçülemedi | TDV'de antlaşmanın madde madde hükümleri yok; yalnız "daha önce kazanılan yerleri (Banat hariç) ve Belgrad'ı geri vermiştir" |
| 6 | 1735-03-21 | Gence Antlaşması | Salyan | ⚪ ölçülemedi | TDV'de "Salyan" yer maddesi yok (yalnız `sâlyâne` malî terimi) |
| 7 | 1685-08-19 | Uyvar'ın kaybı | Nitra | ⚪ ölçülemedi | TDV `uyvar` yalnız Győr ve Komarno'yu anıyor |
| 8 | 1798-10-23 | Preveze'nin Fransızlardan alınışı | Butrint | ⚪ ölçülemedi | TDV `butrint` gövdesi 1562 karakter — kısa/boilerplate (D211 ④) |
| 9 | 1920-12-02 | (Gümrü Antlaşması) | Revan | ⛔ **SINIF ② — sahte ① (bkz. §9)** | devir `ermenistan-demokratik-cumhuriyeti→sovyet-rusya`; olay Ermenistan'ın Sovyetleştirilmesi, maddesi YOK |
| 10 | 1912-11-03 | (I. Balkan Savaşı'nın başlaması) | Prizren | ⛔ SINIF ② | TDV `prizren` olayı doğruluyor ("1912 … I. Balkan Savaşı esnasında Prizren, General Janković kumandasındaki Sırplar tarafından ele geçirildi") ama penceredeki madde savaşın İLANIdır, Kosova harekâtının değil ⇒ çare kampanya maddesi |
| 11 | 1684-02-05 | (Kutsal İttifak kuruldu) | Tanca | ⛔ SINIF ② — İngiltere'nin Tanca'yı boşaltması |
| 12 | 1698-12-13 | (Karlofça görüşmeleri) | Lindi, Mikindani, Pangani | ⛔ SINIF ② — Umman-Zengibar'ın Svahili kıyısını alması |
| 13 | 1686-09-30 | (Peçuy'un kaybı) | Sin (Sinj) | ⛔ SINIF ② — Venedik'in Dalmaçya harekâtı |
| 14 | 1687-08-06 | (IV. Mehmed / Mohaç) | İnebahtı | ⛔ SINIF ② — Venedik'in Mora harekâtı |
| 15 | 1736-09-02 | (İstanbul Antlaşması) | Çelyabinsk | ⛔ SINIF ② — Rusya'nın Başkurt/Ural hattı |

**Öngörü:** 1856 satırının üç eksiği de doğrulandı ⇒ kapanır; 1690 açık kalır ⇒ **181 → 180.**
**Ölçüm:** `Değişmez 2s ✓ … 180 AÇIK` · SONUÇ: temiz. Üçüncü kez birebir tuttu.

| Ölçü | Parti 3 | Parti 1+2+3 |
|---|---|---|
| işlenen satır | 15 | **45** |
| kapanan satır | 1 | **7** (187 → 180) |
| eklenen yerleşim adı | 4 | **14** (+1 kanonik) |
| SINIF ② teşhisi | 7 | 13 |

## 11 · Değişen dosyalar (parti 2-3)
`data/olaylar.js` · `data/olaylar_ek.js` · `data/olaylar_ek3.js` · `data/olaylar_ek5.js` ·
`denetim/ARAC-YER-GENISLETME-0920.py` (yeni kipler: `--toplu`, `--sinif`) ·
`denetim/ARAC-TDV-GOVDE-0920.py` (yeni alet) · `denetim/YER-GENISLETME-0920.md` (bu rapor).
Yalnız `yer` alanları değişti; `b:`, `d:`, `yer_id`, tarih alanlarına DOKUNULMADI.


---

## 12 · ⚠️ `yer` GENİŞLETMESİ KAMERAYI OYNATMAZ (KRONO-YER-0072'nin ölçümü, M-4795)

Yatay haber olarak geldi ve buraya yazılıyor ki sonraki oturum yanılmasın:
**`js/app.js`in konum çözücüsü `olayKonumu(o)` `yer:` alanını HİÇ OKUMUYOR** — yalnız
`yer_kon` ve `yer_id`. `yer:` metnini okuyan tek yer `_khKonum` (kaynaklı halka katmanı,
ayrı evren). Yani bu rapordaki genişletmeler **Değişmez 2s'i kapatır, haritanın kamerasını
kendiliğinden düzeltmez**; kamera için `yer_id` (ya da `yer_kon`) gerekir.

Bu oturum kamera iddiasında BULUNMADI. Eklenen 14 ad, KRONO-YER-0072'nin "A kovası"
(`denetim/KRONO-YER-0072-TRIYAJ.json`) malzemesine katılabilir: `yer` metni atlas adıyla
birebir tuttuğunda `yer_id`ye çevrilebilir.

📌 Ayrıca ad yazımı: aynı ölçüm üç çift fark buldu (İsmâil↔İsmail · İbrâil↔İbrail ·
Selânik↔Selanik). Bu oturumda 1856 Paris Antlaşması maddesine atlas adıyla **İsmail**
yazıldı ve satır kapandı — şapkalı yazılsaydı denetim tutmayacaktı.
