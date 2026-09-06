# SERHAT — SINIR ÇİFTİ KATMANI (Emre'nin mimari isteği)

```
AD        SERHAT
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ClaudEmre HAYIR — İŞÇİ oturumsun, koordinatör 1.MURAT HÜDAVENDİGAR
```
> Okuma sıran: **① `CLAUDE.md` · ② `oturumlar/YONTEM-1923-SINIR.md` ·
> ③ bu dosya.** Altı bölge oturumu 1923 kesitini denetliyor; **sen
> onlardan farklı bir iş yapıyorsun** — bir KATMAN tasarlıyorsun.

---

## ① EMRE'NİN İSTEĞİ — kendi cümleleriyle
> *"hangi yerleşim hangi ülkeye ait bunun verisini toplayacağız ve sınır
> bu iki yerleşimin arasından geçecek … k1 k2 k3 k4 şeklinde yerleşim
> yerlerini tasnifledik, buna ek olarak **serhat** yani sınır şehirlerini
> de tespit edelim, bunun adına da **S** diyelim … sınır şehirlerini
> **çift olarak** tutmalı … eğer nehir var ise mesela Meriç veya Tuna
> nehri sınır ise işimiz daha kolay … sonra geriye doğru sınır
> değişikliklerini kronolojik olarak ekleyip …*
> *1) hangi iki devletin sınırı 2) hangi tarih 3) çifter çifter sınır
> yerleşimleri A-B C-D E-F"*

## ② 🔴 İLK KARAR — `S` BİR `k:` DEĞERİ **OLMAMALI**, ve sebebi ölçülü
Emre *"k1 k2 k3 k4'e ek olarak S"* diyor. Ama `k:` bir **KADEME**dir
(idarî hiyerarşi düzeyi: eyalet merkezi · sancak · alt kademe). Serhat
ise bir **KONUM İLİŞKİSİ**dir — ve **zamanla değişir**: bir şehir yalnız
sınır oradayken serhattır.
```
Edirne  1365-1453 SERHAT (Bizans sınırı) · 1453-1878 İÇ · 1878- SERHAT
⇒ tek bir `k:` değeri bunu ifade EDEMEZ
```
🔴 **VE BU, `CLAUDE.md §3`ün ZATEN ÖLÇÜLMÜŞ HATASIDIR:**
> *"kusur `m:` alanının güncellenmemesi değil, **`m:`nin YANLIŞ EKSENDE
> olması.** `m:` bir idarî merkez tutuyor — yani SİYASÎ bir şey — ama
> COĞRAFÎ bir gruplama için kullanılıyor. ⇒ Mekân ekseni ile konu ekseni
> birbirine karışıyor ve İKİSİ DE BOZULUYOR."*

⇒ `S`yi `k:`ye koymak **aynı hatayı ikinci kez** yapmak olur: bir
hiyerarşi alanına bir ilişki sıkıştırmak.

🟢 **VE EMRE'NİN KENDİ SEZGİSİ DOĞRU YERİ GÖSTERİYOR:** *"sınır
şehirlerini ÇİFT olarak tutmalı"* ve *"1) hangi iki devlet 2) hangi
tarih 3) A-B C-D E-F"*. Bu bir **İLİŞKİ TABLOSU** tarifi:
```
{ a:"Edirne", b:"Svilengrad", d1:"osmanli", d2:"bulgaristan",
  f:"1913-05-30", t:"1923-10-29", tur:"kara" | "nehir" | "deniz",
  nehir:"Meriç", kaynak:"…" }
```
⇒ Serhat, noktanın bir **özniteliği** değil, iki noktanın **ilişkisi**.
Ve `S` damgası bu tablodan **türetilir** (bir nokta herhangi bir çiftte
görünüyorsa o tarihte serhattır) — ayrıca saklanmaz.
📌 `§11`: *bir alan icat etmeden önce o alanın zaten var olup olmadığını
ölç* — ve **iki yerde saklanan bilgi bayatlar.**

