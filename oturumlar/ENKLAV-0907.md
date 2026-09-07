# ENKLAV-0907 — `Değişmez 7`: 661 sorgusuz enklav

## ⓪ KİMLİK — HADDİN
```
SEN         İşçi oturum · ENKLAV-0907
DEĞİLSİN    Koordinatör DEĞİLSİN. İş dağıtmazsın, oturum açmazsın.
ÜSTÜN       1.MURAT HÜDAVENDİGAR (Oturum 0)
ALTIN       kimse
YASAKLARIN  iş dağıtmak · `data/*.js` (KOŞU SÜRÜYOR) · TAVANI YÜKSELTMEK
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

```
Değişmez 7  ✗  661 sorgusuz enklav (tavan 660)
   A-koridor      483   ana gövde ≤300 km ⇒ ARADAKİ KAYITLARA dönem yazılmalı mı?
   B-bilinmiyor   166   300-800 km ⇒ kaynak susuyorsa KAYDET, uydurma
   C-hakiki        12   800 km üstü / gövdesiz ⇒ muhtemelen HAKİKİ, `enklav:true`
   muaf: beyan 52 · coğrafî-tecrit 4227 · ada-fethi 8 · küçük-devlet 261 ·
         geçici-cephe 64
```

🔴 **VE ALETİN KENDİ UYARISINI OKU — bu dal VERİ DEĞİL YÖNTEM ÖLÇER:**
> *"Bir ada, veri YANLIŞ olduğu için de DOĞRU olduğu için de doğar. Liste
> «burada bir SORU SORULMADI» der, «burası YANLIŞ» DEMEZ. Kayıtları
> silerek kapatmak, hakiki enklavları yok etmek olur."*

🔴 **TAVANI YÜKSELTME.** `CLAUDE.md` FAZ 1'in dersi: *"tavan
yükseltilseydi ihlal susardı ve Sarıkamış ada kalırdı — denetim temiz,
harita yanlış."* Tavan 660'ta kalır; sen SAYIYI indirirsin.

## ② İŞİN — ucuzdan pahalıya

### ② a — C-HAKİKİ (12) ÖNCE
800 km üstü / gövdesiz. Bunlar muhtemelen **gerçekten enklav** ve çare
tek satır: ilgili döneme `enklav: true`.
🔴 Ama **tek tek doğrula**: gerçekten enklav mı, yoksa `§2`nin *noktasızlık*
vakası mı (*"o bölgede yerleşim noktası var mı? Cevap hayırsa hata orada,
kodda değil"*)? İkisi haritada AYNI görünür.

### ② b — B-BİLİNMİYOR (166) TRİYAJ
300-800 km. Şart aletin kendi cümlesi: **kaynak susuyorsa KAYDET, UYDURMA.**
Üç kovaya ayır ve SAYILARI ver:
```
🟢 KORİDOR VAR    aradaki kayıtlara dönem yazılmalı → yama önerisi
🟡 HAKİKİ ENKLAV  `enklav:true`
⚪ ÖLÇÜLEMEDİ     kaynak susuyor ⇒ AÇIK kalır, "temiz" diye raporlanmaz
```

### ② c — A-KORİDOR (483) — KAPSAMINI SEN BELİRLE
483 kayıt bir oturuma çok. **En büyük/en görünür olanlardan başla** ve
kaç tanesini kapattığını SAYIYLA bildir. Hepsini bitirmek ölçüt DEĞİL.
📌 `CLAUDE.md §11`: *"bazı listeler kuyruk değil PENCEREDİR"* — bu liste
bitirilmek için değil, **azaltılmak** için var.

### ② d — ARACI KOŞTUR, TAKLİT ETME
```bash
py arac/denetle.py 2>&1 | grep -A30 "Değişmez 7"
py arac/denetle.py --ayrinti 2>&1 | grep -A80 "Değişmez 7"   # tam liste
```
🔴 Bir aleti taklit eden ölçüm onun **eşiğini VE KOVA YAPISINI** taşımalı
(`§11` — bir oturum `4s` kovasını taşımadığı için 33 kayıt sapma verdi).

## ③ YAZMA YETKİSİ
```
🟢 SENİN   denetim/BULGU-ENKLAV-0907.md · denetim/yer_yama_enklav_*_0907.js
           denetim/ARAC-ENKLAV-*-0907.py · oturumlar/ENKLAV-0907.md
🔴 DEĞİL   data/*.js (KOŞU 8 · 7 Eylül 11:17:46 · ~16 s)
           arac/denetle.py (tavan SENİN DEĞİL) · js/app.js · kök *.md
```

## ④ SENİ BAĞLAYAN YASALAR
```
§2      noktasızlık İKİ YÖNE de hata üretir — ve hangi yöne, KOMŞUNUN
        kimliğine bağlıdır
§3.5.1  bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür
§11     tavan yükseltmek ihlali susturur, kusuru KAPATMAZ
        ölçmediğini `ölçmedim` diye yaz · `0` ≠ "yok"
🔴 §11 KABUK  kaçış/Türkçe/backtick bash'ten GEÇMEZ · sed/heredoc/py -c YOK
```

## ⑤ HABERLEŞME
```
py arac/tahta.py yaz --kim "ENKLAV-0907" --kime "1.MURAT" --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
C-hakiki  12  → kaçı `enklav:true`, kaçı noktasızlık, kaçı ölçülemedi
B         166 → üç kovaya AYRILDI, sayılarıyla
A         483 → kaç tanesine bakıldı, kaçı kapandı
```
Teslim SAYIYLA: *"661 → N"* ve **hangi kovadan indiği**.

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım."   ⏳ "BEKLİYORUM: <ne>·<kimden>·<ne zaman>"
```

## ⑧ EMEKLİLİK NÖBETİ
```bash
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/emeklilik.py --nobet --kim "ENKLAV-0907"
```
⚠️ **Bulamadığını `bulunamadı` diye yaz.**
