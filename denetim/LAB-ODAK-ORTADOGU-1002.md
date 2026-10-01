# LAB-ODAK-ORTADOGU-1002: `kronoloji_cok_once1281_ortadogu.js` odaksız maddelerinde olay yeri

- Tarih: 2026-10-01 · Makine: EMRE (LAB) · Dal: `lab-odak-ortadogu-1002` (origin/main efaa19a7'den)
- Liste `arac/odak_olc.py` → `olc()` ile çıkarıldı. **Kalem sayısı 61, 71 değil** (şartnamede 71 yazıyor). Dosyada toplam 171 kayıt var, bunların 61'inde `yer_id` yok.
- Bu 61 kalemin 14'ü önceki partide (LAB-ODAK-YER-1001) bekletilen kayıtların aynısı: #18, #21, #24, #25, #26, #27, #38, #39, #41, #45, #46, #50, #55, #61. Hükümleri oradan alındı. #50'deki düzeltme (Zap Suyu) bu raporda uygulandı.
- Yöntem:
  1. **Alıntı denetimi.** Her kaydın `kaynak` alanındaki TDV alıntısı, ilgili TDV maddesinin `curl` ile indirilmiş ham metninde aranarak birebir doğrulandı (boşluk ve tırnak normalleştirmesi yapıldı, `…` ile bölünen parçalar ayrı ayrı arandı). **60 TDV alıntısının 60'ı ham metinde birebir var ✓.** #53'ün kaynağı TDV değil (Alwazzan 2015), okunmadı. #42'nin ikinci kaynağı (TDV `medine`) indirilmedi.
  2. **Yer tespiti.** Olay yeri yalnızca TDV ham metninde yazılıysa kabul edildi. Kaydın `yer` alanı tek başına kanıt sayılmadı.
  3. **Atlasta var mı?** `data/yerlesimler*.js` ve `bekleyen_*.js` dosyalarındaki 4.284 `ad` değerinde yalnızca adla arandı (koordinatlı tarama `Azez (A'zâz)` adını kaçırmıştı; ad taraması yakaladı).
- Kurallar: Arama özeti kullanılmadı. Çıkarım hüküm sayılmadı; çıkarım olan yerler ayrıca işaretlendi.

## Özet

**Koordinatör hükmünden sonraki son sayım** (ayrıntı en alttaki "KOORDİNATÖR HÜKMÜ" bölümünde):

| Sonuç | Adet | Kalemler |
|---|---|---|
| ① atlasta VAR | 7 | #6 Azez (A'zâz) · #33 · #38 · #47 · #55 · #57 Şam · #41 Zebîd (koordinatör kararı) |
| ② atlasta YOK | 28 | ayrıntı aşağıda (#9 → Nehrevan, koordinatör kararı) |
| ③ yersiz | 17 | #1 #2 #5 #11 #13 #15 #29 #35 #36 #40 #42 #43 #48 #51 #52 #53 #60 |
| bulunamadı | 3 | #28 #44 #54 |
| 🔴 `yer` alanı DAYANAKSIZ (odak kovasından çıkarıldı) | 6 | #4 #21 #27 #31 #34 #46 |

İlk teslimdeki sayım şuydu: VAR 8 · YOK 28 · yersiz 18 · bulunamadı 7. Aşağıdaki tablolar o sayımı gösteriyor; 6 kalemin yeni yeri en alttaki bölümde.

**Uygulanabilir (`yer_id` yazılabilir): 7.** Diğer 53 kalemde mekanik bir çare yok. 28'i için önce yeni bir nokta gerekiyor (o ayrı bir iş).

## ① Atlasta VAR (8)

| # | t | b (kısa) | yer_id | TDV dayanağı (birebir) |
|---|---|---|---|---|
| 6 | 1030 | Mirdâsîler Azâz yakınında Bizans'ı yendi | `Azez (A'zâz)` | mirdasiler: «Mirdâsîler, Azâz yakınında Bizans ordusunu yenilgiye uğratarak…» |
| 27 | 1122 | Josselin Belek'e esir düştü | `Suruç` | belek-b-behram: «…13 Eylül 1122'de … Josselin … Serûc yakınlarında mağlûp ve esir etti.» |
| 33 | 1148 | II. Haçlı Seferi Dımaşk'ı kuşattı | `Şam` | tugteginliler: «Kalabalık bir Haçlı ordusu 543'te (1148) şehri kuşattı.» (madde Dımaşk Atabegliği) |
| 38 | 1154-04-25 | Nûreddin Dımaşk'ı aldı | `Şam` | zengiler: «25 Nisan 1154'te Dımaşk'ı zapteden Nûreddin…» |
| 41 | 1174 | Turan Şah Yemen'i fethetti | `Zebîd` | turan-sah: «…Yemen'e girerek Zebîd'i kontrol altına aldı…». **Koordinatör kararı** (1001 #35): ilk alınan şehir. |
| 47 | 1193-03-04 | Selâhaddin Dımaşk'ta öldü | `Şam` | eyyubiler: «Selâhaddin 27 Safer 589 (4 Mart 1193) tarihinde Dımaşk'ta vefat etti.» |
| 55 | 1250 | el-Melikü'n-Nâsır Dımaşk'a hâkim oldu | `Şam` | sam--suriye: «…el-Melikü'n-Nâsır Yûsuf şehir halkının da çağrısıyla Dımaşk'ta hâkimiyeti sağladı (648/1250).» |
| 57 | 1260 | Ketboğa Dımaşk'ı teslim aldı | `Şam` | sam--suriye: «…Dımaşk da Moğollar'ın eline geçti (Rebîülevvel 658 / Mart 1260).» |

⚠️ #27: Kaydın `yer` alanı `"Urfa yöresi, Harput"`. TDV ise olay yerini **Serûc** olarak veriyor. Harput, Josselin'in hapsedildiği yer. Kaydın `yer` alanı düzeltilmeli.

## ② Atlasta YOK (28)

| # | t | Olay yeri (TDV) | Dayanak |
|---|---|---|---|
| 3 | 1029 | Rey | buveyhiler: «…Rey şehrine hâkim olarak Büveyhîler'in Cibâl koluna son verdi (1029).» |
| 7 | 1052 | Necdülcâh | suleyhiler: «…444'te (1052) Necdülcâh'ta yapılan savaşta yenildi ve maktul düştü» |
| 8 | 1058 | Zerâib | suleyhiler: «…Zerâib'de yapılan savaşta onu ve müttefiklerini mağlûp etti (450/1058).» |
| 9 | 1060 | Nehrevan | kaim-biemrillah: «…serbest bırakılan Kāim-Biemrillâh Nehrevan'da Tuğrul Bey tarafından karşılandı (Zilhicce 451 / Ocak 1060).» ⚠️ "Makamına döndü" ifadesi `Bağdat`'ı (atlasta var) düşündürüyor, ancak tarihli cümle Nehrevan'ı veriyor; Bağdat seçimi bir çıkarım olur. Karar koordinatörün. |
| 10 | 1067 | Mehcem yakınları | suleyhiler: «…Mehcem şehri yakınlarında … Saîd el-Ahvel'in saldırısına uğradı, … öldürüldü» |
| 12 | 1075-09-24 | Menbic | mirdasiler: «…Menbic'i geri aldı (10 Safer 468 / 24 Eylül 1075)» |
| 14 | 1085-06-20 | Kurzâhil | ukayliler: «Kurzâhil mevkiinde yapılan savaşta yenilerek öldürülen Müslim (24 Safer 478 / 20 Haziran 1085)…» |
| 16 | 1086-06-04 | Aynüseylem (Halep yakını) | selcuklular: «Halep yakınlarında Aynüseylem denilen yerde meydana gelen savaş…» |
| 17 | 1094-05-27 | Nehriseb'în (Tel Sultan yakını) | tutus: «…Halep'e yaklaşık 36 km. mesafedeki Tel Sultan'a (Rûyân köyü) yakın bir mevkide Nehriseb'în denilen yerde karşılaştı.» |
| 18 | 1095-02-25 | Dâşilû (Rey'e 72 km) | tutus (bkz. 1001 #25). `Tahran` kullanılmaz. |
| 19 | 1101-07-30 | Cebele | tugtegin: «…Cebele hâkimiyle yaptığı anlaşma neticesinde şehri teslim aldı (30 Temmuz 1101)» · ⚠️ Atlastaki `Cebeleyn` Sudan'da (12,6°K), Cebele değil. |
| 20 | 1104-05-07 | Harran | haclilar: «…Harran'ı ele geçirmek üzere çıktıkları seferde … yapılan savaşta (7 Mayıs 1104)…» ve «…1104 yılında Harran Savaşı'ndaki yenilgiden sonra…» |
| 22 | 1108 | Taberiye yakınları | tugtegin: «Taberiye yakınlarında yapılan savaşta Kont Gervaise … esir düştü (501/1108)» |
| 23 | 1108-03-04 | Nu'mâniye (Hille-Vâsıt arası) | mezyediler: «Hille-Vâsıt arasındaki Nu'maniye'de meydana gelen savaşta…» |
| 24 | 1111 | Şeyzer | seyzer (bkz. 1001 #27) |
| 25 | 1113-06-28 | Sınnebra Köprüsü | mevdud-b-altuntegin (bkz. 1001 #28) |
| 26 | 1119-06-28 | Tel İfrîn vadisi | ilgazi-necmeddin (bkz. 1001 #10/#11/#29; mükerrer hükmü orada) |
| 30 | 1135-06-24 | Dâymerc (Hemedan yakını) | mustersid-billah: «Hemedan yakınlarındaki Dâymerc'de yapılan savaş sırasında Müsterşid…». `Hemedan` atlasta var ama olay yeri değil. |
| 32 | 1138-04-29 | Şeyzer | seyzer: «…Ioannes Komnenos tarafından yine başarısızlıkla sonuçlanan bir kuşatmaya…» |
| 37 | 1153-08-19 | Askalân | kudus: «…19 Ağustos 1153'te Askalân'ı zaptetmesi…» |
| 39 | 1164-08-10 | Hârim | zengiler (bkz. 1001 #33) |
| 45 | 1187-07-04 | Hittîn | hittin-savasi (bkz. 1001 #36) |
| 49 | 1204 | Kefr-Zemmar (Musul yakını) | zengiler: «…büyük bir ordu Musul yakınlarındaki Kefr-Zemmar'da Musul atabegini yenilgiye uğrattı.» |
| 50 | 1219 | Zap Suyu kenarı | begteginliler: «İki ordu Zap Suyu kenarında Eylül 1219'da karşılaştı…» (1001 #38 bu bulguyla düzeltildi) |
| 56 | 1250 | Cened | resuliler: «Cened'de kendi memlüklerinin suikastına uğradığında (Zilkade 647 / Şubat 1250)…» |
| 58 | 1260 | Meyyâfârikîn (Silvan) | meyyafarikin: «Son Eyyûbî hükümdarı el-Melikü'l-Kâmil Nâsırüddin şehri büyük bir cesaretle savunduysa da…» |
| 59 | 1260-09-03 | Aynicâlût | eyyubiler: «…3 Eylül 1260'ta Aynicâlût'ta…» |
| 61 | 1279 | Zafâr | resuliler, zafar (bkz. 1001 #45) |

📌 En çok tekrarlanan eksik noktalar: **Şeyzer** (3 kalem: #24, #32 ve yersiz sayılan #29) ve Taberiye/Sınnebra/Hittîn üçlüsü (Taberiye çevresinde 3 olay). Yeni nokta açılacaksa bunlar öne alınabilir.

## ③ Yersiz (18)

| # | t | Gerekçe |
|---|---|---|
| 1 | 1012 | Ölüm ve ardından gelen bölünme; süreç. (`yer`: Irak, Fars) |
| 2 | 1018 | Ölüm ve halef; TDV ölüm yerini vermiyor. |
| 5 | 1030 | Toprağa saldırı ve terk etme; bölge (Merkezî Irak). |
| 11 | 1075 | Süreç: Suriye'nin kaybı. |
| 13 | 1084 | Yönetim devri; TDV ölüm yerini vermiyor (Zûcible başkent, ölüm yeri değil). |
| 15 | 1086 | Toprak kontrolü; bölge. |
| 29 | 1128 | Himaye (tâbiyet) kabulü; statü değişikliği. Tek nokta gerekiyorsa `Şeyzer` (atlasta yok). |
| 35 | 1150 | Tâbiyet: «Böylece Abak'ın atabegliği Nûreddin Mahmud'un tâbiiyetine girmiş oluyordu.» |
| 36 | 1150 | Bölge hâkimiyeti (Kuzey Yemen). |
| 40 | 1174 | Yedi ayrı yer (Harran, Nusaybin, Habur, Urfa, Suruç, Rakka, Cizre). |
| 42 | 1174 | İki şehir (Mekke ve Medine). Hutbe olayı. Tek nokta gerekiyorsa TDV alıntısı Mekke emîrini anıyor → `Mekke` (atlasta var). Karar koordinatörün. |
| 43 | 1174-10-12 | Sefer: «Dımaşk, Ba'lebek, Humus, Hama gibi önemli merkezleri kolaylıkla ele geçirdi.» #41'deki "ilk hedef" kuralı uygulanırsa ilk alınan yer `Şam` (Dımaşk'tan gelen davet üzerine). Karar koordinatörün. |
| 46 | 1192-09-01 | Antlaşma; TDV imza yerini vermiyor (bkz. 1001 #37). ⚠️ Kaydın `yer` alanında "Remle" yazıyor, ancak kaydın TDV dayanağında (eyyubiler) Remle geçmiyor. |
| 48 | 1195 | Bölge (Hûzistan ve bazı İran eyaletleri). |
| 51 | 1229 | Yönetimin devri (Yemen). |
| 52 | 1235 | Bağımsızlık ilânı; TDV yer vermiyor. |
| 53 | 1236 | Uvâl = Bahreyn adası; olay bütün adada. Atlasta `Manama (Bahreyn)` var, ancak kaynak şehir adı vermiyor. Kaynak TDV değil (Alwazzan 2015), **okunmadı**. |
| 60 | 1278 | Zeydîlere karşı başarı; bölge. |

## Bulunamadı (7): olay bir yerde geçmiş, ama okunan kaynak yeri vermiyor

| # | t | Durum |
|---|---|---|
| 4 | 1029 | mirdasiler savaşı ve günü veriyor («Savaş Fâtımî ordusunun zaferi ve Sâlih b. Mirdâs'ın ölümüyle sonuçlandı (Rebîülâhir 420 / Mayıs 1029).»), **yeri vermiyor**. Kaydın `yer` alanındaki "Ukhuvâne/Taberiye yöresi" kaynakta yok. |
| 21 | 1105-08-27 | tugtegin günü veriyor, yeri vermiyor (bkz. 1001 #26). Kaydın `yer` alanındaki "Remle yöresi" doğrulanmadı. |
| 28 | 1123 | mezyediler: «…Müsterşid-Billâh'a karşı girdiği mücadelede yenilerek Ca'ber Kalesi'ne kaçtı.» Ca'ber kaçılan yer, savaşın yeri değil. |
| 31 | 1135-09-25 | mezyediler öldürülmeyi ve günü veriyor, **yeri vermiyor**. Kaydın `yer` alanındaki "Merâga yöresi" kaynakta yok (`Merâga` atlasta var, ama dayanak yok). |
| 34 | 1149-06-28 | haclilar: «Raimond … Nûreddin ile yapılan savaşta öldü (1149)»; **İnab adı geçmiyor**. `inab` ve Nûreddin maddelerinin adreslerine ulaşılamadı. |
| 44 | 1175 | zengiler ve begteginliler savaşı veriyor («1175 yılında yapılan savaşta Selâhaddin'e mağlûp oldu»), yeri vermiyor. |
| 54 | 1247 | resuliler: «Nûreddin Ömer, 645 (1247) yılında … yeğeni Esedüddin Muhammed'i yendi.» Yer verilmiyor. |

## Denetim bulguları (`yer` alanı ile kaynağın uyuşmazlığı)
Kayıtların `yer` alanı 5 kalemde kendi kaynağının söylemediği bir yeri veriyor. Bu alan uygulamada `yer_id`'ye dönüştürülürse dayanaksız noktalar oluşur:
- #4 "Ukhuvâne/Taberiye yöresi" · #21 "Remle yöresi" · #31 "Merâga yöresi" · #34 "İnab Kalesi önü" · #46 "Remle": kaynakta yok.
- #27 "Urfa yöresi, Harput": kaynak **Serûc** diyor.
Bu yerler doğru olabilir (genel tarih bilgisiyle uyumlu görünüyorlar), ancak kaydın gösterdiği kaynakta yazmıyorlar. `§4` gereği dayanak sayılmazlar.

## Bulamadıklarım
- 7 kalemin olay yeri (yukarıdaki tablo).
- TDV'de Nûreddin Mahmud Zengî ve İnab maddelerinin adresleri (denenen adresler arama sayfasına düşüyor).
- #53'ün kaynağı (Alwazzan 2015): okunmadı. #42'nin TDV `medine` alıntısı: indirilmedi.
- 61 ile 71 arasındaki fark: `odak_olc` bu dosya için 61 veriyor. 71 sayısının nereden geldiği **ölçülemedi**.

## KOORDİNATÖR HÜKMÜ (1 Ekim 2026, YILDIRIM BAYEZIT)

### 🔴 `yer` alanı dayanaksız: 6 kalem odak kovasından ÇIKARILDI
Bu kalemlerde kaydın `yer` alanı, kaydın kendi gösterdiği kaynakla uyuşmuyor. Bu sınıf odak eksikliğinden daha ağır: `yer_id`'ye çevrilirse kusur veriden haritaya geçer. Koordinatör bunları ayrı bir kalem olarak ele alacak. **`yer` alanı düzeltilmeden hiçbiri `yer_id` olmayacak.**

| # | t | Kaydın `yer` alanı | Kaydın kaynağı ne diyor |
|---|---|---|---|
| 4 | 1029 | Suriye (Ukhuvâne/Taberiye yöresi) | TDV mirdasiler: savaş ve gün var, **yer yok** |
| 21 | 1105-08-27 | Remle yöresi (Filistin) | TDV tugtegin: gün var, **yer yok** |
| 27 | 1122 | Urfa yöresi, Harput | TDV belek-b-behram: **Serûc yakınları** (Harput hapis yeri). İlk teslimde VAR → `Suruç` yazmıştım; `yer` alanı düzelince uygulanabilir. |
| 31 | 1135-09-25 | Merâga yöresi | TDV mezyediler: öldürülme ve gün var, **yer yok** |
| 34 | 1149-06-28 | İnab Kalesi önü | TDV haclilar: «Nûreddin ile yapılan savaşta öldü (1149)», **İnab adı yok** |
| 46 | 1192-09-01 | Remle | TDV eyyubiler: antlaşma ve gün var, **Remle yok** |

### Kararlar
- **#9 → atlasta yok: Nehrevan.** `Bağdat` bir çıkarım olurdu ("makamına döndü" ⇒ makam Bağdat'ta). `§4` gereği çıkarım halka almaz. Kaydı çıpalayan tarihli TDV cümlesi Nehrevan diyor.
- **"İlk hedef" kuralı genelleştirilmez.** #41 (Zebîd) geçerliydi, çünkü TDV'nin kendisi "önce … Zebîd'i" diyordu: kaynak söyledi, biz seçmedik. Ölçüt: kaynak bir ilk hedefi **adlandırıyorsa** o alınır, adlandırmıyorsa "yersiz" yazılır.
  - **#43 → yersiz.** LAB'ın kontrolü: TDV eyyubiler «Dımaşk, Ba'lebek, Humus, Hama gibi önemli merkezleri kolaylıkla ele geçirdi» diyor. Bu bir **sayım**, "ilk" demiyor. "İlk alınan Dımaşk" ifadesi benim çıkarımımdı (Dımaşk'tan gelen davetten türetmiştim). Kaynak ilk hedefi adlandırmıyor.
  - **#42 → yersiz.** Kaynak Mekke ile Medine arasında bir "ilk" adlandırmıyor; Mekke'yi seçmek bizim tercihimiz olurdu.
- Ders: Bir kuralın bir vakada işe yaraması onu kural yapmaz. #41 bir kaynak alıntısıydı, bir yöntem değil.
