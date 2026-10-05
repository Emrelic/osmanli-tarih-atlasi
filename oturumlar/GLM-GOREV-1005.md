# GLM GÖREV İSTEMİ — 5 Ekim 2026 · PAYLAŞILAN TDV ÖNBELLEĞİ + atıf adresi sayımı

> **Motor:** GLM (Z.ai / Zhipu). *Gemini DEĞİL.*
> **Rol (Emre, 5 Ekim 2026):** *"GLM'yi kendisinin en iyi olduğu iş için kullanalım,
> ek yardımcı olarak."* ⇒ Bu dosya o karara göre yazıldı: GLM'e **hüküm gerektirmeyen,
> çok hacimli, mekanik** iş verilir. Yorum ve sınıflandırma Claude oturumlarında kalır.
> **Kural (`harici-yz-iscileri`):** dış YZ'ye **SAYIM verilir, HÜKÜM verilmez.**
> `git add`/`commit`/`push`/`checkout`/`reset`/`stash` **YAPMAZ**; veriye DOKUNMAZ;
> yalnız `denetim/GLM1-*` altına yazar. Dosya SİLMEZ (kendi `GLM1-*` dosyaları hariç).

## NİÇİN SEN — ölçülmüş gerekçe, iltifat değil
Önceki işinde (`denetim/GLM1-TDV-ATIF-1004.md`) üç şeyi iyi yaptın ve üçü de bu
görevin temeli: ① ölçütü ölçümden ÖNCE yazdın ② seçimi **içerik körü** tuttun
③ **302'nin ne demek olduğunu çözdün** (TDV bilinmeyen slug'u `arama/<slug>`a
yönlendirir ⇒ 302 = "bu başlıkta madde yok"un kendiliğinden kanıtı).
Bir de **yapmadığın** şey doğruydu: %22,5'i 520 kalemin hükmü gibi sunmadın.

Ve senin için biçilmiş kaftan bir israf ölçtüm (5 Ekim 2026):
```
TDV önbellek DİZİNİ      34   ← her Claude oturumu KENDİ kovasını kurmuş
önbellek dosyası      2.779
TEKİL slug            2.329
MÜKERRER çekim          450   (%16 boşa gitmiş istek) · 50,8 MB
en çok: urfa ×6 · bitlis ×5 · erzurum ×5 · van ×5 · revan ×5 · tiflis ×5 · erzincan ×5
```
Altı ayrı oturum `urfa.txt`yi **altı kez** çekti. Her çekim bir Claude turu yaktı.
🔴 **Bu, token israfının en saf hâli ve çaresi tamamen mekanik** — yani senin işin.

---

## İSTEM — aşağısı GLM'e aynen verilir

İki iş var. **①'den başla**, o asıl iş. Her iş AYRI dosyaya.

---

# ① PAYLAŞILAN TDV ÖNBELLEĞİ — 34 kovayı BİRE indir

**Çıktı:** `denetim/GLM1-TDV-ONBELLEK/` (gövdeler) + `denetim/GLM1-TDV-ONBELLEK-INDEKS.md`

### Ne yapıyorsun
`denetim/` altında adı `*-tdv-onbellek` ile biten **34 dizin** var; içlerinde aynı TDV
maddesinin kopyaları duruyor. Hepsini tarayıp **tek, tekilleştirilmiş** bir önbellek kur.

