# MERAK KONULARI — "niçin öyle olmadı"

> **Kullanıcının isteği (3 Ağustos 2026):** *"Magazin, sebep-sonuç, ek
> okumalar kartları gibi bir de merak konusu indeksi ve okumaları
> açalım… bunun gibi merak edilen bazı durumları, internetten tartışmalı
> durumları aparalım ve akademik cevapları bulalım."*

🔴 **Bu kart ötekilerden CİNS OLARAK farklıdır ve fark tasarımı belirler:**
```
kartvizit     KİŞİYİ anlatır      → bir hayat
sebep-sonuç   BAĞI anlatır        → iki olay arası ok
magazin       RİVAYETİ anlatır    → doğruluğu iddia edilmeyen anlatı
merak         TARTIŞMAYI anlatır  → tek cevabı YOKTUR, olması da gerekmez
```

⚠️ **En büyük risk: tek bir cevap yazmak.** Bu soruların çoğu
tarihçilerin hâlâ tartıştığı sorulardır. "Şu yüzden oldu" diyen bir kart,
bir tarafın görüşünü **atlasın görüşü** gibi sunar. Kart **görüşleri
yan yana** koyar; okuyucu seçer.

📌 `EK-OKUMA.md`nin `kesinlik:` alanı burada da geçerlidir ve varsayılan
değeri **`tartismali`**dır.

---

## ŞEMA

```javascript
{ id:"cem-sultan-rehin", tur:"merak",
  soru:"II. Bayezid niçin kardeşi için Avrupa'ya yıllarca para ödedi?",
  kisa:"…tek cümle: sorunun özü…",
  goruşler:[
    { tez:"…", dayanak:"…" },
    { tez:"…", dayanak:"…" }
  ],
  baglanti:["1481-06-20","1495-02-25"],   // hangi maddelerde çıkar
  kesinlik:"tartismali",
  kaynak:"TDV: cem-sultan · bayezid-ii" }
```
⚠️ `goruşler` **en az iki** olmalı. Tek görüşlü kart, merak kartı değil
cevap kartıdır — ve o zaman `EK-OKUMA`ya yazılır, buraya değil.
⚠️ Uzunluk: `ANSİKLOPEDİ EKSENİ Kural ⓪` — kart **900 karakteri** geçmez.
Her görüş 2-3 cümle.

---

# ÜÇ ÖRNEK KART — üslubu bunlar oturtsun

## ① Cem Sultan — niçin ödendi, serbest kalsa ne olurdu

> *Kullanıcının sorusu: "Cem Sultan'ı zaten savaşta yenmiş, ayrıca neden
> haraç ödemiş yabancı devletlere? Ödemese Cem Sultan ne yapabilirdi?
> Bu gücü nasıl buluyorlar?"*

**Kısa:** Ödenen para "haraç" değil, **rehinin yerinde tutulma
masrafıydı** — ve Bayezid onunla toprak değil, **elinin serbestliğini**
satın alıyordu.

```
GÖRÜŞ 1 — Cem gerçek bir tehditti
  Osmanlı'da ekberiyet YOKTU: ordusu olan her şehzade meşru adaydı.
  Cem 1481'de Bursa'da adına hutbe okutup sikke kestirmişti; Karaman
  bakiyesi, hoşnutsuz Türkmen aşiretleri ve Memlükler ona açıktı.
  Serbest kalıp bir Hıristiyan donanmasıyla Rumeli ya da Teke kıyısına
  çıksa, Anadolu'da hazır bir muhalefet buluyordu.

GÖRÜŞ 2 — Tehdit abartılıydı, ödeme ihtiyattı
  Cem 1482'de iki kez yenildi ve tabanını kaybetti; Avrupa onu on dört
  yıl KULLANMADI, çünkü bir sefer düzenlemek pahalıydı. Ödeme gerçek
  bir tehlikeyi değil, Bayezid'in RİSK ALMAK İSTEMEMESİNİ gösterir.
```
🔴 **Ve ölçülebilir bir delil var:** Cem 1495'te ölür ölmez Bayezid
Venedik'e savaş açtı (1499) ve Sapienza'yı kazandı. On dört yıl
kıpırdamayan padişah, dört yıl içinde donanmasını Akdeniz'e sürdü.
⇒ Ödeme neyi satın aldığını, ödemenin BİTİŞİ gösteriyor.

📌 **Ve bu ilk vaka değil:** Bizans aynı kartı defalarca oynadı —
Süleyman Çelebi'nin oğlu Orhan, Düzmece Mustafa, 1453'te surların
içinde tutulan Orhan Çelebi. **Rehin şehzade, Osmanlı'ya karşı iki asır
kullanılan standart bir araçtı.** Cem'in farkı, kartı Bizans'ın değil
**bütün Avrupa'nın** tutmasıydı.

## ② Tebriz — niçin defalarca alındı, hiç tutulamadı

**Kısa:** Tebriz **alınabilir ama tutulamaz** bir şehirdi; sorun askerî
değil **lojistik ve malî**ydi.

