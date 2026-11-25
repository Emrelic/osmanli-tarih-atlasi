== notlar.md
Emin olunmadığı için düzeltilmeyenler:
- arayuz "çıkar" -> "निकलता है": bağlam bilinmiyor ("kaldırır" anlamındaysa "हटाएँ").
- Olay paketlerinde Kirman (İran) bazı yerlerde "करमान" (Karaman ile aynı yazım) olabilir; yalnız devlet kayıtları ve OLAYLAR_EK5:1723-10-01 düzeltildi, toplu tarama yapılmadı.
- Terim tutarsızlığı: Osmanlı = "ऑटोमन" / "उस्मानी" karışık; "अक्तूबर" / "अक्टूबर" iki yazım da geçerli; dokunulmadı.
- "के लिए जाने" ('alınması' yanlış çevirisi) tüm olay paketlerinde Grep ile tarandı (से|पर|के|में|तक|की devamlı biçimler); başka devam biçimleri ve aynı kalıbın başka yazımları taranmadı.

== notlar_a.md
Düzeltilmeyen, toplu karar gerektiren tutarlılık notları (hi, 013-042):
- "alınması / ele geçirilmesi" sık sık "X के लिए जाने से" diye çevrilmiş; anlamı bozan örnekler düzeltildi, "के 1475 में लिए जाने के बाद" gibi anlaşılanlar bırakıldı.
- "ने" + geçişsiz fiil hataları aralıklı; yakalananlar düzeltildi.
- "abi-merkez" -> "अग्र-केंद्र" (anlam zayıf; zaten TR iç not, kaynakta temizlenmeli).
- Yazım tutarsızlıkları: रुमेली/रूमेली, बीज़ान्टिन/बीज़ान्तीन, ऑटोमन/उस्मानी (özellikle 1410-06-15, 1393-06-01, 1381-03-28, 1404-03-01), वालीत्व cinsiyeti, देनिज़ली/देनिज़्ली, बे/बेय.
- "अप्लिया" benzeri ad sorunu görülmedi; "साईद-इली", "ग़ोलयाज़ी" (Gölyazı) yazımları kontrol edilebilir.

== notlar_b.md
- "Büyük Selçuklu" bazı maddelerde "बड़े सेल्जुक" (EK5:1086, 1092); yerleşik biçim "महान सेल्जुक" olabilir. Değiştirilmedi.
- "abi-merkez" = "अग्र-केंद्र" tutarlı kullanılıyor; değiştirilmedi.
- Roma rakamlı yüzyıl ve "15. शताब्दी" biçimi düzeltildi; aynı kalıp öteki paketlerde de aranmalı (regex: [0-9XVI]+\. शताब्दी).
- "Osmanlı" özel ad içinde "ऑटोमन" yapılmış (İttihâd-ı Osmânî); öteki özel adlarda da taranmalı.
- Terim karışıklığı: bazı maddelerde "उस्मानी", çoğunda "ऑटोमन" (EK5:1688-06-22, EK6:1821-1829). Zevk/tutarlılık; değiştirilmedi.

== notlar_c.md
073-107 (hi) toplu karar gerektiren, düzeltilmeyenler:
- "हबेश / हबेशिस्तान" (Habeş/Habeşistan) Türkçe biçim; Hintçede yerleşik इथियोपिया/अबीसीनिया. Öteki paketlerde de aynı, tek tek değiştirilmedi.
- "ओजाक" (ocak/ocaklık) Türkçe terim her yerde; dokunulmadı.
- "के लिए जाने/जाना" ve "समर्पित हुआ" kalıbı: anlamı bozanlar düzeltildi; "आत्मसमर्पित हुआ" (093-100) bırakıldı.
- "सराय" (saray) yalnız han/inn anlamına gelecek yerlerde düzeltildi; "एस्की सराय", "तोपकापी सराय" gibi biçimler öteki aralıklarda da taranmalı.
- Terim/yazım tutarsızlığı: अक्तूबर/अक्टूबर, क़राक़ोयुनलू/क़रा-कोयुनलू, सफ़वी/सफ़ावी, जहाँ शाह/जिहान शाह, बयलिक biçimleri.
- 073-087'de düzeltilen alanların dışında "सराय" geçen birkaç alan bağlama göre bırakılmış olabilir; Roma rakamlı "शताब्दी" biçimi 073-092'de görülenlerde düzeltildi.

== notlar_d.md
Düzeltilmeyen, emin olunmayan ya da zevk sınırındaki noktalar (4_olay_108-142)
- Çin adları dalgalı: चेंगदू / छंगदू; ZINCIR dönem kayıtlarında Latin "(Chengdu)" TR parantezinden korunmuş.
- स्वामिहीन / स्वामीहीन iki yazım birlikte kullanılıyor (toplu birleştirme istenirse ZINCIR kayıtları).
- ZINCIR "dönem başlar/sona erer" kayıtlarında yer ve devlet adı yazımları öteki hi kayıtlarından farklı (बेबिलोन/बाबिल, दमिश्क/दिमश्क़, असीरियाई/अश्शूरी, अटैलिड/अत्तालिद, मार्सेल/मार्सेई).
- OLAYLAR_ARKEOLOJI_ZINCIR:-0403-01-01:0: TR "Kambises ayin sonunda" (ayin sonu mu, ayın sonu mu belirsiz); hi "अंत में".
- OLAYLAR_2S0919 Trogir/Herseknovi gibi adlarda küçük yazım farkları (हेरसेग नोवी / हेर्सेकनोवी).
- Herhangi bir betik koşturulmadı; JSONL geçerliliği makineyle doğrulanmadı.

== notlar_e.md
- "metbûluk" için uydurma "अधिपति-ता" sözcüğü kullanılmış (T5_1000B). 143-177 aralığında bulunanlar "अधिराजत्व" yapıldı; öteki aralıklarda da "अधिपति-ता" aranmalı (devlet/arayüz dahil). 1089-03-16 b "सल्जूक़ अधिपत्य" bırakıldı.
- Binlik ayırıcı: bazı çevirilerde Türkçe "15.000" biçimi kalmış; bütün dilde regex taraması önerilir (\d\.\d{3}).
- Yazım tutarsızlıkları (düzeltilmedi): बर्कयारुक़/बरकियारुक, रय/रै (1095-02-26), दमिश्क़/दिमश्क़/दमिश्क, हिस्नकैफ़ा/हसनकैफ़, मलिकशाह/मलिक शाह, अल्पअर्सलान/अल्पअर्स्लान.
- "अबू हुरैरा (अबू हुरैरा)", "ऐन ग़ज़ल (‘ऐन ग़ज़ल)": parantez gereksiz yineleme (TR'de iki farklı yazım).
- ORTACAG_IRAN_TURAN:1177-01-01:0 "छोटे पुत्र याव्लक़": kimin oğlu olduğu TR'de belirsiz, dokunulmadı.

== notlar_g.md
- "X के पास गया" ("X'e geçti") kalibi 213-239 araliginda cok yaygin; Hintcede "के हाथ गया/आया" daha dogal. Toplu degistirilmedi, yalniz anlami bozdugu yerlerde duzeltildi.
- "-ओग़ुल्लारी" (-ogullari) bicimleri devlet adlariyla tutarli oldugu icin birakildi (orn. ग़ानियाओग़ुल्लारी; ayni atlas metninde बनी ग़ानिया da geciyor).
- TR kaynakli olgu supheleri ceviride aynen birakildi (bkz. tr_hatalari_g.md).
