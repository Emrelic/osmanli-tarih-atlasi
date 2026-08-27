# MOTOR — DOĞAL SINIR: nehir sürtünmesi ve dağ orta ekseni

```
AD        MOTOR DOĞAL SINIR
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya + oturumlar/ORTAK-PAKET-KURALLARI.md
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

🔴 **BU ŞARTNAME BEKLİYOR.** `arac/uret_petek.py`nin tek sahibi var ve şu an
`MOTOR ÜÇ KALEM` oturumunda; koşu onu bekliyor. Bu iş **o koşu bittikten
sonra** başlar. Şimdi yazılmasının sebebi: Emre'nin tarifi taze ve tam,
bayatlamadan kaydedilmeli.

---

## 1. ① NEHİR SÜRTÜNMESİ — Emre'nin DÖRT KURALI

Emre'nin kendi cümleleri (27 Ağustos 2026, üç ekran görüntüsüyle birlikte —
Vidin · Niğbolu · Silistre çevresinde Tuna'nın iki yakası):

> *"Bu Tuna nehri şehirlerin bölgelerini direkt kısıtlayan bir şey
> olmamalı mı? Eğer geçit noktasında değilse bir şehrin bölgesi karşı
> tarafa geçiyor olmamalı sanki. Ya da **sürtünme kuvvetine göre**
> hesaplamak lazım."*

```
① İKİ YAKADA İKİ ŞEHİR
   Her şehir nehrin KENDİ yakasındaki bölgeyi alır, sınır NEHRE DAYANIR.

② GEÇİT NOKTASINDAKİ ŞEHİR
   Şehir tam geçitteyse ve nehrin İKİ yakasında da toprağı varsa,
   nehir o şehrin bölgesi için SINIR OLAMAZ.

③ TEK YAKADA ŞEHİR, KARŞI TARAF UZAK, GEÇİT YOK
   Karşı taraftaki şehir nehri geçebilir — ama yalnız
   "GEÇİŞ SÜRTÜNMESİ + UZAKLIK" dengeye vardığı noktaya kadar.

④ İKİ ŞEHİR NEHRE BENZER UZAKLIKTA
   Bölge sınırı NEHRE YASLANIR.
```

### 🟢 DÖRDÜ TEK BİR MODELDEN TÜRÜYOR — ayrı ayrı kodlanmaz

Bu dört kural bir **ek maliyetli mesafedir**:
```
mesafe(sehir, hucre) = geodezik(sehir, hucre) + SURTUNME * nehir_kesme_sayisi
```
`SURTUNME` bir km cinsinden ceza. Sonra:
```
① iki yakada iki şehir  →  ceza her ikisine simetrik → sınır nehre oturur   ✓
② geçit noktası          →  o şehir için ceza 0 (geçit tanımlı)             ✓
③ tek yaka + uzak komşu  →  ceza SABİT, uzaklık ARTAN → denge noktası doğar ✓
④ benzer uzaklık         →  ①'in özel hâli                                  ✓
```
⇒ **Dört kural bir tek parametrenin sonucudur.** Ayrı dallar yazma; tek
mesafe fonksiyonu yaz, dördü kendiliğinden çıksın. Çıkmıyorsa modelin
yanlıştır — dal ekleyerek düzeltme.

### GEÇİT NOKTASI nasıl bilinir
```
🟢 VERİDEN   şehir kaydında `gecit:true` (ya da `tur:"gecit"`) alanı
🟡 ÇIKARIMLA şehrin nehre uzaklığı < ~5 km VE nehir orada tek kol
🔴 UYDURMA   "büyük şehir geçittir" gibi varsayım — YASAK
```
⚠️ Yeni alan icat etmeden önce **var olanı ÖLÇ** (`git grep gecit`). Bu
projede bir alan iki kez icat edildi, ikisi de zaten vardı.

### 🔴 SURTUNME DEĞERİ ÖLÇÜLECEK, SEÇİLMEYECEK
Emre bir sayı vermedi, **model** verdi. Değeri sen ölç:
```
① birkaç aday değer dene (25 · 50 · 100 · 200 km)
② her biri için: kaç petek nehri geçiyor · Tuna hattı ne kadar düzleşiyor
③ Emre'nin üç görüntüsündeki üç yeri (Vidin · Niğbolu · Silistre)
   AYRI AYRI ölç ve tabloyla göster
