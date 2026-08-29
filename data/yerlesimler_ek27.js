// =====================================================================
// SINIR VE KIYI TAMAMLAMA — Emre'nin parti-0015 ölçümünden çıkan eksikler
// KOORDİNATÖR · 11 Ağustos 2026
//
// 🔴 EMRE'NİN YETKİSİ (parti-0015/H-0004 ve H-0005, birebir):
//   "bu sınır ilçelere ve kasabalara dahi köylere **3. sınıf özelliği verip
//    onlara bölge atfedebilirsin** ve tüm türkiye haritasını bu sınır il
//    ilçe kasaba ve köylerine göre belirleyip tam doğru bir harita ortaya
//    çıkarabilirsin"
//   "sınırın ortasından geçtiği hepsini 3. sınıf ilan edip ona göre sınırı
//    düzgün çizmelisin"
//
// ⇒ Bu dosyanın noktaları `k:3` — `k:4` DEĞİL. Sebebi ÖLÇÜLDÜ:
//      k:4 tavanı 140 km · k:3 tavanı 280 km · k:2 420 · k:1 700
//   Sınır noktaları `k:4` yazılınca komşularına YENİLİYOR ve sınırı
//   tutamıyorlar. Emre'nin verdiği yetki tam bu kusuru kapatıyor.
//
// EKSİK OLDUĞU ÖLÇÜLENLER (1923-10-01 taraması):
//   Artvin YOK · Hopa YOK · Mersin YOK · İskenderun YOK
//   ⇒ Emre: "artvin hopa rize filan bizde imiş gibi görünmüyor sanki"
//   ⇒ Emre: "çukurova ve iskenderun olması lazım, iskenderun körfezi
//            dışarıda kalmış"
//
// ⚠️ İSKENDERUN 1923'te TÜRKİYE DEĞİL — Fransız Suriye mandası (Hatay).
//    Emre'nin kendi uyarısı: "1923'te hatay hariç idi." Nokta ekleniyor
//    ki KÖRFEZİN İKİ YAKASI da temsil edilsin, ama sahibi FRANSA.
//
// ⚠️ KAYNAK: konumlar standart coğrafya ±1-2 km · TEK TEK DOĞRULANMADI.
//    1923 sahipliği: 1921 Kars (doğu) ve 1921 Ankara İtilâfnamesi (güney).
// =====================================================================
// 🔴 ZATEN VAR OLDUGU icin CIKARILANLAR (ad cakismasi
//    nobetcisi yakaladi, VERI-YAPISI.md: ad BENZERSIZ):
//    Silifke
window.YERLESIMLER_EK27 = [

// ───────── DOĞU KARADENİZ · Gürcistan sınırı ─────────
{ ad:"Artvin", tur:"sehir", lat:41.183, lon:41.822, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1921-10-13",d:"rusya"}],
  d:[{f:"1551-01-01",t:"1878-03-03"},{f:"1921-10-13",t:"1923-10-29"}], v:[] },

{ ad:"Hopa", tur:"liman", lat:41.390, lon:41.427, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1921-10-13",d:"rusya"}],
  d:[{f:"1551-01-01",t:"1878-03-03"},{f:"1921-10-13",t:"1923-10-29"}], v:[] },

// Sarp — sınırın Karadeniz'e kavuştuğu nokta (Türkiye yakası)
{ ad:"Sarp", tur:"koy", lat:41.520, lon:41.545, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1921-10-13",d:"rusya"}],
  d:[{f:"1551-01-01",t:"1878-03-03"},{f:"1921-10-13",t:"1923-10-29"}], v:[] },

// ───────── ÇUKUROVA · Akdeniz kıyısı ─────────
{ ad:"Mersin",s:[{f:"1281-01-01",t:"1352-01-01",d:"kilikya-ermeni"},{f:"1352-01-01",t:"1516-08-24",d:"ramazanoglu"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],d:[{f:"1516-08-24",t:"1918-10-30"},{f:"1921-10-20",t:"1923-10-29"}], tur:"liman", lat:36.800, lon:34.633, g:0, k:3, m:"Adana",
  s:[{f:"1281-01-01",t:"1352-01-01",d:"kilikya-ermeni"},{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],
  d:[{f:"1352-01-01",t:"1918-10-30"},{f:"1921-10-20",t:"1923-10-29"}], v:[] },

// ───────── İSKENDERUN KÖRFEZİ · 1923'te FRANSIZ mandası ─────────
// 🔴 HATAY — Emre'nin uyarısı: 1923'te Türkiye DEĞİL. Türkiye'ye katılışı
//    1939. Nokta ekleniyor ki körfezin GÜNEY yakası temsil edilsin ve
//    petek Çukurova'dan sarkmasın.
{ ad:"İskenderun", tur:"liman", lat:36.587, lon:36.173, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1516-08-24",t:"1918-10-30"}], v:[] },

// 🔴 PAYAS BURADAN DUSURULDU (12 Agustos 2026, koordinator).
// Kayit YANLISTI: Fransiz donemini 1923-10-29'a kadar goturuyordu.
// VERI SINIR 2 oturumu BIRINCIL KAYNAKTAN dogruladi — UK Cmd.1556 /
// LNTS Vol.54 pp.178-193, Ankara Itilafnamesi Md.8: sinir
// "immediately south of the locality of Payas" noktasindan basliyor
// => Payas hattin KUZEYINDE, yani TURKIYE tarafinda.
// DUZELTILMIS kayit: data/yerlesimler_ek28.js
// (silinmedi, TASINDI — mukerrer nokta olmasin diye burasi bosaltildi)

];
