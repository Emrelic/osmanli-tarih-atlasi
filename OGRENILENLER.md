# ÖĞRENİLENLER — bu proje bize ne öğretti

Bu belge hata listesi değil, **kural listesi**. Her madde gerçekleşmiş bir
vakadan çıktı ve vakası yazılı. Yeni oturumlar `CLAUDE.md`'yi okuduktan sonra
bunu okursa aynı duvara ikinci kez çarpmaz.

---

## 1. En pahalı ders: SESSİZ HATA sınıfı

Bu projede hataların iki cinsi var:

| | Belirti | Örnek |
|---|---|---|
| **Gürültülü** | Araç bağırır, üretim çöker | Sondaki virgül, `KeyError: 'd'` |
| **SESSİZ** | Denetim TEMİZ raporlar, harita YANLIŞ çizer | Hayalet devlet, sıfır alanlı petek, maske dışı nokta |

Gürültülü hata ucuzdur — kendini gösterir. **Sessiz hatayı yalnız kullanıcı
ekranda görüp bildirince öğreniyoruz** ve bu, projenin en büyük gecikme kaynağı.

Ölçülmüş sessiz hatalar ve kaç yıl fark etmeden durdukları:

```
Bizans 1453'te bitti, kayıt 1537'ye kadar sürdürdü        84 yıl
Memlük 1517'de bitti, kayıt 1557'ye kadar sürdürdü        40 yıl
Bakü/Derbend'de 13 yıllık Rus işgali hiç yoktu            13 yıl
Özi 51 yıl kesintisiz Osmanlı göründü                     4 yıl eksik işgal
Safevî coğrafyası 235 yıl boyunca yanlış kimlikle boyandı  235 yıl
Estergon ve Solnok'un peteği sıfır — kaybı hiç görünmedi   her zaman
32 yerleşim kara maskesinin dışında — toprak sahibi değil  her zaman
```

**Kural:** her denetim eklendiğinde sorulacak soru "hangi sessiz hata sınıfını
görünür yapıyor?" Bugün 7 denetim var ve her biri bir sınıfı kapatıyor. Sekizinci
aday `ETIKETLEME.md §7`'de: **anakronizm denetimi** — hayalet devlet hatası tam
olarak o sınıftı ve üç değişmezin hiçbiri onu göremiyordu.

---

## 2. Denetim ile üretim aynı gözle okumalı

Üç kez aynı şey oldu: **"denetim temiz derken üretim çöküyordu."**

| Vaka | Sebep |
|---|---|
| Sondaki virgül | `denetle.py` tolere ediyordu, `uret_petek.py` etmiyordu |
| Afrika partisinin 47 kaydında `d:` yok | Motor `y["d"]`, denetim `y.get("d")` |
| Afrika merge provam temiz çıktı, üretim çöktü | Provamı denetimin toleranslı okuyucusuyla yapmıştım |

**Kural:** girdiyi okuyan **tek bir modül** olur. `arac/girdi.py` bu yüzden var.
Yeni isteğe bağlı alan eklenirse varsayılanı `girdi.VARSAYILAN`'a yazılır, iki
aracın koduna değil.

**Ve benim kendi hatam:** bir prova, doğrulamak istediği aracın okuyucusuyla
yapılmalı. Toleranslı okuyucuyla yapılan prova katı aracı doğrulamaz.

---

## 3. Eşiği ÖLÇMEDEN seçmek

İki oturum bağımsız olarak aynı hataya düştü:

- Yedinci denetime **50 km² mutlak eşik** kondu → 101 yanlış alarm (Bursa,
  İznik, Bilecik…). Sebep: `alan_km2` bini yuvarlıyor, 500 km² altı "0" basıyor.
- Ben "ölçüt kirli, `o+v+z` toplamı üzerinden yapılmalı" dedim — doğruydu ama
  **asıl sorunun mutlak alan olduğunu görmedim.**
- Mükerrer dedektörüne **Jaccard ≥ 0.45** eşiği kondu, ölçülmeden.

Doğru ölçüt hep **oran** çıktı: peteğin ham Voronoi hücresine oranı (%10),
kelime kümesi benzerliği yerine aynı gün + ortak kişi.

**Kural:** eşik seçmeden önce mevcut veri üstünde dağılımı bas. Eşik, veriden
okunur; sezgiden değil.

---

