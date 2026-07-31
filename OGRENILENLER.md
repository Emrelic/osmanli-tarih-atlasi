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

---

## 20. Yönlendirme tuzağı — ölü slug tuzağının AYNADAKİ hâli

Bilinen tuzak: `islamansiklopedisi.org.tr/<slug>` var olmayan slug için **HTTP 200**
döner ve sessizce arama sayfasına yönlendirir; yalnız `<title>` ele verir. Kural
bu yüzden "her slug `<title>` ile doğrulanacak"tı.

Bugün **ters yönü** çıktı. Oturum 14, Alâiye Beyliği'ni araştırırken `alaiye`
slug'ını denedi; sayfa açıldı ama `alanya` maddesine **yönlendirmeydi**. Bunu
*"beyliğin ayrı maddesi yok"* diye okudular ve şu tavsiyeyi verdiler: **"Alâiye
ayrı beylik değil, `karaman`'a katılmalı."**

Oysa müstakil madde vardı: **`alaiye-beyligi`**, `<title>` = "ALÂİYE BEYLİĞİ —
TDV İslâm Ansiklopedisi". Bir arama daha yapılsaydı ilk turda bulunacaktı.

Ve içindeki cümle bütün tavsiyeyi çürütüyordu:

> "Karaman b. Savcı Bey tarafından 1427 yılında 5000 altın karşılığında Memlük
> Sultanı Barsbay'a satıldı."

Yani Alâiye'nin son 44 yılı Karamanlı **değil, Memlük**. Kimlik silinmemeli;
yalnız dönemi 1471 değil **1427**'de bitmeli, sonrası `memluk`. Birleştirme
yapılsaydı 44 yıllık Memlük hâkimiyeti haritadan tamamen silinecekti.

**İki farklı hata, tek kök:**

| | Sayfa | Yanlış okuma |
|---|---|---|
| Ölü slug | açılır, **arama** sayfasıdır | "madde var" sanılır |
| Yönlendirme | açılır, **başka madde**dir | "madde yok" sanılır |

**Kural genişletildi:** `<title>` yalnız *"var mı"* sorusunu değil, *"ARADIĞIM
madde mi"* sorusunu da cevaplamalı. Başlık beklediğinden farklıysa — arama
sayfası **ya da başka bir maddenin başlığı** — sonuç "doğrulanmadı"dır. Ve
"maddesi yok" sonucuna varmadan önce **en az bir alternatif slug denenmeli**
(`alaiye` → `alaiye-beyligi`); yokluk iddiası, varlık iddiasından daha fazla
arama ister, çünkü tek bir başarısız denemeyle kanıtlanamaz.

---

## 21. Çok satırlı metni kabuktan geçirme — iki kabuk, iki sözdizimi

Oturum 14 commit mesajını PowerShell here-string'iyle (`@'...'@`) yazdı, ama Bash
aracı **Git Bash**'tir. Bash bunu ayrıştıramadı: commit oluştu, mesaj olarak
yalnız ilk satır girdi ve başına `@` yapıştı. `git commit --amend -F <dosya>` ile
düzeltildi.

Bu, `CLAUDE.md §11`'in *"`sed` ile Türkçe karakterli düzeltme yapma, scratchpad'e
betik yaz"* kuralının aynı ailesinden — kural `sed` için yazılmıştı, oysa kök
sebep daha genel:

> **Çok satırlı metni kabuk üzerinden geçirme.** PowerShell ve Bash iki ayrı araç
> ve iki ayrı sözdizimi. `@'...'@` PowerShell'de here-string, Bash'te ayrıştırma
> hatası. Commit mesajı, yama, veri — hepsi scratchpad'e **dosya** olarak yazılıp
> `-F <dosya>` ya da `< dosya` ile verilmeli.

Aynı ailenin daha önce görülmüş üyeleri: kabuğun ters tırnağı yutması, `\n`'i
gerçek satır sonuna çevirmesi (bir kez bir dize sabitinin **içine** satır sonu
yazdı), Türkçe karakterleri ASCII'ye düşürüp altı arama anahtarını bozması
(İznik/Iznik).

**Neden bu hata sınıfı sinsi:** çoğu sessiz. Commit *oluştu*, dosya *yazıldı*,
komut *başarılı döndü* — yalnız içerik yanlış. Hata vermediği için ancak sonuca
bakınca görülüyor. `§19`'un ("hariç tuttuğunun gerçekten hariç kaldığını ölç")
kabuk hâli: **kabuktan geçen metni, geçtikten sonra oku.**

---

## 22. "Cetvelle çizilmiş" şikâyetinin ölçüm reçetesi

Kullanıcı üç kez aynı şeyi söyledi — Libya (md.17), Boğdan (md.29), Kırım (md.13):
*"cetvelle çizilmiş gibi görünüyor."* Üçünde de doğru ölçüt aynı çıktı ama **doğru
ölçüte varmak üç denemede oldu.**

