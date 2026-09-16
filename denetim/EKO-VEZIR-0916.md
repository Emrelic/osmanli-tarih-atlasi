# EKO-VEZIR — teslim raporu · 16 Eylül 2026

Koordinatör: 1.MURAT · paket: `parti-emrelic-0052` · dosya: `data/ekokuma_vezir.js`
(21 kart, `node --check` temiz, `node --eval` ile 21/21 kart id'si benzersiz ve
21/21 `olay:` tarihi `data/olaylar*.js`+`data/kronoloji*.js` içinde GERÇEKTEN
VAR OLAN bir `t:` değerine bağlanıyor — grep'le tek tek doğrulandı.)

## 0. Açılış hatası

Açılış promptumda "EKO-DUNYA" yazıyordu; DALGA-0052.md §2'deki tablo beni
"EKO-VEZIR" olarak listeliyordu. 1.MURAT bunu cross-session mesajla düzeltti.
`data/ekokuma_dunya.js`'e HİÇBİR ŞEY YAZMADIM (yalnız 20 dakikalık araştırma
yaptım — Yemen/Hürmüz/İpek Yolu/coğrafi keşifler/Kazak-Kazakh/Girit/Bozcaada
üzerine WebFetch/WebSearch — bu araştırma dosyaya hiç inmedi, kimseyi etkilemedi).
Düzeltme tahtaya M-3996 ile yazıldı.

## 1. Madde madde — 16 asıl madde, 21 kart

| Madde | Durum | Kart(lar) |
|---|---|---|
| H-0023 (Evliya Çelebi kişi kartı) | ✅ | `kimdir-evliya-celebi` |
| H-0026 (Evliya Çelebi eleştiri/tartışma) | ✅ | `tartisma-evliya-celebi-guvenilirlik` |
| H-0030 (idam edilen devlet adamları) | ✅ | `tartisma-idam-edilen-devlet-adamlari` + `kimdir-ahizade-huseyin-efendi` |
| H-0046 (Kasrışirin içi Kemankeş kartı zenginleştirme) | 🟡 kısmi — bkz. §2 | `kimdir-kemankes-mustafa-pasa` (BU dosyada, ayrı) |
| H-0059 (Kemankeş Mustafa Paşa fayda/ceza tartışması) | ✅ (H-0046 ile birleştirildi) | aynı kart |
| H-0060 (Gedik Ahmed Paşa) | ✅ | `kimdir-gedik-ahmed-pasa` |
| H-0061 (Sokullu Mehmed Paşa) | ✅ | `kimdir-sokullu-mehmed-pasa` |
| H-0062 (Pargalı İbrahim Paşa) | ✅ | `kimdir-pargali-ibrahim-pasa` |
| H-0063 (Rüstem Paşa + Koca Ragıp Paşa) | ✅ — DÜZELTMEYLE, bkz. §3 | `kimdir-rustem-pasa` + `kimdir-koca-ragib-pasa` |
| H-0064 (Çandarlı Mehmet Paşa'nın idamı) | ✅ — AD DÜZELTMESİYLE, bkz. §3 | `tartisma-candarli-halil-pasa-idami` |
| H-0065 (Nevşehirli Damad İbrahim Paşa) | ✅ | `kimdir-nevsehirli-damad-ibrahim-pasa` |
| H-0066 (Kuyucu Murad Paşa) | ✅ | `kimdir-kuyucu-murad-pasa` |
| H-0067 (Köprülüler) | ✅ — 3/aile, bkz. §4 | `kimdir-koprulu-mehmed-pasa` + `kimdir-koprulu-fazil-ahmed-pasa` + `kimdir-merzifonlu-kara-mustafa-pasa` |
| H-0068 (Mithat/Ali/Reşit Paşa) | ✅ | `kimdir-mustafa-resid-pasa` + `kimdir-ali-pasa-mehmed-emin` + `kimdir-midhat-pasa` |
| H-0073 (İpşir Mustafa Paşa "deyyus") | ✅ — sebep BULUNAMADI, bkz. §5 | `magazin-ipsir-mustafa-pasa-deyyus` |
| H-0080 (en başarılı 10 sadrazam) | ✅ — 11 isim, 2 isim EKSİK bkz. §6 | `tartisma-en-basarili-sadrazamlar` |

**16/16 madde ele alındı, 0/16 tamamen boş bırakıldı.**

## 2. H-0046 — dosya kapsamım dışında kaldı

`§7` gereği yalnız `data/ekokuma_vezir.js` + bu rapora yazabiliyorum.
Kemankeş Mustafa Paşa'nın "yetersiz" kartı ve anlaşma-hükümleri kartlarının
başlık sorunu `data/ekokuma_kasrisirin.js`de — o dosyanın sahibi ben değilim.
Kontrol ettim: o dosyadaki üç kart başlığı (`Zühâb ovasında üç gün` ·
`Kasr-ı Şirin'in hükümleri` · `Kurucu belge mi kurucu efsane mi`) zaten
ayrışık görünüyor; şikâyetin tam neye değdiği bu oturumdan görülemedi.
**İSTİYORUM:** o dosyanın sahibi (ya da koordinatör) H-0046'nın başlık
kısmını ayrıca değerlendirsin. Ben karşılığında BU dosyada TDV
`kemankes-mustafa-pasa` (gerçek slug — "kemankes-kara-mustafa-pasa" YOKTUR)
tam okunarak zengin bir biyografi kartı yazdım; H-0059 de bu karta işlendi.

## 3. İki düzeltme — kaynak, varsayımı çürüttü

- **H-0063**: "Rüstem Paşa ve Koca Ragıp Paşa ... idamları" diye soruyordu.
  TDV'nin kendi maddeleri ikisinin de TABİİ ÖLÜMLE öldüğünü yazıyor (Rüstem
  Paşa 12 Temmuz 1561 istiskadan, Ragıp Paşa 8 Nisan 1763 hastalıktan).
  Kartlara idam YAZILMADI, düzeltme her iki kartın `not:` alanında açıkça var.
