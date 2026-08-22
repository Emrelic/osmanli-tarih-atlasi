# BALKAN DEVLETLERİ KRONOLOJİ — İLERLEME

Koordinatör: OSMANGAZİ. Dosyam: `data/kronoloji_balkan.js` →
`window.KRONOLOJI_BALKAN` (177 madde). Kabul kapısı temiz:
`node --check` → 0, `py arac/denetle_kronoloji.py` → "✓ temiz"
(41 dosya · 4482 madde toplamda, `kronoloji_balkan.js` satırı tek başına
sıfır ihlal).

Yöntem: dört bağımsız araştırma kolu (Karadağ+Zeta · Bulgar ailesi ·
Bosna Krallığı · Yunanistan), her biri TDV İslâm Ansiklopedisi'ni HTTP
koduyla ve gövde okuyarak doğruladı, yetersiz kaldığı yerde standart
akademik kaynağa (Fine, Jelavich, Crampton, Malcolm, Clogg vb.) açıkça
atıfla geçti. Ben dördünü tek dosyada birleştirdim, `yer_id` alanlarını
`data/yerlesimler*.js`'te tek tek grep ile doğruladım, şema eksiklerini
(11 maddede unutulan `kapsam_genis:true`) düzelttim.

## Teslim raporu — sekiz kalem

**① madde sayısı · dönem dağılımı**
177 madde, beş süreklilik:
- Zeta Prensliği (1356-1514, 158 yıl): 15 madde
- Karadağ/Montenegro (1516-1918, 402 yıl — kronoloji 1528'den başlıyor,
  bkz. ⑧): 37 madde
