# BALKAN raporu — tur 2

## 1. Sayılar (ölçüm: dilim JSON'ları, bu oturum sonu)
| Dilim | Kayıt | kismen-okundu | taslak | bu turda eklenen |
|---|---|---|---|---|
| A | 0 | - | - | 0 |
| B | 53 | 13 | 40 | 23 |
| C | 34 | 14 | 20 | 10 |
| D | 14 | 8 | 6 | 4 |
| E | 27 | 16 | 11 | 13 |

- Hiçbir kayıt `okundu` değil: tarihler Vikipedi maddelerinden (yalnız aracı) alındı, atıf verdiği akademik eserler (Bon, Miller, Fine, Wilkes, Hansen-Nielsen...) bu oturumda açılamadı. Vikipedi'yle doğrulanan kayıtlar `kismen-okundu`, kaynak alanında "[Vikipedi atıf listesi]" etiketli.
- Elenen: 0. Eşleme kontrolü: yeni kayıtlarda `mevcut_id`ler tsv'de var; Kefe (Ceneviz Kaffa) zaten atlasta (`kefe-gazaria`, 1266-1475, Vikipedi ile uyumlu: 1266 / 1474-75) ve Bosporos (`bosporos-krallik`) var: yeni kayıt açılmadı. Odris (`odris`) Sapaioi evresini kapsıyor: `trakya-sapaioi-krallik` `ardil-var`.
- Düzeltilen taslaklar: argos-nauplia f 1205→1212, başkent Nauplia; salona-lordluk ic bilgi hatası (De la Roche değil d'Autremencourt/Katalan); zahumlje t 1030→1054; hirvat-dukalik f 800→810; praisos t 145→140 MÖ; balaton f 840→846; neretva f 830→839.

## 2. Ulaşılamayan / yetersiz
- Hansen-Nielsen Inventory (OUP erişim duvarı): B dilimindeki polisler (Girit 13, Kyklades 7) f/t hafızadan, `taslak`/`kismen`. Pleiades JSON (curl) çalışıyor ama yalnız kaba dönem (archaic/classical/hellenistic) verir, polis statüsü tarihi vermez.
- Pleiades web arayüzü WebFetch'te Anubis; curl ile JSON açıldı.
- Vikipedi 404: Navigajoso(sayfa adı), Kuber, Phocian League/koinon.
- Henüz yazılmayanlar: Girit'in Dreros/Olous/Axos/Lappa/Priansos/Rhaukos/Arkades/Lissos/Elyros polisleri; Kyklades'in Keos'taki 3 polisi, Amorgos, Ios, Kythnos, Seriphos, Mykonos; Phokis, Lokris (Opus), Euboia şehirleri, Delphoi Amphiktyonisi (polity değil, dinî birlik: karar bekliyor); Liburnia (kabile/denizci güç, polity sınırında); Grabaioi, Pannonia kabileleri; Tyras/Tanais/Gorgippia/Kepoi; Kutrigur-Utigur, Antes; Avar-Frank markları; Gesta Hungarorum voyvodalıkları; Bizans temaları (karar: girmez); Lemnos dışı Latin Ege lordlukları (Andros, Kythera, Santorini) - yalnız Ghisi yazıldı; Kaffa dışı Ceneviz kolonileri (Chios Maona 1346 sonrası, kapsam dışı).
- Kuber Bulgarları yalnız arama özetinden: `taslak`.
- `hierapytna-polis`, `aptera-polis`, `lato-polis`, `theodosia-polis`, Kyklades polisleri: `taslak`.

## 3. İstekler
1. Akademik eser düzeyinde doğrulama: Bon *La Morée franque* (1969) ve Miller *Latins in the Levant* (archive.org tam metin) ile Frank baronluklarını `okundu` yapacak oturum; Wilkes *The Illyrians* ve Hammond 1966 BSA ile İlir kayıtları.
2. Veri oturumu kararı: Latin Ahaya baronlukları (Karytaina, Akova, Patras, Chalandritsa, Veligosti, Vostitsa, Kalavryta, Nikli, Geraki, Arkadia) ayrı polity mi, `ahaya-prinkepsligi` içinde mi; Argos-Nauplia ve Thebai, `atina-dukaligi` ile ilişki.
3. `nesiotai-koinon` iki evrelidir (313-245, ~200-167): ayrı iki künye gerekebilir.
4. `bardylis-krallik` ile `illyria-dassaretioi-bardylis` olası mükerrer.
5. Venedik Dalmaçyası (1000-1358) kesintili: tek kayıt mı, şehir bazlı mı?