- **H-0064**: "Çandarlı Mehmet Paşa" diye soruyordu; 1453'te idam edilen kişinin
  TDV'deki gerçek adı **Çandarlı Halil Paşa**'dır (babası İbrâhim Paşa). Kart
  bu adla yazıldı, `not:` alanında 14. yy'ın farklı bir Çandarlı Kara Halil'iyle
  karıştırılmaması gerektiği belirtildi.

## 4. H-0067 — üç isim, aile tam değil

Köprülü Mehmed Paşa, Fâzıl Ahmed Paşa ve Merzifonlu Kara Mustafa Paşa (damat/
yetiştirme) için tam kart yazıldı. Kullanıcının "ve diğer köprülü ailesinin
sadrazamları" dediği torun kuşağı (Amcazâde Hüseyin Paşa — Karlofça'yı
imzalayan — ve sonrakiler) yalnız Köprülü Mehmed Paşa kartının `not:`
alanında AD OLARAK anıldı, ayrı kart açılmadı (zaman kısıtı).

## 5. H-0073 — sebep BULUNAMADI

İpşir Mustafa Paşa'nın hayatı ve idamı TDV `ipsir-mustafa-pasa`dan tam
okundu. Ama "Deyyûs-i Ekber" lakabının SOMUT gerekçesi kaynakta açıkça
YAZMIYOR — kaynak yalnız lakabın varlığını aktarıyor. Uydurmadım,
`kesinlik:"tartismali"` + `not:` alanında "bulunamadı" diye kayıtlı.

## 6. H-0080 — 11 isim, 2 isim eksik

Emre'nin önerdiği listedeki **Mahmutpaşa** ve (Köprülüler dışındaki, ayrı bir
kişi olan) **Çandarlı Mehmed Paşa** için bu oturumda TDV doğrulaması
yapılamadı (zaman kısıtı; ikisi de arama denenmedi). Kart bu ikisi
OLMADAN yazıldı, `not:` alanında açıkça belirtildi. Kalan 11 isim
(Sokullu · Köprülü Mehmed · Fâzıl Ahmed · Kuyucu Murad · Kemankeş Mustafa ·
Koca Ragıp · Mustafa Reşid · Âli Paşa · Midhat · Pargalı İbrahim ·
Merzifonlu) TDV'den doğrulanmış somut icraatlarla yazıldı.

## 7. Kaynak yöntemi

