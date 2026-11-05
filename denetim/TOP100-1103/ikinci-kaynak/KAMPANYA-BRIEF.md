# İKİNCİ KAYNAK KAMPANYASI — ajan brifi (TOP100-1103, 4 Kasım 2026)

Proje: Osmanlı Tarih Atlası. Depo (SALT OKU): `C:\atlas\.claude\worktrees\umit-1104-ikinci`. Ortamda `py`, `python` değil.
**Depoya hiçbir dosya yazma; git komutu çalıştırma.** Tek yazacağın dosya sana verilen sonuç dosyası (scratchpad).

## Amaç
Sana verilen parti tablosundaki her satır, 100 önemli devletin bir **kuruluş (KUR)**, **yıkılış (YIK)**, **başkent (BAS)** ya da **büyük antlaşma (ANT)** günüdür. Bu günler bugün **tek kaynakla** duruyor: ya kaynak 2 boş, ya iki kaynak da TDV (aynı aile, bağımsız sayılmaz).
Her satır için **atlas gününü ya da yılını** taşıyan, ilk kaynaktan **bağımsız ikinci akademik kaynak** bul.
- İkinci kaynak aynı günü ya da yılı veriyorsa hüküm **ÇİFT TEYİT**.
- Farklı bir gün veriyorsa hüküm **ÇELİŞKİ**: iki kaynağı da yaz, hangisinin neyi tarihlediğini (imza, onay, giriş, ilan) ayır.
- Bulamazsan hüküm **BULUNAMADI**: nereye baktığını yaz.

Satırın "önceki hüküm" sütunu bağlamı verir. Gerekirse ilgili devlet dosyasını oku: `denetim/TOP100-1103/<dosya>`. Atlas verisi `data/devletler.js`te (id ile ara) ve `data/olaylar*.js`te. Atlasın kendi kaydı kaynak DEĞİLDİR.
**Kapsam dışı** satırlar da var (açık uçlu "t yok", "uyumlu, madde evrende" gibi tarihsiz notlar). Bunlara **KAPSAM DIŞI** yaz, vakit harcama.

## Kaynak kuralı (katı)
- **Kabul edilen kaynaklar:** hakemli akademik dergiler; üniversite yayınevi monografileri; resmî ve akademik ansiklopediler. Kullanılabilecek kaynaklar ve ulaşım bilgisi:

| Kaynak | Adres / not |
|---|---|
| Cambridge History serileri | CHI, CHC, CHJ, CHIr, New Cambridge Medieval/Modern; archive.org'da tam metinleri olabilir: `https://archive.org/advancedsearch.php?q=...&fl[]=identifier&output=json`, sonra `https://archive.org/stream/<id>/<id>_djvu.txt` |
| Encyclopedia of Ukraine | `encyclopediaofukraine.com` |
| Treccani | `treccani.it/enciclopedia/` — Dizionario Biografico dahil |
| NDB/ADB | `deutsche-biographie.de` |
| Banglapedia | `en.banglapedia.org` |
| Encykorea | `encykorea.aks.ac.kr` |
| Historisches Lexikon der Schweiz (HLS) | `hls-dhs-dss.ch` |
| Store norske leksikon / lex.dk | `snl.no` · `lex.dk` |
| IEG-Mainz Friedensverträge | `ieg-friedensvertraege.de` (antlaşmalar) |
| British History Online | `british-history.ac.uk` |
| legislation.gov.uk | — |
| Avalon Project (Yale) | antlaşma metinleri |
| Real Academia de la Historia DB~e | `dbe.rah.es` |
| Dictionary of Canadian Biography | — |
| TDV | ilk kaynak zaten TDV ise ikinci kaynak TDV OLAMAZ: `https://islamansiklopedisi.org.tr/arama/?q=<kelime>`, sonra madde sayfasını GET et |
| Livius.org | yalnız birincil kaynak çevirisine kılavuz olarak |
| Encyclopaedia Iranica | bu makineden açılmayabilir |
| Brill EI² | bu makineden açılmayabilir |
| Britannica | 403 verebilir; açılmazsa geç |

- **Vikipedi tek dayanak olamaz**; yalnız dipnotundaki akademik kaynağı bulmak için ipucu. Forum, blog, popüler site, YouTube, içerik çiftliği, YZ metni yasak.
- Her bulguya kaynak adını (yazar, eser, cilt/sayfa ya da URL) ve günü/yılı taşıyan cümleden **en çok 15 kelimelik** alıntıyı yaz. Alıntıyı gerçekten okuduğun sayfadan al. Arama özetinden aldıysan "(arama özeti, sayfa açılmadı)" yaz.
- 🔴 **Arama özeti teyit DEĞİLDİR.** Her adayın sayfasını WebFetch ile gerçekten aç. Yalnız arama özetine dayanan bulgu en çok "ADAY (ÖZ)" olur, ÇİFT TEYİT sayılmaz. Tablonun her satırına deneme yap; denenmeyen satırı BULUNAMADI diye yazma, "DENENMEDİ" yaz.
- **Tarih uydurma.** Kaynak yalnız yıl veriyorsa yıl teyidi yaz. Takvimi (Jülyen/Gregoryen, hicrî, Çin ay takvimi) açıkça belirt. MÖ yılları atlasta astronomik yazılıdır (MÖ n = -(n-1)).
- İki kaynak aynı yayıncı ailesinden ya da birbirinin kopyasıysa bağımsız sayılmaz; bunu belirt.

## Çıktı
Sonucu sana verilen sonuç dosyasına Markdown tablo olarak yaz (Write aracı):
`| # | dosya | uç | atlas | 2. kaynak (eser + URL/sayfa) | alıntı | verdiği gün/yıl (takvim) | hüküm |`
Hüküm değerleri: ÇİFT TEYİT / ÇELİŞKİ / BULUNAMADI / KAPSAM DIŞI.
Dosyanın sonuna ekle:
- **Açılamayanlar:** açılamayan siteler.
- **JSTOR / Oxford Reference / Iranica'da okunması gerekenler:** madde başlığı ya da makale künyesiyle.

Son mesajında yalnız şunları ver: sayılar (çift teyit / çelişki / bulunamadı / kapsam dışı) + en önemli 5 çelişki.
