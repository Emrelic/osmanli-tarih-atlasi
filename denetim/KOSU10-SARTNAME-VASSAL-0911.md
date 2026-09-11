# ŞARTNAME — KOŞU 10 İÇİN VASSAL RENK TEŞHİSİ (11 Eylül 2026)

Bu bir uygulama değil, bir TEŞHİS + ŞARTNAMEDİR. `arac/` ve `data/`
donuk olduğu için UYGULANMADI.

## 🔴 ÖNCE — ①'İN KABUL ÖLÇÜTÜ NEDEN TAM KARŞILANAMIYOR

Sevk şunu istedi: *"Tunus'a tıklayınca 1881-1923 şeridi artık 'Osmanlı
tâbi' DEMİYOR."* `_yerlesimSerit`'i düzelttim (`kid:` artık okunuyor,
bkz. `denetim/BULGU-VASSAL-RENK-0911.md`) ama **Tunus'un KENDİ `v:`
kaydında bugün `kid:` alanı YOK** — düzeltme doğru çalışıyor ama
Tunus'a UYGULANACAK VERİ eksik. Bu js-içi bir eksiklik değil, VERİ
eksikliği (`data/` donuk, eklenemedi).

**Ve "isg:'den kestir" gibi bir JS-only kısayol da GÜVENİLİR DEĞİL —
ölçüldü:**
```
v: ile TAM AYNI ANDA biten isg: kaydı olan 14 yerleşim bulundu:
  EGYPT (8 nokta): v:1805-1914 (kid:misir-kavalali) + isg:1882-1914
                   İngiltere — bu GERÇEKTEN geçici işgal, Mısır
                   1914'e kadar NOMİNAL Osmanlı-Kavalalı tâbisi
                   KALDI (Osmanlı hükümranlığı resmen 1914'te bitti)
                   ⇒ "Osmanlı tâbi" DOĞRU, DEĞİŞMEMELİ
  TUNUS (6 nokta): v:1705-1923 (kid:YOK) + isg:1881-1923 Fransa —
                   bu GERÇEK, KALICI bir himaye (1956'ya kadar sürdü)
                   ⇒ "Osmanlı tâbi" YANLIŞ, DEĞİŞMELİ
```
⇒ **İki grup da "isg: v:'nin sonuna kadar sürüyor" örüntüsüne uyuyor,
ama biri doğru biri yanlış.** Bu örüntüyü otomatik "kalıcı himaye"
sayan bir JS kuralı Mısır'ı da YANLIŞLIKLA çevirirdi. **Ayırt edici
tek bilgi `kid:`in KENDİSİ — ve o veri katmanında eksik.**

## D077 SORUSU — HATA MI KAPSAM EKSİĞİ Mİ?

