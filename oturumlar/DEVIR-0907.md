# DEVİR — 1.MURAT HÜDAVENDİGAR · 7 Eylül 2026, 01:45

> Bağlam sıkışması öncesi devir notu. Bir sonraki tur bu dosyadan devam eder.
> 🔴 Buradaki her sayı ÖLÇÜLMÜŞTÜR ama **devralan yeniden ölçer** (`B10`).

## ⓪ KOŞU 7B — CANLI

```
PID 3880 · 14:23:21'den beri · ~%98 CPU · tahmini bitiş ~06:32
nöbetçi  arac/_bekci_kosu7b.py (PID 7396) · tetik data/donemler.js mtime
         saatlik canlılık raporu · denetim/BEKCI-KOSU7B.log
🔴 data/ · arac/ DONUK. js/app.js DEĞİL (parmak izi yalnız uret_petek.py ·
   renkler.py · girdi.py — ÖLÇÜLDÜ)
```
⚠️ **`kosu7b.log` diye bir dosya YOK** — gerçek adlar `kosu7-20260906-142320.log`
ve `kosu_zincir.log`.

## ① KOŞU BİTİNCE — SIRA

```
① denetle.py koştur · durum_tablosu --yaz · renk_olc (VERİ DEĞİŞTİYSE ŞART)
② SINAV-M0342-0907.js yeniden koş — beklenen DEĞİŞMEZ (taban alındı)
③ ARAC-PETEKSIZ-0905.js — GERİLEME testi, peteksiz HÂLÂ 0 olmalı
④ künye yamaları → ⑤ renk → ⑥ yer_yama taşıma → ⑦ olaylar_ek23 → ⑧ index.html satırı
⑤ surum_damgala · yayın
```
🟢 **TAVAN RİSKİ ÖLÇÜLDÜ** (`denetim/ARAC-TAVAN-RISKI-0907.py`): 23 yama
bellekte uygulandı, `degismez4` doğrudan çağrıldı —
`asan 138→124` · `once 409→355` ⇒ **yamalar tavanı indiriyor.**
⚠️ Sınırı: künye yamaları uygulanmadı; künyeler inince **yeniden ölçülmeli**.
🟢 `MERGE-BAGIMLILIK-0907.json`: 20/22 yama doğrudan inebilir · çakışan künye 0.

## ② ON BEŞ KOL — kimlikler ÖLÇÜLDÜ

```
ORTADOĞU     local_5f1ea168  "NEHİR SÜRTÜNME"
AVRUPA       local_6314344f  "Prusya atlas doğrulaması"
AMERİKA      local_d7327e89  "DUNYA-KAMERIKA-0903 kurulumu"
SERHAT       local_dd072f52  "Hüküm Alanı Osmanlı Atlası"
ASYA/⑱/㉕    local_a6f8263a  "Opus Hazır Kıta"
⑨ TRİYAJ     local_c3fd502b  "Opus Hazır Kıta"
⑮/⑲/㉒      local_e9ebc14b  "OPUS HAZIR KITA 109"
⑪ KRONOLOJİ  local_47ec49ca  "KRONOLOJİ BOŞ KÜNYE"
⑫/⑳/㉗/㉚   local_cc230a98  "RENK 3"
⑬ K.AMERİKA  local_93b9dc8e  "KRONOLOJİ GÜNEY AMERİKA"
⑭/⑰/㉔/㉙   local_a7692d4b  "OPUS HAZIR KITA 124"
⑯/㉓/㉖     local_6967b6e7  "SONNET HAZIR KITA 129"
ASYA-KAYNAK  local_9927df76  "KÜRE GÖRÜNÜM"
```
🔴 Yalnız **AVRUPA**'nın tahta bekçisi çalışıyor ⇒ tahta mesajı tek başına
teslim değil; kritik sevk **doğrudan kanaldan**.

## ③ AÇIK İŞLER (kollarda)

