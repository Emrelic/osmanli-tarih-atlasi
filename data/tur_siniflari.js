// ============================================================================
// TÜR SINIFLARI — kronoloji maddelerinin "tur" alanındaki 70+ dağınık değerin
// ~14 ANA TÜRE eşlemesi (KRON-ALAN-1108, Emre onayı 8 Kasım 2026).
// Yalnız OKUMA tablosudur: maddelerin tur/k/etiket değerleri değişmez.
// Kullanım: window.TUR_SINIFLARI[m.tur] -> ana tür kimliği;
//           window.TUR_ANA_ADLARI[ana]  -> görünen ad.
// Ana türler: askeri · toprak-degisimi · siyasi · hanedan-kisi · diplomasi ·
//   hukuk-idari · ekonomi · din · bilim-teknoloji · kultur-sanat · mimari ·
//   toplumsal · doga-felaket · spor · diger.  (spor için henüz tur değeri
//   yok; ileride tur:"spor" yazılırsa kendi ana türüne düşer.)
// ============================================================================
window.TUR_ANA_ADLARI = {
  "askeri": "Askerî", "toprak-degisimi": "Toprak değişimi", "siyasi": "Siyasi",
  "hanedan-kisi": "Hükümdar ve kişiler", "diplomasi": "Diplomasi",
  "hukuk-idari": "Hukuk ve idare", "ekonomi": "Ekonomi", "din": "Din",
  "bilim-teknoloji": "Bilim ve teknoloji", "kultur-sanat": "Kültür ve sanat",
  "mimari": "Mimari ve şehircilik", "toplumsal": "Toplumsal",
  "doga-felaket": "Doğa ve felaket", "spor": "Spor", "diger": "Diğer"
};
window.TUR_SINIFLARI = {
  // askerî
  "savas": "askeri", "askeri": "askeri", "kusatma": "askeri", "sefer": "askeri",
  "ic-savas": "askeri", "deniz": "askeri",
  // toprak değişimi (atlasın çekirdeği: sınırı oynatan olay)
  "toprak-kazanc": "toprak-degisimi", "toprak-kayip": "toprak-degisimi",
  "fetih": "toprak-degisimi", "isgal": "toprak-degisimi", "toprak": "toprak-degisimi",
  "kayip": "toprak-degisimi", "toprak-degisimi": "toprak-degisimi",
  "ilhak": "toprak-degisimi", "tahliye": "toprak-degisimi",
  "bolunme": "toprak-degisimi", "birlesme": "toprak-degisimi",
  // siyasi (devlet kuruluş/son, rejim, iç siyaset, tâbiyet, isyan)
  "kurulus": "siyasi", "son": "siyasi", "yikilis": "siyasi", "siyaset": "siyasi",
  "siyasi": "siyasi", "rejim": "siyasi", "kriz": "siyasi", "darbe": "siyasi",
  "vassal": "siyasi", "tabi": "siyasi", "tabiiyet": "siyasi", "itaat": "siyasi",
  "baskent": "siyasi", "kurtulus": "siyasi", "bagimsizlik": "siyasi",
  "isyan": "siyasi", "ayaklanma": "siyasi", "ic-karisiklik": "siyasi",
  // hükümdar ve kişiler
  "hukumdar": "hanedan-kisi", "taht": "hanedan-kisi", "hanedan": "hanedan-kisi",
  "olum": "hanedan-kisi", "vefat": "hanedan-kisi", "dogum": "hanedan-kisi",
  "evlilik": "hanedan-kisi", "sadrazam": "hanedan-kisi", "kisi": "hanedan-kisi",
  // diplomasi
  "antlasma": "diplomasi", "diplomasi": "diplomasi", "ittifak": "diplomasi",
  "ateskes": "diplomasi",
  // hukuk ve idare
  "idari": "hukuk-idari", "reform": "hukuk-idari", "kanun": "hukuk-idari",
  "anayasa": "hukuk-idari", "hukuk": "hukuk-idari",
  // öteki
  "ekonomi": "ekonomi", "din": "din",
  "bilim": "bilim-teknoloji", "felsefe": "bilim-teknoloji",
  "teknoloji": "bilim-teknoloji", "kesif": "bilim-teknoloji",
  "kultur": "kultur-sanat", "kultur-sanat": "kultur-sanat",
  "hikaye": "kultur-sanat", "magazin": "kultur-sanat",
  "mimari": "mimari", "sehircilik": "mimari",
  "sosyal": "toplumsal",
  "salgin": "doga-felaket", "felaket": "doga-felaket",
  "spor": "spor",
  "diger": "diger", "olay": "diger", "tartisma": "diger", "sebep-sonuc": "diger"
};
