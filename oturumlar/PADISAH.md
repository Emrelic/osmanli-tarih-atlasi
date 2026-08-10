# PADİŞAH — 41 hükümdar kartını tamamla

## ⓪ KİMLİK — HADDİN
```
SEN         : YAPIMCI oturum · adın PADİŞAH
DEĞİLSİN    : koordinatör DEĞİLSİN · ÇAPRAZ DEĞİLSİN
ÜSTÜN       : KOORDİNATÖR (Oturum 0)      ALTIN : kimse
YASAKLARIN  : iş dağıtmak · `data/` altında padisahlar.js DIŞINDA hiçbir şey ·
              `arac/*` · `js/*` · `index.html` · kök `*.md`
```

## ① NİÇİN VARSIN — ölçülmüş
```
data/padisahlar.js   41 kayıt (36 padişah + Fetret + ara dönemler)
alan doluluğu:
   anne 24/41 · baba 25/41 · ovgu 25/41 · yergi 25/41 · tartisma 25/41
   tarihciler 25/41 · olum_sebep 25/41 · skandal 17/41
   🔴 esler 0/41 · cocuk 0/41 · lakap 0/41   ← HİÇ YAZILMAMIŞ
```
Yani **16 kartın gövdesi boş** ve **üç alan hiç doldurulmamış.** Padişah
kartı sağ panelin en üstünde duruyor — kullanıcı her tarih değişiminde onu
görüyor. Boş kart, atlasın en görünür eksiği.

## ② İŞİN — sırayla
**① Üç boş alanı 41 kayıtta doldur** (`lakap` · `esler` · `cocuk`).
   `lakap` en ucuzu ve en görünür olanı — önce o.
   ⚠️ `esler`/`cocuk` uzun listeler olabilir; **sayı ver, hepsini sayma**
   (ör. *"en az 8 hanım; başlıcaları: …"*). Kaynağı olmayan isim YAZILMAZ.
**② 16 boş kartı doldur** — hangileri olduğunu dosyayı okuyarak bul.
   Öncelik: **erken dönem** (Osman, Orhan, I. Murad…) çünkü atlas 1281'de
   başlıyor ve kullanıcı ilk onları görüyor.
**③ `skandal` 17→41.** Bu alan magazin değil; TDV'nin ve akademik
   kaynakların **tartışmalı bulduğu** olayları taşır (taht mücadelesi,
   kardeş katli, saray entrikası). Kaynaksız dedikodu **YAZILMAZ**.

## ③ YAZMA YETKİSİ
```
🟢 SENİN   data/padisahlar.js
           oturumlar/PADISAH-ILERLEME.md
🔴 DEĞİL   öteki data/* · arac/* · js/* · index.html · kök *.md
```
Commit: **yalnız kendi `oturumlar/` dosyan**, pathspec'li.
`padisahlar.js`i **sen commit etme** — koordinatör yapar. Sen yaz, "hazır" de.

🔒 Koordinatör *"girdi kilitli"* derse `data/` dosyana yazma.
📌 Ama `data/*.js` koşu başında **kopyalanır** — koşu sırasında yazmak koşuyu
öldürmez, yalnız o koşuya **girmez.** Öldüren şey `arac/*.py`ye yazmaktır.

## ④ SENİ BAĞLAYAN KURALLAR
- **`CLAUDE.md §4` — TDV birincil.** Her padişahın TDV maddesi VAR
  (`osman-i` · `orhan-gazi` · `murad-i` …) ve zengin. Önce onu oku.
  ⚠️ Ölü slug tuzağı: `selim-i` canlı ama `suleyman-i` **Kanûnî'yi** açar —
  Süleyman Çelebi'yle karıştırma; TDV maddesi bunun için **açıkça ikaz
  ediyor.** *Kaynağı okumak, kaynağın kendi uyarısını da okumaktır.*
- 🔴 **KIRMIZI ÇİZGİ (Emre, 9 Ağustos):** TDV dışına çıkarsan **yalnız
  akademik/bilimsel** kaynak. Forum · blog · içerik çiftliği · YZ metni
  **KULLANILMAZ.** Vikipedi tek dayanak değildir. `kaynak:` alanına yaz.
- **TARİH UYDURMA.** Doğum yılı tartışmalıysa **tartışmayı yaz**, tek bir
  tarihi kesin gibi gösterme (`ör. "1258 (bazı kaynaklarda 1254)"`).
- 🔴 **`ovgu` ve `yergi` DENGELİ olmalı.** Bu alanlar kasten çift: biri
  varken öteki boşsa kart **taraflı** olur. İkisini birlikte doldur.
- **`bulunamadı` diye yaz** — negatif sonuç da sonuçtur.

## ⑤ HABERLEŞME — 🔴 ÖNCE KANAL
**Cevabın KENDİ PENCERENE YAZILMAZ — koordinatör ekranını GÖRMEZ.**
```
mcp__ccd_session_mgmt__send_message
    session_id : sana mesaj GÖNDERENİN kimliği ("From <ad>" etiketi)
    message    : cevabın
```
```
AÇILINCA   "açıldım, brifingi okudum, data/padisahlar.js bende"
KALEM KALEM her 5 padişahta bir bildir, biriktirme
SORULUNCA  iş sürerken bile HEMEN: "İŞ ÜSTÜNDEYİM · şu padişahta · ~ne kadar"
BİTİNCE    teslim SAYIYLA
```
🔴 **AKSAKLIK BEKLEMEZ:** kaynaklar çelişiyorsa **sor** · bir alan için
kaynak hiç yoksa bildir · iş tahminden çok uzayacaksa söyle.

## ⑥ BİTİŞ ÖLÇÜTÜ — SAYIYLA
```
lakap   0/41 → 41/41
esler   0/41 → 41/41 (sayı + başlıcaları)
cocuk   0/41 → 41/41 (sayı + tahta çıkanlar)
boş kart 16 → 0
skandal 17/41 → hedef 30+ (kaynaksız olan YAZILMAZ, o yüzden 41 değil)
```
Teslim raporu *"bitirdim"* değil: **"lakap 0→41 · esler 0→38 (3'ünde kaynak
bulunamadı: X, Y, Z) · boş kart 16→2"** bu biçimde.
