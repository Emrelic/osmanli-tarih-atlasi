# KONTROL DEFTERİ — kullanıcının gördüğü her madde

Bu dosya **tek kaynaktır**: haritaya bakıp gördüğünüz her şey buraya numarayla
yazılır, her satırın karşısında **kimde olduğu ve ne durumda olduğu** durur.
Bir daha "bu maddeyi yaptın mı?" diye sormanıza gerek kalmaz — bakarsınız.

## Numaralama

`<dosya>-<madde>` — ör. `15-07` = *hatalar 15*'in 7. maddesi.
Yeni gördüklerinizi `Y-01`, `Y-02` diye yazın; ben dosyalara dağıtırım.

## Durum işaretleri

| İşaret | Anlamı |
|---|---|
| ✅ | bitti — commit'i yazılı |
| ⏳ | sırada — sahibi belli, ölçüsü çıkarılmış |
| 🔬 | ölçülüyor — henüz karar yok |
| ❌ | yapılmayacak — **gerekçesiyle** |
| ❓ | konumu/anlamı belirsiz — sizden açıklama bekliyor |
| ⚠️ | yapıldı ama **açık borç** kaldı |

## Sahip kısaltmaları

`K` koordinatör · `D` denetçi · `M` motor · `T` takipçi
`A1` Anadolu · `A2` Balkan · `A3` Arap-Afrika · `A4` Doğu
`U1` kronoloji · `U2` katalog · `U3` savaşlar

---

## ⚠️ BU LİSTE HENÜZ TAM DEĞİL

`hatalar 1-16` dosyalarının **tamamı taranmadı**. Aşağıdaki satırlar bu
oturumda doğrudan izlenen maddelerdir; geri kalanı **TAKİPÇİ** çıkaracak.
Eksik olduğunu bilerek bırakıyorum — dolu görünen yarım liste, boş listeden
kötüdür.

| No | Madde | Sahip | Ölçüm / karar | Durum |
|---|---|---|---|---|
| 11-11 | Girit Kavalalı'ya bırakılınca hepsi açık kırmızı olmalı | K | Mısır dönemi veride HİÇ yoktu, beş kayda eklendi | ✅ |
| 11-20 | Söğüt, Karacahisar 1800'de hâlâ görünüyor | K | `go:` sönme alanı + zoom kademesi | ✅ |
| 11-21 | Şehir isimleri birbirine giriyor | K | zoom kademesi + ölçeğe bağlı punto | ⚠️ bölge isimleri büyük punto kaldı |
| 11-30 | Romanya kalın kırmızı çizgi içinde olsun | K | `imparatorluk-hale` katmanı | ✅ |
| 11-32 | Geri çekilme okları ileri seferlerden ayrılsın | K·U3 | 9 tipli `HAREKET` tipolojisi | ✅ |
| 11-40 | Mısır'ın ortasındaki boşluk | A3 | motor kusuru DEĞİL; 4 vaha + 3 sahipsiz nokta | ⚠️ vaha peteği boşluğun %61'ini yutuyor |
| 12-11 | Karadan genişlemede bağlantı beklenir | D | onuncu denetim: BİTİŞİKLİK. 13 konum | ⏳ |
| 13-01 | Fetih maddesi varsa o şehir görünmeli | K | olay anlatılırken yer zorla görünüyor | ✅ |
| 13-13 | Kırım yarısı kırmızı yarısı pembe | M·A1 | ikili renk DOĞRU, oran yanlış (%39 vs ~%18) | ⏳ 7 nokta + kalibrasyon çelişkisi |
| 14-01 | Detay penceresi ortada açılıyor | K | panel içi zengin gösterime yöneltildi | ✅ |
| 14-02 | Kili-Akkerman arası boşluk | A2 | geometrik boşluk YOK, hayalet bölünme | ✅ |
| 14-04 | Akkoyunlu çözülüşü haritada yok | A1 | mükerrer madde çifti, 189 günlük ölü bölge | ⏳ ek5:98 kaldırılacak |
| 14-05 | Yavuz'un Malatya-Ergani hattı | A1 | gösterim DOĞRU (Memlûk'tü); yalnız Ergani noktası eksik | ⏳ |
| 15-05 | "Bu üçgen" | A4 | ekran görüntüsü yok, konum belirsiz | ❓ |
| 15-06 | Karesi ilhakında Gelibolu'da kırmızı | M | ada kuralı DEVREYE GİRMİYOR; çare kara-kısıtlı Voronoi | ⏳ |
| 15-07 | Eflak'ın üçte biri açık kırmızı | A2 | 14 noktanın 8'i doğrudan; Eflak'ta TEK nokta var | ⏳ 8 nokta |
| 15-09 | Hotin yeşil kalmış | A2·K | hayalet bölünme, `s:"bogdan"` → `v:` | ✅ |
| 15-13 | Yanova/Varad kimden alındı | A2 | EVET, vasal Erdel'den; veri doğru modelliyor | ✅ |
| 15-17 | Kafkasya 1695 normal mi | M | köşe/1000 km 112,5 — sağlıklı, kusur YOK | ✅ |
| 15-19 | Petek denizaşırı geçiyor (Oran→İspanya) | M | kara-kısıtlı Voronoi, 32 parça / 321 bin km² | ⏳ ayrı koşu |
| 16-04 | Basra'nın İran işgali | A4 | `s:` değil `isg:` örtüsü olmalı | ⏳ |
| 16-06 | Napolyon'un Mısır işgali haritada yok | A3·K | kronoloji tamdı, harita eksikti; örtü hazır | ⏳ |
| 16-08 | Vehhâbîler Mekke: İKİ AYRI MADDE | A4·D | yeni sınıf: aynı olay iki tarihe yazılmış | ⏳ metinler bekleniyor |
| 16-11 | Girit hepsi açık kırmızı olmalı | K | 11-11 ile aynı, kapandı | ✅ |
