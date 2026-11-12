# ROMA-KOMSU-1112 — Roma komşuları kronoloji × harita × kaynak denetimi

Tarih: 12 Kasım 2026 · Dal: `claude/dreamy-bardeen-8283c3` · Veri dosyası DEĞİŞTİRİLMEDİ (yalnız rapor).

## Kapsam ve ölçüm sınırı (önce oku)
- Ölçülen: `data/devletler.js` künyeleri (f/t, `kaynak:`, `ic_not*`) — 50'ye yakın künye okundu; `kronoloji_*` içinde Sâsânî/Part/Ermeni maddelerine örnek bakıldı.
- **Ölçülmedi:** yerleşim zincirleri ve haritadaki boya (üretilmiş harita HAVVA koşusuna bağlı; `denetle*.py` yasak olduğundan Değişmez 2/3 sayıları yok). Bu rapor "künye × kaynak × kronoloji metni" denetimidir; "haritada görünüyor mu" sorusuna cevap vermez.
- Web: 3 araştırma yapıldı (Part f, Kilikya taç giyme, Selçuklu f). Sonuçlar çoğunlukla ikincil/ayna sitelerdir; **hiçbiri tek başına dayanak değildir**, yalnız "çelişki var, beyan et" kararını destekler. TDV/İSAM sayfaları bu turda yeniden açılmadı.

---
## (a) DOĞU: Part, Sâsânî, Ermeni, Arap

