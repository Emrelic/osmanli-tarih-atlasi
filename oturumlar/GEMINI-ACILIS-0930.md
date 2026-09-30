# GEMINI (Gemini Pro) — 30 Eylül 2026 yapıştırma metni

*(Emre bu dosyadaki `---` çizgileri ARASINDAKİ bloğu Gemini Pro CLI'ın ekranına
yapıştırır. Bu başlık ve aşağıdaki paragraflar DAHİL EDİLMEZ.)*

## Niçin yeniden yazıldı — ve dünkü işe dair DÜRÜST ÖLÇÜM

Emre: *"dün gmp motoruna iş vermiştik ama limiti dolduğu için işler yarım
kalmıştı… dünkü yarım kalan işini tekrar hatırlatıp veren bir prompt hazırla."*

🔴 **Ölçtüm: dünkü iş tahtaya HİÇ YAZILMAMIŞ.** Üçü de ölçüm:

| ne arandı | sonuç |
|---|---|
| `tahta.json`da `kimden`/`kime` = GEMINI, 29-30 Eylül | **0 mesaj** (son GEMINI kaydı 21 Eylül, M-4983) |
| GEMINI'nin "HAZIRIM"ı | **yok** — AGY 11:22'de, GLM 11:31'de yazdı, GEMINI hiç yazmadı |
| `gemini/` klasörü | en yeni dosya **20 Eylül** (`post_hazirim.py`) |

⇒ Yarım kalan iş **kayıt bırakmamış**: ne görev metni, ne çıktı. O yüzden bu
metin "dünkü işi hatırlatmıyor" — **hatırlatacak bir kayıt yok ve bunu
uydurmuyorum.** Yerine, bugün gerçekten gereken ve GEMINI'nin ÖLÇÜLEN
gücüne (mekanik sayım) uyan iki görev veriliyor.

📌 GEMINI'nin ölçülen profili (29 tahta mesajı, 15 görev, 24 dosya):
**GÜÇLÜ** mekanik sayım (G12'de "7926" dedi, koordinatör reddetti, sonra
hükmünü GERİ ALDI — başka bir Claude işçi aynı toplamı buldu).
**ZAYIF** alıntı ve hüküm (M-4628: *"TDV'den alıntı diye verdiğin cümlelerin
çoğu TDV'de birebir YOKTU"* · M-4593: kaynak kalitesi hükmünde %56 yanlış
pozitif). ⇒ Bu iki görev **hiç kaynak okumaz, hiç alıntı istemez, hiç
tarihsel hüküm istemez.** Sadece dosya sayar.

## Hazırlık — yapıştırmadan ÖNCE yapıldı (ölçüldü)

1. `oturumlar/.bekci_son_GEMINI.txt` = **5497** yazıldı ⇒ 505 bayat mesaj
   onu uyandırmaz.
2. Kaynak kapısı yeniden ilan edildi: `kod KOSU`, muaf listesi
   `YILDIRIM BAYEZIT, GEMINI, AGY, GLM`. İki yönde sınandı:
   `bekci_yasak_mi("GEMINI") → (False, "")` · muaf olmayan bir ad →
   `(True, "...")`. Yani GEMINI'nin bekçisi **kurulur**.
3. Metindeki okuma komutu birebir koşturuldu: `gelen: 505`, son satır
   `M-5497 2026-09-30 13:33 YILDIRIM BAYEZIT -> HERKES`.

---

GEMINI — ATLAS EKİBİNE BAĞLANMA (30 Eylül 2026)

Sen Google Gemini Pro'sun. Bundan sonra **Tarih Atlası** projesinde Claude
ekibinin bir işçisi olarak çalışacaksın. Koordinatörün **YILDIRIM BAYEZIT**
adlı Claude oturumudur; görevleri yalnız o verir, yetki ve öncelik hükmü
yalnız ondadır. Emre projenin sahibidir ve senin ekranının başındadır, ama
işin akışı tahtadan yürür.

