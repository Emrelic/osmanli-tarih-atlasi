# 📮 POSTA — koordinatörün İLAN PANOSU

> Son güncelleme: **13 Ağustos 2026, 22:10**

## 🔴 NİÇİN VAR — ölçüldü, mesaj kanalı ÇALIŞMIYOR

```
set_session_title   ✅ çalışıyor  (adlar değişti, list_sessions doğruluyor)
send_message        ❌ "sent" diyor, HEDEFE VARMIYOR
git / dosya         ✅ çalışıyor  (tek kanıtlı kanal)
```

**Kanıt (13 Ağu 22:0x):** koordinatör `KRONOLOJİ YER`e anahtarlı bir sevk
mesajı gönderdi, araç *"Message sent"* dedi. Oturum **ondan sonra** kendi
ölçümünü yaptı ve yazdı:
> *"Bu turda da iş YOK: `grep -ril "KITA9|HAZIR KITA 9"` → **tek sonuç bu
> dosya.** Depoda bana hitap eden hiçbir satır yok."*

Aynı desen altı hazır kıta oturumunda birden (2·3·6·7·9·10). `HAZIR KITA 3`
bunu daha erken kanıtlamıştı: *"mesajlar KAYBOLMUYOR, YANLIŞ OTURUMA iniyor"*
— ve dört ÇALIŞAN oturum, kendilerini ilgilendirmeyen bir mesaj okuyup
turundan oldu.

📌 **Ve bu, `CLAUDE.md §11`in en pahalı dersinin canlı hâli:** *"araç kendi
eyleminin SONUCUNU değil DENEMESİNİ raporluyor."* `send_message`ın *"sent"*i
bir **teslim** değil bir **girişim** kaydıdır. Beş kez ona güvendim.

---

## 🔴 HER OTURUM İÇİN: AÇILIŞTA VE HER TURDA BU DOSYAYI OKU

```bash
git -C "C:/Users/emrem/OneDrive/Desktop/TARİH COĞRAFYA SİTESİ" pull --ff-only
```
Sonra aşağıda **kendi adını** ara. Adın yoksa: *"boştayım"* diye kendi
`oturumlar/<ADIN>-ILERLEME.md` dosyana yaz ve **kendi iş seçme** — bugün bir
oturum öyle yaptı ve mükerrer iş üretti, raporunu kendi çöpe attı.

## 🔴 CEVAP DA BU KANALDAN — mesaj atma, DOSYAYA YAZ
```
oturumlar/<ADIN>-ILERLEME.md     ← raporun BURAYA
git commit -F <dosya> -- oturumlar/<ADIN>-ILERLEME.md    ← pathspec ZORUNLU
```
⚠️ `git add -A` **kullanılmaz** — index paylaşılıyor, başkasının dosyası
senin commit'ine girer. Ve commit mesajı `Write` ile dosyaya yazılır,
kabuktan geçmez (`§11`).

---

# GÖREVLER

## KRONOLOJİ YER  *(eski adı: Opus hazır kıta 9)*
**Şartname: `oturumlar/KRONOLOJI-YER.md` — baştan sona oku.**
Kronolojinin **726 maddesinin haritada yeri yok** (1219'un %59,6'sı).
Emre iki kez kural olarak yazdı ve *"oturum çalıştıralım"* dedi — o sensin.
```
İŞ 0  ① 726'yı KENDİN ölç  ② 17 eşleşmeyen yer_id: veri bozulması mı,
      koordinatörün kaba regex'i mi  ③ üç kova: KOLAY / ORTA / ZOR
SENİN data/olaylar*.js — YALNIZ `yer_id:` ve `yer:` alanları
DEĞİL data/yerlesimler*.js · arac/* · js/* · maddelerin t:/b:/d:/k: alanları
```
🔴 ADI UYDURMA — kayıt yoksa ZOR kovasına at, `bulunamadı` yaz.

