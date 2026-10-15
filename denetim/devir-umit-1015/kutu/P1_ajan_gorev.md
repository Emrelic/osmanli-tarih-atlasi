# P1 alt ajan görevi — "Nasıl bilirdiniz?" padişah kartları (kutu 0076/H-0009)

Osmanlı Tarih Atlası (statik site). Emre: "tüm Osmanlı padişahlarının ölüm kronoloji
maddesine nasıl bilirdiniz ve övgü ile yergi şeklinde ek okumalar yapalım." Bugün yalnız
Abdülaziz'in böyle bir kartı var (data/ekokuma_p76b.js, id "abdulaziz-nasil-bilirdiniz" —
ÖRNEK olarak oku). Sen sana verilen padişahlara birer kart TASLAĞI yazacaksın.

## Yasaklar
- Depoya (C:\atlas\...) HİÇBİR ŞEY YAZMA. Yalnız okursun. Çıktın scratch'teki tek dosya.
- git, py arac/*, denetle, paketle KOŞTURMA. Ağır komut yok.
- Haiku kullanma, alt ajan açma.

## Kaynak kuralı (katı)
- TDV İslâm Ansiklopedisi birincil ve çoğu kart için TEK kaynak. Madde gövdesini oku:
  `py C:\Users\user\AppData\Local\Temp\claude\C--atlas\81b30657-a92f-49c7-b3ae-b5ecd2d82813\scratchpad\tasnif\P1_tdv.py <slug> "<regex>" <bağlam>`
  (slug sayfayı indirir/önbelleğe alır, regex eşleşmelerini bağlamla gösterir; `LEN` uzunluğu
  verir; regex vermeden yalnız indirir. Tam metin: `P1_tdv\<slug>.txt` dosyasını Read ile oku —
  değerlendirme bölümü çoğu maddede SONDA, "şahsiyeti / karakter / tasvir / kaynaklar ...
  olarak / tarihçiler / eleştir / övgü / methed / yer(er)" kalıpları etrafındadır.)
  Arama: `P1_tdv.py "?kelime"` slug adayı listeler. Padişah slug'ları çoğunlukla: osman-i,
  orhan, murad-i, bayezid-i, mehmed-i, murad-ii, mehmed-ii, bayezid-ii, selim-i, suleyman-i,
  selim-ii, murad-iii, mehmed-iii, ahmed-i, mustafa-i, osman-ii, murad-iv, ibrahim (doğrula),
  mehmed-iv, suleyman-ii, ahmed-ii, mustafa-ii, ahmed-iii, mahmud-i--osmanli (mahmud-i ölü),
  osman-iii, mustafa-iii, abdulhamid-i, selim-iii, mustafa-iv, mahmud-ii, abdulmecid,
  murad-v, abdulhamid-ii, mehmed-v, mehmed-vi. "YONLENDI" görürsen yanlış madde olabilir — kontrol et.
- YALNIZ KAYNAKTA YAZANI AKTAR. Uydurma alıntı yok. Doğrudan alıntı 15 kelimenin altında,
  tırnakta, kime ait olduğu belli (ör. "TDV'nin aktardığına göre Naîmâ ..."). Bir çağdaşın
  ya da tarihçinin sözünü ancak TDV metni o kişiye atfediyorsa o kişiye atfet.
- Metni KOPYALAMA, özetle/yeniden yaz (telif). Rakamlar, tarihler yalnız kaynaktan.
- Tarih uydurma. TDV'de olmayan bir bilgiyi genel bilgiden ekleme — ekleyeceksen karta
  koyma. TDV'nin bir değerlendirmesi yoksa (erken dönem) bunu açıkça söyle: "kaynaklar
  kişisel değerlendirme aktarmaz" vb.
- Vikipedi, blog, popüler site YASAK.

## Kart şeması (JS nesnesi, aynen bu alanlar)
```
{ id:"nasil-<padisahid>",
  baslik:"<Ad>'i nasıl bilirdiniz? <kısa çatışma sorusu>",
  tur:"tartisma",
  kisa:"<1-2 cümle; övgü ile yergi arasındaki gerilim>",
  metin:"■ ÖVGÜ\n...\n\n■ YERGİ\n...\n\n■ ÇAĞDAŞLARI VE TARİHÇİLER\n...\n\n■ NASIL BİLİRDİNİZ\n...",
  kesinlik:"kesin" | "tartismali",
  olay:["<t>|<başlıkta geçen alt dizgi>"],
  kaynak:"TDV: <slug> (<yazar(lar)>) · ...",
  ic_not:"<neyi nereden aldın, nerede TDV ile atlas ayrışıyor, neyi bulamadın>",
  gorsel:null, gorsel_kaynak:"aranmadı" },
```
- metin: 1800-3200 karakter, Türkçe, lise öğrencisinin okuyacağı sade dil. ÖVGÜ ve YERGİ
  bölümleri dengeli; "ÇAĞDAŞLARI VE TARİHÇİLER" bölümü TDV'nin andığı çağdaş kaynakların
  (kronikler, elçi raporları, seyyahlar) ve modern tarihçilerin hükmü; "NASIL BİLİRDİNİZ"
  bölümü TDV yazarının kendi genel değerlendirmesinin özeti (yazar adıyla). Kendi hükmünü
  ekleme; TDV'nin vardığı sonucu aktar. Bölüm başlıkları aynen yukarıdaki dört başlık.
- Kişiye ait ayrı bilinen kartlar var (data/ekokuma_padisah.js, ekokuma_padisah2.js,
  data/padisahlar.js'teki `ovgu/yergi/tartisma/tarihciler` kısa alanları). Onları oku,
  ÇELİŞME; ama aynı cümleleri tekrar etme — kart daha derin olmalı.
- olay: padişahın VEFAT kronoloji maddesine bağla. Verilen listede vefat maddesi olmayan
  padişah için (I. Mustafa, IV. Mehmed, II. Ahmed, II. Mustafa, III. Ahmed, IV. Mustafa,
  Abdülaziz, V. Murad) vefat, yoksa hal'/tahttan indirilme maddesini data/olaylar*.js ve
  data/kronoloji_sinir*.js içinde grep ile bul. Bağ biçimi "t|alt dizgi": t maddenin `t:`
  alanıyla BİREBİR, alt dizgi maddenin `b:` alanında (harf duyarsız) geçmeli. ic_not'a
  hangi maddeye neden bağladığını yaz. II. Murad iki saltanatlı, II. Mehmed iki saltanatlı,
  I. Mustafa iki saltanatlı: TEK kart yaz (id padisah id'si).
- kesinlik: TDV kendi içinde ya da kaynaklar arasında hüküm tartışmalıysa "tartismali".

## Çıktı
Dosyan: `C:\Users\user\AppData\Local\Temp\claude\C--atlas\81b30657-a92f-49c7-b3ae-b5ecd2d82813\scratchpad\tasnif\P1_nb_<HARF>.js`
İçeriği yalnız kart nesneleri, aralarında virgül, başında `[` sonunda `]` (geçerli JS dizisi
— node ile `eval` edilecek). Her kartı yazar yazmaz dosyayı güncelle (iş kaybolmasın).
Bitirme sınırı: **06:40** (makine saati, `date`). Saat 06:40'ta bitmeyen padişahları bırak.
Son raporun: yazılan kart id'leri, yazılamayanlar ve sebebi, okunan TDV slug'ları + yazarları,
TDV ile atlas arasında fark ettiğin çelişkiler (gün/olgu).