④ ÖNERİNİ gerekçesiyle yaz — kararı Emre verir
```

---

## 2. ② DAĞ ORTA EKSENİ — "sırt" bugün YANLIŞ hesaplanıyor

Emre'nin sorusu (Kafkasya, 1594 görüntüsü — Sohum · Kutaisi · Kabartay ·
Tiflis):
> *"Bu şehirlerin petek alanlarının Kafkas dağlarında kesilmesi ve Kafkas
> dağlarının **en zirvelerinin sırtlarının** kendi tarafından geçmesi
> beklenmez mi? **Dağın yarısı bu taraftaki yerleşimde, diğer yarısı da
> dağın öbür yanındaki yerleşimde** olması beklenmez mi?"*

### 🔴 ÖLÇÜLDÜ (`arac/_kafkas_sirt.py`) — veri VAR, süzgeç GEÇİRİYOR
```
CAUCASUS MTS.     Range/mtn  alan 16,963  ✓ sınıf geçer ✓ alan geçer ✓ çekirdek var
Lesser Caucasus   Range/mtn  alan  4,145  ✓
motorun kurduğu sırt: KAFKASYA'DA 4 PARÇA — yani hat VAR
Kutaisi 19 km · Batum 18 km · Tiflis 28 km · Kabartay 39 km → eşik İÇİNDE
Sohum 68 km → tek eşik dışı
```
⇒ *"Kafkasya'da dağ verisi yok"* hükmü **YANLIŞ olurdu.** Kusur başka yerde.

### 🔴 GERÇEK KUSUR — `uret_petek.py:593`
```python
cekirdek = g.buffer(-0.12)
SIRTLAR.append(cekirdek.boundary if not cekirdek.is_empty else g.boundary)
```
`buffer(-0.12)` poligonu ~13 km içeri çeker; `.boundary` onun **halkasını**
verir. Geniş bir sıradağda bu, **zirve hattı değil, kuzey eteği + güney
eteği** demektir — iki paralel çizgi.

```
BUGÜN olan     sınır dağın BİR ETEĞİNE yaslanıyor,
               dağın bütün kütlesi TEK tarafa düşüyor
EMRE'NİN istediği   sınır ZİRVEDEN geçsin, dağ İKİYE bölünsün
```
📌 Dar bir sıradağda ikisi çakışır (çekirdek incelir), o yüzden kusur
yıllarca görünmedi. **Kafkasya gibi geniş kütlelerde ayrışıyor.**

### ÇARE — orta eksen (medial axis)
```
🟢 ÖNERİ   poligonun ORTA EKSENİNİ çıkar, sırt olarak onu kullan
           shapely: sınır noktalarından `voronoi_diagram` kurup
           poligon İÇİNDE kalan kenarları al — medial axis yaklaşımı
🟡 UCUZ ALTERNATİF  ardışık negatif buffer: g.buffer(-k) k büyüdükçe
           kütle inceliyor; kaybolmadan önceki son çekirdek ≈ eksen
🔴 EN İYİ ama PAHALI  gerçek yükseklik verisiyle su bölümü çizgisi
           (veri-kaynak'ta yükseklik rasteri VAR MI — ÖLÇ, varsayma)
```
🔴 **Hangisini seçersen seç, ÖNCE ÖLÇ:** yeni sırt hattıyla eski hat
Kafkasya'da ne kadar ayrışıyor (km)? Ayrışma küçükse iş değmez.

### ⚠️ VE İKİNCİ BİR ŞEY: Sohum eşik DIŞINDA (68 km)
`sirt_mes = 0.35` (~39 km). Sohum'un peteği sırta hiç yaslanamıyor.
Eşiği büyütmek **cazip ama tehlikeli** — her yerde etkili olur.
⇒ Eşiği değiştirmeden önce **kaç petek etkilenir** ölç; büyükse Emre'ye sor.

---

## 3. 🔴 ÖNGÖRÜ — koşudan ÖNCE yazılacak, mazeretli/mazeretsiz AYRI

```
① nehir sürtünmesi   kaç petek nehri geçmeyi bırakır · Tuna hattı kaç km
                     düzleşir · Vidin/Niğbolu/Silistre AYRI AYRI
② dağ ekseni         Kafkasya'da sınır kaç km kayar · kaç petek etkilenir
🔴 TOPLAM            Osmanlı doğrudan + tâbi TOPLAMI ne olur
```
⚠️ Sonuncusu her motor değişikliğinin sınavı. `TABI` kademesi bu sınavla
geçti (1800-06-15'te toplam **+%0,38** — alan kaybolmadı, yer değiştirdi).
Ve **hangi kalemin mazereti olabileceğini de önceden yaz** — sonradan
yazılan mazeret, bulguyu açıklanabilir kılar ve hiçbir şey öğretmez.

## 4. DOSYA SAHİPLİĞİ

```
🟢 SENİN   arac/uret_petek.py · denetim/BULGU-DOGAL-SINIR.md
🔴 DEĞİL   data/*.js · js/* · arac/renkler.py · arac/girdi.py · kök *.md
```
⚠️ `renkler.py` ve `girdi.py` motorun parmak izlediği üçlüde — koşu
sırasında değişirlerse koşuyu öldürürler.
🔴 **KOŞUYU SEN BAŞLATMA.** Yazımı bitir, öngörüyü yaz, tahtaya "hazır" de.

## 5. HABERLEŞME
```bash
py arac/tahta_bekci.py --kim "MOTOR DOĞAL SINIR" --ara 60
py arac/tahta.py yaz --kim "MOTOR DOĞAL SINIR" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
