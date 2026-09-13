# KITA 30 — C GÖSTERİMİ: BELGELİ SINIR KATMANI (arayüz)

AD: KITA 30 · DİZİN: proje kökü · ClaudEmre: evet
**Önce:** `CLAUDE.md` baştan sona · `oturumlar/ORTAK-KOSU10-KURALLARI.md` ·
`oturumlar/MENZIL-KARARLARI-0912.md` · `denetim/SEMA-C-0911.md` ·
`denetim/BULGU-C-KAPSAMA-0911.md`

**Dosyaların:** `js/c_katman.js` (YENİ) · `data/hukuki_sinirlar.js` (YENİ,
`window.HUKUKI_SINIRLAR`) · `denetim/`
🔴 `js/app.js` KITA 12'nin (tek sahip). Senin kodun AYRI dosyada; app.js'ten bir
kanca (harita nesnesi, tarih değişimi) gerekirse satırı tahtadan KITA 12'ye iste.
`index.html` satırı BENDE — dosyan hazır olunca bildir.
Önce `git log --oneline -1 -- js/c_katman.js data/hukuki_sinirlar.js` BOŞ dönmeli.

## A / B / C — Emre'nin tanımı (bağlayıcı)
```
A  bugünkü motor: peteklerin sahibi, hesaplanmış sınır
B  A'nın düzeltmeleri: enklav kuralı · koridor · engel eşiği (motor, koşu 11)
C  "belgede ne varsa o çizilir" — antlaşmanın/kaynağın tarif ettiği sınır
```
Motor tarafı (C'nin A/B'yi ezmesi) koşu 10 bitmeden İNEMEZ (`uret_petek.py` donuk).
**Ama C'nin GÖSTERİMİ motor beklemez** — kullanıcı bugün hangi sınırın BELGELİ,
hangisinin HESAPLANMIŞ olduğunu göremiyor. Senin işin bu.

## İş
① **Veri:** `denetim/TASLAK-hukuki_sinirlar.js` (10 kayıt: 6 çizgi · 3 yer ·
   1 karma) — şemayı `SEMA-C-0911.md`den oku, kayıtları SINA (taraf id'leri
   `devletler.js`te var mı · tarih penceresi · koordinatlar), geçenleri
   `data/hukuki_sinirlar.js`e al. Geçmeyeni SAY ve nedenini yaz, sessizce atma.
② **Katman (`js/c_katman.js`):** geçerlilik penceresi o anki tarihi kapsayan
   kayıtları çiz:
   - çizgi türü → belirgin bir hat (hesaplanmış petek sınırından AYIRT EDİLEBİLİR
     — kalın/çift çizgi ya da farklı renk; §9 palet uyarısı: `renk_olc.py`)
   - yer türü → kalelerin/yerlerin işareti
   - üzerine gelince: antlaşma adı · madde · kaynak
   - lejantta "belgeli sınır (C)" kalemi
   - varsayılan AÇIK mı KAPALI mı — iki seçenekle ekran görüntüsü, Emre seçer
③ **Kanca:** harita nesnesi ve tarih değişimi app.js'te nasıl erişilir — ÖLÇ
   (`guncelle()`, `GUVEN_ODAK_DEVLET` prototipi aynı sorunu çözmüş olabilir,
   D045). Gerekirse KITA 12'den tek satırlık bir olay/kanca iste.
④ **Kıyas ölçümü:** her C kaydı için, o tarihte atlasın HESAPLADIĞI sınır belgeli
   hatta ne kadar uyuyor (en büyük sapma km) — bu sayı koşu 11'de C'nin motora
   inişinin önceliğini belirleyecek.
⑤ KITA 29 Ferhat Paşa 1590 için C kayıt taslağı hazırlıyor — biçimini tahtadan
   onunla uzlaş.
⚠️ Ekran görüntüsü: koşu 10 CPU'yu dolduruyor, tarayıcı gerçek siteyi yükleyemeyebilir
(KITA 12 yaşadı). Olmazsa izole demo sayfası + koşu sonrası gerçek görüntü.
📡 Açılışta tahtaya: `py arac/tahta.py yaz --kim "KITA 30" --kime "1.MURAT" --mesaj "açıldım..."`
