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

## §36 — `git add` ile `git commit` arasındaki pencere ORTAKTIR

Kural yazılıydı: *"`git add .` yasak, dosyaları tek tek ekle."* ARAYÜZ oturumu
aynen uyguladı — beş dosyayı tek tek ekledi, `git diff --cached --stat` ile
doğruladı, yalnız kendi dosyaları olduğunu gördü. Sonra `git commit` dedi ve
**"no changes added to commit"** cevabını aldı.

Aradaki saniyelerde ben başka bir iş için commit atmıştım. **Onun hazırladığı
beş dosya benim commit'ime girdi** — `OGRENILENLER §35` başlıklı commit'in
içinde 139 satır `app.js`, 19 satır `css`, 234 satır ilerleme dosyası.

İçerik kaybolmadı, yayına doğru gitti. Kaybolan **izlenebilirlik**: arayüz işi
alâkasız bir başlığın altında, gerekçesi kütükte yok.

**Sebep, ve kuralın eksik yarısı:** `git add` **depoya ait tek bir indekse**
yazar. Kural *eklemeyi* düzenliyor, **hazırlama ile commit arasındaki
pencereyi** düzenlemiyor. O pencerede commit atan kim olursa olsun, başkasının
hazırladığını da alır.
⚠️ **Tek yazarlı dosya kuralı bunu KORUMAZ** — dosyalar gerçekten yalnız onundu.
Sahiplik çakışması yoktu; çakışan şey *indeksti*.

**Ders:**
```bash
git commit -o <dosya...> -m "..."     # --only: YALNIZ adı verilen yolları alır
```
`-o` penceyi tamamen kapatır: indekste başka ne hazırlanmış olursa olsun
commit'e girmez. Hazırlama ile commit'i bitişik tutmak da işe yarar ama
disiplin ister; `-o` yapısal olarak çözer.

📌 Ve bu, §35'in kardeşi: **doğru refleks (tek tek `add`) ölçümün yerini
tutmadı.** Kural uygulandı, sonuç yine yanlış oldu, çünkü kural yanlış yeri
koruyordu. Bir kuralın "uygulandı" olması, "işe yaradı" demek değil.

## §37 — "Yaptın mı?" bir mesaj sorusu değil, ÖLÇÜM sorusudur

Bugün üç kez, bir işin commit'lenip commit'lenmediğini bilmediğimiz için iş
durdu ya da yanlış hüküm verildi:
- MOTOR *"sönen kenar commit'i ARAYÜZ'de bekliyor"* diye çöl tavanı koşusunu
  bekletti — commit **iki saat önce girmişti**.
- `uret_altlik.py`'deki bir yorumun yazarını üç oturum tartıştı.
- Ben bir oturuma *"blokajın kalktı"* dedim, blokaj hiç yoktu.

Üçü de **mesajla sorulmuş**, üçü de **tek komutla ölçülebilirdi**:

```bash
git merge-base --is-ancestor <sha> HEAD     # commit'li mi
git rev-parse HEAD  ==  git rev-parse origin/main   # yayında mı
git show HEAD:<dosya> | grep <belirti>      # gerçekten içinde mi
```

⚠️ Üçü de **okuma**. Dosya sahipliği kuralını hiç ihlal etmiyor — başkasının
dosyası hakkında *"durum ne"* diye sormak yerine **bakılabilir.**

> `ORGANIZASYON Karar 2`'nin ("durum mesajla değil dosyayla akar") **git hâli**:
> **"Yaptın mı?" diye sorma — `git`'e sor.**
> Mesaj kuyruğa girer, tur bekler, yanlış hatırlanır. `git` üçünü de yapmaz.

📌 Ve maliyet asimetrik: soru **saniyeler** sürüyor, cevabı beklemek **saatler**.
Bugün bir üretim koşusu var olmayan bir blokaj yüzünden bekletildi.

📌 Bunun ikinci yüzü de var ve daha sinsi: mesajla sorulan soru **cevabı
gelene kadar** ilerlemeyi durdurur, ama ölçülen soru **hemen** cevap verir ve
yanlış cevap veremez. Bugün "commit'li mi" sorusunun mesajla sorulan hâli iki
kez **yanlış** cevaplandı — biri "bekliyor" (girmişti), biri "senin elin"
(başkasınınmış).

---

## §38 — Ölçüm başka cevap vermeli, ama o cevap KARARI DEĞİŞTİREBİLMELİ

`§34` şunu istiyordu: *"cevabı belli olan ölçüm, ölçüm değil törendir."* Bugün
o ölçütü **geçen** ama işe yaramayan bir ölçüm çıktı ve eksik olan katmanı
gösterdi.

**Vaka.** Şehir görünürlüğü için sürücü aranıyordu. Üç aday (`g:` · `tur:` ·
kronolojide anılma) ölçülüp elendi; dördüncü aday **petek alanı** kaldı ve
sıradaki ölçüm *"alan dağılımı sürekli mi"* diye planlandı.

O ölçüm koşulsaydı **geçecekti**:
```
951 peteğin 927'si benzersiz · %10: 437 km² · %50: 8.722 · %90: 77.843
```
Dağılım pürüzsüz. Karar *"sürekli, tasarım kapanıyor"* olacaktı.

**Oysa sıralamanın kendisi tersti:**
```
alana göre ilk 3   Timbuktu 2.820.803 km² · Ndjamena 1.933.138 · Agadez 1.194.510
İstanbul 750/951  ·  Bursa 879/951  ·  Kahire 605/951
```
İlk 30'da tek bir Osmanlı merkezi yok. Uzaklaşınca ekranda Sahra kalır,
İstanbul kaybolurdu.

**Kusur ölçümde değil, sorudaydı.** Süreklilik sınavı gerçekten iki cevap
verebilirdi — ama **hangi cevabı verirse versin** sıralamanın ters olduğunu
gösteremezdi. Alan gerçek sayıdır; sürekli çıkacağı baştan belliydi.

> `§34`: ölçüm başka bir cevap verebilmeli.
> **`§38`: o başka cevap, alınacak kararı değiştirebilmeli.**
> İkisi ayrı sınavdır. Birincisi ölçümün *biçimine*, ikincisi *hedefine* bakar.

