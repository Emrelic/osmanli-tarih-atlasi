# ÖLÇÜM — A/B GÖRÜNÜM ALTYAPISI

**Oturum:** KURE GORUNUM · 1.MURAT sevki, kalem ② · 6 Eylül 2026
**Cins:** ÖLÇÜM — kod yazılmadı, `uret_petek.py` **okundu, yazılmadı**
(koşu 6 sürüyor), veri yazılmadı.

> Emre: *"…boşluk kapatma, enklav birleştirme, koridor doldurma, iki
> devlet arası boşluk paylaştırma gibi fonksiyonları kullanarak…
> A ve B görünümü… ikinci görünümde sadece tavana göre yerleşimlerin
> bölge aldığı ve geniş boşlukların, enklavların, koridorların,
> beneklerin olduğu görünüm."*

---

## SONUÇ — ÜÇ CÜMLE

```
🟢 FONKSİYONLARIN BEŞİ DE VAR, ve dördü zaten ANAHTARLA kapatılabiliyor
🟢🟢 A ve B AYNI DÖNGÜDE İKİ DEĞİŞKEN — ikinci koşu GEREKMİYOR
🔴 GERÇEK MALİYET ÇIKTI BOYUTU, ve "B" nin hangi B olduğuna göre
   ihmal edilebilir ya da +32 MB
```

## ① (a) FONKSİYONLAR VAR MI — BEŞİ DE VAR

| istenen | kod | satır |
|---|---|---|
| boşluk kapatma | `kapat(g, yaricap=0.15)` — morfolojik kapama, ≈33 km | 1264 |
| delik doldurma (B1) | `delikleri_doldur(g, muaf, sahip_ix)` | 1331 |
| enklav birleştirme (B2) | `_b2_enklav_birlestir(g, sahip_ix)` | 1512 |
| koridor kırpma (B3) | `_b3_koridor_kirp(g, sahip_ix)` | 1614 |
| A1 yarıçap tavanı | `_tavan_cokgen` · `TAVAN_KM = {1..4,0: 200}` | 1066 · 900 |
| çöl tavanı | `COL_TAVAN_KM = 300.0` | 2637 |

🟢 **VE DÖRT ORTAM ANAHTARI ZATEN VAR:**
```
MOTOR_B23_KAPALI=1     B2 + B3 devre dışı   (:1406 `B23_ACIK`)
MOTOR_DOLGU_KAPALI=1   ekleyici kapı        (:4206 `DOLGU_ACIK`)
MOTOR_PUAN_KAPALI=1    puanlama kapısı      (:4100 `PUAN_KAPALI`)
MOTOR_EGIMSIZ=1        eğim çarpanı         (:447)
MOTOR_EGIM_AB_KAPALI   eğim A/B             (:2297)  ← adında "AB" var
```
Ve `:1402` niçin olduğunu yazıyor: *"KAPATMA ANAHTARI VAR VE BİLEREK…
Bir koşu 4 saat; kötü giderse kod düzenlemeden kapatılabilmeli."*

⇒ **Sevkin varsayımı — *"B görünümü bugünkü çıktıya yakın olabilir"* —
kısmen doğru ama eksik:** bugünkü çıktı A1 tavanıyla sınırlı, AMA
üstüne `kapat` + `delikleri_doldur` + B2 + B3'ün **hepsi uygulanmış**.
Yani bugünkü çıktı **A'dır**, B değil.

## ② (b) 🟢🟢 İKİ AYRI KOŞU GEREKMİYOR — A ile B ZATEN AYNI DÖNGÜDE

`uret_petek.py:4729-4757`, her dönem için:
```python
_gt_ham   = poligonal(delikleri_doldur(kapat(union(tabi))).intersection(KARA))
_g_ham    = poligonal(delikleri_doldur(kapat(union(dogrudan))).intersection(KARA))
_birlesik = unary_union([_g_ham, _gt_ham])          # ← B (dar)  : B1 uygulanmış
_duzelt   = gosterim_duzelt(_birlesik, aktif)       # ← A        : B2+B3 de uygulanmış
_kopru    = poligonal(_duzelt.difference(_birlesik))# ← FARK, ZATEN HESAPLANIYOR
```
🔴 **Yani motor A'yı, B'yi ve FARKLARINI üçünü de HESAPLIYOR** — ve
farkı `_kg` / `_kt` diye ikiye ayırıp (hangi gövdeye yaslandığına göre,
`:4773-4775`) gövdelerin **içine katıyor.** Çıktıya yalnız **A** gidiyor.

🟢 Ve fonksiyonun adı bunu zaten söylüyor: **`gosterim_duzelt`** —
*"B2 + B3'ü sırayla uygular"*, yani bitmiş gövdeye uygulanan bir
**gösterim** adımı, pahalı geometrinin içine dokunmuş değil.