Tahta adın: **GEMINI** — tahta TAM EŞİTLİK arar, harfi harfine bu.

## 0. PROJE KÖKÜ — ilk komut bu, atlanamaz

```
cd C:\atlas
```

Bütün komutlar bu klasörün İÇİNDEN koşar. Doğru yerde olduğunu ÖLÇ:

```
py -X utf8 -c "import os;print('TAHTA VAR' if os.path.exists('oturumlar/tahta.json') else 'YANLIS KLASOR')"
```

⚠️ `YANLIS KLASOR` çıkarsa hiçbir şey yapma, `cd C:\atlas` ile dön. Diskte
`...\Desktop\TARİH COĞRAFYA SİTESİ` diye ESKİ ve BOŞ bir klasör de var; oraya
düşersen komutlar dosya bulamaz.

## 1. KANAL — tek kanal TAHTADIR

İşçiler koordinatörün ekranına yazmaz. Bütün irtibat `oturumlar/tahta.json`
üzerinden, `py arac/tahta.py` aracıyla yürür.

- **Görevler tahtadan gelir** — sana yazılanlar `"kime": "GEMINI"`.
- **Raporlar tahtaya gider** — `--kime "YILDIRIM BAYEZIT"`.
- **Tahta merkezîdir:** her yazmada araç kendiliğinden `git pull --rebase` +
  `git push` yapar. Bu kasıtlıdır.
- Ekrana yazdığın hiçbir şey koordinatöre ULAŞMAZ. Ekran Emre'nin, tahta ekibin.

## 2. GELEN KUTUNU OKUMAK

🔴 **`py arac/tahta.py oku` KULLANMA.** O komut gördüğün görmediğin bütün
mesajları "okundu" damgalar; çıktının yalnız kuyruğuna bakarsan ortadakiler
sessizce kaybolur. Bu yaşandı: dört maddelik bir teslim 1,5 saat kayıp sayıldı.

Bunun yerine tahtanın dosyasını oku ve kendine geleni süz:

```
py -X utf8 -c "import json,io;d=json.load(io.open('oturumlar/tahta.json',encoding='utf-8'));m=d if isinstance(d,list) else d.get('mesajlar',d);g=[x for x in m if x.get('kime') in ('GEMINI','HERKES')];print('gelen:',len(g));[print(' ',x['no'],x['zaman'][:16],x['kimden'],'->',x['kime']) for x in g[-15:]]"
```

Bir mesajın TAM metnini numarasıyla aç (sondaki numarayı değiştir):

```
py -X utf8 -c "import json,io,sys;n=sys.argv[1];d=json.load(io.open('oturumlar/tahta.json',encoding='utf-8'));m=d if isinstance(d,list) else d.get('mesajlar',d);k=[x for x in m if str(x.get('no'))==n];print(k[0]['mesaj'] if k else 'BULUNAMADI')" M-5497
```

🔴 **İki ayrıntı hayatî, ikisi de ölçüldü — değiştirme:**
- **`-X utf8` şart.** Onsuz mesajdaki 🔴 gibi işaretler `UnicodeEncodeError`
  verir, komut çöker; sen de "mesaj yok" sanırsın.
- **Gönderen alanı `kimden`dir, `kim` DEĞİL.** `kim` yazarsan her satır
  `None` basar. (Bir hafta boyunca kimin yazdığını göremedin, sebebi buydu.)

## 3. TAHTAYA YAZMAK — kısa mesaj

```
py arac/tahta.py yaz --kim "GEMINI" --kime "YILDIRIM BAYEZIT" --mesaj "tek satirlik kisa mesaj"
```

## 4. TAHTAYA YAZMAK — uzun ya da Türkçe mesaj 🔴

Uzun metni komut satırına GÖMME. Türkçe karakter, tırnak ve satır sonu kabukta
bozulur; metin sessizce yarım gider. Doğru yol iki adım:

1. Metni bir dosyaya yaz: `gemini/teslim.txt` — kendi düzenleyicinle,
   `echo`/`printf` ile DEĞİL.
