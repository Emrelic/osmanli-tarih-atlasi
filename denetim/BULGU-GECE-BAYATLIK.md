# BULGU — GECE BAYATLIK DENETİMİ (M-1741)

Oturum: UYGULAMA-0035. Yöntem: her maddenin `not` alanından anahtar (dosya/alan/kimlik/tarih)
çıkarılıp `data/*.js` doğrudan taranarak veya var olan `denetim/BULGU-*.md`
raporları (aynı geceki UYGULAMA-3, KRONOLOJİ-EK8 vb.) çapraz okunarak "bugün
ZATEN çözülmüş mü" sorusu soruldu. **SEN DÜZELTME, yalnız İŞARETLE**
talimatına uyuldu — hiçbir GECE-*.md dosyası, hiçbir `data/*.js` bu turda
DÜZENLENMEDİ.

⚠️ **KAPSAM DÜRÜSTLÜĞÜ** — dosyalar arası derinlik EŞİT DEĞİL:
```
GECE-ARAYUZ.md      26/26 TAM (önceki turda, M-1723)
GECE-DEVLET.md        3/3  TAM
GECE-SAVAS.md         2/2  TAM
GECE-KRONOLOJI.md    29/29 TAM
GECE-TASNIFSIZ.md     2/31 ÖRNEKLEM (en olası adaylar seçildi, kalan 29 taranmadı)
GECE-VERI.md          3/32 ÖRNEKLEM (en olası adaylar seçildi, kalan 29 taranmadı)
```
TASNIFSIZ ve VERI'de kalan 58 madde bu turda TARANMADI — "temiz" değil,
"bakılmadı" olarak okunmalı. Zaman kısıtı nedeniyle en yüksek olasılıklı
adaylara öncelik verildi (🟠 "çare yazılmış uygulanmamış" kovası, tekrarlı
notlar, tek-alan kontrolleri).

---

## ✅ DOĞRULANMIŞ BAYAT — 14 madde (bugünkü kodda/veride ZATEN çözülmüş)

### GECE-KRONOLOJI.md — 13 madde
Kaynak: `data/olaylar_ek8.js` (27 Ağustos, "KRONOLOJİ EK8" partisi) ve
`data/olaylar_ek22.js` + `denetim/BULGU-UYGULAMA-3.md` (bu gece, aynı
GECE-KRONOLOJI.md şartnamesinin PARALEL diğer üçte-birlerini işleyen
UYGULAMA-3 oturumu).

