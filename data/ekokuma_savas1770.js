// EKO-VEZIR · DALGA-0065 madde 13/15 (H-0013, H-0015) · 1770 yazının iki felaketi.
//
// H-0013 (Çeşme Baskını) — DUPLİKASYON KONTROLÜ YAPILDI, KART YAZILMADI:
// data/ekokuma_savas.js (KITA 20'nin dosyası, id:"savas-cesme-1770") Çeşme
// Baskını'nı zaten tam şemayla (oncesi/akis/sonuc/tartisma) kapsıyor — sebep,
// nasıl yakıldığı ve sorumluluk sorusu (Hasan Bey'in karşı çıkmasına rağmen
// Hüsâmeddin Paşa ve Câfer Bey'in donanmayı dar limana sokması, yani teknik
// üstünlükten çok bir komuta kararı) o kartta zaten sourced şekilde var.
// Mükerrer yazılmadı (DALGA-0054'ten beri geçerli kural).
//
// H-0015 (Kartal/Kagul bozgunu) — hiçbir ekokuma_*.js dosyasında yoktu,
// bu yüzden burada tek kart olarak yazıldı.
//
// tur:"savas-hikayesi" — js/app.js'te zaten tanımlı ve ayrı render dalı var
// (KITA 20'nin şemasıyla birebir aynı alan seti kullanıldı).
window.EKOKUMA_SAVAS1770 = [
  {
    id: "savas-kartal-kagul-1770",
    tur: "savas-hikayesi",
    baslik: "Kartal (Kagul) Bozgunu (1 Ağustos 1770)",
    kisa: "Çeşme'de donanma yanmasından üç hafta sonra, sayıca kat kat üstün ana Osmanlı ordusu Tuna boyunda bir gece baskınıyla dağıldı; asıl can kaybı meydanda değil, köprüsüz nehir geçişinde yaşandı.",
    tarih_metin: "1 Ağustos 1770, gece saat 01:00 sularında başlayan Rus saldırısı — muharebe aynı gün içinde sonuçlandı",
    yer: "Kartal (Kagul) ovası, Tuna'nın kuzeyi, bugünkü Moldova'da Prut-Tuna arası",
    taraflar: [
      {
        ad: "Osmanlı ordusu",
        komutan: "Serdâr-ı ekrem İvazzâde Halil Paşa · sağ kol Abaza Mehmed Paşa · merkez Rumeli valisi Abdi Paşa · sol kol Karslızâde Hasan Paşa",
        kuvvet: "kaynaklar arasında büyük fark var: Rus kaynaklarına göre yaklaşık 50.000 piyade + 100.000 süvari, ayrıca 40-50.000 kişilik ayrı bir Kırım Tatar kuvveti; çağdaş bir Osmanlı kaynağının verdiği 300.000 rakamı akademik literatürde abartılı kabul ediliyor",
      },
      {
        ad: "Rus ordusu",
        komutan: "General (savaş sonrası Mareşal) Pyotr Rumyantsev",
        kuvvet: "23.000-27.000 arası (kaynaklar kendi içinde 23-25-27 bin olarak ayrışıyor)",
      },
    ],
    oncesi: "Çeşme'deki donanma felaketinden yalnız üç hafta sonra, savaşın kara cephesindeki asıl Osmanlı ordusu Tuna boyunda toplanmıştı. Ordu sayıca Rus kuvvetlerinin kat kat üzerindeydi, ama disiplin ve komuta birliği aynı oranda güçlü değildi; dönemin Avrupa ordularında yaygınlaşan hızlı manevra ve gece harekâtı usullerine uyum sağlanamamıştı.",
    akis: "Rumyantsev karanlıkta sütunlar hâlinde Osmanlı mevzilerine yaklaştı. Osmanlı tarafı ilerleyen bu kolona topçuyla değil süvari hücumuyla karşılık verdi. Saflar arasında ürken hayvanların (rivayete göre bir deve ya da at sürüsünün) yarattığı panik askere sıçradı; düzen bir kez bozulunca ordu bütünüyle dağıldı ve bir daha toparlanamadı.",
    sonuc: "Meydandaki kayıp görece sınırlıydı (yaklaşık 3.000), ama asıl felaket ordunun Tuna'yı köprüsüz geçmeye çalışırken yaşandı: boğulanların sayısı onlarca bini buldu. Serdâr İvazzâde Halil Paşa görevden alındı. Aynı yaz içinde hem donanmanın hem bu ordunun çökmesi, İbrail, Kili, Akkirman, İsmail ve Bender'in birbiri ardına elden çıkmasına ve Kırım'ın işgaline yol açtı — 1774'teki Küçük Kaynarca Antlaşması'na giden yolu açan zincirin bir halkasıydı.",
    tartisma: "① Ad: Osmanlı/Türk kaynaklarında sahadaki Kartal Gölü'nden ötürü 'Kartal', Rus/Batı kaynaklarında ise batıdaki Kahul Gölü'nden ötürü 'Kagul' (Cahul) adı kullanılır — aynı muharebenin iki adıdır. ② TDV'nin 'İvazzâde Halil Paşa' maddesi olayı 'Kartal (Larga)' diye anıp tarihini 2 Ağustos verirken, aynı ansiklopedinin 'İbrail' maddesi 1 Ağustos diyor — TDV kendi içinde bir günlük farkla tutarsız; akademik literatür (aşağıdaki kaynak) Larga Muharebesi'ni (27 Temmuz 1770, Falçı yakını) Kartal/Kagul'dan (1 Ağustos 1770) AYRI bir çarpışma olarak ele alıyor, ikisini birleştirmiyor. ③ Kuvvet sayıları yukarıdaki gibi kaynaklar arasında geniş bir aralıkta değişiyor; tek bir kesin rakam yok.",
    kesinlik: "tartismali",
    olay: ["1770-08-01"],
    kaynak: "TDV: ivazzade-halil-pasa · TDV: ibrail (tarih çapraz kontrolü) — TDV'nin müstakil bir 'Kartal Muharebesi'/'Kagul Muharebesi' maddesi yok (dört aday slug denendi, dördü de 302/ölü); Bora Efe, \"Osmanlı Tarihinde Bir Felaket: Kartal Sahrası (Kagul) Muharebesi\", Journal of International Eastern European Studies 6/1 (Yaz 2024), s. 117-156 — hakemli, Osmanlı arşiv belgeleri ve vakanüvis kayıtlarına dayanıyor (dergipark.org.tr).",
    gorsel: null,
    gorsel_kaynak: "aranmadı",
  },
];
