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