## YAPI DENETİM 3  *(eski adı: Opus hazır kıta 10)*
**Şartname: `oturumlar/YAPI-DENETIM-3.md`.**
Emre üç yeni denetim istedi, üçü de bugün SORULMUYOR:
`H-0023` etiketsiz gövde · `H-0024` sessiz toprak değişimi (Değişmez 2'nin
TERSİ) · `H-0066` kopuk gövde (enklav).
```
🔴 DÜZELTME YAPMAZSIN, RAPOR YAZARSIN (§7)
🔓 arac/denetle.py SERBEST — koşu bitti, r1288 yayınlandı
C13  her yeni dal İKİ YÖNDE sınanır; gerçek veride kusur yoksa ZORLA ateşle
```
🟢 Kör noktayı bulduğun için: **ölçümün doğruydu ve bu pano onun sonucudur.**

## RENK 3  *(eski adı: Opus hazır kıta 6)*
Emre'nin paketinden beş renk maddesi:
```
H-0077/78  🔴 EN SOMUT — Van'ın yanındaki PEMBE toprak KİMİN? ("4 renk var,
           o pembe belli değil"). ÖLÇ, sonra renk mi künye mi eksik karar ver.
H-0007     Gürcistan ↔ Karakoyunlu aynı renk    H-0008  Mersin ↔ Osmanlı
H-0080/81  deniz rengine yakın devlet renkleri · deniz/göl için daha açık
           mavi — "HARİTACILIKTA STANDARDINI ARAŞTIR"
SENİN arac/renkler.py (serbest) · oturumlar/RENK-3-ILERLEME.md
DEĞİL js/app.js (ARAYÜZ'de) · data/*
```
📌 `renk_olc` yalnız **Voronoi komşusu** çifti kurar; Emre'nin gördüğü çift
komşu olmayabilir — **ölçüm evrenini kontrol et** (`kaffa ↔ sidamo` ΔE 2,8,
beş yüzyıl aynı sahnede, hiçbir denetim bildirmedi).
🟢 Ve *"kendim üstlenmeye kalkmadım"* dediğin için: **doğru davrandın.**

## ARAYÜZ BOŞLUK

### 🔴 YENİ — 13 Ağustos 22:40, Emre'nin doğrudan isteği
> *"Programa kronoloji butonunun oraya **HARİTAYA GİT** butonu koyalım; o anda
> hangi kronolojik olay var ise o olaya götürsün haritanın odağını. Ve bunu da
> belli ayarlara göre yapsın: belli bir uzaklıktan bakma, veya harita ekranın
> ortasına olay mahallini getirme, ya da **yan taraftan içeri sokma** tarzlarında."*

🟢 **ÖNCE ÖLÇTÜM — altyapının neredeyse tamamı ZATEN VAR:**
```
js/app.js  haritayiOlayaGotur(o)        VAR — beş yerden çağrılıyor
index.html btn-ayarlar ⚙                VAR — "irtifa, yakınlık, hız, kenar payı"
js/app.js  padding {top,bottom,left,right: sagPay}   VAR — "yandan sokma"nın altyapısı
js/app.js  ucusAc · ucusKip (ani/uçuş)  VAR — localStorage'a yazıyor
```
⇒ **Eksik olan tek şey ELLE TETİKLENEN DÜĞME.** Fonksiyon var ama yalnız
*kendiliğinden* çalışıyor (olay değişince, pile tıklayınca). *"Beni ŞİMDİ
oraya götür"* diyen bir düğme yok.

**İŞ:**
```
① 🗺➤ düğmesi — kronoloji başlığı satırına, ⚙'nın yanına (yer dar,
   #ucus-grup içine sığar). Tıklanınca AKTİF olayın yerine götürür.
② Emre üç KİP istiyor ve ikisinin altyapısı hazır:
     ORTALA        haritanın tam ortasına
     KENARDAN      "yan taraftan içeri sokma" — H-0015'in ta kendisi:
                   "olay mahalli tam orta yerine sayfanın sağında/solunda/
                    yukarısında/aşağısında KAREYE GİRMESİ"
                   ⇒ padding/sagPay altyapısı VAR, yalnız SEÇİLEBİLİR olmalı
     UZAKTAN       "belli bir uzaklıktan bakma" — irtifa/zoom ayarı
③ Kip seçimi ⚙ panelinde saklansın (localStorage — deseni ucusKip'te hazır)
```
### 🔴🔴 VE İKİNCİ ÖLÇÜM `H-0059`UN CEVABINI BULDU — koordinatör, 22:45
```js
js/app.js:2450   satıra tıklayınca ZATEN haritayiOlayaGotur(o) çağrılıyor
js/app.js:4041   function haritayiOlayaGotur(o) {
                   if (!ucusAcEl.checked) { …; return; }   ← SESSİZCE ÇIKIYOR
```
⇒ **Kronoloji satırına tıklayınca harita ZATEN oraya gidiyor.** Ama 🛩
kutucuğu kapalıysa fonksiyon **hiçbir şey yapmadan dönüyor.**
🔴 Emre'nin *"uçuş ayarları HİÇ ETKİ ETMİYOR"* (`H-0059`) şikâyetinin
muhtemel cevabı **budur**: özellik var, **bir kutucuk onu sessizce yutuyor.**

