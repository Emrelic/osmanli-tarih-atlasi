# PARALEL TASARIM — %82'lik aşamayı çok çekirdeğe açmak

```
AD      PARALEL TASARIM
MODEL   Opus 5 (yüksek efor)
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SEVK    1.MURAT (koordinatör) · 10 Eylül 2026
KANAL   send_message → koordinatör ("From" etiketindeki kimlik)
```

## ⓪ NİÇİN — Emre'nin sorusu, ve ölçüm

Emre yeni bilgisayar araştırıyor. Ölçüldü (**gerçek koşu logu**, benzetim
değil):

```
KOŞU 20s 04dk (işlemci 18s 55dk · I/O bekleme %5,7)
  Yabancı devlet gövdeleri   16s 28dk   %82,1   ← EZİCİ ÇOĞUNLUK
  Dönemler (delta yapısı)     1s 43dk    %8,6
  Çöl tavanı                    52dk     %4,4
  Dijkstra                       2dk     %0,2
çapraz sayaç: `yabancı gövde geometrisi` 3629 çağrı · 15s 35dk · %77,7
motor: multiprocessing · threading · Pool → HİÇBİRİ YOK (TEK ÇEKİRDEK)
GPU:   Shapely/GEOS/NumPy CUDA KULLANMAZ → katkı SIFIR
```

⇒ **16 çekirdekli bir makine ancak bu aşama paralelleşirse öder.**
Paralelleşmezse yeni makine yalnız tek-çekirdek hızı kadar (~2-2,5 kat)
verir; paralelleşirse çok daha fazlası mümkün.

🔴 **VE EMRE'NİN İKİNCİ SORUSU ASIL SORU:** *"kodu paralelleştirme işin
sağlığını doğruluğunu etkiler mi?"* — Bu şartnamenin tamamı o sorunun
cevabını **ölçmek** için var. Cevap "hayır" diye VARSAYILMAYACAK.

## ① ÖLÇÜLMÜŞ ENGEL — havuz SIRALI, geometri DEĞİL

`uret_petek.py:4443` aşaması `for _wdid in BOYALAR` diye dönüyor; her
devletin geometrisi bağımsız. **Ama** çıktı `havuza()`dan geçiyor
(`:4564`) ve o fonksiyon **paylaşılan bir tekilleştirme indeksi okuyor**:

```python
k = json.dumps(halka, separators=(",", ":"))
j = halka_ix.get(k)                    # ← BÜTÜN devletlerin ORTAK havuzu
if j is None:
    j = len(halka_hav); halka_hav.append(halka); halka_ix[k] = j
```

⇒ N'inci devletin **halka indeksleri**, 1..N-1'in havuza ne koyduğuna
bağlı. Geometri paralel, **havuzlama sıralı.**

🔴 **VE DAHA ÖNCE BİR GİRİŞİM DENENİP BIRAKILMIŞ** — `:4443`
civarındaki yorum aynen şöyle:
> *"Döngüyü ikiye bölüp (önce plan, sonra geometri) tekrarı kaldırmak
> **denendi ve BIRAKILDI**: dönem birleştirme ölçütü `aktif == onceki and
> dnm`, yani set mantığı GEOMETRİ SONUCUNA bağlı (`dnm` yalnız gövde boş
> çıkmayınca büyüyor). Ayırmak çıktıyı değiştirebilirdi; 'hiçbir çıktı
> değişmemeli' kuralı tekrarı kabul etmekten daha ağır bastı."*

⚠️ **Senin önerin O GİRİŞİMDEN FARKLI OLMALI** ve farkı şartnamede yazılı:
o girişim döngüyü **plan / geometri** diye böldü. Bu tasarım döngüyü
**DEVLET BAŞINA** bölüyor — her işçi KENDİ devletinin TAM mantığını
(plan + geometri, sırasıyla) koşturur; yalnız **havuzlama** ertelenir.
Devlet-içi sıra korunur. **Ama bunun yeterli olduğu ÖLÇÜLMEDİ** — senin
işin tam olarak onu ölçmek.

## ② İŞ — üç adım, ve ÜÇÜNCÜSÜ atlanamaz

### ADIM 1 — BAĞIMLILIK HARİTASI (ölçüm, tasarım DEĞİL)

`asama("Yabancı devlet gövdeleri")` bloğunun **tamamını satır satır oku**
ve şu tek soruyu cevapla:

> **Bir devletin işlenmesi, ÖNCEKİ bir devletin bıraktığı hiçbir duruma
> bağlı mı — `havuza()` DIŞINDA?**

```
ARANACAK   döngü dışında tanımlanıp döngü içinde YAZILAN her ad
           (DEV_HALKA · DEV_PARCA · DEVLET_KAYIT · sayaçlar · önbellekler)
ÇIKTI      `denetim/PARALEL-BAGIMLILIK-0910.md`
           her ad için: SALT OKUNUR mu · BİRİKTİRİCİ mi · GERİ OKUNUYOR mu
```
🔴 **"Geri okunuyor mu" ayrımı işin kalbi:** yalnız yazılan bir biriktirici
(ör. `DEVLET_KAYIT.append`) sıra korunarak birleştirilebilir. **Geri
okunan** bir biriktirici (ör. `halka_ix.get`) sonucu değiştirir.