```
① 34 dizini tara, her `.txt` dosyasını slug adına göre grupla
② aynı slug'ın birden çok kopyası varsa EN İYİSİNİ seç — ve seçimi ölçüyle yap:
   🔴 "en büyük dosya" YETMEZ. Şu sırayla bak:
      (a) gövde BOILERPLATE mi? (menü/çerez/"madde bulunamadı" metni — gerçek madde
          değil). Boilerplate kopyayı ASLA seçme, hepsi boilerplate ise slug'ı
          `ŞÜPHELİ` kovasına yaz.
      (b) gövde bir **"bk." STUB'ı** mı? (tek satır yönlendirme: KIRKPINAR → GÜREŞ).
          Stub gerçek bir gövdedir ama atıf oradan DOĞRULANAMAZ ⇒ `STUB` damgası vur
          ve yönlendirdiği maddenin adını yaz.
      (c) kalanlar arasında en UZUN ve en YENİ olanı seç.
   ⚠️ Kopyalar BİRBİRİNDEN FARKLI olabilir (biri yarım çekilmiş olabilir). Farklı
      uzunluktaki kopya sayısını AYRI SAY — bu, eski çekimlerin ne kadar güvenilmez
      olduğunun ölçüsü.
③ seçtiğini `denetim/GLM1-TDV-ONBELLEK/<slug>.txt` olarak KOPYALA (taşıma/silme YOK —
   eski dizinler yerinde kalır, onları ben temizleyeceğim)
④ INDEKS yaz: her satırda  slug · bayt · satır · kaynak dizin · damga (TAM / STUB /
   ŞÜPHELİ) · kopya sayısı · farklı-uzunluklu kopya var mı
```

### Sonra BOŞLUKLARI DOLDUR — asıl kazanç burada
`data/*.js` içinde atıf verdiğimiz TDV adresleri var ama bazılarının gövdesi
önbellekte YOK. Listeyi şöyle çıkar:

