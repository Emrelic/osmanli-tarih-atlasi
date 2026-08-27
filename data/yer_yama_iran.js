// data/yer_yama_iran.js — İRAN KORİDORU (H-0089) DÜZELTMELERİ
// DEĞİŞMEZ 7 ENKLAV · 27 Ağustos 2026 · ORHANGAZİ sevkiyle (M-1314)
//
// 🔴 ÖNERİ + UYGULANABİLİR KAYIT. Motor bunu OKUMAZ; index.html'e EKLENMEZ.
//    Uygulamayı koordinatör yapar.
//
// KAYNAK KURALI: Emre'nin paketindeki ChatGPT metninden HİÇBİR HÜKÜM
// alınmadı (`§4`: yapay zekâ üretimi metin kullanılmaz). O metin bir İZDİ;
// gösterdiği ADRESLER (TDV `tebriz` · `hoy` · `urmiye` · `meraga`) gövdesi
// OKUNARAK doğrulandı ve her kayıtta alıntılandı.
//
// ÜÇ BÖLÜM
//   A_veri_yanlis   TDV doğruladı, dönem YAZILDI      → uygulanabilir
//   B_nokta_yok     TDV Osmanlı statüsünü doğruluyor AMA koordinat kaynağı
//                   açılamadı ⇒ NOKTA YAZILMADI, hazırlığı burada duruyor
//   bulunamadi      TDV tarih vermiyor ⇒ YAZILMADI (koordinatörün (b) şıkkı)
window.YER_YAMA_IRAN = {
 "olcum": {
  "tarih": "2026-08-27",
  "A_uygulanan_yerlesim": 1,
  "A_eklenen_donem": 2,
  "B_yazilmayan_nokta": 6,
  "bulunamadi": 1,
  "hoy_3km_icinde_baska_nokta": 0
 },
 "A_veri_yanlis": [
  {
   "yerlesim": "Hoy",
   "alan": "d",
   "ekle": [
    {
     "f": "1585-09-25",
     "t": "1603-10-21"
    },
    {
     "f": "1724-01-01",
     "t": "1739-01-01"
    }
   ],
   "kaynak": "TDV `hoy`: \"Rumlu Mahmud Bey'in idaresindeki Hoy yeniden Osmanlı hâkimiyeti altına girdi\" · Tebriz'e bağlı SANCAK MERKEZİ, sancakbeyi Alâeddin Bey 1585 · \"Şah I. Abbas'ın eline geçen Hoy\" 1603 · 1612 Nasuh Paşa antlaşmasıyla İran'a terk · 1724'te III. Ahmed döneminde yeniden Osmanlı, on beş yıl sonra (1739) İran'a döndü",
   "gun_secimi": "TDV YIL veriyor, GÜN vermiyor. 1585-09-25 ve 1603-10-21 atlasın Tebriz · Nahçıvan · Ahar kayıtlarının AYNI günü. 🔴 Niçin `1585-01-01` YAZMADIM: o gün Tebriz hâlâ Safevî olurdu ve Hoy dokuz ay boyunca YAPAY BİR ADA olurdu — Değişmez 7 onu ihlal sayardı. Yani gün seçimi kaynaktan değil, TUTARLILIKTAN geliyor ve bunu SÖYLÜYORUM.",
   "not": "`s: safevi 1501-07-01→1736-03-08` DOKUNULMADAN kalıyor. Bu, atlasın yerleşik deseni: Tebriz · Nahçıvan · Ahar üçünde de `s:` safevî sürerken `d:` Osmanlı dönemi üstüne yazılı; motor Osmanlı'yı kazandırıyor (denetle.py: s×d örtüşmesi KASITLI)."
  }
 ],
 "B_nokta_yok": [
  {
   "yerlesim": "Merağa (Marāgha)",
   "durum": "NOKTA YAZILMADI — koordinat kaynağı yok",
   "osmanli_kaydi": "TDV `meraga`: \"Osmanlı-Safevî savaşlarında 941 (1534) ve 993 (1585) yıllarında iki defa Osmanlılar'ın eline geçen şehir bir süre de bu devlete bağlı kaldı\" · Osmanlı sisteminde SANCAK (492.400 akçe gelir kaydı) · Şah Abbas döneminde (1587-1629) tekrar Safevîler'e bağlandı",
   "konum_tarifi": "TDV: \"İran'ın kuzeybatısındaki Urmiye gölünün yakınında\" · \"Sehend dağının güney eteklerinden geçen Sâfî akarsuyunun kenarında\"",
   "onerilen_donem": "d: 1585-09-25 → 1603-10-21 (+ muhtemelen 1534 dönemi ayrıca)"
  },
  {
   "yerlesim": "Miyandoab (Miyândûvab)",
   "durum": "NOKTA YAZILMADI — koordinat kaynağı yok",
   "osmanli_kaydi": "TDV `tebriz` 1593 taksimi: Merâga'nın NAHİYELERİ arasında \"Miyândûvab\" sayılıyor",
   "konum_tarifi": "Urmiye gölünün güneydoğusundaki Miyândûâb ovası (Iranica'ya atfen ORHANGAZİ'nin ilettiği izde geçiyor — DOĞRULAMADIM)",
   "onerilen_donem": "d: 1585-09-25 → 1603-10-21"
  },
  {
   "yerlesim": "Sulduz (Suldus)",
   "durum": "NOKTA YAZILMADI — koordinat kaynağı yok",
   "osmanli_kaydi": "TDV `tebriz` 1593 taksimi: Tebriz eyaletinin LİVÂLARI arasında \"Suldus\"",
   "konum_tarifi": "🔴 Tarihî bir OVA/livâ adı; bugünkü hangi yerleşimle eşleneceği ARAŞTIRILMADI. Modern bir kasabayla eşlemek ÇIKARIM olur, yazmadım.",
   "onerilen_donem": "d: 1585-09-25 → 1603-10-21"
  },
  {
   "yerlesim": "Dizmâr",
   "durum": "NOKTA YAZILMADI — koordinat kaynağı yok",
   "osmanli_kaydi": "TDV `tebriz` 1593 taksimi: livâ",
   "konum_tarifi": "bulunamadı",
   "onerilen_donem": "d: 1585-09-25 → 1603-10-21"
  },
  {
   "yerlesim": "Sarukurgân",
   "durum": "NOKTA YAZILMADI — koordinat kaynağı yok",
   "osmanli_kaydi": "TDV `tebriz` 1593 taksimi: livâ",
   "konum_tarifi": "bulunamadı",
   "onerilen_donem": "d: 1585-09-25 → 1603-10-21"
  },
  {
   "yerlesim": "Saidâbâd (Saîdâbâd)",
   "durum": "NOKTA YAZILMADI — koordinat kaynağı yok",
   "osmanli_kaydi": "TDV `tebriz` 1593 taksimi: livâ",
   "konum_tarifi": "bulunamadı",
   "onerilen_donem": "d: 1585-09-25 → 1603-10-21"
  }
 ],
 "bulunamadi": [
  {
   "yerlesim": "Urmiye",
   "durum": "DÖNEM YAZILMADI — koordinatörün (b) şıkkı",
   "sebep": "TDV `urmiye` XVI. yüzyıl dönemine HİÇBİR YIL vermiyor: \"XVI. yüzyılın sonlarında kısa bir süre Osmanlı egemenliğine geçtiyse de Şah I. Abbas tarafından yeniden Safevî Devleti'ne bağlandı\". Başlangıç günü UYDURULAMAZ.",
   "ikinci_donem": "1724 dönemi de yazılmadı: TDV \"1724 yılında bir defa daha Osmanlı hâkimiyetine girdi\" diyor AMA aynı maddede \"Hekimoğlu Ali Paşa ve Rüstem Paşa ... Urmiye'yi ele geçirdiler (1730)\" de yazıyor. İki cümle BİRBİRİYLE gerginlik içinde (1724'te girdiyse 1730'da niçin ele geçiriliyor?) ⇒ bitiş tarihi ÇIKARILAMADI. 🔴 Yanlış bir tarih, eksik bir dönemden kötüdür."
  }
 ],
 "kaynak_erisimi": {
  "denenen": [
   "Encyclopaedia Iranica (iranicaonline.org)",
   "Britannica"
  ],
  "sonuc": "İKİSİ DE HTTP 403 — bu oturumdan erişilemedi",
  "geonames": "sayfa gövdesi gelmedi (JS ile yükleniyor)",
  "sonuc_hukmu": "Koordinat için KABUL EDİLEBİLİR bir kaynak açılamadı ⇒ B kovasında NOKTA YAZILMADI. §4: kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez."
 }
};