**Ölçü birimi: köşe / 1000 km.** Ölçek (Oturum 16'nın ölçümleri):

```
sağlıklı bölge   115 – 118
Boğdan            101,7      → cetvel DEĞİL, sorun nehre yaslanmada
Kırım iç sınırı    32,5      → cetvel, gerçek
Libya çölü         18,1      → cetvel, gerçek (nokta yokluğu)
```

### 🔴 NEYİ ÖLÇTÜĞÜN, ÖLÇTÜĞÜN SAYIDAN ÖNEMLİ

Aynı yöntem hatası üç ayrı biçimde çıktı:

| Yanlış ölçülen | Neden yanıltır |
|---|---|
| **Hücre** sınırı (Boğdan'da) | Gövde 8-10 hücrenin birleşimi; iç kenarlar haritada **hiç görünmez** |
| **Toplam** çevre (Kırım'da) | Yarımada; sınırın çoğu kıyı, kıyı maskeden çok yoğun gelir → 231-250, "sağlıklı" görünür |
| **Ham petek** (işgal örtüsünde) | `kur:` epok düzeltmesi atlanır, tarama taban renginden farklı yere düşer |

**Doğru ölçüt: iki GÖVDENİN ORTAK KENARI** — ne toplam çevre, ne hücre sınırı,
ne kıyı. Kullanıcının gördüğü çizgi tam olarak odur.

Kırım'da toplamla ölçülseydi "sorun yok" denecekti; ortak kenarla ölçülünce 5 kenar
/ 153,6 km / ortalama 30,7 km çıktı — beş düz parça.

### Tek soru, üç şikâyet

md.5 (Karaman'ın kısmî ilhakı), md.12 (Germiyan'ın "iz şeklinde" görünmesi) ve
md.13 (Kırım) **aynı sorunun üç yüzü**: *bir gövde başka bir gövdeyle sınırdaş
olduğunda o sınırı kaç nokta çiziyor?* Reçete ortak olduğu için üçü tek ölçüm
diline bağlanabilir.

**Ve çare hep veri:** üçünde de motorda yapacak bir şey yok. Sınır seyrek, çünkü
nokta seyrek. ⚠️ Ama nokta eklemek **toprağı büyütmek değil, sınırı yumuşatmak**
içindir — Mısır'da dört vaha noktası çölün %61'ini yuttu (`§14 md.40 borcu`).

---

## 23. Büyük boşluk TARİH, küçük boşluk HATA

Kullanıcının genel kuralı (`hatalar 12 md.11`): *"karadan toprak genişlemelerinde
ana kara ile bağlantı beklenir; yoksa denizden geçiş mi diye araştırılmalı —
uçakla gidilip arada geçiş yokken yer ele geçirilemez."*

Oturum 2 bunu denetime çevirirken beklenen ölçüt "mesafe eşiği" idi. Ölçüm bunu
**ters çevirdi**:

```
100 km ÜSTÜ boşluk  → gerçek tarihî sıçrama (Tebriz 585 km — sefer)
100 km ALTI boşluk  → hata (araya bir devlet sığmaz)
```

Sezgi "büyük boşluk daha şüpheli" der. Gerçek tersi: **büyük boşluk bir seferi
anlatır, küçük boşluk geometrinin kusurudur.** 3,7 km'lik bir kara boşluğu
(Gümülcine) tarihen imkânsızdır — o mesafede araya başka bir hâkimiyet giremez.
585 km'lik boşluk ise Tebriz seferidir ve doğrudur.

Ve ölçüt **mesafe değil kara/deniz ayrımı** olmalı, çünkü kullanıcının cümlesi
zaten öyle diyor: 272 kopuk bileşenin **222'si deniz hattı** (Rodos, Girit, Kıbrıs,
Cezayir, Kırım) ve muaf. Mesafe eşiğiyle kurulsaydı bu 222'si yanlış alarm olurdu.

Yakalanan gerçek kusurlar: Gümülcine 3,7 km / %100 kara / 6.459 km² · 1281 kuruluş
gövdesinin iki ayrı leke olması (1,66 km, 1288'e kadar) · 1413-07-05'te 289.597 km²
/ 46 km kara boşluğu (Fetret sonrası toparlanma).

⭐ **Ve bir şikâyet "kusur değil" çıktı:** Isparta'nın enklav görüntüsü (md.10)
116 km kara sıçraması — yani **gerçek**. Kullanıcının tespiti haklıydı, sebebi
meşru. Bir denetimin en değerli çıktılarından biri, şüpheyi *doğrulamak* değil
**temize çıkarmaktır**; aksi hâlde düzeltilecek diye var olmayan bir hata kovalanır.

---

## 24. Motor yalnız VAR OLANA yaslanabilir

`§22` "cetvel" şikâyetinin ölçüsünü verdi: köşe/1000 km, gövdelerin ortak kenarında.
Libya'da (md.17) o sayı 18,1'di ve teşhis *"cetvel değil, nokta yokluğu"* oldu.
Nokta yokluğu **gerçekti ve giderildi** — 192.614 → 48.876 km²/nokta, dört kat.
Ama cetvel görüntüsü **devam etti.** Teşhis yarım kalmış.

Oturum 14 sebebi ölçtü. Motor sınırı nehire (0,30° ≈ 33 km) ya da dağ sırtına
(0,35° ≈ 39 km) yaslıyor:

```
                          LİBYA        ANADOLU
motorun okuduğu nehir     0 parça      17 parça / 6.746 km
motorun sırt saydığı      3 parça       3 parça
```

Libya'nın üç sırtının **hiçbiri Fizan sınırında değil** — oysa görünür cetvel
çizgilerinin beşi de orada (22-28°K, 10-16°D).

> Fizan'daki sınırın 33-39 km içinde **yaslanacak hiçbir şey yok.** Ham Voronoi
> orta dikmesi olarak kalıyor — ve orta dikme tanımı gereği **düz bir doğrudur.**

Yani cetvel, motorun kusuru değil; motorun **girdisinin yokluğu**. Anadolu'da sınır
kıvrılıyor çünkü orada kıvrılacak bir nehir var.

**Ve beş kenarın beşi de `(boş) | OSMANLI`:** çizgi iki devlet arasında değil,
Osmanlı ile **sahipsiz çöl** arasında. Çölde sınır tarihen zaten tanımsızdı;
keskin çizgi, olmayan bir kesinlik iddia ediyor.

### Nokta eklemenin ÖLÇÜLMÜŞ tavanı

```
bugün       18 kenar  4.298 km  en uzun 438
7 nokta     19 kenar  4.010 km  en uzun 451   ← en uzun ARTTI
8 nokta     20 kenar  4.137 km  en uzun 390
9 nokta     21 kenar  3.931 km  en uzun 390
```

Dokuz nokta için kazanç: en uzun **-%11**, toplam **-%9**. **md.17 nokta ekleyerek
KAPANMAZ, yalnız yumuşar.** Ve 7. aşamada en uzunun *artması* tesadüf değil —
İdehân Ubârî eklenince Gât'ın batı sınırı yeni tepe oluyor, Tâsîlî onu kırıyor.
Liste bir küme olarak çalışıyor; bir nokta çıkarılırsa ölçüm geçersiz.

**Genel ders:** bir düzeltmenin tavanını **uygulamadan önce ölç.** Burada ölçüm,
doğru yönde ilerleyen bir çabanın hedefe varamayacağını gösterdi — ve daha
pahalısı, ilk aday listenin işi **%13 kötüleştireceğini**. Simülasyon olmasaydı
dokuz nokta eklenip "md.17 tamam" denecekti.

---

## 25. Aracı çalıştırmak yetmez — hangi soruyu cevapladığını oku

`denetle_yayin.py`, `olaylar_ek8.js`'in dört commit boyunca 404 vermesi üzerine
yazılmıştı. Bugün aynı sınıf **üçüncü kez** tekrarladı ve bu sefer sebebi, aracı
o turda **çalıştırmış olan** kişiydi.

Araç iki ayrı soru soruyor:

```
✗ yetim veri dosyası          → dosya diskte var, ama kimse OKUMUYOR
✗ diskte var ama GİT'TE İZLENMİYOR → dosyayı okuyan var, ama yayında YOK
```

Ben birinci uyarıyı gördüm (`olaylar_ek10.js` ve `ek11.js` yetim), `index.html`'e
`<script>` satırı ekleyerek **onu susturdum** — ve ikinci soruyu hiç sormadım.
Sonuç: dosyalar artık okunuyordu ama git'e eklenmemişlerdi, yani push edilince
canlı sitede **404** verdiler. Sayfa sessizce eksik çalıştı.

Yani bir uyarıyı kapatan hamle, **başka bir uyarıyı açtı** ve ben aracı ikinci kez
koşturmadım. Uyarı sırası tesadüfen öyleydi: dosya önce "yetim"di, script satırı
eklenince "izlenmiyor" oldu.

**Kural:** bir denetim uyarısını kapatan değişiklikten sonra **denetimi yeniden
koştur.** Bir uyarıyı susturmak, o uyarının işaret ettiği durumu düzeltmekle aynı
şey değildir — düzeltme yeni bir durum yaratır ve o durumun da denetlenmesi gerekir.

⚠️ Ve ikinci katman: aracı ben yazmıştım ve yine de çıktısını yarım okudum. Bir
aracın sahibi olmak, çıktısını dikkatle okumaktan **muaf tutmaz**; tersine, ne
söyleyeceğini bildiğini sanmak tam da yarım okumaya yol açar.

---

## 26. Bir kuralı, ATEŞLEMEMESİ gereken vakalara karşı sına

Kullanıcı (hatalar 15 md.19): *"Petek bölgesi denizaşırı olamaz. Afrika'nın ada
olmaması ve Sina yarımadası ile bağlı olması, binlerce kilometre karadan geçiş ile
bu bölgenin Oran-Merselkebir'e ait olması mantıksız."*

Şikâyet doğrulandı: Oran'ın peteğinin bir parçası **37,52K −1,49D**'de, yani
Murcia/Almería kıyısında — 675 km², hattın %97'si deniz, 209,7 km açık su. Ve tarama
aynı kusurun her yerde olduğunu gösterdi: Küngrat 132.678 km² (Aral'ın karşı kıyısı),
Taranto 32.461, Helsinki 28.522, Kefe 18.215, Kerç 15.011.

**Kural buradan kolayca çıkarılırdı:** "hat denizden geçiyorsa o parçayı kes."
Oturum 16 bunu uygulamadan **ölçtü** — ve üç ölçütü yan yana koydu:

```
A) hat denizden geçiyor mu (katı)  → 106 parça
B) deniz > 25 km                   →  49 parça
C) deniz payı > %30                →  50 parça
```

A'da olup B'de olmayan **57 parçanın hepsi meşru**:

| | Alan | Sebep |
|---|---|---|
| Oslo | 240.358 km² | 18,8 km **fiyort** geçişi |
| Königsberg | 46.363 km² | 17,7 km Vistül **lagünü** |
| Azak | 39.094 km² | 20,1 km Don **deltası** |

Yani en doğal görünen kural, kullanıcının şikâyetini çözerken **Norveç'in 240 bin
km²'sini bir fiyort yüzünden başkasına verecekti.**

**Kural:** bir kuralı, ateşlemesi gereken vakalarla sınamak yetmez — **ateşlememesi
gereken** vakalarla da sınanmalı. Şikâyetten türetilen kural, şikâyet edilmeyen her
şeyi de etkiler; ve şikâyet edilmemiş olması onların doğru olduğunu gösterir, önemsiz
olduğunu değil. `§8`'in (uydurulmuş kesinlik) ve `§11`'in (ölçmeden karar vermemek)
kesişimi: burada ölçülmesi gereken şey **yanlış pozitifin bedeliydi**, sayısı değil.

### Ve doğru ölçüt eşikte değil, fizikte

Kullanıcının kendi cümlesi ölçütü veriyor: *"binlerce kilometre karadan geçiş."*
Yani **kara üzerinden gerçek mesafe** — eşiksiz. Oturum 16'nın tasarımı:

> Kara maskesini ~0,1° ızgaraya dök (≈448 bin hücre) → bütün tohumlardan **çok
> kaynaklı BFS**, yalnız kara hücreleri üzerinden → her hücre "kara yolundan en
> yakın tohum"unu öğrenir → petek parçası temsilci noktasının ızgara sahibine gider.

Oran'ın İspanya parçası düzelir (kara yolu Cebelitarık üzerinden binlerce km); Oslo'nun
fiyortu bozulmaz (karşı kıyı kara yolundan ~40 km, Oslo yine en yakın). **Keyfî sayı
yok — ölçüt fiziğin kendisi.** Ve ızgara yalnız *sahipliğe* karar veriyor, sınırı
çizmiyor; sınır yine Voronoi'den geldiği için 0,1°'lik kabalık haritaya yansımıyor.

---

## 27. Yaklaşık yöntem, kesin yöntemin YANILDIĞI yere kısıtlanır

`§26`'da kara-kısıtlı Voronoi tasarlandı: kara maskesini ızgaraya döküp tohumlardan
BFS koşmak. Prototip **geçme ölçütünü geçti** — Oslo, Königsberg, Azak korundu;
Oran, Küngrat, Kerç düzeldi. Ama el değiştirenlerin listesindeki en büyük iki kalem
şunlardı:

```
Nijniy Novgorod → Vologda   243.191 km²
Moskova         → Vologda   124.467 km²
Atina           → Salamis     3.173 km²
```

İkisi **iç Rusya**, denizle hiç ilgisi yok. Atina'nın Attika'yı Salamis'e kaptırması
ise düpedüz saçma.

**Sebep:** 0,1°'lik ızgara mesafeyi ~%8 hatayla ölçüyor (oktil yaklaşımı + tohum
yuvarlaması). **Karada bu hata, Voronoi'nin kesin cevabından daha kötü.** Yaklaşık
yöntem, kesin yöntemin doğru olduğu yerde onu bozuyordu.

**Düzeltme — kapsam daraltıldı, eşik EKLENMEDİ:**

```
tohum→parça düz hattı TAMAMEN karadaysa  → düz mesafe geçerli, VORONOİ KALIR
hat denizden geçiyorsa                   → düz mesafe anlamsız, IZGARA KARAR VERİR
```

Izgara artık **kesin geometrinin yanıldığı yerde** devreye giriyor, her yerde değil.
Hâlâ eşiksiz: ölçüt "hat denizi kesiyor mu", bir sayı değil. Sonuç 67 parça /
923.795 km²'den **32 parça / 321.150 km²**'ye indi — haritanın %0,95'i.

**Kural:** bir yaklaşıklık getiriyorsan, onu **kesin yöntemin başarısız olduğu
alana kısıtla.** Yaklaşık yöntem "daha genel" göründüğü için her yere uygulanmak
ister; oysa genellik burada bir kusurdur — kesin cevabın var olduğu yerde yaklaşık
cevap saf gürültüdür.

### Ve sınavı geçmek yetmez

Bu, `§26`'nın kendine dönmüş hâli. Geçme ölçütünü **ben** koymuştum (Oslo/Königsberg/
Azak korunsun, Oran/Küngrat düzelsin) ve prototip onu geçti. Hata, sınavın **sormadığı**
yerdeydi — iç Rusya'da, kimsenin şikâyet etmediği ve kimsenin bakmadığı 367 bin km²'de.

> Bir sınavı geçmek, sınavın kapsamadığı yerde doğru olmayı garanti etmez. Geçtikten
> sonra **çıktının tamamına** bakılır, yalnız sınav maddelerine değil.

### Bonus: sınav maddesinin kendisi yanlış olabilir

Aynı koşuda Kefe düzelmedi ve ilk tepki "prototip eksik" olurdu. Ölçüldü: Kefe'nin
parçası Sivaş lagününün kuzeyinde; düz hat lagünü kesiyor ama **kara yolu lagünün
etrafından ~150 km** — yani Kefe gerçekten kara yolundan en yakın tohum. Sınav
listesine Kefe'yi koyan taraf yanılmıştı.

> Prototipin seninle aynı fikirde olmaması kusur değil, çalıştığının işareti olabilir.

---

## 28. Maskenin boğazları kapatması — üçüncü kusur sınıfı

`hatalar 15 md.6`: *"Karesi ilhak edilince Osmanlı Gelibolu'ya geçmiş gibi görünüyor.
Petek bölgeler denizaşırı gitmemeli."* İlk teşhis "ada kuralı bozuk" olurdu. Oturum 16
ölçtü ve gerçek daha kötü çıktı: **ada kuralı bozuk değil, DEVREYE HİÇ GİRMİYOR.**

Kara maskesinde hangi boğazların kapalı olduğu sınandı:

```
Kilitbahir ↔ Çanakkale   AYNI parça  → ÇANAKKALE KAPALI    🔴
İstanbul   ↔ Üsküdar     AYNI parça  → İSTANBUL KAPALI     🔴
Tarifa     ↔ Tanca       AYNI parça  → CEBELİTARIK KAPALI  🔴
Kerç       ↔ Taman       AYNI parça  → KERÇ KAPALI         🔴
Sina       ↔ Süveyş batı AYNI parça  → DOĞRU (gerçek berzah)
Ayvalık ↔ Midilli · Biga ↔ Bozcaada · Kopenhag ↔ Malmö  → doğru şekilde AYRI
```

Rumeli ile Anadolu maskede **tek kara parçası**. Kural "aynı bileşen, ihlal yok" diyor
ve hiç ateşlemiyor. Kullanıcı 1345-1352 arasında Gelibolu'da Osmanlı rengi görüyor;
haklı.

Ve bu `md.19`'u da büyütüyor: Cebelitarık'ın kapalı olması, Afrika ile Avrupa'nın
**Sina'dan başka bir yerden de** birleştiği anlamına geliyor. Oran'ın İspanya'ya
geçişi tek bir zayıf halkadan değil, **iki ayrı sahte köprüden** besleniyordu.

### Üç bağımsız kusur sınıfı, biri ötekileri zehirliyor

| | Kusur | Çare |
|---|---|---|
| 1 | nokta yokluğu (Libya, Kırım) | veri — nokta ekle |
| 2 | bileşen ölçütünün yanlışlığı (md.19) | kara-kısıtlı Voronoi |
| 3 | **maskenin boğazları kapatması** | `bogazlar.js` |

Üçüncüsü çözülmeden ilk ikisi tam çalışmaz: kara-kısıtlı Voronoi ızgarayı **aynı
maskeden** kuruyor, yani Çanakkale'yi karadan geçilebilir sanıyor. Bu yüzden sıralama
zorunlu hâle geldi — boğazlar, Voronoi'den **önce**.

> Bir düzeltmenin girdisi başka bir kusurun çıktısıysa, sıra keyfî değildir.

### Ve bir yan ders: tarihî göz de coğrafyaya bakmadan yanılır

Prototip "Sina güneyi → Tebük" önerdi. *"Sinâ Osmanlı'da Mısır eyaletine bağlıydı"*
diyerek reddettim — argüman doğruydu ama **uygulandığı yer yanlıştı**. Parça
28,60K/34,99D'de; Akabe körfezinin **doğusunda**, yani Arabistan'da. O kara Sinâ değil;
Sina güneyinin peteği körfezi aşıp Arabistan'ı kapmıştı. Transfer hem geometrik hem
idarî olarak doğruymuş.

`§26`'da "geometri karar veremez, tarihî göz gerekir" demiştik. Tersi de doğruymuş:
**tarihî göz de koordinata bakmadan karar verirse yanılır.** İkisi birlikte gerekiyor.

---

## 29. İstisnası olan kural, kuralsızlıktan kötüdür

`§28`'de göl hipotezi ortaya atıldı: ölçüt gölleri de deniz sayıyor olabilir mi?
Ölçüldü ve **dört vakada doğru çıktı** — St. Petersburg ×2 (Ladoga), Vologda
(Onega), Urmiye (Urmiye gölü). Toplam **3.101 km²**. En çarpıcısı Urmiye: kasaba
kendi gölünün kıyısında ve peteği **kendi gölünü** aştığı için toprak kaybediyor.

Doğal tepki: "göller geçilebilir" diye bir kural ekle. Ölçüm bunu öldürdü:

```
Küngrat → Üstyurt   132.678 km²   34,5 km GÖL (ARAL) · 0 km deniz
```

Küngrat vakasının **tamamı** bir göl geçişi. Yani kural eklenirse kazanç 3.101 km²,
kayıp 132.678 km² — **43 kat**.

Ve ayırt etmek de mümkün değil, çünkü ölçüler **örtüşüyor**:

| | Kesilen su | Göl alanı |
|---|---|---|
| Aral (kalmalı) | 34,5 km | ~68.000 km² |
| Ladoga (geçilmeli) | 35,8 km | ~17.700 km² |

Mesafe ölçütü bu ikisini ayıramaz. Alan eşiği de keyfî olur — ve eşiklerin ne kadar
kırılgan olduğunu bugün üç kez gördük (`§26` ölçüt A'nın Oslo'yu yemesi, `§27`
ızgaranın Moskova'yı taşıması, `§21` sed'in sessizce hiçbir şey bulamaması).

**Karar: kural eklenmedi.** Dört göl vakası, deniz vakalarıyla **aynı listede**
tarihî gözle gözden geçirilecek — `§28`'de Sinâ için izlenen yolun aynısı.

> **Kural coğrafyayı düzeltir; hangi düzeltmenin tarihen kabul edileceğine liste
> karar verir.**

Bu ayrım, "istisnalı kural" ile "kural + gözden geçirme" arasındaki farktır. Birincisi
istisnayı koda gömer ve bir daha kimse sorgulamaz; ikincisi kararı görünür bırakır.

### Ve aynı hatayı ikinci kez yaptım

Helsinki için "28.522 km² Finlandiya içi" diye yazdım. Parça **58,70K / 25,54D**'de —
Finlandiya değil, **Estonya**. Helsinki'nin peteği Finlandiya körfezini aşıyormuş;
gerçek denizaşırı vaka, göl artefaktı değil.

`§28`'de Sinâ'yı koordinata bakmadan reddetmiştim ve dersini yazmıştım. Bir sonraki
turda **aynı hatayı tekrarladım**. Ders yazmak, dersi uygulamak değil: bir parça
hakkında hüküm vermeden önce **koordinatına bak** — adı nereyi çağrıştırırsa
çağrıştırsın.

---

## 28-DÜZELTME. `bogazlar.js` çözüm DEĞİLDİ — ve yanlış ders kayda girmişti

`§28` "maskenin boğazları kapatması"nı **üçüncü kusur sınıfı** ilân etti ve çaresini
`bogazlar.js` (dört boğaza ince su poligonu) olarak yazdı. Ben onayladım. **İkisi de
yanlıştı.** Oturum 16 kod yazmadan önce ölçtü:

```
dört boğaz kesildi →  1.103 bileşen → 1.108  (+5)
parça #0 hâlâ 33.229.856 km²  — Gelibolu, Bursa, Tanca, Kefe, Kerç, Taman HEPSİ BİRLİKTE
kazanılan: Kilitbahir 115 km², Rumeli Hisarı 8 km², birkaç kıyı kırıntısı
```

**Sebep düzeltilebilir bir hata değil, coğrafya:**

- Trakya ile Anadolu, Çanakkale kesilse bile ayrılmaz — **Balkanlar → Ukrayna →
  Kafkasya → Anadolu** diye karadan dolaşılır. Avrupa ile Asya tek kıtadır.
- Afrika ile Avrupa, Cebelitarık kesilse bile ayrılmaz — **Sina durur**, ve Sina
  gerçek bir berzahtır, kesilemez.

Yani **bileşen ölçütü md.6'yı ve md.19'u prensip olarak çözemez.** Kaç boğaz kesilirse
kesilsin Avrasya-Afrika tek parça kalır.

### Doğru teşhis

Kusur "maske boğazları kapatıyor" değil; kusur **ada kuralının kendisinde**: *"aynı
kara parçası"* ölçütü kıtasal ölçekte **hiçbir şey ayırt etmiyor**. Boğazların kapalı
olması gerçek bir gözlemdi ama **semptomdu, sebep değil.**

Çözüm zaten elimizdeydi: kara-kısıtlı Voronoi'nin ölçütü bileşen değil **mesafe**.
Gelibolu'dan karşı yakaya kuş uçuşu 5 km, **kara yolu ~2.000 km** (Karadeniz'i
dolaşarak). Prototipin listesinde "Gelibolu → Çanakkale 806 km²" **zaten vardı** —
yani md.6'yı çözen şey daha en baştan içindeydi.

### Asıl ders: mekanizmanın ZARAFETİNE değil, ÇÖZÜP ÇÖZMEDİĞİNE bak

`bogazlar.js` "mimaride zaten var olan mekanizma, `oku_goller()`'in kardeşi, yeni
kavram yok" diye önerildi ve onaylandı. İkimiz de **zarafete** baktık, **etkiye**
bakmadık. Beş poligon çizilir, üretim koşulur, harita hiç değişmezdi — ve sebebi
haftalarca anlaşılmazdı, çünkü **denetim de temiz derdi.**

> Bir çözümü uygulamadan önce, çözdüğünü **ölç**. "Mimariye uyuyor" bir doğruluk
> kanıtı değildir.

⚠️ Ve bu bölümün kendisi bir ders: `§28` yanlış bir çareyi kayda geçirmişti. **Kayıtta
kalan yanlış ders, hiç ders olmamasından kötüdür** — sonraki oturum onu okuyup uygular.
Düzeltme silinerek değil, üstüne yazılarak yapıldı; hatanın kendisi de kayıt değeri
taşıyor.

📌 Ada kuralı bugünkü hâliyle kalıyor: gerçek **adalar** için (Midilli, Bozcaada,
Kıbrıs, Girit) doğru çalışıyor, yalnız kıtasal ölçekte kör. Kara-kısıtlı Voronoi
devreye girince onun özel hâli olur ve kaldırılabilir — ama ayrıca ölçülmeden değil.

---

## 22-DÜZELTME. Reçete yarımdı: kıyıya değen gövdede D1 ölçüm değil GÜRÜLTÜ

`§22` "cetvelle çizilmiş" şikâyetinin ölçüsünü **köşe/1000 km** olarak verdi ve
doğru ölçütü *"iki gövdenin ortak kenarı"* diye yazdı. Ama uygulamada **D1**
kullanıldı: *gövde sınırı eksi kıyı*. Oturum 16 bunun bir sınıfta çöktüğünü ölçtü.

**Kırım, aynı kutu · aynı gün · aynı gövde, yalnız kıyı tamponu değişerek:**

```
kıyı tamponu   0.005   0.010   0.020   0.050
köşe/1000 km   115,3    32,6    30,2    34,9      ← 3,5 KAT oynuyor
```

Sonuç ölçüm değil **parametre seçimi**. Sebep: Kırım gövdesinin sınırı neredeyse
tamamen kıyı; geriye kalan kırıntının köşe sayısı tamponun kaç köşe yuttuğuna
bağlı. Boğdan'da tutmasının sebebi orada iç sınırın 1.500-1.900 km ve gerçekten
karasal olması — yani D1 **yarımadada çöküyor, karasal gövdede çalışıyor.**

### Doğru ölçüt: D2 — iki gövdenin ORTAK kenarı

`O.boundary ∩ V.boundary`. Kıyı hiç kullanılmaz, tanımda kıyı tamponu **yoktur**.
20 kat parametre aralığında dayanıklılık:

| | D1 (eski) | D2 (doğru) |
|---|---|---|
| Kırım dar | **3,5×** oynuyor | 1,13× |
| Kırım geniş | — | 1,06× |
| Boğdan 1600 | — | 1,01× |
| Boğdan 1700 | — | 1,00× |

### Ve sonuç değişti — Kırım cetvelle çizilmiş DEĞİL

```
Kırım iç sınırı (D2)   95,6 – 107,6      ← sağlıklı bandın hafif altında
sağlıklı bant          115 – 118
Libya çölü              18,1              ← yanına bile yaklaşmıyor
Boğdan (D2)            93,7 – 132,7
```

Daha önce kayda geçen **32,5** ve **62,8** sayılarının ikisi de artefaktmış; ve
"Boğdan, Kırım'ın üç katı" cümlesi de yanlışmış. Kırım'ın ikili renk **oranı**
hâlâ düzeltilecek (%39 vs tarihen ~%15-20) ama **sınırın kabalığı diye bir sorun
yok.**

### Reçeteye eklenen: kalibrasyon da yazılır

Ölçüm bildirilirken şunlar da bildirilir, yoksa iki oturum aynı yer için farklı
sayı üretir ve ikisi de "ölçtüm" der:

- **kutu sınırları** (lat/lon)
- **ölçüm günü**
- **hangi gövde çifti** (O↔V, O↔yabancı, …)
- ⚠️ **ölçümün kıyıya dokunmadığı**

> Bir reçete ölçüyü söylüyor ama **kalibrasyonu söylemiyorsa**, iki bağımsız
> ölçüm birbirini doğrulamaz — yalnız birbiriyle çelişir ve hangisinin doğru
> olduğu anlaşılmaz. Bugün tam bu oldu: 32,5'e karşı 62,8, ve **ikisi de yanlıştı.**

---

## 30. Veri dosyaları `grep` ile SAYILMAZ — üçüncü kez aynı tuzak

Oturum 11 bir bloğa *"93 Harbi kronolojide hiç yok"* diye başladı ve **sekiz
mükerrer madde yazdı.** `denetle.py`'nin mükerrer kontrolü sekizini de yakaladı,
silindi, blok 14 maddeden 6'ya indi — yayına mükerrer gitmedi.

Sebep: tarama `grep 't:"187[5-9]-…" … b:"…"` kalıbıyla yapılmıştı ve bu kalıp
`t:` ile `b:`nin **aynı satırda** olmasını şart koşuyor. Oysa kronoloji
kayıtlarının çoğu çok satırlı. Ayastefanos, Berlin, Edirne Mütarekesi, Doğu
Rumeli 1885, Bosna ilhakı, Londra, Edirne'nin geri alınışı, İstanbul Antlaşması
— **hepsi zaten vardı.**

**Bu, aynı tuzağın üçüncü tezahürü:**

| | Vaka | Sonuç |
|---|---|---|
| `§19` | Kuveyt'i ad desenine göre hariç tutma | dışlama çalışmadı, ayrıca ölçülüp yakalandı |
| `§19` | "Annaba ve Bicâye anakronik değil" | dördü de anakronikti |
| **§30** | "93 Harbi kronolojide yok" | hepsi vardı, sekiz mükerrer yazıldı |

Üçünde de kök aynı: **tek satırlık kayıt varsayımı.** Bu depoda geçersiz.

> **Kural:** `data/*.js` dosyalarında bir kaydın VARLIĞI ya da YOKLUĞU `grep` ile
> belirlenmez. `node -e` ile eval edilip **nesne olarak** sayılır — ya da
> `girdi.py`/`arac` üzerinden yüklenir. `grep` yalnız *"nerede geçiyor"* sorusuna
> yarar, *"kaç tane var"* sorusuna değil.

⚠️ Ve yokluk iddiası varlık iddiasından **daha pahalıdır** (`§20`): bir şeyin var
olduğunu tek bulguyla kanıtlarsın, olmadığını ancak eksiksiz taramayla. Eksik
tarama "yok" der ve o "yok" mükerrer üretir.

---

## 22-DÜZELTME-2. D2 de kıyıdan kurtulmuyor — ve "Kırım temiz" hükmü YANLIŞTI

`§22-DÜZELTME` iki şey söylüyordu. **Biri doğru, biri yanlış.**

| | Durum |
|---|---|
| D1'in kıyı tamponuna bağımlılığı (3,5 kat oynuyor) | ✅ **doğru, kalıyor** |
| Reçeteye kalibrasyon yazılması (kutu · gün · gövde çifti) | ✅ **doğru, kalıyor** |
| *"D2 kıyıya dokunmaz, çözüm bu"* | ❌ **YANLIŞ** |
| *"Kırım cetvelle çizilmiş değil, 95,6-107,6"* | ❌ **YANLIŞ — doğrusu 32-45** |

### Sebep: yarımadada ortak sınırın kendisi kıyı boyunca uzanıyor

```
D2 ölçümü:  168,3 km · 18 kenar · 107,0
   kutu kenarına yapışık :  0,5 km /  4 kenar   (%0 uzunluk)
   KIYIYA 0,01° yakın    : 12,4 km / 19 kenar   (%7 uzunluk)
```

**Uzunluğun %7'si kenarların %106'sını taşıyor.** Ortak sınır kıyıya değdiği
yerlerde tampon, kıyının sık düğümlü köşelerini içeri alıp sayıyı şişiriyor.
Kıyıya yakın parçalar atılınca **35-50** çıkıyor — Oturum 13'ün 32,3'üyle aynı
mertebe.

### Ve asıl bulgu: sınır tek bir düz hat

```
127,9 km   3 kenar   → 23,5 kenar/1000 km   (Perekop hattı)
 19,0 km   3 kenar
 13,1 km   2 kenar
  4,4 km   3 kenar
```

**128 kilometrelik iç sınır üç segmentle çiziliyor.** Kullanıcının Kırım'daki
"cetvel" şikâyeti haklıydı; temize çıkarma yanlıştı. `§7d`'deki *"Boğdan,
Kırım'ın üç katı"* cümlesi de doğruymuş — geri alınması geri alındı.

### 🔴 İki kök sebep, ikisi de genellenebilir

**1. Dayanıklılık YANLIŞ EKSENDE ölçüldü.** D2 "1,06-1,13× kararlı" diye
savunuldu — ölçülen şey **eşleme toleransıydı**. Sonucu asıl oynatan **kıyı
muamelesiydi** ve o eksen hiç taranmadı, çünkü *"D2 kıyıya dokunmaz"* diye
varsayılmıştı.

> **Bir yöntemin bağışık olduğunu varsaydığın eksen, taramayı en çok
> atlayacağın eksendir.**

**2. Çelişen ölçüm, karşı tarafın sayısı üretilmeden reddedildi.** İki oturum
farklı sayı buldu; biri "benim yöntemim daha dayanıklı" deyip geçti.

> **Başka bir oturumun ölçümüyle çelişiyorsan, kendi sayını savunmadan önce
> ONUN sayısını üretebildiğini göster.** Üretebiliyorsan farkın nereden geldiği
> zaten görünür; üretemiyorsan savunacak bir şeyin yok.

Bu yapılabilseydi çelişki iki saat önce kapanırdı.

### Reçeteye eklenen üçüncü zorunluluk

Kutu · gün · gövde çifti **yetmiyor**; **kıyı muamelesi** de yazılmalı: hangi
tampon, kıyıya değen parçalar atıldı mı, atılmadıysa neden.

---

## 31. Slug canlı, madde var — ama iddiayı TAŞIMIYOR

`§20` iki tuzak tanımlamıştı: **ölü slug** (sayfa açılır, arama sayfasıdır) ve
**yönlendirme** (sayfa açılır, başka maddedir). Üçüncüsü çıktı ve ikisinden de
sinsi.

Kronolojideki *"1897-05-17 Dömeke Meydan Muharebesi"* maddesi
`kaynak:"yunanistan"` diyor. Slug **canlı**, madde **gerçek**, başlık **doğru**.
Ama TDV `yunanistan` **Dömeke'yi hiç anmıyor** ve savaşa hiçbir gün vermiyor —
tek cümlesi *"savaş çıktı (1897)"*.

> 🔴 `<title>` kontrolü *"madde var mı"* sorusunu cevaplıyor, **"bu maddede bu
> bilgi var mı"** sorusunu değil.

Yani slug doğrulaması bir maddenin **varlığını** kanıtlar, **içeriğini** değil.
Atıf yapılan cümle maddede geçmiyorsa o kaynak o iddiayı desteklemiyordur —
slug canlı olsa bile.

**Kural genişledi:** bir `kaynak:` atfı üç aşamada doğrulanır —
1. slug canlı mı (`<title>` ≠ "Arama - TDV…")
2. **aradığım madde mi** (`<title>` beklediğim başlık mı) — `§20`
3. **iddia maddede geçiyor mu** — 🆕 metni oku, atfedilen olguyu bul

Doğru kaynak arandığında bulundu: `tesalya` (ve `teselya`, iki yazım da madde
döndürüyor) savaşı **7 Nisan – 18 Mayıs 1897** diye veriyor ve Hâfız Abdülezel
Paşa'yı anıyor. Ama Dömeke'yi yalnız bir yol güzergâhı sayarken geçiyor,
**muharebe olarak değil.** Madde silinmedi, "kaynak doğrulanmalı" diye
işaretlendi.

---

## 32. Başkasının ölçümünü DOĞRULAMADAN aktarma

MOTOR'a şu iletildi: *"macaristan #4e7d46 ile rusya #4f7d4f arası ΔE ≈ 9,1;
ikinci en yakın 37,8 — açık farkla en yakın çift."* Ölçümü yapan başka bir
oturumdu; aktaran kontrol etmedi. **İki katman birden yanlıştı:**

| İddia | Gerçek |
|---|---|
| ΔE ≈ 9,1 | **1,5** — ölçüm HAM hex üzerindeydi, gözün gördüğü bindirilmiş değer çok daha kötü |
| "en yakın çift" | `macaristan`ın en yakın komşusu `rusya` değil **`bulgaristan`** (ΔE 4,2) |
| 1541-45'te ikisi de sahnede | O kutuda **`rusya` HİÇ YOK** — yalnız OSMANLI, macaristan, avusturya |

Yani hedef tamamen yanlış adresti ve düzeltme yapılsaydı **şikâyet kapanmazdı.**

Bu, `§16`'nın (*"53 kimlik ucuz kazanç"* diye aktarılan sayı gerçekte 5'ti) ikinci
tekrarı ve aynı kişide. Kalıp aynı: **bir oturum ölçer, koordinatör aktarır,
aktarırken ölçümün NEYİ ölçtüğü kaybolur.**

