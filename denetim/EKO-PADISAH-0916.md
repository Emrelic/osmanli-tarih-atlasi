# EKO-PADISAH — teslim raporu, 16-17 Eylül 2026 (DALGA-0052..0065 ekleri)

## DALGA-0065 (17 Eylül, yeni dosya — madde H-0002)

Madde: ünlü sözler/vecizeler. Yeni dosya `data/ekokuma_vecize.js` →
`window.EKOKUMA_VECIZE`, **4 kart** (magazin şeması, `baslik` zorunlu — DALGA-0064
kuralına uyuldu). node --check temiz, id çakışması yok.

- **Kanûnî'nin beyti** — TDV'nin kendi maddesinde birebir alıntı, sağlam.
- **III. Mustafa dörtlüğü** — hakemli bir akademik makaleyle (İsmail Avcı, 2021,
  İÜ Türk Dili ve Edebiyatı Dergisi) doğrudan doğrulandı; başka padişaha
  karıştırılma ihtimali arandı, bulunamadı.
- **Sokullu'nun "sakal-kol" sözü** — 🔴 paketin verdiği bağlam (1569-70 Astarhan/
  Don-Volga) YANLIŞ çıktı, araştırmayla düzeltildi: gerçek bağlam 1571-73
  İnebahtı-Kıbrıs. Sözün kendisi hiçbir kaynakta (TDV dahil) birincil kaynağa
  dayanmıyor — "rivayet" diye damgalandı.
- **Koca Ragıp Paşa'nın aslan benzetmesi** — tutumu (Rusya'ya karşı ihtiyat) TDV'de
  sağlam, ama sözün TAM METNİ hiçbir kaynakta kaynaklı değil — "rivayet".
  Ayrıca not: Ragıp Paşa'nın `data/kisiler.js`'te hiç kaydı yok — genuine bir
  eksiklik, koordinatöre bildirilir (EKO-VEZIR'in aynı dalgada Ragıp Paşa
  portresiyle ilgilenen maddesiyle örtüşüyor olabilir).

## DALGA-0056 eki (aynı oturum, yeni açılış yok — madde 2b + 3)

Maddeler: 2b (Prut rivayetleri: Katerina-Baltacı "aşkı"/rüşvet, aslı var mı) · 3 (I. Petro
kişi kartı → `denetim/YAMA-0056-KISI.json`). `data/ekokuma_padisah.js`'e 1 kart eklendi
(toplam **35 kart**).

- **2b** — Önce atlasın kendi 'sebep-sonuc-prut-1711' kartını (data/ekokuma_rivayet.js)
  bulup okudum, mükerrer yazmadım; yalnız RİVAYETİN kendisini derinlemesine sınadım.
  Sonuç üç katmanlı: aşk/cinsel ilişki iddiası hiçbir kaynakta yok; hediye/rüşvet
  hikâyesinin kendisini TDV'nin KENDİSİ 'efsane' diye damgalıyor; izlenebilen en eski
  yazılı iz (Voltaire, 18. yy) bile yalnız ikna/hediye anlatıyor, romantik unsur içermiyor.
- **3** — TDV'de I. Petro'nun müstakil maddesi yok (302 ölü); kapsayıcı 'rusya' maddesi
  denendi ve "Deli Petro" lakabının TDV'nin kendi terminolojisinde geçtiğini doğruladı.
  Detaylar (doğum/ölüm/Poltava/Prut/St. Petersburg) TDV'de bulunamadığı için Britannica'dan.

## DALGA-0055 eki (aynı oturum, yeni açılış yok — 0055 madde 6)

Maddeler: A.6 (Edirne Vakası 1703, Feyzullah Efendi, darbe etiketleri + genel darbe ek
okuması). `data/ekokuma_padisah.js`'e 2 kart eklendi (toplam **34 kart**). Konu atlasta
aranmış, çakışma bulunmadı (yeni).

- Feyzullah Efendi'nin oğluna şeyhülislamlığı miras bıraktıran fermanı TDV'nin kendi
  ifadesiyle 'emsalsiz' — tepkinin kaynağı buydu.
