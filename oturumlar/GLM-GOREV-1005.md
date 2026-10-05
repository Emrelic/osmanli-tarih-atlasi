# GLM GÖREV İSTEMİ — 5 Ekim 2026 · ① TDV atıf adresi sayımı ② %22,5 TEKRARLANIYOR MU

> **Motor:** GLM (Z.ai / Zhipu). *Gemini DEĞİL.*
> **Niçin GLM:** ikisi de **çok token yiyen, az hüküm gerektiren** sayım işi — 153 HTTP
> isteği + 40 kalemlik cümle karşılaştırması. GLM'in tokenleri Claude limitimizin
> dışında; bu işi ona vermek **en pahalı kaynağımızı korur.**
> **Kural (`harici-yz-iscileri`):** dış YZ'ye **SAYIM verilir, HÜKÜM verilmez.**
> `git add`/`commit`/`push`/`checkout`/`reset`/`stash` **YAPMAZ**; yalnız
> `denetim/GLM1-*` dosyalarına yazar; veriye DOKUNMAZ.

🟢 **ÖNCEKİ İŞİN KABUL EDİLDİ** (`denetim/GLM1-TDV-ATIF-1004.md`). Üç şeyi doğru yaptın
ve ikisi bu görevin temeli oldu:
- örnekleme ölçütünü **ölçümden önce** yazdın ve **içerik körü** tuttun;
- ilk-N almayıp sistematik seçtin, **gerekçesini sayıyla verdin** (ilk 22 kalemin 17'si
  tek dosyada kümeleniyordu);
- **302'nin ne demek olduğunu çözdün** — TDV bilinmeyen slug'u `arama/<slug>`a
  yönlendiriyor, yani 302 "bu başlıkta madde yok"un kendiliğinden kanıtı. Bu bulgu
  aşağıdaki ①. işin bütün yöntemi oldu.

⚠️ Ve bir şeyi **yapmadığın için** doğru yaptın: %22,5'i 520 kalemin hükmü gibi
sunmadın. Hüküm bende; ben de henüz vermedim, çünkü **tek örneklemin oranı
yinelenmedikçe bir ölçüm değil bir ADAYDIR.** ②. iş tam bunu sınıyor.

---

## İSTEM — aşağısı GLM'e aynen verilir

Sen bir **kaynak doğrulama işçisisin**. Hüküm vermiyorsun, **sayım yapıyorsun**.
İki ayrı iş var. ① daha kısa, onunla başla ve **ayrı dosyaya** yaz.

---

# ① TDV ATIF ADRESİ SAYIMI — 153 URL canlı mı?

**Çıktı:** `denetim/GLM1-TDV-URL-SAYIM-1005.md`

### Evren (ölçüldü, 5 Ekim 2026)
`data/*.js` dosyalarında geçen **153 TEKİL** TDV adresi. Listeyi sen üret ki
doğrulanabilir olsun:

```bash
grep -ohE "islamansiklopedisi\.org\.tr/[a-zA-Z0-9%._/-]+" data/*.js | sort -u
```
⚠️ Sayı 153'ten farklı çıkarsa **farkı yaz ve devam et** — veri değişmiş olabilir.
Benim sayım 5 Ekim'in fotoğrafı, bir yasa değil.

### Her URL için
```
① HTTP isteği at (yönlendirmeyi İZLEME: curl -sS -o /dev/null -w "%{http_code}" -I <url>)
② kovala:
   200  →  ✅ CANLI
   302  →  🔴 ÖLÜ SLUG   (Location başlığı `arama/` içeriyorsa KESİN; yaz)
   404  →  🔴 YOK
   000  →  ⚪ TAŞIMA ARIZASI — ÖLÜ DEĞİL, en az 3 kez tekrar dene, hâlâ 000 ise
            "ölçülemedi" yaz. 🔴 000'ı ASLA ölü sayma (`CLAUDE.md D211 ⑤`).
   5xx  →  ⚪ sunucu arızası — tekrar dene, ısrarla sürüyorsa "ölçülemedi"
③ 200 alanlarda ayrıca: gövde bir **"bk." STUB'ı mı**? (tek satırlık yönlendirme —
   KIRKPINAR→GÜREŞ gibi). Stub ise 🟡 STUB kovasına yaz ve asıl maddenin adını ver.
   Niçin ayrı kova: stub 200 döner ama atıf oradan DOĞRULANAMAZ — "canlı" saymak
   yanlış-pozitif olur.
```

