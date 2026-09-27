// ============================================================================
// EK OKUMA — PAKET 0077 / A KOLU: ÇANAKKALE · IRAK · KAFKAS · HİCAZ · FİLİSTİN
// ============================================================================
// AD ALANI: bu dosya YALNIZ window.EKOKUMA_P77A tanımlar.
// Yükleyici satırı (js/app.js _EKOKUMA_DOSYA_ADLARI) koordinatördedir;
// index.html'e ve js/app.js'e dokunulmadı.
//
// KAYNAK YÖNTEMİ: TDV İslâm Ansiklopedisi birincil. Gövdesi çekilip okunan
// ve kullanılan maddeler: canakkale-muharebeleri · canakkale · birinci-dunya-
// savasi · kutulamare · sarikamis-harekati · erzurum · trabzon · erzincan ·
// bitlis · rize · bayburt · gumushane · mus · van · kars · kazim-karabekir ·
// serif-huseyin · fahreddin-pasa · gazze · filistin · kudus · suriye · maan ·
// mondros-mutarekesi · cemal-pasa.
// TDV'nin kapsamadığı tanecikte kullanılan akademik kaynaklar (DergiPark,
// PDF gövdesi çekilip okundu):
//   · Cemalettin Taşkıran, "18 Mart Çanakkale Deniz Savaşı" (article-file/994127)
//   · Yaşar Semiz, "18 Mart 1915 Çanakkale Deniz Savaşı: Sebepleri, Gelişimi
//     ve Sonuçları" (article-file/258192)
//   · Sayim Türkman, "Birinci Dünya Savaşı Doğu (Kafkas) Cephesi, Rus İleri
//     Harekâtı (1916-1917)", TESAM Akademi Dergisi 8/1 (2021) (article-file/1304546)
//   · Nurcan Yavuz, "Erzincan Mütarekesi'nin Türk Tarihindeki Yeri ve Önemi"
//     (article-file/782670)
//   · İsmet Üzen, "Osmanlı Devleti'nin Kudüs'ü Terketmek Zorunda Kalış Süreci
//     (1914-1917)", Çankırı Karatekin Üniv. Türkiyat Araştırmaları Dergisi 6/1
//     (2026) (article-file/5420181)
//   · Cemal Kemal, "Osmanlı'nın Filistin Cephesi'ndeki Son Muharebesi",
//     Atatürk Yolu Dergisi S.45 (2010), s.37-69 (article-file/20524)
//
// TUZAĞA DÜŞÜLEN SLUGLAR (HTTP 302, ölü): canakkale-savaslari · kut ·
//   halil-pasa · vehib-pasa · nusret · sarikamis · seyyid-onbasi ·
//   allenby · yildirim-ordulari-grubu · brest-litovsk · arhavi · askale ·
//   kelkit · hopa · lazistan · sam (Şam'ın maddesi dimask; o da boş gövde
//   döndü — boilerplate, "çekilemedi" ≠ "yok").
//
// KAYNAKLARIN KENDİ İÇİNDEKİ ÇELİŞKİLER (kartlarda açıkça söylendi):
//   · Nusret'in mayın döşediği gece: TDV canakkale-muharebeleri ve Semiz
//     "17/18 Mart"; Taşkıran "7-8 Mart". Kart iki rivayeti de verir.
//   · Kût teslimi: TDV kutulamare 29 Nisan 1916, TDV birinci-dunya-savasi
//     28 Nisan 1916. Kart 29 Nisan'ı (müstakil madde) esas alır, farkı söyler.
//   · Şerif Hüseyin isyanının başlangıcı: TDV fahreddin-pasa 3 Haziran
//     (Medine çevresinde hat tahribi) ve 9 Haziran (Mekke'de genel saldırı);
//     TDV serif-huseyin "Haziran 1916" + 27 Haziran bildirisi. Tâif'in
//     düşüşü: serif-huseyin 17 Eylül, fahreddin-pasa 22 Eylül.
//   · Allenby'nin Kudüs'e girişi: TDV filistin 11 Aralık, TDV birinci-dunya-
//     savasi 9 Aralık. Üzen ikisini ayırır: 9 Aralık teslim, 11 Aralık tören.
//   · Muş: TDV mus 26 Temmuz 1916'da kurtarıldı der; Türkman 6 Ağustos'ta
//     Rusların Muş'u terk ettiğini yazar.
//
// BULUNAMADI (kartta uydurulmadı):
//   · Seyid Onbaşı: TDV'de maddesi yok, Çanakkale maddelerinde anılmıyor.
//     Tek akademik dayanak Taşkıran; Semiz'in ayrıntılı anlatısı onu anmıyor.
//   · Arhavi'nin 1916 işgal günü: TDV maddesi yok, Türkman anmıyor.
//   · Aşkale'nin işgal GÜNÜ (Türkman: Erzurum'un ardından, Şubat 1916).
//   · Rize, Bayburt, Gümüşhane'nin 1918 kurtuluş GÜNLERİ (Gümüşhane için TDV
//     28 Şubat 1918 veriyor; Rize ve Bayburt için gün bulunamadı).
//
// ŞEMA: data/ekokuma_p76e.js ile birebir —
//   { id, tur, kisa|ad, metin, kesinlik, olay, kaynak }
// `olay:` değerleri "YYYY-MM-DD|<madde metninden bir parça>" biçimindedir ve
// kronoloji maddesinin `t:` ve `b:` alanlarından ÖLÇÜLEREK alınmıştır.
// `gorsel:` hiçbir kartta yok — kamu malı/CC0 olduğu doğrulanmış görsel
// aranmadı.
// ============================================================================
window.EKOKUMA_P77A = [

// ── H-0010 · 18 Mart, Nusret ve Seyid Onbaşı ────────────────────────────────
{ id:"p77a-18-mart-nusret-seyid", tur:"sebep-sonuc",
  kisa:"18 Mart 1915'te on altı savaş gemisini geri çeviren ne oldu: toplar mı, mayınlar mı? Nusret ve Seyid Onbaşı bu hikâyenin neresinde?",
  metin:"18 Mart 1915 sabahı İngiliz ve Fransız zırhlıları Çanakkale Boğazı'na girdi. Hedef, tabyaları susturup mayın hatlarını temizlemek ve donanmayı Marmara'ya, oradan İstanbul'a çıkarmaktı. Akşam olduğunda üç zırhlı batmış, birçoğu savaş dışı kalmıştı ve filo geri çekildi. Bu sonucu doğuran üç unsur vardı: tabyalar, sahra bataryaları ve mayınlar.\n\n"
    +"■ BOĞAZ NASIL SAVUNULUYORDU\n"
    +"Boğaz Ağustos 1914'ten itibaren mayınlanmıştı; Aralık sonunda mayın hatları dokuz sıraya ulaşmıştı ve ana hatlar boğazın en dar yerinde, Soğanlıdere-Dardanos önünde başlıyordu. Hatları koruyan gizli ve seyyar obüs bataryaları kıyılara yerleştirilmişti. Düşünce basitti: büyük gemiler tabyaları uzaktan dövebilir, ama mayını temizlemek için tarama gemilerinin yaklaşması gerekir; yaklaşan küçük tarama gemisi de bataryalar tarafından kolayca vurulur. Mayın kıtlığı o kadar büyüktü ki Rusların Karadeniz'e bırakıp akıntıyla sürüklenen mayınlar toplanıp Çanakkale'ye getiriliyordu.\n\n"
    +"■ NUSRET'İN 26 MAYINI\n"
    +"Nusret küçük bir mayın gemisiydi. Erenköy koyuna, İtilaf gemilerinin manevra yaptığı yere, eldeki son mayınlardan 26 tanesini döktü. Kritik olan yer ve yöndü: mayınlar öteki hatlar gibi boğaza dik değil, kıyıya paralel dizildi; bu yüzden orada mayın olabileceği düşünülmedi. Döşemenin tarihinde kaynaklar ayrılır: TDV maddesi ve Yaşar Semiz bunu 17/18 Mart gecesine koyar; Cemalettin Taşkıran ise 7-8 Mart gecesi yapıldığını yazar. Kesin olan, bu mayınların 18 Mart'ta işe yaradığıdır.\n\n"
    +"■ O GÜN\n"
    +"Fransız zırhlısı Bouvet Erenköy koyundan dönerken birkaç dakikada battı; önce karadan atılan bir mermiyle vurulduğu sanıldı, kurtarılanların ifadesinden mayına çarptığı anlaşıldı. Irresistible de mayına çarptı; yardımına giden Ocean da aynı sahada bir mayına çarptı ve iki gemi art arda battı. TDV'ye göre filo mevcudunun yüzde 35'ini kaybetti; Bouvet, Océan ve Irrésistible ile iki muhrip ve yedi mayın arama gemisi battı, Gaulois ve Inflexible dahil yedi zırhlı görev yapamaz hâle geldi. Savunmayı yöneten Çanakkale müstahkem mevki komutanı Cevad Paşa \"18 Mart kahramanı\" diye anıldı.\n\n"
    +"■ SEYİD ONBAŞI\n"
    +"Seyid Onbaşı'nın adı TDV'nin Çanakkale maddelerinde geçmez; hikâyeyi aktaran akademik kaynak Taşkıran'dır. Onun anlatımına göre Seyid Onbaşı Rumeli Mecidiye Tabyası'nın erlerindendi. Bataryanın dört topundan yalnız biri sağlam kalmış, mermiyi namlu ağzına taşıyan vinç de bozulmuştu. Seyid Onbaşı yaklaşık 275 kiloluk mermiyi sırtlayıp topa yerleştirdi ve Taşkıran'a göre üçüncü atışta Ocean'ı vurdu. Sonradan Harp Mecmuası için fotoğrafı çekilmek istendiğinde mermiyi yeniden kaldıramadı; bugün bilinen fotoğraf tahta bir maketle çekildi. Aynı Taşkıran, Ocean'ın sonunda bir mayına çarptığını da yazar; Semiz ise Ocean'ın batışını yalnız mayına bağlar. Yani Seyid Onbaşı'nın isabeti bir geminin yaralanmasıdır; gemiyi batıran mayındır.\n\n"
    +"■ SONUÇ\n"
    +"18 Mart, boğazın donanmayla tek başına geçilemeyeceğini gösterdi. İtilaf devletleri bunun üzerine kara çıkarmasına karar verdi ve 25 Nisan 1915'te Gelibolu yarımadasına asker çıkardılar. Deniz zaferi, sekiz ay sürecek kara savaşının başlangıcı oldu.",
  kesinlik:"tartismali",
  olay:["1915-03-18|Çanakkale Zaferi"],
  kaynak:"TDV: canakkale-muharebeleri (Zekeriya Kurşun; gövde okundu — Nusret'in Karanlık Liman'ı mayınlaması, 18 Mart kayıpları %35, batan gemiler, Cevad Paşa) · TDV: canakkale (şehir; 18 Mart bombardımanı) · Cemalettin Taşkıran, \"18 Mart Çanakkale Deniz Savaşı\" (DergiPark article-file/994127; 7-8 Mart gecesi 26 mayın, Erenköy koyu, paralel dizi, Seyid Onbaşı ve Ocean, tahta maket) · Yaşar Semiz, \"18 Mart 1915 Çanakkale Deniz Savaşı: Sebepleri, Gelişimi ve Sonuçları\" (DergiPark article-file/258192; mayın hatları, 17/18 Mart gecesi, Bouvet'in mayına çarpması, Ocean'ın mayınla batışı) · Seyid Onbaşı için TDV'de dayanak BULUNAMADI" },

// ── H-0011 · Çanakkale: amaç, bedel, önem ───────────────────────────────────
{ id:"p77a-canakkale-amac-bedel-onem", tur:"sebep-sonuc",
  kisa:"İtilaf devletleri Çanakkale'de ne kazanmayı umuyordu, iki tarafa neye mal oldu ve savaşın gidişini nasıl değiştirdi?",
  metin:"Çanakkale, Birinci Dünya Savaşı'nın en çok tartışılan harekâtlarından biridir; çünkü kazanılsaydı savaşın haritasını değiştirecek bir hamleydi.\n\n"
    +"■ AMAÇ\n"
    +"TDV'ye göre İngiltere ve Fransa bu harekâtla birkaç şeyi birden hedefliyordu: Rusya ile doğrudan bağlantı kurup onu silah ve malzemeyle beslemek, Osmanlı'nın Süveyş Kanalı ve Hint yolu üzerindeki baskısını kaldırmak, Orta Avrupa'daki Alman-Avusturya ordularını arkadan çevirmek ve henüz savaşa girmemiş Balkan devletlerini kendi saflarına çekmek. Fikrin savunucusu İngiliz Bahriye nazırı Winston Churchill'di: boğazın donanmayla zorlanması, İstanbul'un alınması ve Osmanlı'nın savaş dışı bırakılması.\n\n"
    +"■ SAFHALAR\n"
    +"İlk bombardıman 3 Kasım 1914'te, henüz resmî savaş ilanı olmadan yapıldı. 19 Şubat 1915'ten sonra dış tabyalar dövüldü. 18 Mart'ta donanma boğazı geçmeye çalıştı ve yenildi. 25 Nisan'da Arıburnu ve Seddülbahir'e çıkarma yapıldı; Mustafa Kemal'in emir beklemeden 57. Alay'ı karşı taarruza sürmesi Arıburnu'ndaki çıkarmayı dar bir kıyı şeridine hapsetti. Ağustos başında Suvla'ya yapılan yeni çıkarma Anafartalar ve Conkbayırı'nda durduruldu. Kasım 1915'te cepheyi gören Lord Kitchener tahliyeye karar verdi; İtilaf kuvvetleri 19-20 Aralık gecesi Anafartalar ve Arıburnu'ndan, 8-9 Ocak 1916'da Seddülbahir'den çekildi.\n\n"
    +"■ BEDEL\n"
    +"TDV'nin verdiği rakamlara göre İtilaf devletleri Çanakkale'ye yarım milyona yakın asker gönderdi (410.000 İngiliz, 79.000 Fransız); yalnız İngiliz kuvvetlerinin toplam kaybı 213.980 kişiydi. Osmanlı tarafında yaklaşık 700.000 kişi savaşa katıldı. Birlikler parça parça kullanıldığı için kayıp tespiti güçtür ve rakamlar 190.000 ile 350.000 arasında değişir; Genelkurmay'ın resmî kayıtlara dayanan şehit sayısı 213.882'dir. TDV, Türk milletinin bu savaşta çok sayıda yetişmiş insanını kaybettiğini özellikle vurgular.\n\n"
    +"■ DÜNYA TARİHİ İÇİN ÖNEMİ\n"
    +"TDV'ye göre Çanakkale'nin başarısızlığı savaşın seyrini değiştirip uzamasına sebep oldu, Çarlık Rusyası'nın çöküşünü hazırladı ve İngiltere'de hükümet değişikliğine yol açtı. Boğaz kapalı kaldıkça Batılı müttefikler Rusya'ya en kısa yoldan yardım götüremedi; TDV'nin Birinci Dünya Savaşı maddesi, Çanakkale seferinin başarısızlığının 1917 Rus ihtilalinin çıkmasında da payı olduğunu yazar. Bulgaristan Ekim 1915'te İttifak devletleri safında savaşa girdi; Sırbistan'ın yenilmesiyle Almanya ile Osmanlı arasında kara bağlantısı kuruldu.\n\n"
    +"■ OSMANLI İÇİN ANLAMI\n"
    +"TDV'ye göre bu başarı Balkan Savaşı'ndan kalan ezikliği silen büyük bir askerî zaferdi ve İslâm dünyası ile ezilmiş milletler için yeni bir ışık oldu. Mehmed Âkif'in \"Çanakkale Şehidlerine\" şiirinden halk türküsüne kadar geniş bir edebiyat doğurdu.",
  kesinlik:"kesin",
  olay:["1915-03-18|Çanakkale Zaferi","1915-04-25|Gelibolu"],
  kaynak:"TDV: canakkale-muharebeleri (Zekeriya Kurşun, gövde okundu — amaçlar, safhalar, tahliye tarihleri, asker ve kayıp rakamları, savaşın seyrine ve Rusya'ya etkisi; Mustafa İsmet Uzun, edebiyat bölümü) · TDV: birinci-dunya-savasi (Çanakkale'nin Rus ihtilaline payı, Bulgaristan'ın savaşa girişi)" },

// ── H-0022 · 26 Eylül 1915: Kût'un İngilizlerce alınışı ─────────────────────
{ id:"p77a-kut-1915-isgal-ve-1916-zafer", tur:"tartisma",
  kisa:"Kûtülamâre bir zafer miydi? Evet — ama Eylül 1915'te değil, yedi ay sonra, Nisan 1916'da.",
  metin:"Kûtülamâre adı Türk hafızasında bir zaferle birlikte anılır. Bu yüzden 26 Eylül 1915'in bir işgal tarihi olması şaşırtabilir. Oysa iki ayrı olay var ve ikisi de doğrudur: önce şehir İngilizlerin eline geçti, sonra İngiliz ordusu o şehirde kuşatılıp teslim alındı.\n\n"
    +"■ 26 EYLÜL 1915: İNGİLİZLER KÛT'U ALIYOR\n"
    +"İngilizler savaşın hemen başında, Kasım 1914'te Basra'yı işgal etmişti. 1915 Eylül'ünün sonlarında General Townshend Dicle boyunca kuzeye yürüdü; karşısındaki Osmanlı kuvveti, Türk ve Araplardan oluşan ve Albay Yusuf Nureddin Bey'in kumandasında olan bir kuvvetti. Hedef Bağdat'tı ve yol üzerindeki Kûtülamâre 26 Eylül 1915'te İngilizlerin eline geçti. Bu tarih bir Osmanlı yenilgisidir.\n\n"
    +"■ DÖNÜM NOKTASI: SELMÂNIPÂK\n"
    +"Townshend ilerlemeyi sürdürdü ve 22-26 Kasım 1915'te Bağdat'a 30 kilometre uzaklıktaki Selmânıpâk'ta taarruza geçti. Burada durduruldu; çok kayıp veren İngilizler Kût'a geri çekildi. 5 Aralık 1915'te Osmanlı kuvvetleri şehri kuşattı. Şehri alan ordu artık şehrin içinde mahsurdu.\n\n"
    +"■ 29 NİSAN 1916: ZAFER\n"
    +"Yaklaşık beş ay süren kuşatmada İngilizlerin dışarıdan kurtarma denemeleri sonuç vermedi. Sonunda Townshend teslim oldu ve 29 Nisan 1916'da Halil Paşa kumandasındaki Türk kuvvetleri Kût'a girip 13.309 kişilik İngiliz ordusunu teslim aldı. Zafer budur ve ayrı bir tarihte anılır.\n\n"
    +"■ NİÇİN İKİSİ BİRDEN ANILMALI\n"
    +"İki tarih birbirinin anahtarıdır. Eylül 1915'te Kût'u alan İngilizler Bağdat'a doğru ilerlemeyi sürdürdü; Selmânıpâk'ta durdurulunca geri çekildikleri yer yine Kût oldu. Yani Eylül'deki kayıp, Nisan'daki zaferin sahnesini kurdu. Yalnız zafer tarihine bakan okur, İngilizlerin oraya nasıl geldiğini göremez; yalnız işgal tarihine bakan ise sonucu kaçırır.\n\n"
    +"■ ZAFERİN SINIRI\n"
    +"TDV, bu askerî başarının Haziran 1916'da Hicaz'da başlayan Şerif Hüseyin isyanını engelleyemediğini ve 1917'de dengenin yeniden döndüğünü de not eder: Şubat 1917'de Kûtülamâre, 11 Mart 1917'de Bağdat İngilizlerin eline geçti.",
  kesinlik:"kesin",
  olay:["1915-09-26|Kûtülamâre","1916-04-29|Kûtülamâre Zaferi"],
  kaynak:"TDV: kutulamare (gövde okundu — 26 Eylül 1915 işgali, Yusuf Nureddin Bey, Selmânıpâk 22-26 Kasım 1915, kuşatmanın başlaması 5 Aralık 1915, 29 Nisan 1916 teslim ve 13.309 kişi, Şubat 1917'de şehrin yeniden kaybı) · TDV: birinci-dunya-savasi (Basra'nın işgali, 11 Mart 1917 Bağdat; bu madde teslimi 28 Nisan 1916 diye verir — müstakil madde 29 Nisan der, kart müstakil maddeyi esas aldı)" },

// ── H-0026 · Kût zaferi nasıl kazanıldı ─────────────────────────────────────
{ id:"p77a-kut-zaferi-nasil", tur:"sebep-sonuc",
  kisa:"Bir ordu, kendi aldığı şehirde nasıl teslim alınır? Kût kuşatmasında doğru yapılanlar ve İngilizlerin açmazı.",
  metin:"29 Nisan 1916'da Kûtülamâre'de 13.309 kişilik bir İngiliz ordusu teslim oldu. Bu sonuç tek bir büyük muharebenin değil, beş ay süren bir kuşatmanın ürünüdür.\n\n"
    +"■ İNGİLİZLERİN AÇMAZI 1: FAZLA UZANMAK\n"
    +"General Townshend 1915 sonbaharında Basra'dan Dicle boyunca Bağdat'a yürüdü. Kasım 1915'te Bağdat'a 30 kilometre kala Selmânıpâk'ta durduruldu ve ağır kayıpla Kût'a çekildi. Bağdat'ı hedefleyen ordu, iki ay önce aldığı şehre sığınmak zorunda kaldı.\n\n"
    +"■ İNGİLİZLERİN AÇMAZI 2: KURTARILAMAMAK\n"
    +"5 Aralık 1915'te Osmanlı kuvvetleri şehri kuşattı. TDV'ye göre İngilizlerin Basra tarafından gönderdiği yardım kuvvetleri kuşatmayı yaramadı: Hindistan'dan getirilen yeni tugaylarla 5 Nisan 1916'da Felâhiye'de başlatılan dört günlük taarruz sonuçsuz kaldı, 21-22 Nisan'daki son deneme de geri püskürtüldü. Kaledeki yiyecek tükendi. İngilizler şehre uçakla yiyecek atmayı denedi, ama paketlerin çoğu nehre düştü; yardım yerine ulaşmadı.\n\n"
    +"■ DOĞRU YAPILAN: KUŞATMAYI TUTMAK, SAVAŞI DIŞARIDA KAZANMAK\n"
    +"Kuşatmanın asıl başarısı şehre saldırmakta değil, şehri kurtarmaya gelenleri durdurmaktaydı. Halil Paşa kumandasındaki Osmanlı kuvvetleri bir yandan içerideki orduyu çember içinde tutarken, bir yandan da güneyden gelen kurtarma kuvvetlerini Felâhiye hattında birkaç kez geri attı. İçerideki ordu dışarıdan gelecek yardıma güvendikçe teslim olmadı; o yardım gelmeyince aç kaldı.\n\n"
    +"■ PAZARLIK\n"
    +"26 Nisan 1916'da İngiliz komutanı General Percy Lake, Townshend'e teslim görüşmelerine başlamasını bildirdi. TDV'ye göre İngilizler önce bütün silahlarını ve 1 milyon sterlin vermeyi, karşılığında Hindistan'a gitmelerine izin verilmesini teklif etti; Türk tarafı kayıtsız şartsız teslimde direndi. 27 Nisan'da Halil Paşa ile Townshend arasındaki görüşmede İngilizler tazminatı 2 milyon sterline çıkardı; yine kabul edilmedi. 29 Nisan'da protokol imzalandı ve Türk kuvvetleri şehre girdi.\n\n"
    +"■ SONUÇ\n"
    +"TDV'ye göre bu zafer Bağdat'ı almaya yönelik İngiliz planlarına büyük bir darbe vurdu. Ancak zaferi izleyen haftalarda Hicaz'da Şerif Hüseyin isyanı başladı; İngilizler Irak'ta yeniden hazırlandı ve Şubat 1917'de Kûtülamâre'yi, Mart 1917'de Bağdat'ı aldı. Kût bir cephenin kaderini değil, bir seferin kaderini belirledi.",
  kesinlik:"kesin",
  olay:["1916-04-29|Kûtülamâre Zaferi"],
  kaynak:"TDV: kutulamare (gövde okundu — Selmânıpâk, 5 Aralık 1915 kuşatma, Percy Lake, Felâhiye 5 Nisan ve 21-22 Nisan 1916, uçakla atılan yiyeceklerin nehre düşmesi, 1 ve 2 milyon sterlin teklifleri, kayıtsız şartsız teslim, 29 Nisan 1916 ve 13.309 kişi, Şubat-Mart 1917'de kayıp) · Kût teslim günü TDV birinci-dunya-savasi maddesinde 28 Nisan 1916 geçer; müstakil maddenin 29 Nisan'ı esas alındı" },

// ── H-0023 · 16 Şubat 1916: Erzurum niçin tutulamadı ────────────────────────
{ id:"p77a-erzurum-1916-nicin-dustu", tur:"sebep-sonuc",
  kisa:"Erzurum 1877'de savaşla alınamamıştı. 1916'da niçin bir ayda düştü?",
  metin:"Erzurum Doğu Anadolu'nun kilidiydi. 1877-78 savaşında Ruslar şehri savaşla alamamış, ancak mütarekeyle teslim almıştı. 16 Şubat 1916'da ise Rus Kafkas Ordusu şehre girdi. Bu farkın arkasında 1914'ten 1916'ya uzanan bir zincir vardır.\n\n"
    +"■ 1: SARIKAMIŞ'IN BIRAKTIĞI BOŞLUK\n"
    +"Aralık 1914-Ocak 1915'teki Sarıkamış Harekâtı, Üçüncü Ordu'nun gövdesini yok etti. TDV'nin verdiği en güvenilir tahminlere göre yaklaşık 30.000 şehit, 20.000 civarında esir ve binlerce hasta ile yaralı vardı. Taarruza karşı çıkan Üçüncü Ordu kumandanı Hasan İzzet Paşa, harekâttan önce ordunun kayıpsız olarak Erzurum önündeki Höyükler hattına çekilmesini önermişti. Sayim Türkman'ın vurguladığı gibi, iki yıl sonra ordu tam o hatta çekilmek zorunda kaldı; ama bu kez elinde tasarruf edilmiş bir kuvvet yoktu.\n\n"
    +"■ 2: EN İYİ BİRLİKLERİN BAŞKA CEPHEYE GİDİŞİ\n"
    +"Ekim 1915'te, her an bir Rus taarruzu beklenirken, Enver Paşa Halil (Kut) Bey'in 18. Kolordusu'nu (51. ve 52. Tümenler) Irak'a gönderdi. Türkman'ın aktardığına göre Üçüncü Ordu kumandanı Mahmud Kâmil Paşa birlikleri \"Halil, Irak'a gideceksin, Bağdat'ı kurtaracaksın, fakat Erzurum düşecek\" sözleriyle uğurladı. Bu tümenler Ruslarla savaşmış, tecrübeli birliklerdi. Irak'ta Kût zaferine katkıda bulundular; ama Erzurum'u savunan ordu en önemli gücünü kaybetti.\n\n"
    +"■ 3: YOL VE DEMİRYOLU\n"
    +"TDV'ye göre Rus ordusu bütün ihtiyacını Tiflis-Gümrü-Kars-Sarıkamış demiryolundan karşılıyordu. Türk tarafında en yakın demiryolu istasyonu olan Ulukışla cephenin 600 kilometre gerisindeydi; sevkiyat kağnı ve yük hayvanlarıyla yapılıyor, kadınlar ve çocuklar bile sırtlarında cepheye erzak taşıyordu. Çanakkale'den sonra gönderilen İkinci Ordu da Ulukışla'dan Muş-Van bölgesine yaklaşık 1.000 kilometre yürümek zorundaydı ve Rus taarruzu geldiğinde yolda idi.\n\n"
    +"■ 4: RUS TARAFINDAKİ DEĞİŞİM\n"
    +"Eylül 1915'te Çar, amcası Grandük Nikola'yı Kafkas Cephesi başkomutanlığına getirdi; cepheye çok sayıda silah ve gereç gönderildi. Ordunun fiilî komutanı, Sarıkamış'ta durumu kurtaran General Yudeniç'ti. Ocak 1916'da, kışın ortasında taarruza geçti; Azap-Köprüköy muharebelerinden sonra Türk birlikleri Erzurum tabyalarına çekildi.\n\n"
    +"■ ŞEHRİN DÜŞÜŞÜ\n"
    +"Türkman'a göre 15 Şubat'ta Çobandede tabyası düşünce savunma hattının bütünlüğü bozuldu; 16 Şubat 1916'da Rus Kolordusu Kars kapısından girerken Türk birlikleri Trabzon kapısından çıkıyordu. TDV, Rusların şehre Ermenilerin yardımıyla girdiğini ve Müslüman halkın ordu ile birlikte Anadolu içlerine göç ettiğini yazar. Türkman'ın aktardığı Türk zayiatı Azap'ta 22.000, Erzurum muharebesinde 9.000, çekilmede 4.500'dür; Rus kaybı 40.000 civarındadır, ama Rus insan kaynağı bu kaybı kaldırabiliyordu.",
  kesinlik:"kesin",
  olay:["1916-02-16|Erzurum"],
  kaynak:"TDV: erzurum (gövde okundu — 1829 ve 1877-78 istilaları, 16 Şubat 1916 Rus girişi ve Ermenilerin yardımı, halkın göçü) · TDV: sarikamis-harekati (gövde okundu — Hasan İzzet Paşa'nın itirazı, 600 km demiryolu farkı, kayıp tahminleri) · Sayim Türkman, \"Birinci Dünya Savaşı Doğu (Kafkas) Cephesi, Rus İleri Harekâtı (1916-1917)\", TESAM Akademi Dergisi 8/1 (2021), DergiPark article-file/1304546 (18. Kolordu'nun Irak'a gidişi ve Mahmud Kâmil Paşa'nın sözü, Grandük Nikola ve Yudeniç, İkinci Ordu'nun 1.000 km intikali, Höyükler hattı, Çobandede, kayıp rakamları)" },

// ── H-0024 · Doğudaki toprak kaybının başat faktörü ─────────────────────────
{ id:"p77a-dogu-cephesi-basat-faktor", tur:"tartisma",
  kisa:"1916'da Erzurum, Muş, Bitlis, Trabzon, Erzincan birbiri ardına düştü. Başat faktör ne idi?",
  metin:"1916 yılı Kafkas cephesinde kayıp yılıdır. Rus Kafkas Ordusu Şubat'ta Erzurum'u, Muş'u ve Bitlis'i, Mart'ta Rize'yi, Nisan'da Trabzon'u, Temmuz'da Bayburt'u ve Erzincan'ı aldı. Kaynaklar birden çok sebep sayar; soru hangisinin ötekileri belirlediğidir.\n\n"
    +"■ ADAYLAR\n"
    +"① Sarıkamış felaketi (Aralık 1914-Ocak 1915): Üçüncü Ordu'nun eğitimli gövdesi bir kış harekâtında eridi. ② Birliklerin başka cephelere kaydırılması: Ekim 1915'te tecrübeli 18. Kolordu Irak'a gönderildi. ③ Lojistik: Rus ordusu demiryoluyla beslenirken Türk ordusunun en yakın istasyonu 600 kilometre gerideydi. ④ Rus tarafının güçlenmesi: 1915 sonbaharında cepheye yeni komuta ve bol malzeme geldi. ⑤ Bölgedeki Ermeni silahlı faaliyeti ve Rus ordusuna katılım; TDV Erzurum'un Ermenilerin yardımıyla alındığını yazar.\n\n"
    +"■ BAŞAT OLAN: KUVVETİN VE İKMALİN TÜKENMESİ\n"
    +"Bu beş sebep aynı ağırlıkta değildir. Beşinci sebep yerel bir kolaylaştırıcıdır; Rus ordusunun ilerleyişini hızlandırmış, ama cephenin çöküşünü tek başına açıklayamaz. Dördüncüsü, karşı tarafın güçlenmesidir ve ancak sizin zayıflığınızla birleşince belirleyici olur. Geriye kalan üç sebep aynı şeye çıkar: Doğu cephesinde, Rus ordusuyla baş edecek kadar insan ve malzemenin cephede tutulamaması. Sarıkamış o insanı yok etti; Irak'a kaydırma eldekini azalttı; 600 kilometrelik kağnı yolu da yerine yenisini zamanında getirmeyi imkânsız kıldı. İkinci Ordu Çanakkale'den sonra doğuya yollandığında Ulukışla'dan cepheye 1.000 kilometre yürümek zorundaydı ve Rus taarruzu geldiğinde yolda idi.\n\n"
    +"■ TDV'NİN HÜKMÜ\n"
    +"TDV'nin Sarıkamış maddesi bu zinciri tek cümlede toplar: Sarıkamış macerası, yüksek kayıp rakamlarıyla değil, Osmanlı Devleti'nin askerî gücünün müttefiklerinin savaş hedefleri uğruna heba edilmesinin bir göstergesi olarak tarihteki yerini almalıdır. Başka bir deyişle Kafkas cephesi, kendi savunmasının gerektirdiği kuvvetten değil, Alman savaş planının ondan beklediği görevden hareketle yönetildi.\n\n"
    +"■ BİTLİS ÖRNEĞİ\n"
    +"Bitlis'in öyküsü aynı sonucu doğrular. Şehir 1 Mart 1916'da Rus işgaline girdi ve 8 Ağustos 1916'da geri alındı; geri alışı sağlayan, doğuya nihayet ulaşan İkinci Ordu'nun taarruzudur. Türkman'a göre 3 Ağustos 1916'dan itibaren İkinci Ordu bölgesinde Bitlis ve Muş cephelerinde taarruzlar sürdü ve 9 Ağustos itibarıyla Bitlis'in kuzey, doğu ve batı sırtları ele geçirildi. Kuvvet cepheye vardığında toprak geri alınabildi; varamadığı sürece kaybedildi. Başkomutanlık da ilerlemenin ancak ikmalin, özellikle iaşenin el verdiği ölçüde yapılmasını istiyordu.",
  kesinlik:"yorum",
  olay:["1916-03-01|Bitlis","1916-02-16|Erzurum"],
  kaynak:"TDV: sarikamis-harekati (gövde okundu — kayıplar, 600 km demiryolu farkı, sonuç cümlesi) · TDV: erzurum (Ermenilerin yardımıyla işgal) · TDV: bitlis (Rus işgali 1 Mart-8 Ağustos 1916) · TDV: rize (8 Mart 1916) · TDV: trabzon (18 Nisan 1916) · TDV: erzincan (24 Temmuz 1916) · Sayim Türkman, TESAM Akademi Dergisi 8/1 (2021), DergiPark article-file/1304546 (18. Kolordu'nun Irak'a gidişi, İkinci Ordu'nun 1.000 km intikali, Bitlis-Muş taarruzunda iaşe engeli, Bayburt 16 Temmuz 1916) · Başat faktör hükmü kartın kendi yorumudur, kaynakların verdiği olgulara dayanır" },

// ── H-0025 · Trabzon 1916: hangi sırayla ────────────────────────────────────
{ id:"p77a-trabzon-1916-sahil-sirasi", tur:"sebep-sonuc",
  kisa:"Trabzon, Rize ve Bayburt'tan önce mi düştü? Hayır: Ruslar sahil boyunca doğudan geldi; Rize önce, Trabzon sonra, Bayburt ise üç ay sonra.",
  metin:"Trabzon 18 Nisan 1916'da Rus işgaline girdi. Şehir denizden bir baskınla değil, kıyı boyunca doğudan ilerleyen bir kara harekâtıyla alındı; Rus donanması bu harekâtı sahilden destekledi.\n\n"
    +"■ SAHİL YOLU: DOĞUDAN BATIYA\n"
    +"Rus Kafkas Ordusu'nun sahil kolu Batum tarafından, Lazistan kıyısı boyunca batıya yürüdü. Sayim Türkman'a göre Ruslar Ocak 1916 ortasında şiddetli çarpışmalardan sonra Hopa'yı aldı. TDV'ye göre Rize önce Rus donanmasının bombardımanına uğradı, hükümet konağı oturulamaz hâle geldi ve şehir 8 Mart 1916'da işgal edildi. Türkman, iç kesimlere doğru ilerlemeye başlandığında donanmanın kıyıdaki birlikleri destekleme imkânı kalmadığını ve takibin takviye beklemek için durdurulduğunu yazar. Donanma sahil harekâtının bir parçasıydı, ama şehirleri alan kara kuvvetleriydi.\n\n"
    +"■ TRABZON\n"
    +"TDV'ye göre Rus birlikleri 14 Nisan 1916'da Karadere'deki savunma hattını yardı ve 16 Nisan'da Yomra'ya ulaştı; aynı gece Trabzon'un Türk nüfusu şehri boşalttı. Ruslar 18 Nisan'da şehre girdi ve 24 Şubat 1918'de çekilene kadar şehri tuttu. Türkman'ın aktardığı Rus harekât hedefleri arasında, Türk ordusunun önemli bir ikmal üssü olan Trabzon'u ele geçirmek açıkça yer alıyordu.\n\n"
    +"■ BAYBURT: TRABZON'DAN SONRA\n"
    +"Bayburt, Trabzon-Erzurum ikmal yolu üzerinde, iç kesimde kalıyordu. Fevzi Paşa (Çakmak) Mart 1916'da karargâhını buraya kurdu ve bölge aylarca savunuldu. Türkman'a göre Yudeniç'in yaz taarruzunda Ruslar Bayburt'u 16 Temmuz 1916'da işgal etti; yani Trabzon'dan yaklaşık üç ay sonra. TDV'nin Bayburt maddesi yalnız 1916'da işgal edildiğini söyler, gün vermez.\n\n"
    +"■ SIRA\n"
    +"Hopa (Ocak 1916 ortası) → Rize (8 Mart 1916) → Trabzon (18 Nisan 1916) → Bayburt (16 Temmuz 1916). Arhavi Hopa ile Rize arasındaki kıyı yolu üzerindedir, ama işgal günü ne TDV'de ne de kullanılan akademik kaynakta bulundu. Bayburt ise Trabzon düştüğünde hâlâ Osmanlı elindeydi: 1916 baharında Doğu Karadeniz'de cephe, sahilde Trabzon'un batısına kaymışken iç kesimde Bayburt'un doğusunda duruyordu.",
  kesinlik:"kesin",
  olay:["1916-04-18|Trabzon"],
  kaynak:"TDV: trabzon (gövde okundu — 14 Nisan 1916 Karadere hattının yarılması, 16 Nisan Yomra, 18 Nisan giriş, 24 Şubat 1918 çekiliş) · TDV: rize (donanma bombardımanı, 8 Mart 1916 işgal) · TDV: bayburt (1916 işgali, gün vermiyor) · Sayim Türkman, TESAM Akademi Dergisi 8/1 (2021), DergiPark article-file/1304546 (Hopa Ocak 1916 ortası, donanma desteğinin kıyıyla sınırlı kalması, Trabzon'un Rus hedefleri arasında ikmal üssü olarak anılması, Fevzi Paşa'nın Bayburt karargâhı, Bayburt 16 Temmuz 1916) · Arhavi'nin işgal günü BULUNAMADI (TDV slug'ı arhavi ölü)" },

// ── H-0028 · Erzincan 1916: öncesinde neresi düşmüştü ───────────────────────
{ id:"p77a-erzincan-1916-oncesi", tur:"sebep-sonuc",
  kisa:"Erzincan düştüğünde Bayburt, Kelkit, Aşkale ve Gümüşhane nerede idi? Hepsi daha önce düşmüştü.",
  metin:"Erzincan Üçüncü Ordu'nun arka üssüydü. TDV'ye göre şehir 24 Temmuz 1916'da Rus kuvvetlerince işgal edildi ve 26 Şubat 1918'de kurtarıldı. Erzincan'ın düşüşü ani bir baskın değil, çevresindeki bütün savunma hatlarının birer birer çözülmesinin son halkasıdır.\n\n"
    +"■ ŞUBAT-MART 1916: ERZURUM'UN ARKASI\n"
    +"Erzurum 16 Şubat 1916'da düştü. Türkman'a göre Rus birlikleri takip sırasında Aşkale'yi aldı ve takibi orada kesti; Şubat sonuna kadar Erzurum, İspir, Aşkale, Muş ve Bitlis Rusların eline geçmişti. Aşkale'nin kesin günü kaynaklarda bulunamadı. Üçüncü Ordu Aşkale yerine savunmaya daha uygun Cibice hattında tutundu. Mamahatun (Tercan) 15 Mart 1916'da işgal edildi.\n\n"
    +"■ TEMMUZ 1916: YAZ TAARRUZU\n"
    +"Yudeniç'in yaz taarruzu Erzincan'ı üç yönden sardı. Türkman'ın kronolojisine göre Ruslar 16 Temmuz'da Bayburt'u aldı; TDV'ye göre Gümüşhane 19 Temmuz 1916'da işgal edildi; Türkman'a göre 22 Temmuz akşamı Kelkit düştü. Aynı günlerde Erzincan'ın doğusundaki cephe de yarıldı. Kısacası Erzincan'a giden bütün yollar — Bayburt'tan kuzeydoğu, Kelkit'ten kuzeybatı, Mamahatun'dan doğu — işgalden birkaç gün önce Rusların elindeydi.\n\n"
    +"■ RİZE\n"
    +"Rize çok daha önce, 8 Mart 1916'da, sahil harekâtının bir parçası olarak düşmüştü. Erzincan'ın düşüşüyle doğrudan bağı yoktur; aynı Rus ilerleyişinin sahil koludur.\n\n"
    +"■ SIRA\n"
    +"Erzurum (16 Şubat) → Aşkale (Şubat sonu, gün bulunamadı) → Rize (8 Mart) → Mamahatun (15 Mart) → Trabzon (18 Nisan) → Bayburt (16 Temmuz) → Gümüşhane (19 Temmuz) → Kelkit (22 Temmuz) → Erzincan (24 Temmuz 1916). Türkman'ın aktardığı bir Türk raporu durumu tek cümleyle anlatır: geride Erzincan ovasını kapatacak mevzi kalmamıştı ve Erzincan ordunun hayatı idi.",
  kesinlik:"kesin",
  olay:["1916-07-24|Erzincan"],
  kaynak:"TDV: erzincan (gövde okundu — 24 Temmuz 1916 işgal, 26 Şubat 1918 kurtuluş) · TDV: gumushane (Rus işgali 19 Temmuz 1916 - 28 Şubat 1918) · TDV: rize (8 Mart 1916) · TDV: erzurum (16 Şubat 1916) · Sayim Türkman, TESAM Akademi Dergisi 8/1 (2021), DergiPark article-file/1304546 (Aşkale'nin alınışı ve Cibice hattı, Mamahatun 15 Mart 1916, Bayburt 16 Temmuz 1916, Kelkit 22 Temmuz 1916, \"Erzincan ordunun hayatıdır\" raporu) · Aşkale'nin işgal GÜNÜ BULUNAMADI" },

// ── H-0027 · Şerif Hüseyin ──────────────────────────────────────────────────
{ id:"kimdir-serif-huseyin", tur:"kimdir",
  ad:"Şerif Hüseyin — İstanbul'da yetişmiş Mekke emiri, 1916 isyanının önderi",
  metin:"Şerif Hüseyin, Hz. Peygamber soyundan gelen Hâşimî ailesinin Zevî Avn koluna mensuptu. TDV'ye göre İstanbul'da doğdu, eğitimini Mekke'de tamamladı, 1880'de İstanbul'a geldi ve uzun süre vezir rütbesiyle Şûrâ-yı Devlet üyeliği yaptı. Kasım 1908'de Mekke emiri tayin edildi.\n\n"
    +"■ HAREMEYN OSMANLI DÖNEMİNDE NASIL YÖNETİLİYORDU\n"
    +"Hicaz 1517'de savaşsız Osmanlı'ya geçti. Mekke'nin yerel yönetimi, şerif denen Hâşimî emirlerde kaldı; ancak emirler padişahın beratıyla atanır, hutbeyi padişah adına okuturdu. Son dönemde Hicaz bir vilayetti ve emirin yanında İstanbul'un atadığı vali ve kumandan bulunuyordu. Bu ikili düzen, yüzyıllar boyunca Haremeyn'in Osmanlı'ya bağlılığını güvenceye aldı; şerifler kendi aralarında rekabet etse de İstanbul'un onayı olmadan emir olunamazdı. Vergi yönü tersine işliyordu: Hicaz İstanbul'a haraç göndermez, tersine İstanbul'dan ve Mısır'dan Haremeyn'e düzenli para ve erzak giderdi.\n\n"
    +"■ GERİLİM\n"
    +"TDV'ye göre Hüseyin'in emirliği baştan beri merkezle çekişmeli geçti. Hicaz demiryolunun açılmasıyla gelir kaybına uğrayan bedevîleri yatıştırdı ve hacıların güvenliğini sağlayarak itibar kazandı; ama İttihatçı valilerle sürekli çatıştı. Osmanlı yönetimi emiri yetkisi Mekke ile sınırlı bir görevli olarak görmek isterken, Hüseyin bölgenin tamamında söz sahibi olmak istiyordu. Ocak 1914'te Hicaz vali ve kumandanı olan Vehib Paşa, Temmuz 1914'te Osmanlı'yı yıkmayı hedeflediği gerekçesiyle azlini istedi. 1912'de oğlu Abdullah Kahire'de İngiliz temsilcisi Lord Kitchener ile ilk temasını kurmuştu.\n\n"
    +"■ SAVAŞ YILLARI VE İSYAN\n"
    +"Savaş başlayınca Hüseyin resmî olarak sadakatini bildirdi; öte yandan cihad ilanını desteklemedi ve Hicaz demiryolunun Mekke'ye uzatılmasını engellemeye çalıştı. 14 Temmuz 1915 - 30 Ocak 1916 arasında İngiliz yüksek komiseri McMahon ile yazıştı ve Osmanlı'ya karşı ayaklanması karşılığında geniş sınırlı bir Arap krallığının tanınmasını istedi. TDV, emirlikten azledileceği endişesinin bu pazarlıkta rol oynadığını yazar. Cemal Paşa'nın 1915 ve 1916'da Beyrut ve Şam'da bazı Arapları idam ettirmesiyle oluşan gergin ortamda isyanı başlattı. İsyanın ilk günleri TDV'nin iki maddesinde farklı verilir: Fahreddin Paşa maddesine göre 3 Haziran 1916'da Medine çevresindeki demiryolu ve telgraf hatları tahrip edildi, 9 Haziran'da genel saldırıya geçildi; Şerif Hüseyin maddesi isyanı Haziran 1916'ya, meşrulaştırma bildirisini 27 Haziran'a koyar. Cidde 16 Haziran'da, Mekke Temmuz'da, Tâif Eylül'de düştü; Medine, Fahreddin Paşa'nın savunmasıyla Ocak 1919'a kadar Osmanlı'da kaldı.\n\n"
    +"■ NİÇİN\n"
    +"TDV isyanı birkaç sebebin birleşimi olarak okur: İttihatçı yönetimle yıllara yayılan yetki çatışması, azledilme korkusu, kendi krallığını kurma hırsı, İngilizlerin para ve silah vaadi ve Cemal Paşa'nın idamlarıyla gerilen Arap kamuoyu. TDV'ye göre İslâm dünyasının pek çok yerinde Hüseyin ihanetle suçlandı ve bir Müslüman devlete karşı İngilizlerle iş birliği yapmakla lanetlendi.\n\n"
    +"■ SONU\n"
    +"İngiltere aynı toprakları Sykes-Picot Antlaşması'yla (Mayıs 1916) Fransa ile paylaşmış, Aralık 1915'te İbn Suûd'la da ayrı bir anlaşma yapmıştı. TDV'ye göre Hüseyin isyan için 100.000'i aşkın kuvvet toplayabileceğini söylemişti, ama ancak 4-5.000 civarında silahlı güç çıkarabildi ve Arapların çoğu Osmanlı'ya sadık kaldı. Mart 1924'te hilafet kaldırılınca kendini halife ilan etti; bu girişim İslâm dünyasında tepkiyle karşılandı. Ekim 1924'te İbn Suûd Mekke'yi alınca Kıbrıs'a sürgüne gitti; 1930'da hastalanıp Ürdün emiri olan oğlu Abdullah'ın yanına gitti, bir yıl sonra öldü ve Kudüs'te defnedildi.",
  kesinlik:"kesin",
  olay:["1916-06-10|Şerif Hüseyin"],
  kaynak:"TDV: serif-huseyin (gövde okundu — soyu, İstanbul'daki hayatı, 1908 tayini, Vehib Paşa ile çatışma, Kitchener teması, McMahon yazışmaları 14 Temmuz 1915-30 Ocak 1916, cihada ve demiryoluna tavrı, Cemal Paşa'nın idamları, 27 Haziran bildirisi, 4-5.000 kişilik güç, 1924 hilafet iddiası ve sürgün) · TDV: fahreddin-pasa (3 ve 9 Haziran 1916, Cidde 16 Haziran, Medine savunması) · TDV: birinci-dunya-savasi (Sykes-Picot, İbn Suûd anlaşması) · Osmanlı dönemi Mekke emirliği düzeni için ayrıca bk. aynı günün 'statu-hicaz-mekke-serifligi' kartı (TDV: mekke, hicaz)" },

// ── H-0035 · Üçüncü Gazze ve cephenin yarılması ─────────────────────────────
{ id:"p77a-ucuncu-gazze-cephe-yarilmasi", tur:"sebep-sonuc",
  kisa:"Gazze iki kez savunuldu, üçüncüde kaybedildi. Allenby cepheyi nereden ve nasıl yardı?",
  metin:"1917 baharında Gazze iki büyük İngiliz saldırısını geri püskürttü. Kasım 1917'de ise üçüncü saldırı Filistin cephesini yardı ve kırk gün sonra Kudüs düştü. Aradaki fark, İngilizlerin iki yenilgiden çıkardığı derstir.\n\n"
    +"■ İKİ SAVUNMA ZAFERİ\n"
    +"İsmet Üzen'in aktardığı Genelkurmay verilerine göre 26 Mart 1917'deki Birinci Gazze Muharebesi'nde İngilizler 16.000 tüfek ve 74 topa karşı 25.000 tüfek ve 100 topla, 19 Nisan'daki İkinci Gazze Muharebesi'nde 20.000 tüfek ve 101 topa karşı 33.000 tüfek ve 150 topla saldırdı. İkisinde de ağır kayıpla geri çekildiler. TDV'nin Gazze maddesi de savaştaki üç büyük çarpışmanın ilk ikisini Türklerin, üçüncüsünü İngilizlerin kazandığını yazar.\n\n"
    +"■ İNGİLİZLERİN DERSİ: EZİCİ ÜSTÜNLÜK\n"
    +"İki başarısızlıktan sonra Mısır'daki İngiliz komutanı değiştirildi ve Haziran 1917'de General Allenby geldi. Üzen'in aktardığı Erkilet'e göre İngilizler, önceki oranların bile yetmediğini görerek kuvvetlerini daha da artırdı: 31 Ekim 1917'de Türklerin 25.000 tüfeğine karşı en az 57.000 tüfek, 206 topuna karşı 270 topla saldırdılar. Genelkurmay verilerine göre İngilizler piyadede iki kattan, süvaride sekiz kattan fazla üstündü. Emir Faysal'ın Arap kuvvetleri de İngilizlerin yanındaydı.\n\n"
    +"■ OSMANLI'NIN KAYBETTİĞİ ZAMAN\n"
    +"Temmuz 1917'de, Mart 1917'de kaybedilen Bağdat'ı geri almak için Alman Mareşali Falkenhayn'ın komutasında Yıldırım Ordular Grubu kuruldu. Cemal Paşa, sonbaharda Gazze'ye bir İngiliz saldırısı beklendiğini söyleyerek kuvvetin Filistin'e yöneltilmesini istedi; Enver Paşa Bağdat kararından dönülmeyeceğini söyledi. Üzen'e göre Eylül 1917'ye kadar Yıldırım kuvvetlerinin Irak'a mı Filistin'e mi gideceği tartışıldı; bu gereksiz hazırlıklarda geçen zaman Üçüncü Gazze Muharebesi'nin kaybedilmesinin önemli sebeplerinden biri oldu.\n\n"
    +"■ CEPHE NASIL YARILDI\n"
    +"Cephe, kıyıdaki Gazze'den doğuda çöl kenarındaki Birüssebi'ye uzanıyordu. Allenby'nin planı Gazze'ye önden saldırmak değil, cephenin doğu ucunu düşürmekti: Gazze'yi almak için önce Birüssebi'nin alınması gerekiyordu. 31 Ekim 1917'de yaklaşık 17.000 tüfek ve 180 topluk İngiliz kuvveti, Albay İsmet (İnönü) komutasındaki yaklaşık 4.400 tüfek ve 28 topluk savunmaya saldırdı ve akşama doğru kasabaya girdi. Gazze birkaç gündür bombardıman altındaydı; 1 Kasım'da kara saldırısı başladı. Doğu kanadı düşünce Gazze'yi tutmanın anlamı kalmadı: Türk komutanı onay aldıktan sonra 4 Kasım'dan itibaren şehri boşalttı, boşaltma 6/7 Kasım gecesi bitti ve İngilizler 7 Kasım sabahı boş şehre girdi.\n\n"
    +"■ SONRASI\n"
    +"Birüssebi ve Gazze'nin düşmesiyle cephe geriye alınmak zorunda kaldı. 7 Kasım'da başlayan İngiliz takip harekâtı yaklaşık bir ay sürdü; 16 Kasım'da Yafa, 9 Aralık'ta Kudüs düştü. Üzen'e göre 31 Ekim-9 Aralık arasındaki muharebelerde Türk kaybı yaklaşık 25.000, İngiliz kaybı 18.000'di.",
  kesinlik:"kesin",
  olay:["1917-11-07|Gazze"],
  kaynak:"İsmet Üzen, \"Osmanlı Devleti'nin Kudüs'ü Terketmek Zorunda Kalış Süreci (1914-1917)\", Çankırı Karatekin Üniv. Türkiyat Araştırmaları Dergisi 6/1 (2026), DergiPark article-file/5420181 (Birinci ve İkinci Gazze kuvvet oranları, Allenby'nin gelişi, Erkilet'in oranları, Yıldırım'ın Bağdat-Filistin tereddüdü, Birüssebi 31 Ekim, Gazze'nin 4-7 Kasım boşaltılması, Yafa 16 Kasım, kayıplar) · TDV: gazze (üç çarpışmanın ilk ikisini Türklerin kazanması) · TDV: filistin (31 Ekim 1917 Birüssebi) · TDV: birinci-dunya-savasi (Falkenhayn'ın Yıldırım Ordular Grubu, 31 Ekim taarruzu)" },

// ── H-0036 · Kudüs'ün teslimi ───────────────────────────────────────────────
{ id:"p77a-kudus-teslimi-1917", tur:"sebep-sonuc",
  kisa:"Kudüs niçin sokak sokak savunulmadı? Anahtarları kim teslim etti, Allenby şehre nasıl girdi?",
  metin:"Kudüs 400 yıl Osmanlı idaresinde kaldı. 9 Aralık 1917 sabahı bu idare, bir belediye başkanının elindeki bir mektup ve bir anahtarla sona erdi.\n\n"
    +"■ NİÇİN SAVAŞILMADI\n"
    +"Gazze-Birüssebi cephesi Kasım başında yarılmış, Yafa 16 Kasım'da düşmüştü. İsmet Üzen'e göre Türkler Kudüs'ü savunacak güçten düşmüştü ve bunun üzerine şehri savunmadan terk etme kararı verildi. Kararın gerekçesi askerî belgelerde açıkça yazılıdır: 8 Aralık 1917'de Yedinci Ordu Komutanı, 20. Kolordu Komutanı'na \"mukaddes bir şehri düşman tahribatından korumak maksadıyla\" tahliyeye karar verildiğini bildirdi. Yıldırım Ordular Grubu Komutanı da Başkomutanlığa, şehrin tarihî ve dinî yerlerinin tahribine meydan verilmeden 8/9 Aralık gecesi boşaltıldığını rapor etti. Yani Kudüs savaşsız bırakılmadı; bir muharebe kaybedilmişti ve kaybedilmiş bir muharebenin son perdesini, Kubbetüssahre'nin ve Kıyamet Kilisesi'nin arasında oynamamak tercih edildi.\n\n"
    +"■ TESLİM MEKTUBU\n"
    +"Son Kudüs mutasarrıfı İzzet Bey, 9 Aralık sabahı erkenden şehirden ayrılmadan önce belediye başkanına bir teslim mektubu ve şehrin anahtarını bıraktı. Üzen'in yayımladığı metne göre mektupta, her milletçe kutsal sayılan Kudüs'e iki gündür obüs düştüğü, Osmanlı hükümetinin sırf dinî mekânlar zarar görmesin diye şehirden çekildiği ve Kıyamet Kilisesi ile Mescid-i Aksâ gibi yerlerin korunması için memurlar bıraktığı yazılıydı; İngilizlerin de aynı şekilde davranacağı umuluyordu. Belediye başkanı yanında birkaç polisle İngiliz hatlarına doğru yola çıktı; sabah 8.30'da İngiliz öncü birliklerine rastladı ve mektubu ve anahtarı onlara teslim etti.\n\n"
    +"■ 11 ARALIK: TÖREN\n"
    +"Allenby şehre iki gün sonra, 11 Aralık 1917'de, önceden hazırlanmış bir törenle ve yaya olarak girdi. Törende okunan ve İngiliz hükümetince hazırlanıp üç hafta önce Allenby'ye gönderilen beyanname, üç dinin bütün kutsal yerlerinin korunacağını ilan ediyordu. Bu yüzden kaynaklarda iki tarih görülür: 9 Aralık teslim, 11 Aralık resmî giriş.\n\n"
    +"■ \"HAÇLI SEFERLERİ BİTTİ\" SÖZÜ\n"
    +"TDV'nin Filistin maddesi Allenby'nin şehre girip Haçlı seferlerinin ancak şimdi bittiğini söylediğini aktarır. Üzen ise bu tür sözlerin — Allenby'ye ya da Şam'da Fransız generallerine atfedilenler dahil — zayıf temellere sahip olduğunu ve şimdiye kadar kanıtlanamadığını belirtir. Kesin olan, savaş sonrasında İngiltere'de yayımlanan bazı kitapların Allenby'nin ordusunu açıkça \"Haçlılar\" diye andığıdır.\n\n"
    +"■ SONUÇ\n"
    +"TDV'ye göre İngiliz işgali Kudüs'teki, yalnız Haçlı işgaliyle kesintiye uğramış yaklaşık 1200 yıllık Müslüman yönetimini sona erdirdi. Beş hafta önce, 2 Kasım 1917'de, Balfour Deklarasyonu yayımlanmıştı; şehir 1917-1920 arasında İngiliz askerî, sonra manda yönetiminde kaldı.",
  kesinlik:"kesin",
  olay:["1917-12-09|Kudüs"],
  kaynak:"İsmet Üzen, \"Osmanlı Devleti'nin Kudüs'ü Terketmek Zorunda Kalış Süreci (1914-1917)\", Çankırı Karatekin Üniv. Türkiyat Araştırmaları Dergisi 6/1 (2026), DergiPark article-file/5420181 (8 Aralık tahliye emri ve gerekçesi, Yıldırım raporu, İzzet Bey'in 8/9 Aralık mektubunun metni, 9 Aralık 08.30 teslim, 11 Aralık yaya giriş ve beyanname, Haçlı sözlerinin kanıtlanamadığı) · TDV: kudus (Aralık 1917'de biten Osmanlı yönetimi, 1200 yıllık Müslüman yönetiminin sonu, askerî yönetim) · TDV: filistin (Allenby'nin 11 Aralık girişi ve Haçlı sözü — Üzen'le çelişir, kartta ikisi de verildi) · TDV: birinci-dunya-savasi (giriş 9 Aralık)" },

// ── H-0038 · Doğu Anadolu: hangi şehir ne zaman düştü, ne zaman kurtuldu ────
{ id:"p77a-dogu-anadolu-isgal-kurtulus", tur:"sebep-sonuc",
  kisa:"Trabzon'dan Ruslar niçin çekildi? Doğu Anadolu'da hangi şehirler işgal edildi ve nasıl kurtuldu?",
  metin:"24 Şubat 1918'de Ruslar Trabzon'dan çekildi. Bu çekiliş bir askerî yenilginin değil, Rus ordusunun kendi içinden çözülmesinin sonucuydu.\n\n"
    +"■ RUSLAR NİÇİN ÇEKİLDİ\n"
    +"1917'de Rusya'da ihtilal çıktı; Kasım 1917'de Bolşevikler iktidarı aldı. Nurcan Yavuz'a göre ihtilalin en büyük etkisi Kafkas cephesinde görüldü: askerler emir dinlemez oldu, subaylar birlikleriyle birlikte Kars ve Tiflis'e çekilip emir beklemeye başladı. Rusya Aralık 1917'de Almanya ve müttefikleriyle mütarekeye gitti; Kafkas cephesinde de Üçüncü Ordu komutanı Vehib Paşa ile Rus Kafkas Ordusu arasında Erzincan Mütarekesi 18 Aralık 1917'de imzalandı. Mütareke hükümlerine göre Ruslar işgal ettikleri toprakları terk edecekti. TDV'nin Erzurum maddesi de bunu kaydeder: Rusya'da 1917'de çıkan ihtilal Erzurum için kurtuluşun başlangıcı oldu.\n\n"
    +"■ ÇEKİLİŞİN GÖLGESİ\n"
    +"Ruslar çekilirken yerlerini ve silahlarını bölgedeki Ermeni birliklerine bıraktı. TDV'ye göre Erzurum ve çevresinde Ermeni çeteleri Müslüman halka karşı büyük bir katliama giriştiler; şehir yakılıp yıkıldı, ıssız bir köy hâline geldi. Trabzon'da Ruslar çekildikten sonra Pontusçu faaliyetler hız kazandı. Bu yüzden kurtuluş çoğu yerde mütarekeyle değil, Türk ordusunun ileri harekâtıyla geldi.\n\n"
    +"■ ÇİZELGE: İŞGAL → KURTULUŞ (TDV şehir maddelerinden)\n"
    +"· Erzurum: 16 Şubat 1916 → 12 Mart 1918 (Kâzım Karabekir'in birlikleri)\n"
    +"· Muş: 18 Şubat 1916 → Temmuz-Ağustos 1916'da kısa bir kurtuluş, yeniden işgal, 1 Mayıs 1917'de kesin kurtuluş\n"
    +"· Bitlis: 1 Mart 1916 → 8 Ağustos 1916\n"
    +"· Rize: 8 Mart 1916 → iki yıllık işgalden sonra (gün bulunamadı)\n"
    +"· Trabzon: 18 Nisan 1916 → 24 Şubat 1918\n"
    +"· Bayburt: 1916 (Türkman'a göre 16 Temmuz) → gün bulunamadı\n"
    +"· Gümüşhane: 19 Temmuz 1916 → 28 Şubat 1918\n"
    +"· Erzincan: 24 Temmuz 1916 → 26 Şubat 1918\n"
    +"· Van: 1915'ten itibaren Rus işgali (TDV gün vermiyor) → 2 Nisan 1918\n"
    +"· Kars (1878'den beri Rus): 3 Mart 1918 Brest-Litovsk'la Osmanlı'ya bırakıldı, 25 Nisan 1918'de alındı\n\n"
    +"■ OKUMA NOTU\n"
    +"Çizelgede iki dalga görülür. Muş ve Bitlis 1916-1917'de, Rus ordusu henüz dağılmadan, İkinci Ordu'nun taarruzlarıyla geri alındı. Karadeniz, Erzurum ve Erzincan hattı ise ancak 1918 Şubat-Mart'ında, Rus ordusu çözüldükten sonra kurtuldu. Muş için kaynaklar gün gün ayrılır: TDV 26 Temmuz 1916'da kurtarıldığını, Türkman 6 Ağustos'ta Rusların şehri terk ettiğini yazar.",
  kesinlik:"kesin",
  olay:["1918-02-24|Trabzon","1918-02-26|Erzincan","1918-03-12|Erzurum"],
  kaynak:"Nurcan Yavuz, \"Erzincan Mütarekesi'nin Türk Tarihindeki Yeri ve Önemi\", DergiPark article-file/782670 (Rus ordusunun çözülüşü, 18 Aralık 1917 mütarekesi, çekilirken silahların Ermeni birliklerine bırakılması) · TDV: erzurum (ihtilal kurtuluşun başlangıcı, Antranik çetesi, 12 Mart 1918) · TDV: trabzon (18 Nisan 1916-24 Şubat 1918, Pontusçuluk) · TDV: mus (18 Şubat 1916, 26 Temmuz 1916, 1 Mayıs 1917) · TDV: bitlis · TDV: rize · TDV: bayburt · TDV: gumushane · TDV: erzincan · TDV: van (2 Nisan 1918) · TDV: kars (Brest-Litovsk) · TDV: kazim-karabekir (Kars 25 Nisan 1918) · Sayim Türkman, TESAM Akademi Dergisi 8/1 (2021) (Bayburt 16 Temmuz 1916, Muş 6 Ağustos 1916) · Rize ve Bayburt'un kurtuluş GÜNÜ BULUNAMADI" },

// ── H-0040 · Doğu Anadolu'nun kurtuluşunu sağlayan sebep ────────────────────
{ id:"p77a-dogu-anadolu-kurtulus-sebebi", tur:"tartisma",
  kisa:"Doğu Anadolu şehirlerini Rus işgalinden kurtaran ne oldu: Rus ihtilali mi, mütareke mi, Türk ordusu mu?",
  metin:"Şubat-Mart 1918'de Trabzon, Erzincan, Gümüşhane ve Erzurum birkaç hafta içinde kurtuldu; Nisan'da Van ve Kars izledi. Bu hız, 1916'da aynı cephede yaşanan çöküşle karşılaştırılınca şaşırtıcıdır. Açıklama üç halkalı bir zincirdir ve halkalardan hiçbiri tek başına yetmez.\n\n"
    +"■ 1: RUS ORDUSUNUN ÇÖZÜLMESİ\n"
    +"Nurcan Yavuz'a göre 1917 Şubat'ında Türk ordusu çok kritik bir durumdaydı: Üçüncü ve İkinci Ordu'nun insan mevcudu azdı, yiyeceği eksikti, elbise, teçhizat ve cephanesi yetersizdi; büyük bir saldırıya elverişli değildi. Rusya'da ihtilalin çıkması Türkiye'nin Rusya karşısında yeni bir mağlubiyete uğramasını önledi. İhtilalin en büyük etkisi Kafkas cephesinde oldu: disiplin çözüldü, askerler geri çekilmeye başladı. TDV'nin Birinci Dünya Savaşı maddesi de Doğu Anadolu'daki başarının Rus ordularının ihtilal sonunda savaşı bırakmasından sonra geldiğini yazar.\n\n"
    +"■ 2: MÜTAREKE — GEREKLİ AMA YETERSİZ\n"
    +"18 Aralık 1917'de imzalanan Erzincan Mütarekesi Rusların işgal ettikleri toprakları terk etmesini öngörüyordu. Ancak Yavuz'un tespitine göre mütareke fiilen yalnız Rus ordusunun rahatça geri çekilmesine yaradı. Ruslar çekilirken yerlerini ve silahlarını bölgede örgütlenen Ermeni birliklerine bıraktı; boşalan bölgelerde Müslüman halka karşı saldırılar başladı. Yavuz'un sonucu açıktır: işgal edilen vilayetler mütarekedeki barış ortamıyla değil, sıcak savaşla, yani Türk ileri harekâtının başarısıyla kurtarılabildi.\n\n"
    +"■ 3: TÜRK İLERİ HAREKÂTI\n"
    +"31 Aralık 1917'de 1. Kafkas Kolordusu kumandanlığına tayin edilen Kâzım Karabekir, TDV'ye göre ağır kış şartlarına rağmen Erzincan'ı, Erzurum'u ve Hasankale'yi geri aldı. Erzincan 26 Şubat, Erzurum 12 Mart 1918'de kurtuldu. 3 Mart 1918'de imzalanan Brest-Litovsk Antlaşması, 1878'den beri Rusya'da olan Kars, Ardahan ve Batum'u Osmanlı'ya bıraktı; bu kez de bölge Ermeni ve Gürcü kuvvetlerinin elinde kaldığı için harekât sürdü ve Kars 25 Nisan 1918'de alındı.\n\n"
    +"■ HÜKÜM\n"
    +"Başat sebep Rus ordusunun ihtilal sonucunda çözülmesidir: o olmasaydı 1917 Şubat'ındaki yıpranmış Türk ordusunun bu cepheyi geri alması beklenemezdi. Ama çözülme kendi başına toprak kurtarmadı; boşluğu dolduran Ermeni birlikleri ancak Türk ordusunun taarruzuyla bölgeden çıkarıldı. 1916'da cepheyi düşüren kuvvet ve ikmal dengesi, 1918'de karşı tarafın çökmesiyle tersine döndü.",
  kesinlik:"yorum",
  olay:["1918-03-12|Erzurum","1918-03-03|Brest-Litovsk","1918-02-24|Trabzon"],
  kaynak:"Nurcan Yavuz, \"Erzincan Mütarekesi'nin Türk Tarihindeki Yeri ve Önemi\", DergiPark article-file/782670 (1917 Şubat'ında Türk ordusunun durumu, ihtilalin Kafkas cephesine etkisi, 18 Aralık 1917 mütarekesi, mütarekenin yalnız geri çekilmeye yaradığı ve vilayetlerin sıcak savaşla kurtarıldığı sonucu) · TDV: birinci-dunya-savasi (Rus ordusunun savaşı bırakması, 1918 başında Üçüncü Ordu'nun başarısı) · TDV: kazim-karabekir (31 Aralık 1917 tayin, Erzincan-Erzurum-Hasankale, Kars 25 Nisan 1918) · TDV: kars (Brest-Litovsk) · TDV: erzurum · TDV: erzincan · Hüküm bölümü kartın kendi yorumudur" },

// ── H-0045 · Filistin bozgunu ve Şam'dan çekiliş ────────────────────────────
{ id:"p77a-filistin-bozgunu-1918-nablus-sam", tur:"sebep-sonuc",
  kisa:"Eylül 1918'de Filistin cephesi niçin birkaç günde çöktü ve ordu Nablus'tan Halep'e nasıl çekildi?",
  metin:"Kudüs Aralık 1917'de kaybedildikten sonra Filistin cephesi Nablus'un güneyinde, kıyıdan Şeria (Ürdün) vadisine uzanan bir hatta tutundu. 19 Eylül 1918'de başlayan son İngiliz taarruzu bu cepheyi birkaç günde çökertti; Şam 1 Ekim'de, Halep Ekim sonunda kaybedildi ve bir ay sonra Mondros Mütarekesi imzalandı.\n\n"
    +"■ CEPHENİN DÜZENİ\n"
    +"Cemal Kemal'e göre Şubat 1918'de Falkenhayn'ın yerine Yıldırım Ordular Grubu komutanlığına Çanakkale'nin eski komutanı Mareşal Liman von Sanders getirilmişti. Cephe batıdan doğuya Cevad Paşa'nın Sekizinci Ordusu, Mustafa Kemal Paşa'nın Yedinci Ordusu ve Mersinli Cemal Paşa'nın Dördüncü Ordusu tarafından tutuluyordu. Mustafa Kemal Ağustos 1918'de Yedinci Ordu'nun başına dönmüştü; kolordularından birinin komutanı Albay İsmet (İnönü), öteki Ali Fuat Paşa (Cebesoy) idi.\n\n"
    +"■ NABLUS MEYDAN MUHAREBESİ\n"
    +"Allenby, Emir Faysal'ın Arap ordusuyla koordineli olarak 19 Eylül 1918'de Nablus'un güneyinde üç ordunun mevzilerine saldırdı. Cemal Kemal'e göre Cevad Paşa'nın Sekizinci Ordusu ve ona bağlı Albay Refet'in (Bele) kolordusu imha oldu; Yedinci Ordu'nun iki kolordusu ağır zayiat verdi ve İsmet Bey'in kolordusu kuşatıldı. Liman von Sanders Filistin'de yeni bir savunma hattı kuramadı; hedef artık imhadan kurtulup Şeria'nın doğusuna geçmek ve Suriye'yi tutmaktı.\n\n"
    +"■ ŞERİA'NIN DOĞUSUNA, DERA'YA\n"
    +"Mustafa Kemal ordusunu batıya cephe aldırarak Şeria vadisinin doğusuna geçirdi, oradan Aclun dağları üzerinden Dera-Müzeyrib hattına yöneltti. İsmet Bey'in kuşatılan kolordusu da Şeria'yı geçip Aclun'da ordusuna katıldı. 25 Eylül'de İngilizler Amman'ı aldı; güneyde Arap kuvvetlerinin baskısı altında kalan Dördüncü Ordu'ya bağlı 2. Kolordu'nun yaklaşık 5.000 askeri çekilemeyip teslim oldu. 25-26 Eylül gecesi üç ordu komutanı Dera'da buluştu. Sekizinci Ordu'nun büyük kısmı imha ya da esir edildiği için Liman von Sanders, Cevad Paşa'ya ve Refet Bey'e artık ihtiyaç kalmadığını düşünerek İstanbul'a gitmelerini bildirdi. Dera 27-28 Eylül gecesi Arap kuvvetlerince alındı.\n\n"
    +"■ ŞAM\n"
    +"Mustafa Kemal 29 Eylül akşamı Şam'a geldi. Liman von Sanders Şam'ın Mersinli Cemal Paşa komutasında savunulmasını emretti; ama şehirde asayiş çözülmüştü, Faysal'ın adamları halkı isyana teşvik ediyor, ikmali yağmalıyordu. Hicaz hattının en büyük istasyonu olan Kadem yanıyordu ve Halep'e giden demiryolu kesilmişti. Liman von Sanders'e göre güneyden gelen birlikler ancak hiçbir yerde durmadan Şam'dan geçerlerse kurtulabilirdi. Yorgun birlikler 30 Eylül gecesi Şam'dan geçirilip kuzeye çıkarıldı. TDV'ye göre Türk kuvvetleri 1 Ekim 1918'de Şam'ı terk etti ve şehir Ekim başında İngiliz-Arap kuvvetlerince işgal edildi.\n\n"
    +"■ HALEP VE SON\n"
    +"Çekiliş Halep'e kadar sürdü. Cemal Kemal'e göre Mustafa Kemal 26 Ekim 1918'de Halep'in kuzeyinde İngiliz ve Arap taarruzunu durdurmayı başardı; dört gün sonra, 30 Ekim'de Mondros Mütarekesi imzalandı. Daha önce, 29 Eylül'de Bulgaristan mütareke imzalamış ve Osmanlı ile Almanya arasındaki kara bağlantısı kesilmişti; TDV'ye göre Osmanlı hükümetini mütareke istemeye zorlayan da bu oldu.",
  kesinlik:"kesin",
  olay:["1918-10-01|Şam","1918-10-27|Halep"],
  kaynak:"Cemal Kemal, \"Osmanlı'nın Filistin Cephesi'ndeki Son Muharebesi\", Atatürk Yolu Dergisi S.45 (2010), s.37-69, DergiPark article-file/20524 (Liman von Sanders'in atanması, üç ordunun düzeni, 19 Eylül 1918 taarruzu, Sekizinci Ordu'nun imhası, Şeria-Aclun-Dera çekilişi, Amman 25 Eylül ve 5.000 esir, Dera 27-28 Eylül, Mustafa Kemal'in 29 Eylül raporu, Kadem'in yanması, 30 Eylül gecesi Şam'dan geçiş, 26 Ekim Halep kuzeyi) · TDV: birinci-dunya-savasi (1 Ekim 1918 Şam'ın terki, Bulgaristan'ın çekilmesi ve Mondros) · TDV: suriye (Şam'ın Ekim 1918 başında İngiliz-Arap işgali, Faysal'ın girişi) · TDV: mondros-mutarekesi (Bulgaristan 29 Eylül, kara bağlantısının kesilmesi)" }

];