```
GÖRÜŞ 1 — Mesafe ve sefer mevsimi
  Ordu İstanbul'dan çıkıp Tebriz'e varıyor, kış bastırmadan dönmek
  zorunda kalıyordu. Kalıcı garnizon, kış boyunca beslenemeyecek bir
  hattın ucunda demekti.

GÖRÜŞ 2 — Tımar düzeni orada işlemiyordu
  Osmanlı fethi bir VERGİ DÜZENİ kurmaktı; Safevîler çekilirken
  toprağı boşaltıyor, gelir kalmıyordu. Geliri olmayan yer tımara
  bölünemez, bölünemeyen yer elde tutulamaz.

GÖRÜŞ 3 — Stratejik tercih
  Osmanlı savunulabilir hattı Van-Erzurum-Kars kalelerinde gördü.
  Tebriz o hattın ÖTESİNDEYDİ; almak bir baskı aracı, tutmak bir yüktü.
```
📌 Atlasta ölçülebilir: Erzurum 1518'de kalıcı Osmanlı oldu ve öyle
kaldı; Tebriz'in her alınışı bir kaç yıl sonra geri düştü.

## ③ Eflak-Boğdan-Erdel niçin özerk, Budin ve Bosna niçin eyalet

**Kısa:** Sınır **Tuna'dır** — ve fark inanç ya da nezaket değil,
**savunulabilirlik ve maliyet.**

```
GÖRÜŞ 1 — Nehir hattı mantığı
  Tuna'nın GÜNEYİ (Bulgaristan, Bosna, Sırbistan) doğrudan eyalet
  oldu: savunulabilir çekirdeğin içindeydi. KUZEYİ (Eflak, Boğdan,
  Erdel) açık ovaydı; ilhak, Lehistan ve Habsburg'a karşı sürekli
  garnizon demekti. Haraç + voyvoda tayini AYNI DENETİMİ ucuza veriyordu.
  ⚠️ Budin bu kuralın istisnası DEĞİL, kanıtıdır: Habsburg cephesi
  olduğu için askerî olarak tutulmak ZORUNDAYDI, o yüzden eyalet yapıldı.

GÖRÜŞ 2 — Malî mantık
  Voyvodalıklar haraçlarını düzenli ödedi; eyalet yapmak geliri
  artırmaz, masrafı artırırdı.

GÖRÜŞ 3 — Kırım ve Hicaz da aynı mantığın parçası
  Kırım'da hanedan meşruiyeti (Cengiz soyu) vardı ve süvari gücü
  müttefik olarak daha değerliydi; Hicaz'da ise hâkimiyet TOPRAK değil
  HİZMET (hac yolu, Haremeyn hâdimliği) üzerinden kuruluyordu.
```
🔴 **Bu kart `İDARÎ KATMAN` kalemine doğrudan bağlanır:** TDV'nin
*"1609'da 32 eyaletin 23'ü timarlı, 9'u salyaneli"* ayrımı, aynı
sorunun idarî dildeki karşılığıdır.

---

# KULLANICININ SORDUĞU ON BİR SORU — kuyruk

```
①  ✍ Cem Sultan rehin diplomasisi                      YUKARIDA YAZILDI
②  ✍ Tebriz niçin tutulamadı                           YUKARIDA YAZILDI
③  ✍ Voyvodalıklar niçin özerk (Kırım/Hicaz dahil)     YUKARIDA YAZILDI
④  Otranto seferi Fatih'ten sonra niçin sürdürülmedi
⑤  Timur niçin Osmanlı'yı yutmadı, beylikleri diriltti
⑥  Osmanlı niçin Arabistan içlerine ve Umman/körfeze yerleşmedi
⑦  Bosna-Kosova-Arnavutluk müslümanlaşırken Sırbistan-Bulgaristan-
   Yunanistan-Romanya niçin kimliğini korudu
⑧  Osmanlı niçin keşiflere ve sömürgeciliğe katılmadı
⑨  Osmanlı niçin Orta Asya ile bağ kurmadı
⑩  Osmanlı-Portekiz Hint Okyanusu rekabeti niçin kaybedildi   ← ÇAPRAZ İBERYA besler
⑪  Kardeş katli niçin bu kadar sürdü, niçin kaldırıldı        ← EK-OKUMA zinciriyle akraba
```

⚠️ **⑦ en hassası.** Müslümanlaşma coğrafyası soruları bugün siyasî
olarak yüklü. Kart **taraf tutmaz**: iltica/devşirme, vergi farkı,
kilise örgütünün gücü (Sırp ve Bulgar patrikliği vs Bosna Kilisesi'nin
çökmüş olması), şehirleşme oranı — **hepsi yan yana** yazılır, hiçbiri
"asıl sebep" ilan edilmez.

## OTURUM

Bu iş bir **araştırma oturumudur** ve `ÇAPRAZ İBERYA` ile akrabadır:
ikisi de kaynak tarayıp **karar vermeden rapor eder.**
```
① AD        MERAK
② MODEL     Opus
③ PROMPT    MERAK.md dosyasını oku; ④-⑪ sorularını kartlaştır.
④ ClaudEmre HAYIR
```
🔴 Yazma yetkisi: `data/merak.js` (YENİ dosya) + kendi ilerleme raporu.
📌 `ANSİKLOPEDİ EKSENİ Kural ①`: bu dosya **ana yüke katılmaz**, kullanıcı
merak paneline girince yüklenir.
