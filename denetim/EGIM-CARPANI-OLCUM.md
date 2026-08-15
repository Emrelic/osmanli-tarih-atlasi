<!-- DURUM: BITTI ¦ 2026-08-15 ¦ eğim çarpanı ÖLÇÜLDÜ, uydurulmadı -->
# EĞİM ÇARPANI — ÖLÇÜM · `T-0112`

Alet: `arac/egim_olc.py` · Sınav kümesi: **44 kara seferi güzergâhı**
(`data/savaslar.js` → `SEFERLER`, 61 kayıttan kara olanlar)

## NİÇİN ÖLÇÜLDÜ, UYDURULMADI

`ALTYAPI §1.2b` kayıtlı vaka: ağırlık tablosu bir kez uydurulmuştu
(`1,00 / 0,70 / 0,45 / 0,00`) ve *"bu sayılar hiçbir şeye
dayanmıyordu"*. Ölçüm onu değiştirdi.

`T-0112`nin fikri (üreteç önerdi, Emre 14 Ağustos'ta onayladı):
> *"Bir maliyet yüzeyi DOĞRUYSA, en ucuz yolu gerçek sefer
> güzergâhlarına BENZEMELİDİR. Elimizde HAZIR bir doğrulama kümesi var
> ve hiç kullanılmadı. Emre askerî doktrin sormuştu; **en iyi doktrin
> dışarıda değil içeride.**"*

## ÖLÇÜM

Her sefer için A→B en ucuz yol hesaplandı ve **gerçek güzergâha
ortalama sapması** ölçüldü. Izgara 0,05° (~6 km).

```
çarpan     sefer   ort. sapma    medyan
0.000        42      88,2 km     52,7 km     ← eğim YOK (bugünkü motor)
0.005        42      71,9 km     36,4 km     ← 🟢 EN İYİ
0.010        42      72,6 km     38,9 km
0.020        42      73,9 km     38,9 km
0.050        42      75,5 km     36,1 km
0.100        42      77,4 km     37,3 km
```

## 🟢 BULGU ① — EĞİM SAYMAK, SAYMAMAKTAN AÇIKÇA İYİ

```
0 → 0,005    ortalama  88,2 → 71,9 km    (−%18,5)
             medyan    52,7 → 36,4 km    (−%30,9)
```
Bugünkü motor eğimi **hiç saymıyor** (`_nd = _d + hypot(...)`, ağırlıksız).
Ölçüm, saymanın gerçek seferlere **%19-31 daha yakın** yol ürettiğini
gösteriyor.

## 🔴 BULGU ② — VE BU DAHA ÖĞRETİCİ: EĞRİ DÜZ

0,005'ten sonra sapma **artıyor**, ve 0,005 ile 0,1 arası fark yalnız
5,5 km — yani **20 kat büyüyen bir çarpan, sonucu %8 değiştiriyor.**

⇒ Ölçüm *"çarpan tam olarak 0,005'tir"* DEMİYOR. Dediği şu:
```
🟢 SIFIR OLMAMALI        — bu kesin, ve en büyük kazanç ilk adımda
🟡 0,005-0,02 arası      — hepsi birbirine yakın, ayırt edilemiyor
🔴 0,05 üstü             — kötüleşiyor, ordu dağdan fazla kaçmış olur
```

📌 **Ve bu düzlük bir kusur değil, verinin sınırının kaydı.** Üç sınır
ölçümden ÖNCE yazılmıştı ve üçü de bu düzlüğü açıklıyor:
```
① güzergâh verisi KABA — `yol:` alanı 3-6 düğüm, gerçek patika değil
② ordular EN UCUZ yolu değil STRATEJİK yolu izler: ikmal · su ·
   tâbi şehirler · düşmandan kaçınma
③ deniz geçen seferler elendi ve "uyuşmadı" SAYILMADI
```
⇒ 72 km'lik kalan sapmanın ne kadarı çarpandan, ne kadarı ②'den
geliyor — **ÖLÇÜLMEDİ.** Çarpanı daha ince ayarlamak, gürültüyü
kalibre etmek olurdu.

## HÜKÜM — öneri, karar koordinatörün/Emre'nin

```
EGIM_CARPANI = 0.005      metre başına ek sürtünme
```
Yani 100 m'lik bir eğim farkı hücre bedelini **%50** artırır; 400 m'lik
bir sırt **3 katına** çıkarır. Deniz zaten sonsuz.

⚠️ **VE ÜRETİME ALINMADAN ÖNCE TEK DEĞİŞKENLİ KOŞU ŞART.** Motorun
Dijkstra'sı (`uret_petek.py:1486`) bugün ağırlıksız; oraya çarpan
eklemek **sahiplik ızgarasını** değiştirir, yani hangi peteğin nereye
uzandığını. `A1 tavanı` vakası: doğru çalışan bir düzeltmeyi sonraki
aşama geri alabiliyor ve onu ancak **önceden yazılmış bir cümle**
yakalar.

## ÖLÇÜLMEYENLER — açıkça
```
· 72 km'lik kalan sapmanın kaynak dağılımı (çarpan mı, strateji mi)
· nehir geçiş bedelinin etkisi — bu ölçümde nehir HİÇ YOK
· ızgara adımının (0,05°) sonuca etkisi — tek adımla ölçüldü
· mevsim/ordu büyüklüğü — güzergâh verisi bunu taşımıyor
· deniz seferlerinin kara ayakları (elendi, ayrı kova)
```
