# AMERİKA-0902 — Yeni Dünya nokta yoğunlaştırma

## ⓪ KİMLİK — HADDİN

```
SEN         : İŞÇİ oturum · nokta araştırma (Oturum 4 cinsi)
DEĞİLSİN    : koordinatör DEĞİLSİN. İş dağıtmazsın, öncelik değiştirmezsin.
ÜSTÜN       : 1.MURAT HÜDAVENDİGAR (koordinatör)
ALTIN       : kimse
YASAKLARIN  : iş dağıtmak · başkasının dosyasına yazmak · `data/yerlesimler.js`e
              dokunmak · petek üretimi başlatmak · commit (KENDİ `oturumlar/`
              dosyan hariç, ve o da pathspec'li)
```

---

## ① NİÇİN VARSIN — ölçülmüş boşluk

2 Eylül 2026'da bağlı evren (2663 nokta) alt bölgelere ayrılıp kara alanına
bölündü. **Amerika'nın dört alt bölgesinden üçü kırmızı:**

```
ALT BÖLGE                              nokta   M km²   nokta/Mkm²
Karayipler                                17    0,24      70,8   🟢 İYİ — DOKUNMA
Mezoamerika (Meksika-Guatemala)           43    2,20      19,5   🔴
And dağları (Peru-Bolivya-Ekvador-Şili)   27    3,00       9,0   🔴
Brezilya + Guyanalar + La Plata           15    9,50       1,6   🔴 EN BOŞ
Kuzey Amerika (ABD + Kanada)              36   19,00       1,9   🔴
```
Kıyas: **Anadolu 367 · Balkanlar 329** nokta/Mkm². Brezilya **1,6**.

🔴 **VE ÖNCÜLÜMÜ SANA AÇIKÇA YAZIYORUM — biri ÇÜRÜDÜ.** İlk turda
"Amerika 56+85 nokta, künyeler noktasız" diye ölçmüştüm. Daha dar kutuyla
ölçünce **iki şey değişti:**
```
① toplam 141 değil 142 · ve %94'ü TEK dosyada (`yerlesimler_amerika.js`, 133)
② "künyesi var ama veride hiç `s:` dönemi yok" → kuzey-amerika 0/13 ·
   orta-amerika 0/5 · karayip 0/8 · güney-amerika 0/21
   ⇒ ÖKSÜZ KÜNYE YOK. Boşluk DİZİNDE değil, YOĞUNLUKTA.
```
📌 Yani işin *"eksik devlet künyesi bul"* **değil**, var olan künyelerin
toprağını temsil edecek **nokta** yazmak.

---

## ② İŞİN — sırayla, bitirilebilir kalemler

**Sıra tesadüf değil: en boş olan değil, en ÇOK HATA ÜRETEN önce.**
`CLAUDE.md §2` — noktasız bölge en yakın peteğe emilir ve **o peteğin
sahibiyle** boyanır. Kalabalık komşusu olan boşluk, ıssız boşluktan daha
çok yalan söyler.

```
① AND DAĞLARI            27 → hedef ~55
   İnka çekirdeği ve İspanyol sömürge idarî merkezleri. Cuzco · Quito ·
   Potosí · Charcas (Sucre) · La Paz · Arequipa · Trujillo · Cajamarca ·
   Santiago de Chile · Concepción · Asunción.
   🔴 EN ÇOK HATA BURADA: `yerlesimler_amerika2.js`te Huamanga TEK başına
   ve And'ın tamamını emiyor olabilir. ÖNCE bunu ölç.

② BREZİLYA + LA PLATA    15 → hedef ~35
   Portekiz kıyı kaptanlıkları ve iç misyonlar: Salvador (Bahia) ·
   Olinda/Recife · Rio de Janeiro · São Paulo (São Vicente) · São Luís ·
   Belém do Pará · Montevideo · Córdoba · Potosí yolu.
   ⚠️ İç kısım (Amazon) için `③`e bak — nokta UYDURMA.

③ KUZEY AMERİKA          36 → hedef ~60
   Sömürge merkezleri ve yerli konfederasyonları: Quebec · Montreal ·
   Boston · New Amsterdam/New York · Philadelphia · Charleston ·
   St. Augustine · Santa Fe · New Orleans · Detroit · Haudenosaunee
   (İrokua) · Cherokee · Powhatan · Pueblo · Lakota.
   ⚠️ `Comanchería` zaten var (`yerlesimler_amerika2.js`) — 3 km sınavını
   koştur, mükerrer yazma.

④ MEZOAMERİKA            43 → hedef ~55  (en son, çünkü en dolu)
   Aztek çekirdeği zaten iyi. Eksik olan Maya ve kuzey: Mérida ·
   Campeche · Tikal bölgesi · Guadalajara · Zacatecas · Durango.
```

