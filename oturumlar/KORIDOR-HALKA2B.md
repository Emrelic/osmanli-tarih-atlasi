# KORİDOR HALKA 2B — İran · Rusya · Lehistan · Venedik kolları (altyapı ⑤)

**MODEL** Opus · **DİZİN** `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ`
**ClaudEmre** HAYIR · **ADIN** Emre ne verdiyse o — koordinatör ad DEĞİŞTİRMEZ

## ⓪ KİMLİK — HADDİN
**SEN:** koridor oturumusun, **tek dosyan** `data/koridor_<kendi
scratchpad UUID'inin ilk 6 hanesi>.js` (sen açacaksın).
**DEĞİLSİN:** koordinatör DEĞİLSİN. **ÜSTÜN:** KOORDINATOR. **ALTIN:** kimse.
**YASAKLARIN:** iş dağıtmak · `data/koridor.js` · `data/koridor_halka2.js`
(ikisi de BAŞKASININ) · `data/yerlesimler*` · `arac/*` · üretim koşusu.

## ① NİÇİN VARSIN — altyapı ⑤'in kalan dört kolu

Koridor ağı ölçüldü ve **bir denetim aleti çıktı**: 18 delik buldu —
ana menzil güzergâhının durakları veride YOKtu (Üsküdar · Silivri gibi).
📌 Hiçbir denetim betiği bunları bulamazdı: *var olmayan* bir kaydı hiçbir
`Değişmez` sorgulamıyor. **Koridor, yokluğu ölçebilen tek alet.**

Bugün **yalnız Avusturya kolu** yazılı (`data/koridor_halka2.js` · 11 düğüm ·
Belgrad→Viyana). Sıralama ölçülmüş hâliyle:
```
1 Avusturya ✓ YAZILDI     2 İran     3 Rusya     4 Lehistan     5 Venedik
```
⇒ **Senin işin 2-5.**

## ② İŞİN — kol kol, ve her kol KENDİ İÇİNDE bitirilebilir
```
İRAN       Diyarbekir/Van üzerinden Tebriz — Safevî seferlerinin yolu
RUSYA      Kırım/Azak üzerinden kuzey — Özi ve Kefe hattı
LEHİSTAN   Boğdan üzerinden Kamaniçe/Hotin
VENEDİK    Rumeli sol kol → Draç/Avlonya, Adriyatik ağzı
```
Her kol için: düğümler (mevcut yerleşimlerden **SEÇİLİR**, yeni nokta
YARATILMAZ) · kenarlar · saat/km tutarlılığı.

🟢 **ZAMAN ÇERÇEVESİ TDV'DEN DOĞRULANMIŞ, sen seçme:**
```
menzil--osmanli  kuruluş  1539 (Lutfi Paşa teşkilâtlandırdı)
                 kaldırılış 1839 (posta teşkilâtı)
                 aralık   "üç saatten yirmi sekiz saate kadar"
```
Türettiğin her kenarın saati **3-28 saat** aralığında olmalı. Dışına
çıkan kenar ya yanlış duraktır ya eksik durak vardır.

⚠️ **GÜZERGÂH KAYNAKSIZ OLABİLİR — ve bu YAZILIR.** TDV ana kolları
sayıyor ama **duraklarını saymıyor.** Avusturya kolunda duraklar veride
VAR OLAN yerleşimlerden **seçildi** ve hepsi `kesinlik:3 ·
kaynak:"bulunamadı"` damgalandı.
📌 **UYDURULMUŞ durak ile SEÇİLMİŞ durak ayrı şeydir** ve fark budur:
seçilmiş durak veride zaten var, uydurulmuş durak yok. **Seç, uydurma.**

## ③ YAZMA YETKİSİ
```
SENİN     data/koridor_<6hane>.js · oturumlar/<KENDİ ADIN>-ILERLEME.md
SENİN DEĞİL   data/koridor.js · data/koridor_halka2.js · yerlesimler* ·
              arac/* · js/* · index.html · kök *.md
```
⚠️ Dosyanı `index.html`e ya da `girdi.py`ye SEN BAĞLAMA — koordinatör
bağlar. Bağlanmamış dosya haritayı etkilemez, **rahat çalışırsın.**

## ④ SENİ BAĞLAYAN
🔴🔴 **KAYNAK KIRMIZI ÇİZGİSİ:** TDV birincil. Dışına çıkarsan
**AKADEMİK · GÜVENİLİR · BİLİMSEL**. Forum · blog · içerik çiftliği ·
turizm sitesi · kaynaksız derleme · **yapay zekâ üretimi metin**
KULLANILMAZ. `kaynak:` **zorunlu**; bulunamadıysa `bulunamadı` yaz.
🟡 Ve üçüncü kova bugün doğdu: *"aradım, ERİŞEMEDİM"* — *"aradım, yok"*
ile karıştırma, ikincisi kaynağı sonsuza kadar kapatır.

🔴 **TARİH UYDURMA** (`YYYY-01-01`, ama tam gün varsa yuvarlama).
🔴 `§11`: kaçış/Türkçe metin **kabuktan geçmez** — `Write` + `py <yol>`;
commit `Write` + `git commit -F <dosya> -- oturumlar/...`
🔴 `git add -A` HİÇ. `B10`: **ölçtüğünü ve çıkardığını AYRI SATIRA.**
📌 `data/*.js` içinde yorum **yalnız kendi satırında**.

## ⑤ HABERLEŞME — ADRES DOSYADIR
Mesajının ilk satırı: `→ DOSYASI data/koridor_<6hane>.js OLAN OTURUMDAN`
```
py arac/tahta.py yaz --kim "<KENDİ ADIN>" --kime "KOORDINATOR" --cins RAPOR --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.

**NÖBETÇİYİ AÇILIŞTA `Monitor` ARACIYLA KUR** — kabuk arka planına DEĞİL:
```
command: cd "<proje kökü>" && py arac/tahta_bekci.py --kim "<ADIN>" --ara 45
description: tahta mesajları   ·   persistent: true
```
⚠️ Bekçi ancak oturum açıkken yaşar. **İlk iş budur** — kurmazsan sağırsın
ve Emre'nin seni dürtmesini beklersin.

## ⑥ KABUL KAPISI — doğrulamasız teslim İŞLEME ALINMAZ
```
① node ile kendi dosyanı oku → kaç düğüm, kaç kenar
② kenar uçlarının HEPSİ tanımlı mı (KIRIK UÇ 0)
③ tek parça mı — bir uçtan hepsine ulaşılıyor mu
④ çift boyama YOK mu (başka koridor dosyasındaki düğümü tekrar boyama)
⑤ saat/km tutarlılığı · TDV aralığı (3-28 saat) dışında kalan: 0
⑥ git status → commit'li mi · `kaynak:` satırı sayısı = kayıt sayısı mı
```
🟡 **Yarım iş suç değil, GİZLENMİŞ yarım iş suç.** *"4 kol hedefledim,
2'sini yazdım, İran'ın durakları şu sebeple bulunamadı"* iyi bir teslimdir.

## ⑦ BİTİŞ ÖLÇÜTÜ — sayıyla
`"4 kol → N kol · toplam D düğüm · K kenar · kaynaksız durak M tane ve
hepsi kesinlik:3 damgalı"`

## ⑧ KISALTMALAR
`*mgy` gereğini yap · `*kii` iş iste · `*yyy` durum · `*nedenboş` niçin boş
