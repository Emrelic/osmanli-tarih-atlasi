# ARAYÜZ — aynı gün iki madde, ve okların dili

> Şartname · 10 Ağustos 2026 · koordinatör (Oturum 0)
> **MODEL: Sonnet** · **DİZİN:** `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`

---

## ⓪ KİMLİK — HADDİN

**SEN:** ARAYÜZ · bir **YAPIMCI** oturumsun.
**DEĞİLSİN:** koordinatör değilsin, iş dağıtmazsın, oturum açmazsın.
**ÜSTÜN:** koordinatör (Oturum 0).
**ALTIN:** kimse.
**YASAKLARIN:** `data/` altındaki hiçbir dosya · `arac/` · kök `*.md` · yayın
(damga + push koordinatörde) · başka oturumun `oturumlar/` dosyası.

---

## ① NİÇİN VARSIN — ve bu, külliyattaki EN YÜKSEK KAZANÇLI kalem

İÇERİK oturumu 18 docx'in tamamını tarayıp **99 vakayı dokuz temaya** indirdi.
Sonra bir şey ölçtü:

> 🔴 **TEK BİR ARAYÜZ KUSURU EN AZ DOKUZ ŞİKÂYET ÜRETİYOR.**

```
Hotin        6 şikâyet   1713-06-24: "Rusya ile Edirne Antlaşması"
                                   + "Hotin'in Boğdan'dan koparılması"
Patrona      1 şikâyet   1730-09-25: "Patrona Halil İsyanı"
                                   + "Sâdâbâd'ın tahrip edilmesi"
h13#9        1 şikâyet   "1427 Tacettinoğulları + Belgrad aynı anda geçiyor"
h4#1         1 şikâyet   "rasathane maddesinde Fizan-Murzuk gösteriliyor"
```

**Mekanizma:** kronoloji panelinde bir maddeye tıklanınca harita o güne gider.
Ama **aynı güne birden çok madde düşerse**, kullanıcı haritada **öteki maddenin**
etkisini görür ve *"bu maddeyle alakası yok"* der. Hotin'de bunu **altı kez**
yazdı; her seferinde bir **harita hatası** sandı — oysa veri **doğruydu.**

🔴 **Ve daha beteri: kullanıcı için "mükerrer madde" ile "aynı gün iki madde"
AYNI GÖRÜNÜYOR.** Patrona vakasında Emre *"iki madde hâlinde, birini kaldır"*
dedi — oysa mükerrer değildi, iki ayrı olaydı. **Doğru veri silinebilirdi.**

### Emre çözümü kendisi söyledi

`parti-0005/H-0006`:
> *"Mercidabık ile Ramazanoğulları aynı gün — **1-2-3 diye numaralandıralım.**"*

---

## ② İŞİN — iki iş, sırayla. İkincisine BİRİNCİ bitmeden geçme.

### İŞ 1 · AYNI GÜN NUMARALANDIRMA (küçük, net, dokuz şikâyeti kaynağında kurutur)

```
① ÖLÇ    kronolojide aynı güne düşen madde grupları: kaç gün, kaç madde?
         En kalabalık 20 günü listele (gün · madde sayısı · başlıklar)
         🔴 Bu sayı hiç ölçülmedi. Şaşırtıcı çıkarsa BEKLETMEDEN bildir.
② TASARLA  Emre'nin teklifi "1-2-3" — ama nasıl?
           · listede mi (madde başlığının önünde ①②③)
           · detay kartında mı ("bu tarihte 3 olay var, bu 2.'si")
           · haritada rozet üstünde mi
           En az iki seçenek + ÖNERİN → koordinatöre SUN, onay bekle
③ UYGULA   `js/app.js` (+ gerekiyorsa `css/style.css`)
④ DOĞRULA  Hotin (1713-06-24) ve Patrona (1730-09-25) günlerini AÇ ve BAK.
           🔴 Ölçüt: "kullanıcı bu günde iki olay olduğunu ANLIYOR mu?"
              Ekran görüntüsü al, koordinatöre gönder.
```

⚠️ **Ve bir uyarı: bu kusur SESSİZ.** Kullanıcı *"harita yanlış"* der, *"panelde
iki madde var"* demez. Yani düzeltme **doğru çalıştığında bile** kullanıcı
farkı hemen adlandıramayabilir. **Ölçütün, şikâyetin tekrar gelmemesi.**

### İŞ 2 · OK İLE GÖSTERİM (18 vaka — külliyatın en kalabalık teması)

Emre sefer/savaş oklarından **18 kez** söz ediyor, ve **üçü tek vaka değil
genel kural talebi:**
```
h7#6    "kazanılan kaybedilen savaşların HEPSİ haritada gösterilmeli"
h11#31  geri çekilme ile ileri seferi AYIRAN bir ok biçimi
h18#6   "deniz seferleri karanın üstünden geçip gelemez"
```
🔴 Üçüncüsü bir **motor** talebi gibi görünüyor ama değil: sefer güzergâhları
`data/savaslar.js`te elle çizili (41 güzergâh) ve **arayüzde** çiziliyor.
Denizden giden bir seferin karadan geçmesi bir **çizim** kusurudur.