## 4. Paralel oturumların ASİMETRİSİ

Yedi üretim boşa gitti. Kök sebep tek: **motorun girdisi 30 dakika sabit kalmak
zorunda, içerik oturumunun girdisi dakikalık akıyor.**

```
Üretim başlangıcı   02:34:40
Benim commit'im     02:34:46   ← 6 saniye sonra
Benim commit'im     03:03:43   ← koşunun 29. dakikası
```

İki kez de "dosya temiz görünüyor, kilit yok" diye bakıp yazdım. Kilit
**ilân edilerek** çalışmıyor çünkü ilân edilen taraf o anda başka bir işin
ortasında olabiliyor.

**Kural (CLAUDE.md §7):** *kilidi ilân eden değil, BIRAKAN taraf açar.*
İçerik oturumu işini bitirince "girdi sabit, üretim senin" der; motor oturumu
biterken "yayında" der. Arada gelen yeni parti **veriye yazılmaz, biriktirilir.**

Aynı sınıfın üç ayrı yüzü ve üç ayrı ilacı çıktı:

| Yüz | İlaç |
|---|---|
| Başka oturumun yarım işi commit'ime karıştı | Dosyayı tek tek `git add`, sonra `git diff --cached --stat` |
| Düzenlemem koşan üretimin ortasına düştü | §7 kilit kuralı (disiplin) |
| `index.html` satırı commit'li, veri dosyası değil | `arac/denetle_yayin.py` (ölçüm) |

Üçüncüsü tesadüfen bulundu: `data/olaylar_ek8.js` **dört commit boyunca** 404
veriyordu ve `app.js`'in `|| []` kalıbı yüzünden sayfa çökmediği için kimse
görmedi. Araç yazıldı, ikinci kullanımında yine yakaladı.

---

## 5. Bir "harita yanlış" raporunun teşhis sırası

Kullanıcının her ekran görüntüsü aynı sırayla kovalanmalı. Bu sıra dokuz docx
partisinde damıtıldı:

```
1. O bölgede YERLEŞİM NOKTASI var mı?
   Yoksa hata orada — noktası olmayan bölge en yakın peteğe emilir ve O PETEĞİN
   SAHİBİYLE boyanır. (Sardinya 1533'te Osmanlı göründü; Ayvalık Ceneviz oldu.)

2. Nokta var ama TARİHİ doğru mu?
   Kırılma ile kronoloji maddesi ±30 gün içinde mi? (Taman: veri 1482-01-01,
   maddesi 1 Haziran — 151 gün.)

3. Kırılma DOĞRU MADDEYE mi eşleşiyor?
   ±30 gün penceresinde ALÂKASIZ bir madde varsa Değişmez 2 "maddeli" sayar ve
   hatayı gizler. (Taman'ın penceresinde Zaklise'nin Venedik'e bırakılması vardı.)

4. Devlet o tarihte YAŞIYOR mu?
   Üç değişmez bunu SORMUYOR. (Bizans 84 yıl fazla yaşadı.)

5. Noktanın PETEĞİ var mı?
   Maske dışında mı? Yaslama peteği yok etmiş mi? (Estergon 8 km², Solnok 0.)

6. Hepsi doğruysa: değişim GERÇEKTEN küçük olabilir.
   (Estergon'un çevresi kalabalık; İnebahtı'nın kaybı 9 bin km².)
```

**Kural:** "hata yok, teyit" cevabı da meşru bir cevaptır — ama ölçüldükten
sonra. Dokuz partide 14 madde "doğru çıktı" ve bunları söylemek düzeltmek kadar
değerliydi.

---

## 6. Kullanıcının genel kuralları veriye ÖNCE yazılmalı

Kullanıcı beş "genel kural" verdi ve her biri **geriye dönük tarama** gerektirdi:

1. Şehir el değiştirince adı haritada görünsün
2. Tam tarih belli değilse ayın 1'i yazılmasın ("1 Ağustos 1366" yalan olur)
3. Görsel işaret olay bitince kalksın
4. Ok renkleri tarafa göre (Türk kırmızı/siyah, düşman yeşil/sarı/mavi)
5. Tâbi devletler açık kırmızı

Beşincisi ölçüldüğünde app.js tarafı **hazırdı** ama veri tarafında hiç
uygulanmamıştı — 37 yerleşimin `v:` alanı yoktu.