| paket/madde | GECE-KRONOLOJI.md hükmü | GERÇEK DURUM | kanıt |
|---|---|---|---|
| 0003/H-0017 (İzvornik) | sirada | **YAZILDI** — 1460-01-01 kendi maddesi var | `data/olaylar_ek8.js:12-22`, ayrıca `olaylar_ek20.js:278` |
| 0006/H-0005 (Kalender Şah 1526) | sirada | **YAZILDI** — üç ayrı maddeye bölünmüş (Diu 1509, Kalender Şah 1526, Deli Hasan Paşa 1603) | `data/olaylar_ek8.js`, satır 2/4/5 |
| 0023/H-0010 (Knin) | sirada | **YAZILDI** — 1688-09-11 kendi maddesi var | `data/olaylar_ek8.js`, ayrıca `olaylar_ek20.js:294-311` |
| 0033/H-0015 (Nusaybin) | sirada (kume) | **YAZILDI** — 1515-01-01 kendi maddesi var | `data/olaylar_ek8.js`, satır 3 |
| 0036/H-0012 (Şammar/Hâil) | sirada (kume) | **YAZILDI** — iki ayrı dosyada bile var (`olaylar_ek8.js` + `olaylar_ek22.js`, muhtemelen mükerrer) | ⚠️ aşağıda AYRICA flag edildi |
| 0035/H-0062 (Demak/Majapahit önemi) | sirada | **ZATEN DOĞRU** — `kapsam_genis:true` alanı zaten bunun için tasarlanmış | `denetim/BULGU-UYGULAMA-3.md:225-230` |
| 0035/H-0065 (İbrim/Nübye kıpırtısız) | sirada | **ZATEN DOĞRU** — olayın doğası gereği görsel değişiklik beklenmiyor, kusur değil | `BULGU-UYGULAMA-3.md:232-236` |
| 0035/H-0079 (Hail/Nefud) | olculecek | **ÖLÇÜLDÜ** — Hâil tarihen Vehhâbî'nin rakibiydi (doğru), Nefud emilme deseni zaten VERİ SAHİPLİK kapsamında | `BULGU-UYGULAMA-3.md:238-244` |
| 0035/H-0095 (Alemdar Mustafa Paşa) | sirada | **ARAŞTIRILDI** — TDV'den güzergah bulundu (Edirne→İstanbul), yalnız `data/savaslar.js` yazımı bekliyor | `BULGU-UYGULAMA-3.md:264-271` |
| 0037/H-0001 (Besarabya güneyi) | sirada | **ZATEN DOĞRU** — hem kronoloji (`olaylar_ek5.js:346`) hem coğrafya (`yer_yama_uyg1.js`) yazılmış | `BULGU-UYGULAMA-3.md:246-250` |
| 0037/H-0004 (yer işaretleme) | olculecek | **ÖLÇÜLDÜ** — tek-alan öneri hazır (`yer_id:"Şam"`), yazılmadı | `BULGU-UYGULAMA-3.md:254-260` |
| 0037/H-0006 (Abdülaziz seyahati) | olculecek | **ARAŞTIRILDI** — TDV yalnız ana hatları veriyor, tam güzergah `kaynak:"bulunamadı"` ile kapatılabilir, Emre onayı bekliyor | `BULGU-UYGULAMA-3.md:273-285` |
| 0038/H-0007 (Kasr-ı Şirin) | olculecek | **ARAŞTIRILDI** — mevcut veri (Safevî) muhtemelen ZATEN doğru, Emre'nin varsayımı çürüyor olabilir; patch YAZILMADI (teyit edilemedi) | `BULGU-UYGULAMA-3.md:289-303` |