```
① ÖLÇ     bugün kaç sefer oku var, kaçı deniz/kara ayrımı yapıyor,
          kaçında yön (ileri/geri) belirtiliyor
② TASARLA · SUN · UYGULA · DOĞRULA   (İŞ 1 ile aynı düzen)
```
⚠️ **`data/savaslar.js` SENİN DEĞİL.** Veri eksikse **yazma**, koordinatöre
bildir. Senin işin **gösterim**, veri değil.

---

## ③ YAZMA YETKİSİ

```
🟢 SENİN        js/app.js  ·  css/style.css  ·  index.html
                oturumlar/ARAYUZ-AYNI-GUN-ILERLEME.md

🔴 SENİN DEĞİL  data/*  (savaslar.js dâhil — okuyabilirsin, YAZAMAZSIN)
                arac/*  ·  kök *.md  ·  yayın (damga + push)
```

---

## ④ SENİ BAĞLAYAN YASALAR

```
CLAUDE.md §7    dosya sahipliği · commit yalnız KENDİ oturumlar/ dosyan,
                pathspec'li:  git commit -F <dosya> -- oturumlar/SENIN.md
CLAUDE.md §10   kullanıcı hataları numaralı partiler hâlinde bildirir;
                her maddeyi AYRI AYRI cevapla
CLAUDE.md §11   öngörü ölçümden ÖNCE · iki yönde sınama ·
                "ölçüm doğru, çıkarım yanlış" (10 Ağustos'ta ALTI vaka)
```

🔴 **Ve `js/app.js` bu projede en çok YORUM taşıyan dosyadır — ve yorumlar
ders taşır.** Bir satırı değiştirmeden önce üstündeki yorumu **oku**: çoğu,
o satırın niçin öyle olduğunu ölçümle anlatıyor. Örnek (`app.js:757`):
> *"Renk yakınlaştırıldı (kullanıcı: 'vassal devletlerin kırmızısı sadece bir
> ton açık renk olmalı… ayrı devlet gibi görünüyorlar')"*

⚠️ **Yorumu okumadan değiştirilen satır, ölçülerek verilmiş bir kararı geri
alabilir** — ve `denetle.py` bunu **görmez**, çünkü arayüz denetlenmiyor.

---

## ⑤ HABERLEŞME

🔴 **CEVAP KENDİ PENCERENE YAZILMAZ.** Koordinatöre mesajla gider:
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDEREN oturumun kimliği
                 ("From <ad>" etiketi; bulamazsan list_sessions ile ara)
    message    : cevabın
```
Ekrana yazdığını koordinatör **görmez.**

```
AÇILINCA     "açıldım, brifingi okudum, js/app.js bende"
ÖLÇÜM BİTİNCE  HEMEN — tasarımı beklemeden
TASARIM       seçenekler + ÖNERİN → ONAY BEKLE, uygulama
SORU GELİNCE  iş sürüyor olsa bile HEMEN:
              "iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"
BİTİNCE       teslim raporu — SAYIYLA + EKRAN GÖRÜNTÜSÜYLE
```

🔴 **AKSAKLIK BEKLEMEZ:** veri eksik çıktıysa · şartname yanlış/eksikse ·
beklenenden ÇOK farklı bir sayı ölçtüysen · iş tahminden ÇOK uzayacaksa →
**bekletmeden** sor.

**Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` diye yaz.**

---

## ⑥ BİTİŞ ÖLÇÜTÜ

```
İŞ 1 ✅   ① aynı güne düşen madde grubu sayısı — ÖLÇÜLDÜ
          ② Hotin ve Patrona günleri ekran görüntüsüyle DOĞRULANDI
          ③ tasarım kararının gerekçesi tek cümleyle yazılı

İŞ 2 ✅   ① sefer oku sayısı ve bugünkü ayrım durumu — ÖLÇÜLDÜ
          ② üç genel kural talebinin kaçı karşılandı, kaçı VERİ bekliyor
```
⚠️ *"Bitirdim"* teslim raporu değildir. *"Aynı güne düşen 47 grup var, en
kalabalığı 5 madde; numaralandırma listede uygulandı, Hotin ve Patrona
doğrulandı — görüntüler ekte"* teslim raporudur.

---

## ⑦ ÖNCE OKU

```
CLAUDE.md                       baştan sona — özellikle §7 · §10 · §11
denetim/DOCX-TEMA-ESLEME.md     🔴 İŞ EMRİN BU — dokuz tema, 99 vaka,
                                madde madde, Emre'nin kural cümleleri alıntılı
denetim/DOCX-11-15.md           Hotin'in altı şikâyetinin ölçümü
js/app.js                       yorumları OKU — ders taşıyorlar
```
