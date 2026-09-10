# İZ-YOK DENETİM B — DİLİM 2 sonuç raporu (81 madde / 15 paket)

```
81 = 🟢 68 · 🔴 1 · ⚪ 5 · ➖ 7
```

Yöntem: her madde için (1) PARTI.json'daki asıl soru okundu, (2) CEVAP.json'daki
`not` alanı okundu — ne yapıldığını iddia ediyor, (3) bugünkü atlas verisinde
(`data/*.js`, `js/app.js`, `css/style.css`, `arac/uret_petek.py`) iddianın
karşılığı arandı — Grep/Read ile, Türkçe normalleştirme tuzağına (`§4`, D054/D064)
dikkat edilerek. `girdi.GIRDI_DOSYALARI` her seferinde ayrıca soruldu: bir yama
dosyasının VAR OLMASI onun CANLI olduğu anlamına gelmiyor (Mersin vakası, aşağıda).

---

## 🔴 YAPILMAMIŞ (1)

### parti-emrelic-0031 / H-0007 — Mersin "164 yıl hayalet Osmanlı"
**Hüküm `cozuldu` diyor, düzeltme LİVE VERİYE HİÇ GİRMEMİŞ.**
Tek kanıt zaten veride, kaydın KENDİ `neden:` alanında yazılı:
`data/yerlesimler_ek27.js:51` — Mersin kaydı hâlâ eski hatalı hâlde:
`d:[{f:"1352-01-01",t:"1918-10-30"}]` (ramazanoglu dönemi YOK).
Kaydın kendi metni itiraf ediyor: *"Aynı düzeltme yerlesimler_ek27.js:51'e
yazılmış ama MÜKERRER s:/d: yüzünden JS'te sonuncusu kazanıyor ve düzeltme
motora hiç girmiyordu."*
Doğru s:/d: (ramazanoglu 1352→1516-08-24 eklenmiş hâli) iki ayrı yerde duruyor
ama ikisi de `girdi.GIRDI_DOSYALARI`'na BAĞLI DEĞİL:
- `data/yama_p0037_bekleyen.js` — dosya adı KASTEN glob-dışı, uygulanmamış
- `data/yer_yama_ok110.js` — aynı şekilde girdi.py'ye bağlı değil

`ad:"Mersin"` için tüm `yerlesimler*.js` (canlı küme) tek tek tarandı —
başka kayıt yok. **Harita bugün hâlâ Mersin'i 1352'den Osmanlı gösteriyor.**

---

## ⚪ ÖLÇÜLEMEDİ (5)

- **0025/H-0002** — kendi ölçtüğüm yer_id/kronoloji oranı (tüm `olaylar*+kronoloji*.js`,
  77 dosya): toplam 6161, yer_id 4855, **%78,8**. Notun iddiası (23 Ağustos):
  toplam 6064, konumlu 5811, **%95,8**. Fark büyük ve yönü ters (benimki DAHA
  DÜŞÜK). Farklı dosya kümesi/ölçüt kullanılmış olabilir — hüküm vermiyorum,
  ama D021 uyarınca kaydediyorum: bu oranı taban almadan önce ayrıca ölçülmeli.
- **0029/H-0004** — "61 seferin 52'sinde f≠t" istatistiği bağımsız yeniden
  hesaplanmadı (zaman kısıtı).
- **0031/H-0014** — "17 nokta akkoyunlu'yu 1281'de açıyor, karakoyunlu'da 0"
  istatistiği bağımsız doğrulanmadı.
- **0033/H-0003** — Hoy kaydı DOĞRULANDI (`yerlesimler.js:1601`, d: 1724-09-28→
  1730-08-12), ama **Mîyandoab ayrıca aranmadı**.
- **0034/H-0015** — Nahçıvan/Hoy/Merend/Culfa/Şerur kalıcı desen iddiası genel
  hatlarıyla tutarlı (Hoy kaydı doğrulandı) ama tek tek 5 kayıt taranmadı.

---

## ➖ İDDİA YOK (7) — yeniden sınıflandı

Bu maddeler `cozuldu` etiketliydi ama içerik OKUNUNCA gerçek bir "yaptım"
iddiası taşımadığı görüldü — ya bir HÜKÜM/YÖNLENDİRME notu, ya da (0030/H-0003
gibi) iddia zaten dar ("kuyruğa eklendi", "animasyonun kendisi" değil):

- **0027/H-0009** — kendi hatasının itirafı + görev yeniden yönlendirmesi
  ("SARTNAMEM YANLISTI"); bir veri/kod değişikliği iddia etmiyor.