**Kural:** genel kural geldiğinde iki iş var: (a) bundan sonrası için mekanizma,
(b) **mevcut verinin taraması.** İkincisi atlanırsa kural yalnız yeni kayıtlarda
çalışır ve kullanıcı aynı şeyi tekrar bildirir.

---

## 7. Kaynak disiplini — TDV tuzağı

`islamansiklopedisi.org.tr/<slug>` **var olmayan slug için de HTTP 200 döner** ve
sessizce arama sayfasına yönlendirir. Ölü linki yalnız `<title>` gösterir:
"Arama - TDV İslâm Ansiklopedisi".

Bu turda doğrulanan ölü sluglar: `ferhad-pasa-antlasmasi`, `nihavend`,
`burucird`, `cildir`, `selimiye-camii-ve-kulliyesi`, `derbend`, `ordu`, `parga`…

**Kural:** her slug `<title>` ile doğrulanır. Doğrulanmamış slug yazılmaz.
**Haiku bu projede kullanılmaz** — bu tuzağı kaçırıyor.

İkinci ders: bir antlaşmanın TDV'de müstakil maddesi olmayabilir. Ferhat Paşa
Antlaşması'nın yok; hükümleri **yer maddelerinden** toplandı (`luristan` maddesi
"998'de (1590) İstanbul'da yapılan antlaşma" diyor).

---

## 8. Uydurulmuş kesinlik en zor fark edilen hatadır

Üç ayrı vaka:

- **Kanina**: 1417-10-09 fetih ve 1690-91 Avusturya işgali uydurulmuştu; üç
  kırılma açtı, Avlonya'nın zincirine hizalandı.
- **Fırat kavsi**: 8 yerleşimin zincirini uydurdum, Değişmez 3 çelişkiyi 381'den
  394'e çıkararak yakaladı. Komşularının doğrulanmış zincirlerine oturtuldu.
- **Oturum 14'ün 7 noktası**: tarih yuvarlanmıştı (Ağvât 1854-12-02 ← gerçek
  1852-12-04) çünkü o oturum `olaylar*.js`'e yazamıyordu ve her sınırı kapsanan
  bir kırılmaya oturtmak zorundaydı.

**Kural:** bilinmeyen tarih **yuvarlanmaz, komşusundan alınır.** Bir yerleşimin
tarihi bilinmiyorsa aynı seferle alınan komşusunun doğrulanmış tarihi kullanılır
ve gerekçe kayıt yorumuna yazılır. Yuvarlama yapıldıysa `⚠️` ile işaretlenir.

---

## 9. Aracı düzeltmek veriyi düzeltmekten önemlidir

Dokuz docx partisinde 26 + 21 = **47 mükerrer madde** silindi. İkinci turda
çıkanların hepsi ilk turun dedektöründen kaçmıştı çünkü ölçüt "başlığın ilk 40
karakteri"ydi.

Sonra Jaccard ölçütü kondu ve **o da** üç mükerrer kaçırdı:
- "IV. Mehmed'in tahttan indirilmesi" ↔ "II. Süleyman'ın cülusu" → **tek kelime
  paylaşmıyor** (aynı olayın iki yüzü, zıt özneyle)
- "II. Mustafa'nın cülusu" ↔ "II. Mustafa tahta çıktı…" → 0.125
- "Vahran'ın kesin fethi" ↔ "Vehrân'ın boşaltılması" → imlâ farkı token'ı bozdu

**Kural:** aynı hata sınıfı ikinci kez görülürse veri değil **araç** düzeltilir.
Ve aracın kendi kör noktası ölçülür — "0 şüpheli çift" raporu, kör noktanın
kanıtı olabilir.

---

## 10. Bir düzeltmenin GÖRÜNÜR olduğunu doğrula

En sinsi ders. Taman'da tarih uyuşmazlığını buldum, düzelttim, denetim temiz
geçti. **Üretimden sonra ölçtüğümde yarımada hâlâ 1475'te el değiştiriyordu** —
çünkü asıl sebep başkaydı (nokta maskenin dışındaydı).

Aynısı Estergon'da: veri doğru, madde doğru, motor kaybı doğru işliyor, ama
boyanan alan **8 km²** değişiyor.

**Kural:** veri düzeltmesi yeterli değil. Üretimden sonra **ölçülür**:
o tarihte boyanan alan gerçekten değişti mi? `Δ alan` sıfırsa düzeltme
kullanıcıya görünmüyor demektir ve iş bitmemiştir.

