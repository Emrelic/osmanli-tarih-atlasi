# DOCX TARAMA — kök dizindeki 18 hata dosyası ile ClaudEmre kutusunun karşılaştırılması

**Oturum:** Sonnet Oturumu 2 (DOCX TARAMA) · **Tarih:** 2026-08-10
**Yazma yetkim:** yalnız bu dosya. Veriye, koda dokunmadım.

---

## ① Yöntem

1. `hatalar 1..18` (+ büyük/küçük harf varyasyonları) — 18 dosya, `python-docx` ile
   paragraf metni çıkarıldı (tablo yok, hepsi düz metin + gömülü ekran görüntüsü).
2. `ClaudEmre/kutu/giden/*/PARTI.json` + `CEVAP.json` — **13 parti klasörü**, 128 madde.
   🔴 **8 tanesi bu projeye ait DEĞİL** (`parti-kasa-0008/0009/0010`, 176 KB'a varan SUT/eczane
   ilaç listeleri — başka bir proje, ortak kutuya karışmış). Bunlar hariç tutuldu.
   **Atlas'a ait gerçek kutu evreni: 120 madde.**
   Hüküm dağılımı: `sirada` 51 · `cozuldu` 38 · `olculecek` 20 · `zaten-dogru` 8 · `tekrar` 3.
   (`KUTU-ACIK-MADDELER.md`'deki "71 açık" = `sirada`(51)+`olculecek`(20) ile birebir uyuşuyor —
   taban doğrulandı.)
3. Her docx paragrafı 120 kutu maddesiyle **TF-IDF ağırlıklı benzerlik** ile ön elendi
   (jenerik kelimeler — "harita", "hata mı", "gösterilmiyor", "teyid edelim" — ağırlıksız
   bırakıldı ki her ikisi de içerdiği için sahte eşleşme üretmesinler), sonra **elle
   okunarak doğrulandı.** Otomatik skor tek başına güvenilir değildi (ör. "Solnok" sorusu
   skorca "Sinj Kalesi" maddesine benzetildi ama ikisi apayrı yer — elle elendi).
