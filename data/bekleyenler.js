// Otomatik üretildi — ELLE DÜZENLEMEYİN.
// Kaynak: BEKLEYENLER.md · Betik: arac/uret_bekleyenler.py
//
// ⚠️ Bu dosyayı elle düzenlemek TEK KAYNAK kuralını bozar: tablo iki
//    yerde durursa ayrışır ve kullanıcı yanlış olana bakar. Değişiklik
//    BEKLEYENLER.md'ye yazılır, sonra bu betik koşturulur.
window.BEKLEYENLER = {
 "bolum": {
  "gorsel": {
   "baslik": [
    "#",
    "ne yapılacak",
    "doğruysa ne görmelisin",
    "durum"
   ],
   "satir": [
    [
     "①",
     "Manuel zoom yap → maddeleri Ankara 1402'nin ötesine ilerlet",
     "Harita senin bıraktığın zoom'da kalmalı, 🔍 Oto düğmesi sönük",
     "⏳"
    ],
    [
     "②",
     "Lejant kutusunu kapat",
     "Alan göstergesi (\"zirvenin %N'i\") hâlâ görünmeli",
     "⏳"
    ],
    [
     "③",
     "Maddeleri arka arkaya ilerlet",
     "Sağ alt anlatım paneli takılmadan ilerlemeli",
     "⏳"
    ],
    [
     "④",
     "z6'da Ankara · Bursa · Kütahya · İzmir · Sivas · Antalya",
     "İkinci etiket hâlâ var ama artık ne olduğunu söylüyor (idarî birim)",
     "⏳"
    ],
    [
     "⑤",
     "1516-09-27 Şam maddesine git",
     "Şam haritada işaretli olmalı (33 kısa adlı şehir düzeltmesi)",
     "⏳"
    ],
    [
     "⑥",
     "▦ Veri sınırı düğmesini aç",
     "Dikdörtgen bir kenar — göremediğin her yer bu çizginin dışında",
     "⏳"
    ],
    [
     "⑦",
     "🗺 Coğrafya düğmesini aç, ekran görüntüsü gönder",
     "Bu bir ölçüm: beş katman açıkken harita okunabiliyor mu? Katman paneli buna bağlı",
     "⏳"
    ],
    [
     "⑧",
     "1484 Temmuz–Ağustos'a git, yakınlaş",
     "Kili'nin yanında 1484-07-15, Akkirman'ın yanında 1484-08-04 rozeti — iki ayrı tarih. Mantık sınandı, görünüm sınanmadı",
     "⏳"
    ]
   ]
  },
  "karar": {
   "baslik": [
    "#",
    "karar",
    "neden sende",
    "durum"
   ],
   "satir": [
    [
     "K1",
     "Amerika / Batı Afrika / Avustralya için KAYNAK BARI",
     "TDV oraları kapsamıyor. Karar verilmeden iş verilirse ilk paket kaynaksız gelir. Seçenekler: (a) bölge başına standart akademik kaynak, künyeye yazılarak · (b) o bölgeleri \"atlas\" değil \"arka plan\" olarak tutmak",
     "⏳"
    ],
    [
     "K3",
     "Hindistan / Çin oturumu açılacak mı",
     "Artık ölçüldü, DÖRT kapı var: ① girdi.py GIRDI_DOSYALARI ② renkler.py kimlikleri (98+15) ③ BOLGE kutusu (uret_petek.py:43) ④ app.js+index.html. yerlesimler_asya.js zaten var ama dördünden de geçmiyor — yazılan hiçbir şey görünmez. Oturum açmadan önce kapılar açılmalı, yoksa iş boşa gider. (Önce \"üç kapı\" demiştim, MOTOR dördüncüyü ölçtü — ilk üçü onun, sonuncusu ARAYÜZ'ün)",
     "⏳"
    ],
    [
     "K4",
     "🔴 VERİ KİMLİK BÜTÜN GÜN SESSİZ — bölelim mi",
     "Kuyruk 8 → 12 kaleme çıktı ve oturum 1 Ağustos boyunca hiç cevap vermedi. Bekleyenler: dehlek · astarhan · nogay · sirbistan-nemanjic · arnavutluk-bagimsiz · afsar/zend · kafkas-hanliklari · buyuk-orda grubu · merini · aragon/kastilya · cezayir-fransiz · suriye-arap-kralligi. Seçenekler: (a) beklemeye devam · (b) ikinci bir kimlik oturumu · (c) renk seçimini koordinatör yapsın",
     "⏳"
    ],
    [
     "K5",
     "Kalan üç görsel doğrulama gerçekten gerekli mi",
     "①-⑧'in sekizi de 31 Temmuz'dan beri bekliyor. Bugün yayın iki kez tazelendi ve arayüz değişmedi; sekizi de hâlâ geçerli. Ama ⑦ (🗺 Coğrafya ekran görüntüsü) bir ölçüm ve katman paneli ona bağlı — hangilerini gerçekten yapacaksan söyle, gerisini kapatayım",
     "⏳"
    ]
   ]
  },
  "kapanan": {
   "baslik": [
    "#",
    "neydi",
    "nasıl kapandı"
   ],
   "satir": [
    [
     "K2",
     "DENETÇİ ve ARAŞTIRMA ARABİSTAN'a /compact",
     "1 Ağustos — kullanıcı ikisini de compact'ledi, oturumlar tetiklendi"
    ],
    [
     "K6",
     "Yukarı Macaristan: 4 nokta şimdi mi, Macaristan paketiyle mi",
     "1 Ağustos 16:40 — kullanıcı \"şimdi ekle\" dedi. ~28.000 km² 91 yıl boyunca yanlışlıkla Osmanlı boyanıyordu"
    ],
    [
     "K7",
     "Nokta ekleme işini kim yapsın",
     "1 Ağustos 16:40 — kullanıcı \"ayrı bir NOKTA EKLEME oturumu\" dedi. Oturum açıldı, görev tanımı oturumlar/NOKTA-EKLEME.md (0ecf58d). Dört boşluk topluyor: Girit üç kale · Yukarı Macaristan · Dalmaçya anakarası · Venedik Arnavutluğu"
    ],
    [
     "K8",
     "Belirsiz sınır alanları nasıl gösterilsin",
     "1 Ağustos 16:35 — kullanıcı \"benekli harita\" istedi. Tasarım yazıldı (MOTOR-BENEK-ALANI.md, 5dfd8b4): benek ikiye ayrıldı — seyrelen tek renk = hâkimiyet zayıflıyor · iki renk karışık = iki devletin nüfuz alanı. Kaynaksız benek yazılamıyor (neden: zorunlu)"
    ]
   ]
  }
 },
 "ozet": {
  "gorsel_acik": 8,
  "karar_acik": 4,
  "toplam_acik": 12
 }
};