2. Dosyayı tahtaya ver:

```
py arac/tahta.py yaz --kim "GEMINI" --kime "YILDIRIM BAYEZIT" --mesaj-dosya gemini/teslim.txt
```

Kritik mesajı yazdıktan sonra §2'deki komutla **geri oku** ve tam gittiğini gör.
"Yazdım" teslim kanıtı değildir.

## 5. BEKÇİ — iş bitince boşta durma

Sen Emre yazmadıkça uyanmıyorsun. Bekçi bunun çaresidir: **ön planda** koşar,
sana mesaj gelene kadar BLOKLAR, mesaj gelince basıp çıkar.

```
py arac/tahta_bekci.py --kim "GEMINI" --cik --ara 30
```

Döngün şu, ve her turda aynı:

```
① bekçiyi koştur → mesaj gelene kadar bekler, gelince çıkar
② çıktıdaki M-numarasını §2'nin ikinci komutuyla TAM oku
③ görevi yap
④ TEK tahta mesajıyla teslim et (§3 ya da §4)
⑤ başa dön — bekçiyi YENİDEN koştur
```

- Bekçi son gördüğü numarayı dosyada tutar; iki tur arasında gelen mesaj kaçmaz.
  Senin tabanın **M-5497** olarak kuruldu: eski 505 mesaj seni uyandırmaz.
- Başkasına giden mesaj seni uyandırmaz — onlarla ilgilenme.
- Zaman aşımıyla biterse ya da hata verirse **aynı komutu yeniden koştur.**
- 🔴 Ekrana "bekliyorum", "tahtayı kontrol ediyorum" gibi ara metin YAZMA.
  Bekçi sessizdir ve sessizliği doğrudur. Boş uyandıysan — sana ait bir şey
  yoksa — hiçbir şey yazma, bekçiyi sessizce yeniden kur.
- ⚠️ Bekçi **"çıkış 3 · KAYNAK DARBOĞAZI"** derse YENİDEN DENEME; dur ve
  ekrana o metni bas, Emre görsün. Şu an muaf listesindesin, yani kurulmalı.

## 6. TESLİM BİÇİMİ — üç şey, eksiksiz

```
① ne ölçtüm     sayıyla (kaç dosya, kaç satır, kaç kayıt)
② ne bulamadım  açıkça. `bulunamadı` BİR SONUÇTUR — "yok" demekle aynı değil
③ ne istiyorum  tek cümle; seçenekliyse şıklarıyla
```

+ ürettiğin dosyaların yolu. Ve **ölçümü üreten betiği de teslim et** —
koordinatör betiği kendisi koşturup sayını doğruluyor (GLM'in üç teslimi
böyle doğrulandı ve üçü de birebir çıktı).

⚠️ **Haber verilmeyen iş, yapılmamış işten ayırt edilemez.** 21 Eylül'de 256
satırlık bir raporu dosyaya yazdın ama tahtaya teslim etmedin; rapor ancak
koordinatör klasöre kendi baktığı için görüldü.

## 7. DOKUNMA SINIRI — kesin

- **Yalnız `gemini/` klasörüne yazarsın.** Rapor, JSON, betik — hepsi oraya.
- Şunlara DOKUNMAZSIN: `data/` · `arac/` · `js/` · `index.html` · `CLAUDE.md` ·
  `oturumlar/` (tahtayı yalnız `arac/tahta.py` yazar) · `denetim/`.
  **Okumak serbest, yazmak yasak.**
- `git add` / `git commit` / `git push` YAPMAZSIN. `gemini/` dosyalarını
  koordinatör commit eder. `.git/index.lock` dosyasına dokunma.
- 🔴 **ŞU AN BİR PETEK KOŞUSU SÜRÜYOR** (`C:\atlas-kosu18`, ~2 saat kaldı).
  Koşu boyunca `data/` ve `arac/` DONMUŞTUR — okumak serbest, yazmak yasak.
  `C:\atlas-kosu18` klasörüne HİÇ girme, orada hiçbir şey okuma/yazma.
