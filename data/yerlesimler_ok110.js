// data/yerlesimler_ok110.js — YENİ YERLEŞİM NOKTASI
// OPUS HAZIR KITA 110 · 2 Eylül 2026 · 1.MURAT sevkiyle
// kaynak paket: parti-emrelic-0017 / H-0001 (Voronoi kaması · Orta Anadolu)
//
// 🔴 BU DOSYA BAĞLANIR (yama DEĞİL). `arac/girdi.py` GIRDI_DOSYALARI'na
//    eklenmesi ve `index.html`e satır yazılması gerekir — İKİSİNİ DE
//    KOORDİNATÖR YAPAR. Ben yazdım, bağlamadım.
//    📌 "Anlık görüntü YAZABİLİRSİN der, BAĞLAYABİLİRSİN demez."
// ⚠️ KOŞU SÜRÜYOR — bu nokta BU koşuya değil, BİR SONRAKİNE girer.
//
// Ad alanı dosya adından türetildi (`ok110`) — CLAUDE.md §7'nin 16 Ağustos
// dersi: ayrı dosya vermek ayrı ad alanı vermek DEĞİLDİR.
//
// ═══════════════════════════════════════════════════════════════════════
// NİÇİN — ÖLÇÜLMÜŞ BOŞLUK
// ═══════════════════════════════════════════════════════════════════════
// Emre 0017/H-0001'de Orta Anadolu'da üçgen bir kama gördü. Devraldığım
// ölçümü DOĞRULADIM (B10 — raporu düzeltmeden önce sebebi kendim ölçtüm):
//   şikâyet kutusu 37,78-39,23K / 35,29-37,56D · gün 1337-09-09
//   KUTUDAKİ TOPLAM NOKTA: 2   (Elbistan · Kayseri)
//   kamanın ucu 38,93K/36,46D → en yakın nokta Kayseri 87,6 km,
//     sonra Elbistan 102,6 km, Sivas 102,9 km
//   0,1° ızgarada EN BÜYÜK BOŞLUK: 37,88K/35,89D — en yakın noktaya 98,1 km
// ⇒ `CLAUDE.md §2`: noktası olmayan bölge en yakın peteğe emilir. Kama bir
//   motor kusuru değil, seyrek tohumlu Voronoi'nin DOĞAL şekli.
//
// 🔴 VE BU DOSYA BOŞLUĞU KAPATMIYOR, YALNIZ KÜÇÜLTÜYOR — açıkça yazıyorum:
//   Darende kutunun DOĞU kolundadır. 98 km'lik ASIL boşluk (37,88/35,89 —
//   Uzunyayla / Göksun / Feke-Vahka hattı) AÇIK KALIYOR, çünkü oraya
//   koyacağım noktaların tarihini KAYNAKLA veremedim:
//     goksun     TDV'de madde YOK ("goksun için madde başlıklarında
//                sonuç bulunamadı" — arama sayfası döndü)
//     darende    TDV'de MÜSTAKİL madde YOK (yalnız "Dârendeli Mehmed Paşa"
//                gibi kişi maddeleri) ⇒ tarih AŞAĞIDAKİ maddeden alındı
//     Feke/Vahka Kilikya Ermeni kaynağı gerekiyor; `kilikya-ermeni`
//                CLAUDE.md §4'te KALICI `bulunamadı` olarak kayıtlı
//   ⇒ `bulunamadı` bir SONUÇTUR ve uydurmaktan kat kat değerlidir.
//     Kalan boşluk koordinatöre AYRI bir kalem olarak bildirildi.

window.YERLESIMLER_OK110 = [

// ── DARENDE — TDV `dulkadirogullari` maddesi TARİHİ ADIYLA VERİYOR ───
// "Elbistan ve Maraş merkez olmak üzere doğuda Harput'tan batıda Kırşehir'e,
//  kuzeyde Bozok (Yozgat) ile Sivas'ın güneyinde Gemerek ve Gürün'den
//  Hatay'a bağlı Hassa'ya kadar yayılan bölge"  → Darende bu sahanın içinde
// "Dârende: 1338'de işgal edildi"                → GÜN DEĞİL, YIL biliniyor
// Beylik 1337'de Karaca Bey tarafından kuruldu; Osmanlı'ya katılışı 1522.
//
// ZİNCİR ANKRAJA HİZALANDI — yeni kırılma günü DOĞURULMADI:
//   1335-01-01  Sivas · Kayseri · Malatya üçünde de var (İlhanlı → Eretna)
//   1338-01-01  Malatya'da AYNEN var (eretna → memluk); TDV'nin verdiği yıl
//   1515-06-13  Elbistan'ın Osmanlı günü — Değişmez 2 maddesi Elbistan'da
//               zaten karşılanıyor, YENİ Osmanlı kırılması AÇMIYORUM
// ⚠️ Osmanlı günü olarak beyliğin 1522 sonunu DEĞİL, komşusu Elbistan'ın
//    1515-06-13'ünü aldım: Darende Elbistan'a 46,5 km ve aynı sancak
//    sahasında. Beyliğin resmî ilhakı 1522 ama Osmanlı idaresi bölgeye
//    1515'te girdi; komşusundan AYRI bir gün yazmak `Değişmez 2`ye YENİ
//    bir kırılma ekler ve dayanağı yoktur.
{ ad:"Darende", tur:"sehir", lat:38.550, lon:37.500, g:0, k:4, m:"Maraş",
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},
     {f:"1335-01-01",t:"1338-01-01",d:"eretna"},
     {f:"1338-01-01",t:"1515-06-13",d:"dulkadir"}],
  d:[{f:"1515-06-13",t:"1923-10-29"}], v:[],
  kaynak:"TDV `dulkadirogullari` — \"Dârende: 1338'de işgal edildi\" ve beyliğin sahası \"doğuda Harput'tan batıda Kırşehir'e, kuzeyde Bozok (Yozgat) ile Sivas'ın güneyinde Gemerek ve Gürün'den Hatay'a bağlı Hassa'ya kadar\". ⚠️ TDV'de `darende` diye MÜSTAKİL madde YOKTUR (slug arama sayfasına düşüyor); tarih beyliğin kendi maddesinden alındı. 1281-1338 arası zincir komşu ankrajlardan (Malatya: ilhanli→1335, eretna 1335→1338) türetildi, ayrıca ARAŞTIRILMADI.",
  neden:"0017/H-0001 · Voronoi kaması. Şikâyet kutusunda (37,78-39,23K/35,29-37,56D) yalnız 2 nokta vardı (Elbistan · Kayseri) ve Elbistan'ın peteği 100 km öteye kama gibi uzanıyordu. Darende doğu kolunu bağlıyor. ⚠️ Kutunun 98 km'lik ASIL boşluğu (37,88/35,89) BU NOKTAYLA KAPANMAZ — kaynak bulunamadığı için açık bırakıldı." },

];
