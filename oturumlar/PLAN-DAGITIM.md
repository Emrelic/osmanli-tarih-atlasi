# DAĞITIM PLANI — kim ne yapıyor, ne zaman birleşiyor

> **Kullanıcının talimatı (3 Ağustos):** *"Oturumlara ileri plan program
> ile sürekli dağıt; birbirini bozmayacak, çakışmayacak… onlarla
> mesajlaş, onları takip et. Ne yapacağını bilmeden sessiz sessiz
> bekleyip durmasın oturumlar ve özellikle de sen."*

🔴 **Son cümle en ağırı ve haklı.** Bugün ARAYÜZ 2 ve PETEK/NOKTA
**dört buçuk saat** teslim etmiş hâlde beni bekledi; ben tahtaya bakıp
"çalışıyor" sandım. Sormak bir mesaj tutuyordu.

---

## ÇAKIŞMAYI KESEN TEK ÖLÇÜT — dosya

Oturum sayısı bir sınır değil; **aynı dosyaya iki kalem** sınırdır.
Bugünkü paylaşım (hiçbiri örtüşmüyor):

```
OTURUM 0        yerlesimler.js · olaylar*.js · kök *.md · KOŞU · commit/push
ARAYÜZ 2        js/app.js · index.html · css/style.css
PETEK / NOKTA   data/yerlesimler_kirim.js  (+ sıradaki: _seyrek.js)
MOTOR 3         arac/uret_petek.py
VERİ KİMLİK 3   data/devletler.js · arac/renkler.py
ÇAPRAZ İBERYA   (hiçbiri — yalnız rapor)
```

**Boştaki dosya yuvaları** — her biri bir oturum demek:
```
data/kisiler.js + data/padisahlar.js   → KARTVİZİT
data/merak.js       (yeni)             → MERAK
data/ekokuma.js     (yeni)             → EK OKUMA
data/yerlesimler_ek2.js (yeni)         → VERİ ARAŞTIRMA
arac/denetle_iddia.py (yeni)           → DENETİM
```

## 🔴 BAĞLANTI PROTOKOLÜ — herkes için, istisnasız

```
① İŞE BAŞLARKEN     ekip.py … calisiyor "ne yapıyorum"
② HER TESLİMATTA    ekip.py … hazir "ne bitti"  +  KOORDİNATÖRE MESAJ
③ SORU ÇIKINCA      ekip.py … soru "…"          +  KOORDİNATÖRE MESAJ
④ EN GEÇ İKİ SAATTE bir işaret ver — bitmediyse bile "sürüyor, şurada"
```
**Koordinatöre mesaj nasıl:** `mcp__ccd_session_mgmt__list_sessions` ile
`KOORDİNATÖR` başlıklı oturumun `sessionId`sini bul, `send_message` ile yaz.

⚠️ **Sessizlik bir cevap değildir.** Bitmiş iş bildirilmezse bitmemiştir;
koordinatör senin ekranını göremez.
⚠️ Koordinatör de aynı borç altındadır: **iki saatte bir tahtayı okur**
(`ekip.py <proje>`) ve **sessiz kalan oturuma sorar.**

---

# DALGA 1 — ŞU AN (koşu öncesi, hepsi paralel)

| oturum | iş | dosya | biterse ne olur |
|---|---|---|---|
| **VERİ KİMLİK 3** 🟢 | Asya kimlikleri, Parti 1-2 | `devletler.js` `renkler.py` | Hindistan boyanır |
| **MOTOR 3** 🟢 | aşama zamanlayıcısı + 3s42dk bloğu | `uret_petek.py` | koşu ölçülebilir olur |
| **ÇAPRAZ İBERYA** 🟢 | 38 Portekiz dönemi sınanır | rapor | Kızıldeniz Ç7 çözülür |
| **ARAYÜZ 2** 🔵 | **yeni parti: 6 madde** (aşağıda) | `js/` `css/` `index.html` | 6 madde kapanır |
| **PETEK / NOKTA** 🔵 | **seyreklik listesinin ilk 5 bölgesi** | `yerlesimler_seyrek.js` | ~8 madde kapanır |

