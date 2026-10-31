// =====================================================================
// TARİHÎ YOLLAR — ROMA-AKDENİZ · birinci dalga (İtalya, Galya, Hispanya, Balkan, Anadolu, Arabia)
// Ad alanı: data/yollar_roma_akdeniz.js → window.YOLLAR_ROMA_AKDENIZ
// Şema: data/yollar_anadolu_balkan.js başlığındaki ile aynıdır (app.js `YOLLAR_*` okur).
//   Atlasta kaydı olmayan durak AÇIK koordinatla yazılır: [lon, lat, "ad"] — bu koordinatlar
//   bugünkü yerleşimin konumudur (antik istasyon konumu DEĞİL, kaynaksız eşleşme); üretilmiş
//   petek verisine girmez. Yıllar astronomik: MÖ 312 = -0311.
//
// 🟡 KAYNAK DURUMU (31 Ekim 2026): yol KİMLİĞİ, YAPIM YILI ve YAPAN, Pleiades (pleiades.stoa.org;
// her kaydın künyesi Barrington Atlas / Talbert 2000 harita numarasına dayanır) JSON kayıtlarından
// okundu. DURAK DİZİLERİ ise çoğunlukla Vikipedi tablolarından alındı ve akademik ikinci teyit
// YOKTUR ⇒ hiçbir kayıt `dogrulandi:true` DEĞİLDİR. OKUNAMADI: Barrington Atlas'ın kendisi,
// Talbert 2010 (Peutinger veritabanı), Laurence 2011 (The Roads of Roman Italy), Chevallier, ORBIS,
// Itinerarium Antonini metni, French (RRMAM), TIB, Treccani; TDV'de Roma yolu maddesi sorgulanmadı.
// `f` = yapım/ilk tanıklık yılı (ic_not'ta hangisi olduğu yazılı). `t` = Pleiades zaman aralığının
// sonu (MS 640, geç antik) — YOLUN KULLANIM BİTİŞİ DEĞİLDİR; hiçbir yol için kaynaklı bitiş yılı
// bulunamadı (editoryal gösterim sınırı).
//
// DALGA SINIRI: ana kara yolları. Henüz YOK: deniz geçişleri (Brundisium–Dyrrachium vb.), Sicilya
// yolları (Valeria/Pompeia), Salaria/Latina/Valeria (yapım yılı bulunamadı), Popilia/Annia, Dunav
// limes, Strata Diocletiana, Via Maris, Via Hadriana, Nil boyu, Kuzey Afrika, Agrippa yolları.
// =====================================================================
window.YOLLAR_ROMA_AKDENIZ = [

  // ---------------- İTALYA — ana ----------------
  { id: "rm-appia", ad: "Via Appia (Roma – Capua – Beneventum – Tarentum – Brundisium)", sinif: "ana",
    gecit: ["Roma", [13.25, 41.29, "Tarracina (Terracina)"], "Capua", "Benevento", [15.82, 40.96, "Venusia (Venosa)"], "Taranto", "Brindisi"],
    f: "-0311-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 356966898 (Via Appia): 'MÖ 4. yy'da sansür Appius Claudius Caecus başlattı'; Pleiades kaynakçası: Humm 1996, MEFRA 108.2, 693-746; Talbert 2000, harita 44 C2; Rathmann, Brill's New Pauly 2015",
    ic_not: "f = MÖ 312, Appius Claudius Caecus (Pleiades). Capua'dan sonraki uzatma ve Brundisium'a varış yılı çelişkili (Vikipedi MÖ 264 / MÖ 244, akademik teyit yok): bu kayıt Brundisium'a kadar tek parça çizer, o kısım için f yaklaşıktır. Durak dizisi Vikipedi tablosundan (Tarracina, Capua, Beneventum, Venusia, Tarentum, Brundisium); akademik ikinci teyit YOK. Tarracina ve Venusia açık koordinat = bugünkü Terracina/Venosa. t Pleiades'in 'MS 300-640' ad-doğrulama aralığının sonu, kullanım bitişi değil." },
  { id: "rm-appia-traiana", ad: "Via Traiana (Beneventum – Canusium – Barium – Brundisium)", sinif: "ana",
    gecit: ["Benevento", [15.31, 41.36, "Aecae (Troia)"], [16.07, 41.22, "Canusium (Canosa)"], [16.69, 41.11, "Butuntum (Bitonto)"], "Bari", [17.39, 40.89, "Gnathia (Egnazia)"], "Brindisi"],
    f: "0109-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 568637774 (Benevento Trajan Takı, 'Trajanic extension of the Via Appia'); Ashby–Gardner, 'The Via Traiana', Papers of the British School at Rome 8 (1916) (içeriği okunamadı)",
    ic_not: "f = MS 109, İmparator Traianus (Vikipedi 'Via Traiana' ve Pleiades Trajan Takı atfı; tek yıl PBSR'den OKUNMADI). Durak dizisi çok kaynaklı web özetinden, kesin sıra teyitsiz; Egnazia sahil kesiminde. Açık koordinatlar bugünkü yerleşim. t = Pleiades aralık sonu." },
  { id: "rm-flaminia", ad: "Via Flaminia (Roma – Narnia – Fanum – Ariminum)", sinif: "ana",
    gecit: ["Roma", [12.51, 42.52, "Narnia (Narni)"], [12.61, 42.94, "Mevania (Bevagna)"], [12.79, 43.11, "Nuceria (Nocera Umbra)"], [12.81, 43.69, "Forum Sempronii (Fossombrone)"], [13.02, 43.84, "Fanum Fortunae (Fano)"], [12.91, 43.91, "Pisaurum (Pesaro)"], "Rimini"],
    f: "-0219-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 856514595 (Via Flaminia): MÖ 220, sansür Gaius Flaminius; Pleiades kaynakçası: Livy Per. 20.21; Ashby–Fell, JRS 11 (1921) 125-190; Messineo 1991, 1993; Talbert 2000, 43 B1",
    ic_not: "f = MÖ 220, Gaius Flaminius Nepos (Pleiades). Durak dizisi Vikipedi tablosundan (Pons Mulvius, Saxa Rubra, Ocriculum, Carsulae, Forum Flaminii, Intercisa/Furlo, Cales atlandı); akademik teyit YOK. Açık koordinatlar bugünkü yerleşim. Furlo tüneli MS 77 Vespasianus (Vikipedi). t = Pleiades aralık sonu (Vikipedi: geç 6. yy'da Lombard kesintisi — kaynaksız, yazılmadı)." },
  { id: "rm-aemilia", ad: "Via Aemilia (Ariminum – Bononia – Mutina – Parma – Placentia)", sinif: "ana",
    gecit: ["Rimini", [11.71, 44.35, "Forum Cornelii (Imola)"], "Bolonya", "Modena", [10.63, 44.70, "Regium Lepidi (Reggio Emilia)"], "Parma", "Piacenza"],
    f: "-0186-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 66908841 (Via Aemilia): 'construction began in 187 BC'; Pleiades kaynakçası: Livy 39.2.1; Strabon 5.1.11; Tozzi 1989; Laurence 2011; Talbert 2000, 39 H4; Treccani 'Emilia, via' (okunamadı)",
    ic_not: "f = MÖ 187, konsül Marcus Aemilius Lepidus (Pleiades). Durak dizisi Vikipedi (Bologna, Modena, Reggio, Parma kolonileri MÖ 189-183; yol ≈176 Roma mili); Pleiades ara istasyon listesi VERMEZ. Imola ve Reggio Emilia açık koordinat. t = Pleiades aralık sonu." },
  { id: "rm-postumia", ad: "Via Postumia (Genua – Placentia – Cremona – Verona – Aquileia)", sinif: "ana",
    gecit: ["Cenova", [8.86, 44.90, "Dertona (Tortona)"], "Piacenza", [10.02, 45.13, "Cremona"], "Verona", [12.31, 45.72, "Maserada sul Piave"], "Aquileia"],
    f: "-0147-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 788760849 (Via Postumia): MÖ 148, konsül Spurius Postumius Albinus Magnus; Pleiades kaynakçası: CIL I² 624; Tacitus Hist. 3.21; Cera 2000; De Feo 1997; Arslan–Sena Chiesa 1998; Talbert 2000, 39 D4",
    ic_not: "f = MÖ 148, Spurius Postumius Albinus (Pleiades). Durak dizisi Vikipedi (Dertona, Placentia, Cremona, Bedriacum, Verona, Piave geçişi Maserada, Aquileia); Pleiades ara durak listesi vermez ⇒ akademik teyit YOK. Tortona, Cremona, Maserada açık koordinat. t = Pleiades aralık sonu." },
  { id: "rm-aurelia", ad: "Via Aurelia (Roma – Cosa – Pisae – Luna – Genua)", sinif: "ana",
    gecit: ["Roma", [11.28, 42.40, "Cosa (Ansedonia)"], "Pisa", [9.97, 44.07, "Luna"], "Cenova"],
    f: "-0240-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 174900201 (Via Aurelia): yaklaşık MÖ 241, sansür C. Aurelius Cotta; Pleiades 502042016 (Via Aemilia Scauri); Carnabuci 1992; Cuntz 1929, Itineraria s.289-292; Talbert 2010, giriş 4B5; Strabon 5.1.11",
    ic_not: "f ≈ MÖ 241 (yıl hassasiyeti; Cotta atfı tartışmalı). Durak dizisi Vikipedi; Aurelia'nın Pisae'den ötesi Via Aemilia Scauri'dir ve başlangıcı çelişkili: Pleiades MÖ 115, Vikipedi MÖ 109 (çözülmedi, bu kayıt Genua'ya kadar Aurelia'nın devamı olarak çizer — yaklaşıktır). Pleiades Aemilia Scauri'yi 'Roma–Placentia', Strabon Pisae–Dertona diye verir (çelişki). Cosa ve Luna açık koordinat. t = Pleiades aralık sonu." },
  { id: "rm-cassia", ad: "Via Cassia (Roma – Clusium – Arretium – Florentia – Luca)", sinif: "ana",
    gecit: ["Roma", [12.21, 42.24, "Sutrium (Sutri)"], [11.99, 42.64, "Volsinii (Bolsena)"], [11.95, 43.02, "Clusium (Chiusi)"], [11.88, 43.46, "Arretium (Arezzo)"], "Floransa", [10.92, 43.93, "Pistoria (Pistoia)"], "Lucca"],
    f: "-0043-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 447759107 (Via Cassia): 'MÖ 240 sonrası'; Cicero Phil. 12.9 (MÖ 44-43, ilk anış); Hemphill 1975, PBSR 43: 118-172; Mosca 2002; Talbert 2000, 43 B1",
    ic_not: "YAPIM YILI VE YAPAN BULUNAMADI. f = ilk yazılı anış (Cicero, Philippica 12.9, MÖ 44-43) — yapım yılı DEĞİL, daha eski olabilir (Pleiades: MÖ 240 sonrası). Durak dizisi Vikipedi; Pleiades yolun Luna'da Aurelia'ya katıldığını, Vikipedi Luca'da dediğini söyler (çelişki). Açık koordinatlar bugünkü yerleşim. t = Pleiades aralık sonu." },

  // ---------------- GALYA / HİSPANYA — ana ----------------
  { id: "rm-domitia", ad: "Via Domitia (Nemausus – Narbo Martius – Pireneler)", sinif: "ana",
    gecit: ["Nîmes", "Narbonne", [2.97, 42.89, "Ad Vicensimum (Treilles)"], "Perpignan", [2.87, 42.43, "Pireneler (Panissars)"]],
    f: "-0117-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 834876934 (Via Domitia; yalnız bağlantı olarak görüldü, içerik okunamadı); Treilles köprüsünde bulunan Cn. Domitius Ahenobarbus mil taşı (1949); Études Héraultaises 1986 (okunamadı)",
    ic_not: "f = MÖ 118, Cn. Domitius Ahenobarbus (mil taşı); bir kaynak inşayı MÖ 122-118 arasına koyar, yıl kesin değil. Nîmes ve Perpignan (Ruscino) durak olarak kaynakta DOĞRULANMADI, coğrafi tahmin; Ad Vicensimum Narbo'dan ≈20 mil. Treilles ve Panissars açık koordinat. t = aralık sonu." },
  { id: "rm-julia-augusta", ad: "Via Iulia Augusta (Genua – Albingaunum – Albintimilium – Arelate)", sinif: "ana",
    gecit: ["Cenova", [8.21, 44.05, "Albingaunum (Albenga)"], [7.60, 43.79, "Albintimilium (Ventimiglia)"], [7.40, 43.74, "La Turbie (Tropaeum Alpium)"], "Arles"],
    f: "-0012-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Pleiades 507729266 (Via Iulia Augusta; içerik okunamadı); Arnaud 2008, 'Via Augusta' (okunamadı); signaromanorum.org/archives/12612",
    ic_not: "f = MÖ 13 (kaynaklarda MÖ 13-12), Augustus; Alpes Maritimae fethi MÖ 14. Vada Sabatia (Vado) ve Nice-Antibes arası atlandı. Albenga, Ventimiglia, La Turbie açık koordinat. t = aralık sonu." },
  { id: "rm-augusta", ad: "Via Augusta (Gades – Corduba – Carthago Nova – Tarraco)", sinif: "ana",
    gecit: [[-6.29, 36.53, "Gades (Cádiz)"], "Kurtuba", "Cartagena", "Tarragona"],
    f: "-0007-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Lorca (Carthago Nova–Eliocroca) mil taşı, EDH HD041078 (MÖ 8-7; tam okunamadı); Bellón Ruiz ve ark., 'Ianus Augustus, Caput Viae (Mengíbar)', Journal of Roman Archaeology",
    ic_not: "f = MÖ 8-7 mil taşı (yıl hassasiyeti; MÖ 8-2 aralığı, Cumhuriyet dönemi eski yollar kullanıldı). Ara duraklar (Ianus Augustus/Mengíbar, Eliocroca/Lorca, Valentia, Dertosa vb.) araştırmada sıralanmadı ⇒ yalnız 4 uç merkez; ara noktasız eğri tahmindir. Gades açık koordinat. t = aralık sonu." },

  // ---------------- BALKANLAR / ANADOLU / ARABIA — ana ----------------
  { id: "rm-egnatia", ad: "Via Egnatia (Dyrrachium – Thessalonica – Philippi – Neapolis)", sinif: "ana",
    gecit: ["Draç", "Selanik", [24.29, 41.01, "Philippi (Filippi)"], "Kavala"],
    f: "-0141-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Livius.org 'Via Egnatia' (Selanik mil taşı ≈MÖ 142); T.C. Yunan Kültür Bakanlığı Egnatia sitesi (culturalegnatia.culture.gov.gr; yapım MÖ ≈148-120); Zachariadou (ed.), The Via Egnatia under Ottoman Rule 1380-1699, Rethymno 1996 (içi okunamadı)",
    ic_not: "f = MÖ 142 (Selanik mil taşı; Gnaeus Egnatius, Makedonya prokonsülü; kaynaklarda MÖ ≈146-120 aralığı), yıl hassasiyeti. Traianus MS 112'de Dyrrachium–Neapolis'i onardı (mil taşı). Byzantium'a uzanım ve Adriyatik ucu (Dyrrachium mu Apollonia mı) kaynakta belirsiz ⇒ çizilmedi/Dyrrachium seçildi. Philippi açık koordinat. Osmanlı'da 'sol kol' (an-ba-sol) ile örtüşür. t = aralık sonu." },
  { id: "rm-militaris", ad: "Via Militaris (Singidunum – Naissus – Serdica – Philippopolis – Hadrianopolis – Constantinopolis)", sinif: "ana",
    gecit: ["Belgrad", [21.20, 44.73, "Viminacium (Kostolac)"], "Niş", [22.30, 43.22, "Remesiana (Bela Palanka)"], "Sofya", "Filibe", "Edirne", "Lüleburgaz", "İstanbul"],
    f: "0333-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Itinerarium Hierosolymitanum (Bordeaux Itinerary, 333) ve Itinerarium Antonini: Naissus–Serdica mesafesi 27 / 25 mil (Petrović–Grbić, Journal of Ancient Topography/JAT 23, dais.sanu.ac.rs); Vikipedi tablosu (durak dizisi)",
    ic_not: "YAPIM YILI VE YAPAN BULUNAMADI (Vikipedi 'MS 1. yy' / '33', çelişkili ve kaynaksız). f = Itinerarium Hierosolymitanum tanıklığı (333) — yapım yılı DEĞİL. Durak dizisi Vikipedi; akademik teyit YOK. Viminacium, Remesiana açık koordinat. Osmanlı'da 'orta kol' (ba-orta) ile örtüşür. t = aralık sonu." },
  { id: "rm-anadolu-hac", ad: "Konstantinopolis – Nikomedia – Nikaia – Ankyra – Tarsus – Antiochia (Bordeaux Hacı Yolu)", sinif: "ana",
    gecit: ["İstanbul", "İzmit", "İznik", "Ankara", "Tarsus", "Antakya"],
    f: "0333-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Itinerarium Burdigalense (Bordeaux Itinerary, 333), çeviri: A. Jacobs (andrewjacobs.org/translations/bordeaux.html), topostext.org/work/231: Constantinopolis–Nicomedia 58 mil, 7 mutatio + 3 mansio",
    ic_not: "YAPIM YILI VE YAPAN BULUNAMADI. f = Bordeaux hacısının yolculuğu (333-334) — yolun kuruluşu DEĞİL, tanıklık. Özet Nicomedia–Ancyra için '825 mil' verir; rakam çevirideki açık hata ⇒ kullanılmadı. Ankyra–Tarsus arası (Kilikya Kapıları) ve Tarsus–Antiochia istasyon listesi OKUNAMADI ⇒ ara noktasız eğri tahmindir. Osmanlı'da 'sağ/orta kol' ile bölümsel örtüşür. t = aralık sonu." },
  { id: "rm-nova-traiana", ad: "Via Nova Traiana (Bostra – Aila)", sinif: "ana",
    gecit: [[36.48, 32.52, "Bostra (Busra)"], [35.01, 29.53, "Aila (Akabe)"]],
    f: "0111-01-01", t: "0640-12-31", dogrulandi: false,
    kaynak: "Karak Resources Project, 'Trajan and the Via Nova' (karakresourcesproject.org/trajan-and-the-via-nova-sources): mil taşları MS 111-114, vali Gaius Claudius Severus, 'redacta in formam provinciae'; Bowersock, Roman Arabia (1983) (okunamadı)",
    ic_not: "f = MS 111 (en erken mil taşı yılı; mil taşları 111-114; tamamlanma 'Hadrianus dönemi' (Vikipedi) / ≈114 (Karak) çelişkili). Ara durak listesi (Philadelphia/Amman, Petra vb.) ALINAMADI ⇒ iki uç arası düz eğri tahmindir. Bostra ve Aila açık koordinat. t = aralık sonu." }
];