⚠️ **BU BİR ÖNERİDİR, HÜKÜM DEĞİL.** Emre `S`yi `k:`de istiyor olabilir;
o zaman gerekçesini bilmek isterim. **Ölç, karşılaştır, Emre'ye SUN.**

## ③ SENİN İŞİN — üç kalem, sırayla
```
① TASARIM   Yukarıdaki iki modeli (k: değeri ↔ ilişki tablosu) ÖLÇEREK
            karşılaştır. Ölçütler: zaman boyutu ifade edilebiliyor mu ·
            `Değişmez 3`ün bilinen kusurunu tekrar ediyor mu · motor
            (`uret_petek.py`) onu okuyabilir mi · arayüz çizebilir mi.
            ⇒ ÇIKTI: `denetim/SERHAT-TASARIM-*.md` + Emre'ye sunulacak
              tek sayfalık karşılaştırma
② ÖLÇÜM     1923-10-28 kesitinde sınır çiftlerini ÇIKAR.
            🟢 TABAN HAZIR: `node denetim/ARAC-1923-KESIT-0906.js`
              233 çift ölçtü (iki kimliğin en yakın noktaları ≤300 km)
            🔴 AMA O KABA: "en yakın iki nokta" bir SINIR ÇİFTİ DEĞİLDİR.
              Gerçek komşuluk Voronoi'den gelir — `data/donemler.js` ve
              `devletler_harita.js` gövde geometrisini taşıyor.
            ⇒ Kaba listeyi TABAN al, gerçek komşuluğu geometriden ölç.
③ NEHİR     Emre "Meriç/Tuna sınırsa işimiz kolay" diyor. `veri-kaynak/`
            altında nehir verisi VAR (293 parça · 211 adlı akarsu).
            ⇒ Hangi sınırlar bir nehre yaslanıyor — ÖLÇ.
            ⚠️ `CLAUDE.md`: nehir adlarında `Kiz?lirmak` gibi kodlama
              kusuru var; ad eşleştirmesi normalleştiriciyle yapılır.
```

## ④ 🔒 ŞU AN NE YAPILABİLİR
```
🔒 KOŞU 7b SÜRÜYOR → data/*.js · arac/*.py DONUK
🟢 SERBEST → denetim/ · oturumlar/SERHAT-SINIR-CIFTI.md
```
⇒ Bu partinin işi **tasarım ve ölçüm.** Yeni bir veri dosyası
(`data/sinir_ciftleri.js`) koşu bitmeden yazılmaz — ve yazılırsa
`index.html`e de satır gerekir (`§5`).

## ⑤ 🔴 BAŞKA OTURUMLARIN ALANINA GİRME
Altı bölge oturumu şu anda 1923 sahipliklerini düzeltiyor ve
**sınırlar onların düzeltmelerinden sonra değişecek.** Sen bugün
**sahipliğe DOKUNMA** — yalnız çiftleri ve modeli çıkar.
```
🔴 YAZMA   denetim/yer_yama_*  (bölge oturumlarının)
🟢 YAZ     denetim/SERHAT-*  ·  denetim/ARAC-SERHAT-*
```
⚠️ Ve bir sınır çifti bulduğunda **iki ucun da sahipliği doğru mu** diye
sorma — o iş onlarda. Sen **bugünkü** sahipliğe göre çıkar; yanlışlar
düzelince çiftler yeniden üretilir.

## ⑥ TARİHÎ DERİNLİK — bu partide DEĞİL
Emre *"sonra geriye doğru sınır değişikliklerini kronolojik olarak
ekleyip"* diyor. Bu **ikinci faz**. Önce 1923 kesiti ve model; geriye
yürüme ondan sonra. Modeli yanlış kurarsak geriye yürümek onu **1281'e
kadar yayar.**

## ⑦ HABERLEŞME · DAMGALAR · COMMIT
→ `YONTEM-1923-SINIR.md` §④ ⑥ ⑦.
🔴 **Cevabını kendi pencerene yazmak = hiç cevap vermemek.**
🔴 `denetim/` dosyalarını commit ETME — "hazır" de, koordinatör alır.

---
## İLERLEME NOTU
