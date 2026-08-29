# BALKAN SAVAŞLARI 1912-1913 — GÜN BE GÜN

**AD:** BALKAN &lt;KOL&gt; · **MODEL:** Opus · **DİZİN:** `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`
**KOORDİNATÖR:** ORHANGAZİ

---

## ClaudEmre

Emre (29 Ağustos 2026):

> *"Tüm Balkan savaşları 1912-1914 arası, birinci ikinci balkan
> savaşlarında **hangi şehir hangi ülkeye kaybedildi**, **ordular nereye
> kadar ilerledi**, **harita gün be gün nasıl değişti** — bunu detaylı
> çalış ve **haritayı da buna uygun hale getir, tekrar kontrol et.**"*

Ve bir kusuru kendisi gösterdi:

> *"Balkan savaşlarından sonra Meriç nehrinin batısında Osmanlı toprağı
> kalmış görünüyor, bu hatalı olmalı."*
> *(1913-11-14 ekran görüntüsü üzerine)* *"Bu tarihte haritanın bu şekilde
> olduğuna emin miyiz?"* — **HAYIR. Ölçüldü, yanlış.**

---

## 🔴 BAŞLANGIÇ KANITI — koordinatör ölçtü, sen doğrula

Batı Trakya kutusu (40,5-41,8 K / 24,0-26,4 D), **1913-10-01** kesiti —
yani İstanbul Antlaşması'ndan iki gün sonra:

```
🔴 Drama      24,15°D   d: 1413-07-05 → 1923-10-29    TEK BLOK
              Balkan savaşları HİÇ yazılmamış. 510 yıllık tek dönem.
🔴 Gümülcine  25,41°D   d: 1913-09-29 → 1920-05-27    Bulgar'dan sonra YİNE Osmanlı
🔴 İskeçe     24,89°D   aynı desen
🔴 Ferecik    26,17°D   aynı desen
🟢 Enez · İpsala — Meriç ağzının Türkiye yakası, muhtemelen DOĞRU (doğrula)
```

🟢 **VE VERİNİN KENDİ İÇİNDEKİ ÇELİŞKİ KANIT:** aynı kutuda **Dedeağaç ve
Sofulu `bulgaristan-kralligi`** yazılı. Yani bazı Batı Trakya kayıtları
doğru, üçü yanlış — tek bir oturumun hatası, sistematik değil.

---

## KOLLAR — dosya bazlı bölünme (çakışma yok)

| kol | coğrafya | dosya |
|---|---|---|
| **BALKAN TRAKYA** | Kırklareli · Lüleburgaz · Edirne · Çatalca · Dimetoka · Batı Trakya | `data/yer_yama_balkan_trakya.js` |
| **BALKAN MAKEDONYA** | Selanik · Manastır · Üsküp · Kumanova · Serez · Drama · Kavala | `data/yer_yama_balkan_makedonya.js` |
| **BALKAN BATI** | Yanya · İşkodra · Draç · Elbasan · Berat · Novipazar | `data/yer_yama_balkan_bati.js` |