```
㉖ AVRUPA(⑯)  js/app.js panel evreni düzeltmesi — 6 çağrı yeri, tarayıcıda
              doğrulama şartı. 🔴 PUBLISH ETME, sürüm damgasına DOKUNMA
㉕ ASYA        iran → safevi ayrımı (hayalet 9 = iran 8 + fas 1, ÖLÇÜLDÜ)
㉙ ⑰          zend künyesi — 4d(once) 409'un 131'i TEK künyede
㉚ RENK 3      8 çiftin oner() ile çözümü, 8-bit yumuşak, hedef 13,0
⑨ TRİYAJ      SOMURGE 335'i "metropol çekilmiş miydi" sorusuna karşı tara
ORTADOĞU       28 Mağrib günü (39−9 Endülüs−2 pencere dışı)
K.AMERİKA      93 gün kuyruk · ⑮ 14 gün · AMERİKA (a)/(b)
```

## ④ EMRE'NİN BEKLEYEN KARARLARI

```
① S (serhat) biçimi — SERHAT-TASARIM-0907.md gönderildi
   🔴 k:"S" arayüzü ÇÖKERTİYOR (koşturuldu) VE 3648 noktanın 1672'si
      durum değiştiriyor ⇒ skaler İMKÂNSIZ. Gerçek seçim: ilişki tablosu ya da hiç
② TAVAN_KM — ölçülmüş önerim k1=400 · k2=300
③ Cezayir'in Fransa renginde görünmesi kabul mü
④ k sözlüğü — ÜÇ ayrı sözlük, İKİ boşluk (polity sonu · tâbi polity)
⑤ Panel evreni düzeltmesi yayına girsin mi (⑯ hazırlıyor)
```

## ⑤ BU GECE KURULAN KURALLAR — hepsi tahtada

```
M-3086..3098
· paylasilan gün: OTURUM bazlı, bölge bazlı DEĞİL
· defterin `sahip` alanı SURVEY çıktısı, kimlik ataması DEĞİL
· TAKVİM v5: reform bir TARİH değil DEVLET BAŞINA AYRI bir tarih
  (İspanya 1582 · İngiltere 1752 · Rusya 1918 · Yunanistan 1923 ·
   Osmanlı 1926 · Çin: hiç Jülyen kullanmadı ⇒ "çevirenin hedefi")
· kaynak sayımı ÜÇ KOVA: gerçek · gerekçeli bulunamadı · çıplak
  (dünya %37,9 DEĞİL %17,8 — 733 damga yokluğu varlık sayıyordu)
· künye çaprazı bir DAYANAK değil ÇAPRAZ KONTROL (%75 susuyor)
· denetim/ altını ölçen kol ANLIK GÖRÜNTÜ damgası koyar
· kronoloji hedefi: hepsi data/olaylar_ek23.js (ok109 hükmü DÜŞTÜ)
· Süveyş: isg: YAZILMAZ (TDV "hak" diyor, atlas tasarruf boyar)
· adal: DOKUNMA (tek kayıt, ardıl künye kaynaksız)
```

## ⑤b EK — 01:50, kapanış öncesi

```
🔴 BENDE: `brunei-sultanligi` künye kalemi — `f:1368` KENDİ KAYNAĞI
   tarafından çürütülüyor (TDV: "Muhammed Şah (1405-1415)"), ve himaye
   günü künyede GÜN, TDV'de AY. Koşu sonrası künye turunda.

🟢 AÇILAN SON KOL: "YANLIŞ bulunamadı" sınıfı ölçümü (KÜRE GÖRÜNÜM).
   Gerekçe: çıplak bir damga ŞÜPHE uyandırır, gerekçeli-YANLIŞ olan
   GÜVEN VERİR. `nepal` vakası: damga "TDV'de müstakil maddesi yok"
   diyordu, slug 200 ve madde 16.050 karakter — kaynak VARDI, iki tur
   kullanılmadı.
   ⇒ `§11`in "yanlış bir güvence, hiç yazılmamış bir nottan kötüdür"
     dersinin KAYNAK DAMGASI yüzü.
   Çıktı: `denetim/OLCUM-YANLIS-BULUNAMADI-0907.md`
```

## ⑤c BELGE BORCU — `CLAUDE.md §3.5` BAYAT, benim kalemim

