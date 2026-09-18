// ============================================================================
// PAKET 0068 — ISGAL-1787 oturumu (18 Eylül 2026)
// KONU: 1787-92 Osmanlı-Rus-Avusturya savaşında haritada karşılığı olup anlatısı
// olmayan kırılmalar + Kuzey Kafkasya (Kabartay ve Çerkez) kronolojisi.
//
// Kaynak: hepsi TDV İslâm Ansiklopedisi'nin GÖVDESİ okunarak yazıldı
// (cerkezler · semendire · belgrad · zistovi-antlasmasi · kabartaylar; beşi de
// bu turda HTTP 200 döndü ve metinleri ayrıştırıldı). Atlas referans alınmadı:
// hiçbir tarih "veride öyle yazıyor" diye seçilmedi.
//
// MÜKERRER TARAMASI: yazmadan önce çekirdek kronoloji (57 dosya · 1510 madde)
// hedef günlerin ±30 günlük penceresinde tarandı. Koordinatörün istediği
// maddelerin BEŞİ ZATEN VARDI ve bu dosyaya YAZILMADI:
//   1788-10-03 Novi (Laudon) · 1789-11-01 Bükreş (Coburg) · 1789-11-14 Bender
//   · 1790-10-24 Kili · 1791-08-04 Ziştovi. Ayrıca 1788-08-26 Dubica,
//   1788-09-01 Hotin, 1792-01-10 Yaş, 1799-02-18 El-Arîş, 1838-01-01 Soçi-Tuapse
//   ve 1864-07-01 Çerkes Sürgünü de mevcut.
//
// HASSASİYET: gün vermeyen kaynakta YYYY-01-01 + kesinlik:"yil" kullanıldı
// (CLAUDE.md §4). Tek istisna 1789-10-13'tür ve gerekçesi maddenin gun: ve
// d: alanlarında AÇIKÇA yazılıdır — Belgrad'ın teslim günü hiçbir TDV
// maddesinde yok, tarih Semendire'nin TDV'de verilen gününden alınmıştır.
//
// HARİTA KARŞILIĞI: yalnız ilk madde (1789-10-13) bir kırılmayı anlatır
// (Belgrad ve Semendire'nin `isg:` dönemleri). Öteki beşi bağlam maddesidir,
// kırılmasızdır — Değişmez 2t sayacını 12'den 17'ye çıkarır (tavan 42).
// ============================================================================
window.OLAYLAR_P0068 = [

// ---------- 1787-92 SAVAŞI — TUNA BOYU ----------
{ t:"1789-10-13", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Belgrad ve Semendire'nin Avusturya'nın eline geçmesi", gun:"13 Ekim 1789 (Semendire'nin teslim günü; Belgrad'ın günü kaynakta YOK)", yer:"Belgrad ve Semendire (Tuna boyu)", yer_id:"Belgrad", kisiler:"Avusturya kumandanı Loudon (Laudon)", d:"Savaşın üçüncü yılında Avusturya kumandanı Loudon Tuna boyundaki Osmanlı sınır kalelerini aldı. Semendire 13 Ekim 1789'da, garnizonun 300 askerinin silâhlarını bırakarak çekilmesi şartıyla teslim oldu; elli yıldır Osmanlı sınır kalesi olan Belgrad da aynı sonbaharda Avusturya'nın eline geçti. Loudon 1789-1791 arasında Semendire hisarına ve varoşuna hâkim siperler yaptırdı. Her iki şehir de 4 Ağustos 1791'de imzalanan Ziştovi Antlaşması'yla Osmanlı Devleti'ne geri verildi; bu yüzden ikisi de haritada ilhak değil işgal olarak gösterilir. Belgrad'ın teslim GÜNÜ okunan dört TDV maddesinin hiçbirinde geçmiyor (madde yalnız yılı veriyor); buradaki tarih Semendire'nin günüdür ve Belgrad için bir tahmin değil, aynı harekâtın bilinen tek günüdür.", kaynak:"semendire", duygu:["😔"] },

// ---------- KUZEY KAFKASYA — KABARTAY ----------
{ t:"1427-01-01", kesinlik:"yil", k:"siyaset", etiket:["siyaset","idari","konu-siyasi"], b:"Prens Yinal'in Kabartayları tek yönetimde birleştirmesi", gun:"1427 (Yinal'in hüküm yıllarının başlangıcı — birleşmenin günü kaynakta yok)", yer:"Orta Kafkasya (Terek ve Malka havzaları)", yer_id:"Kabartay (Nalçik)", kisiler:"Prens Yinal", d:"Moğol-Tatar istilâlarından sonra doğuya çekilen Çerkezlerin Kabartay kolunda Prens Yinal (1427-1456) halkın büyük kısmını kendi yönetimi altında birleştirdi; Kabartay, Besleney ve Çemguy prensleri soylarını ona dayandırır. Kabartay beyleri XVIII. yüzyılın sonlarına kadar Çeçen, İnguş, Karaçay-Malkar ve Osetler ile Kafkas dağlarının kuzeyindeki Abazalar üzerinde de nüfuz sahibiydi. Tarih, Yinal'in hüküm yıllarının başlangıcıdır; birleşmenin günü bilinmiyor.", kaynak:"cerkezler", duygu:["🏛"] },
{ t:"1563-01-01", kesinlik:"yil", k:"siyaset", etiket:["siyaset","konu-siyasi","konu-askeri"], b:"Rusya'nın Kafkasya'daki ilk kalesi: Terek", gun:"1563 (yalnız yıl)", yer:"Terek nehri kıyısı", yer_id:"Kabartay (Nalçik)", kisiler:"Kabartay Prensi Temrük, Çar IV. İvan", d:"Kırım akınlarından ve köle baskınlarından bunalan Kabartay prensi Temrük 1557 ve 1559'da Moskova'ya elçiler yolladı, kızını Çar IV. İvan ile evlendirdi. Bazı Kabartay prensleriyle antlaşma imzalayan Ruslar 1563'te Terek nehri kıyısında Kafkasya'daki ilk kalelerini kurdular. Osmanlı padişahı 1570'te gönderdiği nâmede Kabartay'daki Rus kalelerinin yıkılmasını istedi; kale 1574'te yıkıldı. Bu bir ittifak ve kale meselesidir, toprak el değiştirmesi değildir — bu yüzden haritada bir değişiklik göstermez.", kaynak:"cerkezler", duygu:["📌"] },
{ t:"1763-01-01", kesinlik:"yil", k:"siyaset", etiket:["siyaset","konu-siyasi","konu-askeri"], b:"Rusya'nın Kabartay'da Mozdok Kalesi'ni yapması", gun:"1763 (yalnız yıl)", yer:"Mozdok (Terek boyu)", yer_id:"Kabartay (Nalçik)", d:"Belgrad Antlaşması'nın (1739) tarafsız bıraktığı Kabartay'da Osmanlı ve Rus taraftarı prensler arasında mücadele başlamıştı. Bu karışıklıktan yararlanan Rusya, Osmanlı Devleti'nin ve Kabartay prenslerinin itirazına rağmen 1763'te Terek kıyısında Mozdok Kalesi'ni yaptırdı. Kale, sonraki yıllarda Azak'tan Mozdok'a uzanan Rus müstahkem hattının doğu ucu oldu ve 1768-74 savaşının sebeplerinden biri sayıldı.", kaynak:"cerkezler", duygu:["📌"] },

// ---------- KUZEY KAFKASYA — ÇERKEZ KIYISI ----------
{ t:"1475-01-01", kesinlik:"yil", k:"siyaset", etiket:["siyaset","konu-siyasi"], b:"Çerkez kıyısının Osmanlı hâkimiyetini tanıması", gun:"1475 (Gedik Ahmed Paşa seferi; 1479'da Kasım Paşa ile tamamlandı — gün kaynakta yok)", yer:"Taman ile Soçi arası Karadeniz kıyısı", yer_id:"Tuapse", kisiler:"Gedik Ahmed Paşa, Kasım Paşa", d:"İstanbul'un fethinden sonra Akdeniz'le bağlantısı kesilen Karadeniz kıyısındaki Ceneviz kolonileri Fâtih Sultan Mehmed'in emriyle 1475'te Gedik Ahmed Paşa, 1479'da Kasım Paşa tarafından Osmanlı idaresine alındı. Taman ile Soçi arasında sahilde yaşayan ve Osmanlı kaynaklarının \"Aşağıra Çerkezleri\" adını verdiği topluluklar Osmanlı hâkimiyetini tanıdı; kıyı bundan sonra üç asır boyunca Osmanlı hâkimiyetinde kaldı. Bu bir hâkimiyetin tanınmasıdır: kabileler kendi düzenlerini sürdürdü, Osmanlı'nın fiilen tuttuğu yerler Anapa, Soğucak, Gelincik, Sohum ve Faş gibi kıyı kaleleriydi.", kaynak:"cerkezler", duygu:["🤝"] },
{ t:"1861-06-13", k:"siyaset", etiket:["siyaset","konu-siyasi","konu-askeri"], b:"Çerkezlerin Soçi'de toplanıp Osmanlı, İngiltere ve Fransa'dan yardım istemesi", gun:"13 Haziran 1861", yer:"Soçi", yer_id:"Soçi (Sâşe)", d:"Şeyh Şâmil'in teslim olmasından (1859) sonra da Ruslarla savaşmayı sürdüren Çerkezler 13 Haziran 1861'de Soçi'de toplandı ve Osmanlı Devleti ile İngiltere ve Fransa'dan yardım istedi. Yardım gelmedi; aynı yıl çarın onayıyla Çerkezlerin sürgünü resmen kararlaştırıldı ve 1861-1864'te Abzeh, Şapsığ ve Ubıh toprakları işgal edildi. Halka bir ay içinde Kuban boyunda gösterilecek yerlere yerleşmeleri ya da Osmanlı topraklarına göç etmeleri, aksi hâlde savaş esiri olarak Rusya'nın iç kesimlerine sürülecekleri bildirildi.", kaynak:"cerkezler", duygu:["✊","😔"] },

];
