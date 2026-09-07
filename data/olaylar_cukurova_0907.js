// =====================================================================
// OLAYLAR CUKUROVA 0907 — ÇUKUROVA'NIN İŞGAL VE TAHLİYE GÜNLERİ
// 1.MURAT (Oturum 0) · 7 Eylül 2026
// =====================================================================
// NİÇİN YAZILDI — bir GEOMETRİ borcunu ödemek için:
//   `denetim/yer_yama_cukurova_isg_0907.js` (15 kayıt) `Değişmez 7`yi
//   663 → 661 indiriyor ve Antep·Kilis·Payas adalarını kapatıyor. Ama
//   uygulandığında `Değişmez 2i` 3 → 9 AÇIK oldu: yamanın `isg:` günleri
//   kronolojide karşılıksızdı.
//   ⇒ Yama geri alındı, ve BLOKENİN KENDİSİ ölçüldü: 16 `isg:` gününün
//     ONU zaten maddeli, ALTISI değil. Bu dosya o altısını yazar.
//
// 🔴 TAVAN YÜKSELTİLMEDİ, MADDE YAZILDI. `CLAUDE.md` FAZ 1'in dersi:
//   *"tavan yükseltilseydi ihlal susardı ve Sarıkamış ada kalırdı —
//     denetim temiz, harita yanlış."*
//
// ── KAYNAK: ALTISININ ALTISI DA TDV, GÖVDESİ OKUNDU ──────────────────
//   Altı gün de yamanın kendi `kaynak:` alanlarından DEVRALINMADI;
//   TDV gövdeleri tek tek çekilip cümleleri okundu (`§4`: *"beyan edilen
//   kaynak iddiayı taşımıyor olabilir"*). Altısı da BİREBİR tuttu.
//
// ⚠️ VE BİR TDV TUZAĞI ÇIKTI (`§4` ⑥ — canlı yönlendirme kütüğü):
//   `maras` slug'ı HTTP 200 döner ama gövdesi *"bk. KAHRAMANMARAŞ"*
//   tipinde bir ADRESTİR, madde değil. Doğru slug `kahramanmaras`.
//   Bir HTTP taraması `maras`ı "CANLI" sayardı.
// =====================================================================
window.OLAYLAR_CUKUROVA_0907 = [

  {
    t: "1919-02-22",
    k: "kayip",
    etiket: ["isgal"],
    b: "Maraş'ın İngilizler tarafından işgali",
    gun: "22 Şubat 1919",
    yer: "Maraş",
    yer_id: "Maraş",
    kaynak: "kahramanmaras",
    d: "Mondros Mütarekesi'nin ardından İngiliz kuvvetleri Maraş'a girdi. İşgal sekiz ay sürdü; İngiltere ile Fransa arasındaki anlaşma gereği şehir 29 Ekim 1919'da Fransızlara devredildi. TDV `kahramanmaras`: \"Mondros Mütarekesi'nin ardından İngilizler 22 Şubat 1919'da şehri işgal ettiler.\" ve \"İngiltere ile Fransa arasında yapılan antlaşma neticesinde Maraş ve çevresi Fransa'ya devredilince 29 Ekim 1919'da Fransızlar Maraş'a girdiler.\" ⚠️ Bu bir İŞGAL kaydıdır, egemenlik devri DEĞİL: Mondros bir mütarekedir, Sevr onaylanmamıştır."
  },

  {
    t: "1921-12-23",
    k: "kazanc",
    etiket: ["kurtulus"],
    b: "Kilis'in kurtuluşu — Fransızların tahliyesi",
    gun: "23 Aralık 1921",
    yer: "Kilis",
    yer_id: "Kilis",
    kaynak: "kilis",
    d: "Ankara İtilâfnâmesi'nin (20 Ekim 1921) öngördüğü tahliye takvimi uyarınca Fransız kuvvetleri Kilis'ten çekildi. Şehir üç yıl önce, 6 Aralık 1918'de İngilizlerce işgal edilmiş, 29 Ekim 1919'da Fransızlara devredilmişti. TDV `kilis`: \"Kilis, Mondros Mütarekesi'nin ardından 6 Aralık 1918 tarihinde İngilizler tarafından işgal edildi.\" · \"Bir yıldan fazla bir süre devam eden bu işgalden sonra İngilizler burayı 29 Ekim 1919'da Fransız kuvvetlerine terkettiler.\" · \"Nihayet 23 Aralık 1921'de Kilis'in kurtuluşu gerçekleşmiş oldu.\""
  },

  {
    t: "1921-12-25",
    k: "kazanc",
    etiket: ["kurtulus"],
    b: "Antep'in kurtuluşu — Fransızların şehri boşaltması",
    gun: "25 Aralık 1921",
    yer: "Antep",
    yer_id: "Antep",
    kaynak: "gaziantep",
    d: "Ankara Antlaşması'nın ardından Fransız kuvvetleri Antep'i boşalttı. Şehir 17 Aralık 1918'de İngilizlerce işgal edilmiş, 5 Kasım 1919'da Fransızlara bırakılmış; halk 1 Nisan 1920 – 7 Şubat 1921 arasında Fransız kuvvetlerine karşı uzun bir savunma vermişti. TDV `gaziantep`: \"17 Aralık 1918'de İngilizler şehre girdiler\" · \"Yaklaşık bir yıl süren işgalinin ardından Fransızlar ile yaptıkları anlaşma gereği burayı onlara terkettiler (5 Kasım 1919)\" · \"Antep halkı 1 Nisan 1920'den 7 Şubat 1921'e kadar Fransız kuvvetlerine karşı büyük bir mücadele verdi\" · \"Fransızlar Ankara Antlaşması'nın ardından 25 Aralık 1921'de şehri boşalttılar.\""
  },

  {
    t: "1921-12-27",
    k: "kazanc",
    etiket: ["kurtulus"],
    b: "Tarsus'un kurtuluşu — Fransızların şehri boşaltması",
    gun: "27 Aralık 1921",
    yer: "Tarsus",
    yer_id: "Tarsus",
    kaynak: "tarsus",
    d: "Fransız kuvvetleri Ankara Antlaşması gereğince Tarsus'tan çekildi; şehir 17 Aralık 1918'den beri işgal altındaydı. TDV `tarsus`: \"Tarsus 1603'te Celâlî, 1833-1840 yılları arasında Mısır Valisi Mehmed Ali Paşa, 17 Aralık 1918'de Fransız işgaline ve Ermeni çetelerinin zulmüne uğradı. Fransızlar, Ankara Antlaşması'yla 27 Aralık 1921'de şehri boşalttılar.\""
  },

  {
    t: "1922-01-03",
    k: "kazanc",
    etiket: ["kurtulus"],
    b: "Mersin'in kurtuluşu — millî kuvvetlerin şehre girişi",
    gun: "3 Ocak 1922",
    yer: "Mersin",
    yer_id: "Mersin",
    kaynak: "mersin",
    d: "Millî kuvvetler Mersin'e girdi; son Fransız birlikleri ertesi gün şehri terketti. Fransız çıkarması 17 Aralık 1918'de denizden yapılmıştı. TDV `mersin`: \"17 Aralık 1918'de Fransız askerleri denizden Mersin'e çıkarma yapmaya başladı.\" · \"3 Ocak 1922'de millî kuvvetler Mersin'e girerek şehri kurtardı ve son Fransız kuvvetleri ertesi gün şehri terketti.\" ⚠️ TDV kurtuluşu 3 Ocak, son birliklerin ayrılışını 4 Ocak veriyor; atlas gövdeyi kurtuluş gününde çeviriyor ve fark burada BEYAN ediliyor."
  },

  {
    t: "1922-01-05",
    k: "kazanc",
    etiket: ["kurtulus"],
    b: "Adana'nın kurtuluşu — Fransızların şehri terketmesi",
    gun: "5 Ocak 1922",
    yer: "Adana",
    yer_id: "Adana",
    kaynak: "adana",
    d: "Fransız kuvvetleri Adana'yı terketti ve Çukurova'nın tahliyesi tamamlandı. Şehir 24 Aralık 1918'den beri Fransız işgali altındaydı. TDV `adana`: \"I. Dünya Savaşı sonunda 24 Aralık 1918'de Fransızlar tarafından işgal edilen Adana\" · \"5 Ocak 1922'de Fransızlar, şehri, kendilerine yardımcı olan Ermeniler'le birlikte terketmişlerdir. Bu tarih bugün Adana'nın kurtuluş günü olarak kutlanmaktadır.\""
  }

];
