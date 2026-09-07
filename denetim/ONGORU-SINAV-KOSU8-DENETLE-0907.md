# ÖNGÖRÜ — `denetle.py` SÜRESİ ve BUGÜNKÜ İHLALLERİ

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> 🔴 **ÖLÇÜMDEN ÖNCE YAZILDI.** `denetle.py` bu oturumda hiç
> koşturulmadı. Sahibi: bu oturum. Sınav anı: **hemen.**
> 🔴 SALT OKUR — `denetle.py` `1.MURAT`ın kalemi; ölçerim, düzeltmem.
> `data/` koşu 8 boyunca DONUK, dokunulmayacak.

---

## NİÇİN BU ÖLÇÜM

Kendi tespitim: `kos_ve_yayinla.py` `denetle.py`yi `dk=40` ile
koşturuyor ve `kos()` zaman aşımında da `None` döner ⇒ **zincir durur,
kapı koşmaz.** Bu, mükerrer/enklav ihlallerinden **bağımsız ikinci bir
kilitlenme yolu** ve hiç ölçülmedi.

---

## ⚠️ ÖLÇÜMÜN KOŞULU — ve niçin ÜST SINIR verecek

Ölçüm **koşu 8 sürerken** alınıyor: `uret_petek.py` bir çekirdeği tam
dolduruyor. Merge gecesinde `denetle.py` zincirin **6. adımı** olarak
koşacak, yani üretim **bitmiş** olacak.
⇒ ***Bugün ölçeceğim süre bir ÜST SINIRDIR.*** Merge gecesi daha kısa
sürmesi beklenir; **daha uzun sürmesi için bir sebep yok.**
📌 Bu, `§11`in *"bir süre kaydı, ölçüldüğü GİRDİ BÜYÜKLÜĞÜYLE birlikte
taşınır"* dersinin **yük** ekseni: burada değişen girdi değil, **makine
doluluğu.** Yazmazsam bir sonraki oturum bu sayıyı boş makine sayısı
sanar.

---

## ÖNGÖRÜLER — dört ayakla

```
Ö-D1  🔴 SÜRE 40 DAKİKANIN ALTINDA — ve 20 dakikanın da altında
      ① beklenen: < 20 dk (bant 2-20)
      ② MAZERET YOK — `denetle_yayin.py:1311` yorumu `durum_tablosu`yu
         çağırmama gerekçesini *"içeride `denetle.py` koşuyor ve kapıyı
         DAKİKALARA çıkarırdı"* diye yazıyor. «Dakikalar», 40'ı değil
         onlu sayıları tarif eder. Tutmazsa o yorum yanlış demektir ve
         bu ölçülebilir bir çelişkidir.
      ③ nereden: duvar saati, koşumun kendi damgası · birim DAKİKA
      ④ neye karşı: bugünkü depo, koşu 8 SÜRERKEN (üst sınır)

Ö-D2  ÇIKIŞ KODU 1
      ① beklenen: 1
      ② MAZERET VAR: 1.MURAT'ın öncülü («mükerrer 3 + enklav») kendi
         eski notundan DEVRALMA ve damgalı. Devraldığım bir öncülü
         öngörü diye yazıyorum ama dayanağı ölçülmemiş; 0 çıkarsa
         öncül bayat demektir, öngörüm değil.
      ③ nereden: `$?` · birim KOD
      ④ neye karşı: bu koşu

Ö-D3  🔴 İHLAL, «mükerrer 3 + enklav»DAN İBARET OLMAYACAK
      ① beklenen: ≥1 başka ✗/ihlal satırı
      ② MAZERET YOK — 1.MURAT'ın kendi cümlesi: *"başka ihlal varsa
         runbook'um eksik demektir."* Sıfır çıkarsa devralınan öncül
         doğrulanmış olur ve bu İYİ HABERDİR; ama öngörümün
         çürümesidir.
      ③ nereden: `denetle.py` çıktısındaki ✗ / İHLAL satırları · birim SATIR
      ④ neye karşı: bu koşu

Ö-D4  ÇIKTI, HANGİ DEĞİŞMEZİN DÜŞTÜĞÜNÜ ADIYLA SÖYLEYECEK
      ① beklenen: her ihlal ayırt edilebilir bir başlıkla
      ② MAZERET VAR: yalnız bir özet basıyor olabilir; o zaman
         atıf **koddan** çıkarılır ve bu `ölçülemedi` değil, daha
         pahalı bir ölçüm olur.
      ③ nereden: çıktı ↔ değişmez adları · birim DEĞİŞMEZ
      ④ neye karşı: bu koşu
```

🔴 **MAZERETİ OLMAYANLAR: Ö-D1 · Ö-D3.**
🟡 Mazereti olanlar: Ö-D2 · Ö-D4.

---

## PAYDA ŞARTI
Hiçbir kalem `TUTTU` damgalanmadan önce paydası sorulacak. Payda 0 ise
damga **`SINANAMADI`** — `TUTTU` değil.

## ⚠️ VE BİR ŞEY ÖNCEDEN YAZILIYOR
`denetle.py` **koşturulacak, DEĞİŞTİRİLMEYECEK.** Bir ihlal bulursam
onu **bildiririm**; `BILINEN_AYRI`ya çift eklemek ya da
`BEKLENEN_ENKLAV_SORGU`yu yükseltmek `1.MURAT`ın kalemi (`§7`) — ve
zaten bir tavanı ihlali susturmak için yükseltmek bu depoda
`Sarıkamış`ı ada bırakan hatanın ta kendisi.

