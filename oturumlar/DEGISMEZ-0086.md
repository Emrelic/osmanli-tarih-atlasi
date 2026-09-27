# DEGISMEZ-0086 — şartname

> PAKET-0077 H-0069 + H-0086 · model Opus
> Bölme planı: [`oturumlar/PAKET-0077-BOLME.md`](PAKET-0077-BOLME.md)

## Amaç

Emre'nin iki maddesi aynı şeyi istiyor ve ikincisi kuralı açıkça talep ediyor:

> **H-0069:** *"türkiye bulgaristan sınırı D kalite belirlenmiş ama bu sınırı
> geçen aşan şehir bölgeleri var, bu olamaz. bir şehrin bölgesi ülke sınırını
> aşıp diğer ülkenin topraklarına uzanamaz."*
> **H-0086:** *"bir şehrin sınırı ülke sınırını geçerek yabancı ülke
> topraklarına erişemez, bu haritada bu sıkıntı var. düzeltelim ve **genel
> kural olarak yazalım**."*

Senin işin **düzeltmek değil, KURALI KURMAK**: `arac/denetle.py`ye yeni bir
soru eklemek ve onu `CLAUDE.md §3`e bir değişmez olarak yazmak.

## 🔴 Dosya sahipliği

- `arac/denetle.py` — **sana devredildi** (normalde Oturum 0'da)
- `CLAUDE.md` §3 — yalnız yeni değişmez bloğu; başka bölüme dokunma
- `denetim/DEGISMEZ-0086.md` — raporun
- `denetim/DEGISMEZ-0086-sinav.py` — iki yönlü sınavın

🔴 `arac/denetle.py` MOTOR TUZUNDA **DEĞİL** (tuz = `uret_petek.py` ·
`renkler.py` · `girdi.py` · `motor_onbellek.py`) ⇒ dokunman koşu istemez.
⚠️ `data/` altına **HİÇBİR ŞEY YAZMA.** Bulduğun ihlalleri düzeltmek senin
işin değil; kuralı kurmak senin işin.

## Devralacağın ölçüm — YENİDEN ÖLÇME, OKU

- `denetim/AVRUPA-SINIR-0077.md` — **ölçümün TAMAMI burada**
- `denetim/AVRUPA-SINIR-0077-hat_tasma.js` · `-bolge_tasma.js` — **çalışan aletler**

Ölçülmüş sayılar (koşu 15 gövdesi, 27 Eylül):
```
1920-04-23  tbmm gövdesi Bulgaristan'ı 10 PETEKTE aşıyor
            TR→BG  Edirne 20 km · Lalapaşa 10 · Demirköy 9
            BG→TR  Mustafapaşa · Umur Fakih · Malko Tırnova ≥24 km · Rezve 18
1923        9 petek · Edirne 12 km
EK          BÖLGELER katmanındaki Edirne k1 poligonunun ~21.958 km²'si
            Bulgar gövdesinin İÇİNDE
```
🔴 **Son satır kapsamı genişletiyor:** kusur yalnız petekte değil, BÖLGELER
katmanında da var. Kural ikisini de sormalı mı, yoksa ayrı iki soru mu —
karar senin, ama gerekçesini yaz.

📌 Ve aynı raporun bir uyarısı: **hatlarda kusur BULUNAMADI** (be-lu %0 ·
be-nl %0 · be-fr %12). Yani taşma D hattının yanlışlığından değil, gövdenin
hatta yaslanmamasından geliyor. Kuralı "hat yanlış" varsayımı üzerine kurma.

## 🔴 Nasıl kurulur — sıra ATLANAMAZ (`§11`)

### ① ÖNGÖRÜYÜ ÖNCE YAZ
Ölçmeden önce `denetim/DEGISMEZ-0086.md`ye yaz: **sınav anı + evreni + beklenen
sayı**. Sonra ölç. Öngörü ölçümden sonra yazılırsa ölçüm kendini doğrular.

### ② TAVANLA GİR, SIFIRLA DEĞİL
`denetle.py` şu an **TEMİZ** diyor. Yeni bir soru sorup 10 ihlal bulursan
kapıyı kapatır ve bütün yayını bloke edersin. Projenin kalıbı bu değil —
ötekilere bak: `2s açık 179 (tavan 195)` · `2i 1 açık (tavan 3)` ·
`kırılmasız madde 11 (tavan 42)`.
⇒ **Bugünkü ölçülen değeri TAVAN yap, büyümeyi YASAKLA.** Tavan bir
gevşetme değil bir DONDURMADIR: borç görünür kalır, artışı ihlal olur.
⚠️ Tavanı yazarken hangi tarihte hangi sayıyı ölçtüğünü de yaz — bayat
tavan, olmayan tavandan kötüdür.

### ③ İKİ YÖNDE SINA — yoksa çalışıyor SAYILMAZ (`C13`)
```
① KUSURLU vakayı yakalıyor mu?  → Edirne 1920 ateşleme vakasıdır
② TEMİZ vakayı RAHAT bırakıyor mu? → be-lu/be-nl (%0) yakalanMAMALI
```
🔴 **"0 bulundu" demek için aletin ATEŞLENDİĞİNİ ispat et** (`B9`). Boş küme
her öngörüyü doğrular. Sınavını `denetim/DEGISMEZ-0086-sinav.py`ye yaz ve
bilerek bozulmuş bir vakayla ateşlendiğini göster.

### ④ SINIR VAKALARINI DÜŞÜN — kural fazla geniş olmamalı
Aşağıdakiler ihlal DEĞİLDİR ve kuralın onları yakalamaması gerekir:
- **Deniz aşırı / eksklav toprak** — meşru olarak uzakta olabilir
- **Beyanlı boşluk** (`__BOSLUK__`) — kusur değil BEYAN (`§3.5.1`)
- **Osmanlı ↔ tâbi** çelişkisi (`§3`: çelişki SAYILMAZ)
- **Kasıtlı çöl/dolgu noktaları** (`§3` Değişmez 1'in beklenenleri)
- **İşgal katmanı** (`isg:`) — işgal zaten başkasının toprağındadır
Bunları muaf tutarken her muafiyeti GEREKÇESİYLE yaz; sessiz muafiyet, kuralı
sessizce boşaltır.

### ⑤ CLAUDE.md'ye YAZ — tek paragraf, vakasını `dersler/`e
`§3`teki değişmezlerin yanına aynı biçimde. Uzun gerekçe `dersler/D<sıra>`ye;
`CLAUDE.md` kuralı taşır, vakayı değil.

## Teslim ölçütü

① `denetle.py` yeni soruyu soruyor, tavanıyla, ve **hâlâ "temiz" diyor**
② İki yönlü sınav `denetim/DEGISMEZ-0086-sinav.py` ile gösterildi
③ `CLAUDE.md §3` bloğu + `dersler/DIZIN.md` satırı
④ `py arac/durum_tablosu.py --yaz` ile §1.5'e yeni satır (üretilir, elle yazılmaz)
⑤ Commit + TEK tahta mesajı, son satırı **"bekçimi öldüreyim mi?"**

⚠️ **Yarım kural, kuralsızlıktan kötüdür** — yazılmış ama ölçmeyen bir
denetim, "bu soru soruluyor" sanılmasına yol açar. Bitiremezsen tavanı
koymadan bırak ve söyle.

## Haberleşme

**① Kanal = TAHTA.**
```
py arac/tahta.py yaz --kim "DEGISMEZ-0086" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <yol>
```
🔴 `--kime "HERKES"` YAZMA (Emre, 27 Eylül: ilgisiz oturumlar uyandırılıp
token yakılmamalı).

**② Bekçi.** Bash `run_in_background` ile:
`py arac/tahta_bekci.py --kim "DEGISMEZ-0086" --cik`
Çıkınca işle ve aynı komutla **SESSİZCE** yeniden kur. Boş uyandıysan
EKRANA HİÇBİR ŞEY YAZMA.
🔴 Bekçin "exit code 4" ile düşerse kusur sende değil — bilgisayarın
kapanmasıdır (`dersler/D236`). Teşhis etme, sessizce yeniden kur.

**③ Aksaklık BEKLEMEZ:** başka oturumun dosyası gerekiyor · sayı beklenenden
çok farklı · kalem yetkini aşıyor → hemen tahtaya yaz.

⚠️ Bugün ALTI oturum "paylaşılan kaynak" izin reddi aldı. Sen de alırsan
**ZORLAMA** — tahtadan bildir, koordinatör commitler.

## Yasaklar (§11, hook zorluyor)

```
bash ` (backtick) YASAK · heredoc YASAK · py -c "<türkçe>" YASAK
git commit -m "<türkçe>" YASAK  ⇒  git commit -F <dosya>
python YASAK ⇒ py · git add -A ve dizin pathspec'i YASAK
```
Her py betiğinin başına:
`sys.stdout.reconfigure(encoding="utf-8", errors="replace")`
🔴 `py arac/uret_petek.py` KOŞTURMA — koşuyu yalnız Oturum 0 başlatır.