📌 Pratik ayıraç — ölçümü koşmadan önce sor: **"öteki cevap çıksa ne yapardım?"**
Cevap *"yine aynı şeyi"* ise ölçüm kararın dışındadır. Burada süreklilik
düşük çıksa da yüksek çıksa da sürücü alan olacaktı; asıl sınav *"ilk 30'da
kim var"* idi ve **tek satırdı.**

📌 İkinci ders, aynı vakadan: **geometri önem üretemez.** Alan yakınlık değil
**ıssızlık** ölçer; tersi de kurtarmaz (Bursa 338 km², İstanbul 1.660 —
ters alan Bursa'yı üste koyar). Her saf geometrik sürücü *yerleşim yoğunluğu*
ölçer. Önem editoryaldir; veri yoksa ölçümle **üretilemez**, yalnız
**yokluğu ispatlanır.**

📌 Üçüncüsü, `§35`'in tekrarı: petek alanı **komşu eklendikçe değişir.** Bugün
951 → 965 yerleşim eklendi. Alan sıralamayı sürseydi bir yerleşim eklemek
komşularını görünürlükte aşağı iterdi — **veri işi sessizce arayüzü oynatırdı.**

---

## §39 — Büyük sayı, çoğu zaman yöntemin yanlış olduğunun işaretidir

Sonuç *"beklenenden çok büyük"* çıktığında ilk şüphe veriye değil **yönteme**
gitmeli. Bugün beş vakası oldu ve **beşinde de** hatalı olan yöntemdi:

```
Pen/cape eşleşmesi  %36,7      göl filtresi  %21,3      "Plain" eşleşmesi  %18,7
Desert eşleşmesi    %14        medial eksen sapması  697 km (gerçek: 2 km)
```

📌 Sebep: yanlış yöntem genellikle **fazla** eşleştirir, **fazla** kapsar,
**fazla** kesişir. Doğru yöntem seçicidir. Bu yüzden şaşırtıcı derecede yüksek
bir oran, şaşırtıcı derecede düşük bir orandan **daha** şüphelidir.

⚠️ Ve tersi tuzak: büyük sayı bazen doğrudur (`isg:` 55 kayıt gerçekten 55'ti).
Ölçüt *"sayı büyük"* değil, **"sayı, yöntemin seçici olmadığını gösteriyor"**.

---

## §40 — Bir mekanizmanın verisinin ÜRETİLİYOR olması, ÇİZİLİYOR olması değildir

(COĞRAFYA'nın tespiti.) `serbest-hale` sönen kenarı **üç üretim koşusu boyunca**
hesaplandı, dosyaya yazıldı, hiç çizilmedi. Üç ayrı sessiz kusur üst üsteydi:
katman tanımı `addLayer`'da patlıyordu, kaynak hiç beslenmiyordu, `SERBEST_U`
yazılmıyordu. **Hiçbiri hata vermedi.**

Aynı gün üç vakası daha: görünmeyen `isg:` örtüsü (tüketicisi vardı,
**üreticisi yoktu**), `404: Not Found` içerikli lisans dosyası, boyasız 237 madde.

> **"Yazılmış görünüyor, çalışmıyor."** Bu projenin en sık kusur sınıfı —
> ve **hiçbir denetim** yakalamadı, çünkü denetimler *verinin doğruluğuna*
> bakıyor, *tüketildiğine* değil.

📌 Karşılığı: her yeni `window.X` için **tüketicisi de** ölçülmeli —
`X.length > 0` **ve** çizen katmanın haritada var olması. Üretim izi yetmez.

📌 Ve COĞRAFYA'nın bir üst basamağı: **"denetim, ölçtüğü şeyi ortadan
kaldırabiliyorsa ölçmekten iyidir."** Sönen kenarı her koşuda saymak yerine
üretimi çizime bağlayan tek bir bağ, kusuru **var olamaz** hâle getirir.

---

## §41 — Ölçüt bayatlamaz, ölçütün DAYANDIĞI ÖLÇÜM bayatlar

(MOTOR'un teşhisi.) Bir kararı bir ölçüme dayandırırsın; sonra başka biri —
ya da sen — o ölçümün girdisini **haklı bir gerekçeyle** değiştirir. Karar
metni aynı kalır, dayanağı çürür, ve **kimse geri dönüp bakmaz.**

**Vaka.** Çöl tavanı muafiyeti "alan bazlı mı, yerleşim bazlı mı" diye
tartışılıyordu. Koordinatör önce (A) alan bazlı dedi; MOTOR'un ölçümü
*"muaf 46 yerleşim, azami erişim 346 km, büyük ihlalcilerin hepsi tâbi
kümede"* deyince (B)'ye çevirdi. **O sayılar doğruydu.**

Sonra MOTOR, ayrı ve doğru bir gerekçeyle su kümesini genişletti:
```
su kümesi = motorun YASLAMA hattı  (41 parça)  → muaf 46
su kümesi = nehir dosyasının TAMAMI (329 parça) → muaf 57
gerekçe: "muafiyet 'burada su var mı' diye sorar, 'motor buraya
          yaslanıyor mu' diye değil"
```
Bu geçişle Nijer ve Şari su sayıldı; **Timbuktu ve Ndjamena muaf kümeye
girdi.** Yani kararı değiştiren tablo artık yoktu:
```
(B) yerleşim bazlı → muaf peteklerin azami erişimi 1.475 km (TIMBUKTU)
    listenin en büyük ihlalcisi (812.532 km²) muafiyete kaçtı
```
**İki değişiklik de tek başına doğruydu; hatalı olan aralarındaki sessizlikti.**

> **Kural: bir girdi kümesini değiştiren oturum, o kümeye dayanmış AÇIK
> KARARLARI listelemek ve haber vermek zorundadır.**
> Değişikliği duyurmak yetmez — **neyin dayanağını çürüttüğünü** duyurmak gerekir.

📌 İkinci ders, aynı vakadan: **zayıf olduğunu bildiğin yeri ölç.** MOTOR (B)'yi
yazarken güvencenin *yapısal değil veriye bağlı* olduğunu fark edip
"her koşuda raporla" satırını ekledi. **İlk koşuda ateşledi.** O satır
olmasaydı (B) bütün duman testlerinden geçerdi — 38 petek kısaldı, bindirme 0,
boşalan petek 0, hepsi ✓ — ve Timbuktu'nun 1.475 km'si yayına giderdi.
Güçlü sandığın yeri ölçmek gönül rahatlatır; **zayıf sandığın yeri ölçmek
kusur bulur.**

📌 Üçüncüsü, koordinatörün kendi hatası ve `§38`'in tekrarı: kabul ölçütü olarak
*"Nil yerleşimlerinde %20'yi aşan alan düşüşü"* konmuştu. **Yanlış büyüklük** —
erişim 346 → 300 km inince alan zaten `(300/346)² ≈ %75`'e düşer; ölçüt hem
sağlıklı kırpmada hem gerçek kesilmede aynı alarmı verirdi, yani **ayırt
etmiyordu.** Doğrusu alan değil **süreklilik**: Kahire–Hartum arasında vadide
sahipsiz kesinti açılıyor mu. Ölçüt koşudan ÖNCE değiştirildi — sonra
değiştirilseydi kale oynatılmış olurdu.

---

## §42 — Sağlama TEK UÇLU olmamalı: "sıfır olmalı" ile "büyük olmalı" birlikte

`§34` ölçümün başka cevap verebilmesini, `§38` o cevabın kararı
değiştirebilmesini istiyordu. Üçüncüsü **sağlamanın kendisi hakkında** ve
bugün COĞRAFYA'nın hatası gösterdi.

**Vaka.** Engel ölçüsü için iki sağlama yazılmıştı:
```
Edirne ↔ Dimetoka (aynı vadi, 37 km)  → engel SIFIR olmalı
Rodoplar'ın iki yakası                 → engel BÜYÜK olmalı (~1.000 m)
```
COĞRAFYA yükseklik ızgarasını seyreltirken **min havuzlama** seçti; gerekçesi
*"min geçidi korur, muhafazakâr, uydurma engel üretmez"* — makul, tutarlı ve
**yanlış.** Min geçidi korumuyor, **uyduruyor**: her bloğa içindeki dere yatağı
dibi düşüyor, bloklar zincirlenince dağın içinden **hayalî alçak koridor**
doğuyor. Sonuç:
```
min havuzlama → tüm Anadolu'da azamî engel 253 m · çiftlerin %97'si < 50 m
max havuzlama → Pindos 668 m · Toroslar 604 · Amanos 588   (gerçek geçitler)
```

🔴 **Ve kritik nokta:** dejenere ölçüm **birinci sağlamayı KUSURSUZ geçiyordu.**
Her şeyi sıfıra yakın veren bir ölçü, *"burada sıfır çıkmalı"* sınavını her
zaman geçer. Onu ancak **ters uçtan** bir sağlama yakalar.

> **Tek uçlu sağlama, dejenere ölçümü doğrular.**
> En az bir "sıfır olmalı" ve bir "büyük olmalı" çifti gerekir.

📌 İkinci ders, aynı vakadan: **gerekçenin ikna edici olması doğru olduğunu
göstermez.** "Min muhafazakârdır" cümlesi kulağa sağlam geliyordu ve yazılıydı;
onu çürüten şey daha iyi bir muhakeme değil, **ters uçtaki sayı** oldu.

---

## §43 — Komşuluğu MESAFEYLE ölçmek, komşuluğu ölçmez

(MOTOR'un ölçümü.) `kur:` boşluğu için *"en yakın 6 komşu oy birliğinde mi"*
ölçütü konmuştu. Gerçek petek komşuluğuyla (ortak kenar) koşulunca **cevap
tersine döndü:**
```
                  düz mesafe (en yakın 6)      ortak kenar
Rumeli Hisarı     6/6 bizans  → DEVRET         1 komşu     → BIRAK
Kuveyt            5/6         → bırak          4 iran      → DEVRET 🔴
Doha              5/6         → bırak          3 iran      → DEVRET 🔴
```
**Ölçüt, korumak için tasarlandığı vakaları devrediyor, düzeltmek için
tasarlandığı vakayı bırakıyordu.**

**Sebep:** düz mesafe **her zaman 6 komşu bulur.** Rumeli Hisarı'nın peteği
minicik (İstanbul'a 11 km) ve gerçekte tek komşusu var; mesafe ona altı komşu
**uydurdu** ve oy birliğini yapay olarak kolaylaştırdı. Körfezde tersi: petekler
kocaman, ortak kenar bol, oy birliği **gerçek** ama sonuç yanlış — orası
kasıtlı boşluk.

> **Sayıma dayanan ölçüt, sayılan şeyin tanımına dayanıksızdır.**
> Aynı veri, iki komşuluk tanımıyla zıt cevap veriyorsa ölçüt komşuluğu değil
> **tanımı** ölçüyordur.

📌 MOTOR'un cümlesi: *"bir yöntemin bağışık olduğunu varsaydığın eksen,
taramayı en çok atlayacağın eksendir."* İki oturum da öbür komşuluk tanımını
denemeden sonuca bakmıştı.

📌 Çözüm yönü: sayım yerine **topoloji** — "petek, kuruluşundan önce bir
devletin gövdesinin içinde mi kalıyordu?" Kaç komşusu olduğuna bakmaz, bu
yüzden tessellationın nasıl dilimlediğinden bağımsızdır. ⚠️ O da bir
işlemselleştirmedir ve sınanmadan kabul edilmedi: 12 boşluk **önce elle**
etiketlenip sonra ölçütle karşılaştırılacak. Ters düşen tek vaka varsa ölçüt
elenir ve `kasitli_bosluk:` alanı **elle** yazılır — 12 kayıt için elle
işaretlemek meşrudur; kötü olan, otomatik sanıp yanlış işaretlemektir.

---

## §44 — Yanlış ayrıştırma, MAKUL sayı üretir; makullüğü değil TUTARLILIĞI sorgula

Bugün **dört** vakası oldu ve dördü de aynı kalıptaydı: ölçüm koştu, sayı
üretti, **ölçülen şey sanılan şey değildi** — ve çıkan sayı hiç şüphe
uyandırmayacak kadar makuldü.

```
A5       letonya'nın `f:` alanını KOMŞU kayıttan aldı      → sayı verdi
DENETÇİ  `kisiler:` dizisini karakter karakter saydı       → 863 yerine 86
YAMACI   ilk sayım                                          → ikinci ölçümle tuttu
DENETÇİ  regex'te `\b` ham dize değildi, BACKSPACE oldu    → 37 yerine 4
KOORDİN. `grep -c '401'` dosya BOYUTLARINDAKİ "401"i saydı → 2 kimlik hatası
         (gerçekte 0; "1401599" içinde geçiyordu)
```

🔴 **Hiçbirini sayının büyüklüğü ele vermedi.** *"37 tüketilmeyen global"*
inandırıcı bir rakamdır. *"2 kimlik hatası"* da öyle. Yakalayan şey her
seferinde **imkânsızlık** oldu:

> DENETÇİ'nin cümlesi: *"`app.js`'in `PETEKLER`'i okumaması **mümkün değil**.
> Makullüğü değil tutarlılığı sorguladım."*

⇒ **Ayıraç:** çıkan sayı makul mü diye sorma — **listede olması imkânsız bir
şey var mı** diye sor. Sayı doğruysa hiçbir imkânsız üye içermez; ayrıştırma
bozuksa neredeyse her zaman içerir.

📌 İkinci ders: bu kusur sınıfı **`§34`'ün tam kendisidir** — ölçüm çalıştı,
başka bir cevap da verebilirdi, ama **başka bir şeyi** ölçüyordu. `§34`
ölçümün *cevabına*, `§44` ölçümün *nesnesine* bakıyor.

📌 Üçüncüsü ve pratik olanı: dördünde de yakalayan şey **ikinci bir bakış**
oldu — ya başka bir oturum, ya "bu olamaz" refleksi. **Tek bakışla üretilen
sayı, ölçüm değil taslaktır.**

---

## §45 — Bayrak, çoğu zaman EKSİK VERİNİN vekilidir

(ARABİSTAN'ın teşhisi; BALKAN'dan bağımsız doğrulama.)

`kur:` öncesi boşluğun "kasıtlı mı, yazılmamış mı" olduğunu ayırmak için
`kasitli_bosluk:` diye bir bayrak tasarlanıyordu. ARABİSTAN sorunun yanlış
kurulduğunu gösterdi:

> Soru *"orada devlet var mıydı"* değil:
> **"o toprağı hangi MERKEZ idare ediyordu ve o merkez veride VAR MI?"**
> · merkez biliniyor + veride **var** → sorun yok
> · merkez biliniyor + veride **YOK** → boşluk **kusur**; çözüm bayrak değil
>   **eksik noktayı eklemek**
> · merkez **bilinmiyor** → boşluk kasıtlı

**Aynı gün üç bağımsız doğrulaması geldi, üçü de kararsız bantta (%40-63):**
```
Kuveyt  %40,5 → Benî Hâlid'in "Kût" yazlık idare merkezi vardı  (ARABİSTAN)
Doha    %49,5 → Zübâre 1776 ve Huveyle, Doha'dan ÖNCE           (ARABİSTAN)
Cetinje %48,9 → Podgorica eksik; bölgede 2 nokta, arada 61 km   (BALKAN)
```

📌 Ve ölçütün yanlış kurulduğunun kanıtı **kendi verimizdeydi**: `benihalid`,
`suud`, `sammar`, `nogay`, `kazak-hanligi` zaten boyanıyor. *"Aşiret devlet
sayılmaz"* deseydik Necid'in tamamını silmek gerekirdi. **Yeni bir ölçüt
aramadan önce, verinin o soruyu çoktan cevaplayıp cevaplamadığına bak.**

⚠️ Bunun bir sonucu daha var ve ölçüm hâline getirildi: **kararsız bant,
ölçütün başarısızlığı değil, EKSİK YERLEŞİM DEDEKTÖRÜ olabilir.** Doğruysa
çıktı *"şu kayıtları elle işaretle"* değil *"şu bölgelerde nokta eksik"*
olur — biri haritayı düzeltir, öbürü kusuru saklar.

📌 Genel hâli: **bir alanı elle işaretlemek zorunda kalıyorsan, önce o
zorunluluğun eksik veriden doğup doğmadığına bak.** Bayrak ucuzdur ve tam bu
yüzden yanlış yerde kullanılır.

---

## §46 — Kaynak doğrulaması ÜÇ aşamalıdır; üçüncüsü en sinsisidir

(BALKAN'ın sınıflandırması, beş vakadan.) Bir maddenin `kaynak:` künyesi
doğrulanırken *"künye yaşıyor mu"* diye bakmak yetmez. Bugün beş vaka çıktı ve
**üç ayrı bozulma biçimi** var:

| biçim | vaka | sınama |
|---|---|---|
| **1** iddia maddede **hiç yok** | Dömeke · `zeta` 1451 (*"merkez Cetinje'ye taşındı"* TDV `karadag`'da geçmiyor) | anahtar kelime araması |
| **2** **künyesiz** tarih künyeli gibi duruyor | İsmail `1484-08-03`; `ismail`·`izmail`·`kalas` künyelerinin **hepsi ölü**, tarih eski bir maddeden kopyalanmış | künye canlı mı |
| **3** 🔴 künye doğru, madde doğru, **rakam kaymış** | İnebahtı: TDV *"26 Ağustos'ta teslim ettiler"*, madde **28** yazıyor | **tarihin kendisi** |

🔴 **Üçüncü biçim ilk iki sınamayı da geçer:** künye canlı, madde konuyla ilgili,
metin anahtar kelimeyi içeriyor. Yalnız **sayı** yanlış — ve harita sayıya göre
çiziliyor. Bugün iki vakada fark belirleyiciydi: Mekke **31 gün**, İnebahtı
**2 gün**; ikisi de yanlış güne renk veriyordu.

⚠️ Ve `<title>` kontrolü birinci aşamayı bile geçemiyor: **kütük madde** sınıfı
(`abudabi`) başlık sınamasını geçiyor, gövdesi yalnız *"bk. EBÛZABÎ"*.

📌 Genel hâli, `§44`'ün kardeşi: **doğrulama, doğruladığını sandığın şeyi
doğrulamayabilir.** `§44`'te ölçüm başka bir şeyi ölçüyordu; burada sınama
başka bir şeyi sınıyor. İkisinde de çıktı "geçti" diyor.

---

## §47 — Veri maddeyi takip ederse, yanlış kendi kaynağını üretir

(BALKAN'ın İsmail bulgusu.) İsmail'in `1484-08-03` tarihi kaynaksızdı: TDV'nin
üç maddesi 1484 seferini gün gün anlatıyor ve **yalnız iki kale** sayıyor.
Tarih, silmek istediğimiz **eski birleşik maddeden kopyalanmıştı.**

> *"Emekliye ayıracağımız madde, tutunduğu kırılmayı kendisi doğurmuş."*

Yani madde veriyi değil, **veri maddeyi takip etmiş** — ve sonuç kendi kendini
tutan bir döngü: madde silinemiyordu çünkü veri ona dayanıyordu, veri
düzeltilemiyordu çünkü maddeden geliyordu.

📌 Ayıraç: bir tarihin kaynağı sorulduğunda cevap **başka bir kendi kaydımız**
ise, o tarih **kaynaksızdır.** Depo içi tutarlılık, dış doğrulama değildir.

📌 Ve düzeltmenin doğruluğunun kanıtı beklenmedik yerden geldi (YAMACI):
İsmail'in tarihi düzeltilince `m:`/egemen sayacı **389 → 390 yükseldi**, çünkü
yanlış-erken tarih bir anakronizmi **tesadüfen gizliyordu.** *"Doğru tarih
anakronizmi gizlemiyor, açığa çıkarıyor."*
⚠️ Bunun ikinci sonucu: bir kusur sayacının **düzeltmeyle yükselmesi**, o
sayacın kusur saymadığının kanıtıdır — Değişmez 3'ün sayaca düşürülme kararı
buradan da doğrulandı.

---

## §48 — "Açıklayamıyorum" anında ilk refleks HİPOTEZ değil, GÖRÜNÜRLÜK olmalı

(ARAYÜZ'ün tespiti, bir günün bedeliyle.) Etiket çakışması kusurunda **yedi
hipotez** üretildi ve **yedisi de çürüdü**:

```
1 muafiyet (anilan)     2 zamanlama (rAF)      3 "taç" dalı
4 sıfır kutu deliği     5 kutu darlığı         6 Esri açılışı engelliyor
7 dairesel kilit (stil kurulumda veriliyor, kurulum stili bekliyor)
```
Her biri makuldü, her biri bir ölçüm turu + bir mesaj turu + bir yanlış yöne
bakma getirdi. Ve **hiçbiri doğru değildi.**

Doğruyu bulan şey, ARAYÜZ'ün *"yazmak yerine ölçtürüyorum"* deyip koyduğu
geçici teşhis kaydıydı:
```js
SON_ELEME = { aday, sifirKutu[], elenen[], tutulan[] }
```
Tek koşuda cevap geldi: `aday 24 · DOM 25 · tutulan 23 · elenen 1` ⇒ iki işaret
**ne tutulmuş ne elenmiş** — yani elemeye hiç girmemiş.

> **Kural:** bir kusuru açıklayamıyorsan, sıradaki adım yeni bir açıklama
> denemek değil, **içeriyi görünür kılmaktır.**

📌 Ve maliyet karşılaştırması net: teşhis kaydını yazmak **on dakika**, yedi
hipotez **bir günün büyük kısmı.** Hipotez üretmek bedava görünür çünkü
düşünmek bedava sanılır; oysa her hipotez sınanmak zorundadır ve sınama pahalıdır.

📌 Teşhis kaydı **yayına bırakılmaz** — ölçüm bitince kaldırıldı (`e85b9cf`).
Ucuz da değildi: her güncellemede 108'e kadar ad biriktiriyor ve zoom sırasında
kare başına koşuyordu.

⚠️ Ve ölçüm aracı **iyi kurulmuştu**: üç okumanın **üçü de farklı bir sebep**
gösteriyordu (`sifirKutu` dolu → delik · `tutulan`da var → kutu ayrışması ·
hiçbirinde yok → elemeye girmiyor). `§34`'ü geçen bir araç, hangi sonuç
çıkarsa çıksın kararı değiştiriyor.

---

## §49 — Zamana bağlı bir kümede TEK KESİT hüküm veremez

Bugün **üç ayrı oturum**, birbirinden bağımsız olarak aynı hatayı yaptı:

```
ARAYÜZ   "Söğüt anilan değil"        → yalnız 1302-07-27 ölçülmüştü
MOTOR    "32 puanlık gerçek boşluk"  → yalnız 1281 epokundan
KOORDİN. "r298 temiz yükleniyordu"   → ölçüm aslında r295'teydi
```

Üçü de **doğru ölçümdü** ve üçü de **kapsamından geniş bir hüküm** taşıdı.
Ve üçü de başka birini yanlış yöne baktırdı: ARAYÜZ'ün cümlesi koordinatörü
"taç" hipotezine gönderdi, koordinatörünki ARAYÜZ'ü r299'da hata aramaya.

> **Kural:** `anilan` · epok · sürüm damgası gibi **zamana/duruma bağlı** bir
> kümede yapılan ölçüm, ölçüldüğü an ile birlikte raporlanır.
> *"Söğüt anılan değil"* değil → *"1302-07-27'de Söğüt anılan değil."*

📌 MOTOR'un vakası bunun bedelini de gösterdi: 35 epok taraması olmasaydı
**16 epokluk bir devir** (Yeni Ürgenç) sessizce yayına girecekti — çünkü tek
epokta (1281) %49,1 görünüyor, 1383 sonrası %90,8'e çıkıyor.

📌 Ve aynı taramadan beklenmedik bir kazanç çıktı: **%66 ile %90 arasındaki
her eşik aynı sonucu veriyor.** Yani uydurulmuş eşik değeri sonucu
belirlemiyor — bu, tek bir sayıya yaslanmaktan çok daha sağlam ve ancak
**tam tarama** ile görülebilirdi.

---

## §50 — Ölçümün GEÇERLİLİK KOŞULU da ölçülmelidir

Bugün bir gün boyunca *"yayındaki sayfa boş"*, *"r298 çöktü"*, *"r299
açılmıyor"* diye üç hüküm verildi. **Üçü de yanlıştı** ve tek bir kök sebebi
vardı:

```
gizli sekme  →  requestAnimationFrame HİÇ ateşlemiyor
             →  MapLibre stil yüklemesini ona bağlamış
             →  stylesheet false · kiremit isteği 0 · işaret 0
```
⇒ **Gizli bir sekmedeki sağlam sayfa, bozuk bir sayfayla BİREBİR AYNI
görünüyor.** Ölçüm doğruydu, ölçüm *ortamı* hükmün dışında kalmıştı.

Bedeli: bir oturum çalışan bir değişikliği geri aldı, bir gün yanlış yerde
kusur arandı, ve koordinatör kullanıcıya *"yayın bozuk"* dedi.

> **Kural:** her ölçüm, **kendisini geçersiz kılabilecek koşulla birlikte**
> raporlanır. Tarayıcı ölçümlerinde bu `document.visibilityState`'tir;
> `hidden` iken alınan *"yüklenmiyor"* okuması **ölçüm değildir.**

📌 Ve ayıraç genel: *"bu ölçüm hangi durumda yanlış cevap verir?"* sorusu
**ölçümden önce** sorulmalı. `§34` ölçümün başka cevap verebilmesini,
`§38` o cevabın kararı değiştirmesini, `§42` sağlamanın iki uçlu olmasını
istiyordu — `§50` bir basamak daha aşağıda: **ölçüm aleti çalışıyor mu.**

📌 Kontrol koşusunun değeri de buradan: yamayı uygulayıp *"başarısız"* görmek
tek başına hiçbir şey söylemiyordu. **Yamasız hâli aynı biçimde sınayınca**
ikisinin de aynı sonucu verdiği görüldü ve suç ortamda arandı. **Bir sınavın
sonucu, kontrolsüz okunamaz.**

⚠️ İkinci ders, aynı vakadan: ARAYÜZ'ün yaması bu kök sebep **bilinmeden**
yazılmıştı ama ona karşı da doğru davranıyor — `setTimeout` gizli sekmede
ateşliyor, `isStyleLoaded()` şartı da orada boş yere çalışmasını engelliyor.
**Sınanmamış varsayımdan kaçınmak, henüz bilmediğin tuzaktan da korur.**

---

## §51 — Üç doğru vakadan yanlış kural çıkar

Bugün üç ayrı oturum, üç ayrı bölgede, aynı teşhisi koydu:
```
Cetinje %48,9  → Podgorica eksik    (BALKAN)
Doha    %49,5  → Zübâre eksik       (ARABİSTAN)
Kuveyt  %40,5  → Kût idare merkezi  (ARABİSTAN)
```
Üçü de MOTOR'un **kararsız ölçüm bandındaydı** (%40-90). Koordinatör bundan
bir kural çıkardı ve sınanabilir hâle getirdi:
> *"Kararsız bant, EKSİK YERLEŞİM DEDEKTÖRÜ olabilir."*

**Ölçüldü, çürüdü:**
```
kararsız bant medyan en-yakın-komşu   73 km
genel dağılım (901 petek)             61 km
oran 1,2×   ·   önceden yazılan eşik 1,3×   ⇒ İDDİA DÜŞER
```
Ve aynı ölçüm MOTOR'un yan tahminini de kesti: İlbasan'da *"petek seyrek"*
sanılıyordu, **sık** çıktı (47 km ↔ genel 61 · alan 3.019 ↔ 9.570 km²).

> **Üç vakanın hepsi doğruydu; onlardan çıkarılan kural yanlıştı.**
> Üçü de **araştırma yoluyla** bulunmuştu — bant onları haber vermedi, yalnız
> bulunduktan sonra hepsinin orada olduğu görüldü.

📌 Ayıraç: *"bu örüntüyü, onu aramadan önce fark eder miydik?"* Cevap hayırsa
örüntü bir **sonuç**, bir **sinyal** değildir.

📌 Ve ölçümün en değerli kısmı sonucu değil, **kurtarılmaması** oldu. MOTOR
41 kat güçlü bir ayrışma buldu (kararsız bantta petek alanı genelin 3,2 katı)
ve onu iddianın kurtuluşu diye sunmadı:
> *"Ölçüt başarısız olunca ölçüyü değiştirmek, tam da bugün kovaladığımız kalıp."*
Alan gözlemi **yeni bir hipotez** olarak kaydedildi — *sonuç görüldükten sonra
fark edilmiş örüntü*, yani en zayıf kanıt sınıfı, ve kendi ön-kaydını bekliyor.

⚠️ Mekanizması da farklıydı ve bu ayrım işi kurtardı: büyük petek *"komşusu
uzak"* demek değil, *"temsil ettiği toprak büyük"* demek (Kuveyt: en yakın
komşu 82 km, alan 60.535 km²). Yani **eksik nokta** değil **düşük çözünürlük** —
ayrı bir soru.

---

## §52 — Türetilmiş sayı, TÜRETİMİYLE birlikte raporlanır

(ARAYÜZ'ün tespiti, bir karar turu bedeliyle.) İleri bakış penceresi için
*"sabit süre mi sabit sayı mı"* tartışılıyordu. ARAYÜZ ölçtü:

> *"1 yıllık pencere → azami **32** ek işaret, ekranı basar."*

Koordinatör bu sayıya dayanarak **sabit sayıyı** seçti ve kullanıcının kararını
(sabit süre) geri çevirdi. Sonra ARAYÜZ kendi hesabına döndü:

```
yapılan : 24 madde × 1,34 yerleşim/madde = 32     ← ÇARPIM
gereken : aynı madde grubunda AYNI şehir tekrar ediyor → BİRLEŞİM
gerçek  : azami 23 · medyan 2
```
⇒ Sabit sayıyı savunan **tek somut argüman yoktu.** Düzeltilince kullanıcının
ilk kararı kendiliğinden geri geldi. **Bir karar turu, tek bir yanlış çarpım.**

📌 ARAYÜZ'ün kendi teşhisi: *"İlk hesabı yaparken **birleşim mi çarpım mı**
diye hiç sormamışım. **Sayıyı üretirken sorulmayan soru, sayıyı savunurken
sorulmuyor.**"*

🔴 **Ve hatanın ikinci yarısı koordinatörde:** o sayı geldiğinde **nasıl
hesaplandığı sorulmadı.** Bütün gün *"ölçmeden hüküm verme"* diye ısrar
edilirken, bir karar **türetilmiş bir sayıya** dayandırıldı ve türetimi
sorulmadı. Çarpımı yapan taraf ile **kabul eden** taraf aynı sınıftan hata
yaptı.

> **Kural:** bir karar türetilmiş bir sayıya dayanıyorsa, **türetim de
> raporlanır.**
> *"Azami 32"* değil → *"24 madde × 1,34 yerleşim = 32"*.
> O zaman *"çarpım mı birleşim mi"* sorusu **kendiliğinden görünür** olur.
> Sayı tek başına geldiğinde o soru sorulamaz.

📌 Bu `§44`'ün ("makul görünen, yanlış hesaplanmış sayı") kardeşi ama ayrı bir
savunma katmanı: `§44` **çıktıyı** sorguluyor (*"listede olmaması gereken bir
üye var mı"*), `§52` **girdiyi** (*"bu sayı nasıl çıktı"*). Biri sonucu, öbürü
yolu denetliyor.

⚠️ Ve pratik ayıraç: bir sayı **tek başına** geliyorsa, o sayı **savunulamaz**
— ne üreten ne kabul eden hatayı görebilir.

---

## §53 — TABAN, ölçülen şey kadar doğrulanmalı; ve koşuyu öldürmek onu geri almaz

Bugün **üç kez** aynı şey oldu ve üçünde de **ölçüm doğruydu, taban yanlıştı**:

```
KOORDİNATÖR  r176'yı r176 ile karşılaştırdı — MOTOR dosyayı geri almıştı,
             "iki sürüm aynı çıktı" diye rapor yazılacaktı        (§34)
MOTOR        petek_govde.js'in 3 ondalık (≈111 m) yuvarlamasını sonuç sandı;
             "tavan poligonu BÜYÜTTÜ" görünüyordu — büyüyen tabandı
MOTOR        DURDURULAN bir koşunun yarım çıktısını A/B tabanı sandı:
             donemler.js 18:38 (r280) · bolgeler.js 21:59 (öldürülen koşu)
```

🔴 **Üçüncüsü en tehlikelisi**, çünkü öbür ikisi **ölçümü** bozuyordu; bu
**yayını** bozacaktı. Ve `URETIM_IZI` onu **yakalayamazdı**: iz `donemler.js`'te,
tutarsızlık `bolgeler.js`'te. İki ayrı dosya olduğu için üç buçuk saat kimse
ikisinin aynı koşudan geldiğini sorgulamadı.

> **Kural 1:** bir üretim koşusu durdurulduğunda **çalışma ağacı geri alınır.**
> Koşuyu öldürmek yazdığı dosyaları silmez; geri alınmazsa **sonraki her
> ölçümün tabanı olur.**
> **Kural 2:** A/B tabanı alınmadan önce **`git status` temiz mi** diye bakılır.
> Tek satır, ve bu sınıfı kapatıyor.

📌 Yakalanma biçimi de öğretici ve bedava bir sağlama veriyor: MOTOR **dosya
damgalarına** baktı — *"21:59 neden 18:38'den yeni?"* **Aynı koşudan çıkan
dosyaların damgaları birbirine yakın olmalıdır**; ayrıksa taban karışıktır.

⚠️ Ve ortak yanları `§44` ile aynı: **üç tabanın üçü de makul görünüyordu.**
Bozuk bir taban "bozuk" diye görünmez — yalnız sonucu sessizce kaydırır.
`§44` çıktıyı, `§52` girdiyi, `§53` **karşılaştırma zeminini** denetliyor.

📌 Ve `§50`'nin kardeşi: orada ölçüm **aleti** çalışmıyordu, burada alet
**yanlış kalibre** edilmişti. İkisi de "ölçüm doğru, sonuç yanlış" üretiyor.

---

## §54 — Kullanıcının şikâyetinin cevabı, kullanıcının KAPATABİLDİĞİ bir yerde duramaz

(ARAYÜZ'ün kuralı, aynı gün üç vakayla.) Bir kusuru düzeltmek yetmiyor;
**düzeltmenin görüneceğini garanti etmek** de gerekiyor.

```
1  alan göstergesi   Kullanıcı "toprak kazandı mı kaybetti mi anlayamıyorum"
                     dedi. Cevap (zirveye göre oran) LEJANT KUTUSUNUN İÇİNE
                     kondu — ve o kutunun gizle düğmesi var, tercihi
                     localStorage'da SAKLANIYOR. Kullanıcı bir kez kapattıysa
                     çözüm KALICI OLARAK görünmez.
                     ⇒ sahadan kanıtı: kullanıcı "lejant dediğin yer neresi"
                       diye sordu. Cevabı oraya koymuştuk, o görmüyordu.
2  sönen kenar       Üç koşudur üretiliyordu, yayına girdi — ama LEJANTTA
                     KARŞILIĞI YOKTU. Kullanıcı onu "iki ayrı kırmızı" diye
                     KUSUR olarak bildirdi. Özellik çalışıyordu; anlatılmıyordu.
3  ileri bakış       (tasarımda yakalandı) Gelecek olayın şehri, olmuş olayınkiyle
                     aynı görünürse "bu şehir şimdi mi el değiştirdi" diye
                     YANLIŞ OKUNUR. Lejant satırı zorunlu kılındı.
```

> **Kural:** bir şikâyetin cevabı **her zaman görünür** olmalı ve **lejantta
> karşılığı bulunmalı.** Kapatılabilir bir yere konan çözüm, çözülmemiş
> sayılır; anlatılmayan bir özellik kusur olarak geri gelir.

📌 Ortak sınıf: **"çözümü gösterdik ama görünmesini garanti etmedik."**
`§40` *"üretiliyor ama çizilmiyor"* diyordu; bu onun bir üst katmanı —
**çiziliyor ama görünmüyor / görünüyor ama anlatılmıyor.**

⚠️ Ve ikinci vaka en pahalısı: yeni bir özellik, **anlatılmadığı için kusur
raporu üretti.** Yani lejanta bir satır yazmamanın bedeli, kullanıcının
zamanı + bir teşhis turu oldu.

---

## §55 — Ölü ÖZELLİK kodu silinir, ölü SAVUNMA dalı kalır

(ARAYÜZ'ün ayrımı.) `§40` ailesinin dördüncü türü bugün çıktı ve zararı
öbürlerinden **farklı yerde**:

```
üretiliyor ama çizilmiyor     isg: · sönen kenar        → KULLANICI görmüyor
çiziliyor ama görünmüyor      alan göstergesi           → KULLANICI bulamıyor
görünüyor ama anlatılmıyor    sönen kenar               → KULLANICI kusur sanıyor
🔴 ÖLÜ ama CANLI görünüyor    şehzade katmanı           → BİZ yanlış teşhis kuruyoruz
```

**Vaka.** `js/app.js` `sehzade-dolgu` katmanını kuruyor, `uret_donemler.py`
`SEHZ_*` poligonlarını taşıyor — ve **`donemler.js`'te `z` alanı taşıyan dönem
sayısı 0.** İkisi de üç yıldır hiçbir şey yapmıyor.

🔴 **Zararı ölçüldü:** kullanıcı *"güney Marmara'da iki kırmızı bölge"* dedi,
koordinatör şikâyeti **bu ölü katmana** bağladı ve *"üç Z poligonu üst üste
biniyor"* diye hipotez kurdu. Gerçek sebep bambaşkaydı (dört Çelebi normal
devlet kimliği, altı renk çiftinin ΔE'si eşiğin altında). MOTOR ölçmeye
kalksaydı **ölü dosyayı ölçmüş olacaktı.**

> **Kural 1:** işlevsiz **özellik** kodu **silinir**, işaretlenmez.
> *"İşaretle"* yetmez çünkü **işaret de okunmadan geçilebiliyor** — bugünün
> kanıtı: `CLAUDE.md` o dosyayı zaten `☠️ ESKİ MOTOR` diye işaretliyordu ve
> koordinatör okumadan üzerine hipotez kurdu.
>
> **Kural 2:** ölü **savunma dalı** kalır. `donemBul`'un `-2` dönüşü bugün
> ulaşılamaz (atlas aralığında dönemsiz gün yok) ama **beklediği durum henüz
> oluşmadı** — veri bir gün iç boşluk üretirse o dal olmadan fonksiyon
> tanımsız dönerdi.

📌 Ayıraç: **özellik gibi mi görünüyor?** Bir katman, bir düğme, bir alan —
biri ona bakıp *"demek bu var"* diyebiliyorsa **özelliktir, silinir.**
Görünmeyen, yalnız bir kenar durumu bekleyen dal **savunmadır, kalır.**

⚠️ Ve silmek bilgiyi yok etmiyor: kod git geçmişinde duruyor, yer işareti
bırakılıyor. Silinen şey **canlı sanılma ihtimali.**

---

## §56 — Kullanıcı ne gördüğünü DOĞRU tarif eder; yanlış yerde arayan biziz

Bugün dört kullanıcı bildirimi geldi. **Dördünde de tarif doğruydu, dördünde de
ilk hipotezimiz yanlıştı.** Ve dördünde de doğru yeri gösteren şey **tarifin
ikinci yarısıydı**:

```
"güney Marmara'da iki kırmızı bölge, OSMANLI FETRETE GİRMEDEN ÖNCEKİ RENK VE
 TARZ İLE"                → tam olarak `d:` katmanı; 101 yerleşim şehzade
                            kimliğine geçerken Erdek·Edremit·Ayvalık atlanmış
"iki fazla kırmızı bölge, OSMANLI BÖLGESİ GİBİ"
                          → fazladan poligon YOK; dört Çelebi normal devlet
                            kimliği ve altı renk çiftinin ΔE'si 12'nin altında
"Çankırı'nın kuzeyinde GARİP BİR ANKARA ETİKETİ DAHA"
                          → bölge etiketi; 62 bölgenin 62'si bir yerleşimle
                            aynı adı taşıyor, sistematik
"1326'da İKİ AYRI KIRMIZI"
                          → sönen kenar katmanı; çalışıyordu ama LEJANTTA
                            KARŞILIĞI YOKTU (`§54`)
```

🔴 **Ortak hatamız:** tarifin **birinci yarısına** takılıp (*"iki kırmızı
bölge"*) ikinci yarısını (*"…önceki renk ve tarz ile"*) atlamak. İlk yarı
**belirtiyi**, ikinci yarı **teşhisi** taşıyor.

📌 En pahalı örnek: koordinatör *"iki kırmızı bölge"*yi şehzade katmanının
poligon çakışmasına bağladı ve **üç yıldır ölü** bir kod üzerine hipotez kurdu
(`§55`). Kullanıcı zaten *"Fetret'e girmeden önceki renk"* demişti — yani
katmanı değil **rengi** işaret ediyordu, ve renk `d:` demekti.

> **Kural:** kullanıcı bildirimi okunurken **niteleme cümleciği** aranır.
> *"…gibi"* · *"…ile"* · *"…daha"* · *"…önceki"* — kusurun **sınıfını** o
> söylüyor, konumunu değil.

⚠️ Ve bunun bir sonucu daha var: **kullanıcı kusurun sebebini bilmiyor ama
belirtisini bizden iyi görüyor.** Onun tarifini "yanlış anlamış" diye
düzeltmek yerine **tam olarak neyi tarif ettiğini** sormak, dört vakada da
daha kısa yol olurdu.