---

## 11. Ölçmeden karar vermemek

Bir soru geldiğinde ("`m:` alanlarını k:2 merkeze çevirelim mi?") dört seçenek
ölçüldü:

```
hepsi -> Maraş        390 çelişki  (+12)
hepsi -> Diyarbakır   395 çelişki  (+17)
hepsi -> Sivas        391 çelişki  (+13)
değiştirmemek         378 çelişki  (  0)     tavan 383
```

Dördü de tavanı aşıyordu. Ölçüm, "kozmetik bir uyarıyı susturmak için gerçek bir
değişmezi bozma" kararını kesinleştirdi ve **bedava üçüncü yolu** gösterdi:
`m:` zincirini geçişli çözmek (Divriği → Malatya → Maraş). Kademe uyarısı 8'den
0'a indi, çelişki hiç kıpırdamadı.

**Kural:** iki seçenek arasında kalındığında ikisini de ölç. Üçüncü yol
genellikle ölçümün içinden çıkar.

---

## 12. Kimlik BİRLEŞTİRMEK çizgeyi sadeleştirmez, düğümü şişirir

*Vaka: Oturum 12, 2026-07-30. Bir tavsiyeyi ölçerek çürüttü.*

Renk sıkıntısını azaltmak için şu tavsiye edilmişti: *"Siena/Ferrara/Mantua/
Parma/Piza `italyan-sehir-devletleri` diye tek kimlikte toplanabilir; altı kimlik
yerine bir kimlik DSATUR'u belirgin rahatlatır."*

**Ölçüldü ve tersi çıktı** (shapely `voronoi_diagram`, 7 kesit): birleşik senaryo
DSATUR'u hiçbir kesitte düşürmüyor, **1600'de 4 → 5'e çıkarıyor.** Sebep basit ve
geriye dönük apaçık: **birleşik düğüm komşularının BİLEŞİMİNİ alır**, yani çizgede
daha kısıtlı bir düğüm olur.

Üstüne tarihî hata: `ferrara`↔`mantua`↔`parma` ve `piza`↔`siena` **sınırdaş.**
Tek kimlik, Po boyunca üç ayrı devletin tek gövde olarak boyanması demek —
**"hayalet birleşik devlet"**, haritada hiç var olmamış bir siyasî varlık.

**Doğru kaldıraç renk PAYLAŞIMI:** hiç eş-zamanlı olmayan kimlikler aynı rengi
kullanabilir. Ölçülen çiftler: `piza`+`parma`, `siena`+`belcika`,
`bretanya`+`luksemburg`. Böylece 15 kimlik ~9-10 renkle karşılanıyor ve
kimlikler ayrı kalıyor. Bu teknik projede zaten kullanılıyor: 104 kimlik
**99 renk**, 5 paylaşımlı çift, en yakın çift 313 km, üçü hiç eş-zamanlı değil.

> **Kural:** kimlik birleştirmesi yalnız iki varlık **hiç sınırdaş değilse VE**
> ayrı boyanması tarihî olarak anlamsızsa önerilir. Sınırdaş olanlar asla
> birleştirilmez.

**İkinci ders — kimlik sayısı belirleyici değil:** aynı ölçüm 1300'de 74 kimliğin
sahnede olduğunu ve DSATUR'un **hiçbir kesitte 5 rengi aşmadığını** gösterdi.
"113 yeni kimlik DSATUR'u zorlar" endişesi yersiz çıktı. Belirleyici olan kimlik
sayısı değil **eş-zamanlı komşuluk**, ve tarihî atlaslarda devletler nadiren
hepsi birden sahnededir.

---

## 13. Metadata veri değildir

*Vaka: Oturum 3, 2026-07-30.*

`list_sessions` çıktısındaki `cwd` alanı bir oturum için "Ranking" gösteriyordu
ve buradan **"bu oturum yanlış dizinde açıldı, verimsiz kaldı"** sonucu
çıkarıldı. Oturum itiraz etti ve haklıydı: alan bayattı, bütün tool çağrıları
doğru yolda koşmuştu.

Kanıt bir tek komuttaydı ve çalıştırılmamıştı:

```bash
git log --oneline -- data/devletler.js
# 6cb69b1  Oturum 3 bitti: devletler dizini 77'den 212 kayda, harita eşleşmesi 101
```