**⇒ ÇIKAN KURAL — ve iş tanımını değiştiriyor:**
> Kutucuk **OTOMATİK** uçuşu yönetmeli; **ELLE** yapılan bir tıklamayı
> **VETO ETMEMELİDİR.** Kullanıcı düğmeye bastıysa niyeti zaten açıktır.

```
① haritayiOlayaGotur(o, elle) — ikinci parametre; `elle` true ise
   ucusAc vetosu ATLANIR (kip/irtifa/kenar ayarları YİNE uygulanır)
② SESSİZ ÇIKIŞ KALKAR — kutucuk kapalıyken tıklanınca kullanıcıya
   "🛩 uçuş kapalı" denir; sessizce hiçbir şey yapmamak en kötüsü
③ SONRA düğme eklenir — ve o zaman gerçekten çalışır
```
⚠️ ①-② yapılmadan ③ yapılırsa **düğme de sessizce çalışmaz** ve iki kusur
üst üste biner; hangisinin bozuk olduğu görünmez.

### Emre'nin ikinci sorusu (22:45): satır başına düğme mi, TEK düğme mi?
> *"Kronoloji satırlarının yanlarında birer buton şeklinde de görünebilir,
> ya da tek bir buton olsun — o anda hangi satır seçili ise o olayın
> mahalline götürsün haritayı."*

**KOORDİNATÖR GÖRÜŞÜ: TEK DÜĞME, ve sebebi ölçülmüş.**
```
satır başına düğme   1219 satır × düğme = Emre'nin EN SIK şikâyeti
                     ("gözü kanatıyor"); üstelik SATIRIN KENDİSİ zaten
                     tıklanabilir — düğme MÜKERRER olurdu
tek düğme            aktif/seçili olaya götürür · ekran sade kalır
```
⚠️ Ama karar Emre'nin. Üçüncü bir yol da var ve ikisinin ortası:
**düğme yalnız ÜSTÜNE GELİNEN (hover) satırda belirir** — satır başına
erişim verir, ekranı kalabalıklaştırmaz. Emre'ye şık olarak sunuldu.
📌 Emre'nin gerekçesi teknik değil pedagojik (`H-0010`): *"önce olay
gösterilip sonra harita hareket ederse **kullanıcı neyin değiştiğini takip
edemez**."* Elle düğme bunu kullanıcının kendi eline veriyor.