4. Docx dosyalarının tarihleri (29 Tem – 1 Ağu) kutu partilerinin damgalarından
   (2 Ağu'dan itibaren) **önce.** Bu, `parti-0002..0007`'nin büyük kısmının bu docx'lerin
   **deşifre edilmiş hâli** olduğunu açıklıyor — çoğu neredeyse birebir aynı cümle.
   `parti-emrelic-0008` (TÜMÜ BÜYÜK HARF, 1281/1300'ler beylik sorularıyla) bu 18 docx'in
   HİÇBİRİNDE YOK — muhtemelen ayrı, doğrudan ekran görüntüsünden girilmiş bir tur.

⚠️ **Dürüstlük notu:** 18 dosyada ~285 anlamlı paragraf var, bir kısmı birden fazla soru
taşıyor (tek paragrafta 2-3 ayrı şikâyet). Ben bunları kendi doğal madde sayımıyla
listeledim (aşağıdaki C bölümünde ~250 tekil madde). **Görsellerin dosya adı yok** —
docx içindeki resimler Word'ün kendi `image1.png` tarzı iç adlarını taşıyor, madde
numarasıyla eşleşmiyor (docx metne göre "1)", "2)" gibi kendi numaralarını kullanıyor
ama görseller o numaralara XML düzeyinde bağlı değil). **Bu yüzden "görsel adı"
sütununu doldurmadım — bulunamadı**, uydurmadım. Gerekirse hangi docx + kaçıncı resim
olduğu (resim SIRASI) verilebilir.

---

## ② SAYIYLA SONUÇ

```
18 docx → 285 anlamlı paragraf (kendi madde sayımımla ~250 tekil şikâyet/soru)

ZATEN İŞLENMİŞ (kutuda karşılığı var, hükmü verilmiş — cozuldu/zaten-dogru/tekrar): 26
AÇIK           (kutuda var, hükmü sirada/olculecek — sırada bekliyor):              14
🔴 HİÇ GÖRÜLMEMİŞ (kutuda hiç karşılığı yok):                                      ~210
```

**En çarpıcı bulgu:** `hatalar 11 .docx` (69 paragraf, 62 tekil madde — 19. yüzyıl
Balkan/Mısır/1.Dünya Savaşı dönemi) ve `hatalar 15 .docx` (35 madde — 1526-1639 Macaristan/
Kafkasya dönemi) **baştan sona kutuya hiç girmemiş.** İki dosya tek başına ~97 madde,
yani HİÇ GÖRÜLMEMİŞ kovasının neredeyse yarısı.

**İkinci çarpıcı bulgu — tekrar eden ama hiç kutuya yazılmamış GENEL kurallar:**
- *"Küçük bir yerleşim bir olayla anılıp haritada göründükten sonra, önemi geçince
  etiketi kalksın"* — 6 ayrı docx'te (1, 3, 11, 12, 13, 17) ayrı ayrı tekrarlanmış,
  **hiçbiri kutuya işlenmemiş.**
- *"Anlaşmalarla kaybedilen/kazanılan topraklar taralı (çizgili) gösterilsin, genel
  kural olsun"* — 4 ayrı docx'te (8, 9, 10, 15) tekrarlanmış, kutuda yok.
- *"Askerî harekâtlar/isyanlar ok ve ateş emojisiyle gösterilsin"* — 5+ docx'te
  tekrarlanmış, kutuda yok.

---

## ③ ZATEN İŞLENMİŞ (26) — kutuda hükmü verilmiş

| Docx kaynağı | Emre'nin sorusu (özet) | Kutu maddesi | Hüküm |
|---|---|---|---|
| hatalar3 | Safevi İran küçük toprak, Van civarı | parti-0005 H-0005 + **CLAUDE.md §3.5'te doğrudan alıntılanmış**, hayalet-devlet dersinin kaynağı | cozuldu |
| hatalar3 | Ekran gizlenebilir gizle/aç butonu | parti-0002 H-0006 | cozuldu |
| hatalar12/17/18 | Karesi ilhakında Geliboluya petek deniz aşırı geçiş | parti-emrelic-0008 H-0004 | cozuldu |
| hatalar12/18 | Gümülcine fethi tek noktadan birleşiyor, koridor kopuk | parti-0002 H-0018 | cozuldu |
| hatalar12/18 | Hamid ili/Isparta satın alınışı enklav | parti-0002 H-0022 | cozuldu |
| hatalar12 | Genel kural: karadan genişleme bağlantısı olmalı, uçakla gidilemez | **CLAUDE.md §11'e doğrudan işlendi** ("hatalar 12 md.11" diye alıntılı), `arac/denetle_bitisiklik.py` bunun için yazıldı | cozuldu (proje kuralı oldu) |
| hatalar13 | Karaman ilk ilhakı — toprakların hepsi mi katılıyor | parti-0003 H-0020 | cozuldu |
| hatalar13 | Germiyan vasiyetle ilhak — geri planda iz + bu maddede kalkması | parti-0003 H-0011 | zaten-dogru |
| hatalar14 | Kili/Akkerman fethi — Boğdan-Akkerman arası boşluk/enklav | parti-0004 H-0002 | cozuldu |
| hatalar17 | Kırımı yarıya bölen cetvel çizgisi | parti-0003 H-0022 | tekrar |
| hatalar17 | Gemlik/Armutlu fethi — küçük enklav, aradaki toprak | parti-0002 H-0001 | cozuldu |
| hatalar17 | "Cetvelle çizilmiş sınırlardan ne zaman kurtulacağız" | parti-0003 H-0022 (aynı) | tekrar |
| hatalar17 | İki ayrı kırmızı renk / garip üçgen görünüm sebebi | parti-0005 H-0007 | cozuldu |
| hatalar17 | Karadeniz köşede soluk kırmızı ok + yuvarlak hüzme | parti-0005 H-0007 (aynı tema) | cozuldu |
| hatalar17 | 1326'da iki ayrı kırmızı | parti-0003 H-0004 | zaten-dogru |
| hatalar17 | 1331 koyu yapı örneği | parti-0005 H-0007 (aynı tema, örnek eki) | cozuldu |
| hatalar17 | Karesi ilhakı Avrupa'ya sarkan küçük toprak / kıymık gösterim | parti-0002 H-0019 + H-0020 | cozuldu |
| hatalar17 | Süleyman Paşa Malkara/İpsala/Keşan/Tekirdağ — yıldız/üçgen köşeli yapı | parti-0005 H-0007 (aynı tema) | cozuldu |
| hatalar18 | Filibe güneybatısı kıymık şeklinde sivri alan | parti-0002 H-0019 | cozuldu |

*(Bazı kutu maddeleri birden fazla docx satırına karşılık geliyor — aynı şikâyet
farklı dosyalarda tekrar edilmiş; tabloda tekrarları ayrı satır göstermedim, docx
kaynağı sütununda birleştirdim.)*

---

## ④ AÇIK (14) — kutuda var, hükmü `sirada`/`olculecek`, henüz uygulanmamış

| Docx kaynağı | Emre'nin sorusu (özet) | Kutu maddesi | Hüküm |
|---|---|---|---|
| hatalar1, hatalar13 (×2) | Düzmece Mustafa ayaklanmasında Aydınoğulları çıkmış görünüyor | parti-0003 H-0010 | olculecek |
| hatalar2, hatalar14 | Sapienza (1499) — Namık Kemal'in bu maddeyle ne alakası var | parti-0004 H-0004 | sirada |
| hatalar10 (×3: kırım pembe/kırmızı yarı yarıya, K.Kaynarca sonrası, kuzey bölge sınırları) | Kırım cetvelle bölünmüş, yarısı kırmızı yarısı pembe | parti-0003 H-0015 | sirada |
| hatalar10 | Kırım-Azak arası kopukluk, Azak ötesi de işgal edildi mi | parti-0007 H-0008 | olculecek |
| hatalar13 | Timur Bağdat'ı ele geçiriyor, haritada gösterimi yok | parti-0002 H-0025 | sirada |
| hatalar13 | Fetret devri haritasında gariplikler (Çandarlı Halil Paşa alakasızlığı) | parti-0004 H-0001 | olculecek |
| hatalar13 | Kırım toprakları katılması — yarısı kırmızı yarısı pembe | parti-0003 H-0015 (aynı) | sirada |
| hatalar17 | Çimpe'ye çıkış + Saroz körfezi kuzeyine kırmızı bulaşması | parti-0002 H-0014 | olculecek |
| hatalar18 | 1354 Ankara alınırken başka yerler de alındıysa belirtilmeli | parti-0002 H-0015 | sirada |

---

## ⑤ 🔴 HİÇ GÖRÜLMEMİŞ — kutuda karşılığı yok (asıl hazine)

Aşağıda her madde: **Emre'nin cümlesi (kısaltılmadan/orijinal yazımıyla) + hangi docx.**
Görsel adı yok (yöntem notuna bkz.) — dosyada resim VARSA parantezde resim sayısı belirtildi.

### hatalar 1 .docx (9 madde — 7 görsel dosyada mevcut)
1. Avlonya berat kalesinin fethi haritada yerleşim yerleri gösterilmeli küçük puntolarla 1417
2. 1423 Tunahan Ayn'ın Hexamillion surunu yıkması maddesinde bir ok ile seferi gösterebiliriz
3. Selanik Venediğe bırakılmış ufak bir renk değişikliği var fark bile edilmiyor — diğer devletlerin renkleri daha canlı/görünür olmalı (genel öneri)
4. Varna savaşında haçlı ordusunun izlediği güzergah oklu çizgi ile gösterilebilir
5. İstanbulun fethi sonrasında Erdek/Kapıdağ yarımadası da kırmızıya boyanıyor — İstanbul'un fethiyle alakası olmamalı
6. Çandarlı Halil Paşa'nın azli/idamı hem haziran hem temmuz 1453'te iki madde olarak görünüyor (mükerrer)
7. Midilli fethi ile karşı Anadolu kıyısında (Ayvalık, Altınoluk, Edremit civarı) kırmızıya boyanma — "bir ada bölgesi karşı kıyıya ulaşamaz, ada ile sınırlı olmalı" (petek/deniz aşırı kuralının somut örneği)
8. Eğriboz fethi sonunda Eğriboz'un kuzeyi fethedilmemiş boş görünüyor — hata mı, orada kale mi var
9. Zakintos Venediğe haraçla bırakılınca karşı kıyıdaki toprak da boş renge düşüyor — "adaların bölgesi adaların toprağı ile sınırlıdır"

### hatalar 2.docx (6 madde — 6 görsel)
1. Taman yarımadasının alınışı maddesinde (1482) haritada hiçbir değişiklik olmuyor
2. Osmanlı-Memlük savaşı maddesinde oklarla ordu aksiyonu gösterilebilir
3. Doğu Anadolu (Diyarbakır/Urfa/Mardin) katılmasından sonra Elazığ/Malatya/Adıyaman civarı sonradan mı katıldı, harita görünümü doğru mu
4. 1516 Zebid'in alınması haritada görülmüyor, hiç aksiyon yok
5. Mısır fethi/Ridaniye sonrası Sina yarımadası ve Kızıldeniz kıyısında boşluklar var — hata mı gerçeklik mi

### hatalar 3 .docx (7 madde — 10 görsel)
1. Dimbos, Kulacahisar, Karacahisar, Adranos'ta görülen simgeler yapışıp gitmiyor — madde geçince kaldırılmalı (genel kural önerisi)
2. Barbaros'un Venedik'in yönettiği adaları alması — iki harita arasındaki farklar
3. Didim civarı alınmış görünüyor, doğru mu
4. Budin ilhakı — tüm Macaristan alınamadı mı, yarısından çoğu duruyor
5. Tebriz'in alınmasında Tebriz bölgesi enklav — aradaki bölgeler alınmadı mı
6. Van'ın alınması ile Tebriz haritadan çıkarılmış — tarihi olarak doğru mu
7. Katif fethi — işaretleme abartılı mı, aradaki koridor da boyanmalı mıydı

### hatalar 4 .docx (10 madde — 7 görsel)
1. İstanbul rasathanesi kuruldu maddesinde Fizan/Murzuk bölgesi alınması gösteriliyor — ayrı madde gerekir
2. Rasathane kuruluşu ocak 1577 ve temmuz 1577 diye iki madde (mükerrer)
3. 1578 Fas'ın Osmanlı himayesine girişi — savaş yeri/ok gösterimi
4. Çıldır zaferi — Çerkezya/Soçi/Krasnodar çevresi Osmanlı idaresine mi geçti
5. Şirvan'ın fethi — Azerbaycan içinde enklav bölge, aradakiler ele geçirilmedi mi
6. Sokullu Mehmet Paşa suikastı iki madde, bire indirilmeli
7. Demirkapı/Derbend ele geçirilmesi (1583) — Hazar'ın öte yakası da kırmızı, hata
8. Bakü'nün alınışı — Hazar'ın karşı tarafı da kırmızı (1583), hata
9. 1585 büyük tağşiş akçe krizi — Van'ın doğusunda ele geçirilen bölge, ayrı madde gerekir
10. Ferhatpaşa antlaşması — Osmanlı'ya/İran'a kalan yerler ayrı çıkarılmalı; Bağdat'a giren İran girintisi doğru mu; Kirmanşah/Nihavend/Bürücerd/Senendec/Loristan Osmanlı'da kalmalı mıydı

### hatalar 5.docx (9 madde — 6 görsel)
1. 1590'lar — Antalya/İçel/Çukurova'da boşluklar, kıyıya oturmama sorunu (Tuz Gölü'nde de var)
2. Karayazıcı Abdülhalim isyanı (1596) nerede başlamış, haritada aksiyon yok
3. Mükerrer maddeleri bul, hatalı olanları temizle (genel talep)
4. Sultanahmet Camii açıldı diye iki madde, ayrı tarihlerde
5. I. Mustafa'nın cülusu iki adet (mükerrer)
6. Hotin seferi ve Hotin anlaşması — Hotin'in haritadaki yeri işaretlenmeli
7. Bağdat Safevilere kaybedilince Basra/Katif elde kaldı mı, ana karayla irtibat koptu mu (1623)
8. Kasrı Şirin anlaşması sınırları milim milim doğrulanmalı (1639, "çok önemli")
9. Azak kalesinin geri alınması maddesinde haritada hiçbir değişiklik olmuyor

### hatalar 6.docx (11 madde — 10 görsel)
1. Çanakkale bozgunu/Bozcaada-Limni kaybı — Biga yarımadasında da toprak kaybı görünüyor, Limni hâlâ kırmızı
2. Köprülü Mehmet Paşa'nın şartlı sadrazamlığı iki madde (mükerrer)
3. Çanakkale seferi/Bozcaada'nın geri alınması — Limni geri alındı mı karşıda mı kaldı
4. Kâtip Çelebi'nin ölümü iki madde (mükerrer)
5. 1657'de Yunanistan'da bazı bölümler boş — bozukluk mu tarihi gerçeklik mi
6. Yanova'nın fethi — Macaristan'daki içeri girinti yapan koridorun dibi daha önce fethedilmemiş miydi
7. Odea fethi/bölgesi için aynı soru — en başından beri fethedilmemiş miydi, büyüklük doğru mu
8. Saint Gothard muharebesinin haritada yeri belli değil
9. Lahsa kaybedilince Katif de mi gitti
10. Çehrin kalesi fethi ve Podolya fethi — gelen toprağın uzantısı doğru mu
11. Bahçesaray anlaşması ile Çehrin kalesi geri mi verildi

### hatalar 7.docx (7 madde — 6 görsel)
1. Kırım hanlığı bozkırı ve Kafkasya kuzeyi — 1650'lerde tam olarak hangi yapılar vardı
2. Parkan bozgunu/Estergon'un kaybı haritada görülmüyor
3. Solnok'un kaybı ve Tisa hattının çözülmesi haritada görünmüyor
4. II. Mohaç (Harşan) bozgunu — Erdel civarında kaybedilen topraklar doğru mu, madde başlığında yazmalı
5. IV. Mehmet'in tahttan indirilmesi mükerrer
6. Azak kalesinin kaybı — doğu yakasından büyük toprak parçası da mı gitti
7. "Ulaşi/Olaşin" zaferi nerede yaşandıysa gösterilmeli — genel kural: tüm savaş yerleri haritada gösterilsin

### hatalar 8.docx (8 madde — 8 görsel)
1. Karlofça antlaşması kaybedilen alanları doğrula + her ülkeye verilen toprağı ayrı renk/tarama ile göster (genel kural önerisi, milim milim doğrulama istekli)
2. Vehran'ın İspanyollardan alınışı — İspanya anakarasında kırmızı alan boyanmış, hata; üçgen girik yapı en baştan beri böyle miydi
3. Vehran'ın alınması maddesi mükerrer
4. Prut zaferi — sonrası alınan bölgeler tek maddede birden gösteriliyor
5. Rusya ile Edirne anlaşması — Boğdan'da küçük toprak Osmanlı'ya katılmış, neresi doğrula
6. İran seferi/Tiflis sonrası Şirvan alınmış ama enklav görünüyor
7. Hemedan anlaşması — batı İran'ın bırakılmasıyla Bakü/Dağıstan da geçmedi mi
8. Patrona Halil isyanı — İran'ın kocaman toprak koparması ayrı madde olmalı (Tebriz/Urmiye vs.)

### hatalar 9 .docx (14 madde — 6 görsel)
1. Patrona Halil isyanı başlangıcı iki madde (mükerrer)
2. Ahmet Paşa antlaşması/batı İran'ın iadesi — taralı gösterim (genel kural)
3. İstanbul anlaşması + Arpaçay bozgunu — taralı gösterim, milim milim doğrulama
4. Özi kalesinin Ruslara düşüşü haritada aksiyon yok
5. Banaluka zaferi/Bosna'nın kurtarılması haritada görünmüyor
6. Özi'nin geri alınması/Kırım'ın istiladan kurtarılması haritada yok
7. Hisarcık/Grocka zaferi haritada yok
8. Belgrad 1739 anlaşması kazançları kronolojide yazılmalı
9. Niş anlaşması — Belgrad tarafında kazanılan toprak kronolojide zikredilmeli
10. Musul savunması/Nadir Şah'ın püskürtülmesi oklarla animasyon
11. Kırım'ın Ruslar tarafından işgali/Kozluca bozgunu haritada yok
12. Küçük Kaynarca anlaşması — kaybedilen topraklar taralı gösterilmeli
13. Tüm anlaşmalar için ayrı madde + anlaşma hükümleri madde içinde olmalı (genel kural)
14. Basra'nın İran işgaline uğraması haritada görünmüyor

### hatalar 10 .docx (26 madde — 23 görsel, en yoğun dosyalardan)
1. Osmanlı sınırları kalın kırmızı çizgi + vassalları içine alan bir tık daha kalın çizgi (genel öneri)
2. Vasal kırmızı tonu — fark çok büyük, ayrı devlet gibi görünüyorlar
3. Kırım hanlığı bozkırı — kime bağlı, boş mu; taralı çizgi önerisi
4. Hotin/Bender/Kırım işgali gibi durumlarda Rus ordularını oklarla göster (genel kural önerisi)
5. Küçük Kaynarca anlaşması — Kırım'dan başka kayıp var mı
6. Basra'nın İran işgali — bu kadarcık mı etkiledi
7. Basra'nın İran işgalinden geri alınışı — bu kadarcık mı
8. Anapa kalesi/Kafkas savunma hattı — Osmanlı anakarasıyla birleşmiyor, denizden mi gidildi, Çerkezistan rengi/tarama önerisi
9. Osmanlı-Rus savaşlarında Rusların Eflak/Boğdan'a girip çıkması yeterince verilmiyor + ok gösterimi
10. Rusya İsmail kalesini "uçakla mı" aldı (Osmanlı toprağının üstünden geçerek) — Hotin kırmızı, Boğdan gibi pembe olmalı
11. Vehran İspanyollardan alındıysa rengi Cezayir (vasal) rengi olmalı; İspanya anakarasına da toprak sıçraması var — petek deniz aşırı olamaz kuralı
12. Napolyon'un Mısır işgali — deniz aşırı ok + Fransız rengi boyaması
13. Napolyon'un Mısır işgali sırasında Adriyatik'teki bölge (Preveze civarı) Venedik'ten Fransa'ya mı geçti — kronolojide yazılmalı
14. Napolyon'un Suriye ilerlemesi — oklar + taralı/Fransız rengi
15. Nelson'un donanmayı yakması + Napolyon'un Mısır'ı boşaltması ok ile
16. Vehhabilerin Mekke'yi fethi oklarla + Mekke haritada gösterilmeli
17. Mısır oldubittisi/Kavalalı Mehmet Ali'nin vali kabulü — Mısır'ın hukuki statüsü ne (bağlı devlet/eyalet/vasal); Eflak/Boğdan/Kırım/Hicaz/Cezayir/Tunus/Libya/Mısır'ın farklı statüleri etüt edilmeli (**uzun ve önemli genel soru**)
18. Vehhabilerin Mekke/Taif'i ele geçirmesi (1803), tekrar (1805 Medine, 1806 Mekke) — tarihler net değil, aksiyon net değil
19. Şehir noktaları bir kere konunca kalıyor, uzaktan bakınca karışıklığa sebep oluyor
20. Alemdar Mustafa Paşa'nın Rusçuk'tan İstanbul'a gelişi ok ile
21. Hanedan içi öldürmeler/mücadeleler madde madde gösterilmeli
22. Etkili valide sultanlar (Hürrem, Nurbanu, Safiye, Kösem) kronolojide özellikle gösterilmeli
23. Sohum'un Ruslara kaybı — bölge "Çerkezistan" yerine "Kırım bozkırı" görünüyor; Anapa kalesi ne zaman elden çıktı

### hatalar 11 .docx (62 madde — 41 görsel, **dosyanın tamamı kutuya hiç işlenmemiş**)
1. 1811 Tosun Paşa Yanbu'ya çıktı — Yanbu neresi belli değil; Vehhabi bölgesinde bir parça Osmanlı toprağı gerçek mi
2. Bükreş anlaşması/Besarabya'nın kaybı — Kafkasya'da da toprak kaybı var mı; Hotin de mi kaybedildi; savaşın başlangıcı/bozgunlar eksik
3. Belgrad ne zaman elden çıkmıştı ki geri alındı — kronolojide gösterilmeli
4. II. Sırp isyanı — ateş görseli haritada yok
5. Eflak isyanı (İpsilanti'nin harekâtı) haritada gösterilmiyor
6. Navarin baskını — müttefik donanmasını ok ile göster
7. Osmanlı-Rus savaşında Rusların ilerlemeleri detaylandırılmalı
8. Cezayir'in işgalinde Fransa'nın işgali nasıl oldu, detaylı kronoloji
9. Yunan isyanı — Mısır kuvvetleri/Rus-İngiliz-Fransız müdahaleleri detaylandırılmalı
10. Cezayir'in Fransa'ya kaybı detaylandırılmalı
11. Girit'in idaresi Mehmet Ali'ye bırakıldı — sadece orta bölüm boyası kalkıyor, tümü Mısır (vasal) rengine boyanmalı
12. Rus donanmasının Büyükdere'ye gelmesi ok ile
13. Mısır'ın Suriye'de ilerleyip Çukurova/Adana'yı alması — girintili çıkıntılı yapı normal mi
14. Şam'dan doğuya ve Halep'in kuzeydoğusundan Diyarbakır'a uzanan çıkıntılar normal mi
15. Bicaye işgali nerede oldu, haritada görünmüyor
16. Trablusgarp'ın merkeze bağlanması — Libya haritası kene/cetvelle çizilmiş gibi, normal mi
17. Cebeli Dürüz ayaklanması — Cezayir'den Fransa'ya bir parça geçmiş, hangi madde ile alakalı
18. Donanmanın İskenderiye'ye teslimi ok ile
19. Mısır valiliği Kavalalı ailesine ırsi bırakıldı — Arabistan'da Osmanlı nüfuz toprağı doğru mu; Mısır'ın güneyinde Kızıldeniz batısı toprak Osmanlı mı Mısır mı
20. Şehir isimleri harita büyütülünce birbirine giriyor — punto/etki alanı kuralı (genel, ayrıntılı öneri)
21. 1800'e gelindi, Söğüt/Domaniç/Karacahisar hâlâ görünüyor — eski yerleşimler önemini yitirince kaldırılmalı (Pelekanon örneği; İstanbul/Belgrad/Bükreş/Budin/Kudüs/Kahire/Edirne/Bursa kalıcı olabilir) — **6 dosyada tekrarlanan büyük genel kural, kutuda hiç yok**
22. Fransa Cezayir'i işgal ettikten sonra bile iç bölümler Osmanlı vasal pembesiyle gösteriliyor — hata mı
23. Yemen'de küçük noktalar Osmanlı idaresi — Kızıldeniz karşı kıyısı Osmanlı'ya mı Mısır'a mı bağlı
24. Şirket-i Hayriye kuruldu maddesinde Yemen'deki Osmanlı toprakları artıyor — kronolojide belirtilmeli
25. Sinop baskını kronolojide yok, eklenmeli
26. Tuggurt/tüm Cezayir'in elden çıkışı — elden çıkan bölge haritada gösterilmeli
27. Eflak/Boğdan'ın Romanya'nın ilk şeklini oluşturacak şekilde birleşmesi (Cuza) — o an hâlâ Osmanlı egemenliğinde mi; Boğdan vasal görünüyor Eflak görünmüyor, tutarsız
28. Romanya toprakları gerçekçi mi — Boğdan cetvelle çizilmiş gibi, topografyaya dayanmalı
29. Birleşik prensliklerin Romanya adını alması — Osmanlı'ya bağlı olsalar da kalın kırmızı çizgi içinde, vasal renginde gösterilmeli
30. Girit isyanı — ateş emojisiyle başlangıcı gösterilmeli, kronoloji genişletilmeli
31. Belgrad'da Osmanlı garnizonunun çekilmesi ok ile — geri çekilme/ileri seferi ayıran genel gösterim kuralı önerisi
32. Abdülaziz'in Avrupa seyahati adım adım (5-6 adım)
33. Asir'in doğrudan idareye alınması — körfezdeki hareketlilik ayrı madde
34. Lahsa'da hangi kısım direkt merkeze bağlı hangi kısım özerk, ayrıntılı belirtilmeli
35. Ali Paşa'nın 1871 vefatı iki madde görünüyor (mükerrer)
36. V. Murad'ın cülusu/hali ayrılmalı; dönem siyasi olayları (Beşiktaş muhafızı Hasan Paşa vb.) detaylandırılmalı
37. 93 Harbi'ne giden yol taşları kronolojide genişletilmeli
38. 93 Harbi safhaları — Yeşilköy'e gelen Rus ordusu adım adım gösterilmeli
39. 1800'ler sonunda Mısır'ın ortasındaki boşluk normal mi
40. Mısır'ın İngilizler tarafından işgali taralı alan olarak gösterilmeli
41. Mehdi devletiyle ilgili ilerlemeler haritada görünmüyor
42. İngiltere'nin Mısır/Kızıldeniz/Arabistan civarı faaliyetleri araştırılıp kronolojiye eklenmeli
43. Doğu Rumeli'nin Bulgaristan'a katılması haritada görünmüyor; 93 Harbi sonrası (Ayastefanos, Berlin, Romanya/Sırbistan bağımsızlığı) detaylandırılmalı
44. Berlin anlaşması sonrası harita tastamam doğru mu, adım adım teyit
45. Berlin sonrası Bulgaristan bağlı özerk devlet değil miydi, sınırlar doğru mu
46. Tunus işgali ve Düyun-ı Umumiye ayrı maddeler olmalı
47. Teselya'nın Yunanistan'a bırakılması/Dömeke savaşı görünmüyor, detaylandırılmalı
48. İtalya'nın Kızıldeniz'de işgali kronolojide belli değil
49. Fransa'nın Kızıldeniz'de toprak alması kronolojide yok
50. Bogos'un Habeşistan'a bırakılması — neresi olduğu haritada görünmüyor
51. Sana'nın geri alınması (önceden kaybedilmişti) haritada görünmüyor
52. Bulgaristan'ın bağımsızlığı/Bosna'nın ilhakı — önce Avusturya tarafından taralı işgal gösterilmeliydi
53. Arnavutluk isyanı ateş emojisiyle gösterilmeli
54. Trablusgarp savaşında İtalyan işgalleri adım adım gösterilmeli
55. Balkan savaşları — devletlerin işgal/savunma/tahliyeleri adım adım detaylandırılmalı
56. I. Balkan Savaşı'nda Çatalca'ya kadar kayıp teyit edilmeli
57. Balkan savaşları sonrası bu parçanın Osmanlı'da görünmesi hata — Edirne sadece bizde kaldı, teyit
58. Britanya'nın Basra'da ilerlemesi kronolojide yok
59. Sarıkamış/Kanal harekâtı oklarla + başarısızlık çarpı işaretiyle
60. I. Dünya Savaşı'nda her cephedeki olaylar madde madde detaylandırılmalı
61. Mondros'a kadar Irak/Filistin cephesi ilerlemesi gün gün; doğu cephesinde Rus ilerleme/geri çekilme, Ermeni işgali, Osmanlı'nın kurtardığı iller, savaş sonu Kafkasya ilerlemesi adım adım

### hatalar 12 .docx (7 kalan madde — 6 görsel; 4 madde §③'te ZATEN İŞLENMİŞ olarak sayıldı)
1. Başlangıçtaki iki toprak köşeden değil düzgün bağlanmalı (**benzer kusur `denetim/BITISIKLIK-2026-07-30.md`'de Oturum 2 tarafından ayrıca ölçülüp bulundu — ama Emre'nin BU sorusu kutuya hiç girmedi**)
2. İstanbul boğazının kuzey bölümünde harita kıyılara oturmuyor, boşluk var
3. Tuz gölü kıyılarına harita tam oturmamış
4. Osmanlının kuzeyinde boş bir toprak ortaya çıktı — sebebi araştırılmalı
5. Sakarya seferiyle Çanakkale boğazı tarafından bir ok görünüyor — Katalan akıncıların oku neden erken çıkıyor
6. Bursa/Edirne/İstanbul/Konya önemli, Söğüt/Karacahisar gibi yerler bir kez görünüp kalmamalı; harita zoom'una göre görünürlük (**genel kural, 6. dosyada tekrarı**)
7. Bursa/Edirne/İstanbul'un başkent oluşu kronoloji maddesi var mı

### hatalar 13 .docx (9 kalan madde — 8 görsel; 6 madde §③/④'te işlendi)
1. Genel kural: bir yerin fethinden bahsediliyorsa o yer/şehir haritada gösterilsin, konu bitince etiket kalksın
2. Varna alınıyor ama Varna etiketi haritada yok
3. Tüm toprak alımları şehir etiketleriyle noktalanmalı (genel kural)
4. Edremit/Erdek bölgesinde Osmanlı renkleri kalıyor — bozukluk var gibi
5. Timur'un yürüyüşü/İzmir fethi — ok gösterimi var ama madde ile senkron değil
6. Tacettinoğulları beyliği + Belgrad'ın Macaristan'a bırakılması aynı anda iki madde birden geçiyor
7. 1479 Arnavutluk/İşkodra ile birlikte İyonya adaları da alınıyor — madde/isim belirtilmeli
8. Zakintos Venedik'e bırakılırken Karadağ'da toprak alınıyor — kronolojide yok
9. *(Aydınoğulları müstakil oldu mu teyidi — Düzmece Mustafa maddesiyle aynı konu, §④'e dahil edildi)*

### hatalar 14 .docx (3 kalan madde — 5 görsel; 2 madde §③/④'te işlendi)
1. Olay başlıklarına tıklayınca detay penceresi ortada açılıyor, sağ altta açılması gerekmiyor muydu
2. Sapienza öncesi İnebahtı bölgesi arka planda "Venedik" yazıyor — o an Osmanlı'da değilse neden görünmüyor (madde farklı, sadece dönemi aynı Sapienza olayıyla)
3. Yavuz Diyarbakır/Urfa/Mardin fethederken aradaki Malatya/Ergani/Adıyaman civarı da fethedildi mi

### hatalar 15 .docx (35 madde — 20 görsel, **dosyanın tamamı kutuya hiç işlenmemiş**)
1. Mohaç ile Macaristan'ın Osmanlı himayesine girişi — ortada kırmızı bölge oluşmuş, Erdel vasal açık kırmızı doğru mu
2. Budin'in alınıp Zapolya'ya verilmesi — Viyana yürüyüş rotası kendi maddesinde gösterilmeli
3. Alman seferi/Küns kuşatması — kuşatılan Küns şehri gösterilmeli
4. 1538 Boğdan seferi/Bucak ve Bender ilhakı — kimden alınıyor, prenslik mi
5. 1541-1544 Macaristan fetihleri — yeşil görünen bölgeler gerçekten fethedilmemiş miydi (enklav/girinti + batı Macaristan parçası)
6. Lahsa/Katif ilhakı — anakaradan karasal kopukluk, aradaki toprak fethedilmemiş mi
7. Eflak voyvodalığı vasal — sınırların nerede başlayıp bittiği teyit edilmeli
8. Ferhatpaşa antlaşmasına giden savaşta ele geçen yerlerin kronolojisi gözden geçirilmeli
9. Ferhatpaşa sonrası harita — Nihavend/Urmiye taraflarının Osmanlı'ya verildiği şehir şehir kontrol edilmeli; barış anlaşmalarında diğer devlete verilen alanlar taralı gösterilmeli (genel kural)
10. Hotin — boğdan alımından sonra hâlâ yeşil (önceki sahibi) kalmış, hangi tarihte kime geçtiği araştırılmalı
11. Eflak topraklarının üçte biri açık kırmızı gerisi Osmanlı kırmızısı — hepsi Eflak değil mi
12. Kasrı Şirin anlaşması sınırları milim milim doğrulanmalı (dosya 5'in tekrarı)
13. Yanova ve Varad'ın fethi kimlerden olmuştur — Erdel'e mi aitti
14. Erdel/Eflak/Boğdan'ın üçünün birden Osmanlı'ya başkaldırdığı tarih kronolojide yok
15. Ortada açılan pencere sağ altta kronoloji sütununun altında açılıyordu, ne değişti (dosya 14'ün tekrarı)
16. Solnok'un kaybı haritada görünmüyor (dosya 7'nin tekrarı)
17. Hotin hep tek başına görünüyor — hangi tarihte kime bağlı olduğu tespit edilmeli
18. Kafkasların 1695'teki görünümü normal mi
19. Vahran/Oran/Merselkebir'in İspanyollardan alınışı küçük noktalarla — alanlar doğru mu
20. Vahran/Oran/Merselkebir alınışıyla İspanya anakarasına petek geçişi — "petek bölgesi denizaşırı olamaz" (uzun, ısrarlı ifade)
21. Ruslar ile Edirne anlaşması sonrasında Hotin bölgesi kırmızıya boyandı — hata mı, kronolojide bununla ilgili metin yok

### hatalar 16 .docx (10 madde — 11 görsel)
1. Şirvan/Gürcistan'a giriş (1723) — Şirvan kesimi enklav, diğer aradaki yerler geçti mi
2. Hemedan anlaşması/batı İran'ın katılması — girintili çıkıntılı harita milim milim teyit; Urmiye/Nahcıvan tarafı geçmedi mi
3. Hotin kalesi Ruslara nasıl terkediliyor — üst bölüm doğru mu
4. Basra'nın İran işgaline uğraması normal mi — verilen toprak bu kadar küçük mü; üçgen bölge bozukluk mu
5. Napolyon'un Mısır işgali haritada görünmüyor
6. Akka savunması haritada görünmüyor
7. Vehhabiler Mekke'yi ele geçirdi diye iki ayrı madde, iki kez farklı yerde aksiyon; Mekke/Medine/Taif sonrası ufak Osmanlı toprağı kalmış gibi
8. Sohum Ruslara kaybedildi ama Anapa hâlâ elde mi duruyor
9. Eflak isyanı ateş emojisiyle görünmüyor
10. Girit adası Kavalalı Mehmet Ali'ye bırakılırsa hepsi açık kırmızıya boyanmalı değil mi

### hatalar 17 .docx (20 kalan madde — 19 görsel; 11 madde §③/④'te işlendi)
1. Söğüt'le Domaniç birbirinden kopuk, arada ne var — gerçeklik mi hata mı; sınırlar coğrafi yapılara dayanıyor mu
2. İstanbul'un kuzeyi/boğazın Karadeniz tarafı boş — genel kural: tüm boş alanlar taranıp en yakın devlete/başka bir yapıya atanmalı
3. Biga yarımadası ucu (Behramkale) Ceneviz miydi; Midilli'deki Ceneviz alanının taşması olabilir mi — genel kural: deniz ötesi taşmalar araştırılmalı
4. Kilikya Ermeni Krallığı'nın doğusundaki sivri kıl yapının anlamı ne
5. Osmanlı devleti kuzeyinde sonradan ortaya çıkan boş alanın anlamı ne
6. Bu Ceneviz kolonisinin sınırları üçgen görünüyor, topografyaya dayanmalı
7. Dimetoka alınınca sınırlar ovalara/vadilere yayılan, cetvelle çizilmemiş olmalı
8. Katalan askerlerinin oku çıkması gereken maddeden önce çıkıyor; Mekece/Akhisar ötesinde boş alan bu maddeden sonra çıkıyor
9. Tam üç madde boyunca Katalan birlikleri seferi oku haritada gösteriliyor (uzun sürmesi sorunu)

### hatalar 18.docx (4 kalan madde — 7 görsel; 4 madde §③/④'te işlendi)
1. Edirne'nin alınmasında yukarı doğru uzayan bölgenin manası ne — bir dağ/nehir mi keser
2. 1362 Doğu Trakya'da ilerleyiş — en kuzeyde küçük bir parça var, hata mı; Edirne'nin doğu sınırı cetvelle çizilmiş gibi, hiçbir topografik unsurdan geçmiyor
3. Savoy Haçlı Seferi — deniz seferleri karadan geçemez, deniz yollarını kullanmalı (genel kural önerisi)
4. 1456-06-01 tarihli "Boğdan'ın haraca bağlanışı" maddesiyle ilgili bir ekran görüntüsü referansı var ama soru metni eksik/kesik kalmış — **içerik net değil, docx'te paragraf yarım kalmış olabilir**

---

## ④ Bitiş özeti (koordinatöre)

```
18 docx → 285 anlamlı paragraf (~250 tekil madde/soru olarak sayıldım)
ZATEN İŞLENMİŞ : 26   (kutuda cozuldu/zaten-dogru/tekrar hükmü almış)
AÇIK           : 14   (kutuda sirada/olculecek — sırada bekliyor)
🔴 HİÇ GÖRÜLMEMİŞ : ~210  (kutuda hiç karşılığı yok)
```

**En ağır üç bulgu:**
1. `hatalar 11 .docx` (62 madde, 19.yy Balkan/Mısır/1.Dünya Savaşı) ve
   `hatalar 15 .docx` (35 madde, 1526-1639 Macaristan/Kafkasya) **baştan sona kutuya
   hiç girmemiş** — tek başına HİÇ GÖRÜLMEMİŞ kovasının yarısı.
2. **6 ayrı dosyada tekrarlanan bir UI/veri kuralı** ("küçük yerleşim etiketi önemini
   yitirince kalksın") kutuya **hiç işlenmemiş** — hem `js/app.js` hem `data/` işi.
3. **Kaynak-eczane karışması bulundu:** `parti-kasa-0008/0009/0010` (8 madde, SUT ilaç
   listeleri) Atlas kutusuna karışmış — bu, CLAUDE.md §11'in *"ortak kanala özel mesaj
   koymak"* dersinin bir başka örneği; farklı proje ClaudEmre kutusuna sızmış.

Görsel adları çıkarılamadı (docx içi resimler madde numarasıyla eşlenmiyor) — istenirse
docx + resim sırası verilebilir, ayrı bir iş.
