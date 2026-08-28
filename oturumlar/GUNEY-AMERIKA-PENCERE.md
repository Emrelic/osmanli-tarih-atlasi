# GÜNEY AMERİKA PENCERESİ — bir sonraki koşunun hedefi

```
AD        GÜNEY AMERİKA PENCERE
MODEL     Opus
DİZİN     C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
ŞARTNAME  bu dosya + oturumlar/ORTAK-PAKET-KURALLARI.md
ClaudEmre koordinatör ORHANGAZİ · tahta: py arac/tahta.py
```

## 0. EMRE'NİN KARARI VE ONU DOĞURAN İTİRAZ

Emre pencereyi Güney Amerika'ya açmak istedi. `CLAUDE.md §6` bunu
yasaklıyordu:

> *"Nokta yoğunluğu sağlanmadan `BOLGE` kutusunu açma. Mevcut peteğin
> kenardakileri bütün dünyaya yayılır: **Kars'ın peteği Çin'i, Fas'ınki
> Atlantik'i boyar.**"*

🔴 **Emre bu gerekçeye itiraz etti ve ölçüm ONU HAKLI ÇIKARDI:**
> *"Deniz aşırı yerler boyanamaz, karşın yerleşimi Çin'i boyamaz — artık
> Çin devrede zaten. Fas koca okyanusu geçip nasıl boyayacak? Ayrıca düz
> arazi bile olsa tavan koymadık mı?"*

Ölçüldü — `§6` yazıldığında olmayan **üç koruma** bugün var:
```
① ADA KURALI              uret_petek.py:1731
   "Bir yerleşimin peteği KENDİ kara parçasının dışına taşamaz."
   ⇒ Fas okyanusu geçemez. YAPISAL OLARAK imkânsız.
② KARA-KISITLI SAHİPLİK   uret_petek.py:1819 — Dijkstra, kara ızgarasında
   ⇒ Sahiplik düz çizgiyle değil KARA YOLUYLA yayılıyor.
③ TAVAN_KM {1:700, 2:420, 3:280, 4:140}
   ⇒ Kars k2 ise 420 km'de duruyor.
```
🟢 **Ve doğrudan kanıt 28 Ağustos'ta elimize geçti:** koşu 1'de tavan
kısıldı ve kaybolan toprak **SAHİPSİZLEŞTİ, uzak bir komşuya GİTMEDİ**
(1800: 5.175.521 → 4.304.332, fark sahipsiz). `§6` doğru olsaydı o toprak
komşulara dağılırdı. Dağılmadı.
⇒ `§6`nın uyarısı **bayat.** Yasak kalkıyor, ama gerekçesi değişiyor:

🔴 **GERÇEK RİSK ARTIK "TAŞMA" DEĞİL "ANLAMSIZ DOLGU".** Seyrek bir kıtada
tavan taşmayı önler ama **dolgu kapısı** (`PUAN_ESIK`) boş peteği doldurmaya
çalışır — Sahra'da Emre'nin şikâyet ettiği davranışın ta kendisi.
*"Boşluk var diye anlamsız derecede boyamalar yapılsın istemiyorum."*

---

## 1. BUGÜNKÜ TABAN — ölçüldü, 28 Ağustos

```
kutu  -56..13 K / -82..-34 D      53 nokta
kademe   k1 13 · k2 20 · k3 17 · k0 3
künye    21 (bolge:"guney-amerika")
```
**Kapanmış olan:** And hattı ve kıyılar — İnka çekirdeği (Cusco · Chan Chan ·
Ollantaytambo · Huánuco Pampa · Hatun Colla · Chucuito), Muisca (Bacatá ·
Hunza), sömürge şehirleri (Lima · Cartagena · Caracas · Buenos Aires ·
Asunción · Montevideo · Georgetown · Cayenne · Olinda).
**Açık olan:** Amazon havzası içi · Patagonya · Gran Chaco.

---

## 2. İŞİN — ÜÇ ADIM, SIRASI BAĞLAYICI

### ① PENCEREYİ ÖLÇ (yazma, ölç)
Önerilen kutu:
```python
box(-82, -56, -34, 13)      # Güney Amerika
```
🔴 Ama **kendin doğrula**: bu kutu Orta Amerika'yı, Karayipler'i, Falkland/
Malvinas'ı kesiyor mu? Kesiyorsa kenarda yarım kalmış kara parçası doğar
ve o **ada kuralının bilmediği bir kusur** üretir.
```bash
py arac/_yer_ara.py --kutu -56 -82 13 -34
py arac/_yer_ara.py --kutu 5 -95 25 -60     # Orta Amerika/Karayip — taşıyor mu
```

