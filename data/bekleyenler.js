// Otomatik üretildi — ELLE DÜZENLEMEYİN.
// Kaynak: BEKLEYENLER.md · Betik: arac/uret_bekleyenler.py
//
// ⚠️ Bu dosyayı elle düzenlemek TEK KAYNAK kuralını bozar: tablo iki
//    yerde durursa ayrışır ve kullanıcı yanlış olana bakar. Değişiklik
//    BEKLEYENLER.md'ye yazılır, sonra bu betik koşturulur.
window.BEKLEYENLER = {
 "bolum": {
  "bekleyen": {
   "baslik": [
    "#",
    "iş",
    "niçin sen",
    "süre"
   ],
   "satir": [
    [
     "✅ ~~B9~~",
     "CEVAP: A — kıyı 220 m korunuyor. Ondalık kısaltma YAPILMADI; zaman penceresi ölçüldü ve çok daha fazlasını kazandırıyor (9,49→0,20 MB)",
     "—",
     "✅"
    ],
    [
     "B8",
     "🟡 KARAR — ama korkulan felaket OLMADI, sayılar bugün yeniden ölçüldü. 2 Ağustos'ta \"36 MB, kutu açılınca ~100 MB olacak, mobilde çökebilir\" yazmıştım. Kutu AÇILDI (L kutusu, r771), üstüne 90 nokta eklendi — ve site 44,63 MB (donemler.js 22,26 + devletler_harita.js 14,52 + altlik.js 5,31 + petek_govde.js 3,16). Yani ~100 MB tahmini iki kattan fazla yanlış çıktı; melez sadeleştirme farkı yuttu. ⇒ Soru duruyor ama acil değil: (a) böl (b) daha da sıkıştır (c) 44,63 MB'a razı ol. Mobil ölçümü yok — kararın önündeki tek gerçek boşluk bu",
     "ürünün senin",
     "2 dk"
    ],
    [
     "✅ ~~B5~~",
     "RENK oturumu AÇILDI (Opus 5) — 15 Avrupa rengi teslim edildi, Asya sürüyor",
     "—",
     "✅"
    ]
   ]
  },
  "gorsel": {
   "baslik": [],
   "satir": []
  },
  "karar": {
   "baslik": [
    "#",
    "karar",
    "senin sözün"
   ],
   "satir": [
    [
     "K1",
     "Kaynak barı — TDV'nin kapsamadığı coğrafyalar. Kullanıcı kapsamı düzeltti: \"klasik tarihî bölgeler (Avrupa · Asya'nın Japon-Çin-Hindistan-Ortaasya-Ortadoğu kesimleri · Sahra üstü Afrika) HARİCİNDE her yer\". Yani: Amerika (kuzey·orta·güney) · Sahra altı Afrika (komple) · Avustralya + Yeni Zelanda + Papua + Endonezya + Malezya + Filipinler + Mikronezya · Sibirya · Kamçatka · İrkutsk · Ural (Asya'nın tenha kesimleri). ⚠️ Bunlardan Endonezya/Malezya/Filipinler ARTIK KUTUNUN İÇİNDE (bugünkü koşuyla) — onlar için soru ertelenmiş değil, canlı. Gerekirse bölge bölge yapılır",
     "\"sonraya bırakalım\""
    ]
   ]
  },
  "istege_bagli": {
   "baslik": [
    "oturum",
    "model",
    "niçin bekliyor"
   ],
   "satir": [
    [
     "VERİ KRONOLOJİ 3",
     "Sonnet",
     "Cem Sultan 1495 · Sapienza 1499 · Altın Orda 1502 · Murad Bey 1503 · Şahkulu — beş eksik madde; ayrıca 2s borcu 126/114"
    ],
    [
     "VERİ KİMLİK 4",
     "Sonnet",
     "45 kimlik / 359 pencere dizinde karşılıksız — %96'sı yerlesimler_asya.js merge borcu"
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
     "①-⑧",
     "Sekiz görsel doğrulama",
     "1 Ağustos — sekizi de ekranda doğrulandı"
    ],
    [
     "K2",
     "DENETÇİ + ARAŞTIRMA ARABİSTAN'a /compact",
     "1 Ağustos — yapıldı"
    ],
    [
     "K3",
     "Hindistan / Çin oturumu",
     "2 Ağustos — brifing yazıldı (c155a6a), ama ölçüm sırayı değiştirdi: Asya son kapı oldu → B3"
    ],
    [
     "K4",
     "VERİ KİMLİK darboğazı",
     "1 Ağustos — \"ikinci bir kimlik oturumu açalım\". Kuyruk 12 kaleme çıkmıştı"
    ],
    [
     "K5",
     "Kalan görsel doğrulamalar gerekli mi",
     "1 Ağustos — sekizi de yapıldı, soru düştü"
    ],
    [
     "K6",
     "Yukarı Macaristan: 4 nokta şimdi mi",
     "1 Ağustos — \"şimdi ekle\". ~28.000 km², 91 yıl"
    ],
    [
     "K7",
     "Nokta ekleme işini kim yapsın",
     "1 Ağustos — ayrı oturum açıldı, beş boşluk topluyor"
    ],
    [
     "K8",
     "Belirsiz sınır alanları nasıl gösterilsin",
     "1 Ağustos — \"benekli harita\", tasarım yazıldı"
    ]
   ]
  }
 },
 "ozet": {
  "bekleyen_acik": 1,
  "gorsel_acik": 0,
  "karar_acik": 1,
  "istege_bagli": 2,
  "toplam_acik": 2
 }
};
window.URETIM_IZI = {"girdi":{"BEKLEYENLER.md":"32cb077274b1e03dcd275e908dd572d387cfcee91b8184769db9461e86bbef3c"},"motor":{"uret_bekleyenler.py":"a232d468fe9d5490a0842969a90702e976aca4d78142126925eaf68f4243fa78"}};
