// TRİYAJ METROPOL — HUKUKÎ KOVA SINIFLANDIRICISI
//
// 🔴 NE YAPAR: `ARAC-TRIYAJ-METROPOL-0907.js`in döktüğü 803 kaydı
//    COĞRAFÎ-İDARÎ kümelere ayırır. Her kümenin hukukî kovası ve
//    gerekçesi AŞAĞIDA ELLE yazılıdır — çünkü hukukî durum bir
//    ÖLÇÜM DEĞİL, bir KAYNAK sorusudur (§4). Alet yalnız kümeler.
//
// 🔴 KOVALAR (`YONTEM-1923-SINIR.md §②a`) + ikisi bu oturumda eklendi:
//    ILHAK    toprak metropolün PARÇASI oldu   → metropol kimliği DOĞRU
//    HIMAYE   hânedan/polity SÜRDÜ             → kendi kimliği + isg:
//    MANDA    MC yetkisi, ayrı idare           → kendi kimliği
//    SOMURGE  ayrı idare, metropole bağlı      → kendi kimliği
//    KUTU     🆕 metropolün KENDİ toprağı, kaba kutunun dışında kalmış
//             → hiç sömürge değil, kayıt DOĞRU, ölçüm artefaktı
//    SINIRDA  🆕 İKİ KOVA ARASINDA GERÇEK BELİRSİZLİK — koordinatör seçmeli
//    KOVA-DISI 🆕 hukukî sınıf dördün DIŞINDA (dominyon · kondominyum ·
//             şirket idaresi). Sonuç yine "kendi kimliği", ama gerekçe
//             sömürge değil ⇒ AYRI SEVK gerekiyor.
//    KUSUR-ADAYI 🆕 kimlik 1923'te hukuken YANLIŞ görünüyor. BU KOLUN İŞİ
//             DEĞİL — triyaj değil, tarih düzeltmesi. Bildirilir, YAZILMAZ.
//
// ⚠️ SINIFLANDIRMA SIRALI: ilk eşleşen kural kazanır, dar→geniş.
//    Sınıflanamayan kayıt SESSİZCE DÜŞMEZ — "SINIFLANMADI" basılır ve
//    alet çıkış kodu 1 verir (§11: sessiz atlama yanlış sonuçtan pahalı).

const { kayit } = require("./ARAC-TRIYAJ-METROPOL-0907.js");

const kutu = (la0, la1, lo0, lo1) => (k) =>
  k.lat >= la0 && k.lat <= la1 && k.lon >= lo0 && k.lon <= lo1;
const ad = (...adlar) => { const S = new Set(adlar);
  const f = (k) => S.has(k.ad); f.adBazli = true; return f; };