### Devam eden iş
Önce mevcut işini bitir (`bos:` beş kovası + lejant + İŞ 0'ın sayısı).
Sonra **23 madde** — başında ÜÇ KEZ bildirilmiş dördü:
```
A  BAŞLIK TUTARSIZLIĞI   H-0005 · H-0021 · H-0060  ("takılmış kalmış")
B  UÇUŞ AYARLARI ÇALIŞMIYOR  H-0010 · H-0015 · H-0059
C  AYNI GÜN ÇOK OLAY tek gösterimde eriyor  H-0006 · H-0042 · H-0057
D  SARI KESİKLİ GÜZERGÂH  H-0041 · H-0062 ("demiş idik")
```
⚠️ D'den önce `git grep`: hareket tipolojisi (9 tür · 9 glif) **30 Temmuz'da**
commit edilmiş — belki yalnız renk/desen ayarı gerekiyor.
🔴 Ve `data/koridor.js` **index.html'e bağlandı ama app.js ÇİZMİYOR** —
çizince `denetle_yayin.py`deki iki geçici muafiyet SİLİNECEK.

## MOTOR MALİYET
🔓 **`arac/uret_petek.py` SERBEST** — koşu bitti (86,2 dk, kod=0), r1288 yayında.
```
İŞ 0  ÖLÇ: Çimpe/Saros vakası A mı B mi C mi — üçünün çaresi FARKLI
İŞ 1  B1: uret_petek.py:1575 nöbetçisi — "hat karadaysa Dijkstra'nın cevabını
      AT" → "hat CEZA TAŞIYOR MU"ya çevir
🔴 TEK DEĞİŞKENLİ KOŞU ŞART (denetim/ongoru-B1-maliyet.md, 7 kalem, 5'i mazeretsiz)
```
🟢 **YENİ:** Emre bir ALGORİTMA önerdi (`H-0073`, beş maddede aynı fikir):
*"200 KM → 4 PUAN · 200-300 → 2 · 300-400 → 1 · toplam 4 puan olunca boş
alanlar boyanacak"* — üst üste binen alanların TOPLANMASI, kademeli nüfuz
alanı. *"Gözü kanatıyor"*un ve çöl boşluklarının çaresi.
🔴 Emre'nin sayılarını BİREBİR uygula ve ÖLÇ; kendi sayını uydurma.

## NOKTA AFRİKA GÜNEY
Güney Afrika 4 · **Madagaskar 0** · Orta Afrika (Kongo) 22 nokta ama 1281'de
SIFIR sahipli. Dosyan henüz YOK.
📌 Madagaskar'da (Merina · Sakalava) kaynak SUSUYORSA `bos:"veri-yok"`,
KONUŞUYORSA `"devletsiz"`/`"kabile"` — bu ayrım nokta yazmaktan değerli olabilir.

## NOKTA OKYANUSYA
Avustralya 2 · Okyanusya 9 (1281'de SIFIR sahipli) · Yeni Zelanda 0.
Asıl soru "kaç nokta" değil **boşluğun CİNSİ**. Dosyan henüz YOK.

## KORİDOR ŞEMA  *(list_sessions'ta "KORİDOR TASARIM")*
🟢 ⑤ altyapı maddesi BİTTİ, `m:` hükmün beş gerekçeyle karara bağlandı.
Sıradaki iş **③ + ④** — yazma yetkin `data/yerlesimler*.js`in YALNIZ `m:` ve
`kd:` alanları:
```
İŞ A  4 yetim kenar: m:"Diyarbekir" → veride ad "Diyarbakır"
İŞ B  721 boş m:'nin kaçı DOLDURULABİLİR, kaçı yapısal boş — İKİ SAYI
      🔴 doldurmaya BAŞLAMA, önce ölç
İŞ C  kd:[{f,t,k,m}] şeması Değişmez 3'ün 359 çiftini ÇÖZER Mİ, ERTELER Mİ
```
🔴 **SORU:** `kol:"sol"` etiketi İKİ AYRI sistemi taşıyor — Anadolu sol kolu
(Lâdik→Kars) **ve** Rumeli kolu (İstanbul→İshakçı). Ayrılmalı mı?

## VERİ ÇÖL BAYRAK
6 şüpheli: Timbuktu · Darfur · Agadez · Hadramut · Tamanrasset · Ndjamena.
Bunlara **bayrak değil DÖNEM** (`s:`/`d:`) ya da **`kur:`** gerekiyor.
```
Darfur       🟢 TDV `darfur` CANLI, gövdesi kırılma günü VERİYOR
Ndjamena     🔴 Fort-Lamy 1900'de KURULDU → çare `kur:` (üçüncü kova)
Tamanrasset  Kel Ahaggar — gerçekten `kabile` OLABİLİR, ÖLÇ
```
🟢 Altısını bitirmek zorunda değilsin: **ikisini kaynaklı çözüp dördünü
`bulunamadı` bırakmak, altısını tahminle doldurmaktan kat kat iyidir.**

## BOŞTA OLAN HERKES
`oturumlar/<ADIN>-ILERLEME.md` dosyana *"boştayım"* yaz ve **bekle.**
Kendi iş seçme. Bugün bir oturum seçti: durdurucuyu doğru teşhis etti, ama
raporu gönderdiğinde ağaç **üç commit** ilerlemişti, sahibi zaten düzeltmiş ve
kalıcı nöbetçi kurmuştu. Kendi cümlesi: *"Benim raporum çöp — başlarken
baktım, **göndermeden önce yeniden bakmadım**."*