### ② SAHİPSİZ ALANI ÖNCEDEN KESTİR — koşmadan
Her noktanın kademesine göre tavanı var. Kabaca:
```
k1 → 700 km yarıçap   k2 → 420   k3 → 280
```
53 noktanın tavan dairelerinin birleşimi kıtanın **yüzde kaçını** kaplıyor?
Kalan yüzde kaç **hiçbir peteğin menzilinde değil**?
🔴 Bu sayı işin kalbi. Güney Amerika ~17,8 milyon km².
```
menzil içi %X   → boyanacak (doğru ya da yanlış, ② ile ayrılır)
menzil dışı %Y  → SAHİPSİZ kalacak — harita orada BOŞ görünür
```
⚠️ Kaba bir daire hesabı yeter; Dijkstra'yı taklit etme. Emre'nin sorusu
*"ne kadarı boş kalır"* — üç haneli hassasiyet gerekmiyor.

### ③ DOLGU KAPISI — Sahra dersini uygula
`COL_PUAN_ESIK = 8` çölde dolguyu zorlaştırıyor ve **çalıştı** (koşu 1'de
14.468 petek-gün çölde takıldı). Amazon ve Patagonya aynı sınıftan mı?
```
AMAZON      yağmur ormanı · yerleşim seyrek · siyasî yapı kabile düzeyinde
PATAGONYA   bozkır/step · Mapuche ve Tehuelche · devlet sınırı YOK
GRAN CHACO  aynı sınıf
```
🔴 Ölç ve söyle: bu üç bölge için ayrı bir eşik gerekiyor mu, yoksa
`kasitli_bosluk` noktalarıyla mı çözülür?
📌 `CLAUDE.md §11`in ölçülmüş ayrımı burada geçerli — ve **cinsini
kaydetmek şart**:
```
kaynak AÇIKÇA konuşuyor  → bos:"devletsiz"   (bir daha bakılmaz)
kaynak SUSUYOR           → bos:"veri-yok"    (bakılacak)
```
İkisi haritada aynı görünür; fark yalnız **bir sonraki oturum için** vardır.

---

## 3. 🔴 ÖNGÖRÜ — KOŞUDAN ÖNCE YAZILACAK

Bu proje bir kuralı pahalı öğrendi: **sonradan yazılan beklenti ölçümü
gördükten sonra ona göre şekillenir ve hiçbir zaman yanlış çıkmaz — yani
hiçbir şey öğretmez.** 28 Ağustos'ta koşudan önce yazılmış bir öngörü
çürüdü ve **bir yayın hatasından döndük** (Osmanlı %19 küçülüyordu).

Yazacağın öngörü en az şunları taşıyacak, **mazeretli/mazeretsiz ayrı**:
```
① OSMANLI GÖVDESİ DEĞİŞMEZ — pencere Güney Amerika'ya açılıyor, Osmanlı
   coğrafyasına DOKUNULMUYOR. 1600/1700/1800 kesitlerinde fark ~%0 olmalı.
   🔴 MAZERETİ YOK. Değişirse pencere kodu Osmanlı'yı da etkilemiş demektir.
② kaç km² boyandı · kaç km² sahipsiz kaldı
③ dolgu kapısı Amazon'da kaç petek-gün ateşledi
④ ada kuralı kaç petek kesti (kıta çevresi tamamen deniz — çok olmalı)
```

---

## 4. DOSYA SAHİPLİĞİ

```
🟢 SENİN   denetim/BULGU-GUNEY-AMERIKA.md
           data/yerlesimler_ek_gamerika.js → window.YERLESIMLER_EK_GAMERIKA
                                             (YENİ NOKTA gerekirse)
🔴 DEĞİL   arac/uret_petek.py — `BOLGE` satırını KOORDİNATÖR değiştirir
           (motorun parmak izlediği üçlüde; koşu sırasında ölür)
           index.html · girdi.py — bağlamayı koordinatör yapar
```

🔒 **ŞU AN BİR KOŞU KOŞUYOR** (`kosu2_28agu.log`). `arac/*.py`ye DOKUNMA.
Senin işin zaten ölçüm; yazacağın tek şey rapor ve gerekirse yeni nokta.

## 5. HABERLEŞME

```bash
py arac/tahta_bekci.py --kim "GÜNEY AMERİKA PENCERE" --ara 60   # İLK İŞ
py arac/tahta.py yaz --kim "GÜNEY AMERİKA PENCERE" --kime "KOORDINATOR" --mesaj-dosya <yol>
```
Adım adım bildir. ①'in sonucu (kutu doğru mu) ②'yi değiştirir; ②'nin
sonucu (kaç yüzde boş) ③'ün gerekip gerekmediğini söyler.

📌 Ve bir şeyi ölçemediysen **`ölçemedim` diye yaz.** *"Ölçülemedi"* asla
*"sorun yok"* diye raporlanmaz — bu projede ayrı bir kova gerektirdiği
ölçülmüş bir kusur sınıfı.