- Üç ayrı evre olduğu netleştirildi (17 Temmuz ayaklanma başlangıcı → 22 Ağustos hal' →
  3 Eylül Feyzullah'ın linci) — atlasın ana kaydı bunu tek gün gibi (1703-08-22) veriyor,
  bu kart üç günü de ayrı ayrı verdi.
- İkinci kart dokuz Osmanlı darbe/hal' vakasını (1622-1909) TDV'den tek tek doğrulayıp
  "siyasi darbe / askeri darbe" ayrımının TDV'nin KENDİ terminolojisinde olmadığını,
  akademik literatürde VAR ama standartlaşmamış olduğunu gösterdi; dokuz vaka saf
  askerî-tabandan ↔ karma ↔ saf siyasi-bürokratik diye bir spektrume yerleştirildi.

## DALGA-0054 eki (aynı oturum, yeni açılış yok)

Maddeler: H-0003 H-0008 H-0018. `data/ekokuma_padisah.js`'e 3 kart daha eklendi (toplam
**32 kart**). Talimata uyuldu: yazmadan önce her üç konuyu da atlasta arandı.

- **H-0003** (mâlikâne, diğer devletlerle kıyas) — mekanizma zaten `ekokuma_ekonomi.js` ve
  `ekokuma_kurum.js`'te vardı (ikisi de "uluslararası kıyas bulunamadı" diye not düşmüştü).
  Kart YALNIZ o boşluğu (Fransa Ferme Générale, İngiltere) hakemli bir iktisat tarihi
  makalesiyle (Johnson & Koyama, 2014) doldurdu, mekanizmayı tekrarlamadı.
- **H-0008** (II. Mustafa bizzat sefer) — TAM. Devlet ricalinin karara KARŞI ÇIKTIĞI, padişahın
  onları ikna etmek zorunda kaldığı TDV'den doğrulandı. 🔴 ÇAPRAZ BULGU: atlasın kendi
  `olaylar_ek7.js` kaydı "Osmanlı tarihinin bizzat sefere çıkan son sultanı" cümlesini TDV'ye
  atfediyor; bu oturumun bağımsız TDV okuması bu cümleyi BULAMADI (ve harici kaynaklarla da
  doğrulayamadı — Britannica 403, akademik kaynak yok). Taraf tutulmadı, ikisi de kayıtlı,
  `olaylar_ek7.js` sahibine bildirilir gerekiyor.
- **H-0018** ("alâ hâlihî" ilkesi — DALGA-0054'ün kendi H-0018'i, 0053'ün kafes maddesiyle
  KARIŞTIRILMASIN, iki ayrı pakette aynı numara) — TAM. Vasvar/Karlofça/Pasarofça'da tekrarlanan
  bir usul olduğu, Ziştovi'de ise TAM TERSİ mantığın (eski sınırlara dönüş) kullanıldığı
  doğrulandı; "uti possidetis" karşılığı akademik kaynaktan eklendi.

## DALGA-0053 eki (aynı oturum, yeni açılış yok — koordinatör talimatı)

Maddeler: H-0014 H-0019 H-0021. Dosyalar: `data/ekokuma_padisah.js`'e 3 yeni kart eklendi
(toplam **29 kart**), `denetim/YAMA-0053-KISI.json` yazıldı (`kisiler.js`'e YAZILMADI, CLAUDE.md §7).

- **H-0021** (II. Süleyman/II. Ahmed kafes hayatı) — TAM. TDV'nin çarpıcı rivayeti doğrulandı:
  II. Süleyman'ı almaya gelenleri celladı sanıp "iki rekât namaz kılayım" dediği. II. Ahmed'in
  kafes süresi TDV'de YOK — açıkça çıkarım diye damgalandı.
- **H-0019** (IV. Mehmed avcılık + hal) — TAM, 2 karta bölündü. 🔴 ÖNEMLİ METODOLOJİK BULGU:
  araştırma agentı WebFetch'in küçük modelinin "avcılık ile Köprülü vesayeti arasında TDV'de
  bağlantı YOK" dediğini, ama ham HTML'i elle okuyunca TDV'nin bunu AÇIKÇA kurduğunu buldu —
  CLAUDE.md §4'ün "küçük model özetine güvenme" kuralının somut bir doğrulaması.
- **H-0014** (kişi kartı genişletme) — 12 kişi seçildi (kısa "not" + en sık görünen, ölçülerek).
  TDV'de İKİ YENİ tuzak alt-sınıfı bulundu: `nevsehirli-damad-ibrahim-pasa` ve `ismail-i` HTTP
  200 dönüyor, başlık doğru, ama gövde yalnız tek cümlelik "bk." yönlendirmesi — CLAUDE.md §4'ün
  mevcut 8 tuzağının hiçbirine tam uymuyor, dokuzuncu bir alt-sınıf olarak eklenmesi önerilir.
  Ayrıca `sinan-pasa` slug'ının ARANAN kişiden (Koca Sinan Paşa) BAŞKA bir kişiye (15. yy
  âlim-vezir) ait olduğu tespit edildi — kayıt `koca-sinan-pasa`ya düzeltildi.