```
YAZAN    "Tebriz, Hemedan, Bağdat ve 70 kayıt `iran` 1501-1736 arası"
ÖLÇÜM    8 dönem · 8 yerleşim
         Tebriz'de `iran` 0 · Hemedan'da 0 · Bağdat'ta 0     ⇒ 9 KAT bayat
```
🔴 `§3.5.1` emsali: **ders SİLİNMEZ, vaka DAMGALANIR.** Hayalet devlet
sınıfı hâlâ doğru; bayatlayan yalnız vakanın durumu.
🟡 `HUKUM-OK106` ve `HUKUM-OK110` da *"7 dönem"* diyor — Derbend eksik,
gerçek 8.

🟢 KOVA 1 (`hurmuz-sultanligi`, 3 nokta) ve KOVA 2 (`buhara`, 2 nokta)
ONAYLANDI — künye + renk hazır, koşu sonrası künye turunda.
⚪ KASPİ üçlüsü AÇIK: kaynak tüketilmiş, komşuluk 400 km'de bölünmüş,
silmek 1281'den sahipsizlik açar. Damga `okumadım` (Rusça/Farsça kanal).

## ⑤d 🔴🔴 İKİ RAPORUM ÇÜRÜDÜ — düzeltme

### ① PANEL KUSURU **GERÇEK DEĞİL** — Emre'ye yanlış rapor edildi
```
RAPOR ETTİĞİM   "Yerleşimler sekmesi atlasın %20,8'ini gösteriyor"
GERÇEK          `window.YERLESIMLER` ÇALIŞMA ZAMANINDA zaten 3805 taşıyor
SEBEP           index.html ~1054-1075'te 11 AĞUSTOS'tan beri bir birleştirme
                betiği var (commit a550bcd) ve app.js'ten ÖNCE koşuyor
TARAYICI SAYIMI Şehirler sekmesi DOM'dan: 7+70+277+566 = 920 · KOD DEĞİŞMEDEN
                ilk kayıtlar: Albazin · Yakutsk · Akobo · Riyad · Acoma Pueblo
```
🔴 **KÖK SEBEP — ve iki ölçüm birbirini doğruluyor SANDI:** ⑰ ve ⑯ ikisi de
`data/` dosyalarını **statik** okudu, `index.html`i hiç çalıştırmadı. ⑯'nın
kendi cümlesi: *"⑰'nin sayısını «birebir üreterek doğruladım» derken aslında
sadece AYNI YANLIŞ YÖNTEMİ tekrarlamıştım."*
📌 `§11`in *"doğrulama, aynı soruya İKİ YOLDAN gitmektir"* kuralının ihlali:
aynı yoldan iki kez gitmek doğrulama **değildir**. Ve ben ikisini birden
Emre'ye **teyitli** diye sundum.
🟢 ⑯ kendi kodunu **geri aldı** (`git checkout -- js/app.js`), `git diff` boş.
   Ayrıntı: `denetim/DUZELTME-PANEL-EVRENI-0907.md`

### ② `zend` SINIFLANDIRMASI ÇÜRÜDÜ — künye DOĞRU, veri ERKEN
```
CLAUDE.md §3.5.0  `zend`i ZEND SINIFININ ADI diye kaydediyor
                  ("künye dar, veri doğru ⇒ künyeyi GENİŞLET")
ÖLÇÜM             TAM TERSİ. künye 1751→1794 DOĞRU · 131 dönem `f:1747-06-20`
                  = Nâdir Şah'ın öldürüldüğü gün · 4c 0 · `t:` ucu TEMİZ
TDV `zendler`     «1160'ta (1747) Nâdir Şah öldürüldüğü sırada Derregez'deki
                   Zendler OTUZ VEYA KIRK AİLEDEN İBARETTİ.»
```
⇒ 1747'de Zendler bir devlet değil, sürgünde otuz-kırk aile. `zend f:`i
öne çekmek **131 noktayı sahipsiz bırakır** (`Değişmez 1` ihlali).
🔴 **VE BENİM "tek künye satırı 131 dönemi kapatır" KALDIRAÇ İDDİAM YANLIŞ:**
künye satırı **değişmemeli**; 131'i kapatan şey iki VERİ ucunun birlikte
kaydırılması (`afsar t:` + `zend f:`) ve kimlik seçimi **ölçülmedi**.
🟢 Künye tarafının gerçek kazancı: `kaynak:` alanı. `zend` **302 ÖLÜ**,
**`zendler` 200 CANLI** (17.725 kar., müellif Rıza Kurtuluş) — slug
TAHMİN EDİLMİŞ, aranmamış. `incular→incu` ailesinin yeni üyesi.
⚠️ Genelleme sınavı KURULDU ve ÇÜRÜDÜ: 22 künyeye 8 varyant denendi, **1/22**.
   (sınır: yalnız Türkçe çoğul ekleri; `--ulke`/`--sehir`/`--iran` sonekleri
   DENENMEDİ ⇒ alt sınır.)

