# EMRE'NİN KARARLARI — 29 Ağustos 2026

> Dört karar soruldu, dördüne de cevap geldi. Bu dosya **hükmün kendisidir**;
> uygulayan oturumlar buraya atıf yapar.

---

## ① PANEL DÜĞMESİ — **GİDECEĞİ durumu yazsın**

> Emre: *"Panel durumu gideceği durumu yazsın."*

🔴 **VE BU BİR ÖNCEKİ TALİMATI GEÇERSİZ KILAR.** İki paket birbirinin
tersini söylüyordu:
```
0027/H-0012   "düğme BULUNDUĞU durumu yazsın"   ← uygulandı, YAYINDA
0030/H-0006   "düğme GİDECEĞİ durumu yazsın"    ← ŞİMDİ SEÇİLEN
```
⇒ `0027/H-0012` hükmü `bayat` olur, `0030/H-0006` uygulanır.
📌 Bir talimatı geçersiz kılan şey yeni bir talimattır; ikisi de kayıtta
kalır, çünkü *"hangisi niçin değişti"* sorusu yarın sorulacak.

**SEVK:** ARAYÜZ · `js/app.js`

---

## ② SEKİZİNCİ BOYUT — **AÇILSIN, ama AYARA BAĞLI**

> Emre: *"8. boyut açılsın ama ayara bağlı olsun, kapatılabilsin
> açılabilsin kullanıcı ayarlarından."*

`CLAUDE.md §1.6` sekizinci boyutu (askerî yapı · sosyal yapı · bilim-
teknoloji · kültür-sanat · felsefe · din) **kasten kapalı** tutuyordu:
*"şu anda konumuz DEVLETLER ve SINIRLARIDIR."*

🟢 **Karar kapıyı açıyor ama ANAHTARLA.** Bu, kapsam disiplinini bozmadan
genişleme sağlıyor:
```
varsayılan   KAPALI  → bugünkü davranış korunur, kimse şaşırmaz
kullanıcı    AÇAR    → 8. boyut maddeleri kronolojiye karışır
```

🔴 UYGULAMA ŞARTLARI — üçü de zorunlu:
```
① AYAR KALICI OLMALI      localStorage · sayfa yenilenince unutulmasın
② MADDELER ETİKETLİ OLMALI  8. boyut maddesi bir alanla AYIRT EDİLEBİLMELİ
                            (öneri: `boyut:8` ya da `kapsam:"konu"`)
                            ⇒ süzgeç ada değil ALANA baksın
③ SAYAÇ DÜRÜST OLMALI      panel "N / TOPLAM başlık" yazıyor; ayar kapalıyken
                            TOPLAM da düşmeli, yoksa kullanıcı eksik sanır
```
⚠️ ② şart, çünkü bu projede ölçülmüş bir tuzak var: bir süzgeç **ada
değil BİÇİME** bağlanmıştı ve yeni yamaları tanımayıp sessizce eledi.

**İLK MADDELER:** `0035/H-0043` ve `0035/H-0091` — Fransız Devrimi.

**SEVK:** ARAYÜZ (ayar + süzgeç) · KRONOLOJİ (etiketli madde yazımı)

---

## ③ MAVİ — **kıyıda kullanılmasın, deniz tonu bir tık düşsün**

> Emre: *"Mavi renk deniz kıyılarında kullanılmasın haritada. Ayrıca
> deniz mavi tonunu bir tık düşürelim."*

İki ayrı iş ve **sırası bağlayıcı**:
```
(a) DENİZ TONU bir tık AÇILSIN/DÜŞSÜN     bugünkü zemin `#a8c8dc`
                                           (app.js:567 + app.js:604)
(b) KIYIDAKİ DEVLETE MAVİ VERİLMESİN      yeni bir PALET KISITI
```

🔴 **(b) YENİ BİR DENETİM KURALIDIR ve bugün YOK.** Bugünkü `renk_olc.py`
yalnız *"su rengine çok yakın"* diye bakıyor (novgorod `#84c9cf`, ΔE 16,6 —
eşik 18) ve o **tek bir çift** ölçüyor. Emre'nin istediği daha geniş:
**gövdesi kıyıya değen hiçbir devlet mavi tonda olmasın.**

Ölçüt tasarlanacak ve ÖLÇÜLECEK:
```
① "kıyıya değiyor" nasıl tanımlanır — gövde ∩ kıyı çizgisi ≠ ∅ mi,
   yoksa gövdenin kaç yüzdesi kıyı mı?
② "mavi" nasıl tanımlanır — HSV hue aralığı mı, deniz renginden ΔE mi?
   📌 İkincisi daha iyi: deniz tonu değişince kısıt KENDİLİĞİNDEN kayar.
③ kaç devlet etkileniyor — ÖNCE SAY, sonra renk değiştir
```
⚠️ **(a) yapılınca (b)'nin tabanı değişir** ⇒ önce (a), sonra ölçüm,
sonra (b). Ve ikisinden sonra `py arac/renk_olc.py` **şart** — palet
verinin fonksiyonudur, renge dokunmadan bile çakışma doğabiliyor.

**SEVK:** ARAYÜZ (a) · RENK (b) · ikisi de bitince koordinatör `renk_olc`

---

## ④ HİMAYE GÖSTERİMİ — **ONAYLANDI**

> Emre: *"Onaylıyorum."* — `0019/H-0075`'teki (a) şıkkı:
> *"himaye edilen bölgenin sınırları boyunca Osmanlı kırmızısı İNCE
> ŞERİT, iç renk o devletin KENDİ rengi."*

🔴 **BU BUGÜNKÜ TÂBİ GÖSTERİMİNİ DEĞİŞTİRİR.** Bugün tâbi toprak **açık
kırmızı** dolgu; karardan sonra:
```
BUGÜN     tâbi = açık kırmızı dolgu, devletin kendi rengi GÖRÜNMEZ
KARAR     tâbi = kendi rengi dolgu + sınırında İNCE Osmanlı kırmızısı şerit
```
⇒ Erdel, Eflak, Boğdan, Kırım, Dubrovnik, Kraliyet Macaristanı — hepsi
**kendi renkleriyle** görünecek, Osmanlı bağı şeritle anlaşılacak.

⚠️ **VE BU, 29 AĞUSTOS'TAKİ B2 DÜZELTMESİYLE ETKİLEŞİR.** B2 artık
`doğrudan ∪ tâbi` birleşik gövdesinde koşuyor ve gerekçesi *"ikisi de
Osmanlı rengi"*ydi. Tâbi kendi rengine dönünce o gerekçe **kısmen**
değişir — ama karar yine doğru: şerit hâlâ Osmanlı bağını gösteriyor ve
enklav sayılmamaları gerekiyor.
🔴 Uygulayan oturum bunu ÖLÇSÜN: şerit çizildikten sonra B2 hâlâ doğru
davranıyor mu, yoksa tâbi parçalar yeniden "enklav" mı sayılıyor?

**SEVK:** MOTOR (`uret_petek.py` — şerit geometrisi) + ARAYÜZ (çizim)

---

## SIRA — bağımlılığa göre

```
1. ① panel düğmesi        küçük, bağımsız, HEMEN
2. ③(a) deniz tonu        küçük, ③(b)'nin tabanı
3. ④ himaye şeridi        büyük, haritayı en çok değiştiren
4. ③(b) mavi kısıtı       ölçüm gerektirir, ③(a)'dan sonra
5. ② 8. boyut             en büyük, ayar + etiket + sayaç
```
