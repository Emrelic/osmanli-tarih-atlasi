# ÖLÇÜM — 26 madde · dördü de makineyle cevaplanabilir

```
AD        ÖLÇÜM
MODEL     Sonnet
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya + oturumlar/ORTAK-PAKET-KURALLARI.md  ← ÖNCE ONU OKU
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

## 1. İŞİN — dört küçük küme, ortak özellikleri MAKİNEYLE ÖLÇÜLEBİLİR OLMASI

```
denetim/kume/degismez2.md          10   kırılma gününün maddesi var mı
denetim/kume/renk-kimlik.md         6   kimliğin rengi var mı, dönemi var mı
denetim/kume/koridor-agi.md         4   BEŞ-ALTYAPI'nın beşinci unsuru
denetim/kume/olculdu.md             6   ölçülmüş, hükmü kapatılmamış
                                   ──
                                    26
```

## 2. ① DEĞİŞMEZ 2 — 10 madde, TEK KOŞUDA cevaplanır

Hepsi aynı soruyu soruyor: *"bu kırılma gününün ±30 gün içinde kronoloji
maddesi var mı?"*

🟢 **Ve cevabı muhtemelen ZATEN VAR:** bugünkü denetim
**`521 kırılma, 0 açık`** diyor. Yani ölçüt sağlanıyor.
```bash
py arac/denetle.py 2>&1 | grep -i "degismez 2"
```
⚠️ Ama **madde madde doğrula.** `0 açık` demek *"her kırılmanın ±30 günde
bir maddesi var"* demektir; **o maddenin DOĞRU madde olduğunu söylemez.**
Emre'nin şikâyeti çoğu zaman ikincisi: *"değişim alakasız bir maddenin
altında belirdi."*
⇒ Her madde için: kırılma günü → en yakın kronoloji maddesi → **konusu
gerçekten o mu?** Değilse hüküm `sirada` kalır ve **KRONOLOJİ İÇERİK'e**
devredilir (tahtadan doğrudan yazabilirsin).

## 3. ② RENK KİMLİK — 6 madde

Her biri için üç ölçüm:
```bash
py -c "import sys;sys.path.insert(0,'arac');import renkler;print(renkler.BOYALAR.get('<kimlik>'))"
grep -c 'd:"<kimlik>"\|"d":"<kimlik>"' data/*.js
```
```
① renkler.py'de rengi VAR mı
② VERİDE o kimliğin dönemi VAR mı        ← asıl soru bu
③ künyesi devletler.js'te ne diyor
```
🔴 **Bugün ölçülmüş bir tuzak:** `merini` için *"harita: alanı yanlış"*
diye rapor edildi; **teşhis yanlıştı** — renk vardı, **veride 0 dönem**
olduğu için görünmüyordu. Alan düzeltilseydi renk yine görünmeyecekti.
⇒ **Doğru hüküm, yanlış teşhisle gelebilir. Sebebi kendin ölç.**

⚠️ `arac/renkler.py` motorun parmak izlediği üçlüde. **Yazmadan önce
koordinatöre "koşu var mı" diye sor** — koşu sırasında yazmak koşuyu öldürür
(8 Ağustos'ta 83 dakikalık bir koşu böyle öldü).
🔴 Renge dokunduysan **`py arac/renk_olc.py` koştur** — palet verinin
fonksiyonudur, renge dokunmadan bile çakışma doğabiliyor.

## 4. ③ KORİDOR AĞI — 4 madde

Bunlar `BES-ALTYAPI.md`nin **beşinci unsuru** ve zaten planlı iş. Senden
istenen **yapmak değil ÖLÇMEK**:
```
① bugün koridor verisi var mı, hangi dosyada, kaç kayıt
② bu dört maddenin istediği şey o veriyle karşılanıyor mu
③ karşılanmıyorsa NE eksik — tek cümle
```
Hüküm muhtemelen `sirada` kalacak; değeri **ne kadar iş olduğunu** ölçmek.

## 5. ④ ÖLÇÜLDÜ — 6 madde, hükmü kapatılmamış

Notlarında `OLCULDU` geçiyor: ölçüm yapılmış, cevap yazılmış, ama hüküm
`sirada` bırakılmış. Senin işin: **cevabın hâlâ geçerli mi** diye bak,
geçerliyse `cozuldu` yaz, değilse niçin değil onu yaz.

## 6. 🔴 İKİ AYRI SATIR YAZ

Rapora *"ölçtüğüm şu"* ve *"bundan çıkardığım şu"* diye **ayrı** yaz.
Bugün bir günde **altı vaka** ölçüldü: sayı doğruydu, **çıkarım yanlıştı** —
ve altısının beşini denetim betiği değil **başka bir oturum** yakaladı.
Tek satırda birleşince çıkarım, ölçümün güvenilirliğini ödünç alıyor.

## 7. TESLİM

```
denetim/HUKUM-OLCUM.json
denetim/BULGU-OLCUM.md
```
Rapor sayıyla, küme küme: *"26 → N kapandı, M'si şu oturuma devredildi."*
Küme bitince **hemen** bildir — dördünü birden bekleme.