### ③ 🟢 YENİ KURAL — "KAYNAK TÜKENDİ" HÜKMÜ, YEŞİL LİSTE DE DENENMEDEN VERİLEMEZ
```
Kaspi üçlüsü için BEŞ TDV gövdesi tüketilmişti
ama `§4`ün 🟢 listesinin İLK MADDESİ — Encyclopaedia Iranica — HİÇ AÇILMAMIŞTI
```
📌 `§4`ün *"TDV'de yok demeden önce ARA"* kuralı **TDV içinde** kalıyordu
(dar slug → kapsayıcı madde). Bir kademe yukarısı: **liste de tüketilir.**

🔴 **VE IRANICA ERİŞİM DESENİ — Britannica'nın birebir aynısı:**
`iranicaonline.org` · WebFetch **403** (yedi slug, yedisi de) · **TARAYICI
PANELİ AÇILIYOR.** Onu *"erişilemez"* diye damgalamış bir kayıt varsa
**o damga yanlıştır.**

🔴 **VE BİR HÜKÜM AYAKTA KALDI, TEŞHİSİ DEĞİŞTİ:** Kaspi'de `sirvansah`
reddi DOĞRUYDU ama gerekçesi **yanlış dönemden** geliyordu (TDV `sirvan`ın
16.-17. yy Osmanlı idarî ayrımı; tartışılan pencere **1281-1509**).
Iranica `ŠERVĀNŠAHS` (C. E. Bosworth 2011) aynı reddi **kendi döneminden**
destekliyor: hâkimiyet *"at times"* / *"on various occasions"*, ve
Darband'ın **kendi hânedanı var** (Hāšemis of Bāb al-abwāb).
⇒ `§11`: *doğru hüküm, yanlış teşhisle gelebilir* — ve yazılmasaydı bir
sonraki oturum yanlış dönemin delilini çürütüp reddi **haklı olarak**
yeniden açardı.
🟢 Ve `okumadım` artık belirsiz değil: Bosworth'ün kaynakçası standart
monografiyi **adıyla** veriyor — **V. Minorsky, *A History of Sharvān and
Darband*, Cambridge 1958.**

### ⑯ ve ⑰ BOŞTA — sıradaki koordinatör turu görevlendirsin

## ⑥ KENDİ KUSURLARIM — kayda geçiyor

```
· degismez4'ün DEMET döndüğünü varsaymadım → "hiçbir kova büyümüyor" diye
  TEMİZ BİR SAYI bastım, raporlayacaktım. Yapıyı dökünce gerçek çıktı.
· girdi.py ÇIPLAK ad verir, `data/` önekini koymadım → 77 dosya SESSİZCE atlandı
· `ad:` regexi `{"ad":` biçimini kaçırdı → 58 kaydı 0 saydım
· "8 iran hayaleti"ni ASYA'ya mal ettim — ⑲ ölçmüştü
· "dayanak atlasın içinde" çerçevesini yaydım — %75 oranında ÇÜRÜK
· "17 renksiz" iki gün bayat, "5 Mısır" 7'ymiş, "440 bekleyen" 36'ymış
· `denetim/` altını ölçen kolun paydasının donuk olmadığını hesaba katmadım
```
