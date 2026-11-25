# BORÇ / DEĞİŞİKLİK GÜNLÜĞÜ — FRANSA ek okuma, TEYİT YÜKSELTME 2. TUR (26 Kasım 2026, HAVVA)

Çıktı: `fransa-yukselt2/data/` altında ekokuma_dev_fransa_01.js, hukumdar_fransa.js, kisi_fransa.js, ekokuma_dev_fransa_02.js, ekokuma_dev_fransa_03.js (girdiler ezilmedi; değişmeyen 03 kartları da dahil tam kopya). Repo/git'e yazılmadı. JSON sınaması geçti (her dosya `json.loads` ile geri okundu; id/olay/baslik/tur değişmedi). Yeni kart yazılmadı.

## Yöntem ve dürüstlük
- Kaynaklar yerelde önceden indirilmiş düz metinlerdir; bu turda HİÇ indirme/ağ erişimi yapılmadı. User-Agent, Referer, Mozilla ya da başka tarayıcı başlığı taklidi, ayna, önbellek, archive.org KULLANILMADI. Persée denenmedi.
- Her karta dayanak kaynak/bölüm alt ajanlarla (Sonnet, 9 ajan) `Read` ile baştan sona sırayla okundu; menü/script/gezinti satırları atlandı. Kısa maddeler tamamen, çok bölümlü TDV maddelerinde (Fransa III, Mısır VI, İmtiyâzât Osmanlı dönemi, Cezayir 3-4, Lübnan 4, Tunus 3, Çanakkale 1) kartın dayandığı bölüm tamamen okundu. Fransa maddesinin Tarih bölümü yalnız hukumdar kartı için okundu (agentE1); kalan kartlarda ilgisiz bölümler (coğrafya vb.) okunmadı.
- Kartlardaki eski "TAM METİN okundu (curl + Grep)" ifadesi sıralı okuma kanıtlamadığı için kaynaklar yeniden okundu. Alt ajan raporlarındaki satır aralıkları ajan raporlarındadır; sonuçlar yama dosyalarında (`fransa-yukselt2/p/agent*.py`) ve her kartın `ic_not` sonundaki "TAM OKUMA BULGULARI"nda.
- ÇİFT TEYİT: 0 kart. Hiçbir kartta ikinci bağımsız akademik kaynak okunmadı; aynı yayının (TDV) iki maddesi bağımsız sayılmadı. Aday ikinci kaynaklar her kartın `ic_not_teyit`inde yazılı.

## Etiket dağılımı
- ekokuma_dev_fransa_01.js: 5 kart — çift 0 / tek kaynak 5 / teyitsiz 0 (38 metin düzeltmesi)
- hukumdar_fransa.js (fransa-francois1): çift 0 / tek 1 (yalnız DOLU alanlar için; YARIM KAYIT, doğum/ölüm/aile/lakap/halef TDV'nin okunan bölümlerinde yok) / teyitsiz 0 (9 düzeltme)
- kisi_fransa.js: 2 kart — çift 0 / tek 2 / teyitsiz 0 (11 düzeltme)
- ekokuma_dev_fransa_02.js: 20 kart — çift 0 / tek 19 / teyitsiz 1 (Komün, Tombs 1994 tam metni yerelde yok; yalnız özet) (79 düzeltme)
- ekokuma_dev_fransa_03.js: 20 kart — çift 0 / tek 19 / teyitsiz 1 (Viyana Kongresi: Delpu lise ders kitabı bölümü, akademik hakemli sayılmadı). Bu turda yeniden okunan 8 kartın 7'si TEYİTLİ'ye yükseldi (42 düzeltme); öteki 12 kart önceki turdaki hâliyle.

## Karar/hakemli sorular (Emre'den bekleyen)
1. Tek kaynaklı kartlar için ikinci bağımsız kaynak şartı (parti 02'den beri açık). Tüm TEYİTLİ kartlar tek kaynaktır.
2. Komün (Tombs 1994) ve Viyana (Delpu) kartları için akademik kaynak: TDV «Viyana Kongresi» maddesi, Schroeder monografisi yerelde yok → indirilebilir kaynak olarak işaretlendi ("okunmadı"; "bulunamadı" değil).

## Atlas kronolojisine geri bildirim gerektiren bulgular (atlas dokunulmadı; kartların ic_not'unda)
- Tott: atlas 1772-10-01 «topçuluk okulu denemesi» TDV'de karşılıksız (Sürat Topçuları Ocağı 10 Ocak 1774); atlas 1773-01-01 Mühendishâne, Dávid yan kutusu 1775.
- Toulon: atlas 1543-01-01; TDV 28 Mayıs 1543 hareket, 20 Ağustos Nice.
- Kırım: Soysal 22 Haziran 1853 / Beydilli 4 Ekim 1853 Osmanlı ilanı; Sivastopol Soysal 1854, Beydilli 8 Eylül 1855.
- Akka kuşatma başlangıcı: Akkâ maddesi 18 Mart 1799, Cezzâr maddesi 19-20 Mart.
- Mısır tahliyesi / 1801-10-09, 1740-05-30 «tek taraflı feshedilemez», 1889-06-02, 1792-06-01, 1894-12-22 (kaynakta 28 Aralık), 1798-09-09 (TDV 12 Eylül) — önceki turdan açık.
- Kaynakta teyit edilemeyen atlas günleri: Azincourt/Rusya 24 Haziran 1812/Verdun 21 Şubat 1916/Combes 9 Aralık 1905/Viyana 18 Eylül 1814/Versay 6 Mayıs 1682/Villeneuve 30 Mayıs 1740 — kaynaklarda yalnız yıl/ay ya da başka gün var; ilgili kartlarda beyan edildi.
- Cezayir 3. bölüm (Kahraman, c.7 s.486-489) ve 4. bölüm (Dursun, s.489-494): önceki kartlar yelpaze/Bacri borcu cümlelerini Dursun'a atfediyordu, doğrusu Kahraman; künye düzeltildi (02 kartları).
- Combes kartında kaynak DOI'si düzeltildi (50182 kitabın, bölüm 50287).

## Bu turda düzeltilen başlıca kaynak-dışı iddia türleri
Kaynakta olmayan nitelemeler ("en çok", "en yaygın", "hiçbir çağdaş belge"), yanlış atıf (başka TDV bölümünün cümlesini Fransa maddesine bağlamak), yanlış künye/DOI/sayfa, abartılan rakam çerçevesi, kartın kendi sentezini kaynağa atfetme, atlas gününün kaynakta bulunmadığı. Ayrıntı kart başına `ic_not` sonunda.

## Okunamayan / yarım kalan
- Tombs 1994 (Revue d'histoire du XIXe siècle 10) tam metni: yerel sayfada yalnız özet var (okunamadı; başlıksız yolla tam metin yok) → TEYİTSİZ. Cogneau–Kesztenbaum (hal_paris.txt): Tombs'u anan yerler + giriş/sonuç okundu, tablo/model bölümleri okunmadı; Kanlı Hafta kapsam dışı.
- Viyana 1814: Delpu ders kitabı bölümü tam okundu ama akademik hakemli sayılmadı → TEYİTSİZ; yerelde başka Viyana kaynağı yok (fransa-kaynak4\w\vc1/vc2 Villers-Cotterêts makaleleridir).
- Ajan sayısı: 9 alt ajan çalıştırıldı (CPU/RAM ağır işlem yok, node/derleme/öldürme yok).