---

# DALGA-0052 raporu (asıl teslim)

## 🔴 Kimlik düzeltmesi (önce bu)

Açılışta yanlışlıkla EKO-DUNYA sandım — dört oturum (tahta M-3986/3988/3989/3990) aynı açılış
metniyle aynı hataya düştü. Koordinatör M-3997 + doğrudan çapraz-oturum mesajıyla düzeltti:
gerçek kimliğim EKO-PADISAH. `data/ekokuma_dunya.js`e yazdığım içerik (3 kart, commit edilmeden)
**silindi**. Bu rapor yalnız EKO-PADISAH işini kapsıyor. Kayıp yok — EKO-DUNYA için harcanan
araştırma zamanı (TDV taramaları) bu dosyaya taşınmadı, gerçek EKO-DUNYA oturumu kendi işini
yapıyor olmalı.

## Dosya

`data/ekokuma_padisah.js` — `window.EKOKUMA_PADISAH`, **26 kart**, `node --check` temiz,
id çakışması yok (dosya içi ve tüm `data/ekokuma_*.js` ile çapraz kontrol edildi).

## 🔴🔴 EN ÖNEMLİ BULGU — ağır mükerrerlik riski, kısmen önlendi

Araştırmaya başladıktan SONRA fark ettim: `data/ekokuma_ibrahim.js`, `data/ekokuma_hanedan.js`
ve `data/ekokuma_kadin.js` dosyaları, paketin istediği konuların BÜYÜK KISMINI zaten akademik
kaynaklarla (Volkan Çeribaş OTAM 2022, Bekir Gökpınar 2020, Baki Tezcan 2010) derinlemesine
işlemiş durumda:

| Benim maddem | Zaten var olan kart | Dosya |
|---|---|---|
| H-0050 (İbrahim cülus rivayeti) | `ibrahim-culus-iki-kez-bakti-1640` | ekokuma_ibrahim.js |
| H-0057 (Cinci Hoca) | `ibrahim-cinci-hoca-nefes-ve-dam-1642` | ekokuma_ibrahim.js |
| H-0057 (Hezarpâre) | `hezarpare-ahmed-pasa-bin-parca-1648` | ekokuma_ibrahim.js |
| H-0057 (Varvar Ali) | `varvar-ali-pasa-perihan-hanim-1648` | ekokuma_ibrahim.js |
| H-0004 (Nurbânû/Safiye) | `kimdir-nurbanu-sultan`, `kimdir-safiye-sultan` | ekokuma_kadin.js |
| H-0004/H-0005 (19 şehzade + Mahmud) | `sebep-sonuc-1595-on-dokuz-sehzade` | ekokuma_hanedan.js |

**Ne yaptım:** bu maddeler için YENİDEN yazmak yerine kartlarımı kısa ÖZET+`zincir` biçimine
indirdim (D097 "mükerrer iş" dersi). İki istisna, genuine katkı taşıdığı için tam kart olarak
kaldı:
- **H-0018** (Kızlarağası rivayeti) — mevcut kayıt yalnız "rivayet desteklenmiyor" diyordu; bu
  oturum Kızlarağası Mustafa Ağa'nın İKİ cülusta da (1617 VE 1622) somut, kendi çıkarını gözeten
  bir rolü olduğunu TDV'den YENİ olarak çıkardı — bu, "hiç rolü yok" ile "kilitleyen kişiydi"
  arasında üçüncü, daha doğru bir okuma.
- **H-0005 → "tartisma-sehzade-mahmud-tarih-bulgusu"** — mevcut kart Şehzade Mahmud'un (1603)
  ölüm gününü "TDV vermiyor" diye kaydetmişti; bu oturumun TDV taraması **27 Zilhicce 1011 / 7
  Haziran 1603** tarihini doğrudan TDV `mehmed-iii` gövdesinde buldu. Bu bir ÇAPRAZLIK —
  taraf tutmadım, ikisini de kayda geçirdim, `ekokuma_hanedan.js` sahibinin kontrol etmesini
  öneriyorum (dosya benim değil, CLAUDE.md §7).