> **Kural:** bir ölçümü başka bir oturuma iletirken **neyin ölçüldüğünü** de ilet
> — ham mı bindirilmiş mi, hangi kutu, hangi gün, hangi çift. İletemiyorsan
> ölçümü aktarma, **ölçen oturumu doğrudan konuştur.**

### Ve bağlı bir ders: ölçüt şikâyete uymuyorsa sayı doğru olsa da işe yaramaz

MOTOR'un tespiti: **bitişiklik ölçütü bu şikâyet için yanlış ölçüt.** DSATUR
*sınırların* okunurluğunu optimize ediyor; kullanıcının şikâyeti ise sınırda
karışma değil, **aynı ekranda iki lekeyi ayırt edememe.** Birbirine hiç değmeyen
iki devlet aynı görüntüde pekâlâ yan yana durur.

Yani doğru ölçüt "sınırdaş mı" değil, **"aynı görüntüde aynı anda var mı"**.
`§26`'nın kardeşi: kural, ateşlemesi gereken vakaya göre kurulur — burada vaka
"ekranda ayırt edilemiyor", "sınırda karışıyor" değil.

## §33 — "Sığdır" kısıtı, "ayır" işini yapmaz

Devlet etiketlerinin puntosunu gövdeye göre değiştirirken ilk kurduğum ölçüt
şuydu: *etiket, gövdesinin ekran genişliğinin %85'ini aşmasın.* Mantıklı
görünüyordu ve tek başına doğruydu — hiçbir etiket taşmıyordu.