Her isim için TDV slug'ı önce tahmin edildi, arama sayfası çıkarsa
(`ordu`/`saray` tuzağı, CLAUDE.md §4) gerçek href aranıp doğru sayfa
tekrar çekildi (ör. Pargalı İbrahim: `ibrahim-pasa--pargali` ÖLÜ,
gerçek slug `ibrahim-pasa-makbul`; Ragıp Paşa: `mehmed-pasa--ragib` ÖLÜ,
gerçek `ragib-pasa`; Fâzıl Ahmed: `fazil-ahmed-pasa` yönlendirme,
gerçek `kopruluzade-fazil-ahmed-pasa`; Kemankeş: `kemankes-kara-mustafa-pasa`
YOK, gerçek `kemankes-mustafa-pasa`). Alıntı yapılmadı, özetlendi.

## 8. Node testi

```
node --check data/ekokuma_vezir.js  → temiz
21 kart · 0 mükerrer id · 21/21 olay tarihi mevcut kronolojide doğrulandı
```

---

# EK BÖLÜM — İKİNCİ TUR: HARITA-VERI 99-131 (16 Eylül 2026, aynı gün ikinci sevk)

Kaynak: `oturumlar/DALGA-0052.md §2c` · `denetim/KUTU-AYIKLA-0916.md §④` (HARITA-VERI listesi, sıra no 99-131,
33 madde) · çıktı `denetim/YAMA-0052D-VEZIR-0916.json`. Veriye YAZILMADI (§7 — bu dosyalara yazma yetkim yok).

## 0. En önemli bulgu: çoğu iş ZATEN YAPILMIŞ

33 maddenin araştırması taranınca (grep + `PAKET-SINIF2-0914.json` çapraz eşleşme), **29 maddede araştırma
zaten mevcut** — çoğu 13-14 Eylül'de yapılmış ve `denetim/YAMA-*-0914.json` dosyalarında "öneri" olarak
bekliyor, bir kısmı da 14 Eylül'deki büyük "KOŞU 11 İNDİ" yayınıyla (commit `a4894b9`) **zaten veriye inmiş
ve canlı.** Bu oturum bu araştırmayı TEKRAR ÜRETMEDİ (D023: var olan araştırma yeniden yazılandan iyidir) —
her maddenin nerede durduğunu doğruladı ve tek bir durum dosyasında topladı.

## 1. Sayıyla (33/33 madde ele alındı)

```
✅ zaten çözüldü ve YAYINDA                    4   (99 Mersin · 114 Kırım bozkırı · 130 Bağdat · 128 motor kodu)
🟢 karara bağlanmış, yalnız UYGULA bekliyor     3   (124·125·126 — Ferhat Paşa E2-E8, Emre'nin kendi kararları)
🟡 öneri hazır, uygulama bekliyor              15   (100-109,111,113,118,123,127,129,131-kısmi)
✅ kapsam dışı (EK OKUMA), zaten yapılmış       3   (119·120·122)
🟡 kapsam dışı, MÜKERRER (EKO-PADISAH H-0048)   1   (121)
🔴 GERÇEK YENİ BULGU (bu oturumda ölçüldü)      1   (116 — Kaheti Krallığı kimliği YOK)
⚪ ölçülemedi (zaman kısıtı)                     2   (115-kısmi · 117)
```

## 2. En acil kalem: Ferhat Paşa (124, 125, 126)

`denetim/YAMA-FERHATPASA-EMRE5-0914.json` — Emre'nin 14 Eylül'de bizzat verdiği kararlarla TAMAMEN karara
bağlanmış (E1-E8), hiçbir açık soru kalmamış, yalnız "koşu 11 yayını bitince uygulanır" notuyla bekliyor.
**Koşu 11 ZATEN İndi** (commit `a4894b9`, 14 Eylül) ama bu üç madde o commit'in kendi mesajında hâlâ
"P01 inişleri — bu koşuda YOK" diye bekleyenler arasında sayılıyor. **İSTİYORUM:** UYGULA bu dosyayı öncelikli
alsın — üç günlük kararlı, kaynaklı, hazır bir yama koşu 12'yi beklemeden bile elle uygulanabilir durumda.

## 3. Gerçek yeni bulgu: Kaheti Krallığı (madde 116)