⇒ ***İkinci bir 20 saatlik koşu GEREKMİYOR.*** Eksik olan hesap değil,
**çıktıya YAZMA.**

## ③ 🔴 AMA "B" İKİ FARKLI ŞEY — ve maliyetleri 30 MB ayrışıyor

```
B-DAR   = `_birlesik`  (kapat + delikleri_doldur UYGULANMIŞ, B2/B3 yok)
B-HAM   = `unary_union(_pe[...])`  (HİÇBİRİ uygulanmamış — saf tavan)
```
Emre'nin cümlesi **B-HAM'ı tarif ediyor**: *"geniş boşlukların,
enklavların, koridorların, **beneklerin**"*. `kapat` ≈33 km'den dar
boşlukları kapatır ve `delikleri_doldur` delikleri siler — yani B-DAR'da
benekler ve dar boşluklar **zaten yok.**

| | ne gerekir | ek çıktı |
|---|---|---|
| **B-DAR** | `_kopru`yu gövdeye katmak yerine **ayrı öznitelikle** yazmak (`kopru:true`) | 🟢 **ihmal edilebilir** — köprü geometrisi küçük (`:1683` ölçümü: altı kesitte **karasal enklav 7**, denizaşırı 761 zaten reddediliyor) |
| **B-HAM** | `kapat`tan ÖNCEKİ birleşimi de yazmak | 🔴 **tam bir ikinci geometri kümesi** |

**Bugünkü çıktı boyutları (ölçüldü):**
```
data/devletler_harita.js   53,7 MB
data/donemler.js           32,0 MB
data/petek_govde.js         6,2 MB
```
⇒ B-HAM `donemler.js`i kabaca **iki katına** çıkarır (+~32 MB). Statik
bir sitede tarayıcıya inen yük olarak bu ciddi.

## ④ (c) ARAYÜZ — KATMAN GEÇİŞİ, AYRI DOSYA DEĞİL

```
B-DAR için:  köprü parçaları AYRI BİR KATMAN olarak çizilir, gövdeyle
             AYNI RENKTE. A = gövde + köprü (birlikte çizilir) ·
             B = köprü katmanı GİZLENİR.
             🟢 Geometrik birleşim GEREKMEZ — bu, `imparatorluk-hale`nin
                zaten kullandığı "görsel birleşim" tekniğinin kardeşi
                (`app.js:993`: "gerçek birleşim tarayıcıda hesaplanamaz").
B-HAM için:  dönem başına İKİNCİ bir geometri alanı ⇒ kaynak değişimi,
             katman geçişi değil.
```
⚪ **`app.js`te bugün köprü katmanı YOK** (arandı, 0 sonuç) — köprü
motorda gövdeye katıldığı için arayüzün ondan haberi yok.

## ⑤ İKİ YOL VE BEDELLERİ — karar senin

```
YOL 1 · B-DAR          motor: `_kg`/`_kt`yi ayrı öznitelikle yaz
                       arayüz: bir katman + bir düğme
                       koşu: EK KOŞU YOK · boyut: ihmal edilebilir
                       🔴 AMA Emre'nin "benekler/geniş boşluklar"
                          tarifini KARŞILAMAZ

YOL 2 · B-HAM          motor: `kapat` öncesi birleşimi de yaz
                       arayüz: ikinci kaynak
                       koşu: EK KOŞU YOK · boyut: +~32 MB
                       🟢 Emre'nin tarifini KARŞILAR
```
🔵 Ben seçmiyorum. Ama şunu söyleyebilirim: **ikisi de tek koşu**, ve
aralarındaki fark bir hesap farkı değil bir **boyut** farkı. Sorunun
*"iki koşu mu tek koşu mu"* biçimi, ölçüldüğünde *"hangi B, ve o kaç
MB"* biçimine dönüşüyor.

## ÖLÇMEDİM
```
⚪ Köprü geometrisinin GERÇEK bayt boyutunu — `:1683`teki "7 karasal
   enklav" bir KESİT sayımı, bayt değil
⚪ B-HAM'ın gerçek boyutunu — "+32 MB" bugünkü dosyadan ÇIKARILMIŞ bir
   tahmin, ölçüm DEĞİL (ham gövde daha çok parça içerir, DAHA BÜYÜK de
   olabilir)
⚪ `MOTOR_B23_KAPALI=1` ile bir koşunun ne ürettiğini — koşu 6 sürüyor,
   deneme koşusu YAPILAMAZ
⚪ "iki devlet arası boşluk paylaştırma" — Emre bunu saydı, ben
   `uret_petek.py`de KARŞILIĞINI BULAMADIM. `delikleri_doldur`un
   `sahip_ix` argümanı buna benziyor ama AYNI ŞEY OLDUĞUNU ÖLÇMEDİM.
```