Ölçtüm: 1541 kesitinde eşiği geçen 86 gövdenin **40'ı tavana yapışmıştı**.
Safevî İran ile Kazan Hanlığı aynı puntoyu alıyordu. Yani kısıt sağlanıyor,
amaç sağlanmıyordu.

Sebep: yakınlaşınca gövde ekranda öyle genişler ki sığma kısıtı hiçbir şeyi
bağlamaz. Bağlamayan kısıt sıralama üretmez.

**Ders:** bir ölçütün "ihlal yok" demesi, istenen ayrımı ürettiği anlamına
gelmez. Sığdırma kısıtı *kötü çıktıyı eler*, iyi çıktıyı *sıralamaz*. Ayrım
isteniyorsa sürücü, ayrımın dayanacağı büyüklüğün kendisi olmalı (burada alan,
log ölçeğinde); sığma kısıtı yalnızca tavan olarak kalmalı.

Sınama biçimi de ders: "taşan var mı?" diye sormak yetmiyordu, **dağılıma**
bakmak gerekiyordu — tabanda kaç, tavanda kaç, ortada kaç. Tavanda %47 varsa
o ölçüt ölçmüyor, kırpıyordur. (bkz. §25 — hangi soruya cevap verdiğine bak)

## §34 — Ölçüm, BAŞKA bir cevap verebiliyorsa ölçümdür

