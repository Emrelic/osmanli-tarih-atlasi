# Kronoloji maddesi — ÜÇ SKALA rubriği (v2, 10 Kasım 2026)

Girdi: JSON; her madde: i (kimlik), t (tarih), b (başlık), e (etiketler), kap (ic/dis), taraflar (devlet kimlikleri),
bolgeler (taraf devletlerin bölge anahtarları), yer, d (açıklama başı).

Her madde için ÜÇ puan (1-5) ver. Yalnız başlık/açıklamaya ve tarihe dayan.

## onem — kendi devleti/bağlamı için ağırlık
5 çağ açan/kapatan (devlet kuruluşu/yıkılışı, başkent fethi, rejim değişimi) · 4 büyük savaş/antlaşma/reform/hükümdar
değişimi · 3 belirgin ama sınırlı (sıradan savaş, vezir azli, yerel fetih) · 2 küçük/yerel olay · 1 ayrıntı/anekdot.

## bolge_onem — ilgili devletler VE bölgedeki komşu/yakın devletler için ağırlık
"İlgili devletler" = maddenin tarafları (taraflar). "Bölge" = bu devletlerin bölgesi ve onlarla sınırdaş ya da etkileşimli
komşu/yakın devletler (bolgeler alanı bir ipucudur, sınır değil). Soru: *bu olay, o çevredeki devletlerin tarihini ne kadar değiştirir?*
5 bölgenin siyasi haritasını/güç dengesini yeniden çizer (bölgesel imparatorluğun kuruluşu/yıkılışı, bölge çapında savaşın sonucu) ·
4 birden çok komşu devleti doğrudan etkiler (komşu toprağın el değiştirmesi, koalisyon savaşı, hanedan değişimi) ·
3 en az bir komşuyu belirgin etkiler, dengeyi değiştirmez · 2 yalnız taraf devletlerde kalır, komşular fark etmez ·
1 tek yerel olay, komşuya etkisi yok.
Örnek: Mohaç (1526) → onem 5 (Macaristan), bolge_onem 5 (Orta Avrupa dengesi: Habsburg, Polonya, Osmanlı), dunya 3.
Macar iç bir saray olayı → onem 3, bolge_onem 2, dunya 1.

## dunya — bütün dünya için ağırlık
5 dünya düzenini değiştirir (Fransız Devrimi, Birinci Dünya Savaşı, Moğol istilası) · 4 birden çok kıtayı/bölgeyi etkiler ·
3 bir kıtada bilinen/etkili · 2 yalnız bir ülke/bölge için önemli · 1 yerel. 4-5 NADİRDİR (~%5).

## Kurallar
- Mantık: dunya ≥ 4 ise bolge_onem ≥ 4. bolge_onem, onem'den küçük olabilir ama dunya bolge_onem'i AŞMAZ (dünyayı etkileyen olay
  bölgesini de etkiler).
- Emin değilsen o alanın güveni "d": g = onem,bolge_onem,dunya güvenleri sırayla y (yüksek) / o (orta) / d (düşük).

## Çıktı
İstenen yola tek JSON dizisi yaz; eleman: {"i":123,"onem":3,"bolge_onem":2,"dunya":1,"g":"yoy"}. Madde sayısı = girdi sayısı.
Başka açıklama yazma. Maddede hiçbir şeyi değiştirme.