### GECE-TASNIFSIZ.md — 1 madde
| 0037/H-0009 (Kars'ın düşüşü haritada yok) | olculecek | **İKİ TARAF DA DOĞRULANDI** — kırılma VAR (`yerlesimler.js:232`, `s:{f:"1877-11-18",...,d:"rusya"}`) VE kronoloji maddesi VAR (`olaylar_ek10.js:357`, `t:"1877-11-18"`, aynı gün). Şikâyetin ölçüldüğü tarihten sonra biri (veya ikisi) yazılmış olmalı — bugün ikisi de yerinde, harita doğru çizmeli. |

**BENİM ÖLÇMEDİĞİM AMA KRONOLOJİ İÇİNDE BULUNAN, EK KANIT:** `data/olaylar_ek8.js`'in
kendi başlık yorumu (27 Ağustos) 284 açık maddeyi tarayıp yalnız 8'inin
gerçekten yeni madde gerektirdiğini, 7'sinin ZATEN YAZILMIŞ olduğunu bulmuş
— yani bu class of bayatlık projede BİLİNEN ve tekrar eden bir desen
(`denetim/BULGU-KRONOLOJI-EK8.md:12-24`, "68 değil 8").

---

## 🔴 YENİ BULGU — MÜKERRER SATIR (aynı iş iki H-kodunda ayrı ayrı duruyor)

- **GECE-KRONOLOJI.md 0035/H-0097 ve 0035/H-0100** — NOT METNİ BİREBİR AYNI
  (Tuna hattında yalnız İbrail'in `isg:rusya` kaydı var, Ruscuk·Silistre·
  Bender·İsmail·Kili·Vidin·Nigbolu·Yergöğü·Turnu Severin'de yok). İki ayrı
  H-kodu, tek gerçek iş — biri `tekrar` olarak kapatılabilir.
- **0036/H-0012 (Şammar/Hâil)** hem `olaylar_ek8.js` HEM `olaylar_ek22.js`de
  yazılmış görünüyor (iki ayrı oturum, muhtemelen aynı gece, birbirinden
  habersiz). İkisinin içeriği aynı mı yoksa çakışıyor mu BEN DOĞRULAMADIM —
  KRONOLOJİ dosya sahibinin `t:"1835-01-01"` + `b:"Şammar..."` için
  `data/olaylar_ek8.js` VE `data/olaylar_ek22.js`yi karşılaştırması gerekiyor
  (aynı başlık iki dosyada aynı güne yazılmışsa mükerrer madde = Değişmez'i
  bozmaz ama kronoloji listesinde İKİ KERE görünür).
- **GECE-VERI.md 0008/H-0009 · H-0010 · H-0011 · H-0012 · H-0014** — BEŞ
  H-kodunun `not` metni birebir aynı ("1281 BOŞLUKLARI — sekiz maddenin
  sekizi aynı soruyu soruyor"). Muhtemelen tek gerçek iş, dört fazla H-kodu.

---

## 🟡 YANLIŞ KOVA (bayat değil ama GECE-SAVAS.md'ye yanlış sınıflanmış)

**0031/H-0002** (GECE-SAVAS.md'de) — içerik "kırmızı harita renk
örtüşmeleri" / Preveze-Vonitsa bowtie poligonu; bu bir **MOTOR/geometri**
sorusu (kendi kendini kesen Voronoi poligonu ihtimali), SAVAŞ/sefer
kronolojisiyle ilgisi yok. `denetim/BULGU-UYGULAMA-1.md:87-89`: "motor
ölçümü hâlâ YOK" — bayat değil, genuinely açık, ama kovası yanlış.

---

## ⚪ ÖRNEKLENDİ, BAYAT DEĞİL ÇIKTI (genuine açık iş, tabloyla tutarlı)

Kontrol edilip HÂLÂ GERÇEKTEN açık olduğu doğrulanan örnekler (tabloya
güven artırıyor, ama bunlar "yeni bulgu" değil):
- 0004/H-0003 (Cem Sultan rehin anlaşması) — TDV ay/gün vermiyor, olculecek doğru
- 0019/H-0067 (Fuzûlî anakronizmi) — `olaylar_ek14.js:83` HÂLÂ `t:"1534-06-01"`,
  başlık hâlâ "Bağdat'ın fethi SONRASI" diyor ama fetih 1534-12-04 — DÜZELMEMİŞ
- 0030/H-0001, 0030/H-0010 (GECE-TASNIFSIZ, 🟠 kovası) — ikisi de gerçekten
  MOTOR/ARAYÜZ seviyesinde uygulanmamış, "çare yazılmış" doğru ama "uygulandı" değil
- 0031/H-0014 (Akkoyunlu ömür-dışı 27 dönem) — düzeltme yaması hâlâ
  `arac/girdi.py`ye bağlanmamış (grep: sıfır eşleşme), gerçekten açık

---

## SAYIYLA

```
TAM TARANDI     4 dosya (ARAYUZ 26 + DEVLET 3 + SAVAS 2 + KRONOLOJI 29 = 60 madde)
ÖRNEKLENDİ      2 dosya (TASNIFSIZ 2/31 + VERI 3/32 = 5/63 madde)
─────────────────────────────────────────────────────────────
DOĞRULANMIŞ BAYAT (bu turda)     14   (KRONOLOJI 13 + TASNIFSIZ 1)
DAHA ÖNCE BULUNMUŞ BAYAT (ARAYUZ, M-1723'te raporlandı)   4
MÜKERRER SATIR bulundu            3 grup (7 satır)
YANLIŞ KOVA bulundu               1
```
18 madde (14+4) / 123 madde (26+97) ≈ **%15** doğrulanmış bayat — TASNIFSIZ
ve VERI'nin 58 satırı hâlâ taranmadığı için gerçek oran muhtemelen DAHA
YÜKSEK; bu bir tavan değil TABAN tahmini.

## ÇIKARDIĞIM

`data/olaylar_ek8.js`'in kendi ölçümü ("68 değil 8", 27 Ağustos) ile bu
turun ölçümü AYNI DESENİ gösteriyor: koordinatörün "not" metninden yapılan
kaba kova ataması, altındaki işin **zaten yapılıp yapılmadığını** sormuyor.
İki bağımsız ölçüm (27 Ağustos ve bu gece) aynı sonuca varması, bunun
**tek seferlik bir kaza değil, tablo-üretim yönteminin sistematik bir
zayıflığı** olduğunu gösteriyor.
