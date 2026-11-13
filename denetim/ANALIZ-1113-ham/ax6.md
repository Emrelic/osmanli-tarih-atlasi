# EKSEN 6 - Tasarım / kullanıcı dostuluğu (canlı site, 13 Kasım 2026)

Not: yerleşik tarayıcıda ekran görüntüsü bir adım gecikmeli geliyor; sonuçlar ikinci görüntü + sayfa başlığındaki koordinat/tarihle doğrulandı. Test: masaüstü 1400x850, telefon 375x812. Forma veri girilmedi, not düşülmedi.

## Ana vaat testi (maddeye tıkla -> harita aynı değişimi gösteriyor mu)
1. Ridaniye (22 Oca 1517, telefon): kamera Kahire'ye uçtu, "Mısır seferi (1516-17)" oku ve Kahire etiketi göründü. Geçti. (Mısır bölgesi açık pembe, Sina/Şam koyu kırmızı; hâlâ Memlük görünüyor - Kahire 26 Oca'da düşer, tutarlı.)
2. Mohaç (29 Ağu 1526, telefon): kamera Mohaç'a uçtu, "Mohaç seferi (1526)" oku, Macaristan Krallığı hâlâ Macar renginde. Geçti (savaş günü; Buda Eylül'de).
3. Çaldıran (23 Ağu 1514, telefon): kamera Çaldıran'a uçtu, sefer oku ve ikon var; Konya aranınca bölge Osmanlı kırmızı, Dulkadir/Ramazan etiketli. Geçti.
4. Karlofça müzakereleri (13 Kas 1698, masaüstü): Sırem/Bacska çevresinde Osmanlı-Habsburg sınırı dikdörtgen "çentikli" görünüyor (petek yapaylığı). O.
5. **BAŞARISIZ - Lozan Antlaşması (24 Tem 1923, masaüstü): kamera Lozan'a (46.52K 6.63D) uçtu, harita İsviçre'yi gösteriyor. Maddenin anlattığı değişim (Rodos, Sakız, Midilli vb. 25 ada, Doğu Trakya) hiç görünmüyor; üstteki "Osmanlı alanı 0 km²". Ana vaat burada kırık. Y**
6. **Kaydırıcı (1400px): zaman çubuğuna tıklayınca 1786-04-22'ye gitti ama kamera Lozan/İsviçre'de kaldı; harita Osmanlı'dan kopuk, kullanıcıya ipucu yok. Y/O** Ayrıca tarih 22 Nis 1786 iken seçili madde 31 Mart 1785 tarihli (kart ile tarih uyuşmuyor).