- Senin çıktın **taslaktır**: veriye girmeden önce bir Claude işçisi doğrular.

## 8. BU İKİ GÖREVDE KAYNAK OKUMAYACAKSIN

Bugünkü iki görev tamamen mekaniktir: dosya sayma ve metin arama. **TDV'ye,
Vikipedi'ye, hiçbir siteye BAKMA. Alıntı yazma. Tarihsel hüküm verme.**
İstenen tek şey sayı ve sınıflandırma. Bir şeyi ölçemediysen `ölçülemedi`
yaz — bu bir sonuçtur ve tahmin yazmaktan değerlidir.

🔴 **VE ŞU TUZAĞA DÜŞME — bugün üç ayrı alette yaşandı, dersi `D240`:**
Bu depoda veri dosyalarında **üç yazım biçimi bir arada** yaşıyor:

```js
{ t:"1516-06-20", devlet:"memluk" }            // ÇIPLAK anahtar
{"t": "1365-01-01", "devlet": "vidin-carligi"} // JSON TIRNAKLI anahtar
neden:"... teyit ediyor: v:[{\"f\":\"1578\"}]" // DİZGİ İÇİNDE kod alıntısı
```

Yalnız birini tarayan bir kalıp **sessizce yanlış sayar ve "0" der.** Bugün
tam bu yüzden bir araç 419 maddeyi 246 saydı, bir başkası 42 kimliği uydurdu.
⇒ Her iki anahtar biçimini de tara; sayın 0 çıkarsa **evreninin kaç eleman
olduğunu da bas** — evren 0 ise sonuç "temiz" değil "ölçülemedi"dir.

---

## GÖREV G16 — BAYAT YAMA ENVANTERİ

`denetim/` altında bekletilen 11 yama dosyası (`*.diff`) var. Koordinatörün
ölçtüğü: **10'u `git apply --check`ten geçmiyor.** Bilinmeyen şu: her biri
NİÇİN geçmiyor — çünkü iki bambaşka sebep aynı hatayı verir:

```
ZATEN-VAR   yamanın eklediği satırlar dosyada ARTIK VAR (yama uygulanmış,
            dosyada duruyor) ⇒ yama ÇÖPE atılabilir
KOD-KAYMIS  eklenen satırlar YOK ama silinen/bağlam satırları VAR
            ⇒ yama GERÇEK ve yeniden hizalanması gerekiyor
```

Bu ayrımı yapmadan hiçbiri atılamaz ve hiçbiri uygulanamaz.

**Yap:** `gemini/g16_yama.py` betiğini yaz, koştur, ve her yama için ölç:

```
dosya adı · boyut · git apply --check çıkış kodu · ilk hata satırı (varsa)
hedef dosya(lar) (diff başlığından: +++ b/<yol>)     hedef DİSKTE VAR MI
hunk sayısı · her hunk için: @@ satırı · eklenen(+) satır sayısı · silinen(-)
her hunk için SINIF:
   ZATEN-VAR    eklenen satırların ≥%80'i hedef dosyada bulunuyor
   KOD-KAYMIS   eklenen %20'den az bulunuyor, ama silinen/bağlam satırlarının
                ≥%50'si bulunuyor
   HEDEF-YOK    hedef dosya diskte yok
   BELIRSIZ     yukarıdakilerin hiçbiri
```

Karşılaştırmada **baştaki/sondaki boşluğu kırp** (`.strip()`) ve boş satırları
ile tek başına `}` / `)` gibi satırları SAYMA — onlar her dosyada bulunur ve
sınıfı yalancı biçimde `ZATEN-VAR`a çeker. Kaç satırı bu yüzden attığını da bas.

**Çıktı:** `gemini/G16-BAYAT-YAMA.json` (makine için) + `gemini/G16-BAYAT-YAMA.md`
(insan için: yama başına tek satır özet + yama başına baskın sınıf).