### Raporda olacaklar
1. **SAYIM tablosu:** ✅ CANLI · 🟡 STUB · 🔴 ÖLÜ SLUG · 🔴 404 · ⚪ ölçülemedi — her
   kovanın SAYISI **ve** URL LİSTESİ. 🔴 Sayı yetmez, **liste şart**: bir sonraki tur
   borcun kapandığını ancak üyelikten anlar.
2. 🔴/🟡 çıkan her URL'nin **hangi `data/*.js` dosyasında ve hangi maddede** geçtiği
   (dosya + madde tarihi + başlık). Düzeltmeyi ben yapacağım, ama senin listen olmadan
   bulamam.
3. Ölü slug için — **yapabiliyorsan** — TDV aramasında doğru slug'ı ara ve YAZ
   (`https://islamansiklopedisi.org.tr/arama/?q=<kelime>`). Bulamazsan `bulunamadı`.
   ⚠️ "TDV'de yok" hükmünü **verme**; yalnız "aradım, bulamadım" yaz. Aradaki fark:
   ikincisi senin ölçümün, birincisi benim hükmüm.

### 🔴 ÖNGÖRÜ — ölçmeye BAŞLAMADAN ÖNCE rapora yaz
Tek satır: *"153'ün kaçı 🔴 çıkacak sanıyorum, ve NİÇİN."* Sonra ölç, sonra tuttu mu
yaz. Öngörü çürürse **o daha değerlidir** — çürüyen öngörü, tutan öngörüden çok şey
öğretir. (Önceki işinde senin "ölü slug" sayın 30'du; o bir ipucu ama bu evren FARKLI:
orada aradığın slug'lar vardı, burada verinin KENDİ yazdığı adresler var.)

### ⚠️ Nazik ol
İstekler arasına **en az 1 saniye** koy. TDV bizim en önemli kaynağımız; onu
yormayacağız. 153 istek × 1 sn = ~3 dakika, aceleye gerek yok.

---

# ② %22,5 TEKRARLANIYOR MU — ikinci bağımsız örnek

**Çıktı:** `denetim/GLM1-TDV-ATIF-TEKRAR-1005.md`

Önceki işinde 520 kalemlik kovadan 40 kalem ölçtün, 9'u 🔴 çıktı (%22,5). **Şimdi aynı
kovadan İKİNCİ, AYRI 40 kalem ölç.**

### Seçim — öncekiyle ÇAKIŞMAMALI
Aynı tabakalı sistematik yöntemi kullan, **ama başlangıç kaymasını değiştir**:
```
önceki:  indeks floor(i × N / n),            i = 0..n-1
şimdi:   indeks floor((i + 0,5) × N / n)     i = 0..n-1      ← yarım adım kaydır
   ek tabakası   228 kalem → 18
   öteki tabaka  292 kalem → 22
```
① Önce iki listeyi karşılaştır ve **çakışan kalem sayısını YAZ**. 0 olmalı; 0 değilse
  çakışanı at, bir SONRAKİ indeksi al ve bunu rapora yaz.
② Seçimi **içerik körü** yap — `d` metinlerini seçim bitene kadar OKUMA. Seçilen 40'ın
  listesini (dosya · tarih · başlık) ölçümden ÖNCE bas.

### Ölçüm — öncekiyle BİREBİR AYNI yöntem
Yöntemi değiştirme; değiştirirsen iki oran karşılaştırılamaz hâle gelir ve bu işin
bütün amacı kaybolur. Kalem başına üç adım, öncekinin aynısı:
1. `d` metnindeki **TDV'ye atfedilen iddiayı** tek cümleyle çıkar.
2. TDV'de maddeyi bul ve oku (302 = ölü slug · "bk." stub'ında asıl maddeye git ·
   TDV **olay değil YER-KİŞİ** ansiklopedisidir: olay slug'ı ölüyse olayın geçtiği
   YERE ya da başındaki KİŞİYE bak).