## Bulgular (ne yaptım / ne gördüm / genişlik / öneri / öncelik)
1. Açılış yükleme: splash "Atlas yükleniyor" 25-45 sn sürdü (telefon ~25 sn, 1400px ~45 sn); bu sürede başlıktaki tarih hızla 1281/1319/1709/1514 diye zıpladı, harita bir an düz kırmızıya döndü. Öneri: gerçek ilerleme çubuğu, tarih zıplamasını gizle. Y.
2. Üst üste 2 açılış penceresi: önce "Haritayı tam ekran gezmek ister misiniz?", yükleme bitip ilk tıklamadan sonra 20 adımlık tur ("1/20") haritanın ortasında çıktı (hem 375 hem 1400). Ekran görüntüsü gecikmesi değil, tur ilk etkileşimde sonradan çıkıyor. Öneri: tam ekran sorusunu kaldır/ertele, turu açılışta bir kez ve kısa sun. O.
3. Dil değiştirme: seçici sayfayı tamamen yeniden yüklüyor (?dil=en, yine ~30 sn) ve tarihi/seçimi 1453'e sıfırlıyor, tam ekran + tur penceresi yeniden geliyor. 375px. Öneri: yeniden yüklemeden değiştir ya da mevcut tarihi koru. Y.
4. Karışık dil (İngilizce kipi, 375px): "tarih git" placeholder, "Harekât / sefer / kazanç" lejantı, "Dünyada" satırı metni, "İstanbul seferi (1453)" harita etiketi, kart altındaki "kaynak · PD-Art" Türkçe kaldı; 20 maddeyi saymadım. Öneri: çeviri eşitliği (CLAUDE.md zaten ister). O.
5. Telefonda dil seçici taşıyor: #dil-secici x=327-414, görünür alan 375 -> "Türkçe" kesik. Öneri: üst çubuğu 2 satıra böl ya da dili Butonlar menüsüne al. O.
6. Telefonda harita küçük: harita alanı ~320px (812'nin %40'ı), kalanı slider+oynatıcı+arama+kronoloji+kart. Üstüne atıf kutusu ("Altlık: Esri...", 4 satır) ve "Harekât" lejantı haritanın alt yarısını örtüyor; tıklanacak yer/şehir kapanıyor. Öneri: atıfı tek satıra/ⓘ'ye, lejantı katlanır yap. Y.
7. Telefonda alt kart (madde kartı) kronoloji listesinin üzerine biniyor; kart 812px ekranın alt ~110px'ini kalıcı kaplıyor, liste okunmuyor. Öneri: kartı yukarı çekilir sheet yap. O.
8. Haritada şehre tıklama (375px, Kars): Dizinler penceresi açıldı, tarih satırlarında "__BOSLUK__" (1064-1239, 175 yıl) ham simge olarak kullanıcıya görünüyor; "Kars (Vanand) Ermeni Krallığı" ve "Moğol İmparatorluğu (bölünm..." adları tarih sütunuyla üst üste biniyor; tarihler "1000-01-01" biçiminde (hassasiyet belirsiz görünüyor); arama kutusu placeholder'ı kesik. Öneri: __BOSLUK__ yerine "kayıt yok/bilinmiyor", sütun genişliği, ISO yerine yıl. Y (BOSLUK), O (örtüşme).
9. Devlet bölgesine tıklama (375px, Çaldıran çevresi Safevî alanı): görünür tepki yok (popup/seçim yok); yalnız şehir noktası tıklanınca bilgi geliyor. Öneri: bölge tıklayınca devlet künyesi. O.
10. Butonlar menüsü (1400px): çok yoğun, harita sol üstünü örtüyor, dışarı tıklayınca kapanıp kapanmadığı belirsiz (düğmeyle kapattım); dev jargonu görünüyor: "Yayın sürümü r15122", "Harita · KOŞU 36", "D SINIRI Çizgi/İki renk/Hukukî/Fiilî", "Küre görünüm gizli 104", "Kaynaklık kesinleşmiş sahiplik halkaları". Öneri: ilk kullanıcıya sade/gelişmiş ayrımı, dahili terimleri çıkar. O.
11. Üst çubuk (1400px): "Katılım..." ve madde başlığı "Lozan Antlaşm…" / "Kaybı: Rodos, Sakız, Midi…" kesiliyor; "= 0 km²" anlamsız görünüyor (1923'te). D/O.
12. Kronoloji satırları: "1114 (...)" başlığı tek başına (hicrî yıl, Miladi karşılığı yok) ve "1700 — TDV 'Karlofça Antlaşması'ndan (1699) bir yıl sonrasına kadar' der; ay ve gün kaynakta yok" biçiminde editör notu satırı kullanıcıya görünüyor. Öneri: iç notu ayrı ipucuna al. D/O.
13. Lozan kartı: 25 adalık ada listesi 11px'lik devasa tooltip (fareyle) harita üstünü örtüyor; kart alanı çok kısa (1400'de sağ panel ~190px yükseklikte kart, 8 satırlık liste); uzun metinde sürekli kaydırma. Öneri: kart/liste oranı ayarlanabilir olsun. D.
14. Hükümdar şeridi (üst, sağ panel): doğru çalışıyor (1923: "Saltanat kaldırıldı - Halife Abdülmecid", 1517: Yavuz Selim 1512-1520, 1698: II. Mustafa); şerit tıklanınca bir şey olmuyor (ayrı hükümdar sayfası/filtre beklenir). D.
15. Kaynak listesi: kartın altında "Kaynaklar (1) · Güvenilir kaynak" katlanır; açınca "Dayanak · TDV İslâm Ansiklopedisi, «karlofça»" bağlantısı çıkıyor. Çalışıyor; rozet jargonu ("Dayanak", "Güvenilir kaynak") açıklanmıyor. D.
16. Arama (375px): "şehir yaz ve git" - "Konya" yazınca "şehir/kasaba + o tarihteki sahibi (Osmanlı)" listesi, seçince kamera Konya'ya uçtu. İyi, referans tasarım. (olumlu)
17. Slider etiketleri: eksen "MÖ 12000 ... 1000 ... 2000" doğrusal olmayan; Osmanlı kullanıcısı için 1281-1923 aralığı çok dar bir şeritte (1400px'te ~%8): hassas gezinme güç. Öneri: Osmanlı kipinde ölçeği 1281-1923'e daralt. O.

## Genel
Çalışan: açılış tarihi/madde, kronoloji tıkla->kamera uçuşu (3/3 Osmanlı maddesinde), arama, dil listesi 8 dil, kaynak açılır liste. Kırık/zayıf: Lozan tipi "Osmanlı dışı yere uçan" maddeler, kaydırıcıda kamera kopukluğu, telefonda yer darlığı, yükleme süresi, dil değiştirmede tam yeniden yükleme, dahili jargon.

## Post-it (py arac/not.py liste, depoda çalıştı) - 6 açık not
Sahipli 5 / sahipsiz 1. son:emre (Emre cevabı/kararı bekleyen) 4; son:claude 2.
Not sayısı 10'dan az, hepsi aşağıda (numara sırasıyla; en eskiler #132, #133):
- #132 karar-bekliyor, son:emre, oturum c099a7: Kutsal İttifak - Macar cephesi şehir günleri (1686-06-17, #117'den)
- #133 karar-bekliyor, son:emre, oturum f5d952: Kutsal İttifak - Venedik cephesi şehir günleri (1686-07-10, #117'den)
- #175 karar-bekliyor, son:emre, oturum 62d928, 11 yorum: 1676-09-19 Uyvar/Leva bölgesi sahipliği (harita, kalem)
- #185 cozuldu, son:claude, oturum ef616e, 3 yorum: 1281-01-01 Trabzon/Adana/Akka/Tebriz/Bağdat/Hürmüz/Hotan/Kaşgar... (harita kare)
- #186 karar-bekliyor, son:claude, oturum 96355b, 1 yorum: 1461-06-01 Eflak'ın Kule/Turnu Măgurele-Yergöğü girintisi (harita kare)
- #187 acik, son:emre, SAHİPSİZ (oturum:-), 0 yorum: 1453-05-29 6 bölgede "bu boş alanlar bu devirde kime aitmiş" (harita 6 kalem)
Emre'yi bekleyen: #132, #133, #175 (sahipli ama Emre'de), #187 (sahipsiz ve Emre'nin son yazdığı; bir oturum alınmalı).
