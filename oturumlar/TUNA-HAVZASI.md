# TUNA HAVZASI 1521–1699 — Belgrad'dan Karlofça'ya, çapraz kaynaklı

## ⓪ KİMLİK — HADDİN
```
SEN        : ARAŞTIRMA oturumu · adın TUNA HAVZASI
DEĞİLSİN   : koordinatör DEĞİLSİN · MOTOR DEĞİLSİN · YAPIMCI DEĞİLSİN
ÜSTÜN      : ClaudEmre koordinatörü
ALTIN      : kimse
YASAKLARIN : 🔴🔴 VERİ DEĞİŞTİRMEK — TEK BİR GÜN BİLE YAZMAZSIN.
             Emre'nin sözü: "bize RAPORLASIN, ONA GÖRE YAPALIM."
             `data/*` · `arac/*` · `js/*` · `index.html` · kök `*.md` ·
             üretim koşusu · iş dağıtmak · başka oturum açmak
```

---

## ① NİÇİN VARSIN — Emre'nin isteği ve iki ölçülmüş boşluk

**Emre, 14 Ağustos 2026:**
> *"Osmanlı'nın Belgrad'ı aldığı tarih ile Karlofça Anlaşması arasındaki tüm
> Macaristan, Avusturya, Hırvatistan, Slovakya, Erdel, Sırbistan ve Bosna'yı —
> Macaristan ve çevresi bölgeyi — ele alan bir oturum yap. Bu oturum tüm
> buraları hem **Osmanlı hem Avusturya, Macaristan, Polonya ve Rus
> kaynaklarından ÇAPRAZLAMA** araştırıp bize raporlasın."*

Ve daha önce (13 Ağu): *"Nereler Osmanlı'ya direkt bağlandı, nereler himaye
idi sonra vassal oldu sonra eyalet oldu, nereler Avusturya'nın kontrolüne
geçti, nereler Erdel'e bağlı idi, olaylar nasıl hangi mekânlarda nasıl
gelişti, statüler ne idi — hepsini konuşmalıyız ki karar verelim."*

### 🔴 ÖLÇÜM 1 — 91 nokta 178 YILDA en çok İKİ sahip görmüş
Kutu `42-50°K / 13-27°D` → **116 nokta.** Sekiz kesitte (Belgrad 1521 ·
Mohaç 1526 · Budin 1541 · Speyer 1570 · Zitvatorok 1606 · Vasvar 1664 ·
2. Viyana 1683 · Karlofça 1699) kaç farklı sahip gördükleri sayıldı:
```
🔴 en çok İKİ sahip:  91 nokta   ⇒ aradaki değişimler YAZILMAMIŞ
🟢 üç ve fazlası:     25 nokta
```
⚠️ Avrupa'nın en çok el değiştiren bölgesinde bir noktanın 178 yılda iki
sahip görmesi, **tarihî değil VERİSEL** bir olgudur.

### 🔴 ÖLÇÜM 2 — `erdel` kimliği bu kutuda HİÇ KULLANILMIYOR
Kutudaki `s:` kimlikleri: `avusturya` 93 · `macaristan` 66 · `sirbistan` 36 ·
`venedik` 28 · `bosna` 15 · `eflak` 13 · `bogdan` 4 … **`erdel` YOK.**
⇒ 1541-1699 arası **158 yıl** yaşamış bir prenslik, adı olmadan, jenerik
`tâbi` (`v:`) olarak çiziliyor. Emre bunu ekranda görüyor: *"Erdel açık
kırmızı."*

### 🔴 ÖLÇÜM 3 — üç YANLIŞ YEŞİL (senin ilk sondan)
`macaristan` kimliği, her noktada **tam Osmanlı onu aldığı gün** bitiyor:
```
Yanıkkale (Győr)  yeşil → 1594-09-27      Eğri  yeşil → 1596-10-12
Kanije            yeşil → 1600-10-20
```
Oysa 1570 Speyer'de János Zsigmond **kral ünvanından vazgeçti** ⇒ ayrı Macar
krallığı bitti. Bu üçü o tarihten sonra **Habsburg sınır kaleleriydi.**
⇒ Yeşil bir siyasî hüküm değil, ***"Osmanlı henüz almadı"* diyen bir
VARSAYILAN.** Doğrula ve hükmünü yaz.

---

## ② İŞİN — RAPOR, veri DEĞİL

### İŞ 0 — TABANI KENDİN ÖLÇ (yarım gün kazandırır)
🔴 Yukarıdaki üç sayıyı **doğrulamadan aktarma** (`YASALAR B10`).
`arac/girdi.py`nin yolundan oku, kendi ayrıştırıcını yazma.
```
① 116 nokta doğru mu · 91/25 ayrımı doğru mu
② `erdel` gerçekten hiç yok mu — `data/devletler.js`te KÜNYESİ var mı?
③ jenerik `v:` (tâbi) dönemleri KİMİ temsil ediyor — nokta nokta çıkar
```

### İŞ 1 — 🔴 ASIL İŞ: MERKEZ MERKEZ STATÜ CETVELİ
Her merkez için, 1521-1699 arası **her statü değişimi**:
```
merkez · tarih (GÜN) · ÖNCEKİ statü · SONRAKİ statü · olay · KAYNAK
```
**Statü sözlüğü — Emre'nin kararı (14 Ağu) + koordinatörün önerisi:**
```
eyalet          doğrudan Osmanlı (beylerbeyilik/sancak)
vassal-özerk    Erdel · Thököly'nin Orta Macar Krallığı · Eflak-Boğdan
himaye          Osmanlı koruyor ama yönetmiyor
🟡 haraçgüzar   YALNIZ vergi veriyor, egemen (Habsburg 1547-1606)
                ⇒ BU KADEME HENÜZ ONAYLANMADI. Vakalarını topla ve
                  "gerçekten ayrı bir kademe mi" diye HÜKÜM VER.
```
⚠️ **Ve `isg:` (işgal) ayrı bir eksendir** — statü değil fiilî durum.
Uzun Savaş'ta (1591-1606) el değiştiren kaleler için doğru alan o olabilir.

### 🔴🔴 VE STATÜLER SIRALI OLMALI — Emre'nin renk ilkesi (14 Ağu)
> *"Kaç kademe statü var ise ona göre farklı renk tonlarında bölümlesin.
> Avusturya Macaristanı, Macar Krallığı, Tökeli Krallığı, Erdel, Osmanlı
> Macaristanı, Osmanlı vassalı, himayesi — her ne ise hepsini ufak renk
> tonu farkları ile görelim. **Ama Osmanlı'ya ne kadar yakınlaşır ise renk
> olarak o kadar yakın olsun, uzaklaştıkça renk tonu da değişsin.**"*

🟢 **Bu ilke tasarımı çözüyor:** altı keyfî renk değil, **BİR RAMPA.**
Renk uzaklığı = siyasî uzaklık. Kullanıcı tonun koyuluğuna bakıp *"bu
Osmanlı'ya ne kadar bağlı"* sorusunu **okumadan** cevaplar.

🔴 **VE BU SENİN İŞİNİ DEĞİŞTİRİYOR: statüleri bir KÜME olarak değil,
SIRALI BİR MERDİVEN olarak teslim et.** Rampanın basamak sırasını rapor
belirleyecek. Koordinatörün taslağı — **sen ölçüp DÜZELT, sıra tartışmalı:**
```
0  DOĞRUDAN OSMANLI (eyalet/sancak)      merkez rengi — en koyu
1  TÂBİ KRALLIK (Thököly · Szapolyai)    padişah TAYİN ediyor
2  TÂBİ PRENSLİK (Erdel)                 prensini diyet seçer, padişah ONAYLAR
3  HİMAYE                                Osmanlı koruyor, yönetmiyor
4  HARAÇGÜZAR (Habsburg 1547-1606)       yalnız vergi, egemen, hatta DÜŞMAN
5  BAĞIMSIZ/DÜŞMAN (Habsburg 1606+)      ayrı renk ailesi
```
⚠️ **Ve sıra apaçık değil, ölçülmeli:** ① ile ② hangisi Osmanlı'ya daha
yakın? Thököly'yi padişah *kral ilan etti* (daha bağımlı görünür) ama Erdel
**158 yıl** sürdü ve haracı düzenliydi (daha kurumsal). ④ ile ⑤ arasındaki
fark gerçek mi, yoksa yalnız bir ödeme kalemi mi?
🔴 Bu sıralamayı **Osmanlı idarî hukukunun kendi tasnifiyle** gerekçelendir
(*dârü'l-İslâm · dârü'l-ahd · dârü'l-harb*), sezgiyle değil.
📌 Ve **bir basamağın vakası yoksa onu YAZMA** — boş basamak, rampada
görünmeyen bir ton demektir ve tasarımı gereksiz kalabalıklaştırır.

**Asgarî kapsanacak merkezler** (koordinatörün listesi — eksiği sen tamamla):
```
OSMANLI EYALET MERKEZLERİ  Budin · Temeşvar · Eğri · Kanije · Varad · Uyvar
MACAR/HABSBURG             Pojon (Bratislava) · Yanıkkale (Győr) · Komarom ·
                           Kassa · Eperjes · Tokaj · Sopron · Estergon
ERDEL                      Kolojvar · Gyulafehérvár · Segesvár · Brassó
HIRVATİSTAN                Zagreb · Varaždin · Karlovac · Sisak · Bihaç
SLOVAKYA                   Uyvar · Nitra · Levice · Trencsén
SIRBİSTAN                  Belgrad · Semendire · Niş · Üsküp
BOSNA                      Saraybosna · Banaluka · Mostar · Travnik · Bihaç
SINIR KALELERİ             Zigetvar · Gyula · Solnok · Hatvan · Vaç ·
                           İstolni Belgrad · Peçuy · Ösek · Mohaç
```

### İŞ 2 — ÇAPRAZ KAYNAK, ve ÇELİŞKİYİ SAKLAMA
Emre **beş kaynak ailesi** istiyor:
```
OSMANLI     🔴 TDV ÖNCE (kırmızı çizgi). Mühimme · Şer'iye sicilleri ·
            tahrir defterleri üzerine yapılmış hakemli çalışmalar
AVUSTURYA   Habsburg arşiv literatürü, Türkenkriege çalışmaları
MACAR       Magyar tarihyazımı — özellikle "három részre szakadt ország"
            (üçe bölünmüş ülke) literatürü
POLONYA     Lehistan'ın Erdel ve Osmanlı ile ilişkisi; Sobieski 1683
RUS         geç dönem (Rus kaynakları bu havzada 17. yy sonuna kadar
            İKİNCİL olabilir — ÖLÇ, ve öyleyse AÇIKÇA YAZ)
```
🔴 **KAYNAKLAR ÇELİŞTİĞİNDE ÇELİŞKİYİ YAZ, BİRİNİ SEÇME.** Bu projede
kaynak seçimi koordinatörün ve Emre'nin kararıdır. Çelişki bir **bulgudur**
— özellikle Osmanlı ile Habsburg kaynakları aynı kalenin "ne zaman
düştüğünde" ayrışıyorsa.
📌 Ve beklenen bir ayrışma var: Osmanlı bir yeri **fethedildiği gün**
sayar; Habsburg **antlaşmayla devredildiği gün** sayar. Aradaki fark
bazen yıllardır ve bizim `d:`/`s:` tarihlerimizi doğrudan etkiler.

⚠️ **Emre'nin kırmızı çizgisi:** *"TDV dışına çıkabilirsin ama gideceğin
kaynaklar AKADEMİK, GÜVENİLİR ve BİLİMSEL olmalı."* Forum · blog · içerik
çiftliği · turizm sitesi · **yapay zekâ üretimi metin** KAYNAK DEĞİLDİR.
Vikipedi **tek dayanak olamaz** — yalnız "hangi maddeye bakayım" der.
`kaynak:` her satırda **açıkça** yazılır; bulunamadıysa `bulunamadı`.

### İŞ 3 — DÖRT AÇIK SORUYA HÜKÜM
```
① Yeşil (`macaristan`) 1541'den sonra hangi noktalarda MEŞRU?
   (Doğu Macar Krallığı 1541-1570 · Speyer'de biter — DOĞRULA)
② Erdel ayrı bir kimlik olarak yazılmalı mı, `tâbi` yetiyor mu?
③ Thököly'nin ORTA MACAR KRALLIĞI (1682-1685) ayrı gösterilmeli mi —
   yoksa `vassal-özerk` içinde Erdel'le aynı mı görünsün?
④ `haraçgüzar` gerçekten ayrı bir kademe mi? (Habsburg 1547-1606:
   vassal DEĞİL · himaye DEĞİL · egemen · yalnız vergi veriyor.
   Osmanlı hukukunda *dârü'l-ahd* — bu tasnif işimize yarar mı?)
```

---

## ③ YAZMA YETKİSİ
```
🟢 SENİN   denetim/TUNA-HAVZASI-RAPOR.md      ← asıl teslimin
           oturumlar/TUNA-HAVZASI-ILERLEME.md
🔴 DEĞİL   data/* (TEK GÜN BİLE YAZMA) · arac/* · js/* · index.html · kök *.md
```
📌 Raporun **uygulanabilir** olmalı: her satırda `merkez · gün · eski → yeni
statü · kaynak`. Koordinatör onu doğrudan bir yapımcı oturuma verebilmeli.

---

## ④ SENİ BAĞLAYAN KURALLAR
```
CLAUDE.md §4   🔴 TDV önce · dışarısı AKADEMİK-GÜVENİLİR-BİLİMSEL
               🔴 TARİH UYDURMA. Gün bilinmiyorsa YYYY-01-01.
               🔴 Slug tuzağı: 302=ölü · 200 dönmesi "doğru madde" DEMEK
                 DEĞİL, İÇERİĞİ OKU (`ordu` askerî ordu maddesini açar).
                 Dar slug tutmazsa KAPSAYICI maddeyi dene.
CLAUDE.md §3.5 🔴 HAYALET DEVLET: bir `s:` dönemi önerirken devletin
               ÖMRÜNÜ `data/devletler.js`ten kontrol et.
CLAUDE.md §11  🔴 kaçış içeren metin BASH'ten geçmez, heredoc DÂHİL
CLAUDE.md §11  🔴 kendi ayrıştırıcını yazma — `arac/girdi.py`den içe aktar
CLAUDE.md §11  🔴 ÖLÇTÜĞÜNÜ ve ondan ÇIKARDIĞINI AYRI SATIRA yaz.
               Tek satırda birleşince çıkarım, ölçümün güvenilirliğini
               ödünç alıyor — bir günde ALTI vaka ölçüldü.
YASALAR B10    devraldığın hiçbir rakamı doğrulamadan aktarma (116/91/25 dâhil)
```

---

## ⑤ HABERLEŞME — 🔴 TEK KANAL TAHTA, `send_message` ÇALIŞMIYOR
13 Ağustos'ta ölçüldü: **yedi oturumun yedisi de** koordinatörün mesajını
HİÇ almadı; araç *"sent"* diyor, hedefe varmıyor.
```bash
git pull --ff-only && py arac/tahta.py oku --kim "TUNA HAVZASI"
py arac/tahta.py yaz --kim "TUNA HAVZASI" --kime KOORDINATOR \
    --kimlik "<kendi oturum id'in>" --cins RAPOR --mesaj "..."
```
🟢 **Kendi kimliğini şöyle bulursun** (KORİDOR ŞEMA buldu, koordinatör
doğruladı): **scratchpad yolunun sonundaki UUID** senin oturum kimliğindir,
başına `local_` eklenir. `.claude/projects` altındaki `<uuid>.jsonl` ile
doğrulanır — iki kaynak birbirini teyit eder.

```
AÇILINCA HEMEN  tahtaya bir satır: "açıldım, şartnameyi okudum"
KALEM KALEM     her bölge bitince bildir, gün sonuna biriktirme
AKSAKLIK        BEKLEMEZ — kaynaklar çelişiyorsa, şartname eksikse,
                sayı beklenenden ÇOK farklıysa: HEMEN sor
ARIZA           ÜÇ YERE bildirilir: koordinatöre · dosyaya · KULLANICIYA
```
⚠️ İlerleme dosyanın **İLK SATIRINA** durum damgası:
`<!-- DURUM: CALISIYORUM | 2026-08-14 10:00 | Bosna bölümü -->`
Haller: `HAZIR · IS-ISTIYORUM · ALDIM · CALISIYORUM · BITTI · BOSTA`

---

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
① kaç merkez incelendi / kaçında statü değişimi BULUNDU
② kaç statü değişimi kaynakla DOĞRULANDI · kaçı `bulunamadı`
③ kaç yerde KAYNAKLAR ÇELİŞTİ — ve çelişkinin cinsi
   (fetih günü mü, antlaşma günü mü, statü adı mı)
④ üç yanlış yeşil (Yanıkkale · Eğri · Kanije) — hüküm ne
⑤ dört açık sorunun (Erdel · Thököly · haraçgüzar · yeşil) HÜKÜMLERİ
⑥ beş kaynak ailesinden kaçına ulaşılabildi — Rus kaynakları
   gerçekten işe yaradı mı, yoksa bu havzada ikincil mi?
```
Teslim *"araştırdım"* değil: *"47 merkez incelendi, 213 statü değişimi
bulundu, 189'u kaynaklı, 24'ü bulunamadı; 11 yerde Osmanlı ile Habsburg
kaynakları FETİH GÜNÜNDE ayrıştı ve deseni şu…"*

**Bulamadığını `bulunamadı`, ölçmediğini `ölçmedim` diye yaz.**

🟢 Ve bu işin değeri şu: Emre bir KARAR verecek (statü kademeleri) ve o
kararı **verinin kendisi** belirlemeli. Senin raporun o kararın tabanı.