MOTOR'un yeni "ana parça" değişmezini bağımsız sınamak istedim: yayınlanan
çıktının petek kümesiyle çalışma ağacındakini karşılaştırdım.

```
sadece commit'te: []
sadece ağaçta   : []
```

Buradan "koşu geometriyi değiştirmiş ama hücre sahipliğini değiştirmemiş, yani
düzeltme bu iki kasabayı geri getirmemiş" sonucunu çıkardım. **İkisi de
dayanaksızdı.** MOTOR o üç dosyayı saatler önce `git checkout` ile HEAD'e geri
almıştı — yani **aynı dosyayı kendisiyle** karşılaştırıyordum. Karşılaştırma
koştu, çıkış 0 verdi, iki boş liste bastı ve hiçbir şey ölçmedi.

Fark edebilirdim: `git status` çıktısı boştu. Bakmadım — çünkü ölçüm *çalıştı*
ve çalışan ölçümü sorgulamak akla gelmiyor.

**Ders:** bir ölçümün geçerli olması için, **başka bir cevap verebileceği bir
dünya** olmalı. "Bu ölçüm hangi durumda FARKLI bir sonuç verirdi?" sorusunun
somut bir cevabı yoksa, ölçüm değil törendir. İki tarafı aynı olan bir
karşılaştırma, hangi cevabı verirse versin bilgi taşımaz.