213 devlet kaydının **212'si** o oturumun işiydi.

**Kural:** bir oturumun ne yaptığı **git geçmişinden** okunur, oturum
metadatasından değil. Yanlış atıf zararsız görünür ama "kim ne ekledi"
denetimini bozar ve o denetim veri kaybı kovalarken gereklidir.

Bu, `§11`'in (ölçmeden karar vermemek) aynı refleksinin başka bir yüzü.

---

## 14. ŞAHSÎ BİRLİK ≠ İLHAK

*Vaka: İber Birliği 1580-1640, 2026-07-30.*

Oturum 12, sekiz Portekiz noktasına `{f:"1580-08-25", t:"1640-12-01",
d:"ispanya"}` penceresi ekledi ve eş parçayı (canlıdaki Lizbon, Porto)
entegrasyona bıraktı. Kaynağa bakınca karar **geri alındı.**

TDV "PORTEKİZ": *"meclis kendisini **Portekiz kralı** (I. Felipe) ilân etmek
zorunda kaldı (1581)"* ve *"İspanya idaresinde Portekiz **sömürgelerini**
Hollanda ve İngiltere'ye kaptırdı"*. Yani II. Felipe Portekiz tahtına
**Portekiz kralı olarak** çıktı; Portekiz kendi tacını, meclisini ve sömürge
idaresini korudu. `d:"ispanya"` yazmak *"Portekiz 60 yıl var olmadı"* demek
olurdu ve kaynak bunu açıkça reddediyor.

**İkinci gerekçe iç tutarlılıktı ve tek başına yeterliydi.** Ölçüm: canlı veride
**12 nokta** `portekiz` taşıyor ve **10'u denizaşırı** (Maskat, Hürmüz, Kişm,
Suhâr, Sûr, Buraymî, Ras el-Hayme, Şârika, Tanca). Metropolü İspanya yapıp
kolonileri Portekiz bırakmak, üç okumanın **en savunulamazı** olurdu: anavatanı
olmayan bir sömürge imparatorluğu. İki tutarlı seçenek vardı — hepsi İspanya ya
da hepsi Portekiz — ve kaynak ikincisini söylüyordu.

> **Kural:** iki krallık aynı hükümdarı paylaşıyor ama kendi kurumlarını
> koruyorsa haritada **ayrı kimlikle** durur. Aynı soru şuralarda gelecek:
> İngiltere-İskoçya 1603-1707 · Lehistan-Litvanya 1386-1569 ·
> Danimarka-Norveç 1524-1814 · İsveç-Norveç 1814-1905 ·
> Avusturya-Macaristan 1867-1918 · Kastilya-Aragon 1479-1516.

⚠️ **Yan ders — bir veri kararı hep İKİ yerde ölçülür:** kaynakta ve mevcut
verinin geri kalanında. Oturum 12 kaynağı okumuştu ama 10 denizaşırı noktanın
varlığını ölçmemişti; ben ölçtüm ve karar kendiliğinden çıktı.

---

## 15. Bir aracın kör noktası, AYNADAKİ yönü sormamaktır

*Vaka: `denetle_yayin.py`, Oturum 14'ün bulgusu, 2026-07-30.*

`arac/denetle_yayin.py` şu soruyu soruyordu: *"index.html'in istediği her dosya
diskte ve git'te var mı?"* — ve `olaylar_ek8.js`'in 404'ünü bu yüzden yakaladı.

Ama **tersini sormuyordu**: *"diskteki her veri dosyası index.html'de kayıtlı
mı?"* Sonuç: `data/olaylar_ek9.js` araca **hiç görünmedi.** 13 madde diskte
duruyordu, `denetle.py` onları `data/olaylar*.js` deseniyle okuyup **sayıyordu
ve TEMİZ diyordu**, yayın ise göstermiyordu. Yani iki araç birbirini doğrulamak
yerine ikisi birden yanlış cevap veriyordu.

**Kural:** bir tutarlılık aracı yazarken iki yön de sorulur. "A, B'yi
gösteriyor mu" kadar "B, A'da kayıtlı mı" da denetlenir.