## ARAYÜZ 2 — ikinci parti (6 madde, hepsi arayüz)
```
p5/H-0006  aynı tarihli iki madde tek adımda geçiliyor → sıra numarası
p5/H-0003  "haritaya yay": devlete tıkla, sınırlarını ekrana sığdır
p4/H-0011  başkent yıldızı DİĞER DEVLETLER için de, o tarihte başkent olana
p4/H-0013  bir sonraki maddede geçecek yer ÖNCEDEN görünsün (kural var, kod yok)
p4/H-0008  savaş/muharebe maddelerinde konum simgesi (Hemedan örneği)
p4/H-0012  isyan yayılma: ok + ateş simgesi (tarama ve renk KULLANILMAZ)
```
⚠️ `p4/H-0011` engelli: `devletler.js`te `baskent` tek değer, penceresi
yok. **Osmanlı için yapılabilir**, diğer devletler künye işini bekler.

## PETEK / NOKTA — ikinci parti
Kendi çıkardığı **en aç 20 bölge** listesinin **ilk 5'i**. Kapattığı
maddeler: `p2/H-0001 · H-0012 · H-0014 · H-0018 · H-0019 · H-0020` ·
`p3/H-0012 · H-0016` · `p5/H-0007 · H-0009`.
🔴 Yeni dosya: `data/yerlesimler_seyrek.js` (Kırım dosyasına dokunma).

## 🔴 DÜZELTME — PETEK/NOKTA'nın itirazı haklı çıktı (aynı gün)

Talimatım **iki farklı ölçeği tek cümlede birleştirmişti**: "seyreklik
listesinin ilk 5 bölgesi" (60 km+ eşikli ızgara ölçümü) ile "kapattığın
maddeler" (25-45 km yarıçaplı tekil şikâyetler). Bunlar aynı ölçüm
değil — ilk beşe nokta eklemek o maddelerden **hiçbirini kapatmazdı**.

Oturumun kendi cümlesi kuralı veriyor:
> *"Sıralamada görünmemeleri 'sorun yok' demek değil, 'farklı ölçekte'
> demek."*

⇒ Sıra değişti: **önce şikâyet maddeleri** (Halka 0, kullanıcının GÖRDÜĞÜ
hatalar), **sonra** seyreklik listesi.

## 🔴 VE DAHA BÜYÜK BİR TUZAK ÇIKTI — seyreklik listesi HAM VERİ

Listenin ilk beşinin **üçü** (kuzey Necid ×2, Bâdiye/Şam çölü) `CLAUDE.md`
Değişmez 1'in *"34 nokta KASTEN sahipsiz"* kümesine giriyor: Sahra,
Rub'ul Hâlî, **1744 öncesi Necid**, körfez şeyhlikleri.

```
Oraya nokta eklemek "seyrekliği gidermek" DEĞİL,
DOĞRU OLAN BOŞLUĞU YOK ETMEKTİR.
```
Ve `denetle.py`nin `50 sahipsiz (beklenen 50)` satırını bozar — yani
kusur, kendini bir "iyileştirme" gibi göstererek girer.

📌 **Bulgu:** "nokta başına km²" ölçümü, bir bölgenin **aç** mı yoksa
**kasten boş** mu olduğunu ayırt edemiyor.

## 🔴 VE KURALIN KENDİSİ DÜZELTİLDİ — oturum ölçtü, ben yanılmışım

*"Kasten boş bölgeye nokta ekleme"* demiştim. **Yanlış.** Doğrusu:

```
Kasten boş bölgeye nokta EKLENMEZ  ✗
Kasten boş bölgeye SAHİPSİZ nokta EKLENİR  ✓
```

**Kanıt `p5/H-0007`in yıldızı:** kuzey Arabistan kasten boştu ama haritada
boş **GÖRÜNMÜYORDU** — Maan'ın **Osmanlı** peteği 268 km doğuya uzanıp
orayı Osmanlı boyuyordu. *Boşluk yalnız niyette vardı.* Vâdî Sirhân
`d:[]` ile konunca boşluk gerçekten boş göründü.

⇒ Eklenen 5 nokta boşluğu **yok etmiyor, boşluğu ÇİZİYOR.** "Kasten
sahipsiz" sayacının 50→55 olmasının sebebi de bu.