Uygulaması ucuz: yeni bir denetim ölçütü yazarken yanına **onu düşüren bir vaka**
yaz. Yazamıyorsan ölçüt bir şey ölçmüyordur.

§33'ün kardeşi — orada kısıt sağlanıyordu ama amaç sağlanmıyordu; burada ölçüm
başarılı dönüyordu ama ayırt etmiyordu. İkisi de **"başarılı döndü, doğrulanmadı"**
ailesinden. Aynı gün MOTOR üç, ben iki vaka gördüm; sınıf bu projede en pahalı
sınıf.

📌 Yan ders, tersinden: aynı gün `yerlesimler.js`'i kendi regex'imle okuyup 951
yerine 767 ad çıkarmıştım. Onu **yakaladım**, çünkü sayı `denetle.py` ile
ÇELİŞİYORDU. Yani kurtaran şey dikkat değil, **iki bağımsız sayının birbirini
tutmaması** oldu. Yukarıdaki vakada ikinci bir sayı yoktu ve kaçırdım. Kritik
bir ölçümü tek yoldan yapma. (bkz. §19)

## §35 — Sabiti paylaşmak yetmiyor, ÇIKTIYI paylaşmak gerekiyor

Vektör altlığı yazarken kıyı çizgisinin motorunkiyle çakışması gerekiyordu.
Doğru refleksi gösterdim: sadeleştirme toleransını kendi dosyama **yazmadım**,
`uret_petek.py`'den ayrıştırarak okudum. "Tek sayı iki yerde durmasın."

