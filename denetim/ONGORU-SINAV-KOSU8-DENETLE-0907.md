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
