# KAYNAK-DENETIM-0907 — şartnamesi YAZILMIŞ, aleti YAZILMAMIŞ denetim

## ⓪ KİMLİK — HADDİN
```
SEN         İşçi oturum · KAYNAK-DENETIM-0907
DEĞİLSİN    Koordinatör DEĞİLSİN. İş dağıtmazsın, oturum açmazsın.
ÜSTÜN       1.MURAT HÜDAVENDİGAR (Oturum 0)
ALTIN       kimse
YASAKLARIN  iş dağıtmak · `data/*.js` (KOŞU SÜRÜYOR) · `arac/denetle.py`ye
            YENİ DAL EKLEMEK (önce alet ayrı koşar, hüküm sonra)
```

## ① NİÇİN VARSIN — ölçülmüş boşluk

`denetim/SARTNAME-KAYNAK-DENETIMI-0905.md` **5 Eylül'de yazıldı**
(NEHİR SÜRTÜNME, sevk M-3042) ve iki gündür **aleti yazılmadı.** Ölçtüm:
```
şartname   VAR
alet       YOK   (arac/*kaynak* → hiçbir dosya)
```
Şartname bir gecelik ölçüm zincirinden çıktı ve **kapsamı en başta
yazılmış** bir denetim — o yüzden kıymetli: *"ne ölçtüğü değil NE
ÖLÇMEDİĞİ"* açıkça yazılı.

## ② İŞİN

### ② a — ŞARTNAMEYİ OKU, VE §0'INI CİDDİYE AL
```
SORAR    «`kaynak:` alanında gösterilen madde, bu kaydın taşıdığı
          TARİHİ taşıyor mu?»
SORMAZ   «bu tarih DOĞRU mu?» · «bu kaynak GÜVENİLİR mi?» ·
         «bu kimlik buraya AİT mi?»
```
🔴 Vaka: `urabi-pasa t=1914-12-18` — gün **tarihen doğru**, ama gösterilen
madde 1911'de bitiyor. **Doğru tarih + yanlış kaynak** mümkündür ve
düzeltilecek şey `kaynak:`tır, tarih değil.

### ② b — YALNIZ 🔴 KOVASI OTOMATİK
Şartnamenin ⑦. şartı: **`⚪`/`🟡` ayrımı OTOMATİKLEŞTİRİLEMEZ.**
```
🔴 OTOMATİK   künyenin/kaydın tarihi, beyan edilen gövdede HİÇ GEÇMİYOR
              ⇒ kaynak o iddiayı KESİNLİKLE taşımıyor · yanlış alarm ÜRETMEZ
⚪ SESSİZ     geçiyor ⇒ HİÇBİR ŞEY KANITLAMAZ (`§4 ⑧` tuzağı)
              ASLA "temiz" diye raporlanmaz — `doğrulanmadı` diye tutulur
```
🔴 **VE 🔴 KOVASI BİLE TAKVİM EKSENİNDE YANILIR:** `kirim` — kaynak
*"8 Nisan 1783"* (Jülyen), veri `1783-04-19` (Gregoryen), **aynı gün**.
Şart: yıl bulunamazsa Hicrî karşılık ve ±2 komşu yıl da aranır; bulunursa
`🟡`ye düşer.

### ② c — DÖRT ŞART, ATLANMAZ
```
① gövde KESİLMEDEN alınır — `uganda`da ilk `Bibliyografya`da kesmek
  metnin %79'unu attırmıştı ve "Bunyoro 0 kez" ölçtürmüştü (gerçek 13)
② `⚫ ölçülemedi` AYRI kova — 302 · boilerplate · 000 hiçbiri 🔴 DEĞİL
③ pencere uçları (`1281-01-01` · `1923-10-29`) ELENİR — ölçüm değil SINIR
④ yıl araması SINIR KORUMALI: `(?<!\d)…(?!\d)` yoksa `533` sayfa
  aralığını (`533-538`) tarih sanar
```

### ② d — ALETİ SINA (`C13` DÖRT AYAK)
```
① GEÇME      kusur yokken TEMİZ diyor mu
② ATEŞLEME   her kusur dalı AYRI AYRI ötüyor mu (sahte girdiyle ZORLA)
③ GİRDİ      gerçek dosyadan okuma yolu KOŞULDU mu (enjekte kayıt YETMEZ)
④ ÇIKTI      bilerek kusurlu bir girdi ver, alet BİLDİRSİN
```
🔴 Ve HTTP taraması yapacaksan: `maras` slug'ı **200 döner ama gövdesi
bir ADRESTİR** (*"bk. KAHRAMANMARAŞ"*) — `§4 ⑥`, bugün ısırdı.

### ② e — KOŞTUR VE RAPORLA
`denetim/BULGU-KAYNAK-DENETIM-0907.md`: üç kova AYRI sayılarla.
🔴 Bir düzeltme yaması yazacaksan `denetim/` altına — uygulamayı Oturum 0
koşu bitince yapar.

## ③ YAZMA YETKİSİ
```
🟢 SENİN   denetim/ARAC-KAYNAK-DENETIM-0907.py · denetim/BULGU-KAYNAK-*.md
           denetim/yer_yama_kaynak_*_0907.js · oturumlar/KAYNAK-DENETIM-0907.md
🔴 DEĞİL   data/*.js · arac/*.py · js/app.js · kök *.md
```
🔴 KOŞU 8 SÜRÜYOR (7 Eylül 11:17:46, ~16 saat). `data/*.js` yazmak koşuyu
öldürmez ama **çıktıyı yayınlanamaz** yapar (`§7`).

## ④ SENİ BAĞLAYAN YASALAR
```
§4     TDV esas · sekiz tuzak (ölü slug · yanlış madde · boş gövde ·
       boilerplate · 000 · yönlendirme kütüğü · takvim · rakam≠dayanak)
§11    `0`, "yok" ile "bakmadım" arasında ayrım yapmaz
       ölçmediğini `ölçmedim` diye yaz · kendi ayrıştırıcın kötüdür
       bir denetim İKİ YÖNDE de sınanmadan çalışıyor SAYILMAZ
🔴 §11 KABUK  kaçış/Türkçe/backtick bash'ten GEÇMEZ · sed/heredoc/py -c YOK
```

## ⑤ HABERLEŞME
```
py arac/tahta.py yaz --kim "KAYNAK-DENETIM-0907" --kime "1.MURAT" --mesaj "..."
```
🔴 Kendi pencerene yazmak = hiç cevap vermemek.

## ⑥ BİTİŞ ÖLÇÜTÜ — sayıyla
```
alet KOŞUYOR ve C13'ün DÖRT ayağı da GEÇTİ
üç kova AYRI raporlandı: 🔴 N · ⚪ M · ⚫ K
```
Teslim SAYIYLA. *"Alet çalışıyor"* bir ölçüm değildir.

## ⑦ DURUM BEYANI — teslimden sonra SUSMA
```
✅ "İŞLERİM BİTTİ — boştayım."   ⏳ "BEKLİYORUM: <ne>·<kimden>·<ne zaman>"
```

## ⑧ EMEKLİLİK NÖBETİ
```bash
py C:/Users/emrem/OneDrive/Desktop/ClaudEmre/kutu/emeklilik.py --nobet --kim "KAYNAK-DENETIM-0907"
```
⚠️ **Bulamadığını `bulunamadı` diye yaz.**