Ölçüldü — **yetmedi.** 16.249 kıyı köşesinde sapma:

```
medyan 0,26 km · %90 0,94 · %99 1,29 km
%54'ü 0,2 km'den fazla · %8,1'i 1 km'den fazla
```

`%99 dilimi 1,29 km`, `SADE_TOL = 0,012° = 1,34 km`. Yani sapma gürültü değil,
**sadeleştirme farkının kendisi.** Sebep: iki hat aynı SABİTTEN geçiyor ama
aynı ALGORİTMADAN geçmiyor.

```
altlık : simplify(SADE_TOL)
motor  : simplify(KARA_TOL) → coverage_simplify(SADE_TOL)
```

Douglas-Peucker böyle bileşilmez. Aynı toleransla iki kez sadeleştirmek, bir kez
sadeleştirmekle aynı sonucu vermez.

z5'te 0,4 piksel — görünmez. z8'de 3,3, z10'da 13 piksel — **bariz.** Ve `kara`
katmanının `minzoom`u yok, çünkü Kademe 3'te altlığın kendisi olacak.

**Ders:** iki yerde üretilen bir geometrinin çakışması, **paylaşılan bir sabitle
garanti edilemez.** Sabit paylaşımı sapmanın tavanını indirir, sıfırlamaz.
Çakışma isteniyorsa **geometrinin kendisi** paylaşılmalı — üretici onu dışa
aktarır, tüketici okur.

> "Tek sayı iki yerde durmasın"ın geometri hâli:
> **tek geometri iki yerde üretilmesin.**

📌 Ve bu, aynı gün çıkan üç "yazılmış ama çalışmıyor" vakasıyla (`isg:` üreticisi
yok · `serbest-hale` katmanı hata fırlatıyor · lisans dosyasında `404: Not Found`)
aynı aileden: **doğru görünen, ölçülmeden doğrulanmamış bir varsayım.** Farkı
şu ki bu vakada varsayım *benimdi* ve refleks de doğruydu — yalnız yeterli
değildi. Doğru refleks, ölçümün yerini tutmuyor. (bkz. §34)

⚠️ Geçişin nasıl yapıldığı da ders: tüketici tarafı **geriye uyumlu** yazıldı —
dışa aktarılan dosya varsa o kullanılır, yoksa eski yerel üretim sürer. Böylece
iki oturumun aynı anda iş yapması gerekmedi, kilit gerekmedi, ve dosya belirdiği
an davranış kendiliğinden değişti. İki taraflı bir değişikliği tek taraflı
uygulanabilir hâle getirmek, koordinasyon maliyetini sıfırlıyor.