| Künye | f / t | Bulgu |
|---|---|---|
| `part` | -0249-01-01 / 0224-04-28 | f: TDV MÖ 250 (= -0249) esas alınmış; atlasın eski değeri MÖ 247. Arama sonuçları (ikincil) 247'yi gösteriyor, 250'yi hiç göstermedi. **Çelişki gerçek:** TDV 250 ↔ yaygın 247. Üçüncü akademik kaynak (Iranica "Arsacids I", Hauser/Wolski) açılmadı. Mevcut beyan yeterli, künye değişmesin. t: 224-04-28 = Hürmüzgân günü (TDV Erdeşîr gün verir) — ama bu **savaş günüdür, hanedanın bitişi değil** (Erdevân 224'te yenildi, Erdeşîr 226'da taç giydi). |
| `sasani` | 0224-04-28 / 0651-01-01 | f = Part t ile aynı gün (boşluk yok, iyi). **Kronolojideki madde (`0226-01-01` "Sâsânî kuruldu", TDV 226) ile künye f=224 birbirini tutmuyor.** TDV başlığı "226-651". Künyenin `ic_not`u bunu açıklıyor mu: yalnız "kuşak dışı" notu var, 224/226 farkı beyan edilmemiş. t=651: yıl (Yezdicerd'in ölümü); Nihâvend 642 fiilî çöküş olarak anılmalı. |
| `arsakuni-ermenistan` | 0063-01-01 / 0428-01-01 | Rhandeia 63 (Iranica). Künye notu WHE'nin 12'sini zaten anıyor. `artaksiad` t=0012 ile bu f arasında **51 yıllık boşluk (12-63)**: hangi polity? Haritada o dönemde Ermenistan sahibi belirsiz olabilir → Değişmez 1 riski, ölçülmedi. |
| `ermenistan-yervantuni` / `artaksiad` | -0599..-0199 / -0188..0012 | Kaynak Iranica/WHE; Yervandit t (-0199) ile Artaksiad f (-0188) arası 11 yıl boşluk; künyelerde kesinlik "yüzyıl" demiş (beyanlı). |
| `gassani` | 0200 / 0636-08-20 | t günü Yermük (TDV). Ama Gassânîler 6. yy sonunda (Münzir'in tutuklanması ~582) fiilî çözüldü; künye "Yermük'e kadar" diyor — **devlet ölümü mü, vasal artığı mı beyan eksik.** TDV Gassânîler maddesi tekrar okunup t sınıflandırılmalı. |
| `lahmi` / `kinde` / `palmira` | 268-602 / 480-528 / 260-273 | `palmira`: TDV 272'de fetih der, künye t=273 (isyan sonrası yıkım, yılsız) — beyanlı, tamam. Lahmî t=602 TDV ile uyumlu, Sâsânî vasalı notu var. |
| `kusan-sasani` | 0230 / 0360 | Kaynak UNESCO cilt III + iranologie.com: **akademik ama ikinci basamak; TDV/Iranica ile çapraz yok.** |

Kronoloji tarafı: Hürmüzgân (224-04-28), taç giyme (226, gün yok), Hatra 240/241 vb. maddeler günlü/yıllı dürüst yazılmış (hassasiyet açıklamada). Eksik: Part→Sâsânî geçişinde 224-04-28 ile 226 arasındaki iki yıl "taç giyme" maddesi ayrı; künyenin `d:`/`v:` kırılması 224-04-28'de, o gün maddesi var → Değişmez 2 yönünden sorun yok.

## (b) BATI: Cermen krallıkları, Büyük Göç

Künyelerin çoğu Treccani/Enciclopedia Italiana'ya çevrilmiş (DUNYA-1102 turu), ic_not'ları dürüst. Açık kalan çelişkiler:

| Künye | Bulgu |
|---|---|
| `frank` | f=481 (GEC) ↔ 482 (Treccani) — beyanlı. Clovis'in "tüm Franklar" 509-511 ayrı eşik. Kabul. |
| `burgund` | f=443 (Sapaudia) ikinci krallık; **birinci krallık (411-437, Gundahar) künyede yok**, Treccani 411/437 veriyor. Beyan var, künye yok; karar maddesi. |
| `vandal` | f=0429-05 (Hydatius, ay: tek kaynak) ↔ Britannica 'Gaiseric' 428. İki akademik kaynak çelişir; mevcut tercih beyanlı. t=534 yıl (Gelimer teslimi). Gün yok, doğru. |
| `alamanlar` | t=496 (Tolbiac) ↔ 497 belirsizliği ic_not'ta "beyan edilmeli" diyor — künye notunda henüz beyan yok. |
| `dogu-got` | f=0493-03-05 (Theodoric Ravenna'da) gün; t=553 yıl, kalıntı 555 (Treccani). Beyanlı. |
| `vizigot` | f=418 federe yerleşim; bağımsızlık Euric 475; t=711. Üç ayrı eşik, f için "418" uygun, ek not yeterli. |
| `hun-avrupa` | f=370/t=455 "onyıl" kesinlik. t: Nedao 454 (Maenchen-Helfen) → yıl-sonu eşiği olarak 455; kabul. Kaynakta Britannica var (dayanak olamaz kuralı, Maenchen-Helfen + HE eşlik ediyor, tek dayanak değil). |
| `gepid` / `langobard` / `avar` | 454-567 / 568-774 / 567-822: Gepid t, Lombard f ve Avar f aynı 567/568 zincirinde; Lombard 568 = **yürüyüşün başlangıcı (2 Nisan 568), İtalya'ya giriş değil**; harita için "568'de Pavia/Pannonia sahibi" dönemin zincirinde dikkat. Gepid yıkımı 566/567 belirsizliği ic_not'ta var. |
| `dogu-francia` | f=0843-08-10 (Verdun, ay teyitli, gün tek kaynak) ↔ `frank` t=0843-08-10 aynı gün (tutarlı). t=0962-02-02 Otto'nun taç giymesi = **Doğu Francia'nın sonu değil, Kutsal Roma'nın başlangıcı**; ardıl künyeyle bağ kontrol edilmeli (aynı polity sürüyorsa künye genişlemesi sınıfı). |
| `kent-kralligi` | Kaynak Oxford Companion/encyclopedia.com (Loyn) — akademik ama ikincil; Anglosakson gün yok, 455/825 yıl. |

Büyük Göç'te künye bulunmayanlar (taranmadı): Svev, Alan (Batı), Rugi, Heruli, Thüringen/Ostrogot-öncesi Gotlar. Künye eksikliği Değişmez 1 (sahipsizlik) riski; haritada ölçülmedi.

## (c) BİZANS KOMŞULARI: Balkan, Haçlı, Anadolu

| Künye | Bulgu |
|---|---|
| `kilikya-ermeni` / `rupeniler` | **Çelişki (zaten beyanlı):** künye 1199-01-06 ↔ Der Nersessian (Setton, Crusades II) "6 Ocak 1198". Bu turda arama: gün 6 Ocak her yerde aynı; yıl çoğunlukla **1198**, bir kaynak 1199, ayna maddeler "1198/1199" (Epifani/takvim sapması, doğrulanmadı). Kronoloji dosyası başlığı da 1199 diyor. Üçüncü bağımsız kaynak aday: Neagu, *RESEE* 2020 (resee.acadsudest.ro) — bulundu, **okunmadı**. Sonuç: yıl farkı Emre kararı gerektirir; okunmadan değiştirme. |
| `selcuklu` (Anadolu) | f=1075-01-01 yıl; TDV "1075-1080" (aramada), popüler 1077. t=1308 (II. Mesud ölümü) yaygın; 1318 aykırı değer. Mevcut künye 1075 yıl-hassasiyetinde, doğru; 1077 `ic_not`a eklenebilir. |
| `danismendli` / `saltuklu` | TDV yıl 1071, gün 01-01 "hassasiyet işareti" beyanlı; Malazgirt (26 Ağu 1071) sonrasıdır — haritada 1071-01-01'den itibaren boyanması **Malazgirt'ten önce bölgeyi onlara verir** (Değişmez 3 türü sorun, ölçülmedi). t günleri (25 Ekim 1178 / 25 Haziran 1202) TDV'de açık. |
| `mengucuklu` | f=1118 KURULUŞ DEĞİL, ilk tarihli anılış (künye notunda beyanlı). Tarih uydurma yok, kabul. |
| `artuklu` | f 1102→1085 (TDV Kudüs'te 1079 Tutuş); künye genişletilmiş, notlu. |
| `iznik-imparatorlugu` / `latin-imparatorlugu` | f=1204-04-13 iki künyede de aynı: **13 Nisan 1204 İstanbul'un düşüş günüdür.** TDV İznik yalnız yıl (1204) verir; İznik devletinin kuruluş günü 13 Nisan olamaz (Theodoros Laskaris sonra İznik'e geçti, imparator ilanı 1205/1208 tartışmalı). ic_not bunu zaten "gün TDV'de yok" diye işaretliyor; haritada başlangıç için sorun yok, **maddede gün iddiası beyan edilmeli**. t=1261-07-25 İstanbul'un geri alınışı (TDV günü verir) iki künyede tutarlı. |
| `epir-despotlugu` | f=1204-04-13 aynı gün sorunu (Mikael Angelos'un kuruluşu 1204-05, gün Haçlı fethinden devralınmış). t=1430-10-09: TDV yalnız ay (Ekim 1430), gün akademik sayfadan (ic_not'ta). Kabul. |
| `selanik-kralligi` | 1205-1225, TDV yıl. Gün yok. Kabul. |
| `kudus-kralligi` / `antakya` / `urfa` / `trablus` | TDV Haçlılar (Demirkent) tabanlı, günlü; Urfa t=1150-01-01 Tel Başir teslimi (Urfa düşüşü 1144-12-24'tür; Urfa Kontluğu **künyesi 1144 sonrası Tel Başir ile uzatılmış**, beyanlı). Kudüs t=1291-07-14 Sûr (Akka 18 Mayıs 1291) künye genişletilmiş; harita için Akka düşüşünden sonra 2 ay "Kudüs Krallığı" boyası Sûr'a kalır. |
| `birinci-bulgar` / `bulgar-carligi` | TDV + HE; Çarlık t=1396-10-01 Emre kararı (ay-gün TDV). 1018/1185 yıl. Kabul. |
| `sirp-despotlugu` / `hirvatistan-kralligi` / `hirvat-dukalik` | HE esaslı; Hırvat Krallığı 925 taç giyme değil (beyanlı); Despotluk t=1459-06-20 Smederevo. Kabul. |
| `trabzon-rum` / `bizans` | Trabzon t=1461-08-15; Bizans t=1453-05-29 (Emre kararı 2 Kasım). `kaynak:` alanları "bizans/trabzon" şeklinde **slug** (TDV maddesi), tam alıntı yok — künye kaynaklılığı ince. |

---
## Karar gereken (önerimle)

1. **Kilikya Ermeni f: 1198 mi 1199 mu?** Öneri: Der Nersessian'a (6 Ocak 1198) uy, künye f ve `rupeniler.t` → 1198-01-06; kronoloji dosyasındaki 1199 ifadeleri birlikte düzelsin (Değişmez 2: kırılma+madde birlikte taşınır). Önce Neagu 2020 ve TDV/İSAM'dan bir kaynak okunsun; yoksa mevcut hâl + iki yıllı beyan.
2. **Sâsânî f: 224-04-28 → 226-01-01?** Öneri: künyeyi bırak (Part ile aralıksız), ama `ic_not`a "224 Hürmüzgân (TDV Erdeşîr), 226 taç giyme (TDV Sâsânîler)" yaz.
3. **İznik/Epir f=1204-04-13:** Öneri: gün iddiası `ic_not`ta "İstanbul düşüş günü, kuruluş günü değil" diye beyan edilsin; tarih kalsın (harita aynı kalır).
4. **Ermenistan 12-63 boşluğu** ve **Burgund birinci krallık (411-437)** ve **Gassânî 582-636**: Öneri: ayrı mini-işlerle TDV/Iranica'dan ölç; boşluk haritada delik mi kontrol et (koşu sonrası).
5. **Danişmendli/Saltuklu f=1071-01-01** Malazgirt öncesi boyama: Öneri: f'yi Malazgirt gününe (1071-08-26) bağla yalnız kaynak "iktâ yılı"ndan sonrası diyorsa; TDV yılı verdiği için şimdilik beyan yeterli, haritada ölçülmeli.
6. **Part f -0249 ↔ -0246:** Öneri: Iranica "Arsacids I"i üçüncü kaynak olarak oku; ölçülene dek beyanlı bırak.

*Rapor sonu — ② bulamadığım: yerleşim zinciri/harita ölçümü, Svev/Alan/Gotlar künyeleri, TDV'nin yeniden doğrulanması.*