3. Kova: ✅ VAR · 🔴 YOK · ⚪ OKUNAMADI — ve **gövdeden BİREBİR alıntı + URL**.

### 🔴 VE BU SEFER BİR ŞEY DAHA SAY — kendi bulduğun sınıfı
Önceki raporunda 9 🔴'ün 7'sinin deseni şuydu:
> TDV'de **VAR** olan çekirdek olgu + TDV'de **OLMAYAN** bağlayıcı/sentez cümlesi,
> ikisi birlikte TDV'ye atfediliyor.

Bu desen bir **sınıf**, ve senin bulgun. Şimdi her 🔴'ü ikiye ayır:
```
🔴a  KISMEN   çekirdek olgu TDV'de VAR, atfedilen EK HÜKÜM yok
🔴b  TAMAMEN  atfedilen şey TDV'de hiç yok
```
Önceki örnekte 7a + 2b çıkmıştı. Bu örnekte oran ne? ⇒ Raporda `🔴a / 🔴b` dağılımını
ayrı satırda ver. Niçin önemli: ikisinin çaresi TERSTİR — 🔴a'da atfı daraltmak yeter,
🔴b'de iddianın kendisi kalkmalı. Tek kovaya atılırsa yanlış çare uygulanır.

### 🔴 ÖNGÖRÜ — yine ölçmeden önce
*"İkinci 40'ta kaç 🔴 bekliyorum ve niçin."* Sonra ölç, sonra tuttu mu yaz.
📌 Bu işin asıl sorusu **"9 mu çıkacak"** değil: ilk oranın **yinelenip yinelenmediği**.
İki örnek birbirine yakınsa (ör. 9 ve 7) oran bir ölçümdür; çok uzaksa (ör. 9 ve 2)
oran bir ölçüm değildir ve 520'ye hiçbir hüküm taşınamaz. **İkinci sonuç ne çıkarsa
çıksın bu iş kazançlıdır** — bu yüzden "kötü" bir sayıdan çekinme, olduğu gibi yaz.

---

## İKİSİ İÇİN DE GEÇERLİ — sınırlar
- **Veriye DOKUNMA.** `data/`, `arac/`, `js/`, `index.html`, `CLAUDE.md` → YALNIZ OKU.
- **git komutu YOK** (`add`/`commit`/`push`/`checkout`/`reset`/`stash`). `.git/index.lock`
  silinmez. Yazdığın dosyaları ben commitleyeceğim.
- **Motor koşusu YASAK** (`uret_*`, `kos_ve_yayinla`).
- **Vikipedi tek dayanak değildir** ve bu işte hiç kullanılmaz — ölçüm TDV gövdesine karşı.
- **Ölçemediğine "ölçülemedi", bulamadığına "bulunamadı" yaz.** Boşluk doldurmak için
  tahmin YOK. `bulunamadı` bir sonuçtur, bir başarısızlık değil.
- **Alıntı GÖVDEDEN birebir** olacak, Türkçe karakterler korunarak, URL'siyle. Özet
  yazma, kendi cümlenle anlatma — karşılaştırılan şey tam metin.
- **Hüküm cümlesi yazma.** "Bu madde düzeltilmeli", "atıf uydurma" gibi cümleler benim;
  sen "iddia X · TDV'de bulduğum cümle Y · kova 🔴a" yaz, orada dur.

## TESLİM — üçlü kural
İş bitince **tek** rapor dosyası başına şu üç şey:
1. **NE ÖLÇTÜM** — sayıyla, kova kova, listeyle.
2. **NE BULAMADIM** — açıkça; hangi URL/madde okunamadı, kaç kez denendi.
3. **NE İSTİYORUM** — varsa; seçenekliyse kendi önerinle.

⚠️ Tahtaya mesaj atamıyorsan (dış işçinin bekçisi yok) **sorun değil** — ama o zaman
teslimin kendiliğinden görünmez. Önceki raporun tam bu yüzden bir gün fark edilmeden
durdu; kusur sende değil düzendeydi. Bitirince **dosya adını ekrana tek satır bas**,
ben ona bakacağım.