TDV `gurcistan` (bu oturumda okundu): "I. Alexandre'nin 1442 ölümünden sonra Gürcistan üç krallığa (**Kartli,
Kaheti, İmereti**) ... ayrıldı." Atlasta `gurcistan` (=Kartli, Tiflis) ve `imereti` (Kutaisi, v: 1555-1810)
var; **`kaheti` kimliği `data/devletler.js`de SIFIR KAYIT** (grep doğrulandı, 0 satır). Bu maddenin şikâyeti
("üçe bölündü diyor ama iki parça görünüyor") DOĞRU ve kaynaklı bir eksiği işaret ediyor. Kaheti'nin
tarihî merkezi Telavi'dir; bir Telavi noktası olup olmadığı bu oturumda ARANMADI (zaman kısıtı) —
**İSTİYORUM:** bir sonraki HARITA-VERI oturumu Telavi'yi arasın, yoksa yeni nokta + `kaheti` künyesi önersin.

## 4. Koordinatöre dört soru/istek

1. Madde 119, 120, 122 (savaş hikâyeleri · antlaşma hükümleri · mimari teknik kartları) **HARITA-VERI
   kapsamına hiç girmiyor** — üçü de EK OKUMA isteği ve üçü de zaten yapılmış (`ekokuma_savas3.js` ·
   `ekokuma_antlasma3.js` + `ANTLASMALAR` otomatik bağı · `ekokuma_mimari2.js`, hepsi P12-EKOKUMA, 14 Eylül).
   Bu üç maddeyi HARITA-VERI kutusundan düşürmenizi öneririm.
2. Madde 121 (padişah magazin/komplo kartları) bu dalganın **kendi H-0048 maddesiyle MÜKERRER**
   (EKO-PADISAH'a atanmış, şu an paralel çalışıyor). Teslim gelince mükerrer işaretlenmeli.
3. Madde 128 (Katar batısı görüntü bozulması) GERÇEKTEN bir motor/geometri kusuruydu, sahiplik araştırması
   gerekmiyordu — kod düzeltmesi zaten `arac/uret_petek.py`ye P13B Y7 ile girmiş, yalnız tam koşuyu bekliyor.
   GEOMETRI/MOTOR'un işiydi, HARITA-VERI'ye yanlış düşmüş (KUTU-AYIKLA'nın kendi itiraf ettiği sınıflama
   sezgisi hatası).
4. Madde 115 ve 117 zaman kısıtı yüzünden tam ölçülemedi — bir sonraki oturuma devredilmeli.

## 5. Dosyalar

```
YENİ   denetim/YAMA-0052D-VEZIR-0916.json   33/33 madde, durum + kaynak dosya + not (py ile JSON doğrulandı)
EK     denetim/EKO-VEZIR-0916.md            bu bölüm
```

---

# EK BÖLÜM 2 — DALGA-0053, maddeler H-0003 H-0004 H-0005 H-0006 H-0007 (16 Eylül gece)

Kaynak: `oturumlar/DALGA-0053.md`. Konu: II. Viyana Seferi (1683) — karar süreci, Merzifonlu'nun
Viyana'yı Yanıkkale'ye tercih etmesi, bozgunun sebepleri, Parkan'ın ikinci bozgunu, Merzifonlu'nun
idamı. `data/ekokuma_vezir.js`e **5 yeni kart** eklendi (toplam 21→26), `node --check` temiz,
26/26 id benzersiz, 5 yeni kartın 5'inin de `olay:` tarihi mevcut kronolojide doğrulandı.

**Ana kaynak:** Şuayp Ateş, "1075-1099/1664-1688 Tarihli Anonim Bir Esere Göre II. Viyana
Seferinde Sadrazam Kara Mustafa Paşa", *ETÜ Sosyal Bilimler Enstitüsü Dergisi* S.14 (Nisan
2022), s.203-221 — hakemli dergi makalesi, dergipark.org.tr üzerinden **tam metin PDF olarak
okundu** (WebFetch metin katmanını göremedi — "PDF metin çıkarılamıyor" dedi; `Read` aracıyla
aynı dosya sorunsuz okundu, D107'nin "metin çıkarılamadı ≠ belgede metin yok" tuzağının bu
oturumdaki tekrarı). Makale çağdaş bir kroniğin (Vekâyi-i Viyana, Çorum İl Halk Kütüphanesi
yazması) transkripsiyonuna dayanıyor ve doğrudan alıntılar taşıyor.

**Kapsam dışı bırakılan istek:** H-0003 ayrıca bir "kronoloji maddesi" istiyordu — bu benim
dosya yetkim dışında (`data/olaylar*.js`e yazamam), karta not olarak işlendi ve koordinatöre
bildiriliyor.

