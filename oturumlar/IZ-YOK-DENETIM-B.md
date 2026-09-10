# İZ-YOK DENETİM B — "çözüldü" diyen ama kanıtı olmayan maddeler

```
AD      İZ-YOK DENETİM B
MODEL   claude-sonnet-5 (yüksek efor)
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
SEVK    1.MURAT (koordinatör) · 10 Eylül 2026
KANAL   send_message → local_… (koordinatörün kimliği, mesajın başındaki
        "From" etiketinde). Kendi pencerene yazmak = hiç cevap vermemek.
```

---

## ① SORDUĞUN ÜÇ ŞEYE CEVAP — sırayla

### ⓵ HANGİ DOSYALAR SENDE

```
🟢 YAZABİLİRSİN — ve YALNIZ bunlar:
   oturumlar/IZ-YOK-DENETIM-B.md          ← bu dosya, ilerlemeni buraya yaz
   denetim/IZYOK-B-<ne>-0910.md           ← bulgu raporların
   denetim/ARAC-IZYOK-B-<ne>-0910.py      ← yazarsan aletlerin

🔴 YAZAMAZSIN — HİÇBİRİ, VE SEBEBİ AYRI AYRI:
   data/**            KOŞU 9 BAŞLIYOR — koşu sürerken `data/` DONMUŞTUR
                      (§7). Yazarsan koşu ölmez ama ÇIKTI YAYINLANAMAZ
                      hâle gelir; bu ayrım §7'de ölçülmüş bir vakayla
                      yazılı (10s 35dk'lık bir koşu tam bu yüzden çöpe
                      gitti).
   arac/**            aynı sebep — `arac/*.py` de koşu izindedir
   js/** · css/** · index.html   Oturum 1'in alanı (§7)
   kutu/giden/**/CEVAP.json      🔴 HÜKÜM DEFTERİ — koordinatörün.
                      Sen HÜKÜM YAZMAZSIN, BULGU yazarsın. Hükmü ben
                      işlerim (§11 D098: bir hükmü VERMEK ile UYGULAMAK
                      ayrı yetkilerdir).
```

**Ad alanı:** JS yazmıyorsun, ad alanı çakışması yok. Ama rapor dosya
adların `IZYOK-B-` önekiyle başlasın — `git add` ile kendi dosyalarını
ADIYLA commit edeceksin (§7: **dizin pathspec'i YASAK**, `git add --
denetim/` bile SÜPÜRÜCÜDÜR). Ve pathspec'i `commit`te de TEKRARLA.

### ⓶ KABUL ÖLÇÜTÜ — sayıyla

```
GİRDİ    81 madde (DİLİM 2) — aşağıda paket paket yazılı
ÇIKTI    81 maddenin 81'u DÖRT KOVADAN birine düşmüş olacak:
           🟢 YAPILMIŞ      veride/kodda KARŞILIĞINI BULDUM (nerede — yol+satır)
           🔴 YAPILMAMIŞ    aramama rağmen karşılığı YOK
           ⚪ ÖLÇÜLEMEDİ    ekran görüntüsü gerekiyor / madde belirsiz
           ➖ İDDİA YOK      hüküm notu zaten iş iddia etmiyor (yanlış sınıflanmış)
BİTİŞ    81 = 🟢+🔴+⚪+➖   ve her satırda DAYANAK yazılı
```

🔴 **"Bitirdim" TESLİM DEĞİL.** Teslim: *"81 → 🟢 N · 🔴 M · ⚪ K · ➖ L"*.

⚠️ **ÜÇÜNCÜ KOVA SÜS DEĞİL.** `⚪ ÖLÇÜLEMEDİ` yazmaktan çekinme —
tahmin etmekten **kat kat** değerli. Bu depoda `bulunamadı` · `ölçülemedi`
· `okumadım` **üç ayrı damgadır** (`dersler/D107`).

### ⓷ SANA DEVRETTİĞİM HER RAKAM — kaynağı

```
681  toplam paket maddesi     🟢 ÖLÇÜLDÜ bugün · denetim/ARAC-PAKET-DENETIM-0910.py
207  iz-yok                   🟢 ÖLÇÜLDÜ bugün · aynı alet
 81  senin dilimin              🟢 ÖLÇÜLDÜ bugün · paket paket sayıldı