- Bulgar Çarlığı (1185-1396, 211 yıl): 13 madde
- 1396-1878 boşluğu (482 yıl, kasıtlı — ayrı Bulgar devleti YOK): 13 madde
- Bulgaristan Prensliği (1878-1908, 30 yıl, Osmanlı'ya tâbi): 9 madde
- Bulgaristan Krallığı (1908-1923, 15 yıl): 16 madde
- Bosna Krallığı (1377-1463, 86 yıl): 21 madde
- Yunanistan Krallığı (1821-1923, 102 yıl): 54 madde

**② konu dağılımı** (`tur` alanı, kaba dökümü)
savas 36 · siyasi 36 · antlasma 22 · hukumdar 14 · toprak-kayip/kazanc 16
· bolunme 7 · kurulus 6 · isyan 6 · din 5 · kultur 5 · idari 5 · sosyal 4
· son 4 · bilim 2 · iktisadi 2 · diplomasi 2 · ittifak 2 · kayip 2 ·
baskent 1.
⚠️ Dört kolun dördü de aynı itirafı yaptı: hedeflenen §2 karışımından
(kaba %40 askerî-siyasî) belirgin sapma var, gerçek oran ~%65-70. Sebep
zorlama değil kaynak: TDV'nin devlet maddeleri neredeyse tamamen
siyasî-askerî-diplomatik anlatı; bilim/kültür/iktisat maddelerinin
büyük kısmı TDV-dışı akademik/resmî kaynaktan geldi (Crnojević matbaası,
Atina Üniversitesi, Korint Kanalı, Bosna Kilisesi, Tırnovo Anayasası
vb.) çünkü TDV bu tanecikte konuşmuyordu (`CLAUDE.md §4` taneciklik
kuralı). Dolgu YAZILMADI.

**③ onem ve dunya dağılımı**
onem: 5→52 · 4→62 · 3→44 · 2→19 (1 hiç kullanılmadı)
dunya: 5→6 · 4→24 · 3→34 · 2→74 · 1→39

**④ kapsam**
ic 74 · dis 103

**⑤ yer_id**
dolu (gerçek yerlesimler.js/yerlesimler_ek*.js kaydıyla BİREBİR
doğrulandı, tek tek grep edildi) 81 · `kapsam_genis:true` (devlet/bölge
çapında olay) 81 · boş (yer gerçekten bilinmiyor, §3.1 istisna ③) 15.
"Mora" tuzağı doğrulandı ve kaçınıldı: `yerlesimler_ek7.js`'teki tek
"Mora" kaydı İsveç'te bir yerleşim, Mora Yarımadası'yla ilgisi yok —
Mora'yla ilgili maddeler (İsyan, Tripoliçe, Kapodistrias suikastı)
`yer_id:""` bırakıldı. Nafplion, Tripoliçe, Bobovac, Ključ, Nikšić, Bar,
Ülgün, Grahova, Vučji Do gibi yerler `yerlesimler*.js`'te hiç yok —
uydurulmadı.

**⑥ kaynak dağılımı**
TDV doğrudan alıntı (HTTP koduyla + gövde okunarak) ~96 madde · proje
içi çapraz doğrulanmış veri (devletler.js/yerlesimler.js/savaslar.js/
diğer kronoloji_*.js dosyaları) ~31 madde · tamamen standart akademik
kaynağa dayanan (TDV kapsamıyor) ~48 madde · Vikipedi HİÇBİR maddede
tek dayanak olarak kullanılmadı (yalnız "hangi maddeye bakayım" ve
çapraz doğrulama amaçlı). Kullanılan akademik kaynaklar: J.V.A. Fine,
*The Late Medieval Balkans* (University of Michigan Press, 1994) ·
Barbara Jelavich, *History of the Balkans* (Cambridge UP, 1983) ·
R.J. Crampton, *A Concise History of Bulgaria* (Cambridge UP, 2005) ·
Noel Malcolm, *A Concise History of Bosnia* (Cambridge UP) · Richard
Clogg, *A Concise History of Greece* (Cambridge UP) · resmî kurum
kaynakları (Atina Üniversitesi uoa.gr, UNESCO Dünya Mirası Merkezi,
T.C. Dışişleri Bakanlığı, Karadağ Millî Kütüphanesi).

**⑦ NEYİ BULAMADIN**
- Bileća/Vučji Do/Kruse gibi bazı savaş alanlarının, Bobovac/Ključ
  kuşatmasının kesin günleri — ikincil kaynaklarda var, akademik
  birincil doğrulama yapılamadı, gün iddiası konmadı.
- Sırp hükümdar/isyan liderleri deseninin bu dosyadaki eşi: Karadağ'da
  Crnojević hanedanının bazı iç tarihleri (Đurađ'ın tahta çıkışı,
  İskender Bey'in ölüm günü), Bosna'da Đakovo Antlaşması ve Kraliçe
  Jelena'nın seçilmesi TDV'de yok, akademik kaynağa dayanıldı.
- 1594 tipi münferit olaylar aranmadı (kapsam dışıydı); dört kol da
  kendi kapsamına sadık kaldı.

**⑧ AÇIKÇA BİLDİRİLMESİ GEREKEN ÜÇ BULGU**
1. **Zeta→Karadağ boşluğu (1514-1516) ÇÖZÜLDÜ, ama `devletler.js`
   düzeltilmeli.** TDV `karadag` maddesi kesintisiz bir devamlılık
   anlatıyor (Zeta 1514'te "Karadağ Sancağı" adıyla İskender Bey'in
   kişisel sancakbeyliği oluyor); `devletler.js`'teki "1516'da
   piskopos-prenslik olarak örgütlendi" iddiasının NE TDV'DE NE
   AKADEMİK KAYNAKTA karşılığı bulundu. Gerçek dönüm noktası 1528
   (İskender Bey'in ölümü, sancağın ayrı bey atanmadan özerk birime
   dönüşmesi). Bu dosyada Karadağ kronolojisi 1528'den başlıyor,
   uydurma bir "1516 kuruluş" maddesi YAZILMADI.
   ⇒ **ÖNERİ**: `devletler.js` `karadag` künyesinin `f:` tarihi
   (şu an 1516-01-01) 1514 (Zeta'nın `t:`siyle boşluksuz) ya da 1528'e
   (belgelenebilir dönüm noktası) çekilsin. Bu dosyanın kapsamı dışı,
   kararı Oturum 0'a bırakıyorum.
2. **`dunya` çapraz kontrolünde İKİ ÇELİŞKİ bulundu, benim
   eklediğim DEĞİL** — `py arac/denetle_kronoloji.py` bunlardan
   birini otomatik yakalıyor:
   ```
   Niğbolu (1396-09-25)   kronoloji_bizans.js dunya:4 ↔ kronoloji_macaristan.js dunya:3
                          → bu dosyada bizans.js'in değeri (4) kullanıldı
   Navarin (1827-10-20)   kronoloji_ingiltere.js/misir.js dunya:4 ↔ kronoloji_fransa.js dunya:3
                          → bu dosyada çoğunluk değeri (4) kullanıldı
                          → denetle_kronoloji.py bunu "1 İHLAL" olarak ötüyor
   ```
   İkisinde de düzeltme YAPILMADI (kronoloji_fransa.js/macaristan.js
   benim dosyam değil); kararı Oturum 0'a bırakıyorum.
3. **1897 Osmanlı-Yunan Savaşı başlangıç günü çelişkisi**:
   `devletler.js`'teki embedded kronoloji 1897-04-18 diyor,
   `data/olaylar_ek5.js` 1897-04-17 diyor. Bu dosyada olaylar_ek5.js'in
   tarihi kullanıldı (TDV `yunanistan` maddesiyle uyumlu). Aynı şekilde
   Podgorica'nın fiilî fetih tarihi (1877-09, TDV) ile atlas kaydındaki
   diplomatik tanıma tarihi (1878-07-13, Berlin) arasında on aylık fark
   var — Değişmez ihlali değil, ama not edilir.

## Bekletmeden bildirilen aksaklıklar (tahtaya M-1032 sonrası)
1. Açılış: şartname okundu, `KRONOLOJI-SARTNAME.md` baştan sona
   uygulandı, nöbetçi kuruldu.
2. Dört araştırma ajanı zaman zaman sistem sınıflandırıcısı geçici
   doygunluğu yüzünden başlatılamadı; tekrar denenerek dördü de
   tamamlandı (biri bağlantı kopması sonrası `SendMessage` ile devam
   ettirildi).
3. Yukarıdaki ⑧ maddesindeki üç bulgu BEKLETİLMEDEN bu rapora
   yazıldı — hiçbiri benim kapsamımda düzeltilecek dosyalarda değil.

Bekçi kurulu (Monitor, persistent, `--ara 45`), dinlenen ad: "BALKAN
DEVLETLERİ KRONOLOJİ".
