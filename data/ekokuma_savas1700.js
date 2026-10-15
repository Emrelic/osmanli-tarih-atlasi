// ============================================================================
// EK OKUMA — SAVAŞIN HİKÂYESİ, 1700-1923 dilimi (KUTU-G2-1014)
// ============================================================================
// Paket 0045 H-0007 "bütün savaşların hikâyeleri ek okuma olarak". Ölçüm (14 Ekim
// 2026): k:'savas'/'kusatma' olan kronoloji maddelerinden 1700-1923 arasında
// kartsız 62 madde vardı; bu dosya onları sefer sefer gruplayan kartlarla bağlar.
// AD ALANI (CLAUDE.md): data/ekokuma_savas1700.js → window.EKOKUMA_SAVAS1700
// YÜKLEYİCİ: js/app.js `_EKOKUMA_DOSYA_ADLARI` listesine "ekokuma_savas1700".
// ŞEMA: ekokuma_savas.js / ekokuma_savas3.js ile aynı (savas-hikayesi):
//   id · tur · baslik · kisa · tarih_metin · yer · taraflar[{ad,komutan,kuvvet}]
//   oncesi · akis · sonuc · tartisma · kesinlik · olay · kaynak · gorsel · gorsel_kaynak
//   `ic_not` okura çizilmez (okunan URL'ler, HTTP durumu, ölü slug'lar).
// KAYNAK: TDV birincil, gövdeler okundu; TDV kapsamadığında hakemli makale /
// akademik ansiklopedi künyesiyle `kaynak` alanında. Vikipedi dayanak değildir.
// Kaynakta olmayan rakam yazılmadı ("kaynakta sayı verilmiyor"). Atlasın kendi
// kronoloji metni dayanak değildir; `olay` bağı yalnız maddeyi bulmak içindir.
// ============================================================================
window.EKOKUMA_SAVAS1700 = [
{
 "id": "savas-korfu-1716",
 "tur": "savas-hikayesi",
 "baslik": "Korfu Kuşatması (yaz 1716)",
 "kisa": "Mora'yı bir yazda geri alan Osmanlı, Venedik'in Adriyatik kapısındaki son büyük kalesine yüklendi; ama asıl kader yüzlerce kilometre kuzeyde, Tuna boyunda belirlendi.",
 "tarih_metin": "1128 (1716) yazı, Mora seferinin sonunda. TDV kuşatmanın başladığı ve kaldırıldığı günü vermiyor.",
 "yer": "Korfu adası ve kalesi, İyon denizi, Adriyatik'in girişi",
 "taraflar": [
  {
   "ad": "Osmanlı Devleti",
   "komutan": "Mora seraskeri Kara Mustafa Paşa (kara) · Kaptanıderyâ Canım Hoca Mehmed Paşa (deniz)",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Venedik Cumhuriyeti",
   "komutan": "kaynakta ad verilmiyor",
   "kuvvet": "kaynakta sayı verilmiyor; TDV, Evliya Çelebi'ye dayanarak kalede 700 balyemez topu bulunduğunu aktarır"
  }
 ],
 "oncesi": "1715'te Osmanlı ordusu Mora yarımadasını Venedik'ten bir sefer mevsiminde geri almış, Girit'te elde kalan son Venedik kalelerini de düşürmüştü. Bu başarının havasıyla bir sonraki hedef Korfu oldu: ada, Adriyatik'in ağzında bütün denizi denetleyen bir kilit gibiydi ve Venedik için hayati önemdeydi. Ancak Avusturya da Venedik'in yanında savaşa girince Osmanlı kuvvetleri ikiye bölündü: Sadrazam Damad Ali Paşa'nın ordusu Avusturya'ya, Kara Mustafa Paşa ile Canım Hoca Mehmed Paşa'nın kara ve deniz kuvvetleri ise Korfu'ya yöneldi.",
 "akis": "Kaptanıderyâ adaya asker çıkardıktan sonra kaleyi hızla kuşattı; Mora seraskeri de karadan harekâtı yönetti. Fakat kale çok iyi tahkim edilmişti ve kuşatma gücü onu düşürmeye yetmedi. Venedik donanması adaya takviye getirdi. Aynı sırada kuzeyden kötü haber geldi: Damad Ali Paşa Petervaradin'de (Varadin) şehit düşmüş, başsız kalan ordu Belgrad'a çekilmişti.",
 "sonuc": "Korfu kuşatması sonuç alınamadan kaldırıldı. TDV'nin III. Ahmed maddesi bunu doğrudan Petervaradin felaketine bağlar: ordunun dağılması padişahı kuşatmayı kaldırmaya mecbur etti. Mora'nın geri alınmasıyla yükselen hava böylece söndü; savaşın ağırlığı Macaristan cephesine kaydı ve 1718 Pasarofça Antlaşması'nda Venedik, Korfu'nun karşısındaki Butrinto ile Preveze ve Voniçe gibi kıyı noktalarını aldı.",
 "tartisma": "TDV'nin Korfu maddesi kuşatmayı yalnız yılla (1128/1716) verir; başlangıç ve kaldırılış günü TDV'de yok. Atlasın bağlandığı 20 Ağustos 1716 günü bu oturumda akademik bir kaynakta doğrulanamadı.",
 "kesinlik": "kesin",
 "olay": [
  "1716-08-20|Korfu"
 ],
 "kaynak": "TDV: korfu (İdris Bostan) · TDV: ahmed-iii · TDV: pasarofca-antlasmasi",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "curl https://islamansiklopedisi.org.tr/korfu 200 (1716 paragrafı okundu: 'ikinci Korfu kuşatması 1128'de (1716) Mora seferinin sonlarında'; gün yok, sayı yok) · /ahmed-iii 200 (Petervaradin → kuşatmanın kaldırılması) · /pasarofca-antlasmasi 200 (Butrinto, Preveze, Voniçe; Venedik'e Çuka iadesi). Ölü/boş: /canim-hoca-mehmed-pasa arama sayfasına düşüyor (TDV'de müstakil madde yok, arama 'canım hoca mehmed' sonuçlarında madde başlığı yok). Britannica 403, Wikipedia kullanılmadı. Madde t=1716-08-20'nin gün dayanağı bulunamadı (TARIH-CELISKI değil, DAYANAK-YOK)."
},

{
 "id": "savas-hazar-gilan-1722",
 "tur": "savas-hikayesi",
 "baslik": "I. Petro'nun Hazar Seferi ve Gîlân İşgali (1722-1725)",
 "kisa": "Safevî tahtı Afgan kuşatmasında çökerken Rusya kuzeyden, Osmanlı batıdan İran'a girdi; Hazar kıyısı birkaç yıllığına Rus garnizonlarıyla doldu.",
 "tarih_metin": "Derbend 1134/1722 · Reşt'e yerleşme Safer 1135 / Kasım 1722 (Iranica) · Gîlân'ın tamamı Şâban 1135 / Mayıs 1723 · Bakü Şevval 1135 / Temmuz 1723 · Lâhîcân 1725",
 "yer": "Hazar denizinin batı ve güney kıyısı: Derbend, Bakü, Gîlân (Reşt, Enzeli, Lâhîcân)",
 "taraflar": [
  {
   "ad": "Rusya Çarlığı",
   "komutan": "Çar I. Petro; Hazar kıyısındaki birlikler",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Safevî Devleti ve yerel valiler",
   "komutan": "II. Tahmasb; Reşt valisi",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "1722'de Afganlar İsfahan'ı kuşatıp Safevî Devleti'ni çökertince İran'ın kenar eyaletleri sahipsiz kaldı. Ticaret yolunu güvenceye almak ve Osmanlı'nın Hazar'a inmesini önlemek isteyen I. Petro 1722'de Derbend'i aldı. Afganlara karşı yardım arayan Reşt valisi Rusları Gîlân'a çağırdı.",
 "akis": "Iranica'ya göre Rus kuvvetleri Kasım 1722'de Reşt'e yerleşti ve Mayıs 1723'te eyaletin fethini tamamladı. Kara bağlantısını korumak için Temmuz 1723'te Bakü de alındı. Sıkışan II. Tahmasb'ın elçisi Eylül 1723'te Petersburg'da Derbend, Bakü, Gîlân, Mâzenderân ve Esterâbâd'ı Rusya'ya bırakan bir antlaşma imzaladı; şah bu metni tanımadı. Ruslar Gîlân'da Lâhîcân'ın ötesine geçemedi, şehir 1725'te alındı; Mâzenderân ve Esterâbâd fiilen hiç işgal edilmedi. Batıdan ilerleyen Osmanlı ile Rusya arasındaki gerginlik, Fransız elçisinin aracılığıyla 24 Haziran 1724'te İstanbul'da imzalanan İran Mukāsemenâmesi ile bölüşmeye bağlandı.",
 "sonuc": "Petro'nun 1725'teki ölümünden sonra Rusya bu kıyıları tutmakta zorlandı; Iranica'ya göre fethettiği eyaletlerden hiçbir kazanç sağlayamamıştı. Nâdir'in İran'ı yeniden toparlaması üzerine 1732 Reşt Antlaşması'yla Gîlân, Mâzenderân ve Esterâbâd, Mart 1735 Gence Antlaşması'yla da Bakü ve Derbend İran'a bırakıldı.",
 "tartisma": "① Gîlân'a giriş: Iranica Reşt'e yerleşmeyi Safer 1135/Kasım 1722'ye koyar; TDV Gîlân maddesi Petro'nun Gîlân'a saldırısını 1136 (1723-24) diye verir; Podrezov'un aktardığı İran literatürü Afganların Reşt'i 1723 başında kuşattığını ve yardım çağrısının bundan sonra geldiğini yazar, Rus yazarların farklı tarihler verdiğini de not eder. ② Bakü: Iranica Temmuz 1723 der; TDV Bakü maddesi yalnız 1723'ü verir. ③ Rusların Gîlân'dan çekilişi: TDV Gîlân maddesi 1734 der ve antlaşmayı 'Petro'nun ölümünden (1732) sonra' diye anar (Petro 1725'te öldü; 1732 Reşt Antlaşması'nın yılıdır); Iranica çekilişi 1732 Reşt Antlaşması'na bağlar. Bakü'nün iadesini TDV 1734'e, Iranica Mart 1735 Gence Antlaşması'na koyar. ④ Iranica Rus-Osmanlı bölüşme antlaşmasını '23 Haziran 1726' diye verir; TDV III. Ahmed maddesi 24 Haziran 1724 der.",
 "kesinlik": "tartismali",
 "olay": [
  "1723-01-01|Enzeli",
  "1723-08-06|Bakü",
  "1725-01-01|Lâhîcân"
 ],
 "kaynak": "TDV: gilan · TDV: baku · TDV: lahican · TDV: ahmed-iii · Xavier de Planhol, \"BOUNDARIES ii. With Russia\", Encyclopaedia Iranica (2000), https://www.iranicaonline.org/articles/boundaries-ii/ · M. A. Podrezov, \"Взгляды в современном Иране на Персидский поход Петра I\", Вестник МГИМО-Университета 15/6 (2022), s. 179-193, DOI 10.24833/2071-8160-2022-6-87-179-193",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV curl 200: gilan, baku, lahican, ahmed-iii (İran Mukāsemenâmesi 24 Haziran 1724). Iranica boundaries-ii WebFetch 403, curl (tarayıcı UA) 200 okundu. Iranica 'russia-i-...' slug 404. Podrezov PDF https://www.vestnik.mgimo.ru/jour/article/download/3279/2486 200 okundu. Bakü için atlas maddesinin 6 Ağustos 1723 (Gregoryen; eski takvim 26 Temmuz) günü bu oturumda yalnız akademik olmayan özetlerde görüldü (BRE bigenc.ru 401). SALYAN (1724-09-11) maddesine BAĞLANMADI: Kurukin 2010 ve Özdamirova 2024 bu oturumda okunamadı, olayı anlatacak doğrulanmış kaynak yok. Lâhîcân TDV: 'Ruslar 1724-1734 yılları arasında Gîlân'ı işgalleri sırasında Lâhîcân'da iki kale inşa ettiler'."
},

{
 "id": "savas-azak-1736",
 "tur": "savas-hikayesi",
 "baslik": "1736-1739 Savaşının Açılışı: Azak'tan Avusturya Cephesine (Mart 1736 - Temmuz 1737)",
 "kisa": "Rusya savaş ilan etmeden Azak'a yürüdü; İstanbul barış umuduna bir yıl daha tutundu, ama Avusturya'nın aniden saldırması savaşı iki cepheli yaptı.",
 "tarih_metin": "Azak saldırısı Zilkade 1148 / Mart 1736 (TDV) · savaş kararı 20 Zilhicce 1148 / 2 Mayıs 1736 · Avusturya'nın saldırısı Safer 1150 / Haziran 1737",
 "yer": "Azak, Kırım (Orkapı, Gözleve, Kılburun), Özü; Sırbistan-Bosna-Eflak cephesi",
 "taraflar": [
  {
   "ad": "Osmanlı Devleti ve Kırım Hanlığı",
   "komutan": "I. Mahmud · Sadrazam Seyyid Mehmed Paşa (serasker) · sonra Sadrazam Muhsinzâde Abdullah Paşa",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Rusya",
   "komutan": "Çariçe Anna",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Avusturya (1737'den)",
   "komutan": "İmparator VI. Karl",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Lehistan veraset savaşlarını müttefiki Avusturya ile birlikte kendi lehine kapatan Rusya, Ukrayna ve Podolya sınırında yeni kaleler kuruyor, Azak'ın çevresine asker yığıyordu. I. Mahmud'un, İran cephesine gidecek Kırım kuvvetlerinin Kafkasya'daki Kabartay'dan geçmesi emrini Rusya kendi toprağına tecavüz saydı; emir geri alınmasına rağmen bunu bahane etti.",
 "akis": "Ruslar Zilkade 1148'de (Mart 1736) savaş ilan etmeden Azak Kalesi'ne saldırdı, ardından Kırım'ın kapısı Orkapı'ya yürüdü. İstanbul'da 2 Mayıs 1736'da toplanan divan, Fransız elçisi Villeneuve'ün de teşvikiyle Rusya'ya karşı savaş kararı aldı; Sadrazam Seyyid Mehmed Paşa serasker oldu, donanma Kırım kıyılarına gönderildi. Yaz boyunca Azak, Orkapı, Gözleve ve Kılburun düştü, Bahçesaray ve Akmescid tahrip edildi. Buna rağmen hükümet barış umudunu korudu ve Avusturya'nın savaşa hazırlandığına dair sınır haberlerini önemsemedi. Nemirov'da barış görüşmesi kararlaştırılmışken Avusturya Haziran 1737'de üç koldan saldırdı; imparatorun resmî savaş ilanı 14 Temmuz 1737 tarihlidir.",
 "sonuc": "Temmuz 1737'de Ruslar Özü'yü aldı; Avusturyalılar Niş, Banaluka ve İzvornik'e yüklenip Eflak'a girdi, Bükreş'i ele geçirdi. I. Mahmud sadrazamı değiştirdi. Ağustos 1737'de Bosna'da Banaluka'da gelen zafer ve aynı yıl sonbaharda Niş'in geri alınması dengeyi Osmanlı lehine çevirdi; savaş 1739'da Belgrad'ın geri alınmasıyla kapandı.",
 "tartisma": "Azak saldırısının günü kaynaklarda ayrışır: TDV I. Mahmud maddesi yalnız 'Zilkade 1148 (Mart 1736)' der; atlasın dayandığı Güler (Tarih İncelemeleri Dergisi 23, 2008) 11 Zilkade 1148 / 24 Mart 1736 verir; başka bir Türk akademik kaynak 10 Nisan 1736 der. Zilkade 1148 ayı Mart ortasından Nisan ortasına uzandığından iki gün de TDV'nin ay aralığına sığar. TDV ayrıca Azak, Gözleve, Orkapı ve Kılburun'un düşüşünü tek bir güne (13 Temmuz 1736) toplar; bu kalelerin farklı günlerde alındığı bu oturumda ayrıca ölçülmedi. Avusturya'nın girişinde TDV fiilî saldırıyı Haziran 1737'ye koyar; resmî ilan günü (14 Temmuz) atlas maddesinde Hambly'ye dayanır, bu oturumda yeniden okunmadı.",
 "kesinlik": "tartismali",
 "olay": [
  "1736-03-24|Azak",
  "1736-05-02|savaş kararı",
  "1737-07-14|Avusturya"
 ],
 "kaynak": "TDV: mahmud-i--osmanli (Abdülkadir Özcan) · TDV: azak · TDV: nis",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "curl /mahmud-i--osmanli 200 (Azak, savaş kararı, Safer 1150, 11 Temmuz 1737 Özü, Niş-Banaluka-İzvornik paragrafları birebir okundu) · /azak 200 ('1736'da tekrar Rus idaresine girdi') · /nis 200 (Rebîülevvel 1150/Temmuz 1737 Seckendorf, ekimde Hâfız Ahmed Paşa geri aldı). Güler 2008 makalesi bu oturumda bulunamadı/okunmadı; 10 Nisan 1736 bir Ankara Üniversitesi açık ders notunda geçer (WebSearch özeti, okunmadı). Hicrî sağlama: 1 Muharrem 1148 ≈ 24 Mayıs 1735 → 11 Zilkade 1148 ≈ 24 Mart 1736 tutarlı."
},

{
 "id": "savas-banaluka-1737",
 "tur": "savas-hikayesi",
 "baslik": "Banaluka Muharebesi (4 Ağustos 1737)",
 "kisa": "Avusturya ordusu Banaluka'yı kuşatırken Bosna valisinin topladığı kuvvetler tepelerden indi; kaçanların köprüleri yıkılmıştı ve Vrbas nehri savaşın son sözünü söyledi.",
 "tarih_metin": "4 Ağustos 1737 (TDV). Olayı yaşayan kadı Ömer Efendi'nin kroniği muharebeyi Temmuz ayının bir gününe koyar.",
 "yer": "Banaluka (Banja Luka) kalesi ve ovası, Vrbas nehri kıyısı, Bosna",
 "taraflar": [
  {
   "ad": "Osmanlı Devleti (Bosna eyaleti)",
   "komutan": "Bosna valisi Hekimoğlu Ali Paşa · sağ kanatta Kaptan Mehmed",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Avusturya (Habsburg) ordusu",
   "komutan": "Prens Hildburghausen",
   "kuvvet": "Ömer Efendi'ye göre esirlerin ifadesiyle 80.000 asker ve yağma için peşlerine takılan 20.000 köylü; bu, tek bir Osmanlı kroniğinin rakamıdır"
  }
 ],
 "oncesi": "Avusturya Haziran 1737'de Rusya'nın yanında savaşa girince Bosna'ya beş koldan saldırdı; en büyük kol Banaluka'ya yöneldi. Sava üzerine köprüler kuran Avusturyalılar Gradişka'ya yerleşti ve kaleyi kuşattı. Bosna valisi Hekimoğlu Ali Paşa'nın divanı, sınırdaki Buzin ile Çetin de kuşatılmışken, önce iç bölgedeki Banaluka'nın kurtarılmasına karar verdi.",
 "akis": "Kuşatanlar kaleyi hendeklerle çevirdi ve dokuz noktadan topa tuttu; savunanlar baskınlarla karşılık verdi. Vali ordusuyla doğrudan değil, tepeler boyunca dolaşarak Vrbas'a yaklaştı; Mehmed kumandasındaki birlik de nehri geçip yukarıdaki bir tepeye yerleşti, ertesi gün iki kuvvet birleşti. Avusturyalılar Osmanlıların nehri geçtiğini ancak tepelerden indiklerini görünce fark etti. Ertesi sabahki saldırıda dört mevzi düştü; çekilmeye çalışanların bir kısmı nehre dökülüp boğuldu. Çarpışma öğleden sonraya kadar sürdü.",
 "sonuc": "Avusturya ordusu köprüleri kesilmiş olarak Vrbas'a sıkıştı ve dağıldı; geride kalanlar Sava yönüne kaçtı. Kroniğe göre on iki top, üç havan ve iki binden fazla çadır ele geçti; şehirde bir saray hastaneye çevrilerek 1.200 yaralı yatırıldı. Bu zafer Avusturya'nın Bosna harekâtını ilk büyük adımında durdurdu ve Hekimoğlu Ali Paşa'ya büyük şöhret kazandırdı.",
 "tartisma": "① Gün: TDV 4 Ağustos 1737 verir. Fraser'ın çevirdiği Ömer Efendi kroniği ise muharebeyi Temmuz'a koyar ve ilerleyişi 'Temmuz'un 23'ü' diye başlatır; çevirmen notu da kroniğin ay adlarında yanlışlık olabileceğini kabul eder. Kroniğin Jülyen esaslı Rumî ay adlarını kullanmış olması 11 günlük farkı açıklayabilir, ancak bu bir çıkarımdır, kaynakta yazmaz. ② Komutan: TDV'nin I. Mahmud maddesi 'Sadrazam Abdullah Paşa Banaluka'da, Hekimoğlu Ali Paşa Bosna'da' Avusturyalıları geri çekilmeye zorladı der; TDV'nin Banaluka maddesi ve Ömer Efendi kurtarıcı olarak Hekimoğlu Ali Paşa'yı anar. ③ Avusturya kuvvetinin 100.000 olduğu yalnız esirlerin ifadesine dayanan Osmanlı rakamıdır; bağımsız bir sayı bu oturumda bulunamadı.",
 "kesinlik": "tartismali",
 "olay": [
  "1737-08-04|Banaluka"
 ],
 "kaynak": "TDV: banaluka · TDV: mahmud-i--osmanli · TDV: hekimoglu-ali-pasa · TDV: omer-efendi-novili · Novili Ömer Efendi, History of the War in Bosnia during the Years 1737-8 and 9, çev. C. Fraser, London: Oriental Translation Fund, 1830, s. 3-43 (Ahvâl-i Gazavât der Diyâr-ı Bosna'nın İngilizce çevirisi; TDV 'Ömer Efendi, Novili' maddesinde anılır)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV curl 200: banaluka ('4 Ağustos'unda Hekimoğlu Ali Paşa tarafından kurtarıldı'; sayı yok), mahmud-i--osmanli, hekimoglu-ali-pasa (Banaluka geçmiyor; yalnız 'Avusturyalılar'a karşı başarılı mücadeleler'), ali-pasa-hekimoglu (ayrı madde, Banaluka geçmiyor), omer-efendi-novili (eser ve çevirileri). Fraser çevirisi PDF: https://www.cidom.org/wp-content/uploads/2015/12/Omer-Effendi-of-Novi-History-of-war-in-Bosnia-1737-8-and-9_opt.pdf 200, metin çıkarıldı; kuvvet/ganimet/yaralı rakamları s. 3, 41-43'ten. Kronik birincil Osmanlı kaynağıdır (akademik ikincil değil) — rakamları kroniğe atfedildi. Hildburghausen adı kroniğin girişinde geçer."
},

{
 "id": "savas-karadeniz-1788",
 "tur": "savas-hikayesi",
 "baslik": "Karadeniz 1788: Gazi Hasan Paşa'nın Seferi ve Yılan Adası (Fidonisi) Muharebesi",
 "kisa": "Çeşme'nin efsanevî kahramanı Karadeniz'e Özü'yü kurtarmak için açıldı; denizde başarı kazandığı söylenen yaz, karada kalenin düşüşüyle bitti.",
 "tarih_metin": "Donanmanın Karadeniz'e açılışı 10 Mayıs 1788 (TDV) · Yılan Adası Muharebesi: TDV 'Ağustos 1788', gün vermiyor · Özü'nün düşüşü 17 Aralık 1788 (TDV)",
 "yer": "Karadeniz'in kuzeybatısı: Özü (Ochakov) önleri, Dinyeper-Bug limanı, Yılan Adası (Fidonisi) açıkları",
 "taraflar": [
  {
   "ad": "Osmanlı donanması",
   "komutan": "Kaptanıderyâ Cezayirli Gazi Hasan Paşa",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Rus donanması ve liman filosu",
   "komutan": "kaynakta ad verilmiyor",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Ağustos 1787'de Rusya'ya savaş ilan eden Osmanlı'nın ilk hedefi Kırım'ı geri almanın kapısı olan Özü Kalesi'ni tutmaktı. Rusya 1788 baharında güneyde iki ordu kurdu; Rus ansiklopedik kaynağına göre Potemkin kumandasındaki yaklaşık 80.000 kişilik ana ordunun görevi Özü'yü almaktı. Kaptanıderyâ Cezayirli Gazi Hasan Paşa 10 Mayıs 1788'de donanmayla Karadeniz'e açıldı.",
 "akis": "Hasan Paşa kuşatılan Özü'ye yardım ulaştırmaya çalıştı, ama kale kıyılarının sığ olması büyük gemilerin yaklaşmasını engelledi. Bu iş için gönderilen hafif gemilerden oluşan 'ince donanma' yenildi ve maiyetindeki donanma ciddi kayıp verdi. Rus ansiklopedik kaynağı, Haziran 1788'de liman içindeki iki çarpışmada Osmanlı filosunun ağır hasar görüp Özü surları altına sığınan gemilerin de yakıldığını anlatır. TDV'ye göre Hasan Paşa Ağustos 1788'de Yılan Adası Muharebesi'nde Rus donanmasını yendi.",
 "sonuc": "Denizdeki çarpışmalar Özü'yü kurtarmaya yetmedi; kale 17 Aralık 1788'de Ruslara geçti ve büyük sivil kayıp yaşandı. Özü'nün düşüşü Hasan Paşa'nın itibarını sarstı. Sadrazam Koca Yûsuf Paşa'nın desteğiyle görevinde kaldıysa da tahta çıkan III. Selim onu 20 Nisan 1789'da kaptanıderyâlıktan alıp İsmâil Kalesi seraskeri yaptı.",
 "tartisma": "Yılan Adası (Fidonisi) Muharebesi'nin hem günü hem sonucu tartışmalıdır. TDV'nin Cezayirli Gazi Hasan Paşa maddesi muharebeyi Ağustos 1788'e koyar ve Osmanlı zaferi sayar. Rus ve Batı literatürü ise Fidonisi'yi Temmuz 1788'e (Gregoryen 14 Temmuz, eski takvimle 3 Temmuz) tarihler ve Rus zaferi olarak anar. Bu ikinci görüş bu oturumda akademik bir kaynakta doğrulanamadı; yalnız ansiklopedik özetlerde görüldü. Atlas maddesi gün bilinmediği için 1788-01-01'de durur.",
 "kesinlik": "tartismali",
 "olay": [
  "1788-08-01|Fidonisi",
  "1788-05-10|Karadeniz"
 ],
 "kaynak": "TDV: cezayirli-gazi-hasan-pasa (Mahir Aydın) · TDV: yusuf-pasa-koca (Kemal Beydilli) · ESBE «Турецкие войны России» (Brockhaus-Efron, ru.wikisource), 1787-1791 kısmı",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV curl 200: cezayirli-gazi-hasan-pasa ('Ağustos 1788'de yapılan Yılan Adası Muharebesi'nde Rus donanmasını mağlûp etmekle birlikte'; 20 Nisan 1789 azil), yusuf-pasa-koca ('10 Mayıs 1788'de Karadeniz'e açılan' Cevdet IV 48-49; 'ince donanma' Taylesanizâde s. 240; Özü 17 Aralık 1788). ESBE ru.wikisource 200: 7 ve 17 Haziran 1788 (eski takvim) liman çarpışmaları, 1 Temmuz Nassau-Siegen. ESBE Fidonisi'yi adıyla anmıyor; ru.wikisource ESBE/Фидониси ve ВЭ/ВР/Фидониси 404. DergiPark arama insan doğrulamasına takıldı. Fidonisi 14 Temmuz iddiası yalnız Wikipedia/Military Wiki özetlerinde görüldü (tek dayanak olamaz) → TARIH-CELISKI raporda."
},

{
 "id": "savas-bogdan-1788",
 "tur": "savas-hikayesi",
 "baslik": "Boğdan Cephesi Açılıyor: Dinyester Geçişi ve Kalas Bozgunu (Temmuz 1788 - Mayıs 1789)",
 "kisa": "Rus Ukrayna ordusu Dinyester'i geçip Boğdan'a girdi; ertesi bahar Osmanlı'nın Yaş'ı alma planı Kalas'ta dağıldı ve sadrazamı makamından etti.",
 "tarih_metin": "Dinyester geçişi eski takvimle 20 Haziran = 1 Temmuz 1788 (ESBE) · Kalas bozgunu 1 Mayıs 1789 (TDV; ESBE eski takvimle 20 Nisan)",
 "yer": "Mogilev'de Dinyester geçidi, Boğdan; Bırlad, Maksimeni ve Kalas (Galaţi)",
 "taraflar": [
  {
   "ad": "Osmanlı ordusu",
   "komutan": "Sadrazam ve serdâr-ı ekrem Koca Yûsuf Paşa",
   "kuvvet": "ESBE'ye göre 1789 baharında Tuna'nın sol yakasına iki kol hâlinde 30.000 kişi ve Kalas'a 10.000 kişilik ihtiyat"
  },
  {
   "ad": "Rus Ukrayna ordusu (Avusturya ile birlikte)",
   "komutan": "Mareşal Rumyantsev; 1789'da General Derfelden'in tümeni · Avusturya tarafında Prens Coburg",
   "kuvvet": "ESBE'ye göre Ukrayna ordusu 1788'de 37.000'e kadar, 1789 baharında 35.000"
  }
 ],
 "oncesi": "1788 baharında Rusya iki ordu kurdu: Potemkin'inki Özü'yü kuşatacak, Rumyantsev'in Ukrayna ordusu Dinyester ile Bug arasında Bender'i tehdit edip Avusturya ile bağı tutacaktı. Avusturya da Şubat 1788'de savaşa katılmıştı. Rumyantsev Hotin'i kuşatan Avusturyalılara bir kol ayırdı, ana kuvvetleriyle 1 Temmuz 1788'de Mogilev'de Dinyester'i geçerek Boğdan'a girdi.",
 "akis": "1788 yazı büyük bir çarpışma olmadan manevralarla geçti. Hotin ve Yaş'ın Eylül 1788'de düşmesiyle Boğdan işgale uğradı; Yûsuf Paşa Yergöğü'nde topladığı kuvvetlerle Boğdan'ı geri almaya hazırlandı. 1789 baharında Tuna'nın sol yakasına iki kol geçirildi; amaç Coburg'u ve Rus öncülerini ayrı ayrı yenip Yaş'ı almaktı. Coburg Erdel'e çekildi; Derfelden'in tümeni ise Osmanlı kuvvetlerini Bırlad'da, Maksimeni'de ve son olarak 1 Mayıs 1789'da Kalas'ta üst üste yendi.",
 "sonuc": "Kalas bozgunu Koca Yûsuf Paşa'nın sonunu getirdi. III. Selim zaten ona güvenmiyordu; bu yenilgi azlinin görünür sebebi oldu ve 7 Haziran 1789'da yerine Avusturya cephesinde başarı kazanmış Kethüdâ Hasan Paşa getirildi. Boğdan'da başlayan Rus ilerleyişi yaz boyunca Fokşani ve Rimnik bozgunlarına uzanacaktı.",
 "tartisma": "Tarihler takvim farkıyla uyumludur: ESBE Rus eski takvimini kullanır (Dinyester 20 Haziran, Kalas 20 Nisan); 11 gün eklenince 1 Temmuz 1788 ve TDV'nin 1 Mayıs 1789'u çıkar. Kuvvet rakamları yalnız Rus kaynağı ESBE'dendir; Osmanlı kaynağıyla karşılaştırılmadı.",
 "kesinlik": "kesin",
 "olay": [
  "1788-07-01|Dinyester",
  "1789-05-01|Kalas"
 ],
 "kaynak": "TDV: yusuf-pasa-koca (Kemal Beydilli) · TDV: zistovi-antlasmasi · ESBE «Турецкие войны России» (Brockhaus-Efron, ru.wikisource), 1787-1791 kısmı",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV curl 200 yusuf-pasa-koca: 'Yaş ve Hotin'in düşmesiyle (Eylül 1788)', 'Kalas'ta uğranılan yenilgi (1 Mayıs 1789)', azil 7 Haziran 1789. zistovi-antlasmasi: Avusturya'nın katılması 9 Şubat 1788. ESBE ru.wikisource 200 (curl, metin çıkarıldı): '20 июня перешли через Днестр у Могилева'; Derfelden '7 апр. — у Бырлада, 10-го у Максимени и 20-го — у Галаца'; 30 bin + 10 bin ihtiyat; Ukrayna ordusu 37 bin / 35 bin. Jülyen→Gregoryen +11 gün (XVIII. yy)."
},

{
 "id": "savas-foksani-rimnik-1789",
 "tur": "savas-hikayesi",
 "baslik": "Fokşani ve Rimnik (Boza) Bozgunları (1 Ağustos - 22 Eylül 1789)",
 "kisa": "Yedi hafta arayla iki bozgun: önce öncü kuvvet Fokşani'de dağıldı, sonra intikam için yürüyen sadrazamın ordusu Rimnik'te çöktü ve Boza suyunu geçerken eridi.",
 "tarih_metin": "Fokşani 1 Ağustos 1789 (TDV; ESBE eski takvimle 21 Temmuz) · Rimnik/Boza 22 Eylül 1789 (TDV; ESBE eski takvimle 11 Eylül)",
 "yer": "Fokşani (Focşani), Rimnik (Râmnic) nehri yakınında Martineşti ve Boza (Buzău) suyu, Eflak-Boğdan sınırı",
 "taraflar": [
  {
   "ad": "Osmanlı ordusu",
   "komutan": "Sadrazam Kethüdâ (Cenaze) Hasan Paşa · Fokşani'de öncü kuvvetin başında Kemankeş Mustafa Paşa",
   "kuvvet": "ESBE'ye göre Fokşani'de 30.000 kişilik bir kolordu, Rimnik'te sadrazamın topladığı 100.000'e varan ordu"
  },
  {
   "ad": "Rus ve Avusturya müttefik kuvvetleri",
   "komutan": "Suvorov · Prens Coburg",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Kalas bozgunundan sonra sadrazamlığa getirilen Kethüdâ Hasan Paşa hastaydı; mührü hasta yatağında aldığı için sonradan 'Cenaze' lakabıyla anıldı. Potemkin ana Rus ordusuyla Bender'e doğru yavaşça ilerlerken Osmanlı, Boğdan'daki Rus ve Avusturya kuvvetlerini birleşmeden ezmeyi denedi.",
 "akis": "Öne sürülen kuvvetler, Suvorov ile Coburg'un birleşmesinden sonra ağustos başında Fokşani'de yenildi. Hasan Paşa bu yenilginin intikamını almak, Bender ile Akkirman'ı kurtarmak için Ağustos sonunda Tuna'yı geçti. Ordu Rimnik nehri yakınında Martineşti'de yine Suvorov ve Coburg'un birleşik kuvvetlerine yenildi. Geri çekilenler Boza suyunu geçerken ağır kayıp verdi; bu yüzden muharebe Osmanlı kaynaklarında 'Boza bozgunu' diye anılır.",
 "sonuc": "Eflak'taki Osmanlı savunması dağıldı. Rus kaynağına göre zafer o kadar kesindi ki müttefikler Tuna'yı engelsiz geçebilirdi; ama Potemkin Bender önünde beklemeyi seçti ve yalnız Gudoviç'e Hacıbey ile Akkirman'ı aldırdı. Akkirman (11 Ekim) ve Bender (14 Kasım 1789) Ruslara teslim oldu; Avusturyalılar Ekim'de Belgrad'ı aldı. Hasan Paşa 23 Kasım 1789'da azledildi, yerine İsmâil önünde Rusları geri püskürten Cezayirli Gazi Hasan Paşa sadrazam ve serdâr-ı ekrem oldu.",
 "tartisma": "① Fokşani'deki Osmanlı komutanını TDV (Kethüdâ Hasan Paşa maddesi) Kemankeş Mustafa Paşa, ESBE Osman Paşa diye verir. ② TDV Koca Yûsuf Paşa maddesi 1789 sonbaharındaki teslimleri '11 Ekim'de İsmâil ve 14 Kasım'da Bender' diye sayar. Oysa TDV'nin kendi İsmâil ve Cezayirli Gazi Hasan Paşa maddeleri İsmâil'in 1789'da kurtarıldığını ve ancak 22 Aralık 1790'da düştüğünü yazar. Kethüdâ Hasan Paşa maddesi ise Bender ile Akkirman'ın düştüğünü söyler. 11 Ekim bu yüzden büyük olasılıkla Akkirman'ın teslimidir; bu kart bu okumayı kullanır. ③ Kuvvet rakamları yalnız Rus kaynağından (ESBE) alınmıştır.",
 "kesinlik": "tartismali",
 "olay": [
  "1789-08-01|Fokşani",
  "1789-09-22|Rimnik"
 ],
 "kaynak": "TDV: hasan-pasa-kethuda · TDV: yusuf-pasa-koca (Kemal Beydilli) · TDV: cezayirli-gazi-hasan-pasa · TDV: ismail--ukrayna · ESBE «Турецкие войны России» (Brockhaus-Efron, ru.wikisource), 1787-1791 kısmı",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV curl 200 hasan-pasa-kethuda: 'Kemankeş Mustafa Paşa idaresindeki kuvvetler ağustos başında Fokşan'da ... yenildi', 'Rimnik nehri yakınlarında Martineşti'de', 'Boza bozgunu', 'Bender, Akkirman düştü, ardından Avusturyalılar 8 Ekim'de Belgrad'ı aldılar', azil 5 Rebîülevvel 1204 / 23 Kasım 1789. yusuf-pasa-koca: '1 Ağustos 1789'da Fokşan'da, 22 Eylül'de Remnik nehrini geçerken ... 11 Ekim'de İsmâil ve 14 Kasım'da Bender'. ESBE: Fokşani 21 Temmuz, Rimnik 11 Eylül (eski takvim), Osman Paşa 30 bin, vezir 100 bin, Bender 3 Kasım (eski) = 14 Kasım. 'Akkirman = 11 Ekim' bir çıkarımdır (ESBE Akkirman'ın gününü vermiyor). Atlas maddesi 1789-09-22'nin d: metni 'ekim-kasım aylarında İsmâil ile Bender'in teslimine yol açtı' diyor; bu TDV Yûsuf Paşa maddesindeki hatayı taşıyor (rapora yazıldı)."
},

{
 "id": "savas-kalafat-yergogu-1790",
 "tur": "savas-hikayesi",
 "baslik": "Kalafat ve Yergöğü: Avusturya Cephesinin Son Baharı (Nisan - Haziran 1790)",
 "kisa": "Belgrad'ı kaybetmiş Osmanlı, 1790'da Tuna boyunda Avusturya'yı iki kez durdurdu; aynı Yergöğü üç ay sonra barışın imzalandığı çadıra ev sahipliği yapacaktı.",
 "tarih_metin": "Kalafat çıkarması Nisan 1790 sonları (TDV, gün vermiyor) · Yergöğü 8 Haziran 1790 (TDV) · Yergöğü mütarekesi 9 Muharrem 1205 / 18 Eylül 1790 (TDV Ziştovi) ya da 19 Eylül 1790 (TDV Yergöğü)",
 "yer": "Tuna boyu: Vidin karşısında Kalafat, Rusçuk karşısında Yergöğü (Giurgiu), Eflak",
 "taraflar": [
  {
   "ad": "Osmanlı Devleti",
   "komutan": "kaynakta ad verilmiyor",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Avusturya (Habsburg)",
   "komutan": "Prens Coburg",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "1789 sonbaharında Avusturya Belgrad'ı almış, Coburg Bükreş'e girmişti. Şubat 1790'da İmparator II. Joseph öldü; halefi II. Leopold, Prusya ve İngiltere'nin aracılığıyla barışa yanaşmaya başladı. Yine de Avusturya Tuna boyundaki baskısını sürdürdü: 16 Nisan 1790'da Hırsova kış boyu süren bir kuşatmadan sonra Avusturyalılara geçti.",
 "akis": "Nisan sonlarında Vidin'den Tuna yoluyla Kalafat'a çıkan Osmanlı kuvvetleri aynı hızla geri püskürtüldü. Buna karşılık Coburg'un iyi savunulan Yergöğü'ne yüklenmesi de boşa çıktı: Avusturya kuvvetleri 8 Haziran 1790'da Yergöğü'ne kadar indilerse de Osmanlı askerleri tarafından geri püskürtüldü ve ağır kayıpla Bükreş'e dönmek zorunda kaldı. Rus ansiklopedik kaynağı da 1790 seferinin Avusturya için Yergöğü önünde büyük bir yenilgiyle başladığını yazar. Haziran'da Hırvat-Sloven serhaddindeki küçük Çettin kalesi ise Avusturya'nın eline geçti; cephede iki taraf da kesin üstünlük kuramıyordu.",
 "sonuc": "Coburg'un Suvorov'la ortak saldırı hazırlığı, Reichenbach Konvansiyonu'nun imzalanması ve bütün cephelerde çatışmaların durdurulması emriyle sonuçsuz kaldı. Mütareke Yergöğü'nde sadrazamın çadırında imzalandı; Avusturya ile savaş 4 Ağustos 1791 Ziştovi Antlaşması'yla bitti ve Belgrad Osmanlı'ya geri verildi.",
 "tartisma": "Yergöğü mütarekesinin günü TDV'nin iki maddesinde bir gün farklıdır: Ziştovi Antlaşması maddesi hicrî karşılığıyla '9 Muharrem 1205 Pazar günü (18 Eylül 1790)', Yergöğü maddesi '19 Eylül 1790' der. Hicrî karşılığı olan birincisi daha sağlamdır. Kalafat çıkarmasının günü bu oturumda hiçbir kaynakta bulunamadı.",
 "kesinlik": "kesin",
 "olay": [
  "1790-01-01|Kalafat",
  "1790-06-08|Yergöğü"
 ],
 "kaynak": "TDV: zistovi-antlasmasi (Kemal Beydilli) · TDV: yergogu · ESBE «Турецкие войны России» (Brockhaus-Efron, ru.wikisource), 1787-1791 kısmı",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV curl 200 zistovi-antlasmasi: '16 Nisan'da eski Hırsova ... Avusturya kuvvetlerinin eline geçti', 'Prens Coburg iyi bir savunma ortaya koyan Yergöğü'nü nâfile yere sıkıştırdı ve ağır kayıplar vererek Bükreş'e dönmek zorunda kaldı', 'Nisan sonlarında Vidin'den hareketle Tuna üzerinden Kalafat'a çıkan Osmanlı kuvvetleri de aynı hızla geri püskürtüldü', Reichenbach, mütareke 9 Muharrem 1205 / 18 Eylül 1790, antlaşma 4 Ağustos 1791. yergogu 200: '8 Haziran 1790'da Yergöğü'ne kadar indilerse de ... geri püskürtüldüler', mütareke 19 Eylül 1790. ESBE: 'Кампания 1790 г. началась для австрийцев крупной неудачей: принц Кобургский был разбит турками под Журжей'. KALAFAT-GUN: bulunamadı (atlas maddesi 1790-01-01 kalır)."
},

{
 "id": "savas-ismail-macin-1790",
 "tur": "savas-hikayesi",
 "baslik": "İsmâil'in Düşüşü ve Maçin Bozgunu (22 Aralık 1790 - 9 Temmuz 1791)",
 "kisa": "'Düşmez' sanılan İsmâil bir sabah saldırısıyla düştü ve içindeki halk kılıçtan geçirildi; altı ay sonra Maçin bozgunu Osmanlı'yı barış masasına oturttu.",
 "tarih_metin": "İsmâil: 15 Rebîülâhir 1205 / 22 Aralık 1790 (TDV; Rus eski takvimiyle 11 Aralık) · İbrâil kuşatması Haziran 1791 (TDV, gün vermiyor) · Maçin: 8 Zilkade 1205 / 9 Temmuz 1791 (TDV Yaş Antlaşması; Rus eski takvimiyle 28 Haziran) · Kalas mütarekesi Ağustos 1791",
 "yer": "Tuna'nın aşağı kesimi: İsmâil kalesi (Kili kolu), İbrâil, Maçin; Kalas",
 "taraflar": [
  {
   "ad": "Osmanlı Devleti",
   "komutan": "1791'de Sadrazam ve serdâr-ı ekrem Koca Yûsuf Paşa",
   "kuvvet": "TDV'ye göre 1790'da İbrâil'in muhafazasında 2.000 kişi; İsmâil garnizonu için kaynakta güvenilir sayı yok (bkz. tartışma)"
  },
  {
   "ad": "Rusya",
   "komutan": "İsmâil'de Suvorov · 1791'de Prens Repnin",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "1789'da Özü'nün düşmesinden sonra İsmâil, Tuna'daki en önemli Osmanlı üssü oldu. Cezayirli Gazi Hasan Paşa kaleyi kuşatan Rusları bozup çekilmeye zorlamış, bu başarı onu sadrazamlığa taşımıştı; ama 30 Mart 1790'da Şumnu'da öldü. 1790'da Ruslar Kili, Tulça ve İsakça'yı birbiri ardına aldı; İsmâil, kalabalık garnizonuyla direnmeyi sürdürdü.",
 "akis": "Ruslar kaleyi 22 Aralık 1790'da (eski takvimle 11 Aralık) Suvorov kumandasında kanlı bir saldırıyla aldı. Kale içindeki askerlerle birlikte sivil halk da kılıçtan geçirildi. 'Düşmez' gözüyle bakılan kalenin kaybı İstanbul'da büyük telaş yarattı. Haziran 1791'de Ruslar İbrâil'i de kuşattı ama alamadı. Ardından Repnin Tuna'yı Kalas'ta geçti ve 9 Temmuz 1791'de Maçin'de sadrazamın ordusunu yendi; TDV bu yenilgiyi 'genel bozgun ve büyük perişanlık' diye anlatır.",
 "sonuc": "Maçin'den sonra ordu ileri gelenleri sadrazamın çadırında galip gelmenin artık mümkün olmadığında birleşti. Kalas'ta Vâsıf Efendi ile Prens Repnin arasında mütareke yapıldı ve 11 Ağustos 1791'de onaylandı. 10 Ocak 1792 (15 Cemâziyelevvel 1206) Yaş Antlaşması'yla Turla (Dinyester) yeni sınır oldu ve Osmanlılar İsmâil'i geri aldı. Kale 1794'te yeniden tahkim edildi; 1809'da yine Rus işgaline uğradı ve 1812 Bükreş Antlaşması'yla elden çıktı.",
 "tartisma": "① İsmâil'in kayıpları: TDV, İslâm Ansiklopedisi'ne dayanarak Tuna'ya atlayanlar dışında 22.700 ceset sayıldığını, toplam kaybın 30.000'e ulaştığını, Rus kaybının 15.000 dolayında olduğunu yazar. Osipovsky (2026) Rus resmî raporlarındaki 30.816 rakamının dayanaksız olduğunu, Osmanlı kaybının 15.000'i geçmediğini savunur. ② Maçin'in günü: TDV kendi içinde ayrışır. Yaş Antlaşması maddesi 9 Temmuz 1791 (8 Zilkade 1205) verir; Koca Yûsuf Paşa maddesi 'Maçin'de ... son bozgun (6 Ağustos 1791)' der. Rus eski takvimiyle 28 Haziran 9 Temmuz'a denk düştüğü için kart 9 Temmuz'u kullanır. ③ İbrâil kuşatmasının günü kaynaklarda bulunamadı.",
 "kesinlik": "tartismali",
 "olay": [
  "1790-12-22|İsmail Kalesi",
  "1791-01-01|İbrâil",
  "1791-07-09|Maçin"
 ],
 "kaynak": "TDV: ismail--ukrayna (Feridun Emecen) · TDV: ibrail (Mihai Maxim) · TDV: yas-antlasmasi (Kemal Beydilli) · TDV: yusuf-pasa-koca · TDV: cezayirli-gazi-hasan-pasa · ESBE «Турецкие войны России» (Brockhaus-Efron, ru.wikisource), 1787-1791 kısmı · S. N. Osipovsky, \"The 1790 storming of Izmail by A. V. Suvorov: contradictions in estimates of the garrison's size and Turkish losses\", Manuscript (Gramota) 19/2 (2026), DOI 10.30853/mns20260095, https://www.gramota.net/en/article/mns20260095/fulltext",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV curl 200 ismail--ukrayna: 'Ancak sonradan kale Ruslar'ın eline geçti (15 Rebîülâhir 1205 / 22 Aralık 1790)'; kayıplar İA V/2 s. 1109'a dayalı; '1792 Yaş Antlaşması ile kaleyi geri aldılar'; 1794 tahkim, 1809 işgal, 1812 Bükreş. Hicrî sağlama: 1 Muharrem 1205 ≈ 10 Eylül 1790 → 15 Rebîülâhir ≈ 22 Aralık 1790, tutarlı (TDV günü Gregoryendir). ESBE: 'только 11 дек. был взят Суворовым' (eski takvim) = 22 Aralık, iki kaynak örtüşüyor. ibrail 200: '1790 yılında İbrâil'in muhafazasında 2000 kişi', 'ertesi yılın haziranında Ruslar tarafından kuşatıldıysa da alınamadı'. yas-antlasmasi 200: Maçin 9 Temmuz 1791 (8 Zilkade 1205), Kalas onayı 11 Ağustos 1791, Yaş 15 Cemâziyelevvel 1206 / 10 Ocak 1792. ESBE: Maçin '28 июня' (eski) = 9 Temmuz. Osipovsky WebFetch 200 (özet; gün vermiyor). Kili/Tulça/İsakça 1790 düşüşü ESBE'den. Trakya Üniv. İbrâil tezi (dspace.trakya.edu.tr/xmlui/handle/trakya/2442) 403, okunamadı."
},

{
 "id": "savas-malta-1798",
 "tur": "savas-hikayesi",
 "baslik": "Malta'nın Fransızlarca Alınışı (10-12 Haziran 1798)",
 "kisa": "Osmanlı'nın 1565'te alamadığı ada, Mısır yolundaki Bonaparte'a üç günde teslim oldu; şövalyeleri kılıçtan çok içerideki ihanet yendi.",
 "tarih_metin": "Filo 9 Haziran 1798'de adanın önüne geldi; saldırı 10 Haziran sabahı; teslim antlaşması 12 Haziran 1798",
 "yer": "Malta ve Gozo adaları, Valletta limanı",
 "taraflar": [
  {
   "ad": "Fransız Cumhuriyeti'nin Mısır seferi kuvvetleri",
   "komutan": "General Napolyon Bonaparte · filo komutanı Amiral Brueys",
   "kuvvet": "nakliye gemileriyle birlikte toplam 50.000-54.000 asker (kaynaklar ayrışıyor; bu sayı Mısır'a giden bütün ordunundur)"
  },
  {
   "ad": "St. Jean (Malta) Şövalyeleri tarikatı",
   "komutan": "Büyük Üstat Ferdinand von Hompesch",
   "kuvvet": "332 şövalye, limanda yaklaşık 3.600 asker, taşradan yaklaşık 13.000 milis"
  }
 ],
 "oncesi": "St. Jean şövalyeleri 1522'de Rodos'tan çıkarılınca V. Carlos onları 1530'da Malta'ya yerleştirmişti; 1565'teki büyük Osmanlı kuşatması bu adada başarısız olmuştu. 1798'de Mısır'a giden Fransız donanmasının yolu Malta'dan geçiyordu ve ada, sefer için bir ikmal üssü olarak ele geçirilecekti. 9 Haziran'da filo adanın önüne geldi; Büyük Üstat Hompesch, ufukta onlarca bin askerlik bir orduyla karşı karşıyaydı.",
 "akis": "10 Haziran sabahı Fransızlar adanın dört ayrı noktasına birden saldırdı. Savunma kâğıt üzerinde küçük değildi, ama içeriden çözüldü: Bonaparte'ın adadaki casusları, Fransız asıllı şövalyelerin önemli bir kısmının -bazıları Büyük Üstat'ın en yakın danışmanlarıydı- işgalcilerle yıllardır gizlice iş birliği yapması ve halk arasındaki Fransız taraftarları savunucular arasında kargaşa yarattı. 12 Haziran 1798'de 'sözleşme' adı verilen teslim belgesi Fransız amiral gemisi L'Orient'te imzalandı; belgenin 7. maddesi halkın Katolik dinini serbestçe yaşayacağını ve mülkünün korunacağını vaat ediyordu.",
 "sonuc": "Şövalye teşkilatı dağıtıldı, adada yeni bir düzen kuruldu; Bonaparte kısa süre sonra Mısır'a yöneldi. Fransızlar 7. maddeye uymadı, kiliselerin kıymetli eşyalarını satmaları halkı öfkelendirdi: 2 Eylül 1798'de ayaklanma başladı ve Fransız garnizonu liman surlarının gerisine kapandı. İngilizlerin desteklediği iki yıllık ablukanın sonunda General Vaubois 5 Eylül 1800'de teslim oldu; Malta İngiltere'nin eline geçti ve 1964'e kadar orada kaldı.",
 "tartisma": "① Hompesch'in sorumluluğu: geleneksel yorum teslimin suçunu Büyük Üstat'a yükler; Vella Gera ise onun 'günah işleyenden çok günahın kurbanı' olduğunu, savunmanın ihanetle çözüldüğünü savunur. ② Vella Gera'ya göre Büyük Üstat kendisine sunulan teslim sözleşmesini imzalamamış, belgeyi Bonaparte ile tarikatın eski haznedarı Bosredon Ransijat ve bazı Maltalı ileri gelenler imzalamıştır. ③ Fransız ordusunun büyüklüğü kaynakta 54.000, Fondation Napoléon yazısında yaklaşık 50.000 olarak geçer. TDV olayı yalnız yılla verir (1798); gün akademik/kurumsal kaynaklardan alınmıştır.",
 "kesinlik": "kesin",
 "olay": [
  "1798-06-12|Malta"
 ],
 "kaynak": "TDV: malta (II. Tarih bölümü: İdris Bostan) · Anthony Vella Gera, “An Eventful Two Years in the History of Malta as Recorded in the British Press”, Storja '98 (Malta Üniversitesi Tarih Topluluğu yayını), s. 66 vd. (https://um.edu.mt/library/oar/bitstream/123456789/25192/1/AN%20EVENTFUL%20TWO%20YEARS%20IN%20THE%20HISTORY%20OF%20MALTA.pdf) · Fondation Napoléon, “The Taking and the Siege of Malta”, Revue du Souvenir Napoléonien (https://www.napoleon.org/en/history-of-the-two-empires/articles/the-taking-and-the-siege-of-malta)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV malta 200 (gövde okundu; olay yalnız '1798'de Napolyon ... adayı ele geçirdi', şövalye teşkilatı dağıtıldı, 1800 İngiliz işgali). Gün TDV'de yok. um.edu.mt PDF 200 (pypdf ile metin çıkarıldı; yazar bankacı-koleksiyoncu, Storja '98 hakemli dergi değil, Malta Üniv. öğrenci-tarih topluluğu yayını — beyan). napoleon.org 200 (yazar adı sayfada yok; Fondation Napoléon dergisi). Hakemli bir makale bulunamadı; Carmelo Testa, The French in Malta (Midsea 1997) temel eser olarak anılıyor, erişilemedi. Vikipedi kullanılmadı."
},

{
 "id": "savas-duckworth-istanbul-1807",
 "tur": "savas-hikayesi",
 "baslik": "Duckworth Harekâtı: İngiliz Donanması İstanbul Önünde (19 Şubat - 3 Mart 1807)",
 "kisa": "Bir İngiliz filosu Çanakkale'yi kayıpsız geçip Kınalıada'ya demirledi; beş günde 361 tabya kuran İstanbul tek top atmadan onu geri çevirdi.",
 "tarih_metin": "19 Şubat 1807 Çanakkale geçişi · 20 Şubat 1807 Kınalıada önüne demirleme · 25 Şubat savunmanın tamamlanması · 1 Mart 1807 filonun ayrılışı · 3 Mart dönüşte Çanakkale'den ağır hasarla çıkış",
 "yer": "Çanakkale Boğazı, Marmara, Kınalıada önleri ve İstanbul Boğazı",
 "taraflar": [
  {
   "ad": "İngiltere Akdeniz filosu",
   "komutan": "Amiral John Thomas Duckworth · İstanbul elçisi Charles Arbuthnot",
   "kuvvet": "Boğazı on bir gemi geçti; biri Çanakkale'de bırakıldı, İstanbul önüne on gemi geldi; piyade birliği yoktu"
  },
  {
   "ad": "Osmanlı Devleti",
   "komutan": "III. Selim · Kaptanıderya Salih Paşa · müzakereci Safiyesultanzade İshak Bey; savunma planında Fransız elçisi General Sébastiani",
   "kuvvet": "on iki parçalık donanma, yirmiden fazla topçu filikası, 100'ü aşkın kayık; Boğaz ve sahile kurulan 361 tabyada 540 top ve 110 havan"
  }
 ],
 "oncesi": "1806'da Rusya ile savaşa giren Bâbıâli Fransa'ya yaklaşmış, Sébastiani'nin İstanbul'a gelişiyle Fransız nüfuzu artmıştı. İngiliz elçisi Arbuthnot Rus gemilerine Boğazları açtıramayınca 3 Eylül 1806'da bir filo çağırdı; elçi ve İngiliz tüccarlar 29 Ocak 1807'de İstanbul'dan ayrıldı. 14 Şubat'ta filonun bir gemisi bilinmeyen bir sebeple yanıp havaya uçtu. Amaç İstanbul'u almak değil, Bâbıâli'yi korkutup Fransa karşıtı koalisyona geri döndürmekti.",
 "akis": "18 Şubat'ta beklenen rüzgâr esince Duckworth harekât emrini verdi; ertesi gün filo küçük bir direnişle Çanakkale'yi kayıpsız geçti ve 20 Şubat'ta Kınalıada önüne demirledi. Bâbıâli zaman kazanmak için İshak Bey'i görüşmeye yolladı, bir yandan da Sébastiani'nin planıyla Sarayburnu'ndan Yedikule'ye, Kadıköy'den Fenerbahçe'ye tabyalar kurdu. Halk, gayrimüslim cemaatler dahil, inşaatlara akın etti; Fransa'dan gelen top ve mühendisler 22 Şubat'ta ulaştı. 25 Şubat'ta savunma tamamlanınca görüşmeler sert bir notayla kesildi; Kınalıada'ya çıkan İngiliz deniz piyadeleri manastır çevresinde püskürtüldü.",
 "sonuc": "Ters rüzgâr ve akıntı yüzünden şehri topa tutamayan filo, 1 Mart 1807'de İstanbul'dan ayrıldı; iki gün sonra Çanakkale tahkimatından ağır yara alarak geçti ve toplam 46 ölü, 235 yaralı verdi. Duckworth, Rus Amiral Seniavin'in ortak saldırı teklifini reddetti. İngiltere ile savaş 1809 Kal'a-i Sultaniye Antlaşması'yla bitti. Ama zafer iç barışı getirmedi: dağıtılan silahlar geri toplanamadı, filonun yeniçeriliği kaldırmak için Nizâm-ı Cedîd ekibince çağrıldığı söylentisi yayıldı ve III. Selim'i deviren Kabakçı Mustafa isyanı üç ay sonra Boğaz kalelerinde başladı.",
 "tartisma": "TDV (selim-iii) filonun 'Şubat sonunda' çekildiğini söyler; Yeşil ayrılışı 1 Mart sabahına koyar. Kabakçı isyanıyla bağlantıyı Yeşil kurar; TDV de yeniçeriliği kaldırmak için çağrıldığı söylentisini 'asılsız' diye anar.",
 "kesinlik": "kesin",
 "olay": [
  "1807-02-20|Duckworth"
 ],
 "kaynak": "TDV: selim-iii (Kemal Beydilli) · Fatih Yeşil, “İngiltere'nin İstanbul Harekâtı: 1807”, Büyük İstanbul Tarihi, Siyasi Olaylar, İstanbul Büyükşehir Belediyesi-İSAM, s. 81-87 (https://istanbultarihi.ist/assets/uploads/pdf/ingilterenin-istanbul-harekati-1807-41.pdf); geniş hâli: F. Yeşil, “İstanbul Önlerinde Bir İngiliz Filosu”, ed. S. Kenan, Nizâm-ı Kadîm'den Nizâm-ı Cedîd'e III. Selim ve Dönemi, İstanbul 2010, s. 391-493",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV selim-iii 200 (gövde okundu: Şubat 1807 filo İstanbul önünde, Şubat sonu çekilme, söylenti 'asılsız'; Duckworth adı ve sayı yok). istanbultarihi.ist HTML sayfası PHP hatası verdi; PDF 200, pypdf ile tam metin okundu (Fatih Yeşil, Hacettepe Üniv.). Tarihler Yeşil'den. Madde t=1807-02-20 Kınalıada demirlemesiyle birebir uyuşuyor."
},

{
 "id": "savas-iskenderiye-resid-1807",
 "tur": "savas-hikayesi",
 "baslik": "İngilizlerin İskenderiye Seferi ve Reşid Bozgunu (Mart-Eylül 1807)",
 "kisa": "İstanbul'dan eli boş dönen İngiltere Mısır'a çıktı; Reşid sokaklarında iki kez geri püskürtülünce Mehmed Ali'nin Mısır'daki yıldızı parladı.",
 "tarih_metin": "17 Mart 1807 İngiliz filosu İskenderiye önünde · Mart ve Nisan 1807 Reşid'e iki başarısız saldırı (ikincisi Nisan'ın ortası; 21 Nisan 1807 tarihli Fraser mektubu 'felaketler'den söz ediyor) · 14 Eylül 1807 İngilizlerin Mısır'dan çekilmesi",
 "yer": "İskenderiye, Ebûkīr ve Nil'in Reşid (Rosetta) ağzı, Hamed (El Hamet) köyü",
 "taraflar": [
  {
   "ad": "İngiliz sefer kuvveti",
   "komutan": "General Alexander Mackenzie Fraser · Tuğgeneral Stewart · Yarbay Macleod · filoda Amiral Lewis",
   "kuvvet": "kaynakta toplam sayı verilmiyor; Hamed'de Macleod'un kolu yaklaşık 1.000 ölü, yaralı ve kayıp verdi"
  },
  {
   "ad": "Mısır valisi Mehmed Ali Paşa'nın kuvvetleri",
   "komutan": "Kavalalı Mehmed Ali Paşa",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Duckworth filosu İstanbul'dan eli boş dönünce İngiltere aynı yılın Mart'ında Mısır'a yöneldi: Akdeniz filosunun bir kısmı 17 Mart 1807'de İskenderiye önüne geldi ve İskenderiye ile Ebûkīr ele geçirildi. Vali Mehmed Ali Paşa o sırada Yukarı Mısır'da (Said) Kölemenlerle savaşıyordu. Kölemenlerin hamisi İngilizlerdi; Mehmed Ali ise Fransız uzmanlarla çalışıyordu.",
 "akis": "İngilizler İskenderiye'den Nil ağzındaki Reşid kasabasına yürüdü ve Mart'ta ilk saldırıda geri püskürtüldü. Mehmed Ali haberi alır almaz Kölemenlerle anlaşarak Said'i vergi karşılığında onlara bıraktı, sırtını güvenceye alıp kuzeye döndü; Fransız başkonsolosu Drovetti'nin desteğini de aldı. Nisan'daki ikinci Reşid saldırısı düşmana yetişen takviyeler yüzünden yine başarısız oldu. Bu arada Hamed'de mevzilenen Yarbay Macleod'un kolu bozguna uğradı: Fraser'in raporuna göre Macleod dahil yaklaşık 1.000 kişi öldü, yaralandı ya da kayboldu ve Stewart İskenderiye'ye çekilmek zorunda kaldı. 21 Nisan tarihli mektubunda Fraser, bu 'felaketler'in yanlış istihbarattan doğduğundan yakınıyordu.",
 "sonuc": "Erzak ve para sıkıntısı içindeki İngilizler İskenderiye'ye kapandı; Mehmed Ali ordusunun başında oraya yürürken İstanbul'da III. Selim tahttan indirildi. Sonunda İngilizler Mehmed Ali ile anlaşarak 14 Eylül 1807'de Mısır'ı terk etti ve 1882'ye kadar geri dönmedi. Zafer Mehmed Ali'nin hareket alanını genişletti; Kölemenler de bu olayda İngiltere yerine onunla iş birliği yaparak kaderlerini ona bağladı.",
 "tartisma": "Hamed (El Hamet) bozgununun günü okunan akademik kaynaklarda verilmiyor; Aberdeen Üniversitesi arşivindeki Fraser mektuplarından biri 21 Nisan 1807 tarihli ve felaketlerden söz ediyor, Hamed raporunu içeren mektup ise yalnız '[Nisan] 1807' diye kataloglanmış. Hamed'deki kayıp sayısı Fraser'in kendi raporundandır (ölü-yaralı-kayıp toplamı).",
 "kesinlik": "tartismali",
 "olay": [
  "1807-03-17|Fraser",
  "1807-04-21|Reşid"
 ],
 "kaynak": "TDV: ebukir (Atilla Çetin) · Selda Güner, “Abdurrahman El-Caberti ve Giovanni Reggio'nun Anlatılarında 'Kahire Kale Katliamı' (Mart 1811) ve Memlüklerin Mısır'dan Tasfiyesi”, Akademik İncelemeler Dergisi 11/2 (2016), s. 47-68, s. 60-61 (https://dergipark.org.tr/tr/download/article-file/252524) · Aberdeen Üniversitesi Özel Koleksiyonlar, MS 3470/6/1/1678 (Fraser'den Binbaşı Missett'e, 21 Nisan 1807) ve MS 3470/6/1/1721 (Fraser'den General H. E. Fox'a, [Nisan] 1807) katalog kayıtları (https://calm.abdn.ac.uk/archives/rdf/catalog/MS%203470/6/1/1721)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV kavalali-mehmed-ali-pasa 200 (1807 seferi YOK); mehmed-ali-pasa-kavalali yalnız yönlendirme; misir 0-200k okundu, 1807 yok; resid = arama sayfası (ölü slug); arama 'Fraser' sonuçsuz; arama 'Reşid 1807 İngiliz' → ebukir 200: 'Mart 1807'de İskenderiye ve Ebûkīr'i istilâ etti'. Güner PDF 200 (pypdf). Mevhibe Savaş metni (turkoloji.cu.edu.tr) yerel gazete yayını olduğu için KULLANILMADI. Aberdeen katalog kayıtları 200 (birincil belge özeti). Madde t=1807-04-21 için kaynak günü kesinleştirilemedi; çelişki yok ama gün teyitsiz."
},

{
 "id": "savas-ibrail-1809",
 "tur": "savas-hikayesi",
 "baslik": "İbrâil'in Düşüşü (2 Aralık 1809)",
 "kisa": "Bahardaki Rus hücumlarını savuşturan Tuna kalesi, kışa girerken toptan değil açlıktan teslim oldu.",
 "tarih_metin": "1809 kampanyası; teslim 2 Aralık 1809 (TDV) — Rus kaynağında 21 Kasım (eski takvim) = 3 Aralık 1809",
 "yer": "İbrâil (Brăila) Kalesi, Tuna'nın kuzey kıyısı, Eflak",
 "taraflar": [
  {
   "ad": "Rus Tuna ordusu",
   "komutan": "TDV'ye göre Kaminski; teslimi alan General Essen",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Osmanlı garnizonu",
   "komutan": "kaynakta adı verilmiyor",
   "kuvvet": "teslim anında 4.100 piyade, 1.100 atlı ve 260 top"
  }
 ],
 "oncesi": "1806'da başlayan Osmanlı-Rus savaşında Ruslar Eflak ve Boğdan'ı işgal etmiş, Tuna'nın sol yakasındaki Osmanlı kalelerini tek tek almaya çalışıyordu. 1809 baharında başkomutan Prozorovski kampanyaya Yergöğü ve İbrâil'le başladı, ama iki kaleye yapılan hücumlar da başarısız oldu. Yaz boyunca savaş Tuna'nın aşağı kesimine ve Silistre önüne kaydı; İsmail Kalesi teslim oldu.",
 "akis": "Yılın son harekâtı İbrâil'e yöneldi. TDV'nin anlatımına göre Rus kuvvetleri kaleyi sardı ve topa tuttu; asıl kırılmayı ise top değil açlık getirdi. Çevresiyle bağı kesilen garnizonun erzakı tükenince kale General Essen'e teslim edildi. Teslim anında içeride 4.100 piyade, 1.100 atlı ve 260 top bulunuyordu — yani kale ordusu dağılmadan, kuşatmanın uzunluğuyla düştü.",
 "sonuc": "İbrâil'in kaybıyla Tuna'nın kuzey kıyısındaki savunma hattının en güçlü halkalarından biri koptu; Rus ordusu ertesi yıl nehri geçip Silistre, Rusçuk ve Niğbolu'ya yürüdü. Savaş ancak 28 Mayıs 1812 Bükreş Antlaşması'yla bitti. Kale bir sonraki savaşta da aynı kaderi yaşayacaktı: 1828'de 4.000 muhafız ve 278 topla yeniden kuşatıldı, 23 Haziran 1828'de Rus işgaline geçti ve ancak Edirne Antlaşması'yla Osmanlı'ya dönüp Eflak Prensliği'ne bırakıldı.",
 "tartisma": "① Gün: TDV teslimi 2 Aralık'a koyar; Brockhaus-Efron ansiklopedisi 'ген. Эссеном Браилова, который сдался 21 ноября' der — eski (Jülyen) takvimle 21 Kasım, yeni takvimle 3 Aralık 1809; bir günlük fark vardır. ② Komuta: TDV kuşatmayı Kaminski'ye bağlar, Rus ansiklopedisi bu son harekâtı General Essen'in kuşatması olarak anar.",
 "kesinlik": "tartismali",
 "olay": [
  "1809-12-02|İbrâil"
 ],
 "kaynak": "TDV: ibrail (Mihai Maxim) · TDV: mahmud-ii--osmanli (Kemal Beydilli; Bükreş Antlaşması günü) · Энциклопедический словарь Брокгауза и Ефрона, «Турецкие войны России» (ru.wikisource.org/wiki/ЭСБЕ/Турецкие_войны_России)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV ibrail 200 (Kaminski, Essen, 2 Aralık, 4100/1100/260 okundu; hicrî gün yok). ESBE ham vikimetin (action=raw) 200, Rusça paragraf okundu. TDV mahmud-ii (yanlış slug arama sayfası; doğru slug mahmud-ii--osmanli 200). Madde t=1809-12-02 TDV ile uyumlu."
},

{
 "id": "savas-ruscuk-1811",
 "tur": "savas-hikayesi",
 "baslik": "1811 Tuna Seferi: Niğbolu, Silistre ve Rusçuk (Nisan-Temmuz 1811)",
 "kisa": "Kutuzov kaleleri havaya uçurarak geri çekildi, Rusçuk'ta kazandığı muharebeden sonra bile şehri yakıp yıkıp karşı yakaya geçti — bu bir tuzağın ilk hamlesiydi.",
 "tarih_metin": "Nisan 1811 Niğbolu kalesinin havaya uçurulup boşaltılması · Mayıs 1811 Silistre surlarının yıkılması · 4 Temmuz 1811 (eski takvimle 22 Haziran) Rusçuk Muharebesi ve ardından Rusçuk'un yıkılıp boşaltılması",
 "yer": "Tuna'nın güney yakası: Niğbolu, Silistre, Rusçuk ve Rusçuk'un güneyindeki Kadıköy mevzii",
 "taraflar": [
  {
   "ad": "Osmanlı ordusu",
   "komutan": "Sadrazam Lâz Ahmed Paşa",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Rus Tuna ordusu",
   "komutan": "Mihail Kutuzov",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "1810'da Ruslar Tuna'yı geçip güney yakadaki kaleleri almıştı: Silistre bombardıman altında düştü, Rusçuk uzun ve kanlı bir kuşatmadan sonra 26 Eylül 1810'da teslim oldu, Niğbolu Ekim 1810'da Rus eline geçti. 1811'de Tuna ordusunun başına geçen Kutuzov ise elindeki kuvvetle bütün bu kaleleri tutmayı gerçekçi bulmadı.",
 "akis": "Kutuzov kaleleri tutmak yerine yok etmeyi seçti: Niğbolu kalesinin büyük kısmı Nisan 1811'de havaya uçuruldu, Silistre surlarının yıkıldığı Mayıs 1811'de çara bildirildi. Ana kuvvetlerini Rusçuk ve Yergöğü'nde topladı. Haziran başında Şumnu'dan çıkan Sadrazam Lâz Ahmed Paşa 4 Temmuz'da (eski takvimle 22 Haziran) Rusçuk önünde Rusları vurdu, ama yenilerek güneydeki tahkimli Kadıköy mevziine çekildi. Kutuzov ise kazandığı muharebenin ardından Rusçuk'ta kalmayı tehlikeli buldu; şehrin surlarını ve Orta Çağ kalesini yıktırıp bütün ordusunu Tuna'nın sol yakasına geçirdi. Yıkım sırasında çıkan yangın şehri de harap etti; 1810'daki 38 camiden 12'si tamamen yok oldu.",
 "sonuc": "Kutuzov çekilince sadrazam Rusçuk'u yeniden ele geçirdi; Niğbolu ve Silistre de yıkık hâlde Osmanlı'ya kaldı. Osmanlı tarafı bunu bir zafer gibi gördü ve ordunun büyük kısmıyla Tuna'yı geçmeye hazırlandı — ama bu geri çekiliş, sonbaharda Slobozia'da kurulacak kuşatmanın zeminini hazırlıyordu.",
 "tartisma": "① Rusçuk muharebesini Rus kaynağı Kutuzov'un zaferi olarak anlatır; TDV (ruscuk) ise 1811 Haziranında 'ağır yenilgiler ve terslikler' sonrasında Rusların geri çekilmeye zorlandığını söyler. İki anlatım çekilişin sebebini farklı koyar. ② Niğbolu'nun 1810'da alınışını TDV Kutuzov'a bağlar; Rus ansiklopedisi Niğbolu'nun 1810 sonbaharında Kamenski II'nin Tuna boyunca ilerleyişinde direnmeden teslim olduğunu yazar (Kutuzov başkomutanlığa 1811'de geldi). ③ Niğbolu ve Silistre için kaynak yalnız ay verir (Nisan / Mayıs 1811).",
 "kesinlik": "tartismali",
 "olay": [
  "1811-04-01|Niğbolu",
  "1811-05-01|Silistre",
  "1811-07-04|Rusçuk"
 ],
 "kaynak": "TDV: nigbolu (Machiel Kiel) · TDV: silistre (Machiel Kiel) · TDV: ruscuk (Machiel Kiel) · Энциклопедический словарь Брокгауза и Ефрона, «Турецкие войны России» (ru.wikisource.org/wiki/ЭСБЕ/Турецкие_войны_России) · Fehmi İsmail, “Bükreş Andlaşmasının Müzakeresi 1811-1812”, Belleten 46/181 (Ocak 1982) (https://belleten.gov.tr/tam-metin/1705/tur; sadrazamın adı)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV nigbolu 200, silistre 200, ruscuk 200 (gövdeler okundu). TDV'de Lâz Ahmed Paşa maddesi yok (arama 0 başlık). ESBE ham vikimetin 200: 'В начале июня визирь выступил из Шумлы, а 22 атаковал русских у Рущука' (Jülyen; +12 = 4 Temmuz). Gün 1811-07-04 eski takvim dönüşümüyle uyumlu. Vikipedi yalnız aday bulmak için görüldü, dayanak değil."
},

{
 "id": "savas-slobozia-1811",
 "tur": "savas-hikayesi",
 "baslik": "Slobozia Kuşatması (Eylül-Aralık 1811)",
 "kisa": "Sadrazam ordusunu Tuna'nın öbür yakasına geçirdi; bir gece arkasına çıkan Rus kolu nehri kapattı ve ordu açlıkla baş başa kaldı.",
 "tarih_metin": "Tuna'yı geçiş 5 Eylül 1811 gecesi başladı (eski takvimle 24 Ağustos) · 13-14 Ekim 1811 Rus Markov kolunun arkadan baskını · 14 Ekim gecesi sadrazamın Rusçuk'a kaçışı · 15 Ekim'den itibaren fiilî mütareke · 8 Aralık 1811 resmî mütareke sözleşmesi",
 "yer": "Rusçuk'un karşısı, Tuna'nın sol (Eflak) yakasında Slobozia, ve Rusçuk önündeki sağ yaka",
 "taraflar": [
  {
   "ad": "Osmanlı ordusu",
   "komutan": "Sadrazam Lâz Ahmed Paşa · sonra Çapanoğlu (Rus kaynağında 'Чапан-паша')",
   "kuvvet": "Rus kaynağına göre sol yakaya geçen yaklaşık 36.000, sağ yakada bırakılan yaklaşık 30.000"
  },
  {
   "ad": "Rus Tuna ordusu",
   "komutan": "Mihail Kutuzov · arkadan çıkan kolun komutanı General Markov",
   "kuvvet": "Markov kolu 5.000 piyade, 2.500 süvari, 38 top; ana ordu için kaynakta sayı yok"
  }
 ],
 "oncesi": "Temmuz'da Kutuzov Rusçuk'u yıkıp Tuna'nın sol yakasına çekilmişti. Sadrazam Lâz Ahmed Paşa bunu Rus zaafı sayıp nehri geçmeye karar verdi; amaç Kutuzov'u yenmek ve Vidin'den gelecek İsmail Bey ordusuyla birleşip Bükreş'i almaktı. Eylül'de Slobozia adasını ani bir baskınla aldı ve büyük bir kuvvetle sol yakaya geçti; askerler hemen siper kazdı.",
 "akis": "İsmail Bey'in Kalafat'tan Yergöğü'ne yol açma girişimleri iki kez püskürtüldü. Kutuzov ise cüretkâr bir plan uyguladı: Ekim başında General Markov'un kolu sallarla gizlice sağ yakaya geçti, şafakta Rusçuk önünde kalan Osmanlı birliklerine baskın yaptı; paniğe kapılan askerler Rusçuk'a ve Razgrad'a dağıldı. Markov'un sağ yakanın yüksek sırtlarına kurduğu toplar sol yakadaki sadrazam ordugâhını dövmeye başladı. Sadrazam mütareke istedi ve cevap beklemeden 14 Ekim gecesi bir kayıkla Rusçuk'a geçti; Rus Tuna filosu ertesi gün iki yaka arasındaki bağı kesti. Sol yakada kalan ordu, erzakı tükenmiş hâlde kuşatma içinde kaldı.",
 "sonuc": "15 Ekim'den beri fiilen yürürlükte olan mütarekenin resmî metni ancak 8 Aralık'ta imzalandı; kuşatılan Osmanlı askerlerine savaş esiri muamelesi yapılmayacaktı. Ana ordunun erimesi Bâbıâli'yi barışa razı etti; barış görüşmeleri uzun süre sonuç vermedi, ama Napolyon'un Rusya'ya karşı yeni savaş hazırlıkları Rusya'yı acele ettirdi ve savaş 28 Mayıs 1812 Bükreş Antlaşması'yla sona erdi.",
 "tartisma": "Tarihler: Rus ansiklopedisi Jülyen takvimiyle 1 Ekim (Markov'un geçişi), 2 Ekim (baskın) ve 3 Ekim (filonun bağı kesmesi) der; bunlar miladî 13-15 Ekim'e denk gelir ve Fehmi İsmail'in verdiği 13 ve 14 Ekim geceleriyle uyuşur. Kuşatılan ordunun teslim gününü okunan kaynaklar ayrıca vermiyor; Fehmi İsmail resmî sözleşmeyi 8 Aralık'a koyar.",
 "kesinlik": "tartismali",
 "olay": [
  "1811-10-14|Slobozia"
 ],
 "kaynak": "Fehmi İsmail, “Bükreş Andlaşmasının Müzakeresi 1811-1812”, Belleten 46/181 (Ocak 1982), TTK (https://belleten.gov.tr/tam-metin/1705/tur) · Энциклопедический словарь Брокгауза и Ефрона, «Турецкие войны России» (ru.wikisource.org/wiki/ЭСБЕ/Турецкие_войны_России) · TDV: mahmud-ii--osmanli (Kemal Beydilli; Bükreş Antlaşması günü) · TDV: galib-pasa-mehmed-said (Orhan F. Köprülü; barış görüşmeleri)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV arama 'Slobozia' 0 sonuç; 'Yergöğü 1811' → ruscuk, galib-pasa, yusuf-ziya-pasa (Slobozia yok); bukres-antlasmasi = arama sayfası (ölü slug); TDV'de Lâz Ahmed Paşa maddesi yok. Belleten tam metin 200 (ilk 100k karakter okundu). ESBE ham vikimetin 200. TARIH-CELISKI: madde t=1811-10-25, kaynak kuşatmanın kapanışını 13-15 Ekim 1811'e (miladî) koyuyor; 25 Ekim'i destekleyen kaynak bulunamadı. Napolyon'un savaş hazırlıklarının Rusya'yı Bükreş'i imzalamaya zorladığı bilgisi TDV galib-pasa-mehmed-said'den."
},

{
 "id": "savas-hicaz-vehhabi-1811-1815",
 "tur": "savas-hikayesi",
 "baslik": "Mehmed Ali'nin Vehhâbî Seferi: Safra Bozgunu ve Bisel Zaferi (1811-1815)",
 "kisa": "Mısır ordusu Hicaz'daki ilk büyük çarpışmada dar bir vadide neredeyse yok oldu; dört yıl sonra Taif'in doğusunda tabloyu tersine çevirdi.",
 "tarih_metin": "Eylül 1811 sefere çıkış · Ekim 1811 Yenbu · Safra bozgunu: kaynaklara göre 1811 sonu - 1812 başı · Kasım 1812 Medine, Ocak 1813 Mekke · Bisel (Basal) Muharebesi 20 Ocak [1815] · Haziran 1815 Tosun Paşa ile Abdullah b. Suûd arasında antlaşma",
 "yer": "Hicaz: Yenbu-Medine yolu üzerindeki Safra vadisi; Taif'in doğusunda Bisel (Basal)",
 "taraflar": [
  {
   "ad": "Mısır (Osmanlı) kuvvetleri",
   "komutan": "Tosun Paşa · 1813'ten sonra bizzat Kavalalı Mehmed Ali Paşa",
   "kuvvet": "ilk sefer kuvveti 3.500 (Değirmenci) / Safra'ya giren ordu 8.000 (Lutsky) — kaynaklar ayrışıyor"
  },
  {
   "ad": "Birinci Suûdî-Vehhâbî Devleti",
   "komutan": "Suûd b. Abdülazîz; 1814'ten sonra oğlu Abdullah; Bisel'de Abdullah'ın kardeşi Faysal",
   "kuvvet": "Bisel'de 30.000 (yalnız Lutsky)"
  }
 ],
 "oncesi": "Vehhâbîler Mekke ve Medine'yi alıp hutbede padişahın adını okutmaz olmuş, hac yollarını tehdit ediyordu. Bağdat ve Şam valileri bir şey yapamayınca II. Mahmud işi Mısır valisi Mehmed Ali Paşa'ya havale etti. Mehmed Ali önce iç cepheyi temizledi: oğlu Tosun'un Cidde valiliği ve sefer kumandanlığı şerefine 1 Mart 1811'de Kahire Kalesi'nde verdiği davette Kölemen beylerini öldürttü. Eylül 1811'de ordu yola çıktı; piyade denizden, süvari karadan gitti ve Ekim'de Yenbu limanı alındı.",
 "akis": "Medine'ye yürüyen ordu Safra vadisinde Vehhâbîlerin ani baskınına uğradı ve ağır bir bozguna düştü; Lutsky'ye göre 8.000 kişiden 5.000'i öldü. Değirmenci yenilgide, genç Tosun'u ciddiye almayan kumandanların emre uymamasının payını vurgular. Mehmed Ali yeni bir ordu kurdu: Medine Kasım 1812'de, Mekke, Taif ve Cidde Ocak 1813'te geri alındı. Eylül 1813'te Mehmed Ali bizzat Hicaz'a geçti; Tosun Türebe'de yenildi, ama takviyelerle toparlandı. 20 Ocak'ta Taif'in doğusundaki Bisel'de (Basal) Mısır ordusu, Abdullah'ın kardeşi Faysal'ın kumandasındaki güney ordusunu ezdi ve Vehhâbîlerin güneydeki gücünü kırdı.",
 "sonuc": "1815 baharında Tosun Paşa üst üste kazandığı başarılarla Abdullah b. Suûd'u barışa zorladı; Haziran 1815 antlaşması Kasım bölgesini Vehhâbîlere bırakıyordu, ama Mehmed Ali şartları reddetti ve antlaşma geçersiz kaldı. Mehmed Ali Haziran 1815'te Mısır'a döndü. Tosun'un ölümünden sonra sefer İbrahim Paşa'ya geçti; Dir'iye Nisan 1818'de kuşatıldı ve beş ay sonra düştü.",
 "tartisma": "① Safra'nın tarihi: Lutsky Ocak 1812, Değirmenci '1812 yılı başları' der; TDV bu çarpışmayı hiç anmaz. ② Bisel: okunan kaynaklardan yalnız Lutsky muharebeyi adıyla anar ve 20 Ocak gününü verir; yıl anlatının sırasından (1815) çıkar. 30.000 kişilik Vehhâbî ordusu rakamı da yalnız onundur. ③ Sefer kuvveti: Değirmenci 3.500, Lutsky Safra'daki ordu için 8.000 der.",
 "kesinlik": "tartismali",
 "olay": [
  "1812-01-01|Safra",
  "1815-01-20|Bisel"
 ],
 "kaynak": "TDV: vehhabilik (Mehmet Ali Büyükkara) · TDV: kavalali-mehmed-ali-pasa (Muhammed Hanefi Kutluoğlu) · TDV: ibrahim-pasa-kavalali (Muhammed Hanefi Kutluoğlu) · Kevser Değirmenci, “Vehhâbî İsyanının Bastırılmasında ve Sonrasında Mekke Muhafızı Hasan Paşa'nın Faaliyetleri”, Sosyal Bilimler Dergisi, sayı 49 (Temmuz 2016), s. 144 vd. (https://dergipark.org.tr/tr/download/article-file/264311) · Vladimir B. Lutsky, Modern History of the Arab Countries (1969), Bölüm VI 'The Egyptian Conquest of Arabia' (https://www.marxists.org/subject/arab-world/lutsky/ch06.htm)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV vehhabilik 200 (yalnız 1811 başlangıç, 1813 Mekke-Medine, 1818 Dir'iye; Safra/Bisel YOK). TDV tosun-pasa = arama sayfası (madde yok). TDV arama 'Bisel' ve 'Safra Tosun' sonuçsuz. Değirmenci PDF 200 (pypdf); dergi künyesinde üniversite adı PDF'te okunamadı. Lutsky marxists.org 200 (Sovyet akademik eseri, İngilizce çevirisi; yayınevi sayfada yazmıyor). Arıkan, Eskiyeni 49 (2023) 'Kavalalı Haziran 1815'te Mısır'a dönmüştür' ile teyit. TARIH-CELISKI: madde t=1811-12-01 (Safra), kaynaklar Ocak 1812 / 1812 başı."
},

{
 "id": "savas-osmanli-iran-1820-1823",
 "tur": "savas-hikayesi",
 "baslik": "Osmanlı-İran Savaşı (1820/1821-1823)",
 "kisa": "Yunan isyanıyla uğraşan imparatorluğa doğudan Kaçar veliahdı yüklendi: Kars ve Bayezid düştü, Erzurum kuşatıldı — ama savaşı bitiren antlaşmada tek karış toprak verilmedi.",
 "tarih_metin": "Başlangıç kaynaklara göre Eylül 1820 (Azap) ya da 1821 sonbaharı (TDV) · I. Erzurum Antlaşması 28 Temmuz 1823 (temessüklerin imzası; onay 1824'e sarktı)",
 "yer": "Doğu Anadolu (Bayezid, Kars, Erzurum) ve Irak (Süleymaniye, Kerkük, Bağdat eyaleti)",
 "taraflar": [
  {
   "ad": "Osmanlı Devleti",
   "komutan": "Erzurum valisi ve Şark seraskeri Mehmed Emin Rauf Paşa (barışın da murahhası); Irak cephesinde Bağdat valisi Davud Paşa",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Kaçar İranı",
   "komutan": "Veliaht Abbas Mirza",
   "kuvvet": "kaynakta 'büyük bir askerî kuvvet'; sayı verilmiyor"
  }
 ],
 "oncesi": "İran Rusya'ya kaptırdığı toprakların acısını Osmanlı sınırından çıkarmak istiyordu; Rusya da İran'ı Osmanlı'ya karşı kışkırtıyordu. Sınırda konar-göçer Sepki ve Haydaranlı aşiretlerinin çıkardığı karışıklıklar, İranlı hacı ve tüccarlara Osmanlı yerel yöneticilerinin baskısı ilişkileri gerdi. Bahane hazırdı: Şah'ın hacca giden hanımının kervanı Osmanlı görevlilerince aranmıştı. Osmanlı o sırada Rum isyanının yarattığı siyasî ve askerî bunalımın içindeydi.",
 "akis": "Abbas Mirza büyük bir orduyla sınırı geçti, Bayezid ve Kars'ı aldı ve Erzurum'u kuşattı. Savaş iki ana cepheye yayıldı: merkezi Erzurum olan Şark cephesi ve merkezi Bağdat olan Irak cephesi. TDV'nin anlatımına göre İran askerleri Kuzey Irak'a ve Bağdat eyaletine geniş bir saldırı yaptı, Süleymaniye'yi ele geçirdi, Kerkük'ü kuşattı. Osmanlı'nın direnişi ve Azerbaycan'ı saran salgın hastalık İran ordusunu sonunda geri çekilmeye zorladı.",
 "sonuc": "Sahada üstün olan İran'dı, ama masada kazanan Osmanlı oldu: Rusya'nın güçlenmesini istemeyen İngiltere'nin baskısı ve Rauf Paşa'nın diplomasisiyle toprak verilmeyen bir barış yapıldı. Erzurum'da imzalanan antlaşmaya göre İran kuvvetleri işgal ettikleri yerlerden altmış gün içinde çekilecekti. Ancak iki tarafın elinde farklı nüshalar kaldı; aşiret ve sınır meseleleri çözülmedi ve 1847'deki ikinci Erzurum antlaşmasına kadar uzandı.",
 "tartisma": "① Başlangıç: TDV (iran) Abbas Mirza'nın sınırı '1821 sonbaharında' geçtiğini söyler; Azap ise Osmanlı arşiv belgelerine dayanarak İran saldırılarını Eylül 1820'den itibaren Bayezid ve Kars üzerinden başlatır ve savaşı '1820-1823' diye adlandırır. ② Bağdat: TDV 'Süleymaniye ve Bağdat işgal edildi' der; okunan Azap makalesi Bağdat merkezli bir cepheden söz eder ama şehrin işgalini anmaz. ③ Antlaşma günü: 28 Temmuz 1823 literatürde kabul gören gündür (murahhasların temessük imzası); padişah ve şah onayları 1824'e sarktı.",
 "kesinlik": "tartismali",
 "olay": [
  "1821-01-01|İran"
 ],
 "kaynak": "TDV: iran (Osmanlı-İran münasebetleri bölümü) · Aziz Tekdemir, “XIX. Yüzyılın İlk Çeyreğinde Osmanlı-İran İhtilafları ve 1821-1823 Savaşı”, Karadeniz Uluslararası Bilimsel Dergi 4 (2009) (yalnız özeti okundu) · Eralp Yaşar Azap, “I. Erzurum Antlaşması Metninde Yapılan Tahrifat ve Antlaşmanın Uygulanmasında Yarattığı Sorunlar”, Tarih Dergisi 77 (2022/2), s. 213-257, DOI 10.26650/iutd.1086380 (https://dergipark.org.tr/tr/download/article-file/2303983)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV iran 200, 100k-200k karakter aralığında pasaj okundu (bölüm yazarı WebFetch özetinde görünmedi). TDV abbas-mirza 200 (savaş yok). TDV erzurum-antlasmalari = arama sayfası (ölü slug). Azap PDF 200 (pypdf), s. 217 giriş + dipnot 5-6 okundu. Tekdemir 2009 (Karadeniz dergisi) PDF metin vermedi (taranmış). TARIH-CELISKI: madde t=1821-01-01; TDV 1821 sonbaharı, Azap Eylül 1820 — 1 Ocak 1821 iki kaynağa da uymuyor."
},

{
 "id": "savas-prut-1828",
 "tur": "savas-hikayesi",
 "baslik": "1828-1829 Osmanlı-Rus Savaşı'nın Başlaması: Rusların Prut'u Geçişi (7 Mayıs 1828)",
 "kisa": "Elinde Boğaz'da yalnız on gemisi kalmış, nizamî askeri seksen bini geçmeyen bir imparatorluğa Rus ordusu Prut'tan girdi; yolun sonu Edirne oldu.",
 "tarih_metin": "26 Nisan 1828 Rusya'nın savaş ilanı · 7 Mayıs 1828 (eski takvimle 25 Nisan) 6. Piyade Kolordusunun Memleketeyn'e girişi · 19 Haziran 1828 (eski 7 Haziran) İbrâil'in teslimi · 22 Ağustos 1829 Edirne · 14 Eylül 1829 Edirne Antlaşması",
 "yer": "Prut nehri, Eflak ve Boğdan (Memleketeyn), Aşağı Tuna",
 "taraflar": [
  {
   "ad": "Rus ordusu",
   "komutan": "Mareşal Wittgenstein; Kafkas cephesinde Paskeviç; öncüde General Geismar",
   "kuvvet": "Avrupa cephesine üç piyade ve bir süvari kolordusu, toplam 100.000'e kadar; Asya cephesine yaklaşık 30.000"
  },
  {
   "ad": "Osmanlı Devleti",
   "komutan": "II. Mahmud",
   "kuvvet": "1828 baharında bütün imparatorlukta en çok 190.000, bunun yalnız yaklaşık 80.000'i nizamî; donanmadan Boğaz'da yalnız 10 gemi kalmıştı"
  }
 ],
 "oncesi": "1828 baharında Osmanlı silahlı kuvvetleri bütün imparatorluğa dağılmış en çok 190.000 kişiydi ve bunun ancak 80.000 kadarı nizamî askerdi; donanmadan geriye Boğaz'da yalnızca on gemi kalmıştı. Rusya, Bâbıâli'nin yayımladığı bir bildiriyi bahane ederek 26 Nisan 1828'de savaş açtı. Rus planına göre üs Besarabya olacak, Memleketeyn yalnız düzeni sağlamak ve Avusturya'ya karşı sağ kanadı korumak için tutulacak, asıl ordu Aşağı Tuna'yı geçip Varna ve Şumnu üzerinden Balkanları aşacaktı.",
 "akis": "7 Mayıs'ta (Rus takvimiyle 25 Nisan) 6. Piyade Kolordusu Prut'u geçerek Eflak ve Boğdan'a girdi; öncüsü General Geismar kumandasında Küçük Eflak'a yöneldi. 7. Kolordu birkaç gün sonra İbrâil'i kuşattı. 3. Kolordunun Tuna'yı geçişi, sular altındaki ovada yol yapmak gerektiği için bir ay gecikti; geçiş çarın gözü önünde gerçekleşti ve İsakçı teslim oldu. İbrâil'e yapılan hücum püskürtüldü, ama Maçin düşüp kale yalnız kalınca İbrâil de teslim oldu.",
 "sonuc": "Savaş iki yıl sürdü: Ruslar Tuna'yı aşıp İbrâil'i, Anadolu'da Kars ve Ahıska'yı aldı; Silistre'yi alan Diebitsch Balkanları geçti ve 22 Ağustos 1829'da direnişle karşılaşmadan Edirne'ye girdi. Antlaşma 14 Eylül 1829'da Edirne'de imzalandı. Memleketeyn, savaş tazminatı ödenene kadar -Eflak için 1834'e kadar- Rus işgalinde kaldı.",
 "tartisma": "İbrâil'in teslim günü: Rus ansiklopedisi 7 Haziran (eski takvim) = 19 Haziran 1828 verir; TDV (ibrail) şehrin 23 Haziran 1828'de Rus işgaline geçtiğini söyler. Prut geçiş günü yalnız Rus ansiklopedisinde var ('25 апр. 6-й пех. корпус вступил в княжества'); TDV maddeleri olaya gün vermez.",
 "kesinlik": "kesin",
 "olay": [
  "1828-05-07|Prut"
 ],
 "kaynak": "TDV: edirne-antlasmasi (Şerafettin Turan) · TDV: ibrail (Mihai Maxim) · TDV: bogdan (Abdülkadir Özcan) · TDV: eflak (Kemal Karpat) · Энциклопедический словарь Брокгауза и Ефрона, «Турецкие войны России», bölüm 5 «Первая Т. война Николая I (1828—29)» (ru.wikisource.org/wiki/ЭСБЕ/Турецкие_войны_России)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV edirne-antlasmasi 200 (26 Nisan 1828 savaş ilanı, 22 Ağustos 1829 Edirne, 15 Rebîülevvel 1245 / 14 Eylül 1829). TDV mahmud-ii--osmanli 200 (Prut yok; WebFetch özeti Edirne barışını '14 Ağustos 1829' verdi — muhtemelen özet hatası, edirne-antlasmasi maddesi 14 Eylül diyor; kartta 14 Eylül kullanıldı). TDV memleketeyn 200 (yalnız tanım). ESBE ham vikimetin 200: 25 Nisan Jülyen +12 = 7 Mayıs; madde t ile uyumlu."
},

{
 "id": "savas-ibrahim-pasa-suriye-anadolu-1831-1833",
 "tur": "savas-hikayesi",
 "baslik": "Kavalalı İbrahim Paşa'nın Suriye-Anadolu Seferi (Kasım 1831 - Mayıs 1833)",
 "kisa": "Altı ay Akkâ surlarında bekleyen Mısır ordusu, sonra bir yazda Suriye'yi geçti, Konya'da sadrazamı esir aldı ve Kütahya'ya kadar ilerledi.",
 "tarih_metin": "2 Kasım 1831 sefer emri · 8 Kasım Yafa'ya çıkış · 26 Kasım 1831 Akkâ kuşatması · 14 Nisan 1832 Zerrâa · 27 Mayıs 1832 Akkâ'nın teslimi · 8 Temmuz 1832 Humus · 29 Temmuz 1832 Belen · 21 Aralık 1832 Konya · 2 Şubat 1833 Kütahya · 3-6 Mayıs 1833 Kütahya uzlaşması",
 "yer": "Filistin (Yafa, Akkâ), Suriye (Humus), Amanos dağlarında Belen geçidi, Toroslar, Konya, Kütahya",
 "taraflar": [
  {
   "ad": "Mısır ordusu",
   "komutan": "Kavalalı İbrahim Paşa (babası Mehmed Ali Paşa adına)",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Osmanlı ordusu",
   "komutan": "Akkâ'da Osmanlı muhafızları (komutan adı okunan kaynaklarda yok) · Humus'ta Halep valisi Mehmed Paşa · Belen'de Ağa Hüseyin Paşa · Konya'da Sadrazam Reşid Mehmed Paşa",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Mısır'da güçlü bir iktidar kuran vali Mehmed Ali Paşa'nın genişleme emelleri 1830'ların başında merkezî hükümetle açık bir çatışmaya dönüştü. 2 Kasım 1831'de sefer emri verildi; oğlu İbrahim Paşa 8 Kasım'da Yafa'ya çıktı ve 26 Kasım'da Napolyon'u 1799'da durduran Akkâ'yı karadan ve denizden kuşattı.",
 "akis": "Akkâ altı ay direndi; Mısır birlikleri 14 Nisan 1832'de Zerrâa'da Osmanlı kuvvetleriyle ilk kez karşılaşıp onları yendi ve kale 27 Mayıs 1832'de harap hâlde teslim alındı. İbrahim Paşa 8 Temmuz'da Humus'ta Halep valisi Mehmed Paşa'nın öncü ordusunu, 29 Temmuz'da Belen geçidinde Ağa Hüseyin Paşa'nın ordusunu yendi; Antakya'dan Adana'ya Çukurova Mısır'a açıldı. Toroslar'ı aşan Mısır ordusu Konya'ya yürürken hiçbir direnişle karşılaşmadı ve 21 Aralık 1832'de Konya önünde büyük bir zafer kazanıp Sadrazam Reşid Mehmed Paşa'yı esir aldı.",
 "sonuc": "Sadrazamın esir düşmesinden sonra İbrahim Paşa 2 Şubat 1833'te Kütahya'ya ulaştı. Sadrazamı ve ordusu kaybedilmiş olan İstanbul pazarlığa oturmak zorunda kaldı. Mustafa Reşid Bey Kütahya'ya gönderildi; İngiltere ve Fransa'nın baskısıyla Bâbıâli Mısır'ın şartlarını 3 Mayıs 1833'te kabul etti ve karar 6 Mayıs fermanıyla duyuruldu. 'Kütahya Antlaşması' denir, ama ortada karşılıklı imzalanmış bir antlaşma metni yoktur.",
 "tartisma": "① Akkâ kuşatmasının başlangıcı TDV'de 26 Kasım 1831'dir. ② Mustafa Reşid Bey'in Kütahya'ya gönderilişi TDV'nin İbrahim Paşa maddesinde 29 Mart, Mehmed Ali Paşa maddesinde 30 Mart 1833 olarak geçer. ③ Gülek Boğazı'nın geçilişi okunan TDV maddelerinde günüyle yer almıyor.",
 "kesinlik": "tartismali",
 "olay": [
  "1831-11-26|Akkâ",
  "1832-07-08|Humus",
  "1832-07-29|Belen",
  "1832-09-13|Gülek",
  "1833-02-02|Kütahya"
 ],
 "kaynak": "TDV: ibrahim-pasa-kavalali (Muhammed Hanefi Kutluoğlu) · TDV: kavalali-mehmed-ali-pasa (Muhammed Hanefi Kutluoğlu) · TDV: akka (Feridun Emecen) · TDV: mahmud-ii--osmanli (Kemal Beydilli)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV ibrahim-pasa-kavalali 200 (2 Kasım, 8 Kasım, 26 Kasım, 27 Mayıs, 8 Temmuz, 29 Temmuz 1832, 21 Aralık 1832, 29 Mart, 3 ve 6 Mayıs 1833). TDV kavalali-mehmed-ali-pasa 200 (Zerrâa 14 Nisan 1832, Akkâ 27 Mayıs, Konya'ya dirençsiz yürüyüş, 21 Aralık, 30 Mart 1833). TDV mahmud-ii--osmanli 200 (Kütahya 2 Şubat 1833). TDV akka 200 (altı ay, harap hâlde teslim). TDV icel 200: 1832-33 Mısır işgali ve Gülek HİÇ YOK — maddenin 'icel (TDV)' dayanağı bu olay için boş; Gencer 2016 makalesi bulunamadı. Abdullah Paşa adı TDV'de geçmiyor (WebFetch 'not mentioned'); komutan alanında bırakıldı ama okunan kaynakta yok — istenirse silinsin. Mevhibe Savaş metni (yerel gazete) kullanılmadı. TARIH-CELISKI: madde t=1831-11-27, TDV 26 Kasım 1831."
},

{
 "id": "savas-dogu-akdeniz-1840",
 "tur": "savas-hikayesi",
 "baslik": "1840 Doğu Akdeniz Harekâtı: Beyrut ve Akkâ (Eylül-Kasım 1840)",
 "kisa": "Sekiz yıl önce İbrahim Paşa'nın altı ayda alabildiği Akkâ, İngiliz-Avusturya-Osmanlı filosunun tek günlük bombardımanına dayanamadı.",
 "tarih_metin": "15 Temmuz 1840 Londra Antlaşması · 10 Eylül 1840 müttefiklerin Beyrut'a asker çıkarması · 3 Kasım 1840 Akkâ bombardımanı · 4 Kasım 1840 Akkâ'nın düşüşü · 27 Kasım 1840 Mehmed Ali'nin çekilme emri",
 "yer": "Suriye-Lübnan kıyısı: Beyrut, Sayda, Sur, Hayfa, Akkâ",
 "taraflar": [
  {
   "ad": "Osmanlı-İngiliz-Avusturya müttefik donanması",
   "komutan": "okunan kaynaklarda müttefik komutanın adı verilmiyor",
   "kuvvet": "kaynakta sayı verilmiyor; Akkâ'da gemiler surdan yaklaşık 400 m mesafeden ateş etti"
  },
  {
   "ad": "Mısır kuvvetleri",
   "komutan": "Kavalalı İbrahim Paşa (babası Mehmed Ali Paşa adına)",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "1831'den beri Suriye, Beyrut dahil, Mehmed Ali Paşa'nın elindeydi; 1839'da Osmanlı ile yeniden savaşa tutuşması Avrupa'yı, özellikle İngiltere'yi harekete geçirdi. 15 Temmuz 1840'ta Bâbıâli, İngiltere, Rusya, Avusturya ve Prusya Londra Antlaşması'nı imzaladı; Mehmed Ali şartları kabul etmeyince Suriye kıyıları İngiliz ve Avusturya desteğiyle ablukaya alındı.",
 "akis": "Müttefik kuvvetler 10 Eylül 1840'ta Beyrut'a asker çıkardı; Osmanlı, İngiliz ve Avusturya gemilerinin bombardımanı şehri harabeye çevirdi. Sayda ve Sur da kısa sürede düştü. Sıra Akkâ'ya geldi: 3 Kasım'da müttefik filo kaleyi dövdü. İngiliz gemilerinin keşfi ve ustaca manevraları savunucuları yanılttı; gemiler sur dibine, yaklaşık 400 metreye kadar sokulup ateş açtı. Bombardımandan üç gülle bugün hâlâ El-Şazeliye Camii'nin denize bakan duvarında gömülüdür. Ertesi gün, 4 Kasım'da Akkâ düştü ve yeniden Osmanlı hâkimiyetine girdi.",
 "sonuc": "Kıyı kalelerini birer birer kaybeden İbrahim Paşa'nın Suriye'de tutunma imkânı kalmadı; Mehmed Ali 27 Kasım 1840'ta oğluna kuvvetlerini geri çekme emri verdi. Uzun bir pazarlığın ardından 24 Mayıs 1841 tarihli fermanla Mısır valiliği ona ve ailesine bırakıldı; genişleme emelleri ise İngiltere'nin karşı çıkmasıyla sonuçsuz kaldı.",
 "tartisma": "① Beyrut: TDV (ibrahim-pasa-kavalali) müttefik çıkarmasını 10 Eylül'e koyar. ② Akkâ: bombardıman 3 Kasım (Kahanov ve diğerleri), şehrin düşüşü 4 Kasım (TDV kavalali-mehmed-ali-pasa) — iki gün iki ayrı aşamayı tarihliyor. Cephaneliğin infilakı okunan kaynaklarda geçmiyor.",
 "kesinlik": "tartismali",
 "olay": [
  "1840-09-10|Beyrut",
  "1840-11-03|Akkâ"
 ],
 "kaynak": "TDV: ibrahim-pasa-kavalali (Muhammed Hanefi Kutluoğlu) · TDV: kavalali-mehmed-ali-pasa (Muhammed Hanefi Kutluoğlu) · TDV: beyrut (Davut Dursun) · TDV: akka (Feridun Emecen) · TDV: misir (6. bölüm, Hilal Görgün; 1841 fermanı) · Yaacov Kahanov, Eliezer Stern, Deborah Cvikel, Yoav Me-Bar, “Between Shoal and Wall: The Naval Bombardment of Akko, 1840”, The Mariner's Mirror 100/2 (2014), s. 147-167, DOI 10.1080/00253359.2014.901699",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TDV ibrahim-pasa-kavalali 200 (10 Eylül Beyrut çıkarması, 27 Kasım çekilme emri). TDV kavalali-mehmed-ali-pasa 200 ('4 Kasım'da Akkâ düştü'). TDV beyrut 200 (bombardıman günü yok). TDV akka 200 (gün yok). Kahanov et al. yalnız özet (cris.iucc.ac.il 200) okundu, tam metin değil. London Gazette PDF taranmış görüntü, okunamadı. TARIH-CELISKI: madde t=1840-09-11 (Beyrut bombardımanı ve çıkarma), TDV çıkarma 10 Eylül 1840 — bombardımanın 11 Eylül olduğunu gösteren okunmuş kaynak yok. Madde t=1840-11-03 bombardıman günü olarak Kahanov ile uyumlu; 'iki saatte düştü' ve 'cephanelik infilakı' ifadeleri okunan kaynaklarla teyit edilemedi."
},

{
 "id": "savas-ilirya-dalmacya-1813",
 "tur": "savas-hikayesi",
 "baslik": "Avusturya'nın İlirya Eyaletleri'ni ve Dalmaçya'yı Geri Alması (1813)",
 "kisa": "Napolyon'un Adriyatik'teki 'İlirya'sı 1813 sonunda Avusturya ordusunun önünde dağıldı; Osmanlı Bosna'sının komşusu yeniden Habsburglar oldu.",
 "tarih_metin": "1813 sonu (kaynak yıl ve 'yıl sonu' düzeyinde veriyor); kesin devir: 30 Mayıs 1814 Paris Barışı ve 9 Haziran 1815 Viyana Kongresi hükümleri",
 "yer": "Doğu Adriyatik: İstirya, Hırvatistan'ın Sava güneyi, Dalmaçya (Zadar, Knin), Dubrovnik ve Kotor; Ljubljana ve Trieste",
 "taraflar": [
  {
   "ad": "Avusturya İmparatorluğu",
   "komutan": "Dalmaçya'da General Franjo Ksaver Tomašić",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Napolyon Fransası'nın İlirya Eyaletleri yönetimi",
   "komutan": "kaynakta adı verilmiyor",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Napolyon Fransası'nın doğu Adriyatik'teki toprakları -Dubrovnik, eski Venedik Dalmaçyası ve Venedik İstiryası dahil- genel valilik merkezi Ljubljana olan İlirya Eyaletleri'nde toplanmıştı. Böylece Osmanlı Bosna'sının batı ve güney komşusu birkaç yıllığına Fransa oldu; Bosna sınırının öte yakasında Habsburg yerine Fransız idaresi vardı. 1811'de yönetim yeniden düzenlendi; Dubrovnik ve İstirya ayrı sivil eyaletler hâline getirildi.",
 "akis": "1813 yılının sonlarına doğru Avusturya ordusu İlirya Eyaletleri'ni işgal etti. Dalmaçya'da General Tomašić kumandasındaki Avusturya birlikleri Knin'i ve Zadar'ı aldı. Fransız döneminde Ljubljana'da bulunan genel valilik merkezi, Avusturya idaresinde Trieste'ye taşındı. Böylece Napolyon'un Adriyatik'te birkaç yıl süren varlığı, Avrupa'daki büyük savaşın kaderiyle birlikte sona ermiş oldu.",
 "sonuc": "Fiilî işgal, 30 Mayıs 1814 Paris Barışı ve 9 Haziran 1815 Viyana Kongresi kararlarıyla hukukileşti: Avusturya doğu Adriyatik'teki bütün eski topraklarını geri aldı. Dalmaçya Zadar, Split, Dubrovnik ve Kotor olmak üzere dört okruge ayrıldı. Bundan böyle Osmanlı Bosna-Hersek'i karadan ve kıyıdan tek bir komşuyla, Habsburglarla çevrili kalacaktı; Fransız arası, haritada yalnızca birkaç yıllık bir parantez olarak kaldı.",
 "tartisma": "Kaynak olayları ay ve gün düzeyinde vermiyor ('potkraj 1813' = 1813 sonları); haritadaki geçişin günü yaklaşıktır.",
 "kesinlik": "kesin",
 "olay": [
  "1813-01-01|İlirya"
 ],
 "kaynak": "Hrvatska enciklopedija (Leksikografski zavod Miroslav Krleža): «Ilirske pokrajine» (https://www.enciklopedija.hr/clanak/ilirske-pokrajine) ve «Dalmacija» (https://www.enciklopedija.hr/clanak/dalmacija) — TDV olayı kapsamıyor (Osmanlı dışı)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "enciklopedija.hr ilirske-pokrajine 200 ('Potkraj 1813. austrijska je vojska zaposjela Ilirske pokrajine'; Paris 30 Mayıs 1814; Viyana 9.VI.1815; Ljubljana → Trst; 1811 Dubrovnik ve İstirya ayrı eyalet). dalmacija 200 ('austrijske postrojbe generala Franje Ksavera Tomašića zauzele su Knin i Zadar'; dört okruga). TDV aranmadı (Osmanlı dışı). Madde t=1813-01-01 yıl hassasiyeti; kaynak '1813 sonu' diyor — haritada geçiş en erken bu günle gösteriliyorsa yıl-başı genişlemesi kaynakla çelişir, Emre'ye bildirilecek (TARIH-CELISKI listesinde). Kart kısa tutuldu; '1809 Schönbrunn' gibi günler okunan kaynakta olmadığı için yazılmadı."
},

{
 "id": "savas-memleketeyn-isgali-1853",
 "tur": "savas-hikayesi",
 "baslik": "1853 Memleketeyn İşgali: Menşikov Krizi ve Prut Geçişi (Şubat-Ekim 1853)",
 "kisa": "Kutsal yerler için gelen bir elçinin kapıyı çarpıp gitmesinden altı hafta sonra Rus ordusu Prut'u geçti — savaş ilan etmeden.",
 "tarih_metin": "28 Şubat 1853 Menşikov İstanbul'da · 21 Mayıs 1853 Menşikov'un ayrılışı · 3 Temmuz 1853 (eski takvimle 21 Haziran) Rus öncüsünün Prut'u geçişi · 15 Temmuz 1853 Bükreş'e giriş (eski 3 Temmuz) ve aynı gün Bâbıâli'nin protesto notası · 4 Ekim 1853 Osmanlı savaş ilanı",
 "yer": "Prut nehri, Boğdan (Yaş) ve Eflak (Bükreş); diplomatik cephe İstanbul",
 "taraflar": [
  {
   "ad": "Rus İmparatorluğu",
   "komutan": "Çar I. Nikola · elçi Prens Aleksandr Menşikov · ordu komutanı General Gorçakov · öncüde General Anrep-Elmpt",
   "kuvvet": "Memleketeyn'e ayrılan kuvvet 81.841 kişi (IV. Kolordu 57.794, V. Kolordunun bir kısmı 21.803, 3 Don kazak alayı); öncü 32 süvari bölüğü, 6 kazak bölüğü ve 16 top"
  },
  {
   "ad": "Osmanlı Devleti",
   "komutan": "Abdülmecid · Hariciye Nazırı Mustafa Reşid Paşa",
   "kuvvet": "kaynakta sayı verilmiyor; işgale silahla karşılık verilmedi"
  }
 ],
 "oncesi": "Kudüs'teki kutsal yerler üzerindeki Fransız-Rus çekişmesi büyüyünce Çar Nikola, Bahriye Nazırı Prens Menşikov'u olağanüstü elçi olarak İstanbul'a yolladı. Menşikov yolda Kişinev'deki 5. Kolordu ile Sivastopol'daki Karadeniz Filosu'nu teftiş etti ve 28 Şubat 1853'te kalabalık bir askerî heyetle geldi; heyet Boğazların savunmasını da gözlüyordu. Çar ona gerekirse Memleketeyn'in bağımsızlığını tanımakla tehdit etme yetkisi vermişti. Ortodoks tebaa üzerinde resmî güvence isteyen ültimatom reddedilince Menşikov 15 Mayıs'ta ilişkileri kesti ve 21 Mayıs'ta Büyükdere'den Odesa'ya döndü.",
 "akis": "Gorçakov Haziran'da Kişinev'de ordunun komutasını aldı. Rus takvimiyle 21 Haziran'da (miladî 3 Temmuz) Anrep-Elmpt'in süvari öncüsü Prut'u geçti ve Boğdan'a girdi; ordu Yaş'ı tuttu ve öncü 15 Temmuz'da Bükreş'e vardı. Haber Bâbıâli'ye 7 Temmuz'da ulaştı. Bu açık bir savaş sebebiydi, ama ne sultan ne çar savaş ilan etti: Nikola işgalin yalnız Ortodoksların haklarını korumak için bir baskı aracı olduğunu söylüyordu. Bükreş'teki Rus konsolosluğu beylere Bâbıâli ile ilişkiyi kesmelerini ve vergiyi göndermemelerini bildirdi.",
 "sonuc": "Bâbıâli 15 Temmuz'da işgali resmî bir notayla protesto etti, 1841 antlaşmasını imzalayan devletlere yükümlülüklerini hatırlattı; savaşa hazır olduğunu ama savaşı başlatmak istemediğini bildirdi. Viyana'da arabuluculuk notaları gidip geldi, sonuç çıkmadı. Osmanlı 4 Ekim 1853'te savaş ilan etti; Memleketeyn'deki Rus işgali Kırım Savaşı'nın ilk cephesine dönüştü ve ancak 1856 Paris Antlaşması'yla sona erdi.",
 "tartisma": "Prut geçiş günü: Sytin'in Askerî Ansiklopedisi öncünün geçişini Jülyen takvimiyle 21 Haziran'a koyar (= 3 Temmuz 1853). Candan Badem ise 'On 2 July' der; o cümlede takvim belirtmez, ama başka yerlerde Ortodoks takvim karışıklığına dikkat çektiği için miladî kastettiği düşünülebilir — bir günlük fark çözülmüş değildir. Bükreş'e giriş günü Sytin'de Jülyen 3 Temmuz'dur (= 15 Temmuz); bu Badem'in 15 Temmuz protesto notasıyla aynı güne düşer.",
 "kesinlik": "tartismali",
 "olay": [
  "1853-07-03|Prut"
 ],
 "kaynak": "TDV: abdulmecid (Cevdet Küçük) · TDV: eflak (Kemal Karpat) · Candan Badem, The Ottomans and the Crimean War (1853-1856), doktora tezi, Sabancı Üniversitesi, Haziran 2007, s. 69-78 (https://research.sabanciuniv.edu/id/eprint/8400/); gözden geçirilmiş kitap: The Ottoman Crimean War (1853-1856), Brill 2010 · Военная энциклопедия (Sytin, 1911-1915), «Восточная война 1853—56 гг.» (ru.wikisource.org/wiki/ВЭ/ВТ/Восточная_война_1853—56_гг.)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "G2 koordinatörünün ek görevi (B12). TDV abdulmecid 200 ('Eflak-Boğdan'ı işgal etti', gün yok; '4 Ekim 1853' savaş ilanı). TDV memleketeyn 200 (yalnız tanım), eflak 200 (gün yok), bogdan 200 (1853 yok), kirim-savasi = arama sayfası (ölü slug). Badem tezi PDF 200 (552 s.; pypdf): s. 69-70 Menşikov 28 Şubat, s. 76 15 ve 21 Mayıs, s. 78 'On 2 July the Russian armies commanded by General Gorchakov crossed the river Pruth', haber 7 Temmuz, 15 Temmuz nota. Brill kitabının kendisi okunmadı (sayfa no. teze göredir). Sytin VE ru.wikisource 200: '21 июня ав-рд ... под нач. г.-ад. гр. Анрепа-Эльмпта, переправился через Прут и 3 июля вступил в Бухарест'; 81.841 kişi; Rus savaş ilanı Jülyen 21 Ekim. Genel Kırım kartı (savas-kirim-savasi-1853-1856) tekrarlanmadı."
},

{
 "id": "savas-tokar-1891",
 "tur": "savas-hikayesi",
 "baslik": "Tokar'ın Geri Alınışı (Şubat 1891)",
 "kisa": "Yedi yıl Kızıldeniz kıyısını sarsan Osman Dikne, karargâhından uzaktayken Tokar'ı kaybetti ve dağlara çekildi.",
 "tarih_metin": "Şubat 1891 · Tokar'ın hemen güneyindeki Afafit çarpışması 19 Şubat 1891 (çağdaş Mısır ordusu krokisine göre)",
 "yer": "Tokar ve 4 km kadar güneyindeki Afafit — Sevâkin'in (Suakin) güneyinde, Kızıldeniz kıyı ovası",
 "taraflar": [
  {
   "ad": "İngiliz-Mısır kuvvetleri (Sevâkin garnizonu)",
   "komutan": "Holled Smith Paşa (Mısır ordusunda livâ), Kızıldeniz kıyısı genel valisi",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Mehdî Devleti'nin Doğu Sudan kuvvetleri",
   "komutan": "Osman Dikne'nin emîrleri (Osman Dikne o sırada bölgede değildi)",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Sevâkinli Osman Dikne, Mehdî tarafından Kızıldeniz ile Atbara nehri arasındaki Bece ülkesine âmil olarak atanmıştı. Bece dilini ve kabile düzenini bilmesi sayesinde Hadendeva başta olmak üzere kabileleri hareketin arkasına topladı; 1883'te Sevâkin-Berber yolunu keserek liman şehrini tehdit etti. Aynı yıl yandaşları Tokar'ı kuşattı ve yardıma gelen Mısır kolları pusuya düşürüldü. 1884-1885'te İngiliz-Mısır kuvvetleriyle Teb ve Tamai'de büyük meydan çarpışmalarına girdi ve kayıplarına rağmen bölgede tutundu. Kıyıda yalnız Sevâkin Mısır yönetiminin elinde kaldı; Tokar ise Doğu Sudan'daki Mehdîci idarenin merkezlerinden biri oldu.",
 "akis": "1891 başında İngiltere ile İtalya Doğu Sudan'da birbirini tamamlayan adımlar attı: İtalya Eritre'den Kassala'ya yöneldi, Osman Dikne de kuvvetlerini oraya kaydırdı. Sevâkin garnizonu bu boşluğu kullandı. Kızıldeniz kıyısı genel valisi Holled Smith Paşa komutasındaki İngiliz-Mısır kolu güneye yürüdü; Kahire'deki istihbarat dairesinin aynı yıl basılan krokisi, Tokar harabelerinin hemen güneyindeki Afafit'te 19 Şubat 1891 tarihli bir çarpışma gösterir. Afafit, Mehdîci yönetimin bölgedeki idare merkeziydi ve karargâh bu çarpışmayla ele geçirildi.",
 "sonuc": "TDV'ye göre aynı kuvvetlerin Osman Dikne'nin Tokar'daki karargâhını zaptetmesi Mehdî hareketine ağır bir darbe indirdi. Osman Dikne kıyı bölgesinden çekilmek zorunda kaldı ve Halife Abdullah'ın yanında başka cephelerde savaşmayı sürdürdü. Sevâkin'i yıllardır kuşatma tehdidi altında tutan Mehdîci üs kıyı ovasından kalkmış oldu. Nour Ali ve Varoğlu'na göre bu adım, Mehdî Devleti'ni çembere alıp önemli düğüm noktalarını tutmayı ve kuzey Sudan'a yapılacak büyük müdahaleyi hazırlamayı amaçlayan daha geniş bir İngiliz-İtalyan stratejisinin parçasıydı.",
 "tartisma": "Kesin gün kaynaklarda ayrışıyor: TDV yalnız yılı (1891), Nour Ali ve Varoğlu ayı (Şubat 1891) verir; çağdaş askerî kroki Afafit çarpışmasını 19 Şubat 1891'e tarihler. Tokar kasabasının kendisinin hangi gün teslim alındığı okunan kaynaklarda ayrıca yazılmıyor.",
 "kesinlik": "tartismali",
 "olay": [
  "1891-02-19|Tokar"
 ],
 "kaynak": "TDV: bece (Abdülkerim Özaydın, c. 5, 1992) · TDV: mehdiler--sudan (Eymen Fuâd Seyyid, c. 28, 2003) · Tarig Mohamed Nour Ali – Galip Varoğlu, \"From Bandit to Self Sacrificer Bearded Osman Digna of Sudan\", Türk Kültürü İncelemeleri Dergisi, sy. 55 (2026), s. 107-138, https://doi.org/10.24058/tkidergi.1862239 · British Library (War Office arşivi), \"Sketch Shewing Route Traversed by the Eastern Soudan Expeditionary Force under the Command of El Lewa Holled Smith Pacha\", Intelligence Department, Kahire 25 Mart 1891 (inset: 'Action of Afafit. 19.2.91'), https://searcharchives.bl.uk/catalog/040-003409333",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TARIH-CELISKI: madde t=1891-02-06; kaynak: Afafit (Tokar karargâhı) çarpışması 19 Şubat 1891 (BL kroki), ay Şubat 1891 (Nour Ali-Varoğlu), yıl 1891 (TDV bece). 6 Şubat'ı destekleyen kaynak bulunamadı. Okunan: TDV bece 200 ('1891'de aynı kuvvetler Osman Dikne'nin Tûker'deki karargâhını zaptedip'); TDV mehdiler--sudan 200 (Tokar geçmiyor); TDV arama 'Tokar' ve 'Osman Digna' (yalnız mehdiler--sudan); TDV sevakin = arama sayfası (madde yok); DergiPark tkidergi/1862239 PDF 200 metni çıkarıldı ('following the British capture of Tokar in February 1891, Digna was forced to withdraw'; 'taking advantage of Digna's temporary absence'); BL katalog 200; Britannica Osman-Digna 403; sudanmemory.org 403. Makaledeki 1884 olay tarihleri (ör. 'December 1884' çıkarması) hatalı göründüğü için 1884 ayrıntısında gün kullanılmadı. EK: maddenin kaynak alanı 'TDV bu olayı kapsamıyor' diyor; TDV bece kapsıyor."
},

{
 "id": "savas-domeke-1897",
 "tur": "savas-hikayesi",
 "baslik": "Dömeke Meydan Muharebesi (17 Mayıs 1897)",
 "kisa": "Teselya'daki son büyük meydan savaşı Atina yolunu açtı; ama zaferi masada büyük devletler biçti.",
 "tarih_metin": "17 Mayıs 1897 · ateşkes 20 Mayıs 1897 · barış 4 Aralık 1897",
 "yer": "Dömeke (Domokos), Teselya ovasının güneyi — Yenişehir (Larissa) ile Lamia arasındaki dağ eşiği",
 "taraflar": [
  {
   "ad": "Osmanlı Devleti (Alasonya'daki Teselya ordusu)",
   "komutan": "Müşir Edhem Paşa",
   "kuvvet": "Dömeke için ayrı sayı kaynakta yok; savaşın tamamında Ölmez'e göre 90.000"
  },
  {
   "ad": "Yunanistan Krallığı",
   "komutan": "kaynakta adı verilmiyor",
   "kuvvet": "Dömeke için ayrı sayı kaynakta yok; savaşın tamamında Ölmez'e göre 65.000"
  }
 ],
 "oncesi": "Girit'teki ayaklanmayı fırsat bilen Yunanistan, Şubat 1897'de Prens George komutasında bir filo gönderip adaya asker çıkardı ve albay Vassos adayı Yunan kralı adına zaptettiğini ilan etti. Büyük devletler aracılığıyla yapılan çekilme çağrısına uyulmayınca savaş çıktı. Osmanlı kuvvetleri iki cephede savaştı: doğuda Alasonya'daki taarruz ordusu Edhem Paşa'nın, batıda Yanya kolordusu Ahmed Hıfzı Paşa'nın komutasındaydı. Edhem Paşa savaş ilanının ertesi günü (18 Nisan) Milona'yı kazandı, 25 Nisan'da Yenişehir'e girdi ve Tırhala'yı aldı. Planların hazırlanmasında genç kurmay Ahmed İzzet'in (sonra Paşa) büyük emeği vardı.",
 "akis": "Teselya ovasından çekilen Yunan ordusu güneydeki Dömeke sırtlarında son savunma hattını kurdu. Edhem Paşa 17 Mayıs'ta bu mevzilere taarruz etti ve TDV'nin ifadesiyle Yunanlıları büyük bir bozguna uğrattı. Bu zafer Teselya ve Epir'deki Osmanlı orduları arasındaki bağlantıyı da kurdu. Ardından ordu Furka geçidini zorladı, Lamia'ya ulaştı; Termopil geçidinin bir gün içinde aşılmasıyla Atina yolu açıldı.",
 "sonuc": "Ağır yenilgilerden sonra Yunan hükümeti istifa etti ve Rusya'dan yardım istedi. Çar II. Nikola, Abdülhamid'e kutlama telgrafı gönderirken ilerlemenin durdurulmasını rica etti; büyük devletlerin baskısıyla 20 Mayıs 1897'de ateşkes imzalandı. 4 Aralık'ta varılan 16 maddelik barışla Yunanistan sınırdaki birkaç küçük toprak parçasını bıraktı ve savaş tazminatı ödemeyi kabul etti, ama Teselya Yunanistan'da kaldı. Girit'in özerkliği ise yine büyük devletlerin isteğiyle genişletildi. Edhem Paşa'ya 'gazi' unvanı verildi; savaş, askerî zaferin diplomaside eridiği bir örnek olarak anılır.",
 "tartisma": "Savaşın başlangıç ve bitiş günleri ayrışır: TDV Tesalya maddesi savaşı '7 Nisan-18 Mayıs 1897' diye verir (muhtemelen farklı takvimle), TDV Gazi Edhem Paşa maddesi Milona'yı ilanın ertesi günü 18 Nisan'a, TDV Girit maddesi savaşın bitişini 19 Mayıs'a, Sezer ateşkesi 20 Mayıs'a koyar. Tırhala'nın alınışı TDV'de 12 Mayıs, Sezer'de (Karal'a dayanarak) 26 Nisan'dır.",
 "kesinlik": "kesin",
 "olay": [
  "1897-05-17|Dömeke"
 ],
 "kaynak": "TDV: gazi-edhem-pasa (M. Metin Hülagü, c. 13, 1996) · TDV: tesalya (Machiel Kiel, 2011) · TDV: girit (Cemal Tukin) · TDV: yunanistan · TDV: izzet-pasa-ahmed (Metin Ayışığı, 2001) · Cemal Sezer, \"1897 Osmanlı-Yunan Savaşı'nda Gönüllü Osmanlılar\", Karadeniz Araştırmaları, XX/77 (2023), s. 139-155, https://dergipark.org.tr/tr/pub/karadearas/article/1267667",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Gün çelişkisi yok: TDV gazi-edhem-pasa '17 Mayıs'ta Dömeke Meydan Muharebesi'nde Yunanlılar'ı büyük bir bozguna uğrattı' = madde t. Okunan: TDV yunanistan 200; TDV gazi-edhem-pasa 200; TDV tesalya 200; TDV girit 200; TDV izzet-pasa-ahmed 200; TDV abdulhamid-ii 200 (1897 savaşı ayrıntısı yok, sayfanın ilk 100k karakteri okundu); TDV arama 'Dömeke' 3 sonuç. DergiPark Sezer 2023 PDF metni çıkarıldı (90.000/65.000 Ölmez 2013'e; ateşkes 20 Mayıs Sun 1965 ve Uçarol'a; barış 4 Aralık 16 madde Karal ve Armaoğlu'na dayanıyor). Yunan başkomutanının adı (Veliaht Konstantin) okunan kaynaklarda geçmediği için yazılmadı. Küre Ansiklopedisi kullanılmadı."
},

{
 "id": "savas-kusseri-rabih-1900",
 "tur": "savas-hikayesi",
 "baslik": "Kusseri Savaşı ve Râbih b. Zübeyr'in Sonu (22 Nisan 1900)",
 "kisa": "Bornu'yu yedi yıl elinde tutan Sudanlı fatih, Fransızlarla son büyük çarpışmasında, Kusseri'de savaş meydanında öldü.",
 "tarih_metin": "22 Nisan 1900 (akademik kaynaklar) · TDV yalnız yılı verir (1900)",
 "yer": "Kusseri (Kousséri, sonra Fort-Foureau), Logone ile Şari nehirlerinin birleştiği yer — Çad Gölü'nün güneyi",
 "taraflar": [
  {
   "ad": "Fransız sömürge kuvvetleri",
   "komutan": "Lamy (aynı çarpışmada öldü); öteki komutanlar okunan kaynaklarda adlandırılmıyor",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Râbih b. Zübeyr'in ordusu",
   "komutan": "Râbih b. Zübeyr",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Sudanlı bir asker olan Râbih, Çad Gölü'nün doğusunda güç topladı ve Fransızlarla savaşarak Bagirmi ile Bornu'ya hâkim oldu. Bagirmi'ye saldırdığında sultan II. Gavrang 1897'de çaresiz Fransa ile himaye antlaşması yaptı. 1893'te Bornu'ya girdi; Trablusgarp'taki Osmanlı makamları istilâ söylentisini araştırmak üzere Murzuk'tan bir tüccar gönderdi, ama Bornu'nun eski başşehri Kukava yağmalanmış, Kânimî hânedanının yüzyıllık düzeni çökmüştü. Râbih 1896'ya kadar bütün ülkeyi alıp Dikva'yı (Dikoa) merkez yaptı. Bu fetihle Bornu'nun Kuzey Afrika ile ve Osmanlı Trablusgarp'ı ile bağları da koptu.",
 "akis": "Fransızlar Râbih'i Bagirmi'den çıkarmak için saldırıya geçti. Bangui'nin özetlediği Largeau anlatısına göre Râbih ancak üç kanlı çarpışmanın sonunda yenilebildi. Sonuncusu 22 Nisan 1900'de, Logone kıyısındaki Kusseri'de oldu: Fransız kuvvetleri Râbih'in ordusunu bozdu, Râbih savaş meydanında öldü. Fransız tarafında Lamy de aynı çarpışmada hayatını kaybetti. Marc Michel'e göre bu savaş, Râbih'in Çad'daki serüvenini bitiren olaydır.",
 "sonuc": "TDV'ye göre Fransızlar Râbih'i yenerek bölgenin tamamını kontrol altına aldılar. Oğlu Fazlullah Dikva'yı yeniden ele geçirip babasının hâkimiyetini sürdürmeye çalıştı, fakat tutunamadı ve 1901'de Fransızlarca öldürüldü. Kusseri, Fransa'nın Çad üzerindeki egemenliğini kesinleştiren savaş oldu; Bornu ise 1902'de Fransa, İngiltere ve Almanya arasında paylaşıldı.",
 "tartisma": "Yer ve gün ayrışır: TDV Çad maddesi Râbih'in 'Dikoa'daki (Dikwa) savaşta' esir düşüp öldürüldüğünü yazar ve yalnız yıl verir; Fransız askerî tarihçiliği (Marc Michel; Journal des africanistes) son çarpışmayı 22 Nisan 1900'de Kusseri'ye koyar. TDV Bornu maddesi Râbih'e 'Bagirmi sultanı' der; Adı da ayrışır: Benî Şeyh'in makalesi 'Râbih b. Fazlullah' der, TDV 'Râbih b. Zübeyr' (TDV'de Fazlullah oğlunun adıdır).",
 "kesinlik": "tartismali",
 "olay": [
  "1900-04-22|Râbih"
 ],
 "kaynak": "TDV: bornu (Davut Dursun, c. 6, 1992) · TDV: cad (Davut Dursun) · TDV: bagirmi (Rıza Kurtuluş) · Marc Michel, \"Panorama politique de l'Afrique noire française, vers 1900\", Revue historique des Armées, sy. 218 (2000), s. 3-9, https://www.persee.fr/doc/rharm_0035-3299_2000_num_218_1_4899 · Antoine Bangui, \"Largeau, V.-E., À la naissance du Tchad, 1903-1913\" (tanıtım), Journal des africanistes, 74-1/2 (2004), s. 513-516, https://journals.openedition.org/africanistes/369 · Ali Kyari Benî Şeyh (çev. M. Tandoğan – M. Umar), \"19. Yüzyılda Osmanlı-Bornu Münasebetleri\", Journal of Medeniyet Politics / Siyasal Bilgiler Fakültesi Dergisi, I/2 (2016), s. 35-66, https://dergipark.org.tr/en/pub/ismus/article/312404",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TARIH-CELISKI: madde t=1900-01-01 (TDV yalnız yıl); akademik kaynak 22 Nisan 1900, yer Kusseri (Michel 2000: 'la bataille de Kousséri, le 22 avril 1900, qui met fin à l'aventure de Rabah au Tchad'; Bangui 2004: 'à Kousseri, le 22 avril 1900, où il trouva la mort de même que Lamy'). TDV cad yeri Dikoa diyor. Okunan: TDV bornu 200; TDV cad 200; TDV bagirmi 200; TDV rabih-b-zubeyr = arama sayfası (müstakil madde yok); TDV arama 'Râbih' 27 sonuç; Persée 200; OpenEdition 200; DergiPark ismus PDF metni çıkarıldı (1893 Bornu, 29 Nisan 1893 Fizan mektubu, Kukava yağması). Britannica print/487969 403; Cairn 'La tête de Rabah' 403 (Rabah'ın Abdoulaye Diallo'ca öldürüldüğü ayrıntısı arama özetinden, okunamadığı için yazılmadı). 'Üç kanlı çarpışma' Bangui tanıtımına dayanır. Üç Fransız seferinin (Foureau-Lamy, Joalland-Meynier, Gentil) Çad'da birleşmesi ve Lamy'nin başkomutan olması yalnız arama özetlerinde (Vikipedi/okunamayan sayfalar) görüldü — karta YAZILMADI. TDV cad'ın 'Vedây Râbih zamanında bölgenin en güçlü devleti' cümlesi Vaday hakkındadır, Râbih'e mal edilmedi. Kuvvet sayıları yazılmadı."
},

{
 "id": "savas-riyad-1902",
 "tur": "savas-hikayesi",
 "baslik": "Riyad Baskını (15 Ocak 1902)",
 "kisa": "On yıllık sürgünden dönen genç bir prens, bir gece baskınıyla bugünkü Suudi Arabistan'ın çekirdeğini attı.",
 "tarih_metin": "15 Ocak 1902",
 "yer": "Riyad, Necid (Orta Arabistan)",
 "taraflar": [
  {
   "ad": "Suûd hânedanı ve Küveyt'ten gelen yandaşları",
   "komutan": "Abdülazîz b. Abdurrahman (İbn Suûd)",
   "kuvvet": "kaynakta sayı verilmiyor (yanında getirdiği adamlarla)"
  },
  {
   "ad": "Âl-i Reşîd (Hâil emirliği) adına Riyad'ı yöneten garnizon",
   "komutan": "İbnü'r-Reşîd'in Riyad'da bıraktığı idareci (adı kaynakta verilmiyor)",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Necid'de üstünlük Hâil merkezli Âl-i Reşîd'e geçmişti. Hâil emîri Muhammed İbnü'r-Reşîd ve kabileleri 1891'de Riyad'ı alınca Suûd ailesi şehirden tamamen çıkarıldı. Abdurrahman b. Faysal ile oğlu Abdülazîz, Sabâh hânedanının desteğiyle Küveyt'e sığındılar; II. Abdülhamid'in izniyle orada oturdular ve Osmanlı Devleti aileye aylık 60 lira tahsisat bağladı. 1897'de Muhammed İbnü'r-Reşîd ölünce Reşîdîler ile Küveyt'in Sabâh ailesi arasındaki çekişme yeniden alevlendi. Abdülazîz bu çatışmada Sabâhlar'ın yanında yer aldı ve Riyad'ın müstakbel emîri olarak tanındı.",
 "akis": "TDV'ye göre Reşîdîler'in giderek zayıflaması ve Riyad'a takviye gönderememeleri, Abdülazîz'in işini kolaylaştırdı. Abdülazîz Küveyt'ten yanında getirdiği adamlarla Riyad'a döndü, İbnü'r-Reşîd'in şehirde bıraktığı idareciyi öldürdü ve 15 Ocak 1902'de şehri ele geçirdi. Baskının ayrıntıları (adam sayısı, idarecinin adı, hangi kalede öldürüldüğü) okunan TDV maddelerinde yer almıyor.",
 "sonuc": "Osmanlı Devleti, babası Abdurrahman'ı Riyad'a kaymakam tayin etti; şehri fiilen Abdülazîz yönetti. Babası hak ve yetkilerinden feragat edince Abdülazîz Vehhâbî emîri oldu. Osmanlılar Kasîm askerî harekâtı adıyla bölgeye bir sefer düzenlediyse de onu durduramadı; 13 Nisan 1906'da İbnü'r-Reşîd'in emîrini yenip öldürdü ve 1914'te Necid valiliği ve kumandanlığına getirildi. Riyad baskını, otuz yıl içinde Arabistan'ın büyük kısmını birleştirecek yeni Suûdî devletinin başlangıcı sayılır.",
 "tartisma": "",
 "kesinlik": "kesin",
 "olay": [
  "1902-01-15|Riyad"
 ],
 "kaynak": "TDV: riyad · TDV: abdulaziz-b-suud (Hulusi Yavuz, c. 1, 1988) · TDV: suudiler (Zekeriya Kurşun, 2009)",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Gün çelişkisi yok: TDV riyad ve TDV abdulaziz-b-suud ikisi de 15 Ocak 1902 diyor (= madde t). TDV suudiler yalnız yıl. Okunan: TDV riyad 200; TDV abdulaziz-b-suud 200 (İbn Suûd'un asıl maddesi; 'ibn-suud' buraya gönderme); TDV suudiler 200; TDV abdulaziz-b-abdurrahman = arama sayfası (ölü slug). Popüler anlatılarda geçen 40 kişilik müfreze, vali Aclân ve Mismak kalesi okunan kaynaklarda bulunmadığı için yazılmadı; akademik kaynakla doğrulanırsa eklenebilir. Kaymakam ataması TDV riyad'da 15 Ocak 1902'den SONRA anlatılıyor (ikinci okumayla doğrulandı); atamanın günü verilmiyor."
},

{
 "id": "savas-edirne-kusatmasi-1912",
 "tur": "savas-hikayesi",
 "baslik": "Edirne Kuşatması (Ekim 1912 - 26 Mart 1913)",
 "kisa": "Elli gün dayanması planlanan kale, açlık ve kar fırtınası altında beş buçuk ay direndi.",
 "tarih_metin": "Kuşatma çemberi 26-30 Ekim 1912'de kapandı · genel taarruz 24-26 Mart 1913 · teslim 26 Mart 1913",
 "yer": "Edirne Müstahkem Mevkii — şehri çeviren tabya hattı (Hıdırlık, Ayvazbaba, Kartaltepe, Maraş vb.)",
 "taraflar": [
  {
   "ad": "Osmanlı Devleti (Edirne Müstahkem Mevkii)",
   "komutan": "Mehmed Şükrü Paşa",
   "kuvvet": "18 Ekim 1912'de 926'sı subay 50.650 asker; sonradan 60.139'a çıktı (Genelkurmay verisi, Alp'e göre)"
  },
  {
   "ad": "Bulgaristan ve Sırbistan",
   "komutan": "General Nikola İvanov (II. Bulgar Ordusu) · General Vazov (Doğu Cephesi)",
   "kuvvet": "II. Bulgar Ordusu 100.000; Kasım'dan itibaren iki Bulgar ve iki Sırp tümeni kuşatmayı yürüttü; sayıca 3, ateş gücünce 6 kat üstün (Alp)"
  }
 ],
 "oncesi": "Ekim 1912'de saldıran Balkan müttefikleri karşısında Osmanlı Şark Ordusu Kırklareli ve Lüleburgaz-Vize'de yenilip Çatalca'ya çekildi; Edirne birden yeniden serhad şehri oldu. Kalenin olası bir savaşta en çok elli gün savunma yapması planlanmıştı; tahkimatı çağın toplarına uygun değildi, erzakı yetersizdi. Edirne kuvvetleri önce çekilen Şark Ordusu'nun güvenliğini sağladı, 25 Ekim'de kaleye döndü. Ertesi gün General İvanov'un II. Bulgar Ordusu şehri doğu ve güneyden sarmaya başladı; 30 Ekim'de son tren İstanbul'a gitti ve çember kapandı.",
 "akis": "22 Kasım'dan itibaren şehir halkı bombalandı; Maraş'ta Bulgarlar ağır kayıpla püskürtüldü, Kartaltepe ise kanlı çarpışmalardan sonra düştü. 3 Aralık 1912 mütarekesinin bir maddesi kuşatılmış kalelere erzak ulaştırılmasını engelledi; Bulgar trenleri şehrin gözü önünden kendi askerine yiyecek taşırken Edirne'de hayvanlar bile açlıktan ölüyordu. Kar fırtınalı bir kışın ardından Şarköy çıkarmasının başarısızlığı kurtuluş umudunu bitirdi. 24 Mart sabahı Bulgar ve Sırp orduları bütün cephelerde genel taarruza geçti; 25-26 Mart'ta Doğu Cephesi'ndeki Ayvazbaba tabyasının komutanı, bütün askerleri şehit düştüğünü bildirdikten sonra kendisi de öldü.",
 "sonuc": "Şükrü Paşa 25 Mart akşamı cephaneliklerin ve Meriç (Maraş) demiryolu köprüsünün imhasını emretti; 26 Mart sabahı Hıdırlık'ta beyaz bayrak çekildi ve paşa General İvanov'a teslim oldu. Resmî kayıtlara göre 13.000 şehit verilmiş, 45.000 asker esir düşmüştü. Esirlerin bir kısmı Tunca adasındaki Sarayiçi kampında açlık ve hastalıktan öldü. Şehir 30 Mayıs Londra Antlaşması'yla Bulgaristan'a bırakıldıysa da II. Balkan Savaşı'nda, 21 Temmuz 1913'te geri alındı.",
 "tartisma": "Süre ve kayıplar ayrışır: Alp savunmayı '160 gün' sayar (muharebeler 18 Ekim'de başladığı için), aynı makale beyaz bayrağı '5 buçuk ay'lık direnişin sonu diye anar. Bulgar kayıpları Batı kaynaklarına göre 18.222'dir (Hall). Sivil kayıplarda TDV 'Balkan Savaşı' maddesi Edirne'de 225.000'den fazla Müslümanın Bulgar esareti altında açlıktan öldüğünü yazar; bu sayı Alp'in Sarayiçi kampı için verdiği yaklaşık 20.000 esir ölümünden çok yüksektir ve kapsamı (şehir mi, vilâyet mi) belirsizdir. Teslimin tek başına Bulgarlara mı, Bulgar-Sırp kuvvetlerine mi yapıldığı da anlatılara göre değişir.",
 "kesinlik": "kesin",
 "olay": [
  "1912-10-26|Edirne"
 ],
 "kaynak": "TDV: edirne · TDV: balkan-savasi (Cevdet Küçük, c. 5, 1992) · İlker Alp, \"1912-1913 Balkan Savaşları'nda Edirne'nin Sükûtu ve Yaşanan Faciâlar\", Karadeniz Araştırmaları, XV/60 (2018), s. 1-33, https://dergipark.org.tr/en/download/article-file/2249067",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "TARIH-CELISKI (yumuşak): madde t=1912-11-03 'kuşatma başladı'; Alp: II. Bulgar Ordusu 26 Ekim 1912'de kuşatmaya başladı, çember 30 Ekim 1912'de tamamlandı, 'Kasım 1912'nin başlarında sıkı kuşatma'. 3 Kasım'ı doğrudan veren kaynak bulunamadı. Okunan: TDV edirne 200 (ilk 100k karakter; '26 Mart 1913'te Bulgarlar tarafından işgal edildi, 21 Temmuz'da ise geri alındı'); TDV balkan-savasi 200 (Edirne kuşatması anlatılmıyor; 225.000 cümlesi); TDV balkan-savaslari ve sukru-pasa ve mehmed-sukru-pasa = arama sayfası (ölü slug; Şükrü Paşa'nın TDV maddesi yok); DergiPark Alp 2018 PDF metni çıkarıldı. Alp'te '21 Ekim 1913' (60.139) ve '26 Mart 2013' dizgi hatası var; 1912/1913 okunmalı. Örenç 2012 (trkede 496168) PDF 10 MB sınırını aştı, okunmadı."
},

{
 "id": "savas-ikinci-balkan-1913",
 "tur": "savas-hikayesi",
 "baslik": "II. Balkan Savaşı ve Edirne'nin Geri Alınışı (Haziran-Temmuz 1913)",
 "kisa": "Ganimeti paylaşamayan müttefikler birbirine düşünce, kaybedilen Edirne tek kurşun atılmadan geri alındı.",
 "tarih_metin": "Bulgar taarruzu 29 Haziran 1913 (TDV: 23 Haziran) · Romanya'nın savaş ilanı 10 Temmuz · Edirne'nin geri alınışı 21 Temmuz (Enver Bey'in şehre girişi 22 Temmuz) · Bükreş 10 Ağustos · İstanbul Antlaşması 29 Eylül 1913",
 "yer": "Makedonya (Bulgar-Sırp-Yunan cephesi) ve Doğu Trakya (Midye-Enez hattından Edirne'ye)",
 "taraflar": [
  {
   "ad": "Bulgaristan",
   "komutan": "Çar Ferdinand",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Sırbistan, Yunanistan, Karadağ; Temmuz'dan itibaren Romanya",
   "komutan": "kaynakta adı verilmiyor",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Osmanlı Devleti",
   "komutan": "Enver Bey (Edirne'ye giren kuvvet); Ahmed İzzet Paşa Trakya ordusunda görevli",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "30 Mayıs 1913 Londra Antlaşması, Midye-Enez hattının batısını Balkan devletlerine bırakmıştı; Edirne de bu hattın ötesinde kalıyordu. Ancak elde ettikleriyle yetinmeyen Bulgaristan, Makedonya'nın büyük kısmını istiyordu; Sırbistan ve Yunanistan ise ellerindeki toprakları bırakmaya niyetli değildi. İstanbul'da ise Ocak 1913'teki Bâbıâli Baskını'yla iktidara gelen İttihat ve Terakkî, Edirne'yi kurtaracak fırsatı kolluyordu.",
 "akis": "Bulgaristan Yunan ve Sırp mevzilerine saldırarak ikinci savaşı başlattı. Karadağ da Bulgaristan'a karşı cephe aldı; 10 Temmuz'da Romanya savaş ilan edip Sofya'ya doğru ilerleyince Bulgar ordusu iki ateş arasında kaldı. Müttefikler Sofya yolundayken İttihat ve Terakkî hükümeti Trakya'da harekete geçti: ileri harekâta geçen Osmanlı birlikleri Londra'da çizilen hattı aştı, Kırklareli'ni ve Edirne'yi kurtardı. Bulgarlar Edirne'yi direnmeden boşalttı; şehir 21 Temmuz'da geri alındı, Enver Bey ertesi gün şehre girdi.",
 "sonuc": "10 Ağustos 1913 Bükreş Antlaşması ikinci savaşı bitirdi. Osmanlı ile Bulgaristan arasındaki 29 Eylül 1913 İstanbul Antlaşması'yla Edirne ve batısında yarım daire biçiminde bir toprak Osmanlı'da kaldı, Batı Trakya Bulgaristan'a bırakıldı. Bütün Balkan Savaşları sonunda Osmanlı'nın Rumeli'de 176.300 km²'lik toprağından yalnız 26.000 km²'si, yani yaklaşık %17'si kalmıştı. Edirne'ye giriş Enver'in toplumdaki itibarını büyük ölçüde artırdı; birkaç ay sonra Harbiye nâzırı oldu.",
 "tartisma": "Başlangıç günü ayrışır: TDV 'Balkan Savaşı' maddesi 'Bulgaristan 23 Haziran 1913'te Sırbistan, Karadağ ve Yunanistan'a karşı savaşa başladı' der; Alp (Kamil 2016'ya dayanarak) Bulgar saldırısını 29 Haziran 1913'e koyar. Edirne'nin geri alınışı TDV Edirne ve Balkan Savaşı maddelerinde 21 Temmuz, TDV Enver Paşa maddesinde Enver'in şehre girişi 22 Temmuz'dur; Alp de 22 Temmuz'u 'geri alınmanın ertesi günü' diye anar.",
 "kesinlik": "tartismali",
 "olay": [
  "1913-06-29|Balkan"
 ],
 "kaynak": "TDV: balkan-savasi (Cevdet Küçük, c. 5, 1992) · TDV: edirne · TDV: enver-pasa (M. Şükrü Hanioğlu, 1995) · TDV: izzet-pasa-ahmed (Metin Ayışığı, 2001) · İlker Alp, \"1912-1913 Balkan Savaşları'nda Edirne'nin Sükûtu ve Yaşanan Faciâlar\", Karadeniz Araştırmaları, XV/60 (2018), s. 1-33, https://dergipark.org.tr/en/download/article-file/2249067",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Madde t=1913-06-29 maddenin kendi ic_not_gun beyanıyla uyumlu; TDV 23 Haziran günü tartışmada yazıldı (yeni çelişki değil, madde zaten beyan ediyor). Okunan: TDV balkan-savasi 200; TDV edirne 200; TDV enver-pasa 200 ('22 Temmuz 1913'te Edirne'ye girişi'); TDV izzet-pasa-ahmed 200 (II. Balkan Savaşı'nı anmıyor, yalnız 'Balkan Harbi sonlarına doğru Trakya ordusunda görev aldı'); TDV osmanlilar 200 (ilk 100k karakter); DergiPark Alp 2018 PDF. Bulgar-Sırp komutanlarının Şükrü Paşa'yı esir alma yarışı ayrıntısı yalnız arama özetinde görüldü (DergiPark article-file/2474151, gövde okunmadı) — karta YAZILMADI. Enver'in o günkü rütbesi TDV'de verilmiyor; rütbe yazılmadı. Ahmed İzzet Paşa'nın harekâttaki rolü kaynakta tanımlanmıyor."
},

{
 "id": "savas-izmir-aydin-1919",
 "tur": "savas-hikayesi",
 "baslik": "İzmir’in işgali ve Aydın muharebesi (15 Mayıs – 4 Temmuz 1919)",
 "kisa": "Yunan askeri İzmir rıhtımına çıktığı gün başlayan silah sesleri, altı hafta sonra Aydın’da efelerin ve halkın şehri birkaç günlüğüne geri almasına uzandı.",
 "tarih_metin": "İzmir’in işgali 15 Mayıs 1919 · Aydın’ın işgali 27 Mayıs 1919 · Aydın muharebesi 28 Haziran’da başladı (Bayram), şehir 30 Haziran’da kurtarıldı, 4 Temmuz 1919’da yeniden işgal edildi (TDV aydin)",
 "yer": "İzmir rıhtımı, Saat Kulesi–Sarıkışla–Kemeraltı girişi; Aydın, Menderes köprüsü ve Tellidede sırtları",
 "taraflar": [
  {
   "ad": "Yunan işgal kuvvetleri",
   "komutan": "Aydın’da Yunan kuvvetleri komutanı General Nider (Bayram)",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Kuvâ-yi Milliye, efeler ve 57. Tümen birlikleri",
   "komutan": "57. Tümen Komutanı Albay Şefik Bey · Yörük Ali Efe · Demirci Mehmed Efe · teşkilâtçı Celal Bey (Bayar)",
   "kuvvet": "Bayram’a göre Aydın yöresindeki çetelerin toplamı 5000’e ulaştı; Tellidede çarpışmasına yaklaşık 200 kişi katıldı"
  }
 ],
 "oncesi": "Paris Konferansı’nın kararıyla Yunan ordusu 15 Mayıs 1919 sabahı İzmir’e çıktı. Rıhtımdan Saat Kulesi ve Sarıkışla yönüne yürüyen birlikler Kemeraltı girişine vardığında bir ya da birkaç el silah sesi duyuldu; Yunan askerleri kışlaya, hükümet konağına ve çevre sokaklara ateş açtı, çok sayıda Müslüman öldü. Aynı gün Mustafa Kemal Paşa padişahla görüştü ve ertesi gün Samsun’a hareket etti. İşgal ülke çapında mitinglere yol açtı; 29 Mayıs’ta Ayvalık’ta ilk cephe kuruldu. Aydın ise 27 Mayıs’ta direnişle karşılaşmadan işgal edildi.",
 "akis": "Ödemiş, Nazilli ve Aydın çevresinde halk teşkilâtlandı; Yörük Ali Efe Malgaç köprüsündeki bir Yunan birliğine baskın yaptı. Müttefik uyarısıyla Yunanlılar Haziran ortasında Nazilli’den çekildi, Erbeyli istasyonunda bir baskın daha yedi. Aydın’ı çevreleyen yaklaşık 200 kişilik millî kuvvet Tellidede sırtlarında çarpıştı. Albay Şefik Bey başkanlığındaki meclis Yunan komutanından şehri iki gün içinde boşaltmasını istedi. 28 Haziran sabahı Menderes köprüsündeki Yunan saldırısıyla başlayan muharebede millî kuvvetler şehre girdi; TDV’ye göre Aydın 30 Haziran’da kurtarıldı. Çekilen Yunanlılar şehri ateşe verdi.",
 "sonuc": "Kurtuluş kısa sürdü. Takviye alan Yunan kuvvetleri 4 Temmuz’da Aydın’ı yeniden işgal etti; şehir 7 Eylül 1922’ye kadar işgal altında kaldı. Bayram, şehir alındıktan sonra kaçan düşmanın takip edilmeyip yağmaya dalınmasının ikinci saldırı karşısında savunmayı imkânsız kıldığını yazar. Buna rağmen Aydın muharebesi, işgale karşı silahlı halk direnişinin ilk büyük çıkışlarından biri oldu.",
 "tartisma": "“İlk kurşun”: Vural’a göre Millî Mücadele yıllarındaki kaynaklarda ilk kurşunu atan biri adıyla anılmaz; Hasan Tahsin anlatısı 1940’lardan, özellikle 1960’lardan sonra yerleşti. Tanıklıklar farklı adlar verir, İtalyan diplomat Sforza ise bir Yunan provokatöründen söz eder. Aydın: Bayram muharebeyi 28 Haziran’da başlatır ve şehrin “3 gün” Türk elinde kaldığını yazar; TDV kurtuluşu 30 Haziran, yeniden işgali 4 Temmuz olarak verir.",
 "kesinlik": "tartismali",
 "olay": [
  "1919-05-15|İzmir",
  "1919-06-30|Aydın"
 ],
 "kaynak": "TDV: izmir · TDV: aydin · TDV: milli-mucadele · Mithat Kadri Vural, “Hasan Tahsin ve ‘İlk Kurşun’ Üzerine Bir Literatür Analizi”, Tarih İncelemeleri Dergisi XXXIV/1 (2019), 281-310, https://dergipark.org.tr/tr/download/article-file/769237 · İlker Bayram, “Milli Mücadele’de Aydın’da Efelerin Rolü”, Karatekin Edebiyat Fakültesi Dergisi (KAREFAD) 1/1, 127-150, https://dergipark.org.tr/tr/pub/karefad/issue/19204/204177",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/izmir 200 (Kütükoğlu; '15 Mayıs 1919’da başlayıp 9 Eylül 1922’ye kadar süren Yunan işgali') · https://islamansiklopedisi.org.tr/aydin 200 (Emecen; 27 Mayıs işgal, 30 Haziran kısa kurtuluş, 4 Temmuz yeniden işgal, 7 Eylül 1922) · https://islamansiklopedisi.org.tr/milli-mucadele 200 (Cevdet Küçük; 15 Mayıs, Ayvalık 29 Mayıs, efeler) · DergiPark 769237 200 PDF okundu · DergiPark 180177 200 PDF okundu (KAREFAD 1/1; DergiPark künyesi yayın tarihi 2018-06-01, dergi 2013’te başladığı için yıl yazılmadı). Hasan Tahsin için TDV slug hasan-tahsin 302 (yok). MADDE METNİ NOTU: 1919-05-15 maddesinin d’si 'Aynı tarihte elden çıkan diğer yerleşimler: Aydın' der; TDV aydin Aydın’ın işgalini 27 Mayıs 1919 verir."
},

{
 "id": "savas-maras-urfa-1920",
 "tur": "savas-hikayesi",
 "baslik": "Güney Cephesi: Maraş ve Urfa’nın kurtuluşu (Ocak – Nisan 1920)",
 "kisa": "Fransız topçusu mahalleleri döverken Maraş sokaklarda direndi; Urfa’da iki ay kuşatılan garnizon, şartlı bir anlaşmayla şehri bırakmak zorunda kaldı.",
 "tarih_metin": "Maraş: hareket 21 Ocak 1920’de başladı, Fransızlar 11 Şubat’ta şehri boşalttı, kurtuluş 11-12 Şubat 1920 · Urfa: ayaklanma 7 Şubat 1920, 10 Nisan anlaşma, 11 Nisan 1920 Fransız çıkışı (TDV)",
 "yer": "Maraş (Kahramanmaraş) ve Urfa (Şanlıurfa); Fransızların çekilme yönleri İslâhiye ve Cerablus",
 "taraflar": [
  {
   "ad": "Fransız işgal kuvvetleri ve içlerindeki Ermeni birlikleri",
   "komutan": "Maraş’ta General Queratte (TDV)",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Maraş Kuvâ-yi Milliyesi ve halkı",
   "komutan": "Doktor Mustafa Bey · Kılıç Ali (Üsteğmen Âsaf) · Yörük Selim · Sütçü İmam",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Urfa Kuvâ-yi Milliyesi ve aşiret gönüllüleri",
   "komutan": "Yüzbaşı Ali Saip Bey (Ursavaş)",
   "kuvvet": "Demir’e göre Karaköprü’de toplanan gönüllüler kısa sürede 3000’e ulaştı"
  }
 ],
 "oncesi": "Mondros’tan sonra İngilizler Maraş’ı 22 Şubat 1919’da, Urfa’yı Mart 1919’da işgal etti; iki devlet arasındaki anlaşmayla bölge Fransızlara bırakıldı. Maraş’ta Fransız ordusundaki Ermeni birlikleri, kaledeki Türk bayrağının indirilmesi ve kadınlara yapılan taciz halkı ayağa kaldırdı; Sütçü İmam bir askeri öldürdü. 29 Kasım 1919’da Müdâfaa-i Hukuk kuruldu, Heyet-i Temsiliye bölgeye subay gönderdi. Urfa’ya 29 Aralık 1919’da jandarma komutanı olarak gelen Ali Saip Bey de aşiretleri örgütlemeye girişti.",
 "akis": "Maraş’ta çevredeki baskınlar kısa sürede şehre sıçradı: Doktor Mustafa Bey Yumurtatepe’deki Fransız karargâhına saldırdı, Kılıç Ali şehre girdi, yardım konvoyları yolda vuruldu. Bayazıtlı mahallesi ağır topçu ateşi altındayken görüşmeye gönderilen Doktor Mustafa dönüşte öldürüldü. Fransızlar 11 Şubat’ta şehri boşaltıp İslâhiye yönüne çekildi. Urfa’da Ali Saip Bey 7 Şubat’ta işgal komutanlığına şehri boşaltma çağrısı gönderdi; iki ay süren çarpışmalardan sonra erzakı tükenen garnizon 10 Nisan’da şartlı çekilmeyi kabul etti ve 11 Nisan gecesi şehirden çıktı.",
 "sonuc": "Urfa’dan çekilen kol yolda aşiretlerle çatıştı, ağır kayıp verdi ve kalanlar teslim oldu. Güneydoğuda Fransızların sıkışması üzerine İtilâf devletleri 13 Şubat’ta saldırılar durmazsa İstanbul’un resmen işgal edileceğini bildirdi. Maraş’a 1925’te İstiklâl madalyası verildi.",
 "tartisma": "Urfa: TDV ayaklanmayı 7 Şubat, anlaşmayı 10 Nisan, çıkışı 11 Nisan verir; Demir boşaltmanın 11 Nisan saat 01.00’de başladığını yazar. Avcı (2002) ayaklanmayı 9 Şubat’a, çıkışı 9 Nisan gecesine koyar ve çekilen kolun yolda 269 kişi kaybettiğini aktarır; Demir sayı vermez. Maraş: TDV’nin mimari bölümü kalede Türk bayrağının 21 Şubat 1920’de yeniden çekildiğini yazar.",
 "kesinlik": "kesin",
 "olay": [
  "1920-02-11|Maraş",
  "1920-04-11|Urfa"
 ],
 "kaynak": "TDV: kahramanmaras · TDV: sanliurfa · TDV: milli-mucadele · Şerif Demir, “Hatıralarla Milli Mücadele’de Urfa”, Van YYÜ Sosyal Bilimler Enstitüsü Dergisi 48 (2020), 253-270, https://dergipark.org.tr/tr/pub/yyusbed/issue/55674/761914 · Necati Avcı, “Urfa ve Yöresinde Yetişmiş Olan Bazı Bilim Adamları”, Osmangazi Üniversitesi Sosyal Bilimler Dergisi 3/1 (2002), https://dergipark.org.tr/tr/download/article-file/467861",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/kahramanmaras 200 (Tufan Gündüz 1. bölüm; Metin Tuncel 2. bölüm 11-12 Şubat ve 5 Nisan 1925 madalya; Hamza Gündoğdu 3. bölüm kale/21 Şubat) · https://islamansiklopedisi.org.tr/sanliurfa 200 (Ahmet Nezihi Turan) · https://islamansiklopedisi.org.tr/milli-mucadele 200 (Maraş 21 Ocak–12 Şubat; Urfa 7 Şubat; 13 Şubat nota) · DergiPark 1181596 200 PDF okundu (Demir) · DergiPark 467861 200 PDF okundu (Avcı; makalenin konusu bilim adamları, Urfa kurtuluşu giriş paragrafında — yalnız tartışmada kullanıldı). TDV gaziantep okundu (Antep 1 Nisan 1920–7 Şubat 1921) ama karta alınmadı. sutcu-imam 302, ali-saib-ursavas 302."
},

{
 "id": "savas-yunan-yaz-taarruzu-1920",
 "tur": "savas-hikayesi",
 "baslik": "Yunan yaz taarruzu (22 Haziran – 8 Temmuz 1920)",
 "kisa": "Müttefiklerden Milne hattını aşma izni alan Yunan ordusu iki haftada Balıkesir’e, Alaşehir’e ve Bursa’ya ulaştı; milis direnişinin sınırı acı biçimde görüldü.",
 "tarih_metin": "Taarruz 22 Haziran 1920 sabah 05.00 · Salihli 23 Haziran · Alaşehir 26 Haziran · Balıkesir 30 Haziran · Nazilli 3 Temmuz · Bursa 8 Temmuz 1920 (TDV; Sunay; Metin–Sert)",
 "yer": "Batı Anadolu: Akhisar, Kırkağaç, Soma, Balıkesir; Gediz vadisi (Salihli, Bintepeler, Alaşehir); Menderes vadisi (Nazilli); Bursa",
 "taraflar": [
  {
   "ad": "Yunan Küçük Asya ordusu",
   "komutan": "General Paraskevopulos (Sunay)",
   "kuvvet": "kaynakta toplam sayı verilmiyor; Bintepeler’e bir piyade alayı, bir süvari grubu ve bir topçu taburuyla saldırıldı (Metin–Sert)"
  },
  {
   "ad": "Kuvâ-yi Milliye ve 23. Tümen gibi kolordu birlikleri",
   "komutan": "kaynakta tek bir cephe komutanı adı verilmiyor",
   "kuvvet": "kaynakta toplam sayı verilmiyor; Bintepeler mevziinde yaklaşık 700 kişi, 6 ağır makineli tüfek, 2 sahra topu (Metin–Sert)"
  }
 ],
 "oncesi": "Müttefikler Ekim 1919’da Yunan işgal bölgesini Milne hattıyla sınırlamıştı. San Remo kararları İzmir ve Trakya’yı Yunanlılara veriyordu; Yunanistan 4 Haziran’da Batı Trakya’yı işgal etti. Anadolu’nun içinde Düzce ve Yozgat isyanları sürüyor, Çerkez Ethem’in kuvvetleri isyan bölgesine gönderilmiş bulunuyordu. Kuvâ-yi Milliye’nin İzmit’te mütarekeyi bozduğunu gerekçe gösteren İngiltere, Yunan ordusuna Bursa’ya kadar ilerleme izni verdi.",
 "akis": "22 Haziran sabahı Yunan birlikleri üç koldan harekete geçti. Salihli kesiminde ilk gün Kan boğazı düştü; 23 Haziran’da Bintepeler’i tutan yaklaşık 700 kişilik millî birlik, topçu destekli bir alaya karşı iki kanlı çarpışmaya girdi. Kuzey kolu Akhisar, Kırkağaç ve Soma’yı aldı; 22 Haziran’da taarruza uğrayan Balıkesir 30 Haziran’da işgal edildi. Güneyde Alaşehir 26 Haziran’da, Nazilli 3 Temmuz’da düştü. Marmara kıyısını gözleyen İngilizler Türk kuvvetlerini cepheden uzak tutuyordu. 8 Temmuz’da Bursa ele geçirildi.",
 "sonuc": "Bursa’nın işgali ve ilk Osmanlı hükümdarlarının türbelerine yapılan saygısızlık ülkede infial uyandırdı. Meclis’te sorumlu tutulan Mustafa Kemal Paşa yenilginin asıl sebebinin iç isyanlar olduğunu söyledi. Birkaç hafta sonra Sevr Antlaşması imzalandı. Yunan ilerlemesinin milislerle durdurulamayacağı anlaşılınca batı cephesi yeniden düzenlendi ve düzenli orduya geçildi.",
 "tartisma": "Akhisar, Kırkağaç ve Soma’nın tek tek işgal günleri TDV’de verilmez, yalnız sıraları verilir. Sunay, Paraskevopulos’un Balıkesir’e girişini bildiren iki tebliğinin “17-30 Haziran” ve “18 Haziran-1 Temmuz” diye çift takvimle tarihlendiğini aktarır.",
 "kesinlik": "kesin",
 "olay": [
  "1920-06-22|Balıkesir"
 ],
 "kaynak": "TDV: milli-mucadele · TDV: alasehir · Serap Sunay, “Mülki ve Askerî Görevlilerin Raporlarına Göre Yunan İşgali Altında Balıkesir (1920-1922)”, Yakın Dönem Türkiye Araştırmaları 39 (2021), 1-37, doi:10.26650/YTA2021-842417 · Barış Metin – Nimet Sert, “Milli Mücadele Yıllarında Salihli’nin İşgali ve Kurtuluşu”, Akademik Bakış 14/27 (2020), 261-, https://dergipark.org.tr/tr/download/article-file/1400745",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/milli-mucadele 200 (22 Haziran üç kol; Akhisar, Kırkağaç, Soma, Balıkesir; 8 Temmuz Bursa; 26 Haziran Alaşehir; 3 Temmuz Nazilli) · https://islamansiklopedisi.org.tr/alasehir 200 (Emecen; 26 Haziran 1920 işgal; aynı cümlede 'şehir 4 Eylül 1921’de geri alındı' yazıyor — Büyük Taarruz takvimine göre 1922 olmalı, TDV’de olası yıl hatası, karta alınmadı) · https://islamansiklopedisi.org.tr/balikesir 200 (işgal günü yok) · DergiPark 1453926 200 PDF okundu (Sunay) · DergiPark 1400745 200 PDF okundu (Metin–Sert, ATASE belgelerine dayalı). Anahtar 'Balıkesir' maddenin b’sinde geçiyor."
},

{
 "id": "savas-meyselun-1920",
 "tur": "savas-hikayesi",
 "baslik": "Han Meyselûn Muharebesi (24 Temmuz 1920)",
 "kisa": "Faysal ültimatomu kabul etmişti ama telgraf geç ulaştı; Şam yolundaki bir han önünde birkaç saat süren direniş, Arap krallığının sonu oldu.",
 "tarih_metin": "24 Temmuz 1920 (TDV hasimiler; Aslan) · Gouraud’nun ültimatomu 14 Temmuz 1920 · Faysal’ın yazılı kabulü 20 Temmuz 1920",
 "yer": "Beyrut–Şam yolu, Anti-Lübnan dağlarında Han Meyselûn ve Vadi’l-Karn; Şam’a yaklaşık 25 km",
 "taraflar": [
  {
   "ad": "Fransız Levant ordusu",
   "komutan": "General Henri Gouraud · sahada General Mariano Goybet",
   "kuvvet": "Aslan’a göre 10 piyade taburu, süvari ve topçuyla 12 binden fazla asker; tanklar ve bombardıman uçakları"
  },
  {
   "ad": "Suriye Arap Krallığı (Faysal)",
   "komutan": "Savunma Bakanı Yûsuf el-Azme (Yusuf Azma)",
   "kuvvet": "Aslan’a göre en iyi ihtimalle 300 düzenli asker, el-Hindî’nin tümeninden 100 kadar asker ve bedevî deve süvarileri dahil gönüllüler; halk komiteleri cepheye en fazla 1000 gönüllü gönderebildi"
  }
 ],
 "oncesi": "Faysal Mart 1920’de Şam’da kral ilân edilmişti; Nisan 1920’deki San Remo Konferansı bunu tanımayıp Suriye’yi Fransız mandasına verdi. General Gouraud 14 Temmuz’da ültimatom gönderdi. Savunma Bakanı Yûsuf el-Azme savaştan yanaydı, ama 16 Temmuz’daki toplantıda subaylar asker başına 300’den az mermi, 70 topun her biri için 80 mermi kaldığını bildirdi. Faysal ültimatomu önce sözlü, 20 Temmuz’da yazılı kabul etti ve askerleri terhis etmeye başladı. Telgraf hatları kesildiği için kabul haberi Gouraud’ya ancak 21 Temmuz’da ulaştı; Fransız ordusu yürümeyi sürdürdü.",
 "akis": "Faysal, Eğitim Bakanı Sâtı el-Husrî’yi Gouraud’nun karargâhına gönderdi; Gouraud Şam’a bir Fransız denetim heyeti yerleştirilmesi gibi yeni şartlar koydu. 23 Temmuz’da Fransızlar suyu bol Meyselûn’a ilerlemek için izin isteyince Faysal ve Azme yeni şartları reddetti. 24 Temmuz şafağında Fransız tankları Arap mevzilerinin merkezine yüklendi, süvari kanatlardan kuşattı. Birkaç saat süren çarpışmada iki Fransız bölüğü kuşatıldıysa da merkez siperler düştü. Azme siperlere döşettiği mayınları patlatamadan komuta yerinde öldü; uçak bombardımanı geri çekilmeyi bozguna çevirdi ve muharebe sabah onda bitti.",
 "sonuc": "Fransızlar ardından Şam’ı işgal edip Suriye’deki Hâşimî krallığına son verdi; Faysal sürgüne gitti ve bir yıl sonra, 23 Ağustos 1921’de İngiliz desteğiyle Irak kralı oldu. Fransa Beyrut, Trablusşam ve Sayda’yı Lübnan’a katıp Suriye’yi ayrı yönetimlere böldü. Husrî yıllar sonra bu günü “Yevmu Meyselûn” adlı kitabında anlattı.",
 "tartisma": "TDV’nin Faysal I maddesi Fransızların Şam’ı 14 Temmuz 1920’de işgal ettiğini yazar; bu gün Aslan’a göre ültimatom günüdür, TDV’nin Hâşimîler maddesi de muharebeyi 24 Temmuz’a koyup Şam’ın işgalini ondan sonraya yerleştirir. TDV Suriye maddesi yalnız “Temmuz 1920” der.",
 "kesinlik": "kesin",
 "olay": [
  "1920-07-24|Meyselûn"
 ],
 "kaynak": "TDV: hasimiler--hasan · TDV: suriye · TDV: faysal-i · TDV: sati-el-husri · Mustafa Aslan, “Osmanlı Subaylığından Modern Suriye Devleti Savunma Bakanlığına: Yusuf Azma, Hayatı ve Siyasi Faaliyetleri”, Gaziantep University Journal of Social Sciences 22/4 (2023), 1276-1295, https://dergipark.org.tr/en/download/article-file/3396011",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/hasimiler--hasan 200 (Zekeriya Kurşun; '24 Temmuz’da cereyan eden Meyselûn Savaşı’nın ardından Fransızlar Şam’ı işgal') · https://islamansiklopedisi.org.tr/suriye 200 (Cemalettin Şahin; 'Temmuz 1920 … Han Meyselûn') · https://islamansiklopedisi.org.tr/faysal-i 200 (Mustafa L. Bilge; '14 Temmuz 1920’de Şam’ı işgal') · https://islamansiklopedisi.org.tr/sati-el-husri 200 (Yevmu Meyselun, Beyrut 1947) · ölü slug: meyselun 302, meyselun-savasi 302, yusuf-azme / yusuf-el-azme / azme-yusuf 302, gouraud 302 · DergiPark 3396011 200 PDF okundu (Aslan). TARIH NOTU: madde t=1920-07-01 ay hassasiyetinde ('Temmuz 1920'); kaynaklar günü 24 Temmuz verir — kart kaynağın gününü yazdı."
},

{
 "id": "savas-dogu-harekati-gumru-1920",
 "tur": "savas-hikayesi",
 "baslik": "Doğu Harekâtı: Kars’tan Gümrü’ye (28 Eylül – 7 Kasım 1920)",
 "kisa": "Kars’ın düşüşünden bir hafta sonra Kâzım Karabekir’in birlikleri Gümrü önlerine dayandı ve Ermenistan ateşkes istemek zorunda kaldı.",
 "tarih_metin": "Taarruz 28 Eylül 1920 · Kars 30 Ekim 1920 · Gümrü 7 Kasım 1920 (TDV kazim-karabekir) · Iğdır 12 Kasım · Gümrü Antlaşması 2/3 Aralık 1920",
 "yer": "Soğanlı geçitleri, Sarıkamış, Kars, Gümrü (Aleksandropol); Arpaçay hattı",
 "taraflar": [
  {
   "ad": "TBMM Doğu (Şark) Cephesi – 15. Kolordu",
   "komutan": "Kâzım Karabekir Paşa",
   "kuvvet": "Korkmaz’ın aktardığı Türk İstiklâl Harbi serisine göre harekât öncesi mevcut 12.701; kolordu cetvellerinde 12-17 bin er; 3 uçaklık Horasan Tayyare Müfrezesi"
  },
  {
   "ad": "Ermenistan Cumhuriyeti ordusu",
   "komutan": "Başkomutan General Nazarbekov (Sovyet kaynaklarına göre, Korkmaz)",
   "kuvvet": "Korkmaz’ın aktardığı Sovyet kaynaklarına göre toplam 30 bin; 6 uçak"
  }
 ],
 "oncesi": "Mondros’tan sonra Türk ordusu Kars’ı boşaltmıştı. Karslıların kurduğu geçici millî hükümeti İngilizler 12 Nisan 1919’da dağıtıp üyelerini Malta’ya sürdü, Kars’ı Ermenilere, Ardahan’ı Gürcülere bıraktı. Sevr Antlaşması Erzurum, Trabzon, Van ve Bitlis’i de Ermenistan’a veriyordu. Bölgede Ermeni saldırılarının artması üzerine TBMM hükümeti 20 Eylül 1920’de Kâzım Karabekir’e harekât izni verdi.",
 "akis": "28 Eylül’de Soğanlı dağı geçitlerini tutan birlikler taarruza geçti; Sarıkamış, Göle ve Kağızman alındı, 30 Ekim’de Kars ikinci kez kurtarıldı. Korkmaz’a göre Kars’ta Ermeni Harbiye Nazırı ve kurmay başkanı vekili esir düştü, 337 sağlam top ele geçti; Türk kaybı 9 şehit ve 47 yaralıydı. Hava keşfini üç uçaklık Horasan müfrezesi yaptı. Ferikliğe yükseltilen Karabekir ilerlemeyi sürdürdü; birlikler 6 Kasım’da Gümrü çevresindeki istihkâmlara varınca Ermeniler mütareke istedi. TDV’ye göre Gümrü 7 Kasım’da, Iğdır 12 Kasım’da alındı.",
 "sonuc": "Ateşkes görüşmeleri Gümrü’de yürüdü. 2/3 Aralık 1920 gecesi imzalanan Gümrü Antlaşması’yla Ermenistan Sevr’in kendisine tanıdığı haklardan vazgeçti; Kars, Sarıkamış, Kağızman, Kulp ve Iğdır Türk topraklarına katıldı. Bu, Ankara’nın imzaladığı ilk antlaşmaydı. Doğudaki birlikler ve Ermenilerden alınan silahlar batı cephesine kaydırıldı; Karabekir “doğu fâtihi” unvanıyla anıldı.",
 "tartisma": "Gümrü’nün günü: TDV Gümrü’nün 7 Kasım’da alındığını yazar; Korkmaz Türk birliklerinin 6 Kasım’da Gümrü istihkâmlarına vardığını ve Ermenilerin bunun üzerine mütareke istediğini aktarır.",
 "kesinlik": "kesin",
 "olay": [
  "1920-11-07|Gümrü"
 ],
 "kaynak": "TDV: kazim-karabekir · TDV: kars · TDV: milli-mucadele · Erdal Korkmaz, “Arşiv Belgeleri Çerçevesinde Türk İstiklâl Harbi Doğu Cephesi Muharebeleri’nde Horasan Tayyare Müfrezesi”, Dünya İnsan Bilimleri Dergisi 2022/2, 73-, doi:10.55543/insan.1112459",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/kazim-karabekir 200 (Cevdet Küçük; 20 Eylül izin, 28 Eylül, 30 Ekim Kars, 7 Kasım Gümrü, 12 Kasım Iğdır, 3 Aralık antlaşma) · https://islamansiklopedisi.org.tr/kars 200 (Tufan Gündüz; 12 Nisan 1919, 30 Ekim 1920) · https://islamansiklopedisi.org.tr/milli-mucadele 200 (Gümrü Antlaşması kazanımları) · ölü slug: gumru 302, ermenistan 302 · DergiPark 2410774 200 PDF okundu (Korkmaz; kuvvet ve Kars ganimet sayıları Karabekir, Gedik, Türk İstiklal Harbi serisi, Perinçek aktarımı)."
},

{
 "id": "savas-tiflis-1921",
 "tur": "savas-hikayesi",
 "baslik": "Kızıl Ordu’nun Gürcistan seferi ve Tiflis’e girişi (Şubat – Mart 1921)",
 "kisa": "Azerbaycan ve Ermenistan’dan sonra sıra Gürcistan’a geldi: Kızıl Ordu Tiflis’e girerken Ankara da Ardahan, Artvin ve Batum için harekete geçti.",
 "tarih_metin": "Sovyet harekâtı Şubat ortası – 17 Mart 1921 · Tiflis’e giriş 25 Şubat 1921 (TDV acara; Arslan Bilgin; Sarı) — TDV gurcistan ve tiflis maddeleri yalnız “Şubat 1921” der",
 "yer": "Tiflis; Ardahan, Artvin ve Batum",
 "taraflar": [
  {
   "ad": "Sovyet Rusya – Kızıl Ordu",
   "komutan": "harekâtı yönetenler Stalin ve Orjonikidze (Arslan Bilgin)",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Gürcistan Demokratik Cumhuriyeti (Menşevik hükümet)",
   "komutan": "Jordania liderliğindeki Menşevik hükümet",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Gürcistan, Brest-Litovsk’la Batum, Ardahan ve Kars’ın Osmanlılara bırakılmasını kabul etmeyerek 26 Mayıs 1918’de bağımsızlığını ilân etmiş ve birçok devletçe tanınmıştı. Mütarekeden sonra Tiflis’e İngilizler geldi. İngilizler Temmuz 1920’de Batum’u Gürcülere bırakıp çekildi; TBMM hükümeti bu oldubittiyi tanımadığını bildirdi. Sovyet Rusya Nisan 1920’de Azerbaycan’ı, Aralık 1920’de Ermenistan’ı Sovyetleştirmişti. Gümrü’den sonra Ankara’nın da hedefinde Ardahan ve Batum vardı.",
 "akis": "Şubat 1921 ortasında iki koldan saldıran Bolşevik ordusu Gürcü kuvvetlerini bozguna uğrattı ve 25 Şubat’ta Tiflis’e girdi; Gürcistan Komünist Partisi Menşevik yönetimin devrildiğini ilân etti. Aynı günlerde Ankara 20/21 Şubat gecesi Gürcülerden Ardahan ile Artvin’in boşaltılmasını istedi. İki ateş arasında kalan Gürcüler bu iki yeri bıraktı ve Türk birlikleri 23 Şubat’ta Ardahan ile Artvin’e girdi. Batum için Ankara ile Moskova yarıştı; Türk birlikleri 11 Mart’ta Batum’a girip mülkî teşkilât kurmaya başladı. Menşevik hükümet Batum’a çekildi, ardından sürgüne gitti.",
 "sonuc": "16 Mart 1921 Moskova Antlaşması’yla Batum, halkının geniş özerkliği şartıyla Sovyet Gürcistanı’na bırakıldı; Kars ve Ardahan Türkiye’de kaldı. Türk birlikleri Batum’dan çekildi ve Acara 3 Haziran 1921’de özerklik kazandı. Gürcistan Sovyet cumhuriyeti olarak 1922’de Transkafkasya federasyonuna katıldı.",
 "tartisma": "Türk birliklerinin Batum’dan çekiliş günü: Arslan Bilgin 18 Mart 1921, TDV acara 28 Mart verir.",
 "kesinlik": "kesin",
 "olay": [
  "1921-02-25|Tiflis"
 ],
 "kaynak": "TDV: gurcistan · TDV: tiflis · TDV: acara · Funda Arslan Bilgin, “Kafkasya’nın Sovyetleştirilmesi ve Türkiye-Kafkasya İlişkileri”, Karadeniz Araştırmaları XX/77 (2023), 29-42, https://dergipark.org.tr/en/download/article-file/3021165 · Mustafa Sarı, “Batum’da Son Türk İdaresi (1921)”, Vakanüvis Uluslararası Tarih Araştırmaları Dergisi 2, Kafkasya Özel Sayısı, https://dergipark.org.tr/tr/pub/vakanuvis/issue/32134/356290",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/gurcistan 200 (Davut Dursun; 'Şubat 1921’de Gürcistan’ı da işgal') · https://islamansiklopedisi.org.tr/tiflis 200 (Mustafa Aydın; 'Şubat 1921’de Kızılordu tarafından işgal') · https://islamansiklopedisi.org.tr/acara 200 (Mustafa Aydın; 25 Şubat 1921 Bolşevik işgali, 23 Şubat nota, 11 Mart Artvin-Ardahan-Batum, 28 Mart boşaltma, 3 Haziran özerklik) · https://islamansiklopedisi.org.tr/batum 200 indirildi, karta alınmadı · DergiPark 3021165 200 PDF okundu · DergiPark 368105 200 PDF okundu (Sarı; 25 Şubat Tiflis, 20/21 Şubat talep, 23 Şubat Ardahan-Artvin, 11 Mart Batum). Kuvvet sayısı hiçbir okunan kaynakta yok."
},

{
 "id": "savas-birinci-inonu-1921",
 "tur": "savas-hikayesi",
 "baslik": "Birinci İnönü Muharebesi (6–11 Ocak 1921)",
 "kisa": "Çerkez Ethem’in isyanını fırsat bilen Yunan ordusu Eskişehir’e yürüdü; yeni kurulan düzenli ordu ilk sınavını İnönü sırtlarında verdi.",
 "tarih_metin": "6–11 Ocak 1921; Yunan taarruzunun İnönü’de kırıldığı gün 10 Ocak (TDV milli-mucadele; Uca, Türk İstiklâl Harbi serisine dayanarak)",
 "yer": "İnönü mevzileri, Bozüyük–Eskişehir arası; Yunan taarruzunun çıkış yönleri Bursa ve Uşak",
 "taraflar": [
  {
   "ad": "TBMM Batı Cephesi (düzenli ordu)",
   "komutan": "Albay İsmet Bey (İnönü)",
   "kuvvet": "kaynakta sayı verilmiyor"
  },
  {
   "ad": "Yunan ordusu",
   "komutan": "kaynakta adı verilmiyor",
   "kuvvet": "Nutuk’a göre (Uca) Eskişehir üzerine üç tümen yürüdü"
  }
 ],
 "oncesi": "1920 sonbaharında Yunanlılar İnegöl ve Yenişehir’i almıştı. Milislerle bu ilerlemenin durdurulamayacağı anlaşılınca batı cephesi ikiye bölündü: kuzey İsmet Bey’e, güney Refet Bey’e verildi, çeteler dağıtılıp düzenli orduya katıldı. Çerkez Ethem ve kardeşleri buna direndi; 27 Aralık’ta onlara karşı harekât başladı ve 5 Ocak 1921’de Gediz’de çatışma çıktı. Uca’ya göre seçim sonrası yeni Yunan hükümeti bir başarıya ihtiyaç duyuyor, Türk kuvvetleri Ethem’le uğraşırken Ankara’yı yıkabileceğine inanıyordu.",
 "akis": "6 Ocak’ta Yunan ordusu Bursa ve Uşak yönlerinden taarruza geçti; kuzeyde üç tümen Eskişehir üzerine yürüdü. Gediz’deki önemli Türk kuvvetleri kuzeye kaydırılarak bu tümenleri karşıladı. Sayı ve teçhizatça üstün Yunan kuvvetleri 10 Ocak’ta İnönü’de yenildi ve 11 Ocak’ta eski mevzilerine çekildi. Gediz’de bütün kuvvetleri çökertilen Çerkez Ethem ve kardeşleri Yunanlılara sığındı; peşlerine düşen süvari 14-22 Ocak arasında Ethem kuvvetlerini esir aldı.",
 "sonuc": "Düzenli ordunun bu ilk zaferi Ankara’ya nefes aldırdı; İsmet ve Refet beyler mirlivalığa yükseltildi. Mustafa Kemal Paşa 13 Ocak’ta Meclis kürsüsünden zaferi Namık Kemal’in mısralarıyla andı, 20 Ocak’ta da ordunun Bursa’ya kadar takip edecek gücü olduğu halde durmayı seçtiklerini söyledi. Başarı üzerine müttefikler Londra Konferansı’nı toplamaya ve Ankara’nın da masaya oturmasına razı oldu.",
 "tartisma": "",
 "kesinlik": "kesin",
 "olay": [
  "1921-01-10|Birinci İnönü"
 ],
 "kaynak": "TDV: milli-mucadele · Alaattin Uca, “Mustafa Kemal Paşa ve İnönü Savaşları”, Anadolu Üniversitesi Sosyal Bilimler Dergisi 21 (Özel Sayı, 2021), 1-24, https://dergipark.org.tr/en/pub/ausbd/issue/61124/907713 · Halit Kaya, “Milli Mücadele ve Refet (Bele) Paşa”, KHO Bilim Dergisi 23/2 (2013), https://dergipark.org.tr/tr/download/article-file/403536",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/milli-mucadele 200 (25 Ekim İnegöl-Yenişehir, cephe ikiye, 27 Aralık, 5 Ocak Gediz, 10 Ocak İnönü, Londra Konferansı) · ölü/arama: inonu-muharebeleri arama sayfası (madde yok), inonu 302, ismet-inonu 302, inonu-ismet 302, ismet-pasa 302, inonu-savaslari 302 · DergiPark 1677265 200 PDF okundu (Uca; 6-11 Ocak Türk İstiklal Harbi 1966 s.147; Nutuk üç tümen; 13 ve 20 Ocak TBMM konuşmaları) · DergiPark 403536 200 PDF okundu (Kaya; 10 Ocak mirlivalık). Kuvvet sayısı: bir web özetinde Türk 12.368 kişi / Yunan 70 top gibi rakamlar göründü, kaynak dosyada doğrulanamadı — yazılmadı."
},

{
 "id": "savas-ikinci-inonu-aslihanlar-1921",
 "tur": "savas-hikayesi",
 "baslik": "İkinci İnönü ve Aslıhanlar–Dumlupınar (23 Mart – 15 Nisan 1921)",
 "kisa": "Yunan ordusu Londra’daki pazarlık sürerken yeniden taarruz etti; İnönü’de “milletin makûs talihi” yenildi, ama güneyde savaş o kadar parlak bitmedi.",
 "tarih_metin": "Yunan taarruzu 23 Mart 1921 · İnönü’de durdurulma 1 Nisan 1921 · Afyon’un geri alınışı 7 Nisan 1921 (TDV milli-mucadele) · Aslıhanlar 8–12 Nisan, Dumlupınar 13–15 Nisan 1921 (Uca ve Kaya, Türk İstiklâl Harbi serisine dayanarak)",
 "yer": "Kuzeyde İnönü sırtları (Bursa–Bilecik–Eskişehir yönü); güneyde Afyon, Aslıhanlar ve Dumlupınar",
 "taraflar": [
  {
   "ad": "TBMM Batı Cephesi ve Güney Cephesi",
   "komutan": "Batı: İsmet Paşa · Güney: Refet Paşa",
   "kuvvet": "kaynakta toplam sayı verilmiyor; Ankara’dan gönderilen Meclis Muhafız Taburu 900 tüfek ve 6 makineli tüfek (Uca)"
  },
  {
   "ad": "Yunan ordusu",
   "komutan": "kaynakta adı verilmiyor",
   "kuvvet": "kaynakta sayı verilmiyor; güneyde Afyon doğusuna ilerleyen 1. Yunan Kolordusu (Kaya)"
  }
 ],
 "oncesi": "21 Şubat’ta toplanan Londra Konferansı 12 Mart’ta sonuçsuz dağıldı. İzmir’e yeni kuvvetler çıkaran Yunanlılar, konferansın antlaşma için tanıdığı süre dolmadan 23 Mart’ta yeniden taarruza geçti ve Bilecik ile Afyon’u işgal etti. Üstün düşman karşısında Ankara elindeki son yedeği de gönderdi: Mustafa Kemal Paşa 28-29 Mart gecesi Meclis Muhafız Taburu’nu İsmet Bey’in emrine yolladı.",
 "akis": "Kuzeyde muharebe yine İnönü mevzilerinde geçti; Fevzi Paşa’nın Meclis’e anlatımıyla yedi gün yedi gece süren çarpışmalardan sonra Yunan taarruzu 1 Nisan’da durduruldu ve düşman geri çekildi. Güneyde Genelkurmay, Afyon doğusuna ilerlemiş Yunan kolordusuna Kütahya’dan kuzeyden darbe vurmayı planlamıştı. Yunanlıların Afyon’u boşaltıp Dumlupınar’a çekildiği anlaşılınca Refet Paşa gelmekte olan birlikleri beklemeden taarruz etti; TDV’ye göre Afyon 7 Nisan’da geri alındı. 8 Nisan’da Aslıhanlar’da başlayan muharebelerde Yunanlılar ağır kayıplarına rağmen Dumlupınar’daki ana mevzilerine çekilip direndi; Refet Paşa 12 Nisan’da zafer haberi gönderdi.",
 "sonuc": "Mustafa Kemal Paşa’nın İsmet Paşa’ya “milletin makûs talihini” yendiğini yazdığı telgraf ünlendi; zafer İstanbul’da mitinglerle kutlandı ve İstanbul gazeteleri ilk kez Mustafa Kemal’in resmini bastı. Müttefik yüksek komiserler 18 Mayıs’ta tarafsızlık ilân etti. Güneydeki sonuç ise tartışmalı kaldı; Mustafa Kemal sonradan bu muharebelerin kazanılmadığını görüp tedbir aldı.",
 "tartisma": "TDV Afyon’un Aslıhanlar’da ağır yenilgiye uğratılan Yunanlılardan 7 Nisan’da geri alındığını yazar. Uca ve Kaya ise Türk İstiklâl Harbi serisine dayanarak Aslıhanlar’ı 8-12 Nisan’a koyar ve Afyon’un bu muharebeden önce Yunanlılarca boşaltıldığını söyler. Uca’ya göre Aslıhanlar ve Dumlupınar bir Yunan oyalama muharebesiydi, taktik üstünlük Yunanlılarda kaldı. Oysa Refet Paşa 12 Nisan’da zafer bildirmiş, Mustafa Kemal de onu tebrik etmişti.",
 "kesinlik": "tartismali",
 "olay": [
  "1921-03-23|ikinci taarruzu",
  "1921-04-01|İkinci İnönü",
  "1921-04-07|Aslıhanlar"
 ],
 "kaynak": "TDV: milli-mucadele · Alaattin Uca, “Mustafa Kemal Paşa ve İnönü Savaşları”, Anadolu Üniversitesi Sosyal Bilimler Dergisi 21 (Özel Sayı, 2021), 1-24, https://dergipark.org.tr/en/pub/ausbd/issue/61124/907713 · Halit Kaya, “Milli Mücadele ve Refet (Bele) Paşa”, KHO Bilim Dergisi 23/2 (2013), https://dergipark.org.tr/tr/download/article-file/403536",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/milli-mucadele 200 ('23 Mart’ta … Bilecik ve Afyon’u işgal … Düşman 1 Nisan’da yine İnönü sırtlarında durduruldu. Aslıhanlar’da ağır yenilgiye uğratılarak 7 Nisan’da Afyon geri alındı') · DergiPark 1677265 200 PDF okundu (Uca; II. İnönü 23 Mart-1 Nisan; Muhafız Taburu 900 tüfek 6 MG; Aslıhanlar 8-12, Dumlupınar 13-15 Nisan, taktik üstünlük Yunanlılarda — Türk İstiklal Harbi 1966 s.534, 574) · DergiPark 403536 200 PDF okundu (Kaya; Afyon tahliyesi, 8 Nisan, 12 Nisan zafer telgrafı; ATASE 1999b s.539-566). OLGU ÇELİŞKİSİ: madde 1921-04-07 b='Aslıhanlar'da Yunan yenilgisi — Afyon'un geri alınışı'; akademik kaynaklar Aslıhanlar’ı 8-12 Nisan’a ve Türk başarısızlığına koyar. Gün (7 Nisan Afyon) TDV ile örtüşür; çelişki başlıktaki nedensellik ve sonuçta."
},

{
 "id": "savas-buyuk-taarruz-1922",
 "tur": "savas-hikayesi",
 "baslik": "Büyük Taarruz ve Başkumandan Meydan Muharebesi (26 Ağustos – 9 Eylül 1922)",
 "kisa": "On ayı aşan hazırlık bir sabah Afyon önünde taarruza döndü; dört gün sonra Yunan ana kuvvetleri kuşatılmış, iki hafta sonra Türk birlikleri İzmir’deydi.",
 "tarih_metin": "Taarruz 26 Ağustos 1922 · Afyon 27 Ağustos · Başkumandan Muharebesi ve Kütahya 30 Ağustos · Trikupis kolunun teslimi 1 Eylül akşamı, esaret 2 Eylül · Eskişehir 2 Eylül · Aydın 7 Eylül · İzmir 9 Eylül 1922 (TDV; Çaykıran)",
 "yer": "Afyonkarahisar cephesi; Dumlupınar–Adatepe; Kütahya, Uşak, Manisa, İzmir",
 "taraflar": [
  {
   "ad": "TBMM ordusu (Batı Cephesi: 1. Ordu ve 2. Ordu)",
   "komutan": "Başkumandan Mustafa Kemal Paşa · 1. Ordu Nûreddin Paşa · 2. Ordu Yakup Şevki Paşa",
   "kuvvet": "TDV’ye göre batı cephesinde ilk kez 200.000’e yakın kuvvet toplandı; on uçaklık bir tayyare bölüğü"
  },
  {
   "ad": "Yunan Anadolu ordusu",
   "komutan": "sahada 1. ve 2. Kolordu komutanları Trikupis ve Digenis (Çaykıran)",
   "kuvvet": "kaynakta sayı verilmiyor"
  }
 ],
 "oncesi": "Sakarya’dan sonra Yunan ordusu Eskişehir–Afyon hattına çekilmişti. Fransa ile yapılan Ankara Antlaşması güneydeki birlikleri serbest bıraktı. Batı cephesi iki ordu halinde örgütlendi, yedek subaylar ve 1315-1317 doğumlular silah altına alındı. Hindistan Hilâfet Komitesi’nin ve Buhara’nın gönderdiği paralarla silah, cephane ve uçak alındı. Son bir barış denemesi için Avrupa’ya giden Fethi Bey’le İngilizler görüşmedi; Yunanistan ise İyonya muhtariyetini ilân edip İstanbul’a yürümeye kalkıştı.",
 "akis": "Taarruz 26 Ağustos sabahı Afyon cephesinde başladı; iki günde Yunan kuvvetlerinin yarısı savaş dışı kaldı ve ordu kuşatıldı. Afyon 27 Ağustos’ta kurtuldu. 30 Ağustos’ta Adatepe çevresinde altı tümen Yunan kuvvetlerini dört yandan sardı; bizzat Mustafa Kemal Paşa’nın yönettiği bu Başkumandan Meydan Muharebesi kuşatmayı tamamladı. Aynı gün bir süvari tümeni yakılmış Kütahya’ya girdi. “Ordular, ilk hedefiniz Akdeniz’dir” emriyle takip başladı. Kuşatılan Trikupis kolu 1 Eylül akşamı beyaz bayrak çekti; Trikupis Yunan başkomutanlığına atandığını Mustafa Kemal Paşa’dan öğrendi. 9 Eylül’de Nûreddin Paşa’nın birlikleri İzmir hükümet konağına Türk bayrağını çekti.",
 "sonuc": "Mustafa Kemal Paşa ertesi gün İzmir’e girdi; 12 Eylül’de Ermeni mahallesinde başlayan yangın şehrin değişik yerlerinde üç gün sürdü. Türk ordusunun Çanakkale’ye yürümesi Boğazlar krizini doğurdu ve 11 Ekim 1922’de imzalanan Mudanya Mütarekesi Doğu Trakya’yı savaşsız geri verdi. Askerî zafer, Lozan masasının zeminini hazırladı.",
 "tartisma": "Trikupis’in nasıl esir alındığı tartışmalıdır; Çaykıran ATASE’deki Yunancadan çevrilmiş eserlerle bu ihtilafları gidermeye çalışır. Teslim olanların sayısı Yunan kaynaklarında 84 subay ve 1.600 er, başka bir Yunan kaynağında 1 general, 1 tümen komutanı, 84 subay ve 1.500 er olarak geçer.",
 "kesinlik": "kesin",
 "olay": [
  "1922-08-26|Büyük Taarruz",
  "1922-08-30|Başkumandanlık",
  "1922-09-09|İzmir"
 ],
 "kaynak": "TDV: milli-mucadele · TDV: afyonkarahisar · TDV: kutahya · TDV: eskisehir · TDV: aydin · TDV: izmir · Güzin Çaykıran, “Yunan Ordusu Başkomutanı General Trikupis’in Esareti (2 Eylül 1922)”, Journal of Universal History Studies 5/2 (2022), 239-252, doi:10.38000/juhis.1168594",
 "gorsel": null,
 "gorsel_kaynak": "aranmadı",
 "ic_not": "Okunan: https://islamansiklopedisi.org.tr/milli-mucadele 200 (200.000, iki ordu, 26 Ağustos, 30 Ağustos, Akdeniz emri, 9 Eylül Nûreddin Paşa, 12 Eylül yangın, Mudanya) · https://islamansiklopedisi.org.tr/afyonkarahisar 200 (27 Ağustos 1922) · https://islamansiklopedisi.org.tr/kutahya 200 (30 Ağustos süvari tümeni) · https://islamansiklopedisi.org.tr/eskisehir 200 (2 Eylül 1922) · https://islamansiklopedisi.org.tr/aydin 200 (7 Eylül 1922) · https://islamansiklopedisi.org.tr/izmir 200 · ölü/arama: buyuk-taarruz arama sayfası (madde yok), kocatepe 302, dumlupinar 302, dumlupinar-savasi 302, trikupis 302 · DergiPark 2622797 200 PDF okundu (Çaykıran; Adatepe, tümen dağılımı, 1 Eylül 20.00 teslim, esir sayıları). Yunan başkomutanı adı ve Yunan kuvvet sayısı okunan kaynaklarda yok — yazılmadı."
}
];
