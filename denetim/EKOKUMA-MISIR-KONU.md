# Mısır ek okuma: konu notu (25 Kasım 2026, KASA)

**UYARI:** 1. partinin bütün kayıtları (9 kart, 2 kişi, 5 hükümdar) TDV sitesi 403 verdikten sonra uygulama içi tarayıcıyla okundu. Hepsi teyitsiz ve yayin_adayi:false yapıldı; Emre karar verene kadar yayın adayı değildir. Sonradan ikinci kaynak eklense de bu işaret kalır.

Teslim: 9 kart, 2 kişi, 5 hükümdar. Tam 60-100 konuluk envanter yapılmadı (süre kartlara ayrıldı).
Künyeler: `memluk`, `misir-kavalali` (ayrıca `misir-eyaleti`, `misir-sultanligi`, `misir-kralligi`, `turk-misir-sudani`).

## Okunan kaynaklar (TDV İslâm Ansiklopedisi, uygulama içi tarayıcıda sayfa metni)
- Tam: aynicalut-savasi (Özaydın), tomanbay (Kanat), baybars-i (Kopraman), kutuz (Yiğit; kaynakça sonrası kesik), ismail-pasa-hidiv (Çetin; kaynakça sonrası kesik)
- Gövde tam, kaynakça kesik: ridaniye-savasi (Emecen), kavalali-mehmed-ali-pasa (Kutluoğlu)
- Kısmi: urabi-pasa (Görgün; ilk 11.000 karakter, son değerlendirmenin devamı okunmadı), seceruddur (Tomar; ilk 7.000), kansu-gavri (es-Seyyid; ilk 8.000, 1511 sonrası okunmadı)
- Betikle doğrudan istek HTTP 403 verdi; sayfalar tarayıcıda açıldı.

## Okunamayan / BORÇ
- İngilizce akademik literatür (Mamluk Studies Review, Irwin, Ayalon, Fahmy, Cole, Schölch): okunmadı. Kartlar tek dayanaklı (TDV); tarihçi ayrışmaları bu yüzden sınırlı.
- Süveyş Kanalı için doğrudan TDV maddesi bulunamadı (arama: Port Said, İsmâiliye çıktı).

## Sıradaki konu adayları
1. 1811 Kale Vakası (mevcut `ekokuma_kolemen.js` ile mükerrer taraması gerekli)
2. Mercidâbık: Kansu Gavri'nin ölümü, Hayır Bey
3. Portekiz sonrası Memlük maliyesi (1502/1509 maddeleri)
4. Süveyş Kanalı kazısı ve işçiler (1859-04-25)
5. İbrâhim Paşa'nın Suriye yönetimi ve 1834 isyanları (1831-10-31)
6. Mehmed Ali'nin Paris öğrenci heyeti (1826)
7. Kalavun Bîmâristanı (1284); Akkâ 1291
8. Elbistan 1277 ve Anadolu; 1400 Timur'un Halep'i alışı
9. Memlük-Altın Orda ittifakı; Kahire Abbâsî hilâfeti
10. Mısır'ın Sudan seferi (1820)

## Eksik / düzeltilecek kronoloji maddeleri
- 1250: olay dosyalarında Memlük kuruluşu maddesi aranan anahtar sözcüklerle bulunamadı; Şecerüddür kartı `memluk` künye kronolojisine (1250-05-02) bağlandı. Bu bağın arayüzde göründüğü sınanmadı. TDV Şecerüddür maddesi 4 Mayıs 1250 verir.
- Diu: maddeler 1509-02-03; TDV Kansu Gavri maddesi yenilgiyi 1507 Chaul'un ertesi yılı (1508) diye anar. Denetlenmeli.
- Mükerrer görünen maddeler: 1849-08-02 Mehmed Ali'nin ölümü, 1882-09-13 Tel el-Kebîr, 1516-10-10 ve 1517-03-30 Tomanbay.

## Bağ sınaması
Her `olay` girdisi olaylar*/kronoloji*/devletler.js maddelerinde gün + başlık parçasıyla en az bir maddeye eşleşti (basit Node betiği; sitenin `_ekNorm` işlevi birebir kullanılmadı, tarayıcıda sınanmadı).