---
---

# ⇒ SINAV SONUCU — ölçüldü · 4'ün 3'ü tuttu, ve ÇÜRÜYEN İYİ HABER

```
Ö-D1 süre < 20 dk            🟢 TUTTU     🔴 MAZERETİ YOKTU   166 sn
Ö-D2 çıkış kodu 1            🟢 TUTTU        MAZERET VARDI
Ö-D3 ≥1 BAŞKA ihlal          🔴 ÇÜRÜDÜ    🔴 MAZERETİ YOKTU   tam 2 ✗
Ö-D4 ihlali adıyla söylüyor  🟢 TUTTU        MAZERET VARDI
```

## ① SÜRE — İKİNCİ KİLİTLENME YOLU KAPANDI
```
başlangıç 22:58:26 · bitiş 23:01:12
SÜRE      2 dk 46 sn  (166 sn)
SINIR     40 dk       (2400 sn) — `kos_ve_yayinla.py:219` `dk=40`
KULLANIM  %6,9 · PAY  14,5 KAT
```
🟢 **Ve bu bir ÜST SINIR:** ölçüm koşu 8 sürerken, `uret_petek.py` bir
çekirdeği tam doldururken alındı. Merge gecesi `denetle.py` zincirin
6. adımı olarak koşacak, yani üretim **bitmiş** olacak ⇒ daha kısa
sürmesi beklenir.
⇒ ***Zaman aşımı kilitlenmesi için 14,5 kat yavaşlaması gerekirdi.***
Bu yol kapalı.

📌 Ve Ö-D1'in dayanağı bir tahmin değildi: `denetle_yayin.py:1311`
yorumu `durum_tablosu`yu çağırmama gerekçesini *"içeride `denetle.py`
koşuyor ve kapıyı **DAKİKALARA** çıkarırdı"* diye yazıyor. O yorum
**doğru çıktı** — ve bir yorumun ölçümle doğrulanması, bu depoda üç kez
tersi olduktan sonra kayda değer.

## ② İHLALLER — TAM İKİ TANE, ve DEVRALINAN ÖNCÜL DOĞRULANDI
```
✗ satırı toplam: 2   (tam sayım, `grep -c`)

Değişmez 7  ✗  661 sorgusuz enklav (beklenen 660)
Ek denetim  ✗  mükerrer madde: 3 şüpheli çift (beklenen 0)
```
🔴 **Ö-D3 ÇÜRÜDÜ ve mazereti yoktu** — *"üçüncü bir ihlal olacak"*
dedim, çıkmadı. ⇒ **1.MURAT'ın eski notundan devraldığı öncül
DOĞRULANDI: gece planı EKSİK DEĞİL.**
🟢 Ve bu, çürümesi **iyi haber** olan bir öngörü: kendi öngörümün
çürümesi, koordinatörün runbook'unun tam olduğunu gösteriyor.

## ③ GEÇEN 18 DENETİM — «geçti» değil, «bugün ötmüyor»
```
✓ Değişmez 1 (3805 yerleşim · 314 sahipsiz) · 1b · 1c · 2 · 2s · 2i · 2t
✓ Değişmez 4 (9 hayalet) · 4c 133 · 4d 358 · 4s 6 · 5
✓ dönem sağlığı · konum (0 nokta maske dışında)
i Değişmez 3z · 5b · 5c · savaş senkronu · künyesiz kimlik — BİLGİ dalı
```
⚠️ `i` damgalı satırlar **ihlal değil ama temiz de değil** — denetimin
kendi ifadesiyle: *"898 dönem KÜNYESİZ kimlik kullanıyor (23 ayrı
kimlik) — **ölçülemedi, İHLAL DEĞİL ama TEMİZ de değil**"*. Bir sayım
onları *"geçti"* diye toplarsa üç kovayı bire indirmiş olur.

## 🟢 YARIM DOSYA KAPISI — İKİ UÇTAN DA TEMİZ
```
denetle.py         22:58:26 → 23:01:12
data/donemler.js   mtime 2026-09-07 07:10:59   ← ÖLÇÜMDEN ÖNCE ve SONRA AYNI
```
Koşu 8 ölçüm penceresinde `donemler.js`e yazmadı ⇒ yarım dosya
okunmadı. (1.MURAT'ın uyardığı risk; önden kapı koymamıştım, sonradan
`mtime` ile kapatıldı — ve bitişte **tekrar** bakıldı.)
⚠️ Sınırı yazılı: `mtime` **aynı baytlarla yeniden yazma**yı görmez
(`§11`de `motor_kara` vakası). Onu ancak önden alınmış bir sha256
görürdü.

## ⚠️ VE BİR YAN GÖZLEM — §1.5 TABLOSU BUGÜNE GÖRE BAYAT
Bugünün ölçümü ile `CLAUDE.md §1.5` arasında fark var:
```
                     §1.5      bugün
Değişmez 2 kırılma    523       522
2s YABANCI kırılma   1319      1327
2i İŞGAL kırılma       47        62
4c                    (—)   133 (beklenen 138)
4d                    (—)   358 (beklenen 409)
```
🟡 **Bu bir kusur değil, tablonun ÜRETİLMEMİŞ olması** — `§1.5` kendi
başlığında *"BU TABLO ELLE YAZILMAZ — ÜRETİLİR: `py arac/durum_tablosu.py
--yaz`"* diyor. Koşu 8'den sonra zaten üretilecek. **Kayda geçiriyorum,
düzeltmiyorum** (`CLAUDE.md` benim kalemim değil).
