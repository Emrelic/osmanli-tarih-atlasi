// ============================================================================
// KİŞİ KARTLARI — İRAN (KISILER şeması) · AŞAMA 2 örnek: 2 kayıt
// ============================================================================
// 25 Kasım 2026 · UMIT (umit21-osm5).
// AD: window.KISI_IRAN — şartname düzeltmesi @b4dc6cb77: yabancı kişiler KISILER'e
//   EKLENMEZ (Osmanlı maddelerinde yanlış eşleşir). Dosya adı data/kisi_iran.js önerilir
//   (CLAUDE.md: data/<tur>_<kisaltma>.js → window.<TUR>_<KISALTMA>).
// `devlet` = devletler.js künye id'si. `tur` değerleri Osmanlı KISILER listesindeki
//   mevcut değerlerden seçildi (yabanci-hukumdar, siyasi) ki arayüz tanısın; İran
//   dosyasında «yabanci» öneki anlamca garip kalıyor → altyapı kararı (BORÇ).
// Kaynaklar WebFetch ile çekildi, araç özet verdi ("araç özetiyle okundu").
// ============================================================================
window.KISI_IRAN = [

{
 "id": "iran-hasan-sabbah",
 "devlet": "alamut-nizari",
 "tur": "yabanci-hukumdar",
 "ad": "Hasan Sabbâh",
 "t": "1124",
 "donem": "1090–1124",
 "not": "Nizârî İsmâilî devletinin kurucusu. Kum ya da Rey'de doğdu (1046-47 veya 1053-54 rivayet edilir); İmâmiyye Şiîsi bir aileden gelip gençliğinde İsmâilî oldu, Kahire'de Fâtımî halifesinin yanına kadar yükseldi, veraset kavgasında sürüldü. 4 Eylül 1090'da Rûdbâr vadisindeki Alamut Kalesi'ne yerleşip devletini kurdu ve 23 Mayıs 1124'te orada öldü. Fâtımîlerde Müstansır'dan sonra Nizâr'ı tutup Müsta'lî'yi tanımayınca İsmâilîler ikiye bölündü. Ömer Hayyam ve Nizâmülmülk ile okul arkadaşı olduğu hikâyesi doğum tarihleri yüzünden zayıf bir rivayettir.",
 "kaynak": "Abdülkerim Özaydın, «Hasan Sabbâh», TDV İslâm Ansiklopedisi, c. 16, İstanbul 1997, s. 347-350 — https://islamansiklopedisi.org.tr/hasan-sabbah",
 "olay": ["1090-09-04|Alamut", "1124-05-23|Hasan Sabbâh"],
 "ic_not": "araç özetiyle okundu. tur: kurucu-hükümdar olduğu için yabanci-hukumdar; dâî/âlim yönü için alternatif «alim». BAĞ SINAMASI: 1090-09-04 künye alamut-nizari anlatı maddesi + kronoloji_sinir_once1281_geriye «Alamut: nizârî ismâilî devleti…» sınır maddesi (aynı olay, ikisi doğru); 1124-05-23 künye alamut-nizari ve olaylar_ortacag_iran_hint_magrib «Hasan Sabbâh Alamut'ta öldü» (aynı olay, ikisi doğru). KISILER şemasında olay alanı yok; bağ önerisi olarak eklendi."
},

{
 "id": "iran-humeyni",
 "devlet": "iran",
 "tur": "siyasi",
 "ad": "Ayetullah Rûhullah Humeynî",
 "t": "1989",
 "donem": "1979–1989",
 "not": "1979 İran İslâm Devrimi'nin önderi ve İran İslâm Cumhuriyeti'nin kurucusu. 1902'de Humeyn'de doğdu, Erak ve Kum'da fıkıh, felsefe ve tasavvuf okudu. 1960'ların başında Muhammed Rızâ Şah'ın reformlarına karşı muhalefetin önüne geçti; 1963 olaylarından sonra tutuklandı. 1964 sonunda Türkiye'ye sürüldü: önce Ankara'ya, 12 Kasım 1964'te Bursa'ya götürüldü. 1965'te Irak'ta Necef'e geçti ve orada yaklaşık on üç yıl kaldı; Necef'te verdiği derslere dayanan Velâyet-i Fakîh yâ Hükûmet-i İslâmî adlı eserinde, Gâib İmam'ın yokluğunda yönetimin fakihlere ait olduğunu savundu. 1978'de Paris'e geçti, 1 Şubat 1979'da Tahran'a döndü. 3 Haziran 1989'da öldü.",
 "kaynak": "Hamid Algar, «Humeynî», TDV İslâm Ansiklopedisi, c. 18, İstanbul 1998, s. 358-364 — https://islamansiklopedisi.org.tr/humeyni",
 "olay": ["1979-02-01|Humeyni"],
 "ic_not": "araç özetiyle okundu (iki çekim). ÇELİŞKİ: araç ilk çekimde velâyet-i fakih derslerini 1970'e, ikinci çekimde eseri «1969 derslerine dayanan, 1969'da Necef'te basılan» diye verdi → yıl metne yazılmadı; TDV sayfası doğrudan okunmalı (BORÇ). Doğum günü (23 Eylül 1902) araç çıktısında var, metne yalnız yıl yazıldı. Bursa'da kalış süresi: araç «on iki ay kalması bekleniyordu» dedi → süre yazılmadı. Velâyet-i fakihe Şiî ulema içinden itirazlar (Hûî vb.) TDV metninde anlatılmıyor (araç) → yazılmadı; ikinci kaynak OKUNMADI (BORÇ). BAĞ SINAMASI: 1979-02-01 yalnız künye iran «Ayetullah Humeyni sürgünden Tahran'a döndü» maddesinde; data/olaylar*.js ve kronoloji*.js Grep'inde bu gün çıkmadı → tek ve doğru madde."
}

];
