# BOŞLUK CİNSİ — İLERLEME (12 Ağustos 2026)

## ① Var olan alan arandı mı, bulundu mu

`git grep -n "bosluk_cinsi"` koştu — **sıfır** sonuç (yalnız kendi şartnamemde
geçiyordu). Ama **geç fark ettim ki yanlış kelimeyi aramışım**:

🔴 **`VERI-YAPISI.md:69`de ZATEN PLANLI bir alan var — `bos:`**
```js
bos:"devletsiz" | "veri-yok",  // sahipsizliğin cinsi (MIMARI.md §6)
```
Ve `MIMARI.md §6` ("Bilinmeyeni bilinmiyor diye göstermek") bunu **haritada
görsel bir ayrım** olarak tasarlamış: `devletsiz` düz nötr, `veri-yok` taramalı,
**lejantta ayrı satır**. Yani planlanan alan benim `bosluk_cinsi`mden **daha
dar** (iki değer) ama **daha geniş bir amaç** taşıyor (render + lejant, salt
denetim değil).

**Bunu ölçtüğümde iş zaten bitmişti** — aşağıya bak, ⑦'de tam açıklama ve
önerim var. Kısaca: **`bosluk_cinsi`i SİLMEDİM**, ikisinin nasıl bir araya
geleceğine karar koordinatörün.

## ② 138 → 138 cinslendirildi, 0 belirsiz kaldı

Şartname 102 diyordu (yalnız "cinsi okunabilir değil" alt kümesi); ben
**138'in tamamına** yazdım çünkü alanın kendisi (`bosluk_cinsi`) hiç yoktu —
36'sının "okunabilir" olması yalnız `neden:` serbest metninden İNSANIN
çıkarabildiği anlamdı, MAKİNENİN değil.

Yöntem: `arac/girdi.py`nin **kendi** `yukle()`si ile 138 kaydı (ad+dosya+neden)
çıkardım, SINAV'ı (kaynağa sor: konuşuyorsa devletsiz, susuyorsa veri-yok) her
`neden:` metnine tek tek uyguladım, iki ek kova ekledim:
- **kabile** — kaynak ADLI bir krallık/hanedan/şeyhlik anıyor ama künyesi yok
  (Azande Krallığı, Şilluk Krallığı, Oromo krallıkları, Beni Şengûl şeyhlikleri…)
- **insansiz** — insan hiç yoktu (kutup adaları: Svalbard, Franz Josef, Severnaya
  Zemlya, Yeni Sibirya Adaları, Novaya Zemlya x2, Vaygaç, Grönland x2)
- **hata** — bayrağın kendisi şüpheli (aşağıda, 8 kayıt)

## ③ Cins dağılımı (denetle.py'den, GERÇEK ölçüm)

```
devletsiz   100
kabile       15
insansiz      9
hata          8
veri-yok      6
```

## ④ 🔴 "hata" kovasının 8 kaydı — ayrı ayrı gerekçeli, dokunmadım

```
Vladikavkaz · Kuveyt · Cetinje    kur = ilk_dönem başlangıcı, GERÇEK BOŞLUK
                                   YOK (girdi.yukle() ile hesaplandı). Bayrak
                                   muhtemelen VESTİGİAL. neden: de YOK.
                                   ⚠️ kasitli_bosluk alanına DOKUNMADIM —
                                   yetkim dışı, review koordinatörün.
Aleksandrovsk · Korsakov (Sahalin) ŞEMA SINIRI: Shimoda 1855 ortak-mülkiyet
                                   ilan etti, `s:` şeması TEK sahip alır.
                                   Boşluk veri değil YAPI kaynaklı — 6.
                                   kova ("sema"?) gerekebilir.
Meşra er-Rek · Deym Zübeyr ·      1870'ler Mısır dönemi BİLİNİYOR ama
Gondokoro                         Değişmez 2 borcu doğuracağı için
                                   YAZILMADI — bu coğrafi/siyasi boşluk
                                   DEĞİL, iş kuyruğu.
```

## ⑤ Doha ve Abu Dabi — `neden:` alanı YOK, ben yazamadım

İkisinde de **gerçek boşluk var** (Doha 1825-1871 · Abu Dabi 1761-1820),
körfez şeyhliği deseni (`CLAUDE.md §3`). `bosluk_cinsi:"devletsiz"` verdim
ama **`neden:` alanına dokunma yetkim yok** ("BAŞKA HİÇBİR ALANA DOKUNMA").
Bir sonraki oturum TDV/akademik kaynakla `neden:` yazmalı.

## ⑥ `arac/denetle.py` — yeni dal, C13 iki yönde SINANDI

```python
def bosluk_cinsi_denetimi(Y): ...   # kasitli_bosluk:true + bosluk_cinsi yok → say
BEKLENEN_CINSSIZ = 0
```
```
GEÇME     ✓  cinsi yazılmamış: 0 (beklenen 0) — dağılım yukarıdaki gibi
ATEŞLEME  ✗  Vladikavkaz'ın bosluk_cinsi'ni GEÇİCİ sildim → "1 (beklenen 0)"
             doğru ötüyor, SONRA GERİ YAZDIM (git diff temiz)
```
İkisi de zorlandı, ikisi de doğru çalıştı.

## ⑦ Değişmez 1 ve 1b — BOZULMADI

```
Değişmez 1  ✓ 2362 yerleşim, 180 sahipsiz (beklenen 180)  — DEĞİŞMEDİ
Değişmez 1b ✓ pencere arası boşluk: 0 (beklenen 0)         — DEĞİŞMEDİ
```
138 kaydın hepsine tek satırlık ekleme yapıldı (`kasitli_bosluk:true` hemen
sonrasına `,bosluk_cinsi:"X"`), başka hiçbir alana dokunulmadı. `git diff
--stat`: 11 dosya, 138 ekleme + 138 silme (satır başına 1 ekleme).

## ⑧ 🔴 AÇIK SORU — koordinatöre, BEKLETMEDEN

`bos:` (VERI-YAPISI.md, ikili, render+lejant amaçlı) ile `bosluk_cinsi`
(benim, 5 kova, denetim amaçlı) **iki ayrı alan** olarak mı kalsın, yoksa
birleştirilsin mi? Önerim (bağlayıcı değil):

```
① bosluk_cinsi   KALSIN — zengin, denetle.py okuyor, test edildi
② bos:            TÜRETİLSİN bosluk_cinsi'nden (render zamanı ya da küçük
                   bir eşleme fonksiyonuyla):
                   devletsiz/kabile/insansiz → bos:"devletsiz" (üçü de
                     haritada "kimse yönetmiyordu" olarak boyanır)
                   veri-yok                  → bos:"veri-yok"
                   hata                       → HENÜZ render edilmesin,
                     önce 8 kayıt tek tek incelenmeli (3'ü belki hiç
                     boşluk değil)
```
Bu, MIMARI.md §6'nın render/lejant hedefini bozmadan benim zengin
sınıflandırmamı da kaybetmez.

## ⑨ Diğer açık uçlar

- `arac/girdi.py`nin `BILINEN_ALANLAR`ına `bosluk_cinsi` eklenmedi — yetkim
  dışı (`arac/girdi.py` yasak). Her koşuda zararsız ama gürültülü bir UYARI
  satırı basıyor. Koordinatör eklemeli.
- `VERI-YAPISI.md`ye alanı BEN YAZMADIM (kök *.md yasak) — ⑧'deki karara
  göre taslak metin hazır, iste yazayım/koordinatör yazsın.