### 🔴 EMRE'NİN BAĞLAYICI HÜKMÜ — bu işin ana kuralı
> **"EĞER YERLEŞİM VAR İSE NOKTA KONUR. YOK İSE UYDURACAK HALİMİZ YOK.
> DEVASA BOŞLUKLAR OLACAKSA OLSUN."**

⇒ Hedef sayılar **tavan değil yön**. 55 yerine 40 yazıp *"kalan 15 için
kaynak susuyor"* demek **başarıdır**; 55'e ulaşmak için uydurmak
**başarısızlıktır.**

### VE BOŞLUĞUN CİNSİNİ YAZ — `CLAUDE.md §11`, NOKTA SİBİRYA sınavı
Bir yeri boş bırakıyorsan, **niçin** boş olduğunu kaydet:
```
kaynak AÇIKÇA konuşuyor ("burada devlet yoktu")  → neden:"devletsiz"
kaynak SUSUYOR (hiç tartışmıyor)                 → neden:"veri-yok"
```
⚠️ İkisi haritada aynı görünür; fark **bir sonraki oturum içindir.**
`devletsiz`e bir daha bakılmaz, `veri-yok`a bakılır. Cinsini yazmadan
`kasitli_bosluk` koyma — bugün **97 noktanın cinsi yazılı değil**, o borcu
büyütme.

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN      data/yerlesimler_amerika3.js      ← YENİ, bunu sen açacaksın
              oturumlar/AMERIKA-0902.md         ← kendi ilerleme dosyan
