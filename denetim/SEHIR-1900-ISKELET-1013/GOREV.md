# GÖREV — 1900 YILI DÜNYA İDARÎ İSKELETİ (Osmanlı Tarih Atlası, şehir listesi ön ölçümü)

Atlas, 1900 yılında bir bölgenin merkezi olan şehirleri tarihte ilk anılışlarına geri götürecek.
Şehir kategorileri (1900 referansı):
1. ülke başkenti
2. eyalet başkenti (devletin büyük idarî biriminin merkezi: Osmanlı vilayeti, Rus guberniyası, Çin eyaleti, ABD eyaleti …)
3. eyalete bağlı bölge hâkimi şehir (Osmanlı sancağı düzeyi)
4. bölgesi olmayan ufak yerleşim — ALINMAZ

Hangi katmanın "kategori 3" sayılacağına henüz karar verilmedi. Kararı verebilmek için SENDEN istenen,
her ülkenin 1900'deki idarî katmanlarını **saymak**. Şehirleri tek tek listelemen istenmiyor
(yalnız kategori 1 ve 2 merkezleri listelenecek).

## Kapsam
Sana verilen bölgedeki 1 Ocak 1900 itibarıyla var olan her siyasal birim: bağımsız devletler, yarı
bağımsız / tâbi devletler (hidivlik, prenslik, emirlik, Hint prenslik devletleri GRUP olarak), sömürgeler,
protektoralar, dominyonlar. Küçük sömürgeleri tek satırda toplayabilirsin (örn. "Fransız Batı Afrikası
— 7 koloni").

## Her birim için istenen
```
### <birim adı (1900)> — <statü: bağımsız | tâbi | sömürge | protektora | dominyon>
- baskent_1900: <şehir> (modern adı: …) · kat 1 (bağımsızsa) / kat 2 (sömürge yönetim merkeziyse)
- katman1: <tür adı, ör. "guberniya"> · <sayı> birim · ortalama alan ≈ <km²> · merkezler: <virgülle tam liste>
- katman2: <tür adı, ör. "uyezd"> · <sayı> birim · ortalama alan ≈ <km²>   (liste YOK)
- katman3: (varsa yalnız ad + sayı)
- kaynak: <künye/URL — sayıları nereden aldın>
- not: belirsizlik, 1900 içinde değişen sınır, sayı tahmini ise "tahmin" yaz
```
Ortalama alan = devletin yüzölçümü / birim sayısı (kaba hesap yeter; yuvarla).
Osmanlı sancağının ortalama alanı ölçüt olarak kullanılacak — Osmanlı bölgende ise onu ayrıca hesapla.

## Kaynak kuralı
- Tercih: The Statesman's Year-Book 1900 (archive.org tam metin), dönemin resmî salnameleri/istatistik yıllıkları,
  Brockhaus-Efron (Rusya), TDV İslâm Ansiklopedisi (Osmanlı, İran, İslâm dünyası — vilayet maddeleri),
  Statoids (statoids.com — idarî bölünmelerin tarihçesi), akademik tarih atlasları.
- Vikipedi YALNIZ ipucu; sayının tek dayanağı olamaz. Vikipedi'den aldığın sayıyı "vikipedi — doğrulanmadı" diye işaretle.
- Bilmediğin sayıyı uydurma: "bulunamadı" ya da "tahmin (gerekçe)" yaz. Uydurma kesinlik en ağır hatadır.
- Web sayfalarını okurken mümkünse ham metni al (WebFetch sayfayı özetleyerek verir; sayı tablolarında
  ham indirme — `py -I` ile urllib, dosyayı scratchpad'de kendi alt klasörüne — daha güvenilirdir).

## Çıktı
Yalnız şu dosyaya yaz (depoya — C:\atlas — HİÇBİR ŞEY yazma):
`<CIKTI_DOSYASI>`
En sona `## Özet` tablosu: birim · kat1 sayısı · katman1 sayısı · katman2 sayısı · katman2 ortalama alan.
Ve toplam: bölgende kat 1 + kat 2 merkezi kaç, katman2 merkezi kaç.

Alt ajan AÇMA.