**KAPSAM EKSİĞİ.** `v:` mekanizması ve `js/app.js:4838-4840` +
motorun `y["d"]+y["v"]` birleştirmesi, dizinin **77 kayıtlık ilk
hâlinde** ("yalnız Osmanlı'nın komşuları") yazıldı — o evrende HER
`v:` GERÇEKTEN Osmanlı'ya tâbiydi, `§3`ün *"OSMANLI ile tâbi çelişki
SAYILMAZ"* muafiyeti bu varsayımla TUTARLIYDI. Dizin dünya ölçeğine
büyürken (Tunus'un Fransız himayesi gibi) bir ÜÇÜNCÜ durum ortaya
çıktı — *"tâbi ama süzeren Osmanlı DEĞİL"* — ve `v:` şeması bunu hiç
öngörmedi. `kid:` alanı SONRADAN eklendi (muhtemelen Kırım/Boğdan/Eflak
gibi Osmanlı-AİLESİ alt-kimlikleri ayırt etmek için) ama "süzeren
Osmanlı mı değil mi" sorusunu hiç sormadı — çünkü o soru dizinin
ORİJİNAL sınırları içinde hiç gündeme gelmemişti.
📌 `D077`: *"bir tutarsızlık bir tercih değil, bir eksiğin sonucu
olabilir"* — burada TAM ÖRNEĞİ: tutarsızlık (Tunus'un yanlış rengi)
kimsenin BİLEREK seçtiği bir tasarım değil, dizin büyürken şemanın
GENİŞLETİLMEMİŞ bir köşesi.

## MOTOR TARAFI — TAM TEŞHİS (4 satır numarası)

```python
# arac/uret_petek.py — y["d"] + y["v"] TEK "Osmanlı" kategorisi sayan
# DÖRT yer (hepsi KIRILMA TARİHİ toplama amaçlı, ama aynı zamanda
# "bu dönem OSMANLI'DIR" varsayımını da taşıyor):
satır 2899   for dn in y["d"] + y["v"]:              # global kırılma tarihleri
satır 4481   for _wdn in YERLER[_wj]["d"] + YERLER[_wj]["v"]:
satır 4545   for dn in YERLER[j]["d"] + YERLER[j]["v"]:   # ← _yabanci_devlet_faz1() İÇİNDE (satır 4537)
satır 4627   for dn in YERLER[j]["d"] + YERLER[j]["v"]:   # ← aynı ailenin bir varyantı
```
🟡 **4545'in bağlamı ÇÖZÜLDÜ:** bu satır `_yabanci_devlet_faz1()`
fonksiyonunun İÇİNDE (tanım satır 4537) — bu fonksiyon YALNIZ `s:`
(yabancı devlet) petek geometrisini üretiyor; `d:`+`v:` burada `s:`
periyodunu KESEBİLECEK "bu aralık Osmanlı'nın" sinyalini vermek için
kullanılıyor (breakpoint hesabı), `v:`nin KENDİ kimliğini ATAMIYOR.
⇒ Bu 4 satırın HİÇBİRİ `v:`ye RENK/KİMLİK ATAMIYOR — hepsi yalnız
KIRILMA TARİHİ topluyor. `v:`nin KENDİSİNİN "Osmanlı tâbi" rengini
NEREDE aldığı (muhtemelen ayrı, daha temel bir petek-boyama bloğunda,
BOYALAR sözlüğünün dışında çünkü Osmanlı doğrudan/tâbi çekirdek renk
şeması) bu oturumda KESİN olarak BULUNAMADI (motor ~5500 satır, zaman
kısıtı, donuk olduğu için derin izleme yapılamadı). **D107: bulunamadı
— bir sonraki oturumun İLK işi bu kod konumunu bulmak olmalı.**

## ŞARTNAME — Koşu 10'da yapılacak İKİ değişiklik

```
① MOTOR (arac/uret_petek.py):
   Kimlik/renk kararı hangi satırda veriliyorsa (yukarıdaki 4 satırın
   AŞAĞISINDA aranmalı), `v:` girdisinin `kid:` alanına bakılmalı:
   `kid:` VARSA ve `devletler.js`teki o kid'in `tabi.ust` alanı AÇIKÇA
   "osmanli" DIŞINDAysa → petek o kid'in KENDİ kimliği/rengiyle
   boyanmalı (BOYALAR[kid] var mı diye bakılmalı, yoksa yeni bir renk
   TANIMLANMALI — bu ayrı bir küçük görev, `arac/renkler.py`).
   `kid:` YOKSA ya da kid Osmanlı-ailesindense → BUGÜNKÜ davranış
   (Osmanlı tâbi) KORUNUR — js/app.js'teki VASSAL RENK düzeltmesiyle
   BİREBİR AYNI mantık, motor tarafına TAŞINMALI.

② VERİ (data/yerlesimler.js):
   Tunus, Kayrevan, Sfaks, Gabes, Cerbe, Kerkene'nin `v:` kaydı
   İKİYE bölünmeli:
     v:[{f:"1705-07-17",t:"1881-05-12",statu:"vassal"}]  (Osmanlı tâbi, DEĞİŞMEZ)
     v:[{f:"1881-05-12",t:"1923-10-29",statu:"vassal",
         kid:"tunus-beyligi-fransiz"}]                   (YENİ — künye
                                                           önce açılmalı,
                                                           bkz. TUNUS
                                                           oturumunun
                                                           taslağı)
   Kandiye/Hanya/Girit-Resmo/Sfakia/Sitia için benzer bölme (1830-1841
   Mısır-Kavalalı, 1898-1913 Girit Devleti — kid:"girit-devleti" ZATEN
   VAR olan bir künye).
   Kütahya/Konya/Karaman'ın 1832-33 kaydı `v:`den `isg:`ye TAŞINMALI
   (bu Osmanlı ÇEKİRDEK toprağının GEÇİCİ Mısır-ordu işgali, "tâbi"
   değil).

③ SIRA: ① motor değişmeden ② veri değişse HİÇBİR ŞEY OLMAZ (motor
   kid:'i okumuyor); ② veri değişmeden ① motor değişse de HİÇBİR ŞEY
   DEĞİŞMEZ (Tunus'ta hâlâ kid: yok). İKİSİ BİRLİKTE, aynı koşuda.
```

## ÖLÇÜM — kaç künye/dönem/km² Osmanlı-dışı bir süzerene tâbi

```
🔴 BUGÜN (kid: ile açıkça işaretli):     0 künye · 0 dönem · 0 km²
   (13 kid değeri hepsi Osmanlı-ailesinden, ölçüldü — bkz. VASSAL RENK)

🟡 OLMASI GEREKEN (kid:siz, elle tanınan GERÇEK Fransız/Mısır/Girit
   tâbiliği — TAM liste değil, örnek/belirgin taranan):
   Tunus ailesi (6 nokta)        1881-1923, 42 yıl   km²: ÖLÇÜLEMEDİ
   Kandiye/Hanya/Resmo/Sfakia/
     Sitia (5 nokta) × 2 dönem   1830-41 + 1898-1913 km²: ÖLÇÜLEMEDİ
   Kütahya/Konya/Karaman (3)     1832-33, 10 ay      km²: ÖLÇÜLEMEDİ
   ⇒ EN AZ 14 künye, ~4 dönem grubu

🔴 km² ÖLÇÜLEMEDİ bu turda — petek alanı yalnız MOTOR ÇIKTISINDAN
   (donemler.js / canlı haritadan tek tek tıklayarak) okunabiliyor,
   toplu bir alan sorgusu bu oturumda kurulamadı (zaman kısıtı).
   D107: `ölçülemedi`, `bulunamadı` DEĞİL — bir sonraki oturum
   `data/donemler.js`deki PARÇA/HALKA alanlarını toplayarak
   hesaplayabilir.
```