### Seyreklik listesi ÜÇ sınıf üretmeli
```
AÇ           nokta yok, komşular sahipli        → nokta ekle
KASTEN BOŞ   sahipsiz nokta VAR, dokunma        → geç
YALANCI BOŞ  sahipsiz OLMALI ama noktası yok    → SAHİPSİZ nokta ekle
             ⇒ komşunun peteği oraya taşıyor ve YANLIŞ SAHİP boyuyor
```
🔴 **Üçüncü sınıf bugüne kadar birinci gibi görünüyordu** — ve tehlikeli
olan da bu: "aç bölge" diye nokta konulup **sahiplik yazılsaydı**, boşluk
kapanmaz, yanlış sahip **pekişirdi.**

---

# DALGA 2 — AÇILACAK (yuvası boş, çakışma yok)

| oturum | model | iş | dosya |
|---|---|---|---|
| **KRONOLOJİ 2** | Sonnet | 7 madde: Timur-Bağdat ×2 · İzvornik · Eflak ara kademeler · Ankara-Sivrihisar-Çankırı · Anadolu Selçuklu bitişi · Karaman üçlüsü | `data/olaylar_ek8.js` (YENİ) |
| **VERİ ARAŞTIRMA** | Opus | 10 ölçüm maddesi: Marmara Adası · Bosna ucu · Dubrovnik · Aydınoğulları hortlaması · Germiyan katmanı · Ordu-Ünye · Rumeli Hisarı kıyısı · Livno · Bucak bozkırı · Kızıldeniz kıyısı | `data/yerlesimler_ek2.js` (YENİ) |
| **KARTVİZİT** | Opus | 36 padişah, PARTİ 1 (kuruluş→Fatih, 7 kart) | `data/padisahlar.js` |
| **MERAK** | Opus | 8 soru kartı (`MERAK.md` ④-⑪) | `data/merak.js` (YENİ) |

📌 **Sıra önerisi:** KRONOLOJİ 2 ve VERİ ARAŞTIRMA önce — ikisi de
**mevcut açık maddeleri kapatıyor**. KARTVİZİT ve MERAK yeni içerik
üretiyor; `ONCELIK.md G9` gereği açık iş bitmeden yeni pencere açılmaz.

---

# BİRLEŞME NOKTASI — koşu

```
KOŞUYA GİREBİLMEK İÇİN BEKLENENLER
  VERİ KİMLİK 3   kimlikler          → Hindistan boyansın
  PETEK / NOKTA   Kırım + seyrek     → cetvel çizgileri gitsin
  VERİ ARAŞTIRMA  düzeltmeler        → (yetişirse)
  KRONOLOJİ 2     maddeler           → (yetişirse)
```
🔴 **Koşu 4,7 saat ve her şeyi kilitler** (`YASALAR G6`). O yüzden
**tek koşu**: yukarıdakiler ne kadar yetişirse o kadar girer, yetişmeyen
bir sonrakine kalır. Koşu **beklenmez, doldurulur.**

⚠️ MOTOR 3 yamayı bitirirse koşu ONUN yamasıyla çalışır — ama
**denetle.py sonucu birebir aynı çıkmalı**, bir sayı oynarsa yama geri
alınır ve koşu yamasız tekrarlanır.

## KOŞU SONRASI, aynı gün
```
① denetle.py + denetle_yayin.py + renk_olc.py
② surum_damgala.py            (ARAYÜZ değişiklikleri damga istiyor)
③ commit + push
④ kutudaki kapanan maddelerin hükümleri commit numarasıyla güncellenir
```

---

# TAKİP — koordinatörün kendi borcu

```
her iki saatte    py kutu/ekip.py <proje>        tahtayı oku
                  list_sessions                  kim canlı, kim durmuş
sessiz oturuma    send_message ile SOR           "neredesin"
teslim gelince    DOĞRULA (F5/F6), sonra commit  rapor yüz değeriyle alınmaz
her teslimatta    kutudaki hükmü ✅ + commit no  "karar verildi" ≠ "uygulandı"
```
📌 Bugün bu borcun üçü de bir kez ödenmedi ve bedeli dört buçuk saat oldu.