### ADIM 2 — TASARIM (yazı, kod DEĞİL)

İki fazlı öneri:
```
① PARALEL   her devletin geometrisi → ham halka listesi (yan etkisiz)
② SIRALI    sonuçlar havuza ÖZGÜN DEVLET SIRASIYLA verilir
```
②'de `havuza()` **birebir aynı çağrı dizisini aynı sırayla** görür.
⇒ İddia: çıktı **bit düzeyinde aynı.**
⚠️ **Bu bir İDDİADIR, ADIM 3 onu sınayana kadar hüküm değildir.**

Ayrıca yaz: bellek maliyeti (N işçi × devlet geometrisi RAM'de) ve
Windows'ta `multiprocessing` kısıtları (`fork` yok, `spawn` var —
modülün yeniden import edilmesi ne kadar sürer).

### ADIM 3 — 🔴 BİT DENKLİĞİ SINAVI (bu olmadan hüküm YOK)

```
🔴 İKİ 20 SAATLİK KOŞUYLA SINANMAZ. Küçültülmüş girdide kanıtlanır:
   · az devlet (ör. BOYALAR'ın 20 kimliği)
   · dar pencere
   · AYNI girdiyle SIRALI ve PARALEL koş
   · çıktıları BAYT BAYT karşılaştır (hash)
BAŞARI ÖLÇÜTÜ   sha256(sıralı) == sha256(paralel)   · başka hiçbir şey değil
BAŞARISIZLIK    AYRIŞAN İLK BAYT ve SEBEBİ raporlanır — "yakındı" YOK
```
📌 Ve **öngörünü ÖLÇÜMDEN ÖNCE yaz** (`dersler/D022`): *"denk çıkacak"*
mı diyorsun, *"ayrışacak"* mı? Tahminini rapora ÖNCE koy.

## ③ DOSYALARIN — ve `arac/` NİÇİN YASAK

```
🟢 YAZARSIN
   oturumlar/PARALEL-TASARIM.md              ← ilerlemen
   denetim/PARALEL-BAGIMLILIK-0910.md        ← ADIM 1
   denetim/PARALEL-TASARIM-0910.md           ← ADIM 2
   denetim/ARAC-PARALEL-SINAV-0910.py        ← ADIM 3 sınavı
   denetim/PARALEL-SINAV-SONUC-0910.md       ← ADIM 3 sonucu

🔴 YAZMAZSIN
   arac/**   MOTOR İZİNDE (`girdi.motor_izi`) ve KOŞU 9 BAŞLIYOR.
             Koşu sürerken `arac/*.py` DONMUŞTUR (§7). Dokunursan koşu
             ölmez ama ÇIKTI YAYINLANAMAZ hâle gelir — bu ayrım §7'de
             ölçülmüş bir vakayla yazılı (10s 35dk'lık bir koşu tam bu
             yüzden çöpe gitti).
   data/**   aynı sebep
```
⚠️ **Sınav betiğin `uret_petek.py`yi DEĞİŞTİRMEDEN koşmalı** — kendi
kopyanı `denetim/` altında kurabilirsin ya da ilgili fonksiyonu import
edip sarabilirsin. Motor dosyasına **tek karakter** yazma.

**Ad alanı:** Python yazıyorsun, `window.*` çakışması yok. Dosya adların
`PARALEL-` önekli olsun; `git add` ve `git commit` **ikisinde de**
pathspec'i ADIYLA tekrarla (dizin pathspec'i bu depoda `git add -A`
kadar süpürücüdür — 140 dosyalık bir commit üretti).

## ④ KABUL ÖLÇÜTÜ — sayıyla

```
ADIM 1   bloktaki döngü-dışı adların TAMAMI sınıflandırılmış
         (N ad → salt-okunur a · biriktirici b · geri-okunan c ; a+b+c=N)
ADIM 2   tasarım yazılı · bellek ve `spawn` maliyeti TAHMİNLE değil
         ÖLÇÜMLE (küçük bir deneyle) verilmiş
ADIM 3   sha256 karşılaştırması KOŞMUŞ ve sonucu yazılı
         🟢 DENK   → hüküm: paralelleştirilebilir · beklenen kazanç ölçülmüş
         🔴 AYRIŞTI → AYRIŞAN İLK BAYT + SEBEP + çare önerisi
```
🔴 **"Paralelleştirilebilir görünüyor" TESLİM DEĞİLDİR.** Teslim, sha256
karşılaştırmasının SONUCUDUR — hangi yöne çıkarsa çıksın.

## ⑤ AKSAKLIK — bekletmeden

```
BEKLEYEMEZ  · ADIM 1'de `havuza` DIŞINDA geri-okunan bir ad bulursan
              (tasarımın temelini değiştirir)
            · küçültülmüş girdiyle koşu kuramıyorsan
            · bellek maliyeti makul görünmüyorsa (bu makine 12 GB,
              boş 3,1 GB — ölçüldü)
```

📌 Ve bir uyarı: **bu iş "hızlandırma" değil "denklik" işidir.** Kazanç
ölçüsü ikincil; asıl teslim, çıktının değişip değişmediğidir. Emre'nin
sorusu birebir buydu: *"sağlığını doğruluğunu etkiler mi?"*