```bash
grep -ohE "islamansiklopedisi\.org\.tr/[a-zA-Z0-9%._/-]+" data/*.js | sort -u
```
(5 Ekim'de **153** tekil adres çıkıyordu; farklı çıkarsa farkı YAZ ve devam et.)

Bu 153'ün hangisi önbellekte YOK ise **çek ve önbelleğe ekle.**
⚠️ **Nazik ol: istekler arasına en az 1 saniye koy.** TDV bizim en önemli kaynağımız,
onu yormayacağız. 153 istek × 1 sn ≈ 3 dakika; acele yok.

### 🔴 ÖNGÖRÜ — taramaya BAŞLAMADAN ÖNCE indekse yaz
Tek satır: *"2329 tekil slug'ın kaçı ŞÜPHELİ/STUB çıkacak sanıyorum, ve niçin."*
Sonra ölç, sonra tuttu mu yaz. Çürüyen öngörü tutan öngörüden çok şey öğretir.

### Teslimde bu üç sayı olacak
```
TEKİL slug kaç · TAM kaç · STUB kaç · ŞÜPHELİ kaç
153 adresin kaçı önbellekte VARDI · kaçını YENİ çektin · kaçı çekilemedi (adıyla)
farklı-uzunluklu kopya taşıyan slug kaç   ← eski çekimlerin güvenilmezlik ölçüsü
```

---

# ② TDV ATIF ADRESİ SAYIMI — 153 adres canlı mı?

**Çıktı:** `denetim/GLM1-TDV-URL-SAYIM-1005.md`

①'de zaten o 153 adrese istek atacaksın; **HTTP kodlarını da kaydet** ve bu raporu
ondan üret. Ayrı tarama yapma, iki kez istek atmayalım.

```
200  →  ✅ CANLI        (gövde stub ise 🟡 STUB kovasına, "canlı" saymak yanlış-pozitif)
302  →  🔴 ÖLÜ SLUG     (Location başlığı `arama/` içeriyorsa KESİN — yaz)
404  →  🔴 YOK
000  →  ⚪ TAŞIMA ARIZASI — 🔴 ÖLÜ DEĞİL. En az 3 kez tekrar dene; hâlâ 000 ise
         "ölçülemedi" yaz. (Projenin kuralı: `000` taşıma arızasıdır.)
5xx  →  ⚪ sunucu arızası — tekrar dene, ısrarla sürerse "ölçülemedi"
```

### Raporda olacaklar
1. Her kovanın **SAYISI ve URL LİSTESİ**. 🔴 Sayı yetmez, **liste şart**: bir sonraki
   tur borcun kapandığını ancak üyelikten anlar, net sayıdan anlamaz.
2. 🔴/🟡 çıkan her adresin **hangi `data/*.js` dosyasında, hangi maddede** geçtiği
   (dosya + madde tarihi + başlık). Düzeltmeyi ben yapacağım ama senin listen
   olmadan maddeyi bulamam.
3. Ölü slug için doğru slug'ı ARA (`https://islamansiklopedisi.org.tr/arama/?q=<kelime>`)
   ve bulduğunu yaz; bulamazsan `bulunamadı`.
   ⚠️ **"TDV'de yok" hükmünü VERME** — yalnız *"aradım, bulamadım"* yaz. Fark önemli:
   ikincisi senin ölçümün, birincisi benim hükmüm.

---

## ⏸️ ÜÇÜNCÜ İŞ ERTELENDİ — ve niçin, bilmen senin yararına
Önceki raporunda 9 kırık atfın 7'sinde bir **desen** buldun: *TDV'de VAR olan çekirdek
olgunun üstüne TDV'de OLMAYAN bir sentez cümlesi ekleniyor ve ikisi birlikte TDV'ye
atfediliyor.* Bu gerçek bir keşif ve projeye yeni bir kusur sınıfı kazandırdı.

İkinci bir 40'lık örnek alıp %22,5'in yinelenip yinelenmediğini sınamayı düşünüyordum.
**Şimdilik vermiyorum**, çünkü o işin can alıcı kısmı — bir atfı `🔴a kısmen` ve
`🔴b tamamen` diye ayırmak — **yorum** gerektiriyor, ve çareleri TERSTİR (🔴a'da atıf
daraltılır, 🔴b'de iddia kalkar). Yanlış kovaya düşen madde yanlış çare alır.
⇒ O iş bir Claude oturumuna gidecek; sana ①-② gibi **yorum istemeyen** iş veriyorum.
Bu bir güvensizlik değil iş bölümü: senin üstünlüğün HACİM ve MEKANİK KESİNLİK.
📌 Ve ① bittiğinde o Claude oturumu **senin kurduğun önbellekten** okuyacak, yani
tek tek madde çekmeyecek. İkinci işi mümkün kılan şey birinci iş.

---

## İKİSİ İÇİN DE GEÇERLİ — sınırlar
- **Veriye DOKUNMA.** `data/`, `arac/`, `js/`, `index.html`, `CLAUDE.md` → YALNIZ OKU.
- **Yazabileceğin tek yer `denetim/GLM1-*`.** Eski önbellek dizinlerini SİLME, TAŞIMA,
  DEĞİŞTİRME — yalnız oku ve kopyala.
- **git komutu YOK** (`add`/`commit`/`push`/`checkout`/`reset`/`stash`).
  `.git/index.lock` silinmez. Yazdıklarını ben commitleyeceğim.
- **Motor koşusu YASAK** (`uret_*`, `kos_ve_yayinla`).
- **Vikipedi kullanılmaz.** Ölçüm TDV gövdesine karşıdır.
- **Ölçemediğine "ölçülemedi", bulamadığına "bulunamadı" yaz.** Tahminle boşluk
  doldurma. `bulunamadı` bir sonuçtur, bir başarısızlık değil.
- **Hüküm cümlesi yazma.** "Bu düzeltilmeli", "atıf uydurma" gibi cümleler benim.
  Sen "ölçtüm · şu çıktı · şunu bulamadım" yaz, orada dur.

## TESLİM — üçlü kural, rapor başına
1. **NE ÖLÇTÜM** — sayıyla, kova kova, **listeyle**.
2. **NE BULAMADIM** — açıkça; hangi slug/adres okunamadı, kaç kez denendi.
3. **NE İSTİYORUM** — varsa; seçenekliyse kendi önerinle.

⚠️ Tahtaya mesaj atamıyorsun (dış işçinin bekçisi yok) ve bu bir kusur DEĞİL — ama
teslimin kendiliğinden görünmez. Önceki raporun tam bu yüzden **bir gün** fark
edilmeden durdu; kusur sende değil düzendeydi. Bitirince **yazdığın dosya adlarını
ekrana tek satır bas**, ben ona bakacağım.
