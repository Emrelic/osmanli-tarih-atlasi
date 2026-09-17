# Commit istisnası — dizin pathspec yasağı ve iki adımlı pathspec

> Kimlik `D223` · `CLAUDE.md §7` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

- **Commit ve push yalnız Oturum 0'dan yapılır** — **TEK İSTİSNA aşağıda.**
  Diğerleri dosyayı yazar, "hazır" der. 12-14 MB'lık üretilmiş dosyalarda git
  çakışması çözmek çok pahalıdır.

  🔴 **İSTİSNA — kendi ilerleme dosyan, PATHSPEC'li** (4 Ağustos 2026 kararı):
  ```bash
  git commit -F - -- oturumlar/KENDI-DOSYAN.md      # yol adı ZORUNLU
  ```
  Bir oturum **yalnız `oturumlar/` altındaki KENDİ dosyasını** commit edebilir.
  Başka hiçbir şeyi — `data/`, `arac/`, `js/`, kök `*.md` hepsi Oturum 0'da.

  **Niçin istisna var:** `oturumlar/CAPRAZ-GOREV.md §5` dört çapraz oturuma
  yıllardır bunu söylüyordu ve sekiz tur böyle teslim edildi. İki belge
  çelişiyordu; ÇAPRAZ AKDENİZ çelişkiyi bildirdi, hüküm bu.

  **Niçin `--` şart:** git index PAYLAŞILIYOR. Yol adı yazılmazsa başka bir
  oturumun sahnelediği dosya senin commit'ine girer. Ve `git add -A` **hiç**
  kullanılmaz: 4 Ağustos'ta commit'siz bekleyen bir ilerleme dosyası tam bu
  yolla başkasının commit'ine girmek üzereydi.

  ⚠️ **Bu istisna "hazır" demeyi kaldırmaz.** Dosyanı commit et, ama bulguyu
  yine koordinatöre bildir — commit teslim değildir, teslim mesajdır.

  ### 🔴🔴 İSTİSNA GENİŞLETİLDİ — 7 Eylül 2026 · ve sebebi KOORDİNATÖRÜN İHLALİ
  *(`SINIR-ANADOLU-0907` ölçtü ve `§7.1⑥` gereği bekletmeden bildirdi)*

  `git add -A` yasağı yazılıydı. Koordinatör onu çiğnemedi — **DİZİN
  PATHSPEC'i** kullandı (`git add -- denetim/`) ve sonuç **aynı**:
```
d143e65   "IKI DERS + KOSU 8 BITIS TAHMINI DUZELDI"   →  140 DOSYA
ec869d9   "ALTI KITA DAHA SEVK EDILDI"                →   23 DOSYA
⇒ on iki oturumun ÇALIŞAN dosyaları, konusu onlar OLMAYAN commit'lere girdi
```
  🔴 ***BİR DİZİN PATHSPEC'İ, `git add -A` KADAR SÜPÜRÜCÜDÜR.*** Kuralın
  ruhu *"pathspec yaz"* değil, **"YALNIZ KENDİ DOSYALARINI, ADIYLA"**.

  🟢 **VERİ KAYBI OLMADI** (ölçüldü: `git status` üç dosya için de boş,
  içerik diskteki hâlle aynı) — **ama KAYBOLAN ŞEY GEREKÇEYDİ.** O
  oturumun commit mesajı (iki öngörünün çürümesi, bir kararın sebebi)
  **hiç yazılmadı**; `git log`da işi başkasının başlığı altında duruyor.
  ⇒ `§7` istisnası bir kolaylık değil bir **izlenebilirlik** aracıdır.

  🔴 **VE ASIL RİSK O OTURUMDA DEĞİLDİ:** dosyaları o an TAM olduğu için
  şanslıydı. Aynı anda **yarım yazılmış** bir dosyası olan bir oturumun
  bozuk hâli commit'lenirdi **ve kimse bilmezdi** — commit mesajı o
  dosyadan hiç söz etmiyor.
  📌 `§7` bunu 4 Ağustos'ta *"girmek üzereydi"* diye kaydetmişti. Bugün
  **GİRDİ**, ve 21 oturumluk bir kadroda süpürücü commit'in yakalayacağı
  yarım dosya sayısı, tek tek pathspec'in maliyetinden büyük.

  🟢 **HÜKÜM — istisna genişliyor:**
```
Bir oturum KENDİ ÜRETTİĞİ dosyaları commit EDER:
   oturumlar/<KENDİ ADI>.md
   denetim/<KENDİ ÖNEKİYLE başlayan alet · ölçüm · bulgu · yama dosyaları>
Şartı DEĞİŞMEDİ: her dosya ADIYLA yazılır. DİZİN PATHSPEC'İ YASAK.
   🔴 git add -- denetim/          ← SÜPÜRÜCÜ, YASAK
   🟢 git add -- denetim/ARAC-X-0907.py denetim/OLCUM-X-0907.json
```

  ### 🔴🔴 VE KURAL İKİ ADIMDA ÇALIŞIYOR — `add` YETMEZ, `commit` DE
  PATHSPEC İSTER *(7 Eylül · `SINIR-ANADOLU-0907` ölçtü, aynı gün)*

  Kural yazıldıktan **iki saat sonra** yarış gerçekleşti ve ölçüldü:
```
git add -- <9 kendi dosyam>
git diff --cached → 10 DOSYA
   denetim/ARAC-SINIR-KAFRIKA-PENCERE-0907.py  ← BAŞKA BİR KOLUN
28b45f1  15:39:34  KAFRIKA kendi commit'ini attı
173075d  15:39:51  benim commit'im — 17 SANİYE SONRA
```
  ⇒ ***Kural süpürmeyi merkezden dağıtıma çevirdi, YOK ETMEDİ.*** Yarış
  `add` ile `commit` **arasında**: index paylaşılıyor ve o aralıkta
  başka bir oturum sahneleme yapabiliyor.
```
🔴 git add -- <adlar>                          YETMEZ
🟢 git commit -F <msg> -- <AYNI ADLAR>         KESER
   ⇒ PATHSPEC COMMIT'TE DE TEKRARLANIR
🟢 ve doğrula:  git show --name-only <kendi commit'in>
```
  ⚠️ **Bu bir «dikkat» meselesi değil bir SIRALAMA meselesi.** Yeni
  kuralı okuyup pathspec'i yalnız `add`de kullanan bir oturum **kendini
  korunmuş sanar** ve komşusunun dosyasını commit'ler.
  📌 Ve bulan oturum bunu `M-3214`te **hipotez olarak yazmış**,
  *"⚪ gerçekleşme sıklığını ÖLÇMEDİM"* diye damgalamıştı. İki saat
  sonra gerçekleşti. ⇒ *Damgalanmış bir «ölçmedim», ölçülmeyi bekleyen
  bir tahmindir — ve bazen kendisi gelir.*
  **Niçin genişledi:** eski kural `denetim/`i Oturum 0'a bırakıyordu ve
  bu, 21 oturumluk bir kadroda koordinatörü **süpürmeye mecbur
  ediyordu.** Kural kendi ihlalini üretiyordu.

  📌 Ve dersin kendisi, bulan oturumun cümlesi:
  ***"`§7` istisnası bir HAK verir ama onu KORUMAZ."*** Paylaşılan bir
  index'te *"kendi dosyamı kendim commit ederim"* hakkı, başkasının
  süpürücü commit'i karşısında hükümsüz — **ve hükümsüz kalışı
  SESSİZDİR:** hakkını kullanmaya çalışan oturuma dönen cevap yalnızca
  `"no changes added to commit"`tir.