- **0030/H-0003** — iddia SADECE "İttifak animasyonu kuyruğa (`denetim/
  KUYRUK-ARAYUZ-P0003.md`) eklendi, tasarım+kod konumu işaretlendi" —
  CONFIRMED (`:170`, "✓ tasarım+kod konumu"). Animasyonun KENDİSİ hâlâ YOK
  (aynı dosya: "veri data/ittifaklar.js HÂLÂ YOK, 2 haftadır sıfır ilerleme")
  ama madde bunu zaten iddia etmiyordu — 🟢'ye değil ➖'ye kondu çünkü asıl
  "iş" (animasyon) hâlâ açık bir iş kalemi, yalnız triyaj yapılmış.
- (Kalan 5 kalem: 0020-0034 taramasında notu salt "ölçtüm ve X doğru/yanlış
  değil" diyen, kod/veri değişikliği iddia etmeyen benzer meta-notlar —
  ayrıntı için `denetim/IZYOK-B-DETAY-0910.md` gerekirse hazırlanır, istenirse.)

---

## 🟢 YAPILMIŞ (68) — öne çıkan bulgular ve caveatlar

Çoğu madde birebir doğrulandı (yer/tarih/kayıt bugünkü veride aynen var).
Üç madde **doğrulandı AMA farklı yoldan**:

- **0024/H-0001 (Kutaisi)** — bug gerçekten kapanmış (`yerlesimler.js:926`,
  `v:` İmereti tâbi 1555-05-29→1810-02-20) ama notun önerdiği tarih
  (1578-08-09) DEĞİL, başka bir oturumun (OPUS 85, Amasya Antlaşması
  1555-05-29) bulduğu tarih uygulanmış. Dosya adı da notun dediği
  `yerlesimler_kafkas_duzeltme.js` değil (o dosya hiç yok) — gerçek konum
  `data/yerlesimler.js`.
- **0033/H-0001 (Erzincan)** — 41 yıl erken kusuru kapanmış ama farklı bir
  oturumun (p0004/H-0006) farklı tarihleriyle: kırılma 1514-09-06 (bu
  maddenin önerdiği 1514-09-01 değil).
- **0034/H-0031 (Genç Osman'ın hali/katli)** — "yeni madde olarak yazıldı
  (olaylar_ek17.js)" iddiası artık YANLIŞ: o standalone kayıt SONRADAN
  mükerrer diye SİLİNDİ (`olaylar_ek17.js:35-44` yorum). Ama içeriği
  KAYBOLMADI — eski kayda (`olaylar_ek7.js:70`) taşındı ve orada TAM olarak
  notta anılan ayrıntılar (Ali Ağa'nın konağı, "başı açık üstü perişan",
  Orta Cami, kulak-burun) doğrulandı. Sonuç itibarıyla bilgi VAR, konum farklı.

Diğer 65 madde doğrudan, konum ve içerik birebir eşleşerek doğrulandı — tam
liste ve dosya+satır referansları: `denetim/ARAC-IZYOK-B-LISTE-0910.py`
çıktısı + bu oturumun tool-call geçmişi. En kalabalık ikisi (0034 ve 0021)
istendiği gibi hızlandırıcı oldu: aynı 7-kayıt kümesi (`yerlesimler_ek26.js`,
Gümrü/Eçmiyadzin/Doğubayazıt/Çaldıran/Özalp/Başkale/Yüksekova) beş ayrı
maddeyi (0021/H-0008,H-0009,H-0019 + 0034/H-0006,H-0025) tek seferde kapattı.

---

## Desen — üçten fazla maddede çıkan tek kusur sınıfı

**"Yama dosyası yazıldı ama `girdi.GIRDI_DOSYALARI`'na hiç girmedi / mükerrer
kayıtla eziliyor"** — Mersin (🔴, kesin) dışında aynı riski taşıyan ama BU
seferlik kurtulmuş (başka bir oturum ayrıca uygulamış) üç vaka daha görüldü
(Kutaisi, Erzincan, Şehrizor/Halepçe). Yani bu desen şu an **1 kesin + 3
şanslı-kurtulmuş = 4 madde**, tam olarak "üçten fazla" eşiğini geçiyor —
bekletmeden bildirilmişti (Mersin), burada tekrar altı çiziliyor: **yama
dosyalarının `girdi.py`'ye bağlanıp bağlanmadığı, bir "cozuldu" hükmünün
KENDİ BAŞINA yeterli kanıtı değildir.**
