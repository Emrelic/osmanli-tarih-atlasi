// ============================================================================
// EK OKUMA — OSMANLI KURUMLARI 2 (DALGA-0066, EKO-KURUM2 oturumu)
// ============================================================================
// Yazan: EKO-KURUM2 (Sonnet) · 17 Eylül 2026 · paket 0066, maddeler H-0014 H-0016
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_KURUM2 tanımlar.
//    Yükleyici satırı (`_EKOKUMA_DOSYA_ADLARI`) 1.MURAT ekleyecek — bu oturum
//    js/ dosyasına dokunmadı.
//
// ŞEMA: data/ekokuma_kurum.js ile BİREBİR — { id, tur, kisa, metin, kesinlik,
// olay, kaynak }. `olay:` alanındaki tarihler TDV metninden — atlasın kendi
// verisinden DEVŞİRİLMEDİ (§4).
//
// KAYNAK YÖNTEMİ — CLAUDE.md §4 ("atlas referans değildir") ve kırmızı çizgi.
// Her slug önce WebSearch ile doğrulandı (TDV canlı sonuç döndü mü), sonra
// WebFetch ile gövdesi okunup ÖZETLENDİ — metin KOPYALANMADI (alıntılar en
// çok 15 kelime, tırnak içinde).
//   Kullanılan sluglar: muhendishane-i-bahri-i-humayun · vergi · cizye
//
// 🔴 H-0014'te KAYNAĞIN KENDİSİ İKİ TARİH VERİYOR (CLAUDE.md §4⑥ "kaynak
// bazen uyarı vermez, kendiyle çelişir" — bildirilmesi taraf seçmekten
// değerli): Fransız arşiv belgelerine göre 29 Nisan 1775, Osmanlı hicrî
// kaydına göre Cemâziyelevvel 1189 (yaklaşık Temmuz 1775) — iki ay farklı.
// İkisi de metinde AÇIKÇA yazıldı, tercih yapılmadı.
//
// H-0016 için `olay:` alanı 1775-06-01 tarihiyle data/olaylar_ek14.js'teki
// "Esham sisteminin ihdası" maddesine bağlanıyor (şartnamenin istediği gibi);
// cizyenin 1856'da kaldırılışı TDV metninde GÜN vermiyor, §4 gereği
// YYYY-01-01 yazıldı.
// ============================================================================
window.EKOKUMA_KURUM2 = [

// ── H-0014 · Mühendishâne-i Bahrî-i Hümâyun (1775) ──────────────────────────
{ id:"teknik-muhendishane-i-bahri-i-humayun", tur:"teknik-bilimsel",
  kisa:"Çeşme'de yanan bir donanmanın külünden bir okul doğdu — ilk müdürü Osmanlı değil, Macar asıllı bir Fransız baronuydu.",
  metin:"■ NİÇİN KURULDU\n"
    +"1768-1774 Osmanlı-Rus savaşındaki teknik yetersizlikler ve özellikle 1770 Çeşme baskınının donanmayı neredeyse yok etmesi, eğitimli denizci subay ihtiyacını açıkça ortaya koydu. Mühendishâne-i Bahrî-i Hümâyun bu ihtiyaca cevap olarak I. Abdülhamid döneminde, Sadrazam Derviş Mehmed Paşa'nın üçüncü sadâreti sırasında kuruldu.\n\n"
    +"■ İKİ AYRI TARİH — KAYNAK KENDİ İÇİNDE ÇELİŞİYOR\n"
    +"TDV maddesi kuruluşu iki farklı tarihle veriyor ve ikisini de uzlaştırmıyor: Fransız arşiv belgelerine göre açılış 29 Nisan 1775; Osmanlı kaydına göre ise Cemâziyelevvel 1189 (aşağı yukarı Temmuz 1775) — yaklaşık iki aylık bir fark var. Bu kart ikisini de aktarıyor, taraf tutmuyor.\n\n"
    +"■ İLK KADRO — VE BİR BARON\n"
    +"İlk müdür, daha önce Osmanlı hizmetinde topçu ıslahatıyla tanınan Macar asıllı Fransız Baron de Tott'tu. İlk öğrenciler eski kaptanlardan ve yüksek rütbeli memurların çocuklarından seçildi; ilk matematik hocası Gilles Jean-Marie Brazzer de Kermovan, ilk başhoca ise Cezayirli Seyyid Hasan Bey'di (Rus savaşı yüzünden bir yıl içinde kaptan olarak ayrıldı, 1787'de idam edildi).\n\n"
    +"■ MÜFREDAT: MATEMATİKTEN DENİZ MÜHENDİSLİĞİNE\n"
    +"Eğitim başlangıçta ağırlıklı olarak matematikti; Cezayirli Gazi Hasan Paşa'nın isteğiyle deniz mühendisliği, geometri ve coğrafyaya kaydırıldı. 1190'da (1776) bir nizamnâme hazırlanıp on talebe kaydedildi.\n\n"
    +"■ FRANSIZ MÜHENDİSLER\n"
    +"1198'de (1784) Halil Hamîd Paşa'nın sadâretinde okul yeniden düzenlendi, kadroya Lafitte-Clavé ve Monnier gibi Fransız mühendisler katıldı. Jacques Balthazar Brun 1793-1798 arası gemi inşası bölümünü kurup yönetti; Benoît gemi inşası derslerini, Parale uygulamalı dersleri üstlendi. Osmanlı hocaları arasında Seyyid Osman, Gelenbevî İsmâil, Palabıyık Mehmed, Ali Bahar, Mehmed Sâlih, Kasabbaşızâde İbrâhim ve Mehmed Rûhuddin Efendi sayılıyor.\n\n"
    +"■ 1195 → ADI DEĞİŞTİ, 1210 → İKİYE BÖLÜNDÜ\n"
    +"1195'te (1781) okul Mühendishâne-i Tersâne-i Âmire adını aldı. 1210'da (1795) kara mühendisliği eğitimi ayrılıp Mühendishâne-i Berrî-i Hümâyun adıyla ayrı bir kurum kuruldu — deniz ve kara mühendisliği o tarihten sonra iki ayrı okuldu. 1212'de (1797) dersler dört gruba organize edildi: harita-coğrafya, seyr-i sefâin, gemi inşası, istihkâm.\n\n"
    +"■ GERİLEME VE TAŞINMA\n"
    +"1807'de Nizâm-ı Cedîd'in sona ermesiyle eğitim bir süre ihmal edildi. Okul 1830'da Heybeliada'ya taşındı, 1846'da bu taşınma kalıcı hâle geldi.\n\n"
    +"■ TARİHSEL ÖNEMİ\n"
    +"TDV, kurumu Türk eğitim tarihinde 'modern anlamda ilk defa kurulan mektep' olarak nitelendiriyor; bugünkü Deniz Harp Okulu'nun temelini oluşturur.",
  kesinlik:"kesin",
  olay:["1775-04-29|Mühendishâne-i Bahrî-i Hümâyun (Fransız arşiv tarihi)","1795-01-01|Mühendishâne-i Berrî-i Hümâyun ayrıldı"],
  kaynak:"TDV: muhendishane-i-bahri-i-humayun" },

// ── H-0016 · Osmanlı vergi sistemi ──────────────────────────────────────────
{ id:"teknik-osmanli-vergi-sistemi", tur:"teknik-bilimsel",
  kisa:"Bir reayanın ne kadar vergi ödeyeceği önce dinine, sonra oturduğu yere bakardı — imparatorluk boyunca TEK bir vergi cetveli hiç olmadı.",
  metin:"■ İKİ KATEGORİ: ŞER'Î VE ÖRFÎ\n"
    +"Osmanlı vergileri (tekâlîf) iki ana kümede toplanırdı: tekâlîf-i şer'iyye (İslâmî temelli — zekât, öşür, haraç, cizye) ve tekâlîf-i örfiyye (padişahın kanununa dayalı — avârız, ağnam resimleri, çeşitli rüsûm/resimler). TDV'nin tabiriyle tekâlîf, 'nakdî, aynî ve bedenî yükümlülükleri' kapsardı — yani vergi her zaman para olarak alınmazdı.\n\n"
    +"■ KİM TOPLARDI\n"
    +"Vergi tahsilinde muhassıl, mütesellim, cizyedar, bâcbân gibi görevliler çalışırdı. Tanzimat öncesinde toplama işi çoğunlukla iltizam (vergi çiftçiliği) usulüyle özel kişilere ihale edilirdi — devlet doğrudan toplamak yerine tahsil hakkını satardı (bk. ayrı kart: iltizam sistemi). TDV, bu usulün dönemler boyunca 'zulüm ve suistimal' endişesi yarattığını kaydediyor.\n\n"
    +"■ ÜLKE GENELİNE EŞİT MİYDİ — HAYIR, İKİ EKSENDE FARKLIYDI\n"
    +"Vergi yükü tek bir cetvele bağlı değildi; hem BÖLGEDEN BÖLGEYE hem DİNE göre değişirdi. Gayrimüslimler cizye (kişi başına baş vergisi) öderken Müslümanlar öşür ve haraç öderdi. Tanzimat'ın ilk aşamalarında Hicaz ve İstanbul gibi bazı bölgeler vergi ayrıcalığı taşıyordu — yani coğrafya da belirleyiciydi, yalnız din değil.\n\n"
    +"■ CİZYE — GELİRE GÖRE ÜÇ KADEME\n"
    +"Zimmî (gayrimüslim tebaa) erkeklerden alınırdı; çocuk, kadın, kör, malûl, işsiz ve fakir muaftı. Din adamları başlangıçta muaftı, 1691'den sonra malûller dışında hepsi mükellef sayıldı. Üç gelir kademesi vardı — a'lâ (zengin), evsat (orta hâlli), ednâ (fakir) — ve miktar şer'î dirhem/altınla sabitti: sırasıyla 48/24/12 dirhem ya da 4/2/1 dinar. Esedî kuruşa çevrilince zamanla arttı: 1691'de 9/4,5/2,25 kuruş, 1834'te 60/30/15 kuruşa çıktı. Tahsilatı haraççı/cizyedar yapar, 'defter-i cizye-i gebrân' denen kayıt defterleri her üç yılda bir ('nev-yâfte yılı') teftiş edilirdi.\n\n"
    +"■ CİZYENİN SONU\n"
    +"Cizye 1856 Islahat Fermanı ile kaldırıldı — eşitlik ilkesi gayrimüslimlerin de askerliğe tâbi olmasını gerektirince eski ayrım anlamını yitirdi. Yerine, askerlikten muafiyet karşılığı 'bedel-i askerî' adlı bir ödeme getirildi; bu uygulama 1907'ye kadar sürdü.\n\n"
    +"■ TAHSİL TAKVİMİ\n"
    +"Tanzimat öncesinde tahsilat 'rûz-i hızır' ve 'rûz-i kāsım' diye iki taksite bölünürdü (yaklaşık bahar ve güz). Tanzimat sonrasında ise vergi borcu on iki taksite yayılırken, rüsûmat 'aynen veya bedelen hemen' tahsil ediliyordu — yani nakit vergiyle mal/hizmet vergisi farklı takvimlerde işliyordu.\n\n"
    +"■ ESHAM İLE BAĞI (1775)\n"
    +"Esham, bir vergi TÜRÜ değildi — mukātaa (vergi kaynağı) gelirinin hisselere bölünüp satıldığı bir BORÇLANMA yöntemiydi; Küçük Kaynarca'nın 7,5 milyon kuruşluk tazminat yükü karşısında 1775'te ihdas edildi (bk. data/olaylar_ek14.js, 1775-06-01). Yani devlet doğrudan vergiyi artırmak yerine, gelecekteki vergi/mukātaa gelirini bugünden nakde çevirdi — bu, klasik tekâlîf sisteminin dışında, ona EK bir mali araçtı.",
  kesinlik:"kesin",
  olay:["1775-06-01|Esham sisteminin ihdası","1856-01-01|Islahat Fermanı (cizyenin kaldırılışı)"],
  kaynak:"TDV: vergi · cizye" }

];