**Tek zayıf kaynaklı kart:** H-0006 (Parkan, 7-9 Ekim 1683) için TDV'de ayrıntı yok (yalnız
1663 sonrası ayrı bir olay var) ve akademik tekil kaynak bu oturumda bulunamadı; kurumsal bir
tarih portalı (Polish History / Lehistan Tarih Müzesi) kullanıldı, `kesinlik:"tartismali"`
işaretlendi, rakamlar (10.000 ölü) tek kaynaklı olduğu için ihtiyatla verildi.

**Bulunamayan iddia:** "İstanbul'da Merzifonlu'yu sevmeyenlerin göbek atması" — okunan
kaynaklarda yok, uydurulmadı.

---

# EK BÖLÜM 3 — DALGA-0054, maddeler H-0002 H-0009 H-0010 H-0012 (16 Eylül gece)

Kaynak: `oturumlar/DALGA-0054.md`. Yeni kural: yazmadan önce diğer `ekokuma_*.js`
dosyalarında aynı konu var mı bakıldı (grep ile) — "mezzomorto"/"azak"/"don-volga
kanal" hiçbir dosyada mükerrer çıkmadı, yalnız "Azak" adı iki dosyada (ekokuma_dunya,
ekokuma_rivayet) GEÇİYORDU ama "Rusya neden istedi" sorusunu ayrı işlemiyorlardı —
bu yüzden ayrı kart yazıldı, var olanlara ATIFLA, tekrarsız.

**H-0002** mükerrerdi (kendi dosyamda zaten vardı) — YENİ KART AÇILMADI, mevcut
`kimdir-koprulu-fazil-ahmed-pasa` kartı TDV'den yeniden okunarak genişletildi:
Saint Gotthard yenilgisi (1 Ağustos 1664) ile on beş gün sonraki elverişli Vasvar
Antlaşması (16 Ağustos 1664) arasındaki çelişki, Köprülü Kütüphanesi ve himaye
ettiği isimler (Nâbî, Hezarfen Hüseyin Efendi, Derviş Ali), ölüm sebebi (siroz,
3 Kasım 1676) eklendi.

**H-0009, H-0010** yeni kart (Mezemorta Hüseyin Paşa'nın lakabı — İtalyanca
"yarı ölü", gençlikte İspanyollarla savaşta aldığı yaradan; Azak'ın Rusya için
stratejik önemi — Karadeniz'e tek fiziksel çıkış kapısı).

**H-0012 — ÖNEMLİ DÜZELTME:** Madde "kronoloji maddemiz var mı" diye soruyordu.
CEVAP: **EVET, ZATEN VAR** — dört ayrı dosyada (`kronoloji_orta_asya.js`,
`kronoloji_kirim.js`, `kronoloji_rusya.js`) 1557 ve 1569 tarihli toplam beş
madde, mühendislik ayrıntısına kadar (arazi engebeli çıktı, Kırım hanının
yardımsızlığı, Nogayların desteksizliği) zaten yazılmış durumda. Bu yüzden
`denetim/YAMA-0054-VEZIR.json`'a YENİ BİR KRONOLOJİ ÖNERİSİ YAZILMADI (dosya
üretilmedi — önerilecek bir eksik yoktu). Yazılan tek şey, bu dört dağınık
maddeyi TEK bir sebep-sonuç ek okuma kartında birleştirmek oldu.

## Dosyalar
```
DEĞİŞTİ  data/ekokuma_vezir.js   26→29 kart (1 genişletme + 3 yeni), node --check temiz,
                                 29/29 id benzersiz, yeni kartların tüm olay tarihleri doğrulandı
YOK      denetim/YAMA-0054-VEZIR.json  ÜRETİLMEDİ — H-0012'nin öngördüğü eksik kronoloji
                                 maddesi zaten mevcut, önerilecek bir şey yoktu
```

---

# EK BÖLÜM 4 — DALGA-0055 Bölüm A, maddeler H-0003 H-0007 (16 Eylül gece)

Kaynak: `oturumlar/DALGA-0055.md` §A. Kontrol: Râmi Mehmed Efendi'nin adı üç
`ekokuma_*.js` dosyasında (ekokuma, ekokuma_antlasma2, ekokuma_rivayet) zaten
geçiyordu ama YALNIZ Karlofça/İstanbul 1700 görüşmelerindeki rolüyle — kendi
hayatı, sadrazamlığı, Edirne Vak'asındaki akıbeti hiçbirinde yoktu; mükerrer
sayılmadı, eksik kişi kartı yazıldı. "Kölemen" hiçbir dosyada geçmiyordu.