🔴 **Kendi dosyandan başkasına YAZMA.** Ad alanı dosya adıyla aynı:
`data/yer_yama_balkan_trakya.js` → `window.YER_YAMA_BALKAN_TRAKYA`
*(`CLAUDE.md §7`: ayrı dosya vermek ayrı AD ALANI vermek değildir —
beş dosya tek ad kullanınca 537 kayıt 137'ye düşmüştü, %74 kayıp.)*

---

## ÇALIŞMA — dört adım, sırası bağlayıcı

### ① ÖNCE MEVCUT VERİYİ ÖLÇ, sonra kaynağa git
```bash
py arac/_yer_ara.py "<ad>"          # kayıt VAR mı + KOORDİNAT doğru mu
```
Kendi kutunda hangi noktalar var, bugün ne yazıyor — **tabanı kendin kur.**
Devraldığın hiçbir rakamı doğrulamadan aktarma.

### ② GÜN BUL — külliyatta HAZIR olanları ÖNCE dene
Bunlar zaten kronolojide var (ölçüldü) ve `Değişmez 2`yi açmaz:
```
1912-10-08  Balkan Savaşları'na giriş
1912-10-23  Şark Ordusu bozgunu — Kumanova ve Selânik'in kaybı
1912-10-24  Kırkkilise (Kırklareli) Savaşı
1912-11-03  Edirne kuşatması başladı
1912-11-08  Selanik'in alınması
1913-03-06  Yanya'nın alınması
1913-03-26  Edirne'nin Bulgarlara düşüşü
1913-05-30  Londra Antlaşması — I. Balkan Savaşı sona erdi
1913-06-29  İkinci Balkan Savaşı başladı
1913-07-21  Edirne Osmanlı tarafından geri alındı
1913-08-10  Bükreş Antlaşması — II. Balkan Savaşı sona erdi
1913-09-29  İstanbul Antlaşması — Bulgaristan ile barış
1913-11-14  Atina Antlaşması — Yunanistan ile barış
```
🔴 **Kaynağın verdiği gün bunlardan biri DEĞİLSE:** o güne madde YAZ
(kendi kolunun kronoloji dosyasına değil — bana bildir, ben sevk ederim).
⚠️ **Gün kaydırması ancak HEDEF MADDE AYNI OLAYI ANLATIYORSA meşrudur.**
Bu ölçütü ARAŞTIRMA 2S kurdu ve koordinatörünkinden iyi: külliyatta
"yakın bir gün" bulup oraya yapışmak, Emre'nin en çok şikâyet ettiği
kusurun ta kendisidir.

### ③ YAMAYI **TAM** YAZ — kapsam daraltma YASAK
```javascript
{ad:"Gümülcine",
 d:[ ...var olan bütün Osmanlı dönemleri, düzeltilmiş... ],
 s:[ ...var olan bütün yabancı dönemleri, düzeltilmiş... ],
 kaynak:"TDV `gumulcine` — gövde okundu: \"...\"",
 neden:"..."}
```
🔴 **Diziyi TAM ver.** Uygulayıcı (`arac/_sahiplik_uygula.py`) artık
**KAPSAM DARALMASINI REDDEDİYOR** — bugün Çaçak'ta 113 yıl sessizce
silinecekti, nöbetçi yakaladı. Eksik dizi yazarsan yaman UYGULANMAZ.
🟢 Kendini sına: `py arac/_sahiplik_uygula.py` (kuru koşu, hiçbir şey yazmaz)

### ④ ORDULARIN İLERLEYİŞİ — ayrı ve ikincil
Emre *"ordular nereye kadar ilerledi"* de dedi. Bunun için `savaslar.js`de
sefer güzergâhı yapısı VAR (41 kayıt). **Önce sahiplik doğru olsun**;
güzergâh ikinci turda ve bana sor.

---

## KAYNAK — `CLAUDE.md §4` kırmızı çizgi

**TDV birincil.** Ölçülmüş canlı sluglar: `gumulcine` (200) · `drama` (200)
· `iskece` (200). **ÖLÜ:** `dedeagac` (302) · `garbi-trakya` (302).
⚠️ TDV bu savaşlarda çoğu zaman **yıl veriyor, gün vermiyor** — ölçüldü:
> `drama`: *"Balkan savaşları sırasında bir ara Bulgarlar'ın eline geçen
> Drama, II. Balkan harpleri esnasında yeniden Yunanlılar tarafından
> zaptedildi"* — **tek tam tarih yok.**

⇒ Gün için **akademik kaynak MEŞRU** (`§4`: TDV o tanecikte susuyorsa):
Cambridge History · üniversite yayını · hakemli makale · antlaşma metni.
🔴 **KULLANILMAZ:** forum · blog · içerik çiftliği · kaynaksız derleme.
Vikipedi tek dayanak değil — yalnız "hangi maddeye bakayım" der.
**`kaynak:` ZORUNLU. Bulunamadıysa `bulunamadı` diye YAZ — bu bir
SONUÇTUR ve uydurmaktan kat kat değerlidir.**

⚠️ TDV slug tuzağı: HTTP **302 = ÖLÜ**. **200 + doğru başlık ≠ doğru
madde** (`ordu` askerî ordu, `saray` mimarî saray). **İçeriği OKU.**

---

## 🔴 GARBÎ TRAKYA HÜKÛMETİ — dikkat, tuzak

TDV `gumulcine` gövdesi: *"II. Balkan Savaşı ile I. Dünya Savaşı arasında
kurulan ve **kısa süren** Garbî Trakya Hükûmet-i Müstakillesi'nin
başşehri olan Gümülcine..."* — tarih **VERMİYOR**.

Bu gerçek bir devlet (31 Ağustos – 25 Ekim 1913) ve `devletler.js`de
künyesi **var mı ÖLÇ**. Varsa `s:` ile yazılabilir; yoksa o iki ay
Bulgaristan yazılır ve **niçin öyle yazıldığı `neden:`e konur.**
⚠️ **Ama 1913-1920 arası yedi yılı ona bağlamak YANLIŞ** — bugünkü
verideki kusur tam bu: iki aylık bir yapı yedi yıla uzatılmış olabilir.

---

## HABERLEŞME

```
① nöbetçini `Monitor` ile kur (Bash DEĞİL), persistent: true
② tahtaya:  py arac/tahta.py yaz --kim "<SEN>" --kime "ORHANGAZI" --mesaj "..."
③ AÇILINCA yaz: "açıldım, brifingi okudum, şu dosya bende"
④ HER TURUN SONUNDA tek satır — susmak, hiç çalışmamakla aynı görünür
⑤ ÖLÇTÜĞÜNÜ ve ÇIKARDIĞINI ayrı satıra yaz. Tek satırda birleşince
   çıkarım, ölçümün güvenilirliğini ödünç alıyor.
```

## 🔋 PİL KISITI — bugün geçerli

Laptop **bataryada**, kapak kapalı. Pil 14,8 Wh (sağlık %49) ⇒ **~2 saat.**
```
① kalem bitince HEMEN commit — pathspec'li, `git add -A` YASAK
② commit mesajını `Write` ile dosyaya yaz, bash'ten GEÇİRME
③ 15 dakikada bitmeyecek kalemi BAŞLATMA — "başlamadım, sebep pil" yaz
④ `arac/uret_petek.py`ye DOKUNMA — koşu Emre fişe takınca
```

## TESLİM

```
data/yer_yama_balkan_<kol>.js     yama (DİZİ, `ad:` dolu, dizi TAM)
denetim/BULGU-BALKAN-<KOL>.md     ölçüm · hangi gün nereden · bulunamadılar
```
Onarlı gruplarla bildir. **"Bitirdim" değil, "24 → 7, şu yedisi şu
sebeple kaldı"** diye.