// ── KÜME KÜTÜĞÜ ───────────────────────────────────────────────────────
// { kimlik, kume, kova, esle, gerekce, kaynak, damga }
// damga: "dogrulandi" = kaynak okundu · "genel-bilgi" = standart tarih
//        bilgisi, TDV/akademik gövde OKUNMADI · "olculemedi"
const KUME = [
  // ══════════ ALMANYA ══════════
  { kimlik:"almanya", kume:"Doğu Prusya", kova:"KUTU",
    esle: ad("Königsberg","Elbing (Elbląg)"),
    gerekce:"1923'te Almanya'nın KENDİ toprağı (Doğu Prusya). Aletin anakara "+
            "kutusu lon≤15,1 ile bitiyor; ikisi 19,4 ve 20,5. Sömürge DEĞİL, "+
            "kayıt DOĞRU — ölçüm artefaktı.",
    kaynak:"genel bilgi — Versay Doğu Prusya'yı Almanya'da bıraktı, Polonya "+
           "koridoruyla ayırdı", damga:"genel-bilgi" },

  { kimlik:"almanya", kume:"Memel", kova:"KUSUR-ADAYI",
    esle: ad("Klaipėda (Memel)"),
    gerekce:"🔴 TRİYAJ KALEMİ DEĞİL, TARİH KUSURU ADAYI. Memel Versay ile "+
            "Almanya'dan ayrıldı (1920), Müttefik idaresine geçti, Ocak 1923'te "+
            "Litvanya işgal etti, 16 Şubat 1923'te Büyükelçiler Konferansı "+
            "Litvanya'ya devretti ⇒ 1923-10-28'de `almanya` YANLIŞ. "+
            "Bu kolun kovalarına girmiyor; AVRUPA koluna sevk edilmeli.",
    kaynak:"bulunamadı — TDV'de aranmadı (bu kolun kapsamı dışı)", damga:"okumadım" },

  // ══════════ İSPANYA ══════════
  { kimlik:"ispanya", kume:"Balear", kova:"KUTU",
    esle: ad("Menorka (Mahon)"),
    gerekce:"Balear adaları 1923'te İspanya'nın KENDİ toprağı (Baleares "+
            "vilâyeti). Kutu lon≤3,4; Mahón 4,3. Sömürge DEĞİL.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ispanya", kume:"Plazas de soberanía", kova:"ILHAK",
    esle: ad("Sebte (Ceuta)","Melîle (Melilla)","Bâdis (Peñón de Vélez)",
             "el-Hüseyme (Alhucemas)"),
    gerekce:"İspanyol EGEMEN toprağı — Fas himayesinin (1912) DIŞINDA "+
            "tutuldu, hiç himaye toprağı olmadı. Melîle 1497, Sebte 1580/1668 "+
            "(Lizbon Antlaşması ile Portekiz'den İspanya'ya), Peñón 1508, "+
            "Alhucemas 1673. Metropol kimliği DOĞRU — şartnamenin kendi örneği.",
    kaynak:"§②a'nın kendi örneği + genel bilgi", damga:"genel-bilgi" },

  // ══════════ HOLLANDA ══════════
  { kimlik:"hollanda", kume:"Surinam", kova:"SOMURGE",
    esle: ad("Paramaribo"),
    gerekce:"Hollanda Guyanası (Surinam) — ayrı idare, kendi valisi ve "+
            "Koloniale Staten meclisi. Metropolün parçası DEĞİL. Kendi "+
            "kimliğini hak ediyor. (Hollanda Doğu Hint Adaları bu listede "+
            "YOK ⇒ atlas orada ZATEN ayrı kimlik kullanıyor.)",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  // ══════════ FRANSA ══════════
  { kimlik:"fransa-cumhuriyet", kume:"Suriye-Lübnan mandası", kova:"MANDA",
    esle: kutu(32.5, 37.5, 35.0, 42.5),
    gerekce:"Fransız Suriye-Lübnan mandası (A sınıfı) — MC yetkisi "+
            "1922-07-24 onaylandı, 1923-09-29 yürürlüğe girdi. Fransa'nın "+
            "toprağı DEĞİL, vekâleten idaresi. Kendi kimliği gerekiyor.",
    kaynak:"Milletler Cemiyeti manda belgesi (genel bilgi)", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Cezayir (départements + Territoires du Sud)",
    kova:"ILHAK", esle: kutu(21.0, 37.5, -8.7, 12.0),
    gerekce:"🔴 METROPOL KİMLİĞİ DOĞRU. Kuzey Cezayir 1848'den Fransa'nın ÜÇ "+
            "VİLÂYETİ (Alger · Oran · Constantine) — metropol hukuku geçerli, "+
            "Paris'e mebus gönderiyor. Sahra (Ağvât · Gardâye · Vargla · "+
            "Tuggurt · Beşşâr · Tîmîmûn · Aynı Sâlih · Cânet …) 24 Aralık 1902 "+
            "kanunuyla 'Territoires du Sud de l'Algérie' — Cezayir Genel "+
            "Valisi'ne bağlı, yani yine Fransa'nın toprağı, yalnız askerî "+
            "idare ve ayrı bütçe. AYIRMAK ATLASI BOZAR. `cezayir-fransiz` "+
            "künyesi ÂTIL kalmalı.",
    kaynak:"§②a'nın kendi ölçümü (ORTADOĞU, 7 Eylül) + 1902 kanunu", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Fransız Somalisi", kova:"SOMURGE",
    esle: kutu(10.5, 12.8, 41.5, 43.5),
    gerekce:"Côte française des Somalis — 1896'dan koloni, kendi valisi. "+
            "Metropolün parçası değil.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Madagaskar", kova:"SOMURGE",
    esle: kutu(-26.0, -11.0, 43.0, 51.0),
    gerekce:"1896-08-06'da ilhak edildi AMA 'colonie' olarak — Cezayir gibi "+
            "vilâyet YAPILMADI, ayrı idare ve indigénat rejimi. ⇒ İLHAK "+
            "kelimesi geçse de HUKUKÎ SINIF sömürge: metropolün parçası değil. "+
            "⚠️ Bu ayrım kritik — 'annexation' terimi tek başına kova belirlemez.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Yeni Kaledonya", kova:"SOMURGE",
    esle: ad("Noumea (Yeni Kaledonya)"),
    gerekce:"1853'ten Fransız kolonisi, ayrı idare.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Fransız Hindistanı", kova:"SOMURGE",
    esle: ad("Pondişeri","Çandernagor"),
    gerekce:"Établissements français dans l'Inde — beş comptoir, ayrı idare, "+
            "Pondichéry'de vali. Metropolün parçası değil.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Fransız Guyanası", kova:"SOMURGE",
    esle: ad("Cayenne"),
    gerekce:"1923'te koloni (département 1946'da oldu — yani 1923'te HENÜZ "+
            "metropolün parçası DEĞİL).", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Fransız Kamerunu mandası", kova:"MANDA",
    esle: kutu(1.5, 6.2, 9.0, 16.2),
    gerekce:"Kamerun 1919'da bölündü; Fransız payı B sınıfı MC mandası "+
            "(1922-07-20 onay). Fransa'nın toprağı değil.",
    kaynak:"MC manda belgesi (genel bilgi)", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Fransız Togosu mandası", kova:"MANDA",
    esle: ad("Notse"),
    gerekce:"Togo 1919'da bölündü; Notsé doğu (Fransız) payında. B sınıfı "+
            "MC mandası, 1922-07-20 onay.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Fransız Ekvator Afrikası (AEF)", kova:"SOMURGE",
    esle: kutu(-5.0, 23.0, 8.0, 27.0),
    gerekce:"Afrique-Équatoriale française — Gabon · Orta Kongo · Ubangi-Şari "+
            "· Çad. 1910'da federasyon, Brazzaville'de genel vali. Ayrı idare, "+
            "metropolün parçası değil.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"fransa-cumhuriyet", kume:"Fransız Batı Afrikası (AOF)", kova:"SOMURGE",
    esle: kutu(4.0, 26.0, -18.0, 8.0),
    gerekce:"Afrique-Occidentale française — Senegal · Moritanya · Sudan "+
            "français · Gine · Fildişi · Yukarı Volta · Dahomey · Nijer. "+
            "1895 federasyon, Dakar'da genel vali. Ayrı idare. "+
            "⚠️ İSTİSNA: Senegal'in DÖRT KOMÜNÜ (Saint-Louis · Gore · Dakar · "+
            "Rufisque) 1848'den Fransa'ya mebus gönderiyordu ve sakinleri "+
            "Fransız vatandaşıydı — hukuken Cezayir'e daha yakın. Ayrı kalem, "+
            "aşağıda.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  // ══════════ İTALYA ══════════
  { kimlik:"italya", kume:"Oniki Ada (Dodekanez)", kova:"SINIRDA",
    esle: kutu(35.0, 37.5, 26.0, 29.0),
    gerekce:"1912'den İtalyan işgali; **Lozan (1923-07-24) md. 15 ile Türkiye "+
            "adaları İtalya'ya TERK ETTİ** ⇒ 1923-10-28'de İtalyan egemen "+
            "toprağı. Metropol kimliği savunulabilir. ⚠️ Ama 1923-10-28'de "+
            "Lozan HENÜZ ONAYLANMAMIŞTI (yürürlük 1924-08-06); fiilî durum "+
            "işgal + de facto devir. Gün seçimi ayrı bir sorudur — Ege kolu "+
            "bu adları YAMADA kapsıyor (13/13 *YAMA). "+
            "🔴 KOVA İLHAK'TAN SINIRDA'YA TAŞINDI (koordinatör hükmü, 7 Eylül): "+
            "İLHAK kovasına yanlış konan kayıt SESSİZCE DOĞRU SAYILIR, ve "+
            "buradaki şüphe gerekçenin KENDİ İÇİNDE yazılıydı. Kararsız "+
            "bırakmak, yanlış tarafa kesin karar vermekten ucuz.",
    kaynak:"Lozan Antlaşması md. 15", damga:"genel-bilgi" },

  { kimlik:"italya", kume:"Libya (Trablusgarp + Sirenayka + Fizan)", kova:"ILHAK",
    esle: kutu(24.0, 33.5, 9.0, 25.0),
    gerekce:"1911-11-05 İtalya tek taraflı ilhak ilan etti; Uşi/Ouchy "+
            "(1912-10-18) ile Osmanlı çekildi. 1923'te İtalyan egemen toprağı "+
            "(colonia, ama egemenlik devri tam). ⚠️ FİİLÎ DURUM AYRI: "+
            "1923'te 'riconquista' sürüyordu — Fizan ve iç Sirenayka fiilen "+
            "Senûsî elindeydi. Hukukî kova İLHAK, fiilî denetim SORULMALI.",
    kaynak:"Uşi Antlaşması 1912 + genel bilgi", damga:"genel-bilgi" },

  { kimlik:"italya", kume:"Eritre", kova:"SOMURGE",
    esle: kutu(12.5, 18.5, 36.0, 43.5),
    gerekce:"Colonia Eritrea, 1890'dan; ayrı idare, Asmara'da vali. "+
            "Metropolün parçası değil.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"italya", kume:"İtalyan Somalisi", kova:"SOMURGE",
    esle: kutu(-2.0, 12.0, 40.0, 52.0),
    gerekce:"Somalia italiana — 1905'ten doğrudan devlet idaresi, ayrı vali. "+
            "Metropolün parçası değil.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  // ══════════ PORTEKİZ ══════════
  { kimlik:"portekiz", kume:"Umtali", kova:"KUSUR-ADAYI",
    esle: ad("Umtali (Mutare)"),
    gerekce:"🔴 KOVA KALEMİ DEĞİL, KONUM/KİMLİK KUSURU ADAYI. Umtali (Mutare) "+
            "1923'te GÜNEY RODEZYA'dadır (İngiliz), Mozambik'te değil — "+
            "Portekiz-Rodezya sınırı 1891 antlaşmasıyla çizildi ve Umtali "+
            "İngiliz tarafında kaldı. `portekiz` kimliği burada ŞÜPHELİ. "+
            "Kaynağa sorulmalı; ben yama YAZMIYORUM.",
    kaynak:"bulunamadı — akademik kaynak aranmadı", damga:"okumadım" },

  { kimlik:"portekiz", kume:"Angola", kova:"SOMURGE",
    esle: kutu(-18.0, -5.5, 11.5, 24.0),
    gerekce:"Colónia de Angola — 1923'te ayrı idare (1920-24 arası 'alto "+
            "comissário' rejimi, geniş özerklik). Metropolün parçası değil.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"portekiz", kume:"Mozambik", kova:"SOMURGE",
    esle: kutu(-27.0, -10.0, 30.0, 41.5),
    gerekce:"Colónia de Moçambique — ayrı idare, Lourenço Marques'te vali. "+
            "Metropolün parçası değil.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"portekiz", kume:"Portekiz Ginesi", kova:"SOMURGE",
    esle: ad("Bissav (Bissau)","Kaşev (Cacheu)"),
    gerekce:"Guiné Portuguesa — 1879'dan ayrı koloni.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"portekiz", kume:"Portekiz Hindistanı", kova:"SOMURGE",
    esle: ad("Goa","Diu"),
    gerekce:"Estado da Índia — ayrı idare, Goa'da genel vali. ⚠️ Sınırda: "+
            "Portekiz anayasal olarak denizaşırı toprakları 'parte integrante' "+
            "sayıyordu ve Goa Lizbon'a mebus gönderiyordu. Yine de ayrı hukuk "+
            "ve ayrı idare ⇒ SÖMÜRGE. Bu, Fransa'nın Cezayir/Senegal "+
            "ayrımının Portekiz karşılığı ve AYRICA sorulabilir.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"portekiz", kume:"Makao", kova:"SOMURGE",
    esle: ad("Makao (Macau)"),
    gerekce:"1887 Pekin Antlaşması ile Portekiz'in 'daimî idaresi'; ayrı "+
            "koloni idaresi.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"portekiz", kume:"Portekiz Timoru", kova:"SOMURGE",
    esle: ad("Dili"),
    gerekce:"Timor Português — 1896'dan ayrı koloni.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  // ══════════ BELÇİKA ══════════
  { kimlik:"belcika", kume:"Ruanda-Urundi mandası", kova:"MANDA",
    esle: ad("Kigali","Nyanza (Ruanda)","Gitega (Burundi)","Bucumbura"),
    gerekce:"B sınıfı MC mandası — 1922-07-20 onay, 1923-10-31 yürürlük. "+
            "Belçika'nın toprağı değil, vekâleten idaresi. Kendi kimliği "+
            "gerekiyor.", kaynak:"MC manda belgesi (genel bilgi)", damga:"genel-bilgi" },

  { kimlik:"belcika", kume:"Belçika Kongosu", kova:"SOMURGE",
    esle: kutu(-14.0, 6.0, 11.0, 32.0),
    gerekce:"1908'de Leopold'ün şahsî mülkünden Belçika devletine geçti; "+
            "'Colonie du Congo belge', 1908 Charte coloniale ile AYRI hukukî "+
            "kişilik — metropolün parçası DEĞİL, anayasa açıkça ayırıyor. "+
            "Kendi kimliği gerekiyor.", kaynak:"1908 Charte coloniale (genel bilgi)",
    damga:"genel-bilgi" },
];

// ── BRİTANYA kümeleri (ayrı blok — 384 kayıt, en karışık) ─────────────
KUME.push(
  { kimlik:"ingiltere", kume:"Irak mandası", kova:"MANDA",
    esle: kutu(29.0, 37.5, 39.0, 49.0),
    gerekce:"A sınıfı MC mandası. 1922-10-10 İngiliz-Irak Antlaşması, "+
            "1923-04-30 protokol. Faysal 1921'den kral ⇒ AYRI POLITY. "+
            "`irak-kralligi` künyesi VAR ve kullanılıyor olmalı.",
    kaynak:"genel bilgi + §②a", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Filistin + Şarkî Ürdün mandası", kova:"MANDA",
    esle: kutu(29.0, 33.5, 34.0, 39.0),
    gerekce:"A sınıfı MC mandası — 1922-07-24 onay, 1923-09-29 yürürlük. "+
            "Şarkî Ürdün 1921'den Abdullah'ın emirliği (`urdun-emirligi` "+
            "künyesi VAR, ORTADOĞU kolu ölçtü). Ayrı kimlik gerekiyor.",
    kaynak:"genel bilgi + ORTADOĞU kolu ölçümü", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Kıbrıs", kova:"SINIRDA",
    esle: ad("Lefkoşa","Magosa","Girne (Kyrenia)","Limasol","Baf (Paphos)",
             "Tuzla (Larnaka)"),
    gerekce:"🔴 METROPOL KİMLİĞİ SAVUNULABİLİR. 1878'den İngiliz idaresi "+
            "(Osmanlı egemenliği sürüyordu), **1914-11-05'te tek taraflı "+
            "İLHAK**, ve **Lozan (1923-07-24) md. 20 ile Türkiye ilhakı "+
            "TANIDI** ⇒ 1923-10-28'de İngiliz egemen toprağı. Crown Colony "+
            "ilanı 1925'te. ⚠️ Ama idare AYRIYDI (kendi valisi, kendi "+
            "kanunları) ⇒ İLHAK/SÖMÜRGE sınırında. `kibris-ingiliz` künyesi "+
            "VAR ve ÂTIL — âtıl kalması bir SEÇİM olarak savunulabilir. "+
            "🔴 KOVA İLHAK'TAN SINIRDA'YA TAŞINDI: iki yön de güçlü "+
            "(1914 ilhak ⇒ İLHAK · ayrı idare + hazır künye ⇒ SÖMÜRGE) ve "+
            "İLHAK'ta bırakmak şüpheyi GÖRÜNMEZ kılardı.",
    kaynak:"Lozan md. 20 + 1914 ilhak", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Cebelitarık", kova:"ILHAK",
    esle: ad("Cebelitarık (Gibraltar)"),
    gerekce:"Utrecht (1713) md. X ile İspanya 'tam ve mutlak mülkiyeti' "+
            "DAİMÎ olarak devretti. Ayrı bir polity hiç olmadı — bir kale/"+
            "garnizon. Metropol kimliği DOĞRU (şartnamenin kendi örneği).",
    kaynak:"§②a'nın kendi örneği + Utrecht md. X", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Malta", kova:"SINIRDA",
    esle: ad("Malta"),
    gerekce:"Paris (1814) md. VII ile egemenlik İngiltere'ye devredildi ⇒ "+
            "İLHAK yönü güçlü. AMA 1921 Anayasası ile **kendi meclisi ve "+
            "sorumlu hükümeti olan ÖZ-YÖNETİMLİ bir varlık** — Cebelitarık'ın "+
            "aksine ayrı bir polity gibi işliyor ⇒ SÖMÜRGE yönü de güçlü. "+
            "Aletin kendi notu Malta'yı 'künyesi YOK' diye işaretledi. "+
            "🔴 KARAR KOORDİNATÖRÜN: iki kova da savunulabilir.",
    kaynak:"1814 Paris md. VII + 1921 Malta Anayasası", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Hong Kong", kova:"SINIRDA",
    esle: ad("Hong Kong"),
    gerekce:"Ada 1842 Nanking ile DEVREDİLDİ (cession) ⇒ egemenlik İngiliz. "+
            "Ama Yeni Topraklar 1898'den 99 yıllık KİRA ⇒ egemenlik Çin'de. "+
            "Tek nokta iki farklı hukukî rejimi temsil ediyor. Crown Colony "+
            "idaresi ayrı. 🔴 Kova: ILHAK (devredilen ada) ya da SÖMÜRGE "+
            "(Crown Colony) — koordinatör seçmeli.",
    kaynak:"Nanking 1842 + 1898 kira sözleşmesi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Aden", kova:"SINIRDA",
    esle: ad("Aden"),
    gerekce:"1839'da fetih; 1923'te **Britanya Hindistanı'nın parçası** "+
            "(Bombay Başkanlığı'na bağlı Aden Settlement). Yani ayrı bir "+
            "polity değil, başka bir İngiliz idarî bütününün içinde. "+
            "⚠️ Metropol kimliği yine de tam doğru değil: doğrusu "+
            "`ingiliz-hindistani` olabilir. Ayrıca sorulmalı. "+
            "🔴 KOVA İLHAK'TAN SINIRDA'YA TAŞINDI: şüphe zaten bu "+
            "gerekçenin İÇİNDE yazılıydı ve İLHAK damgası onu susturuyordu.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Aden Protektorası (Hadramut)", kova:"HIMAYE",
    esle: ad("Mukalla"),
    gerekce:"Kathîrî ve Kuaytî sultanlıkları — hânedanlar SÜRDÜ, İngiltere "+
            "yalnız dış ilişkileri aldı (himaye antlaşmaları). Kendi kimliği "+
            "+ `isg:` örtüsü gerekiyor. `YAMA-KUNYE-AIR-HADRAMUT-0905.json` "+
            "bu kalemi zaten görmüş olabilir.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Kemeran adası", kova:"SINIRDA",
    esle: ad("Kemeran (Kamaran)"),
    gerekce:"1915'te Osmanlı'dan alındı, Aden'e bağlı idare; hukukî statüsü "+
            "1923'te BELİRSİZDİ (İtalya ve Hollanda karantina hakları vardı, "+
            "egemenlik tartışmalıydı). Kaynağa sorulmalı.",
    kaynak:"ölçülemedi", damga:"okumadım" },

  { kimlik:"ingiltere", kume:"Körfez himayeleri (Trucial + Bahreyn)", kova:"HIMAYE",
    esle: ad("Abu Dabi","Şârika","Ras el-Hayme (Cülfâr)","Manama (Bahreyn)"),
    gerekce:"🔴 GERÇEK KUSUR ADAYI. Trucial States ve Bahreyn 1923'te KENDİ "+
            "şeyhlerinin/hâkimlerinin toprağı; İngiltere yalnız dış "+
            "ilişkileri ve savunmayı aldı (1820 Genel Antlaşma · 1892 "+
            "Exclusive Agreements · Bahreyn 1913-07-29 Londra). Hânedanlar "+
            "SÜRDÜ ⇒ `ingiltere` yazmak hukuken YANLIŞ. Kendi kimliği + "+
            "`isg:` örtüsü. ⚠️ Bahreyn'in himaye günü ORTADOĞU kolu "+
            "tarafından ölçüldü: **1913-07-29** (TDV `bahreyn`).",
    kaynak:"TDV `bahreyn` (ORTADOĞU kolu ölçtü) + genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Mısır (Kızıldeniz kıyısı + Sina + Süveyş)", kova:"KUSUR-ADAYI",
    esle: ad("Kusayr","Sefâce","Tûr (Sînâ)","Sina güneyi","Süveyş"),
    gerekce:"🔴 GERÇEK KUSUR ADAYI, VE KOVA KALEMİ DEĞİL. Mısır **1922-02-28 "+
            "tek taraflı beyanla bağımsız** oldu (Fuad kral). 1923-10-28'de "+
            "egemenlik MISIR'ın ⇒ `ingiltere` yanlış, `misir-kralligi` "+
            "olmalı. ⚠️ Süveyş Kanalı bölgesi beyanın 'saklı tutulan dört "+
            "konu'sundan biriydi (İngiliz askerî varlığı sürdü) ama bu bir "+
            "İŞGAL/ÜS ilişkisidir, egemenlik devri değil ⇒ `isg:` örtüsü.",
    kaynak:"1922-02-28 İngiliz beyannamesi (genel bilgi)", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Anglo-Mısır Sudanı", kova:"KOVA-DISI",
    esle: kutu(3.0, 23.0, 21.5, 39.0),
    gerekce:"🔴 KOVALARIN HİÇBİRİ TAM UYMUYOR — KONDOMİNYUM. 1899-01-19 "+
            "İngiliz-Mısır anlaşması: egemenlik İKİ devlette ORTAK, bayrak "+
            "ikisi birden, genel vali Mısır hidivi tarafından İngiliz "+
            "tavsiyesiyle atanır. Fiilen İngiliz idaresi. ⇒ `ingiltere` tek "+
            "başına EKSİK, ama `misir` de eksik. `sudan` künyesi VAR "+
            "(`YAMA-KUNYE-SUDAN-0905.json`). **Ortak egemenliği veri modeli "+
            "ifade edemiyor** — `v:` dönemlerinin kimlik alanı yok "+
            "(§11, 5 Eylül ölçümü). Model sorusu.",
    kaynak:"1899 Kondominyum Anlaşması", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Somaliland Protektorası", kova:"HIMAYE",
    esle: kutu(7.5, 12.0, 42.5, 49.5),
    gerekce:"1884-86 himaye antlaşmaları — Habr Aval, Îsâ, Gadabursi vb. "+
            "klanlarla. Toprak İNGİLİZ TOPRAĞI DEĞİL; 'British Somaliland "+
            "Protectorate' resmen protektora. ⚠️ Klan örgütlenmesi ⇒ "+
            "`bos:kabile` sınıfıyla birlikte düşünülmeli (CLAUDE.md: kabile "+
            "kovası). Dervişler (Taleh · Lasanod) 1920'ye kadar AYRI bir "+
            "polity idi.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Seylan", kova:"SOMURGE",
    esle: ad("Kolombo","Kandy","Yafna (Jaffna)"),
    gerekce:"Crown Colony of Ceylon — ayrı idare, 1920/1923 anayasa "+
            "reformlarıyla Yasama Konseyi. Metropolün parçası değil.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Güney Afrika Birliği", kova:"KOVA-DISI",
    esle: (k) => (k.lat >= -35.0 && k.lat <= -22.0 && k.lon >= 16.4 && k.lon <= 33.0) ||
                 ["Kap (Cape Town)","Oranj (Bur cumhuriyeti)","Transvaal (Bur cumhuriyeti)"].includes(k.ad),
    gerekce:"🔴🔴 EN BÜYÜK KUSUR ADAYI — VE KOVALARIN HİÇBİRİNE GİRMİYOR. "+
            "Güney Afrika Birliği **1910-05-31'den DOMINION**: kendi "+
            "parlamentosu, kendi başbakanı, 1919'da Versay'ı AYRI imzaladı "+
            "ve MC'ye AYRI üye oldu. 1923'te sömürge DEĞİL. ⇒ `ingiltere` "+
            "hukuken yanlış. 🟢 VE ATLASIN KENDİ EMSALİ BUNU DESTEKLİYOR: "+
            "Kanada · Avustralya · Yeni Zelanda bu listede HİÇ YOK ⇒ atlas "+
            "onlara ZATEN ayrı kimlik veriyor. Yani atlas tutarsız: üç "+
            "dominion ayrı, dördüncüsü metropolde. ⚠️ Bu bir SÖMÜRGE triyajı "+
            "kalemi değil, bir DOMİNYON kalemidir ve ayrı sevk edilmeli.",
    kaynak:"1909 South Africa Act + 1919 Versay imzası", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Valvis Körfezi", kova:"KOVA-DISI",
    esle: ad("Valvis Körfezi"),
    gerekce:"Walvis Bay 1878'de İngiliz, 1884'te **Cape Colony'ye İLHAK** "+
            "edildi ⇒ 1923'te GÜNEY AFRİKA BİRLİĞİ'nin kendi toprağı, manda "+
            "toprağı DEĞİL. Kova: dominyon toprağı (Güney Afrika kalemiyle "+
            "aynı sevke gider). ⚠️ Manda kutusuna düşerse manda sanılır ve "+
            "yanlış kimliğe yazılır.",
    kaynak:"1884 Cape ilhakı (genel bilgi)", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Ondjiva", kova:"KUSUR-ADAYI",
    esle: ad("Ondjiva (Ovambo)"),
    gerekce:"🔴 KONUM/KİMLİK KUSURU ADAYI. Ondjiva (17,07°G) Portekiz-Alman "+
            "sınırının (~17°28'G paraleli, 1886 antlaşması) KUZEYİNDE ⇒ "+
            "1923'te ANGOLA'da, Güney Batı Afrika mandasında değil. "+
            "`ingiltere` şüpheli. Kaynağa sorulmalı; yama YAZMIYORUM. "+
            "⚠️ Ondangva (Ondonga, 17,9°G) BAŞKA bir yerdir ve manda "+
            "içindedir — ad benzerliği ikisini karıştırmaya davet ediyor.",
    kaynak:"bulunamadı — akademik kaynak aranmadı", damga:"okumadım" },

  { kimlik:"ingiltere", kume:"Güney Batı Afrika mandası", kova:"MANDA",
    esle: ad("Lüderitz","Keetmanshoop","Bethanie","Varmbad (Warmbad)",
             "Mariental","Aranos","Gobabis","Rehoboth","Vindhuk (Windhoek)",
             "Otjimbingve","Okahandja","Outjo","Grutfontein","Tsumeb",
             "Rundu","Ondangva (Ondonga)","Katima Mulilo"),
    gerekce:"C sınıfı MC mandası — 1920-12-17 verildi, **Güney Afrika "+
            "Birliği** tarafından yönetiliyor, İngiltere tarafından değil. "+
            "⇒ `ingiltere` iki kere yanlış: ne İngiliz toprağı, ne İngiliz "+
            "idaresi. ⚠️ İSTİSNA: Valvis Körfezi (Walvis Bay) 1884'te Cape "+
            "Colony'ye İLHAK EDİLDİ — manda toprağı DEĞİL, Güney Afrika'nın "+
            "kendi toprağı. Ayrı kalem.",
    kaynak:"MC C sınıfı manda belgesi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Tanganyika mandası", kova:"MANDA",
    esle: kutu(-11.8, -0.9, 29.3, 40.5),
    gerekce:"B sınıfı MC mandası — 1922-07-20 onay. Eski Alman Doğu "+
            "Afrikası'nın İngiliz payı. İngiliz toprağı DEĞİL. "+
            "`tanganyika` benzeri ayrı kimlik gerekiyor.",
    kaynak:"MC manda belgesi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Beçuanaland Protektorası", kova:"HIMAYE",
    esle: ad("Tsabong","Kanye (Ngvaketse)","Moçudi (Kgatla)","Molepolole (Kvena)",
             "Tshane","Kang","Şoşong (Shoshong)","Palapye","Serove (Serowe)",
             "Ganzi (Ghanzi)","Toteng","Maun (Tavana)"),
    gerekce:"1885 protektorası — Tsvana morafe'leri (Ngwato · Kwena · "+
            "Ngwaketse · Kgatla · Tawana) kendi kgosi'leriyle SÜRDÜ; "+
            "İngiltere toprağı ilhak ETMEDİ. Kendi kimliği + `isg:` gerekiyor.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Basutoland", kova:"HIMAYE",
    esle: ad("Maseru","Thaba Bosiu"),
    gerekce:"1868 himaye, 1884'ten doğrudan Taç idaresi ama Sotho "+
            "paramount chief (Letsie II) SÜRDÜ ve Güney Afrika Birliği'ne "+
            "KATILMADI. Kendi kimliği gerekiyor.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Svaziland", kova:"HIMAYE",
    esle: ad("Lobamba (Svazi)"),
    gerekce:"1903'ten İngiliz protektorası; Svazi kraliyeti (Sobhuza II) "+
            "SÜRDÜ. Kendi kimliği gerekiyor.", kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Güney Rodezya", kova:"SOMURGE",
    esle: ad("Salisbury (Harare)","Bulavayo","Gveru","Gvanda","Hvange","Khami",
             "Danangombe (Rozvi)","Binga"),
    gerekce:"🔴 GÜN HASSASİYETİ KRİTİK. 1923-09-12'de resmen İngiltere'ye "+
            "İLHAK edildi (BSAC idaresi bitti) ve **1923-10-01'de sorumlu "+
            "hükümetli ÖZ-YÖNETİMLİ koloni** oldu — yani atlas gününden "+
            "(1923-10-28) yalnız 27 gün önce. ⇒ 1923-10-28'de: İngiliz "+
            "egemen toprağı AMA kendi parlamentosu var. Öncesinde (1890-1923) "+
            "**bir ŞİRKET** yönetiyordu (BSAC) — o dönem için `ingiltere` "+
            "büsbütün başka bir sorudur.",
    kaynak:"1923 Southern Rhodesia Constitution Letters Patent", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Barotseland (Lozi)", kova:"HIMAYE",
    esle: ad("Lealui (Lozi)"),
    gerekce:"Lewanika'nın Barotseland'ı 1890 Lochner Anlaşması'ndan itibaren "+
            "AYRI bir himaye statüsü taşıdı — litunga yerinde kaldı ve "+
            "Barotseland Kuzey Rodezya'nın geri kalanından farklı bir hukukî "+
            "rejimle yönetildi. Hânedan SÜRDÜ ⇒ HİMAYE.",
    kaynak:"1890 Lochner Anlaşması (genel bilgi)", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Kuzey Rodezya", kova:"KOVA-DISI",
    esle: kutu(-18.2, -8.0, 21.9, 33.8),
    gerekce:"🔴 1923-10-28'de HÂLÂ **British South Africa Company** idaresi — "+
            "Taç idaresine devir 1924-04-01. Yani atlas gününde bir DEVLET "+
            "değil bir ŞİRKET yönetiyordu, ve Barotseland (Lozi, Lealui) "+
            "ayrıca kendi litunga'sıyla himaye altındaydı. `ingiltere` "+
            "hukuken eksik. Model sorusu: atlas şirket idaresini nasıl yazar?",
    kaynak:"1924 Northern Rhodesia Order in Council", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Nyasaland Protektorası", kova:"HIMAYE",
    esle: ad("Blantyre","Zomba","Mangoçi","Mankhamba (Maravi)",
             "Nkhotakota (Cumbe)","Karonga","Mbande (Ngonde)","Mvembe (Mataka)"),
    gerekce:"1891 'British Central Africa Protectorate', 1907'den Nyasaland "+
            "Protectorate — resmen protektora, ilhak DEĞİL.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Uganda Protektorası", kova:"HIMAYE",
    esle: ad("Cinca (Jinja)","Hoima (Bunyoro)","Masindi","Lira","Gulu",
             "Fort Portal (Toro)","Mbarara (Nkore)","Moroto"),
    gerekce:"1894 protektorası; **Buganda Anlaşması (1900)** kabaka'yı ve "+
            "Buganda krallığını TANIDI — Bunyoro · Toro · Ankole · Busoga "+
            "krallıkları da sürdü. Klasik HİMAYE: hânedan sürdü, metbû "+
            "değişti. Kendi kimlikleri + `isg:` gerekiyor.",
    kaynak:"1900 Buganda Anlaşması + TDV `uganda`", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Kenya Kolonisi + Protektorası", kova:"SOMURGE",
    esle: kutu(-4.8, 5.2, 33.9, 42.0),
    gerekce:"🔴 TEK AD, İKİ HUKUKÎ REJİM. 1920'den itibaren iç kısım **Kenya "+
            "Colony** (ilhak edilmiş Taç toprağı), 16 km'lik KIYI ŞERİDİ ise "+
            "**Kenya Protectorate** — Zanzibar sultanının toprağı, İngiltere "+
            "kiralıyor. Bu listedeki noktalar iç kısımda ⇒ koloni. Ama kova "+
            "yine de sınırda: ilhak edilmiş ama ayrı idare ⇒ SÖMÜRGE'ye yakın.",
    kaynak:"1920 Kenya (Annexation) Order in Council", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"İngiliz Kamerunu mandası (Northern)", kova:"MANDA",
    esle: ad("Dikva (Dikeo)"),
    gerekce:"Dikwa, 1919 bölünmesinde İngiliz payına düşen Northern "+
            "Cameroons'un merkezi — B sınıfı MC mandası, Nijerya ile "+
            "BİRLİKTE yönetiliyordu ama hukuken AYRI toprak. `ingiltere` "+
            "kimliği manda toprağını İngiliz toprağı gösteriyor.",
    kaynak:"MC manda belgesi (genel bilgi)", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Batı Afrika sınır şüphesi (Fransız tarafı)",
    kova:"KUSUR-ADAYI",
    esle: ad("Garua (Garoua)","Marua (Maroua)","Ngaunder (Ngaoundéré)",
             "Rey Buba","Tibati","Banyo","Nikki (Borgu)","Bondugu (Gyaaman)"),
    gerekce:"🔴 SINIR ŞÜPHESİ — ÖLÇÜLMEDİ, YALNIZ İŞARETLENDİ. Sekizi de "+
            "1919/1898 bölünmelerinde FRANSIZ tarafında kalmış GÖRÜNÜYOR: "+
            "Garoua · Maroua · Ngaoundéré · Rey Buba · Tibati · Banyo "+
            "Fransız Kamerunu'nda (İngiliz payı Nijerya sınırı boyunca DAR "+
            "bir şeritti); Nikki 1898 Borgu bölünmesinde Dahomey'de; "+
            "Bondoukou 1888'de Fransız Fildişi'nde. Doğruysa kimlik "+
            "`ingiltere` değil `fransa-cumhuriyet` (Kamerun için: MANDA). "+
            "⚠️ DAMGA `okumadım`: akademik kaynak ARANMADI, yalnız genel "+
            "bilgiden şüphe. Yama YAZILMADI — kaynağa sorulmalı.",
    kaynak:"bulunamadı — akademik kaynak aranmadı", damga:"okumadım" },

  { kimlik:"ingiltere", kume:"Britanya Batı Afrikası", kova:"SOMURGE",
    esle: kutu(3.5, 14.5, -17.5, 15.0),
    gerekce:"Nijerya · Altın Sahili · Sierra Leone · Gambiya — dördü de "+
            "'Colony and Protectorate' ikili yapısı: küçük bir kıyı "+
            "kolonisi (ilhak) + geniş bir iç protektora (dolaylı idare, "+
            "emirlikler ve krallıklar sürdü). Ağırlık protektorada ⇒ "+
            "SÖMÜRGE, ama Sokoto · Kano · Zaria · Bornu · Aşanti gibi "+
            "kayıtlar HİMAYE'ye daha yakın (emirler yerinde kaldı). "+
            "⚠️ Bu küme ikinci bir triyaj hak ediyor.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Moskito Sahili (Río Tinto)", kova:"KUSUR-ADAYI",
    esle: ad("Río Tinto (Black River, Moskito kıyısı)"),
    gerekce:"🔴 TARİH KUSURU — TRİYAJ KALEMİ DEĞİL. AMERİKA kolu ölçtü "+
            "(7 Eylül): İngiltere Moskito Sahili'nden **1786'da çekildi** "+
            "(1786 Londra Sözleşmesi), veri 1923'e kadar `ingiltere` "+
            "boyuyor ⇒ **137 yıllık yanlış kimlik**. Benim kutu-bazlı "+
            "kümem onu 'Batı Hint Adaları' sömürgesi sayıyordu — yani "+
            "COĞRAFÎ olarak doğru kümeye, HUKUKÎ olarak yanlış kovaya "+
            "koymuştum. `yer_yama_moskito.js` bu kalemi zaten yamalıyor.",
    kaynak:"AMERİKA kolu ölçümü (7 Eylül) + 1786 Londra Sözleşmesi",
    damga:"devraldım" },

  { kimlik:"ingiltere", kume:"Batı Hint Adaları + Orta Amerika", kova:"SOMURGE",
    esle: kutu(5.0, 20.0, -90.0, -55.0),
    gerekce:"Jamaika · Trinidad · Britanya Hondurası · Britanya Guyanası — "+
            "Crown Colony idaresi, ayrı valiler ve meclisler. Metropolün "+
            "parçası değil. (Guyana üçlüsü ve Moskito kıyısı ZATEN yamada.)",
    kaynak:"genel bilgi", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Fiji", kova:"SOMURGE",
    esle: ad("Suva","Levuka"),
    gerekce:"1874 Deed of Cession — Cakobau ve şefler egemenliği Kraliçe'ye "+
            "DEVRETTİ ⇒ Crown Colony, ayrı idare ve vali. Metropolün parçası "+
            "değil. ⚠️ Devir gönüllüydü ve şeflik yapısı korundu (Great "+
            "Council of Chiefs) ⇒ HİMAYE'ye kayan bir yönü var.",
    kaynak:"1874 Deed of Cession", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Solomon Adaları Protektorası", kova:"HIMAYE",
    esle: ad("Tulagi","Gizo"),
    gerekce:"1893'ten British Solomon Islands PROTECTORATE — ilhak DEĞİL. "+
            "⚠️ Fiji ile aynı kutuda ama BAŞKA rejim: ikisini tek kalemde "+
            "raporlamak, birine uygulanan çareyi ötekine de uygulatır.",
    kaynak:"1893 protektora ilanı", damga:"genel-bilgi" },

  { kimlik:"ingiltere", kume:"Güney Georgia", kova:"SOMURGE",
    esle: ad("Güney Georgia (Grytviken)"),
    gerekce:"Falkland Adaları Bağımlılığı (1908 Letters Patent) — ayrı idare.",
    kaynak:"genel bilgi", damga:"genel-bilgi" },
);

// ── SIRA: ad-bazli (dar) kurallar KUTULARDAN once. Bir kutu komsu bir
//    kumeyi yutabilir — GA Birligi kutusu Namibya guneyini VE Becuanaland'i
//    yutuyordu (Keetmanshoop · Vindhuk · Tsabong · Serove …). Dar kural
//    her zaman kazanmali; sira KUME dizisinin yazim sirasina BIRAKILMAZ.
const SIRALI = [...KUME.filter(K => K.esle.adBazli), ...KUME.filter(K => !K.esle.adBazli)];

// ── SINIFLANDIR ───────────────────────────────────────────────────────
const kova = {}, kume = {}, kalan = [];
for (const k of kayit) {
  const bulunan = SIRALI.find(K => K.kimlik === k.kimlik && K.esle(k));
  if (!bulunan) { kalan.push(k); continue; }
  k._kova = bulunan.kova; k._kume = bulunan.kume;
  (kova[bulunan.kova] = kova[bulunan.kova] || []).push(k);
  (kume[bulunan.kume] = kume[bulunan.kume] || []).push(k);
}

if (require.main === module) {
  const arg = process.argv[2];
  if (arg === "--kalan") {
    console.log("SINIFLANMADI: " + kalan.length);
    for (const k of kalan.sort((a,b)=>a.lat-b.lat))
      console.log("  " + k.metropol.padEnd(9) + k.lat.toFixed(1).padStart(7) +
                  k.lon.toFixed(1).padStart(8) + "  " + k.ad);
  } else if (arg === "--kume") {
    for (const [n, arr] of Object.entries(kume).sort((a,b)=>b[1].length-a[1].length))
      console.log(String(arr.length).padStart(4) + "  " +
                  (KUME.find(K=>K.kume===n).kova + "").padEnd(8) + n);
  } else if (arg && arg.startsWith("--goster=")) {
    const n = arg.slice(9);
    for (const k of (kume[n]||[]).sort((a,b)=>a.lat-b.lat))
      console.log("  " + k.lat.toFixed(1).padStart(7) + k.lon.toFixed(1).padStart(8) +
                  "  " + k.ad);
  } else if (arg === "--json") {
    const K = {};
    for (const R of KUME) K[R.kume] = R;
    const cikti = {
      _NOT: "TRİYAJ METROPOL — 1923-10-28'de metropol kimliğini anakarası " +
            "DIŞINDA taşıyan kayıtların HUKUKÎ triyajı. Bu bir KUSUR LİSTESİ " +
            "DEĞİLDİR: ILHAK ve KUTU kovalarındaki kayıtlar DOĞRU yazılmıştır " +
            "ve ayrılırlarsa atlas BOZULUR. Yama YAZILMADI (şartname gereği).",
      _OLCUM_GUNU: "1923-10-28",
      _URETEN: "denetim/ARAC-TRIYAJ-KOVA-0907.js",
      _DAMGA_SOZLUGU: {
        "dogrulandi": "kaynak gövdesi okundu",
        "genel-bilgi": "standart tarih bilgisi — TDV/akademik gövde OKUNMADI",
        "okumadım": "aramadım bile — kalem HİÇ AÇILMADI",
        "devraldım": "BAŞKA BİR KOL ölçtü, ben DOĞRULAMADIM"
      },
      toplam: kayit.length,
      kova_dagilimi: Object.fromEntries(
        Object.entries(kova).sort((a,b)=>b[1].length-a[1].length)
              .map(([n,a])=>[n,a.length])),
      kumeler: Object.entries(kume)
        .sort((a,b)=>b[1].length-a[1].length)
        .map(([n,arr]) => ({
          kume: n, kova: K[n].kova, kimlik: K[n].kimlik, nokta: arr.length,
          bekleyen_yamada: arr.filter(x=>x.bekleyen_yamada).length,
          gerekce: K[n].gerekce, kaynak: K[n].kaynak, damga: K[n].damga,
          adlar: arr.map(x=>x.ad).sort(),
        })),
    };
    console.log(JSON.stringify(cikti, null, 1));
  } else {
    console.log("toplam kayıt: " + kayit.length);
    for (const [n, arr] of Object.entries(kova).sort((a,b)=>b[1].length-a[1].length))
      console.log("  " + n.padEnd(9) + String(arr.length).padStart(4));
    console.log("  SINIFLANMADI".padEnd(11) + String(kalan.length).padStart(4));
  }
  if (kalan.length) process.exitCode = 1;
}
module.exports = { kova, kume, kalan, KUME, kayit };