**H-0003** — `kimdir-rami-mehmed-pasa`: TDV `rami-mehmed-pasa` okundu. Çarpıcı
bulgu: Râmi Mehmed'i 1702'de bizzat sadrazam yapan Şeyhülislâm Feyzullah
Efendi'ye karşı, rivayete göre kendisi 1703'te bir askerî isyanı kışkırttı —
bu kıvılcım büyüyüp onu da makamından eden Edirne Vak'asına dönüştü. Edirne
Vak'asının kendisi bu dalgada EKO-PADISAH'a (H-0006) ait olduğu için burada
TEKRARLANMADI, yalnız Râmi Mehmed'in kişisel payına değinildi.

**H-0007** — `tartisma-bagdat-kolemenleri`: TDV `bagdat` + tamamlayıcı olarak
Britannica "Hasan Pasha" maddesi (TDV'nin vermediği Gürcü/Çerkes köle pazarı
ayrıntısı için, §4 taneciklik kuralı). Bağdat kölemenlerinin Mısır Memlükleri
ile TERS bir ilişkisi olduğu ortaya çıktı: Mısır'da bağımsız kurucu yöneticiler,
Bağdat'ta merkeze sadık resmî temsilciler — İstanbul'un tepkisi bu yüzden
tolerans oldu, bastırma değil.

## Dosyalar
```
DEĞİŞTİ  data/ekokuma_vezir.js   29→31 kart, node --check temiz, 31/31 id benzersiz,
                                 2 yeni kartın olay tarihleri mevcut kronolojide doğrulandı
```

---

# EK BÖLÜM 5 — DALGA-0056, maddeler 2a · 2c (16 Eylül gece, ACİL — 0055'ten önce)

Kaynak: `oturumlar/DALGA-0056.md`. Konu: Prut Seferi (1711) — Baltacı'nın barış kararı
tartışması ve Osmanlı'nın net kazanç sağlayamama sebebi. Kontrol: "Baltacı"/"Prut"
`ekokuma_savas.js`de zaten vardı ama o kart OLAYI anlatıyordu (savas-hikayesi türü),
TARTIŞMAYI değil — mükerrer sayılmadı, iki yeni "tartışma" kartı o karta atıfla,
olguları tekrarlamadan eklendi.

**2a** (`tartisma-baltaci-prut-firsat-mi-kacirdi`): iki görüş yan yana kondu —
çağdaş vak'anüvislerin (Silahdâr, Râşid) eleştirisi ("fırsatı kaçırdı") ile
Baltacı'nın Valide Sultan'a yazdığı mektuplardaki kendi savunması ("siyasi
kazanım imha savaşından akıllıcaydı"). Ana kaynak: Merve Karaçay Türkal'ın
hakemli makalesi (Selçuk Üniversitesi Selçuklu Araştırmaları Dergisi) — PDF
tam okundu. **Önemli ayrım bulundu:** makalenin asıl bulgusu, azlin aslında
"kaçırılan zafer"den çok saray içi güç dengesi (Valide Sultan'ın nüfuzu)
yüzünden olduğu; kart bu iki mekanizmayı (savaş meydanı eleştirisi ↔ saray
entrikası) ayrı ayrı işaretledi, karıştırmadı. Katerina-Baltacı rivayeti
BİLEREK işlenmedi (EKO-PADISAH'ın 2b maddesi).

**2c** (`tartisma-prut-net-kazanc-neden-saglanamadi`): var olan savaş-hikâyesi
kartının kendi sonuç cümlesini ("hükümler sürüncemede kaldı, ancak 1713'te
Edirne'yle bağlandı") YAPISAL SEBEPLERİYLE açıkladı — ordu serbest bırakıldı
(kaldıraç kalmadı), Baltacı azledildi (icra sürekliliği koptu), Çar hiç rehin
olmadı (ihlalin bedeli yoktu), saray içi çekişme dış politikada tutarlılığı
zorlaştırdı. Sonuç kesin (1713'te Osmanlı istediğini aldı) ama gecikmeli.

## Dosyalar
```
DEĞİŞTİ  data/ekokuma_vezir.js   31→33 kart, node --check temiz, 33/33 id benzersiz,
                                 2 yeni kartın olay tarihleri mevcut kronolojide doğrulandı
```