🔴 DEĞİL      data/yerlesimler.js · yerlesimler_amerika.js · _amerika2.js
              (başkasının · yalnız OKU, mükerrer sınavı için)
              arac/*.py · js/app.js · kök *.md · data/devletler.js
```

🔴 **AD ALANI DA SENİN — `CLAUDE.md §7`:** dosyan
`window.YERLESIMLER_AMERIKA3` tanımlayacak. *"Ayrı dosya vermek, ayrı ad
alanı vermek değildir"* — beş dosya tek ad kullanıp %74 kayıp riski
üretmişti.

**Şema:** `VERI-YAPISI.md` — veri yazmadan ÖNCE oku. `s:[{f,t,d}]`
içindeki `d:` kimliği **`arac/renkler.py` BOYALAR'da tanımlı olmalı**,
yoksa bölge boyanmaz. `data/devletler.js`teki **gerçek `id:`yi** kullan,
kendi transliterasyonunu değil.

---

## ④ SENİ BAĞLAYAN YASALAR

```
CLAUDE.md §2     noktasız bölge EN YAKIN PETEĞE EMİLİR — işinin sebebi bu
CLAUDE.md §4     kaynak kuralı. TDV Amerika'yı KAPSIYOR: tek `amerika`
                 maddesi İnka · Aztek · Peru · Brezilya'yı somut tarihle
                 veriyor (5 kayıt tek maddeden doğrulandı). ÖNCE ORAYA BAK.
                 Dışına çıkarsan: AKADEMİK · BİLİMSEL · GÜVENİLİR.
                 🔴 forum · blog · içerik çiftliği · kaynaksız derleme YASAK
                 Vikipedi TEK DAYANAK DEĞİL.
                 `kaynak:` alanına AÇIKÇA yaz; bulunamadıysa `bulunamadı` yaz.
CLAUDE.md §3.5   HAYALET DEVLET: `s:` dönemi yazarken devletin ÖMRÜNÜ
                 kontrol et (`data/devletler.js` `f`/`t`).
CLAUDE.md §11    yakın mükerrer · yuvarlak tarih · sed/heredoc YASAĞI
```

### 🔴 YAZMADAN ÖNCE ÜÇ SINAV — `oturumlar/NOKTA-KUTU-DEFTERI.md`
```
① 3 KM    yeni noktanın 3 km'sinde başka nokta var mı
          — bağlı evrende VE kuyrukta BEKLEYEN dosyalarda
② AD      aynı ad başka dosyada var mı
          🔴 `girdi.yukle` bunda ValueError ATAR — MOTOR HİÇ BAŞLAMAZ
③ KUTU    senin kutun başkasınınkiyle örtüşüyor mu
```
```bash
py arac/_baglama_onsinav.py data/yerlesimler_amerika3.js
```
⚠️ ① ve ②'yi bu araç ölçer, ③ defterden okunur.

**SENİN KUTUN (defterde yerin ayrıldı):**
```
AMERİKA-0902 · Batı yarıküre · 56G–72K / 170B–34B
🟢 Bu kutuda başka oturum YOK — bugün ölçüldü.
```

---

## ⑤ HABERLEŞME

🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.** Ekrana yazdığın metni koordinatör
**görmez**. Kendi pencerene *"iş üstündeyim"* yazmak, cevap vermemekle
**aynı şeydir.**

```bash
py arac/tahta.py yaz --kim "AMERIKA-0902" --kime "1.MURAT" --mesaj "..."
```

```
AÇILINCA     "açıldım · brifingi okudum · şu dosyalar bende · kutum şu"
KALEM KALEM  bir alt bölge bitince HEMEN — biriktirme
SORU GELİNCE iş sürüyor olsa bile HEMEN:
             "iş üstündeyim · şu aşamadayım · tahminen şu kadar kaldı"
             ("birazdan bildiririm" cevap DEĞİLDİR)
BİTİNCE      teslim raporu SAYIYLA
```

**AKSAKLIK BEKLEMEZ** — şunlar çıkarsa işin bitmesini bekleme, HEMEN yaz:
kaynaklar çelişiyorsa · şartname yanlış/eksik çıktıysa · beklenenden çok
farklı bir sayı ölçtüysen · bir kalem yetkin dışına taşıyorsa.

**Her maddede üç şey:** ① ne ölçtüm (sayıyla) ② neyi bulamadım (açıkça)
③ ne istiyorum (tek cümle, öneriyle).

⚠️ **Ölçmediğini `ölçmedim` diye yaz.** Ölçülmüş ile hatırlanmış yan yana
durursa okuyan ikisini de ölçülmüş sanır.

---

## ⑥ BİTİŞ ÖLÇÜTÜ

```
① dört alt bölgenin dördü de işlendi (ya da "kaynak susuyor" diye kapandı)
② `py arac/_baglama_onsinav.py` TEMİZ — 3 km ihlali 0 · ad çakışması 0
③ her kaydın `kaynak:` alanı DOLU (ya da açıkça `bulunamadı`)
④ her `s:` kimliği `devletler.js`te var VE ömrü tutuyor (hayalet yok)
⑤ boş bıraktığın her bölge için cinsi yazılı: `devletsiz` | `veri-yok`
```
**Teslim raporu SAYIYLA:** *"27 → 55, şu 8'i şu sebeple yazılmadı"* —
*"bitirdim"* değil.

🔴 **Dosyanı BAĞLAMA.** `arac/girdi.py` koordinatörün. Sen *"hazır"* de,
bağlamayı 1.MURAT yapar — **üretim koşarken `arac/*.py` değişirse koşu ÖLÜR.**

---

## ⑦ DURUM BEYANI — teslimden sonra SUSMA

Son sözün **durumun** olsun:
```
✅ "İŞLERİM BİTTİ — boştayım, yeni iş bekliyorum."
⏳ "BEKLİYORUM: <ne> · <kimden> · <ne zaman tekrar bakacağım>"  ← ÜÇÜ BİRDEN
```
⚠️ **Sessizlik bir durum değildir.** Sustuğunda koordinatör seni "hâlâ
çalışıyor" sayar; boş kapasiten görünmez. Ölçüldü: üç oturum teslim
etmişti, koordinatörün **52 dakika** haberi olmadı.