⚠️ **Bu mükerrerlik taraması TAM DEĞİL** — yalnız araştırma sırasında rastladığım örtüşmeleri
yakaladım (grep ile id/konu araması yaptım ama sistematik bir "her padişah için var olan
içeriği önce oku" turu yapmadım, zaman kısıtı). Diğer 11 maddede benzer bir örtüşme olup
olmadığı ÖLÇÜLMEDİ.

## Madde madde durum

**H-0016** (I. Mustafa tuhaf davranışlar) — TAM. TDV'den (Feridun Emecen) "aklî dengesinin
bütünüyle bozulması", altın/balık rivayeti, koridor rivayeti doğrulandı; TDV'nin bunları
rivayet dilinde sunduğu vurgulandı.

**H-0017** (Genç Osman reform + amca tavrı + hac) — TAM, 3 karta bölündü. 🔴 ÖNEMLİ DÜZELTME:
paketin metni "amcasının 1.Mustafa'nın tahta çıkışına tavrı" ile "kardeşini öldürtmesi"ni
aynı cümlede anıyordu; TDV ikisinin AYRI olaylar olduğunu gösterdi (amcasını 1618'de indiren
Osman değil devlet ricaliydi; Osman'ın öldürttüğü kardeşi Şehzade Mehmed'dir, 1621). Ayrıca
TDV'nin kendisi Genç Osman'ın "reformcu" imajını 19-20. yy tarihçiliğinin ürettiği bir efsane
sayıyor — kart bunu saklamadı. Hac sorusu: TDV kategorik — HİÇBİR Osmanlı padişahı hacca
gitmedi (idari/askeri sebep, dinî değil).

**H-0018** (Kızlarağası rivayeti) — TAM, yukarıda anlatıldı.

**H-0045 + 51/H-0002** (şüpheli ölümler, 13 madde) — TAM, paketin kendi ⑬ maddesi birebir 13
ayrı karta bölündü ("madde madde ayrı ayrı yaz" talebine uyuldu). Kaynaklar paketin verdiği
TDV sluglarıyla örtüşüyordu, spot-check olarak `ibrahim--padisah` bağımsız çekildi ve
paketteki madde ⑫ (İbrahim'in katli) birebir doğrulandı.

**H-0048** (magazin→aile künyesi ayrımı) — YALNIZ AUDIT, kart YAZILMADI (aşağıda ayrıntı).

**H-0049** (lakap + sanat/zanaat) — 2 karta bölündü, 7 padişahın lakabı + 6 padişahın
mahlas/zanaatı. 🔴 ÖNEMLİ DÜZELTMELER: "Kanûnî" adı kendi döneminde YOKTU, 18. yy'da
(Cantemir) doğdu; "Yavuz" ise TERSİNE kendi sağlığında yerleşmişti (paketin varsaydığının
tersi); "Sarı/Sarhoş Selim" TDV'de hiç geçmiyor. ⚠️ TEYİT GEREKEN bulgu: II. Bayezid VE
II. Mahmud'a TDV'nin aynı "Adlî" mahlasını verdiği görüldü — çelişki değil ama alışılmadık,
ikinci kaynakla doğrulanmalı.

**H-0050** (İbrahim cülus rivayeti) — ÖZET+zincir (yukarıda). Bağımsız doğrulama: "ayaklarını
gıdıklama" ayrıntısı hiçbir ciddi kaynakta YOK — iki ayrı oturum birbirinden bağımsız aynı
sonuca vardı.

**H-0057** (İbrahim skandalları) — ÖZET+zincir (yukarıda). Samur vergisi kapsam dışı
bırakıldı (H-0071, EKO-RIVAYET'in maddesi — mükerrer önlendi).

**H-0058** (deli padişahlar) — TAM. Üç padişahın (I. Mustafa, İbrahim, V. Murad) TDV
anlatımı karşılaştırıldı. 🔴 TDV'nin İbrahim maddesinin KENDİSİ "Deli" lakabını 20. yy
tarihçiliğinin icadı sayıyor; V. Murad maddesi çağdaşlarının bile teşhise itiraz ettiğini
kaydediyor — "deli padişah" TDV'nin analitik kategorisi değil, halk kategorisi.

**H-0004** (Nurbânû/Safiye/çocuk sayısı) — ÖZET+zincir (yukarıda, ağır mükerrerlik bulundu).

**H-0005** (III. Mehmed'in oğlunu öldürtmesi) — ÖZET + tarih çapraz bulgusu (yukarıda).

**H-0074** (IV. Mehmed cülus ağlaması) — ARANDI, BULUNAMADI. TDV'de ve akademik kaynakta bu
rivayet yok; yalnız popüler/gazete siteleri (kullanılamaz, §4). Kart bunu olgu gibi sunmuyor,
"halk anlatısı, kaynağı bulunamadı" diye açıkça damgaladı.

## H-0048 — audit bulgusu, kart YAZILMADI

Paket "padişah magazin maddeleri içinde anne/baba/aile/çocuk/evlilik anlatan, aslında
magazin değil aile künyesi olması gereken içerik" tespit etmemi istiyordu. Taradım:

- Çekirdek kronoloji (`data/olaylar*.js`, `data/kronoloji*.js`): yalnız **4** `tur:"magazin"`
  kaydı var, hiçbiri aile/soy içerikli değil (kişisel tuhaflık/anekdot ağırlıklı).
- Ek okuma katmanı: **16** `tur:"magazin"` kart var (13'ü `ekokuma_ibrahim.js`, 2'si benim
  yazdığım `ekokuma_padisah.js`, 1'i `ekokuma_vezir.js`). Bunların İÇİNDE gerçekten
  aile/evlilik ağırlıklı olanlar: `ibrahim-telli-haseki-nikahi` (nikâh/düğün),
  `ibrahim-hasekiler-pasmaklik-eyaletler` (hasekiler listesi), `ibrahim-cocuk-yastaki-kizlar-damat-vezirler`
  (kızların evlendirilmesi), ve benim `magazin-nurbanu-safiye-murad-iii` kartım.

**Önerim (kart değil, karar gerektirir):** `EKOKUMA_TUR` sözlüğüne (`js/app.js:8444`, UI
sahipliğinde) yeni bir `"aile-kunyesi"` türü eklenmesi ve yukarıdaki 4 kartın `tur:` alanının
bu yeni türe çevrilmesi — ama bu hem `js/app.js` (benim yazamadığım dosya) hem başka
oturumların dosyalarına (`ekokuma_ibrahim.js`) dokunmayı gerektiriyor. **Bu oturum bunu
UYGULAMADI**, yalnız tesbit etti; karar ve uygulama koordinatörde/UI'da.

## Genel kaynak notu

Tüm kartlar TDV İslâm Ansiklopedisi'nden (bazı yerlerde akademik ikinci kaynak: Baki Tezcan
2010, Volkan Çeribaş 2022, Bekir Gökpınar 2020) — WebFetch ile sayfa HTML'i doğrudan çekilip
alıntı yapıldı, küçük model özetine güvenilmedi. Ölü slug tuzağı (`§4`) birkaç kez yakalandı:
`kanuni-sultan-suleyman`/`yavuz-sultan-selim`/`fatih-sultan-mehmed`/`yildirim-bayezid` hepsi
boş "bk." yönlendirmesi, gerçek adres roma rakamlı slug (`suleyman-i` vb.); `mahmud-ii` 302
ölü, doğrusu `mahmud-ii--osmanli`; `cinci-hoca` boş yönlendirme, doğrusu
`huseyin-efendi-cinci-hoca`.

Rakam/tarih bulunamayan her yerde ("100 çocuk", "ayaklarını gıdıklama", IV. Mehmed'in ağlaması)
açıkça `bulunamadı`/`rivayet, kaynağı bulunamadı` diye damgalandı, uydurulmadı.

## İstek

1. H-0048 için karar: yeni `tur` mü açılsın, yoksa mevcut haliyle mi kalsın?
2. `sehzade-mahmud` tarih çapraz bulgusu `ekokuma_hanedan.js` sahibine iletilsin.
3. Bu oturumdan sonra EKO oturumlarının açılış brifinginin (DALGA-0052.md üretimi) neden
   4 kez aynı hatayla çoğaldığı ayrıca incelenmeli — sistemik bir hata olabilir.