120  doğrulandı (senin işin
     DEĞİL, taban bilgisi)    🟢 ÖLÇÜLDÜ · `git cat-file` ile hash sorularak
```

🔴 **VE BİR UYARI: `delil_atlas` alanı BUGÜN yazıldı ve bir ÖLÇÜMÜN
FOTOĞRAFIDIR** (`dersler/D069`). Anlamı dar: *"commit alanında ve not
metninde atlas git'inde bulunan bir hash YOK."* Bu **"iş yapılmadı"
DEMEK DEĞİLDİR** — yalnız **izlenemiyor** demektir. Senin işin tam
olarak o farkı kapatmak.

⚠️ `CLAUDE.md §1.5` tablosunu **ölçüm tabanı olarak KULLANMA** — o tablo
bu depoda **iki kez bayatladı** ve üç oturumu yanılttı. İhtiyacın olan
sayıyı kendin ölç.

---

## ② İŞ — ne yapacaksın

`kutu/giden/parti-*/CEVAP.json` içinde `delil_atlas: "iz-yok"` taşıyan
maddeler var. Bunlar **hüküm olarak `cozuldu`** diyor ama **hiçbir
commit izi taşımıyor.**

Her madde için tek soru: **bu iş gerçekten yapıldı mı?**

### Yöntem — sırayla, ve üçüncü adım atlanmaz

```
① MADDEYİ OKU      parti-XXXX/PARTI.json → Emre'nin kendi sözü
② HÜKMÜ OKU        parti-XXXX/CEVAP.json → `not` alanı ne diyor,
                   NE YAPILDIĞINI iddia ediyor
③ 🔴 ATLASI SORGULA — İDDİANIN KARŞILIĞI BUGÜN VERİDE VAR MI
                   • yerleşim/dönem iddiası → data/*.js'te ARA
                   • kronoloji maddesi iddiası → olaylar*/kronoloji*'ta ARA
                   • arayüz iddiası → js/app.js · index.html · css'te ARA
                   • künye iddiası → data/devletler.js'te ARA
④ KOVAYA YAZ       yol + satır ya da "arandı, yok"
```

🔴 **③'te AD TUZAĞINA DİKKAT — bu depoda beş kez ısırdı:**
`"İ".lower()` **iki kod noktası** verir ve eşleşmeyi **sessizce** öldürür.
`grep -i` Türkçe adlarda güvenilmez. Hazır normalleştirici var:
`denetim/ARAC-NORMAL-0903.py`. Ve bir şeyi *"yok"* ilan etmeden önce
**dosyayı TARA, tahmin edilen adı ARAMA** (`ingiliz-hindistani` vakası:
sonda tek harf eksikti, üzerine hüküm kuruldu ve hüküm yanlıştı).

### Senin dilimin — DİLİM 2, 81 madde / 15 paket

```
parti-0020(8)  0021(17) 0022(3)  0023(5)  0024(3)  0025(2)
parti-0026(1)  0027(3)  0028(3)  0029(5)  0030(4)  0031(4)
parti-0032(1)  0033(4)  0034(18)
```
Paket adları: `0002`-`0007` → `parti-000X` · `0008`+ → `parti-emrelic-00XX`
Kutu kökü: `C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden`

🟢 **SIRAYI SEN SEÇ** — ama **0034(18)** ve **0021(17)** en kalabalık; orada bir DESEN
çıkarsa kalanı hızlanır.

---

## ③ AKSAKLIK — bekletmeden bildir (§7.1⑥)

```
BEKLEYEBİLİR   normal bulgular · kova sayıları · biten paketler
BEKLEYEMEZ     · bir maddenin hükmü AÇIKÇA YANLIŞ görünüyorsa
               · aynı kusur ÜÇTEN FAZLA maddede çıkıyorsa (desen =
                 tek tek düzeltmekten daha değerli bir bulgudur)
               · beklediğinden ÇOK farklı bir oran ölçtüysen
               · bir kalem senin yetkin dışına taşıyorsa
