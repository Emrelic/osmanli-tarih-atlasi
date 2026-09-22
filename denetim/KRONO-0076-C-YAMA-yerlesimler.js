// KRONO-0076-C — YAMA · data/yerlesimler.js + data/olaylar_ek6.js (SİSAM)
// Uygulayıcı: `py denetim/KRONO-0076-C-YAMA-uygula.py --uygula`
// 🔴 Uygulamadan sonra `py arac/denetle.py` VE petek koşusu (harita geometrisi
//    değişiyor: Sisam 8 ay daha Osmanlı tâbii kalıyor).
// ⚠️ Bu yama İKİ dosyaya birden dokunur ve AYRILAMAZ: kronoloji maddesi ile
//    yerleşim kırılması AYNI güne taşınır, yoksa Değişmez 2 kırılır.
// 📌 SINIR-BERLIN-0076 aynı olaylara bakıyor — bu bulgu ona yatay yazıldı.

/* ─────────────────────────────────────────────────────────────────────
   BULGU — Sisam'ın elden çıkış günü ATLASIN KENDİ GÜNÜ, kaynağın günü değil
   Ölçüm:
     data/yerlesimler.js (Sisam)  v:[{f:"1832-12-10",t:"1912-03-13",statu:"vassal"}]
                                  s:[… ,{f:"1912-03-13",t:"1923-10-29",d:"yunanistan"}]
     data/olaylar_ek6.js          t:"1912-03-13"  gun:"1912"  kaynak:"yunanistan"
                                  b:"Sisam'ın Osmanlı idaresinden çıkışı"
   ① `gun:` alanı YIL diyor ("1912"), `t:` alanı GÜN iddia ediyor (13 Mart).
      Hassasiyet çelişkisi: gün nereden geldi?
   ② Aynı gün (1912-03-13) veride ZATEN bir başka olayın günüdür:
      "Sırp-Bulgar İttifak Antlaşması — Balkan İttifakı'nın çekirdeği kuruldu".
      Yani 13 Mart Sisam'ın değil, başka bir olayın tarihidir; komşu kayıttan
      devralınmış görünüyor (CLAUDE.md §4: atlas kaydı dayanak OLAMAZ).
   ③ KAYNAK NE DİYOR — TDV `sisam` gövdesi (23 Eylül 2026'da okundu), AYNEN:
      "Balkan savaşları sonunda Sisam adası Yunanistan ile birleşti (11 Kasım 1912)."
      Aynı madde adanın 1834-1913 arasında bir Ortodoks vali ve yerli meclisle
      yönetildiğini de söyler — yani Mart 1912'de idare SONA ERMEMİŞTİ.
      Ve `v:` döneminin BAŞI (1832-12-10) TDV ile birebir tutuyor: aynı maddenin
      10 Aralık 1832 özerklik tarihi. Demek ki kaydın başı kaynaklı, SONU değil.
   Ters yön sınavı (D206 · ORTAK §4 ⑥) — ölçüldü, uydurulmadı:
      eski konumun (1912-03-13) kapsayıp yeninin (1912-11-11) kapsamadığı
      yerleşim kırılma günü: 2 (1912-02-12 ve 1912-03-13)
      bunlardan BAŞKA kronoloji maddesiyle korunmayan: 0
      yeni konumun ±30 gün komşuluğundaki kronoloji maddesi: 11
      ⇒ Değişmez 2 açısından açıkta kalan kırılma YOK.
   Değişmez 1 (sahipsizlik): `v:` sonu ile `s:` başı AYNI güne taşındığı için
      boşluk da örtüşme de doğmaz — zincir bitişik kalır.
─────────────────────────────────────────────────────────────────────── */

// ① data/yerlesimler.js — Sisam satırı, İKİ değişiklik (ikisi de "1912-03-13" → "1912-11-11")
// ESKİ: v:[{f:"1832-12-10",t:"1912-03-13",statu:"vassal"}]
// YENİ: v:[{f:"1832-12-10",t:"1912-11-11",statu:"vassal"}]
//
// ESKİ: {f:"1912-03-13",t:"1923-10-29",d:"yunanistan"}
// YENİ: {f:"1912-11-11",t:"1923-10-29",d:"yunanistan"}

// ② data/olaylar_ek6.js — "Sisam'ın Osmanlı idaresinden çıkışı" kaydı, ÜÇ alan
// ESKİ: t:"1912-03-13"      YENİ: t:"1912-11-11"
// ESKİ: gun:"1912"          YENİ: gun:"11 Kasım 1912"
// ESKİ: kaynak:"yunanistan"
// YENİ: kaynak:"sisam"   ⟵ TDV `sisam`, gövde AYNEN: \"Balkan savaşları sonunda
//                           Sisam adası Yunanistan ile birleşti (11 Kasım 1912)\" · hassasiyet: GÜN

/* ─────────────────────────────────────────────────────────────────────
   YAMA DEĞİL — AÇIK SORU (kaynak bulunamadı, DOKUNULMADI): NİKARYA
   data/yerlesimler.js (Nikarya (İkarya)):
        isg:[{f:"1912-07-17",t:"1923-07-24",d:"yunanistan",kaynak:"oniki-ada"}]
   Yani harita 17 Temmuz 1912'den itibaren adayı YUNAN İŞGALİ gösteriyor.
   Aynı atlasın kronolojisi (data/olaylar_ek6.js, t:"1912-07-17") ise aynı gün
   için "Nikarya'nın bağımsızlık ilanı" diyor ve gövdesinde adanın "kendi
   bayrağı, pulu ve meclisiyle beş ay süren bir 'serbest devlet'" kurduğunu,
   Yunanistan'a KASIM 1912'de katıldığını yazıyor.
   ⇒ Atlasın iki katmanı BİRBİRİYLE çelişiyor: kronoloji 5 ay bağımsız devlet,
     harita aynı günden itibaren Yunan işgali diyor. İkisi aynı anda doğru olamaz.
   ÇÖZÜLEMEDİ: hangisinin doğru olduğu kaynağa sorulamadı —
     TDV'de `ikarya` ve `nikarya` maddesi YOK (site araması 23 Eylül 2026:
     "sonuç yok"), ada TDV `oniki-ada` maddesinde sayılan on iki adanın
     arasında da GEÇMEZ (kayıttaki kaynak:"oniki-ada" bu yüzden şüphelidir).
   ⇒ Veriye DOKUNULMADI. Akademik kaynak bulunmadan düzeltilirse, atlasın
     kendi kaydını kaynak yerine koymuş oluruz.
─────────────────────────────────────────────────────────────────────── */
