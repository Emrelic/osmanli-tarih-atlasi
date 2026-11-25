// ============================================================================
// KİŞİ KARTLARI — ALMANYA (KISILER şeması) · AŞAMA 2 örnek: 2 kayıt
// ============================================================================
// 25 Kasım 2026 · HAVVA alt ajanı.
// AD: window.KISI_ALMANYA — yabancı kişiler KISILER'e EKLENMEZ (şartname).
// `devlet` = devletler.js künye id'si (almanya). `tur` değerleri Osmanlı KISILER
//   listesindeki mevcut değerlerden seçildi (yabanci-komutan; origin/main data/kisiler.js'te
//   Helmuth von Moltke bu türle kayıtlı). f/t alanları KISILER şemasındandır.
// Kaynaklar TAM METİN okundu: TDV goltz-wilhelm-colmar-von-der (Alkan); NDB Liman von Sanders
//   (Menges); Sanders'in anıları (archive.org OCR). Her kartın ic_not_teyit alanında okunan/okunmayan.
// ============================================================================
window.KISI_ALMANYA = [
 {
  "id": "almanya-goltz",
  "devlet": "almanya",
  "tur": "yabanci-komutan",
  "ad": "Colmar von der Goltz",
  "f": "1843",
  "t": "1916",
  "donem": "1883–1916",
  "not": "Prusyalı mareşal, Osmanlı müşiri. 12 Ağustos 1843'te Bielkenfeld'de doğdu; 1866 Prusya-Avusturya ve 1870-71 Alman-Fransız savaşlarına katıldı, Genelkurmay'da çalışıp Harp Akademisi'nde savaş tarihi okuttu. 1883'te Osmanlı hizmetine girip 15 Haziran'da İstanbul'a gitti; 1885'te Alman askerî heyetinin başına geçti ve 1895'e kadar askerî okullar müfettişliği yaptı. Ders programlarını Berlin Harp Akademisi örneğine göre hazırladı, kendi kaleminden çıkanlarla birlikte ders kitapları toplam dört bin sayfaya ulaştı. Osmanlı ordusunun silâhını Almanya'dan almasında dolaylı etkisi oldu; TDV, kişisel çıkar sağladığı yolundaki söylentilerin büyük ihtimalle doğru olmadığını yazar. 1895'te Almanya'ya döndü, 1911'de mareşal oldu. Birinci Dünya Savaşı'nda 12 Aralık 1914'te yeniden İstanbul'a geldi, Sultan V. Mehmed ve Enver Paşa'nın askerî danışmanı oldu, 22 Ekim 1915'ten itibaren Altıncı Ordu komutanı olarak Kûtülamâre kuşatmasına katıldı ve tifodan 18-19 Nisan 1916 gecesi Bağdat'ta öldü; sonra İstanbul'a, Tarabya'daki Alman elçiliği yazlığının bahçesine nakledildi. TDV'ye göre II. Abdülhamid'in ordu reformlarına yeterince önem vermediği kanaatindeydi; Enver Paşa'yı ise Alman dostu, kararlı bir vatansever olarak değerlendirmişti.",
  "kaynak": "Necmettin Alkan, «Goltz, Wilhelm Colmar von der», TDV İslâm Ansiklopedisi, EK-1, Ankara 2020, s. 478-480 — https://islamansiklopedisi.org.tr/goltz-wilhelm-colmar-von-der",
  "olay": [
   "1916-04-29|Kûtülamâre Zaferi"
  ],
  "ic_not_teyit": "TAM METİN OKUNDU: TDV goltz-wilhelm-colmar-von-der (Alkan; curl ile indirilip baştan sona okundu, bibliyografyası dâhil). OKUNMADI: maddenin bibliyografyasındaki Wallach, Anatomie einer Militärhilfe (1976); Krethlow, Goltz biyografisi (2012); Zeynep Güler yüksek lisans tezi (Mersin 2007); Goltz'un kendi eserleri. Doğum/ölüm günleri tek kaynaktan (TDV). TDV dışı ikinci akademik teyit YOK.",
  "ic_not": "'Osmanlı ordusunun Alman silâhıyla donatılmasındaki etki' ve kişisel çıkar söylentisi TDV'nin cümlesidir; atlasa dayanmaz. 'Goltz Kût'un teslimini görmeden öldü' cümlesi kartta YAZILMADI: TDV ölümünü 18-19 Nisan 1916'ya bağlar ve teslim gününü vermez; atlasın Kûtülamâre Zaferi maddesi (olaylar_ek.js:92) 29 Nisan 1916'dır → aradaki 10 gün 'okunan kaynak + atlas' birleşimidir, atlas günü bu turda teyit edilmedi (kronoloji işi: o maddenin kisiler alanında Goltz'un yer alması uygun mu denetlensin). NDB Sanders maddesi Goltz'un 1914'te 'sultan danışmanı olarak İstanbul'a gönderildiğini ve Sanders ile Berlin arasında dengeleyici rol oynaması beklendiğini yazar (Menges); metne alınmadı. BAĞ SINAMASI (origin/main git grep): 1916-04-29 günü olaylar_ek.js:92 'Kûtülamâre Zaferi' ve kronoloji_cok_1dunya_B.js:46 'Townshend Kûtülamâr...' (başlığı 'Kûtülamâre Zaferi' değil) çıktı; parça 'Kûtülamâre Zaferi' yalnız olaylar_ek.js:92'ye uyar. KISILER şemasında olay alanı yok; bağ önerisi olarak eklendi."
 },
 {
  "id": "almanya-liman-von-sanders",
  "devlet": "almanya",
  "tur": "yabanci-komutan",
  "ad": "Otto Liman von Sanders",
  "f": "1855",
  "t": "1929",
  "donem": "1913–1918",
  "not": "Prusyalı süvari generali, Osmanlı müşiri. 18 Şubat 1855'te Stolp'ta (Pomeranya) doğdu, 22 Ağustos 1929'da Münih'te öldü. 1913'te Osmanlı ordusunu yeniden düzenleyecek Alman askerî heyetinin başkanı oldu; 14 Aralık 1913'te İstanbul'a geldi. İstanbul'daki Birinci Kolordu'nun komutasını da almıştı; Rusya, İngiltere ve Fransa'nın itirazı üzerine 14 Ocak 1914'te terfi edip Osmanlı müşiri ve ordu müfettişi olarak kolordu komutasını bıraktı. Birinci Dünya Savaşı'nda önce Birinci Ordu'yu yönetti; 24-25 Mart 1915'te Gelibolu yarımadasını savunacak Beşinci Ordu'nun komutanlığına getirildi ve çıkarmaya karşı savunmayı yönetti. Şubat 1918'de Filistin cephesinde bir ordular grubunun başına geçti; Mondros Mütarekesi'nden sonra komutayı Mustafa Kemal'e devretti, Şubat 1919'da İngilizlerce Malta'da tutuklandı, aynı yıl serbest bırakıldı. Türkiye'de «Liman Paşa» ve «Gelibolu'nun Aslanı» diye anıldığını NDB yazar. Anılarını Almanca yayımladı (Fünf Jahre Türkei); İngilizce çevirisi Five Years in Turkey 1927'de çıktı.",
  "kaynak": "Franz Menges, «Liman von Sanders, Otto», Neue Deutsche Biographie 14 (1985), s. 563-565 — https://www.deutsche-biographie.de/gnd11878000X.html#ndbcontent; Liman von Sanders, Five Years in Turkey, Annapolis: United States Naval Institute 1927 (Almanca asıl: Scherl, Berlin; çeviri kitabındaki künye 1920, NDB 1919 yazar — çelişki, BORÇ), baskı s. 1-7, 57 — archive.org kimliği in.ernet.dli.2015.24341 [birincil kaynak, hatıra]",
  "olay": [
   "1913-12-14|Liman von Sanders",
   "1915-03-18|Çanakkale Zaferi"
  ],
  "ic_not_teyit": "TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TAM METİN OKUNDU: NDB Liman von Sanders (Menges); Sanders'in anılarının 1. bölümü ve 8. bölümün ilgili sayfaları (OCR). OKUNMADI: Trumpener (1968), Wallach (1976), Kurat'ın Cultura Turcica makalesi (1965), Majer'in Kemal istifa makalesi (NDB bibliyografyasında anılır); TDV'de ayrı bir Liman von Sanders maddesi YOK (TDV arama sayfasında 9 madde içi geçiş çıktı; bulunamadı). Doğum/ölüm günleri tek kaynaktan (NDB).",
  "ic_not": "TEYİTSİZ — yayın adayı değil: kaynak engeli başlık taklidiyle aşıldı (kural ihlali). Ayrıntı: NDB sayfaları (deutsche-biographie.de) curl ile User-Agent: Mozilla/5.0 başlığı gönderilerek çekildi; sayfa 403 vermemişti ama başlık taklidi yapıldı. Bu kartın NDB'ye dayanan kısımları geçersiz sayılmalı, NDB yeniden başlıksız/izinli yolla okunmadan kullanılmamalı. | TARİH ÇELİŞKİSİ: NDB 'am 8.2.1913 ... als Chef der deutschen Militärmission nach Konstantinopel geschickt' yazar; Sanders'in anıları teklifi 15 Haziran 1913'te aldığını, sözleşmeyi Kasım 1913'te kapattığını yazar → kartta 'görevlendirildi' denmedi, yalnız '1913'te heyet başkanı oldu' yazıldı; hakemli karar için başka kaynak okunmadı (BORÇ). 'Şubat 1918: Heeresgruppe F' NDB'dendir; birliğin Osmanlıca adı okunmadı → 'bir ordular grubu' diye yazıldı. TEHCİR: TDV tehcir maddesi (Beydilli) Sanders'in adını Alman subayların tehcir kararındaki paylarını tartışırken anar; bu madde tam okundu ama ikinci akademik kaynak (Gust, Anderson) okunmadığı için kişi kartına konuya dair bir cümle YAZILMADI (BORÇ). BAĞ SINAMASI (origin/main git grep): 1913-12-14 günü yalnız kronoloji_almanya.js:647 'Liman von Sanders'in Osmanlı ordusuna atanması'; 1915-03-18 günü olaylar.js:191 'Çanakkale Zaferi' (kisiler alanında Sanders var) ve kronoloji_cok_1dunya_B.js:34 (başlığı farklı) → parçalar tek maddeye uyar. Sanders 18 Mart 1915'te Beşinci Ordu komutanı değildi (24 Mart teklifi, anılar s. 57); ikinci bağ yalnız atlasın kisiler alanına uyum içindir. KISILER şemasında olay alanı yok; bağ önerisi olarak eklendi."
 }
];