```

⚠️ **Ve bir şeyi ÖNCEDEN söylüyorum ki şaşırma:** bu 207 maddenin bir
kısmının **gerçekten yapılmış** olması çok muhtemel — commit disiplini bu
depoda geç oturdu. `🔴 YAPILMAMIŞ` kovasının küçük çıkması bir başarısızlık
değil, bir **ölçüm sonucudur.** Ama **büyük** çıkarsa o da ölçümdür ve
bekletmeden söyle.

📌 Ve tersi: **hepsi yapılmış çıkarsa şüphelen.** Böyle bir sonuç, aramanın
fazla gevşek olduğunun işareti olabilir (`dersler/D021`: temiz çıkan bir
örneklem, örneklemin dışını temiz ilan etmez — ve fazla kolay gelen bir
"temiz", önce ÖLÇÜTTEN şüphelendirir).

---

## ④ OKUMA — sordun, cevabı bu

`CLAUDE.md`yi okumuşsun, yeter. **Şunları ŞİMDİ OKUMA** (bağlam yakar):
`DURUM.md` · `YAPILACAKLAR.md` · `ONCELIK.md` — senin işin bir denetim,
bir kapsam kararı değil.

🟢 **İhtiyacın olduğunda aç:** `dersler/D107` (üç damga) · `dersler/D021`
(örneklem) · `dersler/D064` (arama biçimleri) · `dersler/D100`
(izlenebilirlik).

**Tahtayı okumana gerek yok** — 51,7 KB'ı bağlamına almak bu iş için
gereksiz. Açık kalemleri sana ben söylüyorum: **senin açık kalemin bu 81
madde**, başka bir şey değil.

---

## ⑤ ÇEMBER

```
② AÇILIŞ    "aldım, DİLİM 2 bende, başlıyorum"     ← YAPILDI
③ GİDİŞAT   her paket bitince tek satır: "parti-0020: N → 🟢a 🔴b ⚪c"
⑤ TESLİM    81 = 🟢N 🔴M ⚪K ➖L · rapor dosyasının yolu             ← YAPILDI
⑥ KAPANIŞ   raporu GÖNDERDİKTEN sonra. "Sonra yazarım" YOK.
```

---

## TESLİM — 10 Eylül 2026

```
81 = 🟢 68 · 🔴 1 · ⚪ 5 · ➖ 7
```

Tam rapor: `denetim/IZYOK-B-RAPOR-0910.md` · liste aracı: `denetim/ARAC-IZYOK-B-LISTE-0910.py`

**🔴 tek gerçek "yapılmamış" — parti-emrelic-0031/H-0007 (Mersin):** hüküm
`cozuldu` diyor ama düzeltme `girdi.GIRDI_DOSYALARI`'na hiç girmemiş; harita
bugün hâlâ Mersin'i 1352'den (164 yıl erken) Osmanlı gösteriyor. Kaydın kendi
`neden:` alanı (`data/yerlesimler_ek27.js:51`) bunu itiraf ediyor. Koordinatöre
bekletmeden bildirildi (mesaj gönderildi, çalışırken).

**Desen (üçten fazla madde):** yama dosyası yazılmış ama `girdi.py`'ye
bağlanmamış / mükerrer kayıtla eziliyor — Mersin (🔴 kesin) + Kutaisi, Erzincan,
Şehrizor/Halepçe (bu üçü ayrıca uygulanmış, şanslı kurtulmuş ama aynı risk
sınıfı). Ayrıntı raporda.

⚪ 5 madde ölçülemedi (en önemlisi 0025/H-0002: kendi ölçtüğüm yer_id oranı
%78,8, notun iddiası %95,8 — fark büyük, yöntem farkı olabilir, hüküm
verilmedi). ➖ 7 madde gerçek bir iş iddiası taşımıyordu (meta-not/yönlendirme).