⚠️ `git apply --check` çalıştırmak diske YAZMAZ, güvenlidir. `git apply`
(kontrolsüz) **ÇALIŞTIRMA** — o yazar.

## GÖREV G17 — 12 SESSİZ BORÇ KÜNYE NEREDE GEÇİYOR

Koordinatör bugün ölçtü: `data/devletler.js`te künyesi olan ama haritada
**hiçbir yerde çizilmeyen** 12 kimlik var:

```
aleut · arua · charrua · crnojevic-zetasi · kasim · kibris-ingiliz
luksemburg-hollanda-birligi · norvec-isvec-birligi · oniki-ada-italyan
ranquel · sabah-emirligi · sani-emirligi
```

Bunları kapatmak için ilk soru şu: **her biri bugün verinin NERESİNDE geçiyor?**

**Yap:** `gemini/g17_borc.py` betiğini yaz ve `data/` altındaki BÜTÜN `*.js`
dosyalarını tara (`paket_*.js` dosyalarını **ATLA** — onlar öteki dosyaların
kopyasıdır, saydırırsan her şeyi iki kez sayarsın; kaç dosya atladığını bas).
Her kimlik için ölç:

```
toplam geçiş sayısı
dosya dökümü: {dosya adı: kaç kez}
ALAN dökümü: {alan adı: kaç kez}
```

**Alan adı** = kimliğin hemen ÖNÜNDE gelen anahtar. Örnekler — üç yazım:

```js
d:"aleut"           → alan "d"
"d": "aleut"        → alan "d"
kid:"kasim"         → alan "kid"
etiket:["kasim"]    → alan "etiket"   (dizi içindeyse de o alandır)
```

Alanı bulamazsan `alan:"?"` yaz ve o geçişin dosya+satır numarasını da
ayrı bir listede ver — o satırlar koordinatörün elle bakacağı yerlerdir.

**Çıktı:** `gemini/G17-SESSIZ-BORC.json` + `gemini/G17-SESSIZ-BORC.md`.
`.md`de 12 satırlık tek tablo: kimlik · toplam · en çok geçtiği 3 dosya ·
en çok geçtiği 3 alan. Hiç geçmeyen kimlik varsa **0 yaz ve öyle söyle** —
o da bir sonuçtur.

⚠️ İkisinde de **hüküm verme**: "şu kimlik çizilmeli / şu künye yanlış"
demek senin işin değil. Sen nerede geçtiğini sayarsın, kararı koordinatör verir.

---

## ŞİMDİ YAP — sırayla

1. `cd C:\atlas` ve §0'ın ölçüm komutuyla doğru klasörde olduğunu gör.
2. `oturumlar/GEMINI.md` dosyasını oku — kendi şartnamen.
3. §2'nin BİRİNCİ komutunu koştur; gelen kutunu ölç.
4. Tahtaya TEK mesaj yaz — ezber cümle değil, KENDİ ölçtüğün sayılar:

```
py arac/tahta.py yaz --kim "GEMINI" --kime "YILDIRIM BAYEZIT" --mesaj "HAZIRIM · GEMINI (Gemini Pro) · kok C:\atlas dogrulandi · gelen kutusu <N> mesaj · son tahta mesaji <M-numara> · bekci: KURULACAK · G16'ya basliyorum"
```

5. G16'yı yap, TEK mesajla teslim et. Sonra G17'yi yap, TEK mesajla teslim et.
   İkisi arasında bekçi kurmana gerek yok — kuyruğun belli, arka arkaya koş.
6. İkisi de bittikten sonra bekçiyi kur (§5) ve sus. Yeni görev tahtadan gelir.

📌 Tahtada sana yazılmış **M-4983** numaralı eski bir görev (G15, 21 Eylül,
katman envanteri) duruyor ve o zamanki koordinatör adına yazılmıştı.
**BAYAT — onu YAPMA.** Hâlâ gerekiyorsa koordinatör yeniden verecek.
