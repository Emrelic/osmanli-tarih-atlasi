// =====================================================================
// PAKET 0052 — PAKET-KRON4 KRONOLOJİ (14 Eylül 2026, 1.MURAT sevki)
// Rapor: denetim/PAKET-KRON4-0914.md
//
// NİÇİN: PAKET-KAPSAM2 (§4) ölçtü — Şırnak'ın `d:` dönemi `kur:"1891-01-01"`
// ile başlıyor ve bu Osmanlı kırılmasını ±30 günde yalnız ALAKASIZ bir dış
// madde (Müleydâ, Necid) kapatıyor. Sevk: kaynaklı bir Şırnak maddesi.
//
// 🔴 SONUÇ: 1891 İÇİN KAYNAKLI OLAY YOK. TDV `sirnak` yıl vermiyor ("XIX.
//   yüzyılın sonlarına doğru bir köy adı olarak", Cuinet II, 612); 1891 bir
//   egemenlik değişimi değil, noktanın kayıtta GÖRÜNDÜĞÜ alt sınır. TDV bu
//   toprakları 1514'ten beri Osmanlı sayıyor. ⇒ 1891'e madde YAZILMADI (tarih
//   uydurma yok, §4). Atlas düzelecek yer raporda (§1).
// Yazılan tek madde, TDV'nin Şırnak için VERDİĞİ idarî tarih: 1884.
// Bu madde 1891 kırılmasını KAPATMAZ ve kapatmak için yazılmadı.
//
// AD ALANI (§7): data/olaylar_p0052.js → window.OLAYLAR_P0052
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0052 = [

// ── Siirt sancağı Bitlis vilâyetine · Şırnak Eruh kazasında ─────────
{ t:"1884-01-01", kesinlik:"yil", k:"idari", kapsam:"ic", etiket:["idari","konu-idari"],
  b:"Siirt sancağı Diyarbekir'den Bitlis vilâyetine nakledildi — Eruh kazası ve Şırnak köyü de Bitlis'e bağlandı",
  gun:"1884 (ay ve gün kaynakta yok)",
  yer:"Siirt sancağı, Eruh kazası (Şırnak)",
  yer_id:"Şırnak",
  kisiler:"",
  d:"Tanzimat'tan sonra eyalet sisteminden vilâyet sistemine geçilince Diyarbekir vilâyetine bağlı kalan Siirt sancağı 1884'te Bitlis vilâyetine nakledildi. TDV'nin Şırnak maddesine göre bugünkü Şırnak'ın bulunduğu topraklar da böylece Bitlis vilâyetinin Siirt sancağına bağlı Eruh kazası içinde yer aldı. Şırnak o sırada Eruh kazasının küçük bir köyüydü; adı XIX. yüzyılın sonlarına doğru kayıtlarda görünür, kaza merkezi oluşu ise Cumhuriyet'in ilk yıllarına kalır. Bu topraklar Çaldıran Seferi'nin ardından 1514'te Osmanlı'ya katılmış ve Diyarbekir eyaletinin Siirt sancağı içinde idare edilmişti.",
  ic_not_gun:"İKİ TDV MADDESİ AYNI YIL: `siirt` ('1884'te Bitlis vilâyetine nakledilen Siirt') · `sirnak` ('1884'te Siirt sancağı Bitlis vilâyetine bağlanınca'). Ay ve gün ikisinde de YOK ⇒ YYYY-01-01 + kesinlik:'yil' (§4).",
  ic_not_d:"ATLAS DÜZELECEK YER (Oturum 0 · yerlesimler_ok109.js Şırnak): kayıt `kur` ve `d:` başını 1891-01-01'e koyuyor. Dayanağı YOK: TDV `sirnak` yıl vermiyor ('XIX. yüzyılın sonlarına doğru', Cuinet II, 612) ve Cuinet'nin II. cildinin yılı kataloglarda çelişkili (British Library nüshası Wikimedia Commons'ta 1892 · Google-Michigan taraması 1890) — 1891 ölçülemedi. Üstelik bu kırılma bir egemenlik değişimi değil, noktanın kayıtta görünmesidir: TDV bu toprakları 1514'ten Osmanlı sayar. Bu madde o kırılmayı kapatmaz.",
  kaynak:"siirt · sirnak" }

];
