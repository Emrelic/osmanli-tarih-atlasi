# Dosya sahipliği tablosu ve üretim kilidi (motor «SERBEST» der)

> Kimlik `D221` · `CLAUDE.md §7` bölümünden taşındı (17 Eylül 2026, PROTOKOL-BUDAMA).
> Kural CLAUDE.md'de tek satır; gerekçe ve vakalar burada — metin BİREBİR, budama öncesi hâliyle.
> ⚠️ İçindeki `§N` atıfları ve satır numaraları budama ÖNCESİ CLAUDE.md'ye aittir.

---

## 7. Oturum düzeni ve dosya sahipliği — EN ÖNEMLİ KURAL

Bu projede aynı anda birkaç oturum çalışır. Bölme kriteri **konu değil dosyadır**;
her dosyanın **tek sahibi** vardır. İki oturum aynı dosyaya yazarsa `yerlesimler.js`
gibi tek satırlık kayıtlardan oluşan dosyalarda **sessiz veri kaybı** olur.

| Oturum | Yalnız bu dosyalara yazar | Model |
|---|---|---|
| **0 Entegrasyon** | `yerlesimler.js`, `uret_petek.py`, üretilen `data/*.js`, kök dizindeki `*.md` belgeleri | Opus |
| 1 Yazılım/arayüz | `index.html`, `js/app.js`, `css/style.css` | Sonnet |
| 2 Harita hata avı | hiçbiri — sadece okur → `denetim/BULGULAR-*.md` | Opus |
| 3 Devlet kronolojileri | `data/devletler.js` | Sonnet |
| 4 Yerleşim araştırma | yeni `data/yerlesimler_ek.js` | Opus |
| 5 Siyasî figürler | `data/kisiler.js` | Sonnet |
| 6 Yapı denetimi | `arac/denetle.py` + `denetim/YAPI-*.md` | Sonnet |
| 7 Kronoloji yoğunlaştırma | yeni `data/olaylar_ek7.js` | Sonnet |

**Kurallar:**
- **`arac/uret_petek.py`'yi yalnız Oturum 0 çalıştırır.** Üretim ~15 dakika sürer ve
  sırasında veri değişirse çıktı tutarsız olur (bu yüzden dört üretim boşa gitti).
- 🔒 **ÜRETİM KOŞARKEN GİRDİ DOSYALARI DONMUŞTUR.** Kural yalnız "üretimi veri
  değişirken başlatma" değil; **koşu sırasında da yazılmaz.** Motor
  `arac/girdi.py`'deki dosyaları en başta okur (kara maskesi ve nehirlerden hemen
  sonra), yani koşunun 8. dakikasında yapılan bir düzenleme çıktıya HİÇ girmez ama
  denetim temiz görünür — yayın veriden geri kalır ve fark edilmez.
  Yaşanmış (2026-07-30): üretim 01:31:41'de başladı, başka bir oturum 01:39:13'te
  Hemedan'a Ferhad Paşa dönemi ekledi. Yayınlansa, çevresi Osmanlı ortası Safevî
  bir **Hemedan enklavı** çıkacaktı — yani kullanıcının hatalar 4 §10'da şikâyet
  ettiği hatanın aynısı, onu düzeltirken üretilmiş hâli. Beşinci boşa giden üretim.
  **Protokol:** üretimi başlatan oturum diğerlerine "girdi kilitli" der, bitince
  "dosya senin" der. İki oturum arası dosya devri sözle yapılır, varsayımla değil.

  🔴🔴 **VE MOTORUN KENDİ SATIRI BU KURALI ÇÜRÜTÜYOR GİBİ OKUNUYOR —
  2 Eylül 2026'da bir koordinatörü bütün gün yanılttı.** Koşu şunu basar:
  ```
  Girdi anlık görüntüsü: 73 dosya kopyalandı → girdi dosyaları SERBEST
  ```
  Cümle **yarım doğrudur** ve koordinatör o yarıyı ekibe kural diye
  tekrarladı (*"`data/*.js` GÜVENLİ, `arac/*.py` KİLİTLİ"*):
  ```
  DOĞRU   data/*.js yazmak KOŞUYU ÖLDÜRMEZ — anlık görüntü alındı
  EKSİK   ama ÇIKTIYI YAYINLANAMAZ HÂLE GETİRİR
  ```
  **Bedeli ölçüldü:** koşu 10 saat 35 dakika çalıştı, *"Doğrulama: tüm
  yerleşimlerin peteği geçerli ✓"* ile temiz bitti, ve yayın kapısı
  reddetti:
  ```
  ✗ YAYIN BAYAT — üretim girdiden geride (sha256 izi, 18 yerleşim dosyası)
  ✗ üretim izi: taze 3 · BAYAT 4
    donemler.js · bolgeler.js · devletler_harita.js · petek_govde.js
  ```
  Koşu 11:01'de girdiyi dondurdu; 21:36'ya kadar veri **altı kez**
  değişti (137 yama · ikiz beyanı · Varşova künyesi · Kongre Polonyası —
  dördü de koordinatörün kendi commit'leri).
  ⇒ **KOŞU SÜRERKEN `data/` VE `arac/` İKİSİ DE DONMUŞTUR.** Motorun
  "SERBEST" demesi bunu değiştirmez: o cümle **koşunun sağlığı** hakkında,
  **çıktının yayınlanabilirliği** hakkında değil.
  📌 Ve bu, `§11`in *"silinen kodun mezar taşı hayatta kalan kod hakkında
  bir İDDİADIR ve güven verdiği için kimse onu ölçmez"* dersinin **canlı
  kod** hâli: burada iddia bir yorumda değil, **koşunun kendi çıktısında**
  duruyor ve her koşuda tekrar okunuyor.