⚠️ **Ters yönün ilk sürümü 5 YANLIŞ ALARM verdi** ve sebebi öğreticiydi:
`data/` altındaki her `.js` tarayıcı girdisi değil. İki ayrı tüketici var —
**motor girdisi** (`uret_petek.py`, `girdi.py`'nin izin listesinden okur;
`yerlesimler_afrika.js` böyledir ve tarayıcı onu hiç yüklemez, tarayıcı
**üretilmiş** `donemler.js`'i yükler) ve **tarayıcı girdisi** (`index.html`'in
`<script>` satırları). Bir dosya bu ikisinden hiçbirinde değilse gerçekten
yetimdir. Üstüne bir `BEKLEYEN` sözlüğü kondu: aktif olmayan parti oraya
**gerekçesiyle** yazılır, yoksa liste çöplüğe döner ve kimse bakmaz
(`§3`'ün "yanlış alarm kaçırılan hatadan pahalıdır" dersi).

---

## 16. "Veri var" ile "bugün çiziliyor" ayrı sorulardır

Oturum 3 ölçtü: **53 kimliğin yerleşim noktası var ama rengi yok.** Ben bunu
Oturum 16'ya "ucuz kazanç, 53 giriş eklenince haritada gerçekten görünür fark
oluyor" diye aktardım. Oturum 16 bağımsız ölçtü ve sayı 157 çıktı — ama asıl
mesele sayıda değil, **kırılımda**:

```
★ bugün YÜKLÜ girdide            5
○ pencere içi, dosyası kapalı   17
· harita penceresinin DIŞINDA  135
```

135'i `box(-12, 1.5, 62, 62)`'nin doğusunda kalıyor: qing-hanedani 117 nokta,
babur 109, ingiliz-hindistani 96, delhi-sultanligi 83, ming 73, yuan 73 — hepsi
`yerlesimler_asya.js`, tamamı 62°D'nin doğusu. Renk verilse **hiçbir şey
değişmez, çizilecek yer yok.** 17'sinin önündeki engel de renk değil, dosyanın
`girdi.py`'de kapalı olması — yani bir merge kararı.

Bugün gerçekten fark yaratan sayı **5**. Ben 53 dedim, on kat şişirdim.

Hata benim aktarımımdaydı: Oturum 3 "bir `yerlesimler*.js` dosyasında noktası
var mı" sorusunu ölçmüştü, ben bunu "bugün haritada çiziliyor mu" sanıp öyle
ilettim. İkisi arasında üç ayrı süzgeç var — dosya girdi listesinde mi, nokta
harita penceresinde mi, kimlik o tarihte sahnede mi.

**Kural:** bir envanter sayısını göreve çevirirken "bu sayı hangi soruyu
cevaplıyor" diye sor. `§11`'in ölçme kuralının devamı bu: ölçülmüş bir sayıyı
yanlış soruya iliştirmek, hiç ölçmemekle aynı sonucu verir. Envanter çıkaran
oturum sayıyı **süzgeçlere ayırarak** versin; tek toplam yanıltıyor.

---

## 17. Vekil ölçüt (proxy) sonucu değiştirir — komşuluk mesafeyle ölçülmez

Renk sayısını düşürmek için "hangi devletler komşu" sorusunu cevaplamak
gerekiyor. İki yol var ve **aynı veriyle iki farklı cevap veriyorlar**:

| Ölçüt | 261 kimlik için gereken renk |
|---|---|
| Gerçek Voronoi komşuluğu (hücreler değiyor mu) | **8** |
| 400 km'lik "yakınlık" vekili | **14** |

Vekil, değmeyen hücreleri komşu sayıp çizgeyi sahte kenarlarla dolduruyor;
sonuç neredeyse iki katı renk talebi — yani var olmayan bir darboğaz.

Bu ölçüm olmasaydı "renk tavanı zorlanıyor, kademeli gitmeliyiz" diye karar
verilecekti. Ölçüldü: **261 kimliğin hepsi eklense 8 renk yetiyor** (maksimum
derece 72). Yeni kimlikler çizgeyi yoğunlaştırmıyor, **genişletiyor** — ayrı
coğrafyalarda kümeleniyorlar, birbirlerine değmiyorlar.

**Kural:** bir vekil ölçüt kullanacaksan önce gerçek ölçütle karşılaştır.
Karşılaştırmadıysan vekilin cevabını raporlama. Not `renkler.py` başlığına
yazıldı ki bir sonraki koşuda kimse mesafeye dönmesin.

**Aynı turdan ikinci vaka — ölçüm doğru ama SORU yanlış:** Oturum 16, Boğdan
sınırının nehre yaslanma payını ölçtü ve düşük buldu. Sonra kendi kusurunu
yakaladı: **hücre** sınırını ölçmüştü, kullanıcının haritada gördüğü ise
**gövde** sınırı. Boğdan gövdesi 8-10 hücrenin birleşimi ve iç kenarları hiç
görünmüyor. Sayı doğruydu, sorduğu şey yanlıştı. `§15`'in aynadaki-yön dersinin
geometrik hâli: "neyi ölçtüm" ile "kullanıcı neye bakıyor" aynı şey mi?

---

## 18. Değişmez 2 maddenin VAR olduğunu sorar, DOĞRU olduğunu sormaz

Kullanıcı `hatalar 11 md.18`'de sordu: *"Cebel-i Dürûz ayaklanmasında Cezayir'den
bir parçanın Fransa'ya geçtiği görülüyor, bu madde ile mi alâkalı?"* Cevap hayır —
Cebel-i Dürûz **Suriye'de**, Havran'da. Oturum 14 neden öyle göründüğünü ölçtü:

```
Konstantin'in Fransa'ya geçişi   1837-10-13
Cebel-i Dürûz ayaklanması        1837-10-15   ← 2 gün arayla
```

Konstantin'in kendi maddesi **yoktu**. Değişmez 2 ±30 gün penceresinde *en yakın*
maddeyi eşleştirdiği için Cezayir'in doğusu bir Dürzî ayaklanmasının altında el
değiştiriyordu — ve denetim buna **"452/452, 0 açık, TEMİZ"** diyordu.

Aynı sınıftan iki vaka daha:

| Kırılma | Eşleştiği madde | Fark |
|---|---|---|
| Zeyla 1884-01-01 | "Reji İdaresi kuruldu (tütün tekeli)" | +0 gün |
| Murzuk 1577-01-01 | "İstanbul Rasathanesi kuruldu" | +0 gün |

Murzuk'unki **215.417 km²'lik** petek: Sahra'nın ortası, bir rasathane maddesinin
altında renk değiştiriyor.

**Kök sebep tek cümle:** Değişmez 2 maddenin **var olduğunu** sorar, **doğru
olduğunu** sormaz. Yakınlık ilişki sanılıyor.

Önerilen ölçüt: kırılmanın yerleşim adı — ya da `m:` merkezi, ya da bölge adı —
eşleştiği maddenin `yer:` veya başlığında geçiyor mu? Geçmiyorsa **şüpheli**
(ihlal değil; mükerrerdeki "zayıf ölçüt" gibi). Üç vakanın üçü de yakalanırdı.

**Genel ders:** bir denetim "bağlantı var mı" diye soruyorsa, bağlantının
**doğru** olup olmadığını da sormalı. Aksi hâlde denetim yalnız *biçimi* korur ve
içerik sessizce yanlış kalır — üstelik yeşil tik vererek. `§15`'in aynadaki-yön
sorusunun ilişki hâli.

---

## 19. Çok satırlı kayıtta ADA GÖRE dışlama güvenilir değildir

Mısır'ın hukukî kaybını `1914-11-05`'ten `1914-12-18`'e taşırken **Kuveyt hariç
tutulacaktı** — onun İngiliz himayesi 3 Kasım 1914'tür ve Mısır'la alâkasızdır.
Dışlamayı `{ ad:"..."` desenine bağladım.

Tutmadı: Kuveyt'in kaydı **çok satırlı** ve tarih devam satırındaydı, yani o
satırda ad yok. 19 kayıt değişti, sekizi `?` adıyla göründü ve **Kuveyt de içeride
kaldı**. Düzeltilmeseydi Kuveyt'in himayesi 43 gün kaymış olacaktı — ve
"düzelttiğim hatanın aynısını başka yerde yapmak" olurdu.

Yalnız *"Kuveyt gerçekten değişmedi mi"* diye **ayrıca ölçtüğüm** için yakalandı.

**Kural:** bir dönüşümde bir şeyi hariç tutuyorsan, dönüşümden sonra **hariç
tutulanın gerçekten hariç kaldığını ölç**. Dışlama mantığının çalıştığını
varsayma — `?` gibi bir belirsizlik çıktısı gördüğünde de üstünü örtme, o
belirsizlik dışlamanın kör olduğu satırların ta kendisi.
